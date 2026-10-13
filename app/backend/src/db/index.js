import 'dotenv/config';
import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema.js';

const client = createClient({
  url: process.env.DATABASE_URL || 'file:./cohortia.db',
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

async function ensureCourseFinalTables() {
  const statements = [
    `CREATE TABLE IF NOT EXISTS course_capstones (
      id TEXT PRIMARY KEY, course_id TEXT NOT NULL, option_number INTEGER NOT NULL, title TEXT NOT NULL,
      description TEXT NOT NULL, requirements TEXT, stretch_goals TEXT, rubric TEXT, estimated_time TEXT,
      source_path TEXT, created_at TEXT NOT NULL, updated_at TEXT NOT NULL,
      UNIQUE(course_id, option_number)
    )`,
    `CREATE TABLE IF NOT EXISTS user_course_final_progress (
      id TEXT PRIMARY KEY, user_id TEXT NOT NULL, course_id TEXT NOT NULL, selected_capstone_id TEXT,
      capstone_status TEXT NOT NULL DEFAULT 'not_started', created_at TEXT NOT NULL, updated_at TEXT NOT NULL,
      UNIQUE(user_id, course_id)
    )`,
    `CREATE TABLE IF NOT EXISTS course_final_exams (
      id TEXT PRIMARY KEY, course_id TEXT NOT NULL UNIQUE, title TEXT NOT NULL, instructions TEXT,
      time_limit_minutes INTEGER, passing_score INTEGER NOT NULL DEFAULT 70, source_path TEXT,
      created_at TEXT NOT NULL, updated_at TEXT NOT NULL
    )`,
    `CREATE TABLE IF NOT EXISTS course_final_exam_questions (
      id TEXT PRIMARY KEY, exam_id TEXT NOT NULL, question_number INTEGER NOT NULL, section TEXT NOT NULL,
      type TEXT NOT NULL, prompt TEXT NOT NULL, answer_key TEXT, points INTEGER NOT NULL DEFAULT 1,
      created_at TEXT NOT NULL, UNIQUE(exam_id, question_number)
    )`,
    `CREATE TABLE IF NOT EXISTS course_final_exam_attempts (
      id TEXT PRIMARY KEY, user_id TEXT NOT NULL, exam_id TEXT NOT NULL, course_id TEXT NOT NULL,
      attempt_number INTEGER NOT NULL, status TEXT NOT NULL DEFAULT 'in_progress',
      started_at TEXT NOT NULL, expires_at TEXT NOT NULL, submitted_at TEXT, score INTEGER,
      passed INTEGER, review_required INTEGER NOT NULL DEFAULT 0, reviewed_by TEXT, reviewer_feedback TEXT,
      reviewed_at TEXT, created_at TEXT NOT NULL, updated_at TEXT NOT NULL,
      UNIQUE(user_id, exam_id, attempt_number)
    )`,
    `CREATE TABLE IF NOT EXISTS course_final_exam_attempt_answers (
      id TEXT PRIMARY KEY, attempt_id TEXT NOT NULL, question_id TEXT NOT NULL, answer TEXT NOT NULL DEFAULT '',
      points_awarded REAL, feedback TEXT, confidence REAL, created_at TEXT NOT NULL, updated_at TEXT NOT NULL,
      UNIQUE(attempt_id, question_id)
    )`,
    `CREATE TABLE IF NOT EXISTS course_final_exam_attempt_grants (
      id TEXT PRIMARY KEY, user_id TEXT NOT NULL, exam_id TEXT NOT NULL, granted_by TEXT NOT NULL,
      reason TEXT NOT NULL, created_at TEXT NOT NULL
    )`,
    `CREATE INDEX IF NOT EXISTS course_final_exam_attempt_grants_user_exam_idx ON course_final_exam_attempt_grants (user_id, exam_id)`,
    `CREATE TABLE IF NOT EXISTS user_project_submission_files (
      id TEXT PRIMARY KEY, submission_id TEXT, user_id TEXT NOT NULL, course_id TEXT NOT NULL,
      capstone_id TEXT NOT NULL, object_key TEXT NOT NULL UNIQUE, file_name TEXT NOT NULL,
      content_type TEXT NOT NULL, byte_size INTEGER NOT NULL, upload_expires_at TEXT NOT NULL,
      created_at TEXT NOT NULL
    )`,
  ];

  for (const statement of statements) {
    await client.execute(statement);
  }

  const submissionColumns = await client.execute('PRAGMA table_info(user_project_submissions)');
  const existingSubmissionColumns = new Set(submissionColumns.rows.map((row) => row.name));
  if (!existingSubmissionColumns.has('course_id')) {
    await client.execute('ALTER TABLE user_project_submissions ADD COLUMN course_id TEXT');
  }
  if (!existingSubmissionColumns.has('evidence')) {
    await client.execute('ALTER TABLE user_project_submissions ADD COLUMN evidence TEXT');
  }

  await client.execute('UPDATE course_final_exams SET time_limit_minutes = 90 WHERE time_limit_minutes IS NULL');
}

await ensureCourseFinalTables().catch((error) => {
  console.error('[db] Failed to initialize course-final tables:', error);
});

export const db = drizzle(client, { schema });
