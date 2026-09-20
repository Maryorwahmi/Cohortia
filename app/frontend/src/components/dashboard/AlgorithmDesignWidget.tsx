import { useState } from "react";
import { Plus, Trash2, ArrowDown, CheckCircle2, AlertTriangle, Lightbulb, Play, Sparkles } from "lucide-react";

interface AlgorithmDesignWidgetProps {
  title?: string;
  initialSteps?: string[];
  edgeCases?: Array<{ condition: string; consequence: string }>;
  onComplete?: () => void;
}

export default function AlgorithmDesignWidget({
  title = "Algorithm Step Sequencer & Edge-Case Prover",
  initialSteps = [
    "Pick up the toothbrush and check if the tube has toothpaste",
    "Open the cap and apply a pea-sized amount to the bristles",
    "Brush all quadrants of teeth thoroughly for 2 minutes",
    "Rinse mouth and brush bristles under clean running water",
    "Store the brush in an upright drying holder",
  ],
  edgeCases = [
    { condition: "The toothpaste tube is completely empty", consequence: "Algorithm halts at Step 2 unless an alternative tube or restocking step exists." },
    { condition: "Water supply is shut off", consequence: "Rinsing step cannot proceed normally without a stored cup or water source." },
    { condition: "Brushing duration is not measured", consequence: "Without a timer or count condition, step 3 has no deterministic exit condition." },
  ],
  onComplete,
}: AlgorithmDesignWidgetProps) {
  const [steps, setSteps] = useState<string[]>(initialSteps);
  const [newStepText, setNewStepText] = useState("");
  const [testedCases, setTestedCases] = useState<Record<number, boolean>>({});
  const [isRunningSim, setIsRunningSim] = useState(false);
  const [simOutput, setSimOutput] = useState<string | null>(null);

  const addStep = () => {
    if (!newStepText.trim()) return;
    setSteps([...steps, newStepText.trim()]);
    setNewStepText("");
  };

  const removeStep = (index: number) => {
    setSteps(steps.filter((_, i) => i !== index));
  };

  const moveStep = (from: number, to: number) => {
    if (to < 0 || to >= steps.length) return;
    const updated = [...steps];
    const [moved] = updated.splice(from, 1);
    updated.splice(to, 0, moved);
    setSteps(updated);
  };

  const toggleEdgeCase = (index: number) => {
    const updated = { ...testedCases, [index]: !testedCases[index] };
    setTestedCases(updated);
    if (Object.keys(updated).length >= edgeCases.length && Object.values(updated).every(Boolean)) {
      onComplete?.();
    }
  };

  const runAlgorithmSimulation = () => {
    setIsRunningSim(true);
    setSimOutput(null);

    setTimeout(() => {
      setIsRunningSim(false);
      setSimOutput(`✓ Successfully simulated all ${steps.length} steps sequentially! Total estimated instructions: ${steps.length * 3}. Complexity: O(n) sequential flow.`);
      onComplete?.();
    }, 800);
  };

  return (
    <div className="flex h-full w-full flex-col overflow-y-auto bg-slate-50 p-6 text-slate-800">
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">{title}</h2>
          <p className="mt-1 text-xs text-slate-500">
            Construct an unambiguous sequence of steps. Test what happens when real-world edge cases occur.
          </p>
        </div>

        <button
          type="button"
          onClick={runAlgorithmSimulation}
          disabled={isRunningSim || steps.length === 0}
          className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-indigo-700 active:scale-95 disabled:opacity-50"
        >
          <Play className="h-4 w-4 fill-current" />
          {isRunningSim ? "Simulating Execution..." : "Simulate Algorithm"}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left Column: Sequenced Steps */}
        <div className="flex flex-col gap-3 lg:col-span-7">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Execution Sequence ({steps.length} Steps)
            </span>
          </div>

          <div className="space-y-2">
            {steps.map((step, index) => (
              <div key={index} className="group relative flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-xs transition-all hover:border-slate-300">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-50 font-mono text-xs font-bold text-indigo-600">
                  {index + 1}
                </div>
                <div className="min-w-0 flex-1 text-xs font-medium text-slate-700">
                  {step}
                </div>
                <div className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                  <button
                    type="button"
                    onClick={() => moveStep(index, index - 1)}
                    disabled={index === 0}
                    className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 disabled:opacity-30"
                    title="Move up"
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    onClick={() => moveStep(index, index + 1)}
                    disabled={index === steps.length - 1}
                    className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 disabled:opacity-30"
                    title="Move down"
                  >
                    ↓
                  </button>
                  <button
                    type="button"
                    onClick={() => removeStep(index)}
                    className="rounded p-1 text-rose-400 hover:bg-rose-50 hover:text-rose-600"
                    title="Remove step"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Add Step Input */}
          <div className="mt-2 flex gap-2">
            <input
              type="text"
              value={newStepText}
              onChange={(e) => setNewStepText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addStep()}
              placeholder="Add next algorithmic instruction..."
              className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={addStep}
              className="flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <Plus className="h-3.5 w-3.5 text-indigo-600" /> Add Step
            </button>
          </div>

          {/* Simulation Output Card */}
          {simOutput && (
            <div className="mt-3 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50/80 p-4 text-xs font-medium text-emerald-800">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
              <div>{simOutput}</div>
            </div>
          )}
        </div>

        {/* Right Column: Edge Case Probes */}
        <div className="flex flex-col gap-4 lg:col-span-5">
          <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5">
            <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900">
              <AlertTriangle className="h-4 w-4 text-amber-600" /> Edge-Case Robustness Checklist
            </div>
            <p className="mb-4 text-xs text-amber-800 leading-relaxed">
              In computer science, an algorithm must handle abnormal or edge-case conditions without crashing.
              Verify how your algorithm copes with these conditions:
            </p>

            <div className="space-y-3">
              {edgeCases.map((ec, idx) => {
                const isChecked = !!testedCases[idx];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleEdgeCase(idx)}
                    className={`cursor-pointer rounded-xl border p-3.5 transition-all ${
                      isChecked
                        ? "border-amber-300 bg-white shadow-xs"
                        : "border-amber-200/60 bg-amber-100/40 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleEdgeCase(idx)}
                        className="mt-0.5 accent-amber-600"
                      />
                      <div>
                        <div className="text-xs font-semibold text-amber-950">{ec.condition}</div>
                        <div className="mt-1 text-[11px] text-amber-800 leading-normal">{ec.consequence}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-4 text-xs text-indigo-900">
            <div className="mb-1 flex items-center gap-1.5 font-bold text-indigo-950">
              <Lightbulb className="h-3.5 w-3.5 text-indigo-600" /> Did You Know?
            </div>
            Ada Lovelace's first algorithm in 1843 for computing Bernoulli numbers included explicit looping steps and conditional tracking of variables, just like you are doing here!
          </div>
        </div>
      </div>
    </div>
  );
}
