import { Hono } from 'hono';
import { db } from '../db/index.js';
import { userActivityLog } from '../db/schema.js';
import { eq, desc, sql } from 'drizzle-orm';

const activity = new Hono();

// Get recent activity for current user
activity.get('/', async (c) => {
  const userId = c.get('userId');

  const logs = await db
    .select()
    .from(userActivityLog)
    .where(eq(userActivityLog.userId, userId))
    .orderBy(desc(userActivityLog.createdAt))
    .limit(50);

  const parsed = logs.map((log) => ({
    ...log,
    metadata: log.metadata ? JSON.parse(log.metadata) : null,
  }));

  return c.json({ success: true, data: { activity: parsed } });
});

// Get activity stats for current user
activity.get('/stats', async (c) => {
  const userId = c.get('userId');

  const rows = await db
    .select({
      activityType: userActivityLog.activityType,
      count: sql`COUNT(*)`.as('count'),
    })
    .from(userActivityLog)
    .where(eq(userActivityLog.userId, userId))
    .groupBy(userActivityLog.activityType);

  const stats = {};
  for (const row of rows) {
    stats[row.activityType] = Number(row.count);
  }

  return c.json({ success: true, data: { stats } });
});

export default activity;
