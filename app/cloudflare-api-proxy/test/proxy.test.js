import assert from 'node:assert/strict';
import test from 'node:test';
import worker from '../src/index.js';

const secret = '12345678901234567890123456789012';
const apiOrigin = 'https://cohortia.onrender.com';

test('does not forward requests when the proxy secret is missing or weak', async () => {
  const originalFetch = globalThis.fetch;
  let upstreamCalled = false;
  globalThis.fetch = async () => {
    upstreamCalled = true;
    return new Response('unexpected');
  };

  try {
    for (const configuredSecret of ['', 'too-short']) {
      const response = await worker.fetch(
        new Request('https://api.cohortia.study/api/v1/health'),
        {API_ORIGIN: apiOrigin, COHORTIA_API_ORIGIN_SECRET: configuredSecret},
      );
      assert.equal(response.status, 503);
    }
    assert.equal(upstreamCalled, false);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('forwards the original request with the secret header and preserves redirects', async () => {
  const originalFetch = globalThis.fetch;
  let upstreamRequest;
  globalThis.fetch = async (request) => {
    upstreamRequest = request;
    return new Response(null, {
      status: 302,
      headers: {Location: 'https://cohortia.study/login?result=ok'},
    });
  };

  try {
    const response = await worker.fetch(
      new Request('https://api.cohortia.study/api/v1/auth/google/callback?state=abc', {
        method: 'POST',
        headers: {'x-cohortia-origin-secret': 'attacker-value'},
        body: 'callback-body',
      }),
      {API_ORIGIN: apiOrigin, COHORTIA_API_ORIGIN_SECRET: secret},
    );

    assert.equal(upstreamRequest.url, `${apiOrigin}/api/v1/auth/google/callback?state=abc`);
    assert.equal(upstreamRequest.method, 'POST');
    assert.equal(upstreamRequest.headers.get('x-cohortia-origin-secret'), secret);
    assert.equal(upstreamRequest.redirect, 'manual');
    assert.equal(await upstreamRequest.text(), 'callback-body');
    assert.equal(response.status, 302);
    assert.equal(response.headers.get('location'), 'https://cohortia.study/login?result=ok');
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('rejects non-HTTPS or path-bearing upstream origins', async () => {
  const response = await worker.fetch(
    new Request('https://api.cohortia.study/api/v1/health'),
    {API_ORIGIN: 'http://cohortia.onrender.com/path', COHORTIA_API_ORIGIN_SECRET: secret},
  );
  assert.equal(response.status, 503);
});

test('blocks a rate-limited login before forwarding and returns retry guidance', async () => {
  const originalFetch = globalThis.fetch;
  let upstreamCalled = false;
  let rateLimitKey;
  globalThis.fetch = async () => {
    upstreamCalled = true;
    return new Response('unexpected');
  };

  try {
    const response = await worker.fetch(
      new Request('https://api.cohortia.study/api/v1/auth/login', {
        method: 'POST',
        headers: {'CF-Connecting-IP': '203.0.113.7'},
        body: '{}',
      }),
      {
        API_ORIGIN: apiOrigin,
        COHORTIA_API_ORIGIN_SECRET: secret,
        AUTH_LOGIN_RATE_LIMITER: {
          limit: async ({key}) => {
            rateLimitKey = key;
            return {success: false};
          },
        },
      },
    );

    assert.equal(response.status, 429);
    assert.equal(response.headers.get('Retry-After'), '10');
    assert.equal(upstreamCalled, false);
    assert.match(rateLimitKey, /^[a-f0-9]{64}$/);
    assert.notEqual(rateLimitKey, '203.0.113.7');
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('applies edge limits only to matching POST routes', async () => {
  const originalFetch = globalThis.fetch;
  let rateLimitCalls = 0;
  let upstreamRequest;
  globalThis.fetch = async (request) => {
    upstreamRequest = request;
    return new Response('forwarded');
  };
  const env = {
    API_ORIGIN: apiOrigin,
    COHORTIA_API_ORIGIN_SECRET: secret,
    AUTH_LOGIN_RATE_LIMITER: {
      limit: async () => {
        rateLimitCalls += 1;
        return {success: true};
      },
    },
  };

  try {
    const response = await worker.fetch(
      new Request('https://api.cohortia.study/api/v1/auth/login', {
        method: 'POST',
        headers: {'CF-Connecting-IP': '203.0.113.8'},
        body: '{}',
      }),
      env,
    );

    assert.equal(response.status, 200);
    assert.equal(rateLimitCalls, 1);
    assert.equal(upstreamRequest.url, `${apiOrigin}/api/v1/auth/login`);
    assert.equal(upstreamRequest.headers.get('x-cohortia-origin-secret'), secret);

    await worker.fetch(
      new Request('https://api.cohortia.study/api/v1/auth/login'),
      env,
    );
    assert.equal(rateLimitCalls, 1);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
