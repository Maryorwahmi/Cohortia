import assert from 'node:assert/strict';
import { evaluateAssessmentAnswer } from '../src/lib/deterministicAssessment.js';

const evaluate = (question, studentAnswer) => evaluateAssessmentAnswer({ question, studentAnswer });

const multipleChoice = evaluate(
  { type: 'multiple-choice', correctOption: 2 },
  '2',
);
assert.equal(multipleChoice.isCorrect, true);
assert.equal(multipleChoice.evaluationSource, 'assessment-key');

const codeOutput = evaluate(
  { type: 'code-output', expectedOutput: '42\nhello' },
  ' 42\n hello ',
);
assert.equal(codeOutput.isCorrect, true);

const conciseWritten = evaluate(
  {
    type: 'case-study',
    question: 'What is the EIGRP authentication issue?',
    referenceAnswer: 'The key strings must match on both routers for authentication and adjacency.',
  },
  'The key strings must match on both routers so authentication succeeds and the adjacency forms.',
);
assert.equal(conciseWritten.isCorrect, true);

const incorrectWritten = evaluate(
  {
    type: 'case-study',
    question: 'What is the EIGRP authentication issue?',
    referenceAnswer: 'The key strings must match on both routers for authentication and adjacency.',
  },
  'It is a routing problem.',
);
assert.equal(incorrectWritten.isCorrect, false);

const ambiguousWritten = evaluate(
  {
    type: 'case-study',
    question: 'How should the network be secured?',
    referenceAnswer: 'Use route tagging and route maps to prevent redistributed routes from re-entering the original protocol.',
  },
  'Use route maps.',
);
assert.equal(ambiguousWritten.isCorrect, false);
assert.equal(ambiguousWritten.confidence, 'review-needed');

console.log('Deterministic assessment grading tests passed.');
