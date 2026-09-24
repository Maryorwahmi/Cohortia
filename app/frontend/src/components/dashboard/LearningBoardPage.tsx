import { useState, useEffect, useRef } from "react";
import { 
  Play, Pause, RotateCw, Volume2, VolumeX, Maximize2, 
  ChevronRight, ChevronDown, CheckCircle, Lock, BookOpen, 
  Clock, Sparkles, Send, Paperclip, FileText, List, Sliders, 
  ArrowLeft, ArrowRight, MessageSquare,
  HelpCircle, Monitor, Layers, Video, X
} from "lucide-react";
import { UserPreferences, CohortTrackId } from "../../types";
import { TRACK_CURRICULA, DashboardMilestone, DashboardLesson } from "../../data/dashboardData";
import { CPP_LESSONS_DETAILS } from "../../data/cppLessonsData";
import InteractiveSandbox from "./InteractiveSandbox";
import AnimatedCodeAlongPlayer from "./AnimatedCodeAlongPlayer";
import AssessmentEngine from "./AssessmentEngine";
import { chatApi } from "../../services/api";
import LessonScenePlayer from "./LessonScenePlayer";
import ManifestLessonPlayer from "./ManifestLessonPlayer";
import { generateGenericScenes } from "../../lib/lessonSceneGenerator";
import AutoSlidePlayer from "../generated/AutoSlidePlayer";
import UnderstandingGenerativeAI from "../generated/UnderstandingGenerativeAI";
import ImmersiveChapterViewer from "../immersive/ImmersiveChapterViewer";
import type { ImmersiveAssessment, ImmersiveChapterManifest } from "../immersive/ImmersiveChapterViewer";
import VisionBoardViewer from "../VisionBoardViewer";
import type { VisionBoardManifest, VisionScreen } from "../VisionBoardViewer";
import type { CourseManifest, ManifestChapter } from "../../lib/courseManifest";
import { learningBoardsApi } from "../../services/learningBoardsApi";
import type { LearningBoardProgress } from "../../services/learningBoardsApi";
import ChapterCompletionPrompt from "../assessments/ChapterCompletionPrompt";

interface LearningBoardPageProps {
  userProfile: UserPreferences;
  onUpdateProfile: (profile: UserPreferences) => void;
  onChangePage: (page: string) => void;
  theme: "dark" | "light";
  isSidebarCollapsed: boolean;
  onToggleSidebar: () => void;
  curriculum?: DashboardMilestone[];
  initialLessonId?: string;
  lessonContent?: Record<string, CustomLessonDetails>;
  courseId?: string;
  courseTitle?: string;
  courseLessons?: Record<string, string>;
  manifest?: CourseManifest | null;
  manifestLessonMap?: Record<string, ManifestChapter>;
  onCompleteLesson?: (lessonId: string) => void | Promise<void>;
}

// Custom interfaces for Lesson Content
interface SlideItem {
  number: number;
  title: string;
  points: string[];
}

function normalizeAssessmentSource(assessment: unknown): ImmersiveAssessment | null {
  if (!assessment || typeof assessment !== "object") return null;

  const maybeAssessment = assessment as {
    questions?: unknown;
    passingScore?: unknown;
  };
  if (!Array.isArray(maybeAssessment.questions) || maybeAssessment.questions.length === 0) return null;

  const questions = maybeAssessment.questions
    .map((question, index) => {
      if (!question || typeof question !== "object") return null;
      const q = question as {
        id?: unknown;
        type?: unknown;
        question?: unknown;
      options?: unknown;
      correctOption?: unknown;
      answer?: unknown;
      explanation?: unknown;
      language?: unknown;
      code?: unknown;
      expectedOutput?: unknown;
    };

      const options = Array.isArray(q.options) ? q.options.map((option) => String(option)) : [];
      const questionText = String(q.question || "").trim();
      if (!questionText) return null;

      if (q.type === "code-challenge") {
        return {
          id: typeof q.id === "number" ? q.id : index + 1,
          type: "code-challenge" as const,
          question: questionText,
          language: typeof q.language === "string" ? q.language : null,
          code: typeof q.code === "string" ? q.code : null,
          explanation: String(q.explanation || "Review the chapter content and submit your solution.").trim(),
        };
      }

      if (q.type === "code-output" || q.type === "code") {
        return {
          id: typeof q.id === "number" ? q.id : index + 1,
          type: "code-output" as const,
          question: questionText,
          language: typeof q.language === "string" ? q.language : "text",
          code: typeof q.code === "string" ? q.code : "",
          expectedOutput: typeof q.expectedOutput === "string" ? q.expectedOutput : "",
          explanation: String(q.explanation || "Review the code and compare your reasoning with the expected output.").trim(),
        };
      }

      let correctOption = typeof q.correctOption === "number" ? q.correctOption : -1;
      if (correctOption < 0 && typeof q.answer === "string") {
        const answerText = q.answer.trim().toLowerCase();
        const optionIndex = options.findIndex((option) => option.trim().toLowerCase() === answerText);
        if (optionIndex >= 0) {
          correctOption = optionIndex;
        } else {
          const letterIndex = answerText.length === 1 ? answerText.charCodeAt(0) - 97 : Number.parseInt(answerText, 10) - 1;
          if (Number.isFinite(letterIndex) && letterIndex >= 0) {
            correctOption = letterIndex;
          }
        }
      }

      if (options.length < 2 || correctOption < 0) {
        return {
          id: typeof q.id === "number" ? q.id : index + 1,
          type: "case-study" as const,
          question: questionText,
          explanation: String(q.explanation || "Review the chapter content and submit your response.").trim(),
        };
      }

      return {
        id: typeof q.id === "number" ? q.id : index + 1,
        type: "multiple-choice" as const,
        question: questionText,
        options,
        correctOption,
        explanation: String(q.explanation || "").trim(),
      };
    })
    .filter((question): question is NonNullable<typeof question> => question !== null);

  if (questions.length === 0) return null;

  return {
    passingScore: typeof maybeAssessment.passingScore === "number" ? maybeAssessment.passingScore : 70,
    questions,
  };
}

export interface CustomLessonDetails {
  summary: {
    overview: string;
    objectives: string[];
    takeaways: string[];
  };
  slides: SlideItem[];
  transcript: {
    time: string;
    speaker: string;
    text: string;
  }[];
}

// Helper to generate real-time live simulations for different tracks
function getSimulatedCode(trackId: string, title: string, progress: number): { code: string; terminal: string[]; files: string[]; rightTitle: string } {
  let codeStr = "";
  let termLines: string[] = [];
  let files: string[] = [];
  let rightTitle = "Output Monitor";

  if (trackId === "cpp") {
    files = ["src/main.cpp", "include/SystemAsset.h", "CMakeLists.txt", "include/DerivedEngine.h"];
    rightTitle = "g++ Compiler Console";
    const fullCode = title.includes("Destructors") 
      ? `#include <iostream>\n#include <memory>\n\nclass SystemAsset {\npublic:\n    virtual ~SystemAsset() {\n        std::cout << "[BASE] Safe vtable destructor\\n";\n    }\n};\n\nclass LowLatencyAsset : public SystemAsset {\n    int* buffer;\npublic:\n    LowLatencyAsset() {\n        buffer = new int[512];\n    }\n    ~LowLatencyAsset() override {\n        delete[] buffer;\n        std::cout << "[DERIVED] Cleaned block storage\\n";\n    }\n};\n\nint main() {\n    std::unique_ptr<SystemAsset> item = std::make_unique<LowLatencyAsset>();\n    return 0;\n}`
      : title.includes("Templates") || title.includes("Traits")
      ? `#include <iostream>\n#include <type_traits>\n\ntemplate <typename T>\nclass SafetyInspector {\npublic:\n    void audit() {\n        if constexpr (std::is_polymorphic_v<T>) {\n            std::cout << "Polymorphic layout vptr OK\\n";\n        } else {\n            std::cout << "Standard layout POD OK\\n";\n        }\n    }\n};\n\nclass LegacySystem {};\n\nint main() {\n    SafetyInspector<LegacySystem> inspector;\n    inspector.audit();\n    return 0;\n}`
      : `#include <iostream>\n\nclass BaseSystem {\nprotected:\n    int coreRegister = 8192;\npublic:\n    virtual void process() {\n        std::cout << "Processing base systems\\n";\n    }\n};\n\nclass ChildSystem : public BaseSystem {\npublic:\n    void process() override {\n        std::cout << "Processing low-latency: " << coreRegister << "\\n";\n    }\n};\n\nint main() {\n    BaseSystem* device = new ChildSystem();\n    device->process();\n    delete device;\n    return 0;\n}`;

    if (progress < 25) {
      codeStr = "// Initializing Workspace...\n// Press PLAY to start compilation and telemetry.";
      termLines = [
        "Preparing compiler environment...",
        "Flags: -std=c++20 -O3 -Wall -Wextra",
        "Target: x86_64-pc-linux-gnu",
        "System: READY."
      ];
    } else if (progress >= 25 && progress < 75) {
      const typeProgress = (progress - 25) / 50;
      const charsToShow = Math.floor(fullCode.length * typeProgress);
      codeStr = fullCode.slice(0, charsToShow) + "█";
      
      termLines = ["$ g++ -std=c++20 main.cpp -o app"];
      if (typeProgress > 0.2) termLines.push("[INFO] Resolving lexical symbols & dependencies...");
      if (typeProgress > 0.4) termLines.push("[INFO] Allocating virtual table pointers (vptr)...");
      if (typeProgress > 0.6) termLines.push("[INFO] Linking shared standard headers...");
      if (typeProgress > 0.8) {
        termLines.push("$ ./app");
        termLines.push(title.includes("Destructors") ? "[BASE] Safe vtable destructor" : "[DERIVED] Cleaned block storage");
      }
    } else {
      codeStr = fullCode;
      termLines = [
        "$ g++ -std=c++20 main.cpp -o app",
        "[INFO] Resolving lexical symbols & dependencies... Done",
        "[INFO] Allocating virtual table pointers (vptr)... Done",
        "[INFO] Linking shared standard headers... Done",
        "$ ./app",
        title.includes("Destructors") ? "[BASE] Safe vtable destructor" : "[DERIVED] Cleaned block storage",
        "[EXEC] Execution exited successfully with code 0."
      ];
    }
  } else if (trackId === "frontend") {
    files = ["src/App.tsx", "src/types.ts", "package.json", "tailwind.config.js"];
    rightTitle = "Vite Browser Preview";
    const fullCode = `import React, { useState } from 'react';\nimport { Sparkles } from 'lucide-react';\n\nexport default function SandboxApp() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div className="p-6 bg-slate-950 border border-white/5 rounded-2xl space-y-4 text-center">\n      <h3 className="text-sm font-bold text-white tracking-tight">Telemetry Grid Interface</h3>\n      <p className="text-xs text-slate-400">Interactive live components verified.</p>\n      <button \n        onClick={() => setCount(c => c + 1)}\n        className="px-4 py-2 bg-[#FF4B3E] hover:bg-[#FF4B3E]/80 text-white font-bold text-xs rounded-xl shadow-lg shadow-[#FF4B3E]/20 transition-all"\n      >\n        Trigger Pulse: {count}\n      </button>\n    </div>\n  );\n}`;

    if (progress < 25) {
      codeStr = "// Connecting local dev server...\n// Press PLAY to build and start server.";
      termLines = [
        "Vite v6.0.2 ready.",
        "Server listening on http://localhost:3000",
        "HMR disabled (Using native container routing)"
      ];
    } else if (progress >= 25 && progress < 75) {
      const typeProgress = (progress - 25) / 50;
      const charsToShow = Math.floor(fullCode.length * typeProgress);
      codeStr = fullCode.slice(0, charsToShow) + "█";
      termLines = ["$ npm run build"];
      if (typeProgress > 0.3) termLines.push("vite v6.0.2 building for production...");
      if (typeProgress > 0.6) termLines.push("✓ 142 modules transformed.");
      if (typeProgress > 0.8) {
        termLines.push("dist/assets/index-c2a819.js  148.24 kB");
        termLines.push("✓ built successfully in 0.35s.");
      }
    } else {
      codeStr = fullCode;
      termLines = [
        "$ npm run build",
        "vite v6.0.2 building for production...",
        "✓ 142 modules transformed.",
        "dist/assets/index-c2a819.js  148.24 kB",
        "✓ built successfully in 0.35s.",
        "Production server running on port 3000."
      ];
    }
  } else if (trackId === "analytics") {
    files = ["main.py", "requirements.txt", "data/telemetry_logs.csv", "analytics_report.ipynb"];
    rightTitle = "Pandas DataFrame Console";
    const fullCode = `import pandas as pd\nimport numpy as np\n\n# Load clean telemetry cohort logs\ndf = pd.read_csv('data/telemetry_logs.csv')\nprint("Raw records:", len(df))\n\n# Filter active cohorts & calculate ROAS coefficients\ndf['LTV'] = df['contract_value'] * df['duration_months']\ndf['ROAS'] = df['ltv_revenue'] / df['cac_spend']\n\n# Group summary telemetry bounds\nsummary = df.groupby('track_cohort').agg({\n    'LTV': 'mean',\n    'ROAS': 'max',\n    'cac_spend': 'sum'\n})\nprint(summary.head())`;

    if (progress < 25) {
      codeStr = "# Setting up Python virtual environment...\n# Press PLAY to execute data groupings.";
      termLines = [
        "Python 3.11.4 VirtualEnv Active.",
        "Packages found: pandas, numpy, scikit-learn, matplotlib",
        "Environment: READY."
      ];
    } else if (progress >= 25 && progress < 75) {
      const typeProgress = (progress - 25) / 50;
      const charsToShow = Math.floor(fullCode.length * typeProgress);
      codeStr = fullCode.slice(0, charsToShow) + "█";
      termLines = ["$ python main.py"];
      if (typeProgress > 0.3) termLines.push("Reading records from telemetry_logs.csv...");
      if (typeProgress > 0.6) termLines.push("Loaded 1,840 records successfully.");
      if (typeProgress > 0.8) {
        termLines.push("Executing retention cohort groupings...");
        termLines.push("ROAS Coefficient calculated: 4.82x");
      }
    } else {
      codeStr = fullCode;
      termLines = [
        "$ python main.py",
        "Reading records from telemetry_logs.csv... Done",
        "Loaded 1,840 records successfully. (0.02s)",
        "Executing retention cohort groupings... Done",
        "ROAS Coefficient calculated: 4.82x",
        "Output: Growth cohort verified successfully."
      ];
    }
  } else {
    files = ["specs/ProductBrief.md", "backlog/JiraSprint.json", "roadmap/Milestones.md"];
    rightTitle = "Workspace Kanban Board";
    const fullCode = `# COHORTIA ENTERPRISE REQUIREMENTS BRIEF\n\n## 1. Executive Summary\nBuilding scalable interface systems for telemetry feedback loops.\n\n## 2. Technical Scope\n- Implement 12-column responsive layout grids.\n- Leverage local storage for study scratchpads.\n- Connect client-side inputs to secure server proxies.\n\n## 3. Sprint Timelines & KPIs\n- Cohort Verification: Sprint 01 (Status: COMPLETED)\n- Workspace Sandbox: Sprint 02 (Status: ACTIVE)\n- Live Certification: Sprint 03 (Status: IN_QUEUE)`;

    if (progress < 25) {
      codeStr = "# Initializing product brief template...\n# Press PLAY to generate backlog milestones.";
      termLines = [
        "SaaS Competitor Matrix: LOADED.",
        "Sprint points estimated (Total: 65pts).",
        "Projected milestones: OK."
      ];
    } else if (progress >= 25 && progress < 75) {
      const typeProgress = (progress - 25) / 50;
      const charsToShow = Math.floor(fullCode.length * typeProgress);
      codeStr = fullCode.slice(0, charsToShow) + "█";
      termLines = ["Indexing Product Specification Documents..."];
      if (typeProgress > 0.3) termLines.push("Processing Section 1: Executive Summary...");
      if (typeProgress > 0.6) termLines.push("Generating Section 2: Technical Scope...");
      if (typeProgress > 0.8) termLines.push("Finalizing Section 3: Agile Backlog Matrix...");
    } else {
      codeStr = fullCode;
      termLines = [
        "Indexing Product Specification Documents... Done",
        "Processing Section 1: Executive Summary... Done",
        "Generating Section 2: Technical Scope... Done",
        "Finalizing Section 3: Agile Backlog Matrix... Done",
        "Status: Growth specification certified."
      ];
    }
  }

  return { code: codeStr, terminal: termLines, files, rightTitle };
}

export default function LearningBoardPage({ 
  userProfile, 
  onUpdateProfile, 
  onChangePage,
  theme,
  isSidebarCollapsed,
  onToggleSidebar,
  curriculum: curriculumProp,
  initialLessonId,
  lessonContent,
  courseLessons,
  courseId,
  courseTitle,
  manifest,
  manifestLessonMap,
  onCompleteLesson
}: LearningBoardPageProps) {
  const activeTrackId = (userProfile.track || "frontend") as CohortTrackId;
  const fallbackCurriculum = TRACK_CURRICULA[activeTrackId] || TRACK_CURRICULA.frontend;
  const curriculum = curriculumProp?.length ? curriculumProp : fallbackCurriculum;

  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    return userProfile.completedSteps || ["fe_l1", "de_l1", "pm_l1", "da_l1"];
  });

  const [selectedLesson, setSelectedLesson] = useState<DashboardLesson>(() => {
    const allLessons = curriculum.flatMap((milestone) => milestone.lessons);
    if (initialLessonId) {
      const found = allLessons.find((lesson) => lesson.id === initialLessonId);
      if (found) return found;
    }
    return allLessons.find((lesson) => !completedLessons.includes(lesson.id)) || allLessons[0];
  });

  // Active Milestone index
  const activeMilestoneIndex = curriculum.findIndex(milestone => 
    milestone.lessons.some(l => l.id === selectedLesson.id)
  ) ?? 0;

  // Collapsed states for milestones in the sidebar
  const [expandedMilestones, setExpandedMilestones] = useState<Record<string, boolean>>(() => {
    const states: Record<string, boolean> = {};
    curriculum.forEach((m, idx) => {
      // Expand the active milestone by default
      states[m.id] = idx === activeMilestoneIndex;
    });
    return states;
  });

  // Active visual layout mode: "video" | "practical" | "assessment" | "complete"
  const [viewerMode, setViewerMode] = useState<"video" | "practical" | "assessment" | "complete">("video");
  const [practicalCompleted, setPracticalCompleted] = useState(false);
  // Start practical mode in the manifest-backed workspace. Learners can still
  // switch to the guided simulation when they want a walkthrough first.
  const [showPracticalSimulation, setShowPracticalSimulation] = useState(false);
  
  // Fetch the imported chapter whenever either viewer needs it. Practical mode
  // must not depend on read-mode having been opened first.
  const [devPreviewEnabled, setDevPreviewEnabled] = useState(true);
  const [devPreviewLoading, setDevPreviewLoading] = useState(false);
  const [devPreviewError, setDevPreviewError] = useState<string | null>(null);
  const [generatedPreview, setGeneratedPreview] = useState<ImmersiveChapterManifest | null>(null);
  const [chapterProgress, setChapterProgress] = useState<LearningBoardProgress | null>(null);
  const [showChapterAssessment, setShowChapterAssessment] = useState(false);
  const [showCompletionPrompt, setShowCompletionPrompt] = useState(false);
  
  // Get actual course ID from localStorage (set by OverviewPage when user clicks a chapter)
  // Falls back to track ID if localStorage doesn't have a course ID
  const getPreviewCourseId = (): string => {
    if (typeof window === 'undefined') return courseId || '';
    try {
      const selected = JSON.parse(localStorage.getItem('cohortia_active_learning_board_chapter') || 'null');
      if (selected?.courseId) return selected.courseId;
    } catch {
      // Fall through to default
    }
    return courseId || '';
  };
  const previewCourseId = getPreviewCourseId();
  
  const [previewModule, setPreviewModule] = useState<string>(() => {
    if (typeof window === 'undefined') return '01';
    try {
      const selected = JSON.parse(localStorage.getItem('cohortia_active_learning_board_chapter') || 'null');
      return Number.isFinite(Number(selected.module))
        ? String(selected.module).padStart(2, '0')
        : '01';
    } catch {
      return '01';
    }
  });
  const [previewChapter, setPreviewChapter] = useState<string>(() => {
    if (typeof window === 'undefined') return '01';
    try {
      const selected = JSON.parse(localStorage.getItem('cohortia_active_learning_board_chapter') || 'null');
      return Number.isFinite(Number(selected.chapter))
        ? String(selected.chapter).padStart(2, '0')
        : '01';
    } catch {
      return '01';
    }
  });
  // Course-level catalog discovered from the learning-board database API.
  const [courseCatalog, setCourseCatalog] = useState<{
    course?: string;
    courseId?: string;
    modules?: { module: number; chapters?: { chapter: number; manifest: string; title?: string }[] }[];
  } | null>(null);

  // Vision boards: module/chapter selector state
  interface VisionBoardChapter {
    chapter: number;
    title: string;
    screens: VisionScreen[];
  }
  interface VisionBoardModule {
    module: number;
    title: string;
    chapters: VisionBoardChapter[];
  }
  interface VisionBoardCourse {
    courseId: string;
    course: string;
    modules: VisionBoardModule[];
  }
  interface VisionBoardsCatalog {
    generatedAt: string;
    courses: VisionBoardCourse[];
  }
  const [visionBoardsCatalog, setVisionBoardsCatalog] = useState<VisionBoardsCatalog | null>(null);
  const [selectedVisionCourseId, setSelectedVisionCourseId] = useState<string | null>(null);
  const [selectedVisionModuleIndex, setSelectedVisionModuleIndex] = useState(0);
  const [selectedVisionChapterIndex, setSelectedVisionChapterIndex] = useState(0);

  const selectedVisionCourse = visionBoardsCatalog?.courses.find((c) => c.courseId === selectedVisionCourseId);
  const selectedVisionModule = selectedVisionCourse?.modules[selectedVisionModuleIndex];
  const selectedVisionChapter = selectedVisionModule?.chapters[selectedVisionChapterIndex];
  const selectedVisionManifest: VisionBoardManifest | null = selectedVisionChapter
    ? {
        course: selectedVisionCourse!.course,
        courseId: selectedVisionCourse!.courseId,
        generatedAt: visionBoardsCatalog!.generatedAt,
        screens: selectedVisionChapter.screens,
      }
    : null;

  useEffect(() => {
    if (!previewCourseId || (!devPreviewEnabled && viewerMode !== "practical")) return;

    let cancelled = false;

    const loadPreview = async () => {
      setDevPreviewLoading(true);
      setDevPreviewError(null);

      try {
        const { course, chapters } = await learningBoardsApi.getCourseChapters(previewCourseId);
        const modules = Array.from(new Set(chapters.map((chapter) => chapter.module)))
          .sort((a, b) => a - b)
          .map((module) => ({
            module,
            chapters: chapters
              .filter((chapter) => chapter.module === module)
              .sort((a, b) => a.chapter - b.chapter)
              .map((chapter) => ({ chapter: chapter.chapter, title: chapter.chapterTitle, manifest: '' })),
          }));

        if (cancelled) return;
        setCourseCatalog({ course: course.course, courseId: course.courseId, modules });

        const requestedChapter = chapters.find(
          (chapter) => chapter.module === Number(previewModule) && chapter.chapter === Number(previewChapter)
        ) || chapters[0];
        if (!requestedChapter) throw new Error(`Course "${previewCourseId}" has no imported chapters.`);

        const chapterData = await learningBoardsApi.getChapter(
          previewCourseId,
          requestedChapter.module,
          requestedChapter.chapter
        );
        if (cancelled) return;

        if (requestedChapter.module !== Number(previewModule)) setPreviewModule(String(requestedChapter.module).padStart(2, '0'));
        if (requestedChapter.chapter !== Number(previewChapter)) setPreviewChapter(String(requestedChapter.chapter).padStart(2, '0'));
        setGeneratedPreview({
          course: chapterData.course,
          courseId: chapterData.courseId,
          module: chapterData.module,
          chapter: chapterData.chapter,
          unitTitle: chapterData.chapterTitle,
          screens: chapterData.screens,
          practical: chapterData.practical,
          assessment: chapterData.assessment,
          learningObjectives: chapterData.learningObjectives,
          keyConcepts: chapterData.keyConcepts,
          handsOn: chapterData.handsOn,
          fullNarratorScript: chapterData.screens
            .map((screen) => screen.narration?.text || screen.narratorSegment || '')
            .filter(Boolean)
            .join('\n\n'),
          generatedAt: new Date().toISOString(),
        });
        setShowChapterAssessment(false);
        setVisionBoardsCatalog(null);
      } catch (err) {
        if (cancelled) return;
        setDevPreviewError(err instanceof Error ? err.message : 'Failed to load learning board from the database');
        setVisionBoardsCatalog(null);
        setGeneratedPreview(null);
      } finally {
        if (!cancelled) {
          setDevPreviewLoading(false);
        }
      }
    };

    loadPreview();

    return () => {
      cancelled = true;
    };
  }, [devPreviewEnabled, viewerMode, previewCourseId, previewModule, previewChapter]);

  // Keep the exact course/chapter available to the standalone mentor page.
  useEffect(() => {
    if (typeof window === "undefined" || !generatedPreview) return;
    localStorage.setItem("cohortia_active_learning_context", JSON.stringify({
      courseId: generatedPreview.courseId,
      courseTitle: generatedPreview.course,
      module: generatedPreview.module,
      chapter: generatedPreview.chapter,
      chapterTitle: generatedPreview.unitTitle,
    }));
  }, [generatedPreview]);
  
  // Collapsed state for the slide-out curriculum drawer (default closed)
  const [isCurriculumCollapsed, setIsCurriculumCollapsed] = useState(true);
  
  // Active detail tab: "summary" | "notes"
  const [activeTab, setActiveTab] = useState<"summary" | "notes">("summary");

  // Notes are persisted as one editable record per database chapter.
  const [notes, setNotes] = useState<string>("");
  const [notesStatus, setNotesStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const notesSaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const studySaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Playhead updated by LessonScenePlayer
  const [currentTime, setCurrentTime] = useState(0);

  // Slide state
  const [activeSlide, setActiveSlide] = useState(0);

  // AI Mentor overlay chat state
  const [isAiMentorOpen, setIsAiMentorOpen] = useState(false);
  const [mentorMessages, setMentorMessages] = useState<{ sender: "user" | "advisor"; text: string; timestamp: string }[]>([]);
  const [mentorInput, setMentorInput] = useState("");
  const [isMentorTyping, setIsMentorTyping] = useState(false);
  const mentorChatEndRef = useRef<HTMLDivElement>(null);

  // Load the persisted chapter state whenever the database chapter changes.
  useEffect(() => {
    setCurrentTime(0);
    setActiveSlide(0);
    setNotes("");
    setNotesStatus("idle");
  }, [selectedLesson.id]);

  useEffect(() => {
    if (!generatedPreview || !courseId) return;
    let cancelled = false;
    setChapterProgress(null);
    learningBoardsApi.getProgress(courseId, generatedPreview.module, generatedPreview.chapter)
      .then((stored) => {
        if (cancelled) return;
        setChapterProgress(stored);
        setNotes(stored?.notes || "");
      })
      .catch(() => {
        if (!cancelled) setNotesStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, [courseId, generatedPreview?.module, generatedPreview?.chapter]);

  useEffect(() => () => {
    if (notesSaveTimer.current) clearTimeout(notesSaveTimer.current);
    if (studySaveTimer.current) clearTimeout(studySaveTimer.current);
  }, []);

  // Auto-scroll AI Mentor chat to bottom
  useEffect(() => {
    if (isAiMentorOpen) {
      mentorChatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [mentorMessages, isMentorTyping, isAiMentorOpen]);

  // Initialize first message in Mentor side panel
  useEffect(() => {
    setMentorMessages([
      {
        sender: "advisor",
        text: `Hey ${userProfile.name}! ✦ I'm your on-demand tutor. I see you are studying **"${selectedLesson.title}"** inside Module ${activeMilestoneIndex + 1}.\n\nHow can I help you digest this content, outline the coding exercise, or explain anything you find tricky?`,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      }
    ]);
  }, [selectedLesson, isAiMentorOpen]);

  const persistChapterProgress = async (update: Parameters<typeof learningBoardsApi.updateProgress>[3]) => {
    if (!courseId || !generatedPreview) return;
    const result = await learningBoardsApi.updateProgress(
      courseId,
      generatedPreview.module,
      generatedPreview.chapter,
      { lessonId: selectedLesson.id, ...update },
    );
    setChapterProgress(result.progress);
    if (result.completed && !completedLessons.includes(selectedLesson.id)) {
      const updated = [...completedLessons, selectedLesson.id];
      setCompletedLessons(updated);
      onUpdateProfile({ ...userProfile, completedSteps: updated });
      await onCompleteLesson?.(selectedLesson.id);
    }
  };

  const toggleCompleteState = async () => {
    if (chapterProgress?.explicitComplete || completedLessons.includes(selectedLesson.id)) return;
    try {
      await persistChapterProgress({ explicitComplete: true });
    } catch {
      setNotesStatus("error");
    }
  };

  const handleChapterWatched = async () => {
    try {
      await persistChapterProgress({ watched: true });
      // Auto-advance to practical mode after chapter is watched
      setViewerMode("practical");
    } catch {
      setNotesStatus("error");
    }
  };

  const handlePracticalCompleted = async () => {
    try {
      setPracticalCompleted(true);
      // Auto-advance to assessment after practical is completed
      await persistChapterProgress({ watched: true, practicalsComplete: true });
      setViewerMode("assessment");
    } catch {
      setNotesStatus("error");
    }
  };

  const handleAssessmentSubmitted = async (score: number) => {
    try {
      // Persist the grade, but keep the result screen visible so the learner
      // can retake the assessment or return to the course syllabus.
      const assessmentPassed = score >= 50;
      await persistChapterProgress({
        watched: true,
        practicalsComplete: true,
        explicitComplete: assessmentPassed,
        assessmentPassed: assessmentPassed,
        score,
      });
    } catch {
      setNotesStatus("error");
    }
  };

  const handleTimeUpdate = (time: number) => {
    setCurrentTime(time);
    if (!courseId || !generatedPreview || time <= 0) return;
    if (studySaveTimer.current) clearTimeout(studySaveTimer.current);
    studySaveTimer.current = setTimeout(() => {
      persistChapterProgress({ studySeconds: time }).catch(() => {});
    }, 1000);
  };

  const handleContinueInternalAssessment = () => {
    setShowCompletionPrompt(false);
    if (practicalCompleted) {
      setViewerMode("assessment");
    } else {
      // Practical must be completed first
      setViewerMode("practical");
    }
  };

  const handleNavigateExternalAssessment = () => {
    setShowCompletionPrompt(false);
    // Extract module and chapter numbers from selected lesson ID
    const match = selectedLesson.id.match(/-m(\d+)-c(\d+)-lesson$/);
    if (match && courseId) {
      const module = parseInt(match[1], 10);
      const chapter = parseInt(match[2], 10);
      window.location.href = `/assessments/${courseId}/${module}/${chapter}`;
    }
  };

  const getMilestoneState = (milestoneIndex: number) => {
    if (milestoneIndex === 0) return "active";
    const prevMilestone = curriculum[milestoneIndex - 1];
    const prevDone = prevMilestone.lessons.every(l => completedLessons.includes(l.id));
    return prevDone ? "active" : "locked";
  };

  const handleLessonSelect = (lesson: DashboardLesson, mIdx: number) => {
    if (getMilestoneState(mIdx) === "locked") return; // Prevent selection of locked lesson paths
    setSelectedLesson(lesson);
  };

  // Nav helpers for next / prev lesson
  const flatLessonsList = curriculum.reduce<{ lesson: DashboardLesson; mIdx: number }[]>((acc, m, mIdx) => {
    m.lessons.forEach(l => acc.push({ lesson: l, mIdx }));
    return acc;
  }, []);

  const activeFlatIndex = flatLessonsList.findIndex(item => item.lesson.id === selectedLesson.id);

  const handleNextLesson = () => {
    if (activeFlatIndex < flatLessonsList.length - 1) {
      const nextItem = flatLessonsList[activeFlatIndex + 1];
      if (getMilestoneState(nextItem.mIdx) !== "locked") {
        setSelectedLesson(nextItem.lesson);
      }
    }
  };

  const handlePrevLesson = () => {
    if (activeFlatIndex > 0) {
      setSelectedLesson(flatLessonsList[activeFlatIndex - 1].lesson);
    }
  };

  const handleNotesChange = (value: string) => {
    setNotes(value);
    if (!courseId || !generatedPreview) return;
    if (notesSaveTimer.current) clearTimeout(notesSaveTimer.current);
    setNotesStatus("saving");
    notesSaveTimer.current = setTimeout(() => {
      persistChapterProgress({ notes: value })
        .then(() => setNotesStatus("saved"))
        .catch(() => setNotesStatus("error"));
    }, 500);
  };

  // Simulated AI Chat
  const handleSendMentorMessage = async (msgText: string) => {
    if (!msgText.trim()) return;

    const userMsg = {
      sender: "user" as const,
      text: msgText,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMentorMessages(prev => [...prev, userMsg]);
    setMentorInput("");
    setIsMentorTyping(true);

    try {
      const history = [...mentorMessages, userMsg].map(m => ({
        sender: m.sender,
        text: m.text
      }));

      const response = await chatApi.sendMessage(
        userMsg.text,
        history,
        "tutor",
        "text",
        activeTrackId,
        {
          courseId,
          courseTitle,
          moduleTitle: curriculum[activeMilestoneIndex]?.title,
          lessonTitle: selectedLesson.title,
          lessonContent: courseLessons?.[selectedLesson.id],
        }
      );

      const reply = response.success && response.data?.reply
        ? response.data.reply
        : "Sure, let's explore that coding concept deeply together.";

      const responseMsg = {
        sender: "advisor" as const,
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };
      setMentorMessages(prev => [...prev, responseMsg]);
    } catch (err) {
      console.error(err);
      setMentorMessages(prev => [...prev, {
        sender: "advisor" as const,
        text: "Apologies, I hit a slight connection glitch. Ask me again!",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      }]);
    } finally {
      setIsMentorTyping(false);
    }
  };

  // Generate beautiful customized lesson content based on track/lesson details
  const details = lessonContent?.[selectedLesson.id] || getLessonDetails(selectedLesson, activeTrackId);
  const manifestChapter = manifestLessonMap?.[selectedLesson.id];
  const manifestAssessment = normalizeAssessmentSource(manifestChapter?.assessment);
  const previewAssessment = normalizeAssessmentSource(generatedPreview?.assessment);
  const activePractical = generatedPreview?.practical || null;
  // The database chapter loaded into generatedPreview is the source of truth
  // after read mode advances to practical mode.
  const activeAssessment = previewAssessment || manifestAssessment;
  const boardCourseTitle = generatedPreview?.course || courseCatalog?.course ||
    (previewCourseId && previewCourseId !== courseId
      ? previewCourseId.replace(/(^|-)([a-z])/g, (_match, separator, letter) => `${separator}${letter.toUpperCase()}`)
      : courseTitle);
  const boardModule = generatedPreview?.module ?? Number.parseInt(previewModule, 10);
  const boardChapter = generatedPreview?.chapter ?? Number.parseInt(previewChapter, 10);
  const boardChapterCount = courseCatalog?.modules?.reduce(
    (total, module) => total + (module.chapters?.length || 0),
    0,
  ) || 0;
  const boardChapterPosition = courseCatalog?.modules?.reduce((position, module) => {
    if (module.module < boardModule) return position + (module.chapters?.length || 0);
    if (module.module === boardModule) {
      const chapterIndex = module.chapters?.findIndex((chapter) => chapter.chapter === boardChapter) ?? -1;
      return position + (chapterIndex >= 0 ? chapterIndex + 1 : 0);
    }
    return position;
  }, 0) || 0;
  const boardChapterLabel = boardChapterPosition > 0 && boardChapterCount > 0
    ? `Chapter ${boardChapterPosition} of ${boardChapterCount}`
    : `Chapter ${String(boardChapter).padStart(2, "0")}`;
  const boardLocationLabel = `Module ${String(boardModule).padStart(2, "0")} • ${boardChapterLabel}`;
  const boardDisplayTitle = generatedPreview?.unitTitle || selectedLesson.title;
  const lessonCoordinates = selectedLesson.id.match(/-m(\d+)-c(\d+)-lesson$/);
  const assessmentContext = activeAssessment ? {
    courseId: generatedPreview?.courseId || previewCourseId || courseId || "",
    module: generatedPreview?.module || Number.parseInt(lessonCoordinates?.[1] || previewModule, 10),
    chapter: generatedPreview?.chapter || Number.parseInt(lessonCoordinates?.[2] || previewChapter, 10),
  } : undefined;

  // Time conversion
  const formatSec = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
        <div className="pt-20 pb-8 min-h-screen bg-immersive-bg relative text-left">
      {/* Glow backgrounds */}
      <div className="absolute top-4 right-10 w-[400px] h-[400px] bg-[#FF4B3E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="w-full mx-auto px-2 sm:px-3 lg:px-6">
        {/* Upper Track Summary header row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 sm:gap-4 mb-4 bg-immersive-card border border-immersive-border/60 p-3 sm:p-4 rounded-2xl sm:rounded-3xl">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#FF4B3E]/10 border border-[#FF4B3E]/20 rounded-2xl flex items-center justify-center text-[#FF4B3E]">
              <Video className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-extrabold text-immersive-secondary uppercase tracking-widest">
                IMMERSIVE STUDY BOARD
              </span>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-sans font-extrabold text-immersive-text-primary line-clamp-2">
                {boardCourseTitle || (activeTrackId === "frontend" ? "Frontend Engineering Hub" : 
                 activeTrackId === "design" ? "UI/UX Product Design Hub" : 
                 activeTrackId === "product" ? "Product Management Hub" : "Data Analytics Hub")}
              </h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-4 shrink-0 w-full md:w-auto bg-immersive-bg/50 border border-immersive-border p-2 sm:p-3 rounded-xl sm:rounded-2xl overflow-x-auto">
            <div className="text-right">
              <span className="text-[10px] font-mono font-bold text-immersive-text-secondary uppercase">
                YOUR CLASSROOM MILESTONES
              </span>
              <p className="text-sm font-extrabold text-immersive-text-primary">
                {boardLocationLabel}
              </p>
            </div>
            <div className="h-8 w-px bg-immersive-border" />
            <div className="flex items-center space-x-2">
              <button 
                onClick={onToggleSidebar}
                className={`p-2 bg-immersive-card hover:bg-immersive-card-hover border transition-all duration-200 rounded-xl text-xs font-bold text-immersive-text-primary cursor-pointer flex items-center justify-center hover:scale-105 active:scale-95 ${
                  isSidebarCollapsed ? "border-immersive-secondary text-immersive-secondary bg-immersive-secondary/5" : "border-immersive-border hover:border-immersive-secondary/35"
                }`}
                title={isSidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
              >
                <Sliders className="w-4 h-4" />
              </button>
              
              <button 
                onClick={() => setIsCurriculumCollapsed(!isCurriculumCollapsed)}
                className={`p-2 bg-immersive-card hover:bg-immersive-card-hover border transition-all duration-200 rounded-xl text-xs font-bold text-immersive-text-primary cursor-pointer flex items-center justify-center hover:scale-105 active:scale-95 ${
                  isCurriculumCollapsed ? "border-immersive-secondary text-immersive-secondary bg-immersive-secondary/5" : "border-immersive-border hover:border-immersive-secondary/35"
                }`}
                title={isCurriculumCollapsed ? "Expand Curriculum" : "Collapse Curriculum"}
              >
                <List className="w-4 h-4" />
              </button>

              <button 
                onClick={() => onChangePage("overview")}
                className="px-3 py-2 bg-immersive-card hover:bg-immersive-card-hover border border-immersive-border hover:border-immersive-secondary/30 rounded-xl text-xs font-bold text-immersive-text-primary transition-all cursor-pointer flex items-center space-x-1.5 hover:scale-105 active:scale-95"
                title="View Overview"
              >
                <span className="hidden sm:inline">Overview</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Master Workspace Layout */}
        <div className="relative">

          {/* Slide-out Curriculum Plan drawer (default closed) */}
          {!isCurriculumCollapsed && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 bg-black/50 z-30 transition-opacity duration-300"
                onClick={() => setIsCurriculumCollapsed(true)}
              />
              {/* Drawer */}
              <div className="fixed right-0 top-0 h-full w-80 z-40 transform transition-transform duration-300 translate-x-0">
                <div className="h-full bg-immersive-card/95 backdrop-blur-xl border-l border-white/10 flex flex-col overflow-hidden p-4">
              
              {/* Course Progress Indicator */}
              <div className="mb-4 pb-4 border-b border-immersive-border/60">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-immersive-secondary uppercase tracking-wider">
                    Course Progress
                  </span>
                  <span className="text-[10px] font-mono font-bold text-emerald-400">
                    {Math.round((completedLessons.length / Math.max(1, flatLessonsList.length)) * 100)}%
                  </span>
                </div>
                <div className="w-full h-2 rounded-full overflow-hidden bg-immersive-border/60">
                  <div
                    className="bg-emerald-400 h-full rounded-full transition-all duration-500 shadow-[0_0_8px_#34d399]"
                    style={{ width: `${Math.round((completedLessons.length / Math.max(1, flatLessonsList.length)) * 100)}%` }}
                  />
                </div>
                <p className="mt-2 text-[10px] font-mono text-immersive-text-secondary/80">
                  {completedLessons.length} of {flatLessonsList.length} lessons completed
                </p>
              </div>

              <div className="flex items-center justify-between pb-4 border-b border-immersive-border/60 mb-4">
                <span className="text-xs font-mono font-bold text-immersive-text-primary uppercase tracking-wider flex items-center gap-2">
                  <List className="w-4 h-4 text-[#FF4B3E]" />
                  <span>Curriculum Plan</span>
                </span>
                <button
                  onClick={() => setIsCurriculumCollapsed(true)}
                  className="p-1.5 rounded-lg border border-immersive-border hover:border-immersive-secondary/50 text-immersive-text-secondary hover:text-immersive-text-primary transition-all cursor-pointer"
                  title="Close curriculum"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Collapsible Milestone Sections */}
              <div className="flex-1 overflow-y-auto space-y-3.5 pr-1 scrollbar-thin">
                {curriculum.map((milestone, mIdx) => {
                  const isExpanded = !!expandedMilestones[milestone.id];
                  const mState = getMilestoneState(mIdx);
                  const isLocked = mState === "locked";
                  
                  // Calculate progress for this milestone
                  const mTotalLessons = milestone.lessons.length;
                  const mCompletedLessons = milestone.lessons.filter(l => completedLessons.includes(l.id)).length;
                  const mCompletionPercent = Math.round((mCompletedLessons / mTotalLessons) * 100);

                  return (
                    <div 
                      key={milestone.id} 
                      className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                        isLocked 
                          ? "border-immersive-border/20 bg-immersive-bg/10 opacity-50"
                          : activeMilestoneIndex === mIdx
                          ? "border-[#FF4B3E]/30 bg-immersive-bg/30"
                          : "border-immersive-border/80 bg-immersive-bg/40"
                      }`}
                    >
                      {/* Milestone Section Header */}
                      <button
                        disabled={isLocked}
                        onClick={() => setExpandedMilestones(prev => ({ ...prev, [milestone.id]: !prev[milestone.id] }))}
                        className={`w-full p-3.5 text-left flex items-center justify-between transition-all ${
                          isLocked ? "cursor-not-allowed" : "cursor-pointer hover:bg-immersive-card-hover"
                        }`}
                      >
                        <div className="space-y-1 pr-2">
                          <div className="flex items-center space-x-2">
                            <span className={`text-[9px] font-mono font-extrabold px-1.5 py-0.5 rounded ${
                              isLocked 
                                ? "bg-immersive-border/40 text-immersive-text-secondary/60"
                                : "bg-[#FF4B3E]/10 text-[#FF4B3E] border border-[#FF4B3E]/20"
                            }`}>
                              MOD 0{milestone.number}
                            </span>
                            <span className="text-xs font-bold text-immersive-text-primary line-clamp-1">
                              {milestone.title}
                            </span>
                          </div>
                          
                          {!isLocked && (
                            <div className="flex items-center space-x-2">
                              <div className="w-16 bg-immersive-border/60 h-1 rounded-full overflow-hidden">
                                <div 
                                  className="bg-emerald-500 h-full transition-all duration-300"
                                  style={{ width: `${mCompletionPercent}%` }}
                                />
                              </div>
                              <span className="text-[9px] font-mono text-immersive-text-secondary/80 font-bold">
                                {mCompletedLessons}/{mTotalLessons} completed
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="shrink-0 text-immersive-text-secondary">
                          {isLocked ? (
                            <Lock className="w-4 h-4 text-immersive-text-secondary/40" />
                          ) : isExpanded ? (
                            <ChevronDown className="w-4 h-4 text-immersive-text-primary" />
                          ) : (
                            <ChevronRight className="w-4 h-4 hover:text-immersive-text-primary" />
                          )}
                        </div>
                      </button>

                      {/* Milestone Lesson List */}
                      {isExpanded && !isLocked && (
                        <div className="border-t border-immersive-border/40 bg-immersive-bg/25 px-2 py-2 space-y-1 animate-in fade-in slide-in-from-top-1 duration-200">
                          {milestone.lessons.map((lesson, lIdx) => {
                            const isLessonSelected = lesson.id === selectedLesson.id;
                            const isLessonDone = completedLessons.includes(lesson.id);

                            return (
                              <button
                                key={lesson.id}
                                onClick={() => handleLessonSelect(lesson, mIdx)}
                                className={`w-full p-2.5 rounded-xl text-left flex items-center justify-between transition-all cursor-pointer ${
                                  isLessonSelected
                                    ? "bg-immersive-primary/15 border border-[#FF4B3E]/40 text-immersive-text-primary"
                                    : "border border-transparent hover:bg-immersive-card text-immersive-text-secondary hover:text-immersive-text-primary"
                                }`}
                              >
                                <div className="flex items-center space-x-2.5 min-w-0">
                                  <div className="pt-0.5 shrink-0">
                                    <div className={`w-4 h-4 rounded-full flex items-center justify-center border text-[10px] ${
                                      isLessonDone
                                        ? "bg-emerald-500 border-emerald-500 text-immersive-bg font-extrabold"
                                        : "border-immersive-border/80 text-transparent"
                                    }`}>
                                      ✓
                                    </div>
                                  </div>
                                  <div className="min-w-0">
                                    <span className="text-[11px] font-bold block truncate leading-tight">
                                      {lIdx + 1}. {lesson.title}
                                    </span>
                                    <span className="text-[9px] font-mono text-immersive-text-secondary/60 font-semibold uppercase block">
                                      {lesson.type} • {lesson.duration}
                                    </span>
                                  </div>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              
              {/* Stats panel bottom */}
              <div className="mt-4 pt-4 border-t border-immersive-border/60 bg-immersive-bg/10 p-3.5 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono text-immersive-text-secondary uppercase font-extrabold block">
                    TOTAL TRACK PATH
                  </span>
                  <span className="text-xs font-extrabold text-immersive-text-primary">
                    {flatLessonsList.length} Modular Lessons
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[9px] font-mono text-immersive-text-secondary uppercase font-extrabold block">
                    COMPLETED STEPS
                  </span>
                  <span className="text-xs font-extrabold text-emerald-400">
                    {completedLessons.length} of {flatLessonsList.length} Done
                  </span>
                </div>
              </div>

                </div>
              </div>
            </>
          )}

          {/* Main workspace - full width */}
          <div className="flex flex-col space-y-6 transition-all duration-300">
            
            {/* Active Workspace Board card with glowing shadow & glassmorphism border */}
            <div className="bg-immersive-card/40 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-3 sm:p-5 md:p-6 shadow-[0_0_40px_rgba(255,75,62,0.08)] shadow-immersive-shadow/60 space-y-3 sm:space-y-5 flex flex-col hover:shadow-[0_0_50px_rgba(255,75,62,0.12)] transition-all duration-300">
              
              {/* Toolbar view selections & Active Breadcrumbs */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-immersive-border/60">
                <div className="text-left">
                  <div className="flex items-center space-x-1 text-[10px] font-mono font-bold text-immersive-text-secondary uppercase">
                    <span>{boardChapterLabel}</span>
                    <span>•</span>
                    <span className="text-immersive-secondary">Module {String(boardModule).padStart(2, "0")}</span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-sans font-extrabold text-immersive-text-primary tracking-tight leading-snug">
                    {boardDisplayTitle}
                  </h2>
                  {!devPreviewEnabled && viewerMode === "practical" && (
                    <p className="mt-1 text-xs text-immersive-text-secondary">
                      Hands-On Practice — Complete the practical exercises to reinforce your learning before taking the assessment.
                    </p>
                  )}
                </div>

                {/* View selectors */}
                <div className="flex items-center bg-immersive-bg border border-immersive-border rounded-xl p-1 shrink-0 self-start sm:self-center">
                  <button
                    onClick={() => {
                      setDevPreviewEnabled(true);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all uppercase tracking-wider cursor-pointer ${
                      devPreviewEnabled
                        ? "bg-[#FF4B3E] text-immersive-text-primary shadow-md shadow-immersive-shadow shadow-[#FF4B3E]/10"
                        : "text-immersive-text-secondary hover:text-immersive-text-primary"
                    }`}
                    title="Toggle read-mode preview"
                  >
                    Read Mode
                  </button>
                  <button
                    onClick={() => {
                      setDevPreviewEnabled(false);
                      setViewerMode("practical");
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all uppercase tracking-wider cursor-pointer ${
                      !devPreviewEnabled && viewerMode === "practical"
                        ? "bg-[#FF4B3E] text-immersive-text-primary shadow-md shadow-immersive-shadow shadow-[#FF4B3E]/10"
                        : "text-immersive-text-secondary hover:text-immersive-text-primary"
                    }`}
                  >
                    PRACTICAL
                  </button>
                </div>
              </div>

              {/* Dev preview error notice */}
              {devPreviewError && (
                <div className="mb-3 px-4 py-2.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold">
                  Dev Preview Error: {devPreviewError}
                </div>
              )}

              {devPreviewEnabled && (
                <div className="mb-3 flex flex-col gap-2 rounded-2xl border border-immersive-border/60 bg-immersive-card/30 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex min-w-0 flex-wrap items-center gap-3">
                    <span className="text-xs font-bold text-immersive-text-primary">
                      {boardCourseTitle || 'Current course'}
                    </span>
                    <span className="rounded-lg border border-immersive-border bg-immersive-bg px-3 py-2 text-xs font-semibold text-immersive-text-primary">
                      Module {previewModule}
                    </span>
                    <span className="rounded-lg border border-immersive-border bg-immersive-bg px-3 py-2 text-xs font-semibold text-immersive-text-primary">
                      Chapter {previewChapter}
                    </span>
                  </div>
                  <div className="text-[10px] font-mono text-immersive-text-secondary">
                    Narration uses the same browser TTS voice picker inside the player footer.
                  </div>
                </div>
              )}

              {/* WORKSPACE MEDIA CONTAINER */}
              <div className="relative rounded-lg sm:rounded-2xl bg-immersive-bg border border-immersive-border overflow-hidden min-h-[320px] sm:min-h-[420px] md:min-h-[560px] lg:min-h-[720px] h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] flex flex-col justify-between group shadow-inner">
                
                {/* Read mode / dev preview */}
                {devPreviewEnabled && (
                  <div className="h-full w-full flex overflow-hidden">
                    <div className="flex-1 min-w-0 bg-slate-100 relative">
                      {devPreviewLoading ? (
                        <div className="h-full flex items-center justify-center">
                          <div className="animate-pulse text-immersive-secondary font-mono text-sm">
                            Loading course manifest preview...
                          </div>
                        </div>
                      ) : devPreviewError ? (
                        <div className="h-full flex items-center justify-center px-8 text-center">
                          <div className="max-w-xl space-y-3">
                            <div className="text-lg font-bold text-white">Preview unavailable</div>
                            <div className="text-sm text-immersive-text-secondary">{devPreviewError}</div>
                          </div>
                        </div>
                      ) : generatedPreview ? (
                        showChapterAssessment ? (
                          <AssessmentEngine
                            userProfile={userProfile}
                            selectedLesson={selectedLesson}
                            onUpdateProfile={onUpdateProfile}
                            assessment={activeAssessment}
                            assessmentContext={assessmentContext}
                            onSubmitted={handleAssessmentSubmitted}
                            onMoveToOverview={() => onChangePage("overview")}
                          />
                        ) : (
                        <ImmersiveChapterViewer
                          manifest={generatedPreview}
                          onComplete={async () => {
                            await handleChapterWatched();
                            setShowChapterAssessment(false);
                            setDevPreviewEnabled(false);
                            setViewerMode("practical");
                          }}
                          onRequestPrevChapter={() => {
                            const currentMod = Number.parseInt(previewModule, 10);
                            const currentCh = Number.parseInt(previewChapter, 10);
                            if (!courseCatalog?.modules?.length) return;
                            const modIndex = courseCatalog.modules.findIndex((m) => Number(m.module) === currentMod);
                            if (modIndex < 0) return;
                            const chapters = courseCatalog.modules[modIndex].chapters || [];
                            const chIndex = chapters.findIndex((c) => Number(c.chapter) === currentCh);
                            let previousModule = courseCatalog.modules[modIndex];
                            let previousChapter = chIndex > 0 ? chapters[chIndex - 1].chapter : null;
                            if (previousChapter == null && modIndex > 0) {
                              previousModule = courseCatalog.modules[modIndex - 1];
                              const previousChapters = previousModule.chapters || [];
                              previousChapter = previousChapters.length ? previousChapters[previousChapters.length - 1].chapter : null;
                            }
                            if (previousChapter == null) return;
                            setPreviewModule(String(previousModule.module).padStart(2, '0'));
                            setPreviewChapter(String(previousChapter).padStart(2, '0'));
                            setGeneratedPreview(null);
                            setDevPreviewLoading(true);
                          }}
                          onRequestNextChapter={() => {
                            // Advance to the next chapter within the discovered course catalog.
                            try {
                              const currentMod = Number.parseInt(previewModule, 10);
                              const currentCh = Number.parseInt(previewChapter, 10);
                              if (courseCatalog && Array.isArray(courseCatalog.modules) && courseCatalog.modules.length > 0) {
                                // Find module index
                                const modIndex = courseCatalog.modules.findIndex((m) => Number(m.module) === currentMod);
                                let nextModule = modIndex >= 0 ? courseCatalog.modules[modIndex] : courseCatalog.modules[0];
                                let nextChapterNum: number | null = null;

                                if (modIndex >= 0) {
                                  const chapters = courseCatalog.modules[modIndex].chapters || [];
                                  const chIndex = chapters.findIndex((c) => Number(c.chapter) === currentCh);
                                  if (chIndex >= 0 && chIndex < chapters.length - 1) {
                                    nextChapterNum = chapters[chIndex + 1].chapter;
                                    nextModule = courseCatalog.modules[modIndex];
                                  } else if (modIndex < courseCatalog.modules.length - 1) {
                                    // move to first chapter of next module
                                    const nextMod = courseCatalog.modules[modIndex + 1];
                                    nextModule = nextMod;
                                    nextChapterNum = nextMod.chapters && nextMod.chapters.length > 0 ? nextMod.chapters[0].chapter : null;
                                  }
                                }

                                if (nextChapterNum == null) return;

                                const modStr = String(nextModule.module).padStart(2, '0');
                                const chStr = String(nextChapterNum).padStart(2, '0');
                                setPreviewModule(modStr);
                                setPreviewChapter(chStr);
                                setGeneratedPreview(null);
                                setDevPreviewLoading(true);
                              }
                            } catch (e) {
                              // best-effort: do nothing on error
                            }
                          }}
                        />
                        )
                      ) : (
                        <div className="h-full flex items-center justify-center px-8 text-center">
                          <div className="max-w-xl space-y-3">
                            <div className="text-lg font-bold text-white">No manifest preview loaded</div>
                            <div className="text-sm text-immersive-text-secondary">
                              Choose a course manifest and reload the preview.
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Animated scene-based lesson player */}
                {!devPreviewEnabled && viewerMode === "video" && (
                  manifest && manifestChapter ? (
                    <ManifestLessonPlayer
                      manifest={manifest}
                      scenes={manifestChapter.scenes}
                      chapter={manifestChapter}
                      onTimeUpdate={handleTimeUpdate}
                      onComplete={handleChapterWatched}
                    />
                  ) : (
                    <LessonScenePlayer
                      scenes={generateGenericScenes(details, selectedLesson.title)}
                      theme={theme}
                      loop={false}
                      onTimeUpdate={handleTimeUpdate}
                      onComplete={handleChapterWatched}
                    />
                  )
                )}

                {/* 3. ADAPTIVE INTERACTIVE SANDBOX PLAYGROUND (Split View) */}
                {!devPreviewEnabled && viewerMode === "practical" && (
                  <div className="absolute inset-0 flex min-h-0 flex-col">
                    <div className="flex min-h-0 flex-1 flex-col">
                      <div className="flex shrink-0 items-center justify-end gap-2 border-b border-immersive-border/60 bg-immersive-bg/60 px-4 py-2">
                        <button
                          onClick={() => setShowPracticalSimulation((visible) => !visible)}
                          className="rounded-lg border border-immersive-border bg-immersive-card px-3 py-2 text-xs font-bold text-immersive-text-primary transition-colors hover:border-immersive-secondary/50"
                        >
                          {showPracticalSimulation ? "Open interactive sandbox" : "Watch guided simulation"}
                        </button>
                        <button onClick={handlePracticalCompleted} className="rounded-lg bg-[#FF4B3E] px-3 py-2 text-xs font-bold text-white transition-colors hover:bg-[#e33d32]">
                          Finish practical
                        </button>
                      </div>

                      <div className="relative min-h-0 min-w-0 flex-1">
                        {showPracticalSimulation ? (
                          <AnimatedCodeAlongPlayer
                            playlist={activePractical?.teachingPlaylist || []}
                            files={activePractical?.files || []}
                            walkthrough={activePractical?.codeWalkthrough || []}
                            category={activePractical?.category}
                            tasks={activePractical?.tasks || []}
                            narratorGuide={activePractical?.narratorGuide}
                            checks={activePractical?.checks || []}
                            onOpenLab={() => setShowPracticalSimulation(false)}
                          />
                        ) : (
                          <InteractiveSandbox
                            userProfile={userProfile}
                            selectedLesson={selectedLesson}
                            handsOnActivities={activePractical?.tasks?.map((task) => task.instruction) || details.summary.takeaways}
                            practical={activePractical}
                            learningContext={{
                              courseId: activePractical?.courseId || generatedPreview?.courseId || previewCourseId || courseId,
                              courseTitle: generatedPreview?.course || courseCatalog?.course || courseTitle,
                              courseCategory: activePractical?.category || undefined,
                              module: activePractical?.module ?? generatedPreview?.module,
                              chapter: activePractical?.chapter ?? generatedPreview?.chapter,
                              moduleTitle: generatedPreview?.moduleTitle || curriculum[activeMilestoneIndex]?.title,
                              chapterTitle: generatedPreview?.chapterTitle,
                              lessonTitle: selectedLesson.title,
                              lessonContent: courseLessons?.[selectedLesson.id],
                              page: "learning board",
                            }}
                            onComplete={handlePracticalCompleted}
                          />
                        )}
                      </div>
                    </div>

                    <div className="shrink-0 px-6 py-3 text-center text-xs font-bold text-immersive-secondary border-t border-immersive-border/50">
                      Complete all hands-on checks to unlock the assessment.
                    </div>
                  </div>
                )}

                {/* 4. INTERACTIVE ASSESSMENT */}
                {!devPreviewEnabled && viewerMode === "assessment" && chapterProgress?.watched && practicalCompleted && (
                  <AssessmentEngine 
                    userProfile={userProfile}
                    selectedLesson={selectedLesson}
                    onUpdateProfile={onUpdateProfile}
                    assessment={activeAssessment}
                    assessmentContext={assessmentContext}
                    onSubmitted={handleAssessmentSubmitted}
                    onMoveToOverview={() => onChangePage("overview")}
                  />
                )}

              </div>

              {/* LESSON COMPANION CARD STRIP */}
              {(generatedPreview || manifestChapter) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
                  {/* Key Takeaway */}
                  <div className="bg-immersive-card/30 border border-white/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:bg-immersive-card/50 transition-all min-h-[100px] sm:min-h-[120px] flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-[#FF4B3E]/10 border border-[#FF4B3E]/20 flex items-center justify-center text-[#FF4B3E]">
                        <BookOpen className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-immersive-text-primary uppercase tracking-wider">
                        Key Takeaway
                      </span>
                    </div>
                    <p className="text-xs text-immersive-text-secondary leading-relaxed line-clamp-4">
                      {generatedPreview?.learningObjectives?.[0] || manifestChapter?.learningObjectives?.[0] || details.summary.overview}
                    </p>
                  </div>

                {/* Chapter Assessment */}
                  <button
                    disabled={!practicalCompleted}
                    onClick={() => {
                      if (practicalCompleted) setViewerMode("assessment");
                    }}
                    className={`text-left bg-immersive-card/30 border border-white/5 rounded-2xl p-4 transition-all group min-h-[120px] flex flex-col ${
                      practicalCompleted ? "hover:bg-immersive-card/50 cursor-pointer" : "cursor-not-allowed opacity-60"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                        <HelpCircle className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-immersive-text-primary uppercase tracking-wider">
                        Chapter Assessment
                      </span>
                    </div>
                    <p className="text-xs text-immersive-text-secondary leading-relaxed line-clamp-4 group-hover:text-immersive-text-primary transition-colors">
                      {activeAssessment?.questions?.[0]?.question || "Review your understanding with the chapter assessment."}
                    </p>
                  </button>

                  {/* Try It */}
                  <button
                    onClick={() => setViewerMode("practical")}
                    className="text-left bg-immersive-card/30 border border-white/5 rounded-2xl p-4 hover:bg-immersive-card/50 transition-all group cursor-pointer min-h-[120px] flex flex-col"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <Monitor className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-immersive-text-primary uppercase tracking-wider">
                        Try It
                      </span>
                    </div>
                    <p className="text-xs text-immersive-text-secondary leading-relaxed line-clamp-4 group-hover:text-immersive-text-primary transition-colors">
                      {generatedPreview?.handsOn?.title || manifestChapter?.handsOn?.title || "No hands-on activity recorded"}
                    </p>
                  </button>
                </div>
              )}

              {/* MODULE & CHAPTER COMPLETION PROGRESS GATEWAY */}
              <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 transition-all duration-300 ${
                theme === "light" 
                  ? "bg-slate-50 border-slate-200/80" 
                  : "bg-immersive-card/30 border-white/5 shadow-inner"
              }`}>
                {/* Active Module Progress Bar */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-wider">
                    <span className="text-immersive-text-secondary flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#FF4B3E]" />
                      <span>Module 0{activeMilestoneIndex + 1} completion</span>
                    </span>
                    <span className="text-[#FF4B3E]">
                      {(() => {
                        const mLessons = curriculum[activeMilestoneIndex]?.lessons || [];
                        const mCompletedCount = mLessons.filter(l => completedLessons.includes(l.id)).length;
                        const pct = mLessons.length > 0 ? Math.round((mCompletedCount / mLessons.length) * 100) : 0;
                        return `${pct}% Done`;
                      })()}
                    </span>
                  </div>
                  <div className={`w-full h-2 rounded-full overflow-hidden ${theme === "light" ? "bg-slate-200" : "bg-white/5"}`}>
                    <div 
                      className="bg-[#FF4B3E] h-full rounded-full transition-all duration-500 shadow-[0_0_8px_#FF4B3E]"
                      style={{ 
                        width: `${(() => {
                          const mLessons = curriculum[activeMilestoneIndex]?.lessons || [];
                          const mCompletedCount = mLessons.filter(l => completedLessons.includes(l.id)).length;
                          return mLessons.length > 0 ? Math.round((mCompletedCount / mLessons.length) * 100) : 0;
                        })()}%` 
                      }}
                    />
                  </div>
                </div>

                <div className="hidden md:block w-[1px] h-8 bg-immersive-border/30 self-center shrink-0" />

                {/* Overall Track Progress Bar */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-wider">
                    <span className="text-immersive-text-secondary flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>Overall track progress</span>
                    </span>
                    <span className="text-emerald-400">
                      {Math.round((completedLessons.length / Math.max(1, flatLessonsList.length)) * 100)}% Mastered
                    </span>
                  </div>
                  <div className={`w-full h-2 rounded-full overflow-hidden ${theme === "light" ? "bg-slate-200" : "bg-white/5"}`}>
                    <div 
                      className="bg-emerald-400 h-full rounded-full transition-all duration-500 shadow-[0_0_8px_#34d399]"
                      style={{ width: `${Math.round((completedLessons.length / Math.max(1, flatLessonsList.length)) * 100)}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* TABS SELECTOR PANEL */}
              <div className="flex items-center border-b border-immersive-border/60">
                {(["summary", "notes"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-3 text-xs font-bold uppercase tracking-wider relative cursor-pointer ${
                      activeTab === tab
                        ? "text-[#FF4B3E]"
                        : "text-immersive-text-secondary hover:text-immersive-text-primary"
                    }`}
                  >
                    <span>{tab}</span>
                    {activeTab === tab && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF4B3E]" />
                    )}
                  </button>
                ))}
              </div>

              {/* TAB CONTENT VIEWER */}
              <div className="min-h-[180px] sm:min-h-[220px] bg-immersive-bg/35 border border-immersive-border/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 overflow-y-auto max-h-[280px] sm:max-h-[350px] scrollbar-thin">
                
                 {/* 1. SUMMARY TAB */}
                {activeTab === "summary" && (
                  <div className="space-y-4 text-left">
                    <div>
                      <h4 className="text-xs font-mono font-bold text-immersive-secondary uppercase tracking-widest mb-1">
                        Learning Objectives
                      </h4>
                      <p className="text-sm text-immersive-text-secondary leading-relaxed font-medium">
                        {generatedPreview?.learningObjectives?.length
                          ? generatedPreview.learningObjectives.join(" ")
                          : manifestChapter?.learningObjectives?.length
                            ? manifestChapter.learningObjectives.join(" ")
                            : "No learning objectives recorded for this chapter."}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 pt-2">
                      <div className="p-3.5 bg-immersive-card border border-immersive-border rounded-xl space-y-1.5">
                        <span className="text-[10px] font-mono font-bold text-immersive-text-primary uppercase tracking-wider block">
                          Key Concepts
                        </span>
                        <ul className="space-y-1 text-xs text-immersive-text-secondary font-medium">
                          {(generatedPreview?.keyConcepts?.length
                            ? generatedPreview.keyConcepts
                            : manifestChapter?.keyConcepts || []).map((obj, idx) => (
                            <li key={idx} className="flex items-start space-x-1.5">
                              <span className="text-[#FF4B3E] font-bold">•</span>
                              <span>{obj}</span>
                            </li>
                          ))}
                          {!generatedPreview?.keyConcepts?.length && !manifestChapter?.keyConcepts?.length && (
                            <li className="text-immersive-text-secondary/70">No key concepts recorded for this chapter.</li>
                          )}
                        </ul>
                      </div>

                      <div className="p-3.5 bg-immersive-card border border-immersive-border rounded-xl space-y-1.5 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-mono font-bold text-immersive-text-primary uppercase tracking-wider block mb-1">
                            Hands-on Activity
                          </span>
                          <p className="text-xs text-immersive-text-secondary leading-relaxed">
                            {generatedPreview?.handsOn?.instructions || "No hands-on activity has been recorded for this chapter."}
                          </p>
                        </div>
                        <button
                          onClick={() => setViewerMode("practical")}
                          className="mt-3 py-1.5 px-3 bg-[#FF4B3E]/10 border border-[#FF4B3E]/30 hover:bg-[#FF4B3E]/20 text-[#FF4B3E] text-[10px] font-bold rounded-lg uppercase tracking-wider transition-all cursor-pointer self-start"
                        >
                          Go to PRACTICAL ➔
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* STUDY NOTES TAB */}
                {activeTab === "notes" && (
                  <div className="space-y-4 text-left">
                    <div className="flex items-center justify-between pb-2 border-b border-immersive-border/40">
                      <span className="text-[10px] font-mono font-bold text-immersive-secondary uppercase tracking-widest block">
                        Lab Scratchpad Notebook
                      </span>
                      <span className="text-[10px] text-immersive-text-secondary font-semibold">
                        {notesStatus === "saving" ? "Saving..." : notesStatus === "saved" ? "Saved to database" : notesStatus === "error" ? "Save failed" : "One note per chapter"}
                      </span>
                    </div>

                    {/* Editor Form */}
                    <div className="bg-immersive-card border border-immersive-border rounded-xl p-3 space-y-3">
                      <textarea
                        value={notes}
                        onChange={(e) => handleNotesChange(e.target.value)}
                        placeholder="Write a note for this chapter..."
                        className="w-full bg-immersive-bg/50 border border-immersive-border rounded-lg p-2.5 text-xs sm:text-sm text-immersive-text-primary placeholder:text-immersive-text-secondary/50 focus:outline-none focus:border-[#FF4B3E] text-left resize-none h-20"
                      />
                    </div>

                  </div>
                )}

              </div>

              {/* ACTION BUTTONS TOOLBAR */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-immersive-border/60 bg-immersive-bg/5 p-3 rounded-2xl">
                <div className="flex items-center space-x-2.5">
                  <button
                    onClick={handlePrevLesson}
                    disabled={activeFlatIndex === 0}
                    className={`p-2.5 rounded-xl border border-immersive-border bg-immersive-card transition-all ${
                      activeFlatIndex === 0 
                        ? "opacity-30 cursor-not-allowed" 
                        : "hover:bg-immersive-card-hover cursor-pointer text-immersive-text-primary"
                    }`}
                    title="Previous Lesson"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextLesson}
                    disabled={activeFlatIndex === flatLessonsList.length - 1}
                    className={`p-2.5 rounded-xl border border-immersive-border bg-immersive-card transition-all ${
                      activeFlatIndex === flatLessonsList.length - 1 
                        ? "opacity-30 cursor-not-allowed" 
                        : "hover:bg-immersive-card-hover cursor-pointer text-immersive-text-primary"
                    }`}
                    title="Next Lesson"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <span className="text-[10px] font-mono text-immersive-text-secondary font-semibold pl-1.5 hidden sm:inline">
                    {boardLocationLabel}
                  </span>
                </div>

                <div className="flex items-center space-x-3.5">
                  <div className="hidden lg:flex items-center gap-2 text-[9px] font-mono uppercase text-immersive-text-secondary">
                    <span className={chapterProgress?.explicitComplete ? "text-emerald-400" : ""}>Mark</span>
                    <span className={chapterProgress?.watched ? "text-emerald-400" : ""}>Watch</span>
                    <span className={chapterProgress?.assessmentPassed ? "text-emerald-400" : ""}>Pass</span>
                  </div>
                  {/* DIRECT AI MENTOR CONSULT BUTTON */}
                  <button
                    onClick={() => setIsAiMentorOpen(true)}
                    className="py-2 px-3 rounded-xl text-xs font-bold text-immersive-text-primary bg-immersive-bg border border-immersive-border hover:border-immersive-secondary/50 hover:bg-immersive-card-hover transition-all flex items-center space-x-1.5 cursor-pointer shadow-md shadow-immersive-shadow"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-immersive-secondary" />
                    <span>Ask AI Mentor</span>
                  </button>

                  {/* COMPLETE SYNC BUTTON */}
                  <button
                    onClick={toggleCompleteState}
                    className={`py-2 px-4 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer flex items-center space-x-1.5 shadow-md shadow-immersive-shadow ${
                      completedLessons.includes(selectedLesson.id)
                        ? "bg-emerald-500/15 border border-emerald-500/40 text-emerald-400"
                        : "bg-[#FF4B3E] text-immersive-text-primary hover:brightness-110 shadow-[#FF4B3E]/10"
                    }`}
                  >
                    {completedLessons.includes(selectedLesson.id) ? (
                      <>
                        <CheckCircle className="w-3.5 h-3.5 stroke-[3px]" />
                        <span>Completed ✓</span>
                      </>
                    ) : (
                      <span>Mark Complete</span>
                    )}
                  </button>
                </div>
              </div>

            </div>

            {/* QUICK CORRELATION ADVICE FOOTER */}
            <div className="bg-gradient-to-r from-immersive-card to-[#FF4B3E]/5 border border-immersive-border rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-xl shadow-immersive-shadow flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 text-left">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-immersive-secondary uppercase tracking-widest block">
                  COHORT FLUID LEARNING
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-immersive-text-primary block line-clamp-2 sm:line-clamp-none">
                  Completing lessons unlock Milestone Projects
                </span>
                <p className="text-[11px] text-immersive-text-secondary/90 leading-relaxed font-semibold">
                  Once all lessons inside Milestone 0{activeMilestoneIndex + 1} are complete, submit and evaluate your workspace telemetry grids directly on the projects page.
                </p>
              </div>
              <button 
                onClick={() => onChangePage("projects")}
                className="py-2 px-4 shrink-0 bg-immersive-bg border border-immersive-border hover:border-immersive-secondary/30 text-immersive-text-primary font-bold text-xs rounded-xl hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                Go to Projects Board
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* FLOATING DIRECT INTERACTIVE AI MENTOR TUTOR CONSOLE (SLIDE OUT DRAWER) */}
      {isAiMentorOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          {/* Backdrop mask */}
          <div 
            className="absolute inset-0 bg-immersive-bg/75 backdrop-blur-sm transition-opacity"
            onClick={() => setIsAiMentorOpen(false)}
          />

          {/* Chat drawer panel */}
          <div className="relative w-full max-w-md sm:max-w-lg bg-immersive-card border-l border-immersive-border h-full flex flex-col justify-between shadow-2xl shadow-immersive-shadow animate-in slide-in-from-right duration-300">
            
            {/* Header */}
            <div className="px-6 py-4 border-b border-immersive-border/60 bg-immersive-bg/40 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-xl bg-[#FF4B3E]/10 border border-[#FF4B3E]/30 flex items-center justify-center text-[#FF4B3E]">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-extrabold text-immersive-text-primary block">
                    CohortiaMentor ✦ Tutor Mode
                  </span>
                  <span className="text-[9px] font-mono text-emerald-400 font-bold tracking-wider uppercase">
                    Analyzing: {selectedLesson.title.substring(0, 30)}...
                  </span>
                </div>
              </div>
              
              <button 
                onClick={() => setIsAiMentorOpen(false)}
                className="p-1.5 border border-immersive-border hover:border-white text-immersive-text-secondary hover:text-immersive-text-primary rounded-lg text-xs font-bold transition-all cursor-pointer"
              >
                Close Drawer
              </button>
            </div>

            {/* Message Body scrolling */}
            <div className="flex-1 p-6 space-y-4 overflow-y-auto bg-immersive-bg/15 scrollbar-thin">
              {mentorMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex items-start space-x-3 max-w-[85%] ${
                    msg.sender === "user" ? "ml-auto flex-row-reverse space-x-reverse" : "mr-auto"
                  }`}
                >
                  <div className={`w-7.5 h-7.5 rounded-lg shrink-0 flex items-center justify-center border text-xs ${
                    msg.sender === "user"
                      ? "bg-immersive-secondary/10 border-immersive-secondary/25 text-immersive-secondary"
                      : "bg-[#FF4B3E]/10 border-[#FF4B3E]/20 text-[#FF4B3E]"
                  }`}>
                    {msg.sender === "user" ? "U" : "✦"}
                  </div>

                  <div className="space-y-1 text-left">
                    <div className={`p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border text-xs sm:text-sm leading-relaxed font-medium break-words ${
                      msg.sender === "user"
                        ? "bg-immersive-bg border-immersive-border text-immersive-text-primary rounded-tr-none"
                        : "bg-immersive-bg/40 border-immersive-border/50 text-immersive-text-primary/95 rounded-tl-none"
                    }`}>
                      {msg.text.split("\n").map((line, i) => (
                        <p key={i} className={line ? "mb-1.5" : "h-1.5"}>
                          {line}
                        </p>
                      ))}
                    </div>
                    <span className={`text-[8px] font-mono text-immersive-text-secondary/60 block ${
                      msg.sender === "user" ? "text-right" : "text-left"
                    }`}>
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}

              {isMentorTyping && (
                <div className="flex items-center space-x-3 mr-auto">
                  <div className="w-7.5 h-7.5 rounded-lg bg-[#FF4B3E]/10 border border-[#FF4B3E]/20 text-[#FF4B3E] flex items-center justify-center">
                    <Sparkles className="w-3.5 h-3.5 animate-spin" />
                  </div>
                  <div className="bg-immersive-bg/50 border border-immersive-border/50 p-3 rounded-2xl rounded-tl-none flex space-x-1 items-center">
                    <div className="w-1.5 h-1.5 bg-[#FF4B3E] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-1.5 h-1.5 bg-[#FF4B3E] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-1.5 h-1.5 bg-[#FF4B3E] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={mentorChatEndRef} />
            </div>

            {/* Recommended Questions Row */}
            <div className="p-3 bg-immersive-bg/40 border-t border-immersive-border/40 text-left">
              <span className="text-[9px] font-mono font-bold text-immersive-text-secondary/80 block mb-2 px-1">
                QUICK TUTOR QUESTIONS
              </span>
              <div className="flex flex-col gap-1.5">
                {[
                  `Explain "${selectedLesson.title}" simply`,
                  `Show me an interview question about this lesson`,
                  `What are the major mistakes developers make here?`
                ].map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMentorMessage(q)}
                    className="w-full text-left p-2 rounded-xl border border-immersive-border hover:border-immersive-secondary/40 text-[10px] font-bold text-immersive-text-secondary hover:text-immersive-text-primary bg-immersive-card cursor-pointer block truncate"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form Footer */}
            <div className="p-4 border-t border-immersive-border/60 bg-immersive-bg/50 flex items-center space-x-2.5">
              <input
                type="text"
                value={mentorInput}
                onChange={(e) => setMentorInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSendMentorMessage(mentorInput);
                }}
                placeholder="Ask me to explain any slide or code structure..."
                className="flex-1 bg-immersive-bg border border-immersive-border rounded-lg sm:rounded-xl px-2 sm:px-3 py-2 sm:py-2.5 text-xs sm:text-sm text-immersive-text-primary placeholder:text-immersive-text-secondary/40 focus:outline-none text-left"
              />
              <button
                onClick={() => handleSendMentorMessage(mentorInput)}
                disabled={!mentorInput.trim()}
                className="p-2.5 bg-immersive-secondary text-immersive-bg hover:bg-white disabled:opacity-40 rounded-xl cursor-pointer transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Chapter Completion Prompt */}
      {showCompletionPrompt && (
        <ChapterCompletionPrompt
          chapterTitle={selectedLesson?.title || "Chapter"}
          courseId={courseId}
          courseTitle={courseTitle}
          module={manifestChapter ? Number(manifestChapter.index.split('.')[0]) : undefined}
          chapter={manifestChapter ? parseInt(manifestChapter.index.split('.')[1]) : undefined}
          onContinueInternalAssessment={handleContinueInternalAssessment}
          onNavigateExternalAssessment={handleNavigateExternalAssessment}
          onClose={() => setShowCompletionPrompt(false)}
        />
      )}

    </div>
  );
}

// Data helper to generate customized slides, summary, and transcripts on-the-fly for any track & lesson
function getLessonDetails(lesson: DashboardLesson, track: CohortTrackId): CustomLessonDetails {
  const isFE = track === "frontend";
  const isDE = track === "design";
  const isPM = track === "product";
  const isDA = track === "analytics";
  const isCPP = track === "cpp";

  if (isCPP && CPP_LESSONS_DETAILS[lesson.id]) {
    return CPP_LESSONS_DETAILS[lesson.id];
  }

  let trackName = "Lab Topic";
  if (isFE) trackName = "Frontend Engineering";
  if (isDE) trackName = "UI/UX Product Design";
  if (isPM) trackName = "Product Management";
  if (isDA) trackName = "Data Analytics";
  if (isCPP) trackName = "Systems C++ Pathway";

  // Build simulated objects based on the lesson metadata
  return {
    summary: {
      overview: `This course module covers "${lesson.title}" inside the ${trackName} certification lab. In this block, students explore the industry standards, review client request briefs, and set up local workspace telemetry guidelines. You will master the optimal orchestrations of state, styling protocols, and pipeline parameters to execute modern specs.`,
      objectives: [
        `Identify the core structures and architecture constraints of "${lesson.title}".`,
        "Examine professional production checklists and design matrices.",
        "Establish secure sandbox workspaces to simulate actual client workflows."
      ],
      takeaways: [
        "A completed experiential lab workbook summarizing your answers.",
        "An active, modular component or telemetry chart synced to local repositories.",
        "A direct mentor evaluation score ready for your portfolio defense."
      ]
    },
    slides: [
      {
        number: 1,
        title: "Introduction & Context Alignment",
        points: [
          `Welcome to our intensive masterclass on "${lesson.title}".`,
          `This topic represents a core pillar inside the ${trackName} ecosystem.`,
          "Understanding this context helps you communicate with engineers, stakeholders, and advisors effectively.",
          "We will analyze real-world case studies from Stripe, CarbonHQ, and EcoSync to demonstrate its power."
        ]
      },
      {
        number: 2,
        title: "Deep Dive into Mechanical Guidelines",
        points: [
          "Break down the layout parameters and system constraints.",
          "Avoid default styling and boilerplate setups; focus on high-fidelity custom orchestrations.",
          "Optimize rendering triggers, data transformations, and state loops.",
          "Always handle missing keys gracefully and enforce fallback states."
        ]
      },
      {
        number: 3,
        title: "Practical Exercise & Final Handoff Specs",
        points: [
          "Task: Rebuild the client briefing elements to conform to the responsive layout guidelines.",
          "Verify visual rhythm, responsive auto-layout setups, and color application rules.",
          "Once complete, utilize the sandbox console to audit performance and check formatting.",
          "Mark this step complete inside your Cohortia study board to unlock subsequent modules."
        ]
      }
    ],
    transcript: [
      {
        time: "0:00",
        speaker: "Senior Lab Director",
        text: `Hello and welcome back to the Cohortia Experiential Labs. Today, we are deep diving into "${lesson.title}" as part of our structured pathway.`
      },
      {
        time: "0:30",
        speaker: "Senior Lab Director",
        text: `In this training block, we examine why modern teams place so much emphasis on this precise stage. When building products at scale for clients like CarbonHQ or Stripe, these foundational parameters are critical.`
      },
      {
        time: "1:15",
        speaker: "Senior Lab Director",
        text: "Let's review our layout guidelines. Remember, craftsmanship always comes first. Never rely on default borders, shadows, or purple-to-blue gradient patterns. Make intentional typography and spacing choices."
      },
      {
        time: "2:00",
        speaker: "Senior Lab Director",
        text: `For this lesson, we recommend opening up your study notebook scratchpad on the third tab. Jot down ideas as we work through the slides and interactive bash terminals.`
      },
      {
        time: "3:10",
        speaker: "Senior Lab Director",
        text: "Lastly, make sure to sync with your AI Mentor if you hit any obstacles. The mentor is fully calibrated to your track preferences and can review code snippets instantly. Let's start the exercise!"
      }
    ]
  };
}
