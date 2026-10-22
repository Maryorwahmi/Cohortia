import assert from 'node:assert/strict';
import test from 'node:test';
import {
  clearSessionCookies,
  getRefreshCookieToken,
  getSessionCookieToken,
  setSessionCookies,
  sessionDurations,
} from '../src/lib/sessionAuth.js';
import {createCsrfMiddleware} from '../src/middleware/csrf.js';

function createContext(method, headers = {}) {
  const responseHeaders = {};
  const normalizedHeaders = Object.fromEntries(
    Object.entries(headers).map(([name, value]) => [name.toLowerCase(), value]),
  );
  return {
    req: {
      method,
      header: (name) => normalizedHeaders[name.toLowerCase()],
    },
    header: (name, value, options = {}) => {
      const key = name.toLowerCase();
      responseHeaders[key] = options.append
        ? [...(responseHeaders[key] || []), value]
        : value;
    },
    json: (body, status) => ({body, status}),
    responseHeaders,
  };
}

test('session cookies have separate lifetimes, scopes, and hardened production names', () => {
  const c = createContext('POST');
  setSessionCookies(c, 'access-token', 'refresh-token', {NODE_ENV: 'production'});

  assert.equal(sessionDurations.accessSeconds, 900);
  assert.equal(sessionDurations.refreshSeconds, 2592000);
  assert.deepEqual(c.responseHeaders['set-cookie'], [
    '__Host-cohortia_access=access-token; Max-Age=900; Path=/; HttpOnly; SameSite=Lax; Secure',
    '__Secure-cohortia_refresh=refresh-token; Max-Age=2592000; Path=/api/v1/auth/session/refresh; HttpOnly; SameSite=Lax; Secure',
  ]);
});

test('session cookies can be read and cleared without replacing other cookies', () => {
  const c = createContext('GET', {
    Cookie: 'other=value; cohortia_access=access-token; cohortia_refresh=refresh-token',
  });
  assert.equal(getSessionCookieToken(c), 'access-token');
  assert.equal(getRefreshCookieToken(c), 'refresh-token');

  clearSessionCookies(c, {NODE_ENV: 'development'});
  assert.deepEqual(c.responseHeaders['set-cookie'], [
    'cohortia_access=; Max-Age=0; Path=/api/v1; HttpOnly; SameSite=Lax',
    'cohortia_refresh=; Max-Age=0; Path=/api/v1/auth/session/refresh; HttpOnly; SameSite=Lax',
    'cohortia_session=; Max-Age=0; Path=/api/v1; HttpOnly; SameSite=Lax',
  ]);
});

test('session auth does not read JWTs from Authorization headers', () => {
  const c = createContext('GET', {Authorization: 'Bearer token'});
  assert.equal(getSessionCookieToken(c), null);
});

test('CSRF middleware rejects untrusted and missing origins for session-cookie writes', async () => {
  const middleware = createCsrfMiddleware(['https://cohortia.study']);

  for (const cookie of ['cohortia_access=signed-token', 'cohortia_refresh=refresh-token']) {
    for (const origin of ['https://attacker.example', undefined]) {
      const c = createContext('POST', {
        Cookie: cookie,
        ...(origin ? {Origin: origin} : {}),
      });
      let continued = false;
      const response = await middleware(c, async () => { continued = true; });
      assert.equal(response.status, 403);
      assert.equal(continued, false);
    }
  }
});

test('CSRF middleware accepts configured origins and does not block requests without a session cookie', async () => {
  const middleware = createCsrfMiddleware(['https://cohortia.study']);

  const trustedContext = createContext('POST', {
    Cookie: 'cohortia_refresh=refresh-token',
    Origin: 'https://cohortia.study',
  });
  let trustedContinued = false;
  await middleware(trustedContext, async () => { trustedContinued = true; });
  assert.equal(trustedContinued, true);

  const publicContext = createContext('POST', {Origin: 'https://attacker.example'});
  let publicContinued = false;
  await middleware(publicContext, async () => { publicContinued = true; });
  assert.equal(publicContinued, true);
});
