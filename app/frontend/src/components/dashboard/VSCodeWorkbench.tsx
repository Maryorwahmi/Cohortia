import React, { useState } from "react";
import { CheckCircle, Download, FileCode2, Folder, GitBranch, Lightbulb, MessageSquare, Play, Save, Search, Send, Settings, Terminal, Volume2, Sparkles, Check, List, BookOpen, Pause, RotateCw, ChevronRight, AlertTriangle, Zap, Clock, PlayCircle, Code2 } from "lucide-react";
import type { LearningBoardPractical, CodeWalkthroughSegment, PracticalTeachingPlaylistStep } from "../../services/learningBoardsApi";
import CodeEditor from "./CodeEditor";
import BinaryConverterWidget from "./BinaryConverterWidget";
import AlgorithmDesignWidget from "./AlgorithmDesignWidget";
import AnimatedCodeAlongPlayer from "./AnimatedCodeAlongPlayer";
import MentorChatMessage from "./MentorChatMessage";
import PracticalMissionPanel from "./PracticalMissionPanel";
import { motion, AnimatePresence } from "motion/react";

type PracticalTask = LearningBoardPractical["tasks"][number];
type PracticalCheck = NonNullable<LearningBoardPractical["checks"]>[number];
type PracticalFile = LearningBoardPractical["files"][number];

interface VSCodeWorkbenchProps {
  activeTrackId: string;
  courseId?: string;
  selectedLesson: { id: string; title: string };
  code: string;
  output: string[];
  chatInput: string;
  chatMessages: Array<{ sender: "user" | "mentor"; text: string }>;
  handsOnActivities: string[];
  checkedItems: Record<number, boolean>;
  checkResults?: Record<string, boolean>;
  isRunning: boolean;
  isSaved: boolean;
  isChatTyping: boolean;
  onCodeChange: (value: string) => void;
  onSave: () => void;
  onDownload: () => void;
  onRun: () => void;
  onChatInputChange: (value: string) => void;
  onChatSubmit: () => void;
  onCheckItem: (index: number, checked: boolean) => void;
  fileName?: string;
  tasks?: PracticalTask[];
  revealedHintCount?: Record<string, number>;
  onRevealHint?: (taskId: string) => void;
  activeTaskIndex?: number;
  onTaskSelect?: (index: number) => void;
  narratorGuide?: string | null;
  codeWalkthrough?: CodeWalkthroughSegment[];
  teachingPlaylist?: PracticalTeachingPlaylistStep[];
  isNarrating?: boolean;
  onPlayNarration?: (text?: string) => void;
  mode?: string;
  labType?: string | null;
  widgetType?: string | null;
  executionEngine?: string | null;
  practicalStatus?: string | null;
  practicalSource?: string | null;
  practicalInstructions?: string | null;
  objectives?: string[];
  language?: string | null;
  checks?: PracticalCheck[];
  files?: PracticalFile[];
  activeFilePath?: string | null;
  onFileSelect?: (path: string) => void;
}

export default function VSCodeWorkbench({
  activeTrackId,
  courseId,
  selectedLesson,
  code,
  output,
  chatInput,
  chatMessages,
  handsOnActivities,
  checkedItems,
  checkResults = {},
  isRunning,
  isSaved,
  isChatTyping,
  onCodeChange,
  onSave,
  onDownload,
  onRun,
  onChatInputChange,
  onChatSubmit,
  onCheckItem,
  fileName: practicalFileName,
  tasks,
  revealedHintCount = {},
  onRevealHint,
  activeTaskIndex = 0,
  onTaskSelect,
  narratorGuide,
  codeWalkthrough = [],
  teachingPlaylist = [],
  isNarrating,
  onPlayNarration,
  mode,
  labType,
  widgetType,
  executionEngine,
  practicalStatus,
  practicalSource,
  practicalInstructions,
  objectives,
  language,
  checks = [],
  files = [],
  activeFilePath,
  onFileSelect,
}: VSCodeWorkbenchProps) {
  const defaultFileNames: Record<string, string> = {
    code_lab: "workspace.py",
    terminal_lab: "session.sh",
    database_lab: "query.sql",
    simulation_lab: "scenario.md",
    non_code_activity: "response.md",
    research_notebook: "findings.md",
    cloud_portal: "console.sh",
  };
  const modeLabels: Record<string, string> = {
    code_lab: "Code Lab",
    terminal_lab: "Terminal Lab",
    database_lab: "Database Lab",
    simulation_lab: "Simulation Lab",
    non_code_activity: "Analysis Mode",
    research_notebook: "Research Notebook",
    cloud_portal: "Cloud Portal",
  };
  const fileName = practicalFileName || defaultFileNames[mode || ""] || "workspace.py";
  const modeLabel = modeLabels[mode || ""] || "Workspace";
  const isSimulationMode = mode === "simulation_lab";
  const isResearchMode = mode === "research_notebook";
  const isCloudMode = mode === "cloud_portal";
  const isNonCode = mode === "non_code_activity" || isSimulationMode || isResearchMode || isCloudMode;
  const supportsCodeAlong = teachingPlaylist.length > 0 || mode === "code_lab" || mode === "terminal_lab" || mode === "database_lab";
  const languageLabel = language || (fileName.endsWith(".c") ? "C" : fileName.endsWith(".cpp") ? "C++" : fileName.endsWith(".sql") ? "SQL" : "Python");
  const terminalCommand = isNonCode ? "submit" : `${languageLabel.toLowerCase()} ${fileName}`;
  const isPractical = Boolean(practicalStatus || practicalSource);
  const visibleChecks = checks.filter((check) => check.visibility !== "hidden");
  const [activeViewMode, setActiveViewMode] = React.useState<"code_along" | "sandbox">(
    supportsCodeAlong ? "code_along" : "sandbox",
  );

  React.useEffect(() => {
    setActiveViewMode(supportsCodeAlong ? "code_along" : "sandbox");
  }, [supportsCodeAlong]);

  if (activeViewMode === "code_along") {
    return (
      <AnimatedCodeAlongPlayer
        playlist={teachingPlaylist}
        files={files}
        walkthrough={codeWalkthrough}
        category={mode === "code_lab" || mode === "terminal_lab" || mode === "database_lab" ? "Terminal Coding Lab" : isResearchMode ? "Research & Analysis" : isCloudMode ? "Cloud Console Lab" : "Scenario & Design Exercise"}
        tasks={tasks}
        output={output}
        onOpenLab={() => setActiveViewMode("sandbox")}
      />
    );
  }

  return (
    <div className={`absolute inset-0 flex min-h-0 flex-col overflow-hidden text-[#172033] ${
      isResearchMode ? "bg-[#fdfdfd]" : isCloudMode ? "bg-[#f0f2f5]" : "bg-[#f5f7fb]"
    }`}>
      <div className="flex h-11 shrink-0 items-center gap-3 border-b border-[#d8deea] bg-white px-3 text-[11px] font-semibold">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-[#5b667d]">Cohortia Workspace</span>
        <span className="hidden truncate text-[#8b95a8] sm:inline">{selectedLesson.title}</span>
        
        {/* Mode Switcher Buttons */}
        <div className="flex items-center gap-1 rounded-lg bg-slate-100 p-0.5 border border-slate-200 ml-2">
          {supportsCodeAlong && (
            <button
              type="button"
              onClick={() => setActiveViewMode("code_along")}
              className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold rounded text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              <PlayCircle className="h-3 w-3 text-blue-600" />
              <span>📼 Code-Along</span>
            </button>
          )}
          <button
            type="button"
            onClick={() => setActiveViewMode("sandbox")}
            className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold rounded bg-[#2563eb] text-white shadow-sm cursor-pointer"
          >
            <Terminal className="h-3 w-3" />
            <span>{supportsCodeAlong ? "💻 Sandbox" : "🧭 Workspace"}</span>
          </button>
        </div>
        {mode && (
          <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
            isNonCode ? "bg-blue-100 text-[#2563eb] border border-blue-200" : "bg-emerald-100 text-[#159570] border border-emerald-200"
          }`}>
            {modeLabel}
          </span>
        )}
        {labType && <span className="rounded-full border border-[#cfd8e8] bg-[#f8fafc] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#526078]">{labType}</span>}
        {isPractical && (
          <span className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {executionEngine || "Interactive Laboratory"}
          </span>
        )}
        {narratorGuide && onPlayNarration && (
          <button
            type="button"
            onClick={() => onPlayNarration?.()}
            className="flex items-center gap-1 rounded-md border border-[#cfd8e8] bg-white px-2 py-1 font-sans text-[10px] font-semibold text-[#46536a] hover:border-[#2563eb] shadow-sm transition-all active:scale-95"
          >
            <Volume2 className={`h-3 w-3 ${isNarrating ? "animate-pulse text-[#2563eb]" : "text-[#ff4b3e]"}`} /> {isNarrating ? "Teacher Speaking..." : "Hear the brief"}
          </button>
        )}
        <span className="ml-auto flex items-center gap-2 text-[10px] uppercase tracking-wider text-[#2563eb]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" /> Live workspace
        </span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
        <aside className="hidden w-12 shrink-0 flex-col items-center gap-5 border-r border-[#d8deea] bg-[#eef2f8] py-4 text-[#71809a] sm:flex">
          <FileCode2 className="h-5 w-5 text-[#2563eb]" />
          <Search className="h-5 w-5" />
          <GitBranch className="h-5 w-5" />
          <Settings className="mt-auto h-5 w-5" />
        </aside>

        <main className="flex min-h-0 min-w-0 flex-1 flex-col">
          <div className="flex h-10 shrink-0 items-center border-b border-[#d8deea] bg-[#f9fbfe] px-4 text-[10px] font-mono text-[#68758b]">
            <Folder className="mr-2 h-3.5 w-3.5 text-[#2563eb]" /> cohortia-lab <span className="mx-2 text-[#aab3c2]">/</span> <span className="text-[#172033]">{fileName}</span>
            <div className="ml-auto flex gap-2">
              <button type="button" onClick={onSave} className="flex items-center gap-1 rounded-md border border-[#cfd8e8] bg-white px-2 py-1 font-sans font-semibold text-[#46536a] hover:border-[#2563eb]">
                <Save className="h-3 w-3 text-[#ff4b3e]" /> {isSaved ? "Saved" : "Save"}
              </button>
              <button type="button" onClick={onDownload} className="hidden items-center gap-1 rounded-md border border-[#cfd8e8] bg-white px-2 py-1 font-sans font-semibold text-[#46536a] hover:border-[#2563eb] sm:flex">
                <Download className="h-3 w-3 text-[#2563eb]" /> Download
              </button>
            </div>
          </div>

          <PracticalMissionPanel
            title={selectedLesson.title}
            instructions={practicalInstructions}
            objectives={objectives}
            tasks={tasks}
            activeTaskIndex={activeTaskIndex}
            checkedItems={checkedItems}
            revealedHintCount={revealedHintCount}
            onTaskSelect={onTaskSelect}
            onCheckItem={onCheckItem}
            onRevealHint={onRevealHint}
            onPlayNarration={onPlayNarration}
          />

          {files.length > 0 && (
            <div className="flex h-9 shrink-0 items-center gap-1 overflow-x-auto border-b border-[#d8deea] bg-[#f1f4f9] px-2">
              {files.map((file) => {
                const isActive = file.path === activeFilePath;
                return <button key={file.path} type="button" onClick={() => onFileSelect?.(file.path)} className={`flex shrink-0 items-center gap-1.5 border-r border-[#d8deea] px-3 py-2 text-[10px] font-mono ${isActive ? "border-t-2 border-t-[#ff4b3e] bg-white font-semibold text-[#172033]" : "text-[#68758b] hover:bg-white"}`}><FileCode2 className={`h-3 w-3 ${isActive ? "text-[#2563eb]" : "text-[#8995a8]"}`} />{file.path}</button>;
              })}
            </div>
          )}

          <div className="flex min-h-0 flex-1 flex-col bg-white">
            <div className="relative flex min-h-0 flex-1 overflow-hidden">
              {widgetType === "binary_converter" || selectedLesson.title.toLowerCase().includes("binary") ? (
                <div className="flex-1 overflow-hidden">
                  <BinaryConverterWidget onComplete={() => onCheckItem(0, true)} />
                </div>
              ) : widgetType === "algorithm_design" || (isNonCode && selectedLesson.title.toLowerCase().includes("algorithm")) ? (
                <div className="flex-1 overflow-hidden">
                  <AlgorithmDesignWidget
                    title={selectedLesson.title}
                    onComplete={() => onCheckItem(0, true)}
                  />
                </div>
              ) : isResearchMode ? (
                <div className="flex-1 overflow-y-auto p-8 space-y-10 bg-[#fdfdfd] border-l border-r border-[#e2e8f0] shadow-inner max-w-5xl mx-auto w-full">
                  <div className="space-y-4 text-center pb-8 border-b border-[#edf2f7]">
                    <h2 className="text-2xl font-serif font-bold text-[#2d3748]">Guided Inquiry: {selectedLesson.title}</h2>
                    <p className="text-sm text-[#718096] italic">Document your findings, hypotheses, and observations in the notebook below.</p>
                  </div>

                  {tasks && tasks.length > 0 ? (
                    tasks.map((task, idx) => (
                      <div 
                        key={task.id} 
                        onClick={() => onTaskSelect?.(idx)}
                        className={`space-y-4 p-8 rounded-2xl border transition-all duration-300 ${
                          activeTaskIndex === idx ? "border-purple-200 bg-purple-50/30 shadow-md ring-1 ring-purple-100" : "border-[#edf2f7] bg-white hover:border-purple-100"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                              activeTaskIndex === idx ? "bg-purple-600 text-white" : "bg-slate-100 text-slate-500"
                            }`}>
                              {idx + 1}
                            </span>
                            <h3 className={`text-base font-bold ${activeTaskIndex === idx ? "text-purple-900" : "text-[#2d3748]"}`}>{task.title || `Inquiry Step ${idx + 1}`}</h3>
                          </div>
                          {(task as any).narratorGuide && (
                            <button
                              onClick={(e) => { e.stopPropagation(); onPlayNarration?.((task as any).narratorGuide); }}
                              className={`p-2 rounded-full transition-colors ${activeTaskIndex === idx ? "bg-purple-100 text-purple-600 hover:bg-purple-200" : "bg-slate-50 text-slate-400 hover:bg-slate-100"}`}
                              title="Hear step guidance"
                            >
                              <Volume2 className="h-4 w-4" />
                            </button>
                          )}
                        </div>
                        <div className="ml-12 space-y-4">
                          <p className="text-sm leading-relaxed text-[#4a5568] border-l-4 border-slate-100 pl-4 py-1">{task.instruction}</p>
                          <div className="relative group">
                            <textarea
                              className="w-full min-h-[160px] rounded-xl border border-[#e2e8f0] bg-white p-4 text-sm font-sans focus:border-purple-400 focus:ring-4 focus:ring-purple-50 outline-none transition-all resize-none shadow-sm"
                              placeholder="Write your detailed observations and research findings here..."
                              defaultValue={localStorage.getItem(`cohortia_research_${selectedLesson.id}_${task.id}`) || ""}
                              onChange={(e) => {
                                localStorage.setItem(`cohortia_research_${selectedLesson.id}_${task.id}`, e.target.value);
                              }}
                            />
                            <Sparkles className="absolute bottom-4 right-4 h-4 w-4 text-purple-200 group-focus-within:text-purple-400" />
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="bg-white p-12 rounded-2xl border-2 border-dashed border-[#e2e8f0] text-center">
                      <BookOpen className="h-10 w-10 text-[#cbd5e0] mx-auto mb-4" />
                      <p className="text-[#a0aec0] font-medium">Research workspace is ready. Follow the mentor's lead.</p>
                    </div>
                  )}
                </div>
              ) : isNonCode ? (
                <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-[#f9fbfe]">
                  <div className="max-w-3xl mx-auto space-y-6">
                    <div className="border-b border-[#d8deea] pb-4">
                      <h2 className="text-lg font-bold text-[#172033]">{isSimulationMode ? "Simulation Brief" : isCloudMode ? "Console Mission Control" : "Adaptive Thought Studio"}</h2>
                      <p className="text-sm text-[#526078]">{isSimulationMode ? "Record the expected state changes and review the declared scenario checks." : isCloudMode ? "Execute the required CLI commands and verify cloud infrastructure status." : "Apply your critical thinking to analyze this scenario and document your strategy below."}</p>
                    </div>

                    {practicalInstructions && <div className="rounded-lg border border-[#f3c7a8] bg-[#fff7ed] p-4 text-xs leading-relaxed text-[#7c4a1d] shadow-sm"><strong className="font-semibold block mb-2 text-[#9a3412] uppercase tracking-wider text-[10px]">Practical mission</strong><p className="whitespace-pre-wrap">{practicalInstructions}</p></div>}

                    {tasks && tasks.length > 0 ? (
                      tasks.map((task, idx) => (
                        <div 
                          key={task.id} 
                          onClick={() => onTaskSelect?.(idx)}
                          className={`group space-y-3 bg-white p-6 rounded-2xl border transition-all duration-200 cursor-pointer ${
                            activeTaskIndex === idx ? "border-[#2563eb] shadow-lg ring-1 ring-[#2563eb]/10" : "border-[#d8deea] hover:border-[#2563eb]/30 shadow-sm"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                                activeTaskIndex === idx ? "bg-[#2563eb] text-white" : "bg-[#f1f5f9] text-[#64748b]"
                              }`}>
                                {idx + 1}
                              </span>
                              <h3 className={`text-sm font-bold ${activeTaskIndex === idx ? "text-[#1e3a8a]" : "text-[#334155]"}`}>{task.title || `Task ${idx + 1}`}</h3>
                            </div>
                            {(task as any).narratorGuide && (
                              <button
                                onClick={(e) => { e.stopPropagation(); onPlayNarration?.((task as any).narratorGuide); }}
                                className={`p-1.5 rounded-lg transition-colors ${activeTaskIndex === idx ? "bg-blue-50 text-blue-600 hover:bg-blue-100" : "text-slate-300 hover:text-slate-500 hover:bg-slate-50"}`}
                              >
                                <Volume2 className="h-3.5 w-3.5" />
                              </button>
                            )}
                          </div>
                          <p className="ml-9 text-xs leading-relaxed text-[#526078]">{task.instruction}</p>
                          <div className="ml-9 relative">
                            <textarea
                              className={`w-full min-h-[120px] rounded-xl border p-4 text-xs font-sans outline-none transition-all resize-none ${
                                activeTaskIndex === idx ? "border-blue-100 bg-white focus:border-blue-300 focus:ring-4 focus:ring-blue-50" : "border-slate-100 bg-slate-50/50"
                              }`}
                              placeholder={isCloudMode ? "Type console commands or verification logs..." : "Type your analysis or response here..."}
                              defaultValue={localStorage.getItem(`cohortia_thought_studio_${selectedLesson.id}_${task.id}`) || ""}
                              onChange={(e) => {
                                localStorage.setItem(`cohortia_thought_studio_${selectedLesson.id}_${task.id}`, e.target.value);
                              }}
                            />
                            <div className={`absolute bottom-3 right-3 flex items-center gap-1.5 transition-opacity ${activeTaskIndex === idx ? "opacity-100" : "opacity-0"}`}>
                              <span className="text-[10px] text-blue-400 font-medium italic">Conceptual Drafting</span>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="bg-white p-8 rounded-xl border border-dashed border-[#d8deea] text-center">
                        <p className="text-sm text-[#8b95a8]">Use the mentor chat or the tasks checklist on the right to guide your analysis.</p>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
               <div className="relative flex h-full w-full flex-col bg-gradient-to-b from-slate-50 via-white to-slate-50">
                 {/* Terminal Lab Header */}
                 <div className="shrink-0 border-b border-slate-200 bg-white px-6 py-4 shadow-sm">
                   <div className="flex items-center gap-3 mb-2">
                     <div className="flex items-center gap-2">
                       <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                       <span className="text-xs font-mono text-blue-600">INTERACTIVE LAB</span>
                       <span className="text-sm font-semibold text-slate-700">Learning Laboratory</span>
                     </div>
                     <div className="ml-auto">
                       <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider px-2 py-1 bg-emerald-50 rounded-full border border-emerald-200">ACTIVE SESSION</span>
                     </div>
                   </div>
                   <h3 className="text-lg font-bold text-slate-900">{selectedLesson.title}</h3>
                   {practicalInstructions && (
                     <p className="text-xs text-slate-600 mt-1 line-clamp-1">{practicalInstructions}</p>
                   )}
                 </div>

                 {/* Main Content Area - Split Code & Terminal */}
                 <div className="flex-1 flex overflow-hidden gap-px bg-slate-100">
                   {/* Left: Animated Code Editor */}
                   <div className="flex-1 flex flex-col overflow-hidden bg-white">
                     <div className="shrink-0 flex items-center justify-between px-4 py-2 bg-slate-50 border-b border-slate-200">
                       <span className="text-xs font-mono text-slate-600">{activeFilePath || "main.py"}</span>
                       <div className="flex gap-2">
                         <button
                           type="button"
                           onClick={onSave}
                           title="Save"
                           className="p-1.5 rounded hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
                         >
                           <Save className="h-3.5 w-3.5" />
                         </button>
                         <button
                           type="button"
                           onClick={onDownload}
                           title="Download"
                           className="p-1.5 rounded hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
                         >
                           <Download className="h-3.5 w-3.5" />
                         </button>
                       </div>
                     </div>

                      <div className="min-h-0 flex-1 overflow-hidden bg-white">
                        <CodeEditor
                          value={code}
                          onChange={onCodeChange}
                          language={languageLabel}
                          placeholder="Complete the starter code here..."
                        />
                     </div>
                  </div>
                 </div>
               </div>
              )}
            </div>

            <div className="flex min-h-[160px] max-h-[38%] flex-col border-t border-[#d8deea] bg-[#0f172a] text-slate-200">
              <div className="flex h-8 shrink-0 items-center gap-2 border-b border-slate-800 bg-[#1e293b] px-3 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                <Terminal className="h-3.5 w-3.5 text-[#ff4b3e]" /> {isNonCode ? "Analysis Status" : "Interactive Terminal"}
                <span className="ml-auto font-mono text-[9px] font-normal normal-case tracking-normal text-slate-400">
                  cohortia-lab &gt; {terminalCommand}
                </span>
              </div>
              <div className="min-h-0 flex-1 overflow-y-auto p-3 font-mono text-[11px] leading-5">
                {output.length === 0 ? (
                  <p className="text-slate-500">{languageLabel} workspace ready. Click 'Run Code' to execute or validate this practical.</p>
                ) : (
                  output.map((line, index) => (
                    <p
                      key={`${line}-${index}`}
                      className={
                        line.startsWith("✓")
                          ? "font-semibold text-emerald-400"
                          : line.includes("WARNING") || line.includes("Error") || line.includes("Traceback") || line.includes("FAIL")
                          ? "font-semibold text-rose-400"
                          : line.startsWith("[INFO]") || line.startsWith("[PYODIDE]")
                          ? "text-sky-400"
                          : "text-slate-300"
                      }
                    >
                      {line}
                    </p>
                  ))
                )}
                {isRunning && <p className="animate-pulse text-amber-300">Running {languageLabel} practical...</p>}
              </div>
              <div className="border-t border-slate-800/80 bg-slate-900/50 p-2">
                <button
                  type="button"
                  onClick={onRun}
                  disabled={isRunning}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#ff4b3e] py-2 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#e33d32] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isNonCode ? <CheckCircle className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 fill-current" />} 
                  {isRunning ? (isNonCode ? "Submitting..." : `Running ${languageLabel}...`) : (isNonCode ? "Submit for Review" : "Run Code")}
                </button>
              </div>
            </div>
          </div>
        </main>

        <aside className="flex w-full flex-col border-l border-[#d8deea] bg-white lg:w-[320px]">
          <div className="flex h-11 shrink-0 items-center justify-between border-b border-[#d8deea] bg-[#f9fbfe] px-4">
            <div className="flex items-center gap-2">
              <MessageSquare className={`h-4 w-4 ${isResearchMode ? "text-purple-600" : "text-[#ff4b3e]"}`} />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#46536a]">Mentor Chat</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest">Active</span>
            </div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
           <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f8fafc]/50">
             {chatMessages.map((msg, idx) => {
               const isProactiveTip = msg.text.startsWith("[Proactive Tip]");
               const displayText = isProactiveTip ? msg.text.replace("[Proactive Tip] ", "") : msg.text;
               return (
                 <div key={idx}>
                   <MentorChatMessage
                     text={displayText}
                     isUser={msg.sender === "user"}
                     isProactiveTip={isProactiveTip && msg.sender === "mentor"}
                   />
                 </div>
               );
             })}
              {isChatTyping && (
                <div className="flex items-start">
                  <div className="bg-white border border-[#d8deea] rounded-2xl rounded-tl-none px-3.5 py-2.5 shadow-sm">
                    <div className="flex gap-1">
                      <span className="h-1 w-1 bg-slate-300 rounded-full animate-bounce" />
                      <span className="h-1 w-1 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="h-1 w-1 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="shrink-0 p-3 bg-white border-t border-[#d8deea]">
              {false && tasks && (
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider flex items-center gap-1.5">
                      <List className="h-3 w-3" /> Milestones ({tasks.filter((_, i) => checkedItems[i]).length}/{tasks.length})
                    </span>
                    <div className="h-1.5 w-24 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-500 ${isResearchMode ? "bg-purple-500" : "bg-emerald-500"}`}
                        style={{ width: `${(tasks.filter((_, i) => checkedItems[i]).length / tasks.length) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="max-h-[220px] overflow-y-auto pr-1 space-y-1.5">
                    {tasks.map((task, idx) => {
                      const isChecked = checkedItems[idx];
                      const isActive = activeTaskIndex === idx;
                      const hasHints = task.hints.length > 0;
                      const revealedHints = revealedHintCount[task.id] || 0;
                      
                      return (
                        <div key={task.id} className="space-y-1">
                          <div 
                            onClick={() => onTaskSelect?.(idx)}
                            className={`group flex items-start gap-3 rounded-xl p-2.5 transition-all cursor-pointer ${
                              isActive ? "bg-slate-50 border border-slate-100 shadow-sm" : "hover:bg-slate-50/50"
                            }`}
                          >
                            <button
                              type="button"
                              onClick={(e) => { e.stopPropagation(); onCheckItem(idx, !isChecked); }}
                              className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-md border transition-all ${
                                isChecked 
                                  ? "bg-emerald-500 border-emerald-500 text-white shadow-sm" 
                                  : "bg-white border-[#cbd5e1] hover:border-emerald-500"
                              }`}
                            >
                              {isChecked && <CheckCircle className="h-3 w-3" />}
                            </button>
                            <div className="flex-1 min-w-0">
                              <p className={`text-[11px] leading-relaxed transition-colors ${
                                isChecked ? "text-[#94a3b8] line-through" : isActive ? "text-[#1e293b] font-semibold" : "text-[#475569]"
                              }`}>
                                {task.title || `Task ${idx + 1}`}
                              </p>
                              {isActive && !isChecked && hasHints && (
                                <button
                                  type="button"
                                  onClick={(e) => { e.stopPropagation(); onRevealHint?.(task.id); }}
                                  className="mt-1.5 flex items-center gap-1 text-[9px] font-bold text-[#2563eb] hover:underline"
                                >
                                  <Lightbulb className="h-2.5 w-2.5" />
                                  {revealedHints === 0 ? "Unlock Hint" : `Hint ${revealedHints}/${task.hints.length}`}
                                </button>
                              )}
                            </div>
                          </div>
                          
                          {isActive && revealedHints > 0 && (
                            <div className="ml-7 pl-3 border-l-2 border-amber-100 py-1 space-y-2">
                              {task.hints.slice(0, revealedHints).map((hint, hIdx) => (
                                <p key={hIdx} className="text-[10px] text-amber-800 bg-amber-50/50 p-2 rounded-lg leading-relaxed animate-in slide-in-from-left-1 duration-300">
                                  {hint}
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="relative">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => onChatInputChange(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && onChatSubmit()}
                  placeholder="Ask your mentor..."
                  className="w-full rounded-xl border border-[#d8deea] bg-[#f9fbfe] px-4 py-2.5 pr-10 text-xs focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] outline-none transition-all placeholder:text-slate-400"
                />
                <button
                  type="button"
                  onClick={onChatSubmit}
                  disabled={!chatInput.trim() || isChatTyping}
                  className="absolute right-2 top-1.5 rounded-lg bg-white p-1 text-[#2563eb] hover:bg-slate-100 disabled:opacity-40 transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
