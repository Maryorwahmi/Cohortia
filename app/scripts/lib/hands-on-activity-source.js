import fs from "node:fs/promises";
import path from "node:path";

export const PRACTICAL_CATEGORIES = [
  "Cloud Console Lab",
  "Scenario & Design Exercise",
  "Terminal Coding Lab",
  "Research & Analysis",
];

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\s*\r?\n([\s\S]*?)\r?\n---(?:\s*\r?\n|$)/);
  if (!match) return {};

  return Object.fromEntries(
    match[1]
      .split(/\r?\n/)
      .map((line) => line.match(/^([A-Za-z0-9_-]+):\s*(.*?)\s*$/))
      .filter(Boolean)
      .map(([, key, value]) => [key.toLowerCase(), value.replace(/^['"]|['"]$/g, "").trim()])
  );
}

function stripMarkdown(value) {
  return String(value || "")
    .replace(/^\s*[-+*]\s+/, "")
    .replace(/^\s*\d+[.)]\s+/, "")
    .replace(/\*\*|__|`/g, "")
    .trim();
}

function linesBetween(lines, start, end) {
  return lines.slice(start, end).join("\n").trim();
}

function extractSection(block, heading) {
  const lines = block.split(/\r?\n/);
  const headingPattern = new RegExp(`^\\s*#{2,4}\\s+${heading}\\s*$`, "i");
  const start = lines.findIndex((line) => headingPattern.test(line));
  if (start < 0) return "";

  let end = lines.length;
  for (let index = start + 1; index < lines.length; index += 1) {
    if (/^\s*#{2,4}\s+/.test(lines[index])) {
      end = index;
      break;
    }
  }
  return linesBetween(lines, start + 1, end);
}

function extractChapterBlocks(markdown) {
  const lines = markdown.split(/\r?\n/);
  const chapters = [];
  const headingPattern = /^\s*###\s+Chapter\s+(\d+)\.(\d+)\s*[—–:-]?\s*(.*?)\s*$/i;

  for (let index = 0; index < lines.length; index += 1) {
    const match = lines[index].match(headingPattern);
    if (!match) continue;
    chapters.push({
      module: Number(match[1]),
      chapter: Number(match[2]),
      title: match[3].trim(),
      start: index,
    });
  }

  return chapters.map((chapter, index) => ({
    ...chapter,
    raw: linesBetween(lines, chapter.start, chapters[index + 1]?.start ?? lines.length),
  }));
}

function extractActivityTitle(activityText, fallback) {
  const titleLine = activityText
    .split(/\r?\n/)
    .map(stripMarkdown)
    .find((line) => line && line.length < 240 && !/^(instructions|task|steps|activity):?$/i.test(line));
  return (titleLine || fallback)
    .replace(/^activity:\s*/i, "")
    .replace(/:$/, "")
    .trim();
}

function extractObjectives(chapterRaw) {
  const section = extractSection(chapterRaw, "Learning objectives");
  return section
    .split(/\r?\n/)
    .map(stripMarkdown)
    .filter(Boolean);
}

function extractConcepts(chapterRaw) {
  const section = extractSection(chapterRaw, "Key concepts");
  return section
    .split(/\r?\n/)
    .map(stripMarkdown)
    .filter(Boolean)
    .map((line) => line.replace(/^([^:]+):\s*.*/, "$1").trim());
}

export function classifyActivity(activityText, chapterRaw) {
  const activity = activityText.toLowerCase();
  const text = `${activityText}\n${chapterRaw}`.toLowerCase();
  const signals = [];

  if (/\b(aws|azure|gcp|cloud console|bucket|iam|terraform|kubectl)\b/.test(activity)) {
    signals.push("cloud");
    return { category: "Cloud Console Lab", confidence: 0.9, signals };
  }
  if (/\b(c|python|javascript|typescript|java|program|function|compile|sql|query|html|css|starter code|implement|write code|build)\b/.test(activity)) {
    signals.push("code");
    return { category: "Terminal Coding Lab", confidence: 0.88, signals };
  }
  if (/\b(discuss|ethical|ethics|privacy|bias|scenario|trade-?off|propose)\b/.test(activity)) {
    signals.push("scenario");
    return { category: "Scenario & Design Exercise", confidence: 0.82, signals };
  }
  if (/\b(challenge|convert|conversion|calculate)\b/.test(activity)) {
    signals.push("challenge");
    return { category: "Scenario & Design Exercise", confidence: 0.72, signals };
  }
  if (/\b(research|investigate|compare|analy[sz]e|collect data)\b/.test(activity) || /\b(research|investigate|compare|analy[sz]e|collect data)\b/.test(text)) {
    signals.push("analysis");
    return { category: "Research & Analysis", confidence: 0.78, signals };
  }
  signals.push("defaulted-to-analysis");
  return { category: "Research & Analysis", confidence: 0.45, signals };
}

function parseCourseRecord(filePath, markdown, root) {
  const frontmatter = parseFrontmatter(markdown);
  const courseId = frontmatter.course_id || slugify(path.basename(filePath, path.extname(filePath)));
  const relativePath = path.relative(root, filePath).split(path.sep).join("/");
  const level = frontmatter.level || relativePath.split("/")[0] || "unknown";
  const courseTitle = frontmatter.course_title || frontmatter.title || courseId;

  return extractChapterBlocks(markdown)
    .map((chapter) => {
      const handsOn = extractSection(chapter.raw, "Hands-on activity");
      if (!handsOn) return null;

      const assessment = extractSection(chapter.raw, "Assessment idea");
      const aiGenerationNote = extractSection(chapter.raw, "AI generation note");
      const classification = classifyActivity(handsOn, chapter.raw);
      const title = extractActivityTitle(handsOn, `${chapter.title} practical`);

      return {
        id: `activity-${courseId}-m${chapter.module}-c${chapter.chapter}`,
        courseId,
        courseTitle,
        level: level.toLowerCase(),
        module: chapter.module,
        chapter: chapter.chapter,
        chapterTitle: chapter.title,
        title,
        category: classification.category,
        classification,
        objectives: extractObjectives(chapter.raw),
        concepts: extractConcepts(chapter.raw),
        instructions: handsOn,
        assessmentIdea: assessment,
        aiGenerationNote,
        source: {
          path: relativePath,
          sourceKey: `${courseId}/${chapter.module}/${chapter.chapter}`,
        },
      };
    })
    .filter(Boolean);
}

export async function findMarkdownFiles(root) {
  const entries = await fs.readdir(root, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const entryPath = path.join(root, entry.name);
    if (entry.isDirectory()) files.push(...await findMarkdownFiles(entryPath));
    else if (entry.isFile() && /\.md$/i.test(entry.name)) files.push(entryPath);
  }
  return files;
}

export async function collectNormalizedActivities({ root, courseId } = {}) {
  const resolvedRoot = path.resolve(root);
  const files = await findMarkdownFiles(resolvedRoot);
  const records = [];

  for (const filePath of files) {
    const markdown = await fs.readFile(filePath, "utf8");
    const fileRecords = parseCourseRecord(filePath, markdown, resolvedRoot);
    records.push(...fileRecords.filter((record) => !courseId || record.courseId === courseId));
  }

  const unique = new Map();
  for (const record of records) {
    const key = `${record.courseId}:${record.module}:${record.chapter}`;
    if (!unique.has(key)) unique.set(key, record);
  }

  return [...unique.values()].sort(
    (left, right) => left.courseId.localeCompare(right.courseId)
      || left.module - right.module
      || left.chapter - right.chapter
  );
}
