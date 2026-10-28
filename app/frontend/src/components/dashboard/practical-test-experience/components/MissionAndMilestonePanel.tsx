import React, { useState } from 'react';
import { PracticalTask, PracticalManifest } from '../types/practical';
import {
  Award,
  CheckCircle2,
  Circle,
  Lightbulb,
  ChevronDown,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Clock,
  Compass,
  ArrowRight,
  Flame,
} from 'lucide-react';

interface MissionAndMilestonePanelProps {
  manifest: PracticalManifest;
  completedTaskIds: string[];
  onCheckTasks: () => void;
  feedbackMessage: string | null;
  evaluatorScore?: number;
}

export const MissionAndMilestonePanel: React.FC<MissionAndMilestonePanelProps> = ({
  manifest,
  completedTaskIds,
  onCheckTasks,
  feedbackMessage,
  evaluatorScore,
}) => {
  const [expandedTaskId, setExpandedTaskId] = useState<string | null>(manifest.tasks[0]?.id || null);
  const [revealedHintLevels, setRevealedHintLevels] = useState<Record<string, number>>({});
  const [showStory, setShowStory] = useState<boolean>(true);

  const handleRevealNextHint = (taskId: string, maxHints: number) => {
    setRevealedHintLevels((prev) => {
      const current = prev[taskId] || 0;
      if (current < maxHints) {
        return { ...prev, [taskId]: current + 1 };
      }
      return prev;
    });
  };

  const tasksCount = manifest.tasks.length;
  const completedCount = completedTaskIds.length;
  const progressPercent = Math.round((completedCount / (tasksCount || 1)) * 100);

  return (
    <div className="bg-white rounded-xl border border-slate-200/90 shadow-xs p-4 flex flex-col gap-3 font-sans">
      {/* Top Mission Story Card */}
      <div className="p-3.5 rounded-xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white shadow-xs">
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-md bg-rose-500/20 border border-rose-500/40 text-rose-300">
              <Award className="w-4 h-4 text-rose-400" />
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-rose-300">
              MISSION BRIEF • {manifest.missionStory.roleTitle}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center gap-1 font-semibold">
              <Flame className="w-3 h-3 text-amber-400 fill-amber-400" />
              +{manifest.missionStory.xpReward} XP
            </span>
            <button
              onClick={() => setShowStory(!showStory)}
              className="text-xs text-slate-400 hover:text-white"
            >
              {showStory ? 'Collapse' : 'Expand'}
            </button>
          </div>
        </div>

        {showStory && (
          <div className="mt-2 text-xs text-slate-300 leading-relaxed space-y-2 border-t border-slate-800 pt-2">
            <p className="font-normal">{manifest.missionStory.scenarioOverview}</p>

            <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
              <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1 font-semibold">
                Key Deliverables:
              </span>
              <ul className="space-y-1">
                {manifest.missionStory.deliverables.map((del, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-[11px] text-slate-200 font-mono">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Milestones Header & Action */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 pt-1">
        <div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
              Verification Milestones
            </h3>
          </div>
          <span className="text-[11px] text-slate-500 font-medium">
            {completedCount} of {tasksCount} verified ({progressPercent}%)
          </span>
        </div>

        <button
          onClick={onCheckTasks}
          className="px-3.5 py-1.5 rounded-lg text-xs font-bold font-mono bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-colors flex items-center gap-1.5 animate-pulse-glow"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Verify & Evaluate</span>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden border border-slate-200/80">
        <div
          className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full transition-all duration-300 rounded-full"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Evaluator Feedback Banner */}
      {feedbackMessage && (
        <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs leading-relaxed flex items-start gap-2 shadow-2xs">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <div className="flex-1 font-medium">{feedbackMessage}</div>
        </div>
      )}

      {/* Milestones Checklist */}
      <div className="space-y-2">
        {manifest.tasks.map((task, idx) => {
          const isCompleted = completedTaskIds.includes(task.id);
          const isExpanded = expandedTaskId === task.id;
          const hintLevel = revealedHintLevels[task.id] || 0;

          return (
            <div
              key={task.id}
              className={`rounded-xl border transition-all ${
                isCompleted
                  ? 'border-emerald-200 bg-emerald-50/30'
                  : isExpanded
                  ? 'border-indigo-300 bg-slate-50/80 shadow-2xs'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              {/* Milestone Accordion Header */}
              <div
                onClick={() => setExpandedTaskId(isExpanded ? null : task.id)}
                className="p-3 flex items-start gap-2.5 cursor-pointer select-none"
              >
                <div className="mt-0.5 shrink-0">
                  {isCompleted ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Circle className="w-4 h-4 text-slate-300" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-mono font-bold text-slate-500">
                      M{idx + 1}:
                    </span>
                    <span
                      className={`text-xs font-semibold ${
                        isCompleted ? 'text-emerald-900 line-through opacity-85' : 'text-slate-900'
                      }`}
                    >
                      {task.title}
                    </span>
                  </div>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded font-bold uppercase ${
                      isCompleted
                        ? 'bg-emerald-100 text-emerald-800'
                        : isExpanded
                        ? 'bg-indigo-100 text-indigo-800'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {isCompleted ? 'VERIFIED' : isExpanded ? 'ACTIVE' : 'PENDING'}
                  </span>
                </div>

                <div className="text-slate-400 mt-1">
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </div>
              </div>

              {/* Milestone Body and Progressive Hints */}
              {isExpanded && (
                <div className="px-3.5 pb-3.5 pt-1 border-t border-slate-100 text-xs text-slate-700 space-y-2.5">
                  <p className="leading-relaxed">{task.description}</p>

                  <div className="p-2.5 rounded-lg bg-slate-100/80 border border-slate-200/70 font-mono text-[11px] text-slate-800">
                    <span className="font-bold text-slate-500 block mb-0.5">Automated Criteria:</span>
                    <span>{task.criteria}</span>
                  </div>

                  {/* Progressive Hint Reveal */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-amber-800 flex items-center gap-1 font-mono">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                        <span>Progressive Clues ({hintLevel}/{task.hints.length})</span>
                      </span>

                      {hintLevel < task.hints.length && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRevealNextHint(task.id, task.hints.length);
                          }}
                          className="text-[11px] font-semibold text-amber-700 hover:text-amber-900 underline underline-offset-2"
                        >
                          {hintLevel === 0 ? 'Need a subtle nudge?' : 'Reveal deeper clue'}
                        </button>
                      )}
                    </div>

                    {hintLevel > 0 && (
                      <div className="space-y-1.5 mt-1">
                        {task.hints.slice(0, hintLevel).map((hint, hIdx) => (
                          <div
                            key={hIdx}
                            className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-[11px] text-amber-950 flex items-start gap-2 shadow-2xs"
                          >
                            <span className="font-bold font-mono text-amber-800 shrink-0">
                              Tier {hIdx + 1}:
                            </span>
                            <span className="flex-1 leading-relaxed">{hint}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
