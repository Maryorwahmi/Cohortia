import { useState, useEffect } from "react";
import { CheckCircle, Play, Lock, BookOpen, Clock, Users, ArrowRight, RefreshCw, Trophy, GraduationCap, Award, Building2 } from "lucide-react";
import { UserPreferences } from "../../types";
import { TRACK_CURRICULA, DashboardMilestone, DashboardLesson } from "../../data/dashboardData";
import type { Track } from "../../services/api";
import { parseTrackSkills } from "../../lib/lessonMetadata";
import { learningBoardsApi, LearningBoardChapter, LearningBoardProgress } from "../../services/learningBoardsApi";
import BadgesComponent from "./BadgesComponent";
import DailyHabitTracker from "./DailyHabitTracker";
import HabitLogger from "./HabitLogger";
import SkeletonLoader from "./SkeletonLoader";

interface OverviewPageProps {
  userProfile: UserPreferences;
  track?: Track | null;
  onUpdateProfile: (profile: UserPreferences) => void;
  onChangePage: (page: string) => void;
  curriculum?: DashboardMilestone[];
  onToggleLesson?: (lessonId: string) => void | Promise<void>;
}

export default function OverviewPage({ userProfile, track, onUpdateProfile, onChangePage, curriculum: curriculumProp, onToggleLesson }: OverviewPageProps) {
  const activeTrackId = userProfile.track || "cpp";
  const baseCurriculum = curriculumProp || TRACK_CURRICULA[activeTrackId] || TRACK_CURRICULA.frontend;
  const overviewSummary = track?.overview
    ?.split(/(?<=[.!?])\s+/)
    .slice(0, 3)
    .join(" ")
    .trim();
  
  // Local state for completed lessons, initialized from userProfile or default
  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    return userProfile.completedSteps || ["cpp_l1"]; // default starts with first C++ lesson checked
  });

  const [overviewTab, setOverviewTab] = useState<"roadmap" | "syllabus">("roadmap");
  const [courseChapters, setCourseChapters] = useState<LearningBoardChapter[]>([]);
  const [courseChaptersLoading, setCourseChaptersLoading] = useState(true);
  const [chapterProgress, setChapterProgress] = useState<Record<string, LearningBoardProgress | null>>({});

  useEffect(() => {
    setCourseChaptersLoading(true);

    if (!track?.id) {
      setCourseChapters([]);
      setCourseChaptersLoading(false);
      return;
    }

    setCourseChapters([]);
    let cancelled = false;
    learningBoardsApi.getCourses()
      .then(async (courses) => {
        const normalizedTrackTitle = track.title.trim().toLowerCase();
        const course = courses.find((candidate) =>
          candidate.courseId === track.id || candidate.course.trim().toLowerCase() === normalizedTrackTitle
        );
        if (!course) return;
        const { chapters } = await learningBoardsApi.getCourseChapters(course.courseId);
        if (cancelled) return;
        setCourseChapters(chapters);
        const progressEntries = await Promise.all(chapters.map(async (chapter) => {
          try {
            const progress = await learningBoardsApi.getProgress(course.courseId, chapter.module, chapter.chapter);
            return [`${chapter.module}-${chapter.chapter}`, progress] as const;
          } catch {
            return [`${chapter.module}-${chapter.chapter}`, null] as const;
          }
        }));
        if (!cancelled) setChapterProgress(Object.fromEntries(progressEntries));
      })
      .catch(() => {
        if (!cancelled) setCourseChapters([]);
      })
      .finally(() => {
        if (!cancelled) setCourseChaptersLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [track?.id]);

  if (courseChaptersLoading) {
    return <SkeletonLoader activePage="overview" />;
  }

  const chaptersByModule = new Map<number, LearningBoardChapter[]>();
  courseChapters.forEach((chapter) => {
    const moduleChapters = chaptersByModule.get(chapter.module) || [];
    moduleChapters.push(chapter);
    chaptersByModule.set(chapter.module, moduleChapters);
  });

  const curriculum = courseChapters.length
    ? Array.from(chaptersByModule.entries())
      .sort(([left], [right]) => left - right)
      .map(([moduleNumber, moduleChapters], moduleIndex) => {
        const sourceMilestone = baseCurriculum[moduleNumber - 1] || baseCurriculum[moduleIndex];
        if (!sourceMilestone) return null;

        return {
          ...sourceMilestone,
          number: moduleNumber,
          title: moduleChapters[0]?.moduleTitle || sourceMilestone.title,
          lessons: moduleChapters
            .sort((left, right) => left.chapter - right.chapter)
            .map((chapter, chapterIndex) => ({
              ...(sourceMilestone.lessons[chapterIndex] || {
                id: `db-${courseChapters[0]?.courseId || track?.id}-m${moduleNumber}-c${chapter.chapter}`,
                type: "concept" as const,
              }),
              title: chapter.chapterTitle,
            })),
        };
      })
      .filter((milestone): milestone is DashboardMilestone => Boolean(milestone))
    : baseCurriculum;

  // Sync to global profile on change
  const toggleLesson = (lessonId: string, milestoneIndex: number) => {
    // Prevent toggling locked milestones
    if (milestoneIndex > 0) {
      const prevMilestone = curriculum[milestoneIndex - 1];
      const allPrevCompleted = prevMilestone.lessons.every(l => completedLessons.includes(l.id));
      if (!allPrevCompleted) return; // Keep locked
    }

    let updated: string[];
    if (completedLessons.includes(lessonId)) {
      updated = completedLessons.filter(id => id !== lessonId);
    } else {
      updated = [...completedLessons, lessonId];
    }
    setCompletedLessons(updated);

    // Sync to parent
    onUpdateProfile({
      ...userProfile,
      completedSteps: updated
    });

    if (onToggleLesson) {
      onToggleLesson(lessonId);
    }
  };

  const totalLessons = curriculum.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedCount = curriculum.reduce((acc, m) => {
    return acc + m.lessons.filter(l => completedLessons.includes(l.id)).length;
  }, 0);
  
  const completionPercentage = Math.round((completedCount / totalLessons) * 100);

  const getMilestoneAssessmentState = (milestone: DashboardMilestone) => {
    const chapters = chaptersByModule.get(milestone.number) || [];
    if (chapters.length === 0) return { handsOnComplete: false, assessmentComplete: false };
    const progress = chapters.map((chapter) => chapterProgress[`${chapter.module}-${chapter.chapter}`]);
    return {
      handsOnComplete: progress.every((item) => Boolean(item?.practicalsComplete)),
      assessmentComplete: progress.every((item) => Boolean(item?.assessmentPassed)),
    };
  };

  // Determine milestone states (0: completed, 1: active, 2: locked)
  const getMilestoneState = (milestoneIndex: number) => {
    if (milestoneIndex === 0) {
      const assessmentState = getMilestoneAssessmentState(curriculum[0]);
      const allDone = courseChapters.length > 0
        ? assessmentState.assessmentComplete
        : curriculum[0].lessons.every(l => completedLessons.includes(l.id));
      return allDone ? "completed" : "active";
    }
    
    // Check if previous is completed
    const prevMilestone = curriculum[milestoneIndex - 1];
    const prevDone = courseChapters.length > 0
      ? getMilestoneAssessmentState(prevMilestone).assessmentComplete
      : prevMilestone.lessons.every(l => completedLessons.includes(l.id));
    
    if (!prevDone) return "locked";
    
    const assessmentState = getMilestoneAssessmentState(curriculum[milestoneIndex]);
    const allDone = courseChapters.length > 0
      ? assessmentState.assessmentComplete
      : curriculum[milestoneIndex].lessons.every(l => completedLessons.includes(l.id));
    return allDone ? "completed" : "active";
  };

  // Find next uncompleted lesson to guide user
  const findNextLesson = () => {
    for (let mIdx = 0; mIdx < curriculum.length; mIdx++) {
      const mState = getMilestoneState(mIdx);
      if (mState !== "locked") {
        const nextL = curriculum[mIdx].lessons.find(l => !completedLessons.includes(l.id));
        if (nextL) return { lesson: nextL, milestoneNum: mIdx + 1 };
      }
    }
    return null;
  };

  const nextLessonInfo = findNextLesson();

  const trackTitle = track?.title || (() => {
    switch (activeTrackId) {
      case "frontend": return "Frontend Engineering Lab";
      case "design": return "UI/UX Product Design Lab";
      case "product": return "Product Management Lab";
      case "analytics": return "Data Analytics Lab";
      case "cpp": return "C++ Certified Professional Programmer (CPP)";
      default: return "Cohortia Experiential Lab";
    }
  })();
  const trackSkills = parseTrackSkills(track);

  return (
    <div className="pt-20 pb-8 min-h-screen bg-immersive-bg relative text-left">
      {/* Visual background accents */}
      <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-[#FF4B3E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6">

        {/* Banner/Header Box */}
        <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 sm:p-8 relative overflow-hidden mb-8 shadow-2xl shadow-immersive-shadow">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none hidden md:block">
            <Trophy className="w-40 h-40 text-[#FF4B3E]" />
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 z-10 relative">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono font-bold text-immersive-secondary uppercase tracking-widest block">
                | ACTIVE ACADEMIC PATHWAY
              </span>
              <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-immersive-text-primary tracking-tight">
                {trackTitle}
              </h1>
              <p className="text-sm sm:text-base text-immersive-text-secondary font-medium leading-relaxed">
                {overviewSummary || `Welcome back, ${userProfile.name}! Ship code briefs, complete interactive milestones, and unlock expert mentor evaluations to defend your final portfolio.`}
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {track?.category && (
                  <span className="inline-flex items-center space-x-1 px-2 py-1 rounded-lg bg-immersive-bg border border-immersive-border text-[10px] font-mono font-bold text-immersive-secondary">
                    <GraduationCap className="w-3 h-3" />
                    <span>{track.category}</span>
                  </span>
                )}
                {track?.level && (
                  <span className="inline-flex items-center space-x-1 px-2 py-1 rounded-lg bg-immersive-bg border border-immersive-border text-[10px] font-mono font-bold text-immersive-secondary">
                    <Award className="w-3 h-3" />
                    <span>{track.level}</span>
                  </span>
                )}
                {track?.provider && (
                  <span className="inline-flex items-center space-x-1 px-2 py-1 rounded-lg bg-immersive-bg border border-immersive-border text-[10px] font-mono font-bold text-immersive-secondary">
                    <Building2 className="w-3 h-3" />
                    <span>{track.provider}</span>
                  </span>
                )}
                {trackSkills.slice(0, 4).map((skill) => (
                  <span key={skill} className="px-2 py-1 rounded-lg bg-immersive-bg border border-immersive-border text-[10px] font-mono font-bold text-immersive-text-secondary">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-immersive-bg border border-immersive-border/60 rounded-2xl p-4 w-full md:w-auto md:max-w-xs lg:max-w-sm shrink-0 flex items-center space-x-5 shadow-inner">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    className="stroke-immersive-border/40 fill-none"
                    strokeWidth="5"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    className="stroke-[#FF4B3E] fill-none transition-all duration-1000 ease-out"
                    strokeWidth="5"
                    strokeDasharray={2 * Math.PI * 28}
                    strokeDashoffset={2 * Math.PI * 28 * (1 - completionPercentage / 100)}
                  />
                </svg>
                <span className="absolute text-xs font-mono font-bold text-immersive-text-primary">
                  {completionPercentage}%
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-immersive-text-secondary uppercase tracking-wider block">
                  Overall Completion
                </span>
                <span className="text-base font-extrabold text-immersive-text-primary">
                  {completedCount} <span className="text-immersive-text-secondary text-xs">/ {totalLessons} Steps Completed</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Roadmap Tree - Left 8 columns */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-immersive-border/60">
              <div className="flex items-center space-x-2">
                <button
                  id="tab-btn-roadmap"
                  onClick={() => setOverviewTab("roadmap")}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold font-mono transition-all border ${
                    overviewTab === "roadmap"
                      ? "bg-immersive-secondary text-immersive-bg border-immersive-secondary shadow-md shadow-immersive-secondary/20"
                      : "bg-immersive-card border-immersive-border text-immersive-text-secondary hover:text-immersive-text-primary"
                  }`}
                >
                  📋 Course Syllabus & Overview
                </button>
              </div>
              <span className="text-xs font-mono text-immersive-text-secondary italic">
                View academic syllabus structure
              </span>
            </div>

            {overviewTab === "roadmap" ? (
              /* List of Milestones */
              <div id="roadmap-view-container" className="space-y-6">
                {curriculum.map((milestone, mIdx) => {
                  const mState = getMilestoneState(mIdx);
                  const isLocked = mState === "locked";
                  const isCompleted = mState === "completed";
                  const isActive = mState === "active";
                  const moduleChapters = chaptersByModule.get(milestone.number) || [];
                  const moduleTitle = moduleChapters[0]?.moduleTitle || milestone.title;

                  return (
                    <div
                      key={milestone.id}
                      id={`milestone-card-${milestone.id}`}
                      className={`bg-immersive-card border rounded-3xl p-5 sm:p-6 transition-all duration-300 relative ${
                        isLocked
                          ? "border-immersive-border/30 opacity-60"
                          : isActive
                          ? "border-[#FF4B3E]/40 shadow-[0_0_25px_rgba(255,75,62,0.04)]"
                          : "border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.02)]"
                      }`}
                    >
                      {/* Top line header of Milestone */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <span className={`px-2.5 py-1 text-[10px] font-mono font-bold rounded-md ${
                            isLocked 
                              ? "bg-immersive-bg border border-immersive-border text-immersive-text-secondary"
                              : isCompleted
                              ? "bg-emerald-500/10 border border-emerald-500/25 text-emerald-400"
                              : "bg-[#FF4B3E]/10 border border-[#FF4B3E]/25 text-[#FF4B3E]"
                          }`}>
                            MILESTONE 0{milestone.number}
                          </span>
                          <h3 className="text-base sm:text-lg font-extrabold text-immersive-text-primary font-sans line-clamp-1">
                            {moduleTitle}
                          </h3>
                        </div>

                        <div className="flex items-center space-x-2">
                          {isLocked ? (
                            <Lock className="w-4 h-4 text-immersive-text-secondary/60" />
                          ) : isCompleted ? (
                            <span className="text-xs font-bold text-emerald-400 flex items-center space-x-1">
                              <span>Unlocked & Completed</span>
                              <CheckCircle className="w-4 h-4" />
                            </span>
                          ) : (
                            <span className="text-xs font-bold text-immersive-secondary animate-pulse">
                              Active Stage
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-xs sm:text-sm text-immersive-text-secondary font-medium leading-relaxed mb-5">
                        {milestone.description}
                      </p>

                      {/* Milestone steps grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-5">
                        {milestone.lessons.map((lesson, lessonIndex) => {
                          const isLCompleted = completedLessons.includes(lesson.id);
                          const chapter = moduleChapters[lessonIndex];
                          const assessmentComplete = chapter
                            ? chapterProgress[`${chapter.module}-${chapter.chapter}`]?.assessmentPassed
                            : false;
                          return (
                            <div
                              key={lesson.id}
                              id={`lesson-item-${lesson.id}`}
                              className={`p-3.5 rounded-2xl border text-left flex items-start space-x-3.5 transition-all relative ${
                                isLocked
                                  ? "bg-immersive-bg/20 border-immersive-border/20"
                                  : isLCompleted
                                  ? "bg-emerald-500/5 border-emerald-500/25 hover:bg-emerald-500/10"
                                  : "bg-immersive-bg/55 border-immersive-border hover:border-immersive-secondary/50"
                              }`}
                            >
                              <div className="pt-0.5 z-10">
                                <button
                                  disabled={isLocked}
                                  onClick={() => toggleLesson(lesson.id, mIdx)}
                                  className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                                    isLCompleted 
                                      ? "bg-emerald-500 border-emerald-500 text-immersive-bg font-extrabold" 
                                      : "border-immersive-border/80 text-transparent hover:border-immersive-secondary"
                                  }`}
                                >
                                  {isLCompleted ? "✓" : ""}
                                </button>
                              </div>
                              
                              <div 
                                className={`space-y-1 flex-1 ${isLocked ? "cursor-not-allowed" : "cursor-pointer"}`}
                                onClick={() => {
                                  if (!isLocked) {
                                    localStorage.setItem("cohortia_active_lesson_id", lesson.id);
                                    const chapter = moduleChapters[lessonIndex];
                                    if (chapter) {
                                      localStorage.setItem("cohortia_active_learning_board_chapter", JSON.stringify({
                                        courseId: chapter.courseId,
                                        module: chapter.module,
                                        chapter: chapter.chapter,
                                      }));
                                    }
                                    onChangePage("learning-board");
                                  }
                                }}
                              >
                                <span className="text-xs font-bold text-immersive-text-primary leading-tight block line-clamp-1 hover:text-immersive-secondary transition-colors">
                                  {chapter?.chapterTitle || lesson.title}
                                </span>
                                <div className="flex items-center space-x-2 text-[10px] text-immersive-text-secondary/70 font-semibold font-mono">
                                  <Clock className="w-3 h-3 text-immersive-secondary" />
                                  <span>{lesson.duration}</span>
                                  <span>•</span>
                                  <span className="uppercase text-[9px]">{lesson.type}</span>
                                </div>
                                <div className={`flex items-center space-x-1 text-[9px] font-bold uppercase ${
                                  assessmentComplete ? "text-emerald-400" : "text-immersive-text-secondary/60"
                                }`}>
                                  <Award className="w-3 h-3" />
                                  <span>{assessmentComplete ? "Assessment completed" : "Assessment after chapter"}</span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                    </div>
                  );
                })}
              </div>
            ) : (
              /* Course Syllabus & Overview view */
              <div id="syllabus-view-container" className="space-y-8">
                {activeTrackId === "cpp" ? (
                  <>
                    {/* Course Overview Section */}
                    <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl shadow-immersive-shadow">
                      <h3 className="text-lg sm:text-xl font-extrabold text-immersive-text-primary font-sans flex items-center space-x-2">
                        <span className="w-1.5 h-5 bg-[#FF4B3E] rounded-full" />
                        <span>C++ Professional Pathway Overview</span>
                      </h3>
                      <p className="text-sm text-immersive-text-secondary leading-relaxed font-medium">
                        Welcome to the Cohortia C++ Certified Professional Programmer (CPP) course, an advanced journey designed to equip you with the deep expertise required to master modern C++ development. This comprehensive program delves into the intricate features and powerful paradigms that define C++, preparing you not just for certification, but for real-world application in high-performance computing, systems programming, game development, and embedded systems.
                      </p>
                      <p className="text-sm text-immersive-text-secondary leading-relaxed font-medium">
                        Throughout this course, you will learn to harness the full power of C++'s advanced features, including sophisticated template metaprogramming, the comprehensive Standard Template Library (STL), robust exception handling mechanisms, and modern concurrency primitives. We will explore how to write highly optimized, thread-safe, and memory-efficient code, crucial for applications where performance is paramount.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        <div className="p-4 bg-immersive-bg/50 rounded-2xl border border-immersive-border">
                          <span className="text-xs font-mono font-bold text-immersive-secondary block mb-1">AUDIENCE & PREREQUISITES</span>
                          <p className="text-xs text-immersive-text-secondary font-medium leading-relaxed">
                            Designed for experienced developers who understand fundamental variables, memory pointers, and basic class structures. Elevates knowledge to expert templates and low-level alignment systems.
                          </p>
                        </div>
                        <div className="p-4 bg-immersive-bg/50 rounded-2xl border border-immersive-border">
                          <span className="text-xs font-mono font-bold text-[#FF4B3E] block mb-1">CORE SKILLS OBTAINED</span>
                          <p className="text-xs text-immersive-text-secondary font-medium leading-relaxed font-mono">
                            • RAII & Smart Pointers<br />
                            • SFINAE & Variadic Templates<br />
                            • Multithreaded Pools & Mutexes<br />
                            • C++20 Ranges & Coroutines
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Syllabus Structure Section */}
                    <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl shadow-immersive-shadow">
                      <h3 className="text-lg sm:text-xl font-extrabold text-immersive-text-primary font-sans flex items-center space-x-2">
                        <span className="w-1.5 h-5 bg-immersive-secondary rounded-full" />
                        <span>Unified Syllabus Structure (12 Modules)</span>
                      </h3>
                      <div className="space-y-4">
                        {curriculum.map((milestone) => (
                          <div key={milestone.id} className="p-4 bg-immersive-bg/40 rounded-2xl border border-immersive-border/60 hover:border-immersive-secondary/40 transition-all flex items-start space-x-4">
                            <div className="w-10 h-10 rounded-xl bg-immersive-bg border border-immersive-border flex items-center justify-center shrink-0 font-mono text-xs font-extrabold text-immersive-secondary shadow-inner">
                              {milestone.number < 10 ? `0${milestone.number}` : milestone.number}
                            </div>
                            <div className="space-y-1">
                              <h4 className="text-sm font-extrabold text-immersive-text-primary">
                                {milestone.title}
                              </h4>
                              <p className="text-xs text-immersive-text-secondary font-semibold leading-relaxed">
                                {milestone.description}
                              </p>
                              <span className="text-[10px] font-mono font-bold text-[#FF4B3E] block pt-1">
                                🔑 Milestone Project Focus: {milestone.projectTitle}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 sm:p-8 text-center space-y-4 shadow-xl shadow-immersive-shadow">
                    <h3 className="text-lg font-extrabold text-immersive-text-primary">Syllabus Overview Not Configured</h3>
                    <p className="text-sm text-immersive-text-secondary">Syllabus structure details are currently only mapped for our professional C++ pathway. Select C++ track in your profile setup to inspect.</p>
                  </div>
                )}
              </div>
            )}

          </div>

          {/* Interactive Guide - Right 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Daily Habit Tracker */}
            <HabitLogger userProfile={userProfile} />
            
            {/* Guide Card */}
            {nextLessonInfo && (
              <div className="bg-gradient-to-br from-immersive-card to-[#FF4B3E]/5 border border-[#FF4B3E]/30 rounded-3xl p-6 shadow-xl shadow-immersive-shadow text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4B3E]/10 rounded-full blur-2xl pointer-events-none" />
                
                <span className="text-[10px] font-mono font-bold text-[#FF4B3E] uppercase tracking-widest block mb-2">
                  NEXT UP IN ROADMAP
                </span>
                
                <h3 className="text-lg font-extrabold text-immersive-text-primary font-sans mb-1 leading-snug">
                  {nextLessonInfo.lesson.title}
                </h3>
                <p className="text-xs text-immersive-text-secondary/90 font-medium leading-relaxed mb-5">
                  Part of Milestone 0{nextLessonInfo.milestoneNum}. Click the button below to start loading instructions or consult with your AI Mentor.
                </p>

                <div className="flex items-center space-x-4 mb-6 text-xs text-immersive-text-secondary font-semibold font-mono">
                  <div className="flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#FF4B3E]" />
                    <span>{nextLessonInfo.lesson.duration}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center space-x-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-immersive-secondary" />
                    <span className="uppercase">{nextLessonInfo.lesson.type}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5">
                  <button
                    onClick={() => {
                      localStorage.setItem("cohortia_active_lesson_id", nextLessonInfo.lesson.id);
                      onChangePage("learning-board");
                    }}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-immersive-bg bg-immersive-secondary hover:bg-white transition-all duration-200 cursor-pointer shadow-md shadow-immersive-shadow text-center flex items-center justify-center space-x-2"
                  >
                    <span>Start Learning ➔</span>
                  </button>
                  <button
                    onClick={() => onChangePage("mentor")}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-immersive-text-primary bg-immersive-bg border border-immersive-border hover:border-immersive-secondary/50 transition-all duration-200 cursor-pointer text-center flex items-center justify-center space-x-1.5"
                  >
                    <span>Consult AI Mentor</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Quick Actions / Tips */}
            <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 text-left space-y-4 shadow-xl shadow-immersive-shadow">
              <h3 className="text-sm font-extrabold text-immersive-text-primary font-mono uppercase tracking-wider flex items-center space-x-2">
                <span>COHORT STATS & TIPS</span>
              </h3>
              
              <div className="space-y-3.5 text-xs font-medium text-immersive-text-secondary leading-relaxed">
                <div className="p-3 bg-immersive-bg/50 rounded-2xl border border-immersive-border flex items-start space-x-3">
                  <Users className="w-4 h-4 text-immersive-secondary shrink-0 mt-0.5" />
                  <div>
                    <span className="text-immersive-text-primary font-bold block mb-0.5">Collaborative Review</span>
                    <span>Check out the <span className="text-immersive-secondary font-bold cursor-pointer underline" onClick={() => onChangePage("community")}>Community Forum</span> to solve difficult telemetry specs with peers.</span>
                  </div>
                </div>
                
                <div className="p-3 bg-immersive-bg/50 rounded-2xl border border-immersive-border flex items-start space-x-3">
                  <Play className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-immersive-text-primary font-bold block mb-0.5">Client Brief Deliverables</span>
                    <span>Submit and receive review scores for your milestones directly on the <span className="text-[#FF4B3E] font-bold cursor-pointer underline" onClick={() => onChangePage("projects")}>Projects</span> page.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Virtual Achievements and Badges */}
        <div className="mt-8">
          <BadgesComponent userProfile={userProfile} />
        </div>

      </div>
    </div>
  );
}
