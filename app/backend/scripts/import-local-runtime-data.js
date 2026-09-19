import 'dotenv/config';
import { createClient } from '@libsql/client';

// These tables do not have a source-document importer. They contain platform
// defaults and runtime data that must be copied from the legacy local database.
// The large, source-derived tables are refreshed by the existing import scripts.
const TABLES = [
  'ai_lessons',
  'bookings',
  'careers',
  'community_comments',
  'community_event_rsvps',
  'community_events',
  'community_posts',
  'community_reactions',
  'content_sections',
  'enrollments',
  'internship_briefs',
  'internship_submissions',
  'learning_board_progress',
  'mentor_context',
  'mentors',
  'newsletter_subscriptions',
  'notifications',
  'progress',
  'project_templates',
  'student_practical_attempts',
  'student_practical_progress',
  'study_room_participants',
  'study_rooms',
  'user_activity_log',
  'user_lesson_progress',
  'user_project_submissions',
  'user_roadmaps',
  'users',
];
const BATCH_SIZE = 50;
const local = createClient({ url: 'file:./cohortia.db' });
const remote = createClient({
  url: process.env.DATABASE_URL,
  authToken: process.env.DATABASE_AUTH_TOKEN,
});
const quote = (name) => `"${name.replaceAll('"', '""')}"`;

if (!process.env.DATABASE_URL || !process.env.DATABASE_AUTH_TOKEN) {
  throw new Error('DATABASE_URL and DATABASE_AUTH_TOKEN must be set.');
}

for (const table of TABLES) {
  const localColumns = (await local.execute(`PRAGMA table_info(${quote(table)})`)).rows.map((row) => row.name);
  const columns = (await remote.execute(`PRAGMA table_info(${quote(table)})`)).rows.map((row) => row.name);
  if (localColumns.length !== columns.length || localColumns.some((column) => !columns.includes(column))) {
    throw new Error(`${table} has a different local and Turso schema; run npm run db:push first.`);
  }

  const columnList = columns.map(quote).join(', ');
  const insertSql = `INSERT OR REPLACE INTO ${quote(table)} (${columnList}) VALUES (${columns.map(() => '?').join(', ')})`;
  const total = Number((await local.execute(`SELECT COUNT(*) AS count FROM ${quote(table)}`)).rows[0].count);

  for (let offset = 0; offset < total; offset += BATCH_SIZE) {
    const rows = (await local.execute({
      sql: `SELECT ${columnList} FROM ${quote(table)} LIMIT ? OFFSET ?`,
      args: [BATCH_SIZE, offset],
    })).rows;
    await remote.batch(rows.map((row) => ({
      sql: insertSql,
      args: columns.map((column) => row[column]),
    })), 'write');
  }
  console.log(`${table}: ${total} local rows imported/updated`);
}

console.log('Local runtime-data import complete.');
