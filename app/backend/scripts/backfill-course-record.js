import 'dotenv/config';
import fs from 'node:fs/promises';
import path from 'node:path';
import { createClient } from '@libsql/client';

const courseId = process.argv[2];
if (!courseId) throw new Error('Usage: node scripts/backfill-course-record.js <course-id>');

const generatedCourseRoot = path.resolve(import.meta.dirname, '../../generated/learning-boards-html', courseId);
const recordFile = path.join(generatedCourseRoot, 'record.json');
const client = createClient({
  url: process.env.DATABASE_URL || 'file:./cohortia.db',
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

async function findManifests(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true }).catch((error) => {
    if (error.code === 'ENOENT') return [];
    throw error;
  });
  const manifests = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) manifests.push(...await findManifests(fullPath));
    else if (entry.isFile() && entry.name === 'manifest.json') manifests.push(fullPath);
  }
  return manifests;
}

const existing = await fs.readFile(recordFile, 'utf8').catch(() => null);
const record = existing ? JSON.parse(existing) : {};
const completedChapters = record.completedChapters || {};
const manifests = await findManifests(generatedCourseRoot);
let marked = 0;
let incomplete = 0;

for (const manifestFile of manifests) {
  const manifest = JSON.parse(await fs.readFile(manifestFile, 'utf8'));
  const moduleNumber = Number(manifest.module);
  const chapterNumber = Number(manifest.chapter);
  const expectedScreens = Array.isArray(manifest.screens) ? manifest.screens.length : 0;
  const key = `${moduleNumber}.${chapterNumber}`;
  const result = await client.execute({
    sql: `
      SELECT c.updated_at, ch.screens_count, COUNT(s.id) AS stored_screens
      FROM learning_board_chapters ch
      JOIN learning_board_courses c ON c.course_id = ch.course_id
      LEFT JOIN learning_board_screens s
        ON s.course_id = ch.course_id AND s.module = ch.module AND s.chapter = ch.chapter
      WHERE ch.course_id = ? AND ch.module = ? AND ch.chapter = ?
      GROUP BY c.updated_at, ch.screens_count
    `,
    args: [courseId, moduleNumber, chapterNumber],
  });
  const row = result.rows[0];
  const storedScreens = Number(row?.stored_screens || 0);
  const importedScreens = Number(row?.screens_count || 0);
  if (!row || importedScreens !== expectedScreens || storedScreens !== expectedScreens) {
    incomplete += 1;
    console.log(`Not recording ${courseId} chapter ${key}: expected ${expectedScreens}, stored ${storedScreens}.`);
    continue;
  }
  completedChapters[key] = {
    status: 'completed',
    module: moduleNumber,
    chapter: chapterNumber,
    completedAt: row.updated_at || new Date().toISOString(),
    backfilled: true,
  };
  marked += 1;
}

const importedChapters = await client.execute({
  sql: `
    SELECT ch.module, ch.chapter, ch.screens_count, ch.updated_at, COUNT(s.id) AS stored_screens
    FROM learning_board_chapters ch
    LEFT JOIN learning_board_screens s
      ON s.course_id = ch.course_id AND s.module = ch.module AND s.chapter = ch.chapter
    WHERE ch.course_id = ?
    GROUP BY ch.module, ch.chapter, ch.screens_count, ch.updated_at
    ORDER BY ch.module, ch.chapter
  `,
  args: [courseId],
});

for (const row of importedChapters.rows) {
  const expectedScreens = Number(row.screens_count || 0);
  const storedScreens = Number(row.stored_screens || 0);
  if (!expectedScreens || storedScreens !== expectedScreens) continue;
  const key = `${Number(row.module)}.${Number(row.chapter)}`;
  if (completedChapters[key]?.status === 'completed') continue;
  completedChapters[key] = {
    status: 'completed',
    module: Number(row.module),
    chapter: Number(row.chapter),
    completedAt: row.updated_at || new Date().toISOString(),
    backfilled: true,
  };
  marked += 1;
}

const nextRecord = {
  version: 1,
  courseId,
  courseTitle: manifests.length ? JSON.parse(await fs.readFile(manifests[0], 'utf8')).course : courseId,
  updatedAt: new Date().toISOString(),
  completedChapters,
};
await fs.mkdir(generatedCourseRoot, { recursive: true });
await fs.writeFile(recordFile, `${JSON.stringify(nextRecord, null, 2)}\n`, 'utf8');
console.log(`Backfilled ${marked} completed chapters for ${courseId}; left ${incomplete} incomplete.`);
console.log(`Record: ${recordFile}`);
