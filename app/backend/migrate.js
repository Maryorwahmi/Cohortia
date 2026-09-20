import { createClient } from '@libsql/client';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbUrl = process.env.DATABASE_URL || `file:${path.join(__dirname, 'cohortia.db')}`;
console.log('Connecting to database...');

try {
  const client = createClient({ url: dbUrl, authToken: process.env.DATABASE_AUTH_TOKEN });
  
  // Check if column already exists
  const tableInfo = await client.execute("PRAGMA table_info(learning_board_progress)");
  const hasColumn = tableInfo.rows.some(row => row.name === 'practicals_complete');
  
  if (hasColumn) {
    console.log('✓ Column practicals_complete already exists');
  } else {
    console.log('Adding practicals_complete column to learning_board_progress table...');
    await client.execute(`
      ALTER TABLE learning_board_progress 
      ADD COLUMN practicals_complete INTEGER NOT NULL DEFAULT 0;
    `);
    console.log('✓ Successfully added practicals_complete column');
  }
  
  // Verify the column exists now
  const updatedInfo = await client.execute("PRAGMA table_info(learning_board_progress)");
  console.log('\nTable structure:');
  updatedInfo.rows.forEach(row => {
    console.log(`  - ${row.name} (${row.type})${row.notnull ? ' NOT NULL' : ''}`);
  });
  
  console.log('\n✓ Migration complete');
} catch (error) {
  console.error('Migration failed:', error.message);
  process.exit(1);
}
