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
import { sourceHashFor } from "../backend/src/lib/practicalIdentity.js";
import { generateCompleteJson } from "./lib/gemini-rotating-client.js";
import { classifyActivity } from "./lib/hands-on-activity-source.js";

const REPOSITORY_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DEFAULT_MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";
const GENERATOR_VERSION = "phase4.2";
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

// JSON Schema for generated practical
const PRACTICAL_SCHEMA = {
  type: "object",
  properties: {
    mode: { type: "string", enum: PRACTICAL_MODES },
    sourceActivity: { type: "string", description: "Original hands-on activity from syllabus" },
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
      description: "Overall completion instructions, preserve from HANDS-ON ACTIVITY" 
    },
    narratorGuide: {
      type: "string",
      description: "Educator/narrator voice greeting and guidance for learner. Spoken warmly at ~100 wpm. Introduces the activity, sets context, explains the learning goal, and provides step-by-step encouragement."
    },
    codeWalkthrough: {
      type: "array",
      items: {
        type: "object",
        properties: {
          stepNumber: { type: "integer" },
          speakerText: { type: "string", description: "In-depth narrator explanation spoken line-by-line (~25-50 words per code block)" },
          codeLine: { type: "string", description: "The exact line or block of code being added or typed out in this teaching step" },
          file: { type: "string", description: "File path being edited" },
          explanation: { type: "string", description: "Concise on-screen callout / annotation for the code" },
          durationSeconds: { type: "number", description: "Estimated duration in seconds (e.g. 5-12)" }
        },
        required: ["stepNumber", "speakerText", "codeLine"]
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
      minItems: 1,
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
          instruction: { type: "string", description: "Step instruction from HANDS-ON ACTIVITY" },
          narratorGuide: { type: "string", description: "Intensive, task-specific narrator guidance (~100-150 words). Explains the conceptual 'why' behind this specific step, uses analogies, and anticipates common novice pitfalls." },
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
          tests: {
            type: "array",
            minItems: 1,
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
        required: ["id", "instruction", "hints", "tests"]
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
  required: ["mode", "title", "instructions", "narratorGuide", "files", "tasks"]
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
  if (activitySourcePath) {
    activityFile = resolveWithinRoot(activityRoot, activitySourcePath, "Activity source path");
  } else if (syllabusFile && isWithinRoot(activityRoot, syllabusFile)) {
    activityFile = syllabusFile;
  } else if (syllabusFile && isWithinRoot(lessonRoot, syllabusFile)) {
    // Course syllabi are authoritative when a separate hand-on activity tree is absent.
    activityFile = syllabusFile;
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

  const activityCategory = extractActivityCategory(activityChapter.handsOnActivity)
    || classifyActivity(activityChapter.handsOnActivity, activityChapter.raw).category;
  if (category && category !== activityCategory) {
    throw new Error(
      `Category mismatch for Chapter ${requestedChapter}: source declares "${activityCategory}", but --category requested "${category}".`
    );
  }
  const resolvedCategory = activityCategory;

  if (!SOURCE_CATEGORIES.includes(resolvedCategory)) {
    throw new Error(`Unsupported source category: ${resolvedCategory}`);
  }

  const sourcePath = isWithinRoot(activityRoot, activityFile)
    ? toPosixRelative(activityRoot, activityFile)
    : toPosixRelative(lessonRoot, activityFile);
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
  if (["Scenario & Design Exercise", "Research & Analysis"].includes(sourceContext.source.category)) {
    return "simulation";
  }
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

function inferLanguage(raw, sourceContext, labType) {
  const requested = String(raw.language || "").trim().toLowerCase();
  if (requested) return requested === "c++" ? "cpp" : requested;
  const text = `${sourceContext.activityChapter.raw}\n${sourceContext.lessonChapter.raw}`.toLowerCase();
  if (labType === "database") return "sqlite";
  if (labType === "shell") return "bash";
  if (/\b(#include\s*<stdio\.h>|clang|gcc|\.c\b|c program)\b/.test(text)) return "c";
  if (/\b(python|\.py\b|def\s+\w+\s*\()\b/.test(text)) return "python";
  if (/\b(javascript|node\.js|\.js\b)\b/.test(text)) return "javascript";
  return labType === "code" ? "text" : undefined;
}

function extractFencedCode(text, language) {
  const source = String(text || "");
  const match = /```[^\r\n]*\r?\n([\s\S]*?)\r?\n```/.exec(source);
  return match?.[1]?.trim() || "";
}

function fallbackStarterFile(instructions, labType, language) {
  const extracted = extractFencedCode(instructions, language);
  if (labType === "database") {
    const content = extracted && /\b(create\s+table|insert\s+into|select)\b/i.test(extracted)
      ? extracted
      : `CREATE TABLE courses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  department TEXT NOT NULL,
  credits INTEGER NOT NULL CHECK (credits BETWEEN 1 AND 6)
);

INSERT INTO courses (title, department, credits) VALUES
  ('Introduction to Databases', 'Computer Science', 3),
  ('Calculus I', 'Mathematics', 4),
  ('Art History 101', 'Fine Arts', 3);

SELECT id, title, department, credits FROM courses ORDER BY id;`;
    return {
      path: "courses.sql",
      content: `${content}\n`,
      language: "sql",
      description: "SQLite starter script for the practical.",
      editable: true,
    };
  }

  if (labType === "shell") {
    return {
      path: "practical.sh",
      content: extracted || "#!/usr/bin/env bash\nset -euo pipefail\necho \"Cohortia practical ready\"\n",
      language: "bash",
      description: "Safe shell starter script for the practical.",
      editable: true,
    };
  }

  const normalizedLanguage = language || "text";
  if (normalizedLanguage === "python") {
    return {
      path: "main.py",
      content: extracted || 'print("Cohortia practical ready")\n',
      language: "python",
      description: "Runnable Python starter file for the practical.",
      editable: true,
    };
  }
  if (normalizedLanguage === "javascript") {
    return {
      path: "index.js",
      content: extracted || 'console.log("Cohortia practical ready");\n',
      language: "javascript",
      description: "Runnable JavaScript starter file for the practical.",
      editable: true,
    };
  }
  return {
    path: normalizedLanguage === "cpp" ? "main.cpp" : "main.c",
    content: extracted || '#include <stdio.h>\n\nint main(void) {\n    printf("Cohortia practical ready\\n");\n    return 0;\n}\n',
    language: normalizedLanguage === "cpp" ? "cpp" : "c",
    description: "Runnable C starter file for the practical.",
    editable: true,
  };
}

function fallbackChecks(labType, language, files) {
  const file = files[0];
  if (labType === "database") {
    return [
      {
        id: "starter-sql-present",
        type: "file_exists",
        explanation: "The learner has a SQL starter script in the workspace.",
      },
      {
        id: "database-schema-and-data",
        type: "sql",
        command: "SELECT COUNT(*) FROM courses;",
        expected: "3",
        matchMode: "contains",
        explanation: "The courses table contains at least the three starter rows.",
      },
    ];
  }
  const output = /printf\s*\(\s*"([^"]+)/i.exec(file.content)?.[1]
    || /print(?:ln)?\s*\(\s*["']([^"']+)/i.exec(file.content)?.[1]
    || "Cohortia practical ready";
  return [
    {
      id: "starter-file-present",
      type: "file_exists",
      explanation: `The learner has edited ${file.path}.`,
    },
    {
      id: "program-runs",
      type: "command",
      command: language === "python" ? "python main.py" : language === "javascript" ? "node index.js" : "./main",
      explanation: "The starter program compiles or runs without an execution error.",
    },
    {
      id: "expected-output",
      type: "output",
      expected: output.replace(/\\n/g, "").trim(),
      matchMode: "contains",
      explanation: "The program produces observable output.",
    },
  ];
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

function fallbackNarratorGuide(title, instructions, sourceContext) {
  const activity = sourceContext.activityTitle || title;
  return `Welcome to ${title}. I am your teacher for this practical, and we will work through ${activity} together. First, read the task and predict what you expect to happen before changing anything. Then make one small change at a time and observe the result. If the result surprises you, that is useful evidence: pause, explain what changed, and try again rather than guessing. Keep the key idea in mind as you work: ${instructions}. At each checkpoint, tell yourself what the evidence proves and what it does not prove. I will guide you from observation to modification, experimentation, and verification. Take your time, use the hints only when you are stuck, and finish by explaining the solution in your own words.`;
}

function fallbackTaskNarrator(task, index, practicalTitle) {
  const phase = ["observe", "modify", "experiment", "verify"][index] || "practice";
  return `In this ${phase} step, focus on ${task.title || `task ${index + 1}`} in ${practicalTitle}. Read the instruction aloud, make a prediction, and then work carefully through one change at a time. Notice the evidence produced by your program or design. Ask yourself why the result makes sense, what assumption you tested, and what you would change next. If you get stuck, compare the result with the core concept rather than copying a solution. When the check passes, explain the reason in your own words before continuing.`;
}

function normalizePractical(raw, sourceContext, metadata) {
  if (!raw || typeof raw !== "object") throw new Error("Generated practical must be an object.");

  const labType = inferLabType(raw, sourceContext);
  const language = inferLanguage(raw, sourceContext, labType);
  const title = raw.title || sourceContext.activityTitle || `Practical ${sourceContext.source.sourceKey}`;
  const instructions = raw.instructions || sourceContext.activityChapter.handsOnActivity;
  const rawTasks = Array.isArray(raw.tasks) && raw.tasks.length
    ? raw.tasks
    : [{ instruction: instructions, title: title, hints: [], tests: [] }];
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

  let tasks = rawTasks.map((task, index) => {
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

    return {
      id: taskId,
      title: task.title || `Task ${index + 1}`,
      instruction: task.instruction || task.instructions || instructions,
      narratorGuide: asStringText(task.narratorGuide) || undefined,
      required: task.required !== false,
      stepType: ["observe", "modify", "experiment", "verify"].includes(task.stepType) ? task.stepType : undefined,
      requiredConcepts: asStringArray(task.requiredConcepts),
      hints: asStringArray(task.hints),
      structuredHints: task.structuredHints && typeof task.structuredHints === "object" ? task.structuredHints : undefined,
      checkIds: taskCheckIds,
    };
  });

  const rawChecks = Array.isArray(raw.checks) ? raw.checks : [];
  for (const [index, check] of rawChecks.entries()) {
    if (!checkIds.has(check?.id)) addCheck(check || {}, check?.id || `check-${index + 1}`);
  }

  const executableLab = ["code", "shell", "database"].includes(labType);
  const files = (Array.isArray(raw.files) ? raw.files : []).map((file, index) => ({
    path: file.path || `workspace-${index + 1}.txt`,
    content: typeof file.content === "string" ? file.content : "",
    language: file.language || language || undefined,
    description: file.description || "",
    editable: file.editable !== false,
  }));
  if (executableLab && files.length === 0) {
    files.push(fallbackStarterFile(instructions, labType, language));
  }
  if (executableLab && checks.length === 0) {
    for (const fallback of fallbackChecks(labType, language, files, instructions)) {
      addCheck(fallback, fallback.id);
    }
  }
  if (executableLab && checks.length > 0) {
    const checkIdList = checks.map((check) => check.id);
    tasks = tasks.map((task, index) => {
      if (task.checkIds.length > 0 || task.required === false) return task;
      return { ...task, checkIds: [checkIdList[index % checkIdList.length]] };
    });
  }

  const safety = normalizeSafety(raw.safety, labType, sourceContext);
  const evidence = normalizeEvidence(raw.evidence);
  const practicalTitle = title;
  const narratorGuide = asStringText(raw.narratorGuide) || fallbackNarratorGuide(practicalTitle, instructions, sourceContext);
  tasks = tasks.map((task, index) => ({
    ...task,
    narratorGuide: task.narratorGuide || fallbackTaskNarrator(task, index, practicalTitle),
  }));
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
    language,
    runtime: raw.runtime || undefined,
    sourceActivity: raw.sourceActivity || sourceContext.activityTitle || title,
    objectives: asStringArray(raw.objectives),
    learningObjectives: asStringArray(raw.learningObjectives).length
      ? asStringArray(raw.learningObjectives)
      : asStringArray(raw.objectives),
    prerequisites: asStringArray(raw.prerequisites),
    instructions,
    narratorGuide,
    teacher: {
      role: "supportive computer science teacher",
      opening: narratorGuide,
      coachingPrompts: [
        "What do you predict will happen before you run it?",
        "What evidence shows that your change worked?",
        "Can you explain the result in your own words?",
      ],
    },
    codeWalkthrough: (Array.isArray(raw.codeWalkthrough) ? raw.codeWalkthrough : []).map((seg, idx) => ({
      stepNumber: Number.isInteger(Number(seg.stepNumber)) ? Number(seg.stepNumber) : idx + 1,
      speakerText: asStringText(seg.speakerText || seg.text || seg.narration || seg.explanation),
      codeLine: typeof seg.codeLine === "string" ? seg.codeLine : (typeof seg.code === "string" ? seg.code : ""),
      file: typeof seg.file === "string" ? seg.file : undefined,
      explanation: asStringText(seg.explanation || seg.annotation),
      durationSeconds: typeof seg.durationSeconds === "number" ? seg.durationSeconds : 8,
    })).filter((seg) => seg.speakerText || seg.codeLine),
    completionRule: ["all_tests_pass", "any_test_pass", "learner_submission"].includes(raw.completionRule)
      ? raw.completionRule
      : "all_tests_pass",
    environment: normalizeEnvironment(raw.environment, raw, labType),
    files,
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
          animationTimeline.push({
            type: "terminalCommand",
            command: command.command,
            expectedOutput: command.expectedOutput,
            startTime: currentTimeMs + (command.timeIntoScene || duration * 0.7),
            duration: 2000,
          });
        }

        currentTimeMs += duration;
      });
    }

    return {
      ...task,
      animationTimeline, // Synchronized timeline for UI
      totalDurationMs: animationTimeline.length > 0 
        ? animationTimeline[animationTimeline.length - 1].endTime 
        : estimatedDuration * 60000,
      terminalCommands: terminalCommands.map((cmd) => ({
        ...cmd,
        timeIntoScene: cmd.timeIntoScene || Math.random() * 3000 + 1000, // Fallback timing
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
  const requiredFields = ["schemaVersion", "practicalId", "source", "category", "title", "labType", "environment", "files", "tasks", "checks", "safety", "cleanup", "completionRules", "generator"];
  for (const field of requiredFields) {
    if (practical?.[field] === undefined || practical?.[field] === null) errors.push(`missing ${field}`);
  }
  if (practical?.schemaVersion !== 1) errors.push("schemaVersion must be 1");
  if (typeof practical?.narratorGuide !== "string" || practical.narratorGuide.trim().length < 80) {
    errors.push("narratorGuide must contain a meaningful teacher guide");
  }
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
    if (["code", "shell", "database"].includes(practical.labType) && practical.files.length === 0) {
      errors.push(`${practical.labType} practical must include at least one starter file`);
    }
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
    const taskIds = new Set();
    for (const task of practical.tasks) {
      if (!task.id || !task.title || !task.instruction || !Array.isArray(task.checkIds)) errors.push(`task ${task.id || "unknown"} is incomplete`);
      if (typeof task.narratorGuide !== "string" || task.narratorGuide.trim().length < 40) errors.push(`task ${task.id || "unknown"} is missing teacher narration`);
      if (taskIds.has(task.id)) errors.push(`duplicate task id ${task.id}`);
      taskIds.add(task.id);
      for (const checkId of task.checkIds || []) if (!checkIds.has(checkId)) errors.push(`task ${task.id} references missing check ${checkId}`);
      if (["code", "shell", "database"].includes(practical.labType) && task.required !== false && task.checkIds.length === 0) {
        errors.push(`executable task ${task.id} must reference at least one check`);
      }
    }
  }

  const environment = practical.environment;
  if (!environment || !environment.adapter || environment.workingDirectory !== "/workspace") errors.push("environment is not sandbox-normalized");
  if (!environment?.resourceLimits || !Number.isInteger(environment.resourceLimits.timeoutSeconds)) errors.push("environment.resourceLimits is incomplete");
  if (!practical.safety?.profile || !practical.safety?.networkAccess || !practical.safety?.hostAccess) errors.push("safety is incomplete");
  if (!practical.cleanup?.strategy || typeof practical.cleanup.instructions !== "string") errors.push("cleanup is incomplete");
  if (!Array.isArray(practical.completionRules?.requiredChecks)) errors.push("completionRules.requiredChecks must be an array");
  if (["code", "shell", "database"].includes(practical.labType) && checks.length === 0) {
    errors.push(`${practical.labType} practical must include executable checks`);
  }
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
    provider,
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
    if (provider) {
      const normalizedProvider = String(provider).trim().toLowerCase();
      if (!["azure", "gemini"].includes(normalizedProvider)) {
        throw new Error(`Unsupported provider "${provider}". Use --provider azure or --provider gemini.`);
      }
      process.env.AI_PROVIDER = normalizedProvider;
    }

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
   - Task 1: Pre-written code, learner OBSERVES output
   - Task 2: 1-2 lines to modify, learner MODIFIES starter code
   - Task 3: Learner EXPERIMENTS with variations or edge cases
   - Task 4: Learner VERIFIES solution against requirements
   
   DO NOT give empty starter code. EVERY file must be runnable.

4. 3-TIER PROGRESSIVE HINTS (for each task):
   - nudge: "What would happen if you changed X to Y?"
   - concept: "In programming, [principle]. That means..."
   - walkthrough: "Here's the code structure: [pseudocode]"

5. NARRATOR VOICE (~100 wpm, 250-350 words total per practical):
   - Greet warmly by name if possible
   - Explain WHY each step matters conceptually
   - Preview what's coming: "Next, we'll modify X to observe Y"
   - Use encouraging language: "Great! You've just discovered..."

6. TERMINAL VERIFICATION:
   For each task, include at least ONE test that shows observable proof of learning:
   - NOT just syntax checks
   - Real OUTPUT verification: "Program prints X", "File contains Y", "Query returns Z rows"
   - For Terminal Coding Lab and database labs, NEVER return an empty files array or empty tests array.
   - Every executable practical must include at least one runnable starter file and at least two checks.
   - C/Python/JavaScript starters must be runnable without inventing missing code.
   - Database starters must be a valid SQLite script with CREATE TABLE plus INSERT/SELECT statements.
   - Database checks must use type "sql", include a command, and verify schema/data with an expected result.

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
  normalizePractical,
  resolveSourceContext,
  safeRelativePath,
  validatePractical,
  writePractical,
};

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main();
}
