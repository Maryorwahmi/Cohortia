import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {canFillUniqueCourseLevelQuotas, courseMatchesRoadmapLevel, normalizeCatalogLevel} from '../src/lib/courseLevels.js';

test('normalizes all five catalog labels to roadmap stages', () => {
  assert.deepEqual(normalizeCatalogLevel('Beginner').matches, ['beginner']);
  assert.deepEqual(normalizeCatalogLevel('Beginner–Intermediate').matches, ['beginner', 'intermediate']);
  assert.deepEqual(normalizeCatalogLevel('Intermediate').matches, ['intermediate']);
  assert.deepEqual(normalizeCatalogLevel('Intermediate–Advanced').matches, ['intermediate', 'advanced']);
  assert.deepEqual(normalizeCatalogLevel('Advanced').matches, ['advanced']);
});

test('accepts common hyphenated and written-range variants', () => {
  assert.deepEqual(normalizeCatalogLevel('beginner - intermediate').matches, ['beginner', 'intermediate']);
  assert.deepEqual(normalizeCatalogLevel('Intermediate to Advanced').matches, ['intermediate', 'advanced']);
});

test('does not match unknown or empty difficulty labels', () => {
  assert.deepEqual(normalizeCatalogLevel('').matches, []);
  assert.deepEqual(normalizeCatalogLevel('Expert').matches, []);
  assert.equal(courseMatchesRoadmapLevel('Beginner–Intermediate', 'advanced'), false);
});

test('hybrid courses match both adjacent roadmap stages', () => {
  assert.equal(courseMatchesRoadmapLevel('Beginner–Intermediate', 'beginner'), true);
  assert.equal(courseMatchesRoadmapLevel('Beginner–Intermediate', 'intermediate'), true);
  assert.equal(courseMatchesRoadmapLevel('Intermediate–Advanced', 'intermediate'), true);
  assert.equal(courseMatchesRoadmapLevel('Intermediate–Advanced', 'advanced'), true);
});

test('hybrid course levels can satisfy adjacent quotas without reusing a course', () => {
  const limits = {
    beginner: {choose: 1},
    intermediate: {choose: 1},
    advanced: {choose: 1},
  };
  assert.equal(canFillUniqueCourseLevelQuotas([
    {level: 'Beginner–Intermediate'},
    {level: 'Intermediate–Advanced'},
    {level: 'Advanced'},
  ], limits), true);
  assert.equal(canFillUniqueCourseLevelQuotas([
    {level: 'Beginner–Intermediate'},
    {level: 'Intermediate–Advanced'},
  ], limits), false);
});

test('inferred catalog levels use only the five agreed labels and flag uncertain classifications', async () => {
  const inferencePath = new URL('../src/data/catalog-course-level-inferences.json', import.meta.url);
  const inferences = JSON.parse(await readFile(inferencePath, 'utf8')).levels;
  const allowedLevels = new Set([
    'Beginner',
    'Beginner–Intermediate',
    'Intermediate',
    'Intermediate–Advanced',
    'Advanced',
  ]);

  assert.ok(Object.keys(inferences).length > 0);
  for (const inference of Object.values(inferences)) {
    assert.ok(allowedLevels.has(inference.level));
    if (inference.confidence === 'low') assert.equal(inference.reviewRequired, true);
  }
});
