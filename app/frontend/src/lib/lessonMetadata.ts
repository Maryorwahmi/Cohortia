import type { Lesson, Track } from "../services/api";

export interface AssessmentOption {
  label: string;
  text: string;
}

export interface AssessmentQuestion {
  question: string;
  options?: AssessmentOption[];
  answer?: string;
  explanation?: string;
}

export interface LessonMetadata {
  learningObjectives?: string | null;
  detailedContent?: string | null;
  keyConcepts?: string | null;
  handsOnPreview?: string | null;
  handsOnActivity?: string | null;
  assessmentQuestions?: AssessmentQuestion[];
  isCodeBased?: boolean;
  language?: string | null;
}

export interface ParsedLessonSections {
  learningObjectives: string[];
  detailedContent: string;
  keyConcepts: string[];
  handsOnActivity: string;
  assessmentQuestions: AssessmentQuestion[];
  isCodeBased: boolean;
  language: string | null;
}

export function parseLessonMetadata(raw: string | null | undefined): LessonMetadata {
  if (!raw) return {};
  try {
    return JSON.parse(raw) as LessonMetadata;
  } catch {
    return {};
  }
}

function stripMarkdownInline(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .trim();
}

export function extractBulletPoints(text?: string | null): string[] {
  if (!text) return [];
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => /^[-*•]|^\d+\./.test(line))
    .map((line) => stripMarkdownInline(line.replace(/^[-*•]\s*|^\d+\.\s*/, "")))
    .filter(Boolean);
}

export function extractProseParagraphs(text?: string | null): string[] {
  if (!text) return [];
  return text
    .split("\n\n")
    .map((p) => stripMarkdownInline(p.trim()))
    .filter((p) => p.length > 20 && !p.startsWith("```"));
}

export function getAssessmentQuestions(md: LessonMetadata): AssessmentQuestion[] {
  return Array.isArray(md.assessmentQuestions) ? md.assessmentQuestions : [];
}

export function getLessonSections(lesson: Lesson): ParsedLessonSections {
  const md = parseLessonMetadata(lesson.metadata);
  return {
    learningObjectives: extractBulletPoints(md.learningObjectives),
    detailedContent: md.detailedContent || lesson.content || "",
    keyConcepts: extractBulletPoints(md.keyConcepts),
    handsOnActivity: md.handsOnActivity || md.handsOnPreview || "",
    assessmentQuestions: getAssessmentQuestions(md),
    isCodeBased: md.isCodeBased ?? false,
    language: md.language || null,
  };
}

export function parseTrackSkills(track?: Track | null): string[] {
  if (!track?.skills) return [];
  try {
    const parsed = JSON.parse(track.skills);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return track.skills.split(",").map((s) => s.trim()).filter(Boolean);
  }
}

export function isCodeBasedTrack(track?: Track | null): boolean {
  return track?.isCodeBased === true;
}
