import type { ClipboardEvent, ReactNode } from "react";

interface AssessmentQuestionContentProps {
  children: ReactNode;
  className?: string;
}

export default function AssessmentQuestionContent({ children, className = "" }: AssessmentQuestionContentProps) {
  const preventQuestionCopy = (event: ClipboardEvent<HTMLDivElement>) => {
    const target = event.target;
    if (target instanceof HTMLElement && target.closest("input, textarea, [contenteditable='true']")) return;
    event.preventDefault();
  };

  return (
    <div
      className={`select-none ${className}`}
      style={{userSelect: "none", WebkitUserSelect: "none"}}
      onCopy={preventQuestionCopy}
    >
      {children}
    </div>
  );
}
