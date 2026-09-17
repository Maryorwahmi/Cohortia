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

const conciseMemoryAnswer = evaluate(
  {
    type: 'case-study',
    question: "What is the difference between a computer's memory (RAM) and its storage (hard drive), and why does a program need both?",
    referenceAnswer: 'Memory (RAM) is the temporary workspace where the computer stores data while a program is running. It is fast but volatile — data disappears when the power is turned off. Storage (hard drive/SSD) is the permanent filing cabinet where programs and files are kept. It is slower but retains data without power. A program needs both because the program itself is stored on the hard drive permanently, but when you run it, the CPU loads the program and its data into RAM temporarily for fast execution. The results may then be saved back to storage.',
  },
  'RAM helps the computer run programs quickly while the hard drive stores the data permanently. The program needs RAM to work and storage to keep the data.',
);
assert.equal(conciseMemoryAnswer.isCorrect, true);

const screenshotMemoryAnswer = evaluate(
  {
    type: 'case-study',
    question: "What is the difference between a computer's memory (RAM) and its storage (hard drive), and why does a program need both?",
    referenceAnswer: 'Memory (RAM) is the temporary workspace where the computer stores data while a program is running. It is fast but volatile — data disappears when the power is turned off. Storage (hard drive/SSD) is the permanent filing cabinet where programs and files are kept. It is slower but retains data without power. A program needs both because the program itself is stored on the hard drive permanently, but when you run it, the CPU loads the program and its data into RAM temporarily for fast execution. The results may then be saved back to storage.',
  },
  'RAM helps the computer run programs quickly while the hard drive stores the data permanently. The program needs RAM to work and storage to keep the data.',
);
assert.equal(screenshotMemoryAnswer.isCorrect, true);

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
