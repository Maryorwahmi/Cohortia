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

function addFailure(failures, message) {
  failures.push(message);
}

async function requestChapter(courseId, module, chapter) {
  const response = await learning.request(`/boards/${courseId}/${module}/${chapter}`);
  const rawBody = await response.text();
  let body = null;
  try {
    body = JSON.parse(rawBody);
  } catch {
    body = null;
  }
  return { response, rawBody, body };
}

function practicalSummary(practical) {
  return {
    id: practical?.id || null,
    origin: practical?.origin || null,
    publicationStatus: practical?.publicationStatus || null,
    category: practical?.category || null,
    labType: practical?.labType || null,
    fileCount: Array.isArray(practical?.files) ? practical.files.length : 0,
    taskCount: Array.isArray(practical?.tasks) ? practical.tasks.length : 0,
    testCount: Array.isArray(practical?.tasks)
      ? practical.tasks.reduce((total, task) => total + (Array.isArray(task.tests) ? task.tests.length : 0), 0)
      : 0,
  };
}

async function verifySourceOnlyPilot(pilot, failures) {
  const result = await requestChapter(pilot.courseId, pilot.module, pilot.chapter);
  const practical = result.body?.data?.practical;
  const data = result.body?.data || {};
  const summary = practicalSummary(practical);

  if (result.response.status !== 200) addFailure(failures, `Source-only pilot returned HTTP ${result.response.status}.`);
  if (result.body?.success !== true) addFailure(failures, 'Source-only pilot response is not successful.');
  if (practical?.id !== pilot.persistedPracticalId) addFailure(failures, `Source-only pilot returned practical ID ${practical?.id || '(missing)'}.`);
  if (practical?.category !== pilot.category) addFailure(failures, `Source-only pilot returned category ${practical?.category || '(missing)'}.`);
  if (practical?.origin !== 'source') addFailure(failures, 'Source-only pilot did not report origin=source.');
  if (practical?.source !== 'database') addFailure(failures, 'Source-only pilot did not report source=database.');
  if (practical?.publicationStatus !== 'source_only') addFailure(failures, 'Source-only pilot did not report publicationStatus=source_only.');
  if (practical?.status !== 'source_only') addFailure(failures, 'Source-only pilot did not report status=source_only.');
  if (summary.fileCount !== 0 || summary.taskCount !== 0) addFailure(failures, 'Source-only pilot unexpectedly contains generated files or tasks.');
  if (Object.keys(data).filter((key) => key === 'practical').length !== 1) addFailure(failures, 'Chapter response does not contain exactly one practical property.');
  for (const field of ['version', 'schemaVersion', 'generatorVersion', 'classifierVersion', 'labType']) {
    if (!Object.prototype.hasOwnProperty.call(practical || {}, field)) addFailure(failures, `Practical response is missing explicit ${field}.`);
  }
  if ((result.rawBody.match(/"practical"\s*:/g) || []).length !== 1) addFailure(failures, 'Serialized chapter response contains duplicate practical keys.');

  return summary;
}

async function findStructuredPractical() {
  const result = await client.execute(`
    SELECT
      practicals.id,
      practicals.course_id,
      practicals.module,
      practicals.chapter,
      COUNT(DISTINCT files.id) AS file_count,
      COUNT(DISTINCT tasks.id) AS task_count,
      COUNT(DISTINCT tests.id) AS test_count
    FROM learning_board_practicals AS practicals
    LEFT JOIN learning_board_practical_files AS files ON files.practical_id = practicals.id
    LEFT JOIN learning_board_practical_tasks AS tasks ON tasks.practical_id = practicals.id
    LEFT JOIN learning_board_practical_tests AS tests ON tests.task_id = tasks.id
    GROUP BY practicals.id, practicals.course_id, practicals.module, practicals.chapter
    HAVING COUNT(DISTINCT files.id) > 0 OR COUNT(DISTINCT tasks.id) > 0
    ORDER BY practicals.id
    LIMIT 1
  `);
  return result.rows[0] || null;
}

async function verifyStructuredPractical(failures) {
  const fixture = await findStructuredPractical();
  if (!fixture) {
    addFailure(failures, 'No structured practical fixture exists for child-row hydration.');
    return null;
  }

  const result = await requestChapter(fixture.course_id, fixture.module, fixture.chapter);
  const practical = result.body?.data?.practical;
  const summary = practicalSummary(practical);
  const expectedFiles = Number(fixture.file_count);
  const expectedTasks = Number(fixture.task_count);
  const expectedTests = Number(fixture.test_count);

  if (result.response.status !== 200) addFailure(failures, `Structured practical returned HTTP ${result.response.status}.`);
  if (practical?.id !== fixture.id) addFailure(failures, 'Structured practical response selected the wrong parent ID.');
  if (practical?.publicationStatus !== 'published') addFailure(failures, 'Structured practical did not report publicationStatus=published.');
  if (summary.fileCount !== expectedFiles) addFailure(failures, `Structured practical returned ${summary.fileCount} files; expected ${expectedFiles}.`);
  if (summary.taskCount !== expectedTasks) addFailure(failures, `Structured practical returned ${summary.taskCount} tasks; expected ${expectedTasks}.`);
  if (summary.testCount !== expectedTests) addFailure(failures, `Structured practical returned ${summary.testCount} tests; expected ${expectedTests}.`);

  return { ...summary, expectedFiles, expectedTasks, expectedTests };
}

async function main() {
  const failures = [];
  const pilotManifest = await readJson(pilotManifestPath);
  const sourceOnlyPilot = pilotManifest.pilots.find((pilot) => pilot.name === 'javascript-closure-counter');
  if (!sourceOnlyPilot) addFailure(failures, 'The JavaScript source-only pilot is missing from the pilot manifest.');

  const sourceOnly = sourceOnlyPilot ? await verifySourceOnlyPilot(sourceOnlyPilot, failures) : null;
  const structured = await verifyStructuredPractical(failures);
  const missing = await requestChapter('__phase1_missing_course__', 1, 1);
  if (missing.response.status !== 404) addFailure(failures, `Unknown chapter returned HTTP ${missing.response.status}; expected 404.`);

  console.log(JSON.stringify({
    status: failures.length ? 'FAIL' : 'PASS',
    sourceOnly,
    structured,
    missingChapterStatus: missing.response.status,
    failures,
  }, null, 2));
  if (failures.length) process.exitCode = 1;
}

main().catch((error) => {
  console.error(`Phase 1 verification failed: ${error.message}`);
  process.exitCode = 1;
});