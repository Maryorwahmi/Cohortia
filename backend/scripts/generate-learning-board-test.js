#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { generateCompleteJson } from '../src/lib/gemini.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..', '..');

function parseArgs() {
  const args = process.argv.slice(2);
  return {
    course: args[0] || 'Artificial Intelligence for Everyone',
    topic: args[1] || 'What is Generative AI and why it matters',
    chapterTitle: args[2] || 'Chapter 1: Understanding Generative AI',
  };
}

function buildSystemPrompt() {
  return `You are an elite instructional designer, UI engineer, and narrator for an immersive e-learning board called Cohortia.

Act like a warm, confident teacher guiding one chapter of a course. Your job is to create one polished, premium chapter screen for a web-based learning board. The result must feel like an interactive teaching stage, not a static slide deck.

Design & tone requirements:
- Write in a warm, confident, teacher-like voice. Use "we", "let's", and direct address to the learner.
- Keep the lesson focused: one clear concept, one key insight, one visual explanation.
- The generated React + Tailwind component in `componentCode` should be visually rich but simple enough to drop into a Vite + React + Tailwind app.
- Use only standard Tailwind utility classes. Valid examples: transition, duration-300, ease-out, hover:scale-105, animate-pulse, animate-bounce, animate-fade-in (only if defined inline), rounded, shadow, bg-gradient-to-r, flex, grid, gap, p-4, text-xl.
- Do not invent arbitrary custom animation class names unless you define them with inline styles or a <style> block.
- Do not import external libraries beyond React and lucide-react icons.
- Keep the component self-contained, copy-pasteable, and production-ready enough to render in the learning board.

Output requirements:
Return a single valid JSON object (no markdown fences) with these fields:
{
  "course": "Course title",
  "topic": "Specific lesson topic",
  "chapterTitle": "Chapter title",
  "lessonGoal": "One-sentence learning objective for this screen.",
  "visualSummary": "Vivid 2-3 sentence description of what the learner sees on screen (colors, layout, diagram, mood).",
  "componentCode": "Full self-contained React + Tailwind TSX component as a string. Export default the component.",
  "narratorScript": "300-500 word voiceover script that sounds like a teacher explaining the concept while the learner reads the screen.",
  "animationPlan": ["3-5 concrete animation steps in order"],
  "interactionIdeas": ["3-5 interaction ideas that would make the lesson more engaging"],
  "keyInsight": "One memorable sentence that captures the main takeaway.",
  "generatedAt": "ISO timestamp"
}`;
}

function buildUserPrompt(course, topic, chapterTitle) {
  return `Create one immersive chapter screen for the course "${course}".

Topic: ${topic}
Chapter title: ${chapterTitle}

Please generate a complete lesson screen that behaves like a premium teaching stage. Include:
1. A strong hero headline with course context and chapter title.
2. A teacher-voice explanation block that speaks directly to the learner.
3. One visual concept or diagram area that explains the idea clearly (e.g., a flow, loop, or comparison).
4. A prominent callout box with a memorable key insight.
5. A warm, engaging narrator script suitable for voiceover.
6. A React + Tailwind component in the componentCode field that renders the full screen.
7. A concrete animationPlan and interactionIdeas list.
8. A keyInsight field capturing the one-sentence takeaway.

Make the design feel exciting, modern, and suitable for a learning board that teaches through storytelling, motion, and clear visual structure. Use only standard Tailwind utilities and keep the component straightforward to render in a browser. Return only valid JSON.`;
}

const responseSchema = {
  type: 'object',
  properties: {
    course: { type: 'string' },
    topic: { type: 'string' },
    chapterTitle: { type: 'string' },
    lessonGoal: { type: 'string' },
    visualSummary: { type: 'string' },
    componentCode: { type: 'string' },
    narratorScript: { type: 'string' },
    animationPlan: { type: 'array', items: { type: 'string' } },
    interactionIdeas: { type: 'array', items: { type: 'string' } },
    keyInsight: { type: 'string' },
    generatedAt: { type: 'string' },
  },
  required: ['course', 'chapterTitle', 'lessonGoal', 'componentCode', 'narratorScript', 'animationPlan'],
};

function makeSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

async function main() {
  const { course, topic, chapterTitle } = parseArgs();
  const outputDir = path.join(repoRoot, 'generated', 'learning-board-test');
  await fs.mkdir(outputDir, { recursive: true });

  const systemPrompt = buildSystemPrompt();
  const userPrompt = buildUserPrompt(course, topic, chapterTitle);

  console.log(`Generating learning board screen for: ${chapterTitle}`);
  console.log('This may take a moment...');

  const result = await generateCompleteJson({
    systemPrompt,
    userPrompt,
    maxTokens: 14000,
    responseSchema,
  });

  if (!result.success) {
    console.error('Generation failed:', result.error);
    process.exit(1);
  }

  // Normalize optional fields so the learning board always has something to show
  const data = result.data;
  data.topic = data.topic || topic;
  data.keyInsight = data.keyInsight || data.lessonGoal || '';
  data.generatedAt = data.generatedAt || new Date().toISOString();

  const baseSlug = `${makeSlug(course)}-${makeSlug(chapterTitle)}`;
  const timestamp = Date.now();
  const outputPath = path.join(outputDir, `${baseSlug}-${timestamp}.json`);
  const componentPath = path.join(outputDir, `${baseSlug}-${timestamp}.tsx`);
  const latestPath = path.join(outputDir, 'latest-learning-board-test.json');

  await fs.writeFile(outputPath, JSON.stringify(data, null, 2), 'utf8');
  await fs.writeFile(componentPath, data.componentCode || '', 'utf8');
  await fs.writeFile(latestPath, JSON.stringify(data, null, 2), 'utf8');

  console.log(`Saved JSON output to ${path.relative(repoRoot, outputPath)}`);
  console.log(`Saved TSX component to ${path.relative(repoRoot, componentPath)}`);
  console.log(`Updated latest preview at ${path.relative(repoRoot, latestPath)}`);

  console.log('\nNarrator script preview:\n');
  console.log(data.narratorScript);
  console.log('\nKey insight:', data.keyInsight);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
