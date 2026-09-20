import { useState } from "react";
import { Award, Trophy, Zap, Sparkles, CheckCircle, Code, ShieldCheck, Compass, Info, X, Share2, Star } from "lucide-react";
import { UserPreferences } from "../../types";

interface BadgesComponentProps {
  userProfile: UserPreferences;
}

interface Badge {
  id: string;
  title: string;
  description: string;
  requirement: string;
  icon: any;
  color: string;
  glowColor: string;
  xpBonus: number;
  condition: (userProfile: UserPreferences) => boolean;
}

export default function BadgesComponent({ userProfile }: BadgesComponentProps) {
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null);
  const completedCount = userProfile.completedSteps?.length || 0;

  const badges: Badge[] = [
    {
      id: "onboarding",
      title: "First Spark",
      description: "Successfully initialized your professional workspace and calibrated your career matching profile.",
      requirement: "Complete 1 curriculum step",
      icon: Compass,
      color: "text-[#FF4B3E] bg-[#FF4B3E]/10 border-[#FF4B3E]/20",
      glowColor: "rgba(255, 75, 62, 0.25)",
      xpBonus: 100,
      condition: (profile) => (profile.completedSteps?.length || 0) >= 1
    },
    {
      id: "sprint_pioneer",
      title: "Sprint Pioneer",
      description: "Completed 3 full modules of real-world curriculum blocks and verified initial mechanics.",
      requirement: "Complete 3 curriculum steps",
      icon: Zap,
      color: "text-amber-400 bg-amber-400/10 border-amber-400/20",
      glowColor: "rgba(251, 191, 36, 0.25)",
      xpBonus: 250,
      condition: (profile) => (profile.completedSteps?.length || 0) >= 3
    },
    {
      id: "milestone_elite",
      title: "Milestone Scholar",
      description: "Advanced deep into core track modules, maintaining active study streaks and checklist completions.",
      requirement: "Complete 6 curriculum steps",
      icon: Award,
      color: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
      glowColor: "rgba(129, 140, 248, 0.25)",
      xpBonus: 500,
      condition: (profile) => (profile.completedSteps?.length || 0) >= 6
    },
    {
      id: "brief_dominator",
      title: "Brief Dominator",
      description: "Successfully advanced your learning board tracking and cleared professional-level checkpoints.",
      requirement: "Complete 10 curriculum steps",
      icon: Trophy,
      color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
      glowColor: "rgba(52, 211, 153, 0.25)",
      xpBonus: 750,
      condition: (profile) => (profile.completedSteps?.length || 0) >= 10
    },
    {
      id: "track_expert",
      title: `${profileTrackName(userProfile.track)} Cadet`,
      description: `Evolved skills in the specialized ${profileTrackName(userProfile.track)} pathway, solving industry briefs.`,
      requirement: "Choose and active a career track",
      icon: Code,
      color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
      glowColor: "rgba(34, 211, 238, 0.25)",
      xpBonus: 300,
      condition: (profile) => !!profile.track
    },
    {
      id: "senior_resolve",
      title: "Immersion Specialist",
      description: "Configured professional settings and proved competence under extreme focus states.",
      requirement: "Unlock intermediate or high experience profile status",
      icon: ShieldCheck,
      color: "text-purple-400 bg-purple-400/10 border-purple-400/20",
      glowColor: "rgba(192, 132, 252, 0.25)",
      xpBonus: 400,
      condition: (profile) => profile.experience === "intermediate" || profile.experience === "changer"
    }
  ];

  function profileTrackName(trackId: string) {
    switch (trackId) {
      case "frontend": return "Frontend";
      case "design": return "UI/UX";
      case "product": return "Product";
      case "analytics": return "Data";
      default: return "Cohortia";
    }
  }

  const unlockedBadges = badges.filter(b => b.condition(userProfile));
  const completionPercentage = Math.round((unlockedBadges.length / badges.length) * 100);

  return (
    <div className="bg-immersive-card border border-immersive-border/60 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl shadow-immersive-shadow relative text-left">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4B3E]/5 rounded-full blur-2xl pointer-events-none" />

      {/* Header and Progress Indicator */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-immersive-border/40 pb-5">
        <div>
          <h3 className="text-base font-extrabold text-immersive-text-primary font-sans flex items-center space-x-2">
            <Award className="w-5 h-5 text-[#FF4B3E]" />
            <span>Virtual Achievements & Badges</span>
          </h3>
          <p className="text-xs text-immersive-text-secondary font-medium mt-0.5">
            Earn credentials as you complete curriculum blocks, practice assignments, and team briefs.
          </p>
        </div>

        <div className="flex items-center space-x-4 shrink-0 bg-immersive-bg/40 border border-immersive-border/40 p-3 rounded-2xl">
          <div className="text-right">
            <span className="text-[10px] font-mono font-bold text-immersive-text-secondary uppercase">UNLOCKED STATUS</span>
            <p className="text-sm font-extrabold text-immersive-text-primary">
              {unlockedBadges.length} <span className="text-immersive-text-secondary text-xs">/ {badges.length} Badges</span>
            </p>
          </div>
          <div className="w-12 h-12 relative flex items-center justify-center bg-immersive-bg/80 border border-immersive-border rounded-xl">
            <span className="text-xs font-mono font-bold text-[#FF4B3E]">{completionPercentage}%</span>
          </div>
        </div>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {badges.map((badge) => {
          const isUnlocked = badge.condition(userProfile);
          const BadgeIcon = badge.icon;

          return (
            <button
              key={badge.id}
              onClick={() => isUnlocked && setSelectedBadge(badge)}
              className={`p-4 rounded-2xl border text-center transition-all duration-300 relative overflow-hidden group ${
                isUnlocked
                  ? "bg-immersive-bg/50 border-immersive-border/60 hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl shadow-immersive-shadow cursor-pointer"
                  : "bg-immersive-bg/10 border-immersive-border/10 opacity-40 cursor-not-allowed"
              }`}
              style={{
                boxShadow: isUnlocked ? `0 4px 20px -5px ${badge.glowColor}` : "none"
              }}
            >
              {/* Unlocked background decorative spark */}
              {isUnlocked && (
                <div 
                  className="absolute -top-10 -right-10 w-20 h-20 rounded-full blur-xl transition-opacity duration-300 group-hover:opacity-100 opacity-60"
                  style={{ backgroundColor: badge.glowColor }}
                />
              )}

              <div className="flex flex-col items-center space-y-3 relative z-10">
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-300 ${
                  isUnlocked 
                    ? `${badge.color} scale-100 group-hover:scale-110 shadow-lg shadow-immersive-shadow`
                    : "bg-immersive-card border-immersive-border/40 text-immersive-text-secondary/50"
                }`}>
                  <BadgeIcon className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <h4 className="text-xs font-extrabold text-immersive-text-primary truncate max-w-full">
                    {badge.title}
                  </h4>
                  <p className="text-[9px] font-mono font-bold text-immersive-text-secondary/70">
                    {isUnlocked ? `+${badge.xpBonus} XP` : "LOCKED"}
                  </p>
                </div>

                {isUnlocked ? (
                  <div className="text-[9px] font-mono text-emerald-400 font-extrabold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    UNLOCKED
                  </div>
                ) : (
                  <div className="text-[9px] font-mono text-immersive-text-secondary/40 font-bold block bg-immersive-card/60 px-1.5 py-0.5 rounded border border-immersive-border/10 max-w-full truncate leading-none">
                    {badge.requirement}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Badge Modal Detail Popup */}
      {selectedBadge && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-immersive-bg/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-md bg-[#0c0c0e] border border-immersive-border rounded-3xl p-6 sm:p-8 shadow-2xl shadow-immersive-shadow overflow-hidden text-left"
            style={{ boxShadow: `0 0 40px -10px ${selectedBadge.glowColor}` }}
          >
            {/* Visual background accents */}
            <div 
              className="absolute -top-24 -left-24 w-48 h-48 rounded-full blur-3xl opacity-50"
              style={{ backgroundColor: selectedBadge.glowColor }}
            />
            
            <div className="absolute top-4 right-4">
              <button 
                onClick={() => setSelectedBadge(null)}
                className="p-1.5 rounded-lg bg-immersive-bg/60 border border-immersive-border hover:border-immersive-primary/20 text-immersive-text-secondary hover:text-immersive-text-primary transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 pt-4 relative z-10">
              <div className={`w-20 h-20 rounded-3xl border flex items-center justify-center ${selectedBadge.color} shadow-2xl shadow-immersive-shadow`}>
                {(() => {
                  const Icon = selectedBadge.icon;
                  return <Icon className="w-10 h-10" />;
                })()}
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono font-extrabold text-[#FF4B3E] tracking-widest uppercase">
                  OFFICIAL COHORTIA ACHIEVEMENT
                </span>
                <h3 className="text-2xl font-extrabold text-immersive-text-primary">
                  {selectedBadge.title}
                </h3>
                <div className="flex items-center justify-center space-x-1.5 text-xs text-amber-400 font-mono font-extrabold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>+{selectedBadge.xpBonus} XP Reward</span>
                </div>
              </div>

              <p className="text-sm text-immersive-text-secondary leading-relaxed font-medium">
                {selectedBadge.description}
              </p>

              {/* Requirement Checkbox Block */}
              <div className="w-full bg-immersive-bg border border-immersive-border/60 p-4 rounded-2xl flex items-center space-x-3 text-left">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-[9px] font-mono text-immersive-text-secondary/60 block font-bold">CRITERIA MET:</span>
                  <span className="text-xs font-bold text-immersive-text-primary">
                    {selectedBadge.requirement}
                  </span>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="w-full grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => {
                    alert(`Badge "${selectedBadge.title}" shared successfully to your student portfolio!`);
                    setSelectedBadge(null);
                  }}
                  className="py-2.5 px-4 rounded-xl text-xs font-bold text-immersive-bg bg-immersive-secondary hover:bg-white transition-all cursor-pointer flex items-center justify-center space-x-1.5"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share to LinkedIn</span>
                </button>
                <button
                  onClick={() => setSelectedBadge(null)}
                  className="py-2.5 px-4 rounded-xl text-xs font-bold text-immersive-text-primary bg-immersive-bg border border-immersive-border hover:border-white/10 transition-all cursor-pointer text-center"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
