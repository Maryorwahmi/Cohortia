import { lt } from 'drizzle-orm';
import { db } from '../db/index.js';
import { rateLimitWindows } from '../db/schema.js';
import { consumeRateLimit } from './rateLimitStore.js';

const RATE_LIMIT_RETENTION_MS = 48 * 60 * 60 * 1000;
const RATE_LIMIT_CLEANUP_INTERVAL_MS = 6 * 60 * 60 * 1000;

let nextCleanupAt = 0;
let cleanupPromise = null;

export function getRateLimitClientIp(c) {
  const forwardedIp = c.req.header('cf-connecting-ip');
  if (forwardedIp) return forwardedIp.trim().slice(0, 128) || 'unknown';

  if (process.env.NODE_ENV === 'production' || process.env.RENDER === 'true') {
    return 'missing-cloudflare-client-ip';
  }

  return c.env?.incoming?.socket?.remoteAddress || 'local-unknown';
}

async function cleanExpiredRateLimitWindows(nowMs) {
  if (cleanupPromise) {
    await cleanupPromise;
    return;
  }
  if (nowMs < nextCleanupAt) return;

  cleanupPromise = db.delete(rateLimitWindows)
    .where(lt(
      rateLimitWindows.updatedAt,
      new Date(nowMs - RATE_LIMIT_RETENTION_MS).toISOString(),
    ))
    .then(() => {
      nextCleanupAt = nowMs + RATE_LIMIT_CLEANUP_INTERVAL_MS;
    });

  try {
    await cleanupPromise;
  } finally {
    cleanupPromise = null;
  }
}

export async function enforceRateLimits(c, limits) {
  const nowMs = Date.now();
  await cleanExpiredRateLimitWindows(nowMs);

  for (const limit of limits) {
    const result = await consumeRateLimit(db, {...limit, nowMs});
    if (!result.allowed) {
      c.header('Retry-After', String(result.retryAfterSeconds));
      return c.json({
        success: false,
        error: 'Rate limit exceeded. Please try again later.',
        retryAfterSeconds: result.retryAfterSeconds,
      }, 429);
    }
  }

  return null;
}
