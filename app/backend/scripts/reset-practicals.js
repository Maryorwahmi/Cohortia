#!/usr/bin/env node
/**
 * reset-practicals.js
 *
 * Resets all generated practical labs from the database, cache, and filesystem.
 *
 * Actions performed:
 * 1. Resets generation_status to 'raw' and clears practical_json in learning_board_practicals
 * 2. Deletes all entries from practical child tables (files, tasks, tests, versions, attempts, progress)
 * 3. Deletes batch checkpoint cache (scripts/.learning-board-practical-state.json)
 * 4. Deletes generated artifacts in generated/learning-board-practicals/
 */

import 'dotenv/config';
import { rm, readdir } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { existsSync } from 'node:fs';
import { createClient } from '@libsql/client';

const databaseUrl = process.env.DATABASE_URL || 'file:./cohortia.db';
const client = createClient({ url: databaseUrl, authToken: process.env.DATABASE_AUTH_TOKEN });

async function resetDatabase() {
  console.log('🔄 Resetting practical database records...');

  // Reset published practicals back to raw state
  const updateResult = await client.execute({
    sql: `
      UPDATE learning_board_practicals
      SET
        generation_status = 'raw',
        practical_json = NULL,
        environment_json = NULL,
        safety_json = NULL,
        evidence_json = NULL,
        cleanup_json = NULL,
        generation_error = NULL,
        generated_at = NULL,
        published_version = NULL
      WHERE generation_status != 'raw'
    `,
  });
  console.log(`  ✓ Reset ${updateResult.rowsAffected} practical records back to 'raw'`);

  // Clear child tables
  const tables = [
    'learning_board_practical_files',
    'learning_board_practical_tasks',
    'learning_board_practical_tests',
    'learning_board_practical_versions',
    'student_practical_attempts',
    'student_practical_progress',
  ];

  for (const table of tables) {
    try {
      const res = await client.execute(`DELETE FROM ${table}`);
      console.log(`  ✓ Cleared table ${table} (${res.rowsAffected} rows removed)`);
    } catch (err) {
      console.warn(`  ⚠ Table ${table} delete warning: ${err.message}`);
    }
  }
}

async function clearCacheAndFiles() {
  console.log('🧹 Clearing cache and generated files...');

  const rootDir = resolve(process.cwd(), '../..');
  const cacheFile = resolve(rootDir, 'scripts', '.learning-board-practical-state.json');
  const generatedFolder = resolve(rootDir, 'generated', 'learning-board-practicals');

  if (existsSync(cacheFile)) {
    await rm(cacheFile, { force: true });
    console.log(`  ✓ Removed state cache file: ${cacheFile}`);
  } else {
    console.log(`  ℹ Cache file did not exist: ${cacheFile}`);
  }

  if (existsSync(generatedFolder)) {
    const entries = await readdir(generatedFolder);
    for (const entry of entries) {
      const entryPath = join(generatedFolder, entry);
      await rm(entryPath, { recursive: true, force: true });
      console.log(`  ✓ Removed generated folder: ${entry}`);
    }
    console.log(`  ✓ Cleared directory: ${generatedFolder}`);
  } else {
    console.log(`  ℹ Generated folder does not exist: ${generatedFolder}`);
  }
}

async function verifyState() {
  console.log('🔍 Verifying clean state...');

  const statusQuery = await client.execute(
    `SELECT generation_status, COUNT(*) as c FROM learning_board_practicals GROUP BY generation_status`
  );
  console.log('  Practical status counts:', statusQuery.rows);

  const filesCount = await client.execute(`SELECT COUNT(*) as c FROM learning_board_practical_files`);
  const tasksCount = await client.execute(`SELECT COUNT(*) as c FROM learning_board_practical_tasks`);
  const testsCount = await client.execute(`SELECT COUNT(*) as c FROM learning_board_practical_tests`);
  const versionsCount = await client.execute(`SELECT COUNT(*) as c FROM learning_board_practical_versions`);

  console.log(
    `  Child table counts -> Files: ${filesCount.rows[0].c}, Tasks: ${tasksCount.rows[0].c}, Tests: ${testsCount.rows[0].c}, Versions: ${versionsCount.rows[0].c}`
  );
}

async function main() {
  try {
    await resetDatabase();
    await clearCacheAndFiles();
    await verifyState();
    console.log('\n✅ Practical reset complete! Ready for fresh generation.');
  } catch (err) {
    console.error('❌ Error during practical reset:', err);
    process.exit(1);
  }
}

main();
