import 'dotenv/config';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createClient} from '@libsql/client';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const inferencePath = path.resolve(scriptDirectory, '..', 'src', 'data', 'catalog-course-level-inferences.json');
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error('DATABASE_URL must be set in app/backend before applying course-level inferences.');
}

const inferenceData = JSON.parse(await readFile(inferencePath, 'utf8'));
const levels = inferenceData.levels;
if (!levels || typeof levels !== 'object' || Array.isArray(levels)) {
  throw new Error(`Expected a levels object in ${inferencePath}`);
}

const client = createClient({url: databaseUrl, authToken: process.env.DATABASE_AUTH_TOKEN});
let updated = 0;
let unchanged = 0;
for (const [courseId, inference] of Object.entries(levels)) {
  if (!inference || typeof inference.level !== 'string') {
    throw new Error(`Invalid course-level inference for ${courseId}`);
  }

  const result = await client.execute({
    sql: `
      UPDATE catalog_courses
      SET level = ?,
          catalog_status = CASE WHEN ? THEN 'review' ELSE catalog_status END,
          updated_at = ?
      WHERE id = ? AND (level IS NULL OR TRIM(level) = '')
    `,
    args: [
      inference.level,
      inference.reviewRequired ? 1 : 0,
      new Date().toISOString(),
      courseId,
    ],
  });
  if (result.rowsAffected > 0) updated += 1;
  else unchanged += 1;
}

console.log(`Applied inferred levels to ${updated} catalog courses; ${unchanged} records were already classified or were not present.`);
await client.close();
