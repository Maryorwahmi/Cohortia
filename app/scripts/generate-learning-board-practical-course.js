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
import { assertValidPractical } from "./generate-learning-board-practical.js";

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

function practicalManifestPath(outputRoot, courseId, moduleNumber, chapterNumber) {
  return path.join(
    outputRoot,
    courseId,
    `m${moduleNumber}-c${chapterNumber}`,
    "practical.json"
  );
}

async function readExistingPractical(outputRoot, courseId, entry) {
  const manifestPath = practicalManifestPath(
    outputRoot,
    courseId,
    entry.metadata.moduleNumber,
    entry.metadata.chapterNumber,
  );
  let contents;
  try {
    contents = await fs.readFile(manifestPath, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") return null;
    throw error;
  }

  let manifest;
  try {
    manifest = JSON.parse(contents);
  } catch (error) {
    throw new Error(`Existing practical manifest is invalid JSON at ${manifestPath}: ${error.message}`);
  }

  if (manifest.courseId !== courseId
    || manifest.moduleNumber !== entry.metadata.moduleNumber
    || manifest.chapterNumber !== entry.metadata.chapterNumber
    || !manifest.practical
    || typeof manifest.practical !== "object") {
    throw new Error(`Existing practical manifest has mismatched chapter identity: ${manifestPath}`);
  }
  assertValidPractical(manifest.practical);
  if (manifest.practical.source?.sourceHash !== entry.sourceContext.source.sourceHash) {
    return null;
  }
  return manifest.practical;
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

async function readSubcategoryCourses(repoRoot, category, subcategory) {
  if (!/^[a-z0-9-]+$/i.test(category)) {
    throw new Error("--category must be a category slug.");
  }
  const catalogPath = path.join(repoRoot, "docs", category, "catalog-courses-by-subcategory.json");
  let catalog;
  try {
    catalog = JSON.parse(await fs.readFile(catalogPath, "utf8"));
  } catch (error) {
    throw new Error(`Could not read course catalog at ${catalogPath}: ${error.message}`);
  }

  const matchingSubcategory = catalog.subcategories?.find((item) => (
    String(item.name).trim().toLowerCase() === subcategory.trim().toLowerCase()
  ));
  if (!matchingSubcategory) {
    throw new Error(`Subcategory "${subcategory}" was not found in category "${category}".`);
  }

  const courses = matchingSubcategory.courses || [];
  if (!courses.length) {
    throw new Error(`Subcategory "${matchingSubcategory.name}" has no courses.`);
  }
  return courses
    .filter((course) => typeof course.id === "string" && course.id.trim())
    .map((course) => ({
      id: course.id.trim(),
      title: course.title || course.name || course.id,
    }));
}

async function findSubcategorySyllabi(repoRoot, category, courses) {
  const courseRoot = path.join(repoRoot, "docs", category);
  const syllabusPaths = new Map();
  const courseIds = new Set(courses.map((course) => course.id.toLowerCase()));

  async function walk(directory) {
    const entries = await fs.readdir(directory, { withFileTypes: true });
    for (const entry of entries) {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        await walk(entryPath);
      } else if (entry.isFile() && /\.(md|markdown)$/i.test(entry.name)) {
        const courseId = path.basename(entry.name, path.extname(entry.name)).toLowerCase();
        if (courseIds.has(courseId) && !syllabusPaths.has(courseId)) {
          syllabusPaths.set(courseId, entryPath);
        }
      }
    }
  }

  await walk(courseRoot);
  return syllabusPaths;
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
  const reusedChapters = [];
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
    const existingByChapter = new Map();
    if (options["dry-run"] !== true && options.force !== true) {
      for (const entry of validEntries) {
        const existing = await readExistingPractical(outputRoot, resolvedCourseId, entry);
        if (existing) {
          existingByChapter.set(entry.metadata.chapterNumber, existing);
          reusedChapters.push(`${moduleNumber}.${entry.metadata.chapterNumber}`);
        }
      }
    }
    const pendingEntries = validEntries.filter((entry) => !existingByChapter.has(entry.metadata.chapterNumber));
    if (options["dry-run"] === true || pendingEntries.length > 0) {
      const result = await generateModule({
        ...options,
        course: undefined,
        "course-id": resolvedCourseId,
        "repo-root": repoRoot,
        syllabus: syllabusPath,
        module: String(moduleNumber),
        chapters: pendingEntries.length
          ? pendingEntries.map((entry) => entry.metadata.chapterNumber).join(",")
          : validEntries.map((entry) => entry.metadata.chapterNumber).join(","),
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
      }
    }

    modules.push({
      moduleNumber,
      title: moduleTitleFrom(markdown, moduleNumber),
      chapters: validEntries.map((entry) => ({
        chapterNumber: entry.metadata.chapterNumber,
        title: chapterTitleFrom(moduleChapters, entry.metadata.chapterNumber),
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
      reusedChapters: [],
    };
  }

  if (!resolvedCourseId || !/^[a-z0-9][a-z0-9-]*$/.test(resolvedCourseId)) {
    throw new Error("The source syllabus did not resolve to a valid course id.");
  }

  const practicals = [];
  for (const module of modules) {
    for (const chapter of module.chapters) {
      const generatedFile = practicalManifestPath(outputRoot, resolvedCourseId, module.moduleNumber, chapter.chapterNumber);
      let parsed;
      try {
        parsed = JSON.parse(await fs.readFile(generatedFile, "utf8"));
      } catch (error) {
        throw new Error(`Could not load generated chapter practical at ${generatedFile}: ${error.message}`);
      }
      if (parsed.courseId !== resolvedCourseId
        || parsed.moduleNumber !== module.moduleNumber
        || parsed.chapterNumber !== chapter.chapterNumber
        || !parsed.practical
        || typeof parsed.practical !== "object") {
        throw new Error(`Generated chapter practical has mismatched identity at ${generatedFile}`);
      }
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
    reusedChapters,
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
    reusedChapters,
  };
}

async function generateSubcategory(options) {
  const category = String(options.category || "computer-science");
  const subcategory = String(options.subcategory || "").trim();
  if (!subcategory) throw new Error("--subcategory must be a non-empty subcategory name.");

  const moduleNumber = options.module === undefined ? null : Number(options.module);
  if (moduleNumber !== null && (!Number.isInteger(moduleNumber) || moduleNumber < 1)) {
    throw new Error("--module must be a positive integer when generating a subcategory.");
  }

  const repoRoot = path.resolve(options["repo-root"] || REPOSITORY_ROOT);
  const courses = await readSubcategoryCourses(repoRoot, category, subcategory);
  const syllabusPaths = await findSubcategorySyllabi(repoRoot, category, courses);
  const failures = [];
  let generated = 0;
  let skipped = 0;
  let dryRuns = 0;

  if (options["list-only"] === true) {
    for (const course of courses) {
      const syllabusPath = syllabusPaths.get(course.id.toLowerCase());
      console.log(`${course.id}\t${course.title}\t${syllabusPath ? "FOUND" : "MISSING"}\t${syllabusPath || "n/a"}`);
    }
    return { status: "list-only", courseCount: courses.length };
  }

  for (const course of courses) {
    const scope = moduleNumber === null ? "all modules" : `module ${moduleNumber}`;
    console.log(`\nGenerating ${scope} practicals for ${course.title} (${course.id})`);
    const syllabusPath = syllabusPaths.get(course.id.toLowerCase());
    if (!syllabusPath) {
      failures.push({ course, error: new Error(`Syllabus not found for course ${course.id}.`) });
      console.error(`Failed ${course.id}: syllabus not found.`);
      continue;
    }
    try {
      const result = await generateCourse({
        ...options,
        category: undefined,
        "repo-root": repoRoot,
        "course-id": course.id,
        syllabus: syllabusPath,
        course: undefined,
      });
      if (result.status === "generated") generated += 1;
      else if (result.status === "dry-run") dryRuns += 1;
      else skipped += 1;
    } catch (error) {
      failures.push({ course, error });
      console.error(`Failed ${course.id}: ${error.message}`);
    }
  }

  console.log(`\nSubcategory complete: ${generated} generated, ${skipped} skipped, ${dryRuns} dry-run, ${failures.length} failed.`);
  if (failures.length) {
    throw new Error(`${failures.length} course(s) failed in subcategory "${subcategory}".`);
  }
  return {
    status: dryRuns > 0 && generated === 0 && skipped === 0 ? "dry-run" : "generated",
    courseCount: courses.length,
    generated,
    skipped,
    dryRuns,
  };
}

function usage() {
  return [
    "Usage:",
    "  node scripts/generate-learning-board-practical-course.js --course-id <course-id> --module <number> [--chapters <number[,number...]>] [--dry-run] [--skip-import]",
    "  node scripts/generate-learning-board-practical-course.js --category <category> --subcategory <name> [--module <number>] [--list-only]",
    "  node scripts/generate-learning-board-practical-course.js --syllabus <path> [--course-id <course-id>]",
    "",
    "The generator creates an entire module's practicals in one model request,",
    "imports every generated chapter into Turso, then writes course-manifest.json.",
    "Use --category and --subcategory to generate every module for every course in that catalog subcategory; add --module to limit generation to one module.",
    "Use --list-only with --subcategory to preview the matched courses and syllabus paths.",
    "Chapters without a hands-on activity are listed as skipped.",
    "Matching existing chapter practicals are reused by source hash; use --force to regenerate them.",
    "Use --module by itself to generate the complete module. Add --chapters only to retry a small subset; the resulting course manifest contains only that selected subset.",
    "Use --skip-import only when you explicitly do not want generated practicals published to Turso.",
    "Use the default output directory, or set COHORTIA_PRACTICALS_DIR consistently",
    "for both the generator and backend when using a custom output location.",
  ].join("\n");
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const options = parseCourseOptions(process.argv.slice(2));
  const generate = options.subcategory
    ? generateSubcategory(options)
    : generateCourse(options);
  generate
    .then((result) => console.log(JSON.stringify(result, null, 2)))
    .catch((error) => {
      console.error(`Error: ${error.message}`);
      console.error(usage());
      process.exitCode = 1;
    });
}

export { generateCourse };
