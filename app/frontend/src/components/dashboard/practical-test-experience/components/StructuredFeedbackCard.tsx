import React from 'react';
import { DomainEvaluatorResult, DiagnosticFinding } from '../types/practical';
import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ArrowRight,
  Sparkles,
  RotateCcw,
  Code2,
  Terminal,
  Cloud,
  FileCheck,
} from 'lucide-react';

interface StructuredFeedbackCardProps {
  evaluatorResult: DomainEvaluatorResult | null;
  onApplyAction?: (actionText: string) => void;
  onClose?: () => void;
}

export const StructuredFeedbackCard: React.FC<StructuredFeedbackCardProps> = ({
  evaluatorResult,
  onApplyAction,
  onClose,
}) => {
  if (!evaluatorResult) return null;

  const isPassed = evaluatorResult.status === 'passed';

  const getDomainIcon = () => {
    switch (evaluatorResult.domain) {
      case 'algorithm':
        return <FileCheck className="w-4 h-4 text-rose-500" />;
      case 'repl':
        return <Terminal className="w-4 h-4 text-emerald-500" />;
      case 'script':
        return <Code2 className="w-4 h-4 text-blue-500" />;
      case 'cloud':
        return <Cloud className="w-4 h-4 text-indigo-500" />;
      default:
        return <Sparkles className="w-4 h-4 text-amber-500" />;
    }
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-lg overflow-hidden font-sans animate-fadeIn">
      {/* Header Banner */}
      <div
        className={`px-4 py-3 flex items-center justify-between border-b ${
          isPassed
            ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
            : 'bg-amber-50/80 border-amber-200 text-amber-950'
        }`}
      >
        <div className="flex items-center gap-2">
          {getDomainIcon()}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider">
                Domain Evaluator Diagnostic Report
              </span>
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold uppercase border ${
                  isPassed
                    ? 'bg-emerald-200/60 border-emerald-300 text-emerald-900'
                    : 'bg-amber-200/60 border-amber-300 text-amber-900'
                }`}
              >
                Score: {evaluatorResult.score}/100 • {isPassed ? 'Passed' : 'Revision Needed'}
              </span>
            </div>
          </div>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 text-xs font-mono font-medium"
          >
            Close
          </button>
        )}
      </div>

      <div className="p-4 space-y-4">
        {/* Summary text */}
        <p className="text-xs text-slate-700 leading-relaxed font-medium">
          {evaluatorResult.summary}
        </p>

        {/* Detailed Findings List */}
        <div className="space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
            Exact Findings & Line Analysis:
          </span>

          <div className="space-y-2">
            {evaluatorResult.findings.map((finding) => {
              const isPass = finding.level === 'pass';
              const isWarn = finding.level === 'warn';

              return (
                <div
                  key={finding.id}
                  className={`p-3 rounded-lg border text-xs leading-relaxed ${
                    isPass
                      ? 'bg-emerald-50/40 border-emerald-200/70 text-emerald-950'
                      : isWarn
                      ? 'bg-amber-50/40 border-amber-200 text-amber-950'
                      : 'bg-rose-50/50 border-rose-200 text-rose-950'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div className="flex items-center gap-1.5 font-semibold">
                      {isPass ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      ) : isWarn ? (
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      ) : (
                        <XCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                      )}
                      <span>{finding.title}</span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0 font-mono text-[10px]">
                      {finding.lineRef !== undefined && (
                        <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                          Line {finding.lineRef}
                        </span>
                      )}
                      <span
                        className={`px-1.5 py-0.5 rounded font-bold uppercase ${
                          isPass
                            ? 'bg-emerald-100 text-emerald-800'
                            : isWarn
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}
                      >
                        {finding.level}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-2 pl-5">{finding.detail}</p>

                  <div className="pl-5 flex items-center justify-between gap-2 bg-white/70 p-2 rounded-md border border-slate-100">
                    <span className="text-[11px] font-mono text-slate-700">
                      <span className="font-bold text-slate-500">Action:</span> {finding.suggestedAction}
                    </span>

                    {onApplyAction && (
                      <button
                        onClick={() => onApplyAction(finding.suggestedAction)}
                        className="px-2 py-0.5 rounded bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-[10px] font-mono font-semibold transition-colors flex items-center gap-1 shrink-0"
                      >
                        <span>Apply</span>
                        <ArrowRight className="w-2.5 h-2.5" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Actionable Next Steps */}
        {evaluatorResult.nextActions.length > 0 && (
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-600 font-bold block mb-1.5">
              Recommended Next Actions:
            </span>
            <ul className="space-y-1">
              {evaluatorResult.nextActions.map((action, idx) => (
                <li
                  key={idx}
                  className="text-xs text-slate-700 flex items-center gap-2 font-mono"
                >
                  <span className="text-rose-500 font-bold">→</span>
                  <span>{action}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
