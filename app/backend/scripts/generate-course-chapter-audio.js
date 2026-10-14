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
const model = "gemini-2.5-flash-preview-tts";
let keyCursor = 0;

function keys() {
  return Object.keys(process.env)
    .filter((name) => name.startsWith("GEMINI_API_KEY") && process.env[name])
    .sort((left, right) => left.localeCompare(right, undefined, { numeric: true }))
    .map((name) => ({ name, value: process.env[name] }));
}

function wavFromPcm(pcm, sampleRate = 24000, channels = 1, bits = 16) {
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

function pcmFromWav(wav) {
  if (wav.toString("ascii", 0, 4) !== "RIFF" || wav.toString("ascii", 8, 12) !== "WAVE") {
    throw new Error("Generated file is not a WAV file");
  }
  return wav.subarray(44);
}

async function chapterScreens() {
  const db = createClient({ url: process.env.DATABASE_URL, authToken: process.env.DATABASE_AUTH_TOKEN });
  const result = await db.execute({
    sql: `
      SELECT screen, title, narrator_text
      FROM learning_board_screens
      WHERE course_id = ? AND module = ? AND chapter = ?
        AND narrator_text IS NOT NULL AND length(trim(narrator_text)) > 0
      ORDER BY screen
    `,
    args: [courseId, moduleNumber, chapterNumber],
  });
  db.close();
  if (!result.rows.length) throw new Error("No narrated screens found for this chapter");
  return result.rows;
}

async function synthesize(text, voice, apiKeys) {
  const body = {
    contents: [{ role: "user", parts: [{ text }] }],
    generationConfig: {
      responseModalities: ["AUDIO"],
      speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: voice } } },
    },
  };
  const ordered = apiKeys.map((_, index) => apiKeys[(keyCursor + index) % apiKeys.length]);
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
      keyCursor = (apiKeys.findIndex((candidate) => candidate.name === key.name) + 1) % apiKeys.length;
      return { wav: wavFromPcm(Buffer.from(part.inlineData.data, "base64")), keyName: key.name };
    }
    lastError = data.error?.message || `HTTP ${response.status}`;
  }
  throw new Error(`All Gemini keys failed: ${lastError}`);
}

async function main() {
  dotenv.config({ path: path.join(backendRoot, ".env") });
  const apiKeys = keys();
  if (!apiKeys.length) throw new Error("No Gemini API keys found");
  const screens = await chapterScreens();
  const voiceMap = JSON.parse(await fs.readFile(path.join(repoRoot, "app", "frontend", "public", "course-voices.json"), "utf8"));
  const voice = voiceMap.courseVoices[courseId]?.id || "despina";
  const outputRoot = path.join(repoRoot, "app", "generated", "learning-board-audio", courseId, `module-${String(moduleNumber).padStart(2, "0")}`, `chapter-${String(chapterNumber).padStart(2, "0")}`);
  await fs.mkdir(outputRoot, { recursive: true });

  console.log(`Course: ${courseId}`);
  console.log(`Chapter: M${moduleNumber} C${chapterNumber}`);
  console.log(`Screens: ${screens.length}`);
  console.log(`Voice: ${voice}`);

  const records = [];
  for (const screen of screens) {
    const screenNumber = Number(screen.screen);
    const filename = `screen-${String(screenNumber).padStart(2, "0")}.wav`;
    const filePath = path.join(outputRoot, filename);
    let wav;
    try {
      wav = await fs.readFile(filePath);
      if (wav.length <= 44) throw new Error("empty audio");
      console.log(`Skipping screen ${screenNumber}; existing file found`);
    } catch {
      process.stdout.write(`Generating screen ${screenNumber}... `);
      const result = await synthesize(String(screen.narrator_text).trim(), voice, apiKeys);
      wav = result.wav;
      await fs.writeFile(filePath, wav);
      console.log(`done via ${result.keyName} (${wav.length} bytes)`);
    }
    records.push({ screen: screenNumber, title: screen.title, filename, wav });
  }

  let offsetSeconds = 0;
  const pcmParts = [];
  const cues = records.map((record) => {
    const pcm = pcmFromWav(record.wav);
    pcmParts.push(pcm);
    const durationSeconds = pcm.length / (24000 * 2);
    const cue = {
      screen: record.screen,
      title: record.title,
      startSeconds: Number(offsetSeconds.toFixed(3)),
      endSeconds: Number((offsetSeconds + durationSeconds).toFixed(3)),
      durationSeconds: Number(durationSeconds.toFixed(3)),
    };
    offsetSeconds += durationSeconds;
    return cue;
  });
  const chapterWav = wavFromPcm(Buffer.concat(pcmParts));
  await fs.writeFile(path.join(outputRoot, "chapter.wav"), chapterWav);
  const manifest = {
    courseId,
    module: moduleNumber,
    chapter: chapterNumber,
    model,
    voice,
    audioFile: "chapter.wav",
    audioMimeType: "audio/wav",
    audioBytes: chapterWav.length,
    durationSeconds: Number(offsetSeconds.toFixed(3)),
    screenAudio: cues,
  };
  await fs.writeFile(path.join(outputRoot, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
  console.log(`Saved chapter audio and cue manifest to ${outputRoot}`);
}

main().catch((error) => {
  console.error(`Error: ${error.message}`);
  process.exitCode = 1;
});
