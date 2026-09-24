import 'dotenv/config';
import { createClient } from '@libsql/client';

const client = createClient({
  url: process.env.DATABASE_URL || 'file:./cohortia.db',
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

const result = await client.execute(`
  SELECT
    c.course_id,
    c.course,
    c.created_at AS course_imported_at,
    COALESCE(cat.category, 'unknown') AS category,
    ch.module,
    ch.chapter,
    ch.chapter_title,
    ch.screens_count AS expected_screens,
    COALESCE(sc.screen_count, 0) AS stored_screens
  FROM learning_board_chapters ch
  JOIN learning_board_courses c ON c.course_id = ch.course_id
  LEFT JOIN catalog_courses cat ON cat.id = ch.course_id
  LEFT JOIN (
    SELECT course_id, module, chapter, COUNT(*) AS screen_count
    FROM learning_board_screens
    GROUP BY course_id, module, chapter
  ) sc ON sc.course_id = ch.course_id
    AND sc.module = ch.module
    AND sc.chapter = ch.chapter
  WHERE COALESCE(sc.screen_count, 0) < 13
  ORDER BY c.course, ch.module, ch.chapter
`);

const rows = result.rows.map((row) => Object.fromEntries(
  Object.entries(row).map(([key, value]) => [key, typeof value === 'bigint' ? Number(value) : value]),
));
const grouped = Object.values(rows.reduce((groups, row) => {
  if (!groups[row.course_id]) groups[row.course_id] = {
    category: row.category,
    course_id: row.course_id,
    course: row.course,
    imported_at: row.course_imported_at,
    chapters: [],
  };
  groups[row.course_id].chapters.push({
    module: Number(row.module),
    chapter: Number(row.chapter),
    title: row.chapter_title,
    expected_screens: Number(row.expected_screens),
    stored_screens: Number(row.stored_screens),
  });
  return groups;
}, {}));

console.log(JSON.stringify({
  generatedAt: new Date().toISOString(),
  screenLimit: 13,
  totalChapters: rows.length,
  totalCourses: grouped.length,
  courses: grouped,
}, null, 2));
