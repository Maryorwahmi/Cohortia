import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowRight, Laptop, Play, Folder, FileText, CheckSquare, Award, Star, BarChart, Compass } from "lucide-react";
import { UserPreferences } from "../types";
import ExperienceTrackSim from "./ExperienceTrack";

interface ExperienceTrackPageProps {
  userProfile: UserPreferences | null;
  onOpenWizard?: () => void;
}

export default function ExperienceTrackPage({ userProfile, onOpenWizard }: ExperienceTrackPageProps) {
  const navigate = useNavigate();
  const [activeTaskTag, setActiveTaskTag] = useState("Landing Page");
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const taskTags = [
    { name: "Landing Page", desc: "Build standard responsive high-performance marketing landing pages using semantic tags and crisp styles." },
    { name: "Product Brief", desc: "Formulate strategic product requirement briefs specifying target objectives, user matrices, and scope boundaries." },
    { name: "Data Dashboard", desc: "Coordinate SVG/D3 telemetry nodes displaying analytical metrics and database query values real-time." },
    { name: "User Research Plan", desc: "Construct user journey flows, feedback loops, interview protocols, and evaluation dashboards." },
    { name: "Marketing Campaign", desc: "Schedule conversion tunnels, programmatic advertising metrics, keyword analytics, and search optimizations." },
    { name: "QA Test Plan", desc: "Execute integration scripts, edge case assessments, load diagnostics, and bug regressions." }
  ];

  const workflowSteps = [
    {
      num: "START",
      title: "Onboarding & Match",
      desc: "Tell us where you are — recent graduate, career switcher, or upskiller — and we match you to a track that fits your goals.",
      time: "Day 1",
      deliverable: "Personalized Career Profile & Match Assessment",
      tip: "Be honest about your current skill level. Our tracks adapt to meet you where you are and challenge you appropriately.",
      icon: Compass
    },
    {
      num: "BRIEF",
      title: "Receive Workspace Brief",
      desc: "Receive a structured project brief that mirrors actual workplace tasks in your chosen field, with clear deliverables and deadlines.",
      time: "Day 2-3",
      deliverable: "Product Spec & Initial Technical Roadmap draft",
      tip: "Treat this like a professional ticket. Read the constraints and specify target outcomes before writing any code or layouts.",
      icon: Folder
    },
    {
      num: "PLAN",
      title: "Plan Milestone Checkpoints",
      desc: "Break the work into clear milestones. Your Cohortia mentor checks in, helps you prioritize, and keeps you moving.",
      time: "Week 1",
      deliverable: "Interactive Kanban Board & Shared Sprint Goals",
      tip: "Planning is 50% of the battle. Setting early dates for your mock wireframes or code files reduces mid-sprint friction.",
      icon: CheckSquare
    },
    {
      num: "BUILD",
      title: "Build & Submit Work",
      desc: "Work through the task like a real intern or junior professional, then upload your output with notes for review.",
      time: "Week 2-4",
      deliverable: "Production Code Repository or Complete Figma Design System",
      tip: "Write clean, self-documenting code and detailed PR descriptions. Clear documentation counts as much as functional logic.",
      icon: Laptop
    },
    {
      num: "REVIEW",
      title: "Get Expert Code Review",
      desc: "Receive clear, actionable feedback on what works, what to improve, and how to align with industry standards.",
      time: "Week 5",
      deliverable: "Milestone Grading Rubric & Interactive feedback log",
      tip: "Feedback is the ultimate accelerator. Iterating on suggestions is how you transition from an amateur to a hireable engineer.",
      icon: FileText
    },
    {
      num: "SHIP",
      title: "Polish & Add to Portfolio",
      desc: "Refine your deliverable, package it as a case study, and turn it into shareable proof of real-world experience.",
      time: "Week 6",
      deliverable: "Verified Project Case Study & Recruiter-ready Portfolio URL",
      tip: "Frame this project as a case study, explaining your trade-offs, architecture choices, and sprint metrics to hiring managers.",
      icon: Award
    }
  ];

  return (
    <div className="pt-20 pb-8 min-h-screen bg-immersive-bg relative">
      {/* Background Graphic Accents */}
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-immersive-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-immersive-primary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Page Header */}
      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6 text-center mt-6 mb-10">
        <span className="text-xs font-mono font-bold tracking-widest text-[#FF4B3E] uppercase block mb-3">
          | THE INTERNSHIP SIMULATOR
        </span>
        <h1 className="text-4xl sm:text-6xl font-sans font-extrabold text-immersive-text-primary tracking-tight max-w-4xl mx-auto leading-tight">
          Immersive <span className="text-[#FF4B3E]">Internship</span> Track
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-immersive-text-secondary max-w-2xl mx-auto font-medium leading-relaxed">
          Work on structured, professional, work-like briefs that build your skills, your portfolio, and your credentials — guided by active mentors.
        </p>
      </div>

      {/* Split Split-Highlight Showcase section */}
      <section className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Beautiful workstation/workspace mock representation */}
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-immersive-primary to-immersive-secondary rounded-3xl blur-xl opacity-20 pointer-events-none" />
            <div className="relative bg-immersive-card border border-immersive-border rounded-2xl overflow-hidden shadow-2xl shadow-immersive-shadow">
              {/* Window Head */}
              <div className="bg-immersive-bg/90 px-4 py-3 border-b border-immersive-border flex items-center justify-between">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                <div className="text-[10px] font-mono text-immersive-text-secondary/70">
                  cohortia-internship-simulator.tsx
                </div>
                <span className="text-[9px] font-mono bg-immersive-secondary/15 text-immersive-secondary px-2 py-0.5 rounded">
                  LIVE WORKSPACE
                </span>
              </div>

              {/* Workplace Image Representation / Styled Interactive Visual */}
              <div className="p-1 relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                  alt="Experiential development workstation"
                  className="w-full h-80 object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating overlay status badge */}
                <div className="absolute bottom-6 left-6 bg-immersive-bg/95 border border-immersive-border p-3.5 rounded-xl text-left max-w-xs shadow-xl shadow-immersive-shadow animate-pulse">
                  <div className="flex items-center space-x-2">
                    <Laptop className="w-4 h-4 text-immersive-secondary shrink-0" />
                    <span className="text-xs font-bold text-immersive-text-primary">Active Milestone Intake</span>
                  </div>
                  <p className="text-[10px] text-immersive-text-secondary mt-1 font-medium">
                    "Build solar grid efficiency controller module" - CarbonHQ Q3 brief.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content details */}
          <div className="lg:col-span-6 text-left space-y-6">
            <span className="text-xs font-mono font-bold tracking-widest text-[#FF4B3E] uppercase block">
              | BUILT FOR FRESH GRADUATES & CAREER SWITCHERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-immersive-text-primary leading-tight">
              Real tasks. Real deadlines. Real growth.
            </h2>
            <p className="text-sm text-immersive-text-secondary leading-relaxed font-medium">
              Mentored by professionals throughout the process. You will not just complete exercises — you will ship deliverables, receive detailed feedback, and package your work into proof that hiring managers actually understand.
            </p>

            {/* Task templates grid */}
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-[#FF4B3E] uppercase tracking-wider block">
                CHOOSE PROJECT TEMPLATE BRIEF TO PREVIEW:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {taskTags.map((tag) => (
                  <button
                    key={tag.name}
                    onClick={() => setActiveTaskTag(tag.name)}
                    className={`py-2 px-3 rounded-lg text-[10px] font-bold text-center border transition-all cursor-pointer truncate ${
                      activeTaskTag === tag.name
                        ? "border-[#FF4B3E] bg-[#FF4B3E]/10 text-immersive-text-primary shadow-md shadow-immersive-shadow shadow-[#FF4B3E]/10"
                        : "border-immersive-border bg-immersive-card/50 text-immersive-text-secondary hover:border-immersive-secondary/30 hover:text-immersive-text-primary"
                    }`}
                  >
                    {tag.name}
                  </button>
                ))}
              </div>

              {/* Preview Box */}
              <div className="bg-immersive-card border border-immersive-border rounded-xl p-4 text-xs">
                <div className="flex items-center space-x-2 text-immersive-secondary font-bold font-mono mb-1.5 uppercase tracking-wide">
                  <span>Selected template:</span>
                  <span>{activeTaskTag}</span>
                </div>
                <p className="text-immersive-text-secondary font-medium leading-relaxed text-[11px]">
                  {taskTags.find(t => t.name === activeTaskTag)?.desc} Each template maps directly into a portfolio project you build and defend.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => navigate('/careers')}
                className="px-6 py-3.5 rounded-xl text-xs font-bold text-immersive-text-primary bg-immersive-primary hover:brightness-110 shadow-lg shadow-immersive-shadow shadow-immersive-primary/25 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center space-x-2 cursor-pointer"
              >
                <span>Start Building Experience</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Interactive Timeline / How It Works */}
      <section className="py-12 border-t border-b border-immersive-border/20 bg-immersive-card/25 relative">
        <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6 text-center">
          
          <div className="mb-14">
            <span className="text-xs font-mono font-bold tracking-widest text-[#FF4B3E] uppercase block mb-2">
              | SPRINT PROGRESSION
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-immersive-text-primary">
              How It <span className="text-[#FF4B3E]">Works</span>
            </h2>
            <p className="mt-3 text-sm text-immersive-text-secondary max-w-xl mx-auto font-medium">
              Click through our interactive stepper below to trace the timeline, deliverables, and mentor touchpoints.
            </p>
          </div>

          {/* Stepper Pipeline Navigation */}
          <div className="relative mb-12 max-w-5xl mx-auto px-4">
            
            {/* Desktop connecting progress bar */}
            <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-immersive-border/50 -translate-y-1/2 hidden md:block z-0" />
            <div 
              className="absolute top-1/2 left-4 h-0.5 bg-[#FF4B3E] -translate-y-1/2 hidden md:block z-0 transition-all duration-500" 
              style={{ width: `${(activeStepIndex / (workflowSteps.length - 1)) * 100}%` }}
            />

            {/* Steps list */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 relative z-10">
              {workflowSteps.map((step, index) => {
                const StepIcon = step.icon;
                const isActive = activeStepIndex === index;
                const isCompleted = index < activeStepIndex;

                return (
                  <button
                    key={index}
                    onClick={() => setActiveStepIndex(index)}
                    className={`p-4 rounded-2xl border text-left cursor-pointer transition-all duration-300 relative group ${
                      isActive
                        ? "border-[#FF4B3E] bg-[#FF4B3E]/10 shadow-[0_0_20px_rgba(255,75,62,0.15)]"
                        : isCompleted
                        ? "border-immersive-secondary/50 bg-immersive-card/80 text-immersive-text-primary"
                        : "border-immersive-border bg-immersive-bg hover:border-immersive-secondary/30"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                        isActive
                          ? "bg-[#FF4B3E] text-immersive-text-primary shadow-md shadow-immersive-shadow shadow-[#FF4B3E]/20"
                          : isCompleted
                          ? "bg-immersive-secondary/25 text-immersive-secondary"
                          : "bg-immersive-card border border-immersive-border text-immersive-text-secondary group-hover:text-immersive-text-primary"
                      }`}>
                        <StepIcon className="w-4 h-4" />
                      </div>
                      <span className="text-[9px] font-mono font-bold text-immersive-text-secondary/50 uppercase">
                        {step.num}
                      </span>
                    </div>

                    <h3 className={`text-[11px] font-extrabold leading-tight ${
                      isActive ? "text-immersive-text-primary" : "text-immersive-text-secondary group-hover:text-immersive-text-primary"
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-[9px] text-[#FF4B3E] font-mono mt-1 font-bold">
                      {step.time}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Stepper Detail View Panel */}
          <div className="max-w-5xl mx-auto bg-immersive-bg/90 border border-immersive-border rounded-2xl p-6 sm:p-8 text-left grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-2xl shadow-immersive-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-immersive-primary/5 rounded-full blur-2xl pointer-events-none" />
            
            {/* Step Left: Descriptive */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center space-x-2.5">
                <span className="text-xs font-mono font-extrabold text-immersive-primary bg-immersive-primary/15 border border-immersive-primary/25 px-2.5 py-1 rounded">
                  STAGE {activeStepIndex + 1} OF 6
                </span>
                <span className="text-xs font-mono font-semibold text-immersive-text-secondary">
                  Estimated duration: {workflowSteps[activeStepIndex].time}
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-immersive-text-primary">
                {workflowSteps[activeStepIndex].title}
              </h3>
              <p className="text-sm text-immersive-text-secondary leading-relaxed font-medium">
                {workflowSteps[activeStepIndex].desc}
              </p>

              {/* Sub-deliverable showcase */}
              <div className="bg-immersive-card border border-immersive-border/60 p-4 rounded-xl flex items-start space-x-3 mt-4">
                <Award className="w-5 h-5 text-immersive-secondary shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-mono text-immersive-text-secondary/60 block font-bold">STAGE SUB-DELIVERABLE:</span>
                  <span className="text-xs font-bold text-immersive-text-primary">
                    {workflowSteps[activeStepIndex].deliverable}
                  </span>
                </div>
              </div>
            </div>

            {/* Step Right: Coach Check-In / Mentor Advice */}
            <div className="md:col-span-5 bg-immersive-card/80 border border-immersive-border/70 p-5 rounded-2xl relative">
              <div className="flex items-center space-x-3 mb-3.5">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-immersive-primary flex items-center justify-center text-xs text-immersive-text-primary font-mono font-bold">
                    CO
                  </div>
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-immersive-card" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-immersive-text-primary">Cohortia Mentor</h4>
                  <p className="text-[10px] text-emerald-400 font-mono font-bold">ACTIVE SPRINT ADVISOR</p>
                </div>
              </div>
              
              <div className="space-y-1 relative">
                <span className="text-[9px] font-mono font-bold text-[#FF4B3E] block">SQUAD COACHING ADVICE:</span>
                <p className="text-xs text-immersive-text-secondary leading-relaxed font-medium italic">
                  "{workflowSteps[activeStepIndex].tip}"
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Embedded Cohortia Sprint Simulator */}
      <section className="py-8 relative">
        <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-[#FF4B3E] uppercase block mb-2">
              | SIMULATOR SANDBOX
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-extrabold text-immersive-text-primary">
              Try It Out <span className="text-[#FF4B3E]">Interactive</span>
            </h2>
            <p className="text-xs text-immersive-text-secondary mt-1">
              Test-drive how an experiential sprint unfolds with your team. Interact with stages, complete tasks, resolve issues, and verify match factors!
            </p>
          </div>
          
          <ExperienceTrackSim userProfile={userProfile} onOpenWizard={onOpenWizard} />
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6 py-8">
        <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left relative overflow-hidden shadow-2xl shadow-immersive-shadow">
          <div className="absolute top-0 left-0 w-64 h-64 bg-immersive-secondary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="space-y-2 max-w-xl z-10">
            <h3 className="text-2xl font-extrabold text-immersive-text-primary">Ready to build real experience?</h3>
            <p className="text-xs text-immersive-text-secondary font-medium">
              Join the Experience Track and turn learning into proof. Ship verified files and portfolio assets directly to global partner networks.
            </p>
          </div>
          <button
            onClick={onOpenWizard}
            className="mt-6 md:mt-0 px-6 py-3.5 rounded-xl text-sm font-bold text-immersive-text-primary bg-immersive-primary hover:brightness-110 shadow-lg shadow-immersive-shadow shadow-immersive-primary/20 hover:-translate-y-0.5 transition-all flex items-center space-x-2 shrink-0 cursor-pointer"
          >
            <span>Start an Internship Task</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
