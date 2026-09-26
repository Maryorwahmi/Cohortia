import { useState } from "react";
import { 
  ArrowRight, 
  Layers3, 
  ListChecks, 
  Sparkles, 
  Target, 
  Check, 
  CheckCircle2, 
  Coins, 
  Bot, 
  Users, 
  Crown, 
  ShieldCheck, 
  Briefcase, 
  TrendingUp, 
  Award, 
  Minus,
  HelpCircle,
  FileCode2,
  Terminal
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import ExperienceTrackSim from "./ExperienceTrack";
import { UserPreferences } from "../types";

interface ExperienceTrackPageProps {
  userProfile: UserPreferences | null;
  onOpenWizard?: () => void;
}

export default function ExperienceTrackPage({ userProfile, onOpenWizard }: ExperienceTrackPageProps) {
  const navigate = useNavigate();
  const [activePlanTab, setActivePlanTab] = useState<"pivot" | "upskill" | "lead">("pivot");

  const comparisonRows = [
    { feature: "Career Goal", pivot: "Change careers into tech", upskill: "Grow in current role", lead: "Lead & specialize" },
    { feature: "Learning Levels", pivot: "Beginner → Advanced", upskill: "Beginner → Advanced", lead: "Intermediate → Advanced" },
    { feature: "Total Courses", pivot: "5 courses", upskill: "4 courses", lead: "2 deep courses" },
    { feature: "Beginner Options", pivot: "4 → choose 2", upskill: "3 → choose 2", lead: "—" },
    { feature: "Intermediate Options", pivot: "3 → choose 2", upskill: "2 → choose 1", lead: "2 → choose 1" },
    { feature: "Advanced Options", pivot: "2 → choose 1", upskill: "2 → choose 1", lead: "2 → choose 1" },
    { feature: "AI Credits", pivot: "500 credits", upskill: "500 credits", lead: "500 credits" },
    { feature: "AI Mentor", pivot: "Included", upskill: "Included", lead: "Included (Advanced)" },
    { feature: "Practical Assistant", pivot: "Included", upskill: "Included", lead: "Included (Advanced)" },
    { feature: "Experience Track", pivot: "Included", upskill: "Included", lead: "Included (Advanced)" },
    { feature: "Community Mastermind", pivot: "Included", upskill: "Included", lead: "Included" },
    { feature: "Career Roadmap", pivot: "Included", upskill: "Included", lead: "Included" },
    { feature: "Skill Gap Analysis", pivot: "Included", upskill: "Included", lead: "Included" },
    { feature: "Portfolio Development", pivot: "Included", upskill: "Included", lead: "Included (Advanced)" },
    { feature: "Interview Preparation", pivot: "Included", upskill: "Included", lead: "Included (Senior)" },
    { feature: "Real-World Projects", pivot: "Included", upskill: "Included", lead: "Included" },
    { feature: "Capstone Project", pivot: "—", upskill: "—", lead: "Included (Production-grade)" },
    { feature: "Leadership Development", pivot: "—", upskill: "—", lead: "Included" },
    { feature: "Specialization Roadmap", pivot: "—", upskill: "—", lead: "Included" },
    { feature: "Senior-Level Readiness", pivot: "—", upskill: "—", lead: "Included" },
  ];

  return (
    <main className="pt-24 pb-16 min-h-screen bg-immersive-bg text-left">
      
      {/* 1. Header / Hero */}
      <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <span className="text-xs font-mono font-bold tracking-widest text-[#FF4B3E] uppercase bg-[#FF4B3E]/10 border border-[#FF4B3E]/20 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-4">
          <Award className="w-3.5 h-3.5" />
          <span>CAREER TRACK PRICING & EXPERIENCE</span>
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-immersive-text-primary tracking-tight leading-tight">
          Cohortia — Career Track <span className="text-[#FF4B3E]">Pricing & Experience</span>
        </h1>
        <p className="mt-5 text-base sm:text-lg text-immersive-text-secondary max-w-3xl mx-auto leading-relaxed font-medium">
          Cohortia offers three career-development paths designed around the learner’s current career situation and desired outcome. Each Career Track provides a structured learning journey, practical experience, AI-powered assistance, mentorship, community engagement, and career progression support.
        </p>
      </header>

      {/* 2. The Three Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Pivot into a New Career — $23 */}
          <div className="bg-immersive-card border border-immersive-border/60 hover:border-[#FF4B3E]/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-immersive-shadow transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-extrabold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-500 uppercase tracking-wider">
                  CAREER TRANSITION
                </span>
                <div className="text-right">
                  <span className="text-3xl font-black text-[#FF4B3E]">$23</span>
                  <span className="text-[10px] font-mono text-immersive-text-secondary block">total track</span>
                </div>
              </div>

              <h2 className="text-2xl font-extrabold text-immersive-text-primary mb-2">
                1. Pivot into a New Career
              </h2>
              <p className="text-xs text-immersive-text-secondary leading-relaxed mb-6 font-medium">
                For learners who want to move into a completely new tech field. Takes you from <strong>Beginner → Intermediate → Advanced</strong> to build knowledge, practical skills, and proof.
              </p>

              {/* Course Structure */}
              <div className="bg-immersive-bg rounded-2xl p-4 border border-immersive-border/60 mb-6 space-y-2 text-xs">
                <div className="text-[10px] font-mono font-bold text-[#FF4B3E] uppercase tracking-wider">
                  COURSE STRUCTURE (5 COURSES)
                </div>
                <div className="flex justify-between items-center text-immersive-text-secondary">
                  <span>Beginner Level:</span>
                  <strong className="text-immersive-text-primary">4 options → Choose 2</strong>
                </div>
                <div className="flex justify-between items-center text-immersive-text-secondary">
                  <span>Intermediate Level:</span>
                  <strong className="text-immersive-text-primary">3 options → Choose 2</strong>
                </div>
                <div className="flex justify-between items-center text-immersive-text-secondary">
                  <span>Advanced Level:</span>
                  <strong className="text-immersive-text-primary">2 options → Choose 1</strong>
                </div>
              </div>

              {/* Key Features */}
              <ul className="space-y-2.5 text-xs text-immersive-text-secondary font-medium">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                  <span><strong>500 AI Credits:</strong> Mentorship, explanations & practice</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                  <span><strong>Practical Assistant:</strong> Hands-on projects & exercises</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                  <span><strong>Experience Track:</strong> Learn → Practice → Build → Demonstrate</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                  <span><strong>Transition Support:</strong> Roadmap, portfolio & interview prep</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-immersive-border/30">
              <a 
                href="#experience-simulator"
                className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-[#FF4B3E] hover:brightness-110 shadow-lg shadow-[#FF4B3E]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Select Pivot Track ($23)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Upskill in My Current Role — $30 */}
          <div className="bg-immersive-card border border-[#FF4B3E]/40 hover:border-[#FF4B3E] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-immersive-shadow transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF4B3E]/5 rounded-full blur-xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-extrabold px-2.5 py-1 rounded bg-blue-500/10 text-blue-500 uppercase tracking-wider">
                  ROLE ACCELERATION
                </span>
                <div className="text-right">
                  <span className="text-3xl font-black text-[#FF4B3E]">$30</span>
                  <span className="text-[10px] font-mono text-immersive-text-secondary block">total track</span>
                </div>
              </div>

              <h2 className="text-2xl font-extrabold text-immersive-text-primary mb-2">
                2. Upskill in My Current Role
              </h2>
              <p className="text-xs text-immersive-text-secondary leading-relaxed mb-6 font-medium">
                For professionals already working in tech who want to sharpen existing skills, solve challenging workplace problems, and accelerate toward promotion.
              </p>

              {/* Course Structure */}
              <div className="bg-immersive-bg rounded-2xl p-4 border border-immersive-border/60 mb-6 space-y-2 text-xs">
                <div className="text-[10px] font-mono font-bold text-blue-500 uppercase tracking-wider">
                  COURSE STRUCTURE (4 COURSES)
                </div>
                <div className="flex justify-between items-center text-immersive-text-secondary">
                  <span>Beginner Level:</span>
                  <strong className="text-immersive-text-primary">3 options → Choose 2</strong>
                </div>
                <div className="flex justify-between items-center text-immersive-text-secondary">
                  <span>Intermediate Level:</span>
                  <strong className="text-immersive-text-primary">2 options → Choose 1</strong>
                </div>
                <div className="flex justify-between items-center text-immersive-text-secondary">
                  <span>Advanced Level:</span>
                  <strong className="text-immersive-text-primary">2 options → Choose 1</strong>
                </div>
              </div>

              {/* Key Features */}
              <ul className="space-y-2.5 text-xs text-immersive-text-secondary font-medium">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                  <span><strong>500 AI Credits:</strong> Professional problem-solving & reviews</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                  <span><strong>Practical Assistant:</strong> Applied workplace case studies</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                  <span><strong>Experience Track:</strong> Improve → Apply → Perform → Progress</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                  <span><strong>Growth Support:</strong> Skills-gap analysis & promotion readiness</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-immersive-border/30">
              <a 
                href="#experience-simulator"
                className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-[#FF4B3E] hover:brightness-110 shadow-lg shadow-[#FF4B3E]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Select Upskill Track ($30)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Lead & Specialize — $45 */}
          <div className="bg-immersive-card border border-purple-500/30 hover:border-purple-500 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-immersive-shadow transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-extrabold px-2.5 py-1 rounded bg-purple-500/10 text-purple-400 uppercase tracking-wider inline-flex items-center gap-1">
                  <Crown className="w-3 h-3" />
                  <span>DEEPEST TRACK</span>
                </span>
                <div className="text-right">
                  <span className="text-3xl font-black text-[#FF4B3E]">$45</span>
                  <span className="text-[10px] font-mono text-immersive-text-secondary block">total track</span>
                </div>
              </div>

              <h2 className="text-2xl font-extrabold text-immersive-text-primary mb-2">
                3. Lead & Specialize
              </h2>
              <p className="text-xs text-immersive-text-secondary leading-relaxed mb-6 font-medium">
                For experienced professionals aiming for advanced expertise, leadership capabilities, and specialization. Cohortia's deepest career-development track.
              </p>

              {/* Course Structure */}
              <div className="bg-immersive-bg rounded-2xl p-4 border border-immersive-border/60 mb-6 space-y-2 text-xs">
                <div className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-wider">
                  COURSE STRUCTURE (2 DEEP COURSES)
                </div>
                <div className="flex justify-between items-center text-immersive-text-secondary">
                  <span>Intermediate Level:</span>
                  <strong className="text-immersive-text-primary">2 options → Choose 1</strong>
                </div>
                <div className="flex justify-between items-center text-immersive-text-secondary">
                  <span>Advanced Level:</span>
                  <strong className="text-immersive-text-primary">2 options → Choose 1</strong>
                </div>
                <div className="flex justify-between items-center text-immersive-text-secondary">
                  <span>Specialization Depth:</span>
                  <strong className="text-purple-400">Deep Capstone & Leadership</strong>
                </div>
              </div>

              {/* Key Features */}
              <ul className="space-y-2.5 text-xs text-immersive-text-secondary font-medium">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>500 AI Credits:</strong> Strategic thinking & leadership scenarios</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Advanced Assistant:</strong> Complex projects & architecture specs</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Experience Track:</strong> Specialize → Solve → Lead → Demonstrate</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Leadership Readiness:</strong> Senior positioning & capstone defense</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-immersive-border/30">
              <a 
                href="#experience-simulator"
                className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-purple-600 hover:brightness-110 shadow-lg shadow-purple-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Select Lead Track ($45)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Comprehensive Feature Comparison Table ("What Changes Between the Plans?") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 sm:p-10 shadow-xl shadow-immersive-shadow">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono font-bold tracking-widest text-[#FF4B3E] uppercase block mb-2">
              | SIDE-BY-SIDE MATRIX
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-immersive-text-primary">
              What Changes Between the Plans?
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-immersive-text-secondary">
              The price reflects the depth of the learning journey, number of courses, practical experience, specialization, mentorship, and career-development support included.
            </p>
          </div>

          {/* Responsive Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-immersive-border/60">
                  <th className="py-4 px-4 font-mono font-bold text-immersive-text-secondary uppercase text-[11px]">
                    Feature
                  </th>
                  <th className="py-4 px-4 font-extrabold text-[#FF4B3E] bg-[#FF4B3E]/5 rounded-t-xl text-center">
                    Pivot — $23
                  </th>
                  <th className="py-4 px-4 font-extrabold text-blue-500 bg-blue-500/5 text-center">
                    Upskill — $30
                  </th>
                  <th className="py-4 px-4 font-extrabold text-purple-400 bg-purple-500/5 rounded-t-xl text-center">
                    Lead & Specialize — $45
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-immersive-border/30">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-immersive-bg/40 transition-colors">
                    <td className="py-3 px-4 font-bold text-immersive-text-primary">
                      {row.feature}
                    </td>
                    <td className="py-3 px-4 text-center bg-[#FF4B3E]/5 font-medium text-immersive-text-primary">
                      {row.pivot === "Included" ? (
                        <Check className="w-4 h-4 text-[#FF4B3E] mx-auto" />
                      ) : row.pivot === "—" ? (
                        <Minus className="w-4 h-4 text-immersive-text-secondary/40 mx-auto" />
                      ) : (
                        <span>{row.pivot}</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center bg-blue-500/5 font-medium text-immersive-text-primary">
                      {row.upskill === "Included" ? (
                        <Check className="w-4 h-4 text-blue-500 mx-auto" />
                      ) : row.upskill === "—" ? (
                        <Minus className="w-4 h-4 text-immersive-text-secondary/40 mx-auto" />
                      ) : (
                        <span>{row.upskill}</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center bg-purple-500/5 font-medium text-immersive-text-primary">
                      {row.lead === "Included" ? (
                        <Check className="w-4 h-4 text-purple-400 mx-auto" />
                      ) : row.lead === "—" ? (
                        <Minus className="w-4 h-4 text-immersive-text-secondary/40 mx-auto" />
                      ) : (
                        <span>{row.lead}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Experience Tracks & Course Selection Rules */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Experience Tracks Overview */}
          <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 sm:p-8 space-y-5 shadow-xl shadow-immersive-shadow">
            <span className="text-xs font-mono font-bold tracking-widest text-[#FF4B3E] uppercase block">
              | WHERE LEARNING MEETS DOING
            </span>
            <h3 className="text-2xl font-extrabold text-immersive-text-primary">
              The Experience Track
            </h3>
            <p className="text-xs sm:text-sm text-immersive-text-secondary leading-relaxed">
              Every Cohortia Career Track includes an <strong>Experience Track</strong> where learners move from <strong>learning → doing → demonstrating</strong>. The experience corresponds directly to your selected career track and level:
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="p-3.5 bg-immersive-bg rounded-2xl border border-immersive-border">
                <span className="font-bold text-[#FF4B3E] block mb-1">
                  Pivot into a New Career: Learn → Practice → Build → Demonstrate
                </span>
                <span className="text-immersive-text-secondary">
                  Beginner projects, guided practical exercises, real-world simulations, portfolio builds, and a final career-readiness project.
                </span>
              </div>

              <div className="p-3.5 bg-immersive-bg rounded-2xl border border-immersive-border">
                <span className="font-bold text-blue-500 block mb-1">
                  Upskill in My Current Role: Improve → Apply → Perform → Progress
                </span>
                <span className="text-immersive-text-secondary">
                  Workplace scenarios, professional case studies, role-specific challenges, performance improvement projects, and advanced portfolio polish.
                </span>
              </div>

              <div className="p-3.5 bg-immersive-bg rounded-2xl border border-immersive-border">
                <span className="font-bold text-purple-400 block mb-1">
                  Lead & Specialize: Specialize → Solve → Lead → Demonstrate Expertise
                </span>
                <span className="text-immersive-text-secondary">
                  Advanced case studies, strategic challenges, leadership simulations, complex projects, specialist challenges, and deep capstones.
                </span>
              </div>
            </div>
          </div>

          {/* Course Selection Rules & Core Experience */}
          <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 sm:p-8 space-y-5 shadow-xl shadow-immersive-shadow flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-emerald-500 uppercase block">
                | SELECTION INTEGRITY
              </span>
              <h3 className="text-2xl font-extrabold text-immersive-text-primary">
                Strict Course Selection Rules
              </h3>
              <p className="text-xs sm:text-sm text-immersive-text-secondary leading-relaxed mt-2">
                The course-selection system strictly respects the learner's selected career track and course level:
              </p>

              <div className="mt-4 space-y-2 text-xs font-mono text-immersive-text-secondary">
                <div className="p-2.5 bg-immersive-bg rounded-xl border border-immersive-border flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span><strong>Beginner selection:</strong> only contains Beginner courses.</span>
                </div>
                <div className="p-2.5 bg-immersive-bg rounded-xl border border-immersive-border flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-500 shrink-0" />
                  <span><strong>Intermediate selection:</strong> only contains Intermediate courses.</span>
                </div>
                <div className="p-2.5 bg-immersive-bg rounded-xl border border-immersive-border flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span><strong>Advanced selection:</strong> only contains Advanced courses.</span>
                </div>
              </div>
            </div>

            {/* Core Philosophy Quotes */}
            <div className="pt-4 border-t border-immersive-border/40 space-y-2">
              <span className="text-[10px] font-mono text-immersive-text-secondary uppercase tracking-widest block font-bold">
                COHORTIA'S MEANINGFUL PRICING DIFFERENCE
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] font-medium">
                <div className="p-2.5 rounded-xl bg-immersive-bg border border-immersive-border text-left">
                  <strong className="text-[#FF4B3E] block">$23 — Pivot:</strong>
                  <span className="text-immersive-text-secondary">"Help me enter a new career."</span>
                </div>
                <div className="p-2.5 rounded-xl bg-immersive-bg border border-immersive-border text-left">
                  <strong className="text-blue-500 block">$30 — Upskill:</strong>
                  <span className="text-immersive-text-secondary">"Help me become better in the career I'm in."</span>
                </div>
                <div className="p-2.5 rounded-xl bg-immersive-bg border border-immersive-border text-left">
                  <strong className="text-purple-400 block">$45 — Lead:</strong>
                  <span className="text-immersive-text-secondary">"Help me become an advanced specialist."</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Interactive Roadmap Sandbox */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-[#FF4B3E] uppercase">
            | ROADMAP SANDBOX
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-immersive-text-primary mt-2">
            Try It Out Interactive
          </h2>
          <p className="text-xs sm:text-sm text-immersive-text-secondary mt-1">
            Choose your goal, assemble your progression across Beginner, Intermediate, and Advanced tiers, and prepare your signup draft.
          </p>
        </div>

        <ExperienceTrackSim userProfile={userProfile} onOpenWizard={onOpenWizard} />
      </section>

      {/* 6. Bottom CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-immersive-border rounded-3xl p-6 sm:p-10 bg-immersive-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl shadow-immersive-shadow">
          <div>
            <span className="text-xs font-mono tracking-widest text-immersive-secondary font-bold uppercase">
              DESIGNED FOR REAL PROGRESSION
            </span>
            <h2 className="text-2xl font-extrabold text-immersive-text-primary mt-1">
              Less browsing. More becoming.
            </h2>
            <p className="text-xs sm:text-sm text-immersive-text-secondary mt-2 max-w-xl font-medium leading-relaxed">
              Every choice stays connected: Career Goal → Learning Path → Courses → AI Mentor → Practical Assistant → Experience Track → Community → Projects → Career Readiness.
            </p>
          </div>
          <button 
            onClick={() => navigate("/careers")} 
            className="inline-flex items-center gap-2 text-sm font-bold text-white bg-[#FF4B3E] hover:brightness-110 px-6 py-3.5 rounded-xl shadow-lg shadow-[#FF4B3E]/20 transition-all cursor-pointer shrink-0"
          >
            <span>Explore CS Careers</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </main>
  );
}
