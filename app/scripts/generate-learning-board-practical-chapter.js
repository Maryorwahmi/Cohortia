#!/usr/bin/env node
/**
 * Generate and publish one chapter practical per Gemini request.
 *
 * The response is still written as one chapter-level practical manifest per
 * chapter so source identity, category, import, and learner progress remain
 * chapter-scoped.
 */

import fs from "node:fs/promises";
import fsSync from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { generateCompleteJson } from "./lib/gemini-rotating-client.js";
import {
  assertValidPractical,
  normalizePractical,
  resolveSourceContext,
  writePractical,
} from "./generate-learning-board-practical.js";
import {
  readCourseGenerationRecord,
  writeCourseGenerationRecord,
} from "./lib/learning-board-record.js";

const REPOSITORY_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BACKEND_ROOT = path.join(REPOSITORY_ROOT, "backend");
const PRACTICAL_IMPORTER_PATH = path.join(BACKEND_ROOT, "scripts", "import-practicals.js");
const DEFAULT_MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";

// Keep the transport schema shallow; the generated practical is validated locally.
const CHAPTER_RESPONSE_SCHEMA = {
  type: "object",
  properties: {
    moduleNumber: { type: "integer" },
    chapterNumber: { type: "integer" },
    practical: { type: "object" },
  },
  required: ["moduleNumber", "chapterNumber", "practical"],
};

function canonicalScriptKeyForEntry(entry) {
  return entry.sourceContext.source.category === "Terminal Coding Lab"
    ? "codeWalkthrough"
    : "teachingSteps";
}

// Enforce the canonical teaching sequence without expanding the transport schema.
function chapterRepairResponseSchema(entry) {
  const canonicalKey = canonicalScriptKeyForEntry(entry);
  const phaseProperties = {
    stepNumber: { type: "integer" },
    phase: {
      type: "string",
      enum: ["orientation", "worked_example", "guided_practice", "verification", "transfer"],
    },
    displayText: {
      type: "string",
      description: canonicalKey === "teachingSteps"
        ? "Required visible board copy, not a phase title: exactly 2-6 non-empty lines separated by newline characters for this exact phase. Count the lines. Show the spoken calculation and its working, evidence and interpretation, or named options, constraints, trade-offs, and outcomes."
        : "A concise visible label for this code phase.",
    },
    speakerText: {
      type: "string",
      description: "Complete spoken teacher narration. Target 90-110 words; never exceed 120 words. The validator accepts 40-180 words.",
    },
    explanation: { type: "string", description: "A concise non-empty explanation." },
    learnerPrompt: { type: "string", description: "A concrete learner question or action." },
    commonMistake: { type: "string", description: "A likely misconception or mistake." },
    recap: { type: "string", description: "A concise recap of the phase." },
    durationSeconds: { type: "number" },
  };
  const phaseRequired = [
    "stepNumber",
    "phase",
    "displayText",
    "speakerText",
    "explanation",
    "learnerPrompt",
    "commonMistake",
    "recap",
  ];
  if (canonicalKey === "codeWalkthrough") {
    phaseProperties.codeLine = { type: "string", description: "The code shown in this phase. The first and final phases may show the complete file; middle phases must show a focused 1-5 line block, not a repeated full-file snapshot." };
    phaseProperties.file = { type: "string", description: "The practical file edited in this phase." };
    phaseProperties.terminalCommands = { type: "array", items: { type: "string" }, description: "Visible teacher commands when this phase discusses compilation or execution." };
    phaseProperties.terminalOutput = { type: "string", description: "Visible expected output when this phase discusses a run result." };
    phaseRequired.push("codeLine", "file");
  }
  return {
    type: "object",
    properties: {
      moduleNumber: { type: "integer" },
      chapterNumber: { type: "integer" },
      practical: {
        type: "object",
        properties: {
          [canonicalKey]: {
            type: "array",
            minItems: 4,
            maxItems: 8,
            items: {
              type: "object",
              properties: phaseProperties,
              required: phaseRequired,
            },
          },
        },
        required: [canonicalKey],
      },
    },
    required: ["moduleNumber", "chapterNumber", "practical"],
  };
}

function validateChapterRepairScript(raw, entry) {
  const canonicalKey = canonicalScriptKeyForEntry(entry);
  if (canonicalKey !== "teachingSteps") return;
  const chapterKey = `${entry.metadata.moduleNumber}.${entry.metadata.chapterNumber}`;
  const chapter = findChapterResponseItem(raw, entry);
  const steps = chapter?.practical?.[canonicalKey] || raw?.practical?.[canonicalKey];
  if (!Array.isArray(steps)) return;

  const issues = [];
  steps.forEach((step, index) => {
    const phase = index + 1;
    const visualLines = String(step?.displayText || "")
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
    // Compact presentation-only overflow locally instead of spending another
    // model call on a mechanical line-count correction.
    if (visualLines.length > 6) {
      step.displayText = [...visualLines.slice(0, 5), visualLines.slice(5).join(" · ")].join("\n");
    }
    const lineCount = String(step?.displayText || "")
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
      .length;
    if (lineCount < 2 || lineCount > 6) {
      issues.push(
        `teachingSteps[${index}].displayText (phase ${phase}) has ${lineCount} non-empty lines; provide 2-6.`,
      );
    }

    const wordCount = String(step?.speakerText || "").trim().split(/\s+/).filter(Boolean).length;
    if (wordCount < 40 || wordCount > 180) {
      issues.push(
        `teachingSteps[${index}].speakerText (phase ${phase}) has ${wordCount} words; provide 40-180 (target 90-110, maximum 120).`,
      );
    }
  });

  const firstNarration = String(steps[0]?.speakerText || "").trim();
  if (/^(?:welcome|hello|hi)\b/i.test(firstNarration)) {
    issues.push(
      "teachingSteps[0].speakerText repeats the opening-screen welcome; remove the greeting and chapter/mission introduction, then begin with the first concrete activity concept.",
    );
  }

  if (issues.length) {
    throw new Error(`Chapter ${chapterKey} repair script violations:\n- ${issues.join("\n- ")}`);
  }
}

function buildChapterRepairFeedback(error, canonicalKey) {
  const message = error?.message || String(error);
  const guidance = [
    "Correct every validation issue listed below in this response, including semantic content errors; do not only change line counts.",
    `Return the complete practical object with its canonical ${canonicalKey} array containing 4-8 complete ordered phases.`,
  ];

  if (canonicalKey === "teachingSteps" && /Binary teaching phase/i.test(message)) {
    guidance.push(
      "For binary-conversion phases, fix the actual mathematics, not just its formatting. In a worked example, show the input expanded into its place-value terms and the verified decimal total (for example, 11010₂ = 1×16 + 1×8 + 0×4 + 1×2 + 0×1 = 26₁₀; use the activity's actual input and calculate its correct result).",
      "Every multi-digit number spoken in a phase must also appear in that phase's displayText. For each phase named in the error, either add the relevant value to its visible working or rewrite the narration to remove an unnecessary value; never leave spoken numbers invisible or preserve an incorrect answer.",
    );
    const missingValues = [...message.matchAll(/Binary teaching phase (\d+) speaks numeric values absent from displayText: ([\d,\s]+)\./gi)];
    for (const [, phase, values] of missingValues) {
      guidance.push(`Phase ${phase} currently speaks ${values.trim()}, which is missing from its displayText; show each value there as part of the correct explanation or revise the narration.`);
    }
    const calculationPhases = [...message.matchAll(/Binary teaching phase (\d+) must show its calculation/gi)];
    for (const [, phase] of calculationPhases) {
      guidance.push(`Phase ${phase} must display a real binary place-value calculation with multiple terms, an operator, and the correct result; a heading or answer alone is invalid.`);
    }
  }

  if (canonicalKey === "teachingSteps" && /teachingSteps=missing|teaching must contain 4-8 complete teaching phases/i.test(message)) {
    guidance.push(
      "The practical must include practical.teachingSteps as an array of 4-8 complete phases. Keep this field in the exact object returned; do not omit it, rename it to codeWalkthrough, or put the script only in narratorGuide, teacherTalk, or teachingPlaylist.",
      "Each phase needs its stepNumber, phase, displayText, speakerText, explanation, learnerPrompt, commonMistake, and recap. Return the entire practical, including its tasks, files, and workspace.",
    );
  }

  if (canonicalKey === "codeWalkthrough" && /hands an editing or execution action|asks the learner to edit or execute during the watch-only walkthrough/i.test(message)) {
    guidance.push(
      "The codeWalkthrough is teacher-led and watch-only until its final transfer phase. In every non-final phase, learnerPrompt must ask for a prediction or observation only; do not ask the learner to add, change, modify, edit, type, write, remove, delete, compile, run, or execute anything.",
      "Keep all narrated code edits, compilation, and execution as teacher demonstrations with visible code, terminalCommands, or terminalOutput. Move learner editing or running instructions to the final transfer phase or the practical tasks.",
    );
    const phases = [...message.matchAll(/code walkthrough phase (\d+) hands an editing or execution action/gi)];
    for (const [, phase] of phases) {
      guidance.push(`Rewrite codeWalkthrough phase ${phase}'s learnerPrompt as a concrete prediction or observation question. Do not instruct the learner to perform an action in that phase.`);
    }
    const validatorPhases = [...message.matchAll(/code walkthrough phase (\d+) asks the learner to edit or execute/gi)];
    for (const [, phase] of validatorPhases) {
      guidance.push(`Rewrite codeWalkthrough phase ${phase}'s learnerPrompt as a concrete prediction or observation question. Do not instruct the learner to perform an action in that phase.`);
    }
  }

  if (canonicalKey === "codeWalkthrough" && /discusses compilation or execution without a visible terminal command or output/i.test(message)) {
    guidance.push(
      "For every codeWalkthrough phase whose speakerText or learnerPrompt mentions compiling, running, executing, or terminal output, include a real visible terminalCommands array and/or terminalOutput in that same phase. Otherwise rewrite the narration and prompt so they do not claim or discuss execution.",
    );
    const phases = [...message.matchAll(/code walkthrough phase (\d+) discusses compilation or execution without a visible terminal command or output/gi)];
    for (const [, phase] of phases) {
      guidance.push(`Fix codeWalkthrough phase ${phase}: add the actual relevant command or expected output to that phase, or remove the execution claim from its narration and learnerPrompt.`);
    }
  }

  return `PREVIOUS RESPONSE VALIDATION FEEDBACK
=====================================
The previous response was rejected:
${message}

${guidance.map((item) => `- ${item}`).join("\n")}`;
}

function findChapterResponseItem(raw, entry) {
  const data = raw?.data?.practicals || raw?.data || raw?.result?.practicals || raw?.result || raw;
  const items = Array.isArray(data)
    ? data
    : Array.isArray(data?.practicals)
      ? data.practicals
      : [data];
  const expectedKey = `${entry.metadata.moduleNumber}.${entry.metadata.chapterNumber}`;
  return Array.isArray(items)
    ? items.find((item) => `${Number(item?.moduleNumber)}.${Number(item?.chapterNumber)}` === expectedKey)
    : undefined;
}

function buildChapterContinuationPrompt(prompt, error, canonicalKey, previousPractical) {
  const feedback = buildChapterRepairFeedback(error, canonicalKey);
  if (!previousPractical || typeof previousPractical !== "object") {
    return `${prompt}\n\n${feedback}`;
  }

  return `${prompt}

CONTINUATION OF THE REJECTED PRACTICAL (MANDATORY)
==================================================
Continue from the practical below; do not generate a different practical from
scratch. Preserve its valid title, activity, tasks, workspace, and phase
content. Make the smallest edits needed to fix every reported validation
failure. Keep the complete practical object and its canonical ${canonicalKey}
array in the returned response. Do not copy an incorrect calculation or value:
correct it in both narration and display wherever needed.

REJECTED PRACTICAL TO CONTINUE
==============================
${JSON.stringify(previousPractical, null, 2)}

${feedback}

Return the full corrected practical, not a patch or a description of changes.`;
}

function loadRepositoryEnv() {
  const envPath = path.join(REPOSITORY_ROOT, "backend", ".env");
  if (!fsSync.existsSync(envPath)) return;
  for (const line of fsSync.readFileSync(envPath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const separator = trimmed.indexOf("=");
    if (separator < 1) continue;
    const key = trimmed.slice(0, separator).trim();
    const value = trimmed.slice(separator + 1).trim().replace(/^"|"$/g, "");
    if (process.env[key] === undefined) process.env[key] = value;
  }
}

loadRepositoryEnv();

function parseOptions(argv) {
  const options = {};
  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (!argument.startsWith("--")) continue;
    const key = argument.slice(2);
    const next = argv[index + 1];
    options[key] = next !== undefined && !next.startsWith("--") ? argv[++index] : true;
  }
  return options;
}

function parseChapterKey(value) {
  const match = /^(\d+)\.(\d+)$/.exec(String(value || ""));
  if (!match) throw new Error("--chapter must use the module.chapter format, such as 1.2.");
  const moduleNumber = Number(match[1]);
  const chapterNumber = Number(match[2]);
  if (!Number.isInteger(moduleNumber) || moduleNumber < 1 || !Number.isInteger(chapterNumber) || chapterNumber < 1) {
    throw new Error("--chapter must contain positive module and chapter numbers.");
  }
  return { moduleNumber, chapterNumber };
}

function extractCourseChapters(markdown) {
  const headingRegex = /^(#{2,4})\s*Chapter\s+(\d+)\.(\d+)[ \t]*(?:[-—–:][ \t]*)?([^\r\n]*)$/gm;
  const chapters = new Map();
  for (const match of markdown.matchAll(headingRegex)) {
    const chapterModule = Number.parseInt(match[2], 10);
    const chapter = Number.parseInt(match[3], 10);
    const key = `${chapterModule}.${chapter}`;
    const existing = chapters.get(key);
    if (!existing || match[1].length >= existing.headingLevel) {
      chapters.set(key, {
        module: chapterModule,
        chapter,
        headingLevel: match[1].length,
        title: match[4].trim(),
      });
    }
  }
  return [...chapters.values()].sort((left, right) => (
    left.module - right.module || left.chapter - right.chapter
  ));
}

function findCourseChapter(markdown, moduleNumber, chapterNumber) {
  return extractCourseChapters(markdown).find((chapter) => (
    chapter.module === moduleNumber && chapter.chapter === chapterNumber
  ));
}

function isPathLike(value) {
  return typeof value === "string"
    && (path.isAbsolute(value)
      || /\.(md|markdown)$/i.test(value)
      || value.includes("/")
      || value.includes("\\"));
}

async function resolveSyllabusPath(options, courseId) {
  const courseArgument = options.course;
  if (options.syllabus) return options.syllabus;
  if (isPathLike(courseArgument)) return courseArgument;
  if (!courseId) return null;

  const lessonRoot = path.join(path.resolve(options["repo-root"] || REPOSITORY_ROOT), "docs", "computer-science");
  const targetName = `${courseId}.md`.toLowerCase();
  async function find(root) {
    let entries;
    try {
      entries = await fs.readdir(root, { withFileTypes: true });
    } catch {
      return null;
    }
    for (const entry of entries) {
      const candidate = path.join(root, entry.name);
      if (entry.isDirectory()) {
        const nested = await find(candidate);
        if (nested) return nested;
      } else if (entry.isFile() && entry.name.toLowerCase() === targetName) {
        return candidate;
      }
    }
    return null;
  }
  return find(lessonRoot);
}

function buildDefaultPrompt() {
  return `You are an expert computer science educator and educational technologist designing interactive, exploratory practical labs for Cohortia.

EDUCATIONAL PHILOSOPHY:
These are exploratory learning labs, NOT exams, tests, or quizzes. The learner must feel empowered to experiment, observe cause-and-effect, and learn through discovery. Avoid rigid, brittle string matching or punitive checks.

REQUIREMENTS:
1. Return exactly one practical for the single requested chapter. Do not include another chapter.
2. Preserve each chapter's original activity title, objectives, and ordered steps.
  2A. TEACH VIEW OPENING CONTENT:
   - Every practical must provide a complete teachViewOpening for the first Teach Mode orientation screen. This is not the walkthrough screen and it must be present for Terminal Coding, Cloud Console, Scenario & Design, and Research & Analysis practicals.
   - Make each practical's title, summary, objectives, instructions, learner artifact, tasks, and teaching steps specific to its source chapter and hands-on activity. The opening must present a practical mission, what is coming up, why it matters, practical actions, applied chapter concepts, an activity-specific workflow, and getting-ready instructions.
   - Use observable practical actions, the actual learner artifact, and only concepts grounded in STRUCTURED LESSON CONTEXT. Avoid generic course-level introductions and do not invent or redefine chapter concepts.
3. Category-Specific Design:
   - Terminal Coding Labs:
     * Provide complete, syntactically valid starter code that runs without crashing on day 1.
     * Include clear guided scaffolding comments:
       # STEP 1: Run and observe the baseline output
       # STEP 2: Modify the logic to achieve the milestone
       # STEP 3: Experiment with an edge case
     * DO NOT provide empty files or single '# TODO' lines.
     * Test observable behavior and edge cases; do not pass a task only because source text matches a regular expression.
     * Where compile-time access rules matter, include compile_probe tests for both permitted and rejected access. Each must provide probeSource plus expectCompileSuccess; rejected probes must also require an expectedDiagnostic such as "protected" or "private". Rename main before including the learner's C++ source, then define a probe main.
     * C++ file-writing activities must use std::ofstream and verify real output-file paths, contents, and append behavior where relevant.
     * Never call a marker or prefix encryption. Only claim memory safety when an explicit sanitizer check runs successfully.
     * Use file_exists checks for generated artifacts with an exact relative path; file_contents checks must include a path and expected content.
     * Never describe this backend process runner as an OS-isolated sandbox.
   - Scenario & Design:
     * If the activity covers binary conversions, bits, or number systems, set widgetType to "binary_converter".
     * If algorithmic, break into structured design steps (inputs/outputs, step-by-step logic, edge case analysis).
     * Create 4–8 ordered teachingSteps as the sole canonical spoken script for this practical. Each step represents one real phase (orientation, worked example, guided practice, or transfer), with concise progressive displayText, 80–120 words of speakerText, a concise explanation, a learnerPrompt, a likely commonMistake, a recap, and a duration matching the spoken text. The separate opening screen already welcomes the learner and introduces the chapter and mission: do not repeat that welcome, recap, or mission in phase 1. Begin phase 1 with the first concrete activity concept, teach from a source-grounded worked example, ask the learner to predict or try a related step, address a likely misconception, and finish by handing control to independent practice. Do not write alternate narration in narratorGuide, task narratorGuide, teacherTalk, or teachingPlaylist; the generator derives those display fields from this canonical sequence.
     * Every number, calculation, evidence claim, option comparison, constraint, and worked result spoken in a phase must also appear as visible line-by-line content in that same phase's displayText. For binary conversions, show place values and the full arithmetic, not just the input and answer. For design decisions, compare at least two named options against explicit constraints, state their trade-off, and show the selected choice and expected outcome.
   - Research & Analysis / Non-Code:
     * Structure as a guided inquiry notebook with observation prompts, hypothesis formation, and comparative analysis.
     * Create 4–8 ordered teachingSteps as the sole canonical spoken script for this practical. Each step must have phase, concise progressive displayText, 80–120 words of source-grounded speakerText, concise explanation, learnerPrompt, commonMistake, recap, and duration matching the spoken text. Start with a warm chapter connection and investigation question; model examining evidence, separating observation from inference, testing a hypothesis, and finish with an independent inquiry. Do not author competing narration fields; the generator derives them from these steps.
   - Cloud Console:
     * Provide realistic CLI scenarios with contextual mock command responses.
     * Create 4–8 ordered teachingSteps as the sole canonical spoken script for this practical. Each step must have phase, concise progressive displayText, 80–120 words of topic-grounded speakerText, concise explanation, learnerPrompt, commonMistake, recap, and duration matching the spoken text. Start with the operational goal and starting resource state, teach each safe simulated/read-only action and its consequence, invite a prediction, explain verification, and end with a safe “Your turn” command-plan. Do not author competing narration fields; the generator derives them from these steps.
     * Explain each command in plain language, including a familiar real-world consequence, and use simulations or read-only resources only.
4. Tasks & Milestones:
   - Build 3–5 progressive milestones per practical.
   - Keep task instructions and teaching support specific to their assigned milestones. Do not write a separate task narratorGuide or duplicate teacherTalk narration; the generator derives task guidance from the canonical teaching phases.
   - Assign stepType ("observe", "modify", "experiment", "verify") to each task.
   - Provide 3-tier progressive hints (nudge, concept, walkthrough) in structuredHints and as hints array.
   - Provide 1–3 task-specific inlineSuggestions with concise coaching and optional small insertionText fragments. These are static manifest content, never runtime AI responses, and must not reveal a complete solution.
5. Canonical Narration:
   - Use teachingSteps as the sole canonical spoken script for scenario, research, and cloud activities; use codeWalkthrough as the sole canonical spoken script for terminal coding.
   - The separate opening screen introduces the course/chapter and practical mission. The first canonical phase must start teaching the first activity-specific concept, without a repeated greeting, chapter recap, or mission. Later phases should model the work, invite learner reasoning, explain a likely mistake, and close with a recap and transfer handoff.
   - Do not repeat the hands-on activity verbatim or create parallel narratorGuide, playlist narratorScript, task narratorGuide, or teacherTalk narration. The generator derives those fields from the canonical phases.
   - Write speech synthesis-friendly prose: explain symbols by meaning when needed, avoid reading raw punctuation or code as a robot, and end complete spoken sentences.
6. Synchronized Animated CodeWalkthrough (TERMINAL CODING LABS ONLY):
   - Provide a 'codeWalkthrough' array containing 4–8 ordered teaching phases. The learner is watching a teacher demonstration and cannot edit or run the workspace in these slides. The first phase may show the complete baseline file; middle phases must show only the focused 1–5 line block for the new concept or change; the final transfer phase may show the complete final file. Never repeat an identical code block in adjacent phases. The classroom UI reveals each phase line-by-line inside one slide. Create a new stage only for a genuine phase change such as orientation, observe, modify, verify, or transfer.
   - For EACH stage, provide:
     * stepNumber: 1, 2, 3...
     * phase, speakerText (~80–120 words), displayText, explanation, learnerPrompt, commonMistake, recap, and durationSeconds matching the narration. Explain the code’s purpose, underlying concept, and a relevant example. Preserve chapter details; do not paraphrase the activity or introduce unrelated topics.
     * codeLine: The exact code shown in this phase. Use a complete baseline/final file only for the opening/transfer phases; use a focused code block for middle phases.
     * file: Relative file path (e.g., 'greeting.c' or 'main.py').
     * terminalCommands / terminalOutput: Include visible teacher commands or expected output whenever the narration mentions compiling, running, executing, or observing program output.
     * explanation: A concise on-screen annotation / callout.
     * durationSeconds: Estimated audio speech time from the actual speakerText.
   - This empowers the frontend to animate the code and teacher evidence line-by-line in sync with narration before the student attempts the interactive tasks. Do not ask the learner to edit, compile, or run during the walkthrough. Do not use codeWalkthrough to fake code for Scenario & Design activities; use the progressive teachingSteps format above.
7. Scenario & Design Excellence:
   - If the category is 'Scenario & Design Exercise', create a highly descriptive world/context. Use 'widgetType' to select specialized UI tools (binary_converter, memory_diagram, etc.).
   - Break the problem into 'Think First' steps before any implementation. The first scene should set up the problem, middle scenes should reveal the working method one line at a time, and the final scene should prepare the learner to solve a related problem independently.
8. Cloud Console Teaching Excellence:
   - Start with the operational goal and the resource state the learner should expect. Reveal each safe command or console action progressively, explain what it changes or verifies, and then let the learner make a related decision in “Your turn.”
9. Research & Analysis Guidance:
   - For 'Research & Analysis' practicals, focus on guided inquiry. The narrator should act as a lead researcher, asking the student to form hypotheses and document observations in the provided task areas.
10. Do NOT invent a different exercise or use source material from another chapter.
11. Use the STRUCTURED LESSON CONTEXT as the teaching spine. Return an activityMapping array for every numbered source activity step. Each entry must include activityStepId, taskId, lessonScreenIds, teachingStepNumbers, and relevant concepts. Preserve source activity order; never let playlist order differ from teaching order.
12. Begin the canonical sequence with a brief course/chapter connection and activity orientation before implementation. End with a learner-transfer phase that explicitly hands control to the Your turn activity.
7. Infer labType from each activity, but prefer simulation/manual review when execution would need host, production, credential, or unrestricted network access.
8. Keep all generated file paths relative to the practical workspace and never use absolute paths or parent-directory segments.
9. Do not return teachingPlaylist; the generator derives it from the canonical teaching sequence.
10. Return only valid JSON matching the requested chapter response schema.`;
}

function buildChapterPrompt(promptTemplate, entry, metadata) {
  const { sourceContext, metadata: chapterMetadata } = entry;
  const chapterSection = `CHAPTER ${chapterMetadata.moduleNumber}.${chapterMetadata.chapterNumber}
=========================================
Chapter title: ${sourceContext.activityChapter.chapterTitle}
Source category: ${sourceContext.source.category}
Source key: ${sourceContext.source.sourceKey}
Source hash: ${sourceContext.source.sourceHash}

HANDS-ON ACTIVITY (AUTHORITATIVE SOURCE)
-----------------------------------------
${sourceContext.activityChapter.handsOnActivity || "(none provided - cannot generate practical)"}

ACTIVITY SOURCE CHAPTER
-----------------------
${sourceContext.activityChapter.raw}

LESSON SOURCE CHAPTER
--------------------
${sourceContext.lessonChapter.raw || "(lesson source unavailable)"}

STRUCTURED LESSON CONTEXT
-------------------------
${JSON.stringify(sourceContext.lessonContext || {}, null, 2)}

ACTIVITY STEP MAP
-----------------
${JSON.stringify(sourceContext.activitySteps || [], null, 2)}`;

  return `${promptTemplate}

CHAPTER RESPONSE CONTRACT
========================
Return one JSON object containing:
- moduleNumber: ${chapterMetadata.moduleNumber}
- chapterNumber: ${chapterMetadata.chapterNumber}
- practical: the complete practical object for this chapter

COURSE AND CHAPTER METADATA
==========================
${JSON.stringify(metadata, null, 2)}

${chapterSection}

TEACH VIEW OPENING CONTENT
==========================
Provide concrete, chapter-grounded title, summary, objectives, tasks, workspace data, and teaching steps for this practical. The normalizer publishes the required teachViewOpening from those fields and the structured lesson concepts. Keep the opening specific to its category and hands-on activity.`;
}

function normalizeChapterResponse(raw, entry) {
  const expectedKey = `${entry.metadata.moduleNumber}.${entry.metadata.chapterNumber}`;
  const data = raw?.data?.practicals || raw?.data || raw?.result?.practicals || raw?.result || raw;
  const candidates = Array.isArray(data)
    ? data
    : Array.isArray(data?.practicals)
      ? data.practicals
      : [data];
  const matchingCandidates = candidates.filter((item) => (
    `${Number(item?.moduleNumber)}.${Number(item?.chapterNumber)}` === expectedKey
    && item?.practical
    && typeof item.practical === "object"
  ));
  if (!matchingCandidates.length) {
    throw new Error(`Chapter response omitted practical ${expectedKey}.`);
  }

  let lastError;
  for (const candidate of matchingCandidates) {
    const canonicalKey = canonicalScriptKeyForEntry(entry);
    let practical;
    try {
      practical = normalizePractical(candidate.practical, entry.sourceContext, entry.metadata);
      assertValidPractical(practical);
      return [{ ...entry, practical }];
    } catch (error) {
      const canonicalValue = practical?.[canonicalKey] || candidate.practical?.[canonicalKey];
      const canonicalCount = Array.isArray(canonicalValue) ? canonicalValue.length : "missing";
      lastError = new Error(
        `Chapter ${expectedKey} failed practical validation (${canonicalKey}=${canonicalCount}): ${error.message}`,
        { cause: error },
      );
    }
  }
  throw lastError;
}

function resolveInputPath(value, repoRoot) {
  return path.isAbsolute(value) ? value : path.resolve(repoRoot, value);
}

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function importGeneratedPractical(practicalPath) {
  const maxLaunchAttempts = process.platform === "win32" ? 3 : 1;
  let lastError;

  for (let attempt = 1; attempt <= maxLaunchAttempts; attempt += 1) {
    try {
      return await new Promise((resolve, reject) => {
        const child = spawn(process.execPath, [PRACTICAL_IMPORTER_PATH, "--practical", practicalPath], {
          cwd: BACKEND_ROOT,
          env: process.env,
          stdio: ["ignore", "pipe", "pipe"],
          windowsHide: true,
        });
        let stdout = "";
        let stderr = "";
        child.stdout.on("data", (chunk) => { stdout += chunk; });
        child.stderr.on("data", (chunk) => { stderr += chunk; });
        child.once("error", (error) => {
          error.importerPath = PRACTICAL_IMPORTER_PATH;
          reject(error);
        });
        child.once("exit", (code) => {
          if (code === 0) {
            resolve({ practicalPath, output: stdout.trim() });
            return;
          }
          reject(new Error(`Turso import failed for ${practicalPath}: ${(stderr || stdout || `exit code ${code}`).trim()}`));
        });
      });
    } catch (error) {
      lastError = error;
      const canRetryLaunch = error?.code === "EPERM" && attempt < maxLaunchAttempts;
      if (!canRetryLaunch) {
        if (error?.code === "EPERM") {
          throw new Error(`Could not launch the Turso importer (${PRACTICAL_IMPORTER_PATH}) for ${practicalPath}: EPERM after ${attempt} attempts. Check Windows security software or process permissions.`);
        }
        throw error;
      }
      await wait(500 * attempt);
    }
  }

  throw lastError;
}

async function buildChapterEntry({
  repoRoot,
  syllabusPath,
  courseId,
  moduleNumber,
  chapterNumber,
  activitySourcePath,
  lessonSourcePath,
  category,
  model,
  skipWithoutActivity = false,
  skippedChapters = [],
}) {
  const syllabusMarkdown = await fs.readFile(syllabusPath, "utf8");
  const chapter = findCourseChapter(syllabusMarkdown, moduleNumber, chapterNumber);
  if (!chapter) throw new Error(`Chapter ${moduleNumber}.${chapterNumber} was not found in the course syllabus.`);
  const generated = new Date().toISOString();
  const sourceContext = await resolveSourceContext({
    repoRoot,
    syllabusPath,
    activitySourcePath,
    lessonSourcePath,
    courseId,
    moduleNumber: chapter.module,
    chapterNumber: chapter.chapter,
    category,
  });
  if (!sourceContext.activityChapter.handsOnActivity) {
    if (!skipWithoutActivity) throw new Error(`Chapter ${chapter.module}.${chapter.chapter} has no hands-on activity.`);
    skippedChapters.push({
      moduleNumber: chapter.module,
      chapterNumber: chapter.chapter,
      chapterTitle: chapter.title,
      reason: "No hands-on activity was found in the syllabus source.",
    });
    return null;
  }
  return {
    sourceContext,
    metadata: {
      courseId: sourceContext.courseId,
      moduleNumber: chapter.module,
      chapterNumber: chapter.chapter,
      generated,
      model,
      category: sourceContext.source.category,
      sourceKey: sourceContext.source.sourceKey,
      sourceHash: sourceContext.source.sourceHash,
      lessonHash: sourceContext.lessonHash,
    },
  };
}

async function generateChapter(options, { importPractical = importGeneratedPractical } = {}) {
  const repoRoot = path.resolve(options["repo-root"] || REPOSITORY_ROOT);
  if (options.provider) {
    const provider = String(options.provider).trim().toLowerCase();
    if (!['azure', 'gemini'].includes(provider)) {
      throw new Error(`Unsupported provider "${options.provider}". Use --provider azure or --provider gemini.`);
    }
    process.env.AI_PROVIDER = provider;
  }
  const courseId = options["course-id"] || (!isPathLike(options.course) ? options.course : undefined);
  const requestedSyllabus = await resolveSyllabusPath(options, courseId);
  if (!requestedSyllabus) throw new Error("Pass --course <course id or syllabus path>, --course-id, or --syllabus.");
  const syllabusPath = resolveInputPath(requestedSyllabus, repoRoot);
  const { moduleNumber, chapterNumber } = parseChapterKey(options.chapter);
  const model = options.model || DEFAULT_MODEL;
  const entry = await buildChapterEntry({
    repoRoot,
    syllabusPath,
    courseId,
    moduleNumber,
    chapterNumber,
    activitySourcePath: options["activity-source"],
    lessonSourcePath: options["lesson-source"],
    category: options.category,
    model,
  });
  const allEntries = [entry];
  const resolvedCourseId = entry.sourceContext.courseId;

  const outputRoot = resolveInputPath(options.output || "generated/learning-board-practicals", repoRoot);
  let entries = allEntries;
  const chaptersToImport = [];
  if (options["dry-run"] !== true && options.force !== true) {
    const generationRecord = await readCourseGenerationRecord(outputRoot, resolvedCourseId);
    const completedChapters = { ...(generationRecord.completedChapters || {}) };
    const pendingEntries = [];
    for (const entry of allEntries) {
      const chapterKey = `${entry.metadata.moduleNumber}.${entry.metadata.chapterNumber}`;
      const recordEntry = completedChapters[chapterKey];
      const artifactPath = recordEntry?.artifactPath
        ? path.resolve(outputRoot, recordEntry.artifactPath)
        : path.join(outputRoot, resolvedCourseId, `m${entry.metadata.moduleNumber}-c${entry.metadata.chapterNumber}`, "practical.json");
      let manifest;
      try {
        manifest = JSON.parse(await fs.readFile(artifactPath, "utf8"));
      } catch (error) {
        if (error.code !== "ENOENT" && !(error instanceof SyntaxError)) throw error;
      }

      const reusable = Boolean(manifest
        && manifest.courseId === resolvedCourseId
        && manifest.moduleNumber === entry.metadata.moduleNumber
        && manifest.chapterNumber === entry.metadata.chapterNumber
        && manifest.practical
        && manifest.practical.source?.sourceHash === entry.metadata.sourceHash
        && (!recordEntry || recordEntry.sourceHash === entry.metadata.sourceHash));

      if (!reusable) {
        pendingEntries.push(entry);
        continue;
      }

      const artifactRelativePath = path.relative(outputRoot, artifactPath).replaceAll("\\", "/");
      if (!recordEntry || !["generated", "completed"].includes(recordEntry.status)) {
        completedChapters[chapterKey] = {
          status: "generated",
          kind: "practical",
          module: entry.metadata.moduleNumber,
          chapter: entry.metadata.chapterNumber,
          sourceHash: entry.metadata.sourceHash,
          artifactPath: artifactRelativePath,
          generatedAt: new Date().toISOString(),
        };
        await writeCourseGenerationRecord(outputRoot, {
          id: resolvedCourseId,
          title: entry.sourceContext.courseTitle || resolvedCourseId,
        }, syllabusPath, { completedChapters });
      }
      console.log(`Resuming from record.json: reusing practical ${resolvedCourseId} ${chapterKey}.`);
      if (completedChapters[chapterKey].status !== "completed") {
        chaptersToImport.push({ entry, artifactPath });
      }
    }
    entries = pendingEntries;
  }

  const imports = [];
  for (const { entry, artifactPath } of chaptersToImport) {
    if (options["skip-import"] === true) continue;
    const imported = await importPractical(artifactPath);
    imports.push(imported.practicalPath);
    const chapterKey = `${entry.metadata.moduleNumber}.${entry.metadata.chapterNumber}`;
    const generationRecord = await readCourseGenerationRecord(outputRoot, resolvedCourseId);
    const completedChapters = { ...(generationRecord.completedChapters || {}) };
    completedChapters[chapterKey] = {
      ...completedChapters[chapterKey],
      status: "completed",
      importedAt: new Date().toISOString(),
    };
    await writeCourseGenerationRecord(outputRoot, {
      id: resolvedCourseId,
      title: entry.sourceContext.courseTitle || resolvedCourseId,
    }, syllabusPath, { completedChapters });
    console.log(`✓ Imported practical into Turso: ${entry.metadata.moduleNumber}.${entry.metadata.chapterNumber}`);
  }

  if (!entries.length) {
    return {
      status: "resumed",
      courseId: resolvedCourseId,
      chapterKey: `${moduleNumber}.${chapterNumber}`,
      targets: [],
      imports,
    };
  }

  const targets = [];
  const persistedChapterKeys = new Set();
  const persistPractical = async (entry) => {
    const chapterKey = `${entry.metadata.moduleNumber}.${entry.metadata.chapterNumber}`;
    if (persistedChapterKeys.has(chapterKey)) return;

    const target = await writePractical(
      entry.practical,
      outputRoot,
      resolvedCourseId,
      entry.metadata.moduleNumber,
      entry.metadata.chapterNumber,
      entry.sourceContext,
    );
    targets.push(target);

    const generationRecord = await readCourseGenerationRecord(outputRoot, resolvedCourseId);
    const completedChapters = { ...(generationRecord.completedChapters || {}) };
    completedChapters[chapterKey] = {
      status: "generated",
      kind: "practical",
      module: entry.metadata.moduleNumber,
      chapter: entry.metadata.chapterNumber,
      sourceHash: entry.metadata.sourceHash,
      artifactPath: path.relative(outputRoot, path.join(target, "practical.json")).replaceAll("\\", "/"),
      generatedAt: new Date().toISOString(),
    };
    await writeCourseGenerationRecord(outputRoot, {
      id: resolvedCourseId,
      title: entry.sourceContext.courseTitle || resolvedCourseId,
    }, syllabusPath, { completedChapters });

    if (options["skip-import"] !== true) {
      const imported = await importPractical(path.join(target, "practical.json"));
      imports.push(imported.practicalPath);
      completedChapters[chapterKey] = {
        ...completedChapters[chapterKey],
        status: "completed",
        importedAt: new Date().toISOString(),
      };
      await writeCourseGenerationRecord(outputRoot, {
        id: resolvedCourseId,
        title: entry.sourceContext.courseTitle || resolvedCourseId,
      }, syllabusPath, { completedChapters });
      console.log(`✓ Imported practical into Turso: ${entry.metadata.moduleNumber}.${entry.metadata.chapterNumber}`);
    }

    persistedChapterKeys.add(chapterKey);
  };

  const promptTemplate = options["prompt-template"]
    ? await fs.readFile(resolveInputPath(options["prompt-template"], repoRoot), "utf8")
    : buildDefaultPrompt();
  const prompt = buildChapterPrompt(promptTemplate, entry, {
    courseId: resolvedCourseId,
    moduleNumber,
    chapterNumber,
    model,
  });

  if (options["dry-run"] === true) {
    return {
      status: "dry-run",
      courseId: resolvedCourseId,
      moduleNumber,
      chapterKey: `${moduleNumber}.${chapterNumber}`,
      source: entry.sourceContext.source,
      promptCharacters: prompt.length,
    };
  }

  let result;
  if (options["mock-response"]) {
    const mockDocument = JSON.parse(await fs.readFile(
      resolveInputPath(options["mock-response"], repoRoot),
      "utf8"
    ));
    result = {
      success: true,
      data: mockDocument.data && mockDocument.success !== undefined ? mockDocument.data : mockDocument,
    };
  } else {
    result = await generateCompleteJson({
      prompt,
      systemPrompt: "",
      responseSchema: CHAPTER_RESPONSE_SCHEMA,
      maxTokens: 65536,
      temperature: 0.35,
      model,
    });
  }

  if (!result?.success) {
    const error = new Error(result?.error || "Gemini request failed");
    error.retryable = result.retryable !== false;
    throw error;
  }
  let normalized;
  try {
    normalized = normalizeChapterResponse(result.data, entry);
  } catch (error) {
    if (options["mock-response"]) throw error;

    const rejectedItem = findChapterResponseItem(result.data, entry);
    const canonicalKey = canonicalScriptKeyForEntry(entry);
    const baseChapterPrompt = `${buildChapterPrompt(promptTemplate, entry, {
      courseId: resolvedCourseId,
      moduleNumber,
      chapterNumber,
      model,
    })}

CHAPTER REPAIR CONTRACT (MANDATORY)
===================================
Continue the practical for chapter ${entry.metadata.moduleNumber}.${entry.metadata.chapterNumber}.
Return exactly one practical for this chapter. Its canonical spoken script is
the practical.${canonicalKey} array. It MUST contain 4, 5, 6, 7, or 8 complete
ordered phases; three phases is invalid. Preserve the chapter's activity and
category. Do not replace the canonical script with narratorGuide, teacherTalk,
teachingPlaylist, or a generic summary.`;
        const repairVisualContract = canonicalKey === "teachingSteps"
          ? `

DISPLAY TEXT REPAIR RULE (MANDATORY)
===================================
For EVERY teachingSteps item, displayText is the actual content rendered on the
teaching board during that phase, not its title or a one-line summary. It MUST
contain 2-6 non-empty lines separated by literal newline characters. One line
is invalid. Include the concrete information the teacher says in that phase:
show each calculation with its intermediate working and result, or show the
evidence and interpretation, or show named options, constraints, trade-offs,
and the decision outcome. Keep this content specific to the source activity.
Do not omit lines to make the answer shorter. Do not provide more than six
non-empty lines. Count them before returning the response.

FIRST PHASE SPEECH RULE (MANDATORY)
===================================
The opening screen already welcomes the learner and introduces the chapter and
mission. Phase 1 must not start with "Welcome", "Hello", or another greeting,
and must not repeat the chapter introduction or mission. Start directly with
the first concrete activity concept.

SPEAKER LENGTH RULE (MANDATORY)
===============================
Write 90-110 words of spoken prose per phase. Do not exceed 120 words.
The validator hard limit is 40-180 words, but do not use that full allowance.
Count whitespace-separated words before returning each speakerText.

SEMANTIC DISPLAY RULES (MANDATORY)
===================================
These are checked after the repair script is normalized. Every multi-digit
number, binary value, decimal value, or exact result spoken in a phase must
also appear visibly in that same phase's displayText. For binary or numeric
activities, show the input, the working or place values, the operator, and the
result in displayText; never leave a spoken value only in speakerText. For a
binary worked example, show the input expanded by place value, every term,
and the verified total (for example, 11010₂ = 1×16 + 1×8 + 0×4 + 1×2 +
0×1 = 26₁₀; calculate the actual activity answer rather than copying this
example). A displayText such as a title or answer alone is invalid. Check each
phase's narration against its displayText before returning the response.`
          : "";
        const completeChapterPrompt = `${baseChapterPrompt}${repairVisualContract}`;
        let repairedEntry;
        let lastValidationError = error;
        let lastRejectedPractical = rejectedItem?.practical;
        const maxChapterRepairAttempts = 4;
        for (let repairAttempt = 1; repairAttempt <= maxChapterRepairAttempts; repairAttempt += 1) {
          const chapterPrompt = lastValidationError
            ? buildChapterContinuationPrompt(
              completeChapterPrompt,
              lastValidationError,
              canonicalKey,
              lastRejectedPractical,
            )
            : completeChapterPrompt;
          const chapterResult = await generateCompleteJson({
            prompt: chapterPrompt,
            systemPrompt: "",
            responseSchema: chapterRepairResponseSchema(entry),
            maxTokens: 65536,
            temperature: 0.25,
            model,
          });
          if (!chapterResult?.success) {
            throw new Error(chapterResult?.error || "Gemini chapter repair failed");
          }
          try {
            validateChapterRepairScript(chapterResult.data, entry);
            [repairedEntry] = normalizeChapterResponse(chapterResult.data, entry);
            break;
          } catch (validationError) {
            lastValidationError = validationError;
            const rejectedItem = findChapterResponseItem(chapterResult.data, entry);
            lastRejectedPractical = rejectedItem?.practical;
            if (repairAttempt < maxChapterRepairAttempts) {
              console.warn(
                `Chapter ${entry.metadata.moduleNumber}.${entry.metadata.chapterNumber} repair attempt ${repairAttempt}/${maxChapterRepairAttempts} failed validation: ${validationError.message}`,
              );
            }
          }
        }
        if (!repairedEntry) {
          const repairError = new Error(
            `Chapter ${entry.metadata.moduleNumber}.${entry.metadata.chapterNumber} repair failed after ${maxChapterRepairAttempts} attempts: ${lastValidationError?.message || "unknown validation error"}`,
          );
          repairError.retryable = false;
          throw repairError;
        }
    normalized = [repairedEntry];
  }
  for (const entry of normalized) {
    await persistPractical(entry);
  }

  return {
    status: "generated",
    courseId: resolvedCourseId,
    chapterKey: `${moduleNumber}.${chapterNumber}`,
    targets,
    imports,
  };
}

function usage() {
  return [
    "Usage:",
    "  node scripts/generate-learning-board-practical-chapter.js \\",
    "    --course-id <course-id> \\",
    "    --chapter <module.chapter> \\",
    "    [--output <dir>] [--dry-run] [--skip-import]",
    "",
    "The generator creates one validated chapter practical per request and imports it into Turso.",
    "Progress is checkpointed in <output>/record.json per chapter; rerun the same command to retry pending imports without regenerating saved practicals.",
    "Use --skip-import only when you explicitly need JSON files without publishing them.",
  ].join("\n");
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  generateChapter(parseOptions(process.argv.slice(2)))
    .then((result) => {
      console.log(JSON.stringify(result, null, 2));
    })
    .catch((error) => {
      console.error(`Error: ${error.message}`);
      console.error(usage());
      process.exitCode = 1;
    });
}

export {
  CHAPTER_RESPONSE_SCHEMA,
  buildChapterEntry,
  buildChapterPrompt,
  buildChapterRepairFeedback,
  buildChapterContinuationPrompt,
  chapterRepairResponseSchema,
  validateChapterRepairScript,
  extractCourseChapters,
  findCourseChapter,
  generateChapter,
  normalizeChapterResponse,
  parseOptions,
  resolveSyllabusPath,
};
