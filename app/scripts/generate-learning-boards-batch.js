#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import {
  readCourseGenerationRecord,
  writeCourseGenerationRecord,
} from './lib/learning-board-record.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const generatorScript = path.join(__dirname, 'generate-learning-board-html.js');
const generatedRoot = path.join(repoRoot, 'generated', 'learning-boards-html');

function printUsage() {
  console.log(`Usage:
  node scripts/generate-learning-boards-batch.js --category <category> --course-id <course-id> [--module <module>] [--subcategory <name>] [--overwrite] [--import-retries <count>] [--list-only]

Examples:
  node scripts/generate-learning-boards-batch.js --category computer-science --course-id ai-for-everyone --list-only
  node scripts/generate-learning-boards-batch.js --category computer-science --subcategory "Web Development" --course-id all
  node scripts/generate-learning-boards-batch.js --category computer-science --course-id cs50s-introduction-to-computer-science --module 3
`);
}

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (!token.startsWith('--')) continue;
    const key = token.slice(2);
    const value = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[++i] : true;
    args[key] = value;
  }

  return {
    category: args.category || 'computer-science',
    subcategory: args.subcategory || null,
    courseId: args['course-id'] || args.course || null,
    module: args.module || null,
    overwrite: Boolean(args.overwrite),
    importRetries: Number.isFinite(Number(args['import-retries']))
      ? Math.max(1, Number(args['import-retries']))
      : 3,
    listOnly: Boolean(args['list-only'] || args['dry-run']),
    help: Boolean(args.help || args.h),
  };
}

function slugify(value = '') {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-');
}

async function readCatalog(category) {
  const catalogPath = path.join(repoRoot, 'docs', category, 'catalog-courses-by-subcategory.json');
  try {
    const text = await fs.readFile(catalogPath, 'utf8');
    return JSON.parse(text);
  } catch (error) {
    throw new Error(`Catalog not found for category ${category}: ${catalogPath}`);
  }
}

async function listCoursesForCategory(category, subcategory = null) {
  const data = await readCatalog(category);
  const courses = [];
  for (const item of data.subcategories || []) {
    const matches = !subcategory || String(item.name).toLowerCase() === String(subcategory).toLowerCase();
    if (!matches) continue;
    for (const course of item.courses || []) {
      courses.push({
        id: course.id,
        title: course.title || course.name || course.id,
        level: course.level || item.level || 'beginner',
        subcategory: item.name,
      });
    }
  }
  return courses;
}

async function walkDir(dir, onFile) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walkDir(fullPath, onFile);
    } else if (entry.isFile()) {
      await onFile(fullPath);
    }
  }
}

async function locateSyllabusForCourse(category, course) {
  const courseRoot = path.join(repoRoot, 'docs', category);
  const candidates = new Set([
    slugify(course.id),
    slugify(course.title || course.id),
    slugify((course.title || course.id).replace(/\s*\(.*?\)/g, '')),
  ]);

  let match = null;
  await walkDir(courseRoot, async (filePath) => {
    if (!/\.(md|markdown)$/i.test(filePath)) return;
    const fileName = path.basename(filePath, path.extname(filePath));
    const normalized = slugify(fileName);
    if (!match && [...candidates].some((candidate) => normalized === candidate || normalized.includes(candidate) || candidate.includes(normalized))) {
      match = filePath;
    }
  });

  if (match) return match;
  return null;
}

function runCommand(command, args, cwd) {
  return new Promise((resolve) => {
    const child = spawn(command, args, { cwd, stdio: ['inherit', 'pipe', 'pipe'], shell: false, windowsHide: true });
    let stdout = '';
    let stderr = '';

    child.stdout.on('data', (chunk) => {
      const text = String(chunk);
      stdout += text;
      process.stdout.write(text);
    });

    child.stderr.on('data', (chunk) => {
      const text = String(chunk);
      stderr += text;
      process.stderr.write(text);
    });

    child.on('close', (code) => resolve({ code, stdout, stderr }));
    child.on('error', (error) => resolve({ code: 1, stdout, stderr: error.message }));
  });
}

async function listChapterSelectors(syllabusPath, requestedModule = null) {
  const source = await fs.readFile(syllabusPath, 'utf8');
  const chapters = [];
  const seen = new Set();
  for (const match of source.matchAll(/^#{2,4}\s*Chapter\s+(\d+)\.(\d+)\b/gim)) {
    const moduleNumber = Number(match[1]);
    const chapterNumber = Number(match[2]);
    const key = `${moduleNumber}.${chapterNumber}`;
    if (!Number.isInteger(moduleNumber) || !Number.isInteger(chapterNumber) || seen.has(key)) continue;
    seen.add(key);
    if (requestedModule == null || moduleNumber === Number(requestedModule)) {
      chapters.push({ moduleNumber, chapterNumber });
    }
  }
  return chapters.sort((a, b) => a.moduleNumber - b.moduleNumber || a.chapterNumber - b.chapterNumber);
}

async function readCourseRecord(courseId) {
  return readCourseGenerationRecord(generatedRoot, courseId);
}

function chapterManifestPath(courseId, moduleNumber, chapterNumber) {
  return path.join(
    generatedRoot,
    courseId,
    `module-${String(moduleNumber).padStart(2, '0')}`,
    `chapter-${String(chapterNumber).padStart(2, '0')}`,
    'manifest.json',
  );
}

async function chapterManifestExists(courseId, moduleNumber, chapterNumber) {
  try {
    const manifest = JSON.parse(await fs.readFile(chapterManifestPath(courseId, moduleNumber, chapterNumber), 'utf8'));
    return manifest && Number(manifest.module) === moduleNumber && Number(manifest.chapter) === chapterNumber;
  } catch (error) {
    if (error.code !== 'ENOENT') console.warn(`Unable to inspect local chapter manifest: ${error.message}`);
    return false;
  }
}

async function waitBeforeImportRetry(attempt) {
  const delayMs = Math.min(30000, 2000 * (2 ** (attempt - 1)));
  console.log(`Waiting ${delayMs / 1000}s before Turso import retry.`);
  await new Promise((resolve) => setTimeout(resolve, delayMs));
}

async function writeCourseRecord(course, syllabusPath, record) {
  await writeCourseGenerationRecord(generatedRoot, course, syllabusPath, {
    completedChapters: record.completedChapters || {},
  });
}

async function generateCourse(category, course, options) {
  const syllabusPath = await locateSyllabusForCourse(category, course);

  if (!syllabusPath) {
    console.log(`syllabus not found for ${course.id} (${course.title}) in ${category}`);
    return { skipped: true, courseId: course.id, title: course.title, syllabusPath: null };
  }

  const chapters = await listChapterSelectors(syllabusPath, options.module);
  if (!chapters.length) {
    console.log(`no chapters found for ${course.id} (${course.title})`);
    return { skipped: true, courseId: course.id, title: course.title, syllabusPath };
  }

  const record = await readCourseRecord(course.id);
  const completedChapters = record.completedChapters || {};
  console.log(`Using shared generation record: ${path.join(generatedRoot, 'record.json')}`);
  let code = 0;
  let generatedOrImported = 0;
  let skippedChapters = 0;
  for (const { moduleNumber, chapterNumber } of chapters) {
    const chapterKey = `${moduleNumber}.${chapterNumber}`;
    if (!options.overwrite
      && completedChapters[chapterKey]?.status === 'completed'
    ) {
      console.log(`Skipping ${course.id}, chapter ${chapterKey}; record.json marks it complete.`);
      skippedChapters += 1;
      continue;
    }
    if (!generatedOrImported) {
      console.log(`Resuming ${course.id} at chapter ${chapterKey}.`);
    }
    generatedOrImported += 1;
    const hasLocalManifest = !options.overwrite && await chapterManifestExists(course.id, moduleNumber, chapterNumber);
    let result = { code: 0 };
    if (hasLocalManifest) {
      console.log(`Reusing existing local manifest for ${course.id}, chapter ${chapterKey}; Turso import is pending.`);
    } else {
      console.log(`Generating ${course.id}, chapter ${moduleNumber}.${chapterNumber}.`);
      const args = [
        generatorScript,
        '--syllabus',
        syllabusPath,
        '--course-id',
        course.id,
        '--course-title',
        course.title,
        '--output',
        'generated/learning-boards-html',
        '--module',
        String(moduleNumber),
        '--chapter',
        String(chapterNumber),
      ];
      if (options.overwrite) args.push('--overwrite');
      result = await runCommand(process.execPath, args, repoRoot);
    }
    if (result.code !== 0) {
      code = result.code;
      completedChapters[chapterKey] = {
        status: 'generation-failed',
        module: moduleNumber,
        chapter: chapterNumber,
        updatedAt: new Date().toISOString(),
      };
      await writeCourseRecord(course, syllabusPath, { completedChapters });
    }
    if (result.code === 0) {
      const importScript = path.join(repoRoot, 'backend', 'scripts', 'import-learning-boards.js');
      let imported = { code: 1 };
      for (let attempt = 1; attempt <= options.importRetries; attempt += 1) {
        console.log(`Importing ${course.id}, chapter ${moduleNumber}.${chapterNumber} into Turso (attempt ${attempt}/${options.importRetries}).`);
        imported = await runCommand(process.execPath, [
          importScript,
          '--course', course.id,
          '--module', String(moduleNumber),
          '--chapter', String(chapterNumber),
          '--refresh',
        ], path.join(repoRoot, 'backend'));
        if (imported.code === 0) break;
        if (attempt < options.importRetries) await waitBeforeImportRetry(attempt);
      }
      if (imported.code !== 0) code = imported.code;
      if (imported.code === 0) {
        completedChapters[chapterKey] = {
          status: 'completed',
          module: moduleNumber,
          chapter: chapterNumber,
          completedAt: new Date().toISOString(),
        };
        await writeCourseRecord(course, syllabusPath, { completedChapters });
        console.log(`Recorded ${course.id}, chapter ${chapterKey} as complete.`);
      } else {
        completedChapters[chapterKey] = {
          status: 'import-pending',
          module: moduleNumber,
          chapter: chapterNumber,
          updatedAt: new Date().toISOString(),
        };
        await writeCourseRecord(course, syllabusPath, { completedChapters });
        console.error(`Turso import did not complete for ${course.id}, chapter ${chapterKey}. Re-run the same command to retry without regenerating.`);
      }
    }
  }

  return {
    skipped: generatedOrImported === 0,
    courseId: course.id,
    title: course.title,
    syllabusPath,
    code,
    skippedChapters,
  };
}

async function main() {
  const options = parseArgs(process.argv.slice(2));

  if (options.help) {
    printUsage();
    process.exit(0);
  }

  try {
    const courses = await listCoursesForCategory(options.category, options.subcategory);

    if (!courses.length) {
      console.log(`No courses found for category ${options.category}${options.subcategory ? ` / ${options.subcategory}` : ''}`);
      process.exit(0);
    }

    const targetCourseId = options.courseId;
    const selectedCourses = targetCourseId && targetCourseId !== 'all'
      ? courses.filter((course) => String(course.id).toLowerCase() === String(targetCourseId).toLowerCase())
      : courses;

    if (!selectedCourses.length) {
      console.log(`Course not found: ${targetCourseId}`);
      console.log('syllabus not found');
      process.exit(0);
    }

    if (options.listOnly) {
      for (const course of selectedCourses) {
        const syllabusPath = await locateSyllabusForCourse(options.category, course);
        console.log(`${course.id}\t${course.title}\t${syllabusPath ? 'FOUND' : 'MISSING'}\t${syllabusPath || 'n/a'}`);
      }
      process.exit(0);
    }

    let succeeded = 0;
    let skipped = 0;
    for (const course of selectedCourses) {
      const result = await generateCourse(options.category, course, options);
      if (result.skipped) {
        console.log(`Skipping course ${course.id}; all ${result.skippedChapters} chapters are complete in record.json.`);
        skipped += 1;
        continue;
      }
      succeeded += result.code === 0 ? 1 : 0;
    }

    console.log(`Done: ${succeeded} succeeded, ${skipped} skipped.`);
    process.exit(succeeded > 0 || skipped > 0 ? 0 : 1);
  } catch (error) {
    console.error(`Generation batch failed: ${error.message || error}`);
    process.exit(1);
  }
}

main();
