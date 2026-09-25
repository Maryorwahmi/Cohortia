import fs from 'node:fs/promises';
import path from 'node:path';

export function centralRecordPath(generatedRoot) {
  return path.join(generatedRoot, 'record.json');
}

function emptyRecord() {
  return { version: 2, updatedAt: null, courses: {} };
}

async function readJson(filePath) {
  try {
    const value = JSON.parse(await fs.readFile(filePath, 'utf8'));
    return value && typeof value === 'object' ? value : null;
  } catch (error) {
    if (error.code !== 'ENOENT') {
      console.warn(`Unable to read generation record ${filePath}: ${error.message}`);
    }
    return null;
  }
}

async function migrateLegacyRecords(generatedRoot, record) {
  let migrated = false;
  let entries = [];
  try {
    entries = await fs.readdir(generatedRoot, { withFileTypes: true });
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
    return migrated;
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const courseId = entry.name;
    const legacyPath = path.join(generatedRoot, courseId, 'record.json');
    const legacy = await readJson(legacyPath);
    if (!legacy || !legacy.completedChapters) continue;
    if (!record.courses[courseId]) {
      record.courses[courseId] = {
        courseId,
        courseTitle: legacy.courseTitle || courseId,
        syllabusPath: legacy.syllabusPath,
        updatedAt: legacy.updatedAt || null,
        completedChapters: legacy.completedChapters,
      };
      migrated = true;
    }
  }
  return migrated;
}

export async function readGenerationRecord(generatedRoot) {
  const filePath = centralRecordPath(generatedRoot);
  const existing = await readJson(filePath);
  const record = existing?.courses && typeof existing.courses === 'object'
    ? { ...emptyRecord(), ...existing, courses: { ...existing.courses } }
    : emptyRecord();

  if (await migrateLegacyRecords(generatedRoot, record)) {
    await writeGenerationRecord(generatedRoot, record);
  }
  return record;
}

export async function writeGenerationRecord(generatedRoot, record) {
  const target = centralRecordPath(generatedRoot);
  const temporary = `${target}.${process.pid}.tmp`;
  const nextRecord = {
    version: 2,
    updatedAt: new Date().toISOString(),
    courses: record.courses || {},
  };
  await fs.mkdir(generatedRoot, { recursive: true });
  await fs.writeFile(temporary, `${JSON.stringify(nextRecord, null, 2)}\n`, 'utf8');
  await fs.rename(temporary, target);
}

export async function readCourseGenerationRecord(generatedRoot, courseId) {
  const record = await readGenerationRecord(generatedRoot);
  return record.courses[courseId] || {};
}

export async function writeCourseGenerationRecord(generatedRoot, course, syllabusPath, patch) {
  const record = await readGenerationRecord(generatedRoot);
  const previous = record.courses[course.id] || {};
  record.courses[course.id] = {
    ...previous,
    ...patch,
    courseId: course.id,
    courseTitle: course.title,
    syllabusPath: syllabusPath ? path.relative(path.resolve(generatedRoot, '..', '..'), syllabusPath).replace(/\\/g, '/') : previous.syllabusPath,
    updatedAt: new Date().toISOString(),
    completedChapters: patch.completedChapters || previous.completedChapters || {},
  };
  await writeGenerationRecord(generatedRoot, record);
}
