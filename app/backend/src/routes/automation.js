import { Hono } from 'hono';
import { authMiddleware } from '../middleware/auth.js';
import {
  createAutomationJob,
  cancelAllAutomationJobs,
  getAutomationJob,
  listAutomationCourses,
  listAutomationSubcategories,
  recordAutomationWorkerEvent,
  claimAutomationJob,
} from '../lib/automationJobs.js';

const automation = new Hono();
const allowedCategories = ['computer-science', 'artificial-intelligence'];

automation.use('/internal/*', async (c, next) => {
  const expected = process.env.AUTOMATION_WORKER_TOKEN;
  const received = c.req.header('X-Automation-Worker-Token');
  if (!expected || !received || received !== expected) {
    return c.json({ success: false, error: 'Unauthorized worker request.' }, 401);
  }
  await next();
});

automation.post('/internal/jobs/:jobId/events', async (c) => {
  try {
    const event = await c.req.json();
    const job = await recordAutomationWorkerEvent(c.req.param('jobId'), event);
    return c.json({ success: true, data: { status: job?.status || null } });
  } catch (error) {
    return c.json({ success: false, error: String(error?.message || error) }, 400);
  }
});

automation.post('/internal/jobs/claim', async (c) => {
  const job = await claimAutomationJob();
  return c.json({ success: true, data: job ? {
    jobId: job.id,
    category: job.category,
    subcategory: job.subcategory,
    courseId: job.courseId,
    module: job.module,
    overwrite: job.overwrite,
  } : null });
});

automation.get('/internal/jobs/:jobId', async (c) => {
  const job = await getAutomationJob(c.req.param('jobId'));
  if (!job) return c.json({ success: false, error: 'Job not found.' }, 404);
  return c.json({ success: true, data: { status: job.status } });
});

automation.use('*', async (c, next) => {
  if (c.req.path.includes('/internal/')) return next();
  return authMiddleware(c, next);
});
automation.use('*', async (c, next) => {
  if (c.req.path.includes('/internal/')) return next();
  if (c.get('user')?.role !== 'admin') {
    return c.json({ success: false, error: 'Forbidden', message: 'Administrator access is required.' }, 403);
  }
  await next();
});

automation.get('/categories', (c) => c.json({
  success: true,
  data: {
    categories: [
      { id: 'computer-science', label: 'Computer Science' },
      { id: 'artificial-intelligence', label: 'Artificial Intelligence' },
    ],
  },
}));

automation.get('/courses', async (c) => {
  try {
    const category = String(c.req.query('category') || 'computer-science');
    if (!allowedCategories.includes(category)) return c.json({ success: false, error: 'Unsupported category.' }, 400);
    const subcategory = c.req.query('subcategory') || null;
    const [subcategories, courses] = await Promise.all([
      listAutomationSubcategories(category),
      listAutomationCourses(category, subcategory),
    ]);
    return c.json({ success: true, data: { category, subcategories, courses } });
  } catch (error) {
    return c.json({ success: false, error: 'Unable to read the canonical course catalog.', details: String(error?.message || error) }, 500);
  }
});

automation.post('/generate', async (c) => {
  try {
    const body = await c.req.json();
    const category = String(body?.category || 'computer-science');
    const courseId = String(body?.courseId || 'all');
    const subcategory = body?.subcategory ? String(body.subcategory) : null;
    const module = Number.isInteger(body?.module) ? body.module : null;
    if (!allowedCategories.includes(category)) return c.json({ success: false, error: 'Unsupported category.' }, 400);
    if (!subcategory && courseId === 'all') {
      return c.json({ success: false, error: 'Choose a subcategory before generating all of its courses.' }, 400);
    }
    const job = await createAutomationJob({
      requestedByUserId: c.get('userId'), category, subcategory, courseId, module, overwrite: Boolean(body?.overwrite),
    });
    return c.json({
      success: true,
      message: 'Generation job queued.',
      data: { jobId: job.id, status: job.status, category: job.category, courseId: job.courseId, logs: [job.logs] },
    }, 202);
  } catch (error) {
    return c.json({ success: false, error: 'Automation request failed.', details: String(error?.message || error) }, 500);
  }
});

automation.get('/jobs/:jobId', async (c) => {
  const job = await getAutomationJob(c.req.param('jobId'));
  if (!job) return c.json({ success: false, error: 'Job not found.' }, 404);
  if (job.requestedByUserId !== c.get('userId')) return c.json({ success: false, error: 'Forbidden' }, 403);
  return c.json({
    success: true,
    data: {
      jobId: job.id, status: job.status, category: job.category, subcategory: job.subcategory,
      courseId: job.courseId, module: job.module, attempts: job.attempts, createdAt: job.createdAt,
      startedAt: job.startedAt, updatedAt: job.updatedAt, completedAt: job.completedAt,
      logs: job.logs ? job.logs.split('\n') : [], result: job.result ? JSON.parse(job.result) : null, error: job.error,
    },
  });
});

automation.post('/jobs/stop-all', async (c) => {
  const cancelledCount = await cancelAllAutomationJobs();
  return c.json({
    success: true,
    message: `Emergency stop completed. ${cancelledCount} job(s) cancelled.`,
    data: { cancelledCount },
  });
});

export default automation;
