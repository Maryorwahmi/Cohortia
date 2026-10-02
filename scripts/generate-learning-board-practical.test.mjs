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
  const response = makeGeneratedResponse();
  response.tasks = response.tasks.slice(0, 1);
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
