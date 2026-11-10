import test from "node:test";
import assert from "node:assert/strict";
import { chapterRepairResponseSchema } from "./generate-learning-board-practical-module.js";

function entry(category) {
  return {
    sourceContext: { source: { category } },
  };
}

test("chapter repair schema makes the non-code board-copy contract explicit", () => {
  const schema = chapterRepairResponseSchema(entry("Scenario & Design Exercise"));
  const displayText = schema.properties.practicals.items.properties.practical
    .properties.teachingSteps.items.properties.displayText;

  assert.match(displayText.description, /2-6 non-empty newline-separated concrete lines/);
  assert.match(displayText.description, /calculations and their working/);
  assert.match(displayText.description, /options, constraints, trade-offs, and outcomes/);
});

test("terminal chapter repairs retain code walkthrough display labels", () => {
  const schema = chapterRepairResponseSchema(entry("Terminal Coding Lab"));
  const displayText = schema.properties.practicals.items.properties.practical
    .properties.codeWalkthrough.items.properties.displayText;

  assert.match(displayText.description, /visible label for this code phase/);
  assert.doesNotMatch(displayText.description, /2-6 non-empty lines/);
});
