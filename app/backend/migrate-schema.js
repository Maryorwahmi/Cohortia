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
  console.log('Migration complete.');
  process.exit(0);
}

migrate();
