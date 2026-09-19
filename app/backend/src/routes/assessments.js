import { Hono } from 'hono';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from '../db/schema.js';
import { eq, and, sql, inArray } from 'drizzle-orm';

const router = new Hono();

// Helper to get DB instance
function getDb() {
  const dbUrl = process.env.DATABASE_URL || 'file:./cohortia.db';
  const client = createClient({ url: dbUrl, authToken: process.env.DATABASE_AUTH_TOKEN });
  return drizzle(client, { schema });
}

// GET /api/assessments - List all available assessment courses
router.get('/', async (c) => {
  try {
    const db = getDb();
    const courses = await db
      .selectDistinct({
        courseId: schema.csAssessments.courseId,
        courseTitle: schema.csAssessments.courseTitle,
        level: schema.csAssessments.level,
        category: schema.csAssessments.category,
        totalChapters: sql`count(distinct ${schema.csAssessments.chapter})`,
        totalQuestions: sql`sum(${schema.csAssessments.totalQuestions})`,
      })
      .from(schema.csAssessments)
      .groupBy(
        schema.csAssessments.courseId,
        schema.csAssessments.courseTitle,
        schema.csAssessments.level,
        schema.csAssessments.category
      )
      .orderBy(schema.csAssessments.courseTitle);

    return c.json({
      success: true,
      data: courses,
      count: courses.length,
    });
  } catch (error) {
    console.error('Error fetching assessments:', error);
    return c.json({ success: false, error: error.message }, 500);
  }
});

// GET /api/assessments/:courseId - Get all chapters for a course
router.get('/:courseId', async (c) => {
  try {
    const courseId = c.req.param('courseId');
    const db = getDb();

    const chapters = await db
      .select({
        id: schema.csAssessments.id,
        module: schema.csAssessments.module,
        chapter: schema.csAssessments.chapter,
        moduleTitle: schema.csAssessments.moduleTitle,
        chapterTitle: schema.csAssessments.chapterTitle,
        totalQuestions: schema.csAssessments.totalQuestions,
        questionsWithOptions: schema.csAssessments.questionsWithOptions,
        questionsWithCode: schema.csAssessments.questionsWithCode,
        caseStudyQuestions: schema.csAssessments.caseStudyQuestions,
      })
      .from(schema.csAssessments)
      .where(eq(schema.csAssessments.courseId, courseId))
      .orderBy(schema.csAssessments.module, schema.csAssessments.chapter);

    if (chapters.length === 0) {
      return c.json({ success: false, error: 'Course not found' }, 404);
    }

    // Get course metadata
    const course = await db
      .selectDistinct({
        courseTitle: schema.csAssessments.courseTitle,
        level: schema.csAssessments.level,
        category: schema.csAssessments.category,
      })
      .from(schema.csAssessments)
      .where(eq(schema.csAssessments.courseId, courseId))
      .limit(1);

    return c.json({
      success: true,
      course: course[0],
      chapters,
      totalChapters: chapters.length,
      totalQuestions: chapters.reduce((sum, ch) => sum + (ch.totalQuestions || 0), 0),
    });
  } catch (error) {
    console.error('Error fetching course chapters:', error);
    return c.json({ success: false, error: error.message }, 500);
  }
});

// GET /api/assessments/:courseId/:module/:chapter - Get questions for a specific chapter
router.get('/:courseId/:module/:chapter', async (c) => {
  try {
    const { courseId, module: moduleStr, chapter: chapterStr } = c.req.param();
    const module = parseInt(moduleStr);
    const chapter = parseInt(chapterStr);
    const db = getDb();

    // Get assessment metadata
    const assessment = await db
      .select({
        id: schema.csAssessments.id,
        courseTitle: schema.csAssessments.courseTitle,
        moduleTitle: schema.csAssessments.moduleTitle,
        chapterTitle: schema.csAssessments.chapterTitle,
        level: schema.csAssessments.level,
        totalQuestions: schema.csAssessments.totalQuestions,
        assessmentData: schema.csAssessments.assessmentData,
      })
      .from(schema.csAssessments)
      .where(
        and(
          eq(schema.csAssessments.courseId, courseId),
          eq(schema.csAssessments.module, module),
          eq(schema.csAssessments.chapter, chapter)
        )
      )
      .limit(1);

    if (assessment.length === 0) {
      return c.json({ success: false, error: 'Chapter assessment not found' }, 404);
    }

    // Get individual questions
    const questions = await db
      .select()
      .from(schema.csAssessmentQuestions)
      .where(eq(schema.csAssessmentQuestions.assessmentId, assessment[0].id))
      .orderBy(schema.csAssessmentQuestions.questionNumber);

    const questionsFormatted = questions.map((q) => ({
      id: q.id,
      type: q.type,
      question: q.question,
      explanation: q.explanation,
      options: q.options ? JSON.parse(q.options) : null,
      correctOption: q.correctOption,
      language: q.language,
      code: q.code,
      expectedOutput: q.expectedOutput,
    }));

    return c.json({
      success: true,
      assessment: {
        courseTitle: assessment[0].courseTitle,
        module,
        chapter,
        moduleTitle: assessment[0].moduleTitle,
        chapterTitle: assessment[0].chapterTitle,
        level: assessment[0].level,
        totalQuestions: assessment[0].totalQuestions,
      },
      questions: questionsFormatted,
    });
  } catch (error) {
    console.error('Error fetching chapter questions:', error);
    return c.json({ success: false, error: error.message }, 500);
  }
});

// GET /api/assessments/quiz/random - Get random questions for a quiz
router.get('/quiz/random', async (c) => {
  try {
    const db = getDb();
    const count = parseInt(c.req.query('count') || '10');
    const type = c.req.query('type'); // multiple-choice, case-study, or undefined for all
    const level = c.req.query('level'); // beginner, intermediate, advanced, or undefined for all

    let query = db.select().from(schema.csAssessmentQuestions);

    if (type) {
      query = query.where(eq(schema.csAssessmentQuestions.type, type));
    }

    const allQuestions = await query.limit(10000); // Get enough to sample from

    // Filter by level if specified
    let filtered = allQuestions;
    if (level) {
      // We need to join with assessments to get level info
      const assessmentIds = await db
        .select({ id: schema.csAssessments.id })
        .from(schema.csAssessments)
        .where(eq(schema.csAssessments.level, level));

      const ids = assessmentIds.map((a) => a.id);
      filtered = allQuestions.filter((q) => ids.includes(q.assessmentId));
    }

    // Randomly select questions
    const selected = filtered.sort(() => Math.random() - 0.5).slice(0, count);

    const questionsFormatted = selected.map((q) => ({
      id: q.id,
      type: q.type,
      question: q.question,
      explanation: q.explanation,
      options: q.options ? JSON.parse(q.options) : null,
      correctOption: q.correctOption,
      language: q.language,
      code: q.code,
      expectedOutput: q.expectedOutput,
    }));

    return c.json({
      success: true,
      questions: questionsFormatted,
      count: questionsFormatted.length,
      filters: { type, level, requested: count },
    });
  } catch (error) {
    console.error('Error fetching random questions:', error);
    return c.json({ success: false, error: error.message }, 500);
  }
});

// GET /api/assessments/category/:category - Get all courses in a category
router.get('/category/:category', async (c) => {
  try {
    const category = c.req.param('category').replace(/-/g, ' ');
    const db = getDb();

    const courses = await db
      .selectDistinct({
        courseId: schema.csAssessments.courseId,
        courseTitle: schema.csAssessments.courseTitle,
        level: schema.csAssessments.level,
        totalQuestions: sql`sum(${schema.csAssessments.totalQuestions})`,
      })
      .from(schema.csAssessments)
      .where(sql`${schema.csAssessments.category} = ${category}`)
      .groupBy(schema.csAssessments.courseId, schema.csAssessments.courseTitle, schema.csAssessments.level)
      .orderBy(schema.csAssessments.courseTitle);

    return c.json({
      success: true,
      category,
      courses,
      count: courses.length,
    });
  } catch (error) {
    console.error('Error fetching category courses:', error);
    return c.json({ success: false, error: error.message }, 500);
  }
});

// GET /api/assessments/stats - Get overall statistics
router.get('/stats/overview', async (c) => {
  try {
    const db = getDb();

    const totalAssessments = await db.select({ count: sql`count(*)` }).from(schema.csAssessments);

    const totalQuestions = await db
      .select({ count: sql`count(*)` })
      .from(schema.csAssessmentQuestions);

    const byLevel = await db
      .selectDistinct({
        level: schema.csAssessments.level,
        count: sql`count(distinct ${schema.csAssessments.id})`,
        questions: sql`sum(${schema.csAssessments.totalQuestions})`,
      })
      .from(schema.csAssessments)
      .groupBy(schema.csAssessments.level);

    const byType = await db
      .selectDistinct({
        type: schema.csAssessmentQuestions.type,
        count: sql`count(*)`,
      })
      .from(schema.csAssessmentQuestions)
      .groupBy(schema.csAssessmentQuestions.type);

    return c.json({
      success: true,
      stats: {
        totalAssessments: totalAssessments[0]?.count || 0,
        totalQuestions: totalQuestions[0]?.count || 0,
        byLevel: byLevel.map((row) => ({
          level: row.level,
          assessments: row.count,
          questions: row.questions,
        })),
        byType: byType.map((row) => ({
          type: row.type,
          count: row.count,
        })),
      },
    });
  } catch (error) {
    console.error('Error fetching statistics:', error);
    return c.json({ success: false, error: error.message }, 500);
  }
});

// GET /api/assessments/filter/by-level-category - Get courses filtered by level and category
router.get('/filter/by-level-category', async (c) => {
  try {
    const db = getDb();
    const level = c.req.query('level'); // beginner, intermediate, advanced
    const category = c.req.query('category'); // e.g., cloud computing, cybersecurity
    const limit = parseInt(c.req.query('limit') || '100');
    const offset = parseInt(c.req.query('offset') || '0');

    let query = db.select({
      courseId: schema.csAssessments.courseId,
      courseTitle: schema.csAssessments.courseTitle,
      level: schema.csAssessments.level,
      category: schema.csAssessments.category,
      totalQuestions: sql`sum(${schema.csAssessments.totalQuestions})`,
      totalChapters: sql`count(distinct ${schema.csAssessments.chapter})`,
    })
      .from(schema.csAssessments);

    const conditions = [];
    if (level) {
      conditions.push(eq(schema.csAssessments.level, level));
    }
    if (category) {
      conditions.push(eq(schema.csAssessments.category, category));
    }

    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    const courses = await query
      .groupBy(
        schema.csAssessments.courseId,
        schema.csAssessments.courseTitle,
        schema.csAssessments.level,
        schema.csAssessments.category
      )
      .orderBy(schema.csAssessments.courseTitle)
      .limit(limit)
      .offset(offset);

    return c.json({
      success: true,
      filters: { level, category },
      courses,
      count: courses.length,
      offset,
      limit,
    });
  } catch (error) {
    console.error('Error fetching filtered courses:', error);
    return c.json({ success: false, error: error.message }, 500);
  }
});

// GET /api/assessments/categories - Get all unique categories
router.get('/filter/categories', async (c) => {
  try {
    const db = getDb();

    const categories = await db
      .selectDistinct({
        category: schema.csAssessments.category,
      })
      .from(schema.csAssessments)
      .orderBy(schema.csAssessments.category);

    return c.json({
      success: true,
      categories: categories.map((c) => c.category),
      count: categories.length,
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return c.json({ success: false, error: error.message }, 500);
  }
});

// GET /api/assessments/levels - Get all unique levels
router.get('/filter/levels', async (c) => {
  try {
    const db = getDb();

    const levels = await db
      .selectDistinct({
        level: schema.csAssessments.level,
      })
      .from(schema.csAssessments)
      .orderBy(schema.csAssessments.level);

    return c.json({
      success: true,
      levels: levels.map((l) => l.level),
      count: levels.length,
    });
  } catch (error) {
    console.error('Error fetching levels:', error);
    return c.json({ success: false, error: error.message }, 500);
  }
});

export default router;
