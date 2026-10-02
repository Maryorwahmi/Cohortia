import { useEffect, useRef, useState } from "react";
import { Pause, Play, RotateCcw, Volume2, VolumeX } from "lucide-react";
import type { CodeWalkthroughSegment, LearningBoardPracticalFile, LearningBoardPracticalTask, PracticalTeachingPlaylistStep } from "../../services/learningBoardsApi";
import { getAssignedVoiceForCourse, findBrowserVoiceByName } from "../../utils/courseVoiceMapping";
import { estimateSpeechDurationSeconds, SpeechNarrationQueue } from "../../lib/speechNarration";

const TEACHER_SPEECH_RATE = 0.82;

/** Mirrors the homepage's simulated IDE scene for every practical code-along. */
interface AnimatedCodeAlongPlayerProps {
  playlist?: PracticalTeachingPlaylistStep[];
  files?: LearningBoardPracticalFile[];
  walkthrough?: CodeWalkthroughSegment[];
  category?: string | null;
  courseId?: string | null;
  tasks?: LearningBoardPracticalTask[];
  narratorGuide?: string | null;
  output?: string[];
  onOpenLab?: () => void;
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

export default function AnimatedCodeAlongPlayer({
  playlist = [],
  files = [],
  walkthrough = [],
  category,
  courseId,
  tasks = [],
  narratorGuide,
  output = [],
  onOpenLab,
  openButtonLabel,
  isActive = true,
}: AnimatedCodeAlongPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isNarrating, setIsNarrating] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [activePlaylistIndex, setActivePlaylistIndex] = useState(0);
  const [furthestPlaylistIndex, setFurthestPlaylistIndex] = useState(0);
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);
  const spokenLessonRef = useRef<string | null>(null);
  const narratorVoiceRef = useRef<SpeechSynthesisVoice | null>(null);
  const narrationQueueRef = useRef(new SpeechNarrationQueue());

  const formatTime = (seconds: number) => `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60).toString().padStart(2, "0")}`;
  const lessonDuration = (script: string) => Math.ceil(estimateSpeechDurationSeconds(script, TEACHER_SPEECH_RATE) + 6);
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
  const activePlaylist = teachingPlaylist[Math.min(activePlaylistIndex, teachingPlaylist.length - 1)];
  const activeDurationSeconds = lessonDuration(activePlaylist.narratorScript);
  const activeWalkthrough = walkthrough.filter((step) => activePlaylist.codeSteps.includes(step.stepNumber));
  const activeFile = activeWalkthrough.find((step) => step.file)?.file || files[0]?.path || "workspace";
  const activeFileContent = files.find((file) => file.path === activeFile)?.content || files[0]?.content || "";
  const walkthroughCode = activeWalkthrough.map((step) => step.codeLine).filter(Boolean).join("\n");
  const displayedCode = activeFileContent || walkthroughCode || "// No starter code was provided for this practical.";
  const activeTask = tasks.length ? tasks[Math.min(activePlaylistIndex, tasks.length - 1)] : undefined;
  const isCodeLab = category === "Terminal Coding Lab" || files.some((file) => /\.(c|h|cpp|cc|cxx|hpp|py|js|ts|sql)$/i.test(file.path));
  const experienceLabel = category === "Research & Analysis" ? "Evidence lab" : category === "Cloud Console Lab" ? "Cloud mission" : category === "Scenario & Design Exercise" ? "Decision simulator" : "Coding lab";
  const walkthroughComplete = !isPlaying
    && activePlaylistIndex === teachingPlaylist.length - 1
    && currentTime >= activeDurationSeconds;

  useEffect(() => {
    if (!courseId || typeof window === "undefined" || !window.speechSynthesis) return;
    let cancelled = false;
    const applyVoice = () => {
      const browserVoices = window.speechSynthesis.getVoices();
      getAssignedVoiceForCourse(courseId).then((assigned) => {
        if (!cancelled) narratorVoiceRef.current = assigned ? findBrowserVoiceByName(assigned.label, browserVoices) : null;
      });
    };
    applyVoice();
    window.speechSynthesis.addEventListener("voiceschanged", applyVoice);
    return () => {
      cancelled = true;
      window.speechSynthesis.removeEventListener("voiceschanged", applyVoice);
    };
  }, [courseId]);

  useEffect(() => () => narrationQueueRef.current.cancel(), []);

  useEffect(() => {
    if (isActive) return;
    setIsPlaying(false);
    narrationQueueRef.current.cancel();
  }, [isActive]);

  useEffect(() => {
    if (!isPlaying) {
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
  }, [isPlaying, activeDurationSeconds, activePlaylistIndex, teachingPlaylist.length]);

  useEffect(() => {
    if (!isPlaying || currentTime < activeDurationSeconds) return;
    if (activePlaylistIndex < teachingPlaylist.length - 1) {
      const nextIndex = activePlaylistIndex + 1;
      setActivePlaylistIndex(nextIndex);
      setFurthestPlaylistIndex((furthest) => Math.max(furthest, nextIndex));
      setCurrentTime(0);
      return;
    }
    setIsPlaying(false);
  }, [activeDurationSeconds, activePlaylistIndex, currentTime, isPlaying, teachingPlaylist.length]);

  const speakActiveLesson = () => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    spokenLessonRef.current = null;
    narrationQueueRef.current.play(activePlaylist.narratorScript, {
      voice: narratorVoiceRef.current,
      rate: TEACHER_SPEECH_RATE,
      pitch: 1.02,
      onSpeakingChange: setIsNarrating,
      onComplete: () => { spokenLessonRef.current = activePlaylist.id; },
    });
  };

  useEffect(() => {
    if (!isPlaying || isMuted || typeof window === "undefined" || !window.speechSynthesis) return;
    if (spokenLessonRef.current === activePlaylist.id) return;
    speakActiveLesson();
    return () => narrationQueueRef.current.cancel();
  }, [activePlaylist.id, activePlaylist.narratorScript, isMuted, isPlaying]);

  return (
    <div className="h-full min-h-0 w-full overflow-hidden bg-immersive-bg">
      <div className="flex h-full min-h-0 w-full flex-col">
        <div className="relative min-h-0 w-full flex-1 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/60">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100">
            <div className="absolute inset-0 flex flex-col p-4 text-left sm:p-6">
              <div className="mb-3 flex items-center justify-between border-b border-slate-200 pb-2">
                <div className="flex items-center space-x-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500" /><span className="h-2.5 w-2.5 rounded-full bg-amber-500" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <span className="pl-2 font-mono text-[10px] font-semibold uppercase text-slate-500">Imported practical workspace</span>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] font-bold text-emerald-700">GENERATED CONTENT</span>
              </div>
              <div className="grid min-h-0 flex-1 grid-cols-12 gap-3">
                <div className="col-span-2 flex flex-col space-y-1.5 rounded-xl border border-slate-200 bg-white p-2 font-mono text-xs text-slate-600">
                  <span className="mb-1 text-[10px] font-black uppercase text-slate-500">WORKSPACE</span>
                  <div className="flex items-center space-x-1.5 text-immersive-secondary"><span className="text-xs">📂</span><span>practical</span></div>
                  {files.length > 0 ? files.map((file) => (
                    <div key={file.path} className={`flex items-center space-x-1.5 rounded-md p-1 pl-3 ${file.path === activeFile ? "bg-slate-100 text-immersive-primary" : ""}`}><span className="text-xs">📄</span><span className="truncate">{file.path}</span></div>
                  )) : <div className="pl-3 text-slate-400">Loading practical files…</div>}
                </div>
                <div className="relative col-span-10 flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-4">
                  <div className="flex-1 select-none space-y-2 font-mono text-xs text-emerald-400">
                    <p className="text-slate-500">// Lesson {activePlaylistIndex + 1}: {activePlaylist.title}</p>
                    {isCodeLab ? (
                      <>
                        <p className="mb-2 text-xs font-bold text-immersive-primary">{activeFile}</p>
                        <pre className="min-h-0 flex-1 overflow-auto whitespace-pre-wrap break-words rounded-lg bg-slate-950 p-3 font-mono text-xs leading-6 text-emerald-200">{displayedCode}</pre>
                      </>
                    ) : (
                      <div className="grid gap-2 font-sans text-left sm:grid-cols-2">
                        <TeachingCard label="Worked example" text={activePlaylist.workedExample} tone="blue" />
                        <TeachingCard label="Real scenario" text={activePlaylist.scenario} tone="violet" />
                        <TeachingCard label="Your decision" text={activePlaylist.learnerPrompt} tone="amber" />
                        <TeachingCard label="Watch for" text={activePlaylist.commonMistake} tone="rose" />
                      </div>
                    )}
                  </div>
                  <div className="mt-3 max-h-32 shrink-0 overflow-y-auto rounded-lg border border-immersive-primary/20 bg-white p-3 shadow-sm">
                    <div className="mb-1 flex flex-wrap items-center justify-between gap-2"><span className="font-mono text-[9px] font-black uppercase tracking-wider text-immersive-primary">Teacher guide · {activePlaylist.learningGoal}</span><span className="font-mono text-[9px] text-slate-500">Pause & predict</span></div>
                    <div>
                      <p className="text-xs leading-relaxed text-slate-600">{activePlaylist.narratorScript}</p>
                      <p className="mt-2 text-xs font-medium leading-relaxed text-amber-700">Think first: {activePlaylist.learnerPrompt}</p>
                      {activeTask?.teaching?.learningGoal && <p className="mt-2 text-xs leading-relaxed text-emerald-700">Focus: {activeTask.teaching.learningGoal}</p>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent" />
          <div className="pointer-events-none absolute left-4 top-4 z-10 flex space-x-2 rounded-full border border-emerald-200 bg-white/90 px-3 py-1 font-mono text-[10px] font-bold text-emerald-700 shadow-lg"><span className="h-2 w-2 rounded-full bg-emerald-500" /><span>IMPORTED PRACTICAL</span></div>
        </div>
        {teachingPlaylist.length > 1 && (
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {teachingPlaylist.map((lesson, index) => (
              <button
                key={lesson.id}
                type="button"
                onClick={() => { setActivePlaylistIndex(index); setCurrentTime(0); setIsPlaying(true); }}
                disabled={index > furthestPlaylistIndex}
                aria-label={`Play lesson ${index + 1}: ${lesson.title}`}
                className={`min-w-[190px] rounded-xl border p-2 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500 disabled:cursor-not-allowed disabled:opacity-50 ${index === activePlaylistIndex ? "border-immersive-primary/50 bg-immersive-primary/10" : "border-immersive-border bg-immersive-card hover:bg-immersive-card-hover"}`}
              >
                <span className="block font-mono text-[9px] font-bold uppercase text-immersive-secondary">Lesson {index + 1} · {formatTime(lessonDuration(lesson.narratorScript))}</span>
                <span className="mt-0.5 block truncate text-[11px] font-bold text-immersive-text-primary">{lesson.title}</span>
              </button>
            ))}
          </div>
        )}
        <div className="mt-3.5 flex flex-col space-y-3 rounded-2xl border border-immersive-border/60 bg-immersive-card p-3.5 shadow-md shadow-immersive-shadow backdrop-blur-md">
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
              <button type="button" onClick={() => { if (walkthroughComplete) { setActivePlaylistIndex(0); setCurrentTime(0); } setIsPlaying((playing) => !playing); }} className="cursor-pointer rounded-lg p-1.5 transition-colors hover:bg-white/5 hover:text-immersive-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500" title={isPlaying ? "Pause walkthrough" : "Play walkthrough"} aria-label={isPlaying ? "Pause walkthrough" : "Play walkthrough"}>{isPlaying ? <Pause className="h-4.5 w-4.5" /> : <Play className="h-4.5 w-4.5" />}</button>
              <button type="button" onClick={() => { setActivePlaylistIndex(0); setFurthestPlaylistIndex(0); setCurrentTime(0); setIsPlaying(true); }} className="cursor-pointer rounded-lg p-1.5 transition-colors hover:bg-white/5 hover:text-immersive-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500" title="Restart walkthrough" aria-label="Restart walkthrough"><RotateCcw className="h-4.5 w-4.5" /></button>
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

function TeachingCard({ label, text, tone }: { label: string; text: string; tone: "blue" | "violet" | "amber" | "rose" }) {
  const toneClass = { blue: "border-blue-200 bg-blue-50 text-blue-900", violet: "border-violet-200 bg-violet-50 text-violet-900", amber: "border-amber-200 bg-amber-50 text-amber-900", rose: "border-rose-200 bg-rose-50 text-rose-900" }[tone];
  return <div className={`rounded-lg border p-2 ${toneClass}`}><p className="font-mono text-[8px] font-black uppercase tracking-wider">{label}</p><p className="mt-1 line-clamp-3 text-[9px] leading-relaxed">{text}</p></div>;
}
