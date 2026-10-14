#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import dotenv from "dotenv";
import { createClient } from "@libsql/client";

const backendRoot = path.resolve(import.meta.dirname, "..");
const repoRoot = path.resolve(backendRoot, "../..");
const courseId = process.argv[2] || "cs50s-introduction-to-computer-science";
const moduleNumber = Number(process.argv[3] || 1);
const chapterNumber = Number(process.argv[4] || 1);
const screenLimit = Number(process.argv[5] || 0);
const model = "gemini-2.5-flash-preview-tts";
let keyCursor = 0;

function getKeys() {
  return Object.keys(process.env)
    .filter((name) => name.startsWith("GEMINI_API_KEY") && process.env[name])
    .sort((left, right) => left.localeCompare(right, undefined, { numeric: true }))
    .map((name) => ({ name, value: process.env[name] }));
}

function pcmToWav(pcm, sampleRate = 24000, channels = 1, bits = 16) {
  const blockAlign = channels * bits / 8;
  const header = Buffer.alloc(44);
  header.write("RIFF", 0);
  header.writeUInt32LE(36 + pcm.length, 4);
  header.write("WAVEfmt ", 8);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(channels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(sampleRate * blockAlign, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(bits, 34);
  header.write("data", 36);
  header.writeUInt32LE(pcm.length, 40);
  return Buffer.concat([header, pcm]);
}

async function getChapter() {
  const db = createClient({ url: process.env.DATABASE_URL, authToken: process.env.DATABASE_AUTH_TOKEN });
  const result = await db.execute({
    sql: `
      SELECT screen, title, narrator_text, narrator_duration, duration_seconds
      FROM learning_board_screens
      WHERE course_id = ? AND module = ? AND chapter = ?
        AND narrator_text IS NOT NULL AND length(trim(narrator_text)) > 0
      ORDER BY screen
    `,
    args: [courseId, moduleNumber, chapterNumber],
  });
  db.close();
  if (!result.rows.length) throw new Error("No narrated screens found for the requested chapter");
  return screenLimit > 0 ? result.rows.slice(0, screenLimit) : result.rows;
}

async function generate(text, keys, voice) {
  const body = {
    contents: [{ role: "user", parts: [{ text }] }],
    generationConfig: {
      responseModalities: ["AUDIO"],
      speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: voice } } },
    },
  };
  const ordered = keys.map((_, index) => keys[(keyCursor + index) % keys.length]);
  let lastError = "unknown error";
  for (const key of ordered) {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(key.value)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await response.json().catch(() => ({}));
    if (response.ok) {
      const part = data.candidates?.[0]?.content?.parts?.find((candidate) => candidate.inlineData?.data);
      if (!part) throw new Error("Gemini returned no audio data");
      keyCursor = (keys.findIndex((candidate) => candidate.name === key.name) + 1) % keys.length;
      return { pcm: Buffer.from(part.inlineData.data, "base64"), keyName: key.name };
    }
    lastError = data.error?.message || `HTTP ${response.status}`;
  }
  throw new Error(`All Gemini keys failed: ${lastError}`);
}

async function main() {
  dotenv.config({ path: path.join(backendRoot, ".env") });
  const keys = getKeys();
  if (!keys.length) throw new Error("No Gemini API keys found");
  const screens = await getChapter();
  const voiceMap = JSON.parse(await fs.readFile(path.join(repoRoot, "app", "frontend", "public", "course-voices.json"), "utf8"));
  const voice = voiceMap.courseVoices[courseId]?.id || "despina";
  const narration = screens.map((screen) => String(screen.narrator_text).trim()).join("\n\n");
  const suffix = screenLimit > 0 ? `-s1-${screenLimit}` : "";
  const outputRoot = path.join(repoRoot, "app", "generated", "audio-auditions", `${courseId}-m${moduleNumber}-c${chapterNumber}${suffix}`);
  await fs.mkdir(outputRoot, { recursive: true });

  console.log(`Course: ${courseId}`);
  console.log(`Chapter: M${moduleNumber} C${chapterNumber}`);
  console.log(`Screens: ${screens.length}`);
  console.log(`Narration characters: ${narration.length}`);
  console.log(`Voice: ${voice}`);
  console.log(`Generating one combined chapter request...`);
  const result = await generate(narration, keys, voice);
  const wav = pcmToWav(result.pcm);
  await fs.writeFile(path.join(outputRoot, "chapter.wav"), wav);

  const totalWords = screens.reduce((sum, screen) => sum + String(screen.narrator_text).trim().split(/\s+/).length, 0);
  let startSeconds = 0;
  const cues = screens.map((screen) => {
    const words = String(screen.narrator_text).trim().split(/\s+/).length;
    const estimatedSeconds = (words / totalWords) * (result.pcm.length / (24000 * 2));
    const cue = {
      screen: Number(screen.screen),
      title: screen.title,
      startSeconds: Number(startSeconds.toFixed(3)),
      endSeconds: Number((startSeconds + estimatedSeconds).toFixed(3)),
      cueAccuracy: "estimated-word-proportion",
    };
    startSeconds += estimatedSeconds;
    return cue;
  });
  const manifest = {
    courseId,
    module: moduleNumber,
    chapter: chapterNumber,
    model,
    voice,
    generatedWithKey: result.keyName,
    audioFile: "chapter.wav",
    audioMimeType: "audio/wav",
    audioBytes: wav.length,
    durationSeconds: Number((result.pcm.length / (24000 * 2)).toFixed(3)),
    cueStrategy: "estimated-word-proportion; not production-safe for exact screen synchronization",
    cues,
  };
  await fs.writeFile(path.join(outputRoot, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
  console.log(`Saved ${wav.length} bytes to ${outputRoot}`);
  console.log(`Key used: ${result.keyName}`);
}

main().catch((error) => {
  console.error(`Error: ${error.message}`);
  process.exitCode = 1;
});
