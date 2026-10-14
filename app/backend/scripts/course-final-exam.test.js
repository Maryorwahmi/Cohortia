import assert from 'node:assert/strict';
import test from 'node:test';
import { parseCourseFinals } from '../src/lib/courseFinals.js';
import { calculateExamScore, gradeMultipleChoiceAnswer } from '../src/lib/courseFinalExamGrading.js';

function markdown(timeLimit) {
  return `---
course_id: sample-course
course_title: Sample Course
${timeLimit ? `exam_time_limit_minutes: ${timeLimit}\n` : ''}---
## Final Capstone Project
### Project Option 1: Build a sample product
Description for the final build.
#### Requirements
* Submit a working application.
#### Evaluation Criteria
* **Quality (100%):** Meets the requirement.

## Final Examination
Read each question carefully.

### Section 1: Foundations
**Question 1:** Which choice identifies the primary key?
A. A unique row identifier
B. A database backup

**Answer 1:** Correct answer: A. A unique row identifier.

### Section 2: Application
**Question 1:** Explain why testing matters.

**Answer 1:** Testing checks behavior and catches regressions.
`;
}

test('final exam parser defaults to 90 minutes and keeps section-specific answer keys', () => {
  const finals = parseCourseFinals(markdown());
  assert.equal(finals.exam.timeLimitMinutes, 90);
  assert.equal(finals.exam.questions[0].answer, 'Correct answer: A. A unique row identifier.');
  assert.equal(finals.exam.questions[1].answer, 'Testing checks behavior and catches regressions.');
});

test('final exam parser preserves an explicit course time limit', () => {
  assert.equal(parseCourseFinals(markdown(45)).exam.timeLimitMinutes, 45);
});

test('final exam parser supports numbered questions with bold section and answer labels', () => {
  const source = `---
course_id: numbered-course
---
## Final Examination
Answer all questions.

**Section 1: Foundations (2 Questions)**

1.  **Question:** Explain what an agent is.
    **Answer:** An agent perceives its environment and takes actions toward a goal.

2.  **Question:** Which option is correct?
    A. First choice
    B. Second choice
    **Answer:** A. First choice.

**Section 2: Application (1 Question)**

1.  **Question:** Describe one application.
    **Answer:** One appropriate application.
`;
  const exam = parseCourseFinals(source).exam;
  assert.equal(exam.questions.length, 3);
  assert.deepEqual(exam.questions.map((question) => question.questionNumber), [1, 2, 3]);
  assert.deepEqual(exam.questions.map((question) => question.section), [
    '1: Foundations (2 Questions)',
    '1: Foundations (2 Questions)',
    '2: Application (1 Question)',
  ]);
  assert.equal(exam.questions[0].answer, 'An agent perceives its environment and takes actions toward a goal.');
  assert.equal(exam.questions[1].answer, 'A. First choice.');
  assert.equal(exam.questions[2].answer, 'One appropriate application.');
  assert.equal(exam.instructions, 'Answer all questions.');
});

test('final exam parser assigns unique numbers to decimal question labels across parts', () => {
  const source = `---
course_id: decimal-course
---
## Final Examination
Instructions for this exam.

### Part 1: Fundamentals

**Question 1.1:** Define a planning heuristic.
**Answer 1.1:** A function estimating cost to a goal.

**Question 1.2:** Why use an admissible heuristic?
**Answer 1.2:** It does not overestimate the true remaining cost.

### Part 2: Application

**Question 2.1:** Describe a planning use case.
**Answer 2.1:** Scheduling actions with dependencies.
`;
  const exam = parseCourseFinals(source).exam;
  assert.equal(exam.questions.length, 3);
  assert.deepEqual(exam.questions.map((question) => question.questionNumber), [1, 2, 3]);
  assert.deepEqual(exam.questions.map((question) => question.section), [
    '1: Fundamentals',
    '1: Fundamentals',
    '2: Application',
  ]);
  assert.deepEqual(exam.questions.map((question) => question.answer), [
    'A function estimating cost to a goal.',
    'It does not overestimate the true remaining cost.',
    'Scheduling actions with dependencies.',
  ]);
  assert.equal(exam.instructions, 'Instructions for this exam.');
});

test('final exam parser supports question labels with parenthesized categories and unnumbered answers', () => {
  const source = `---
course_id: categorized-questions
---
## Final Examination

**Question 1 (Concept Definition):** Define visual odometry.
**Answer:** Visual odometry estimates camera motion from consecutive images.

**Question 2 (Code Tracing):** What does the function return?
**Answer:** It returns the estimated displacement.
`;
  const exam = parseCourseFinals(source).exam;
  assert.equal(exam.questions.length, 2);
  assert.deepEqual(exam.questions.map((question) => question.questionNumber), [1, 2]);
  assert.deepEqual(exam.questions.map((question) => question.answer), [
    'Visual odometry estimates camera motion from consecutive images.',
    'It returns the estimated displacement.',
  ]);
});

test('final exam parser supports descriptive bold question headings and answer-key headings', () => {
  const source = `---
course_id: descriptive-questions
---
## Final Examination

**Question 1: Concept Definition (5 points)**
Explain the difference between semantic and instance segmentation.

**Answer Key & Explanation:**
Semantic segmentation labels each pixel by class, while instance segmentation also distinguishes separate objects of the same class.

**Question 2 (Code Tracing - 10 points)**
What is printed by the following program?

**Answer 2:**
The expected output is 42.
`;
  const exam = parseCourseFinals(source).exam;
  assert.equal(exam.questions.length, 2);
  assert.deepEqual(exam.questions.map((question) => question.questionNumber), [1, 2]);
  assert.deepEqual(exam.questions.map((question) => question.answer), [
    'Semantic segmentation labels each pixel by class, while instance segmentation also distinguishes separate objects of the same class.',
    'The expected output is 42.',
  ]);
});

test('final exam parser supports list-prefixed correct-answer labels', () => {
  const source = `---
course_id: correct-answer-labels
---
## Final Examination

**Question 1: Fundamentals**
What is a pixel?

*   **Correct Answer:**
    A pixel is the smallest unit of a raster image.

**Question 2: Computer Vision**
Name a common color representation.

*   **Correct Answer & Explanation:** RGB uses red, green, and blue channels.
`;
  const exam = parseCourseFinals(source).exam;
  assert.equal(exam.questions.length, 2);
  assert.deepEqual(exam.questions.map((question) => question.answer), [
    'A pixel is the smallest unit of a raster image.',
    'RGB uses red, green, and blue channels.',
  ]);
});

test('final exam parser supports numbered question prefixes inside bold labels', () => {
  const source = `---
course_id: bold-numbered-questions
---
## Final Examination

### Section 1: Foundations

**1. Question:** Explain what a GitLab CI/CD pipeline does.

**Answer:**
A pipeline automates build, test, and deployment stages.

**2. Question:** Name one benefit of pipeline automation.

**Correct Answer:**
It provides consistent feedback and reduces manual errors.
`;
  const exam = parseCourseFinals(source).exam;
  assert.equal(exam.questions.length, 2);
  assert.deepEqual(exam.questions.map((question) => question.answer), [
    'A pipeline automates build, test, and deployment stages.',
    'It provides consistent feedback and reduces manual errors.',
  ]);
});

test('final exam parser supports slash-separated answer and explanation labels', () => {
  const source = `---
course_id: slash-answer-labels
---
## Final Examination

### Section 1: Foundations

**Question:** What does idempotency mean?

**Correct Answer/Explanation:**
Repeated execution has the same effect as a single execution.
`;
  const exam = parseCourseFinals(source).exam;
  assert.equal(exam.questions.length, 1);
  assert.equal(exam.questions[0].answer, 'Repeated execution has the same effect as a single execution.');
});

test('multiple-choice grading awards only the selected correct option', () => {
  const question = {
    prompt: 'Which choice identifies the primary key?\nA. A unique row identifier\nB. A database backup',
    answerKey: 'Correct answer: A. A unique row identifier.',
    points: 2,
  };
  assert.equal(gradeMultipleChoiceAnswer(question, 'A').pointsAwarded, 2);
  assert.equal(gradeMultipleChoiceAnswer(question, 'B').pointsAwarded, 0);
  assert.equal(gradeMultipleChoiceAnswer({...question, answerKey: 'It is the unique key.'}, 'A'), null);
});

test('exam percentage is rounded against possible points', () => {
  assert.equal(calculateExamScore(2, 3), 67);
  assert.equal(calculateExamScore(0, 0), 0);
});
