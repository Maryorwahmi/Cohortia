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
    c.total_modules,
    c.created_at AS imported_at,
    c.updated_at AS last_updated_at,
    COALESCE(cat.category, 'unknown') AS category,
    cat.subcategory,
    COUNT(DISTINCT ch.id) AS chapters,
    COALESCE(SUM(ch.screens_count), 0) AS expected_screens,
    COALESCE(SUM(sc.screen_count), 0) AS stored_screens,
    SUM(CASE
      WHEN ch.id IS NOT NULL
        AND ch.screens_count > 0
        AND ch.screens_count = sc.screen_count
      THEN 0 ELSE 1
    END) AS incomplete_chapters
  FROM learning_board_courses c
  LEFT JOIN catalog_courses cat ON cat.id = c.course_id
  LEFT JOIN learning_board_chapters ch ON ch.course_id = c.course_id
  LEFT JOIN (
    SELECT course_id, module, chapter, COUNT(*) AS screen_count
    FROM learning_board_screens
    GROUP BY course_id, module, chapter
  ) sc ON sc.course_id = ch.course_id
    AND sc.module = ch.module
    AND sc.chapter = ch.chapter
  GROUP BY c.course_id, c.course, c.total_modules
  ORDER BY c.course
`);

const chapterResult = await client.execute(`
  SELECT
    c.course_id,
    c.course,
    c.created_at AS course_imported_at,
    c.updated_at AS course_last_updated_at,
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
const complete = rows.filter((row) => Number(row.chapters) > 0
  && Number(row.incomplete_chapters) === 0
  && Number(row.expected_screens) === Number(row.stored_screens));
const below13 = rows.filter((row) => Number(row.stored_screens) < 13);
const chaptersBelow13 = chapterResult.rows.map((row) => Object.fromEntries(
  Object.entries(row).map(([key, value]) => [key, typeof value === 'bigint' ? Number(value) : value]),
));
const byCategory = Object.values(rows.reduce((groups, row) => {
  const key = row.category || 'unknown';
  if (!groups[key]) groups[key] = {
    category: key,
    courses: 0,
    totalScreens: 0,
    completeCourses: 0,
  };
  groups[key].courses += 1;
  groups[key].totalScreens += Number(row.stored_screens);
  if (Number(row.incomplete_chapters) === 0 && Number(row.chapters) > 0) groups[key].completeCourses += 1;
  return groups;
}, {})).sort((left, right) => left.category.localeCompare(right.category));

console.log(JSON.stringify({
  generatedAt: new Date().toISOString(),
  definition: 'Complete means every imported chapter has exactly its expected screens_count stored.',
  totals: { courses: rows.length, complete: complete.length, below13: below13.length },
  courses: rows,
  complete,
  below13,
  chaptersBelow13,
  byCategory,
}, null, 2));