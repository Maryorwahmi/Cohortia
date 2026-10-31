import React, { useState, useEffect, useRef, useMemo } from 'react';
import { PracticalManifest, WalkthroughStep, InstructorPersona } from '../types/practical';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  Plus,
  Code2,
  CheckCircle2,
  HelpCircle,
  Lightbulb,
  ArrowRight,
  Sparkles,
  Database,
  Search,
} from 'lucide-react';



interface ClassroomTeachViewProps {
  manifest: PracticalManifest;
  currentStepIndex: number;
  currentTime: number;
  isPlaying: boolean;
  isMuted: boolean;
  playbackSpeed: number;
  instructor: InstructorPersona;
  onTogglePlay: () => void;
  onReplay: () => void;
  onToggleMute: () => void;
  onSeek: (seconds: number) => void;
  onSelectStep: (stepIndex: number) => void;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  onOpenWorkspace: () => void;
}

export const ClassroomTeachView: React.FC<ClassroomTeachViewProps> = ({
  manifest,
  currentStepIndex,
  currentTime,
  isPlaying,
  isMuted,
  playbackSpeed,
  instructor,
  onTogglePlay,
  onReplay,
  onToggleMute,
  onSeek,
  onSelectStep,
  onPrevSlide,
  onNextSlide,
  onOpenWorkspace,
}) => {
  const totalSlides = 1 + manifest.walkthroughSteps.length; // Slide 0 = Orientation, Slide 1..N = Steps
  const activeSlideIndex = currentStepIndex; // 0 is Orientation, 1..N are steps
  const activeStep: WalkthroughStep | undefined =
    activeSlideIndex > 0 ? manifest.walkthroughSteps[activeSlideIndex - 1] : undefined;

  // Prediction state for walkthrough steps
  const [selectedPrediction, setSelectedPrediction] = useState<string | null>(null);
  const [predictionSubmitted, setPredictionSubmitted] = useState<boolean>(false);

  React.useEffect(() => {
    setSelectedPrediction(null);
    setPredictionSubmitted(false);
  }, [activeSlideIndex, manifest.id]);

  const classroom = manifest.classroom;
  const progressPercent = Math.min(100, Math.max(0, (currentTime / manifest.durationSeconds) * 100));

  const formatSeconds = (sec: number) => {
    const s = Math.round(sec);
    return `${s}s`;
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50 text-slate-800 font-sans select-none overflow-hidden">
      {/* 1. Top Header Bar matching image_10250715.png */}
      <div className="px-5 py-2.5 bg-white border-b border-slate-200/90 flex items-center justify-between shadow-2xs shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          {/* Coral Outline Pill Badge: 16:9 HD CLASSROOM */}
          <span className="px-2 py-0.5 rounded-md border border-rose-300 text-rose-600 bg-rose-50/60 text-[10px] font-mono font-bold tracking-wider shrink-0">
            {classroom.classroomBadge}
          </span>

          {/* Lesson Title */}
          <h1 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
            {manifest.lessonLabel}
          </h1>
        </div>

        {/* Slide Progress Dots on the Right */}
        <div className="flex items-center gap-1.5 shrink-0">
          {Array.from({ length: totalSlides }).map((_, idx) => {
            const isActive = idx === activeSlideIndex;
            return (
              <button
                key={idx}
                onClick={() => onSelectStep(idx)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#ff4b4b] scale-110 shadow-xs'
                    : 'bg-[#cbd5e1] hover:bg-[#94a3b8]'
                }`}
                title={`Jump to Slide ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>

      {/* 2. Main Classroom Canvas Container (Guaranteed 100% Fit, Zero Clipping) */}
      <div className="flex-1 p-2 sm:p-3 overflow-hidden min-h-0 flex flex-col justify-center">
        {/* SLIDE 0: Orientation & Concept Map */}
        {activeSlideIndex === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-3.5 sm:p-4 grid grid-cols-1 lg:grid-cols-12 gap-3 h-full min-h-0 overflow-hidden">
            {/* Left Column (Cols 1-7): Orientation, Objectives, & Key Topics */}
            <div className="lg:col-span-7 flex flex-col justify-between min-h-0 overflow-hidden gap-2">
              <div className="min-h-0">
                {/* Breadcrumb */}
                <div className="flex items-center gap-1.5 text-xs font-mono mb-0.5">
                  <span className="px-1.5 py-0.5 rounded border border-blue-400 text-blue-600 font-bold text-[10px] bg-blue-50/50">
                    {classroom.moduleBadge}
                  </span>
                  <span className="text-slate-400 font-semibold text-[10px]">&gt;</span>
                  <span className="text-slate-500 font-semibold text-[10px]">{classroom.chapterBreadcrumb}</span>
                  <span className="text-slate-400 font-semibold text-[10px]">&gt;</span>
                  <span className="text-slate-700 font-bold tracking-wider text-[10px]">{classroom.topicBreadcrumb}</span>
                </div>

                {/* Main Headline & Subtitle */}
                <h2 className="text-base sm:text-xl font-black text-slate-950 tracking-tight leading-snug mb-0.5 font-sans">
                  {classroom.mainTitle}
                </h2>
                <p className="text-[11px] text-slate-600 mb-1.5 leading-snug line-clamp-1 sm:line-clamp-2">
                  {classroom.subtitle}
                </p>

                {/* Two Side-by-Side Pill Cards: In This Lesson & Why It Matters */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-1.5">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-blue-50/70 border border-blue-200/60 shadow-2xs">
                    <span className="text-[9px] font-mono font-bold text-blue-600 uppercase tracking-wider block mb-0.5">
                      IN THIS LESSON
                    </span>
                    <p className="text-[11px] text-slate-800 leading-tight font-medium line-clamp-2">
                      {classroom.inThisLesson}
                    </p>
                  </div>

                  <div className="p-1.5 sm:p-2 rounded-lg bg-emerald-50/70 border border-emerald-200/60 shadow-2xs">
                    <span className="text-[9px] font-mono font-bold text-emerald-700 uppercase tracking-wider block mb-0.5">
                      WHY IT MATTERS
                    </span>
                    <p className="text-[11px] text-slate-800 leading-tight font-medium line-clamp-2">
                      {classroom.whyItMatters}
                    </p>
                  </div>
                </div>

                {/* Quick orientation bullet list */}
                <div className="mb-1">
                  <h3 className="text-[11px] font-bold text-slate-900 mb-0.5">
                    Quick orientation
                  </h3>
                  <ul className="space-y-0.5 text-[11px] text-slate-600 leading-tight">
                    {classroom.quickOrientation.slice(0, 3).map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-1.5 min-w-0">
                        <span className="text-slate-400 font-bold leading-4 shrink-0">•</span>
                        <span className="text-[11px] text-slate-600 leading-tight truncate min-w-0 flex-1">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Amber Box: Explore Key Topics (Cleanly separated, no overlap) */}
              <div className="p-2 rounded-xl bg-amber-50/40 border-l-4 border-l-amber-400 border border-amber-200/80 shadow-2xs shrink-0">
                <span className="text-[9px] font-mono font-bold text-amber-900 uppercase tracking-wider block mb-1">
                  EXPLORE KEY TOPICS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {classroom.exploreKeyTopics.map((topic, tIdx) => (
                    <div
                      key={tIdx}
                      className="p-1.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs"
                    >
                      <h4 className="text-[11px] font-bold text-slate-900 truncate">
                        {topic.title}
                      </h4>
                      <p className="text-[10px] text-slate-500 leading-tight line-clamp-2 mt-0.5">
                        {topic.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (Cols 8-12): Concept Map & Getting Ready */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-2 min-h-0 overflow-hidden">
              {/* Concept Map Box */}
              <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200 shadow-2xs flex-1 flex flex-col justify-between min-h-0">
                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <div className="w-4 h-4 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                      <Plus className="w-3 h-3" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                        {classroom.conceptMap.title}
                      </h3>
                      <p className="text-[10px] text-slate-400">
                        {classroom.conceptMap.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* 2x2 Concept Grid */}
                  <div className="grid grid-cols-2 gap-1.5">
                    {classroom.conceptMap.nodes.map((node, nIdx) => (
                      <div
                        key={nIdx}
                        className="p-1.5 rounded-lg border border-slate-200/80 bg-slate-50/60 flex flex-col justify-center min-h-[42px]"
                      >
                        <span className="text-[11px] font-bold text-slate-800 mb-0.5 truncate">
                          {node.label}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 truncate">
                          {node.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between mt-1">
                  <span className="text-[10px] font-mono text-slate-400">
                    Interactive Concept
                  </span>
                  <button
                    onClick={onNextSlide}
                    className="px-3 py-1 rounded-md bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold font-mono shadow-xs transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Start Walkthrough</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Getting Ready Box */}
              <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-2xs shrink-0">
                <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-0.5">
                  GETTING READY
                </span>
                <p className="text-[11px] text-slate-700 leading-snug line-clamp-2">
                  {classroom.gettingReady}
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* SLIDES 1..N: Step-by-Step Practical Simulation Walkthrough */
          activeStep && (
            activeStep.predictionQuestion ? (
              /* Two-column layout when an interactive prediction checkpoint exists */
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-3 sm:p-3.5 grid grid-cols-1 lg:grid-cols-12 gap-3 h-full min-h-0 overflow-hidden">
                {/* Left Column (Cols 1-7): Code walkthrough & Amber Callout */}
                <div className="lg:col-span-7 flex flex-col justify-between min-h-0 overflow-hidden gap-2">
                  <div className="flex-1 flex flex-col min-h-0 space-y-1.5">
                    {/* Step Breadcrumb */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-0.5 shrink-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] font-mono font-bold text-rose-600 uppercase">
                          {manifest.category}
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="text-[11px] font-mono text-slate-500">
                          STEP {activeStep.stepNumber} of {manifest.walkthroughSteps.length}
                        </span>
                      </div>

                      <span className="text-xs font-bold text-slate-800 truncate max-w-[260px]">
                        {activeStep.title}
                      </span>
                    </div>

                    {/* Light Classroom Teaching Board with line-by-line typewriter reveal */}
                    <div className="rounded-xl border border-slate-200 bg-white shadow-2xs overflow-hidden flex flex-col flex-1 min-h-0">
                      <div className="flex items-center justify-between px-2.5 py-1 bg-slate-50 border-b border-slate-200 text-[10px] font-mono shrink-0">
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-slate-700 uppercase tracking-wider">
                            TEACHING STEP {activeStep.stepNumber} • {manifest.files[0]?.name || 'source'}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-indigo-600 font-semibold text-[10px]">
                            Line {Math.min(
                              isPlaying
                                ? Math.min(
                                    (activeStep.codeSnippet ?? activeStep.codeOrText ?? '').split('\n').length,
                                    Math.max(1, Math.floor((Math.max(0, currentTime - activeStep.timestamp) / Math.max(6, manifest.durationSeconds / manifest.walkthroughSteps.length)) * (activeStep.codeSnippet ?? activeStep.codeOrText ?? '').split('\n').length) + 1)
                                  )
                                : (activeStep.codeSnippet ?? activeStep.codeOrText ?? '').split('\n').length,
                              (activeStep.codeSnippet ?? activeStep.codeOrText ?? '').split('\n').length
                            )} of {(activeStep.codeSnippet ?? activeStep.codeOrText ?? '').split('\n').length}
                          </span>
                        </div>
                      </div>

                      <div className="p-2 sm:p-2.5 overflow-y-auto space-y-0.5 flex-1 min-h-0 bg-white">
                        {(() => {
                          const codeLines = (activeStep.codeSnippet ?? activeStep.codeOrText ?? '').split('\n');
                          const stepDuration = Math.max(6, manifest.durationSeconds / manifest.walkthroughSteps.length);
                          const timeInStep = Math.max(0, currentTime - activeStep.timestamp);
                          const visibleCount = isPlaying
                            ? Math.min(codeLines.length, Math.max(1, Math.floor((timeInStep / stepDuration) * codeLines.length) + 1))
                            : codeLines.length;

                          return codeLines.map((line, idx) => {
                            const isVisible = idx < visibleCount;
                            const isCurrentSpeakingLine = idx === visibleCount - 1;
                            const isExactLine = activeStep.activeLineIndex === idx;
                            const inBlock =
                              activeStep.activeBlockRange &&
                              idx >= activeStep.activeBlockRange[0] &&
                              idx <= activeStep.activeBlockRange[1];
                            const isHighlighted = isExactLine || inBlock || isCurrentSpeakingLine;

                            if (!isVisible) {
                              return (
                                <div key={idx} className="flex items-center gap-1.5 py-0.5 px-1.5 opacity-20 select-none">
                                  <span className="text-slate-300 text-[10px] w-4 text-right">{idx + 1}</span>
                                  <span className="text-slate-300 font-mono text-[11px] italic">...</span>
                                </div>
                              );
                            }

                            return (
                              <div
                                key={idx}
                                className={`flex items-start gap-1.5 py-0.5 px-1.5 rounded transition-all duration-150 ${
                                  isHighlighted
                                    ? 'bg-blue-50 text-slate-900 border-l-2 border-indigo-600 font-medium'
                                    : 'text-slate-700'
                                }`}
                              >
                                <span className="select-none text-slate-400 text-[10px] w-4 text-right pt-0.5">
                                  {idx + 1}
                                </span>
                                <span className="flex-1 whitespace-pre-wrap font-mono text-[11px] sm:text-xs leading-relaxed">
                                  {line}
                                  {isCurrentSpeakingLine && (
                                    <span className="inline-block w-1.5 h-3 ml-1 bg-indigo-600 animate-pulse align-middle" />
                                  )}
                                </span>
                              </div>
                            );
                          });
                        })()}
                      </div>
                    </div>
                  </div>

                  {/* Amber Callout Box */}
                  {activeStep.callout && (
                    <div className="rounded-lg border border-amber-300 bg-amber-50/90 px-3 py-1.5 text-amber-950 font-medium text-[11px] sm:text-xs flex items-center gap-2 shadow-2xs shrink-0">
                      <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
                      <div className="flex-1 leading-snug">{activeStep.callout}</div>
                    </div>
                  )}
                </div>

                {/* Right Column (Cols 8-12): Interactive Prediction Checkpoint & Practice CTA */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-2 min-h-0 overflow-hidden">
                  <div className="p-2.5 sm:p-3 rounded-xl border border-indigo-200 bg-indigo-50/60 flex-1 flex flex-col justify-between min-h-0">
                    <div>
                      <div className="flex items-center gap-1.5 mb-1.5 text-indigo-900 font-bold text-[11px] uppercase font-mono">
                        <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
                        <span>Interactive Prediction Checkpoint</span>
                      </div>

                      <p className="text-xs font-semibold text-slate-900 mb-2 leading-snug">
                        {activeStep.predictionQuestion.prompt}
                      </p>

                      <div className="space-y-1.5 mb-2">
                        {activeStep.predictionQuestion.options.map((opt) => {
                          const isSelected = selectedPrediction === opt.id;
                          let optStyle = 'bg-white border-slate-200 text-slate-700 hover:border-indigo-300';
                          if (predictionSubmitted) {
                            optStyle = opt.isCorrect
                              ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-semibold'
                              : isSelected
                              ? 'bg-rose-50 border-rose-300 text-rose-950'
                              : 'bg-white text-slate-500';
                          } else if (isSelected) {
                            optStyle = 'bg-indigo-50 border-indigo-500 text-indigo-950 font-semibold ring-1 ring-indigo-500';
                          }

                          return (
                            <button
                              key={opt.id}
                              disabled={predictionSubmitted}
                              onClick={() => setSelectedPrediction(opt.id)}
                              className={`w-full text-left p-1.5 px-2 rounded-lg border text-xs flex items-start gap-1.5 transition-all cursor-pointer ${optStyle}`}
                            >
                              <span className="text-[10px] mt-0.5">
                                {isSelected ? '●' : '○'}
                              </span>
                              <span className="flex-1 leading-snug">{opt.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {!predictionSubmitted ? (
                      <button
                        onClick={() => selectedPrediction && setPredictionSubmitted(true)}
                        disabled={!selectedPrediction}
                        className="px-3 py-1 rounded-md bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 disabled:opacity-40 transition-colors cursor-pointer self-start"
                      >
                        Check Prediction
                      </button>
                    ) : (
                      <div className="text-[11px] text-slate-800 bg-white p-2 rounded-md border border-slate-200 leading-snug">
                        {activeStep.predictionQuestion.options.find((o) => o.id === selectedPrediction)?.feedback}
                      </div>
                    )}
                  </div>

                  {/* Practical Workspace Transition Box */}
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between shrink-0">
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">
                        Ready for hands-on practice?
                      </span>
                      <span className="text-[10px] text-slate-500">
                        Open full workspace with editor, terminal & milestones.
                      </span>
                    </div>

                    <button
                      onClick={onOpenWorkspace}
                      className="px-3 py-1.5 rounded-md bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold font-mono transition-colors shadow-xs cursor-pointer flex items-center gap-1.5"
                    >
                      <span>Open Workspace</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Full-Width Teaching Step Layout (Spacious, Zero Dead Space, No Simulator) */
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-3.5 sm:p-4 flex flex-col justify-between h-full min-h-0 overflow-hidden gap-2.5">
                {/* Step Top Bar: Breadcrumb on left, Open Workspace CTA on right */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-2 shrink-0">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="px-2 py-0.5 rounded border border-rose-200 text-rose-600 bg-rose-50/60 font-mono font-bold text-[10px] uppercase">
                      {manifest.category}
                    </span>
                    <span className="text-slate-300 font-bold">•</span>
                    <span className="text-xs font-mono font-bold text-slate-600">
                      STEP {activeStep.stepNumber} of {manifest.walkthroughSteps.length}
                    </span>
                    <span className="text-slate-300 font-bold">•</span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                      {activeStep.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="hidden sm:inline text-[11px] text-slate-500 font-medium">
                      Ready for hands-on?
                    </span>
                    <button
                      onClick={onOpenWorkspace}
                      className="px-3.5 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold font-mono transition-colors shadow-xs cursor-pointer flex items-center gap-1.5"
                    >
                      <span>Open Workspace</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Light Classroom Teaching Board with Full Width and Height */}
                <div className="rounded-xl border border-slate-200 bg-white shadow-2xs overflow-hidden flex flex-col flex-1 min-h-0">
                  <div className="flex items-center justify-between px-3 py-1.5 bg-slate-50 border-b border-slate-200 text-[10px] font-mono shrink-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-700 uppercase tracking-wider">
                        TEACHING STEP {activeStep.stepNumber} • {manifest.files[0]?.name || 'source'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-indigo-600 font-semibold text-[10px]">
                        Line {Math.min(
                          isPlaying
                            ? Math.min(
                                (activeStep.codeSnippet ?? activeStep.codeOrText ?? '').split('\n').length,
                                Math.max(1, Math.floor((Math.max(0, currentTime - activeStep.timestamp) / Math.max(6, manifest.durationSeconds / manifest.walkthroughSteps.length)) * (activeStep.codeSnippet ?? activeStep.codeOrText ?? '').split('\n').length) + 1)
                              )
                            : (activeStep.codeSnippet ?? activeStep.codeOrText ?? '').split('\n').length,
                          (activeStep.codeSnippet ?? activeStep.codeOrText ?? '').split('\n').length
                        )} of {(activeStep.codeSnippet ?? activeStep.codeOrText ?? '').split('\n').length}
                      </span>
                    </div>
                  </div>

                  <div className="p-3 sm:p-4 overflow-y-auto space-y-0.5 flex-1 min-h-0 bg-white">
                    {(() => {
                      const codeLines = (activeStep.codeSnippet ?? activeStep.codeOrText ?? '').split('\n');
                      const stepDuration = Math.max(6, manifest.durationSeconds / manifest.walkthroughSteps.length);
                      const timeInStep = Math.max(0, currentTime - activeStep.timestamp);
                      const visibleCount = isPlaying
                        ? Math.min(codeLines.length, Math.max(1, Math.floor((timeInStep / stepDuration) * codeLines.length) + 1))
                        : codeLines.length;

                      return codeLines.map((line, idx) => {
                        const isVisible = idx < visibleCount;
                        const isCurrentSpeakingLine = idx === visibleCount - 1;
                        const isExactLine = activeStep.activeLineIndex === idx;
                        const inBlock =
                          activeStep.activeBlockRange &&
                          idx >= activeStep.activeBlockRange[0] &&
                          idx <= activeStep.activeBlockRange[1];
                        const isHighlighted = isExactLine || inBlock || isCurrentSpeakingLine;

                        if (!isVisible) {
                          return (
                            <div key={idx} className="flex items-center gap-2 py-0.5 px-2 opacity-20 select-none">
                              <span className="text-slate-300 text-[11px] w-5 text-right">{idx + 1}</span>
                              <span className="text-slate-300 font-mono text-xs italic">...</span>
                            </div>
                          );
                        }

                        return (
                          <div
                            key={idx}
                            className={`flex items-start gap-2 py-0.5 px-2 rounded transition-all duration-150 ${
                              isHighlighted
                                ? 'bg-blue-50 text-slate-900 border-l-2 border-indigo-600 font-medium'
                                : 'text-slate-700'
                            }`}
                          >
                            <span className="select-none text-slate-400 text-[11px] w-5 text-right pt-0.5">
                              {idx + 1}
                            </span>
                            <span className="flex-1 whitespace-pre-wrap font-mono text-xs leading-relaxed">
                              {line}
                              {isCurrentSpeakingLine && (
                                <span className="inline-block w-1.5 h-3 ml-1 bg-indigo-600 animate-pulse align-middle" />
                              )}
                            </span>
                          </div>
                        );
                      });
                    })()}
                  </div>
                </div>

                {/* Amber Callout Box (Full Width, Crisp and Clear) */}
                {activeStep.callout && (
                  <div className="rounded-xl border border-amber-300 bg-amber-50/90 px-3.5 py-2 text-amber-950 font-medium text-xs flex items-center gap-2.5 shadow-2xs shrink-0">
                    <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
                    <div className="flex-1 leading-snug">{activeStep.callout}</div>
                  </div>
                )}
              </div>
            )
          )
        )}
      </div>

      {/* 3. Bottom Scrubber & Player Bar matching image_10250715.png */}
      <div className="px-4 py-2 bg-white border-t border-slate-200/90 flex items-center justify-between gap-3 shadow-2xs shrink-0 select-none">
        {/* Left Controls: Red Play, Dark Replay, Dark Speaker, Time */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Red Rounded Play/Pause Button */}
          <button
            onClick={onTogglePlay}
            className="w-7 h-7 rounded-lg bg-[#ff4b4b] hover:bg-[#e03b3b] text-white flex items-center justify-center shadow-xs transition-colors cursor-pointer"
            title={isPlaying ? 'Pause lecture' : 'Play lecture'}
          >
            {isPlaying ? (
              <Pause className="w-3.5 h-3.5 fill-current" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            )}
          </button>

          {/* Dark Circular Replay Button */}
          <button
            onClick={onReplay}
            className="w-7 h-7 rounded-lg bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center shadow-xs transition-colors cursor-pointer"
            title="Replay from beginning"
          >
            <RotateCcw className="w-3 h-3" />
          </button>

          {/* Dark Circular Speaker/Audio Button */}
          <button
            onClick={onToggleMute}
            className="w-7 h-7 rounded-lg bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center shadow-xs transition-colors cursor-pointer"
            title={isMuted ? 'Unmute teacher voice' : 'Mute teacher voice'}
          >
            {isMuted ? (
              <VolumeX className="w-3 h-3 text-slate-400" />
            ) : (
              <Volume2 className="w-3 h-3 text-white" />
            )}
          </button>

          {/* Time Display */}
          <div className="text-xs font-mono font-medium text-slate-600 ml-1">
            {formatSeconds(currentTime)} / {formatSeconds(manifest.durationSeconds)}
          </div>
        </div>

        {/* Center: Progress Scrubber Track */}
        <div className="flex-1 mx-2 relative group flex items-center">
          <input
            type="range"
            min="0"
            max={manifest.durationSeconds}
            step="0.5"
            value={currentTime}
            onChange={(e) => onSeek(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#ff4b4b] focus:outline-hidden"
            style={{
              background: `linear-gradient(to right, #ff4b4b 0%, #ff4b4b ${progressPercent}%, #e2e8f0 ${progressPercent}%, #e2e8f0 100%)`,
            }}
          />
        </div>

        {/* Right Controls: Slide X/Y and Navigation Circles */}
        <div className="flex items-center gap-2.5 shrink-0">
          <span className="text-xs font-mono text-slate-400">
            Slide {activeSlideIndex + 1}/{totalSlides}
          </span>

          {/* Previous Arrow Circle */}
          <button
            onClick={onPrevSlide}
            disabled={activeSlideIndex === 0}
            className="w-7 h-7 rounded-lg bg-slate-900 hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed text-white flex items-center justify-center shadow-xs transition-colors cursor-pointer"
            title="Previous slide"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>

          {/* Next Arrow Circle */}
          <button
            onClick={onNextSlide}
            disabled={activeSlideIndex === totalSlides - 1}
            className="w-7 h-7 rounded-lg bg-slate-900 hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed text-white flex items-center justify-center shadow-xs transition-colors cursor-pointer"
            title="Next slide"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
