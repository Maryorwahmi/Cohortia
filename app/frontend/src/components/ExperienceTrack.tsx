import { useState, useEffect } from "react";
import { Sliders, Sparkles, FolderOpen, Code, Terminal, MessageSquare, Play, RefreshCw, CheckCircle2, User, HelpCircle, ArrowRight, Award } from "lucide-react";
import { UserPreferences } from "../types";

interface ExperienceTrackProps {
  userProfile: UserPreferences | null;
  onOpenWizard: () => void;
}

interface TeamMember {
  name: string;
  avatar: string;
  role: string;
  status: "idle" | "coding" | "testing" | "merged";
}

const INITIAL_TEAM: TeamMember[] = [
  { name: "Babatunde", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&fit=crop&q=80", role: "Full Stack Eng.", status: "idle" },
  { name: "Chioma", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&fit=crop&q=80", role: "Product Designer", status: "idle" },
  { name: "Emeka K.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&fit=crop&q=80", role: "Technical Lead", status: "idle" }
];

export default function ExperienceTrack({ userProfile, onOpenWizard }: ExperienceTrackProps) {
  const [activeStage, setActiveStage] = useState<1 | 2 | 3 | 4>(1);
  const [sprintProgress, setSprintProgress] = useState(0);
  const [isSprintRunning, setIsSprintRunning] = useState(false);
  const [team, setTeam] = useState<TeamMember[]>(INITIAL_TEAM);
  const [ticketsDone, setTicketsDone] = useState(0);
  const [totalTickets] = useState(5);
  const [bugSquashed, setBugSquashed] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [gradingScore, setGradingScore] = useState(0);
  const [isGrading, setIsGrading] = useState(false);
  const [isMatched, setIsMatched] = useState(false);
  const [isMatching, setIsMatching] = useState(false);

  // Auto-fill personalized name if profile exists
  const candidateName = userProfile ? userProfile.name : "Chidi";
  const candidateTrack = userProfile ? userProfile.track : "frontend";

  // Simulate team coding during active sprint
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isSprintRunning) {
      interval = setInterval(() => {
        setSprintProgress((prev) => {
          if (prev >= 100) {
            setIsSprintRunning(false);
            setTicketsDone(totalTickets);
            setTeam(prevTeam => prevTeam.map(t => ({ ...t, status: "merged" })));
            return 100;
          }
          // Increment progress
          const increment = bugSquashed ? 12 : 6;
          const next = prev + increment;
          
          // Randomly change team member activities based on progress
          setTeam(prevTeam => prevTeam.map(member => {
            const roll = Math.random();
            let nextStatus: "idle" | "coding" | "testing" | "merged" = "coding";
            if (next >= 100) nextStatus = "merged";
            else if (roll > 0.7) nextStatus = "testing";
            else if (roll > 0.3) nextStatus = "coding";
            return { ...member, status: nextStatus };
          }));

          setTicketsDone(Math.min(totalTickets, Math.floor((next / 100) * totalTickets)));

          return next;
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isSprintRunning, bugSquashed, totalTickets]);

  const startSprintSim = () => {
    setSprintProgress(0);
    setTicketsDone(0);
    setBugSquashed(false);
    setIsSprintRunning(true);
    setTeam(INITIAL_TEAM.map(t => ({ ...t, status: "coding" })));
  };

  const handleBugSquash = () => {
    setBugSquashed(true);
    // speed up progress directly
    setSprintProgress(prev => Math.min(95, prev + 15));
  };

  const handleGradeSubmission = () => {
    setIsGrading(true);
    setGradingScore(0);
    setTimeout(() => {
      setIsGrading(false);
      setHasSubmitted(true);
      setGradingScore(9.8);
    }, 2000);
  };

  const triggerMatchRecruiter = () => {
    setIsMatching(true);
    setIsMatched(false);
    setTimeout(() => {
      setIsMatching(false);
      setIsMatched(true);
    }, 2500);
  };

  const resetAllSimulations = () => {
    setActiveStage(1);
    setSprintProgress(0);
    setIsSprintRunning(false);
    setTeam(INITIAL_TEAM);
    setTicketsDone(0);
    setBugSquashed(false);
    setHasSubmitted(false);
    setGradingScore(0);
    setIsMatched(false);
  };

  return (
    <section id="experience-simulator" className="py-12 bg-immersive-bg relative">
      {/* Dynamic graphic rings in background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-immersive-primary/5 rounded-full border border-immersive-primary/10 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-immersive-secondary/5 rounded-full border border-immersive-secondary/10 translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold text-[#FF4B3E] bg-[#FF4B3E]/10 border border-[#FF4B3E]/20 px-3 py-1 rounded-full uppercase tracking-widest inline-flex items-center space-x-1.5">
            <Sliders className="w-3.5 h-3.5" />
            <span>How It Works</span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-sans font-extrabold text-immersive-text-primary tracking-tight">
            Your Path To Progress
          </h2>
          <p className="text-lg text-immersive-text-secondary">
            A simple, connected journey from your first step to proof of growth.
          </p>
        </div>

        {/* Navigation Stages */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          <button
            onClick={() => setActiveStage(1)}
            className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
              activeStage === 1
                ? "border-immersive-secondary bg-immersive-card text-immersive-text-primary shadow-[0_0_15px_var(--immersive-shadow)]"
                : "border-immersive-border bg-immersive-card/50 hover:border-immersive-secondary/50 text-immersive-text-secondary"
            }`}
          >
            <div className="flex items-center space-x-2">
              <span className={`w-6 h-6 rounded-lg text-xs font-mono font-bold flex items-center justify-center ${
                activeStage === 1 ? "bg-immersive-secondary text-immersive-bg" : "bg-immersive-primary/20 text-immersive-text-secondary"
              }`}>1</span>
              <span className="text-xs font-mono tracking-widest uppercase font-bold">Brief Intake</span>
            </div>
            <p className="text-xs mt-2 truncate font-medium">CarbonHQ Core Request</p>
          </button>

          <button
            onClick={() => setActiveStage(2)}
            className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
              activeStage === 2
                ? "border-immersive-secondary bg-immersive-card text-immersive-text-primary shadow-[0_0_15px_var(--immersive-shadow)]"
                : "border-immersive-border bg-immersive-card/50 hover:border-immersive-secondary/50 text-immersive-text-secondary"
            }`}
          >
            <div className="flex items-center space-x-2">
              <span className={`w-6 h-6 rounded-lg text-xs font-mono font-bold flex items-center justify-center ${
                activeStage === 2 ? "bg-immersive-secondary text-immersive-bg" : "bg-immersive-primary/20 text-immersive-text-secondary"
              }`}>2</span>
              <span className="text-xs font-mono tracking-widest uppercase font-bold">Team Sprint</span>
            </div>
            <p className="text-xs mt-2 truncate font-medium">Live Collaborative Dev</p>
          </button>

          <button
            onClick={() => setActiveStage(3)}
            className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
              activeStage === 3
                ? "border-immersive-secondary bg-immersive-card text-immersive-text-primary shadow-[0_0_15px_var(--immersive-shadow)]"
                : "border-immersive-border bg-immersive-card/50 hover:border-immersive-secondary/50 text-immersive-text-secondary"
            }`}
          >
            <div className="flex items-center space-x-2">
              <span className={`w-6 h-6 rounded-lg text-xs font-mono font-bold flex items-center justify-center ${
                activeStage === 3 ? "bg-immersive-secondary text-immersive-bg" : "bg-immersive-primary/20 text-immersive-text-secondary"
              }`}>3</span>
              <span className="text-xs font-mono tracking-widest uppercase font-bold">Mentor Review</span>
            </div>
            <p className="text-xs mt-2 truncate font-medium">Automated Project Grading</p>
          </button>

          <button
            onClick={() => setActiveStage(4)}
            className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
              activeStage === 4
                ? "border-immersive-secondary bg-immersive-card text-immersive-text-primary shadow-[0_0_15px_var(--immersive-shadow)]"
                : "border-immersive-border bg-immersive-card/50 hover:border-immersive-secondary/50 text-immersive-text-secondary"
            }`}
          >
            <div className="flex items-center space-x-2">
              <span className={`w-6 h-6 rounded-lg text-xs font-mono font-bold flex items-center justify-center ${
                activeStage === 4 ? "bg-immersive-secondary text-immersive-bg" : "bg-immersive-primary/20 text-immersive-text-secondary"
              }`}>4</span>
              <span className="text-xs font-mono tracking-widest uppercase font-bold">Matching Placement</span>
            </div>
            <p className="text-xs mt-2 truncate font-medium">Recruiter Pairings</p>
          </button>
        </div>

        {/* Stage Interactive Panel */}
        <div className="max-w-4xl mx-auto bg-immersive-card border border-immersive-border rounded-3xl overflow-hidden shadow-[0_0_30px_var(--immersive-shadow)] relative">
          
          {/* Top simulated window bar */}
          <div className="bg-immersive-bg/50 px-5 py-3.5 border-b border-immersive-border flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-immersive-primary" />
              <div className="w-3 h-3 rounded-full bg-immersive-accent" />
              <div className="w-3 h-3 rounded-full bg-immersive-secondary" />
              <span className="text-xs font-mono text-immersive-text-secondary/75 pl-2">
                cohortia-sandbox://stage-{activeStage}
              </span>
            </div>
            <button
              onClick={resetAllSimulations}
              className="text-[11px] font-mono font-bold text-immersive-text-secondary hover:text-immersive-text-primary flex items-center space-x-1 cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset Sim</span>
            </button>
          </div>

          <div className="p-6 sm:p-10">

            {/* STAGE 1 CONTENT: Brief Intake */}
            {activeStage === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left items-center">
                <div className="md:col-span-7 space-y-5">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs bg-immersive-secondary/15 text-immersive-secondary border border-immersive-secondary/20 px-2 py-0.5 rounded font-mono font-bold">
                      CarbonHQ CLIENT BRIEF
                    </span>
                    <span className="text-xs text-immersive-text-secondary/70 font-mono">Q3 Deliverable</span>
                  </div>
                  
                  <h3 className="text-2xl font-extrabold text-immersive-text-primary tracking-tight">
                    "Build a dynamic solar grid telemetry widget."
                  </h3>
                  
                  <p className="text-sm text-immersive-text-secondary leading-relaxed">
                    CarbonHQ is updating their industrial dashboard. In this sprint, your team is tasked with designing and coding a client-side telemetry component that displays solar arrays efficiency in real-time.
                  </p>

                  <div className="space-y-2.5">
                    <span className="text-xs font-mono font-bold text-immersive-text-secondary uppercase tracking-wider block">Brief Specifications:</span>
                    <ul className="text-xs text-immersive-text-secondary space-y-1.5 list-disc pl-4 font-medium">
                      <li>Render a fully interactive 3D SVG solar map mapping active grid cells.</li>
                      <li>Incorporate filter states based on panel age and output load.</li>
                      <li>Handle high-frequency data spikes cleanly without dropping frame rates.</li>
                    </ul>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setActiveStage(2)}
                      className="flex items-center space-x-2 px-6 py-3 rounded-xl font-bold text-white bg-immersive-primary hover:brightness-110 shadow-[0_0_15px_rgba(17,17,17,0.18)] transition cursor-pointer"
                    >
                      <span>Accept Brief & Start Sprint</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="md:col-span-5 bg-immersive-card border border-immersive-border rounded-2xl p-5 font-mono text-left relative overflow-hidden shadow-[0_0_15px_var(--immersive-shadow)]">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-immersive-secondary/5 rounded-full blur-xl" />
                  <FolderOpen className="w-8 h-8 text-immersive-secondary mb-4" />
                  <div className="space-y-3">
                    <div className="text-[11px] text-immersive-text-secondary">CLIENT METADATA</div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <div className="text-immersive-text-secondary">Contact Person:</div>
                        <div className="text-immersive-text-primary font-bold">Babajide Adebayo</div>
                      </div>
                      <div>
                        <div className="text-immersive-text-secondary">Est. Worth:</div>
                        <div className="text-immersive-secondary font-bold">$12,500/Sprint</div>
                      </div>
                    </div>
                    <div className="border-t border-immersive-primary/10 pt-3">
                      <div className="text-[11px] text-immersive-text-secondary">RECOMMENDED TECH</div>
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        <span className="text-[10px] bg-immersive-bg border border-immersive-border px-2 py-0.5 rounded text-immersive-text-primary">React SVG</span>
                        <span className="text-[10px] bg-immersive-bg border border-immersive-border px-2 py-0.5 rounded text-immersive-text-primary">D3.js scale</span>
                        <span className="text-[10px] bg-immersive-bg border border-immersive-border px-2 py-0.5 rounded text-immersive-text-primary">Tailwind v4</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STAGE 2 CONTENT: SPRINT INTERACTION */}
            {activeStage === 2 && (
              <div className="space-y-6 text-left">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs bg-immersive-primary/20 text-immersive-secondary border border-immersive-primary/30 px-2 py-0.5 rounded font-mono font-bold">
                        ACTIVE COHORT WORKSPACE
                      </span>
                      <span className="text-xs text-immersive-text-secondary/70 font-mono">Team Lead: Abiodun K.</span>
                    </div>
                    <h4 className="text-xl font-bold text-immersive-text-primary">Sprint #1: Coding Phase</h4>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={startSprintSim}
                      disabled={isSprintRunning}
                      className="px-4.5 py-2.5 rounded-xl font-bold text-immersive-text-primary text-xs bg-immersive-primary hover:brightness-110 disabled:opacity-50 flex items-center space-x-1.5 shadow-[0_0_15px_rgba(62,0,255,0.2)] transition cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-white" />
                      <span>{sprintProgress > 0 && sprintProgress < 100 ? "Running..." : "Launch Sprint"}</span>
                    </button>
                    
                    {sprintProgress > 0 && (
                      <button
                        onClick={startSprintSim}
                        className="p-2.5 border border-immersive-primary/25 hover:bg-immersive-primary/10 rounded-xl transition text-immersive-text-secondary hover:text-immersive-text-primary cursor-pointer"
                      >
                        <RefreshCw className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Simulated Team Avatar row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {team.map((member, i) => (
                    <div key={i} className="bg-immersive-bg/80 border border-immersive-border rounded-xl p-3 flex items-center space-x-3">
                      <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full border border-immersive-border object-cover" />
                      <div className="text-left min-w-0">
                        <div className="text-xs font-bold text-immersive-text-primary truncate">{member.name}</div>
                        <div className="text-[10px] text-immersive-text-secondary font-mono truncate">{member.role}</div>
                      </div>
                      <div className="ml-auto pl-2 flex-shrink-0">
                        {member.status === "coding" && (
                          <span className="inline-flex w-2.5 h-2.5 bg-immersive-primary rounded-full animate-pulse" title="Coding" />
                        )}
                        {member.status === "testing" && (
                          <span className="inline-flex w-2.5 h-2.5 bg-immersive-accent rounded-full animate-bounce" title="Testing" />
                        )}
                        {member.status === "merged" && (
                          <span className="inline-flex w-2.5 h-2.5 bg-immersive-secondary rounded-full" title="Merged" />
                        )}
                        {member.status === "idle" && (
                          <span className="inline-flex w-2.5 h-2.5 bg-slate-700 rounded-full" title="Waiting" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Progress bar compilation */}
                <div className="bg-immersive-bg/85 border border-immersive-border rounded-2xl p-5 space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-mono text-immersive-text-secondary flex items-center space-x-1.5">
                      <Code className="w-4 h-4 text-immersive-secondary animate-spin" />
                      <span>SASS COMPILATION STATS</span>
                    </span>
                    <span className="font-mono font-bold text-immersive-secondary">{sprintProgress}% Complete</span>
                  </div>

                  <div className="w-full bg-immersive-bg h-3.5 rounded-full overflow-hidden border border-immersive-border p-0.5">
                    <div
                      className="h-full rounded-full bg-immersive-primary transition-all duration-300"
                      style={{ width: `${sprintProgress}%` }}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-2 text-xs font-mono">
                    <div className="text-immersive-text-secondary">
                      Tickets Completed: <span className="text-immersive-text-primary font-bold">{ticketsDone}/{totalTickets}</span>
                    </div>

                    {isSprintRunning && !bugSquashed && (
                      <button
                        onClick={handleBugSquash}
                        className="bg-immersive-primary/10 hover:bg-immersive-primary border border-immersive-border text-immersive-secondary hover:text-immersive-text-primary font-bold text-[10px] px-3 py-1.5 rounded-lg flex items-center space-x-1 transition cursor-pointer"
                      >
                        <Terminal className="w-3.5 h-3.5 animate-bounce" />
                        <span>Fix Reducer Warning (+15% boost)</span>
                      </button>
                    )}

                    {bugSquashed && (
                      <span className="text-immersive-secondary font-bold flex items-center space-x-1">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Warning Squashed Successfully!</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Conditional CTA for stage transition */}
                {sprintProgress >= 100 && (
                  <div className="pt-2 animate-bounce">
                    <button
                      onClick={() => setActiveStage(3)}
                      className="w-full text-center py-3.5 rounded-xl text-xs font-bold text-immersive-text-primary bg-immersive-primary hover:brightness-110 shadow-[0_0_15px_rgba(62,0,255,0.3)] transition cursor-pointer"
                    >
                      Step Completed! Proceed to Mentor Assessment & Grade Review
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* STAGE 3 CONTENT: MENTOR REVIEW */}
            {activeStage === 3 && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left items-center">
                <div className="md:col-span-7 space-y-5">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs bg-immersive-primary/20 text-immersive-secondary border border-immersive-primary/30 px-2 py-0.5 rounded font-mono font-bold">
                      COHORT EXPERT REVIEW
                    </span>
                    <span className="text-xs text-immersive-text-secondary/70 font-mono">Senior Engineer @ Stripe</span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-immersive-text-primary tracking-tight">
                    Submit your team deliverable
                  </h3>

                  <p className="text-sm text-immersive-text-secondary leading-relaxed">
                    Once a sprint concludes, your team files a Pull Request. A veteran industry mentor will conduct a thorough architectural code audit, assessing your component's styling fluidity, API integration structure, and React optimizations.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleGradeSubmission}
                      disabled={isGrading || hasSubmitted}
                      className="flex-1 flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-bold text-immersive-text-primary bg-immersive-primary hover:brightness-110 disabled:opacity-50 transition cursor-pointer"
                    >
                      {isGrading ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Auditing code...</span>
                        </>
                      ) : hasSubmitted ? (
                        <span>Submission Approved</span>
                      ) : (
                        <span>Request Mentor Code Audit</span>
                      )}
                    </button>

                    {hasSubmitted && (
                      <button
                        onClick={() => setActiveStage(4)}
                        className="flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-bold text-immersive-text-primary bg-immersive-primary hover:brightness-110 shadow-[0_0_15px_rgba(62,0,255,0.3)] transition cursor-pointer"
                      >
                        <span>Unlock Career Matching</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="md:col-span-5 bg-immersive-bg/80 border border-immersive-border rounded-2xl p-5 text-left relative overflow-hidden">
                  {isGrading && (
                    <div className="space-y-4 animate-pulse">
                      <div className="h-4 bg-immersive-text-secondary/15 rounded w-1/3" />
                      <div className="h-12 bg-immersive-text-secondary/15 rounded" />
                      <div className="space-y-2">
                        <div className="h-3 bg-immersive-text-secondary/15 rounded w-5/6" />
                        <div className="h-3 bg-immersive-text-secondary/15 rounded w-2/3" />
                      </div>
                    </div>
                  )}

                  {!isGrading && !hasSubmitted && (
                    <div className="text-center py-6 space-y-3">
                      <HelpCircle className="w-12 h-12 text-immersive-text-secondary/35 mx-auto animate-bounce" />
                      <div className="text-xs font-mono text-immersive-text-secondary">AWAITING CODE SUBMISSION</div>
                      <p className="text-xs text-immersive-text-secondary/80 max-w-xs mx-auto">
                        Click the button to request your assessment from our automated system.
                      </p>
                    </div>
                  )}

                  {hasSubmitted && (
                    <div className="space-y-4 font-mono text-xs animate-in fade-in duration-300">
                      <div className="flex justify-between items-center border-b border-immersive-border pb-2">
                        <span className="text-[10px] text-immersive-text-secondary font-bold uppercase">GRADE REPORT</span>
                        <span className="text-[10px] text-immersive-secondary font-bold uppercase">PASSED</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-immersive-text-secondary">Score Awarded:</div>
                          <div className="text-3xl font-bold text-immersive-text-primary mt-1">{gradingScore}/10</div>
                        </div>
                        <div className="w-12 h-12 bg-immersive-secondary/10 border border-immersive-secondary/20 text-immersive-secondary rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-6 h-6" />
                        </div>
                      </div>

                      <div className="border-t border-immersive-border pt-3 text-immersive-text-secondary text-[11px] leading-relaxed">
                        <span className="text-immersive-secondary font-bold">Reviewer Emeka K:</span> "Brilliant attention to detail. Squashing that reducer warning saved significant bundle cycles. Telemetry loading matches full-scale spec. Approved!"
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* STAGE 4 CONTENT: PLACEMENT MATCH */}
            {activeStage === 4 && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left items-center">
                <div className="md:col-span-7 space-y-5">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs bg-immersive-primary/20 text-immersive-secondary border border-immersive-primary/30 px-2 py-0.5 rounded font-mono font-bold">
                      COHORTIA CAREER PORTAL
                    </span>
                    <span className="text-xs text-immersive-text-secondary/70 font-mono">Employer Matching Engine</span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-immersive-text-primary tracking-tight">
                    Direct industry job placement
                  </h3>

                  <p className="text-sm text-immersive-text-secondary leading-relaxed">
                    By submitting verified client project results throughout your Cohortia tracks, our matchmaking systems automatically index your portfolio work, suggesting direct interview screenings with partner engineering teams.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={triggerMatchRecruiter}
                      disabled={isMatching || isMatched}
                      className="flex-1 flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-bold text-immersive-text-primary bg-immersive-primary hover:brightness-110 disabled:opacity-50 shadow-md shadow-immersive-shadow transition cursor-pointer"
                    >
                      {isMatching ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Matching skills profiles...</span>
                        </>
                      ) : isMatched ? (
                        <span>Match Complete</span>
                      ) : (
                        <span>Run Skill Matchmaker</span>
                      )}
                    </button>

                    <button
                      onClick={onOpenWizard}
                      className="flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-bold text-immersive-text-primary bg-immersive-primary shadow-[0_0_15px_rgba(62,0,255,0.3)] transition cursor-pointer"
                    >
                      <span>Lock In Assessment</span>
                      <Sparkles className="w-4 h-4 text-immersive-text-primary" />
                    </button>
                  </div>
                </div>

                <div className="md:col-span-5 bg-immersive-bg/80 border border-immersive-border rounded-2xl p-5 text-left relative overflow-hidden">
                  {isMatching && (
                    <div className="text-center py-8 space-y-3">
                      <RefreshCw className="w-10 h-10 text-immersive-secondary mx-auto animate-spin" />
                      <div className="text-xs font-mono text-immersive-text-secondary">ALIGNING SKILLS PIPELINES</div>
                      <p className="text-[11px] text-immersive-text-secondary/80 max-w-xs mx-auto">
                        Evaluating CarbonHQ project reviews and matching code structures to open requirements at Vanta and Stripe.
                      </p>
                    </div>
                  )}

                  {!isMatching && !isMatched && (
                    <div className="text-center py-6 space-y-3">
                      <User className="w-12 h-12 text-immersive-text-secondary/35 mx-auto" />
                      <div className="text-xs font-mono text-immersive-text-secondary">MATCH PORTAL LOCKED</div>
                      <p className="text-xs text-immersive-text-secondary/80 max-w-xs mx-auto">
                        Complete your project reviews and milestones first, then trigger the matchmaker simulation.
                      </p>
                    </div>
                  )}

                  {isMatched && (
                    <div className="space-y-4 font-mono text-xs animate-in fade-in duration-300">
                      <div className="flex justify-between items-center border-b border-immersive-border pb-2">
                        <span className="text-[10px] text-immersive-text-secondary font-bold uppercase">MATCH CONFIRMED</span>
                        <span className="text-[10px] text-immersive-secondary font-bold uppercase">VANTA CORP</span>
                      </div>

                      <div className="flex items-center space-x-3 bg-immersive-bg p-2.5 border border-immersive-border rounded-xl">
                        <div className="w-9 h-9 rounded-lg bg-immersive-primary/20 flex items-center justify-center text-immersive-secondary flex-shrink-0">
                          <Award className="w-5 h-5" />
                        </div>
                        <div className="text-left min-w-0">
                          <div className="text-immersive-text-secondary/60 text-[10px]">Candidate:</div>
                          <div className="text-immersive-text-primary font-bold truncate">{candidateName}</div>
                        </div>
                        <div className="ml-auto text-right">
                          <div className="text-immersive-text-secondary/60 text-[10px]">Fit Factor:</div>
                          <div className="text-immersive-secondary font-bold">98% Match</div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-immersive-text-secondary text-[11px] leading-relaxed">
                           <span className="text-immersive-secondary font-bold">Hiring Recruiter Yetunde A:</span> "Excellent work on telemetry layouts! We have an opening for a {candidateTrack === "frontend" ? "Junior Frontend Dev" : "Product Creator"} starting at $95,000/yr. Let's arrange a interview."
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
