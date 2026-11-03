import assert from "node:assert/strict";
import test from "node:test";
import { normalizePractical, PRACTICAL_SCHEMA } from "./generate-learning-board-practical.js";
import { profileFor, profileSchema } from "./lib/practical-experience-profiles.js";

const categories = [
  {
    category: "Terminal Coding Lab",
    topic: "python",
    activityTitle: "Python output and variables",
    handsOnActivity: "Write a Python program that prints a message and stores a value.",
    keyConcepts: ["python variables", "program output"],
    labType: "code",
    language: "python",
    file: {path: "main.py", content: 'message = "hello"\nprint(message)', language: "python"},
    workspace: {type: "terminal", terminal: {entryFile: "main.py", runCommands: ["python main.py"]}},
  },
  {
    category: "Research & Analysis",
    topic: "evidence",
    activityTitle: "Evidence and hypothesis",
    handsOnActivity: "Compare evidence from two sources and evaluate a hypothesis.",
    keyConcepts: ["evidence", "hypothesis"],
    labType: "simulation",
    workspace: {type: "research", research: {investigationQuestion: "What does the evidence support?"}},
  },
  {
    category: "Cloud Console Lab",
    topic: "cloud resource",
    activityTitle: "Cloud resource verification",
    handsOnActivity: "Inspect a simulated cloud resource and verify its configuration.",
    keyConcepts: ["cloud resource", "configuration"],
    labType: "cloud",
    workspace: {type: "cloud", cloud: {provider: "simulator", region: "test-region"}},
  },
  {
    category: "Scenario & Design Exercise",
    topic: "binary place-value",
    activityTitle: "Binary place-value conversion",
    handsOnActivity: "Convert the binary number 1010 to its decimal value.",
    keyConcepts: ["binary place-value", "powers of two"],
    labType: "simulation",
    activityKind: "binary_exercise",
    workspace: {type: "scenario", scenario: {subtype: "binary_exercise"}},
  },
];

function narration(topic, index) {
  return `Welcome to the ${topic} mission. We will connect this chapter idea to one practical example, then use the evidence to explain what is happening. Start by identifying the important parts and predicting the result before you act. I will model the reasoning one step at a time, including why this choice matters and what a beginner might overlook. Notice how each detail changes the outcome, and check your explanation against what you can observe. Keep the ${topic} idea in view as we move from the worked example to your own attempt. In phase ${index + 1}, pause to make a prediction, then use the result to refine your understanding.`;
}

function makeSourceContext(profile) {
  const activityChapter = {
    raw: profile.handsOnActivity,
    title: profile.activityTitle,
    handsOnActivity: profile.handsOnActivity,
  };
  const lessonChapter = {raw: `Chapter about ${profile.topic}.`, title: `${profile.topic} foundations`};
  return {
    source: {
      category: profile.category,
      sourceKey: "narration-test-course/1/1",
      sourcePath: "course.md",
      sourceHash: `sha256:${"a".repeat(64)}`,
    },
    activityChapter,
    lessonChapter,
    activityTitle: profile.activityTitle,
    courseId: "narration-test-course",
    courseTitle: "Narration Test Course",
    level: "beginner",
    lessonContext: {
      courseIntroduction: "A short course introduction.",
      chapterIntroduction: `This chapter introduces ${profile.topic}.`,
      learningObjectives: [`Explain ${profile.topic} in a practical example.`],
      keyConcepts: profile.keyConcepts,
      lessonScreens: [],
    },
    activitySteps: [],
    activitySourcePath: "course.md",
    lessonSourcePath: "course.md",
    lessonHash: "lesson-hash",
  };
}

function makeRawPractical(profile) {
  const script = Array.from({length: 4}, (_, index) => {
    const step = {
      stepNumber: index + 1,
      phase: ["orientation", "worked_example", "guided_practice", "transfer"][index],
      title: `Phase ${index + 1}`,
      speakerText: narration(profile.topic, index),
      explanation: `Explain the ${profile.topic} idea in phase ${index + 1}.`,
      learnerPrompt: `What do you predict about ${profile.topic} in phase ${index + 1}?`,
      commonMistake: `Do not overlook the ${profile.topic} evidence in phase ${index + 1}.`,
      recap: `Remember how ${profile.topic} shaped phase ${index + 1}.`,
      durationSeconds: 1,
      displayText: `Visual for ${profile.topic}, phase ${index + 1}.`,
    };
    if (profile.category === "Terminal Coding Lab") {
      step.codeLine = index === 0 ? "message = \"hello\"" : "print(message)";
      step.file = profile.file.path;
    }
    return step;
  });
  const task = {
    id: "task-1",
    title: `Practice ${profile.topic}`,
    instruction: `Apply the ${profile.topic} concept.`,
    narratorGuide: "This alternate task narration must be replaced.",
    hints: [],
    tests: [],
  };
  if (profile.activityKind === "binary_exercise") {
    task.interactiveExercise = {
      type: "binary_conversion",
      prompt: profile.handsOnActivity,
      expectedAnswer: "10",
      explanation: "The one bits occupy the eight and two place values.",
    };
  }
  return {
    title: profile.activityTitle,
    summary: `Learn about ${profile.topic}.`,
    instructions: profile.handsOnActivity,
    labType: profile.labType,
    ...(profile.language ? {language: profile.language} : {}),
    ...(profile.category === "Terminal Coding Lab" ? {codeWalkthrough: script} : {teachingSteps: script}),
    tasks: [task],
    ...(profile.file ? {files: [profile.file]} : {files: []}),
    workspace: profile.workspace,
  };
}

test("normalizes each experience from its canonical script and derives all spoken projections", () => {
  for (const profile of categories) {
    const practical = normalizePractical(
      makeRawPractical(profile),
      makeSourceContext(profile),
      {courseId: "narration-test-course", moduleNumber: 1, chapterNumber: 1},
    );
    const canonical = profile.category === "Terminal Coding Lab"
      ? practical.codeWalkthrough
      : practical.teachingSteps;
    assert.equal(canonical.length, 4, profile.category);
    assert.equal(practical.narratorGuide, canonical[0].speakerText, profile.category);
    assert.equal(practical.teachingPlaylist.flatMap((step) => step.codeSteps).sort().join(","), "1,2,3,4", profile.category);
    assert.equal(
      practical.teachingPlaylist.filter((step) => step.narratorScript).map((step) => step.narratorScript).join(" "),
      canonical.map((step) => step.speakerText).join(" "),
      profile.category,
    );
    for (const [index, step] of canonical.entries()) {
      const wordCount = step.speakerText.trim().split(/\s+/).length;
      assert.equal(step.durationSeconds, Math.max(3, Math.ceil((wordCount / (145 * 0.82)) * 60 + 0.8)));
      assert.equal(step.stepNumber, index + 1);
      assert.ok(step.learnerPrompt);
      assert.ok(step.commonMistake);
      assert.ok(step.recap);
    }
    assert.notEqual(practical.tasks[0].narratorGuide, "This alternate task narration must be replaced.");
  }
});

test("keeps phase playback complete when learner task count differs from phase count", () => {
  const profile = categories.find((candidate) => candidate.category === "Research & Analysis");
  const raw = makeRawPractical(profile);
  raw.tasks = Array.from({length: 6}, (_, index) => ({
    id: `task-${index + 1}`,
    title: `Research task ${index + 1}`,
    instruction: `Apply the ${profile.topic} idea in task ${index + 1}.`,
    hints: [],
    tests: [],
  }));
  const practical = normalizePractical(
    raw,
    makeSourceContext(profile),
    {courseId: "narration-test-course", moduleNumber: 1, chapterNumber: 1},
  );
  assert.equal(practical.teachingPlaylist.length, practical.teachingSteps.length);
  assert.deepEqual(
    practical.teachingPlaylist.map((step) => step.narratorScript),
    practical.teachingSteps.map((step) => step.speakerText),
  );
  assert.ok(practical.teachingPlaylist.every((step) => step.codeSteps.length === 1));
  assert.ok(practical.tasks.every((task) => task.narratorGuide.length > 40));
});

test("requires a canonical script in each experience profile schema", () => {
  for (const profile of categories) {
    const experienceProfile = profileFor({category: profile.category, labType: profile.labType});
    const schema = profileSchema(PRACTICAL_SCHEMA, experienceProfile, profile.activityKind || "guided_exercise");
    const scriptKey = experienceProfile.experienceType === "terminal_coding_lab"
      ? "codeWalkthrough"
      : "teachingSteps";
    assert.ok(schema.required.includes(scriptKey), profile.category);
    assert.equal(schema.properties[scriptKey].minItems, 4, profile.category);
    assert.equal(schema.properties[scriptKey].maxItems, 8, profile.category);
    assert.ok(schema.properties[scriptKey].items.required.includes("phase"), profile.category);
    assert.ok(schema.properties[scriptKey].items.required.includes("learnerPrompt"), profile.category);
  }
});

test("rejects incomplete or off-topic narration instead of replacing it with generic speech", () => {
  const profile = categories.find((candidate) => candidate.category === "Research & Analysis");
  const raw = makeRawPractical(profile);
  raw.teachingSteps[0].speakerText = "Evidence matters.";
  assert.throws(
    () => normalizePractical(raw, makeSourceContext(profile), {courseId: "narration-test-course", moduleNumber: 1, chapterNumber: 1}),
    /must be 40-180 words/,
  );

  const unrelatedProfile = {
    ...profile,
    topic: "photosynthesis",
    activityTitle: "Photosynthesis carbon pathway",
    keyConcepts: ["chlorophyll absorption", "carbon fixation"],
  };
  const unrelated = makeRawPractical(unrelatedProfile);
  unrelated.teachingSteps[0].speakerText = narration("unrelated astronomy", 0);
  assert.throws(
    () => normalizePractical(unrelated, makeSourceContext(unrelatedProfile), {courseId: "narration-test-course", moduleNumber: 1, chapterNumber: 1}),
    /topic-specific term/,
  );
});
