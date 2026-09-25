import { db } from '../db/index.js';
import { users, progress, enrollments, learningBoardProgress, studentPracticalAttempts, studentPracticalProgress } from '../db/schema.js';
import { eq } from 'drizzle-orm';
import { Hono } from 'hono';

const usersRoute = new Hono();

// Get current user profile
usersRoute.get('/profile', async (c) => {
  const userId = c.get('userId');
  
  const userResult = await db
    .select()
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);

  if (userResult.length === 0) {
    return c.json({ success: false, error: 'User not found' }, 404);
  }

  const user = userResult[0];
  delete user.password;

  return c.json({ success: true, data: { user } });
});

// Update user profile
usersRoute.put('/profile', async (c) => {
  const userId = c.get('userId');
  const body = await c.req.json();

  const updateData = {
    name: body.name,
    phone: body.phone,
    country: body.country,
    currentStatus: body.currentStatus,
    careerGoal: body.careerGoal,
    desiredField: body.desiredField,
    roadmapSelection: body.roadmapSelection,
    availability: body.availability,
    portfolioLink: body.portfolioLink,
    updatedAt: new Date().toISOString(),
  };

  // Remove undefined values
  Object.keys(updateData).forEach(key => {
    if (updateData[key] === undefined) delete updateData[key];
  });

  await db
    .update(users)
    .set(updateData)
    .where(eq(users.id, userId));

  const updatedUser = await db
    .select()
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);

  const user = updatedUser[0];
  delete user.password;

  return c.json({ success: true, data: { user } });
});

// Get user progress
usersRoute.get('/progress', async (c) => {
  const userId = c.get('userId');

  const progressData = await db
    .select()
    .from(progress)
    .where(eq(progress.userId, userId));

  const boardProgressData = await db
    .select()
    .from(learningBoardProgress)
    .where(eq(learningBoardProgress.userId, userId));

  const practicalAttempts = await db
    .select()
    .from(studentPracticalAttempts)
    .where(eq(studentPracticalAttempts.userId, userId));

  const practicalTaskProgress = await db
    .select()
    .from(studentPracticalProgress)
    .where(eq(studentPracticalProgress.userId, userId));

  const boardProgress = boardProgressData.map((item) => ({
    lessonId: item.lessonId,
    status: item.completedAt ? 'completed' : 'in_progress',
    score: item.score,
    completedAt: item.completedAt,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
    studySeconds: item.studySeconds,
    explicitComplete: Boolean(item.explicitComplete),
    watched: Boolean(item.watched),
    assessmentPassed: Boolean(item.assessmentPassed),
    courseId: item.courseId,
    module: item.module,
    chapter: item.chapter,
  }));

  return c.json({
    success: true,
    data: {
      progress: [...progressData, ...boardProgress],
      practicalAttempts,
      practicalTaskProgress,
    },
  });
});

// Get user enrollments
usersRoute.get('/enrollments', async (c) => {
  const userId = c.get('userId');

  const enrollmentData = await db
    .select()
    .from(enrollments)
    .where(eq(enrollments.userId, userId));

  return c.json({ success: true, data: { enrollments: enrollmentData } });
});

export default usersRoute;
