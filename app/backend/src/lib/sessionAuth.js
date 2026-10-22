import crypto from 'node:crypto';
import {and, eq, gt, isNull} from 'drizzle-orm';
import {v4 as uuidv4} from 'uuid';
import {db} from '../db/index.js';
import {userSessions, users} from '../db/schema.js';

const ACCESS_COOKIE = 'cohortia_access';
const REFRESH_COOKIE = 'cohortia_refresh';
const ACCESS_COOKIE_SECURE = '__Host-cohortia_access';
const REFRESH_COOKIE_SECURE = '__Secure-cohortia_refresh';
const ACCESS_TTL_SECONDS = 15 * 60;
const REFRESH_TTL_SECONDS = 30 * 24 * 60 * 60;
const REFRESH_COOKIE_PATH = '/api/v1/auth/session/refresh';

function isSecure(env) {
  return env.NODE_ENV === 'production' || env.RENDER === 'true';
}

function cookieNames(env) {
  return isSecure(env)
    ? {access: ACCESS_COOKIE_SECURE, refresh: REFRESH_COOKIE_SECURE}
    : {access: ACCESS_COOKIE, refresh: REFRESH_COOKIE};
}

function readCookie(c, name) {
  const cookieHeader = c.req.header('Cookie') || '';
  const prefix = `${name}=`;
  const cookie = cookieHeader.split(';').map((part) => part.trim()).find((part) => part.startsWith(prefix));
  return cookie ? cookie.slice(prefix.length) : null;
}

function cookieOptions(env) {
  return `HttpOnly; SameSite=Lax${isSecure(env) ? '; Secure' : ''}`;
}

function setCookie(c, name, value, maxAge, path, env) {
  c.header('Set-Cookie', `${name}=${value}; Max-Age=${maxAge}; Path=${path}; ${cookieOptions(env)}`, {append: true});
}

function clearCookie(c, name, path, env) {
  setCookie(c, name, '', 0, path, env);
}

export function getSessionCookieToken(c, env = process.env) {
  return readCookie(c, cookieNames(env).access);
}

export function getRefreshCookieToken(c, env = process.env) {
  return readCookie(c, cookieNames(env).refresh);
}

export function hashSessionToken(token) {
  return crypto.createHash('sha256').update(token).digest('hex');
}

export function setSessionCookies(c, accessToken, refreshToken, env = process.env) {
  const names = cookieNames(env);
  setCookie(c, names.access, accessToken, ACCESS_TTL_SECONDS, isSecure(env) ? '/' : '/api/v1', env);
  setCookie(c, names.refresh, refreshToken, REFRESH_TTL_SECONDS, REFRESH_COOKIE_PATH, env);
}

export function clearSessionCookies(c, env = process.env) {
  const names = cookieNames(env);
  clearCookie(c, names.access, isSecure(env) ? '/' : '/api/v1', env);
  clearCookie(c, names.refresh, REFRESH_COOKIE_PATH, env);
  clearCookie(c, 'cohortia_session', '/api/v1', env);
}

export async function createSession(c, user, signAccessToken, env = process.env) {
  const id = uuidv4();
  const refreshToken = crypto.randomBytes(32).toString('base64url');
  const now = new Date();
  const nowIso = now.toISOString();
  await db.insert(userSessions).values({
    id,
    userId: user.id,
    refreshTokenHash: hashSessionToken(refreshToken),
    createdAt: nowIso,
    expiresAt: new Date(now.getTime() + REFRESH_TTL_SECONDS * 1000).toISOString(),
    lastUsedAt: nowIso,
    revokedAt: null,
  });
  setSessionCookies(c, signAccessToken(user, id), refreshToken, env);
}

export async function rotateSession(c, signAccessToken, env = process.env) {
  const refreshToken = getRefreshCookieToken(c, env);
  if (!refreshToken || refreshToken.length > 200) return null;
  const tokenHash = hashSessionToken(refreshToken);
  const [session] = await db.select().from(userSessions).where(and(
    eq(userSessions.refreshTokenHash, tokenHash),
    isNull(userSessions.revokedAt),
    gt(userSessions.expiresAt, new Date().toISOString()),
  )).limit(1);
  if (!session) return null;

  const nextRefreshToken = crypto.randomBytes(32).toString('base64url');
  const now = new Date();
  const nowIso = now.toISOString();
  const [rotated] = await db.update(userSessions).set({
    refreshTokenHash: hashSessionToken(nextRefreshToken),
    expiresAt: new Date(now.getTime() + REFRESH_TTL_SECONDS * 1000).toISOString(),
    lastUsedAt: nowIso,
  }).where(and(
    eq(userSessions.id, session.id),
    eq(userSessions.refreshTokenHash, tokenHash),
    isNull(userSessions.revokedAt),
    gt(userSessions.expiresAt, nowIso),
  )).returning({id: userSessions.id});
  if (!rotated) return null;

  const [user] = await db.select({
    id: users.id,
    email: users.email,
  }).from(users)
    .where(eq(users.id, session.userId))
    .limit(1);
  if (!user) {
    await revokeSession(session.id);
    return null;
  }
  setSessionCookies(c, signAccessToken(user, session.id), nextRefreshToken, env);
  return user;
}

export async function getActiveSession(sessionId) {
  if (typeof sessionId !== 'string' || !sessionId) return null;
  const [session] = await db.select({
    id: userSessions.id,
    userId: userSessions.userId,
  }).from(userSessions).where(and(
    eq(userSessions.id, sessionId),
    isNull(userSessions.revokedAt),
    gt(userSessions.expiresAt, new Date().toISOString()),
  )).limit(1);
  return session || null;
}

export async function revokeSession(sessionId) {
  if (!sessionId) return;
  await db.update(userSessions).set({revokedAt: new Date().toISOString()}).where(and(
    eq(userSessions.id, sessionId),
    isNull(userSessions.revokedAt),
  ));
}

export async function revokeSessionByRefreshToken(token) {
  if (typeof token !== 'string' || !token || token.length > 200) return;
  await db.update(userSessions).set({revokedAt: new Date().toISOString()}).where(and(
    eq(userSessions.refreshTokenHash, hashSessionToken(token)),
    isNull(userSessions.revokedAt),
  ));
}

export async function revokeUserSessions(userId) {
  await db.update(userSessions).set({revokedAt: new Date().toISOString()}).where(and(
    eq(userSessions.userId, userId),
    isNull(userSessions.revokedAt),
  ));
}

export function clearSessionCookie(c, env = process.env) {
  clearSessionCookies(c, env);
}

export const sessionDurations = {
  accessSeconds: ACCESS_TTL_SECONDS,
  refreshSeconds: REFRESH_TTL_SECONDS,
};
