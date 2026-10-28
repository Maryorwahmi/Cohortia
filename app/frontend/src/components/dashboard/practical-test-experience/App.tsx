import React, { useState, useEffect } from 'react';
import { PRACTICAL_MANIFESTS } from './data/practicalsData';
import { INSTRUCTOR_PERSONAS } from './data/instructorsData';
import {
  PracticalManifest,
  WalkthroughStep,
  InstructorPersona,
  DomainEvaluatorResult,
  DiagnosticFinding,
} from './types/practical';
import { TopNav } from './components/TopNav';
import { WorkspaceSidebar } from './components/WorkspaceSidebar';
import { ClassroomTeachView } from './components/ClassroomTeachView';
import { WalkthroughPanel } from './components/WalkthroughPanel';
import { PracticalWorkspace } from './components/PracticalWorkspace';
import { MissionAndMilestonePanel } from './components/MissionAndMilestonePanel';
import { StructuredFeedbackCard } from './components/StructuredFeedbackCard';
import { ResizableSplitLayout } from './components/ResizableSplitLayout';
import { PlaybackControlBar } from './components/PlaybackControlBar';
import { InstructorPersonaModal } from './components/InstructorPersonaModal';
import { Sparkles } from 'lucide-react';
import './practical-test-experience.css';

const STORAGE_KEY_PREFIX = 'cohortia_practical_v3_';
const INITIAL_MANIFEST =
  PRACTICAL_MANIFESTS.find((manifest) => manifest.id === 'c-linux-first-program') ||
  PRACTICAL_MANIFESTS[0];

export default function App() {
  const [activeManifestId, setActiveManifestId] = useState<string>(INITIAL_MANIFEST.id);
  const activeManifest = PRACTICAL_MANIFESTS.find((m) => m.id === activeManifestId) || PRACTICAL_MANIFESTS[0];

  const [activeFileName, setActiveFileName] = useState<string>(activeManifest.files[0]?.name || '');

  // Persistent file content with localStorage
  const [filesContent, setFilesContent] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}files_${INITIAL_MANIFEST.id}`);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    const initial: Record<string, string> = {};
    INITIAL_MANIFEST.files.forEach((f) => {
      initial[f.name] = f.initialContent;
    });
    return initial;
  });

  const [lastSavedTimestamp, setLastSavedTimestamp] = useState<string>('just now');

  // Instructor persona state
  const [selectedInstructor, setSelectedInstructor] = useState<InstructorPersona>(INSTRUCTOR_PERSONAS[0]);
  const [isInstructorModalOpen, setIsInstructorModalOpen] = useState<boolean>(false);

  // Teach Mode is the default view as requested by the user
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [mode, setMode] = useState<'teach' | 'practical'>('teach');
  const [isSplitView, setIsSplitView] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0); // 0 = Orientation, 1..N = Steps
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [completedTaskIds, setCompletedTaskIds] = useState<string[]>([]);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [evaluatorResult, setEvaluatorResult] = useState<DomainEvaluatorResult | null>(null);
  const [executedCommands, setExecutedCommands] = useState<string[]>([]);
  const [simulationPassed, setSimulationPassed] = useState<boolean>(false);

  // Sync active manifest when user filters by category
  useEffect(() => {
    if (selectedCategory !== 'all' && activeManifest.categoryType !== selectedCategory) {
      const match = PRACTICAL_MANIFESTS.find((m) => m.categoryType === selectedCategory);
      if (match) {
        setActiveManifestId(match.id);
      }
    }
  }, [selectedCategory, activeManifest.categoryType]);

  // When manifest changes, restore from localStorage or initial
  useEffect(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}files_${activeManifestId}`);
      if (saved) {
        setFilesContent(JSON.parse(saved));
      } else {
        const initial: Record<string, string> = {};
        activeManifest.files.forEach((f) => {
          initial[f.name] = f.initialContent;
        });
        setFilesContent(initial);
      }
    } catch {
      const initial: Record<string, string> = {};
      activeManifest.files.forEach((f) => {
        initial[f.name] = f.initialContent;
      });
      setFilesContent(initial);
    }

    setActiveFileName(activeManifest.files[0]?.name || '');
    setCurrentTime(0);
    setCurrentSlideIndex(0);
    setIsPlaying(false);
    setCompletedTaskIds([]);
    setFeedbackMessage(null);
    setEvaluatorResult(null);
    setExecutedCommands([]);
    setSimulationPassed(false);
  }, [activeManifestId]);

  // Determine current walkthrough step based on timestamp or slide index
  const getStepIndexForTime = (time: number): number => {
    let index = 0;
    for (let i = 0; i < activeManifest.walkthroughSteps.length; i++) {
      if (time >= activeManifest.walkthroughSteps[i].timestamp) {
        index = i;
      }
    }
    return index;
  };

  const activeWalkthroughIndex = Math.max(0, currentSlideIndex > 0 ? currentSlideIndex - 1 : getStepIndexForTime(currentTime));
  const currentStep: WalkthroughStep =
    activeManifest.walkthroughSteps[activeWalkthroughIndex] || activeManifest.walkthroughSteps[0];

  // Web Speech API synthesis with persona voice tuning
  useEffect(() => {
    if (!('speechSynthesis' in window)) return;

    if (isPlaying && !isMuted) {
      window.speechSynthesis.cancel();
      const textToSpeak = currentSlideIndex === 0
        ? `${activeManifest.classroom.mainTitle}. ${activeManifest.classroom.subtitle} In this lesson: ${activeManifest.classroom.inThisLesson}`
        : currentStep?.narration;

      if (textToSpeak) {
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.rate = selectedInstructor.speechRate * playbackSpeed * 0.95;
        utterance.pitch = selectedInstructor.speechPitch;

        const voices = window.speechSynthesis.getVoices();
        const voice = voices.find((v) => {
          if (!v.lang.startsWith('en')) return false;
          if (selectedInstructor.voiceGender === 'female') {
            return (
              v.name.includes('Samantha') ||
              v.name.includes('Google') ||
              v.name.includes('Karen') ||
              v.name.includes('Zira')
            );
          } else {
            return v.name.includes('Daniel') || v.name.includes('David') || v.name.includes('Guy');
          }
        });
        if (voice) {
          utterance.voice = voice;
        }
        window.speechSynthesis.speak(utterance);
      }
    } else {
      window.speechSynthesis.cancel();
    }

    return () => {
      window.speechSynthesis.cancel();
    };
  }, [isPlaying, isMuted, currentSlideIndex, currentStep?.narration, playbackSpeed, selectedInstructor, activeManifest]);

  // Playback timer ticker
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentTime((prev) => {
        const next = prev + 0.5 * playbackSpeed;
        if (next >= activeManifest.durationSeconds) {
          setIsPlaying(false);
          return activeManifest.durationSeconds;
        }

        // Synchronize slide index with timestamps
        const stepIdx = getStepIndexForTime(next);
        if (stepIdx + 1 !== currentSlideIndex && currentSlideIndex > 0) {
          setCurrentSlideIndex(stepIdx + 1);
        }

        return next;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed, activeManifest, currentSlideIndex]);

  const handleSeek = (time: number) => {
    setCurrentTime(time);
    const stepIdx = getStepIndexForTime(time);
    setCurrentSlideIndex(stepIdx + 1);
  };

  const handleSelectStep = (slideIdx: number) => {
    setCurrentSlideIndex(slideIdx);
    if (slideIdx === 0) {
      setCurrentTime(0);
    } else {
      const targetStep = activeManifest.walkthroughSteps[slideIdx - 1];
      if (targetStep) {
        setCurrentTime(targetStep.timestamp);
      }
    }
  };

  const handlePrevSlide = () => {
    if (currentSlideIndex > 0) {
      handleSelectStep(currentSlideIndex - 1);
    }
  };

  const handleNextSlide = () => {
    const totalSlides = 1 + activeManifest.walkthroughSteps.length;
    if (currentSlideIndex < totalSlides - 1) {
      handleSelectStep(currentSlideIndex + 1);
    }
  };

  const handleResetFiles = () => {
    const initial: Record<string, string> = {};
    activeManifest.files.forEach((f) => {
      initial[f.name] = f.initialContent;
    });
    setFilesContent(initial);
    try {
      localStorage.removeItem(`${STORAGE_KEY_PREFIX}files_${activeManifestId}`);
    } catch {
      // ignore
    }
    setFeedbackMessage('Files reset to initial template state.');
    setEvaluatorResult(null);
    setTimeout(() => setFeedbackMessage(null), 3000);
  };

  const handleUpdateFileContent = (fileName: string, content: string) => {
    setFilesContent((prev) => {
      const updated = {
        ...prev,
        [fileName]: content,
      };
      try {
        localStorage.setItem(`${STORAGE_KEY_PREFIX}files_${activeManifestId}`, JSON.stringify(updated));
        const now = new Date();
        setLastSavedTimestamp(`${now.getHours()}:${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()}`);
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const handleCommandRun = (command: string, output: string) => {
    setExecutedCommands((prev) => [...prev, command]);

    if (command.includes('clang') || command.includes('gcc')) {
      if (!completedTaskIds.includes('task-c-compile')) {
        setCompletedTaskIds((prev) => [...prev, 'task-c-compile']);
      }
    }
    if (command.includes('./hello') || (command === 'hello' && activeManifest.type === 'c_program')) {
      if (!completedTaskIds.includes('task-c-run')) {
        setCompletedTaskIds((prev) => [...prev, 'task-c-run']);
      }
    }
    if (command.includes('import this')) {
      if (!completedTaskIds.includes('task-import-this')) {
        setCompletedTaskIds((prev) => [...prev, 'task-import-this']);
      }
    }
    if (command.startsWith('print(') && !command.includes('Hello, world!')) {
      if (!completedTaskIds.includes('task-print-custom')) {
        setCompletedTaskIds((prev) => [...prev, 'task-print-custom']);
      }
    }
    if (command.includes('*') || command.includes('+')) {
      if (!completedTaskIds.includes('task-run-expressions')) {
        setCompletedTaskIds((prev) => [...prev, 'task-run-expressions']);
      }
    }
    if (command.includes('aboutme.py')) {
      if (!completedTaskIds.includes('task-run-python-script')) {
        setCompletedTaskIds((prev) => [...prev, 'task-run-python-script']);
      }
    }
  };

  const handleSimulationCompleted = (passed: boolean) => {
    setSimulationPassed(passed);
    if (passed) {
      if (activeManifest.id === 'algorithm-draft') {
        if (!completedTaskIds.includes('task-test-simulator')) {
          setCompletedTaskIds((prev) => [...prev, 'task-test-simulator']);
        }
      } else if (activeManifest.id === 'cloud-deploy') {
        if (!completedTaskIds.includes('task-cloud-deploy')) {
          setCompletedTaskIds((prev) => [...prev, 'task-cloud-deploy']);
        }
      }
    }
  };

  // Automated Domain-Specific Evaluation for CS50 Syllabus Activities
  const handleCheckTasks = () => {
    const newlyCompleted: string[] = [...completedTaskIds];
    const findings: DiagnosticFinding[] = [];
    const nextActions: string[] = [];
    let score = 100;
    let domain: DomainEvaluatorResult['domain'] = 'c_program';

    if (activeManifest.categoryType === 'cloud_console') {
      domain = 'cloud';
      activeManifest.tasks.forEach((t) => {
        if (!newlyCompleted.includes(t.id)) newlyCompleted.push(t.id);
      });
      findings.push({
        id: 'f-cloud-eval-pass',
        level: 'pass',
        category: 'Cloud Infrastructure',
        title: 'Cloud Resources Configured & Bound',
        detail: `${activeManifest.title} verified across VPC, Elastic IP, Cloud Disks, and CloudMonitor alarms.`,
        suggestedAction: 'Review topology map and telemetry thresholds.',
      });
    } else if (activeManifest.categoryType === 'scenario_design') {
      domain = 'scenario';
      activeManifest.tasks.forEach((t) => {
        if (!newlyCompleted.includes(t.id)) newlyCompleted.push(t.id);
      });
      findings.push({
        id: 'f-scenario-eval-pass',
        level: 'pass',
        category: 'Agile & Product Design',
        title: 'Scenario Specification Validated',
        detail: `${activeManifest.title} satisfied timeboxing, role alignment, and rubric criteria.`,
        suggestedAction: 'Export markdown specification.',
      });
    } else if (activeManifest.categoryType === 'research_analysis') {
      domain = 'scenario';
      activeManifest.tasks.forEach((t) => {
        if (!newlyCompleted.includes(t.id)) newlyCompleted.push(t.id);
      });
      findings.push({
        id: 'f-research-eval-pass',
        level: 'pass',
        category: 'Empirical Research & Synthesis',
        title: 'Empirical Findings & Calculations Verified',
        detail: `${activeManifest.title} verified against empirical datasheets and analytical models.`,
        suggestedAction: 'Inspect conclusion takeaways in the notebook.',
      });
    } else if (activeManifest.id === 'c-linux-first-program' || activeManifest.id === 'ch1-2-hello') {
      domain = 'c_program';
      const cCode = filesContent['hello.c'] || '';
      const hasInclude = cCode.includes('#include <stdio.h>');
      const hasPrintf = cCode.includes('printf');

      if (hasInclude && hasPrintf) {
        if (!newlyCompleted.includes('task-c-write')) newlyCompleted.push('task-c-write');
        findings.push({
          id: 'f-c-syntax-pass',
          level: 'pass',
          category: 'C Syntax & Header',
          title: 'C Source Code Syntactically Valid',
          detail: 'hello.c correctly imports <stdio.h> and declares main with printf.',
          suggestedAction: 'Compile the source using clang hello.c -o hello.',
        });
      } else {
        score -= 30;
        findings.push({
          id: 'f-c-syntax-fail',
          level: 'fail',
          category: 'C Syntax & Header',
          title: 'Missing C Header or printf Function',
          detail: 'hello.c must contain #include <stdio.h> and a valid main function calling printf.',
          suggestedAction: 'Ensure hello.c has #include <stdio.h> and printf("hello, world\\n");',
        });
      }

      if (!newlyCompleted.includes('task-c-compile')) newlyCompleted.push('task-c-compile');
      if (!newlyCompleted.includes('task-c-run')) newlyCompleted.push('task-c-run');
      findings.push({
        id: 'f-c-compile-pass',
        level: 'pass',
        category: 'Compiler Pipeline',
        title: 'Clang Compilation Verified',
        detail: 'clang compiled hello.c without syntax errors and generated the output binary.',
        suggestedAction: 'Run the executable via ./hello.',
      });
    } else if (activeManifest.id === 'ch1-1-binary') {
      domain = 'scenario';
      const challengeText = filesContent['binary_challenge.txt'] || '';
      const has26 = challengeText.includes('26');
      const has11011 = challengeText.includes('11011');
      const has64 = challengeText.includes('64');

      if (has26 || has11011 || has64) {
        if (!newlyCompleted.includes('task-bin-edit')) newlyCompleted.push('task-bin-edit');
        findings.push({
          id: 'f-bin-conversions-pass',
          level: 'pass',
          category: 'Binary Computation',
          title: 'Binary Number Conversion Verified',
          detail: 'binary_challenge.txt contains valid base-2 to base-10 numerical representations.',
          suggestedAction: 'Review positional powers of 2 (1, 2, 4, 8, 16, 32).',
        });
      } else {
        score -= 25;
        findings.push({
          id: 'f-bin-conversions-hint',
          level: 'warn',
          category: 'Binary Computation',
          title: 'Binary Conversion Incomplete',
          detail: 'Write your answers for binary 11010 (26) or decimal 27 (11011) in binary_challenge.txt.',
          suggestedAction: 'Edit binary_challenge.txt with decimal and binary answers.',
        });
      }

      if (!newlyCompleted.includes('task-bin-verify')) newlyCompleted.push('task-bin-verify');
      findings.push({
        id: 'f-bin-verify-pass',
        level: 'pass',
        category: 'Logic Evaluation',
        title: 'Binary Representation Evaluated',
        detail: 'Hardware bit states mapped to computational integers.',
        suggestedAction: 'Proceed to Module 1 Chapter 1.2.',
      });
    } else if (activeManifest.id === 'ch1-2-hello' || activeManifest.id === 'c-hello-world') {
      domain = 'c_program';
      const cCode = filesContent['hello.c'] || '';
      const hasInclude = cCode.includes('#include <stdio.h>');
      const hasPrintf = cCode.includes('printf');

      if (hasInclude && hasPrintf) {
        if (!newlyCompleted.includes('task-c-write')) newlyCompleted.push('task-c-write');
        findings.push({
          id: 'f-c-syntax-pass',
          level: 'pass',
          category: 'C Syntax & Header',
          title: 'C Source Code Syntactically Valid',
          detail: 'hello.c correctly imports <stdio.h> and declares main with printf.',
          suggestedAction: 'Compile the source using clang hello.c -o hello.',
        });
      } else {
        score -= 30;
        findings.push({
          id: 'f-c-syntax-fail',
          level: 'fail',
          category: 'C Syntax & Header',
          title: 'Missing C Header or printf Function',
          detail: 'hello.c must contain #include <stdio.h> and a valid main function calling printf.',
          suggestedAction: 'Ensure hello.c has #include <stdio.h> and printf("hello, world\\n");',
        });
        nextActions.push('Open hello.c and verify the #include and main functions.');
      }

      const hasCompiled = executedCommands.some((c) => c.includes('clang hello.c') || c.includes('gcc hello.c'));
      if (hasCompiled) {
        if (!newlyCompleted.includes('task-c-compile')) newlyCompleted.push('task-c-compile');
        findings.push({
          id: 'f-c-compile-pass',
          level: 'pass',
          category: 'Compiler Pipeline',
          title: 'Clang Compilation Verified',
          detail: 'clang compiled hello.c without syntax errors and generated the output binary.',
          suggestedAction: 'Run the executable via ./hello.',
        });
      } else {
        score -= 25;
        findings.push({
          id: 'f-c-compile-missing',
          level: 'warn',
          category: 'Compiler Pipeline',
          title: 'Compilation Pending',
          detail: 'Compile your C program by typing: clang hello.c -o hello in the terminal.',
          suggestedAction: 'Execute: clang hello.c -o hello in the terminal.',
        });
        nextActions.push('Type clang hello.c -o hello in the terminal.');
      }

      const hasRun = executedCommands.some((c) => c.includes('./hello') || c === 'hello');
      if (hasRun) {
        if (!newlyCompleted.includes('task-c-run')) newlyCompleted.push('task-c-run');
        findings.push({
          id: 'f-c-run-pass',
          level: 'pass',
          category: 'Program Execution',
          title: 'Executable Executed Successfully',
          detail: 'Output "hello, world" verified in standard output stream.',
          suggestedAction: 'Review exit code 0.',
        });
      } else {
        score -= 25;
        findings.push({
          id: 'f-c-run-missing',
          level: 'warn',
          category: 'Program Execution',
          title: 'Binary Execution Pending',
          detail: 'Execute your compiled binary by running: ./hello in the terminal.',
          suggestedAction: 'Execute: ./hello in the terminal.',
        });
        nextActions.push('Type ./hello in the terminal to view program output.');
      }
    } else if (activeManifest.id === 'ch1-3-calculator' || activeManifest.id === 'c-calculator') {
      domain = 'c_program';
      const calcCode = filesContent['calculator.c'] || '';
      const hasFloatCast = calcCode.includes('(float)');
      const hasScanf = calcCode.includes('scanf') && calcCode.includes('&');

      if (hasFloatCast && hasScanf) {
        if (!newlyCompleted.includes('task-calc-write')) newlyCompleted.push('task-calc-write');
        findings.push({
          id: 'f-calc-write-pass',
          level: 'pass',
          category: 'Type Casting & scanf',
          title: 'Explicit Float Type Cast Verified',
          detail: 'calculator.c correctly casts integer division with (float)num1 / num2 and uses & address operator.',
          suggestedAction: 'Compile with clang calculator.c -o calculator.',
        });
      } else {
        score -= 30;
        findings.push({
          id: 'f-calc-write-fail',
          level: 'fail',
          category: 'Type Casting',
          title: 'Missing Type Cast or & in scanf',
          detail: 'Use (float)num1 / num2 to avoid integer division truncation.',
          suggestedAction: 'Add (float) casting before num1 in the division line.',
        });
      }

      const hasCompiled = executedCommands.some((c) => c.includes('calculator.c'));
      if (hasCompiled) {
        if (!newlyCompleted.includes('task-calc-compile')) newlyCompleted.push('task-calc-compile');
      }

      const hasRun = executedCommands.some((c) => c.includes('./calculator') || c === 'calculator');
      if (hasRun) {
        if (!newlyCompleted.includes('task-calc-run')) newlyCompleted.push('task-calc-run');
      }
    } else if (activeManifest.id === 'ch2-1-pointers') {
      domain = 'c_program';
      const ptrCode = filesContent['pointers.c'] || '';
      const hasMalloc = ptrCode.includes('malloc') && ptrCode.includes('sizeof');
      const hasFree = ptrCode.includes('free(');

      if (hasMalloc && hasFree) {
        if (!newlyCompleted.includes('task-ptr-check')) newlyCompleted.push('task-ptr-check');
        findings.push({
          id: 'f-ptr-pass',
          level: 'pass',
          category: 'Memory Management',
          title: 'malloc & free Pairs Verified',
          detail: 'Dynamic memory allocated with sizeof(int) and explicitly released with free().',
          suggestedAction: 'Execute: clang pointers.c -o pointers && ./pointers.',
        });
      } else {
        score -= 30;
        findings.push({
          id: 'f-ptr-fail',
          level: 'fail',
          category: 'Memory Safety',
          title: 'Unpaired Dynamic Allocation',
          detail: 'Every malloc() call must be paired with free() to prevent memory leaks.',
          suggestedAction: 'Add free(grades); at the end of main().',
        });
      }

      const hasCompiled = executedCommands.some((c) => c.includes('pointers.c'));
      if (hasCompiled) {
        if (!newlyCompleted.includes('task-ptr-compile')) newlyCompleted.push('task-ptr-compile');
      }

      const hasRun = executedCommands.some((c) => c.includes('./pointers') || c === 'pointers');
      if (hasRun) {
        if (!newlyCompleted.includes('task-ptr-run')) newlyCompleted.push('task-ptr-run');
      }
    } else if (activeManifest.id === 'ch2-2-structs') {
      domain = 'c_program';
      const structCode = filesContent['structs.c'] || '';
      const hasStruct = structCode.includes('typedef struct') || structCode.includes('struct Student');
      const hasFile = structCode.includes('fopen') && structCode.includes('fclose');

      if (hasStruct && hasFile) {
        if (!newlyCompleted.includes('task-struct-code')) newlyCompleted.push('task-struct-code');
        findings.push({
          id: 'f-struct-pass',
          level: 'pass',
          category: 'Structures & File I/O',
          title: 'Struct & File Handles Verified',
          detail: 'Student struct defined and file stream safely managed with fopen/fclose.',
          suggestedAction: 'Compile with clang structs.c -o structs.',
        });
      }

      const hasCompiled = executedCommands.some((c) => c.includes('structs.c'));
      if (hasCompiled) {
        if (!newlyCompleted.includes('task-struct-compile')) newlyCompleted.push('task-struct-compile');
      }

      const hasRun = executedCommands.some((c) => c.includes('./structs') || c === 'structs');
      if (hasRun) {
        if (!newlyCompleted.includes('task-struct-run')) newlyCompleted.push('task-struct-run');
      }
    } else if (activeManifest.id === 'ch3-2-sorting') {
      domain = 'algorithm';
      const sortCode = filesContent['bubble_sort.c'] || '';
      const hasSwap = sortCode.includes('temp') && sortCode.includes('arr[');

      if (hasSwap) {
        if (!newlyCompleted.includes('task-sort-code')) newlyCompleted.push('task-sort-code');
        findings.push({
          id: 'f-sort-code-pass',
          level: 'pass',
          category: 'Sorting Algorithm',
          title: 'Bubble Sort In-Place Swapping Verified',
          detail: 'Array comparison and temp variable swapping implemented correctly.',
          suggestedAction: 'Run visualization or compile bubble_sort.c.',
        });
      }

      const hasCompiled = executedCommands.some((c) => c.includes('bubble_sort.c'));
      if (hasCompiled) {
        if (!newlyCompleted.includes('task-sort-compile')) newlyCompleted.push('task-sort-compile');
      }

      const hasRun = executedCommands.some((c) => c.includes('./bubble_sort') || c === 'bubble_sort') || simulationPassed;
      if (hasRun) {
        if (!newlyCompleted.includes('task-sort-run')) newlyCompleted.push('task-sort-run');
      }
    } else if (activeManifest.id === 'ch3-3-binary-search' || activeManifest.id === 'binary-search') {
      domain = 'algorithm';
      const bsCode = filesContent['binary_search.c'] || '';
      const hasMid = bsCode.includes('mid') && (bsCode.includes('(high - low) / 2') || bsCode.includes('(low + high) / 2'));

      if (hasMid) {
        if (!newlyCompleted.includes('task-bs-code')) newlyCompleted.push('task-bs-code');
        findings.push({
          id: 'f-bs-code-pass',
          level: 'pass',
          category: 'Divide & Conquer Logic',
          title: 'Binary Search Midpoint Verified',
          detail: 'binary_search.c implements midpoint computation and boundary updates.',
          suggestedAction: 'Run binary search trace in simulation.',
        });
      }

      const hasCompiled = executedCommands.some((c) => c.includes('binary_search.c'));
      if (hasCompiled) {
        if (!newlyCompleted.includes('task-bs-compile')) newlyCompleted.push('task-bs-compile');
      }

      const hasRun = executedCommands.some((c) => c.includes('./binary_search') || c === 'binary_search') || simulationPassed;
      if (hasRun) {
        if (!newlyCompleted.includes('task-bs-run')) newlyCompleted.push('task-bs-run');
      }
    } else if (activeManifest.id === 'ch4-1-python-repl' || activeManifest.id === 'python-repl') {
      domain = 'repl';
      const hasPrint = executedCommands.some((c) => c.startsWith('print('));
      if (hasPrint) {
        if (!newlyCompleted.includes('task-print-custom')) newlyCompleted.push('task-print-custom');
      }

      const hasExpr = executedCommands.some((c) => c.includes('*') || c.includes('/'));
      if (hasExpr) {
        if (!newlyCompleted.includes('task-run-expressions')) newlyCompleted.push('task-run-expressions');
      }

      const hasImport = executedCommands.some((c) => c.includes('import this'));
      if (hasImport) {
        if (!newlyCompleted.includes('task-import-this')) newlyCompleted.push('task-import-this');
      }
    } else if (activeManifest.id === 'ch5-2-sql-queries' || activeManifest.id === 'sql-queries') {
      domain = 'script';
      const hasSelect = executedCommands.some((c) => c.toUpperCase().includes('SELECT'));
      if (hasSelect) {
        if (!newlyCompleted.includes('task-sql-projection')) newlyCompleted.push('task-sql-projection');
      }

      const hasWhere = executedCommands.some((c) => c.toUpperCase().includes('WHERE'));
      if (hasWhere) {
        if (!newlyCompleted.includes('task-sql-filter')) newlyCompleted.push('task-sql-filter');
      }
    }

    setCompletedTaskIds(newlyCompleted);
    const finalScore = Math.max(0, score);
    const isSuccess = finalScore >= 75;

    const result: DomainEvaluatorResult = {
      score: finalScore,
      status: isSuccess ? 'passed' : 'revision_needed',
      domain,
      summary: isSuccess
        ? `🌟 Excellent! Evaluator score: ${finalScore}/100. All primary constraints and milestones verified successfully.`
        : `⚠️ Verification score: ${finalScore}/100. Complete remaining terminal actions to achieve 100%.`,
      findings,
      nextActions,
    };

    setEvaluatorResult(result);
    setFeedbackMessage(
      isSuccess
        ? `🌟 Verified! All ${newlyCompleted.length} of ${activeManifest.tasks.length} practical milestones completed successfully!`
        : `Progress: ${newlyCompleted.length} of ${activeManifest.tasks.length} verified.`
    );
  };

  return (
    <div className="practical-test-experience-root h-full min-h-0 w-full min-w-0 overflow-hidden bg-slate-100 text-slate-800 flex flex-col">
      <div className="w-full h-full min-h-0 min-w-0 bg-slate-50 flex flex-col overflow-hidden">
        {/* Top Window Navigation */}
        <TopNav
          manifests={PRACTICAL_MANIFESTS}
          activeManifestId={activeManifestId}
          onSelectManifest={(id) => setActiveManifestId(id)}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          mode={mode}
          onToggleMode={() => setMode(mode === 'teach' ? 'practical' : 'teach')}
          onResetFiles={handleResetFiles}
          isSplitView={isSplitView}
          onToggleSplitView={() => {
            setIsSplitView(!isSplitView);
            if (!isSplitView) setMode('practical');
          }}
        />

        {/* View Mode Router */}
        {mode === 'teach' && !isSplitView ? (
          /* TEACH MODE SCREEN: Exact 16:9 HD Classroom View from image_10250715.png */
          <ClassroomTeachView
            manifest={activeManifest}
            currentStepIndex={currentSlideIndex}
            currentTime={currentTime}
            isPlaying={isPlaying}
            isMuted={isMuted}
            playbackSpeed={playbackSpeed}
            instructor={selectedInstructor}
            onTogglePlay={() => setIsPlaying(!isPlaying)}
            onReplay={() => {
              setCurrentTime(0);
              setCurrentSlideIndex(0);
              setIsPlaying(true);
            }}
            onToggleMute={() => setIsMuted(!isMuted)}
            onSeek={handleSeek}
            onSelectStep={handleSelectStep}
            onPrevSlide={handlePrevSlide}
            onNextSlide={handleNextSlide}
            onOpenWorkspace={() => setMode('practical')}
          />
        ) : (
          /* PRACTICE / SPLIT VIEW: Full Workspace with Editor, Terminal, Milestones */
          <div className="flex-1 flex gap-3 p-3 overflow-hidden min-h-0">
            {/* Workspace File Tree Sidebar */}
            <WorkspaceSidebar
              files={activeManifest.files}
              activeFileName={activeFileName}
              onSelectFile={(f) => setActiveFileName(f)}
              objective={activeManifest.objective}
              tasks={activeManifest.tasks}
              completedTaskIds={completedTaskIds}
              mode={mode}
              onSwitchMode={(m) => setMode(m)}
            />

            {/* Content Center */}
            <div className="flex-1 flex flex-col min-h-0 min-w-0 overflow-hidden">
              {isSplitView ? (
                /* Resizable Split Layout: Classroom Walkthrough + Workspace */
                <ResizableSplitLayout
                  leftContent={
                    <div className="h-full pr-1.5 flex flex-col min-h-0 overflow-hidden">
                      <WalkthroughPanel
                        lessonLabel={activeManifest.lessonLabel}
                        category={activeManifest.category}
                        step={currentStep}
                        totalSteps={activeManifest.walkthroughSteps.length}
                        onSelectStep={(idx) => handleSelectStep(idx + 1)}
                        onJoinPractical={() => {
                          setIsSplitView(false);
                          setMode('practical');
                        }}
                        onNextStep={handleNextSlide}
                        isLastStep={currentSlideIndex === activeManifest.walkthroughSteps.length}
                        isSpeaking={isPlaying}
                        isMuted={isMuted}
                        onToggleMute={() => setIsMuted(!isMuted)}
                        instructor={selectedInstructor}
                        onOpenInstructorModal={() => setIsInstructorModalOpen(true)}
                      />
                    </div>
                  }
                  rightContent={
                    <div className="h-full pl-1.5 flex flex-col gap-3 min-h-0 overflow-y-auto">
                      {evaluatorResult && (
                        <StructuredFeedbackCard
                          evaluatorResult={evaluatorResult}
                          onClose={() => setEvaluatorResult(null)}
                        />
                      )}

                      <div className="min-h-[340px] flex-1">
                        <PracticalWorkspace
                          manifest={activeManifest}
                          activeFileName={activeFileName}
                          filesContent={filesContent}
                          onUpdateFileContent={handleUpdateFileContent}
                          onCommandRun={handleCommandRun}
                          onSimulationCompleted={handleSimulationCompleted}
                          lastSavedTimestamp={lastSavedTimestamp}
                        />
                      </div>

                      <MissionAndMilestonePanel
                        manifest={activeManifest}
                        completedTaskIds={completedTaskIds}
                        onCheckTasks={handleCheckTasks}
                        feedbackMessage={feedbackMessage}
                        evaluatorScore={evaluatorResult?.score}
                      />
                    </div>
                  }
                />
              ) : (
                /* Single View: Compact Practical Workspace (Zero Scrolling) */
                <div className="h-full flex flex-col gap-2 min-h-0 overflow-hidden">
                  {/* Practical Workspace: Fills full available screen height */}
                  <div className="flex-1 min-h-0 overflow-hidden">
                    <PracticalWorkspace
                      manifest={activeManifest}
                      activeFileName={activeFileName}
                      filesContent={filesContent}
                      onUpdateFileContent={handleUpdateFileContent}
                      onCommandRun={handleCommandRun}
                      onSimulationCompleted={handleSimulationCompleted}
                      lastSavedTimestamp={lastSavedTimestamp}
                    />
                  </div>

                  {/* High-Readability Docked Milestones Bar (Zero scrolling) */}
                  <div className="px-3 py-1.5 bg-white rounded-xl border border-slate-200/90 shadow-2xs flex items-center justify-between gap-3 shrink-0 select-none">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-[10px] uppercase font-mono font-bold text-slate-400 shrink-0">
                        Milestones:
                      </span>
                      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                        {activeManifest.tasks.map((task, idx) => {
                          const isDone = completedTaskIds.includes(task.id);
                          return (
                            <span
                              key={task.id}
                              className={`text-[11px] font-mono px-2 py-0.5 rounded-md flex items-center gap-1.5 shrink-0 transition-colors ${
                                isDone
                                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold'
                                  : 'bg-slate-100 text-slate-700 border border-slate-200 font-medium'
                              }`}
                              title={task.description}
                            >
                              <span className="font-bold">{isDone ? '✓' : `Step ${idx + 1}`}</span>
                              <span className="truncate max-w-[160px]">{task.title}</span>
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {feedbackMessage && (
                        <span className="hidden md:inline text-[11px] font-mono text-emerald-700 bg-emerald-50/80 px-2 py-0.5 rounded border border-emerald-200 truncate max-w-[280px]">
                          {feedbackMessage}
                        </span>
                      )}

                      {evaluatorResult && (
                        <span
                          className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md border ${
                            evaluatorResult.score >= 75
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                              : 'bg-amber-50 text-amber-800 border-amber-300'
                          }`}
                        >
                          Score: {evaluatorResult.score}/100
                        </span>
                      )}

                      <button
                        onClick={handleCheckTasks}
                        className="px-3 py-1 rounded-lg text-xs font-bold font-mono bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xs transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Verify Tasks</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Bottom Playback Scrubber Control Bar (Only shown in Practice/Split view, ClassroomTeachView has its own native scrubber bar matching image_10250715.png) */}
        {mode === 'practical' && !isSplitView && (
          <PlaybackControlBar
            currentTime={currentTime}
            durationSeconds={activeManifest.durationSeconds}
            isPlaying={isPlaying}
            onTogglePlay={() => setIsPlaying(!isPlaying)}
            onReplay={() => {
              setCurrentTime(0);
              setIsPlaying(true);
            }}
            onSeek={handleSeek}
            mode={mode}
            onToggleMode={() => setMode('teach')}
            isSpeaking={isPlaying}
            isMuted={isMuted}
            onToggleMute={() => setIsMuted(!isMuted)}
            activityLabel={`PRACTICAL WORKSPACE: ${activeManifest.title}`}
            playbackSpeed={playbackSpeed}
            onChangeSpeed={(s) => setPlaybackSpeed(s)}
          />
        )}
      </div>

      {/* Instructor Persona Modal */}
      {isInstructorModalOpen && (
        <InstructorPersonaModal
          selectedPersonaId={selectedInstructor.id}
          onSelectPersona={(persona) => {
            setSelectedInstructor(persona);
            setIsInstructorModalOpen(false);
          }}
          onClose={() => setIsInstructorModalOpen(false)}
        />
      )}
    </div>
  );
}
