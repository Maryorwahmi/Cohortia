#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";

const repoRoot = path.resolve(import.meta.dirname, "../../..");
const catalogPath = path.join(repoRoot, "app", "docs", "computer-science", "catalog-courses-by-subcategory.json");
const outputPath = path.join(repoRoot, "app", "frontend", "public", "course-voices.json");
const model = process.env.GEMINI_TTS_MODEL || "gemini-2.5-flash-preview-tts";
const voiceDefinitions = [
  { id: "despina", label: "Despina", profile: "Educational Tutor" },
  { id: "aoede", label: "Aoede", profile: "Video Voiceover & Host" },
  { id: "callirrhoe", label: "Callirrhoe", profile: "Companion & Peer" },
  { id: "Charon", label: "Charon", profile: "Informative / Podcast Host" },
  { id: "achird", label: "Achird", profile: "Friendly Companion & Peer" },
];

const catalog = JSON.parse(await fs.readFile(catalogPath, "utf8"));
const courses = catalog.subcategories.flatMap((subcategory) =>
  (subcategory.courses || []).map((course) => ({
    ...course,
    subcategory: course.subcategory || subcategory.name || subcategory.title || "Computer Science",
  })),
);

const courseVoices = Object.fromEntries(
  courses.map((course, index) => {
    const voice = voiceDefinitions[index % voiceDefinitions.length];
    return [course.id, {
      id: voice.id,
      label: voice.label,
      profile: voice.profile,
      model,
      courseTitle: course.title,
      subcategory: course.subcategory,
    }];
  }),
);

const output = {
  generatedAt: new Date().toISOString(),
  strategy: "deterministic round-robin by catalog order; one voice per complete course",
  model,
  voices: voiceDefinitions,
  courseCount: courses.length,
  courseVoices,
};

await fs.writeFile(outputPath, JSON.stringify(output, null, 2) + "\n");
console.log(`Wrote ${courses.length} course voice assignments to ${outputPath}`);
for (const voice of voiceDefinitions) {
  const count = courses.filter((_, index) => voiceDefinitions[index % voiceDefinitions.length].id === voice.id).length;
  console.log(`  ${voice.label}: ${count} course(s)`);
}
