import assert from 'node:assert/strict';
import test from 'node:test';
import {
  clearSessionCookie,
  getSessionCookieToken,
  setSessionCookie,
  SESSION_COOKIE_NAME,
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

test('session cookie is HttpOnly, scoped, and Secure in production', () => {
  const c = createContext('POST');
  setSessionCookie(c, 'signed-session-token', {NODE_ENV: 'production'});

  assert.equal(
    c.responseHeaders['set-cookie'][0],
    `${SESSION_COOKIE_NAME}=signed-session-token; Max-Age=604800; Path=/api/v1; HttpOnly; SameSite=Lax; Secure`,
  );
});

test('session cookie can be read and cleared without replacing other cookies', () => {
  const c = createContext('GET', {
    Cookie: `other=value; ${SESSION_COOKIE_NAME}=signed-token`,
  });
  assert.equal(getSessionCookieToken(c), 'signed-token');

  clearSessionCookie(c, {RENDER: 'true'});
  assert.equal(
    c.responseHeaders['set-cookie'][0],
    `${SESSION_COOKIE_NAME}=; Max-Age=0; Path=/api/v1; HttpOnly; SameSite=Lax; Secure`,
  );
});

test('session auth does not read JWTs from Authorization headers', () => {
  const c = createContext('GET', {Authorization: 'Bearer legacy-token'});
  assert.equal(getSessionCookieToken(c), null);
});

test('CSRF middleware rejects untrusted and missing origins for session-cookie writes', async () => {
  const middleware = createCsrfMiddleware(['https://cohortia.study']);

  for (const origin of ['https://attacker.example', undefined]) {
    const c = createContext('POST', {
      Cookie: `${SESSION_COOKIE_NAME}=signed-token`,
      ...(origin ? {Origin: origin} : {}),
    });
    let continued = false;
    const response = await middleware(c, async () => { continued = true; });
    assert.equal(response.status, 403);
    assert.equal(continued, false);
  }
});

test('CSRF middleware accepts configured origins and does not block requests without a session cookie', async () => {
  const middleware = createCsrfMiddleware(['https://cohortia.study']);

  const trustedContext = createContext('POST', {
    Cookie: `${SESSION_COOKIE_NAME}=signed-token`,
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
