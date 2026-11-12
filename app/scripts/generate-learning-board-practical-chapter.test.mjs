import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import {afterEach, test} from "node:test";
import {buildChapterEntry, generateChapter} from "./generate-learning-board-practical-chapter.js";
import {
  buildTeachViewOpening,
  extractActivityTitle,
  inferLanguage,
  normalizeWorkspace,
  reconcileSourceFiles,
} from "./generate-learning-board-practical.js";
import {
  readCourseGenerationRecord,
  writeCourseGenerationRecord,
} from "./lib/learning-board-record.js";

const temporaryRoots = [];

async function createFixture() {
  const repoRoot = await fs.mkdtemp(path.join(os.tmpdir(), "practical-resume-"));
  temporaryRoots.push(repoRoot);
  const syllabusPath = path.join(repoRoot, "docs", "computer-science", "resume-test-course.md");
  const outputRoot = path.join(repoRoot, "generated", "learning-board-practicals");
  const course = {id: "resume-test-course", title: "Resume Test Course"};
  const markdown = `---
title: Resume Test Course
course_id: resume-test-course
---
# Resume Test Course
## Module 1: Foundations
### Chapter 1.1: Start here
#### Hands-on activity
Category: Research & Analysis
**Activity: Reuse the saved practical**
**Objective: Resume a saved practical without generating it again**
1. Inspect the saved chapter
2. Continue with the next step

#### Learning objectives
- Understand how saved practicals are resumed.

#### Key concepts
- A saved artifact can be checked against its source.

#### Detailed lesson content
The chapter explains how to inspect and resume saved work.
`;
  await fs.mkdir(path.dirname(syllabusPath), {recursive: true});
  await fs.writeFile(syllabusPath, markdown, "utf8");
  const entry = await buildChapterEntry({
    repoRoot,
    syllabusPath,
    courseId: course.id,
    moduleNumber: 1,
    chapterNumber: 1,
    model: "test-model",
  });
  assert.ok(entry, "fixture should produce one practical chapter");

  const artifactPath = path.join(outputRoot, course.id, "m1-c1", "practical.json");
  const manifest = {
    courseId: course.id,
    moduleNumber: 1,
    chapterNumber: 1,
    practical: {
      source: {sourceHash: entry.metadata.sourceHash},
    },
  };
  await fs.mkdir(path.dirname(artifactPath), {recursive: true});
  await fs.writeFile(artifactPath, JSON.stringify(manifest), "utf8");

  return {repoRoot, syllabusPath, outputRoot, course, entry, artifactPath};
}

async function runResume(fixture, options = {}, importer = async () => ({practicalPath: "imported"})) {
  return generateChapter({
    "repo-root": fixture.repoRoot,
    "course-id": fixture.course.id,
    syllabus: fixture.syllabusPath,
    chapter: "1.1",
    output: fixture.outputRoot,
    ...options,
  }, {importPractical: importer});
}

afterEach(async () => {
  await Promise.all(temporaryRoots.splice(0).map((root) => fs.rm(root, {recursive: true, force: true})));
});

test("resumes a generated chapter by retrying its pending database import", async () => {
  const fixture = await createFixture();
  await writeCourseGenerationRecord(fixture.outputRoot, fixture.course, fixture.syllabusPath, {
    completedChapters: {
      "1.1": {
        status: "generated",
        sourceHash: fixture.entry.metadata.sourceHash,
        artifactPath: path.relative(fixture.outputRoot, fixture.artifactPath).replaceAll("\\", "/"),
      },
    },
  });

  const importedPaths = [];
  const result = await runResume(fixture, {}, async (artifactPath) => {
    importedPaths.push(artifactPath);
    return {practicalPath: "resume-test-course/1.1"};
  });

  assert.equal(result.status, "resumed");
  assert.equal(importedPaths.length, 1);
  assert.equal(importedPaths[0], fixture.artifactPath);
  assert.deepEqual(result.imports, ["resume-test-course/1.1"]);
  const record = await readCourseGenerationRecord(fixture.outputRoot, fixture.course.id);
  assert.equal(record.completedChapters["1.1"].status, "completed");
  assert.ok(record.completedChapters["1.1"].importedAt);
});

test("keeps an import failure resumable for the next run", async () => {
  const fixture = await createFixture();
  await writeCourseGenerationRecord(fixture.outputRoot, fixture.course, fixture.syllabusPath, {
    completedChapters: {
      "1.1": {
        status: "generated",
        sourceHash: fixture.entry.metadata.sourceHash,
        artifactPath: path.relative(fixture.outputRoot, fixture.artifactPath).replaceAll("\\", "/"),
      },
    },
  });

  await assert.rejects(
    runResume(fixture, {}, async () => {
      throw new Error("Database import failed");
    }),
    /Database import failed/,
  );
  const pendingRecord = await readCourseGenerationRecord(fixture.outputRoot, fixture.course.id);
  assert.equal(pendingRecord.completedChapters["1.1"].status, "generated");

  let retryCount = 0;
  await runResume(fixture, {}, async () => {
    retryCount += 1;
    return {practicalPath: "resume-test-course/1.1"};
  });
  assert.equal(retryCount, 1);
  const completedRecord = await readCourseGenerationRecord(fixture.outputRoot, fixture.course.id);
  assert.equal(completedRecord.completedChapters["1.1"].status, "completed");
});

test("records and imports a matching artifact even when no checkpoint exists", async () => {
  const fixture = await createFixture();
  const result = await runResume(fixture, {"skip-import": true});

  assert.equal(result.status, "resumed");
  const generatedRecord = await readCourseGenerationRecord(fixture.outputRoot, fixture.course.id);
  assert.equal(generatedRecord.completedChapters["1.1"].status, "generated");

  let importCount = 0;
  await runResume(fixture, {}, async () => {
    importCount += 1;
    return {practicalPath: "resume-test-course/1.1"};
  });
  assert.equal(importCount, 1);
  const completedRecord = await readCourseGenerationRecord(fixture.outputRoot, fixture.course.id);
  assert.equal(completedRecord.completedChapters["1.1"].status, "completed");
});

test("does not regenerate or re-import a completed chapter", async () => {
  const fixture = await createFixture();
  await writeCourseGenerationRecord(fixture.outputRoot, fixture.course, fixture.syllabusPath, {
    completedChapters: {
      "1.1": {
        status: "completed",
        sourceHash: fixture.entry.metadata.sourceHash,
        artifactPath: path.relative(fixture.outputRoot, fixture.artifactPath).replaceAll("\\", "/"),
        importedAt: new Date().toISOString(),
      },
    },
  });

  const result = await runResume(fixture, {}, async () => {
    assert.fail("completed practical should not be imported again");
  });

  assert.equal(result.status, "resumed");
  assert.deepEqual(result.imports, []);
});

test("keeps the authoritative C source when a model labels the starter as Python", () => {
  const sourceCode = "#include <stdio.h>\nint main(void) {\n    puts(\"ready\");\n    return 0;\n}";
  assert.equal(
    extractActivityTitle(`Write a C program that calculates an average from dynamically allocated grades.\n\n\`\`\`c\n${sourceCode}\n\`\`\``),
    "Write a C program that calculates an average from dynamically allocated grades",
  );
  const sourceContext = {
    source: {category: "Terminal Coding Lab"},
    activityChapter: {handsOnActivity: `Write a C program.\n\n\`\`\`c\n${sourceCode}\n\`\`\``},
    lessonChapter: {raw: sourceCode},
  };
  const language = inferLanguage({
    language: "python",
    files: [{path: "main.py"}],
  }, sourceContext, "code");
  const files = reconcileSourceFiles([{
    path: "main.py",
    content: "# STEP 1: Setup\n# STEP 2: Complete the program",
    language: "python",
  }], sourceContext, language, "code");

  assert.equal(language, "c");
  assert.equal(files[0].path, "main.c");
  assert.equal(files[0].language, "c");
  assert.equal(files[0].content, sourceCode);

  const cPlusPlusContext = {
    source: {category: "Terminal Coding Lab"},
    activityChapter: {raw: "```cpp\n#include <iostream>\nstruct Grade { int value; };\n```"},
    lessonChapter: {raw: ""},
  };
  assert.equal(inferLanguage({language: "python"}, cPlusPlusContext, "code"), "cpp");

  const workspace = normalizeWorkspace({
    workspace: {
      terminal: {
        entryFile: "main.py",
        editableFiles: ["main.py"],
        compileCommands: ["python -m py_compile main.py"],
        runCommands: ["python main.py"],
      },
    },
  }, {
    experienceType: "terminal_coding_lab",
    activityKind: "terminal_code_along",
    files,
    language: "c",
    title: "Grade average",
    instructions: "Build and run the grade average program.",
  });
  assert.equal(workspace.terminal.entryFile, "main.c");
  assert.deepEqual(workspace.terminal.editableFiles, ["main.c"]);
  assert.deepEqual(workspace.terminal.compileCommands, ["clang main.c -o main"]);
  assert.deepEqual(workspace.terminal.runCommands, ["./main"]);
});

test("prefers lesson-grounded concepts over weak task concept labels", () => {
  const sourceContext = {
    source: {category: "Terminal Coding Lab", sourceKey: "course/2/1"},
    activityTitle: "Allocate and release a grade array",
    activityChapter: {handsOnActivity: "Write a C program that allocates a grade array."},
    lessonContext: {
      keyConcepts: [
        "Pointer: A variable that stores the memory address of another variable.",
        "Heap Memory: Dynamically managed memory that the programmer allocates and frees.",
        "Memory Leak: Allocated memory that is not released when it is no longer needed.",
      ],
      chapterIntroduction: "Pointers connect variables to memory addresses.",
    },
  };
  const opening = buildTeachViewOpening(
    {},
    sourceContext,
    "Grade Array",
    "Allocate and average grades.",
    "Write the grade-array program.",
    [{requiredConcepts: ["Weak: x", "Generic: y", "Unclear: z"]}],
    {type: "terminal", terminal: {entryFile: "main.c", language: "c"}},
    "working C code and verified output",
  );

  assert.deepEqual(opening.keyConcepts.map((concept) => concept.title), [
    "Pointer",
    "Heap Memory",
    "Memory Leak",
  ]);
  assert.ok(opening.keyConcepts.every((concept) => concept.description.length >= 15));
});
