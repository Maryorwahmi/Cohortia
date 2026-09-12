import { Hono } from 'hono';
import { db } from '../db/index.js';
import { aiLessons, userLessonProgress, userRoadmaps } from '../db/schema.js';
import { eq, and } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import { logActivity } from '../lib/activity.js';
import { createNotification } from '../lib/notifications.js';

const lessons = new Hono();

function getGeminiKeys() {
  const keys = [];
  const mainKey = process.env.GEMINI_API_KEY;
  if (mainKey) keys.push(mainKey.trim().replace(/^["']|["']$/g, ''));
  for (let i = 1; i <= 9; i++) {
    const key = process.env[`GEMINI_API_KEY_${i}`];
    if (key) keys.push(key.trim().replace(/^["']|["']$/g, ''));
  }
  return keys;
}

async function callGeminiWithKeys(prompt, systemPrompt, maxTokens = 4096) {
  const keys = getGeminiKeys();
  const model = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
  const baseUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
  
  let lastError = null;
  for (let i = 0; i < keys.length; i++) {
    try {
      const resp = await fetch(`${baseUrl}?key=${keys[i]}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: systemPrompt }] },
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.7, maxOutputTokens: maxTokens },
        }),
      });
      if (resp.ok) return { ok: true, response: await resp.json(), keyIndex: i };
      const err = await resp.json().catch(() => ({}));
      lastError = err.error?.message || `HTTP ${resp.status}`;
      console.log(`Lesson key ${i} failed: ${lastError}`);
    } catch (e) {
      lastError = e.message;
      console.log(`Lesson key ${i} error: ${lastError}`);
    }
  }
  return { ok: false, error: lastError };
}

function stripHtml(value = '') {
  return String(value).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function extractJsonPayload(value = '') {
  const text = String(value).trim().replace(/^```(?:json)?/i, '').replace(/```$/i, '').trim();
  try {
    return JSON.parse(text);
  } catch {
    const start = text.indexOf('{');
    const end = text.lastIndexOf('}');
    if (start >= 0 && end > start) {
      return JSON.parse(text.slice(start, end + 1));
    }
    throw new Error('AI response was not valid JSON');
  }
}

function toSeconds(value, fallback = 600) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric) || numeric <= 0) return fallback;
  return Math.min(Math.round(numeric), 600);
}

function normaliseMicroLesson(raw, fallback) {
  const payload = extractJsonPayload(raw);
  const durationSeconds = toSeconds(payload.durationSeconds, 600);
  const sourceSlides = Array.isArray(payload.slides) && payload.slides.length
    ? payload.slides
    : [{
      start: 0,
      end: durationSeconds,
      bigIdea: fallback.chapterTitle,
      narration: payload.transcript || payload.summary || '',
      visualDirection: 'Clean cinematic learning slide with the core idea',
      focusWords: [fallback.chapterTitle],
      motion: 'fade',
    }];

  const slides = sourceSlides.map((slide, index) => {
    const start = Math.min(Math.max(Number(slide.start) || 0, 0), durationSeconds);
    const nextStart = sourceSlides[index + 1]?.start;
    const end = Math.min(
      Math.max(Number(slide.end) || Number(nextStart) || durationSeconds, start + 1),
      durationSeconds,
    );
    const bigIdea = String(slide.bigIdea || slide.title || `Idea ${index + 1}`).trim();

    return {
      id: String(slide.id || `slide-${index + 1}`),
      start,
      end,
      bigIdea: bigIdea.slice(0, 72),
      narration: String(slide.narration || slide.script || '').trim(),
      visualDirection: String(slide.visualDirection || slide.visual || 'Guided cinematic lesson visual').trim(),
      motion: ['zoom', 'pan', 'fade'].includes(slide.motion) ? slide.motion : ['zoom', 'pan', 'fade'][index % 3],
      focusWords: Array.isArray(slide.focusWords)
        ? slide.focusWords.map((item) => String(item).trim()).filter(Boolean).slice(0, 8)
        : bigIdea.split(/\s+/).slice(0, 4),
      accent: ['red', 'sky', 'navy'].includes(slide.accent) ? slide.accent : ['red', 'sky', 'navy'][index % 3],
    };
  });

  const transcript = String(
    payload.transcript || slides.map((slide) => slide.narration).filter(Boolean).join('\n\n'),
  ).trim();
  const summary = stripHtml(payload.summary || fallback.summary || transcript.slice(0, 240));

  return {
    version: 1,
    format: 'ai-slide-voice-lesson',
    title: String(payload.title || fallback.chapterTitle).slice(0, 120),
    summary,
    durationSeconds,
    slides,
    transcript,
    keyTakeaways: Array.isArray(payload.keyTakeaways)
      ? payload.keyTakeaways.map((item) => String(item).trim()).filter(Boolean).slice(0, 6)
      : [],
    practiceTask: String(payload.practiceTask || '').trim(),
    knowledgeCheck: Array.isArray(payload.knowledgeCheck)
      ? payload.knowledgeCheck.map((item) => String(item).trim()).filter(Boolean).slice(0, 5)
      : [],
  };
}

function hasMicroLessonPayload(lesson) {
  if (lesson?.contentType !== 'slides_voice') return false;
  try {
    const parsed = JSON.parse(lesson.content || '{}');
    return parsed?.format === 'ai-slide-voice-lesson';
  } catch {
    return false;
  }
}

// Get a single lesson
lessons.get('/detail/:lessonId', async (c) => {
  const lessonId = c.req.param('lessonId');
  const [lesson] = await db.select().from(aiLessons).where(eq(aiLessons.id, lessonId)).limit(1);
  if (!lesson) return c.json({ success: false, error: 'Lesson not found' }, 404);
  return c.json({ success: true, data: lesson });
});

// Get user's progress for a roadmap
lessons.get('/progress/:roadmapId', async (c) => {
  const userId = c.get('userId');
  const roadmapId = c.req.param('roadmapId');
  try {
    const progress = await db
      .select()
      .from(userLessonProgress)
      .where(and(eq(userLessonProgress.userId, userId), eq(userLessonProgress.roadmapId, roadmapId)));
    return c.json({ success: true, data: progress });
  } catch (error) {
    console.error('Lesson progress lookup failed:', error);
    return c.json({ success: true, data: [] });
  }
});

// Mark lesson complete
lessons.post('/complete/:lessonId', async (c) => {
  const userId = c.get('userId');
  const lessonId = c.req.param('lessonId');
  const [lesson] = await db.select().from(aiLessons).where(eq(aiLessons.id, lessonId)).limit(1);
  if (!lesson) return c.json({ success: false, error: 'Lesson not found' }, 404);

  const now = new Date().toISOString();
  const existing = await db
    .select()
    .from(userLessonProgress)
    .where(and(eq(userLessonProgress.userId, userId), eq(userLessonProgress.lessonId, lessonId)))
    .limit(1);

  if (existing.length > 0) {
    await db
      .update(userLessonProgress)
      .set({ status: 'completed', completedAt: now, updatedAt: now })
      .where(eq(userLessonProgress.id, existing[0].id));
  } else {
    await db.insert(userLessonProgress).values({
      id: uuidv4(), userId, lessonId, roadmapId: lesson.roadmapId,
      moduleIndex: lesson.moduleIndex, status: 'completed',
      startedAt: now, completedAt: now, createdAt: now, updatedAt: now,
    });
  }

  // Log activity and notify
  await logActivity({
    userId,
    activityType: 'lesson_completed',
    entityId: lessonId,
    metadata: {
      roadmapId: lesson.roadmapId,
      moduleIndex: lesson.moduleIndex,
      chapterIndex: lesson.chapterIndex,
      title: lesson.title,
    },
  });

  await createNotification({
    userId,
    type: 'achievement',
    title: 'Lesson Completed',
    message: `Great job finishing "${lesson.title}". Keep the momentum going!`,
  });

  return c.json({ success: true, message: 'Lesson marked complete' });
});

// AI Generate a lesson for a specific module + chapter
lessons.post('/generate', async (c) => {
  const userId = c.get('userId');
  const body = await c.req.json();
  const {
    roadmapId,
    moduleIndex,
    chapterIndex,
    moduleTitle,
    moduleDescription,
    keySkills,
    chapterTitle,
    careerTrack,
    desiredField,
    experienceLevel,
    learnerType,
    skillsKnown,
  } = body;

  // Return cached micro-lessons, but upgrade older text/video lessons when they are opened.
  const existing = await db
    .select()
    .from(aiLessons)
    .where(and(
      eq(aiLessons.roadmapId, roadmapId),
      eq(aiLessons.moduleIndex, moduleIndex),
      eq(aiLessons.chapterIndex, chapterIndex)
    ))
    .limit(1);

  if (existing.length > 0 && hasMicroLessonPayload(existing[0])) {
    return c.json({ success: true, data: existing[0], cached: true });
  }

  const systemPrompt = `You are Cohortia, an expert instructor teaching a specific topic inside a structured career syllabus.

Return ONLY valid JSON. No markdown fences, no commentary, no HTML.

The JSON schema must be:
{
  "format": "ai-slide-voice-lesson",
  "title": "string",
  "summary": "brief 2-3 sentence lesson summary",
  "durationSeconds": number,
  "slides": [
    {
      "id": "slide-1",
      "start": number,
      "end": number,
      "bigIdea": "ONE short bold idea, 3-8 words",
      "narration": "spoken voiceover for this slide, 1-3 sentences",
      "visualDirection": "cinematic background or layout direction",
      "motion": "zoom | pan | fade",
      "focusWords": ["words to highlight as the voice speaks"],
      "accent": "red | sky | navy"
    }
  ],
  "transcript": "full transcript",
  "keyTakeaways": ["string"],
  "practiceTask": "short practical exercise",
  "knowledgeCheck": ["question"]
}

Rules:
1. Teach the SPECIFIC topic provided. Do not generalise.
2. Use real-world examples, code snippets, scenarios, or walkthroughs where relevant.
3. Never write vague sentences like "this is important" or "this will help you". Teach the content directly.
4. Adjust depth for the learner level: beginner = foundational, intermediate = deeper patterns, advanced = edge cases and architecture.
5. The lesson must be 10 minutes or less. durationSeconds must never exceed 600.
6. Use 5-9 slides. The first slide is the Warm Up hook, the next 2-3 teach the concept, then practice, apply, checkpoint, and connect.
7. Each slide must have exactly one big bold idea. Do not write paragraph headings.
8. Include focusWords for highlighted word timing during narration.
9. Include a brief summary, one practice task, and 3-5 knowledge-check questions.
10. Never mention that you are AI. Write as Cohortia's mentor.`;

  const prompt = `Create a cinematic Slides + Voice micro-learning lesson for this exact topic.

Course / Career Track: ${careerTrack || desiredField || 'General Career Development'}
Module: ${moduleTitle}
Module Description: ${moduleDescription || 'No description provided'}
Module Key Skills: ${Array.isArray(keySkills) && keySkills.length ? keySkills.join(', ') : 'Not specified'}
Specific Chapter Topic: ${chapterTitle}
Experience Level: ${experienceLevel || 'Beginner'}
Learner Type: ${learnerType || 'start_career'}
Skills Already Known: ${Array.isArray(skillsKnown) && skillsKnown.length ? skillsKnown.join(', ') : 'None listed'}

The lesson must teach "${chapterTitle}" directly. Do not fall back to generic advice about the module. Use concrete examples and practical demonstrations.

Return valid JSON only.`;

  const result = await callGeminiWithKeys(prompt, systemPrompt, 6144);
  if (!result.ok) {
    return c.json({ success: false, error: 'Failed to generate lesson', details: result.error }, 502);
  }

  const rawContent = result.response.candidates?.[0]?.content?.parts?.[0]?.text || '';
  let microLesson;
  try {
    microLesson = normaliseMicroLesson(rawContent, {
      chapterTitle,
      summary: existing[0]?.summary || '',
    });
  } catch (error) {
    console.error('Micro lesson JSON parse failed:', error);
    return c.json({ success: false, error: 'Failed to format micro lesson' }, 502);
  }

  const content = JSON.stringify(microLesson);
  const summary = microLesson.summary;
  const estimatedDuration = `${Math.ceil(microLesson.durationSeconds / 60)} min`;

  const now = new Date().toISOString();
  if (existing.length > 0) {
    await db
      .update(aiLessons)
      .set({
        title: microLesson.title || chapterTitle,
        summary,
        content,
        contentType: 'slides_voice',
        estimatedDuration,
        status: 'ready',
        updatedAt: now,
      })
      .where(eq(aiLessons.id, existing[0].id));

    const [updatedLesson] = await db.select().from(aiLessons).where(eq(aiLessons.id, existing[0].id)).limit(1);
    return c.json({ success: true, data: updatedLesson, upgraded: true });
  }

  const lessonId = uuidv4();
  await db.insert(aiLessons).values({
    id: lessonId, roadmapId, moduleIndex, chapterIndex,
    title: microLesson.title || chapterTitle, summary, content,
    contentType: 'slides_voice', estimatedDuration,
    status: 'ready', createdAt: now, updatedAt: now,
  });

  const [newLesson] = await db.select().from(aiLessons).where(eq(aiLessons.id, lessonId)).limit(1);
  return c.json({ success: true, data: newLesson });
});

// Get all lessons for a roadmap
lessons.get('/:roadmapId', async (c) => {
  const roadmapId = c.req.param('roadmapId');
  const roadmapLessons = await db
    .select()
    .from(aiLessons)
    .where(eq(aiLessons.roadmapId, roadmapId))
    .orderBy(aiLessons.moduleIndex, aiLessons.chapterIndex);
  return c.json({ success: true, data: roadmapLessons });
});

export default lessons;
