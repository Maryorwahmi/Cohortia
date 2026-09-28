import React, { useState, useEffect, useRef } from "react";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Shield, 
  Code, 
  Terminal, 
  Sparkles, 
  Award, 
  Check, 
  CheckCircle2, 
  ChevronRight,
  Cpu,
  Layers,
  FileCode2,
  GitBranch,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "../context/ThemeContext";

interface PracticalPhase {
  id: number;
  title: string;
  startSec: number;
  duration: number; // in seconds
  icon: React.ElementType;
  description: string;
  badge: string;
}

const PHASES: PracticalPhase[] = [
  {
    id: 1,
    title: "1. Code Architecture & Memory Engine",
    startSec: 0,
    duration: 25,
    icon: Code,
    description: "Write thread-safe C++ buffer pool logic with RAII scoping, atomic fences, and LRU-K cache replacer algorithms.",
    badge: "00:00 - 00:25"
  },
  {
    id: 2,
    title: "2. Terminal Test Runner & Sanitizer",
    startSec: 25,
    duration: 25,
    icon: Terminal,
    description: "Execute concurrent unit suites, verify zero memory leaks via Valgrind, and inspect automated assertions in real time.",
    badge: "00:25 - 00:50"
  },
  {
    id: 3,
    title: "3. Interactive AI Mentor Code Review",
    startSec: 50,
    duration: 22,
    icon: Sparkles,
    description: "AI Coach diagnoses lock contention bottlenecks, suggests std::shared_mutex read locks, and validates optimization diffs.",
    badge: "00:50 - 01:12"
  },
  {
    id: 4,
    title: "4. Production Build & Milestone Proof",
    startSec: 72,
    duration: 18,
    icon: Award,
    description: "Compile release binaries, generate recruiter-ready GitHub PR proof, and unlock verified Capstone milestone credentials.",
    badge: "01:12 - 01:30"
  }
];

const TOTAL_DURATION = 90; // Exactly 90 seconds!

export default function ProductDemoSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0); // in seconds (0 to 90)
  const [isMuted, setIsMuted] = useState(false);

  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);

  // Animation Loop for 90-second tour
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

  // Determine active phase based on currentTime (0 to 90)
  let activePhaseIndex = 0;
  for (let i = 0; i < PHASES.length; i++) {
    const phase = PHASES[i];
    if (currentTime >= phase.startSec && currentTime < phase.startSec + phase.duration) {
      activePhaseIndex = i;
      break;
    }
  }

  const activePhase = PHASES[activePhaseIndex];
  const activePhaseProgress = Math.min(1, Math.max(0, (currentTime - activePhase.startSec) / activePhase.duration));

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

  const jumpToPhase = (phaseIndex: number) => {
    setCurrentTime(PHASES[phaseIndex].startSec);
  };

  const playerShellClass = isDark
    ? "relative min-h-[380px] sm:min-h-[440px] w-full rounded-3xl bg-[#090a0f] border border-immersive-border/60 shadow-2xl shadow-immersive-shadow overflow-hidden group"
    : "relative min-h-[380px] sm:min-h-[440px] w-full rounded-3xl bg-white border border-slate-200 shadow-2xl shadow-slate-200/60 overflow-hidden group";

  const panelClass = isDark ? "bg-white/[0.02] border-white/5" : "bg-white border-slate-200";
  const codePaneClass = isDark ? "bg-black/60 border-white/10" : "bg-slate-900 border-slate-700";
  const strongTextClass = isDark ? "text-white" : "text-slate-800";
  const subtleTextClass = isDark ? "text-slate-400" : "text-slate-600";

  return (
    <section id="practical-tour-section" className="py-14 sm:py-20 bg-immersive-bg relative overflow-hidden border-t border-immersive-border/20 text-left">
      {/* Dynamic ambient backgrounds */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#FF4B3E]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <span className="text-xs font-mono font-bold text-[#FF4B3E] uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#FF4B3E]/10 border border-[#FF4B3E]/20 inline-flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>90-SECOND PRACTICAL LEARNING WALKTHROUGH</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-immersive-text-primary tracking-tight leading-tight">
            Take a 90-Second <span className="text-[#FF4B3E]">Practical Experience</span> Tour
          </h2>
          <p className="text-sm sm:text-base text-immersive-text-secondary font-medium leading-relaxed max-w-2xl mx-auto">
            Experience our <strong>Practical Learning Board</strong> in action. Watch real systems code architecture, automated unit tests, AI mentor code reviews, and verified milestone submissions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive 90s Screen (The Mock Video Player) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className={playerShellClass}>
              
              {/* Actual Scene Sandbox Screens inside the player */}
              <div className="absolute inset-0 select-none overflow-hidden">
                <AnimatePresence mode="wait">
                  
                  {/* PHASE 1: CODE ARCHITECTURE & MEMORY ENGINE (0s - 25s) */}
                  {activePhaseIndex === 0 && (
                    <motion.div
                      key="phase-1"
                      initial={{ opacity: 0, scale: 0.99 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.99 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 p-4 sm:p-6 flex flex-col text-left justify-between"
                    >
                      {/* Top Header Bar */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                        <div className="flex items-center space-x-2">
                          <span className="w-2.5 h-2.5 bg-rose-500 rounded-full" />
                          <span className="w-2.5 h-2.5 bg-amber-500 rounded-full" />
                          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                          <span className="text-[10px] font-mono font-semibold uppercase pl-2 text-slate-400">
                            Cohortia Practical IDE • Phase 01: Implementation
                          </span>
                        </div>
                        <span className="text-[9px] font-mono bg-[#FF4B3E]/10 text-[#FF4B3E] border border-[#FF4B3E]/20 px-2 py-0.5 rounded-full font-bold">
                          BUFFER_POOL.CPP • 25 SEC
                        </span>
                      </div>

                      {/* Code Editor Body */}
                      <div className="grid grid-cols-12 gap-3 flex-1 min-h-0">
                        {/* File Tree Panel */}
                        <div className="hidden sm:flex col-span-3 bg-white/[0.02] border border-white/5 rounded-xl p-2.5 flex-col space-y-1.5 font-mono text-[9px] text-slate-400">
                          <span className="text-[8px] font-black uppercase text-slate-500 mb-1">PROJECT REPO</span>
                          <div className="flex items-center space-x-1.5 text-blue-400"><span>📁</span> <span>src/storage</span></div>
                          <div className="flex items-center space-x-1.5 pl-3 text-[#FF4B3E] bg-white/[0.04] p-1 rounded"><span>📄</span> <span>BufferPool.cpp</span></div>
                          <div className="flex items-center space-x-1.5 pl-3"><span>📄</span> <span>LRUKCache.h</span></div>
                          <div className="flex items-center space-x-1.5 pl-3"><span>📄</span> <span>PageReplacer.cpp</span></div>
                          <div className="flex items-center space-x-1.5 text-amber-400"><span>📁</span> <span>test/</span></div>
                          <div className="flex items-center space-x-1.5 pl-3"><span>📄</span> <span>test_runner.cpp</span></div>
                          <div className="flex items-center space-x-1.5 text-slate-500 pt-2"><span>⚙️</span> <span>CMakeLists.txt</span></div>
                        </div>

                        {/* Interactive Code Editor Simulator */}
                        <div className={`${codePaneClass} col-span-12 sm:col-span-9 flex flex-col rounded-xl p-3.5 relative overflow-hidden text-left font-mono text-[10px] sm:text-[11px] leading-relaxed`}>
                          <div className="text-slate-500 text-[10px] mb-1 font-mono">
                            // Module 02: High-Performance Buffer Pool Manager
                          </div>
                          <p className="text-purple-400">#include <span className="text-emerald-400">&lt;mutex&gt;</span></p>
                          <p className="text-purple-400">#include <span className="text-emerald-400">&lt;shared_mutex&gt;</span></p>
                          <p className="text-blue-400 mt-1.5">class <span className="text-amber-300">BufferPoolManager</span> {"{"}</p>
                          <p className="pl-3 text-slate-300">private:</p>
                          <p className="pl-6 text-slate-400">std::shared_mutex <span className="text-blue-300">latch_</span>;</p>
                          <p className="pl-6 text-slate-400">std::unordered_map&lt;page_id_t, frame_id_t&gt; <span className="text-blue-300">page_table_</span>;</p>
                          <p className="pl-3 text-slate-300 mt-1">public:</p>
                          <p className="pl-6 text-blue-400">
                            auto <span className="text-amber-300">FetchPage</span>(page_id_t page_id) -&gt; Page* {"{"}
                          </p>
                          
                          {/* Live typing progression */}
                          <div className="pl-9 space-y-1 text-slate-300">
                            {activePhaseProgress > 0.15 && (
                              <p className="text-slate-400">std::unique_lock&lt;std::shared_mutex&gt; <span className="text-blue-300">lock</span>(latch_);</p>
                            )}
                            {activePhaseProgress > 0.35 && (
                              <p className="text-emerald-300">if (page_table_.find(page_id) != page_table_.end()) {"{"}</p>
                            )}
                            {activePhaseProgress > 0.55 && (
                              <p className="pl-4 text-emerald-400">replacer_-&gt;RecordAccess(frame_id);</p>
                            )}
                            {activePhaseProgress > 0.75 && (
                              <p className="pl-4 text-emerald-400">return &pages_[frame_id];</p>
                            )}
                          </div>
                          <p className="pl-6 text-blue-400 mt-1">{"}"}</p>

                          {/* Live compiler check badge */}
                          {activePhaseProgress > 0.8 && (
                            <div className="absolute bottom-4 right-4 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-bold px-3 py-1.5 rounded-xl shadow-lg flex items-center space-x-1.5 animate-bounce">
                              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                              <span>Syntax Verified: RAII Lock Invariants Satisfied</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Footer telemetry */}
                      <div className="mt-2 text-[10px] font-mono text-slate-500 flex items-center justify-between">
                        <span>Compiler: Clang 18.1 (-O3, -std=c++20)</span>
                        <span className="text-[#FF4B3E]">Phase 1/4 • Coding In Progress</span>
                      </div>
                    </motion.div>
                  )}

                  {/* PHASE 2: TERMINAL TEST RUNNER & SANITIZER (25s - 50s) */}
                  {activePhaseIndex === 1 && (
                    <motion.div
                      key="phase-2"
                      initial={{ opacity: 0, scale: 0.99 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.99 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 p-4 sm:p-6 flex flex-col text-left justify-between"
                    >
                      {/* Top Header Bar */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                        <div className="flex items-center space-x-2">
                          <span className="w-2.5 h-2.5 bg-rose-500 rounded-full" />
                          <span className="w-2.5 h-2.5 bg-amber-500 rounded-full" />
                          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                          <span className="text-[10px] font-mono font-semibold uppercase pl-2 text-slate-400">
                            Cohortia Practical Terminal • Phase 02: Test Runner & Valgrind
                          </span>
                        </div>
                        <span className="text-[9px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-full font-bold">
                          EXECUTION SUITE • 50 SEC
                        </span>
                      </div>

                      {/* Terminal Output Console */}
                      <div className="bg-[#050811] border border-blue-500/20 rounded-2xl p-4 flex-1 font-mono text-[10px] sm:text-[11px] leading-relaxed overflow-hidden text-slate-300 space-y-1.5 flex flex-col justify-between">
                        <div className="space-y-1">
                          <p className="text-slate-400">
                            <span className="text-emerald-400">runner@cohortia-sandbox:~$</span> ctest --verbose -R BufferPoolConcurrencyTest
                          </p>
                          <p className="text-slate-500">UpdateCTestConfiguration from :/workspace/build/DartConfiguration.tcl</p>
                          <p className="text-blue-400">Test project /workspace/build</p>
                          <p className="text-slate-300">Constructing 8 worker threads for high-throughput random page eviction...</p>
                          
                          {activePhaseProgress > 0.2 && (
                            <p className="text-emerald-400 font-bold">
                              [ RUN      ] BufferPoolManagerTest.ConcurrentEvictionWithDirtyPages
                            </p>
                          )}
                          {activePhaseProgress > 0.4 && (
                            <p className="text-slate-300 pl-3">
                              Thread #01: 50,000 page accesses verified in 12ms.<br />
                              Thread #02: 50,000 page accesses verified in 14ms.<br />
                              Thread #03: Frame LRU-K distance calculation passed.
                            </p>
                          )}
                          {activePhaseProgress > 0.6 && (
                            <p className="text-emerald-400 font-bold">
                              [       OK ] BufferPoolManagerTest.ConcurrentEvictionWithDirtyPages (38 ms)
                            </p>
                          )}
                          {activePhaseProgress > 0.75 && (
                            <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-300 font-bold text-xs flex items-center justify-between mt-2">
                              <span>==18422== LEAK SANITIZER: 0 bytes in 0 blocks are definitely lost.</span>
                              <span className="bg-emerald-500 text-slate-950 px-2 py-0.5 rounded text-[10px]">12/12 PASSED</span>
                            </div>
                          )}
                        </div>

                        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400">
                          <span>Benchmark Throughput: 1,480,210 ops/sec</span>
                          <span className="text-emerald-400 font-bold">● Valgrind Memory Clean</span>
                        </div>
                      </div>

                      {/* Footer telemetry */}
                      <div className="mt-2 text-[10px] font-mono text-slate-500 flex items-center justify-between">
                        <span>Tests: 12 passed, 0 failed, 0 skipped</span>
                        <span className="text-blue-400">Phase 2/4 • Test Suite Green</span>
                      </div>
                    </motion.div>
                  )}

                  {/* PHASE 3: INTERACTIVE AI MENTOR CODE REVIEW (50s - 72s) */}
                  {activePhaseIndex === 2 && (
                    <motion.div
                      key="phase-3"
                      initial={{ opacity: 0, scale: 0.99 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.99 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 p-4 sm:p-6 flex flex-col text-left justify-between"
                    >
                      {/* Top Header Bar */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                        <div className="flex items-center space-x-2">
                          <span className="w-2.5 h-2.5 bg-rose-500 rounded-full" />
                          <span className="w-2.5 h-2.5 bg-amber-500 rounded-full" />
                          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                          <span className="text-[10px] font-mono font-semibold uppercase pl-2 text-slate-400">
                            Cohortia AI Mentor Hub • Phase 03: Performance Code Review
                          </span>
                        </div>
                        <span className="text-[9px] font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2 py-0.5 rounded-full font-bold">
                          AI CODE AUDIT • 72 SEC
                        </span>
                      </div>

                      {/* Split Mentor Review Window */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 flex-1 min-h-0">
                        {/* Mentor Dialog Feed */}
                        <div className="md:col-span-6 bg-purple-950/20 border border-purple-500/30 rounded-2xl p-4 flex flex-col justify-between text-xs">
                          <div className="space-y-3">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-full bg-purple-600/30 border border-purple-500 flex items-center justify-center text-purple-300">
                                <Sparkles className="w-4 h-4" />
                              </div>
                              <div>
                                <span className="font-extrabold text-white block text-xs">Coach Johnson (AI Systems Mentor)</span>
                                <span className="text-[10px] font-mono text-purple-300">Concurrency & Profiling Review</span>
                              </div>
                            </div>

                            <p className="text-slate-300 leading-relaxed font-sans text-xs">
                              "Excellent implementation of <code>std::shared_mutex</code>! Your latching protocol successfully avoids writer starvation while granting concurrent reads to thread pools."
                            </p>

                            <div className="p-3 bg-white/[0.03] border border-white/5 rounded-xl space-y-1.5">
                              <span className="text-[10px] font-mono font-bold text-amber-400 uppercase block">MENTOR OPTIMIZATION RECOMMENDATION</span>
                              <p className="text-slate-300 text-[11px] font-sans">
                                Replace the standard mutex on <code>replacer_</code> with a lock-free ring buffer to boost multi-core scaling by an additional 18%.
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-[10px] font-mono text-purple-300 pt-2 border-t border-purple-500/20">
                            <span>Review Score: 98/100 (Exemplary)</span>
                            <span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded">APPROVED</span>
                          </div>
                        </div>

                        {/* Interactive Suggestion Diff Pane */}
                        <div className="md:col-span-6 bg-[#080d1a] border border-white/10 rounded-2xl p-3.5 flex flex-col justify-between font-mono text-[10px] sm:text-[11px]">
                          <div>
                            <div className="flex items-center justify-between border-b border-white/10 pb-1.5 mb-2">
                              <span className="text-slate-400">git diff BufferPool.cpp</span>
                              <span className="text-emerald-400 font-bold">+18 lines / -6 lines</span>
                            </div>
                            <div className="space-y-1 leading-relaxed">
                              <p className="text-rose-400 bg-rose-950/30 px-1 rounded">- std::mutex replacer_latch_;</p>
                              <p className="text-emerald-400 bg-emerald-950/30 px-1 rounded">+ folly::AtomicHashMap&lt;page_id_t, frame_id_t&gt; page_table_;</p>
                              <p className="text-emerald-400 bg-emerald-950/30 px-1 rounded">+ std::atomic&lt;size_t&gt; active_frame_count_{`{0}`};</p>
                              <p className="text-slate-400 pl-2">// Eliminates false-sharing cacheline invalidations</p>
                            </div>
                          </div>

                          <div className="p-2.5 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-between text-[10px]">
                            <span className="text-blue-300 font-sans font-bold">Optimization Applied to Workspace</span>
                            <span className="text-blue-400 font-mono font-bold">+42% Throughput</span>
                          </div>
                        </div>
                      </div>

                      {/* Footer telemetry */}
                      <div className="mt-2 text-[10px] font-mono text-slate-500 flex items-center justify-between">
                        <span>Mentor Credits: 488 / 500 Remaining</span>
                        <span className="text-purple-400">Phase 3/4 • Code Review Validated</span>
                      </div>
                    </motion.div>
                  )}

                  {/* PHASE 4: PRODUCTION BUILD & MILESTONE PROOF (72s - 90s) */}
                  {activePhaseIndex === 3 && (
                    <motion.div
                      key="phase-4"
                      initial={{ opacity: 0, scale: 0.99 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.99 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 p-4 sm:p-6 flex flex-col text-left justify-between"
                    >
                      {/* Top Header Bar */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                        <div className="flex items-center space-x-2">
                          <span className="w-2.5 h-2.5 bg-rose-500 rounded-full" />
                          <span className="w-2.5 h-2.5 bg-amber-500 rounded-full" />
                          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                          <span className="text-[10px] font-mono font-semibold uppercase pl-2 text-slate-400">
                            Cohortia Milestone Verification • Phase 04: Production Capstone
                          </span>
                        </div>
                        <span className="text-[9px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-bold">
                          VERIFIED PROOF • 90 SEC
                        </span>
                      </div>

                      {/* Capstone Milestone Victory Panel */}
                      <div className="bg-gradient-to-br from-emerald-950/30 via-slate-900/60 to-purple-950/30 border border-emerald-500/30 rounded-2xl p-5 flex-1 flex flex-col justify-between">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center text-xl">
                                🏆
                              </div>
                              <div>
                                <h4 className="text-base font-extrabold text-white">
                                  Milestone 02 Complete: High-Performance Buffer Pool
                                </h4>
                                <span className="text-[10px] font-mono text-emerald-400">
                                  GRADE A+ • 100% SPEC COMPLIANCE • CAPSTONE PORTFOLIO READY
                                </span>
                              </div>
                            </div>
                            <span className="text-xs font-mono font-black text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl">
                              +250 XP
                            </span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs pt-1">
                            <div className="p-3 bg-white/[0.03] border border-white/5 rounded-xl">
                              <span className="text-[9px] font-mono text-slate-400 uppercase block">GitHub Pull Request</span>
                              <span className="text-white font-bold flex items-center gap-1 mt-0.5">
                                <GitBranch className="w-3.5 h-3.5 text-emerald-400" />
                                <span>PR #14 Merged</span>
                              </span>
                            </div>

                            <div className="p-3 bg-white/[0.03] border border-white/5 rounded-xl">
                              <span className="text-[9px] font-mono text-slate-400 uppercase block">Automated CI/CD</span>
                              <span className="text-emerald-400 font-bold flex items-center gap-1 mt-0.5">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                <span>Release Binary Built</span>
                              </span>
                            </div>

                            <div className="p-3 bg-white/[0.03] border border-white/5 rounded-xl">
                              <span className="text-[9px] font-mono text-slate-400 uppercase block">Recruiter Proof</span>
                              <span className="text-purple-300 font-bold flex items-center gap-1 mt-0.5">
                                <Award className="w-3.5 h-3.5" />
                                <span>Verified Credential</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-between">
                          <span className="text-xs text-emerald-300 font-sans font-medium">
                            Ready for the next lesson in your career track roadmap!
                          </span>
                          <span className="text-xs font-mono font-bold text-emerald-400">
                            Module 03 Unlocked 🚀
                          </span>
                        </div>
                      </div>

                      {/* Footer telemetry */}
                      <div className="mt-2 text-[10px] font-mono text-slate-500 flex items-center justify-between">
                        <span>Milestone 02 of 05 Verified</span>
                        <span className="text-emerald-400">Phase 4/4 • 90s Tour Complete</span>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

              {/* Autoplay Visual Badge */}
              <div className={`absolute top-4 left-4 rounded-full px-3 py-1 flex items-center space-x-2 text-[10px] font-mono font-bold shadow-lg pointer-events-none z-10 ${
                isDark ? "bg-black/80 border border-white/10 text-white" : "bg-white/90 border border-slate-200 text-slate-800"
              }`}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                </span>
                <span>PRACTICAL SIMULATION • 90 SEC</span>
              </div>
            </div>

            {/* Video Controls bar below player */}
            <div className={`mt-3.5 bg-immersive-card border border-immersive-border/60 rounded-2xl p-3.5 flex flex-col space-y-3 shadow-md shadow-immersive-shadow`}>
              
              {/* Progress Slider track */}
              <div 
                className={`w-full h-2 rounded-full cursor-pointer relative overflow-hidden ${isDark ? "bg-slate-800" : "bg-slate-200"}`}
                onClick={handleSeek}
              >
                <div 
                  className="h-full bg-gradient-to-r from-[#FF4B3E] via-purple-500 to-emerald-400 rounded-full relative transition-all duration-75"
                  style={{ width: `${(currentTime / TOTAL_DURATION) * 100}%` }}
                />
              </div>

              <div className="flex items-center justify-between">
                
                {/* Left Controls: Play / Pause & Reset & Time Indicator */}
                <div className="flex items-center space-x-3 text-immersive-text-secondary">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 rounded-xl bg-immersive-bg hover:bg-immersive-card-hover border border-immersive-border text-immersive-text-primary transition-all cursor-pointer"
                    title={isPlaying ? "Pause tour" : "Play tour"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={() => setCurrentTime(0)}
                    className="p-2 rounded-xl bg-immersive-bg hover:bg-immersive-card-hover border border-immersive-border text-immersive-text-secondary hover:text-immersive-text-primary transition-all cursor-pointer"
                    title="Restart 90s Tour"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  <span className="text-[11px] font-mono font-bold select-none text-immersive-text-primary">
                    {formatTime(currentTime)} <span className="text-slate-500">/</span> {formatTime(TOTAL_DURATION)}
                  </span>
                </div>

                {/* Center Title Indicator */}
                <span className="hidden sm:inline text-xs font-bold text-[#FF4B3E] font-mono uppercase tracking-wider animate-pulse">
                  ⚡ {activePhase.title}
                </span>

                {/* Right Controls: Sound Simulation Toggle */}
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 text-immersive-text-secondary hover:text-immersive-text-primary rounded-xl bg-immersive-bg border border-immersive-border transition-all cursor-pointer"
                  title={isMuted ? "Unmute" : "Mute Sound SFX"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Playlist Steps (Practical Learning Board Only) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            
            <div>
              <div className="flex items-center justify-between mb-3 px-1">
                <p className="text-[11px] font-mono font-bold text-[#FF4B3E] uppercase tracking-widest text-left">
                  PRACTICAL LEARNING BOARD (90 SEC TOUR)
                </p>
                <span className="text-[10px] font-mono text-immersive-text-secondary font-bold">
                  4 PHASES
                </span>
              </div>

              {/* 4 Phases List */}
              <div className="flex flex-col space-y-2.5">
                {PHASES.map((phase, index) => {
                  const isSelected = activePhaseIndex === index;
                  const Icon = phase.icon;
                  
                  return (
                    <button
                      key={phase.id}
                      onClick={() => jumpToPhase(index)}
                      className={`flex items-start space-x-3 w-full p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                        isSelected 
                          ? "bg-[#FF4B3E]/10 border-[#FF4B3E] shadow-lg shadow-[#FF4B3E]/10" 
                          : "bg-immersive-card border-immersive-border/60 hover:border-immersive-border hover:bg-immersive-card-hover"
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-all ${
                        isSelected 
                          ? "bg-[#FF4B3E] border-[#FF4B3E] text-white" 
                          : "bg-immersive-bg border-immersive-border text-immersive-text-secondary"
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-bold truncate ${isSelected ? "text-[#FF4B3E]" : "text-immersive-text-primary"}`}>
                            {phase.title}
                          </span>
                          <span className="text-[9px] font-mono text-immersive-text-secondary font-semibold ml-1 shrink-0">
                            {phase.badge}
                          </span>
                        </div>
                        
                        <p className="text-[11px] text-immersive-text-secondary leading-normal mt-1 font-medium line-clamp-2">
                          {phase.description}
                        </p>

                        {/* Mini running progress bar */}
                        {isSelected && (
                          <div className={`w-full h-1 rounded-full mt-2 overflow-hidden ${isDark ? "bg-slate-800" : "bg-slate-200"}`}>
                            <div 
                              className="h-full bg-[#FF4B3E] transition-all duration-75" 
                              style={{ width: `${activePhaseProgress * 100}%` }}
                            />
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Platform Credential Security Tag */}
            <div className="bg-immersive-card/60 border border-immersive-border rounded-2xl p-4 flex items-center space-x-3 text-left">
              <Shield className="w-5 h-5 text-emerald-500 shrink-0" />
              <div className="text-[11px] text-immersive-text-secondary leading-relaxed font-medium">
                <strong className="text-immersive-text-primary block font-mono text-[10px] uppercase text-emerald-500">
                  REAL RUNTIME EXECUTION
                </strong>
                Every code submission is executed against automated test suites with memory safety checks.
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
