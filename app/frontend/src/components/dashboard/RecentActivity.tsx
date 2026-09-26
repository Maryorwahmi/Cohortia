import { useState } from "react";
import { 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ArrowUpRight, 
  FileCode2,
} from "lucide-react";
import { UserPreferences } from "../../types";

interface RecentActivityProps {
  userProfile: UserPreferences;
  onNavigate?: (page: string) => void;
}

type ActivityCategory = "all" | "progress" | "projects" | "mentor";

interface ActivityItem {
  id: string;
  category: "progress" | "projects" | "mentor";
  title: string;
  subtitle: string;
  timestamp: string;
  badge: {
    label: string;
    variant: "success" | "info" | "warning" | "purple";
  };
  details?: string;
  action?: {
    label: string;
    page: string;
  };
}

export default function RecentActivity({ userProfile, onNavigate }: RecentActivityProps) {
  const [filter, setFilter] = useState<ActivityCategory>("all");

  const trackName = userProfile.track || "Computer Science";

  const activities: ActivityItem[] = [
    {
      id: "act-1",
      category: "progress",
      title: "Completed Lesson: Memory Management & Pointers",
      subtitle: `${trackName.toUpperCase()} • Module 02: Core Systems`,
      timestamp: "2 hours ago",
      badge: { label: "100% Score", variant: "success" },
      details: "Passed the interactive quiz and verified memory bounds check in simulated terminal environment.",
      action: { label: "Review Lesson", page: "learning-board" }
    },
    {
      id: "act-2",
      category: "projects",
      title: "Project Submission: High-Performance Buffer Pool",
      subtitle: "Capstone Lab #03 • Code Review Pending",
      timestamp: "5 hours ago",
      badge: { label: "In Review", variant: "warning" },
      details: "PR #14 submitted with 12 unit tests passing, zero memory leaks, and O(1) page lookups.",
      action: { label: "View Submission", page: "projects" }
    },
    {
      id: "act-3",
      category: "mentor",
      title: "AI Mentor Interaction: Concurrency & Lock-Free Queues",
      subtitle: "Coach Johnson • Interactive Debugging Session",
      timestamp: "Yesterday, 4:15 PM",
      badge: { label: "Feedback Ready", variant: "purple" },
      details: "Coach analyzed your mutex contention profile and recommended std::atomic<T> memory fences.",
      action: { label: "Open Mentor Chat", page: "mentor" }
    },
    {
      id: "act-4",
      category: "projects",
      title: "Project Milestone Approved: Distributed Node Heartbeat",
      subtitle: "Lab #02 Evaluated by Lead Reviewer",
      timestamp: "2 days ago",
      badge: { label: "Grade: A+", variant: "success" },
      details: "Outstanding fault tolerance implementation across node partition tests. +250 XP earned!",
      action: { label: "See Evaluation", page: "projects" }
    },
    {
      id: "act-5",
      category: "progress",
      title: "Weekly Habit Milestone Achieved",
      subtitle: "Consistency Streak: 4 Consecutive Days",
      timestamp: "3 days ago",
      badge: { label: "Milestone", variant: "info" },
      details: "Maintained regular daily practice session of 45+ minutes in the learning board.",
      action: { label: "View Progress", page: "progress" }
    },
    {
      id: "act-6",
      category: "mentor",
      title: "Career Roadmap Sync Completed",
      subtitle: "1-on-1 Portfolio Guidance",
      timestamp: "4 days ago",
      badge: { label: "Action Items Set", variant: "purple" },
      details: "Mentor aligned 3 core GitHub projects targeting junior-to-mid software engineering roles.",
      action: { label: "View Roadmap", page: "learning-board" }
    }
  ];

  const filteredActivities = filter === "all" 
    ? activities 
    : activities.filter(item => item.category === filter);

  const getBadgeStyle = (variant: ActivityItem["badge"]["variant"]) => {
    switch (variant) {
      case "success":
        return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
      case "warning":
        return "bg-amber-500/10 text-amber-500 border-amber-500/20";
      case "purple":
        return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      case "info":
      default:
        return "bg-immersive-primary/10 text-immersive-primary border-immersive-primary/20";
    }
  };

  const getIcon = (category: ActivityItem["category"]) => {
    switch (category) {
      case "progress":
        return <CheckCircle2 className="w-4 h-4 text-emerald-500" />;
      case "projects":
        return <FileCode2 className="w-4 h-4 text-amber-500" />;
      case "mentor":
        return <Sparkles className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <div className="bg-immersive-card border border-immersive-border rounded-3xl p-5 sm:p-7 space-y-5 shadow-xl shadow-immersive-shadow text-left">
      {/* Header and Filter Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-immersive-border/40 pb-4">
        <div>
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#FF4B3E] uppercase block mb-1">
            | RECENT ACTIVITY & UPDATES
          </span>
          <h3 className="text-xl font-extrabold text-immersive-text-primary flex items-center gap-2">
            <span>Activity Feed</span>
            <span className="text-xs font-mono font-bold text-immersive-text-secondary bg-immersive-bg px-2.5 py-0.5 rounded-full border border-immersive-border">
              {filteredActivities.length} items
            </span>
          </h3>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 bg-immersive-bg/60 p-1 rounded-2xl border border-immersive-border">
          {(
            [
              { id: "all", label: "All Activity" },
              { id: "progress", label: "Progress" },
              { id: "projects", label: "Projects" },
              { id: "mentor", label: "Mentor" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === tab.id
                  ? "bg-immersive-card text-immersive-text-primary shadow-sm border border-immersive-border/60"
                  : "text-immersive-text-secondary hover:text-immersive-text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Activity Timeline List */}
      <div className="space-y-3.5">
        {filteredActivities.map((act) => (
          <div
            key={act.id}
            className="group p-4 bg-immersive-bg/40 hover:bg-immersive-card-hover border border-immersive-border/60 hover:border-[#FF4B3E]/30 rounded-2xl transition-all duration-200 flex flex-col sm:flex-row sm:items-start justify-between gap-4"
          >
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-immersive-card border border-immersive-border flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                {getIcon(act.category)}
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-sm font-bold text-immersive-text-primary group-hover:text-[#FF4B3E] transition-colors">
                    {act.title}
                  </h4>
                  <span
                    className={`text-[9px] font-mono font-extrabold px-2 py-0.5 rounded-full border uppercase tracking-wider ${getBadgeStyle(
                      act.badge.variant
                    )}`}
                  >
                    {act.badge.label}
                  </span>
                </div>
                <p className="text-[11px] font-mono text-immersive-text-secondary">
                  {act.subtitle}
                </p>
                {act.details && (
                  <p className="text-xs text-immersive-text-secondary/90 font-medium leading-relaxed pt-1">
                    {act.details}
                  </p>
                )}
              </div>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end justify-between shrink-0 gap-2 pl-12 sm:pl-0">
              <span className="text-[10px] font-mono text-immersive-text-secondary/70 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {act.timestamp}
              </span>
              {act.action && onNavigate && (
                <button
                  onClick={() => onNavigate(act.action!.page)}
                  className="text-xs font-bold text-[#FF4B3E] hover:underline transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>{act.action.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
