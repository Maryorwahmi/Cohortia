#!/usr/bin/env node
/**
 * gemini-rotating-client.js
 *
 * Self-contained Gemini client with multi-key rotation and free-tier rate-limit
 * awareness. Based on the logic in generate-syllabus-gemini-ai.js so scripts
 * that generate large volumes of content can share the same resilience.
 *
 * Usage:
 *   import { generateCompleteJson } from './gemini-rotating-client.js';
 *   const result = await generateCompleteJson({ prompt, responseSchema, maxTokens });
 */

import { jsonrepair } from 'jsonrepair';
import { loadRepositoryEnv } from './repository-paths.js';

loadRepositoryEnv();

function getConfiguredProvider() {
  return (process.env.AI_PROVIDER || 'gemini').toLowerCase();
}

function getAzureConfig() {
  const endpoint = (process.env.AZURE_OPENAI_ENDPOINT || '').trim();
  const key = (process.env.AZURE_OPENAI_API_KEY || '').trim();
  const deployment = (process.env.AZURE_OPENAI_DEPLOYMENT || '').trim();
  const apiVersion = (process.env.AZURE_OPENAI_API_VERSION || '2024-02-01').trim();
  return { endpoint, key, deployment, apiVersion };
}

const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

const MAX_RETRIES_PER_KEY = 1;

const keyState = {
  rpmLimit: parseInt(process.env.GEMINI_RPM_LIMIT, 10) || 5,
  rpdLimit: parseInt(process.env.GEMINI_RPD_LIMIT, 10) || 20,
  tpmLimit: parseInt(process.env.GEMINI_TPM_LIMIT, 10) || 200000,
  minDelayMs: parseInt(process.env.GEMINI_MIN_DELAY_MS, 10) || 13000,
  requestTimeoutMs: parseInt(process.env.GEMINI_REQUEST_TIMEOUT_MS, 10) || 500000,
  keyUsage: new Map(), // keyIdx -> array of timestamps
  keyTokenUsage: new Map(), // keyIdx -> [{ timestamp, tokens }]
  keyRequestTimes: new Map(), // keyIdx -> [timestamps]
  currentKeyIdx: 0,
  lastSuccessfulKeyIdx: 0,
  exhaustedKeys: new Set(),
};

export function getGeminiKeys() {
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

function estimateTokens(text) {
  if (!text) return 0;
  // Rough estimate: ~4 characters per token for English text.
  return Math.ceil(text.length / 4);
}

function getNow() {
  return Date.now();
}

function getMinuteStart() {
  const now = new Date();
  now.setSeconds(0, 0);
  return now.getTime();
}

function getDayStart() {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return now.getTime();
}

function recordKeyUsage(keyIdx, inputTokens) {
  const now = getNow();
  if (!keyState.keyUsage.has(keyIdx)) keyState.keyUsage.set(keyIdx, []);
  keyState.keyUsage.get(keyIdx).push(now);

  if (!keyState.keyTokenUsage.has(keyIdx)) keyState.keyTokenUsage.set(keyIdx, []);
  keyState.keyTokenUsage.get(keyIdx).push({ timestamp: now, tokens: inputTokens });

  if (!keyState.keyRequestTimes.has(keyIdx)) keyState.keyRequestTimes.set(keyIdx, []);
  keyState.keyRequestTimes.get(keyIdx).push(now);
}

function pruneUsage(keyIdx) {
  const now = getNow();
  const minuteStart = getMinuteStart();
  const dayStart = getDayStart();

  if (keyState.keyUsage.has(keyIdx)) {
    keyState.keyUsage.set(
      keyIdx,
      keyState.keyUsage.get(keyIdx).filter((t) => t >= dayStart)
    );
  }

  if (keyState.keyTokenUsage.has(keyIdx)) {
    keyState.keyTokenUsage.set(
      keyIdx,
      keyState.keyTokenUsage.get(keyIdx).filter((u) => u.timestamp >= minuteStart)
    );
  }
}

function getKeyUsageToday(keyIdx) {
  pruneUsage(keyIdx);
  const usage = keyState.keyUsage.get(keyIdx) || [];
  const dayStart = getDayStart();
  const rpmWindowStart = getNow() - 60 * 1000;
  return {
    daily: usage.filter((t) => t >= dayStart).length,
    recent: usage.filter((t) => t >= rpmWindowStart).length,
  };
}

function getKeyTokenUsageMinute(keyIdx) {
  pruneUsage(keyIdx);
  const usage = keyState.keyTokenUsage.get(keyIdx) || [];
  const minuteStart = getMinuteStart();
  return usage.filter((u) => u.timestamp >= minuteStart).reduce((sum, u) => sum + u.tokens, 0);
}

function isKeyAvailable(keyIdx) {
  if (keyState.exhaustedKeys.has(keyIdx)) return false;
  const usage = getKeyUsageToday(keyIdx);
  if (usage.daily >= keyState.rpdLimit) return false;
  if (usage.recent >= keyState.rpmLimit) return false;
  return true;
}

async function waitForKeyAvailability(keyIdx, estimatedTotalTokens) {
  const tokens = getKeyTokenUsageMinute(keyIdx);
  if (tokens + estimatedTotalTokens > keyState.tpmLimit) {
    const waitMs = 60000 - (getNow() - getMinuteStart());
    console.warn(`  Key ${keyIdx + 1} near TPM limit. Waiting ${Math.ceil(waitMs / 1000)}s...`);
    await new Promise((r) => setTimeout(r, Math.max(1000, waitMs)));
  }

  const usage = getKeyUsageToday(keyIdx);
  if (usage.recent >= keyState.rpmLimit) {
    const waitMs = 60000 - (getNow() - getMinuteStart());
    console.warn(`  Key ${keyIdx + 1} near RPM limit. Waiting ${Math.ceil(waitMs / 1000)}s...`);
    await new Promise((r) => setTimeout(r, Math.max(1000, waitMs)));
  }

  const lastTimes = keyState.keyRequestTimes.get(keyIdx) || [];
  if (lastTimes.length > 0) {
    const lastTime = lastTimes[lastTimes.length - 1];
    const sinceLast = getNow() - lastTime;
    if (sinceLast < keyState.minDelayMs) {
      const waitMs = keyState.minDelayMs - sinceLast;
      await new Promise((r) => setTimeout(r, waitMs));
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

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function extractJson(text) {
  if (!text) return null;
  
  // Try 1: Extract from markdown code fences
  const fenceMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fenceMatch) {
    try {
      const cleaned = fenceMatch[1].trim();
      return JSON.parse(cleaned);
    } catch (e) {
      try {
        const repaired = jsonrepair(fenceMatch[1].trim());
        return JSON.parse(repaired);
      } catch {
        // continue to next method
      }
    }
  }
  
  // Try 2: Extract from braces (find first { and last })
  const braceStart = text.indexOf('{');
  const braceEnd = text.lastIndexOf('}');
  
  if (braceStart !== -1 && braceEnd !== -1 && braceEnd > braceStart) {
    const extracted = text.substring(braceStart, braceEnd + 1);
    
    // Try direct parse
    try {
      return JSON.parse(extracted);
    } catch {
      // Try repair
      try {
        const repaired = jsonrepair(extracted);
        return JSON.parse(repaired);
      } catch {
        // continue
      }
    }
  }
  
  return null;
}

async function callAzureOpenAIForJson(prompt, responseSchema, maxTokens, temperature = 0.35) {
  const { endpoint, key, deployment, apiVersion } = getAzureConfig();
  if (!endpoint || !key || !deployment) {
    return { success: false, error: 'Azure OpenAI is not configured. Set AI_PROVIDER=azure, AZURE_OPENAI_ENDPOINT, AZURE_OPENAI_API_KEY, and AZURE_OPENAI_DEPLOYMENT.' };
  }

  const normalizedEndpoint = endpoint.replace(/\/+$/, '');
  if (!/^https:\/\//i.test(normalizedEndpoint)) {
    return { success: false, error: 'AZURE_OPENAI_ENDPOINT must start with https:// and must not include a deployment path.' };
  }
  const url = `${normalizedEndpoint}/openai/deployments/${deployment}/chat/completions?api-version=${apiVersion}`;

  const body = {
    messages: [
      { role: 'user', content: prompt }
    ],
    max_completion_tokens: maxTokens,
    response_format: { type: 'json_object' }
  };

  // GPT-5 deployments only support the default temperature of 1. Omitting the
  // field lets Azure apply that default; other Azure models can still use the
  // lower-variance temperature passed by the generator.
  if (!/^gpt-5(?:-|$)/i.test(deployment)) {
    body.temperature = temperature;
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': key,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      return { success: false, error: data.error?.message || `HTTP ${response.status}` };
    }

    const text = data.choices?.[0]?.message?.content || '';
    const parsed = extractJson(text);
    if (parsed) {
      return { success: true, data: parsed, raw: text };
    }

    return { success: false, error: 'Could not parse valid JSON from Azure OpenAI response', raw: text };
  } catch (error) {
    const cause = error?.cause?.message || error?.cause?.code;
    return {
      success: false,
      error: `Azure OpenAI request failed for ${new URL(normalizedEndpoint).host}: ${error?.message || 'Unknown error'}${cause ? ` (${cause})` : ''}`,
    };
  }
}

export function logUsageStats() {
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

function summarizeHttpError(errorText) {
  if (!errorText) return "unknown error";
  try {
    const parsed = JSON.parse(errorText);
    const message = parsed?.error?.message || parsed?.message;
    if (typeof message === "string" && message.trim()) return message.trim().slice(0, 300);
  } catch {
    // Provider responses are sometimes plain text rather than JSON.
  }
  return errorText.replace(/\s+/g, " ").trim().slice(0, 300) || "unknown error";
}

async function callGeminiDirect({ prompt, systemPrompt, responseSchema, maxTokens = 95536, temperature = 0.35, model = GEMINI_MODEL }) {
  const keys = getGeminiKeys();
  if (keys.length === 0) {
    return {
      success: false,
      error: 'No Gemini API keys found. Set GEMINI_API_KEY, GEMINI_API_KEYS (comma-separated), or GEMINI_API_KEY_1, GEMINI_API_KEY_2, etc.',
      fatal: true,
    };
  }

  const estimatedInputTokens = estimateTokens((systemPrompt || '') + '\n\n' + prompt);
  const estimatedTotalTokens = estimatedInputTokens + maxTokens;

  if (estimatedInputTokens > keyState.tpmLimit) {
    console.warn(`  ⚠️  Estimated input tokens (${estimatedInputTokens}) exceed TPM limit (${keyState.tpmLimit}). Prompt may be rejected.`);
  }

  const failures = [];

  for (let globalRound = 0; globalRound < MAX_RETRIES_PER_KEY + 1; globalRound++) {
    if (globalRound > 0) {
      const allAtRpd = keys.every((_, idx) => getKeyUsageToday(idx).daily >= keyState.rpdLimit);
      const hasAvailableKey = keys.some((_, idx) => isKeyAvailable(idx));
      if (allAtRpd || !hasAvailableKey) {
        return {
          success: false,
          error: allAtRpd
            ? `All ${keys.length} keys have reached their daily request limit (${keyState.rpdLimit}). Resume tomorrow.`
            : `All ${keys.length} keys are unavailable for this run. Rate-limited keys remain quarantined.`,
          fatal: false,
          dailyLimit: allAtRpd,
          retryable: false,
        };
      }

      const remainingActiveKeys = keys.filter((_, idx) => isKeyAvailable(idx)).length;
      console.warn(`  No key succeeded in round ${globalRound}. ${remainingActiveKeys} active key${remainingActiveKeys === 1 ? "" : "s"} remain; waiting 90s before retry...`);
      await sleep(90000);
    }

    const endpoints = [
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
      `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent`,
    ];

    for (let keyIdx = 0; keyIdx < keys.length; keyIdx++) {
      if (!isKeyAvailable(keyIdx)) continue;

      await waitForKeyAvailability(keyIdx, estimatedTotalTokens);

      const endpointResults = [];
      for (let endpointIdx = 0; endpointIdx < endpoints.length; endpointIdx++) {
        const baseUrl = endpoints[endpointIdx];
        const endpointName = baseUrl.includes('v1beta') ? 'v1beta' : 'v1';
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), keyState.requestTimeoutMs);

          const generationConfig = {
            maxOutputTokens: maxTokens,
            temperature,
            responseMimeType: 'application/json',
          };
          if (responseSchema) {
            generationConfig.responseSchema = responseSchema;
          }

          const contents = [{ role: 'user', parts: [{ text: prompt }] }];
          const body = { contents, generationConfig };
          if (systemPrompt) {
            body.systemInstruction = { parts: [{ text: systemPrompt }] };
          }

          recordKeyUsage(keyIdx, estimatedInputTokens);
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
              const detail = summarizeHttpError(errorText);
              return {
                success: false,
                error: `Gemini rejected the request (HTTP 400): ${detail}`,
                fatal: true,
                retryable: false,
              };
            }

            if (response.status === 404) {
              if (endpointIdx < endpoints.length - 1) {
                console.warn(`  Key ${keyIdx + 1} ${model} 404 on ${endpointName}. Trying alternate endpoint...`);
                endpointResults.push({ status: 404, endpoint: endpointName });
                continue;
              }
              failures.push(`Key ${keyIdx + 1} ${model}: 404 (${summarizeHttpError(errorText)})`);
              break;
            }

            if (response.status === 429) {
              keyState.exhaustedKeys.add(keyIdx);
              console.warn(`  Key ${keyIdx + 1} ${model} rate-limited on ${endpointName} (HTTP 429). Quarantining key for the rest of this run.`);
              failures.push(`Key ${keyIdx + 1} ${model}: 429`);
              break;
            }

            if (response.status === 403) {
              endpointResults.push({ status: 403, endpoint: endpointName });
              if (endpointIdx < endpoints.length - 1) {
                console.warn(`  Key ${keyIdx + 1} ${model} forbidden on ${endpointName} (HTTP 403). Trying alternate endpoint...`);
                continue;
              }
              console.warn(`  Key ${keyIdx + 1} ${model} forbidden on all endpoints (HTTP 403). Marking exhausted.`);
              keyState.exhaustedKeys.add(keyIdx);
              failures.push(`Key ${keyIdx + 1} ${model}: 403 (${summarizeHttpError(errorText)})`);
              break;
            }

            if (response.status === 503) {
              console.warn(`  Model ${model} unavailable on ${endpointName} (HTTP 503).`);
              endpointResults.push({ status: 503, endpoint: endpointName });
              if (endpointIdx < endpoints.length - 1) continue;
              failures.push(`Key ${keyIdx + 1} ${model}: 503 (${summarizeHttpError(errorText)})`);
              break;
            }

            failures.push(`Key ${keyIdx + 1} ${model}: HTTP ${response.status} (${summarizeHttpError(errorText)})`);
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

          return {
            success: true,
            text,
            truncated: candidate.finishReason === 'MAX_TOKENS',
            model,
            keyIdx,
            inputTokens,
            outputTokens,
          };
        } catch (error) {
          if (error.name === 'AbortError') {
            console.warn(`  Key ${keyIdx + 1} ${model} timed out on ${endpointName}. Moving to next key...`);
            failures.push(`Key ${keyIdx + 1} ${model}: timeout`);
            break;
          }

          if (error.message.includes('fetch failed')) {
            const causeCode = error.cause?.code || error.cause?.message || 'unknown cause';
            console.warn(`  Key ${keyIdx + 1} ${model} network error on ${endpointName}: ${causeCode}. Moving to next key...`);
            failures.push(`Key ${keyIdx + 1} ${model}: network error (${causeCode})`);
            break;
          }

          if (error.message.includes('404')) {
            if (endpointIdx < endpoints.length - 1) continue;
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

/**
 * Generate a complete JSON object from Gemini using multi-key rotation and
 * rate-limit awareness. Returns { success: true, data, raw } or { success: false, error }.
 */
function isJsonComplete(text) {
  return extractJson(text) !== null;
}

export async function generateCompleteJson({ prompt, systemPrompt, responseSchema, maxTokens = 95536, temperature = 0.35, model = GEMINI_MODEL, maxContinuations = 1 }) {
  if (getConfiguredProvider() === 'azure') {
    return callAzureOpenAIForJson(prompt, responseSchema, maxTokens, temperature);
  }

  let fullText = '';
  let continuations = 0;
  let lastWasTruncated = false;
  let responseWasTruncated = false;

  const initial = await callGeminiDirect({ prompt, systemPrompt, responseSchema, maxTokens, temperature, model });
  if (!initial.success) return initial;
  fullText += initial.text;
  lastWasTruncated = initial.truncated;
  responseWasTruncated = initial.truncated;

  // A non-truncated malformed response is not recoverable by appending another
  // schema-constrained document. Only continue when Gemini explicitly hit the
  // output-token limit.
  while (lastWasTruncated && continuations < maxContinuations && !isJsonComplete(fullText)) {
    console.log(`  Gemini response reached the output limit; requesting continuation (attempt ${continuations + 1}/${maxContinuations})...`);
    const continuationPrompt = `The previous JSON response was incomplete. Continue EXACTLY from the end of the text below and output only the remaining characters needed to complete the valid JSON object. Do not repeat any text that is already present. Do not add markdown code fences. Output only valid JSON continuation.\n\n${fullText}`;
    const continuation = await callGeminiDirect({
      prompt: continuationPrompt,
      systemPrompt,
      responseSchema: undefined,
      maxTokens,
      temperature,
      model,
    });
    if (!continuation.success) {
      console.warn(`  Continuation request failed: ${continuation.error}`);
      break;
    }
    fullText += continuation.text;
    continuations++;
    lastWasTruncated = continuation.truncated;

    // Check if we now have complete JSON
    if (isJsonComplete(fullText)) {
      console.log(`  ✓ JSON completed after ${continuations} continuation(s)`);
      break;
    }
  }

  const parsed = extractJson(fullText);
  if (parsed) {
    return { success: true, data: parsed, raw: fullText };
  }

  // Log first 500 chars of the response for debugging
  const preview = fullText.substring(0, 500);
  const suffix = fullText.length > 500 ? `... (${fullText.length} total chars)` : '';
  const completionStatus = responseWasTruncated ? 'truncated' : 'incomplete';
  console.error(`\n❌ JSON parsing failed (${completionStatus}). Response preview:\n${preview}${suffix}\n`);

  return {
    success: false,
    error: responseWasTruncated
      ? 'Gemini response was truncated before valid JSON could be completed'
      : 'Gemini returned incomplete JSON without a token-limit finish reason',
    raw: fullText,
    retryable: false,
  };
}
