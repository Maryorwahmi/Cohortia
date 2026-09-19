import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { ManifestDesignSystem, WorksheetConfig } from "../../lib/courseManifest";

interface WorksheetPanelProps {
  prompt?: string;
  config?: WorksheetConfig;
  designSystem: ManifestDesignSystem;
  onSubmit: (value: string) => void;
  initialValue?: string;
}

export default function WorksheetPanel({
  prompt,
  config,
  designSystem,
  onSubmit,
  initialValue = "",
}: WorksheetPanelProps) {
  const ds = designSystem.colors;
  const [value, setValue] = useState(initialValue);
  const [grade, setGrade] = useState<{ grade: string; text: string } | null>(null);

  const rubric = config?.aiGradingRubric || { keywords: [] };
  const keywords = rubric.keywords?.length ? rubric.keywords : ["analysis", "concept", "example"];
  const minCharacters = config?.minCharacters || 0;
  const placeholder = config?.placeholder || "Type your reflection here...";

  const evaluate = () => {
    const lower = value.toLowerCase();
    const hits = keywords.filter((k) => lower.includes(k.toLowerCase())).length;
    let gradeLabel = "Needs Work";
    let text = "Keep reflecting. Aim to weave in the key concepts from the scene.";
    if (hits >= keywords.length * 0.75 && value.length >= minCharacters) {
      gradeLabel = "Excellent";
      text = "Great reflection! You captured the core ideas and connected them clearly.";
    } else if (hits >= keywords.length * 0.4 || value.length >= minCharacters * 1.5) {
      gradeLabel = "Good";
      text = "Solid start. Try to explicitly mention a few more keywords from the lesson.";
    }
    setGrade({ grade: gradeLabel, text });
    return { grade: gradeLabel, text };
  };

  const handleSubmit = () => {
    evaluate();
    if (value.length >= minCharacters) {
      onSubmit(value);
    }
  };

  const metMin = value.length >= minCharacters;

  return (
    <div
      className="flex flex-col gap-3 p-4 rounded-2xl border relative overflow-hidden"
      style={{
        backgroundColor: ds.surface,
        borderColor: `${ds.textSecondary}30`,
      }}
    >
      <span
        className="text-[9px] font-mono uppercase font-bold block"
        style={{ color: ds.textSecondary }}
      >
        Reflection Workspace
      </span>
      <p className="text-xs font-medium" style={{ color: ds.textPrimary }}>
        {prompt || "Type your reflection before continuing."}
      </p>
      <textarea
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          if (grade) setGrade(null);
        }}
        className="w-full px-3 py-2 rounded-xl text-xs focus:outline-none resize-none"
        style={{
          backgroundColor: ds.background,
          borderColor: `${ds.textSecondary}30`,
          color: ds.textPrimary,
          borderWidth: 1,
        }}
        placeholder={placeholder}
        rows={4}
      />
      <div className="flex items-center justify-between">
        <span
          className="text-[9px] font-mono"
          style={{ color: metMin ? ds.success : ds.textSecondary }}
        >
          {value.length} / {minCharacters} characters
        </span>
        <button
          onClick={handleSubmit}
          disabled={!metMin}
          className="px-4 py-1.5 rounded-lg text-[10px] font-mono uppercase font-bold tracking-wider transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          style={{ backgroundColor: ds.accent, color: "#fff" }}
        >
          Submit
        </button>
      </div>
      <AnimatePresence>
        {grade && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="p-3 rounded-xl border text-[10px] leading-relaxed"
            style={{ backgroundColor: ds.background, borderColor: `${ds.textSecondary}20` }}
          >
            <span
              className="font-bold uppercase font-mono block mb-0.5"
              style={{ color: ds.accent }}
            >
              Teacher&apos;s Review: {grade.grade}
            </span>
            <p style={{ color: ds.textSecondary }}>{grade.text}</p>
            {rubric.referenceGradingExplanations && (
              <>
                <div className="h-px my-2" style={{ backgroundColor: `${ds.textSecondary}20` }} />
                <p className="font-mono" style={{ color: ds.textSecondary }}>
                  {rubric.referenceGradingExplanations}
                </p>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
