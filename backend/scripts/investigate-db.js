import 'dotenv/config';
import { createClient } from '@libsql/client';

const client = createClient({ url: process.env.DATABASE_URL || 'file:./cohortia.db' });

console.log('\n========================================');
console.log('DATABASE INVESTIGATION REPORT');
console.log('========================================\n');

// Get all courses with screen counts
console.log('1. COURSES WITH SCREEN COVERAGE:\n');
const coursesResult = await client.execute(`
  SELECT 
    lbc.course_id, 
    lbc.course, 
    lbc.total_modules,
    COUNT(DISTINCT lbc.id) as chapters_total,
    COUNT(DISTINCT CASE WHEN lbs.id IS NOT NULL THEN lbc.id END) as chapters_with_screens,
    COUNT(DISTINCT lbs.id) as total_screens
  FROM learning_board_courses lbc
  LEFT JOIN learning_board_chapters lbch ON lbc.course_id = lbch.course_id
  LEFT JOIN learning_board_screens lbs ON lbch.id = lbs.chapter_id
  GROUP BY lbc.course_id
  ORDER BY lbc.course
`);

coursesResult.rows.forEach(row => {
  const coverage = row.chapters_with_screens > 0 ? `${row.chapters_with_screens}/${row.chapters_total}` : '0/0';
  console.log(`  ✓ ${row.course}`);
  console.log(`    - Modules: ${row.total_modules}, Chapters with screens: ${coverage}, Total screens: ${row.total_screens}\n`);
});

// Check for missing screens
console.log('\n2. CHAPTERS WITH NO SCREENS:\n');
const missingScreens = await client.execute(`
  SELECT 
    lbc.course,
    lbch.module,
    lbch.chapter,
    lbch.chapter_title,
    COUNT(lbs.id) as screen_count
  FROM learning_board_chapters lbch
  LEFT JOIN learning_board_courses lbc ON lbch.course_id = lbc.course_id
  LEFT JOIN learning_board_screens lbs ON lbch.id = lbs.chapter_id
  GROUP BY lbch.id
  HAVING COUNT(lbs.id) = 0
  ORDER BY lbc.course, lbch.module, lbch.chapter
`);

if (missingScreens.rows.length > 0) {
  missingScreens.rows.forEach(row => {
    console.log(`  ⚠ ${row.course} - Module ${row.module}, Chapter ${row.chapter}`);
    console.log(`    Title: ${row.chapter_title}\n`);
  });
} else {
  console.log('  ✓ All chapters have screens\n');
}

// Specific check for C++ module 1 chapter 2
console.log('\n3. INVESTIGATING C++ PROGRAMMING FOR GAME DEVELOPMENT - Module 1, Chapter 2:\n');
const cppCheck = await client.execute(`
  SELECT 
    lbc.course_id,
    lbc.course,
    lbch.id as chapter_id,
    lbch.module,
    lbch.chapter,
    lbch.chapter_title,
    lbch.manifest_data,
    COUNT(lbs.id) as screen_count,
    GROUP_CONCAT(lbs.type) as screen_types
  FROM learning_board_courses lbc
  LEFT JOIN learning_board_chapters lbch ON lbc.course_id = lbch.course_id
  LEFT JOIN learning_board_screens lbs ON lbch.id = lbs.chapter_id
  WHERE lbc.course LIKE '%C++ Programming%' 
    AND lbch.module = 1 
    AND lbch.chapter = 2
  GROUP BY lbch.id
`);

if (cppCheck.rows.length > 0) {
  const row = cppCheck.rows[0];
  console.log(`  Course: ${row.course}`);
  console.log(`  Chapter: Module ${row.module}, Chapter ${row.chapter}`);
  console.log(`  Title: ${row.chapter_title}`);
  console.log(`  Screens Count: ${row.screen_count}`);
  if (row.screen_count > 0) {
    console.log(`  Screen Types: ${row.screen_types}\n`);
  } else {
    console.log(`  ⚠ NO SCREENS FOUND!\n`);
  }
  
  if (row.manifest_data) {
    const manifest = JSON.parse(row.manifest_data);
    console.log(`  Manifest Screens: ${manifest.screens?.length || 0}`);
    if (manifest.screens && manifest.screens.length > 0) {
      console.log(`  Manifest Screen Types: ${manifest.screens.map(s => s.type).join(', ')}\n`);
      console.log(`  Screen Details:`);
      manifest.screens.forEach((screen, idx) => {
        console.log(`    Screen ${idx + 1}: ${screen.type} - ${screen.title || 'No title'}`);
        if (screen.narration) {
          console.log(`      Narrator: ${screen.narration.text?.substring(0, 50)}...` || 'No text');
        }
      });
    }
  }
} else {
  console.log('  ⚠ C++ Programming for Game Development not found\n');
}

// Check for narrator without screens consistency
console.log('\n4. SCREENS WITH NARRATOR BUT MISSING HTML:\n');
const narratorNoHtml = await client.execute(`
  SELECT 
    lbs.id,
    lbs.course_id,
    lbs.module,
    lbs.chapter,
    lbs.screen,
    lbs.type,
    lbs.narrator_text,
    lbs.content_html
  FROM learning_board_screens lbs
  WHERE lbs.narrator_text IS NOT NULL 
    AND lbs.narrator_text != ''
    AND (lbs.content_html IS NULL OR lbs.content_html = '')
  LIMIT 10
`);

if (narratorNoHtml.rows.length > 0) {
  console.log(`  Found ${narratorNoHtml.rows.length} screens with narrator but missing HTML:\n`);
  narratorNoHtml.rows.forEach(row => {
    console.log(`  ⚠ Course: ${row.course_id}, M${row.module}C${row.chapter}S${row.screen}`);
    console.log(`    Type: ${row.type}`);
    console.log(`    Narrator: "${row.narrator_text?.substring(0, 60)}..."\n`);
  });
} else {
  console.log('  ✓ All screens with narrators have HTML content\n');
}

console.log('\n========================================\n');
process.exit(0);
