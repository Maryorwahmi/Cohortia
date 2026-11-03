import React, { useState } from 'react';
import { PracticalFile, PracticalTask } from '../types/practical';
import {
  Folder,
  FileText,
  Target,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Circle,
  Lightbulb,
  ListTodo,
  Code2,
} from 'lucide-react';

interface WorkspaceSidebarProps {
  files: PracticalFile[];
  activeFileName: string;
  onSelectFile: (fileName: string) => void;
  objective: string;
  tasks: PracticalTask[];
  completedTaskIds: string[];
  mode: 'teach' | 'practical';
  onSwitchMode: (mode: 'teach' | 'practical') => void;
}

export const WorkspaceSidebar: React.FC<WorkspaceSidebarProps> = ({
  files,
  activeFileName,
  onSelectFile,
  objective,
  tasks,
  completedTaskIds,
  mode,
  onSwitchMode,
}) => {
  const [activeTab, setActiveTab] = useState<'tasks' | 'files'>('tasks');
  const [expandedTaskId, setExpandedTaskId] = useState<string | null>(tasks[0]?.id || null);
  const [revealedHints, setRevealedHints] = useState<Record<string, number>>({});

  const toggleHint = (taskId: string, max: number) => {
    setRevealedHints((prev) => ({
      ...prev,
      [taskId]: Math.min(max, (prev[taskId] || 0) + 1),
    }));
  };

  return (
    <div className="w-64 sm:w-72 shrink-0 flex flex-col h-full bg-white/95 backdrop-blur-xs rounded-xl border border-slate-200/90 shadow-xs p-3 select-none overflow-hidden">
      {/* Top Sidebar Header with Tabs */}
      <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-100">
        <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200/70 text-[11px] font-mono">
          <button
            onClick={() => setActiveTab('tasks')}
            className={`px-2 py-0.5 rounded-md font-bold transition-all cursor-pointer flex items-center gap-1 ${
              activeTab === 'tasks'
                ? 'bg-white text-slate-900 shadow-2xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <ListTodo className="w-3 h-3 text-rose-500" />
            <span>Milestones ({completedTaskIds.length}/{tasks.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('files')}
            className={`px-2 py-0.5 rounded-md font-bold transition-all cursor-pointer flex items-center gap-1 ${
              activeTab === 'files'
                ? 'bg-white text-slate-900 shadow-2xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Folder className="w-3 h-3 text-blue-500" />
            <span>Files ({files.length})</span>
          </button>
        </div>

        <button
          onClick={() => onSwitchMode('teach')}
          className="text-[10px] font-mono font-bold text-rose-600 hover:underline px-1 py-0.5 cursor-pointer"
        >
          Teach View ↗
        </button>
      </div>

      {/* TAB 1: GUIDED TASKS (High Readability, Step-by-Step Instructions) */}
      {activeTab === 'tasks' ? (
        <div className="flex-1 overflow-y-auto no-scrollbar space-y-2 pr-0.5 min-h-0">
          <div className="p-2 rounded-lg bg-blue-50/70 border border-blue-200/60 mb-2">
            <span className="text-[9px] font-mono font-bold uppercase text-blue-700 block mb-0.5">
              Current Mission
            </span>
            <p className="text-[11px] text-slate-800 leading-snug font-medium">
              {objective}
            </p>
          </div>

          <div className="space-y-1.5">
            {tasks.map((task, idx) => {
              const isDone = completedTaskIds.includes(task.id);
              const isExpanded = expandedTaskId === task.id;
              const hintCount = revealedHints[task.id] || 0;

              return (
                <div
                  key={task.id}
                  className={`rounded-lg border transition-all text-xs ${
                    isDone
                      ? 'bg-emerald-50/40 border-emerald-200'
                      : isExpanded
                      ? 'bg-slate-50 border-indigo-300 shadow-2xs'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {/* Step Header */}
                  <div
                    onClick={() => setExpandedTaskId(isExpanded ? null : task.id)}
                    className="p-2 flex items-start gap-2 cursor-pointer select-none"
                  >
                    <div className="mt-0.5 shrink-0">
                      {isDone ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Circle className="w-3.5 h-3.5 text-slate-300" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 font-sans mb-0.5">
                        <span className="text-[10px] font-mono font-bold text-slate-400">
                          Step {idx + 1}
                        </span>
                        <span
                          className={`font-semibold text-[11px] leading-tight ${
                            isDone ? 'line-through text-emerald-900 opacity-80' : 'text-slate-900'
                          }`}
                        >
                          {task.title}
                        </span>
                      </div>
                    </div>

                    <div className="text-slate-400">
                      {isExpanded ? (
                        <ChevronDown className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronRight className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </div>

                  {/* Step Detailed Instructions */}
                  {isExpanded && (
                    <div className="px-2.5 pb-2.5 pt-0.5 border-t border-slate-100 text-[11px] space-y-1.5">
                      <p className="text-slate-700 leading-snug font-sans">
                        {task.description}
                      </p>

                      <div className="p-1.5 rounded bg-slate-100/90 border border-slate-200 text-[10px] font-mono text-slate-800">
                        <span className="text-slate-500 font-bold block mb-0.5 uppercase">
                          Verification Check:
                        </span>
                        <span>{task.criteria}</span>
                      </div>

                      {/* Progressive Hints */}
                      {task.hints && task.hints.length > 0 && (
                        <div className="pt-1 border-t border-slate-100">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold text-amber-800 flex items-center gap-1 font-mono">
                              <Lightbulb className="w-3 h-3 text-amber-500" />
                              <span>Hint ({hintCount}/{task.hints.length})</span>
                            </span>

                            {hintCount < task.hints.length && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleHint(task.id, task.hints.length);
                                }}
                                className="text-[10px] text-amber-700 hover:text-amber-900 underline font-semibold cursor-pointer"
                              >
                                {hintCount === 0 ? 'Need clue?' : 'Next clue'}
                              </button>
                            )}
                          </div>

                          {hintCount > 0 && (
                            <div className="mt-1 space-y-1">
                              {task.hints.slice(0, hintCount).map((hint, hIdx) => (
                                <div
                                  key={hIdx}
                                  className="p-1 rounded bg-amber-50 border border-amber-200 text-amber-950 text-[10px] leading-tight"
                                >
                                  {hint}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* TAB 2: FILES TREE */
        <div className="flex-1 overflow-y-auto no-scrollbar space-y-2 pr-0.5 min-h-0">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 px-2 py-1 text-xs font-mono text-rose-500 font-semibold">
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              <Folder className="w-4 h-4 fill-rose-50 text-rose-500" />
              <span>practical</span>
            </div>

            <div className="pl-4 space-y-1">
              {files.map((file) => {
                const isActive = file.name === activeFileName;
                return (
                  <button
                    key={file.name}
                    onClick={() => onSelectFile(file.name)}
                    className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs font-mono transition-all text-left cursor-pointer ${
                      isActive
                        ? 'bg-slate-100 text-slate-900 font-semibold shadow-2xs border border-slate-200/60'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <FileText className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-rose-500' : 'text-slate-400'}`} />
                    <span className="truncate">{file.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-auto border-t border-slate-100 pt-2 px-1">
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-800 uppercase tracking-wider font-mono mb-1">
              <Target className="w-3 h-3 text-rose-500" />
              <span>LESSON OBJECTIVE</span>
            </div>
            <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/70 text-[11px] text-slate-700 leading-snug font-sans">
              {objective}
            </div>
          </div>
        </div>
      )}

      {/* Progress Footer */}
      <div className="mt-2 pt-2 border-t border-slate-100 shrink-0">
        <div className="flex items-center justify-between text-[11px] font-mono mb-1">
          <span className="text-slate-500 font-medium">Milestone Progress</span>
          <span className="font-bold text-slate-900">
            {completedTaskIds.length}/{tasks.length}
          </span>
        </div>
        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden border border-slate-200">
          <div
            className="bg-emerald-500 h-full transition-all duration-300 rounded-full"
            style={{
              width: `${(completedTaskIds.length / (tasks.length || 1)) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};
