import 'dotenv/config';
import { createClient } from '@libsql/client';

const client = createClient({ url: process.env.DATABASE_URL || 'file:./cohortia.db' });

console.log('\n========================================');
console.log('DETAILED C++ LOOKUP');
console.log('========================================\n');

// Find all C++ courses
const cppCourses = await client.execute(`
  SELECT * FROM learning_board_courses WHERE course LIKE '%C++ Programming%Game%'
`);

console.log('C++ Courses found:');
console.log(JSON.stringify(cppCourses.rows, null, 2));

if (cppCourses.rows.length > 0) {
  const courseId = cppCourses.rows[0].course_id;
  console.log(`\n\nUsing course_id: "${courseId}"`);
  
  // Now check chapters using this exact course_id
  const chapters = await client.execute(`
    SELECT COUNT(*) as count FROM learning_board_chapters WHERE course_id = ?
  `, [courseId]);
  
  console.log(`Chapters with course_id="${courseId}": ${chapters.rows[0]?.count || 0}`);
  
  // List first 3 chapters
  const chaptersDetail = await client.execute(`
    SELECT id, module, chapter, chapter_title FROM learning_board_chapters WHERE course_id = ? LIMIT 3
  `, [courseId]);
  
  console.log('\nFirst 3 chapters:');
  console.log(JSON.stringify(chaptersDetail.rows, null, 2));
  
  // Check for module 1 chapter 2 specifically
  const m1c2 = await client.execute(`
    SELECT * FROM learning_board_chapters WHERE course_id = ? AND module = 1 AND chapter = 2
  `, [courseId]);
  
  console.log('\n\nModule 1 Chapter 2 lookup:');
  console.log(JSON.stringify(m1c2.rows, null, 2));
  
  if (m1c2.rows.length > 0) {
    const chapterId = m1c2.rows[0].id;
    const screens = await client.execute(`
      SELECT COUNT(*) as count FROM learning_board_screens WHERE chapter_id = ?
    `, [chapterId]);
    
    console.log(`\n\nScreens in M1C2 (chapter_id="${chapterId}"): ${screens.rows[0]?.count || 0}`);
  }
}

console.log('\n========================================\n');
process.exit(0);
