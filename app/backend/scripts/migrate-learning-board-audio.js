import 'dotenv/config';
import { createClient } from '@libsql/client';

const client = createClient({
  url: process.env.DATABASE_URL || 'file:./cohortia.db',
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

for (const [column, definition] of [
  ['audio_url', 'TEXT'],
  ['audio_mime_type', 'TEXT'],
  ['audio_duration', 'INTEGER'],
  ['audio_voice', 'TEXT'],
  ['audio_model', 'TEXT'],
  ['audio_source_hash', 'TEXT'],
]) {
  try {
    await client.execute(`ALTER TABLE learning_board_screens ADD COLUMN ${column} ${definition}`);
    console.log(`Added ${column}`);
  } catch (error) {
    if (!String(error?.message || error).toLowerCase().includes('duplicate column')) throw error;
    console.log(`Already exists: ${column}`);
  }
}

console.log('Learning-board audio schema is ready.');
client.close();
