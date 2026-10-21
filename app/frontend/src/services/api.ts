import { API_BASE_URL } from '../config/api';
import type { RoadmapSelection } from '../types';
import { fetchWithReadCache } from './requestCache';
import { loadStaticCatalog } from '../lib/publicCatalog';

export interface ApiError extends Error {
  status?: number;
  data?: Record<string, unknown>;
}

async function fetchApi<T = unknown>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  const token = localStorage.getItem('cohortia_token');

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string> || {}),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetchWithReadCache(url, {
    ...options,
    headers,
  });

  const data = await response.json().catch(() => ({})) as Record<string, unknown>;

  if (!response.ok) {
    const errorMessage = (data.message as string) || (data.error as string) || `Request failed with status ${response.status}`;
    const error: ApiError = new Error(errorMessage);
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data as T;
}

// Auth
export interface AuthResponse {
  success: boolean;
  message?: string;
  error?: string;
  details?: Record<string, string[]>;
  data?: {
    token?: string;
    user?: BackendUser;
    twoFactorRequired?: boolean;
    challengeToken?: string;
  };
}

export interface BackendUser {
  id: string;
  name: string;
  email: string;
  username?: string | null;
  role: string;
  adminRole?: 'alpha' | 'admin' | null;
  phone?: string | null;
  country?: string | null;
  currentStatus?: string | null;
  currentRole?: string | null;
  onboardingGoal?: string | null;
  experienceLevel?: string | null;
  weeklyHours?: string | null;
  learningPace?: string | null;
  careerGoal?: string | null;
  desiredField?: string | null;
  roadmapSelection?: string | null;
  skillsKnown?: string | null;
  availability?: string | null;
  portfolioLink?: string | null;
  avatarUrl?: string | null;
  twoFactorEnabled?: boolean;
  educationLevel?: string | null;
  ageRange?: string | null;
  learningStyle?: string | null;
  jobReadyTimeline?: string | null;
  motivation?: string | null;
  biggestChallenge?: string | null;
  previousField?: string | null;
  wantsRealWorldExperience?: boolean | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
  phone?: string;
  country?: string;
  currentStatus?: string;
  currentRole?: string;
  role?: 'career-starter' | 'level-up' | 'experience-track';
  onboardingGoal?: string;
  experienceLevel?: string;
  weeklyHours?: string;
  learningPace?: string;
  careerGoal?: string;
  desiredField?: string;
  roadmapSelection?: string;
  skillsKnown?: string;
  availability?: string;
  portfolioLink?: string;
  educationLevel?: string;
  ageRange?: string;
  learningStyle?: string;
  jobReadyTimeline?: string;
  motivation?: string;
  biggestChallenge?: string;
  previousField?: string;
  wantsRealWorldExperience?: boolean;
}

export interface LoginCredentials {
  /** Accepts an email address or an admin username. */
  email: string;
  password: string;
}

export const authApi = {
  signup: (userData: SignupData) =>
    fetchApi<AuthResponse>('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
    }),

  login: (credentials: LoginCredentials) =>
    fetchApi<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    }),

  completeTwoFactorLogin: (challengeToken: string, code: string) =>
    fetchApi<AuthResponse>('/auth/verify-two-factor', {
      method: 'POST',
      body: JSON.stringify({challengeToken, code}),
    }),

  startGoogleExportReauthentication: () =>
    fetchApi<{success: boolean; data?: {url: string}; error?: string}>('/auth/google/export-reauth-url', {
      method: 'POST',
    }),

  getMe: () => fetchApi<AuthResponse>('/auth/me'),
};

// Users
export interface ProfileResponse {
  success: boolean;
  data?: { user: BackendUser };
  error?: string;
}

export interface ProgressResponse {
  success: boolean;
  data?: {
    progress: Array<Record<string, unknown>>;
    practicalAttempts?: Array<Record<string, unknown>>;
    practicalTaskProgress?: Array<Record<string, unknown>>;
    courseFinalAttempts?: Array<Record<string, unknown>>;
  };
  error?: string;
}

export interface EnrollmentsResponse {
  success: boolean;
  data?: { enrollments: Array<Record<string, unknown>> };
  error?: string;
}

export const userApi = {
  getProfile: () => fetchApi<ProfileResponse>('/users/profile'),
  updateProfile: (data: Partial<BackendUser>) =>
    fetchApi<ProfileResponse>('/users/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  getProgress: (options: { courseIds?: string[]; recentOnly?: boolean } = {}) => {
    const params = new URLSearchParams();
    if (options.courseIds?.length) params.set('courseIds', options.courseIds.join(','));
    if (options.recentOnly) params.set('recentOnly', '1');
    const query = params.toString();
    return fetchApi<ProgressResponse>(`/users/progress${query ? `?${query}` : ''}`);
  },
  getEnrollments: () => fetchApi<EnrollmentsResponse>('/users/enrollments'),
  createProfileImageUploadUrl: (contentType: string) =>
    fetchApi<{success: boolean; data?: {objectKey: string; uploadUrl: string}; error?: string}>('/users/profile/image/upload-url', {
      method: 'POST',
      body: JSON.stringify({contentType}),
    }),
  completeProfileImageUpload: (objectKey: string) =>
    fetchApi<ProfileResponse>('/users/profile/image/complete', {
      method: 'POST',
      body: JSON.stringify({objectKey}),
    }),
  setupTwoFactor: () =>
    fetchApi<{success: boolean; data?: {secret: string; otpauthUrl: string; challengeToken: string}; error?: string}>('/users/two-factor/setup', {
      method: 'POST',
      body: JSON.stringify({}),
    }),
  enableTwoFactor: (code: string, challengeToken: string) =>
    fetchApi<{success: boolean; data?: {enabled: boolean; recoveryCodes: string[]}; error?: string}>('/users/two-factor/enable', {
      method: 'POST',
      body: JSON.stringify({code, challengeToken}),
    }),
  startTwoFactorDisable: () =>
    fetchApi<{success: boolean; data?: {challengeToken: string}; error?: string}>('/users/two-factor/disable/setup', {
      method: 'POST',
      body: JSON.stringify({}),
    }),
  disableTwoFactor: (code: string, challengeToken: string) =>
    fetchApi<{success: boolean; data?: {enabled: boolean}; error?: string}>('/users/two-factor/disable', {
      method: 'POST',
      body: JSON.stringify({code, challengeToken}),
    }),
  verifyCourseExport: (data: {password?: string; code?: string; googleProof?: string}) =>
    fetchApi<{success: boolean; data?: {verificationToken: string}; error?: string}>('/users/export/verify', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  getCourseSyllabusExport: (verificationToken: string) =>
    fetch(`${API_BASE_URL}/users/export/course-syllabus`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(localStorage.getItem('cohortia_token')
          ? {Authorization: `Bearer ${localStorage.getItem('cohortia_token')}`}
          : {}),
      },
      body: JSON.stringify({verificationToken}),
    }).then(async (response) => {
      if (!response.ok) {
        const data = await response.json().catch(() => ({})) as {error?: string; message?: string};
        const error: ApiError = new Error(data.message || data.error || `Request failed with status ${response.status}`);
        error.status = response.status;
        throw error;
      }
      return response.blob();
    }),
};

export interface DailyActivitySummary {
  success: boolean;
  data?: {
    history: Record<string, number>;
    details: Record<string, { completedModule: boolean; practicedCoding: boolean; reviewedNotes: boolean }>;
    streak: number;
  };
  error?: string;
}

// Careers
export interface Career {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  category: string;
  image?: string;
  extensions?: string[] | string;
  skills?: string[] | string;
  aiLearning?: string[] | string;
  roles?: string[] | string;
}

export interface CareersResponse {
  success: boolean;
  data?: { careers: Career[] };
  error?: string;
}

export const careerApi = {
  getAll: () => fetchApi<CareersResponse>('/careers'),
  getById: (id: string) => fetchApi<CareersResponse>(`/careers/${id}`),
  suggest: (q: string, goal = '', experience = '') =>
    fetchApi<CareersResponse>(`/careers/suggest?q=${encodeURIComponent(q)}&goal=${encodeURIComponent(goal)}&experience=${encodeURIComponent(experience)}`),
  getSkills: (career: string) => fetchApi<{ success: boolean; data?: { skills: string[] }; error?: string }>(`/careers/skills?career=${encodeURIComponent(career)}`),
};

export interface CatalogCourse {
  id: string;
  title: string;
  provider?: string | null;
  platform?: string | null;
  level?: string | null;
  type?: string | null;
  duration?: string | null;
  cost?: string | number | null;
  url?: string | null;
  image?: string | null;
  imageCredit?: string | null;
  imageLicense?: string | null;
  imageSource?: string | null;
  skills?: string[] | string | null;
  certification?: string | null;
  description?: string | null;
  category: string;
  subcategory: string;
  marketCategory?: string | null;
  marketSubcategory?: string | null;
  careerPaths?: string[] | string | null;
  skillTags?: string[] | string | null;
  catalogStatus?: 'active' | 'review' | 'archive' | string | null;
  source?: string | null;
}

export interface CatalogCourseDetails {
  overview: string;
  keyConcepts: string[];
  outcomes: string[];
  skills?: string[];
  syllabus: Array<{module: string; theme: string; chapters: string}>;
}

export interface CatalogCoursesResponse {
  success: boolean;
  data?: {courses: CatalogCourse[]};
  error?: string;
}

export const catalogCourseApi = {
  getAll: async () => {
    const staticCatalog = await loadStaticCatalog();
    if (staticCatalog?.success && staticCatalog.data?.courses) return staticCatalog;
    return fetchApi<CatalogCoursesResponse>('/catalog-courses');
  },
  recommend: (data: { careerGoal: string; selectedCareerId: string; learnerStage: string; careerFocusId?: string; courseCategory?: string }) =>
    fetchApi<{
      success: boolean;
      data?: {
        careerId: string;
        goal: string;
        learnerStage: string;
        courses: Record<string, CatalogCourse[]>;
        selectionFeasible?: boolean;
        availability?: Record<string, {required: number; available: number}>;
        rankingMethod: 'ai' | 'mixed' | 'catalog-order';
        rankingNotice?: string | null;
      };
      error?: string;
      details?: Record<string, unknown>;
    }>('/catalog-courses/recommend', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  getByCareer: (careerId: string) =>
    fetchApi<CatalogCoursesResponse>(`/catalog-courses?careerId=${encodeURIComponent(careerId)}`),
  getDetails: (id: string) =>
    fetchApi<{success: boolean; data?: {course: CatalogCourse; details: CatalogCourseDetails}; error?: string}>(`/catalog-courses/${encodeURIComponent(id)}/details`),
};

export interface AdminCoursePermission {
  courseId: string;
  screens: boolean;
  assessments: boolean;
  practicals: boolean;
  other: boolean;
}

export interface AdminCourse extends CatalogCourse {
  availability: { screens: boolean; assessments: boolean; practicals: boolean; other: boolean };
  access: { screens: boolean; assessments: boolean; practicals: boolean; other: boolean };
}

export interface AdminManagedUser {
  id: string;
  name: string;
  email: string;
  adminRole: 'alpha' | 'admin' | null;
  role: string;
  coursePermissions: AdminCoursePermission[];
}

export const adminApi = {
  getCourses: () => fetchApi<{success: boolean; data?: {courses: AdminCourse[]; isAlphaAdmin: boolean}; error?: string}>('/admin/courses'),
  getUsers: () => fetchApi<{success: boolean; data?: {users: AdminManagedUser[]}; error?: string}>('/admin/users'),
  saveUserAccess: async (userId: string, coursePermissions: AdminCoursePermission[]) => {
    const response = await fetchApi<{success: boolean; message?: string; error?: string}>(`/admin/users/${encodeURIComponent(userId)}/access`, {
      method: 'PUT',
      body: JSON.stringify({coursePermissions}),
    });
    return response;
  },
  revokeUserAccess: async (userId: string) => {
    const response = await fetchApi<{success: boolean; message?: string; error?: string}>(`/admin/users/${encodeURIComponent(userId)}/access`, {
      method: 'DELETE',
    });
    return response;
  },
  deleteUser: (userId: string, confirmEmail: string) =>
    fetchApi<{success: boolean; message?: string; warning?: string; error?: string}>(`/admin/users/${encodeURIComponent(userId)}`, {
      method: 'DELETE',
      body: JSON.stringify({confirmEmail}),
    }),
  getCommunityReports: () => fetchApi<{success: boolean; data?: {reports: Array<Record<string, unknown>>}; error?: string}>('/admin/community/reports'),
  getCommunityStats: () => fetchApi<{success: boolean; data?: {totalPosts: number; openReports: number; hiddenPosts: number}; error?: string}>('/admin/community/stats'),
  moderateCommunityPost: (postId: string, data: {status?: 'published' | 'hidden' | 'removed'; isPinned?: boolean; isLocked?: boolean; isSolved?: boolean; reason?: string}) =>
    fetchApi<{success: boolean; message?: string; error?: string}>(`/admin/community/posts/${encodeURIComponent(postId)}`, {method: 'PUT', body: JSON.stringify(data)}),
  updateCommunityReport: (reportId: string, status: 'open' | 'reviewing' | 'resolved' | 'dismissed', resolution?: string) =>
    fetchApi<{success: boolean; message?: string; error?: string}>(`/admin/community/reports/${encodeURIComponent(reportId)}`, {method: 'PUT', body: JSON.stringify({status, resolution})}),
};

// Tracks
export interface Track {
  id: string;
  title: string;
  description: string;
  overview?: string | null;
  syllabus?: string | null;
  category: string;
  difficulty: string;
  duration?: string | null;
  image?: string | null;
  skills?: string | null; // JSON array string
  isCodeBased?: boolean | null;
  language?: string | null;
  provider?: string | null;
  level?: string | null;
  courseType?: string | null;
  certification?: string | null;
}

export interface TrackEnrollment {
  id: string;
  trackId: string;
  courseId?: string;
  status: string;
  enrolledAt?: string;
  updatedAt?: string;
}

export interface Lesson {
  id: string;
  trackId: string;
  moduleIndex: number;
  moduleTitle: string | null;
  moduleGoal?: string | null;
  title: string;
  description: string | null;
  content: string | null;
  type: string;
  duration: string | null;
  order: number;
  metadata?: string | null;
  createdAt: string;
  updatedAt: string;
}

export const trackApi = {
  getAll: () => fetchApi<{ success: boolean; data?: { tracks: Track[] }; error?: string }>('/tracks'),
  getById: (id: string) => fetchApi<{ success: boolean; data?: { track: Track }; error?: string }>(`/tracks/${id}`),
  getLessons: (id: string) => fetchApi<{ success: boolean; data?: { track: Track; lessons: Lesson[] }; error?: string }>(`/tracks/${id}/lessons`),
  enroll: (id: string) =>
    fetchApi<{ success: boolean; data?: { enrollment: Record<string, unknown> }; error?: string }>(`/tracks/${id}/enroll`, {
      method: 'POST',
    }),
  getEnrolled: () => fetchApi<{ success: boolean; data?: { enrollments: TrackEnrollment[] }; error?: string }>('/tracks/user/enrolled'),
};

// Community
export const communityApi = {
  getPosts: (filters: {courseId?: string; category?: string; postType?: string} = {}) => {
    const query = new URLSearchParams(Object.entries(filters).filter(([, value]) => Boolean(value)) as Array<[string, string]>).toString();
    return fetchApi<{ success: boolean; data?: { posts: Array<Record<string, unknown>> }; error?: string }>(`/community/posts${query ? `?${query}` : ''}`);
  },
  createPost: (data: { title: string; content: string; category: string; courseId?: string | null; module?: number | null; chapter?: number | null; lessonId?: string | null; postType?: string }) =>
    fetchApi<{ success: boolean; data?: { post: Record<string, unknown> }; error?: string }>('/community/posts', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  getPost: (id: string) => fetchApi<{ success: boolean; data?: { post: Record<string, unknown> }; error?: string }>(`/community/posts/${id}`),
  addComment: (id: string, content: string) =>
    fetchApi<{ success: boolean; data?: { comment: Record<string, unknown> }; error?: string }>(`/community/posts/${id}/comments`, {
      method: 'POST',
      body: JSON.stringify({ content }),
    }),
  reportPost: (id: string, reason: string, details?: string) => fetchApi<{success: boolean; error?: string}>(`/community/posts/${id}/report`, {method: 'POST', body: JSON.stringify({reason, details})}),
  toggleBookmark: (id: string) => fetchApi<{success: boolean; data?: {bookmarked: boolean}; error?: string}>(`/community/posts/${id}/bookmark`, {method: 'POST'}),
};

// Internships
export const internshipApi = {
  getBriefs: () => fetchApi<{ success: boolean; data?: { briefs: Array<Record<string, unknown>> }; error?: string }>('/internships/briefs'),
  getBrief: (id: string) => fetchApi<{ success: boolean; data?: { brief: Record<string, unknown> }; error?: string }>(`/internships/briefs/${id}`),
  submitWork: (id: string, data: { content: string; notes?: string }) =>
    fetchApi<{ success: boolean; data?: { submission: Record<string, unknown> }; error?: string }>(`/internships/briefs/${id}/submit`, {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  getSubmissions: () => fetchApi<{ success: boolean; data?: { submissions: Array<Record<string, unknown>> }; error?: string }>('/internships/submissions'),
};

// Learning
export const learningApi = {
  getLessons: () => fetchApi<{ success: boolean; data?: { lessons: Array<Record<string, unknown>> }; error?: string }>('/learning/lessons'),
  getLesson: (id: string) => fetchApi<{ success: boolean; data?: { lesson: Record<string, unknown> }; error?: string }>(`/learning/lessons/${id}`),
  completeLesson: (id: string) =>
    fetchApi<{ success: boolean; data?: { progress: Record<string, unknown> }; error?: string }>(`/learning/lessons/${id}/complete`, {
      method: 'POST',
    }),
};

// Contact
export const contactApi = {
  submit: (data: { name: string; email: string; subject?: string; message: string }) =>
    fetchApi<{ success: boolean; message?: string; error?: string }>('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};

// The ordered catalog bundle and its lesson rows are the active dashboard curriculum.
export interface ActiveRoadmapCourse extends CatalogCourse {
  level: string;
  order: number;
  lessons: Lesson[];
}

export interface ActiveRoadmapResponse {
  success: boolean;
  data?: {
    selection: RoadmapSelection | null;
    courses: ActiveRoadmapCourse[];
  };
  error?: string;
}

export const roadmapApi = {
  getActive: () => fetchApi<ActiveRoadmapResponse>('/roadmaps/active'),
};

// AI Lessons
export const lessonApi = {
  getByRoadmap: (roadmapId: string) => fetchApi<{ success: boolean; data?: { lessons: Array<Record<string, unknown>> }; error?: string }>(`/lessons/${roadmapId}`),
  getDetail: (lessonId: string) => fetchApi<{ success: boolean; data?: { lesson: Record<string, unknown> }; error?: string }>(`/lessons/detail/${lessonId}`),
  getProgress: (roadmapId: string) => fetchApi<{ success: boolean; data?: { progress: Array<Record<string, unknown>> }; error?: string }>(`/lessons/progress/${roadmapId}`),
  generate: (data: { roadmapId: string; moduleIndex: number; chapterIndex: number }) =>
    fetchApi<{ success: boolean; data?: { lesson: Record<string, unknown> }; error?: string }>('/lessons/generate', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  complete: (lessonId: string) =>
    fetchApi<{ success: boolean; data?: { progress: Record<string, unknown> }; error?: string }>(`/lessons/complete/${lessonId}`, { method: 'POST' }),
};

// AI Projects
export interface CourseFinalPackage {
  courseId: string;
  status: 'draft' | 'review' | 'ready' | 'published' | 'archived';
  difficulty: string | null;
  validation: {valid: boolean; errors: string[]};
  selectedCapstoneId?: string | null;
  capstoneStatus?: string;
  capstones: Array<{
    id: string;
    optionNumber: number;
    title: string;
    description: string;
    requirements: string[];
    stretchGoals: string[];
    rubric: Array<{ criterion: string; weight: number }>;
    estimatedTime?: string | null;
    requiresFileEvidence: boolean;
  }>;
  exam: {
    id: string;
    title: string;
    instructions?: string | null;
    timeLimitMinutes?: number | null;
    passingScore: number;
    questionCount: number;
    sections: string[];
    questions: Array<{ id: string; questionNumber: number; section: string; type: string; prompt: string; points: number }>;
  } | null;
}

export interface CourseFinalExamQuestion {
  id: string;
  questionNumber: number;
  section: string;
  type: string;
  prompt: string;
  points: number;
}

export interface CourseFinalExamAnswer {
  questionId: string;
  answer: string;
  pointsAwarded?: number | null;
  feedback?: string | null;
}

export interface CourseFinalExamAttempt {
  id: string;
  attemptNumber: number;
  status: string;
  startedAt: string;
  expiresAt: string;
  submittedAt?: string | null;
  score?: number | null;
  passed?: boolean | null;
  reviewRequired: boolean;
  answers: CourseFinalExamAnswer[];
  questions: CourseFinalExamQuestion[];
}

export interface CourseFinalExamAttemptSummary {
  id: string;
  attemptNumber: number;
  status: string;
  submittedAt?: string | null;
  score?: number | null;
  passed?: boolean | null;
  reviewRequired: boolean;
}

export interface CourseFinalExamAttemptsResponse {
  success: boolean;
  data?: {
    timeLimitMinutes: number;
    passingScore: number;
    attempts: CourseFinalExamAttemptSummary[];
    currentAttempt: CourseFinalExamAttempt | null;
    completion: { eligible: boolean; completed?: number; total?: number; reason: string };
    passed: boolean;
    attemptsUsed: number;
    attemptsRemaining: number;
    canStart: boolean;
  };
  error?: string;
}

export const projectApi = {
  getByRoadmap: (roadmapId: string) => fetchApi<{ success: boolean; data?: { projects: Array<Record<string, unknown>> }; error?: string }>(`/projects/${roadmapId}`),
  getSubmissions: () => fetchApi<{ success: boolean; data?: { submissions: Array<Record<string, unknown>> }; error?: string }>('/projects/submissions/me'),
  getCapstoneReviewQueue: () => fetchApi<{success: boolean; data?: {submissions: Array<Record<string, unknown>>}; error?: string}>('/projects/admin/capstone-submissions'),
  reviewCapstoneSubmission: (submissionId: string, data: {status: 'approved' | 'needs_revision'; score: number; feedback: string; rubricScores?: Array<{criterion: string; score: number}>}) =>
    fetchApi<{success: boolean; error?: string}>(`/projects/admin/capstone-submissions/${encodeURIComponent(submissionId)}/review`, {method: 'POST', body: JSON.stringify(data)}),
  getCapstoneReviewHistory: (submissionId: string) =>
    fetchApi<{success: boolean; data?: {history: Array<Record<string, unknown>>}; error?: string}>(`/projects/admin/capstone-submissions/${encodeURIComponent(submissionId)}/history`),
  getExamReviewQueue: () => fetchApi<{success: boolean; data?: {attempts: Array<Record<string, unknown>>}; error?: string}>('/projects/admin/final-exam-attempts/review'),
  reviewExamAttempt: (attemptId: string, data: {score: number; feedback: string}) =>
    fetchApi<{success: boolean; error?: string}>(`/projects/admin/final-exam-attempts/${encodeURIComponent(attemptId)}/review`, {method: 'POST', body: JSON.stringify(data)}),
  updateCourseFinalStatus: (courseId: string, status: 'draft' | 'review' | 'ready' | 'published' | 'archived') =>
    fetchApi<{success: boolean; data?: {status: string; validation: {valid: boolean; errors: string[]}}; error?: string}>(`/projects/admin/course/${encodeURIComponent(courseId)}/final/status`, {
      method: 'PUT',
      body: JSON.stringify({status}),
    }),
  getUnattachedEvidence: (courseId: string, capstoneId: string) =>
    fetchApi<{success: boolean; data?: {files: Array<EvidenceFile>}; error?: string}>(`/projects/submission-files/me?courseId=${encodeURIComponent(courseId)}&capstoneId=${encodeURIComponent(capstoneId)}`),
  deleteEvidence: (fileId: string) =>
    fetchApi<{success: boolean; error?: string}>(`/projects/submission-files/${encodeURIComponent(fileId)}`, {method: 'DELETE'}),
  getCourseFinal: (courseId: string) => fetchApi<{ success: boolean; data?: CourseFinalPackage; error?: string }>(`/projects/course/${encodeURIComponent(courseId)}/final`),
  getCourseFinalPackages: () => fetchApi<{success: boolean; data?: {packages: Array<{courseId: string; title: string; difficulty: string | null; status: string; validation: {valid: boolean; errors: string[]}}>}; error?: string}>('/projects/admin/course-finals'),
  updateCourseFinalSelection: (courseId: string, capstoneId: string) =>
    fetchApi<{ success: boolean; data?: { selectedCapstoneId: string; capstoneStatus: string }; error?: string }>(`/projects/course/${encodeURIComponent(courseId)}/final/capstone-selection`, {
      method: 'PUT',
      body: JSON.stringify({ capstoneId }),
    }),
  getFinalExamAttempts: (courseId: string) => fetchApi<CourseFinalExamAttemptsResponse>(`/projects/course/${encodeURIComponent(courseId)}/final/attempts`),
  startFinalExam: (courseId: string) =>
    fetchApi<{ success: boolean; data?: { attempt: CourseFinalExamAttempt }; error?: string }>(`/projects/course/${encodeURIComponent(courseId)}/final/attempts`, {
      method: 'POST',
    }),
  saveFinalExamAnswer: (attemptId: string, questionId: string, answer: string) =>
    fetchApi<{ success: boolean; error?: string }>(`/projects/final-exam-attempts/${encodeURIComponent(attemptId)}/answers`, {
      method: 'PUT',
      body: JSON.stringify({ questionId, answer }),
    }),
  submitFinalExam: (attemptId: string, answers: Array<{ questionId: string; answer: string }>) =>
    fetchApi<{ success: boolean; data?: { attempt: CourseFinalExamAttempt }; error?: string }>(`/projects/final-exam-attempts/${encodeURIComponent(attemptId)}/submit`, {
      method: 'POST',
      body: JSON.stringify({ answers }),
    }),
  getEvidenceUploadUrl: (courseId: string, capstoneId: string, fileName: string, contentType: string) =>
    fetchApi<{ success: boolean; data?: { fileId: string; objectKey: string; uploadUrl: string; expiresInSeconds: number; uploadExpiresAt: string }; error?: string }>(`/projects/submission-files/upload-url`, {
      method: 'POST',
      body: JSON.stringify({ courseId, capstoneId, fileName, contentType }),
    }),
  completeEvidenceUpload: (fileId: string) =>
    fetchApi<{ success: boolean; data?: { fileId: string; objectKey: string; byteSize: number; contentType: string }; error?: string }>(`/projects/submission-files/${encodeURIComponent(fileId)}/complete`, {
      method: 'POST',
    }),
  getEvidenceDownloadUrl: (fileId: string) =>
    fetchApi<{ success: boolean; data?: { fileId: string; fileName: string; contentType: string; objectKey: string; downloadUrl: string; expiresInSeconds: number }; error?: string }>(`/projects/submission-files/${encodeURIComponent(fileId)}/download`),
  submit: (projectId: string, content: string, fileIds: string[] = [], withoutFileEvidence = false) =>
    fetchApi<{ success: boolean; data?: { submission: Record<string, unknown> }; error?: string }>(`/projects/${projectId}/submit`, {
      method: 'POST',
      body: JSON.stringify({ content, fileIds, withoutFileEvidence }),
    }),
  getFeedback: (submissionId: string) =>
    fetchApi<{ success: boolean; data?: Record<string, unknown>; error?: string }>(`/projects/${submissionId}/feedback`, { method: 'POST' }),
};

export interface EvidenceFile {
  id: string;
  submissionId?: string | null;
  fileName: string;
  contentType: string;
  byteSize: number;
  createdAt: string;
}

// Chat
export interface ChatLearningContext {
  assistant?: 'hortbot' | 'public' | string;
  courseId?: string;
  courseTitle?: string;
  courseCategory?: string;
  module?: number;
  chapter?: number;
  moduleTitle?: string;
  chapterTitle?: string;
  lessonTitle?: string;
  lessonContent?: string;
  practicalTitle?: string;
  practicalInstructions?: string;
  practicalObjectives?: string[];
  practicalTeachingContext?: string;
  practicalTasks?: Array<{
    title: string;
    instruction: string;
    learningGoal?: string;
    teacherTalk?: string;
    realWorldExample?: string;
    questions?: string[];
    requiredConcepts?: string[];
  }>;
  currentFile?: string;
  currentCode?: string;
  currentTaskTitle?: string;
  currentTaskInstruction?: string;
  currentTaskGoal?: string;
  currentTaskQuestions?: string[];
  currentTaskConcepts?: string[];
  currentTaskHint?: string;
  interactiveExercisePrompt?: string;
  currentAnswer?: string;
  currentPrediction?: string;
  lastCheckResult?: string;
  currentTaskIndex?: number;
  completedTasks?: number;
  totalTasks?: number;
  hasErrors?: boolean;
  lastOutput?: string;
  page?: string;
}

export const chatApi = {
  sendMessage: (message: string, history: Array<{ sender: string; text: string }> = [], mode = 'mentor', outputFormat = 'text', focus: string | null = null, learningContext?: ChatLearningContext) => {
    const normalizedHistory = history.map((h) => ({
      role: h.sender === 'user' ? 'user' : 'assistant',
      content: h.text,
    }));
    return fetchApi<{ success: boolean; data?: { reply: string }; error?: string }>('/chat/message', {
      method: 'POST',
      body: JSON.stringify({ message, history: normalizedHistory, mode, outputFormat, focus, learningContext }),
    });
  },
};

// Mentor Memory API
export const mentorApi = {
  getContext: () => fetchApi<{ success: boolean; data?: { context: Record<string, unknown> }; error?: string }>('/mentor/context'),
  updateContext: (data: Record<string, unknown>) =>
    fetchApi<{ success: boolean; data?: { context: Record<string, unknown> }; error?: string }>('/mentor/context', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  getCheckIns: () => fetchApi<{ success: boolean; data?: { checkIns: Array<Record<string, unknown>> }; error?: string }>('/mentor/check-in'),
  submitCheckIn: (data: Record<string, unknown>) =>
    fetchApi<{ success: boolean; data?: { checkIn: Record<string, unknown> }; error?: string }>('/mentor/check-in', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};

// Public platform stats
export interface PlatformStats {
  totalUsers: number;
  activeLearners: number;
  totalProjects: number;
  totalMentors: number;
  totalBriefs: number;
  activeCohorts: number;
}

export interface OutcomeStats {
  placementRate: number;
  avgSalaryIncrease: number;
  learnerCount: number;
}

export const statsApi = {
  getPlatform: () => fetchApi<{ success: boolean; data?: PlatformStats; error?: string }>('/stats/platform'),
  getOutcomes: () => fetchApi<{ success: boolean; data?: OutcomeStats; error?: string }>('/stats/outcomes'),
};

// CMS content sections (success stories, about team, FAQs, hero, contact details)
export interface ContentSection {
  section: string;
  title: string | null;
  data: Record<string, unknown>;
  updatedAt: string;
}

export const contentApi = {
  getSection: (section: string) => fetchApi<{ success: boolean; data?: ContentSection; error?: string }>(`/content/${section}`),
};

// Community events
export interface CommunityEvent {
  id: string;
  title: string;
  description: string;
  host: string;
  date: string;
  time: string;
  location: string;
  roomLink?: string;
  category: string;
  maxAttendees?: number;
  rsvpCount: number;
  createdAt: string;
  updatedAt: string;
}

export const eventsApi = {
  getAll: () => fetchApi<{ success: boolean; data?: { events: CommunityEvent[] }; error?: string }>('/events'),
  rsvp: (id: string, status: 'going' | 'maybe' | 'cancelled' = 'going') =>
    fetchApi<{ success: boolean; message?: string; error?: string }>(`/events/${id}/rsvp`, {
      method: 'POST',
      body: JSON.stringify({ status }),
    }),
};

// Study rooms
export interface StudyRoom {
  id: string;
  name: string;
  description: string;
  category: string;
  topic: string;
  hostUserId?: string | null;
  activeParticipants: number;
  maxParticipants: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export const studyRoomsApi = {
  getAll: () => fetchApi<{ success: boolean; data?: { rooms: StudyRoom[] }; error?: string }>('/community/rooms'),
  getById: (id: string) => fetchApi<{ success: boolean; data?: { room: StudyRoom; participantCount: number }; error?: string }>(`/community/rooms/${id}`),
  create: (data: { name: string; description?: string; category: string; topic: string; maxParticipants?: number }) =>
    fetchApi<{ success: boolean; data?: { room: StudyRoom }; error?: string }>('/community/rooms', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  join: (id: string) => fetchApi<{ success: boolean; data?: { room: StudyRoom; joined: boolean }; error?: string }>(`/community/rooms/${id}/join`, { method: 'POST' }),
  leave: (id: string) => fetchApi<{ success: boolean; data?: { room: StudyRoom; left: boolean }; error?: string }>(`/community/rooms/${id}/leave`, { method: 'POST' }),
};

// Community reactions
export const communityReactionsApi = {
  react: (postId: string, type: 'like' | 'celebrate' | 'support' | 'insight') =>
    fetchApi<{ success: boolean; data?: { post: Record<string, unknown>; userReactions: string[] }; error?: string }>(`/community/posts/${postId}/react`, {
      method: 'POST',
      body: JSON.stringify({ type }),
    }),
  getReactions: (postId: string) =>
    fetchApi<{ success: boolean; data?: { grouped: Record<string, number>; userReacted: boolean; userReactionType: string | null; total: number }; error?: string }>(
      `/community/posts/${postId}/reactions`
    ),
};

// Newsletter
export const newsletterApi = {
  subscribe: (data: { email: string; name?: string }) =>
    fetchApi<{ success: boolean; message?: string; data?: { subscribed: boolean }; error?: string }>('/newsletter/subscribe', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};

// Bookings / appointments
export interface Booking {
  id: string;
  userId?: string | null;
  name: string;
  email: string;
  track: string;
  date: string;
  time: string;
  notes?: string | null;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

export const bookingsApi = {
  getAvailability: (date: string) =>
    fetchApi<{ success: boolean; data?: { date: string; available: string[]; allSlots: string[] }; error?: string }>(`/bookings/availability?date=${encodeURIComponent(date)}`),
  create: (data: { name: string; email: string; track: string; date: string; time: string; notes?: string }) =>
    fetchApi<{ success: boolean; message?: string; data?: { booking: Booking }; error?: string }>('/bookings', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  getMine: () => fetchApi<{ success: boolean; data?: { bookings: Booking[] }; error?: string }>('/bookings/me'),
};

// Notifications
export interface Notification {
  id: string;
  userId: string;
  type: string;
  title: string;
  message: string;
  isRead: boolean;
  link?: string | null;
  createdAt: string;
  updatedAt: string;
}

export const notificationsApi = {
  getAll: () => fetchApi<{ success: boolean; data?: { notifications: Notification[] }; error?: string }>('/notifications'),
  markRead: (id: string) => fetchApi<{ success: boolean; message?: string; error?: string }>(`/notifications/${id}/read`, { method: 'POST' }),
  markAllRead: () => fetchApi<{ success: boolean; message?: string; error?: string }>('/notifications/read-all', { method: 'POST' }),
  delete: (id: string) => fetchApi<{ success: boolean; message?: string; error?: string }>(`/notifications/${id}`, { method: 'DELETE' }),
};

// Activity log
export const activityApi = {
  getRecent: () => fetchApi<{ success: boolean; data?: { activity: Array<Record<string, unknown>> }; error?: string }>('/activity'),
  getStats: () => fetchApi<{ success: boolean; data?: { stats: Record<string, number> }; error?: string }>('/activity/stats'),
  getDailySummary: (days = 56) =>
    fetchApi<DailyActivitySummary>(`/activity/daily-summary?days=${days}`),
};
