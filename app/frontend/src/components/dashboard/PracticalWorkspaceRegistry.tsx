import { useState, type ReactElement } from "react";
import { CheckCircle2, Cloud, FileSearch, GitBranch, Play, RotateCcw, Terminal } from "lucide-react";
import type { LearningBoardPractical, LearningBoardPracticalTask } from "../../services/learningBoardsApi";

export type PracticalWorkspaceProps = {
  practical: LearningBoardPractical;
  task: LearningBoardPracticalTask;
  taskIndex: number;
  files: Record<string, string>;
  activeFilePath: string;
  onFileChange: (value: string) => void;
  prediction: string;
  onPredictionChange: (value: string) => void;
  stdin: string;
  onStdinChange: (value: string) => void;
  output: string;
  isRunning: boolean;
  isDark: boolean;
  codeMode: boolean;
  onRun: () => void;
  onReset: () => void;
  onSubmitResponse: (response: string) => void;
};

const inputClass = (dark: boolean) => `w-full rounded-lg border p-3 text-sm outline-none focus:border-[#FF4B3E] ${dark ? "border-white/10 bg-[#05070d] text-slate-100" : "border-slate-200 bg-white text-slate-900"}`;
const mutedClass = (dark: boolean) => dark ? "text-slate-300" : "text-slate-600";

function SubmitBar({ label, onSubmit, disabled, isDark }: { label: string; onSubmit: () => void; disabled: boolean; isDark: boolean }) {
  return <div className="mt-3 flex items-center justify-between gap-3">
    <p className={`text-[10px] ${mutedClass(isDark)}`}>Your response is saved as evidence for this task.</p>
    <button type="button" onClick={onSubmit} disabled={disabled} className="inline-flex items-center gap-1.5 rounded-lg bg-[#FF4B3E] px-3 py-2 text-xs font-bold text-white disabled:cursor-not-allowed disabled:opacity-50">
      <CheckCircle2 className="h-3.5 w-3.5" />{label}
    </button>
  </div>;
}

function CodeWorkspace(props: PracticalWorkspaceProps) {
  const { practical, task, files, activeFilePath, onFileChange, prediction, onPredictionChange, stdin, onStdinChange, output, isRunning, isDark, onRun, onReset } = props;
  const language = practical.language || "python";
  return <div className="flex min-h-[520px] min-w-0 flex-col gap-3 rounded-xl border p-3">
    <div className="flex items-center justify-between gap-2">
      <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest ${mutedClass(isDark)}`}><Terminal className="h-3 w-3" /> Code workspace</span>
      <button type="button" onClick={onReset} className={`inline-flex items-center gap-1 text-[10px] ${mutedClass(isDark)}`}><RotateCcw className="h-3 w-3" /> Reset</button>
    </div>
    <textarea value={files[activeFilePath] || ""} onChange={(event) => onFileChange(event.target.value)} spellCheck={false} aria-label={`Editor for ${activeFilePath}`} className={`${inputClass(isDark)} min-h-[260px] flex-1 resize-y font-mono text-xs leading-relaxed`} />
    <label className={`text-[11px] font-semibold ${mutedClass(isDark)}`}>Predict before running</label>
    <textarea value={prediction} onChange={(event) => onPredictionChange(event.target.value)} placeholder="What do you expect your program or solution to do?" className={`${inputClass(isDark)} min-h-16 resize-y text-xs`} />
    <label className={`text-[11px] font-semibold ${mutedClass(isDark)}`}>Terminal input (optional)</label>
    <textarea value={stdin} onChange={(event) => onStdinChange(event.target.value)} placeholder="Input your program should receive…" className={`${inputClass(isDark)} min-h-12 resize-y font-mono text-xs`} />
    <div className="flex items-center justify-between gap-2">
      <p className={`text-[10px] ${mutedClass(isDark)}`}>{language} runs in an isolated practice runtime.</p>
      <button type="button" onClick={onRun} disabled={isRunning || !files[activeFilePath]?.trim()} className="inline-flex items-center gap-1.5 rounded-lg bg-[#FF4B3E] px-3 py-2 text-xs font-bold text-white disabled:opacity-50"><Play className="h-3.5 w-3.5" />{isRunning ? "Running" : "Run & check"}</button>
    </div>
    {output && <pre className={`max-h-36 overflow-auto rounded-lg p-3 text-[11px] ${isDark ? "bg-black/40 text-slate-300" : "bg-slate-100 text-slate-700"}`}>{output}</pre>}
    <p className={`text-xs ${mutedClass(isDark)}`}>{task.teaching?.recap || "Use the output as evidence for your explanation."}</p>
  </div>;
}

function BinaryWorkspace(props: PracticalWorkspaceProps) {
  const { task, prediction, onPredictionChange, isDark, onSubmitResponse } = props;
  const [answer, setAnswer] = useStateValue("");
  return <div className={`flex min-h-[520px] flex-col gap-4 rounded-xl border p-5 ${isDark ? "bg-[#05070d]" : "bg-white"}`}>
    <span className={`text-[10px] font-bold uppercase tracking-widest ${mutedClass(isDark)}`}>Binary conversion challenge</span>
    <h4 className={`text-base font-bold ${isDark ? "text-white" : "text-slate-900"}`}>{task.interactiveExercise?.prompt || task.instruction}</h4>
    <div className={`grid grid-cols-8 gap-2 rounded-lg p-3 ${isDark ? "bg-white/5" : "bg-slate-50"}`}>{[128, 64, 32, 16, 8, 4, 2, 1].map((value) => <div key={value} className="text-center"><div className={`font-mono text-xs ${mutedClass(isDark)}`}>{value}</div><div className="mt-1 h-7 rounded border border-dashed border-slate-400" /></div>)}</div>
    <input value={answer} onChange={(event) => setAnswer(event.target.value)} placeholder="Enter your answer…" className={`${inputClass(isDark)} font-mono`} />
    <textarea value={prediction} onChange={(event) => onPredictionChange(event.target.value)} placeholder="Explain your place-value reasoning…" className={`${inputClass(isDark)} min-h-20 resize-y`} />
    <SubmitBar label="Check answer" disabled={!answer.trim()} isDark={isDark} onSubmit={() => onSubmitResponse(`${task.interactiveExercise?.prompt || task.instruction}\n\nAnswer: ${answer}\nReasoning: ${prediction}`)} />
  </div>;
}

function ResearchWorkspace(props: PracticalWorkspaceProps) {
  const { task, files, activeFilePath, onFileChange, prediction, onPredictionChange, isDark, onSubmitResponse } = props;
  const [source, setSource] = useStateValue("");
  const [claim, setClaim] = useStateValue("");
  return <div className="flex min-h-[520px] flex-col gap-3 rounded-xl border p-4">
    <div className={`flex items-center gap-2 text-xs font-bold ${mutedClass(isDark)}`}><FileSearch className="h-4 w-4" /> Evidence notebook</div>
    <p className={`text-xs ${mutedClass(isDark)}`}>Turn the task into a defensible claim. Record where the evidence came from, what it shows, and how confident you are.</p>
    <input value={claim} onChange={(event) => setClaim(event.target.value)} placeholder="Working claim or hypothesis" className={inputClass(isDark)} />
    <input value={source} onChange={(event) => setSource(event.target.value)} placeholder="Evidence source, dataset, observation, or reference" className={inputClass(isDark)} />
    <textarea value={prediction} onChange={(event) => onPredictionChange(event.target.value)} placeholder="What evidence do you expect to find?" className={`${inputClass(isDark)} min-h-16 resize-y`} />
    <textarea value={files[activeFilePath] || ""} onChange={(event) => onFileChange(event.target.value)} placeholder="Evidence notes and counterevidence" className={`${inputClass(isDark)} min-h-[150px] flex-1 resize-y`} />
    <SubmitBar label="Save evidence" disabled={!claim.trim() || !source.trim() || !files[activeFilePath]?.trim()} isDark={isDark} onSubmit={() => onSubmitResponse(`Claim: ${claim}\nSource: ${source}\nPrediction: ${prediction}\nEvidence notes:\n${files[activeFilePath]}`)} />
  </div>;
}

function CloudWorkspace(props: PracticalWorkspaceProps) {
  const { task, isDark, prediction, onPredictionChange, onSubmitResponse } = props;
  const steps = task.simulation?.steps || [];
  const [commands, setCommands] = useStateValue("");
  const [verification, setVerification] = useStateValue("");
  const [preview, setPreview] = useStateValue("");
  return <div className="flex min-h-[520px] flex-col gap-3 rounded-xl border p-4">
    <div className={`flex items-center gap-2 text-xs font-bold ${mutedClass(isDark)}`}><Cloud className="h-4 w-4" /> Safe cloud console simulator</div>
    <div className={`rounded-lg p-3 text-xs ${isDark ? "bg-cyan-400/10 text-cyan-100" : "bg-cyan-50 text-cyan-900"}`}><strong>Expected state:</strong> {steps[0]?.output || "Describe the resource state you expect after the command."}</div>
    <textarea value={commands} onChange={(event) => setCommands(event.target.value)} placeholder="Write the read-only command plan…" className={`${inputClass(isDark)} min-h-24 resize-y font-mono`} />
    <button type="button" onClick={() => setPreview(steps.map((step) => `$ ${step.action}\n${step.output}`).join("\n\n") || "Simulation ready. Verify the declared resource state.")} className="self-start rounded-lg border border-cyan-500/40 px-3 py-2 text-xs font-semibold"><Play className="mr-1 inline h-3.5 w-3.5" />Run simulation</button>
    {preview && <pre className={`max-h-32 overflow-auto rounded-lg p-3 text-[11px] ${isDark ? "bg-black/40 text-cyan-100" : "bg-slate-100 text-slate-700"}`}>{preview}</pre>}
    <textarea value={verification} onChange={(event) => setVerification(event.target.value)} placeholder="Verification log: what changed and how do you know?" className={`${inputClass(isDark)} min-h-20 resize-y`} />
    <textarea value={prediction} onChange={(event) => onPredictionChange(event.target.value)} placeholder="Predict the resource state before running…" className={`${inputClass(isDark)} min-h-16 resize-y`} />
    <SubmitBar label="Verify mission" disabled={!commands.trim() || !verification.trim()} isDark={isDark} onSubmit={() => onSubmitResponse(`Command plan:\n${commands}\nPrediction: ${prediction}\nVerification:\n${verification}`)} />
  </div>;
}

function ScenarioWorkspace(props: PracticalWorkspaceProps) {
  const { practical, task, files, activeFilePath, onFileChange, prediction, onPredictionChange, isDark, onSubmitResponse } = props;
  const [decision, setDecision] = useStateValue("");
  const [reflection, setReflection] = useStateValue("");
  const algorithm = practical.activityKind === "algorithm_design";
  return <div className="flex min-h-[520px] flex-col gap-3 rounded-xl border p-4">
    <div className={`flex items-center gap-2 text-xs font-bold ${mutedClass(isDark)}`}><GitBranch className="h-4 w-4" /> {algorithm ? "Literal robot simulator" : "Decision simulator"}</div>
    <p className={`text-xs ${mutedClass(isDark)}`}>{algorithm ? "Write instructions precisely, then identify assumptions a literal computer would not understand." : "Choose an option, inspect its consequence, and explain the trade-off."}</p>
    <textarea value={files[activeFilePath] || ""} onChange={(event) => onFileChange(event.target.value)} placeholder={algorithm ? "Step-by-step algorithm" : "Scenario notes"} className={`${inputClass(isDark)} min-h-[150px] flex-1 resize-y`} />
    <textarea value={decision} onChange={(event) => setDecision(event.target.value)} placeholder={algorithm ? "Ambiguities or missing steps" : "Your decision and trade-off"} className={`${inputClass(isDark)} min-h-20 resize-y`} />
    <textarea value={prediction} onChange={(event) => onPredictionChange(event.target.value)} placeholder="Predict the outcome before checking…" className={`${inputClass(isDark)} min-h-16 resize-y`} />
    <textarea value={reflection} onChange={(event) => setReflection(event.target.value)} placeholder="Reflection: what would you change or transfer?" className={`${inputClass(isDark)} min-h-20 resize-y`} />
    <SubmitBar label="Submit simulation" disabled={!files[activeFilePath]?.trim() || !decision.trim() || !reflection.trim()} isDark={isDark} onSubmit={() => onSubmitResponse(`Draft:\n${files[activeFilePath]}\nDecision or ambiguities:\n${decision}\nPrediction: ${prediction}\nReflection:\n${reflection}`)} />
  </div>;
}

// Small controlled state helper keeps the category workspaces self-contained.
function useStateValue(initial: string): [string, (value: string) => void] {
  return useState(initial);
}

type WorkspaceRenderer = (props: PracticalWorkspaceProps) => ReactElement;

export const PRACTICAL_WORKSPACE_RENDERERS: Record<string, WorkspaceRenderer> = {
  binary_exercise: (props) => <BinaryWorkspace {...props} />,
  terminal_coding_lab: (props) => <CodeWorkspace {...props} />,
  editor_terminal: (props) => <CodeWorkspace {...props} />,
  research_evidence_lab: (props) => <ResearchWorkspace {...props} />,
  evidence_notebook: (props) => <ResearchWorkspace {...props} />,
  cloud_console_lab: (props) => <CloudWorkspace {...props} />,
  safe_cloud_console: (props) => <CloudWorkspace {...props} />,
  scenario_simulator: (props) => <ScenarioWorkspace {...props} />,
  decision_simulator: (props) => <ScenarioWorkspace {...props} />,
};

export function renderPracticalWorkspace(props: PracticalWorkspaceProps) {
  if (props.task.interactiveExercise?.type === "binary_conversion" || props.practical.activityKind === "binary_exercise") return <BinaryWorkspace {...props} />;
  const experience = props.practical.experienceType || props.practical.categoryProfile?.workspaceFamily || "terminal_coding_lab";
  const workspaceFamily = props.practical.categoryProfile?.workspaceFamily;
  const renderer = PRACTICAL_WORKSPACE_RENDERERS[experience] || (workspaceFamily ? PRACTICAL_WORKSPACE_RENDERERS[workspaceFamily] : undefined);
  if (renderer) return renderer(props);
  if (props.practical.category === "Research & Analysis") return PRACTICAL_WORKSPACE_RENDERERS.research_evidence_lab(props);
  if (props.practical.category === "Cloud Console Lab") return PRACTICAL_WORKSPACE_RENDERERS.cloud_console_lab(props);
  if (props.practical.category === "Scenario & Design Exercise") return PRACTICAL_WORKSPACE_RENDERERS.scenario_simulator(props);
  return PRACTICAL_WORKSPACE_RENDERERS.terminal_coding_lab(props);
}
