import { Hono } from 'hono';
import { db } from '../db/index.js';
import { internshipBriefs, internshipSubmissions } from '../db/schema.js';
import { eq, desc } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

const internships = new Hono();

function parseBrief(brief) {
  return {
    ...brief,
    skills: brief.skills ? JSON.parse(brief.skills) : [],
  };
}

const submissionSchema = z.object({
  content: z.string().min(10, 'Submission must be at least 10 characters'),
  notes: z.string().optional(),
});

// Get all internship briefs
internships.get('/briefs', async (c) => {
  const briefs = await db
    .select()
    .from(internshipBriefs)
    .orderBy(desc(internshipBriefs.createdAt));

  return c.json({ success: true, data: { briefs: briefs.map(parseBrief) } });
});

// Get single brief
internships.get('/briefs/:id', async (c) => {
  const briefId = c.req.param('id');

  const brief = await db
    .select()
    .from(internshipBriefs)
    .where(eq(internshipBriefs.id, briefId))
    .limit(1);

  if (brief.length === 0) {
    return c.json({ success: false, error: 'Brief not found' }, 404);
  }

  return c.json({ success: true, data: { brief: parseBrief(brief[0]) } });
});

// Submit work for a brief
internships.post('/briefs/:id/submit', async (c) => {
  const userId = c.get('userId');
  const briefId = c.req.param('id');
  const body = await c.req.json();

  const result = submissionSchema.safeParse(body);
  if (!result.success) {
    return c.json({
      success: false,
      error: 'Validation failed',
      details: result.error.flatten().fieldErrors,
    }, 400);
  }

  const data = result.data;
  const now = new Date().toISOString();

  const submission = await db.insert(internshipSubmissions).values({
    id: uuidv4(),
    briefId,
    userId,
    content: data.content,
    notes: data.notes || null,
    status: 'submitted',
    feedback: null,
    score: null,
    createdAt: now,
    updatedAt: now,
  }).returning();

  return c.json({ success: true, data: { submission: submission[0] } }, 201);
});

// Get user's submissions
internships.get('/submissions', async (c) => {
  const userId = c.get('userId');

  const submissions = await db
    .select()
    .from(internshipSubmissions)
    .where(eq(internshipSubmissions.userId, userId))
    .orderBy(desc(internshipSubmissions.createdAt));

  return c.json({ success: true, data: { submissions } });
});

export default internships;