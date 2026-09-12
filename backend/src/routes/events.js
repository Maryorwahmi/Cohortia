import { Hono } from 'hono';
import { db } from '../db/index.js';
import { communityEvents, eventRsvps } from '../db/schema.js';
import { eq, and } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import { createNotification } from '../lib/notifications.js';

const eventsRoute = new Hono();

// Public: list events
eventsRoute.get('/', async (c) => {
  const allEvents = await db.select().from(communityEvents).orderBy(communityEvents.date);
  return c.json({ success: true, data: { events: allEvents } });
});

// Auth: RSVP to an event
eventsRoute.post('/:id/rsvp', async (c) => {
  const userId = c.get('userId');
  if (!userId) {
    return c.json({ success: false, error: 'Unauthorized' }, 401);
  }
  const eventId = c.req.param('id');
  const body = await c.req.json();
  const status = body.status || 'going';

  if (!['going', 'maybe', 'cancelled'].includes(status)) {
    return c.json({ success: false, error: 'Invalid RSVP status' }, 400);
  }

  const [event] = await db.select().from(communityEvents).where(eq(communityEvents.id, eventId)).limit(1);
  if (!event) {
    return c.json({ success: false, error: 'Event not found' }, 404);
  }

  const now = new Date().toISOString();
  const [existing] = await db
    .select()
    .from(eventRsvps)
    .where(and(eq(eventRsvps.eventId, eventId), eq(eventRsvps.userId, userId)))
    .limit(1);

  if (existing) {
    await db
      .update(eventRsvps)
      .set({ status, updatedAt: now })
      .where(eq(eventRsvps.id, existing.id));
  } else {
    await db.insert(eventRsvps).values({
      id: uuidv4(),
      eventId,
      userId,
      status,
      createdAt: now,
      updatedAt: now,
    });

    // Increment RSVP count for new RSVPs
    await db
      .update(communityEvents)
      .set({ rsvpCount: communityEvents.rsvpCount + 1, updatedAt: now })
      .where(eq(communityEvents.id, eventId));
  }

  if (status === 'going') {
    await createNotification({
      userId,
      type: 'event',
      title: 'Event RSVP Confirmed',
      message: `You are confirmed for ${event.title}${event.date ? ` on ${event.date}` : ''}.`,
      link: event.roomLink || `/events/${eventId}`,
    });
  }

  return c.json({ success: true, message: 'RSVP updated' });
});

export default eventsRoute;
