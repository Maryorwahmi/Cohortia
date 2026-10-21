import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { useAuth } from "./AuthContext";
import { learningApi, mentorApi, projectApi, roadmapApi, trackApi, userApi, type Lesson, type Track } from "../services/api";
import { learningBoardsApi } from "../services/learningBoardsApi";
import { DashboardMilestone } from "../data/dashboardData";
import { trackLessonsToDashboardMilestones, LessonProgress } from "../lib/roadmap";

export interface DashboardDataValue {
  track: Track | null;
  lessons: Lesson[];
  milestones: DashboardMilestone[];
  progress: LessonProgress[];
  completedSteps: string[];
  practicalAttempts: Array<Record<string, unknown>>;
  practicalTaskProgress: Array<Record<string, unknown>>;
  isRoadmap: boolean;
  loading: boolean;
  error: string | null;
  completeLesson: (lessonId: string) => Promise<void>;
  refresh: () => Promise<void>;
}

const DashboardDataContext = createContext<DashboardDataValue | null>(null);

export function DashboardDataProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [track, setTrack] = useState<Track | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [progress, setProgress] = useState<LessonProgress[]>([]);
  const [practicalAttempts, setPracticalAttempts] = useState<Array<Record<string, unknown>>>([]);
  const [practicalTaskProgress, setPracticalTaskProgress] = useState<Array<Record<string, unknown>>>([]);
  const [isRoadmap, setIsRoadmap] = useState(false);
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
      const [activeRoadmapRes, enrolledRes] = await Promise.all([
        roadmapApi.getActive().catch((requestError) => {
          if (user.roadmapSelection) throw requestError;
          return null;
        }),
        trackApi.getEnrolled(),
      ]);
      const activeRoadmap = activeRoadmapRes?.data?.selection && activeRoadmapRes.data.courses?.length
        ? activeRoadmapRes.data
        : null;

      if (user.roadmapSelection && !activeRoadmap) {
        throw new Error("Your saved roadmap could not be loaded. Please try again or rebuild your roadmap.");
      }

      if (activeRoadmap) {
        const progressRes = await userApi.getProgress({courseIds: activeRoadmap.courses.map((course) => course.id)});
        const progressData = Array.isArray(progressRes.data?.progress) ? progressRes.data.progress as LessonProgress[] : [];
        setProgress(progressData);
        setPracticalAttempts(Array.isArray(progressRes.data?.practicalAttempts) ? progressRes.data.practicalAttempts : []);
        setPracticalTaskProgress(Array.isArray(progressRes.data?.practicalTaskProgress) ? progressRes.data.practicalTaskProgress : []);
        const coursesWithoutLessons = activeRoadmap.courses.filter((course) => course.lessons.length === 0);
        if (coursesWithoutLessons.length) {
          throw new Error(`No learning content is available for: ${coursesWithoutLessons.map((course) => course.title).join(", ")}.`);
        }
        const firstCourse = activeRoadmap.courses[0];
        const roadmapLessons = activeRoadmap.courses.flatMap((course, courseIndex) =>
          course.lessons.map((lesson) => ({
            ...lesson,
            trackId: course.id,
            moduleIndex: courseIndex * 100 + (lesson.moduleIndex || 0),
            moduleTitle: `${course.title} · ${lesson.moduleTitle || "Curriculum"}`,
          })),
        );
        setIsRoadmap(true);
        setTrack({
          id: firstCourse.id,
          title: `${String(activeRoadmap.selection?.selectedCareer || "Career")} Roadmap`,
          description: "Your ordered multi-course learning roadmap.",
          category: "Roadmap",
          difficulty: "Progressive",
          level: firstCourse.level,
        });
        setLessons(roadmapLessons);
        return;
      }

      setIsRoadmap(false);
      const enrollments = Array.isArray(enrolledRes.data?.enrollments)
        ? enrolledRes.data.enrollments as { trackId: string; status: string }[]
        : [];
      const activeEnrollment = enrollments.find((enrollment) => enrollment.status === "active") || enrollments[0];

      if (!activeEnrollment) {
        setError("You are not enrolled in any course yet. Please choose a course first.");
        return;
      }

      const [lessonsRes, courseProgressRes] = await Promise.all([
        trackApi.getLessons(activeEnrollment.trackId),
        userApi.getProgress({courseIds: [activeEnrollment.trackId]}),
      ]);
      if (!lessonsRes.success || !lessonsRes.data) {
        throw new Error(lessonsRes.error || "Failed to load course lessons.");
      }
      setTrack(lessonsRes.data.track || null);
      setLessons(Array.isArray(lessonsRes.data.lessons) ? lessonsRes.data.lessons : []);
      const courseProgressData = Array.isArray(courseProgressRes.data?.progress)
        ? courseProgressRes.data.progress as LessonProgress[]
        : [];
      setProgress(courseProgressData);
      setPracticalAttempts(Array.isArray(courseProgressRes.data?.practicalAttempts) ? courseProgressRes.data.practicalAttempts : []);
      setPracticalTaskProgress(Array.isArray(courseProgressRes.data?.practicalTaskProgress) ? courseProgressRes.data.practicalTaskProgress : []);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Failed to load course curriculum.");
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    void load();
  }, [load]);

  useEffect(() => {
    if (!user || loading || !track?.id || isRoadmap) return;

    let cancelled = false;
    const prefetch = () => {
      if (cancelled) return;

      void Promise.allSettled([
        learningBoardsApi.getCourses().then(async (courses) => {
          const course = courses.find((candidate) =>
            candidate.courseId === track.id || candidate.course.trim().toLowerCase() === track.title.trim().toLowerCase(),
          );
          if (!course) return;
          await Promise.allSettled([
            learningBoardsApi.getCourseChapters(course.courseId),
            learningBoardsApi.getCourseProgress(course.courseId),
          ]);
        }),
        mentorApi.getContext(),
        projectApi.getSubmissions(),
      ]);
    };

    const idleWindow = typeof window.requestIdleCallback === "function"
      ? window.requestIdleCallback(prefetch, { timeout: 1500 })
      : window.setTimeout(prefetch, 0);

    return () => {
      cancelled = true;
      if (typeof idleWindow === "number") window.clearTimeout(idleWindow);
    };
  }, [isRoadmap, loading, track, user]);

  const completeLesson = useCallback(async (lessonId: string) => {
    await learningApi.completeLesson(lessonId);
    await load();
  }, [load]);

  const value = useMemo<DashboardDataValue>(() => {
    const milestones = trackLessonsToDashboardMilestones(lessons, progress);
    const trackLessonIds = new Set(lessons.map((lesson) => lesson.id));
    const completedSteps = progress
      .filter((item) => item.status === "completed" && Boolean(item.lessonId) && trackLessonIds.has(item.lessonId!))
      .map((item) => item.lessonId!)
      .filter(Boolean);

    return {
      track,
      lessons,
      milestones,
      progress,
      completedSteps,
      practicalAttempts,
      practicalTaskProgress,
      isRoadmap,
      loading,
      error,
      completeLesson,
      refresh: load,
    };
  }, [completeLesson, error, isRoadmap, lessons, load, loading, practicalAttempts, practicalTaskProgress, progress, track]);

  return <DashboardDataContext.Provider value={value}>{children}</DashboardDataContext.Provider>;
}

export function useDashboardData(): DashboardDataValue {
  const value = useContext(DashboardDataContext);
  if (!value) throw new Error("useDashboardData must be used inside DashboardDataProvider");
  return value;
}
