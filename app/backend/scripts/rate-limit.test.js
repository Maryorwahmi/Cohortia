import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { rateLimitWindows } from '../src/db/schema.js';
import { consumeRateLimit } from '../src/lib/rateLimitStore.js';

const client = createClient({url: 'file::memory:'});
const database = drizzle(client, {schema: {rateLimitWindows}});

before(async () => {
  await client.execute(`CREATE TABLE rate_limit_windows (
    key TEXT PRIMARY KEY,
    window_start INTEGER NOT NULL,
    request_count INTEGER NOT NULL,
    updated_at TEXT NOT NULL
  )`);
});

after(async () => {
  await client.close();
});

test('enforces fixed-window limits and permits the next window', async () => {
  const options = {
    scope: 'chat-user-5m',
    actor: 'user-1',
    limit: 2,
    windowSeconds: 60,
    nowMs: 12_000,
  };

  assert.equal((await consumeRateLimit(database, options)).allowed, true);
  assert.equal((await consumeRateLimit(database, options)).allowed, true);

  const blocked = await consumeRateLimit(database, options);
  assert.equal(blocked.allowed, false);
  assert.equal(blocked.retryAfterSeconds, 48);

  assert.equal((await consumeRateLimit(database, {
    ...options,
    nowMs: 60_000,
  })).allowed, true);
});

test('keeps actors and rate-limit scopes independent', async () => {
  const options = {
    scope: 'login-ip-15m',
    actor: '192.0.2.10',
    limit: 1,
    windowSeconds: 900,
    nowMs: 120_000,
  };

  assert.equal((await consumeRateLimit(database, options)).allowed, true);
  assert.equal((await consumeRateLimit(database, options)).allowed, false);
  assert.equal((await consumeRateLimit(database, {
    ...options,
    actor: '192.0.2.11',
  })).allowed, true);
  assert.equal((await consumeRateLimit(database, {
    ...options,
    scope: 'signup-ip-1h',
  })).allowed, true);
});

test('increments counters atomically when requests arrive concurrently', async () => {
  const options = {
    scope: 'signup-ip-1h',
    actor: '192.0.2.12',
    limit: 3,
    windowSeconds: 3600,
    nowMs: 180_000,
  };

  const results = await Promise.all(
    Array.from({length: 12}, () => consumeRateLimit(database, options)),
  );

  assert.equal(results.filter((result) => result.allowed).length, options.limit);
});
