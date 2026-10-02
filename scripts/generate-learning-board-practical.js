#!/usr/bin/env node
/**
 * generate-learning-board-practical.js
 *
 * Gemini-powered Learning Board Practical Generator
 *
 * Generates structured practical labs with:
 * - Files with starter code
 * - Tasks with detailed instructions  
 * - Tests for validation
 * - Educator/narrator voice guide for the learner
 *
 * Usage:
 *   node scripts/generate-learning-board-practical.js \
 *     --course-id cs50s-introduction-to-computer-science \
 *     --module 1 \
 *     --chapter 2 \
 *     --output generated/learning-board-practicals
 *
 * Optional:
 *   --model gemini-2.5-flash
 *
 * Environment:
 *   GEMINI_API_KEY=...
 */

import fs from "node:fs/promises";
import fsSync from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { sourceHashFor } from "../app/backend/src/lib/practicalIdentity.js";
import { generateCompleteJson } from "./lib/gemini-rotating-client.js";

const REPOSITORY_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DEFAULT_MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";
const GENERATOR_VERSION = "phase5.1-intensive-teaching";
const CLASSIFIER_VERSION = "phase3.1";
const SOURCE_CATEGORIES = [
  "Cloud Console Lab",
  "Scenario & Design Exercise",
  "Terminal Coding Lab",
  "Research & Analysis",
];
const LAB_TYPES = ["code", "shell", "database", "cloud", "network", "security", "data", "simulation"];
const PRACTICAL_MODES = ["code_lab", "terminal_lab", "database_lab", "simulation_lab", "non_code_activity"];

function loadRepositoryEnv() {
  const envPath = path.join(REPOSITORY_ROOT, "app", "backend", ".env");
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

// JSON Schema for generated practical
const PRACTICAL_SCHEMA = {
  type: "object",
  properties: {
    mode: { type: "string", enum: PRACTICAL_MODES },
    sourceActivity: { type: "string", description: "Internal source reference for the hands-on activity; do not repeat the source text" },
    language: { type: "string", description: "Primary programming language" },
    runtime: { type: "string", description: "Runtime or compiler (e.g., clang, python, node)" },
    title: { type: "string", description: "Practical title from activity or inferred" },
    labType: { type: "string", enum: LAB_TYPES },
    objectives: {
      type: "array",
      items: { type: "string" },
      description: "Learning objectives for this practical"
    },
    instructions: { 
      type: "string", 
      description: "A concise learner-facing overview in 1-2 sentences. Do not paste the original syllabus activity, markdown, checklist, or code block."
    },
    narratorGuide: {
      type: "string",
      description: "A warm, calm 120-160 word spoken welcome. Teach the starting mental model, explain why the practical matters, and preview how the learner will investigate it. Never read the source activity."
    },
    teachingPlaylist: {
      type: "array",
      description: "One paced teacher-led scene for every task, in the same order. Include thoughtful pauses; do not summarize.",
      items: {
        type: "object",
        properties: {
          id: { type: "string" },
          title: { type: "string" },
          category: { type: "string" },
          description: { type: "string" },
          durationSeconds: { type: "number" },
          learningGoal: { type: "string" },
          narratorScript: { type: "string", description: "A warm, calm 180-220 word explanation, paced for a beginner. Explain why, walk through an example, troubleshoot likely confusion, and pause for the learner to think." },
          workedExample: { type: "string" },
          scenario: { type: "string" },
          learnerPrompt: { type: "string" },
          commonMistake: { type: "string" },
          recap: { type: "string" },
          codeSteps: { type: "array", items: { type: "integer" } }
        },
        required: ["id", "title", "category", "description", "durationSeconds", "learningGoal", "narratorScript", "workedExample", "scenario", "learnerPrompt", "commonMistake", "recap", "codeSteps"]
      }
    },
    codeWalkthrough: {
      type: "array",
      items: {
        type: "object",
        properties: {
          taskId: { type: "string", description: "The task/scene this code segment teaches" },
          stepNumber: { type: "integer" },
          speakerText: { type: "string", description: "In-depth narrator explanation spoken line-by-line (~25-50 words per code block)" },
          codeLine: { type: "string", description: "The exact line or block of code being added or typed out in this teaching step" },
          file: { type: "string", description: "File path being edited" },
          explanation: { type: "string", description: "Concise on-screen callout / annotation for the code" },
          durationSeconds: { type: "number", description: "Estimated duration in seconds (e.g. 5-12)" }
        },
        required: ["taskId", "stepNumber", "speakerText", "codeLine"]
      },
      description: "Line-by-line animated code-along teaching segments synchronized with narrator voice"
    },
    widgetType: {
      type: "string",
      description: "Optional specialized visual widget for Scenario & Design labs (e.g., binary_converter, memory_diagram, logic_gate, data_table)"
    },
    completionRule: { type: "string", enum: ["all_tests_pass", "any_test_pass", "learner_submission"], description: "How to determine if practical is complete" },
    files: {
      type: "array",
      items: {
        type: "object",
        properties: {
          path: { type: "string" },
          content: { type: "string" },
          description: { type: "string" }
        },
        required: ["path", "content"]
      },
      description: "Starter files with scaffolding and guided comments where learner writes code"
    },
    tasks: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "string" },
          title: { type: "string" },
          instruction: { type: "string", description: "One concise learner action for this task (1-3 sentences), rewritten for the interactive workspace; never paste the full source activity." },
          narratorGuide: { type: "string", description: "Task-specific teacher narration that explains the concept and code being shown. Do not repeat source instructions, markdown lists, or code blocks." },
          stepType: { type: "string", enum: ["observe", "modify", "experiment", "verify"], description: "Pedagogical phase of this milestone" },
          requiredConcepts: { type: "array", items: { type: "string" } },
          hints: { type: "array", items: { type: "string" }, description: "Hints or 3-tier progressive guidance" },
          structuredHints: {
            type: "object",
            properties: {
              nudge: { type: "string", description: "Tier 1: Reflective guiding question" },
              concept: { type: "string", description: "Tier 2: Refresher on core rule or formula" },
              walkthrough: { type: "string", description: "Tier 3: Concrete structural hint or code outline" }
            }
          },
          teaching: {
            type: "object",
            properties: {
              learningGoal: { type: "string" },
              teacherTalk: { type: "string", description: "180-220 words of warm, calm beginner-friendly teaching for this exact scene. Explain the concept from first principles and reason through an example." },
              realWorldExample: { type: "string" },
              guidedSteps: { type: "array", items: { type: "string" } },
              questions: { type: "array", items: { type: "string" } },
              expectedObservations: { type: "array", items: { type: "string" } },
              feedback: {
                type: "object",
                properties: {
                  success: { type: "string" },
                  misconception: { type: "string" },
                  retry: { type: "string" }
                }
              },
              recap: { type: "string" },
              waitForLearner: { type: "boolean" },
              estimatedMinutes: { type: "number" }
            },
            required: ["learningGoal", "teacherTalk", "realWorldExample", "guidedSteps", "questions", "expectedObservations", "recap", "waitForLearner", "estimatedMinutes"]
          },
          codeAnimationSegments: {
            type: "array",
            items: {
              type: "object",
              properties: {
                lineNumber: { type: "integer" },
                content: { type: "string" },
                narratorText: { type: "string" },
                durationMs: { type: "integer" },
                highlightType: { type: "string" }
              },
              required: ["lineNumber", "content", "narratorText", "durationMs", "highlightType"]
            }
          },
          terminalCommands: {
            type: "array",
            items: {
              type: "object",
              properties: {
                command: { type: "string" },
                expectedOutput: { type: "string" },
                timeIntoScene: { type: "integer" },
                lineNumber: { type: "integer" }
              },
              required: ["command", "expectedOutput"]
            }
          },
          estimatedDurationMinutes: { type: "number" },
          tests: {
            type: "array",
            items: {
              type: "object",
              properties: {
                type: { type: "string", enum: ["syntax", "runtime", "output", "file_exists", "integration"], description: "Test type" },
                expected: { type: "string", description: "Expected result or substring" },
                matchMode: { type: "string", enum: ["contains", "exact", "regex", "exit_code_zero", "variable_state"], description: "How to evaluate test" },
                data: { type: "string", description: "Test data, command, or expression" },
                explanation: { type: "string", description: "What this test verifies" }
              },
              required: ["type"]
            }
          }
        },
        required: ["id", "instruction", "narratorGuide", "teaching", "hints", "tests"]
      },
      description: "Ordered task steps with tests"
    },
    evidence: { type: "array", items: { type: "object" } },
    environment: { type: "object" },
    safety: { type: "object" },
    cleanup: { type: "object" },
    completionRules: { type: "object" },
    generator: { type: "object" }
  },
  required: ["mode", "title", "instructions", "narratorGuide", "teachingPlaylist", "files", "tasks"]
};

function isWithinRoot(root, candidate) {
  const relativePath = path.relative(path.resolve(root), path.resolve(candidate));
  return relativePath === "" || (!relativePath.startsWith("..") && !path.isAbsolute(relativePath));
}

function resolveWithinRoot(root, requestedPath, label) {
  if (!requestedPath) throw new Error(`${label} is required.`);
  const candidate = path.isAbsolute(requestedPath)
    ? path.resolve(requestedPath)
    : path.resolve(root, requestedPath);
  if (!isWithinRoot(root, candidate)) {
    throw new Error(`${label} must remain inside ${path.resolve(root)}.`);
  }
  return candidate;
}

function toPosixRelative(root, filePath) {
  return path.relative(root, filePath).split(path.sep).join("/");
}

function hashText(text) {
  return `sha256:${createHash("sha256").update(text, "utf8").digest("hex")}`;
}

function extractFrontmatterField(markdown, field) {
  const match = markdown.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) return null;
  return match[1].match(new RegExp(`^${field}:\\s*(.+)$`, "mi"))?.[1]?.trim() || null;
}

function extractActivityCategory(activity) {
  const match = activity.match(
    /^\s*\*{0,2}\s*(?:Category:\s*)?(Cloud Console Lab|Scenario & Design Exercise|Terminal Coding Lab|Research & Analysis)\s*\*{0,2}\s*$/im
  );
  return match?.[1] || null;
}

function inferActivityCategory(activity, chapterTitle = "") {
  const text = `${chapterTitle}\n${activity}`.toLowerCase();
  if (/\b(aws|azure|gcp|cloud console|cloud infrastructure|kubectl|terraform|deployment|iam policy)\b/.test(text)) {
    return "Cloud Console Lab";
  }
  if (/\b(ethical dilemma|case study|scenario|role.?play|design a|prototype|decision matrix|trade.?off)\b/.test(text)) {
    return "Scenario & Design Exercise";
  }
  if (/\b(research question|collect evidence|evaluate sources|compare sources|investigate|hypothesis|write a report|evidence-based)\b/.test(text)) {
    return "Research & Analysis";
  }
  if (/\b(program|programming|code|function|algorithm|compile|terminal|python|javascript|typescript|database|sql|query|binary|html|css)\b/.test(text)
    || /```/.test(text)) {
    return "Terminal Coding Lab";
  }
  return null;
}

function normalizeCourseId(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function extractActivityTitle(activity) {
  return activity.match(/^\s*\*{2}Activity:\s*(.+?)\*{2}\s*$/im)?.[1]?.trim()
    || activity.match(/^\s*\*{2}Objective:\s*(.+?)\*{2}\s*$/im)?.[1]?.trim()
    || null;
}

async function readExistingFile(filePath, label) {
  try {
    return await fs.readFile(filePath, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") throw new Error(`${label} was not found: ${filePath}`);
    throw error;
  }
}

async function findMarkdownFile(root, fileName) {
  const targetName = fileName.toLowerCase();
  const entries = await fs.readdir(root, { withFileTypes: true });
  for (const entry of entries) {
    const candidate = path.join(root, entry.name);
    if (entry.isDirectory()) {
      const nested = await findMarkdownFile(candidate, fileName);
      if (nested) return nested;
    } else if (entry.isFile() && entry.name.toLowerCase() === targetName) {
      return candidate;
    }
  }
  return null;
}

async function findCourseSyllabus(lessonRoot, courseId) {
  const normalizedCourseId = normalizeCourseId(courseId);
  if (!normalizedCourseId) return null;
  return findMarkdownFile(lessonRoot, `${normalizedCourseId}.md`);
}

function extractSection(block, heading) {
  const re = new RegExp(
    `####\\s+${heading}\\s*\\n([\\s\\S]*?)(?=\\n####\\s|\\n###\\s|\\n##\\s|$)`,
    "i"
  );
  return (block.match(re)?.[1] || "").trim();
}
function extractChapter(markdown, requestedChapter) {
  const headingRegex = /^(#{2,4})\s*Chapter\s+(\d+)\.(\d+)[ \t]*(?:[—–:-][ \t]*)?([^\r\n]*)$/gm;
  const headings = [...markdown.matchAll(headingRegex)];
  const parsedChapters = headings.map((match, index) => {
    const nextHeadingStart = headings[index + 1]?.index ?? markdown.length;
    return {
      headingLevel: match[1].length,
      moduleNumber: parseInt(match[2], 10),
      chapterNumber: parseInt(match[3], 10),
      heading: match[4].trim(),
      block: markdown.slice(match.index, nextHeadingStart).trim(),
    };
  });
  const canonicalChapters = new Map();
  for (const chapter of parsedChapters) {
    const key = `${chapter.moduleNumber}.${chapter.chapterNumber}`;
    const existing = canonicalChapters.get(key);
    if (!existing || chapter.headingLevel >= existing.headingLevel) {
      canonicalChapters.set(key, chapter);
    }
  }
  const chapters = [...canonicalChapters.values()].sort(
    (left, right) => left.moduleNumber - right.moduleNumber || left.chapterNumber - right.chapterNumber
  );

  if (!chapters.length) {
    throw new Error(`No chapters found in syllabus.`);
  }

  const [moduleNum, chapterNum] = requestedChapter.split(".").map(Number);
  const found = chapters.find((ch) => ch.moduleNumber === moduleNum && ch.chapterNumber === chapterNum);

  if (!found) {
    throw new Error(
      `Chapter "${requestedChapter}" not found.\nAvailable:\n${chapters
        .map((x) => `- ${x.moduleNumber}.${x.chapterNumber}: ${x.heading}`)
        .join("\n")}`
    );
  }

  const handsOnActivity = extractSection(found.block, "Hands-on activity");

  return {
    moduleNumber: found.moduleNumber,
    chapterNumber: found.chapterNumber,
    moduleTitle: `Module ${found.moduleNumber}`,
    chapterTitle: found.heading,
    handsOnActivity,
    raw: found.block
  };
}

async function resolveSourceContext({
  repoRoot = REPOSITORY_ROOT,
  syllabusPath,
  activitySourcePath,
  lessonSourcePath,
  courseId,
  moduleNumber,
  chapterNumber,
  category,
}) {
  const resolvedRepoRoot = path.resolve(repoRoot);
  const activityRoot = path.join(resolvedRepoRoot, "hand's-on activity");
  const lessonRoot = path.join(resolvedRepoRoot, "docs", "computer-science");
  const discoveredSyllabusFile = !syllabusPath && courseId
    ? await findCourseSyllabus(lessonRoot, courseId)
    : null;
  const syllabusFile = syllabusPath
    ? resolveWithinRoot(resolvedRepoRoot, syllabusPath, "Syllabus path")
    : discoveredSyllabusFile;

  let activityFile;
  let activityIsInlineWithSyllabus = false;
  if (activitySourcePath) {
    activityFile = resolveWithinRoot(activityRoot, activitySourcePath, "Activity source path");
  } else if (syllabusFile && isWithinRoot(activityRoot, syllabusFile)) {
    activityFile = syllabusFile;
  } else if (syllabusFile && isWithinRoot(lessonRoot, syllabusFile)) {
    const separateActivityFile = path.resolve(activityRoot, toPosixRelative(lessonRoot, syllabusFile));
    if (fsSync.existsSync(separateActivityFile)) {
      activityFile = resolveWithinRoot(activityRoot, toPosixRelative(lessonRoot, syllabusFile), "Activity source path");
    } else {
      activityFile = syllabusFile;
      activityIsInlineWithSyllabus = true;
    }
  } else {
    throw new Error(
      "Could not resolve the activity source. Pass --activity-source relative to hand's-on activity or use a syllabus under docs/computer-science."
    );
  }

  const activityMarkdown = await readExistingFile(activityFile, "Activity source");
  const requestedChapter = `${moduleNumber}.${chapterNumber}`;
  const activityChapter = extractChapter(activityMarkdown, requestedChapter);

  let lessonFile;
  if (lessonSourcePath) {
    lessonFile = resolveWithinRoot(lessonRoot, lessonSourcePath, "Lesson source path");
  } else if (syllabusFile && isWithinRoot(lessonRoot, syllabusFile)) {
    lessonFile = syllabusFile;
  } else {
    lessonFile = resolveWithinRoot(lessonRoot, toPosixRelative(activityRoot, activityFile), "Lesson source path");
  }

  const lessonMarkdown = await readExistingFile(lessonFile, "Lesson source");
  const lessonChapter = extractChapter(lessonMarkdown, requestedChapter);
  const resolvedCourseId = normalizeCourseId(
    courseId
      || extractFrontmatterField(lessonMarkdown, "course_id")
      || extractFrontmatterField(activityMarkdown, "course_id")
      || path.basename(lessonFile).replace(/\.(md|markdown)$/i, "")
  );
  if (!resolvedCourseId) {
    throw new Error("Could not determine the course id from the source files. Pass --course-id.");
  }

  const declaredCategory = extractActivityCategory(activityChapter.handsOnActivity);
  if (category && declaredCategory && category !== declaredCategory) {
    throw new Error(
      `Category mismatch for Chapter ${requestedChapter}: source declares "${declaredCategory}", but --category requested "${category}".`
    );
  }
  const resolvedCategory = declaredCategory || category || inferActivityCategory(
    activityChapter.handsOnActivity,
    activityChapter.chapterTitle,
  );
  if (!resolvedCategory) {
    throw new Error(
      `Chapter ${requestedChapter} has no supported hands-on activity category. Pass --category with one of: ${SOURCE_CATEGORIES.join(", ")}.`
    );
  }

  if (!SOURCE_CATEGORIES.includes(resolvedCategory)) {
    throw new Error(`Unsupported source category: ${resolvedCategory}`);
  }

  const sourcePath = activityIsInlineWithSyllabus
    ? toPosixRelative(lessonRoot, activityFile)
    : toPosixRelative(activityRoot, activityFile);
  const lessonPath = toPosixRelative(lessonRoot, lessonFile);
  const sourceHash = sourceHashFor({
    courseId: resolvedCourseId,
    module: moduleNumber,
    chapter: chapterNumber,
    sourcePath,
    category: resolvedCategory,
    sourceContent: activityMarkdown,
  });

  return {
    repoRoot: resolvedRepoRoot,
    activityPath: activityFile,
    lessonPath: lessonFile,
    activitySourcePath: sourcePath,
    lessonSourcePath: lessonPath,
    activityMarkdown,
    lessonMarkdown,
    activityChapter,
    lessonChapter,
    courseId: resolvedCourseId,
    source: {
      sourceKey: `${resolvedCourseId}/${moduleNumber}/${chapterNumber}`,
      category: resolvedCategory,
      sourcePath,
      sourceHash: `sha256:${sourceHash}`,
    },
    lessonHash: hashText(lessonMarkdown),
    activityTitle: extractActivityTitle(activityChapter.handsOnActivity),
    level: extractFrontmatterField(lessonMarkdown, "Level") || extractFrontmatterField(activityMarkdown, "Level"),
  };
}

async function loadPrompt(promptPath) {
  return fs.readFile(promptPath, "utf8");
}

function buildGeminiPrompt(promptTemplate, chapterData, metadata, sourceContext) {
  return `${promptTemplate}

MANDATORY INTENSIVE TEACHING STANDARD — APPLIES TO EVERY ACTIVITY CATEGORY
==========================================================================
This practical is the core teaching experience, not a brief task summary. Teach from the learner's starting point. Apply this standard equally to coding, terminal, database, cloud, security, research, data, network, design, and simulation activities.

Create at least 5 progressive scenes/tasks, with one teachingPlaylist scene per task and matching task IDs:
1. Build the beginner's mental model: define key terms, prerequisites, purpose, and why the concept matters.
2. Work through a concrete example slowly, explaining each decision and what evidence to notice.
3. Guide a small learner action with prediction prompts, explicit steps, and supportive hints.
4. Investigate a variation, common misconception, or realistic failure; model how to diagnose it safely.
5. Verify the result and transfer the idea to a new, realistic scenario; ask the learner to explain the evidence.
Add scenes when the source activity needs them. Keep the examples relevant and safe; do not invent unsupported facts.

For every scene, write 180-220 spoken words in narratorGuide, teaching.teacherTalk, and teachingPlaylist.narratorScript. Explain the concept (not just the action), why it works, a concrete example, likely confusion, and what the learner should observe. Use short, natural sentences and a warm, patient teacher voice. Address the learner directly. Never say "as an AI." Avoid reading code punctuation aloud; explain what each important line/decision does in plain language. End with a genuine pause or question so the learner can think and respond. The practical welcome should be 120-160 words.

Give each scene a meaningful 3-6 minute learning duration, with additional time where explanation, safe experimentation, or reflection requires it. Provide workedExample, learnerPrompt, commonMistake, recap, guidedSteps, expectedObservations, and actionable hints. Do not duplicate the source activity as instruction or narration. Rewrite it as a sequence of distinct, interactive learner actions.

Generate the complete lesson for the declared category. For non-code work, teach its real tools, evidence, decisions, and verification workflow; do not force irrelevant code examples. For code work, tie code walkthrough segments to their taskId and reveal code in meaningful small blocks. Keep every scene accurate to the supplied activity and lesson source.

RUNTIME INPUT
=============

CHAPTER
=======
Module: ${chapterData.moduleNumber}
Chapter: ${chapterData.chapterNumber}
Title: ${chapterData.chapterTitle}

HANDS-ON ACTIVITY (AUTHORITATIVE SOURCE)
=========================================
${chapterData.handsOnActivity || "(none provided - cannot generate practical)"}

COURSE METADATA
===============
${JSON.stringify(metadata, null, 2)}

ACTIVITY SOURCE CHAPTER
=======================
${chapterData.raw}

LESSON SOURCE CHAPTER
====================
${sourceContext?.lessonChapter?.raw || "(lesson source unavailable)"}
`;
}

async function callGemini({ model, prompt }) {
  const result = await generateCompleteJson({
    prompt,
    systemPrompt: "",
    responseSchema: PRACTICAL_SCHEMA,
    maxTokens: 65536,
    temperature: 0.35,
    model
  });
  return result;
}

function asStringArray(value) {
  return Array.isArray(value) ? value.filter((item) => typeof item === "string") : [];
}

function asStringText(value) {
  if (typeof value === "string") return value.trim();
  if (value && typeof value === "object") {
    if (typeof value.text === "string") return value.text.trim();
    if (typeof value.guide === "string") return value.guide.trim();
    if (typeof value.script === "string") return value.script.trim();
    if (typeof value.content === "string") return value.content.trim();
    if (typeof value.narration === "string") return value.narration.trim();
  }
  return "";
}

function learnerFacingText(value, fallback, { narration = false, sourceActivity = "" } = {}) {
  const text = asStringText(value);
  if (!text) return fallback;
  const normalizedText = text.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  const normalizedSource = asStringText(sourceActivity).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  const repeatsSource = normalizedSource.length >= 80 && normalizedText.includes(normalizedSource);
  const containsSourceFormatting = /```|(?:^|\n)\s*(?:\d+[.)]|[-*])\s/m.test(text);
  const exceedsLimit = text.length > (narration ? 1800 : 900);
  return repeatsSource || containsSourceFormatting || exceedsLimit ? fallback : text;
}

function teachingNarration(title, phase) {
  return `Let’s begin with ${title}. We will take this one idea at a time, and there is no need to rush. First, notice what information or materials are available and what result we are trying to understand. A useful mental model is to treat each step as a question: what do we know, what are we changing, and what evidence would show the change worked? For example, make one small, deliberate choice, then compare the result with what you expected. If the result is different, that is useful information, not a failure. We can inspect the evidence, revisit the relevant idea, and try again. In this ${phase} step, focus on explaining why your choice makes sense. Consider a second example: change one condition while keeping the others steady. This makes it easier to see which decision caused the result. Describe what you expect before acting, then use the outcome to refine your mental model. When something is unclear, pause and name the question rather than guessing. You can use the hints to uncover one clue at a time. By the end, connect the evidence to the goal and explain the reasoning in your own words. Pause here: what do you predict you will observe, and what would change your mind?`;
}

function clampInteger(value, fallback, minimum, maximum) {
  const number = Number(value);
  if (!Number.isInteger(number)) return fallback;
  return Math.min(maximum, Math.max(minimum, number));
}

function normalizeId(value, fallback) {
  const normalized = String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return normalized || fallback;
}

function inferLabType(raw, sourceContext) {
  if (LAB_TYPES.includes(raw.labType)) return raw.labType;
  const language = String(raw.language || "").toLowerCase();
  if (/^(bash|shell|sh|zsh|powershell)$/.test(language)) return "shell";
  if (/^(sql|postgresql|mysql|sqlite)$/.test(language)) return "database";
  if (/^(c|c\+\+|csharp|c#|go|java|javascript|typescript|kotlin|php|python|ruby|rust)$/.test(language)) return "code";
  const text = `${sourceContext.activityChapter.raw}\n${sourceContext.lessonChapter.raw}`.toLowerCase();
  if (/\b(postgres|mysql|sqlite|sql|schema|table|query|database)\b/.test(text)) return "database";
  if (/\b(cloud|aws|azure|gcp|kubectl|terraform|bucket|iam)\b/.test(text)) return "cloud";
  if (/\b(dns|packet|firewall|port|tcp|udp|network interface)\b/.test(text)) return "network";
  if (/\b(selinux|mfa|authentication|authorization|credential|secret|hardening)\b/.test(text)) return "security";
  if (/\b(bash|shell|terminal|linux|rhel|sudo|chmod|systemctl|vmstat|strace)\b/.test(text)) return "shell";
  if (/\b(pandas|matplotlib|csv|dataframe|dataset|statistics)\b/.test(text)) return "data";
  return sourceContext.source.category === "Terminal Coding Lab" ? "code" : "simulation";
}

function modeForLabType(labType, requestedMode) {
  if (PRACTICAL_MODES.includes(requestedMode)) return requestedMode;
  if (labType === "database") return "database_lab";
  if (["shell", "code"].includes(labType)) return "terminal_lab";
  if (labType === "simulation") return "simulation_lab";
  if (["cloud", "network", "security", "data"].includes(labType)) return "simulation_lab";
  return "non_code_activity";
}

function adapterForLabType(labType) {
  return {
    code: "code-sandbox",
    shell: "shell-sandbox",
    database: "database-sandbox",
    cloud: "cloud-simulator",
    network: "network-simulator",
    security: "security-simulator",
    data: "data-sandbox",
    simulation: "manual-simulation",
  }[labType] || "manual-simulation";
}

function checkTypeFor(test) {
  const mapping = {
    syntax: "command",
    runtime: "command",
    output: "output",
    file_exists: "file",
    integration: "manual",
  };
  return mapping[test.type] || (["command", "file", "output", "sql", "http", "manual", "simulation"].includes(test.type)
    ? test.type
    : "manual");
}

function checkFromTest(test, id, labType) {
  const type = checkTypeFor(test);
  const check = {
    id,
    type,
    adapter: test.adapter || adapterForLabType(labType),
    timeoutSeconds: clampInteger(test.timeoutSeconds, 30, 1, 300),
    visibility: ["learner", "reviewer", "hidden"].includes(test.visibility) ? test.visibility : "learner",
    explanation: typeof test.explanation === "string" ? test.explanation : "",
  };

  const command = test.command || (typeof test.data === "string" ? test.data : null);
  if (command && ["command", "output", "sql", "http"].includes(type)) check.command = command;
  if (typeof test.workingDirectory === "string") check.workingDirectory = "/workspace";
  if (test.passCondition && typeof test.passCondition === "object") {
    check.passCondition = test.passCondition;
  } else if (test.expected !== undefined) {
    check.passCondition = { expected: String(test.expected) };
  } else if (test.data && typeof test.data === "object") {
    check.passCondition = test.data;
  }
  if (typeof test.score === "number" && test.score >= 0) check.score = test.score;
  if (test.matchMode) check.matchMode = test.matchMode;
  if (test.variableCheck) check.variableCheck = test.variableCheck;
  return check;
}

function normalizeEnvironment(raw, practical, labType) {
  const environment = raw && typeof raw === "object" ? raw : {};
  const limits = environment.resourceLimits && typeof environment.resourceLimits === "object"
    ? environment.resourceLimits
    : {};
  const network = ["disabled", "fixture-only", "allowlisted"].includes(environment.network)
    ? environment.network
    : "disabled";
  const resetStrategy = ["fresh-workspace", "discard-workspace", "reset-service", "manual"].includes(environment.resetStrategy)
    ? environment.resetStrategy
    : "fresh-workspace";

  return {
    adapter: typeof environment.adapter === "string" && environment.adapter ? environment.adapter : adapterForLabType(labType),
    runtime: environment.runtime || practical.runtime || "unspecified",
    workingDirectory: "/workspace",
    requiredTools: asStringArray(environment.requiredTools),
    network,
    resourceLimits: {
      timeoutSeconds: clampInteger(limits.timeoutSeconds, 60, 1, 300),
      memoryMb: clampInteger(limits.memoryMb, 256, 16, 4096),
      outputKb: clampInteger(limits.outputKb, 64, 1, 1024),
    },
    resetStrategy,
  };
}

function normalizeSafety(raw, labType, sourceContext) {
  const safety = raw && typeof raw === "object" ? raw : {};
  const riskyLabType = ["shell", "database", "cloud", "network", "security"].includes(labType);
  const sourceText = `${sourceContext.activityChapter.raw}\n${sourceContext.lessonChapter.raw}`;
  const riskySource = /\b(sudo|root|production|credential|secret|rm\s+-rf|chmod\s+777|ssh|curl\s+.*\|\s*(sh|bash))\b/i.test(sourceText);
  const networkAccess = ["disabled", "fixture-only", "allowlisted", "manual-review"].includes(safety.networkAccess)
    ? safety.networkAccess
    : "disabled";

  return {
    profile: typeof safety.profile === "string" && safety.profile ? safety.profile : `${labType}-isolated`,
    networkAccess,
    hostAccess: safety.hostAccess === "isolated" ? "isolated" : "none",
    requiresManualReview: Boolean(safety.requiresManualReview) || riskyLabType || riskySource || networkAccess !== "disabled",
    prohibitedOperations: asStringArray(safety.prohibitedOperations).length
      ? asStringArray(safety.prohibitedOperations)
      : [
        "accessing the host filesystem",
        "reading credentials or secrets",
        "privileged operations",
        "network access outside declared fixtures",
      ],
    learnerWarning: typeof safety.learnerWarning === "string" && safety.learnerWarning
      ? safety.learnerWarning
      : "This practical runs in an isolated workspace. Do not use real credentials or production resources.",
  };
}

function normalizeEvidence(rawEvidence) {
  if (Array.isArray(rawEvidence) && rawEvidence.length) {
    return rawEvidence.map((item, index) => ({
      id: normalizeId(item.id, `evidence-${index + 1}`),
      type: typeof item.type === "string" ? item.type : "artifact",
      label: typeof item.label === "string" && item.label ? item.label : `Practical evidence ${index + 1}`,
      required: item.required !== false,
      redactSecrets: item.redactSecrets !== false,
    }));
  }
  return [{
    id: "practical-result",
    type: "artifact",
    label: "Practical result",
    required: true,
    redactSecrets: true,
  }];
}

function normalizePractical(raw, sourceContext, metadata) {
  if (!raw || typeof raw !== "object") throw new Error("Generated practical must be an object.");

  const labType = inferLabType(raw, sourceContext);
  const title = [raw.title, sourceContext.activityTitle, sourceContext.activityChapter.heading]
    .map(asStringText)
    .find((candidate) => candidate && !/^practical\s+[\w-]+\/\d+\/\d+$/i.test(candidate))
    || "Guided practical";
  const sourceActivity = sourceContext.activityChapter.handsOnActivity || "";
  const instructions = learnerFacingText(
    raw.instructions,
    "Work through each guided task in the starter workspace, then run the checks to verify your changes.",
    { sourceActivity },
  );
  const rawTasks = Array.isArray(raw.tasks) && raw.tasks.length
    ? raw.tasks
    : [{ instruction: `Complete the guided practical: ${title}. Make a focused change and verify it with the provided checks.`, title, hints: [], tests: [] }];
  const checks = [];
  const checkIds = new Set();
  const taskIds = new Set();

  const addCheck = (candidate, preferredId) => {
    let id = normalizeId(preferredId, `check-${checks.length + 1}`);
    let suffix = 2;
    while (checkIds.has(id)) id = `${normalizeId(preferredId, `check-${checks.length + 1}`)}-${suffix++}`;
    checkIds.add(id);
    const check = checkFromTest(candidate, id, labType);
    checks.push(check);
    return id;
  };

  const tasks = rawTasks.map((task, index) => {
    const baseId = normalizeId(task.id, `task-${index + 1}`);
    let taskId = baseId;
    let taskSuffix = 2;
    while (taskIds.has(taskId)) taskId = `${baseId}-${taskSuffix++}`;
    taskIds.add(taskId);

    const taskCheckIds = [];
    if (Array.isArray(task.tests)) {
      for (const [testIndex, test] of task.tests.entries()) {
        taskCheckIds.push(addCheck(test || {}, test?.id || `${taskId}-check-${testIndex + 1}`));
      }
    }
    if (Array.isArray(task.checks)) {
      for (const [checkIndex, check] of task.checks.entries()) {
        taskCheckIds.push(addCheck(check || {}, check?.id || `${taskId}-check-${taskCheckIds.length + checkIndex + 1}`));
      }
    }
    for (const declaredId of asStringArray(task.checkIds)) {
      if (checkIds.has(declaredId) && !taskCheckIds.includes(declaredId)) taskCheckIds.push(declaredId);
    }

    const taskTitle = task.title || `Task ${index + 1}`;
    const instruction = learnerFacingText(
      task.instruction || task.instructions,
      `Complete "${taskTitle}" in the workspace, then run its checks.`,
      { sourceActivity },
    );
    const narratorGuide = learnerFacingText(
      task.narratorGuide,
      teachingNarration(taskTitle, task.stepType || "guided practice"),
      { narration: true, sourceActivity },
    );
    const sourceTeaching = task.teaching && typeof task.teaching === "object" ? task.teaching : {};
    const estimatedDurationMinutes = typeof task.estimatedDurationMinutes === "number"
      ? Math.max(3, task.estimatedDurationMinutes)
      : 4;
    const teaching = {
      learningGoal: asStringText(sourceTeaching.learningGoal) || taskTitle,
      teacherTalk: learnerFacingText(
        sourceTeaching.teacherTalk || narratorGuide,
        narratorGuide,
        { narration: true, sourceActivity },
      ),
      realWorldExample: asStringText(sourceTeaching.realWorldExample) || `Apply ${taskTitle} to a realistic example from this practical.`,
      guidedSteps: asStringArray(sourceTeaching.guidedSteps).length
        ? asStringArray(sourceTeaching.guidedSteps)
        : [instruction],
      questions: asStringArray(sourceTeaching.questions).length
        ? asStringArray(sourceTeaching.questions)
        : ["What do you predict, and what evidence will tell you whether your approach worked?"],
      expectedObservations: asStringArray(sourceTeaching.expectedObservations).length
        ? asStringArray(sourceTeaching.expectedObservations)
        : ["Compare the actual result with your prediction and explain any difference."],
      feedback: sourceTeaching.feedback && typeof sourceTeaching.feedback === "object"
        ? sourceTeaching.feedback
        : {
            success: "Good work. Explain what evidence supports your result.",
            misconception: "Let’s revisit the evidence and connect it to the underlying idea.",
            retry: "Try one small change, then observe the result again.",
          },
      recap: asStringText(sourceTeaching.recap) || `Explain the key idea behind ${taskTitle} in your own words.`,
      waitForLearner: sourceTeaching.waitForLearner !== false,
      estimatedMinutes: typeof sourceTeaching.estimatedMinutes === "number"
        ? Math.max(3, sourceTeaching.estimatedMinutes)
        : estimatedDurationMinutes,
    };
    const codeAnimationSegments = Array.isArray(task.codeAnimationSegments)
      ? task.codeAnimationSegments.filter((segment) => segment && typeof segment === "object").map((segment, segmentIndex) => ({
          lineNumber: Number.isInteger(segment.lineNumber) ? segment.lineNumber : segmentIndex + 1,
          content: asStringText(segment.content),
          narratorText: asStringText(segment.narratorText),
          durationMs: typeof segment.durationMs === "number" ? Math.max(500, segment.durationMs) : 4000,
          highlightType: asStringText(segment.highlightType) || "syntax",
        }))
      : [];
    const terminalCommands = Array.isArray(task.terminalCommands)
      ? task.terminalCommands.filter((command) => command && typeof command === "object" && typeof command.command === "string").map((command) => ({
          ...command,
          command: command.command.trim(),
          expectedOutput: asStringText(command.expectedOutput),
        }))
      : [];

    return {
      id: taskId,
      title: taskTitle,
      instruction,
      narratorGuide,
      teaching,
      required: task.required !== false,
      stepType: ["observe", "modify", "experiment", "verify"].includes(task.stepType) ? task.stepType : undefined,
      requiredConcepts: asStringArray(task.requiredConcepts),
      hints: asStringArray(task.hints),
      structuredHints: task.structuredHints && typeof task.structuredHints === "object" ? task.structuredHints : undefined,
      codeAnimationSegments,
      terminalCommands,
      estimatedDurationMinutes,
      checkIds: taskCheckIds,
    };
  });

  const rawChecks = Array.isArray(raw.checks) ? raw.checks : [];
  for (const [index, check] of rawChecks.entries()) {
    if (!checkIds.has(check?.id)) addCheck(check || {}, check?.id || `check-${index + 1}`);
  }

  const safety = normalizeSafety(raw.safety, labType, sourceContext);
  const evidence = normalizeEvidence(raw.evidence);
  let generatedWalkthroughStep = 0;
  const rawCodeWalkthrough = Array.isArray(raw.codeWalkthrough) && raw.codeWalkthrough.length
    ? raw.codeWalkthrough
    : tasks.flatMap((task) => task.codeAnimationSegments.map((segment) => ({
        taskId: task.id,
        stepNumber: ++generatedWalkthroughStep,
        speakerText: segment.narratorText,
        codeLine: segment.content,
        file: raw.files?.[0]?.path,
        durationSeconds: segment.durationMs / 1000,
      })));
  let nextWalkthroughStep = 0;
  const codeWalkthrough = rawCodeWalkthrough.map((seg) => ({
    taskId: asStringText(seg.taskId || seg.sceneId),
    stepNumber: Number.isInteger(Number(seg.stepNumber)) ? Number(seg.stepNumber) : nextWalkthroughStep + 1,
    speakerText: asStringText(seg.speakerText || seg.text || seg.narration || seg.explanation),
    codeLine: typeof seg.codeLine === "string" ? seg.codeLine : (typeof seg.code === "string" ? seg.code : ""),
    file: typeof seg.file === "string" ? seg.file : undefined,
    explanation: asStringText(seg.explanation || seg.annotation),
    durationSeconds: typeof seg.durationSeconds === "number" ? seg.durationSeconds : 8,
  })).filter((seg) => {
    nextWalkthroughStep += 1;
    return seg.speakerText || seg.codeLine;
  });
  const rawPlaylist = Array.isArray(raw.teachingPlaylist) ? raw.teachingPlaylist : [];
  const teachingPlaylist = tasks.map((task, index) => {
    const provided = rawPlaylist.find((step) => step.taskId === task.id || step.id === task.id) || rawPlaylist[index] || {};
    const narratorScript = learnerFacingText(
      provided.narratorScript || task.teaching.teacherTalk,
      task.narratorGuide,
      { narration: true, sourceActivity },
    );
    const sceneCodeSteps = codeWalkthrough
      .filter((segment) => segment.taskId === task.id)
      .map((segment) => segment.stepNumber);
    const unassignedCodeSteps = codeWalkthrough
      .filter((segment) => !segment.taskId)
      .filter((_, segmentIndex) => Math.floor((segmentIndex * tasks.length) / codeWalkthrough.length) === index)
      .map((segment) => segment.stepNumber);
    const durationSeconds = Math.max(
      180,
      task.teaching.estimatedMinutes * 60,
      typeof provided.durationSeconds === "number" ? provided.durationSeconds : 0,
      Math.ceil((narratorScript.trim().split(/\s+/).length / 95) * 60 + 12),
    );
    return {
      id: asStringText(provided.id) || `scene-${index + 1}-${task.id}`,
      title: asStringText(provided.title) || task.title,
      category: asStringText(provided.category) || sourceContext.source.category,
      description: asStringText(provided.description) || task.teaching.learningGoal,
      durationSeconds,
      learningGoal: task.teaching.learningGoal,
      narratorScript,
      workedExample: asStringText(provided.workedExample) || task.teaching.realWorldExample,
      scenario: asStringText(provided.scenario) || task.teaching.realWorldExample,
      learnerPrompt: asStringText(provided.learnerPrompt) || task.teaching.questions[0],
      commonMistake: asStringText(provided.commonMistake) || task.hints[0] || "Change only one thing at a time so you can explain the result.",
      recap: asStringText(provided.recap) || task.teaching.recap,
      codeSteps: sceneCodeSteps.length ? sceneCodeSteps : unassignedCodeSteps,
    };
  });
  const completionRules = {
    requiredChecks: checks.map((check) => check.id),
    minimumScore: typeof raw.completionRules?.minimumScore === "number" && raw.completionRules.minimumScore >= 0
      ? raw.completionRules.minimumScore
      : checks.length ? 1 : 0,
    requiresEvidence: raw.completionRules?.requiresEvidence !== undefined
      ? Boolean(raw.completionRules.requiresEvidence)
      : evidence.some((item) => item.required),
    manualReview: Boolean(raw.completionRules?.manualReview) || safety.requiresManualReview,
  };

  return {
    schemaVersion: 1,
    practicalId: `practical-${metadata.courseId}-m${metadata.moduleNumber}-c${metadata.chapterNumber}`,
    source: sourceContext.source,
    category: sourceContext.source.category,
    title,
    summary: raw.summary || "",
    level: raw.level || sourceContext.level || undefined,
    labType,
    mode: modeForLabType(labType, raw.mode),
    widgetType: typeof raw.widgetType === "string" ? raw.widgetType : undefined,
    language: raw.language || undefined,
    runtime: raw.runtime || undefined,
    sourceActivity: sourceContext.activityTitle || title,
    objectives: asStringArray(raw.objectives),
    learningObjectives: asStringArray(raw.learningObjectives).length
      ? asStringArray(raw.learningObjectives)
      : asStringArray(raw.objectives),
    prerequisites: asStringArray(raw.prerequisites),
    instructions,
    narratorGuide: learnerFacingText(
      raw.narratorGuide,
      teachingNarration(title, "welcome"),
      { narration: true, sourceActivity },
    ),
    codeWalkthrough,
    teachingPlaylist,
    completionRule: ["all_tests_pass", "any_test_pass", "learner_submission"].includes(raw.completionRule)
      ? raw.completionRule
      : "all_tests_pass",
    environment: normalizeEnvironment(raw.environment, raw, labType),
    files: (Array.isArray(raw.files) ? raw.files : []).map((file, index) => ({
      path: file.path || `workspace-${index + 1}.txt`,
      content: typeof file.content === "string" ? file.content : "",
      language: file.language || raw.language || undefined,
      description: file.description || "",
      editable: file.editable !== false,
    })),
    tasks,
    checks,
    hints: Array.isArray(raw.hints) ? raw.hints : [],
    evidence,
    safety,
    cleanup: {
      strategy: ["discard-workspace", "fresh-workspace", "reset-service", "manual"].includes(raw.cleanup?.strategy)
        ? raw.cleanup.strategy
        : "discard-workspace",
      instructions: raw.cleanup?.instructions || "Discard the isolated workspace after completion.",
    },
    completionRules,
    generator: {
      generatorVersion: GENERATOR_VERSION,
      classifierVersion: CLASSIFIER_VERSION,
    },
    metadata: {
      ...(raw.metadata && typeof raw.metadata === "object" ? raw.metadata : {}),
      courseId: metadata.courseId,
      moduleNumber: metadata.moduleNumber,
      chapterNumber: metadata.chapterNumber,
      model: metadata.model,
      generatedAt: metadata.generated,
      activitySourcePath: sourceContext.activitySourcePath,
      lessonSourcePath: sourceContext.lessonSourcePath,
      activitySourceHash: sourceContext.source.sourceHash,
      lessonSourceHash: sourceContext.lessonHash,
    },
  };
}

/**
 * Enhance practical with animation timing data for synchronized code reveals and narrator
 * Processes codeAnimationSegments and terminalCommands into learnable scenes
 */
function enhanceWithAnimationTiming(practical) {
  if (!Array.isArray(practical.tasks)) return practical;

  const enhancedTasks = practical.tasks.map((task, taskIndex) => {
    const animationSegments = task.codeAnimationSegments || [];
    const terminalCommands = task.terminalCommands || [];
    const estimatedDuration = task.estimatedDurationMinutes || 3;

    // Build animation timeline if segments provided
    const animationTimeline = [];
    let currentTimeMs = 0;

    if (animationSegments.length > 0) {
      // Distribute narrator and code reveal timing
      animationSegments.forEach((segment, idx) => {
        const duration = segment.durationMs || 3000; // Default: 3s per line
        animationTimeline.push({
          type: "codeReveal",
          lineNumber: segment.lineNumber || idx + 1,
          content: segment.content || "",
          narratorText: segment.narratorText || "",
          highlightType: segment.highlightType || "syntax",
          startTime: currentTimeMs,
          duration,
          endTime: currentTimeMs + duration,
        });

        // Add terminal command if mapped to this line
        const command = terminalCommands.find(
          (cmd) => cmd.lineNumber === (segment.lineNumber || idx + 1)
        );
        if (command) {
          const commandStartTime = currentTimeMs + (command.timeIntoScene || duration * 0.7);
          animationTimeline.push({
            type: "terminalCommand",
            command: command.command,
            expectedOutput: command.expectedOutput,
            startTime: commandStartTime,
            duration: 2000,
            endTime: commandStartTime + 2000,
          });
        }

        currentTimeMs += duration;
      });
    }

    return {
      ...task,
      animationTimeline, // Synchronized timeline for UI
      totalDurationMs: animationTimeline.length > 0
        ? Math.max(...animationTimeline.map((item) => item.endTime || 0))
        : estimatedDuration * 60000,
      terminalCommands: terminalCommands.map((cmd, index) => ({
        ...cmd,
        timeIntoScene: cmd.timeIntoScene || 1000 + index * 500,
      })),
    };
  });

  return {
    ...practical,
    tasks: enhancedTasks,
    // Add overall animation metadata
    animationMetadata: {
      type: "interactive-code-reveal",
      narrator: "educator", // Who's speaking
      synchronizedPlayback: true, // Code, narrator, terminal in sync
      totalLessonDurationMs: enhancedTasks.reduce(
        (sum, task) => sum + (task.totalDurationMs || 0),
        0
      ),
    },
  };
}

function safeRelativePath(filePath) {
  if (typeof filePath !== "string" || !filePath.trim()) throw new Error("Generated file path must be a non-empty string.");
  const normalized = filePath.replace(/\\/g, "/");
  if (normalized.startsWith("/") || /^[A-Za-z]:\//.test(normalized) || normalized.startsWith("//")) {
    throw new Error(`Generated file path must be relative: ${filePath}`);
  }
  const segments = normalized.split("/");
  if (segments.some((segment) => !segment || segment === "." || segment === "..")) {
    throw new Error(`Generated file path contains an unsafe segment: ${filePath}`);
  }
  return segments.join(path.sep);
}

function validatePractical(practical) {
  const errors = [];
  const requiredFields = ["schemaVersion", "practicalId", "source", "category", "title", "labType", "environment", "files", "tasks", "teachingPlaylist", "checks", "safety", "cleanup", "completionRules", "generator"];
  const wordCount = (value) => typeof value === "string" ? value.trim().split(/\s+/).filter(Boolean).length : 0;
  for (const field of requiredFields) {
    if (practical?.[field] === undefined || practical?.[field] === null) errors.push(`missing ${field}`);
  }
  if (practical?.schemaVersion !== 1) errors.push("schemaVersion must be 1");
  if (typeof practical?.practicalId !== "string" || !/^practical-[a-z0-9][a-z0-9-]*$/.test(practical.practicalId)) errors.push("invalid practicalId");
  if (!SOURCE_CATEGORIES.includes(practical?.category)) errors.push("invalid category");
  if (!LAB_TYPES.includes(practical?.labType)) errors.push("invalid labType");

  const source = practical?.source;
  if (!source || typeof source !== "object") {
    errors.push("source must be an object");
  } else {
    if (!/^[^/]+\/[0-9]+\/[0-9]+$/.test(source.sourceKey || "")) errors.push("invalid source.sourceKey");
    if (source.category !== practical.category) errors.push("source.category must match category");
    if (typeof source.sourcePath !== "string" || !source.sourcePath) errors.push("invalid source.sourcePath");
    if (!/^sha256:[a-f0-9]{64}$/i.test(source.sourceHash || "")) errors.push("invalid source.sourceHash");
  }

  if (!Array.isArray(practical.files)) errors.push("files must be an array");
  else {
    const filePaths = new Set();
    for (const file of practical.files) {
      try {
        const safePath = safeRelativePath(file.path);
        if (filePaths.has(safePath)) errors.push(`duplicate file path ${file.path}`);
        filePaths.add(safePath);
      } catch (error) {
        errors.push(error.message);
      }
      if (typeof file.content !== "string") errors.push(`file ${file.path} content must be a string`);
    }
  }

  const checks = Array.isArray(practical.checks) ? practical.checks : [];
  const checkIds = new Set(checks.map((check) => check.id));
  if (!Array.isArray(practical.checks)) errors.push("checks must be an array");
  for (const check of checks) {
    if (!check.id || !check.type || !check.adapter) errors.push(`check ${check.id || "unknown"} is missing identity or adapter`);
    if (!["command", "file", "output", "sql", "http", "manual", "simulation"].includes(check.type)) errors.push(`check ${check.id} has invalid type`);
    if (!Number.isInteger(check.timeoutSeconds) || check.timeoutSeconds < 1 || check.timeoutSeconds > 300) errors.push(`check ${check.id} has invalid timeoutSeconds`);
  }

  if (!Array.isArray(practical.tasks) || practical.tasks.length < 1) {
    errors.push("tasks must contain at least one task");
  } else {
    if (practical.tasks.length < 5) errors.push("intensive teaching requires at least five progressive scenes");
    const taskIds = new Set();
    for (const task of practical.tasks) {
      if (!task.id || !task.title || !task.instruction || !Array.isArray(task.checkIds)) errors.push(`task ${task.id || "unknown"} is incomplete`);
      if (wordCount(task.narratorGuide) < 140) errors.push(`task ${task.id || "unknown"} narratorGuide must contain at least 140 teaching words`);
      if (!task.teaching || wordCount(task.teaching.teacherTalk) < 140) errors.push(`task ${task.id || "unknown"} teacherTalk must contain at least 140 teaching words`);
      if (!task.teaching || !task.teaching.realWorldExample || !task.teaching.recap || !Array.isArray(task.teaching.guidedSteps) || task.teaching.guidedSteps.length < 3) {
        errors.push(`task ${task.id || "unknown"} needs an example, recap, and at least three guided steps`);
      }
      if (taskIds.has(task.id)) errors.push(`duplicate task id ${task.id}`);
      taskIds.add(task.id);
      for (const checkId of task.checkIds || []) if (!checkIds.has(checkId)) errors.push(`task ${task.id} references missing check ${checkId}`);
    }
  }

  if (wordCount(practical.narratorGuide) < 100) errors.push("practical narratorGuide must contain at least 100 teaching words");
  if (!Array.isArray(practical.teachingPlaylist) || practical.teachingPlaylist.length !== practical.tasks?.length) {
    errors.push("teachingPlaylist must have exactly one scene for each task");
  } else {
    for (const scene of practical.teachingPlaylist) {
      if (wordCount(scene.narratorScript) < 140) errors.push(`scene ${scene.id || "unknown"} narratorScript must contain at least 140 teaching words`);
      if (scene.durationSeconds < 120) errors.push(`scene ${scene.id || "unknown"} must allow at least two minutes for calm narration and reflection`);
      if (!scene.workedExample || !scene.learnerPrompt || !scene.commonMistake || !scene.recap) {
        errors.push(`scene ${scene.id || "unknown"} is missing its example, learner prompt, misconception, or recap`);
      }
    }
  }

  const environment = practical.environment;
  if (!environment || !environment.adapter || environment.workingDirectory !== "/workspace") errors.push("environment is not sandbox-normalized");
  if (!environment?.resourceLimits || !Number.isInteger(environment.resourceLimits.timeoutSeconds)) errors.push("environment.resourceLimits is incomplete");
  if (!practical.safety?.profile || !practical.safety?.networkAccess || !practical.safety?.hostAccess) errors.push("safety is incomplete");
  if (!practical.cleanup?.strategy || typeof practical.cleanup.instructions !== "string") errors.push("cleanup is incomplete");
  if (!Array.isArray(practical.completionRules?.requiredChecks)) errors.push("completionRules.requiredChecks must be an array");
  for (const checkId of practical.completionRules?.requiredChecks || []) if (!checkIds.has(checkId)) errors.push(`completionRules references missing check ${checkId}`);
  if (!practical.generator?.generatorVersion || !practical.generator?.classifierVersion) errors.push("generator metadata is incomplete");
  return errors;
}

function assertValidPractical(practical) {
  const errors = validatePractical(practical);
  if (errors.length) throw new Error(`Practical validation failed:\n- ${errors.join("\n- ")}`);
}

async function writePractical(practical, outputRoot, courseId, moduleNum, chapterNum, sourceContext) {
  if (!/^[a-z0-9][a-z0-9-]*$/.test(courseId)) throw new Error(`Invalid course id for output path: ${courseId}`);
  assertValidPractical(practical);

  const resolvedOutputRoot = path.resolve(outputRoot);
  const practicalDir = path.join(resolvedOutputRoot, courseId, `m${moduleNum}-c${chapterNum}`);
  await fs.mkdir(practicalDir, { recursive: true });

  const manifest = { courseId, moduleNumber: moduleNum, chapterNumber: chapterNum, practical };
  await fs.writeFile(path.join(practicalDir, "practical.json"), JSON.stringify(manifest, null, 2), "utf8");

  const filesDir = path.join(practicalDir, "files");
  await fs.mkdir(filesDir, { recursive: true });
  for (const file of practical.files) {
    const relativeFilePath = safeRelativePath(file.path);
    const filePath = path.resolve(filesDir, relativeFilePath);
    if (!isWithinRoot(filesDir, filePath)) throw new Error(`Generated file escapes the files directory: ${file.path}`);
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, file.content, "utf8");
  }

  if (sourceContext) {
    const sourceDir = path.join(practicalDir, "source");
    await fs.mkdir(sourceDir, { recursive: true });
    await fs.writeFile(path.join(sourceDir, "activity.md"), sourceContext.activityMarkdown, "utf8");
    await fs.writeFile(path.join(sourceDir, "lesson.md"), sourceContext.lessonMarkdown, "utf8");
    await fs.writeFile(path.join(sourceDir, "manifest.json"), JSON.stringify({
      activitySourcePath: sourceContext.activitySourcePath,
      lessonSourcePath: sourceContext.lessonSourcePath,
      source: sourceContext.source,
      lessonHash: sourceContext.lessonHash,
    }, null, 2), "utf8");
  }

  console.log(`✓ Practical written to: ${practicalDir}`);
  return practicalDir;
}

async function main() {
  const args = process.argv.slice(2);
  const options = {};

  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith("--")) {
      const key = args[i].slice(2);
      const nextArgument = args[i + 1];
      const value = nextArgument !== undefined && !nextArgument.startsWith("--")
        ? args[++i]
        : true;
      options[key] = value;
    }
  }

  const {
    syllabus,
    course: courseArgument,
    module: moduleStr,
    chapter: chapterStr,
    "course-id": explicitCourseId,
    output: outputRoot = "generated/learning-board-practicals",
    model = DEFAULT_MODEL,
    "prompt-template": promptTemplatePath,
    "repo-root": repoRoot = REPOSITORY_ROOT,
    "activity-source": activitySourcePath,
    "lesson-source": lessonSourcePath,
    category,
    "mock-response": mockResponsePath,
  } = options;
  const courseArgumentIsPath = typeof courseArgument === "string"
    && (path.isAbsolute(courseArgument)
      || /\.(md|markdown)$/i.test(courseArgument)
      || courseArgument.includes("/")
      || courseArgument.includes("\\"));
  const coursePath = courseArgumentIsPath ? courseArgument : null;
  const courseId = explicitCourseId || (!courseArgumentIsPath ? courseArgument : undefined);
  const syllabusPath = syllabus || coursePath;

  if ((!syllabusPath && !activitySourcePath && !courseId) || !moduleStr || !chapterStr) {
    console.error("Usage: node scripts/generate-learning-board-practical.js \\");
    console.error("  --course-id <id> \\");
    console.error("  or --course <id or syllabus path> \\");
    console.error("  [--syllabus <path>] \\");
    console.error("  [--activity-source <path relative to hand's-on activity>] \\");
    console.error("  --module <num> \\");
    console.error("  --chapter <num> \\");
    console.error("  [--output <dir>] \\");
    console.error("  [--lesson-source <path relative to docs/computer-science>] \\");
    console.error("  [--mock-response <json path>] [--dry-run] \\");
    console.error("  [--model gemini-2.5-flash]");
    process.exit(1);
  }

  try {
    const moduleNumber = Number(moduleStr);
    const chapterNumber = Number(chapterStr);
    if (!Number.isInteger(moduleNumber) || !Number.isInteger(chapterNumber) || moduleNumber < 1 || chapterNumber < 1) {
      throw new Error("Module and chapter must be positive integers.");
    }

    const sourceContext = await resolveSourceContext({
      repoRoot,
      syllabusPath,
      activitySourcePath,
      lessonSourcePath,
      courseId,
      moduleNumber,
      chapterNumber,
      category,
    });
    const chapterData = sourceContext.activityChapter;

    if (!chapterData.handsOnActivity) {
      console.warn(`⚠ Chapter ${moduleStr}.${chapterStr} has no hands-on activity. Skipping practical generation.`);
      return;
    }

    // Load or use default prompt
    let promptTemplate = "";
    if (promptTemplatePath) {
      promptTemplate = await loadPrompt(promptTemplatePath);
    } else {
      promptTemplate = `You are an expert computer science educator and educational technologist designing an INTENSIVE, deeply interactive practical lab for Cohortia.

EDUCATIONAL PHILOSOPHY:
This is an INTENSIVE EXPLORATORY learning experience, NOT a quick tutorial or exam. The learner will spend 10-30 minutes deeply engaging with concepts through structured observation, modification, and experimentation. The lab must scaffold learning progressively, build confidence, and prepare for real-world application.

SOURCE-TO-STUDENT BOUNDARY:
- Treat HANDS-ON ACTIVITY as source material for lesson design, not text to display or read aloud.
- Rewrite each task as one concise, distinct learner action; never paste the source activity, numbered checklist, or markdown into instructions or narration.
- Explain the code while it is revealed, then leave learners with a clear action in the interactive workspace.

CRITICAL REQUIREMENTS FOR INTENSIVE LEARNING:

1. LESSON ARCHITECTURE - 4+ PROGRESSIVE SCENES:
   Each practical must have AT LEAST 4 scenes (5-7 for intermediate/advanced):
   - Scene 1: OBSERVE & UNDERSTAND (2-4 min) - Show baseline code running, explain what it does
   - Scene 2: MODIFY & EXPERIMENT (4-6 min) - Learner makes targeted changes, sees cause-and-effect
   - Scene 3: BUILD & INTEGRATE (4-8 min) - Add new functionality or solve a related problem
   - Scene 4: VERIFY & EXTEND (3-5 min) - Test edge cases, explore advanced variations
   
   EACH SCENE = ONE TASK with its own narrative guide, code snippets, and terminal verification.

2. ANIMATION & NARRATOR SYNCHRONIZATION:
   For each task, provide:
   - "codeAnimationSegments": Array of {
       "lineNumber": 1,
       "content": "import requests",
       "narratorText": "We start by importing the requests library...",
       "durationMs": 4500,  // Time learner reads + narrator speaks
       "highlightType": "import"  // syntax, emphasis, warning, success
     }
   - "narratorGuide": ~100-150 words for THIS TASK specifically
   - "terminalCommands": [{
       "command": "python main.py",
       "expectedOutput": "Connection established",
       "timeIntoScene": 3000  // ms: when to run in scene
     }]

3. SCAFFOLDED COMPLEXITY:
   - Scene 1: Teach foundations and inspect the baseline
   - Scene 2: Model a complete worked example
   - Scene 3: Guide a focused learner modification or decision
   - Scene 4: Investigate a variation, edge case, or likely misconception
   - Scene 5: Verify and transfer learning to a fresh but relevant example
   
   DO NOT give empty starter code. EVERY file must be runnable.

4. 3-TIER PROGRESSIVE HINTS (for each task):
   - nudge: "What would happen if you changed X to Y?"
   - concept: "In programming, [principle]. That means..."
   - walkthrough: "Here's the code structure: [pseudocode]"

5. NARRATOR VOICE (calm, warm, approximately 90-100 words per minute):
   - Each scene has 180-220 words of substantive teacher explanation; do not compress the lesson into a short overall summary.
   - Explain WHY each step matters conceptually and teach prerequisites before using jargon.
   - Use short sentences, reassuring transitions, concrete examples, and generous thinking pauses.
   - Speak naturally and clearly; avoid rushed lists, repetitive praise, and reading source text verbatim.

6. TERMINAL VERIFICATION:
   For each task, include at least ONE test that shows observable proof of learning:
   - NOT just syntax checks
   - Real OUTPUT verification: "Program prints X", "File contains Y", "Query returns Z rows"

7. INTENSIVE ASSESSMENT:
   - 4-6 checks per practical (not 1-2)
   - Mix of: observe (easy), modify (medium), experiment (challenging)
   - Final check: "Can learner extend this to a new scenario?"

8. JSON SCHEMA EXTENSIONS:
   Return the standard schema PLUS these fields on each task:
   {
     "codeAnimationSegments": [...],  // Line-by-line narrator sync
     "terminalCommands": [...],        // When/what to execute
     "estimatedDurationMinutes": 3.5,  // Pacing expectation
     "learningNarrative": "Why this task matters..."
   }

REMEMBER: A "Hello World" practical should NOT be 1 minute. It should be 5-7 minutes of guided discovery, modification, and verification. Build depth, not speed.

9. ACCURATE JSON:
   - Return valid JSON matching the schema.
   - Include all standard fields PLUS animation/timing extensions.`;
    }

    const metadata = {
      courseId: sourceContext.courseId,
      moduleNumber,
      chapterNumber,
      generated: new Date().toISOString(),
      model,
      category: sourceContext.source.category,
      sourceKey: sourceContext.source.sourceKey,
      sourceHash: sourceContext.source.sourceHash,
      lessonHash: sourceContext.lessonHash,
    };

    const prompt = buildGeminiPrompt(promptTemplate, chapterData, metadata, sourceContext);

    if (options["dry-run"] === true) {
      console.log(JSON.stringify({
        status: "dry-run",
        source: sourceContext.source,
        lessonSourcePath: sourceContext.lessonSourcePath,
        lessonHash: sourceContext.lessonHash,
        promptCharacters: prompt.length,
      }, null, 2));
      return;
    }

    console.log(`Generating practical for Chapter ${moduleStr}.${chapterStr}...`);
    let result;
    if (mockResponsePath) {
      const mockDocument = JSON.parse(await fs.readFile(mockResponsePath, "utf8"));
      result = { success: true, data: mockDocument.data && mockDocument.success !== undefined ? mockDocument.data : mockDocument };
    } else {
      result = await callGemini({ model, prompt });
    }

    if (!result || !result.success) {
      console.error("❌ Gemini request failed");
      console.error("Response:", result);
      throw new Error(result?.error || "Gemini request failed");
    }

    const practical = normalizePractical(result.data, sourceContext, metadata);

    if (!practical) {
      throw new Error("Gemini returned no practical object");
    }

    // Enhance with animation timing data for synchronized playback
    const enhancedPractical = enhanceWithAnimationTiming(practical);

    assertValidPractical(enhancedPractical);
    const target = await writePractical(
      enhancedPractical,
      outputRoot,
      sourceContext.courseId,
      moduleNumber,
      chapterNumber,
      sourceContext
    );
    
    console.log(`\n✅ Practical generated successfully`);
    console.log(`   Location: ${target}`);
    console.log(`   Mode: ${enhancedPractical.mode}`);
    console.log(`   Language: ${enhancedPractical.language}`);
    console.log(`   Tasks: ${enhancedPractical.tasks?.length || 0}`);
    console.log(`   Narrator guide length: ${enhancedPractical.narratorGuide?.length || 0} chars`);
    if (enhancedPractical.animationMetadata) {
      const totalMin = Math.round(enhancedPractical.animationMetadata.totalLessonDurationMs / 60000);
      console.log(`   ⏱ Intensive Learning Duration: ~${totalMin} minutes`);
      console.log(`   🎬 Animation Timeline: Enabled with synchronized playback`);
      console.log(`   🎙️  Narrator Sync: Code reveals timed to narrator voice`);
    }

  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

export {
  PRACTICAL_SCHEMA,
  assertValidPractical,
  buildGeminiPrompt,
  extractChapter,
  inferActivityCategory,
  normalizePractical,
  resolveSourceContext,
  safeRelativePath,
  validatePractical,
  writePractical,
};

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main();
}
