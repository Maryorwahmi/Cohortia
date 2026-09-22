#!/usr/bin/env node
/**
 * generate-learning-board-html.js
 *
 * Provider-neutral Computer Science Learning Board Generator.
 *
 * What it does:
 *   1. Reads an existing Markdown course syllabus.
 *   2. Extracts a requested module and its source sections.
 *   3. Sends ONLY that chapter to the configured AI provider.
 *   4. Forces the provider to return a structured learning-board JSON manifest
 *      where every screen already contains a rendered HTML fragment.
 *   5. Validates a level-based screen range.
 *   6. Writes a manifest.json and screen-NN/content.html files.
 *
 * Usage:
 *   node scripts/generate-learning-board-html.js \
 *     --syllabus docs/computer-science/ai-for-everyone.md \
 *     --module "Module 3"
 *
 * Optional:
 *   --output generated/learning-boards-html
 *   --model gemini-2.5-flash
 *   --course-id ai-for-everyone
 *
 * Environment:
 *   GEMINI_API_KEY=...
 *   GEMINI_MODEL=gemini-2.5-flash
 *
 * Install:
 *   npm i @google/genai
 */

import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { generateCompleteJson } from "./lib/gemini-rotating-client.js";
import { normalizeBoardNarration } from "./speech-text.js";
import { loadRepositoryEnv } from "./lib/repository-paths.js";

const DEFAULT_MODEL = process.env.AI_PROVIDER === "azure"
  ? (process.env.AZURE_OPENAI_DEPLOYMENT || "gpt-5-mini")
  : (process.env.GEMINI_MODEL || "gemini-2.5-flash");
const COMPUTER_SCIENCE_CATALOG_PATH = path.join(
  process.cwd(),
  "docs",
  "computer-science",
  "catalog-courses-by-subcategory.json"
);
const DOCS_COMPUTER_SCIENCE_ROOT = path.join(
  process.cwd(),
  "docs",
  "computer-science"
);

let cachedComputerScienceCatalog = null;

loadRepositoryEnv();

const SCREEN_TYPES = ["hero", "learning_objectives", "lesson", "key_concepts"];

const PRACTICAL_LANGUAGES = ["c", "cpp", "c++", "python", "javascript", "typescript", "java", "sql", "bash", "shell"];

const LESSON_SUB_TEMPLATES = [
  "definition",
  "process",
  "comparison",
  "architecture",
  "hierarchy",
  "code_walkthrough",
  "timeline",
  "step_by_step_cards",
  "numbered_timeline",
  "comparison_cards_table",
  "layered_cards",
  "topic_cards_grouped_by_category",
  "nested_cards_accordion"
];

const SCREEN_POLICIES = {
  beginner: { minTotal: 13, maxTotal: 17 },
  "beginner-intermediate": { minTotal: 13, maxTotal: 17 },
  intermediate: { minTotal: 13, maxTotal: 17 },
  advanced: { minTotal: 13, maxTotal: 17 }
};

// Chapters whose raw source text is longer than this are split into two
// smaller Gemini requests instead of one large request, since large chapters
// are the ones most likely to hit MAX_TOKENS and burn quota on continuations.
// Typical chapters in this repo run ~10k-20k chars; only real outliers (2-4x
// that size) should trigger a split, so the default sits well above normal.
const CHAPTER_SPLIT_CHAR_THRESHOLD = parseInt(process.env.CHAPTER_SPLIT_CHAR_THRESHOLD, 10) || 35000;
const SPLIT_LARGE_CHAPTERS = process.env.SPLIT_LARGE_CHAPTERS !== "false";

function shouldSplitChapter(chapterData) {
  if (!SPLIT_LARGE_CHAPTERS) return false;
  return String(chapterData.raw || "").length > CHAPTER_SPLIT_CHAR_THRESHOLD;
}

function normalizeCourseLevel(value) {
  const text = String(value || "").trim().toLowerCase();
  if (!text) return "beginner";
  if (text.includes("beginner") && text.includes("intermediate")) return "beginner-intermediate";
  if (text.includes("advanced") || text.includes("advance")) return "advanced";
  if (text.includes("intermediate")) return "intermediate";
  if (text.includes("beginner")) return "beginner";
  return "beginner";
}

function getScreenPolicy(courseLevel) {
  return SCREEN_POLICIES[normalizeCourseLevel(courseLevel)] || SCREEN_POLICIES.beginner;
}

function inferCourseLevelFromPath(syllabusPath) {
  const parts = String(syllabusPath || "").toLowerCase().split(/[\\/]+/);
  if (parts.some((part) => part === "beginner-intermediate" || part === "beginner_intermediate")) {
    return "beginner-intermediate";
  }
  if (parts.includes("advanced")) return "advanced";
  if (parts.includes("intermediate")) return "intermediate";
  if (parts.includes("beginner")) return "beginner";
  return null;
}

const BOARD_SCHEMA = {
  type: "object",
  properties: {
    course_id: { type: "string" },
    course_title: { type: "string" },
    module_id: { type: "string" },
    module_title: { type: "string" },
    chapter_id: { type: "string" },
    chapter_title: { type: "string" },
    chapter_summary: { type: "string" },
    screens: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "string" },
          order: { type: "integer" },
          type: {
            type: "string",
            enum: SCREEN_TYPES
          },
          template: {
            type: "string",
            enum: SCREEN_TYPES
          },
          sub_template: {
            type: "string",
            enum: LESSON_SUB_TEMPLATES
          },
          eyebrow: { type: "string" },
          title: { type: "string" },
          subtitle: { type: "string" },
          narration: {
            type: "object",
            properties: {
              text: { type: "string" },
              durationSeconds: { type: "integer" }
            },
            required: ["text", "durationSeconds"]
          },
          keyIdea: {
            type: "object",
            properties: {
              title: { type: "string" },
              text: { type: "string" }
            },
            required: ["title", "text"]
          },
          content: {
            type: "object",
            properties: {
              html: { type: "string" },
              css: { type: "string" }
            },
            required: ["html"]
          }
        },
        required: [
          "id",
          "order",
          "type",
          "template",
          "eyebrow",
          "title",
          "subtitle",
          "narration",
          "keyIdea",
          "content"
        ]
      }
    }
  },
  required: [
    "course_id",
    "course_title",
    "module_id",
    "module_title",
    "chapter_id",
    "chapter_title",
    "chapter_summary",
    "screens"
  ]
};

const MODULE_SCHEMA = {
  type: "object",
  properties: {
    module_number: { type: "integer" },
    module_title: { type: "string" },
    chapters: {
      type: "array",
      items: {
        type: "object",
        properties: {
          chapter_number: { type: "integer" },
          chapter_title: { type: "string" },
          manifest: BOARD_SCHEMA
        },
        required: ["chapter_number", "chapter_title", "manifest"]
      }
    }
  },
  required: ["module_number", "module_title", "chapters"]
};

function parseArgs(argv) {
  const args = {};
  for (let i = 2; i < argv.length; i++) {
    const token = argv[i];
    if (!token.startsWith("--")) continue;
    const key = token.slice(2);
    const next = argv[i + 1];
    if (next && !next.startsWith("--")) {
      args[key] = next;
      i++;
    } else {
      args[key] = true;
    }
  }
  return args;
}

function slugify(value) {
  return String(value || "")
    .normalize("NFKD")
    .replace(/[^\w\s.-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .toLowerCase();
}

function normalizedKey(value) {
  return String(value || "")
    .normalize("NFKD")
    .replace(/[^\w\s.-]/g, "")
    .trim()
    .toLowerCase()
    .replace(/[\s._-]+/g, "");
}

async function loadComputerScienceCatalog() {
  if (cachedComputerScienceCatalog) {
    return cachedComputerScienceCatalog;
  }

  const raw = await fs.readFile(COMPUTER_SCIENCE_CATALOG_PATH, "utf8");
  cachedComputerScienceCatalog = JSON.parse(raw);
  return cachedComputerScienceCatalog;
}

function findCatalogCourseEntry(catalog, courseId, courseTitle) {
  const wantedId = normalizedKey(courseId);
  const wantedTitle = normalizedKey(courseTitle);

  for (const subcategory of catalog?.subcategories || []) {
    for (const course of subcategory.courses || []) {
      if (
        normalizedKey(course.id) === wantedId ||
        normalizedKey(course.title) === wantedId ||
        (wantedTitle && normalizedKey(course.title) === wantedTitle)
      ) {
        return {
          subcategoryName: subcategory.name,
          course,
        };
      }
    }
  }

  return null;
}

async function exportChapterManifestToDocs(board, sourceManifestPath) {
  const catalog = await loadComputerScienceCatalog();
  const match = findCatalogCourseEntry(catalog, board.course_id, board.course_title);
  const level = normalizeCourseLevel(board.course_level || match?.course?.level || "beginner");
  const subcategorySlug = slugify(match?.subcategoryName || "uncategorized");
  const courseSlug = slugify(board.course_id || board.course_title);
  const moduleDir = `module-${String(board.module_number).padStart(2, "0")}`;
  const chapterDir = `chapter-${String(board.chapter_number).padStart(2, "0")}`;

  const targetDir = path.join(
    DOCS_COMPUTER_SCIENCE_ROOT,
    level,
    subcategorySlug,
    courseSlug,
    moduleDir,
    chapterDir
  );

  await fs.mkdir(targetDir, { recursive: true });
  await fs.copyFile(sourceManifestPath, path.join(targetDir, "manifest.json"));

  return targetDir;
}

function extractSection(block, heading) {
  const re = new RegExp(
    `####\\s+${heading}\\s*\\n([\\s\\S]*?)(?=\\n####\\s|\\n###\\s|\\n##\\s|$)`,
    "i"
  );
  return (block.match(re)?.[1] || "").trim();
}

function extractBullets(text) {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => /^[-*]\s+/.test(line))
    .map((line) => line.replace(/^[-*]\s+/, "").trim());
}

function extractAssessment(text) {
  const match = text.match(
    /####\s+Assessment idea\s*\n([\s\S]*?)(?=\n####\s|\n###\s|\n##\s|$)/i
  );
  return (match?.[1] || "").trim();
}

function extractAiGenerationNote(text) {
  const match = text.match(
    /####\s+AI generation note\s*\n([\s\S]*?)(?=\n####\s|\n###\s|\n##\s|$)/i
  );
  return (match?.[1] || "").trim();
}

function inferPresentationMode(note) {
  const text = String(note || "").toLowerCase();

  if (
    /\b(terminal|command line|cli|shell|bash|powershell|console|terminal window|shell script|command prompt|unix|linux terminal)\b/.test(
      text
    )
  ) {
    return "terminal_demo";
  }

  if (
    /\b(live coding|live-code|coding demo|coding demonstration|type the code|type it line by line|code editor|editor view|vs code|visual studio code)\b/.test(
      text
    )
  ) {
    return "live_coding";
  }

  if (
    /\b(jupyter|colab|notebook|lab walkthrough|walkthrough|screen recording|setup process|guided lab|hands-on lab)\b/.test(
      text
    )
  ) {
    return "lab_walkthrough";
  }

  if (/\b(architecture diagram|network diagram|data flow|stack diagram|infrastructure diagram|topology)\b/.test(text)) {
    return "architecture_diagram";
  }

  if (/\b(flowchart|process flow|lifecycle|workflow|sequence|stages|pipeline|step-by-step|commit ->|build ->|test ->|deploy ->)\b/.test(text)) {
    return "process_flow";
  }

  if (
    /\b(whiteboard|whiteboard animation|animated explainer|explainer video|animated video|visual analogy|analogy)\b/.test(
      text
    )
  ) {
    return "animated_explainer";
  }

  return "text_explainer";
}

function inferPracticalMode(chapter) {
  const source = `${chapter.raw} ${chapter.aiGenerationNote}`.toLowerCase();
  if (!/\b(code|coding|program|programming|script|sql|query|compiler|terminal|command|python|javascript|typescript|java|bash|shell|algorithm)\b/.test(source)) {
    return null;
  }
  if (/\b(sql|database|postgresql|mysql|sqlite)\b/.test(source)) return "database_lab";
  if (/\b(terminal|command line|cli|bash|shell|compiler|clang|gcc)\b/.test(source)) return "terminal_lab";
  return "code_lab";
}

function noteRequestsMainDiagram(note, presentationMode) {
  if (!note) return false;
  if (
    ["terminal_demo", "live_coding", "lab_walkthrough", "text_explainer"].includes(
      presentationMode
    )
  ) {
    return false;
  }

  return /\b(main diagram|explicit diagram|essential diagram|must show diagram|diagram is essential)\b/i.test(note);
}

function buildModeBrief(presentationMode) {
  switch (presentationMode) {
    case "terminal_demo":
      return [
        "Mode: terminal_demo",
        "Use a terminal-first layout with command callouts, output blocks, and concise annotations.",
        "Do not build a large infographic or main SVG diagram unless the note explicitly demands one."
      ].join("\n");
    case "live_coding":
      return [
        "Mode: live_coding",
        "Use a code-editor-first layout with incremental reveal, annotations, and output panels.",
        "Avoid large infographic diagrams; the main visual should be code and runtime feedback."
      ].join("\n");
    case "lab_walkthrough":
      return [
        "Mode: lab_walkthrough",
        "Use a guided lab layout with steps, checkpoints, screenshots/panels, and short explanations.",
        "Avoid oversized diagrams; prefer task cards and practice steps."
      ].join("\n");
    case "architecture_diagram":
      return [
        "Mode: architecture_diagram",
        "Use layered cards or stacked panels first.",
        "Only fall back to a bounded diagram if the lesson absolutely needs one.",
        "Prefer text, cards, and concise callouts when the concept is simpler that way."
      ].join("\n");
    case "process_flow":
      return [
        "Mode: process_flow",
        "Use numbered timeline cards or step-by-step cards first.",
        "Only use a compact flow if the sequence is difficult to explain in plain text.",
        "Prefer text, cards, and step-by-step callouts whenever they communicate the lesson well."
      ].join("\n");
    case "animated_explainer":
      return [
        "Mode: animated_explainer",
        "Use motion-friendly cards, simple icons, and short visual beats.",
        "Avoid SVG, flowchart, or diagram visuals unless the note explicitly asks for one and the diagram is essential.",
        "Prefer subtle motion, staggered reveals, and color accents over large illustrated compositions."
      ].join("\n");
    default:
      return [
        "Mode: text_explainer",
        "Use text, cards, lists, and concise callouts.",
        "Prefer step-by-step cards, comparison tables, layered cards, or grouped topic cards instead of diagrams.",
        "Avoid diagrams and SVG unless they are truly necessary for comprehension."
      ].join("\n");
  }
}

function parseModuleSelector(value) {
  const text = String(value || "").trim();
  if (!text) return null;

  const exact = text.match(/(?:module\s*)?(\d+)(?:\b|$)/i);
  if (exact) return Number(exact[1]);

  return null;
}

export function extractChapter(markdown, requestedChapter) {
  const lines = String(markdown || "").split(/\r?\n/);
  const chapters = [];
  let current = null;
  let blockLines = [];

  const flushCurrent = () => {
    if (!current) return;
    const block = blockLines.join("\n").trim();
    if (block) {
      chapters.push({
        moduleNumber: current.moduleNumber,
        chapterNumber: current.chapterNumber,
        heading: current.heading,
        block: `${current.headingLine}\n${block}`
      });
    }
  };

  for (const line of lines) {
    const match = line.match(/^#{2,4}\s*Chapter\s+(\d+)\.(\d+)\s*(?:[—–\-:]\s*)?(.*)$/);
    if (match) {
      flushCurrent();
      current = {
        moduleNumber: Number(match[1] || 0),
        chapterNumber: Number(match[2] || 0),
        heading: String(match[3] || '').trim(),
        headingLine: line.trim()
      };
      blockLines = [line];
      continue;
    }

    if (current) {
      blockLines.push(line);
    }
  }
  flushCurrent();

  if (!chapters.length) {
    throw new Error("No 'Chapter x.y' sections were found in the syllabus.");
  }

  const selector = String(requestedChapter || "").trim();
  const selectorMatch = selector.match(/(\d+)\.(\d+)/);
  const selectorModule = selectorMatch ? Number(selectorMatch[1]) : null;
  const selectorChapter = selectorMatch ? Number(selectorMatch[2]) : null;
  const query = selector.toLowerCase();

  const found =
    chapters.find(
      (chapter) =>
        chapter.moduleNumber === selectorModule &&
        chapter.chapterNumber === selectorChapter
    ) ||
    chapters.find((chapter) => {
      const heading = chapter.heading.toLowerCase();
      return (
        heading === query ||
        heading.startsWith(query) ||
        heading.includes(query) ||
        query.includes(heading)
      );
    });

  if (!found) {
    throw new Error(
      `Chapter "${requestedChapter}" was not found.\nAvailable chapters:\n${chapters
        .map((x) => `- ${x.moduleNumber}.${x.chapterNumber}: ${x.heading}`)
        .join("\n")}`
    );
  }

  const aiGenerationNote = extractAiGenerationNote(found.block);
  const presentationMode = inferPresentationMode(aiGenerationNote);

  return {
    moduleNumber: found.moduleNumber,
    chapterNumber: found.chapterNumber,
    moduleTitle: `Module ${found.moduleNumber}`,
    chapterTitle: found.heading,
    chapterSummary: extractSection(found.block, "Detailed lesson content") || found.heading,
    objectives: extractSection(found.block, "Learning objectives"),
    detailedContent: extractSection(found.block, "Detailed lesson content"),
    keyConcepts: extractSection(found.block, "Key concepts"),
    aiGenerationNote,
    presentationMode,
    mainDiagramRequested: noteRequestsMainDiagram(aiGenerationNote, presentationMode),
    chapterList: [found.heading],
    raw: found.block
  };
}

export function extractModule(markdown, requestedModule) {
  const moduleNumber = Number(requestedModule);
  if (!Number.isInteger(moduleNumber) || moduleNumber < 1) {
    throw new Error(`Invalid module number: ${requestedModule}`);
  }

  const source = String(markdown || "");
  const moduleMatch = source.match(
    new RegExp(`^##\\s+Module\\s+${moduleNumber}\\s*[:—–-]?\\s*(.*?)\\s*$`, "im")
  );
  const chapterMatches = [...source.matchAll(
    new RegExp(`^#{2,4}\\s*Chapter\\s+${moduleNumber}\\.(\\d+)\\s*(?:[—–\\-:]\\s*)?(.*)$`, "gim")
  )];

  if (!chapterMatches.length) {
    throw new Error(`No chapters were found for Module ${moduleNumber}.`);
  }

  return {
    moduleNumber,
    moduleTitle: moduleMatch?.[1]?.trim() || `Module ${moduleNumber}`,
    chapters: chapterMatches
      .map((match) => Number(match[1]))
      .sort((a, b) => a - b)
      .map((chapterNumber) => extractChapter(source, `${moduleNumber}.${chapterNumber}`))
  };
}

async function loadPrompt(promptPath) {
  return fs.readFile(promptPath, "utf8");
}

function buildGeminiInput(promptTemplate, chapterData, metadata, screenPolicy) {
  const lessonTarget = Math.floor((screenPolicy.minTotal + screenPolicy.maxTotal) / 2) - 5;
  const provider = (process.env.AI_PROVIDER || "gemini").toLowerCase();
  const isAzure = provider === "azure" || /(^gpt-|^azure)/i.test(String(process.env.AZURE_OPENAI_DEPLOYMENT || ""));

  return `${promptTemplate}

RUNTIME INPUT
=============

COURSE
${JSON.stringify(metadata.course, null, 2)}

COURSE LEVEL
============
${metadata.course.level}

TARGET SCREEN RANGE
===================
Total screens: ${screenPolicy.minTotal}-${screenPolicy.maxTotal}
Lesson screens: ${screenPolicy.minTotal - 5}-${screenPolicy.maxTotal - 5}

ACTIVE PROVIDER
===============
${provider}
Generate stable, production-ready output. The provider name must not change the instructional quality, screen structure, or narration standards.

AZURE-SAFE OUTPUT RULES
=======================
${isAzure ? "This is an Azure generation run. Be conservative: prefer plain teaching language, exact schema compliance, and complete content over stylistic creativity. Do not omit required fields, do not shorten the narration below the minimums, and do not invent facts or examples. If there is not enough substance in the chapter, split the concept across more lesson screens rather than writing short narration. Expand explanations with definitions, examples, misconceptions, and practical significance to satisfy the teaching requirement." : "Use the same strict schema and instructional quality regardless of provider."}

STRICT SCREEN CONTRACT
======================
- Return valid JSON only. No markdown fences, no commentary, no prose outside the JSON object.
- Exactly 1 hero screen.
- Exactly 2 learning_objectives screens.
- Exactly 2 key_concepts screens.
- 8-12 lesson screens.
- Total screens must be 13-17.
- The first screen must be hero, the second and third must be learning_objectives, and the final two screens must be key_concepts.
- Every screen must include: id, order, type, template, eyebrow, title, subtitle, narration, keyIdea, content.
- Every narration block must be complete explanatory teaching text, not a label or summary.
- Every lesson narration must be at least 180 words; non-lesson screens must be at least 130 words.
- Each objective or hero narration must teach the concept in a full explanation, not a headline recap, and must include why it matters and a concrete example or use case.
- Keep each narration detailed enough to explain definitions, examples, why it matters, and a brief contrast or misconception check.
- The narration must not repeat the title, subtitle, or UI labels. It must add new teaching context.
- If the current text is under the film-script minimum, expand it immediately by adding a solid definition, a concrete example, why the concept matters in practice, and a misconception check. Do not just rephrase the title or subtitle.
- When a concept is rich, spread it across more lesson screens. Never compress a rich concept into a short snippet. If a lesson needs more depth, add another lesson screen rather than shrinking the narration.

CHAPTER
${JSON.stringify(metadata.chapter, null, 2)}

CHAPTER SOURCE
==============
${chapterData.raw}

AI GENERATION NOTE
==================
${chapterData.aiGenerationNote || "(none provided)"}

PRESENTATION MODE
=================
${buildModeBrief(chapterData.presentationMode)}

MAIN DIAGRAM POLICY
===================
Main diagram requested: ${chapterData.mainDiagramRequested ? "yes" : "no"}

IMPORTANT:
- The module source above is authoritative.
- The chapter source above is authoritative.
- If a requested section is absent, infer only from the supplied detailed lesson content.
- Do not import outside facts.
- Do not create citations or URLs.
- Treat the AI generation note as the presentation brief for how the screens should feel, animate, and visualize the ideas.
- Use the detailed lesson content as the factual source of truth.
- This request is chapter-scoped, so generate one learning board for the single chapter above.
- Only include a main diagram, flowchart, or SVG visual when the Main Diagram Policy says "yes".
- Prefer cards, lists, short callouts, and compact text blocks over diagrams.
- Prefer step-by-step cards, numbered timelines, comparison cards/tables, layered cards, topic cards grouped by category, and nested cards/accordion layouts before any diagram.
- Keep each screen visually rich but lightweight: one dominant layout, limited nested DOM depth, and no unnecessary decorative clutter.
- Use motion intentionally with staggered reveals, subtle fades, gentle slide-ins, or animated emphasis on the main teaching beat.
- Favor colored backgrounds, tinted cards, gradients, and accent bands; avoid plain white-only screens unless the lesson clearly benefits from it.
- Write narration like an excellent human teacher. Explain each idea thoroughly, define unfamiliar terms, give concrete examples, show why the step matters, and include a brief misconception check or contrast when helpful.
- Keep lesson narration focused enough to fit the JSON response: target 75-120 seconds and about 165-300 spoken words per lesson screen.
- Do not sound like you are merely reading a script. The narrator should actively teach, connect ideas, and make sure the student understands the concept deeply, use a warm teacher voice.
- Make every narration chunk at least 180 words for lesson screens and at least 130 words for non-lesson screens. If a draft falls under this, add explanatory material until it exceeds the minimum by a comfortable margin.
- Narration is sent directly to text-to-speech. Never place raw code, markdown, or standalone symbols in narration. Say "the print function" instead of reading a code call, say "underscore", "asterisk", "slash", "hash", "open curly brace", "close curly brace", "open square bracket", "close square bracket", "equals", or "leads to" when those ideas must be spoken. Keep code examples in the visual content, not in the narration.
- Aim for the target screen range above and spread dense content across more screens rather than overfilling a few screens.
- If the mode is terminal_demo, live_coding, or lab_walkthrough, avoid a main SVG diagram and favor the matching mode layout.
- If the mode is architecture_diagram or process_flow, use a diagram only when the lesson cannot be taught clearly without one.
- If the mode is animated_explainer, use motion-friendly cards and icons; add a diagram only if the note explicitly asks for one and the diagram is essential.
- Even when a diagram is allowed, keep it self-contained, bounded, and simple.
- Design every screen for a 16:9 canvas with a 24px safe area on all sides.
- If the lesson is too dense to fit legibly, simplify it or spread it across more lesson screens rather than shrinking the typography.
- Return JSON only according to the response schema.
- When a practical lab is requested, do not put the answer directly into the starter code. Use TODO markers and tests that verify the learner's work.
`;
}

async function callGemini({ model, prompt, maxContinuations, responseSchema = BOARD_SCHEMA }) {
  const provider = (process.env.AI_PROVIDER || "gemini").toLowerCase();
  const isAzure = provider === "azure" || /(^gpt-|^azure)/i.test(String(process.env.AZURE_OPENAI_DEPLOYMENT || ""));
  const result = await generateCompleteJson({
    prompt,
    systemPrompt: "",
    responseSchema,
    maxTokens: isAzure ? 48000 : 65536,
    temperature: isAzure ? 0.18 : 0.35,
    model,
    ...(maxContinuations != null ? { maxContinuations } : {}),
  });

  if (!result.success) {
    throw new Error(result.error);
  }

  return result.data;
}

function splitModuleChapters(chapters) {
  if (chapters.length < 2) return [chapters, []];

  const sizes = chapters.map((chapter) => String(chapter.raw || "").length);
  const total = sizes.reduce((sum, size) => sum + size, 0);
  let bestIndex = 1;
  let bestDifference = Number.POSITIVE_INFINITY;
  let leftSize = 0;

  for (let index = 1; index < chapters.length; index += 1) {
    leftSize += sizes[index - 1];
    const difference = Math.abs(total - leftSize * 2);
    if (difference < bestDifference) {
      bestDifference = difference;
      bestIndex = index;
    }
  }

  return [chapters.slice(0, bestIndex), chapters.slice(bestIndex)];
}

function buildModulePartPrompt(promptTemplate, moduleData, chapters, metadata, screenPolicy, partNumber, partCount) {
  const chapterSources = chapters.map((chapter) => [
    `CHAPTER ${chapter.moduleNumber}.${chapter.chapterNumber}: ${chapter.chapterTitle}`,
    `PRESENTATION MODE: ${chapter.presentationMode}`,
    `AI GENERATION NOTE:\n${chapter.aiGenerationNote || "(none provided)"}`,
    `SOURCE:\n${chapter.raw}`
  ].join("\n\n")).join("\n\n====================\n\n");

  return `${promptTemplate}

MODULE GENERATION RUNTIME INPUT
==============================
COURSE
${JSON.stringify(metadata.course, null, 2)}

MODULE
${JSON.stringify({
    number: moduleData.moduleNumber,
    title: moduleData.moduleTitle,
    chapterCount: moduleData.chapters.length,
    chapters: moduleData.chapters.map((chapter) => ({
      number: chapter.chapterNumber,
      title: chapter.chapterTitle
    }))
  }, null, 2)}

SCREEN CONTRACT
===============
Each chapter manifest must contain 13–17 screens: exactly one hero, two learning_objectives screens, 8–12 lesson screens, and two key_concepts screens.

MODULE SPLIT
============
This is Part ${partNumber} of ${partCount}. Generate complete manifests ONLY for the chapters listed below. Do not generate a module overview screen and do not generate manifests for chapters assigned to another part.

CHAPTER SOURCES FOR THIS PART
=============================
${chapterSources}

RESPONSE CONTRACT
=================
Return JSON only. Return an object with module_number, module_title, and chapters. Each chapters item must contain chapter_number, chapter_title, and manifest. The manifest must be a complete chapter board using the supplied chapter source as its factual authority. Preserve the exact chapter number and title. Do not merge chapters, omit chapters, add chapters, or return a flat screens array. Every screen must include complete HTML content, narration, keyIdea, and the required metadata. `;
}

async function generateModulePart({ model, promptTemplate, moduleData, chapters, metadata, screenPolicy, partNumber, partCount }) {
  if (!chapters.length) return { module_number: moduleData.moduleNumber, module_title: moduleData.moduleTitle, chapters: [] };
  const prompt = buildModulePartPrompt(promptTemplate, moduleData, chapters, metadata, screenPolicy, partNumber, partCount);
  console.log(`  ⏳ Generating part ${partNumber}/${partCount} (${chapters.map((chapter) => `Chapter ${chapter.chapterNumber}`).join(", ")})...`);
  return callGemini({ model, prompt, responseSchema: MODULE_SCHEMA });
}

function getModulePartCoverage(result, expectedChapters) {
  const expectedNumbers = new Set(expectedChapters.map((chapter) => chapter.chapterNumber));
  const entries = Array.isArray(result?.chapters) ? result.chapters : [];
  const seen = new Set();
  const accepted = [];

  for (const entry of entries) {
    const chapterNumber = Number(entry?.chapter_number);
    if (expectedNumbers.has(chapterNumber) && !seen.has(chapterNumber) && entry.manifest) {
      accepted.push(entry);
      seen.add(chapterNumber);
    }
  }

  return {
    accepted,
    missing: expectedChapters.filter((chapter) => !seen.has(chapter.chapterNumber))
  };
}

async function generateModulePartWithRecovery({ model, promptTemplate, moduleData, chapters, metadata, screenPolicy, partNumber, partCount }) {
  const maxAttempts = 3;
  let lastMissing = [];

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    const result = await generateModulePart({
      model,
      promptTemplate,
      moduleData,
      chapters,
      metadata,
      screenPolicy,
      partNumber: attempt === 1 ? partNumber : `${partNumber}.retry-${attempt}`,
      partCount
    });

    const coverage = getModulePartCoverage(result, chapters);
    if (!coverage.missing.length) {
      return { ...result, chapters: coverage.accepted };
    }

    lastMissing = coverage.missing.map((chapter) => chapter.chapterNumber);
    if (attempt < maxAttempts) {
      console.warn(
        `   ⚠️  Part ${partNumber}/${partCount} omitted Chapter ${lastMissing.join(", ")}; retrying the complete part (attempt ${attempt + 1}/${maxAttempts})...`
      );
    }
  }

  throw new Error(
    `Module part ${partNumber}/${partCount} could not return all assigned chapters after ${maxAttempts} complete-part attempts. Missing: ${lastMissing.join(", ")}`
  );
}

function validateModulePart(result, expectedChapters, screenPolicy) {
  if (!result || !Array.isArray(result.chapters)) {
    throw new Error("Module generation returned no chapters array.");
  }

  const expectedNumbers = expectedChapters.map((chapter) => chapter.chapterNumber);
  const actualNumbers = result.chapters.map((chapter) => Number(chapter.chapter_number));
  const expectedSet = new Set(expectedNumbers);
  const actualSet = new Set(actualNumbers);
  if (
    actualNumbers.length !== expectedNumbers.length
    || actualSet.size !== actualNumbers.length
    || actualNumbers.some((number) => !expectedSet.has(number))
    || actualSet.size !== expectedSet.size
  ) {
    throw new Error(`Module part returned chapters [${actualNumbers.join(", ")}] but expected [${expectedNumbers.join(", ")}].`);
  }

  return result.chapters.map((entry) => {
    const source = expectedChapters.find((chapter) => chapter.chapterNumber === Number(entry.chapter_number));
    const board = normalizeBoardNarration(entry.manifest);
    board.module_number = source.moduleNumber;
    board.chapter_number = source.chapterNumber;
    board.module_title = `Module ${source.moduleNumber}`;
    board.chapter_title = source.chapterTitle;
    board.chapter_summary = source.chapterSummary;
    board.presentation_mode = source.presentationMode;
    board.main_diagram_requested = source.mainDiagramRequested;
    board.ai_generation_note = source.aiGenerationNote;
    board.course_level = screenPolicy.courseLevel;
    return validateBoard(board, screenPolicy);
  });
}

export async function generateLearningModule({
  syllabusPath,
  module,
  outputRoot = "generated/learning-boards-html",
  promptPath = path.join(process.cwd(), "docs", "computer-science", "prompt-learning-board-html-v2.md"),
  courseId,
  courseTitle,
  courseLevel,
  model = DEFAULT_MODEL
}) {
  const markdown = await fs.readFile(syllabusPath, "utf8");
  const moduleData = extractModule(markdown, module);
  const promptTemplate = await loadPrompt(promptPath);
  const inferredCourseLevel = normalizeCourseLevel(courseLevel || inferCourseLevelFromPath(syllabusPath));
  const screenPolicy = getScreenPolicy(inferredCourseLevel);
  const inferredCourseId = courseId || slugify(path.basename(syllabusPath).replace(/\.(md|markdown)$/i, ""));
  const metadata = {
    course: {
      id: inferredCourseId,
      title: courseTitle || inferredCourseId,
      level: inferredCourseLevel
    }
  };

  const [partOneChapters, partTwoChapters] = splitModuleChapters(moduleData.chapters);
  console.log(`  📦 Module ${moduleData.moduleNumber} contains ${moduleData.chapters.length} chapters — generating in 2 parts...`);
  const parts = [];
  parts.push(await generateModulePartWithRecovery({
    model,
    promptTemplate,
    moduleData,
    chapters: partOneChapters,
    metadata,
    screenPolicy,
    partNumber: 1,
    partCount: 2
  }));
  parts.push(await generateModulePartWithRecovery({
    model,
    promptTemplate,
    moduleData,
    chapters: partTwoChapters,
    metadata,
    screenPolicy,
    partNumber: 2,
    partCount: 2
  }));

  const validatedBoards = [
    ...validateModulePart(parts[0], partOneChapters, { ...screenPolicy, courseLevel: inferredCourseLevel }),
    ...validateModulePart(parts[1], partTwoChapters, { ...screenPolicy, courseLevel: inferredCourseLevel })
  ].sort((a, b) => a.chapter_number - b.chapter_number);

  const results = [];
  for (const board of validatedBoards) {
    board.course_id = inferredCourseId;
    board.course_title = courseTitle || inferredCourseId;
    const target = await writeBoard(board, outputRoot);
    const generatedManifestPath = path.join(target, "manifest.json");
    const docsManifestTarget = await exportChapterManifestToDocs(board, generatedManifestPath);
    await updateCourseManifest(board, path.resolve(outputRoot));
    console.log(`   📘 Exported Chapter ${board.module_number}.${board.chapter_number} manifest to ${path.relative(process.cwd(), docsManifestTarget)}`);
    results.push({ board, target });
  }

  return { module: moduleData, chapters: results };
}

// Generates a large chapter as two smaller requests (hero + objectives + half
// the lessons, then the remaining lessons + key concepts) and merges them into
// one board. Each half is far less likely to hit MAX_TOKENS, so this trades a
// predictable 2-request cost for the unpredictable up-to-6-request cost of
// truncation continuations.
async function generateBoardInParts({ model, promptTemplate, chapterData, metadata, screenPolicy }) {
  const lessonTarget = Math.floor((screenPolicy.minTotal + screenPolicy.maxTotal) / 2) - 5;
  const lessonsPart1 = Math.max(2, Math.ceil(lessonTarget / 2));
  const lessonsPart2 = Math.max(2, lessonTarget - lessonsPart1);
  const basePrompt = buildGeminiInput(promptTemplate, chapterData, metadata, screenPolicy);

  console.log(`  📦 Chapter source is large (${chapterData.raw.length} chars) — splitting generation into 2 parts...`);

  const part1Prompt = `${basePrompt}

SPLIT GENERATION — PART 1 OF 2
===============================
This chapter's source content is large, so it is being generated in two smaller requests to avoid response truncation.
Generate ONLY:
- exactly 1 hero screen
- exactly 2 learning_objectives screens
- ${lessonsPart1} lesson screens covering the FIRST HALF of the chapter's teaching points
Do NOT generate a key_concepts screen in this part. Do NOT generate more than ${lessonsPart1} lesson screens.
The remaining lesson screens and the two key_concepts screens will be generated separately in Part 2, so leave that material for later.`;

  console.log(`  ⏳ Generating part 1/2 (hero, objectives, ${lessonsPart1} lessons)...`);
  const part1 = await callGemini({ model, prompt: part1Prompt });

  const part1LessonTitles = (part1.screens || [])
    .filter((screen) => screen.type === "lesson")
    .map((screen) => screen.title || screen.eyebrow || "Untitled lesson");

  const part2Prompt = `${basePrompt}

SPLIT GENERATION — PART 2 OF 2
===============================
This chapter's source content is large, so it is being generated in two smaller requests to avoid response truncation.
Part 1 already generated the hero screen, the two learning objectives screens, and these lesson screens (do NOT repeat these topics):
${part1LessonTitles.map((title, i) => `  ${i + 1}. ${title}`).join("\n") || "  (none)"}

Generate ONLY:
- ${lessonsPart2} lesson screens continuing naturally from Part 1, covering the SECOND HALF of the chapter's teaching points
- exactly 2 key_concepts screens as the final screens
Do NOT generate a hero screen. Do NOT generate any learning_objectives screens. Do NOT repeat any lesson topics already covered in Part 1.`;

  console.log(`  ⏳ Generating part 2/2 (${lessonsPart2} lessons, key concepts)...`);
  const part2 = await callGemini({ model, prompt: part2Prompt });

  const part1Screens = part1.screens || [];
  const part2Screens = (part2.screens || []).map((screen, i) => ({
    ...screen,
    order: part1Screens.length + i + 1
  }));

  return {
    ...part1,
    screens: [...part1Screens, ...part2Screens]
  };
}


function buildNarrationExpansion(screen) {
  const title = String(screen?.title || screen?.eyebrow || "this concept").trim();
  const keyIdea = String(screen?.keyIdea?.text || screen?.keyIdea?.title || "the main idea").trim();
  const subtitle = String(screen?.subtitle || "the practical pattern").trim();
  const conceptSummary = keyIdea
    ? `${title} means ${keyIdea.toLowerCase()}.`
    : `${title} is a core idea in this lesson.`;

  const examples = screen?.type === "lesson"
    ? "A concrete example makes the pattern visible, and a brief contrast helps prevent a common misconception."
    : "A simple real-world example is helpful here, because students learn best when they can connect the idea to a familiar situation.";

  const motivation = screen?.type === "lesson"
    ? "This matters because learners need the underlying reasoning before they can apply the idea confidently or notice where it breaks down."
    : "This matters because it gives the learner a clear mental model and helps them connect the concept to later examples and problems.";

  return `${conceptSummary} ${subtitle ? `In practical terms, ${subtitle.toLowerCase()}.` : "In practical terms, the pattern is easy to recognize once you see where it appears."} ${examples} ${motivation} The main takeaway is that the concept should be understood as a meaningful pattern, not just a label on the screen.`;
}

function ensureMinimumNarrationLength(screen, minimumWords) {
  const narration = String(screen?.narration?.text || "").trim();
  if (!narration) return false;

  const currentWords = narration.split(/\s+/).filter(Boolean).length;
  if (currentWords >= minimumWords) return false;

  const expansion = buildNarrationExpansion(screen);
  const merged = `${narration}${narration.endsWith(".") || narration.endsWith("!") || narration.endsWith("?") ? " " : " "}${expansion}`.replace(/\s+/g, " ").trim();
  screen.narration = { ...(screen.narration || {}), text: merged };
  return true;
}

function validateBoard(board, screenPolicy) {
  if (!board || !Array.isArray(board.screens)) {
    throw new Error("Generated board has no screens array.");
  }

  if (board.screens.length < screenPolicy.minTotal || board.screens.length > screenPolicy.maxTotal) {
      throw new Error(`Expected ${screenPolicy.minTotal}–${screenPolicy.maxTotal} screens but Gemini generated ${board.screens.length}.`);
  }

  const counts = { hero: 0, learning_objectives: 0, lesson: 0, key_concepts: 0 };

  for (const screen of board.screens) {
    if (!SCREEN_TYPES.includes(screen.type)) {
      throw new Error(`Unknown screen type: ${screen.type}`);
    }
    counts[screen.type]++;
  }

  if (counts.hero !== 1) {
    throw new Error("Board must contain exactly one hero screen.");
  }

  if (counts.learning_objectives !== 2) {
    throw new Error("Board must contain exactly two learning objectives screens.");
  }

  const minLesson = 8;
  const maxLesson = screenPolicy.maxTotal - 5;

  if (counts.lesson < minLesson || counts.lesson > maxLesson) {
    throw new Error(`Board must contain ${minLesson}–${maxLesson} lesson screens.`);
  }

  if (counts.key_concepts !== 2) {
    throw new Error("Board must contain exactly two key concepts screens.");
  }

  board.screens.sort((a, b) => a.order - b.order);

  board.screens.forEach((screen, index) => {
    screen.order = index + 1;
    screen.id = `screen-${String(index + 1).padStart(2, "0")}`;
  });

  const lastIndex = board.screens.length - 1;

  if (board.screens[0].type !== "hero") {
    throw new Error("The first screen must be the hero screen.");
  }

  if (board.screens[1].type !== "learning_objectives" || board.screens[2].type !== "learning_objectives") {
    throw new Error("The second and third screens must be learning objectives screens.");
  }

  for (let i = 3; i <= lastIndex - 2; i += 1) {
    if (board.screens[i].type !== "lesson") {
      throw new Error(`Screen ${i + 1} must be a lesson screen.`);
    }
  }

  if (board.screens[lastIndex - 1].type !== "key_concepts" || board.screens[lastIndex].type !== "key_concepts") {
    throw new Error("The final two screens must be key concepts screens.");
  }

  for (const screen of board.screens) {
    if (!screen.title || !screen.subtitle || !screen.eyebrow) {
      throw new Error(`Screen ${screen.id} is missing title, subtitle, or eyebrow.`);
    }

    if (!screen.narration?.text || !Number.isFinite(screen.narration.durationSeconds)) {
      throw new Error(`Screen ${screen.id} is missing teacher narration.`);
    }

    if (!screen.keyIdea?.title || !screen.keyIdea?.text) {
      throw new Error(`Screen ${screen.id} is missing keyIdea title/text.`);
    }

    if (typeof screen.content?.html !== "string" || !screen.content.html.trim()) {
      throw new Error(`Screen ${screen.id} must have a non-empty content.html string.`);
    }

    const html = screen.content.html;
    if (/<\s*(button|a\b|input\b|select\b|textarea\b|form\b)/i.test(html) || /\bonclick\s*=/i.test(html)) {
      throw new Error(`Screen ${screen.id} contains interactive markup. Learning boards must be static narrated presentations.`);
    }

    const minimumNarrationWords = screen.type === "lesson" ? 180 : 130;
    ensureMinimumNarrationLength(screen, minimumNarrationWords);

    const narrationWords = String(screen.narration.text).trim().split(/\s+/).filter(Boolean).length;
    if (narrationWords < minimumNarrationWords) {
      throw new Error(`Screen ${screen.id} narration is too brief (${narrationWords} words; minimum ${minimumNarrationWords}). Expand the teaching explanation with definitions, examples, misconceptions, and why the concept matters, without repeating the UI.`);
    }

    if (screen.type === "lesson") {
      const lessonDuration = Number(screen.narration?.durationSeconds || 0);
      if (lessonDuration > 0 && lessonDuration < 60) {
        throw new Error(`Screen ${screen.id} should run for at least 60 seconds so the narrator can teach it properly.`);
      }
    }
  }

  return board;
}

async function updateCourseManifest(board, outputRoot) {
  const courseDir = slugify(board.course_id || board.course_title);
  const courseId = board.course_id;
  const courseTitle = board.course_title;
  const moduleNumber = board.module_number;
  const chapterNumber = board.chapter_number;
  const moduleTitle = board.module_title || "";
  const chapterTitle = board.chapter_title || "";

  const chapterEntryData = {
    module: moduleNumber,
    chapter: chapterNumber,
    title: chapterTitle,
    manifest: `module-${String(moduleNumber).padStart(2, "0")}/chapter-${String(chapterNumber).padStart(2, "0")}/manifest.json`
  };

  for (const root of [outputRoot]) {
    const manifestPath = path.join(root, courseDir, "course-manifest.json");
    let courseManifest = {
      course: courseTitle,
      courseId,
      generatedAt: new Date().toISOString(),
      modules: []
    };

    try {
      const existing = await fs.readFile(manifestPath, "utf8");
      const parsed = JSON.parse(existing);
      if (parsed && typeof parsed === "object") {
        courseManifest.course = parsed.course || courseManifest.course;
        courseManifest.courseId = parsed.courseId || courseManifest.courseId;
        courseManifest.modules = Array.isArray(parsed.modules) ? parsed.modules : [];
      }
    } catch {
      // File missing or invalid; start fresh.
    }

    let moduleEntry = courseManifest.modules.find((m) => Number(m.module) === moduleNumber);
    if (!moduleEntry) {
      moduleEntry = { module: moduleNumber, title: moduleTitle, chapters: [] };
      courseManifest.modules.push(moduleEntry);
      courseManifest.modules.sort((a, b) => a.module - b.module);
    }

    moduleEntry.title = moduleTitle;
    moduleEntry.chapters = Array.isArray(moduleEntry.chapters) ? moduleEntry.chapters : [];
    let chapterEntry = moduleEntry.chapters.find((c) => Number(c.chapter) === chapterNumber);
    if (!chapterEntry) {
      chapterEntry = { chapter: chapterNumber };
      moduleEntry.chapters.push(chapterEntry);
      moduleEntry.chapters.sort((a, b) => a.chapter - b.chapter);
    }
    chapterEntry.title = chapterTitle;
    chapterEntry.manifest = chapterEntryData.manifest;
    chapterEntry.generatedAt = new Date().toISOString();

    courseManifest.generatedAt = new Date().toISOString();
    await fs.mkdir(path.join(root, courseDir), { recursive: true });
    await fs.writeFile(manifestPath, JSON.stringify(courseManifest, null, 2), "utf8");
  }
}

async function writeBoard(board, outputRoot) {
  const courseDir = slugify(board.course_id || board.course_title);
  const moduleDir = `module-${String(board.module_number).padStart(2, "0")}`;
  const chapterDir = `chapter-${String(board.chapter_number).padStart(2, "0")}`;

  const target = path.join(outputRoot, courseDir, moduleDir, chapterDir);
  await fs.mkdir(target, { recursive: true });

  await fs.writeFile(
    path.join(target, "board.json"),
    JSON.stringify(board, null, 2),
    "utf8"
  );

  for (const screen of board.screens) {
    const screenDir = path.join(target, screen.id);
    await fs.mkdir(screenDir, { recursive: true });
    await fs.writeFile(
      path.join(screenDir, "content.html"),
      screen.content.html,
      "utf8"
    );
  }

  const manifest = {
    schemaVersion: 1,
    course: board.course_title,
    courseId: board.course_id,
    courseLevel: board.course_level || null,
    module: board.module_number,
    chapter: board.chapter_number,
    unitTitle: board.module_title || board.chapter_title,
    moduleTitle: board.module_title || board.chapter_title,
    chapterTitle: board.chapter_title || board.module_title,
    presentationMode: board.presentation_mode || "text_explainer",
    mainDiagramRequested: Boolean(board.main_diagram_requested),
    aiGenerationNote: board.ai_generation_note || "",
    practical: board.practical || null,
    screens: board.screens.map((screen) => ({
      screen: screen.order,
      title: screen.title,
      type: screen.type,
      template: screen.template,
      sub_template: screen.sub_template || undefined,
      eyebrow: screen.eyebrow,
      durationSeconds: screen.narration?.durationSeconds || 20,
      narratorSegment: screen.narration?.text || "",
      narration: screen.narration || { text: "", durationSeconds: 20 },
      keyIdea: screen.keyIdea,
      content: {
        html: screen.content.html,
        css: screen.content.css || ""
      },
    })),
    fullNarratorScript: board.screens.map((screen) => screen.narration?.text || "").join("\n\n"),
    generatedAt: new Date().toISOString()
  };

  await fs.writeFile(path.join(target, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");

  return target;
}

export async function generateLearningBoard({
  syllabusPath,
  module,
  chapter,
  outputRoot = "generated/learning-boards-html",
  promptPath = path.join(
    process.cwd(),
    "docs",
    "computer-science",
    "prompt-learning-board-html-v2.md"
  ),
  courseId,
  courseTitle,
  courseLevel,
  model = DEFAULT_MODEL
}) {
  const markdown = await fs.readFile(syllabusPath, "utf8");
  const requestedChapter =
    chapter != null && module != null ? `${module}.${chapter}` : chapter || module;
  const chapterData = extractChapter(markdown, requestedChapter);
  const promptTemplate = await loadPrompt(promptPath);
  const inferredCourseLevel = normalizeCourseLevel(
    courseLevel || inferCourseLevelFromPath(syllabusPath)
  );
  const screenPolicy = getScreenPolicy(inferredCourseLevel);

  const inferredCourseId =
    courseId ||
    slugify(
      path.basename(syllabusPath).replace(/\.(md|markdown)$/i, "")
    );

  const metadata = {
    course: {
      id: inferredCourseId,
      title: courseTitle || inferredCourseId,
      level: inferredCourseLevel
    },
    chapter: {
      id: slugify(chapterData.chapterTitle),
      title: chapterData.chapterTitle
    }
  };

  const prompt = buildGeminiInput(promptTemplate, chapterData, metadata, screenPolicy);

  // Source length only predicts truncation for genuine outliers (see
  // shouldSplitChapter). Most truncation is driven by how verbose the
  // generated HTML/CSS turns out to be, which can't be known up front — so
  // for normal-sized chapters we make one cheap attempt (capped continuations)
  // and only fall back to the more reliable 2-part split if that attempt
  // can't produce complete JSON, instead of burning all 5 continuations.
  let board;
  if (shouldSplitChapter(chapterData)) {
    board = await generateBoardInParts({ model, promptTemplate, chapterData, metadata, screenPolicy });
  } else {
    try {
      board = await callGemini({ model, prompt, maxContinuations: 1 });
    } catch (error) {
      if (String(error.message || "").includes("Could not parse valid JSON")) {
        console.log("   ⚠️  Single-request generation produced a large/truncated response — retrying as a 2-part split...");
        board = await generateBoardInParts({ model, promptTemplate, chapterData, metadata, screenPolicy });
      } else {
        throw error;
      }
    }
  }

  try {
    normalizeBoardNarration(board);
    board = validateBoard(board, screenPolicy);
  } catch (error) {
    const repairPrompt = `${prompt}

TARGETED REPAIR
===============
The previous response was valid JSON but failed the board contract:
${error.message}

This is a repair pass. You must fix the exact violations without changing the chapter content or source truth.

Azure-safe repair rules:
- Return valid JSON only. No markdown fences, no explanation, no notes outside the JSON.
- Keep the structure exact: 1 hero, 2 learning_objectives, 8-12 lesson screens, 2 key_concepts.
- Total screens must be 13-17.
- The first screen must be hero, screens 2 and 3 must be learning_objectives, final two screens must be key_concepts.
- Do not generate any additional screen types such as assessment or summary.
- Do not use buttons, links, inputs, forms, click instructions, or any interactive markup in content.html.
- Every narration text must be a full teaching explanation, not a label or UI copy.
- Keep non-lesson narrations at least 130 words and lesson narrations at least 180 words.
- Explain definitions, examples, why the concept matters, and a brief misconception check or contrast.
- If a lesson needs more depth, add another lesson screen rather than compressing the idea into a short narration.
- Use the repair pass to expand narration by adding a clear definition, concrete example, practical significance, and one learner-facing takeaway or misconception check, not by merely repeating the visible title.
- Only include a main diagram, flowchart, or SVG visual when the Main Diagram Policy says "yes".
- If the mode is terminal_demo, live_coding, or lab_walkthrough, avoid a main SVG diagram and favor the matching mode layout.
- If the mode is architecture_diagram or process_flow, use a bounded diagram only if needed.
- If the mode is animated_explainer, use motion-friendly cards and icons and only add a diagram if explicitly requested.
- Keep each screen visually rich but lightweight. Favor readable body text, 2–4 supporting cards, and complete explanatory context over empty space or decorative padding.
- Keep all content inside the visible canvas with a 24px safe margin.
- Design every screen for a 16:9 canvas and avoid shrinking text below legible size; if content is too dense, simplify it or distribute it across more lesson screens.
- Preserve the source-grounded content. Return JSON only.`;
    board = normalizeBoardNarration(await callGemini({ model, prompt: repairPrompt }));
    board = validateBoard(board, screenPolicy);
  }
  board.module_number = chapterData.moduleNumber;
  board.chapter_number = chapterData.chapterNumber;
  board.module_title = chapterData.moduleTitle;
  board.chapter_title = chapterData.chapterTitle;
  board.chapter_summary = chapterData.chapterSummary;
  board.presentation_mode = chapterData.presentationMode;
  board.main_diagram_requested = chapterData.mainDiagramRequested;
  board.ai_generation_note = chapterData.aiGenerationNote;
  board.course_level = inferredCourseLevel;
  board.course_level = inferredCourseLevel;

  const target = await writeBoard(board, outputRoot);
  const generatedManifestPath = path.join(target, "manifest.json");
  const docsManifestTarget = await exportChapterManifestToDocs(board, generatedManifestPath);
  console.log(`   📘 Exported chapter manifest to ${path.relative(process.cwd(), docsManifestTarget)}`);

  // Keep the canonical generated course manifest up to date.
  const generatedCourseRoot = path.resolve(outputRoot);
  await updateCourseManifest(board, generatedCourseRoot);
  console.log(`   📋 Updated course manifest for ${board.course_id}`);

  return {
    board,
    target,
    chapter: chapterData.chapterTitle
  };
}

async function main() {
  const args = parseArgs(process.argv);

  if (!args.syllabus || (!args.module && !args.chapter)) {
    console.error(`
Usage:
  node generate-learning-board-html.js \\
    --syllabus docs/computer-science/ai-for-everyone.md \\
    --module 3

Optional:
  --output generated/learning-boards-html
  --prompt docs/computer-science/prompt-learning-board-html-v2.md
  --course-id ai-for-everyone
  --course-title "AI For Everyone"
  --model gemini-2.5-flash
`);
    process.exit(1);
  }

  try {
    const generationOptions = {
      syllabusPath: path.resolve(args.syllabus),
      module: args.module,
      chapter: args.chapter,
      outputRoot: path.resolve(args.output || "generated/learning-boards-html"),
      promptPath: path.resolve(args.prompt || "docs/computer-science/prompt-learning-board-html-v2.md"),
      courseId: args["course-id"],
      courseTitle: args["course-title"],
      model: args.model || process.env.GEMINI_MODEL || DEFAULT_MODEL
    };
    const result = args.module != null && args.chapter == null
      ? await generateLearningModule(generationOptions)
      : await generateLearningBoard(generationOptions);

    console.log(`\n✓ Learning board generated`);
    if (result.chapters) {
      console.log(`  Module : ${result.module.moduleNumber}`);
      console.log(`  Chapters: ${result.chapters.length}`);
      console.log(`  Screens: ${result.chapters.reduce((total, item) => total + item.board.screens.length, 0)}`);
    } else {
      console.log(`  Chapter: ${result.chapter}`);
      console.log(`  Screens: ${result.board.screens.length}`);
      console.log(`  Output : ${result.target}`);
    }
    console.log();
  } catch (error) {
    console.error(`\n✗ Generation failed\n${error.stack || error.message}\n`);
    process.exit(1);
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main();
}
