#!/usr/bin/env node

import 'dotenv/config';
import { createClient } from '@libsql/client';
import { practicalVersionIdFor, sourceHashFor, sourceKeyFor } from '../src/lib/practicalIdentity.js';

const databaseUrl = process.env.DATABASE_URL || 'file:./cohortia.db';
const client = createClient({ url: databaseUrl, authToken: process.env.DATABASE_AUTH_TOKEN });

const practicalColumns = [
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

const versionColumns = [
  ['status', "TEXT NOT NULL DEFAULT 'generated'"],
  ['source_hash', 'TEXT'],
  ['schema_version', 'INTEGER'],
  ['generator_version', 'TEXT'],
  ['classifier_version', 'TEXT'],
  ['lab_type', 'TEXT'],
  ['practical_json', 'TEXT'],
  ['environment_json', 'TEXT'],
  ['safety_json', 'TEXT'],
  ['evidence_json', 'TEXT'],
  ['cleanup_json', 'TEXT'],
  ['generation_error', 'TEXT'],
  ['generated_at', 'TEXT'],
  ['published_at', 'TEXT'],
];

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

async function tableColumns(tableName) {
  const result = await client.execute({
    sql: `PRAGMA table_info(${tableName})`,
    args: [],
  });
  return new Set(result.rows.map((row) => row.name));
}

async function addMissingColumns(tableName, columns) {
  const existingColumns = await tableColumns(tableName);
  for (const [name, definition] of columns) {
    if (existingColumns.has(name)) continue;
    await client.execute(`ALTER TABLE ${tableName} ADD COLUMN ${name} ${definition}`);
  }
}

async function ensureSchema() {
  await addMissingColumns('learning_board_practicals', practicalColumns);
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
  await addMissingColumns('learning_board_practical_versions', versionColumns);
  await client.execute(`
    CREATE UNIQUE INDEX IF NOT EXISTS learning_board_practicals_source_key_unique
    ON learning_board_practicals(source_key)
  `);
  await client.execute(`
    CREATE UNIQUE INDEX IF NOT EXISTS learning_board_practical_versions_practical_version_unique
    ON learning_board_practical_versions(practical_id, version)
  `);
}

async function structuredPracticalIds() {
  const result = await client.execute(`
    SELECT practical_id FROM learning_board_practical_files
    UNION
    SELECT practical_id FROM learning_board_practical_tasks
  `);
  return new Set(result.rows.map((row) => row.practical_id));
}

function hasStructuredMetadata(metadata) {
  return (Array.isArray(metadata.files) && metadata.files.length > 0)
    || (Array.isArray(metadata.tasks) && metadata.tasks.length > 0);
}

function identityInputFor(row) {
  return {
    courseId: row.course_id,
    module: row.module,
    chapter: row.chapter,
    sourcePath: row.source_path,
    category: row.category,
    sourceContent: row.source_content,
  };
}

function practicalMetadataFor(row, metadata, hasStructuredData) {
  const currentGenerationStatus = row.generation_status || 'raw';
  const generationStatus = hasStructuredData && currentGenerationStatus === 'raw'
    ? 'published'
    : currentGenerationStatus;

  return {
    sourceHash: sourceHashFor(identityInputFor(row)) || metadata.sourceHash || row.source_hash || null,
    labType: row.lab_type || metadata.labType || null,
    classifierVersion: row.classifier_version || metadata.classifierVersion || null,
    schemaVersion: row.schema_version ?? metadata.schemaVersion ?? null,
    generatorVersion: row.generator_version || metadata.generatorVersion || null,
    generationStatus,
    generationError: row.generation_error || metadata.generationError || null,
    generatedAt: row.generated_at || metadata.generatedAt || (hasStructuredData ? row.updated_at : null),
    publishedVersion: row.published_version ?? (hasStructuredData ? 1 : null),
    practicalJson: row.practical_json || (hasStructuredData ? row.metadata : null),
    environmentJson: row.environment_json || jsonText(metadata.environment),
    safetyJson: row.safety_json || jsonText(metadata.safety),
    evidenceJson: row.evidence_json || jsonText(metadata.evidence),
    cleanupJson: row.cleanup_json || jsonText(metadata.cleanup),
  };
}

function updateStatement(row, identity, metadata, now) {
  return {
    sql: `
      UPDATE learning_board_practicals SET
        source_key = ?, source_hash = ?, lab_type = ?, classifier_version = ?,
        schema_version = ?, generator_version = ?, generation_status = ?,
        generation_error = ?, generated_at = ?, published_version = ?,
        practical_json = ?, environment_json = ?, safety_json = ?,
        evidence_json = ?, cleanup_json = ?, updated_at = ?
      WHERE id = ?
    `,
    args: [
      sourceKeyFor(identityInputFor(row)),
      identity.sourceHash,
      identity.labType,
      identity.classifierVersion,
      identity.schemaVersion,
      identity.generatorVersion,
      identity.generationStatus,
      identity.generationError,
      identity.generatedAt,
      identity.publishedVersion,
      identity.practicalJson,
      identity.environmentJson,
      identity.safetyJson,
      identity.evidenceJson,
      identity.cleanupJson,
      now,
      row.id,
    ],
  };
}

function versionStatement(row, identity, metadata, now) {
  const version = identity.publishedVersion;
  const practicalId = row.id;
  const practicalJson = identity.practicalJson || row.metadata || null;
  return {
    sql: `
      INSERT INTO learning_board_practical_versions (
        id, practical_id, version, status, source_hash, schema_version,
        generator_version, classifier_version, lab_type, practical_json,
        environment_json, safety_json, evidence_json, cleanup_json,
        generation_error, generated_at, published_at, created_at, updated_at
      ) VALUES (?, ?, ?, 'published', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(practical_id, version) DO NOTHING
    `,
    args: [
      practicalVersionIdFor(practicalId, version),
      practicalId,
      version,
      identity.sourceHash,
      identity.schemaVersion,
      identity.generatorVersion,
      identity.classifierVersion,
      identity.labType,
      practicalJson,
      identity.environmentJson,
      identity.safetyJson,
      identity.evidenceJson,
      identity.cleanupJson,
      identity.generationError,
      identity.generatedAt,
      identity.generatedAt || now,
      now,
      now,
    ],
  };
}

async function main() {
  await ensureSchema();
  const now = new Date().toISOString();
  const structuredIds = await structuredPracticalIds();
  const practicalResult = await client.execute('SELECT * FROM learning_board_practicals ORDER BY course_id, module, chapter');
  const updates = [];
  const versions = [];
  let sourceRows = 0;
  let publishedRows = 0;
  let hashedRows = 0;

  for (const row of practicalResult.rows) {
    const metadata = parseJson(row.metadata);
    const hasStructuredData = structuredIds.has(row.id) || hasStructuredMetadata(metadata);
    const identity = practicalMetadataFor(row, metadata, hasStructuredData);
    updates.push(updateStatement(row, identity, metadata, now));
    if (identity.sourceHash) hashedRows += 1;
    if (hasStructuredData) {
      publishedRows += 1;
      versions.push(versionStatement(row, identity, metadata, now));
    } else {
      sourceRows += 1;
    }
  }

  for (let index = 0; index < updates.length; index += 100) {
    await client.batch(updates.slice(index, index + 100), 'write');
  }
  if (versions.length > 0) await client.batch(versions, 'write');

  console.log(JSON.stringify({
    status: 'PASS',
    practicalRows: practicalResult.rows.length,
    sourceRows,
    publishedRows,
    hashedRows,
    versionRowsSeeded: versions.length,
    migration: 'practical-identity-v1',
  }, null, 2));
}

main()
  .catch((error) => {
    console.error(`Practical identity migration failed: ${error.message}`);
    process.exitCode = 1;
  })
  .finally(() => {
    client.close();
  });