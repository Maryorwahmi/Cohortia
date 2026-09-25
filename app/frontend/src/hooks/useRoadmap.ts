import { useState, useEffect, useCallback, useMemo } from "react";
import { useAuth } from "../context/AuthContext";
import { roadmapApi, lessonApi, Roadmap } from "../services/api";
import {
  ParsedRoadmap,
  AiLesson,
  LessonProgress,
  parseRoadmap,
  roadmapToDashboardMilestones,
  DashboardMilestone,
} from "../lib/roadmap";


export interface UseRoadmapReturn {
  roadmap: Roadmap | null;
  parsed: ParsedRoadmap | null;
  lessons: AiLesson[];
  progress: LessonProgress[];
  milestones: DashboardMilestone[];
  loading: boolean;
  error: string | null;
  completeLesson: (lessonId: string) => Promise<void>;
  refreshProgress: () => Promise<void>;
  loadRoadmap: () => Promise<void>;
}

export function useRoadmap(): UseRoadmapReturn {
  const { user } = useAuth();
  const [roadmap, setRoadmap] = useState<Roadmap | null>(null);
  const [parsed, setParsed] = useState<ParsedRoadmap | null>(null);
  const [lessons, setLessons] = useState<AiLesson[]>([]);
  const [progress, setProgress] = useState<LessonProgress[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadLessonsAndProgress = useCallback(async (roadmapId: string, parsedRoadmap: ParsedRoadmap | null) => {
    try {
      const [lessonsRes, progressRes] = await Promise.all([
        lessonApi.getByRoadmap(roadmapId),
        lessonApi.getProgress(roadmapId),
      ]);

      const fetchedLessons = Array.isArray(lessonsRes.data?.lessons)
        ? (lessonsRes.data.lessons as unknown as AiLesson[])
        : [];
      const fetchedProgress = Array.isArray(progressRes.data?.progress)
        ? (progressRes.data.progress as unknown as LessonProgress[])
        : [];

      setLessons(fetchedLessons);
      setProgress(fetchedProgress);

      // Seed AI lessons if none exist yet
      if (fetchedLessons.length === 0 && parsedRoadmap?.modules?.[0]?.chapters?.length) {
        await seedFirstModuleLessons(roadmapId, parsedRoadmap.modules[0].chapters);
        const refreshed = await lessonApi.getByRoadmap(roadmapId);
        if (Array.isArray(refreshed.data?.lessons)) {
          setLessons(refreshed.data.lessons as unknown as AiLesson[]);
        }
      }
    } catch (err) {
      console.error("Failed to load lessons/progress", err);
    }
  }, []);

  const seedFirstModuleLessons = async (roadmapId: string, chapters: Array<{ title: string }>) => {
    try {
      await Promise.all(
        chapters.map((_, chapterIndex) =>
          lessonApi.generate({ roadmapId, moduleIndex: 0, chapterIndex })
        )
      );
    } catch (err) {
      console.error("Failed to seed first module lessons", err);
    }
  };

  const loadRoadmap = useCallback(async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      let res = await roadmapApi.getMine();
      let currentRoadmap = res.data?.roadmap || null;

      if (!currentRoadmap) {
        const generateRes = await roadmapApi.generate({
          desiredField: user.desiredField || user.role || undefined,
          experienceLevel: user.experienceLevel || undefined,
          weeklyHours: user.weeklyHours || undefined,
          roadmapSelection: user.roadmapSelection ? JSON.stringify(user.roadmapSelection) : undefined,
        });
        currentRoadmap = generateRes.data?.roadmap || null;
      }

      if (!currentRoadmap) {
        throw new Error("Unable to load or generate a roadmap.");
      }

      setRoadmap(currentRoadmap);
      const parsedRoadmap = parseRoadmap(currentRoadmap);
      setParsed(parsedRoadmap);

      await loadLessonsAndProgress(currentRoadmap.id, parsedRoadmap);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to load roadmap.";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [user, loadLessonsAndProgress]);

  useEffect(() => {
    loadRoadmap();
  }, [loadRoadmap]);

  const refreshProgress = useCallback(async () => {
    if (!roadmap) return;
    try {
      const res = await lessonApi.getProgress(roadmap.id);
      if (Array.isArray(res.data?.progress)) {
        setProgress(res.data.progress as unknown as LessonProgress[]);
      }
    } catch (err) {
      console.error("Failed to refresh progress", err);
    }
  }, [roadmap]);

  const completeLesson = useCallback(async (lessonId: string) => {
    try {
      await lessonApi.complete(lessonId);
      await refreshProgress();
    } catch (err) {
      console.error("Failed to complete lesson", err);
    }
  }, [refreshProgress]);

  const milestones = useMemo(() => {
    if (!parsed) return [];
    return roadmapToDashboardMilestones(parsed, progress, lessons);
  }, [parsed, progress, lessons]);

  return {
    roadmap,
    parsed,
    lessons,
    progress,
    milestones,
    loading,
    error,
    completeLesson,
    refreshProgress,
    loadRoadmap,
  };
}
