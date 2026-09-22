#!/usr/bin/env node
import { spawn } from 'node:child_process';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const jobId = process.env.AUTOMATION_JOB_ID;
const apiUrl = String(process.env.AUTOMATION_API_URL || '').replace(/\/+$/, '');
const workerToken = process.env.AUTOMATION_WORKER_TOKEN;

if (!jobId || !apiUrl || !workerToken) {
  throw new Error('AUTOMATION_JOB_ID, AUTOMATION_API_URL, and AUTOMATION_WORKER_TOKEN are required.');
}

async function sendEvent(event) {
  const response = await fetch(`${apiUrl}/api/v1/automation/internal/jobs/${encodeURIComponent(jobId)}/events`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Automation-Worker-Token': workerToken },
    body: JSON.stringify(event),
  });
  if (!response.ok) throw new Error(`Automation event failed (${response.status}): ${(await response.text()).slice(0, 300)}`);
}

async function isCancelled() {
  const response = await fetch(`${apiUrl}/api/v1/automation/internal/jobs/${encodeURIComponent(jobId)}`, {
    headers: { 'X-Automation-Worker-Token': workerToken },
  });
  if (!response.ok) return false;
  const payload = await response.json();
  return payload?.data?.status === 'cancelled';
}

const args = [
  'scripts/generate-learning-boards-batch.js',
  '--category', process.env.AUTOMATION_CATEGORY,
  '--course-id', process.env.AUTOMATION_COURSE_ID,
];
if (process.env.AUTOMATION_SUBCATEGORY) args.push('--subcategory', process.env.AUTOMATION_SUBCATEGORY);
if (process.env.AUTOMATION_MODULE) args.push('--module', process.env.AUTOMATION_MODULE);
if (process.env.AUTOMATION_OVERWRITE === 'true') args.push('--overwrite');

await sendEvent({ type: 'started' });
const child = spawn(process.execPath, args, { cwd: repoRoot, stdio: ['ignore', 'pipe', 'pipe'] });
let cancelled = false;
const emit = (chunk) => {
  const message = String(chunk);
  process.stdout.write(message);
  void sendEvent({ type: 'log', message }).catch((error) => console.error(error.message));
};
child.stdout.on('data', emit);
child.stderr.on('data', emit);
const cancellationTimer = setInterval(async () => {
  try {
    if (await isCancelled()) {
      cancelled = true;
      child.kill('SIGTERM');
    }
  } catch (error) {
    console.error(`Cancellation check failed: ${error.message}`);
  }
}, 5000);

const exitCode = await new Promise((resolve) => child.on('close', resolve));
clearInterval(cancellationTimer);
if (cancelled) process.exit(0);
if (exitCode !== 0) {
  await sendEvent({ type: 'failed', error: `Generator exited with code ${exitCode}.` });
  process.exit(exitCode || 1);
}
await sendEvent({ type: 'completed', result: { execution: 'github-actions' } });
