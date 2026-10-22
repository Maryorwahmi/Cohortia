import { learningBoardsApi } from './learningBoardsApi';
import { mentorApi, projectApi, type BackendUser } from './api';

type PrefetchCourse = { courseId: string; course: string };

function scheduleIdle(work: () => void) {
  if (typeof window.requestIdleCallback === 'function') {
    return window.requestIdleCallback(work, {timeout: 1200});
  }
  return window.setTimeout(work, 0);
}

export function prefetchDashboardAfterAuth(user: BackendUser | null) {
  if (!user) return;

  scheduleIdle(() => {
    void Promise.allSettled([
      mentorApi.getContext(),
      projectApi.getSubmissions(),
    ]);
  });
}

export function prefetchDashboardCourseContent(courseNames: PrefetchCourse[]) {
  if (!courseNames.length) return;

  scheduleIdle(() => {
    void learningBoardsApi.getCourses().then(async (courses) => {
      const roadmapNames = new Map<string, string>(courseNames.map((course) => [course.courseId, course.course]));
      const courseIds = new Set(courseNames.map((course) => course.courseId));
      const matchingCourses = courses.filter((candidate: PrefetchCourse) =>
        courseIds.has(candidate.courseId)
        || candidate.course.trim().toLowerCase() === roadmapNames.get(candidate.courseId)?.trim().toLowerCase(),
      );

      await Promise.allSettled(matchingCourses.map((course) => Promise.allSettled([
        learningBoardsApi.getCourseChapters(course.courseId),
        learningBoardsApi.getCourseProgress(course.courseId),
      ])));
    }).catch(() => {});
  });
}
