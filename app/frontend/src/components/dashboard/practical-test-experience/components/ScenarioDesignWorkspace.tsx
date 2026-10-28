import React, { useState } from 'react';
import { PracticalManifest, ScenarioItem } from '../types/practical';
import {
  Calendar,
  Layers,
  Sparkles,
  CheckCircle2,
  Clock,
  Plus,
  Trash2,
  Download,
  Share2,
  Vote,
  Target,
  Sliders,
  AlertCircle,
  FileText
} from 'lucide-react';

interface ScenarioDesignWorkspaceProps {
  manifest: PracticalManifest;
  onSimulationCompleted?: (passed: boolean) => void;
  lastSavedTimestamp?: string;
}

export const ScenarioDesignWorkspace: React.FC<ScenarioDesignWorkspaceProps> = ({
  manifest,
  onSimulationCompleted,
  lastSavedTimestamp = 'just now',
}) => {
  // The generator now declares the interaction subtype explicitly. Keep the
  // legacy defaults only for old local fixtures that have no workspace data.
  const scenarioSubtype = manifest.workspace?.scenario?.subtype || 'generic_decision';
  const isBinaryExercise = manifest.activityKind === 'binary_exercise' || scenarioSubtype === 'binary_exercise';
  const isPlanningPoker = scenarioSubtype === 'planning_poker';
  const isRoadmap = scenarioSubtype === 'roadmap_planning';
  const isAnnotation = scenarioSubtype === 'annotation_design';
  const isXAI = scenarioSubtype === 'explainability_decision';
  const isSprintAgenda = !isPlanningPoker && !isRoadmap && !isAnnotation && !isXAI;

  // Initial scenario items from manifest
  const generatedItems = (manifest.workspace?.scenario?.items || []).map((item, index) => ({
    id: String(item.id || `scenario-item-${index + 1}`),
    title: String(item.title || `Scenario item ${index + 1}`),
    category: String(item.category || 'Scenario'),
    description: String(item.description || ''),
    estimate: typeof item.estimate === 'number' ? item.estimate : undefined,
    status: ['backlog', 'in_progress', 'consensus', 'completed'].includes(String(item.status)) ? String(item.status) as ScenarioItem['status'] : 'backlog',
    tags: Array.isArray(item.tags) ? item.tags.map(String) : [],
    assignedTo: typeof item.assignedTo === 'string' ? item.assignedTo : undefined,
    timeSlot: typeof item.timeSlot === 'string' ? item.timeSlot : undefined,
  }));
  const generatedTaskItems: ScenarioItem[] = manifest.tasks.map((task, index) => ({
    id: task.id || `task-${index + 1}`,
    title: task.title,
    category: 'Task',
    description: task.description,
    status: 'backlog',
    tags: task.criteria ? [task.criteria] : [],
  }));
  const initialItems: ScenarioItem[] = manifest.scenarioItems || (generatedItems.length ? generatedItems : manifest.workspace ? generatedTaskItems : [
    {
      id: 'sc-1',
      title: 'Sprint Goal & Objective Alignment',
      category: 'Opening',
      description: 'Review product backlog priority, team capacity, and establish sprint commitment.',
      timeSlot: '09:00 - 09:30 (30 min)',
      status: 'completed',
      tags: ['Scrum Master', 'Product Owner', 'Dev Team'],
      estimate: 3,
    },
    {
      id: 'sc-2',
      title: 'User Story Walkthrough & Acceptance Criteria',
      category: 'Backlog Refinement',
      description: 'Deep-dive into top 5 stories, clarify edge cases, test expectations, and non-functionals.',
      timeSlot: '09:30 - 10:30 (60 min)',
      status: 'in_progress',
      tags: ['Engineering', 'Design', 'QA'],
      estimate: 5,
    },
    {
      id: 'sc-3',
      title: 'Planning Poker Estimation & Capacity Check',
      category: 'Estimation',
      description: 'Individual sizing using modified Fibonacci, reveal outliers, reach consensus.',
      timeSlot: '10:45 - 11:30 (45 min)',
      status: 'backlog',
      tags: ['All Engineers'],
      estimate: 8,
    },
    {
      id: 'sc-4',
      title: 'Commitment & Sprint Retrospective Action Verification',
      category: 'Closing',
      description: 'Lock sprint backlog, verify Definition of Done, assign story owners.',
      timeSlot: '11:30 - 12:00 (30 min)',
      status: 'backlog',
      tags: ['Entire Scrum Team'],
      estimate: 2,
    },
  ]);

  const [items, setItems] = useState<ScenarioItem[]>(initialItems);
  const [selectedItemId, setSelectedItemId] = useState<string>(initialItems[0]?.id || '');
  const [activeTab, setActiveTab] = useState<'canvas' | 'rubric' | 'export'>('canvas');
  const [binaryAnswers, setBinaryAnswers] = useState<Record<string, string>>({});
  const [binarySubmitted, setBinarySubmitted] = useState(false);

  // Planning poker state
  const [teamVotes, setTeamVotes] = useState<Record<string, number | null>>({
    'You (Lead)': null,
    'Dev Alex': 5,
    'Dev Priya': 5,
    'QA Sam': 8,
    'Architect Lin': 5,
  });
  const [userStoryConsensus, setUserStoryConsensus] = useState<boolean>(false);

  // XAI Sliders state
  const [featureWeights, setFeatureWeights] = useState({
    userHistory: 45,
    collaborativeFiltering: 30,
    recencyBoost: 15,
    serendipityScore: 10,
  });

  const selectedItem = items.find((i) => i.id === selectedItemId) || items[0];

  const binaryTasks = manifest.tasks.filter((task) => task.interactiveExercise);
  const selectedBinaryTask = binaryTasks.find((task) => task.id === selectedItem?.id) || binaryTasks[0];
  const checkBinaryAnswer = (task: typeof binaryTasks[number]) => {
    const exercise = task.interactiveExercise;
    if (!exercise) return false;
    const answer = binaryAnswers[task.id]?.trim().toLowerCase();
    const accepted = [exercise.expectedAnswer, ...(exercise.acceptedAnswers || [])]
      .map((value) => value.trim().toLowerCase())
      .filter(Boolean);
    return Boolean(answer && accepted.includes(answer));
  };

  const handleBinarySubmit = () => {
    setBinarySubmitted(true);
    const passed = binaryTasks.length > 0 && binaryTasks.every(checkBinaryAnswer);
    onSimulationCompleted?.(passed);
  };

  const handleUpdateItem = (field: keyof ScenarioItem, val: any) => {
    setItems((prev) =>
      prev.map((it) => (it.id === selectedItemId ? { ...it, [field]: val } : it))
    );
  };

  const handlePlanningPokerVote = (points: number) => {
    setTeamVotes((prev) => ({
      ...prev,
      'You (Lead)': points,
    }));
    if (points === 5) {
      setUserStoryConsensus(true);
    } else {
      setUserStoryConsensus(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50 overflow-hidden font-sans select-none">
      {/* Top Scenario Control Bar */}
      <div className="px-4 py-2 bg-white border-b border-slate-200/90 flex items-center justify-between shadow-2xs shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-mono font-bold uppercase text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded">
              Scenario Studio
            </span>
            <span className="text-xs font-bold text-slate-800">
              {manifest.title}
            </span>
          </div>
          <span className="text-slate-300">·</span>
          <span className="text-xs text-slate-500 font-mono">
            {manifest.courseName}
          </span>
        </div>

        {/* View Tabs */}
        <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200/80">
          <button
            onClick={() => setActiveTab('canvas')}
            className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              activeTab === 'canvas'
                ? 'bg-white text-slate-900 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Design Canvas
          </button>
          <button
            onClick={() => setActiveTab('rubric')}
            className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              activeTab === 'rubric'
                ? 'bg-white text-slate-900 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Evaluation Rubric
          </button>
          <button
            onClick={() => setActiveTab('export')}
            className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              activeTab === 'export'
                ? 'bg-white text-slate-900 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Specification Export
          </button>
        </div>
      </div>

      {/* Main Studio Area */}
      <div className="flex-1 p-3 min-h-0 overflow-hidden flex flex-col">
        {activeTab === 'canvas' && (
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-3 min-h-0 overflow-hidden">
            {/* Left 7 Cols: Interactive Artifact / Flow / Poker Table */}
            <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 shadow-2xs flex flex-col min-h-0 overflow-hidden">
              <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  {isPlanningPoker ? (
                    <>
                      <Vote className="w-3.5 h-3.5 text-indigo-600" />
                      Planning Poker Round #1: User Story Sizing
                    </>
                  ) : isXAI ? (
                    <>
                      <Sliders className="w-3.5 h-3.5 text-indigo-600" />
                      XAI Transparency & Feature Weight Calibration
                    </>
                  ) : (
                    <>
                      <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                      {isRoadmap ? 'Roadmap Planning Workspace' : isAnnotation ? 'Annotation Design Workspace' : 'Scenario Items & Decisions'}
                    </>
                  )}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  Auto-saved {lastSavedTimestamp}
                </span>
              </div>

              {/* Sub-scenario 1: Planning Poker Simulation */}
              {isBinaryExercise ? (
                <div className="p-3.5 flex-1 flex flex-col overflow-y-auto min-h-0">
                  <div className="p-3 rounded-lg bg-indigo-50/60 border border-indigo-200 mb-3">
                    <span className="text-[10px] font-mono uppercase text-indigo-700 font-bold tracking-wider">Generated binary conversion workspace</span>
                    <h3 className="text-sm font-bold text-slate-900 mt-0.5">{manifest.workspace?.scenario?.context || manifest.objective}</h3>
                    <p className="text-xs text-slate-600 mt-1">Solve each conversion using place values or powers of two, then verify the complete set.</p>
                  </div>
                  <div className="space-y-2.5">
                    {binaryTasks.map((task, index) => {
                      const exercise = task.interactiveExercise!;
                      const correct = binarySubmitted && checkBinaryAnswer(task);
                      return (
                        <div key={task.id} className={`p-3 rounded-lg border ${binarySubmitted ? (correct ? 'border-emerald-300 bg-emerald-50/50' : 'border-rose-300 bg-rose-50/50') : 'border-slate-200 bg-white'}`}>
                          <div className="flex items-start gap-2">
                            <span className="text-[10px] font-mono text-slate-400 pt-0.5">{String(index + 1).padStart(2, '0')}</span>
                            <div className="min-w-0 flex-1">
                              <h4 className="text-xs font-bold text-slate-900">{task.title}</h4>
                              <p className="text-xs text-slate-600 mt-1 leading-relaxed">{exercise.prompt}</p>
                              <div className="flex items-center gap-2 mt-2">
                                <input value={binaryAnswers[task.id] || ''} onChange={(event) => setBinaryAnswers((answers) => ({ ...answers, [task.id]: event.target.value }))} placeholder="Your answer" aria-label={`Answer for ${task.title}`} className="flex-1 px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 bg-white font-mono focus:outline-none focus:ring-1 focus:ring-indigo-500" />
                                {binarySubmitted && <span className={`text-[10px] font-mono font-bold ${correct ? 'text-emerald-700' : 'text-rose-700'}`}>{correct ? 'CORRECT' : 'RETRY'}</span>}
                              </div>
                              {binarySubmitted && correct && exercise.explanation && <p className="text-[11px] text-emerald-800 mt-1.5">{exercise.explanation}</p>}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <button onClick={handleBinarySubmit} disabled={!binaryTasks.length} className="mt-3 self-end px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-xs font-semibold cursor-pointer disabled:cursor-not-allowed">Verify conversions</button>
                </div>
              ) : isPlanningPoker ? (
                <div className="p-3.5 flex-1 flex flex-col justify-between overflow-y-auto min-h-0">
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-indigo-50/60 border border-indigo-200">
                      <span className="text-[10px] font-mono uppercase text-indigo-700 font-bold tracking-wider">
                        Active User Story #US-204
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 mt-0.5">
                        As a buyer, I want automated currency conversion at checkout so I can pay in my local currency.
                      </h3>
                      <p className="text-xs text-slate-600 mt-1">
                        Acceptance Criteria: Real-time exchange rate lookup via Forex API with 15-minute cached fallback, fee disclosure breakdown, and idempotent payment dispatch.
                      </p>
                    </div>

                    {/* Team Votes Matrix */}
                    <div>
                      <span className="text-xs font-bold text-slate-700 block mb-1.5">
                        Team Sizing Reveal:
                      </span>
                      <div className="grid grid-cols-5 gap-2">
                        {Object.entries(teamVotes).map(([member, vote]) => (
                          <div
                            key={member}
                            className={`p-2 rounded-lg border text-center flex flex-col items-center justify-center transition-all ${
                              vote !== null
                                ? 'bg-white border-indigo-300 shadow-2xs'
                                : 'bg-slate-50 border-dashed border-slate-300'
                            }`}
                          >
                            <span className="text-[10px] font-medium text-slate-600 truncate w-full">
                              {member}
                            </span>
                            <span
                              className={`text-base font-bold font-mono mt-1 ${
                                vote !== null ? 'text-indigo-600' : 'text-slate-300'
                              }`}
                            >
                              {vote !== null ? vote : '?'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Fibonacci Card Deck for User */}
                    <div>
                      <span className="text-xs font-bold text-slate-700 block mb-1">
                        Select Your Estimate (Fibonacci Story Points):
                      </span>
                      <div className="flex items-center gap-2">
                        {[1, 2, 3, 5, 8, 13, 21].map((pts) => {
                          const isSelected = teamVotes['You (Lead)'] === pts;
                          return (
                            <button
                              key={pts}
                              onClick={() => handlePlanningPokerVote(pts)}
                              className={`flex-1 py-2.5 rounded-lg border font-mono text-xs font-bold transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-indigo-600 text-white border-indigo-700 shadow-xs scale-105'
                                  : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'
                              }`}
                            >
                              {pts}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Consensus Status Banner */}
                  <div
                    className={`p-2.5 rounded-lg border mt-2 flex items-center justify-between ${
                      userStoryConsensus
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                        : 'bg-amber-50 border-amber-300 text-amber-900'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {userStoryConsensus ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                      )}
                      <span className="text-xs font-medium">
                        {userStoryConsensus
                          ? 'Consensus reached! Team clustered at 5 points (Medium Complexity, API dependency).'
                          : teamVotes['You (Lead)'] === null
                          ? 'Cast your vote above to initiate team consensus deliberation.'
                          : 'Variance detected. QA Sam voted 8 due to forex sandbox latency. Discuss and converge on 5.'}
                      </span>
                    </div>
                  </div>
                </div>
              ) : isXAI ? (
                /* Sub-scenario 2: XAI Explanation Sliders */
                <div className="p-3.5 flex-1 flex flex-col justify-between overflow-y-auto min-h-0 space-y-3">
                  <div className="p-3 rounded-lg bg-indigo-50/60 border border-indigo-200">
                    <span className="text-[10px] font-mono uppercase text-indigo-700 font-bold tracking-wider">
                      Recommendation Model Explanation
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mt-0.5">
                      "Why are you seeing this course recommendation?"
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Calibrate the feature attribution weights that will be transformed into human-readable transparency cards for learners.
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                        <span>Past Course Completions (User History)</span>
                        <span className="font-mono text-indigo-600">{featureWeights.userHistory}%</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="70"
                        value={featureWeights.userHistory}
                        onChange={(e) =>
                          setFeatureWeights((w) => ({ ...w, userHistory: Number(e.target.value) }))
                        }
                        className="w-full accent-indigo-600 cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                        <span>Cohort Peer Similarity (Collaborative Filtering)</span>
                        <span className="font-mono text-indigo-600">{featureWeights.collaborativeFiltering}%</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="50"
                        value={featureWeights.collaborativeFiltering}
                        onChange={(e) =>
                          setFeatureWeights((w) => ({
                            ...w,
                            collaborativeFiltering: Number(e.target.value),
                          }))
                        }
                        className="w-full accent-indigo-600 cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                        <span>Skill Recency & Active Goals</span>
                        <span className="font-mono text-indigo-600">{featureWeights.recencyBoost}%</span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="30"
                        value={featureWeights.recencyBoost}
                        onChange={(e) =>
                          setFeatureWeights((w) => ({ ...w, recencyBoost: Number(e.target.value) }))
                        }
                        className="w-full accent-indigo-600 cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Live XAI Preview Card */}
                  <div className="p-3 rounded-lg border border-slate-200 bg-white shadow-2xs">
                    <span className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider block mb-1">
                      Learner UI Explanation Preview
                    </span>
                    <p className="text-xs text-slate-800 leading-snug">
                      Because you recently completed <span className="font-bold">CS50 C Foundations</span> ({featureWeights.userHistory}% match) and 84% of engineers in your cohort enrolled in <span className="font-bold">Linux Systems</span> ({featureWeights.collaborativeFiltering}% similarity).
                    </p>
                  </div>
                </div>
              ) : (
                /* Sub-scenario 3: Sprint Agenda / Timeline builder */
                <div className="p-3 flex-1 flex flex-col overflow-y-auto min-h-0 space-y-2">
                  {items.map((item) => {
                    const isSelected = item.id === selectedItemId;
                    return (
                      <div
                        key={item.id}
                        onClick={() => setSelectedItemId(item.id)}
                        className={`p-2.5 rounded-lg border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-indigo-50/50 border-indigo-400 ring-1 ring-indigo-300'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                              {item.category}
                            </span>
                            <span className="text-slate-300">•</span>
                            <span className="text-xs font-bold text-slate-900">
                              {item.title}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-indigo-600 font-semibold bg-white border border-indigo-100 px-1.5 py-0.5 rounded">
                            {item.timeSlot}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-1.5 mt-2">
                          {item.tags?.map((t, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] font-mono text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Right 5 Cols: Item Inspector & Configuration */}
            <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 shadow-2xs flex flex-col min-h-0 overflow-hidden">
              <div className="px-3 py-2 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800">
                  {isBinaryExercise ? 'Conversion Task & Answer' : 'Step Configuration & Parameters'}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  ID: {selectedItem.id}
                </span>
              </div>

              <div className="p-3.5 flex-1 flex flex-col justify-between overflow-y-auto space-y-3 min-h-0">
                <div className="space-y-2.5">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      {isBinaryExercise ? 'Conversion Task' : 'Event / Item Title'}
                    </label>
                    <input
                      type="text"
                      value={isBinaryExercise ? selectedBinaryTask?.title || '' : selectedItem.title}
                      onChange={(e) => !isBinaryExercise && handleUpdateItem('title', e.target.value)}
                      readOnly={isBinaryExercise}
                      className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-indigo-500 bg-slate-50/50 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      {isBinaryExercise ? 'Expected Answer' : 'Timebox / Duration Allocation'}
                    </label>
                    <input
                      type="text"
                      value={isBinaryExercise ? selectedBinaryTask?.interactiveExercise?.expectedAnswer || '' : selectedItem.timeSlot || ''}
                      onChange={(e) => isBinaryExercise
                        ? selectedBinaryTask && setBinaryAnswers((answers) => ({ ...answers, [selectedBinaryTask.id]: e.target.value }))
                        : handleUpdateItem('timeSlot', e.target.value)}
                      className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-indigo-500 bg-slate-50/50 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      {isBinaryExercise ? 'Task Prompt & Explanation' : 'Ceremony Objective & Outcomes'}
                    </label>
                    <textarea
                      rows={4}
                      value={isBinaryExercise
                        ? `${selectedBinaryTask?.interactiveExercise?.prompt || ''}${selectedBinaryTask?.interactiveExercise?.explanation ? `\n\n${selectedBinaryTask.interactiveExercise.explanation}` : ''}`
                        : selectedItem.description}
                      onChange={(e) => !isBinaryExercise && handleUpdateItem('description', e.target.value)}
                      readOnly={isBinaryExercise}
                      className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-indigo-500 bg-slate-50/50 font-sans leading-relaxed resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      {isBinaryExercise ? 'Available Hints' : 'Required Participants (comma separated)'}
                    </label>
                    <input
                      type="text"
                      value={isBinaryExercise ? selectedBinaryTask?.hints.join(' • ') || 'Use the teaching hints for this task.' : selectedItem.tags?.join(', ') || ''}
                      onChange={(e) => !isBinaryExercise &&
                        handleUpdateItem(
                          'tags',
                          e.target.value.split(',').map((s) => s.trim())
                        )
                      }
                      readOnly={isBinaryExercise}
                      className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-indigo-500 bg-slate-50/50 font-mono text-[11px]"
                    />
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    Status: <span className="font-semibold text-indigo-600 uppercase font-mono">{selectedItem.status || 'Active'}</span>
                  </span>
                  <button
                    onClick={() => setActiveTab('rubric')}
                    className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
                  >
                    {isBinaryExercise ? 'Review Conversion Rubric' : 'Commit Step Design'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'rubric' && (
          <div className="flex-1 bg-white rounded-xl border border-slate-200 p-4 overflow-y-auto shadow-2xs space-y-3">
            <h3 className="text-sm font-bold text-slate-900">
              {isBinaryExercise ? 'Generated Conversion Rubric' : 'Agile & Design Evaluation Rubric'}
            </h3>
            {isBinaryExercise ? (
              <div className="space-y-2">
                {(manifest.workspace?.scenario?.rubric || []).map((criterion, index) => (
                  <div key={String(criterion.id || index)} className="p-3 rounded-lg border border-slate-200 bg-slate-50">
                    <span className="text-xs font-bold text-slate-900">{String(criterion.criterion || `Conversion ${index + 1}`)}</span>
                    <p className="text-xs text-slate-600 mt-1">Expected answer: <span className="font-mono font-semibold">{String(criterion.expectedAnswer || 'See task evidence')}</span></p>
                    <span className="mt-2 inline-block text-[10px] font-mono font-bold text-indigo-700 bg-white px-1.5 py-0.5 rounded border border-indigo-200">{String(criterion.points || 0)} POINTS</span>
                  </div>
                ))}
              </div>
            ) : <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg border border-emerald-200 bg-emerald-50/50">
                <span className="text-xs font-bold text-emerald-900 block mb-1">
                  1. Timebox Discipline
                </span>
                <p className="text-xs text-emerald-700 leading-snug">
                  Total sprint planning duration must not exceed 2 hours for a 2-week sprint. Allocated slots sum to 165 minutes.
                </p>
                <span className="mt-2 inline-block text-[10px] font-mono font-bold text-emerald-800 bg-white px-1.5 py-0.5 rounded border border-emerald-200">
                  PASS (Within Range)
                </span>
              </div>

              <div className="p-3 rounded-lg border border-emerald-200 bg-emerald-50/50">
                <span className="text-xs font-bold text-emerald-900 block mb-1">
                  2. Role Inclusivity
                </span>
                <p className="text-xs text-emerald-700 leading-snug">
                  Every agenda phase specifies required attendees (Product Owner, Scrum Master, QA, Engineering).
                </p>
                <span className="mt-2 inline-block text-[10px] font-mono font-bold text-emerald-800 bg-white px-1.5 py-0.5 rounded border border-emerald-200">
                  PASS (All Roles Present)
                </span>
              </div>

              <div className="p-3 rounded-lg border border-emerald-200 bg-emerald-50/50">
                <span className="text-xs font-bold text-emerald-900 block mb-1">
                  3. Measurable Outcome
                </span>
                <p className="text-xs text-emerald-700 leading-snug">
                  Clear deliverables defined: locked sprint backlog, velocity commitment, and definition of done check.
                </p>
                <span className="mt-2 inline-block text-[10px] font-mono font-bold text-emerald-800 bg-white px-1.5 py-0.5 rounded border border-emerald-200">
                  PASS (Concrete Artifacts)
                </span>
              </div>
            </div>}
          </div>
        )}

        {activeTab === 'export' && (
          <div className="flex-1 bg-white rounded-xl border border-slate-200 p-4 overflow-y-auto shadow-2xs font-mono text-xs">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
              <span className="font-bold text-slate-800">
                Markdown Specification Document
              </span>
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(JSON.stringify(items, null, 2));
                }}
                className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-mono cursor-pointer"
              >
                Copy Markdown
              </button>
            </div>
            <pre className="p-3 rounded bg-slate-50 border border-slate-200 text-slate-800 leading-relaxed overflow-x-auto">
{`# ${manifest.title}
Course: ${manifest.courseName}
Generated on: ${new Date().toISOString().split('T')[0]}

## Agenda / Specification Overview
${items.map((it, idx) => `### ${idx + 1}. ${it.title} (${it.timeSlot || 'Allocated'})
- Phase: ${it.category}
- Scope: ${it.description}
- Attendees: ${it.tags?.join(', ') || 'Team'}`).join('\n\n')}`}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};
