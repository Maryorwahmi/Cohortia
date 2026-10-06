import 'dotenv/config';
import { readFile, readdir } from 'node:fs/promises';
import { basename, join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { createClient } from '@libsql/client';

const targetDate = '2026-10-01';
const APPLY = process.argv.includes('--apply');
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl || !/^libsql:\/\/|^https:\/\//i.test(databaseUrl) || !process.env.DATABASE_AUTH_TOKEN) {
  throw new Error('A remote Turso DATABASE_URL and DATABASE_AUTH_TOKEN must be configured.');
}

const checkpointPath = resolve(process.cwd(), '.turso-import-progress.json');
try {
  const checkpoint = JSON.parse(await readFile(checkpointPath, 'utf8'));
  if (checkpoint.databaseUrl !== databaseUrl) {
    throw new Error('The configured Turso URL does not match the saved import checkpoint.');
  }
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}

const local = createClient({url: 'file:./cohortia.db'});
const remote = createClient({url: databaseUrl, authToken: process.env.DATABASE_AUTH_TOKEN});
async function executeRemote(query) {
  let lastError;
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    try {
      return await remote.execute(query);
    } catch (error) {
      lastError = error;
      if (attempt < 4) {
        const delay = attempt * 3000;
        console.warn(`Turso query failed; retrying in ${delay / 1000}s (attempt ${attempt + 1}/4).`);
        await new Promise((resolveDelay) => setTimeout(resolveDelay, delay));
      }
    }
  }
  throw lastError;
}

const sourceRoot = resolve(import.meta.dirname, '../../docs/computer-science');
const importerPath = resolve(import.meta.dirname, 'import-learning-boards.js');
const changed = (await local.execute({
  sql: `SELECT course_id, module, chapter, chapter_title, screens_count, created_at, updated_at
    FROM learning_board_chapters
    WHERE substr(created_at, 1, 10) = ? OR substr(updated_at, 1, 10) = ?
    ORDER BY course_id, module, chapter`,
  args: [targetDate, targetDate],
})).rows;
if (!changed.length) throw new Error(`No local learning-board chapters changed on ${targetDate}.`);

async function findChapterManifests(courseDirectory) {
  const manifests = [];
  for (const moduleEntry of await readdir(courseDirectory, {withFileTypes: true})) {
    if (!moduleEntry.isDirectory() || !/^module-\d+$/.test(moduleEntry.name)) continue;
    const modulePath = join(courseDirectory, moduleEntry.name);
    for (const chapterEntry of await readdir(modulePath, {withFileTypes: true})) {
      if (!chapterEntry.isDirectory() || !/^chapter-\d+$/.test(chapterEntry.name)) continue;
      const manifestPath = join(modulePath, chapterEntry.name, 'manifest.json');
      try {
        const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
        manifests.push({manifest, manifestPath});
      } catch (error) {
        if (error.code !== 'ENOENT') throw error;
      }
    }
  }
  return manifests;
}

async function findCourseDirectory(root, courseId) {
  const directPath = resolve(root, courseId);
  try {
    if ((await findChapterManifests(directPath)).length) return directPath;
  } catch {
    // The course may be nested under a level or subcategory directory.
  }
  for (const entry of await readdir(root, {withFileTypes: true})) {
    if (!entry.isDirectory()) continue;
    const directory = join(root, entry.name);
    if (entry.name.toLowerCase() === courseId.toLowerCase()) {
      try {
        if ((await findChapterManifests(directory)).length) return directory;
      } catch {
        // Continue searching nested directories.
      }
    }
    const nested = await findCourseDirectory(directory, courseId);
    if (nested) return nested;
  }
  return null;
}

const courses = new Map();
for (const chapter of changed) {
  let course = courses.get(chapter.course_id);
  if (!course) {
    const directory = await findCourseDirectory(sourceRoot, chapter.course_id);
    if (!directory) throw new Error(`No source manifests found for ${chapter.course_id}.`);
    course = {directory, manifests: await findChapterManifests(directory)};
    courses.set(chapter.course_id, course);
  }
  const source = course.manifests.find(({manifest}) => (
    String(manifest.courseId) === chapter.course_id
    && Number(manifest.module) === Number(chapter.module)
    && Number(manifest.chapter) === Number(chapter.chapter)
  ));
  if (!source) throw new Error(`Missing source manifest for ${chapter.course_id} M${chapter.module}C${chapter.chapter}.`);
  const expectedScreens = source.manifest.screens?.length || 0;
  const localScreens = await local.execute({
    sql: 'SELECT COUNT(*) AS count FROM learning_board_screens WHERE course_id = ? AND module = ? AND chapter = ?',
    args: [chapter.course_id, chapter.module, chapter.chapter],
  });
  if (expectedScreens !== Number(chapter.screens_count) || expectedScreens !== Number(localScreens.rows[0].count)) {
    throw new Error(`Screen count mismatch for ${chapter.course_id} M${chapter.module}C${chapter.chapter}.`);
  }
  chapter.sourceDirectory = course.directory;
  chapter.maxSourceModule = Math.max(...course.manifests.map(({manifest}) => Number(manifest.module) || 0));
}

const remoteTables = new Set((await executeRemote(
  "SELECT name FROM sqlite_master WHERE type = 'table' AND name NOT LIKE 'sqlite_%'",
)).rows.map((row) => row.name));
for (const table of ['learning_board_courses', 'learning_board_chapters', 'learning_board_screens']) {
  if (!remoteTables.has(table)) throw new Error(`Turso is missing required table ${table}; no data was changed.`);
}

const screenTotal = changed.reduce((total, chapter) => total + Number(chapter.screens_count), 0);
console.log(`Preflight passed: ${changed.length} chapters, ${screenTotal} screens, ${courses.size} courses.`);
console.log('Scope: only chapters created or updated locally on 2026-10-01.');
if (!APPLY) {
  console.log('Dry run only. Pass --apply to refresh these chapters in Turso.');
  local.close();
  remote.close();
  process.exit(0);
}

async function isChapterSynchronized(chapter) {
  const args = [chapter.course_id, chapter.module, chapter.chapter];
  const [remoteScreens, remoteChapter, remoteCourse] = await Promise.all([
    executeRemote({
      sql: `SELECT COUNT(*) AS count,
        SUM(CASE WHEN substr(updated_at, 1, 10) = ? THEN 1 ELSE 0 END) AS updated_today
        FROM learning_board_screens WHERE course_id = ? AND module = ? AND chapter = ?`,
      args: [targetDate, ...args],
    }),
    executeRemote({sql: 'SELECT screens_count, chapter_title FROM learning_board_chapters WHERE course_id = ? AND module = ? AND chapter = ?', args}),
    executeRemote({sql: 'SELECT id FROM learning_board_courses WHERE course_id = ?', args: [chapter.course_id]}),
  ]);
  return remoteCourse.rows.length > 0
    && Number(remoteChapter.rows[0]?.screens_count) === Number(chapter.screens_count)
    && remoteChapter.rows[0]?.chapter_title === chapter.chapter_title
    && Number(remoteScreens.rows[0]?.count) === Number(chapter.screens_count)
    && Number(remoteScreens.rows[0]?.updated_today) === Number(chapter.screens_count);
}

for (const chapter of changed) {
  if (await isChapterSynchronized(chapter)) {
    console.log(`Already synchronized: ${chapter.course_id} M${chapter.module}C${chapter.chapter}`);
    continue;
  }
  const args = [
    importerPath,
    '--course', basename(chapter.sourceDirectory),
    '--module', String(chapter.module),
    '--chapter', String(chapter.chapter),
    '--refresh',
  ];
  let failure;
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    const result = spawnSync(process.execPath, args, {cwd: process.cwd(), env: process.env, stdio: 'inherit'});
    failure = result.error || (result.status !== 0
      ? new Error(`Import failed for ${chapter.course_id} M${chapter.module}C${chapter.chapter}.`)
      : null);
    if (!failure) break;
    if (attempt < 4) {
      const delay = attempt * 3000;
      console.warn(`Retrying ${chapter.course_id} M${chapter.module}C${chapter.chapter} in ${delay / 1000}s (attempt ${attempt + 1}/4).`);
      await new Promise((resolveDelay) => setTimeout(resolveDelay, delay));
    }
  }
  if (failure) throw failure;
}

for (const [courseId, course] of courses) {
  const maxModule = Math.max(...course.manifests.map(({manifest}) => Number(manifest.module) || 0));
  await executeRemote({
    sql: 'UPDATE learning_board_courses SET total_modules = ? WHERE course_id = ?',
    args: [maxModule, courseId],
  });
}

for (const chapter of changed) {
  const args = [targetDate, chapter.course_id, chapter.module, chapter.chapter];
  const [remoteScreens, remoteChapter] = await Promise.all([
    executeRemote({
      sql: `SELECT COUNT(*) AS count,
        SUM(CASE WHEN substr(updated_at, 1, 10) = ? THEN 1 ELSE 0 END) AS updated_today
        FROM learning_board_screens WHERE course_id = ? AND module = ? AND chapter = ?`,
      args,
    }),
    executeRemote({sql: 'SELECT screens_count, chapter_title FROM learning_board_chapters WHERE course_id = ? AND module = ? AND chapter = ?', args: args.slice(1)}),
  ]);
  if (Number(remoteScreens.rows[0]?.count) !== Number(chapter.screens_count)
    || Number(remoteScreens.rows[0]?.updated_today) !== Number(chapter.screens_count)
    || Number(remoteChapter.rows[0]?.screens_count) !== Number(chapter.screens_count)
    || remoteChapter.rows[0]?.chapter_title !== chapter.chapter_title) {
    throw new Error(`Post-import chapter verification failed for ${chapter.course_id} M${chapter.module}C${chapter.chapter}.`);
  }
}

console.log(`Verified screen counts and update dates for ${screenTotal} screens across ${changed.length} chapters in Turso.`);
local.close();
remote.close();
