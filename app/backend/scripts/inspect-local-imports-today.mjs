import 'dotenv/config';
import { createClient } from '@libsql/client';

const database = createClient({url: 'file:./cohortia.db'});
const turso = createClient({url: process.env.DATABASE_URL, authToken: process.env.DATABASE_AUTH_TOKEN});
const targetDate = '2026-10-01';
const tables = (await database.execute(
  "SELECT name FROM sqlite_master WHERE type = 'table' AND name NOT LIKE 'sqlite_%' ORDER BY name",
)).rows.map((row) => row.name);

console.log(`Local database tables: ${tables.join(', ')}`);
for (const table of tables) {
  const columns = (await database.execute(`PRAGMA table_info("${table.replaceAll('"', '""')}")`)).rows.map((row) => row.name);
  const dateColumns = columns.filter((column) => /date|time|created|updated|imported/i.test(column));
  for (const column of dateColumns) {
    const safeTable = table.replaceAll('"', '""');
    const safeColumn = column.replaceAll('"', '""');
    const result = await database.execute({
      sql: `SELECT COUNT(*) AS count FROM "${safeTable}" WHERE substr(CAST("${safeColumn}" AS TEXT), 1, 10) = ?`,
      args: [targetDate],
    });
    if (Number(result.rows[0].count) > 0) {
      console.log(`TODAY ${table}.${column}: ${result.rows[0].count}`);
      if (columns.includes('course_id')) {
        const groups = await database.execute({
          sql: `SELECT course_id, COUNT(*) AS count FROM "${safeTable}" WHERE substr(CAST("${safeColumn}" AS TEXT), 1, 10) = ? GROUP BY course_id ORDER BY course_id`,
          args: [targetDate],
        });
        console.log(`COURSE GROUPS ${table}:`, JSON.stringify(groups.rows));
      }
    }
  }
}

const changedChapters = await database.execute({
  sql: `SELECT course_id, module, chapter, chapter_title, created_at, updated_at
    FROM learning_board_chapters
    WHERE substr(created_at, 1, 10) <> ? AND substr(updated_at, 1, 10) = ?
    ORDER BY course_id, module, chapter`,
  args: [targetDate, targetDate],
});
console.log('EXISTING CHAPTERS UPDATED TODAY:', JSON.stringify(changedChapters.rows));

const courseIds = (await database.execute({
  sql: 'SELECT course_id FROM learning_board_courses WHERE substr(updated_at, 1, 10) = ? ORDER BY course_id',
  args: [targetDate],
})).rows.map((row) => row.course_id);
console.log('TODAY COURSE IDS:', JSON.stringify(courseIds));
const targetChapters = await database.execute({
  sql: `SELECT course_id, module, chapter, chapter_title, screens_count, created_at, updated_at
    FROM learning_board_chapters
    WHERE substr(created_at, 1, 10) = ? OR substr(updated_at, 1, 10) = ?
    ORDER BY course_id, module, chapter`,
  args: [targetDate, targetDate],
});
console.log('TARGET CHAPTERS:', JSON.stringify(targetChapters.rows));
const remoteTables = new Set((await turso.execute(
  "SELECT name FROM sqlite_master WHERE type = 'table' AND name NOT LIKE 'sqlite_%'",
)).rows.map((row) => row.name));
console.log('TURSO MISSING LEARNING-BOARD TABLES:', JSON.stringify(
  ['learning_board_courses', 'learning_board_chapters', 'learning_board_screens', 'learning_board_practicals']
    .filter((table) => !remoteTables.has(table)),
));
for (const table of ['learning_board_courses', 'learning_board_chapters', 'learning_board_screens', 'learning_board_practicals']) {
  if (!remoteTables.has(table)) continue;
  const counts = [];
  for (const courseId of courseIds) {
    const [local, remote] = await Promise.all([
      database.execute({sql: `SELECT COUNT(*) AS count FROM "${table}" WHERE course_id = ?`, args: [courseId]}),
      turso.execute({sql: `SELECT COUNT(*) AS count FROM "${table}" WHERE course_id = ?`, args: [courseId]}),
    ]);
    counts.push({courseId, local: Number(local.rows[0].count), turso: Number(remote.rows[0].count)});
  }
  console.log(`SCOPED COUNTS ${table}:`, JSON.stringify(counts));
}
