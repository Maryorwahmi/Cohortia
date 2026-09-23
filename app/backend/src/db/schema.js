import { sqliteTable, text, integer, real, primaryKey, index, uniqueIndex } from 'drizzle-orm/sqlite-core';

// Users table
export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  phone: text('phone'),
  country: text('country'),
  currentStatus: text('current_status'),
  currentRole: text('current_role'),
  role: text('role').notNull().default('career-starter'), // career-starter, level-up, experience-track
  onboardingGoal: text('onboarding_goal'),
  experienceLevel: text('experience_level'),
  weeklyHours: text('weekly_hours'),
  learningPace: text('learning_pace'),
  careerGoal: text('career_goal'),
  desiredField: text('desired_field'),
  skillsKnown: text('skills_known'), // JSON array as string
  availability: text('availability'),
  portfolioLink: text('portfolio_link'),
  educationLevel: text('education_level'),
  ageRange: text('age_range'),
  learningStyle: text('learning_style'),
  jobReadyTimeline: text('job_ready_timeline'),
  motivation: text('motivation'),
  biggestChallenge: text('biggest_challenge'),
  previousField: text('previous_field'),
  wantsRealWorldExperience: integer('wants_real_world_experience', { mode: 'boolean' }).default(false),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Careers table
export const careers = sqliteTable('careers', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  difficulty: text('difficulty').notNull(), // Beginner, Intermediate, Advanced
  category: text('category').notNull(),
  image: text('image'),
  extensions: text('extensions'), // JSON array as string
  skills: text('skills'), // JSON array as string
  aiLearning: text('ai_learning'), // JSON array as string
  roles: text('roles'), // JSON array as string
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Tracks table
export const tracks = sqliteTable('tracks', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  overview: text('overview'),
  syllabus: text('syllabus'),
  category: text('category').notNull(),
  difficulty: text('difficulty').notNull(),
  duration: text('duration'),
  image: text('image'),
  skills: text('skills'), // JSON array as string
  isCodeBased: integer('is_code_based', { mode: 'boolean' }).default(false),
  language: text('language'),
  provider: text('provider'),
  level: text('level'),
  courseType: text('course_type'),
  certification: text('certification'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// External and research-backed course catalog
export const catalogCourses = sqliteTable('catalog_courses', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  provider: text('provider'),
  platform: text('platform'),
  level: text('level'),
  type: text('type'),
  duration: text('duration'),
  cost: text('cost'),
  url: text('url'),
  image: text('image'),
  skills: text('skills'), // JSON array as string
  certification: text('certification'),
  description: text('description'),
  category: text('category').notNull(),
  subcategory: text('subcategory').notNull(),
  source: text('source'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

export const catalogCourseSubcategories = sqliteTable('catalog_course_subcategories', {
  courseId: text('course_id').notNull(),
  subcategory: text('subcategory').notNull(),
}, (table) => ({
  pk: primaryKey({columns: [table.courseId, table.subcategory]}),
}));

export const catalogCourseCareers = sqliteTable('catalog_course_careers', {
  courseId: text('course_id').notNull(),
  careerId: text('career_id').notNull(),
}, (table) => ({
  pk: primaryKey({columns: [table.courseId, table.careerId]}),
}));

// Enrollments table
export const enrollments = sqliteTable('enrollments', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull(),
  trackId: text('track_id').notNull(),
  status: text('status').notNull().default('active'), // active, completed, paused
  enrolledAt: text('enrolled_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Progress table
export const progress = sqliteTable('progress', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull(),
  lessonId: text('lesson_id').notNull(),
  status: text('status').notNull().default('in_progress'), // not_started, in_progress, completed
  score: integer('score'),
  completedAt: text('completed_at'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Lessons table
export const lessons = sqliteTable('lessons', {
  id: text('id').primaryKey(),
  trackId: text('track_id').notNull(),
  moduleIndex: integer('module_index').notNull().default(0),
  moduleTitle: text('module_title'),
  moduleGoal: text('module_goal'),
  title: text('title').notNull(),
  description: text('description'),
  content: text('content'),
  type: text('type').notNull().default('lesson'), // lesson, practice, quiz, project, exam
  duration: text('duration'),
  order: integer('order').notNull().default(0),
  metadata: text('metadata'), // JSON: quiz questions, section parsing, project criteria, etc.
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
}, (table) => ({
  trackOrderIdx: index('lessons_track_order_idx').on(table.trackId, table.order),
}));

// Community Posts table
export const communityPosts = sqliteTable('community_posts', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  category: text('category').notNull(),
  likes: integer('likes').notNull().default(0),
  replies: integer('replies').notNull().default(0),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Community Comments table
export const communityComments = sqliteTable('community_comments', {
  id: text('id').primaryKey(),
  postId: text('post_id').notNull(),
  userId: text('user_id').notNull(),
  content: text('content').notNull(),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Internship Briefs table
export const internshipBriefs = sqliteTable('internship_briefs', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  deadline: text('deadline'),
  deliverable: text('deliverable'),
  skills: text('skills'), // JSON array as string
  difficulty: text('difficulty').notNull().default('Beginner'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Internship Submissions table
export const internshipSubmissions = sqliteTable('internship_submissions', {
  id: text('id').primaryKey(),
  briefId: text('brief_id').notNull(),
  userId: text('user_id').notNull(),
  content: text('content').notNull(),
  notes: text('notes'),
  status: text('status').notNull().default('submitted'), // submitted, reviewed, approved, needs_revision
  feedback: text('feedback'),
  score: integer('score'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// User Roadmaps table — AI-generated personalised learning paths
export const userRoadmaps = sqliteTable('user_roadmaps', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  careerTrack: text('career_track'),
  generatedData: text('generated_data'), // JSON: modules, chapters, timeline, resources
  status: text('status').notNull().default('active'), // active, completed, archived, paused
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// AI-Generated Lessons table — per module/chapter of a roadmap
export const aiLessons = sqliteTable('ai_lessons', {
  id: text('id').primaryKey(),
  roadmapId: text('roadmap_id').notNull(),
  moduleIndex: integer('module_index').notNull(), // which module in the roadmap
  chapterIndex: integer('chapter_index').notNull(), // which chapter within the module
  title: text('title').notNull(),
  summary: text('summary'), // brief 2-3 sentence overview
  content: text('content'), // rich HTML/markdown lesson content
  contentType: text('content_type').notNull().default('text'), // text, image, video, slides, document, quiz, interactive
  resources: text('resources'), // JSON array of links/files
  estimatedDuration: text('estimated_duration'), // e.g. "15 min"
  difficulty: text('difficulty').default('Beginner'), // Beginner, Intermediate, Advanced
  status: text('status').notNull().default('ready'), // ready, generating, error
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// User Lesson Progress — tracks which AI lessons a user has completed
export const userLessonProgress = sqliteTable('user_lesson_progress', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull(),
  lessonId: text('lesson_id').notNull(),
  roadmapId: text('roadmap_id').notNull(),
  moduleIndex: integer('module_index').notNull(),
  status: text('status').notNull().default('not_started'), // not_started, in_progress, completed, skipped
  score: integer('score'), // for quiz/interactive lessons
  notes: text('notes'), // user notes
  startedAt: text('started_at'),
  completedAt: text('completed_at'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Project Templates table — AI-generated projects per roadmap module
export const projectTemplates = sqliteTable('project_templates', {
  id: text('id').primaryKey(),
  roadmapId: text('roadmap_id').notNull(),
  moduleIndex: integer('module_index').notNull(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  deliverable: text('deliverable'), // what the user must submit
  criteria: text('criteria'), // JSON array of success criteria
  aiHelpPrompt: text('ai_help_prompt'), // context the AI needs to help with this project
  difficulty: text('difficulty').default('Beginner'),
  status: text('status').notNull().default('ready'), // ready, locked, optional
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// User Project Submissions — user work with AI feedback
export const userProjectSubmissions = sqliteTable('user_project_submissions', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull(),
  projectId: text('project_id').notNull(),
  content: text('content').notNull(), // user submission
  aiFeedback: text('ai_feedback'), // AI-generated feedback
  aiScore: integer('ai_score'), // AI score (0-100)
  status: text('status').notNull().default('submitted'), // submitted, ai_reviewed, needs_revision, approved
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Community Post Reactions table
export const communityReactions = sqliteTable('community_reactions', {
  id: text('id').primaryKey(),
  postId: text('post_id').notNull(),
  userId: text('user_id').notNull(),
  type: text('type').notNull().default('like'), // like, celebrate, support, insight
  createdAt: text('created_at').notNull(),
});

// Community Events table
export const communityEvents = sqliteTable('community_events', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  host: text('host').notNull(),
  date: text('date').notNull(),
  time: text('time').notNull(),
  location: text('location').notNull(),
  roomLink: text('room_link'),
  category: text('category').notNull(),
  maxAttendees: integer('max_attendees'),
  rsvpCount: integer('rsvp_count').notNull().default(0),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Event RSVPs table
export const eventRsvps = sqliteTable('community_event_rsvps', {
  id: text('id').primaryKey(),
  eventId: text('event_id').notNull(),
  userId: text('user_id').notNull(),
  status: text('status').notNull().default('going'), // going, maybe, cancelled
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Study Rooms table
export const studyRooms = sqliteTable('study_rooms', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  category: text('category').notNull(),
  topic: text('topic').notNull(),
  hostUserId: text('host_user_id'),
  activeParticipants: integer('active_participants').notNull().default(0),
  maxParticipants: integer('max_participants').notNull().default(20),
  isActive: integer('is_active', { mode: 'boolean' }).notNull().default(true),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Study Room Participants table
export const studyRoomParticipants = sqliteTable('study_room_participants', {
  id: text('id').primaryKey(),
  roomId: text('room_id').notNull(),
  userId: text('user_id').notNull(),
  joinedAt: text('joined_at').notNull(),
});

// User Activity Log — tracks engagement for progress analytics
export const userActivityLog = sqliteTable('user_activity_log', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull(),
  activityType: text('activity_type').notNull(), // lesson_completed, board_chapter_completed, practical_completed, mentor_chat, project_submitted
  entityId: text('entity_id'), // lessonId, projectId, postId, etc.
  metadata: text('metadata'), // JSON: {duration, score, chapter, module}
  createdAt: text('created_at').notNull(),
});

// Mentor Memory — stores persistent mentor context about the user
export const mentorContext = sqliteTable('mentor_context', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().unique(),
  
  // Diagnosis & goals
  assessedLevel: text('assessed_level'), // beginner, intermediate, advanced
  careerGoal: text('career_goal'),
  shortTermGoal: text('short_term_goal'),
  longTermGoal: text('long_term_goal'),
  learningStyle: text('learning_style'), // visual, reading, hands-on, mixed
  
  // Progress tracking
  strengths: text('strengths'), // JSON array
  weaknesses: text('weaknesses'), // JSON array
  pastMistakes: text('past_mistakes'), // JSON array of {topic, mistake, learned}
  completedTasks: text('completed_tasks'), // JSON array of {task, date, reflection}
  
  // Engagement
  lastCheckIn: text('last_check_in'), // ISO date of last weekly check-in
  checkInHistory: text('check_in_history'), // JSON array of {date, accomplishments, struggles, nextWeek}
  conversationSummary: text('conversation_summary'), // rolling summary of recent conversations
  
  // Mentor mode preferences
  preferredMode: text('preferred_mode').default('mentor'), // mentor, coach, tutor, interview, project
  preferredOutputFormat: text('preferred_output_format').default('text'), // text, slides, document, voice, video
  modeHistory: text('mode_history'), // JSON array of {mode, date, reason}
  
  // Next actions
  pendingAction: text('pending_action'), // what the mentor asked them to do last
  pendingActionSetAt: text('pending_action_set_at'),
  
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Newsletter Subscriptions
export const newsletterSubscriptions = sqliteTable('newsletter_subscriptions', {
  id: text('id').primaryKey(),
  email: text('email').notNull().unique(),
  name: text('name'),
  subscribedAt: text('subscribed_at').notNull(),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Notifications
export const notifications = sqliteTable('notifications', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull(),
  type: text('type').notNull(), // system, achievement, mention, event, mentor
  title: text('title').notNull(),
  message: text('message').notNull(),
  isRead: integer('is_read', { mode: 'boolean' }).notNull().default(false),
  link: text('link'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Content CMS Sections
export const contentSections = sqliteTable('content_sections', {
  id: text('id').primaryKey(),
  section: text('section').notNull().unique(),
  title: text('title'),
  data: text('data'), // JSON string
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Bookings / Appointments
export const bookings = sqliteTable('bookings', {
  id: text('id').primaryKey(),
  userId: text('user_id'),
  name: text('name').notNull(),
  email: text('email').notNull(),
  track: text('track').notNull(),
  date: text('date').notNull(),
  time: text('time').notNull(),
  notes: text('notes'),
  status: text('status').notNull().default('pending'), // pending, confirmed, cancelled
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Mentors (used for platform stats)
export const mentors = sqliteTable('mentors', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  role: text('role').notNull(),
  bio: text('bio'),
  image: text('image'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Learning Board Chapters — courses with modules and chapters
export const learningBoardCourses = sqliteTable('learning_board_courses', {
  id: text('id').primaryKey(),
  courseId: text('course_id').notNull().unique(),
  course: text('course').notNull(),
  courseLevel: text('course_level'),
  description: text('description'),
  totalModules: integer('total_modules').notNull().default(0),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Learning Board Chapters — per module/chapter
export const learningBoardChapters = sqliteTable('learning_board_chapters', {
  id: text('id').primaryKey(),
  courseId: text('course_id').notNull(),
  module: integer('module').notNull(),
  chapter: integer('chapter').notNull(),
  moduleTitle: text('module_title'),
  chapterTitle: text('chapter_title').notNull(),
  presentationMode: text('presentation_mode'),
  screensCount: integer('screens_count').notNull().default(0),
  manifestData: text('manifest_data'), // JSON: full manifest from docs
  assessmentData: text('assessment_data'), // JSON: chapter assessment questions and answers
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
}, (table) => ({
  courseChapterIdx: index('learning_board_chapters_course_chapter_idx').on(table.courseId, table.module, table.chapter),
}));

// Learning Board Screens — individual screens within chapters
export const learningBoardScreens = sqliteTable('learning_board_screens', {
  id: text('id').primaryKey(),
  courseId: text('course_id').notNull(),
  chapterId: text('chapter_id').notNull(),
  module: integer('module').notNull(),
  chapter: integer('chapter').notNull(),
  screen: integer('screen').notNull(),
  title: text('title').notNull(),
  type: text('type').notNull(), // hero, learning_objectives, lesson, key_concepts, assessment, etc.
  template: text('template'),
  eyebrow: text('eyebrow'),
  durationSeconds: integer('duration_seconds'),
  narratorSegment: text('narrator_segment'),
  narratorText: text('narrator_text'),
  narratorDuration: integer('narrator_duration'),
  keyIdeaTitle: text('key_idea_title'),
  keyIdeaText: text('key_idea_text'),
  contentHtml: text('content_html'), // Full HTML content
  contentCss: text('content_css'),
  contentJSON: text('content_json'), // Metadata and structured content
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Per-user chapter state for the database-backed learning board.
export const learningBoardProgress = sqliteTable('learning_board_progress', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull(),
  courseId: text('course_id').notNull(),
  lessonId: text('lesson_id').notNull(),
  module: integer('module').notNull(),
  chapter: integer('chapter').notNull(),
  explicitComplete: integer('explicit_complete', { mode: 'boolean' }).notNull().default(false),
  watched: integer('watched', { mode: 'boolean' }).notNull().default(false),
  practicalsComplete: integer('practicals_complete', { mode: 'boolean' }).notNull().default(false),
  assessmentPassed: integer('assessment_passed', { mode: 'boolean' }).notNull().default(false),
  score: integer('score'),
  studySeconds: integer('study_seconds').notNull().default(0),
  notes: text('notes'),
  completedAt: text('completed_at'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Chapter practical definitions and learner workspace state.
export const learningBoardPracticals = sqliteTable('learning_board_practicals', {
  id: text('id').primaryKey(),
  courseId: text('course_id').notNull(),
  module: integer('module').notNull(),
  chapter: integer('chapter').notNull(),
  mode: text('mode').notNull().default('code_lab'),
  language: text('language'),
  runtime: text('runtime'),
  title: text('title').notNull(),
  instructions: text('instructions'),
  completionRule: text('completion_rule').notNull().default('all_tests_pass'),
  metadata: text('metadata'),
  category: text('category'),
  sourcePath: text('source_path'),
  sourceContent: text('source_content'),
  sourceKey: text('source_key'),
  sourceHash: text('source_hash'),
  labType: text('lab_type'),
  classifierVersion: text('classifier_version'),
  schemaVersion: integer('schema_version'),
  generatorVersion: text('generator_version'),
  generationStatus: text('generation_status').notNull().default('raw'),
  generationError: text('generation_error'),
  generatedAt: text('generated_at'),
  publishedVersion: integer('published_version'),
  practicalJson: text('practical_json'),
  environmentJson: text('environment_json'),
  safetyJson: text('safety_json'),
  evidenceJson: text('evidence_json'),
  cleanupJson: text('cleanup_json'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
}, (table) => ({
  sourceKeyUnique: uniqueIndex('learning_board_practicals_source_key_unique').on(table.sourceKey),
  courseModuleIdx: index('learning_board_practicals_course_module_idx').on(table.courseId, table.module),
}));

export const learningBoardPracticalVersions = sqliteTable('learning_board_practical_versions', {
  id: text('id').primaryKey(),
  practicalId: text('practical_id').notNull(),
  version: integer('version').notNull(),
  status: text('status').notNull().default('generated'),
  sourceHash: text('source_hash'),
  schemaVersion: integer('schema_version'),
  generatorVersion: text('generator_version'),
  classifierVersion: text('classifier_version'),
  labType: text('lab_type'),
  practicalJson: text('practical_json'),
  environmentJson: text('environment_json'),
  safetyJson: text('safety_json'),
  evidenceJson: text('evidence_json'),
  cleanupJson: text('cleanup_json'),
  generationError: text('generation_error'),
  generatedAt: text('generated_at'),
  publishedAt: text('published_at'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
}, (table) => ({
  practicalVersionUnique: uniqueIndex('learning_board_practical_versions_practical_version_unique').on(table.practicalId, table.version),
}));

export const learningBoardPracticalFiles = sqliteTable('learning_board_practical_files', {
  id: text('id').primaryKey(),
  practicalId: text('practical_id').notNull(),
  path: text('path').notNull(),
  content: text('content').notNull().default(''),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

export const learningBoardPracticalTasks = sqliteTable('learning_board_practical_tasks', {
  id: text('id').primaryKey(),
  practicalId: text('practical_id').notNull(),
  taskKey: text('task_key').notNull(),
  instruction: text('instruction').notNull(),
  requiredConcepts: text('required_concepts'),
  hints: text('hints'),
  taskOrder: integer('task_order').notNull().default(0),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

export const learningBoardPracticalTests = sqliteTable('learning_board_practical_tests', {
  id: text('id').primaryKey(),
  taskId: text('task_id').notNull(),
  testType: text('test_type').notNull(),
  expected: text('expected'),
  testData: text('test_data'),
  testOrder: integer('test_order').notNull().default(0),
  createdAt: text('created_at').notNull(),
});

export const studentPracticalAttempts = sqliteTable('student_practical_attempts', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull(),
  practicalId: text('practical_id').notNull(),
  files: text('files').notNull().default('{}'),
  status: text('status').notNull().default('started'),
  output: text('output'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

export const studentPracticalProgress = sqliteTable('student_practical_progress', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull(),
  practicalId: text('practical_id').notNull(),
  taskId: text('task_id').notNull(),
  status: text('status').notNull().default('not_started'),
  attempts: integer('attempts').notNull().default(0),
  completedAt: text('completed_at'),
  updatedAt: text('updated_at').notNull(),
});

// CS Assessments — from markdown files in CS Assessment folder
export const csAssessments = sqliteTable('cs_assessments', {
  id: text('id').primaryKey(),
  courseId: text('course_id').notNull(), // e.g., lpic-3-linux-enterprise-professional
  courseTitle: text('course_title').notNull(),
  level: text('level').notNull(), // beginner, intermediate, advanced
  category: text('category').notNull(), // e.g., operating-systems-system-administration
  module: integer('module').notNull(), // Module number (1, 2, 3...)
  chapter: integer('chapter').notNull(), // Chapter number within module (1, 2, 3...)
  moduleTitle: text('module_title'),
  chapterTitle: text('chapter_title').notNull(),
  chapterDescription: text('chapter_description'),
  totalQuestions: integer('total_questions').notNull().default(0),
  questionsWithOptions: integer('questions_with_options').notNull().default(0),
  questionsWithCode: integer('questions_with_code').notNull().default(0),
  caseStudyQuestions: integer('case_study_questions').notNull().default(0),
  assessmentData: text('assessment_data').notNull(), // JSON: array of parsed questions
  sourceFile: text('source_file'), // Path to source markdown file
  importedAt: text('imported_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// CS Assessment Questions — individual questions from assessments
export const csAssessmentQuestions = sqliteTable('cs_assessment_questions', {
  id: text('id').primaryKey(),
  assessmentId: text('assessment_id').notNull(), // Link to csAssessments
  courseId: text('course_id').notNull(),
  module: integer('module').notNull(),
  chapter: integer('chapter').notNull(),
  questionNumber: integer('question_number').notNull(), // 1, 2, 3... within the chapter
  type: text('type').notNull(), // multiple-choice, code-output, case-study
  question: text('question').notNull(),
  referenceAnswer: text('reference_answer'),
  explanation: text('explanation'),
  
  // Multiple choice fields
  options: text('options'), // JSON array of strings for multiple choice
  correctOption: integer('correct_option'), // 0-3 for a-d
  
  // Code output fields
  language: text('language'), // javascript, python, etc.
  code: text('code'),
  expectedOutput: text('expected_output'),
  
  // Metadata
  difficulty: text('difficulty').default('Intermediate'), // Beginner, Intermediate, Advanced
  keywords: text('keywords'), // JSON array of tags
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Durable background jobs for the administrator learning-board generation pipeline.
export const automationJobs = sqliteTable('automation_jobs', {
  id: text('id').primaryKey(),
  requestedByUserId: text('requested_by_user_id').notNull(),
  category: text('category').notNull(),
  subcategory: text('subcategory'),
  courseId: text('course_id').notNull(),
  module: integer('module'),
  overwrite: integer('overwrite', { mode: 'boolean' }).notNull().default(false),
  status: text('status').notNull().default('queued'), // starting, queued, running, cancel_requested, cancelled, completed, failed
  logs: text('logs').notNull().default(''),
  result: text('result'),
  error: text('error'),
  attempts: integer('attempts').notNull().default(0),
  startedAt: text('started_at'),
  completedAt: text('completed_at'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
}, (table) => ({
  statusCreatedIdx: index('automation_jobs_status_created_idx').on(table.status, table.createdAt),
  requesterCreatedIdx: index('automation_jobs_requester_created_idx').on(table.requestedByUserId, table.createdAt),
}));
