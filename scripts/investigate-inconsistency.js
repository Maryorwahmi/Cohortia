import 'dotenv/config';
import { createClient } from '@libsql/client';

const client = createClient({ url: process.env.DATABASE_URL || 'file:./cohortia.db', authToken: process.env.DATABASE_AUTH_TOKEN });

console.log('\n========================================');
console.log('INVESTIGATING DATABASE INCONSISTENCY');
console.log('========================================\n');

// Check courses
console.log('1. COURSES IN DATABASE:\n');
const courses = await client.execute(`
  SELECT course_id, course, total_modules FROM learning_board_courses
  ORDER BY course
`);
console.log(`Total courses: ${courses.rows.length}`);

// For each course, check chapters and screens
console.log('\n2. COURSE DETAIL BREAKDOWN:\n');
for (const course of courses.rows) {
  const chapters = await client.execute(`
    SELECT COUNT(*) as count FROM learning_board_chapters WHERE course_id = ?
  `, [course.course_id]);
  
  const screens = await client.execute(`
    SELECT COUNT(*) as count FROM learning_board_screens WHERE course_id = ?
  `, [course.course_id]);
  
  const chapterCount = chapters.rows[0]?.count || 0;
  const screenCount = screens.rows[0]?.count || 0;
  
  if (chapterCount === 0 && screenCount > 0) {
    console.log(`⚠ INCONSISTENCY: ${course.course} (${course.course_id})`);
    console.log(`   Chapters: ${chapterCount}, Screens: ${screenCount}`);
    console.log(`   -> Screens without chapters!\n`);
  } else if (chapterCount > 0) {
    console.log(`✓ ${course.course}`);
    console.log(`   Chapters: ${chapterCount}, Screens: ${screenCount}\n`);
  }
}

// Check for orphaned screens
console.log('\n3. CHECKING FOR ORPHANED SCREENS:\n');
const orphanedScreens = await client.execute(`
  SELECT 
    lbs.course_id,
    COUNT(*) as count
  FROM learning_board_screens lbs
  LEFT JOIN learning_board_chapters lbc ON lbs.chapter_id = lbc.id
  WHERE lbc.id IS NULL
  GROUP BY lbs.course_id
`);

if (orphanedScreens.rows.length > 0) {
  console.log(`Found ${orphanedScreens.rows.length} courses with orphaned screens:\n`);
  orphanedScreens.rows.forEach(row => {
    console.log(`  ${row.course_id}: ${row.count} orphaned screens`);
  });
  
  // Show details for first course
  const firstCourseId = orphanedScreens.rows[0].course_id;
  console.log(`\n  Details for ${firstCourseId}:`);
  
  const orphanDetails = await client.execute(`
    SELECT 
      lbs.module,
      lbs.chapter,
      COUNT(*) as screen_count
    FROM learning_board_screens lbs
    LEFT JOIN learning_board_chapters lbc ON lbs.chapter_id = lbc.id
    WHERE lbc.id IS NULL AND lbs.course_id = ?
    GROUP BY lbs.module, lbs.chapter
    ORDER BY lbs.module, lbs.chapter
  `, [firstCourseId]);
  
  orphanDetails.rows.forEach(row => {
    console.log(`    M${row.module}C${row.chapter}: ${row.screen_count} screens (NO CHAPTER RECORD)`);
  });
} else {
  console.log('✓ No orphaned screens found');
}

// Check if chapter_id is NULL in any screens
console.log('\n4. CHECKING CHAPTER_ID VALUES:\n');
const nullChapterIds = await client.execute(`
  SELECT 
    course_id,
    module,
    chapter,
    COUNT(*) as count
  FROM learning_board_screens
  WHERE chapter_id IS NULL OR chapter_id = ''
  GROUP BY course_id, module, chapter
`);

if (nullChapterIds.rows.length > 0) {
  console.log(`⚠ Found ${nullChapterIds.rows.length} screen groups with NULL/empty chapter_id:\n`);
  nullChapterIds.rows.forEach(row => {
    console.log(`  ${row.course_id} - M${row.module}C${row.chapter}: ${row.count} screens`);
  });
} else {
  console.log('✓ All screens have valid chapter_id values');
}

console.log('\n========================================\n');
process.exit(0);
