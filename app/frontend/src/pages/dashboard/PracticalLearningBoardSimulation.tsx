import { BookOpen } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import type { ChatLearningContext } from "../../services/api";
import GuidedPracticalManifestBoard from "../../components/dashboard/GuidedPracticalManifestBoard";
import type { LearningBoardPractical } from "../../services/learningBoardsApi";

export interface PracticalLearningBoardSimulationProps {
  aspectRatio?: "16:9" | "auto";
  onComplete?: () => void;
  isCompleted?: boolean;
  showHeaderPills?: boolean;
  practical?: LearningBoardPractical | null;
  onMentorContextReady?: (provider: (() => ChatLearningContext) | null) => void;
}

export default function PracticalLearningBoardSimulation({
  aspectRatio = "auto",
  practical,
  onComplete,
  onMentorContextReady,
}: PracticalLearningBoardSimulationProps) {
  const { theme } = useTheme();

  if (practical) {
    return (
      <GuidedPracticalManifestBoard
        practical={practical}
        aspectRatio={aspectRatio}
        onComplete={onComplete}
        onMentorContextReady={onMentorContextReady}
      />
    );
  }

  const isDark = theme === "dark";
  return (
    <div className={`flex min-h-64 flex-col items-center justify-center rounded-2xl border p-8 text-center ${
      isDark ? "border-white/10 bg-[#11131b] text-slate-100" : "border-slate-200 bg-white text-slate-900"
    }`}>
      <BookOpen className="mb-3 h-8 w-8 text-[#FF4B3E]" aria-hidden="true" />
      <h2 className="text-lg font-bold">Practical not published yet</h2>
      <p className={`mt-2 max-w-md text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>
        This guided practical will appear here when its course manifest is available.
      </p>
    </div>
  );
}
