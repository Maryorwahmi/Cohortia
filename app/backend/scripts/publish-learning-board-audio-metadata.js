import 'dotenv/config';
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { createClient } from '@libsql/client';

const [courseId, moduleArg = '1', chapterArg = '1'] = process.argv.slice(2);
const moduleNumber = Number(moduleArg);
const chapterNumber = Number(chapterArg);
const baseUrl = String(process.env.LEARNING_BOARD_AUDIO_BASE_URL || '').replace(/\/$/, '');
if (!courseId || !baseUrl) {
  throw new Error('Usage: LEARNING_BOARD_AUDIO_BASE_URL=https://your-r2-domain node scripts/publish-learning-board-audio-metadata.js <course-id> <module> <chapter>');
}

const repoRoot = path.resolve(import.meta.dirname, '../..');
const chapterRoot = path.join(repoRoot, 'app', 'generated', 'learning-board-audio', courseId, `module-${String(moduleNumber).padStart(2, '0')}`, `chapter-${String(chapterNumber).padStart(2, '0')}`);
const manifest = JSON.parse(await fs.readFile(path.join(chapterRoot, 'manifest.json'), 'utf8'));
const client = createClient({ url: process.env.DATABASE_URL || 'file:./cohortia.db', authToken: process.env.DATABASE_AUTH_TOKEN });

await client.execute('ALTER TABLE learning_board_screens ADD COLUMN audio_url TEXT').catch(() => {});
await client.execute('ALTER TABLE learning_board_screens ADD COLUMN audio_mime_type TEXT').catch(() => {});
await client.execute('ALTER TABLE learning_board_screens ADD COLUMN audio_duration INTEGER').catch(() => {});
await client.execute('ALTER TABLE learning_board_screens ADD COLUMN audio_voice TEXT').catch(() => {});
await client.execute('ALTER TABLE learning_board_screens ADD COLUMN audio_model TEXT').catch(() => {});
await client.execute('ALTER TABLE learning_board_screens ADD COLUMN audio_source_hash TEXT').catch(() => {});

const screens = await client.execute({
  sql: 'SELECT screen, narrator_text FROM learning_board_screens WHERE course_id = ? AND module = ? AND chapter = ? ORDER BY screen',
  args: [courseId, moduleNumber, chapterNumber],
});
const narrationByScreen = new Map(screens.rows.map((row) => [Number(row.screen), String(row.narrator_text || '')]));

for (const cue of manifest.screenAudio || []) {
  const filename = `screen-${String(cue.screen).padStart(2, '0')}.wav`;
  const audioPath = path.join(chapterRoot, filename);
  const audioBytes = await fs.readFile(audioPath);
  const sourceHash = crypto.createHash('sha256').update(narrationByScreen.get(cue.screen) || '').digest('hex').slice(0, 12);
  const url = `${baseUrl}/${courseId}/module-${String(moduleNumber).padStart(2, '0')}/chapter-${String(chapterNumber).padStart(2, '0')}/${filename}`;
  await client.execute({
    sql: `UPDATE learning_board_screens
      SET audio_url = ?, audio_mime_type = ?, audio_duration = ?, audio_voice = ?, audio_model = ?, audio_source_hash = ?, updated_at = ?
      WHERE course_id = ? AND module = ? AND chapter = ? AND screen = ?`,
    args: [url, 'audio/wav', Math.round(Number(cue.durationSeconds)), manifest.voice || null, manifest.model || null, sourceHash, new Date().toISOString(), courseId, moduleNumber, chapterNumber, cue.screen],
  });
  console.log(`Published screen ${cue.screen}: ${url} (${audioBytes.length} bytes)`);
}

console.log(`Updated audio metadata for ${manifest.screenAudio?.length || 0} screens.`);
client.close();
