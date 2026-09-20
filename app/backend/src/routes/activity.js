import { Hono } from 'hono';
import { db } from '../db/index.js';
import { userActivityLog } from '../db/schema.js';
import { eq, desc, sql, and, gte } from 'drizzle-orm';

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

// Return one canonical habit score per UTC day from persisted activity.
activity.get('/daily-summary', async (c) => {
  const userId = c.get('userId');
  const days = Math.min(Math.max(Number.parseInt(c.req.query('days') || '56', 10) || 56, 1), 366);
  const since = new Date(Date.now() - (days - 1) * 24 * 60 * 60 * 1000).toISOString();
  const logs = await db
    .select({ activityType: userActivityLog.activityType, createdAt: userActivityLog.createdAt })
    .from(userActivityLog)
    .where(and(eq(userActivityLog.userId, userId), gte(userActivityLog.createdAt, since)));

  const details = {};
  for (const log of logs) {
    const date = log.createdAt.slice(0, 10);
    const day = details[date] || { completedModule: false, practicedCoding: false, reviewedNotes: false };
    if (['lesson_completed', 'board_chapter_completed'].includes(log.activityType)) {
      day.completedModule = true;
    } else if (log.activityType === 'practical_completed') {
      day.practicedCoding = true;
    } else if (log.activityType === 'mentor_chat') {
      day.reviewedNotes = true;
    }
    details[date] = day;
  }

  const history = Object.fromEntries(Object.entries(details).map(([date, day]) => [
    date,
    Object.values(day).filter(Boolean).length,
  ]));

  const completedDates = Object.entries(history)
    .filter(([, score]) => score === 3)
    .map(([date]) => date)
    .sort();
  let streak = 0;
  const today = new Date().toISOString().slice(0, 10);
  for (let index = completedDates.length - 1; index >= 0; index -= 1) {
    const expected = new Date(`${today}T00:00:00.000Z`);
    expected.setUTCDate(expected.getUTCDate() - (completedDates.length - 1 - index));
    if (completedDates[index] !== expected.toISOString().slice(0, 10)) break;
    streak += 1;
  }

  return c.json({ success: true, data: { history, details, streak } });
});

export default activity;
