import { db } from '../db/index.js';
import { users, tracks, enrollments } from '../db/schema.js';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';
import { Hono } from 'hono';
import { logActivity } from '../lib/activity.js';

const auth = new Hono();

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

  if (data.desiredField) {
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
    process.env.JWT_SECRET || 'cohortia-dev-secret',
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
    process.env.JWT_SECRET || 'cohortia-dev-secret',
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

// Get current user
auth.get('/me', async (c) => {
  const token = c.req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return c.json({ success: false, error: 'No token provided' }, 401);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'cohortia-dev-secret');
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
