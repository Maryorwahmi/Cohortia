import assert from "node:assert/strict";
import test from "node:test";
import {
  buildGeminiPrompt,
  inferActivityCategory,
  normalizePractical,
  validatePractical,
} from "./generate-learning-board-practical.js";
import {
  normalizePractical as normalizeAppPractical,
  validatePractical as validateAppPractical,
} from "../app/scripts/generate-learning-board-practical.js";
import {
  activityKindFor,
  profileFor,
  profileSchema,
} from "../app/scripts/lib/practical-experience-profiles.js";
import { geminiGenerateContentEndpoint } from "../app/scripts/lib/gemini-rotating-client.js";

const sourceActivity = [
  "**Hands-on activity:**",
  "Explore the supplied example and record what you learn.",
  "1. Inspect the starting point.",
  "2. Make a change and explain the result.",
  "```text",
  "This syllabus content must remain source material.",
  "```",
].join("\n");

function makeContext(category) {
  return {
    source: {
      sourceKey: "sample-course/1/1",
      category,
      sourcePath: "sample-course.md",
      sourceHash: `sha256:${"a".repeat(64)}`,
    },
    activityTitle: "Explore the Practical",
    activityChapter: {
      heading: "Starting with the Foundations",
      raw: sourceActivity,
      handsOnActivity: sourceActivity,
    },
    lessonChapter: { raw: "Introduce the foundational concept and explain its purpose." },
  };
}

function makeGeneratedResponse() {
  return {
    mode: "terminal_lab",
    title: "Practical sample-course/1/1",
    language: "python",
    instructions: sourceActivity,
    narratorGuide: sourceActivity,
    teachingPlaylist: [],
    files: [{ path: "main.py", content: "print('ready')\n" }],
    checks: [],
    tasks: Array.from({ length: 5 }, (_, index) => ({
      id: `scene-${index + 1}`,
      title: `Progressive learning scene ${index + 1}`,
      instruction: sourceActivity,
      narratorGuide: sourceActivity,
      teaching: {
        learningGoal: `Understand concept ${index + 1}`,
        teacherTalk: sourceActivity,
        realWorldExample: `Compare concept ${index + 1} with a realistic example from the activity.`,
        guidedSteps: ["Inspect the starting point.", "Make one deliberate change.", "Explain the evidence."],
        questions: ["What do you predict, and what evidence will confirm it?"],
        expectedObservations: ["Compare the result with your prediction."],
        recap: `Explain how concept ${index + 1} supports the practical.`,
        waitForLearner: true,
        estimatedMinutes: 4,
      },
      hints: ["Change one thing at a time."],
      tests: [],
    })),
  };
}

test("all activity categories receive deep scenes without exposing syllabus markdown", () => {
  const categories = [
    "Terminal Coding Lab",
    "Research & Analysis",
    "Cloud Console Lab",
    "Scenario & Design Exercise",
  ];

  for (const category of categories) {
    const context = makeContext(category);
    const practical = normalizePractical(
      makeGeneratedResponse(),
      context,
      { courseId: "sample-course", moduleNumber: 1, chapterNumber: 1, generated: "2026-01-01T00:00:00.000Z" },
    );

    assert.equal(practical.teachingPlaylist.length, 5);
    assert.ok(practical.teachingPlaylist.every((scene) => scene.durationSeconds >= 120));
    assert.ok(practical.tasks.every((task) => task.teaching.guidedSteps.length >= 3));
    assert.ok(!practical.instructions.includes("```"));
    assert.ok(practical.tasks.every((task) => !task.instruction.includes("```")));
    assert.ok(practical.tasks.every((task) => !task.narratorGuide.includes("```")));
    assert.deepEqual(validatePractical(practical), []);
  }
});

test("the default generation prompt enforces the same teaching standard with custom prompt templates", () => {
  const context = makeContext("Terminal Coding Lab");
  const prompt = buildGeminiPrompt(
    "Organization-specific prompt template",
    {
      moduleNumber: 1,
      chapterNumber: 1,
      chapterTitle: "Foundations",
      handsOnActivity: sourceActivity,
      raw: "Source chapter content",
    },
    { courseId: "sample-course" },
    context,
  );

  assert.match(prompt, /MANDATORY INTENSIVE TEACHING STANDARD/);
  assert.match(prompt, /at least 5 progressive scenes\/tasks/);
  assert.match(prompt, /180-220 spoken words/);
  assert.match(prompt, /research, data, network, design, and simulation activities/);
});

test("short model responses are expanded into five learner scenes with checks linked", () => {
  assert.equal(inferActivityCategory("Use AWS IAM and deploy the sample service."), "Cloud Console Lab");
  assert.equal(inferActivityCategory("Analyze this ethical dilemma and justify your decision."), "Scenario & Design Exercise");
  assert.equal(inferActivityCategory("Investigate the hypothesis and evaluate the evidence."), "Research & Analysis");
  assert.equal(inferActivityCategory("Compile and run the Python program."), "Terminal Coding Lab");
  assert.equal(inferActivityCategory("Reflect on your learning journal."), null);
});

test("short app-generator responses are expanded into five learner scenes with checks linked", () => {
  const context = makeContext("Terminal Coding Lab");
  context.lessonContext = {
    keyConcepts: [
      "Program output",
      "File operations",
      "Error handling",
    ],
  };
  const response = makeGeneratedResponse();
  response.language = "c";
  response.files = [{
    path: "main.c",
    content: [
      "#include <stdio.h>",
      "int main(void) {",
      '  FILE *result = fopen("result.txt", "w");',
      "  if (!result) return 1;",
      '  fputs("ready", result);',
      "  fclose(result);",
      '  puts("ready");',
      "  return 0;",
      "}",
    ].join("\n"),
  }];
  response.tasks = response.tasks.slice(0, 1);
  response.codeWalkthrough = Array.from({ length: 4 }, (_, index) => ({
    stepNumber: index + 1,
    speakerText: `Explain how this line supports the program and why this specific code step matters to the learner.`,
    codeLine: `puts("${index + 1}");`,
    file: "main.c",
    explanation: `Program line ${index + 1}.`,
    durationSeconds: 8,
  }));
  response.checks = [
    { id: "starter-file", type: "file_exists", path: "result.txt", adapter: "code-sandbox", timeoutSeconds: 30 },
    { id: "result-content", type: "file_contents", path: "result.txt", contents: "ready", adapter: "code-sandbox", timeoutSeconds: 30 },
    { id: "compile-probe", type: "compile_probe", probeSource: "int main(void) { return 0; }", adapter: "code-sandbox", timeoutSeconds: 30 },
    { id: "sanitizer-check", type: "sanitizer", adapter: "code-sandbox", timeoutSeconds: 30 },
  ];

  const practical = normalizeAppPractical(
    response,
    context,
    { courseId: "sample-course", moduleNumber: 1, chapterNumber: 1, generated: "2026-01-01T00:00:00.000Z" },
  );

  assert.equal(practical.tasks.length, 5);
  assert.equal(practical.teachingPlaylist.length, 5);
  assert.ok(practical.tasks.every((task) => task.checkIds.length > 0));
  assert.deepEqual(
    practical.checks.map((check) => check.type),
    ["file_exists", "file_contents", "compile_probe", "sanitizer"],
  );
  assert.ok(practical.tasks.flatMap((task) => task.checkIds).includes("result-content"));
  assert.deepEqual(validateAppPractical(practical), []);
});

test("app generator preserves optional prediction checkpoints on code and non-code teaching steps", () => {
  const predictionQuestion = {
    id: "predict-traffic",
    prompt: "What happens to traffic after the address is rebound?",
    options: [
      {
        id: "rebind",
        label: "Traffic reaches the replacement instance through the same address.",
        isCorrect: true,
        feedback: "Correct. The address remains stable while its association changes.",
      },
      {
        id: "new-address",
        label: "The public address is deleted and clients must update their settings.",
        isCorrect: false,
        feedback: "The address is re-associated; clients can continue using it.",
      },
    ],
  };

  const terminalContext = makeContext("Terminal Coding Lab");
  const terminalResponse = makeGeneratedResponse();
  terminalResponse.codeWalkthrough = Array.from({ length: 6 }, (_, index) => ({
    stepNumber: index + 1,
    speakerText: `Explain how source line ${index + 1} contributes to the program and what a learner should notice.`,
    codeLine: `print(${index + 1})`,
    file: "main.py",
    durationSeconds: 8,
    ...(index === 0 ? { predictionQuestion } : {}),
  }));
  const terminalPractical = normalizeAppPractical(
    terminalResponse,
    terminalContext,
    { courseId: "sample-course", moduleNumber: 1, chapterNumber: 1, generated: "2026-01-01T00:00:00.000Z" },
  );
  assert.deepEqual(terminalPractical.codeWalkthrough[0].predictionQuestion, predictionQuestion);
  assert.ok(!validateAppPractical(terminalPractical).some((error) => error.includes("predictionQuestion")));

  for (const category of ["Cloud Console Lab", "Scenario & Design Exercise", "Research & Analysis"]) {
    const response = makeGeneratedResponse();
    response.teachingSteps = Array.from({ length: 4 }, (_, index) => ({
      stepNumber: index + 1,
      title: `Teaching step ${index + 1}`,
      displayText: `Observe concept ${index + 1}.`,
      speakerText: `Explain concept ${index + 1} with enough context for the learner to reason about it.`,
      explanation: `This step explains concept ${index + 1}.`,
      ...(index === 0 ? { predictionQuestion } : {}),
    }));
    const practical = normalizeAppPractical(
      response,
      makeContext(category),
      { courseId: "sample-course", moduleNumber: 1, chapterNumber: 1, generated: "2026-01-01T00:00:00.000Z" },
    );
    const checkpointStep = practical.teachingSteps.find((step) => step.predictionQuestion);
    assert.deepEqual(checkpointStep?.predictionQuestion, predictionQuestion, category);
    assert.ok(
      !validateAppPractical(practical).some((error) => error.includes("predictionQuestion")),
      category,
    );
  }
});

test("app generator rejects incomplete prediction checkpoint feedback or answer keys", () => {
  const response = makeGeneratedResponse();
  response.teachingSteps = [{
    stepNumber: 1,
    title: "Evidence check",
    displayText: "Compare the observations.",
    speakerText: "Explain how the evidence supports or challenges the initial claim.",
    explanation: "Use the observation rather than an assumption.",
    predictionQuestion: {
      id: "predict-evidence",
      prompt: "Which conclusion is supported?",
      options: [
        { id: "a", label: "A conclusion", isCorrect: false, feedback: "Not supported." },
        { id: "b", label: "Another conclusion", isCorrect: false, feedback: "Not supported." },
      ],
    },
  }];
  const practical = normalizeAppPractical(
    response,
    makeContext("Research & Analysis"),
    { courseId: "sample-course", moduleNumber: 1, chapterNumber: 1, generated: "2026-01-01T00:00:00.000Z" },
  );

  assert.ok(validateAppPractical(practical).some((error) => error.includes("must have exactly one correct option")));
});

test("app generator normalizes terminal aliases to runtimes supported by the executor", () => {
  for (const [input, expected] of [["c++", "cpp"], ["bash", "shell"], ["sqlite", "sql"]]) {
    const response = makeGeneratedResponse();
    response.language = input;
    const practical = normalizeAppPractical(
      response,
      makeContext("Terminal Coding Lab"),
      { courseId: "sample-course", moduleNumber: 1, chapterNumber: 1, generated: "2026-01-01T00:00:00.000Z" },
    );
    assert.equal(practical.language, expected, input);
  }

  const unsupportedResponse = makeGeneratedResponse();
  unsupportedResponse.language = "powershell";
  assert.throws(
    () => normalizeAppPractical(
      unsupportedResponse,
      makeContext("Terminal Coding Lab"),
      { courseId: "sample-course", moduleNumber: 1, chapterNumber: 1, generated: "2026-01-01T00:00:00.000Z" },
    ),
    /Unsupported terminal runtime "powershell"/,
  );
});

test("app generator supplies category-specific objective fallbacks", () => {
  const expectedObjectivePatterns = new Map([
    ["Terminal Coding Lab", /starter workspace/i],
    ["Cloud Console Lab", /resource state/i],
    ["Scenario & Design Exercise", /constraints/i],
    ["Research & Analysis", /observations/i],
  ]);
  for (const [category, pattern] of expectedObjectivePatterns) {
    const practical = normalizeAppPractical(
      makeGeneratedResponse(),
      makeContext(category),
      { courseId: "sample-course", moduleNumber: 1, chapterNumber: 1, generated: "2026-01-01T00:00:00.000Z" },
    );
    assert.ok(practical.objectives.length >= 3, category);
    assert.match(practical.objectives[0], pattern, category);
  }
});

test("Scenario & Design binary activities receive their specific activity kind", () => {
  assert.equal(
    activityKindFor({
      category: "Scenario & Design Exercise",
      title: "Binary Conversion Challenge",
      activity: "Convert between binary and decimal numbers.",
    }),
    "binary_exercise",
  );
  assert.equal(
    activityKindFor({ category: "Scenario & Design Exercise", title: "Plan a privacy trade-off" }),
    "design_decision",
  );
});

test("Gemini JSON generation uses the v1beta generateContent endpoint", () => {
  assert.equal(
    geminiGenerateContentEndpoint("gemini-2.5-flash"),
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
  );
});

test("binary response schema requires each task interaction without mutating shared schema", () => {
  const baseSchema = {
    type: "object",
    properties: {
      tasks: {
        type: "array",
        items: { type: "object", properties: { title: { type: "string" } }, required: ["title"] },
      },
      teachingSteps: { type: "array", items: { type: "object" } },
    },
    required: ["tasks"],
  };
  const profile = profileFor({ category: "Scenario & Design Exercise", labType: "simulation" });

  const binarySchema = profileSchema(baseSchema, profile, "binary_exercise");
  const terminalSchema = profileSchema(baseSchema, profileFor({ category: "Terminal Coding Lab", labType: "code" }));

  assert.ok(binarySchema.properties.tasks.items.required.includes("interactiveExercise"));
  assert.deepEqual(baseSchema.properties.tasks.items.required, ["title"]);
  assert.equal(baseSchema.properties.teachingSteps.minItems, undefined);
  assert.equal(binarySchema.properties.teachingSteps.minItems, 4);
  assert.equal(binarySchema.properties.teachingSteps.maxItems, 8);
  assert.equal(terminalSchema.properties.teachingSteps.minItems, undefined);
});

test("binary scenario normalization preserves narrated teaching steps and validates task interactions", () => {
  const context = makeContext("Scenario & Design Exercise");
  context.courseTitle = "Foundations of Computing";
  context.lessonContext = {
    keyConcepts: [
      "Binary place values",
      "Base-ten conversion",
      "Bit representation",
    ],
  };
  context.activityTitle = "Binary Conversion Challenge";
  context.activityChapter.handsOnActivity = [
    "**Binary Conversion Challenge:**",
    "Work through the following conversions to solidify your understanding of binary representation.",
    "1. Convert the binary number `11010` to its decimal equivalent.",
    "2. Convert the decimal number `27` to its binary equivalent.",
    "3. How many unique values can be represented by 6 bits?",
    "4. If a color is represented by 24 bits (8 bits each for Red, Green, Blue), what is the maximum decimal value for each color component?",
  ].join("\n");
  const response = makeGeneratedResponse();
  response.tasks = response.tasks.slice(0, 3).map((task) => ({
    ...task,
    interactiveExercise: undefined,
  }));
  response.teachingSteps = Array.from({ length: 4 }, (_, index) => ({
    stepNumber: index + 1,
    title: `Binary idea ${index + 1}`,
    displayText: ["1 × 2⁴", "0 × 2³", "1 × 2²", "0 × 2¹"][index],
    speakerText: `The teacher explains binary place value carefully in step ${index + 1}, connecting this position to its power of two.`,
    explanation: `Position ${index + 1} contributes its bit multiplied by a power of two.`,
    durationSeconds: 8,
  }));
  response.teachingPlaylist = response.tasks.map((task, index) => ({
    id: `path-${index + 1}`,
    title: task.title,
    narratorScript: task.narratorGuide,
    durationSeconds: 90,
    codeSteps: [99],
  }));
  const practical = normalizeAppPractical(
    response,
    context,
    { courseId: "sample-course", moduleNumber: 1, chapterNumber: 1, generated: "2026-01-01T00:00:00.000Z" },
  );

  assert.equal(practical.activityKind, "binary_exercise");
  assert.equal(practical.tasks.length, 4);
  assert.equal(practical.teachingSteps.length, 6);
  assert.deepEqual(practical.tasks.map((task) => task.interactiveExercise?.expectedAnswer), ["26", "11011", "64", "255"]);
  assert.deepEqual(
    practical.teachingPlaylist.flatMap((step) => step.codeSteps),
    [1, 2, 3, 4, 5, 6],
  );
  assert.equal(practical.teachingPlaylist.length, 1);
  assert.deepEqual(
    practical.teachingSteps.map((step) => step.displayText),
    [
      "Mission: understand how 11010 stores a number using only zero and one.",
      "Bits (left to right): 1  1  0  1  0",
      "Place values: 16  8  4  2  1",
      "(1 × 16) + (1 × 8) + (0 × 4) + (1 × 2) + (0 × 1)",
      "16 + 8 + 2 = 26",
      "11010₂ = 26₁₀",
    ],
  );
  assert.ok(practical.tasks.every((task) => task.interactiveExercise?.type === "binary_conversion"));
  assert.deepEqual(validateAppPractical(practical), []);

  practical.tasks[0].interactiveExercise = undefined;
  assert.ok(validateAppPractical(practical).some((error) => error.includes("needs a complete interactiveExercise")));
});
