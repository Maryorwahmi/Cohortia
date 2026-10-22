import { getRefreshCookieToken, getSessionCookieToken } from '../lib/sessionAuth.js';

const SAFE_METHODS = new Set(['GET', 'HEAD', 'OPTIONS']);

export function createCsrfMiddleware(
  allowedOrigins = (process.env.CORS_ORIGIN || 'http://localhost:5173')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean)
    .concat(['https://cohortia.study', 'https://www.cohortia.study']),
) {
  return async (c, next) => {
    if (SAFE_METHODS.has(c.req.method) || (!getSessionCookieToken(c) && !getRefreshCookieToken(c))) {
      await next();
      return;
    }

    const requestOrigin = c.req.header('Origin');
    if (!requestOrigin || !allowedOrigins.includes(requestOrigin)) {
      return c.json({success: false, error: 'Forbidden', message: 'Request origin is not allowed.'}, 403);
    }

    await next();
  };
}
