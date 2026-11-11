import assert from "node:assert/strict";
import test from "node:test";

process.env.AI_PROVIDER = "gemini";
process.env.GEMINI_API_KEY = "test-key";
process.env.GEMINI_TPM_LIMIT = "10";
process.env.GEMINI_MIN_DELAY_MS = "1";

const {generateCompleteJson} = await import("./gemini-rotating-client.js");

test("rejects a prompt larger than the TPM budget without waiting or trying API keys", async () => {
  const originalFetch = globalThis.fetch;
  let fetchCalled = false;
  globalThis.fetch = async () => {
    fetchCalled = true;
    return {
      ok: true,
      json: async () => ({
        candidates: [{
          content: {parts: [{text: '{"ok":true}'}]},
          finishReason: "STOP",
        }],
      }),
    };
  };

  try {
    const result = await generateCompleteJson({
      prompt: "x".repeat(44),
      maxTokens: 1,
      model: "test-model",
    });

    assert.equal(result.success, false);
    assert.equal(result.fatal, true);
    assert.equal(result.retryable, false);
    assert.match(result.error, /Estimated input tokens \(12\).*TPM limit \(10\)/);
    assert.equal(fetchCalled, false);

    const withinInputBudget = await generateCompleteJson({
      prompt: "short",
      maxTokens: 10000,
      model: "test-model",
    });
    assert.equal(withinInputBudget.success, true);
    assert.equal(withinInputBudget.data.ok, true);
    assert.equal(fetchCalled, true);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
