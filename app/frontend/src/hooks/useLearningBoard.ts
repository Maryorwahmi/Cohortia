import { useState, useEffect } from 'react';
import { learningBoardsApi, LearningBoardChapterData, LearningBoardScreen } from '../services/learningBoardsApi';
import type { ImmersiveChapterManifest } from '../components/immersive/ImmersiveChapterViewer';

interface UseLearningBoardOptions {
  courseId?: string;
  module?: number;
  chapter?: number;
  autoLoad?: boolean;
}

interface UseLearningBoardResult {
  manifest: ImmersiveChapterManifest | null;
  loading: boolean;
  error: string | null;
  chapters: any[];
  currentModule: number;
  currentChapter: number;
  navigateToChapter: (module: number, chapter: number) => Promise<void>;
}

/**
 * Hook to load and manage learning board data from the database
 */
export function useLearningBoard(options: UseLearningBoardOptions = {}): UseLearningBoardResult {
  const { courseId = 'cs50s-introduction-to-computer-science', module = 1, chapter = 1, autoLoad = true } = options;

  const [manifest, setManifest] = useState<ImmersiveChapterManifest | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [chapters, setChapters] = useState<any[]>([]);
  const [currentModule, setCurrentModule] = useState(module);
  const [currentChapter, setCurrentChapter] = useState(chapter);

  const loadChapter = async (courseId: string, mod: number, ch: number) => {
    try {
      setLoading(true);
      setError(null);

      // Fetch the chapter data from API
      const chapterData = await learningBoardsApi.getChapter(courseId, mod, ch);

      // Convert to ImmersiveChapterManifest format
      const immersiveManifest: ImmersiveChapterManifest = {
        course: chapterData.course,
        courseId: chapterData.courseId,
        module: chapterData.module,
        chapter: chapterData.chapter,
        moduleTitle: chapterData.moduleTitle,
        unitTitle: chapterData.chapterTitle,
        chapterTitle: chapterData.chapterTitle,
        screens: chapterData.screens as unknown as ImmersiveChapterManifest["screens"],
          assessment: chapterData.assessment,
        fullNarratorScript: chapterData.screens
          .map((s) => s.narratorSegment || (typeof s.narration === 'string' ? s.narration : s.narration?.text || ''))
          .filter(Boolean)
          .join('\n\n'),
        generatedAt: new Date().toISOString(),
      };

      setManifest(immersiveManifest);
      setCurrentModule(mod);
      setCurrentChapter(ch);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load chapter';
      setError(errorMessage);
      console.error('Error loading learning board chapter:', err);
    } finally {
      setLoading(false);
    }
  };

  const loadCourseChapters = async (courseId: string) => {
    try {
      const { chapters: courseChapters } = await learningBoardsApi.getCourseChapters(courseId);
      setChapters(courseChapters);
    } catch (err) {
      console.error('Error loading course chapters:', err);
    }
  };

  const navigateToChapter = async (mod: number, ch: number) => {
    await loadChapter(courseId, mod, ch);
  };

  // Load initial chapter and course structure
  useEffect(() => {
    if (!autoLoad || !courseId) return;

    Promise.all([
      loadChapter(courseId, currentModule, currentChapter),
      loadCourseChapters(courseId),
    ]);
  }, [autoLoad, courseId]);

  return {
    manifest,
    loading,
    error,
    chapters,
    currentModule,
    currentChapter,
    navigateToChapter,
  };
}
