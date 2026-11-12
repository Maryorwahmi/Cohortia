#!/usr/bin/env node
/**
 * Generate per-chapter practicals from a course syllabus and publish a
 * course-manifest.json consumed by the Learning Board API.
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  buildChapterEntry,
  extractCourseChapters,
  generateChapter,
  parseOptions,
  resolveSyllabusPath,
} from "./generate-learning-board-practical-chapter.js";
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

function rejectBatchGenerationOptions(options) {
  const removed = ["module", "modules", "module-retries", "chapters", "per-chapter"]
    .filter((name) => Object.hasOwn(options, name));
  if (removed.length) {
    throw new Error(
      `${removed.map((name) => `--${name}`).join(", ")} are no longer supported. Generation always runs one chapter per request; use --chapter <module.chapter> to select chapters.`,
    );
  }
}

function positiveIntegerOption(value, fallback) {
  const parsed = Number.parseInt(String(value ?? ""), 10);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
}

function parseChapterKeys(value, discoveredChapters) {
  if (value === undefined) return null;
  const keys = [...new Set(String(value).split(/[\s,]+/).filter(Boolean))];
  if (!keys.length || keys.some((key) => !/^\d+\.\d+$/.test(key))) {
    throw new Error("--chapter must contain chapter keys in module.chapter format, such as 1.2.");
  }
  const discoveredKeys = new Set(discoveredChapters.map((chapter) => `${chapter.module}.${chapter.chapter}`));
  const missingKeys = keys.filter((key) => !discoveredKeys.has(key));
  if (missingKeys.length) {
    throw new Error(`Chapter(s) ${missingKeys.join(", ")} were not found in the selected course syllabus.`);
  }
  return new Set(keys);
}

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function generateChapterWithRetries(options, chapterKey, outputRoot, resolvedCourseId, syllabusPath, repoRoot) {
  const retryLimit = positiveIntegerOption(options["chapter-retries"], 3);
  let lastError;
  for (let attempt = 1; attempt <= retryLimit; attempt += 1) {
    try {
      const retryOptions = attempt === 1
        ? options
        : { ...options, force: false };
      return await generateChapter({
        ...retryOptions,
        course: undefined,
        "course-id": resolvedCourseId,
        "repo-root": repoRoot,
        syllabus: syllabusPath,
        chapter: chapterKey,
        output: outputRoot,
        model: options.model || process.env.GEMINI_MODEL || "gemini-2.5-flash",
      });
    } catch (error) {
      lastError = error;
      if (error?.retryable === false) {
        console.warn(`Chapter ${chapterKey} stopped without retry: ${error.message}`);
        break;
      }
      if (attempt >= retryLimit) break;
      const delaySeconds = Math.min(60, 5 * (2 ** (attempt - 1)));
      console.warn(`Chapter ${chapterKey} attempt ${attempt}/${retryLimit} failed: ${error.message}`);
      console.warn(`Retrying chapter ${chapterKey} in ${delaySeconds}s.`);
      await wait(delaySeconds * 1000);
    }
  }
  throw new Error(`Chapter ${chapterKey} failed after ${retryLimit} attempts: ${lastError?.message || "unknown error"}`);
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
  rejectBatchGenerationOptions(options);
  if (options.force === true) {
    console.warn("--force is enabled: matching practicals will be regenerated. Omit --force to resume and retry pending imports.");
  }

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
  const selectedChapterKeys = parseChapterKeys(options.chapter, chapters);
  const selectedChapters = chapters.filter((chapter) => (
    !selectedChapterKeys || selectedChapterKeys.has(`${chapter.module}.${chapter.chapter}`)
  ));
  const outputRoot = path.resolve(
    repoRoot,
    options.output || process.env.COHORTIA_PRACTICALS_DIR || "generated/learning-board-practicals"
  );
  const skippedChapters = [];
  const modulesByNumber = new Map();
  const dryRuns = [];
  const reusedChapters = [];
  let resolvedCourseId = courseId;
  for (const chapter of selectedChapters) {
    const moduleNumber = chapter.module;
    const chapterNumber = chapter.chapter;
    const chapterKey = `${moduleNumber}.${chapterNumber}`;
    const entry = await buildChapterEntry({
      repoRoot,
      syllabusPath,
      courseId,
      moduleNumber,
      chapterNumber,
      activitySourcePath: options["activity-source"],
      lessonSourcePath: options["lesson-source"],
      category: options.category,
      model,
      skipWithoutActivity: true,
      skippedChapters,
    });

    if (!entry) continue;
    resolvedCourseId ||= entry.sourceContext.courseId;
    if (options["dry-run"] !== true && options.force !== true) {
      const existing = await readExistingPractical(outputRoot, resolvedCourseId, entry);
      if (existing) reusedChapters.push(chapterKey);
    }

    const result = await generateChapterWithRetries(
      { ...options, model },
      chapterKey,
      outputRoot,
      resolvedCourseId,
      syllabusPath,
      repoRoot,
    );
    if (result.status === "dry-run") {
      dryRuns.push({
        moduleNumber,
        chapterNumber,
        title: chapter.title,
        promptCharacters: result.promptCharacters,
      });
    } else {
      const module = modulesByNumber.get(moduleNumber) || {
        moduleNumber,
        title: moduleTitleFrom(markdown, moduleNumber),
        chapters: [],
      };
      module.chapters.push({ chapterNumber, title: chapter.title });
      modulesByNumber.set(moduleNumber, module);
      if (result.status === "resumed" && !reusedChapters.includes(chapterKey)) {
        reusedChapters.push(chapterKey);
      }
    }
  }

  const modules = [...modulesByNumber.values()].sort((left, right) => left.moduleNumber - right.moduleNumber);
  if (options["dry-run"] === true) {
    return {
      status: "dry-run",
      courseId: resolvedCourseId || path.basename(syllabusPath, path.extname(syllabusPath)),
      courseTitle: courseTitleFrom(markdown, resolvedCourseId || "Course"),
      sourceSyllabus: path.relative(repoRoot, syllabusPath).replaceAll("\\", "/"),
      chapters: dryRuns,
      skippedChapters,
      chapterCount: dryRuns.length,
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
  rejectBatchGenerationOptions(options);
  const category = String(options.category || "computer-science");
  const subcategory = String(options.subcategory || "").trim();
  if (!subcategory) throw new Error("--subcategory must be a non-empty subcategory name.");

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
    console.log(`\nGenerating practical chapters for ${course.title} (${course.id})`);
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
    "  node scripts/generate-learning-board-practical-course.js --course-id <course-id> [--chapter <module.chapter[,module.chapter...]>] [--chapter-retries <count>] [--dry-run] [--skip-import]",
    "  node scripts/generate-learning-board-practical-course.js --category <category> --subcategory <name> [--chapter-retries <count>] [--list-only]",
    "  node scripts/generate-learning-board-practical-course.js --syllabus <path> [--course-id <course-id>]",
    "",
    "The generator makes one model request per chapter, imports each completed practical into Turso, then writes course-manifest.json.",
    "Use --chapter with a dotted key such as 1.2 to select one chapter, or provide comma-separated chapter keys.",
    "Use --category and --subcategory to generate practicals for every course in that catalog subcategory.",
    "Use --list-only with --subcategory to preview the matched courses and syllabus paths.",
    "Chapters without a hands-on activity are listed as skipped.",
    "Matching existing chapter practicals are reused by source hash; omit --force to resume and retry pending imports.",
    "Use --force only when you intentionally want to regenerate matching practicals.",
    "Progress is checkpointed in <output>/record.json per chapter; rerun the same command to resume generation and retry pending imports.",
    "When a chapter request fails, that chapter is retried (default 3 attempts) before the course stops. Configure --chapter-retries <count> when needed.",
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

export { generateCourse, parseChapterKeys, rejectBatchGenerationOptions };
