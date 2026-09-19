import {Hono} from 'hono';
import fs from 'node:fs/promises';
import path from 'node:path';
import {db} from '../db/index.js';
import {catalogCourses, catalogCourseSubcategories, catalogCourseCareers, tracks, lessons} from '../db/schema.js';
import {eq, inArray} from 'drizzle-orm';

const catalogCoursesRoute = new Hono();
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
  const overview = overviewBlock.split(/\n\s*\n/).map(cleanText).find(Boolean) || '';
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
    .replace(/\s+/g, ' ')
    .trim();
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
    overview: track[0].overview || '',
    outcomes: parseOutcomes(track[0].overview),
    syllabus: parseTrackSyllabus(track[0].syllabus),
    keyConcepts: keyConcepts.slice(0, 12),
    skills: (() => {
      try { return JSON.parse(track[0].skills || '[]'); } catch { return []; }
    })(),
  };
}

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
