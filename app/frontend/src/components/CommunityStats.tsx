import { useEffect, useState } from "react";

export default function CommunityStats() {
  const [stats, setStats] = useState({
    learners: 10241,
    projects: 542,
    mentors: 312,
    confidence: 85
  });

  useEffect(() => {
    const statsInterval = setInterval(() => {
      setStats(prev => ({
        learners: prev.learners + Math.floor(Math.random() * 2),
        projects: prev.projects + (Math.random() > 0.8 ? 1 : 0),
        mentors: prev.mentors,
        confidence: prev.confidence
      }));
    }, 8000);

    return () => clearInterval(statsInterval);
  }, []);

  return (
    <div
      className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4 xl:grid-cols-2"
      role="region"
      aria-label="Cohortia community statistics"
    >
      <div className="bg-immersive-card border border-immersive-border p-3 rounded-2xl flex flex-col items-center justify-center text-center backdrop-blur-sm shadow-[0_0_10px_var(--immersive-shadow)]">
        <span className="text-xl font-mono font-bold text-immersive-text-primary bg-gradient-to-r from-immersive-text-primary to-immersive-secondary bg-clip-text text-transparent animate-pulse">
          +{stats.learners.toLocaleString()}
        </span>
        <span className="text-[10px] leading-tight text-immersive-text-secondary font-medium mt-1 uppercase tracking-wider">Active Learners</span>
      </div>

      <div className="bg-immersive-card border border-immersive-border p-3 rounded-2xl flex flex-col items-center justify-center text-center backdrop-blur-sm shadow-[0_0_10px_var(--immersive-shadow)]">
        <span className="text-xl font-mono font-bold text-immersive-text-primary bg-gradient-to-r from-immersive-text-primary to-immersive-accent bg-clip-text text-transparent">
          +{stats.projects}
        </span>
        <span className="text-[10px] leading-tight text-immersive-text-secondary font-medium mt-1 uppercase tracking-wider">Client Projects</span>
      </div>

      <div className="bg-immersive-card border border-immersive-border p-3 rounded-2xl flex flex-col items-center justify-center text-center backdrop-blur-sm shadow-[0_0_10px_var(--immersive-shadow)]">
        <span className="text-xl font-mono font-bold text-immersive-text-primary bg-gradient-to-r from-immersive-text-primary to-immersive-secondary bg-clip-text text-transparent">
          +{stats.mentors}
        </span>
        <span className="text-[10px] leading-tight text-immersive-text-secondary font-medium mt-1 uppercase tracking-wider">Expert Mentors</span>
      </div>

      <div className="bg-immersive-card border border-immersive-border p-3 rounded-2xl flex flex-col items-center justify-center text-center backdrop-blur-sm shadow-[0_0_10px_var(--immersive-shadow)]">
        <span className="text-xl font-mono font-bold text-immersive-secondary">
          %{stats.confidence}
        </span>
        <span className="text-[10px] leading-tight text-immersive-text-secondary font-medium mt-1 uppercase tracking-wider">Stronger Confidence</span>
      </div>
    </div>
  );
}
