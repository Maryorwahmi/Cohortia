import { db } from '../db/index.js';
import { users, progress, enrollments, lessons, learningBoardProgress, studentPracticalAttempts, studentPracticalProgress } from '../db/schema.js';
import { and, desc, eq, inArray } from 'drizzle-orm';
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
  const courseIds = (c.req.query('courseIds') || '')
    .split(',')
    .map((courseId) => courseId.trim())
    .filter(Boolean);
  const recentOnly = c.req.query('recentOnly') === '1';

  const progressSelection = {
    id: progress.id,
    userId: progress.userId,
    lessonId: progress.lessonId,
    status: progress.status,
    score: progress.score,
    completedAt: progress.completedAt,
    createdAt: progress.createdAt,
    updatedAt: progress.updatedAt,
  };
  const progressData = courseIds.length
    ? await db
      .select(progressSelection)
      .from(progress)
      .innerJoin(lessons, eq(progress.lessonId, lessons.id))
      .where(and(eq(progress.userId, userId), inArray(lessons.trackId, courseIds)))
      .orderBy(desc(progress.updatedAt))
      .limit(recentOnly ? 500 : 5000)
    : await db
      .select(progressSelection)
      .from(progress)
      .where(eq(progress.userId, userId))
      .orderBy(desc(progress.updatedAt))
      .limit(recentOnly ? 500 : 5000);

  const boardProgressData = await db
    .select({
      lessonId: learningBoardProgress.lessonId,
      status: learningBoardProgress.explicitComplete,
      score: learningBoardProgress.score,
      completedAt: learningBoardProgress.completedAt,
      createdAt: learningBoardProgress.createdAt,
      updatedAt: learningBoardProgress.updatedAt,
      studySeconds: learningBoardProgress.studySeconds,
      explicitComplete: learningBoardProgress.explicitComplete,
      watched: learningBoardProgress.watched,
      assessmentPassed: learningBoardProgress.assessmentPassed,
      courseId: learningBoardProgress.courseId,
      module: learningBoardProgress.module,
      chapter: learningBoardProgress.chapter,
    })
    .from(learningBoardProgress)
    .where(and(
      eq(learningBoardProgress.userId, userId),
      ...(courseIds.length ? [inArray(learningBoardProgress.courseId, courseIds)] : []),
    ))
    .orderBy(desc(learningBoardProgress.updatedAt))
    .limit(recentOnly ? 500 : 5000);

  const practicalAttempts = await db
    .select({
      id: studentPracticalAttempts.id,
      practicalId: studentPracticalAttempts.practicalId,
      status: studentPracticalAttempts.status,
      createdAt: studentPracticalAttempts.createdAt,
      updatedAt: studentPracticalAttempts.updatedAt,
    })
    .from(studentPracticalAttempts)
    .where(eq(studentPracticalAttempts.userId, userId))
    .orderBy(desc(studentPracticalAttempts.updatedAt))
    .limit(recentOnly ? 100 : 1000);

  const practicalTaskProgress = await db
    .select({
      id: studentPracticalProgress.id,
      practicalId: studentPracticalProgress.practicalId,
      taskId: studentPracticalProgress.taskId,
      status: studentPracticalProgress.status,
      attempts: studentPracticalProgress.attempts,
      completedAt: studentPracticalProgress.completedAt,
      updatedAt: studentPracticalProgress.updatedAt,
    })
    .from(studentPracticalProgress)
    .where(eq(studentPracticalProgress.userId, userId))
    .orderBy(desc(studentPracticalProgress.updatedAt))
    .limit(recentOnly ? 500 : 5000);

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
