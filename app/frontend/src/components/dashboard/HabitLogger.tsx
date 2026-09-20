import { useState, useEffect } from "react";
import { Check, Flame, Trophy, Calendar, Sparkles } from "lucide-react";
import { UserPreferences } from "../../types";
import { activityApi } from "../../services/api";

interface HabitLoggerProps {
  userProfile: UserPreferences;
}

export default function HabitLogger({ userProfile }: HabitLoggerProps) {
  const [habits, setHabits] = useState({
    completedModule: false,
    practicedCoding: false,
    reviewedNotes: false,
  });

  const [streak, setStreak] = useState(0);
  const [history, setHistory] = useState<Record<string, number>>({});

  const getTodayString = () => {
    const today = new Date();
    return `${today.getUTCFullYear()}-${String(today.getUTCMonth() + 1).padStart(2, "0")}-${String(today.getUTCDate()).padStart(2, "0")}`;
  };

  useEffect(() => {
    let cancelled = false;
    const loadSummary = async () => {
      try {
        const response = await activityApi.getDailySummary();
        if (cancelled || !response.data) return;
        const todayStr = getTodayString();
        const today = response.data.details[todayStr] || {
          completedModule: false,
          practicedCoding: false,
          reviewedNotes: false,
        };
        setHistory(response.data.history);
        setStreak(response.data.streak);
        setHabits(today);
      } catch {
        // The dashboard remains usable while the activity service is unavailable.
      }
    };
    loadSummary();
    const refresh = () => loadSummary();
    window.addEventListener("focus", refresh);
    const interval = window.setInterval(loadSummary, 15000);
    return () => {
      cancelled = true;
      window.removeEventListener("focus", refresh);
      window.clearInterval(interval);
    };
  }, [userProfile.name]);

  // Generate 8 weeks (56 days) for heatmap ending today
  const getHeatmapDays = () => {
    const days = [];
    const today = new Date();
    for (let i = 55; i >= 0; i--) {
      const d = new Date();
      d.setDate(today.getDate() - i);
      const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
      const score = history[dateStr] || 0;
      days.push({
        dateStr,
        score,
        dayOfMonth: d.getDate(),
        monthLabel: d.toLocaleDateString("en-US", { month: "short" }),
        dayOfWeek: d.toLocaleDateString("en-US", { weekday: "short" }),
      });
    }
    return days;
  };

  const heatmapDays = getHeatmapDays();
  const completedTodayCount = [habits.completedModule, habits.practicedCoding, habits.reviewedNotes].filter(Boolean).length;
  const progressPercent = Math.round((completedTodayCount / 3) * 100);

  // Helper for grid cell intensity styling
  const getCellColorClass = (score: number) => {
    switch (score) {
      case 1:
        return "bg-amber-500/30 border border-amber-500/20";
      case 2:
        return "bg-orange-500/65 border border-orange-500/40";
      case 3:
        return "bg-[#FF4B3E] border border-red-500/50 shadow-[0_0_10px_rgba(255,75,62,0.3)]";
      default:
        return "bg-immersive-bg border border-immersive-border/60 hover:border-immersive-secondary/30";
    }
  };

  return (
    <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 text-left relative overflow-hidden shadow-xl shadow-immersive-shadow">
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF4B3E]/5 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold text-immersive-secondary uppercase tracking-widest block mb-0.5">
            CONSISTENCY TRACKER
          </span>
          <h3 className="text-sm font-extrabold text-immersive-text-primary font-mono uppercase tracking-wider flex items-center space-x-1.5">
            <span>Daily Habit Logger</span>
          </h3>
        </div>

        <div className="flex items-center space-x-1 bg-immersive-bg/80 border border-immersive-border rounded-xl px-2.5 py-1 text-xs font-mono font-bold text-immersive-secondary shadow-sm">
          <Flame className="w-3.5 h-3.5 fill-current animate-pulse text-[#FF4B3E]" />
          <span>{streak} DAY STREAK</span>
        </div>
      </div>

      <p className="text-xs text-immersive-text-secondary leading-relaxed font-medium mb-4">
        Your progress updates automatically from completed learning activity. Complete all 3 to secure your streak!
      </p>

      {/* Habits Checklist */}
      <div className="space-y-2 mb-5">
        <div
          className={`w-full p-3.5 rounded-2xl border text-left flex items-center space-x-3.5 transition-all duration-300 cursor-pointer ${
            habits.completedModule
              ? "bg-amber-500/5 border-amber-500/35 text-immersive-text-secondary/80 line-through"
              : "bg-immersive-bg border-immersive-border hover:border-immersive-secondary/50 hover:bg-immersive-bg/80 text-immersive-text-primary"
          }`}
        >
          <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
            habits.completedModule ? "bg-amber-500 border-amber-500 text-immersive-bg font-extrabold" : "border-immersive-border/80"
          }`}>
            <Check className="w-4 h-4 stroke-[3px]" />
          </div>
          <span className="text-xs font-bold leading-tight flex-1">Completed Module</span>
        </div>

        <div
          className={`w-full p-3.5 rounded-2xl border text-left flex items-center space-x-3.5 transition-all duration-300 cursor-pointer ${
            habits.practicedCoding
              ? "bg-orange-500/5 border-orange-500/35 text-immersive-text-secondary/80 line-through"
              : "bg-immersive-bg border-immersive-border hover:border-immersive-secondary/50 hover:bg-immersive-bg/80 text-immersive-text-primary"
          }`}
        >
          <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
            habits.practicedCoding ? "bg-orange-500 border-orange-500 text-immersive-bg font-extrabold" : "border-immersive-border/80"
          }`}>
            <Check className="w-4 h-4 stroke-[3px]" />
          </div>
          <span className="text-xs font-bold leading-tight flex-1">Practiced Coding / Active Lab</span>
        </div>

        <div
          className={`w-full p-3.5 rounded-2xl border text-left flex items-center space-x-3.5 transition-all duration-300 cursor-pointer ${
            habits.reviewedNotes
              ? "bg-[#FF4B3E]/5 border-[#FF4B3E]/35 text-immersive-text-secondary/80 line-through"
              : "bg-immersive-bg border-immersive-border hover:border-immersive-secondary/50 hover:bg-immersive-bg/80 text-immersive-text-primary"
          }`}
        >
          <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
            habits.reviewedNotes ? "bg-[#FF4B3E] border-[#FF4B3E] text-immersive-bg font-extrabold" : "border-immersive-border/80"
          }`}>
            <Check className="w-4 h-4 stroke-[3px]" />
          </div>
          <span className="text-xs font-bold leading-tight flex-1">Reviewed Study Notes / Chat Advisor</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-1.5 mb-5">
        <div className="flex justify-between items-center text-[10px] font-mono font-bold text-immersive-text-secondary">
          <span>DAILY INTENSITY</span>
          <span className={progressPercent === 100 ? "text-[#FF4B3E]" : "text-immersive-secondary"}>
            {progressPercent}% ({completedTodayCount}/3)
          </span>
        </div>
        <div className="w-full bg-immersive-bg border border-immersive-border/60 h-2 rounded-full overflow-hidden p-[1px]">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              progressPercent === 100 ? "bg-[#FF4B3E]" : progressPercent >= 66 ? "bg-orange-500" : "bg-amber-500"
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Heatmap Grid */}
      <div className="border-t border-immersive-border/40 pt-4">
        <span className="text-[9px] font-mono font-extrabold text-immersive-text-secondary/60 block mb-3 uppercase tracking-wider">
          56-DAY CONSISTENCY HEATMAP
        </span>
        
        <div className="grid gap-1.5 justify-center" style={{ gridTemplateColumns: "repeat(14, minmax(0, 1fr))" }}>
          {heatmapDays.map((day, idx) => (
            <div
              key={idx}
              className={`w-4 h-4 rounded-sm transition-all ${getCellColorClass(day.score)}`}
              title={`${day.dateStr}: ${day.score} actions completed`}
            />
          ))}
        </div>

        <div className="flex justify-between items-center mt-3 text-[9px] font-mono text-immersive-text-secondary/70">
          <span>56 Days Ago</span>
          <div className="flex items-center space-x-1">
            <span>Less</span>
            <div className="w-2.5 h-2.5 bg-immersive-bg border border-immersive-border/60 rounded-[1px]" />
            <div className="w-2.5 h-2.5 bg-amber-500/30 border border-amber-500/20 rounded-[1px]" />
            <div className="w-2.5 h-2.5 bg-orange-500/65 border border-orange-500/40 rounded-[1px]" />
            <div className="w-2.5 h-2.5 bg-[#FF4B3E] rounded-[1px]" />
            <span>More</span>
          </div>
          <span>Today</span>
        </div>
      </div>
    </div>
  );
}
