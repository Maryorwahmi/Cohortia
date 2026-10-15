import { useState, useEffect } from "react";
import { Activity, Award, Briefcase, Zap, CheckCircle } from "lucide-react";
import { TickerEvent } from "../types";

const INITIAL_EVENTS: TickerEvent[] = [
  {
    id: "1",
    user: "Tunde Alao",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop&q=80",
    track: "Frontend Engineering",
    event: "deployed full-stack dashboard to production",
    time: "Just now",
    badge: "eco-sync"
  },
  {
    id: "2",
    user: "Elena Babalola",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&fit=crop&q=80",
    track: "UI/UX Product Design",
    event: "completed Figma style guide for CarbonHQ client project",
    time: "2m ago",
    badge: "carbon-hq"
  },
  {
    id: "3",
    user: "Emeka K.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&fit=crop&q=80",
    track: "Product Management",
    event: "approved Product Brief for sprint launch",
    time: "5m ago",
    badge: "brief-approved"
  },
  {
    id: "4",
    user: "Yetunde A.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&fit=crop&q=80",
    track: "Data Analytics",
    event: "paired directly with direct recruiter interview at Vanta!",
    time: "12m ago",
    badge: "interview-match"
  }
];

const NEW_POTENTIAL_EVENTS = [
  {
    user: "Elena Babalola",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&fit=crop&q=80",
    track: "UI/UX Product Design",
    event: "finalized user testing script for medical cohort lab",
    badge: "clinical-core"
  },
  {
    user: "Babatunde Alao",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&fit=crop&q=80",
    track: "Frontend Engineering",
    event: "integrated server-side Gemini API matching service",
    badge: "gemini-labs"
  },
  {
    user: "Yetunde Adebayo",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&fit=crop&q=80",
    track: "Product Management",
    event: "conducted user validation interview with 20 key testers",
    badge: "validation-pass"
  },
  {
    user: "Chinedu Nwachukwu",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&fit=crop&q=80",
    track: "Data Analytics",
    event: "optimized SQL query pipelines reducing load latency by 45%",
    badge: "sql-master"
  }
];

export default function LiveTicker({ inline = false }: { inline?: boolean }) {
  const isInline = !!inline;
  const [events, setEvents] = useState<TickerEvent[]>(INITIAL_EVENTS);
  const [stats, setStats] = useState({
    learners: 10241,
    projects: 542,
    mentors: 312,
    confidence: 85
  });

  // Cycle stats upwards slowly to simulate ongoing activity
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

  // Prepend fresh events randomly to make the page dynamic
  useEffect(() => {
    const eventInterval = setInterval(() => {
      const template = NEW_POTENTIAL_EVENTS[Math.floor(Math.random() * NEW_POTENTIAL_EVENTS.length)];
      const newEvent: TickerEvent = {
        id: Date.now().toString(),
        user: template.user,
        avatar: template.avatar,
        track: template.track,
        event: template.event,
        time: "Just now",
        badge: template.badge
      };

      setEvents(prev => {
        const updated = [newEvent, ...prev.slice(0, 3)];
        // Mark the previously "Just now" event as "1m ago"
        return updated.map((e, idx) => {
          if (idx === 0) return e;
          if (idx === 1) return { ...e, time: "1m ago" };
          if (idx === 2) return { ...e, time: "4m ago" };
          return { ...e, time: "10m ago" };
        });
      });
    }, 12000);

    return () => clearInterval(eventInterval);
  }, []);

  return (
    <div className={isInline ? "flex flex-col gap-3 w-full" : "flex w-full min-w-0 flex-col gap-5"} role="region" aria-label="Cohortia community activity">
      {/* Live Metrics Counts */}
      <div className={isInline ? "flex flex-col gap-3" : "grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4 xl:grid-cols-2"}>
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

      {/* Real-Time Platform Activity Stream */}
      <div className="flex min-w-0 flex-col space-y-3">
        <div className="flex items-center space-x-2 px-1">
          <div className="w-2.5 h-2.5 bg-immersive-secondary rounded-full animate-ping flex-shrink-0" />
          <div className="w-2.5 h-2.5 bg-immersive-secondary rounded-full flex-shrink-0" />
          <span className="text-[10px] font-mono font-bold text-immersive-secondary uppercase tracking-widest flex items-center space-x-1.5">
            <span>COHORTIA telemetry FEED</span>
            <Activity className="w-3.5 h-3.5" />
          </span>
        </div>

        <div className="flex flex-col space-y-2 max-h-[220px] overflow-y-auto overscroll-contain pr-1 relative">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex min-w-0 items-center justify-between gap-2 bg-immersive-card border border-immersive-border hover:border-immersive-secondary/40 rounded-xl p-2 transition-all duration-300 animate-in fade-in slide-in-from-top-3 duration-500 shadow-[0_0_8px_var(--immersive-shadow)]"
            >
              <div className="flex min-w-0 items-center space-x-2">
                <img
                  src={event.avatar}
                  alt={event.user}
                  className="w-7 h-7 rounded-full border border-immersive-border object-cover flex-shrink-0"
                />
                <div className="text-left min-w-0">
                  <p className="text-[11px] leading-snug font-medium text-immersive-text-secondary line-clamp-2">
                    <span className="font-bold text-immersive-text-primary">{event.user}</span>{" "}
                    <span className="text-immersive-secondary font-mono text-[10px] bg-immersive-primary/10 border border-immersive-border px-1.5 py-0.5 rounded">
                      {event.track}
                    </span>{" "}
                    <span className="text-immersive-text-secondary">{event.event}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2 flex-shrink-0 pl-3">
                {event.badge && (
                  <span className="hidden sm:inline-flex xl:hidden 2xl:inline-flex items-center text-[9px] font-mono font-bold bg-immersive-primary/10 text-immersive-secondary px-1.5 py-0.5 rounded border border-immersive-border">
                    {event.badge}
                  </span>
                )}
                <span className="text-[10px] font-mono text-immersive-text-secondary/70 whitespace-nowrap">
                  {event.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
