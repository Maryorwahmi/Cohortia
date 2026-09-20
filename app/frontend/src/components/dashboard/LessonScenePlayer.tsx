import { useMemo, useEffect, useRef, useState, Fragment } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Play, Pause, RotateCw, Volume2, VolumeX,
  CheckCircle, Sparkles, ArrowRight,
  Monitor, AlertTriangle
} from "lucide-react";
import { useScenePlayer } from "../../hooks/useScenePlayer";
import { generateCppScenes, LessonScene } from "../../lib/cppSceneGenerator";

interface LessonScenePlayerProps {
  lessonId?: string;
  scenes?: LessonScene[];
  theme: "dark" | "light";
  loop?: boolean;
  onTimeUpdate?: (time: number) => void;
  onComplete?: () => void;
}

export default function LessonScenePlayer({ lessonId, scenes: propScenes, theme, loop = false, onTimeUpdate, onComplete }: LessonScenePlayerProps) {
  const generatedScenes = useMemo(() => lessonId ? generateCppScenes(lessonId) : [], [lessonId]);
  const scenes = propScenes && propScenes.length > 0 ? propScenes : generatedScenes;
  const {
    isPlaying, currentTime, totalDuration, activeSceneIndex, activeScene, activeSceneProgress,
    hoveredScene, setHoveredScene, togglePlay, reset, handleSeekClick, selectScene, formatTime,
  } = useScenePlayer({ scenes, autoPlay: true, loop });

  const [isMuted, setIsMuted] = useState(false);
  const isDark = theme === "dark";

  // Notify parent of time updates (throttled to ~1s)
  const lastEmitRef = useRef(0);
  useEffect(() => {
    if (Math.abs(currentTime - lastEmitRef.current) >= 1) {
      lastEmitRef.current = currentTime;
      onTimeUpdate?.(currentTime);
    }
  }, [currentTime, onTimeUpdate]);

  // Completion callback
  useEffect(() => {
    if (currentTime >= totalDuration && totalDuration > 0) {
      onComplete?.();
    }
  }, [currentTime, totalDuration, onComplete]);

  // Generate subtitle based on active scene
  const subtitle = useMemo(() => {
    if (!activeScene) return "";
    const { type, data } = activeScene;
    const step = Math.floor(activeSceneProgress * 5) / 5;

    switch (type) {
      case "concept-intro":
        if (step < 0.2) return data.slideTitle;
        if (step < 0.4) return data.overview?.slice(0, 120) + "...";
        if (step < 0.6) return data.objectives?.[0] || "";
        if (step < 0.8) return data.points?.[0] || "";
        return data.points?.[1] || "";
      case "syntax-breakdown":
        return data.points?.[Math.min(Math.floor(step * data.points.length), data.points.length - 1)] || data.slideTitle;
      case "live-code":
        return "Watch the code compile and execute in real-time.";
      case "memory-diagram":
        return data.points?.[Math.min(Math.floor(step * data.points.length), data.points.length - 1)] || data.slideTitle;
      case "pitfalls":
        return data.takeaways?.[0] || "Watch out for common mistakes.";
      case "cta":
        return "Ready to practice? Open the sandbox.";
      default:
        return "";
    }
  }, [activeScene, activeSceneProgress]);

  // Speech synthesis
  const lastSpokenSubRef = useRef<string>("");
  useEffect(() => {
    if (!isPlaying || isMuted || !subtitle || typeof window === "undefined" || !window.speechSynthesis) {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      return;
    }
    const cleanText = subtitle.replace(/^\[[^\]]+\]:\s*"/, "").replace(/"$/, "").trim();
    if (cleanText && lastSpokenSubRef.current !== cleanText) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 1.05;
      utterance.pitch = 1.1;
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(v => v.lang.startsWith("en-") && (v.name.includes("Google") || v.name.includes("Natural") || v.name.includes("Samantha")));
      if (preferredVoice) utterance.voice = preferredVoice;
      lastSpokenSubRef.current = cleanText;
      window.speechSynthesis.speak(utterance);
    }
  }, [subtitle, isPlaying, isMuted]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  if (scenes.length === 0) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-immersive-bg">
        <div className="text-center space-y-2">
          <Monitor className="w-8 h-8 text-immersive-text-secondary mx-auto" />
          <p className="text-xs text-immersive-text-secondary">Scene player not available for this lesson.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 flex flex-col select-none">
      {/* Main content area */}
      <div className="flex-1 flex min-h-0">
        {/* Scene display */}
        <div className={`flex-1 relative overflow-hidden ${isDark ? "bg-[#090a0f]" : "bg-slate-50"}`}>
          {/* Mobile scene indicator */}
          <div className="sm:hidden absolute top-2 left-2 right-2 z-10">
            <div className="flex space-x-1">
              {scenes.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors ${
                    i === activeSceneIndex
                      ? isDark ? "bg-immersive-primary" : "bg-blue-500"
                      : isDark ? "bg-white/20" : "bg-slate-200"
                  }`}
                />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <Fragment key={activeScene.id}>
              <SceneRenderer
                scene={activeScene}
                progress={activeSceneProgress}
                isDark={isDark}
              />
            </Fragment>
          </AnimatePresence>
        </div>

        {/* Playlist sidebar */}
        <div className={`hidden sm:flex w-44 border-l flex-col overflow-hidden ${isDark ? "border-white/5 bg-[#06070a]" : "border-slate-200 bg-slate-100"}`}>
          {/* Playlist header */}
          <div className={`px-3 py-2 border-b ${isDark ? "border-white/5" : "border-slate-200"}`}>
            <span className={`text-[9px] font-mono font-bold uppercase tracking-widest ${isDark ? "text-immersive-secondary" : "text-blue-600"}`}>
              Scene Playlist
            </span>
          </div>

          {/* Playlist items */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1.5">
            {scenes.map((scene, index) => {
              const isSelected = activeSceneIndex === index;
              const Icon = scene.icon;
              return (
                <button
                  key={scene.id}
                  onClick={() => selectScene(index)}
                  onMouseEnter={() => setHoveredScene(index)}
                  onMouseLeave={() => setHoveredScene(null)}
                  className={`flex items-start space-x-2 w-full p-2 rounded-xl border text-left transition-all duration-200 ${
                    isSelected
                      ? isDark ? "bg-immersive-primary/10 border-immersive-primary/40" : "bg-blue-50 border-blue-300"
                      : isDark
                        ? "bg-transparent border-white/5 hover:border-white/15 hover:bg-white/5"
                        : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                    isSelected
                      ? isDark ? "bg-immersive-primary text-white" : "bg-blue-500 text-white"
                      : isDark ? "bg-white/5 text-slate-400" : "bg-slate-100 text-slate-500"
                  }`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={`text-[10px] font-bold block leading-tight ${
                      isSelected
                        ? isDark ? "text-immersive-primary" : "text-blue-600"
                        : isDark ? "text-slate-300" : "text-slate-700"
                    }`}>
                      {scene.title}
                    </span>
                    <span className={`text-[9px] font-mono block mt-0.5 ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                      {scene.duration}s
                    </span>
                    {isSelected && (
                      <div className="w-full h-1 bg-slate-800 rounded-full mt-1.5 overflow-hidden">
                        <div className={`h-full rounded-full ${isDark ? "bg-immersive-secondary" : "bg-blue-400"}`} style={{ width: `${activeSceneProgress * 100}%` }} />
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Security badge */}
          <div className={`p-2 border-t ${isDark ? "border-white/5" : "border-slate-200"}`}>
            <div className={`flex items-center space-x-2 text-left p-2 rounded-xl ${isDark ? "bg-white/5 border border-white/5" : "bg-white border border-slate-200"}`}>
              <CheckCircle className={`w-3.5 h-3.5 shrink-0 ${isDark ? "text-emerald-400" : "text-emerald-500"}`} />
              <span className={`text-[9px] font-mono font-semibold uppercase leading-tight ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                C++ Lab Verified
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtitle overlay */}
      {subtitle && (
        <div className={`absolute bottom-14 left-4 right-48 px-4 py-2 rounded-xl text-[11px] font-medium text-center leading-relaxed shadow-lg z-30 ${
          isDark ? "bg-black/80 text-white border border-white/10" : "bg-white/90 text-slate-800 border border-slate-200"
        }`}>
          {subtitle}
        </div>
      )}

      {/* Controls bar */}
      <div className={`border-t flex items-center px-3 py-2 space-x-3 ${isDark ? "border-white/5 bg-[#06070a]" : "border-slate-200 bg-white"}`}>
        <button onClick={togglePlay} className={`p-1.5 rounded-lg transition-colors ${isDark ? "hover:text-white text-slate-400" : "hover:text-slate-900 text-slate-500"}`}>
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
        <button onClick={reset} className={`p-1.5 rounded-lg transition-colors ${isDark ? "hover:text-white text-slate-400" : "hover:text-slate-900 text-slate-500"}`}>
          <RotateCw className="w-4 h-4" />
        </button>
        <div className="flex-1 flex items-center space-x-2">
          <span className={`text-[10px] font-mono font-bold ${isDark ? "text-slate-500" : "text-slate-400"}`}>
            {formatTime(currentTime)}
          </span>
          <div
            className={`flex-1 h-1.5 rounded-full cursor-pointer relative overflow-hidden ${isDark ? "bg-slate-800" : "bg-slate-200"}`}
            onClick={handleSeekClick}
          >
            <div
              className={`h-full rounded-full relative transition-all duration-75 ${isDark ? "bg-gradient-to-r from-immersive-primary to-immersive-secondary" : "bg-gradient-to-r from-blue-500 to-blue-300"}`}
              style={{ width: `${(currentTime / totalDuration) * 100}%` }}
            />
          </div>
          <span className={`text-[10px] font-mono font-bold ${isDark ? "text-slate-500" : "text-slate-400"}`}>
            {formatTime(totalDuration)}
          </span>
        </div>
        <button onClick={() => setIsMuted(!isMuted)} className={`p-1.5 rounded-lg transition-colors ${isDark ? "hover:text-white text-slate-400" : "hover:text-slate-900 text-slate-500"}`}>
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}

// ─── Scene Renderer ───
function SceneRenderer({ scene, progress, isDark }: { scene: LessonScene; progress: number; isDark: boolean }) {
  switch (scene.type) {
    case "concept-intro":
      return <ConceptIntroScene data={scene.data} progress={progress} isDark={isDark} />;
    case "syntax-breakdown":
      return <SyntaxBreakdownScene data={scene.data} progress={progress} isDark={isDark} />;
    case "live-code":
      return <LiveCodeScene data={scene.data} progress={progress} isDark={isDark} />;
    case "memory-diagram":
      return <MemoryDiagramScene data={scene.data} progress={progress} isDark={isDark} />;
    case "pitfalls":
      return <PitfallsScene data={scene.data} progress={progress} isDark={isDark} />;
    case "cta":
      return <CTAScene data={scene.data} progress={progress} isDark={isDark} />;
    default:
      return null;
  }
}

// ─── Helpers ───
function getCodeLineClass(line: string, isDark: boolean): string {
  const base = isDark ? "text-slate-300" : "text-slate-700";
  if (line.startsWith("#") || line.startsWith("import")) return "text-indigo-400";
  if (line.startsWith("class") || line.startsWith("template") || line.startsWith("struct")) return "text-[#FF4B3E] font-semibold";
  if (line.startsWith("//") || line.startsWith("/*") || line.startsWith("*")) return "text-slate-500 italic";
  if (line.includes("std::cout") || line.includes("std::cerr")) return "text-emerald-400";
  if (line.includes("virtual") || line.includes("override") || line.includes("const")) return "text-blue-400";
  if (line.includes("public:") || line.includes("protected:") || line.includes("private:")) return "text-purple-400";
  if (line.includes("new") || line.includes("delete")) return "text-amber-400";
  if (line.includes("return")) return "text-rose-400";
  return base;
}

// ─── Scene 1: Concept Introduction ───
function ConceptIntroScene({ data, progress, isDark }: { data: any; progress: number; isDark: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4 }}
      className="absolute inset-0 p-4 sm:p-5 flex flex-col text-left overflow-y-auto"
    >
      <div className={`flex items-center justify-between border-b pb-2 mb-3 ${isDark ? "border-white/5" : "border-slate-200"}`}>
        <span className={`text-[10px] font-mono font-semibold uppercase ${isDark ? "text-slate-500" : "text-slate-400"}`}>Cohortia C++ Lab</span>
        <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full font-bold ${isDark ? "bg-immersive-primary/10 text-immersive-primary" : "bg-blue-100 text-blue-600"}`}>Theory</span>
      </div>

      {progress > 0.1 && (
        <motion.h3 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className={`text-base font-extrabold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
          {data.slideTitle}
        </motion.h3>
      )}

      {progress > 0.2 && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`text-[11px] leading-relaxed mt-2 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
          {data.overview}
        </motion.p>
      )}

      {progress > 0.35 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 space-y-1">
          <span className={`text-[9px] font-mono font-bold uppercase tracking-wider ${isDark ? "text-immersive-secondary" : "text-blue-600"}`}>Learning Objectives</span>
          {data.objectives.map((obj: string, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-start space-x-2">
              <span className={`w-1.5 h-1.5 rounded-full mt-1 shrink-0 ${isDark ? "bg-immersive-primary" : "bg-blue-500"}`} />
              <span className={`text-[11px] ${isDark ? "text-slate-300" : "text-slate-600"}`}>{obj}</span>
            </motion.div>
          ))}
        </motion.div>
      )}

      {progress > 0.55 && data.points.map((point: string, i: number) => (
        <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }} className="mt-2">
          <div className="flex items-start space-x-2">
            <span className={`w-1.5 h-1.5 rounded-full mt-1 shrink-0 ${isDark ? "bg-immersive-secondary" : "bg-orange-400"}`} />
            <span className={`text-[11px] ${isDark ? "text-slate-300" : "text-slate-600"}`}>{point}</span>
          </div>
        </motion.div>
      ))}

      {progress > 0.85 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-auto pt-3 flex items-center space-x-2">
          <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] text-white font-bold ${isDark ? "bg-immersive-secondary" : "bg-blue-500"}`}>CM</div>
          <span className={`text-[10px] font-mono ${isDark ? "text-slate-400" : "text-slate-500"}`}>Tutor Chinedu</span>
        </motion.div>
      )}
    </motion.div>
  );
}

// ─── Scene 2: Syntax Breakdown ───
function SyntaxBreakdownScene({ data, progress, isDark }: { data: any; progress: number; isDark: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4 }}
      className="absolute inset-0 p-4 sm:p-5 flex flex-col text-left overflow-y-auto"
    >
      <div className={`flex items-center justify-between border-b pb-2 mb-3 ${isDark ? "border-white/5" : "border-slate-200"}`}>
        <span className={`text-[10px] font-mono font-semibold uppercase ${isDark ? "text-slate-500" : "text-slate-400"}`}>Cohortia C++ Lab</span>
        <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full font-bold ${isDark ? "bg-blue-500/10 text-blue-400" : "bg-blue-100 text-blue-600"}`}>Syntax</span>
      </div>

      {progress > 0.1 && (
        <motion.h3 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className={`text-base font-extrabold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
          {data.slideTitle}
        </motion.h3>
      )}

      {progress > 0.25 && data.points.map((point: string, i: number) => (
        <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} className="mt-3">
          <div className={`p-2.5 rounded-xl border ${isDark ? "bg-white/5 border-white/10" : "bg-white border-slate-200"}`}>
            <div className="flex items-start space-x-2">
              <span className={`text-[10px] font-mono font-bold mt-0.5 ${isDark ? "text-blue-400" : "text-blue-600"}`}>{i + 1}.</span>
              <span className={`text-[11px] leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>{point}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

// ─── Scene 3: Live Code ───
function LiveCodeScene({ data, progress, isDark }: { data: any; progress: number; isDark: boolean }) {
  const code = data.code || "";
  const fileName = data.fileName || "main.cpp";
  const files = ["src/main.cpp", "include/Class.h", "CMakeLists.txt", "README.md"];

  const typeProgress = Math.max(0, Math.min(1, (progress - 0.2) / 0.6));
  const charsToShow = Math.floor(code.length * typeProgress);
  const displayedCode = code.slice(0, charsToShow) + (typeProgress < 1 ? "█" : "");

  const termLines: string[] = ["$ g++ -std=c++20 main.cpp -o app"];
  if (typeProgress > 0.2) termLines.push("[INFO] Resolving lexical symbols & dependencies...");
  if (typeProgress > 0.4) termLines.push("[INFO] Allocating virtual table pointers (vptr)...");
  if (typeProgress > 0.6) termLines.push("[INFO] Linking shared standard headers...");
  if (typeProgress > 0.8) {
    termLines.push("$ ./app");
    termLines.push("[EXEC] Execution exited successfully with code 0.");
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4 }}
      className="absolute inset-0 flex flex-col text-left overflow-hidden"
    >
      <div className={`flex items-center justify-between border-b px-3 py-1.5 ${isDark ? "border-white/5 bg-[#06070a]" : "border-slate-200 bg-slate-100"}`}>
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-rose-500" />
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className={`text-[10px] font-mono font-semibold uppercase ${isDark ? "text-slate-500" : "text-slate-400"}`}>Cohortia IDE v4.2</span>
        </div>
        <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full font-bold ${isDark ? "bg-immersive-primary/10 text-immersive-primary" : "bg-blue-100 text-blue-600"}`}>Practice</span>
      </div>

      <div className="flex-1 grid grid-cols-12 overflow-hidden">
        <div className={`hidden sm:flex col-span-2 flex-col p-2 border-r font-mono text-[9px] space-y-1 h-full overflow-hidden ${isDark ? "bg-[#040507]/40 border-white/5 text-slate-500" : "bg-slate-50 border-slate-200 text-slate-600"}`}>
          <span className={`text-[8px] font-extrabold uppercase tracking-widest block mb-1 ${isDark ? "text-slate-600" : "text-slate-400"}`}>Files</span>
          {files.map((f, i) => (
            <div key={i} className={`flex items-center space-x-1 p-1 rounded-lg ${i === 0 ? (isDark ? "bg-immersive-primary/10 text-immersive-primary font-bold" : "bg-blue-50 text-blue-600 font-bold") : (isDark ? "hover:bg-white/5" : "hover:bg-slate-100")}`}>
              <span>{f.endsWith(".h") ? "⚙" : "📄"}</span>
              <span className="truncate">{f.split("/").pop()}</span>
            </div>
          ))}
        </div>

        <div className={`col-span-12 sm:col-span-5 flex flex-col font-mono text-[9px] leading-relaxed border-r h-full overflow-hidden ${isDark ? "bg-[#06070a]/20 border-white/5 text-slate-300" : "bg-slate-50/50 border-slate-200 text-slate-700"}`}>
          <div className={`flex items-center justify-between border-b pb-1 px-2 py-1 ${isDark ? "border-white/5" : "border-slate-200"}`}>
            <span className={`text-[8px] font-extrabold uppercase tracking-widest ${isDark ? "text-slate-600" : "text-slate-400"}`}>Code Editor</span>
            <span className="text-[8px] opacity-45">{fileName}</span>
          </div>
          <div className="flex-1 overflow-y-auto whitespace-pre p-2">
            {displayedCode.split("\n").map((line, idx) => (
              <div key={idx} className={`flex space-x-2 hover:bg-white/5 py-0.5 rounded px-1 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                <span className={`select-none text-right w-5 text-[8px] ${isDark ? "text-slate-600" : "text-slate-400"}`}>{idx + 1}</span>
                <span className={getCodeLineClass(line, isDark)}>{line}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`col-span-12 sm:col-span-5 flex flex-col font-mono text-[9px] leading-relaxed h-full overflow-hidden ${isDark ? "bg-black text-emerald-400 border-neutral-950" : "bg-slate-900 text-slate-100 border-slate-800"}`}>
          <div className={`flex items-center justify-between border-b pb-1 px-2 py-1 ${isDark ? "border-white/5" : "border-slate-700"}`}>
            <span className={`text-[8px] font-extrabold uppercase tracking-widest ${isDark ? "text-emerald-500/60" : "text-slate-400"}`}>g++ Compiler Console</span>
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
          </div>
          <div className="flex-1 overflow-y-auto space-y-1 p-2">
            {termLines.map((tLine, idx) => (
              <p key={idx} className={
                tLine.startsWith("$") ? "text-indigo-300 font-bold" :
                tLine.includes("[EXEC]") ? "text-emerald-400" :
                tLine.startsWith("[INFO]") ? "text-blue-400" :
                isDark ? "text-emerald-300/80" : "text-slate-300"
              }>
                {tLine}
              </p>
            ))}
            {progress > 0.9 && (
              <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="mt-2">
                <div className={`inline-flex items-center space-x-1.5 px-2 py-1 rounded-lg text-[10px] font-bold ${isDark ? "bg-emerald-500/20 border border-emerald-400 text-emerald-300" : "bg-emerald-100 border border-emerald-300 text-emerald-700"}`}>
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                  <span>Compiler check succeeded! ✓</span>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Scene 4: Memory Diagram ───
function MemoryDiagramScene({ data, progress, isDark }: { data: any; progress: number; isDark: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4 }}
      className="absolute inset-0 p-4 sm:p-5 flex flex-col text-left overflow-y-auto"
    >
      <div className={`flex items-center justify-between border-b pb-2 mb-3 ${isDark ? "border-white/5" : "border-slate-200"}`}>
        <span className={`text-[10px] font-mono font-semibold uppercase ${isDark ? "text-slate-500" : "text-slate-400"}`}>Cohortia C++ Lab</span>
        <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full font-bold ${isDark ? "bg-purple-500/10 text-purple-400" : "bg-purple-100 text-purple-600"}`}>Systems</span>
      </div>

      {progress > 0.1 && (
        <motion.h3 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className={`text-base font-extrabold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
          {data.slideTitle}
        </motion.h3>
      )}

      {progress > 0.25 && data.points.map((point: string, i: number) => (
        <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.15 }} className="mt-3">
          <div className={`p-3 rounded-xl border relative overflow-hidden ${isDark ? "bg-white/[0.03] border-white/10" : "bg-white border-slate-200"}`}>
            <div className={`absolute top-0 left-0 w-1 h-full ${isDark ? "bg-purple-500" : "bg-purple-400"}`} />
            <div className="flex items-start space-x-2 pl-2">
              <span className={`text-[10px] font-mono font-bold mt-0.5 ${isDark ? "text-purple-400" : "text-purple-600"}`}>{i + 1}</span>
              <span className={`text-[11px] leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>{point}</span>
            </div>
          </div>
        </motion.div>
      ))}

      {progress > 0.7 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 grid grid-cols-3 gap-2">
          <div className={`p-2 rounded-xl border text-center ${isDark ? "bg-white/5 border-white/10" : "bg-slate-50 border-slate-200"}`}>
            <div className={`text-[10px] font-mono font-bold ${isDark ? "text-blue-400" : "text-blue-600"}`}>Stack</div>
            <div className={`text-[9px] ${isDark ? "text-slate-500" : "text-slate-400"}`}>Local vars</div>
          </div>
          <div className={`p-2 rounded-xl border text-center ${isDark ? "bg-white/5 border-white/10" : "bg-slate-50 border-slate-200"}`}>
            <div className={`text-[10px] font-mono font-bold ${isDark ? "text-amber-400" : "text-amber-600"}`}>Heap</div>
            <div className={`text-[9px] ${isDark ? "text-slate-500" : "text-slate-400"}`}>new/delete</div>
          </div>
          <div className={`p-2 rounded-xl border text-center ${isDark ? "bg-white/5 border-white/10" : "bg-slate-50 border-slate-200"}`}>
            <div className={`text-[10px] font-mono font-bold ${isDark ? "text-emerald-400" : "text-emerald-600"}`}>Static</div>
            <div className={`text-[9px] ${isDark ? "text-slate-500" : "text-slate-400"}`}>Global</div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

// ─── Scene 5: Pitfalls ───
function PitfallsScene({ data, progress, isDark }: { data: any; progress: number; isDark: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4 }}
      className="absolute inset-0 p-4 sm:p-5 flex flex-col text-left overflow-y-auto"
    >
      <div className={`flex items-center justify-between border-b pb-2 mb-3 ${isDark ? "border-white/5" : "border-slate-200"}`}>
        <span className={`text-[10px] font-mono font-semibold uppercase ${isDark ? "text-slate-500" : "text-slate-400"}`}>Cohortia C++ Lab</span>
        <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full font-bold ${isDark ? "bg-rose-500/10 text-rose-400" : "bg-rose-100 text-rose-600"}`}>Safety</span>
      </div>

      {progress > 0.1 && (
        <motion.h3 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className={`text-base font-extrabold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
          Pitfalls & Best Practices
        </motion.h3>
      )}

      {progress > 0.25 && data.takeaways?.map((takeaway: string, i: number) => (
        <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }} className="mt-3">
          <div className={`p-3 rounded-xl border flex items-start space-x-2 ${isDark ? "bg-emerald-500/5 border-emerald-500/20" : "bg-emerald-50 border-emerald-200"}`}>
            <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? "text-emerald-400" : "text-emerald-500"}`} />
            <span className={`text-[11px] leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>{takeaway}</span>
          </div>
        </motion.div>
      ))}

      {progress > 0.55 && data.points?.map((point: string, i: number) => (
        <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="mt-2">
          <div className={`p-3 rounded-xl border flex items-start space-x-2 ${isDark ? "bg-rose-500/5 border-rose-500/20" : "bg-rose-50 border-rose-200"}`}>
            <AlertTriangle className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? "text-rose-400" : "text-rose-500"}`} />
            <span className={`text-[11px] leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>{point}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

// ─── Scene 6: CTA ───
function CTAScene({ data, progress, isDark }: { data: any; progress: number; isDark: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4 }}
      className="absolute inset-0 p-4 sm:p-5 flex flex-col items-center justify-center text-center"
    >
      {progress > 0.1 && (
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 ${isDark ? "bg-immersive-primary/10 border border-immersive-primary/20" : "bg-blue-50 border border-blue-200"}`}>
          <Sparkles className={`w-6 h-6 ${isDark ? "text-immersive-primary" : "text-blue-500"}`} />
        </motion.div>
      )}

      {progress > 0.2 && (
        <motion.h3 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className={`text-lg font-extrabold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
          Ready to Practice?
        </motion.h3>
      )}

      {progress > 0.35 && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`text-[11px] mt-2 max-w-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}>
          Apply what you've learned in the interactive sandbox. Compile, debug, and verify your understanding.
        </motion.p>
      )}

      {progress > 0.5 && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 space-y-2 w-full max-w-xs">
          {data.objectives?.map((obj: string, i: number) => (
            <div key={i} className={`flex items-center space-x-2 p-2 rounded-lg text-left ${isDark ? "bg-white/5 border border-white/5" : "bg-white border border-slate-200"}`}>
              <CheckCircle className={`w-3.5 h-3.5 shrink-0 ${isDark ? "text-emerald-400" : "text-emerald-500"}`} />
              <span className={`text-[10px] ${isDark ? "text-slate-300" : "text-slate-600"}`}>{obj}</span>
            </div>
          ))}
        </motion.div>
      )}

      {progress > 0.75 && (
        <motion.button
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-4 px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 transition-all ${isDark ? "bg-immersive-primary hover:brightness-110 text-white" : "bg-blue-500 hover:bg-blue-600 text-white"}`}
        >
          <span>Try in Sandbox</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </motion.button>
      )}
    </motion.div>
  );
}
