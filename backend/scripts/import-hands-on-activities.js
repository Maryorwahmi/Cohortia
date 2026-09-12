#!/usr/bin/env node

import 'dotenv/config';
import { readdir, readFile } from 'node:fs/promises';
import { basename, extname, join, relative, resolve, sep } from 'node:path';
import { createClient } from '@libsql/client';
import { practicalIdFor, sourceHashFor, sourceKeyFor } from '../src/lib/practicalIdentity.js';

const databaseUrl = process.env.DATABASE_URL || 'file:./cohortia.db';
const client = createClient({ url: databaseUrl });

const categories = [
  'Cloud Console Lab',
  'Scenario & Design Exercise',
  'Terminal Coding Lab',
  'Research & Analysis',
];

const categoryLookup = new Map(categories.map((category) => [category.toLowerCase(), category]));
const modeByCategory = new Map([
  ['Cloud Console Lab', 'non_code_activity'],
  ['Scenario & Design Exercise', 'non_code_activity'],
  ['Terminal Coding Lab', 'terminal_lab'],
  ['Research & Analysis', 'non_code_activity'],
]);

function optionValue(name, fallback = null) {
  const index = process.argv.indexOf(name);
  if (index < 0) return fallback;
  return process.argv[index + 1] || fallback;
}

const sourceRoot = resolve(process.cwd(), optionValue('--root', "../../hand's-on activity"));
const courseFilter = optionValue('--course');
const dryRun = process.argv.includes('--dry-run');

function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\s*\r?\n([\s\S]*?)\r?\n---(?:\s*\r?\n|$)/);
  if (!match) return {};

  const frontmatter = {};
  for (const line of match[1].split(/\r?\n/)) {
    const field = line.match(/^([A-Za-z0-9_-]+):\s*(.*?)\s*$/);
    if (!field) continue;
    frontmatter[field[1].toLowerCase()] = field[2].replace(/^['"]|['"]$/g, '').trim();
  }
  return frontmatter;
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function humanizeCourseId(courseId) {
  return courseId
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function normalizeCategoryLine(line) {
  let value = line.trim();
  value = value.replace(/^[-+*]\s*/, '');
  value = value.replace(/^[*_]+|[*_]+$/g, '');
  value = value.replace(/`/g, '').replace(/^category\s*:\s*/i, '').trim();
  return categoryLookup.get(value.toLowerCase()) || null;
}

function stripMarkdown(line) {
  return line
    .trim()
    .replace(/^#{1,6}\s+/, '')
    .replace(/^[-+*]\s+/, '')
    .replace(/^\*\*|\*\*$/g, '')
    .replace(/^__|__$/g, '')
    .trim();
}

function isFence(line) {
  return /^\s*(```|~~~)/.test(line);
}

function parseChapterHeading(line) {
  const match = line.match(/^\s*#{2,4}\s+Chapter\s+(\d+)\.(\d+)\s*(?:[—–:-]\s*)?(.*?)\s*$/i);
  if (!match) return null;
  return {
    module: Number.parseInt(match[1], 10),
    chapter: Number.parseInt(match[2], 10),
    title: match[3].trim(),
  };
}

function isHeading(line) {
  return /^\s*#{1,4}\s+/.test(line);
}

function locateCategory(lines) {
  const candidates = [];
  for (let index = 0; index < Math.min(lines.length, 8); index += 1) {
    if (!lines[index].trim()) continue;
    candidates.push({ index, line: lines[index] });
    const category = normalizeCategoryLine(lines[index]);
    if (category) return { category, index, rawLine: lines[index].trim() };
  }
  return {
    category: null,
    index: candidates[0]?.index ?? 0,
    rawLine: candidates[0]?.line.trim() || '',
  };
}

function deriveActivityTitle(lines, moduleNumber, chapterNumber, category) {
  const fallback = `${category || 'Hands-on activity'} - Chapter ${moduleNumber}.${chapterNumber}`;
  const ignored = new Set(['instructions', 'task', 'steps', 'objectives', 'activity']);

  for (const line of lines) {
    const title = stripMarkdown(line);
    if (!title || title.length > 240 || /^```/.test(title)) continue;
    if (/^\d+[.)]\s+/.test(title)) continue;
    if (ignored.has(title.replace(/:$/, '').toLowerCase())) continue;
    return title.replace(/:$/, '').trim();
  }

  return fallback;
}

function parseActivities(markdown) {
  const lines = markdown.split(/\r?\n/);
  const chapters = [];
  let fenced = false;

  for (let index = 0; index < lines.length; index += 1) {
    if (isFence(lines[index])) {
      fenced = !fenced;
      continue;
    }
    if (fenced) continue;
    const chapter = parseChapterHeading(lines[index]);
    if (chapter) chapters.push({ ...chapter, line: index });
  }

  const activities = [];
  for (let chapterIndex = 0; chapterIndex < chapters.length; chapterIndex += 1) {
    const chapter = chapters[chapterIndex];
    const chapterEnd = chapters[chapterIndex + 1]?.line ?? lines.length;
    let activityLine = -1;
    fenced = false;

    for (let index = chapter.line + 1; index < chapterEnd; index += 1) {
      if (isFence(lines[index])) {
        fenced = !fenced;
        continue;
      }
      if (!fenced && /^\s*#{2,4}\s+Hands-on activity\s*$/i.test(lines[index])) {
        activityLine = index;
        break;
      }
    }

    if (activityLine < 0) continue;

    let activityEnd = chapterEnd;
    fenced = false;
    for (let index = activityLine + 1; index < chapterEnd; index += 1) {
      if (isFence(lines[index])) {
        fenced = !fenced;
        continue;
      }
      if (!fenced && isHeading(lines[index])) {
        activityEnd = index;
        break;
      }
    }

    const sectionLines = lines.slice(activityLine + 1, activityEnd);
    const rawContent = sectionLines.join('\n').trim();
    if (!rawContent) continue;

    const categoryData = locateCategory(sectionLines);
    const instructionLines = sectionLines.slice(categoryData.category ? categoryData.index + 1 : 0);
    const instructions = instructionLines.join('\n').trim();
    const title = deriveActivityTitle(instructionLines, chapter.module, chapter.chapter, categoryData.category);

    activities.push({
      module: chapter.module,
      chapter: chapter.chapter,
      chapterTitle: chapter.title,
      category: categoryData.category,
      categoryLine: categoryData.rawLine,
      title,
      instructions,
      sourceContent: rawContent,
    });
  }

  return activities;
}

async function findMarkdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const entryPath = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await findMarkdownFiles(entryPath));
    } else if (entry.isFile() && extname(entry.name).toLowerCase() === '.md') {
      files.push(entryPath);
    }
  }
  return files;
}

async function collectActivities() {
  const files = await findMarkdownFiles(sourceRoot);
  const records = [];
  const issues = [];

  for (const filePath of files) {
    const markdown = await readFile(filePath, 'utf8');
    const frontmatter = parseFrontmatter(markdown);
    const fileCourseId = slugify(basename(filePath, extname(filePath)));
    const courseId = frontmatter.course_id || fileCourseId;
    if (courseFilter && courseId !== courseFilter) continue;

    const courseLevel = frontmatter.level || relative(sourceRoot, filePath).split(sep)[0] || null;
    const course = frontmatter.title || frontmatter.course || humanizeCourseId(courseId);
    const activities = parseActivities(markdown);

    if (!frontmatter.course_id) {
      issues.push({ type: 'missing-course-id', filePath });
    }
    if (!activities.length) {
      issues.push({ type: 'missing-activity', filePath });
    }

    for (const activity of activities) {
      records.push({
        ...activity,
        courseId,
        course,
        courseLevel,
        sourcePath: relative(sourceRoot, filePath).split(sep).join('/'),
      });
      if (!activity.category) {
        issues.push({
          type: 'unknown-category',
          filePath,
          module: activity.module,
          chapter: activity.chapter,
          value: activity.categoryLine,
        });
      }
    }
  }

  const uniqueRecords = new Map();
  const duplicates = [];
  for (const record of records) {
    const key = `${record.courseId}:${record.module}:${record.chapter}`;
    const existing = uniqueRecords.get(key);
    if (!existing || record.sourceContent.length > existing.sourceContent.length) {
      if (existing) duplicates.push({ key, filePath: record.sourcePath });
      uniqueRecords.set(key, record);
    } else {
      duplicates.push({ key, filePath: record.sourcePath });
    }
  }

  return {
    files,
    records: [...uniqueRecords.values()],
    issues,
    duplicates,
  };
}

async function ensurePracticalTable() {
  await client.execute(`
    CREATE TABLE IF NOT EXISTS learning_board_practicals (
      id TEXT PRIMARY KEY,
      course_id TEXT NOT NULL,
      module INTEGER NOT NULL,
      chapter INTEGER NOT NULL,
      mode TEXT NOT NULL DEFAULT 'code_lab',
      language TEXT,
      runtime TEXT,
      title TEXT NOT NULL,
      instructions TEXT,
      completion_rule TEXT NOT NULL DEFAULT 'all_tests_pass',
      metadata TEXT,
      category TEXT,
      source_path TEXT,
      source_content TEXT,
      source_key TEXT,
      source_hash TEXT,
      lab_type TEXT,
      classifier_version TEXT,
      schema_version INTEGER,
      generator_version TEXT,
      generation_status TEXT NOT NULL DEFAULT 'raw',
      generation_error TEXT,
      generated_at TEXT,
      published_version INTEGER,
      practical_json TEXT,
      environment_json TEXT,
      safety_json TEXT,
      evidence_json TEXT,
      cleanup_json TEXT,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL,
      UNIQUE(course_id, module, chapter)
    )
  `);

  for (const [column, definition] of [
    ['category', 'TEXT'],
    ['source_path', 'TEXT'],
    ['source_content', 'TEXT'],
    ['source_key', 'TEXT'],
    ['source_hash', 'TEXT'],
    ['lab_type', 'TEXT'],
    ['classifier_version', 'TEXT'],
    ['schema_version', 'INTEGER'],
    ['generator_version', 'TEXT'],
    ['generation_status', "TEXT NOT NULL DEFAULT 'raw'"],
    ['generation_error', 'TEXT'],
    ['generated_at', 'TEXT'],
    ['published_version', 'INTEGER'],
    ['practical_json', 'TEXT'],
    ['environment_json', 'TEXT'],
    ['safety_json', 'TEXT'],
    ['evidence_json', 'TEXT'],
    ['cleanup_json', 'TEXT'],
  ]) {
    try {
      await client.execute(`ALTER TABLE learning_board_practicals ADD COLUMN ${column} ${definition}`);
    } catch {
      // Column already exists on an imported database.
    }
  }
}

function printReport(inventory) {
  const knownRecords = inventory.records.filter((record) => record.category);
  const counts = new Map(categories.map((category) => [category, 0]));
  for (const record of knownRecords) counts.set(record.category, counts.get(record.category) + 1);

  console.log(`Source: ${sourceRoot}`);
  console.log(`Markdown files: ${inventory.files.length}`);
  console.log(`Unique chapter activities: ${inventory.records.length}`);
  for (const category of categories) console.log(`${category}: ${counts.get(category)}`);
  console.log(`Unknown category activities: ${inventory.records.length - knownRecords.length}`);
  console.log(`Missing frontmatter course_id: ${inventory.issues.filter((issue) => issue.type === 'missing-course-id').length}`);
  console.log(`Duplicate course/module/chapter keys: ${inventory.duplicates.length}`);

  const unknown = inventory.issues.filter((issue) => issue.type === 'unknown-category');
  for (const issue of unknown.slice(0, 20)) {
    console.log(`  Unknown: ${issue.filePath} M${issue.module}C${issue.chapter} -> ${issue.value || '(empty)'}`);
  }
  if (unknown.length > 20) console.log(`  ... ${unknown.length - 20} more unknown category activities`);
}

function statementFor(record, now) {
  const metadata = JSON.stringify({
    sourceFormat: 'hands-on-activity-markdown',
    sourcePath: record.sourcePath,
    course: record.course,
    courseLevel: record.courseLevel,
    chapterTitle: record.chapterTitle,
    categoryLine: record.categoryLine,
  });

  return {
    sql: `
      INSERT INTO learning_board_practicals (
        id, course_id, module, chapter, mode, language, runtime, title,
        instructions, completion_rule, metadata, category, source_path,
        source_content, source_key, source_hash, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(course_id, module, chapter) DO UPDATE SET
        title = excluded.title,
        instructions = excluded.instructions,
        metadata = excluded.metadata,
        category = excluded.category,
        source_path = excluded.source_path,
        source_content = excluded.source_content,
        source_key = excluded.source_key,
        source_hash = excluded.source_hash,
        updated_at = excluded.updated_at
    `,
    args: [
      practicalIdFor(record),
      record.courseId,
      record.module,
      record.chapter,
      modeByCategory.get(record.category) || 'non_code_activity',
      null,
      null,
      record.title,
      record.instructions,
      'learner_submission',
      metadata,
      record.category,
      record.sourcePath,
      record.sourceContent,
      sourceKeyFor(record),
      sourceHashFor(record),
      now,
      now,
    ],
  };
}

async function importRecords(records) {
  await ensurePracticalTable();
  const importable = records.filter((record) => record.category);
  const now = new Date().toISOString();
  const statements = importable.map((record) => statementFor(record, now));

  for (let index = 0; index < statements.length; index += 100) {
    await client.batch(statements.slice(index, index + 100), 'write');
    console.log(`Imported ${Math.min(index + 100, statements.length)}/${statements.length}`);
  }

  return importable.length;
}

async function main() {
  try {
    const inventory = await collectActivities();
    printReport(inventory);

    if (dryRun) {
      console.log('Dry run complete; no database rows changed.');
      return;
    }

    const imported = await importRecords(inventory.records);
    console.log(`Imported ${imported} categorized activities into learning_board_practicals.`);
    if (inventory.records.length !== imported) {
      console.log(`Skipped ${inventory.records.length - imported} activities without one of the four recognized categories.`);
    }
  } catch (error) {
    console.error(`Import failed: ${error.message}`);
    process.exitCode = 1;
  }
}

main();
