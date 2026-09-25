import { db } from '../db/index.js';
import { users, tracks, catalogCourses, catalogCourseCareers, lessons, enrollments } from '../db/schema.js';
import { eq, and, inArray } from 'drizzle-orm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';
import { Hono } from 'hono';
import { logActivity } from '../lib/activity.js';
import crypto from 'node:crypto';

const auth = new Hono();
const jwtSecret = () => process.env.JWT_SECRET || 'cohortia-dev-secret';
const frontendUrl = () => (process.env.FRONTEND_URL || 'http://localhost:5173').replace(/\/+$/, '');

function createToken(user) {
  return jwt.sign(
    { userId: user.id, email: user.email },
    jwtSecret(),
    { expiresIn: '7d' }
  );
}

function setOAuthStateCookie(c, state) {
  c.header(
    'Set-Cookie',
    `cohortia_google_oauth_state=${state}; Max-Age=600; Path=/api/v1/auth; HttpOnly; SameSite=Lax${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`
  );
}

function clearOAuthStateCookie(c) {
  c.header(
    'Set-Cookie',
    'cohortia_google_oauth_state=; Max-Age=0; Path=/api/v1/auth; HttpOnly; SameSite=Lax'
  );
}

function getCookie(c, name) {
  const cookieHeader = c.req.header('Cookie') || '';
  const cookie = cookieHeader
    .split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${name}=`));
  return cookie ? decodeURIComponent(cookie.slice(name.length + 1)) : '';
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
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

// Register
auth.post('/signup', async (c) => {
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
    const validCareerSlugs = new Set([
      'frontend-development', 'backend-development', 'data-analytics', 'data-science',
      'ai-ml-engineering', 'cybersecurity', 'cloud-engineering', 'devops-engineering',
      'ux-ui-design', 'qa-testing', 'product-management', 'full-stack-development',
    ]);

    if (!limits || !expectedStages.includes(String(selection?.learningStage || '').toLowerCase()) || !validCareerSlugs.has(careerSlug)) {
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

    const careerLinks = await db.select({ courseId: catalogCourseCareers.courseId })
      .from(catalogCourseCareers)
      .where(and(eq(catalogCourseCareers.careerId, careerSlug), inArray(catalogCourseCareers.courseId, selectedIds)));
    if (careerLinks.length !== selectedIds.length) {
      return c.json({ success: false, error: 'One or more courses do not belong to the selected career' }, 400);
    }

    const availableLessons = await db.select({ trackId: lessons.trackId })
      .from(lessons)
      .where(inArray(lessons.trackId, selectedIds));
    const coursesWithLessons = new Set(availableLessons.map((lesson) => lesson.trackId));
    if (selectedIds.some((id) => !coursesWithLessons.has(id))) {
      return c.json({
        success: false,
        error: 'One or more selected courses do not have a learning curriculum yet',
      }, 409);
    }

    const levelCounts = courses.reduce((counts, course) => {
      const level = String(course.level || '').toLowerCase();
      counts[level] = (counts[level] || 0) + 1;
      return counts;
    }, {});
    const actualLevels = new Set(Object.keys(levelCounts));
    const expectedLevels = new Set(Object.keys(limits));
    const selectedLevelById = new Map(selectedCourseIds.map((id, index) => [id, allLevels.find((level) => selectedByLevel[level].includes(id)) || selectedIds[index]]));
    const hasLevelMismatch = courses.some((course) => selectedLevelById.get(course.id) !== String(course.level || '').toLowerCase());
    if ([...actualLevels].some((level) => !expectedLevels.has(level)) ||
      Object.entries(limits).some(([level, max]) => levelCounts[level] !== max) || hasLevelMismatch) {
      return c.json({ success: false, error: 'Roadmap selection exceeds the allowed level limits' }, 400);
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

  // Generate token
  const token = jwt.sign(
    { userId, email: data.email },
    jwtSecret(),
    { expiresIn: '7d' }
  );

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

  return c.json({
    success: true,
    message: 'Account created successfully',
    data: {
      token,
      user: {
        id: userId,
        name: data.name,
        email: data.email,
        role: data.role,
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

  // Find user
  const userResult = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
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

  // Generate token
  const token = jwt.sign(
    { userId: user.id, email: user.email },
    jwtSecret(),
    { expiresIn: '7d' }
  );

  return c.json({
    success: true,
    message: 'Login successful',
    data: {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        phone: user.phone,
        country: user.country,
        currentStatus: user.currentStatus,
        desiredField: user.desiredField,
        onboardingGoal: user.onboardingGoal,
        experienceLevel: user.experienceLevel,
      },
    },
  });
});

// Start Google OAuth
auth.get('/google', (c) => {
  const clientId = String(process.env.GOOGLE_CLIENT_ID || '').trim();
  if (!clientId) {
    return c.redirect(redirectToFrontend('/login', {
      google_error: 'Google sign-in is not configured on the server.',
    }));
  }

  const state = crypto.randomBytes(32).toString('base64url');
  setOAuthStateCookie(c, state);

  const googleUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
  googleUrl.search = new URLSearchParams({
    client_id: clientId,
    redirect_uri: googleRedirectUrl(),
    response_type: 'code',
    scope: 'openid email profile',
    state,
    access_type: 'online',
    prompt: 'select_account',
  }).toString();

  return c.redirect(googleUrl.toString());
});

// Complete Google OAuth
auth.get('/google/callback', async (c) => {
  const state = c.req.query('state');
  const storedState = getCookie(c, 'cohortia_google_oauth_state');
  const code = c.req.query('code');
  clearOAuthStateCookie(c);

  if (!state || !storedState || state !== storedState) {
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

    return c.redirect(redirectToFrontend('/login', {
      google_token: createToken(user),
    }));
  } catch (error) {
    console.error('Google OAuth callback failed:', error);
    return c.redirect(redirectToFrontend('/login', {
      google_error: 'Google sign-in failed. Please try again.',
    }));
  }
});

// Get current user
auth.get('/me', async (c) => {
  const token = c.req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return c.json({ success: false, error: 'No token provided' }, 401);
  }

  try {
    const decoded = jwt.verify(token, jwtSecret());
    const userResult = await db
      .select()
      .from(users)
      .where(eq(users.id, decoded.userId))
      .limit(1);

    if (userResult.length === 0) {
      return c.json({ success: false, error: 'User not found' }, 404);
    }

    const user = userResult[0];
    delete user.password;

    return c.json({ success: true, data: { user } });
  } catch (error) {
    return c.json({ success: false, error: 'Invalid token' }, 401);
  }
});

export default auth;
