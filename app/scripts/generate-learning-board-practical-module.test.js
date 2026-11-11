import test from "node:test";
import assert from "node:assert/strict";
import {
  chapterRepairResponseSchema,
  validateChapterRepairScript,
} from "./generate-learning-board-practical-module.js";
import { terminalWalkthroughErrors } from "./generate-learning-board-practical.js";

function entry(category) {
  return {
    sourceContext: { source: { category } },
    metadata: { moduleNumber: 1, chapterNumber: 1 },
  };
}

test("chapter repair schema makes the non-code board-copy contract explicit", () => {
  const schema = chapterRepairResponseSchema(entry("Scenario & Design Exercise"));
  const displayText = schema.properties.practicals.items.properties.practical
    .properties.teachingSteps.items.properties.displayText;

  assert.match(displayText.description, /exactly 2-6 non-empty lines separated by newline characters/);
  assert.match(displayText.description, /calculation and its working/);
  assert.match(displayText.description, /options, constraints, trade-offs, and outcomes/);
});

test("terminal chapter repairs retain code walkthrough display labels", () => {
  const schema = chapterRepairResponseSchema(entry("Terminal Coding Lab"));
  const displayText = schema.properties.practicals.items.properties.practical
    .properties.codeWalkthrough.items.properties.displayText;

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
    practicals: [{
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
    }],
  };

  assert.throws(() => validateChapterRepairScript(response, scenarioEntry), (error) => {
    assert.match(error.message, /phase 1\) has 189 words; provide 40-180 \(target 90-110, maximum 120\)/);
    assert.match(error.message, /phase 2\) has 1 non-empty lines; provide 2-6/);
    assert.match(error.message, /phase 2\) has 2 words; provide 40-180/);
    assert.match(error.message, /repeats the opening-screen welcome/);
    return true;
  });
  assert.equal(response.practicals[0].practical.teachingSteps[0].displayText.split("\n").length, 6);
});
