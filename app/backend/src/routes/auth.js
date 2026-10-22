import { db } from '../db/index.js';
import { users, tracks, catalogCourses, catalogCourseCareers, lessons, learningBoardScreens, enrollments } from '../db/schema.js';
import { eq, and, inArray } from 'drizzle-orm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';
import { Hono } from 'hono';
import { logActivity } from '../lib/activity.js';
import {courseMatchesRoadmapLevel} from '../lib/courseLevels.js';
import {createUserActionToken, findUserActionToken, consumeUserActionToken, recordFailedActionTokenAttempt} from '../lib/userActionTokens.js';
import {verifyAndConsumeSecondFactor} from '../lib/twoFactor.js';
import {serializePublicUser} from '../lib/userProfile.js';
import {getJwtSecret} from '../lib/jwtSecret.js';
import {clearSessionCookie, getSessionCookieToken, setSessionCookie} from '../lib/sessionAuth.js';
import {enforceRateLimits, getRateLimitClientIp} from '../lib/rateLimit.js';
import {statesMatch} from '../lib/oauthState.js';

const auth = new Hono();
const GOOGLE_OAUTH_STATE_USER_ID = 'google-oauth';
const frontendUrl = () => (process.env.FRONTEND_URL || 'http://localhost:5173').replace(/\/+$/, '');

function createToken(user) {
  return jwt.sign(
    { userId: user.id, email: user.email },
    getJwtSecret(),
    { expiresIn: '7d' }
  );
}

function setOAuthStateCookie(c, state) {
  c.header(
    'Set-Cookie',
    `cohortia_google_oauth_state=${state}; Max-Age=600; Path=/api/v1/auth; HttpOnly; SameSite=Lax${process.env.NODE_ENV === 'production' || process.env.RENDER === 'true' ? '; Secure' : ''}`,
    {append: true},
  );
}

function getRequestCookie(c, name) {
  const cookieHeader = c.req.header('cookie') || '';
  const prefix = `${name}=`;
  const item = cookieHeader.split(';').map((cookie) => cookie.trim()).find((cookie) => cookie.startsWith(prefix));
  return item ? item.slice(prefix.length) : '';
}

function setOAuthExchangeCookie(c, exchangeCode) {
  c.header(
    'Set-Cookie',
    `cohortia_google_oauth_exchange=${exchangeCode}; Max-Age=60; Path=/api/v1/auth/google/exchange; HttpOnly; SameSite=Lax${process.env.NODE_ENV === 'production' || process.env.RENDER === 'true' ? '; Secure' : ''}`,
    {append: true},
  );
}

function clearOAuthExchangeCookie(c) {
  c.header(
    'Set-Cookie',
    `cohortia_google_oauth_exchange=; Max-Age=0; Path=/api/v1/auth/google/exchange; HttpOnly; SameSite=Lax${process.env.NODE_ENV === 'production' || process.env.RENDER === 'true' ? '; Secure' : ''}`,
    {append: true},
  );
}

function clearOAuthStateCookie(c) {
  c.header(
    'Set-Cookie',
    `cohortia_google_oauth_state=; Max-Age=0; Path=/api/v1/auth; HttpOnly; SameSite=Lax${process.env.NODE_ENV === 'production' || process.env.RENDER === 'true' ? '; Secure' : ''}`,
    {append: true},
  );
}

function googleRedirectUrl() {
  return process.env.GOOGLE_REDIRECT_URI
    || `${process.env.API_PUBLIC_URL || 'http://localhost:3000'}/api/v1/auth/google/callback`;
}

function redirectToFrontend(path, params = {}) {
  const url = new URL(path, `${frontendUrl()}/`);
  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));
  return url.toString();
}

function buildGoogleAuthUrl(state) {
  const clientId = String(process.env.GOOGLE_CLIENT_ID || '').trim();
  return `https://accounts.google.com/o/oauth2/v2/auth?${new URLSearchParams({
    client_id: clientId,
    redirect_uri: googleRedirectUrl(),
    response_type: 'code',
    scope: 'openid email profile',
    state,
    access_type: 'online',
    prompt: 'select_account',
  }).toString()}`;
}

async function createGoogleOAuthState(purpose, userId) {
  const stateOwnerId = userId || GOOGLE_OAUTH_STATE_USER_ID;
  const nonce = await createUserActionToken(stateOwnerId, 'google_oauth_state', 600);
  return jwt.sign(
    {
      purpose,
      ...(userId ? {userId} : {}),
      nonce,
    },
    getJwtSecret(),
    {expiresIn: '10m'},
  );
}

// Validation schemas
const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  phone: z.string().nullish(),
  country: z.string().nullish(),
  currentStatus: z.string().nullish(),
  currentRole: z.string().nullish(),
  role: z.enum(['career-starter', 'level-up', 'experience-track']).default('career-starter'),
  onboardingGoal: z.string().nullish(),
  experienceLevel: z.string().nullish(),
  weeklyHours: z.string().nullish(),
  learningPace: z.string().nullish(),
  careerGoal: z.string().nullish(),
  desiredField: z.string().nullish(),
  roadmapSelection: z.string().nullish(),
  skillsKnown: z.string().nullish(),
  availability: z.string().nullish(),
  portfolioLink: z.string().nullish(),
  educationLevel: z.string().nullish(),
  ageRange: z.string().nullish(),
  learningStyle: z.string().nullish(),
  jobReadyTimeline: z.string().nullish(),
  motivation: z.string().nullish(),
  biggestChallenge: z.string().nullish(),
  previousField: z.string().nullish(),
  wantsRealWorldExperience: z.boolean().nullish(),
});

const loginSchema = z.object({
  email: z.string().trim().min(1, 'Email or admin username is required').max(255),
  password: z.string().min(1, 'Password is required'),
});

// Register
auth.post('/signup', async (c) => {
  const rateLimitResponse = await enforceRateLimits(c, [{
    scope: 'auth-signup-ip',
    actor: getRateLimitClientIp(c),
    limit: 5,
    windowSeconds: 60 * 60,
  }]);
  if (rateLimitResponse) return rateLimitResponse;

  const body = await c.req.json();
  
  const result = signupSchema.safeParse(body);
  if (!result.success) {
    return c.json({
      success: false,
      error: 'Validation failed',
      details: result.error.flatten().fieldErrors,
    }, 400);
  }

  const data = result.data;

  if (data.desiredField && !data.roadmapSelection) {
    const selectedTrack = await db
      .select({id: tracks.id})
      .from(tracks)
      .where(eq(tracks.id, data.desiredField))
      .limit(1);

    if (selectedTrack.length === 0) {
      return c.json({
        success: false,
        error: 'Selected course is not available for learning yet',
      }, 404);
    }
  }

  if (data.roadmapSelection) {
    let selection;
    try {
      selection = JSON.parse(data.roadmapSelection);
    } catch {
      return c.json({ success: false, error: 'Roadmap selection must be valid JSON' }, 400);
    }

    if (selection?.mode === 'single_course') {
      const selectedCourseId = selection.selectedCourseId;
      const selectedCourses = selection.selectedCourses;
      const levels = ['beginner', 'intermediate', 'advanced'];
      const selectedIds = levels.flatMap((level) => Array.isArray(selectedCourses?.[level]) ? selectedCourses[level] : []);
      const learningStage = String(selection.learningStage || '').toLowerCase();
      if (typeof selectedCourseId !== 'string' || !selectedCourseId
        || !['beginner', 'intermediate', 'advanced'].includes(learningStage)
        || !selectedCourses || levels.some((level) => !Array.isArray(selectedCourses[level]))
        || selectedIds.length !== 1 || selectedIds[0] !== selectedCourseId
        || !Array.isArray(selection.roadmapOrder)
        || selection.roadmapOrder.length !== 1 || selection.roadmapOrder[0] !== selectedCourseId
        || selectedCourses[learningStage][0] !== selectedCourseId) {
        return c.json({ success: false, error: 'A valid single-course selection is required' }, 400);
      }

      const courseRows = await db.select().from(catalogCourses)
        .where(eq(catalogCourses.id, selectedCourseId)).limit(1);
      const course = courseRows[0];
      if (!course || !courseMatchesRoadmapLevel(course.level, learningStage)) {
        return c.json({ success: false, error: 'The selected course is unavailable for this learning level' }, 400);
      }

      const courseCategory = String(
        course.marketSubcategory?.trim()
        || course.subcategory?.trim()
        || course.marketCategory
        || course.category
        || '',
      ).trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      const requestedCategory = String(selection.selectedCareerId || '').trim().toLowerCase();
      if (!courseCategory || requestedCategory !== courseCategory) {
        return c.json({ success: false, error: 'The selected course category is invalid' }, 400);
      }

      const [legacyCurriculum, boardCurriculum] = await Promise.all([
        db.select({trackId: lessons.trackId}).from(lessons).where(eq(lessons.trackId, selectedCourseId)).limit(1),
        db.select({courseId: learningBoardScreens.courseId}).from(learningBoardScreens).where(eq(learningBoardScreens.courseId, selectedCourseId)).limit(1),
      ]);
      if (!legacyCurriculum.length && !boardCurriculum.length) {
        return c.json({ success: false, error: 'The selected course does not have a learning curriculum yet' }, 409);
      }
    } else {
    const limitsByGoal = {
      'Pivot into a new career': { beginner: 2, intermediate: 2, advanced: 1 },
      'Up-skill in my current role': { beginner: 2, intermediate: 1, advanced: 1 },
      'Lead & Specialize': { intermediate: 1, advanced: 1 },
    };
    const stagesByGoal = {
      'Pivot into a new career': ['beginner', 'intermediate', 'advanced'],
      'Up-skill in my current role': ['beginner', 'intermediate', 'advanced'],
      'Lead & Specialize': ['intermediate', 'advanced'],
    };
    const selectedIds = Array.isArray(selection?.roadmapOrder) ? selection.roadmapOrder : [];
    const selectedCourses = selection?.selectedCourses && typeof selection.selectedCourses === 'object'
      ? selection.selectedCourses
      : null;
    const selectedLevels = selectedCourses ? Object.keys(selectedCourses) : [];
    const allLevels = ['beginner', 'intermediate', 'advanced'];
    const limits = limitsByGoal[selection?.careerGoal];
    const expectedStages = stagesByGoal[selection?.careerGoal] || [];
    const careerSlug = String(selection?.selectedCareerId || selection?.selectedCareer || '').trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const careerLabelSlug = String(selection?.selectedCareer || '').trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const validCareerSlugs = new Set([
      'frontend-development', 'backend-development', 'data-analytics', 'data-science',
      'ai-ml-engineering', 'cybersecurity', 'cloud-engineering', 'devops-engineering',
      'ux-ui-design', 'qa-testing', 'product-management', 'full-stack-development',
    ]);

    if (!limits || !expectedStages.includes(String(selection?.learningStage || '').toLowerCase()) || !careerSlug) {
      return c.json({ success: false, error: 'Roadmap goal, learning stage, or career is invalid' }, 400);
    }
    if (!selectedCourses || selectedLevels.some((level) => !allLevels.includes(level)) || !selectedLevels.every((level) => Array.isArray(selectedCourses[level]))) {
      return c.json({ success: false, error: 'Roadmap course levels are invalid' }, 400);
    }

    const selectedByLevel = Object.fromEntries(allLevels.map((level) => [level, selectedCourses[level] || []]));
    const selectedCourseIds = allLevels.flatMap((level) => selectedByLevel[level]);
    const selectedIdSet = new Set(selectedCourseIds);
    const roadmapIdSet = new Set(selectedIds);
    if (!selectedIds.length || !selectedIds.every((id) => typeof id === 'string') ||
      selectedCourseIds.some((id) => typeof id !== 'string') ||
      selectedIdSet.size !== selectedCourseIds.length || roadmapIdSet.size !== selectedIds.length ||
      selectedIdSet.size !== roadmapIdSet.size || [...selectedIdSet].some((id) => !roadmapIdSet.has(id)) ||
      selectedIds.some((id, index) => id !== selectedCourseIds[index])) {
      return c.json({ success: false, error: 'A complete roadmap selection is required' }, 400);
    }

    const courses = await db.select().from(catalogCourses).where(inArray(catalogCourses.id, selectedIds));
    if (courses.length !== selectedIds.length || new Set(selectedIds).size !== selectedIds.length) {
      return c.json({ success: false, error: 'One or more selected roadmap courses are unavailable' }, 400);
    }

    const isLegacyCareer = validCareerSlugs.has(careerSlug);
    if (isLegacyCareer) {
      const careerLinks = await db.select({ courseId: catalogCourseCareers.courseId })
        .from(catalogCourseCareers)
        .where(and(eq(catalogCourseCareers.careerId, careerSlug), inArray(catalogCourseCareers.courseId, selectedIds)));
      if (careerLinks.length !== selectedIds.length) {
        return c.json({ success: false, error: 'One or more courses do not belong to the selected career' }, 400);
      }
    } else {
      const normalizedCourseCategory = (course) => String(
        course.marketSubcategory?.trim()
        || course.subcategory?.trim()
        || course.marketCategory
        || course.category
        || '',
      ).trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      if (!careerLabelSlug || careerLabelSlug !== careerSlug || courses.some((course) => normalizedCourseCategory(course) !== careerSlug)) {
        return c.json({ success: false, error: 'One or more courses do not belong to the selected category' }, 400);
      }
    }

    const availableCurriculum = isLegacyCareer
      ? await db.select({trackId: lessons.trackId}).from(lessons).where(inArray(lessons.trackId, selectedIds))
      : await db.select({courseId: learningBoardScreens.courseId}).from(learningBoardScreens).where(inArray(learningBoardScreens.courseId, selectedIds));
    const coursesWithCurriculum = new Set(availableCurriculum.map((row) => row.trackId || row.courseId));
    if (selectedIds.some((id) => !coursesWithCurriculum.has(id))) {
      return c.json({
        success: false,
        error: 'One or more selected courses do not have a learning curriculum yet',
      }, 409);
    }

    const courseById = new Map(courses.map((course) => [course.id, course]));
    const hasLevelMismatch = allLevels.some((level) =>
      selectedByLevel[level].some((id) => !courseMatchesRoadmapLevel(courseById.get(id)?.level, level)),
    );
    if (allLevels.some((level) => selectedByLevel[level].length !== (limits[level] || 0)) || hasLevelMismatch) {
      return c.json({ success: false, error: 'Roadmap selection exceeds the allowed level limits' }, 400);
    }
    }
  }

  // Check if user already exists
  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, data.email))
    .limit(1);

  if (existingUser.length > 0) {
    return c.json({
      success: false,
      error: 'Email already registered',
    }, 409);
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(data.password, 12);

  // Create user
  const userId = uuidv4();
  const now = new Date().toISOString();

  await db.insert(users).values({
    id: userId,
    name: data.name,
    email: data.email,
    password: hashedPassword,
    phone: data.phone || null,
    country: data.country || null,
    currentStatus: data.currentStatus || null,
    currentRole: data.currentRole || null,
    role: data.role,
    onboardingGoal: data.onboardingGoal || null,
    experienceLevel: data.experienceLevel || null,
    weeklyHours: data.weeklyHours || null,
    learningPace: data.learningPace || null,
    careerGoal: data.careerGoal || null,
    desiredField: data.desiredField || null,
    roadmapSelection: data.roadmapSelection || null,
    skillsKnown: data.skillsKnown || null,
    availability: data.availability || null,
    portfolioLink: data.portfolioLink || null,
    educationLevel: data.educationLevel || null,
    ageRange: data.ageRange || null,
    learningStyle: data.learningStyle || null,
    jobReadyTimeline: data.jobReadyTimeline || null,
    motivation: data.motivation || null,
    biggestChallenge: data.biggestChallenge || null,
    previousField: data.previousField || null,
    wantsRealWorldExperience: data.wantsRealWorldExperience || false,
    createdAt: now,
    updatedAt: now,
  });

  // Auto-enrol user in their selected course/track if it exists
  if (data.desiredField) {
    const track = await db
      .select()
      .from(tracks)
      .where(eq(tracks.id, data.desiredField))
      .limit(1);

    if (track.length > 0) {
      await db.insert(enrollments).values({
        id: uuidv4(),
        userId,
        trackId: data.desiredField,
        status: 'active',
        enrolledAt: now,
        updatedAt: now,
      });
    }
  }

  // Log signup activity
  await logActivity({
    userId,
    activityType: 'signup',
    entityId: userId,
    metadata: { source: 'email_signup', role: data.role, track: data.desiredField },
  });

  setSessionCookie(c, createToken({id: userId, email: data.email}));
  return c.json({
    success: true,
    message: 'Account created successfully',
    data: {
      user: {
        id: userId,
        name: data.name,
        email: data.email,
        username: null,
        role: data.role,
        adminRole: null,
        onboardingGoal: data.onboardingGoal || null,
        experienceLevel: data.experienceLevel || null,
        currentStatus: data.currentStatus || null,
        careerGoal: data.careerGoal || null,
        desiredField: data.desiredField || null,
        roadmapSelection: data.roadmapSelection || null,
      },
    },
  }, 201);
});

// Login
auth.post('/login', async (c) => {
  const rateLimitResponse = await enforceRateLimits(c, [{
    scope: 'auth-login-ip',
    actor: getRateLimitClientIp(c),
    limit: 10,
    windowSeconds: 15 * 60,
  }]);
  if (rateLimitResponse) return rateLimitResponse;

  const body = await c.req.json();

  const result = loginSchema.safeParse(body);
  if (!result.success) {
    return c.json({
      success: false,
      error: 'Validation failed',
      details: result.error.flatten().fieldErrors,
    }, 400);
  }

  const { email, password } = result.data;
  const identifier = email.trim();

  // Find user
  const userResult = await db
    .select()
    .from(users)
    .where(identifier.includes('@')
      ? eq(users.email, identifier)
      : eq(users.username, identifier.toLowerCase()))
    .limit(1);

  if (userResult.length === 0) {
    return c.json({
      success: false,
      error: 'Invalid email or password',
    }, 401);
  }

  const user = userResult[0];

  // Verify password
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return c.json({
      success: false,
      error: 'Invalid email or password',
    }, 401);
  }

  if (user.twoFactorEnabled) {
    const challengeToken = await createUserActionToken(user.id, 'mfa_login', 300);
    return c.json({
      success: true,
      message: 'Authenticator verification is required.',
      data: {twoFactorRequired: true, challengeToken},
    });
  }

  setSessionCookie(c, createToken(user));

  return c.json({
    success: true,
    message: 'Login successful',
    data: {
      user: await serializePublicUser(user),
    },
  });
});

auth.post('/verify-two-factor', async (c) => {
  const rateLimitResponse = await enforceRateLimits(c, [{
    scope: 'auth-mfa-ip',
    actor: getRateLimitClientIp(c),
    limit: 10,
    windowSeconds: 15 * 60,
  }]);
  if (rateLimitResponse) return rateLimitResponse;

  const body = await c.req.json();
  const challenge = await findUserActionToken(body.challengeToken, undefined, 'mfa_login');
  if (!challenge) {
    return c.json({success: false, error: 'This verification session has expired. Please log in again.'}, 401);
  }

  const [user] = await db.select().from(users).where(eq(users.id, challenge.userId)).limit(1);
  if (!user || !user.twoFactorEnabled) {
    await consumeUserActionToken(challenge);
    return c.json({success: false, error: 'This verification session is no longer valid. Please log in again.'}, 401);
  }

  const validCode = await verifyAndConsumeSecondFactor(user, body.code);
  if (!validCode) {
    await recordFailedActionTokenAttempt(challenge);
    return c.json({success: false, error: 'The authenticator or recovery code is incorrect.'}, 401);
  }
  if (!await consumeUserActionToken(challenge)) {
    return c.json({success: false, error: 'This verification session has already been used. Please log in again.'}, 401);
  }

  setSessionCookie(c, createToken(user));
  return c.json({
    success: true,
    message: 'Login successful.',
    data: {
      user: await serializePublicUser(user),
    },
  });
});

auth.post('/logout', (c) => {
  clearSessionCookie(c);
  return c.json({success: true, message: 'Logged out successfully.'});
});

// Start Google OAuth
auth.get('/google', async (c) => {
  const clientId = String(process.env.GOOGLE_CLIENT_ID || '').trim();
  if (!clientId) {
    return c.redirect(redirectToFrontend('/login', {
      google_error: 'Google sign-in is not configured on the server.',
    }));
  }

  const state = await createGoogleOAuthState('google_oauth');
  setOAuthStateCookie(c, state);

  return c.redirect(buildGoogleAuthUrl(state));
});

auth.post('/google/export-reauth-url', async (c) => {
  const token = getSessionCookieToken(c);
  if (!token) return c.json({success: false, error: 'Sign in again before downloading your course details.'}, 401);

  let decoded;
  try {
    decoded = jwt.verify(token, getJwtSecret());
  } catch {
    return c.json({success: false, error: 'Your sign-in has expired. Please log in again.'}, 401);
  }

  const [user] = await db.select().from(users).where(eq(users.id, decoded.userId)).limit(1);
  if (!user) return c.json({success: false, error: 'Your account could not be verified.'}, 401);
  const clientId = String(process.env.GOOGLE_CLIENT_ID || '').trim();
  const clientSecret = String(process.env.GOOGLE_CLIENT_SECRET || '').trim();
  if (!clientId || !clientSecret) {
    return c.json({success: false, error: 'Google sign-in is not configured on the server.'}, 503);
  }

  const state = await createGoogleOAuthState('google_export_reauth', user.id);
  setOAuthStateCookie(c, state);
  return c.json({success: true, data: {url: buildGoogleAuthUrl(state)}});
});

// Complete Google OAuth
auth.get('/google/callback', async (c) => {
  const state = c.req.query('state');
  const code = c.req.query('code');
  const cookieState = getRequestCookie(c, 'cohortia_google_oauth_state');
  clearOAuthStateCookie(c);

  let verifiedState;
  try {
    verifiedState = statesMatch(cookieState, state) ? jwt.verify(state, getJwtSecret()) : null;
  } catch {
    verifiedState = null;
  }

  if (!verifiedState || typeof verifiedState !== 'object'
    || !['google_oauth', 'google_export_reauth'].includes(verifiedState.purpose)
    || typeof verifiedState.nonce !== 'string'
    || (verifiedState.purpose === 'google_export_reauth' && typeof verifiedState.userId !== 'string')) {
    return c.redirect(redirectToFrontend('/login', {
      google_error: 'Google sign-in could not be verified. Please try again.',
    }));
  }

  const stateOwnerId = verifiedState.userId || GOOGLE_OAUTH_STATE_USER_ID;
  const stateRecord = await findUserActionToken(verifiedState.nonce, stateOwnerId, 'google_oauth_state');
  if (!stateRecord || !await consumeUserActionToken(stateRecord)) {
    return c.redirect(redirectToFrontend('/login', {
      google_error: 'Google sign-in could not be verified. Please try again.',
    }));
  }

  if (!code) {
    return c.redirect(redirectToFrontend('/login', {
      google_error: 'Google sign-in was cancelled.',
    }));
  }

  const clientId = String(process.env.GOOGLE_CLIENT_ID || '').trim();
  const clientSecret = String(process.env.GOOGLE_CLIENT_SECRET || '').trim();
  if (!clientId || !clientSecret) {
    return c.redirect(redirectToFrontend('/login', {
      google_error: 'Google sign-in is not configured on the server.',
    }));
  }

  try {
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: googleRedirectUrl(),
        grant_type: 'authorization_code',
      }),
    });
    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok || !tokenData.access_token) {
      throw new Error('Google token exchange failed');
    }

    const profileResponse = await fetch('https://openidconnect.googleapis.com/v1/userinfo', {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    });
    const profile = await profileResponse.json();

    if (!profileResponse.ok || profile.email_verified !== true || !profile.email) {
      throw new Error('Google account email is not verified');
    }

    const email = String(profile.email).trim().toLowerCase();
    const existingUsers = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    let user = existingUsers[0];
    if (verifiedState.purpose === 'google_export_reauth'
      && (!user || user.id !== verifiedState.userId)) {
      return c.redirect(redirectToFrontend('/dashboard/profile', {
        google_export_error: 'Choose the Google account linked to your Cohortia profile.',
      }));
    }
    const now = new Date().toISOString();

    if (!user) {
      user = {
        id: uuidv4(),
        name: String(profile.name || profile.email.split('@')[0]).trim(),
        email,
        role: 'career-starter',
      };

      await db.insert(users).values({
        id: user.id,
        name: user.name,
        email: user.email,
        password: await bcrypt.hash(uuidv4(), 12),
        role: user.role,
        createdAt: now,
        updatedAt: now,
      });

      await logActivity({
        userId: user.id,
        activityType: 'signup',
        entityId: user.id,
        metadata: { source: 'google_oauth' },
      });
    }

    if (verifiedState.purpose === 'google_export_reauth') {
      const exchangeCode = await createUserActionToken(user.id, 'google_export_exchange', 60);
      setOAuthExchangeCookie(c, exchangeCode);
      return c.redirect(redirectToFrontend('/dashboard/profile', {google_exchange: '1'}));
    }

    const exchangeCode = await createUserActionToken(user.id, 'google_login_exchange', 60);
    setOAuthExchangeCookie(c, exchangeCode);
    return c.redirect(redirectToFrontend('/login', {google_exchange: '1'}));
  } catch (error) {
    console.error('Google OAuth callback failed:', error);
    return c.redirect(redirectToFrontend('/login', {
      google_error: 'Google sign-in failed. Please try again.',
    }));
  }
});

auth.post('/google/exchange', async (c) => {
  const exchangeCode = getRequestCookie(c, 'cohortia_google_oauth_exchange');
  clearOAuthExchangeCookie(c);
  if (!exchangeCode) {
    return c.json({success: false, error: 'Google sign-in has expired. Please try again.'}, 401);
  }

  const exchange = await findUserActionToken(exchangeCode, null, 'google_login_exchange')
    || await findUserActionToken(exchangeCode, null, 'google_export_exchange');
  if (!exchange || !await consumeUserActionToken(exchange)) {
    return c.json({success: false, error: 'Google sign-in has expired or has already been used. Please try again.'}, 401);
  }

  const [user] = await db.select().from(users).where(eq(users.id, exchange.userId)).limit(1);
  if (!user) {
    return c.json({success: false, error: 'The Google sign-in account could not be verified.'}, 401);
  }

  if (exchange.action === 'google_export_exchange') {
    const proofToken = await createUserActionToken(user.id, 'google_export_proof', 300);
    return c.json({success: true, data: {googleProof: proofToken}});
  }

  if (user.twoFactorEnabled) {
    const challengeToken = await createUserActionToken(user.id, 'mfa_login', 300);
    return c.json({
      success: true,
      data: {twoFactorRequired: true, challengeToken},
    });
  }

  setSessionCookie(c, createToken(user));
  return c.json({success: true});
});

// Get current user
auth.get('/me', async (c) => {
  const token = getSessionCookieToken(c);
  
  if (!token) {
    return c.json({ success: false, error: 'No token provided' }, 401);
  }

  try {
    const decoded = jwt.verify(token, getJwtSecret());
    const userResult = await db
      .select()
      .from(users)
      .where(eq(users.id, decoded.userId))
      .limit(1);

    if (userResult.length === 0) {
      return c.json({ success: false, error: 'User not found' }, 404);
    }

    const user = userResult[0];

    return c.json({ success: true, data: { user: await serializePublicUser(user) } });
  } catch (error) {
    return c.json({ success: false, error: 'Invalid token' }, 401);
  }
});

export default auth;
