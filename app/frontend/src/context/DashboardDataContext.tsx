import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { useAuth } from "./AuthContext";
import { learningApi, roadmapApi, trackApi, userApi, type Lesson, type Track } from "../services/api";
import { DashboardMilestone } from "../data/dashboardData";
import { trackLessonsToDashboardMilestones, LessonProgress } from "../lib/roadmap";
import { prefetchDashboardCourseContent } from "../services/dashboardPrefetch";

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
  const loadSequence = useRef(0);
  const dataUserId = useRef<string | null>(null);

  const clearDashboardData = useCallback(() => {
    setTrack(null);
    setLessons([]);
    setProgress([]);
    setPracticalAttempts([]);
    setPracticalTaskProgress([]);
    setIsRoadmap(false);
  }, []);

  const load = useCallback(async () => {
    const sequence = ++loadSequence.current;
    if (!user) {
      dataUserId.current = null;
      clearDashboardData();
      setError(null);
      setLoading(false);
      return;
    }

    if (dataUserId.current !== user.id) {
      clearDashboardData();
      dataUserId.current = user.id;
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

      let nextTrack: Track | null;
      let nextLessons: Lesson[];
      let nextProgress: LessonProgress[];
      let nextPracticalAttempts: Array<Record<string, unknown>>;
      let nextPracticalTaskProgress: Array<Record<string, unknown>>;
      let nextIsRoadmap: boolean;
      let courseNames: Array<{courseId: string; course: string}>;

      if (activeRoadmap) {
        const progressRes = await userApi.getProgress({courseIds: activeRoadmap.courses.map((course) => course.id)});
        nextProgress = Array.isArray(progressRes.data?.progress) ? progressRes.data.progress as LessonProgress[] : [];
        nextPracticalAttempts = Array.isArray(progressRes.data?.practicalAttempts) ? progressRes.data.practicalAttempts : [];
        nextPracticalTaskProgress = Array.isArray(progressRes.data?.practicalTaskProgress) ? progressRes.data.practicalTaskProgress : [];
        const coursesWithoutLessons = activeRoadmap.courses.filter((course) => course.lessons.length === 0);
        if (coursesWithoutLessons.length) {
          throw new Error(`No learning content is available for: ${coursesWithoutLessons.map((course) => course.title).join(", ")}.`);
        }
        const firstCourse = activeRoadmap.courses[0];
        const roadmapLessons = activeRoadmap.courses.flatMap((course, courseIndex) =>
          course.lessons.map((lesson) => ({
            ...lesson,
            trackId: course.id,
            courseTitle: course.title,
            moduleIndex: courseIndex * 100 + (lesson.moduleIndex || 0),
            moduleTitle: `${course.title} · ${lesson.moduleTitle || "Curriculum"}`,
          })),
        );
        if (!roadmapLessons.length) {
          throw new Error("No learning content is available for your roadmap yet.");
        }
        nextIsRoadmap = true;
        courseNames = activeRoadmap.courses.map((course) => ({courseId: course.id, course: course.title}));
        nextTrack = {
          id: firstCourse.id,
          title: `${String(activeRoadmap.selection?.selectedCareer || "Career")} Roadmap`,
          description: "Your ordered multi-course learning roadmap.",
          category: "Roadmap",
          difficulty: "Progressive",
          level: firstCourse.level,
        };
        nextLessons = roadmapLessons;
      } else {
        const enrollments = Array.isArray(enrolledRes.data?.enrollments)
          ? enrolledRes.data.enrollments as { trackId: string; status: string }[]
          : [];
        const activeEnrollment = enrollments.find((enrollment) => enrollment.status === "active") || enrollments[0];

        if (!activeEnrollment) {
          throw new Error("You are not enrolled in any course yet. Please choose a course first.");
        }

        const [lessonsRes, courseProgressRes] = await Promise.all([
          trackApi.getLessons(activeEnrollment.trackId),
          userApi.getProgress({courseIds: [activeEnrollment.trackId]}),
        ]);
        if (!lessonsRes.success || !lessonsRes.data?.track) {
          throw new Error(lessonsRes.error || "Failed to load your enrolled course.");
        }
        nextLessons = Array.isArray(lessonsRes.data.lessons) ? lessonsRes.data.lessons : [];
        if (!nextLessons.length) {
          throw new Error("No learning content is available for your enrolled course yet.");
        }
        nextTrack = lessonsRes.data.track;
        courseNames = [{courseId: nextTrack.id, course: nextTrack.title}];
        nextProgress = Array.isArray(courseProgressRes.data?.progress)
          ? courseProgressRes.data.progress as LessonProgress[]
          : [];
        nextPracticalAttempts = Array.isArray(courseProgressRes.data?.practicalAttempts) ? courseProgressRes.data.practicalAttempts : [];
        nextPracticalTaskProgress = Array.isArray(courseProgressRes.data?.practicalTaskProgress) ? courseProgressRes.data.practicalTaskProgress : [];
        nextIsRoadmap = false;
      }

      if (sequence !== loadSequence.current) return;
      setTrack(nextTrack);
      setLessons(nextLessons);
      setProgress(nextProgress);
      setPracticalAttempts(nextPracticalAttempts);
      setPracticalTaskProgress(nextPracticalTaskProgress);
      setIsRoadmap(nextIsRoadmap);
      prefetchDashboardCourseContent(courseNames);
    } catch (requestError) {
      if (sequence === loadSequence.current) {
        clearDashboardData();
        setError(requestError instanceof Error ? requestError.message : "Failed to load course curriculum.");
      }
    } finally {
      if (sequence === loadSequence.current) setLoading(false);
    }
  }, [clearDashboardData, user]);

  useEffect(() => {
    void load();
  }, [load]);

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
      loading: loading || Boolean(user && dataUserId.current !== user.id),
      error,
      completeLesson,
      refresh: load,
    };
  }, [completeLesson, error, isRoadmap, lessons, load, loading, practicalAttempts, practicalTaskProgress, progress, track, user]);

  return <DashboardDataContext.Provider value={value}>{children}</DashboardDataContext.Provider>;
}

export function useDashboardData(): DashboardDataValue {
  const value = useContext(DashboardDataContext);
  if (!value) throw new Error("useDashboardData must be used inside DashboardDataProvider");
  return value;
}
