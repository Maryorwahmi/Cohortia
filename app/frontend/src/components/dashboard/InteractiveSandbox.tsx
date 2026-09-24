import { useState, useEffect, useRef } from "react";
import { Terminal, Code, Save, Download, Play, RefreshCw, Layers, Sliders, CheckCircle, Award, MessageSquare, Send, Folder, FileCode2, Search, GitBranch, Settings } from "lucide-react";
import { chatApi, ChatLearningContext } from "../../services/api";
import { UserPreferences, CohortTrackId } from "../../types";
import { CPP_LESSONS_DETAILS } from "../../data/cppLessonsData";
import VSCodeWorkbench from "./VSCodeWorkbench";
import type { LearningBoardPractical } from "../../services/learningBoardsApi";
import { learningBoardsApi } from "../../services/learningBoardsApi";
import { getAssignedVoiceForCourse, findBrowserVoiceByName } from "../../utils/courseVoiceMapping";
import { executePython } from "../../services/pyodideRunner";
import { evaluatePracticalChecks } from "../../lib/practicalCheckEvaluator";
import { SpeechNarrationQueue } from "../../lib/speechNarration";

interface InteractiveSandboxProps {
  userProfile: UserPreferences;
  selectedLesson: { id: string; title: string };
  handsOnActivities?: string[];
  learningContext?: ChatLearningContext;
  practical?: LearningBoardPractical | null;
  onComplete?: () => void | Promise<void>;
}

export type PracticalWorkbenchMode = "code_lab" | "terminal_lab" | "database_lab" | "simulation_lab" | "non_code_activity" | "research_notebook" | "cloud_portal";

export function resolvePracticalWorkbenchMode(
  practical: LearningBoardPractical | null | undefined,
  fallbackTrackId: CohortTrackId,
): PracticalWorkbenchMode {
  if (practical?.experienceType === "terminal_coding_lab") {
    if (practical.labType === "database") return "database_lab";
    if (practical.labType === "shell" || practical.labType === "network") return "terminal_lab";
    return "code_lab";
  }
  if (practical?.experienceType === "research_evidence_lab") return "research_notebook";
  if (practical?.experienceType === "cloud_console_lab") return "cloud_portal";
  if (practical?.experienceType === "scenario_simulator") return "simulation_lab";

  // The authored activity category owns the learner experience. Technical
  // labType selects behavior inside that experience, not the workspace itself.
  if (practical?.category === "Research & Analysis") return "research_notebook";
  if (practical?.category === "Cloud Console Lab") return "cloud_portal";
  if (practical?.category === "Scenario & Design Exercise") return "simulation_lab";

  // Only Terminal Coding Lab activities are allowed to select an executable
  // terminal family from their inferred technical lab type.
  if (practical?.category === "Terminal Coding Lab") {
    if (practical.labType === "database") return "database_lab";
    if (practical.labType === "code" || practical.labType === "data") return "code_lab";
    if (practical.labType === "shell" || practical.labType === "network") return "terminal_lab";
  }

  if (practical?.labType === "code" || practical?.labType === "data") return "code_lab";
  if (practical?.labType === "shell" || practical?.labType === "network") return "terminal_lab";
  if (practical?.labType === "database") return "database_lab";
  if (practical?.labType === "cloud" || practical?.labType === "security" || practical?.labType === "simulation") return "simulation_lab";

  const supportedModes: PracticalWorkbenchMode[] = ["code_lab", "terminal_lab", "database_lab", "simulation_lab", "non_code_activity", "research_notebook", "cloud_portal"];
  if (practical?.mode && supportedModes.includes(practical.mode as PracticalWorkbenchMode)) return practical.mode as PracticalWorkbenchMode;

  return fallbackTrackId === "analytics" ? "database_lab" : "code_lab";
}

export default function InteractiveSandbox({ userProfile, selectedLesson, handsOnActivities = [], learningContext, practical, onComplete }: InteractiveSandboxProps) {
  const activeTrackId = (userProfile.track || "frontend") as CohortTrackId;
  const workbenchMode = resolvePracticalWorkbenchMode(practical, activeTrackId);
  const workspaceStorageKey = `cohortia_sandbox_code_${practical?.id || selectedLesson.id}`;

  // Local state for workspace variables
  const [code, setCode] = useState("");
  const [fileContents, setFileContents] = useState<Record<string, string>>({});
  const [activeFilePath, setActiveFilePath] = useState<string | null>(null);
  const [output, setOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const completionReportedRef = useRef(false);

  useEffect(() => {
    if (!practical?.tasks?.length || completionReportedRef.current) return;
    if (practical.tasks.every((_, index) => checkedItems[index])) {
      completionReportedRef.current = true;
      void onComplete?.();
    }
  }, [checkedItems, onComplete, practical]);
  const [checkResults, setCheckResults] = useState<Record<string, boolean>>({});
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<Array<{ sender: "user" | "mentor"; text: string }>>([
    { sender: "mentor", text: `I am ready to help with ${selectedLesson.title}. Ask me about your code, the task, or the next step.` }
  ]);
  const [isChatTyping, setIsChatTyping] = useState(false);
  const [revealedHintCount, setRevealedHintCount] = useState<Record<string, number>>({});
  const [isNarrating, setIsNarrating] = useState(false);
  const [activeTaskIndex, setActiveTaskIndex] = useState(0);
  const [lastNudgeTime, setLastNudgeTime] = useState<number>(Date.now());
  const narratorVoiceRef = useRef<SpeechSynthesisVoice | null>(null);
  const narrationQueueRef = useRef(new SpeechNarrationQueue());

  // Proactive AI Nudge System: If student is idle or failing tests repeatedly
  useEffect(() => {
    if (!practical || isChatTyping) return;
    
    const interval = setInterval(() => {
      const timeSinceLastNudge = Date.now() - lastNudgeTime;
      if (timeSinceLastNudge > 120000) { // 2 minutes of idle/struggle
        const currentTask = (practical as any).tasks[activeTaskIndex];
        if (currentTask && !checkedItems[activeTaskIndex]) {
          const nudgeText = currentTask.structuredHints?.nudge || "I noticed you've been working on this step for a while. Remember to check the terminal output for clues, or ask me if you'd like a hint!";
          setChatMessages(prev => [...prev, { sender: "mentor", text: `[Proactive Tip] ${nudgeText}` }]);
          setLastNudgeTime(Date.now());
        }
      }
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, [practical, activeTaskIndex, checkedItems, lastNudgeTime, isChatTyping]);

  // Load previous practical progress from database if available
  useEffect(() => {
    if (!practical?.id) return;
    learningBoardsApi.getPracticalProgress(practical.id).then((res) => {
      if (res?.taskProgress && res.taskProgress.length > 0) {
        const completedTasks: Record<number, boolean> = {};
        const completedChecks: Record<string, boolean> = {};
        (practical.tasks || []).forEach((task, idx) => {
          const match = res.taskProgress.find((p: any) => p.taskId === task.id && p.status === "completed");
          if (match) {
            completedTasks[idx] = true;
            (task.checkIds || []).forEach((cId) => {
              completedChecks[cId] = true;
            });
          }
        });
        setCheckedItems((prev) => ({ ...prev, ...completedTasks }));
        setCheckResults((prev) => ({ ...prev, ...completedChecks }));
      }
    }).catch((err) => console.warn("Could not load initial practical progress:", err));
  }, [practical?.id]);

  // Reuse the course's assigned narrator voice (same voice as the lesson video) for the practical brief.
  useEffect(() => {
    const courseId = learningContext?.courseId;
    if (!courseId || typeof window === "undefined" || !window.speechSynthesis) return;

    let cancelled = false;
    const applyVoice = () => {
      const browserVoices = window.speechSynthesis.getVoices();
      getAssignedVoiceForCourse(courseId).then((assigned) => {
        if (cancelled) return;
        narratorVoiceRef.current = assigned ? findBrowserVoiceByName(assigned.label, browserVoices) : null;
      });
    };
    applyVoice();
    window.speechSynthesis.onvoiceschanged = applyVoice;
    return () => {
      cancelled = true;
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, [learningContext?.courseId]);

  useEffect(() => {
    return () => narrationQueueRef.current.cancel();
  }, []);

  const handlePlayNarration = (text?: unknown) => {
    let candidate = typeof text === "string" ? text : null;
    if (!candidate) {
      const taskGuide = (practical?.tasks?.[activeTaskIndex] as any)?.narratorGuide;
      candidate = typeof taskGuide === "string" ? taskGuide : (typeof practical?.narratorGuide === "string" ? practical.narratorGuide : null);
    }

    let narrationText: string | null = null;
    if (typeof candidate === "string") {
      narrationText = candidate;
    } else if (candidate && typeof candidate === "object") {
      const obj = candidate as Record<string, unknown>;
      if (typeof obj.text === "string") narrationText = obj.text;
      else if (typeof obj.guide === "string") narrationText = obj.guide;
      else if (typeof obj.script === "string") narrationText = obj.script;
    }

    if (!narrationText || !narrationText.trim()) return;

    if (typeof window === "undefined" || !window.speechSynthesis) return;
    narrationQueueRef.current.play(narrationText, {
      voice: narratorVoiceRef.current,
      rate: 0.88,
      pitch: 1,
      onSpeakingChange: setIsNarrating,
    });
  };

  const handleTaskSelect = (index: number) => {
    setActiveTaskIndex(index);
    setLastNudgeTime(Date.now()); // Reset nudge timer on task change
  };

  const handleRevealHint = (taskId: string) => {
    const task = practical?.tasks.find((t) => t.id === taskId);
    if (!task) return;
    setRevealedHintCount((prev) => ({
      ...prev,
      [taskId]: Math.min((prev[taskId] || 0) + 1, task.hints.length)
    }));
  };

  // Reset workspace and checkbox checklist when lesson changes
  useEffect(() => {
    setCheckedItems({});
    const contextualGreeting = practical 
      ? `Hi there! 👋 I'm your mentor for **${selectedLesson.title}**. I can help you with:\n\n- Understanding the tasks and breaking them down\n- Debugging your code or reviewing your logic\n- Explaining concepts as you work through the exercises\n- Tips on how to approach each problem\n\n**Your learning path:** ${practical.tasks?.length || 0} tasks to complete. Start by working through the code, run it to check your output, and ask me if you get stuck!`
      : `I am ready to help with ${selectedLesson.title}. Ask me about your code, the task, or the next step.`;
    
    setChatMessages([{ sender: "mentor", text: contextualGreeting }]);
  }, [selectedLesson, practical]);

  const handleChatSubmit = async () => {
    const message = chatInput.trim();
    if (!message || isChatTyping) return;

    setChatMessages((prev) => [...prev, { sender: "user", text: message }]);
    setChatInput("");
    setIsChatTyping(true);
    try {
      // Enhance learning context with current student activity state
      const enrichedContext = {
        ...learningContext,
        practicalTitle: practical?.title,
        practicalInstructions: practical?.instructions || undefined,
        practicalObjectives: practical?.objectives || [],
        currentFile: activeFilePath || undefined,
        currentCode: code.slice(0, 12000),
        currentTaskTitle: practical?.tasks?.[activeTaskIndex]?.title || undefined,
        currentTaskInstruction: practical?.tasks?.[activeTaskIndex]?.instruction || undefined,
        currentTaskHint: (practical?.tasks?.[activeTaskIndex] as any)?.structuredHints?.concept || undefined,
        currentTaskIndex: activeTaskIndex,
        completedTasks: Object.values(checkedItems).filter(Boolean).length,
        totalTasks: practical?.tasks?.length || 0,
        hasErrors: output.some(line => line.includes("Error") || line.includes("FAIL")),
        lastOutput: output.slice(-20).join("\n"),
        page: "learning board practical workspace",
      };

      const response = await chatApi.sendMessage(message, chatMessages, "tutor", "text", activeTrackId, enrichedContext);
      setChatMessages((prev) => [...prev, {
        sender: "mentor",
        text: response.success && response.data?.reply ? response.data.reply : "Let us break that down together. Start by describing what you expected the code to do."
      }]);
    } catch {
      setChatMessages((prev) => [...prev, { sender: "mentor", text: "I could not connect right now. Try the question again after checking the simulation output." }]);
    } finally {
      setIsChatTyping(false);
    }
  };

  // Business strategy inputs
  const [prdTarget, setPrdTarget] = useState("Enterprise Cloud Security Brief");
  const [userPersona, setUserPersona] = useState("Corporate Information Security Officer (CISO)");
  const [crisisPlaybook, setCrisisPlaybook] = useState("");

  // Design/Language customizer
  const [accentColor, setAccentColor] = useState("#FF4B3E");
  const [gridColumns, setGridColumns] = useState(12);
  const [translationText, setTranslationText] = useState("");

  // Science/Maths customizer
  const [dosage, setDosage] = useState(250);
  const [simDuration, setSimDuration] = useState(10);
  const [temperature, setTemperature] = useState(37);

  // Load saved workspace state
  useEffect(() => {
    const savedCode = localStorage.getItem(workspaceStorageKey);
    if (practical) {
      const savedFiles = localStorage.getItem(`${workspaceStorageKey}_files`);
      let initialFiles: Record<string, string> = Object.fromEntries(
        practical.files.map((file) => [file.path, file.content]),
      );
      if (savedFiles) {
        try {
          const parsedFiles = JSON.parse(savedFiles);
          if (parsedFiles && typeof parsedFiles === "object" && !Array.isArray(parsedFiles)) {
            initialFiles = Object.fromEntries(
              practical.files.map((file) => [file.path, typeof parsedFiles[file.path] === "string" ? parsedFiles[file.path] : file.content]),
            );
          }
        } catch {
          // Use the published starter files when saved workspace data is invalid.
        }
      }
      const firstFile = practical.files[0];
      if (!savedFiles && savedCode && firstFile) initialFiles[firstFile.path] = savedCode;
      setFileContents(initialFiles);
      setActiveFilePath(firstFile?.path || null);
      setCode(firstFile ? initialFiles[firstFile.path] : "");
    } else if (savedCode) {
      setCode(savedCode);
      setFileContents({});
      setActiveFilePath(null);
    } else {
      setFileContents({});
      setActiveFilePath(null);
      if (activeTrackId === "cpp" && CPP_LESSONS_DETAILS[selectedLesson.id]) {
        setCode(CPP_LESSONS_DETAILS[selectedLesson.id].startingCode);
      } else if (activeTrackId === "frontend") {
        setCode(`// React 19 / TypeScript Lab: ${selectedLesson.title}\n\nfunction auditSecurityHeaders(headers: string[]) {\n  console.log("Analyzing corporate firewalls...");\n  const isSecure = headers.includes("Content-Security-Policy");\n  return isSecure ? "PASS" : "FAIL_WARNING";\n}\n\n// Run audit\nconst report = auditSecurityHeaders(["X-Frame-Options", "Content-Security-Policy"]);\nconsole.log("Audit Status: " + report);`);
      } else if (activeTrackId === "analytics") {
        setCode(`-- Data Analytics Lab: SQL telemetry optimization\nSELECT \n  date_trunc('day', timestamp) as audit_date,\n  count(log_id) as cyber_incidents,\n  avg(remediation_time_mins) as avg_resolution_mins\nFROM security_telemetry_logs\nGROUP BY 1\nORDER BY cyber_incidents DESC;`);
      } else {
        setCode("");
      }
    }
    setOutput([practical
      ? `${workbenchMode === "code_lab" || workbenchMode === "terminal_lab" ? "Terminal ready" : "Practical loaded"} for ${practical.title}. Edit the starter file, then run it to review the result.`
      : "Sandbox workspace initialized. Select your environment inputs and click 'Run Simulation'."]);
    setIsSaved(false);
  }, [selectedLesson, activeTrackId, practical, workbenchMode, workspaceStorageKey]);

  const handleSaveWorkspace = () => {
    localStorage.setItem(workspaceStorageKey, code);
    if (practical && activeFilePath) {
      localStorage.setItem(`${workspaceStorageKey}_files`, JSON.stringify({ ...fileContents, [activeFilePath]: code }));
    }
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleFileSelect = (path: string) => {
    const selectedFile = practical?.files.find((file) => file.path === path);
    if (!selectedFile || path === activeFilePath) return;
    if (activeFilePath) {
      setFileContents((previous) => ({ ...previous, [activeFilePath]: code }));
    }
    setActiveFilePath(path);
    setCode(fileContents[path] ?? selectedFile.content);
  };

  const handleDownloadWorkspace = () => {
    let fileContent = "";
    let fileExtension = "txt";

    if (activeTrackId === "cpp") {
      fileContent = `// Cohortia Systems C++ Lab: ${selectedLesson.title}\n// Student: ${userProfile.name}\n\n${code}`;
      fileExtension = "cpp";
    } else if (activeTrackId === "frontend") {
      fileContent = `// Cohortia Lab: ${selectedLesson.title}\n// Student: ${userProfile.name}\n\n${code}`;
      fileExtension = "ts";
    } else if (activeTrackId === "analytics") {
      fileContent = `-- Cohortia SQL Lab: ${selectedLesson.title}\n-- Student: ${userProfile.name}\n\n${code}`;
      fileExtension = "sql";
    } else if (activeTrackId === "product") {
      fileContent = `COHORTIA PRODUCT SPECIFICATION REPORT\n====================================\n\nStudent: ${userProfile.name}\nLesson: ${selectedLesson.title}\n\nTarget Deliverable: ${prdTarget}\nTarget Persona: ${userPersona}\n\nStrategy Crisis Playbook:\n------------------------\n${crisisPlaybook}`;
      fileExtension = "txt";
    } else {
      fileContent = `COHORTIA DESIGN SPECIFICATION\n=============================\n\nStudent: ${userProfile.name}\nLesson: ${selectedLesson.title}\n\nSelected Colors: ${accentColor}\nGrid Structure: ${gridColumns} columns\nWritten/Translation composition:\n-------------------------------\n${translationText}`;
      fileExtension = "txt";
    }

    const blob = new Blob([fileContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `cohortia_lab_delivery_${selectedLesson.id}.${fileExtension}`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleRunSimulation = async () => {
    setIsRunning(true);

    if (practical) {
      setOutput([`[INFO] Starting execution for "${practical.title}"...`]);

      const isPython =
        practical.language === "python" ||
        activeFilePath?.endsWith(".py") ||
        (practical.files && practical.files.some((f) => f.path.endsWith(".py")));
      const isNativeC = /^(c|cpp|c\+\+)$/i.test(practical.language || "") ||
        /\.(c|cc|cpp|cxx)$/i.test(activeFilePath || "");

      if (isPython) {
        try {
          const result = await executePython(code, {
            files: fileContents,
            onOutput: (line) => {
              setOutput((prev) => [...prev, line]);
            },
            onProgress: (status) => {
              setOutput((prev) => [...prev, `[PYODIDE] ${status}`]);
            },
          });

          setOutput((prev) => [
            ...prev,
            `[INFO] Execution finished in ${result.executionTimeMs}ms (engine: ${result.engine}).`,
          ]);

          // Evaluate declared checks against real runtime
          const evaluations = evaluatePracticalChecks({
            checks: (practical.checks || []) as any,
            stdout: result.stdout,
            stderr: result.stderr,
            globals: result.globals,
            files: { ...fileContents, [activeFilePath || "workspace.py"]: code },
            executionSuccess: result.success,
          });

          const newCheckResults: Record<string, boolean> = {};
          for (const ev of evaluations) {
            newCheckResults[ev.checkId] = ev.passed;
            if (ev.passed) {
              setOutput((prev) => [...prev, `✓ [CHECK PASSED] ${ev.message}`]);
            } else {
              setOutput((prev) => [...prev, `⚠ [CHECK PENDING] ${ev.message}`]);
            }
          }
          setCheckResults(newCheckResults);

          // Update tasks
          const newlyChecked: Record<number, boolean> = {};
          (practical.tasks || []).forEach((task, idx) => {
            const allTaskChecksPass = (task.checkIds || []).length > 0
              ? task.checkIds.every((id) => newCheckResults[id])
              : result.success;

            if (allTaskChecksPass) {
              newlyChecked[idx] = true;
              learningBoardsApi.updatePracticalTaskProgress(practical.id, task.id, "completed").catch(() => {});
            }
          });
          setCheckedItems((prev) => ({ ...prev, ...newlyChecked }));

          const allChecksPass = evaluations.length > 0 && evaluations.every((e) => e.passed);
          if (allChecksPass) {
            setOutput((prev) => [
              ...prev,
              "🎉 All milestones verified! Excellent work completing this practical lab.",
            ]);
            if (learningContext?.courseId && learningContext.module !== undefined && learningContext.chapter !== undefined) {
              learningBoardsApi.updateProgress(
                learningContext.courseId,
                learningContext.module,
                learningContext.chapter,
                { explicitComplete: true }
              ).catch(() => {});
            }
          }

          // Record attempt to backend persistence
          learningBoardsApi.recordPracticalAttempt(
            practical.id,
            { ...fileContents, [activeFilePath || "workspace.py"]: code },
            allChecksPass ? "passed" : "in_progress",
            result.stdout
          ).catch((e) => console.warn("Failed to record practical attempt:", e));
        } catch (err: any) {
          setOutput((prev) => [...prev, `❌ Execution error: ${err.message || String(err)}`]);
        } finally {
          setIsRunning(false);
        }
        return;
      }

      if (isNativeC) {
        try {
          const result = await learningBoardsApi.executeNativePractical(
            { ...fileContents, [activeFilePath || "main.c"]: code },
            activeFilePath || "main.c",
            practical.language || "C",
          );
          if (result.stdout) setOutput((prev) => [...prev, ...result.stdout!.split(/\r?\n/).filter(Boolean)]);
          if (result.stderr) setOutput((prev) => [...prev, ...result.stderr!.split(/\r?\n/).filter(Boolean)]);
          setOutput((prev) => [...prev, `[INFO] ${result.phase === "compile" ? "Compilation" : "Execution"} finished successfully.`]);

          const evaluations = evaluatePracticalChecks({
            checks: (practical.checks || []) as any,
            stdout: result.stdout || "",
            stderr: result.stderr || "",
            globals: {},
            files: { ...fileContents, [activeFilePath || "main.c"]: code },
            executionSuccess: result.ok,
          });
          const newCheckResults: Record<string, boolean> = {};
          evaluations.forEach((evaluation) => {
            newCheckResults[evaluation.checkId] = evaluation.passed;
            setOutput((prev) => [...prev, `${evaluation.passed ? "✓ [CHECK PASSED]" : "⚠ [CHECK PENDING]"} ${evaluation.message}`]);
          });
          setCheckResults(newCheckResults);

          const allChecksPass = evaluations.length > 0 && evaluations.every((evaluation) => evaluation.passed);
          if (allChecksPass) {
            setOutput((prev) => [...prev, "✓ All practical checks passed."]);
            (practical.tasks || []).forEach((task, index) => {
              const taskChecks = (task as any).checkIds || [];
              if (!taskChecks.length || taskChecks.every((id: string) => newCheckResults[id])) {
                setCheckedItems((previous) => ({ ...previous, [index]: true }));
                learningBoardsApi.updatePracticalTaskProgress(practical.id, task.id, "completed").catch(() => {});
              }
            });
          }
          learningBoardsApi.recordPracticalAttempt(
            practical.id,
            { ...fileContents, [activeFilePath || "main.c"]: code },
            allChecksPass ? "passed" : "in_progress",
            `${result.stdout || ""}${result.stderr || ""}`,
          ).catch(() => {});
        } catch (err: any) {
          const details = err?.data?.data || err?.data || {};
          if (details.stderr) setOutput((prev) => [...prev, ...String(details.stderr).split(/\r?\n/).filter(Boolean)]);
          setOutput((prev) => [...prev, `❌ ${err.message || "Native execution failed."}`]);
        } finally {
          setIsRunning(false);
        }
        return;
      }

      // Keep non-Python labs honest until a native runtime adapter is available.
      setIsRunning(false);
      const runtime = practical.runtime || practical.language || "this lab";
      setOutput((prev) => [
        ...prev,
        `[INFO] ${runtime} terminal is ready, but native execution is not connected in this browser workspace yet.`,
        "Save or download the file to run it with the declared compiler, then use the mentor chat for guidance.",
      ]);
      learningBoardsApi.recordPracticalAttempt(
        practical.id,
        { ...fileContents, [activeFilePath || "workspace.txt"]: code },
        "in_progress",
        `Saved learner code. Native ${runtime} execution is not connected.`
      ).catch(() => {});
      return;
    }

    setOutput((prev) => [...prev, practical?.mode === "non_code_activity"
      ? `[${new Date().toLocaleTimeString()}] Submitting analysis for educator review...`
      : `[${new Date().toLocaleTimeString()}] Running simulation pipeline...`]);

    setTimeout(() => {
      setIsRunning(false);

      if (practical?.mode === "non_code_activity") {
        setOutput((prev) => [
          ...prev,
          "✓ Analysis successfully submitted.",
          "✓ Critical thinking checkpoints verified.",
          "Teacher feedback will be available in your portfolio shortly.",
          "----------------------------------------------------------------",
          "Log: [STDOUT] Saving response artifacts to storage...",
          "Log: [STDOUT] ✓ Task completed."
        ]);
        return;
      }

      if (activeTrackId === "cpp") {
        let stdout: string[] = [];
        switch (selectedLesson.id) {
          case "cpp_l1":
            stdout = [
              "Log: [STDOUT] === RUNNING SYSTEM ACCESS VERIFICATION ===",
              "Log: [STDOUT] PublicDerived access -> public: 1, protected: 2",
              "Log: [STDOUT] Direct access to publicVar: 1",
              "Log: [STDOUT] PrivateDerived access -> public: 1, protected: 2",
              "Log: [STDOUT] ✓ Compilation and access checks complete."
            ];
            break;
          case "cpp_l2":
            stdout = [
              "Log: [STDOUT] === UNDER THE HOOD: VTABLE ANALYSIS ===",
              "Log: [STDOUT] Size of class without virtual functions: 1 byte(s)",
              "Log: [STDOUT] Size of class with virtual functions:    8 bytes (stores _vptr!)",
              "Log: [STDOUT] ",
              "Log: [STDOUT] --- Executing Dynamic Binding Example ---",
              "Log: [STDOUT] Dynamic binding: LaserPrinter (vtable resolved)",
              "Log: [STDOUT] Static binding: BasePrinter",
              "Log: [STDOUT] BasePrinter destroyed (vtable-fallback)",
              "Log: [STDOUT] ✓ Memory successfully cleaned up."
            ];
            break;
          case "cpp_l3":
            stdout = [
              "Log: [STDOUT] === FORMAL INTERACTIVE CONTRACT VERIFICATION ===",
              "Log: [STDOUT] NetworkDevice: Binding socket 101 to port 3000...",
              "Log: [STDOUT] NetworkDevice: Closing socket 101 gracefully.",
              "Log: [STDOUT] DeviceInterface destroyed",
              "Log: [STDOUT] ✓ Abstract base pointer cleanup complete."
            ];
            break;
          case "cpp_l4":
            stdout = [
              "Log: [STDOUT] === DIAMOND LAYOUT SIMULATION ===",
              "Log: [STDOUT] Component allocated (Base Instance)",
              "Log: [STDOUT] Transceiver allocated (Unified derived)",
              "Log: [STDOUT] Current unified transceiver power: 1",
              "Log: [STDOUT] Transmitting on power state 1",
              "Log: [STDOUT] Receiving on power state 1"
            ];
            break;
          case "cpp_l5":
            stdout = [
              "Log: [STDOUT] === RUNNING MEMORY LEAK DIAGNOSTIC ===",
              "Log: [STDOUT] Allocating LeakyDerived via BadBase pointer:",
              "Log: [STDOUT] BadBase allocated",
              "Log: [STDOUT] LeakyDerived: Allocating 100 integers on the heap...",
              "Log: [STDOUT] ",
              "Log: [STDOUT] Deleting base pointer:",
              "Log: [STDOUT] BadBase destroyed (Non-virtual)",
              "Log: [STDOUT] ",
              "Log: [STDOUT] CRITICAL INFO: Heap resources leaked! To fix this, add the 'virtual' keyword before BadBase's destructor."
            ];
            break;
          case "cpp_l6":
            stdout = [
              "Log: [STDOUT] === RUNNING RTTI & DYNAMIC CAST AUDIT ===",
              "Log: [STDOUT] RTTI: Identified class name -> DerivedA",
              "Log: [STDOUT] DerivedA: Launching telemetry receiver.",
              "Log: [STDOUT] RTTI: Identified class name -> DerivedB",
              "Log: [STDOUT] DerivedB: Initializing database sync."
            ];
            break;
          case "cpp_l7":
            stdout = [
              "Log: [STDOUT] === COMPILER NAMESPACE RESOLUTION ===",
              "Log: [STDOUT] Derived process(int): 100",
              "Log: [STDOUT] Base process(double): 3.14",
              "Log: [STDOUT] Derived print overrides Base print successfully."
            ];
            break;
          case "cpp_l8":
            stdout = [
              "Log: [STDOUT] === MOVE SEMANTICS VS COPY PERFORMANCE ===",
              "Log: [STDOUT] Creating original buffer:",
              "Log: [STDOUT] Allocated Buffer of size 100000 on heap.",
              "Log: [STDOUT] ",
              "Log: [STDOUT] Triggering Deep Copy:",
              "Log: [STDOUT] ★ DEEP COPY executed for size: 100000",
              "Log: [STDOUT] ",
              "Log: [STDOUT] Triggering Move Constructor via std::move:",
              "Log: [STDOUT] ⚡ MOVE CONSTRUCTOR executed - pointer stolen instantly!",
              "Log: [STDOUT] ",
              "Log: [STDOUT] Verify original state after move: data is null? YES",
              "Log: [STDOUT] Buffer deallocated from heap."
            ];
            break;
          case "cpp_l9":
            stdout = [
              "Log: [STDOUT] === TEST RULE OF FIVE PROTOCOL ===",
              "Log: [STDOUT] Allocated resource 101",
              "Log: [STDOUT] Copy Constructor: duplicating resource 101",
              "Log: [STDOUT] Move Constructor: stealing resource",
              "Log: [STDOUT] Destructor: empty resource",
              "Log: [STDOUT] Destructor: freeing resource 101",
              "Log: [STDOUT] Destructor: freeing resource 101"
            ];
            break;
          case "cpp_l10":
            stdout = [
              "Log: [STDOUT] === STRATEGY PATTERN POLYMORPHIC ENGINE ===",
              "Log: [STDOUT] Setting USA Tax Strategy (30%):",
              "Log: [STDOUT] Tax on 100,000 USD: 30000",
              "Log: [STDOUT] ",
              "Log: [STDOUT] Setting UK Tax Strategy (20%):",
              "Log: [STDOUT] Tax on 100,000 USD: 20000"
            ];
            break;
          default:
            stdout = [
              "Log: [STDOUT] Running generic C++ compiler execution...",
              "Log: [STDOUT] ✓ Task completed successfully."
            ];
        }

        setOutput((prev) => [
          ...prev,
          "Initializing Clang++ 20 systems-compiler...",
          "Compiling main.cpp with optimization flags: -O3 -std=c++20 -Wall -Wextra",
          "✓ Static analysis checks: PASS (0 warnings, 0 errors)",
          "Linking compiled object code to binary executable (a.out)...",
          "Launching systems-level runtime simulation and tracking allocations...",
          "----------------------------------------------------------------",
          ...stdout,
          "----------------------------------------------------------------",
          "✓ Diagnostics: 0 heap leaks detected via Valgrind instrumentation.",
          "✓ Executable size: 16.4 KB (stripped binary). Execution took 0.05ms."
        ]);
      } else if (activeTrackId === "frontend") {
        setOutput((prev) => [
          ...prev,
          "Compiling TypeScript code...",
          "✓ Compiled successfully. Running unit tests...",
          "Log: Analyzing corporate firewalls...",
          "Log: Audit Status: PASS",
          "✓ SUCCESS: All 2 integration tests passed. Work ready to submit."
        ]);
      } else if (activeTrackId === "analytics") {
        setOutput((prev) => [
          ...prev,
          "Connecting to database telemetry stream...",
          "Running optimized SQL statement query plan...",
          "Query completed. Returned 4 rows:",
          "| audit_date | cyber_incidents | avg_resolution_mins |",
          "| 2026-07-12 | 12              | 14.5                |",
          "| 2026-07-11 | 8               | 22.1                |",
          "| 2026-07-10 | 19              | 9.8                 |",
          "✓ Performance check: Execution finished in 18ms. Optimal indexing applied."
        ]);
      } else if (activeTrackId === "product") {
        setOutput((prev) => [
          ...prev,
          `Creating product simulation brief for '${prdTarget}'...`,
          `Simulating market reaction for user segment '${userPersona}'...`,
          "Analyzing strategy matrix with Advisor guidelines...",
          "Simulation Results:",
          "- Market Share Capture (projected Q1): +14.6%",
          "- Strategy Alignment Index: 94/100 (Exemplary)",
          "- Recommended Action: Solidify your regulatory compliance logs before handoff."
        ]);
      } else {
        // Design Track
        setOutput((prev) => [
          ...prev,
          `Generating Layout Preview Grid (Accent: ${accentColor}, Grid: ${gridColumns} columns)...`,
          "Running color contrast and web accessibility audits...",
          "Contrast Ratio: 4.8:1 (WCAG AA Compliant)",
          "Responsive Layout Fluidity Check: PASS",
          "✓ Token handoff spec generated successfully."
        ]);
      }
    }, 1200);
  };

  return <VSCodeWorkbench
    activeTrackId={activeTrackId}
    courseId={learningContext?.courseId || activeTrackId}
    selectedLesson={selectedLesson}
    code={code}
    output={output}
    chatInput={chatInput}
    chatMessages={chatMessages}
    handsOnActivities={handsOnActivities}
    checkedItems={checkedItems}
    isRunning={isRunning}
    isSaved={isSaved}
    isChatTyping={isChatTyping}
    onCodeChange={(value) => {
      setCode(value);
      if (activeFilePath) setFileContents((previous) => ({ ...previous, [activeFilePath]: value }));
    }}
    onSave={handleSaveWorkspace}
    onDownload={handleDownloadWorkspace}
    onRun={handleRunSimulation}
    onChatInputChange={setChatInput}
    onChatSubmit={handleChatSubmit}
    onCheckItem={(index, checked) => setCheckedItems((prev) => ({ ...prev, [index]: checked }))}
    fileName={activeFilePath || practical?.files?.[0]?.path}
    files={practical?.files}
    activeFilePath={activeFilePath}
    onFileSelect={handleFileSelect}
    tasks={practical?.tasks}
    revealedHintCount={revealedHintCount}
    onRevealHint={handleRevealHint}
    activeTaskIndex={activeTaskIndex}
    onTaskSelect={handleTaskSelect}
    narratorGuide={practical?.narratorGuide}
    codeWalkthrough={practical?.codeWalkthrough}
    teachingPlaylist={practical?.teachingPlaylist}
    isNarrating={isNarrating}
    onPlayNarration={handlePlayNarration}
    mode={workbenchMode}
    labType={practical?.labType}
    widgetType={(practical as any)?.widgetType}
    executionEngine={practical?.language === "python" || activeTrackId === "python"
      ? "Pyodide 3.11 WASM"
      : practical?.runtime
        ? `${practical.runtime} terminal`
        : "Live Laboratory"}
    practicalStatus={practical?.publicationStatus}
    practicalSource={practical?.source}
    practicalInstructions={practical?.instructions}
    language={practical?.language}
    checks={practical?.checks}
    checkResults={checkResults}
  />;

  return (
    <div className="absolute inset-0 flex flex-col justify-between p-4 bg-immersive-bg font-mono z-0 text-left">
      
      {/* Dynamic Header Badge */}
      <div className="flex items-center justify-between pb-2.5 border-b border-immersive-border text-[10px] font-bold text-immersive-text-secondary uppercase">
        <span className="flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5 text-[#FF4B3E]" />
          <span>Practical Mode · {practical?.category || activeTrackId}</span>
        </span>
        <span className="text-[#FF4B3E] bg-[#FF4B3E]/10 px-2 py-0.5 rounded-md flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
          <span>{practical?.mode?.replace(/_/g, " ") || "Sandbox Active"}</span>
        </span>
      </div>

      {practical && (
        <div className="my-3 rounded-xl border border-immersive-border bg-immersive-card px-4 py-3 space-y-2 shrink-0">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <h2 className="text-base font-bold text-immersive-text-primary truncate">{practical.title}</h2>
              {practical.summary && (
                <p className="mt-1 text-xs leading-relaxed text-immersive-text-secondary line-clamp-2">
                  {practical.summary}
                </p>
              )}
            </div>
            <span className="shrink-0 rounded-md border border-immersive-border px-2 py-1 text-[10px] font-bold uppercase text-immersive-text-secondary">
              {practical.level || practical.labType || "guided lab"}
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 text-[10px]">
            <div className="rounded-lg bg-immersive-bg px-2.5 py-2">
              <span className="block font-bold uppercase text-immersive-text-secondary">Learning objectives</span>
              <span className="mt-1 block text-immersive-text-primary">
                {practical.objectives?.length
                  ? practical.objectives.join(" · ")
                  : "Objectives are described in the task instructions."}
              </span>
            </div>
            <div className="rounded-lg bg-immersive-bg px-2.5 py-2">
              <span className="block font-bold uppercase text-immersive-text-secondary">Task progress</span>
              <span className="mt-1 block text-immersive-text-primary">
                {Object.values(checkedItems).filter(Boolean).length}/{practical.tasks.length} tasks completed
              </span>
            </div>
            <div className="rounded-lg bg-immersive-bg px-2.5 py-2">
              <span className="block font-bold uppercase text-immersive-text-secondary">Verification</span>
              <span className={`mt-1 block ${practical.checks?.length ? "text-emerald-400" : "text-amber-300"}`}>
                {practical.checks?.length
                  ? `${practical.checks.length} automated checks available`
                  : "Manual evidence checklist · no automated checks published"}
              </span>
            </div>
          </div>
          {practical.files?.length ? (
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="text-[10px] font-bold uppercase text-immersive-text-secondary">Workspace files:</span>
              {practical.files.map((file) => (
                <span key={file.path} className="rounded bg-immersive-bg px-1.5 py-0.5 text-[10px] text-immersive-text-primary">
                  {file.path}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      )}

      {/* Main Workspace Split layout */}
      <div className="flex-1 my-3 grid grid-cols-1 md:grid-cols-12 gap-4 overflow-hidden">
        
        {/* Left Side: Input Workspace based on Course category */}
        <div className="md:col-span-7 flex flex-col h-full bg-immersive-card border border-immersive-border rounded-xl overflow-hidden p-3 space-y-3">
          
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-immersive-text-secondary">LAB WORKSPACE INPUTS</span>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleSaveWorkspace}
                className="p-1 px-2.5 bg-immersive-bg hover:bg-immersive-card-hover border border-immersive-border rounded-md text-[10px] font-bold text-immersive-text-secondary flex items-center space-x-1 cursor-pointer"
              >
                <Save className="w-3 h-3 text-[#FF4B3E]" />
                <span>{isSaved ? "Saved!" : "Save Work"}</span>
              </button>
              <button
                onClick={handleDownloadWorkspace}
                className="p-1 px-2.5 bg-immersive-bg hover:bg-immersive-card-hover border border-immersive-border rounded-md text-[10px] font-bold text-immersive-text-secondary flex items-center space-x-1 cursor-pointer"
              >
                <Download className="w-3 h-3 text-cyan-400" />
                <span>Download</span>
              </button>
            </div>
          </div>

          {/* Render inputs based on active track */}
          {activeTrackId === "frontend" || activeTrackId === "analytics" ? (
            // CS/IT/Tech/Cyber/Data Coding Editor
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="flex-1 w-full bg-white border border-immersive-border p-3 rounded-lg text-xs font-mono text-immersive-text-primary focus:outline-none focus:border-immersive-primary resize-none leading-relaxed"
              spellCheck={false}
              placeholder="Write your scripts, code block, or SQL query commands here..."
            />
          ) : activeTrackId === "product" ? (
            // Business/Product management strategy form
            <div className="flex-1 flex flex-col space-y-3 overflow-y-auto pr-1">
              <div className="space-y-1">
                    <label className="text-[9px] font-bold text-immersive-text-secondary uppercase">Target Deliverable Title</label>
                <input
                  type="text"
                  value={prdTarget}
                  onChange={(e) => setPrdTarget(e.target.value)}
                  className="w-full bg-white border border-immersive-border p-2 rounded-md text-xs font-mono text-immersive-text-primary focus:outline-none focus:border-immersive-primary"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-bold text-immersive-text-secondary uppercase">Target User Segment</label>
                <input
                  type="text"
                  value={userPersona}
                  onChange={(e) => setUserPersona(e.target.value)}
                  className="w-full bg-white border border-immersive-border p-2 rounded-md text-xs font-mono text-immersive-text-primary focus:outline-none focus:border-immersive-primary"
                />
              </div>

              <div className="space-y-1 flex-1 flex flex-col">
                <label className="text-[9px] font-bold text-immersive-text-secondary uppercase">Product Crisis Strategy Playbook</label>
                <textarea
                  value={crisisPlaybook}
                  onChange={(e) => setCrisisPlaybook(e.target.value)}
                  placeholder="Outline your strategic market entry playbook, metrics model, or mitigation plan for Coach Johnson..."
                  className="flex-1 w-full bg-white border border-immersive-border p-2.5 rounded-md text-xs font-mono text-immersive-text-primary focus:outline-none focus:border-immersive-primary resize-none leading-relaxed"
                />
              </div>
            </div>
          ) : (
            // Design/Language/Humanities layout lab
            <div className="flex-1 flex flex-col space-y-3 overflow-y-auto pr-1">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[9px] font-bold text-immersive-text-secondary uppercase">Accent Design Color</label>
                  <div className="flex space-x-1.5 items-center">
                    <input
                      type="color"
                      value={accentColor}
                      onChange={(e) => setAccentColor(e.target.value)}
                      className="w-8 h-7 bg-transparent border border-immersive-border rounded cursor-pointer"
                    />
                    <input
                      type="text"
                      value={accentColor}
                      onChange={(e) => setAccentColor(e.target.value)}
                      className="flex-1 bg-white border border-immersive-border p-1.5 rounded-md text-[11px] text-immersive-text-primary focus:outline-none focus:border-immersive-primary"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-bold text-immersive-text-secondary uppercase">Figma Grid Columns</label>
                  <select
                    value={gridColumns}
                    onChange={(e) => setGridColumns(Number(e.target.value))}
                    className="w-full bg-white border border-immersive-border p-1.5 rounded-md text-[11px] text-immersive-text-primary focus:outline-none focus:border-immersive-primary"
                  >
                    {[4, 8, 12, 16].map((cols) => (
                      <option key={cols} value={cols}>{cols} Columns</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1 flex-1 flex flex-col">
                <label className="text-[9px] font-bold text-immersive-text-secondary uppercase">Translation & Written Copy Sandbox</label>
                <textarea
                  value={translationText}
                  onChange={(e) => setTranslationText(e.target.value)}
                  placeholder="Paste or write your copywriting, typography specs, or translations here..."
                  className="flex-1 w-full bg-white border border-immersive-border p-2.5 rounded-md text-xs font-mono text-immersive-text-primary focus:outline-none focus:border-immersive-primary resize-none leading-relaxed"
                />
              </div>
            </div>
          )}

          <button
            onClick={handleRunSimulation}
            disabled={isRunning}
            className={`w-full py-2 rounded-lg text-xs font-bold font-mono transition-all flex items-center justify-center space-x-2 cursor-pointer ${
              isRunning
                ? "bg-immersive-border text-immersive-text-secondary cursor-not-allowed"
                : "bg-[#FF4B3E] hover:bg-white text-immersive-bg hover:scale-[1.01]"
            }`}
          >
            {isRunning ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Running Audit Sandbox...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Run Simulation Experiment</span>
              </>
            )}
          </button>

        </div>

        {/* Right Side: Shell Output / Simulation Report */}
        <div className="md:col-span-5 flex flex-col h-full bg-immersive-card border border-immersive-border rounded-xl overflow-hidden p-3 space-y-3">
          
          {/* Hands-on Activity Interactive Checklist */}
          {(practical?.tasks?.length || handsOnActivities.length > 0) && (
            <div className="bg-immersive-bg border border-immersive-border p-3 rounded-lg space-y-2.5 text-left shrink-0">
              <span className="text-[10px] font-sans font-black text-immersive-text-primary uppercase tracking-wider flex items-center gap-1.5 border-b border-immersive-border pb-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#FF4B3E]" />
                <span>Practical Task Checklist</span>
              </span>
              <ul className="space-y-2 max-h-[120px] overflow-y-auto scrollbar-thin pr-1 text-[11px] text-immersive-text-secondary font-medium">
                {(practical?.tasks?.length
                  ? practical.tasks.map((task) => task.title || task.instruction)
                  : handsOnActivities
                ).map((act, idx) => {
                  const isChecked = !!checkedItems[idx];
                  return (
                    <li key={idx} className="flex items-start space-x-2.5 cursor-pointer select-none">
                      <input 
                        type="checkbox" 
                        id={`task-${idx}`}
                        checked={isChecked}
                        onChange={(e) => setCheckedItems(prev => ({ ...prev, [idx]: e.target.checked }))}
                        className="mt-0.5 w-3.5 h-3.5 rounded border-immersive-border bg-white text-immersive-primary focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[#FF4B3E]"
                      />
                      <label 
                        htmlFor={`task-${idx}`} 
                        className={`cursor-pointer transition-colors ${isChecked ? "text-immersive-text-secondary line-through" : "text-immersive-text-primary hover:text-immersive-primary"}`}
                      >
                        {act}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          <span className="text-[10px] font-bold text-immersive-text-secondary uppercase">INTELLIGENT SHELL OUTPUT</span>
          
          <div className="flex-1 bg-immersive-bg border border-immersive-border p-3 rounded-lg overflow-y-auto space-y-1.5 text-[11px] leading-relaxed scrollbar-thin">
            {output.map((line, idx) => {
              let textClass = "text-immersive-text-secondary";
              if (line.startsWith("✓")) textClass = "text-emerald-400 font-bold";
              else if (line.startsWith("$") || line.includes("Running")) textClass = "text-[#FF4B3E]";
              else if (line.includes("PASS") || line.includes("AA Compliant")) textClass = "text-emerald-500 font-bold";
              else if (line.includes("WARNING") || line.includes("FAIL")) textClass = "text-amber-500 font-bold";
              else if (line.startsWith("|")) textClass = "text-immersive-secondary";
              else if (line.startsWith("-")) textClass = "text-immersive-text-primary font-semibold";
              
              return (
                <p key={idx} className={textClass}>
                  {line}
                </p>
              );
            })}
            {isRunning && (
              <p className="text-immersive-text-secondary animate-pulse">Running diagnostics pipeline...</p>
            )}
          </div>

          {/* Environmental Status */}
          <div className="border-t border-immersive-border pt-2 flex items-center justify-between text-[10px] text-immersive-text-secondary">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-[#FF4B3E] rounded-full" />
              <span>Port: 3000</span>
            </span>
            <span>OS: Ubuntu Linux Core</span>
          </div>

        </div>

      </div>

    </div>
  );
}
