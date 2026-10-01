import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { createClient } from '@libsql/client';
import { afterEach, test } from 'node:test';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildLearningBoardScreenUpsert } from '../src/lib/learningBoardScreenUpsert.js';

const backendRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const migrationScript = path.join(backendRoot, 'scripts', 'migrate-learning-board-screen-index.js');
const temporaryDatabases = [];

async function createTemporaryDatabase() {
  const databasePath = path.join(os.tmpdir(), `cohortia-screen-index-${Date.now()}-${Math.random()}.db`);
  temporaryDatabases.push(databasePath);
  const client = createClient({ url: `file:${databasePath}` });
  await client.execute(`
    CREATE TABLE learning_board_screens (
      id TEXT PRIMARY KEY,
      course_id TEXT NOT NULL,
      chapter_id TEXT NOT NULL,
      module INTEGER NOT NULL,
      chapter INTEGER NOT NULL,
      screen INTEGER NOT NULL,
      title TEXT NOT NULL,
      type TEXT NOT NULL,
      template TEXT,
      eyebrow TEXT,
      duration_seconds INTEGER,
      narrator_segment TEXT,
      narrator_text TEXT,
      narrator_duration INTEGER,
      key_idea_title TEXT,
      key_idea_text TEXT,
      content_html TEXT,
      content_css TEXT,
      content_json TEXT,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    )
  `);
  return { client, databasePath };
}

function screenInput(overrides = {}) {
  return {
    id: 'screen-course-m1-c1-s1',
    courseId: 'course',
    chapterId: 'chapter-course-m1-c1',
    module: 1,
    chapter: 1,
    screen: 1,
    title: 'Screen title',
    type: 'lesson',
    template: 'lesson',
    eyebrow: 'Chapter 1.1',
    durationSeconds: 60,
    narratorSegment: 'Narrator segment',
    narratorText: 'Narration',
    narratorDuration: 60,
    keyIdeaTitle: 'Key idea',
    keyIdeaText: 'Key idea text',
    contentHtml: '<div>Content</div>',
    contentCss: null,
    contentJSON: '{}',
    createdAt: '2026-01-01T00:00:00.000Z',
    updatedAt: '2026-01-01T00:00:00.000Z',
    ...overrides,
  };
}

afterEach(async () => {
  await Promise.all(temporaryDatabases.splice(0).map(async (databasePath) => {
    for (const suffix of ['', '-shm', '-wal']) {
      await import('node:fs/promises').then(({ unlink }) => unlink(`${databasePath}${suffix}`).catch(() => {}));
    }
  }));
});

test('screen upsert inserts once and updates an existing screen without changing its identity or creation time', async () => {
  const { client } = await createTemporaryDatabase();
  try {
    await client.execute(`
      CREATE UNIQUE INDEX learning_board_screens_course_module_chapter_screen_unique
      ON learning_board_screens(course_id, module, chapter, screen)
    `);

    await client.execute(buildLearningBoardScreenUpsert(screenInput()));
    await client.execute(buildLearningBoardScreenUpsert(screenInput({
      id: 'different-generated-id',
      title: 'Updated title',
      contentHtml: '<div>Updated</div>',
      createdAt: '2026-02-01T00:00:00.000Z',
      updatedAt: '2026-02-01T00:00:00.000Z',
    })));

    const result = await client.execute(`
      SELECT id, title, content_html, created_at, updated_at
      FROM learning_board_screens
      WHERE course_id = 'course' AND module = 1 AND chapter = 1 AND screen = 1
    `);
    assert.equal(result.rows.length, 1);
    assert.equal(result.rows[0].id, 'screen-course-m1-c1-s1');
    assert.equal(result.rows[0].title, 'Updated title');
    assert.equal(result.rows[0].content_html, '<div>Updated</div>');
    assert.equal(result.rows[0].created_at, '2026-01-01T00:00:00.000Z');
    assert.equal(result.rows[0].updated_at, '2026-02-01T00:00:00.000Z');
  } finally {
    await client.close();
  }
});

test('screen-index migration creates the unique index when identities are clean', async () => {
  const { client, databasePath } = await createTemporaryDatabase();
  await client.close();

  const result = spawnSync(process.execPath, [migrationScript], {
    cwd: backendRoot,
    env: { ...process.env, DATABASE_URL: `file:${databasePath}` },
    encoding: 'utf8',
  });
  assert.equal(result.status, 0, result.stderr);

  const migratedClient = createClient({ url: `file:${databasePath}` });
  try {
    const indexes = await migratedClient.execute("PRAGMA index_list('learning_board_screens')");
    assert.ok(indexes.rows.some((row) => row.name === 'learning_board_screens_course_module_chapter_screen_unique'));
  } finally {
    await migratedClient.close();
  }
});

test('screen-index migration refuses to change data when duplicate identities exist', async () => {
  const { client, databasePath } = await createTemporaryDatabase();
  await client.execute(`
    INSERT INTO learning_board_screens (
      id, course_id, chapter_id, module, chapter, screen, title, type, created_at, updated_at
    ) VALUES
      ('one', 'course', 'chapter', 1, 1, 1, 'One', 'lesson', 'now', 'now'),
      ('two', 'course', 'chapter', 1, 1, 1, 'Two', 'lesson', 'now', 'now')
  `);
  await client.close();

  const result = spawnSync(process.execPath, [migrationScript], {
    cwd: backendRoot,
    env: { ...process.env, DATABASE_URL: `file:${databasePath}` },
    encoding: 'utf8',
  });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /duplicate .* identities/);

  const checkClient = createClient({ url: `file:${databasePath}` });
  try {
    const rows = await checkClient.execute('SELECT COUNT(*) AS count FROM learning_board_screens');
    const indexes = await checkClient.execute("PRAGMA index_list('learning_board_screens')");
    assert.equal(Number(rows.rows[0].count), 2);
    assert.ok(!indexes.rows.some((row) => row.name === 'learning_board_screens_course_module_chapter_screen_unique'));
  } finally {
    await checkClient.close();
  }
});
