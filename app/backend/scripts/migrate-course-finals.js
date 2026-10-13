import 'dotenv/config';
import { createClient } from '@libsql/client';

const client = createClient({ url: process.env.DATABASE_URL || 'file:./cohortia.db', authToken: process.env.DATABASE_AUTH_TOKEN });

await client.execute(`CREATE TABLE IF NOT EXISTS course_capstones (
  id TEXT PRIMARY KEY, course_id TEXT NOT NULL, option_number INTEGER NOT NULL, title TEXT NOT NULL,
  description TEXT NOT NULL, requirements TEXT, stretch_goals TEXT, rubric TEXT, estimated_time TEXT,
  source_path TEXT, created_at TEXT NOT NULL, updated_at TEXT NOT NULL,
  UNIQUE(course_id, option_number)
)`);
await client.execute(`CREATE TABLE IF NOT EXISTS course_final_exams (
  id TEXT PRIMARY KEY, course_id TEXT NOT NULL UNIQUE, title TEXT NOT NULL, instructions TEXT,
  time_limit_minutes INTEGER, passing_score INTEGER NOT NULL DEFAULT 70, source_path TEXT,
  created_at TEXT NOT NULL, updated_at TEXT NOT NULL
)`);
await client.execute(`CREATE TABLE IF NOT EXISTS course_final_exam_questions (
  id TEXT PRIMARY KEY, exam_id TEXT NOT NULL, question_number INTEGER NOT NULL, section TEXT NOT NULL,
  type TEXT NOT NULL, prompt TEXT NOT NULL, answer_key TEXT, points INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL, UNIQUE(exam_id, question_number)
)`);
console.log('Course capstone and final examination tables are ready.');
client.close();
