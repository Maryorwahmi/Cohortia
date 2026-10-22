import assert from 'node:assert/strict';
import test from 'node:test';
import {
  evaluatePracticalChecks,
  sanitizePracticalForLearner,
} from '../src/lib/practicalGrading.js';

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
