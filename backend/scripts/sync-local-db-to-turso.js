import 'dotenv/config';
import { createClient } from '@libsql/client';

const APPLY = process.argv.includes('--apply');
const BATCH_SIZE = Number(process.env.TURSO_SYNC_BATCH_SIZE || 50);
const local = createClient({ url: 'file:./cohortia.db' });
const remote = createClient({
  url: process.env.DATABASE_URL,
  authToken: process.env.DATABASE_AUTH_TOKEN,
});
const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

async function retry(label, operation) {
  let lastError;
  for (let attempt = 1; attempt <= 6; attempt += 1) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      if (attempt === 6) break;
      const delay = attempt * 2_000;
      console.warn(`${label} failed (${error.message}). Retrying in ${delay / 1_000}s…`);
      await sleep(delay);
    }
  }
  throw lastError;
}

if (!process.env.DATABASE_URL || !process.env.DATABASE_AUTH_TOKEN) {
  throw new Error('DATABASE_URL and DATABASE_AUTH_TOKEN must be set for the Turso destination.');
}
if (!Number.isInteger(BATCH_SIZE) || BATCH_SIZE < 1) {
  throw new Error('TURSO_SYNC_BATCH_SIZE must be a positive integer.');
}

const quote = (identifier) => `"${identifier.replaceAll('"', '""')}"`;
const execute = (client, statement) => client === remote
  ? retry('Turso request', () => client.execute(statement))
  : client.execute(statement);
const tableNames = async (client) => (await execute(client,
  "SELECT name FROM sqlite_master WHERE type = 'table' AND name NOT LIKE 'sqlite_%' ORDER BY name",
)).rows.map((row) => row.name);
const columnsFor = async (client, table) => (await execute(client, `PRAGMA table_info(${quote(table)})`)).rows
  .map((row) => row.name);
const countFor = async (client, table) => Number((await execute(client,
  `SELECT COUNT(*) AS count FROM ${quote(table)}`,
)).rows[0].count);

const localTables = await tableNames(local);
const remoteTables = await tableNames(remote);
const missingRemoteTables = localTables.filter((table) => !remoteTables.includes(table));
const extraRemoteTables = remoteTables.filter((table) => !localTables.includes(table));

if (missingRemoteTables.length || extraRemoteTables.length) {
  throw new Error(`Table mismatch. Missing in Turso: ${missingRemoteTables.join(', ') || 'none'}; extra in Turso: ${extraRemoteTables.join(', ') || 'none'}. Run npm run db:push first.`);
}

const tableColumns = new Map();
for (const table of localTables) {
  const [sourceColumns, destinationColumns] = await Promise.all([
    columnsFor(local, table),
    columnsFor(remote, table),
  ]);
  const sourceSet = new Set(sourceColumns);
  const destinationSet = new Set(destinationColumns);
  if (sourceColumns.length !== destinationColumns.length || sourceColumns.some((column) => !destinationSet.has(column)) || destinationColumns.some((column) => !sourceSet.has(column))) {
    throw new Error(`Column mismatch for ${table}; stopping before data is changed.`);
  }
  // Use Turso's column order, which may differ from the legacy local file.
  tableColumns.set(table, destinationColumns);
}

const sourceTotal = (await Promise.all(localTables.map((table) => countFor(local, table)))).reduce((total, count) => total + count, 0);
const destinationTotal = (await Promise.all(remoteTables.map((table) => countFor(remote, table)))).reduce((total, count) => total + count, 0);
console.log(`Local: ${sourceTotal.toLocaleString()} rows across ${localTables.length} tables.`);
console.log(`Turso: ${destinationTotal.toLocaleString()} rows across ${remoteTables.length} tables.`);

if (!APPLY) {
  console.log('Dry run passed. Re-run with --apply to replace all Turso table data with the local database.');
  process.exit(0);
}

console.log('Replacing Turso data with the local database...');
for (const table of localTables) {
  await execute(remote, `DELETE FROM ${quote(table)}`);
}

for (const table of localTables) {
  const columns = tableColumns.get(table);
  const columnList = columns.map(quote).join(', ');
  const placeholders = columns.map(() => '?').join(', ');
  const insertSql = `INSERT INTO ${quote(table)} (${columnList}) VALUES (${placeholders})`;
  const expected = await countFor(local, table);
  let offset = 0;

  while (offset < expected) {
    const rows = (await local.execute({
      sql: `SELECT ${columnList} FROM ${quote(table)} LIMIT ? OFFSET ?`,
      args: [BATCH_SIZE, offset],
    })).rows;
    await retry(`${table} batch at row ${offset}`, () => remote.batch(rows.map((row) => ({
      sql: insertSql,
      args: columns.map((column) => row[column]),
    })), 'write'));
    offset += rows.length;
  }

  const actual = await countFor(remote, table);
  if (actual !== expected) {
    throw new Error(`${table}: expected ${expected} rows in Turso, found ${actual}.`);
  }
  console.log(`${table}: ${actual.toLocaleString()} rows`);
}

console.log('Sync complete. Turso now matches the local database rows.');
