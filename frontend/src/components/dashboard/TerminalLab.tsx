import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Play, Pause, Volume2, VolumeX, Terminal, FileCode2, Copy, Download,
  ChevronRight, Sparkles, RefreshCw, Check, AlertTriangle, Clock, ListTodo
} from "lucide-react";
import type { AnimatedLesson, LessonScene, CodeLineAnimation } from "../../lib/animationSchema";
import { SpeechNarrationQueue } from "../../lib/speechNarration";

interface TerminalLabProps {
  lesson: AnimatedLesson;
  onComplete?: () => void;
  activeSceneIndex?: number;
  onSceneChange?: (index: number) => void;
}

interface FileItem {
  name: string;
  type: "file" | "folder";
  children?: FileItem[];
  language?: string;
}

export default function TerminalLab({
  lesson,
  onComplete,
  activeSceneIndex = 0,
  onSceneChange,
}: TerminalLabProps) {
  // State management
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedFile, setSelectedFile] = useState(0);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [revealedLines, setRevealedLines] = useState<Set<number>>(new Set());
  const [activeNarration, setActiveNarration] = useState<string | null>(null);
  const narrationQueueRef = useRef(new SpeechNarrationQueue());
  
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>(0);
  const sceneRef = useRef<LessonScene>(lesson.scenes[activeSceneIndex]);

  // Update scene reference when active scene changes
  useEffect(() => {
    sceneRef.current = lesson.scenes[activeSceneIndex];
  }, [activeSceneIndex, lesson.scenes]);

  useEffect(() => {
    if (!isPlaying || isMuted || !activeNarration) {
      narrationQueueRef.current.cancel();
      return;
    }

    narrationQueueRef.current.play(activeNarration, {rate: 0.88, pitch: 1});
    return () => narrationQueueRef.current.cancel();
  }, [activeNarration, isMuted, isPlaying]);

  useEffect(() => {
    return () => narrationQueueRef.current.cancel();
  }, []);

  // Animation loop
  useEffect(() => {
    if (!isPlaying) return;

    const animate = (timestamp: number) => {
      if (startTimeRef.current === 0) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      
      setCurrentTime(elapsed);

      // Check which lines should be revealed
      sceneRef.current.codeLines.forEach((line) => {
        if (
          elapsed >= line.startTime &&
          elapsed < line.startTime + line.duration &&
          !revealedLines.has(line.lineNumber)
        ) {
          setRevealedLines((prev) => new Set(prev).add(line.lineNumber));
        }
      });

      // Update active narration
      const activeNarr = sceneRef.current.narrator.segments.find(
        (seg) => elapsed >= seg.startTime && elapsed <= seg.endTime
      );
      setActiveNarration(activeNarr?.text ?? null);

      // Handle terminal commands
      sceneRef.current.codeLines.forEach((line) => {
        if (
          line.terminal?.command &&
          line.terminal.executeTime !== undefined &&
          elapsed === line.startTime + line.terminal.executeTime
        ) {
          setTerminalOutput((prev) => [
            ...prev,
            `$ ${line.terminal.command}`,
          ]);
          if (line.terminal.output) {
            setTerminalOutput((prev) => [...prev, line.terminal.output!]);
          }
        }
      });

      // Check if scene is complete
      if (elapsed > sceneRef.current.duration * 1000) {
        setIsPlaying(false);
        if (activeSceneIndex === lesson.scenes.length - 1) {
          onComplete?.();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPlaying, revealedLines, activeSceneIndex, lesson.scenes.length, onComplete]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const resetScene = () => {
    setCurrentTime(0);
    setRevealedLines(new Set());
    setTerminalOutput([]);
    startTimeRef.current = 0;
    setIsPlaying(false);
  };

  const skipToNextScene = () => {
    if (activeSceneIndex < lesson.scenes.length - 1) {
      onSceneChange?.(activeSceneIndex + 1);
      resetScene();
    }
  };

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const scene = lesson.scenes[activeSceneIndex];
  const totalDuration = scene.duration * 1000;
  const progress = (currentTime / totalDuration) * 100;

  // Mock file structure
  const fileStructure: FileItem[] = [
    {
      name: "src",
      type: "folder",
      children: [
        { name: "App.tsx", type: "file", language: "typescript" },
        { name: "types.ts", type: "file", language: "typescript" },
        { name: "index.css", type: "file", language: "css" },
      ],
    },
    { name: "package.json", type: "file", language: "json" },
  ];

  return (
    <div className="h-full bg-slate-950 text-slate-100 flex flex-col">
      {/* Header */}
      <div className="bg-slate-900 border-b border-slate-700 px-6 py-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-mono text-red-400">SIMULATED</span>
            <span className="text-sm font-semibold">ATIA IDE V4.2</span>
          </div>
          <span className="text-xs font-semibold text-red-400">
            ACTIVE CAPSTONE SPEC
          </span>
        </div>
        <h2 className="text-lg font-bold text-slate-100">{scene.title}</h2>
        <p className="text-xs text-slate-400">{scene.description}</p>
      </div>

      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left sidebar - File explorer */}
        <div className="w-64 bg-slate-900 border-r border-slate-700 flex flex-col">
          <div className="px-4 py-3 border-b border-slate-700">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
              <FileCode2 className="w-4 h-4" />
              WORKSPACE
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            <FileTree items={fileStructure} />
          </div>
        </div>

        {/* Center - Code editor and narrator */}
        <div className="flex-1 flex flex-col">
          {/* Code editor */}
          <div className="flex-1 flex flex-col bg-slate-950">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-700">
              <span className="text-xs font-mono text-slate-400">
                {scene.codeLanguage}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(
                      scene.codeLines.map((l) => l.content).join("\n")
                    );
                  }}
                  className="p-1 hover:bg-slate-700 rounded text-slate-400 hover:text-slate-200"
                >
                  <Copy className="w-4 h-4" />
                </button>
                <button className="p-1 hover:bg-slate-700 rounded text-slate-400 hover:text-slate-200">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Code display with animation */}
            <div className="flex-1 overflow-y-auto p-6 font-mono text-sm">
              <div className="space-y-1">
                {scene.codeLines.map((line, idx) => {
                  const isRevealed = revealedLines.has(line.lineNumber);
                  const revealProgress =
                    currentTime >= line.startTime && currentTime < line.startTime + line.duration
                      ? (currentTime - line.startTime) / line.duration
                      : currentTime >= line.startTime + line.duration
                      ? 1
                      : 0;

                  return (
                    <motion.div
                      key={idx}
                      className="flex gap-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isRevealed ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-slate-500 w-8 text-right">
                        {line.lineNumber}
                      </span>
                      <div className="flex-1">
                        <TypingText
                          text={line.content}
                          progress={revealProgress}
                          highlight={line.highlight}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Narrator panel */}
          <motion.div
            className="bg-slate-900 border-t border-slate-700 px-6 py-4 min-h-20"
            animate={{ minHeight: activeNarration ? 100 : 60 }}
          >
            <div className="flex items-start gap-3">
              <div className="pt-1">
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-amber-300 mb-1">
                  NARRATOR
                </p>
                <motion.p
                  className="text-sm text-slate-300 leading-relaxed"
                  key={activeNarration}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                >
                  {activeNarration || "Waiting for narration..."}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right sidebar - Terminal */}
        <div className="w-80 bg-slate-900 border-l border-slate-700 flex flex-col">
          <div className="px-4 py-3 border-b border-slate-700">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
              <Terminal className="w-4 h-4" />
              TERMINAL
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 font-mono text-xs bg-black/30">
            {terminalOutput.length === 0 && (
              <div className="text-slate-600">~/src $</div>
            )}
            {terminalOutput.map((line, idx) => (
              <div key={idx} className="text-slate-300 whitespace-pre-wrap">
                {line}
              </div>
            ))}
            <div className="text-slate-400 animate-pulse">▐</div>
          </div>
        </div>
      </div>

      {/* Footer - Controls and progress */}
      <div className="bg-slate-900 border-t border-slate-700 px-6 py-4">
        {/* Progress bar */}
        <div className="mb-4 flex gap-2">
          <div className="flex-1 bg-slate-700 rounded-full h-1 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-red-500 to-blue-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs text-slate-400 font-mono w-16 text-right">
            {formatTime(currentTime)} / {formatTime(totalDuration)}
          </span>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={togglePlayPause}
            className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </button>

          <button
            onClick={resetScene}
            className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition"
          >
            <RefreshCw className="w-5 h-5" />
          </button>

          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>

          <div className="flex-1" />

          <div className="text-xs text-slate-400">
            Scene {activeSceneIndex + 1} of {lesson.scenes.length}
          </div>

          <button
            onClick={skipToNextScene}
            disabled={activeSceneIndex >= lesson.scenes.length - 1}
            className="p-2 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:text-slate-500 rounded-lg transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Status message */}
        <div className="text-center text-xs text-slate-500 mt-3">
          INTERACTIVE CORE LEARNING: PRACTICAL LEARNING BOARD
        </div>
      </div>
    </div>
  );
}

/**
 * File tree component for workspace explorer
 */
function FileTree({ items, level = 0 }: { items: FileItem[]; level?: number }) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  return (
    <div>
      {items.map((item, idx) => (
        <div key={idx}>
          <button
            onClick={() =>
              setExpanded((prev) => ({
                ...prev,
                [item.name]: !prev[item.name],
              }))
            }
            className={`w-full flex items-center gap-2 px-2 py-1 text-xs text-slate-300 hover:bg-slate-700 hover:text-slate-100 rounded transition ${"ml-" + (level * 4)}`}
            style={{ marginLeft: `${level * 12}px` }}
          >
            {item.type === "folder" && (
              <ChevronRight
                className={`w-4 h-4 transition ${
                  expanded[item.name] ? "rotate-90" : ""
                }`}
              />
            )}
            {item.type === "file" && <FileCode2 className="w-4 h-4" />}
            <span>{item.name}</span>
          </button>
          {item.children && expanded[item.name] && (
            <FileTree items={item.children} level={level + 1} />
          )}
        </div>
      ))}
    </div>
  );
}

/**
 * Typing animation component
 */
interface TypingTextProps {
  text: string;
  progress: number;
  highlight?: { type: string; color?: string };
}

function TypingText({ text, progress, highlight }: TypingTextProps) {
  const visibleText = text.slice(0, Math.ceil(text.length * progress));

  const getHighlightClass = () => {
    switch (highlight?.type) {
      case "syntax":
        return "text-blue-400";
      case "emphasis":
        return "text-yellow-300 font-bold";
      case "error":
        return "text-red-400";
      case "output":
        return "text-green-400";
      default:
        return "text-slate-300";
    }
  };

  return (
    <span className={getHighlightClass()}>
      {visibleText}
      {progress < 1 && <span className="animate-pulse">▐</span>}
    </span>
  );
}
