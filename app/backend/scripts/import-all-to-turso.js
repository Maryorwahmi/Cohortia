import 'dotenv/config';
import { existsSync } from 'node:fs';
import { readFile, rename, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { spawn } from 'node:child_process';
import { createClient } from '@libsql/client';

const restart = process.argv.includes('--restart');
const statePath = resolve(process.cwd(), '.turso-import-progress.json');
const stateTempPath = `${statePath}.tmp`;
const local = createClient({ url: 'file:./cohortia.db' });
const remote = createClient({
  url: process.env.DATABASE_URL,
  authToken: process.env.DATABASE_AUTH_TOKEN,
});
const drizzleKitBin = [
  resolve(process.cwd(), 'node_modules/drizzle-kit/bin.cjs'),
  resolve(process.cwd(), '../node_modules/drizzle-kit/bin.cjs'),
].find(existsSync);

if (!drizzleKitBin) {
  throw new Error('Could not find the installed drizzle-kit binary. Run npm install from app/.');
}

const count = async (client, table) => Number((await client.execute(`SELECT COUNT(*) AS count FROM "${table}"`)).rows[0].count);
const countsMatch = async (tables) => {
  const counts = await Promise.all(tables.map(async (table) => ({
    table,
    local: await count(local, table),
    turso: await count(remote, table),
  })));
  const mismatch = counts.find((item) => item.local !== item.turso);
  return { complete: !mismatch, mismatch };
};
const localRuntimeTables = [
  'ai_lessons', 'bookings', 'careers', 'community_comments', 'community_event_rsvps',
  'community_events', 'community_posts', 'community_reactions', 'content_sections',
  'enrollments', 'internship_briefs', 'internship_submissions', 'learning_board_progress',
  'mentor_context', 'mentors', 'newsletter_subscriptions', 'notifications', 'progress',
  'project_templates', 'student_practical_attempts', 'student_practical_progress',
  'study_room_participants', 'study_rooms', 'user_activity_log', 'user_lesson_progress',
  'user_project_submissions', 'user_roadmaps', 'users',
];
const practicalTables = [
  'learning_board_practicals', 'learning_board_practical_versions',
  'learning_board_practical_files', 'learning_board_practical_tasks',
  'learning_board_practical_tests',
];
const stages = [
  { name: 'schema', command: process.execPath, args: [drizzleKitBin, 'push'] },
  { name: 'courses-and-lessons', command: process.execPath, args: ['scripts/seed-courses.js'], tables: ['tracks', 'lessons'] },
  { name: 'catalog', command: process.execPath, args: ['scripts/import-catalog-courses.js'], tables: ['catalog_courses', 'catalog_course_subcategories', 'catalog_course_careers'] },
  { name: 'hands-on-activities', command: process.execPath, args: ['scripts/import-hands-on-activities.js'], tables: practicalTables },
  { name: 'practicals', command: process.execPath, args: ['scripts/import-practicals.js'], tables: practicalTables },
  { name: 'assessments', command: process.execPath, args: ['scripts/import-cs-assessments.js'], tables: ['cs_assessments', 'cs_assessment_questions'] },
  { name: 'local-runtime-data', command: process.execPath, args: ['scripts/import-local-runtime-data.js'], tables: localRuntimeTables },
];

function run(command, args) {
  return new Promise((resolveRun, rejectRun) => {
    const child = spawn(command, args, { cwd: process.cwd(), env: process.env, stdio: 'inherit' });
    child.on('error', rejectRun);
    child.on('exit', (code, signal) => {
      if (code === 0) resolveRun();
      else rejectRun(new Error(`${command} ${args.join(' ')} exited with ${signal || `code ${code}`}.`));
    });
  });
}

async function save(state) {
  await writeFile(stateTempPath, `${JSON.stringify(state, null, 2)}\n`);
  await rename(stateTempPath, statePath);
}

if (!process.env.DATABASE_URL || !process.env.DATABASE_AUTH_TOKEN) {
  throw new Error('DATABASE_URL and DATABASE_AUTH_TOKEN must be set.');
}

if (restart) {
  await rm(statePath, { force: true });
  await rm(stateTempPath, { force: true });
  console.log('Restart requested: cleared the previous import checkpoint.');
}

let state = { databaseUrl: process.env.DATABASE_URL, completed: [] };
if (existsSync(statePath)) {
  state = JSON.parse(await readFile(statePath, 'utf8'));
  if (state.databaseUrl !== process.env.DATABASE_URL) {
    throw new Error('The saved checkpoint belongs to a different DATABASE_URL. Use --restart to begin a new import.');
  }
}

// Learning boards are intentionally imported separately with
// `npm run db:import-learning-boards`, which supports chapter-level resume.
// Drop its old checkpoint if this runner was used before that separation.
const stageNames = new Set(stages.map((stage) => stage.name));
state.completed = (Array.isArray(state.completed) ? state.completed : [])
  .filter((stageName) => stageNames.has(stageName));
const completed = state.completed;
for (let index = 0; index < completed.length; index += 1) {
  if (completed[index] !== stages[index]?.name) {
    throw new Error('The saved checkpoint is invalid. Use --restart to begin again.');
  }
}

if (completed.length) {
  console.log(`Resuming after: ${completed.join(', ')}`);
}

for (let index = 0; index < stages.length; index += 1) {
  const stage = stages[index];
  const wasCheckpointed = completed.includes(stage.name);
  if (!restart && stage.tables) {
    const status = await countsMatch(stage.tables);
    if (status.complete) {
      console.log(`\n[${index + 1}/${stages.length}] ${stage.name}: already complete in Turso; skipping.`);
      if (!wasCheckpointed) {
        state.completed.push(stage.name);
        await save(state);
      }
      continue;
    }
    console.log(`\n[${index + 1}/${stages.length}] ${stage.name}: continuing from missing data (${status.mismatch.table}: local ${status.mismatch.local}, Turso ${status.mismatch.turso}).`);
  } else if (!restart && wasCheckpointed && stage.name !== 'schema') {
    console.log(`\n[${index + 1}/${stages.length}] ${stage.name}: checkpointed; skipping.`);
    continue;
  }
  console.log(`\n[${index + 1}/${stages.length}] ${stage.name}`);
  try {
    await run(stage.command, stage.args);
  } catch (error) {
    console.error(`\nStopped during '${stage.name}'. Your completed stages are saved in ${statePath}.`);
    console.error('After the connection is back, run the same command to resume from this stage.');
    throw error;
  }
  if (!state.completed.includes(stage.name)) state.completed.push(stage.name);
  await save(state);
  console.log(`✓ Checkpoint saved: ${stage.name}`);
}

await rm(statePath, { force: true });
await rm(stateTempPath, { force: true });
console.log('\n✓ All Turso import stages completed. Checkpoint cleared.');
