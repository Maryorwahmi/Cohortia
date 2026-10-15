import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const catalogPath = path.resolve(scriptDirectory, '..', '..', 'docs', 'computer-science', 'catalog-courses-by-subcategory.json');
const overridesPath = path.resolve(scriptDirectory, '..', 'src', 'data', 'catalog-course-level-inferences.json');
const allowedLevels = new Set([
  'Beginner',
  'Beginner–Intermediate',
  'Intermediate',
  'Intermediate–Advanced',
  'Advanced',
]);
const applyChanges = process.argv.includes('--apply');

function inferLevel(course, subcategory) {
  const title = String(course.title || '').trim().toLowerCase().replace(/[–—]/g, '-');
  const category = String(course.marketSubcategory || subcategory || '').toLowerCase();
  if (/\bbeginner\s*(?:-|to)\s*intermediate\b/.test(title)) {
    return {level: 'Beginner–Intermediate', confidence: 'high', reviewRequired: false, reason: 'The course title explicitly identifies a Beginner–Intermediate level.'};
  }
  if (/\bintermediate\s*(?:-|to)\s*advanced\b/.test(title)) {
    return {level: 'Intermediate–Advanced', confidence: 'high', reviewRequired: false, reason: 'The course title explicitly identifies an Intermediate–Advanced level.'};
  }
  const explicit = title.match(/\b(beginner|intermediate|advanced)\b/);

  if (explicit) {
    const level = explicit[1][0].toUpperCase() + explicit[1].slice(1);
    return {level, confidence: 'high', reviewRequired: false, reason: `The course title explicitly identifies a ${level} level.`};
  }
  if (/\b(from scratch|from the beginning|for beginners|beginner friendly|no experience required|fundamentals|introduction to|intro to|basics|getting started|101)\b/.test(title)) {
    return {level: 'Beginner', confidence: 'high', reviewRequired: false, reason: 'The title explicitly describes introductory or beginner material.'};
  }
  if (/\b(architect|architecture|expert|masterclass|advanced|production|enterprise|distributed systems|performance engineering|security engineering)\b/.test(title)) {
    return {level: 'Intermediate–Advanced', confidence: 'medium', reviewRequired: true, reason: 'The title signals specialized or production-oriented material, but no syllabus is available to verify its prerequisites.'};
  }
  if (/\b(for .* developers|professional developer|specialization|specialisation|certification|professional certificate)\b/.test(title)) {
    return {level: 'Intermediate', confidence: 'low', reviewRequired: true, reason: 'The title indicates a focused professional course, but does not specify learner prerequisites.'};
  }
  if (/\b(complete|bootcamp|full stack|full-stack|developer course|complete guide|programming with|learn .* in|build .* with)\b/.test(title)) {
    return {level: 'Beginner–Intermediate', confidence: 'low', reviewRequired: true, reason: 'The title suggests a broad or hands-on course, but no syllabus or description is available to confirm its starting level.'};
  }
  if (/\b(research|protocol|kernel|compiler|microcontroller|firmware|robotics|deep learning|cryptography|penetration testing|kubernetes|cloud security|machine learning)\b/.test(`${title} ${category}`)) {
    return {level: 'Intermediate–Advanced', confidence: 'low', reviewRequired: true, reason: 'The topic is specialized; the course title alone is insufficient to establish prerequisites.'};
  }
  if (/\b(programming|development|developer|engineering|course|guide|essentials|practical|with .*|using .*)\b/.test(title)) {
    return {level: 'Beginner–Intermediate', confidence: 'low', reviewRequired: true, reason: 'The title indicates practical topic coverage but does not specify prerequisites or depth.'};
  }
  return {level: 'Intermediate', confidence: 'low', reviewRequired: true, reason: 'No level, description, URL, or syllabus is available; this is a provisional category-level estimate.'};
}

const catalog = JSON.parse(await fs.readFile(catalogPath, 'utf8'));
if (!Array.isArray(catalog.subcategories)) {
  throw new Error(`Expected a subcategories array in ${catalogPath}`);
}

const summary = new Map();
const reviewItems = [];
const levels = {};
let classifiedCount = 0;
let unchangedCount = 0;

for (const subcategory of catalog.subcategories) {
  for (const course of subcategory.courses || []) {
    if (String(course.level || '').trim()) {
      if (!allowedLevels.has(course.level)) {
        throw new Error(`Unsupported catalog level "${course.level}" for ${course.id || course.title}`);
      }
      unchangedCount += 1;
      continue;
    }

    const result = inferLevel(course, subcategory.name);
    levels[course.id] = result;
    classifiedCount += 1;
    summary.set(result.level, (summary.get(result.level) || 0) + 1);
    if (result.reviewRequired) reviewItems.push({id: course.id, title: course.title, level: result.level, reason: result.reason});
  }
}

if (applyChanges) {
  await fs.writeFile(overridesPath, `${JSON.stringify({
    generatedFrom: path.relative(path.resolve(scriptDirectory, '..', '..'), catalogPath).replace(/\\/g, '/'),
    generatedAt: new Date().toISOString(),
    levels,
  }, null, 2)}\n`, 'utf8');
}

console.log(`${applyChanges ? 'Updated' : 'Proposed'} ${classifiedCount} missing course levels; ${unchangedCount} existing levels were preserved.`);
console.log('Suggested levels:');
for (const level of allowedLevels) {
  console.log(`  ${level}: ${summary.get(level) || 0}`);
}
console.log(`Flagged for review: ${reviewItems.length}`);
if (reviewItems.length) {
  console.log('Review examples:');
  reviewItems.slice(0, 12).forEach((item) => console.log(`  ${item.id}: ${item.level} — ${item.reason}`));
}
if (!applyChanges) console.log(`Run with --apply to write these suggestions to ${overridesPath}.`);
