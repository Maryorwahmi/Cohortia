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
import { activityKindFor, profileFor, profileSchema } from "./lib/practical-experience-profiles.js";

const REPOSITORY_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DEFAULT_MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";
const GENERATOR_VERSION = "phase5.1-guided-manifest-verification";
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
    activityKind: {
      type: "string",
      enum: ["terminal_code_along", "cloud_console_walkthrough", "evidence_inquiry", "binary_exercise", "algorithm_design", "design_decision", "scenario_analysis", "guided_exercise"],
      description: "Specific interaction pattern for this source activity.",
    },
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
    teachingSteps: {
      type: "array",
      items: {
        type: "object",
        properties: {
          stepNumber: { type: "integer" },
          title: { type: "string" },
          displayText: { type: "string", description: "A short equation, diagram label, decision, or other non-code visual revealed as the teacher explains." },
          speakerText: { type: "string", description: "Teacher narration synchronized to this visual step." },
          explanation: { type: "string", description: "Short on-screen explanation of the current idea." },
          durationSeconds: { type: "number" },
        },
        required: ["stepNumber", "displayText", "speakerText", "explanation"],
      },
      description: "Ordered, progressively revealed non-code teaching lines for scenario and design activities.",
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
          interactiveExercise: {
            type: "object",
            properties: {
              type: { type: "string", enum: ["binary_conversion"] },
              prompt: { type: "string" },
              expectedAnswer: { type: "string" },
              acceptedAnswers: { type: "array", items: { type: "string" } },
              explanation: { type: "string" },
            },
            required: ["type", "prompt", "expectedAnswer", "explanation"],
          },
          inlineSuggestions: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: { type: "string" },
                label: { type: "string" },
                text: { type: "string", description: "Static coaching text shown without an AI request" },
                insertionText: { type: "string", description: "Optional small code fragment the learner may insert" }
              },
              required: ["id", "label", "text"]
            },
            description: "Pre-authored task guidance bundled with the practical. Never include a full solution."
          },
          tests: {
            type: "array",
            minItems: 1,
            items: {
              type: "object",
              properties: {
                type: { type: "string", enum: ["syntax", "runtime", "output", "file_exists", "file_contents", "compile_probe", "sanitizer", "integration"], description: "Test type" },
                expected: { type: "string", description: "Expected result or substring" },
                path: { type: "string", description: "Relative output-file path to verify" },
                contents: { type: "string", description: "Expected output-file contents for file_contents checks" },
                probeSource: { type: "string", description: "Small, compilable C++ probe translation unit for an access-control test" },
                expectCompileSuccess: { type: "boolean", description: "Whether the C++ probe is expected to compile" },
                expectedDiagnostic: { type: "string", description: "Required compiler diagnostic substring for a rejected probe" },
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
    courseTitle: extractFrontmatterField(lessonMarkdown, "title") || resolvedCourseId,
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

async function callGemini({ model, prompt, responseSchema = PRACTICAL_SCHEMA }) {
  const result = await generateCompleteJson({
    prompt,
    systemPrompt: "",
    responseSchema,
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
  const sourceText = `${sourceContext.activityChapter.raw}\n${sourceContext.lessonChapter.raw}`.toLowerCase();
  const sourceIsC = /\b(#include\s*<stdio\.h>|clang|gcc|\.c\b|c program|hello,\s*world)\b/.test(sourceText);
  if (sourceIsC) return "code";
  if (LAB_TYPES.includes(raw.labType)) return raw.labType;
  if (["Scenario & Design Exercise", "Research & Analysis"].includes(sourceContext.source.category)) {
    return "simulation";
  }
  const language = String(raw.language || "").toLowerCase();
  if (/^(bash|shell|sh|zsh|powershell)$/.test(language)) return "shell";
  if (/^(sql|postgresql|mysql|sqlite)$/.test(language)) return "database";
  if (/^(c|c\+\+|csharp|c#|go|java|javascript|typescript|kotlin|php|python|ruby|rust)$/.test(language)) return "code";
  if (/\b(postgres|mysql|sqlite|sql|schema|table|query|database)\b/.test(sourceText)) return "database";
  if (/\b(cloud|aws|azure|gcp|kubectl|terraform|bucket|iam)\b/.test(sourceText)) return "cloud";
  if (/\b(dns|packet|firewall|port|tcp|udp|network interface)\b/.test(sourceText)) return "network";
  if (/\b(selinux|mfa|authentication|authorization|credential|secret|hardening)\b/.test(sourceText)) return "security";
  if (/\b(bash|shell|terminal|linux|rhel|sudo|chmod|systemctl|vmstat|strace)\b/.test(sourceText)) return "shell";
  if (/\b(pandas|matplotlib|csv|dataframe|dataset|statistics)\b/.test(sourceText)) return "data";
  return sourceContext.source.category === "Terminal Coding Lab" ? "code" : "simulation";
}

function inferLanguage(raw, sourceContext, labType) {
  const text = `${sourceContext.activityChapter.raw}\n${sourceContext.lessonChapter.raw}`.toLowerCase();
  if (/\b(#include\s*<stdio\.h>|clang|gcc|\.c\b|c program|hello,\s*world)\b/.test(text)) return "c";
  const requested = String(raw.language || "").trim().toLowerCase();
  if (requested) return requested === "c++" ? "cpp" : requested;
  if (labType === "database") return "sqlite";
  if (labType === "shell") return "bash";
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
  const namedFile = String(instructions || "").match(/\b(?:save|create|name)\b[^\n]{0,100}?\b(?:as|to)\s+`?([a-z0-9][a-z0-9_.-]*\.(?:c|cc|cpp|cxx|py|js|ts|sql|sh))`?/i)?.[1];
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
      path: namedFile && /\.py$/i.test(namedFile) ? namedFile : "main.py",
      content: extracted || 'print("Cohortia practical ready")\n',
      language: "python",
      description: "Runnable Python starter file for the practical.",
      editable: true,
    };
  }
  if (normalizedLanguage === "javascript") {
    return {
      path: namedFile && /\.js$/i.test(namedFile) ? namedFile : "index.js",
      content: extracted || 'console.log("Cohortia practical ready");\n',
      language: "javascript",
      description: "Runnable JavaScript starter file for the practical.",
      editable: true,
    };
  }
  return {
    path: namedFile && (normalizedLanguage === "cpp" ? /\.(cpp|cc|cxx)$/i.test(namedFile) : /\.c$/i.test(namedFile))
      ? namedFile
      : normalizedLanguage === "cpp" ? "main.cpp" : "main.c",
    content: extracted || '#include <stdio.h>\n\nint main(void) {\n    printf("Cohortia practical ready\\n");\n    return 0;\n}\n',
    language: normalizedLanguage === "cpp" ? "cpp" : "c",
    description: "Runnable C starter file for the practical.",
    editable: true,
  };
}

function fallbackChecks(labType, language, files) {
  if (labType === "database") {
    return [
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
  const file = files[0];
  const output = /printf\s*\(\s*"([^"]+)/i.exec(file.content)?.[1]
    || /print(?:ln)?\s*\(\s*["']([^"']+)/i.exec(file.content)?.[1]
    || "Cohortia practical ready";
  return [
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
    file_exists: "file_exists",
    file_contents: "file_contents",
    compile_probe: "compile_probe",
    sanitizer: "sanitizer",
    integration: "manual",
  };
  return mapping[test.type] || (["command", "file", "file_exists", "file_contents", "compile_probe", "output", "sql", "http", "manual", "simulation", "sanitizer"].includes(test.type)
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
  if (test.type === "file_exists" && typeof test.path === "string") {
    check.passCondition = { path: test.path };
  } else if (test.type === "file_contents" && typeof test.path === "string") {
    check.passCondition = { path: test.path, contents: test.contents || test.expected || "" };
  } else if (test.type === "compile_probe" && typeof test.probeSource === "string") {
    check.passCondition = {
      source: test.probeSource,
      expectCompileSuccess: test.expectCompileSuccess === true,
      ...(typeof test.expectedDiagnostic === "string" ? { expectedDiagnostic: test.expectedDiagnostic } : {}),
    };
  } else if (test.passCondition && typeof test.passCondition === "object") {
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

function binaryExercisesFromActivity(activity) {
  const questions = String(activity || "")
    .split(/\r?\n/)
    .map((line) => line.replace(/^\s*\d+[.)]\s*/, "").replace(/[`*_]/g, "").trim())
    .filter((line) => line && /^(?:convert|how many|if\b)/i.test(line));

  return questions.flatMap((question) => {
    let expectedAnswer;
    let explanation;
    let title;
    const binaryToDecimal = /binary number\s+([01]+)\s+to its decimal/i.exec(question);
    const decimalToBinary = /decimal number\s+(\d+)\s+to its binary/i.exec(question);
    const numberOfBits = /how many unique values?.*?(\d+)\s*bits?/i.exec(question);
    const maxComponent = /maximum decimal value for each .*?component/i.test(question)
      ? /(\d+)\s*bits?\s+each/i.exec(question) || /(\d+)\s*bits?/i.exec(question)
      : null;

    if (binaryToDecimal) {
      expectedAnswer = String(Number.parseInt(binaryToDecimal[1], 2));
      title = `Convert ${binaryToDecimal[1]} from binary to decimal`;
      explanation = `${binaryToDecimal[1]}₂ equals ${expectedAnswer}₁₀ when each bit is multiplied by its power-of-two place value and the products are added.`;
    } else if (decimalToBinary) {
      const decimal = Number(decimalToBinary[1]);
      if (!Number.isSafeInteger(decimal)) return [];
      expectedAnswer = decimal.toString(2);
      title = `Convert ${decimal} from decimal to binary`;
      explanation = `${decimal}₁₀ is ${expectedAnswer}₂. Repeatedly divide by two and read the remainders from last to first.`;
    } else if (numberOfBits) {
      const bits = Number(numberOfBits[1]);
      if (!Number.isSafeInteger(bits) || bits < 1 || bits > 52) return [];
      expectedAnswer = String(2 ** bits);
      title = `Count the values represented by ${bits} bits`;
      explanation = `${bits} bits have ${2 ** bits} possible patterns because each bit has two choices.`;
    } else if (maxComponent) {
      const bits = Number(maxComponent[1]);
      if (!Number.isSafeInteger(bits) || bits < 1 || bits > 52) return [];
      expectedAnswer = String(2 ** bits - 1);
      title = `Find the maximum value of a ${bits}-bit color component`;
      explanation = `An unsigned ${bits}-bit component ranges from 0 to 2^${bits} − 1, so its maximum is ${expectedAnswer}.`;
    } else {
      return [];
    }

    return [{
      type: "binary_conversion",
      title,
      prompt: question,
      expectedAnswer,
      acceptedAnswers: [],
      explanation,
    }];
  });
}

function binaryWorkedExample(exercise) {
  const binaryToDecimal = /binary number\s+([01]+)\s+to its decimal/i.exec(exercise.prompt);
  if (binaryToDecimal) {
    const bits = binaryToDecimal[1];
    const placeValues = [...bits].map((_, index) => 2 ** (bits.length - index - 1));
    const products = [...bits].map((bit, index) => Number(bit) * placeValues[index]);
    const activeProducts = products.filter((product) => product > 0);
    const answer = exercise.expectedAnswer;
    return [
      {
        title: "Welcome to the practical",
        displayText: `Mission: understand how ${bits} stores a number using only zero and one.`,
        speakerText: `Welcome to this practical. Before we calculate anything, notice that this is the same binary idea used inside a phone, a game console, and every digital image. We will move slowly, test each step, and turn a pattern of zeroes and ones into a number you can explain with confidence.`,
        explanation: "Binary is the language digital systems use to represent information.",
      },
      {
        title: "Read the binary digits",
        displayText: `Bits (left to right): ${[...bits].join("  ")}`,
        speakerText: `We will convert ${bits} from binary to decimal by matching each digit with its place value. Keep the digits in their original order. A bit of one includes its place value in the total, while a bit of zero contributes nothing.`,
        explanation: "Each binary digit is either zero or one.",
      },
      {
        title: "Assign powers of two",
        displayText: `Place values: ${placeValues.join("  ")}`,
        speakerText: `Starting at the right, binary place values are powers of two beginning with one. Moving left, they double each time. For ${bits}, write those values directly under the digits so every bit is paired with the correct power of two.`,
        explanation: "From right to left, the place values are 2⁰, 2¹, 2², and so on.",
      },
      {
        title: "Multiply each bit by its place value",
        displayText: [...bits].map((bit, index) => `(${bit} × ${placeValues[index]})`).join(" + "),
        speakerText: `Now multiply each digit by the value beneath it. The one digits keep their place values; each zero makes a zero product. This step makes clear exactly which powers of two are included in the binary number.`,
        explanation: "Multiply each bit by its matching power-of-two place value.",
      },
      {
        title: "Add the included values",
        displayText: `${activeProducts.join(" + ")} = ${answer}`,
        speakerText: `Add only the non-zero products. For ${bits}, the included place values total ${answer}. You can check the addition separately before writing the final result, which helps catch mistakes in either the place values or the sum.`,
        explanation: "Add the place values whose corresponding bit is one.",
      },
      {
        title: "State the equivalent decimal value",
        displayText: `${bits}₂ = ${answer}₁₀`,
        speakerText: `So ${bits} in base two is ${answer} in base ten. The small base labels tell us how to interpret the digits. We have converted the same quantity into a different number system, not changed the value itself.`,
        explanation: "The base-two and base-ten expressions represent the same value.",
      },
    ].map((step, index) => ({ stepNumber: index + 1, ...step, durationSeconds: 8 }));
  }

  return [];
}

function normalizePractical(raw, sourceContext, metadata) {
  if (!raw || typeof raw !== "object") throw new Error("Generated practical must be an object.");

  const labType = inferLabType(raw, sourceContext);
  const experienceProfile = profileFor({ category: sourceContext.source.category, labType });
  const activityKind = activityKindFor({
    category: sourceContext.source.category,
    title: sourceContext.activityTitle || raw.title,
    activity: sourceContext.activityChapter.handsOnActivity,
  });
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
      teaching: task.teaching && typeof task.teaching === "object" ? task.teaching : undefined,
      required: task.required !== false,
      stepType: ["observe", "modify", "experiment", "verify"].includes(task.stepType) ? task.stepType : undefined,
      requiredConcepts: asStringArray(task.requiredConcepts),
      hints: asStringArray(task.hints),
      inlineSuggestions: Array.isArray(task.inlineSuggestions)
        ? task.inlineSuggestions
            .filter((suggestion) => suggestion && typeof suggestion === "object")
            .map((suggestion, suggestionIndex) => ({
              id: normalizeId(suggestion.id, `suggestion-${index + 1}-${suggestionIndex + 1}`),
              label: asStringText(suggestion.label) || `Suggestion ${suggestionIndex + 1}`,
              text: asStringText(suggestion.text),
              ...(typeof suggestion.insertionText === "string" && suggestion.insertionText.length > 0
                ? { insertionText: suggestion.insertionText }
                : {}),
            }))
            .filter((suggestion) => suggestion.text.length > 0)
        : [],
      structuredHints: task.structuredHints && typeof task.structuredHints === "object" ? task.structuredHints : undefined,
      interactiveExercise: activityKind === "binary_exercise"
        && task.interactiveExercise?.type === "binary_conversion"
        && typeof task.interactiveExercise.prompt === "string"
        && typeof task.interactiveExercise.expectedAnswer === "string"
        && typeof task.interactiveExercise.explanation === "string"
        ? {
            type: "binary_conversion",
            prompt: task.interactiveExercise.prompt,
            expectedAnswer: task.interactiveExercise.expectedAnswer,
            acceptedAnswers: asStringArray(task.interactiveExercise.acceptedAnswers),
            explanation: task.interactiveExercise.explanation,
          }
        : undefined,
      checkIds: taskCheckIds,
    };
  });

  if (activityKind === "binary_exercise") {
    const sourceExercises = binaryExercisesFromActivity(sourceContext.activityChapter.handsOnActivity);
    if (sourceExercises.length) {
      tasks = sourceExercises.map((exercise, index) => {
        const existing = tasks[index];
        const narratorGuide = existing?.narratorGuide
          || `Let's solve this binary challenge carefully. ${exercise.prompt} Explain how the place values or repeated division support your answer.`;
        return {
          ...existing,
          id: existing?.id || `binary-question-${index + 1}`,
          title: exercise.title,
          instruction: exercise.prompt,
          narratorGuide,
          teaching: existing?.teaching || {
            learningGoal: "Apply binary place values and explain the conversion.",
            teacherTalk: narratorGuide,
            realWorldExample: "Binary values represent numbers stored and processed by digital systems.",
            guidedSteps: [exercise.prompt, "Show the place values or division steps.", "Check that the result represents the same quantity."],
            questions: ["How can you verify your answer using powers of two?"],
            expectedObservations: ["The answer agrees with the binary place-value or base-conversion rule."],
            recap: exercise.explanation,
            waitForLearner: true,
          },
          required: true,
          checkIds: existing?.checkIds || [],
          interactiveExercise: exercise,
        };
      });
    }
  }

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
  // A model can return only a README while still providing an otherwise useful
  // code walkthrough. Terminal coding labs must always have a real editable
  // source file for that walkthrough and for the learner's practice phase.
  const hasSourceFile = files.some((file) => /\.(c|cc|cpp|cxx|h|hpp|py|js|ts|sql)$/i.test(file.path));
  if (sourceContext.source.category === "Terminal Coding Lab" && !hasSourceFile) {
    files.push(fallbackStarterFile(instructions, labType, language));
  }
  if (executableLab && checks.length === 0) {
    for (const fallback of fallbackChecks(labType, language, files, instructions)) {
      addCheck(fallback, fallback.id);
    }
  }

  const progressiveStages = [
    {
      id: "observe",
      title: "Observe & predict",
      instruction: `Inspect the starter material for ${title}. Identify its main parts and record what you expect to happen before making a change.`,
      learningGoal: "Build a clear baseline before changing the practical.",
      question: "What do you expect to happen, and what evidence will you look for?",
    },
    {
      id: "modify",
      title: "Make one deliberate change",
      instruction: `Make one small change that advances ${title}. Explain which part you changed and why that change should affect the result.`,
      learningGoal: "Connect one intentional change to its observable effect.",
      question: "Which single change did you make, and what result should it cause?",
    },
    {
      id: "experiment",
      title: "Experiment & compare",
      instruction: `Vary one input, condition, or design choice in ${title}. Compare the new result with your baseline and explain what caused the difference.`,
      learningGoal: "Use a controlled experiment to test an idea rather than guessing.",
      question: "What did you vary, what stayed the same, and what changed?",
    },
    {
      id: "verify",
      title: "Verify & troubleshoot",
      instruction: `Run the available checks for ${title}. If a result differs from your prediction, inspect the evidence, make one correction, and test again.`,
      learningGoal: "Use checks and observed evidence to verify or troubleshoot the solution.",
      question: "Which check supports your conclusion, and what would a failure tell you?",
    },
    {
      id: "reflect",
      title: "Explain & transfer",
      instruction: `Summarize how your solution to ${title} works. Identify one limitation and describe how you would apply the same idea to a new problem.`,
      learningGoal: "Explain the practical in your own words and transfer its central idea.",
      question: "What principle did you learn, and where else could you use it?",
    },
  ];
  if (activityKind !== "binary_exercise" && tasks.length < progressiveStages.length) {
    tasks = progressiveStages.map((stage, index) => {
      const existing = tasks[index];
      if (existing) {
        if (/^(?:practical|task)\b/i.test(existing.title || "")) {
          return {
            ...existing,
            title: `Scene ${index + 1} — ${stage.title}`,
            instruction: stage.instruction,
          };
        }
        return existing;
      }
      const narratorGuide = `Let’s ${stage.id} ${title}. ${stage.instruction} Take this one step at a time, compare what you observe with your prediction, and explain the evidence before moving on.`;
      return {
        id: normalizeId(`scene-${index + 1}-${stage.id}`, `scene-${index + 1}`),
        title: `Scene ${index + 1} — ${stage.title}`,
        instruction: stage.instruction,
        narratorGuide,
        teaching: {
          learningGoal: stage.learningGoal,
          teacherTalk: narratorGuide,
          realWorldExample: `A practitioner working on ${title} makes small, testable changes and checks their effect before relying on the result.`,
          guidedSteps: [
            stage.instruction,
            "Record the result you observe and compare it with your prediction.",
            "Explain what the evidence supports and what you would investigate next.",
          ],
          questions: [stage.question],
          expectedObservations: ["A result that can be compared with the learner's prediction."],
          feedback: {
            success: "Good evidence. Explain why it supports your conclusion.",
            misconception: "Compare the observed result with your prediction and identify one possible cause.",
            retry: "Change one thing at a time, then run the check again.",
          },
          recap: stage.learningGoal,
          waitForLearner: true,
          estimatedMinutes: 3,
        },
        required: true,
        requiredConcepts: [],
        hints: ["Start with one small step.", "Compare the result with your prediction before changing anything else."],
        inlineSuggestions: [],
        structuredHints: undefined,
        checkIds: [],
      };
    });
  }

  if (executableLab && checks.length > 0) {
    const checkIds = checks.map((check) => check.id);
    for (let index = 0; index < tasks.length; index += 1) {
      if (tasks[index].checkIds.length === 0 && tasks[index].required !== false) {
        tasks[index] = { ...tasks[index], checkIds: [checkIds[index % checkIds.length]] };
      }
    }
    const assignedChecks = new Set(tasks.flatMap((task) => task.checkIds));
    const orphanedChecks = checkIds.filter((id) => !assignedChecks.has(id));
    for (const checkId of orphanedChecks) {
      const targetIndex = tasks.reduce((best, task, index, all) => (
        task.checkIds.length < all[best].checkIds.length ? index : best
      ), 0);
      tasks[targetIndex] = {
        ...tasks[targetIndex],
        checkIds: [...tasks[targetIndex].checkIds, checkId],
      };
    }
  }

  const safety = normalizeSafety(raw.safety, labType, sourceContext);
  const evidence = normalizeEvidence(raw.evidence);
  const practicalTitle = title;
  const narratorGuide = asStringText(raw.narratorGuide) || fallbackNarratorGuide(practicalTitle, instructions, sourceContext);
  tasks = tasks.map((task, index) => ({
    ...task,
    narratorGuide: task.narratorGuide || fallbackTaskNarrator(task, index, practicalTitle),
    teaching: task.teaching && typeof task.teaching === "object"
      ? task.teaching
      : {
          learningGoal: task.requiredConcepts?.join(", ") || `Understand ${task.title || "this step"}.`,
          teacherTalk: task.narratorGuide || fallbackTaskNarrator(task, index, practicalTitle),
          realWorldExample: task.realWorldExample || `Connect ${task.title || "this step"} to a small real-world program or system.`,
          guidedSteps: [task.instruction],
          questions: [task.structuredHints?.nudge || "What do you predict will happen before you run it?"],
          expectedObservations: [task.expectedObservation || "Compare the result with your prediction."],
          feedback: {
            success: "Good observation. Explain why the result makes sense before continuing.",
            misconception: "That result is useful evidence. Let us compare it with the underlying concept.",
            retry: "Try one small change and observe the result again.",
          },
          recap: task.narratorGuide || task.instruction,
          waitForLearner: true,
        },
  }));
  const filePathByLowerCase = new Map(files.map((file) => [file.path.toLowerCase(), file.path]));
  const primarySourceFiles = files.filter((file) => /\.(c|cc|cpp|cxx|h|hpp|py|js|ts|sql)$/i.test(file.path));
  const resolveWalkthroughFile = (candidate) => {
    const fallbackFile = primarySourceFiles[0] || files[0];
    if (typeof candidate !== "string" || !candidate.trim()) return fallbackFile?.path;
    const normalized = candidate.trim().replace(/\\/g, "/").replace(/^\.\//, "");
    const exact = filePathByLowerCase.get(normalized.toLowerCase());
    if (exact) return exact;
    const basename = normalized.split("/").at(-1)?.toLowerCase();
    const basenameMatch = files.find((file) => file.path.split("/").at(-1)?.toLowerCase() === basename);
    if (basenameMatch) return basenameMatch.path;

    // Models often name the source shown in the activity (for example
    // greeting.c) even when fallback generation created main.c. A single
    // executable source file is an unambiguous safe target; preserve the
    // generated workspace path instead of rejecting an otherwise teachable lab.
    const extension = normalized.split(".").at(-1)?.toLowerCase();
    const compatibleSource = primarySourceFiles.filter((file) => (
      file.path.split(".").at(-1)?.toLowerCase() === extension
    ));
    return compatibleSource.length === 1 ? compatibleSource[0].path : fallbackFile?.path;
  };
  let codeWalkthrough = (Array.isArray(raw.codeWalkthrough) ? raw.codeWalkthrough : []).map((seg, idx) => ({
    stepNumber: Number.isInteger(Number(seg.stepNumber)) ? Number(seg.stepNumber) : idx + 1,
    speakerText: asStringText(seg.speakerText || seg.text || seg.narration || seg.explanation),
    codeLine: typeof seg.codeLine === "string" ? seg.codeLine : (typeof seg.code === "string" ? seg.code : ""),
    file: resolveWalkthroughFile(seg.file),
    explanation: asStringText(seg.explanation || seg.annotation),
    durationSeconds: clampInteger(seg.durationSeconds, 8, 3, 90),
  })).filter((seg) => seg.speakerText || seg.codeLine).sort((left, right) => left.stepNumber - right.stepNumber);
  if (sourceContext.source.category === "Terminal Coding Lab" && codeWalkthrough.length < 4) {
    const fallbackFile = primarySourceFiles[0] || files[0];
    const lines = String(fallbackFile?.content || "")
      .split(/\r?\n/)
      .map((line) => line.trimEnd())
      .filter((line) => line.trim())
      .slice(0, 8);
    if (fallbackFile && lines.length >= 4) {
      codeWalkthrough = lines.map((codeLine, index) => ({
        stepNumber: index + 1,
        file: fallbackFile.path,
        codeLine,
        speakerText: `As this line appears, read it slowly and connect its syntax to the program's job. Notice how step ${index + 1} contributes one clear piece of behavior before we run and test the complete program.`,
        explanation: `Understand the role of this line before moving to the next one.`,
        durationSeconds: 8,
      }));
    }
  }
  let teachingSteps = (Array.isArray(raw.teachingSteps) ? raw.teachingSteps : [])
    .filter((step) => step && typeof step === "object")
    .map((step, index) => ({
      stepNumber: Number.isInteger(Number(step.stepNumber)) ? Number(step.stepNumber) : index + 1,
      title: asStringText(step.title) || `Teaching step ${index + 1}`,
      displayText: asStringText(step.displayText),
      speakerText: asStringText(step.speakerText),
      explanation: asStringText(step.explanation),
      durationSeconds: clampInteger(step.durationSeconds, 8, 3, 90),
    }))
    .filter((step) => step.displayText && step.speakerText && step.explanation)
    .sort((left, right) => left.stepNumber - right.stepNumber);
  if (activityKind === "binary_exercise" && tasks[0]?.interactiveExercise) {
    teachingSteps = binaryWorkedExample(tasks[0].interactiveExercise);
  }
  if (["scenario_simulator", "cloud_console_lab"].includes(experienceProfile.experienceType) && teachingSteps.length === 0) {
    teachingSteps = tasks.slice(0, 8).map((task, index) => ({
      stepNumber: index + 1,
      title: task.title || `Teaching step ${index + 1}`,
      displayText: task.teaching?.guidedSteps?.[0] || task.title || `Explore the idea in step ${index + 1}`,
      speakerText: task.narratorGuide || task.instruction,
      explanation: task.teaching?.learningGoal || task.instruction,
      durationSeconds: 8,
    }));
  }
  if (["scenario_simulator", "cloud_console_lab"].includes(experienceProfile.experienceType)
    && teachingSteps.length > 0
    && teachingSteps.length < 8
    && !/\bwelcome\b/i.test(teachingSteps[0]?.speakerText || "")) {
    teachingSteps.unshift({
      stepNumber: 0,
      title: "Welcome to the practical",
      displayText: `Welcome to ${sourceContext.courseTitle}, Module ${metadata.moduleNumber}, Chapter ${metadata.chapterNumber}: ${title}.`,
      speakerText: `Welcome. In this practical for ${sourceContext.courseTitle}, Module ${metadata.moduleNumber}, Chapter ${metadata.chapterNumber}, we will explore ${title}. First, I will show you the central idea with a realistic example. Then you will test your own reasoning step by step. Take your time: careful predictions and observations are how practical learning becomes understanding.`,
      explanation: "Start with the mission, then connect each step to evidence.",
      durationSeconds: 18,
    });
    teachingSteps = teachingSteps.map((step, index) => ({ ...step, stepNumber: index + 1 }));
  }
  const walkthroughStepNumbers = teachingSteps.length
    ? teachingSteps.map((step) => step.stepNumber)
    : codeWalkthrough.map((step) => step.stepNumber);
  const stepsForTask = (taskIndex) => {
    if (!walkthroughStepNumbers.length) return [];
    const chunkSize = Math.ceil(walkthroughStepNumbers.length / Math.max(tasks.length, 1));
    return walkthroughStepNumbers.slice(taskIndex * chunkSize, (taskIndex + 1) * chunkSize);
  };

  const rawTeachingPlaylist = (Array.isArray(raw.teachingPlaylist) && raw.teachingPlaylist.length
    ? raw.teachingPlaylist
    : tasks.map((task, index) => ({
        id: `path-${task.id}`,
        title: task.title || `Learning path ${index + 1}`,
        category: sourceContext.source.category,
        description: task.instruction,
        durationSeconds: Math.max(60, Math.min(180, Math.ceil((task.narratorGuide || instructions).length / 10))),
        learningGoal: task.teaching?.learningGoal || `Understand ${task.title || "this step"}.`,
        narratorScript: task.narratorGuide,
        workedExample: task.teaching?.guidedSteps?.[0] || task.instruction,
        scenario: task.teaching?.realWorldExample || `Apply ${task.title || "the idea"} in a real project.`,
        learnerPrompt: task.teaching?.questions?.[0] || "What do you predict will happen next?",
        commonMistake: task.teaching?.feedback?.misconception || "Do not skip checking the result.",
        recap: task.teaching?.recap || task.instruction,
        codeSteps: stepsForTask(index),
      })));
  let teachingPlaylist = tasks.map((task, index) => {
    const step = rawTeachingPlaylist[index] || {
      id: `path-${task.id}`,
      title: task.title || `Learning path ${index + 1}`,
      category: sourceContext.source.category,
      description: task.instruction,
      durationSeconds: 120,
      learningGoal: task.teaching?.learningGoal || `Understand ${task.title || "this step"}.`,
      narratorScript: task.narratorGuide,
      workedExample: task.teaching?.guidedSteps?.[0] || task.instruction,
      scenario: task.teaching?.realWorldExample || `Apply ${task.title || "the idea"} in a real project.`,
      learnerPrompt: task.teaching?.questions?.[0] || "What do you predict will happen next?",
      commonMistake: task.teaching?.feedback?.misconception || "Do not skip checking the result.",
      recap: task.teaching?.recap || task.instruction,
      codeSteps: stepsForTask(index),
    };
    return {
        ...step,
        id: normalizeId(step.id, `path-${index + 1}`),
        durationSeconds: clampInteger(step.durationSeconds, 90, 45, 240),
        codeSteps: ["scenario_simulator", "cloud_console_lab"].includes(experienceProfile.experienceType)
          ? stepsForTask(index)
          : Array.isArray(step.codeSteps) && step.codeSteps.length ? step.codeSteps : stepsForTask(index),
      };
  });
  if (activityKind === "binary_exercise" && teachingPlaylist.length && teachingSteps.length) {
    const teacherNarration = teachingSteps.map((step) => step.speakerText).join(" ");
    teachingPlaylist = [{
      ...teachingPlaylist[0],
      id: "binary-worked-example",
      title: "Worked example: binary to decimal",
      description: "Follow the teacher's place-value conversion, then try the challenges yourself.",
      durationSeconds: clampInteger(Math.ceil(teacherNarration.length / 10), 90, 60, 240),
      learningGoal: "Convert a binary number to decimal by applying powers of two.",
      narratorScript: teacherNarration,
      workedExample: teachingSteps.map((step) => step.displayText).join("\n"),
      learnerPrompt: "After the worked example, choose a challenge and solve it yourself.",
      codeSteps: teachingSteps.map((step) => step.stepNumber),
    }];
  }
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
    experienceType: experienceProfile.experienceType,
    categoryProfile: {
      experience: experienceProfile.experienceType,
      workspaceFamily: experienceProfile.workspaceFamily,
      defaultMode: experienceProfile.defaultMode,
      learnerArtifact: experienceProfile.learnerArtifact,
      teacherRole: raw.teacher?.role || "supportive practical mentor",
    },
    activityKind,
    experience: {
      experienceType: experienceProfile.experienceType,
      workspaceFamily: experienceProfile.workspaceFamily,
      learnerArtifact: raw.experience?.learnerArtifact || experienceProfile.learnerArtifact,
      requiredUi: experienceProfile.requiredUi,
    },
    title,
    summary: raw.summary || "",
    level: raw.level || sourceContext.level || undefined,
    labType,
    mode: experienceProfile.experienceType === "terminal_coding_lab"
      ? modeForLabType(labType, raw.mode)
      : experienceProfile.defaultMode,
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
    teachingPlaylist,
    codeWalkthrough,
    teachingSteps,
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
    if (!["command", "file", "file_exists", "file_contents", "output", "sql", "http", "manual", "simulation", "compile_probe", "sanitizer"].includes(check.type)) errors.push(`check ${check.id} has invalid type`);
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

  if (practical.category === "Terminal Coding Lab") {
    const walkthrough = Array.isArray(practical.codeWalkthrough) ? practical.codeWalkthrough : [];
    if (walkthrough.length < 4) errors.push("Terminal Coding Lab must include at least 4 codeWalkthrough steps");
    const knownFiles = new Set((practical.files || []).map((file) => file.path));
    const seenSteps = new Set();
    for (const step of walkthrough) {
      if (!Number.isInteger(step.stepNumber) || step.stepNumber < 1 || seenSteps.has(step.stepNumber)) {
        errors.push("codeWalkthrough stepNumber values must be unique positive integers");
      }
      seenSteps.add(step.stepNumber);
      if (typeof step.speakerText !== "string" || step.speakerText.trim().length < 40) errors.push(`codeWalkthrough step ${step.stepNumber} needs meaningful teacher narration`);
      if (typeof step.codeLine !== "string" || !step.codeLine.trim()) errors.push(`codeWalkthrough step ${step.stepNumber} needs codeLine`);
      if (typeof step.file !== "string" || !knownFiles.has(step.file)) errors.push(`codeWalkthrough step ${step.stepNumber} must reference a practical file`);
      if (!Number.isFinite(step.durationSeconds) || step.durationSeconds < 3 || step.durationSeconds > 90) errors.push(`codeWalkthrough step ${step.stepNumber} has invalid durationSeconds`);
    }
    const playlistSteps = new Set((practical.teachingPlaylist || []).flatMap((item) => Array.isArray(item.codeSteps) ? item.codeSteps : []));
    for (const step of walkthrough) if (!playlistSteps.has(step.stepNumber)) errors.push(`codeWalkthrough step ${step.stepNumber} is not assigned to a teaching playlist item`);
  }

  if (practical.activityKind === "binary_exercise" || practical.category === "Scenario & Design Exercise") {
    const steps = Array.isArray(practical.teachingSteps) ? practical.teachingSteps : [];
    if (steps.length < 4 || steps.length > 8) errors.push("Scenario & Design Exercise must include 4-8 teachingSteps");
    const stepNumbers = new Set();
    for (const step of steps) {
      if (!Number.isInteger(step.stepNumber) || step.stepNumber < 1 || stepNumbers.has(step.stepNumber)) {
        errors.push("teachingSteps stepNumber values must be unique positive integers");
      }
      stepNumbers.add(step.stepNumber);
      if (!step.displayText?.trim()) errors.push(`teaching step ${step.stepNumber} needs displayText`);
      if (!step.speakerText?.trim() || step.speakerText.trim().length < 40) errors.push(`teaching step ${step.stepNumber} needs meaningful teacher narration`);
      if (!step.explanation?.trim()) errors.push(`teaching step ${step.stepNumber} needs an explanation`);
    }
    const playlistSteps = new Set((practical.teachingPlaylist || []).flatMap((item) => Array.isArray(item.codeSteps) ? item.codeSteps : []));
    for (const step of steps) if (!playlistSteps.has(step.stepNumber)) errors.push(`teaching step ${step.stepNumber} is not assigned to a teaching playlist item`);
  }

  if (practical.activityKind === "binary_exercise") {
    for (const task of practical.tasks || []) {
      if (task.required === false) continue;
      const exercise = task.interactiveExercise;
      if (exercise?.type !== "binary_conversion" || !exercise.prompt?.trim() || !exercise.expectedAnswer?.trim() || !exercise.explanation?.trim()) {
        errors.push(`binary exercise task ${task.id} needs a complete interactiveExercise`);
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

2A. TEACHER-LED LEARNING PATH:
   Teach the supplied HANDS-ON ACTIVITY itself, not a generic substitute.
   Assume the learner may be seeing the concept for the first time: define each
   term before using it, show the smallest possible example, explain what the
   learner should see on screen, then invite the learner to make one change.
   Never replace teaching with phrases such as "follow the instructions" or
   "observe the result" without explaining what to look for and why.
   Break it into CONNECT, OBSERVE, CHANGE, TEST, EXPLAIN, and EXTEND paths.
   Each task must include a worked example, a different real-world example,
   one warm teacher question, an expected observation, and an explicit pause
   before the learner continues. Use the exact starter file and commands.

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
   - inlineSuggestions: add 1–3 static, task-specific coaching suggestions to the manifest. Optional insertionText must be a small fragment, never the full answer; these suggestions are shown without requesting AI.

5. NARRATOR VOICE (~100 wpm, 250-350 words total per practical):
   - Sound like a patient, warm, interactive teacher, never a generic system message.
   - Teach from first principles: name the goal, introduce the idea, model it,
     check understanding, guide practice, then recap what was learned.
   - Explain WHY each step matters and refer to the exact activity.
   - Ask the learner to predict, pause, observe, and explain in their own words.
   - Preview the next change and use encouraging feedback such as "Good observation."
   - When reading code aloud, pronounce language and punctuation deliberately:
     say C as "see", printf as "print f", stdio dot h as "standard input output header",
     and name symbols such as slash, backslash, hash, underscore, dot, comma,
     open and close parenthesis, curly brace, and square bracket when they matter.
     Never dump raw Markdown or a long code block into speech.

6. BEHAVIORAL VERIFICATION:
   For each task, include tests that prove the required behavior, not merely source text or successful compilation:
   - Use runtime output, file contents, query results, or compile probes for access-control rules.
   - For access control, test that derived code can access the member and an external caller cannot.
   - C++ file-writing activities must use std::ofstream and verify produced output-file artifacts, including path, content, and append behavior where relevant.
   - Never describe a marker or prefix as encryption. Never claim memory safety or zero leaks unless a sanitizer check runs AddressSanitizer and UndefinedBehaviorSanitizer successfully.
   - Use file_exists checks with the exact relative output path; file_contents checks must include both path and expected content; sanitizer checks must be explicit.
   - A compile_probe check must provide probeSource and expectCompileSuccess. Rejected probes must also provide expectedDiagnostic (such as "protected" or "private") so unrelated syntax errors cannot pass. To test a learner translation unit, rename main before including it (for example, #define main cohortia_student_main, #include "main.cpp", #undef main), then define the probe's own main. Do not make a probe fail for any reason except the intended access rule.
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
   -    Include all standard fields PLUS animation/timing extensions.
   Also return teachingPlaylist with one entry per task containing:
   title, description, learningGoal, narratorScript, workedExample,
   scenario, learnerPrompt, commonMistake, recap, durationSeconds, and codeSteps.`;
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

    const inferredLabType = inferLabType({}, sourceContext);
    const experienceProfile = profileFor({ category: sourceContext.source.category, labType: inferredLabType });
    const activityKind = activityKindFor({
      category: sourceContext.source.category,
      title: sourceContext.activityTitle,
      activity: sourceContext.activityChapter.handsOnActivity,
    });
    const experienceBrief = `\n\nACTIVITY KIND (AUTHORITATIVE)\n==============================\n${activityKind}\n\nEXPERIENCE PROFILE (AUTHORITATIVE)\n==================================\nExperience: ${experienceProfile.experienceType}\nWorkspace family: ${experienceProfile.workspaceFamily}\nLearner artifact: ${experienceProfile.learnerArtifact}\nRequired learner UI: ${experienceProfile.requiredUi.join(", ")}\n\n${experienceProfile.prompt}\n\nReturn an \"experience\" object that exactly matches this profile. Do not substitute another experience family.`;
    const prompt = `${buildGeminiPrompt(promptTemplate, chapterData, metadata, sourceContext)}${experienceBrief}`;
    const responseSchema = profileSchema(PRACTICAL_SCHEMA, experienceProfile, activityKind);

    if (options["dry-run"] === true) {
      console.log(JSON.stringify({
        status: "dry-run",
        source: sourceContext.source,
        lessonSourcePath: sourceContext.lessonSourcePath,
        lessonHash: sourceContext.lessonHash,
        experienceType: experienceProfile.experienceType,
        activityKind,
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
      result = await callGemini({ model, prompt, responseSchema });
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
