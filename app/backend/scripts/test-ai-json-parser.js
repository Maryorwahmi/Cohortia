import assert from 'node:assert/strict';
import { extractJson } from '../src/lib/gemini.js';

const expected = { beginner: ['course-a'], intermediate: [], advanced: [] };

assert.deepEqual(extractJson(JSON.stringify(expected)), expected);
assert.deepEqual(extractJson(`Result:\n\`\`\`json\n${JSON.stringify(expected)}\n\`\`\``), expected);
assert.deepEqual(extractJson("{'beginner':['course-a',], 'intermediate':[], 'advanced':[],}"), expected);
assert.deepEqual(
  extractJson('Response: {"beginner":["course } id"],"intermediate":[],"advanced":[]} done'),
  { beginner: ['course } id'], intermediate: [], advanced: [] }
);

console.log('AI JSON parser tests passed.');
