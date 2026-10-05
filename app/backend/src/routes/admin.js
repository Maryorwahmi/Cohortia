import { Hono } from 'hono';
import { and, eq, inArray, notInArray } from 'drizzle-orm';
import { db } from '../db/index.js';
import {
  adminCoursePermissions,
  catalogCourses,
  csAssessments,
  learningBoardChapters,
  learningBoardPracticals,
  learningBoardScreens,
  lessons,
  users,
} from '../db/schema.js';
import { authMiddleware } from '../middleware/auth.js';

const admin = new Hono();

admin.use('*', authMiddleware);
admin.use('*', async (c, next) => {
  const user = c.get('user');
  if (!user?.adminRole) {
    return c.json({ success: false, error: 'Admin access is required' }, 403);
  }
  await next();
});

function isAlphaAdmin(c) {
  return c.get('user')?.adminRole === 'alpha';
}

admin.get('/courses', async (c) => {
  const user = c.get('user');
  const [
    courses,
    permissions,
    lessonsList,
    boardChapters,
    boardScreens,
    practicals,
    assessments,
  ] = await Promise.all([
    db.select().from(catalogCourses),
    db.select().from(adminCoursePermissions).where(eq(adminCoursePermissions.adminUserId, user.id)),
    db.select({ trackId: lessons.trackId }).from(lessons),
    db.select({
      courseId: learningBoardChapters.courseId,
      screensCount: learningBoardChapters.screensCount,
      assessmentData: learningBoardChapters.assessmentData,
    }).from(learningBoardChapters),
    db.select({ courseId: learningBoardScreens.courseId }).from(learningBoardScreens),
    db.select({ courseId: learningBoardPracticals.courseId }).from(learningBoardPracticals),
    db.select({ courseId: csAssessments.courseId }).from(csAssessments),
  ]);

  const coursePermissions = new Map(permissions.map((permission) => [permission.courseId, permission]));
  const result = courses.map((course) => {
    const chapters = boardChapters.filter((chapter) => chapter.courseId === course.id);
    const permission = coursePermissions.get(course.id);
    const availability = {
      screens: lessonsList.some((lesson) => lesson.trackId === course.id)
        || boardScreens.some((screen) => screen.courseId === course.id)
        || chapters.some((chapter) => Number(chapter.screensCount) > 0),
      assessments: assessments.some((assessment) => assessment.courseId === course.id)
        || chapters.some((chapter) => Boolean(chapter.assessmentData)),
      practicals: practicals.some((practical) => practical.courseId === course.id),
    };
    const access = isAlphaAdmin(c)
      ? { screens: true, assessments: true, practicals: true, other: true }
      : {
          screens: Boolean(permission?.canViewScreens),
          assessments: Boolean(permission?.canTakeAssessments),
          practicals: Boolean(permission?.canUsePracticals),
          other: Boolean(permission?.canViewOther),
        };

    availability.other = !availability.screens && !availability.assessments && !availability.practicals;
    return { ...course, availability, access };
  }).filter((course) => isAlphaAdmin(c) || Object.values(course.access).some(Boolean));

  return c.json({ success: true, data: { courses: result, isAlphaAdmin: isAlphaAdmin(c) } });
});

admin.get('/users', async (c) => {
  if (!isAlphaAdmin(c)) return c.json({ success: false, error: 'Only the alpha admin can manage admins' }, 403);

  const allUsers = await db.select({
    id: users.id,
    name: users.name,
    email: users.email,
    adminRole: users.adminRole,
    role: users.role,
  }).from(users);
  const permissions = await db.select().from(adminCoursePermissions);
  const coursesByUser = new Map();
  for (const permission of permissions) {
    const courseList = coursesByUser.get(permission.adminUserId) || [];
    courseList.push({
      courseId: permission.courseId,
      screens: Boolean(permission.canViewScreens),
      assessments: Boolean(permission.canTakeAssessments),
      practicals: Boolean(permission.canUsePracticals),
      other: Boolean(permission.canViewOther),
    });
    coursesByUser.set(permission.adminUserId, courseList);
  }

  return c.json({
    success: true,
    data: {
      users: allUsers
        .filter((account) => account.adminRole !== 'alpha')
        .map((account) => ({ ...account, coursePermissions: coursesByUser.get(account.id) || [] })),
    },
  });
});

admin.put('/users/:userId/access', async (c) => {
  if (!isAlphaAdmin(c)) return c.json({ success: false, error: 'Only the alpha admin can manage admins' }, 403);

  const userId = c.req.param('userId');
  const [account] = await db.select().from(users).where(eq(users.id, userId)).limit(1);
  if (!account) return c.json({ success: false, error: 'User not found' }, 404);
  if (account.adminRole === 'alpha') {
    return c.json({ success: false, error: 'Alpha admin access cannot be changed here' }, 400);
  }

  const body = await c.req.json().catch(() => null);
  if (!Array.isArray(body?.coursePermissions)) {
    return c.json({ success: false, error: 'coursePermissions must be an array' }, 400);
  }

  const requested = new Map();
  for (const item of body.coursePermissions) {
    if (
      !item || typeof item.courseId !== 'string' || !item.courseId.trim()
      || typeof item.screens !== 'boolean'
      || typeof item.assessments !== 'boolean'
      || typeof item.practicals !== 'boolean'
      || typeof item.other !== 'boolean'
    ) {
      return c.json({ success: false, error: 'Each course permission requires a courseId and boolean screens, assessments, practicals, and other values' }, 400);
    }
    requested.set(item.courseId, item);
  }

  const requestedCourseIds = [...requested.keys()];
  if (requestedCourseIds.length) {
    const existingCourses = await db.select({ id: catalogCourses.id }).from(catalogCourses).where(inArray(catalogCourses.id, requestedCourseIds));
    if (existingCourses.length !== requestedCourseIds.length) {
      return c.json({ success: false, error: 'One or more selected courses were not found' }, 400);
    }
  }

  const now = new Date().toISOString();
  const rows = [...requested.values()]
    .filter((item) => item.screens || item.assessments || item.practicals || item.other)
    .map((item) => ({
      adminUserId: userId,
      courseId: item.courseId,
      canViewScreens: item.screens,
      canTakeAssessments: item.assessments,
      canUsePracticals: item.practicals,
      canViewOther: item.other,
      createdAt: now,
      updatedAt: now,
    }));

  if (rows.length) {
    for (const row of rows) {
      await db.insert(adminCoursePermissions).values(row).onConflictDoUpdate({
        target: [adminCoursePermissions.adminUserId, adminCoursePermissions.courseId],
        set: {
          canViewScreens: row.canViewScreens,
          canTakeAssessments: row.canTakeAssessments,
          canUsePracticals: row.canUsePracticals,
          canViewOther: row.canViewOther,
          updatedAt: now,
        },
      });
    }
  }
  const grantedCourseIds = rows.map((row) => row.courseId);
  if (grantedCourseIds.length) {
    await db.delete(adminCoursePermissions).where(and(
      eq(adminCoursePermissions.adminUserId, userId),
      notInArray(adminCoursePermissions.courseId, grantedCourseIds),
    ));
  } else {
    await db.delete(adminCoursePermissions).where(eq(adminCoursePermissions.adminUserId, userId));
  }
  await db.update(users).set({ adminRole: 'admin', updatedAt: now }).where(eq(users.id, userId));

  return c.json({ success: true, message: 'Admin course access saved' });
});

admin.delete('/users/:userId/access', async (c) => {
  if (!isAlphaAdmin(c)) return c.json({ success: false, error: 'Only the alpha admin can manage admins' }, 403);

  const userId = c.req.param('userId');
  const [account] = await db.select().from(users).where(eq(users.id, userId)).limit(1);
  if (!account) return c.json({ success: false, error: 'User not found' }, 404);
  if (account.adminRole === 'alpha' || account.id === c.get('userId')) {
    return c.json({ success: false, error: 'Alpha admin access cannot be revoked here' }, 400);
  }

  await db.delete(adminCoursePermissions).where(eq(adminCoursePermissions.adminUserId, userId));
  await db.update(users).set({ adminRole: null, updatedAt: new Date().toISOString() }).where(eq(users.id, userId));
  return c.json({ success: true, message: 'Admin access revoked' });
});

export default admin;
