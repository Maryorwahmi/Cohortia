import React, { useState } from 'react';
import { WalkthroughStep, InstructorPersona } from '../types/practical';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Lightbulb,
  Volume2,
  VolumeX,
  Sparkles,
  Users,
  Code2,
} from 'lucide-react';

interface WalkthroughPanelProps {
  lessonLabel: string;
  category: string;
  step: WalkthroughStep;
  totalSteps: number;
  onSelectStep: (stepIndex: number) => void;
  onJoinPractical: () => void;
  onNextStep: () => void;
  isLastStep: boolean;
  isSpeaking: boolean;
  isMuted: boolean;
  onToggleMute: () => void;
  instructor: InstructorPersona;
  onOpenInstructorModal: () => void;
}

export const WalkthroughPanel: React.FC<WalkthroughPanelProps> = ({
  lessonLabel,
  category,
  step,
  totalSteps,
  onSelectStep,
  onJoinPractical,
  onNextStep,
  isLastStep,
  isSpeaking,
  isMuted,
  onToggleMute,
  instructor,
  onOpenInstructorModal,
}) => {
  const [selectedPrediction, setSelectedPrediction] = useState<string | null>(null);
  const [predictionSubmitted, setPredictionSubmitted] = useState<boolean>(false);

  // Reset prediction state when step changes
  React.useEffect(() => {
    setSelectedPrediction(null);
    setPredictionSubmitted(false);
  }, [step.stepNumber]);

  const activeQuestion = step.predictionQuestion;
  const chosenOption = activeQuestion?.options.find((o) => o.id === selectedPrediction);

  const blockStart = step.activeBlockRange ? step.activeBlockRange[0] : undefined;
  const blockEnd = step.activeBlockRange ? step.activeBlockRange[1] : undefined;

  return (
    <div className="flex-1 flex flex-col h-full bg-white rounded-xl border border-slate-200/90 shadow-xs p-6 overflow-y-auto">
      {/* Top Breadcrumb & Step Header matching screenshot */}
      <div className="mb-4">
        <div className="text-xs font-mono text-slate-500 mb-1">
          // {lessonLabel}
        </div>
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold font-mono tracking-wider text-rose-600 uppercase">
              {category}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-[11px] font-mono text-slate-500 font-medium">
              Line/Block Walkthrough
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-medium text-slate-400 uppercase tracking-widest">
              STEP {step.stepNumber} of {totalSteps}
            </span>
          </div>
        </div>
      </div>

      {/* Main Teaching Code / Text Box with Active-Line AND Active-Block Highlighting */}
      <div className="mb-4">
        <div className="rounded-xl border border-blue-200/90 bg-blue-50/30 p-5 shadow-xs transition-all relative overflow-hidden">
          <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-3">
            <span>TEACHING STEP {step.stepNumber}</span>
            <span className="text-[10px] text-blue-600 bg-blue-100/70 px-2 py-0.5 rounded font-semibold">
              {step.activeBlockRange ? `Block Lines ${step.activeBlockRange[0] + 1}-${step.activeBlockRange[1] + 1}` : `Line ${(step.activeLineIndex ?? 0) + 1}`}
            </span>
          </div>

          <div className="font-mono text-xs sm:text-sm text-slate-900 leading-relaxed font-semibold">
            {/* Parse codeSnippet field (falling back to codeOrText) and apply active-line-highlight */}
            <div className="space-y-0.5">
              {(step.codeSnippet ?? step.codeOrText ?? '').split('\n').map((line, idx) => {
                const isExactActiveLine = step.activeLineIndex === idx;
                const isInActiveBlock =
                  blockStart !== undefined && blockEnd !== undefined && idx >= blockStart && idx <= blockEnd;
                const isHighlighted = isExactActiveLine || isInActiveBlock;

                // Syntax helper for basic token coloring
                const formatSyntaxLine = (text: string) => {
                  if (text.trim().startsWith('//') || text.trim().startsWith('#')) {
                    return <span className="text-slate-400 italic">{text}</span>;
                  }
                  if (text.includes('printf(') || text.includes('print(')) {
                    const parts = text.split(/(printf\(|print\()/);
                    return (
                      <span>
                        {parts[0]}
                        <span className="text-blue-600 font-bold">{parts[1]}</span>
                        <span className="text-emerald-700">{parts.slice(2).join('')}</span>
                      </span>
                    );
                  }
                  if (text.includes('#include')) {
                    return (
                      <span>
                        <span className="text-rose-600 font-bold">#include </span>
                        <span className="text-emerald-700">{text.replace('#include', '').trim()}</span>
                      </span>
                    );
                  }
                  if (text.includes('SELECT') || text.includes('FROM') || text.includes('WHERE')) {
                    return (
                      <span>
                        {text.split(/\b(SELECT|FROM|WHERE|AND|OR|NOT|ORDER BY)\b/).map((tok, i) =>
                          /^(SELECT|FROM|WHERE|AND|OR|NOT|ORDER BY)$/.test(tok) ? (
                            <span key={i} className="text-purple-700 font-extrabold">{tok}</span>
                          ) : (
                            <span key={i}>{tok}</span>
                          )
                        )}
                      </span>
                    );
                  }
                  return <span>{text}</span>;
                };

                return (
                  <div
                    key={idx}
                    className={`flex items-start gap-2.5 py-0.5 px-2 rounded-md transition-all ${
                      isHighlighted ? 'active-line-highlight' : 'text-slate-600 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <span
                      className={`select-none text-[11px] w-5 text-right pt-0.5 font-mono ${
                        isHighlighted ? 'text-amber-700 font-bold' : 'text-slate-400'
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <span className="flex-1 whitespace-pre-wrap font-mono">
                      {formatSyntaxLine(line)}
                      {isExactActiveLine && (
                        <span className="inline-block w-1.5 h-3.5 ml-1.5 bg-amber-500 animate-pulse align-middle rounded-xs" />
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Amber Callout Box matching screenshot */}
      {step.callout && (
        <div className="mb-4">
          <div className="rounded-xl border border-amber-300 bg-amber-50/90 px-4 py-3 text-amber-950 font-medium text-sm flex items-start gap-2.5 shadow-xs">
            <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="flex-1 leading-snug">{step.callout}</div>
          </div>
        </div>
      )}

      {/* Instructor Foundation Lecture with Personas Support */}
      <div className="mb-4 p-4 rounded-xl bg-gradient-to-br from-slate-50 via-slate-50/60 to-white border border-slate-200/90 shadow-2xs">
        <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-200/70">
          <div className="flex items-center gap-3">
            {/* Persona Avatar */}
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-100 to-rose-100 border border-slate-200 flex items-center justify-center font-bold font-mono text-sm text-slate-800 shadow-inner">
                {instructor.name.charAt(0)}
              </div>
              <span
                className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-white ${
                  isSpeaking ? 'bg-emerald-500 animate-ping' : 'bg-slate-300'
                }`}
              />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xs sm:text-sm text-slate-900">
                  {instructor.name}
                </span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                  {instructor.role}
                </span>
              </div>
              <span className="text-[11px] text-slate-500">
                {instructor.title}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={onOpenInstructorModal}
              title="Change instructor or mentor voice"
              className="p-1 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 text-[11px] font-mono flex items-center gap-1"
            >
              <Users className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Change Persona</span>
            </button>

            <button
              onClick={onToggleMute}
              className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-mono font-medium border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors"
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                  <span>Unmute</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
                  <span>{isSpeaking ? 'Speaking' : 'Voice'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Foundation Explanation Body */}
        <div className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
          <p>{step.narration}</p>
        </div>
      </div>

      {/* Prediction Checkpoint Interactive Card (Present on generated steps) */}
      {activeQuestion && (
        <div className="mb-4 p-4 rounded-xl border border-indigo-200 bg-indigo-50/50 shadow-xs">
          <div className="flex items-center gap-2 mb-2 text-indigo-900 font-semibold text-xs tracking-wider uppercase font-mono">
            <HelpCircle className="w-4 h-4 text-indigo-600" />
            <span>Interactive Prediction Checkpoint</span>
          </div>

          <p className="text-xs sm:text-sm font-medium text-slate-800 mb-3">
            {activeQuestion.prompt}
          </p>

          <div className="space-y-2 mb-3">
            {activeQuestion.options.map((option) => {
              const isSelected = selectedPrediction === option.id;
              let optionStyles = 'border-slate-200 bg-white hover:border-indigo-300 text-slate-700';

              if (predictionSubmitted) {
                if (option.isCorrect) {
                  optionStyles = 'border-emerald-400 bg-emerald-50 text-emerald-950 font-medium';
                } else if (isSelected && !option.isCorrect) {
                  optionStyles = 'border-rose-300 bg-rose-50 text-rose-950';
                }
              } else if (isSelected) {
                optionStyles = 'border-indigo-500 bg-indigo-50/70 text-indigo-950 font-medium ring-1 ring-indigo-500';
              }

              return (
                <button
                  key={option.id}
                  onClick={() => !predictionSubmitted && setSelectedPrediction(option.id)}
                  disabled={predictionSubmitted}
                  className={`w-full text-left p-2.5 rounded-lg border text-xs sm:text-sm transition-all flex items-start gap-2.5 ${optionStyles}`}
                >
                  <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                    {isSelected ? '●' : '○'}
                  </span>
                  <span className="flex-1">{option.label}</span>
                </button>
              );
            })}
          </div>

          {!predictionSubmitted ? (
            <button
              onClick={() => {
                if (selectedPrediction) setPredictionSubmitted(true);
              }}
              disabled={!selectedPrediction}
              className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Confirm Prediction
            </button>
          ) : (
            chosenOption && (
              <div
                className={`p-3 rounded-lg text-xs leading-relaxed border ${
                  chosenOption.isCorrect
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                    : 'bg-rose-50 border-rose-300 text-rose-900'
                }`}
              >
                <div className="flex items-center gap-1.5 font-semibold mb-1">
                  {chosenOption.isCorrect ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Great intuition!</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-rose-600" />
                      <span>Not quite, but good try!</span>
                    </>
                  )}
                </div>
                <p>{chosenOption.feedback}</p>
              </div>
            )
          )}
        </div>
      )}

      {/* Stepper Navigation */}
      <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <button
              key={i}
              onClick={() => onSelectStep(i)}
              className={`h-2 rounded-full transition-all ${
                i + 1 === step.stepNumber
                  ? 'w-6 bg-rose-500'
                  : i + 1 < step.stepNumber
                  ? 'w-2 bg-slate-300 hover:bg-slate-400'
                  : 'w-2 bg-slate-200 hover:bg-slate-300'
              }`}
              title={`Jump to Step ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          {!isLastStep ? (
            <button
              onClick={onNextStep}
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center gap-1.5 transition-colors"
            >
              <span>Next explanation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={onJoinPractical}
              className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-rose-600 hover:bg-rose-700 text-white shadow-xs flex items-center gap-1.5 transition-colors animate-pulse"
            >
              <span>Ready to practice!</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
