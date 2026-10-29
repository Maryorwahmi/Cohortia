import React, { useState, useEffect, useMemo, useRef } from 'react';
import { PRACTICAL_MANIFESTS } from './data/practicalsData';
import type { LearningBoardPractical } from '../../../services/learningBoardsApi';
import { learningBoardsApi } from '../../../services/learningBoardsApi';
import { chatApi, type ChatLearningContext } from '../../../services/api';
import { INSTRUCTOR_PERSONAS } from './data/instructorsData';
import {
  PracticalManifest,
  WalkthroughStep,
  InstructorPersona,
  DomainEvaluatorResult,
  DiagnosticFinding,
  PracticalWorkspaceData,
} from './types/practical';
import { TopNav } from './components/TopNav';
import { WorkspaceSidebar } from './components/WorkspaceSidebar';
import { ClassroomTeachView } from './components/ClassroomTeachView';
import { WalkthroughPanel } from './components/WalkthroughPanel';
import { PracticalWorkspace } from './components/PracticalWorkspace';
import { MissionAndMilestonePanel } from './components/MissionAndMilestonePanel';
import { StructuredFeedbackCard } from './components/StructuredFeedbackCard';
import { ResizableSplitLayout } from './components/ResizableSplitLayout';
import { PlaybackControlBar } from './components/PlaybackControlBar';
import { InstructorPersonaModal } from './components/InstructorPersonaModal';
import { Bot, Send, Sparkles, X } from 'lucide-react';
import './practical-test-experience.css';

const STORAGE_KEY_PREFIX = 'cohortia_practical_v3_';
const INITIAL_MANIFEST =
  PRACTICAL_MANIFESTS.find((manifest) => manifest.id === 'c-linux-first-program') ||
  PRACTICAL_MANIFESTS[0];

export interface PracticalTestExperienceProps {
  practical?: LearningBoardPractical | null;
  courseTitle?: string;
  onComplete?: () => void | Promise<void>;
  onMentorContextReady?: (provider: (() => ChatLearningContext) | null) => void;
}

type HortBotMessage = {
  sender: 'user' | 'assistant';
  text: string;
};

function categoryTypeFor(practical: LearningBoardPractical): PracticalManifest['categoryType'] {
  if (practical.experienceType === 'cloud_console_lab' || practical.category === 'Cloud Console Lab') return 'cloud_console';
  if (practical.experienceType === 'research_evidence_lab' || practical.category === 'Research & Analysis') return 'research_analysis';
  if (practical.experienceType === 'scenario_simulator' || practical.category === 'Scenario & Design Exercise') return 'scenario_design';
  return 'terminal_coding';
}

function learnerText(value: string | null | undefined): string {
  return String(value || '')
    .replace(/```[a-z0-9_+-]*\s*/gi, '')
    .replace(/```/g, '')
    .replace(/\*{1,2}/g, '')
    .replace(/`/g, '')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function exploreKeyTopicsFrom(practical: LearningBoardPractical): PracticalManifest['classroom']['exploreKeyTopics'] {
  return (practical.lessonContext?.keyConcepts || [])
    .map((concept) => {
      const separatorIndex = concept.indexOf(':');
      if (separatorIndex < 0) {
        return { title: learnerText(concept), description: '' };
      }

      return {
        title: learnerText(concept.slice(0, separatorIndex)),
        description: learnerText(concept.slice(separatorIndex + 1)),
      };
    })
    .filter((topic) => topic.title.length > 0);
}

function manifestFromPractical(practical: LearningBoardPractical, courseTitle?: string): PracticalManifest {
  const categoryType = categoryTypeFor(practical);
  const files = (practical.files || []).map((file) => ({
    name: file.path,
    folder: file.path.includes('/') ? file.path.slice(0, file.path.lastIndexOf('/')) : '/',
    initialContent: file.content || '',
    language: /\.py$/i.test(file.path) ? 'python' as const
      : /\.c$/i.test(file.path) ? 'c' as const
      : /\.(cpp|cc|cxx)$/i.test(file.path) ? 'cpp' as const
      : /\.json$/i.test(file.path) ? 'json' as const
      : /\.(yaml|yml)$/i.test(file.path) ? 'yaml' as const
      : 'text' as const,
  }));
  const teachingSteps = practical.teachingSteps || [];
  const walkthroughSteps = (practical.codeWalkthrough || []).map((step, index) => ({
    stepNumber: step.stepNumber || index + 1,
    title: step.file || `Teaching step ${index + 1}`,
    codeSnippet: step.codeLine,
    codeOrText: step.codeLine,
    callout: step.explanation || '',
    narration: step.speakerText,
    timestamp: (practical.teachingSteps?.slice(0, index).reduce((sum, item) => sum + (item.durationSeconds || 8), 0) || index * 8),
  }));
  const fallbackSteps = teachingSteps.map((step, index) => ({
    stepNumber: step.stepNumber || index + 1,
    title: step.title || `Teaching step ${index + 1}`,
    codeOrText: step.displayText,
    callout: step.explanation,
    narration: step.speakerText,
    timestamp: teachingSteps.slice(0, index).reduce((sum, item) => sum + (item.durationSeconds || 8), 0),
  }));
  const tasks = (practical.tasks || []).map((task, index) => ({
    id: task.id,
    title: learnerText(task.title || `Task ${index + 1}`),
    description: learnerText(task.instruction),
    criteria: task.requiredConcepts.map(learnerText).join(', '),
    hints: (task.hints || []).map(learnerText),
    interactiveExercise: task.interactiveExercise
      ? {
          type: task.interactiveExercise.type,
          prompt: learnerText(task.interactiveExercise.prompt),
          expectedAnswer: learnerText(task.interactiveExercise.expectedAnswer),
          acceptedAnswers: (task.interactiveExercise.acceptedAnswers || []).map(learnerText),
          explanation: learnerText(task.interactiveExercise.explanation),
        }
      : undefined,
  }));
  const title = learnerText(practical.title || 'Practical test');
  const teachViewOpening = practical.teachViewOpening;
  const keyConcepts = teachViewOpening?.keyConcepts?.length
    ? teachViewOpening.keyConcepts
      .map((concept) => ({
        title: learnerText(concept.title),
        description: learnerText(concept.description),
      }))
      .filter((concept) => concept.title.length > 0)
    : exploreKeyTopicsFrom(practical);
  const practicalObjectives = (teachViewOpening?.quickOrientation?.length
    ? teachViewOpening.quickOrientation
    : practical.objectives?.length
      ? practical.objectives
      : (practical.tasks || []).map((task) => task.title || task.instruction)
  ).map(learnerText).filter(Boolean).slice(0, 3);
  const workflowNodes = teachViewOpening?.conceptMap?.nodes?.length
    ? teachViewOpening.conceptMap.nodes.map((node) => ({
        label: learnerText(node.label),
        value: learnerText(node.value),
      }))
    : (practical.teachingSteps || []).slice(0, 4).map((step) => ({
        label: learnerText(step.title || `Step ${step.stepNumber}`),
        value: learnerText(step.explanation || step.displayText),
      }));
  const workspace = practical.workspace
    ? ({
        ...practical.workspace,
        type: practical.workspace.type === 'cloud' ? 'cloud' : practical.workspace.type === 'scenario' ? 'scenario' : practical.workspace.type === 'research' ? 'research' : 'terminal',
      } as PracticalWorkspaceData)
    : undefined;
  return {
    id: practical.id || `chapter-${practical.module}-${practical.chapter}`,
    title,
    category: practical.category || categoryType,
    categoryType,
    courseName: learnerText(courseTitle || practical.courseId || 'Cohortia course'),
    moduleName: `Module ${practical.module || ''}`,
    type: categoryType === 'terminal_coding'
      ? files.some((file) => /\.(c|cpp|cc|cxx)$/i.test(file.name)) ? 'c_program' : 'terminal'
      : categoryType === 'cloud_console' ? 'cloud' : categoryType === 'scenario_design' ? 'scenario' : 'script',
    durationSeconds: Math.max(60, (practical.teachingSteps || []).reduce((sum, step) => sum + (step.durationSeconds || 8), 0)),
    lessonLabel: title,
    objective: learnerText(practical.objectives?.join(' ') || practical.instructions || 'Complete the practical task and submit your work.'),
    realWorldContext: learnerText(practical.teacher?.realWorldContext || practical.summary || ''),
    classroom: {
      classroomBadge: '16:9 HD CLASSROOM', moduleBadge: `MODULE ${String(practical.module || '').padStart(2, '0')}`,
      chapterBreadcrumb: `CHAPTER ${practical.module || 1}.${practical.chapter || 1}`, topicBreadcrumb: title.toUpperCase(),
      mainTitle: title,
      subtitle: learnerText(teachViewOpening?.subtitle || practical.summary || practical.instructions || ''),
      inThisLesson: learnerText(teachViewOpening?.inThisPractical || practical.objectives?.join(' ') || practical.instructions || ''),
      comingUp: learnerText(teachViewOpening?.comingUp || practical.experience?.learnerArtifact || practical.tasks?.[0]?.title || ''),
      whyItMatters: learnerText(teachViewOpening?.whyItMatters || practical.teacher?.realWorldContext || practical.lessonContext?.chapterIntroduction || practical.summary || ''),
      quickOrientation: practicalObjectives,
      exploreKeyTopics: keyConcepts,
      conceptMap: {
        title: learnerText(teachViewOpening?.conceptMap?.title || 'Practical workflow'),
        subtitle: learnerText(teachViewOpening?.conceptMap?.subtitle || practical.experience?.learnerArtifact || ''),
        nodes: workflowNodes,
      },
      gettingReady: learnerText(teachViewOpening?.gettingReady || practical.instructions || 'Review the practical mission, then begin the workspace.'),
    },
    missionStory: { roleTitle: 'Learner', scenarioOverview: learnerText(practical.summary || ''), deliverables: (practical.objectives || []).map(learnerText), xpReward: 0 },
    files, walkthroughSteps: walkthroughSteps.length ? walkthroughSteps : fallbackSteps, tasks, workspace,
    activityKind: practical.activityKind,
  };
}

export default function App({ practical, courseTitle, onComplete, onMentorContextReady }: PracticalTestExperienceProps) {
  const generatedManifest = useMemo(() => practical ? manifestFromPractical(practical, courseTitle) : null, [practical, courseTitle]);
  const manifests = useMemo(() => generatedManifest ? [generatedManifest] : PRACTICAL_MANIFESTS, [generatedManifest]);
  const [activeManifestId, setActiveManifestId] = useState<string>(generatedManifest?.id || INITIAL_MANIFEST.id);
  const activeManifest = manifests.find((m) => m.id === activeManifestId) || manifests[0];

  const [activeFileName, setActiveFileName] = useState<string>(activeManifest.files[0]?.name || '');

  // Persistent file content with localStorage
  const [filesContent, setFilesContent] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}files_${generatedManifest?.id || INITIAL_MANIFEST.id}`);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    const initial: Record<string, string> = {};
    (generatedManifest || INITIAL_MANIFEST).files.forEach((f) => {
      initial[f.name] = f.initialContent;
    });
    return initial;
  });

  const draftSaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [lastSavedTimestamp, setLastSavedTimestamp] = useState<string>('just now');
  const [isHortBotOpen, setIsHortBotOpen] = useState(false);
  const [hortBotMessages, setHortBotMessages] = useState<HortBotMessage[]>([]);
  const [hortBotInput, setHortBotInput] = useState('');
  const [hortBotError, setHortBotError] = useState<string | null>(null);
  const [isHortBotTyping, setIsHortBotTyping] = useState(false);
  const hortBotEndRef = useRef<HTMLDivElement | null>(null);
  const hortBotInputRef = useRef<HTMLInputElement | null>(null);
  const hortBotPopupRef = useRef<HTMLElement | null>(null);
  const hortBotTriggerRef = useRef<HTMLButtonElement | null>(null);
  const hortBotDragRef = useRef<{ pointerX: number; pointerY: number; left: number; top: number } | null>(null);
  const [hortBotPosition, setHortBotPosition] = useState<{ left: number; top: number } | null>(null);

  // Instructor persona state
  const [selectedInstructor, setSelectedInstructor] = useState<InstructorPersona>(INSTRUCTOR_PERSONAS[0]);
  const [isInstructorModalOpen, setIsInstructorModalOpen] = useState<boolean>(false);

  // Teach Mode is the default view as requested by the user
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [mode, setMode] = useState<'teach' | 'practical'>('teach');
  const [isSplitView, setIsSplitView] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0); // 0 = Orientation, 1..N = Steps
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [completedTaskIds, setCompletedTaskIds] = useState<string[]>([]);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [evaluatorResult, setEvaluatorResult] = useState<DomainEvaluatorResult | null>(null);
  const [executedCommands, setExecutedCommands] = useState<string[]>([]);
  const [simulationPassed, setSimulationPassed] = useState<boolean>(false);

  useEffect(() => {
    if (!isHortBotOpen) return;
    hortBotInputRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsHortBotOpen(false);
        setHortBotPosition(null);
      }
    };
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)
        || hortBotPopupRef.current?.contains(target)
        || hortBotTriggerRef.current?.contains(target)) return;
      setIsHortBotOpen(false);
      setHortBotPosition(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [isHortBotOpen]);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const drag = hortBotDragRef.current;
      const popup = hortBotPopupRef.current;
      const container = popup?.parentElement;
      if (!drag || !popup || !container) return;

      const bounds = container.getBoundingClientRect();
      const popupBounds = popup.getBoundingClientRect();
      const left = Math.max(0, Math.min(
        bounds.width - popupBounds.width,
        drag.left + event.clientX - drag.pointerX,
      ));
      const top = Math.max(0, Math.min(
        bounds.height - popupBounds.height,
        drag.top + event.clientY - drag.pointerY,
      ));
      setHortBotPosition({ left, top });
    };
    const handlePointerUp = () => {
      hortBotDragRef.current = null;
    };
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, []);

  useEffect(() => {
    hortBotEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [hortBotMessages, isHortBotTyping]);

  useEffect(() => {
    setIsHortBotOpen(false);
    setHortBotMessages([]);
    setHortBotInput('');
    setHortBotError(null);
    setHortBotPosition(null);
  }, [practical?.id, activeManifest.id]);

  useEffect(() => {
    if (mode !== 'practical' || isSplitView) {
      setIsHortBotOpen(false);
      setHortBotPosition(null);
    }
  }, [mode, isSplitView]);

  useEffect(() => {
    if (!onMentorContextReady) return;
    onMentorContextReady(() => ({
      assistant: 'hortbot',
      courseId: practical?.courseId,
      courseTitle,
      module: practical?.module,
      chapter: practical?.chapter,
      practicalTitle: practical?.title || activeManifest.title,
      practicalInstructions: practical?.instructions || activeManifest.objective,
      practicalObjectives: practical?.objectives || [],
      practicalTeachingContext: practical?.teacher?.opening || practical?.narratorGuide || undefined,
      practicalTasks: (practical?.tasks || activeManifest.tasks).map((task) => ({
        title: task.title || 'Practical task',
        instruction: 'instruction' in task ? task.instruction : task.description,
        learningGoal: 'teaching' in task ? task.teaching?.learningGoal : undefined,
        teacherTalk: 'teaching' in task ? task.teaching?.teacherTalk : undefined,
        realWorldExample: 'teaching' in task ? task.teaching?.realWorldExample : undefined,
        questions: 'teaching' in task ? task.teaching?.questions : undefined,
        requiredConcepts: 'requiredConcepts' in task ? task.requiredConcepts : undefined,
      })),
      currentFile: activeFileName,
      currentCode: filesContent[activeFileName] || '',
      currentTaskIndex: Math.max(0, activeManifest.tasks.findIndex((task) => !completedTaskIds.includes(task.id))),
      completedTasks: completedTaskIds.length,
      totalTasks: activeManifest.tasks.length,
      page: 'practical test workspace',
    }));
    return () => onMentorContextReady(null);
  }, [onMentorContextReady, practical, courseTitle, activeManifest, activeFileName, filesContent, completedTaskIds]);

  // Sync active manifest when user filters by category
  useEffect(() => {
    if (generatedManifest?.id) setActiveManifestId(generatedManifest.id);
  }, [generatedManifest?.id]);

  useEffect(() => {
    if (!practical?.id) return;
    let cancelled = false;
    learningBoardsApi.getPracticalProgress(practical.id).then(({ attempts, taskProgress }) => {
      if (cancelled) return;
      const latest = attempts[0];
      if (latest?.files) {
        try {
          const restored = typeof latest.files === 'string' ? JSON.parse(latest.files) : latest.files;
          if (restored && typeof restored === 'object') setFilesContent((current) => ({ ...current, ...restored }));
        } catch { /* keep the starter files */ }
      }
      const restoredCompletedTaskIds = taskProgress
        .filter((item: { status?: string }) => item.status === 'completed')
        .map((item: { taskId: string }) => item.taskId);
      setCompletedTaskIds((current) => Array.from(new Set([...current, ...restoredCompletedTaskIds])));
    }).catch(() => { /* the local draft remains usable when offline */ });
    return () => { cancelled = true; };
  }, [practical?.id]);

  useEffect(() => {
    if (selectedCategory !== 'all' && activeManifest.categoryType !== selectedCategory) {
      const match = manifests.find((m) => m.categoryType === selectedCategory);
      if (match) {
        setActiveManifestId(match.id);
      }
    }
  }, [selectedCategory, activeManifest.categoryType, manifests]);

  // When manifest changes, restore from localStorage or initial
  useEffect(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}files_${activeManifestId}`);
      if (saved) {
        setFilesContent(JSON.parse(saved));
      } else {
        const initial: Record<string, string> = {};
        activeManifest.files.forEach((f) => {
          initial[f.name] = f.initialContent;
        });
        setFilesContent(initial);
      }
    } catch {
      const initial: Record<string, string> = {};
      activeManifest.files.forEach((f) => {
        initial[f.name] = f.initialContent;
      });
      setFilesContent(initial);
    }

    setActiveFileName(activeManifest.files[0]?.name || '');
    setCurrentTime(0);
    setCurrentSlideIndex(0);
    setIsPlaying(false);
    setCompletedTaskIds([]);
    setFeedbackMessage(null);
    setEvaluatorResult(null);
    setExecutedCommands([]);
    setSimulationPassed(false);
  }, [activeManifestId]);

  // Determine current walkthrough step based on timestamp or slide index
  const getStepIndexForTime = (time: number): number => {
    let index = 0;
    for (let i = 0; i < activeManifest.walkthroughSteps.length; i++) {
      if (time >= activeManifest.walkthroughSteps[i].timestamp) {
        index = i;
      }
    }
    return index;
  };

  const activeWalkthroughIndex = Math.max(0, currentSlideIndex > 0 ? currentSlideIndex - 1 : getStepIndexForTime(currentTime));
  const currentStep: WalkthroughStep =
    activeManifest.walkthroughSteps[activeWalkthroughIndex] || activeManifest.walkthroughSteps[0];

  // Web Speech API synthesis with persona voice tuning
  useEffect(() => {
    if (!('speechSynthesis' in window)) return;

    if (isPlaying && !isMuted) {
      window.speechSynthesis.cancel();
      const textToSpeak = currentSlideIndex === 0
        ? `${activeManifest.classroom.mainTitle}. ${activeManifest.classroom.subtitle} In this lesson: ${activeManifest.classroom.inThisLesson}`
        : currentStep?.narration;

      if (textToSpeak) {
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.rate = selectedInstructor.speechRate * playbackSpeed * 0.95;
        utterance.pitch = selectedInstructor.speechPitch;

        const voices = window.speechSynthesis.getVoices();
        const voice = voices.find((v) => {
          if (!v.lang.startsWith('en')) return false;
          if (selectedInstructor.voiceGender === 'female') {
            return (
              v.name.includes('Samantha') ||
              v.name.includes('Google') ||
              v.name.includes('Karen') ||
              v.name.includes('Zira')
            );
          } else {
            return v.name.includes('Daniel') || v.name.includes('David') || v.name.includes('Guy');
          }
        });
        if (voice) {
          utterance.voice = voice;
        }
        window.speechSynthesis.speak(utterance);
      }
    } else {
      window.speechSynthesis.cancel();
    }

    return () => {
      window.speechSynthesis.cancel();
    };
  }, [isPlaying, isMuted, currentSlideIndex, currentStep?.narration, playbackSpeed, selectedInstructor, activeManifest]);

  // Playback timer ticker
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentTime((prev) => {
        const next = prev + 0.5 * playbackSpeed;
        if (next >= activeManifest.durationSeconds) {
          setIsPlaying(false);
          return activeManifest.durationSeconds;
        }

        // Synchronize slide index with timestamps
        const stepIdx = getStepIndexForTime(next);
        if (stepIdx + 1 !== currentSlideIndex && currentSlideIndex > 0) {
          setCurrentSlideIndex(stepIdx + 1);
        }

        return next;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed, activeManifest, currentSlideIndex]);

  const handleSeek = (time: number) => {
    setCurrentTime(time);
    const stepIdx = getStepIndexForTime(time);
    setCurrentSlideIndex(stepIdx + 1);
  };

  const handleSelectStep = (slideIdx: number) => {
    setCurrentSlideIndex(slideIdx);
    if (slideIdx === 0) {
      setCurrentTime(0);
    } else {
      const targetStep = activeManifest.walkthroughSteps[slideIdx - 1];
      if (targetStep) {
        setCurrentTime(targetStep.timestamp);
      }
    }
  };

  const handlePrevSlide = () => {
    if (currentSlideIndex > 0) {
      handleSelectStep(currentSlideIndex - 1);
    }
  };

  const handleNextSlide = () => {
    const totalSlides = 1 + activeManifest.walkthroughSteps.length;
    if (currentSlideIndex < totalSlides - 1) {
      handleSelectStep(currentSlideIndex + 1);
    }
  };

  const handleResetFiles = () => {
    const initial: Record<string, string> = {};
    activeManifest.files.forEach((f) => {
      initial[f.name] = f.initialContent;
    });
    setFilesContent(initial);
    try {
      localStorage.removeItem(`${STORAGE_KEY_PREFIX}files_${activeManifestId}`);
    } catch {
      // ignore
    }
    setFeedbackMessage('Files reset to initial template state.');
    setEvaluatorResult(null);
    setTimeout(() => setFeedbackMessage(null), 3000);
  };

  const handleUpdateFileContent = (fileName: string, content: string) => {
    setFilesContent((prev) => {
      const updated = {
        ...prev,
        [fileName]: content,
      };
      try {
        localStorage.setItem(`${STORAGE_KEY_PREFIX}files_${activeManifestId}`, JSON.stringify(updated));
        const now = new Date();
        setLastSavedTimestamp(`${now.getHours()}:${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()}`);
      } catch {
        // ignore
      }
      if (practical?.id) {
        if (draftSaveTimer.current) clearTimeout(draftSaveTimer.current);
        draftSaveTimer.current = setTimeout(() => {
          void learningBoardsApi.recordPracticalAttempt(practical.id!, updated, 'in_progress', 'Draft saved from Practical Test.').catch(() => {});
        }, 900);
      }
      return updated;
    });
  };

  useEffect(() => () => {
    if (draftSaveTimer.current) clearTimeout(draftSaveTimer.current);
  }, []);

  const handleCommandRun = (command: string, output: string) => {
    setExecutedCommands((prev) => [...prev, command]);

    // Published practicals are graded from their generated checks on the
    // server. The legacy command-string milestones below are retained only
    // for the bundled demo manifests and must never affect a real attempt.
    if (practical?.id) return;

    if (command.includes('clang') || command.includes('gcc')) {
      if (!completedTaskIds.includes('task-c-compile')) {
        setCompletedTaskIds((prev) => [...prev, 'task-c-compile']);
      }
    }
    if (command.includes('./hello') || (command === 'hello' && activeManifest.type === 'c_program')) {
      if (!completedTaskIds.includes('task-c-run')) {
        setCompletedTaskIds((prev) => [...prev, 'task-c-run']);
      }
    }
    if (command.includes('import this')) {
      if (!completedTaskIds.includes('task-import-this')) {
        setCompletedTaskIds((prev) => [...prev, 'task-import-this']);
      }
    }
    if (command.startsWith('print(') && !command.includes('Hello, world!')) {
      if (!completedTaskIds.includes('task-print-custom')) {
        setCompletedTaskIds((prev) => [...prev, 'task-print-custom']);
      }
    }
    if (command.includes('*') || command.includes('+')) {
      if (!completedTaskIds.includes('task-run-expressions')) {
        setCompletedTaskIds((prev) => [...prev, 'task-run-expressions']);
      }
    }
    if (command.includes('aboutme.py')) {
      if (!completedTaskIds.includes('task-run-python-script')) {
        setCompletedTaskIds((prev) => [...prev, 'task-run-python-script']);
      }
    }
  };

  const handleSendHortBotMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = hortBotInput.trim();
    if (!message || isHortBotTyping) return;

    const userMessage: HortBotMessage = { sender: 'user', text: message };
    const history = [...hortBotMessages, userMessage];
    setHortBotMessages(history);
    setHortBotInput('');
    setHortBotError(null);
    setIsHortBotTyping(true);

    const currentTaskIndex = Math.max(
      0,
      activeManifest.tasks.findIndex((task) => !completedTaskIds.includes(task.id)),
    );
    const currentTask = activeManifest.tasks[currentTaskIndex];
    const practicalTask = practical?.tasks?.find((task) => task.id === currentTask?.id)
      || practical?.tasks?.[currentTaskIndex];
    const learningContext: ChatLearningContext = {
      assistant: 'hortbot',
      courseId: practical?.courseId,
      courseTitle: courseTitle || practical?.courseId || activeManifest.courseName,
      module: practical?.module,
      chapter: practical?.chapter,
      practicalTitle: practical?.title || activeManifest.title,
      practicalInstructions: practical?.instructions || activeManifest.objective,
      practicalObjectives: practical?.objectives || activeManifest.classroom.quickOrientation,
      practicalTeachingContext: practical?.teacher?.opening || practical?.narratorGuide || undefined,
      practicalTasks: activeManifest.tasks.map((task, index) => {
        const source = practical?.tasks?.find((item) => item.id === task.id) || practical?.tasks?.[index];
        return {
          title: task.title,
          instruction: source?.instruction || task.description,
          learningGoal: source?.teaching?.learningGoal,
          teacherTalk: source?.teaching?.teacherTalk,
          realWorldExample: source?.teaching?.realWorldExample,
          questions: source?.teaching?.questions,
          requiredConcepts: source?.requiredConcepts || (task.criteria ? [task.criteria] : []),
        };
      }),
      currentFile: activeFileName,
      currentCode: filesContent[activeFileName] || '',
      currentTaskTitle: currentTask?.title,
      currentTaskInstruction: practicalTask?.instruction || currentTask?.description,
      currentTaskGoal: practicalTask?.teaching?.learningGoal,
      currentTaskQuestions: practicalTask?.teaching?.questions,
      currentTaskConcepts: practicalTask?.requiredConcepts || (currentTask?.criteria ? [currentTask.criteria] : []),
      currentTaskIndex,
      completedTasks: completedTaskIds.length,
      totalTasks: activeManifest.tasks.length,
      hasErrors: /error|failed|unavailable/i.test(feedbackMessage || ''),
      lastCheckResult: feedbackMessage || undefined,
      lastOutput: feedbackMessage || undefined,
      page: 'practical mode',
    };

    try {
      const response = await chatApi.sendMessage(
        message,
        history,
        'tutor',
        'text',
        null,
        learningContext,
      );
      const reply = response.data?.reply;
      if (!response.success || !reply) {
        throw new Error(response.error || 'HortBot could not respond. Please try again.');
      }
      setHortBotMessages((previous) => [...previous, { sender: 'assistant', text: reply }]);
    } catch (error) {
      console.error('HortBot practical chat failed:', error);
      setHortBotError(error instanceof Error ? error.message : 'HortBot could not respond. Please try again.');
    } finally {
      setIsHortBotTyping(false);
    }
  };

  const handleHortBotDragStart = (event: React.PointerEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).closest('button')) return;
    const popup = hortBotPopupRef.current;
    const container = popup?.parentElement;
    if (!popup || !container) return;
    event.preventDefault();
    const popupBounds = popup.getBoundingClientRect();
    const containerBounds = container.getBoundingClientRect();
    const left = popupBounds.left - containerBounds.left;
    const top = popupBounds.top - containerBounds.top;
    hortBotDragRef.current = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      left,
      top,
    };
    setHortBotPosition({ left, top });
  };

  const handleCloseHortBot = () => {
    setIsHortBotOpen(false);
    setHortBotPosition(null);
  };

  const practicalHelpAction = (
    <button
      ref={hortBotTriggerRef}
      type="button"
      onClick={() => {
        if (isHortBotOpen) {
          setIsHortBotOpen(false);
          setHortBotPosition(null);
        } else {
          setIsHortBotOpen(true);
        }
      }}
      aria-label={isHortBotOpen ? 'Close HortBot practical help' : 'Open HortBot practical help'}
      aria-expanded={isHortBotOpen}
      aria-controls="practical-hortbot-popup"
      className="inline-flex items-center gap-1.5 rounded-lg border border-indigo-300 bg-white px-2.5 py-1.5 text-xs font-semibold text-indigo-900 shadow-sm transition hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75 motion-reduce:animate-none" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-rose-500" />
      </span>
      <Bot className="h-4 w-4" aria-hidden="true" />
      <span>HortBot</span>
    </button>
  );

  const handleSimulationCompleted = (passed: boolean) => {
    setSimulationPassed(passed);
    if (practical?.id) {
      if (passed) {
        setFeedbackMessage('All generated answers passed server verification.');
        void onComplete?.();
      }
      return;
    }
    if (passed) {
      if (activeManifest.id === 'algorithm-draft') {
        if (!completedTaskIds.includes('task-test-simulator')) {
          setCompletedTaskIds((prev) => [...prev, 'task-test-simulator']);
        }
      } else if (activeManifest.id === 'cloud-deploy') {
        if (!completedTaskIds.includes('task-cloud-deploy')) {
          setCompletedTaskIds((prev) => [...prev, 'task-cloud-deploy']);
        }
      }
    }
  };

  const handleBinaryAnswerGrade = async (taskId: string, answer: string): Promise<boolean | null> => {
    if (!practical?.id) return null;
    try {
      const result = await learningBoardsApi.gradePracticalAnswer(
        practical.id,
        practical.courseId || '',
        practical.module || 0,
        practical.chapter || 0,
        taskId,
        answer,
      );
      if (result.passed) {
        setCompletedTaskIds((previous) => previous.includes(taskId) ? previous : [...previous, taskId]);
      }
      return result.passed;
    } catch (error) {
      setFeedbackMessage(error instanceof Error ? error.message : 'The server could not grade this answer.');
      return null;
    }
  };

  // Automated Domain-Specific Evaluation for CS50 Syllabus Activities
  const handleCheckTasks = async () => {
    if (practical?.id) {
      setFeedbackMessage('Submitting this practical for server verification…');
      try {
        const isCodePractical = activeManifest.categoryType === 'terminal_coding';
        if (!isCodePractical) {
          await learningBoardsApi.recordPracticalAttempt(
            practical.id,
            filesContent,
            'submitted',
            'Submitted from Practical Test. This category is awaiting evidence-rubric grading.',
          );
          setFeedbackMessage('Submitted and saved. Server-side evidence grading is not enabled for this category yet.');
          setEvaluatorResult({
            score: 0,
            status: 'untested',
            domain: activeManifest.categoryType === 'cloud_console' ? 'cloud' : 'scenario',
            summary: 'Your work was saved as a submission, but this practical still requires a category-specific evidence grader.',
            findings: [{ id: 'f-evidence-pending', level: 'warn', category: activeManifest.category, title: 'Evidence review pending', detail: 'The submission is persisted, but it was not marked complete without a server rubric.', suggestedAction: 'Keep the submission and add the category evidence checks before enabling completion.' }],
            nextActions: ['Implement the category evidence rubric before unlocking completion.'],
          });
          return;
        }

        const result = await learningBoardsApi.gradePractical(
          practical.id,
          practical.courseId || '',
          practical.module || 0,
          practical.chapter || 0,
          filesContent,
          activeFileName,
          undefined,
        );
        const passedTaskIds = result.taskResults.filter((task) => task.passed).map((task) => task.taskId);
        setCompletedTaskIds(passedTaskIds);
        setEvaluatorResult({
          score: result.passed ? 100 : Math.round((result.checks.filter((check) => check.passed).length / Math.max(1, result.checks.length)) * 100),
          status: result.passed ? 'passed' : 'revision_needed',
          domain: 'c_program',
          summary: result.passed ? 'Server-side verification passed.' : 'Server-side verification found work to revise.',
          findings: result.checks.map((check) => ({ id: check.checkId, level: check.passed ? 'pass' : 'fail', category: check.type, title: check.passed ? 'Check passed' : 'Check needs revision', detail: check.message, suggestedAction: check.passed ? 'Continue to the next task.' : 'Review the task and resubmit.' })),
          nextActions: result.passed ? [] : ['Review the failed checks and submit again.'],
        });
        setFeedbackMessage(result.passed ? 'Verified by the server. Practical completed.' : 'Saved and graded by the server. Revise the failed checks.');
        if (result.passed) await onComplete?.();
      } catch (error) {
        setFeedbackMessage(error instanceof Error ? error.message : 'The server could not grade this practical.');
      }
      return;
    }

    const newlyCompleted: string[] = [...completedTaskIds];
    const findings: DiagnosticFinding[] = [];
    const nextActions: string[] = [];
    let score = 100;
    let domain: DomainEvaluatorResult['domain'] = 'c_program';

    if (activeManifest.categoryType === 'cloud_console') {
      domain = 'cloud';
      activeManifest.tasks.forEach((t) => {
        if (!newlyCompleted.includes(t.id)) newlyCompleted.push(t.id);
      });
      findings.push({
        id: 'f-cloud-eval-pass',
        level: 'pass',
        category: 'Cloud Infrastructure',
        title: 'Cloud Resources Configured & Bound',
        detail: `${activeManifest.title} verified across VPC, Elastic IP, Cloud Disks, and CloudMonitor alarms.`,
        suggestedAction: 'Review topology map and telemetry thresholds.',
      });
    } else if (activeManifest.categoryType === 'scenario_design') {
      domain = 'scenario';
      activeManifest.tasks.forEach((t) => {
        if (!newlyCompleted.includes(t.id)) newlyCompleted.push(t.id);
      });
      findings.push({
        id: 'f-scenario-eval-pass',
        level: 'pass',
        category: 'Agile & Product Design',
        title: 'Scenario Specification Validated',
        detail: `${activeManifest.title} satisfied timeboxing, role alignment, and rubric criteria.`,
        suggestedAction: 'Export markdown specification.',
      });
    } else if (activeManifest.categoryType === 'research_analysis') {
      domain = 'scenario';
      activeManifest.tasks.forEach((t) => {
        if (!newlyCompleted.includes(t.id)) newlyCompleted.push(t.id);
      });
      findings.push({
        id: 'f-research-eval-pass',
        level: 'pass',
        category: 'Empirical Research & Synthesis',
        title: 'Empirical Findings & Calculations Verified',
        detail: `${activeManifest.title} verified against empirical datasheets and analytical models.`,
        suggestedAction: 'Inspect conclusion takeaways in the notebook.',
      });
    } else if (activeManifest.id === 'c-linux-first-program' || activeManifest.id === 'ch1-2-hello') {
      domain = 'c_program';
      const cCode = filesContent['hello.c'] || '';
      const hasInclude = cCode.includes('#include <stdio.h>');
      const hasPrintf = cCode.includes('printf');

      if (hasInclude && hasPrintf) {
        if (!newlyCompleted.includes('task-c-write')) newlyCompleted.push('task-c-write');
        findings.push({
          id: 'f-c-syntax-pass',
          level: 'pass',
          category: 'C Syntax & Header',
          title: 'C Source Code Syntactically Valid',
          detail: 'hello.c correctly imports <stdio.h> and declares main with printf.',
          suggestedAction: 'Compile the source using clang hello.c -o hello.',
        });
      } else {
        score -= 30;
        findings.push({
          id: 'f-c-syntax-fail',
          level: 'fail',
          category: 'C Syntax & Header',
          title: 'Missing C Header or printf Function',
          detail: 'hello.c must contain #include <stdio.h> and a valid main function calling printf.',
          suggestedAction: 'Ensure hello.c has #include <stdio.h> and printf("hello, world\\n");',
        });
      }

      if (!newlyCompleted.includes('task-c-compile')) newlyCompleted.push('task-c-compile');
      if (!newlyCompleted.includes('task-c-run')) newlyCompleted.push('task-c-run');
      findings.push({
        id: 'f-c-compile-pass',
        level: 'pass',
        category: 'Compiler Pipeline',
        title: 'Clang Compilation Verified',
        detail: 'clang compiled hello.c without syntax errors and generated the output binary.',
        suggestedAction: 'Run the executable via ./hello.',
      });
    } else if (activeManifest.id === 'ch1-1-binary') {
      domain = 'scenario';
      const challengeText = filesContent['binary_challenge.txt'] || '';
      const has26 = challengeText.includes('26');
      const has11011 = challengeText.includes('11011');
      const has64 = challengeText.includes('64');

      if (has26 || has11011 || has64) {
        if (!newlyCompleted.includes('task-bin-edit')) newlyCompleted.push('task-bin-edit');
        findings.push({
          id: 'f-bin-conversions-pass',
          level: 'pass',
          category: 'Binary Computation',
          title: 'Binary Number Conversion Verified',
          detail: 'binary_challenge.txt contains valid base-2 to base-10 numerical representations.',
          suggestedAction: 'Review positional powers of 2 (1, 2, 4, 8, 16, 32).',
        });
      } else {
        score -= 25;
        findings.push({
          id: 'f-bin-conversions-hint',
          level: 'warn',
          category: 'Binary Computation',
          title: 'Binary Conversion Incomplete',
          detail: 'Write your answers for binary 11010 (26) or decimal 27 (11011) in binary_challenge.txt.',
          suggestedAction: 'Edit binary_challenge.txt with decimal and binary answers.',
        });
      }

      if (!newlyCompleted.includes('task-bin-verify')) newlyCompleted.push('task-bin-verify');
      findings.push({
        id: 'f-bin-verify-pass',
        level: 'pass',
        category: 'Logic Evaluation',
        title: 'Binary Representation Evaluated',
        detail: 'Hardware bit states mapped to computational integers.',
        suggestedAction: 'Proceed to Module 1 Chapter 1.2.',
      });
    } else if (activeManifest.id === 'ch1-2-hello' || activeManifest.id === 'c-hello-world') {
      domain = 'c_program';
      const cCode = filesContent['hello.c'] || '';
      const hasInclude = cCode.includes('#include <stdio.h>');
      const hasPrintf = cCode.includes('printf');

      if (hasInclude && hasPrintf) {
        if (!newlyCompleted.includes('task-c-write')) newlyCompleted.push('task-c-write');
        findings.push({
          id: 'f-c-syntax-pass',
          level: 'pass',
          category: 'C Syntax & Header',
          title: 'C Source Code Syntactically Valid',
          detail: 'hello.c correctly imports <stdio.h> and declares main with printf.',
          suggestedAction: 'Compile the source using clang hello.c -o hello.',
        });
      } else {
        score -= 30;
        findings.push({
          id: 'f-c-syntax-fail',
          level: 'fail',
          category: 'C Syntax & Header',
          title: 'Missing C Header or printf Function',
          detail: 'hello.c must contain #include <stdio.h> and a valid main function calling printf.',
          suggestedAction: 'Ensure hello.c has #include <stdio.h> and printf("hello, world\\n");',
        });
        nextActions.push('Open hello.c and verify the #include and main functions.');
      }

      const hasCompiled = executedCommands.some((c) => c.includes('clang hello.c') || c.includes('gcc hello.c'));
      if (hasCompiled) {
        if (!newlyCompleted.includes('task-c-compile')) newlyCompleted.push('task-c-compile');
        findings.push({
          id: 'f-c-compile-pass',
          level: 'pass',
          category: 'Compiler Pipeline',
          title: 'Clang Compilation Verified',
          detail: 'clang compiled hello.c without syntax errors and generated the output binary.',
          suggestedAction: 'Run the executable via ./hello.',
        });
      } else {
        score -= 25;
        findings.push({
          id: 'f-c-compile-missing',
          level: 'warn',
          category: 'Compiler Pipeline',
          title: 'Compilation Pending',
          detail: 'Compile your C program by typing: clang hello.c -o hello in the terminal.',
          suggestedAction: 'Execute: clang hello.c -o hello in the terminal.',
        });
        nextActions.push('Type clang hello.c -o hello in the terminal.');
      }

      const hasRun = executedCommands.some((c) => c.includes('./hello') || c === 'hello');
      if (hasRun) {
        if (!newlyCompleted.includes('task-c-run')) newlyCompleted.push('task-c-run');
        findings.push({
          id: 'f-c-run-pass',
          level: 'pass',
          category: 'Program Execution',
          title: 'Executable Executed Successfully',
          detail: 'Output "hello, world" verified in standard output stream.',
          suggestedAction: 'Review exit code 0.',
        });
      } else {
        score -= 25;
        findings.push({
          id: 'f-c-run-missing',
          level: 'warn',
          category: 'Program Execution',
          title: 'Binary Execution Pending',
          detail: 'Execute your compiled binary by running: ./hello in the terminal.',
          suggestedAction: 'Execute: ./hello in the terminal.',
        });
        nextActions.push('Type ./hello in the terminal to view program output.');
      }
    } else if (activeManifest.id === 'ch1-3-calculator' || activeManifest.id === 'c-calculator') {
      domain = 'c_program';
      const calcCode = filesContent['calculator.c'] || '';
      const hasFloatCast = calcCode.includes('(float)');
      const hasScanf = calcCode.includes('scanf') && calcCode.includes('&');

      if (hasFloatCast && hasScanf) {
        if (!newlyCompleted.includes('task-calc-write')) newlyCompleted.push('task-calc-write');
        findings.push({
          id: 'f-calc-write-pass',
          level: 'pass',
          category: 'Type Casting & scanf',
          title: 'Explicit Float Type Cast Verified',
          detail: 'calculator.c correctly casts integer division with (float)num1 / num2 and uses & address operator.',
          suggestedAction: 'Compile with clang calculator.c -o calculator.',
        });
      } else {
        score -= 30;
        findings.push({
          id: 'f-calc-write-fail',
          level: 'fail',
          category: 'Type Casting',
          title: 'Missing Type Cast or & in scanf',
          detail: 'Use (float)num1 / num2 to avoid integer division truncation.',
          suggestedAction: 'Add (float) casting before num1 in the division line.',
        });
      }

      const hasCompiled = executedCommands.some((c) => c.includes('calculator.c'));
      if (hasCompiled) {
        if (!newlyCompleted.includes('task-calc-compile')) newlyCompleted.push('task-calc-compile');
      }

      const hasRun = executedCommands.some((c) => c.includes('./calculator') || c === 'calculator');
      if (hasRun) {
        if (!newlyCompleted.includes('task-calc-run')) newlyCompleted.push('task-calc-run');
      }
    } else if (activeManifest.id === 'ch2-1-pointers') {
      domain = 'c_program';
      const ptrCode = filesContent['pointers.c'] || '';
      const hasMalloc = ptrCode.includes('malloc') && ptrCode.includes('sizeof');
      const hasFree = ptrCode.includes('free(');

      if (hasMalloc && hasFree) {
        if (!newlyCompleted.includes('task-ptr-check')) newlyCompleted.push('task-ptr-check');
        findings.push({
          id: 'f-ptr-pass',
          level: 'pass',
          category: 'Memory Management',
          title: 'malloc & free Pairs Verified',
          detail: 'Dynamic memory allocated with sizeof(int) and explicitly released with free().',
          suggestedAction: 'Execute: clang pointers.c -o pointers && ./pointers.',
        });
      } else {
        score -= 30;
        findings.push({
          id: 'f-ptr-fail',
          level: 'fail',
          category: 'Memory Safety',
          title: 'Unpaired Dynamic Allocation',
          detail: 'Every malloc() call must be paired with free() to prevent memory leaks.',
          suggestedAction: 'Add free(grades); at the end of main().',
        });
      }

      const hasCompiled = executedCommands.some((c) => c.includes('pointers.c'));
      if (hasCompiled) {
        if (!newlyCompleted.includes('task-ptr-compile')) newlyCompleted.push('task-ptr-compile');
      }

      const hasRun = executedCommands.some((c) => c.includes('./pointers') || c === 'pointers');
      if (hasRun) {
        if (!newlyCompleted.includes('task-ptr-run')) newlyCompleted.push('task-ptr-run');
      }
    } else if (activeManifest.id === 'ch2-2-structs') {
      domain = 'c_program';
      const structCode = filesContent['structs.c'] || '';
      const hasStruct = structCode.includes('typedef struct') || structCode.includes('struct Student');
      const hasFile = structCode.includes('fopen') && structCode.includes('fclose');

      if (hasStruct && hasFile) {
        if (!newlyCompleted.includes('task-struct-code')) newlyCompleted.push('task-struct-code');
        findings.push({
          id: 'f-struct-pass',
          level: 'pass',
          category: 'Structures & File I/O',
          title: 'Struct & File Handles Verified',
          detail: 'Student struct defined and file stream safely managed with fopen/fclose.',
          suggestedAction: 'Compile with clang structs.c -o structs.',
        });
      }

      const hasCompiled = executedCommands.some((c) => c.includes('structs.c'));
      if (hasCompiled) {
        if (!newlyCompleted.includes('task-struct-compile')) newlyCompleted.push('task-struct-compile');
      }

      const hasRun = executedCommands.some((c) => c.includes('./structs') || c === 'structs');
      if (hasRun) {
        if (!newlyCompleted.includes('task-struct-run')) newlyCompleted.push('task-struct-run');
      }
    } else if (activeManifest.id === 'ch3-2-sorting') {
      domain = 'algorithm';
      const sortCode = filesContent['bubble_sort.c'] || '';
      const hasSwap = sortCode.includes('temp') && sortCode.includes('arr[');

      if (hasSwap) {
        if (!newlyCompleted.includes('task-sort-code')) newlyCompleted.push('task-sort-code');
        findings.push({
          id: 'f-sort-code-pass',
          level: 'pass',
          category: 'Sorting Algorithm',
          title: 'Bubble Sort In-Place Swapping Verified',
          detail: 'Array comparison and temp variable swapping implemented correctly.',
          suggestedAction: 'Run visualization or compile bubble_sort.c.',
        });
      }

      const hasCompiled = executedCommands.some((c) => c.includes('bubble_sort.c'));
      if (hasCompiled) {
        if (!newlyCompleted.includes('task-sort-compile')) newlyCompleted.push('task-sort-compile');
      }

      const hasRun = executedCommands.some((c) => c.includes('./bubble_sort') || c === 'bubble_sort') || simulationPassed;
      if (hasRun) {
        if (!newlyCompleted.includes('task-sort-run')) newlyCompleted.push('task-sort-run');
      }
    } else if (activeManifest.id === 'ch3-3-binary-search' || activeManifest.id === 'binary-search') {
      domain = 'algorithm';
      const bsCode = filesContent['binary_search.c'] || '';
      const hasMid = bsCode.includes('mid') && (bsCode.includes('(high - low) / 2') || bsCode.includes('(low + high) / 2'));

      if (hasMid) {
        if (!newlyCompleted.includes('task-bs-code')) newlyCompleted.push('task-bs-code');
        findings.push({
          id: 'f-bs-code-pass',
          level: 'pass',
          category: 'Divide & Conquer Logic',
          title: 'Binary Search Midpoint Verified',
          detail: 'binary_search.c implements midpoint computation and boundary updates.',
          suggestedAction: 'Run binary search trace in simulation.',
        });
      }

      const hasCompiled = executedCommands.some((c) => c.includes('binary_search.c'));
      if (hasCompiled) {
        if (!newlyCompleted.includes('task-bs-compile')) newlyCompleted.push('task-bs-compile');
      }

      const hasRun = executedCommands.some((c) => c.includes('./binary_search') || c === 'binary_search') || simulationPassed;
      if (hasRun) {
        if (!newlyCompleted.includes('task-bs-run')) newlyCompleted.push('task-bs-run');
      }
    } else if (activeManifest.id === 'ch4-1-python-repl' || activeManifest.id === 'python-repl') {
      domain = 'repl';
      const hasPrint = executedCommands.some((c) => c.startsWith('print('));
      if (hasPrint) {
        if (!newlyCompleted.includes('task-print-custom')) newlyCompleted.push('task-print-custom');
      }

      const hasExpr = executedCommands.some((c) => c.includes('*') || c.includes('/'));
      if (hasExpr) {
        if (!newlyCompleted.includes('task-run-expressions')) newlyCompleted.push('task-run-expressions');
      }

      const hasImport = executedCommands.some((c) => c.includes('import this'));
      if (hasImport) {
        if (!newlyCompleted.includes('task-import-this')) newlyCompleted.push('task-import-this');
      }
    } else if (activeManifest.id === 'ch5-2-sql-queries' || activeManifest.id === 'sql-queries') {
      domain = 'script';
      const hasSelect = executedCommands.some((c) => c.toUpperCase().includes('SELECT'));
      if (hasSelect) {
        if (!newlyCompleted.includes('task-sql-projection')) newlyCompleted.push('task-sql-projection');
      }

      const hasWhere = executedCommands.some((c) => c.toUpperCase().includes('WHERE'));
      if (hasWhere) {
        if (!newlyCompleted.includes('task-sql-filter')) newlyCompleted.push('task-sql-filter');
      }
    }

    setCompletedTaskIds(newlyCompleted);
    const finalScore = Math.max(0, score);
    const isSuccess = finalScore >= 75;

    const result: DomainEvaluatorResult = {
      score: finalScore,
      status: isSuccess ? 'passed' : 'revision_needed',
      domain,
      summary: isSuccess
        ? `🌟 Excellent! Evaluator score: ${finalScore}/100. All primary constraints and milestones verified successfully.`
        : `⚠️ Verification score: ${finalScore}/100. Complete remaining terminal actions to achieve 100%.`,
      findings,
      nextActions,
    };

    setEvaluatorResult(result);
    setFeedbackMessage(
      isSuccess
        ? `🌟 Verified! All ${newlyCompleted.length} of ${activeManifest.tasks.length} practical milestones completed successfully!`
        : `Progress: ${newlyCompleted.length} of ${activeManifest.tasks.length} verified.`
    );
  };

  return (
    <div className="practical-test-experience-root relative h-full min-h-0 w-full min-w-0 overflow-hidden bg-slate-100 text-slate-800 flex flex-col">
      <div className="w-full h-full min-h-0 min-w-0 bg-slate-50 flex flex-col overflow-hidden">
        {/* Top Window Navigation */}
        <TopNav
          manifests={manifests}
          activeManifestId={activeManifestId}
          onSelectManifest={(id) => setActiveManifestId(id)}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          mode={mode}
          onToggleMode={() => setMode(mode === 'teach' ? 'practical' : 'teach')}
          onResetFiles={handleResetFiles}
          isSplitView={isSplitView}
          onToggleSplitView={() => {
            setIsSplitView(!isSplitView);
            if (!isSplitView) setMode('practical');
          }}
        />

        {/* View Mode Router */}
        {mode === 'teach' && !isSplitView ? (
          /* TEACH MODE SCREEN: Exact 16:9 HD Classroom View from image_10250715.png */
          <ClassroomTeachView
            manifest={activeManifest}
            currentStepIndex={currentSlideIndex}
            currentTime={currentTime}
            isPlaying={isPlaying}
            isMuted={isMuted}
            playbackSpeed={playbackSpeed}
            instructor={selectedInstructor}
            onTogglePlay={() => setIsPlaying(!isPlaying)}
            onReplay={() => {
              setCurrentTime(0);
              setCurrentSlideIndex(0);
              setIsPlaying(true);
            }}
            onToggleMute={() => setIsMuted(!isMuted)}
            onSeek={handleSeek}
            onSelectStep={handleSelectStep}
            onPrevSlide={handlePrevSlide}
            onNextSlide={handleNextSlide}
            onOpenWorkspace={() => setMode('practical')}
          />
        ) : (
          /* PRACTICE / SPLIT VIEW: Full Workspace with Editor, Terminal, Milestones */
          <div className="flex-1 flex gap-3 p-3 overflow-hidden min-h-0">
            {/* Workspace File Tree Sidebar */}
            <WorkspaceSidebar
              files={activeManifest.files}
              activeFileName={activeFileName}
              onSelectFile={(f) => setActiveFileName(f)}
              objective={activeManifest.objective}
              tasks={activeManifest.tasks}
              completedTaskIds={completedTaskIds}
              mode={mode}
              onSwitchMode={(m) => setMode(m)}
            />

            {/* Content Center */}
            <div className="flex-1 flex flex-col min-h-0 min-w-0 overflow-hidden">
              {isSplitView ? (
                /* Resizable Split Layout: Classroom Walkthrough + Workspace */
                <ResizableSplitLayout
                  leftContent={
                    <div className="h-full pr-1.5 flex flex-col min-h-0 overflow-hidden">
                      <WalkthroughPanel
                        lessonLabel={activeManifest.lessonLabel}
                        category={activeManifest.category}
                        step={currentStep}
                        totalSteps={activeManifest.walkthroughSteps.length}
                        onSelectStep={(idx) => handleSelectStep(idx + 1)}
                        onJoinPractical={() => {
                          setIsSplitView(false);
                          setMode('practical');
                        }}
                        onNextStep={handleNextSlide}
                        isLastStep={currentSlideIndex === activeManifest.walkthroughSteps.length}
                        isSpeaking={isPlaying}
                        isMuted={isMuted}
                        onToggleMute={() => setIsMuted(!isMuted)}
                        instructor={selectedInstructor}
                        onOpenInstructorModal={() => setIsInstructorModalOpen(true)}
                      />
                    </div>
                  }
                  rightContent={
                    <div className="h-full pl-1.5 flex flex-col gap-3 min-h-0 overflow-y-auto">
                      {evaluatorResult && (
                        <StructuredFeedbackCard
                          evaluatorResult={evaluatorResult}
                          onClose={() => setEvaluatorResult(null)}
                        />
                      )}

                      <div className="min-h-[340px] flex-1">
                        <PracticalWorkspace
                          manifest={activeManifest}
                          activeFileName={activeFileName}
                          filesContent={filesContent}
                          onUpdateFileContent={handleUpdateFileContent}
                          onCommandRun={handleCommandRun}
                          onSimulationCompleted={handleSimulationCompleted}
                          onBinaryAnswerGrade={practical?.id ? handleBinaryAnswerGrade : undefined}
                          lastSavedTimestamp={lastSavedTimestamp}
                        />
                      </div>

                      <MissionAndMilestonePanel
                        manifest={activeManifest}
                        completedTaskIds={completedTaskIds}
                        onCheckTasks={handleCheckTasks}
                        feedbackMessage={feedbackMessage}
                        evaluatorScore={evaluatorResult?.score}
                      />
                    </div>
                  }
                />
              ) : (
                /* Single View: Compact Practical Workspace (Zero Scrolling) */
                <div className="h-full flex flex-col gap-2 min-h-0 overflow-hidden">
                  {/* Practical Workspace: Fills full available screen height */}
                  <div className="flex-1 min-h-0 overflow-hidden">
                    <PracticalWorkspace
                      manifest={activeManifest}
                      activeFileName={activeFileName}
                      filesContent={filesContent}
                      onUpdateFileContent={handleUpdateFileContent}
                      onCommandRun={handleCommandRun}
                      onSimulationCompleted={handleSimulationCompleted}
                      onBinaryAnswerGrade={practical?.id ? handleBinaryAnswerGrade : undefined}
                      lastSavedTimestamp={lastSavedTimestamp}
                    />
                  </div>

                  {/* High-Readability Docked Milestones Bar (Zero scrolling) */}
                  <div className="px-3 py-1.5 bg-white rounded-xl border border-slate-200/90 shadow-2xs flex items-center justify-between gap-3 shrink-0 select-none">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-[10px] uppercase font-mono font-bold text-slate-400 shrink-0">
                        Milestones:
                      </span>
                      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                        {activeManifest.tasks.map((task, idx) => {
                          const isDone = completedTaskIds.includes(task.id);
                          return (
                            <span
                              key={task.id}
                              className={`text-[11px] font-mono px-2 py-0.5 rounded-md flex items-center gap-1.5 shrink-0 transition-colors ${
                                isDone
                                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold'
                                  : 'bg-slate-100 text-slate-700 border border-slate-200 font-medium'
                              }`}
                              title={task.description}
                            >
                              <span className="font-bold">{isDone ? '✓' : `Step ${idx + 1}`}</span>
                              <span className="truncate max-w-[160px]">{task.title}</span>
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {feedbackMessage && (
                        <span className="hidden md:inline text-[11px] font-mono text-emerald-700 bg-emerald-50/80 px-2 py-0.5 rounded border border-emerald-200 truncate max-w-[280px]">
                          {feedbackMessage}
                        </span>
                      )}

                      {evaluatorResult && (
                        <span
                          className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md border ${
                            evaluatorResult.score >= 75
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                              : 'bg-amber-50 text-amber-800 border-amber-300'
                          }`}
                        >
                          Score: {evaluatorResult.score}/100
                        </span>
                      )}

                      <button
                        onClick={handleCheckTasks}
                        className="px-3 py-1 rounded-lg text-xs font-bold font-mono bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xs transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Verify Tasks</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Bottom Playback Scrubber Control Bar (Only shown in Practice/Split view, ClassroomTeachView has its own native scrubber bar matching image_10250715.png) */}
        {mode === 'practical' && !isSplitView && (
          <PlaybackControlBar
            currentTime={currentTime}
            durationSeconds={activeManifest.durationSeconds}
            isPlaying={isPlaying}
            onTogglePlay={() => setIsPlaying(!isPlaying)}
            onReplay={() => {
              setCurrentTime(0);
              setIsPlaying(true);
            }}
            onSeek={handleSeek}
            mode={mode}
            onToggleMode={() => setMode('teach')}
            isSpeaking={isPlaying}
            isMuted={isMuted}
            onToggleMute={() => setIsMuted(!isMuted)}
            activityLabel={`PRACTICAL WORKSPACE: ${activeManifest.title}`}
            playbackSpeed={playbackSpeed}
            onChangeSpeed={(s) => setPlaybackSpeed(s)}
            practicalHelpAction={practicalHelpAction}
          />
        )}

        {mode === 'practical' && !isSplitView && isHortBotOpen && (
          <div className="pointer-events-none absolute inset-0 z-40">
                <aside
                  ref={hortBotPopupRef}
                  id="practical-hortbot-popup"
                  role="dialog"
                  aria-labelledby="practical-hortbot-title"
                  className="pointer-events-auto absolute flex flex-col overflow-hidden rounded-xl border border-slate-300 bg-white shadow-2xl"
                  style={{
                    ...(hortBotPosition
                      ? { left: hortBotPosition.left, top: hortBotPosition.top }
                      : { right: 16, bottom: 76 }),
                    width: 'min(420px, calc(100vw - 24px))',
                    height: 'min(520px, calc(100vh - 100px))',
                    minWidth: 'min(300px, calc(100vw - 24px))',
                    minHeight: 300,
                    maxWidth: 'calc(100% - 16px)',
                    maxHeight: 'calc(100% - 84px)',
                    resize: 'both',
                  }}
                >
                  <header
                    onPointerDown={handleHortBotDragStart}
                    className="flex shrink-0 cursor-grab touch-none items-center justify-between border-b border-slate-200 bg-indigo-50/70 px-4 py-3 active:cursor-grabbing"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
                        <Bot className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <h2 id="practical-hortbot-title" className="text-sm font-bold text-slate-900">HortBot</h2>
                        <p className="text-[11px] text-slate-600">Practical learning assistant</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleCloseHortBot}
                      aria-label="Close HortBot"
                      className="rounded-md p-2 text-slate-500 transition hover:bg-white hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                    >
                      <X className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </header>

                  <div aria-live="polite" className="flex-1 space-y-3 overflow-y-auto p-4">
                    <p className="max-w-[92%] rounded-xl bg-slate-100 p-3 text-sm leading-relaxed text-slate-700">
                      Hi, I’m HortBot. I can help with this practical and your current task. Ask me about the instructions, your approach, or a check result.
                    </p>
                    {hortBotMessages.map((message, index) => (
                      <p
                        key={`${message.sender}-${index}`}
                        className={`max-w-[92%] whitespace-pre-wrap rounded-xl p-3 text-sm leading-relaxed ${
                          message.sender === 'user'
                            ? 'ml-auto bg-indigo-600 text-white'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {message.text}
                      </p>
                    ))}
                    {isHortBotTyping && (
                      <p className="text-xs text-slate-500" role="status">HortBot is thinking…</p>
                    )}
                    {hortBotError && (
                      <p className="rounded-lg bg-rose-50 p-3 text-xs text-rose-700" role="alert">{hortBotError}</p>
                    )}
                    <div ref={hortBotEndRef} />
                  </div>

                  <form onSubmit={(event) => void handleSendHortBotMessage(event)} className="flex gap-2 border-t border-slate-200 p-3">
                    <label className="sr-only" htmlFor="practical-hortbot-input">Ask HortBot about this practical</label>
                    <input
                      ref={hortBotInputRef}
                      id="practical-hortbot-input"
                      value={hortBotInput}
                      onChange={(event) => setHortBotInput(event.target.value)}
                      placeholder="Ask about your practical…"
                      disabled={isHortBotTyping}
                      className="min-w-0 flex-1 rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 disabled:bg-slate-50"
                    />
                    <button
                      type="submit"
                      disabled={isHortBotTyping || !hortBotInput.trim()}
                      aria-label="Send message to HortBot"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <Send className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </form>
                </aside>
          </div>
        )}
      </div>

      {/* Instructor Persona Modal */}
      {isInstructorModalOpen && (
        <InstructorPersonaModal
          selectedPersonaId={selectedInstructor.id}
          onSelectPersona={(persona) => {
            setSelectedInstructor(persona);
            setIsInstructorModalOpen(false);
          }}
          onClose={() => setIsInstructorModalOpen(false)}
        />
      )}
    </div>
  );
}
