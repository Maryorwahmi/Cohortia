#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { collectNormalizedActivities, PRACTICAL_CATEGORIES } from "./lib/hands-on-activity-source.js";

const REPOSITORY_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function optionValue(args, name, fallback) {
  const index = args.indexOf(name);
  return index >= 0 ? args[index + 1] || fallback : fallback;
}

function printSummary(records, outputPath) {
  const categoryCounts = new Map(PRACTICAL_CATEGORIES.map((category) => [category, 0]));
  for (const record of records) categoryCounts.set(record.category, (categoryCounts.get(record.category) || 0) + 1);

  console.log(`Normalized activities: ${records.length}`);
  for (const [category, count] of categoryCounts) console.log(`${category}: ${count}`);
  if (outputPath) console.log(`Wrote: ${outputPath}`);
}

async function main() {
  const args = process.argv.slice(2);
  const root = path.resolve(optionValue(args, "--root", path.join(REPOSITORY_ROOT, "docs", "computer-science")));
  const courseId = optionValue(args, "--course");
  const output = optionValue(args, "--output");
  const records = await collectNormalizedActivities({ root, courseId });
  const payload = {
    schemaVersion: 1,
    generatedAt: new Date().toISOString(),
    sourceRoot: path.relative(REPOSITORY_ROOT, root).split(path.sep).join("/"),
    activityCount: records.length,
    activities: records,
  };

  if (output) {
    const outputPath = path.resolve(output);
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
    printSummary(records, outputPath);
  } else {
    printSummary(records);
    process.stdout.write(`${JSON.stringify(payload, null, 2)}\n`);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
