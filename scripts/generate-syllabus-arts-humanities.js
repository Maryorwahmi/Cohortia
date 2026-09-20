#!/usr/bin/env node
/**
 * generate-syllabus-arts-humanities.js
 *
 * Cohortia Syllabus Generator — Arts & Humanities Edition
 * Chunked, multi-key, subcategory-aware. Generates in-depth, chapter-level syllabi
 * matching the manual quality standard for Arts & Humanities courses.
 *
 * Designed for the free Gemini tier (5 RPM / 200K TPM / 20 RPD per key).
 * Uses multiple keys, model fallback, chapter batching, and smart retries to
 * minimize wasted requests and maximize successful course completions.
 *
 * Usage:
 *   node scripts/generate-syllabus-arts-humanities.js --course-id <id>
 *   node scripts/generate-syllabus-arts-humanities.js --subcategory "History & Archaeology"
 *   node scripts/generate-syllabus-arts-humanities.js --subcategory "Literature & Creative Writing"
 *   node scripts/generate-syllabus-arts-humanities.js --subcategory "Philosophy & Ethics" --auto
 *   node scripts/generate-syllabus-arts-humanities.js --subcategory "Art History & Visual Arts" --auto
 *   node scripts/generate-syllabus-arts-humanities.js --resume
 *   node scripts/generate-syllabus-arts-humanities.js --dry-run --course-id <id>
 *   node scripts/generate-syllabus-arts-humanities.js --batch-size 3 --course-id <id>
 *   node scripts/generate-syllabus-arts-humanities.js --max-tokens 32768 --course-id <id>
 *
 * Env tuning:
 *   GEMINI_MAX_TOKENS=65536
 *   GEMINI_CHAPTERS_PER_REQUEST=4
 *   GEMINI_MIN_DELAY_MS=13000
 *   GEMINI_REQUEST_TIMEOUT_MS=180000
 */

import fs from 'fs/promises';
import fsSync from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function loadDotEnvFile(envPath) {
  try {
    const text = await fs.readFile(envPath, 'utf8');
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
    // ignore missing file
  }
}

loadDotEnvFile(path.resolve(__dirname, '../backend/.env'));

// ───────────────────────────────────────────────────────────────
// CONFIGURATION
// ───────────────────────────────────────────────────────────────
const REPO_ROOT = path.resolve(__dirname, '..');
const CATALOG_PATH = path.join(REPO_ROOT, 'docs', 'arts-humanities', 'catalog-courses-by-subcategory.json');
const STATE_PATH = path.join(REPO_ROOT, 'scripts', '.syllabus-generation-state.json');
const DEFAULT_PROMPT_FILE_PATH = path.join(REPO_ROOT, 'docs', 'arts-humanities', 'prompt-kimi-work-arts-humanities-syllabi.md');

function getPromptFilePath(subcategoryName) {
  if (!subcategoryName) return DEFAULT_PROMPT_FILE_PATH;

  // Subcategory slug -> existing prompt file name mapping for files whose
  // names do not exactly match the slugified subcategory name.
  const slugToPromptFile = {
    'history-archaeology': 'prompt-kimi-work-history-archaeology-syllabi.md',
  };

  const slug = slugifySubcategory(subcategoryName);
  const mappedFileName = slugToPromptFile[slug];

  const candidates = mappedFileName
    ? [path.join(REPO_ROOT, 'docs', 'arts-humanities', mappedFileName)]
    : [];
  candidates.push(path.join(REPO_ROOT, 'docs', 'arts-humanities', `prompt-kimi-work-${slug}-syllabi.md`));

  // Synchronous check is acceptable here because this runs once at startup.
  for (const candidate of candidates) {
    try {
      if (fsSync.existsSync(candidate)) return candidate;
    } catch {
      // try next candidate
    }
  }
  return DEFAULT_PROMPT_FILE_PATH;
}
const PILOT_SYLLABI_DIR = path.join(REPO_ROOT, 'docs', 'arts-humanities');
const CACHE_DIR = path.join(REPO_ROOT, 'scripts', '.syllabus-cache');

// Gemini model — primary model with large output capacity
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

// Output token budget per API call. Gemini 2.5 Flash supports up to 65,536 tokens.
let MAX_TOKENS_PER_CHUNK = parseInt(process.env.GEMINI_MAX_TOKENS, 10) || 65536;

// Chapters to generate per request. Smaller batches complete more reliably,
// avoiding expensive re-prompts for missing chapters.
let CHAPTERS_PER_REQUEST = parseInt(process.env.GEMINI_CHAPTERS_PER_REQUEST, 10) || 10;

// Max retries per key before moving to next key (only for transient network errors)
const MAX_RETRIES_PER_KEY = 1;

// Delay between retries (ms)
const RETRY_DELAY_MS = 700;

// Minimum expected file size for a valid syllabus (bytes)
const MIN_SYLLABUS_SIZE = 50000; // 50 KB

// ───────────────────────────────────────────────────────────────
// CLI ARGUMENT PARSING
// ───────────────────────────────────────────────────────────────
function parseArgs() {
  const args = process.argv.slice(2);
  const parsed = {
    courseId: null,
    subcategory: null,
    auto: false,
    resume: false,
    skipSearch: false,
    dryRun: false,
    promptFile: null,
    batchSize: null,
    maxTokens: null,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--course-id' || arg === '-c') parsed.courseId = args[++i];
    else if (arg === '--subcategory' || arg === '-s') parsed.subcategory = args[++i];
    else if (arg === '--auto' || arg === '-a') parsed.auto = true;
    else if (arg === '--resume' || arg === '-r') parsed.resume = true;
    else if (arg === '--skip-search') parsed.skipSearch = true;
    else if (arg === '--dry-run' || arg === '-d') parsed.dryRun = true;
    else if (arg === '--prompt-file') parsed.promptFile = args[++i];
    else if (arg === '--batch-size') parsed.batchSize = parseInt(args[++i], 10);
    else if (arg === '--max-tokens') parsed.maxTokens = parseInt(args[++i], 10);
    else if (!parsed.courseId && !arg.startsWith('--')) parsed.courseId = arg;
  }
  return parsed;
}

// ───────────────────────────────────────────────────────────────
// UTILITY: Normalization, Files, Directories
// ───────────────────────────────────────────────────────────────
function normalizeId(id) {
  return id?.toLowerCase().trim();
}

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function normalizeSubcategory(name) {
  // The arts catalog appends course counts to subcategory names (e.g. "History & Archaeology (15)").
  // Strip that suffix before building paths or matching names.
  return (name || '').replace(/\s*\(\d+\)\s*$/, '').trim();
}

function slugifySubcategory(name) {
  return slugify(normalizeSubcategory(name));
}

function getLevelFolder(level) {
  const l = (level || 'Beginner').toLowerCase();
  if (l.includes('foundations')) return 'foundations';
  if (l.includes('beginner')) return 'beginner';
  if (l.includes('intermediate')) return 'intermediate';
  if (l.includes('advanced')) return 'advanced';
  return 'beginner'; // default
}

function getOutputPath(course) {
  const safeSubcategory = slugifySubcategory(course.subcategory || 'general');
  const targetDir = path.join(REPO_ROOT, 'docs', 'arts-humanities', getLevelFolder(course.level), safeSubcategory);
  const fileName = `${course.id}.md`;
  return { targetDir, outputPath: path.join(targetDir, fileName) };
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function fileExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function getFileSize(p) {
  try {
    const stat = await fs.stat(p);
    return stat.size;
  } catch {
    return 0;
  }
}

async function readFileSafe(p, defaultValue = '') {
  try {
    return await fs.readFile(p, 'utf8');
  } catch {
    return defaultValue;
  }
}

function stripMarkdownFences(text) {
  if (!text) return '';
  return text
    .replace(/^```(?:markdown|md)?\s*\n/i, '')
    .replace(/\n```\s*$/g, '')
    .trim();
}

// ───────────────────────────────────────────────────────────────
// CACHE — Persist generated modules for resume / key-switch
// ───────────────────────────────────────────────────────────────
function getCacheDir(courseId) {
  return path.join(CACHE_DIR, courseId);
}

function getCachePath(courseId, moduleNum) {
  return path.join(getCacheDir(courseId), `module-${moduleNum}.md`);
}

async function saveModuleCache(courseId, moduleNum, moduleText) {
  const cachePath = getCachePath(courseId, moduleNum);
  await fs.mkdir(path.dirname(cachePath), { recursive: true });
  await fs.writeFile(cachePath, moduleText, 'utf8');
}

async function loadModuleCache(courseId, moduleNum) {
  const cachePath = getCachePath(courseId, moduleNum);
  try {
    return await fs.readFile(cachePath, 'utf8');
  } catch {
    return null;
  }
}

async function clearCourseCache(courseId) {
  const dir = getCacheDir(courseId);
  try {
    const files = await fs.readdir(dir);
    for (const f of files) {
      await fs.unlink(path.join(dir, f));
    }
    await fs.rmdir(dir);
  } catch {
    // ignore
  }
}

function parseExistingModules(content, totalModules) {
  const found = new Set();
  for (let m = 1; m <= totalModules; m++) {
    const hasHeading = new RegExp(`#+\\s*Module\\s*${m}[:\\s]`, 'i').test(content);
    const hasChapters = new RegExp(`###\\s+Chapter\\s*${m}\\.\d+`, 'i').test(content);
    if (hasHeading || hasChapters) {
      found.add(m);
    }
  }
  return Array.from(found).sort((a, b) => a - b);
}


// ───────────────────────────────────────────────────────────────
// CATALOG LOADING
// ───────────────────────────────────────────────────────────────
async function loadCatalog() {
  const file = await fs.readFile(CATALOG_PATH, 'utf8');
  return JSON.parse(file);
}

function findCourse(catalog, courseId) {
  return catalog.subcategories
    .flatMap((sub) => sub.courses)
    .find((item) => normalizeId(item.id) === normalizeId(courseId));
}

function getCoursesInSubcategory(catalog, subcategoryName) {
  const target = normalizeSubcategory(subcategoryName).toLowerCase();
  const sub = catalog.subcategories.find(
    (s) => normalizeSubcategory(s.name).toLowerCase() === target
  );
  return sub ? sub.courses : [];
}

// ───────────────────────────────────────────────────────────────
// STATE MANAGEMENT (Progress Tracking)
// ───────────────────────────────────────────────────────────────
async function loadState() {
  try {
    const data = await fs.readFile(STATE_PATH, 'utf8');
    return JSON.parse(data);
  } catch {
    return { completed: [], inProgress: null, errors: [], startedAt: new Date().toISOString() };
  }
}

async function saveState(state) {
  await fs.writeFile(STATE_PATH, JSON.stringify(state, null, 2), 'utf8');
}

async function markCompleted(state, courseId) {
  if (!state.completed.includes(courseId)) state.completed.push(courseId);
  state.inProgress = null;
  await saveState(state);
}

async function setInProgress(state, courseId, moduleIndex = 0) {
  state.inProgress = { courseId, moduleIndex, updatedAt: new Date().toISOString() };
  await saveState(state);
}

async function logError(state, courseId, error) {
  state.errors.push({ courseId, error: String(error), timestamp: new Date().toISOString() });
  await saveState(state);
}

// ───────────────────────────────────────────────────────────────
// WEB RESEARCH (SerpAPI + Google Custom Search)
// ───────────────────────────────────────────────────────────────
async function fetchSerpApi(query) {
  const apiKey = process.env.SERPAPI_KEY;
  if (!apiKey) return null;

  const url = new URL('https://serpapi.com/search.json');
  url.searchParams.set('engine', 'google');
  url.searchParams.set('q', query);
  url.searchParams.set('api_key', apiKey);
  url.searchParams.set('num', '5');

  try {
    const response = await fetch(url.href, { timeout: 35000 });
    if (!response.ok) return null;
    const data = await response.json();
    const items = data.organic_results || [];
    return items.slice(0, 5).map((item) => ({
      title: item.title || '',
      snippet: item.snippet || '',
      link: item.link || '',
    }));
  } catch {
    return null;
  }
}

async function fetchGoogleCustomSearch(query) {
  const apiKey = process.env.GOOGLE_SEARCH_API_KEY;
  const cx = process.env.GOOGLE_SEARCH_ENGINE_ID;
  if (!apiKey || !cx) return null;

  const url = new URL('https://www.googleapis.com/customsearch/v1');
  url.searchParams.set('key', apiKey);
  url.searchParams.set('cx', cx);
  url.searchParams.set('q', query);
  url.searchParams.set('num', '5');

  try {
    const response = await fetch(url.href, { timeout: 35000 });
    if (!response.ok) return null;
    const data = await response.json();
    const items = data.items || [];
    return items.slice(0, 5).map((item) => ({
      title: item.title || '',
      snippet: item.snippet || '',
      link: item.link || '',
    }));
  } catch {
    return null;
  }
}

async function researchCourse(course) {
  const query = `${course.title} ${course.provider || ''} syllabus curriculum`;
  let results = await fetchSerpApi(query);
  if (!results || results.length === 0) {
    results = await fetchGoogleCustomSearch(query);
  }
  if (!results || results.length === 0) return null;

  return results
    .map((item) => `- ${item.title}: ${item.snippet} ${item.link}`)
    .join('\n');
}

// ───────────────────────────────────────────────────────────────
// PROMPT FILE INGESTION — Inject the full quality standard
// ───────────────────────────────────────────────────────────────
async function readPromptFile(promptFilePath) {
  const content = await readFileSafe(promptFilePath, '');
  if (!content) {
    console.warn('   ⚠️  Prompt file not found at', promptFilePath);
    console.warn('   Using built-in prompts instead.');
  }
  return content;
}

function extractPromptSections(content) {
  if (!content) return { rules: '', format: '', aiNotes: '' };

  // Extract critical sections from the prompt file
  const sections = {
    rules: '',
    format: '',
    aiNotes: '',
    depth: '',
    branding: '',
  };

  // Extract module/chapter guidelines
  const moduleGuidelineMatch = content.match(/## 3\. CRITICAL: Module and Chapter Count Guidelines[\s\S]*?(?=##\s+\d+\.|---|$)/);
  if (moduleGuidelineMatch) sections.rules = moduleGuidelineMatch[0].trim();

  // Extract format requirements
  const formatMatch = content.match(/## 7\. Required Syllabus Format[\s\S]*?(?=##\s+\d+\.|---|$)/);
  if (formatMatch) sections.format = formatMatch[0].trim();

  // Extract AI generation notes
  const aiMatch = content.match(/## 8\. AI Generation Note[\s\S]*?(?=##\s+\d+\.|---|$)/);
  if (aiMatch) sections.aiNotes = aiMatch[0].trim();

  // Extract depth requirements
  const depthMatch = content.match(/## 7\.3 Depth requirements[\s\S]*?(?=##\s+\d+\.|---|$)/);
  if (depthMatch) sections.depth = depthMatch[0].trim();

  // Extract branding
  const brandingMatch = content.match(/## 11\. Cohortia Branding and Ownership[\s\S]*?(?=##\s+\d+\.|---|$)/);
  if (brandingMatch) sections.branding = brandingMatch[0].trim();

  return sections;
}

// ───────────────────────────────────────────────────────────────
// GEMINI API WITH KEY ROTATION
// ───────────────────────────────────────────────────────────────
// ───────────────────────────────────────────────────────────────
// GLOBAL KEY TRACKER — RPM, TPM, RPD aware round-robin
// ───────────────────────────────────────────────────────────────
const keyState = {
  exhaustedKeys: new Set(),        // Keys that hit daily limit or all retries failed
  keyRequestTimes: new Map(),      // keyIdx -> [timestamps] for RPM tracking
  keyTokenCounts: new Map(),       // keyIdx -> { timestamps: [], tokens: [] } for TPM tracking
  keyLocks: new Map(),             // keyIdx -> Promise for concurrency control
  lastSuccessfulKeyIdx: -1,        // Last key that worked
  currentKeyIdx: 0,                // Next key to try
  rpmLimit: parseInt(process.env.GEMINI_RPM_LIMIT, 10) || 5,    // Free tier: 5 RPM
  tpmLimit: parseInt(process.env.GEMINI_TPM_LIMIT, 10) || 200000, // Free tier: 200K TPM
  rpdLimit: parseInt(process.env.GEMINI_RPD_LIMIT, 10) || 20,   // Free tier: 20 RPD
  minDelayMs: parseInt(process.env.GEMINI_MIN_DELAY_MS, 10) || 13000, // ~5 RPM = 12s, use 13s for safety
  requestTimeoutMs: parseInt(process.env.GEMINI_REQUEST_TIMEOUT_MS, 10) || 350000, // 5 minutes for large outputs
};

function estimateTokens(text) {
  // Rough estimate: ~4 characters per token for English text
  return Math.ceil((text || '').length / 3.5);
}

function getKeyUsageToday(keyIdx) {
  const times = keyState.keyRequestTimes.get(keyIdx) || [];
  const now = Date.now();
  const oneMinuteAgo = now - 60000;
  const oneDayAgo = now - 86400000;
  const recentRequests = times.filter((t) => t > oneMinuteAgo);
  const dailyRequests = times.filter((t) => t > oneDayAgo);
  return { recent: recentRequests.length, daily: dailyRequests.length, times };
}

function getKeyTokenUsageMinute(keyIdx) {
  const tokenData = keyState.keyTokenCounts.get(keyIdx) || { timestamps: [], tokens: [] };
  const now = Date.now();
  const oneMinuteAgo = now - 60000;
  let totalTokens = 0;
  for (let i = 0; i < tokenData.timestamps.length; i++) {
    if (tokenData.timestamps[i] > oneMinuteAgo) {
      totalTokens += tokenData.tokens[i] || 0;
    }
  }
  return totalTokens;
}

function recordKeyUsage(keyIdx, tokenCount = 0) {
  const times = keyState.keyRequestTimes.get(keyIdx) || [];
  times.push(Date.now());
  keyState.keyRequestTimes.set(keyIdx, times);

  const tokenData = keyState.keyTokenCounts.get(keyIdx) || { timestamps: [], tokens: [] };
  tokenData.timestamps.push(Date.now());
  tokenData.tokens.push(tokenCount);
  keyState.keyTokenCounts.set(keyIdx, tokenData);
}

function isKeyAvailable(keyIdx) {
  if (keyState.exhaustedKeys.has(keyIdx)) return false;
  const usage = getKeyUsageToday(keyIdx);
  if (usage.daily >= keyState.rpdLimit) {
    console.warn(`  Key ${keyIdx + 1} hit daily limit (${usage.daily}/${keyState.rpdLimit}). Marking exhausted.`);
    keyState.exhaustedKeys.add(keyIdx);
    return false;
  }
  return true;
}

async function waitForKeyAvailability(keyIdx, estimatedTokens = 0) {
  const usage = getKeyUsageToday(keyIdx);

  // RPM check
  if (usage.recent >= keyState.rpmLimit) {
    const oldestRecent = usage.times.find((t) => t > Date.now() - 60000);
    const waitMs = oldestRecent ? (oldestRecent + 60000 - Date.now() + 500) : keyState.minDelayMs;
    console.warn(`  Key ${keyIdx + 1} at RPM limit (${usage.recent}/${keyState.rpmLimit}). Waiting ${Math.ceil(waitMs / 1000)}s...`);
    await new Promise((r) => setTimeout(r, Math.max(waitMs, keyState.minDelayMs)));
  }

  // TPM check
  const currentTokens = getKeyTokenUsageMinute(keyIdx);
  if (currentTokens + estimatedTokens > keyState.tpmLimit) {
    const waitMs = keyState.minDelayMs;
    console.warn(`  Key ${keyIdx + 1} near TPM limit (${currentTokens}/${keyState.tpmLimit} + ${estimatedTokens}). Waiting ${Math.ceil(waitMs / 1000)}s...`);
    await new Promise((r) => setTimeout(r, waitMs));
  }

  // Always add a small delay between requests to the same key
  const lastTimes = keyState.keyRequestTimes.get(keyIdx) || [];
  if (lastTimes.length > 0) {
    const lastTime = lastTimes[lastTimes.length - 1];
    const sinceLast = Date.now() - lastTime;
    if (sinceLast < keyState.minDelayMs) {
      const waitMs = keyState.minDelayMs - sinceLast;
      await new Promise((r) => setTimeout(r, waitMs));
    }
  }
}

function getNextAvailableKeyIndex(keys) {
  // Try round-robin starting from current position
  for (let offset = 0; offset < keys.length; offset++) {
    const idx = (keyState.currentKeyIdx + offset) % keys.length;
    if (isKeyAvailable(idx)) {
      keyState.currentKeyIdx = (idx + 1) % keys.length;
      return idx;
    }
  }
  // All keys exhausted
  return -1;
}

function resetExhaustedKeys() {
  if (keyState.exhaustedKeys.size > 0) {
    console.warn(`  Resetting ${keyState.exhaustedKeys.size} exhausted key(s) for retry...`);
    keyState.exhaustedKeys.clear();
  }
}

function logUsageStats() {
  const keys = getGeminiKeys();
  console.log('\n📊 API Usage Summary');
  console.log('─'.repeat(60));
  for (let i = 0; i < keys.length; i++) {
    const usage = getKeyUsageToday(i);
    const tokens = getKeyTokenUsageMinute(i);
    const status = usage.daily >= keyState.rpdLimit ? '🔴 RPD exhausted' : usage.daily >= keyState.rpdLimit * 0.8 ? '🟠 Near RPD' : '🟢 OK';
    console.log(`  Key ${i + 1}: ${usage.daily}/${keyState.rpdLimit} RPD | ${usage.recent}/${keyState.rpmLimit} RPM | ${tokens}/${keyState.tpmLimit} TPM | ${status}`);
  }
  console.log('─'.repeat(60));
}
function getGeminiKeys() {
  const keys = [];
  if (process.env.GEMINI_API_KEYS) {
    keys.push(...process.env.GEMINI_API_KEYS.split(',').map((k) => k.trim()).filter(Boolean));
  }
  for (let i = 1; i <= 20; i++) {
    const key = process.env[`GEMINI_API_KEY_${i}`];
    if (key) keys.push(key);
  }
  if (process.env.GEMINI_API_KEY) keys.push(process.env.GEMINI_API_KEY);
  return [...new Set(keys)];
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function callGeminiDirect({ systemPrompt, userPrompt, maxTokens = MAX_TOKENS_PER_CHUNK, temperature = 0.5 }) {
  const keys = getGeminiKeys();
  const model = GEMINI_MODEL;
  if (keys.length === 0) {
    return {
      success: false,
      error: 'No Gemini API keys found. Set GEMINI_API_KEY, GEMINI_API_KEYS (comma-separated), or GEMINI_API_KEY_1, GEMINI_API_KEY_2, etc.',
      fatal: true,
    };
  }

  const estimatedInputTokens = estimateTokens(systemPrompt + '\n\n' + userPrompt);
  const estimatedTotalTokens = estimatedInputTokens + maxTokens;

  if (estimatedInputTokens > keyState.tpmLimit) {
    console.warn(`  ⚠️  Estimated input tokens (${estimatedInputTokens}) exceed TPM limit (${keyState.tpmLimit}). Prompt may be rejected.`);
  }

  const failures = [];
  let allKeysRpdExhausted = false;

  for (let globalRound = 0; globalRound < MAX_RETRIES_PER_KEY + 1; globalRound++) {
    if (globalRound > 0) {
      // Check if the only reason we failed is daily limit exhaustion
      const allAtRpd = keys.every((_, idx) => {
        const usage = getKeyUsageToday(idx);
        return usage.daily >= keyState.rpdLimit;
      });
      if (allAtRpd) {
        return {
          success: false,
          error: `All ${keys.length} keys have reached their daily request limit (${keyState.rpdLimit}). Resume tomorrow.`,
          fatal: false,
          dailyLimit: true,
        };
      }
      console.warn(`  All keys failed round ${globalRound}. Waiting 90s before retry...`);
      await sleep(90000);
      resetExhaustedKeys();
    }

    const endpoints = [
        `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent`,
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
    ];

    for (let keyIdx = 0; keyIdx < keys.length; keyIdx++) {
        if (!isKeyAvailable(keyIdx)) continue;

        await waitForKeyAvailability(keyIdx, estimatedTotalTokens);

        let endpointAttempts = 0;
        for (const baseUrl of endpoints) {
          endpointAttempts++;
          try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), keyState.requestTimeoutMs);

            recordKeyUsage(keyIdx, estimatedInputTokens);
            const response = await fetch(`${baseUrl}?key=${keys[keyIdx]}`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents: [{ role: 'user', parts: [{ text: `${systemPrompt}\n\n${userPrompt}` }] }],
                generationConfig: { maxOutputTokens: maxTokens, temperature },
              }),
              signal: controller.signal,
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
              const errorText = await response.text();

              if (response.status === 404) {
                if (endpointAttempts < endpoints.length) {
                  console.warn(`  Key ${keyIdx + 1} ${model} 404 on ${baseUrl.includes('v1beta') ? 'v1beta' : 'v1'}. Trying alternate endpoint...`);
                  continue;
                }
                failures.push(`Key ${keyIdx + 1} ${model}: 404`);
                break;
              }

              if (response.status === 429) {
                console.warn(`  Key ${keyIdx + 1} ${model} rate-limited (HTTP 429). Moving to next key...`);
                keyState.exhaustedKeys.add(keyIdx);
                failures.push(`Key ${keyIdx + 1} ${model}: 429`);
                break;
              }

              if (response.status === 403) {
                console.warn(`  Key ${keyIdx + 1} ${model} forbidden (HTTP 403). Marking exhausted.`);
                keyState.exhaustedKeys.add(keyIdx);
                failures.push(`Key ${keyIdx + 1} ${model}: 403`);
                break;
              }

              if (response.status === 503) {
                console.warn(`  Model ${model} unavailable (HTTP 503). Moving to next key/model...`);
                failures.push(`Key ${keyIdx + 1} ${model}: 503`);
                break;
              }

              failures.push(`Key ${keyIdx + 1} ${model}: HTTP ${response.status}`);
              break;
            }

            keyState.lastSuccessfulKeyIdx = keyIdx;
            keyState.currentKeyIdx = (keyIdx + 1) % keys.length;

            const data = await response.json();
            const candidate = data.candidates?.[0];
            if (!candidate) {
              failures.push(`Key ${keyIdx + 1} ${model}: no candidates`);
              break;
            }

            const text = candidate.content?.parts?.[0]?.text || '';
            const usage = data.usageMetadata || {};
            const inputTokens = usage.promptTokenCount || estimatedInputTokens;
            const outputTokens = usage.candidatesTokenCount || estimateTokens(text);

            if (candidate.finishReason === 'MAX_TOKENS') {
              console.warn(`  Output truncated by token limit (${maxTokens}). Generated ${text.length} chars (~${outputTokens} tokens).`);
              return { success: true, text, truncated: true, model, keyIdx, inputTokens, outputTokens };
            }

            if (candidate.finishReason && candidate.finishReason !== 'STOP') {
              console.warn(`  Finish reason: ${candidate.finishReason}`);
            }

            return { success: true, text, truncated: false, model, keyIdx, inputTokens, outputTokens };
          } catch (error) {
            const endpointName = baseUrl.includes('v1beta') ? 'v1beta' : 'v1';

            if (error.name === 'AbortError') {
              console.warn(`  Key ${keyIdx + 1} ${model} timed out on ${endpointName}. Moving to next key...`);
              failures.push(`Key ${keyIdx + 1} ${model}: timeout`);
              break;
            }

            if (error.message.includes('fetch failed')) {
              console.warn(`  Key ${keyIdx + 1} ${model} network error on ${endpointName}. Moving to next key...`);
              failures.push(`Key ${keyIdx + 1} ${model}: network error`);
              break;
            }

            if (error.message.includes('404')) {
              if (endpointAttempts < endpoints.length) continue;
            }

            console.warn(`  Key ${keyIdx + 1} ${model} ${endpointName} failed: ${error.message}. Moving to next key...`);
            failures.push(`Key ${keyIdx + 1} ${model}: ${error.message}`);
            break;
          }
    }
    }
  }

  return {
    success: false,
    error: `All ${keys.length} keys failed for model ${model}. Last failures: ${failures.slice(-8).join('; ')}`,
    retryable: true,
  };
}

async function callGemini({ systemPrompt, userPrompt, maxTokens, temperature }) {
  try {
    const backend = await import(path.resolve(__dirname, '../backend/src/lib/gemini.js'));
    if (backend.callGemini) {
      const result = await backend.callGemini({ systemPrompt, userPrompt, maxTokens, temperature });
      if (result && result.success) return result;
    }
  } catch (e) {
    // Backend library not available or failed; fall through to direct API
  }
  return callGeminiDirect({ systemPrompt, userPrompt, maxTokens, temperature });
}

// ───────────────────────────────────────────────────────────────
// PROMPT BUILDING — The quality of the syllabus depends on this
// ───────────────────────────────────────────────────────────────

function getModuleGuidelines(level) {
  const l = (level || 'Beginner').toLowerCase();
  if (l.includes('foundations')) {
    return { minModules: 3, maxModules: 5, chaptersPerModule: '2–5', totalChapters: '6–25' };
  }
  if (l.includes('beginner')) {
    return { minModules: 5, maxModules: 6, chaptersPerModule: '3–5', totalChapters: '15–30' };
  }
  if (l.includes('intermediate')) {
    return { minModules: 5, maxModules: 8, chaptersPerModule: '4–8', totalChapters: '20–64' };
  }
  if (l.includes('advanced')) {
    return { minModules: 8, maxModules: 12, chaptersPerModule: '6–10', totalChapters: '48–120' };
  }
  return { minModules: 5, maxModules: 6, chaptersPerModule: '3–5', totalChapters: '15–30' };
}

function buildSystemPrompt(promptSections) {
  let prompt = `You are an expert Cohortia curriculum designer. You write detailed, in-depth, chapter-level syllabi for Arts & Humanities courses. Your output is markdown. You never write boilerplate or generic outlines. Every chapter must contain real, course-specific teaching content that a human instructor could use to deliver a lesson.

ABSOLUTE RULES — VIOLATING ANY OF THESE WILL CAUSE THE OUTPUT TO BE REJECTED:
1. Write FULL PARAGRAPHS, not bullet lists, in the "Detailed lesson content" section. Multiple paragraphs per chapter.
2. Include real primary source excerpts, close reading passages, theoretical frameworks, historical context, and practical scenarios specific to the course topic. Include short excerpts from texts, artworks, musical pieces, films, or documents with analysis.
3. Every assessment must include both the question AND the correct answer, model response, or rubric.
4. Every AI generation note must be specific, concrete, and actionable (duration, format, visuals, examples).
5. Be thorough. Do NOT artificially compress content. Cover all necessary topics even if it exceeds typical expectations.
6. Use the tone of a professional, encouraging, scholarly instructor.
7. Follow the EXACT formatting structure requested. Do NOT deviate from it.
8. When the content is extensive, use the UPPER END of the module/chapter range.
9. Include common mistakes, interpretive pitfalls, and scholarly cautions where applicable.
10. Build progressively: start simple, add complexity.
11. You MUST use the course title, subcategory, skills, provider, and level provided in the COURSE METADATA to shape every module and chapter. Do not write generic content that could apply to any course with a similar title.
12. If web research is provided, use it to ground the syllabus in the actual curriculum, texts, thinkers, and topics of the named course.

WHAT YOU MUST NEVER DO:
- NEVER write a module as a bullet list of topics (e.g., "* Topic 1", "* Topic 2"). This is NOT acceptable.
- NEVER write chapter content as an outline or list of topics. Each chapter must be a full prose lesson with paragraphs.
- NEVER skip the 6 required sections of any chapter.
- NEVER write "this module covers..." or "in this chapter you will learn..." as filler content. Jump straight into teaching.
- NEVER produce a "Syllabus Structure" section that is just a list of module headings with bullets underneath. It MUST be a proper markdown table with | Module # | Theme | Chapters | columns.`;

  if (promptSections && promptSections.rules) {
    prompt += `\n\n${promptSections.rules}`;
  }
  if (promptSections && promptSections.depth) {
    prompt += `\n\n${promptSections.depth}`;
  }
  if (promptSections && promptSections.aiNotes) {
    prompt += `\n\n${promptSections.aiNotes}`;
  }
  if (promptSections && promptSections.branding) {
    prompt += `\n\n${promptSections.branding}`;
  }

  return prompt;
}

function buildHeaderAndOverviewPrompt(course, searchSummary, promptSections) {
  const guidelines = getModuleGuidelines(course.level);

  let prompt = `
Generate ONLY the HEADER METADATA, COURSE OVERVIEW, and SYLLABUS STRUCTURE TABLE for this Cohortia course.

⚠️ CRITICAL CONSTRAINT: This is ONLY the outline/planning phase. Do NOT write any chapter content, module lessons, primary source excerpts, artwork examples, detailed explanations, or teaching material. Write ONLY the metadata, overview, and a simple structure table.

COURSE METADATA:
- Title: ${course.title}
- Course ID: ${course.id}
- Provider: Cohortia
- Original reference: ${course.provider || 'Various'} / ${course.platform || 'Online'}
- Platform: Cohortia
- Level: ${course.level || 'Beginner'}
- Type: ${course.type || 'Course'}
- Duration: ${course.duration || 'Self-paced'}
- Cost: Included with Cohortia
- URL: Cohortia course page (original reference: ${course.url || '(URL not verified)'})
- Certification: Cohortia Certificate of Completion
- Category: Arts & Humanities
- Subcategory: ${course.subcategory}
- Skills: ${(course.skills || []).join(', ')}
- Source catalog: docs/arts-humanities/catalog-courses-by-subcategory.json

${searchSummary ? `WEB RESEARCH:\n${searchSummary}\n` : ''}

STRUCTURE GUIDELINES (MANDATORY — do not deviate):
- Level: ${course.level || 'Beginner'}
- Minimum modules: ${guidelines.minModules}
- Maximum modules: ${guidelines.maxModules}
- Chapters per module: ${guidelines.chaptersPerModule}
- Approximate total chapters: ${guidelines.totalChapters}
- The course is ${course.type === 'Professional Certificate' || course.type === 'Specialization' ? 'a comprehensive specialization' : 'a full course'}. Use the upper end of the range if the content is extensive.
- CRITICAL: Do NOT artificially compress content. The user prefers thoroughness over brevity. Use the upper end of the range or even exceed it if the subject matter demands it.

${promptSections?.format || ''}

OUTPUT REQUIREMENTS — FOLLOW EXACTLY OR OUTPUT WILL BE REJECTED:

1. Start with the Cohortia metadata header block.
2. Write a Course Overview (3–5 paragraphs, ~400-600 words). Include 6–10 specific learning outcomes as bullet points.
3. The Syllabus Structure section MUST be a SINGLE markdown table with EXACTLY these columns: | Module # | Theme | Chapters |
   - The table MUST use proper markdown syntax: | col1 | col2 | col3 |
   - Each row on its own line.
   - The Theme column must contain short, descriptive module names (not bullet lists underneath).
   - The Chapters column must contain ONLY a single number (e.g., "8", "10").
   - DO NOT put the chapter list inside the table cell. The number alone is sufficient.
4. After the table, write "Total chapters: {N}" where N is the sum of all chapters.
5. After that, write ONLY "---" and STOP. No module headings, no bullet lists, no content.

EXAMPLE OF CORRECT TABLE FORMAT:
| Module # | Theme | Chapters |
|----------|-------|----------|
| 1 | Advanced OOP | 8 |
| 2 | Memory Management | 9 |
| 3 | Exception Handling | 9 |
| 4 | Templates | 9 |
| 5 | STL Containers | 9 |
| 6 | STL Algorithms | 8 |
| 7 | Move Semantics | 8 |
| 8 | Concurrency | 10 |
| 9 | Advanced Templates | 9 |
| 10 | I/O Streams | 8 |
| 11 | Best Practices | 8 |
| 12 | Performance | 9 |

Total chapters: 104
---

WHAT YOU MUST NEVER DO:
- NEVER write module headings like "## Module 1: Name" followed by bullet lists of topics.
- NEVER write the structure as anything other than a markdown table.
- NEVER write chapter titles or topic lists inside the table cells.
- NEVER write any content after the horizontal rule.
- Output ONLY markdown. No explanations outside the syllabus content.
`;

  return prompt;
}

function buildModulePrompt(course, moduleIndex, moduleName, chapterCount, previousContext, totalModules, promptSections) {
  return `
Generate MODULE ${moduleIndex + 1} of ${totalModules}: "${moduleName}" for the Cohortia course "${course.title}".

COURSE CONTEXT:
- Course ID: ${course.id}
- Title: ${course.title}
- Level: ${course.level || 'Beginner'}
- Subcategory: ${course.subcategory}
- Skills: ${(course.skills || []).join(', ')}

PREVIOUSLY GENERATED CONTEXT (for consistency):
${previousContext}

THIS MODULE REQUIREMENTS:
- Module number: ${moduleIndex + 1} of ${totalModules}
- Module theme: ${moduleName}
- Number of chapters: ${chapterCount}
- ⚠️ CRITICAL: You MUST generate EXACTLY ${chapterCount} chapters. Do not skip any chapters. Do not stop early.
- Each chapter must be numbered as "Chapter ${moduleIndex + 1}.1 — Title", "Chapter ${moduleIndex + 1}.2 — Title", etc., through "Chapter ${moduleIndex + 1}.${chapterCount} — Title"
- Module goal: Write a one-sentence goal for this module.

⚠️ CHAPTER COUNT ENFORCEMENT:
- You are required to produce EXACTLY ${chapterCount} chapters in this module.
- If you cannot fit all ${chapterCount} chapters in one response due to length, generate as many as possible and I will request the remainder.
- Do NOT write a summary or conclusion that substitutes for missing chapters.
- Every chapter from 1 to ${chapterCount} must have ALL 6 required sections.

WHAT YOU MUST NEVER DO — OUTPUT WILL BE REJECTED IF YOU DO ANY OF THESE:
1. NEVER write the module as a list of topics or bullet points. Each chapter must be a FULL lesson with paragraphs.
2. NEVER write chapter content as an outline (e.g., "1. Topic A", "2. Topic B"). Chapters must be prose with full sentences and paragraphs.
3. NEVER write just a heading and a few bullet points under it. That is NOT a chapter.
4. NEVER skip any of the 6 required sections. Every single chapter must have all 6.
5. NEVER write filler text like "this chapter covers..." or "in this module you will learn...". Start teaching immediately.

EACH CHAPTER MUST INCLUDE ALL OF THESE SECTIONS:
1. #### Learning objectives (3–5 bullet points, specific and measurable)
2. #### Detailed lesson content (MULTIPLE FULL PARAGRAPHS — this is the longest section. Include real explanations, primary source excerpts, close reading passages, theoretical frameworks, historical context, analogies, common mistakes, interpretive pitfalls, and practical scenarios. NOT bullet points. Write at least 600–800 words per chapter.)
3. #### Key concepts (bullet list of terms and definitions)
4. #### Hands-on activity (a concrete practical exercise: a writing prompt, close reading exercise, analysis task, discussion prompt, creative exercise, or archival/museum activity. Include a template or starter material where applicable.)
5. #### Assessment idea (a quiz question, essay prompt, analysis challenge, or reflection WITH the correct answer, model response, or rubric. Include at least 2 questions per chapter.)
6. #### AI generation note (specific instructions for AI content generation: format, duration, tone, visual style, examples, interactive element. Be specific: "8-minute documentary clip with..." or "10-minute lecture video with primary source close reading...")

WRITING STYLE RULES:
- Write like a knowledgeable instructor speaking directly to the learner.
- Use real examples specific to the course topic, not generic placeholder text.
- Include primary source excerpts, close reading passages, and theoretical frameworks in the correct discipline, period, and methodological approach for the course.
- Explain WHY interpretations matter, not just WHAT happened.
- Address common interpretive pitfalls and beginner mistakes.
- Build progressively: start simple, add complexity within the module.
- Do NOT write "this chapter covers..." or "in this module you will learn..." as the main content. Jump straight into the teaching.
- Include common mistakes, misconceptions, and how to avoid them.
- Include at least one real-world application, historical scenario, or textual case study per chapter.
- ⚠️ CRITICAL: This is for the course "${course.title}" in the "${course.subcategory}" subcategory. Use the skills list (${(course.skills || []).join(', ')}) to choose the correct texts, thinkers, artworks, methods, and frameworks. Do not write generic content that could apply to any course in this field.

${promptSections?.format || ''}

OUTPUT ONLY the module content. Start with the module heading and goal. Do NOT include the course header or overview again. End with a horizontal rule (---).
`;
}

function buildModuleBatchPrompt(course, moduleIndex, moduleName, startChapter, endChapter, totalChapters, previousContext, totalModules, promptSections, isFirstBatch, isLastBatch, generatedChapters = []) {
  const moduleNum = moduleIndex + 1;
  const batchCount = endChapter - startChapter + 1;
  const chapterList = Array.from({ length: batchCount }, (_, i) => `Chapter ${moduleNum}.${startChapter + i}`).join(', ');

  let positionHint = '';
  if (isFirstBatch && isLastBatch) {
    positionHint = `This is the ONLY batch for this module. Generate all ${totalChapters} chapters in this response.`;
  } else if (isFirstBatch) {
    positionHint = `This is the FIRST batch. Generate chapters ${startChapter} through ${endChapter} only. Subsequent batches will cover the rest.`;
  } else if (isLastBatch) {
    positionHint = `This is the LAST batch. Generate chapters ${startChapter} through ${endChapter} only. Chapters already generated: ${generatedChapters.map((c) => `${moduleNum}.${c}`).join(', ')}.`;
  } else {
    positionHint = `This is a MIDDLE batch. Generate chapters ${startChapter} through ${endChapter} only. Chapters already generated: ${generatedChapters.map((c) => `${moduleNum}.${c}`).join(', ')}.`;
  }

  return `
Generate MODULE ${moduleNum} BATCH for the Cohortia course "${course.title}".

COURSE CONTEXT:
- Course ID: ${course.id}
- Title: ${course.title}
- Level: ${course.level || 'Beginner'}
- Subcategory: ${course.subcategory}
- Skills: ${(course.skills || []).join(', ')}

PREVIOUSLY GENERATED CONTEXT (for consistency):
${previousContext}

THIS MODULE REQUIREMENTS:
- Module number: ${moduleNum} of ${totalModules}
- Module theme: ${moduleName}
- Total chapters in module: ${totalChapters}
- This batch covers: ${chapterList}
- ${positionHint}
- ⚠️ CRITICAL: Generate EXACTLY ${batchCount} chapters in this batch (${startChapter} through ${endChapter}). Do not add extra chapters. Do not stop early.
- Each chapter must be numbered as "Chapter ${moduleNum}.${startChapter} — Title" through "Chapter ${moduleNum}.${endChapter} — Title".

⚠️ CHAPTER COUNT ENFORCEMENT:
- You are required to produce EXACTLY ${batchCount} chapters in this batch.
- Every chapter must have ALL 6 required sections.
- Do NOT write a summary or conclusion that substitutes for missing chapters.

WHAT YOU MUST NEVER DO — OUTPUT WILL BE REJECTED IF YOU DO ANY OF THESE:
1. NEVER write the module as a list of topics or bullet points. Each chapter must be a FULL lesson with paragraphs.
2. NEVER write chapter content as an outline. Chapters must be prose with full sentences and paragraphs.
3. NEVER write just a heading and a few bullet points under it. That is NOT a chapter.
4. NEVER skip any of the 6 required sections. Every single chapter must have all 6.
5. NEVER write filler text like "this chapter covers..." or "in this module you will learn...". Start teaching immediately.

EACH CHAPTER MUST INCLUDE ALL OF THESE SECTIONS:
1. #### Learning objectives (3–5 bullet points, specific and measurable)
2. #### Detailed lesson content (MULTIPLE FULL PARAGRAPHS — this is the longest section. Include real explanations, primary source excerpts, close reading passages, theoretical frameworks, historical context, analogies, common mistakes, interpretive pitfalls, and practical scenarios. NOT bullet points. Write at least 600–800 words per chapter.)
3. #### Key concepts (bullet list of terms and definitions)
4. #### Hands-on activity (a concrete practical exercise: a writing prompt, close reading exercise, analysis task, discussion prompt, creative exercise, or archival/museum activity. Include a template or starter material where applicable.)
5. #### Assessment idea (a quiz question, essay prompt, analysis challenge, or reflection WITH the correct answer, model response, or rubric. Include at least 2 questions per chapter.)
6. #### AI generation note (specific instructions for AI content generation: format, duration, tone, visual style, examples, interactive element. Be specific: "8-minute documentary clip with..." or "10-minute lecture video with primary source close reading...")

WRITING STYLE RULES:
- Write like a knowledgeable instructor speaking directly to the learner.
- Use real examples specific to the course topic, not generic placeholder text.
- Include primary source excerpts, close reading passages, theoretical frameworks, artworks, musical pieces, films, and historical documents relevant to the course.
- Explain WHY things work, not just HOW.
- Address common beginner mistakes.
- Build progressively: start simple, add complexity within the batch.
- Do NOT write "this chapter covers..." or "in this module you will learn..." as the main content. Jump straight into the teaching.
- Include common mistakes and how to avoid them.
- Include at least one real-world application or scenario per chapter.
- ⚠️ CRITICAL: This is for the course "${course.title}" in the "${course.subcategory}" subcategory. Use the skills list (${(course.skills || []).join(', ')}) to choose the correct texts, thinkers, artworks, methods, and frameworks. Do not write generic content that could apply to any course in this field.

${promptSections?.format || ''}

OUTPUT ONLY the chapter content for this batch. ${isFirstBatch ? 'Start with the module heading and goal.' : 'Do NOT repeat the module heading. Start directly with the first chapter of this batch.'} Do NOT include the course header or overview again. End with a horizontal rule (---).
`;
}

function buildFinalSectionsPrompt(course, previousContext, promptSections) {
  return `
Generate the FINAL SECTIONS for the Cohortia course "${course.title}".

COURSE CONTEXT:
- Course ID: ${course.id}
- Title: ${course.title}
- Level: ${course.level || 'Beginner'}
- Subcategory: ${course.subcategory}

PREVIOUSLY GENERATED CONTEXT:
${previousContext}

OUTPUT REQUIREMENTS:
1. ## Final Capstone Project
   - Describe 3 distinct project options the learner can choose from.
   - Each project should integrate skills from multiple modules.
   - Include: requirements, stretch goals, evaluation criteria, and estimated time.
   - Projects should be realistic and achievable by the target learner level.
   - Examples: a research paper, a curated portfolio, a critical analysis, a creative work, a lesson plan, a translated text, or an exhibition proposal.

2. ## Final Examination
   - Include 12–16 questions covering all modules.
   - Mix of: concept definitions (4), passage analysis (3), short essay prompts (4), and applied critical thinking problems (2–4).
   - Provide a complete answer key with model responses or rubrics for every question.
   - Include partial credit guidance where applicable.

3. ## Course Conclusion
   - Summarize what the learner can now do (specific skills, not generic).
   - Suggest 3–5 next steps and resources (books, courses, museums, archives, communities, further study paths).
   - Encourage continued reading, writing, and critical engagement.
   - Include a "Where to go next" section with learning paths.

4. End with a brief course conclusion (2-3 paragraphs). Do NOT include a footer block — it will be added automatically.

Output ONLY markdown. No extra text outside the syllabus content.
`;
}

// ───────────────────────────────────────────────────────────────
// MODULE BATCH GENERATION — Smaller, reliable requests
// ───────────────────────────────────────────────────────────────
async function generateModuleBatches(course, mod, moduleIndex, totalModules, previousContext, promptSections) {
  const batchSize = CHAPTERS_PER_REQUEST;
  const batches = [];
  for (let start = 1; start <= mod.chapters; start += batchSize) {
    const end = Math.min(start + batchSize - 1, mod.chapters);
    batches.push({ start, end });
  }

  let moduleText = '';
  const foundChapters = [];

  for (let b = 0; b < batches.length; b++) {
    const { start, end } = batches[b];
    const isFirstBatch = b === 0;
    const isLastBatch = b === batches.length - 1;

    console.log(`   🧩 Batch ${b + 1}/${batches.length}: chapters ${start}-${end}`);

    const prompt = buildModuleBatchPrompt(
      course,
      moduleIndex,
      mod.name,
      start,
      end,
      mod.chapters,
      previousContext,
      totalModules,
      promptSections,
      isFirstBatch,
      isLastBatch,
      foundChapters
    );

    const maxTokens = Math.min(
      MAX_TOKENS_PER_CHUNK,
      Math.max(16000, (end - start + 1) * 14000) // ~14K tokens per chapter, min 16K
    );

    const result = await callGemini({
      systemPrompt: buildSystemPrompt(promptSections),
      userPrompt: prompt,
      maxTokens,
      temperature: 0.5,
    });

    if (!result.success) {
      return { success: false, error: result.error, partialText: moduleText };
    }

    let batchText = stripMarkdownFences(result.text);
    batchText = cleanAiSelfCorrections(batchText);

    if (isFirstBatch) {
      batchText = normalizeModuleHeadings(batchText, mod.num, mod.name);
      moduleText = batchText;
    } else {
      // Strip duplicate module heading from subsequent batches
      batchText = batchText.replace(new RegExp(`##\\s*Module\\s*${mod.num}[:\\s].*?\\n`, 'i'), '');
      moduleText = moduleText.trim() + '\n\n' + batchText.trim();
    }

    // Track which chapters we have so far
    const currentFound = countChaptersInModule(moduleText, mod.num);
    foundChapters.length = 0;
    foundChapters.push(...currentFound);

    const batchMissing = [];
    for (let c = start; c <= end; c++) {
      if (!foundChapters.includes(c)) batchMissing.push(c);
    }

    if (batchMissing.length > 0) {
      console.warn(`   ⚠️  Batch ${b + 1} missing ${batchMissing.length} chapter(s): ${batchMissing.map((n) => `${mod.num}.${n}`).join(', ')}.`);
      // One re-prompt attempt for this batch only
      const missingPrompt = buildMissingChaptersPrompt(
        course,
        moduleIndex,
        mod.name,
        batchMissing,
        foundChapters,
        previousContext,
        totalModules,
        promptSections
      );
      const missingResult = await callGemini({
        systemPrompt: buildSystemPrompt(promptSections),
        userPrompt: missingPrompt,
        maxTokens: Math.min(MAX_TOKENS_PER_CHUNK, batchMissing.length * 15000),
        temperature: 0.5,
      });
      if (missingResult.success) {
        let missingText = stripMarkdownFences(missingResult.text);
        missingText = cleanAiSelfCorrections(missingText);
        missingText = missingText.replace(new RegExp(`##\\s*Module\\s*${mod.num}[:\\s].*?\\n`, 'i'), '');
        moduleText = moduleText.trim() + '\n\n' + missingText.trim();
        const recheck = countChaptersInModule(moduleText, mod.num);
        foundChapters.length = 0;
        foundChapters.push(...recheck);
      }
    }
  }

  if (!moduleText.endsWith('---')) {
    moduleText += '\n\n---\n';
  }

  return { success: true, text: moduleText };
}

// ───────────────────────────────────────────────────────────────
// CHUNKED GENERATION ENGINE
// ───────────────────────────────────────────────────────────────
async function generateSyllabus(course, options = {}) {
  const { skipSearch = false, dryRun = false, promptSections = {} } = options;
  const { targetDir, outputPath } = getOutputPath(course);
  await ensureDir(targetDir);

  console.log(`\n╔════════════════════════════════════════════════════════════╗`);
  console.log(`║  Generating: ${course.title}`);
  console.log(`║  ID: ${course.id}`);
  console.log(`║  Level: ${course.level || 'Beginner'} | Subcategory: ${course.subcategory}`);
  console.log(`╚════════════════════════════════════════════════════════════╝\n`);

  if (dryRun) {
    console.log('🧪 DRY RUN: Would generate:');
    console.log(`   Output: ${outputPath}`);
    console.log(`   Level: ${course.level || 'Beginner'}`);
    console.log(`   Guidelines: ${JSON.stringify(getModuleGuidelines(course.level))}`);
    console.log('   Skipping actual generation.');
    return { outputPath, size: 0, modules: 0, dryRun: true };
  }

  // Step 1: Research
  let searchSummary = null;
  if (!skipSearch) {
    console.log('🔍 Researching course...');
    try {
      searchSummary = await researchCourse(course);
      if (searchSummary) {
        console.log(`   Found ${searchSummary.split('\n').filter((l) => l.trim().startsWith('-')).length} research results.`);
      } else {
        console.log('   No research results found.');
      }
    } catch (e) {
      console.warn('   Research failed:', e.message);
    }
  }

  // Step 2: Generate header + overview + structure
  let fullContent = '';
  let modules = [];
  const existingContent = await readFileSafe(outputPath, '');

  if (existingContent.length > 0) {
    const existingModules = parseModulesFromContent(existingContent);
    if (existingModules.length > 0) {
      console.log('\n📄 Found existing header/structure. Skipping Part 1 generation.');
      fullContent = existingContent.trim() + '\n\n';
      modules = existingModules;
    }
  }

  if (modules.length === 0) {
    console.log('\n📄 Generating header, overview, and structure...');
    const part1Prompt = buildHeaderAndOverviewPrompt(course, searchSummary, promptSections);
    const part1 = await callGemini({
      systemPrompt: buildSystemPrompt(promptSections),
      userPrompt: part1Prompt,
      maxTokens: MAX_TOKENS_PER_CHUNK,
      temperature: 0.5,
    });

    if (!part1.success) throw new Error(`Part 1 failed: ${part1.error}`);
    fullContent = stripMarkdownFences(part1.text) + '\n\n';
    modules = parseModulesFromContent(fullContent);
  }

  // Parse module structure from the generated table using multiple strategies
  if (modules.length === 0) {
    modules = parseModulesFromContent(fullContent);
  }

  if (modules.length === 0) {
    console.warn('   Could not parse module table from generated content. Attempting fallback extraction...');
    // Fallback 1: Extract from markdown headers
    const headingMatches = [...fullContent.matchAll(/##\s+Module\s+(\d+)[:\s]+(.+)/gi)];
    if (headingMatches.length > 0) {
      for (const m of headingMatches) {
        modules.push({ num: parseInt(m[1], 10), name: m[2].trim(), chapters: 4 });
      }
    }
    // Fallback 2: Try alternative table formats
    if (modules.length === 0) {
      const altMatches = [...fullContent.matchAll(/\|\s*(\d+)\s*\|\s*([^|]+?)\s*\|\s*(\d+)\s*\|/g)];
      for (const m of altMatches) {
        const num = parseInt(m[1], 10);
        const chapters = parseInt(m[3], 10);
        if (!isNaN(num) && !isNaN(chapters)) {
          modules.push({ num, name: m[2].trim(), chapters });
        }
      }
    }
  }

  // Deduplicate and sort
  const seen = new Set();
  modules = modules.filter((m) => {
    if (seen.has(m.num)) return false;
    seen.add(m.num);
    return true;
  }).sort((a, b) => a.num - b.num);

  // If still no modules, try JSON fallback
  if (modules.length === 0) {
    console.warn('   All markdown parsing failed. Trying JSON fallback...');
    const jsonModules = await generateFallbackStructure(course, promptSections, fullContent);
    if (jsonModules && jsonModules.length > 0) {
      modules = jsonModules;
    }
  }

  // If still no modules, use default structure
  if (modules.length === 0) {
    console.warn('   All fallbacks failed. Using default structure...');
    modules = buildDefaultStructure(course);
  }

  // ── OVERRIDE chapter counts with level-appropriate distribution ──
  // We trust Gemini for module NAMES but not for chapter counts.
  const guidelines = getModuleGuidelines(course.level);

  if (modules.length < guidelines.minModules) {
    console.warn(`   WARNING: Only ${modules.length} modules found, but minimum is ${guidelines.minModules}. Adding default modules...`);
    const currentCount = modules.length;
    for (let i = currentCount + 1; i <= guidelines.minModules; i++) {
      modules.push({ num: i, name: `Module ${i}: Advanced Topics`, chapters: 4 });
    }
  }
  if (modules.length > guidelines.maxModules) {
    console.warn(`   WARNING: ${modules.length} modules found, but maximum is ${guidelines.maxModules}. Truncating...`);
    modules = modules.slice(0, guidelines.maxModules);
  }

  // Progressive distribution: early modules get fewer chapters, later modules get more
  const chapterRange = guidelines.chaptersPerModule.split('–');
  const minCh = parseInt(chapterRange[0], 10) || 4;
  const maxCh = parseInt(chapterRange[1], 10) || minCh + 2;

  for (let i = 0; i < modules.length; i++) {
    const progress = i / Math.max(modules.length - 1, 1);
    const targetChapters = Math.round(minCh + progress * (maxCh - minCh));
    modules[i].chapters = Math.max(minCh, Math.min(maxCh, targetChapters));
  }

  const totalChapters = modules.reduce((s, m) => s + m.chapters, 0);
  console.log(`   Structure: ${modules.length} modules, ${totalChapters} total chapters.`);
  modules.forEach((m) => console.log(`      Module ${m.num}: ${m.name} (${m.chapters} chapters)`));

  // Save initial content so we can resume if needed
  await fs.writeFile(outputPath, fullContent, 'utf8');
  console.log(`   Saved Part 1 (${Buffer.byteLength(fullContent, 'utf8')} bytes)`);

  // Step 3: Generate each module
  const totalModules = modules.length;
  const contextSummary = `Course: ${course.title}. Level: ${course.level || 'Beginner'}. ${modules.length} modules total. Skills: ${(course.skills || []).join(', ')}.`;

  // ── Check existing file for already-generated modules ──
  let existingModules = new Set();
  if (await fileExists(outputPath)) {
    const existingContent = await readFileSafe(outputPath, '');
    if (existingContent.length > 0) {
      const found = parseExistingModules(existingContent, totalModules);
      found.forEach((m) => existingModules.add(m));
      if (found.length > 0) {
        console.log(`   📂 Found existing file with ${found.length} module(s) already present: ${found.join(', ')}`);
        fullContent = existingContent.trim() + '\n\n';
      }
    }
  }

  for (let i = 0; i < modules.length; i++) {
    const mod = modules[i];

    if (existingModules.has(mod.num)) {
      console.log(`\n⏭️  Skipping Module ${mod.num}/${totalModules}: "${mod.name}" — already present in output file.`);
      continue;
    }

    console.log(`\n📦 Generating Module ${mod.num}/${totalModules}: "${mod.name}" (${mod.chapters} chapters)...`);

    // ── Try cache first ──
    let moduleText = await loadModuleCache(course.id, mod.num);
    if (moduleText) {
      console.log(`   💾 Loaded Module ${mod.num} from cache.`);
      moduleText = normalizeModuleHeadings(moduleText, mod.num, mod.name);
      moduleText = cleanAiSelfCorrections(moduleText);
      if (!moduleText.endsWith('---')) {
        moduleText += '\n\n---\n';
      }
      fullContent += moduleText + '\n\n';
      await fs.writeFile(outputPath, fullContent, 'utf8');
      console.log(`   Saved Module ${mod.num} from cache (${Buffer.byteLength(moduleText, 'utf8')} bytes). Total file: ${Buffer.byteLength(fullContent, 'utf8')} bytes.`);

      const state = await loadState();
      if (state.inProgress && state.inProgress.courseId === course.id) {
        state.inProgress.moduleIndex = i + 1;
        await saveState(state);
      }
      if (i < modules.length - 1) {
        const pauseMs = keyState.minDelayMs;
        console.log(`   ⏳ Pausing ${Math.ceil(pauseMs / 1500)}s for rate-limit safety...`);
        await sleep(pauseMs);
      }
      continue;
    }

    const previousContext = `Course: ${course.title}. Modules generated so far: ${i}/${totalModules}. Current module: ${mod.name} (Module ${mod.num}). This module has ${mod.chapters} chapters. Topics covered so far: ${modules.slice(0, i).map((m) => m.name).join(', ') || 'none yet'}.`;

    // Generate module in smaller chapter batches to avoid truncation and re-prompts
    const batchResult = await generateModuleBatches(course, mod, i, totalModules, previousContext, promptSections);

    if (!batchResult.success) {
      console.error(`   Module ${mod.num} failed: ${batchResult.error}`);
      // Save partial content before throwing
      await fs.writeFile(outputPath + '.failed-module-' + mod.num, fullContent, 'utf8');
      throw new Error(`Module ${mod.num} generation failed`);
    }

    moduleText = batchResult.text;

    // Final chapter count check
    const foundChapters = countChaptersInModule(moduleText, mod.num);
    const missingChapters = [];
    for (let c = 1; c <= mod.chapters; c++) {
      if (!foundChapters.includes(c)) missingChapters.push(c);
    }
    if (missingChapters.length > 0) {
      console.warn(`   ⚠️  Module ${mod.num} still missing ${missingChapters.length} chapter(s): ${missingChapters.map((n) => `${mod.num}.${n}`).join(', ')}. Continuing with partial module.`);
    } else {
      console.log(`   ✓ All ${mod.chapters} chapters present for Module ${mod.num}.`);
    }

    await saveModuleCache(course.id, mod.num, moduleText);

    fullContent += moduleText + '\n\n';
    await fs.writeFile(outputPath, fullContent, 'utf8');
    console.log(`   Saved Module ${mod.num} (${Buffer.byteLength(moduleText, 'utf8')} bytes). Total file: ${Buffer.byteLength(fullContent, 'utf8')} bytes.`);

    // Update state with current module progress
    const state = await loadState();
    if (state.inProgress && state.inProgress.courseId === course.id) {
      state.inProgress.moduleIndex = i + 1;
      await saveState(state);
    }

    // Brief pause between modules to avoid rate limits
    if (i < modules.length - 1) {
      const pauseMs = keyState.minDelayMs;
      console.log(`   ⏳ Pausing ${Math.ceil(pauseMs / 1500)}s for rate-limit safety...`);
      await sleep(pauseMs);
    }
  }

  // Step 4: Generate final sections
  console.log('\n📝 Generating final sections (capstone, exam, conclusion)...');
  const finalPrompt = buildFinalSectionsPrompt(course, contextSummary, promptSections);
  const finalResult = await callGemini({
    systemPrompt: buildSystemPrompt(promptSections),
    userPrompt: finalPrompt,
    maxTokens: MAX_TOKENS_PER_CHUNK,
    temperature: 0.5,
  });

  if (!finalResult.success) {
    console.error(`   Final sections failed: ${finalResult.error}`);
    // Save partial content before throwing
    await fs.writeFile(outputPath + '.failed-final', fullContent, 'utf8');
    throw new Error('Final sections generation failed');
  }

  let finalText = stripMarkdownFences(finalResult.text);
  if (!finalText.endsWith('---')) {
    finalText += '\n\n---\n';
  }

  finalText = cleanAiSelfCorrections(finalText);

  fullContent += finalText + '\n\n';

  // Ensure the structure table matches the actual module/chapter distribution
  fullContent = rewriteStructureTable(fullContent, modules);

  const correctFooter = generateCorrectFooter(course, modules, fullContent);
  fullContent = fullContent.replace(/> End of Syllabus:[\s\S]*?(?=\n\n|\n#|$)/g, '');
  fullContent = fullContent.trim() + '\n\n' + correctFooter;

  await fs.writeFile(outputPath, fullContent, 'utf8');
  console.log(`   Saved final sections (${Buffer.byteLength(finalText, 'utf8')} bytes).`);

  // Step 5: Validate
  console.log('\n✅ Validating output...');
  const validation = await validateSyllabus(outputPath, fullContent, modules);
  if (validation.errors.length > 0) {
    console.warn('   ⚠️  Validation warnings:');
    validation.errors.forEach((e) => console.warn(`      - ${e}`));
  } else {
    console.log('   ✓ Validation passed.');
  }

  const finalSize = Buffer.byteLength(fullContent, 'utf8');
  console.log(`\n✅ DONE: ${outputPath}`);
  console.log(`   Size: ${finalSize} bytes (${(finalSize / 1024).toFixed(1)} KB)`);
  console.log(`   Modules: ${modules.length}`);
  console.log(`   Chapters: ${(fullContent.match(/### Chapter/g) || []).length}`);

  if (finalSize < MIN_SYLLABUS_SIZE) {
    console.warn(`   ⚠️  WARNING: File size (${finalSize} bytes) is below minimum threshold (${MIN_SYLLABUS_SIZE} bytes). The content may be too thin.`);
  }

  logUsageStats();

  await clearCourseCache(course.id);
  return { outputPath, size: finalSize, modules: modules.length };
}

// ───────────────────────────────────────────────────────────────
// MODULE PARSER — Robust multi-strategy extraction
// ───────────────────────────────────────────────────────────────
function parseModulesFromContent(content) {
  const modules = [];

  // Strategy 1: Markdown table with | Module | Theme | Chapters |
  // Try different table column orderings
  const tablePatterns = [
    // | 1 | Name | 5 |
    /\|\s*(\d+)\s*\|\s*([^|]+?)\s*\|\s*(\d+)\s*\|/g,
    // | 1 | Name | 5 chapters |
    /\|\s*(\d+)\s*\|\s*([^|]+?)\s*\|\s*(\d+)\s*(?:chapters?)?\s*\|/gi,
  ];

  for (const pattern of tablePatterns) {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const num = parseInt(match[1], 10);
      const chapters = parseInt(match[3], 10);
      if (!isNaN(num) && !isNaN(chapters) && num > 0 && chapters > 0) {
        modules.push({ num, name: match[2].trim(), chapters });
      }
    }
  }

  // Strategy 2: If table parsing failed, try to extract from headings
  if (modules.length === 0) {
    const headingRegex = /##\s+Module\s+(\d+)[:\s]+(.+)/gi;
    let match;
    while ((match = headingRegex.exec(content)) !== null) {
      const num = parseInt(match[1], 10);
      if (!isNaN(num)) {
        // Try to extract chapter count from heading or nearby text
        const headingPos = match.index;
        const nearbyText = content.slice(headingPos, headingPos + 200);
        const chapterMatch = nearbyText.match(/(\d+)\s+chapters?/i);
        const chapters = chapterMatch ? parseInt(chapterMatch[1], 10) : 4;
        modules.push({ num, name: match[2].trim(), chapters });
      }
    }
  }

  // Strategy 3: Try numbered list format
  if (modules.length === 0) {
    const listRegex = /(?:^|\n)\s*(\d+)\.\s+(.+?)\s*[-–:]\s*(\d+)\s+chapters?/gi;
    let match;
    while ((match = listRegex.exec(content)) !== null) {
      const num = parseInt(match[1], 10);
      const chapters = parseInt(match[3], 10);
      if (!isNaN(num) && !isNaN(chapters)) {
        modules.push({ num, name: match[2].trim(), chapters });
      }
    }
  }

  // Strategy 4: Look for JSON-like arrays in the content (some models output JSON)
  if (modules.length === 0) {
    const jsonRegex = /"modules"\s*:\s*\[(.+?)\]/s;
    const jsonMatch = content.match(jsonRegex);
    if (jsonMatch) {
      try {
        const jsonStr = '{"modules":[' + jsonMatch[1] + ']}';
        const parsed = JSON.parse(jsonStr);
        if (Array.isArray(parsed.modules)) {
          for (const m of parsed.modules) {
            if (m.num && m.name) {
              modules.push({
                num: parseInt(m.num, 10),
                name: m.name,
                chapters: parseInt(m.chapters, 10) || 4,
              });
            }
          }
        }
      } catch {
        // JSON parse failed, ignore
      }
    }
  }

  return modules;
}

// ───────────────────────────────────────────────────────────────
// FALLBACK STRUCTURE GENERATOR
// ───────────────────────────────────────────────────────────────
async function generateFallbackStructure(course, promptSections, fullContent) {
  console.log('   🔄 Attempting to extract structure via JSON fallback...');

  const guidelines = getModuleGuidelines(course.level);
  const prompt = `
Based on the course metadata below, generate ONLY a JSON array of modules with their chapter counts.

COURSE: ${course.title}
LEVEL: ${course.level || 'Beginner'}
SKILLS: ${(course.skills || []).join(', ')}
GUIDELINES: ${guidelines.minModules}-${guidelines.maxModules} modules, ${guidelines.chaptersPerModule} chapters each.

Output ONLY a JSON array like this (no markdown, no explanations):
[
  {"num": 1, "name": "Descriptive Module Name", "chapters": 5},
  {"num": 2, "name": "Another Descriptive Name", "chapters": 6}
]
`;

  const result = await callGemini({
    systemPrompt: 'You are a curriculum planner. Output ONLY valid JSON arrays.',
    userPrompt: prompt,
    maxTokens: 4000,
    temperature: 0.3,
  });

  if (!result.success) return null;

  try {
    const text = result.text.trim();
    // Strip markdown code blocks if present
    const jsonText = text.replace(/^```json\s*/, '').replace(/```\s*$/, '');
    const modules = JSON.parse(jsonText);
    if (Array.isArray(modules) && modules.length > 0) {
      console.log(`   ✓ JSON fallback extracted ${modules.length} modules.`);
      return modules.map((m) => ({
        num: parseInt(m.num, 10) || m.num,
        name: m.name,
        chapters: parseInt(m.chapters, 10) || 4,
      }));
    }
  } catch {
    console.warn('   JSON fallback failed to parse.');
  }

  return null;
}

function buildDefaultStructure(course) {
  const guidelines = getModuleGuidelines(course.level);
  const numModules = Math.min(guidelines.maxModules, Math.max(guidelines.minModules, Math.floor((guidelines.minModules + guidelines.maxModules) / 2)));
  const chaptersPerModule = 4; // safe default
  const modules = [];

  // Generate generic but descriptive module names based on the course title, subcategory, and skills.
  // Fallback structures must be subcategory-aware so Arts & Humanities courses do not get
  // generic STEM module names such as "Control Flow and Functions".
  const skills = (course.skills || []).slice(0, 3);
  const subcategory = (course.subcategory || '').toLowerCase();

  const stopWords = [
    'with', 'from', 'for', 'the', 'and', 'introduction', 'certified', 'professional',
    'complete', 'fundamentals', 'basics', 'advanced', 'beginner', 'intermediate',
    'course', 'specialization', 'certificate', 'diploma', 'program', 'degree',
    'workshop', 'seminar', 'masterclass', 'lecture', 'tutorial', 'class'
  ];

  const topicWords = course.title.toLowerCase().split(/\s+/).filter((w) => w.length > 3 && !stopWords.includes(w) && !/^\d+$/.test(w));

  const mainTopic = topicWords[0] || (course.subcategory || 'Arts & Humanities');
  const mainSkill = skills[0] || mainTopic;

  let templates;
  // Subcategory-aware templates for Arts & Humanities. These templates avoid
  // STEM-specific language and use discipline-appropriate module names.
  const isLiteratureWriting = subcategory.includes('literature') || subcategory.includes('writing');
  const isHistoryArchaeology = subcategory.includes('history') || subcategory.includes('archaeology');
  const isArtHistory = subcategory.includes('art history') || subcategory.includes('visual arts');
  const isMusicPerforming = subcategory.includes('music') || subcategory.includes('performing');
  const isFilmMedia = subcategory.includes('film') || subcategory.includes('media') || subcategory.includes('communications');
  const isLanguages = subcategory.includes('language') || subcategory.includes('linguistics');
  const isPhilosophy = subcategory.includes('philosophy') || subcategory.includes('ethics');
  const isReligious = subcategory.includes('religious') || subcategory.includes('theology');
  const isCulturalAnthro = subcategory.includes('cultural') || subcategory.includes('anthropology');
  const isMuseumCuration = subcategory.includes('museum') || subcategory.includes('curation');
  const isDigitalHumanities = subcategory.includes('digital humanities');

   if (isLiteratureWriting) {
    templates = {
      'beginner': [
        `Introduction to ${mainTopic} and Reading Practices`,
        `Core Techniques and Craft in ${mainTopic}`,
        `Narrative, Voice, and Form in ${mainTopic}`,
        `Genre, Audience, and Context in ${mainTopic}`,
        `Revision, Editing, and Polishing in ${mainTopic}`,
        `Building a Portfolio and Next Steps in ${mainTopic}`,
      ],
      'intermediate': [
        `Advanced Concepts in ${mainTopic}`,
        `Critical Methods and Theoretical Lenses for ${mainTopic}`,
        `Close Reading and Textual Analysis in ${mainTopic}`,
        `Creative Practice and Experimentation in ${mainTopic}`,
        `Workshopping and Collaborative Feedback in ${mainTopic}`,
        `Publishing, Performance, and Public Engagement in ${mainTopic}`,
        `Interdisciplinary Approaches to ${mainTopic}`,
        `Building a Sustained Creative or Critical Project in ${mainTopic}`,
      ],
      'advanced': [
        `Advanced Theory and Intellectual History in ${mainTopic}`,
        `Complex Texts and Critical Debates in ${mainTopic}`,
        `Specialized Methods and Archival Research in ${mainTopic}`,
        `Authorship, Identity, and Representation in ${mainTopic}`,
        `Comparative and Global Perspectives on ${mainTopic}`,
        `Pedagogy and Teaching ${mainTopic}`,
        `Professional Practice and Career Pathways in ${mainTopic}`,
        `Dissertation, Manuscript, or Major Project in ${mainTopic}`,
        `Emerging Trends and Future Directions in ${mainTopic}`,
        `Synthesis and Capstone in ${mainTopic}`,
      ],
    };
  } else if (isHistoryArchaeology) {
    templates = {
      'beginner': [
        `Introduction to ${mainTopic} and Historical Methods`,
        `Sources, Evidence, and Periodization in ${mainTopic}`,
        `Key Events, Figures, and Turning Points in ${mainTopic}`,
        `Material Culture and Archaeological Methods in ${mainTopic}`,
        `Interpretation, Argument, and Historiography in ${mainTopic}`,
        `Public History and Present-Day Relevance of ${mainTopic}`,
      ],
      'intermediate': [
        `Advanced Themes and Debates in ${mainTopic}`,
        `Primary Source Analysis and Archival Research`,
        `Comparative and Transnational Approaches to ${mainTopic}`,
        `Digital Humanities and Data in ${mainTopic}`,
        `Heritage, Memory, and Commemoration`,
        `Museums, Exhibitions, and Public Engagement`,
        `Fieldwork and Practical Methods in ${mainTopic}`,
        `Building a Research Project in ${mainTopic}`,
      ],
      'advanced': [
        `Advanced Historiography and Theory in ${mainTopic}`,
        `Complex Sources and Paleographic Skills`,
        `Quantitative and Spatial Methods in ${mainTopic}`,
        `Comparative Civilizations and Longue Durée`,
        `Heritage Management and Policy`,
        `Dissertation Research and Design`,
        `Peer Review, Publication, and Academic Discourse`,
        `Public History and Media in ${mainTopic}`,
        `Interdisciplinary Synthesis in ${mainTopic}`,
        `Capstone and Professional Portfolio`,
      ],
    };
  } else if (isArtHistory) {
    templates = {
      'beginner': [
        `Introduction to ${mainTopic} and Visual Analysis`,
        `Periods, Movements, and Styles in ${mainTopic}`,
        `Artists, Patrons, and Institutions`,
        `Technique, Medium, and Materiality`,
        `Context, Culture, and Meaning in ${mainTopic}`,
        `Museums, Curation, and Viewing Practices`,
      ],
      'intermediate': [
        `Advanced Methods and Critical Theory in ${mainTopic}`,
        `Iconography, Semiotics, and Visual Culture`,
        `Global Art Histories and Cross-Cultural Exchange`,
        `Conservation, Restoration, and Ethics`,
        `Digital Art History and New Media`,
        `Exhibition Design and Interpretation`,
        `Independent Research and Writing in ${mainTopic}`,
        `Building a Critical Portfolio`,
      ],
      'advanced': [
        `Advanced Theoretical Frameworks in ${mainTopic}`,
        `Specialized Periods and Geographies`,
        `Connoisseurship, Attribution, and Provenance`,
        `Institutional Critique and Art Worlds`,
        `Dissertation and Major Research Project`,
        `Curatorial Practice and Exhibition Proposal`,
        `Publication, Criticism, and Public Engagement`,
        `Digital Humanities and Computational Methods`,
        `Professional Practice and Career Pathways`,
        `Synthesis and Capstone`,
      ],
    };
  } else if (isMusicPerforming) {
    templates = {
      'beginner': [
        `Introduction to ${mainTopic} and Listening Skills`,
        `Fundamentals, Notation, and Theory`,
        `History, Context, and Repertoire`,
        `Performance Practice and Technique`,
        `Composition, Arrangement, and Creation`,
        `Collaboration, Ensembles, and Production`,
      ],
      'intermediate': [
        `Advanced Theory and Analysis in ${mainTopic}`,
        `Period Studies and Specialized Repertoire`,
        `Conducting, Direction, and Leadership`,
        `Recording, Technology, and Sound Design`,
        `Musicology, Ethnomusicology, and Research`,
        `Pedagogy and Teaching Practice`,
        `Professional Performance and Career Skills`,
        `Building a Portfolio and Recital Program`,
      ],
      'advanced': [
        `Advanced Analytical Methods in ${mainTopic}`,
        `Specialized Historical and Cultural Studies`,
        `Composition, Orchestration, and Premiere`,
        `Recording Engineering and Mastering`,
        `Dissertation, Lecture-Recital, or Major Project`,
        `Arts Administration and Entrepreneurship`,
        `Interdisciplinary Performance and New Media`,
        `Critical Writing and Scholarship in ${mainTopic}`,
        `Professional Practice and Industry Engagement`,
        `Capstone and Career Launch`,
      ],
    };
  } else if (isFilmMedia) {
    templates = {
      'beginner': [
        `Introduction to ${mainTopic} and Media Literacy`,
        `Form, Genre, and Narrative in ${mainTopic}`,
        `Production, Technology, and Craft`,
        `Representation, Identity, and Culture`,
        `Audience, Industry, and Distribution`,
        `Ethics, Regulation, and Responsibility`,
      ],
      'intermediate': [
        `Advanced Theory and Criticism in ${mainTopic}`,
        `Documentary, Journalism, and Nonfiction`,
        `Screenwriting, Directing, and Visual Storytelling`,
        `Editing, Sound Design, and Post-Production`,
        `Digital Media, Platforms, and Algorithms`,
        `Public Relations, Strategy, and Campaigns`,
        `Research Methods and Media Analysis`,
        `Building a Portfolio and Showreel`,
      ],
      'advanced': [
        `Advanced Critical Frameworks in ${mainTopic}`,
        `Auteur Studies and National Cinemas`,
        `Experimental Media and New Platforms`,
        `Media Policy, Law, and Governance`,
        `Dissertation or Major Production Project`,
        `Distribution, Festivals, and Exhibition`,
        `Teaching, Criticism, and Public Scholarship`,
        `Entrepreneurship and Media Ventures`,
        `Interdisciplinary and Transmedia Projects`,
        `Capstone and Professional Launch`,
      ],
    };
  } else if (isLanguages) {
    templates = {
      'beginner': [
        `Introduction to ${mainTopic} and Language Basics`,
        `Grammar, Structure, and Communication`,
        `Vocabulary, Reading, and Listening`,
        `Speaking, Pronunciation, and Conversation`,
        `Culture, Context, and Society`,
        `Review, Practice, and Assessment`,
      ],
      'intermediate': [
        `Advanced Grammar and Complex Structures`,
        `Literature, Film, and Media in ${mainTopic}`,
        `Professional and Academic Communication`,
        `Translation, Interpretation, and Bilingualism`,
        `Sociolinguistics, Dialects, and Variation`,
        `Language Teaching and Pedagogy`,
        `Research Methods in Linguistics`,
        `Building Fluency and Specialization`,
      ],
      'advanced': [
        `Advanced Linguistic Theory and Analysis`,
        `Historical Linguistics and Language Change`,
        `Psycholinguistics, Acquisition, and Cognition`,
        `Computational and Corpus Linguistics`,
        `Sociolinguistics, Policy, and Planning`,
        `Specialized Translation and Localization`,
        `Dissertation or Major Research Project`,
        `Conference Presentation and Publication`,
        `Professional Practice and Career Pathways`,
        `Capstone and Certification Preparation`,
      ],
    };
  } else if (isPhilosophy) {
    templates = {
      'beginner': [
        `Introduction to ${mainTopic} and Philosophical Method`,
        `Core Branches: Epistemology, Metaphysics, Ethics`,
        `Major Thinkers and Canonical Texts`,
        `Argumentation, Logic, and Critical Thinking`,
        `Applied Philosophy and Contemporary Issues`,
        `Synthesis and Reflective Practice`,
      ],
      'intermediate': [
        `Advanced Topics in ${mainTopic}`,
        `Historical Movements and Schools of Thought`,
        `Formal Logic and Philosophical Analysis`,
        `Political Philosophy, Aesthetics, and Philosophy of Mind`,
        `Comparative Philosophy and Global Traditions`,
        `Research Methods and Scholarly Writing`,
        `Teaching Philosophy and Public Engagement`,
        `Building a Sustained Argument or Paper`,
      ],
      'advanced': [
        `Advanced Seminar in ${mainTopic}`,
        `Contemporary Debates and Cutting-Edge Research`,
        `Specialized Periods and Figure Studies`,
        `Formal Methods and Symbolic Logic`,
        `Interdisciplinary Philosophy and Science`,
        `Dissertation, Monograph, or Major Project`,
        `Peer Review, Publication, and Conference Skills`,
        `Teaching at the Tertiary Level`,
        `Professional Ethics and Applied Specialization`,
        `Capstone and Career Pathways`,
      ],
    };
  } else if (isReligious) {
    templates = {
      'beginner': [
        `Introduction to ${mainTopic} and Religious Literacy`,
        `Sacred Texts, Languages, and Interpretation`,
        `History, Context, and Development`,
        `Belief, Practice, and Community`,
        `Ethics, Law, and Moral Reasoning`,
        `Interfaith Dialogue and Contemporary Issues`,
      ],
      'intermediate': [
        `Advanced Textual and Historical Studies`,
        `Theology, Doctrine, and Systematic Thought`,
        `Ritual, Performance, and Material Religion`,
        `Comparative Religion and Global Perspectives`,
        `Religion and Society: Gender, Politics, Culture`,
        `Research Methods in Religious Studies`,
        `Chaplaincy, Ministry, and Pastoral Care`,
        `Building a Research or Reflection Project`,
      ],
      'advanced': [
        `Advanced Theological and Theoretical Frameworks`,
        `Specialized Scripture, Language, and Exegesis`,
        `Religion, Science, and Modernity`,
        `Religion, Violence, Peace, and Justice`,
        `Dissertation, Thesis, or Major Project`,
        `Professional Ministry and Leadership`,
        `Academic Publication and Conference Skills`,
        `Interfaith Leadership and Community Engagement`,
        `Specialized Chaplaincy and Spiritual Care`,
        `Capstone and Professional Certification`,
      ],
    };
  } else if (isCulturalAnthro) {
    templates = {
      'beginner': [
        `Introduction to ${mainTopic} and Anthropological Thinking`,
        `Culture, Society, and Social Structure`,
        `Kinship, Gender, and Identity`,
        `Religion, Ritual, and Belief`,
        `Economy, Politics, and Power`,
        `Ethics, Methods, and Reflexivity`,
      ],
      'intermediate': [
        `Advanced Theory and Classic Debates in ${mainTopic}`,
        `Ethnographic Methods and Fieldwork`,
        `Language, Communication, and Discourse`,
        `Globalization, Migration, and Diaspora`,
        `Digital Anthropology and New Media`,
        `Museums, Heritage, and Public Anthropology`,
        `Research Design and Writing Ethnography`,
        `Building a Research Project in ${mainTopic}`,
      ],
      'advanced': [
        `Advanced Theoretical Frameworks in ${mainTopic}`,
        `Specialized Ethnography and Long-Term Fieldwork`,
        `Visual and Sensory Anthropology`,
        `Medical, Environmental, and Applied Anthropology`,
        `Dissertation, Monograph, or Major Project`,
        `Peer Review, Publication, and Grant Writing`,
        `Teaching Anthropology and Public Engagement`,
        `Policy, Advocacy, and Consulting`,
        `Interdisciplinary Synthesis and Future Directions`,
        `Capstone and Professional Launch`,
      ],
    };
  } else if (isMuseumCuration) {
    templates = {
      'beginner': [
        `Introduction to ${mainTopic} and Museum Studies`,
        `Collections, Care, and Conservation`,
        `Exhibition Design and Interpretation`,
        `Audience, Accessibility, and Public Engagement`,
        `Museum Ethics, Law, and Governance`,
        `Professional Practice and Career Pathways`,
      ],
      'intermediate': [
        `Advanced Collection Management and Documentation`,
        `Curatorial Research and Narrative Development`,
        `Exhibition Planning, Design, and Fabrication`,
        `Education, Outreach, and Community Partnerships`,
        `Digital Strategies and Museum Technology`,
        `Fundraising, Grants, and Institutional Development`,
        `Conservation Science and Preventive Care`,
        `Building a Curatorial Portfolio`,
      ],
      'advanced': [
        `Critical Museology and Institutional Critique`,
        `Global and Decolonizing Approaches to Collections`,
        `Advanced Exhibition and Project Leadership`,
        `Digital Curation and Virtual Exhibitions`,
        `Museum Law, Repatriation, and Cultural Heritage`,
        `Strategic Management and Organizational Change`,
        `Dissertation or Major Museum Project`,
        `Peer Review, Publication, and Conference Engagement`,
        `Professional Placement and Industry Mentorship`,
        `Capstone and Career Launch`,
      ],
    };
  } else if (isDigitalHumanities) {
    templates = {
      'beginner': [
        `Introduction to ${mainTopic} and Digital Humanities Methods`,
        `Text Encoding, Data Modeling, and Metadata`,
        `Digital Archives, Collections, and Repositories`,
        `Data Visualization and Interpretation`,
        `Computational Text Analysis and distant reading`,
        `Ethics, Accessibility, and Public Humanities`,
      ],
      'intermediate': [
        `Advanced Text Analysis and Corpus Building`,
        `Geospatial Humanities and Mapping`,
        `Network Analysis and Linked Open Data`,
        `Digital Publishing and Scholarly Communication`,
        `Cultural Heritage Digitization and 3D Media`,
        `Programming and Tool Building for Humanists`,
        `Project Design and Sustainability`,
        `Building a Digital Humanities Portfolio`,
      ],
      'advanced': [
        `Advanced Theoretical Frameworks in ${mainTopic}`,
        `Machine Learning, AI, and Humanistic Inquiry`,
        `Large-Scale Digital Editions and Corpora`,
        `Interdisciplinary Project Leadership`,
        `Grant Writing and Digital Humanities Infrastructure`,
        `Peer Review, Publication, and Conference Skills`,
        `Dissertation or Major Digital Project`,
        `Teaching Digital Humanities and Public Scholarship`,
        `Emerging Technologies and Future Directions`,
        `Capstone and Professional Launch`,
      ],
    };
  } else {
    // Generic fallback for any Arts & Humanities subcategory
    templates = {
      'beginner': [
        `Introduction to ${mainTopic}`,
        `${mainTopic} Foundations and Core Concepts`,
        `Essential Methods and Practices in ${mainTopic}`,
        `Critical Analysis and Interpretation in ${mainTopic}`,
        `Building Real-World Skills in ${mainTopic}`,
        `${mainTopic} Best Practices and Next Steps`,
      ],
      'intermediate': [
        `Advanced ${mainTopic} Concepts`,
        `Core Methods and Theoretical Frameworks in ${mainTopic}`,
        `Designing and Implementing ${mainTopic} Projects`,
        `Research, Writing, and Presentation in ${mainTopic}`,
        `Integrating ${mainTopic} with Real-World Contexts`,
        `Ethics, Evaluation, and Quality in ${mainTopic}`,
        `Collaboration and Professional Workflow in ${mainTopic}`,
        `Building a Portfolio or Research Project in ${mainTopic}`,
      ],
      'advanced': [
        `Advanced ${mainTopic} Theory and Intellectual History`,
        `Complex Methods and Specialized Approaches in ${mainTopic}`,
        `Synthesis and Depth in ${mainTopic}`,
        `Ethics, Risk, and Responsibility in ${mainTopic}`,
        `Teaching, Mentoring, and Public Engagement in ${mainTopic}`,
        `Professional Integration and Leadership`,
        `Advanced Research and Scholarly Output`,
        `Sustained Project or Dissertation Work`,
        `Applied and Professional Contexts for ${mainTopic}`,
        `Emerging Trends and Future Directions in ${mainTopic}`,
      ],
    };
  }

  const level = (course.level || 'beginner').toLowerCase();
  let templateList = templates['beginner'];
  if (level.includes('intermediate')) templateList = templates['intermediate'];
  if (level.includes('advanced')) templateList = templates['advanced'];

  for (let i = 0; i < numModules; i++) {
    modules.push({
      num: i + 1,
      name: templateList[i] || `${mainTopic} Module ${i + 1}`,
      chapters: chaptersPerModule,
    });
  }

  console.log(`   Built default structure with ${modules.length} modules.`);
  return modules;
}



// ───────────────────────────────────────────────────────────────
// MODULE TEXT NORMALIZATION
// ───────────────────────────────────────────────────────────────
function normalizeModuleHeadings(moduleText, moduleNum, moduleName) {
  let normalized = moduleText
    .replace(new RegExp(`#+\\s*Module\\s*${moduleNum}\\s*[-–—:]\\s*(.+?)(?=\\n|$)`, 'i'), `## Module ${moduleNum}: ${moduleName}`)
    .replace(new RegExp(`#+\\s*Module\\s*${moduleNum}\\s*(.+?)(?=\\n|$)`, 'i'), `## Module ${moduleNum}: ${moduleName}`);

  if (!normalized.match(new RegExp(`##\\s*Module\\s*${moduleNum}[:\\s]`, 'i'))) {
    normalized = `## Module ${moduleNum}: ${moduleName}\n\n` + normalized;
  }
  return normalized;
}

function cleanAiSelfCorrections(text) {
  return text
    .replace(/\*?Self-correction[^*]*\*?:?[^*\n]*/gi, '')
    .replace(/\*?Correction[^*]*\*?:?[^*\n]*/gi, '')
    .replace(/\*?Note to self[^*]*\*?:?[^*\n]*/gi, '')
    .replace(/\(Self-correction:[^)]*\)/gi, '')
    .replace(/\(Correction:[^)]*\)/gi, '')
    .replace(/\(Note to self:[^)]*\)/gi, '')
    .replace(/\*\*Self-correction:\*\*[^\n]*/gi, '')
    .replace(/\*\*Correction:\*\*[^\n]*/gi, '')
    .replace(/\n{3,}/g, '\n\n');
}

function rewriteStructureTable(content, modules) {
  // Count actual chapters per module from the content
  const actualChapterCounts = new Map();
  const chapterMatches = content.matchAll(/###\s+Chapter\s+(\d+)\.(\d+)/g);
  for (const m of chapterMatches) {
    const moduleNum = parseInt(m[1], 10);
    actualChapterCounts.set(moduleNum, (actualChapterCounts.get(moduleNum) || 0) + 1);
  }

  const tableLines = [
    '## Syllabus Structure',
    '',
    '| Module # | Theme | Chapters |',
    '|----------|-------|----------|',
  ];

  let totalChapters = 0;
  for (const m of modules) {
    const actual = actualChapterCounts.get(m.num) || m.chapters || 0;
    totalChapters += actual;
    tableLines.push(`| ${m.num} | ${m.name} | ${actual} |`);
  }
  tableLines.push('', `Total chapters: ${totalChapters}`, '---');
  const newTable = tableLines.join('\n');

  // Replace existing Syllabus Structure section if present
  const structureRegex = /## Syllabus Structure[\s\S]*?\n---\s*(?=\n## Module|\n# Module|$)/;
  if (structureRegex.test(content)) {
    return content.replace(structureRegex, newTable + '\n');
  }
  return content;
}

function generateCorrectFooter(course, modules, fullContent) {
  const actualChapterCount = (fullContent.match(/### Chapter/g) || []).length;
  return `
> End of Syllabus: ${course.title}
> Course ID: ${course.id}
> Total modules: ${modules.length}
> Total chapters: ${actualChapterCount}
> Level: ${course.level || 'Beginner'}
> Subcategory: ${course.subcategory}
> Generated by: Cohortia Syllabus Generator
> Format: Markdown
`;
}
// ───────────────────────────────────────────────────────────────
// CHAPTER VALIDATION & RE-PROMPTING
// ───────────────────────────────────────────────────────────────
function countChaptersInModule(moduleText, moduleNum) {
  const pattern = new RegExp(`###\\s+Chapter\\s+${moduleNum}\\.(\\d+)`, 'g');
  const found = new Set();
  let match;
  while ((match = pattern.exec(moduleText)) !== null) {
    found.add(parseInt(match[1], 10));
  }
  return Array.from(found).sort((a, b) => a - b);
}

function buildMissingChaptersPrompt(course, moduleIndex, moduleName, missingChapters, existingChapters, previousContext, totalModules, promptSections) {
  const moduleNum = moduleIndex + 1;
  const missingList = missingChapters.map((n) => `Chapter ${moduleNum}.${n}`).join(', ');
  const existingList = existingChapters.map((n) => `Chapter ${moduleNum}.${n}`).join(', ');

  return `
Generate the MISSING chapters for MODULE ${moduleNum} of ${totalModules}: "${moduleName}" for the Cohortia course "${course.title}".

⚠️ CRITICAL: The following chapters were ALREADY generated successfully: ${existingList}
⚠️ CRITICAL: You MUST generate ONLY these MISSING chapters: ${missingList}
⚠️ CRITICAL: Do NOT regenerate the existing chapters. Do NOT write a summary or conclusion. Generate ONLY the missing chapters, each with ALL 6 required sections.

COURSE CONTEXT:
- Course ID: ${course.id}
- Title: ${course.title}
- Level: ${course.level || 'Beginner'}
- Subcategory: ${course.subcategory}
- Skills: ${(course.skills || []).join(', ')}

PREVIOUSLY GENERATED CONTEXT (for consistency):
${previousContext}

MISSING CHAPTERS TO GENERATE:
${missingChapters.map((n) => `- Chapter ${moduleNum}.${n} — (generate a descriptive title and full content)`).join('\n')}

EACH CHAPTER MUST INCLUDE ALL OF THESE SECTIONS:
1. #### Learning objectives (3–5 bullet points, specific and measurable)
2. #### Detailed lesson content (MULTIPLE FULL PARAGRAPHS — this is the longest section. Include real explanations, primary source excerpts, close reading passages, theoretical frameworks, historical context, analogies, common mistakes, interpretive pitfalls, and practical scenarios. NOT bullet points. Write at least 600–800 words per chapter.)
3. #### Key concepts (bullet list of terms and definitions)
4. #### Hands-on activity (a concrete practical exercise: a writing prompt, close reading exercise, analysis task, discussion prompt, creative exercise, or archival/museum activity. Include a template or starter material where applicable.)
5. #### Assessment idea (a quiz question, essay prompt, analysis challenge, or reflection WITH the correct answer, model response, or rubric. Include at least 2 questions per chapter.)
6. #### AI generation note (specific instructions for AI content generation: format, duration, tone, visual style, examples, interactive element. Be specific: "8-minute documentary clip with..." or "10-minute lecture video with primary source close reading...")

WRITING STYLE RULES:
- Write like a knowledgeable instructor speaking directly to the learner.
- Use real examples specific to the course topic, not generic placeholder text.
- Include primary source excerpts, close reading passages, and theoretical frameworks in the correct discipline, period, and methodological approach for the course.
- Explain WHY interpretations matter, not just WHAT happened.
- Address common interpretive pitfalls and beginner mistakes.
- Build progressively: start simple, add complexity within the module.
- Do NOT write "this chapter covers..." or "in this module you will learn..." as the main content. Jump straight into the teaching.
- Include common mistakes, misconceptions, and how to avoid them.
- Include at least one real-world application, historical scenario, or textual case study per chapter.

${promptSections?.format || ''}

OUTPUT ONLY the missing chapter content. Start each chapter with "### Chapter ${moduleNum}.N — Title". Do NOT include the course header, overview, or module heading again. Do NOT regenerate existing chapters. End with a horizontal rule (---).
`;
}
// ───────────────────────────────────────────────────────────────
// VALIDATION — Stricter quality checks
// ───────────────────────────────────────────────────────────────
async function validateSyllabus(outputPath, content, modules = []) {
  const errors = [];

  // Check required sections
  const requiredSections = [
    'Course Overview',
    'Syllabus Structure',
    'Learning objectives',
    'Detailed lesson content',
    'Key concepts',
    'Hands-on activity',
    'Assessment idea',
    'AI generation note',
    'Final Capstone',
    'Final Examination',
  ];

  for (const section of requiredSections) {
    if (!content.includes(section)) {
      errors.push(`Missing required section: "${section}"`);
    }
  }

  // Check for minimum size
  const size = Buffer.byteLength(content, 'utf8');
  if (size < MIN_SYLLABUS_SIZE) {
    errors.push(`File size (${(size / 1024).toFixed(1)} KB) is below minimum threshold (${(MIN_SYLLABUS_SIZE / 1024).toFixed(1)} KB). Content may be too thin.`);
  }

  // Check chapter count matches expected
  const chapterCount = (content.match(/### Chapter/g) || []).length;
  const expectedChapters = modules.reduce((sum, m) => sum + m.chapters, 0);
  if (expectedChapters > 0 && chapterCount < expectedChapters * 0.8) {
    errors.push(`Chapter count (${chapterCount}) is significantly lower than expected (${expectedChapters}). Content may be incomplete.`);
  }

  // Check for assessment answers
  const assessmentMatches = content.match(/#### Assessment idea[\s\S]*?(?=#### |## |# |$)/g) || [];
  let assessmentsWithoutAnswers = 0;
  for (const a of assessmentMatches) {
    if (!a.toLowerCase().includes('answer') && !a.toLowerCase().includes('correct') && !a.toLowerCase().includes('model response') && !a.toLowerCase().includes('rubric')) {
      assessmentsWithoutAnswers++;
    }
  }
  if (assessmentsWithoutAnswers > 0) {
    errors.push(`${assessmentsWithoutAnswers} assessment(s) may be missing answer keys or model responses`);
  }

  // Check for boilerplate red flags
  const boilerplatePhrases = [
    'this module covers the basics of',
    'in this chapter you will learn about',
    'introduction to the topic of',
    'this section provides an overview',
    'the following topics will be covered',
  ];
  for (const phrase of boilerplatePhrases) {
    if (content.toLowerCase().includes(phrase)) {
      errors.push(`Possible boilerplate detected: "${phrase}"`);
    }
  }

  // Check for AI generation notes quality
  const aiNoteMatches = content.match(/#### AI generation note[\s\S]*?(?=#### |## |# |$)/g) || [];
  let weakAiNotes = 0;
  for (const note of aiNoteMatches) {
    const lower = note.toLowerCase();
    if (!lower.includes('minute') && !lower.includes('video') && !lower.includes('demo') && !lower.includes('animation')) {
      weakAiNotes++;
    }
  }
  if (weakAiNotes > 0) {
    errors.push(`${weakAiNotes} AI generation note(s) may be too generic (missing duration/format)`);
  }

  return { errors, valid: errors.length === 0 };
}

// ───────────────────────────────────────────────────────────────
// RESUME HELPERS — Final sections when all modules already exist
// ───────────────────────────────────────────────────────────────
function getExpectedModuleCount(level) {
  const guidelines = getModuleGuidelines(level);
  // Use the midpoint of the range as the default expected count
  return Math.min(guidelines.maxModules, Math.max(guidelines.minModules, Math.floor((guidelines.minModules + guidelines.maxModules) / 2)));
}

async function generateFinalSectionsOnly(course, options = {}) {
  const { promptSections = {} } = options;
  const { targetDir, outputPath } = getOutputPath(course);
  await ensureDir(targetDir);

  console.log(`\n📄 All modules already present for ${course.title}. Generating final sections only...`);

  let fullContent = (await readFileSafe(outputPath, '')).trim();
  if (!fullContent) {
    throw new Error('Cannot generate final sections: existing syllabus file is empty.');
  }

  // Strip any old footer / end-of-syllabus block before appending
  fullContent = fullContent.replace(/> End of Syllabus:[\s\S]*?(?=\n\n|\n#|$)/g, '').trim();

  // Rebuild structure table to match actual content
  let modules = parseModulesFromContent(fullContent);
  const guidelines = getModuleGuidelines(course.level);
  if (modules.length < guidelines.minModules) {
    console.warn(`   Only ${modules.length} modules found, but expected ${guidelines.minModules}-${guidelines.maxModules}.`);
  }
  fullContent = rewriteStructureTable(fullContent, modules);

  const contextSummary = `Course: ${course.title}. Level: ${course.level || 'Beginner'}. ${modules.length} modules total. Skills: ${(course.skills || []).join(', ')}.`;
  const finalPrompt = buildFinalSectionsPrompt(course, contextSummary, promptSections);
  const finalResult = await callGemini({
    systemPrompt: buildSystemPrompt(promptSections),
    userPrompt: finalPrompt,
    maxTokens: MAX_TOKENS_PER_CHUNK,
    temperature: 0.5,
  });

  if (!finalResult.success) {
    throw new Error(`Final sections generation failed: ${finalResult.error}`);
  }

  let finalText = stripMarkdownFences(finalResult.text);
  if (!finalText.endsWith('---')) {
    finalText += '\n\n---\n';
  }
  finalText = cleanAiSelfCorrections(finalText);

  fullContent += '\n\n' + finalText + '\n\n';
  fullContent = rewriteStructureTable(fullContent, modules);

  const correctFooter = generateCorrectFooter(course, modules, fullContent);
  fullContent = fullContent.replace(/> End of Syllabus:[\s\S]*?(?=\n\n|\n#|$)/g, '');
  fullContent = fullContent.trim() + '\n\n' + correctFooter;

  await fs.writeFile(outputPath, fullContent, 'utf8');

  const validation = await validateSyllabus(outputPath, fullContent, modules);
  if (validation.errors.length > 0) {
    console.warn('   ⚠️  Validation warnings:');
    validation.errors.forEach((e) => console.warn(`      - ${e}`));
  } else {
    console.log('   ✓ Validation passed.');
  }

  const finalSize = Buffer.byteLength(fullContent, 'utf8');
  console.log(`\n✅ DONE: ${outputPath}`);
  console.log(`   Size: ${finalSize} bytes (${(finalSize / 1024).toFixed(1)} KB)`);
  console.log(`   Modules: ${modules.length}`);
  console.log(`   Chapters: ${(fullContent.match(/### Chapter/g) || []).length}`);

  return { outputPath, size: finalSize, modules: modules.length };
}

// ───────────────────────────────────────────────────────────────
// INTERACTIVE CLI
// ───────────────────────────────────────────────────────────────
function askQuestion(query) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => rl.question(query, (ans) => { rl.close(); resolve(ans.trim()); }));
}

async function interactiveSubcategoryMenu(catalog, subcategoryName, state) {
  const courses = getCoursesInSubcategory(catalog, subcategoryName);
  if (courses.length === 0) {
    console.error(`Subcategory not found: "${subcategoryName}"`);
    console.error('Available subcategories:');
    catalog.subcategories.forEach((s) => console.error(`  - ${s.name}`));
    return null;
  }

  console.log(`\n📚 Subcategory: ${subcategoryName} (${courses.length} courses)`);
  console.log('─'.repeat(70));

  // Sort by level: Beginner first, then Intermediate, then Advanced
  const levelOrder = { beginner: 1, 'beginner–intermediate': 2, intermediate: 3, advanced: 4 };
  const sorted = [...courses].sort((a, b) => {
    const la = (a.level || 'beginner').toLowerCase();
    const lb = (b.level || 'beginner').toLowerCase();
    return (levelOrder[la] || 99) - (levelOrder[lb] || 99);
  });

  const completed = new Set(state.completed);

  for (let i = 0; i < sorted.length; i++) {
    const c = sorted[i];
    const status = completed.has(c.id) ? '✅' : '⬜';
    const level = c.level || 'Unknown';
    console.log(`  ${status} ${String(i + 1).padStart(2)}. [${level.padEnd(20)}] ${c.title}`);
  }

  console.log('─'.repeat(70));
  console.log('Options: Enter a number to generate that course');
  console.log('         Type "auto" to generate all remaining courses one by one');
  console.log('         Type "list" to show all IDs for reference');
  console.log('         Type "q" to quit');

  const answer = await askQuestion('\nYour choice: ');
  if (answer.toLowerCase() === 'q' || answer.toLowerCase() === 'quit') return null;
  if (answer.toLowerCase() === 'auto') return { mode: 'auto', courses: sorted.filter((c) => !completed.has(c.id)) };
  if (answer.toLowerCase() === 'list') {
    sorted.forEach((c) => console.log(`  ${c.id}: ${c.title}`));
    return interactiveSubcategoryMenu(catalog, subcategoryName, state);
  }

  const num = parseInt(answer, 10);
  if (num >= 1 && num <= sorted.length) {
    return { mode: 'single', course: sorted[num - 1] };
  }

  console.log('Invalid choice. Please enter a number, "auto", "list", or "q".');
  return interactiveSubcategoryMenu(catalog, subcategoryName, state);
}

// ───────────────────────────────────────────────────────────────
// MAIN EXECUTION
// ───────────────────────────────────────────────────────────────
async function main() {
  const args = parseArgs();

  // Apply CLI overrides for generation tuning
  if (args.batchSize && args.batchSize > 0) {
    CHAPTERS_PER_REQUEST = args.batchSize;
  }
  if (args.maxTokens && args.maxTokens > 0) {
    MAX_TOKENS_PER_CHUNK = Math.min(args.maxTokens, 65536);
  }

  const catalog = await loadCatalog();
  const state = await loadState();

  // Determine the most appropriate prompt file for the target subcategory.
  // A subcategory-specific prompt (e.g. prompt-kimi-work-web-development-syllabi.md)
  // is used when available, so examples and depth guidance match the subject.
  let promptSubcategory = args.subcategory;
  if (!args.promptFile && !promptSubcategory && args.courseId) {
    const course = findCourse(catalog, args.courseId);
    if (course) promptSubcategory = course.subcategory;
  }
  if (!args.promptFile && !promptSubcategory && args.resume && state.inProgress) {
    const course = findCourse(catalog, state.inProgress.courseId);
    if (course) promptSubcategory = course.subcategory;
  }

  // Load prompt file for injection
  const promptFilePath = args.promptFile || getPromptFilePath(promptSubcategory);
  const promptFileContent = await readPromptFile(promptFilePath);
  const promptSections = extractPromptSections(promptFileContent);

  console.log('╔══════════════════════════════════════════════════════════════╗');
  console.log('║     Cohortia Syllabus Generator — Arts & Humanities Edition    ║');
  console.log('╠══════════════════════════════════════════════════════════════╣');
  console.log(`║  Model: ${GEMINI_MODEL.padEnd(50)} ║`);
  console.log(`║  Max tokens per chunk: ${String(MAX_TOKENS_PER_CHUNK).padEnd(40)} ║`);
  console.log(`║  API keys configured: ${String(getGeminiKeys().length).padEnd(40)} ║`);
  console.log(`║  Completed courses: ${String(state.completed.length).padEnd(42)} ║`);
  console.log(`║  Prompt file: ${path.basename(promptFilePath).padEnd(47)} ║`);
  console.log(`║  Prompt sections loaded: ${String(Object.values(promptSections).filter(Boolean).length).padEnd(35)} ║`);
  console.log('╚══════════════════════════════════════════════════════════════╝');

  // ── Resume mode ──
  if (args.resume && state.inProgress) {
    console.log(`\n🔄 Resuming course: ${state.inProgress.courseId} at module ${state.inProgress.moduleIndex}`);
    const course = findCourse(catalog, state.inProgress.courseId);
    if (!course) {
      console.error('Course not found in catalog:', state.inProgress.courseId);
      process.exit(1);
    }

    const { outputPath } = getOutputPath(course);
    const existingContent = await readFileSafe(outputPath, '');
    const expectedModules = getExpectedModuleCount(course.level);
    const existingModules = parseExistingModules(existingContent, expectedModules);

    if (existingModules.length >= expectedModules) {
      console.log(`   All ${existingModules.length} modules already present. Generating final sections only...`);
      const result = await generateFinalSectionsOnly(course, { promptSections });
      await markCompleted(state, course.id);
      console.log(`\n✅ Resumed and completed final sections: ${course.title}`);
      return;
    }

    console.log('   Note: Resume regenerates missing modules. Partial module resume is supported via batching.');
    try {
      const result = await generateSyllabus(course, { skipSearch: false, promptSections });
      await markCompleted(state, course.id);
      console.log(`\n✅ Resumed and completed: ${course.title}`);
    } catch (error) {
      console.error(`\n❌ Resume failed: ${course.title}`);
      console.error(`   Error: ${error.message}`);
      console.log(`\n💡 Run again with --resume to continue from the last saved module.`);
      await logError(state, course.id, error);
    }
    return;
  }

  // ── Subcategory mode ──
  if (args.subcategory) {
    const menuResult = await interactiveSubcategoryMenu(catalog, args.subcategory, state);
    if (!menuResult) {
      console.log('Goodbye.');
      process.exit(0);
    }

    if (menuResult.mode === 'single') {
      const course = menuResult.course;
      if (state.completed.includes(course.id)) {
        const overwrite = await askQuestion(`\n"${course.title}" already exists. Overwrite? (y/n): `);
        if (overwrite.toLowerCase() !== 'y') {
          console.log('Skipped.');
          return;
        }
      }
      await setInProgress(state, course.id);
      const result = await generateSyllabus(course, { skipSearch: args.skipSearch, promptSections });
      await markCompleted(state, course.id);
      console.log(`\n✅ Done: ${course.title} → ${result.outputPath}`);
    }

    if (menuResult.mode === 'auto') {
      const remaining = menuResult.courses;
      console.log(`\n🚀 Auto-generating ${remaining.length} courses...`);
      let successCount = 0;
      let failCount = 0;

      for (let i = 0; i < remaining.length; i++) {
        const course = remaining[i];
        const { outputPath } = getOutputPath(course);
        if (await fileExists(outputPath)) {
          const size = await getFileSize(outputPath);
          if (size > 10000) {
            console.log(`\n⏭️  [${i + 1}/${remaining.length}] Skipping "${course.title}" — already exists (${(size / 1024).toFixed(1)} KB)`);
            continue;
          }
        }

        console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
        console.log(`[${i + 1}/${remaining.length}] Generating: ${course.title}`);
        console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);

        try {
          await setInProgress(state, course.id);
          const result = await generateSyllabus(course, { skipSearch: args.skipSearch, promptSections });
          await markCompleted(state, course.id);
          successCount++;
          console.log(`\n✅ Completed: ${course.title} (${(result.size / 1024).toFixed(1)} KB)`);
        } catch (error) {
          failCount++;
          console.error(`\n❌ Failed: ${course.title}`);
          console.error(`   Error: ${error.message}`);
          await logError(state, course.id, error);
        }

        // Pause between courses to avoid rate limits
        if (i < remaining.length - 1) {
          console.log('\n⏳ Pausing 3 seconds before next course...');
          await sleep(3000);
        }
      }

      console.log(`\n🏁 Auto-generation complete.`);
      console.log(`   Success: ${successCount} | Failed: ${failCount} | Total: ${remaining.length}`);
      console.log(`   Total completed: ${state.completed.length} courses`);
      if (failCount > 0) {
        console.log(`   Errors logged in: ${STATE_PATH}`);
      }
    }

    return;
  }

  // ── Single course mode ──
  if (args.courseId) {
    const course = findCourse(catalog, args.courseId);
    if (!course) {
      console.error('Course not found:', args.courseId);
      const likelySubcategory = args.subcategory || 'History & Archaeology';
      console.error(`\nAvailable courses in ${likelySubcategory}:`);
      const sub = catalog.subcategories.find(
        (s) => s.name.toLowerCase() === likelySubcategory.toLowerCase()
      );
      if (sub) {
        sub.courses.forEach((c) => console.error(`  - ${c.id}: ${c.title}`));
      } else {
        console.error('Subcategory not found. Use --subcategory to list courses or check the catalog.');
      }
      process.exit(1);
    }

    if (args.dryRun) {
      await generateSyllabus(course, { dryRun: true, promptSections });
      return;
    }

    await setInProgress(state, course.id);
    try {
      const result = await generateSyllabus(course, { skipSearch: args.skipSearch, promptSections });
      await markCompleted(state, course.id);
      console.log(`\n✅ Done: ${course.title} → ${result.outputPath}`);
    } catch (error) {
      console.error(`\n❌ Failed: ${course.title}`);
      console.error(`   Error: ${error.message}`);
      console.log(`\n💡 Run again with --resume to continue from the last saved module.`);
      await logError(state, course.id, error);
    }
    return;
  }

  // ── No args ──
  console.log('\nUsage:');
  console.log('  node scripts/generate-syllabus-arts-humanities.js --course-id <id>');
  console.log('  node scripts/generate-syllabus-arts-humanities.js --subcategory "Name"');
  console.log('  node scripts/generate-syllabus-arts-humanities.js --subcategory "Name" --auto');
  console.log('  node scripts/generate-syllabus-arts-humanities.js --resume');
  console.log('  node scripts/generate-syllabus-arts-humanities.js --dry-run --course-id <id>');
  console.log('  node scripts/generate-syllabus-arts-humanities.js --prompt-file <path>');
  console.log('  node scripts/generate-syllabus-arts-humanities.js --batch-size 3 --course-id <id>');
  console.log('  node scripts/generate-syllabus-arts-humanities.js --max-tokens 32768 --course-id <id>');
  console.log('\nExample subcategories:');
  catalog.subcategories.slice(0, 5).forEach((s) => console.log(`  "${s.name}" (${s.courseCount} courses)`));
  process.exit(0);
}

main().catch(async (error) => {
  console.error('\n❌ Fatal error:', error.message);
  if (error.stack && process.env.NODE_ENV !== 'production') {
    console.error(error.stack);
  }

  // Try to save state so the user can resume
  try {
    const state = await loadState();
    if (state.inProgress) {
      state.inProgress.updatedAt = new Date().toISOString();
      await saveState(state);
      console.log(`\n💡 State saved. Resume with: node scripts/generate-syllabus-arts-humanities.js --resume`);
    }
  } catch (stateError) {
    // Ignore state save errors
  }

  process.exit(1);
});
