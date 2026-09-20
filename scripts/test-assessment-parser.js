import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { parseAssessmentQuestions } from '../src/lib/assessmentParser.js';

const docsRoot = resolve(process.cwd(), '../../docs');
const cppAssessmentPath = resolve(
  process.cwd(),
  '../../CS Assessment/beginner/programming-software-development-fundamentals/c-programming-for-game-development.md',
);
const samples = [];

async function collectMarkdown(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await collectMarkdown(path);
    else if (entry.isFile() && entry.name.endsWith('.md')) samples.push(path);
  }
}

await collectMarkdown(docsRoot);
let checkedCourses = 0;
let checkedAssessments = 0;

for (const coursePath of samples) {
  if (checkedCourses >= 20) break;
  const markdown = await readFile(coursePath, 'utf8');
  const chapters = [...markdown.matchAll(/^###\s+Chapter\s+(\d+)\.(\d+)\b[^\n]*([\s\S]*?)(?=^###\s+Chapter\s+|(?![\s\S]))/gmi)];
  const assessedChapters = chapters.filter((chapter) => /^####\s+Assessment idea\s*$/mi.test(chapter[3]));
  if (assessedChapters.length === 0) continue;

  checkedCourses++;
  for (const chapter of assessedChapters) {
    const questions = parseAssessmentQuestions(markdown, Number(chapter[1]), Number(chapter[2]));
    assert.ok(questions.length > 0, `${coursePath}: Chapter ${chapter[1]}.${chapter[2]} has an assessment section but no importable questions.`);
    assert.ok(questions.every((question) => question.question.length > 0 && question.explanation.length > 0), `${coursePath}: Chapter ${chapter[1]}.${chapter[2]} has incomplete assessment data.`);
    checkedAssessments++;
  }
}

assert.ok(checkedCourses >= 20, `Expected to test 20 courses, found ${checkedCourses}.`);

const cppAssessment = await readFile(cppAssessmentPath, 'utf8');
const cppQuestions = parseAssessmentQuestions(cppAssessment, 1, 1);
const environmentQuestion = cppQuestions[0];
const codeCorrectionQuestion = cppQuestions[1];
assert.match(environmentQuestion?.referenceAnswer || '', /compiler/i);
assert.equal(codeCorrectionQuestion?.type, 'code-challenge');
assert.equal(codeCorrectionQuestion?.language, 'cpp');
assert.match(codeCorrectionQuestion?.code || '', /#include <iostream>/);
assert.match(codeCorrectionQuestion?.referenceAnswer || '', /main|semicolon/i);
assert.match(codeCorrectionQuestion?.code || '', /\n    std::cout/);
assert.doesNotMatch(codeCorrectionQuestion?.question || '', /Answers?:\s*$/i);

console.log(`Validated ${checkedAssessments} chapter assessments across ${checkedCourses} courses.`);
