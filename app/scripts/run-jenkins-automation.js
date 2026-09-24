#!/usr/bin/env node
import { spawn } from 'node:child_process';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const appRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const apiUrl = String(process.env.AUTOMATION_API_URL || '').replace(/\/+$/, '');
const workerToken = process.env.AUTOMATION_WORKER_TOKEN;
const requestTimeoutMs = 30000;
const maxIdleChecks = Number(process.env.AUTOMATION_WORKER_MAX_IDLE_CHECKS || 60);
const idleCheckIntervalMs = Number(process.env.AUTOMATION_WORKER_IDLE_CHECK_INTERVAL_MS || 5000);

if (!apiUrl || !workerToken) {
  throw new Error('AUTOMATION_API_URL and AUTOMATION_WORKER_TOKEN are required.');
}

console.log(`[jenkins-worker] Starting; API: ${apiUrl}`);

async function request(pathname, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), requestTimeoutMs);
  let response;
  try {
    response = await fetch(`${apiUrl}/api/v1/automation/internal${pathname}`, {
      ...options,
      signal: controller.signal,
      headers: { 'Content-Type': 'application/json', 'X-Automation-Worker-Token': workerToken, ...(options.headers || {}) },
    });
  } catch (error) {
    throw new Error(`Automation API request failed for ${pathname}: ${error.name === 'AbortError' ? 'timed out' : error.message}`);
  } finally {
    clearTimeout(timeout);
  }
  if (!response.ok) throw new Error(`Automation API request failed (${response.status}): ${(await response.text()).slice(0, 300)}`);
  return response.json();
}

async function sendEvent(jobId, event) {
  await request(`/jobs/${encodeURIComponent(jobId)}/events`, { method: 'POST', body: JSON.stringify(event) });
}

async function isCancelled(jobId) {
  const payload = await request(`/jobs/${encodeURIComponent(jobId)}`);
  return payload?.data?.status === 'cancelled';
}

async function runGenerator(job) {
  const args = ['scripts/generate-learning-boards-batch.js', '--category', job.category, '--course-id', job.courseId];
  if (job.subcategory) args.push('--subcategory', job.subcategory);
  if (job.module != null) args.push('--module', String(job.module));
  if (job.overwrite) args.push('--overwrite');

  return new Promise((resolve) => {
    const child = spawn(process.execPath, args, { cwd: appRoot, stdio: ['ignore', 'pipe', 'pipe'] });
    let cancelled = false;
    const emit = (chunk) => {
      const message = String(chunk);
      process.stdout.write(message);
      void sendEvent(job.jobId, { type: 'log', message }).catch((error) => console.error(error.message));
    };
    child.stdout.on('data', emit);
    child.stderr.on('data', emit);
    const timer = setInterval(async () => {
      try {
        if (await isCancelled(job.jobId)) {
          cancelled = true;
          child.kill('SIGTERM');
        }
      } catch (error) {
        console.error(`Cancellation check failed: ${error.message}`);
      }
    }, 5000);
    child.on('close', (exitCode) => {
      clearInterval(timer);
      resolve({ exitCode, cancelled });
    });
  });
}

const ready = await request('/worker/ready', { method: 'POST', body: '{}' });
console.log(`[jenkins-worker] Ready handshake acknowledged${ready?.data?.jobId ? ` for ${ready.data.jobId}` : ''}.`);

let idleChecks = 0;
while (idleChecks < maxIdleChecks) {
  console.log(`[jenkins-worker] Claiming queued job (check ${idleChecks + 1}/${maxIdleChecks}).`);
  const payload = await request('/jobs/claim', { method: 'POST', body: '{}' });
  const job = payload?.data;
  if (!job) {
    idleChecks += 1;
    await new Promise((resolve) => setTimeout(resolve, idleCheckIntervalMs));
    continue;
  }
  idleChecks = 0;
  console.log(`[jenkins-worker] Claimed ${job.jobId}; generating ${job.courseId}.`);
  await sendEvent(job.jobId, { type: 'started' });
  const result = await runGenerator(job);
  if (result.cancelled) continue;
  if (result.exitCode !== 0) {
    await sendEvent(job.jobId, { type: 'failed', error: `Generator exited with code ${result.exitCode}.` });
    process.exit(result.exitCode || 1);
  }
  await sendEvent(job.jobId, { type: 'completed', result: { execution: 'jenkins' } });
}

console.log(`[jenkins-worker] Queue is idle after ${maxIdleChecks} checks; exiting successfully.`);