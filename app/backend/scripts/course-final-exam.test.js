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
