import 'dotenv/config';
import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { prettyJSON } from 'hono/pretty-json';

// Import routes
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import careerRoutes from './routes/careers.js';
import trackRoutes from './routes/tracks.js';
import communityRoutes from './routes/community.js';
import internshipRoutes from './routes/internships.js';
import learningRoutes from './routes/learning.js';
import contactRoutes from './routes/contact.js';
import chatRoutes from './routes/chat.js';
import roadmapRoutes from './routes/roadmaps.js';
import mentorRoutes from './routes/mentor.js';

import lessonsRoutes from './routes/lessons.js';
import projectsRoutes from './routes/projects.js';
import activityRoutes from './routes/activity.js';
import notificationsRoutes from './routes/notifications.js';
import newsletterRoutes from './routes/newsletter.js';
import statsRoutes from './routes/stats.js';
import contentRoutes from './routes/content.js';
import bookingsRoutes from './routes/bookings.js';
import eventsRoutes from './routes/events.js';
import communityReactionsRoutes from './routes/communityReactions.js';
import studyRoomsRoutes from './routes/studyRooms.js';
import generatedRoutes from './routes/generated.js';
import catalogCoursesRoutes from './routes/catalogCourses.js';
import assessmentsRoutes from './routes/assessments.js';
import automationRoutes from './routes/automation.js';
import { startAutomationWorker } from './lib/automationJobs.js';
import { errorHandler } from './middleware/errorHandler.js';
import { authMiddleware } from './middleware/auth.js';

const app = new Hono();

// Global middleware
app.use('*', logger());
app.use('*', cors({
  origin: (process.env.CORS_ORIGIN || 'http://localhost:5173')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean)
    .concat(['https://cohortia.study', 'https://www.cohortia.study']),
  credentials: true,
}));
app.use('*', prettyJSON());

// Health check
app.get('/health', (c) => {
  return c.json({
    status: 'ok',
    service: 'cohortia-api',
    timestamp: new Date().toISOString(),
  });
});

// Public routes (no auth required)
app.route('/api/v1/auth', authRoutes);
app.route('/api/v1/careers', careerRoutes);
app.route('/api/v1/catalog-courses', catalogCoursesRoutes);
app.route('/api/v1/assessments', assessmentsRoutes);
app.route('/api/v1/automation', automationRoutes);
app.route('/api/v1/contact', contactRoutes);
app.route('/api/v1/chat', chatRoutes);
app.route('/api/v1/events', eventsRoutes);
app.route('/api/v1/newsletter', newsletterRoutes);
app.route('/api/v1/content', contentRoutes);
app.route('/api/v1/stats', statsRoutes);
app.route('/api/v1/bookings', bookingsRoutes);

// Community: posts require auth (handled inside communityRoutes);
// reactions/rooms are public to read, auth required for mutations.
app.route('/api/v1/community', communityRoutes);
app.route('/api/v1/community', communityReactionsRoutes);
app.route('/api/v1/community', studyRoomsRoutes);
// Dev-only generated content preview
app.route('/api/v1/dev/generated', generatedRoutes);

// Public learning board endpoints (read-only)
app.route('/api/v1/learning-boards', learningRoutes);

// Protected routes (auth required)
app.use('/api/v1/users/*', authMiddleware);
app.route('/api/v1/users', userRoutes);

app.route('/api/v1/tracks', trackRoutes);

app.use('/api/v1/internships/*', authMiddleware);
app.route('/api/v1/internships', internshipRoutes);

app.use('/api/v1/learning/*', authMiddleware);
app.route('/api/v1/learning', learningRoutes);

app.use('/api/v1/roadmaps/*', authMiddleware);
app.route('/api/v1/roadmaps', roadmapRoutes);

app.use('/api/v1/lessons/*', authMiddleware);
app.route('/api/v1/lessons', lessonsRoutes);

app.use('/api/v1/projects/*', authMiddleware);
app.route('/api/v1/projects', projectsRoutes);

app.use('/api/v1/mentor/*', authMiddleware);
app.route('/api/v1/mentor', mentorRoutes);

app.use('/api/v1/activity/*', authMiddleware);
app.route('/api/v1/activity', activityRoutes);

app.use('/api/v1/notifications/*', authMiddleware);
app.route('/api/v1/notifications', notificationsRoutes);

app.get('*', async (c) => {
  return c.json({
    success: false,
    error: c.req.path.startsWith('/api/') ? 'Not Found' : 'API service only',
    message: 'Use the Cloudflare frontend or an /api/v1 endpoint.',
  }, 404);
});

// Global error handler
app.onError(errorHandler);

// 404 handler
app.notFound((c) => {
  return c.json({
    success: false,
    error: 'Not Found',
    message: `Route ${c.req.url} not found`,
  }, 404);
});

const PORT = process.env.PORT || 3000;

console.log(`🚀 Cohortia API starting on port ${PORT}...`);

const automationWorkerEnabled = process.env.AUTOMATION_WORKER_ENABLED !== 'false'
  && !['github', 'azure'].includes(process.env.AUTOMATION_EXECUTION)
  && process.env.AUTOMATION_WORKER_ROLE !== 'background';
if (automationWorkerEnabled) {
  startAutomationWorker().catch((error) => {
    console.error('Unable to start the automation worker:', error);
  });
} else {
  console.log(process.env.AUTOMATION_EXECUTION === 'github'
    ? 'Automation worker delegated to GitHub Actions.'
    : process.env.AUTOMATION_EXECUTION === 'azure'
      ? 'Automation worker delegated to Azure Container Apps.'
    : 'Automation worker disabled via AUTOMATION_WORKER_ENABLED=false');
}

serve({
  fetch: app.fetch,
  port: PORT,
});
