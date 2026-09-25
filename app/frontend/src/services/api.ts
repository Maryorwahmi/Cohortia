import { API_BASE_URL } from '../config/api';
import type { RoadmapSelection } from '../types';

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

  const response = await fetch(url, {
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
  };
}

export interface BackendUser {
  id: string;
  name: string;
  email: string;
  role: string;
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
  getProgress: () => fetchApi<ProgressResponse>('/users/progress'),
  getEnrollments: () => fetchApi<EnrollmentsResponse>('/users/enrollments'),
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
  extensions?: string;
  skills?: string;
  aiLearning?: string;
  roles?: string;
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
  cost?: string | null;
  url?: string | null;
  image?: string | null;
  skills?: string | null;
  certification?: string | null;
  description?: string | null;
  category: string;
  subcategory: string;
  source?: string | null;
}

export interface CatalogCoursesResponse {
  success: boolean;
  data?: {courses: CatalogCourse[]};
  error?: string;
}

export const catalogCourseApi = {
  getAll: () => fetchApi<CatalogCoursesResponse>('/catalog-courses'),
  recommend: (data: { careerGoal: string; selectedCareerId: string; learnerStage: string }) =>
    fetchApi<{
      success: boolean;
      data?: {
        careerId: string;
        goal: string;
        learnerStage: string;
        courses: Record<string, CatalogCourse[]>;
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
    fetchApi<{success: boolean; data?: {course: CatalogCourse; details: {overview: string; keyConcepts: string[]; outcomes: string[]; skills?: string[]; syllabus: Array<{module: string; theme: string; chapters: string}>}}; error?: string}>(`/catalog-courses/${encodeURIComponent(id)}/details`),
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
  getEnrolled: () => fetchApi<{ success: boolean; data?: { enrollments: Array<Record<string, unknown>> }; error?: string }>('/tracks/user/enrolled'),
};

// Community
export const communityApi = {
  getPosts: () => fetchApi<{ success: boolean; data?: { posts: Array<Record<string, unknown>> }; error?: string }>('/community/posts'),
  createPost: (data: { title: string; content: string; category: string }) =>
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
export const projectApi = {
  getByRoadmap: (roadmapId: string) => fetchApi<{ success: boolean; data?: { projects: Array<Record<string, unknown>> }; error?: string }>(`/projects/${roadmapId}`),
  getSubmissions: () => fetchApi<{ success: boolean; data?: { submissions: Array<Record<string, unknown>> }; error?: string }>('/projects/submissions/me'),
  submit: (projectId: string, content: string) =>
    fetchApi<{ success: boolean; data?: { submission: Record<string, unknown> }; error?: string }>(`/projects/${projectId}/submit`, {
      method: 'POST',
      body: JSON.stringify({ content }),
    }),
  getFeedback: (submissionId: string) =>
    fetchApi<{ success: boolean; data?: { feedback: Record<string, unknown> }; error?: string }>(`/projects/${submissionId}/feedback`, { method: 'POST' }),
};

// Chat
export interface ChatLearningContext {
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
  currentFile?: string;
  currentCode?: string;
  currentTaskTitle?: string;
  currentTaskInstruction?: string;
  currentTaskHint?: string;
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
