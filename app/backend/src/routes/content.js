import { Hono } from 'hono';
import { db } from '../db/index.js';
import { contentSections } from '../db/schema.js';
import { eq } from 'drizzle-orm';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';

const content = new Hono();

const VALID_SECTIONS = ['success-stories', 'about-team', 'faqs', 'home-hero', 'contact-details'];

const upsertSchema = z.object({
  title: z.string().nullish(),
  data: z.record(z.any()),
});

// Public: get a content section
content.get('/:section', async (c) => {
  const section = c.req.param('section');

  if (!VALID_SECTIONS.includes(section)) {
    return c.json({ success: false, error: 'Invalid section' }, 400);
  }

  const [row] = await db
    .select()
    .from(contentSections)
    .where(eq(contentSections.section, section))
    .limit(1);

  if (!row) {
    return c.json({ success: false, error: 'Section not found' }, 404);
  }

  let data = null;
  try {
    data = row.data ? JSON.parse(row.data) : null;
  } catch {
    data = null;
  }

  return c.json({
    success: true,
    data: {
      section: row.section,
      title: row.title,
      data,
      updatedAt: row.updatedAt,
    },
  });
});

// Auth: upsert a content section
content.post('/:section', async (c) => {
  const userId = c.get('userId');
  if (!userId) {
    return c.json({ success: false, error: 'Unauthorized' }, 401);
  }
  const section = c.req.param('section');

  if (!VALID_SECTIONS.includes(section)) {
    return c.json({ success: false, error: 'Invalid section' }, 400);
  }

  const body = await c.req.json();
  const result = upsertSchema.safeParse(body);
  if (!result.success) {
    return c.json({
      success: false,
      error: 'Validation failed',
      details: result.error.flatten().fieldErrors,
    }, 400);
  }

  const { title, data } = result.data;
  const now = new Date().toISOString();

  const [existing] = await db
    .select()
    .from(contentSections)
    .where(eq(contentSections.section, section))
    .limit(1);

  if (existing) {
    await db
      .update(contentSections)
      .set({
        title: title !== undefined ? title : existing.title,
        data: data !== undefined ? JSON.stringify(data) : existing.data,
        updatedAt: now,
      })
      .where(eq(contentSections.id, existing.id));

    const [updated] = await db
      .select()
      .from(contentSections)
      .where(eq(contentSections.id, existing.id))
      .limit(1);

    return c.json({ success: true, data: { section: updated } });
  }

  const [inserted] = await db.insert(contentSections).values({
    id: uuidv4(),
    section,
    title: title || null,
    data: data ? JSON.stringify(data) : null,
    createdAt: now,
    updatedAt: now,
  }).returning();

  return c.json({ success: true, data: { section: inserted } }, 201);
});

export default content;
