import {Hono} from 'hono';
import fs from 'node:fs/promises';
import path from 'node:path';
import {db} from '../db/index.js';
import {catalogCourses, catalogCourseSubcategories, catalogCourseCareers, tracks, lessons} from '../db/schema.js';
import {eq, inArray} from 'drizzle-orm';
import {generateCompleteJson} from '../lib/gemini.js';

const catalogCoursesRoute = new Hono();
const recommendationLimits = {
  'Pivot into a new career': {beginner: {options: 4, choose: 2}, intermediate: {options: 3, choose: 2}, advanced: {options: 2, choose: 1}},
  'Up-skill in my current role': {beginner: {options: 3, choose: 2}, intermediate: {options: 2, choose: 1}, advanced: {options: 2, choose: 1}},
  'Lead & Specialize': {intermediate: {options: 2, choose: 1}, advanced: {options: 2, choose: 1}},
};
const recommendationResponseSchema = {
  type: 'object',
  properties: {
    beginner: { type: 'array', items: { type: 'string' } },
    intermediate: { type: 'array', items: { type: 'string' } },
    advanced: { type: 'array', items: { type: 'string' } },
  },
  required: ['beginner', 'intermediate', 'advanced'],
};

const normalizeCareerId = (value) => String(value || '').trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const bundledCourseDetailsPath = path.resolve(import.meta.dirname, '..', 'data', 'course-details.json');
let bundledCourseDetails;

async function loadBundledCourseDetails() {
  if (bundledCourseDetails !== undefined) return bundledCourseDetails;
  try {
    bundledCourseDetails = JSON.parse(await fs.readFile(bundledCourseDetailsPath, 'utf8'));
  } catch {
    bundledCourseDetails = {};
  }
  return bundledCourseDetails;
}

async function findSyllabusFile(courseId) {
  const roots = [
    path.resolve(import.meta.dirname, '..', '..', '..', '..', 'docs'),
    path.resolve(import.meta.dirname, '..', '..', '..', 'docs'),
    path.resolve(process.cwd(), '..', 'docs'),
    path.resolve(process.cwd(), '..', '..', 'docs'),
  ];
  const visit = async (directory) => {
    let entries;
    try {
      entries = await fs.readdir(directory, {withFileTypes: true});
    } catch {
      return null;
    }
    for (const entry of entries) {
      const filePath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        const match = await visit(filePath);
        if (match) return match;
      } else if (entry.isFile() && entry.name.toLowerCase() === `${courseId.toLowerCase()}.md`) {
        return filePath;
      }
    }
    return null;
  };
  for (const root of roots) {
    const match = await visit(root);
    if (match) return match;
  }
  return null;
}

function extractCourseDetails(markdown) {
  const overviewBlock = markdown.match(/## Course Overview\s*\n([\s\S]*?)(?=\n##\s|$)/i)?.[1] || '';
  const cleanText = (value) => String(value || '')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/__([^_]+)__/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
  const listItems = (value) => String(value || '').split(/\r?\n/)
    .map((line) => cleanText(line.replace(/^\s*(?:[*-]|\d+[.)])\s+/, '')))
    .filter(Boolean);
  const overview = formatOverview(overviewBlock.split(/\n\s*\n/).map(cleanText).find(Boolean) || '');
  const outcomesBlock = overviewBlock.match(/Upon (?:successful )?completion of this [^,\n]+, you will be able to:\s*\n([\s\S]*?)(?=\n\s*\n|$)/i)?.[1] || '';
  const outcomes = listItems(outcomesBlock);
  const syllabusBlock = markdown.match(/## Syllabus Structure\s*\n([\s\S]*?)(?=\n---|\n##\s|$)/i)?.[1] || '';
  const syllabus = syllabusBlock.split(/\r?\n/).filter((line) => /^\|\s*\d+\s*\|/.test(line)).map((line) => {
    const cells = line.split('|').map((cell) => cell.trim());
    return {module: cleanText(cells[1]), theme: cleanText(cells[2]), chapters: cleanText(cells[3])};
  });
  const keyConcepts = [...markdown.matchAll(/#### Key concepts\s*\n([\s\S]*?)(?=\n####\s|\n###\s|\n##\s|$)/gi)]
    .flatMap((match) => listItems(match[1]))
    .slice(0, 12);
  const skills = cleanText(markdown.match(/^skills:\s*(.+)$/im)?.[1] || '')
    .split(/,\s*/)
    .map(cleanText)
    .filter(Boolean);
  return {overview, outcomes, syllabus, keyConcepts, skills};
}

function parseTrackSyllabus(value) {
  return String(value || '').split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => /^\|\s*\d+\s*\|/.test(line))
    .map((line) => {
      const cells = line.split('|').map((cell) => cell.trim());
      return {
        module: cleanText(cells[1]),
        theme: cleanText(cells[2]),
        chapters: cleanText(cells[3]),
      };
    });
}

function parseOutcomes(value) {
  const match = String(value || '').match(/Upon (?:successful )?completion of this [^,]+, you will be able to:\s*([\s\S]*)$/i);
  if (!match) return [];
  return match[1].split(/\s*\*\s+/)
    .map(cleanText)
    .filter(Boolean);
}

function cleanText(value) {
  return String(value || '')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/__([^_]+)__/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/(^|\s)\*(?=\s|$)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function formatOverview(value) {
  const source = String(value || '').replace(/\r/g, '').trim();
  const withoutOutcomes = source.split(/\s+Upon (?:successful )?completion of this [^,]+, you will be able to:/i)[0].trim();
  const normalized = cleanText(withoutOutcomes);
  const sentences = normalized.match(/[^.!?]+[.!?]+|[^.!?]+$/g)?.map((sentence) => sentence.trim()).filter(Boolean) || [];
  if (sentences.length <= 1) return normalized;

  const paragraphs = [];
  const paragraphSize = Math.ceil(sentences.length / 2);
  for (let index = 0; index < sentences.length; index += paragraphSize) {
    paragraphs.push(sentences.slice(index, index + paragraphSize).join(' '));
  }
  return paragraphs.slice(0, 2).join('\n\n');
}

async function getTrackDetails(courseId) {
  const track = await db.select().from(tracks).where(eq(tracks.id, courseId)).limit(1);
  if (track.length === 0) return null;

  const lessonRows = await db.select({metadata: lessons.metadata})
    .from(lessons)
    .where(eq(lessons.trackId, courseId));
  const keyConcepts = [];
  const outcomes = [];
  for (const lesson of lessonRows) {
    try {
      const metadata = JSON.parse(lesson.metadata || '{}');
      const values = Array.isArray(metadata.keyConcepts) ? metadata.keyConcepts : metadata.keyConcepts ? [metadata.keyConcepts] : [];
      for (const value of values) {
        const items = String(value).split(/\r?\n/);
        for (const item of items) {
          const text = cleanText(item.replace(/^\s*(?:[*-]|\d+[.)])\s+/, ''));
          if (text && !keyConcepts.includes(text)) keyConcepts.push(text);
        }
      }
    } catch {
      // Ignore malformed legacy lesson metadata.
    }
  }

  return {
    overview: formatOverview(track[0].overview),
    outcomes: parseOutcomes(track[0].overview),
    syllabus: parseTrackSyllabus(track[0].syllabus),
    keyConcepts: keyConcepts.slice(0, 12),
    skills: (() => {
      try { return JSON.parse(track[0].skills || '[]'); } catch { return []; }
    })(),
  };
}

catalogCoursesRoute.post('/recommend', async (c) => {
  const body = await c.req.json();
  const careerId = normalizeCareerId(body.selectedCareerId);
  const limits = recommendationLimits[body.careerGoal];
  const learnerStage = String(body.learnerStage || '').toLowerCase();

  if (!limits || !Object.keys(limits).includes(learnerStage) || !careerId) {
    return c.json({success: false, error: 'Career goal, career, and learner stage are required'}, 400);
  }

  const links = await db.select({courseId: catalogCourseCareers.courseId})
    .from(catalogCourseCareers)
    .where(eq(catalogCourseCareers.careerId, careerId));
  const linkedIds = links.map((link) => link.courseId);
  const linkedCourses = linkedIds.length
    ? await db.select().from(catalogCourses).where(inArray(catalogCourses.id, linkedIds))
    : [];
  const levelCourses = linkedCourses.filter((course) => Object.prototype.hasOwnProperty.call(limits, String(course.level || '').toLowerCase()));
  const candidateIds = levelCourses.map((course) => course.id);
  const lessonRows = candidateIds.length
    ? await db.select({ trackId: lessons.trackId }).from(lessons).where(inArray(lessons.trackId, candidateIds))
    : [];
  const coursesWithLessons = new Set(lessonRows.map((lesson) => lesson.trackId));
  const candidateCourses = levelCourses.filter((course) => coursesWithLessons.has(course.id));

  if (!candidateCourses.length) {
    return c.json({success: false, error: 'No courses with an available learning curriculum are linked to this career'}, 404);
  }

  const insufficientLevels = Object.entries(limits)
    .map(([level, quota]) => ({
      level,
      required: quota.options,
      available: candidateCourses.filter((course) => String(course.level || '').toLowerCase() === level).length,
    }))
    .filter((item) => item.available < item.required);
  if (insufficientLevels.length) {
    return c.json({
      success: false,
      error: 'There are not enough courses with learning content for this career and roadmap goal.',
      details: { levels: insufficientLevels },
    }, 409);
  }

  const metadata = candidateCourses.map((course) => ({
    id: course.id,
    title: course.title,
    level: String(course.level || '').toLowerCase(),
    category: course.category,
    subcategory: course.subcategory,
    provider: course.provider,
    platform: course.platform,
    duration: course.duration,
    description: course.description,
    skills: course.skills,
    certification: course.certification,
  }));
  const prompt = `Rank the canonical catalog course IDs for a learner.
Goal: ${body.careerGoal}
Career ID: ${careerId}
Learner stage: ${learnerStage}

Canonical catalog metadata:
${JSON.stringify(metadata)}

Return ONLY JSON in this shape: {"beginner":["course-id"],"intermediate":["course-id"],"advanced":["course-id"]}.
Rank only IDs from the canonical metadata. Keep each level in sensible learning order. Do not invent IDs.`;
  let ranked = {};
  let rankingFailure = null;
  try {
    const result = await generateCompleteJson({
      systemPrompt: 'You are Cohortia curriculum selection AI. Use only the supplied canonical catalog records.',
      userPrompt: prompt,
      maxTokens: 1800,
      maxContinuations: 1,
      responseSchema: recommendationResponseSchema,
    });
    if (result.success && result.data && typeof result.data === 'object') {
      ranked = result.data;
    } else {
      rankingFailure = result.error || 'AI did not return a usable ranking.';
      console.error('Course recommendation AI ranking failed:', rankingFailure);
    }
  } catch (error) {
    rankingFailure = error instanceof Error ? error.message : 'Unknown AI ranking error';
    console.error('Course recommendation AI ranking failed:', error);
  }

  const byId = new Map(candidateCourses.map((course) => [course.id, course]));
  const options = {};
  let usedAI = false;
  let usedCatalogOrder = false;
  for (const [level, quota] of Object.entries(limits)) {
    const rankedIds = Array.isArray(ranked[level]) ? ranked[level] : [];
    const validRanked = rankedIds.filter((id, index) => typeof id === 'string' && byId.get(id)?.level?.toLowerCase() === level && rankedIds.indexOf(id) === index);
    const fallbackIds = candidateCourses
      .filter((course) => String(course.level || '').toLowerCase() === level)
      .sort((left, right) => left.title.localeCompare(right.title))
      .map((course) => course.id);
    usedAI ||= validRanked.length > 0;
    usedCatalogOrder ||= validRanked.length < quota.options;
    const ids = [...validRanked, ...fallbackIds.filter((id) => !validRanked.includes(id))].slice(0, quota.options);
    options[level] = ids.map((id, index) => ({...byId.get(id), recommendationRank: index + 1}));
  }

  const rankingMethod = usedAI && usedCatalogOrder ? 'mixed' : usedAI ? 'ai' : 'catalog-order';
  return c.json({
    success: true,
    data: {
      careerId,
      goal: body.careerGoal,
      learnerStage,
      courses: options,
      rankingMethod,
      rankingNotice: rankingFailure
        ? 'AI ranking was unavailable. Courses are shown in catalog order where needed.'
        : null,
    },
  });
});

catalogCoursesRoute.get('/:id/details', async (c) => {
  const courseId = c.req.param('id');
  const course = await db.select().from(catalogCourses).where(eq(catalogCourses.id, courseId)).limit(1);
  if (course.length === 0) return c.json({success: false, error: 'Course not found'}, 404);

  const trackDetails = await getTrackDetails(courseId);
  if (trackDetails) {
    return c.json({success: true, data: {course: course[0], details: trackDetails}});
  }

  const syllabusFile = await findSyllabusFile(courseId);
  if (syllabusFile) {
    const markdown = await fs.readFile(syllabusFile, 'utf8');
    return c.json({success: true, data: {course: course[0], details: extractCourseDetails(markdown)}});
  }

  const details = (await loadBundledCourseDetails())[courseId] || {
    overview: '',
    outcomes: [],
    syllabus: [],
    keyConcepts: [],
    skills: [],
  };
  return c.json({success: true, data: {course: course[0], details}});
});

catalogCoursesRoute.get('/', async (c) => {
  const careerId = c.req.query('careerId');
  let courses;
  if (careerId) {
    const links = await db.select({courseId: catalogCourseCareers.courseId})
      .from(catalogCourseCareers)
      .where(eq(catalogCourseCareers.careerId, careerId));
    courses = links.length
      ? await db.select().from(catalogCourses).where(inArray(catalogCourses.id, links.map((link) => link.courseId)))
      : [];
  } else {
    courses = await db.select().from(catalogCourses);
  }
  return c.json({success: true, data: {courses}});
});

catalogCoursesRoute.get('/:id', async (c) => {
  const course = await db
    .select()
    .from(catalogCourses)
    .where(eq(catalogCourses.id, c.req.param('id')))
    .limit(1);

  if (course.length === 0) {
    return c.json({success: false, error: 'Course not found'}, 404);
  }

  const categories = await db
    .select({subcategory: catalogCourseSubcategories.subcategory})
    .from(catalogCourseSubcategories)
    .where(eq(catalogCourseSubcategories.courseId, c.req.param('id')));

  return c.json({
    success: true,
    data: {course: {...course[0], subcategories: categories.map((item) => item.subcategory)}},
  });
});

export default catalogCoursesRoute;
