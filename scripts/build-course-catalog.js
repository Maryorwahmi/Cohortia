#!/usr/bin/env node
/**
 * build-course-catalog.js
 *
 * Reads every Computer Science syllabus markdown file and writes a source JSON
 * for each course under generated/course-sources/, mirroring the folder layout
 * of docs/computer-science/. Also writes generated/course-catalog.json with the
 * master list of courses.
 */

import fs from 'fs/promises';
import fsSync from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const REPO_ROOT = path.resolve(__dirname, '..');
const COURSES_DIR = path.join(REPO_ROOT, 'docs', 'computer-science');
const OUTPUT_DIR = path.join(REPO_ROOT, 'generated', 'course-sources');
const CATALOG_PATH = path.join(REPO_ROOT, 'generated', 'course-catalog.json');

const CODE_LANGUAGES = new Set([
  'python', 'py', 'cpp', 'c++', 'c', 'java', 'javascript', 'js', 'typescript', 'ts',
  'jsx', 'tsx', 'go', 'golang', 'rust', 'ruby', 'php', 'swift', 'kotlin', 'sql',
  'bash', 'shell', 'sh', 'powershell', 'csharp', 'cs', 'scala', 'r', 'matlab',
  'dart', 'perl', 'lua', 'html', 'css', 'sass', 'scss'
]);

function parseFrontmatter(content) {
  const data = {};

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

  const blockquoteMatches = content.matchAll(/^>\s*\*\*(.+?)\*\*[:\s]+`?(.+?)`?\s*$/gm);
  for (const match of blockquoteMatches) {
    const key = match[1].trim().replace(/:$/, '');
    let value = match[2].trim();
    value = value.replace(/^["']|["']$/g, '');
    data[key] = value;
  }

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
  let section = null;
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

    if (currentModule && !currentChapter) {
      const goalMatch = line.match(/\*\*Module Goal:\*\*\s*(.+)/i) || line.match(/^>\s*\*\*Goal:\*\*\s*`?(.+?)`?\s*$/i);
      if (goalMatch) {
        currentModule.goal = goalMatch[1].trim();
      } else if (line.trim() && !line.startsWith('#') && !line.startsWith('*') && !line.startsWith('>') && !currentModule.goal) {
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
    learningObjectives: null,
    detailedContent: null,
    keyConcepts: null,
    handsOnActivity: null,
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
  sections.handsOnActivity = sliceSection(handsOnHeading);
  sections.assessment = sliceSection(assessmentHeading);
  sections.aiNote = sliceSection(aiNoteHeading);

  return sections;
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

function detectCodeBase(content) {
  const fenceRegex = /```([a-z0-9+#]+)?\n([\s\S]*?)```/gi;
  const counts = {};
  let totalFences = 0;
  let match;
  while ((match = fenceRegex.exec(content)) !== null) {
    totalFences++;
    const lang = match[1] ? match[1].toLowerCase() : '';
    if (CODE_LANGUAGES.has(lang)) {
      counts[lang] = (counts[lang] || 0) + 1;
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

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function main() {
  console.log('📚 Building course catalog...\n');

  if (!fsSync.existsSync(COURSES_DIR)) {
    console.error(`❌ Courses directory not found: ${COURSES_DIR}`);
    process.exit(1);
  }

  await ensureDir(OUTPUT_DIR);

  const files = [];
  function walk(dir) {
    for (const entry of fsSync.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        files.push(fullPath);
      }
    }
  }
  walk(COURSES_DIR);

  const catalog = [];

  for (const filePath of files) {
    const relativePath = path.relative(COURSES_DIR, filePath);
    const content = await fs.readFile(filePath, 'utf-8');

    if (!content.includes('## Syllabus Structure')) {
      console.log(`⏭️  Skipping (no syllabus): ${relativePath}`);
      continue;
    }

    const fm = parseFrontmatter(content);
    const { overview, syllabus, modules } = parseSyllabus(content);
    const { isCodeBased, language } = detectCodeBase(content);

    const courseId = fm.course_id || path.basename(filePath, '.md');
    const dirName = path.dirname(relativePath);
    const outDir = path.join(OUTPUT_DIR, dirName);
    await ensureDir(outDir);

    const enrichedModules = modules.map((module) => ({
      index: module.index,
      title: module.title,
      goal: module.goal,
      chapters: module.chapters.map((chapter) => {
        const sections = extractSections(chapter.content);
        return {
          index: chapter.chapterIndex,
          title: chapter.rawTitle,
          fullTitle: chapter.title,
          sections: {
            learningObjectives: sections.learningObjectives,
            detailedContent: sections.detailedContent,
            keyConcepts: sections.keyConcepts,
            handsOnActivity: sections.handsOnActivity,
            assessment: sections.assessment,
            aiNote: sections.aiNote,
          },
          assessmentQuestions: sections.assessment ? parseAssessmentQuestions(sections.assessment) : [],
        };
      }),
    }));

    const courseSource = {
      id: courseId,
      title: fm.course_title || 'Untitled Course',
      category: fm.course_subcategory || 'Computer Science',
      level: fm.course_level || 'Beginner',
      type: fm.course_type || 'Course',
      duration: fm.course_duration || 'Self-paced',
      provider: fm.provider || 'Cohortia',
      certification: fm.certification || null,
      skills: fm.course_skills ? fm.course_skills.split(',').map((s) => s.trim()).filter(Boolean) : [],
      isCodeBased,
      language,
      sourcePath: path.relative(REPO_ROOT, filePath).replace(/\\/g, '/'),
      overview,
      syllabus,
      modules: enrichedModules,
    };

    const outPath = path.join(outDir, `${courseId}.json`);
    await fs.writeFile(outPath, JSON.stringify(courseSource, null, 2), 'utf-8');

    const relativeDir = path.dirname(relativePath);
    const manifestPath = path.relative(REPO_ROOT, path.join(REPO_ROOT, 'generated', 'course-manifests', relativeDir, `${courseId}.json`)).replace(/\\/g, '/');
    catalog.push({
      id: courseId,
      title: courseSource.title,
      category: courseSource.category,
      level: courseSource.level,
      isCodeBased,
      language,
      sourcePath: path.relative(REPO_ROOT, outPath).replace(/\\/g, '/'),
      manifestPath,
      manifestUrl: manifestPath.replace(/^generated\//, '/'),
    });

    console.log(`✅ ${courseId}`);
  }

  await fs.writeFile(CATALOG_PATH, JSON.stringify({ generatedAt: new Date().toISOString(), courses: catalog }, null, 2), 'utf-8');

  // Mirror catalog to frontend public dir so the app can fetch it at runtime
  const publicCatalogDir = path.join(REPO_ROOT, 'frontend', 'public', 'course-manifests');
  await ensureDir(publicCatalogDir);
  await fs.copyFile(CATALOG_PATH, path.join(publicCatalogDir, 'catalog.json'));

  console.log(`\n✅ Catalog built: ${catalog.length} courses`);
  console.log(`📁 Sources: ${OUTPUT_DIR}`);
  console.log(`📄 Catalog: ${CATALOG_PATH}`);
  console.log(`📄 Public catalog: ${path.join(publicCatalogDir, 'catalog.json')}`);
}

main().catch((err) => {
  console.error('❌ Catalog build failed:', err);
  process.exit(1);
});
