import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CheckCircle2, Lightbulb, LoaderCircle, Play, RotateCcw } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import type { ChatLearningContext } from "../../services/api";
import { learningBoardsApi, type LearningBoardPractical, type LearningBoardPracticalTask } from "../../services/learningBoardsApi";
import { executePython } from "../../services/pyodideRunner";
import { evaluatePracticalChecks } from "../../lib/practicalCheckEvaluator";
import { simulateIntroductoryC } from "../../lib/cPracticeSimulator";
import AnimatedCodeAlongPlayer from "./AnimatedCodeAlongPlayer";

interface GuidedPracticalManifestBoardProps {
  practical: LearningBoardPractical;
  onComplete?: () => void | Promise<void>;
  onMentorContextReady?: (provider: (() => ChatLearningContext) | null) => void;
}

type CheckDefinition = {
  id: string;
  type: string;
  command?: string;
  expected?: string | null;
  passCondition?: unknown;
  matchMode?: string;
  variableCheck?: { name: string; expected: unknown };
  explanation?: string;
  testData?: Record<string, unknown>;
};

type TeacherGuide = {
  goal: string;
  narration: string;
  prompt: string;
  focus?: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function normalizeChecks(practical: LearningBoardPractical): CheckDefinition[] {
  const declaredChecks = Array.isArray(practical.checks) ? practical.checks : [];
  const taskChecks = (Array.isArray(practical.tasks) ? practical.tasks : []).flatMap((task) =>
    (Array.isArray(task.tests) ? task.tests : []).map((test, index) => ({
      ...test,
      id: test.id || `${task.id}-test-${index + 1}`,
    }))
  );
  const source = declaredChecks.length ? declaredChecks : taskChecks;

  return source.flatMap((item, index) => {
    if (!isRecord(item) || typeof item.id !== "string" || typeof item.type !== "string") return [];
    const variableCheck = isRecord(item.variableCheck)
      && typeof item.variableCheck.name === "string"
      ? { name: item.variableCheck.name, expected: item.variableCheck.expected }
      : undefined;
    return [{
      id: item.id || `check-${index + 1}`,
      type: item.type,
      ...(typeof item.command === "string" ? { command: item.command } : {}),
      ...(typeof item.expected === "string" ? { expected: item.expected } : {}),
      ...(item.passCondition !== undefined
        ? { passCondition: item.passCondition }
        : isRecord(item.testData) ? { passCondition: item.testData } : {}),
      ...(typeof item.matchMode === "string" ? { matchMode: item.matchMode } : {}),
      ...(variableCheck ? { variableCheck } : {}),
      ...(typeof item.explanation === "string" ? { explanation: item.explanation } : {}),
      ...(isRecord(item.testData) ? { testData: item.testData } : {}),
    }];
  }).filter((check) => !["manual", "submission"].includes(check.type.toLowerCase()));
}

function languageForFile(path: string, fallback: string | null | undefined): string {
  const extension = path.split(".").pop()?.toLowerCase();
  if (extension === "py") return "python";
  if (extension === "c") return "c";
  if (extension === "h") return ["cpp", "c++"].includes((fallback || "").toLowerCase()) ? fallback || "cpp" : "c";
  if (["cpp", "cc", "cxx", "hpp"].includes(extension || "")) return "cpp";
  if (extension === "sql") return "sql";
  return fallback || "";
}

export default function GuidedPracticalManifestBoard({
  practical,
  onComplete,
  onMentorContextReady,
}: GuidedPracticalManifestBoardProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const practicalFiles = useMemo(
    () => Array.isArray(practical.files) ? practical.files : [],
    [practical.files]
  );
  const [activeTaskIndex, setActiveTaskIndex] = useState(0);
  const [activeFilePath, setActiveFilePath] = useState(practicalFiles[0]?.path || "response.md");
  const [files, setFiles] = useState<Record<string, string>>(() => Object.fromEntries(
    practicalFiles.map((file) => [file.path, file.content])
  ));
  const [prediction, setPrediction] = useState("");
  const [exerciseAnswers, setExerciseAnswers] = useState<Record<string, string>>({});
  const [exerciseFeedback, setExerciseFeedback] = useState<Record<string, { correct: boolean; message: string; explanation: string }>>({});
  const [revealedHints, setRevealedHints] = useState<Record<string, number>>({});
  const [revealedSuggestions, setRevealedSuggestions] = useState<Record<string, string[]>>({});
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({});
  const [checkResults, setCheckResults] = useState<Record<string, boolean>>({});
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkspaceOpen, setIsWorkspaceOpen] = useState(false);
  const [teacherGuide, setTeacherGuide] = useState<TeacherGuide | null>(null);
  const workspaceRef = useRef<HTMLElement>(null);
  const completionTriggeredRef = useRef(false);
  const tasks = Array.isArray(practical.tasks) ? practical.tasks : [];
  const activeTask = tasks[activeTaskIndex];
  const checks = useMemo(() => normalizeChecks(practical), [practical]);
  const currentCode = files[activeFilePath] ?? "";
  const completedCount = tasks.filter((task) => completedTasks[task.id]).length;
  const language = languageForFile(activeFilePath, practical.language);
  const isBinaryExercise = practical.activityKind === "binary_exercise";
  const codeMode = ["code_lab", "terminal_lab", "database_lab"].includes(practical.mode)
    && ["python", "c", "cpp", "c++"].includes(language.toLowerCase());
  const darkText = isDark ? "text-slate-100" : "text-slate-900";
  const mutedText = isDark ? "text-slate-300" : "text-slate-600";
  const surface = isDark ? "border-white/10 bg-[#11131b]" : "border-slate-200 bg-white";
  const accentText = isDark ? "text-[#FF6B60]" : "text-[#B83227]";
  const accentBackground = isDark ? "bg-[#FF4B3E]" : "bg-[#B83227]";
  const handleJoinPractical = useCallback(() => {
    setIsWorkspaceOpen(true);
    window.requestAnimationFrame(() => workspaceRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }, []);
  const handleGuideChange = useCallback((guide: TeacherGuide) => setTeacherGuide(guide), []);

  useEffect(() => {
    setActiveTaskIndex(0);
    setActiveFilePath(practicalFiles[0]?.path || "response.md");
    setFiles(Object.fromEntries(practicalFiles.map((file) => [file.path, file.content])));
    setPrediction("");
    setExerciseAnswers({});
    setExerciseFeedback({});
    setRevealedHints({});
    setRevealedSuggestions({});
    setCompletedTasks({});
    setCheckResults({});
    setOutput("");
    setTeacherGuide(null);
    setIsWorkspaceOpen(false);
    completionTriggeredRef.current = false;
  }, [practical.id, practicalFiles]);

  useEffect(() => {
    if (!practical.id) return;
    let cancelled = false;
    learningBoardsApi.getPracticalProgress(practical.id)
      .then(({ taskProgress }) => {
        if (cancelled) return;
        const restored = Object.fromEntries(
          taskProgress
            .filter((item: { status?: string }) => item.status === "completed")
            .map((item: { taskId: string }) => [item.taskId, true])
        );
        setCompletedTasks(restored);
      })
      .catch((error) => console.warn("Could not restore practical task progress:", error));
    return () => {
      cancelled = true;
    };
  }, [practical.id]);

  const updateCurrentFile = (value: string) => {
    setFiles((previous) => ({ ...previous, [activeFilePath]: value }));
  };

  const markTaskComplete = async (task: LearningBoardPracticalTask) => {
    if (completedTasks[task.id]) return;
    if (!practical.id) {
      throw new Error("This practical has no saved identifier, so task completion cannot be recorded.");
    }
    await learningBoardsApi.updatePracticalTaskProgress(practical.id, task.id, "completed");
    const nextCompleted = { ...completedTasks, [task.id]: true };
    setCompletedTasks(nextCompleted);
    const nextIncompleteIndex = tasks.findIndex((item) => !nextCompleted[item.id]);
    if (nextIncompleteIndex >= 0) {
      window.setTimeout(() => {
        setActiveTaskIndex(nextIncompleteIndex);
        setPrediction("");
      }, 500);
    }
  };

  useEffect(() => {
    if (!tasks.length || !tasks.every((task) => completedTasks[task.id]) || completionTriggeredRef.current) return;
    completionTriggeredRef.current = true;
    setOutput("Excellent work — all practical checks are complete. Opening the chapter assessment now.");
    void onComplete?.();
  }, [completedTasks, onComplete, tasks]);

  useEffect(() => {
    if (!onMentorContextReady) return;
    if (!activeTask) {
      onMentorContextReady(null);
      return;
    }
    const getContext = (): ChatLearningContext => ({
      practicalTitle: practical.title,
      practicalInstructions: practical.instructions || undefined,
      practicalObjectives: practical.objectives || [],
      currentFile: activeFilePath,
      currentCode,
      currentTaskTitle: activeTask.title || undefined,
      currentTaskInstruction: activeTask.instruction,
      currentTaskHint: activeTask.hints.slice(0, revealedHints[activeTask.id] || 0).at(-1),
      currentTaskIndex: activeTaskIndex,
      totalTasks: tasks.length,
      completedTasks: completedCount,
      hasErrors: /NOT YET|error|failed/i.test(output),
      lastOutput: output,
      page: "guided practical",
    });
    onMentorContextReady(getContext);
    return () => onMentorContextReady(null);
  }, [
    activeFilePath,
    activeTask,
    activeTaskIndex,
    completedCount,
    currentCode,
    onMentorContextReady,
    output,
    practical.instructions,
    practical.objectives,
    practical.title,
    revealedHints,
    tasks.length,
  ]);

  const runPractical = async () => {
    if (activeTask.interactiveExercise?.type === "binary_conversion") {
      const answer = exerciseAnswers[activeTask.id]?.trim() || "";
      if (!answer) {
        setOutput("Enter your answer before checking it.");
        return;
      }
      const normalizeAnswer = (value: string) => value
        .trim()
        .toLowerCase()
        .replace(/^0b/, "")
        .replace(/[₀₁₂₃₄₅₆₇₈₉]/g, "")
        .replace(/[\s,_]/g, "");
      const exercise = activeTask.interactiveExercise;
      const acceptedAnswers = [exercise.expectedAnswer, ...(exercise.acceptedAnswers || [])];
      const correct = acceptedAnswers.some((expected) => normalizeAnswer(expected) === normalizeAnswer(answer));
      setExerciseFeedback((previous) => ({
        ...previous,
        [activeTask.id]: {
          correct,
          message: correct
            ? "That’s correct. Your conversion matches the place-value rule."
            : "Not quite yet. Recheck the place values and try again.",
          explanation: exercise.explanation,
        },
      }));

      const savedResponse = `${exercise.prompt}\n\nYour answer: ${answer}\nPrediction: ${prediction || "Not provided"}`;
      const updatedFiles = { ...files, [activeFilePath]: savedResponse };
      setFiles(updatedFiles);
      setOutput(correct ? "Correct — your answer has been checked." : "Not yet — revise your answer and check again.");
      try {
        if (practical.id) {
          await learningBoardsApi.recordPracticalAttempt(
            practical.id,
            updatedFiles,
            correct ? "passed" : "in_progress",
            savedResponse,
          );
        }
        if (correct) await markTaskComplete(activeTask);
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        setOutput(`Your answer was checked, but progress could not be saved: ${message}`);
      }
      return;
    }

    if (!prediction.trim()) {
      setOutput("Write your prediction before running the practical.");
      return;
    }
    if (!codeMode) {
      if (!currentCode.trim()) {
        setOutput("Add your written response in the workspace before submitting it for review.");
        return;
      }
      if (!practical.id) {
        setOutput("This practical has no saved identifier, so the response could not be submitted for review.");
        return;
      }
      try {
        await learningBoardsApi.recordPracticalAttempt(practical.id, files, "submitted", currentCode);
        await learningBoardsApi.updatePracticalTaskProgress(practical.id, activeTask.id, "in_progress");
        setOutput("Your response was submitted for instructor or domain-specific review. It has not been marked as passed.");
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        setOutput(`Could not submit the response: ${message}`);
      }
      return;
    }

    const taskCheckIds = new Set(activeTask.checkIds || []);
    const taskChecks = checks.filter((check) =>
      taskCheckIds.size === 0 || taskCheckIds.has(check.id)
    );
    if (!taskChecks.length) {
      setOutput("No executable checks are attached to this task, so it cannot be marked passed from compilation alone.");
      return;
    }
    const compileProbes = taskChecks.flatMap((check) => {
      if (check.type.toLowerCase() !== "compile_probe" || !isRecord(check.passCondition)) return [];
      const { source, expectCompileSuccess, expectedDiagnostic } = check.passCondition;
      if (typeof source !== "string" || typeof expectCompileSuccess !== "boolean") return [];
      if (!expectCompileSuccess && typeof expectedDiagnostic !== "string") return [];
      return [{
        id: check.id,
        source,
        expectCompileSuccess,
        ...(typeof expectedDiagnostic === "string" ? { expectedDiagnostic } : {}),
      }];
    });

    const supportedLanguage = language.toLowerCase();
    if (!["python", "c", "cpp", "c++"].includes(supportedLanguage)) {
      setOutput(`Execution is not connected for ${language || "this language"} yet. Your edits are retained, but no test is marked as passed.`);
      return;
    }

    setIsRunning(true);
    setOutput("Running your code against the practical checks...");
    try {
      let stdout = "";
      let stderr = "";
      let executionError = "";
      let executionSuccess = false;
      let globals: Record<string, unknown> = {};
      let artifacts: Record<string, string> = {};
      let sanitizers: string[] = [];
      let compileProbeResults: Array<{ id: string; passed: boolean; message: string }> = [];
      if (supportedLanguage === "python") {
        const result = await executePython(currentCode, { files });
        stdout = result.stdout;
        stderr = result.stderr;
        globals = result.globals || {};
        executionSuccess = result.success;
      } else {
        const executionFilePath = /\.(h|hpp)$/i.test(activeFilePath)
          ? practicalFiles.find((file) => /\.(c|cpp|cc|cxx)$/i.test(file.path))?.path || activeFilePath
          : activeFilePath;
        try {
          const result = await learningBoardsApi.executeNativePractical(
            files,
            executionFilePath,
            supportedLanguage,
            "",
            taskChecks.some((check) => check.type.toLowerCase() === "sanitizer"),
            compileProbes
          );
          stdout = result.stdout || "";
          stderr = result.stderr || "";
          executionError = result.error || "";
          executionSuccess = result.ok;
          artifacts = result.artifacts || {};
          sanitizers = result.sanitizers || [];
          compileProbeResults = result.compileProbes || [];
        } catch (error) {
          const message = error instanceof Error ? error.message : String(error);
          if (!/Native execution is disabled until an isolated sandbox executor is configured/i.test(message)) throw error;
          const simulated = simulateIntroductoryC(currentCode);
          stdout = simulated.stdout;
          stderr = simulated.stderr;
          executionSuccess = simulated.success;
        }
      }

      const evaluations = evaluatePracticalChecks({
        checks: taskChecks,
        stdout,
        stderr,
        globals,
        files,
        artifacts,
        sanitizers,
        compileProbes: compileProbeResults,
        executionSuccess,
      });
      const nextResults = { ...checkResults };
      evaluations.forEach((result) => {
        nextResults[result.checkId] = result.passed;
      });
      setCheckResults(nextResults);
      const passed = evaluations.every((result) => result.passed);
      const resultOutput = [
        stdout,
        stderr,
        ...evaluations.map((result) => `${result.passed ? "PASS" : "NOT YET"} — ${result.message}`),
        executionError,
      ].filter(Boolean).join("\n");
      try {
        if (practical.id) {
          await learningBoardsApi.recordPracticalAttempt(
            practical.id,
            files,
            passed ? "passed" : "in_progress",
            [stdout, stderr].filter(Boolean).join("\n")
          );
        }
        if (passed) await markTaskComplete(activeTask);
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        setOutput([resultOutput, `Could not save practical progress: ${message}`].filter(Boolean).join("\n\n"));
        return;
      }
      setOutput(resultOutput);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      setOutput(`Execution failed: ${message}`);
    } finally {
      setIsRunning(false);
    }
  };

  if (!activeTask) {
    return (
      <div className={`rounded-2xl border p-8 text-center ${surface} ${darkText}`}>
        <h2 className="font-bold">This practical has no learner tasks</h2>
        <p className={`mt-2 text-sm ${mutedText}`}>A course author must add at least one guided task before it can be completed.</p>
      </div>
    );
  }

  return (
    <>
      {!isWorkspaceOpen && (
    <div className={`flex h-[min(72vh,680px)] min-h-[520px] min-w-0 flex-col gap-3 overflow-hidden rounded-2xl border p-3 ${isDark ? "border-slate-800 bg-[#101522]" : "border-slate-200 bg-slate-50"}`}>
      <div
        key={practical.id || practical.title}
        hidden={isWorkspaceOpen}
        className="min-h-0 min-w-0 flex-1 overflow-hidden rounded-xl"
      >
        <AnimatedCodeAlongPlayer
          playlist={practical.teachingPlaylist}
          files={practicalFiles}
          walkthrough={practical.codeWalkthrough}
          category={practical.category}
          activityKind={practical.activityKind}
          teachingSteps={practical.teachingSteps}
          courseId={practical.courseId}
          tasks={tasks}
          narratorGuide={practical.narratorGuide}
          onOpenLab={handleJoinPractical}
          onWalkthroughComplete={handleJoinPractical}
          onGuideChange={handleGuideChange}
          openButtonLabel="Join practical"
          isActive={!isWorkspaceOpen}
        />
      </div>
    </div>
      )}

      {!isWorkspaceOpen && teacherGuide && (
        <section className={`mt-3 rounded-xl border p-4 shadow-sm ${isDark ? "border-cyan-300/20 bg-[#111827] text-slate-100" : "border-immersive-primary/20 bg-white text-slate-900"}`} aria-live="polite">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-[10px] font-black uppercase tracking-wider text-immersive-primary">Teacher guide · {teacherGuide.goal}</span>
            <span className={isDark ? "font-mono text-[10px] text-slate-400" : "font-mono text-[10px] text-slate-500"}>Pause & predict</span>
          </div>
          <p className={`text-sm leading-relaxed ${isDark ? "text-slate-200" : "text-slate-600"}`}>{teacherGuide.narration}</p>
          <p className={`mt-2 text-sm font-medium leading-relaxed ${isDark ? "text-amber-200" : "text-amber-700"}`}>Think first: {teacherGuide.prompt}</p>
          {teacherGuide.focus && <p className={`mt-2 text-sm leading-relaxed ${isDark ? "text-emerald-300" : "text-emerald-700"}`}>Focus: {teacherGuide.focus}</p>}
        </section>
      )}

      {isWorkspaceOpen && (
      <section ref={workspaceRef} className={`flex min-w-0 flex-col gap-3 scroll-mt-4 ${isDark ? "text-slate-100" : "text-slate-900"}`}>
        <div className={`flex flex-wrap items-center justify-between gap-3 rounded-xl border p-4 ${surface}`}>
          <div>
            <p className={`text-[10px] font-bold uppercase tracking-widest ${accentText}`}>Walkthrough complete · Your turn</p>
            <p className={`mt-1 text-sm ${mutedText}`}>
              {isBinaryExercise
                ? "Solve each conversion, check your answer, and use the feedback to strengthen your reasoning."
                : "Apply the idea from the walkthrough, record your reasoning, then check the result."}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsWorkspaceOpen(false)}
            className={`rounded-lg border px-3 py-2 text-xs font-semibold ${surface} ${darkText} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4B3E]`}
          >
            Review walkthrough
          </button>
        </div>
        <nav aria-label="Practical tasks" className="flex gap-2 overflow-x-auto pb-1">
          {tasks.map((task, index) => (
            <button
              key={task.id}
              type="button"
              onClick={() => { setActiveTaskIndex(index); setPrediction(""); }}
              className={`shrink-0 rounded-lg border px-3 py-2 text-left text-xs font-semibold ${
                activeTaskIndex === index
                  ? `border-[#FF4B3E] bg-[#FF4B3E]/10 ${accentText}`
                  : completedTasks[task.id]
                    ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-600"
                    : `${surface} ${mutedText}`
              }`}
            >
              {completedTasks[task.id] ? "✓ " : ""}{task.title || `Task ${index + 1}`}
            </button>
          ))}
        </nav>

        <section className={`rounded-xl border p-4 ${surface}`}>
          <div className="min-w-0">
            <p className={`text-[10px] font-bold uppercase tracking-widest ${accentText}`}>Your turn · Step {activeTaskIndex + 1}</p>
            <h3 className={`mt-1 text-sm font-bold ${darkText}`}>{activeTask.title || `Task ${activeTaskIndex + 1}`}</h3>
            <p className={`mt-2 text-sm leading-relaxed ${mutedText}`}>
              {activeTask.teaching?.learningGoal || "Use the starter file to complete this step, then run the checks to verify your work."}
            </p>
            {activeTask.teaching?.questions?.[0] && (
              <p className={`mt-2 border-l-2 border-[#FF4B3E] pl-3 text-xs leading-relaxed ${mutedText}`}>
                Think about: {activeTask.teaching.questions[0]}
              </p>
            )}
          </div>
        </section>

      <section className={`grid min-h-0 flex-1 gap-3 xl:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]`}>
        <div className={`flex min-h-[520px] min-w-0 flex-col rounded-xl border p-3 ${surface}`}>
          {!activeTask.interactiveExercise && <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <div className="flex gap-1 overflow-x-auto">
              {practicalFiles.map((file) => (
                <button
                  key={file.path}
                  type="button"
                  onClick={() => setActiveFilePath(file.path)}
                  className={`rounded px-2 py-1 font-mono text-[10px] ${activeFilePath === file.path ? `${accentBackground} text-white` : mutedText}`}
                >
                  {file.path}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => { setFiles(Object.fromEntries(practicalFiles.map((file) => [file.path, file.content]))); setOutput(""); }}
              className={`inline-flex items-center gap-1 text-[10px] ${mutedText}`}
            >
              <RotateCcw className="h-3 w-3" /> Reset
            </button>
          </div>}
          {activeTask.interactiveExercise?.type === "binary_conversion" ? (
            <div className={`flex flex-1 flex-col gap-4 rounded-lg border p-5 ${isDark ? "border-slate-700 bg-[#05070d]" : "border-slate-200 bg-gradient-to-br from-slate-50 to-white"}`}>
              <div>
                <p className={`font-mono text-[10px] font-bold uppercase tracking-wider ${accentText}`}>Conversion challenge</p>
                <h4 className={`mt-2 text-base font-bold ${darkText}`}>{activeTask.interactiveExercise.prompt}</h4>
              </div>
              <label className={`text-xs font-semibold ${mutedText}`} htmlFor={`binary-answer-${activeTask.id}`}>Your answer</label>
              <input
                id={`binary-answer-${activeTask.id}`}
                type="text"
                inputMode="text"
                autoComplete="off"
                name={`binary-answer-${activeTask.id}`}
                value={exerciseAnswers[activeTask.id] || ""}
                onChange={(event) => setExerciseAnswers((previous) => ({ ...previous, [activeTask.id]: event.target.value }))}
                placeholder="Enter your answer…"
                className={`rounded-lg border p-3 font-mono text-sm outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4B3E] ${isDark ? "border-white/10 bg-[#0b0d14] text-slate-100" : "border-slate-200 bg-white text-slate-900"}`}
              />
              {exerciseFeedback[activeTask.id] && (
                <div className={`rounded-lg border p-3 text-sm ${exerciseFeedback[activeTask.id].correct ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-200" : "border-amber-500/30 bg-amber-500/10 text-amber-800 dark:text-amber-200"}`}>
                  <p className="font-semibold">{exerciseFeedback[activeTask.id].message}</p>
                  <p className="mt-1">{exerciseFeedback[activeTask.id].explanation}</p>
                </div>
              )}
              <label className={`mt-auto text-[11px] font-semibold ${mutedText}`} htmlFor={`practical-prediction-${activeTask.id}`}>Predict before checking</label>
              <textarea
                id={`practical-prediction-${activeTask.id}`}
                value={prediction}
                onChange={(event) => setPrediction(event.target.value)}
                placeholder="How did you work it out?…"
                className={`min-h-20 resize-y rounded-lg border p-3 text-sm outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4B3E] ${isDark ? "border-white/10 bg-[#0b0d14] text-slate-100" : "border-slate-200 bg-white text-slate-900"}`}
              />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className={`text-[10px] ${mutedText}`}>Use your place-value reasoning; formatting such as `0b` or spaces is accepted.</p>
                <button
                  type="button"
                  onClick={() => void runPractical()}
                  disabled={isRunning || !exerciseAnswers[activeTask.id]?.trim()}
                  className={`inline-flex items-center gap-1.5 rounded-lg ${accentBackground} px-3 py-2 text-xs font-bold text-white disabled:cursor-not-allowed disabled:opacity-50`}
                >
                  <CheckCircle2 className="h-3.5 w-3.5" />Check answer
                </button>
              </div>
            </div>
          ) : <textarea
            value={currentCode}
            onChange={(event) => updateCurrentFile(event.target.value)}
            spellCheck={false}
            aria-label={`Editor for ${activeFilePath}`}
            className={`h-[min(42vh,400px)] min-h-[260px] flex-none resize-y rounded-lg border p-3 font-mono text-xs leading-relaxed outline-none focus:border-[#FF4B3E] ${
              isDark ? "border-white/10 bg-[#05070d] text-slate-100" : "border-slate-200 bg-white text-slate-900"
            }`}
          />}
          {!activeTask.interactiveExercise && <><label className={`mt-3 text-[11px] font-semibold ${mutedText}`} htmlFor="practical-prediction">Predict before running</label>
          <textarea
            id="practical-prediction"
            value={prediction}
            onChange={(event) => setPrediction(event.target.value)}
            placeholder="What do you expect your program or solution to do?"
            className={`mt-1 min-h-16 resize-y rounded-lg border p-2 text-xs outline-none focus:border-[#FF4B3E] ${
              isDark ? "border-white/10 bg-[#0b0d14] text-slate-100" : "border-slate-200 bg-white text-slate-900"
            }`}
          />
          <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
            <p className={`text-[10px] ${mutedText}`}>{language ? `${language} practical` : "Guided response activity"} · Suggestions are included in this lesson.</p>
            <button
              type="button"
              onClick={() => void runPractical()}
              disabled={isRunning || !prediction.trim()}
              className={`inline-flex items-center gap-1.5 rounded-lg ${accentBackground} px-3 py-2 text-xs font-bold text-white disabled:cursor-not-allowed disabled:opacity-50`}
            >
              {isRunning ? <LoaderCircle className="h-3.5 w-3.5 animate-spin" /> : <Play className="h-3.5 w-3.5" />}
              {isRunning ? "Running" : codeMode ? "Run and check" : "Submit for review"}
            </button>
          </div></>}
        </div>

        <aside className={`flex min-h-[520px] min-w-0 flex-col gap-3 rounded-xl border p-3 ${surface}`}>
          <div>
            <h3 className={`text-xs font-bold ${darkText}`}>Inline guidance</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {activeTask.hints.map((hint, index) => {
                const revealedCount = revealedHints[activeTask.id] || 0;
                return (
                  <button
                    key={`${activeTask.id}-hint-${index}`}
                    type="button"
                    onClick={() => setRevealedHints((previous) => ({
                      ...previous,
                      [activeTask.id]: Math.max(previous[activeTask.id] || 0, index + 1),
                    }))}
                    className={`rounded-md border px-2 py-1 text-[10px] ${revealedCount > index ? isDark ? "border-amber-400/40 bg-amber-400/10 text-amber-200" : "border-amber-500/40 bg-amber-500/10 text-amber-700" : isDark ? `border-slate-700 ${mutedText}` : `border-slate-300 ${mutedText}`}`}
                  >
                    <Lightbulb className="mr-1 inline h-3 w-3" />Hint {index + 1}
                  </button>
                );
              })}
              {(activeTask.inlineSuggestions || []).map((suggestion) => (
                <button
                  key={suggestion.id}
                  type="button"
                  onClick={() => setRevealedSuggestions((previous) => ({
                    ...previous,
                    [activeTask.id]: [...new Set([...(previous[activeTask.id] || []), suggestion.id])],
                  }))}
                  className={`rounded-md border border-blue-500/30 bg-blue-500/10 px-2 py-1 text-[10px] ${isDark ? "text-blue-200" : "text-blue-700"}`}
                >
                  {suggestion.label}
                </button>
              ))}
            </div>
            {((revealedHints[activeTask.id] || 0) > 0 || (revealedSuggestions[activeTask.id] || []).length > 0) && (
              <div className={`mt-2 space-y-2 text-xs ${mutedText}`}>
                {activeTask.hints.slice(0, revealedHints[activeTask.id]).map((hint, index) => <p key={index}>{hint}</p>)}
                {(activeTask.inlineSuggestions || []).filter((suggestion) => (revealedSuggestions[activeTask.id] || []).includes(suggestion.id)).map((suggestion) => (
                  <div key={suggestion.id} className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-2">
                    <p>{suggestion.text}</p>
                    {suggestion.insertionText && (
                      <button type="button" onClick={() => updateCurrentFile(`${currentCode}${currentCode.endsWith("\n") || !currentCode ? "" : "\n"}${suggestion.insertionText}`)} className={`mt-1 font-semibold ${isDark ? "text-blue-200" : "text-blue-700"}`}>
                        Insert small code suggestion
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="min-h-0 flex-1">
            <h3 className={`text-xs font-bold ${darkText}`}>Run output and checks</h3>
            <pre aria-live="polite" className={`mt-2 h-[min(28vh,220px)] min-h-[150px] overflow-auto whitespace-pre-wrap rounded-lg border p-3 font-mono text-[11px] ${
              isDark ? "border-white/10 bg-[#05070d] text-slate-200" : "border-slate-200 bg-slate-100 text-slate-800"
            }`}>{output || "Your compiler or runtime output will appear here. A successful compile alone does not pass a practical check."}</pre>
            <div className="mt-2 space-y-1">
              {checks.filter((check) => !activeTask.checkIds?.length || activeTask.checkIds.includes(check.id)).map((check) => (
                <p key={check.id} className={`flex items-center gap-1.5 text-[10px] ${checkResults[check.id] ? "text-emerald-700" : mutedText}`}>
                  <CheckCircle2 className="h-3 w-3" /> {checkResults[check.id] ? "Passed" : "Not yet"} · {check.explanation || check.id}
                </p>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <footer className={`flex items-center justify-between rounded-xl border px-4 py-3 text-xs ${surface} ${mutedText}`}>
        <span>Make a change, predict the result, and run the practical checks.</span>
        <span className="shrink-0 font-semibold">{completedCount} of {tasks.length} complete</span>
      </footer>
      </section>
      )}
    </>
  );
}
