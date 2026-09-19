import { db } from '../db/index.js';
import { notifications } from '../db/schema.js';
import { v4 as uuidv4 } from 'uuid';

export async function createNotification({ userId, type, title, message, link = null }) {
  if (!userId || !type || !title || !message) return null;

  const validTypes = ['system', 'achievement', 'mention', 'event', 'mentor'];
  if (!validTypes.includes(type)) return null;

  const now = new Date().toISOString();
  try {
    const [notification] = await db.insert(notifications).values({
      id: uuidv4(),
      userId,
      type,
      title,
      message,
      link,
      isRead: false,
      createdAt: now,
      updatedAt: now,
    }).returning();
    return notification || null;
  } catch (error) {
    console.error('Failed to create notification:', error);
    return null;
  }
}
