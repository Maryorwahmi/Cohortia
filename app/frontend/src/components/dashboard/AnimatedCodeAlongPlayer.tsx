import React, { useEffect, useRef, useState } from "react";
import { Pause, Play, RotateCcw, Volume2, VolumeX } from "lucide-react";
import type { CodeWalkthroughSegment, LearningBoardPracticalFile, LearningBoardPracticalTask, PracticalTeachingPlaylistStep } from "../../services/learningBoardsApi";

const TOTAL_DURATION = 60;
const SCENE_DURATION = 10;

/** Mirrors the homepage's simulated IDE scene for every practical code-along. */
interface AnimatedCodeAlongPlayerProps {
  playlist?: PracticalTeachingPlaylistStep[];
  files?: LearningBoardPracticalFile[];
  walkthrough?: CodeWalkthroughSegment[];
  category?: string | null;
  tasks?: LearningBoardPracticalTask[];
  narratorGuide?: string | null;
  checks?: Array<{ id: string; type?: string; expected?: unknown }>;
  output?: string[];
  onRun?: () => void;
  onOpenLab?: () => void;
}

export default function AnimatedCodeAlongPlayer({ playlist = [], files = [], walkthrough = [], category, tasks = [], narratorGuide, checks = [], output = [], onRun, onOpenLab }: AnimatedCodeAlongPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [activePlaylistIndex, setActivePlaylistIndex] = useState(0);
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);
  const spokenLessonRef = useRef<string | null>(null);

  const handleSeek = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    setCurrentTime(ratio * activePlaylist.durationSeconds);
  };
  const formatTime = (seconds: number) => `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60).toString().padStart(2, "0")}`;
  const sceneProgress = (currentTime % SCENE_DURATION) / SCENE_DURATION;
  const fallbackPlaylist: PracticalTeachingPlaylistStep[] = tasks.length
    ? tasks.map((task, index) => ({
        id: `generated-task-${task.id}`,
        title: task.title || `Practical step ${index + 1}`,
        category: category || "Practical learning",
        description: task.instruction,
        durationSeconds: Math.max(45, Math.min(120, Math.ceil((task.narratorGuide || narratorGuide || task.instruction).length / 11))),
        learningGoal: task.requiredConcepts?.join(", ") || "Understand and apply the practical concept.",
        narratorScript: task.narratorGuide || narratorGuide || task.instruction,
        workedExample: task.instruction,
        scenario: task.requiredConcepts?.join(", ") || "Apply the idea to the current practical.",
        learnerPrompt: task.hints?.[0] || "What do you predict will happen next?",
        commonMistake: task.hints?.[1] || "Do not skip checking the result.",
        recap: task.narratorGuide || task.instruction,
        codeSteps: [index + 1],
      }))
    : [{
        id: "guided-practical", title: "Guided practical", category: "Practical learning",
        description: "Build the solution with a warm, teacher-led explanation.",
        durationSeconds: Math.max(60, Math.ceil((narratorGuide || "").length / 11)),
        learningGoal: "Understand the practical through guided action.",
        narratorScript: narratorGuide || "Let’s work through this practical together.",
        workedExample: "Follow the generated starter file and observe the result.",
        scenario: "Apply the generated practical to a realistic task.",
        learnerPrompt: "What do you predict will happen next?",
        commonMistake: "Do not skip checking the result.",
        recap: "Explain the key idea in your own words.",
        codeSteps: [1],
      }];
  const teachingPlaylist = playlist.length ? playlist : fallbackPlaylist;
  const activePlaylist = teachingPlaylist[Math.min(activePlaylistIndex, teachingPlaylist.length - 1)];
  const activeWalkthrough = walkthrough.filter((step) => activePlaylist.codeSteps.includes(step.stepNumber));
  const displayedCode = activeWalkthrough.length
    ? activeWalkthrough.map((step) => step.codeLine).join("\n")
    : files[0]?.content || "// Your practical code will appear here.";
  const activeFile = activeWalkthrough[0]?.file || files[0]?.path || "workspace";
  const activeTask = tasks.length ? tasks[Math.min(activePlaylistIndex, tasks.length - 1)] : undefined;
  const activeCheckIds = activeTask?.checkIds || [];
  const activeChecks = checks.filter((check) => activeCheckIds.includes(check.id));
  const isCodeLab = category === "Terminal Coding Lab";
  const experienceLabel = category === "Research & Analysis" ? "Evidence lab" : category === "Cloud Console Lab" ? "Cloud mission" : category === "Scenario & Design Exercise" ? "Decision simulator" : "Coding lab";

  useEffect(() => {
    if (!isPlaying) {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      previousTimeRef.current = null;
      return;
    }
    const animate = (time: number) => {
      if (previousTimeRef.current !== null) {
        const delta = (time - previousTimeRef.current) / 1000;
        setCurrentTime((previous) => {
          const nextTime = previous + delta;
          if (nextTime < activePlaylist.durationSeconds) return nextTime;
          if (activePlaylistIndex < teachingPlaylist.length - 1) {
            setActivePlaylistIndex((index) => index + 1);
            return 0;
          }
          setIsPlaying(false);
          return activePlaylist.durationSeconds;
        });
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => { if (requestRef.current) cancelAnimationFrame(requestRef.current); };
  }, [isPlaying, activePlaylist.durationSeconds, activePlaylistIndex, teachingPlaylist.length]);

  const speakActiveLesson = () => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    spokenLessonRef.current = null;
    const speech = new SpeechSynthesisUtterance(activePlaylist.narratorScript);
    speech.rate = 0.78;
    speech.pitch = 1;
    speech.onend = () => { spokenLessonRef.current = activePlaylist.id; };
    window.speechSynthesis.speak(speech);
  };

  useEffect(() => {
    if (!isPlaying || isMuted || typeof window === "undefined" || !window.speechSynthesis) return;
    if (spokenLessonRef.current === activePlaylist.id) return;
    speakActiveLesson();
    return () => window.speechSynthesis.cancel();
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
                <div className="col-span-3 flex flex-col space-y-1.5 rounded-xl border border-slate-200 bg-white p-2 font-mono text-[9px] text-slate-600">
                  <span className="mb-1 text-[8px] font-black uppercase text-slate-500">WORKSPACE</span>
                  <div className="flex items-center space-x-1.5 text-immersive-secondary"><span className="text-xs">📂</span><span>practical</span></div>
                  {files.length > 0 ? files.map((file) => (
                    <div key={file.path} className={`flex items-center space-x-1.5 rounded-md p-1 pl-3 ${file.path === activeFile ? "bg-slate-100 text-immersive-primary" : ""}`}><span className="text-xs">📄</span><span className="truncate">{file.path}</span></div>
                  )) : <div className="pl-3 text-slate-400">Loading practical files…</div>}
                </div>
                <div className="relative col-span-9 flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-3">
                  <div className="flex-1 select-none space-y-1.5 font-mono text-[10px] text-emerald-400">
                    <p className="text-slate-500">// Lesson {activePlaylistIndex + 1}: {activePlaylist.title}</p>
                    {isCodeLab ? (
                      <>
                        <p className="mb-2 text-[9px] font-bold text-immersive-primary">{activeFile}</p>
                        <pre className="whitespace-pre-wrap break-words font-mono text-[10px] leading-5 text-slate-700">{displayedCode}</pre>
                      </>
                    ) : (
                      <div className="grid gap-2 font-sans text-left sm:grid-cols-2">
                        <TeachingCard label="Worked example" text={activePlaylist.workedExample} tone="blue" />
                        <TeachingCard label="Real scenario" text={activePlaylist.scenario} tone="violet" />
                        <TeachingCard label="Your decision" text={activePlaylist.learnerPrompt} tone="amber" />
                        <TeachingCard label="Watch for" text={activePlaylist.commonMistake} tone="rose" />
                      </div>
                    )}
                    {activeChecks.length > 0 && (
                      <div className="absolute right-4 top-4 rounded-lg border border-slate-200 bg-white/95 px-2.5 py-2 text-[9px] text-slate-600 shadow-sm">
                        <p className="font-mono font-bold uppercase text-immersive-primary">Checks for this step</p>
                        <p className="mt-1">{activeChecks.length} imported check{activeChecks.length === 1 ? "" : "s"}</p>
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 rounded-lg border border-immersive-primary/20 bg-white/90 p-2.5 shadow-sm backdrop-blur">
                    <div className="mb-1 flex items-center justify-between gap-2"><span className="font-mono text-[8px] font-black uppercase tracking-wider text-immersive-primary">Teacher guide · {activePlaylist.learningGoal}</span><span className="font-mono text-[8px] text-slate-500">Pause & predict</span></div>
                    <p className="line-clamp-2 text-[9px] leading-relaxed text-slate-600">{activePlaylist.narratorScript}</p>
                    <p className="mt-1 line-clamp-1 text-[8px] font-medium text-amber-700">Think first: {activePlaylist.learnerPrompt}</p>
                    {activeTask?.teaching?.guidedSteps?.[0] && <p className="mt-1 line-clamp-1 text-[8px] text-emerald-700">Do now: {activeTask.teaching.guidedSteps[0]}</p>}
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
                className={`min-w-[190px] rounded-xl border p-2 text-left transition-colors ${index === activePlaylistIndex ? "border-immersive-primary/50 bg-immersive-primary/10" : "border-immersive-border bg-immersive-card hover:bg-immersive-card-hover"}`}
              >
                <span className="block font-mono text-[9px] font-bold uppercase text-immersive-secondary">Lesson {index + 1} · {lesson.durationSeconds}s</span>
                <span className="mt-0.5 block truncate text-[11px] font-bold text-immersive-text-primary">{lesson.title}</span>
              </button>
            ))}
          </div>
        )}
        <div className="mt-3.5 flex flex-col space-y-3 rounded-2xl border border-immersive-border/60 bg-immersive-card p-3.5 shadow-md shadow-immersive-shadow backdrop-blur-md">
          <div onClick={handleSeek} className="relative h-1.5 w-full cursor-pointer overflow-hidden rounded-full bg-slate-200"><div className="h-full rounded-full bg-gradient-to-r from-immersive-primary to-immersive-secondary transition-all duration-75" style={{ width: `${(currentTime / TOTAL_DURATION) * 100}%` }} /></div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 text-immersive-text-secondary">
              <button onClick={() => setIsPlaying((playing) => !playing)} className="cursor-pointer rounded-lg p-1.5 transition-all hover:bg-white/5 hover:text-immersive-text-primary" title={isPlaying ? "Pause Tour" : "Play Tour"}>{isPlaying ? <Pause className="h-4.5 w-4.5" /> : <Play className="h-4.5 w-4.5" />}</button>
              <button onClick={() => { setCurrentTime(0); setIsPlaying(true); }} className="cursor-pointer rounded-lg p-1.5 transition-all hover:bg-white/5 hover:text-immersive-text-primary" title="Reset Timeline"><RotateCcw className="h-4.5 w-4.5" /></button>
              <span className="select-none font-mono text-[11px] font-bold text-immersive-text-primary/80">{formatTime(currentTime)} <span className="text-slate-600">/</span> {formatTime(TOTAL_DURATION)}</span>
            </div>
            <div className="hidden min-w-0 items-center gap-2 sm:flex">
              <span className="animate-pulse truncate font-mono text-xs font-bold uppercase tracking-wider text-immersive-secondary">🎞️ {activePlaylist.category}: {activePlaylist.title}</span>
              <span className="shrink-0 rounded-full bg-immersive-primary/10 px-2 py-0.5 font-mono text-[9px] font-bold text-immersive-primary">{activePlaylist.durationSeconds}s</span>
            </div>
            <div className="flex items-center gap-1">
              {isCodeLab && onRun && <button onClick={onRun} className="rounded-lg bg-emerald-600 px-2 py-1 font-mono text-[9px] font-bold text-white hover:bg-emerald-700">Run example</button>}
              {!isCodeLab && onOpenLab && <button onClick={onOpenLab} className="rounded-lg bg-immersive-primary px-2 py-1 font-mono text-[9px] font-bold text-white hover:brightness-95">Open {experienceLabel}</button>}
              <button onClick={speakActiveLesson} className="flex items-center gap-1 rounded-lg border border-immersive-primary/30 bg-immersive-primary/10 px-2 py-1 font-mono text-[9px] font-bold text-immersive-primary transition-colors hover:bg-immersive-primary hover:text-white" title="Hear this lesson"><Volume2 className="h-3.5 w-3.5" /> Hear teacher</button>
              <button onClick={() => setIsMuted((muted) => !muted)} className="cursor-pointer rounded-lg p-1.5 text-immersive-text-secondary transition-all hover:bg-white/5 hover:text-immersive-text-primary" title={isMuted ? "Turn voice back on" : "Mute automatic voice"}>{isMuted ? <VolumeX className="h-4.5 w-4.5" /> : <Volume2 className="h-4.5 w-4.5" />}</button>
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
