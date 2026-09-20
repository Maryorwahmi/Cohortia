import { Hono } from 'hono';
import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import { randomUUID } from 'node:crypto';

const automation = new Hono();
const generationJobs = new Map();

function addJobLog(job, chunk) {
  if (!chunk) return;
  const text = String(chunk).replace(/\r/g, '');
  if (!text.trim()) return;
  const lines = text.split('\n').filter((line) => line.trim());
  if (!lines.length) return;
  job.logs.push(...lines.slice(-50));
  if (job.logs.length > 300) {
    job.logs = job.logs.slice(-300);
  }
  job.updatedAt = new Date().toISOString();
}

function runProcess(command, args, options = {}) {
  const { cwd, timeoutMs = 600000, onOutput } = options;

  return new Promise((resolve) => {
    const child = spawn(command, args, { cwd, shell: false, windowsHide: true });
    let stdout = '';
    let stderr = '';
    let settled = false;

    const finish = (result) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve(result);
    };

    const timer = setTimeout(() => {
      child.kill();
      finish({ ok: false, timedOut: true, exitCode: null, stdout, stderr: `${stderr}\nProcess timed out.`.trim() });
    }, timeoutMs);

    child.stdout.on('data', (chunk) => {
      const text = String(chunk);
      stdout = `${stdout}${text}`.slice(0, 200000);
      if (onOutput) onOutput(text);
    });

    child.stderr.on('data', (chunk) => {
      const text = String(chunk);
      stderr = `${stderr}${text}`.slice(0, 200000);
      if (onOutput) onOutput(text);
    });

    child.on('error', (error) => finish({ ok: false, unavailable: error.code === 'ENOENT', exitCode: null, stdout, stderr: error.message }));
    child.on('close', (exitCode) => finish({ ok: exitCode === 0, exitCode, stdout, stderr }));
  });
}

function buildCourseCatalogPath(category) {
  const root = path.resolve(import.meta.dirname, '..', '..', '..', '..');
  return path.join(root, 'docs', category, 'catalog-courses-by-subcategory.json');
}

async function listSubcategoriesForCategory(category) {
  const catalogPath = buildCourseCatalogPath(category);
  try {
    const text = await fs.readFile(catalogPath, 'utf8');
    const data = JSON.parse(text);
    return (data.subcategories || []).map((subcategory) => ({
      name: subcategory.name,
      level: subcategory.level || 'beginner',
      courseCount: Array.isArray(subcategory.courses) ? subcategory.courses.length : 0,
    }));
  } catch {
    return [];
  }
}

async function listCoursesForCategory(category, subcategory = null) {
  const catalogPath = buildCourseCatalogPath(category);
  try {
    const text = await fs.readFile(catalogPath, 'utf8');
    const data = JSON.parse(text);
    const courses = [];
    for (const item of data.subcategories || []) {
      const matches = subcategory ? String(item.name).toLowerCase() === String(subcategory).toLowerCase() : true;
      if (!matches) continue;
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
  } catch (error) {
    return [];
  }
}

function generationNeedsImport(stdout = '') {
  const skipPatterns = [
    /already has valid chapter manifests/i,
    /already completed/i,
    /skipping .* already completed/i,
    /no chapters found/i,
    /syllabus not found/i,
    /Done:\s*0 succeeded,\s*\d+ failed,\s*\d+ skipped/i,
  ];

  if (skipPatterns.some((pattern) => pattern.test(stdout))) {
    return false;
  }

  const successMatch = stdout.match(/Done:\s*(\d+)\s+succeeded/i);
  return successMatch ? Number(successMatch[1]) > 0 : true;
}

async function runGenerationForCourse({ category, courseId, module = null, subcategory = null, overwrite = false, onOutput }) {
  const repoRoot = path.resolve(import.meta.dirname, '..', '..', '..', '..');
  const appBackendRoot = path.join(repoRoot, 'app', 'backend');
  const generatorScript = path.join(appBackendRoot, 'scripts', 'generate-learning-boards-batch.js');
  const args = [
    generatorScript,
    '--category',
    category,
  ];

  if (subcategory) {
    args.push('--subcategory', subcategory);
  }

  args.push('--course-id', courseId);

  if (module != null) {
    args.push('--module', String(module));
  }

  if (overwrite) {
    args.push('--overwrite');
  }

  const result = await runProcess(process.execPath, args, {
    cwd: repoRoot,
    timeoutMs: 600000,
    onOutput,
  });

  if (!result.ok) {
    return {
      ok: false,
      courseId,
      stdout: result.stdout,
      stderr: result.stderr,
      error: result.timedOut ? 'Generation timed out.' : 'Generation failed.',
    };
  }

  if (!generationNeedsImport(result.stdout)) {
    return {
      ok: true,
      courseId,
      stdout: result.stdout,
      importSkipped: true,
      message: 'Course already had valid generated manifests; no import was required.',
    };
  }

  const importScript = path.join(appBackendRoot, 'scripts', 'import-learning-boards.js');
  const importResult = await runProcess(process.execPath, [importScript, '--course', courseId], {
    cwd: appBackendRoot,
    timeoutMs: 600000,
    onOutput,
  });

  if (!importResult.ok) {
    return {
      ok: false,
      courseId,
      stdout: importResult.stdout,
      stderr: importResult.stderr,
      error: importResult.timedOut ? 'Import timed out.' : 'Validated manifest could not be imported into Turso.',
    };
  }

  return {
    ok: true,
    courseId,
    stdout: result.stdout,
    importStdout: importResult.stdout,
    importSkipped: false,
  };
}

automation.get('/categories', async (c) => {
  return c.json({
    success: true,
    data: {
      categories: [
        { id: 'computer-science', label: 'Computer Science' },
        { id: 'artificial-intelligence', label: 'Artificial Intelligence' },
      ],
    },
  });
});

automation.get('/courses', async (c) => {
  const category = String(c.req.query('category') || 'computer-science');
  const subcategory = c.req.query('subcategory');
  const courses = await listCoursesForCategory(category, subcategory || null);
  const subcategories = await listSubcategoriesForCategory(category);
  return c.json({ success: true, data: { category, subcategories, courses } });
});

automation.post('/generate', async (c) => {
  try {
    const body = await c.req.json();
    const category = String(body?.category || 'computer-science');
    const requestedCourseId = body?.courseId || 'all';
    const module = body?.module ?? null;
    const subcategory = body?.subcategory ? String(body.subcategory) : null;
    const overwrite = Boolean(body?.overwrite);

    const allowedCategories = ['computer-science', 'artificial-intelligence'];
    if (!allowedCategories.includes(category)) {
      return c.json({ success: false, error: 'Unsupported category.' }, 400);
    }

    const jobId = randomUUID();
    const job = {
      id: jobId,
      category,
      courseId: requestedCourseId,
      module,
      status: 'queued',
      logs: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      result: null,
    };
    generationJobs.set(jobId, job);

    const finishJob = async () => {
      try {
        if (requestedCourseId && requestedCourseId !== 'all') {
          const singleResult = await runGenerationForCourse({
            category,
            courseId: requestedCourseId,
            module,
            subcategory,
            overwrite,
            onOutput: (chunk) => addJobLog(job, chunk),
          });
          job.result = singleResult;
          job.status = singleResult.ok ? 'completed' : 'failed';
          job.updatedAt = new Date().toISOString();
          return;
        }

        const courses = await listCoursesForCategory(category, subcategory || null);
        const results = [];
        for (const course of courses) {
          const result = await runGenerationForCourse({
            category,
            courseId: course.id,
            module,
            subcategory: course.subcategory,
            overwrite,
            onOutput: (chunk) => addJobLog(job, chunk),
          });
          results.push(result);
        }

        job.result = { category, totalCourses: results.length, failed: results.filter((item) => !item.ok).length, results };
        job.status = job.result.failed === 0 ? 'completed' : 'failed';
        job.updatedAt = new Date().toISOString();
      } catch (error) {
        job.status = 'failed';
        job.result = {
          ok: false,
          error: String(error.message || error),
        };
        job.updatedAt = new Date().toISOString();
      }
    };

    queueMicrotask(() => {
      job.status = 'running';
      void finishJob();
    });

    return c.json({
      success: true,
      message: 'Generation started.',
      data: {
        jobId,
        status: job.status,
        category,
        courseId: requestedCourseId,
        logs: job.logs,
      },
    }, 202);
  } catch (error) {
    return c.json({
      success: false,
      error: 'Automation request failed.',
      details: String(error.message || error),
    }, 500);
  }
});

automation.get('/jobs/:jobId', (c) => {
  const { jobId } = c.req.param();
  const job = generationJobs.get(jobId);

  if (!job) {
    return c.json({ success: false, error: 'Job not found.' }, 404);
  }

  return c.json({
    success: true,
    data: {
      jobId: job.id,
      status: job.status,
      category: job.category,
      courseId: job.courseId,
      module: job.module,
      createdAt: job.createdAt,
      updatedAt: job.updatedAt,
      logs: job.logs,
      result: job.result,
    },
  });
});

export default automation;
