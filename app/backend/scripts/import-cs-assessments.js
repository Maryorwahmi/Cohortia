import 'dotenv/config';
import { readdir, readFile } from 'node:fs/promises';
import { resolve, join, basename } from 'node:path';
import { randomUUID } from 'node:crypto';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from '../src/db/schema.js';
import { parseAssessmentQuestions } from '../src/lib/assessmentParser.js';

const dbUrl = process.env.DATABASE_URL || 'file:./cohortia.db';
const client = createClient({ url: dbUrl, authToken: process.env.DATABASE_AUTH_TOKEN });
const db = drizzle(client, { schema });

const courseArg = process.argv.slice(2).find((argument) => argument === '--course' || argument.startsWith('--course='));
const courseArgIndex = process.argv.indexOf('--course');
const requestedCourseId = courseArg?.startsWith('--course=')
  ? courseArg.slice('--course='.length)
  : courseArgIndex >= 0
    ? process.argv[courseArgIndex + 1]
    : null;
if (courseArg && (!requestedCourseId || requestedCourseId.startsWith('--'))) {
  throw new Error('Usage: npm run db:import-assessments -- --course <course-id>');
}

await client.execute('PRAGMA busy_timeout = 30000');
try {
  await client.execute('ALTER TABLE cs_assessment_questions ADD COLUMN reference_answer TEXT');
} catch (error) {
  if (!error.message?.includes('duplicate column name')) throw error;
}

const ASSESSMENTS_ROOT = resolve(process.cwd(), '../../CS Assessment');

// Helper to extract frontmatter YAML
function extractYamlField(markdown, field) {
  const regex = new RegExp(`^${field}:\\s*(.+?)$`, 'mi');
  const match = markdown.match(regex);
  return match ? match[1].trim().replace(/^['"]|['"]$/g, '') : null;
}

function extractCourseTitle(markdown, courseId) {
  const title = extractYamlField(markdown, 'title')
    || extractYamlField(markdown, 'course_title');
  if (title) return title;

  const heading = markdown.match(/^#\s+(.+?)\s*$/m)?.[1]?.trim();
  if (heading) return heading.replace(/^Syllabus:\s*/i, '').trim();

  return courseId
    .split('-')
    .map((word) => word ? word[0].toUpperCase() + word.slice(1) : word)
    .join(' ');
}

// Extract chapter number and title from section header
function extractChapterInfo(section) {
  const match = section.match(/^###\s+Chapter\s+(\d+)\.(\d+)\s*(?:—|—)\s*(.+?)(?:\s*\(|$)/m);
  if (!match) return null;
  return {
    module: parseInt(match[1]),
    chapter: parseInt(match[2]),
    title: match[3].trim(),
  };
}

// Extract syllabus structure to get module titles
function extractSyllabusStructure(markdown) {
  const syllabusMatch = markdown.match(/## Syllabus Structure\s*\n([\s\S]*?)(?=\n##|$)/);
  if (!syllabusMatch) return {};

  const modules = {};
  const rows = syllabusMatch[1].split('\n');
  for (const row of rows) {
    const match = row.match(/\|\s*(\d+)\s*\|\s*(.+?)\s*\|\s*(\d+)\s*\|/);
    if (match) {
      modules[parseInt(match[1])] = {
        title: match[2].trim(),
        chapters: parseInt(match[3]),
      };
    }
  }
  return modules;
}

// Scan directory recursively for markdown files
async function scanDirectory(directory, level = 'beginner') {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) {
      const subFiles = await scanDirectory(fullPath, level);
      files.push(...subFiles);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push({
        path: fullPath,
        level,
        category: basename(directory),
      });
    }
  }

  return files;
}

// Extract course info from file path
function extractCourseInfo(filePath) {
  const parts = filePath.split(/[/\\]/);
  const fileName = parts[parts.length - 1].replace('.md', '');

  // Convert filename to course ID (e.g., "lpic-3-linux-enterprise-professional")
  const courseId = fileName.toLowerCase().replace(/\s+/g, '-');

  // Get category from folder structure
  let category = '';
  for (let i = parts.length - 2; i >= 0; i--) {
    if (parts[i] !== 'advanced' && parts[i] !== 'intermediate' && parts[i] !== 'beginner') {
      category = parts[i];
      break;
    }
  }

  return { courseId, category };
}

// Main import function
async function importAssessments() {
  console.log('🚀 Starting CS Assessment Import...\n');

  // Make retries safe after an interrupted import.
  await client.execute('BEGIN');
  try {
    if (requestedCourseId) {
      await client.execute('DELETE FROM cs_assessment_questions WHERE course_id = ?', [requestedCourseId]);
      await client.execute('DELETE FROM cs_assessments WHERE course_id = ?', [requestedCourseId]);
    } else {
      await client.execute('DELETE FROM cs_assessment_questions');
      await client.execute('DELETE FROM cs_assessments');
    }
    await client.execute('COMMIT');
    console.log(`🧹 Cleared existing CS assessment rows${requestedCourseId ? ` for ${requestedCourseId}` : ''}\n`);
  } catch (error) {
    try { await client.execute('ROLLBACK'); } catch {}
    throw error;
  }

  const levels = ['beginner', 'intermediate', 'advanced'];
  let totalImported = 0;
  let totalQuestions = 0;

  for (const level of levels) {
    const levelDir = join(ASSESSMENTS_ROOT, level);
    const files = await scanDirectory(levelDir, level);

    console.log(`\n📚 Processing ${level.toUpperCase()} level (${files.length} courses)\n`);

    for (const file of files) {
      const markdown = await readFile(file.path, 'utf8');
      const { courseId, category } = extractCourseInfo(file.path);
      if (requestedCourseId && courseId !== requestedCourseId) continue;
      const courseTitle = extractCourseTitle(markdown, courseId);
      const modules = extractSyllabusStructure(markdown);

      console.log(`\n📖 ${courseTitle}`);
      console.log(`   Level: ${file.level.toUpperCase()} | Category: ${category}`);

      // Find all chapters with assessments
      const chapterMatches = [
        ...markdown.matchAll(
          /^###\s+Chapter\s+(\d+)\.(\d+)\b([^\n]*([\s\S]*?)(?=^###\s+Chapter\s+|(?![\s\S])))/gim
        ),
      ];

      let courseQuestionsCount = 0;
      let questionsWithOptions = 0;
      let questionsWithCode = 0;
      let caseStudyQuestions = 0;
      const importedChapterKeys = new Set();

      for (const chapterMatch of chapterMatches) {
        const moduleNum = parseInt(chapterMatch[1]);
        const chapterNum = parseInt(chapterMatch[2]);
        const chapterContent = chapterMatch[4] || '';
        const chapterKey = `${moduleNum}:${chapterNum}`;

        // Some source files repeat the same chapter section. Keep one record per key.
        if (importedChapterKeys.has(chapterKey)) {
          console.warn(`   ! Skipping duplicate ${chapterKey} in ${file.path}`);
          continue;
        }

        // Check if this chapter has an assessment section
        if (!/^####\s+Assessment idea\s*$/im.test(chapterContent)) {
          continue;
        }

        const chapterInfo = extractChapterInfo(chapterMatch[0]);
        const moduleInfo = modules[moduleNum] || { title: `Module ${moduleNum}` };
        const chapterTitle = chapterInfo?.title || `Chapter ${moduleNum}.${chapterNum}`;

        // Parse questions for this chapter
        const questions = parseAssessmentQuestions(markdown, moduleNum, chapterNum);

        if (questions.length === 0) {
          console.log(`   ⊘ ${chapterTitle} - no parseable questions`);
          continue;
        }

        importedChapterKeys.add(chapterKey);

        // Prepare assessment record
        const assessmentId = randomUUID();
        const now = new Date().toISOString();

        // Count question types
        const mc = questions.filter((q) => q.type === 'multiple-choice').length;
        const co = questions.filter((q) =>
          q.type === 'code-output' || q.type === 'code-challenge'
        ).length;
        const cs = questions.filter((q) => q.type === 'case-study').length;

        questionsWithOptions += mc;
        questionsWithCode += co;
        caseStudyQuestions += cs;

        // Store assessment
        await db.insert(schema.csAssessments).values({
          id: assessmentId,
          courseId,
          courseTitle,
          level: file.level,
          category,
          module: moduleNum,
          chapter: chapterNum,
          moduleTitle: moduleInfo.title,
          chapterTitle,
          totalQuestions: questions.length,
          questionsWithOptions: mc,
          questionsWithCode: co,
          caseStudyQuestions: cs,
          assessmentData: JSON.stringify(questions),
          sourceFile: file.path,
          importedAt: now,
          updatedAt: now,
        });

        // Store individual questions
        for (let i = 0; i < questions.length; i++) {
          const q = questions[i];
          const questionId = randomUUID();

          await db.insert(schema.csAssessmentQuestions).values({
            id: questionId,
            assessmentId,
            courseId,
            module: moduleNum,
            chapter: chapterNum,
            questionNumber: i + 1,
            type: q.type,
            question: q.question,
            referenceAnswer: q.referenceAnswer || (
              ['case-study', 'code-challenge'].includes(q.type) ? q.explanation : null
            ),
            explanation: q.explanation,
            options: q.options ? JSON.stringify(q.options) : null,
            correctOption: q.correctOption !== undefined ? q.correctOption : null,
            language: q.language || null,
            code: q.code || null,
            expectedOutput: q.expectedOutput || null,
            difficulty: 'Intermediate',
            keywords: JSON.stringify(extractKeywords(q.question)),
            createdAt: now,
            updatedAt: now,
          });
        }

        console.log(
          `   ✓ ${chapterTitle}: ${questions.length} Q (${mc} MC, ${co} Code, ${cs} Case)`
        );
        courseQuestionsCount += questions.length;
      }

      if (courseQuestionsCount > 0) {
        console.log(
          `\n   📊 Total for course: ${courseQuestionsCount} questions (${questionsWithOptions} with options, ${questionsWithCode} with code)`
        );
        totalImported++;
        totalQuestions += courseQuestionsCount;
      }
    }
  }

  console.log(`\n✅ Import Complete!`);
  console.log(`📊 Summary:`);
  console.log(`   • Courses imported: ${totalImported}`);
  console.log(`   • Total questions: ${totalQuestions}`);
  console.log(`\n🎯 Next steps:`);
  console.log(`   • npm run db:studio  — View imported assessments`);
  console.log(`   • Check cs_assessments and cs_assessment_questions tables`);
}

// Helper to extract keywords from question text
function extractKeywords(text) {
  const keywords = [];
  const patterns = ['Linux', 'Systemd', 'Boot', 'GRUB', 'Kernel', 'RAID', 'LVM', 'Docker', 'Kubernetes'];
  for (const pattern of patterns) {
    if (new RegExp(pattern, 'i').test(text)) {
      keywords.push(pattern.toLowerCase());
    }
  }
  return keywords;
}

// Run import
try {
  await importAssessments();
  process.exit(0);
} catch (error) {
  console.error('❌ Import failed:', error.message);
  console.error(error);
  process.exit(1);
}
