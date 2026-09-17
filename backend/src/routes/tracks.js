import { Hono } from 'hono';
import { db } from '../db/index.js';
import { tracks, progress, enrollments, lessons } from '../db/schema.js';
import { eq, and } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import { authMiddleware } from '../middleware/auth.js';

const tracksRoute = new Hono();
const LESSONS_CACHE_TTL_MS = 300_000;
const lessonsCache = new Map();

// Get all tracks
tracksRoute.get('/', async (c) => {
  const allTracks = await db.select().from(tracks);
  
  return c.json({
    success: true,
    data: { tracks: allTracks },
  });
});

// Get track by ID
tracksRoute.get('/:id', async (c) => {
  const id = c.req.param('id');
  
  const track = await db
    .select()
    .from(tracks)
    .where(eq(tracks.id, id))
    .limit(1);

  if (track.length === 0) {
    return c.json({ success: false, error: 'Track not found' }, 404);
  }

  return c.json({ success: true, data: { track: track[0] } });
});

// Get lessons for a track
tracksRoute.get('/:id/lessons', async (c) => {
  const id = c.req.param('id');

  const track = await db
    .select()
    .from(tracks)
    .where(eq(tracks.id, id))
    .limit(1);

  if (track.length === 0) {
    return c.json({ success: false, error: 'Track not found' }, 404);
  }

  const cached = lessonsCache.get(id);
  const trackLessons = cached && cached.expiresAt > Date.now()
    ? cached.lessons
    : await db
      .select()
      .from(lessons)
      .where(eq(lessons.trackId, id))
      .orderBy(lessons.order);

  if (!cached || cached.expiresAt <= Date.now()) {
    lessonsCache.set(id, { lessons: trackLessons, expiresAt: Date.now() + LESSONS_CACHE_TTL_MS });
  }

  return c.json({
    success: true,
    data: { track: track[0], lessons: trackLessons },
  });
});

// Enroll in a track (protected)
tracksRoute.use('/:id/enroll', authMiddleware);
tracksRoute.post('/:id/enroll', async (c) => {
  const userId = c.get('userId');
  const trackId = c.req.param('id');

  const track = await db
    .select({id: tracks.id})
    .from(tracks)
    .where(eq(tracks.id, trackId))
    .limit(1);

  if (track.length === 0) {
    return c.json({ success: false, error: 'Course is not available for learning yet' }, 404);
  }

  // Check if already enrolled
  const existing = await db
    .select()
    .from(enrollments)
    .where(and(eq(enrollments.userId, userId), eq(enrollments.trackId, trackId)))
    .limit(1);

  if (existing.length > 0) {
    return c.json({ success: false, error: 'Already enrolled in this track' }, 409);
  }

  const now = new Date().toISOString();

  await db.insert(enrollments).values({
    id: uuidv4(),
    userId,
    trackId,
    status: 'active',
    enrolledAt: now,
    updatedAt: now,
  });

  return c.json({
    success: true,
    message: 'Enrolled successfully',
  });
});

// Get user's enrolled tracks (protected)
tracksRoute.use('/user/enrolled', authMiddleware);
tracksRoute.get('/user/enrolled', async (c) => {
  const userId = c.get('userId');

  const userEnrollments = await db
    .select()
    .from(enrollments)
    .where(eq(enrollments.userId, userId));

  return c.json({
    success: true,
    data: { enrollments: userEnrollments },
  });
});

export default tracksRoute;
