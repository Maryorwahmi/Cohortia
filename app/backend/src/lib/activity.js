import { db } from '../db/index.js';
import { userActivityLog } from '../db/schema.js';
import { v4 as uuidv4 } from 'uuid';

export async function logActivity({ userId, activityType, entityId = null, metadata = null }) {
  if (!userId || !activityType) return;

  const now = new Date().toISOString();
  try {
    await db.insert(userActivityLog).values({
      id: uuidv4(),
      userId,
      activityType,
      entityId,
      metadata: metadata ? JSON.stringify(metadata) : null,
      createdAt: now,
    });
  } catch (error) {
    console.error('Failed to log activity:', error);
  }
}
