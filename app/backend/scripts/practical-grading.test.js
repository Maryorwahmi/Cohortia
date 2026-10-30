import assert from 'node:assert/strict';
import test from 'node:test';
import {
  gradeBinaryConversionAnswer,
  evaluatePracticalChecks,
  practiceChecksForLearner,
  sanitizePracticalForLearner,
} from '../src/lib/practicalGrading.js';

test('binary conversion answers are graded from server-held expected values or prompts', () => {
  const exercises = [
    { type: 'binary_conversion', prompt: 'Convert the binary number `11010` to its decimal equivalent.' },
    { type: 'binary_conversion', prompt: 'Convert the decimal number `27` to its binary equivalent.' },
    { type: 'binary_conversion', prompt: 'How many unique values can be represented by 6 bits?' },
    { type: 'binary_conversion', prompt: 'If a color is represented by 24 bits (8 bits each for Red, Green, Blue), what is the maximum decimal value for each color component?' },
  ];

  for (const [exercise, answer] of exercises.map((exercise, index) => [
    exercise,
    ['26', '11011', '64', '255'][index],
  ])) {
    assert.equal(gradeBinaryConversionAnswer(exercise, answer), true);
  }

  assert.equal(gradeBinaryConversionAnswer(exercises[0], '0b11010'), false);
  assert.equal(gradeBinaryConversionAnswer(exercises[1], '11010'), false);
  assert.equal(gradeBinaryConversionAnswer(
    { type: 'binary_conversion', prompt: 'Convert the value.' },
    '26',
  ), null);
  assert.equal(gradeBinaryConversionAnswer(
    { type: 'other', expectedAnswer: '26' },
    '26',
  ), null);
});

test('binary conversion grading accepts configured equivalent answers and formatting', () => {
  assert.equal(gradeBinaryConversionAnswer({
    type: 'binary_conversion',
    expectedAnswer: '1_1011',
    acceptedAnswers: ['0b11011'],
  }, '1 1011'), true);
});

test('learner practical payloads expose safe check metadata only', () => {
  const practical = sanitizePracticalForLearner({
    checks: [
      { id: 'check-1', type: 'output', expected: 'private-answer', passCondition: { source: 'private-source' } },
      { id: 'hidden-check', type: 'output', visibility: 'hidden', expected_answer: 'private-hidden-answer' },
    ],
    metadata: { answerKey: 'private-metadata' },
    generator: { prompt: 'private-generator-data' },
    sourceContent: 'private-source-content',
    tasks: [{
      id: 'task-1',
      tests: [
        { id: 'test-1', type: 'file_contents', expected: 'private-test-answer', testData: { hidden: true } },
        { id: 'hidden-test', type: 'file_contents', visibility: 'hidden', expected: 'private-hidden-test-answer' },
      ],
      simulation: {
        steps: [{ action: 'Build the sample', output: 'The simulated build completed.' }],
        expected: 'private-simulation-answer',
      },
      interactiveExercise: {
        type: 'binary_conversion',
        prompt: 'Convert the value.',
        expectedAnswer: 'private-binary-answer',
        acceptedAnswers: ['private-alternate-answer'],
      },
    }],
  });
  const serialized = JSON.stringify(practical);

  assert.deepEqual(practical.checks, [{ id: 'check-1', type: 'output' }]);
  assert.deepEqual(practical.tasks[0].tests, [{ id: 'test-1', type: 'file_contents' }]);
  assert.deepEqual(practical.tasks[0].simulation, {
    steps: [{ action: 'Build the sample', output: 'The simulated build completed.' }],
  });
  assert.deepEqual(practical.tasks[0].interactiveExercise, {
    type: 'binary_conversion',
    prompt: 'Convert the value.',
  });
  for (const secret of [
    'private-answer',
    'private-source',
    'private-metadata',
    'private-generator-data',
    'private-source-content',
    'private-test-answer',
    'private-binary-answer',
    'private-alternate-answer',
    'private-hidden-answer',
    'private-hidden-test-answer',
    'private-simulation-answer',
  ]) {
    assert.equal(serialized.includes(secret), false);
  }
  assert.equal('metadata' in practical, false);
  assert.equal('generator' in practical, false);
});

test('practice-only check payload includes visible feedback criteria but excludes hidden checks', () => {
  const checks = practiceChecksForLearner({
    checks: [
      { id: 'public-output', type: 'output', expected: 'Hello learner', matchMode: 'exact' },
      { id: 'hidden-output', type: 'output', visibility: 'hidden', expected: 'private' },
    ],
    tasks: [{
      id: 'task-run',
      tests: [
        { id: 'task-output', type: 'output', expected: '42', testData: { matchMode: 'exact' } },
        { id: 'task-hidden', type: 'output', visibility: 'hidden', expected: 'secret' },
      ],
    }],
  });

  assert.deepEqual(checks, [{
    id: 'task-output',
    type: 'output',
    taskId: 'task-run',
    expected: '42',
    matchMode: 'exact',
  }]);
});

test('practice checks support declared pass conditions and task mappings', () => {
  const checks = practiceChecksForLearner({
    checks: [{
      id: 'output-1',
      type: 'output',
      passCondition: { contains: 'completed', matchMode: 'contains', ignored: 'do not expose' },
    }],
    tasks: [{ id: 'task-1', checkIds: ['output-1'] }],
  });

  assert.deepEqual(checks, [{
    id: 'output-1',
    type: 'output',
    taskId: 'task-1',
    passCondition: { contains: 'completed', matchMode: 'contains' },
    matchMode: 'contains',
  }]);
});

test('server check evaluation returns generic feedback without expected answers', () => {
  const results = evaluatePracticalChecks({
    checks: [
      { id: 'output-1', type: 'output', expected: 'private-result' },
      { id: 'variable-1', type: 'variable_state', variableCheck: { name: 'answer', expected: 'private-value' } },
    ],
    stdout: 'The private-result is ready.',
    executionSuccess: true,
  });

  assert.equal(results[0].passed, true);
  assert.equal(results[1].passed, false);
  assert.equal(JSON.stringify(results).includes('private-result'), false);
  assert.equal(JSON.stringify(results).includes('private-value'), false);
});

test('file-content checks use server-collected artifacts', () => {
  const [result] = evaluatePracticalChecks({
    checks: [{
      id: 'file-1',
      type: 'file_contents',
      expected: 'report.txt',
      passCondition: { path: 'report.txt', contents: 'complete' },
    }],
    artifacts: { 'report.txt': 'The report is complete.' },
    executionSuccess: true,
  });

  assert.equal(result.passed, true);
  assert.equal(result.message.includes('complete'), false);
});
