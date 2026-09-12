#!/usr/bin/env node

import 'dotenv/config';
import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { createClient } from '@libsql/client';
import { sourceHashFor, sourceKeyFor } from '../src/lib/practicalIdentity.js';

const workspaceRoot = path.basename(path.resolve(process.cwd())).toLowerCase() === 'backend'
  ? path.resolve(process.cwd(), '..')
  : path.resolve(process.cwd());
const pilotManifestPath = path.join(workspaceRoot, 'docs', 'terminal-coding-lab-pilots.json');
const databaseUrl = process.env.DATABASE_URL || 'file:./cohortia.db';
const client = createClient({ url: databaseUrl });

const requiredPracticalColumns = [
  'source_key',
  'source_hash',
  'lab_type',
  'classifier_version',
  'schema_version',
  'generator_version',
  'generation_status',
  'generation_error',
  'generated_at',
  'published_version',
  'practical_json',
  'environment_json',
  'safety_json',
  'evidence_json',
  'cleanup_json',
];

const requiredVersionColumns = [
  'id',
  'practical_id',
  'version',
  'status',
  'source_hash',
  'practical_json',
  'created_at',
  'updated_at',
];

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

async function tableColumns(tableName) {
  const result = await client.execute({ sql: `PRAGMA table_info(${tableName})`, args: [] });
  return result.rows.map((row) => row.name);
}

async function verifyDatabase(pilotManifest, failures) {
  const practicalColumns = await tableColumns('learning_board_practicals');
  const versionColumns = await tableColumns('learning_board_practical_versions');
  const missingPracticalColumns = requiredPracticalColumns.filter((column) => !practicalColumns.includes(column));
  const missingVersionColumns = requiredVersionColumns.filter((column) => !versionColumns.includes(column));
  if (missingPracticalColumns.length) addFailure(failures, `Practical table is missing columns: ${missingPracticalColumns.join(', ')}.`);
  if (missingVersionColumns.length) addFailure(failures, `Version table is missing columns: ${missingVersionColumns.join(', ')}.`);

  const practicalRows = await client.execute(`
    SELECT id, course_id, module, chapter, category, source_key, source_hash, source_path,
      source_content, generation_status, published_version
    FROM learning_board_practicals
    ORDER BY course_id, module, chapter
  `);
  const rows = practicalRows.rows;
  const duplicateSourceKeys = await client.execute(`
    SELECT source_key, COUNT(*) AS count
    FROM learning_board_practicals
    GROUP BY source_key
    HAVING COUNT(*) > 1
  `);
  const versionOrphans = await scalar(`
    SELECT COUNT(*) AS count
    FROM learning_board_practical_versions versions
    LEFT JOIN learning_board_practicals practicals ON practicals.id = versions.practical_id
    WHERE practicals.id IS NULL
  `);
  const publishedVersionGaps = await scalar(`
    SELECT COUNT(*) AS count
    FROM learning_board_practicals practicals
    LEFT JOIN learning_board_practical_versions versions
      ON versions.practical_id = practicals.id AND versions.version = practicals.published_version
    WHERE practicals.published_version IS NOT NULL AND versions.id IS NULL
  `);
  const orphanAttempts = await scalar(`
    SELECT COUNT(*) AS count
    FROM student_practical_attempts attempts
    LEFT JOIN learning_board_practicals practicals ON practicals.id = attempts.practical_id
    WHERE practicals.id IS NULL
  `);
  const orphanProgress = await scalar(`
    SELECT COUNT(*) AS count
    FROM student_practical_progress progress
    LEFT JOIN learning_board_practicals practicals ON practicals.id = progress.practical_id
    WHERE practicals.id IS NULL
  `);
  const structuredRows = await client.execute(`
    SELECT practicals.id, practicals.generation_status
    FROM learning_board_practicals practicals
    WHERE EXISTS (SELECT 1 FROM learning_board_practical_files files WHERE files.practical_id = practicals.id)
       OR EXISTS (SELECT 1 FROM learning_board_practical_tasks tasks WHERE tasks.practical_id = practicals.id)
  `);
  const unpublishedStructuredRows = structuredRows.rows.filter((row) => row.generation_status !== 'published');
  if (duplicateSourceKeys.rows.length) addFailure(failures, `Found ${duplicateSourceKeys.rows.length} duplicate source keys.`);
  if (versionOrphans > 0) addFailure(failures, `Found ${versionOrphans} orphan practical versions.`);
  if (publishedVersionGaps > 0) addFailure(failures, `Found ${publishedVersionGaps} published practical pointers without version rows.`);
  if (orphanAttempts > 0) addFailure(failures, `Found ${orphanAttempts} orphan practical attempts.`);
  if (orphanProgress > 0) addFailure(failures, `Found ${orphanProgress} orphan practical progress rows.`);
  if (unpublishedStructuredRows.length) addFailure(failures, `Found ${unpublishedStructuredRows.length} structured practicals without published status.`);

  const identityMismatches = [];
  const hashMismatches = [];
  const missingSourceKeys = [];
  for (const row of rows) {
    const expectedSourceKey = sourceKeyFor({ courseId: row.course_id, module: row.module, chapter: row.chapter });
    if (row.source_key !== expectedSourceKey) missingSourceKeys.push(row.id);
    if (row.source_content) {
      const expectedHash = sourceHashFor({
        courseId: row.course_id,
        module: row.module,
        chapter: row.chapter,
        sourcePath: row.source_path,
        category: row.category,
        sourceContent: row.source_content,
      });
      if (row.source_hash !== expectedHash) hashMismatches.push(row.id);
    }
  }
  if (missingSourceKeys.length) addFailure(failures, `Found ${missingSourceKeys.length} practicals with invalid source keys.`);
  if (hashMismatches.length) addFailure(failures, `Found ${hashMismatches.length} practicals with source hash mismatches.`);

  const pilotResults = [];
  for (const pilot of pilotManifest.pilots) {
    const result = await client.execute({
      sql: `
        SELECT id, source_key, source_hash, generation_status, published_version
        FROM learning_board_practicals
        WHERE course_id = ? AND module = ? AND chapter = ?
      `,
      args: [pilot.courseId, pilot.module, pilot.chapter],
    });
    const row = result.rows[0];
    if (!row) {
      addFailure(failures, `Pilot ${pilot.name} is missing from the practical table.`);
      pilotResults.push({ name: pilot.name, status: 'missing' });
      continue;
    }
    const mismatches = [];
    if (row.id !== pilot.persistedPracticalId) mismatches.push('id');
    if (row.source_key !== pilot.sourceKey) mismatches.push('source_key');
    pilotResults.push({
      name: pilot.name,
      status: mismatches.length ? 'mismatch' : 'verified',
      persistedPracticalId: row.id,
      sourceKey: row.source_key,
      generationStatus: row.generation_status,
      publishedVersion: row.published_version,
    });
    if (mismatches.length) addFailure(failures, `Pilot ${pilot.name} mismatches: ${mismatches.join(', ')}.`);
  }

  const prefixCounts = await client.execute(`
    SELECT
      SUM(CASE WHEN id LIKE 'activity-%' THEN 1 ELSE 0 END) AS activity_ids,
      SUM(CASE WHEN id LIKE 'practical-%' THEN 1 ELSE 0 END) AS practical_ids,
      COUNT(*) AS total_ids
    FROM learning_board_practicals
  `);
  const versionCount = await scalar('SELECT COUNT(*) AS count FROM learning_board_practical_versions');

  return {
    practicalColumns,
    versionColumns,
    practicalCount: rows.length,
    uniqueSourceKeys: rows.length - duplicateSourceKeys.rows.length,
    missingSourceKeys: missingSourceKeys.length,
    sourceHashMismatches: hashMismatches.length,
    structuredPracticalCount: structuredRows.rows.length,
    versionCount,
    versionOrphans,
    publishedVersionGaps,
    orphanAttempts,
    orphanProgress,
    prefixCounts: prefixCounts.rows[0],
    pilotResults,
  };
}

async function main() {
  const failures = [];
  const pilotManifest = await readJson(pilotManifestPath);
  const database = await verifyDatabase(pilotManifest, failures);
  console.log(JSON.stringify({
    status: failures.length ? 'FAIL' : 'PASS',
    migration: 'practical-identity-v1',
    database,
    failures,
  }, null, 2));
  if (failures.length) process.exitCode = 1;
}

main()
  .catch((error) => {
    console.error(`Phase 3 verification failed: ${error.message}`);
    process.exitCode = 1;
  })
  .finally(() => {
    client.close();
  });