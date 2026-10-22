import { db } from '../db/index.js';
import { users, progress, enrollments, lessons, learningBoardProgress, learningBoardPracticals, studentPracticalAttempts, studentPracticalProgress, courseFinalExamAttempts, catalogCourses, learningBoardScreens } from '../db/schema.js';
import { and, desc, eq, inArray } from 'drizzle-orm';
import { Hono } from 'hono';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';
import { createR2DownloadUrl, createR2UploadUrl, deleteR2Object, inspectR2Object, isR2Configured, readR2Object } from '../lib/r2Storage.js';
import { createUserActionToken, findUserActionToken, consumeUserActionToken, recordFailedActionTokenAttempt } from '../lib/userActionTokens.js';
import { createRecoveryCodes, decryptTotpSecret, encryptTotpSecret, generateTotpSecret, hashRecoveryCode, isTotpEncryptionConfigured, makeOtpAuthUrl, verifyTotpCode } from '../lib/totp.js';
import { verifyAndConsumeSecondFactor } from '../lib/twoFactor.js';
import { serializePublicUser } from '../lib/userProfile.js';
import { createCourseSyllabusPdf } from '../lib/courseSyllabusPdf.js';
import { getCatalogCourseDetails } from './catalogCourses.js';
import { courseMatchesRoadmapLevel } from '../lib/courseLevels.js';
import { sendBrandedEmail } from '../lib/emailTemplates.js';

const usersRoute = new Hono();
const MAX_PROFILE_IMAGE_BYTES = 800 * 1024;
const PROFILE_IMAGE_TYPES = new Map([
  ['image/jpeg', 'jpg'],
  ['image/png', 'png'],
  ['image/gif', 'gif'],
  ['image/webp', 'webp'],
]);

function hasMatchingImageSignature(contentType, bytes) {
  if (contentType === 'image/jpeg') return bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
  if (contentType === 'image/png') return bytes.length >= 8 && bytes.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
  if (contentType === 'image/gif') return ['GIF87a', 'GIF89a'].includes(bytes.subarray(0, 6).toString('ascii'));
  if (contentType === 'image/webp') return bytes.length >= 12 && bytes.subarray(0, 4).toString('ascii') === 'RIFF' && bytes.subarray(8, 12).toString('ascii') === 'WEBP';
  return false;
}

async function activeRoadmapCourseIds(user) {
  let selection;
  try {
    selection = JSON.parse(user.roadmapSelection || 'null');
  } catch {
    return null;
  }
  if (!Array.isArray(selection?.roadmapOrder)) return null;
  const courseIds = selection.roadmapOrder
    .map((course) => typeof course === 'string' ? course : course?.id)
    .filter((id) => typeof id === 'string' && id.trim());
  return [...new Set(courseIds)];
}

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

  return c.json({ success: true, data: { user: await serializePublicUser(userResult[0]) } });
});

// Update user profile
usersRoute.put('/profile', async (c) => {
  const userId = c.get('userId');
  const body = await c.req.json();
  if (body.emailNotificationsEnabled !== undefined && typeof body.emailNotificationsEnabled !== 'boolean') {
    return c.json({success: false, error: 'Email notification preference must be true or false.'}, 400);
  }
  const [existingUser] = await db.select({
    id: users.id,
    name: users.name,
    email: users.email,
    roadmapSelection: users.roadmapSelection,
    emailNotificationsEnabled: users.emailNotificationsEnabled,
  }).from(users).where(eq(users.id, userId)).limit(1);
  if (!existingUser) return c.json({success: false, error: 'User not found'}, 404);

  let selectedCourseTitles = [];
  let roadmapSelectionChanged = false;
  if (body.roadmapSelection !== undefined) {
    if (typeof body.roadmapSelection !== 'string' || body.roadmapSelection.length > 100000) {
      return c.json({ success: false, error: 'A complete roadmap selection is required' }, 400);
    }

    let selection;
    try {
      selection = JSON.parse(body.roadmapSelection);
    } catch {
      return c.json({ success: false, error: 'Roadmap selection must be valid JSON' }, 400);
    }

    const levels = ['beginner', 'intermediate', 'advanced'];
    const selectedCourses = selection?.selectedCourses;
    if (!selectedCourses || levels.some((level) => !Array.isArray(selectedCourses[level]))) {
      return c.json({ success: false, error: 'Roadmap selection is invalid' }, 400);
    }

    const selectedIds = levels.flatMap((level) => selectedCourses[level]);
    if (selection.mode === 'single_course') {
      const courseId = selection.selectedCourseId;
      const learningStage = String(selection.learningStage || '').toLowerCase();
      if (typeof courseId !== 'string' || !courseId
        || !levels.includes(learningStage)
        || selectedIds.length !== 1 || selectedIds[0] !== courseId
        || selectedCourses[learningStage][0] !== courseId
        || !Array.isArray(selection.roadmapOrder)
        || selection.roadmapOrder.length !== 1 || selection.roadmapOrder[0] !== courseId) {
        return c.json({ success: false, error: 'A valid single-course selection is required' }, 400);
      }
      const availableCourse = await db.select().from(catalogCourses)
        .where(eq(catalogCourses.id, courseId))
        .limit(1);
      const course = availableCourse[0];
      if (!course || !courseMatchesRoadmapLevel(course.level, learningStage)) {
        return c.json({ success: false, error: 'The selected course is unavailable for this learning level' }, 400);
      }
      const category = String(
        course.marketSubcategory?.trim()
        || course.subcategory?.trim()
        || course.marketCategory
        || course.category
        || '',
      ).trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      if (!category || String(selection.selectedCareerId || '').trim().toLowerCase() !== category) {
        return c.json({ success: false, error: 'The selected course category is invalid' }, 400);
      }
      const [legacyCurriculum, boardCurriculum] = await Promise.all([
        db.select({trackId: lessons.trackId}).from(lessons).where(eq(lessons.trackId, courseId)).limit(1),
        db.select({courseId: learningBoardScreens.courseId}).from(learningBoardScreens).where(eq(learningBoardScreens.courseId, courseId)).limit(1),
      ]);
      if (!legacyCurriculum.length && !boardCurriculum.length) {
        return c.json({ success: false, error: 'The selected course does not have a learning curriculum yet' }, 409);
      }
    } else if (!['Pivot into a new career', 'Up-skill in my current role', 'Lead & Specialize'].includes(selection?.careerGoal)) {
      return c.json({ success: false, error: 'Roadmap selection is invalid' }, 400);
    }

    if (!selectedIds.length || selectedIds.some((id) => typeof id !== 'string' || !id.trim())
      || new Set(selectedIds).size !== selectedIds.length
      || !Array.isArray(selection.roadmapOrder)
      || selectedIds.length !== selection.roadmapOrder.length
      || selectedIds.some((id, index) => id !== selection.roadmapOrder[index])) {
      return c.json({ success: false, error: 'A complete roadmap selection is required' }, 400);
    }

    const availableCourses = await db.select({id: catalogCourses.id})
      .from(catalogCourses)
      .where(inArray(catalogCourses.id, selectedIds));
    if (availableCourses.length !== selectedIds.length) {
      return c.json({ success: false, error: 'One or more selected roadmap courses are unavailable' }, 400);
    }
    const coursesWithTitles = await db.select({id: catalogCourses.id, title: catalogCourses.title})
      .from(catalogCourses)
      .where(inArray(catalogCourses.id, selectedIds));
    const titlesById = new Map(coursesWithTitles.map((course) => [course.id, course.title]));
    selectedCourseTitles = selectedIds.map((id) => titlesById.get(id) || id);
    roadmapSelectionChanged = existingUser.roadmapSelection !== body.roadmapSelection;
  }

  const updateData = {
    name: body.name,
    phone: body.phone,
    country: body.country,
    careerGoal: body.careerGoal,
    onboardingGoal: body.onboardingGoal,
    desiredField: body.desiredField,
    roadmapSelection: body.roadmapSelection,
    availability: body.availability,
    portfolioLink: body.portfolioLink,
    emailNotificationsEnabled: body.emailNotificationsEnabled,
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

  if (roadmapSelectionChanged && updatedUser[0]?.emailNotificationsEnabled && selectedCourseTitles.length) {
    try {
      await sendBrandedEmail(existingUser.email, {
        subject: 'Your Cohortia learning path is ready',
        preheader: 'Your selected courses are saved and ready for you.',
        eyebrow: 'LEARNING PLAN UPDATED',
        heading: 'Your learning path is ready',
        greeting: `Hi ${existingUser.name},`,
        paragraphs: [
          `You’ve saved ${selectedCourseTitles.length === 1 ? 'this course' : 'these courses'} to your Cohortia learning path: ${selectedCourseTitles.join(', ')}.`,
          'Your plan is saved to your profile, so you can pick up where you left off whenever you are ready.',
        ],
        buttonLabel: 'View my learning path',
        buttonUrl: `${process.env.FRONTEND_URL?.replace(/\/+$/, '') || 'http://localhost:5173'}/dashboard/profile`,
        footerNote: 'You can manage optional email notifications from your profile settings.',
      });
    } catch (error) {
      console.error('[users] Learning path email delivery failed:', error.message);
    }
  }

  return c.json({ success: true, data: { user: await serializePublicUser(updatedUser[0]) } });
});

usersRoute.post('/profile/image/upload-url', async (c) => {
  const userId = c.get('userId');
  const {contentType} = await c.req.json();
  const normalizedType = String(contentType || '').toLowerCase();
  const extension = PROFILE_IMAGE_TYPES.get(normalizedType);
  if (!extension) {
    return c.json({success: false, error: 'Choose a JPEG, PNG, GIF, or WebP image.'}, 415);
  }
  if (!isR2Configured()) {
    return c.json({success: false, error: 'Profile image storage is not configured yet.'}, 503);
  }

  const objectKey = `avatars/${userId}/${uuidv4()}.${extension}`;
  const upload = await createR2UploadUrl(objectKey, normalizedType);
  return c.json({
    success: true,
    data: {objectKey, uploadUrl: upload.url, expiresInSeconds: upload.expiresInSeconds},
  });
});

usersRoute.post('/profile/image/complete', async (c) => {
  const userId = c.get('userId');
  const {objectKey} = await c.req.json();
  if (typeof objectKey !== 'string' || !objectKey.startsWith(`avatars/${userId}/`)) {
    return c.json({success: false, error: 'The profile image upload could not be verified.'}, 400);
  }
  if (!isR2Configured()) {
    return c.json({success: false, error: 'Profile image storage is not configured yet.'}, 503);
  }

  const metadata = await inspectR2Object(objectKey);
  if (metadata.byteSize <= 0 || metadata.byteSize > MAX_PROFILE_IMAGE_BYTES) {
    await deleteR2Object(objectKey);
    return c.json({success: false, error: 'Profile images must be smaller than 800 KB.'}, 413);
  }
  const object = await readR2Object(objectKey);
  if (!PROFILE_IMAGE_TYPES.has(object.contentType.toLowerCase())) {
    await deleteR2Object(objectKey);
    return c.json({success: false, error: 'Upload a valid JPEG, PNG, GIF, or WebP image.'}, 415);
  }
  if (object.byteSize !== metadata.byteSize || !hasMatchingImageSignature(object.contentType.toLowerCase(), object.bytes)) {
    await deleteR2Object(objectKey);
    return c.json({success: false, error: 'The uploaded file is not a valid image of its declared type.'}, 415);
  }

  const [existingUser] = await db.select({avatarObjectKey: users.avatarObjectKey})
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);
  await db.update(users).set({
    avatarObjectKey: objectKey,
    updatedAt: new Date().toISOString(),
  }).where(eq(users.id, userId));
  if (existingUser?.avatarObjectKey && existingUser.avatarObjectKey !== objectKey) {
    try {
      await deleteR2Object(existingUser.avatarObjectKey);
    } catch (error) {
      console.error(`[users] Saved the new profile image but failed to delete the previous image for user ${userId}:`, error);
    }
  }
  const [updatedUser] = await db.select().from(users).where(eq(users.id, userId)).limit(1);
  return c.json({success: true, data: {user: await serializePublicUser(updatedUser)}});
});

usersRoute.post('/two-factor/setup', async (c) => {
  const userId = c.get('userId');
  const [user] = await db.select().from(users).where(eq(users.id, userId)).limit(1);
  if (!user) return c.json({success: false, error: 'User not found.'}, 404);
  if (user.twoFactorEnabled) {
    return c.json({success: false, error: 'Disable two-factor authentication before setting up a new authenticator.'}, 409);
  }
  if (!isTotpEncryptionConfigured()) {
    return c.json({
      success: false,
      error: 'Authenticator setup is unavailable until TOTP_ENCRYPTION_KEY is configured on the server.',
    }, 503);
  }

  const secret = generateTotpSecret();
  await db.update(users).set({
    twoFactorSecret: encryptTotpSecret(secret),
    twoFactorRecoveryCodes: null,
    twoFactorLastCounter: null,
    updatedAt: new Date().toISOString(),
  }).where(eq(users.id, userId));
  const challengeToken = await createUserActionToken(userId, 'mfa_setup', 900, true);
  return c.json({
    success: true,
    data: {secret, otpauthUrl: makeOtpAuthUrl(user.email, secret), challengeToken},
  });
});

usersRoute.post('/two-factor/enable', async (c) => {
  const userId = c.get('userId');
  const {code, challengeToken} = await c.req.json();
  const challenge = await findUserActionToken(challengeToken, userId, 'mfa_setup');
  if (!challenge) {
    return c.json({success: false, error: 'Authenticator setup expired. Start setup again.'}, 401);
  }
  const [user] = await db.select().from(users).where(eq(users.id, userId)).limit(1);
  if (!user?.twoFactorSecret || user.twoFactorEnabled) {
    await consumeUserActionToken(challenge);
    return c.json({success: false, error: 'Start authenticator setup before confirming it.'}, 409);
  }

  const secret = decryptTotpSecret(user.twoFactorSecret);
  const matchedCounter = verifyTotpCode(secret, code);
  if (matchedCounter === null) {
    await recordFailedActionTokenAttempt(challenge);
    return c.json({success: false, error: 'That code is invalid or expired. Check your authenticator and try again.'}, 400);
  }

  const recoveryCodes = createRecoveryCodes();
  const recoveryCodeHashes = recoveryCodes.map((recoveryCode) => hashRecoveryCode(userId, recoveryCode));
  const [enabledUser] = await db.update(users).set({
    twoFactorEnabled: true,
    twoFactorRecoveryCodes: JSON.stringify(recoveryCodeHashes),
    twoFactorLastCounter: matchedCounter,
    updatedAt: new Date().toISOString(),
  }).where(and(eq(users.id, userId), eq(users.twoFactorEnabled, false))).returning({id: users.id});
  if (!enabledUser) {
    await consumeUserActionToken(challenge);
    return c.json({success: false, error: 'Authenticator setup changed. Reload the page and try again.'}, 409);
  }
  if (!await consumeUserActionToken(challenge)) {
    await db.update(users).set({
      twoFactorEnabled: false,
      twoFactorRecoveryCodes: null,
      twoFactorLastCounter: null,
      updatedAt: new Date().toISOString(),
    }).where(eq(users.id, userId));
    return c.json({success: false, error: 'Authenticator setup expired. Start setup again.'}, 401);
  }
  return c.json({success: true, data: {enabled: true, recoveryCodes}});
});

usersRoute.post('/two-factor/disable', async (c) => {
  const userId = c.get('userId');
  const {code, challengeToken} = await c.req.json();
  const challenge = await findUserActionToken(challengeToken, userId, 'mfa_disable');
  if (!challenge) {
    return c.json({success: false, error: 'Two-factor settings verification expired. Try again.'}, 401);
  }
  const [user] = await db.select().from(users).where(eq(users.id, userId)).limit(1);
  if (!user?.twoFactorEnabled) {
    await consumeUserActionToken(challenge);
    return c.json({success: false, error: 'Two-factor authentication is not enabled.'}, 409);
  }
  if (!await verifyAndConsumeSecondFactor(user, code)) {
    await recordFailedActionTokenAttempt(challenge);
    return c.json({success: false, error: 'The authenticator or recovery code is incorrect.'}, 401);
  }
  if (!await consumeUserActionToken(challenge)) {
    return c.json({success: false, error: 'Two-factor settings verification expired. Try again.'}, 401);
  }
  await db.update(users).set({
    twoFactorSecret: null,
    twoFactorEnabled: false,
    twoFactorRecoveryCodes: null,
    twoFactorLastCounter: null,
    updatedAt: new Date().toISOString(),
  }).where(eq(users.id, userId));
  return c.json({success: true, data: {enabled: false}});
});

usersRoute.post('/two-factor/disable/setup', async (c) => {
  const userId = c.get('userId');
  const [user] = await db.select({twoFactorEnabled: users.twoFactorEnabled})
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);
  if (!user?.twoFactorEnabled) {
    return c.json({success: false, error: 'Two-factor authentication is not enabled.'}, 409);
  }
  const challengeToken = await createUserActionToken(userId, 'mfa_disable', 300, true);
  return c.json({success: true, data: {challengeToken}});
});

usersRoute.post('/export/verify', async (c) => {
  const userId = c.get('userId');
  const [user] = await db.select({
    id: users.id,
    password: users.password,
    twoFactorEnabled: users.twoFactorEnabled,
    twoFactorSecret: users.twoFactorSecret,
    twoFactorRecoveryCodes: users.twoFactorRecoveryCodes,
    twoFactorLastCounter: users.twoFactorLastCounter,
  }).from(users).where(eq(users.id, userId)).limit(1);
  if (!user) return c.json({success: false, error: 'Account verification failed.'}, 401);
  const {password, code, googleProof} = await c.req.json();
  let verified = false;
  let proofRecord;

  if (typeof password === 'string' && password.length > 0) {
    verified = await bcrypt.compare(password, user.password);
  } else if (typeof googleProof === 'string') {
    proofRecord = await findUserActionToken(googleProof, userId, 'google_export_proof');
    verified = Boolean(proofRecord);
  }

  if (!verified) {
    return c.json({success: false, error: 'Account verification failed. Try again or verify with Google.'}, 401);
  }
  if (user.twoFactorEnabled && !await verifyAndConsumeSecondFactor(user, code)) {
    return c.json({success: false, error: 'A valid authenticator or recovery code is required.'}, 401);
  }
  if (proofRecord && !await consumeUserActionToken(proofRecord)) {
    return c.json({success: false, error: 'Google account verification has expired. Verify your account again.'}, 401);
  }

  const verificationToken = await createUserActionToken(userId, 'course_syllabus_export', 180);
  return c.json({success: true, data: {verificationToken}});
});

usersRoute.post('/export/course-syllabus', async (c) => {
  const userId = c.get('userId');
  const {verificationToken} = await c.req.json();
  const verification = await findUserActionToken(verificationToken, userId, 'course_syllabus_export');
  if (!verification || !await consumeUserActionToken(verification)) {
    return c.json({success: false, error: 'Verify your account again before downloading course details.'}, 401);
  }

  const [user] = await db.select().from(users).where(eq(users.id, userId)).limit(1);
  const courseIds = await activeRoadmapCourseIds(user);
  if (!courseIds?.length) {
    return c.json({success: false, error: 'Choose a roadmap before exporting course details.'}, 409);
  }
  let roadmapSelection;
  try {
    roadmapSelection = JSON.parse(user.roadmapSelection || 'null');
  } catch {
    return c.json({success: false, error: 'Your selected roadmap could not be read. Rebuild it before exporting.'}, 409);
  }

  const lessonRows = await db.select().from(lessons)
    .where(inArray(lessons.trackId, courseIds))
    .orderBy(lessons.trackId, lessons.moduleIndex, lessons.order);
  const lessonsByCourse = new Map();
  for (const lesson of lessonRows) {
    if (!lessonsByCourse.has(lesson.trackId)) lessonsByCourse.set(lesson.trackId, []);
    lessonsByCourse.get(lesson.trackId).push(lesson);
  }

  const courseResults = await Promise.all(courseIds.map(async (courseId) => {
    const courseDetails = await getCatalogCourseDetails(courseId);
    if (!courseDetails) return null;
    const moduleMap = new Map();
    for (const lesson of lessonsByCourse.get(courseId) || []) {
      const moduleKey = String(lesson.moduleIndex);
      if (!moduleMap.has(moduleKey)) {
        moduleMap.set(moduleKey, {
          title: lesson.moduleTitle || `Module ${lesson.moduleIndex + 1}`,
          description: lesson.moduleGoal || '',
          chapters: [],
        });
      }
      moduleMap.get(moduleKey).chapters.push({
        title: lesson.title,
        description: lesson.description || '',
        duration: lesson.duration || '',
      });
    }
    return {
      ...courseDetails,
      modules: [...moduleMap.values()],
    };
  }));
  if (courseResults.some((course) => !course)) {
    return c.json({success: false, error: 'A course in your saved roadmap is no longer available.'}, 409);
  }
  const courses = courseResults;

  const pdf = createCourseSyllabusPdf({
    userName: user.name,
    roadmapTitle: roadmapSelection?.selectedCareer || user.desiredField || 'Career roadmap',
    courses,
  });
  return new Response(pdf, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="cohortia-course-syllabus.pdf"',
      'Cache-Control': 'no-store',
    },
  });
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
  const progressQuery = courseIds.length
    ? db
      .select(progressSelection)
      .from(progress)
      .innerJoin(lessons, eq(progress.lessonId, lessons.id))
      .where(and(eq(progress.userId, userId), inArray(lessons.trackId, courseIds)))
      .orderBy(desc(progress.updatedAt))
      .limit(recentOnly ? 500 : 5000)
    : db
      .select(progressSelection)
      .from(progress)
      .where(eq(progress.userId, userId))
      .orderBy(desc(progress.updatedAt))
      .limit(recentOnly ? 500 : 5000);

  const boardProgressQuery = db
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

  const practicalAttemptsSelection = {
      id: studentPracticalAttempts.id,
      practicalId: studentPracticalAttempts.practicalId,
      status: studentPracticalAttempts.status,
      createdAt: studentPracticalAttempts.createdAt,
      updatedAt: studentPracticalAttempts.updatedAt,
  };
  const practicalAttemptsQuery = courseIds.length
    ? db
      .select(practicalAttemptsSelection)
      .from(studentPracticalAttempts)
      .innerJoin(learningBoardPracticals, eq(studentPracticalAttempts.practicalId, learningBoardPracticals.id))
      .where(and(eq(studentPracticalAttempts.userId, userId), inArray(learningBoardPracticals.courseId, courseIds)))
      .orderBy(desc(studentPracticalAttempts.updatedAt))
      .limit(recentOnly ? 100 : 1000)
    : db
      .select(practicalAttemptsSelection)
      .from(studentPracticalAttempts)
      .where(eq(studentPracticalAttempts.userId, userId))
      .orderBy(desc(studentPracticalAttempts.updatedAt))
      .limit(recentOnly ? 100 : 1000);

  const practicalTaskProgressSelection = {
      id: studentPracticalProgress.id,
      practicalId: studentPracticalProgress.practicalId,
      taskId: studentPracticalProgress.taskId,
      status: studentPracticalProgress.status,
      attempts: studentPracticalProgress.attempts,
      completedAt: studentPracticalProgress.completedAt,
      updatedAt: studentPracticalProgress.updatedAt,
  };
  const practicalTaskProgressQuery = courseIds.length
    ? db
      .select(practicalTaskProgressSelection)
      .from(studentPracticalProgress)
      .innerJoin(learningBoardPracticals, eq(studentPracticalProgress.practicalId, learningBoardPracticals.id))
      .where(and(eq(studentPracticalProgress.userId, userId), inArray(learningBoardPracticals.courseId, courseIds)))
      .orderBy(desc(studentPracticalProgress.updatedAt))
      .limit(recentOnly ? 500 : 5000)
    : db
      .select(practicalTaskProgressSelection)
      .from(studentPracticalProgress)
      .where(eq(studentPracticalProgress.userId, userId))
      .orderBy(desc(studentPracticalProgress.updatedAt))
      .limit(recentOnly ? 500 : 5000);

  const courseFinalAttemptsQuery = db
    .select({
      courseId: courseFinalExamAttempts.courseId,
      status: courseFinalExamAttempts.status,
      score: courseFinalExamAttempts.score,
      passed: courseFinalExamAttempts.passed,
      submittedAt: courseFinalExamAttempts.submittedAt,
    })
    .from(courseFinalExamAttempts)
    .where(and(
      eq(courseFinalExamAttempts.userId, userId),
      eq(courseFinalExamAttempts.passed, true),
      ...(courseIds.length ? [inArray(courseFinalExamAttempts.courseId, courseIds)] : []),
    ))
    .orderBy(desc(courseFinalExamAttempts.submittedAt))
    .limit(recentOnly ? 100 : 1000);

  const [progressData, boardProgressData, practicalAttempts, practicalTaskProgress, courseFinalAttempts] = await Promise.all([
    progressQuery,
    boardProgressQuery,
    practicalAttemptsQuery,
    practicalTaskProgressQuery,
    courseFinalAttemptsQuery,
  ]);

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
      courseFinalAttempts,
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
