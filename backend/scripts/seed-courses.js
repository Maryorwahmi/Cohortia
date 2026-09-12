import 'dotenv/config';
import { db } from '../src/db/index.js';
import { tracks, lessons } from '../src/db/schema.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COURSES_DIR = path.resolve(__dirname, '../../../docs/computer-science');
const now = new Date().toISOString();
const incremental = process.argv.includes('--incremental');

function parseFrontmatter(content) {
  const data = {};

  // 1. Standard YAML frontmatter between ---
  const fmMatch = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
  if (fmMatch) {
    for (const line of fmMatch[1].split('\n')) {
      const idx = line.indexOf(':');
      if (idx === -1) continue;
      const key = line.slice(0, idx).trim();
      let value = line.slice(idx + 1).trim();
      value = value.replace(/^["']|["']$/g, '');
      data[key] = value;
    }
  }

  // 2. YAML inside ```yaml ... ``` blocks that appear before the first heading
  const firstHeadingIdx = content.search(/^#{1,2}\s/m);
  const searchBoundary = firstHeadingIdx > 0 ? content.slice(0, firstHeadingIdx) : content;
  const yamlBlockMatch = searchBoundary.match(/```yaml([\s\S]*?)```/)
    || searchBoundary.match(/```yaml\n---\n([\s\S]*?)\n---\n?\n?$/);
  if (yamlBlockMatch) {
    for (const line of yamlBlockMatch[1].split('\n')) {
      const idx = line.indexOf(':');
      if (idx === -1) continue;
      const key = line.slice(0, idx).trim();
      let value = line.slice(idx + 1).trim();
      value = value.replace(/^["']|["']$/g, '');
      data[key] = value;
    }
  }

  // 3. Blockquote metadata: > **Key:** `value`
  const blockquoteMatches = content.matchAll(/^>\s*\*\*(.+?)\*\*[:\s]+`?(.+?)`?\s*$/gm);
  for (const match of blockquoteMatches) {
    const key = match[1].trim().replace(/:$/, '');
    let value = match[2].trim();
    value = value.replace(/^["']|["']$/g, '');
    data[key] = value;
  }

  // 4. Plain key:value header lines before first heading (no --- wrapper)
  if (Object.keys(data).length === 0) {
    const firstHeadingIndex = content.search(/^#{1,2}\s/m);
    const headerSection = firstHeadingIndex > 0 ? content.slice(0, firstHeadingIndex) : '';
    let inCodeBlock = false;
    for (const line of headerSection.split('\n')) {
      if (line.trim().startsWith('```')) {
        inCodeBlock = !inCodeBlock;
        continue;
      }
      if (inCodeBlock) continue;
      const idx = line.indexOf(':');
      if (idx === -1) continue;
      const key = line.slice(0, idx).trim();
      let value = line.slice(idx + 1).trim();
      value = value.replace(/^["']|["']$/g, '');
      if (key && value && !key.startsWith('#')) {
        data[key] = value;
      }
    }
  }

  // Normalize common keys (case-insensitive, space/underscore variants)
  const normalized = {};
  for (const [key, value] of Object.entries(data)) {
    const lower = key.toLowerCase().replace(/[^a-z0-9]+/g, '');
    normalized[lower] = value;
  }

  return {
    ...data,
    course_id: normalized.courseid || normalized.id || data.course_id || data['Course ID'],
    course_title: normalized.title || normalized.coursetitle || data.course_title || data.Title,
    course_subcategory: normalized.subcategory || data.course_subcategory || data.subcategory,
    course_level: normalized.level || data.course_level || data.level,
    course_duration: normalized.duration || data.course_duration || data.duration,
    course_skills: normalized.skills || data.course_skills || data.skills,
    provider: normalized.provider || data.Provider,
    course_type: normalized.type || normalized.coursetype || data.Type || data['Course Type'],
    certification: normalized.certification || data.Certification,
  };
}

function parseSyllabus(content) {
  const modules = [];
  const lines = content.split('\n');

  let currentModule = null;
  let currentChapter = null;
  let section = null; // 'overview' | 'syllabus' | null
  const overviewLines = [];
  const syllabusLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.match(/^#{2,3}\s+Syllabus\s+Structure/i)) {
      section = 'syllabus';
      continue;
    }

    if (line.match(/^#{2,3}\s+Course\s+Overview/i)) {
      section = 'overview';
      continue;
    }

    if (line.startsWith('## ') && section !== null) {
      section = null;
    }

    if (section === 'overview' && line.trim() && !line.startsWith('#')) {
      overviewLines.push(line.trim());
    }

    if (section === 'syllabus' && line.trim()) {
      syllabusLines.push(line);
    }

    const moduleMatch = line.match(/^## Module (\d+):\s*(.+)$/);
    if (moduleMatch) {
      currentModule = {
        index: parseInt(moduleMatch[1], 10),
        title: moduleMatch[2].trim(),
        goal: null,
        chapters: [],
      };
      modules.push(currentModule);
      currentChapter = null;
      continue;
    }

    const capstoneMatch = line.match(/^## (Final Capstone Project|Capstone Project|Final Project)$/i);
    if (capstoneMatch) {
      currentModule = {
        index: modules.length + 1,
        title: capstoneMatch[1].trim(),
        goal: null,
        chapters: [],
      };
      modules.push(currentModule);
      currentChapter = null;
      continue;
    }

    // Capture module goal before the first chapter of the module
    if (currentModule && !currentChapter) {
      const goalMatch = line.match(/\*\*Module Goal:\*\*\s*(.+)/i) || line.match(/^>\s*\*\*Goal:\*\*\s*`?(.+?)`?\s*$/i);
      if (goalMatch) {
        currentModule.goal = goalMatch[1].trim();
      } else if (line.trim() && !line.startsWith('#') && !line.startsWith('*') && !line.startsWith('>') && !currentModule.goal) {
        // First plain sentence after the module heading is treated as the goal if no explicit marker
        currentModule.goal = line.trim();
      }
    }

    const chapterMatch = line.match(/^### Chapter (\d+)\.(\d+)\s*[—–-]\s*(.+)$/);
    if (chapterMatch && currentModule) {
      currentChapter = {
        moduleIndex: currentModule.index,
        chapterIndex: parseInt(chapterMatch[2], 10),
        title: `Ch ${chapterMatch[1]}.${chapterMatch[2]} — ${chapterMatch[3].trim()}`,
        rawTitle: chapterMatch[3].trim(),
        contentStart: i,
      };
      currentModule.chapters.push(currentChapter);
      continue;
    }

    const projectMatch = line.match(/^### (Project Option \d+:\s*.+|Project:\s*.+)$/i);
    if (projectMatch && currentModule) {
      currentChapter = {
        moduleIndex: currentModule.index,
        chapterIndex: currentModule.chapters.length + 1,
        title: projectMatch[1].trim(),
        rawTitle: projectMatch[1].trim(),
        contentStart: i,
      };
      currentModule.chapters.push(currentChapter);
    }
  }

  for (const module of modules) {
    for (let c = 0; c < module.chapters.length; c++) {
      const chapter = module.chapters[c];
      const start = chapter.contentStart;
      let end = lines.length;

      const nextChapter = module.chapters[c + 1];
      if (nextChapter) {
        end = nextChapter.contentStart;
      } else {
        for (let j = start + 1; j < lines.length; j++) {
          if (lines[j].match(/^## /)) {
            end = j;
            break;
          }
        }
      }

      chapter.content = lines.slice(start + 1, end).join('\n').trim();
    }
  }

  const overview = overviewLines.join(' ').trim();
  const syllabus = syllabusLines.join('\n').trim();
  return { overview, syllabus, modules };
}

function extractSections(chapterContent) {
  const sections = {
    main: chapterContent,
    learningObjectives: null,
    detailedContent: null,
    keyConcepts: null,
    handsOn: null,
    assessment: null,
    aiNote: null,
  };

  const headingRegex = /\n####\s+(.+?)\s*\n/g;
  const headings = [];
  let m;
  while ((m = headingRegex.exec(chapterContent)) !== null) {
    headings.push({ title: m[1].trim().toLowerCase(), index: m.index, end: headingRegex.lastIndex });
  }

  const findHeading = (name) => headings.find((h) => h.title.includes(name));

  const learningObjectivesHeading = findHeading('learning objective');
  const detailedContentHeading = findHeading('detailed lesson content');
  const keyConceptsHeading = findHeading('key concept');
  const handsOnHeading = findHeading('hands-on activity');
  const assessmentHeading = findHeading('assessment idea');
  const aiNoteHeading = findHeading('ai generation note');

  const sliceSection = (heading) => {
    if (!heading) return null;
    const start = heading.end;
    const nextHeading = headings.find((h) => h.index > heading.index);
    const end = nextHeading ? nextHeading.index : chapterContent.length;
    return chapterContent.slice(start, end).trim();
  };

  sections.learningObjectives = sliceSection(learningObjectivesHeading);
  sections.detailedContent = sliceSection(detailedContentHeading);
  sections.keyConcepts = sliceSection(keyConceptsHeading);
  sections.handsOn = sliceSection(handsOnHeading);
  sections.assessment = sliceSection(assessmentHeading);
  sections.aiNote = sliceSection(aiNoteHeading);

  // Build a backwards-compatible main blob from learning objectives + detailed content + key concepts
  const mainParts = [];
  if (sections.learningObjectives) mainParts.push(`#### Learning objectives\n${sections.learningObjectives}`);
  if (sections.detailedContent) mainParts.push(`#### Detailed lesson content\n${sections.detailedContent}`);
  if (sections.keyConcepts) mainParts.push(`#### Key concepts\n${sections.keyConcepts}`);
  sections.main = mainParts.join('\n\n') || chapterContent;

  return sections;
}

const CODE_LANGUAGES = new Set([
  'python', 'py', 'cpp', 'c++', 'c', 'java', 'javascript', 'js', 'typescript', 'ts',
  'jsx', 'tsx', 'go', 'golang', 'rust', 'ruby', 'php', 'swift', 'kotlin', 'sql',
  'bash', 'shell', 'sh', 'powershell', 'csharp', 'cs', 'scala', 'r', 'matlab',
  'dart', 'perl', 'lua', 'html', 'css', 'sass', 'scss'
]);

function detectCodeBase(content) {
  const fenceRegex = /```([a-z0-9+#]+)?\n([\s\S]*?)```/gi;
  const counts = {};
  let totalFences = 0;
  let match;
  while ((match = fenceRegex.exec(content)) !== null) {
    totalFences++;
    const lang = (match[1] || '').toLowerCase().replace(/\+\+/g, 'pp').replace(/#/g, 'sharp');
    const normalizedLang = lang
      .replace('cpp', 'cpp')
      .replace('c' + 'pp', 'cpp')
      .replace('csharp', 'csharp')
      .replace('py', 'python')
      .replace('golang', 'go')
      .replace('sh', 'bash')
      .replace('shell', 'bash');
    if (CODE_LANGUAGES.has(match[1] ? match[1].toLowerCase() : '')) {
      counts[match[1].toLowerCase()] = (counts[match[1].toLowerCase()] || 0) + 1;
    }
  }

  const codeFences = Object.values(counts).reduce((a, b) => a + b, 0);
  const isCodeBased = totalFences > 0 && codeFences / totalFences > 0.25;

  let language = null;
  if (isCodeBased) {
    const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
    language = top ? top[0] : null;
  }

  return { isCodeBased, language };
}

function parseAssessmentQuestions(text) {
  if (!text) return [];
  const questions = [];
  const lines = text.split('\n');
  let current = null;

  for (const line of lines) {
    const qMatch = line.match(/^(\d+)\.\s*\*\*Question:\*\*\s*(.+)$/);
    if (qMatch) {
      if (current) questions.push(current);
      current = { question: qMatch[2].trim(), options: [], answer: '', explanation: '' };
      continue;
    }

    const optMatch = line.match(/^\s*([A-D])\)\s*(.+)$/);
    if (current && optMatch) {
      current.options.push({ label: optMatch[1], text: optMatch[2].trim() });
      continue;
    }

    const ansMatch = line.match(/^\s*\*\*Correct Answer:\*\*\s*(.+)$/);
    if (current && ansMatch) {
      current.answer = ansMatch[1].trim();
      continue;
    }

    if (current && line.trim().startsWith('**Explanation:**')) {
      current.explanation = line.replace(/^\s*\*\*Explanation:\*\*\s*/, '').trim();
    }
  }

  if (current) questions.push(current);
  return questions;
}

function buildModuleProject(module) {
  const projectTitle = `${module.title.replace(/[^a-zA-Z0-9\s]/g, '').split(' ').slice(0, 4).join(' ')} Project`;
  const deliverables = module.chapters
    .slice(0, 3)
    .map((ch) => `- Apply concepts from "${ch.rawTitle}"`)
    .join('\n');

  return {
    title: projectTitle,
    content: `## ${projectTitle}

**Module:** ${module.title}

**Goal:** Demonstrate your understanding of the module's core concepts by building a practical deliverable.

**Deliverables:**
${deliverables}
- Submit your work through the Projects page for review.

**Success Criteria:**
- All required concepts are applied correctly.
- Work is well-documented and reproducible.
- Submission is complete and on time.
`,
  };
}

function buildCourseExam(courseTitle, modules) {
  const questionCount = Math.min(20, modules.length * 2);
  return {
    title: `Final Exam: ${courseTitle}`,
    content: `## Final Exam: ${courseTitle}

This exam covers the key concepts from all modules in the course.

**Modules covered:**
${modules.map((m) => `- ${m.title}`).join('\n')}

**Instructions:**
- Answer all questions to the best of your ability.
- You can retake the exam as many times as needed.
- A passing score is 70% or higher.

**Number of questions:** ${questionCount}
`,
  };
}

function normalizeDifficulty(level) {
  if (!level) return 'Beginner';
  const lower = level.toLowerCase();
  if (lower.includes('advanced')) return 'Advanced';
  if (lower.includes('intermediate')) return 'Intermediate';
  return 'Beginner';
}

function normalizeDuration(duration) {
  if (!duration || duration.toLowerCase() === 'exam') return 'Self-paced';
  return duration;
}

async function seedCourses() {
  console.log('🌱 Seeding Computer Science courses from docs/computer-science...\n');

  if (!fs.existsSync(COURSES_DIR)) {
    console.error(`❌ Courses directory not found: ${COURSES_DIR}`);
    process.exit(1);
  }

  const files = [];
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        files.push(fullPath);
      }
    }
  }
  walk(COURSES_DIR);

  let insertedCourses = 0;
  let insertedLessons = 0;
  let skipped = 0;
  const lessonBatch = [];
  const BATCH_SIZE = 100;
  const existingTrackIds = new Set(
    incremental
      ? (await db.select({ id: tracks.id }).from(tracks)).map((track) => track.id)
      : []
  );
  const processedCourseIds = new Set();

  if (!incremental) {
    await db.delete(tracks);
    await db.delete(lessons);
    console.log('🗑️  Cleared existing tracks and lessons\n');
  } else {
    console.log('🔄 Incremental mode: preserving existing tracks, lessons, and enrollments\n');
  }

  async function flushLessons() {
    if (lessonBatch.length === 0) return;
    await db.insert(lessons).values(lessonBatch);
    insertedLessons += lessonBatch.length;
    lessonBatch.length = 0;
  }

  for (const filePath of files) {
    const content = fs.readFileSync(filePath, 'utf-8');

    const hasSyllabusHeading = /^#{1,2}\s+Syllabus Structure\b/m.test(content);
    const hasModuleHeading = /^## Module \d+:\s*.+$/m.test(content) || /^## (Final Capstone Project|Capstone Project|Final Project)$/im.test(content);
    if (!hasSyllabusHeading && !hasModuleHeading) {
      skipped++;
      continue;
    }

    const fm = parseFrontmatter(content);
    const { overview, syllabus, modules } = parseSyllabus(content);

    if (modules.length === 0) {
      skipped++;
      continue;
    }

    const filenameCourseId = path.basename(filePath, '.md');
    const metadataCourseId = String(fm.course_id || '').trim();
    const courseId = /^[a-z0-9]+(?:-[a-z0-9]+)+$/.test(metadataCourseId)
      ? metadataCourseId.toLowerCase()
      : filenameCourseId.toLowerCase();
    if (processedCourseIds.has(courseId)) {
      continue;
    }
    processedCourseIds.add(courseId);

    if (incremental && existingTrackIds.has(courseId)) {
      continue;
    }
    const title = fm.course_title || 'Untitled Course';
    const category = fm.course_subcategory || 'Computer Science';
    const difficulty = normalizeDifficulty(fm.course_level);
    const duration = normalizeDuration(fm.course_duration);
    const skills = fm.course_skills ? JSON.stringify(fm.course_skills.split(',').map(s => s.trim())) : '[]';
    const { isCodeBased, language } = detectCodeBase(content);

    await db.insert(tracks).values({
      id: courseId,
      title,
      description: overview || `${title} — ${category}` || 'No description available.',
      overview: overview || null,
      syllabus: syllabus || null,
      category,
      difficulty,
      duration,
      image: null,
      skills,
      isCodeBased,
      language,
      provider: fm.provider || null,
      level: fm.course_level || null,
      courseType: fm.course_type || null,
      certification: fm.certification || null,
      createdAt: now,
      updatedAt: now,
    });
    insertedCourses++;

    const seenLessonIds = new Set();
    let order = 1;

    for (const [moduleArrayIndex, module] of modules.entries()) {
      let chapterSeq = 1;

      for (const chapter of module.chapters) {
        const sections = extractSections(chapter.content);
        const baseId = `${courseId}-m${moduleArrayIndex + 1}-c${chapterSeq}`;

        // Main lesson
        const lessonId = `${baseId}-lesson`;
        if (!seenLessonIds.has(lessonId)) {
          seenLessonIds.add(lessonId);
          const assessmentQuestions = sections.assessment ? parseAssessmentQuestions(sections.assessment) : [];
          lessonBatch.push({
            id: lessonId,
            trackId: courseId,
            moduleIndex: module.index,
            moduleTitle: module.title,
            moduleGoal: module.goal || null,
            title: chapter.title,
            description: chapter.rawTitle,
            content: sections.main || '',
            type: 'lesson',
            duration: '15 min',
            order: order++,
            metadata: JSON.stringify({
              learningObjectives: sections.learningObjectives || null,
              detailedContent: sections.detailedContent || null,
              keyConcepts: sections.keyConcepts || null,
              handsOnPreview: sections.handsOn ? sections.handsOn.slice(0, 800) : null,
              assessmentQuestions,
              isCodeBased,
              language,
            }),
            createdAt: now,
            updatedAt: now,
          });
          if (lessonBatch.length >= BATCH_SIZE) await flushLessons();
        }

        // Hands-on activity
        if (sections.handsOn && sections.handsOn.length > 50) {
          const handsOnId = `${baseId}-practice`;
          if (!seenLessonIds.has(handsOnId)) {
            seenLessonIds.add(handsOnId);
            lessonBatch.push({
              id: handsOnId,
              trackId: courseId,
              moduleIndex: module.index,
              moduleTitle: module.title,
              moduleGoal: module.goal || null,
              title: `${chapter.rawTitle} — Hands-on Activity`,
              description: 'Practical exercise to apply what you learned.',
              content: sections.handsOn,
              type: 'practice',
              duration: '30 min',
              order: order++,
              metadata: JSON.stringify({ handsOnActivity: sections.handsOn, isCodeBased, language }),
              createdAt: now,
              updatedAt: now,
            });
            if (lessonBatch.length >= BATCH_SIZE) await flushLessons();
          }
        }

        // Assessment / quiz
        if (sections.assessment && sections.assessment.length > 50) {
          const questions = parseAssessmentQuestions(sections.assessment);
          const quizId = `${baseId}-quiz`;
          if (!seenLessonIds.has(quizId)) {
            seenLessonIds.add(quizId);
            lessonBatch.push({
              id: quizId,
              trackId: courseId,
              moduleIndex: module.index,
              moduleTitle: module.title,
              moduleGoal: module.goal || null,
              title: `${chapter.rawTitle} — Assessment`,
              description: `Knowledge check with ${questions.length || 'multiple'} questions.`,
              content: sections.assessment,
              type: 'quiz',
              duration: '10 min',
              order: order++,
              metadata: JSON.stringify({ questions, isCodeBased, language }),
              createdAt: now,
              updatedAt: now,
            });
            if (lessonBatch.length >= BATCH_SIZE) await flushLessons();
          }
        }

        chapterSeq++;
      }

      // Module project (skip if capstone module already has projects)
      const isCapstone = module.title.toLowerCase().includes('capstone') || module.title.toLowerCase().includes('project');
      if (!isCapstone && module.chapters.length > 0) {
        const project = buildModuleProject(module);
        const projectId = `${courseId}-m${moduleArrayIndex + 1}-project`;
        if (!seenLessonIds.has(projectId)) {
          seenLessonIds.add(projectId);
          lessonBatch.push({
            id: projectId,
            trackId: courseId,
            moduleIndex: module.index,
            moduleTitle: module.title,
            moduleGoal: module.goal || null,
            title: project.title,
            description: `Apply your learning from ${module.title} to a real-world scenario.`,
            content: project.content,
            type: 'project',
            duration: '2 hrs',
            order: order++,
            metadata: JSON.stringify({ isCodeBased, language }),
            createdAt: now,
            updatedAt: now,
          });
          if (lessonBatch.length >= BATCH_SIZE) await flushLessons();
        }
      }
    }

    // Final course exam
    if (modules.length > 0) {
      const exam = buildCourseExam(title, modules);
      const examId = `${courseId}-exam`;
      lessonBatch.push({
        id: examId,
        trackId: courseId,
        moduleIndex: modules.length + 1,
        moduleTitle: 'Final Assessment',
        title: exam.title,
        description: 'Comprehensive final exam covering all course modules.',
        content: exam.content,
        type: 'exam',
        duration: '60 min',
        order: order++,
        createdAt: now,
        updatedAt: now,
      });
      if (lessonBatch.length >= BATCH_SIZE) await flushLessons();
    }
  }

  await flushLessons();
  console.log(`✅ Inserted ${insertedCourses} courses`);
  console.log(`✅ Inserted ${insertedLessons} lessons`);
  console.log(`⏭️  Skipped ${skipped} files without syllabus`);
  console.log('\n🎉 Course seeding complete!');
  process.exit(0);
}

seedCourses().catch((err) => {
  console.error('❌ Course seeding failed:', err);
  process.exit(1);
});
