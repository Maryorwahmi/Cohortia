import { DashboardMilestone, DashboardLesson } from "../data/dashboardData";
export type { DashboardMilestone, DashboardLesson } from "../data/dashboardData";

export interface RoadmapChapter {
  title: string;
  summary: string;
  duration: string;
  section: string;
}

export interface RoadmapModule {
  title: string;
  description: string;
  difficulty: string;
  keySkills: string[];
  chapters: RoadmapChapter[];
  deliverable?: string;
}

export interface ParsedRoadmap {
  title: string;
  description: string;
  careerTrack: string;
  timeline: string;
  focusSkills: string[];
  modules: RoadmapModule[];
}

export interface AiLesson {
  id: string;
  roadmapId: string;
  moduleIndex: number;
  chapterIndex: number;
  title: string;
  summary?: string;
  content?: string;
  contentType?: string;
  estimatedDuration?: string;
  difficulty?: string;
  status?: string;
}

export interface LessonProgress {
  lessonId?: string;
  moduleIndex?: number;
  chapterIndex?: number;
  status?: string;
  score?: number | null;
  studySeconds?: number;
  courseId?: string;
  module?: number;
  chapter?: number;
  completedAt?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  explicitComplete?: boolean;
  watched?: boolean;
  assessmentPassed?: boolean;
}

export interface ParsedLessonContent {
  slides?: Array<{ number?: number; title?: string; points?: string[] }>;
  transcript?: Array<{ time?: string; speaker?: string; text?: string }>;
  keyTakeaways?: string[];
  practiceTask?: string;
  knowledgeCheck?: Array<{ question?: string; options?: string[]; answer?: string }>;
}

export function parseRoadmap(
  roadmap: { generatedData?: string; title?: string; description?: string; careerTrack?: string } | null
): ParsedRoadmap | null {
  if (!roadmap?.generatedData) return null;

  try {
    const parsed = JSON.parse(roadmap.generatedData) as Partial<ParsedRoadmap>;
    if (!Array.isArray(parsed.modules)) return null;

    return {
      title: parsed.title || roadmap.title || "Personalized Roadmap",
      description: parsed.description || roadmap.description || "",
      careerTrack: parsed.careerTrack || roadmap.careerTrack || "",
      timeline: parsed.timeline || "",
      focusSkills: Array.isArray(parsed.focusSkills) ? parsed.focusSkills : [],
      modules: parsed.modules.map((mod) => ({
        title: mod.title || "Untitled Module",
        description: mod.description || "",
        difficulty: mod.difficulty || "Beginner",
        keySkills: Array.isArray(mod.keySkills) ? mod.keySkills : [],
        chapters: Array.isArray(mod.chapters)
          ? mod.chapters.map((ch) => ({
              title: ch.title || "Untitled Chapter",
              summary: ch.summary || "",
              duration: ch.duration || "15 min",
              section: ch.section || "",
            }))
          : [],
        deliverable: mod.deliverable,
      })),
    };
  } catch {
    return null;
  }
}

export function parseAiLessonContent(content?: string | null): ParsedLessonContent | null {
  if (!content) return null;
  try {
    const parsed = JSON.parse(content) as ParsedLessonContent;
    return parsed;
  } catch {
    return null;
  }
}

export function inferLessonType(
  title: string,
  backendType?: string
): DashboardLesson["type"] {
  const t = title.toLowerCase();
  const bt = (backendType || "").toLowerCase();

  if (bt === "quiz" || bt === "exam" || t.includes("checkpoint") || t.includes("assessment") || t.includes("exam")) return "checkpoint";
  if (bt === "project" || t.includes("project") || t.includes("apply") || t.includes("deliverable")) return "project";
  if (bt === "practice" || t.includes("practice") || t.includes("exercise") || t.includes("drill") || t.includes("hands-on")) return "practice";
  if (bt === "lesson" || t.startsWith("why") || t.includes("intro") || t.includes("overview")) return "video";
  return "concept";
}

function isCompleted(
  lessonId: string,
  moduleIndex: number,
  chapterIndex: number,
  progress: LessonProgress[]
): boolean {
  return progress.some((p) => {
    if (p.status !== "completed") return false;
    if (p.lessonId) return p.lessonId === lessonId;
    return p.moduleIndex === moduleIndex && p.chapterIndex === chapterIndex;
  });
}

export function roadmapToDashboardMilestones(
  parsed: ParsedRoadmap,
  progress: LessonProgress[],
  aiLessons: AiLesson[]
): DashboardMilestone[] {
  return parsed.modules.map((mod, moduleIndex) => {
    const lessons: DashboardLesson[] = mod.chapters.map((ch, chapterIndex) => {
      const aiLesson = aiLessons.find(
        (l) => l.moduleIndex === moduleIndex && l.chapterIndex === chapterIndex
      );
      const id = aiLesson?.id || `rm-${moduleIndex}-${chapterIndex}`;
      const title = aiLesson?.title || ch.title;
      const duration = aiLesson?.estimatedDuration || ch.duration || "15 min";
      const type = inferLessonType(title);
      return { id, title, duration, type };
    });

    const projectTitle =
      mod.deliverable ||
      `${mod.title.replace(/[^a-zA-Z0-9\s]/g, "").split(" ").slice(0, 3).join(" ")} Project`;

    return {
      id: `rm-mod-${moduleIndex}`,
      number: moduleIndex + 1,
      title: mod.title,
      description: mod.description,
      lessons,
      projectTitle,
      projectDescription: mod.deliverable
        ? `Deliverable: ${mod.deliverable}`
        : `Apply your learning from ${mod.title} to a real-world scenario.`,
    };
  });
}

export function findFirstIncompleteLesson(
  milestones: DashboardMilestone[],
  completedSteps: string[]
): DashboardLesson | null {
  for (const milestone of milestones) {
    for (const lesson of milestone.lessons) {
      if (!completedSteps.includes(lesson.id)) {
        return lesson;
      }
    }
  }
  return milestones[0]?.lessons[0] || null;
}

export interface BackendLesson {
  id: string;
  trackId: string;
  title: string;
  description?: string;
  content?: string;
  type?: string;
  duration?: string;
  order?: number;
  moduleIndex?: number;
  moduleTitle?: string;
  moduleGoal?: string | null;
  metadata?: string;
}

export function trackLessonsToDashboardMilestones(
  lessons: BackendLesson[],
  progress: LessonProgress[]
): DashboardMilestone[] {
  const grouped = new Map<number, BackendLesson[]>();
  for (const lesson of lessons) {
    const idx = lesson.moduleIndex ?? 0;
    if (!grouped.has(idx)) grouped.set(idx, []);
    grouped.get(idx)!.push(lesson);
  }

  const sortedModules = Array.from(grouped.keys()).sort((a, b) => a - b);

  return sortedModules.map((moduleIndex, arrayIndex) => {
    const moduleLessons = grouped.get(moduleIndex)!.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    const moduleTitle = moduleLessons[0]?.moduleTitle || `Module ${moduleIndex}`;
    const moduleGoal = moduleLessons[0]?.moduleGoal || "";
    const projectLesson = moduleLessons.find((l) => l.type === "project");
    const projectTitle = projectLesson?.title ||
      `${moduleTitle.replace(/[^a-zA-Z0-9\s]/g, "").split(" ").slice(0, 3).join(" ")} Project`;

    const dashboardLessons: DashboardLesson[] = moduleLessons
      .filter((l) => l.type !== "project")
      .map((l) => ({
        id: l.id,
        title: l.title,
        duration: l.duration || "15 min",
        type: inferLessonType(l.title, l.type),
      }));

    return {
      id: `track-mod-${moduleIndex}`,
      number: arrayIndex + 1,
      title: moduleTitle,
      description: moduleLessons[0]?.description || "",
      goals: moduleGoal ? [moduleGoal] : undefined,
      lessons: dashboardLessons,
      projectTitle,
      projectDescription: projectLesson?.description || `Apply your learning from ${moduleTitle} to a real-world scenario.`,
    };
  });
}
