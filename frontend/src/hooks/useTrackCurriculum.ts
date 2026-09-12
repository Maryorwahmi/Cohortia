import { useState, useEffect, useCallback, useMemo } from "react";
import { useAuth } from "../context/AuthContext";
import { trackApi, learningApi, userApi, Lesson, Track } from "../services/api";
import { DashboardMilestone } from "../data/dashboardData";
import { trackLessonsToDashboardMilestones, LessonProgress } from "../lib/roadmap";

export interface UseTrackCurriculumReturn {
  track: Track | null;
  lessons: Lesson[];
  milestones: DashboardMilestone[];
  progress: LessonProgress[];
  completedSteps: string[];
  practicalAttempts: Array<Record<string, unknown>>;
  practicalTaskProgress: Array<Record<string, unknown>>;
  loading: boolean;
  error: string | null;
  completeLesson: (lessonId: string) => Promise<void>;
  refresh: () => Promise<void>;
}

export function useTrackCurriculum(): UseTrackCurriculumReturn {
  const { user } = useAuth();
  const [track, setTrack] = useState<Track | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [progress, setProgress] = useState<LessonProgress[]>([]);
  const [practicalAttempts, setPracticalAttempts] = useState<Array<Record<string, unknown>>>([]);
  const [practicalTaskProgress, setPracticalTaskProgress] = useState<Array<Record<string, unknown>>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const enrolledRes = await trackApi.getEnrolled();
      const enrollments = Array.isArray(enrolledRes.data?.enrollments)
        ? (enrolledRes.data?.enrollments as { trackId: string; status: string }[])
        : [];

      const activeEnrollment = enrollments.find((e) => e.status === "active") || enrollments[0];

      if (!activeEnrollment) {
        setError("You are not enrolled in any course yet. Please choose a course first.");
        setLoading(false);
        return;
      }

      const [lessonsRes, progressRes] = await Promise.all([
        trackApi.getLessons(activeEnrollment.trackId),
        userApi.getProgress(),
      ]);

      if (!lessonsRes.success || !lessonsRes.data) {
        throw new Error(lessonsRes.error || "Failed to load course lessons.");
      }

      setTrack(lessonsRes.data.track || null);
      setLessons(Array.isArray(lessonsRes.data.lessons) ? lessonsRes.data.lessons : []);

      const progressData = Array.isArray(progressRes.data?.progress)
        ? (progressRes.data?.progress as LessonProgress[])
        : [];
      setProgress(progressData);
      setPracticalAttempts(Array.isArray(progressRes.data?.practicalAttempts) ? progressRes.data.practicalAttempts : []);
      setPracticalTaskProgress(Array.isArray(progressRes.data?.practicalTaskProgress) ? progressRes.data.practicalTaskProgress : []);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to load course curriculum.";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    load();
  }, [load]);

  const completeLesson = useCallback(async (lessonId: string) => {
    try {
      await learningApi.completeLesson(lessonId);
      await load();
    } catch (err) {
      console.error("Failed to complete lesson", err);
    }
  }, [load]);

  const refresh = useCallback(async () => {
    await load();
  }, [load]);

  const milestones = useMemo(
    () => trackLessonsToDashboardMilestones(lessons, progress),
    [lessons, progress]
  );

  const completedSteps = useMemo(
    () => {
      const trackLessonIds = new Set(lessons.map((lesson) => lesson.id));
      return progress
        .filter((p) => p.status === "completed" && Boolean(p.lessonId) && trackLessonIds.has(p.lessonId!))
        .map((p) => p.lessonId!)
        .filter(Boolean);
    },
    [lessons, progress]
  );

  return {
    track,
    lessons,
    milestones,
    progress,
    completedSteps,
    practicalAttempts,
    practicalTaskProgress,
    loading,
    error,
    completeLesson,
    refresh,
  };
}
