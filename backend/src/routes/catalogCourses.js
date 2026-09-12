import {Hono} from 'hono';
import fs from 'node:fs/promises';
import path from 'node:path';
import {db} from '../db/index.js';
import {catalogCourses, catalogCourseSubcategories, catalogCourseCareers} from '../db/schema.js';
import {eq, inArray} from 'drizzle-orm';

const catalogCoursesRoute = new Hono();

async function findSyllabusFile(courseId) {
  const root = path.resolve(process.cwd(), '..', '..', 'docs');
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
  return visit(root);
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
  const outcomesBlock = overviewBlock.match(/Upon (?:successful )?completion of this course, you will be able to:\s*\n([\s\S]*?)(?=\n\s*\n|$)/i)?.[1] || '';
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

catalogCoursesRoute.get('/:id/details', async (c) => {
  const courseId = c.req.param('id');
  const course = await db.select().from(catalogCourses).where(eq(catalogCourses.id, courseId)).limit(1);
  if (course.length === 0) return c.json({success: false, error: 'Course not found'}, 404);

  const syllabusFile = await findSyllabusFile(courseId);
  const markdown = syllabusFile ? await fs.readFile(syllabusFile, 'utf8') : '';
  return c.json({success: true, data: {course: course[0], details: extractCourseDetails(markdown)}});
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
