import test from "node:test";
import assert from "node:assert/strict";
import {
  inheritedBinaryTaskSupport,
  terminalWalkthroughErrors,
  validateCanonicalTeachingQuality,
} from "./generate-learning-board-practical.js";
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

test("binary exercise expansion preserves authored task support for source questions", () => {
  const template = {
    hints: ["nudge", "concept", "walkthrough"],
    structuredHints: { nudge: "n", concept: "c", walkthrough: "w" },
    inlineSuggestions: [{ id: "show-place-values", label: "Place values", text: "List the powers of two." }],
    requiredConcepts: ["place value"],
    stepType: "experiment",
    checkIds: ["binary-check"],
  };

  const inherited = inheritedBinaryTaskSupport(undefined, template);
  assert.deepEqual(inherited, template);
  assert.notEqual(inherited.hints, template.hints);
  assert.notEqual(inherited.inlineSuggestions, template.inlineSuggestions);
  assert.notEqual(inherited.structuredHints, template.structuredHints);

  inherited.hints[0] = "changed";
  inherited.structuredHints.nudge = "changed";
  assert.equal(template.hints[0], "nudge");
  assert.equal(template.structuredHints.nudge, "n");
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

test("first teaching phase may begin with a concrete concept introduced by today", () => {
  assert.doesNotThrow(() => validateCanonicalTeachingQuality([
    step({
      phase: "orientation",
      speakerText: "Today, binary place values show how each position contributes a power of two.",
      displayText: "Binary place values\nEach position contributes a power of two",
    }),
  ], "guided_exercise"));

  assert.throws(() => validateCanonicalTeachingQuality([
    step({
      phase: "orientation",
      speakerText: "Today we will learn about binary and begin our lesson.",
      displayText: "Binary place values\nEach position contributes a power of two",
    }),
  ], "guided_exercise"), /concrete activity concept or question/);
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

  const workedExample = step({
    speakerText: "The value 10 in binary represents two in decimal.",
    displayText: "10₂ = 1×2 + 0×1\n1×2 + 0×1 = 2₁₀",
  });
  assert.doesNotThrow(() => validateCanonicalTeachingQuality([
    step({
      speakerText: "The two-bit patterns are 00, 01, 10, and 11.",
      displayText: "Two-bit patterns\n00 01 10 11",
      phase: "orientation",
    }),
    workedExample,
  ], "binary_exercise"));

  assert.doesNotThrow(() => validateCanonicalTeachingQuality([
    step({
      speakerText: "The two-bit patterns are 00, 01, 10, and 11.",
      displayText: "Bit patterns\n0 0 | 0 1 | 1 0 | 1 1",
      phase: "orientation",
    }),
    workedExample,
  ], "binary_exercise"));
});

test("execution evidence is required for demonstrated results, not conceptual references", () => {
  const walkthrough = [
    { stepNumber: 1, codeLine: "int main() { return 0; }" },
    { stepNumber: 2, codeLine: "int value = 2;", speakerText: "The compiler translates source code into instructions." },
    { stepNumber: 3, codeLine: "printf(\"%d\", value);", speakerText: "We run the program and it prints 2." },
    { stepNumber: 4, codeLine: "return 0;" },
  ];
  const errors = terminalWalkthroughErrors(walkthrough);
  assert.equal(errors.some((error) => /step 2 claims an execution result/.test(error)), false);
  assert.ok(errors.some((error) => /step 3 claims an execution result/.test(error)));
  walkthrough[2].terminalCommands = ["./program"];
  assert.equal(
    terminalWalkthroughErrors(walkthrough).some((error) => /step 3 claims an execution result/.test(error)),
    false,
  );
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
