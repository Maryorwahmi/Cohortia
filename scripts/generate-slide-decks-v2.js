#!/usr/bin/env node
/**
 * generate-slide-decks-v2.js
 *
 * Cohortia Slide-Deck Generator v2 — Reference-quality, presentation-ready output.
 *
 * Reads a Cohortia syllabus markdown file and turns every chapter into a cinematic,
 * teaching-quality slide deck with real images, dense usable content, teacher narration,
 * and a professional PowerPoint export that matches (and exceeds) the reference design.
 *
 * Usage:
 *   node scripts/generate-slide-decks-v2.js --syllabus <path-to-syllabus.md>
 *   node scripts/generate-slide-decks-v2.js --syllabus <path> --pptx --search-images
 *   node scripts/generate-slide-decks-v2.js --syllabus <path> --chapter 1.1
 *   node scripts/generate-slide-decks-v2.js --syllabus <path> --module 1 --pptx
 *   node scripts/generate-slide-decks-v2.js --syllabus <path> --resume
 *   node scripts/generate-slide-decks-v2.js --syllabus <path> --dry-run
 *
 * Env tuning:
 *   GEMINI_MAX_TOKENS=65536
 *   GEMINI_MIN_DELAY_MS=13000
 *   GEMINI_REQUEST_TIMEOUT_MS=180000
 *   GEMINI_SLIDES_PER_CHAPTER=18
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';
import crypto from 'crypto';

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

await loadDotEnvFile(path.resolve(__dirname, '../backend/.env'));

// ───────────────────────────────────────────────────────────────
// CONFIGURATION
// ───────────────────────────────────────────────────────────────
const REPO_ROOT = path.resolve(__dirname, '..');
const STATE_PATH = path.join(REPO_ROOT, 'scripts', '.slide-generation-state-v2.json');
const CACHE_DIR = path.join(REPO_ROOT, 'scripts', '.slide-cache-v2');
const CACHE_VERSION = 1; // bump when slide schema or prompt changes significantly

const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
let MAX_TOKENS_PER_CHUNK = parseInt(process.env.GEMINI_MAX_TOKENS, 10) || 65536;
const SLIDES_PER_CHAPTER = parseInt(process.env.GEMINI_SLIDES_PER_CHAPTER, 10) || 18;
const MAX_RETRIES_PER_KEY = 1;
const RETRY_DELAY_MS = 700;

// ───────────────────────────────────────────────────────────────
// CLI ARGUMENT PARSING
// ───────────────────────────────────────────────────────────────
function parseArgs() {
  const args = process.argv.slice(2);
  const parsed = {
    syllabus: null,
    courseId: null,
    chapter: null,
    module: null,
    pptx: false,
    combinedPptx: false,
    searchImages: false,
    resume: false,
    dryRun: false,
    noCache: false,
    maxTokens: null,
    slidesPerChapter: null,
    outputDir: null,
    fromJson: null,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--syllabus' || arg === '-s') parsed.syllabus = args[++i];
    else if (arg === '--course-id' || arg === '-c') parsed.courseId = args[++i];
    else if (arg === '--chapter') parsed.chapter = args[++i];
    else if (arg === '--module') parsed.module = args[++i];
    else if (arg === '--pptx' || arg === '-p') parsed.pptx = true;
    else if (arg === '--combined-pptx') parsed.combinedPptx = true;
    else if (arg === '--search-images') parsed.searchImages = true;
    else if (arg === '--resume' || arg === '-r') parsed.resume = true;
    else if (arg === '--dry-run' || arg === '-d') parsed.dryRun = true;
    else if (arg === '--no-cache') parsed.noCache = true;
    else if (arg === '--max-tokens') parsed.maxTokens = parseInt(args[++i], 10);
    else if (arg === '--slides-per-chapter') parsed.slidesPerChapter = parseInt(args[++i], 10);
    else if (arg === '--output-dir' || arg === '-o') parsed.outputDir = args[++i];
    else if (arg === '--from-json') parsed.fromJson = args[++i];
    else if (!parsed.syllabus && !arg.startsWith('--')) parsed.syllabus = arg;
  }
  return parsed;
}

// ───────────────────────────────────────────────────────────────
// UTILITY FUNCTIONS
// ───────────────────────────────────────────────────────────────
function slugify(str) {
  return String(str).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function sanitizeFileName(str) {
  return String(str).replace(/[\\/:*?"<>|]/g, '_').replace(/\s+/g, ' ').trim();
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
    .replace(/^```(?:json|markdown|md)?\s*\n/i, '')
    .replace(/\n```\s*$/g, '')
    .trim();
}

function estimateTokens(text) {
  return Math.ceil((text || '').length / 3.5);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function hashString(str) {
  return crypto.createHash('sha256').update(str).digest('hex').slice(0, 12);
}

function askQuestion(query) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => rl.question(query, (ans) => { rl.close(); resolve(ans.trim()); }));
}

function wordCount(text) {
  return String(text).trim().split(/\s+/).filter(Boolean).length;
}

function chunkText(text, maxLen = 120) {
  const lines = String(text).split('\n');
  const result = [];
  for (const line of lines) {
    if (line.length <= maxLen) {
      result.push(line);
    } else {
      const words = line.split(' ');
      let current = '';
      for (const word of words) {
        if ((current + ' ' + word).trim().length > maxLen) {
          if (current) result.push(current.trim());
          current = word;
        } else {
          current = current ? `${current} ${word}` : word;
        }
      }
      if (current) result.push(current.trim());
    }
  }
  return result;
}


// ───────────────────────────────────────────────────────────────
// STATE MANAGEMENT
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

async function markCompleted(state, courseId, chapterKey) {
  const key = `${courseId}:${chapterKey}`;
  if (!state.completed.includes(key)) state.completed.push(key);
  state.inProgress = null;
  await saveState(state);
}

async function setInProgress(state, courseId, chapterKey) {
  state.inProgress = { courseId, chapterKey, updatedAt: new Date().toISOString() };
  await saveState(state);
}

async function logError(state, courseId, chapterKey, error) {
  state.errors.push({ courseId, chapterKey, error: String(error), timestamp: new Date().toISOString() });
  await saveState(state);
}

// ───────────────────────────────────────────────────────────────
// CACHE
// ───────────────────────────────────────────────────────────────
function getCacheDir(courseId) {
  return path.join(CACHE_DIR, slugify(courseId));
}

function getCachePath(courseId, chapterKey) {
  return path.join(getCacheDir(courseId), `${slugify(chapterKey)}.json`);
}

async function saveCache(courseId, chapterKey, data) {
  const cachePath = getCachePath(courseId, chapterKey);
  await fs.mkdir(path.dirname(cachePath), { recursive: true });
  await fs.writeFile(
    cachePath,
    JSON.stringify({ version: CACHE_VERSION, generatedAt: new Date().toISOString(), data }, null, 2),
    'utf8'
  );
}

async function loadCache(courseId, chapterKey) {
  const cachePath = getCachePath(courseId, chapterKey);
  try {
    const text = await fs.readFile(cachePath, 'utf8');
    const parsed = JSON.parse(text);
    if (parsed.version !== CACHE_VERSION) {
      console.log(`      💾 Cache version mismatch (${parsed.version} vs ${CACHE_VERSION}). Regenerating.`);
      return null;
    }
    return parsed.data;
  } catch {
    return null;
  }
}

// ───────────────────────────────────────────────────────────────
// IMAGE RESEARCH (real slide visuals)
// ───────────────────────────────────────────────────────────────
async function fetchSerpApiImages(query, count = 3) {
  const apiKey = process.env.SERPAPI_KEY;
  if (!apiKey) return null;

  const url = new URL('https://serpapi.com/search.json');
  url.searchParams.set('engine', 'google_images');
  url.searchParams.set('q', query);
  url.searchParams.set('api_key', apiKey);
  url.searchParams.set('ijn', '0');

  try {
    const response = await fetch(url.href, { timeout: 15000 });
    if (!response.ok) return null;
    const data = await response.json();
    const images = (data.images_results || []).slice(0, count);
    return images
      .map((img) => ({
        url: img.original || img.thumbnail,
        title: img.title || '',
        source: img.source || '',
      }))
      .filter((img) => img.url);
  } catch {
    return null;
  }
}

async function fetchUnsplashImages(query, count = 3) {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;
  if (!accessKey) return null;

  const url = new URL('https://api.unsplash.com/search/photos');
  url.searchParams.set('query', query);
  url.searchParams.set('per_page', String(count));
  url.searchParams.set('client_id', accessKey);

  try {
    const response = await fetch(url.href, { timeout: 15000 });
    if (!response.ok) return null;
    const data = await response.json();
    return (data.results || []).slice(0, count).map((img) => ({
      url: img.urls?.regular || img.urls?.small,
      title: img.description || img.alt_description || query,
      source: img.user?.name ? `Unsplash / ${img.user.name}` : 'Unsplash',
      attribution: img.links?.html || '',
    })).filter((img) => img.url);
  } catch {
    return null;
  }
}

async function searchImages(query, count = 3) {
  if (!query) return [];
  let results = await fetchSerpApiImages(query, count);
  if (!results || results.length === 0) {
    results = await fetchUnsplashImages(query, count);
  }
  return results || [];
}

async function downloadImage(url, cacheDir) {
  if (!url) return null;
  try {
    const ext = path.extname(new URL(url).pathname).split('?')[0] || '.jpg';
    const safeName = `${hashString(url)}${ext}`;
    const filePath = path.join(cacheDir, safeName);

    if (await fileExists(filePath)) return filePath;

    const response = await fetch(url, { timeout: 15000 });
    if (!response.ok) return null;
    const buffer = Buffer.from(await response.arrayBuffer());
    if (buffer.length < 1024) return null;
    await fs.mkdir(cacheDir, { recursive: true });
    await fs.writeFile(filePath, buffer);
    return filePath;
  } catch {
    return null;
  }
}

async function enrichSlideImages(deck, maxImagesPerSlide = 1) {
  for (const slide of deck.slides) {
    if (!slide.imageSearchQuery) continue;
    const images = await searchImages(slide.imageSearchQuery, maxImagesPerSlide);
    if (images.length > 0) {
      slide.images = images;
      slide.selectedImage = images[0].url;
    }
  }
  return deck;
}


// ───────────────────────────────────────────────────────────────
// GEMINI API CLIENT WITH KEY ROTATION (ported from generate-syllabus-gemini.js)
// ───────────────────────────────────────────────────────────────
const keyState = {
  exhaustedKeys: new Set(),
  keyRequestTimes: new Map(),
  keyTokenCounts: new Map(),
  lastSuccessfulKeyIdx: -1,
  currentKeyIdx: 0,
  rpmLimit: parseInt(process.env.GEMINI_RPM_LIMIT, 10) || 5,
  tpmLimit: parseInt(process.env.GEMINI_TPM_LIMIT, 10) || 200000,
  rpdLimit: parseInt(process.env.GEMINI_RPD_LIMIT, 10) || 20,
  minDelayMs: parseInt(process.env.GEMINI_MIN_DELAY_MS, 10) || 13000,
  requestTimeoutMs: parseInt(process.env.GEMINI_REQUEST_TIMEOUT_MS, 10) || 180000,
};

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
  const oneMinuteAgo = Date.now() - 60000;
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

  if (usage.recent >= keyState.rpmLimit) {
    const oldestRecent = usage.times.find((t) => t > Date.now() - 60000);
    const waitMs = oldestRecent ? (oldestRecent + 60000 - Date.now() + 500) : keyState.minDelayMs;
    console.warn(`  Key ${keyIdx + 1} at RPM limit (${usage.recent}/${keyState.rpmLimit}). Waiting ${Math.ceil(waitMs / 1000)}s...`);
    await sleep(Math.max(waitMs, keyState.minDelayMs));
  }

  const currentTokens = getKeyTokenUsageMinute(keyIdx);
  if (currentTokens + estimatedTokens > keyState.tpmLimit) {
    console.warn(`  Key ${keyIdx + 1} near TPM limit (${currentTokens}/${keyState.tpmLimit} + ${estimatedTokens}). Waiting ${Math.ceil(keyState.minDelayMs / 1000)}s...`);
    await sleep(keyState.minDelayMs);
  }

  const lastTimes = keyState.keyRequestTimes.get(keyIdx) || [];
  if (lastTimes.length > 0) {
    const lastTime = lastTimes[lastTimes.length - 1];
    const sinceLast = Date.now() - lastTime;
    if (sinceLast < keyState.minDelayMs) {
      await sleep(keyState.minDelayMs - sinceLast);
    }
  }
}

function getNextAvailableKeyIndex(keys) {
  for (let offset = 0; offset < keys.length; offset++) {
    const idx = (keyState.currentKeyIdx + offset) % keys.length;
    if (isKeyAvailable(idx)) {
      keyState.currentKeyIdx = (idx + 1) % keys.length;
      return idx;
    }
  }
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

function appearsTruncated(text) {
  const cleaned = text.replace(/\\./g, ' ');
  let openBraces = 0;
  let openBrackets = 0;
  let inString = false;

  for (let i = 0; i < cleaned.length; i++) {
    const char = cleaned[i];
    const prev = cleaned[i - 1];
    if (char === '"' && prev !== '\\') {
      inString = !inString;
      continue;
    }
    if (inString) continue;
    if (char === '{') openBraces++;
    if (char === '}') openBraces--;
    if (char === '[') openBrackets++;
    if (char === ']') openBrackets--;
  }
  return openBraces > 0 || openBrackets > 0 || inString;
}

function extractJson(text) {
  if (!text) return null;
  const fenceMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fenceMatch) {
    try {
      return JSON.parse(fenceMatch[1].trim());
    } catch {
      // continue
    }
  }
  const braceMatch = text.match(/\{[\s\S]*\}/);
  if (braceMatch) {
    try {
      return JSON.parse(braceMatch[0]);
    } catch {
      // continue
    }
  }
  return null;
}

async function callGeminiDirect({ systemPrompt, userPrompt, maxTokens = MAX_TOKENS_PER_CHUNK, temperature = 0.45, responseSchema = null, continuationText = null }) {
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
  const failures = [];

  const generationConfig = {
    temperature,
    maxOutputTokens: maxTokens,
  };

  if (responseSchema) {
    generationConfig.responseMimeType = 'application/json';
    generationConfig.responseSchema = responseSchema;
  }

  let contents = [];
  if (continuationText) {
    contents.push({
      role: 'user',
      parts: [{ text: `The previous JSON response was cut off. Continue EXACTLY from the end of the text below and output only the remaining characters needed to complete the JSON object. Do not repeat any text that is already present. Do not add markdown code fences.\n\n${continuationText}` }],
    });
  } else {
    contents.push({
      role: 'user',
      parts: [{ text: userPrompt }],
    });
  }

  for (let globalRound = 0; globalRound < MAX_RETRIES_PER_KEY + 1; globalRound++) {
    if (globalRound > 0) {
      const allAtRpd = keys.every((_, idx) => getKeyUsageToday(idx).daily >= keyState.rpdLimit);
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

          const body = {
            contents,
            generationConfig,
          };

          if (systemPrompt && !continuationText) {
            body.systemInstruction = { parts: [{ text: systemPrompt }] };
          }

          const response = await fetch(`${baseUrl}?key=${keys[keyIdx]}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
            signal: controller.signal,
          });

          clearTimeout(timeoutId);

          if (!response.ok) {
            const errorText = await response.text();
            if (response.status === 400) {
              console.warn(`  Key ${keyIdx + 1} ${model} HTTP 400. Response: ${errorText.slice(0, 400)}`);
              failures.push(`Key ${keyIdx + 1} ${model}: 400 ${errorText.slice(0, 200)}`);
              break;
            }
            if (response.status === 404 && endpointAttempts < endpoints.length) {
              console.warn(`  Key ${keyIdx + 1} ${model} 404 on ${baseUrl.includes('v1beta') ? 'v1beta' : 'v1'}. Trying alternate endpoint...`);
              continue;
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

async function generateCompleteJson({ systemPrompt, userPrompt, maxTokens = MAX_TOKENS_PER_CHUNK, temperature = 0.45, responseSchema = null, maxContinuations = 2 }) {
  let fullText = '';
  let continuations = 0;

  const initial = await callGeminiDirect({ systemPrompt, userPrompt, maxTokens, temperature, responseSchema });
  if (!initial.success) {
    return { success: false, error: initial.error };
  }
  fullText += initial.text;

  while (continuations < maxContinuations && appearsTruncated(fullText)) {
    console.log('   🔄 Gemini response appears truncated, requesting continuation...');
    const continuation = await callGeminiDirect({
      systemPrompt,
      userPrompt,
      maxTokens,
      temperature,
      responseSchema,
      continuationText: fullText,
    });
    if (!continuation.success) break;
    fullText += continuation.text;
    continuations++;
  }

  const parsed = extractJson(fullText);
  if (parsed) {
    return { success: true, data: parsed, raw: fullText };
  }

  return { success: false, error: 'Could not parse valid JSON from Gemini response', raw: fullText };
}


// ───────────────────────────────────────────────────────────────
// SYLLABUS MARKDOWN PARSER
// ───────────────────────────────────────────────────────────────
function parseYamlFrontmatter(text) {
  const match = text.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
  if (!match) return {};
  const lines = match[1].split(/\n/);
  const meta = {};
  for (const line of lines) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    value = value.replace(/^["']|["']$/g, '');
    meta[key] = value;
  }
  return meta;
}

function extractSection(content, headingRegex) {
  const match = content.match(headingRegex);
  if (!match) return '';
  const start = match.index + match[0].length;
  const nextMatch = content.slice(start).match(/\n#{2,4}\s+/);
  const end = nextMatch ? start + nextMatch.index : content.length;
  return content.slice(start, end).trim();
}

function parseChapter(chapterText, moduleNum, chapterNum) {
  const lines = chapterText.split(/\n/);
  const headingLine = lines[0] || '';
  const titleMatch = headingLine.match(/Chapter\s+\d+\.\d+\s*[-–—]\s*(.+)/i);
  const title = titleMatch ? titleMatch[1].trim() : headingLine.replace(/###\s*/, '').trim();

  const body = lines.slice(1).join('\n');

  const learningObjectives = extractSection(body, /####\s+Learning objectives\s*\n/i);
  const detailedContent = extractSection(body, /####\s+Detailed lesson content\s*\n/i);
  const keyConcepts = extractSection(body, /####\s+Key concepts\s*\n/i);
  const handsOnActivity = extractSection(body, /####\s+Hands-on activity\s*\n/i);
  const assessment = extractSection(body, /####\s+Assessment idea\s*\n/i);
  const aiNote = extractSection(body, /####\s+AI generation note\s*\n/i);

  return {
    moduleNum,
    chapterNum,
    title,
    learningObjectives,
    detailedContent,
    keyConcepts,
    handsOnActivity,
    assessment,
    aiNote,
    raw: chapterText,
  };
}

function parseModulesAndChapters(content) {
  const modules = [];
  const moduleRegex = /##\s+Module\s+(\d+)[:\s]+(.+?)(?=\n)/gi;
  const chapterRegex = /###\s+Chapter\s+(\d+)\.(\d+)\s*[-–—]\s*(.+?)(?=\n)/gi;

  const moduleMatches = [];
  let m;
  while ((m = moduleRegex.exec(content)) !== null) {
    moduleMatches.push({
      num: parseInt(m[1], 10),
      name: m[2].trim(),
      index: m.index,
      length: m[0].length,
    });
  }

  const chapterMatches = [];
  while ((m = chapterRegex.exec(content)) !== null) {
    chapterMatches.push({
      moduleNum: parseInt(m[1], 10),
      chapterNum: parseInt(m[2], 10),
      title: m[3].trim(),
      index: m.index,
      length: m[0].length,
    });
  }

  for (let i = 0; i < moduleMatches.length; i++) {
    const mod = moduleMatches[i];
    const nextModIndex = i + 1 < moduleMatches.length ? moduleMatches[i + 1].index : content.length;
    const modChapters = chapterMatches.filter((c) => c.index >= mod.index && c.index < nextModIndex);

    const chapterObjects = modChapters.map((c) => {
      const nextChapterIndex = modChapters.find((nc) => nc.index > c.index)?.index || nextModIndex;
      const chapterText = content.slice(c.index, nextChapterIndex);
      return parseChapter(chapterText, c.moduleNum, c.chapterNum);
    });

    modules.push({
      num: mod.num,
      name: mod.name,
      chapters: chapterObjects,
    });
  }

  if (modules.length === 0 && chapterMatches.length > 0) {
    const orphanChapters = [];
    for (let i = 0; i < chapterMatches.length; i++) {
      const c = chapterMatches[i];
      const nextIndex = i + 1 < chapterMatches.length ? chapterMatches[i + 1].index : content.length;
      const chapterText = content.slice(c.index, nextIndex);
      orphanChapters.push(parseChapter(chapterText, c.moduleNum, c.chapterNum));
    }
    if (orphanChapters.length > 0) {
      modules.push({ num: 1, name: 'Course Content', chapters: orphanChapters });
    }
  }

  return modules;
}

async function parseSyllabus(filePath) {
  const content = await fs.readFile(filePath, 'utf8');
  const meta = parseYamlFrontmatter(content);
  const body = content.replace(/^---\s*\n[\s\S]*?\n---\s*\n/, '');

  const overviewMatch = body.match(/##\s+Course Overview([\s\S]*?)(?=##\s+|$)/i);
  const overview = overviewMatch ? overviewMatch[1].trim() : '';

  const structureMatch = body.match(/##\s+Syllabus Structure([\s\S]*?)(?=##\s+|$)/i);
  const structureText = structureMatch ? structureMatch[1].trim() : '';

  const modules = parseModulesAndChapters(body);

  return {
    meta,
    overview,
    structureText,
    modules,
    raw: content,
  };
}

function getCourseIdFromSyllabus(syllabus) {
  const fromMeta = syllabus.meta?.course_id || syllabus.meta?.courseId || syllabus.meta?.id;
  if (fromMeta) return fromMeta;
  return slugify(syllabus.meta?.title || 'untitled-course');
}

function getEstimatedDuration(chapter) {
  if (chapter.aiNote) {
    const match = chapter.aiNote.match(/(\d+)\s*[-–]\s*(\d+)\s*minute/i);
    if (match) return `${match[1]}-${match[2]} minutes`;
    const single = chapter.aiNote.match(/(\d+)\s*minute/i);
    if (single) return `${single[1]} minutes`;
  }
  return '10-12 minutes';
}

function getTargetSlideCount(chapter) {
  const durationText = chapter.aiNote || '';
  const match = durationText.match(/(\d+)\s*[-–]\s*(\d+)\s*minute/i);
  if (match) {
    const avgMinutes = (parseInt(match[1], 10) + parseInt(match[2], 10)) / 2;
    return Math.round(avgMinutes * 1.5);
  }
  const single = durationText.match(/(\d+)\s*minute/i);
  if (single) {
    return Math.round(parseInt(single[1], 10) * 1.5);
  }
  return SLIDES_PER_CHAPTER;
}

function getLevelFolder(level) {
  const l = (level || 'Beginner').toLowerCase();
  if (l.includes('foundations')) return 'foundations';
  if (l.includes('beginner')) return 'beginner';
  if (l.includes('intermediate')) return 'intermediate';
  if (l.includes('advanced')) return 'advanced';
  return 'beginner';
}

function getOutputBaseDir(syllabus, args) {
  if (args.outputDir) return path.resolve(args.outputDir);

  const courseId = getCourseIdFromSyllabus(syllabus);
  const level = getLevelFolder(syllabus.meta?.level);
  const subcategory = slugify(syllabus.meta?.subcategory || 'general');

  return path.join(REPO_ROOT, 'course-slides', level, subcategory, slugify(courseId), 'v2');
}

function getChapterFileName(chapter) {
  return `module-${chapter.moduleNum}-chapter-${chapter.chapterNum}-${slugify(chapter.title || 'untitled')}`;
}

function getChapterKey(chapter) {
  return `${chapter.moduleNum}.${chapter.chapterNum}`;
}


// ───────────────────────────────────────────────────────────────
// SLIDE GENERATION ENGINE
// ───────────────────────────────────────────────────────────────
const SLIDE_DECK_RESPONSE_SCHEMA = {
  type: 'object',
  properties: {
    chapterTitle: { type: 'string' },
    estimatedDuration: { type: 'string' },
    slideCount: { type: 'integer' },
    totalDurationSeconds: { type: 'integer' },
    ttsVoice: { type: 'string' },
    musicMood: { type: 'string' },
    slides: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          slideNumber: { type: 'integer' },
          sceneNumber: { type: 'string' },
          type: {
            type: 'string',
            enum: ['title', 'course_overview', 'module_divider', 'hook', 'concept', 'code', 'diagram', 'demo', 'example', 'mistake', 'activity', 'quiz', 'quiz_reveal', 'key_concepts', 'summary', 'transition'],
          },
          layout: { type: 'string' },
          onScreenTitle: { type: 'string' },
          onScreenSubtext: { type: 'string' },
          onScreenText: {
            type: 'array',
            items: { type: 'string' },
          },
          callout: {
            type: 'object',
            properties: {
              type: { type: 'string', enum: ['tip', 'warning', 'success', 'deliverable', 'none'] },
              text: { type: 'string' },
            },
          },
          visualDescription: { type: 'string' },
          imageSearchQuery: { type: 'string' },
          imagePrompt: { type: 'string' },
          speakerScript: { type: 'string' },
          ttsScript: { type: 'string' },
          bRoll: { type: 'string' },
          lowerThird: { type: 'string' },
          durationSeconds: { type: 'integer' },
          animationNotes: { type: 'string' },
          transition: { type: 'string' },
          soundDesign: { type: 'string' },
          interactivity: { type: 'string' },
          assets: {
            type: 'array',
            items: { type: 'string' },
          },
          quizAnswer: { type: 'string' },
          quizExplanation: { type: 'string' },
        },
        required: ['slideNumber', 'sceneNumber', 'type', 'onScreenTitle', 'onScreenText', 'speakerScript', 'durationSeconds'],
      },
    },
  },
  required: ['chapterTitle', 'estimatedDuration', 'slideCount', 'totalDurationSeconds', 'slides'],
};

function buildSlideSystemPrompt() {
  return `You are a senior instructional designer, motion-graphic artist, and presentation director at Cohortia. You create premium, presentation-ready slide decks for online courses. Your output must match or exceed the visual and pedagogical quality of a professionally designed PowerPoint course.

YOUR AUDIENCE AND TONE:
- Speak directly to the learner like a talented mentor sitting next to them.
- Be warm, encouraging, precise, and never patronizing.
- Use real-world examples, concrete numbers, and specific scenarios from the syllabus.
- Avoid filler: never say "in this chapter we will learn" or "this slide covers".
- Build progressively: start with the familiar, then reveal the new idea, then show why it matters.

DESIGN SYSTEM (match the reference quality):
- Light, professional palette: white backgrounds, blue-grey cards (#455A64, #37474F, #90A4AE), subtle shadows, green/red/amber accents.
- Fonts: Quattrocento Sans for body text, monospace for code.
- Widescreen 16:9 layout.
- Consistent header/eyebrow, footer progress indicator, and Cohortia branding.
- Use cards, grids, badges, numbered steps, and callouts — not bullet lists.

WHAT MAKES A TOP-NOTCH SLIDE:
1. VISUAL STORYTELLING. Every slide has a clear focal image, a strong color mood, and purposeful layout.
2. USABLE TEXT DENSITY. On-screen text is concise but substantial. Aim for 600–1,000+ characters of usable slide text per slide. Do not reduce everything to 1–3 words.
3. REAL IMAGERY. Specify real, searchable images (photos of real people, real UIs, real objects) or detailed prompts for AI image generation. No generic clip-art.
4. PEDAGOGICAL CALLOUTS. Include "Teaching Tip", "Safety Warning", "Success Check", "Deliverable", or "Common Mistake" callouts where appropriate.
5. INTERACTIVITY. Design moments where the learner thinks, predicts, or answers before the reveal.
6. TEACHING DEPTH. Explain WHY, not just HOW. Include analogies, common mistakes, and "aha" moments.
7. TEACHER VOICE. Every slide has a full speaker script and a TTS-optimized script with natural pauses.

SLIDE TYPES AND TREATMENT:
- title: cinematic opener with course branding, chapter title, and mood-setting background image.
- course_overview: course title + module cards + learning outcomes + metadata.
- module_divider: module goal + chapter map.
- hook: a real-world problem, surprising stat, or "what if" question that creates curiosity.
- concept: one idea per slide; use analogy visuals, diagrams, or split screens.
- code: actual code in a realistic IDE/terminal frame; include line numbers and highlight keywords.
- diagram: flowcharts, architecture diagrams, or relationship maps.
- demo: screen-recording style walkthrough with cursor movements and callouts.
- example: a concrete scenario with real names, numbers, and outcomes.
- mistake: show the error first, then the fix, with visual tension and relief.
- activity: present the hands-on challenge with clear steps and a "your turn" call-to-action.
- quiz: knowledge check with A/B/C/D or predict-the-output.
- quiz_reveal: the same question with the correct answer highlighted and explained.
- key_concepts: term/definition pairs.
- summary: visually recap the 3–5 key takeaways; tease the next chapter.
- transition: short bridge between major ideas.

INTERACTIVE TECHNIQUES:
- "Pause and predict": ask the learner to guess the output before revealing it.
- "Spot the bug": show code and challenge the learner to find the error.
- "Try it now": give a 10-second micro-exercise during the video.
- "Vote A/B": pose a conceptual choice and explain the correct answer.

QUALITY RULES:
- speakerScript must contain actual teaching, not just a summary of on-screen text.
- visualDescription must be specific enough that a designer could build the scene.
- imageSearchQuery must be concrete (e.g. "python.org downloads page screenshot 2024" not "programming image").
- Every code slide must include real code from the source material.
- Every chapter must have at least one hook, one mistake, one activity, one quiz, one quiz_reveal, and one summary slide.
- Total durationSeconds should match the chapter's estimated video length.
- Do not produce generic placeholder content. If a scene feels generic, make it concrete with a real example.
- Use the provided syllabus source material as authoritative; do not invent topics not in the syllabus.

OUTPUT FORMAT:
Output ONLY a valid JSON object matching the provided response schema. No markdown fences, no explanations outside the JSON.`;
}

function buildSlideUserPrompt(courseMeta, module, chapter, targetSlides, allModules) {
  const duration = getEstimatedDuration(chapter);

  const moduleMap = allModules
    .filter((m) => m.num === module.num)
    .flatMap((m) => m.chapters)
    .map((c) => `  - ${c.moduleNum}.${c.chapterNum}: ${c.title}`)
    .join('\n');

  const sourceChapter = `
### Chapter ${chapter.moduleNum}.${chapter.chapterNum} — ${chapter.title}

#### Learning objectives
${chapter.learningObjectives}

#### Detailed lesson content
${chapter.detailedContent}

#### Key concepts
${chapter.keyConcepts}

#### Hands-on activity
${chapter.handsOnActivity}

#### Assessment idea
${chapter.assessment}

#### AI generation note
${chapter.aiNote}
`;

  const courseSkills = Array.isArray(courseMeta.skills) ? courseMeta.skills.join(', ') : (courseMeta.skills || '');

  return `
Transform the following syllabus chapter into a premium, presentation-ready slide-deck storyboard for a teaching video. Treat this as the pre-production document for a high-quality online course lesson.

PRODUCTION BRIEF:
- Course Title: ${courseMeta.title || 'Untitled Course'}
- Course Level: ${courseMeta.level || 'Beginner'}
- Course Subcategory: ${courseMeta.subcategory || ''}
- Course Skills: ${courseSkills}
- Module ${module.num}: ${module.name}
- Chapter ${chapter.moduleNum}.${chapter.chapterNum}: ${chapter.title}
- Target Duration: ${duration}
- Target Slides: ${targetSlides}
- Module Chapter Map:
${moduleMap}

SOURCE MATERIAL (use this as the authoritative teaching content):
${sourceChapter}

DIRECTION:
1. Open with a cinematic title slide and a strong hook that makes the learner care.
2. Include a module_divider slide that states the module goal and shows the chapter map.
3. Teach the detailed lesson content scene-by-scene. Break complex explanations into multiple slides with real analogies and visuals.
4. For every code example, create a "code" slide with the actual code, line numbers, and keyword highlighting described in visualDescription.
5. Include a "mistake" slide that shows a common error and the fix using before/after visuals.
6. Include an "activity" slide that makes the hands-on exercise feel achievable and exciting.
7. Include a "quiz" slide that asks the learner to predict an outcome or choose the right answer, followed by a "quiz_reveal" slide with the correct answer and explanation.
8. Include a "key_concepts" slide with term/definition pairs from the syllabus.
9. Close with a "summary" slide that reinforces the learning objectives and teases the next chapter.
10. Use real, searchable images and screenshots. Avoid generic illustrations.
11. Make every speaker script feel like a real instructor talking — warm, clear, and expert.
12. Provide ttsScript with natural pauses [pause Xs], [emphasis], and pronunciation hints.
13. Put substantial, usable text on each slide. Aim for 600–1,000+ characters of slide text per slide across onScreenTitle, onScreenSubtext, and onScreenText combined.
14. Include at least one pedagogical callout (tip, warning, success, deliverable) per chapter.

OUTPUT ONLY the valid JSON object matching the schema. No markdown code blocks, no explanations.`;
}

function validateSlideDeck(deck, chapter) {
  const issues = [];

  if (!Array.isArray(deck.slides) || deck.slides.length === 0) {
    issues.push('No slides generated');
    return issues;
  }

  const requiredTypes = new Set(['title', 'summary']);
  const foundTypes = new Set(deck.slides.map((s) => s.type).filter(Boolean));

  if (!foundTypes.has('title')) issues.push('Missing title slide');
  if (!foundTypes.has('summary')) issues.push('Missing summary slide');
  if (!foundTypes.has('mistake')) issues.push('Missing mistake slide');
  if (!foundTypes.has('activity')) issues.push('Missing activity slide');
  if (!foundTypes.has('quiz')) issues.push('Missing quiz slide');

  let totalTextChars = 0;
  let genericSlides = 0;

  for (const slide of deck.slides) {
    const script = (slide.speakerScript || '').toLowerCase();
    const visual = (slide.visualDescription || '').toLowerCase();
    const text = `${slide.onScreenTitle || ''} ${slide.onScreenSubtext || ''} ${(slide.onScreenText || []).join(' ')}`;
    totalTextChars += text.length;

    if (script.includes('this slide covers') || script.includes('in this chapter') || script.includes('we will learn')) {
      genericSlides++;
    }
    if (script.length < 40) issues.push(`Slide ${slide.slideNumber} speaker script too short`);
    if (visual.length < 30) issues.push(`Slide ${slide.slideNumber} visual description too vague`);
  }

  const avgTextChars = totalTextChars / deck.slides.length;
  if (avgTextChars < 300) {
    issues.push(`Average slide text density is low (${Math.round(avgTextChars)} chars/slide). Increase on-screen content.`);
  }

  if (genericSlides > 0) issues.push(`${genericSlides} slide(s) contain generic filler phrases`);

  return issues;
}

async function generateSlideDeckForChapter(courseMeta, module, chapter, allModules, options = {}) {
  const { dryRun = false } = options;
  const targetSlides = options.slidesPerChapter || getTargetSlideCount(chapter);

  console.log(`\n   🎬 Chapter ${chapter.moduleNum}.${chapter.chapterNum}: "${chapter.title}"`);
  console.log(`      Target slides: ${targetSlides} | Estimated duration: ${getEstimatedDuration(chapter)}`);

  if (dryRun) {
    return {
      chapterTitle: chapter.title,
      estimatedDuration: getEstimatedDuration(chapter),
      slideCount: targetSlides,
      totalDurationSeconds: targetSlides * 40,
      ttsVoice: 'friendly-professional',
      musicMood: 'curious-upbeat',
      slides: Array.from({ length: Math.min(targetSlides, 3) }, (_, i) => ({
        slideNumber: i + 1,
        sceneNumber: String(i + 1).padStart(2, '0'),
        type: i === 0 ? 'title' : 'concept',
        layout: 'dry-run placeholder',
        onScreenTitle: `Dry-run slide ${i + 1}`,
        onScreenSubtext: '',
        onScreenText: ['Placeholder text'],
        callout: { type: 'none', text: '' },
        visualDescription: 'Placeholder visual',
        imageSearchQuery: '',
        imagePrompt: '',
        speakerScript: 'This is a dry-run placeholder.',
        ttsScript: 'This is a dry-run placeholder.',
        bRoll: '',
        lowerThird: '',
        durationSeconds: 40,
        animationNotes: 'none',
        transition: 'fade',
        soundDesign: '',
        interactivity: 'none',
        assets: [],
        quizAnswer: '',
        quizExplanation: '',
      })),
      dryRun: true,
    };
  }

  const systemPrompt = buildSlideSystemPrompt();
  const userPrompt = buildSlideUserPrompt(courseMeta, module, chapter, targetSlides, allModules);

  const result = await generateCompleteJson({
    systemPrompt,
    userPrompt,
    maxTokens: MAX_TOKENS_PER_CHUNK,
    temperature: 0.45,
    responseSchema: SLIDE_DECK_RESPONSE_SCHEMA,
    maxContinuations: 3,
  });

  if (!result.success) {
    throw new Error(result.error);
  }

  const deck = result.data;
  const validationIssues = validateSlideDeck(deck, chapter);
  if (validationIssues.length > 0) {
    console.warn(`      ⚠️  Quality warnings:`);
    for (const issue of validationIssues.slice(0, 6)) {
      console.warn(`         - ${issue}`);
    }
  }

  return normalizeDeck(deck, chapter);
}

function normalizeDeck(deck, chapter) {
  deck.chapterTitle = deck.chapterTitle || chapter.title;
  deck.estimatedDuration = deck.estimatedDuration || getEstimatedDuration(chapter);
  deck.ttsVoice = deck.ttsVoice || 'friendly-professional';
  deck.musicMood = deck.musicMood || 'curious-upbeat';
  deck.slides = Array.isArray(deck.slides) ? deck.slides : [];
  deck.slideCount = deck.slides.length;
  deck.totalDurationSeconds = deck.slides.reduce((sum, s) => sum + (Number(s.durationSeconds) || 30), 0);

  deck.slides.forEach((slide, idx) => {
    slide.slideNumber = idx + 1;
    slide.sceneNumber = slide.sceneNumber || String(idx + 1).padStart(2, '0');
    slide.type = slide.type || 'concept';
    slide.layout = slide.layout || 'content';
    slide.onScreenTitle = slide.onScreenTitle || '';
    slide.onScreenSubtext = slide.onScreenSubtext || '';
    slide.onScreenText = Array.isArray(slide.onScreenText) ? slide.onScreenText : [];
    slide.callout = slide.callout || { type: 'none', text: '' };
    slide.visualDescription = slide.visualDescription || '';
    slide.imageSearchQuery = slide.imageSearchQuery || '';
    slide.imagePrompt = slide.imagePrompt || '';
    slide.speakerScript = slide.speakerScript || '';
    slide.ttsScript = slide.ttsScript || slide.speakerScript || '';
    slide.bRoll = slide.bRoll || '';
    slide.lowerThird = slide.lowerThird || '';
    slide.durationSeconds = Number(slide.durationSeconds) || 30;
    slide.animationNotes = slide.animationNotes || '';
    slide.transition = slide.transition || 'fade';
    slide.soundDesign = slide.soundDesign || '';
    slide.interactivity = slide.interactivity || 'none';
    slide.assets = Array.isArray(slide.assets) ? slide.assets : [];
    slide.quizAnswer = slide.quizAnswer || '';
    slide.quizExplanation = slide.quizExplanation || '';
  });

  return deck;
}


// ───────────────────────────────────────────────────────────────
// OUTPUT WRITERS
// ───────────────────────────────────────────────────────────────
async function writeJsonDeck(outputDir, chapter, deck) {
  const fileName = `${getChapterFileName(chapter)}.json`;
  const filePath = path.join(outputDir, fileName);
  await fs.writeFile(filePath, JSON.stringify(deck, null, 2), 'utf8');
  return filePath;
}

async function writeMarkdownStoryboard(outputDir, syllabus, module, chapter, deck) {
  const fileName = `${getChapterFileName(chapter)}.md`;
  const filePath = path.join(outputDir, fileName);

  let md = `# ${deck.chapterTitle}\n\n`;
  md += `**Course:** ${syllabus.meta?.title || 'Untitled'}  \n`;
  md += `**Module ${module.num}:** ${module.name}  \n`;
  md += `**Chapter:** ${chapter.moduleNum}.${chapter.chapterNum}  \n`;
  md += `**Estimated Duration:** ${deck.estimatedDuration}  \n`;
  md += `**Slides:** ${deck.slideCount} | **Total Seconds:** ${deck.totalDurationSeconds}  \n`;
  md += `**TTS Voice:** ${deck.ttsVoice || 'friendly-professional'}  \n`;
  md += `**Music Mood:** ${deck.musicMood || 'curious-upbeat'}\n\n`;
  md += `---\n\n`;

  for (const slide of deck.slides) {
    md += `## Scene ${slide.sceneNumber} — Slide ${slide.slideNumber}: ${slide.onScreenTitle || slide.type}\n\n`;
    md += `- **Type:** ${slide.type}\n`;
    md += `- **Layout:** ${slide.layout}\n`;
    md += `- **Duration:** ${slide.durationSeconds}s\n`;
    md += `- **Transition:** ${slide.transition}\n`;
    if (slide.lowerThird) md += `- **Lower Third:** ${slide.lowerThird}\n`;
    if (slide.callout && slide.callout.type !== 'none') md += `- **Callout (${slide.callout.type}):** ${slide.callout.text}\n`;
    if (slide.interactivity && slide.interactivity !== 'none') md += `- **Interactivity:** ${slide.interactivity}\n`;
    if (slide.soundDesign) md += `- **Sound:** ${slide.soundDesign}\n`;

    if (slide.onScreenTitle || slide.onScreenSubtext || slide.onScreenText.length > 0) {
      md += `\n### On Screen\n\n`;
      if (slide.onScreenTitle) md += `**${slide.onScreenTitle}**  \n`;
      if (slide.onScreenSubtext) md += `${slide.onScreenSubtext}  \n`;
      if (slide.onScreenText.length > 0) {
        for (const text of slide.onScreenText) {
          md += `- ${text}\n`;
        }
      }
    }

    md += `\n### Visual Description\n\n${slide.visualDescription}\n\n`;

    if (slide.imageSearchQuery) {
      md += `### Image Search Query\n\n\`${slide.imageSearchQuery}\`\n\n`;
    }
    if (slide.imagePrompt) {
      md += `### AI Image Prompt\n\n${slide.imagePrompt}\n\n`;
    }
    if (slide.selectedImage) {
      md += `### Selected Image\n\n![Slide image](${slide.selectedImage})\n\n`;
    }

    md += `### Instructor Script\n\n${slide.speakerScript}\n\n`;

    if (slide.ttsScript && slide.ttsScript !== slide.speakerScript) {
      md += `### TTS Script\n\n${slide.ttsScript}\n\n`;
    }

    if (slide.bRoll) {
      md += `### B-Roll\n\n${slide.bRoll}\n\n`;
    }

    if (slide.animationNotes) {
      md += `### Animation / Build Notes\n\n${slide.animationNotes}\n\n`;
    }

    if (slide.quizAnswer) {
      md += `### Quiz Answer\n\n${slide.quizAnswer}\n\n`;
    }
    if (slide.quizExplanation) {
      md += `### Quiz Explanation\n\n${slide.quizExplanation}\n\n`;
    }

    if (slide.assets && slide.assets.length > 0) {
      md += `### Assets Needed\n\n`;
      for (const asset of slide.assets) {
        md += `- ${asset}\n`;
      }
      md += `\n`;
    }

    md += `---\n\n`;
  }

  await fs.writeFile(filePath, md, 'utf8');
  return filePath;
}

async function writeNarrationScript(outputDir, chapter, deck) {
  const fileName = `${getChapterFileName(chapter)}-narration.txt`;
  const filePath = path.join(outputDir, fileName);

  let txt = `${deck.chapterTitle}\n`;
  txt += `Module ${chapter.moduleNum} • Chapter ${chapter.moduleNum}.${chapter.chapterNum}\n`;
  txt += `Estimated Duration: ${deck.estimatedDuration}\n`;
  txt += `Total Slides: ${deck.slideCount} | Total Seconds: ${deck.totalDurationSeconds}\n`;
  txt += `TTS Voice: ${deck.ttsVoice || 'friendly-professional'}\n`;
  txt += `Music Mood: ${deck.musicMood || 'curious-upbeat'}\n`;
  txt += `${'='.repeat(70)}\n\n`;

  for (const slide of deck.slides) {
    const script = slide.ttsScript || slide.speakerScript || '';
    if (!script.trim()) continue;
    txt += `[Scene ${slide.sceneNumber} | Slide ${slide.slideNumber} | ${slide.type} | ${slide.durationSeconds}s]\n`;
    if (slide.soundDesign) txt += `# Sound: ${slide.soundDesign}\n`;
    txt += `${script}\n\n`;
  }

  await fs.writeFile(filePath, txt, 'utf8');
  return filePath;
}

async function writeTtsManifest(outputDir, chapter, deck) {
  const fileName = `${getChapterFileName(chapter)}-tts-manifest.json`;
  const filePath = path.join(outputDir, fileName);

  const manifest = {
    chapterTitle: deck.chapterTitle,
    module: chapter.moduleNum,
    chapter: chapter.chapterNum,
    estimatedDuration: deck.estimatedDuration,
    totalDurationSeconds: deck.totalDurationSeconds,
    ttsVoice: deck.ttsVoice || 'friendly-professional',
    musicMood: deck.musicMood || 'curious-upbeat',
    segments: deck.slides.map((slide) => ({
      sceneNumber: slide.sceneNumber,
      slideNumber: slide.slideNumber,
      type: slide.type,
      durationSeconds: slide.durationSeconds,
      script: slide.ttsScript || slide.speakerScript || '',
      soundDesign: slide.soundDesign || '',
      imageUrl: slide.selectedImage || '',
    })),
  };

  await fs.writeFile(filePath, JSON.stringify(manifest, null, 2), 'utf8');
  return filePath;
}

async function writeOutputs(outputDir, syllabus, module, chapter, deck, args) {
  const outputs = [];

  const jsonPath = await writeJsonDeck(outputDir, chapter, deck);
  outputs.push(jsonPath);

  const mdPath = await writeMarkdownStoryboard(outputDir, syllabus, module, chapter, deck);
  outputs.push(mdPath);

  const narrationPath = await writeNarrationScript(outputDir, chapter, deck);
  outputs.push(narrationPath);

  const manifestPath = await writeTtsManifest(outputDir, chapter, deck);
  outputs.push(manifestPath);

  if (args.pptx) {
    const available = await ensurePptxGenjsAvailable();
    if (available) {
      const pptxResult = await exportChapterToPptx(outputDir, chapter, deck, syllabus);
      if (pptxResult.success) {
        outputs.push(pptxResult.filePath);
      } else if (!pptxResult.skipped) {
        console.warn(`      ⚠️  PPTX export failed: ${pptxResult.reason}`);
      }
    }
  }

  return outputs;
}

async function ensurePptxGenjsAvailable() {
  const PptxGenJS = await loadPptxGenjs();
  if (!PptxGenJS) {
    console.error('\n❌ PowerPoint export requested but pptxgenjs is not installed.');
    console.error('   Install it with:');
    console.error('   npm install pptxgenjs --save-dev');
    return false;
  }
  return true;
}

async function loadPptxGenjs() {
  try {
    const pptxgen = await import('pptxgenjs');
    return pptxgen.default || pptxgen;
  } catch (e) {
    return null;
  }
}


// ───────────────────────────────────────────────────────────────
// PPTX RENDERER v2 — Professional light theme
// ───────────────────────────────────────────────────────────────
async function exportChapterToPptx(outputDir, chapter, deck, syllabus) {
  const PptxGenJS = await loadPptxGenjs();
  if (!PptxGenJS) {
    return { success: false, skipped: true, reason: 'pptxgenjs not installed' };
  }

  const courseId = getCourseIdFromSyllabus(syllabus);
  const imageCacheDir = path.join(CACHE_DIR, 'images', slugify(courseId));
  await ensureDir(imageCacheDir);

  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'Cohortia Slide Deck Generator v2';
  pptx.title = deck.chapterTitle || chapter.title;
  pptx.subject = `Module ${chapter.moduleNum} Chapter ${chapter.chapterNum}`;

  // Professional light palette matching the reference
  const COLORS = {
    bg: 'FFFFFF',
    bgSoft: 'F8FAFC',
    card: 'FFFFFF',
    cardBorder: 'CBD5E1',
    title: '1E293B',
    text: '334155',
    muted: '64748B',
    accent: '0EA5E9',
    accentSoft: 'E0F2FE',
    teal: '14B8A6',
    tealSoft: 'CCFBF1',
    green: '22C55E',
    greenSoft: 'DCFCE7',
    red: 'EF4444',
    redSoft: 'FEE2E2',
    amber: 'F59E0B',
    amberSoft: 'FEF3C7',
    purple: '8B5CF6',
    purpleSoft: 'EDE9FE',
    navy: '1E3A8A',
    codeBg: '0F172A',
    codeText: 'E2E8F0',
  };

  const FONT_BODY = 'Arial'; // Quattrocento Sans may not be installed everywhere; pptxgenjs will substitute
  const FONT_HEADING = 'Arial';
  const FONT_CODE = 'Courier New';

  // Define master slide
  pptx.defineSlideMaster({
    title: 'MASTER_SLIDE',
    background: { color: COLORS.bg },
    objects: [
      { rect: { x: 0, y: 0, w: '100%', h: '100%', fill: { color: COLORS.bg } } },
      { rect: { x: 0, y: 0, w: '100%', h: 0.08, fill: { color: COLORS.accent } } },
      { rect: { x: 0, y: 5.45, w: '100%', h: 0.08, fill: { color: COLORS.accent } } },
    ],
  });

  const buildNotes = (slide) => {
    const parts = [];
    if (slide.ttsScript || slide.speakerScript) {
      parts.push('🎙️ NARRATION (TTS):');
      parts.push(slide.ttsScript || slide.speakerScript);
    }
    if (slide.bRoll) {
      parts.push('\n🎞️ B-ROLL:');
      parts.push(slide.bRoll);
    }
    if (slide.animationNotes) {
      parts.push('\n✨ ANIMATION:');
      parts.push(slide.animationNotes);
    }
    if (slide.soundDesign) {
      parts.push('\n🔊 SOUND:');
      parts.push(slide.soundDesign);
    }
    if (slide.interactivity && slide.interactivity !== 'none') {
      parts.push('\n👆 INTERACTIVITY:');
      parts.push(slide.interactivity);
    }
    if (slide.visualDescription) {
      parts.push('\n🎨 VISUAL DESCRIPTION:');
      parts.push(slide.visualDescription);
    }
    return parts.join('\n');
  };

  const addBackgroundImage = async (s, imageUrl, overlayColor = 'FFFFFF', overlayTransparency = 25) => {
    if (!imageUrl) return false;
    const localPath = await downloadImage(imageUrl, imageCacheDir);
    if (!localPath) return false;
    try {
      s.addImage({ path: localPath, x: 0, y: 0, w: '100%', h: '100%', sizing: { type: 'cover', w: '100%', h: '100%' } });
      s.addShape(pptx.shapes.RECTANGLE, {
        x: 0, y: 0, w: '100%', h: '100%',
        fill: { color: overlayColor, transparency: overlayTransparency },
      });
      return true;
    } catch (e) {
      return false;
    }
  };

  const addEyebrow = (s, text, color = COLORS.accent) => {
    if (!text) return;
    s.addShape(pptx.shapes.RECTANGLE, {
      x: 0.5, y: 0.35, w: 2.2, h: 0.32,
      fill: { color },
    });
    s.addText(text, {
      x: 0.5, y: 0.38, w: 2.2, h: 0.28,
      fontSize: 10, color: 'FFFFFF', bold: true, align: 'center', fontFace: FONT_BODY,
    });
  };

  const addFooter = (s, text, progress = '') => {
    const footerText = progress ? `${progress}  |  ${text || 'Cohortia'}` : (text || 'Cohortia');
    s.addText(footerText, {
      x: 0.5, y: 5.48, w: 9, h: 0.25,
      fontSize: 9, color: 'FFFFFF', fontFace: FONT_BODY,
    });
  };

  const addProgressFooter = (s, slide, total) => {
    const progress = `Slide ${slide.slideNumber}/${total}`;
    addFooter(s, slide.lowerThird, progress);
  };

  const addCallout = (s, callout, x, y, w) => {
    if (!callout || callout.type === 'none' || !callout.text) return { h: 0 };
    const colorMap = {
      tip: { bg: COLORS.amberSoft, border: COLORS.amber, icon: '💡' },
      warning: { bg: COLORS.redSoft, border: COLORS.red, icon: '⚠️' },
      success: { bg: COLORS.greenSoft, border: COLORS.green, icon: '✅' },
      deliverable: { bg: COLORS.purpleSoft, border: COLORS.purple, icon: '📦' },
    };
    const style = colorMap[callout.type] || colorMap.tip;
    const lines = chunkText(callout.text, 90);
    const h = Math.max(0.6, lines.length * 0.22 + 0.25);

    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x, y, w, h,
      fill: { color: style.bg },
      line: { color: style.border, width: 1 },
    });
    s.addText(`${style.icon} ${callout.text}`, {
      x: x + 0.1, y: y + 0.1, w: w - 0.2, h: h - 0.2,
      fontSize: 12, color: COLORS.title, fontFace: FONT_BODY,
    });
    return { h };
  };

  const addCardGrid = (s, items, startY, maxItems = 4) => {
    if (!items || items.length === 0) return startY;
    const count = Math.min(items.length, maxItems);
    const cols = count <= 2 ? count : 2;
    const rows = Math.ceil(count / cols);
    const cardW = (9 - 0.4 * (cols - 1)) / cols;
    const cardH = rows === 1 ? 1.8 : 1.3;

    for (let i = 0; i < count; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const x = 0.5 + col * (cardW + 0.4);
      const y = startY + row * (cardH + 0.3);

      s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
        x, y, w: cardW, h: cardH,
        fill: { color: COLORS.card },
        line: { color: COLORS.cardBorder, width: 1 },
      });
      s.addText(items[i], {
        x: x + 0.15, y: y + 0.15, w: cardW - 0.3, h: cardH - 0.3,
        fontSize: 14, color: COLORS.text, fontFace: FONT_BODY,
      });
    }
    return startY + rows * (cardH + 0.3);
  };

  const addTitle = (s, title, subtext = '', y = 0.85) => {
    s.addText(title, {
      x: 0.5, y, w: 9, h: 0.65,
      fontSize: 32, color: COLORS.title, bold: true, fontFace: FONT_HEADING,
    });
    if (subtext) {
      s.addText(subtext, {
        x: 0.5, y: y + 0.65, w: 9, h: 0.4,
        fontSize: 16, color: COLORS.muted, fontFace: FONT_BODY,
      });
    }
  };

  const titleSlide = async (slide) => {
    const s = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
    await addBackgroundImage(s, slide.selectedImage, '1E3A8A', 60);
    s.addShape(pptx.shapes.RECTANGLE, {
      x: 0.8, y: 1.7, w: 8.4, h: 2.6,
      fill: { color: 'FFFFFF', transparency: 15 },
      line: { color: 'FFFFFF', width: 2 },
    });
    s.addText(slide.onScreenTitle || deck.chapterTitle, {
      x: 1, y: 1.95, w: 8, h: 1.2,
      fontSize: 42, color: 'FFFFFF', bold: true, align: 'center', fontFace: FONT_HEADING,
    });
    if (slide.onScreenSubtext || slide.onScreenText.length > 0) {
      const sub = slide.onScreenSubtext || slide.onScreenText.join('  •  ');
      s.addText(sub, {
        x: 1, y: 3.25, w: 8, h: 0.8,
        fontSize: 20, color: 'E0F2FE', align: 'center', fontFace: FONT_BODY,
      });
    }
    addFooter(s, slide.lowerThird);
    s.addNotes(buildNotes(slide));
  };

  const courseOverviewSlide = async (slide) => {
    const s = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
    await addBackgroundImage(s, slide.selectedImage, 'FFFFFF', 85);
    addEyebrow(s, 'COURSE OVERVIEW', COLORS.navy);
    addTitle(s, slide.onScreenTitle || (syllabus.meta?.title || 'Course Overview'));

    const items = slide.onScreenText || [];
    const mid = Math.ceil(items.length / 2);
    const left = items.slice(0, mid);
    const right = items.slice(mid);

    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: 1.7, w: 4.4, h: 3.4,
      fill: { color: COLORS.card },
      line: { color: COLORS.cardBorder, width: 1 },
    });
    s.addText(left.map((t) => ({ text: `• ${t}\n`, options: { fontSize: 14, color: COLORS.text, breakLine: true } })), {
      x: 0.7, y: 1.85, w: 4, h: 3.1, fontFace: FONT_BODY,
    });

    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: 5.1, y: 1.7, w: 4.4, h: 3.4,
      fill: { color: COLORS.card },
      line: { color: COLORS.cardBorder, width: 1 },
    });
    s.addText(right.map((t) => ({ text: `• ${t}\n`, options: { fontSize: 14, color: COLORS.text, breakLine: true } })), {
      x: 5.3, y: 1.85, w: 4, h: 3.1, fontFace: FONT_BODY,
    });

    addCallout(s, slide.callout, 0.5, 5.15, 9);
    addFooter(s, slide.lowerThird);
    s.addNotes(buildNotes(slide));
  };

  const moduleDividerSlide = async (slide) => {
    const s = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
    await addBackgroundImage(s, slide.selectedImage, '0F172A', 55);
    s.addShape(pptx.shapes.RECTANGLE, {
      x: 0, y: 0, w: '100%', h: '100%',
      fill: { color: '0F172A', transparency: 40 },
    });
    addEyebrow(s, `MODULE ${chapter.moduleNum}`, COLORS.accent);
    s.addText(slide.onScreenTitle || `Module ${chapter.moduleNum}: ${module.name}`, {
      x: 0.5, y: 1.3, w: 9, h: 1,
      fontSize: 38, color: 'FFFFFF', bold: true, fontFace: FONT_HEADING,
    });
    if (slide.onScreenText.length > 0) {
      s.addText(slide.onScreenText.map((t) => ({ text: `• ${t}\n`, options: { fontSize: 18, color: 'E2E8F0', breakLine: true } })), {
        x: 0.5, y: 2.5, w: 9, h: 2.5, fontFace: FONT_BODY,
      });
    }
    addFooter(s, slide.lowerThird);
    s.addNotes(buildNotes(slide));
  };

  const hookSlide = async (slide) => {
    const s = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
    await addBackgroundImage(s, slide.selectedImage, 'FFFFFF', 80);
    addEyebrow(s, 'HOOK', COLORS.amber);
    addTitle(s, slide.onScreenTitle);
    if (slide.onScreenText.length > 0) {
      const y = addCardGrid(s, slide.onScreenText, 1.8, 3);
      addCallout(s, slide.callout, 0.5, y + 0.2, 9);
    }
    addFooter(s, slide.lowerThird);
    s.addNotes(buildNotes(slide));
  };

  const conceptSlide = async (slide) => {
    const s = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
    await addBackgroundImage(s, slide.selectedImage, 'FFFFFF', 90);
    addEyebrow(s, 'CONCEPT', COLORS.teal);
    addTitle(s, slide.onScreenTitle, slide.onScreenSubtext);
    if (slide.onScreenText.length > 0) {
      const y = addCardGrid(s, slide.onScreenText, 1.7, 4);
      addCallout(s, slide.callout, 0.5, y + 0.15, 9);
    }
    addFooter(s, slide.lowerThird);
    s.addNotes(buildNotes(slide));
  };

  const codeSlide = (slide) => {
    const s = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
    addEyebrow(s, 'LIVE CODE', COLORS.purple);
    addTitle(s, slide.onScreenTitle, slide.onScreenSubtext);

    const codeLines = slide.onScreenText || [];
    const codeText = codeLines.join('\n');

    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: 0.4, y: 1.55, w: 9.2, h: 3.8,
      fill: { color: COLORS.codeBg },
      line: { color: COLORS.purple, width: 2 },
    });
    s.addShape(pptx.shapes.OVAL, { x: 0.65, y: 1.72, w: 0.14, h: 0.14, fill: { color: COLORS.red } });
    s.addShape(pptx.shapes.OVAL, { x: 0.9, y: 1.72, w: 0.14, h: 0.14, fill: { color: COLORS.amber } });
    s.addShape(pptx.shapes.OVAL, { x: 1.15, y: 1.72, w: 0.14, h: 0.14, fill: { color: COLORS.green } });

    s.addText(codeText, {
      x: 0.6, y: 2.0, w: 8.8, h: 3.2,
      fontSize: 14, color: COLORS.codeText, fontFace: FONT_CODE,
    });

    addCallout(s, slide.callout, 0.5, 4.65, 9);
    addFooter(s, slide.lowerThird || 'Live-code walkthrough');
    s.addNotes(buildNotes(slide));
  };

  const diagramSlide = async (slide) => {
    const s = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
    await addBackgroundImage(s, slide.selectedImage, 'FFFFFF', 90);
    addEyebrow(s, 'DIAGRAM', COLORS.green);
    addTitle(s, slide.onScreenTitle, slide.onScreenSubtext);

    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 1.65, w: 8.8, h: 3.4,
      fill: { color: COLORS.card },
      line: { color: COLORS.cardBorder, width: 1 },
    });

    if (slide.onScreenText.length > 0) {
      s.addText(slide.onScreenText.map((t) => ({ text: t, options: { fontSize: 16, color: COLORS.text, breakLine: true, align: 'center' } })), {
        x: 0.8, y: 1.85, w: 8.4, h: 3.0, fontFace: FONT_BODY,
      });
    }

    addCallout(s, slide.callout, 0.5, 5.15, 9);
    addFooter(s, slide.lowerThird);
    s.addNotes(buildNotes(slide));
  };

  const demoSlide = (slide) => {
    const s = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
    addEyebrow(s, 'DEMO', COLORS.amber);
    addTitle(s, slide.onScreenTitle, slide.onScreenSubtext);

    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: 0.4, y: 1.55, w: 9.2, h: 3.8,
      fill: { color: COLORS.codeBg },
      line: { color: COLORS.amber, width: 2 },
    });

    if (slide.onScreenText.length > 0) {
      s.addText(slide.onScreenText.map((t, i) => {
        const prefix = /^\s*([\dA-Za-z][\.\)\]]\s+)/.test(t) ? '' : `${i + 1}. `;
        return { text: `${prefix}${t}\n`, options: { fontSize: 16, color: COLORS.codeText, breakLine: true } };
      }), {
        x: 0.7, y: 1.8, w: 8.6, h: 3.3, fontFace: FONT_BODY,
      });
    }

    addCallout(s, slide.callout, 0.5, 4.65, 9);
    addFooter(s, slide.lowerThird || 'Screen recording demo');
    s.addNotes(buildNotes(slide));
  };

  const exampleSlide = async (slide) => {
    const s = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
    await addBackgroundImage(s, slide.selectedImage, 'FFFFFF', 85);
    addEyebrow(s, 'EXAMPLE', COLORS.navy);
    addTitle(s, slide.onScreenTitle, slide.onScreenSubtext);

    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: 1.65, w: 9, h: 3.5,
      fill: { color: COLORS.card },
      line: { color: COLORS.cardBorder, width: 1 },
    });

    if (slide.onScreenText.length > 0) {
      s.addText(slide.onScreenText.map((t) => ({ text: `• ${t}\n`, options: { fontSize: 16, color: COLORS.text, breakLine: true } })), {
        x: 0.7, y: 1.85, w: 8.6, h: 3.1, fontFace: FONT_BODY,
      });
    }

    addCallout(s, slide.callout, 0.5, 5.15, 9);
    addFooter(s, slide.lowerThird);
    s.addNotes(buildNotes(slide));
  };

  const mistakeSlide = (slide) => {
    const s = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
    addEyebrow(s, 'COMMON MISTAKE', COLORS.red);
    addTitle(s, slide.onScreenTitle, slide.onScreenSubtext);

    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: 0.35, y: 1.55, w: 4.55, h: 3.8,
      fill: { color: COLORS.redSoft },
      line: { color: COLORS.red, width: 2 },
    });
    s.addText('❌ BEFORE', { x: 0.55, y: 1.7, w: 4.15, h: 0.35, fontSize: 14, color: COLORS.red, bold: true, fontFace: FONT_BODY });

    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: 5.1, y: 1.55, w: 4.55, h: 3.8,
      fill: { color: COLORS.greenSoft },
      line: { color: COLORS.green, width: 2 },
    });
    s.addText('✅ AFTER', { x: 5.3, y: 1.7, w: 4.15, h: 0.35, fontSize: 14, color: COLORS.green, bold: true, fontFace: FONT_BODY });

    if (slide.onScreenText.length > 0) {
      const mid = Math.ceil(slide.onScreenText.length / 2);
      const before = slide.onScreenText.slice(0, mid);
      const after = slide.onScreenText.slice(mid);
      s.addText(before.map((t) => ({ text: `• ${t}\n`, options: { fontSize: 13, color: COLORS.text, breakLine: true } })), {
        x: 0.55, y: 2.15, w: 4.15, h: 3.0, fontFace: FONT_BODY,
      });
      s.addText(after.map((t) => ({ text: `• ${t}\n`, options: { fontSize: 13, color: COLORS.text, breakLine: true } })), {
        x: 5.3, y: 2.15, w: 4.15, h: 3.0, fontFace: FONT_BODY,
      });
    }

    addCallout(s, slide.callout, 0.5, 4.65, 9);
    addFooter(s, slide.lowerThird);
    s.addNotes(buildNotes(slide));
  };

  const activitySlide = (slide) => {
    const s = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
    addEyebrow(s, 'YOUR TURN', COLORS.green);
    addTitle(s, slide.onScreenTitle, slide.onScreenSubtext);

    if (slide.onScreenText.length > 0) {
      s.addText(slide.onScreenText.map((t, i) => {
        const prefix = /^\s*([\dA-Za-z][\.\)\]]\s+)/.test(t) ? '' : `${i + 1}. `;
        return { text: `${prefix}${t}\n`, options: { fontSize: 16, color: COLORS.text, breakLine: true } };
      }), {
        x: 0.6, y: 1.65, w: 8.8, h: 3.0, fontFace: FONT_BODY,
      });
    }

    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: 3, y: 4.85, w: 4, h: 0.7,
      fill: { color: COLORS.green },
    });
    s.addText('▶ PAUSE & TRY', {
      x: 3, y: 4.9, w: 4, h: 0.6,
      fontSize: 16, color: 'FFFFFF', bold: true, align: 'center', fontFace: FONT_BODY,
    });

    addCallout(s, slide.callout, 0.5, 4.15, 9);
    addFooter(s, slide.lowerThird);
    s.addNotes(buildNotes(slide));
  };

  const quizSlide = (slide) => {
    const s = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
    addEyebrow(s, 'QUICK CHECK', COLORS.amber);
    addTitle(s, slide.onScreenTitle, slide.onScreenSubtext);

    const items = slide.onScreenText || [];
    const question = items[0] || '';
    const options = items.slice(1);

    if (question) {
      s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
        x: 0.5, y: 1.55, w: 9, h: 1.0,
        fill: { color: COLORS.amberSoft },
        line: { color: COLORS.amber, width: 1 },
      });
      s.addText(question, {
        x: 0.7, y: 1.7, w: 8.6, h: 0.7,
        fontSize: 18, color: COLORS.title, bold: true, fontFace: FONT_BODY,
      });
    }

    const labels = ['A', 'B', 'C', 'D'];
    options.forEach((opt, i) => {
      const row = Math.floor(i / 2);
      const col = i % 2;
      const x = 0.5 + col * 4.6;
      const y = 2.75 + row * 1.15;
      s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
        x, y, w: 4.4, h: 0.95,
        fill: { color: COLORS.card },
        line: { color: COLORS.cardBorder, width: 1 },
      });
      s.addText(`${labels[i]}) ${opt}`, {
        x: x + 0.15, y: y + 0.25, w: 4.1, h: 0.55,
        fontSize: 15, color: COLORS.text, fontFace: FONT_BODY,
      });
    });

    addFooter(s, slide.lowerThird);
    s.addNotes(buildNotes(slide));
  };

  const quizRevealSlide = (slide) => {
    const s = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
    addEyebrow(s, 'ANSWER', COLORS.green);
    addTitle(s, slide.onScreenTitle || 'Answer Reveal');

    if (slide.quizAnswer) {
      s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
        x: 0.5, y: 1.55, w: 9, h: 1.0,
        fill: { color: COLORS.greenSoft },
        line: { color: COLORS.green, width: 2 },
      });
      s.addText(`✅ ${slide.quizAnswer}`, {
        x: 0.7, y: 1.7, w: 8.6, h: 0.7,
        fontSize: 18, color: COLORS.title, bold: true, fontFace: FONT_BODY,
      });
    }

    if (slide.quizExplanation || slide.onScreenText.length > 0) {
      const text = slide.quizExplanation || slide.onScreenText.join('\n');
      s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
        x: 0.5, y: 2.75, w: 9, h: 2.4,
        fill: { color: COLORS.card },
        line: { color: COLORS.cardBorder, width: 1 },
      });
      s.addText(text, {
        x: 0.7, y: 2.9, w: 8.6, h: 2.1,
        fontSize: 14, color: COLORS.text, fontFace: FONT_BODY,
      });
    }

    addFooter(s, slide.lowerThird);
    s.addNotes(buildNotes(slide));
  };

  const keyConceptsSlide = (slide) => {
    const s = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
    addEyebrow(s, 'KEY CONCEPTS', COLORS.navy);
    addTitle(s, slide.onScreenTitle, slide.onScreenSubtext);

    const items = slide.onScreenText || [];
    const pairs = [];
    for (let i = 0; i < items.length; i += 2) {
      pairs.push({ term: items[i], def: items[i + 1] || '' });
    }

    pairs.forEach((pair, i) => {
      const row = Math.floor(i / 2);
      const col = i % 2;
      const x = 0.4 + col * 4.6;
      const y = 1.6 + row * 1.35;
      s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
        x, y, w: 4.5, h: 1.2,
        fill: { color: COLORS.card },
        line: { color: COLORS.cardBorder, width: 1 },
      });
      s.addText(pair.term, {
        x: x + 0.12, y: y + 0.1, w: 4.26, h: 0.35,
        fontSize: 13, color: COLORS.accent, bold: true, fontFace: FONT_BODY,
      });
      s.addText(pair.def, {
        x: x + 0.12, y: y + 0.45, w: 4.26, h: 0.65,
        fontSize: 11, color: COLORS.text, fontFace: FONT_BODY,
      });
    });

    addFooter(s, slide.lowerThird);
    s.addNotes(buildNotes(slide));
  };

  const summarySlide = async (slide) => {
    const s = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
    await addBackgroundImage(s, slide.selectedImage, 'FFFFFF', 90);
    addEyebrow(s, 'SUMMARY', COLORS.green);
    addTitle(s, slide.onScreenTitle || 'Key Takeaways', slide.onScreenSubtext);

    if (slide.onScreenText.length > 0) {
      s.addText(slide.onScreenText.map((t) => ({
        text: `✓ ${t}\n`,
        options: { fontSize: 17, color: COLORS.text, breakLine: true },
      })), {
        x: 0.6, y: 1.7, w: 8.8, h: 3.3, fontFace: FONT_BODY,
      });
    }

    addCallout(s, slide.callout, 0.5, 4.85, 9);
    addFooter(s, slide.lowerThird);
    s.addNotes(buildNotes(slide));
  };

  const transitionSlide = async (slide) => {
    const s = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
    await addBackgroundImage(s, slide.selectedImage, '1E3A8A', 55);
    if (slide.onScreenTitle) {
      s.addText(slide.onScreenTitle, {
        x: 0.5, y: 2.4, w: 9, h: 1.0,
        fontSize: 40, color: 'FFFFFF', bold: true, align: 'center', fontFace: FONT_HEADING,
      });
    }
    if (slide.onScreenText.length > 0) {
      s.addText(slide.onScreenText[0], {
        x: 0.5, y: 3.5, w: 9, h: 0.8,
        fontSize: 20, color: 'E0F2FE', align: 'center', fontFace: FONT_BODY,
      });
    }
    addFooter(s, slide.lowerThird);
    s.addNotes(buildNotes(slide));
  };

  const defaultSlide = async (slide) => {
    const s = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
    await addBackgroundImage(s, slide.selectedImage, 'FFFFFF', 92);
    addTitle(s, slide.onScreenTitle, slide.onScreenSubtext);
    if (slide.onScreenText.length > 0) {
      s.addText(slide.onScreenText.map((t) => ({ text: `• ${t}\n`, options: { fontSize: 18, color: COLORS.text, breakLine: true } })), {
        x: 0.6, y: 1.65, w: 8.8, h: 3.3, fontFace: FONT_BODY,
      });
    }
    addCallout(s, slide.callout, 0.5, 4.85, 9);
    addFooter(s, slide.lowerThird);
    s.addNotes(buildNotes(slide));
  };

  for (const slide of deck.slides) {
    try {
      switch (slide.type) {
        case 'title': await titleSlide(slide); break;
        case 'course_overview': await courseOverviewSlide(slide); break;
        case 'module_divider': await moduleDividerSlide(slide); break;
        case 'hook': await hookSlide(slide); break;
        case 'concept': await conceptSlide(slide); break;
        case 'code': codeSlide(slide); break;
        case 'diagram': await diagramSlide(slide); break;
        case 'demo': demoSlide(slide); break;
        case 'example': await exampleSlide(slide); break;
        case 'mistake': mistakeSlide(slide); break;
        case 'activity': activitySlide(slide); break;
        case 'quiz': quizSlide(slide); break;
        case 'quiz_reveal': quizRevealSlide(slide); break;
        case 'key_concepts': keyConceptsSlide(slide); break;
        case 'summary': await summarySlide(slide); break;
        case 'transition': await transitionSlide(slide); break;
        default: await defaultSlide(slide);
      }
    } catch (e) {
      console.warn(`      ⚠️  Error adding slide ${slide.slideNumber}: ${e.message}`);
    }
  }

  const fileName = `${getChapterFileName(chapter)}.pptx`;
  const filePath = path.join(outputDir, fileName);
  await pptx.writeFile({ fileName: filePath });
  return { success: true, filePath };
}


// ───────────────────────────────────────────────────────────────
// COMBINED PPTX EXPORT
// ───────────────────────────────────────────────────────────────
async function exportCombinedPptx(outputDir, syllabus, allDecks) {
  const PptxGenJS = await loadPptxGenjs();
  if (!PptxGenJS) {
    return { success: false, skipped: true, reason: 'pptxgenjs not installed' };
  }

  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'Cohortia Slide Deck Generator v2';
  pptx.title = `${syllabus.meta?.title || 'Course'} — Complete Slides`;

  const COLORS = {
    bg: 'FFFFFF',
    title: '1E293B',
    text: '334155',
    accent: '0EA5E9',
    muted: '64748B',
    card: 'F8FAFC',
    cardBorder: 'CBD5E1',
  };

  const FONT_BODY = 'Arial';
  const FONT_HEADING = 'Arial';

  // Course title slide
  const courseTitleSlide = pptx.addSlide();
  courseTitleSlide.background = { color: COLORS.bg };
  courseTitleSlide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 0.15, fill: { color: COLORS.accent } });
  courseTitleSlide.addText(syllabus.meta?.title || 'Course Slides', {
    x: 0.5, y: 2.2, w: '90%', h: 1.2,
    fontSize: 44, color: COLORS.title, bold: true, align: 'center', fontFace: FONT_HEADING,
  });
  courseTitleSlide.addText(syllabus.meta?.subcategory || '', {
    x: 0.5, y: 3.5, w: '90%', h: 0.6,
    fontSize: 20, color: COLORS.accent, align: 'center', fontFace: FONT_BODY,
  });
  courseTitleSlide.addText(`Level: ${syllabus.meta?.level || 'Beginner'}`, {
    x: 0.5, y: 4.2, w: '90%', h: 0.5,
    fontSize: 16, color: COLORS.muted, align: 'center', fontFace: FONT_BODY,
  });

  for (const { module, chapter, deck } of allDecks) {
    const divider = pptx.addSlide();
    divider.background = { color: COLORS.accent };
    divider.addText(`Module ${chapter.moduleNum} • Chapter ${chapter.chapterNum}`, {
      x: 0.5, y: 2.4, w: '90%', h: 0.6,
      fontSize: 18, color: 'FFFFFF', align: 'center', fontFace: FONT_BODY,
    });
    divider.addText(deck.chapterTitle, {
      x: 0.5, y: 3.0, w: '90%', h: 1.0,
      fontSize: 34, color: 'FFFFFF', bold: true, align: 'center', fontFace: FONT_HEADING,
    });

    for (const slide of deck.slides) {
      const s = pptx.addSlide();
      s.background = { color: COLORS.bg };
      s.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 0.12, fill: { color: COLORS.accent } });
      s.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 5.5, w: '100%', h: 0.12, fill: { color: COLORS.accent } });
      s.addText(slide.onScreenTitle || '', {
        x: 0.4, y: 0.2, w: '92%', h: 0.6,
        fontSize: 24, color: 'FFFFFF', bold: true, fontFace: FONT_HEADING,
      });

      const items = slide.onScreenText || [];
      if (items.length > 0) {
        s.addText(items.map((t) => ({ text: `• ${t}\n`, options: { fontSize: slide.type === 'code' ? 13 : 17, color: COLORS.text, breakLine: true, fontFace: slide.type === 'code' ? 'Courier New' : FONT_BODY } })), {
          x: 0.5, y: 1.1, w: '90%', h: 4.0,
        });
      }

      if (slide.speakerScript) {
        s.addNotes(slide.speakerScript);
      }
    }
  }

  const fileName = `complete-${slugify(getCourseIdFromSyllabus(syllabus))}-v2.pptx`;
  const filePath = path.join(outputDir, fileName);
  await pptx.writeFile({ fileName: filePath });
  return { success: true, filePath };
}


// ───────────────────────────────────────────────────────────────
// RENDER FROM EXISTING JSON
// ───────────────────────────────────────────────────────────────
async function renderFromJson(args) {
  const jsonPath = path.resolve(args.fromJson);
  if (!(await fileExists(jsonPath))) {
    console.error(`JSON file not found: ${jsonPath}`);
    process.exit(1);
  }

  console.log(`\n📂 Rendering from JSON: ${jsonPath}`);
  const deckRaw = await fs.readFile(jsonPath, 'utf8');
  const deck = JSON.parse(deckRaw);

  // Infer chapter/module info from filename or deck
  const baseName = path.basename(jsonPath, '.json');
  const moduleMatch = baseName.match(/module-(\d+)-chapter-(\d+)/);
  const chapter = {
    moduleNum: moduleMatch ? parseInt(moduleMatch[1], 10) : 1,
    chapterNum: moduleMatch ? parseInt(moduleMatch[2], 10) : 1,
    title: deck.chapterTitle || baseName,
  };
  const module = { num: chapter.moduleNum, name: 'Module' };

  const outputDir = args.outputDir || path.join(path.dirname(jsonPath), 'v2-render');
  await ensureDir(outputDir);

  const normalizedDeck = normalizeDeck(deck, chapter);
  if (args.searchImages) {
    await enrichSlideImages(normalizedDeck, 1);
  }

  const outputs = [];
  if (args.pptx) {
    const available = await ensurePptxGenjsAvailable();
    if (available) {
      // Create a minimal syllabus meta for the renderer
      const syllabus = { meta: { title: deck.chapterTitle || 'Course', level: 'Beginner', subcategory: '' } };
      const pptxResult = await exportChapterToPptx(outputDir, chapter, normalizedDeck, syllabus);
      if (pptxResult.success) {
        outputs.push(pptxResult.filePath);
        console.log(`   ✅ PPTX: ${path.relative(REPO_ROOT, pptxResult.filePath)}`);
      } else {
        console.warn(`   ⚠️  PPTX export skipped: ${pptxResult.reason}`);
      }
    }
  }

  const mdPath = await writeMarkdownStoryboard(outputDir, { meta: { title: 'Course' } }, module, chapter, normalizedDeck);
  outputs.push(mdPath);
  console.log(`   ✅ Markdown: ${path.relative(REPO_ROOT, mdPath)}`);

  const narrationPath = await writeNarrationScript(outputDir, chapter, normalizedDeck);
  outputs.push(narrationPath);
  console.log(`   ✅ Narration: ${path.relative(REPO_ROOT, narrationPath)}`);

  const manifestPath = await writeTtsManifest(outputDir, chapter, normalizedDeck);
  outputs.push(manifestPath);
  console.log(`   ✅ TTS manifest: ${path.relative(REPO_ROOT, manifestPath)}`);

  console.log(`\n📁 Output: ${outputDir}`);
}

// ───────────────────────────────────────────────────────────────
// FILTERING & ORCHESTRATION
// ───────────────────────────────────────────────────────────────
function filterChapters(modules, args) {
  let selected = [];
  for (const mod of modules) {
    for (const ch of mod.chapters) {
      selected.push({ module: mod, chapter: ch });
    }
  }

  if (args.module) {
    const moduleNum = parseInt(args.module, 10);
    selected = selected.filter((item) => item.module.num === moduleNum);
  }

  if (args.chapter) {
    const [modNum, chNum] = args.chapter.split('.').map((n) => parseInt(n, 10));
    selected = selected.filter((item) => {
      if (modNum && item.module.num !== modNum) return false;
      if (chNum && item.chapter.chapterNum !== chNum) return false;
      return true;
    });
  }

  return selected;
}

function calculateQualityMetrics(deck) {
  if (!deck.slides || deck.slides.length === 0) return null;
  const totalTextChars = deck.slides.reduce((sum, s) => {
    return sum + `${s.onScreenTitle || ''}${s.onScreenSubtext || ''}${(s.onScreenText || []).join('')}`.length;
  }, 0);
  const avgTextChars = totalTextChars / deck.slides.length;
  const images = deck.slides.filter((s) => s.selectedImage).length;
  const requiredTypes = ['title', 'summary', 'mistake', 'activity', 'quiz'];
  const foundTypes = new Set(deck.slides.map((s) => s.type));
  const missingTypes = requiredTypes.filter((t) => !foundTypes.has(t));

  return {
    slideCount: deck.slides.length,
    avgTextChars: Math.round(avgTextChars),
    imageCoverage: `${images}/${deck.slides.length}`,
    missingTypes,
  };
}

async function generateSlideDecks(syllabus, args, state) {
  const items = filterChapters(syllabus.modules, args);
  if (items.length === 0) {
    console.error('No chapters matched the requested filters.');
    return { generated: [], skipped: [], failed: [] };
  }

  const outputDir = getOutputBaseDir(syllabus, args);
  await ensureDir(outputDir);

  console.log(`\n📁 Output directory: ${outputDir}`);
  console.log(`🎬 Chapters to process: ${items.length}`);
  console.log(`💾 PowerPoint export: ${args.pptx || args.combinedPptx ? 'YES' : 'NO'}`);
  console.log(`🖼️  Image search: ${args.searchImages ? 'YES' : 'NO'}`);
  console.log(`\n${'─'.repeat(70)}`);

  const courseId = getCourseIdFromSyllabus(syllabus);
  const generated = [];
  const skipped = [];
  const failed = [];
  const allDecks = [];

  let resumeFound = false;
  if (args.resume && state.inProgress && state.inProgress.courseId === courseId) {
    const resumeKey = state.inProgress.chapterKey;
    console.log(`🔄 Resuming from chapter ${resumeKey}...`);
    for (const item of items) {
      const key = getChapterKey(item.chapter);
      if (key < resumeKey) {
        skipped.push({ key, reason: 'before resume point' });
      }
    }
    items.splice(0, items.findIndex((item) => getChapterKey(item.chapter) >= resumeKey));
    resumeFound = true;
  }

  for (let i = 0; i < items.length; i++) {
    const { module, chapter } = items[i];
    const key = getChapterKey(chapter);

    console.log(`\n[${i + 1}/${items.length}] Module ${module.num} • Chapter ${key}: "${chapter.title}"`);

    const cached = args.noCache ? null : await loadCache(courseId, key);
    if (args.noCache) {
      console.log(`   🔄 Cache bypassed (--no-cache).`);
    }
    if (cached && !args.dryRun) {
      console.log(`   💾 Loaded slide deck from cache.`);
      const normalizedCached = normalizeDeck(cached, chapter);
      const outputs = await writeOutputs(outputDir, syllabus, module, chapter, normalizedCached, args);
      generated.push({ key, fromCache: true, outputs });
      allDecks.push({ module, chapter, deck: normalizedCached });
      console.log(`   ✅ ${normalizedCached.slideCount} slides from cache (${normalizedCached.totalDurationSeconds}s total)`);
      for (const out of outputs) {
        console.log(`      → ${path.relative(REPO_ROOT, out)}`);
      }
      continue;
    }

    await setInProgress(state, courseId, key);

    try {
      const deck = await generateSlideDeckForChapter(syllabus.meta, module, chapter, syllabus.modules, {
        dryRun: args.dryRun,
        slidesPerChapter: args.slidesPerChapter,
      });

      if (!args.dryRun) {
        await enrichSlideImages(deck, args.searchImages ? 1 : 0);
      }

      if (args.dryRun) {
        const jsonName = `${getChapterFileName(chapter)}.json`;
        const mdName = `${getChapterFileName(chapter)}.md`;
        const pptxName = args.pptx ? `${getChapterFileName(chapter)}.pptx` : null;
        console.log(`   ✅ Would generate ${deck.slideCount} slides (${deck.totalDurationSeconds}s total)`);
        console.log(`      → ${path.relative(REPO_ROOT, path.join(outputDir, jsonName))}`);
        console.log(`      → ${path.relative(REPO_ROOT, path.join(outputDir, mdName))}`);
        if (pptxName) console.log(`      → ${path.relative(REPO_ROOT, path.join(outputDir, pptxName))}`);
        generated.push({ key, dryRun: true });
        allDecks.push({ module, chapter, deck });
      } else {
        await saveCache(courseId, key, deck);
        const outputs = await writeOutputs(outputDir, syllabus, module, chapter, deck, args);
        generated.push({ key, fromCache: false, outputs });
        allDecks.push({ module, chapter, deck });

        console.log(`   ✅ Generated ${deck.slideCount} slides (${deck.totalDurationSeconds}s total)`);
        const metrics = calculateQualityMetrics(deck);
        if (metrics) {
          console.log(`      📊 Avg text: ${metrics.avgTextChars} chars/slide | Images: ${metrics.imageCoverage} | Missing types: ${metrics.missingTypes.join(', ') || 'none'}`);
        }
        for (const out of outputs) {
          console.log(`      → ${path.relative(REPO_ROOT, out)}`);
        }
      }

      if (!args.dryRun) {
        await markCompleted(state, courseId, key);
      }
    } catch (error) {
      console.error(`   ❌ Failed: ${error.message}`);
      failed.push({ key, error: error.message });
      await logError(state, courseId, key, error);
    }

    if (i < items.length - 1) {
      await sleep(1000);
    }
  }

  const shouldGenerateCombined = args.combinedPptx || (args.pptx && !args.chapter && !args.module);
  if (shouldGenerateCombined && allDecks.length > 0) {
    const available = await ensurePptxGenjsAvailable();
    if (available) {
      console.log('\n📦 Generating combined PowerPoint deck...');
      try {
        const result = await exportCombinedPptx(outputDir, syllabus, allDecks);
        if (result.success) {
          console.log(`   ✅ Combined deck: ${path.relative(REPO_ROOT, result.filePath)}`);
        } else {
          console.warn(`   ⚠️  Combined deck skipped: ${result.reason}`);
        }
      } catch (e) {
        console.error(`   ❌ Combined deck failed: ${e.message}`);
      }
    }
  }

  return { generated, skipped, failed, outputDir, allDecks };
}

function summarizeResults(results) {
  console.log(`\n${'═'.repeat(70)}`);
  console.log('SUMMARY');
  console.log(`${'═'.repeat(70)}`);
  console.log(`✅ Generated: ${results.generated.length}`);
  console.log(`⏭️  Skipped:  ${results.skipped.length}`);
  console.log(`❌ Failed:   ${results.failed.length}`);
  if (results.failed.length > 0) {
    console.log('\nFailed chapters:');
    for (const f of results.failed) {
      console.log(`   - ${f.key}: ${f.error}`);
    }
  }
  console.log(`\n📁 Output: ${results.outputDir}`);
}

// ───────────────────────────────────────────────────────────────
// MAIN EXECUTION
// ───────────────────────────────────────────────────────────────
async function main() {
  const args = parseArgs();

  if (args.maxTokens && args.maxTokens > 0) {
    MAX_TOKENS_PER_CHUNK = Math.min(args.maxTokens, 65536);
  }

  console.log('╔══════════════════════════════════════════════════════════════╗');
  console.log('║     Cohortia Slide-Deck Generator v2                         ║');
  console.log('╠══════════════════════════════════════════════════════════════╣');
  console.log(`║  Model: ${GEMINI_MODEL.padEnd(50)} ║`);
  console.log(`║  Max tokens per chunk: ${String(MAX_TOKENS_PER_CHUNK).padEnd(40)} ║`);
  console.log(`║  API keys configured: ${String(getGeminiKeys().length).padEnd(41)} ║`);
  console.log('╚══════════════════════════════════════════════════════════════╝');

  if (args.fromJson) {
    await renderFromJson(args);
    return;
  }

  if (!args.syllabus) {
    console.error('\nUsage:');
    console.error('  node scripts/generate-slide-decks-v2.js --syllabus <path-to-syllabus.md>');
    console.error('  node scripts/generate-slide-decks-v2.js --syllabus <path> --pptx --search-images');
    console.error('  node scripts/generate-slide-decks-v2.js --syllabus <path> --chapter 1.1 --no-cache');
    console.error('  node scripts/generate-slide-decks-v2.js --syllabus <path> --module 1 --pptx');
    console.error('  node scripts/generate-slide-decks-v2.js --syllabus <path> --resume');
    console.error('  node scripts/generate-slide-decks-v2.js --syllabus <path> --dry-run');
    console.error('  node scripts/generate-slide-decks-v2.js --from-json <path-to-storyboard.json> --pptx');
    process.exit(1);
  }

  const syllabusPath = path.resolve(args.syllabus);
  if (!(await fileExists(syllabusPath))) {
    console.error(`Syllabus file not found: ${syllabusPath}`);
    process.exit(1);
  }

  console.log(`\n📖 Reading syllabus: ${syllabusPath}`);
  const syllabus = await parseSyllabus(syllabusPath);
  const courseId = getCourseIdFromSyllabus(syllabus);

  console.log(`   Course: ${syllabus.meta?.title || 'Untitled'}`);
  console.log(`   ID: ${courseId}`);
  console.log(`   Modules: ${syllabus.modules.length}`);
  console.log(`   Chapters: ${syllabus.modules.reduce((sum, m) => sum + m.chapters.length, 0)}`);

  if (args.dryRun) {
    console.log('\n🧪 DRY RUN: Will parse and show plan without calling Gemini.');
  }

  const state = await loadState();
  const results = await generateSlideDecks(syllabus, args, state);
  summarizeResults(results);
  logUsageStats();

  if (results.failed.length > 0) {
    console.log(`\n💡 Resume with: node scripts/generate-slide-decks-v2.js --syllabus "${args.syllabus}" --resume`);
    process.exitCode = 1;
  }
}

main().catch(async (error) => {
  console.error('\n❌ Fatal error:', error.message);
  if (error.stack && process.env.NODE_ENV !== 'production') {
    console.error(error.stack);
  }

  try {
    const state = await loadState();
    if (state.inProgress) {
      state.inProgress.updatedAt = new Date().toISOString();
      await saveState(state);
      console.log(`\n💡 State saved. Resume with: node scripts/generate-slide-decks-v2.js --resume`);
    }
  } catch (stateError) {
    // ignore
  }

  process.exit(1);
});
