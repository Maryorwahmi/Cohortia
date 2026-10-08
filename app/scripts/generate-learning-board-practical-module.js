#!/usr/bin/env node
/**
 * Generate all practical candidates in one module with one Gemini request.
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
  PRACTICAL_SCHEMA,
  assertValidPractical,
  normalizePractical,
  resolveSourceContext,
  writePractical,
} from "./generate-learning-board-practical.js";

const REPOSITORY_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BACKEND_ROOT = path.join(REPOSITORY_ROOT, "backend");
const PRACTICAL_IMPORTER_PATH = path.join(BACKEND_ROOT, "scripts", "import-practicals.js");
const DEFAULT_MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";

const MODULE_RESPONSE_SCHEMA = {
  type: "object",
  properties: {
    practicals: {
      type: "array",
      items: {
        type: "object",
        properties: {
          moduleNumber: { type: "integer" },
          chapterNumber: { type: "integer" },
          practical: PRACTICAL_SCHEMA,
        },
        required: ["moduleNumber", "chapterNumber", "practical"],
      },
    },
  },
  required: ["practicals"],
};

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

function parseChapterNumbers(value, moduleNumber) {
  if (value === undefined || value === true || value === null || value === "") return null;
  const chapters = [...new Set(String(value)
    .split(/[\s,]+/)
    .filter(Boolean)
    .map((item) => Number.parseInt(item, 10)))];
  if (chapters.some((chapter) => !Number.isInteger(chapter) || chapter < 1)) {
    throw new Error("Chapter numbers must be positive integers.");
  }
  return chapters
    .sort((left, right) => left - right)
    .map((chapter) => ({ module: moduleNumber, chapter }));
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

function extractModuleChapters(markdown, moduleNumber) {
  return extractCourseChapters(markdown).filter((chapter) => chapter.module === moduleNumber);
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
1. Return exactly one practical candidate for every input chapter. Never merge chapters or omit a chapter.
2. Preserve each chapter's original activity title, objectives, and ordered steps.
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
     * Create 4–8 ordered teachingSteps for the animated teacher walkthrough. This is mandatory and replaces codeWalkthrough for this category.
     * Each teaching step must represent one real reasoning move, include a concise displayText that can type onto the board progressively, 25–50 words of speakerText, and a concise explanation callout. Do not return generic cards or a prose worksheet.
     * Map every teaching step to teachingPlaylist[].codeSteps in order, so the board can finish the walkthrough and automatically open the learner's interactive “Your turn” phase.
   - Research & Analysis / Non-Code:
     * Structure as a guided inquiry notebook with observation prompts, hypothesis formation, and comparative analysis.
   - Cloud Console:
     * Provide realistic CLI scenarios with contextual mock command responses.
     * Use the same teacher-led flow as coding and scenario practicals: a warm welcome, 4–8 progressive teachingSteps, then a safe “Your turn” command-plan and verification phase.
     * Explain each command in plain language, including a familiar real-world consequence, and use simulations or read-only resources only.
4. Tasks & Milestones:
   - Build 3–5 progressive milestones per practical.
   - For EACH task, provide a dedicated 'narratorGuide' (~100–150 words) that provides intensive, step-by-step conceptual coaching.
   - The task narrator guide should explain the 'why' behind the code, use analogies to make it real, and offer encouraging hints about what to observe in the output.
   - Assign stepType ("observe", "modify", "experiment", "verify") to each task.
   - Provide 3-tier progressive hints (nudge, concept, walkthrough) in structuredHints and as hints array.
   - Provide 1–3 task-specific inlineSuggestions with concise coaching and optional small insertionText fragments. These are static manifest content, never runtime AI responses, and must not reveal a complete solution.
5. Overall Narrator Guide (~300–500 words):
   - Begin with “Welcome” and use a calm, warm, conversational teacher voice (~100 wpm), never a robotic or command-only voice.
   - Name the course, module, chapter, and practical mission. Briefly connect the chapter idea to a familiar real-world use case before the first instruction.
   - Explain why each action matters, pause for predictions, use encouraging questions, preview milestones, and make clear that errors are useful evidence in discovery.
   - Write narration for speech synthesis: spell out symbols in prose rather than relying on punctuation. For example say “plus”, “slash”, “dot”, “opening curly brace”, and “closing curly brace”; never make the voice read raw code punctuation as a robot.
6. Synchronized Animated CodeWalkthrough (TERMINAL CODING LABS ONLY):
   - Provide a 'codeWalkthrough' array containing 4–8 ordered teaching steps that walk the student line-by-line through the foundational starter code.
   - For EACH step, provide:
     * stepNumber: 1, 2, 3...
     * speakerText: ~25-50 words of rich, line-by-line teaching spoken as the code line appears. Explain the syntax, purpose, and underlying computer science concept.
     * codeLine: The exact line or block of code added in this step (e.g., '#include <stdio.h>' or 'int main(void) {').
     * file: Relative file path (e.g., 'greeting.c' or 'main.py').
     * explanation: A concise on-screen annotation / callout.
     * durationSeconds: Estimated audio speech time (e.g., 6-12s).
   - This empowers the frontend to animate the code typing out line-by-line in perfect sync with the narrator's voice before the student attempts the interactive tasks. Do not use codeWalkthrough to fake code for Scenario & Design activities; use the progressive teachingSteps format above.
7. Scenario & Design Excellence:
   - If the category is 'Scenario & Design Exercise', create a highly descriptive world/context. Use 'widgetType' to select specialized UI tools (binary_converter, memory_diagram, etc.).
   - Break the problem into 'Think First' steps before any implementation. The first scene should set up the problem, middle scenes should reveal the working method one line at a time, and the final scene should prepare the learner to solve a related problem independently.
8. Cloud Console Teaching Excellence:
   - Start with the operational goal and the resource state the learner should expect. Reveal each safe command or console action progressively, explain what it changes or verifies, and then let the learner make a related decision in “Your turn.”
9. Research & Analysis Guidance:
   - For 'Research & Analysis' practicals, focus on guided inquiry. The narrator should act as a lead researcher, asking the student to form hypotheses and document observations in the provided task areas.
10. Do NOT invent a different exercise or use source material from another chapter.
11. Use the STRUCTURED LESSON CONTEXT as the teaching spine. Return an activityMapping array for every numbered source activity step. Each entry must include activityStepId, taskId, lessonScreenIds, teachingStepNumbers, and relevant concepts. Preserve source activity order; never let playlist order differ from teaching order.
12. Begin the playlist with a brief course/chapter connection and activity orientation before implementation. End with a learner-transfer scene that explicitly hands control to the Your turn phase.
7. Infer labType from each activity, but prefer simulation/manual review when execution would need host, production, credential, or unrestricted network access.
8. Keep all generated file paths relative to the practical workspace and never use absolute paths or parent-directory segments.
9. Return only valid JSON matching the requested module response schema.`;
}

function buildModulePrompt(promptTemplate, entries, metadata) {
  const chapterSections = entries.map((entry) => {
    const { sourceContext, metadata: chapterMetadata } = entry;
    return `CHAPTER ${chapterMetadata.moduleNumber}.${chapterMetadata.chapterNumber}
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
  }).join("\n\n");

  const expectedChapters = entries
    .map(({ metadata: chapterMetadata }) => `${chapterMetadata.moduleNumber}.${chapterMetadata.chapterNumber}`)
    .join(", ");

  return `${promptTemplate}

MODULE RESPONSE CONTRACT
========================
Return one JSON object with a "practicals" array. Each array item must contain:
- moduleNumber: the numeric module from the matching input chapter
- chapterNumber: the numeric chapter from the matching input chapter
- practical: the complete practical object for that chapter

Return exactly one item for each of these chapter keys, in this order: ${expectedChapters}
Never combine two chapters into one practical. Never return a practical for a chapter that is not listed.

COURSE AND MODULE METADATA
==========================
${JSON.stringify(metadata, null, 2)}

${chapterSections}`;
}

function normalizeModuleResponse(raw, entries) {
  const items = Array.isArray(raw)
    ? raw
    : raw?.practicals
      || raw?.data?.practicals
      || raw?.result?.practicals;
  if (!Array.isArray(items)) {
    const keys = raw && typeof raw === "object" ? Object.keys(raw).join(", ") : typeof raw;
    throw new Error(`Module response must contain a practicals array (received keys: ${keys || "none"}).`);
  }
  if (items.length !== entries.length) {
    throw new Error(`Module response returned ${items.length} practical(s); expected ${entries.length}.`);
  }

  const entriesByKey = new Map(entries.map((entry) => [
    `${entry.metadata.moduleNumber}.${entry.metadata.chapterNumber}`,
    entry,
  ]));
  const seenKeys = new Set();
  const normalized = [];

  for (const item of items) {
    const moduleNumber = Number(item?.moduleNumber);
    const chapterNumber = Number(item?.chapterNumber);
    const key = `${moduleNumber}.${chapterNumber}`;
    if (!Number.isInteger(moduleNumber) || !Number.isInteger(chapterNumber)) {
      throw new Error("Each module practical must declare integer moduleNumber and chapterNumber.");
    }
    if (!entriesByKey.has(key)) throw new Error(`Module response included unexpected chapter ${key}.`);
    if (seenKeys.has(key)) throw new Error(`Module response included duplicate chapter ${key}.`);
    if (!item.practical || typeof item.practical !== "object") {
      throw new Error(`Module response is missing the practical object for chapter ${key}.`);
    }

    const entry = entriesByKey.get(key);
    const practical = normalizePractical(item.practical, entry.sourceContext, entry.metadata);
    assertValidPractical(practical);
    seenKeys.add(key);
    normalized.push({ ...entry, practical });
  }

  for (const key of entriesByKey.keys()) {
    if (!seenKeys.has(key)) throw new Error(`Module response omitted chapter ${key}.`);
  }

  return normalized.sort((left, right) => (
    left.metadata.chapterNumber - right.metadata.chapterNumber
  ));
}

function resolveInputPath(value, repoRoot) {
  return path.isAbsolute(value) ? value : path.resolve(repoRoot, value);
}

function importGeneratedPractical(practicalPath) {
  return new Promise((resolve, reject) => {
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
    child.once("error", reject);
    child.once("exit", (code) => {
      if (code === 0) {
        resolve({ practicalPath, output: stdout.trim() });
        return;
      }
      reject(new Error(`Turso import failed for ${practicalPath}: ${(stderr || stdout || `exit code ${code}`).trim()}`));
    });
  });
}

async function buildModuleEntries({
  repoRoot,
  syllabusPath,
  courseId,
  moduleNumber,
  chapterNumbers,
  activitySourcePath,
  lessonSourcePath,
  category,
  model,
  skipWithoutActivity = false,
  skippedChapters = [],
}) {
  const syllabusMarkdown = await fs.readFile(syllabusPath, "utf8");
  const discoveredChapters = extractModuleChapters(syllabusMarkdown, moduleNumber);
  const selectedChapterNumbers = chapterNumbers?.length
    ? new Set(chapterNumbers)
    : null;
  const chapters = discoveredChapters.filter((chapter) => (
    !selectedChapterNumbers || selectedChapterNumbers.has(chapter.chapter)
  ));

  if (!chapters.length) {
    throw new Error(`No chapters found for module ${moduleNumber}${selectedChapterNumbers ? " and requested chapter filter" : ""}.`);
  }

  const generated = new Date().toISOString();
  const entries = [];
  for (const chapter of chapters) {
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
      if (skipWithoutActivity) {
        skippedChapters.push({
          moduleNumber: chapter.module,
          chapterNumber: chapter.chapter,
          chapterTitle: chapter.title,
          reason: "No hands-on activity was found in the syllabus source.",
        });
        continue;
      }
      throw new Error(`Chapter ${chapter.module}.${chapter.chapter} has no hands-on activity.`);
    }
    entries.push({
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
    });
  }
  if (!entries.length && !skipWithoutActivity) {
    throw new Error(`No chapters with hands-on activities were found for module ${moduleNumber}.`);
  }
  return entries;
}

async function generateModule(options) {
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
  const moduleNumber = Number(options.module);
  if (!Number.isInteger(moduleNumber) || moduleNumber < 1) {
    throw new Error("--module must be a positive integer.");
  }

  const chapterFilter = options.chapters ?? options.chapter;
  const requestedChapterEntries = chapterFilter === undefined || chapterFilter === true
    ? null
    : parseChapterNumbers(chapterFilter, moduleNumber);
  const chapterNumbers = requestedChapterEntries?.map((entry) => entry.chapter) || null;
  const model = options.model || DEFAULT_MODEL;
  const entries = await buildModuleEntries({
    repoRoot,
    syllabusPath,
    courseId,
    moduleNumber,
    chapterNumbers,
    activitySourcePath: options["activity-source"],
    lessonSourcePath: options["lesson-source"],
    category: options.category,
    model,
  });
  const resolvedCourseId = entries[0].sourceContext.courseId;
  if (entries.some((entry) => entry.sourceContext.courseId !== resolvedCourseId)) {
    throw new Error("All module chapters must resolve to the same course id.");
  }

  const promptTemplate = options["prompt-template"]
    ? await fs.readFile(resolveInputPath(options["prompt-template"], repoRoot), "utf8")
    : buildDefaultPrompt();
  const prompt = buildModulePrompt(promptTemplate, entries, {
    courseId: resolvedCourseId,
    moduleNumber,
    chapterNumbers: entries.map((entry) => entry.metadata.chapterNumber),
    model,
  });

  if (options["dry-run"] === true) {
    return {
      status: "dry-run",
      courseId: resolvedCourseId,
      moduleNumber,
      chapters: entries.map(({ sourceContext, metadata }) => ({
        moduleNumber: metadata.moduleNumber,
        chapterNumber: metadata.chapterNumber,
        source: sourceContext.source,
      })),
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
      responseSchema: MODULE_RESPONSE_SCHEMA,
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
  const normalized = normalizeModuleResponse(result.data, entries);
  const outputRoot = resolveInputPath(options.output || "generated/learning-board-practicals", repoRoot);
  const targets = [];
  const imports = [];
  for (const entry of normalized) {
    const target = await writePractical(
      entry.practical,
      outputRoot,
      resolvedCourseId,
      entry.metadata.moduleNumber,
      entry.metadata.chapterNumber,
      entry.sourceContext
    );
    targets.push(target);
    if (options["skip-import"] !== true) {
      const imported = await importGeneratedPractical(path.join(target, "practical.json"));
      imports.push(imported.practicalPath);
      console.log(`✓ Imported practical into Turso: ${entry.metadata.moduleNumber}.${entry.metadata.chapterNumber}`);
    }
  }

  return {
    status: "generated",
    courseId: resolvedCourseId,
    moduleNumber,
    chapters: normalized.map((entry) => `${entry.metadata.moduleNumber}.${entry.metadata.chapterNumber}`),
    targets,
    imports,
  };
}

function usage() {
  return [
    "Usage:",
    "  node scripts/generate-learning-board-practical-module.js \\",
    "    --course-id <course-id> \\",
    "    --module <num> \\",
    "    [--chapter <num[,num...]>] \\",
    "    [--output <dir>] [--dry-run] [--skip-import]",
    "",
    "The generator sends all selected chapters in one Gemini request, writes",
    "one validated practical manifest per chapter, then imports each generated chapter into Turso.",
    "Omit --chapter to generate every hands-on practical in the module.",
    "Use --skip-import only when you explicitly need JSON files without publishing them.",
  ].join("\n");
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  generateModule(parseOptions(process.argv.slice(2)))
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
  MODULE_RESPONSE_SCHEMA,
  buildModuleEntries,
  buildModulePrompt,
  extractCourseChapters,
  extractModuleChapters,
  generateModule,
  normalizeModuleResponse,
  parseOptions,
  resolveSyllabusPath,
};
