#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import sdk from "microsoft-cognitiveservices-speech-sdk";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../../..");
const sourceRoot = path.join(repoRoot, "generated", "learning-boards-html");
const outputRoot = path.join(repoRoot, "app", "frontend", "public", "audio", "narration");

const VOICE_NAMES = {
  "ava-us-neural-hd": "en-US-AvaNeural",
  "andrew-us-neural-hd": "en-US-AndrewNeural",
  "emma-us-neural-hd": "en-US-EmmaNeural",
};

function parseArgs(argv) {
  const args = { course: null, limit: null, force: false };
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];
    if (value === "--course") args.course = argv[++index];
    else if (value === "--limit") args.limit = Number(argv[++index]);
    else if (value === "--force") args.force = true;
    else if (value === "--help" || value === "-h") args.help = true;
    else throw new Error(`Unknown option: ${value}`);
  }
  return args;
}

function printUsage() {
  console.log(`Usage:
  node scripts/generate-narration-audio.js --course <course-id> [--limit <screens>] [--force]

Examples:
  node scripts/generate-narration-audio.js --course programming-for-everybody-getting-started-with-python --limit 1
  node scripts/generate-narration-audio.js --course programming-for-everybody-getting-started-with-python
  node scripts/generate-narration-audio.js --course programming-for-everybody-getting-started-with-python --force
`);
}

function getVoiceId(courseVoices, courseId) {
  const assignment = courseVoices[courseId];
  if (!assignment?.id || !VOICE_NAMES[assignment.id]) {
    throw new Error(`No supported voice assignment found for ${courseId}`);
  }
  return assignment.id;
}

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function synthesize(text, voiceName, outputPath) {
  return new Promise((resolve, reject) => {
    const speechConfig = sdk.SpeechConfig.fromSubscription(
      process.env.SPEECH_KEY,
      process.env.SPEECH_REGION,
    );
    speechConfig.speechSynthesisVoiceName = voiceName;
    speechConfig.speechSynthesisOutputFormat =
      sdk.SpeechSynthesisOutputFormat.Audio24Khz160KBitRateMonoMp3;

    const audioConfig = sdk.AudioConfig.fromAudioFileOutput(outputPath);
    const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);
    const rate = process.env.SPEECH_RATE || "-15%";
    const ssml = `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US"><voice name="${voiceName}"><prosody rate="${rate}">${escapeXml(text)}</prosody></voice></speak>`;

    synthesizer.speakSsmlAsync(
      ssml,
      (result) => {
        synthesizer.close();
        if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
          resolve();
          return;
        }
        reject(new Error(result.errorDetails || "Azure Speech synthesis failed"));
      },
      (error) => {
        synthesizer.close();
        reject(error);
      },
    );
  });
}

async function loadJson(filePath) {
  return JSON.parse(await fs.readFile(filePath, "utf8"));
}

async function main() {
  dotenv.config({ path: path.join(repoRoot, "app", "backend", ".env") });
  const args = parseArgs(process.argv.slice(2));

  if (args.help || !args.course) {
    printUsage();
    if (!args.course) process.exitCode = 1;
    return;
  }
  if (!process.env.SPEECH_KEY || !process.env.SPEECH_REGION) {
    throw new Error("Set SPEECH_KEY and SPEECH_REGION in app/backend/.env before generating audio");
  }
  if (args.limit !== null && (!Number.isInteger(args.limit) || args.limit < 1)) {
    throw new Error("--limit must be a positive integer");
  }

  const voiceMapping = await loadJson(path.join(repoRoot, "generated", "course-voices.json"));
  const voiceId = getVoiceId(voiceMapping.courseVoices, args.course);
  const voiceName = VOICE_NAMES[voiceId];
  const courseRoot = path.join(sourceRoot, args.course);
  const courseManifest = await loadJson(path.join(courseRoot, "course-manifest.json"));
  const screens = [];

  for (const module of courseManifest.modules) {
    for (const chapter of module.chapters) {
      const manifest = await loadJson(path.join(courseRoot, chapter.manifest));
      for (const screen of manifest.screens || []) {
        const text = screen.narration?.text || screen.narratorSegment;
        if (text?.trim()) {
          screens.push({ module: module.module, chapter: chapter.chapter, screen, text: text.trim() });
        }
      }
    }
  }

  const selectedScreens = args.limit ? screens.slice(0, args.limit) : screens;
  console.log(`Course: ${args.course}`);
  console.log(`Voice: ${voiceName} (${voiceId})`);
  console.log(`Screens selected: ${selectedScreens.length} of ${screens.length}`);

  let generated = 0;
  let skipped = 0;
  for (const item of selectedScreens) {
    const textHash = crypto.createHash("sha256").update(item.text).digest("hex").slice(0, 12);
    const relativePath = path.join(
      args.course,
      `module-${String(item.module).padStart(2, "0")}`,
      `chapter-${String(item.chapter).padStart(2, "0")}`,
      `screen-${String(item.screen.screen).padStart(2, "0")}-${textHash}.mp3`,
    );
    const outputPath = path.join(outputRoot, relativePath);
    await fs.mkdir(path.dirname(outputPath), { recursive: true });

    try {
      if (!args.force) {
        await fs.access(outputPath);
        skipped += 1;
        continue;
      }
    } catch {
      // The file does not exist yet.
    }

    process.stdout.write(`Generating ${relativePath}... `);
    await synthesize(item.text, voiceName, outputPath);
    generated += 1;
    console.log("done");
  }

  console.log(`Completed: ${generated} generated, ${skipped} skipped.`);
}

main().catch((error) => {
  console.error(`Error: ${error.message}`);
  process.exitCode = 1;
});
