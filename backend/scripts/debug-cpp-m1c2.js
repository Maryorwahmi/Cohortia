import 'dotenv/config';
import { createClient } from '@libsql/client';

const client = createClient({ url: process.env.DATABASE_URL || 'file:./cohortia.db', authToken: process.env.DATABASE_AUTH_TOKEN });

console.log('\n========================================');
console.log('DETAILED C++ MODULE 1 CHAPTER 2 ANALYSIS');
console.log('========================================\n');

// Get detailed screen information for C++ M1C2
const screens = await client.execute(`
  SELECT 
    lbs.id,
    lbs.screen,
    lbs.type,
    lbs.title,
    lbs.narrator_text,
    lbs.narrator_duration,
    lbs.content_html,
    lbs.content_json,
    lbs.key_idea_title,
    lbs.key_idea_text,
    LENGTH(lbs.content_html) as html_length,
    CASE WHEN lbs.content_html IS NULL OR lbs.content_html = '' THEN '❌ EMPTY' ELSE '✓ EXISTS' END as html_status
  FROM learning_board_screens lbs
  JOIN learning_board_chapters lbch ON lbs.chapter_id = lbch.id
  JOIN learning_board_courses lbc ON lbs.course_id = lbc.course_id
  WHERE lbc.course LIKE '%C++ Programming for Game Development%'
    AND lbch.module = 1
    AND lbch.chapter = 2
  ORDER BY lbs.screen
`);

console.log('C++ Programming for Game Development - Module 1, Chapter 2\n');
console.log('Screen Breakdown:\n');

screens.rows.forEach((screen, idx) => {
  console.log(`Screen ${screen.screen} [${screen.type}]:`);
  console.log(`  Title: ${screen.title}`);
  console.log(`  HTML Status: ${screen.html_status} (${screen.html_length} bytes)`);
  console.log(`  Narrator Duration: ${screen.narrator_duration || 0}s`);
  
  if (screen.narrator_text) {
    const preview = screen.narrator_text.substring(0, 80);
    console.log(`  Narrator: "${preview}..."`);
  }
  
  if (screen.key_idea_title) {
    console.log(`  Key Idea: ${screen.key_idea_title}`);
  }
  
  // Show first 200 chars of HTML
  if (screen.content_html) {
    const htmlPreview = screen.content_html.substring(0, 150);
    console.log(`  HTML Preview: ${htmlPreview}...`);
  }
  
  console.log();
});

// Check for empty or null content_html
console.log('\n========================================');
console.log('ISSUE DETECTION:\n');

const emptyHtml = screens.rows.filter(s => !s.content_html || s.content_html.trim() === '');
if (emptyHtml.length > 0) {
  console.log(`⚠ WARNING: ${emptyHtml.length} screens have no/empty HTML content:\n`);
  emptyHtml.forEach(s => {
    console.log(`  - Screen ${s.screen} (${s.type}): ${s.title}`);
  });
} else {
  console.log('✓ All screens have HTML content');
}

// Check for missing titles or content
console.log('\n');
const missingData = screens.rows.filter(s => !s.title || !s.narrator_text);
if (missingData.length > 0) {
  console.log(`⚠ WARNING: ${missingData.length} screens missing title or narrator text:\n`);
  missingData.forEach(s => {
    console.log(`  - Screen ${s.screen}: Missing ${!s.title ? 'TITLE' : ''} ${!s.narrator_text ? 'NARRATOR' : ''}`);
  });
} else {
  console.log('✓ All screens have title and narrator text');
}

// Get the course_id for potential manifest issues
console.log('\n========================================');
console.log('MANIFEST DATA CHECK:\n');

const manifestCheck = await client.execute(`
  SELECT 
    lbc.course_id,
    lbch.id as chapter_id,
    lbch.manifest_data,
    lbch.module,
    lbch.chapter
  FROM learning_board_chapters lbch
  JOIN learning_board_courses lbc ON lbch.course_id = lbc.course_id
  WHERE lbc.course LIKE '%C++ Programming for Game Development%'
    AND lbch.module = 1
    AND lbch.chapter = 2
`);

if (manifestCheck.rows.length > 0) {
  const row = manifestCheck.rows[0];
  console.log(`Course ID: ${row.course_id}`);
  console.log(`Chapter ID: ${row.chapter_id}\n`);
  
  if (row.manifest_data) {
    try {
      const manifest = JSON.parse(row.manifest_data);
      console.log(`Manifest has ${manifest.screens?.length || 0} screens`);
      
      // Check screen integrity
      const screensWithoutContent = manifest.screens?.filter(s => !s.content || (!s.content.html && !s.content.text));
      if (screensWithoutContent?.length > 0) {
        console.log(`\n⚠ ${screensWithoutContent.length} screens in manifest missing content:\n`);
        screensWithoutContent.forEach((s, idx) => {
          console.log(`  - Screen ${idx + 1}: ${s.type} - ${s.title || 'No title'}`);
        });
      } else {
        console.log('✓ All manifest screens have content');
      }
    } catch (e) {
      console.log(`⚠ Error parsing manifest: ${e.message}`);
    }
  }
}

console.log('\n========================================\n');
process.exit(0);
