import React, { useState } from 'react';
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
  Terminal,
  Code2,
  CheckCircle2,
  HelpCircle,
  Lightbulb,
  ArrowRight,
  Sparkles,
  Cpu,
  Database,
  Search,
} from 'lucide-react';

interface ClassroomTeachViewProps {
  manifest: PracticalManifest;
  currentStepIndex: number;
  currentTime: number;
  openingDurationSeconds: number;
  durationSeconds: number;
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
  onRunExample?: (step: WalkthroughStep) => void;
  exampleOutput?: string;
}

export const ClassroomTeachView: React.FC<ClassroomTeachViewProps> = ({
  manifest,
  currentStepIndex,
  currentTime,
  openingDurationSeconds,
  durationSeconds,
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
  onRunExample,
  exampleOutput,
}) => {
  const totalSlides = 2;
  const activeSlideIndex = currentStepIndex;
  const practicalTime = Math.max(0, currentTime - openingDurationSeconds);
  const activeStepIndex = Math.max(0, manifest.walkthroughSteps.reduce(
    (activeIndex, step, index) => practicalTime >= step.timestamp ? index : activeIndex,
    0,
  ));
  const activeStep: WalkthroughStep | undefined =
    activeSlideIndex > 0 ? manifest.walkthroughSteps[activeStepIndex] : undefined;
  const teachingCodeLines: Array<{ text: string; stepIndex: number }> = [];
  manifest.walkthroughSteps.forEach((step, stepIndex) => {
    const text = step.codeSnippet ?? step.codeOrText ?? '';
    const lines = text.split('\n');
    const isFullSnapshot = teachingCodeLines.length > 0
      && lines.length >= teachingCodeLines.length
      && teachingCodeLines.every((line, index) => line.text === lines[index]);
    const appendedLines = isFullSnapshot ? lines.slice(teachingCodeLines.length) : lines;
    appendedLines.forEach((line) => teachingCodeLines.push({ text: line, stepIndex }));
  });
  const currentStepLines = teachingCodeLines.filter((line) => line.stepIndex === activeStepIndex);
  const nextStepTimestamp = manifest.walkthroughSteps[activeStepIndex + 1]?.timestamp ?? manifest.durationSeconds;
  const activeStepDuration = Math.max(1, nextStepTimestamp - (activeStep?.timestamp || 0));
  const currentStepProgress = activeStep
    ? Math.max(0, Math.min(1, (practicalTime - activeStep.timestamp) / activeStepDuration))
    : 0;
  const visibleCurrentStepLineCount = activeStep
    ? Math.min(currentStepLines.length, Math.max(1, Math.floor(currentStepProgress * currentStepLines.length) + 1))
    : 0;
  const visibleCodeLines = [
    ...teachingCodeLines.filter((line) => line.stepIndex < activeStepIndex),
    ...currentStepLines.slice(0, visibleCurrentStepLineCount),
  ];

  // Prediction state for walkthrough steps
  const [selectedPrediction, setSelectedPrediction] = useState<string | null>(null);
  const [predictionSubmitted, setPredictionSubmitted] = useState<boolean>(false);

  // Simulation execution in Teach Mode
  const [cCompileStatus, setCCompileStatus] = useState<'idle' | 'compiled' | 'error'>('idle');
  const [cRunOutput, setCRunOutput] = useState<string | null>(null);

  React.useEffect(() => {
    setSelectedPrediction(null);
    setPredictionSubmitted(false);
    setCCompileStatus('idle');
    setCRunOutput(null);
  }, [activeSlideIndex, activeStep?.stepNumber, manifest.id]);

  const classroom = manifest.classroom;
  const progressPercent = Math.min(100, Math.max(0, (currentTime / durationSeconds) * 100));

  const formatSeconds = (sec: number) => {
    const s = Math.round(sec);
    return `${s}s`;
  };

  const handleSimulateCCompile = () => {
    setCCompileStatus('compiled');
  };

  const handleSimulateCRun = () => {
    const snippet = activeStep?.simulationSnippet;
    setCRunOutput(snippet?.output || 'The example completed successfully. Open the workspace to run it with your own values.');
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
        {/* SLIDE 0: Practical mission opening */}
        {activeSlideIndex === 0 ? (
          <div className="bg-slate-50 border border-slate-200/90 shadow-sm p-3 sm:p-4 h-full min-h-0 overflow-hidden">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-3">
              <span className="px-2 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-100">
                {classroom.moduleBadge}
              </span>
              <span>&gt;</span>
              <span>{classroom.chapterBreadcrumb}</span>
              <span>&gt;</span>
              <span className="text-slate-700">{classroom.topicBreadcrumb}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 h-[calc(100%-32px)] min-h-0">
              <div className="lg:col-span-7 flex flex-col gap-3 min-h-0 overflow-hidden">
                <section className="rounded-2xl bg-white border border-slate-200 p-4 sm:p-5 shadow-sm shrink-0">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Practical mission
                    </span>
                    <span className="px-2 py-1 rounded-md bg-rose-50 text-rose-700 border border-rose-100 text-[9px] font-bold uppercase tracking-wider">
                      {manifest.category}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-3xl font-black text-slate-950 tracking-tight leading-tight font-sans">
                    {classroom.mainTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed line-clamp-2">
                    {classroom.subtitle}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4">
                    <div className="rounded-xl p-3 bg-blue-50/80 border border-blue-100">
                      <h3 className="text-[10px] font-bold text-blue-700 mb-1">In this practical</h3>
                      <p className="text-xs text-slate-700 leading-snug line-clamp-3">
                        {classroom.inThisLesson}
                      </p>
                    </div>
                    <div className="rounded-xl p-3 bg-violet-50/80 border border-violet-100">
                      <h3 className="text-[10px] font-bold text-violet-700 mb-1">Coming up</h3>
                      <p className="text-xs text-slate-700 leading-snug line-clamp-3">
                        {classroom.comingUp || classroom.conceptMap.subtitle}
                      </p>
                    </div>
                    <div className="rounded-xl p-3 bg-amber-50/80 border border-amber-100">
                      <h3 className="text-[10px] font-bold text-amber-700 mb-1">Why it matters</h3>
                      <p className="text-xs text-slate-700 leading-snug line-clamp-3">
                        {classroom.whyItMatters}
                      </p>
                    </div>
                  </div>
                </section>

                <section className="rounded-2xl bg-white border border-slate-200 p-3 sm:p-4 shadow-sm flex-1 min-h-0 flex flex-col">
                  {classroom.exploreKeyTopics.length > 0 && (
                    <>
                      <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                        Explore chapter concepts in this practical
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 flex-1 min-h-0">
                        {classroom.exploreKeyTopics.slice(0, 3).map((topic, index) => (
                          <div key={index} className="rounded-xl p-3 bg-emerald-50/70 border border-emerald-100 min-h-0">
                            <h4 className="text-xs font-bold text-emerald-800 line-clamp-1">{topic.title}</h4>
                            <p className="text-[11px] text-slate-600 leading-snug mt-1 line-clamp-3">
                              {topic.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  <ul className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-2 shrink-0">
                    {classroom.quickOrientation.slice(0, 3).map((point, index) => (
                      <li key={index} className="flex items-start gap-1.5 text-[11px] text-slate-600 leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0 text-emerald-600" />
                        <span className="line-clamp-2">{point}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-3 min-h-0 overflow-hidden">
                <section className="rounded-2xl bg-white border border-slate-200 p-4 shadow-sm flex-1 min-h-0 flex flex-col">
                  <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                    {classroom.conceptMap.title}
                  </h3>
                  {classroom.conceptMap.subtitle && (
                    <p className="text-[11px] text-slate-500 mb-3">{classroom.conceptMap.subtitle}</p>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 content-start">
                    {classroom.conceptMap.nodes.slice(0, 4).map((node, index) => (
                      <div key={index} className="rounded-xl p-3 bg-blue-50/70 border border-blue-100 min-h-[68px]">
                        <div className="flex items-start gap-2">
                          <Plus className="w-4 h-4 mt-0.5 shrink-0 text-blue-600" />
                          <div className="min-w-0">
                            <h4 className="text-xs font-semibold text-slate-800 line-clamp-1">{node.label}</h4>
                            <p className="text-[10px] text-slate-500 leading-snug mt-1 line-clamp-2">{node.value}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-2xl bg-white border border-slate-200 p-4 shadow-sm shrink-0">
                  <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Getting ready
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed line-clamp-2">
                    {classroom.gettingReady}
                  </p>
                  <button
                    onClick={onNextSlide}
                    className="mt-3 w-full px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Start Practical</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </section>
              </div>
            </div>
          </div>
        ) : (
          /* SINGLE PRACTICAL WALKTHROUGH SLIDE: the code and explanation advance in place */
          activeStep && (
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-3 sm:p-3.5 grid grid-cols-1 lg:grid-cols-12 gap-3 h-full min-h-0 overflow-hidden">
              {/* Left Column (Cols 1-7): Code walkthrough, Active-line/block highlighting, Amber Callout, Teacher Narration */}
              <div className="lg:col-span-7 flex flex-col gap-2 min-h-0 overflow-hidden">
                <div className="flex min-h-0 flex-1 flex-col gap-2">
                  {/* Step Breadcrumb */}
                  <div className="flex shrink-0 items-center justify-between border-b border-slate-100 pb-1">
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

                  {/* Light Classroom Teaching Board with line-by-line typewriter reveal (Not a dark terminal UI) */}
                  <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xs">
                    <div className="flex items-center justify-between px-2.5 py-1 bg-slate-50 border-b border-slate-200 text-[10px] font-mono shrink-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-slate-700 uppercase tracking-wider">
                          {manifest.files.find((file) => file.name === activeStep.title)?.name || manifest.files[0]?.name || 'PRACTICAL WALKTHROUGH'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-indigo-600 font-semibold text-[10px]">
                          {visibleCodeLines.length} of {teachingCodeLines.length} lines
                        </span>
                      </div>
                    </div>

                    <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain bg-white p-2">
                      <div className="space-y-0.5">
                        {visibleCodeLines.map((line, idx) => {
                          const isCurrentSpeakingLine = line.stepIndex === activeStepIndex
                            && idx === visibleCodeLines.length - 1;
                          return (
                            <div
                              key={`${line.stepIndex}-${idx}`}
                              className={`flex items-start gap-1.5 rounded py-0.5 px-1.5 transition-colors duration-150 ${
                                line.stepIndex === activeStepIndex
                                  ? 'border-l-2 border-indigo-600 bg-blue-50 font-medium text-slate-900'
                                  : 'text-slate-700'
                              }`}
                            >
                              <span className="select-none w-5 shrink-0 pt-0.5 text-right text-[10px] text-slate-400">{idx + 1}</span>
                              <span className="flex-1 whitespace-pre-wrap break-words font-mono text-[11px] leading-relaxed">
                                {line.text}
                                {isCurrentSpeakingLine && isPlaying && (
                                  <span className="ml-1 inline-block h-3 w-1.5 animate-pulse bg-indigo-600 align-middle" />
                                )}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Amber Callout */}
                  {activeStep.callout && (
                    <div className="flex shrink-0 items-start gap-1.5 rounded-lg border border-amber-300 bg-amber-50/90 px-2.5 py-2 text-[11px] font-medium text-amber-950 shadow-2xs">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <div className="max-h-20 flex-1 overflow-y-auto overscroll-contain leading-relaxed">{activeStep.callout}</div>
                    </div>
                  )}
                </div>

                {/* Teacher Narration Speech Card (Foundation Lecture) */}
                <div className="max-h-[34%] min-h-24 shrink-0 overflow-y-auto overscroll-contain rounded-xl border border-slate-200 bg-slate-50 p-2 sm:p-2.5 text-[11px] leading-relaxed text-slate-700 sm:text-xs">
                  <div className="flex items-center gap-1.5 mb-0.5 text-slate-900 font-bold text-[10px] font-mono uppercase">
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    <span>{instructor.name} explains from foundations:</span>
                  </div>
                  <p className="whitespace-pre-wrap">{activeStep.narration}</p>
                </div>
              </div>

              {/* Right Column (Cols 8-12): Interactive Prediction Checkpoint & Simulator */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-1.5 min-h-0 overflow-hidden">
                {/* 1. If step has a Prediction Checkpoint, display it prominently on the right */}
                {activeStep.predictionQuestion ? (
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
                ) : manifest.categoryType === 'terminal_coding' || manifest.categoryType === 'cloud_console' ? (
                  /* 2. If no prediction question, display the full live simulation sandbox */
                  <div className="p-3.5 rounded-xl bg-slate-950 text-slate-100 border border-slate-800 shadow-2xs flex-1 flex flex-col font-mono text-xs min-h-0 justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-800">
                        <div className="flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="font-bold text-slate-200 text-xs">
                            {manifest.categoryType === 'cloud_console' ? 'Live Console Simulator' : 'Live Execution Simulator'}
                          </span>
                        </div>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                          Live
                        </span>
                      </div>

                      {activeStep.simulationSnippet && (
                        <div className="p-2 rounded bg-slate-900 border border-slate-800 space-y-1 mb-2">
                          <span className="text-slate-400 font-bold block text-[9px] uppercase tracking-wider">
                            Run this command
                          </span>
                          <code className="text-emerald-400 font-bold block text-[11px]">
                            $ {activeStep.simulationSnippet.command}
                          </code>
                          <span className="text-slate-400 font-bold block text-[9px] uppercase tracking-wider pt-1">
                            Expected result
                          </span>
                          <pre className="text-slate-300 block text-[10px] whitespace-pre-wrap font-mono">
                            {activeStep.simulationSnippet.output}
                          </pre>
                          {activeStep.simulationSnippet.actionNote && (
                            <span className="text-slate-400 block text-[10px] leading-relaxed">
                              {activeStep.simulationSnippet.actionNote}
                            </span>
                          )}
                        </div>
                      )}

                      <div className="space-y-1.5">
                        <span className="text-[9px] uppercase font-bold text-slate-400 block">
                          Try In Simulation:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {manifest.categoryType === 'terminal_coding' && (
                            <button
                              onClick={handleSimulateCCompile}
                              className="px-2 py-0.5 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-bold flex items-center gap-1 cursor-pointer"
                            >
                              <Cpu className="w-3 h-3" />
                              <span>Compile</span>
                            </button>
                          )}
                          <button
                            onClick={() => {
                              onRunExample?.(activeStep);
                              handleSimulateCRun();
                            }}
                            className="px-2 py-0.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-bold flex items-center gap-1 cursor-pointer"
                          >
                            <Play className="w-3 h-3 fill-current" />
                            <span>Execute</span>
                          </button>
                        </div>

                        {cCompileStatus === 'compiled' && (
                          <div className="text-[10px] text-emerald-400 pt-0.5">
                            ✓ Compilation succeeded. Output binary generated.
                          </div>
                        )}
                        {cRunOutput && (
                          <div className="text-[10px] text-emerald-300 bg-slate-900 p-1.5 rounded border border-slate-800">
                            {exampleOutput || cRunOutput}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                      <span>Status: Ready</span>
                      <span className="text-emerald-400">Exit: 0</span>
                    </div>
                  </div>
                ) : (
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex-1 flex flex-col justify-center min-h-0">
                    <div className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                      <span className="text-xs font-bold">Guided practice checkpoint</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2">
                      This practical uses its generated workspace and evidence checks. There is no executable runtime for this category.
                    </p>
                  </div>
                )}

                {/* Practical Workspace Transition Box */}
                <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between shrink-0">
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
                    className="px-3 py-1 rounded-md bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold font-mono transition-colors shadow-xs cursor-pointer"
                  >
                    Open Workspace
                  </button>
                </div>
              </div>
            </div>
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
            {formatSeconds(currentTime)} / {formatSeconds(durationSeconds)}
          </div>
        </div>

        {/* Center: Progress Scrubber Track */}
        <div className="flex-1 mx-2 relative group flex items-center">
          <input
            type="range"
            min="0"
            max={durationSeconds}
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
