import 'dotenv/config';
import { readFile, readdir } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { createClient } from '@libsql/client';
import { v4 as uuidv4 } from 'uuid';
import { parseAssessmentQuestions } from '../src/lib/assessmentParser.js';
import { practicalVersionIdFor, sourceKeyFor } from '../src/lib/practicalIdentity.js';

const computerScienceRoot = resolve(import.meta.dirname, '../../docs/computer-science');
const databaseUrl = process.env.DATABASE_URL || 'file:./cohortia.db';
const client = createClient({ url: databaseUrl, authToken: process.env.DATABASE_AUTH_TOKEN });

async function findCourseDirectory(root, courseName) {
  const entries = await readdir(root, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const directory = join(root, entry.name);
    if (entry.name.toLowerCase() === courseName.toLowerCase()) {
      try {
        if ((await findCourses(directory)).length > 0) return directory;
      } catch {
        // Continue searching if this directory is not readable or has no manifests.
      }
    }
    const nested = await findCourseDirectory(directory, courseName);
    if (nested) return nested;
  }
  return null;
}

async function getCourseDirectory() {
  const courseArgIndex = process.argv.indexOf('--course');
  const positionalCourse = process.argv.slice(2).find((argument) => !argument.startsWith('--'));
  const courseName = courseArgIndex >= 0
    ? process.argv[courseArgIndex + 1]
    : positionalCourse || 'cs50s-introduction-to-computer-science';
  if (!courseName || courseName.startsWith('--')) {
    throw new Error('Usage: npm run db:import-learning-boards -- --course <course-id>');
  }
  const directPath = resolve(computerScienceRoot, courseName);
  try {
    if ((await findCourses(directPath)).length > 0) return directPath;
  } catch {
    // Search other Computer Science levels and subcategories below.
  }
  const discoveredPath = await findCourseDirectory(computerScienceRoot, courseName);
  if (!discoveredPath) throw new Error(`No generated learning-board manifests found for course: ${courseName}`);
  return discoveredPath;
}

const hasCourseArgument = process.argv.includes('--course')
  || process.argv.slice(2).some((argument) => !argument.startsWith('--'));
const importAll = process.argv.includes('--all') || !hasCourseArgument;
const moduleArgIndex = process.argv.indexOf('--module');
const chapterArgIndex = process.argv.indexOf('--chapter');
const moduleFilter = moduleArgIndex >= 0 ? Number(process.argv[moduleArgIndex + 1]) : null;
const chapterFilter = chapterArgIndex >= 0 ? Number(process.argv[chapterArgIndex + 1]) : null;
// In an all-course import, resuming only missing chapters is the safe default.
// Pass --refresh to intentionally rewrite every imported chapter and screen.
const missingOnly = !process.argv.includes('--refresh');

const now = new Date().toISOString();

function jsonText(value) {
  if (value === null || value === undefined) return null;
  if (typeof value === 'string') return value;
  return JSON.stringify(value);
}

async function isChapterCompleteInDatabase(courseId, manifest) {
  const expectedScreens = manifest.screens?.length || 0;
  const chapterResult = await client.execute({
    sql: `
      SELECT c.id, c.screens_count, COUNT(s.id) AS stored_screens
      FROM learning_board_chapters c
      LEFT JOIN learning_board_screens s
        ON s.course_id = c.course_id AND s.module = c.module AND s.chapter = c.chapter
      WHERE c.course_id = ? AND c.module = ? AND c.chapter = ?
      GROUP BY c.id, c.screens_count
    `,
    args: [courseId, manifest.module, manifest.chapter],
  });
  const chapter = chapterResult.rows[0];
  if (!chapter || Number(chapter.screens_count) !== expectedScreens || Number(chapter.stored_screens) !== expectedScreens) {
    return false;
  }

  if (!manifest.practical) return true;
  const practicalResult = await client.execute({
    sql: 'SELECT COUNT(*) AS count FROM learning_board_practicals WHERE course_id = ? AND module = ? AND chapter = ?',
    args: [courseId, manifest.module, manifest.chapter],
  });
  return Number(practicalResult.rows[0].count) === 1;
}

function legacyParseAssessmentQuestions(markdown, moduleNumber, chapterNumber) {
  const chapterPattern = new RegExp(`### Chapter ${moduleNumber}\\.${chapterNumber}[^\\n]*([\\s\\S]*?)(?=### Chapter |$)`);
  const chapterSection = markdown.match(chapterPattern)?.[1] || '';
  const assessmentSection = chapterSection.match(/#### Assessment idea([\s\S]*?)(?=#### AI generation note|$)/)?.[1] || '';
  const questionBlocks = assessmentSection.split(/\n\s*(?=\d+\.\s+\*\*Question:?\*\*:?)/).slice(1);

  return questionBlocks.map((block, index) => {
    const question = block.match(/\*\*Question:?\*\*:?\s*([\s\S]*?)(?=\n\s*[a-d]\)|\n\s*```|\n\s*\*\*Correct Answer:?\*\*:?)/)?.[1]
      ?.replace(/\s+/g, ' ').trim();
    const options = [...block.matchAll(/^\s*([a-d])\)\s*(.+)$/gmi)].map((match) => match[2].trim());
    const answer = block.match(/\*\*Correct Answer:?\*\*:?\s*([a-d])\)?/i)?.[1]?.toLowerCase();
    if (!question || options.length < 2 || !answer) return null;
    return {
      id: index + 1,
      type: 'multiple-choice',
      question,
      options,
      correctOption: answer.charCodeAt(0) - 97,
      explanation: block.match(/\*\*Explanation:?\*\*:?\s*([\s\S]*?)(?=\n\s*\d+\.\s+\*\*Question:?\*\*:?|$)/)?.[1]?.replace(/\s+/g, ' ').trim() || 'Review the chapter content and try again.',
    };
  }).filter(Boolean);
}

// Create tables if they don't exist
await client.execute(`
  CREATE TABLE IF NOT EXISTS learning_board_courses (
    id TEXT PRIMARY KEY,
    course_id TEXT NOT NULL UNIQUE,
    course TEXT NOT NULL,
    course_level TEXT,
    description TEXT,
    total_modules INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
  )
`);

await client.execute(`
  CREATE TABLE IF NOT EXISTS learning_board_chapters (
    id TEXT PRIMARY KEY,
    course_id TEXT NOT NULL,
    module INTEGER NOT NULL,
    chapter INTEGER NOT NULL,
    module_title TEXT,
    chapter_title TEXT NOT NULL,
    presentation_mode TEXT,
    screens_count INTEGER NOT NULL DEFAULT 0,
    manifest_data TEXT,
    assessment_data TEXT,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL,
    UNIQUE(course_id, module, chapter)
  )
`);

try {
  await client.execute('ALTER TABLE learning_board_chapters ADD COLUMN assessment_data TEXT');
} catch {
  // Column already exists on an imported database.
}

await client.execute(`
  CREATE TABLE IF NOT EXISTS learning_board_screens (
    id TEXT PRIMARY KEY,
    course_id TEXT NOT NULL,
    chapter_id TEXT NOT NULL,
    module INTEGER NOT NULL,
    chapter INTEGER NOT NULL,
    screen INTEGER NOT NULL,
    title TEXT NOT NULL,
    type TEXT NOT NULL,
    template TEXT,
    eyebrow TEXT,
    duration_seconds INTEGER,
    narrator_segment TEXT,
    narrator_text TEXT,
    narrator_duration INTEGER,
    key_idea_title TEXT,
    key_idea_text TEXT,
    content_html TEXT,
    content_css TEXT,
    content_json TEXT,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL,
    UNIQUE(course_id, chapter_id, screen)
  )
`);

await client.execute(`
  CREATE TABLE IF NOT EXISTS learning_board_practicals (
    id TEXT PRIMARY KEY,
    course_id TEXT NOT NULL,
    module INTEGER NOT NULL,
    chapter INTEGER NOT NULL,
    mode TEXT NOT NULL DEFAULT 'code_lab',
    language TEXT,
    runtime TEXT,
    title TEXT NOT NULL,
    instructions TEXT,
    completion_rule TEXT NOT NULL DEFAULT 'all_tests_pass',
    metadata TEXT,
    category TEXT,
    source_path TEXT,
    source_content TEXT,
    source_key TEXT,
    source_hash TEXT,
    lab_type TEXT,
    classifier_version TEXT,
    schema_version INTEGER,
    generator_version TEXT,
    generation_status TEXT NOT NULL DEFAULT 'raw',
    generation_error TEXT,
    generated_at TEXT,
    published_version INTEGER,
    practical_json TEXT,
    environment_json TEXT,
    safety_json TEXT,
    evidence_json TEXT,
    cleanup_json TEXT,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL,
    UNIQUE(course_id, module, chapter)
  )
`);

for (const [column, definition] of [
  ['category', 'TEXT'],
  ['source_path', 'TEXT'],
  ['source_content', 'TEXT'],
  ['source_key', 'TEXT'],
  ['source_hash', 'TEXT'],
  ['lab_type', 'TEXT'],
  ['classifier_version', 'TEXT'],
  ['schema_version', 'INTEGER'],
  ['generator_version', 'TEXT'],
  ['generation_status', "TEXT NOT NULL DEFAULT 'raw'"],
  ['generation_error', 'TEXT'],
  ['generated_at', 'TEXT'],
  ['published_version', 'INTEGER'],
  ['practical_json', 'TEXT'],
  ['environment_json', 'TEXT'],
  ['safety_json', 'TEXT'],
  ['evidence_json', 'TEXT'],
  ['cleanup_json', 'TEXT'],
]) {
  try {
    await client.execute(`ALTER TABLE learning_board_practicals ADD COLUMN ${column} ${definition}`);
  } catch {
    // Column already exists on an imported database.
  }
}

await client.execute(`
  CREATE TABLE IF NOT EXISTS learning_board_practical_versions (
    id TEXT PRIMARY KEY,
    practical_id TEXT NOT NULL,
    version INTEGER NOT NULL,
    status TEXT NOT NULL DEFAULT 'generated',
    source_hash TEXT,
    schema_version INTEGER,
    generator_version TEXT,
    classifier_version TEXT,
    lab_type TEXT,
    practical_json TEXT,
    environment_json TEXT,
    safety_json TEXT,
    evidence_json TEXT,
    cleanup_json TEXT,
    generation_error TEXT,
    generated_at TEXT,
    published_at TEXT,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL,
    UNIQUE(practical_id, version)
  )
`);

await client.execute(`
  CREATE TABLE IF NOT EXISTS learning_board_practical_files (
    id TEXT PRIMARY KEY,
    practical_id TEXT NOT NULL,
    path TEXT NOT NULL,
    content TEXT NOT NULL DEFAULT '',
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL,
    UNIQUE(practical_id, path)
  )
`);

await client.execute(`
  CREATE TABLE IF NOT EXISTS learning_board_practical_tasks (
    id TEXT PRIMARY KEY,
    practical_id TEXT NOT NULL,
    task_key TEXT NOT NULL,
    instruction TEXT NOT NULL,
    required_concepts TEXT,
    hints TEXT,
    task_order INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL,
    UNIQUE(practical_id, task_key)
  )
`);

await client.execute(`
  CREATE TABLE IF NOT EXISTS learning_board_practical_tests (
    id TEXT PRIMARY KEY,
    task_id TEXT NOT NULL,
    test_type TEXT NOT NULL,
    expected TEXT,
    test_data TEXT,
    test_order INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL
  )
`);

console.log('✓ Database tables created/verified');

// Function to recursively find all manifest.json files
async function findCourses(path) {
  const entries = await readdir(path, { withFileTypes: true });
  const courses = [];
  
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const modulePath = join(path, entry.name);
      const moduleEntries = await readdir(modulePath, { withFileTypes: true });
      
      // Look for module folders (module-01, module-02, etc.)
      if (entry.name.match(/^module-\d+$/)) {
        const chapterEntries = await readdir(modulePath, { withFileTypes: true });
        
        for (const chapterEntry of chapterEntries) {
          if (chapterEntry.isDirectory() && chapterEntry.name.match(/^chapter-\d+$/)) {
            const chapterPath = join(modulePath, chapterEntry.name);
            const manifestPath = join(chapterPath, 'manifest.json');
            
            try {
              const manifestContent = await readFile(manifestPath, 'utf8');
              const manifest = JSON.parse(manifestContent);
              courses.push({
                moduleDir: entry.name,
                chapterDir: chapterEntry.name,
                path: chapterPath,
                manifest,
              });
            } catch (error) {
              console.warn(`⚠ Could not read manifest at ${manifestPath}:`, error.message);
            }
          }
        }
      }
    }
  }
  
  return courses;
}

async function findAllCourseDirectories(root) {
  const entries = await readdir(root, { withFileTypes: true });
  const courses = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const directory = join(root, entry.name);
    let chapters = [];
    try {
      chapters = await findCourses(directory);
    } catch {
      // Continue scanning other levels, subcategories, and courses.
    }

    if (chapters.length > 0) {
      const firstManifest = chapters[0].manifest;
      courses.push({
        directoryName: entry.name,
        path: directory,
        id: firstManifest.courseId || entry.name,
        title: firstManifest.course || entry.name,
        chapterCount: chapters.length,
        screenCount: chapters.reduce((total, chapter) => total + (chapter.manifest.screens?.length || 0), 0),
      });
      continue;
    }

    courses.push(...await findAllCourseDirectories(directory));
  }

  return courses;
}

async function importAllAvailableCourses() {
  const discoveredCourses = await findAllCourseDirectories(computerScienceRoot);
  const coursesById = new Map();
  for (const course of discoveredCourses) {
    const existingCourse = coursesById.get(course.id);
    if (!existingCourse || course.chapterCount > existingCourse.chapterCount) {
      coursesById.set(course.id, course);
    }
  }
  const courses = [...coursesById.values()].sort((left, right) => left.id.localeCompare(right.id));
  const importedResult = await client.execute('SELECT course_id FROM learning_board_courses');
  const importedIds = new Set(importedResult.rows.map((row) => String(row.course_id)));

  console.log(`\n📚 Source: ${computerScienceRoot}`);
  console.log(`Found ${courses.length} generated courses with chapter manifests across all levels and subcategories`);
  console.log('─'.repeat(80));

  for (const [index, course] of courses.entries()) {
    const status = importedIds.has(course.id) ? '↻' : '⬜';
    const label = importedIds.has(course.id) ? 'refresh' : 'new';
    console.log(`${status} ${String(index + 1).padStart(3, ' ')}. ${course.title} (${course.id}; ${course.chapterCount} chapters; ${course.screenCount} screens; ${label})`);
  }

  if (!courses.length) {
    console.log('\n✓ No chapter manifests were found to import.');
    return;
  }

  client.close();
  console.log(`\n🚀 Importing ${courses.length} generated course${courses.length === 1 ? '' : 's'}...`);
  const failures = [];
  for (const course of courses) {
    console.log(`\n===== ${course.title} (${course.id}) =====`);
    const childArgs = [process.argv[1], '--course', course.directoryName];
    if (missingOnly) childArgs.push('--missing-only');
    const result = spawnSync(process.execPath, childArgs, {
      stdio: 'inherit',
      env: process.env,
    });
    if (result.status !== 0 || result.error) {
      failures.push(course.id);
      console.error(`✗ Import failed for ${course.id}; continuing with the remaining courses.`);
    }
  }
  if (failures.length) {
    throw new Error(`Failed to import ${failures.length} course${failures.length === 1 ? '' : 's'}: ${failures.join(', ')}`);
  }
}

if (importAll) {
  try {
    await importAllAvailableCourses();
  } catch (error) {
    console.error('Error importing all learning boards:', error.message);
    process.exit(1);
  }
  process.exit(0);
}

const courseFolder = await getCourseDirectory();
let courseMarkdown = '';
try {
  courseMarkdown = await readFile(`${courseFolder}.md`, 'utf8');
} catch {
  // Generated course folders may not have a markdown source file.
}

try {
  console.log(`Scanning for course manifests in: ${courseFolder}`);
  
  // Check if the path exists and is a directory
  const courseDir = courseFolder;
  console.log(`Course selected: ${courseDir}`);
  const chapters = (await findCourses(courseDir)).filter((chapter) => (
    (moduleFilter == null || Number(chapter.manifest?.module) === moduleFilter)
    && (chapterFilter == null || Number(chapter.manifest?.chapter) === chapterFilter)
  ));
  
  if (chapters.length === 0) {
    console.log('No chapters found to import.');
    client.close();
    process.exit(0);
  }
  
  console.log(`Found ${chapters.length} chapters to import`);
  
  // Get course info from first chapter
  const firstChapter = chapters[0].manifest;
  const courseId = firstChapter.courseId || 'cs50s-introduction-to-computer-science';
  const courseName = firstChapter.course || 'CS50\'s Introduction to Computer Science';
  const courseLevel = firstChapter.courseLevel || 'beginner';
  const pendingChapters = missingOnly
    ? (await Promise.all(chapters.map(async (chapterData) => ({
      chapterData,
      complete: await isChapterCompleteInDatabase(courseId, chapterData.manifest),
    })))).filter((entry) => !entry.complete).map((entry) => entry.chapterData)
    : chapters;

  if (missingOnly) {
    console.log(`Database check: ${chapters.length - pendingChapters.length} complete, ${pendingChapters.length} missing or incomplete`);
  }
  
  // Insert or update course
  const courseDbId = `course-${courseId}`;
  const maxModule = Math.max(...chapters.map(c => c.manifest.module), 0);
  
  // Check if course exists
  const existingCourse = await client.execute({
    sql: 'SELECT id FROM learning_board_courses WHERE course_id = ?',
    args: [courseId],
  });

  if (missingOnly && pendingChapters.length === 0 && existingCourse.rows.length > 0) {
    console.log('✓ All chapter manifests and screens already exist; nothing to import for this course.');
    client.close();
    process.exit(0);
  }

  if (existingCourse.rows.length > 0) {
    // Update
    await client.execute({
      sql: `
        UPDATE learning_board_courses 
        SET course = ?, course_level = ?, total_modules = ?, updated_at = ?
        WHERE course_id = ?
      `,
      args: [courseName, courseLevel, maxModule, now, courseId],
    });
  } else {
    // Insert
    await client.execute({
      sql: `
        INSERT INTO learning_board_courses (id, course_id, course, course_level, total_modules, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `,
      args: [courseDbId, courseId, courseName, courseLevel, maxModule, now, now],
    });
  }
  
  console.log(`✓ Course "${courseName}" (${courseId}) imported/updated`);

  // Import chapters and screens
  let totalScreensImported = 0;
  
  for (const chapterData of pendingChapters) {
    const manifest = chapterData.manifest;
    const chapterId = `chapter-${courseId}-m${manifest.module}-c${manifest.chapter}`;
    
    // Check if chapter exists
    const existingChapter = await client.execute({
      sql: 'SELECT id FROM learning_board_chapters WHERE course_id = ? AND module = ? AND chapter = ?',
      args: [courseId, manifest.module, manifest.chapter],
    });

    const screensCount = manifest.screens?.length || 0;
    const manifestJson = JSON.stringify(manifest);
    const assessmentData = JSON.stringify({
      passingScore: 70,
      questions: manifest.assessment?.questions || parseAssessmentQuestions(courseMarkdown, manifest.module, manifest.chapter),
    });

    if (existingChapter.rows.length > 0) {
      // Update
      await client.execute({
        sql: `
          UPDATE learning_board_chapters
          SET module_title = ?, chapter_title = ?, screens_count = ?, manifest_data = ?, assessment_data = ?, updated_at = ?
          WHERE course_id = ? AND module = ? AND chapter = ?
        `,
        args: [
          manifest.moduleTitle, manifest.chapterTitle, screensCount, manifestJson, assessmentData, now,
          courseId, manifest.module, manifest.chapter
        ],
      });
    } else {
      // Insert
      await client.execute({
        sql: `
          INSERT INTO learning_board_chapters (
            id, course_id, module, chapter, module_title, chapter_title,
            presentation_mode, screens_count, manifest_data, assessment_data, created_at, updated_at
          )
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,
        args: [
          chapterId, courseId, manifest.module, manifest.chapter,
          manifest.moduleTitle, manifest.chapterTitle,
          manifest.presentationMode, screensCount, manifestJson, assessmentData, now, now
        ],
      });
    }
    
    console.log(`✓ Chapter M${manifest.module}C${manifest.chapter}: "${manifest.chapterTitle}"`);

    const practical = manifest.practical;
    if (practical) {
      const practicalId = `practical-${courseId}-m${manifest.module}-c${manifest.chapter}`;
      await client.execute({
        sql: `
          INSERT INTO learning_board_practicals (
            id, course_id, module, chapter, mode, language, runtime, title,
            instructions, completion_rule, metadata, created_at, updated_at
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT(course_id, module, chapter) DO UPDATE SET
            mode = excluded.mode, language = excluded.language, runtime = excluded.runtime,
            title = excluded.title, instructions = excluded.instructions,
            completion_rule = excluded.completion_rule, metadata = excluded.metadata,
            updated_at = excluded.updated_at
        `,
        args: [
          practicalId, courseId, manifest.module, manifest.chapter,
          practical.mode || 'code_lab', practical.language || null, practical.runtime || null,
          practical.title || manifest.chapterTitle, practical.instructions || '',
          practical.completionRule || 'all_tests_pass', JSON.stringify(practical), now, now
        ],
      });

      const storedPractical = await client.execute({
        sql: 'SELECT id FROM learning_board_practicals WHERE course_id = ? AND module = ? AND chapter = ?',
        args: [courseId, manifest.module, manifest.chapter],
      });
      const storedPracticalId = storedPractical.rows[0]?.id || practicalId;
      const practicalVersion = Number(practical.version || practical.practicalVersion || 1);
      const generationStatus = practical.generationStatus || 'published';
      const practicalJson = JSON.stringify(practical);

      await client.execute({
        sql: `
          UPDATE learning_board_practicals SET
            source_key = ?, source_hash = COALESCE(?, source_hash),
            lab_type = ?, classifier_version = ?, schema_version = ?,
            generator_version = ?, generation_status = ?, generation_error = ?,
            generated_at = ?, published_version = ?, practical_json = ?,
            environment_json = ?, safety_json = ?, evidence_json = ?,
            cleanup_json = ?, updated_at = ?
          WHERE id = ?
        `,
        args: [
          sourceKeyFor({ courseId, module: manifest.module, chapter: manifest.chapter }),
          practical.sourceHash || null,
          practical.labType || null,
          practical.classifierVersion || null,
          practical.schemaVersion || null,
          practical.generatorVersion || null,
          generationStatus,
          practical.generationError || null,
          practical.generatedAt || now,
          generationStatus === 'published' ? practicalVersion : null,
          practicalJson,
          jsonText(practical.environment),
          jsonText(practical.safety),
          jsonText(practical.evidence),
          jsonText(practical.cleanup),
          now,
          storedPracticalId,
        ],
      });

      await client.execute({
        sql: `
          INSERT INTO learning_board_practical_versions (
            id, practical_id, version, status, source_hash, schema_version,
            generator_version, classifier_version, lab_type, practical_json,
            environment_json, safety_json, evidence_json, cleanup_json,
            generation_error, generated_at, published_at, created_at, updated_at
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT(practical_id, version) DO UPDATE SET
            status = excluded.status,
            source_hash = COALESCE(excluded.source_hash, learning_board_practical_versions.source_hash),
            schema_version = excluded.schema_version,
            generator_version = excluded.generator_version,
            classifier_version = excluded.classifier_version,
            lab_type = excluded.lab_type,
            practical_json = excluded.practical_json,
            environment_json = excluded.environment_json,
            safety_json = excluded.safety_json,
            evidence_json = excluded.evidence_json,
            cleanup_json = excluded.cleanup_json,
            generation_error = excluded.generation_error,
            generated_at = excluded.generated_at,
            published_at = excluded.published_at,
            updated_at = excluded.updated_at
        `,
        args: [
          practicalVersionIdFor(storedPracticalId, practicalVersion),
          storedPracticalId,
          practicalVersion,
          generationStatus,
          practical.sourceHash || null,
          practical.schemaVersion || null,
          practical.generatorVersion || null,
          practical.classifierVersion || null,
          practical.labType || null,
          practicalJson,
          jsonText(practical.environment),
          jsonText(practical.safety),
          jsonText(practical.evidence),
          jsonText(practical.cleanup),
          practical.generationError || null,
          practical.generatedAt || now,
          generationStatus === 'published' ? (practical.publishedAt || now) : null,
          now,
          now,
        ],
      });

      await client.execute({ sql: 'DELETE FROM learning_board_practical_files WHERE practical_id = ?', args: [storedPracticalId] });
      await client.execute({
        sql: 'DELETE FROM learning_board_practical_tests WHERE task_id IN (SELECT id FROM learning_board_practical_tasks WHERE practical_id = ?)',
        args: [storedPracticalId],
      });
      await client.execute({ sql: 'DELETE FROM learning_board_practical_tasks WHERE practical_id = ?', args: [storedPracticalId] });
      for (const [fileIndex, file] of (practical.files || []).entries()) {
        await client.execute({
          sql: `INSERT INTO learning_board_practical_files (id, practical_id, path, content, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)`,
          args: [`${storedPracticalId}-file-${fileIndex + 1}`, storedPracticalId, file.path, file.content || '', now, now],
        });
      }
      for (const [taskIndex, task] of (practical.tasks || []).entries()) {
        const taskId = `${storedPracticalId}-task-${taskIndex + 1}`;
        await client.execute({
          sql: `INSERT INTO learning_board_practical_tasks (id, practical_id, task_key, instruction, required_concepts, hints, task_order, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          args: [taskId, storedPracticalId, task.id || `task-${taskIndex + 1}`, task.instruction || '', JSON.stringify(task.requiredConcepts || []), JSON.stringify(task.hints || []), taskIndex, now, now],
        });
        for (const [testIndex, test] of (task.tests || []).entries()) {
          await client.execute({
            sql: `INSERT INTO learning_board_practical_tests (id, task_id, test_type, expected, test_data, test_order, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)`,
            args: [`${taskId}-test-${testIndex + 1}`, taskId, test.type || 'syntax', test.expected || null, JSON.stringify(test), testIndex, now],
          });
        }
      }
      console.log(`  ✓ Practical lab imported: ${practical.title}`);
    }

    
    // Import screens
    for (const screen of manifest.screens || []) {
      const screenId = `screen-${courseId}-m${manifest.module}-c${manifest.chapter}-s${screen.screen}`;
      
      const keyIdea = screen.keyIdea || {};
      const narration = screen.narration || {};
      const content = screen.content || {};
      
      // First check if screen exists
      const existing = await client.execute({
        sql: 'SELECT id FROM learning_board_screens WHERE course_id = ? AND module = ? AND chapter = ? AND screen = ?',
        args: [courseId, manifest.module, manifest.chapter, screen.screen],
      });

      if (existing.rows.length > 0) {
        // Update existing screen
        await client.execute({
          sql: `
            UPDATE learning_board_screens SET
              title = ?, type = ?, template = ?, eyebrow = ?,
              duration_seconds = ?, narrator_segment = ?, narrator_text = ?, narrator_duration = ?,
              key_idea_title = ?, key_idea_text = ?,
              content_html = ?, content_css = ?, content_json = ?,
              updated_at = ?
            WHERE course_id = ? AND module = ? AND chapter = ? AND screen = ?
          `,
          args: [
            screen.title, screen.type, screen.template, screen.eyebrow,
            screen.durationSeconds, screen.narratorSegment, narration.text, narration.durationSeconds,
            keyIdea.title, keyIdea.text,
            content.html, content.css, JSON.stringify(screen.content || {}),
            now,
            courseId, manifest.module, manifest.chapter, screen.screen
          ],
        });
      } else {
        // Insert new screen
        await client.execute({
          sql: `
            INSERT INTO learning_board_screens (
              id, course_id, chapter_id, module, chapter, screen,
              title, type, template, eyebrow,
              duration_seconds, narrator_segment, narrator_text, narrator_duration,
              key_idea_title, key_idea_text,
              content_html, content_css, content_json,
              created_at, updated_at
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `,
          args: [
            screenId, courseId, chapterId, manifest.module, manifest.chapter, screen.screen,
            screen.title, screen.type, screen.template, screen.eyebrow,
            screen.durationSeconds, screen.narratorSegment, narration.text, narration.durationSeconds,
            keyIdea.title, keyIdea.text,
            content.html, content.css, JSON.stringify(screen.content || {}),
            now, now
          ],
        });
      }
      
      totalScreensImported++;
    }
  }
  
  console.log(`\n✓ Successfully imported ${totalScreensImported} screens across ${pendingChapters.length} chapter(s)`);
  console.log(`✓ Course is ready to view in the learning board!`);
  
} catch (error) {
  console.error('Error importing learning boards:', error);
  client.close();
  process.exit(1);
}

client.close();
process.exit(0);
