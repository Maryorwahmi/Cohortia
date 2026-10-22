import crypto from 'node:crypto';
import { sql } from 'drizzle-orm';
import { rateLimitWindows } from '../db/schema.js';

export async function consumeRateLimit(database, {
  scope,
  actor,
  limit,
  windowSeconds,
  nowMs = Date.now(),
}) {
  if (!scope || typeof scope !== 'string' || typeof actor !== 'string' || !actor
    || !Number.isInteger(limit) || limit < 1
    || !Number.isInteger(windowSeconds) || windowSeconds < 1
    || !Number.isFinite(nowMs)) {
    throw new TypeError('Invalid rate-limit parameters.');
  }

  const windowMs = windowSeconds * 1000;
  const windowStart = Math.floor(nowMs / windowMs) * windowMs;
  const key = crypto.createHash('sha256')
    .update(`${scope}:${windowSeconds}:${actor}`, 'utf8')
    .digest('hex');
  const updatedAt = new Date(nowMs).toISOString();
  const [record] = await database
    .insert(rateLimitWindows)
    .values({key, windowStart, requestCount: 1, updatedAt})
    .onConflictDoUpdate({
      target: rateLimitWindows.key,
      set: {
        windowStart,
        requestCount: sql`CASE
          WHEN ${rateLimitWindows.windowStart} = ${windowStart}
          THEN MIN(${rateLimitWindows.requestCount} + 1, ${limit + 1})
          ELSE 1
        END`,
        updatedAt,
      },
    })
    .returning({
      windowStart: rateLimitWindows.windowStart,
      requestCount: rateLimitWindows.requestCount,
    });

  if (!record) {
    throw new Error('Rate-limit counter update did not return a record.');
  }

  return {
    allowed: record.requestCount <= limit,
    retryAfterSeconds: Math.max(
      1,
      Math.ceil((record.windowStart + windowMs - nowMs) / 1000),
    ),
  };
}
