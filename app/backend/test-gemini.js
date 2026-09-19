import 'dotenv/config';
import { getGeminiKeys, getGeminiModel, callGemini, generateCompleteJson } from './src/lib/gemini.js';

console.log('=== Gemini API Key Test ===\n');

const keys = getGeminiKeys();
const model = getGeminiModel();

console.log(`Found ${keys.length} Gemini key(s)`);
console.log(`Model: ${model}\n`);

if (keys.length === 0) {
  console.error('❌ No Gemini keys found.');
  console.log('Add keys to backend/.env like:');
  console.log('  GEMINI_API_KEY=AIza...');
  console.log('  GEMINI_API_KEY_1=AIza...');
  process.exit(1);
}

keys.forEach((key, index) => {
  const masked = key.length > 12 ? `${key.slice(0, 8)}...${key.slice(-4)}` : key;
  console.log(`Key ${index + 1}: ${masked} (length ${key.length})`);
});

console.log('\n=== Testing simple chat with each key ===\n');

for (let i = 0; i < keys.length; i++) {
  process.env.GEMINI_API_KEY_TEST_INDEX = String(i);
  // Temporarily override so callGemini uses only this key
  const originalKeys = { main: process.env.GEMINI_API_KEY };
  for (let j = 1; j <= 20; j++) {
    originalKeys[j] = process.env[`GEMINI_API_KEY_${j}`];
    delete process.env[`GEMINI_API_KEY_${j}`];
  }
  process.env.GEMINI_API_KEY = keys[i];

  const result = await callGemini({
    systemPrompt: 'You are a helpful assistant.',
    userPrompt: 'Say exactly "Cohortia Gemini key test passed" and nothing else.',
    maxTokens: 50,
  });

  if (result.success) {
    console.log(`Key ${i + 1}: ✅ WORKING`);
    console.log(`  Response: ${result.text.trim()}`);
  } else {
    console.log(`Key ${i + 1}: ❌ FAILED - ${result.error}`);
  }

  // Restore keys
  process.env.GEMINI_API_KEY = originalKeys.main;
  for (let j = 1; j <= 20; j++) {
    if (originalKeys[j]) process.env[`GEMINI_API_KEY_${j}`] = originalKeys[j];
  }
}

console.log('\n=== Testing roadmap JSON generation (uses key rotation + continuation) ===\n');

const roadmapResult = await generateCompleteJson({
  systemPrompt: `You are Cohortia. Return ONLY valid JSON with this structure:
{
  "title": "Roadmap title",
  "description": "Description",
  "modules": [{"title": "Module", "duration": "1 week", "chapters": ["Chapter"], "deliverable": "Deliverable", "resources": ["Resource"]}],
  "timeline": "4 weeks",
  "focusSkills": ["Skill"]
}`,
  userPrompt: 'Create a beginner roadmap for Product Management.',
  maxTokens: 800,
});

if (roadmapResult.success) {
  console.log('✅ Roadmap JSON generated successfully');
  console.log(`  Title: ${roadmapResult.data.title}`);
  console.log(`  Modules: ${roadmapResult.data.modules?.length || 0}`);
} else {
  console.log('❌ Roadmap generation failed');
  console.log(`  Error: ${roadmapResult.error}`);
  if (roadmapResult.raw) {
    console.log(`  Raw response preview: ${roadmapResult.raw.slice(0, 200)}...`);
  }
}
