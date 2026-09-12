import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import {
  Play,
  Pause,
  RotateCw,
  Volume2,
  VolumeX,
  FileCode2,
  Folder,
  Sparkles,
  Terminal,
  Monitor,
  CheckCircle2,
  ArrowRight,
  Code2,
  Sliders,
  Maximize2
} from "lucide-react";
import type { CodeWalkthroughSegment, LearningBoardPracticalFile } from "../../services/learningBoardsApi";
import { getAssignedVoiceForCourse, findBrowserVoiceByName } from "../../utils/courseVoiceMapping";
import { estimateSpeechDurationSeconds, SpeechNarrationQueue } from "../../lib/speechNarration";

interface AnimatedCodeAlongPlayerProps {
  title: string;
  courseId?: string;
  category?: string | null;
  files: LearningBoardPracticalFile[];
  walkthroughSegments: CodeWalkthroughSegment[];
  narratorGuide?: string | null;
  onSwitchToInteractive: () => void;
  onComplete?: () => void;
}

export default function AnimatedCodeAlongPlayer({
  title,
  courseId,
  category,
  files,
  walkthroughSegments: rawSegments,
  narratorGuide,
  onSwitchToInteractive,
  onComplete,
}: AnimatedCodeAlongPlayerProps) {
  // If rawSegments is empty, build default segments from files or narratorGuide
  const segments = useMemo<CodeWalkthroughSegment[]>(() => {
    if (rawSegments && rawSegments.length > 0) {
      return rawSegments.map((segment) => ({
        ...segment,
        durationSeconds: Math.max(
          segment.durationSeconds || 0,
          estimateSpeechDurationSeconds(segment.speakerText || ""),
        ),
      }));
    }

    const mainFile = files[0];
    const codeLines = (mainFile?.content || "").split("\n").filter((l) => l.trim() !== "");

    if (codeLines.length === 0) {
      return [
        {
          stepNumber: 1,
          speakerText: narratorGuide || `Welcome to ${title}! Let's review the fundamental concepts for this lesson.`,
          codeLine: `// ${title}\n// Follow along with the instructor`,
          file: mainFile?.path || "workspace.py",
          explanation: "Initial program structure",
          durationSeconds: Math.max(10, estimateSpeechDurationSeconds(narratorGuide || title)),
        },
      ];
    }

    // Chunk code lines into teaching steps
    const generated: CodeWalkthroughSegment[] = [];
    const chunkSize = Math.max(1, Math.ceil(codeLines.length / 5));
    for (let i = 0; i < codeLines.length; i += chunkSize) {
      const chunk = codeLines.slice(i, i + chunkSize).join("\n");
      const stepNum = Math.floor(i / chunkSize) + 1;
      generated.push({
        stepNumber: stepNum,
        speakerText: stepNum === 1
          ? (narratorGuide?.slice(0, 180) || `Welcome to ${title}. Let's build our program line by line.`)
          : `Step ${stepNum}: Adding ${chunk.slice(0, 40).replace(/\n/g, " ")}...`,
        codeLine: chunk,
        file: mainFile?.path || "workspace.py",
        explanation: `Step ${stepNum}: Implementation block`,
        durationSeconds: Math.max(
          6,
          Math.min(30, Math.floor(chunk.length / 8)),
          estimateSpeechDurationSeconds(stepNum === 1 ? (narratorGuide || title) : `Step ${stepNum}: Adding ${chunk}`),
        ),
      });
    }
    return generated;
  }, [rawSegments, files, narratorGuide, title]);

  const totalDuration = useMemo(() => {
    return segments.reduce((acc, s) => acc + (s.durationSeconds || 8), 0);
  }, [segments]);

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [narrationComplete, setNarrationComplete] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [typedCodeMap, setTypedCodeMap] = useState<Record<string, string>>({});
  const [activeFile, setActiveFile] = useState<string>(files[0]?.path || "workspace.py");

  const narratorVoiceRef = useRef<SpeechSynthesisVoice | null>(null);
  const narrationQueueRef = useRef(new SpeechNarrationQueue());
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Load course assigned narrator voice
  useEffect(() => {
    if (!courseId || typeof window === "undefined" || !window.speechSynthesis) return;

    let cancelled = false;
    const applyVoice = () => {
      const browserVoices = window.speechSynthesis.getVoices();
      getAssignedVoiceForCourse(courseId).then((assigned) => {
        if (cancelled) return;
        narratorVoiceRef.current = assigned ? findBrowserVoiceByName(assigned.label, browserVoices) : null;
      });
    };
    applyVoice();
    window.speechSynthesis.onvoiceschanged = applyVoice;
    return () => {
      cancelled = true;
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, [courseId]);

  useEffect(() => {
    return () => narrationQueueRef.current.cancel();
  }, []);

  const currentSegment = segments[currentStepIndex] || segments[0];

  // Calculate cumulative code typed up to currentStepIndex
  useEffect(() => {
    const fileCodeMap: Record<string, string[]> = {};
    for (let i = 0; i <= currentStepIndex && i < segments.length; i++) {
      const seg = segments[i];
      const filePath = seg.file || files[0]?.path || "workspace.py";
      if (!fileCodeMap[filePath]) fileCodeMap[filePath] = [];
      if (seg.codeLine) fileCodeMap[filePath].push(seg.codeLine);
    }

    const newTyped: Record<string, string> = {};
    for (const [filePath, lines] of Object.entries(fileCodeMap)) {
      newTyped[filePath] = lines.join("\n");
    }
    setTypedCodeMap(newTyped);

    if (currentSegment?.file) {
      setActiveFile(currentSegment.file);
    }
  }, [currentStepIndex, segments, files]);

  // Speech synthesis for active segment
  useEffect(() => {
    const speechAvailable = typeof window !== "undefined" && Boolean(window.speechSynthesis);
    setNarrationComplete(isMuted || !speechAvailable || !currentSegment?.speakerText);

    if (!isPlaying || isMuted || !currentSegment?.speakerText || typeof window === "undefined" || !window.speechSynthesis) {
      narrationQueueRef.current.cancel();
      return;
    }

    narrationQueueRef.current.play(currentSegment.speakerText, {
      voice: narratorVoiceRef.current,
      rate: 0.88,
      pitch: 1,
      onComplete: () => setNarrationComplete(true),
    });

    return () => {
      narrationQueueRef.current.cancel();
    };
  }, [currentStepIndex, isPlaying, isMuted, currentSegment]);

  // Step timer & progression
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    const interval = setInterval(() => {
      setCurrentTime((prevTime) => {
        const nextTime = prevTime + 0.5;
        // Never switch code/explanation segments while the browser is still
        // speaking the current narration. The timer may reach the planned
        // duration first when a voice speaks more slowly than estimated.
        if (nextTime >= totalDuration && !narrationComplete && !isMuted) {
          return Math.max(prevTime, totalDuration - 0.01);
        }

        if (nextTime >= totalDuration) {
          setIsPlaying(false);
          onComplete?.();
          return totalDuration;
        }

        // Determine step index from nextTime
        let accumulated = 0;
        for (let i = 0; i < segments.length; i++) {
          const segDuration = segments[i].durationSeconds || 8;
          if (nextTime >= accumulated && nextTime < accumulated + segDuration) {
            if (i !== currentStepIndex) setCurrentStepIndex(i);
            break;
          }
          if (i === currentStepIndex && nextTime >= accumulated + segDuration && !narrationComplete && !isMuted) {
            return Math.max(prevTime, accumulated + segDuration - 0.01);
          }
          accumulated += segDuration;
        }
        return nextTime;
      });
    }, 500);

    timerRef.current = interval;
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, totalDuration, currentStepIndex, segments, narrationComplete, isMuted, onComplete]);

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleReplayStep = () => {
    let accumulated = 0;
    for (let i = 0; i < currentStepIndex; i++) {
      accumulated += segments[i].durationSeconds || 8;
    }
    setCurrentTime(accumulated);
    setIsPlaying(true);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const targetTime = ratio * totalDuration;
    setCurrentTime(targetTime);

    let accumulated = 0;
    for (let i = 0; i < segments.length; i++) {
      const segDuration = segments[i].durationSeconds || 8;
      if (targetTime >= accumulated && targetTime < accumulated + segDuration) {
        setCurrentStepIndex(i);
        break;
      }
      accumulated += segDuration;
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const currentCodeDisplay = typedCodeMap[activeFile] || "";
  const codeLinesDisplay = currentCodeDisplay.split("\n");

  return (
    <div className="relative flex flex-col h-full w-full bg-[#0a0f1d] text-slate-100 font-sans overflow-hidden select-none">
      {/* Top Header Bar */}
      <div className="flex h-11 shrink-0 items-center justify-between border-b border-slate-800 bg-[#0f172a] px-4 text-xs font-mono">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff4b3e] animate-pulse" />
            <span className="font-bold text-[#ff4b3e] uppercase tracking-wider">Simulated Cohortia IDE v4.2</span>
          </div>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400 font-sans truncate">{title}</span>
        </div>

        <div className="flex items-center gap-3">
          {category && (
            <span className="rounded-full bg-blue-500/10 border border-blue-500/30 px-2.5 py-0.5 text-[10px] font-bold text-blue-400 uppercase tracking-widest">
              {category}
            </span>
          )}
          <button
            onClick={onSwitchToInteractive}
            className="flex items-center gap-1.5 rounded-lg bg-[#2563eb] hover:bg-blue-600 text-white px-3 py-1 text-xs font-bold shadow-lg shadow-blue-500/20 transition-all active:scale-95 cursor-pointer"
          >
            <Terminal className="h-3.5 w-3.5" />
            <span>Practice in Sandbox</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Main Split Area */}
      <div className="flex min-h-0 flex-1 overflow-hidden">
        {/* Left Workspace File Tree */}
        <aside className="w-56 shrink-0 border-r border-slate-800/80 bg-[#0f172a]/60 p-3 font-mono text-xs">
          <div className="mb-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Folder className="h-3.5 w-3.5 text-blue-400" /> Workspace
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-slate-300 font-semibold text-[11px] pl-1 py-1">
              <Folder className="h-3.5 w-3.5 text-amber-400" /> src
            </div>
            {files.map((f) => {
              const isActive = f.path === activeFile;
              return (
                <button
                  key={f.path}
                  onClick={() => setActiveFile(f.path)}
                  className={`flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-left text-[11px] transition-all cursor-pointer ${
                    isActive
                      ? "bg-blue-600/20 text-blue-400 font-bold border border-blue-500/30"
                      : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
                  }`}
                >
                  <FileCode2 className={`h-3.5 w-3.5 ${isActive ? "text-blue-400" : "text-slate-500"}`} />
                  <span className="truncate">{f.path}</span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Center Code Typing Canvas */}
        <main className="relative flex min-w-0 flex-1 flex-col bg-[#0d1322]">
          {/* Active File Header */}
          <div className="flex h-9 shrink-0 items-center justify-between border-b border-slate-800/80 bg-[#0f172a]/40 px-4 text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-2 text-slate-200">
              <FileCode2 className="h-3.5 w-3.5 text-blue-400" />
              {activeFile}
            </span>
            <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
              <Sparkles className="h-3 w-3 animate-pulse" />
              Instructor Code-Along Active
            </span>
          </div>

          {/* Animated Code Typing Screen */}
          <div className="relative flex-1 overflow-y-auto p-6 font-mono text-xs leading-6">
            {codeLinesDisplay.map((line, idx) => {
              const isLastLine = idx === codeLinesDisplay.length - 1;
              return (
                <div
                  key={idx}
                  className={`flex items-start gap-4 px-2 py-0.5 rounded transition-colors ${
                    isLastLine ? "bg-blue-500/10 border-l-2 border-blue-500 text-blue-200" : "text-slate-300"
                  }`}
                >
                  <span className="w-6 shrink-0 text-right text-[10px] text-slate-600 select-none">
                    {idx + 1}
                  </span>
                  <pre className="font-mono text-xs whitespace-pre-wrap break-all flex-1">
                    {line}
                    {isLastLine && isPlaying && (
                      <span className="inline-block w-2 h-4 bg-blue-400 ml-1 animate-pulse align-middle" />
                    )}
                  </pre>
                </div>
              );
            })}

            {/* Floating Educator Annotation Callout */}
            {currentSegment?.explanation && (
              <div className="mt-6 border border-blue-500/30 bg-blue-950/40 rounded-xl p-4 text-xs font-sans text-blue-200 shadow-xl backdrop-blur animate-in fade-in duration-300">
                <div className="flex items-center gap-2 text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-1">
                  <Sparkles className="h-3.5 w-3.5" /> Instructor Callout
                </div>
                <p className="leading-relaxed text-slate-200 font-medium">
                  {currentSegment.explanation}
                </p>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Subtitle / Spoken Narration Banner */}
      <div className="bg-[#0f172a] border-t border-slate-800 px-6 py-3 min-h-[56px] flex items-center justify-between text-xs font-sans">
        <div className="flex items-start gap-3 text-slate-200 leading-relaxed max-w-4xl">
          <span className="shrink-0 font-bold text-blue-400 uppercase tracking-wider text-[10px] bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20 mt-0.5">
            Teacher
          </span>
          <p className="text-slate-200 font-medium italic">
            "{currentSegment?.speakerText || narratorGuide || "Listen carefully as we build the solution..."}"
          </p>
        </div>
      </div>

      {/* Bottom Media Control & Scrubber Bar (Matching User Screenshot!) */}
      <div className="shrink-0 border-t border-slate-800 bg-[#070b14] px-6 py-3 flex flex-col gap-2">
        {/* Scrubber Progress Bar */}
        <div
          onClick={handleSeek}
          className="relative h-2 w-full bg-slate-800 rounded-full cursor-pointer overflow-hidden group"
        >
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-[#ff4b3e] transition-all duration-300"
            style={{ width: `${totalDuration > 0 ? (currentTime / totalDuration) * 100 : 0}%` }}
          />
        </div>

        {/* Player Controls & Indicator */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-4">
            <button
              onClick={handleTogglePlay}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-current" />}
            </button>

            <button
              onClick={handleReplayStep}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 transition-colors cursor-pointer"
              title="Replay Step"
            >
              <RotateCw className="h-3.5 w-3.5" />
            </button>

            <span className="font-mono text-slate-300 font-semibold text-[11px]">
              {formatTime(currentTime)} / {formatTime(totalDuration)}
            </span>
          </div>

          <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-blue-400">
            <Monitor className="h-3.5 w-3.5 text-blue-400" />
            <span>INTERACTIVE CORE LEARNING: PRACTICAL LEARNING BOARD</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMuted((prev) => !prev)}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 transition-colors cursor-pointer"
              title={isMuted ? "Unmute Voice" : "Mute Voice"}
            >
              {isMuted ? <VolumeX className="h-4 w-4 text-rose-400" /> : <Volume2 className="h-4 w-4 text-emerald-400" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
