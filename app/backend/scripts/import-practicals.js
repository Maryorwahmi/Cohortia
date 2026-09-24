#!/usr/bin/env node
/**
 * import-practicals.js
 *
 * Import generated practical labs into the database.
 *
 * Usage:
 *   npm run db:import-practicals
 *   npm run db:import-practicals -- --source generated/learning-board-practicals
 */

import 'dotenv/config';
import { readdir, readFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { createClient } from '@libsql/client';
import {
  practicalIdFor,
  practicalVersionIdFor,
  sourceKeyFor,
} from '../src/lib/practicalIdentity.js';

const databaseUrl = process.env.DATABASE_URL || 'file:./cohortia.db';
const client = createClient({ url: databaseUrl, authToken: process.env.DATABASE_AUTH_TOKEN });

function getPracticalSourceDirectory() {
  const sourceArgIndex = process.argv.indexOf('--source');
  const sourceFolder = sourceArgIndex >= 0
    ? process.argv[sourceArgIndex + 1]
    : '../../generated/learning-board-practicals';
  return resolve(process.cwd(), sourceFolder);
}

function getSinglePracticalPath() {
  const practicalArgIndex = process.argv.indexOf('--practical');
  if (practicalArgIndex < 0) return null;
  const requestedPath = process.argv[practicalArgIndex + 1];
  if (!requestedPath || requestedPath.startsWith('--')) {
    throw new Error('Usage: node scripts/import-practicals.js --practical <path-to-practical.json>');
  }
  return resolve(process.cwd(), requestedPath);
}

const now = new Date().toISOString();

function parseJson(value) {
  if (!value) return {};
  try {
    const parsed = JSON.parse(value);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function jsonText(value) {
  if (value === null || value === undefined) return null;
  if (typeof value === 'string') return value;
  return JSON.stringify(value);
}

function childIdPart(value) {
  return encodeURIComponent(String(value || 'item')).replace(/%/g, '_');
}

async function ensureIdentitySchema() {
  const columns = [
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
  ];
  const tableInfo = await client.execute('PRAGMA table_info(learning_board_practicals)');
  const existingColumns = new Set(tableInfo.rows.map((row) => row.name));
  for (const [name, definition] of columns) {
    if (existingColumns.has(name)) continue;
    await client.execute(`ALTER TABLE learning_board_practicals ADD COLUMN ${name} ${definition}`);
  }
  await client.execute(`
    CREATE TABLE IF NOT EXISTS learning_board_practical_versions (
      id TEXT PRIMARY KEY,
      practical_id TEXT NOT NULL,
      version INTEGER NOT NULL,
      status TEXT NOT NULL DEFAULT 'generated',
      source_hash TEXT,
      schema_version INTEGER,
      generator_version TEXT,
      classifier_version TEXT,
      lab_type TEXT,
      practical_json TEXT,
      environment_json TEXT,
      safety_json TEXT,
      evidence_json TEXT,
      cleanup_json TEXT,
      generation_error TEXT,
      generated_at TEXT,
      published_at TEXT,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL,
      UNIQUE(practical_id, version)
    )
  `);
}

async function importPractical(practicalData) {
  const { courseId, moduleNumber, chapterNumber, practical } = practicalData;

  if (!practical || !practical.title) {
    console.warn(`⚠ Skipping practical: missing title`);
    return null;
  }

  if (!courseId) {
    console.warn(`⚠ Skipping practical: missing courseId`);
    return null;
  }

  try {
    const existing = await client.execute({
      sql: `SELECT * FROM learning_board_practicals WHERE course_id = ? AND module = ? AND chapter = ?`,
      args: [courseId, moduleNumber, chapterNumber],
    });
    const existingPractical = existing.rows[0] || null;
    const practicalId = existingPractical?.id || practicalIdFor({
      courseId,
      module: moduleNumber,
      chapter: chapterNumber,
    });
    const sourceKey = sourceKeyFor({ courseId, module: moduleNumber, chapter: chapterNumber });
    const metadata = {
      ...parseJson(existingPractical?.metadata),
      sourceActivity: practical.sourceActivity || '',
      objectives: practical.objectives || [],
      narratorGuide: practical.narratorGuide || '',
      ...practical,
    };
    const generationStatus = practical.generationStatus || 'published';
    const version = Number(practical.version || practical.practicalVersion || 1);
    const sourceHash = practical.sourceHash || existingPractical?.source_hash || metadata.sourceHash || null;
    const labType = practical.labType || existingPractical?.lab_type || metadata.labType || null;
    const schemaVersion = practical.schemaVersion || metadata.schemaVersion || null;
    const generatorVersion = practical.generatorVersion || metadata.generatorVersion || null;
    const publishedVersion = generationStatus === 'published'
      ? version
      : existingPractical?.published_version || null;
    const practicalJson = JSON.stringify(practical);
    const category = practical.category || practical.sourceCategory || metadata.category || null;
    const sourcePath = practical.source?.sourcePath || metadata.activitySourcePath || null;
    const classifierVersion = practical.generator?.classifierVersion || practical.classifierVersion || metadata.classifierVersion || null;
    const environmentJson = jsonText(practical.environment);
    const safetyJson = jsonText(practical.safety);
    const evidenceJson = jsonText(practical.evidence);
    const cleanupJson = jsonText(practical.cleanup);

    if (existingPractical) {
      await client.execute({
        sql: `
          UPDATE learning_board_practicals SET
            mode = ?, language = ?, runtime = ?, title = ?, instructions = ?, category = ?, source_path = ?,
            completion_rule = ?, metadata = ?, source_key = ?,
            source_hash = COALESCE(?, source_hash), lab_type = ?, classifier_version = ?,
            schema_version = ?, generator_version = ?, generation_status = ?,
            generation_error = ?, generated_at = ?, published_version = ?,
            practical_json = ?, environment_json = ?, safety_json = ?,
            evidence_json = ?, cleanup_json = ?, updated_at = ?
          WHERE id = ?
        `,
        args: [
          practical.mode || 'code_lab',
          practical.language || 'unknown',
          practical.runtime || 'unknown',
          practical.title,
          practical.instructions || '',
          category,
          sourcePath,
          practical.completionRule || 'all_tests_pass',
          JSON.stringify(metadata),
          sourceKey,
          sourceHash,
          labType,
          classifierVersion,
          schemaVersion,
          generatorVersion,
          generationStatus,
          practical.generationError || null,
          practical.generatedAt || now,
          publishedVersion,
          practicalJson,
          environmentJson,
          safetyJson,
          evidenceJson,
          cleanupJson,
          now,
          practicalId,
        ],
      });
    } else {
      await client.execute({
        sql: `
          INSERT INTO learning_board_practicals (
            id, course_id, module, chapter, mode, language, runtime, title,
            instructions, category, source_path, completion_rule, metadata, source_key, source_hash,
            lab_type, classifier_version, schema_version, generator_version, generation_status,
            generation_error, generated_at, published_version, practical_json,
            environment_json, safety_json, evidence_json, cleanup_json,
            created_at, updated_at
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,
        args: [
          practicalId,
          courseId,
          moduleNumber,
          chapterNumber,
          practical.mode || 'code_lab',
          practical.language || 'unknown',
          practical.runtime || 'unknown',
          practical.title,
          practical.instructions || '',
          category,
          sourcePath,
          practical.completionRule || 'all_tests_pass',
          JSON.stringify(metadata),
          sourceKey,
          sourceHash,
          labType,
          classifierVersion,
          schemaVersion,
          generatorVersion,
          generationStatus,
          practical.generationError || null,
          practical.generatedAt || now,
          publishedVersion,
          practicalJson,
          environmentJson,
          safetyJson,
          evidenceJson,
          cleanupJson,
          now,
          now,
        ],
      });
    }

    await client.execute({
      sql: `
        INSERT INTO learning_board_practical_versions (
          id, practical_id, version, status, source_hash, schema_version,
          generator_version, classifier_version, lab_type, practical_json,
          environment_json, safety_json, evidence_json, cleanup_json,
          generation_error, generated_at, published_at, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(practical_id, version) DO UPDATE SET
          status = excluded.status,
          source_hash = COALESCE(excluded.source_hash, learning_board_practical_versions.source_hash),
          schema_version = excluded.schema_version,
          generator_version = excluded.generator_version,
          classifier_version = excluded.classifier_version,
          lab_type = excluded.lab_type,
          practical_json = excluded.practical_json,
          environment_json = excluded.environment_json,
          safety_json = excluded.safety_json,
          evidence_json = excluded.evidence_json,
          cleanup_json = excluded.cleanup_json,
          generation_error = excluded.generation_error,
          generated_at = excluded.generated_at,
          published_at = excluded.published_at,
          updated_at = excluded.updated_at
      `,
      args: [
        practicalVersionIdFor(practicalId, version),
        practicalId,
        version,
        generationStatus,
        sourceHash,
        schemaVersion,
        generatorVersion,
        practical.classifierVersion || metadata.classifierVersion || null,
        labType,
        practicalJson,
        environmentJson,
        safetyJson,
        evidenceJson,
        cleanupJson,
        practical.generationError || null,
        practical.generatedAt || now,
        generationStatus === 'published' ? (practical.publishedAt || now) : null,
        now,
        now,
      ],
    });

    console.log(`${existingPractical ? '↻ Updated' : '✓ Inserted'} practical: ${practical.title} (${practical.mode})`);

    const existingFilesResult = await client.execute({
      sql: 'SELECT id, path FROM learning_board_practical_files WHERE practical_id = ?',
      args: [practicalId],
    });
    const existingFilesByPath = new Map(existingFilesResult.rows.map((file) => [file.path, file]));
    const importedFilePaths = new Set();
    if (practical.files && Array.isArray(practical.files)) {
      for (const [fileIndex, file] of practical.files.entries()) {
        const filePath = file.path || `workspace-${fileIndex + 1}.txt`;
        const existingFile = existingFilesByPath.get(filePath);
        const fileId = existingFile?.id || `${practicalId}-file-${childIdPart(filePath)}`;
        importedFilePaths.add(filePath);
        if (existingFile) {
          await client.execute({
            sql: 'UPDATE learning_board_practical_files SET content = ?, updated_at = ? WHERE id = ?',
            args: [file.content || '', now, fileId],
          });
        } else {
          await client.execute({
            sql: `INSERT INTO learning_board_practical_files (id, practical_id, path, content, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)`,
            args: [fileId, practicalId, filePath, file.content || '', now, now],
          });
        }
      }
    }
    for (const existingFile of existingFilesResult.rows) {
      if (!importedFilePaths.has(existingFile.path)) {
        await client.execute({ sql: 'DELETE FROM learning_board_practical_files WHERE id = ?', args: [existingFile.id] });
      }
    }
    console.log(`  + ${importedFilePaths.size} files`);

    const existingTasksResult = await client.execute({
      sql: 'SELECT * FROM learning_board_practical_tasks WHERE practical_id = ?',
      args: [practicalId],
    });
    const existingTasksByKey = new Map(existingTasksResult.rows.map((task) => [task.task_key, task]));
    const progressResult = await client.execute({
      sql: 'SELECT task_id FROM student_practical_progress WHERE practical_id = ?',
      args: [practicalId],
    });
    const referencedTaskIds = new Set(progressResult.rows.map((row) => row.task_id));
    const importedTaskKeys = new Set();
    const importedTaskIds = new Set();
    const tasks = Array.isArray(practical.tasks) ? practical.tasks : [];
    for (let taskIndex = 0; taskIndex < tasks.length; taskIndex++) {
      const task = tasks[taskIndex];
      const taskKey = task.id || `task-${taskIndex + 1}`;
      const existingTask = existingTasksByKey.get(taskKey);
      const taskId = existingTask?.id || `${practicalId}-task-${childIdPart(taskKey)}`;
      importedTaskKeys.add(taskKey);
      importedTaskIds.add(taskId);

      if (existingTask) {
        await client.execute({
          sql: `UPDATE learning_board_practical_tasks SET instruction = ?, required_concepts = ?, hints = ?, task_order = ?, updated_at = ? WHERE id = ?`,
          args: [
            task.instruction || '',
            JSON.stringify(task.requiredConcepts || []),
            JSON.stringify(task.hints || []),
            taskIndex,
            now,
            taskId,
          ]
        });
      } else {
        await client.execute({
          sql: `INSERT INTO learning_board_practical_tasks (id, practical_id, task_key, instruction, required_concepts, hints, task_order, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          args: [
            taskId,
            practicalId,
            taskKey,
            task.instruction || '',
            JSON.stringify(task.requiredConcepts || []),
            JSON.stringify(task.hints || []),
            taskIndex,
            now,
            now,
          ]
        });
      }

      const existingTestsResult = await client.execute({
        sql: 'SELECT * FROM learning_board_practical_tests WHERE task_id = ? ORDER BY test_order',
        args: [taskId],
      });
      const declaredChecks = new Map(
        (Array.isArray(practical.checks) ? practical.checks : [])
          .filter((check) => check && check.id)
          .map((check) => [check.id, check]),
      );
      const tests = Array.isArray(task.tests)
        ? task.tests
        : (Array.isArray(task.checkIds) ? task.checkIds.map((checkId) => declaredChecks.get(checkId)).filter(Boolean) : []);
      for (let testIndex = 0; testIndex < tests.length; testIndex++) {
        const test = tests[testIndex];
        const existingTest = existingTestsResult.rows[testIndex];
        const testId = existingTest?.id || `${taskId}-test-${testIndex + 1}`;
        const testData = test.data === undefined ? JSON.stringify(test) : jsonText(test.data);

        if (existingTest) {
          await client.execute({
            sql: 'UPDATE learning_board_practical_tests SET test_type = ?, expected = ?, test_data = ?, test_order = ? WHERE id = ?',
            args: [test.type || 'syntax', test.expected || '', testData, testIndex, testId],
          });
        } else {
          await client.execute({
            sql: `INSERT INTO learning_board_practical_tests (id, task_id, test_type, expected, test_data, test_order, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)`,
            args: [testId, taskId, test.type || 'syntax', test.expected || '', testData, testIndex, now],
          });
        }
      }
      if (existingTestsResult.rows.length > tests.length) {
        await client.execute({
          sql: 'DELETE FROM learning_board_practical_tests WHERE task_id = ? AND test_order >= ?',
          args: [taskId, tests.length],
        });
      }
    }

    for (const existingTask of existingTasksResult.rows) {
      if (importedTaskKeys.has(existingTask.task_key)) continue;
      if (referencedTaskIds.has(existingTask.id)) {
        console.warn(`  ! Preserving learner-referenced stale task ${existingTask.id}`);
        continue;
      }
      await client.execute({
        sql: 'DELETE FROM learning_board_practical_tests WHERE task_id = ?',
        args: [existingTask.id],
      });
      await client.execute({
        sql: 'DELETE FROM learning_board_practical_tasks WHERE id = ?',
        args: [existingTask.id],
      });
    }

    console.log(`  + ${tasks.length} tasks with ${tasks.reduce((sum, task) => sum + (task.tests?.length || 0), 0)} tests`);

    return practicalId;
  } catch (error) {
    console.error(`✗ Error importing practical: ${error.message}`);
    throw error;
  }
}

async function main() {
  try {
    await ensureIdentitySchema();
    const singlePracticalPath = getSinglePracticalPath();
    if (singlePracticalPath) {
      console.log(`📄 Reading practical from: ${singlePracticalPath}\n`);
      const practicalData = JSON.parse(await readFile(singlePracticalPath, 'utf8'));
      const practicalId = await importPractical(practicalData);
      if (!practicalId) throw new Error(`Practical was not imported: ${singlePracticalPath}`);
      console.log(`\n✅ Imported practical into the configured database: ${practicalId}`);
      return;
    }

    const sourceDir = getPracticalSourceDirectory();
    console.log(`📂 Reading practicals from: ${sourceDir}\n`);

    const folders = await readdir(sourceDir, { withFileTypes: true });
    const practicalFolders = folders.filter((f) => f.isDirectory() && f.name.match(/^m\d+-c\d+$/));

    if (practicalFolders.length === 0) {
      console.warn('⚠ No practicals found. Expected format: m<module>-c<chapter>');
      process.exit(0);
    }

    console.log(`Found ${practicalFolders.length} practical(s):\n`);

    let imported = 0;
    for (const folder of practicalFolders) {
      const practicalJsonPath = join(sourceDir, folder.name, 'practical.json');

      try {
        const practicalJson = await readFile(practicalJsonPath, 'utf8');
        const practicalData = JSON.parse(practicalJson);

        const practicalId = await importPractical(practicalData);
        if (practicalId) {
          imported++;
        }
      } catch (error) {
        console.error(`✗ Failed to import ${folder.name}: ${error.message}`);
      }
    }

    console.log(`\n✅ Import complete: ${imported}/${practicalFolders.length} practicals imported`);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
