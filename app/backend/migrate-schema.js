import 'dotenv/config';
import { createClient } from '@libsql/client';

const client = createClient({
  url: process.env.DATABASE_URL || 'file:./cohortia.db',
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

const columnsToAdd = [
  { name: 'current_role', type: 'TEXT' },
  { name: 'onboarding_goal', type: 'TEXT' },
  { name: 'experience_level', type: 'TEXT' },
  { name: 'weekly_hours', type: 'TEXT' },
  { name: 'learning_pace', type: 'TEXT' },
  { name: 'skills_known', type: 'TEXT' },
  { name: 'roadmap_selection', type: 'TEXT' },
  { name: 'username', type: 'TEXT' },
  { name: 'admin_role', type: 'TEXT' },
];

async function migrate() {
  for (const col of columnsToAdd) {
    try {
      await client.execute(`ALTER TABLE users ADD COLUMN ${col.name} ${col.type}`);
      console.log(`✓ Added column ${col.name}`);
    } catch (error) {
      if (error.message?.includes('duplicate column name')) {
        console.log(`✓ Column ${col.name} already exists`);
      } else {
        console.error(`✗ Error adding ${col.name}:`, error.message);
      }
    }
  }
  try {
    await client.execute(`CREATE UNIQUE INDEX IF NOT EXISTS users_username_unique ON users (username)`);
    await client.execute(`CREATE TABLE IF NOT EXISTS admin_course_permissions (
      admin_user_id TEXT NOT NULL,
      course_id TEXT NOT NULL,
      can_view_screens INTEGER NOT NULL DEFAULT 0,
      can_take_assessments INTEGER NOT NULL DEFAULT 0,
      can_use_practicals INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL,
      PRIMARY KEY (admin_user_id, course_id)
    )`);
    console.log('✓ Admin access tables are ready');
  } catch (error) {
    console.error('✗ Error creating admin access tables:', error.message);
    process.exitCode = 1;
  }
  console.log('Migration complete.');
  if (!process.exitCode) process.exit(0);
}

migrate();
