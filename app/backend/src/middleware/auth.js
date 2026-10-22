import jwt from 'jsonwebtoken';
import {db} from '../db/index.js';
import {users} from '../db/schema.js';
import {eq} from 'drizzle-orm';
import {getJwtSecret} from '../lib/jwtSecret.js';
import {getSessionCookieToken, getActiveSession, revokeSession} from '../lib/sessionAuth.js';

export const authMiddleware = async (c, next) => {
  const token = getSessionCookieToken(c);
  if (!token) {
    return c.json({success: false, error: 'Unauthorized', message: 'Authentication is required'}, 401);
  }

  let decoded;
  try {
    decoded = jwt.verify(token, getJwtSecret());
  } catch {
    return c.json({success: false, error: 'Unauthorized', message: 'Invalid or expired session'}, 401);
  }

  if (!decoded || typeof decoded !== 'object' || typeof decoded.sid !== 'string') {
    return c.json({success: false, error: 'Unauthorized', message: 'Invalid or expired session'}, 401);
  }

  const session = await getActiveSession(decoded.sid);
  if (!session) {
    return c.json({success: false, error: 'Unauthorized', message: 'Invalid or expired session'}, 401);
  }
  if (session.userId !== decoded.userId) {
    await revokeSession(session.id);
    return c.json({success: false, error: 'Unauthorized', message: 'Invalid or expired session'}, 401);
  }

  const [user] = await db.select({
    id: users.id,
    email: users.email,
    role: users.role,
    adminRole: users.adminRole,
  }).from(users).where(eq(users.id, session.userId)).limit(1);
  if (!user) {
    return c.json({success: false, error: 'Unauthorized', message: 'User no longer exists'}, 401);
  }

  c.set('userId', user.id);
  c.set('userEmail', user.email);
  c.set('user', user);
  c.set('sessionId', session.id);
  await next();
};
