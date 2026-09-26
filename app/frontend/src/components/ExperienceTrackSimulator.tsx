import React, { useState, useEffect, useRef } from "react";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Sparkles, 
  Layers3, 
  Target, 
  Terminal, 
  ArrowRight, 
  Check, 
  CheckCircle2, 
  Coins, 
  Users, 
  Code2, 
  TrendingUp, 
  Crown,
  ChevronRight,
  ShieldCheck,
  Award
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { UserPreferences } from "../types";

interface ExperienceTrackSimulatorProps {
  userProfile?: UserPreferences | null;
  onOpenWizard?: () => void;
}

interface SimStage {
  id: number;
  title: string;
  duration: number; // in seconds
  icon: React.ElementType;
  badge: string;
  tagline: string;
}

const STAGES: SimStage[] = [
  {
    id: 1,
    title: "1. Select Career Path & Pricing",
    duration: 10,
    icon: Target,
    badge: "STAGE 01",
    tagline: "Choose your path: Pivot ($23), Upskill ($30), or Lead & Specialize ($45)"
  },
  {
    id: 2,
    title: "2. Build Level Progression",
    duration: 10,
    icon: Layers3,
    badge: "STAGE 02",
    tagline: "Select validated courses across Beginner, Intermediate & Advanced levels"
  },
  {
    id: 3,
    title: "3. Practical Assistant & Labs",
    duration: 10,
    icon: Terminal,
    badge: "STAGE 03",
    tagline: "Ship production-grade projects with real terminal exercises and code reviews"
  },
  {
    id: 4,
    title: "4. AI Mentorship & Portfolio",
    duration: 10,
    icon: Sparkles,
    badge: "STAGE 04",
    tagline: "500 AI Credits, proactive mentor guidance, and verified recruiter portfolio"
  }
];

const TOTAL_DURATION = STAGES.reduce((acc, s) => acc + s.duration, 0); // 40 seconds

export default function ExperienceTrackSimulator({ onOpenWizard }: ExperienceTrackSimulatorProps) {
  const navigate = useNavigate();

  // Playback state
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);

  // Interactive sandbox state
  const [selectedPlan, setSelectedPlan] = useState<"pivot" | "upskill" | "lead">("pivot");
  const [activeCourseField, setActiveCourseField] = useState("Full-Stack & Systems");
  const [selectedCourses, setSelectedCourses] = useState<string[]>([
    "Foundations of CS & Algorithms",
    "Modern Web Architecture & React",
    "Database Systems & Query Tuning"
  ]);

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

  // Determine active stage based on currentTime
  let accumulatedTime = 0;
  let activeStageIndex = 0;

  for (let i = 0; i < STAGES.length; i++) {
    if (currentTime >= accumulatedTime && currentTime < accumulatedTime + STAGES[i].duration) {
      activeStageIndex = i;
      break;
    }
    accumulatedTime += STAGES[i].duration;
  }

  const activeStage = STAGES[activeStageIndex];
  const activeStageProgress = (currentTime - accumulatedTime) / activeStage.duration;

  const selectStage = (stageIndex: number) => {
    let targetTime = 0;
    for (let i = 0; i < stageIndex; i++) {
      targetTime += STAGES[i].duration;
    }
    setCurrentTime(targetTime);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    setCurrentTime(ratio * TOTAL_DURATION);
  };

  const toggleCourse = (title: string) => {
    setSelectedCourses(prev => 
      prev.includes(title) 
        ? prev.filter(c => c !== title) 
        : [...prev, title]
    );
  };

  return (
    <section id="experience-track-simulator" className="py-14 sm:py-20 bg-immersive-bg relative border-t border-immersive-border/20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-[#FF4B3E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-mono font-bold text-[#FF4B3E] bg-[#FF4B3E]/10 border border-[#FF4B3E]/20 px-3.5 py-1 rounded-full uppercase tracking-widest inline-flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE SIMULATOR</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-immersive-text-primary tracking-tight">
            Experience Career Track <span className="text-[#FF4B3E]">Simulator</span>
          </h2>
          <p className="text-base sm:text-lg text-immersive-text-secondary leading-relaxed">
            See how Cohortia transforms structured computer science courses into real workplace competence. Try the interactive 4-stage simulator below.
          </p>
        </div>

        {/* Simulator Container */}
        <div className="bg-immersive-card border border-immersive-border rounded-3xl p-4 sm:p-7 shadow-2xl shadow-immersive-shadow overflow-hidden">
          
          {/* Top Stages Tab Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 mb-6">
            {STAGES.map((stage, idx) => {
              const isActive = activeStageIndex === idx;
              const Icon = stage.icon;
              return (
                <button
                  key={stage.id}
                  onClick={() => selectStage(idx)}
                  className={`p-3 sm:p-4 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                    isActive
                      ? "bg-immersive-bg border-[#FF4B3E] shadow-md shadow-[#FF4B3E]/10"
                      : "bg-immersive-bg/50 border-immersive-border/60 hover:border-immersive-secondary/40"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono font-extrabold uppercase ${
                      isActive ? "text-[#FF4B3E]" : "text-immersive-text-secondary"
                    }`}>
                      {stage.badge}
                    </span>
                    <Icon className={`w-4 h-4 ${isActive ? "text-[#FF4B3E]" : "text-immersive-text-secondary"}`} />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-immersive-text-primary truncate">
                    {stage.title}
                  </h4>

                  {/* Stage Progress Bar */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-immersive-border/30">
                      <div 
                        className="h-full bg-[#FF4B3E] transition-all duration-100" 
                        style={{ width: `${activeStageProgress * 100}%` }}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Interactive Screen Display */}
          <div className="bg-immersive-bg border border-immersive-border rounded-2xl p-4 sm:p-8 min-h-[460px] flex flex-col justify-between relative overflow-hidden">
            
            {/* Stage 1: Select Career Path & Pricing */}
            {activeStageIndex === 0 && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-immersive-border/40 pb-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#FF4B3E] uppercase tracking-wider">
                      STEP 1 OF 4: CAREER GOAL SELECTION
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-immersive-text-primary mt-1">
                      Choose Your Desired Outcome
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-semibold text-immersive-text-secondary">
                    Select a tier to inspect structure
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Pivot into a New Career */}
                  <div 
                    onClick={() => setSelectedPlan("pivot")}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      selectedPlan === "pivot"
                        ? "bg-immersive-card border-[#FF4B3E] shadow-xl shadow-[#FF4B3E]/10 ring-2 ring-[#FF4B3E]/20"
                        : "bg-immersive-card/50 border-immersive-border hover:border-immersive-border/80"
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 uppercase tracking-wider">
                          MOST ACCESSIBLE
                        </span>
                        <div className="text-right">
                          <span className="text-2xl font-black text-[#FF4B3E]">$23</span>
                          <span className="text-[10px] font-mono text-immersive-text-secondary block">total track</span>
                        </div>
                      </div>
                      <h4 className="text-base font-extrabold text-immersive-text-primary">
                        Pivot into a New Career
                      </h4>
                      <p className="text-xs text-immersive-text-secondary mt-1.5 leading-relaxed font-medium">
                        For learners moving into a completely new tech field. Takes you from Beginner → Intermediate → Advanced.
                      </p>

                      <div className="mt-4 pt-3 border-t border-immersive-border/30 space-y-2 text-xs text-immersive-text-secondary">
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#FF4B3E] shrink-0" />
                          <span><strong>5 Courses:</strong> 2 Beg, 2 Int, 1 Adv</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#FF4B3E] shrink-0" />
                          <span>500 AI Credits & Practical Assistant</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#FF4B3E] shrink-0" />
                          <span>Career Transition Roadmap & Portfolio</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 pt-3">
                      <span className={`w-full py-2 rounded-xl text-xs font-bold text-center block ${
                        selectedPlan === "pivot" ? "bg-[#FF4B3E] text-white" : "bg-immersive-bg border border-immersive-border text-immersive-text-primary"
                      }`}>
                        {selectedPlan === "pivot" ? "Selected Plan ($23)" : "Choose $23"}
                      </span>
                    </div>
                  </div>

                  {/* Upskill in My Current Role */}
                  <div 
                    onClick={() => setSelectedPlan("upskill")}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      selectedPlan === "upskill"
                        ? "bg-immersive-card border-[#FF4B3E] shadow-xl shadow-[#FF4B3E]/10 ring-2 ring-[#FF4B3E]/20"
                        : "bg-immersive-card/50 border-immersive-border hover:border-immersive-border/80"
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 uppercase tracking-wider">
                          PROFESSIONAL
                        </span>
                        <div className="text-right">
                          <span className="text-2xl font-black text-[#FF4B3E]">$30</span>
                          <span className="text-[10px] font-mono text-immersive-text-secondary block">total track</span>
                        </div>
                      </div>
                      <h4 className="text-base font-extrabold text-immersive-text-primary">
                        Upskill in My Current Role
                      </h4>
                      <p className="text-xs text-immersive-text-secondary mt-1.5 leading-relaxed font-medium">
                        Deepen existing skills and expand capabilities for developers looking to get promoted and build higher impact.
                      </p>

                      <div className="mt-4 pt-3 border-t border-immersive-border/30 space-y-2 text-xs text-immersive-text-secondary">
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#FF4B3E] shrink-0" />
                          <span><strong>4 Courses:</strong> 2 Beg, 1 Int, 1 Adv</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#FF4B3E] shrink-0" />
                          <span>500 AI Credits & Role Assistant</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#FF4B3E] shrink-0" />
                          <span>Workplace Simulation & Case Studies</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 pt-3">
                      <span className={`w-full py-2 rounded-xl text-xs font-bold text-center block ${
                        selectedPlan === "upskill" ? "bg-[#FF4B3E] text-white" : "bg-immersive-bg border border-immersive-border text-immersive-text-primary"
                      }`}>
                        {selectedPlan === "upskill" ? "Selected Plan ($30)" : "Choose $30"}
                      </span>
                    </div>
                  </div>

                  {/* Lead & Specialize */}
                  <div 
                    onClick={() => setSelectedPlan("lead")}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      selectedPlan === "lead"
                        ? "bg-immersive-card border-[#FF4B3E] shadow-xl shadow-[#FF4B3E]/10 ring-2 ring-[#FF4B3E]/20"
                        : "bg-immersive-card/50 border-immersive-border hover:border-immersive-border/80"
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 uppercase tracking-wider inline-flex items-center gap-1">
                          <Crown className="w-3 h-3" />
                          <span>DEEPEST TRACK</span>
                        </span>
                        <div className="text-right">
                          <span className="text-2xl font-black text-[#FF4B3E]">$45</span>
                          <span className="text-[10px] font-mono text-immersive-text-secondary block">total track</span>
                        </div>
                      </div>
                      <h4 className="text-base font-extrabold text-immersive-text-primary">
                        Lead & Specialize
                      </h4>
                      <p className="text-xs text-immersive-text-secondary mt-1.5 leading-relaxed font-medium">
                        For experienced engineers aiming for Tech Lead, Staff, or Domain Specialist with architecture capstones.
                      </p>

                      <div className="mt-4 pt-3 border-t border-immersive-border/30 space-y-2 text-xs text-immersive-text-secondary">
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#FF4B3E] shrink-0" />
                          <span><strong>2 Deep Courses:</strong> 1 Int, 1 Adv</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#FF4B3E] shrink-0" />
                          <span>Capstone Project & Leadership Sims</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#FF4B3E] shrink-0" />
                          <span>Specialization Roadmap & Senior Prep</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 pt-3">
                      <span className={`w-full py-2 rounded-xl text-xs font-bold text-center block ${
                        selectedPlan === "lead" ? "bg-[#FF4B3E] text-white" : "bg-immersive-bg border border-immersive-border text-immersive-text-primary"
                      }`}>
                        {selectedPlan === "lead" ? "Selected Plan ($45)" : "Choose $45"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Stage 2: Build Level Progression */}
            {activeStageIndex === 1 && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-immersive-border/40 pb-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#FF4B3E] uppercase tracking-wider">
                      STEP 2 OF 4: PROGRESSION BUILDER
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-immersive-text-primary mt-1">
                      Strict Multi-Level Progression
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF4B3E] bg-[#FF4B3E]/10 px-3 py-1 rounded-xl">
                    <span>{selectedCourses.length} Courses Selected</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Beginner Tier */}
                  <div className="p-4 bg-immersive-card/60 rounded-2xl border border-immersive-border space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono font-extrabold text-emerald-500 uppercase">
                        BEGINNER LEVEL
                      </span>
                      <span className="text-[10px] font-mono text-immersive-text-secondary">Choose 2</span>
                    </div>
                    {[
                      "Foundations of CS & Algorithms",
                      "Modern Web Architecture & React",
                      "C++ Systems & Memory Safety"
                    ].map(title => {
                      const isSel = selectedCourses.includes(title);
                      return (
                        <div
                          key={title}
                          onClick={() => toggleCourse(title)}
                          className={`p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all flex items-center justify-between gap-2 ${
                            isSel
                              ? "bg-emerald-500/10 border-emerald-500/40 text-immersive-text-primary font-bold"
                              : "bg-immersive-bg border-immersive-border/60 text-immersive-text-secondary hover:text-immersive-text-primary"
                          }`}
                        >
                          <span className="truncate">{title}</span>
                          <span className={`w-4 h-4 rounded-md flex items-center justify-center text-[10px] shrink-0 ${
                            isSel ? "bg-emerald-500 text-white" : "border border-immersive-border"
                          }`}>
                            {isSel && <Check className="w-3 h-3" />}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Intermediate Tier */}
                  <div className="p-4 bg-immersive-card/60 rounded-2xl border border-immersive-border space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono font-extrabold text-blue-500 uppercase">
                        INTERMEDIATE LEVEL
                      </span>
                      <span className="text-[10px] font-mono text-immersive-text-secondary">Choose 1 or 2</span>
                    </div>
                    {[
                      "Database Systems & Query Tuning",
                      "RESTful & gRPC API Engineering",
                      "Cloud Infrastructure & Docker"
                    ].map(title => {
                      const isSel = selectedCourses.includes(title);
                      return (
                        <div
                          key={title}
                          onClick={() => toggleCourse(title)}
                          className={`p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all flex items-center justify-between gap-2 ${
                            isSel
                              ? "bg-blue-500/10 border-blue-500/40 text-immersive-text-primary font-bold"
                              : "bg-immersive-bg border-immersive-border/60 text-immersive-text-secondary hover:text-immersive-text-primary"
                          }`}
                        >
                          <span className="truncate">{title}</span>
                          <span className={`w-4 h-4 rounded-md flex items-center justify-center text-[10px] shrink-0 ${
                            isSel ? "bg-blue-500 text-white" : "border border-immersive-border"
                          }`}>
                            {isSel && <Check className="w-3 h-3" />}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Advanced Tier */}
                  <div className="p-4 bg-immersive-card/60 rounded-2xl border border-immersive-border space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono font-extrabold text-purple-400 uppercase">
                        ADVANCED LEVEL
                      </span>
                      <span className="text-[10px] font-mono text-immersive-text-secondary">Choose 1</span>
                    </div>
                    {[
                      "Distributed Systems & Concurrency",
                      "LLM Systems & Production AI"
                    ].map(title => {
                      const isSel = selectedCourses.includes(title);
                      return (
                        <div
                          key={title}
                          onClick={() => toggleCourse(title)}
                          className={`p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all flex items-center justify-between gap-2 ${
                            isSel
                              ? "bg-purple-500/10 border-purple-500/40 text-immersive-text-primary font-bold"
                              : "bg-immersive-bg border-immersive-border/60 text-immersive-text-secondary hover:text-immersive-text-primary"
                          }`}
                        >
                          <span className="truncate">{title}</span>
                          <span className={`w-4 h-4 rounded-md flex items-center justify-center text-[10px] shrink-0 ${
                            isSel ? "bg-purple-500 text-white" : "border border-immersive-border"
                          }`}>
                            {isSel && <Check className="w-3 h-3" />}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Stage 3: Practical Assistant & Labs */}
            {activeStageIndex === 2 && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-immersive-border/40 pb-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#FF4B3E] uppercase tracking-wider">
                      STEP 3 OF 4: PRACTICAL ASSISTANT & TERMINAL
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-immersive-text-primary mt-1">
                      Hands-on Simulated Workplace Tasks
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-semibold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-xl">
                    ● Real-Time Test Runner
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs font-mono">
                  {/* Simulated Code Editor */}
                  <div className="bg-[#0b0f19] border border-white/10 rounded-2xl p-4 text-left font-mono">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                      <span className="text-slate-400 text-[11px]">BufferPool.cpp</span>
                      <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded">PASSED 12/12</span>
                    </div>
                    <pre className="text-[11px] leading-relaxed text-slate-300 overflow-x-auto">
{`// Milestone 03: Page Replacer Implementation
void BufferPool::flushPage(page_id_t pid) {
  std::scoped_lock lock(mutex_);
  auto frame = page_table_[pid];
  disk_manager_->writePage(pid, frame->data());
  frame->is_dirty_ = false;
  replacer_->recordAccess(frame->id());
}`}
                    </pre>
                  </div>

                  {/* Practical Assistant Feed */}
                  <div className="bg-immersive-card rounded-2xl p-4 border border-immersive-border space-y-3 text-left">
                    <div className="flex items-center gap-2 border-b border-immersive-border/30 pb-2">
                      <Terminal className="w-4 h-4 text-[#FF4B3E]" />
                      <span className="text-xs font-bold text-immersive-text-primary">
                        Practical Assistant Telemetry
                      </span>
                    </div>
                    <p className="text-xs text-immersive-text-secondary font-sans leading-relaxed">
                      "Great job applying <code>std::scoped_lock</code>! Your implementation prevents deadlocks and successfully guarantees memory safety across 8 concurrent worker threads."
                    </p>
                    <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-between">
                      <span className="text-[11px] font-sans font-bold text-emerald-600 dark:text-emerald-400">
                        Workplace Deliverable Ready
                      </span>
                      <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                        +150 XP
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Stage 4: AI Mentorship & Portfolio */}
            {activeStageIndex === 3 && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-immersive-border/40 pb-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#FF4B3E] uppercase tracking-wider">
                      STEP 4 OF 4: PROACTIVE AI MENTORSHIP
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-immersive-text-primary mt-1">
                      500 AI Credits & Career Transition Support
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-xl">
                    <Coins className="w-3.5 h-3.5" />
                    <span>500 Credits Active</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="p-4 bg-immersive-card rounded-2xl border border-immersive-border text-left space-y-2">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    <h4 className="text-sm font-bold text-immersive-text-primary">Proactive Guidance</h4>
                    <p className="text-xs text-immersive-text-secondary leading-relaxed font-sans">
                      Cohortia's AI Mentor tracks your selected plan, explains difficult concepts, and proactively recommends your next code challenge.
                    </p>
                  </div>

                  <div className="p-4 bg-immersive-card rounded-2xl border border-immersive-border text-left space-y-2">
                    <Award className="w-5 h-5 text-[#FF4B3E]" />
                    <h4 className="text-sm font-bold text-immersive-text-primary">Portfolio Evidence</h4>
                    <p className="text-xs text-immersive-text-secondary leading-relaxed font-sans">
                      Every completed project builds verifiable proof: live demo URLs, clean GitHub PRs, and recruiter-ready case briefs.
                    </p>
                  </div>

                  <div className="p-4 bg-immersive-card rounded-2xl border border-immersive-border text-left space-y-2">
                    <Users className="w-5 h-5 text-blue-500" />
                    <h4 className="text-sm font-bold text-immersive-text-primary">Peer Community</h4>
                    <p className="text-xs text-immersive-text-secondary leading-relaxed font-sans">
                      Collaborate in active study rooms, share reviews, participate in sprint demo days, and accelerate with like-minded learners.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Controls Bar */}
            <div className="pt-6 border-t border-immersive-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              
              {/* Play / Pause & Scrubber */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2.5 rounded-xl bg-immersive-card border border-immersive-border hover:border-[#FF4B3E]/40 text-immersive-text-primary transition-all cursor-pointer shrink-0"
                  title={isPlaying ? "Pause tour" : "Play tour"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>

                <div 
                  onClick={handleSeek}
                  className="h-2 bg-immersive-card border border-immersive-border/60 rounded-full flex-1 sm:w-48 cursor-pointer relative overflow-hidden"
                >
                  <div 
                    className="h-full bg-[#FF4B3E] transition-all"
                    style={{ width: `${(currentTime / TOTAL_DURATION) * 100}%` }}
                  />
                </div>

                <span className="text-[11px] font-mono text-immersive-text-secondary shrink-0">
                  {Math.round(currentTime)}s / {TOTAL_DURATION}s
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  onClick={() => navigate("/experience")}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-immersive-text-primary bg-immersive-card border border-immersive-border hover:border-[#FF4B3E]/40 transition-all cursor-pointer text-center"
                >
                  View Full Roadmap
                </button>

                <button
                  onClick={() => {
                    if (onOpenWizard) onOpenWizard();
                    else navigate("/signup");
                  }}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#FF4B3E] hover:brightness-110 shadow-lg shadow-[#FF4B3E]/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Start for {selectedPlan === "pivot" ? "$23" : selectedPlan === "upskill" ? "$30" : "$45"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
