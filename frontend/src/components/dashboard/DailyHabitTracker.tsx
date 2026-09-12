import { useState, useEffect } from "react";
import { Check, Flame, Trophy, Calendar, Sparkles, RefreshCw, Star } from "lucide-react";
import { UserPreferences } from "../../types";

interface Habit {
  id: string;
  text: string;
  completed: boolean;
}

interface DailyHabitTrackerProps {
  userProfile: UserPreferences;
}

export default function DailyHabitTracker({ userProfile }: DailyHabitTrackerProps) {
  const activeTrackId = userProfile.track || "frontend";

  // Pre-configured habits depending on learning track
  const getDefaultHabits = (track: string): Habit[] => {
    switch (track) {
      case "design":
        return [
          { id: "h1", text: "Sketch 1 mobile UI layout pattern", completed: false },
          { id: "h2", text: "Verify typography contrast & spacing ratio", completed: false },
          { id: "h3", text: "Draft 2 design tokens or responsive vars", completed: false },
          { id: "h4", text: "Read 1 layout or color theory brief", completed: false },
        ];
      case "product":
        return [
          { id: "h1", text: "Draft 1 product requirement brief section", completed: false },
          { id: "h2", text: "Analyze 1 business metric or data funnel", completed: false },
          { id: "h3", text: "Map 1 user journey flow or prototype step", completed: false },
          { id: "h4", text: "Consult with AI mentor on spec docs", completed: false },
        ];
      case "analytics":
        return [
          { id: "h1", text: "Optimize 2 complex SQL query statements", completed: false },
          { id: "h2", text: "Build 1 interactive chart visualization", completed: false },
          { id: "h3", text: "Audit 1 raw dataset for structural anomalies", completed: false },
          { id: "h4", text: "Log 1 telemetry hypothesis on the forum", completed: false },
        ];
      case "frontend":
      default:
        return [
          { id: "h1", text: "Code for 45 minutes on milestones", completed: false },
          { id: "h2", text: "Inspect 1 responsive layout in DevTools", completed: false },
          { id: "h3", text: "Optimize 1 page asset or performance script", completed: false },
          { id: "h4", text: "Conduct a peer-review or support in forum", completed: false },
        ];
    }
  };

  // State
  const [habits, setHabits] = useState<Habit[]>([]);
  const [streak, setStreak] = useState<number>(0);
  const [history, setHistory] = useState<string[]>([]); // list of dates completed e.g. "2026-07-11"

  const getTodayString = () => {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  };

  // Load from local storage on mount/profile track change
  useEffect(() => {
    const todayStr = getTodayString();
    
    // Load state
    const savedHabits = localStorage.getItem(`cohortia_habits_${userProfile.name}_${activeTrackId}`);
    const savedStreak = localStorage.getItem(`cohortia_streak_${userProfile.name}`);
    const savedHistory = localStorage.getItem(`cohortia_history_${userProfile.name}`);
    const lastActiveDate = localStorage.getItem(`cohortia_last_active_date_${userProfile.name}`);

    // History & Streak calculations
    let currentStreak = savedStreak ? parseInt(savedStreak, 10) : 0;
    let parsedHistory: string[] = savedHistory ? JSON.parse(savedHistory) : [];
    
    setStreak(currentStreak);
    setHistory(parsedHistory);

    // If day changed, reset daily habits, or reload if same day
    const habitsDate = localStorage.getItem(`cohortia_habits_date_${userProfile.name}`);
    
    if (savedHabits && habitsDate === todayStr) {
      setHabits(JSON.parse(savedHabits));
    } else {
      // It's a new day or clean start
      const defaultHabits = getDefaultHabits(activeTrackId);
      setHabits(defaultHabits);
      localStorage.setItem(`cohortia_habits_${userProfile.name}_${activeTrackId}`, JSON.stringify(defaultHabits));
      localStorage.setItem(`cohortia_habits_date_${userProfile.name}`, todayStr);

      // Validate if streak is broken (more than 1 day difference from last active day)
      if (lastActiveDate && lastActiveDate !== todayStr) {
        const lastDate = new Date(lastActiveDate);
        const todayDate = new Date(todayStr);
        const diffTime = Math.abs(todayDate.getTime() - lastDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays > 1) {
          // Streak broken
          setStreak(0);
          localStorage.setItem(`cohortia_streak_${userProfile.name}`, "0");
        }
      }
    }
  }, [activeTrackId, userProfile.name]);

  const toggleHabit = (id: string) => {
    const updatedHabits = habits.map(h => h.id === id ? { ...h, completed: !h.completed } : h);
    setHabits(updatedHabits);
    
    const todayStr = getTodayString();
    localStorage.setItem(`cohortia_habits_${userProfile.name}_${activeTrackId}`, JSON.stringify(updatedHabits));

    // Check if ALL are completed now
    const allCompletedNow = updatedHabits.every(h => h.completed);
    
    if (allCompletedNow) {
      // Check if already in history
      if (!history.includes(todayStr)) {
        const newHistory = [...history, todayStr];
        setHistory(newHistory);
        localStorage.setItem(`cohortia_history_${userProfile.name}`, JSON.stringify(newHistory));

        // Increment streak if last active date was yesterday or if streak was 0
        const savedStreak = localStorage.getItem(`cohortia_streak_${userProfile.name}`);
        let currentStreak = savedStreak ? parseInt(savedStreak, 10) : 0;
        
        const lastActiveDate = localStorage.getItem(`cohortia_last_active_date_${userProfile.name}`);
        if (!lastActiveDate || lastActiveDate !== todayStr) {
          currentStreak += 1;
          setStreak(currentStreak);
          localStorage.setItem(`cohortia_streak_${userProfile.name}`, String(currentStreak));
          localStorage.setItem(`cohortia_last_active_date_${userProfile.name}`, todayStr);
        }
      }
    } else {
      // If was previously fully completed but user unchecked a habit, check if we need to revert today's completion
      const originalHabits = JSON.parse(localStorage.getItem(`cohortia_habits_${userProfile.name}_${activeTrackId}`) || "[]");
      const previouslyAllCompleted = originalHabits.every((h: Habit) => h.completed);
      
      if (!allCompletedNow && history.includes(todayStr)) {
        // Revert completion
        const newHistory = history.filter(d => d !== todayStr);
        setHistory(newHistory);
        localStorage.setItem(`cohortia_history_${userProfile.name}`, JSON.stringify(newHistory));

        const savedStreak = localStorage.getItem(`cohortia_streak_${userProfile.name}`);
        let currentStreak = savedStreak ? parseInt(savedStreak, 10) : 0;
        currentStreak = Math.max(0, currentStreak - 1);
        setStreak(currentStreak);
        localStorage.setItem(`cohortia_streak_${userProfile.name}`, String(currentStreak));
        
        // Clear last active date or set it to previous completed date
        const remainingCompletedDates = newHistory.sort();
        if (remainingCompletedDates.length > 0) {
          localStorage.setItem(`cohortia_last_active_date_${userProfile.name}`, remainingCompletedDates[remainingCompletedDates.length - 1]);
        } else {
          localStorage.removeItem(`cohortia_last_active_date_${userProfile.name}`);
        }
      }
    }
  };

  // Helper to get past 7 days for visual grid
  const getPast7Days = () => {
    const days = [];
    const weekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      days.push({
        name: weekdayNames[d.getDay()],
        dayNum: d.getDate(),
        dateStr: dateStr,
        isCompleted: history.includes(dateStr)
      });
    }
    return days;
  };

  const past7Days = getPast7Days();
  const completedTodayCount = habits.filter(h => h.completed).length;
  const progressPercent = habits.length > 0 ? Math.round((completedTodayCount / habits.length) * 100) : 0;

  return (
    <div id="daily-habit-tracker" className="bg-immersive-card border border-immersive-border rounded-3xl p-6 text-left relative overflow-hidden shadow-xl shadow-immersive-shadow">
      <div className="absolute top-0 right-0 w-24 h-24 bg-immersive-secondary/5 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold text-immersive-secondary uppercase tracking-widest block mb-0.5">
            DAILY GOALS
          </span>
          <h3 className="text-sm font-extrabold text-immersive-text-primary font-mono uppercase tracking-wider flex items-center space-x-1.5">
            <span>Habit Tracker</span>
          </h3>
        </div>

        <div className="flex items-center space-x-1 bg-immersive-bg/80 border border-immersive-border rounded-xl px-2.5 py-1 text-xs font-mono font-bold text-immersive-secondary shadow-sm">
          <Flame className={`w-3.5 h-3.5 fill-current animate-pulse`} />
          <span>{streak} DAY{streak !== 1 ? "S" : ""}</span>
        </div>
      </div>

      <p className="text-xs text-immersive-text-secondary/90 leading-relaxed font-medium mb-4">
        Keep your daily momentum active! Complete all habits today to lock in your daily streak.
      </p>

      {/* Habits List */}
      <div className="space-y-2 mb-5">
        {habits.map((habit) => (
          <button
            key={habit.id}
            onClick={() => toggleHabit(habit.id)}
            className={`w-full p-3 rounded-2xl border text-left flex items-center space-x-3 transition-all duration-300 cursor-pointer ${
              habit.completed
                ? "bg-emerald-500/5 border-emerald-500/35 text-immersive-text-secondary/80 line-through"
                : "bg-immersive-bg border-immersive-border hover:border-immersive-primary/40 hover:bg-immersive-card-hover text-immersive-text-primary"
            }`}
          >
            <div className={`w-4.5 h-4.5 rounded-md border flex items-center justify-center transition-all ${
              habit.completed
                ? "bg-emerald-500 border-emerald-500 text-immersive-bg font-extrabold"
                : "border-immersive-border/80 text-transparent"
            }`}>
              <Check className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-bold leading-tight flex-1">
              {habit.text}
            </span>
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="space-y-1.5 mb-5">
        <div className="flex justify-between items-center text-[10px] font-mono font-bold text-immersive-text-secondary">
          <span>TODAY'S COMPLETE</span>
          <span className={progressPercent === 100 ? "text-emerald-400" : "text-immersive-secondary"}>
            {progressPercent}% ({completedTodayCount}/{habits.length})
          </span>
        </div>
        <div className="w-full bg-immersive-bg border border-immersive-border/60 h-2 rounded-full overflow-hidden p-[1px]">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              progressPercent === 100 ? "bg-emerald-400" : "bg-immersive-primary"
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Weekly History Grid */}
      <div className="border-t border-immersive-border/40 pt-4">
        <span className="text-[9px] font-mono font-extrabold text-immersive-text-secondary/60 block mb-3 uppercase tracking-wider">
          PAST 7 DAYS COMPLIANCE MATRIX
        </span>
        <div className="grid grid-cols-7 gap-2">
          {past7Days.map((day, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-[8px] font-mono font-bold text-immersive-text-secondary/70 uppercase">
                {day.name}
              </span>
              <div className={`w-7 h-7 rounded-lg border flex items-center justify-center mt-1 text-[10px] font-mono font-black shadow-sm transition-all ${
                day.isCompleted
                  ? "bg-emerald-500/10 border-emerald-400/40 text-emerald-400"
                  : "bg-immersive-bg border-immersive-border text-immersive-text-secondary/50"
              }`} title={day.isCompleted ? "Goal Completed!" : "Incomplete or Future Day"}>
                {day.isCompleted ? <Trophy className="w-3 h-3 text-amber-400 animate-pulse" /> : day.dayNum}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
