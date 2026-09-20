import 'dotenv/config';
import { Hono } from 'hono';
import { db } from '../db/index.js';
import { mentorContext, users, userRoadmaps, userLessonProgress, userProjectSubmissions } from '../db/schema.js';
import { eq } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';

const mentor = new Hono();

// Helper to get or create mentor context
async function getOrCreateContext(userId) {
  const [existing] = await db.select().from(mentorContext).where(eq(mentorContext.userId, userId)).limit(1);
  if (existing) return existing;

  const now = new Date().toISOString();
  const newContext = {
    id: uuidv4(),
    userId,
    assessedLevel: null,
    careerGoal: null,
    shortTermGoal: null,
    longTermGoal: null,
    learningStyle: null,
    strengths: JSON.stringify([]),
    weaknesses: JSON.stringify([]),
    pastMistakes: JSON.stringify([]),
    completedTasks: JSON.stringify([]),
    lastCheckIn: null,
    checkInHistory: JSON.stringify([]),
    conversationSummary: '',
    preferredMode: 'mentor',
    preferredOutputFormat: 'text',
    modeHistory: JSON.stringify([]),
    pendingAction: null,
    pendingActionSetAt: null,
    createdAt: now,
    updatedAt: now,
  };
  await db.insert(mentorContext).values(newContext);
  return newContext;
}

function safeParse(json) {
  if (!json) return [];
  try { return JSON.parse(json); } catch { return []; }
}

function safeStringify(data) {
  try { return JSON.stringify(data); } catch { return '[]'; }
}

// GET /api/v1/mentor/context — Get mentor memory for current user
mentor.get('/context', async (c) => {
  const userId = c.get('userId');
  if (!userId) {
    return c.json({ success: false, error: 'Unauthorized' }, 401);
  }

  try {
    const context = await getOrCreateContext(userId);
    const [user] = await db.select().from(users).where(eq(users.id, userId)).limit(1);

    // Also get recent progress stats
    const completedLessons = await db.select().from(userLessonProgress)
      .where(eq(userLessonProgress.userId, userId));
    const submissions = await db.select().from(userProjectSubmissions)
      .where(eq(userProjectSubmissions.userId, userId));

    return c.json({
      success: true,
      data: {
        ...context,
        strengths: safeParse(context.strengths),
        weaknesses: safeParse(context.weaknesses),
        pastMistakes: safeParse(context.pastMistakes),
        completedTasks: safeParse(context.completedTasks),
        checkInHistory: safeParse(context.checkInHistory),
        modeHistory: safeParse(context.modeHistory),
        preferredOutputFormat: context.preferredOutputFormat || 'text',
        stats: {
          totalLessonsCompleted: completedLessons.filter(l => l.status === 'completed').length,
          totalProjectsSubmitted: submissions.length,
          averageProjectScore: submissions.length > 0
            ? Math.round(submissions.reduce((s, p) => s + (p.aiScore || 0), 0) / submissions.length)
            : 0,
        },
        user: user ? {
          name: user.name,
          desiredField: user.desiredField,
          experienceLevel: user.experienceLevel,
          careerGoal: user.careerGoal,
        } : null,
      },
    });
  } catch (error) {
    console.error('Mentor context error:', error);
    return c.json({ success: false, error: 'Failed to load mentor context' }, 500);
  }
});

// POST /api/v1/mentor/context — Update mentor memory
mentor.post('/context', async (c) => {
  const userId = c.get('userId');
  if (!userId) {
    return c.json({ success: false, error: 'Unauthorized' }, 401);
  }

  const body = await c.req.json();
  const now = new Date().toISOString();

  try {
    const existing = await getOrCreateContext(userId);
    const updateData = {};

    // Simple fields
    if (body.assessedLevel !== undefined) updateData.assessedLevel = body.assessedLevel;
    if (body.careerGoal !== undefined) updateData.careerGoal = body.careerGoal;
    if (body.shortTermGoal !== undefined) updateData.shortTermGoal = body.shortTermGoal;
    if (body.longTermGoal !== undefined) updateData.longTermGoal = body.longTermGoal;
    if (body.learningStyle !== undefined) updateData.learningStyle = body.learningStyle;
    if (body.preferredMode !== undefined) updateData.preferredMode = body.preferredMode;
    if (body.preferredOutputFormat !== undefined) updateData.preferredOutputFormat = body.preferredOutputFormat;
    if (body.pendingAction !== undefined) {
      updateData.pendingAction = body.pendingAction;
      updateData.pendingActionSetAt = now;
    }
    if (body.conversationSummary !== undefined) updateData.conversationSummary = body.conversationSummary;

    // Array fields (merge with existing)
    if (body.strengths !== undefined) {
      const existingArr = safeParse(existing.strengths);
      const newItems = Array.isArray(body.strengths) ? body.strengths : [body.strengths];
      updateData.strengths = safeStringify([...new Set([...existingArr, ...newItems])]);
    }
    if (body.weaknesses !== undefined) {
      const existingArr = safeParse(existing.weaknesses);
      const newItems = Array.isArray(body.weaknesses) ? body.weaknesses : [body.weaknesses];
      updateData.weaknesses = safeStringify([...new Set([...existingArr, ...newItems])]);
    }
    if (body.pastMistakes !== undefined) {
      const existingArr = safeParse(existing.pastMistakes);
      const newItems = Array.isArray(body.pastMistakes) ? body.pastMistakes : [body.pastMistakes];
      updateData.pastMistakes = safeStringify([...existingArr, ...newItems].slice(-20)); // keep last 20
    }
    if (body.completedTasks !== undefined) {
      const existingArr = safeParse(existing.completedTasks);
      const newItems = Array.isArray(body.completedTasks) ? body.completedTasks : [body.completedTasks];
      updateData.completedTasks = safeStringify([...existingArr, ...newItems].slice(-30)); // keep last 30
    }
    if (body.checkInHistory !== undefined) {
      const existingArr = safeParse(existing.checkInHistory);
      const newItems = Array.isArray(body.checkInHistory) ? body.checkInHistory : [body.checkInHistory];
      updateData.checkInHistory = safeStringify([...existingArr, ...newItems].slice(-12)); // keep last 12
      updateData.lastCheckIn = now;
    }
    if (body.modeHistory !== undefined) {
      const existingArr = safeParse(existing.modeHistory);
      const newItems = Array.isArray(body.modeHistory) ? body.modeHistory : [body.modeHistory];
      updateData.modeHistory = safeStringify([...existingArr, ...newItems].slice(-10));
    }

    updateData.updatedAt = now;

    await db.update(mentorContext)
      .set(updateData)
      .where(eq(mentorContext.userId, userId));

    return c.json({ success: true, message: 'Mentor context updated' });
  } catch (error) {
    console.error('Mentor context update error:', error);
    return c.json({ success: false, error: 'Failed to update mentor context' }, 500);
  }
});

// POST /api/v1/mentor/check-in — Weekly check-in
mentor.post('/check-in', async (c) => {
  const userId = c.get('userId');
  if (!userId) {
    return c.json({ success: false, error: 'Unauthorized' }, 401);
  }

  const body = await c.req.json();
  const { accomplishments, struggles, nextWeek } = body;
  const now = new Date().toISOString();

  try {
    const existing = await getOrCreateContext(userId);
    const history = safeParse(existing.checkInHistory);

    const checkIn = {
      date: now,
      accomplishments: accomplishments || '',
      struggles: struggles || '',
      nextWeek: nextWeek || '',
    };

    history.push(checkIn);
    if (history.length > 12) history.shift();

    await db.update(mentorContext)
      .set({
        checkInHistory: safeStringify(history),
        lastCheckIn: now,
        updatedAt: now,
      })
      .where(eq(mentorContext.userId, userId));

    return c.json({ success: true, data: { checkIn, totalCheckIns: history.length } });
  } catch (error) {
    console.error('Check-in error:', error);
    return c.json({ success: false, error: 'Failed to save check-in' }, 500);
  }
});

// GET /api/v1/mentor/check-in — Get check-in history
mentor.get('/check-in', async (c) => {
  const userId = c.get('userId');
  if (!userId) {
    return c.json({ success: false, error: 'Unauthorized' }, 401);
  }

  try {
    const context = await getOrCreateContext(userId);
    const history = safeParse(context.checkInHistory);

    // Check if they need a new check-in (7 days since last)
    const needsCheckIn = !context.lastCheckIn ||
      (new Date() - new Date(context.lastCheckIn)) > 7 * 24 * 60 * 60 * 1000;

    return c.json({
      success: true,
      data: {
        history,
        lastCheckIn: context.lastCheckIn,
        needsCheckIn,
      },
    });
  } catch (error) {
    console.error('Check-in get error:', error);
    return c.json({ success: false, error: 'Failed to load check-ins' }, 500);
  }
});

export default mentor;
