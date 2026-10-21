import assert from 'node:assert/strict';
import test from 'node:test';
import {getJwtSecret} from '../src/lib/jwtSecret.js';

test('JWT secret must be configured with at least 32 bytes', () => {
  const originalSecret = process.env.JWT_SECRET;
  try {
    delete process.env.JWT_SECRET;
    assert.throws(() => getJwtSecret(), /must be configured/);

    process.env.JWT_SECRET = 'too-short';
    assert.throws(() => getJwtSecret(), /at least 32 bytes/);

    process.env.JWT_SECRET = '12345678901234567890123456789012';
    assert.equal(getJwtSecret(), process.env.JWT_SECRET);
  } finally {
    if (originalSecret === undefined) delete process.env.JWT_SECRET;
    else process.env.JWT_SECRET = originalSecret;
  }
});
