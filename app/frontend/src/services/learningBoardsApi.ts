/**
 * Learning Boards API Service
 * Handles fetching learning board courses, chapters, and screens from the backend
 */

import { API_BASE_URL as API_ROOT } from '../config/api';
const API_BASE = `${API_ROOT}/learning-boards`;

function authHeaders(): HeadersInit {
  const token = localStorage.getItem('cohortia_token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export interface LearningBoardCourse {
  id: string;
  courseId: string;
  course: string;
  courseLevel?: string;
  totalModules: number;
  createdAt: string;
  updatedAt: string;
}

export interface LearningBoardChapter {
  id: string;
  courseId: string;
  module: number;
  chapter: number;
  moduleTitle?: string;
  chapterTitle: string;
  presentationMode?: string;
  screensCount: number;
  manifestData?: string;
  practicalId?: string;
  practicalCategory?: string | null;
  practicalStatus?: string | null;
  source?: 'chapter' | 'practical' | string;
  createdAt: string;
  updatedAt: string;
}

export interface LearningBoardScreen {
  screen: number;
  title: string;
  type: string;
  template?: string;
  eyebrow?: string;
  durationSeconds?: number;
  narratorSegment?: string;
  narration?: {
    text: string;
    durationSeconds?: number;
  };
  keyIdea?: {
    title: string;
    text: string;
  };
  content?: {
    html?: string;
    css?: string;
    json?: any;
  };
}

export type LearningBoardAssessmentQuestion = {
  id: number;
  type: 'multiple-choice';
  question: string;
  options: string[];
  correctOption: number;
  explanation: string;
} | {
  id: number;
  type: 'case-study';
  question: string;
  explanation: string;
} | {
  id: number;
  type: 'code-output';
  question: string;
  language: string;
  code: string;
  expectedOutput: string;
  explanation: string;
} | {
  id: number;
  type: 'code-challenge';
  question: string;
  language?: string | null;
  code?: string | null;
  explanation: string;
};

export interface LearningBoardAssessment {
  passingScore: number;
  questions: LearningBoardAssessmentQuestion[];
}

export interface LearningBoardChapterData {
  courseId: string;
  course: string;
  module: number;
  moduleTitle?: string;
  chapter: number;
  chapterTitle: string;
  learningObjectives?: string[];
  keyConcepts?: string[];
  handsOn?: {
    title: string;
    instructions: string;
    starterCode?: string | null;
    expectedOutput?: string;
    checklist: string[];
  } | null;
  assessment?: LearningBoardAssessment | null;
  practical?: LearningBoardPractical | null;
  screens: LearningBoardScreen[];
}

export interface LearningBoardProgress {
  id?: string;
  userId?: string;
  courseId: string;
  lessonId: string;
  module: number;
  chapter: number;
  explicitComplete: boolean;
  watched: boolean;
  practicalsComplete: boolean;
  assessmentPassed: boolean;
  score?: number | null;
  studySeconds: number;
  notes?: string | null;
  completedAt?: string | null;
}

export interface AssessmentAnswerEvaluation {
  isCorrect: boolean;
  feedback: string;
  guidance: string;
  keyPointsMissed: string[];
  evaluationSource?: 'assessment-key' | string;
  confidence?: 'high' | 'review-needed' | string;
}

export interface LearningBoardPracticalFile {
  id?: string;
  path: string;
  content: string;
}

export interface LearningBoardPracticalTest {
  id?: string;
  type: string;
  expected?: string | null;
  explanation?: string | null;
  testData?: Record<string, unknown>;
}

export interface CodeWalkthroughSegment {
  stepNumber: number;
  speakerText: string;
  codeLine: string;
  file?: string;
  explanation?: string;
  teacherPrompt?: string;
  realWorldExample?: string;
  checkQuestion?: string;
  pauseForLearner?: boolean;
  durationSeconds?: number;
}

export interface PracticalTeachingPlaylistStep {
  id: string;
  title: string;
  category: string;
  description: string;
  durationSeconds: number;
  learningGoal: string;
  narratorScript: string;
  workedExample: string;
  scenario: string;
  learnerPrompt: string;
  commonMistake: string;
  recap: string;
  codeSteps: number[];
}

export interface PracticalTeacherContext {
  persona?: string;
  opening: string;
  realWorldContext: string;
  learningPromise: string;
  interactionRules?: string[];
}

export interface PracticalTeaching {
  learningGoal: string;
  teacherTalk: string;
  realWorldExample: string;
  guidedSteps: string[];
  questions: string[];
  expectedObservations: string[];
  feedback?: {
    success?: string;
    misconception?: string;
    retry?: string;
  };
  recap: string;
  waitForLearner: boolean;
  estimatedMinutes?: number;
}

export interface LearningBoardPracticalTask {
  id: string;
  databaseId?: string;
  title?: string | null;
  instruction: string;
  narratorGuide?: string | null;
  teaching?: PracticalTeaching | null;
  requiredConcepts: string[];
  hints: string[];
  tests: LearningBoardPracticalTest[];
  checkIds?: string[];
}

export interface LearningBoardPractical {
  id?: string;
  courseId?: string;
  module?: number;
  chapter?: number;
  category?: string | null;
  sourceCategory?: string | null;
  experienceType?: 'terminal_coding_lab' | 'scenario_simulator' | 'research_evidence_lab' | 'cloud_console_lab' | string | null;
  categoryDecision?: {
    status?: 'accepted' | 'reclassified' | 'needs_review' | 'rejected' | string;
    sourceCategory?: string | null;
    finalCategory?: string | null;
    experienceType?: string | null;
    confidence?: number;
    reason?: string;
    signals?: string[];
  } | null;
  categoryProfile?: {
    experience?: string;
    workspaceFamily?: string;
    defaultMode?: string;
    learnerArtifact?: string;
    teacherRole?: string;
  } | null;
  experience?: {
    experienceType?: string;
    workspaceFamily?: string;
    learnerArtifact?: string;
    requiredUi?: string[];
  } | null;
  labType?: string | null;
  mode: string;
  sourceActivity?: string | null;
  sourceKey?: string | null;
  sourcePath?: string | null;
  sourceContent?: string | null;
  sourceHash?: string | null;
  metadata?: Record<string, unknown>;
  origin?: 'source' | 'manifest' | 'generated' | string;
  publicationStatus?: 'source_only' | 'compatibility_fallback' | 'published' | string;
  source?: 'database' | 'manifest' | string;
  status?: 'source_only' | 'compatibility_fallback' | 'published' | string;
  version?: number | string | null;
  schemaVersion?: number | string | null;
  generatorVersion?: string | null;
  classifierVersion?: string | null;
  summary?: string | null;
  level?: string | null;
  language?: string | null;
  runtime?: string | null;
  title: string;
  objectives?: string[];
  instructions?: string | null;
  narratorGuide?: string | null;
  teacher?: PracticalTeacherContext | null;
  codeWalkthrough?: CodeWalkthroughSegment[];
  teachingPlaylist?: PracticalTeachingPlaylistStep[];
  completionRule: string;
  checks?: Record<string, unknown>[];
  hints?: Record<string, unknown>[];
  evidence?: Record<string, unknown>[];
  environment?: Record<string, unknown> | null;
  safety?: Record<string, unknown> | null;
  cleanup?: Record<string, unknown> | null;
  completionRules?: Record<string, unknown> | null;
  generator?: Record<string, unknown> | null;
  files: LearningBoardPracticalFile[];
  tasks: LearningBoardPracticalTask[];
}

class LearningBoardsApiService {
  /**
   * Get all available learning board courses
   */
  async getCourses(): Promise<LearningBoardCourse[]> {
    const response = await fetch(`${API_BASE}/boards`);
    if (!response.ok) {
      throw new Error(`Failed to fetch learning board courses: ${response.statusText}`);
    }
    const data = await response.json();
    return data.data?.courses || [];
  }

  /**
   * Get chapters for a specific course
   */
  async getCourseChapters(courseId: string): Promise<{ course: LearningBoardCourse; chapters: LearningBoardChapter[] }> {
    const response = await fetch(`${API_BASE}/boards/${courseId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch course chapters: ${response.statusText}`);
    }
    const data = await response.json();
    return {
      course: data.data?.course,
      chapters: data.data?.chapters || [],
    };
  }

  /**
   * Get a specific chapter with all its screens
   */
  async getChapter(courseId: string, module: number, chapter: number): Promise<LearningBoardChapterData> {
    const response = await fetch(`${API_BASE}/boards/${courseId}/${module}/${chapter}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch chapter: ${response.statusText}`);
    }
    const data = await response.json();
    if (!data.success) {
      throw new Error(data.error || 'Failed to fetch chapter');
    }
    return data.data;
  }

  async getProgress(courseId: string, module: number, chapter: number): Promise<LearningBoardProgress | null> {
    const response = await fetch(`${API_ROOT}/learning/board-progress/${encodeURIComponent(courseId)}/${module}/${chapter}`, {
      headers: authHeaders(),
    });
    if (!response.ok) throw new Error(`Failed to fetch chapter progress: ${response.statusText}`);
    const data = await response.json();
    return data.data?.progress || null;
  }

  async updateProgress(
    courseId: string,
    module: number,
    chapter: number,
    update: Partial<Pick<LearningBoardProgress, 'lessonId' | 'explicitComplete' | 'watched' | 'practicalsComplete' | 'assessmentPassed' | 'score' | 'studySeconds' | 'notes'>>,
  ): Promise<{ progress: LearningBoardProgress; completed: boolean }> {
    const response = await fetch(`${API_ROOT}/learning/board-progress/${encodeURIComponent(courseId)}/${module}/${chapter}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', ...authHeaders() },
      body: JSON.stringify(update),
    });
    if (!response.ok) throw new Error(`Failed to update chapter progress: ${response.statusText}`);
    const data = await response.json();
    return data.data;
  }

  async evaluateAssessmentAnswer(
    courseId: string,
    module: number,
    chapter: number,
    questionId: number,
    studentAnswer: string,
  ): Promise<AssessmentAnswerEvaluation> {
    const response = await fetch(`${API_ROOT}/learning/assessment/evaluate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...authHeaders() },
      body: JSON.stringify({ courseId, module, chapter, questionId, studentAnswer }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.success) {
      throw new Error(data.error || `Failed to evaluate assessment answer: ${response.statusText}`);
    }
    return data.data;
  }

  /**
   * Record a learner practical run or submission attempt
   */
  async recordPracticalAttempt(
    practicalId: string,
    files: Record<string, string>,
    status: "started" | "in_progress" | "passed" | "failed",
    output: string
  ): Promise<{ id: string; status: string }> {
    const response = await fetch(`${API_ROOT}/learning/practical-attempts`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...authHeaders() },
      body: JSON.stringify({ practicalId, files, status, output }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.success) {
      throw new Error(data.error || "Failed to record practical attempt");
    }
    return data.data;
  }

  async executeNativePractical(
    files: Record<string, string>,
    activeFilePath: string,
    language: string,
    stdin = '',
  ): Promise<{
    ok: boolean;
    stdout?: string;
    stderr?: string;
    phase?: string;
    exitCode?: number | null;
    compilerUnavailable?: boolean;
    error?: string;
  }> {
    const response = await fetch(`${API_ROOT}/learning/practical-execute`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...authHeaders() },
      body: JSON.stringify({ files, activeFilePath, language, stdin }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.success) {
      const error = new Error(data.error || 'Native practical execution failed') as Error & { data?: Record<string, unknown> };
      error.data = data;
      throw error;
    }
    return data.data;
  }

  /**
   * Update progress for a practical task/milestone
   */
  async updatePracticalTaskProgress(
    practicalId: string,
    taskId: string,
    status: "not_started" | "in_progress" | "completed" = "completed"
  ): Promise<{ practicalId: string; taskId: string; status: string }> {
    const response = await fetch(`${API_ROOT}/learning/practical-task-progress`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...authHeaders() },
      body: JSON.stringify({ practicalId, taskId, status }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.success) {
      throw new Error(data.error || "Failed to update practical task progress");
    }
    return data.data;
  }

  /**
   * Retrieve learner's attempts and task completions for a practical
   */
  async getPracticalProgress(practicalId: string): Promise<{ attempts: any[]; taskProgress: any[] }> {
    const response = await fetch(`${API_ROOT}/learning/practical-progress/${encodeURIComponent(practicalId)}`, {
      headers: authHeaders(),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.success) {
      return { attempts: [], taskProgress: [] };
    }
    return data.data;
  }

  /**
   * Get a specific screen from a chapter
   */
  async getScreen(courseId: string, module: number, chapter: number, screen: number): Promise<LearningBoardScreen> {
    const response = await fetch(`${API_BASE}/boards/${courseId}/${module}/${chapter}/${screen}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch screen: ${response.statusText}`);
    }
    const data = await response.json();
    if (!data.success) {
      throw new Error(data.error || 'Failed to fetch screen');
    }
    return data.data;
  }
}

export const learningBoardsApi = new LearningBoardsApiService();
