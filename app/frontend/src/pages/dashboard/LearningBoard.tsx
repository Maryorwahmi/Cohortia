import {useState, useMemo} from 'react';
import {useNavigate} from 'react-router-dom';
import LearningBoardPage, {CustomLessonDetails} from '../../components/dashboard/LearningBoardPage';
import {useAuth} from '../../context/AuthContext';
import {useTheme} from '../../context/ThemeContext';
import {backendUserToPreferences, UserPreferences} from '../../types';
import {useTrackCurriculum} from '../../hooks/useTrackCurriculum';
import {useCourseManifest} from '../../hooks/useCourseManifest';
import {DashboardMilestone, DashboardLesson} from '../../data/dashboardData';
import {findFirstIncompleteLesson} from '../../lib/roadmap';
import type { ManifestChapter, CourseManifest } from '../../lib/courseManifest';

const PAGE_PATHS: Record<string, string> = {
  overview: '/dashboard',
  'learning-board': '/dashboard/learning',
  mentor: '/dashboard/mentor',
  projects: '/dashboard/projects',
  progress: '/dashboard/progress',
  profile: '/dashboard/profile',
  community: '/community',
};

function markdownToLessonDetails(content?: string | null, title = 'Lesson'): CustomLessonDetails {
  const safeContent = content || '';

  const slides: CustomLessonDetails['slides'] = [];
  const transcript: CustomLessonDetails['transcript'] = [];

  const lines = safeContent.split('\n');
  let currentSlide: { number: number; title: string; points: string[] } | null = null;
  let slideNumber = 0;
  let timeSeconds = 0;

  for (const line of lines) {
    const headingMatch = line.match(/^#{2,4}\s+(.+)$/);
    if (headingMatch) {
      if (currentSlide) slides.push(currentSlide);
      currentSlide = { number: ++slideNumber, title: headingMatch[1].trim(), points: [] };
      continue;
    }

    const bulletMatch = line.match(/^\s*[*-]\s+(.+)$/);
    if (currentSlide && bulletMatch) {
      currentSlide.points.push(bulletMatch[1].trim());
    }

    if (line.trim() && !line.startsWith('#') && !line.startsWith('*') && !line.startsWith('-') && !line.startsWith('```')) {
      const minutes = Math.floor(timeSeconds / 60);
      const seconds = timeSeconds % 60;
      const time = `${minutes}:${seconds.toString().padStart(2, '0')}`;
      transcript.push({ time, speaker: 'Instructor', text: line.trim() });
      timeSeconds += 15;
    }
  }

  if (currentSlide) slides.push(currentSlide);

  const firstParagraph = transcript[0]?.text || `Learn the core concepts of ${title}.`;

  const handsOnMatch = safeContent.match(/#### Hands-on activity[\s\S]*?(?=####|$)/);
  const handsOnText = handsOnMatch
    ? handsOnMatch[0].replace(/#### Hands-on activity/, '').trim()
    : '';

  const keyConceptsMatch = safeContent.match(/#### Key concepts[\s\S]*?(?=####|$)/);
  const keyConcepts = keyConceptsMatch
    ? Array.from(keyConceptsMatch[0].matchAll(/^\s*[*-]\s*\*\*(.+?)\*\*[:\s]*(.+?)$/gm)).map((m) => `${m[1].trim()}: ${m[2].trim()}`)
    : [];

  const objectives = slides[0]?.points.length
    ? slides[0].points.slice(0, 5)
    : keyConcepts.length
      ? keyConcepts.slice(0, 5)
      : ['Understand the core concepts covered in this lesson.', 'Apply the material through hands-on exercises.', 'Prepare for the module assessment.'];

  const takeaways = keyConcepts.length
    ? keyConcepts.slice(0, 5)
    : handsOnText
      ? [handsOnText.slice(0, 200)]
      : ['Completed lesson content review.', 'Hands-on activity finished.', 'Assessment questions answered.'];

  return {
    summary: {
      overview: firstParagraph,
      objectives,
      takeaways,
    },
    slides: slides.length
      ? slides
      : [{ number: 1, title: title || 'Lesson Overview', points: [firstParagraph] }],
    transcript: transcript.length
      ? transcript
      : [{ time: '0:00', speaker: 'Instructor', text: firstParagraph }],
  };
}

export default function LearningBoard() {
  const navigate = useNavigate();
  const {user} = useAuth();
  const {theme} = useTheme();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const {track, milestones, lessons, completedSteps, loading, error, completeLesson} = useTrackCurriculum();
  const {manifest, loading: manifestLoading} = useCourseManifest(track?.id);

  if (!user) {
    return null;
  }

  const baseProfile = backendUserToPreferences(user);
  const userProfile: UserPreferences = {...baseProfile, completedSteps};

  const curriculum: DashboardMilestone[] = milestones;

  const activeLessonId = typeof window !== 'undefined'
    ? localStorage.getItem('cohortia_active_lesson_id') || undefined
    : undefined;
  const activeLearningContext = typeof window !== 'undefined'
    ? (() => {
        try {
          return JSON.parse(localStorage.getItem('cohortia_active_learning_context') || 'null') as {
            courseId?: string;
            courseTitle?: string;
          } | null;
        } catch {
          return null;
        }
      })()
    : null;

  const flatLessons = useMemo(() => {
    return curriculum.reduce<DashboardLesson[]>((acc, m) => [...acc, ...m.lessons], []);
  }, [curriculum]);

  const initialLesson = useMemo(() => {
    if (activeLessonId) {
      const found = flatLessons.find((l) => l.id === activeLessonId);
      if (found) return found;
    }
    return findFirstIncompleteLesson(curriculum, completedSteps) || flatLessons[0];
  }, [activeLessonId, flatLessons, curriculum, completedSteps]);

  const initialLessonId = initialLesson?.id;

  const lessonContentMap = useMemo<Record<string, CustomLessonDetails>>(() => {
    const map: Record<string, CustomLessonDetails> = {};
    for (const lesson of lessons) {
      map[lesson.id] = markdownToLessonDetails(lesson.content, lesson.title);
    }
    return map;
  }, [lessons]);

  const manifestLessonMap = useMemo(() => {
    if (!manifest) return {} as Record<string, ManifestChapter>;
    const map: Record<string, ManifestChapter> = {};
    for (const lesson of lessons) {
      const match = lesson.id.match(/-m(\d+)-c(\d+)-lesson$/);
      if (!match) continue;
      const moduleIndex = parseInt(match[1], 10);
      const chapterIndex = parseInt(match[2], 10);
      const chapterId = `${moduleIndex}.${chapterIndex}`;
      const module = manifest.modules.find((m) => m.index === moduleIndex);
      const chapter = module?.chapters.find((ch) => ch.index === chapterId);
      if (chapter) map[lesson.id] = chapter;
    }
    return map;
  }, [manifest, lessons]);

  const handleUpdateProfile = () => {
    // Local completion state is managed by the hook; profile updates are no-ops here.
  };

  const handleCompleteLesson = async (lessonId: string) => {
    await completeLesson(lessonId);
  };

  if (loading || manifestLoading) {
    return (
      <div className="min-h-screen bg-immersive-bg flex items-center justify-center">
        <div className="animate-pulse text-immersive-secondary font-mono text-sm">Loading learning board...</div>
      </div>
    );
  }

  return (
    <div className="relative">
      {error && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-2 rounded-xl text-xs font-mono font-bold">
          {error}
        </div>
      )}
      <LearningBoardPage
        userProfile={userProfile}
        onUpdateProfile={handleUpdateProfile}
        onChangePage={(page) => navigate(PAGE_PATHS[page] || `/dashboard/${page}`)}
        theme={theme}
        isSidebarCollapsed={isSidebarCollapsed}
        onToggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        curriculum={curriculum}
        initialLessonId={initialLessonId}
        lessonContent={lessonContentMap}
        courseId={activeLearningContext?.courseId || track?.id}
        courseTitle={activeLearningContext?.courseTitle || track?.title}
        courseLessons={Object.fromEntries(lessons.map((lesson) => [lesson.id, lesson.content || '']))}
        manifest={manifest}
        manifestLessonMap={manifestLessonMap}
        onCompleteLesson={handleCompleteLesson}
      />
    </div>
  );
}
