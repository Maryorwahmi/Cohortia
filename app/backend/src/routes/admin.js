import { Hono } from 'hono';
import { and, asc, desc, eq, exists, inArray, like, not, notInArray, or, sql } from 'drizzle-orm';
import { createHash, randomBytes } from 'node:crypto';
import { z } from 'zod';
import { db } from '../db/index.js';
import {
  adminCoursePermissions,
  aiLessons,
  automationJobs,
  bookings,
  catalogCourses,
  csAssessments,
  communityBookmarks,
  communityComments,
  communityModerationActions,
  communityPosts,
  communityReactions,
  communityReports,
  courseFinalExamAttemptAnswers,
  courseFinalExamAttemptGrants,
  courseFinalExamAttempts,
  courseFinalReviewAudit,
  eventRsvps,
  enrollments,
  internshipSubmissions,
  learningBoardChapters,
  learningBoardPracticals,
  learningBoardProgress,
  learningBoardScreens,
  mailingUnsubscribeTokens,
  mentorContext,
  newsletterSubscriptions,
  notifications,
  progress,
  projectTemplates,
  studentPracticalAttempts,
  studentPracticalProgress,
  studyRoomParticipants,
  studyRooms,
  userActivityLog,
  userActionTokens,
  userCourseFinalProgress,
  userLessonProgress,
  userProjectSubmissionFiles,
  userProjectSubmissions,
  userRoadmaps,
  users,
} from '../db/schema.js';
import { authMiddleware } from '../middleware/auth.js';
import { v4 as uuidv4 } from 'uuid';
import { deleteR2Object, isR2Configured } from '../lib/r2Storage.js';
import { enforceRateLimits } from '../lib/rateLimit.js';
import { sendTransactionalEmail } from '../lib/brevo.js';

const admin = new Hono();
const ANONYMIZED_USER_ID = 'deleted-account';
const mailingBroadcastSchema = z.object({
  recipients: z.array(z.string().trim().email().max(255)).min(1).max(100),
  subject: z.string().trim().min(1).max(160).regex(/^[^\r\n]+$/, 'Subject must be a single line'),
  message: z.string().trim().min(1).max(10000),
  consentConfirmed: z.literal(true),
});

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

function escapeEmailHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character]);
}

function hashMailingToken(token) {
  return createHash('sha256').update(token).digest('hex');
}

admin.post('/mailing/send', async (c) => {
  const user = c.get('user');
  const rateLimitResponse = await enforceRateLimits(c, [{
    scope: 'admin-mailing-user',
    actor: user.id,
    limit: 3,
    windowSeconds: 60 * 60,
  }]);
  if (rateLimitResponse) return rateLimitResponse;

  const body = await c.req.json().catch(() => null);
  const result = mailingBroadcastSchema.safeParse(body);
  if (!result.success) {
    return c.json({
      success: false,
      error: 'Validation failed',
      details: result.error.flatten().fieldErrors,
    }, 400);
  }

  const {subject, message} = result.data;
  const recipients = [...new Set(result.data.recipients.map((email) => email.toLowerCase()))];
  if (recipients.length > 100) {
    return c.json({success: false, error: 'A mailing can contain at most 100 unique addresses.'}, 400);
  }

  const now = new Date().toISOString();
  const frontendUrl = (process.env.FRONTEND_URL || 'http://localhost:5173').replace(/\/+$/, '');
  const deliverable = [];
  const skipped = [];

  for (const email of recipients) {
    const [existing] = await db.select().from(newsletterSubscriptions)
      .where(eq(newsletterSubscriptions.email, email))
      .limit(1);
    if (existing?.status === 'unsubscribed') {
      skipped.push({email, reason: 'This address has unsubscribed.'});
      continue;
    }
    if (existing?.status === 'confirming') {
      skipped.push({email, reason: 'Subscription confirmation is in progress.'});
      continue;
    }

    const token = randomBytes(32).toString('hex');
    const tokenHash = hashMailingToken(token);
    if (existing) {
      await db.update(newsletterSubscriptions).set({
        status: existing.status === 'confirmed' ? 'confirmed' : 'manual',
        confirmationTokenHash: null,
        confirmationExpiresAt: null,
        unsubscribeTokenHash: tokenHash,
        previousUnsubscribeTokenHash: existing.unsubscribeTokenHash,
        updatedAt: now,
      }).where(eq(newsletterSubscriptions.id, existing.id));
    } else {
      await db.insert(newsletterSubscriptions).values({
        id: uuidv4(),
        email,
        name: null,
        status: 'manual',
        confirmationTokenHash: null,
        confirmationExpiresAt: null,
        unsubscribeTokenHash: tokenHash,
        previousUnsubscribeTokenHash: null,
        unsubscribedAt: null,
        subscribedAt: now,
        createdAt: now,
        updatedAt: now,
      });
    }
    await db.insert(mailingUnsubscribeTokens).values({
      id: uuidv4(),
      email,
      tokenHash,
      createdAt: now,
    });
    deliverable.push({
      email,
      unsubscribeUrl: `${frontendUrl}/newsletter/unsubscribe?token=${token}`,
    });
  }

  const failed = [];
  const safeMessage = escapeEmailHtml(message).replace(/\r?\n/g, '<br>');
  for (let offset = 0; offset < deliverable.length; offset += 5) {
    await Promise.all(deliverable.slice(offset, offset + 5).map(async ({email, unsubscribeUrl}) => {
      try {
        await sendTransactionalEmail({
          email,
          subject,
          html: `<div>${safeMessage}</div><hr><p>You are receiving this message because you agreed to receive Cohortia updates. <a href="${escapeEmailHtml(unsubscribeUrl)}">Unsubscribe</a></p>`,
          text: `${message}\n\n---\nYou are receiving this message because you agreed to receive Cohortia updates.\nUnsubscribe: ${unsubscribeUrl}`,
          tags: ['admin-broadcast'],
        });
      } catch (error) {
        console.error('[admin-mailing] Delivery failed:', error instanceof Error ? error.message : 'Unknown error');
        failed.push({
          email,
          reason: error instanceof Error ? error.message : 'Delivery failed.',
        });
      }
    }));
  }

  return c.json({
    success: true,
    data: {
      acceptedByBrevo: deliverable.length - failed.length,
      failed,
      skipped,
    },
  });
});

admin.get('/courses', async (c) => {
  const user = c.get('user');
  const alphaAdmin = isAlphaAdmin(c);
  const requestedPage = Number.parseInt(c.req.query('page') || '1', 10);
  const requestedPageSize = Number.parseInt(c.req.query('pageSize') || '30', 10);
  const page = Number.isFinite(requestedPage) ? Math.min(Math.max(requestedPage, 1), 100000) : 1;
  const pageSize = Number.isFinite(requestedPageSize) ? Math.min(Math.max(requestedPageSize, 1), 100) : 30;
  const offset = (page - 1) * pageSize;
  const courseId = (c.req.query('courseId') || '').trim().slice(0, 200);
  const search = (c.req.query('search') || '').trim().slice(0, 120);
  const filter = c.req.query('filter') || 'all';

  const hasScreens = exists(
    db.select({ id: learningBoardScreens.id })
      .from(learningBoardScreens)
      .where(eq(learningBoardScreens.courseId, catalogCourses.id)),
  );
  const hasPractical = exists(
    db.select({ id: learningBoardPracticals.id })
      .from(learningBoardPracticals)
      .where(eq(learningBoardPracticals.courseId, catalogCourses.id)),
  );
  const hasChapterAssessment = exists(
    db.select({ id: learningBoardChapters.id })
      .from(learningBoardChapters)
      .where(and(
        eq(learningBoardChapters.courseId, catalogCourses.id),
        sql`${learningBoardChapters.assessmentData} is not null and ${learningBoardChapters.assessmentData} != ''`,
      )),
  );
  const hasAssessment = or(
    exists(
      db.select({ id: csAssessments.id })
        .from(csAssessments)
        .where(eq(csAssessments.courseId, catalogCourses.id)),
    ),
    hasChapterAssessment,
  );

  const conditions = [];
  if (!alphaAdmin) {
    conditions.push(exists(
      db.select({ courseId: adminCoursePermissions.courseId })
        .from(adminCoursePermissions)
        .where(and(
          eq(adminCoursePermissions.adminUserId, user.id),
          eq(adminCoursePermissions.courseId, catalogCourses.id),
          or(
            eq(adminCoursePermissions.canViewScreens, true),
            eq(adminCoursePermissions.canTakeAssessments, true),
            eq(adminCoursePermissions.canUsePracticals, true),
            eq(adminCoursePermissions.canViewOther, true),
          ),
        )),
    ));
  }
  if (courseId) conditions.push(eq(catalogCourses.id, courseId));
  if (search) {
    const searchPattern = `%${search}%`;
    conditions.push(or(
      like(catalogCourses.title, searchPattern),
      like(catalogCourses.provider, searchPattern),
      like(catalogCourses.category, searchPattern),
      like(catalogCourses.subcategory, searchPattern),
      like(catalogCourses.marketCategory, searchPattern),
      like(catalogCourses.marketSubcategory, searchPattern),
    ));
  }
  if (filter === 'screens-ready') conditions.push(hasScreens);
  if (filter === 'screens-pending') conditions.push(not(hasScreens));
  if (filter === 'assessments') conditions.push(hasAssessment);
  if (filter === 'practicals') conditions.push(hasPractical);
  if (filter === 'other') conditions.push(and(not(hasScreens), not(hasAssessment), not(hasPractical)));

  const where = conditions.length ? and(...conditions) : undefined;
  const [countRows, courses] = await Promise.all([
    db.select({ total: sql`count(*)` }).from(catalogCourses).where(where),
    db.select()
      .from(catalogCourses)
      .where(where)
      .orderBy(asc(catalogCourses.title), asc(catalogCourses.id))
      .limit(pageSize)
      .offset(offset),
  ]);
  const total = Number(countRows[0]?.total || 0);
  const courseIds = courses.map((course) => course.id);

  if (!courseIds.length) {
    return c.json({
      success: true,
      data: {
        courses: [],
        isAlphaAdmin: alphaAdmin,
        pagination: { page, pageSize, total, hasMore: false },
      },
    });
  }

  const [
    screenRows,
    chapterAssessmentRows,
    practicalRows,
    assessmentRows,
    permissionRows,
  ] = await Promise.all([
    db.selectDistinct({ courseId: learningBoardScreens.courseId })
      .from(learningBoardScreens)
      .where(inArray(learningBoardScreens.courseId, courseIds)),
    db.selectDistinct({ courseId: learningBoardChapters.courseId })
      .from(learningBoardChapters)
      .where(and(
        inArray(learningBoardChapters.courseId, courseIds),
        sql`${learningBoardChapters.assessmentData} is not null and ${learningBoardChapters.assessmentData} != ''`,
      )),
    db.selectDistinct({ courseId: learningBoardPracticals.courseId })
      .from(learningBoardPracticals)
      .where(inArray(learningBoardPracticals.courseId, courseIds)),
    db.selectDistinct({ courseId: csAssessments.courseId })
      .from(csAssessments)
      .where(inArray(csAssessments.courseId, courseIds)),
    alphaAdmin
      ? Promise.resolve([])
      : db.select()
        .from(adminCoursePermissions)
        .where(and(
          eq(adminCoursePermissions.adminUserId, user.id),
          inArray(adminCoursePermissions.courseId, courseIds),
        )),
  ]);

  const screenCourseIds = new Set(screenRows.map((row) => row.courseId));
  const assessmentCourseIds = new Set([
    ...chapterAssessmentRows.map((row) => row.courseId),
    ...assessmentRows.map((row) => row.courseId),
  ]);
  const practicalCourseIds = new Set(practicalRows.map((row) => row.courseId));
  const permissionsByCourseId = new Map(permissionRows.map((permission) => [permission.courseId, permission]));
  const result = courses.map((course) => {
    const screens = screenCourseIds.has(course.id);
    const assessments = assessmentCourseIds.has(course.id);
    const practicals = practicalCourseIds.has(course.id);
    const permission = permissionsByCourseId.get(course.id);
    return {
      ...course,
      availability: {
        screens,
        assessments,
        practicals,
        other: !screens && !assessments && !practicals,
      },
      access: alphaAdmin
        ? { screens: true, assessments: true, practicals: true, other: true }
        : {
            screens: Boolean(permission?.canViewScreens),
            assessments: Boolean(permission?.canTakeAssessments),
            practicals: Boolean(permission?.canUsePracticals),
            other: Boolean(permission?.canViewOther),
          },
    };
  });

  return c.json({
    success: true,
    data: {
      courses: result,
      isAlphaAdmin: alphaAdmin,
      pagination: {
        page,
        pageSize,
        total,
        hasMore: offset + courses.length < total,
      },
    },
  });
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

admin.delete('/users/:userId', async (c) => {
  if (!isAlphaAdmin(c)) return c.json({ success: false, error: 'Only the alpha admin can delete user accounts' }, 403);

  const userId = c.req.param('userId');
  if (userId === c.get('userId')) {
    return c.json({ success: false, error: 'You cannot delete your own account' }, 400);
  }

  const body = await c.req.json().catch(() => null);
  const deletion = await db.transaction(async (tx) => {
    const [currentAccount] = await tx.select({
      id: users.id,
      email: users.email,
      adminRole: users.adminRole,
      avatarObjectKey: users.avatarObjectKey,
    }).from(users).where(eq(users.id, userId)).limit(1);
    if (!currentAccount) return {status: 404, error: 'User not found'};
    if (currentAccount.adminRole === 'alpha') {
      return {status: 400, error: 'Alpha admin accounts cannot be deleted here'};
    }
    if (currentAccount.id === c.get('userId')) {
      return {status: 400, error: 'You cannot delete your own account'};
    }
    if (typeof body?.confirmEmail !== 'string' || body.confirmEmail.trim().toLowerCase() !== currentAccount.email.toLowerCase()) {
      return {status: 400, error: 'Enter the account email to confirm deletion'};
    }

    const files = await tx.select({objectKey: userProjectSubmissionFiles.objectKey})
      .from(userProjectSubmissionFiles)
      .where(eq(userProjectSubmissionFiles.userId, userId));
    const objectKeys = [...new Set([
      currentAccount.avatarObjectKey,
      ...files.map((file) => file.objectKey),
    ].filter(Boolean))];
    if (objectKeys.length && !isR2Configured()) {
      return {
        status: 503,
        error: 'Account files cannot be deleted because object storage is not configured. The account was not deleted.',
      };
    }

    const roadmaps = await tx.select({id: userRoadmaps.id})
      .from(userRoadmaps)
      .where(eq(userRoadmaps.userId, userId));
    const examAttempts = await tx.select({id: courseFinalExamAttempts.id})
      .from(courseFinalExamAttempts)
      .where(eq(courseFinalExamAttempts.userId, userId));
    const submissions = await tx.select({id: userProjectSubmissions.id})
      .from(userProjectSubmissions)
      .where(eq(userProjectSubmissions.userId, userId));
    const roomParticipants = await tx.select({roomId: studyRoomParticipants.roomId})
      .from(studyRoomParticipants)
      .where(eq(studyRoomParticipants.userId, userId));
    const roadmapIds = roadmaps.map((roadmap) => roadmap.id);
    const examAttemptIds = examAttempts.map((attempt) => attempt.id);
    const submissionIds = submissions.map((submission) => submission.id);
    const participantCounts = new Map();
    for (const participant of roomParticipants) {
      participantCounts.set(participant.roomId, (participantCounts.get(participant.roomId) || 0) + 1);
    }

    if (roadmapIds.length) {
      await tx.delete(userLessonProgress).where(inArray(userLessonProgress.roadmapId, roadmapIds));
      await tx.delete(aiLessons).where(inArray(aiLessons.roadmapId, roadmapIds));
      await tx.delete(projectTemplates).where(inArray(projectTemplates.roadmapId, roadmapIds));
    }
    if (examAttemptIds.length) {
      await tx.delete(courseFinalExamAttemptAnswers)
        .where(inArray(courseFinalExamAttemptAnswers.attemptId, examAttemptIds));
    }
    if (submissionIds.length) {
      await tx.delete(courseFinalReviewAudit)
        .where(inArray(courseFinalReviewAudit.submissionId, submissionIds));
    }

    await tx.update(communityPosts).set({userId: ANONYMIZED_USER_ID}).where(eq(communityPosts.userId, userId));
    await tx.update(communityComments).set({userId: ANONYMIZED_USER_ID}).where(eq(communityComments.userId, userId));
    await tx.update(communityReports).set({resolvedByUserId: null}).where(eq(communityReports.resolvedByUserId, userId));
    await tx.update(communityModerationActions).set({moderatorUserId: ANONYMIZED_USER_ID})
      .where(eq(communityModerationActions.moderatorUserId, userId));
    await tx.update(communityModerationActions).set({targetUserId: null})
      .where(eq(communityModerationActions.targetUserId, userId));
    await tx.update(courseFinalReviewAudit).set({reviewerId: ANONYMIZED_USER_ID})
      .where(eq(courseFinalReviewAudit.reviewerId, userId));
    await tx.update(courseFinalExamAttemptGrants).set({grantedBy: ANONYMIZED_USER_ID})
      .where(eq(courseFinalExamAttemptGrants.grantedBy, userId));
    await tx.update(userProjectSubmissions).set({reviewedBy: null})
      .where(eq(userProjectSubmissions.reviewedBy, userId));
    await tx.update(studyRooms).set({hostUserId: null, updatedAt: new Date().toISOString()})
      .where(eq(studyRooms.hostUserId, userId));
    await tx.update(automationJobs).set({requestedByUserId: ANONYMIZED_USER_ID, updatedAt: new Date().toISOString()})
      .where(eq(automationJobs.requestedByUserId, userId));
    for (const [roomId, participantCount] of participantCounts) {
      await tx.update(studyRooms).set({
        activeParticipants: sql`MAX(0, ${studyRooms.activeParticipants} - ${participantCount})`,
        updatedAt: new Date().toISOString(),
      }).where(eq(studyRooms.id, roomId));
    }

    await tx.delete(userActionTokens).where(eq(userActionTokens.userId, userId));
    await tx.delete(adminCoursePermissions).where(eq(adminCoursePermissions.adminUserId, userId));
    await tx.delete(enrollments).where(eq(enrollments.userId, userId));
    await tx.delete(progress).where(eq(progress.userId, userId));
    await tx.delete(communityReports).where(eq(communityReports.reporterUserId, userId));
    await tx.delete(communityReactions).where(eq(communityReactions.userId, userId));
    await tx.delete(communityBookmarks).where(eq(communityBookmarks.userId, userId));
    await tx.delete(internshipSubmissions).where(eq(internshipSubmissions.userId, userId));
    await tx.delete(userLessonProgress).where(eq(userLessonProgress.userId, userId));
    await tx.delete(userRoadmaps).where(eq(userRoadmaps.userId, userId));
    await tx.delete(userCourseFinalProgress).where(eq(userCourseFinalProgress.userId, userId));
    await tx.delete(courseFinalExamAttemptGrants).where(eq(courseFinalExamAttemptGrants.userId, userId));
    await tx.delete(courseFinalExamAttempts).where(eq(courseFinalExamAttempts.userId, userId));
    await tx.delete(userProjectSubmissionFiles).where(eq(userProjectSubmissionFiles.userId, userId));
    await tx.delete(userProjectSubmissions).where(eq(userProjectSubmissions.userId, userId));
    await tx.delete(eventRsvps).where(eq(eventRsvps.userId, userId));
    await tx.delete(studyRoomParticipants).where(eq(studyRoomParticipants.userId, userId));
    await tx.delete(userActivityLog).where(eq(userActivityLog.userId, userId));
    await tx.delete(mentorContext).where(eq(mentorContext.userId, userId));
    await tx.delete(notifications).where(eq(notifications.userId, userId));
    await tx.delete(bookings).where(eq(bookings.userId, userId));
    await tx.delete(learningBoardProgress).where(eq(learningBoardProgress.userId, userId));
    await tx.delete(studentPracticalAttempts).where(eq(studentPracticalAttempts.userId, userId));
    await tx.delete(studentPracticalProgress).where(eq(studentPracticalProgress.userId, userId));
    await tx.delete(users).where(eq(users.id, userId));

    return {status: 200, objectKeys};
  });

  if (deletion.status !== 200) {
    return c.json({success: false, error: deletion.error}, deletion.status);
  }
  const storageResults = await Promise.allSettled(deletion.objectKeys.map((key) => deleteR2Object(key)));
  const failedObjectKeys = deletion.objectKeys.filter((_, index) => storageResults[index].status === 'rejected');
  if (failedObjectKeys.length) {
    console.error(`[admin] Account ${userId} was deleted, but storage cleanup failed for objects: ${failedObjectKeys.join(', ')}`);
  }
  return c.json({
    success: true,
    message: 'User account and private learning data deleted; community contributions anonymized.',
    ...(failedObjectKeys.length ? {warning: 'The account was deleted, but some stored files require manual cleanup.'} : {}),
  });
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
