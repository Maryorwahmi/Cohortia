import 'dotenv/config';
import fs from 'node:fs/promises';
import path from 'node:path';
import { createClient } from '@libsql/client';
import { parseCourseFinals } from '../src/lib/courseFinals.js';

const requestedCourse = process.argv.find((arg) => arg.startsWith('--course='))?.split('=')[1] || null;
const requestedCategory = process.argv.find((arg) => arg.startsWith('--category='))?.split('=')[1] || 'computer-science';
const supportedCategories = ['computer-science', 'artificial-intelligence'];
if (!supportedCategories.includes(requestedCategory)) {
  throw new Error(`Unsupported course category "${requestedCategory}". Choose ${supportedCategories.join(' or ')}.`);
}
const repoRoot = path.resolve(import.meta.dirname, '../..');
const docsRoot = path.join(repoRoot, 'docs', requestedCategory);
const client = createClient({ url: process.env.DATABASE_URL || 'file:./cohortia.db', authToken: process.env.DATABASE_AUTH_TOKEN });
const now = new Date().toISOString();

async function findMarkdown(directory) {
  const result = [];
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) result.push(...await findMarkdown(target));
    else if (entry.isFile() && entry.name.endsWith('.md')) result.push(target);
  }
  return result;
}

const allFiles = await findMarkdown(docsRoot);
const files = requestedCourse
  ? allFiles.filter((file) => path.basename(file, '.md') === requestedCourse)
  : allFiles;
let imported = 0;
console.log(`Importing course finals from ${requestedCategory}.`);
for (const file of files) {
  const markdown = await fs.readFile(file, 'utf8');
  const finals = parseCourseFinals(markdown, path.relative(repoRoot, file));
  if (!finals.courseId || (!finals.capstone.length && !finals.exam)) continue;
  if (requestedCourse && finals.courseId !== requestedCourse) continue;
  const courseId = finals.courseId;
  const duplicateQuestionNumbers = finals.exam
    ? finals.exam.questions.some((question, index, questions) =>
      questions.findIndex((candidate) => candidate.questionNumber === question.questionNumber) !== index)
    : false;
  const invalidExamReason = !finals.exam
    ? null
    : !finals.exam.questions.length
      ? 'no questions parsed'
      : duplicateQuestionNumbers
        ? 'duplicate question numbers parsed'
        : finals.exam.questions.some((question) => !question.answer.trim())
          ? `question(s) ${finals.exam.questions.filter((question) => !question.answer.trim()).map((question) => question.questionNumber).join(', ')} missing answer keys`
          : null;
  await client.execute({ sql: 'DELETE FROM course_capstones WHERE course_id = ?', args: [courseId] });
  for (const project of finals.capstone) {
    await client.execute({
      sql: `INSERT INTO course_capstones (id, course_id, option_number, title, description, requirements, stretch_goals, rubric, estimated_time, source_path, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [`${courseId}-capstone-${project.optionNumber}`, courseId, project.optionNumber, project.title, project.description,
        JSON.stringify(project.requirements), JSON.stringify(project.stretchGoals), JSON.stringify(project.rubric), project.estimatedTime,
        finals.sourcePath, now, now],
    });
  }
  if (finals.exam && !invalidExamReason) {
    const examId = `${courseId}-final-exam`;
    await client.execute({
      sql: `INSERT INTO course_final_exams (id, course_id, title, instructions, time_limit_minutes, passing_score, source_path, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(course_id) DO UPDATE SET title=excluded.title, instructions=excluded.instructions, time_limit_minutes=excluded.time_limit_minutes, passing_score=excluded.passing_score, source_path=excluded.source_path, updated_at=excluded.updated_at`,
      args: [examId, courseId, finals.exam.title, finals.exam.instructions, finals.exam.timeLimitMinutes, finals.exam.passingScore, finals.sourcePath, now, now],
    });
    await client.execute({ sql: 'DELETE FROM course_final_exam_questions WHERE exam_id = ?', args: [examId] });
    for (const question of finals.exam.questions) {
      await client.execute({
        sql: `INSERT INTO course_final_exam_questions (id, exam_id, question_number, section, type, prompt, answer_key, points, created_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        args: [`${examId}-q${question.questionNumber}`, examId, question.questionNumber, question.section, question.type, question.prompt, question.answer, question.points, now],
      });
    }
  }
  imported += 1;
  const examSummary = !finals.exam
    ? 'no final examination section'
    : invalidExamReason
      ? `exam NOT imported (${invalidExamReason})`
      : `${finals.exam.questions.length} exam question(s)`;
  console.log(`${courseId}: ${finals.capstone.length} capstone option(s), ${examSummary}`);
}
console.log(`Imported ${imported} course final package(s).`);
client.close();
