import test from "node:test";
import assert from "node:assert/strict";
import {
  chapterResponseSchema,
  buildChapterContinuationPrompt,
  buildChapterRepairFeedback,
  chapterRepairResponseSchema,
  generateChapterJson,
  normalizeChapterResponse,
  isGeminiSchemaComplexityError,
  validateGeneratedPracticalCompleteness,
  validateChapterRepairScript,
} from "./generate-learning-board-practical-chapter.js";
import {
  normalizePractical,
  terminalWalkthroughErrors,
} from "./generate-learning-board-practical.js";

function entry(category) {
  return {
    sourceContext: {
      source: { category },
      activityChapter: { handsOnActivity: "Observe the example and explain the result." },
      activityTitle: "Example activity",
    },
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
  assert.match(feedback, /re-check every non-final codeWalkthrough phase against BOTH rules/);
  assert.match(feedback, /learnerPrompt must ask for a prediction or observation/);
  assert.match(feedback, /remove the execution claim instead of inventing a command or output/);
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
  const tasks = ["observe", "experiment", "verify"].map((stepType, index) => ({
    id: `evidence-task-${index + 1}`,
    title: `Evidence task ${index + 1}`,
    instruction: `Record evidence from source ${index + 1}.`,
    stepType,
    hints: ["Which detail matters?", "Compare the claim to the observation.", "Use the evidence to explain your conclusion."],
    structuredHints: {
      nudge: "Which detail matters?",
      concept: "Compare evidence with the claim.",
      walkthrough: "Record the observation, then explain its relevance.",
    },
    inlineSuggestions: [{
      id: `evidence-suggestion-${index + 1}`,
      label: "Compare evidence",
      text: "Check whether this observation supports or challenges the claim.",
    }],
    tests: [{ type: "manual", explanation: "The learner records source-grounded evidence." }],
  }));
  const validPractical = {
    title: "Evidence comparison",
    summary: "Compare observations and evaluate a hypothesis.",
    instructions: sourceContext.activityChapter.handsOnActivity,
    objectives: [
      "Evaluate a hypothesis using evidence.",
      "Distinguish observations from inferences.",
      "Explain a conclusion with source evidence.",
    ],
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
    tasks,
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
  assert.equal(normalized[0].practical.tasks.length, 3);
});

test("incomplete authored content is reported together rather than silently synthesized", () => {
  assert.throws(
    () => validateGeneratedPracticalCompleteness({}, entry("Research & Analysis")),
    (error) => {
      assert.match(error.message, /practical.title is missing/);
      assert.match(error.message, /practical.objectives must contain at least three/);
      assert.match(error.message, /practical.tasks must contain 3-5 authored milestones/);
      assert.match(error.message, /practical.teachingSteps must contain 4-8 complete phases/);
      return true;
    },
  );
});

test("chapter repair schema makes the non-code board-copy contract explicit", () => {
  const schema = chapterRepairResponseSchema(entry("Scenario & Design Exercise"));
  const displayText = schema.properties.practical.properties
    .teachingSteps.items.properties.displayText;

  assert.match(displayText.description, /2-6 lines/);
  assert.match(displayText.description, /calculations, evidence, comparisons, or results/);
});

test("terminal chapter repairs retain code walkthrough display labels", () => {
  const schema = chapterRepairResponseSchema(entry("Terminal Coding Lab"));
  const displayText = schema.properties.practical.properties
    .codeWalkthrough.items.properties.displayText;

  assert.match(displayText.description, /visible label for this code phase/);
  assert.doesNotMatch(displayText.description, /2-6 non-empty lines/);
  assert.ok(schema.properties.practical.properties.tasks);
  assert.ok(schema.properties.practical.properties.files);
  assert.ok(schema.properties.practical.properties.workspace);
  assert.ok(schema.properties.practical.required.includes("tasks"));
  const phases = schema.properties.practical.properties.codeWalkthrough.items;
  assert.ok(phases.required.includes("displayText"));
  assert.equal(phases.required.includes("stepNumber"), false);
  assert.equal(phases.properties.durationSeconds, undefined);
});

test("initial response schema requires complete practical content, not only an envelope", () => {
  const schema = chapterResponseSchema(entry("Research & Analysis"));
  const practical = schema.properties.practical;
  const taskSchema = practical.properties.tasks;

  assert.ok(practical.required.includes("teachingSteps"));
  assert.ok(practical.required.includes("objectives"));
  assert.ok(taskSchema.items.required.includes("instruction"));
  assert.ok(taskSchema.items.required.includes("hints"));
  assert.ok(taskSchema.items.required.includes("structuredHints"));
  assert.ok(taskSchema.items.required.includes("inlineSuggestions"));
  assert.ok(taskSchema.items.required.includes("tests"));
  assert.equal(practical.properties.teachingSteps.items.required.includes("stepNumber"), false);
  assert.equal(practical.properties.teachingSteps.items.properties.durationSeconds, undefined);
  assert.deepEqual(
    practical.properties.workspace.properties.research.required,
    [
      "investigationQuestion",
      "hypothesisPrompt",
      "sources",
      "datasets",
      "requiredObservations",
      "analysisOperations",
      "calculationRules",
      "conclusionPrompt",
      "evidenceRequirements",
      "rubric",
    ],
  );
  assert.equal(taskSchema.minItems, undefined);
  assert.equal(taskSchema.maxItems, undefined);
  assert.ok(taskSchema.items.required.includes("structuredHints"));
  assert.deepEqual(taskSchema.items.properties.structuredHints.required, ["nudge", "concept", "walkthrough"]);
  assert.equal(taskSchema.items.properties.inlineSuggestions.minItems, undefined);
  assert.equal(taskSchema.items.properties.inlineSuggestions.maxItems, undefined);
  assert.equal(taskSchema.items.properties.hints.minItems, undefined);
  assert.equal(taskSchema.items.properties.hints.maxItems, undefined);
  assert.doesNotMatch(JSON.stringify(schema), /"minItems"|"maxItems"|"enum"/);
  assert.ok(practical.properties.teachingSteps.items.required.includes("speakerText"));
  assert.ok(practical.properties.teachingSteps.items.required.includes("displayText"));
});

test("detects Gemini response-schema state-limit errors for JSON-mode fallback", () => {
  assert.equal(isGeminiSchemaComplexityError({
    error: "Gemini rejected the request (HTTP 400): The specified schema produces a constraint that has too many states for serving.",
  }), true);
  assert.equal(isGeminiSchemaComplexityError({
    error: "Gemini rejected the request (HTTP 400): Invalid API key.",
  }), false);
});

test("retries schema complexity errors in JSON mode and leaves validation to the chapter pipeline", async () => {
  const requests = [];
  const result = await generateChapterJson({
    prompt: "Generate one practical.",
    entry: entry("Research & Analysis"),
    maxTokens: 1024,
    temperature: 0.3,
    model: "gemini-test",
  }, async (request) => {
    requests.push(request);
    return requests.length === 1
      ? { success: false, error: "Gemini rejected the request: schema produces a constraint that has too many states for serving." }
      : { success: true, data: { practical: { title: "Generated in JSON mode" } } };
  });

  assert.equal(result.success, true);
  assert.equal(requests.length, 2);
  assert.ok(requests[0].responseSchema);
  assert.equal(requests[1].responseSchema, undefined);
  assert.equal(requests[1].prompt, requests[0].prompt);
  assert.equal(requests[1].maxTokens, 1024);
});

test("does not retry unrelated Gemini request errors without a schema", async () => {
  const requests = [];
  const result = await generateChapterJson({
    prompt: "Generate one practical.",
    entry: entry("Research & Analysis"),
    maxTokens: 1024,
    temperature: 0.3,
    model: "gemini-test",
  }, async (request) => {
    requests.push(request);
    return { success: false, error: "Gemini rejected the request (HTTP 400): Invalid API key." };
  });

  assert.equal(result.success, false);
  assert.equal(requests.length, 1);
  assert.ok(requests[0].responseSchema);
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

test("watch-only validation rejects action instructions but permits prediction questions about changes", () => {
  const errors = terminalWalkthroughErrors([
    { stepNumber: 1, codeLine: "int main(void) { return 0; }" },
    {
      stepNumber: 2,
      codeLine: "printf(\"Hello\");",
      speakerText: "The teacher runs the program and observes its output.",
      learnerPrompt: "What changes in the output when the teacher runs this version?",
      terminalCommands: ["./main"],
    },
    { stepNumber: 3, codeLine: "return 0;", learnerPrompt: "Edit the return value now." },
    { stepNumber: 4, codeLine: "int main(void) { return 1; }" },
  ]);

  assert.equal(errors.some((error) => /step 2 asks the learner to edit or execute/.test(error)), false);
  assert.ok(errors.some((error) => /step 3 asks the learner to edit or execute/.test(error)));
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
    assert.match(error.message, /phase 1\) has 189 words; provide 40-180/);
    assert.match(error.message, /phase 2\) has 1 non-empty lines; provide 2-6/);
    assert.match(error.message, /phase 2\) has 2 words; provide 40-180/);
    assert.match(error.message, /repeats the opening-screen welcome/);
    return true;
  });
  assert.equal(response.practical.teachingSteps[0].displayText.split("\n").length, 6);
});
