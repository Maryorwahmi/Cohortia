import 'dotenv/config';
import {createClient} from '@libsql/client';

const client = createClient({
  url: process.env.DATABASE_URL || 'file:./cohortia.db',
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

const indexes = [
  ['enrollments_user_status_idx', 'enrollments (user_id, status)'],
  ['enrollments_user_track_idx', 'enrollments (user_id, track_id)'],
  ['progress_user_updated_idx', 'progress (user_id, updated_at)'],
  ['progress_user_lesson_idx', 'progress (user_id, lesson_id)'],
  ['learning_board_progress_user_course_idx', 'learning_board_progress (user_id, course_id)'],
  ['learning_board_progress_user_course_chapter_idx', 'learning_board_progress (user_id, course_id, module, chapter)'],
  ['student_practical_attempts_user_practical_created_idx', 'student_practical_attempts (user_id, practical_id, created_at)'],
  ['student_practical_progress_user_practical_task_idx', 'student_practical_progress (user_id, practical_id, task_id)'],
];

for (const [name, target] of indexes) {
  await client.execute(`CREATE INDEX IF NOT EXISTS ${name} ON ${target}`);
  console.log(`✓ ${name}`);
}

client.close();
console.log('Dashboard indexes are ready.');
