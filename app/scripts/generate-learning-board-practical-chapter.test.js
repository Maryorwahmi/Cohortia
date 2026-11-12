import test from "node:test";
import assert from "node:assert/strict";
import {
  buildChapterContinuationPrompt,
  buildChapterRepairFeedback,
  chapterRepairResponseSchema,
  normalizeChapterResponse,
  validateChapterRepairScript,
} from "./generate-learning-board-practical-chapter.js";
import {
  normalizePractical,
  terminalWalkthroughErrors,
} from "./generate-learning-board-practical.js";

function entry(category) {
  return {
    sourceContext: { source: { category } },
    metadata: { moduleNumber: 1, chapterNumber: 1 },
  };
}

test("chapter repair feedback gives phase-specific corrections for binary validation errors", () => {
  const feedback = buildChapterRepairFeedback(
    new Error(
      "Chapter 1.1 failed practical validation (teachingSteps=5): "
      + "Binary teaching phase 3 must show its calculation, not only a heading or answer. "
      + "Binary teaching phase 4 speaks numeric values absent from displayText: 27, 16.",
    ),
    "teachingSteps",
  );

  assert.match(feedback, /Phase 3 must display a real binary place-value calculation/);
  assert.match(feedback, /Phase 4 currently speaks 27, 16/);
  assert.match(feedback, /verified decimal total/);
  assert.match(feedback, /never leave spoken numbers invisible/);
});

test("chapter repair feedback fixes watch-only code walkthrough prompts", () => {
  const feedback = buildChapterRepairFeedback(
    new Error(
      "Chapter 1.2 failed practical validation (codeWalkthrough=5): "
      + "code walkthrough phase 2 hands an editing or execution action to the learner during the watch-only walkthrough. "
      + "Ask for a prediction or observation; defer hands-on work to the final transfer.",
    ),
    "codeWalkthrough",
  );

  assert.match(feedback, /teacher-led and watch-only/);
  assert.match(feedback, /phase 2's learnerPrompt as a concrete prediction or observation question/);
  assert.match(feedback, /Move learner editing or running instructions to the final transfer phase/);
});

test("chapter repair feedback fixes code walkthrough execution claims without visible output", () => {
  const feedback = buildChapterRepairFeedback(
    new Error(
      "Chapter 1.2 failed practical validation (codeWalkthrough=5): "
      + "code walkthrough phase 1 discusses compilation or execution without a visible terminal command or output.",
    ),
    "codeWalkthrough",
  );

  assert.match(feedback, /visible terminalCommands array and\/or terminalOutput in that same phase/);
  assert.match(feedback, /Fix codeWalkthrough phase 1/);
});

test("chapter repair feedback requires the canonical teachingSteps array", () => {
  const feedback = buildChapterRepairFeedback(
    new Error("Chapter 1.1 failed practical validation (teachingSteps=missing): teaching must contain 4-8 complete teaching phases."),
    "teachingSteps",
  );

  assert.match(feedback, /include practical\.teachingSteps as an array of 4-8 complete phases/);
  assert.match(feedback, /do not omit it, rename it to codeWalkthrough/);
});

test("chapter repair continues from the rejected practical instead of starting over", () => {
  const priorPractical = {
    title: "Binary place-value conversion",
    teachingSteps: [
      { stepNumber: 1, speakerText: "Convert 1010.", displayText: "Binary place value\n1010₂" },
    ],
  };
  const prompt = buildChapterContinuationPrompt(
    "Original chapter context",
    new Error("Binary teaching phase 1 speaks numeric values absent from displayText: 10."),
    "teachingSteps",
    priorPractical,
  );

  assert.match(prompt, /CONTINUATION OF THE REJECTED PRACTICAL/);
  assert.match(prompt, /Make the smallest edits needed/);
  assert.match(prompt, /Binary place-value conversion/);
  assert.match(prompt, /Phase 1 currently speaks 10/);
  assert.match(prompt, /Return the full corrected practical/);
});

test("uses a valid requested chapter when the model repeats its practical", () => {
  const sourceContext = {
    source: {
      category: "Research & Analysis",
      sourceKey: "test-course/1/1",
      sourcePath: "course.md",
      sourceHash: `sha256:${"a".repeat(64)}`,
    },
    activityChapter: {
      handsOnActivity: "Compare evidence from two sources and evaluate a hypothesis.",
      raw: "Research activity",
      title: "Evidence comparison",
    },
    lessonChapter: { raw: "Evidence and hypotheses", title: "Evidence" },
    activityTitle: "Evidence comparison",
    courseId: "test-course",
    courseTitle: "Test Course",
    level: "beginner",
    lessonContext: {
      chapterIntroduction: "This chapter introduces evidence and hypotheses.",
      learningObjectives: ["Evaluate a hypothesis using evidence."],
      keyConcepts: ["evidence", "hypothesis"],
      lessonScreens: [],
    },
    activitySteps: [],
    activitySourcePath: "course.md",
    lessonSourcePath: "course.md",
    lessonHash: "lesson-hash",
  };
  const narration = [...Array(49).fill("Evidence"), "matters."].join(" ");
  const validPractical = {
    title: "Evidence comparison",
    summary: "Compare observations and evaluate a hypothesis.",
    instructions: sourceContext.activityChapter.handsOnActivity,
    labType: "simulation",
    teachingSteps: ["orientation", "worked_example", "guided_practice", "transfer"].map((phase, index) => ({
      stepNumber: index + 1,
      phase,
      displayText: `Evidence\nphase ${index + 1}`,
      speakerText: narration,
      explanation: `Explain evidence phase ${index + 1}.`,
      learnerPrompt: `What does the evidence show in phase ${index + 1}?`,
      commonMistake: `Do not overstate the evidence in phase ${index + 1}.`,
      recap: `Review the evidence from phase ${index + 1}.`,
      durationSeconds: 30,
    })),
    tasks: [{
      title: "Compare the sources",
      instruction: "Record the evidence from each source.",
      hints: [],
      tests: [],
    }],
    files: [],
    workspace: {
      type: "research",
      research: {
        investigationQuestion: "What does the evidence support?",
        hypothesisPrompt: "State a testable hypothesis.",
        conclusionPrompt: "Explain what the evidence supports.",
      },
    },
  };
  const entryToGenerate = {
    sourceContext,
    metadata: {
      courseId: "test-course",
      moduleNumber: 1,
      chapterNumber: 1,
    },
  };
  const normalizedExpected = normalizePractical(validPractical, sourceContext, entryToGenerate.metadata);

  const normalized = normalizeChapterResponse({
    practicals: [
      { moduleNumber: 1, chapterNumber: 1, practical: {} },
      { moduleNumber: 1, chapterNumber: 1, practical: validPractical },
    ],
  }, entryToGenerate);

  assert.equal(normalized.length, 1);
  assert.equal(normalized[0].practical.title, normalizedExpected.title);
});

test("chapter repair schema makes the non-code board-copy contract explicit", () => {
  const schema = chapterRepairResponseSchema(entry("Scenario & Design Exercise"));
  const displayText = schema.properties.practical.properties
    .teachingSteps.items.properties.displayText;

  assert.match(displayText.description, /exactly 2-6 non-empty lines separated by newline characters/);
  assert.match(displayText.description, /calculation and its working/);
  assert.match(displayText.description, /options, constraints, trade-offs, and outcomes/);
});

test("terminal chapter repairs retain code walkthrough display labels", () => {
  const schema = chapterRepairResponseSchema(entry("Terminal Coding Lab"));
  const displayText = schema.properties.practical.properties
    .codeWalkthrough.items.properties.displayText;

  assert.match(displayText.description, /visible label for this code phase/);
  assert.doesNotMatch(displayText.description, /2-6 non-empty lines/);
});

test("terminal walkthrough validation rejects repeated snapshots and learner editing during watch mode", () => {
  const errors = terminalWalkthroughErrors([
    { stepNumber: 1, codeLine: "#include <stdio.h>\nint main(void)\n{\n printf(\"Hi\");\n return 0;\n}" },
    { stepNumber: 2, codeLine: "#include <stdio.h>\nint main(void)\n{\n printf(\"Hi\");\n return 0;\n}", learnerPrompt: "Change the printf statement." },
    { stepNumber: 3, codeLine: "printf(\"Bye\");", learnerPrompt: "What output do you predict?", speakerText: "The compiler will run this program and show the output." },
    { stepNumber: 4, codeLine: "#include <stdio.h>\nint main(void)\n{\n printf(\"Bye\");\n return 0;\n}" },
  ]);

  assert.match(errors.join("\n"), /repeats the previous phase/);
  assert.match(errors.join("\n"), /asks the learner to edit/);
  assert.match(errors.join("\n"), /without visible terminalCommands/);
});

test("chapter repair feedback reports all phase format problems in one pass", () => {
  const scenarioEntry = entry("Scenario & Design Exercise");
  const response = {
    moduleNumber: 1,
    chapterNumber: 1,
    practical: {
      teachingSteps: [
        {
          displayText: "One\nTwo\nThree\nFour\nFive\nSix\nSeven",
          speakerText: "Welcome to this practical. " + Array(185).fill("binary").join(" "),
        },
        {
          displayText: "Only one line",
          speakerText: "Short speech.",
        },
      ],
    },
  };

  assert.throws(() => validateChapterRepairScript(response, scenarioEntry), (error) => {
    assert.match(error.message, /phase 1\) has 189 words; provide 40-180 \(target 90-110, maximum 120\)/);
    assert.match(error.message, /phase 2\) has 1 non-empty lines; provide 2-6/);
    assert.match(error.message, /phase 2\) has 2 words; provide 40-180/);
    assert.match(error.message, /repeats the opening-screen welcome/);
    return true;
  });
  assert.equal(response.practical.teachingSteps[0].displayText.split("\n").length, 6);
});
