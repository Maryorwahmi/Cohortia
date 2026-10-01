#!/usr/bin/env node

import 'dotenv/config';
import { createClient } from '@libsql/client';

const client = createClient({
  url: process.env.DATABASE_URL || 'file:./cohortia.db',
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

try {
  try {
    await client.execute(`
      CREATE UNIQUE INDEX IF NOT EXISTS learning_board_screens_course_module_chapter_screen_unique
      ON learning_board_screens(course_id, module, chapter, screen)
    `);
  } catch (error) {
    if (/unique constraint|duplicate/i.test(error.message)) {
      throw new Error(
        'Cannot create the unique screen index because duplicate (course_id, module, chapter, screen) identities exist. ' +
        'Resolve those duplicates, then rerun the migration. No rows were changed.'
      );
    }
    throw error;
  }

  console.log('✓ Created or verified learning-board screen identity index.');
} catch (error) {
  console.error(`Learning-board screen index migration failed: ${error.message}`);
  process.exitCode = 1;
} finally {
  await client.close();
}
