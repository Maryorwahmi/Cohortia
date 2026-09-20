import { Hono } from 'hono';
import { db } from '../db/index.js';
import { notifications } from '../db/schema.js';
import { eq, and, desc } from 'drizzle-orm';

const notificationsRoute = new Hono();

// List current user's notifications
notificationsRoute.get('/', async (c) => {
  const userId = c.get('userId');

  const items = await db
    .select()
    .from(notifications)
    .where(eq(notifications.userId, userId))
    .orderBy(desc(notifications.createdAt));

  return c.json({ success: true, data: { notifications: items } });
});

// Mark a notification as read
notificationsRoute.post('/:id/read', async (c) => {
  const userId = c.get('userId');
  const id = c.req.param('id');
  const now = new Date().toISOString();

  const [existing] = await db
    .select()
    .from(notifications)
    .where(and(eq(notifications.id, id), eq(notifications.userId, userId)))
    .limit(1);

  if (!existing) {
    return c.json({ success: false, error: 'Notification not found' }, 404);
  }

  await db
    .update(notifications)
    .set({ isRead: true, updatedAt: now })
    .where(eq(notifications.id, id));

  return c.json({ success: true, message: 'Notification marked as read' });
});

// Mark all notifications as read
notificationsRoute.post('/read-all', async (c) => {
  const userId = c.get('userId');
  const now = new Date().toISOString();

  await db
    .update(notifications)
    .set({ isRead: true, updatedAt: now })
    .where(eq(notifications.userId, userId));

  return c.json({ success: true, message: 'All notifications marked as read' });
});

// Delete a notification
notificationsRoute.delete('/:id', async (c) => {
  const userId = c.get('userId');
  const id = c.req.param('id');

  const [existing] = await db
    .select()
    .from(notifications)
    .where(and(eq(notifications.id, id), eq(notifications.userId, userId)))
    .limit(1);

  if (!existing) {
    return c.json({ success: false, error: 'Notification not found' }, 404);
  }

  await db
    .delete(notifications)
    .where(eq(notifications.id, id));

  return c.json({ success: true, message: 'Notification deleted' });
});

export default notificationsRoute;
