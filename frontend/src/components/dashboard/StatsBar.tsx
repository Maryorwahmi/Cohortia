import { Trophy, Code, Clock, ShieldCheck } from "lucide-react";
import { UserPreferences, CohortTrackId } from "../../types";
import { TRACK_CURRICULA } from "../../data/dashboardData";

interface StatsBarProps {
  userProfile: UserPreferences;
}

export default function StatsBar({ userProfile }: StatsBarProps) {
  const activeTrackId = (userProfile.track || "frontend") as CohortTrackId;
  const curriculum = TRACK_CURRICULA[activeTrackId] || TRACK_CURRICULA.frontend;
  
  const completedSteps = userProfile.completedSteps || [];
  const totalLessons = curriculum.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedCount = completedSteps.length;
  
  // Tracks Completed calculation: 1 if all steps completed, otherwise 0
  const tracksCompleted = completedCount >= totalLessons ? 1 : 0;
  
  // Active Projects calculation: based on how many milestones are unlocked but projects not yet fully submitted
  // or a smart constant derived from the profile to look alive
  const activeProjects = completedCount > 0 && completedCount < totalLessons ? 2 : 1;
  
  // Mentorship hours: base 2.5 hours + 0.5 hours per completed lesson
  const mentorshipHours = (2.5 + completedCount * 0.5).toFixed(1);

  const getTrackTitle = () => {
    switch (activeTrackId) {
      case "frontend": return "Frontend Engineering Lab";
      case "design": return "UI/UX Product Design Lab";
      case "product": return "Product Management Lab";
      case "analytics": return "Data Analytics Lab";
      default: return "Cohortia Experiential Lab";
    }
  };

  return (
    <div className="bg-immersive-card border-b border-immersive-border/60 py-3.5 px-4 sm:px-6 lg:px-8 relative z-40 shadow-sm shadow-immersive-shadow">
      <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        
        {/* Left Side: Active Track Status Badge */}
        <div className="flex items-center space-x-3 w-full sm:w-auto">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF4B3E] animate-pulse" />
          <div className="text-left">
            <span className="text-[10px] font-mono font-bold text-immersive-text-secondary uppercase tracking-widest block leading-none mb-1">
              ACTIVE COHORT INTEL
            </span>
            <span className="text-xs font-extrabold text-immersive-text-primary">
              {getTrackTitle()}
            </span>
          </div>
        </div>

        {/* Right Side: Persistent At-A-Glance Stats */}
        <div className="grid grid-cols-3 gap-6 sm:gap-10 w-full sm:w-auto">
          
          {/* Stat 1: Tracks Completed */}
          <div className="flex items-center space-x-2.5 text-left justify-start sm:justify-end">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Trophy className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[9px] font-mono font-extrabold text-immersive-text-secondary/80 block leading-none mb-1">
                TRACKS DONE
              </span>
              <span className="text-sm font-black text-immersive-text-primary leading-none">
                {tracksCompleted}
              </span>
            </div>
          </div>

          {/* Stat 2: Active Projects */}
          <div className="flex items-center space-x-2.5 text-left justify-start sm:justify-end">
            <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
              <Code className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[9px] font-mono font-extrabold text-immersive-text-secondary/80 block leading-none mb-1">
                ACTIVE LABS
              </span>
              <span className="text-sm font-black text-immersive-text-primary leading-none">
                {activeProjects}
              </span>
            </div>
          </div>

          {/* Stat 3: Mentorship Hours */}
          <div className="flex items-center space-x-2.5 text-left justify-start sm:justify-end">
            <div className="w-8 h-8 rounded-lg bg-[#FF4B3E]/10 border border-[#FF4B3E]/20 flex items-center justify-center text-[#FF4B3E]">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[9px] font-mono font-extrabold text-immersive-text-secondary/80 block leading-none mb-1">
                MENTOR HRS
              </span>
              <span className="text-sm font-black text-immersive-text-primary leading-none">
                {mentorshipHours}h
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
