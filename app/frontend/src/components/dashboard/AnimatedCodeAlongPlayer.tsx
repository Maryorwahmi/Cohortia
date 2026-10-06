import { useEffect, useRef, useState } from "react";
import { Pause, Play, RotateCcw, Volume2, VolumeX } from "lucide-react";
import type { CodeWalkthroughSegment, LearningBoardPracticalFile, LearningBoardPracticalTask, PracticalTeachingPlaylistStep, PracticalTeachingStep } from "../../services/learningBoardsApi";
import { isMicrosoftEdge, resolveCourseNarratorVoice } from "../../utils/courseVoiceMapping";
import { estimateSpeechDurationSeconds, SpeechNarrationQueue } from "../../lib/speechNarration";
import { useTheme } from "../../context/ThemeContext";

const TEACHER_SPEECH_RATE = 0.82;

/** Mirrors the homepage's simulated IDE scene for every practical code-along. */
interface AnimatedCodeAlongPlayerProps {
  playlist?: PracticalTeachingPlaylistStep[];
  files?: LearningBoardPracticalFile[];
  walkthrough?: CodeWalkthroughSegment[];
  category?: string | null;
  activityKind?: string | null;
  teachingSteps?: PracticalTeachingStep[];
  courseId?: string | null;
  tasks?: LearningBoardPracticalTask[];
  narratorGuide?: string | null;
  output?: string[];
  onOpenLab?: () => void;
  onWalkthroughComplete?: () => void;
  onGuideChange?: (guide: { goal: string; narration: string; prompt: string; focus?: string }) => void;
  openButtonLabel?: string;
  isActive?: boolean;
}

function hasReadableNarration(
  value: string | null | undefined,
  sourceInstructions?: string | null,
): value is string {
  const text = value?.trim();
  const normalizedText = text?.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim() || "";
  const normalizedSource = sourceInstructions?.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim() || "";
  const repeatsSource = normalizedSource.length >= 80 && normalizedText.includes(normalizedSource);
  return Boolean(text && text.length <= 1800 && !repeatsSource && !/```|(?:^|\n)\s*(?:\d+[.)]|[-*])\s/m.test(text));
}

function taskNarration(task: LearningBoardPracticalTask | undefined, fallback?: string | null): string {
  const candidate = [
    task?.narratorGuide,
    task?.teaching?.teacherTalk,
    fallback,
  ].find((candidate) => hasReadableNarration(candidate, task?.instruction));
  if (candidate) return candidate;

  const focus = task?.teaching?.learningGoal || task?.title || "the practical";
  return `Let’s focus on ${focus}. Watch the code change, then compare the result with your prediction.`;
}

function narrationDuration(text: string): number {
  return Math.max(3, Math.ceil(estimateSpeechDurationSeconds(text, TEACHER_SPEECH_RATE)));
}

function revealWalkthroughCode(steps: CodeWalkthroughSegment[], elapsedSeconds: number): {
  code: string;
  activeStep?: CodeWalkthroughSegment;
  progress: number;
} {
  let elapsed = 0;
  const chunks: string[] = [];
  for (const step of steps) {
    const duration = narrationDuration(step.speakerText || step.explanation || step.codeLine);
    if (elapsedSeconds >= elapsed + duration) {
      chunks.push(step.codeLine);
      elapsed += duration;
      continue;
    }
    if (elapsedSeconds >= elapsed) {
      const progress = Math.max(0, Math.min(1, (elapsedSeconds - elapsed) / duration));
      chunks.push(step.codeLine.slice(0, Math.ceil(step.codeLine.length * progress)));
      return { code: chunks.filter(Boolean).join("\n"), activeStep: step, progress };
    }
    return { code: chunks.filter(Boolean).join("\n"), activeStep: step, progress: 0 };
  }
  return { code: chunks.filter(Boolean).join("\n"), progress: 1 };
}

function revealTeachingText(steps: PracticalTeachingStep[], elapsedSeconds: number): {
  text: string;
  activeStep?: PracticalTeachingStep;
  progress: number;
} {
  let elapsed = 0;
  const chunks: string[] = [];
  for (const step of steps) {
    const duration = narrationDuration(step.speakerText || step.explanation || step.displayText);
    if (elapsedSeconds >= elapsed + duration) {
      chunks.push(step.displayText);
      elapsed += duration;
      continue;
    }
    if (elapsedSeconds >= elapsed) {
      const progress = Math.max(0, Math.min(1, (elapsedSeconds - elapsed) / duration));
      chunks.push(step.displayText.slice(0, Math.ceil(step.displayText.length * progress)));
      return { text: chunks.filter(Boolean).join("\n"), activeStep: step, progress };
    }
    return { text: chunks.filter(Boolean).join("\n"), activeStep: step, progress: 0 };
  }
  return { text: chunks.filter(Boolean).join("\n"), progress: 1 };
}

export default function AnimatedCodeAlongPlayer({
  playlist = [],
  files = [],
  walkthrough = [],
  category,
  activityKind,
  teachingSteps = [],
  courseId,
  tasks = [],
  narratorGuide,
  output = [],
  onOpenLab,
  onWalkthroughComplete,
  onGuideChange,
  openButtonLabel,
  isActive = true,
}: AnimatedCodeAlongPlayerProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isNarrating, setIsNarrating] = useState(false);
  const [narratorVoice, setNarratorVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [voiceReady, setVoiceReady] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [activePlaylistIndex, setActivePlaylistIndex] = useState(0);
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);
  const spokenLessonRef = useRef<string | null>(null);
  const narrationQueueRef = useRef(new SpeechNarrationQueue());
  const transitionStartedRef = useRef(false);

  const formatTime = (seconds: number) => `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60).toString().padStart(2, "0")}`;
  const lessonDuration = (script: string) => narrationDuration(script) + 3;
  const fallbackPlaylist: PracticalTeachingPlaylistStep[] = tasks.length
    ? tasks.map((task, index) => ({
        id: `generated-task-${task.id}`,
        title: task.title || `Practical step ${index + 1}`,
        category: category || "Practical learning",
        description: task.teaching?.learningGoal || task.title || "Follow the guided practical.",
        durationSeconds: lessonDuration(taskNarration(task, narratorGuide)),
        learningGoal: task.requiredConcepts?.join(", ") || "Understand and apply the practical concept.",
        narratorScript: taskNarration(task, narratorGuide),
        workedExample: task.teaching?.learningGoal || task.title || "Follow the guided practical.",
        scenario: task.requiredConcepts?.join(", ") || "Apply the idea to the current practical.",
        learnerPrompt: task.teaching?.questions?.[0] || "What do you predict will happen next?",
        commonMistake: task.hints?.[1] || "Do not skip checking the result.",
        recap: task.teaching?.recap || task.title || "Explain the key idea in your own words.",
        codeSteps: [index + 1],
      }))
    : [{
        id: "guided-practical", title: "Guided practical", category: "Practical learning",
        description: "Build the solution with a warm, teacher-led explanation.",
        durationSeconds: lessonDuration(taskNarration(undefined, narratorGuide)),
        learningGoal: "Understand the practical through guided action.",
        narratorScript: taskNarration(undefined, narratorGuide),
        workedExample: "The imported starter file will appear here.",
        scenario: "The imported practical will connect this idea to a realistic task.",
        learnerPrompt: "What do you predict will happen next?",
        commonMistake: "Do not skip checking the result.",
        recap: "Explain the key idea in your own words.",
        codeSteps: [1],
      }];
  const teachingPlaylist = playlist.length
    ? playlist.map((step, index) => ({
        ...step,
        narratorScript: hasReadableNarration(step.narratorScript, tasks[index]?.instruction)
          ? step.narratorScript
          : taskNarration(tasks[index], narratorGuide),
      }))
    : fallbackPlaylist;
  // Older imported records may predate teachingSteps. Scenario and cloud labs must still
  // enter the same progressive, teacher-led walkthrough instead of falling
  // back to four static cards. The playlist is sufficient to reconstruct a
  // safe presentational sequence; regenerated manifests provide richer steps.
  const resolvedTeachingSteps: PracticalTeachingStep[] = teachingSteps.length
    ? teachingSteps
    : ["Scenario & Design Exercise", "Cloud Console Lab"].includes(category || "")
      ? teachingPlaylist.map((step, index) => ({
          stepNumber: index + 1,
          title: step.title || `Guided step ${index + 1}`,
          displayText: step.workedExample || step.description || step.learnerPrompt || `Explore ${step.title || "this idea"}.`,
          speakerText: step.narratorScript || taskNarration(tasks[index], narratorGuide),
          explanation: step.learningGoal || step.recap || "Follow the reasoning, then test it yourself.",
          durationSeconds: narrationDuration(step.narratorScript || step.description || step.workedExample || ""),
        }))
      : [];
  const activePlaylist = teachingPlaylist[Math.min(activePlaylistIndex, teachingPlaylist.length - 1)];
  const activeWalkthrough = walkthrough
    .filter((step) => activePlaylist.codeSteps.includes(step.stepNumber))
    .sort((left, right) => left.stepNumber - right.stepNumber);
  const activeTeachingSteps = resolvedTeachingSteps
    .filter((step) => activePlaylist.codeSteps.includes(step.stepNumber))
    .sort((left, right) => left.stepNumber - right.stepNumber);
  const activeNarrationScript = activeTeachingSteps.length
    ? activeTeachingSteps.map((step) => step.speakerText).filter(Boolean).join(" ")
    : activeWalkthrough.length
      ? activeWalkthrough.map((step) => step.speakerText).filter(Boolean).join(" ")
      : activePlaylist.narratorScript;
  const activeDurationSeconds = activeTeachingSteps.length
    ? activeTeachingSteps.reduce((total, step) => total + narrationDuration(step.speakerText || step.explanation || step.displayText), 0)
    : activeWalkthrough.length
      ? activeWalkthrough.reduce((total, step) => total + narrationDuration(step.speakerText || step.explanation || step.codeLine), 0)
      : lessonDuration(activeNarrationScript);
  const activeFile = activeWalkthrough.find((step) => step.file)?.file || files[0]?.path || "workspace";
  const activeFileContent = files.find((file) => file.path === activeFile)?.content || files[0]?.content || "";
  const priorWalkthrough = walkthrough
    .filter((step) => step.file === activeFile && step.stepNumber < (activeWalkthrough[0]?.stepNumber || 0))
    .sort((left, right) => left.stepNumber - right.stepNumber);
  const codeReveal = revealWalkthroughCode(activeWalkthrough, currentTime);
  const teachingReveal = revealTeachingText(activeTeachingSteps, currentTime);
  const displayedCode = activeWalkthrough.length
    ? [...priorWalkthrough.map((step) => step.codeLine), codeReveal.code].filter(Boolean).join("\n")
    : activeFileContent || "// No starter code was provided for this practical.";
  const activeTask = tasks.length ? tasks[Math.min(activePlaylistIndex, tasks.length - 1)] : undefined;
  const isCodeLab = category === "Terminal Coding Lab";
  const experienceLabel = category === "Research & Analysis" ? "Evidence lab" : category === "Cloud Console Lab" ? "Cloud mission" : category === "Scenario & Design Exercise" ? "Decision simulator" : "Coding lab";
  const walkthroughComplete = !isPlaying
    && activePlaylistIndex === teachingPlaylist.length - 1
    && currentTime >= activeDurationSeconds;
  const assignedVoiceUnavailable = voiceReady && isMicrosoftEdge() && Boolean(courseId) && !narratorVoice;

  useEffect(() => {
    onGuideChange?.({
      goal: activePlaylist.learningGoal,
      narration: codeReveal.activeStep?.speakerText || activeNarrationScript,
      prompt: activePlaylist.learnerPrompt,
      focus: activeTask?.teaching?.learningGoal,
    });
  }, [activeNarrationScript, activePlaylist.learnerPrompt, activePlaylist.learningGoal, activeTask?.teaching?.learningGoal, codeReveal.activeStep?.speakerText, onGuideChange]);

  const moveToExperiment = () => {
    if (transitionStartedRef.current) return;
    transitionStartedRef.current = true;
    setIsPlaying(false);
    const transitionScript = "Great work completing the walkthrough. Now it is your turn to apply the idea, check your reasoning, and explain what you discovered.";
    if (typeof window === "undefined" || !window.speechSynthesis) {
      onWalkthroughComplete?.();
      return;
    }
    if (!assignedVoiceUnavailable) {
      narrationQueueRef.current.play(transitionScript, {
        voice: narratorVoice,
        rate: TEACHER_SPEECH_RATE,
        pitch: 1.02,
        onSpeakingChange: setIsNarrating,
      });
    }
    onWalkthroughComplete?.();
  };

  useEffect(() => {
    if (!courseId || typeof window === "undefined" || !window.speechSynthesis) return;
    let cancelled = false;
    const applyVoice = async () => {
      const browserVoices = window.speechSynthesis.getVoices();
      if (!browserVoices.length) return;
      const voice = await resolveCourseNarratorVoice(courseId, browserVoices);
      if (!cancelled) {
        setNarratorVoice(voice);
        setVoiceReady(true);
      }
    };
    setVoiceReady(false);
    void applyVoice();
    const handleVoicesChanged = () => { void applyVoice(); };
    window.speechSynthesis.addEventListener("voiceschanged", handleVoicesChanged);
    return () => {
      cancelled = true;
      window.speechSynthesis.removeEventListener("voiceschanged", handleVoicesChanged);
    };
  }, [courseId]);

  useEffect(() => () => narrationQueueRef.current.cancel(), []);

  useEffect(() => {
    if (isActive) return;
    setIsPlaying(false);
    if (!transitionStartedRef.current) narrationQueueRef.current.cancel();
  }, [isActive]);

  useEffect(() => {
    // Browser speech reports word-boundary progress. When narration is audible,
    // use that real progress so typing never outruns or lags behind the teacher.
    // The time-based clock remains only for muted playback and browsers without TTS.
    if (!isPlaying || (!isMuted && !assignedVoiceUnavailable)) {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      previousTimeRef.current = null;
      setIsNarrating(false);
      return;
    }
    const animate = (time: number) => {
      if (previousTimeRef.current !== null) {
        const delta = (time - previousTimeRef.current) / 1000;
        setCurrentTime((previous) => Math.min(previous + delta, activeDurationSeconds));
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => { if (requestRef.current) cancelAnimationFrame(requestRef.current); };
  }, [isPlaying, isMuted, activeDurationSeconds, activePlaylistIndex, teachingPlaylist.length, assignedVoiceUnavailable]);

  useEffect(() => {
    if (!isPlaying || currentTime < activeDurationSeconds) return;
    if (activePlaylistIndex < teachingPlaylist.length - 1) {
      const nextIndex = activePlaylistIndex + 1;
      setActivePlaylistIndex(nextIndex);
      setCurrentTime(0);
      return;
    }
    moveToExperiment();
  }, [activeDurationSeconds, activePlaylistIndex, currentTime, isPlaying, teachingPlaylist.length]);

  const speakActiveLesson = () => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    if (assignedVoiceUnavailable) return;
    spokenLessonRef.current = null;
    narrationQueueRef.current.play(activeNarrationScript, {
      voice: narratorVoice,
      rate: TEACHER_SPEECH_RATE,
      pitch: 1.02,
      onSpeakingChange: setIsNarrating,
      onProgress: (progress) => setCurrentTime(activeDurationSeconds * progress),
      onComplete: () => {
        spokenLessonRef.current = activePlaylist.id;
        setCurrentTime(activeDurationSeconds);
      },
    });
  };

  useEffect(() => {
    if (!isPlaying || isMuted || !voiceReady || typeof window === "undefined" || !window.speechSynthesis) return;
    if (assignedVoiceUnavailable) return;
    if (spokenLessonRef.current === activePlaylist.id) return;
    speakActiveLesson();
    return () => narrationQueueRef.current.cancel();
  }, [activePlaylist.id, activeNarrationScript, isMuted, isPlaying, narratorVoice, voiceReady, assignedVoiceUnavailable]);

  return (
    <div className={`h-full min-h-0 w-full overflow-hidden ${isDark ? "bg-[#101522]" : "bg-slate-50"}`}>
      <div className="flex h-full min-h-0 w-full flex-col">
        <div className={`relative min-h-0 w-full flex-1 overflow-hidden rounded-2xl border shadow-xl ${isDark ? "border-slate-700 bg-[#171d2c] shadow-black/30" : "border-slate-200 bg-white shadow-slate-200/60"}`}>
          <div className={`absolute inset-0 ${isDark ? "bg-gradient-to-br from-[#151b2a] via-[#1d2435] to-[#101522]" : "bg-gradient-to-br from-slate-50 via-white to-slate-100"}`}>
            <div className="absolute inset-0 flex flex-col p-4 text-left sm:p-6">
              <div className={`mb-3 flex items-center justify-between border-b pb-2 ${isDark ? "border-slate-700" : "border-slate-200"}`}>
                <div className="flex items-center space-x-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500" /><span className="h-2.5 w-2.5 rounded-full bg-amber-500" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <span className={`pl-2 font-mono text-[10px] font-semibold uppercase ${isDark ? "text-slate-400" : "text-slate-500"}`}>Practical workspace</span>
                </div>
                <span className={`rounded-full px-2 py-0.5 font-mono text-[9px] font-bold ${isDark ? "bg-emerald-400/10 text-emerald-300" : "bg-emerald-500/10 text-emerald-700"}`}>TEACH MODE</span>
              </div>
              {assignedVoiceUnavailable && <p role="status" className="mb-2 rounded-md border border-amber-400/40 bg-amber-100/80 px-3 py-2 text-xs text-amber-900">The assigned course voice is unavailable in Microsoft Edge, so this walkthrough is playing without narration.</p>}
              <div className="grid min-h-0 flex-1 grid-cols-12 gap-3">
                <div className={`col-span-2 flex flex-col space-y-1.5 rounded-xl border p-2 font-mono text-xs ${isDark ? "border-slate-700 bg-[#121827] text-slate-300" : "border-slate-200 bg-white text-slate-600"}`}>
                  <span className={`mb-1 text-[10px] font-black uppercase ${isDark ? "text-slate-400" : "text-slate-500"}`}>WORKSPACE</span>
                  <div className="flex items-center space-x-1.5 text-immersive-secondary"><span className="text-xs">📂</span><span>practical</span></div>
                  {files.length > 0 ? files.map((file) => (
                    <div key={file.path} className={`flex items-center space-x-1.5 rounded-md p-1 pl-3 ${file.path === activeFile ? isDark ? "bg-slate-700/70 text-cyan-200" : "bg-slate-100 text-immersive-primary" : ""}`}><span className="text-xs">📄</span><span className="truncate">{file.path}</span></div>
                  )) : <div className="pl-3 text-slate-400">Loading practical files…</div>}
                </div>
                <div className={`relative col-span-10 flex flex-col overflow-hidden rounded-xl border p-4 ${isDark ? "border-slate-700 bg-[#151b2a]" : "border-slate-200 bg-white"}`}>
                  <div className="flex-1 select-none space-y-2 font-mono text-xs">
                    <p className={isDark ? "text-slate-400" : "text-slate-500"}>// Lesson {activePlaylistIndex + 1}: {activePlaylist.title}</p>
                    {isCodeLab ? (
                      <>
                        <p className={isDark ? "mb-2 text-xs font-bold text-cyan-300" : "mb-2 text-xs font-bold text-immersive-primary"}>{activeFile}</p>
                        <pre className={`min-h-0 flex-1 overflow-auto whitespace-pre-wrap break-words rounded-lg border p-4 font-mono text-xs leading-6 shadow-inner ${isDark ? "border-slate-700 bg-gradient-to-br from-[#222b40] via-[#151b2a] to-[#292f40]" : "border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100"}`}><CodePreview code={displayedCode} dark={isDark} />{activeWalkthrough.length > 0 && codeReveal.progress < 1 ? <span className="animate-pulse text-amber-300">▌</span> : null}</pre>
                        {codeReveal.activeStep && <p className={`rounded-md border px-2 py-1 text-[10px] leading-relaxed ${isDark ? "border-amber-400/30 bg-amber-300/10 text-amber-100" : "border-amber-200 bg-amber-50 text-amber-900"}`}>Line {codeReveal.activeStep.stepNumber}: {codeReveal.activeStep.explanation || codeReveal.activeStep.speakerText}</p>}
                      </>
                    ) : activeTeachingSteps.length > 0 ? (
                      <div className="grid gap-2 font-sans text-left">
                        <div className={`flex items-center justify-between font-mono text-[10px] font-bold uppercase tracking-wider ${isDark ? "text-cyan-300" : "text-immersive-primary"}`}>
                          <span>{activityKind?.replaceAll("_", " ") || "Guided scenario"}</span>
                          <span>{teachingReveal.activeStep ? `Step ${teachingReveal.activeStep.stepNumber}` : "Teacher-led board"}</span>
                        </div>
                        <div className={`min-h-28 rounded-lg border p-4 ${isDark ? "border-slate-700 bg-[#111827]" : "border-blue-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50"}`}>
                          <p className={`mb-3 font-mono text-[10px] font-bold uppercase tracking-wider ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                            {teachingReveal.activeStep?.title || "Follow the idea"}
                          </p>
                          <pre className={`whitespace-pre-wrap break-words font-mono text-sm leading-7 ${isDark ? "text-cyan-100" : "text-blue-950"}`}>
                            {teachingReveal.text || "The teacher’s worked example will appear here."}
                            {teachingReveal.activeStep && teachingReveal.progress < 1 ? <span className="animate-pulse text-amber-400">▌</span> : null}
                          </pre>
                        </div>
                        {teachingReveal.activeStep && (
                          <p className={`rounded-md border px-3 py-2 text-xs leading-relaxed ${isDark ? "border-amber-400/30 bg-amber-300/10 text-amber-100" : "border-amber-200 bg-amber-50 text-amber-900"}`}>
                            {teachingReveal.activeStep.explanation}
                          </p>
                        )}
                      </div>
                    ) : (
                      <div className="grid gap-2 font-sans text-left sm:grid-cols-2">
                        <TeachingCard label="Worked example" text={activePlaylist.workedExample} tone="blue" />
                        <TeachingCard label="Real scenario" text={activePlaylist.scenario} tone="violet" />
                        <TeachingCard label="Your decision" text={activePlaylist.learnerPrompt} tone="amber" />
                        <TeachingCard label="Watch for" text={activePlaylist.commonMistake} tone="rose" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent ${isDark ? "from-[#101522]/50" : "from-white/50"}`} />
        </div>
        <div className={`mt-3 flex flex-col space-y-3 rounded-xl border p-3 shadow-md backdrop-blur-md ${isDark ? "border-slate-700 bg-[#171d2c] shadow-black/20" : "border-immersive-border/60 bg-immersive-card shadow-immersive-shadow"}`}>
          <label className="sr-only" htmlFor="practical-walkthrough-progress">Walkthrough progress</label>
          <input
            id="practical-walkthrough-progress"
            type="range"
            min={0}
            max={activeDurationSeconds}
            step={0.1}
            value={Math.min(currentTime, activeDurationSeconds)}
            onChange={(event) => setCurrentTime(Number(event.target.value))}
            aria-label="Walkthrough progress"
            className="h-1.5 w-full cursor-pointer accent-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 text-immersive-text-secondary">
              <button type="button" onClick={() => { if (walkthroughComplete) { transitionStartedRef.current = false; setActivePlaylistIndex(0); setCurrentTime(0); } setIsPlaying((playing) => !playing); }} className="cursor-pointer rounded-lg p-1.5 transition-colors hover:bg-white/5 hover:text-immersive-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500" title={isPlaying ? "Pause walkthrough" : "Play walkthrough"} aria-label={isPlaying ? "Pause walkthrough" : "Play walkthrough"}>{isPlaying ? <Pause className="h-4.5 w-4.5" /> : <Play className="h-4.5 w-4.5" />}</button>
              <button type="button" onClick={() => { transitionStartedRef.current = false; narrationQueueRef.current.cancel(); setActivePlaylistIndex(0); setCurrentTime(0); setIsPlaying(true); }} className="cursor-pointer rounded-lg p-1.5 transition-colors hover:bg-white/5 hover:text-immersive-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500" title="Restart walkthrough" aria-label="Restart walkthrough"><RotateCcw className="h-4.5 w-4.5" /></button>
              <span className="select-none font-mono text-[11px] font-bold text-immersive-text-primary/80">{formatTime(currentTime)} <span className="text-slate-600">/</span> {formatTime(activeDurationSeconds)}</span>
            </div>
            <div className="hidden min-w-0 items-center gap-2 sm:flex">
              <span className="animate-pulse truncate font-mono text-xs font-bold uppercase tracking-wider text-immersive-secondary">🎞️ {activePlaylist.category}: {activePlaylist.title}</span>
              <span className="shrink-0 rounded-full bg-immersive-primary/10 px-2 py-0.5 font-mono text-[9px] font-bold text-immersive-primary">{activeDurationSeconds}s</span>
            </div>
            <div className="flex items-center gap-1">
              {onOpenLab && <button type="button" onClick={onOpenLab} className="rounded-lg bg-immersive-primary px-2 py-1 font-mono text-[9px] font-bold text-white hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500">{openButtonLabel || `Open ${experienceLabel}`}</button>}
              <button type="button" onClick={speakActiveLesson} className="flex items-center gap-1 rounded-lg border border-immersive-primary/30 bg-immersive-primary/10 px-2 py-1 font-mono text-[9px] font-bold text-immersive-primary transition-colors hover:bg-immersive-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500" title="Hear this lesson" aria-label={isNarrating ? "Teacher is speaking" : "Hear teacher"}><Volume2 className="h-3.5 w-3.5" /> {isNarrating ? "Teacher speaking" : "Hear teacher"}</button>
              <button type="button" onClick={() => setIsMuted((muted) => !muted)} className="cursor-pointer rounded-lg p-1.5 text-immersive-text-secondary transition-colors hover:bg-white/5 hover:text-immersive-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500" title={isMuted ? "Turn voice back on" : "Mute automatic voice"} aria-label={isMuted ? "Turn voice back on" : "Mute automatic voice"}>{isMuted ? <VolumeX className="h-4.5 w-4.5" /> : <Volume2 className="h-4.5 w-4.5" />}</button>
            </div>
          </div>
        </div>
        {output.length > 0 && isCodeLab && (
          <div className="mt-2 max-h-20 overflow-y-auto rounded-xl border border-slate-800 bg-slate-950 p-2 font-mono text-[9px] leading-4 text-emerald-300">
            {output.slice(-6).map((line, index) => <p key={`${line}-${index}`}>{line}</p>)}
          </div>
        )}
      </div>
    </div>
  );
}

function CodePreview({ code, dark }: { code: string; dark: boolean }) {
  const tokenPattern = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|#\s*include\s*<[^>]+>|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b(?:auto|bool|break|case|char|class|const|continue|def|double|else|enum|float|for|if|import|int|let|long|main|print|printf|public|return|static|string|struct|switch|void|while)\b|\b\d+(?:\.\d+)?\b)/g;
  const parts = code.split(tokenPattern);
  const color = (token: string) => {
    if (/^(\/\/|\/\*)/.test(token)) return dark ? "text-slate-400 italic" : "text-slate-500 italic";
    if (/^#\s*include/.test(token)) return dark ? "text-fuchsia-300" : "text-fuchsia-700";
    if (/^["']/.test(token)) return dark ? "text-amber-300" : "text-amber-700";
    if (/^\d/.test(token)) return dark ? "text-cyan-300" : "text-cyan-700";
    return dark ? "text-violet-300" : "text-violet-700";
  };
  return <>{parts.map((part, index) => {
    tokenPattern.lastIndex = 0;
    const isToken = tokenPattern.test(part);
    return <span key={index} className={isToken ? color(part) : dark ? "text-slate-100" : "text-slate-800"}>{part}</span>;
  })}</>;
}

function TeachingCard({ label, text, tone }: { label: string; text: string; tone: "blue" | "violet" | "amber" | "rose" }) {
  const toneClass = { blue: "border-blue-200 bg-blue-50 text-blue-900", violet: "border-violet-200 bg-violet-50 text-violet-900", amber: "border-amber-200 bg-amber-50 text-amber-900", rose: "border-rose-200 bg-rose-50 text-rose-900" }[tone];
  return <div className={`rounded-lg border p-2 ${toneClass}`}><p className="font-mono text-[8px] font-black uppercase tracking-wider">{label}</p><p className="mt-1 line-clamp-3 text-[9px] leading-relaxed">{text}</p></div>;
}
