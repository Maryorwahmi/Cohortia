#!/usr/bin/env node
/**
 * Generate per-chapter practicals from a course syllabus and publish a
 * course-manifest.json consumed by the Learning Board API.
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  buildModuleEntries,
  extractCourseChapters,
  generateModule,
  parseOptions,
  resolveSyllabusPath,
} from "./generate-learning-board-practical-module.js";

const REPOSITORY_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function courseIdFrom(options) {
  if (typeof options["course-id"] === "string") return options["course-id"];
  if (typeof options.course === "string" && !/[\\/]|\.md(?:own)?$/i.test(options.course)) return options.course;
  return null;
}

function courseTitleFrom(markdown, fallback) {
  const frontmatter = /^---\s*\r?\n([\s\S]*?)\r?\n---/m.exec(markdown)?.[1];
  const metadataTitle = frontmatter?.match(/^title:\s*["']?(.+?)["']?\s*$/m)?.[1]?.trim();
  if (metadataTitle) return metadataTitle;
  return markdown.match(/^#\s+(.+?)\s*$/m)?.[1]?.trim() || fallback;
}

function moduleTitleFrom(markdown, moduleNumber) {
  const headingPattern = new RegExp(`^#{1,4}\\s*(?:Module|Unit)\\s+0?${moduleNumber}(?:\\s*[:—–-]\\s*|\\s+)([^\\r\\n]+)?$`, "im");
  return headingPattern.exec(markdown)?.[1]?.trim() || `Module ${moduleNumber}`;
}

function chapterTitleFrom(chapters, chapterNumber) {
  return chapters.find((chapter) => chapter.chapter === chapterNumber)?.title || `Chapter ${chapterNumber}`;
}

function parseCourseOptions(argv) {
  const options = parseOptions(argv);
  const positionalCourseId = argv.find((argument) => !argument.startsWith("--"));
  if (!options["course-id"]) {
    options["course-id"] = process.env.npm_config_course_id || positionalCourseId;
  }
  if (options["dry-run"] !== true && process.env.npm_config_dry_run === "true") {
    options["dry-run"] = true;
  }
  return options;
}

async function generateCourse(options) {
  const repoRoot = path.resolve(options["repo-root"] || REPOSITORY_ROOT);
  const courseId = courseIdFrom(options);
  const requestedSyllabus = await resolveSyllabusPath(options, courseId);
  if (!requestedSyllabus) {
    throw new Error("Pass --course-id <course-id>, --course <course-id or syllabus path>, or --syllabus <path>.");
  }

  const syllabusPath = path.isAbsolute(requestedSyllabus)
    ? requestedSyllabus
    : path.resolve(repoRoot, requestedSyllabus);
  const markdown = await fs.readFile(syllabusPath, "utf8");
  const chapters = extractCourseChapters(markdown);
  if (!chapters.length) throw new Error("No numbered chapters were found in the course syllabus.");

  const model = options.model || process.env.GEMINI_MODEL || "gemini-2.5-flash";
  const requestedModule = options.module === undefined ? null : Number(options.module);
  if (requestedModule !== null && (!Number.isInteger(requestedModule) || requestedModule < 1)) {
    throw new Error("--module must be a positive integer.");
  }
  const requestedChapters = options.chapters ?? options.chapter;
  if (requestedChapters !== undefined && requestedModule === null) {
    throw new Error("--module is required when filtering with --chapter or --chapters.");
  }
  const outputChapterFilter = requestedChapters === undefined || requestedChapters === true
    ? null
    : new Set(String(requestedChapters).split(/[\s,]+/).filter(Boolean).map(Number));
  if (outputChapterFilter?.size && [...outputChapterFilter].some((chapter) => !Number.isInteger(chapter) || chapter < 1)) {
    throw new Error("--chapter/--chapters must contain positive integers.");
  }
  const outputRoot = path.resolve(
    repoRoot,
    options.output || process.env.COHORTIA_PRACTICALS_DIR || "generated/learning-board-practicals"
  );
  const skippedChapters = [];
  const modules = [];
  const dryRuns = [];
  let resolvedCourseId = courseId;
  const discoveredModules = [...new Set(chapters.map((chapter) => chapter.module))]
    .filter((moduleNumber) => requestedModule === null || moduleNumber === requestedModule)
    .sort((a, b) => a - b);
  if (requestedModule !== null && !discoveredModules.includes(requestedModule)) {
    throw new Error(`Module ${requestedModule} was not found in the selected course syllabus.`);
  }

  for (const moduleNumber of discoveredModules) {
    const moduleChapters = chapters.filter((chapter) => (
      chapter.module === moduleNumber
      && (!outputChapterFilter || outputChapterFilter.has(chapter.chapter))
    ));
    if (!moduleChapters.length) continue;
    const validEntries = await buildModuleEntries({
      repoRoot,
      syllabusPath,
      courseId,
      moduleNumber,
      chapterNumbers: moduleChapters.map((chapter) => chapter.chapter),
      activitySourcePath: options["activity-source"],
      lessonSourcePath: options["lesson-source"],
      category: options.category,
      model,
      skipWithoutActivity: true,
      skippedChapters,
    });

    if (!validEntries.length) continue;
    resolvedCourseId ||= validEntries[0].sourceContext.courseId;
    const validChapterNumbers = validEntries.map((entry) => entry.metadata.chapterNumber);
    const result = await generateModule({
      ...options,
      course: undefined,
      "course-id": resolvedCourseId,
      "repo-root": repoRoot,
      syllabus: syllabusPath,
      module: String(moduleNumber),
      chapters: validChapterNumbers.join(","),
      output: outputRoot,
      model,
    });

    if (result.status === "dry-run") {
      dryRuns.push({
        moduleNumber,
        title: moduleTitleFrom(markdown, moduleNumber),
        chapters: result.chapters.map((chapter) => chapter.chapterNumber),
        promptCharacters: result.promptCharacters,
      });
      modules.push({
        moduleNumber,
        title: moduleTitleFrom(markdown, moduleNumber),
        chapters: validEntries.map((entry) => ({
          chapterNumber: entry.metadata.chapterNumber,
          title: chapterTitleFrom(moduleChapters, entry.metadata.chapterNumber),
        })),
      });
      continue;
    }

    const generatedChapters = [];
    for (const target of result.targets) {
      const generatedFile = JSON.parse(await fs.readFile(target, "utf8"));
      const chapterNumber = generatedFile.chapterNumber;
      generatedChapters.push({
        moduleNumber,
        chapterNumber,
        chapterTitle: chapterTitleFrom(moduleChapters, chapterNumber),
        practical: generatedFile.practical,
      });
    }
    modules.push({
      moduleNumber,
      title: moduleTitleFrom(markdown, moduleNumber),
      chapters: generatedChapters.map((chapter) => ({
        chapterNumber: chapter.chapterNumber,
        title: chapter.chapterTitle,
      })),
    });
  }

  if (options["dry-run"] === true) {
    return {
      status: "dry-run",
      courseId: resolvedCourseId || path.basename(syllabusPath, path.extname(syllabusPath)),
      courseTitle: courseTitleFrom(markdown, resolvedCourseId || "Course"),
      sourceSyllabus: path.relative(repoRoot, syllabusPath).replaceAll("\\", "/"),
      modules: dryRuns,
      skippedChapters,
      chapterCount: dryRuns.reduce((count, item) => count + item.chapters.length, 0),
    };
  }

  if (!resolvedCourseId || !/^[a-z0-9][a-z0-9-]*$/.test(resolvedCourseId)) {
    throw new Error("The source syllabus did not resolve to a valid course id.");
  }

  const practicals = [];
  for (const module of modules) {
    for (const chapter of module.chapters) {
      const generatedFile = path.join(outputRoot, resolvedCourseId, `m${module.moduleNumber}-c${chapter.chapterNumber}`, "practical.json");
      const parsed = JSON.parse(await fs.readFile(generatedFile, "utf8"));
      practicals.push({
        moduleNumber: module.moduleNumber,
        chapterNumber: chapter.chapterNumber,
        moduleTitle: module.title,
        chapterTitle: chapter.title,
        practical: parsed.practical,
      });
    }
  }

  if (!practicals.length) {
    throw new Error("No chapters with hands-on activities were found; no course manifest was published.");
  }

  const courseManifest = {
    schemaVersion: 1,
    courseId: resolvedCourseId,
    courseTitle: courseTitleFrom(markdown, resolvedCourseId),
    generatedAt: new Date().toISOString(),
    sourceSyllabus: path.relative(repoRoot, syllabusPath).replaceAll("\\", "/"),
    chapterCount: practicals.length,
    skippedChapters,
    modules,
    practicals,
  };
  const courseDirectory = path.join(outputRoot, resolvedCourseId);
  await fs.mkdir(courseDirectory, { recursive: true });
  const manifestPath = path.join(courseDirectory, "course-manifest.json");
  const pendingManifestPath = `${manifestPath}.pending`;
  await fs.writeFile(pendingManifestPath, JSON.stringify(courseManifest, null, 2), "utf8");
  await fs.rename(pendingManifestPath, manifestPath);

  return {
    status: "generated",
    courseId: resolvedCourseId,
    courseTitle: courseManifest.courseTitle,
    manifestPath,
    chapterCount: practicals.length,
    skippedChapters,
  };
}

function usage() {
  return [
    "Usage:",
    "  node scripts/generate-learning-board-practical-course.js --course-id <course-id> [--module <number> --chapters <number[,number...]>] [--dry-run]",
    "  node scripts/generate-learning-board-practical-course.js --syllabus <path> [--course-id <course-id>]",
    "",
    "The generator creates one practical per chapter with a hands-on activity,",
    "then writes course-manifest.json for the Learning Board API to serve.",
    "Chapters without a hands-on activity are listed as skipped.",
    "Use --module and --chapters to generate a small test subset; the resulting course manifest contains only that selected subset.",
    "Use the default output directory, or set COHORTIA_PRACTICALS_DIR consistently",
    "for both the generator and backend when using a custom output location.",
  ].join("\n");
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  generateCourse(parseCourseOptions(process.argv.slice(2)))
    .then((result) => console.log(JSON.stringify(result, null, 2)))
    .catch((error) => {
      console.error(`Error: ${error.message}`);
      console.error(usage());
      process.exitCode = 1;
    });
}

export { generateCourse };
