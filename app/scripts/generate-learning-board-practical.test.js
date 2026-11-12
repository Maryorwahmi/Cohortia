import test from "node:test";
import assert from "node:assert/strict";
import { validateCanonicalTeachingQuality } from "./generate-learning-board-practical.js";
import { activityKindFor, profileFor } from "./lib/practical-experience-profiles.js";

function step({ phase = "worked_example", speakerText, displayText }) {
  return { stepNumber: 1, phase, speakerText, displayText };
}

test("binary conversions stay in the scenario experience even if generation suggests code", () => {
  const activityKind = activityKindFor({
    category: "Scenario & Design Exercise",
    title: "Binary Conversions",
    activity: "Convert 11010 from binary to decimal.",
    labType: "code",
  });

  assert.equal(activityKind, "binary_exercise");
  assert.equal(
    profileFor({
      category: "Scenario & Design Exercise",
      labType: "code",
      activityKind,
    }).experienceType,
    "scenario_simulator",
  );
  assert.equal(activityKindFor({
    category: "Scenario & Design Exercise",
    title: "Binary Search",
    activity: "Trace a binary search algorithm.",
    labType: "code",
  }), "terminal_code_along");
});

test("canonical teaching starts with the activity instead of repeating the opening screen", () => {
  assert.throws(
    () => validateCanonicalTeachingQuality([
      step({
        phase: "orientation",
        speakerText: "Welcome to your first practical. We will learn binary.",
        displayText: "Binary place values\nBase two",
      }),
    ], "binary_exercise"),
    /concrete activity concept or question/,
  );
});

test("canonical teaching reports multiple semantic issues together", () => {
  assert.throws(
    () => validateCanonicalTeachingQuality([
      step({
        phase: "worked_example",
        speakerText: "For 11010, calculate 16 plus 8 to get 26.",
        displayText: "Binary example\n11010₂ represents decimal 27",
      }),
    ], "binary_exercise"),
    (error) => {
      assert.match(error.message, /must show its calculation/);
      assert.match(error.message, /numeric values absent from displayText/);
      return true;
    },
  );
});

test("binary worked examples must show the narrated calculation on screen", () => {
  assert.throws(
    () => validateCanonicalTeachingQuality([
      step({
        speakerText: "For 11010, the decimal result is 26.",
        displayText: "Converting binary to decimal\nExample: 11010 binary",
      }),
    ], "binary_exercise"),
    /must show its calculation/,
  );

  assert.throws(
    () => validateCanonicalTeachingQuality([
      step({
        speakerText: "For 11010, the decimal result is 26.",
        displayText: "11010₂ = 27₁₀",
      }),
    ], "binary_exercise"),
    /numeric values absent from displayText/,
  );

  assert.doesNotThrow(() => validateCanonicalTeachingQuality([
    step({
      speakerText: "For 11010, calculate 16 plus 8 plus 2 to get 26.",
      displayText: "11010₂ = 16 + 8 + 2\n16 + 8 + 2 = 26₁₀",
    }),
  ], "binary_exercise"));
});

test("design decisions must show competing options and a visible trade-off", () => {
  assert.throws(
    () => validateCanonicalTeachingQuality([
      step({
        speakerText: "Compare the options and select one.",
        displayText: "Option A\nOption B\nChoose one",
      }),
    ], "design_decision"),
    /comparing options against a constraint or trade-off/,
  );

  assert.doesNotThrow(() => validateCanonicalTeachingQuality([
    step({
      speakerText: "Option A is faster but uses more memory. Option B is slower but fits the memory constraint.",
      displayText: "Option A: faster, higher memory\nOption B: slower, fits memory constraint\nTrade-off: speed versus available memory",
    }),
  ], "design_decision"));
});
