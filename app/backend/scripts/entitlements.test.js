import assert from 'node:assert/strict';
import test from 'node:test';
import {
  ACCOUNT_PLANS,
  FREE_MENTOR_MESSAGE_LIMIT,
  FREE_MENTOR_VOICE_LIMIT,
} from '../src/lib/entitlements.js';
import {FREE_ON_COHORTIA_COURSE_IDS} from '../../shared/freeOnCohortiaCourses.js';
import {
  checkCourseChapterAccess,
  getAccountPlan,
  getLessonCoordinates,
  hasPlanFeature,
  isFreeCourse,
  isScenarioPracticalCategory,
  sanitizeLessonForPlan,
} from '../src/lib/entitlements.js';

function createPreviewDatabase(initialPreview = null) {
  const state = {preview: initialPreview};
  return {
    state,
    database: {
      select() {
        return {
          from() {
            return {
              where() {
                return {
                  limit: async () => state.preview ? [state.preview] : [],
                };
              },
            };
          },
        };
      },
      insert() {
        return {
          values(value) {
            return {
              onConflictDoNothing: async () => {
                if (!state.preview) state.preview = value;
              },
            };
          },
        };
      },
    },
  };
}

test('defines known plans, feature sets, and Free mentor quotas', () => {
  assert.deepEqual(ACCOUNT_PLANS, ['free', 'premium', 'career_builder']);
  assert.equal(FREE_MENTOR_MESSAGE_LIMIT, 10);
  assert.equal(FREE_MENTOR_VOICE_LIMIT, 5);
  assert.equal(hasPlanFeature('free', 'practical_assistant'), false);
  assert.equal(hasPlanFeature('premium', 'practical_assistant'), true);
  assert.equal(hasPlanFeature('career_builder', 'guided_final_reviews'), true);
  assert.throws(() => getAccountPlan({plan: 'unknown'}), /Unsupported account plan/);
});

test('shares the homepage Free course list with backend access checks', () => {
  assert.equal(FREE_ON_COHORTIA_COURSE_IDS.length, 25);
  assert.equal(new Set(FREE_ON_COHORTIA_COURSE_IDS).size, 25);
  assert.equal(isFreeCourse(FREE_ON_COHORTIA_COURSE_IDS[0]), true);
  assert.equal(isFreeCourse('not-a-free-course'), false);
});

test('allows Free scenario and design exercises across category naming formats', () => {
  assert.equal(isScenarioPracticalCategory('Scenario & Design Exercise'), true);
  assert.equal(isScenarioPracticalCategory('scenario_design'), true);
  assert.equal(isScenarioPracticalCategory('Scenario Simulator'), true);
  assert.equal(isScenarioPracticalCategory('Cloud Console'), false);
});

test('reserves one non-free chapter preview per Free user', async () => {
  const {database, state} = createPreviewDatabase();
  const firstChapter = {
    user: {plan: 'free'},
    userId: 'user-1',
    courseId: 'paid-course',
    module: 1,
    chapter: 2,
    reservePreview: true,
  };
  assert.deepEqual(
    await checkCourseChapterAccess(database, firstChapter),
    {allowed: true, reason: null},
  );
  assert.deepEqual(state.preview, {
    userId: 'user-1',
    courseId: 'paid-course',
    module: 1,
    chapter: 2,
    createdAt: state.preview.createdAt,
  });
  assert.deepEqual(
    await checkCourseChapterAccess(database, {...firstChapter, reservePreview: false}),
    {allowed: true, reason: null},
  );
  assert.deepEqual(
    await checkCourseChapterAccess(database, {...firstChapter, chapter: 3, reservePreview: true}),
    {allowed: false, reason: 'preview_already_used'},
  );
});

test('concurrent Free preview reservations settle on one chapter', async () => {
  const {database} = createPreviewDatabase();
  const results = await Promise.all([1, 2].map((chapter) => checkCourseChapterAccess(database, {
    user: {plan: 'free'},
    userId: 'user-2',
    courseId: 'paid-course',
    module: 1,
    chapter,
    reservePreview: true,
  })));
  assert.equal(results.filter((result) => result.allowed).length, 1);
  assert.equal(results.filter((result) => result.reason === 'preview_already_used').length, 1);
});

test('sanitizes lessons outside the Free course list and reserved preview', () => {
  const lesson = {
    id: 'paid-course-m1-c2-lesson',
    content: 'lesson content',
    metadata: '{"answer":"secret"}',
  };
  assert.deepEqual(getLessonCoordinates(lesson), {courseId: 'paid-course', module: 1, chapter: 2});
  assert.equal(sanitizeLessonForPlan(lesson, {plan: 'free'}, null).content, null);
  assert.equal(
    sanitizeLessonForPlan(lesson, {plan: 'free'}, {courseId: 'paid-course', module: 1, chapter: 2}).content,
    'lesson content',
  );
  const freeCourseLesson = {...lesson, id: `${FREE_ON_COHORTIA_COURSE_IDS[0]}-m1-c1-lesson`};
  assert.equal(sanitizeLessonForPlan(freeCourseLesson, {plan: 'free'}, null).content, 'lesson content');
  assert.equal(sanitizeLessonForPlan(lesson, {plan: 'premium'}, null).content, 'lesson content');
});
