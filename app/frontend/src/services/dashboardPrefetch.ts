import { learningBoardsApi } from './learningBoardsApi';
import { mentorApi, projectApi, roadmapApi, trackApi, userApi, type BackendUser } from './api';

type PrefetchCourse = { courseId: string; course: string };

function scheduleIdle(work: () => void) {
  if (typeof window.requestIdleCallback === 'function') {
    return window.requestIdleCallback(work, {timeout: 1200});
  }
  return window.setTimeout(work, 0);
}

async function loadPrimaryDashboardData(user: BackendUser) {
  const [activeRoadmapRes, enrolledRes] = await Promise.all([
    roadmapApi.getActive().catch((error) => {
      if (user.roadmapSelection) throw error;
      return null;
    }),
    trackApi.getEnrolled(),
  ]);

  const activeRoadmap = activeRoadmapRes?.data?.selection && activeRoadmapRes.data.courses?.length
    ? activeRoadmapRes.data
    : null;

  if (activeRoadmap) {
    return {
      courseIds: activeRoadmap.courses.map((course) => course.id),
      courseNames: activeRoadmap.courses.map((course) => ({courseId: course.id, course: course.title})),
    };
  }

  const enrollments = Array.isArray(enrolledRes.data?.enrollments)
    ? enrolledRes.data.enrollments as {trackId: string; status: string}[]
    : [];
  const activeEnrollment = enrollments.find((enrollment) => enrollment.status === 'active') || enrollments[0];
  return {
    courseIds: activeEnrollment ? [activeEnrollment.trackId] : [],
    courseNames: [],
  };
}

export function prefetchDashboardAfterAuth(user: BackendUser | null) {
  if (!user) return;

  void loadPrimaryDashboardData(user).then(({courseIds, courseNames}) => {
    if (courseIds.length) {
      void userApi.getProgress({courseIds}).catch(() => {});
    }

    scheduleIdle(() => {
      void Promise.allSettled([
        learningBoardsApi.getCourses().then(async (courses) => {
          const roadmapNames = new Map(courseNames.map((course) => [course.courseId, course.course]));
          const matchingCourses = courses.filter((candidate: PrefetchCourse) =>
            courseIds.includes(candidate.courseId)
            || candidate.course.trim().toLowerCase() === roadmapNames.get(candidate.courseId)?.trim().toLowerCase(),
          );

          await Promise.allSettled(matchingCourses.map((course) => Promise.allSettled([
            learningBoardsApi.getCourseChapters(course.courseId),
            learningBoardsApi.getCourseProgress(course.courseId),
          ])));
        }),
        mentorApi.getContext(),
        projectApi.getSubmissions(),
      ]);
    });
  }).catch(() => {});
}
