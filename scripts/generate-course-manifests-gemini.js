#!/usr/bin/env node
/**
 * generate-course-manifests-gemini.js
 *
 * Generates per-chapter animation manifests from Cohortia syllabi using the official @google/genai SDK.
 * Outputs mirror the docs/computer-science folder structure under generated/course-manifests/.
 *
 * Usage:
 *   node scripts/generate-course-manifests-gemini.js --course-id ai-for-everyone
 *   node scripts/generate-course-manifests-gemini.js --subcategory "Programming & Software Development Fundamentals" --limit 2
 *   node scripts/generate-course-manifests-gemini.js --course-id ai-for-everyone --module-index 1
 *   node scripts/generate-course-manifests-gemini.js --resume
 *   node scripts/generate-course-manifests-gemini.js --dry-run --course-id ai-for-everyone
 */

import fs from 'fs/promises';
import fsSync from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const REPO_ROOT = path.resolve(__dirname, '..');
const CATALOG_PATH = path.join(REPO_ROOT, 'generated', 'course-catalog.json');
const SOURCES_DIR = path.join(REPO_ROOT, 'generated', 'course-sources');
const OUTPUT_DIR = path.join(REPO_ROOT, 'generated', 'course-manifests');
const PUBLIC_DIR = path.join(REPO_ROOT, 'frontend', 'public', 'course-manifests');
const CACHE_DIR = path.join(REPO_ROOT, 'scripts', '.manifest-cache');
const STATE_PATH = path.join(REPO_ROOT, 'scripts', '.manifest-generation-state.json');
const DEFAULT_PROMPT_PATH = path.join(REPO_ROOT, 'scripts', 'prompt-gemini-course-manifests.md');

const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-3.5-flash';
const MIN_DELAY_MS = parseInt(process.env.GEMINI_MIN_DELAY_MS, 10) || 12000;
const REQUEST_TIMEOUT_MS = parseInt(process.env.GEMINI_REQUEST_TIMEOUT_MS, 10) || 180000;

function loadEnv() {
  const envPath = path.join(REPO_ROOT, 'backend', '.env');
  try {
    const text = fsSync.readFileSync(envPath, 'utf8');
    for (const line of text.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const [key, ...rest] = trimmed.split('=');
      if (!key) continue;
      const value = rest.join('=').trim();
      if (process.env[key] === undefined) {
        process.env[key] = value.replace(/^"|"$/g, '');
      }
    }
  } catch {
    // ignore
  }
}

loadEnv();

function getApiKeys() {
  const keys = [];
  if (process.env.GEMINI_API_KEYS) {
    keys.push(...process.env.GEMINI_API_KEYS.split(',').map((k) => k.trim()).filter(Boolean));
  }
  if (process.env.GEMINI_API_KEY && !keys.includes(process.env.GEMINI_API_KEY)) {
    keys.push(process.env.GEMINI_API_KEY);
  }
  for (let i = 1; i <= 100; i++) {
    const k = process.env[`GEMINI_API_KEY_${i}`];
    if (k && !keys.includes(k)) keys.push(k);
  }
  // Keep only keys that look like real Gemini API keys
  return keys.filter((k) => /^AIza[\w-]{30,}$/.test(k));
}

const API_KEYS = getApiKeys();
if (API_KEYS.length === 0) {
  console.warn('⚠️ No Gemini API keys found. Defaulting to empty array. Please configure GEMINI_API_KEY in backend/.env');
}

function parseArgs() {
  const args = process.argv.slice(2);
  const parsed = {
    courseId: null,
    subcategory: null,
    moduleIndex: null,
    limit: null,
    resume: false,
    dryRun: false,
    promptFile: DEFAULT_PROMPT_PATH,
  };
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--course-id' || arg === '-c') parsed.courseId = args[++i];
    else if (arg === '--subcategory' || arg === '-s') parsed.subcategory = args[++i];
    else if (arg === '--module-index' || arg === '-m') parsed.moduleIndex = parseInt(args[++i], 10);
    else if (arg === '--limit' || arg === '-l') parsed.limit = parseInt(args[++i], 10);
    else if (arg === '--resume' || arg === '-r') parsed.resume = true;
    else if (arg === '--dry-run' || arg === '-d') parsed.dryRun = true;
    else if (arg === '--prompt-file' || arg === '-p') parsed.promptFile = args[++i];
    else if (!parsed.courseId && !arg.startsWith('--')) parsed.courseId = arg;
  }
  return parsed;
}

async function readFileSafe(p, defaultValue = '') {
  try {
    return await fs.readFile(p, 'utf8');
  } catch {
    return defaultValue;
  }
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function extractJson(text) {
  const fenceMatch = text.match(/```json\s*([\s\S]*?)```/);
  if (fenceMatch) return fenceMatch[1].trim();
  const genericFence = text.match(/```\s*([\s\S]*?)```/);
  if (genericFence) return genericFence[1].trim();
  return text.trim();
}

async function callGemini(apiKey, promptText, signal) {
  // Lazy-load the official @google/genai SDK so the script can run in --dry-run
  let GoogleGenAI;
  try {
    ({ GoogleGenAI } = await import('@google/genai'));
  } catch (err) {
    throw new Error('@google/genai SDK not available. Install it with `npm i @google/genai` or run with --dry-run to skip API calls.');
  }

  const ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build'
      }
    }
  });

  const response = await ai.models.generateContent({
    model: GEMINI_MODEL,
    contents: promptText,
    config: {
      temperature: 0.7,
      responseMimeType: 'application/json',
    }
  });

  const resultText = response.text;
  if (!resultText) {
    throw new Error('Gemini returned empty content');
  }
  return resultText;
}

async function generateWithRetry(promptText, cacheKey) {
  const cachePath = path.join(CACHE_DIR, `${cacheKey}.json`);
  if (fsSync.existsSync(cachePath)) {
    const cached = await readFileSafe(cachePath);
    if (cached) {
      try {
        return JSON.parse(cached);
      } catch {
        // ignore corrupt cache
      }
    }
  }

  let lastRaw = '';
  const keysToUse = API_KEYS.length > 0 ? API_KEYS : ['DUMMY_KEY_FALLBACK_ENV'];
  const maxAttempts = Math.max(keysToUse.length * 2, 4);

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const keyIndex = attempt % keysToUse.length;
    const currentKey = keysToUse[keyIndex];

    let currentPrompt = promptText;
    if (attempt > 0) {
      const preview = lastRaw.slice(0, 200).replace(/\s+/g, ' ').trim();
      currentPrompt = `${promptText}\n\n---\n\nCRITICAL REPAIR ATTEMPT: Your previous response was either empty or invalid JSON. It started with: "${preview}...". Please regenerate the module animation manifest following the exact JSON structure specified in the guidelines. Do not output anything other than a clean, parseable JSON object.`;
    }

    try {
      const raw = await callGemini(currentKey, currentPrompt);
      lastRaw = raw;
      const jsonText = extractJson(raw);
      const parsed = JSON.parse(jsonText);
      await ensureDir(CACHE_DIR);
      await fs.writeFile(cachePath, JSON.stringify(parsed, null, 2), 'utf-8');
      return parsed;
    } catch (err) {
      console.warn(`⚠️ Attempt ${attempt + 1}/${maxAttempts} failed: ${err.message}`);
      if (attempt < maxAttempts - 1) {
        await sleep(1500 + attempt * 1000);
      }
    }
  }

  throw new Error(`All attempts failed for ${cacheKey}`);
}

async function loadState() {
  try {
    return JSON.parse(await fs.readFile(STATE_PATH, 'utf8'));
  } catch {
    return { completed: [] };
  }
}

async function saveState(state) {
  await fs.writeFile(STATE_PATH, JSON.stringify(state, null, 2), 'utf-8');
}

function buildModuleSource(courseSource, moduleIndex) {
  const module = courseSource.modules.find((m) => m.index === moduleIndex);
  if (!module) return null;
  return {
    courseId: courseSource.id,
    title: courseSource.title,
    category: courseSource.category,
    level: courseSource.level,
    type: courseSource.type,
    duration: courseSource.duration,
    provider: courseSource.provider,
    isCodeBased: courseSource.isCodeBased,
    language: courseSource.language,
    overview: courseSource.overview,
    syllabus: courseSource.syllabus,
    modules: [module],
  };
}

function mergeModuleManifests(courseId, title, designSystem, courseOverview, moduleManifests) {
  const modules = [];
  for (const mm of moduleManifests) {
    if (!mm.modules || !Array.isArray(mm.modules)) continue;
    for (const mod of mm.modules) {
      modules.push(mod);
    }
  }
  modules.sort((a, b) => (a.index ?? 0) - (b.index ?? 0));
  return {
    courseId,
    title,
    designSystem,
    courseOverview,
    modules,
  };
}

async function main() {
  const args = parseArgs();
  const promptText = await readFileSafe(args.promptFile);
  if (!promptText) {
    console.error(`❌ Prompt file not found: ${args.promptFile}`);
    process.exit(1);
  }

  if (!fsSync.existsSync(CATALOG_PATH)) {
    console.log(`⚠️ Course catalog not found at ${CATALOG_PATH}. Creating a mock catalog for demonstration.`);
    await ensureDir(path.dirname(CATALOG_PATH));
    await fs.writeFile(CATALOG_PATH, JSON.stringify({
      courses: [
        {
          id: "ai-for-everyone",
          title: "AI For Everyone",
          category: "Data Science, Machine Learning & AI",
          sourcePath: "generated/course-sources/ai-for-everyone.json"
        }
      ]
    }, null, 2));
  }

  const catalogData = JSON.parse(await fs.readFile(CATALOG_PATH, 'utf8'));
  const allCourses = catalogData.courses || [];

  let courses = allCourses;
  if (args.courseId) {
    courses = courses.filter((c) => c.id === args.courseId);
  }
  if (args.subcategory) {
    courses = courses.filter((c) => c.category?.toLowerCase() === args.subcategory.toLowerCase());
  }
  if (args.limit) {
    courses = courses.slice(0, args.limit);
  }

  if (courses.length === 0) {
    console.error('❌ No courses matched the filters.');
    process.exit(1);
  }

  console.log(`🎬 Generating manifests for ${courses.length} course(s)\n`);

  const state = await loadState();
  await ensureDir(OUTPUT_DIR);
  await ensureDir(PUBLIC_DIR);

  for (const course of courses) {
    const relativeSourcePath = course.sourcePath.replace(/^generated\/course-sources\//, '');
    const sourcePath = path.join(SOURCES_DIR, relativeSourcePath);
    
    if (!fsSync.existsSync(sourcePath)) {
      console.log(`⚠️ Course source not found at ${sourcePath}. Generating a dummy course source...`);
      await ensureDir(path.dirname(sourcePath));
      await fs.writeFile(sourcePath, JSON.stringify({
        id: course.id,
        title: course.title,
        category: "Data Science, Machine Learning & AI",
        level: "Beginner",
        type: "Course",
        duration: "6 hrs",
        provider: "Cohortia",
        isCodeBased: false,
        language: null,
        overview: "A comprehensive introductory syllabus",
        syllabus: "Chapter 1.1: What is AI?",
        modules: [
          {
            index: 1,
            title: "Foundations of Intelligence",
            goal: "Differentiate core terms, navigate the historical evolution, and master Narrow AI taxonomy.",
            chapters: [
              {
                index: "1.1",
                title: "What is Artificial Intelligence?",
                fullTitle: "Ch 1.1 — What is Artificial Intelligence?",
                sections: {
                  learningObjectives: "Define AI and understand ANI vs AGI",
                  detailedContent: "Deep-dive content here",
                  keyConcepts: "Turing test, Narrow AI, Super AI",
                  handsOnActivity: "Reflect on AI used today",
                  assessment: "One question multiple choice",
                  aiNote: "Ensure easy explanations"
                }
              }
            ]
          }
        ]
      }, null, 2));
    }

    const courseSource = JSON.parse(await fs.readFile(sourcePath, 'utf8'));
    const relativeDir = path.relative(SOURCES_DIR, path.dirname(sourcePath));
    const outDir = path.join(OUTPUT_DIR, relativeDir);
    const publicOutDir = path.join(PUBLIC_DIR, relativeDir);
    await ensureDir(outDir);
    await ensureDir(publicOutDir);

    const outPath = path.join(outDir, `${course.id}.json`);
    const publicOutPath = path.join(publicOutDir, `${course.id}.json`);

    if (args.resume && fsSync.existsSync(outPath)) {
      console.log(`⏭️  Already generated: ${course.id}`);
      continue;
    }

    console.log(`🎨 ${course.id} — ${courseSource.modules.length} module(s)`);

    const moduleManifests = [];
    let designSystem = null;
    let courseOverview = null;

    const modulesToProcess = args.moduleIndex != null
      ? courseSource.modules.filter((m) => m.index === args.moduleIndex)
      : courseSource.modules;

    for (const module of modulesToProcess) {
      const moduleSource = buildModuleSource(courseSource, module.index);
      const fullPrompt = `${promptText}\n\n---\n\nINPUT COURSE MODULE JSON:\n${JSON.stringify(moduleSource)}`;
      const cacheKey = `${course.id}-m${module.index}`;

      if (args.dryRun) {
        console.log(`  🧪 Would generate module ${module.index}: ${module.title}`);
        continue;
      }

      try {
        const manifest = await generateWithRetry(fullPrompt, cacheKey);
        moduleManifests.push(manifest);
        if (manifest.designSystem && !designSystem) designSystem = manifest.designSystem;
        if (manifest.courseOverview && !courseOverview) courseOverview = manifest.courseOverview;
        console.log(`  ✅ Module ${module.index}: ${module.title}`);
      } catch (err) {
        console.error(`  ❌ Module ${module.index} failed: ${err.message}`);
      }

      if (modulesToProcess.length > 1) {
        await sleep(MIN_DELAY_MS);
      }
    }

    if (args.dryRun) continue;

    if (moduleManifests.length === 0) {
      console.error(`  ❌ No modules generated for ${course.id}, skipping save.`);
      continue;
    }

    const combined = mergeModuleManifests(
      course.id,
      courseSource.title,
      designSystem,
      courseOverview,
      moduleManifests
    );

    await fs.writeFile(outPath, JSON.stringify(combined, null, 2), 'utf-8');
    await fs.writeFile(publicOutPath, JSON.stringify(combined, null, 2), 'utf-8');

    if (!state.completed.includes(course.id)) {
      state.completed.push(course.id);
      await saveState(state);
    }

    console.log(`  💾 Saved: ${outPath}\n`);
  }

  console.log('🎉 Manifest generation complete!');
}

main().catch((err) => {
  console.error('❌ Manifest generation failed:', err);
  process.exit(1);
});
