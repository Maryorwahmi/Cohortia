import { FREE_ON_COHORTIA_COURSE_IDS as freeCourseIds } from '../../../shared/freeOnCohortiaCourses.js';

export const FREE_ON_COHORTIA_COURSE_IDS = new Set(freeCourseIds);

export function isFreeOnCohortia(courseId: string): boolean {
  return FREE_ON_COHORTIA_COURSE_IDS.has(courseId);
}
