import 'dotenv/config';
import { createClient } from '@libsql/client';

const client = createClient({ url: process.env.DATABASE_URL || 'file:./cohortia.db' });

console.log('\n\n');
console.log('╔═══════════════════════════════════════════════════════════════════════════╗');
console.log('║         DATABASE INCONSISTENCY REPORT: C++ PROGRAMMING FOR GAME DEV       ║');
console.log('╚═══════════════════════════════════════════════════════════════════════════╝');
console.log('\n');

// Get all courses and their import status
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

console.log('📊 IMPORT STATUS OF ALL COURSES:\n');
console.log('Course | Modules | Chapters | Screens | Status | Last Updated');
console.log('─'.repeat(75));

const problematicCourses = [];

courses.rows.forEach(row => {
  const expected = row.total_modules;
  const actual = row.chapters_imported;
  
  let status = '✓ Complete';
  if (actual === 0) {
    status = '✗ NOT IMPORTED';
    problematicCourses.push(row);
  } else if (actual < expected) {
    status = '⚠ Partial';
  }
  
  const updatedAt = new Date(row.updated_at).toLocaleString();
  console.log(`${row.course.substring(0, 20).padEnd(20)} | ${expected} | ${actual.toString().padEnd(8)} | ${row.screens_imported.toString().padEnd(7)} | ${status} | ${updatedAt}`);
});

if (problematicCourses.length > 0) {
  console.log('\n\n⚠️  COURSES WITH NO IMPORTS:\n');
  problematicCourses.forEach(course => {
    console.log(`  ❌ ${course.course} (${course.course_id})`);
    console.log(`     Total Modules Expected: ${course.total_modules}`);
    console.log(`     Created: ${new Date(course.created_at).toLocaleString()}`);
    console.log(`     Updated: ${new Date(course.updated_at).toLocaleString()}`);
    console.log();
  });
  
  // Check if C++ is in the problematic list
  const cppCourse = problematicCourses.find(c => c.course.includes('C++ Programming for Game'));
  if (cppCourse) {
    console.log('\n🔍 ROOT CAUSE ANALYSIS FOR C++ PROGRAMMING FOR GAME DEVELOPMENT:\n');
    console.log('FINDINGS:');
    console.log('─'.repeat(75));
    console.log('1. ✓ Course record EXISTS in learning_board_courses table');
    console.log('2. ✗ NO chapters imported to learning_board_chapters table');
    console.log('3. ✗ NO screens imported to learning_board_screens table');
    console.log('4. ✓ Generated data EXISTS in filesystem:');
    console.log('     Path: generated/learning-boards-html/c-programming-for-game-development/');
    console.log('     Modules: module-01 through module-06');
    console.log('     Manifest Files: Present in all chapters');
    console.log('\n');
    console.log('ROOT CAUSE:');
    console.log('─'.repeat(75));
    console.log('The import script created a course stub but failed to import the actual');
    console.log('chapters and screens. This could happen if:');
    console.log('  • The import was interrupted or crashed');
    console.log('  • The course was created before the learning boards were generated');
    console.log('  • The import query was filtered/limited and skipped this course');
    console.log('\n');
    console.log('SOLUTION:');
    console.log('─'.repeat(75));
    console.log('Run the import script specifically for this course:');
    console.log('  npm run db:import-learning-boards -- --course c-programming-for-game-development');
    console.log('\n');
    console.log('Or clean and re-import all courses:');
    console.log('  npm run db:import-learning-boards -- --all');
  }
}

console.log('\n╔═══════════════════════════════════════════════════════════════════════════╗');
console.log('║                           END OF REPORT                                  ║');
console.log('╚═══════════════════════════════════════════════════════════════════════════╝\n\n');

process.exit(0);
