import React, { useState, useEffect, useRef, useCallback } from "react";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Shield, 
  Code, 
  Terminal, 
  Sparkles, 
  Award, 
  Lock, 
  Unlock, 
  Radio, 
  GraduationCap, 
  MessageSquareQuote,
  AlertCircle,
  FileText,
  Sliders,
  ChevronDown,
  ChevronUp,
  FileCheck,
  CheckCircle2
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

interface CodeLine {
  text: string;
  comment?: string;
  isIndent?: number;
  highlight?: boolean;
  errorLine?: boolean;
}

interface PracticalPhase {
  id: number;
  stepNumber: string;
  title: string;
  subtitle: string;
  startSec: number;
  duration: number; // in seconds (total 270 seconds = 4.5 minutes)
  icon: React.ElementType;
  badge: string;
  accessRule: string;
  spokenScript: string;
  subtitles: string[];
  codeLines: CodeLine[];
  terminalContent: {
    command: string;
    status: string;
    lines: { text: string; type: "cmd" | "info" | "success" | "error" | "warn" }[];
    summary: string;
  };
  keyTakeaway: string;
}

const TOTAL_DURATION = 270; // 4 minutes and 30 seconds (Intensive Masterclass Simulation)

const PHASES: PracticalPhase[] = [
  {
    id: 1,
    stepNumber: "Step 01",
    title: "Base Class Architecture & Protected Scope",
    subtitle: "Declaring Logger with protected logLevel and public log interface",
    startSec: 0,
    duration: 54,
    icon: Code,
    badge: "00:00 - 00:54",
    accessRule: "Protected Member Invariance",
    spokenScript: "Welcome to Cohortia! I'm thrilled to guide you through this interactive preview of our C++ Certified Professional Programmer masterclass. Today, we're designing an enterprise-grade hierarchical logging system. In step one, we construct our base Logger class. Notice how we designate the log level as protected. In modern C++, protected members are accessible to derived subclasses, while remaining completely shielded from external callers. We also provide a public log method to give callers a clean, standardized printing interface.",
    subtitles: [
      "Welcome to this interactive preview of Cohortia's C++ Certified Professional Programmer curriculum.",
      "Today, we are walking through the design of a hierarchical logging system with robust encapsulation.",
      "Step one: We declare the base Logger class with a protected logLevel variable.",
      "Protected members can be accessed by child classes, but are shielded from outside callers.",
      "We provide a public log method so callers receive a consistent message output format."
    ],
    codeLines: [
      { text: "#include <iostream>", comment: "// Standard input/output streams" },
      { text: "#include <string>", comment: "// String container" },
      { text: "" },
      { text: "// 1. Base Logger class" },
      { text: "class Logger {" },
      { text: "protected:", isIndent: 1, highlight: true },
      { text: "int logLevel; // Protected member accessible only to derived classes", isIndent: 2 },
      { text: "public:", isIndent: 1 },
      { text: "Logger(int level = 0) : logLevel(level) {}", isIndent: 2 },
      { text: "void log(const std::string& message) {", isIndent: 2 },
      { text: 'std::cout << "[Level " << logLevel << "] " << message << std::endl;', isIndent: 3 },
      { text: "}", isIndent: 2 },
      { text: "};" }
    ],
    terminalContent: {
      command: "clang++ -std=c++20 -Wall -Wextra -c Logger.cpp -o Logger.o",
      status: "SIMULATED COMPILATION (0 WARNINGS)",
      lines: [
        { text: "[SIMULATION] Parsing translation unit: Logger.cpp...", type: "cmd" },
        { text: "Verifying access specifiers: 'protected int logLevel' registered in class table.", type: "info" },
        { text: "Verifying method signature: 'void Logger::log(const std::string&)' in public vtable.", type: "info" },
        { text: "Inlining default constructor: Logger(int level = 0) with member initializer.", type: "info" },
        { text: "==> Simulated build target Logger.o generated cleanly (illustrative result).", type: "success" }
      ],
      summary: "Illustrative simulation: Protected member invariance satisfied. Base translation unit ready for specialization."
    },
    keyTakeaway: "Use 'protected' when derived classes must inspect or adjust internal state without exposing it to client code."
  },
  {
    id: 2,
    stepNumber: "Step 02",
    title: "Public Inheritance & ConsoleLogger",
    subtitle: "Extending Logger publicly with displayLog and testAccess verification",
    startSec: 54,
    duration: 54,
    icon: Unlock,
    badge: "00:54 - 01:48",
    accessRule: "Public Inheritance (is-a)",
    spokenScript: "Now let's build our first specialized logger: ConsoleLogger. Notice our inheritance syntax: class ConsoleLogger publicly inherits from Logger. In object-oriented C++, public inheritance establishes a strict is-a relationship. All public members of Logger remain public, and all protected members remain protected. Inside displayLog, we seamlessly invoke our base log method. And inside testAccess, our child class reads and modifies the protected log level without any friction.",
    subtitles: [
      "Step two: We create ConsoleLogger using public inheritance from Logger.",
      "Public inheritance represents an 'is-a' relationship in object-oriented programming.",
      "All base public members stay public, and protected members stay protected.",
      "Inside displayLog, we delegate message formatting directly to the base log function.",
      "Inside testAccess, ConsoleLogger proves direct access to the protected logLevel."
    ],
    codeLines: [
      { text: "// 2. ConsoleLogger (Public Inheritance)" },
      { text: "class ConsoleLogger : public Logger {", highlight: true },
      { text: "public:", isIndent: 1 },
      { text: "ConsoleLogger(int level) : Logger(level) {}", isIndent: 2 },
      { text: "void displayLog(const std::string& message) {", isIndent: 2 },
      { text: "// Call base log method seamlessly", isIndent: 3 },
      { text: "log(message);", isIndent: 3, highlight: true },
      { text: "}", isIndent: 2 },
      { text: "// Test access to protected member", isIndent: 2 },
      { text: "void testAccess() {", isIndent: 2 },
      { text: "logLevel = 1; // Permitted because logLevel is protected in ConsoleLogger", isIndent: 3 },
      { text: 'std::cout << "ConsoleLogger can access protected logLevel: " << logLevel << std::endl;', isIndent: 3 },
      { text: "}", isIndent: 2 },
      { text: "};" }
    ],
    terminalContent: {
      command: "./test_console_logger",
      status: "SIMULATED TEST PASSED (RETURN CODE 0)",
      lines: [
        { text: "[SIMULATION] Executing test suite for ConsoleLogger specialization...", type: "cmd" },
        { text: "[RUN ] ConsoleLoggerTest.PublicInheritanceCall", type: "info" },
        { text: "[Level 1] This is a console message.", type: "success" },
        { text: "[RUN ] ConsoleLoggerTest.ProtectedMemberReadWrite", type: "info" },
        { text: "ConsoleLogger can access protected logLevel: 1", type: "success" },
        { text: "==> Simulated assertion: Base class log() and protected logLevel accessible.", type: "success" }
      ],
      summary: "Illustrative simulation: Public inheritance maintains base class interface, enabling clean polymorphism."
    },
    keyTakeaway: "Public inheritance preserves access tiers: public remains public, and protected remains protected."
  },
  {
    id: 3,
    stepNumber: "Step 03",
    title: "Private Inheritance & FileLogger",
    subtitle: "Privatizing base members to build an implemented-in-terms-of disk logger",
    startSec: 108,
    duration: 54,
    icon: Lock,
    badge: "01:48 - 02:42",
    accessRule: "Private Inheritance (implemented-in-terms-of)",
    spokenScript: "Now we arrive at one of the most powerful and misunderstood features in C++: private inheritance. Here, FileLogger privately inherits from Logger. This represents an implemented-in-terms-of relationship. Everything that was public or protected in Logger now becomes completely private inside FileLogger! Callers can no longer see the base log method. Inside writeLogToFile, we set the private log level to five, open a file stream to app.log, and write our record to disk safely.",
    subtitles: [
      "Step three: We implement FileLogger using private inheritance from Logger.",
      "Private inheritance means 'implemented-in-terms-of', rather than 'is-a'.",
      "Crucially: Public and protected members of Logger become private inside FileLogger!",
      "Inside writeLogToFile, we set logLevel to 5 and write structured logs to disk.",
      "We provide internalLog as a controlled gateway for internal message delegation."
    ],
    codeLines: [
      { text: "#include <fstream> // Required for file streaming", comment: "// Disk I/O" },
      { text: "" },
      { text: "// 3. FileLogger (Private Inheritance)" },
      { text: "class FileLogger : private Logger {", highlight: true },
      { text: "public:", isIndent: 1 },
      { text: "FileLogger(int level) : Logger(level) {}", isIndent: 2 },
      { text: "void writeLogToFile(const std::string& filename, const std::string& message) {", isIndent: 2 },
      { text: "logLevel = 5; // Valid: accessible privately within FileLogger", isIndent: 3 },
      { text: "std::ofstream file(filename, std::ios_base::app);", isIndent: 3 },
      { text: "if (file.is_open()) {", isIndent: 3 },
      { text: 'file << "[File Log Level " << logLevel << "] " << message << std::endl;', isIndent: 4 },
      { text: "file.close();", isIndent: 4 },
      { text: 'std::cout << "Logged to file: " << filename << std::endl;', isIndent: 4 },
      { text: "}", isIndent: 3 },
      { text: "}", isIndent: 2 },
      { text: "void internalLog(const std::string& message) { log(message); }", isIndent: 2 },
      { text: "};" }
    ],
    terminalContent: {
      command: "./test_file_logger && ls -l app.log",
      status: "SIMULATED DISK WRITE (24 BYTES)",
      lines: [
        { text: "[SIMULATION] Executing test suite for FileLogger disk streaming...", type: "cmd" },
        { text: "Opening file handle: app.log (mode: std::ios_base::app)", type: "info" },
        { text: "Logged to file: app.log", type: "success" },
        { text: "-rw-r--r-- 1 student staff 38 Sep 28 app.log", type: "info" },
        { text: "Payload content: '[File Log Level 5] This is a file message.'", type: "success" },
        { text: "==> Simulated encapsulation check: fl.log() rejected from main driver as expected.", type: "success" }
      ],
      summary: "Illustrative simulation: Private inheritance seals the base class interface. All base methods are now internal."
    },
    keyTakeaway: "Use private inheritance when you want to reuse implementation details without exposing base methods."
  },
  {
    id: 4,
    stepNumber: "Step 04",
    title: "SecureFileLogger & Compiler Diagnostics",
    subtitle: "Diagnosing access violations and implementing encryption encapsulation",
    startSec: 162,
    duration: 54,
    icon: AlertCircle,
    badge: "02:42 - 03:36",
    accessRule: "Access Violation & Encapsulation",
    spokenScript: "Pay close attention to step four, because this demonstrates a classic technical interview question and real architectural vulnerability. We create SecureFileLogger, which publicly inherits from FileLogger. Look at what happens if we attempt to directly change the log level or call base log: the Clang compiler abruptly halts with an error! Why? Because FileLogger inherited them privately, completely cutting off subclasses. The proper, professional solution is encapsulation: we call FileLogger's public writeLogToFile, prepending our encrypted payload.",
    subtitles: [
      "Step four: We build SecureFileLogger, inheriting publicly from FileLogger.",
      "Attempting to write 'logLevel = 10' or call 'log()' triggers immediate compiler errors!",
      "Why? Because FileLogger inherited them privately, cutting off derived subclasses.",
      "This illustrative compiler diagnostic proves that private inheritance prevents unintended leakage.",
      "To resolve this cleanly, we use FileLogger's public interface to stream encrypted data."
    ],
    codeLines: [
      { text: "// 4. SecureFileLogger (Public Inheritance from FileLogger)" },
      { text: "class SecureFileLogger : public FileLogger {", highlight: true },
      { text: "public:", isIndent: 1 },
      { text: "SecureFileLogger(int level) : FileLogger(level) {}", isIndent: 2 },
      { text: "void encryptAndWrite(const std::string& filename, const std::string& message) {", isIndent: 2 },
      { text: 'std::cout << "Encrypting message before writing..." << std::endl;', isIndent: 3 },
      { text: "// logLevel = 10;  --> COMPILER ERROR: 'logLevel' is private in FileLogger", isIndent: 3, errorLine: true },
      { text: "// log(message);   --> COMPILER ERROR: 'log()' is private in FileLogger", isIndent: 3, errorLine: true },
      { text: "// Professional solution: Use FileLogger's public interface with encryption", isIndent: 3 },
      { text: 'writeLogToFile(filename, "[ENCRYPTED] " + message);', isIndent: 3, highlight: true },
      { text: "}", isIndent: 2 },
      { text: "};" }
    ],
    terminalContent: {
      command: "clang++ -std=c++20 SecureFileLogger.cpp -c",
      status: "SIMULATED CLANG DIAGNOSTIC & FIX",
      lines: [
        { text: "[SIMULATION] Analyzing access control in SecureFileLogger::encryptAndWrite...", type: "cmd" },
        { text: "SecureFileLogger.cpp:14:9: error: 'logLevel' is a private member of 'Logger'", type: "error" },
        { text: "  Candidate declared private due to 'class FileLogger : private Logger'", type: "warn" },
        { text: "SecureFileLogger.cpp:15:9: error: 'log' is a private member of 'Logger'", type: "error" },
        { text: "Applying pedagogical fix: Delegating through FileLogger::writeLogToFile()...", type: "info" },
        { text: "==> Compilation simulation succeeded after applying encapsulation pattern.", type: "success" }
      ],
      summary: "Illustrative simulation: Private inheritance successfully prevented subclasses from tampering with base logging levels."
    },
    keyTakeaway: "Subclasses cannot penetrate private inheritance. You must interact through the public API."
  },
  {
    id: 5,
    stepNumber: "Step 05",
    title: "Production Driver, Valgrind & Milestone Proof",
    subtitle: "Executing all 3 specialized loggers with zero memory leaks and Capstone grade",
    startSec: 216,
    duration: 54,
    icon: Award,
    badge: "03:36 - 04:30",
    accessRule: "Production Verification (Zero Leaks)",
    spokenScript: "Now let's bring our entire architecture together in main! We instantiate our ConsoleLogger, our FileLogger, and our SecureFileLogger. Watch our terminal simulation run: the console outputs formatted alerts, FileLogger writes app.log, and SecureFileLogger successfully encrypts sensitive records. All simulated assertions pass, and Valgrind confirms zero memory leaks. Congratulations! You've just explored an enterprise-grade C++ logging hierarchy. Welcome to Cohortia, where you master software engineering by building real systems.",
    subtitles: [
      "Step five: We bring our complete architecture together in the main() driver.",
      "We instantiate ConsoleLogger, FileLogger, and SecureFileLogger instances.",
      "Notice how attempting illegal access from main() is caught at compile time.",
      "All unit tests pass in this simulation, modeling zero memory leaks or dangling pointers.",
      "Congratulations! You've previewed the curriculum and explored verified CPP Capstone standards."
    ],
    codeLines: [
      { text: "int main() {" },
      { text: "ConsoleLogger cl(1);", isIndent: 1 },
      { text: 'cl.displayLog("This is a console message.");', isIndent: 1 },
      { text: "cl.testAccess();", isIndent: 1 },
      { text: "// cl.logLevel = 2; // ERROR: protected in ConsoleLogger", isIndent: 1 },
      { text: "" },
      { text: "FileLogger fl(3);", isIndent: 1 },
      { text: 'fl.writeLogToFile("app.log", "This is a file message.");', isIndent: 1 },
      { text: 'fl.internalLog("Internal delegation message.");', isIndent: 1 },
      { text: "// fl.log(\"Direct\"); // ERROR: private in FileLogger", isIndent: 1 },
      { text: "" },
      { text: "SecureFileLogger sfl(4);", isIndent: 1 },
      { text: 'sfl.encryptAndWrite("secure_app.log", "Sensitive payload.");', isIndent: 1 },
      { text: "return 0;", isIndent: 1 },
      { text: "}" }
    ],
    terminalContent: {
      command: "./logger_master_suite && valgrind --leak-check=full ./logger_master_suite",
      status: "SIMULATED SUITE PASSED • VALGRIND CLEAN",
      lines: [
        { text: "[SIMULATION] TestSuite.ConsoleLoggerDispatch ==> [Level 1] This is a console message.", type: "success" },
        { text: "[SIMULATION] TestSuite.FileLoggerPersistence ==> app.log created with level 5 formatting.", type: "success" },
        { text: "[SIMULATION] TestSuite.SecureFileLoggerEncryption ==> [ENCRYPTED] payload written safely.", type: "success" },
        { text: "==54902== Memcheck: a memory error detector (simulated model)", type: "info" },
        { text: "==54902== HEAP SUMMARY: in use at exit: 0 bytes in 0 blocks", type: "success" },
        { text: "==54902== All heap blocks were freed -- no leaks are possible", type: "success" },
        { text: "==> Milestone 04 Complete: Grade A+ (100% Spec Compliance).", type: "success" }
      ],
      summary: "Illustrative simulation: Enterprise C++ Logging Architecture verified. Ready for portfolio showcase."
    },
    keyTakeaway: "Congratulations! You've explored public vs private inheritance and memory safety in C++."
  }
];

export interface PracticalLearningBoardSimulationProps {
  aspectRatio?: "16:9" | "auto";
  onComplete?: () => void;
  isCompleted?: boolean;
  showHeaderPills?: boolean;
}

export default function PracticalLearningBoardSimulation({
  aspectRatio = "16:9",
  onComplete,
  isCompleted = false,
  showHeaderPills = true
}: PracticalLearningBoardSimulationProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Start PAUSED by default - do not autoplay motion or audio on page load
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStartedByUser, setHasStartedByUser] = useState(false);
  const [currentTime, setCurrentTime] = useState(0); // in seconds (0 to 270)
  const [isVoiceMuted, setIsVoiceMuted] = useState(false);
  const [activeTab, setActiveTab] = useState<"code" | "terminal" | "spec">("code");
  const [showFullTranscript, setShowFullTranscript] = useState(false);

  // Accurate voice state
  const [voiceDisplayName, setVoiceDisplayName] = useState<string>("Detecting browser voice...");
  const [speechSynthesisAvailable, setSpeechSynthesisAvailable] = useState<boolean>(true);

  // Check prefers-reduced-motion
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);
  const currentSpokenPhaseRef = useRef<number | null>(null);
  const voiceInstanceRef = useRef<SpeechSynthesisVoice | null>(null);

  // Detect reduced motion preferences
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);
      const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener("change", listener);
      return () => mediaQuery.removeEventListener("change", listener);
    }
  }, []);

  // Voice detection: accurate label without false claims
  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setSpeechSynthesisAvailable(false);
      setVoiceDisplayName("Speech synthesis not supported (Subtitles only)");
      return;
    }

    const selectVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      if (!voices || voices.length === 0) {
        setVoiceDisplayName("Default Browser Voice");
        return;
      }

      // 1. Try to find Microsoft Ava
      const ava = voices.find((v) => 
        v.name.toLowerCase().includes("ava") || 
        v.name.toLowerCase().includes("microsoft ava")
      );

      if (ava) {
        voiceInstanceRef.current = ava;
        setVoiceDisplayName("Microsoft Ava (Online Natural)");
        return;
      }

      // 2. Try to find other high-quality natural voices
      const natural = voices.find((v) => 
        (v.name.includes("Natural") || v.name.includes("Neural")) && 
        v.lang.startsWith("en")
      );

      if (natural) {
        voiceInstanceRef.current = natural;
        setVoiceDisplayName(`${natural.name}`);
        return;
      }

      // 3. Fallback to standard English voice
      const englishVoice = voices.find((v) => 
        (v.name.includes("Google") || v.name.includes("Samantha")) && v.lang.startsWith("en")
      ) || voices.find((v) => v.lang.startsWith("en")) || voices[0];

      if (englishVoice) {
        voiceInstanceRef.current = englishVoice;
        setVoiceDisplayName(`${englishVoice.name}`);
      } else {
        setVoiceDisplayName("System Default Voice");
      }
    };

    selectVoice();
    window.speechSynthesis.onvoiceschanged = selectVoice;

    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Determine active phase based on currentTime (0 to 270)
  let activePhaseIndex = 0;
  for (let i = 0; i < PHASES.length; i++) {
    const phase = PHASES[i];
    if (currentTime >= phase.startSec && currentTime < phase.startSec + phase.duration) {
      activePhaseIndex = i;
      break;
    }
  }

  const activePhase = PHASES[activePhaseIndex];
  const phaseElapsed = currentTime - activePhase.startSec;
  const activePhaseProgress = Math.min(1, Math.max(0, phaseElapsed / activePhase.duration));

  // Determine current active subtitle index
  const currentSubtitleIndex = Math.min(
    activePhase.subtitles.length - 1,
    Math.floor(activePhaseProgress * activePhase.subtitles.length)
  );
  const currentSubtitle = activePhase.subtitles[currentSubtitleIndex];

  // Animated line-by-line typing count
  const totalLines = activePhase.codeLines.length;
  const typedLineCount = prefersReducedMotion
    ? totalLines
    : Math.min(
        totalLines,
        Math.max(1, Math.floor((activePhaseProgress / 0.8) * totalLines))
      );

  // Warm voice narration execution
  const speakPhaseNarration = useCallback((phaseIndex: number) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    if (isVoiceMuted || !hasStartedByUser) {
      window.speechSynthesis.cancel();
      return;
    }

    window.speechSynthesis.cancel();

    const phase = PHASES[phaseIndex];
    const utterance = new SpeechSynthesisUtterance(phase.spokenScript);
    
    // Warm teacher speech settings
    utterance.rate = 1.0;
    utterance.pitch = 1.05;
    utterance.lang = "en-US";

    if (voiceInstanceRef.current) {
      utterance.voice = voiceInstanceRef.current;
    }

    utterance.onerror = () => {
      // Graceful fallback for browser autoplay or user cancellation
    };

    window.speechSynthesis.speak(utterance);
    currentSpokenPhaseRef.current = phaseIndex;
  }, [isVoiceMuted, hasStartedByUser]);

  // Synchronize narration with phase transitions ONLY when playing and started by user
  useEffect(() => {
    if (!isPlaying || isVoiceMuted || !hasStartedByUser) {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      return;
    }

    if (currentSpokenPhaseRef.current !== activePhaseIndex) {
      speakPhaseNarration(activePhaseIndex);
    }
  }, [activePhaseIndex, isPlaying, isVoiceMuted, hasStartedByUser, speakPhaseNarration]);

  // Master Animation Loop (270 seconds)
  useEffect(() => {
    if (!isPlaying) {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
        requestRef.current = null;
      }
      previousTimeRef.current = null;
      return;
    }

    const animate = (time: number) => {
      if (previousTimeRef.current !== null) {
        const deltaTime = (time - previousTimeRef.current) / 1000;
        setCurrentTime((prev) => {
          const next = prev + deltaTime;
          if (next >= TOTAL_DURATION) {
            return 0; // Loop back
          }
          return next;
        });
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isPlaying]);

  // Format seconds to mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const handleSeekRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetSec = Number(e.target.value);
    setCurrentTime(targetSec);
    currentSpokenPhaseRef.current = null;
    if (isPlaying && !isVoiceMuted && hasStartedByUser) {
      let newPhaseIdx = 0;
      for (let i = 0; i < PHASES.length; i++) {
        if (targetSec >= PHASES[i].startSec && targetSec < PHASES[i].startSec + PHASES[i].duration) {
          newPhaseIdx = i;
          break;
        }
      }
      speakPhaseNarration(newPhaseIdx);
    }
  };

  const jumpToPhase = (phaseIndex: number) => {
    setCurrentTime(PHASES[phaseIndex].startSec);
    currentSpokenPhaseRef.current = null;
    if (isPlaying && !isVoiceMuted && hasStartedByUser) {
      speakPhaseNarration(phaseIndex);
    }
  };

  const togglePlay = () => {
    const nextPlay = !isPlaying;
    setIsPlaying(nextPlay);
    setHasStartedByUser(true);
    if (nextPlay) {
      speakPhaseNarration(activePhaseIndex);
    } else {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    }
  };

  const is16by9 = aspectRatio === "16:9";

  const playerShellClass = isDark
    ? `relative ${is16by9 ? "w-full aspect-[16/9] min-h-[500px] sm:min-h-[580px] lg:min-h-[640px]" : "min-h-[520px] w-full"} rounded-3xl bg-[#090a10] border border-immersive-border/60 shadow-2xl shadow-immersive-shadow overflow-hidden flex flex-col justify-between`
    : `relative ${is16by9 ? "w-full aspect-[16/9] min-h-[500px] sm:min-h-[580px] lg:min-h-[640px]" : "min-h-[520px] w-full"} rounded-3xl bg-white border border-slate-200 shadow-2xl shadow-slate-200/60 overflow-hidden flex flex-col justify-between`;

  const codePaneClass = isDark ? "bg-[#06080e] border-white/10" : "bg-slate-900 border-slate-700";

  return (
    <div className="w-full flex flex-col space-y-4 text-left">
      {/* TOP STEP NAVIGATION PILLS */}
      {showHeaderPills && (
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2 scrollbar-none">
          {PHASES.map((phase, index) => {
            const isSelected = activePhaseIndex === index;
            const Icon = phase.icon;
            return (
              <button
                key={phase.id}
                onClick={() => jumpToPhase(index)}
                aria-label={`Jump to ${phase.stepNumber}: ${phase.title}`}
                className={`flex-1 min-w-[190px] p-3 rounded-2xl border text-left transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B3E] ${
                  isSelected
                    ? "bg-[#FF4B3E]/10 border-[#FF4B3E] shadow-lg shadow-[#FF4B3E]/10"
                    : "bg-immersive-card border-immersive-border/60 hover:border-immersive-border hover:bg-immersive-card-hover"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-mono font-bold uppercase ${isSelected ? "text-[#FF4B3E]" : "text-slate-400"}`}>
                    {phase.stepNumber}
                  </span>
                  <span className="text-[9px] font-mono text-slate-500">
                    {phase.badge}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? "text-[#FF4B3E]" : "text-slate-400"}`} />
                  <span className={`text-xs font-bold truncate ${isSelected ? "text-immersive-text-primary" : "text-immersive-text-secondary"}`}>
                    {phase.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* 16:9 PRACTICAL SIMULATION BOARD */}
      <div className={playerShellClass}>
        
        {/* TOP HEADER: File tab, live mode switches & accurate voice status */}
        <div className="p-3.5 sm:p-4 border-b border-white/10 bg-black/50 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 select-none">
          <div className="flex items-center space-x-2.5">
            <div className="flex space-x-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 bg-rose-500 rounded-full" />
              <span className="w-2.5 h-2.5 bg-amber-500 rounded-full" />
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
            </div>
            <div className="h-4 w-px bg-white/20" />
            <span className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-[#FF4B3E]" />
              <span>HierarchicalLoggingSystem.cpp</span>
            </span>
            <span className="text-[9px] font-mono text-slate-400 bg-white/[0.06] px-2 py-0.5 rounded border border-white/10">
              C++ (CPP) Practical
            </span>
          </div>

          {/* View switcher tabs with accessible ARIA labels & focus styles */}
          <div 
            role="tablist" 
            aria-label="Simulation display modes" 
            className="flex items-center space-x-1 bg-white/[0.06] p-1 rounded-xl border border-white/10 text-[11px] font-mono font-semibold"
          >
            <button
              role="tab"
              aria-selected={activeTab === "code"}
              aria-label="Switch to Live Code Simulator"
              onClick={() => setActiveTab("code")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B3E] ${
                activeTab === "code" ? "bg-[#FF4B3E] text-white shadow-md shadow-[#FF4B3E]/20" : "text-slate-400 hover:text-white"
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              <span>Code Simulator</span>
            </button>

            <button
              role="tab"
              aria-selected={activeTab === "terminal"}
              aria-label="Switch to Step Terminal Screen"
              onClick={() => setActiveTab("terminal")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B3E] ${
                activeTab === "terminal" ? "bg-[#FF4B3E] text-white shadow-md shadow-[#FF4B3E]/20" : "text-slate-400 hover:text-white"
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Terminal Simulation</span>
            </button>

            <button
              role="tab"
              aria-selected={activeTab === "spec"}
              aria-label="Switch to Inheritance Access Matrix"
              onClick={() => setActiveTab("spec")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B3E] ${
                activeTab === "spec" ? "bg-[#FF4B3E] text-white shadow-md shadow-[#FF4B3E]/20" : "text-slate-400 hover:text-white"
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Access Matrix</span>
            </button>
          </div>

          {/* Step & Action button */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono bg-[#FF4B3E]/10 text-[#FF4B3E] border border-[#FF4B3E]/30 px-2.5 py-1 rounded-full font-bold">
              {activePhase.stepNumber}: {activePhase.accessRule}
            </span>
            {onComplete && (
              <button
                onClick={onComplete}
                className={`px-3 py-1 rounded-full text-[11px] font-bold font-mono transition-all flex items-center gap-1.5 cursor-pointer shadow-md ${
                  isCompleted 
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40" 
                    : "bg-[#FF4B3E] hover:bg-[#e33d32] text-white shadow-[#FF4B3E]/20"
                }`}
              >
                {isCompleted ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Award className="w-3.5 h-3.5" />}
                <span>{isCompleted ? "Practical Done ✓" : "Finish Practical"}</span>
              </button>
            )}
          </div>
        </div>

        {/* CENTER WORKSPACE PANE */}
        <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between overflow-hidden relative">
          
          {/* Unstarted Overlay */}
          {!hasStartedByUser && !isPlaying && (
            <div className="absolute inset-0 z-20 bg-black/75 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center">
              <div className="w-16 h-16 rounded-3xl bg-[#FF4B3E] text-white flex items-center justify-center mb-4 shadow-xl shadow-[#FF4B3E]/30 animate-bounce">
                <Play className="w-8 h-8 ml-1" />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Start 16:9 Practical Learning Board Walkthrough
              </h3>
              <p className="mt-2 text-sm text-slate-300 max-w-md">
                Launch the interactive hands-on activity simulation with animated line-by-line typing and teacher audio narration.
              </p>
              <button
                onClick={togglePlay}
                aria-label="Start Interactive Simulation Tour"
                className="mt-5 px-6 py-2.5 rounded-2xl bg-[#FF4B3E] hover:brightness-110 text-white font-bold text-sm transition-all shadow-lg shadow-[#FF4B3E]/25 flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Begin Practical Tour</span>
              </button>
            </div>
          )}

          {/* 1. CODE SIMULATOR TAB (Line-by-Line Animated Typing) */}
          {activeTab === "code" && (
            <div className="flex-1 min-h-0 flex flex-col justify-between">
              <div className={`${codePaneClass} rounded-2xl p-5 flex-1 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-y-auto max-h-[380px] border border-white/10 relative shadow-inner space-y-1`}>
                
                {/* Header inside Editor */}
                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                  <span className="text-[11px] font-mono text-[#FF4B3E] font-bold uppercase tracking-wider">
                    ▶ {activePhase.stepNumber}: {activePhase.title}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {prefersReducedMotion ? "Reduced Motion Mode" : `Typing: Line ${typedLineCount} of ${totalLines}`}
                  </span>
                </div>

                {/* Line by line display */}
                {activePhase.codeLines.slice(0, typedLineCount).map((line, idx) => {
                  const isCurrentActiveLine = idx === typedLineCount - 1;
                  const indentClass = line.isIndent === 1 
                    ? "pl-5" 
                    : line.isIndent === 2 
                      ? "pl-10" 
                      : line.isIndent === 3 
                        ? "pl-14" 
                        : line.isIndent === 4 
                          ? "pl-20" 
                          : "";

                  return (
                    <div
                      key={idx}
                      className={`flex items-start group rounded transition-colors ${indentClass} ${
                        line.highlight ? "bg-blue-500/10 text-white font-semibold" : ""
                      } ${line.errorLine ? "text-rose-400 bg-rose-950/20" : ""}`}
                    >
                      <span className="text-slate-600 text-[11px] select-none w-8 shrink-0 font-mono text-right pr-3" aria-hidden="true">
                        {idx + 1}
                      </span>
                      
                      <span className="flex-1 min-w-0">
                        {line.text}
                        {isCurrentActiveLine && isPlaying && !prefersReducedMotion && (
                          <span className="inline-block w-2 h-4 bg-[#FF4B3E] ml-1 animate-pulse align-middle" aria-hidden="true" />
                        )}
                        {line.comment && (
                          <span className="text-slate-500 ml-2 italic text-[11px]">
                            {line.comment}
                          </span>
                        )}
                      </span>
                    </div>
                  );
                })}

                {/* Teacher Annotation Callout */}
                <div className="mt-4 p-3.5 bg-gradient-to-r from-blue-950/30 to-purple-950/30 border border-blue-500/30 rounded-xl flex items-start gap-3 text-xs font-sans text-slate-200">
                  <Sparkles className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-blue-300 font-mono text-[11px] uppercase block">
                      TEACHER'S ARCHITECTURAL NOTE
                    </strong>
                    <p className="mt-0.5 text-xs text-slate-300 leading-relaxed font-medium">
                      {activePhase.keyTakeaway}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* 2. DEDICATED PER-STEP TERMINAL SCREEN */}
          {activeTab === "terminal" && (
            <div className="bg-[#04060c] border border-blue-500/25 rounded-2xl p-5 font-mono text-xs sm:text-[13px] text-slate-300 flex-1 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="space-y-3">
                {/* Terminal prompt bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full" aria-hidden="true" />
                    <span className="text-emerald-400 font-bold">simulated-runner@cohortia-cpp-box:~$ {activePhase.terminalContent.command}</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-white/[0.05] px-2 py-0.5 rounded">
                    Simulated Screen {activePhaseIndex + 1} of 5
                  </span>
                </div>

                {/* Status pill */}
                <div className="p-2.5 bg-white/[0.03] border border-white/5 rounded-xl flex items-center justify-between text-xs">
                  <span className="text-slate-400">Simulation Status:</span>
                  <span className="font-bold text-emerald-400">
                    {activePhase.terminalContent.status}
                  </span>
                </div>

                {/* Step lines */}
                <div className="space-y-2 pt-1 font-mono text-xs sm:text-[13px]">
                  {activePhase.terminalContent.lines.map((line, idx) => (
                    <div 
                      key={idx} 
                      className={`flex items-start gap-2.5 ${
                        line.type === "error" 
                          ? "text-rose-400 bg-rose-950/30 p-2.5 rounded-lg border border-rose-500/30" 
                          : line.type === "warn" 
                            ? "text-amber-300" 
                            : line.type === "success" 
                              ? "text-emerald-300 font-medium" 
                              : "text-slate-300"
                      }`}
                    >
                      <span className="text-slate-500 select-none" aria-hidden="true">▶</span>
                      <span>{line.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step summary footer with explicit simulation label */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="text-blue-300 font-sans font-medium">
                  ✓ {activePhase.terminalContent.summary}
                </span>
                <span className="text-emerald-400 font-mono font-bold">
                  [SIMULATION] Step {activePhaseIndex + 1} Verified
                </span>
              </div>
            </div>
          )}

          {/* 3. ACCESS SPEC MATRIX TAB */}
          {activeTab === "spec" && (
            <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-[#0b0f1d] border border-white/10 rounded-2xl p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <span className="text-xs sm:text-sm font-mono uppercase text-white font-bold">
                    C++ INHERITANCE ACCESS MATRIX (STANDARDIZED TERMINOLOGY)
                  </span>
                  <span className="text-[10px] font-mono text-[#FF4B3E] font-bold bg-[#FF4B3E]/10 px-2 py-0.5 rounded">
                    CPP CORE RULES
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                    <span className="text-[#FF4B3E] font-bold block text-sm">1. Base Logger</span>
                    <span className="text-slate-400 text-xs block">logLevel: <strong className="text-rose-400">protected</strong></span>
                    <span className="text-slate-400 text-xs block">log(): <strong className="text-emerald-400">public</strong></span>
                    <p className="text-[11px] text-slate-400 pt-2 border-t border-white/5 font-sans leading-relaxed">
                      Accessible to derived subclasses; invisible to outside client code.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-emerald-500/30 space-y-2">
                    <span className="text-emerald-400 font-bold block text-sm">2. public Logger (is-a)</span>
                    <span className="text-slate-200 text-xs block font-bold">ConsoleLogger</span>
                    <span className="text-slate-300 text-xs block">public ➔ public</span>
                    <span className="text-slate-300 text-xs block">protected ➔ protected</span>
                    <p className="text-[11px] text-slate-400 pt-2 border-t border-white/5 font-sans leading-relaxed">
                      Preserves base interface for polymorphic console logging.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-rose-500/30 space-y-2">
                    <span className="text-rose-400 font-bold block text-sm">3. private Logger</span>
                    <span className="text-slate-200 text-xs block font-bold">FileLogger (implemented-in-terms-of)</span>
                    <span className="text-rose-300 text-xs block">all base members ➔ PRIVATE</span>
                    <p className="text-[11px] text-slate-400 pt-2 border-t border-white/5 font-sans leading-relaxed">
                      Reuses base code as private implementation. Subclasses cannot access base members.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 bg-purple-500/10 border border-purple-500/30 rounded-xl flex items-center justify-between text-xs text-purple-300 font-sans">
                <span>Modern C++ Guideline: Private inheritance means 'is-implemented-in-terms-of', whereas composition describes 'has-a'.</span>
                <span className="font-mono text-[10px] bg-purple-500/20 px-2 py-0.5 rounded font-bold">CORE-I2</span>
              </div>
            </div>
          )}

        </div>

        {/* NARRATOR'S VOICE SUBTITLE & CLOSED CAPTIONS BAR */}
        <div className="p-3.5 sm:p-4 bg-gradient-to-r from-slate-900/95 via-black to-slate-900/95 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          
          {/* Voice Info Badge: Accurate name display */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-2xl bg-[#FF4B3E]/20 border border-[#FF4B3E]/40 text-[#FF4B3E] flex items-center justify-center text-sm shadow-md shadow-[#FF4B3E]/20">
              <Radio className={`w-4 h-4 ${isPlaying && !isVoiceMuted ? "animate-pulse text-[#FF4B3E]" : "text-slate-400"}`} />
            </div>
            <div>
              <span className="text-xs font-mono font-extrabold text-white block leading-tight">
                {voiceDisplayName}
              </span>
              <span className="text-[10px] font-mono text-[#FF4B3E] font-semibold">
                {speechSynthesisAvailable ? (isVoiceMuted ? "Voice Muted (Subtitles Active)" : "Teacher Audio Active") : "Subtitles Only"}
              </span>
            </div>
          </div>

          {/* Subtitle / Closed Caption Box with aria-live */}
          <div 
            role="region"
            aria-label="Current lesson subtitles"
            aria-live="polite" 
            aria-atomic="true"
            className="flex-1 min-w-[260px] bg-white/[0.04] border border-white/10 rounded-2xl px-3.5 py-2 flex items-center gap-2.5"
          >
            <MessageSquareQuote className="w-4 h-4 text-[#FF4B3E] shrink-0" aria-hidden="true" />
            <p className="text-xs sm:text-[13px] text-slate-200 font-medium leading-relaxed break-words">
              <strong className="text-[#FF4B3E] font-mono mr-1.5">{activePhase.stepNumber}:</strong>
              <span>"{currentSubtitle}"</span>
            </p>
          </div>

          {/* Control action buttons */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Full Transcript Toggle */}
            <button
              onClick={() => setShowFullTranscript(!showFullTranscript)}
              aria-expanded={showFullTranscript}
              aria-label={showFullTranscript ? "Hide lesson transcript" : "Show full lesson transcript"}
              className="px-3 py-2 rounded-xl border border-white/10 bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono font-bold text-slate-300 transition-all flex items-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B3E]"
            >
              <FileCheck className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Transcript</span>
              {showFullTranscript ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>

            {/* Voice Mute / Unmute Button */}
            <button
              onClick={() => {
                const nextMute = !isVoiceMuted;
                setIsVoiceMuted(nextMute);
                if (!nextMute && isPlaying && hasStartedByUser) {
                  speakPhaseNarration(activePhaseIndex);
                } else {
                  if (typeof window !== "undefined" && "speechSynthesis" in window) {
                    window.speechSynthesis.cancel();
                  }
                }
              }}
              aria-label={isVoiceMuted ? "Unmute narrator audio" : "Mute narrator audio"}
              className={`px-3 py-2 rounded-xl border text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B3E] ${
                isVoiceMuted 
                  ? "bg-rose-500/10 border-rose-500/30 text-rose-400 hover:bg-rose-500/20" 
                  : "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20"
              }`}
            >
              {isVoiceMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              <span className="hidden md:inline">{isVoiceMuted ? "Unmute" : "Voice On"}</span>
            </button>
          </div>
        </div>

      </div>

      {/* EXPANDABLE FULL LESSON TRANSCRIPT PANEL */}
      {showFullTranscript && (
        <div 
          role="region" 
          aria-label="Complete lesson transcript"
          className="bg-immersive-card border border-immersive-border/80 rounded-2xl p-5 space-y-4 shadow-xl"
        >
          <div className="flex items-center justify-between border-b border-immersive-border/60 pb-3">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#FF4B3E]" />
              <h3 className="text-sm font-bold text-immersive-text-primary uppercase tracking-wider font-mono">
                Full Lesson Transcript & Pedagogical Script
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Total Duration: 4m 30s
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            {PHASES.map((phase) => (
              <div 
                key={phase.id} 
                className="p-3.5 rounded-xl bg-immersive-bg border border-immersive-border space-y-2 text-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-[#FF4B3E]">
                    {phase.stepNumber}: {phase.title}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {phase.badge}
                  </span>
                </div>
                <p className="text-immersive-text-secondary leading-relaxed font-medium">
                  {phase.spokenScript}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ACCESSIBLE SLIDER & CONTROLS BAR BELOW BOARD */}
      <div className="bg-immersive-card border border-immersive-border/60 rounded-2xl p-4 flex flex-col space-y-3.5 shadow-md shadow-immersive-shadow">
        
        {/* Accessible Progress Slider Track using native range input semantics */}
        <div className="relative w-full flex items-center">
          <input
            type="range"
            min={0}
            max={TOTAL_DURATION}
            step={1}
            value={Math.round(currentTime)}
            onChange={handleSeekRange}
            aria-label="Simulation progress"
            aria-valuemin={0}
            aria-valuemax={TOTAL_DURATION}
            aria-valuenow={Math.round(currentTime)}
            aria-valuetext={`${formatTime(currentTime)} of ${formatTime(TOTAL_DURATION)}: ${activePhase.stepNumber} ${activePhase.title}`}
            className="w-full h-3 appearance-none bg-transparent cursor-pointer relative z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B3E] rounded-full"
          />
          
          {/* Visual custom gradient bar behind input */}
          <div 
            className={`absolute top-0 left-0 w-full h-2.5 rounded-full pointer-events-none overflow-hidden ${isDark ? "bg-slate-800" : "bg-slate-200"}`}
            aria-hidden="true"
          >
            <div 
              className="h-full bg-gradient-to-r from-[#FF4B3E] via-purple-500 to-emerald-400 rounded-full transition-all duration-75"
              style={{ width: `${(currentTime / TOTAL_DURATION) * 100}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          
          {/* Left Controls: Play / Pause, Reset, Timestamp */}
          <div className="flex items-center space-x-3 text-immersive-text-secondary">
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause simulation tour" : "Play simulation tour"}
              className="p-2.5 rounded-xl bg-immersive-bg hover:bg-immersive-card-hover border border-immersive-border text-immersive-text-primary transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B3E]"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
            </button>

            <button
              onClick={() => {
                setCurrentTime(0);
                currentSpokenPhaseRef.current = null;
                if (isPlaying && !isVoiceMuted && hasStartedByUser) speakPhaseNarration(0);
              }}
              aria-label="Restart simulation from Step 1"
              className="p-2.5 rounded-xl bg-immersive-bg hover:bg-immersive-card-hover border border-immersive-border text-immersive-text-secondary hover:text-immersive-text-primary transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B3E]"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <span className="text-xs font-mono font-bold select-none text-immersive-text-primary">
              {formatTime(currentTime)} <span className="text-slate-500">/</span> {formatTime(TOTAL_DURATION)}
            </span>
          </div>

          {/* Center Title Indicator */}
          <span className="hidden sm:inline text-xs font-bold text-[#FF4B3E] font-mono uppercase tracking-wider">
            ⚡ {activePhase.title}
          </span>

          {/* Right: Step Indicator */}
          <div className="flex items-center space-x-2 text-xs font-mono text-immersive-text-secondary">
            <span className="hidden md:inline font-bold">Phase {activePhaseIndex + 1} of 5</span>
            <span className="text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              ● 16:9 Practical Board
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
