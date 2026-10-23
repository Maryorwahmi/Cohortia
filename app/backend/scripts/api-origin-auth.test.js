import assert from 'node:assert/strict';
import test from 'node:test';
import {
  apiOriginMiddleware,
  apiOriginSecretsMatch,
  assertApiOriginSecretConfigured,
  isProductionEnvironment,
} from '../src/middleware/apiOrigin.js';

test('production requires a 32-byte API origin secret', () => {
  assert.throws(
    () => assertApiOriginSecretConfigured({NODE_ENV: 'production'}),
    /COHORTIA_API_ORIGIN_SECRET must be configured/,
  );
  assert.throws(
    () => assertApiOriginSecretConfigured({
      NODE_ENV: 'production',
      COHORTIA_API_ORIGIN_SECRET: 'too-short',
    }),
    /at least 32 bytes/,
  );
  assert.doesNotThrow(() => assertApiOriginSecretConfigured({
    NODE_ENV: 'production',
    COHORTIA_API_ORIGIN_SECRET: '12345678901234567890123456789012',
  }));
  assert.doesNotThrow(() => assertApiOriginSecretConfigured({NODE_ENV: 'development'}));
  assert.equal(isProductionEnvironment({RENDER: 'true'}), true);
  assert.throws(
    () => assertApiOriginSecretConfigured({RENDER: 'true'}),
    /COHORTIA_API_ORIGIN_SECRET must be configured/,
  );
  assert.equal(isProductionEnvironment({NODE_ENV: 'development', RENDER: 'false'}), false);
});

test('API origin secret matching rejects missing and incorrect values', () => {
  const expected = '12345678901234567890123456789012';
  assert.equal(apiOriginSecretsMatch(expected, expected), true);
  assert.equal(apiOriginSecretsMatch(undefined, expected), false);
  assert.equal(apiOriginSecretsMatch('incorrect', expected), false);
});

test('Render API requests require the proxy header', async () => {
  const previousNodeEnv = process.env.NODE_ENV;
  const previousRender = process.env.RENDER;
  const previousSecret = process.env.COHORTIA_API_ORIGIN_SECRET;
  process.env.NODE_ENV = 'development';
  process.env.RENDER = 'true';
  process.env.COHORTIA_API_ORIGIN_SECRET = '12345678901234567890123456789012';

  try {
    let responseStatus;
    let nextCalled = false;
    const unauthorizedContext = {
      req: {header: () => undefined},
      json: (_body, status) => {
        responseStatus = status;
        return status;
      },
    };
    await apiOriginMiddleware(unauthorizedContext, async () => {
      nextCalled = true;
    });
    assert.equal(responseStatus, 403);
    assert.equal(nextCalled, false);

    const authorizedContext = {
      req: {header: () => process.env.COHORTIA_API_ORIGIN_SECRET},
      json: () => {
        throw new Error('Authorized request should not return an error');
      },
    };
    await apiOriginMiddleware(authorizedContext, async () => {
      nextCalled = true;
    });
    assert.equal(nextCalled, true);
  } finally {
    if (previousNodeEnv === undefined) delete process.env.NODE_ENV;
    else process.env.NODE_ENV = previousNodeEnv;
    if (previousRender === undefined) delete process.env.RENDER;
    else process.env.RENDER = previousRender;
    if (previousSecret === undefined) delete process.env.COHORTIA_API_ORIGIN_SECRET;
    else process.env.COHORTIA_API_ORIGIN_SECRET = previousSecret;
  }
});
