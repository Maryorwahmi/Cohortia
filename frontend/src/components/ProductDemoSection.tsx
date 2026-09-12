import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, Volume2, VolumeX, Shield, Code, Sparkles, Map, Users, Briefcase, Paintbrush, Heart, Award } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "../context/ThemeContext";

interface Scene {
  id: number;
  title: string;
  duration: number; // in seconds
  icon: React.ElementType;
  description: string;
  category: string;
}

const SCENES: Scene[] = [
  {
    id: 1,
    title: "Practical Learning Board",
    duration: 10,
    icon: Code,
    description: "Learn with structured chapters, detailed lesson content, and integrated narration transcripts with audio-to-text playback.",
    category: "Interactive Core Learning"
  },
  {
    id: 2,
    title: "Real-Life Work Projects",
    duration: 10,
    icon: Briefcase,
    description: "Work on authentic corporate client briefs, model financial ledgers, draft legal briefs, and solve real work challenges.",
    category: "Industry Case Studies"
  },
  {
    id: 3,
    title: "12 Categories & 6k+ Courses",
    duration: 10,
    icon: Paintbrush,
    description: "Choose from 12 diverse categories including Humanities, Sciences, Finance, Fine Arts, and over 6,000 non-tech courses.",
    category: "Universal Curriculum"
  },
  {
    id: 4,
    title: "The Experience Track",
    duration: 10,
    icon: Map,
    description: "Navigate high-resolution visual roadmaps. Complete challenges to earn Experience Points (XP) and level up.",
    category: "Gamified Progress Hub"
  },
  {
    id: 5,
    title: "Personal Mentorship Sync",
    duration: 10,
    icon: Sparkles,
    description: "Engage with professional advisors, clear course doubts, and get custom feedback and structured outline slide reviews.",
    category: "Coaching & Mentorship"
  },
  {
    id: 6,
    title: "Collaborative Community Hub",
    duration: 10,
    icon: Users,
    description: "Team up with peers across multiple fields, lead active leaderboards, and join localized student study groups.",
    category: "Community & Networking"
  }
];

const TOTAL_DURATION = SCENES.reduce((acc, s) => acc + s.duration, 0); // 60 seconds (exactly 1 minute!)

export default function ProductDemoSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0); // in seconds
  const [isMuted, setIsMuted] = useState(false);
  const [hoveredScene, setHoveredScene] = useState<number | null>(null);

  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);

  // Animation Loop for simulated video player
  useEffect(() => {
    if (!isPlaying) {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
        requestRef.current = null;
      }
      previousTimeRef.current = null;
      return;
    }

    const animate = (time: number) => {
      if (previousTimeRef.current !== null) {
        const deltaTime = (time - previousTimeRef.current) / 1000;
        setCurrentTime((prev) => {
          const next = prev + deltaTime;
          if (next >= TOTAL_DURATION) {
            return 0; // Loop around
          }
          return next;
        });
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isPlaying]);

  // Determine active scene based on currentTime
  let accumulatedTime = 0;
  let activeSceneIndex = 0;

  for (let i = 0; i < SCENES.length; i++) {
    if (currentTime >= accumulatedTime && currentTime < accumulatedTime + SCENES[i].duration) {
      activeSceneIndex = i;
      break;
    }
    accumulatedTime += SCENES[i].duration;
  }

  const activeScene = SCENES[activeSceneIndex];
  const activeSceneProgress = (currentTime - accumulatedTime) / activeScene.duration;

  // Format seconds to mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const ratio = Math.max(0, Math.min(1, clickX / width));
    setCurrentTime(ratio * TOTAL_DURATION);
  };

  const selectScene = (sceneIndex: number) => {
    let targetTime = 0;
    for (let i = 0; i < sceneIndex; i++) {
      targetTime += SCENES[i].duration;
    }
    setCurrentTime(targetTime);
  };

  const playerShellClass = isDark
    ? "relative aspect-video w-full rounded-3xl bg-[#090a0f] border border-immersive-border/60 shadow-2xl shadow-immersive-shadow overflow-hidden group"
    : "relative aspect-video w-full rounded-3xl bg-white border border-slate-200 shadow-2xl shadow-slate-200/60 overflow-hidden group";

  const panelClass = isDark ? "bg-white/[0.02] border-white/5" : "bg-white border-slate-200";
  const panelSoftClass = isDark ? "bg-white/[0.03] border-white/5" : "bg-slate-50 border-slate-200";
  const codePaneClass = isDark ? "bg-black/40 border-white/5" : "bg-white border-slate-200";
  const terminalPaneClass = isDark ? "bg-black/40 border-white/5" : "bg-slate-50 border-slate-200";
  const strongTextClass = isDark ? "text-white" : "text-slate-800";
  const mutedTextClass = isDark ? "text-slate-500" : "text-slate-500";
  const subtleTextClass = isDark ? "text-slate-400" : "text-slate-600";

  return (
    <section id="platform-walkthrough" className="py-12 bg-immersive-bg relative overflow-hidden border-t border-immersive-border/20 text-left">
      {/* Dynamic ambient backgrounds */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-immersive-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-immersive-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold text-immersive-secondary uppercase tracking-widest px-3 py-1 rounded-full bg-immersive-secondary/10 border border-immersive-secondary/20">
            60-Second Multi-Discipline Walkthrough
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-immersive-text-primary tracking-tight leading-tight">
            Take a 1-Minute <span className="text-immersive-primary">Experiential</span> Tour
          </h2>
          <p className="text-sm sm:text-base text-immersive-text-secondary font-medium leading-relaxed">
            See how our simulation environment spans <strong>12 diverse categories</strong> and <strong>6,000+ course paths</strong>! Watch how practical coding, real corporate project briefs, healthcare, and creative modules come to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Screen (The Mock Video Player) */}
          <div className="lg:col-span-8 flex flex-col">
            <div className={playerShellClass}>
              
              {/* Actual Scene Sandbox Screens inside the player */}
              <div className={`absolute inset-0 select-none ${isDark ? "" : "bg-gradient-to-br from-slate-50 via-white to-slate-100"}`}>
                <AnimatePresence mode="wait">
                  {activeScene.id === 1 && (
                    <motion.div
                      key="scene-1"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 p-4 sm:p-6 flex flex-col text-left"
                    >
                      {/* Interactive Sandbox Representation */}
                      <div className={`flex items-center justify-between border-b pb-2 mb-3 ${isDark ? "border-white/5" : "border-slate-200"}`}>
                        <div className="flex items-center space-x-2">
                          <span className="w-2.5 h-2.5 bg-rose-500 rounded-full" />
                          <span className="w-2.5 h-2.5 bg-amber-500 rounded-full" />
                          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                          <span className={`text-[10px] font-mono font-semibold uppercase pl-2 ${mutedTextClass}`}>Cohortia IDE v4.2</span>
                        </div>
                        <span className="text-[9px] font-mono bg-immersive-primary/10 text-immersive-primary px-2 py-0.5 rounded-full font-bold">ACTIVE CAPSTONE SPEC</span>
                      </div>

                      <div className="grid grid-cols-12 gap-3 flex-1 min-h-0">
                        {/* File Tree Panel */}
                        <div className={`${panelClass} col-span-3 rounded-xl p-2 flex flex-col space-y-1.5 font-mono text-[9px] ${subtleTextClass}`}>
                          <span className={`text-[8px] font-black uppercase mb-1 ${isDark ? "text-slate-600" : "text-slate-500"}`}>WORKSPACE</span>
                          <div className="flex items-center space-x-1.5 text-immersive-secondary"><span className="text-xs">📂</span> <span>src</span></div>
                          <div className="flex items-center space-x-1.5 pl-3"><span className="text-xs">📄</span> <span>types.ts</span></div>
                          <div className={`flex items-center space-x-1.5 pl-3 text-immersive-primary ${isDark ? "bg-white/[0.04]" : "bg-slate-100"} p-1 rounded-md`}><span className="text-xs">📄</span> <span>App.tsx</span></div>
                          <div className="flex items-center space-x-1.5 pl-3"><span className="text-xs">📄</span> <span>index.css</span></div>
                          <div className="flex items-center space-x-1.5"><span className="text-xs">⚙️</span> <span>package.json</span></div>
                        </div>

                        {/* Interactive Code Editor Simulator */}
                        <div className={`${codePaneClass} col-span-9 flex flex-col rounded-xl p-3 relative overflow-hidden`}>
                          {/* Live simulated typing text */}
                          <div className="font-mono text-[10px] text-emerald-400 space-y-1.5 flex-1 select-none">
                            <p className={mutedTextClass}>// Scene 1: Building a Dynamic Energy Widget</p>
                            <p className="text-blue-400">import <span className="text-purple-400">{"{ useState, useEffect }"}</span> from <span className="text-rose-400">"react"</span>;</p>
                            <p className="text-blue-400">import <span className="text-purple-400">{"{ ResponsiveContainer }"}</span> from <span className="text-rose-400">"recharts"</span>;</p>
                            <p className="pl-0 mt-3"><span className="text-purple-400">export default function</span> <span className="text-amber-400">TelemetryWidget</span>() {"{"}</p>
                            
                            {/* Animated typing effect using activeSceneProgress */}
                            {activeSceneProgress > 0.1 && (
                              <p className="pl-4 text-blue-300">
                                const [gridStatus, setStatus] = useState(<span className="text-rose-400">"ONLINE"</span>);
                              </p>
                            )}
                            {activeSceneProgress > 0.4 && (
                              <p className={`pl-4 ${mutedTextClass}`}>
                                // Computing high-frequency telemetry load variables...
                              </p>
                            )}
                            {activeSceneProgress > 0.6 && (
                              <p className="pl-4 text-blue-300">
                                const handleMetricSubmit = () =&gt; submitProjectSolution();
                              </p>
                            )}
                            {activeSceneProgress > 0.75 && (
                              <div className="absolute bottom-6 right-6 bg-emerald-500/20 border border-emerald-400 text-emerald-300 text-[10px] font-bold px-3 py-1.5 rounded-xl shadow-lg flex items-center space-x-1.5 animate-bounce">
                                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                                <span>Compiler check succeeded! Solution verified. 🎉</span>
                              </div>
                            )}
                          </div>

                          {/* Mock Cursor sliding down to press submit button */}
                          <motion.div 
                            animate={{
                              x: activeSceneProgress > 0.7 ? [120, 150, 180, 240, 220] : [20, 80, 120, 120],
                              y: activeSceneProgress > 0.7 ? [100, 120, 140, 140, 130] : [40, 60, 100, 100],
                            }}
                            className="absolute pointer-events-none text-immersive-primary z-20"
                            style={{ left: "50%", top: "40%" }}
                          >
                            <svg className="w-5 h-5 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M4.5 3V19L9.5 14L14.5 24L17.5 22.5L12.5 12.5H19.5L4.5 3Z" />
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeScene.id === 2 && (
                    <motion.div
                      key="scene-2"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 p-4 sm:p-6 flex flex-col text-left"
                    >
                      {/* Real Life Corporate Work Projects Simulator */}
                      <div className={`flex items-center justify-between border-b pb-2 mb-3 ${isDark ? "border-white/5" : "border-slate-200"}`}>
                        <div className="flex items-center space-x-2">
                          <span className="w-2.5 h-2.5 bg-rose-500 rounded-full" />
                          <span className="w-2.5 h-2.5 bg-amber-500 rounded-full" />
                          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                          <span className={`text-[10px] font-mono font-semibold uppercase pl-2 ${mutedTextClass}`}>Acme Corp Corporate Brief #2491</span>
                        </div>
                        <span className="text-[9px] font-mono bg-[#FF4B3E]/10 text-[#FF4B3E] px-2 py-0.5 rounded-full font-bold">BUSINESS INTELLIGENCE</span>
                      </div>

                      <div className="grid grid-cols-12 gap-3 flex-1 min-h-0">
                        {/* Ledger / Data Variables */}
                        <div className={`${panelClass} col-span-4 rounded-xl p-2.5 flex flex-col space-y-2 ${isDark ? "text-slate-300" : "text-slate-700"} font-sans`}>
                          <span className={`text-[8px] font-mono font-bold uppercase block ${mutedTextClass}`}>CORPORATE DATA MODEL</span>
                          <div className={`${panelSoftClass} p-1.5 rounded-lg border`}>
                            <span className={`text-[9px] block ${subtleTextClass}`}>Projected LTV</span>
                            <span className="text-xs font-bold text-emerald-400">$8,450.00</span>
                          </div>
                          <div className={`${panelSoftClass} p-1.5 rounded-lg border`}>
                            <span className={`text-[9px] block ${subtleTextClass}`}>Acquisition Costs</span>
                            <span className="text-xs font-bold text-rose-400">$340 / User</span>
                          </div>
                          <div className={`${panelSoftClass} p-1.5 rounded-lg border`}>
                            <span className={`text-[9px] block ${subtleTextClass}`}>Q4 Profit Target</span>
                            <span className={`text-xs font-bold ${strongTextClass}`}>4.5x Growth</span>
                          </div>
                        </div>

                        {/* Financial Ledger & Metrics Sheet Simulator */}
                        <div className={`${terminalPaneClass} col-span-8 flex flex-col rounded-xl p-3 relative overflow-hidden justify-between`}>
                          <div className="space-y-1.5">
                            <span className="text-[10px] font-mono font-bold text-immersive-secondary uppercase tracking-widest block">Ledger Verification Screen</span>
                            <p className={`text-[11px] ${isDark ? "text-slate-300" : "text-slate-700"}`}>Auditing transaction data streams, cost allocations, and marketing ROAS coefficients.</p>
                            
                            <div className="mt-3 space-y-1 text-[10px] font-mono">
                              <div className={`flex justify-between border-b py-1 ${isDark ? "border-white/5" : "border-slate-200"}`}>
                                <span className={mutedTextClass}>ROAS Coefficient:</span>
                                <span className="text-emerald-400 font-bold">4.2x (PASSED)</span>
                              </div>
                              <div className={`flex justify-between border-b py-1 ${isDark ? "border-white/5" : "border-slate-200"}`}>
                                <span className={mutedTextClass}>Margin Tolerance:</span>
                                <span className="text-emerald-400 font-bold">32.4% (OPTIMAL)</span>
                              </div>
                              <div className={`flex justify-between border-b py-1 ${isDark ? "border-white/5" : "border-slate-200"}`}>
                                <span className={mutedTextClass}>Operational Risk:</span>
                                <span className={isDark ? "text-slate-300" : "text-slate-700"}>0.02% (LOW)</span>
                              </div>
                            </div>
                          </div>

                          {activeSceneProgress > 0.6 && (
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="bg-emerald-500/20 border border-emerald-400/40 rounded-xl p-2 text-center text-[10px] font-extrabold text-emerald-300"
                            >
                              🚀 Business Model Verified: Acme Corp Growth Strategy Certified!
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeScene.id === 3 && (
                    <motion.div
                      key="scene-3"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 p-4 sm:p-6 flex flex-col text-left"
                    >
                      {/* Creative Design & UX Canvas Representation */}
                      <div className={`flex items-center justify-between border-b pb-2 mb-3 ${isDark ? "border-white/5" : "border-slate-200"}`}>
                        <div className="flex items-center space-x-2">
                          <span className="w-2.5 h-2.5 bg-rose-500 rounded-full" />
                          <span className="w-2.5 h-2.5 bg-amber-500 rounded-full" />
                          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                          <span className={`text-[10px] font-mono font-semibold uppercase pl-2 ${mutedTextClass}`}>Visual UI Canvas v1.8</span>
                        </div>
                        <span className="text-[9px] font-mono bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded-full font-bold">CREATIVE ARTS</span>
                      </div>

                      <div className="grid grid-cols-12 gap-3 flex-1 min-h-0">
                        {/* Design Inspector panel */}
                        <div className={`${panelClass} col-span-4 rounded-xl p-2.5 flex flex-col space-y-1.5 text-[9px] font-mono ${subtleTextClass}`}>
                          <span className={`text-[8px] font-black uppercase mb-1 ${isDark ? "text-slate-600" : "text-slate-500"}`}>PROPERTIES</span>
                          <div className={`flex justify-between border-b pb-1 ${isDark ? "border-white/5" : "border-slate-200"}`}>
                            <span>Border Radius</span>
                            <span className={`${strongTextClass} font-bold`}>16px</span>
                          </div>
                          <div className={`flex justify-between border-b pb-1 ${isDark ? "border-white/5" : "border-slate-200"}`}>
                            <span>Opacity</span>
                            <span className={`${strongTextClass} font-bold`}>95%</span>
                          </div>
                          <div className={`flex justify-between border-b pb-1 ${isDark ? "border-white/5" : "border-slate-200"}`}>
                            <span>Gradient</span>
                            <span className="text-indigo-400 font-bold">Royal Rose</span>
                          </div>
                          <div className="pt-2 flex flex-col space-y-1">
                            <span className={`text-[8px] uppercase ${isDark ? "text-slate-600" : "text-slate-500"}`}>COLOR SWATCHES</span>
                            <div className="flex space-x-1.5 pt-0.5">
                              <span className="w-3.5 h-3.5 rounded-full bg-[#FF4B3E] border border-white/10" />
                              <span className="w-3.5 h-3.5 rounded-full bg-indigo-500 border border-white/10" />
                              <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 border border-white/10" />
                              <span className="w-3.5 h-3.5 rounded-full bg-amber-400 border border-white/10" />
                            </div>
                          </div>
                        </div>

                        {/* Interactive UI wireframe grid */}
                        <div className={`${isDark ? "bg-black/30 border-white/5" : "bg-white border-slate-200"} col-span-8 border rounded-xl p-3 relative flex flex-col justify-between overflow-hidden`}>
                          <div className={`border border-dashed rounded-lg p-2.5 flex-1 flex flex-col justify-between ${isDark ? "border-white/10" : "border-slate-200"}`}>
                            {/* Layout blocks */}
                            <div className={`h-6 rounded-md flex items-center justify-between px-2 text-[9px] font-mono ${isDark ? "bg-white/5 text-slate-500" : "bg-slate-100 text-slate-500"}`}>
                              <span>Header Box</span>
                              <span className="text-[8px] text-indigo-400">Fixed</span>
                            </div>
                            <div className="h-14 bg-gradient-to-r from-[#FF4B3E]/10 to-indigo-500/10 rounded-md flex flex-col justify-center items-center p-1.5 text-center">
                              <span className={`text-[10px] font-extrabold ${strongTextClass}`}>Campaign Hero Banner</span>
                              <span className={`text-[8px] ${subtleTextClass}`}>Ratio: 16:9 Aspect</span>
                            </div>
                            <div className="flex space-x-2">
                              <div className={`h-6 rounded-md flex-1 text-[8px] text-center flex items-center justify-center font-mono ${isDark ? "bg-white/5 text-slate-500" : "bg-slate-100 text-slate-500"}`}>CTA Button</div>
                              <div className={`h-6 rounded-md flex-1 text-[8px] text-center flex items-center justify-center font-mono ${isDark ? "bg-white/5 text-slate-500" : "bg-slate-100 text-slate-500"}`}>CTA Button</div>
                            </div>
                          </div>

                          {activeSceneProgress > 0.5 && (
                            <motion.div 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="absolute top-2 right-2 bg-indigo-500 text-white font-mono text-[8px] px-2 py-0.5 rounded-md animate-pulse"
                            >
                              Snapping aligned!
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeScene.id === 4 && (
                    <motion.div
                      key="scene-4"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 p-4 sm:p-6 flex flex-col text-left"
                    >
                      {/* Interactive Unified Roadmap Matrix for 12 Categories */}
                      <div className={`flex items-center justify-between border-b pb-2 mb-3 ${isDark ? "border-white/5" : "border-slate-200"}`}>
                        <span className={`text-[10px] font-mono font-semibold uppercase ${mutedTextClass}`}>12 CATEGORIES & 6,000+ COURSES ROADMAP</span>
                        <div className="flex items-center space-x-1">
                          <span className="text-[9px] font-mono text-emerald-400 font-bold bg-emerald-400/10 px-2 py-0.5 rounded-full">ACTIVE PATH: MULTI-DISCIPLINE</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2.5 mb-3.5">
                        {[
                          { title: "Healthcare Systems", count: "480 paths", active: false },
                          { title: "Corporate Legal Ops", count: "390 paths", active: true },
                          { title: "Business Strategy", count: "1,200 paths", active: false },
                        ].map((track, i) => (
                          <div 
                            key={i} 
                            className={`p-2 rounded-xl border text-center transition-colors ${
                              track.active
                                ? "bg-immersive-primary/10 border-immersive-primary/40 text-white"
                                : isDark
                                  ? "bg-white/[0.01] border-white/5 text-slate-500"
                                  : "bg-white border-slate-200 text-slate-600"
                            }`}
                          >
                            <span className="text-[10px] font-bold block leading-tight">{track.title}</span>
                            <span className={`text-[8px] font-mono block mt-0.5 ${isDark ? "text-slate-400" : "text-slate-500"}`}>{track.count}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex-1 flex flex-col justify-center space-y-4 max-w-md mx-auto w-full relative">
                        {/* Connecting Path Lines */}
                        <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-immersive-primary via-immersive-secondary to-slate-800" />

                        {/* Milestone Step 1 */}
                        <div className="flex items-start space-x-3 relative z-10">
                          <div className="w-10 h-10 rounded-xl bg-immersive-primary flex items-center justify-center text-white text-[10px] font-black shadow-lg shadow-immersive-primary/10">
                            N1
                          </div>
                          <div className={`${panelClass} flex-1 rounded-xl p-2.5`}>
                            <span className={`text-[8px] font-mono font-bold uppercase block ${mutedTextClass}`}>MILESTONE ONE</span>
                            <span className={`text-xs font-bold block ${strongTextClass}`}>Corporate Asset Protection & Auditing Rules</span>
                          </div>
                        </div>

                        {/* Milestone Step 2 */}
                        <div className="flex items-start space-x-3 relative z-10">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-[10px] font-black transition-colors duration-500 ${activeSceneProgress > 0.4 ? "bg-immersive-secondary text-white shadow-lg shadow-immersive-secondary/10" : isDark ? "bg-slate-900 border border-white/10 text-slate-500" : "bg-slate-100 border border-slate-200 text-slate-500"}`}>
                            N2
                          </div>
                          <div className={`flex-1 rounded-xl p-2.5 border transition-all duration-500 ${activeSceneProgress > 0.4 ? "bg-white/[0.04] border-immersive-secondary/40 shadow-md shadow-immersive-shadow" : isDark ? "bg-white/[0.01] border-white/5 text-slate-500" : "bg-white border-slate-200 text-slate-600"}`}>
                            <span className={`text-[8px] font-mono font-bold uppercase block ${mutedTextClass}`}>MILESTONE TWO</span>
                            <span className={`text-xs font-bold block ${activeSceneProgress > 0.4 ? "text-white animate-pulse" : isDark ? "text-slate-400" : "text-slate-700"}`}>Simulated Regulatory Compliance Client Trial</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeScene.id === 5 && (
                    <motion.div
                      key="scene-5"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 p-4 sm:p-6 flex flex-col text-left justify-between"
                    >
                      {/* AI Mentor Sync Representation */}
                      <div className={`flex items-center justify-between border-b pb-2 ${isDark ? "border-white/5" : "border-slate-200"}`}>
                        <div className="flex items-center space-x-2.5">
                          <div className="w-7 h-7 rounded-lg bg-immersive-secondary/10 flex items-center justify-center text-xs text-immersive-secondary border border-immersive-secondary/20">
                            🤖
                          </div>
                          <div>
                            <span className={`text-xs font-black block ${strongTextClass}`}>Cohortia Mentor Advisor</span>
                            <span className={`text-[8px] font-mono uppercase font-bold tracking-wider leading-none ${mutedTextClass}`}>Senior Professional Advisor</span>
                          </div>
                        </div>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      </div>

                      {/* Chat Logs simulated with staged renders */}
                      <div className="flex-1 py-3 flex flex-col space-y-3.5 overflow-hidden">
                        
                        {/* Bubble 1: Mentor */}
                        <div className="flex items-start space-x-2.5 max-w-[80%]">
                          <div className="w-6 h-6 rounded-lg bg-immersive-secondary flex items-center justify-center text-[10px] text-white shrink-0 font-bold">CM</div>
                          <div className={`rounded-2xl p-2.5 text-[11px] ${isDark ? "bg-slate-900 border border-white/5 text-slate-200" : "bg-white border border-slate-200 text-slate-700"}`}>
                            How are your Healthcare Ops metrics performing? Any issues structuring the Patient Flow briefs?
                          </div>
                        </div>

                        {/* Bubble 2: Student */}
                        {activeSceneProgress > 0.25 && (
                          <div className="flex items-start space-x-2.5 max-w-[80%] self-end flex-row-reverse space-x-reverse animate-in slide-in-from-right duration-300">
                            <div className="w-6 h-6 rounded-lg bg-immersive-primary flex items-center justify-center text-[10px] text-white shrink-0 font-black">TE</div>
                            <div className={`bg-immersive-primary/10 border border-immersive-primary/20 rounded-2xl p-2.5 text-[11px] text-right ${isDark ? "text-slate-200" : "text-slate-700"}`}>
                              Just integrated the patient routing metrics! They map efficiently and resolve the capacity bottlenecks smoothly. Take a look!
                            </div>
                          </div>
                        )}

                        {/* Bubble 3: Mentor Response */}
                        {activeSceneProgress > 0.65 && (
                          <div className="flex items-start space-x-2.5 max-w-[80%] animate-in slide-in-from-left duration-300">
                            <div className="w-6 h-6 rounded-lg bg-immersive-secondary flex items-center justify-center text-[10px] text-white shrink-0 font-bold">CM</div>
                            <div className={`rounded-2xl p-2.5 text-[11px] font-medium ${isDark ? "bg-slate-900 border border-white/5 text-emerald-400" : "bg-white border border-slate-200 text-emerald-600"}`}>
                              Fantastic analysis! 🌟 You structured the HIPAA flow and capacity limits beautifully. Your milestone is fully approved!
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Bottom Input simulator */}
                      <div className={`border-t pt-2 flex items-center space-x-2 ${isDark ? "border-white/5" : "border-slate-200"}`}>
                        <div className={`flex-1 rounded-xl px-3 py-1.5 text-[10px] font-mono flex items-center ${isDark ? "bg-white/[0.02] border border-white/10 text-slate-500" : "bg-slate-50 border border-slate-200 text-slate-500"}`}>
                          {activeSceneProgress > 0.8 ? "Drafting follow-up query..." : "Ask your mentor advisor a question..."}
                        </div>
                        <button className="bg-immersive-secondary text-white text-[10px] font-bold px-3 py-1.5 rounded-xl">Send</button>
                      </div>
                    </motion.div>
                  )}

                  {activeScene.id === 6 && (
                    <motion.div
                      key="scene-6"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 p-4 sm:p-6 flex flex-col text-left"
                    >
                      {/* Interactive Community Workspace Representation */}
                      <div className={`flex items-center justify-between border-b pb-2 mb-3 ${isDark ? "border-white/5" : "border-slate-200"}`}>
                        <span className={`text-[10px] font-mono font-semibold uppercase ${mutedTextClass}`}>Corporate Sandbox Teams & Accomplishments</span>
                        <span className="text-[9px] font-mono text-immersive-secondary font-bold uppercase tracking-wider">Cohortia Leaderboard</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 flex-1">
                        {/* Leaderboard panel */}
                        <div className={`${isDark ? "bg-white/[0.01] border-white/5" : "bg-white border-slate-200"} border rounded-2xl p-3 flex flex-col justify-center space-y-2.5`}>
                          <span className={`text-[9px] font-mono font-bold uppercase block ${mutedTextClass}`}>ACTIVE HACKATHON MATRIX</span>
                          
                          <div className="flex items-center justify-between text-xs font-bold">
                            <div className="flex items-center space-x-2">
                              <span className="text-amber-400">1st</span>
                              <span className={strongTextClass}>Healthcare Team #12</span>
                            </div>
                            <span className="text-immersive-secondary font-mono">1,680 pts</span>
                          </div>

                          <div className={`flex items-center justify-between text-xs font-bold p-1.5 rounded-lg border ${isDark ? "bg-white/[0.03] border-white/5" : "bg-slate-50 border-slate-200"}`}>
                            <div className="flex items-center space-x-2">
                              <span className={subtleTextClass}>2nd</span>
                              <span className={strongTextClass}>Legal Ops Research Team</span>
                            </div>
                            <span className="text-immersive-primary font-mono">1,450 pts</span>
                          </div>

                          <div className={`flex items-center justify-between text-xs font-bold ${mutedTextClass}`}>
                            <div className="flex items-center space-x-2">
                              <span>3rd</span>
                              <span>EcoSync Design Guild</span>
                            </div>
                            <span>1,200 pts</span>
                          </div>
                        </div>

                        {/* Recent Victory Highlights */}
                        <div className="flex flex-col justify-center space-y-3 p-1">
                          <span className="text-[9px] font-mono text-slate-500 font-bold uppercase block">RECENT UNLOCKED CORPORATE CREDENTIALS</span>
                          
                          <div className="bg-gradient-to-r from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-2xl p-3 flex items-start space-x-2.5 animate-pulse">
                            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm">
                              🏆
                            </div>
                            <div>
                              <span className={`text-xs font-extrabold block ${strongTextClass}`}>Corporate Brief Certified</span>
                              <span className={`text-[9px] block ${subtleTextClass}`}>Submitted verified corporate healthcare audit successfully.</span>
                            </div>
                          </div>

                          <div className={`${panelClass} border rounded-2xl p-3 flex items-start space-x-2.5`}>
                            <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center text-sm">
                              🏅
                            </div>
                            <div>
                              <span className={`text-xs font-extrabold block ${strongTextClass}`}>Cross-Discipline Master</span>
                              <span className={`text-[9px] block ${subtleTextClass}`}>Logged first collaborative brief within 24 hours.</span>
                          </div>
                        </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Glowing overlay filter */}
              <div className={`absolute inset-0 bg-gradient-to-t pointer-events-none ${isDark ? "from-black/40 via-transparent to-transparent" : "from-white/50 via-transparent to-transparent"}`} />

              {/* Autoplay Visual Badge */}
              <div className={`absolute top-4 left-4 rounded-full px-3 py-1 flex items-center space-x-2 text-[10px] font-mono font-bold shadow-lg pointer-events-none z-10 ${isDark ? "bg-black/70 border border-white/10 text-white" : "bg-white/85 border border-slate-200 text-slate-700"}`}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                </span>
                <span>SIMULATED</span>
              </div>
            </div>

            {/* Video Controls bar below player */}
              <div className={`mt-3.5 bg-immersive-card border border-immersive-border/60 rounded-2xl p-3.5 flex flex-col space-y-3 shadow-md shadow-immersive-shadow ${isDark ? "" : "backdrop-blur-md"}`}>
              
              {/* Progress Slider track */}
              <div 
                className={`w-full h-1.5 rounded-full cursor-pointer relative overflow-hidden ${isDark ? "bg-slate-800" : "bg-slate-200"}`}
                onClick={handleSeek}
              >
                <div 
                  className="h-full bg-gradient-to-r from-immersive-primary to-immersive-secondary rounded-full relative transition-all duration-75"
                  style={{ width: `${(currentTime / TOTAL_DURATION) * 100}%` }}
                />
              </div>

              <div className="flex items-center justify-between">
                
                {/* Left Controls: Play / Pause & Reset & Time Indicator */}
                <div className="flex items-center space-x-3 text-immersive-text-secondary">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1.5 hover:text-immersive-text-primary rounded-lg hover:bg-white/5 transition-all cursor-pointer animate-none"
                    title={isPlaying ? "Pause Tour" : "Play Tour"}
                  >
                    {isPlaying ? <Pause className="w-4.5 h-4.5" /> : <Play className="w-4.5 h-4.5" />}
                  </button>

                  <button 
                    onClick={() => {
                      setCurrentTime(0);
                      setIsPlaying(true);
                    }}
                    className="p-1.5 hover:text-immersive-text-primary rounded-lg hover:bg-white/5 transition-all cursor-pointer animate-none"
                    title="Reset Timeline"
                  >
                    <RotateCcw className="w-4.5 h-4.5" />
                  </button>

                  <span className="text-[11px] font-mono font-bold select-none text-immersive-text-primary/80">
                    {formatTime(currentTime)} <span className="text-slate-600">/</span> {formatTime(TOTAL_DURATION)}
                  </span>
                </div>

                {/* Center Title Indicator */}
                <span className="hidden sm:inline text-xs font-bold text-immersive-secondary font-mono uppercase tracking-wider animate-pulse">
                  🎞️ {activeScene.category}: {activeScene.title}
                </span>

                {/* Right Controls: Sound Simulation Toggle */}
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-1.5 text-immersive-text-secondary hover:text-immersive-text-primary rounded-lg hover:bg-white/5 transition-all cursor-pointer animate-none"
                  title={isMuted ? "Unmute" : "Mute Sound SFX"}
                >
                  {isMuted ? <VolumeX className="w-4.5 h-4.5" /> : <Volume2 className="w-4.5 h-4.5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Walkthrough Scenes List Selector */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            
            <p className="text-[11px] font-mono font-bold text-immersive-secondary uppercase tracking-widest text-left pl-1">
              PLAYLIST STEPS (60s TOTAL)
            </p>

            <div className="flex flex-col space-y-3.5">
              {SCENES.map((scene, index) => {
                const isSelected = activeSceneIndex === index;
                const Icon = scene.icon;
                
                return (
                  <button
                    key={scene.id}
                    onClick={() => selectScene(index)}
                    onMouseEnter={() => setHoveredScene(index)}
                    onMouseLeave={() => setHoveredScene(null)}
                    className={`flex items-start space-x-3.5 w-full p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                      isSelected 
                        ? "bg-immersive-primary/10 border-immersive-primary/40 shadow-md shadow-immersive-shadow" 
                        : "bg-immersive-card border-immersive-border/40 hover:border-immersive-secondary/30 hover:bg-immersive-card-hover"
                    }`}
                  >
                    {/* Scene Icon badge */}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isSelected 
                        ? "bg-immersive-primary border-immersive-primary/30 text-white" 
                        : "bg-immersive-bg border-immersive-border text-immersive-text-secondary"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-black transition-colors ${isSelected ? "text-immersive-primary" : "text-immersive-text-primary"}`}>
                          {scene.title}
                        </span>
                        <span className="text-[9px] font-mono text-slate-500 font-bold">
                          {scene.duration}s
                        </span>
                      </div>
                      
                      <span className="text-[9px] font-mono text-immersive-secondary font-bold uppercase tracking-wider block mt-0.5">
                        {scene.category}
                      </span>

                      <p className="text-[11px] text-immersive-text-secondary leading-normal mt-1 font-medium">
                        {scene.description}
                      </p>

                      {/* Mini running scene percentage bar inside */}
                      {isSelected && (
                        <div className={`w-full h-1 rounded-full mt-2.5 overflow-hidden ${isDark ? "bg-slate-800" : "bg-slate-200"}`}>
                          <div 
                            className="h-full bg-immersive-secondary" 
                            style={{ width: `${activeSceneProgress * 100}%` }}
                          />
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Platform Credential Security Tag */}
            <div className="bg-immersive-card/50 border border-immersive-border/30 rounded-2xl p-3.5 flex items-center space-x-3 text-left">
              <Shield className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-[10px] font-mono text-immersive-text-secondary font-semibold uppercase leading-tight">
                Secure Simulation Engine: Powered by verified industry standard workspaces and real-world tools.
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
