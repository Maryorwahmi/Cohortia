#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import dotenv from "dotenv";
import { createClient } from "@libsql/client";

const backendRoot = path.resolve(import.meta.dirname, "..");
const repoRoot = path.resolve(backendRoot, "../..");
const outputRoot = path.join(repoRoot, "app", "generated", "audio-auditions", "python-bootcamp-screen-2");
const model = process.env.GEMINI_TTS_MODEL || "gemini-2.5-flash-preview-tts";
const voices = ["despina", "aoede", "callirrhoe", "Charon", "achird", "en-us-bodi"];
const sampleSelector = {
  courseId: "100-days-of-code-the-complete-python-pro-bootcamp",
  module: 1,
  chapter: 1,
  screen: 2,
};
let keyCursor = 0;

function getGeminiKeys() {
  return Object.keys(process.env)
    .filter((name) => name.startsWith("GEMINI_API_KEY") && process.env[name])
    .sort((left, right) => left.localeCompare(right, undefined, { numeric: true }))
    .map((name) => ({ name, value: process.env[name] }));
}

function pcmToWav(pcm, sampleRate = 24_000, channels = 1, bitsPerSample = 16) {
  const blockAlign = channels * (bitsPerSample / 8);
  const byteRate = sampleRate * blockAlign;
  const header = Buffer.alloc(44);
  header.write("RIFF", 0);
  header.writeUInt32LE(36 + pcm.length, 4);
  header.write("WAVE", 8);
  header.write("fmt ", 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(channels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(bitsPerSample, 34);
  header.write("data", 36);
  header.writeUInt32LE(pcm.length, 40);
  return Buffer.concat([header, pcm]);
}

async function getSampleScreen() {
  const database = createClient({
    url: process.env.DATABASE_URL,
    authToken: process.env.DATABASE_AUTH_TOKEN,
  });
  const result = await database.execute({
    sql: `
      SELECT course_id, module, chapter, screen, title, narrator_text
      FROM learning_board_screens
      WHERE course_id = ?
        AND module = ?
        AND chapter = ?
        AND screen = ?
        AND narrator_text IS NOT NULL
    `,
    args: [sampleSelector.courseId, sampleSelector.module, sampleSelector.chapter, sampleSelector.screen],
  });
  database.close();
  if (!result.rows[0]) throw new Error("No suitable narrated learning-board screen was found in Turso");
  return result.rows[0];
}

async function synthesize(text, voice, keys) {
  const body = {
    contents: [{ role: "user", parts: [{ text }] }],
    generationConfig: {
      responseModalities: ["AUDIO"],
      speechConfig: {
        voiceConfig: { prebuiltVoiceConfig: { voiceName: voice } },
      },
    },
  };

  let lastError = "unknown error";
  const orderedKeys = keys.map((_, index) => keys[(keyCursor + index) % keys.length]);
  for (const key of orderedKeys) {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(key.value)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      },
    );
    const data = await response.json().catch(() => ({}));
    if (response.ok) {
      const part = data.candidates?.[0]?.content?.parts?.find((candidate) => candidate.inlineData);
      const inlineData = part?.inlineData;
      if (!inlineData?.data) throw new Error(`Gemini returned no audio for voice ${voice}`);
      const pcm = Buffer.from(inlineData.data, "base64");
      keyCursor = (keys.findIndex((candidate) => candidate.name === key.name) + 1) % keys.length;
      return { audio: pcmToWav(pcm), mimeType: "audio/wav", keyName: key.name };
    }
    lastError = data.error?.message || `HTTP ${response.status}`;
  }
  throw new Error(`All Gemini keys failed for ${voice}: ${lastError}`);
}

async function main() {
  dotenv.config({ path: path.join(backendRoot, ".env") });
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is required");
  const keys = getGeminiKeys();
  if (!keys.length) throw new Error("No GEMINI_API_KEY* variables found");

  const screen = await getSampleScreen();
  const narration = String(screen.narrator_text).trim();
  await fs.mkdir(outputRoot, { recursive: true });

  const manifest = {
    model,
    source: {
      courseId: screen.course_id,
      module: Number(screen.module),
      chapter: Number(screen.chapter),
      screen: Number(screen.screen),
      title: screen.title,
      narration,
    },
    voices,
    files: [],
  };

  console.log(`Course: ${screen.course_id}`);
  console.log(`Screen: M${screen.module} C${screen.chapter} S${screen.screen} — ${screen.title}`);
  console.log(`Narration characters: ${narration.length}`);
  console.log(`Model: ${model}`);

  for (const voice of voices) {
    const filename = `${voice}.wav`;
    const outputPath = path.join(outputRoot, filename);
    try {
      const existing = await fs.stat(outputPath);
      if (existing.size > 44) {
        manifest.files.push({ voice, filename, mimeType: "audio/wav", bytes: existing.size, reused: true });
        console.log(`Skipping ${voice}; existing sample found (${existing.size} bytes)`);
        continue;
      }
    } catch {
      // Generate missing samples.
    }

    process.stdout.write(`Generating ${voice}... `);
    try {
      const result = await synthesize(narration, voice, keys);
      await fs.writeFile(outputPath, result.audio);
      const metadata = {
        voice,
        filename,
        mimeType: result.mimeType,
        bytes: result.audio.length,
        generatedWithKey: result.keyName,
      };
      manifest.files.push(metadata);
      console.log(`done (${result.audio.length} bytes)`);
    } catch (error) {
      manifest.files.push({ voice, filename, status: "pending", error: error.message });
      console.log(`failed (${error.message})`);
    }
  }

  await fs.writeFile(path.join(outputRoot, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
  console.log(`\nSaved audition pack to ${outputRoot}`);
}

main().catch((error) => {
  console.error(`Error: ${error.message}`);
  process.exitCode = 1;
});
