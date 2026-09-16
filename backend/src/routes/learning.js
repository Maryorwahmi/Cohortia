import { Hono } from 'hono';
import { db } from '../db/index.js';
import { lessons, progress, learningBoardCourses, learningBoardChapters, learningBoardScreens, learningBoardProgress, learningBoardPracticals, learningBoardPracticalFiles, learningBoardPracticalTasks, learningBoardPracticalTests, csAssessments, csAssessmentQuestions, studentPracticalAttempts, studentPracticalProgress, userActivityLog } from '../db/schema.js';
import { eq, and, inArray, desc } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import { sql } from 'drizzle-orm';
import { authMiddleware } from '../middleware/auth.js';
import { logActivity } from '../lib/activity.js';
import { evaluateAssessmentAnswer } from '../lib/deterministicAssessment.js';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';

const learning = new Hono();

const MAX_SOURCE_BYTES = 128 * 1024;
const MAX_OUTPUT_BYTES = 64 * 1024;

function runProcess(command, args, options = {}) {
  const { cwd, input = '', timeoutMs = 15000 } = options;
  return new Promise((resolve) => {
    const child = spawn(command, args, { cwd, shell: false, windowsHide: true });
    let stdout = '';
    let stderr = '';
    let settled = false;
    const finish = (result) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve(result);
    };
    const timer = setTimeout(() => {
      child.kill();
      finish({ ok: false, timedOut: true, exitCode: null, stdout, stderr: `${stderr}\nProcess timed out.`.trim() });
    }, timeoutMs);

    child.stdout.on('data', (chunk) => {
      stdout = `${stdout}${chunk}`.slice(0, MAX_OUTPUT_BYTES);
    });
    child.stderr.on('data', (chunk) => {
      stderr = `${stderr}${chunk}`.slice(0, MAX_OUTPUT_BYTES);
    });
    child.on('error', (error) => finish({ ok: false, unavailable: error.code === 'ENOENT', exitCode: null, stdout, stderr: error.message }));
    child.on('close', (exitCode) => finish({ ok: exitCode === 0, exitCode, stdout, stderr }));
    child.stdin.end(input);
  });
}

function safeWorkspacePath(workspace, relativePath) {
  const normalized = String(relativePath || '').replaceAll('\\', '/');
  if (!normalized || normalized.startsWith('/') || normalized.includes('..')) return null;
  const target = path.resolve(workspace, normalized);
  return target.startsWith(`${path.resolve(workspace)}${path.sep}`) ? target : null;
}

async function executeNativeC({ files, activeFilePath, stdin = '', language = 'C' }) {
  if (!['c', 'cpp', 'c++'].includes(String(language).toLowerCase())) {
    return { ok: false, error: `Native ${language} execution is not supported yet.` };
  }

  const entries = Object.entries(files || {});
  if (!entries.length || entries.length > 20) return { ok: false, error: 'A practical must contain between 1 and 20 files.' };
  if (entries.some(([, content]) => typeof content !== 'string' || Buffer.byteLength(content, 'utf8') > MAX_SOURCE_BYTES)) {
    return { ok: false, error: 'A source file is too large to execute.' };
  }

  const workspace = await mkdtemp(path.join(tmpdir(), 'cohortia-c-'));
  try {
    for (const [relativePath, content] of entries) {
      const target = safeWorkspacePath(workspace, relativePath);
      if (!target) return { ok: false, error: 'Invalid workspace file path.' };
      await writeFile(target, content, 'utf8');
    }

    const sourcePath = safeWorkspacePath(workspace, activeFilePath || entries[0][0]);
    if (!sourcePath) return { ok: false, error: 'The active source file is invalid.' };
    const outputPath = path.join(workspace, process.platform === 'win32' ? 'program.exe' : 'program');
    const compilerNames = process.env.COHORTIA_C_COMPILER
      ? [process.env.COHORTIA_C_COMPILER]
      : process.platform === 'win32'
        ? ['C:\\Program Files\\LLVM\\bin\\clang.exe', 'clang', 'gcc', 'cc']
        : ['clang', 'gcc', 'cc'];
    let compile = null;
    for (const compiler of compilerNames) {
      compile = await runProcess(compiler, [sourcePath, '-std=c17', '-O0', '-Wall', '-Wextra', '-o', outputPath], { cwd: workspace, timeoutMs: 15000 });
      if (!compile.unavailable) break;
    }
    if (!compile || compile.unavailable) {
      return { ok: false, compilerUnavailable: true, error: 'No C compiler is installed on the backend host. Install Clang or GCC, then restart the backend.' };
    }
    if (!compile.ok) return { ok: false, phase: 'compile', ...compile };

    const result = await runProcess(outputPath, [], { cwd: workspace, input: String(stdin).slice(0, 4096), timeoutMs: 5000 });
    return { ...result, phase: 'run', compiler: compile.command || compilerNames[0] };
  } finally {
    await rm(workspace, { recursive: true, force: true });
  }
}

function parseJson(value, fallback) {
  if (!value) return fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

function asObject(value) {
  return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
}

function sourceMetadataForPractical(practical) {
  return asObject(parseJson(practical.metadata, {}));
}

function courseFromPracticalRows(courseId, practicalRows) {
  const firstPractical = practicalRows[0];
  const metadata = sourceMetadataForPractical(firstPractical || {});
  const timestamps = practicalRows.map((practical) => practical.updatedAt || practical.createdAt).filter(Boolean);

  return {
    id: `practical-course-${courseId}`,
    courseId,
    course: metadata.course || courseId,
    courseLevel: metadata.courseLevel || null,
    description: null,
    totalModules: practicalRows.reduce((highest, practical) => Math.max(highest, Number(practical.module) || 0), 0),
    createdAt: firstPractical?.createdAt || new Date(0).toISOString(),
    updatedAt: timestamps.sort().at(-1) || firstPractical?.createdAt || new Date(0).toISOString(),
  };
}

function chapterFromPractical(practical) {
  const metadata = sourceMetadataForPractical(practical);
  return {
    id: `practical-chapter-${practical.courseId}-m${practical.module}-c${practical.chapter}`,
    courseId: practical.courseId,
    module: practical.module,
    chapter: practical.chapter,
    moduleTitle: metadata.moduleTitle || `Module ${practical.module}`,
    chapterTitle: metadata.chapterTitle || practical.title,
    presentationMode: 'practical_source',
    screensCount: 0,
    createdAt: practical.createdAt,
    updatedAt: practical.updatedAt,
    practicalId: practical.id,
    practicalCategory: practical.category,
    practicalStatus: 'source_only',
    source: 'practical',
  };
}

function mergePracticalChapters(chapterRows, practicalRows) {
  const chaptersByKey = new Map(
    chapterRows.map((chapter) => [`${chapter.module}/${chapter.chapter}`, chapter]),
  );

  for (const practical of practicalRows) {
    const key = `${practical.module}/${practical.chapter}`;
    if (!chaptersByKey.has(key)) chaptersByKey.set(key, chapterFromPractical(practical));
  }

  return Array.from(chaptersByKey.values()).sort((left, right) => (
    left.module - right.module || left.chapter - right.chapter
  ));
}

function assessmentQuestionFromData(value, questionNumber) {
  const assessment = parseJson(value, null);
  const questions = Array.isArray(assessment)
    ? assessment
    : Array.isArray(assessment?.questions)
      ? assessment.questions
      : [];
  return questions.find((question) => Number(question?.id) === questionNumber)
    || questions[questionNumber - 1]
    || null;
}

function stripPrivateAssessmentFields(value) {
  if (!value || typeof value !== 'object' || !Array.isArray(value.questions)) return value;

  return {
    ...value,
    questions: value.questions.map((question) => {
      if (!question || typeof question !== 'object') return question;
      const { referenceAnswer, ...publicQuestion } = question;
      return publicQuestion;
    }),
  };
}

await db.run(sql`
  CREATE TABLE IF NOT EXISTS learning_board_progress (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    course_id TEXT NOT NULL,
    lesson_id TEXT NOT NULL,
    module INTEGER NOT NULL,
    chapter INTEGER NOT NULL,
    explicit_complete INTEGER NOT NULL DEFAULT 0,
    watched INTEGER NOT NULL DEFAULT 0,
    assessment_passed INTEGER NOT NULL DEFAULT 0,
    score INTEGER,
    study_seconds INTEGER NOT NULL DEFAULT 0,
    notes TEXT,
    completed_at TEXT,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL,
    UNIQUE(user_id, course_id, module, chapter)
  )
`);

try {
  await db.run(sql`ALTER TABLE learning_board_chapters ADD COLUMN assessment_data TEXT`);
} catch {
  // The column already exists on databases imported after the assessment migration.
}

try {
  await db.run(sql`ALTER TABLE cs_assessment_questions ADD COLUMN reference_answer TEXT`);
} catch {
  // The column already exists on databases imported after the assessment-key migration.
}
await db.run(sql`
  UPDATE cs_assessment_questions
  SET reference_answer = explanation
  WHERE reference_answer IS NULL
    AND type IN ('case-study', 'code-challenge')
    AND explanation IS NOT NULL
    AND TRIM(explanation) <> ''
`);

// Get all lessons
learning.get('/lessons', async (c) => {
  const allLessons = await db.select().from(lessons);
  return c.json({ success: true, data: { lessons: allLessons } });
});

// Get lesson by ID
learning.get('/lessons/:id', async (c) => {
  const lessonId = c.req.param('id');
  
  const lesson = await db
    .select()
    .from(lessons)
    .where(eq(lessons.id, lessonId))
    .limit(1);

  if (lesson.length === 0) {
    return c.json({ success: false, error: 'Lesson not found' }, 404);
  }

  return c.json({ success: true, data: { lesson: lesson[0] } });
});

// Mark lesson as complete
learning.post('/lessons/:id/complete', async (c) => {
  const userId = c.get('userId');
  const lessonId = c.req.param('id');
  const now = new Date().toISOString();

  // Check if progress already exists
  const existing = await db
    .select()
    .from(progress)
    .where(and(eq(progress.userId, userId), eq(progress.lessonId, lessonId)))
    .limit(1);

  if (existing.length > 0) {
    // Update existing
    await db
      .update(progress)
      .set({ status: 'completed', completedAt: now, updatedAt: now })
      .where(eq(progress.id, existing[0].id));
    
    return c.json({ success: true, message: 'Lesson marked as complete' });
  }

  // Create new progress
  await db.insert(progress).values({
    id: uuidv4(),
    userId,
    lessonId,
    status: 'completed',
    score: null,
    completedAt: now,
    createdAt: now,
    updatedAt: now,
  });

  return c.json({ success: true, message: 'Lesson completed' });
});

// ===== Learning Board Endpoints =====

learning.post('/assessment/evaluate', authMiddleware, async (c) => {
  const body = await c.req.json().catch(() => ({}));
  const courseId = typeof body.courseId === 'string' ? body.courseId.trim() : '';
  const module = Number(body.module);
  const chapter = Number(body.chapter);
  const questionId = Number(body.questionId);
  const studentAnswer = typeof body.studentAnswer === 'string' ? body.studentAnswer.trim() : '';

  if (!courseId || !Number.isInteger(module) || module < 1 || !Number.isInteger(chapter) || chapter < 1
    || !Number.isInteger(questionId) || questionId < 1 || !studentAnswer) {
    return c.json({ success: false, error: 'Course, chapter, question, and answer are required.' }, 400);
  }

  const importedAssessment = await db
    .select({ assessmentData: csAssessments.assessmentData })
    .from(csAssessments)
    .where(and(
      eq(csAssessments.courseId, courseId),
      eq(csAssessments.module, module),
      eq(csAssessments.chapter, chapter),
    ))
    .orderBy(desc(csAssessments.updatedAt))
    .limit(1);

  let referenceQuestion = assessmentQuestionFromData(importedAssessment[0]?.assessmentData, questionId);

  if (!referenceQuestion) {
    const storedChapter = await db
      .select({ assessmentData: learningBoardChapters.assessmentData })
      .from(learningBoardChapters)
      .where(and(
        eq(learningBoardChapters.courseId, courseId),
        eq(learningBoardChapters.module, module),
        eq(learningBoardChapters.chapter, chapter),
      ))
      .limit(1);
    referenceQuestion = assessmentQuestionFromData(storedChapter[0]?.assessmentData, questionId);
  }

  if (!referenceQuestion) {
    return c.json({ success: false, error: 'Assessment question not found.' }, 404);
  }

  const questionType = String(referenceQuestion.type || 'case-study');
  if (!['case-study', 'code-output', 'code-challenge'].includes(questionType)) {
    return c.json({ success: false, error: 'Only written assessment answers can be evaluated.' }, 400);
  }

  const referenceAnswer = String(
    referenceQuestion.referenceAnswer
      || referenceQuestion.answer
      || referenceQuestion.expectedOutput
      || '',
  ).trim();
  const explanation = String(referenceQuestion.explanation || '').trim();
  const starterCode = String(referenceQuestion.code || '').trim();
  const language = String(referenceQuestion.language || '').trim();

  if (!referenceAnswer && !explanation && !starterCode) {
    return c.json({ success: false, error: 'This question does not have enough reference material to evaluate.' }, 422);
  }

  const evaluation = evaluateAssessmentAnswer({
    question: {
      ...referenceQuestion,
      type: questionType,
      referenceAnswer,
      explanation,
      code: starterCode,
      language,
    },
    studentAnswer,
  });

  return c.json({
    success: true,
    data: {
      isCorrect: evaluation.isCorrect,
      feedback: typeof evaluation.feedback === 'string' && evaluation.feedback.trim()
        ? evaluation.feedback.trim()
        : 'Review your response against the key idea in the lesson.',
      guidance: typeof evaluation.guidance === 'string' && evaluation.guidance.trim()
        ? evaluation.guidance.trim()
        : 'Revisit the lesson explanation and refine your answer.',
      keyPointsMissed: Array.isArray(evaluation.keyPointsMissed)
        ? evaluation.keyPointsMissed.filter((point) => typeof point === 'string').map((point) => point.trim()).filter(Boolean).slice(0, 5)
        : [],
    },
  });
});

// Get all learning board courses
learning.get('/boards', async (c) => {
  const [courseRows, practicalRows] = await Promise.all([
    db.select().from(learningBoardCourses),
    db.select().from(learningBoardPracticals),
  ]);
  const coursesById = new Map(courseRows.map((course) => [course.courseId, course]));
  const practicalsByCourse = new Map();

  for (const practical of practicalRows) {
    const rows = practicalsByCourse.get(practical.courseId) || [];
    rows.push(practical);
    practicalsByCourse.set(practical.courseId, rows);
  }

  for (const [courseId, rows] of practicalsByCourse) {
    const existingCourse = coursesById.get(courseId);
    if (existingCourse) {
      existingCourse.totalModules = Math.max(existingCourse.totalModules, ...rows.map((row) => row.module));
    } else {
      coursesById.set(courseId, courseFromPracticalRows(courseId, rows));
    }
  }

  const courses = Array.from(coursesById.values()).sort((left, right) => left.course.localeCompare(right.course));
  return c.json({ success: true, data: { courses } });
});

// Get learning board course by ID
learning.get('/boards/:courseId', async (c) => {
  const courseId = c.req.param('courseId');

  const [courseRows, chapterRows, practicalRows] = await Promise.all([
    db
      .select()
      .from(learningBoardCourses)
      .where(eq(learningBoardCourses.courseId, courseId))
      .limit(1),
    db
      .select()
      .from(learningBoardChapters)
      .where(eq(learningBoardChapters.courseId, courseId)),
    db
      .select()
      .from(learningBoardPracticals)
      .where(eq(learningBoardPracticals.courseId, courseId)),
  ]);

  if (courseRows.length === 0 && practicalRows.length === 0) {
    return c.json({ success: false, error: 'Course not found' }, 404);
  }

  const course = courseRows[0] || courseFromPracticalRows(courseId, practicalRows);
  if (courseRows[0] && practicalRows.length > 0) {
    course.totalModules = Math.max(course.totalModules, ...practicalRows.map((row) => row.module));
  }
  const chapters = mergePracticalChapters(chapterRows, practicalRows);
  const publicChapters = chapters.map(({ assessmentData, ...chapter }) => chapter);

  return c.json({ success: true, data: { course, chapters: publicChapters } });
});

// Get chapter by course ID, module, and chapter number
// Route format: /boards/:courseId/:module/:chapter
learning.get('/boards/:courseId/:module/:chapter', async (c) => {
  const courseId = c.req.param('courseId');
  const module = c.req.param('module');
  const chapter = c.req.param('chapter');
  const moduleNum = parseInt(module, 10);
  const chapterNum = parseInt(chapter, 10);

  const chapterData = await db
    .select()
    .from(learningBoardChapters)
    .where(
      and(
        eq(learningBoardChapters.courseId, courseId),
        eq(learningBoardChapters.module, moduleNum),
        eq(learningBoardChapters.chapter, chapterNum)
      )
    )
    .limit(1);

  const practicalRows = await db
    .select()
    .from(learningBoardPracticals)
    .where(and(
      eq(learningBoardPracticals.courseId, courseId),
      eq(learningBoardPracticals.module, moduleNum),
      eq(learningBoardPracticals.chapter, chapterNum)
    ))
    .limit(1);

  if (chapterData.length === 0 && practicalRows.length === 0) {
    return c.json({ success: false, error: 'Chapter not found' }, 404);
  }

  // Get all screens for this chapter
  const screens = await db
    .select()
    .from(learningBoardScreens)
    .where(
      and(
        eq(learningBoardScreens.courseId, courseId),
        eq(learningBoardScreens.module, moduleNum),
        eq(learningBoardScreens.chapter, chapterNum)
      )
    );

  // Parse manifest data if it exists
  const chapterRecord = chapterData[0] || null;
  const manifest = parseJson(chapterRecord?.manifestData, null);
  const storedAssessment = parseJson(chapterRecord?.assessmentData, null);
  const sourceMetadata = asObject(parseJson(practicalRows[0]?.metadata, {}));

  let databasePractical = null;
  if (practicalRows.length > 0) {
    const practicalRecord = practicalRows[0];
    const [fileRows, taskRows] = await Promise.all([
      db
        .select()
        .from(learningBoardPracticalFiles)
        .where(eq(learningBoardPracticalFiles.practicalId, practicalRecord.id)),
      db
        .select()
        .from(learningBoardPracticalTasks)
        .where(eq(learningBoardPracticalTasks.practicalId, practicalRecord.id))
        .orderBy(learningBoardPracticalTasks.taskOrder),
    ]);
    const testRows = taskRows.length > 0
      ? await db
        .select()
        .from(learningBoardPracticalTests)
        .where(inArray(learningBoardPracticalTests.taskId, taskRows.map((task) => task.id)))
        .orderBy(learningBoardPracticalTests.testOrder)
      : [];
    const metadata = asObject(parseJson(practicalRecord.metadata, {}));
    const generator = asObject(metadata.generator);
    const metadataFiles = Array.isArray(metadata.files)
      ? metadata.files.filter((file) => file && typeof file === 'object')
      : [];
    const metadataTasks = Array.isArray(metadata.tasks)
      ? metadata.tasks.filter((task) => task && typeof task === 'object')
      : [];
    const hasStructuredData = fileRows.length > 0 || taskRows.length > 0 || metadataFiles.length > 0 || metadataTasks.length > 0;
    const testsByTaskId = new Map();

    for (const test of testRows) {
      const testData = asObject(parseJson(test.testData, {}));
      const normalizedTest = {
        id: test.id,
        type: test.testType,
        expected: test.expected ?? testData.expected,
        explanation: testData.explanation,
        testData,
      };
      const taskTests = testsByTaskId.get(test.taskId) || [];
      taskTests.push(normalizedTest);
      testsByTaskId.set(test.taskId, taskTests);
    }

    const files = fileRows.length > 0
      ? fileRows.map((file) => ({ id: file.id, path: file.path, content: file.content }))
      : metadataFiles.map((file) => ({ path: file.path || 'workspace.txt', content: file.content || '' }));
    const tasks = taskRows.length > 0
      ? taskRows.map((task, index) => {
          const metadataTask = metadataTasks.find((candidate) => candidate.id === task.taskKey) || metadataTasks[index] || {};
          const requiredConcepts = parseJson(task.requiredConcepts, metadataTask.requiredConcepts || []);
          const hints = parseJson(task.hints, metadataTask.hints || []);
          return {
            id: metadataTask.id || task.taskKey || task.id,
            databaseId: task.id,
            title: metadataTask.title,
            instruction: task.instruction,
            narratorGuide: typeof metadataTask.narratorGuide === 'string' ? metadataTask.narratorGuide : (typeof task.narratorGuide === 'string' ? task.narratorGuide : null),
            teaching: metadataTask.teaching && typeof metadataTask.teaching === 'object' ? metadataTask.teaching : null,
            requiredConcepts: Array.isArray(requiredConcepts) ? requiredConcepts : [],
            hints: Array.isArray(hints) ? hints : [],
            tests: testsByTaskId.get(task.id) || (Array.isArray(metadataTask.tests) ? metadataTask.tests : []),
          };
        })
      : metadataTasks.map((task, index) => ({
          id: task.id || `task-${index + 1}`,
          title: task.title,
          instruction: task.instruction || '',
          narratorGuide: typeof task.narratorGuide === 'string' ? task.narratorGuide : null,
          teaching: task.teaching && typeof task.teaching === 'object' ? task.teaching : null,
          requiredConcepts: Array.isArray(task.requiredConcepts) ? task.requiredConcepts : [],
          hints: Array.isArray(task.hints) ? task.hints : [],
          tests: Array.isArray(task.tests) ? task.tests : [],
        }));

    databasePractical = {
      id: practicalRecord.id,
      courseId: practicalRecord.courseId,
      module: practicalRecord.module,
      chapter: practicalRecord.chapter,
      category: practicalRecord.category,
      categoryProfile: metadata.categoryProfile && typeof metadata.categoryProfile === 'object' ? metadata.categoryProfile : null,
      sourcePath: practicalRecord.sourcePath,
      sourceContent: practicalRecord.sourceContent,
      sourceKey: practicalRecord.sourceKey || metadata.sourceKey || null,
      sourceHash: practicalRecord.sourceHash || metadata.sourceHash || null,
      metadata,
      origin: hasStructuredData ? 'generated' : 'source',
      publicationStatus: hasStructuredData ? 'published' : 'source_only',
      source: 'database',
      status: hasStructuredData ? (practicalRecord.generationStatus || 'published') : 'source_only',
      version: practicalRecord.publishedVersion ?? metadata.version ?? metadata.practicalVersion ?? null,
      schemaVersion: practicalRecord.schemaVersion ?? metadata.schemaVersion ?? null,
      generatorVersion: practicalRecord.generatorVersion || metadata.generatorVersion || generator.generatorVersion || null,
      classifierVersion: practicalRecord.classifierVersion || metadata.classifierVersion || generator.classifierVersion || null,
      labType: practicalRecord.labType || metadata.labType || null,
      sourceActivity: metadata.sourceActivity || null,
      mode: practicalRecord.mode,
      language: practicalRecord.language || metadata.language || null,
      runtime: practicalRecord.runtime || metadata.runtime || null,
      title: practicalRecord.title,
      objectives: Array.isArray(metadata.objectives) ? metadata.objectives : [],
      instructions: practicalRecord.instructions || metadata.instructions || null,
      narratorGuide: metadata.narratorGuide || null,
      teacher: metadata.teacher && typeof metadata.teacher === 'object' ? metadata.teacher : null,
      codeWalkthrough: Array.isArray(metadata.codeWalkthrough) ? metadata.codeWalkthrough : [],
      teachingPlaylist: Array.isArray(metadata.teachingPlaylist) ? metadata.teachingPlaylist : [],
      completionRule: practicalRecord.completionRule || metadata.completionRule || 'all_tests_pass',
      checks: Array.isArray(metadata.checks) ? metadata.checks : [],
      hints: Array.isArray(metadata.hints) ? metadata.hints : [],
      evidence: Array.isArray(metadata.evidence) ? metadata.evidence : [],
      environment: parseJson(practicalRecord.environmentJson, metadata.environment || null),
      safety: parseJson(practicalRecord.safetyJson, metadata.safety || null),
      cleanup: parseJson(practicalRecord.cleanupJson, metadata.cleanup || null),
      completionRules: metadata.completionRules || null,
      generator: metadata.generator || null,
      files,
      tasks,
    };
  }
  const importedAssessment = await db
    .select({
      id: csAssessments.id,
      totalQuestions: csAssessments.totalQuestions,
      passingScore: sql`50`,
    })
    .from(csAssessments)
    .where(and(
      eq(csAssessments.courseId, courseId),
      eq(csAssessments.module, moduleNum),
      eq(csAssessments.chapter, chapterNum)
    ))
    .orderBy(desc(csAssessments.updatedAt))
    .limit(1);

  let assessment = stripPrivateAssessmentFields(storedAssessment);
  if (importedAssessment.length > 0) {
    const importedQuestions = await db
      .select()
      .from(csAssessmentQuestions)
      .where(eq(csAssessmentQuestions.assessmentId, importedAssessment[0].id))
      .orderBy(csAssessmentQuestions.questionNumber);

    assessment = {
      passingScore: 50,
      questions: importedQuestions.map((question) => ({
        id: question.questionNumber,
        type: question.type,
        question: question.question,
        explanation: question.explanation,
        options: question.options ? JSON.parse(question.options) : undefined,
        correctOption: question.correctOption,
        language: question.language,
        code: question.code,
        expectedOutput: question.expectedOutput,
      })),
    };
  }
  const objectiveScreen = manifest?.screens?.find((screen) => screen.type === 'learning_objectives');
  const conceptScreen = manifest?.screens?.find((screen) => screen.type === 'key_concepts');
  const learningObjectives = manifest?.learningObjectives || (objectiveScreen ? [
    objectiveScreen.keyIdea?.text || objectiveScreen.narration?.text || objectiveScreen.narratorSegment,
  ].filter(Boolean) : []);
  const keyConcepts = manifest?.keyConcepts || (conceptScreen ? [
    conceptScreen.keyIdea?.text || conceptScreen.narration?.text || conceptScreen.narratorSegment,
  ].filter(Boolean) : []);
  const handsOn = manifest?.handsOn || (manifest?.practical ? {
    title: manifest.practical.title,
    instructions: manifest.practical.instructions || '',
    checklist: manifest.practical.tasks?.map((task) => task.instruction) || [],
  } : null);
  const manifestPractical = manifest?.practical || null;
  const practical = databasePractical?.publicationStatus === 'published'
    ? databasePractical
    : manifestPractical
      ? {
          ...manifestPractical,
          id: databasePractical?.id || manifestPractical.id,
          courseId,
          module: moduleNum,
          chapter: chapterNum,
          category: databasePractical?.category || manifestPractical.category,
          sourcePath: databasePractical?.sourcePath || manifestPractical.sourcePath,
          sourceContent: databasePractical?.sourceContent || manifestPractical.sourceContent,
          sourceHash: databasePractical?.sourceHash || manifestPractical.sourceHash,
          metadata: databasePractical?.metadata || manifestPractical.metadata,
          origin: 'manifest',
          publicationStatus: 'compatibility_fallback',
          source: 'manifest',
          status: 'compatibility_fallback',
          version: databasePractical?.version || manifestPractical.version,
          schemaVersion: databasePractical?.schemaVersion || manifestPractical.schemaVersion,
          generatorVersion: databasePractical?.generatorVersion || manifestPractical.generatorVersion,
          classifierVersion: databasePractical?.classifierVersion || manifestPractical.classifierVersion,
          checks: databasePractical?.checks || manifestPractical.checks,
          hints: databasePractical?.hints || manifestPractical.hints,
          evidence: databasePractical?.evidence || manifestPractical.evidence,
          environment: databasePractical?.environment || manifestPractical.environment,
          safety: databasePractical?.safety || manifestPractical.safety,
          cleanup: databasePractical?.cleanup || manifestPractical.cleanup,
          completionRules: databasePractical?.completionRules || manifestPractical.completionRules,
          generator: databasePractical?.generator || manifestPractical.generator,
        }
      : databasePractical;

  // Build response with screens (use DB content if available, fallback to manifest)
  const responseScreens = screens.length > 0 
    ? screens.map(s => ({
        screen: s.screen,
        title: s.title,
        type: s.type,
        template: s.template,
        eyebrow: s.eyebrow,
        durationSeconds: s.durationSeconds,
        narratorSegment: s.narratorSegment,
        narration: s.narratorText ? { text: s.narratorText, durationSeconds: s.narratorDuration } : null,
        keyIdea: s.keyIdeaTitle ? { title: s.keyIdeaTitle, text: s.keyIdeaText } : null,
        content: s.contentHtml ? { html: s.contentHtml, css: s.contentCss } : null,
      }))
    : (manifest?.screens || []);

  return c.json({
    success: true,
    data: {
      courseId,
      course: manifest?.course || sourceMetadata.course || courseId,
      module: moduleNum,
      moduleTitle: manifest?.moduleTitle || sourceMetadata.moduleTitle,
      chapter: chapterNum,
      chapterTitle: manifest?.chapterTitle || sourceMetadata.chapterTitle || databasePractical?.title || `Chapter ${moduleNum}.${chapterNum}`,
      learningObjectives,
      keyConcepts,
      handsOn,
      practical,
      assessment,
      screens: responseScreens,
    },
  });
});

// Get the current user's progress for one learning-board chapter.
learning.use('/board-progress/*', authMiddleware);
learning.get('/board-progress/:courseId/:module/:chapter', async (c) => {
  const userId = c.get('userId');
  const record = await db
    .select()
    .from(learningBoardProgress)
    .where(and(
      eq(learningBoardProgress.userId, userId),
      eq(learningBoardProgress.courseId, c.req.param('courseId')),
      eq(learningBoardProgress.module, parseInt(c.req.param('module'), 10)),
      eq(learningBoardProgress.chapter, parseInt(c.req.param('chapter'), 10)),
    ))
    .limit(1);

  return c.json({ success: true, data: { progress: record[0] || null } });
});

// Update chapter gates, notes, watched time, and assessment score.
learning.patch('/board-progress/:courseId/:module/:chapter', async (c) => {
  const userId = c.get('userId');
  const courseId = c.req.param('courseId');
  const module = parseInt(c.req.param('module'), 10);
  const chapter = parseInt(c.req.param('chapter'), 10);
  const body = await c.req.json();
  const now = new Date().toISOString();
  const existing = await db
    .select()
    .from(learningBoardProgress)
    .where(and(
      eq(learningBoardProgress.userId, userId),
      eq(learningBoardProgress.courseId, courseId),
      eq(learningBoardProgress.module, module),
      eq(learningBoardProgress.chapter, chapter),
    ))
    .limit(1);

  const current = existing[0] || {
    explicitComplete: false,
    watched: false,
    practicalsComplete: false,
    assessmentPassed: false,
    score: null,
    studySeconds: 0,
    notes: null,
  };
  const next = {
    explicitComplete: typeof body.explicitComplete === 'boolean' ? body.explicitComplete : Boolean(current.explicitComplete),
    watched: typeof body.watched === 'boolean' ? body.watched : Boolean(current.watched),
    practicalsComplete: typeof body.practicalsComplete === 'boolean' ? body.practicalsComplete : Boolean(current.practicalsComplete),
    assessmentPassed: typeof body.assessmentPassed === 'boolean' ? body.assessmentPassed : Boolean(current.assessmentPassed),
    score: typeof body.score === 'number' ? body.score : current.score,
    studySeconds: typeof body.studySeconds === 'number'
      ? Math.max(Number(current.studySeconds) || 0, Math.round(body.studySeconds))
      : Number(current.studySeconds) || 0,
    notes: typeof body.notes === 'string' ? body.notes : current.notes,
  };
  const completed = next.explicitComplete && next.watched && next.practicalsComplete && next.assessmentPassed;
  const wasCompleted = Boolean(existing[0]?.completedAt);
  const values = {
    ...next,
    completedAt: completed ? (existing[0]?.completedAt || now) : null,
    updatedAt: now,
  };

  if (existing[0]) {
    await db.update(learningBoardProgress).set(values).where(eq(learningBoardProgress.id, existing[0].id));
  } else {
    await db.insert(learningBoardProgress).values({
      id: uuidv4(), userId, courseId, lessonId: body.lessonId || `${courseId}-m${module}-c${chapter}-lesson`,
      module, chapter, createdAt: now, ...values,
    });
  }

  if (completed && !wasCompleted) {
    await logActivity({
      userId,
      activityType: 'board_chapter_completed',
      entityId: `${courseId}-m${module}-c${chapter}`,
      metadata: { courseId, module, chapter, lessonId: body.lessonId || null },
    });
  }

  const saved = await db.select().from(learningBoardProgress).where(and(
    eq(learningBoardProgress.userId, userId),
    eq(learningBoardProgress.courseId, courseId),
    eq(learningBoardProgress.module, module),
    eq(learningBoardProgress.chapter, chapter),
  )).limit(1);
  return c.json({ success: true, data: { progress: saved[0], completed } });
});

// Execute native C/C++ practical code with a fixed, non-shell compiler command.
learning.post('/practical-execute', authMiddleware, async (c) => {
  try {
    const body = await c.req.json();
    const result = await executeNativeC(body || {});
    return c.json({ success: result.ok, data: result, error: result.ok ? undefined : result.error }, result.ok ? 200 : 400);
  } catch (error) {
    console.error('Native practical execution failed:', error);
    return c.json({ success: false, error: 'The practical execution service failed unexpectedly.' }, 500);
  }
});

// Record practical attempt (code run, submission, output)
learning.post('/practical-attempts', authMiddleware, async (c) => {
  const userId = c.get('userId');
  const body = await c.req.json();
  const { practicalId, files, status = 'started', output = '' } = body;
  if (!practicalId) {
    return c.json({ success: false, error: 'practicalId is required' }, 400);
  }
  const id = uuidv4();
  const now = new Date().toISOString();
  await db.insert(studentPracticalAttempts).values({
    id,
    userId,
    practicalId,
    files: typeof files === 'string' ? files : JSON.stringify(files || {}),
    status,
    output: typeof output === 'string' ? output : JSON.stringify(output || ''),
    createdAt: now,
    updatedAt: now,
  });
  return c.json({ success: true, data: { id, status } });
});

// Update progress for an individual practical task/milestone
learning.post('/practical-task-progress', authMiddleware, async (c) => {
  const userId = c.get('userId');
  const body = await c.req.json();
  const { practicalId, taskId, status = 'completed' } = body;
  if (!practicalId || !taskId) {
    return c.json({ success: false, error: 'practicalId and taskId are required' }, 400);
  }
  const now = new Date().toISOString();
  const existing = await db
    .select()
    .from(studentPracticalProgress)
    .where(and(
      eq(studentPracticalProgress.userId, userId),
      eq(studentPracticalProgress.practicalId, practicalId),
      eq(studentPracticalProgress.taskId, taskId)
    ))
    .limit(1);

  if (existing[0]) {
    await db.update(studentPracticalProgress).set({
      status,
      attempts: (existing[0].attempts || 0) + 1,
      completedAt: status === 'completed' ? (existing[0].completedAt || now) : existing[0].completedAt,
      updatedAt: now,
    }).where(eq(studentPracticalProgress.id, existing[0].id));
  } else {
    await db.insert(studentPracticalProgress).values({
      id: uuidv4(),
      userId,
      practicalId,
      taskId,
      status,
      attempts: 1,
      completedAt: status === 'completed' ? now : null,
      updatedAt: now,
    });
  }

  if (status === 'completed') {
    const [taskCount] = await db
      .select({ count: sql`COUNT(*)`.as('count') })
      .from(learningBoardPracticalTasks)
      .where(eq(learningBoardPracticalTasks.practicalId, practicalId));
    const [completedTaskCount] = await db
      .select({ count: sql`COUNT(*)`.as('count') })
      .from(studentPracticalProgress)
      .where(and(
        eq(studentPracticalProgress.userId, userId),
        eq(studentPracticalProgress.practicalId, practicalId),
        eq(studentPracticalProgress.status, 'completed'),
      ));
    if (Number(taskCount?.count || 0) > 0 && Number(completedTaskCount?.count || 0) >= Number(taskCount.count)) {
      const priorCompletion = await db
        .select({ id: userActivityLog.id })
        .from(userActivityLog)
        .where(and(
          eq(userActivityLog.userId, userId),
          eq(userActivityLog.activityType, 'practical_completed'),
          eq(userActivityLog.entityId, practicalId),
        ))
        .limit(1);
      if (priorCompletion.length === 0) {
        await logActivity({
          userId,
          activityType: 'practical_completed',
          entityId: practicalId,
          metadata: { taskCount: Number(taskCount.count) },
        });
      }
    }
  }
  return c.json({ success: true, data: { practicalId, taskId, status } });
});

// Retrieve student practical history and task progress
learning.get('/practical-progress/:practicalId', authMiddleware, async (c) => {
  const userId = c.get('userId');
  const practicalId = c.req.param('practicalId');
  const attempts = await db
    .select()
    .from(studentPracticalAttempts)
    .where(and(
      eq(studentPracticalAttempts.userId, userId),
      eq(studentPracticalAttempts.practicalId, practicalId)
    ))
    .orderBy(desc(studentPracticalAttempts.createdAt))
    .limit(5);

  const taskProgress = await db
    .select()
    .from(studentPracticalProgress)
    .where(and(
      eq(studentPracticalProgress.userId, userId),
      eq(studentPracticalProgress.practicalId, practicalId)
    ));

  return c.json({ success: true, data: { attempts, taskProgress } });
});

// Get single screen
learning.get('/boards/:courseId/:module/:chapter/:screen', async (c) => {
  const courseId = c.req.param('courseId');
  const module = c.req.param('module');
  const chapter = c.req.param('chapter');
  const screen = c.req.param('screen');
  const moduleNum = parseInt(module, 10);
  const chapterNum = parseInt(chapter, 10);
  const screenNum = parseInt(screen, 10);

  const screenData = await db
    .select()
    .from(learningBoardScreens)
    .where(
      and(
        eq(learningBoardScreens.courseId, courseId),
        eq(learningBoardScreens.module, moduleNum),
        eq(learningBoardScreens.chapter, chapterNum),
        eq(learningBoardScreens.screen, screenNum)
      )
    )
    .limit(1);

  if (screenData.length === 0) {
    return c.json({ success: false, error: 'Screen not found' }, 404);
  }

  const s = screenData[0];
  return c.json({
    success: true,
    data: {
      screen: s.screen,
      title: s.title,
      type: s.type,
      template: s.template,
      eyebrow: s.eyebrow,
      durationSeconds: s.durationSeconds,
      narratorSegment: s.narratorSegment,
      narration: s.narratorText ? { text: s.narratorText, durationSeconds: s.narratorDuration } : null,
      keyIdea: s.keyIdeaTitle ? { title: s.keyIdeaTitle, text: s.keyIdeaText } : null,
      content: s.contentHtml ? { html: s.contentHtml, css: s.contentCss, json: s.contentJSON ? JSON.parse(s.contentJSON) : {} } : null,
    },
  });
});

export default learning;
