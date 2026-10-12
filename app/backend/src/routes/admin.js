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
  users,
  communityPosts,
  communityReports,
  communityModerationActions,
} from '../db/schema.js';
import { authMiddleware } from '../middleware/auth.js';
import { desc, sql } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';

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
    boardChapters,
    boardScreens,
    practicals,
    assessments,
  ] = await Promise.all([
    db.select().from(catalogCourses),
    db.select().from(adminCoursePermissions).where(eq(adminCoursePermissions.adminUserId, user.id)),
    db.select({
      courseId: learningBoardChapters.courseId,
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
      screens: boardScreens.some((screen) => screen.courseId === course.id),
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

admin.get('/community/reports', async (c) => {
  const reports = await db.select().from(communityReports).orderBy(desc(communityReports.createdAt)).limit(100);
  const postIds = reports.map((report) => report.postId).filter(Boolean);
  const posts = postIds.length ? await db.select({id: communityPosts.id, title: communityPosts.title, content: communityPosts.content, status: communityPosts.status}).from(communityPosts).where(inArray(communityPosts.id, postIds)) : [];
  const postMap = new Map(posts.map((post) => [post.id, post]));
  return c.json({success: true, data: {reports: reports.map((report) => ({...report, post: report.postId ? postMap.get(report.postId) || null : null}))}});
});

admin.get('/community/stats', async (c) => {
  const [posts, openReports, hiddenPosts] = await Promise.all([
    db.select({count: sql`count(*)`}).from(communityPosts),
    db.select({count: sql`count(*)`}).from(communityReports).where(eq(communityReports.status, 'open')),
    db.select({count: sql`count(*)`}).from(communityPosts).where(eq(communityPosts.status, 'hidden')),
  ]);
  return c.json({success: true, data: {totalPosts: Number(posts[0]?.count || 0), openReports: Number(openReports[0]?.count || 0), hiddenPosts: Number(hiddenPosts[0]?.count || 0)}});
});

admin.put('/community/posts/:postId', async (c) => {
  const moderatorId = c.get('userId'); const postId = c.req.param('postId'); const body = await c.req.json();
  const allowed = ['published', 'hidden', 'removed'];
  if (body.status && !allowed.includes(body.status)) return c.json({success: false, error: 'Invalid moderation status'}, 400);
  const [post] = await db.select().from(communityPosts).where(eq(communityPosts.id, postId)).limit(1);
  if (!post) return c.json({success: false, error: 'Post not found'}, 404);
  const now = new Date().toISOString(); const changes = {};
  if (body.status) changes.status = body.status; if (typeof body.isPinned === 'boolean') changes.isPinned = body.isPinned; if (typeof body.isLocked === 'boolean') changes.isLocked = body.isLocked; if (typeof body.isSolved === 'boolean') changes.isSolved = body.isSolved;
  changes.updatedAt = now;
  await db.update(communityPosts).set(changes).where(eq(communityPosts.id, postId));
  await db.insert(communityModerationActions).values({id: uuidv4(), moderatorUserId: moderatorId, targetUserId: post.userId, postId, action: body.status ? `set_status:${body.status}` : 'update_flags', reason: body.reason || null, createdAt: now});
  return c.json({success: true, message: 'Community post updated'});
});

admin.put('/community/reports/:reportId', async (c) => {
  const moderatorId = c.get('userId'); const reportId = c.req.param('reportId'); const body = await c.req.json();
  if (!['open', 'reviewing', 'resolved', 'dismissed'].includes(body.status)) return c.json({success: false, error: 'Invalid report status'}, 400);
  const [report] = await db.select().from(communityReports).where(eq(communityReports.id, reportId)).limit(1);
  if (!report) return c.json({success: false, error: 'Report not found'}, 404);
  await db.update(communityReports).set({status: body.status, resolution: body.resolution || null, resolvedByUserId: moderatorId, updatedAt: new Date().toISOString()}).where(eq(communityReports.id, reportId));
  return c.json({success: true, message: 'Report updated'});
});

export default admin;
