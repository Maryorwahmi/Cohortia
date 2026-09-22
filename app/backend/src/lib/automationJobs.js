import { spawn } from 'node:child_process';
import { randomUUID } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { and, asc, eq, inArray } from 'drizzle-orm';
import { db } from '../db/index.js';
import { automationJobs } from '../db/schema.js';

const WORKER_INTERVAL_MS = Number(process.env.AUTOMATION_WORKER_INTERVAL_MS || 5000);
const MAX_LOG_LENGTH = 180000;
const COMMAND_TIMEOUT_MS = Number(process.env.AUTOMATION_COMMAND_TIMEOUT_MS || 2700000);
let workerTimer = null;
let workerIsRunning = false;
const activeProcesses = new Map();

function now() {
  return new Date().toISOString();
}

export async function cancelAllAutomationJobs() {
  const updatedAt = now();
  const jobs = await db.select({ id: automationJobs.id })
    .from(automationJobs)
    .where(inArray(automationJobs.status, ['queued', 'running']));
  for (const job of jobs) {
    activeProcesses.get(job.id)?.kill();
  }
  if (jobs.length) {
    await db.update(automationJobs).set({
      status: 'cancelled',
      error: 'Cancelled by emergency stop.',
      completedAt: updatedAt,
      updatedAt,
    }).where(inArray(automationJobs.id, jobs.map((job) => job.id)));
  }
  return jobs.length;
}

function getApplicationRoot() {
  return path.resolve(import.meta.dirname, '..', '..', '..');
}

function getRepositoryRoot() {
  return path.resolve(getApplicationRoot(), '..');
}

function catalogPath(category) {
  return path.join(getApplicationRoot(), 'docs', category, 'catalog-courses-by-subcategory.json');
}

async function readCatalog(category) {
  const source = catalogPath(category);
  const text = await fs.readFile(source, 'utf8');
  return JSON.parse(text);
}

export async function listAutomationSubcategories(category) {
  const catalog = await readCatalog(category);
  return (catalog.subcategories || []).map((subcategory) => ({
    name: subcategory.name,
    level: subcategory.level || 'beginner',
    courseCount: Array.isArray(subcategory.courses) ? subcategory.courses.length : 0,
  }));
}

export async function listAutomationCourses(category, subcategory = null) {
  const catalog = await readCatalog(category);
  const courses = [];
  for (const item of catalog.subcategories || []) {
    if (subcategory && String(item.name).toLowerCase() !== String(subcategory).toLowerCase()) continue;
    for (const course of item.courses || []) {
      courses.push({
        id: course.id,
        title: course.title || course.name || course.id,
        level: course.level || item.level || 'beginner',
        subcategory: item.name,
      });
    }
  }
  return courses;
}

function runProcess(command, args, options = {}) {
  const { cwd, timeoutMs = COMMAND_TIMEOUT_MS, onOutput, env, jobId } = options;
  return new Promise((resolve) => {
    const child = spawn(command, args, {
      cwd,
      env: env ? { ...process.env, ...env } : process.env,
      shell: false,
      windowsHide: true,
    });
    if (jobId) activeProcesses.set(jobId, child);
    let stdout = '';
    let stderr = '';
    let settled = false;
    const finish = (result) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      if (jobId && activeProcesses.get(jobId) === child) activeProcesses.delete(jobId);
      resolve(result);
    };
    const timer = setTimeout(() => {
      child.kill();
      finish({ ok: false, timedOut: true, exitCode: null, stdout, stderr: `${stderr}\nProcess timed out.`.trim() });
    }, timeoutMs);
    const append = (chunk, isError = false) => {
      const text = String(chunk);
      if (isError) stderr = `${stderr}${text}`.slice(-MAX_LOG_LENGTH);
      else stdout = `${stdout}${text}`.slice(-MAX_LOG_LENGTH);
      onOutput?.(text);
    };
    child.stdout.on('data', (chunk) => append(chunk));
    child.stderr.on('data', (chunk) => append(chunk, true));
    child.on('error', (error) => finish({ ok: false, exitCode: null, stdout, stderr: error.message }));
    child.on('close', (exitCode) => finish({ ok: exitCode === 0, exitCode, stdout, stderr }));
  });
}

async function appendJobLog(job, chunk) {
  const clean = String(chunk || '').replace(/\r/g, '').trim();
  if (!clean) return;
  job.logs = `${job.logs || ''}${job.logs ? '\n' : ''}${clean}`.slice(-MAX_LOG_LENGTH);
  job.updatedAt = now();
  try {
    await db.update(automationJobs).set({ logs: job.logs, updatedAt: job.updatedAt }).where(eq(automationJobs.id, job.id));
  } catch (error) {
    console.error(`[automation] Unable to persist log for ${job.id}; continuing:`, error);
  }
}

function generationNeedsImport(stdout = '') {
  const skipPatterns = [
    /already has valid chapter manifests/i,
    /already completed/i,
    /skipping .* already completed/i,
    /no chapters found/i,
    /syllabus not found/i,
  ];
  if (skipPatterns.some((pattern) => pattern.test(stdout))) return false;
  const successMatch = stdout.match(/Done:\s*(\d+)\s+succeeded/i);
  return successMatch ? Number(successMatch[1]) > 0 : true;
}

async function generateAndImportCourse(job, course) {
  const appRoot = getApplicationRoot();
  const batchScript = path.join(appRoot, 'scripts', 'generate-learning-boards-batch.js');
  const args = [batchScript, '--category', job.category, '--subcategory', course.subcategory, '--course-id', course.id];
  if (job.module != null) args.push('--module', String(job.module));
  if (job.overwrite) args.push('--overwrite');
  const onOutput = (chunk) => appendJobLog(job, chunk);
  const generation = await runProcess(process.execPath, args, { cwd: appRoot, onOutput, jobId: job.id });
  if (!generation.ok) {
    return { ok: false, courseId: course.id, error: generation.timedOut ? 'Generation timed out.' : 'Generation failed.' };
  }
  if (!generationNeedsImport(generation.stdout)) {
    return { ok: true, courseId: course.id, importSkipped: true };
  }
  const importScript = path.join(appRoot, 'backend', 'scripts', 'import-learning-boards.js');
  const imported = await runProcess(process.execPath, [importScript, '--course', course.id], {
    cwd: path.join(appRoot, 'backend'),
    onOutput, jobId: job.id,
  });
  return imported.ok
    ? { ok: true, courseId: course.id, importSkipped: false }
    : { ok: false, courseId: course.id, error: imported.timedOut ? 'Import timed out.' : 'Validated manifests could not be imported into Turso.' };
}

async function syncGeneratedFilesToGit(job) {
  if (process.env.AUTOMATION_GIT_SYNC === 'false') {
    await appendJobLog(job, 'Git sync disabled by AUTOMATION_GIT_SYNC=false.');
    return { skipped: true };
  }
  const token = process.env.AUTOMATION_GIT_TOKEN;
  const repository = process.env.AUTOMATION_GIT_REPOSITORY;
  if (!token || !repository) {
    throw new Error('Git sync requires AUTOMATION_GIT_TOKEN and AUTOMATION_GIT_REPOSITORY.');
  }
  const repositoryRoot = getRepositoryRoot();
  const applicationPath = path.relative(repositoryRoot, getApplicationRoot()).replace(/\\/g, '/');
  const generatedPath = `${applicationPath}/generated/learning-boards-html`;
  const docsPath = `${applicationPath}/docs`;
  const output = (chunk) => appendJobLog(job, chunk);
  const git = async (args) => {
    const result = await runProcess('git', args, { cwd: repositoryRoot, onOutput: output, timeoutMs: 120000 });
    if (!result.ok) throw new Error(`Git command failed: git ${args[0]}`);
    return result;
  };
  await git(['config', 'user.name', process.env.AUTOMATION_GIT_AUTHOR_NAME || 'Cohortia Automation']);
  await git(['config', 'user.email', process.env.AUTOMATION_GIT_AUTHOR_EMAIL || 'automation@cohortia.app']);
  await git(['add', '--', generatedPath, docsPath]);
  const staged = await runProcess('git', ['diff', '--cached', '--quiet'], { cwd: repositoryRoot, timeoutMs: 120000 });
  if (staged.exitCode === 0) {
    await appendJobLog(job, 'No generated-file changes required a Git commit.');
    return { skipped: true };
  }
  if (staged.exitCode !== 1) throw new Error('Unable to inspect staged Git changes.');
  await git(['commit', '-m', `chore(learning-boards): publish ${job.category}${job.subcategory ? `/${job.subcategory}` : ''}`]);
  const branch = process.env.AUTOMATION_GIT_BRANCH || 'main';
  const remote = `https://x-access-token:${encodeURIComponent(token)}@github.com/${repository}.git`;
  await git(['push', remote, `HEAD:${branch}`]);
  await appendJobLog(job, `Committed generated artifacts to ${repository}@${branch}.`);
  return { skipped: false };
}

async function runJob(job) {
  const selectedCourses = job.courseId === 'all'
    ? await listAutomationCourses(job.category, job.subcategory)
    : (await listAutomationCourses(job.category, job.subcategory)).filter((course) => course.id === job.courseId);
  if (!selectedCourses.length) throw new Error('No matching courses were found in the canonical docs catalog.');
  await appendJobLog(job, `Generating ${selectedCourses.length} course(s) from app/docs/${job.category}.`);
  const results = [];
  for (const course of selectedCourses) {
    await appendJobLog(job, `Starting ${course.id}.`);
    results.push(await generateAndImportCourse(job, course));
  }
  const failed = results.filter((result) => !result.ok);
  if (failed.length) throw new Error(`${failed.length} course generation/import task(s) failed.`);
  const git = await syncGeneratedFilesToGit(job);
  return { totalCourses: results.length, failed: 0, results, git };
}

async function claimNextJob() {
  const jobs = await db.select().from(automationJobs)
    .where(eq(automationJobs.status, 'queued'))
    .orderBy(asc(automationJobs.createdAt)).limit(1);
  const job = jobs[0];
  if (!job) return null;
  const startedAt = now();
  await db.update(automationJobs).set({
    status: 'running',
    attempts: (job.attempts || 0) + 1,
    startedAt,
    updatedAt: startedAt,
  }).where(and(eq(automationJobs.id, job.id), eq(automationJobs.status, 'queued')));
  const claimed = await db.select().from(automationJobs).where(eq(automationJobs.id, job.id)).limit(1);
  return claimed[0]?.status === 'running' ? claimed[0] : null;
}

async function runWorkerTick() {
  if (workerIsRunning) return;
  workerIsRunning = true;
  try {
    const job = await claimNextJob();
    if (!job) return;
    try {
      const result = await runJob(job);
      const completedAt = now();
      await db.update(automationJobs).set({
        status: 'completed', result: JSON.stringify(result), error: null, completedAt, updatedAt: completedAt,
      }).where(eq(automationJobs.id, job.id));
    } catch (error) {
      const completedAt = now();
      const message = String(error?.message || error);
      await appendJobLog(job, `FAILED: ${message}`);
      await db.update(automationJobs).set({
        status: 'failed', error: message, completedAt, updatedAt: completedAt,
      }).where(eq(automationJobs.id, job.id));
    }
  } finally {
    workerIsRunning = false;
  }
}

export async function createAutomationJob({ requestedByUserId, category, subcategory, courseId, module, overwrite }) {
  const timestamp = now();
  const job = {
    id: randomUUID(), requestedByUserId, category, subcategory: subcategory || null, courseId,
    module: module ?? null, overwrite: Boolean(overwrite), status: 'queued', logs: 'Queued for background generation.',
    attempts: 0, createdAt: timestamp, updatedAt: timestamp,
  };
  await db.insert(automationJobs).values(job);
  void runWorkerTick();
  return job;
}

export async function getAutomationJob(jobId) {
  const rows = await db.select().from(automationJobs).where(eq(automationJobs.id, jobId)).limit(1);
  return rows[0] || null;
}

export async function startAutomationWorker() {
  const recoveredAt = now();
  await db.update(automationJobs).set({
    status: 'queued',
    startedAt: null,
    updatedAt: recoveredAt,
  }).where(eq(automationJobs.status, 'running'));
  void runWorkerTick();
  if (!workerTimer) workerTimer = setInterval(() => void runWorkerTick(), WORKER_INTERVAL_MS);
}
