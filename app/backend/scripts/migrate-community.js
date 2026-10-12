import 'dotenv/config';
import { createClient } from '@libsql/client';

const client = createClient({
  url: process.env.DATABASE_URL || 'file:./cohortia.db',
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

const columns = [
  ['community_posts', 'course_id TEXT'],
  ['community_posts', 'module INTEGER'],
  ['community_posts', 'chapter INTEGER'],
  ['community_posts', 'lesson_id TEXT'],
  ['community_posts', "post_type TEXT NOT NULL DEFAULT 'discussion'"],
  ['community_posts', "status TEXT NOT NULL DEFAULT 'published'"],
  ['community_posts', 'is_pinned INTEGER NOT NULL DEFAULT 0'],
  ['community_posts', 'is_locked INTEGER NOT NULL DEFAULT 0'],
  ['community_posts', 'is_solved INTEGER NOT NULL DEFAULT 0'],
  ['community_comments', "status TEXT NOT NULL DEFAULT 'published'"],
];

async function migrate() {
  await client.batch([
    `CREATE TABLE IF NOT EXISTS community_posts (id TEXT PRIMARY KEY, user_id TEXT NOT NULL, title TEXT NOT NULL, content TEXT NOT NULL, category TEXT NOT NULL, likes INTEGER NOT NULL DEFAULT 0, replies INTEGER NOT NULL DEFAULT 0, created_at TEXT NOT NULL, updated_at TEXT NOT NULL)`,
    `CREATE TABLE IF NOT EXISTS community_comments (id TEXT PRIMARY KEY, post_id TEXT NOT NULL, user_id TEXT NOT NULL, content TEXT NOT NULL, created_at TEXT NOT NULL, updated_at TEXT NOT NULL)`,
  ], 'write');
  for (const [table, definition] of columns) {
    try {
      await client.execute(`ALTER TABLE ${table} ADD COLUMN ${definition}`);
    } catch (error) {
      if (!String(error.message).toLowerCase().includes('duplicate column')) throw error;
    }
  }
  await client.batch([
    `CREATE TABLE IF NOT EXISTS community_reports (id TEXT PRIMARY KEY, reporter_user_id TEXT NOT NULL, post_id TEXT, comment_id TEXT, reason TEXT NOT NULL, details TEXT, status TEXT NOT NULL DEFAULT 'open', resolved_by_user_id TEXT, resolution TEXT, created_at TEXT NOT NULL, updated_at TEXT NOT NULL)`,
    `CREATE TABLE IF NOT EXISTS community_moderation_actions (id TEXT PRIMARY KEY, moderator_user_id TEXT NOT NULL, target_user_id TEXT, post_id TEXT, comment_id TEXT, action TEXT NOT NULL, reason TEXT, created_at TEXT NOT NULL)`,
    `CREATE TABLE IF NOT EXISTS community_bookmarks (user_id TEXT NOT NULL, post_id TEXT NOT NULL, created_at TEXT NOT NULL, PRIMARY KEY (user_id, post_id))`,
  ], 'write');
  console.log('Community migration complete.');
}

migrate().catch((error) => {
  console.error('Community migration failed:', error);
  process.exitCode = 1;
});
