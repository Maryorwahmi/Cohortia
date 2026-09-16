import 'dotenv/config';
import { createClient } from '@libsql/client';

const client = createClient({ url: process.env.DATABASE_URL || 'file:./cohortia.db', authToken: process.env.DATABASE_AUTH_TOKEN });

// First, find the correct course ID for C++
const courses = await client.execute(`
  SELECT course_id, course 
  FROM learning_board_courses
  WHERE course LIKE '%C++ Programming%Game%'
`);

console.log('Found courses:');
console.log(JSON.stringify(courses.rows, null, 2));

if (courses.rows.length === 0) {
  console.log('\nNo C++ courses found. Let me check all courses:');
  const allCourses = await client.execute(`SELECT course_id, course FROM learning_board_courses`);
  console.log(JSON.stringify(allCourses.rows, null, 2));
  process.exit(0);
}

const courseId = courses.rows[0].course_id;
console.log(`\nUsing course_id: ${courseId}\n`);

// Get chapters for this course
const chapters = await client.execute(`
  SELECT * FROM learning_board_chapters
  WHERE course_id = ?
  ORDER BY module, chapter
`, [courseId]);

console.log(`Chapters found: ${chapters.rows.length}`);
console.log(JSON.stringify(chapters.rows.map(c => ({ module: c.module, chapter: c.chapter, title: c.chapter_title })), null, 2));

if (chapters.rows.length === 0) {
  console.log('\nNo chapters found!');
  process.exit(0);
}

// Get M1C2
const m1c2 = chapters.rows.find(c => c.module === 1 && c.chapter === 2);
if (!m1c2) {
  console.log('\nModule 1 Chapter 2 not found');
  process.exit(0);
}

console.log(`\n\nFound M1C2: ${m1c2.chapter_title}`);
console.log(`Chapter ID: ${m1c2.id}`);

// Get screens
const screens = await client.execute(`
  SELECT 
    screen,
    title,
    type,
    narrator_text,
    LENGTH(content_html) as html_length,
    content_html IS NOT NULL AND content_html != '' as has_html
  FROM learning_board_screens
  WHERE chapter_id = ?
  ORDER BY screen
`, [m1c2.id]);

console.log(`\nScreens in M1C2: ${screens.rows.length}`);
screens.rows.forEach(s => {
  console.log(`  Screen ${s.screen}: ${s.type} - "${s.title}" - HTML: ${s.has_html ? '✓ ' + s.html_length + ' bytes' : '✗ MISSING'}`);
});

process.exit(0);
