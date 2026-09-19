import 'dotenv/config';
import { createClient } from '@libsql/client';

const client = createClient({ url: process.env.DATABASE_URL || 'file:./cohortia.db', authToken: process.env.DATABASE_AUTH_TOKEN });

console.log('\n========================================');
console.log('RAW DATABASE INSPECTION');
console.log('========================================\n');

// Check table names
console.log('1. AVAILABLE TABLES:\n');
const tables = await client.execute(`
  SELECT name FROM sqlite_master WHERE type='table' ORDER BY name
`);

tables.rows.forEach(row => {
  console.log(`  - ${row.name}`);
});

// Count rows in each table
console.log('\n2. ROW COUNTS:\n');
const counts = {
  learning_board_courses: await client.execute(`SELECT COUNT(*) as count FROM learning_board_courses`),
  learning_board_chapters: await client.execute(`SELECT COUNT(*) as count FROM learning_board_chapters`),
  learning_board_screens: await client.execute(`SELECT COUNT(*) as count FROM learning_board_screens`),
};

console.log(`  learning_board_courses: ${counts.learning_board_courses.rows[0]?.count || 0}`);
console.log(`  learning_board_chapters: ${counts.learning_board_chapters.rows[0]?.count || 0}`);
console.log(`  learning_board_screens: ${counts.learning_board_screens.rows[0]?.count || 0}`);

// Sample data from each table
console.log('\n3. SAMPLE DATA FROM COURSES:\n');
const sampleCourses = await client.execute(`SELECT * FROM learning_board_courses LIMIT 2`);
console.log(JSON.stringify(sampleCourses.rows, null, 2));

console.log('\n4. SAMPLE DATA FROM CHAPTERS (FIRST 3):\n');
const sampleChapters = await client.execute(`SELECT id, course_id, module, chapter, chapter_title FROM learning_board_chapters LIMIT 3`);
console.log(JSON.stringify(sampleChapters.rows, null, 2));

console.log('\n5. SAMPLE DATA FROM SCREENS (FIRST 3):\n');
const sampleScreens = await client.execute(`SELECT screen, title, course_id, module, chapter, chapter_id FROM learning_board_screens LIMIT 3`);
console.log(JSON.stringify(sampleScreens.rows, null, 2));

// Check C++ specifically
console.log('\n6. C++ PROGRAMMING DATA:\n');
const cppCourse = await client.execute(`SELECT * FROM learning_board_courses WHERE course LIKE '%C++ Programming for Game%'`);
console.log('Course:');
console.log(JSON.stringify(cppCourse.rows[0], null, 2));

if (cppCourse.rows.length > 0) {
  const cppCourseId = cppCourse.rows[0].course_id;
  
  const cppChapters = await client.execute(`SELECT * FROM learning_board_chapters WHERE course_id = ?`, [cppCourseId]);
  console.log(`\nChapters for ${cppCourseId}: ${cppChapters.rows.length}`);
  if (cppChapters.rows.length > 0) {
    console.log(JSON.stringify(cppChapters.rows[0], null, 2));
  }
  
  const cppScreens = await client.execute(`SELECT screen, title, type, chapter_id FROM learning_board_screens WHERE course_id = ? LIMIT 3`, [cppCourseId]);
  console.log(`\nScreens for ${cppCourseId}: ${cppScreens.rows.length}`);
  if (cppScreens.rows.length > 0) {
    console.log(JSON.stringify(cppScreens.rows, null, 2));
  }
}

console.log('\n========================================\n');
process.exit(0);
