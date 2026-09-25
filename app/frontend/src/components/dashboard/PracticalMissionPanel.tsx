import { CheckCircle2, Circle, Lightbulb, Target, Volume2 } from "lucide-react";
import type { LearningBoardPracticalTask } from "../../services/learningBoardsApi";

interface PracticalMissionPanelProps {
  title: string;
  instructions?: string | null;
  objectives?: string[];
  tasks?: LearningBoardPracticalTask[];
  activeTaskIndex: number;
  checkedItems: Record<number, boolean>;
  revealedHintCount: Record<string, number>;
  onTaskSelect?: (index: number) => void;
  onCheckItem: (index: number, checked: boolean) => void;
  onRevealHint?: (taskId: string) => void;
  onPlayNarration?: (text?: string) => void;
}

/** Learner-facing control surface shared by every practical workspace. */
export default function PracticalMissionPanel({
  title, instructions, objectives = [], tasks = [], activeTaskIndex, checkedItems,
  revealedHintCount, onTaskSelect, onCheckItem, onRevealHint, onPlayNarration,
}: PracticalMissionPanelProps) {
  const activeTask = tasks[activeTaskIndex];
  const complete = tasks.filter((_, index) => checkedItems[index]).length;
  const progress = tasks.length ? Math.round((complete / tasks.length) * 100) : 0;
  const revealed = activeTask ? revealedHintCount[activeTask.id] || 0 : 0;

  return (
    <section className="shrink-0 border-b border-slate-200 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 px-4 py-3 text-white shadow-sm">
      <div className="mx-auto grid max-w-[1500px] gap-3 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="min-w-0">
          <div className="mb-1 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">
            <Target className="h-3.5 w-3.5" /> Your mission
          </div>
          <h2 className="truncate text-sm font-bold sm:text-base">{activeTask?.title || title}</h2>
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-300">{activeTask?.instruction || instructions || "Follow the practical steps, test your work, and explain what you observed."}</p>
          {objectives.length > 0 && (
            <div className="mt-2 hidden flex-wrap gap-1.5 sm:flex">
              {objectives.slice(0, 3).map((objective) => <span key={objective} className="rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[9px] text-slate-200">{objective}</span>)}
            </div>
          )}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {activeTask?.narratorGuide && onPlayNarration && <button type="button" onClick={() => onPlayNarration(activeTask.narratorGuide || undefined)} className="inline-flex items-center gap-1 rounded-md border border-cyan-300/30 bg-cyan-300/10 px-2 py-1 text-[10px] font-bold text-cyan-100 hover:bg-cyan-300/20"><Volume2 className="h-3 w-3" /> Hear guidance</button>}
            {activeTask && activeTask.hints.length > revealed && onRevealHint && <button type="button" onClick={() => onRevealHint(activeTask.id)} className="inline-flex items-center gap-1 rounded-md border border-amber-300/30 bg-amber-300/10 px-2 py-1 text-[10px] font-bold text-amber-100 hover:bg-amber-300/20"><Lightbulb className="h-3 w-3" /> {revealed ? "Next hint" : "Need a hint?"}</button>}
            {activeTask && <button type="button" onClick={() => onCheckItem(activeTaskIndex, !checkedItems[activeTaskIndex])} className="inline-flex items-center gap-1 rounded-md bg-emerald-500 px-2 py-1 text-[10px] font-bold text-white hover:bg-emerald-400"><CheckCircle2 className="h-3 w-3" /> {checkedItems[activeTaskIndex] ? "Completed" : "Mark step done"}</button>}
          </div>
          {activeTask && revealed > 0 && <div className="mt-2 rounded-md border border-amber-200/15 bg-amber-100/10 px-2.5 py-2 text-[11px] leading-relaxed text-amber-100">{activeTask.hints.slice(0, revealed).map((hint, index) => <p key={hint} className={index ? "mt-1" : ""}>Hint {index + 1}: {hint}</p>)}</div>}
        </div>
        <div className="min-w-0 rounded-lg border border-white/10 bg-white/5 p-2.5">
          <div className="mb-2 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-300"><span>Learning path</span><span>{complete}/{tasks.length} · {progress}%</span></div>
          <div className="mb-2 h-1.5 overflow-hidden rounded-full bg-slate-700"><div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all" style={{ width: `${progress}%` }} /></div>
          <div className="flex gap-1 overflow-x-auto pb-0.5">
            {tasks.map((task, index) => <button key={task.id} type="button" onClick={() => onTaskSelect?.(index)} className={`min-w-[104px] rounded-md border px-2 py-1.5 text-left text-[10px] transition-colors ${index === activeTaskIndex ? "border-cyan-300 bg-cyan-300/15 text-white" : checkedItems[index] ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-100" : "border-white/10 bg-slate-900/40 text-slate-300 hover:bg-white/10"}`}><span className="mr-1 inline-block align-middle">{checkedItems[index] ? <CheckCircle2 className="inline h-3 w-3" /> : <Circle className="inline h-3 w-3" />}</span><span className="line-clamp-1 align-middle">{index + 1}. {task.title || "Step"}</span></button>)}
          </div>
        </div>
      </div>
    </section>
  );
}
