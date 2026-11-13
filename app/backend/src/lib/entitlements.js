import { eq } from 'drizzle-orm';
import { FREE_ON_COHORTIA_COURSE_IDS } from '../../../shared/freeOnCohortiaCourses.js';
import { userCourseChapterPreviews } from '../db/schema.js';

export const ACCOUNT_PLANS = Object.freeze(['free', 'premium', 'career_builder']);

export const PLAN_FEATURES = Object.freeze({
  free: new Set([
    'basic_roadmap',
    'community',
    'capstone',
    'experience_track',
    'mentor',
    'scenario_practicals',
  ]),
  premium: new Set([
    'basic_roadmap',
    'community',
    'capstone',
    'experience_track',
    'mentor',
    'scenario_practicals',
    'practical_assistant',
    'portfolio_development',
    'specialization_roadmap',
    'career_goal',
    'advanced_options',
    'interview_preparation',
    'real_world_projects',
  ]),
  career_builder: new Set([
    'basic_roadmap',
    'community',
    'capstone',
    'experience_track',
    'mentor',
    'scenario_practicals',
    'practical_assistant',
    'portfolio_development',
    'specialization_roadmap',
    'career_goal',
    'advanced_options',
    'interview_preparation',
    'real_world_projects',
    'guided_final_reviews',
    'project_submission_feedback',
    'job_readiness_path',
  ]),
});

export const FREE_MENTOR_MESSAGE_LIMIT = 10;
export const FREE_MENTOR_VOICE_LIMIT = 5;

export function getAccountPlan(user) {
  const plan = user?.plan || 'free';
  if (!ACCOUNT_PLANS.includes(plan)) {
    throw new Error(`Unsupported account plan "${String(plan)}".`);
  }
  return plan;
}

export function hasPlanFeature(plan, feature) {
  const features = PLAN_FEATURES[plan];
  if (!features) throw new Error(`Unsupported account plan "${String(plan)}".`);
  return features.has(feature);
}

export function isFreeCourse(courseId) {
  return FREE_ON_COHORTIA_COURSE_IDS.includes(courseId);
}

export function isScenarioPracticalCategory(category) {
  const normalized = String(category || '')
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z]/g, '');
  return ['scenario', 'scenariodesign', 'scenariodesignexercise', 'scenarioanddesignexercise', 'scenariosimulator'].includes(normalized);
}

function isSamePreview(preview, courseId, module, chapter) {
  return preview.courseId === courseId
    && preview.module === module
    && preview.chapter === chapter;
}

export async function checkCourseChapterAccess(database, {
  user,
  userId,
  courseId,
  module,
  chapter,
  reservePreview = false,
}) {
  if (user?.adminRole || getAccountPlan(user) !== 'free' || isFreeCourse(courseId)) {
    return {allowed: true, reason: null};
  }
  if (!userId || !Number.isInteger(module) || module < 1 || !Number.isInteger(chapter) || chapter < 1) {
    throw new TypeError('A user and valid chapter coordinates are required for course access checks.');
  }

  const readPreview = () => database.select()
    .from(userCourseChapterPreviews)
    .where(eq(userCourseChapterPreviews.userId, userId))
    .limit(1);

  let [preview] = await readPreview();
  if (preview) {
    return isSamePreview(preview, courseId, module, chapter)
      ? {allowed: true, reason: null}
      : {allowed: false, reason: 'preview_already_used'};
  }
  if (!reservePreview) return {allowed: false, reason: 'preview_not_claimed'};

  await database.insert(userCourseChapterPreviews)
    .values({
      userId,
      courseId,
      module,
      chapter,
      createdAt: new Date().toISOString(),
    })
    .onConflictDoNothing();

  [preview] = await readPreview();
  if (!preview) throw new Error('The free chapter preview could not be reserved.');
  return isSamePreview(preview, courseId, module, chapter)
    ? {allowed: true, reason: null}
    : {allowed: false, reason: 'preview_already_used'};
}

export async function getCourseChapterPreview(database, userId) {
  const [preview] = await database.select()
    .from(userCourseChapterPreviews)
    .where(eq(userCourseChapterPreviews.userId, userId))
    .limit(1);
  return preview || null;
}

export function getLessonCoordinates(lesson) {
  const match = typeof lesson?.id === 'string'
    ? lesson.id.match(/^(.*)-m(\d+)-c(\d+)-lesson$/)
    : null;
  const module = Number(match?.[2] ?? lesson?.moduleIndex);
  const chapter = Number(match?.[3] ?? lesson?.order);
  const courseId = typeof lesson?.trackId === 'string' && lesson.trackId
    ? lesson.trackId
    : match?.[1];
  if (!courseId || !Number.isInteger(module) || module < 1 || !Number.isInteger(chapter) || chapter < 1) return null;
  return {courseId, module, chapter};
}

export function sanitizeLessonForPlan(lesson, user, preview) {
  if (user?.adminRole || getAccountPlan(user) !== 'free') return lesson;
  const coordinates = getLessonCoordinates(lesson);
  const courseId = typeof lesson?.trackId === 'string' && lesson.trackId
    ? lesson.trackId
    : coordinates?.courseId;
  if (courseId && isFreeCourse(courseId)) return lesson;
  if (!coordinates) return {...lesson, content: null, metadata: null};
  if (preview && isSamePreview(preview, coordinates.courseId, coordinates.module, coordinates.chapter)) return lesson;
  return {...lesson, content: null, metadata: null};
}

export function planUpgradeResponse(c, {
  code = 'PLAN_UPGRADE_REQUIRED',
  feature,
  message = 'Upgrade your plan to continue.',
  status = 403,
}) {
  c.header('Cache-Control', 'private, no-store');
  return c.json({
    success: false,
    error: message,
    code,
    feature: feature || null,
    upgradeRequired: true,
    planUrl: `/experience?upgrade=${encodeURIComponent(feature || 'plan')}#plans`,
  }, status);
}
