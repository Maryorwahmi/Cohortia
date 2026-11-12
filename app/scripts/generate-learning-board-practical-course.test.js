import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import {
  generateCourse,
  parseChapterKeys,
  rejectBatchGenerationOptions,
} from "./generate-learning-board-practical-course.js";

const syllabusChapters = [
  { module: 1, chapter: 1 },
  { module: 1, chapter: 2 },
  { module: 2, chapter: 1 },
];

test("chapter selection uses complete chapter keys across the course", () => {
  assert.deepEqual(
    [...parseChapterKeys("1.2, 2.1", syllabusChapters)],
    ["1.2", "2.1"],
  );
  assert.equal(parseChapterKeys(undefined, syllabusChapters), null);
});

test("chapter selection rejects invalid or unknown chapter keys", () => {
  assert.throws(
    () => parseChapterKeys("2", syllabusChapters),
    /module\.chapter format/,
  );
  assert.throws(
    () => parseChapterKeys("3.4", syllabusChapters),
    /were not found/,
  );
});

test("removed batch options are rejected", () => {
  for (const option of ["module", "modules", "module-retries", "chapters", "per-chapter"]) {
    assert.throws(
      () => rejectBatchGenerationOptions({ [option]: "1" }),
      /Generation always runs one chapter per request/,
      option,
    );
  }
});

test("course dry-run schedules each selected chapter as a separate unit", async (t) => {
  const repoRoot = await fs.mkdtemp(path.join(os.tmpdir(), "chapter-practical-course-"));
  t.after(() => fs.rm(repoRoot, { recursive: true, force: true }));
  const syllabusPath = path.join(repoRoot, "docs", "computer-science", "chapter-course.md");
  await fs.mkdir(path.dirname(syllabusPath), { recursive: true });
  await fs.writeFile(syllabusPath, `---
title: Chapter Course
course_id: chapter-course
---
# Chapter Course
## Module 1: Foundations
### Chapter 1.1: First chapter
#### Hands-on activity
Category: Research & Analysis
**Activity: Compare two observations**
**Objective: Use evidence to evaluate a claim**
1. Record each observation
2. Compare the evidence

#### Learning objectives
- Evaluate a claim using evidence.

#### Key concepts
- Evidence supports or limits a claim.

#### Detailed lesson content
Compare observations and explain what they support.

## Module 2: Applications
### Chapter 2.1: Second chapter
#### Hands-on activity
Category: Research & Analysis
**Activity: Compare two examples**
**Objective: Use evidence to evaluate a second claim**
1. Record each example
2. Compare the evidence

#### Learning objectives
- Evaluate a claim using evidence.

#### Key concepts
- Evidence supports or limits a claim.

#### Detailed lesson content
Compare examples and explain what they support.
`, "utf8");

  const result = await generateCourse({
    "repo-root": repoRoot,
    "course-id": "chapter-course",
    syllabus: syllabusPath,
    output: path.join(repoRoot, "generated"),
    "dry-run": true,
  });

  assert.equal(result.chapterCount, 2);
  assert.deepEqual(result.chapters.map(({ moduleNumber, chapterNumber }) => (
    `${moduleNumber}.${chapterNumber}`
  )), ["1.1", "2.1"]);
});
