#!/usr/bin/env node

import 'dotenv/config';
import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { createClient } from '@libsql/client';
import learning from '../src/routes/learning.js';

const workspaceRoot = path.basename(path.resolve(process.cwd())).toLowerCase() === 'backend'
  ? path.resolve(process.cwd(), '..')
  : path.resolve(process.cwd());
const pilotManifestPath = path.join(workspaceRoot, 'docs', 'terminal-coding-lab-pilots.json');
const databaseUrl = process.env.DATABASE_URL || 'file:./cohortia.db';
const client = createClient({ url: databaseUrl, authToken: process.env.DATABASE_AUTH_TOKEN });

async function readJson(filePath) {
  return JSON.parse(await fs.readFile(filePath, 'utf8'));
}

async function requestJson(pathname) {
  const response = await learning.request(pathname);
  const text = await response.text();
  let body = null;
  try {
    body = JSON.parse(text);
  } catch {
    // The caller will report a failed response if JSON is required.
  }
  return { response, body };
}

function addFailure(failures, message) {
  failures.push(message);
}

async function main() {
  const failures = [];
  const pilotManifest = await readJson(pilotManifestPath);
  const coursesResult = await requestJson('/boards');
  const courses = coursesResult.body?.data?.courses || [];
  const courseIds = new Set(courses.map((course) => course.courseId));
  const practicalCourseResult = await client.execute('SELECT DISTINCT course_id FROM learning_board_practicals ORDER BY course_id');
  const practicalCourseIds = practicalCourseResult.rows.map((row) => row.course_id);
  const missingCourseIds = practicalCourseIds.filter((courseId) => !courseIds.has(courseId));

  if (coursesResult.response.status !== 200) addFailure(failures, `Course listing returned HTTP ${coursesResult.response.status}.`);
  if (missingCourseIds.length > 0) addFailure(failures, `Course listing is missing ${missingCourseIds.length} practical-backed courses.`);

  const pilotResults = [];
  for (const pilot of pilotManifest.pilots) {
    const result = await requestJson(`/boards/${pilot.courseId}`);
    const chapters = result.body?.data?.chapters || [];
    const chapter = chapters.find((candidate) => candidate.module === pilot.module && candidate.chapter === pilot.chapter);
    const row = {
      name: pilot.name,
      courseStatus: result.response.status,
      chapterFound: Boolean(chapter),
      source: chapter?.source || null,
      practicalId: chapter?.practicalId || null,
      practicalStatus: chapter?.practicalStatus || null,
    };
    pilotResults.push(row);

    if (result.response.status !== 200) addFailure(failures, `Pilot ${pilot.name} course listing returned HTTP ${result.response.status}.`);
    if (!chapter) addFailure(failures, `Pilot ${pilot.name} is missing from its course chapter listing.`);
    if (chapter?.practicalId !== pilot.persistedPracticalId) addFailure(failures, `Pilot ${pilot.name} listing returned practical ID ${chapter?.practicalId || '(missing)'}.`);
    if (chapter?.source !== 'practical') addFailure(failures, `Pilot ${pilot.name} listing did not identify its practical source.`);
  }

  const missingCourse = await requestJson('/boards/__phase2_missing_course__');
  if (missingCourse.response.status !== 404) addFailure(failures, `Unknown course returned HTTP ${missingCourse.response.status}; expected 404.`);

  console.log(JSON.stringify({
    status: failures.length ? 'FAIL' : 'PASS',
    practicalCourseCount: practicalCourseIds.length,
    listedCourseCount: courses.length,
    missingCourseIds,
    pilotResults,
    missingCourseStatus: missingCourse.response.status,
    failures,
  }, null, 2));
  if (failures.length) process.exitCode = 1;
}

main().catch((error) => {
  console.error(`Phase 2 verification failed: ${error.message}`);
  process.exitCode = 1;
});