import 'dotenv/config';
import { createClient } from '@libsql/client';

const client = createClient({ url: process.env.DATABASE_URL || 'file:./cohortia.db', authToken: process.env.DATABASE_AUTH_TOKEN });

console.log('\n========================================');
console.log('API RESPONSE SIMULATION');
console.log('========================================\n');

// Simulate the API response for C++ M1C2
const courseId = 'c-programming-for-game-development';
const moduleNum = 1;
const chapterNum = 2;

// Get chapter data
const chapterData = await client.execute(`
  SELECT *
  FROM learning_board_chapters
  WHERE course_id = ? AND module = ? AND chapter = ?
  LIMIT 1
`, [courseId, moduleNum, chapterNum]);

console.log('Chapter Query Result:');
console.log(JSON.stringify(chapterData.rows[0], null, 2));

// Get screens
const screensData = await client.execute(`
  SELECT 
    screen,
    title,
    type,
    template,
    eyebrow,
    duration_seconds,
    narrator_segment,
    narrator_text,
    narrator_duration,
    key_idea_title,
    key_idea_text,
    content_html,
    content_css,
    LENGTH(content_html) as html_length
  FROM learning_board_screens
  WHERE course_id = ? AND module = ? AND chapter = ?
  ORDER BY screen
`, [courseId, moduleNum, chapterNum]);

console.log('\n\nScreens Query Result:');
console.log(`Total screens: ${screensData.rows.length}\n`);

// Show the structure mapping
screensData.rows.forEach((s, idx) => {
  console.log(`Screen ${s.screen}:`);
  console.log(`  title: "${s.title}"`);
  console.log(`  type: "${s.type}"`);
  console.log(`  narration: ${s.narrator_text ? '{ text: "...", durationSeconds: ' + s.narrator_duration + ' }' : 'null'}`);
  console.log(`  content: ${s.content_html ? '{ html: "...", css: "..." } (' + s.html_length + ' bytes)' : 'NULL ⚠'}`);
  console.log();
});

// Now let's simulate what the API would return
console.log('\n========================================');
console.log('SIMULATED API RESPONSE STRUCTURE');
console.log('========================================\n');

const responseScreens = screensData.rows.map(s => ({
  screen: s.screen,
  title: s.title,
  type: s.type,
  template: s.template,
  eyebrow: s.eyebrow,
  durationSeconds: s.duration_seconds,
  narratorSegment: s.narrator_segment,
  narration: s.narrator_text ? { text: s.narrator_text, durationSeconds: s.narrator_duration } : null,
  keyIdea: s.key_idea_title ? { title: s.key_idea_title, text: s.key_idea_text } : null,
  content: s.content_html ? { html: s.content_html?.substring(0, 100) + '...', css: s.content_css ? 'CSS present' : null } : null,
}));

console.log('First screen response:');
console.log(JSON.stringify(responseScreens[0], null, 2));

console.log('\n\nScreen 1 content field check:');
const firstScreen = responseScreens[0];
console.log('  content exists:', firstScreen.content ? '✓' : '✗');
console.log('  content.html exists:', firstScreen.content?.html ? '✓' : '✗');
console.log('  This is what the frontend checks for display\n');

// Verify the most critical issue: is content.html being sent?
console.log('========================================');
console.log('CRITICAL CHECK: Content HTML Status');
console.log('========================================\n');

const htmlStats = {
  totalScreens: screensData.rows.length,
  screensWithHtml: screensData.rows.filter(s => s.content_html && s.content_html.trim()).length,
  screensWithoutHtml: screensData.rows.filter(s => !s.content_html || !s.content_html.trim()).length,
};

console.log(`Total Screens: ${htmlStats.totalScreens}`);
console.log(`With HTML: ${htmlStats.screensWithHtml} ✓`);
console.log(`Without HTML: ${htmlStats.screensWithoutHtml} ⚠`);

if (htmlStats.screensWithoutHtml > 0) {
  console.log('\n⚠ PROBLEM FOUND: Some screens missing HTML content!');
  const missingHtml = screensData.rows.filter(s => !s.content_html || !s.content_html.trim());
  missingHtml.forEach(s => {
    console.log(`  Screen ${s.screen} (${s.type}): ${s.title}`);
  });
} else {
  console.log('\n✓ All screens have HTML content - Issue is in API mapping or frontend rendering!');
}

console.log('\n========================================\n');
process.exit(0);
