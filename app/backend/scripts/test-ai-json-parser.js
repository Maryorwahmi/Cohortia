import assert from 'node:assert/strict';
import { extractJson, generateCompleteJson } from '../src/lib/gemini.js';

const expected = { beginner: ['course-a'], intermediate: [], advanced: [] };

assert.deepEqual(extractJson(JSON.stringify(expected)), expected);
assert.deepEqual(extractJson(`Result:\n\`\`\`json\n${JSON.stringify(expected)}\n\`\`\``), expected);
assert.deepEqual(extractJson("{'beginner':['course-a',], 'intermediate':[], 'advanced':[],}"), expected);
assert.deepEqual(
  extractJson('Response: {"beginner":["course } id"],"intermediate":[],"advanced":[]} done'),
  { beginner: ['course } id'], intermediate: [], advanced: [] }
);

const originalFetch = globalThis.fetch;
const originalEnv = Object.fromEntries(
  ['AI_PROVIDER', 'AZURE_OPENAI_ENDPOINT', 'AZURE_OPENAI_API_KEY', 'AZURE_OPENAI_DEPLOYMENT']
    .map((name) => [name, process.env[name]])
);
let requestCount = 0;

process.env.AI_PROVIDER = 'azure';
process.env.AZURE_OPENAI_ENDPOINT = 'https://example.invalid';
process.env.AZURE_OPENAI_API_KEY = 'test-key';
process.env.AZURE_OPENAI_DEPLOYMENT = 'test-deployment';
globalThis.fetch = async () => {
  requestCount++;
  const content = requestCount === 1
    ? 'Here is the response, but it is not JSON.'
    : JSON.stringify(expected);
  return new Response(JSON.stringify({choices: [{message: {content}}]}), {
    status: 200,
    headers: {'content-type': 'application/json'},
  });
};

try {
  const result = await generateCompleteJson({
    systemPrompt: 'Return a course ranking.',
    userPrompt: 'Rank the supplied courses.',
    responseSchema: {
      type: 'object',
      properties: {
        beginner: {type: 'array', items: {type: 'string'}},
        intermediate: {type: 'array', items: {type: 'string'}},
        advanced: {type: 'array', items: {type: 'string'}},
      },
    },
  });
  assert.equal(result.success, true);
  if (result.success) assert.deepEqual(result.data, expected);
  assert.equal(requestCount, 2, 'malformed Azure JSON should trigger one structured retry');
} finally {
  globalThis.fetch = originalFetch;
  for (const [name, value] of Object.entries(originalEnv)) {
    if (value === undefined) delete process.env[name];
    else process.env[name] = value;
  }
}

console.log('AI JSON parser and Azure retry tests passed.');
