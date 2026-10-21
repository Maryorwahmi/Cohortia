import crypto from 'node:crypto';
import {and, eq, gt, isNull, lt, sql} from 'drizzle-orm';
import {db} from '../db/index.js';
import {userActionTokens} from '../db/schema.js';
import {v4 as uuidv4} from 'uuid';

const MAX_ACTION_ATTEMPTS = 5;

function hashToken(token) {
  return crypto.createHash('sha256').update(token).digest('hex');
}

export async function createUserActionToken(userId, action, lifetimeSeconds, replaceExisting = false) {
  const token = crypto.randomBytes(32).toString('base64url');
  const now = new Date();
  const nowIso = now.toISOString();

  await db.delete(userActionTokens).where(and(
    eq(userActionTokens.userId, userId),
    replaceExisting
      ? eq(userActionTokens.action, action)
      : lt(userActionTokens.expiresAt, nowIso),
  ));
  await db.insert(userActionTokens).values({
    id: uuidv4(),
    userId,
    action,
    tokenHash: hashToken(token),
    attempts: 0,
    createdAt: nowIso,
    expiresAt: new Date(now.getTime() + lifetimeSeconds * 1000).toISOString(),
    usedAt: null,
  });

  return token;
}

export async function findUserActionToken(token, userId, action) {
  if (typeof token !== 'string' || token.length < 32 || token.length > 200) return null;
  const [record] = await db.select().from(userActionTokens).where(and(
    eq(userActionTokens.tokenHash, hashToken(token)),
    ...(userId ? [eq(userActionTokens.userId, userId)] : []),
    eq(userActionTokens.action, action),
    isNull(userActionTokens.usedAt),
    gt(userActionTokens.expiresAt, new Date().toISOString()),
    lt(userActionTokens.attempts, MAX_ACTION_ATTEMPTS),
  )).limit(1);
  return record || null;
}

export async function recordFailedActionTokenAttempt(record) {
  const now = new Date().toISOString();
  await db.update(userActionTokens).set({
    attempts: sql`${userActionTokens.attempts} + 1`,
    usedAt: sql`CASE WHEN ${userActionTokens.attempts} + 1 >= ${MAX_ACTION_ATTEMPTS} THEN ${now} ELSE ${userActionTokens.usedAt} END`,
  }).where(and(
    eq(userActionTokens.id, record.id),
    isNull(userActionTokens.usedAt),
  ));
}

export async function consumeUserActionToken(record) {
  const [consumed] = await db.update(userActionTokens).set({
    usedAt: new Date().toISOString(),
  }).where(and(
    eq(userActionTokens.id, record.id),
    isNull(userActionTokens.usedAt),
    gt(userActionTokens.expiresAt, new Date().toISOString()),
    lt(userActionTokens.attempts, MAX_ACTION_ATTEMPTS),
  )).returning({id: userActionTokens.id});
  return Boolean(consumed);
}
