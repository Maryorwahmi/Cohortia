import { Hono } from 'hono';
import { db } from '../db/index.js';
import { careers } from '../db/schema.js';
import { eq } from 'drizzle-orm';
import { callGemini } from '../lib/gemini.js';

const careersRoute = new Hono();

function extractJson(text) {
  if (!text) return null;
  try {
    // Remove markdown fences if present
    const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    return JSON.parse(cleaned);
  } catch {
    return null;
  }
}

function parseCareer(career) {
  return {
    ...career,
    extensions: career.extensions ? JSON.parse(career.extensions) : [],
    skills: career.skills ? JSON.parse(career.skills) : [],
    aiLearning: career.aiLearning ? JSON.parse(career.aiLearning) : [],
    roles: career.roles ? JSON.parse(career.roles) : [],
  };
}

// Get all careers (public)
careersRoute.get('/', async (c) => {
  const allCareers = await db.select().from(careers);
  
  return c.json({
    success: true,
    data: { careers: allCareers.map(parseCareer) },
  });
});

// GET /api/v1/careers/suggest?q=cloud&goal=switch-career&experience=Beginner
// Returns AI-generated + catalog career suggestions.
careersRoute.get('/suggest', async (c) => {
  const q = c.req.query('q')?.trim() || '';
  const goal = c.req.query('goal')?.trim() || '';
  const experience = c.req.query('experience')?.trim() || '';

  if (!q || q.length < 2) {
    return c.json({ success: true, data: { suggestions: [] } });
  }

  const queryLower = q.toLowerCase();

  // Search local careers catalog for partial matches
  const allCareers = await db.select().from(careers);
  const localMatches = allCareers
    .filter((career) => {
      const titleMatch = career.title?.toLowerCase().includes(queryLower);
      const categoryMatch = career.category?.toLowerCase().includes(queryLower);
      let skillMatch = false;
      try {
        const skills = career.skills ? JSON.parse(career.skills) : [];
        skillMatch = skills.some((skill) => String(skill).toLowerCase().includes(queryLower));
      } catch {
        skillMatch = false;
      }
      return titleMatch || categoryMatch || skillMatch;
    })
    .slice(0, 5)
    .map((career) => ({
      title: career.title,
      category: career.category,
      reason: `Popular ${career.category.toLowerCase()} path with roles like ${career.roles ? JSON.parse(career.roles).slice(0, 2).join(', ') : 'various opportunities'}.`,
      source: 'catalog',
    }));

  // Ask Gemini for additional real-world suggestions
  let aiSuggestions = [];
  try {
    const systemPrompt = `You are Cohortia, a career guidance assistant. Suggest real, well-known career paths and courses that match the user's partial input. Return ONLY a valid JSON array of objects. Each object must have: title (string), category (string), reason (one sentence). Do not include markdown fences or any text outside the JSON array.`;
    const userPrompt = `Suggest 5 to 8 real careers or courses matching "${q}".
User goal: ${goal || 'not specified'}.
Experience level: ${experience || 'not specified'}.

Include well-known roles and fields such as Product Management, UX/UI Design, Frontend Development, Backend Development, Data Analytics, Data Science, Cloud Engineering, Cybersecurity, Digital Marketing, Project Management, AI/ML Engineering, Business Analysis, etc.
Only include realistic, recognized career paths. Return JSON array only.`;

    const result = await callGemini({ systemPrompt, userPrompt, maxTokens: 1200, jsonMode: true });
    if (result.success) {
      const parsed = extractJson(result.text);
      if (Array.isArray(parsed)) {
        aiSuggestions = parsed
          .filter((item) => item && typeof item.title === 'string' && item.title.trim())
          .map((item) => ({
            title: item.title.trim(),
            category: item.category || 'Career',
            reason: item.reason || `A recognized path related to ${q}.`,
            source: 'ai',
          }));
      }
    } else {
      console.error('Gemini career suggestion failed:', result.error);
    }
  } catch (error) {
    console.error('Career suggestion AI error:', error);
  }

  // Merge, deduplicate by title, prefer catalog entries
  const merged = [...localMatches, ...aiSuggestions];
  const seen = new Set();
  const suggestions = merged
    .filter((item) => {
      const key = item.title.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 8);

  return c.json({ success: true, data: { suggestions } });
});

// GET /api/v1/careers/skills?career=Cloud%20Engineering
// Returns existing skills and skills-to-gain for a chosen career path.
careersRoute.get('/skills', async (c) => {
  const careerName = c.req.query('career')?.trim() || '';

  if (!careerName || careerName.length < 2) {
    return c.json({ success: true, data: { existingSkills: [], skillsToGain: [] } });
  }

  const queryLower = careerName.toLowerCase();

  // Try to find a matching career in the catalog
  const allCareers = await db.select().from(careers);
  const matchedCareer = allCareers.find((career) =>
    career.title?.toLowerCase() === queryLower ||
    career.title?.toLowerCase().includes(queryLower) ||
    queryLower.includes(career.title?.toLowerCase())
  );

  let catalogSkills = [];
  try {
    catalogSkills = matchedCareer?.skills ? JSON.parse(matchedCareer.skills) : [];
  } catch {
    catalogSkills = [];
  }

  // Ask Gemini to split skills into "already have" vs "will gain"
  let existingSkills = [];
  let skillsToGain = [];

  try {
    const systemPrompt = `You are Cohortia, a career guidance assistant. For the given career, return ONLY a valid JSON object with two arrays: existingSkills (transferable or common prerequisite skills someone might already have) and skillsToGain (core skills the roadmap will teach). Keep each skill to 1-3 words. Do not include markdown fences.`;
    const userPrompt = `Career: ${careerName}\n\nReturn JSON only:\n{\n  "existingSkills": ["...", "..."],\n  "skillsToGain": ["...", "..."]\n}`;

    const result = await callGemini({ systemPrompt, userPrompt, maxTokens: 800, jsonMode: true });
    if (result.success) {
      const parsed = extractJson(result.text);
      if (parsed && typeof parsed === 'object') {
        existingSkills = Array.isArray(parsed.existingSkills) ? parsed.existingSkills.filter(Boolean) : [];
        skillsToGain = Array.isArray(parsed.skillsToGain) ? parsed.skillsToGain.filter(Boolean) : [];
      }
    } else {
      console.error('Gemini career skills failed:', result.error);
    }
  } catch (error) {
    console.error('Career skills AI error:', error);
  }

  // If AI didn't return enough, supplement from catalog
  if (skillsToGain.length === 0 && catalogSkills.length > 0) {
    skillsToGain = catalogSkills;
  }

  // Ensure existingSkills has some reasonable defaults if empty
  if (existingSkills.length === 0) {
    existingSkills = ['Communication', 'Problem Solving', 'Time Management', 'Research'];
  }

  // De-duplicate and cap
  const dedupe = (arr) => [...new Set(arr.map((s) => s.trim()).filter(Boolean))];

  return c.json({
    success: true,
    data: {
      existingSkills: dedupe(existingSkills).slice(0, 8),
      skillsToGain: dedupe(skillsToGain).slice(0, 12),
    },
  });
});

// Get career by ID (public) — must be defined after static routes like /skills
careersRoute.get('/:id', async (c) => {
  const id = c.req.param('id');

  const career = await db
    .select()
    .from(careers)
    .where(eq(careers.id, id))
    .limit(1);

  if (career.length === 0) {
    return c.json({ success: false, error: 'Career not found' }, 404);
  }

  return c.json({ success: true, data: { career: parseCareer(career[0]) } });
});

export default careersRoute;
