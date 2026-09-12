import 'dotenv/config';
import { createClient } from '@libsql/client';

const client = createClient({ url: process.env.DATABASE_URL || 'file:./cohortia.db' });

console.log('\n========================================');
console.log('RUNNING EXACT DIAGNOSTIC QUERY');
console.log('========================================\n');

// This is the exact query from diagnostic-report.js
const courses = await client.execute(`
  SELECT 
    lbc.course_id,
    lbc.course,
    lbc.total_modules,
    lbc.created_at,
    lbc.updated_at,
    COUNT(DISTINCT lbch.id) as chapters_imported,
    COUNT(DISTINCT lbs.id) as screens_imported
  FROM learning_board_courses lbc
  LEFT JOIN learning_board_chapters lbch ON lbc.course_id = lbch.course_id
  LEFT JOIN learning_board_screens lbs ON lbc.course_id = lbs.course_id
  GROUP BY lbc.course_id
  ORDER BY lbc.updated_at DESC
`);

console.log('All courses:');
const cppRow = courses.rows.find(r => r.course.includes('C++ Programming for Game'));
if (cppRow) {
  console.log('Found C++ row:');
  console.log(JSON.stringify(cppRow, null, 2));
  
  // Now let's trace this - get chapters for this course_id specifically
  console.log('\n\nDirect chapters lookup:');
  const chapters = await client.execute(`
    SELECT id, course_id, module, chapter FROM learning_board_chapters 
    WHERE course_id = ?
  `, [cppRow.course_id]);
  
  console.log(`Result: ${chapters.rows.length} chapters`);
  if (chapters.rows.length > 0) {
    console.log(JSON.stringify(chapters.rows.slice(0, 3), null, 2));
  }
}

console.log('\n\n========================================\n');
process.exit(0);
