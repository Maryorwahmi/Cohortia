#!/usr/bin/env node

import 'dotenv/config';
import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { createClient } from '@libsql/client';

const categories = [
  'Cloud Console Lab',
  'Scenario & Design Exercise',
  'Terminal Coding Lab',
  'Research & Analysis',
];

const workspaceRoot = path.basename(path.resolve(process.cwd())).toLowerCase() === 'backend'
  ? path.resolve(process.cwd(), '..')
  : path.resolve(process.cwd());
const docsRoot = path.join(workspaceRoot, 'docs');
const pilotManifestPath = path.join(docsRoot, 'terminal-coding-lab-pilots.json');
const baselinePath = path.join(docsRoot, 'terminal-coding-lab-phase-0-baseline.json');
const schemaPath = path.join(docsRoot, 'schemas', 'learning-board-practical-v1.schema.json');
const databaseUrl = process.env.DATABASE_URL || 'file:./cohortia.db';
const client = createClient({ url: databaseUrl, authToken: process.env.DATABASE_AUTH_TOKEN });

async function readJson(filePath) {
  return JSON.parse(await fs.readFile(filePath, 'utf8'));
}

async function scalar(sql, args = []) {
  const result = await client.execute({ sql, args });
  return Number(result.rows[0]?.count || 0);
}

function addFailure(failures, message) {
  failures.push(message);
}

async function verifyDatabase(baseline, pilotManifest, failures) {
  const categoryPlaceholders = categories.map(() => '?').join(', ');
  const totalPracticals = await scalar('SELECT COUNT(*) AS count FROM learning_board_practicals');
  const categoryResult = await client.execute({
    sql: 'SELECT category, COUNT(*) AS count FROM learning_board_practicals GROUP BY category',
    args: [],
  });
  const categoryCounts = Object.fromEntries(categories.map((category) => [category, 0]));
  for (const row of categoryResult.rows) {
    if (row.category in categoryCounts) categoryCounts[row.category] = Number(row.count);
  }

  const sourceContentNullOrEmpty = await scalar(
    "SELECT COUNT(*) AS count FROM learning_board_practicals WHERE source_content IS NULL OR TRIM(source_content) = ''",
  );
  const invalidOrNullCategory = await scalar(
    `SELECT COUNT(*) AS count FROM learning_board_practicals WHERE category IS NULL OR category NOT IN (${categoryPlaceholders})`,
    categories,
  );
  const duplicateCourseModuleChapterKeys = await scalar(`
    SELECT COUNT(*) AS count
    FROM (
      SELECT course_id, module, chapter
      FROM learning_board_practicals
      GROUP BY course_id, module, chapter
      HAVING COUNT(*) > 1
    )
  `);

  const childTotals = {
    files: await scalar('SELECT COUNT(*) AS count FROM learning_board_practical_files'),
    tasks: await scalar('SELECT COUNT(*) AS count FROM learning_board_practical_tasks'),
    tests: await scalar('SELECT COUNT(*) AS count FROM learning_board_practical_tests'),
  };
  const orphanCounts = {
    filesMissingPractical: await scalar(`
      SELECT COUNT(*) AS count
      FROM learning_board_practical_files AS files
      LEFT JOIN learning_board_practicals AS practicals ON practicals.id = files.practical_id
      WHERE practicals.id IS NULL
    `),
    tasksMissingPractical: await scalar(`
      SELECT COUNT(*) AS count
      FROM learning_board_practical_tasks AS tasks
      LEFT JOIN learning_board_practicals AS practicals ON practicals.id = tasks.practical_id
      WHERE practicals.id IS NULL
    `),
    testsMissingTask: await scalar(`
      SELECT COUNT(*) AS count
      FROM learning_board_practical_tests AS tests
      LEFT JOIN learning_board_practical_tasks AS tasks ON tasks.id = tests.task_id
      WHERE tasks.id IS NULL
    `),
  };

  const observed = {
    totalPracticals,
    categoryCounts,
    sourceContentNullOrEmpty,
    invalidOrNullCategory,
    duplicateCourseModuleChapterKeys,
    childTotals,
    orphanCounts,
  };

  const expected = {
    totalPracticals: baseline.counts.totalPracticals,
    categoryCounts: baseline.counts.byCategory,
    sourceContentNullOrEmpty: baseline.quality.sourceContentNullOrEmpty,
    invalidOrNullCategory: baseline.quality.invalidOrNullCategory,
    duplicateCourseModuleChapterKeys: baseline.quality.duplicateCourseModuleChapterKeys,
    childTotals: baseline.childTotals,
    orphanCounts: baseline.orphanCounts,
  };

  if (JSON.stringify(observed) !== JSON.stringify(expected)) {
    addFailure(failures, 'Database observations do not match docs/terminal-coding-lab-phase-0-baseline.json.');
  }

  const pilotResults = [];
  for (const pilot of pilotManifest.pilots) {
    const expectedSourceKey = `${pilot.courseId}/${pilot.module}/${pilot.chapter}`;
    if (pilot.sourceKey !== expectedSourceKey) {
      addFailure(failures, `Pilot ${pilot.name} has an invalid sourceKey: ${pilot.sourceKey}.`);
    }

    const result = await client.execute({
      sql: `
        SELECT id, course_id, module, chapter, title, category, source_path
        FROM learning_board_practicals
        WHERE course_id = ? AND module = ? AND chapter = ?
      `,
      args: [pilot.courseId, pilot.module, pilot.chapter],
    });
    const row = result.rows[0];
    if (!row) {
      addFailure(failures, `Pilot ${pilot.name} is missing from learning_board_practicals.`);
      pilotResults.push({ name: pilot.name, status: 'missing' });
      continue;
    }

    const mismatches = [];
    for (const field of ['id', 'course_id', 'module', 'chapter', 'title', 'category', 'source_path']) {
      const expectedValue = field === 'id'
        ? pilot.persistedPracticalId
        : field === 'course_id'
          ? pilot.courseId
          : field === 'module'
            ? pilot.module
            : field === 'chapter'
              ? pilot.chapter
              : pilot[field === 'source_path' ? 'sourcePath' : field === 'category' ? 'category' : 'sourceTitle'];
      if (row[field] !== expectedValue) mismatches.push(field);
    }
    if (mismatches.length) {
      addFailure(failures, `Pilot ${pilot.name} mismatches persisted fields: ${mismatches.join(', ')}.`);
    }
    pilotResults.push({
      name: pilot.name,
      status: mismatches.length ? 'mismatch' : 'verified',
      persistedPracticalId: row.id,
    });
  }

  return { observed, pilotResults };
}

async function main() {
  const failures = [];
  const [schemaDocument, pilotManifest, baseline] = await Promise.all([
    readJson(schemaPath),
    readJson(pilotManifestPath),
    readJson(baselinePath),
  ]);

  if (schemaDocument.$id !== 'https://cohortia.local/schemas/learning-board-practical-v1.json') {
    addFailure(failures, 'The practical schema has an unexpected $id.');
  }
  if (schemaDocument.properties?.schemaVersion?.const !== 1) {
    addFailure(failures, 'The practical schema does not declare schemaVersion 1.');
  }
  if (pilotManifest.schemaVersion !== 1 || pilotManifest.sourceCategory !== 'Terminal Coding Lab') {
    addFailure(failures, 'The pilot manifest has an invalid schema version or source category.');
  }
  if (baseline.schemaVersion !== 1 || baseline.baselineType !== 'terminal-coding-lab-import') {
    addFailure(failures, 'The Phase 0 baseline has an invalid schema version or baseline type.');
  }

  const databaseReport = await verifyDatabase(baseline, pilotManifest, failures);
  const report = {
    status: failures.length ? 'FAIL' : 'PASS',
    schema: schemaPath,
    pilotManifest: pilotManifestPath,
    baseline: baselinePath,
    ...databaseReport,
    failures,
  };
  console.log(JSON.stringify(report, null, 2));
  if (failures.length) process.exitCode = 1;
}

main().catch((error) => {
  console.error(`Phase 0 verification failed: ${error.message}`);
  process.exitCode = 1;
});