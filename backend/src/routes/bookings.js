import { Hono } from 'hono';
import { db } from '../db/index.js';
import { bookings } from '../db/schema.js';
import { eq, and, ne } from 'drizzle-orm';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';

const bookingsRoute = new Hono();

const AVAILABLE_SLOTS = ['10:00', '14:00', '16:00', '18:00'];

const createBookingSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  track: z.string().min(1, 'Track is required'),
  date: z.string().min(1, 'Date is required'),
  time: z.string().min(1, 'Time is required'),
  notes: z.string().nullish(),
});

// Public or auth: get available slots for a date
bookingsRoute.get('/availability', async (c) => {
  const date = c.req.query('date');
  if (!date) {
    return c.json({ success: false, error: 'Date query parameter is required' }, 400);
  }

  const booked = await db
    .select({ time: bookings.time })
    .from(bookings)
    .where(and(eq(bookings.date, date), ne(bookings.status, 'cancelled')));

  const bookedTimes = new Set(booked.map((b) => b.time));
  const available = AVAILABLE_SLOTS.filter((slot) => !bookedTimes.has(slot));

  return c.json({
    success: true,
    data: {
      date,
      available,
      allSlots: AVAILABLE_SLOTS,
    },
  });
});

// Public or auth: create a booking
bookingsRoute.post('/', async (c) => {
  const body = await c.req.json();
  const result = createBookingSchema.safeParse(body);
  if (!result.success) {
    return c.json({
      success: false,
      error: 'Validation failed',
      details: result.error.flatten().fieldErrors,
    }, 400);
  }

  const { name, email, track, date, time, notes } = result.data;

  if (!AVAILABLE_SLOTS.includes(time)) {
    return c.json({ success: false, error: 'Selected time slot is not available' }, 400);
  }

  const existing = await db
    .select()
    .from(bookings)
    .where(and(
      eq(bookings.date, date),
      eq(bookings.time, time),
      ne(bookings.status, 'cancelled')
    ))
    .limit(1);

  if (existing.length > 0) {
    return c.json({ success: false, error: 'Time slot already booked' }, 409);
  }

  const userId = c.get('userId') || null;
  const now = new Date().toISOString();

  const [booking] = await db.insert(bookings).values({
    id: uuidv4(),
    userId,
    name,
    email,
    track,
    date,
    time,
    notes: notes || null,
    status: 'pending',
    createdAt: now,
    updatedAt: now,
  }).returning();

  return c.json({
    success: true,
    message: 'Booking request received',
    data: { booking },
  }, 201);
});

// Auth: get current user's bookings
bookingsRoute.get('/me', async (c) => {
  const userId = c.get('userId');
  if (!userId) {
    return c.json({ success: false, error: 'Unauthorized' }, 401);
  }

  const userBookings = await db
    .select()
    .from(bookings)
    .where(eq(bookings.userId, userId))
    .orderBy(bookings.date, bookings.time);

  return c.json({ success: true, data: { bookings: userBookings } });
});

export default bookingsRoute;
