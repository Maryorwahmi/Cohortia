import 'dotenv/config';

/**
 * Collect all Gemini API keys from environment variables.
 * Supports GEMINI_API_KEY and any numbered GEMINI_API_KEY_N variables.
 */
export function getGeminiKeys() {
  const entries = Object.entries(process.env)
    .filter(([name]) => name === 'GEMINI_API_KEY' || /^GEMINI_API_KEY_\d+$/.test(name))
    .sort(([left], [right]) => {
      if (left === 'GEMINI_API_KEY') return -1;
      if (right === 'GEMINI_API_KEY') return 1;
      return Number(left.slice('GEMINI_API_KEY_'.length)) - Number(right.slice('GEMINI_API_KEY_'.length));
    });

  return [...new Set(entries
    .map(([, value]) => value?.trim())
    .filter((value) => value && !/^replace-with-your-/i.test(value)))];
}

export function getGeminiModel() {
  return getGeminiModelCandidates()[0];
}

export function getGeminiModelCandidates() {
  const configured = (process.env.GEMINI_MODEL || 'gemini-2.5-flash').trim();
  const candidates = [configured || 'gemini-2.5-flash'];

  if (!candidates.includes('gemini-2.5-flash')) {
    candidates.push('gemini-2.5-flash');
  }

  return [...new Set(candidates)];
}

/**
 * Extract JSON object from a string that may contain markdown code fences or extra text.
 */
export function extractJson(text) {
  if (!text) return null;

  // Try fenced code block first
  const fenceMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fenceMatch) {
    try {
      return JSON.parse(fenceMatch[1].trim());
    } catch {
      // continue to other strategies
    }
  }

  // Try any braces block
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

/**
 * Check if a JSON string appears to be truncated (unclosed braces/brackets/quotes).
 */
export function appearsTruncated(text) {
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

const ROADMAP_RESPONSE_SCHEMA = {
  type: 'object',
  properties: {
    title: { type: 'string' },
    description: { type: 'string' },
    timeline: { type: 'string' },
    focusSkills: { type: 'array', items: { type: 'string' } },
    learnerType: { type: 'string' },
    archetype: { type: 'string' },
    archetypeLabel: { type: 'string' },
    phaseEmphasis: {
      type: 'object',
      properties: {
        assessment: { type: 'integer' },
        foundation: { type: 'integer' },
        skill: { type: 'integer' },
        application: { type: 'integer' },
        career: { type: 'integer' },
      },
    },
    milestones: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          week: { type: 'integer' },
          title: { type: 'string' },
        },
        required: ['week', 'title'],
      },
    },
    portfolioProofs: { type: 'array', items: { type: 'string' } },
    mentorTouchpoints: { type: 'array', items: { type: 'integer' } },
    evolvingProject: {
      type: 'object',
      properties: {
        title: { type: 'string' },
        description: { type: 'string' },
        stages: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              moduleTitle: { type: 'string' },
              deliverable: { type: 'string' },
            },
          },
        },
      },
    },
    modules: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          phase: { type: 'string' },
          duration: { type: 'string' },
          description: { type: 'string' },
          difficulty: { type: 'string' },
          keySkills: { type: 'array', items: { type: 'string' } },
          chapters: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                title: { type: 'string' },
                summary: { type: 'string' },
                duration: { type: 'string' },
                section: { type: 'string' },
              },
              required: ['title', 'summary'],
            },
          },
          deliverable: { type: 'string' },
          resources: { type: 'array', items: { type: 'string' } },
        },
        required: ['title', 'duration', 'chapters', 'deliverable', 'resources'],
      },
    },
  },
  required: ['title', 'description', 'modules', 'timeline', 'focusSkills'],
};

/**
 * Call Gemini API with automatic key rotation.
 * Returns { success: true, text: string, usedKeyIndex: number } or { success: false, error: string }.
 */
export async function callGemini({ systemPrompt, userPrompt, maxTokens = 1500, jsonMode = false, continuationText = null, responseSchema = null }) {
  const keys = getGeminiKeys();
  const models = getGeminiModelCandidates();

  if (keys.length === 0) {
    return { success: false, error: 'No Gemini API keys configured' };
  }

  const generationConfig = {
    temperature: 0.7,
    maxOutputTokens: maxTokens,
  };

  if (jsonMode) {
    generationConfig.responseMimeType = 'application/json';
    generationConfig.responseSchema = responseSchema || ROADMAP_RESPONSE_SCHEMA;
  }

  let contents = [];
  let currentUserPrompt = userPrompt;

  if (continuationText) {
    currentUserPrompt = `The previous JSON response was cut off. Continue EXACTLY from the end of the text below and output only the remaining characters needed to complete the JSON object. Do not repeat any text that is already present. Do not add markdown code fences.\n\n${continuationText}`;
  }

  contents.push({
    role: 'user',
    parts: [{ text: currentUserPrompt }],
  });

  let lastError = null;
  const requestTimeoutMs = Math.max(Number.parseInt(process.env.GEMINI_REQUEST_TIMEOUT_MS || '15000', 10) || 15000, 1000);
  const attempts = keys.flatMap((key, keyIndex) => models.map((model) => ({ key, keyIndex, model })));

  const runAttempt = async ({ key, keyIndex, model }) => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), requestTimeoutMs);
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;
    const body = { contents, generationConfig };

    if (systemPrompt && !continuationText) {
      body.systemInstruction = { parts: [{ text: systemPrompt }] };
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        signal: controller.signal,
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        const errorMessage = data.error?.message || `HTTP ${response.status}`;
        console.log(`Gemini key ${keyIndex + 1} failed for model ${model}: ${errorMessage}`);
        throw new Error(errorMessage);
      }

      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!text && !jsonMode) {
        console.log(`Gemini key ${keyIndex + 1} returned empty text for model ${model}`);
        throw new Error('Empty response from Gemini');
      }

      return { success: true, text: text || '', usedKeyIndex: keyIndex };
    } catch (error) {
      const message = error.name === 'AbortError'
        ? `Request timed out after ${requestTimeoutMs}ms`
        : error.message;
      if (error.name === 'AbortError') {
        console.log(`Gemini key ${keyIndex + 1} timed out for model ${model} after ${requestTimeoutMs}ms`);
      } else if (!message?.startsWith('You exceeded') && !message?.startsWith('HTTP ')) {
        console.log(`Gemini key ${keyIndex + 1} error with model ${model}: ${message}`);
      }
      throw new Error(message);
    } finally {
      clearTimeout(timeout);
    }
  };

  try {
    return await Promise.any(attempts.map((attempt) => runAttempt(attempt)));
  } catch (error) {
    const failures = error instanceof AggregateError ? error.errors : [error];
    lastError = failures.at(-1)?.message || 'Unknown Gemini error';
    console.error(`Gemini exhausted ${keys.length} configured key(s) across ${models.length} model(s) after ${attempts.length} attempt(s).`);
    return { success: false, error: `All Gemini keys failed after ${attempts.length} attempt(s). Last error: ${lastError}` };
  }
}

/**
 * Generate a complete JSON response from Gemini, with continuation if truncated.
 */
export async function generateCompleteJson({ systemPrompt, userPrompt, maxTokens = 4000, maxContinuations = 2, responseSchema = null }) {
  let fullText = '';
  let continuations = 0;

  const initial = await callGemini({ systemPrompt, userPrompt, maxTokens, jsonMode: true, responseSchema });
  if (!initial.success) {
    return { success: false, error: initial.error };
  }

  fullText += initial.text;

  // Try to extract JSON; if truncated, ask for continuation
  while (continuations < maxContinuations && appearsTruncated(fullText)) {
    console.log('Gemini response appears truncated, requesting continuation...');
    const continuation = await callGemini({
      systemPrompt,
      userPrompt,
      maxTokens,
      jsonMode: true,
      continuationText: fullText,
    });

    if (!continuation.success) {
      break;
    }

    fullText += continuation.text;
    continuations++;
  }

  const parsed = extractJson(fullText);
  if (parsed) {
    return { success: true, data: parsed, raw: fullText };
  }

  return { success: false, error: 'Could not parse valid JSON from Gemini response', raw: fullText };
}
