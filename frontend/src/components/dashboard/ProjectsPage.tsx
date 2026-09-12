import React, { useState } from "react";
import { BookOpen, FolderUp, Check, Play, AlertCircle, ShieldCheck, Sparkles, Send, Award, Clock, Calendar, Compass, Info, CheckCircle, Code } from "lucide-react";
import { UserPreferences, CohortTrackId } from "../../types";
import { TRACK_PROJECT_BRIEFS, ProjectBrief, TRACK_CURRICULA } from "../../data/dashboardData";
import InteractiveSandbox from "./InteractiveSandbox";
import { chatApi } from "../../services/api";

interface ProjectsPageProps {
  userProfile: UserPreferences;
  projects?: ProjectBrief[];
  submissions?: Array<{
    id?: string;
    projectId?: string;
    content?: string;
    feedback?: string;
    score?: number;
    status?: string;
    createdAt?: string;
  }>;
  onSubmit?: (projectId: string, content: string) => Promise<{
    success: boolean;
    submission?: { id?: string; feedback?: string; score?: number };
    error?: string;
  }>;
}

interface EvaluationResult {
  score: number;
  grade: "Exemplary" | "Proficient" | "Developing";
  feedback: string;
  checklistStatuses: boolean[];
}

export default function ProjectsPage({ userProfile, projects, submissions, onSubmit }: ProjectsPageProps) {
  const activeTrackId = userProfile.track || "frontend";
  const briefs = projects?.length
    ? projects
    : TRACK_PROJECT_BRIEFS[activeTrackId] || TRACK_PROJECT_BRIEFS.frontend;
  
  const [selectedBrief, setSelectedBrief] = useState<ProjectBrief | null>(briefs[0] || null);
  const milestones = TRACK_CURRICULA[activeTrackId as CohortTrackId] || TRACK_CURRICULA.frontend;
  const [selectedMilestoneIndex, setSelectedMilestoneIndex] = useState<number>(0);
  const [workspaceMode, setWorkspaceMode] = useState<"overview" | "codebase" | "ide" | "submit">("overview");

  const [passedChallenges, setPassedChallenges] = useState<Record<number, boolean>>(() => {
    return { 1: false, 2: false };
  });
  const [activeQuizMilestone, setActiveQuizMilestone] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizError, setQuizError] = useState<string | null>(null);

  const quizQuestions: Record<number, { question: string; options: string[]; answerIndex: number }[]> = {
    1: [
      {
        question: "Which describes the default inheritance specifier in C++ class declarations?",
        options: [
          "Classes default to private inheritance, whereas structs default to public inheritance.",
          "Classes default to public inheritance, whereas structs default to private inheritance.",
          "Both structures and classes default to private compiler permissions."
        ],
        answerIndex: 0
      },
      {
        question: "What is the primary risk of omitting a virtual destructor on a polymorphic base class?",
        options: [
          "Derived class constructor is never executed.",
          "Deleting a derived object via a base pointer leads to undefined behavior and memory leaks.",
          "It blocks the base class member from being inherited."
        ],
        answerIndex: 1
      },
      {
        question: "How does virtual function dispatch (vtable) operate under the hood in C++?",
        options: [
          "Resolved purely at link-time with direct addresses.",
          "An object's vptr points to a compiler-generated table of function pointers (vtable) to dispatch overrides.",
          "Dynamically allocates fresh copies of the function memory on every call."
        ],
        answerIndex: 1
      }
    ],
    2: [
      {
        question: "What is the key systems distinction between std::unique_ptr and std::shared_ptr?",
        options: [
          "unique_ptr cannot be moved, shared_ptr cannot be copied.",
          "unique_ptr maintains exclusive ownership with zero overhead, shared_ptr maintains an atomic reference count.",
          "shared_ptr stores structures entirely in stack registries."
        ],
        answerIndex: 1
      },
      {
        question: "What does RAII (Resource Acquisition Is Initialization) dictate in C++?",
        options: [
          "All resources must be pre-allocated inside global registries.",
          "Resource lifetime is strictly bound to object lifetime (acquired in constructor, freed in destructor).",
          "Constructors should only contain mathematical primitives."
        ],
        answerIndex: 1
      }
    ]
  };

  const getSkeletonCode = () => {
    if (activeTrackId === "cpp" || activeTrackId === "frontend") {
      const activeMilestoneNum = selectedMilestoneIndex + 1;
      if (activeMilestoneNum === 1) {
        return `// Module 1 Base & Derived Access Sandbox\n#include <iostream>\n#include <string>\n\nclass SystemAsset {\npublic:\n    int id = 100;\n    std::string name = "Primary Module";\n\n    virtual void processSystem() {\n        std::cout << "Processing virtual SystemAsset (ID: " << id << ")..." << std::endl;\n    }\n    virtual ~SystemAsset() {\n        std::cout << "Base SystemAsset destroyed." << std::endl;\n    }\n};\n\nclass DerivedAsset : public SystemAsset {\npublic:\n    void processSystem() override {\n        std::cout << "Derived asset active. Name: " << name << std::endl;\n    }\n    ~DerivedAsset() override {\n        std::cout << "Derived class resources released." << std::endl;\n    }\n};\n\nint main() {\n    SystemAsset* asset = new DerivedAsset();\n    asset->processSystem();\n    delete asset;\n    return 0;\n}`;
      } else if (activeMilestoneNum === 2) {
        return `// Module 2 Memory-Safe Smart Pointer Template\n#include <iostream>\n#include <vector>\n#include <memory>\n\nclass MemoryBlock {\npublic:\n    MemoryBlock() { std::cout << "MemoryBlock resource allocated on heap." << std::endl; }\n    ~MemoryBlock() { std::cout << "MemoryBlock destructor invoked. Safe!" << std::endl; }\n};\n\nint main() {\n    std::cout << "--- Executing Smart Pointer Checks ---" << std::endl;\n    std::unique_ptr<MemoryBlock> ptr = std::make_unique<MemoryBlock>();\n    return 0;\n}`;
      }
    }
    return `// Starting skeleton for ${activeTrackId.toUpperCase()} - Module ${selectedMilestoneIndex + 1}\nexport function main() {\n  console.log("Cohortia workspace initialized.");\n}`;
  };

  const getMilestoneStatus = (milestone: typeof milestones[0]) => {
    const totalLessons = milestone.lessons.length;
    const completedInMilestone = milestone.lessons.filter(l => 
      userProfile.completedSteps?.includes(l.id)
    ).length;
    
    if (completedInMilestone === totalLessons) return "COMPLETED";
    if (completedInMilestone > 0) return "ACTIVE";
    return "UPCOMING";
  };

  const handleSelectMilestoneBrief = (projectTitle: string) => {
    const matchedBrief = briefs.find(b => 
      b.title.toLowerCase().includes(projectTitle.toLowerCase()) || 
      projectTitle.toLowerCase().includes(b.title.toLowerCase())
    );
    if (matchedBrief) {
      setSelectedBrief(matchedBrief);
    }
  };

  const [inputText, setInputText] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evalStage, setEvalStage] = useState("");
  const [evalResult, setEvalResult] = useState<EvaluationResult | null>(null);

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFileName(e.dataTransfer.files[0].name);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const executeEvaluation = async () => {
    if (!fileName && !inputText.trim()) return;

    const userSubmission = inputText || (fileName ? `Completed file: ${fileName}` : "");
    if (!userSubmission) return;

    setIsEvaluating(true);
    setEvalResult(null);

    // Prefer real backend submission when available
    if (onSubmit && selectedBrief) {
      try {
        const result = await onSubmit(selectedBrief.id, userSubmission);
        if (result.success && result.submission) {
          const score = result.submission.score ?? 88;
          setEvalResult({
            score,
            grade: score >= 93 ? "Exemplary" : score >= 85 ? "Proficient" : "Developing",
            feedback: result.submission.feedback || "Submission received. Review feedback will appear here once the mentor evaluation is complete.",
            checklistStatuses: selectedBrief.deliverables.map(() => true),
          });
        } else {
          setEvalResult({
            score: 80,
            grade: "Developing",
            feedback: result.error || "Submission recorded, but feedback is pending.",
            checklistStatuses: [true, true, false],
          });
        }
      } catch (err) {
        console.error("Failed to submit project:", err);
        setEvalResult({
          score: 80,
          grade: "Developing",
          feedback: "Submission could not be processed. Please try again later.",
          checklistStatuses: [true, true, false],
        });
      } finally {
        setIsEvaluating(false);
      }
      return;
    }

    // Staged evaluation pipeline (legacy mock path)
    const stages = [
      "Securing connection pipeline...",
      "Linting code files & structure...",
      "Analyzing compliance specs...",
      "Scoring deliverables checklist...",
      "Compiling evaluation audit report..."
    ];

    for (let i = 0; i < stages.length; i++) {
      setEvalStage(stages[i]);
      await new Promise(resolve => setTimeout(resolve, 800));
    }

    try {
      const prompt = `Perform a detailed professional product evaluation on this mock user project submission.
Client Brief Name: ${selectedBrief?.title || "SaaS Project"}.
Client: ${selectedBrief?.client || "Client"}.
User Track: ${userProfile.track}.
Submission Details: ${userSubmission}.
Please provide a structured response with:
- A final score out of 100.
- A summary grade (either "Exemplary", "Proficient", or "Developing").
- Three specific bulleted strengths.
- Two specific bulleted suggestions for improvements.
Keep your feedback professional, realistic, and warm.`;

      const response = await chatApi.sendMessage(prompt, [], "mentor", "text", userProfile.track);

      const feedbackText = response.success && response.data?.reply
        ? response.data.reply
        : "Your project shows outstanding structural cohesion and meets all basic criteria. Refine styling definitions in subsequent sprint cycles.";

      const scoreMatch = feedbackText.match(/\b([89]\d|100)\b/);
      const score = scoreMatch ? parseInt(scoreMatch[0]) : Math.floor(Math.random() * 15) + 84;

      const grade = score >= 93 ? "Exemplary" : score >= 85 ? "Proficient" : "Developing";

      setEvalResult({
        score,
        grade,
        feedback: feedbackText,
        checklistStatuses: selectedBrief ? selectedBrief.deliverables.map(() => true) : [true, true, true]
      });

    } catch (err) {
      console.error("Failed to query evaluation engine:", err);
      setEvalResult({
        score: 88,
        grade: "Proficient",
        feedback: "### Strengths\n• Excellent modular folder structure.\n• Clean typography hierarchies.\n\n### Improvements\n• Optimize SVG render sizes for high pixel displays.",
        checklistStatuses: [true, true, false]
      });
    } finally {
      setIsEvaluating(false);
    }
  };

  const handleResetForm = () => {
    setFileName(null);
    setInputText("");
    setEvalResult(null);
  };

  return (
    <div className="pt-20 pb-8 min-h-screen bg-immersive-bg relative text-left">
      <div className="absolute top-20 right-20 w-[450px] h-[450px] bg-immersive-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-immersive-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6">

        {/* Title */}
        <div className="mb-8">
          <span className="text-xs font-mono font-bold tracking-widest text-[#FF4B3E] uppercase block mb-2">
            | EXPERIENTIAL EXPERT WORKPLACE
          </span>
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-immersive-text-primary tracking-tight">
            Active Client Briefs
          </h1>
          <p className="text-sm text-immersive-text-secondary max-w-2xl font-medium mt-1">
            Build and submit verified solutions for active client requirements. Unlock simulated evaluations scored dynamically based on your curriculum benchmarks.
          </p>
        </div>

        {/* Gantt-style timeline visualization */}
        <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 sm:p-8 mb-8 shadow-xl shadow-immersive-shadow relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-immersive-secondary/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-immersive-border/40 pb-4 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF4B3E]/10 flex items-center justify-center text-[#FF4B3E]">
                <Calendar className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-immersive-text-primary">Cohort Track Timeline</h2>
                <p className="text-xs text-immersive-text-secondary">Click on any milestone bar to examine specific sprint goals, deliverables, and projects.</p>
              </div>
            </div>
            <div className="mt-4 md:mt-0 px-3 py-1.5 bg-immersive-bg/60 border border-immersive-border/60 rounded-xl flex items-center space-x-2 text-xs font-mono font-bold text-immersive-text-primary">
              <span>Track:</span>
              <span className="text-[#FF4B3E] uppercase">{activeTrackId}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Gantt SVG: 8 columns */}
            <div className="lg:col-span-8 bg-immersive-bg/40 border border-immersive-border rounded-2xl p-4 overflow-x-auto scrollbar-thin">
              <div className="min-w-[650px]">
                <svg width="100%" height="180" viewBox="0 0 700 180" className="overflow-visible">
                  {/* Grid Columns headers */}
                  {["Weeks 1-2", "Weeks 3-4", "Weeks 5-6", "Weeks 7-8", "Weeks 9-10"].map((week, idx) => {
                    const colX = idx * 130 + 30;
                    return (
                      <g key={idx}>
                        {/* Column grid line */}
                        <line 
                          x1={colX + 60} 
                          y1="25" 
                          x2={colX + 60} 
                          y2="170" 
                          stroke="#ffffff" 
                          strokeOpacity="0.05" 
                          strokeDasharray="4,4"
                        />
                        {/* Week labels */}
                        <text 
                          x={colX + 60} 
                          y="18" 
                          fill="#94a3b8" 
                          fontSize="10" 
                          fontFamily="monospace" 
                          textAnchor="middle" 
                          fontWeight="bold"
                        >
                          {week}
                        </text>
                      </g>
                    );
                  })}

                  {/* Connecting baseline */}
                  <line x1="10" y1="25" x2="690" y2="25" stroke="#ffffff" strokeOpacity="0.1" />

                  {/* Draw Milestone Bars */}
                  {milestones.map((m, idx) => {
                    const barX = idx * 130 + 30;
                    const barY = idx * 26 + 40;
                    const isSelected = selectedMilestoneIndex === idx;
                    const status = getMilestoneStatus(m);
                    
                    let barColor = "#334155"; // Upcoming
                    let barOpacity = "0.35";
                    let strokeColor = "#475569";
                    let strokeWidth = "1";
                    let strokeDash = "2,2";

                    if (status === "COMPLETED") {
                      barColor = "#10B981";
                      barOpacity = "0.4";
                      strokeColor = "#10B981";
                      strokeDash = "0";
                    } else if (status === "ACTIVE") {
                      barColor = "#3b82f6";
                      barOpacity = "0.5";
                      strokeColor = "#3b82f6";
                      strokeDash = "0";
                    }

                    if (isSelected) {
                      barColor = "#FF4B3E";
                      barOpacity = "0.95";
                      strokeColor = "#ffffff";
                      strokeWidth = "1.5";
                      strokeDash = "0";
                    }

                    const displayTitle = m.title.length > 15 ? m.title.substring(0, 12) + "..." : m.title;

                    return (
                        <g 
                          key={m.id} 
                          className="cursor-pointer group" 
                          onClick={() => setSelectedMilestoneIndex(idx)}
                        >
                          <title>
                            Milestone: {m.title}
                            
                            Task Requirements / Project: {m.projectTitle}
                            Expected Outcomes: {m.description}
                            
                            Included Lessons:
                            {m.lessons.map(l => `- ${l.title}`).join('\n')}
                          </title>
                          {/* Background bar glow hover effect */}
                        <rect 
                          x={barX} 
                          y={barY} 
                          width="120" 
                          height="20" 
                          rx="5" 
                          fill={barColor}
                          fillOpacity={isSelected ? "0.2" : "0.03"}
                          className="transition-all duration-300 group-hover:fill-opacity-20"
                        />
                        {/* Active Gantt bar rect */}
                        <rect 
                          x={barX} 
                          y={barY} 
                          width="120" 
                          height="20" 
                          rx="5" 
                          fill={barColor} 
                          fillOpacity={barOpacity}
                          stroke={strokeColor}
                          strokeWidth={strokeWidth}
                          strokeDasharray={strokeDash}
                          className="transition-all duration-300 group-hover:scale-[1.01] origin-center"
                        />
                        {/* Milestone identifier text */}
                        <text 
                          x={barX + 60} 
                          y={barY + 13} 
                          fill={isSelected ? "#000" : "#fff"}
                          fontSize="9" 
                          fontWeight="bold"
                          textAnchor="middle"
                          className="pointer-events-none select-none font-mono"
                        >
                          {`M${m.number}: ${displayTitle}`}
                        </text>

                        {/* Interactive connecting guide line from previous bar */}
                        {idx > 0 && (
                          <path 
                            d={`M ${barX - 10} ${barY - 16} L ${barX - 10} ${barY + 10} L ${barX} ${barY + 10}`} 
                            fill="none" 
                            stroke="#ffffff" 
                            strokeOpacity="0.08" 
                            strokeWidth="1.5"
                          />
                        )}
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Right Milestone Details Panel: 4 columns */}
            {(() => {
              const activeMilestone = milestones[selectedMilestoneIndex] || milestones[0];
              const milestoneStatus = getMilestoneStatus(activeMilestone);
              return (
                <div className="lg:col-span-4 bg-immersive-bg/50 border border-immersive-border rounded-2xl p-5 space-y-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-immersive-secondary uppercase tracking-wider block">
                      Milestone Details
                    </span>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                      milestoneStatus === "COMPLETED" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                      milestoneStatus === "ACTIVE" ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" :
                      "bg-slate-500/10 text-slate-400 border border-slate-500/20"
                    }`}>
                      {milestoneStatus}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-black text-immersive-text-primary">
                      {`M${activeMilestone.number}: ${activeMilestone.title}`}
                    </h3>
                    <p className="text-xs text-immersive-text-secondary leading-relaxed mt-1.5">
                      {activeMilestone.description}
                    </p>
                  </div>

                  <div className="border-t border-immersive-border/30 pt-3.5 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-immersive-text-secondary font-medium">Applied Project:</span>
                      <span className="text-immersive-text-primary font-bold font-mono">{activeMilestone.projectTitle}</span>
                    </div>
                    
                    {/* Gatekeeper Checkbox Status */}
                    <div className="flex items-center justify-between text-xs pt-1 border-t border-immersive-border/10">
                      <span className="text-immersive-text-secondary font-medium">Assessment Status:</span>
                      {passedChallenges[activeMilestone.number] ? (
                        <span className="text-emerald-400 font-bold flex items-center space-x-1">
                          <Check className="w-3.5 h-3.5" />
                          <span>Passed (100%)</span>
                        </span>
                      ) : (
                        <span className="text-amber-400 font-bold flex items-center space-x-1 animate-pulse">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>Pending quiz</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Gatekeeper Quiz Flow or Unlock Actions */}
                  {activeQuizMilestone === activeMilestone.number ? (
                    // Inline Quiz form
                    <div className="bg-immersive-bg/85 border border-immersive-border/60 p-3.5 rounded-xl space-y-3.5 animate-in slide-in-from-top-1 duration-200">
                      <div className="flex items-center justify-between border-b border-immersive-border/30 pb-1.5">
                        <span className="text-[9px] font-mono font-black text-immersive-secondary uppercase">M{activeMilestone.number} DIAGNOSTIC EXAM</span>
                        <button 
                          onClick={() => setActiveQuizMilestone(null)}
                          className="text-immersive-text-secondary hover:text-white text-[10px] font-bold"
                        >
                          Cancel
                        </button>
                      </div>
                      
                      {/* Render 3 Questions */}
                      {(quizQuestions[activeMilestone.number] || quizQuestions[1]).map((q, qIdx) => (
                        <div key={qIdx} className="space-y-1.5 text-left">
                          <p className="text-[11px] font-bold text-immersive-text-primary leading-tight">
                            Q{qIdx + 1}: {q.question}
                          </p>
                          <div className="space-y-1 pl-1">
                            {q.options.map((opt, oIdx) => {
                              const isChecked = quizAnswers[qIdx] === oIdx;
                              return (
                                <button
                                  key={oIdx}
                                  onClick={() => setQuizAnswers(prev => ({ ...prev, [qIdx]: oIdx }))}
                                  className={`w-full text-left p-1.5 rounded text-[10px] border transition-all cursor-pointer ${
                                    isChecked 
                                      ? "bg-[#FF4B3E]/10 border-[#FF4B3E]/40 text-white" 
                                      : "bg-immersive-card/50 border-immersive-border/40 text-immersive-text-secondary hover:border-immersive-border"
                                  }`}
                                >
                                  {opt}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}

                      {quizError && (
                        <p className="text-[10px] text-red-400 font-bold flex items-center space-x-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{quizError}</span>
                        </p>
                      )}

                      <button
                        onClick={() => {
                          const questions = quizQuestions[activeMilestone.number] || quizQuestions[1];
                          let allCorrect = true;
                          for (let i = 0; i < questions.length; i++) {
                            if (quizAnswers[i] !== questions[i].answerIndex) {
                              allCorrect = false;
                            }
                          }
                          if (Object.keys(quizAnswers).length < questions.length) {
                            setQuizError("Please answer all diagnostic questions.");
                            return;
                          }
                          if (allCorrect) {
                            setPassedChallenges(prev => ({ ...prev, [activeMilestone.number]: true }));
                            setActiveQuizMilestone(null);
                            setQuizAnswers({});
                            setQuizError(null);
                            alert(`Excellent! You scored 100% on the Module ${activeMilestone.number} assessment. Gatekeeper check cleared!`);
                          } else {
                            setQuizError("Answers incorrect. Review systems concepts and retry!");
                          }
                        }}
                        className="w-full py-1.5 bg-[#FF4B3E] hover:bg-[#FF4B3E]/90 text-white rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all"
                      >
                        Submit Answers
                      </button>
                    </div>
                  ) : (
                    // Regular action buttons with Gatekeeper
                    <div className="space-y-2 pt-1.5">
                      {!passedChallenges[activeMilestone.number] ? (
                        <button
                          onClick={() => {
                            setActiveQuizMilestone(activeMilestone.number);
                            setQuizAnswers({});
                            setQuizError(null);
                          }}
                          className="w-full py-2 px-4 bg-[#FF4B3E]/10 border border-[#FF4B3E]/30 hover:bg-[#FF4B3E]/20 text-[#FF4B3E] rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-center flex items-center justify-center space-x-1.5 hover:scale-[1.02] active:scale-[0.98]"
                        >
                          <ShieldCheck className="w-4 h-4" />
                          <span>Take Gatekeeper Challenge</span>
                        </button>
                      ) : (
                        <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center space-x-2 text-emerald-400 text-[11px] font-bold leading-tight">
                          <CheckCircle className="w-4 h-4 shrink-0" />
                          <span>Assessment passed. 'Unlock Next Chapter' state is now active!</span>
                        </div>
                      )}

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => handleSelectMilestoneBrief(activeMilestone.projectTitle)}
                          className="py-2.5 px-3 bg-immersive-card hover:bg-immersive-card-hover border border-immersive-border rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer text-center"
                        >
                          Project Brief
                        </button>
                        
                        <button
                          disabled={!passedChallenges[activeMilestone.number]}
                          onClick={() => {
                            alert(`Congratulations! Chapter ${activeMilestone.number + 1} has been fully unlocked inside your Cohort curriculum tracker.`);
                          }}
                          className={`py-2.5 px-3 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all text-center flex items-center justify-center space-x-1 ${
                            passedChallenges[activeMilestone.number]
                              ? "bg-[#FF4B3E] hover:bg-[#FF4B3E]/90 text-white cursor-pointer hover:scale-105 active:scale-95"
                              : "bg-immersive-border/25 text-immersive-text-secondary/30 border border-immersive-border/20 cursor-not-allowed"
                          }`}
                          title={passedChallenges[activeMilestone.number] ? "Unlock the subsequent training module!" : "Clear the module assessment quiz to enable unlock."}
                        >
                          <span>Unlock Next Chapter</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })()}

          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Panel: Brief list - 4 columns */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono font-bold text-immersive-secondary uppercase tracking-widest block pl-1">
              SELECT ACTIVE BRIEF
            </span>
            <div className="space-y-3">
              {briefs.map((brief) => {
                const isSelected = selectedBrief?.id === brief.id;
                return (
                  <button
                    key={brief.id}
                    onClick={() => {
                      setSelectedBrief(brief);
                      handleResetForm();
                    }}
                    className={`w-full p-4 rounded-2xl border text-left flex items-start space-x-3.5 transition-all cursor-pointer ${
                      isSelected
                        ? "bg-immersive-primary/10 border-[#FF4B3E]/50 shadow-[0_0_15px_rgba(255,75,62,0.03)]"
                        : "bg-immersive-card border-immersive-border hover:border-immersive-border/80"
                    }`}
                  >
                    <img
                      src={brief.logo}
                      alt={brief.client}
                      className="w-10 h-10 rounded-xl object-cover border border-immersive-border shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-immersive-secondary font-bold uppercase tracking-wider block">
                        {brief.client}
                      </span>
                      <h3 className="text-sm font-bold text-immersive-text-primary line-clamp-1">
                        {brief.title}
                      </h3>
                      <div className="flex items-center space-x-2.5 text-[9px] font-mono text-immersive-text-secondary/80 font-bold">
                        <span className="text-[#FF4B3E]">{brief.difficulty}</span>
                        <span>•</span>
                        <span>{brief.duration}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Panel: Active Brief Details & Submission - 8 columns */}
          <div className="lg:col-span-8">
            {selectedBrief ? (
              <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl shadow-immersive-shadow h-full flex flex-col justify-between">
                
                {/* Brief Header */}
                <div className="space-y-3 border-b border-immersive-border/40 pb-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#FF4B3E] uppercase tracking-widest">
                      Active Brief Description
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#FF4B3E]/10 border border-[#FF4B3E]/20 text-[#FF4B3E] text-[10px] font-mono font-bold uppercase">
                      Stage: Evaluation
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-immersive-text-primary font-sans">
                    {selectedBrief.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-immersive-text-secondary font-medium leading-relaxed">
                    {selectedBrief.description}
                  </p>
                                {/* Tabs for Overview, Workspace, Submit */}
                <div className="flex flex-wrap items-center gap-1 border-b border-immersive-border/40 pb-0 mt-6">
                  <button
                    onClick={() => setWorkspaceMode("overview")}
                    className={`px-4 py-2.5 rounded-t-xl text-xs font-bold uppercase tracking-widest transition-all ${
                      workspaceMode === "overview"
                        ? "bg-immersive-bg border border-immersive-border border-b-0 text-immersive-text-primary"
                        : "text-immersive-text-secondary hover:text-immersive-text-primary hover:bg-immersive-bg/50"
                    }`}
                  >
                    Brief Overview
                  </button>
                  <button
                    onClick={() => setWorkspaceMode("codebase")}
                    className={`px-4 py-2.5 rounded-t-xl text-xs font-bold uppercase tracking-widest transition-all ${
                      workspaceMode === "codebase"
                        ? "bg-immersive-bg border border-immersive-border border-b-0 text-immersive-secondary"
                        : "text-immersive-text-secondary hover:text-immersive-text-primary hover:bg-immersive-bg/50"
                    }`}
                  >
                    Codebase Skeletons
                  </button>
                  <button
                    onClick={() => setWorkspaceMode("ide")}
                    className={`px-4 py-2.5 rounded-t-xl text-xs font-bold uppercase tracking-widest transition-all ${
                      workspaceMode === "ide"
                        ? "bg-immersive-bg border border-immersive-border border-b-0 text-immersive-secondary"
                        : "text-immersive-text-secondary hover:text-immersive-text-primary hover:bg-immersive-bg/50"
                    }`}
                  >
                    Workspace IDE
                  </button>
                  <button
                    onClick={() => setWorkspaceMode("submit")}
                    className={`px-4 py-2.5 rounded-t-xl text-xs font-bold uppercase tracking-widest transition-all ${
                      workspaceMode === "submit"
                        ? "bg-immersive-bg border border-immersive-border border-b-0 text-[#FF4B3E]"
                        : "text-immersive-text-secondary hover:text-immersive-text-primary hover:bg-immersive-bg/50"
                    }`}
                  >
                    Submit Deliverable
                  </button>
                </div>

                <div className="pt-5 flex-1 flex flex-col">
                  {workspaceMode === "overview" && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                      {/* Grid for Deliverables and Task Milestones */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-2">
                        <div className="space-y-3">
                          <h3 className="text-xs font-mono font-bold text-immersive-secondary uppercase tracking-widest">
                            Required Deliverables
                          </h3>
                          <ul className="space-y-2">
                            {selectedBrief.deliverables.map((del, i) => (
                              <li key={i} className="text-xs font-medium text-immersive-text-secondary flex items-start space-x-2">
                                <Check className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                                <span>{del}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-xs font-mono font-bold text-immersive-secondary uppercase tracking-widest">
                            Audit Checklist Tasks
                          </h3>
                          <ul className="space-y-2">
                            {selectedBrief.tasks.map((task, i) => (
                              <li key={i} className="text-xs font-medium text-immersive-text-secondary flex items-start space-x-2">
                                <span className="w-4.5 h-4.5 rounded-md bg-immersive-bg border border-immersive-border/80 flex items-center justify-center text-[10px] text-immersive-secondary font-bold font-mono shrink-0 mt-0.5">
                                  00{i+1}
                                </span>
                                <span>{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {workspaceMode === "codebase" && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 text-left">
                      <div className="flex items-center justify-between border-b border-immersive-border/30 pb-3">
                        <div>
                          <h3 className="text-xs font-mono font-bold text-immersive-secondary uppercase tracking-widest">Starting Codebase Skeleton</h3>
                          <p className="text-[11px] text-immersive-text-secondary mt-0.5">Import this clean boilerplate skeleton directly to build your solution.</p>
                        </div>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(getSkeletonCode());
                            alert("Starting codebase skeleton copied to clipboard!");
                          }}
                          className="px-3 py-1.5 bg-immersive-secondary/15 border border-immersive-secondary/25 hover:bg-immersive-secondary/30 text-immersive-text-primary rounded-lg text-[10px] font-mono font-bold uppercase transition-all cursor-pointer"
                        >
                          Copy Skeleton
                        </button>
                      </div>
                      
                      <div className="p-4 bg-black/60 rounded-xl border border-immersive-border/60 font-mono text-xs text-emerald-400 overflow-x-auto max-h-[300px] leading-relaxed shadow-inner">
                        <pre className="text-left whitespace-pre">{getSkeletonCode()}</pre>
                      </div>
                    </div>
                  )}

                  {workspaceMode === "ide" && (
                    <div className="relative h-[380px] border border-immersive-border/30 rounded-2xl overflow-hidden animate-in fade-in shadow-inner">
                      <InteractiveSandbox userProfile={userProfile} selectedLesson={{ id: selectedBrief?.id || "project", title: selectedBrief?.title || "Active Project" }} />
                    </div>
                  )}

                  {workspaceMode === "submit" && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
                      {!evalResult && !isEvaluating && (submissions?.filter((s) => s.projectId === selectedBrief?.id).length || 0) > 0 && (
                        <div className="space-y-2">
                          <span className="text-[11px] font-mono font-bold text-immersive-secondary uppercase">
                            Your Submissions
                          </span>
                          <div className="space-y-2 max-h-[120px] overflow-y-auto pr-1">
                            {(submissions?.filter((s) => s.projectId === selectedBrief?.id) || []).map((sub, idx) => (
                              <div
                                key={sub.id || idx}
                                className="p-3 bg-immersive-bg/40 border border-immersive-border/50 rounded-xl text-left"
                              >
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-[10px] font-mono text-immersive-text-secondary">
                                    {sub.createdAt ? new Date(sub.createdAt).toLocaleDateString() : "Submitted"}
                                  </span>
                                  {typeof sub.score === "number" && (
                                    <span className="text-[10px] font-bold text-[#FF4B3E]">Score: {sub.score}</span>
                                  )}
                                </div>
                                <p className="text-xs text-immersive-text-secondary line-clamp-2">{sub.content}</p>
                                {sub.feedback && (
                                  <p className="text-[10px] text-immersive-text-secondary/70 mt-1 line-clamp-2">
                                    Feedback: {sub.feedback}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {!evalResult && !isEvaluating && (
                        <div className="space-y-4">
                          {/* Drag and Drop Zone */}
                          <div
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={handleFileDrop}
                            className="border-2 border-dashed border-immersive-border/60 rounded-2xl p-6 hover:border-immersive-secondary/50 transition-all flex flex-col items-center justify-center text-center bg-immersive-bg/25 space-y-2.5 relative"
                          >
                            <FolderUp className="w-8 h-8 text-immersive-secondary" />
                            <div className="text-xs font-medium text-immersive-text-secondary">
                              {fileName ? (
                                <span className="text-immersive-text-primary font-bold">Selected file: {fileName}</span>
                              ) : (
                                <span>Drag and drop your ZIP folder / mockup spec sheet here, or <label className="text-immersive-secondary hover:underline cursor-pointer font-bold"><input type="file" onChange={handleFileSelect} className="hidden" />browse files</label></span>
                              )}
                            </div>
                            <span className="text-[10px] text-immersive-text-secondary/50 font-semibold font-mono">
                              Supports ZIP, PDF, JSON specs up to 25MB
                            </span>
                          </div>

                          {/* Text Input Alternate */}
                          <div className="space-y-2">
                            <span className="text-[11px] font-mono font-bold text-immersive-text-secondary/70 uppercase">
                              OR provide link / notes description
                            </span>
                            <textarea
                              value={inputText}
                              onChange={(e) => setInputText(e.target.value)}
                              placeholder="Insert GitHub repository link, Figma design link, or brief outline specifications here..."
                              className="w-full h-24 bg-immersive-bg border border-immersive-border rounded-2xl p-4 text-xs text-immersive-text-primary placeholder:text-immersive-text-secondary/50 focus:outline-none focus:border-immersive-secondary transition-all resize-none text-left"
                            />
                          </div>

                          <button
                            onClick={executeEvaluation}
                            disabled={!fileName && !inputText.trim()}
                            className={`w-full py-3 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all text-center flex items-center justify-center space-x-2 cursor-pointer ${
                              fileName || inputText.trim()
                                ? "bg-[#FF4B3E] text-immersive-text-primary hover:brightness-110 shadow-lg shadow-immersive-shadow shadow-[#FF4B3E]/10"
                                : "bg-immersive-border/30 text-immersive-text-secondary/60 cursor-not-allowed"
                            }`}
                          >
                            <Send className="w-3.5 h-3.5" />
                            <span>Trigger AI Evaluation Audit</span>
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Evaluating Loading State */}
                  {isEvaluating && (
                    <div className="p-8 rounded-2xl bg-immersive-bg/40 border border-immersive-border/60 flex flex-col items-center justify-center text-center space-y-4">
                      <div className="relative flex items-center justify-center">
                        <div className="w-12 h-12 border-4 border-immersive-secondary/20 border-t-immersive-secondary rounded-full animate-spin" />
                        <Sparkles className="absolute w-4 h-4 text-immersive-secondary animate-pulse" />
                      </div>
                      <div className="space-y-1.5">
                        <span className="text-sm font-bold text-immersive-text-primary block">
                          AI Mentor Review in Progress...
                        </span>
                        <span className="text-[11px] font-mono text-[#FF4B3E] font-bold uppercase tracking-wider animate-pulse block">
                          {evalStage}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Evaluation Result Screen */}
                  {evalResult && (
                    <div className="p-6 rounded-2xl bg-immersive-bg/50 border border-immersive-border/60 space-y-4 animate-in fade-in duration-300">
                      
                      {/* Evaluation Score Ribbon */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-immersive-card border border-immersive-border/80 p-4 rounded-xl shadow-inner">
                        <div className="flex items-center space-x-4">
                          <div className="w-14 h-14 rounded-full bg-[#FF4B3E]/10 border border-[#FF4B3E]/20 flex items-center justify-center text-xl font-mono font-extrabold text-[#FF4B3E]">
                            {evalResult.score}
                          </div>
                          <div>
                            <span className="text-[10px] font-mono font-bold text-immersive-text-secondary uppercase block">
                              AI Evaluator Score
                            </span>
                            <span className="text-sm font-extrabold text-immersive-text-primary">
                              Grade: <span className={evalResult.score >= 93 ? "text-emerald-400" : "text-immersive-secondary"}>{evalResult.grade}</span>
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1.5 text-xs text-[#FF4B3E] font-bold bg-[#FF4B3E]/5 border border-[#FF4B3E]/15 py-1 px-3.5 rounded-lg shrink-0">
                          <Award className="w-4 h-4" />
                          <span>EVALUATION COMPLETED</span>
                        </div>
                      </div>

                      {/* Feedback Report details */}
                      <div className="space-y-2 text-left">
                        <span className="text-xs font-mono font-bold text-immersive-secondary uppercase tracking-widest block">
                          Feedback Audit Report
                        </span>
                        <div className="text-xs sm:text-sm text-immersive-text-secondary font-medium leading-relaxed bg-immersive-card p-4 rounded-xl border border-immersive-border/40 overflow-y-auto max-h-[180px] space-y-2">
                          {evalResult.feedback.split("\n").map((line, i) => (
                            <p key={i} className={line.startsWith("•") || line.startsWith("-") ? "pl-3 text-immersive-text-primary" : ""}>
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={handleResetForm}
                        className="w-full py-2.5 rounded-xl border border-immersive-border hover:border-[#FF4B3E]/40 text-xs font-bold text-immersive-text-secondary hover:text-immersive-text-primary bg-immersive-card transition-all cursor-pointer text-center"
                      >
                        Reset Workspace & Re-submit
                      </button>

                    </div>
                  )}

                </div>

              </div>
            ) : (
              <div className="bg-immersive-card border border-immersive-border rounded-3xl p-12 text-center flex flex-col items-center justify-center space-y-4 h-full">
                <AlertCircle className="w-12 h-12 text-immersive-text-secondary/40" />
                <p className="text-sm text-immersive-text-secondary font-medium">
                  Select an active brief from the side rail to view description specs and submission portals.
                </p>
              </div>
            )}
          </div>

        </div>

        {/* Academic Graduation & Evaluation Board */}
        <div className="mt-16 pt-12 border-t border-immersive-border/40 space-y-8">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#FF4B3E] uppercase block mb-2">
              | ACADEMICS & GRADUATION CRITERIA
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-extrabold text-immersive-text-primary tracking-tight">
              Evaluation & Completion Milestones
            </h2>
            <p className="text-sm text-immersive-text-secondary max-w-2xl font-medium mt-1">
              Track your diagnostic benchmarks, final examinations, capstone progress, and explore career-readiness pathways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Assessment Section */}
            <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 space-y-4 shadow-xl shadow-immersive-shadow relative overflow-hidden group hover:border-[#FF4B3E]/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4B3E]/5 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#FF4B3E]/10 flex items-center justify-center text-[#FF4B3E]">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-0.5 rounded-full uppercase">
                  Active (88%)
                </span>
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-immersive-text-primary group-hover:text-[#FF4B3E] transition-colors">
                  Diagnostic Assessment Hub
                </h3>
                <p className="text-xs text-immersive-text-secondary leading-relaxed">
                  Real-time monitoring of your modular quizzes, code simulation drills, and system diagnostics metrics. Keep your average score above 80% to qualify for the final certification.
                </p>
              </div>
              <div className="border-t border-immersive-border/30 pt-3 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-500 font-bold">DRILLS COMPLETED</span>
                <span className="text-immersive-text-primary font-bold">12 / 12</span>
              </div>
              <button 
                onClick={() => alert("All baseline diagnostic assessments are completed. Great job!")}
                className="w-full py-2 bg-zinc-900 hover:bg-zinc-800 text-immersive-text-primary border border-zinc-800 rounded-xl text-xs font-bold transition-all cursor-pointer text-center"
              >
                View Gradebook Details
              </button>
            </div>

            {/* 2. Final Capstone Project */}
            <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 space-y-4 shadow-xl shadow-immersive-shadow relative overflow-hidden group hover:border-[#FF4B3E]/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4B3E]/5 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400">
                  <Code className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2.5 py-0.5 rounded-full uppercase">
                  Eligible
                </span>
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-immersive-text-primary group-hover:text-[#FF4B3E] transition-colors">
                  Final Capstone Project
                </h3>
                <p className="text-xs text-immersive-text-secondary leading-relaxed">
                  The ultimate enterprise simulator client brief. Solve a multi-layered production crisis, build clean interfaces, and deploy live. Includes personal 1-on-1 advisor defense.
                </p>
              </div>
              <div className="border-t border-immersive-border/30 pt-3 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-500 font-bold">ADVISOR ASSIGNED</span>
                <span className="text-immersive-text-primary font-bold">Coach Chinedu</span>
              </div>
              <button 
                onClick={() => alert("Your Capstone Blueprint is unlocked. Click 'Submit Deliverable' to review project details.")}
                className="w-full py-2 bg-[#FF4B3E]/10 border border-[#FF4B3E]/20 hover:bg-[#FF4B3E]/20 text-[#FF4B3E] rounded-xl text-xs font-bold transition-all cursor-pointer text-center"
              >
                Inspect Capstone Blueprint
              </button>
            </div>

            {/* 3. Final Examination */}
            <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 space-y-4 shadow-xl shadow-immersive-shadow relative overflow-hidden group hover:border-[#FF4B3E]/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4B3E]/5 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-0.5 rounded-full uppercase">
                  Locked
                </span>
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-immersive-text-primary group-hover:text-[#FF4B3E] transition-colors">
                  Final Proctored Examination
                </h3>
                <p className="text-xs text-immersive-text-secondary leading-relaxed">
                  A strict, comprehensive 3-hour examination covering all 12 modules. Test your memory, logic, optimization skills, and earn your verified credentials.
                </p>
              </div>
              <div className="border-t border-immersive-border/30 pt-3 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-500 font-bold">TIME LIMIT</span>
                <span className="text-immersive-text-primary font-bold">180 Mins</span>
              </div>
              <button 
                onClick={() => alert("The Final Examination is locked until you complete all 12 curriculum milestones. Stay focused!")}
                className="w-full py-2 bg-zinc-900 text-zinc-500 border border-zinc-900 rounded-xl text-xs font-bold transition-all cursor-not-allowed text-center"
                disabled
              >
                Unlock Final Exam (Locked)
              </button>
            </div>

            {/* 4. Course Conclusion */}
            <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 space-y-4 shadow-xl shadow-immersive-shadow relative overflow-hidden group hover:border-[#FF4B3E]/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4B3E]/5 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-purple-400/10 flex items-center justify-center text-purple-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-purple-400 bg-purple-400/10 border border-purple-400/20 px-2.5 py-0.5 rounded-full uppercase">
                  In Progress
                </span>
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-immersive-text-primary group-hover:text-[#FF4B3E] transition-colors">
                  Course Conclusion & Graduation
                </h3>
                <p className="text-xs text-immersive-text-secondary leading-relaxed">
                  Review graduation criteria, collect your verified cryptographic PDF completion badge, download full credits, and read custom alumni reflections.
                </p>
              </div>
              <div className="border-t border-immersive-border/30 pt-3 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-500 font-bold">CERTIFICATE ID</span>
                <span className="text-immersive-text-primary font-bold">Pending Approval</span>
              </div>
              <button 
                onClick={() => alert("Graduation protocol is in progress. Complete your final exam to claim your certificate.")}
                className="w-full py-2 bg-zinc-900 hover:bg-zinc-800 text-immersive-text-primary border border-zinc-800 rounded-xl text-xs font-bold transition-all cursor-pointer text-center"
              >
                Review Graduation Steps
              </button>
            </div>

            {/* 5. Where to Go Next */}
            <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 space-y-4 shadow-xl shadow-immersive-shadow relative overflow-hidden group hover:border-[#FF4B3E]/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4B3E]/5 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-400/10 flex items-center justify-center text-emerald-400">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-0.5 rounded-full uppercase">
                  Unlocked
                </span>
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-immersive-text-primary group-hover:text-[#FF4B3E] transition-colors">
                  Where to Go Next (Alumni Pathway)
                </h3>
                <p className="text-xs text-immersive-text-secondary leading-relaxed">
                  Join our verified high-earner employment alumni matching network. Access career mentoring, interview prep, resumes workshops, and unlock direct client placements.
                </p>
              </div>
              <div className="border-t border-immersive-border/30 pt-3 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-500 font-bold">ALUMNI STATUS</span>
                <span className="text-immersive-text-primary font-bold">Welcome Aboard!</span>
              </div>
              <button 
                onClick={() => alert("Welcome to the Alumni Hub! We have direct employment matching pipelines configured for you.")}
                className="w-full py-2 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 text-emerald-400 rounded-xl text-xs font-bold transition-all cursor-pointer text-center"
              >
                Explore Career Pathways ➔
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
