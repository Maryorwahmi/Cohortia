import React, { useState } from 'react';
import { PracticalTask } from '../types/practical';
import { CheckCircle2, Circle, Lightbulb, ChevronDown, ChevronRight, Sparkles, Check } from 'lucide-react';

interface TasksAndHintsPanelProps {
  tasks: PracticalTask[];
  completedTaskIds: string[];
  onCheckTasks: () => void;
  feedbackMessage: string | null;
}

export const TasksAndHintsPanel: React.FC<TasksAndHintsPanelProps> = ({
  tasks,
  completedTaskIds,
  onCheckTasks,
  feedbackMessage,
}) => {
  const [expandedTaskId, setExpandedTaskId] = useState<string | null>(tasks[0]?.id || null);
  const [revealedHintLevels, setRevealedHintLevels] = useState<Record<string, number>>({});

  const handleRevealNextHint = (taskId: string, maxHints: number) => {
    setRevealedHintLevels((prev) => {
      const current = prev[taskId] || 0;
      if (current < maxHints) {
        return { ...prev, [taskId]: current + 1 };
      }
      return prev;
    });
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200/90 shadow-xs p-4 flex flex-col gap-3">
      {/* Header with check action */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-rose-500" />
          <h3 className="font-mono text-xs font-bold text-slate-800 uppercase tracking-wider">
            Practical Tasks & Milestones
          </h3>
        </div>

        <button
          onClick={onCheckTasks}
          className="px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-colors flex items-center gap-1.5"
        >
          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>Verify & Check Tasks</span>
        </button>
      </div>

      {/* Global verification feedback banner */}
      {feedbackMessage && (
        <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs leading-relaxed flex items-start gap-2 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <div className="flex-1">{feedbackMessage}</div>
        </div>
      )}

      {/* Tasks List */}
      <div className="space-y-2">
        {tasks.map((task, idx) => {
          const isCompleted = completedTaskIds.includes(task.id);
          const isExpanded = expandedTaskId === task.id;
          const hintLevel = revealedHintLevels[task.id] || 0;

          return (
            <div
              key={task.id}
              className={`rounded-lg border transition-all ${
                isCompleted
                  ? 'border-emerald-200 bg-emerald-50/30'
                  : isExpanded
                  ? 'border-slate-300 bg-slate-50/50 shadow-2xs'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              {/* Task Accordion Row */}
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
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-slate-500">
                      Task {idx + 1}:
                    </span>
                    <span
                      className={`text-xs font-semibold ${
                        isCompleted ? 'text-emerald-900 line-through' : 'text-slate-800'
                      }`}
                    >
                      {task.title}
                    </span>
                  </div>
                </div>

                <div className="text-slate-400">
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </div>
              </div>

              {/* Task Details and Progressive Hints */}
              {isExpanded && (
                <div className="px-3 pb-3 pt-1 border-t border-slate-100 text-xs text-slate-600 space-y-2.5">
                  <p className="leading-relaxed">{task.description}</p>

                  <div className="p-2 rounded bg-slate-100/70 border border-slate-200/60 font-mono text-[11px] text-slate-700">
                    <span className="font-semibold text-slate-500">Success Criteria:</span>{' '}
                    {task.criteria}
                  </div>

                  {/* Progressive Hint Reveal */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-amber-800 flex items-center gap-1">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                        <span>Progressive Hints ({hintLevel}/{task.hints.length})</span>
                      </span>

                      {hintLevel < task.hints.length && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRevealNextHint(task.id, task.hints.length);
                          }}
                          className="text-[11px] font-medium text-amber-700 hover:text-amber-900 underline underline-offset-2"
                        >
                          {hintLevel === 0 ? 'Need a nudge?' : 'Reveal deeper clue'}
                        </button>
                      )}
                    </div>

                    {hintLevel > 0 && (
                      <div className="space-y-1 mt-1">
                        {task.hints.slice(0, hintLevel).map((hint, hIdx) => (
                          <div
                            key={hIdx}
                            className="p-2 rounded bg-amber-50 border border-amber-200/80 text-[11px] text-amber-950 flex items-start gap-1.5"
                          >
                            <span className="font-bold font-mono text-amber-700">
                              L{hIdx + 1}:
                            </span>
                            <span className="flex-1">{hint}</span>
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
