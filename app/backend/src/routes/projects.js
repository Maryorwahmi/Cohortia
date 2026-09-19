import { Hono } from 'hono';
import { db } from '../db/index.js';
import { projectTemplates, userProjectSubmissions, userRoadmaps } from '../db/schema.js';
import { eq, and } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import { logActivity } from '../lib/activity.js';
import { createNotification } from '../lib/notifications.js';

const projects = new Hono();

function buildFallbackProjects(roadmap) {
  let parsed = null;
  try {
    parsed = roadmap?.generatedData ? JSON.parse(roadmap.generatedData) : null;
  } catch {
    parsed = null;
  }

  const modules = parsed?.modules || [];
  const first = modules[0];
  const middle = modules[Math.min(1, Math.max(modules.length - 1, 0))] || first;
  const last = modules[Math.max(modules.length - 1, 0)] || first;

  return [
    {
      id: `${roadmap.id}-career-story`,
      roadmapId: roadmap.id,
      moduleIndex: 0,
      title: 'My Career Story Map',
      description:
        'Shape your experience, strengths, and goals into a crisp story that feels confident and specific.',
      deliverable: 'One-page story map or deck',
      criteria: JSON.stringify([
        'Clear target direction',
        'Three strengths with proof',
        'A short story you can tell in interviews',
      ]),
      aiHelpPrompt: `Help me create a career story map for ${roadmap.title}. Focus on the first module: ${first?.title || 'Foundations'}.`,
      difficulty: 'Beginner',
      status: 'ready',
      createdAt: roadmap.createdAt,
      updatedAt: roadmap.updatedAt,
    },
    {
      id: `${roadmap.id}-focus-project`,
      roadmapId: roadmap.id,
      moduleIndex: Math.min(1, Math.max(modules.length - 1, 0)),
      title: 'First Focus Project',
      description:
        'Build a focused project that demonstrates your first real application of the roadmap.',
      deliverable: 'Mini project + reflection',
      criteria: JSON.stringify([
        'Solves one real problem',
        'Uses the tools from the roadmap',
        'Shows your process, not just the final result',
      ]),
      aiHelpPrompt: `Help me scope and build my first focus project using ${middle?.title || 'Core skills'} from the roadmap.`,
      difficulty: 'Beginner',
      status: 'ready',
      createdAt: roadmap.createdAt,
      updatedAt: roadmap.updatedAt,
    },
    {
      id: `${roadmap.id}-portfolio-starter`,
      roadmapId: roadmap.id,
      moduleIndex: Math.max(modules.length - 1, 0),
      title: 'Portfolio Starter',
      description:
        'Package your strongest work into a clean portfolio starter that can grow with your second career too.',
      deliverable: 'Portfolio page or case study',
      criteria: JSON.stringify([
        'Shows your process and final output',
        'Feels clear enough to share with a mentor or recruiter',
        'Makes it easy to add future careers and projects',
      ]),
      aiHelpPrompt: `Help me package my work into a portfolio starter for ${roadmap.title}. Use the final module: ${last?.title || 'Portfolio'}.`,
      difficulty: 'Intermediate',
      status: 'ready',
      createdAt: roadmap.createdAt,
      updatedAt: roadmap.updatedAt,
    },
  ];
}

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
    } catch (e) { lastError = e.message; }
  }
  return { ok: false, error: lastError };
}

// Get user's submissions
projects.get('/submissions/me', async (c) => {
  const userId = c.get('userId');
  const subs = await db
    .select()
    .from(userProjectSubmissions)
    .where(eq(userProjectSubmissions.userId, userId));
  return c.json({ success: true, data: subs });
});

// Submit a project
projects.post('/:projectId/submit', async (c) => {
  const userId = c.get('userId');
  const projectId = c.req.param('projectId');
  const { content } = await c.req.json();
  if (!content) return c.json({ success: false, error: 'Content is required' }, 400);

  const now = new Date().toISOString();
  const id = uuidv4();
  await db.insert(userProjectSubmissions).values({
    id, userId, projectId, content, status: 'submitted', createdAt: now, updatedAt: now,
  });

  await logActivity({
    userId,
    activityType: 'project_submitted',
    entityId: projectId,
    metadata: { submissionId: id },
  });

  await createNotification({
    userId,
    type: 'system',
    title: 'Project Submitted',
    message: 'Your project submission has been received and is awaiting review.',
  });

  return c.json({ success: true, message: 'Project submitted', data: { id } });
});

// AI feedback on a submission
projects.post('/:submissionId/feedback', async (c) => {
  const userId = c.get('userId');
  const submissionId = c.req.param('submissionId');
  const [submission] = await db.select().from(userProjectSubmissions).where(eq(userProjectSubmissions.id, submissionId)).limit(1);
  if (!submission) return c.json({ success: false, error: 'Submission not found' }, 404);
  if (submission.userId !== userId) return c.json({ success: false, error: 'Unauthorized' }, 403);

  const [project] = await db.select().from(projectTemplates).where(eq(projectTemplates.id, submission.projectId)).limit(1);
  const projectInfo = project ? `Title: ${project.title}\nDescription: ${project.description}\nDeliverable: ${project.deliverable}\nCriteria: ${project.criteria || 'N/A'}` : 'N/A';

  const systemPrompt = `You are Cohortia, a professional career mentor and project reviewer. You give constructive, detailed, and encouraging feedback on student projects. You evaluate based on clarity, completeness, practical application, and presentation. Be thorough but kind. Always suggest specific improvements. Score out of 100.`;
  const prompt = `Review this project submission and provide detailed feedback.\n\nProject Info:\n${projectInfo}\n\nUser Submission:\n${submission.content}\n\nPlease provide:\n1. A score out of 100\n2. What was done well (2-3 points)\n3. Specific areas for improvement (2-3 points)\n4. Actionable next steps (2-3 suggestions)\n5. An encouraging closing statement\n\nReturn JSON: { "score": number, "feedback": string, "strengths": [string], "improvements": [string], "nextSteps": [string] }`;

  const result = await callGeminiWithKeys(prompt, systemPrompt, 4096);
  if (!result.ok) return c.json({ success: false, error: 'AI feedback failed', details: result.error }, 502);

  const text = result.response.candidates?.[0]?.content?.parts?.[0]?.text || '';
  let feedback = null;
  try {
    const match = text.match(/\{[\s\S]*\}/);
    feedback = JSON.parse(match ? match[0] : text);
  } catch { feedback = { score: 0, feedback: text }; }

  const now = new Date().toISOString();
  await db
    .update(userProjectSubmissions)
    .set({ aiFeedback: JSON.stringify(feedback), aiScore: feedback.score || 0, status: 'ai_reviewed', updatedAt: now })
    .where(eq(userProjectSubmissions.id, submissionId));

  return c.json({ success: true, data: feedback });
});

// Get project templates for a roadmap
projects.get('/:roadmapId', async (c) => {
  const roadmapId = c.req.param('roadmapId');
  const templates = await db
    .select()
    .from(projectTemplates)
    .where(eq(projectTemplates.roadmapId, roadmapId))
    .orderBy(projectTemplates.moduleIndex);

  if (templates.length > 0) {
    return c.json({ success: true, data: templates });
  }

  const [roadmap] = await db
    .select()
    .from(userRoadmaps)
    .where(eq(userRoadmaps.id, roadmapId))
    .limit(1);

  if (!roadmap) {
    return c.json({ success: false, error: 'Roadmap not found' }, 404);
  }

  return c.json({ success: true, data: buildFallbackProjects(roadmap), fallback: true });
});

export default projects;
