export const SESSION_COOKIE_NAME = 'cohortia_session';

export function getSessionCookieToken(c) {
  const cookieHeader = c.req.header('Cookie') || '';
  const prefix = `${SESSION_COOKIE_NAME}=`;
  const cookie = cookieHeader.split(';').map((part) => part.trim()).find((part) => part.startsWith(prefix));
  return cookie ? cookie.slice(prefix.length) : null;
}

export function setSessionCookie(c, token, env = process.env) {
  const secure = env.NODE_ENV === 'production' || env.RENDER === 'true';
  c.header(
    'Set-Cookie',
    `${SESSION_COOKIE_NAME}=${token}; Max-Age=604800; Path=/api/v1; HttpOnly; SameSite=Lax${secure ? '; Secure' : ''}`,
    {append: true},
  );
}

export function clearSessionCookie(c, env = process.env) {
  const secure = env.NODE_ENV === 'production' || env.RENDER === 'true';
  c.header(
    'Set-Cookie',
    `${SESSION_COOKIE_NAME}=; Max-Age=0; Path=/api/v1; HttpOnly; SameSite=Lax${secure ? '; Secure' : ''}`,
    {append: true},
  );
}
