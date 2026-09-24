#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { collectNormalizedActivities } from "./lib/hands-on-activity-source.js";

const REPOSITORY_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PILOT_PATH = path.join(REPOSITORY_ROOT, "scripts", "cs50-practical-pilot.json");
const GENERATOR_PATH = path.join(REPOSITORY_ROOT, "scripts", "generate-learning-board-practical.js");

function optionValue(args, name, fallback) {
  const index = args.indexOf(name);
  return index >= 0 ? args[index + 1] || fallback : fallback;
}

function runGenerator(args) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [GENERATOR_PATH, ...args], {
      cwd: REPOSITORY_ROOT,
      stdio: "inherit",
      env: process.env,
    });
    child.once("error", reject);
    child.once("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`Practical generator exited with code ${code}.`));
    });
  });
}

async function main() {
  const args = process.argv.slice(2);
  const pilot = JSON.parse(await fs.readFile(PILOT_PATH, "utf8"));
  const sourceRoot = path.join(REPOSITORY_ROOT, "docs", "computer-science");
  const records = await collectNormalizedActivities({ root: sourceRoot, courseId: pilot.courseId });
  const recordByKey = new Map(records.map((record) => [`${record.module}.${record.chapter}`, record]));
  const outputRoot = optionValue(args, "--output", path.join(REPOSITORY_ROOT, "generated", "learning-board-practicals"));
  const provider = optionValue(args, "--provider");
  const selected = pilot.activities.map((item) => {
    const record = recordByKey.get(`${item.module}.${item.chapter}`);
    if (!record) throw new Error(`Pilot activity ${item.module}.${item.chapter} was not found in the normalized source.`);
    return record;
  });

  console.log(`CS50 practical pilot: ${selected.length} activities`);
  for (const record of selected) {
    console.log(`- ${record.module}.${record.chapter}: ${record.title} [${record.category}]`);
  }

  if (args.includes("--list-only")) return;

  for (const record of selected) {
    const generatorArgs = [
      "--course-id", pilot.courseId,
      "--module", String(record.module),
      "--chapter", String(record.chapter),
      "--syllabus", path.join(REPOSITORY_ROOT, "docs", "computer-science", record.source.path),
      "--output", outputRoot,
    ];
    const model = optionValue(args, "--model");
    if (model) generatorArgs.push("--model", model);
    if (provider) generatorArgs.push("--provider", provider);
    const mockResponse = optionValue(args, "--mock-response");
    if (mockResponse) generatorArgs.push("--mock-response", mockResponse);
    if (args.includes("--dry-run")) generatorArgs.push("--dry-run");
    await runGenerator(generatorArgs);
  }

  if (!args.includes("--dry-run")) {
    const manifest = {
      schemaVersion: 1,
      courseId: pilot.courseId,
      generatedAt: new Date().toISOString(),
      source: pilot.source,
      activities: selected.map((record) => ({
        module: record.module,
        chapter: record.chapter,
        title: record.title,
        category: record.category,
        practicalPath: path.relative(REPOSITORY_ROOT, path.join(
          outputRoot,
          pilot.courseId,
          `m${record.module}-c${record.chapter}`,
          "practical.json",
        )).split(path.sep).join("/"),
      })),
    };
    await fs.mkdir(outputRoot, { recursive: true });
    const manifestPath = path.join(outputRoot, pilot.courseId, "pilot-manifest.json");
    await fs.mkdir(path.dirname(manifestPath), { recursive: true });
    await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
    console.log(`Pilot manifest written to: ${manifestPath}`);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
