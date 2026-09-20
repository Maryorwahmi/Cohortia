import { useState, useEffect, useRef } from "react";
import { MessageSquare, Sparkles, Bell, X, Check, Award, Shield } from "lucide-react";
import { UserPreferences } from "../../types";

interface NotificationToastProps {
  userProfile: UserPreferences;
}

export interface ToastMessage {
  id: string;
  type: "mentor" | "progress" | "system";
  sender?: string;
  title: string;
  content: string;
  timestamp: string;
}

export default function NotificationToast({ userProfile }: NotificationToastProps) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const lastCompletedCountRef = useRef<number>(userProfile.completedSteps?.length || 0);

  // Trigger a Toast
  const triggerToast = (type: "mentor" | "progress" | "system", title: string, content: string, sender?: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: ToastMessage = {
      id,
      type,
      title,
      content,
      sender,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
    
    setToasts(prev => [newToast, ...prev].slice(0, 3)); // Max 3 toasts simultaneously

    // Auto dismiss after 5.5 seconds
    setTimeout(() => {
      dismissToast(id);
    }, 5500);
  };

  const dismissToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // 1. Reactive Toast Listener for real progress checklist completions
  useEffect(() => {
    const currentCount = userProfile.completedSteps?.length || 0;
    if (currentCount > lastCompletedCountRef.current) {
      triggerToast(
        "progress",
        "Milestone Updated! ✦",
        "Step completed! Your dashboard diagnostics and skill proficiencies have updated.",
        "Cohortia System"
      );
    }
    lastCompletedCountRef.current = currentCount;
  }, [userProfile.completedSteps]);

  // 2. Scheduled simulated Mentor / Progress updates for immersion
  useEffect(() => {
    // Show welcome notification on load
    const welcomeTimer = setTimeout(() => {
      triggerToast(
        "system",
        "Active Live Connection",
        `Welcome to the internship workspace, ${userProfile.name}. Mentor chat is ready.`,
        "Cohortia Lab"
      );
    }, 3000);

    // Periodic mentor/sprint coaching advice (every 45 seconds for active feel, or when first mounting)
    const periodicAdvices = [
      {
        type: "mentor" as const,
        title: "Code Review Tip",
        content: "Coach Johnson: 'Clean separation of concerns counts. Keep your types modular and styles reusable!'",
        sender: "Coach Johnson"
      },
      {
        type: "system" as const,
        title: "Active Streak!",
        content: "XP Multiplier active. Completed milestones are now rewarded with 1.4x bonus multipliers.",
        sender: "Telemetry System"
      },
      {
        type: "mentor" as const,
        title: "Sprint Objective Update",
        content: "Coach Johnson: 'Just checked your layout telemetry. Stellar work on responsive borders!'",
        sender: "Coach Johnson"
      }
    ];

    let currentAdviceIdx = 0;
    const intervalTimer = setInterval(() => {
      if (currentAdviceIdx < periodicAdvices.length) {
        const adv = periodicAdvices[currentAdviceIdx];
        triggerToast(adv.type, adv.title, adv.content, adv.sender);
        currentAdviceIdx++;
      }
    }, 50000); // Trigger every 50 seconds to keep it subtle and non-intrusive

    return () => {
      clearTimeout(welcomeTimer);
      clearInterval(intervalTimer);
    };
  }, [userProfile.name]);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-24 left-4 right-4 sm:left-auto sm:right-8 z-50 flex flex-col space-y-3.5 max-w-sm w-auto sm:w-full pointer-events-none">
      {toasts.map((toast) => {
        const isMentor = toast.type === "mentor";
        const isProgress = toast.type === "progress";

        return (
          <div
            key={toast.id}
            className="pointer-events-auto w-full bg-[#0c0c0e]/95 border border-immersive-border/80 rounded-2xl p-4 shadow-2xl shadow-immersive-shadow relative overflow-hidden flex items-start space-x-3.5 animate-in slide-in-from-right duration-300"
            style={{
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              boxShadow: isMentor 
                ? "0 10px 30px -10px rgba(255, 159, 28, 0.15)" 
                : isProgress 
                ? "0 10px 30px -10px rgba(16, 185, 129, 0.15)"
                : "0 10px 30px -10px rgba(255, 75, 62, 0.15)"
            }}
          >
            {/* Left side visual badge */}
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
              isMentor 
                ? "bg-amber-400/10 text-amber-400 border border-amber-400/20" 
                : isProgress 
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                : "bg-[#FF4B3E]/10 text-[#FF4B3E] border border-[#FF4B3E]/20"
            }`}>
              {isMentor ? (
                <MessageSquare className="w-4 h-4" />
              ) : isProgress ? (
                <Check className="w-4 h-4" />
              ) : (
                <Bell className="w-4 h-4" />
              )}
            </div>

            {/* Core textual info */}
            <div className="flex-1 space-y-1 text-left pr-4">
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-mono font-black uppercase ${
                  isMentor ? "text-amber-400" : isProgress ? "text-emerald-400" : "text-[#FF4B3E]"
                }`}>
                  {toast.sender || "COHORTIA"}
                </span>
                <span className="text-[9px] font-mono text-immersive-text-secondary/50 font-bold">
                  {toast.timestamp}
                </span>
              </div>
              <h4 className="text-xs font-black text-immersive-text-primary leading-tight">
                {toast.title}
              </h4>
              <p className="text-[11px] text-immersive-text-secondary font-medium leading-relaxed">
                {toast.content}
              </p>
            </div>

            {/* Dismiss trigger */}
            <button
              onClick={() => dismissToast(toast.id)}
              className="absolute top-3.5 right-3.5 p-0.5 rounded text-immersive-text-secondary/60 hover:text-immersive-text-primary hover:bg-[#020204]/60 transition-colors cursor-pointer"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
