import assert from 'node:assert/strict';
import { test } from 'node:test';
import { callGemini } from '../src/lib/gemini.js';

test('Gemini retries keys sequentially and stops on the first successful response', async () => {
  const keyPattern = /^GEMINI_API_KEY(?:_\d+)?$/;
  const originalKeys = Object.fromEntries(
    Object.entries(process.env).filter(([name]) => keyPattern.test(name)),
  );
  const originalConfig = {
    AI_PROVIDER: process.env.AI_PROVIDER,
    GEMINI_MODEL: process.env.GEMINI_MODEL,
  };
  const originalFetch = globalThis.fetch;
  let releaseFirstRequest;
  const firstRequestResponse = new Promise((resolve) => {
    releaseFirstRequest = resolve;
  });
  const attemptedKeys = [];

  for (const name of Object.keys(process.env)) {
    if (keyPattern.test(name)) delete process.env[name];
  }
  Object.assign(process.env, {
    AI_PROVIDER: 'gemini',
    GEMINI_MODEL: 'gemini-2.5-flash',
    GEMINI_API_KEY: 'test-key-1',
    GEMINI_API_KEY_1: 'test-key-2',
    GEMINI_API_KEY_2: 'test-key-3',
  });

  globalThis.fetch = async (requestUrl) => {
    const key = new URL(requestUrl).searchParams.get('key');
    attemptedKeys.push(key);

    if (key === 'test-key-1') return firstRequestResponse;
    if (key === 'test-key-2') {
      return {
        ok: true,
        json: async () => ({
          candidates: [{ content: { parts: [{ text: 'success from second key' }] } }],
        }),
      };
    }

    throw new Error(`Unexpected request to ${key}`);
  };

  try {
    const resultPromise = callGemini({ userPrompt: 'test prompt' });
    await new Promise((resolve) => setImmediate(resolve));
    assert.deepEqual(attemptedKeys, ['test-key-1']);

    releaseFirstRequest({
      ok: false,
      status: 429,
      json: async () => ({ error: { message: 'quota exhausted' } }),
    });

    const result = await resultPromise;
    assert.deepEqual(attemptedKeys, ['test-key-1', 'test-key-2']);
    assert.deepEqual(result, {
      success: true,
      text: 'success from second key',
      usedKeyIndex: 1,
    });
  } finally {
    globalThis.fetch = originalFetch;
    for (const name of Object.keys(process.env)) {
      if (keyPattern.test(name)) delete process.env[name];
    }
    Object.assign(process.env, originalKeys);
    for (const [name, value] of Object.entries(originalConfig)) {
      if (value === undefined) delete process.env[name];
      else process.env[name] = value;
    }
  }
});
