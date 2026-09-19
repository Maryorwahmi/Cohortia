import jwt from 'jsonwebtoken';
import { db } from '../db/index.js';
import { users } from '../db/schema.js';
import { eq } from 'drizzle-orm';

export const authMiddleware = async (c, next) => {
  const authHeader = c.req.header('Authorization');
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return c.json({
      success: false,
      error: 'Unauthorized',
      message: 'Access token is required',
    }, 401);
  }

  const token = authHeader.replace('Bearer ', '');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'cohortia-dev-secret');
    
    // Verify user still exists
    const userResult = await db
      .select()
      .from(users)
      .where(eq(users.id, decoded.userId))
      .limit(1);

    if (userResult.length === 0) {
      return c.json({
        success: false,
        error: 'Unauthorized',
        message: 'User no longer exists',
      }, 401);
    }

    const user = userResult[0];
    c.set('userId', decoded.userId);
    c.set('userEmail', decoded.email);
    c.set('user', user);
    await next();
  } catch (error) {
    return c.json({
      success: false,
      error: 'Unauthorized',
      message: 'Invalid or expired token',
    }, 401);
  }
};
