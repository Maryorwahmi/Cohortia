import { Hono } from 'hono';
import { db } from '../db/index.js';
import { studyRooms, studyRoomParticipants } from '../db/schema.js';
import { eq, and, desc } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';
import jwt from 'jsonwebtoken';

const rooms = new Hono();

const roomSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().optional(),
  category: z.string().min(1, 'Category is required'),
  topic: z.string().min(1, 'Topic is required'),
  maxParticipants: z.number().int().min(1).max(100).optional(),
});

async function optionalAuth(c, next) {
  const authHeader = c.req.header('Authorization');
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.replace('Bearer ', '');
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'cohortia-dev-secret');
      c.set('userId', decoded.userId);
    } catch {
      c.set('userId', null);
    }
  } else {
    c.set('userId', null);
  }
  await next();
}

async function requireAuth(c, next) {
  const userId = c.get('userId');
  if (!userId) {
    return c.json({
      success: false,
      error: 'Unauthorized',
      message: 'Authentication is required',
    }, 401);
  }
  await next();
}

// GET /community/rooms
rooms.get('/rooms', optionalAuth, async (c) => {
  const roomsList = await db
    .select()
    .from(studyRooms)
    .where(eq(studyRooms.isActive, true))
    .orderBy(desc(studyRooms.activeParticipants));

  return c.json({ success: true, data: { rooms: roomsList } });
});

// GET /community/rooms/:id
rooms.get('/rooms/:id', optionalAuth, async (c) => {
  const roomId = c.req.param('id');

  const room = await db
    .select()
    .from(studyRooms)
    .where(eq(studyRooms.id, roomId))
    .limit(1);

  if (room.length === 0) {
    return c.json({ success: false, error: 'Room not found' }, 404);
  }

  const participants = await db
    .select()
    .from(studyRoomParticipants)
    .where(eq(studyRoomParticipants.roomId, roomId));

  return c.json({
    success: true,
    data: {
      room: room[0],
      participantCount: participants.length,
    },
  });
});

// POST /community/rooms
rooms.post('/rooms', optionalAuth, requireAuth, async (c) => {
  const userId = c.get('userId');
  const body = await c.req.json();

  const result = roomSchema.safeParse(body);
  if (!result.success) {
    return c.json({
      success: false,
      error: 'Validation failed',
      details: result.error.flatten().fieldErrors,
    }, 400);
  }

  const now = new Date().toISOString();
  const room = await db
    .insert(studyRooms)
    .values({
      id: uuidv4(),
      name: result.data.name,
      description: result.data.description || '',
      category: result.data.category,
      topic: result.data.topic,
      hostUserId: userId,
      activeParticipants: 0,
      maxParticipants: result.data.maxParticipants || 20,
      isActive: true,
      createdAt: now,
      updatedAt: now,
    })
    .returning();

  return c.json({ success: true, data: { room: room[0] } }, 201);
});

// POST /community/rooms/:id/join
rooms.post('/rooms/:id/join', optionalAuth, requireAuth, async (c) => {
  const userId = c.get('userId');
  const roomId = c.req.param('id');
  const now = new Date().toISOString();

  const room = await db
    .select()
    .from(studyRooms)
    .where(eq(studyRooms.id, roomId))
    .limit(1);

  if (room.length === 0) {
    return c.json({ success: false, error: 'Room not found' }, 404);
  }

  if (room[0].activeParticipants >= room[0].maxParticipants) {
    return c.json({ success: false, error: 'Room is full' }, 400);
  }

  const existing = await db
    .select()
    .from(studyRoomParticipants)
    .where(and(eq(studyRoomParticipants.roomId, roomId), eq(studyRoomParticipants.userId, userId)))
    .limit(1);

  if (existing.length === 0) {
    await db.insert(studyRoomParticipants).values({
      id: uuidv4(),
      roomId,
      userId,
      joinedAt: now,
    });
    await db
      .update(studyRooms)
      .set({ activeParticipants: studyRooms.activeParticipants + 1, updatedAt: now })
      .where(eq(studyRooms.id, roomId));
  }

  const updatedRoom = await db
    .select()
    .from(studyRooms)
    .where(eq(studyRooms.id, roomId))
    .limit(1);

  return c.json({
    success: true,
    data: {
      room: updatedRoom[0],
      joined: true,
    },
  });
});

// POST /community/rooms/:id/leave
rooms.post('/rooms/:id/leave', optionalAuth, requireAuth, async (c) => {
  const userId = c.get('userId');
  const roomId = c.req.param('id');
  const now = new Date().toISOString();

  const room = await db
    .select()
    .from(studyRooms)
    .where(eq(studyRooms.id, roomId))
    .limit(1);

  if (room.length === 0) {
    return c.json({ success: false, error: 'Room not found' }, 404);
  }

  const existing = await db
    .select()
    .from(studyRoomParticipants)
    .where(and(eq(studyRoomParticipants.roomId, roomId), eq(studyRoomParticipants.userId, userId)))
    .limit(1);

  if (existing.length > 0) {
    await db.delete(studyRoomParticipants).where(eq(studyRoomParticipants.id, existing[0].id));
    await db
      .update(studyRooms)
      .set({
        activeParticipants: room[0].activeParticipants > 0 ? room[0].activeParticipants - 1 : 0,
        updatedAt: now,
      })
      .where(eq(studyRooms.id, roomId));
  }

  const updatedRoom = await db
    .select()
    .from(studyRooms)
    .where(eq(studyRooms.id, roomId))
    .limit(1);

  return c.json({
    success: true,
    data: {
      room: updatedRoom[0],
      left: true,
    },
  });
});

export default rooms;
