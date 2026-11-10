import test, { afterEach, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { SpeechNarrationQueue, splitSpeechText } from "./speechNarration.ts";

class FakeUtterance {
  constructor(text) {
    this.text = text;
  }
}

let utterances;
let synthesis;
let originalWindow;
let originalUtterance;

beforeEach(() => {
  utterances = [];
  synthesis = {
    cancel() {},
    speak(utterance) {
      utterances.push(utterance);
    },
  };
  originalWindow = globalThis.window;
  originalUtterance = globalThis.SpeechSynthesisUtterance;
  globalThis.window = { speechSynthesis: synthesis, setTimeout };
  globalThis.SpeechSynthesisUtterance = FakeUtterance;
});

afterEach(() => {
  if (originalWindow === undefined) delete globalThis.window;
  else globalThis.window = originalWindow;
  if (originalUtterance === undefined) delete globalThis.SpeechSynthesisUtterance;
  else globalThis.SpeechSynthesisUtterance = originalUtterance;
});

const nextTurn = () => new Promise((resolve) => setTimeout(resolve, 0));

test("narration completes only after every speech chunk ends", async () => {
  const text = `${Array.from({ length: 60 }, (_, index) => (
    `word${index}`
  )).join(" ")}.`;
  const expectedChunks = splitSpeechText(text);
  const queue = new SpeechNarrationQueue();
  let completed = 0;

  queue.play(text, {
    voice: {},
    onComplete: () => { completed += 1; },
  });

  assert.ok(expectedChunks.length > 1);
  assert.ok(expectedChunks.every((chunk) => chunk.length <= 220));
  for (let index = 0; index < expectedChunks.length; index += 1) {
    assert.equal(utterances.length, index + 1);
    utterances[index].onend();
    await nextTurn();
    assert.equal(completed, index === expectedChunks.length - 1 ? 1 : 0);
  }
});

test("narration errors are surfaced and do not silently skip failed speech", () => {
  const queue = new SpeechNarrationQueue();
  const errors = [];

  queue.play("The teacher explains the first part. The teacher explains the second part.", {
    voice: {},
    onError: (error) => errors.push(error),
  });
  utterances[0].onerror({ error: "synthesis-failed" });

  assert.deepEqual(errors, ["synthesis-failed"]);
  assert.equal(utterances.length, 1);
});

test("cancelling narration does not report successful completion", async () => {
  const queue = new SpeechNarrationQueue();
  let completed = 0;
  queue.play("This narration should stop when the learner changes slides.", {
    voice: {},
    onComplete: () => { completed += 1; },
  });

  const activeUtterance = utterances[0];
  queue.cancel();
  activeUtterance.onend();
  await nextTurn();

  assert.equal(completed, 0);
});
