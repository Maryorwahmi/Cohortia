import { Hono } from 'hono';
import { db } from '../db/index.js';
import { newsletterSubscriptions, users } from '../db/schema.js';
import { eq } from 'drizzle-orm';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';

const newsletter = new Hono();

const subscribeSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().nullish(),
});

// Public: subscribe to newsletter
newsletter.post('/subscribe', async (c) => {
  const body = await c.req.json();

  const result = subscribeSchema.safeParse(body);
  if (!result.success) {
    return c.json({
      success: false,
      error: 'Validation failed',
      details: result.error.flatten().fieldErrors,
    }, 400);
  }

  const { email, name } = result.data;
  const normalizedEmail = email.toLowerCase().trim();

  const existing = await db
    .select()
    .from(newsletterSubscriptions)
    .where(eq(newsletterSubscriptions.email, normalizedEmail))
    .limit(1);

  if (existing.length > 0) {
    return c.json({
      success: true,
      message: 'You are already subscribed',
      data: { subscribed: true },
    });
  }

  const now = new Date().toISOString();
  await db.insert(newsletterSubscriptions).values({
    id: uuidv4(),
    email: normalizedEmail,
    name: name || null,
    subscribedAt: now,
    createdAt: now,
    updatedAt: now,
  });

  return c.json({
    success: true,
    message: 'Subscribed successfully',
    data: { subscribed: true },
  }, 201);
});

// Admin/auth: list subscribers
newsletter.get('/subscribers', async (c) => {
  const user = c.get('user');
  if (!user) {
    return c.json({ success: false, error: 'Unauthorized' }, 401);
  }
  if (user.role !== 'admin') {
    return c.json({ success: false, error: 'Forbidden' }, 403);
  }

  const subscribers = await db
    .select()
    .from(newsletterSubscriptions)
    .orderBy(newsletterSubscriptions.createdAt);

  return c.json({
    success: true,
    data: {
      count: subscribers.length,
      subscribers,
    },
  });
});

export default newsletter;
