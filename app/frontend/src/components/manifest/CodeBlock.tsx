import { useMemo } from "react";
import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";
import type { ManifestCodeBlock, ManifestDesignSystem } from "../../lib/courseManifest";

interface CodeBlockProps {
  code: ManifestCodeBlock;
  designSystem: ManifestDesignSystem;
  progress: number;
}

export default function CodeBlock({ code, designSystem, progress }: CodeBlockProps) {
  const ds = designSystem.colors;
  const charsToShow = Math.floor(code.snippet.length * Math.min(1, progress * 1.2));
  const displayed = code.snippet.slice(0, charsToShow);

  const lines = useMemo(() => displayed.split("\n"), [displayed]);

  return (
    <div
      className="rounded-2xl overflow-hidden border font-mono text-xs sm:text-sm"
      style={{ borderColor: `${ds.textSecondary}20`, background: ds.surface }}
    >
      <div
        className="flex items-center justify-between px-4 py-2 border-b"
        style={{ borderColor: `${ds.textSecondary}10`, background: `${ds.background}80` }}
      >
        <div className="flex items-center space-x-1.5">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: ds.error }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: ds.warning }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: ds.success }} />
        </div>
        <span className="text-[10px] uppercase tracking-wider" style={{ color: ds.textSecondary }}>
          {code.language}
        </span>
      </div>
      <div className="p-4 overflow-x-auto">
        {lines.map((line, idx) => {
          const isHighlight = code.highlightLines?.includes(idx + 1);
          return (
            <div key={idx} className="flex">
              <span className="select-none w-8 text-right pr-3 text-[10px]" style={{ color: ds.textSecondary }}>
                {idx + 1}
              </span>
              <span
                className="whitespace-pre"
                style={{ color: isHighlight ? ds.accent : ds.textPrimary, background: isHighlight ? `${ds.accent}15` : "transparent" }}
              >
                {line}
                {idx === lines.length - 1 && progress < 1 ? <span className="animate-pulse" style={{ color: ds.primary }}>|</span> : null}
              </span>
            </div>
          );
        })}
      </div>
      {progress >= 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="px-4 py-2 text-[10px] flex items-center space-x-2"
          style={{ color: ds.success, borderTop: `1px solid ${ds.textSecondary}10` }}
        >
          <CheckCircle className="w-3 h-3" />
          <span>Code block complete</span>
        </motion.div>
      )}
    </div>
  );
}
