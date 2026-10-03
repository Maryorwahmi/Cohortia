import { Hono } from 'hono';
import { db } from '../db/index.js';
import { lessons, progress, learningBoardCourses, learningBoardChapters, learningBoardScreens, learningBoardProgress, learningBoardPracticals, learningBoardPracticalFiles, learningBoardPracticalTasks, learningBoardPracticalTests, csAssessments, csAssessmentQuestions, studentPracticalAttempts, studentPracticalProgress, userActivityLog } from '../db/schema.js';
import { eq, and, inArray, desc } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import { sql } from 'drizzle-orm';
import { authMiddleware } from '../middleware/auth.js';
import { logActivity } from '../lib/activity.js';
import { evaluateAssessmentAnswer } from '../lib/deterministicAssessment.js';
import { mkdir, mkdtemp, readdir, readFile, stat, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const learning = new Hono();

const MAX_SOURCE_BYTES = 128 * 1024;
const MAX_OUTPUT_BYTES = 64 * 1024;
const APP_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const GENERATED_PRACTICALS_ROOT = path.resolve(
  APP_ROOT,
  process.env.COHORTIA_PRACTICALS_DIR || 'generated/learning-board-practicals',
);
const BOARD_CACHE_TTL_MS = 60_000;
let boardsCache = null;
let boardsCacheExpiresAt = 0;
let boardsLoadPromise = null;
const generatedCourseManifestCache = new Map();

async function readGeneratedCourseManifest(courseId) {
  if (!/^[a-z0-9][a-z0-9-]*$/.test(courseId)) return null;
  const manifestPath = path.join(GENERATED_PRACTICALS_ROOT, courseId, 'course-manifest.json');
  let fileStats;
  try {
    fileStats = await stat(manifestPath);
  } catch (error) {
    if (error.code === 'ENOENT') return null;
    throw error;
  }
  const cached = generatedCourseManifestCache.get(courseId);
  if (cached && cached.modifiedAt === fileStats.mtimeMs && cached.size === fileStats.size) return cached.manifest;

  let contents;
  try {
    contents = await readFile(manifestPath, 'utf8');
  } catch (error) {
    if (error.code === 'ENOENT') return null;
    throw error;
  }

  const manifest = JSON.parse(contents);
  if (manifest.schemaVersion !== 1 || manifest.courseId !== courseId || !Array.isArray(manifest.practicals)) {
    throw new Error(`Generated practical course manifest is invalid for ${courseId}.`);
  }
  generatedCourseManifestCache.set(courseId, {
    manifest,
    modifiedAt: fileStats.mtimeMs,
    size: fileStats.size,
  });
  return manifest;
}

async function listGeneratedCourseManifests() {
  let entries;
  try {
    entries = await readdir(GENERATED_PRACTICALS_ROOT, { withFileTypes: true });
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }

  const manifests = [];
  for (const entry of entries) {
    if (!entry.isDirectory() || !/^[a-z0-9][a-z0-9-]*$/.test(entry.name)) continue;
    const manifest = await readGeneratedCourseManifest(entry.name);
    if (manifest) manifests.push(manifest);
  }
  return manifests;
}

function findGeneratedCoursePractical(manifest, moduleNumber, chapterNumber) {
  if (!manifest) return null;
  const entry = manifest.practicals.find((item) => (
    item?.moduleNumber === moduleNumber && item?.chapterNumber === chapterNumber
  ));
  return entry?.practical && typeof entry.practical === 'object' ? entry.practical : null;
}

function runProcess(command, args, options = {}) {
  const { cwd, input = '', timeoutMs = 15000, env } = options;
  return new Promise((resolve) => {
    const child = spawn(command, args, { cwd, env, shell: false, windowsHide: true });
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

async function collectExecutionArtifacts(workspace, outputPath, originalFiles) {
  const artifacts = {};
  let totalBytes = 0;
  let scannedFiles = 0;
  const outputRelativePath = path.relative(workspace, outputPath);

  async function visit(directory, depth = 0) {
    if (depth > 8 || scannedFiles >= 100) return;
    const entries = await readdir(directory, { withFileTypes: true });
    for (const entry of entries) {
      if (Object.keys(artifacts).length >= 20 || totalBytes >= MAX_OUTPUT_BYTES || scannedFiles >= 100) return;
      scannedFiles += 1;
      const filePath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        await visit(filePath, depth + 1);
        continue;
      }
      if (!entry.isFile() || path.relative(workspace, filePath) === outputRelativePath) continue;

      const relativePath = path.relative(workspace, filePath).replaceAll('\\', '/');
      const fileStats = await stat(filePath);
      if (fileStats.size > MAX_SOURCE_BYTES) continue;
      const content = await readFile(filePath);
      if (content.includes(0)) continue;
      const text = content.toString('utf8');
      if (originalFiles[relativePath] === text) continue;
      totalBytes += content.length;
      if (totalBytes <= MAX_OUTPUT_BYTES) artifacts[relativePath] = text;
    }
  }

  await visit(workspace);
  return artifacts;
}

function safeWorkspacePath(workspace, relativePath) {
  const normalized = String(relativePath || '').replaceAll('\\', '/');
  if (!normalized || normalized.startsWith('/') || normalized.includes('..')) return null;
  const target = path.resolve(workspace, normalized);
  return target.startsWith(`${path.resolve(workspace)}${path.sep}`) ? target : null;
}

async function executeNativeC({
  files,
  activeFilePath,
  stdin = '',
  language = 'C',
  enableSanitizers = false,
  compileProbes = [],
}) {
  if (!['c', 'cpp', 'c++'].includes(String(language).toLowerCase())) {
    return { ok: false, error: `Native ${language} execution is not supported yet.` };
  }

  const entries = Object.entries(files || {});
  if (!entries.length || entries.length > 20) return { ok: false, error: 'A practical must contain between 1 and 20 files.' };
  if (entries.some(([, content]) => typeof content !== 'string' || Buffer.byteLength(content, 'utf8') > MAX_SOURCE_BYTES)) {
    return { ok: false, error: 'A source file is too large to execute.' };
  }
  if (!Array.isArray(compileProbes) || compileProbes.length > 8 || compileProbes.some((probe) => (
    !probe
      || typeof probe.id !== 'string'
      || !/^[a-z0-9][a-z0-9_-]{0,63}$/i.test(probe.id)
      || typeof probe.source !== 'string'
      || Buffer.byteLength(probe.source, 'utf8') > MAX_SOURCE_BYTES
      || typeof probe.expectCompileSuccess !== 'boolean'
      || (probe.expectedDiagnostic !== undefined
        && (typeof probe.expectedDiagnostic !== 'string' || probe.expectedDiagnostic.length > 200))
      || (!probe.expectCompileSuccess && !probe.expectedDiagnostic)
  ))) {
    return { ok: false, error: 'Compile probes must include a safe id, source, and expected compile result.' };
  }

  const workspace = await mkdtemp(path.join(tmpdir(), 'cohortia-c-'));
  try {
    for (const [relativePath, content] of entries) {
      const target = safeWorkspacePath(workspace, relativePath);
      if (!target) return { ok: false, error: 'Invalid workspace file path.' };
      await mkdir(path.dirname(target), { recursive: true });
      await writeFile(target, content, 'utf8');
    }

    const sourcePath = safeWorkspacePath(workspace, activeFilePath || entries[0][0]);
    if (!sourcePath) return { ok: false, error: 'The active source file is invalid.' };
    const outputPath = path.join(workspace, process.platform === 'win32' ? 'program.exe' : 'program');
    const isCpp = ['cpp', 'c++'].includes(String(language).toLowerCase()) || /\.(cpp|cc|cxx)$/i.test(sourcePath);
    const sourceExtensions = isCpp ? /\.(cpp|cc|cxx)$/i : /\.c$/i;
    const sourcePaths = entries
      .map(([relativePath]) => safeWorkspacePath(workspace, relativePath))
      .filter((filePath) => filePath && sourceExtensions.test(filePath));
    if (!sourcePaths.includes(sourcePath) && sourceExtensions.test(sourcePath)) sourcePaths.push(sourcePath);
    if (!sourcePaths.length) return { ok: false, error: `No ${isCpp ? 'C++' : 'C'} source files are available to compile.` };
    const compilerNames = isCpp
      ? (process.env.COHORTIA_CPP_COMPILER ? [process.env.COHORTIA_CPP_COMPILER] : ['g++', 'clang++', 'c++'])
      : (process.env.COHORTIA_C_COMPILER
        ? [process.env.COHORTIA_C_COMPILER]
        : process.platform === 'win32'
          ? ['C:\\Program Files\\LLVM\\bin\\clang.exe', 'clang', 'gcc', 'cc']
          : ['gcc', 'clang', 'cc']);
    const standardFlag = isCpp ? '-std=c++20' : '-std=c17';
    const sanitizerFlags = enableSanitizers ? ['-fsanitize=address,undefined', '-fno-omit-frame-pointer'] : [];
    let compile = null;
    let compilerUsed = null;
    for (const compiler of compilerNames) {
      compile = await runProcess(compiler, [...sourcePaths, standardFlag, '-O0', '-Wall', '-Wextra', ...sanitizerFlags, '-o', outputPath], { cwd: workspace, timeoutMs: 15000 });
      if (!compile.unavailable) {
        compilerUsed = compiler;
        break;
      }
    }
    if (!compile || compile.unavailable) {
      return { ok: false, compilerUnavailable: true, error: `No ${isCpp ? 'C++' : 'C'} compiler is installed on the backend host.` };
    }
    if (!compile.ok) return { ok: false, phase: 'compile', ...compile };

    const runtimeEnv = enableSanitizers
      ? {
          ...process.env,
          ASAN_OPTIONS: [process.env.ASAN_OPTIONS, 'detect_leaks=1:halt_on_error=1'].filter(Boolean).join(':'),
          UBSAN_OPTIONS: [process.env.UBSAN_OPTIONS, 'print_stacktrace=1:halt_on_error=1'].filter(Boolean).join(':'),
        }
      : process.env;
    const result = await runProcess(outputPath, [], {
      cwd: workspace,
      env: runtimeEnv,
      input: String(stdin).slice(0, 4096),
      timeoutMs: 5000,
    });
    const compileProbeResults = [];
    for (const probe of compileProbes) {
      if (!isCpp) {
        compileProbeResults.push({
          id: probe.id,
          passed: false,
          message: 'Compile probes for C++ access control require a C++ practical.',
        });
        continue;
      }
      const probeSourcePath = safeWorkspacePath(workspace, `_cohortia-probe-${probe.id}.cpp`);
      const probeOutputPath = path.join(workspace, `_cohortia-probe-${probe.id}${process.platform === 'win32' ? '.exe' : ''}`);
      await writeFile(probeSourcePath, probe.source, 'utf8');
      const probeCompile = await runProcess(compilerUsed, [
        probeSourcePath,
        standardFlag,
        '-O0',
        '-Wall',
        '-Wextra',
        '-o',
        probeOutputPath,
      ], { cwd: workspace, timeoutMs: 15000 });
      const diagnosticMatched = probe.expectCompileSuccess
        || (Boolean(probe.expectedDiagnostic)
          && probeCompile.stderr.toLowerCase().includes(probe.expectedDiagnostic.toLowerCase()));
      const compiledAsExpected = probeCompile.ok === probe.expectCompileSuccess
        && !probeCompile.unavailable
        && !probeCompile.timedOut;
      compileProbeResults.push({
        id: probe.id,
        passed: compiledAsExpected && diagnosticMatched,
        compileSuccess: probeCompile.ok,
        expectedCompileSuccess: probe.expectCompileSuccess,
        message: !compiledAsExpected
          ? `Compile probe expected ${probe.expectCompileSuccess ? 'success' : 'rejection'} but the compiler result was unavailable, timed out, or differed.`
          : !diagnosticMatched
            ? `Compile probe was rejected without the expected "${probe.expectedDiagnostic}" diagnostic.`
            : `Compile probe matched the expected ${probe.expectCompileSuccess ? 'success' : 'access-rule rejection'}.`,
      });
    }
    const originalFiles = Object.fromEntries(entries.map(([filePath, content]) => [
      filePath.replaceAll('\\', '/'),
      content,
    ]));
    for (const probe of compileProbes) originalFiles[`_cohortia-probe-${probe.id}.cpp`] = probe.source;
    const artifacts = await collectExecutionArtifacts(workspace, outputPath, originalFiles);
    return {
      ...result,
      phase: 'run',
      compiler: compilerUsed,
      sanitizers: enableSanitizers ? ['address', 'undefined'] : [],
      artifacts,
      compileProbes: compileProbeResults,
    };
  } finally {
    await rm(workspace, { recursive: true, force: true });
  }
}

async function executeCloudflareNativeSandbox(request) {
  const executorUrl = process.env.COHORTIA_SANDBOX_EXECUTOR_URL;
  const executorSecret = process.env.COHORTIA_SANDBOX_EXECUTOR_SECRET;
  if (!executorUrl || !executorSecret) return null;

  let url;
  try {
    url = new URL(executorUrl);
  } catch {
    return { ok: false, error: 'The isolated executor URL is invalid.' };
  }
  if (url.protocol !== 'https:' && process.env.NODE_ENV === 'production') {
    return { ok: false, error: 'The isolated executor must use HTTPS in production.' };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 25_000);
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${executorSecret}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        runId: uuidv4(),
        files: request.files,
        activeFilePath: request.activeFilePath,
        language: request.language,
      }),
      signal: controller.signal,
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload || typeof payload !== 'object') {
      return { ok: false, error: typeof payload?.error === 'string' ? payload.error : 'The isolated executor returned an invalid response.' };
    }
    return payload;
  } catch (error) {
    return {
      ok: false,
      error: error?.name === 'AbortError'
        ? 'The isolated executor timed out.'
        : 'The isolated executor could not be reached.',
    };
  } finally {
    clearTimeout(timeout);
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
  if (boardsCache && boardsCacheExpiresAt > Date.now()) {
    return c.json({ success: true, data: { courses: boardsCache } });
  }

  if (!boardsLoadPromise) {
    boardsLoadPromise = (async () => {
      const [courseRows, practicalRows, generatedManifests] = await Promise.all([
        db.select().from(learningBoardCourses),
        db.select({
          courseId: learningBoardPracticals.courseId,
          module: learningBoardPracticals.module,
          title: learningBoardPracticals.title,
          metadata: learningBoardPracticals.metadata,
          createdAt: learningBoardPracticals.createdAt,
          updatedAt: learningBoardPracticals.updatedAt,
        }).from(learningBoardPracticals),
        listGeneratedCourseManifests(),
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

      for (const manifest of generatedManifests) {
        const existingCourse = coursesById.get(manifest.courseId);
        const moduleCount = Math.max(0, ...(manifest.modules || []).map((item) => Number(item.moduleNumber) || 0));
        if (existingCourse) {
          existingCourse.course = manifest.courseTitle || existingCourse.course;
          existingCourse.totalModules = Math.max(existingCourse.totalModules || 0, moduleCount);
          existingCourse.updatedAt = manifest.generatedAt || existingCourse.updatedAt;
        } else {
          coursesById.set(manifest.courseId, {
            id: `practical-course-${manifest.courseId}`,
            courseId: manifest.courseId,
            course: manifest.courseTitle || manifest.courseId,
            courseLevel: null,
            description: null,
            totalModules: moduleCount,
            createdAt: manifest.generatedAt || new Date(0).toISOString(),
            updatedAt: manifest.generatedAt || new Date(0).toISOString(),
          });
        }
      }

      const courses = Array.from(coursesById.values()).sort((left, right) => left.course.localeCompare(right.course));
      boardsCache = courses;
      boardsCacheExpiresAt = Date.now() + BOARD_CACHE_TTL_MS;
      return courses;
    })().finally(() => {
      boardsLoadPromise = null;
    });
  }

  const courses = await boardsLoadPromise;
  return c.json({ success: true, data: { courses } });
});

// Get learning board course by ID
learning.get('/boards/:courseId', async (c) => {
  const courseId = c.req.param('courseId');
  let courseManifest = null;
  try {
    courseManifest = await readGeneratedCourseManifest(courseId);
  } catch (error) {
    console.error(`Could not load generated practical manifest for ${courseId}:`, error);
    return c.json({ success: false, error: 'The generated course practical manifest is invalid.' }, 500);
  }

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

  if (courseRows.length === 0 && practicalRows.length === 0 && !courseManifest) {
    return c.json({ success: false, error: 'Course not found' }, 404);
  }

  const course = courseRows[0] || (practicalRows.length > 0
    ? courseFromPracticalRows(courseId, practicalRows)
    : {
        id: `practical-course-${courseId}`,
        courseId,
        course: courseManifest.courseTitle || courseId,
        courseLevel: null,
        description: null,
        totalModules: 0,
        createdAt: courseManifest.generatedAt || new Date(0).toISOString(),
        updatedAt: courseManifest.generatedAt || new Date(0).toISOString(),
      });
  if (courseRows[0] && practicalRows.length > 0) {
    course.totalModules = Math.max(course.totalModules, ...practicalRows.map((row) => row.module));
  }
  if (courseManifest) {
    course.course = courseManifest.courseTitle || course.course;
    course.totalModules = Math.max(
      course.totalModules || 0,
      ...((courseManifest.modules || []).map((item) => Number(item.moduleNumber) || 0)),
    );
  }
  const chapters = mergePracticalChapters(chapterRows, practicalRows);
  for (const item of courseManifest?.practicals || []) {
    if (!Number.isInteger(item.moduleNumber) || !Number.isInteger(item.chapterNumber)) continue;
    if (chapters.some((chapter) => chapter.module === item.moduleNumber && chapter.chapter === item.chapterNumber)) continue;
    chapters.push({
      id: `practical-chapter-${courseId}-m${item.moduleNumber}-c${item.chapterNumber}`,
      courseId,
      module: item.moduleNumber,
      chapter: item.chapterNumber,
      moduleTitle: item.moduleTitle || `Module ${item.moduleNumber}`,
      chapterTitle: item.chapterTitle || item.practical?.title || `Chapter ${item.chapterNumber}`,
      presentationMode: 'practical_source',
      screensCount: 0,
      createdAt: courseManifest.generatedAt,
      updatedAt: courseManifest.generatedAt,
      practicalId: item.practical?.id || null,
      practicalCategory: item.practical?.category || null,
      practicalStatus: 'published',
      source: 'course_manifest',
    });
  }
  chapters.sort((left, right) => left.module - right.module || left.chapter - right.chapter);
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
  let courseManifest = null;
  try {
    courseManifest = await readGeneratedCourseManifest(courseId);
  } catch (error) {
    console.error(`Could not load generated practical manifest for ${courseId}:`, error);
    return c.json({ success: false, error: 'The generated course practical manifest is invalid.' }, 500);
  }
  const courseManifestPractical = findGeneratedCoursePractical(courseManifest, moduleNum, chapterNum);
  const courseManifestEntry = courseManifest?.practicals?.find((item) => (
    item?.moduleNumber === moduleNum && item?.chapterNumber === chapterNum
  ));

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

  if (chapterData.length === 0 && practicalRows.length === 0 && !courseManifestPractical) {
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
    const storedPractical = asObject(parseJson(practicalRecord.practicalJson, {}));
    const practicalPayload = { ...storedPractical, ...metadata };
    const generator = asObject(practicalPayload.generator);
    const metadataFiles = Array.isArray(practicalPayload.files)
      ? practicalPayload.files.filter((file) => file && typeof file === 'object')
      : [];
    const metadataTasks = Array.isArray(practicalPayload.tasks)
      ? practicalPayload.tasks.filter((task) => task && typeof task === 'object')
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
            interactiveExercise: metadataTask.interactiveExercise && typeof metadataTask.interactiveExercise === 'object' ? metadataTask.interactiveExercise : null,
            requiredConcepts: Array.isArray(requiredConcepts) ? requiredConcepts : [],
            hints: Array.isArray(hints) ? hints : [],
            inlineSuggestions: Array.isArray(metadataTask.inlineSuggestions) ? metadataTask.inlineSuggestions : [],
            tests: testsByTaskId.get(task.id) || (Array.isArray(metadataTask.tests) ? metadataTask.tests : []),
            checkIds: Array.isArray(metadataTask.checkIds)
              ? metadataTask.checkIds
              : (testsByTaskId.get(task.id) || []).map((test) => test.id),
          };
        })
      : metadataTasks.map((task, index) => ({
          id: task.id || `task-${index + 1}`,
          title: task.title,
          instruction: task.instruction || '',
          narratorGuide: typeof task.narratorGuide === 'string' ? task.narratorGuide : null,
          teaching: task.teaching && typeof task.teaching === 'object' ? task.teaching : null,
          interactiveExercise: task.interactiveExercise && typeof task.interactiveExercise === 'object' ? task.interactiveExercise : null,
          requiredConcepts: Array.isArray(task.requiredConcepts) ? task.requiredConcepts : [],
          hints: Array.isArray(task.hints) ? task.hints : [],
          inlineSuggestions: Array.isArray(task.inlineSuggestions) ? task.inlineSuggestions : [],
          tests: Array.isArray(task.tests) ? task.tests : [],
          checkIds: Array.isArray(task.checkIds) ? task.checkIds : [],
        }));

    databasePractical = {
      id: practicalRecord.id,
      courseId: practicalRecord.courseId,
      module: practicalRecord.module,
      chapter: practicalRecord.chapter,
      category: practicalRecord.category,
      activityKind: practicalPayload.activityKind || null,
      categoryProfile: metadata.categoryProfile && typeof metadata.categoryProfile === 'object' ? metadata.categoryProfile : null,
      sourcePath: practicalRecord.sourcePath,
      sourceContent: practicalRecord.sourceContent,
      sourceKey: practicalRecord.sourceKey || practicalPayload.sourceKey || null,
      sourceHash: practicalRecord.sourceHash || practicalPayload.sourceHash || null,
      metadata: practicalPayload,
      origin: hasStructuredData ? 'generated' : 'source',
      publicationStatus: hasStructuredData ? 'published' : 'source_only',
      source: 'database',
      status: hasStructuredData ? (practicalRecord.generationStatus || 'published') : 'source_only',
      version: practicalRecord.publishedVersion ?? metadata.version ?? metadata.practicalVersion ?? null,
      schemaVersion: practicalRecord.schemaVersion ?? metadata.schemaVersion ?? null,
      generatorVersion: practicalRecord.generatorVersion || practicalPayload.generatorVersion || generator.generatorVersion || null,
      classifierVersion: practicalRecord.classifierVersion || practicalPayload.classifierVersion || generator.classifierVersion || null,
      labType: practicalRecord.labType || practicalPayload.labType || null,
      sourceActivity: practicalPayload.sourceActivity || null,
      mode: practicalRecord.mode,
      language: practicalRecord.language || practicalPayload.language || null,
      runtime: practicalRecord.runtime || practicalPayload.runtime || null,
      title: practicalRecord.title,
      objectives: Array.isArray(practicalPayload.objectives) ? practicalPayload.objectives : [],
      instructions: practicalRecord.instructions || practicalPayload.instructions || null,
      narratorGuide: practicalPayload.narratorGuide || null,
      teacher: practicalPayload.teacher && typeof practicalPayload.teacher === 'object' ? practicalPayload.teacher : null,
      codeWalkthrough: Array.isArray(practicalPayload.codeWalkthrough) ? practicalPayload.codeWalkthrough : [],
      teachingSteps: Array.isArray(practicalPayload.teachingSteps) ? practicalPayload.teachingSteps : [],
      teachingPlaylist: Array.isArray(practicalPayload.teachingPlaylist) ? practicalPayload.teachingPlaylist : [],
      completionRule: practicalRecord.completionRule || practicalPayload.completionRule || 'all_tests_pass',
      checks: Array.isArray(practicalPayload.checks) && practicalPayload.checks.length > 0
        ? practicalPayload.checks
        : testRows.map((test) => {
          const testData = asObject(parseJson(test.testData, {}));
          return {
            id: test.id,
            type: test.testType,
            adapter: testData.adapter || null,
            command: testData.command,
            expected: test.expected ?? testData.expected,
            passCondition: testData.passCondition,
            matchMode: testData.matchMode,
            explanation: testData.explanation || '',
            testData,
          };
        }),
      hints: Array.isArray(practicalPayload.hints) ? practicalPayload.hints : [],
      evidence: Array.isArray(practicalPayload.evidence) ? practicalPayload.evidence : [],
      environment: parseJson(practicalRecord.environmentJson, practicalPayload.environment || null),
      safety: parseJson(practicalRecord.safetyJson, practicalPayload.safety || null),
      cleanup: parseJson(practicalRecord.cleanupJson, practicalPayload.cleanup || null),
      completionRules: practicalPayload.completionRules || null,
      generator: practicalPayload.generator || null,
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
  const learningObjectives = manifest?.learningObjectives || courseManifestPractical?.objectives || (objectiveScreen ? [
    objectiveScreen.keyIdea?.text || objectiveScreen.narration?.text || objectiveScreen.narratorSegment,
  ].filter(Boolean) : []);
  const keyConcepts = manifest?.keyConcepts || (conceptScreen ? [
    conceptScreen.keyIdea?.text || conceptScreen.narration?.text || conceptScreen.narratorSegment,
  ].filter(Boolean) : []);
  const manifestPractical = courseManifestPractical || manifest?.practical || null;
  const handsOn = manifest?.handsOn || (manifestPractical ? {
    title: manifestPractical.title,
    instructions: manifestPractical.instructions || '',
    checklist: manifestPractical.tasks?.map((task) => task.instruction) || [],
  } : null);
  const practical = databasePractical?.publicationStatus === 'published'
    ? databasePractical
    : courseManifestPractical
    ? {
        ...courseManifestPractical,
        id: courseManifestPractical.id || courseManifestPractical.practicalId,
        sourceDetails: courseManifestPractical.source,
        courseId,
        module: moduleNum,
        chapter: chapterNum,
        origin: 'course_manifest',
        publicationStatus: 'published',
        source: 'course_manifest',
        status: 'published',
      }
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
      course: manifest?.course || sourceMetadata.course || courseManifest?.courseTitle || courseId,
      module: moduleNum,
      moduleTitle: manifest?.moduleTitle || sourceMetadata.moduleTitle || courseManifestEntry?.moduleTitle,
      chapter: chapterNum,
      chapterTitle: manifest?.chapterTitle || sourceMetadata.chapterTitle || courseManifestEntry?.chapterTitle || databasePractical?.title || `Chapter ${moduleNum}.${chapterNum}`,
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
learning.use('/board-progress/:courseId', authMiddleware);
learning.use('/board-progress/*', authMiddleware);
learning.get('/board-progress/:courseId', async (c) => {
  const userId = c.get('userId');
  const records = await db
    .select()
    .from(learningBoardProgress)
    .where(and(
      eq(learningBoardProgress.userId, userId),
      eq(learningBoardProgress.courseId, c.req.param('courseId')),
    ));

  return c.json({ success: true, data: { progress: records } });
});

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
    const request = body && typeof body === 'object' && !Array.isArray(body) ? body : {};
    const sandboxResult = await executeCloudflareNativeSandbox(request);
    if (sandboxResult) {
      return c.json({ success: sandboxResult.ok, data: sandboxResult, error: sandboxResult.ok ? undefined : sandboxResult.error }, sandboxResult.ok ? 200 : 400);
    }
    if (process.env.COHORTIA_ALLOW_UNSANDBOXED_NATIVE_EXECUTION !== 'true') {
      return c.json({
        success: false,
        error: 'Native execution is disabled until the Cloudflare isolated executor is configured. Python practicals continue to run in the browser.',
      }, 503);
    }
    const result = await executeNativeC({
      ...request,
      enableSanitizers: request.enableSanitizers === true,
    });
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
