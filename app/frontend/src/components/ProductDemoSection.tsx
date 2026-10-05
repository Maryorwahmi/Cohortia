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
  FileCheck
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

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

export default function ProductDemoSection() {
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
  // If user prefers reduced motion, show all lines immediately; otherwise animate smoothly
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
      // Speak for new phase if changed
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

  const playerShellClass = isDark
    ? "relative mx-auto flex min-h-[520px] w-full flex-col justify-between overflow-hidden rounded-3xl border border-immersive-border/60 bg-[#090a10] shadow-2xl shadow-immersive-shadow lg:aspect-video lg:min-h-0"
    : "relative mx-auto flex min-h-[520px] w-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/60 lg:aspect-video lg:min-h-0";

  const codePaneClass = isDark ? "bg-[#06080e] border-white/10 text-slate-300" : "bg-white border-slate-200 text-slate-800";

  return (
    <section id="practical-tour-section" className="py-14 sm:py-20 bg-immersive-bg relative overflow-hidden border-t border-immersive-border/20 text-left">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-10 w-[550px] h-[550px] bg-[#FF4B3E]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Clarified as an illustrative simulation */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-mono font-bold text-[#FF4B3E] uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#FF4B3E]/10 border border-[#FF4B3E]/20 inline-flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>INTERACTIVE BOARD SIMULATION • 4.5-MINUTE CURRICULUM PREVIEW</span>
            </span>
            <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 inline-flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>C++ Certified Professional Programmer (CPP)</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-immersive-text-primary tracking-tight leading-tight">
            Explore the <span className="text-[#FF4B3E]">Practical Learning Board</span> Simulation
          </h2>
          
          <p className="text-sm sm:text-base text-immersive-text-secondary font-medium leading-relaxed max-w-2xl mx-auto">
            This interactive walkthrough illustrates how Cohortia's <strong>Practical Learning Board</strong> guides you through hands-on activities. Experience an illustrative simulation of <strong>Designing a Hierarchical Logging System</strong> with step-by-step code construction, simulated compiler diagnostics, and warm pedagogical voice narration.
          </p>

          {/* Quick Notice Pill clarifying simulation status */}
          <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] ${isDark ? "border-white/10 bg-white/[0.04] text-slate-400" : "border-slate-200 bg-white text-slate-600"}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Illustrative simulation: Pre-rendered walkthrough showcasing curriculum structure</span>
          </div>
        </div>

        {/* FULL WIDTH PRACTICAL LEARNING BOARD CONTAINER */}
        <div className="w-full">
          <div className={playerShellClass} style={{ width: "min(100%, calc(76vh * 16 / 9))" }}>
            
            {/* TOP HEADER: File tab, live mode switches & accurate voice status */}
            <div className={`flex flex-wrap items-center justify-between gap-3 border-b p-3.5 backdrop-blur-md select-none sm:p-4 ${isDark ? "border-white/10 bg-black/50" : "border-slate-200 bg-slate-50"}`}>
              <div className="flex items-center space-x-2.5">
                <div className="flex space-x-1.5" aria-hidden="true">
                  <span className="w-2.5 h-2.5 bg-rose-500 rounded-full" />
                  <span className="w-2.5 h-2.5 bg-amber-500 rounded-full" />
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                </div>
                <div className={`h-4 w-px ${isDark ? "bg-white/20" : "bg-slate-300"}`} />
                <span className={`flex items-center gap-1.5 font-mono text-xs font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                  <FileText className="w-3.5 h-3.5 text-[#FF4B3E]" />
                  <span>HierarchicalLoggingSystem.cpp</span>
                </span>
                <span className={`rounded border px-2 py-0.5 font-mono text-[9px] ${isDark ? "border-white/10 bg-white/[0.06] text-slate-400" : "border-slate-200 bg-white text-slate-500"}`}>
                  Simulation Preview
                </span>
              </div>

              {/* View switcher tabs with accessible ARIA labels & focus styles */}
              <div 
                role="tablist" 
                aria-label="Simulation display modes" 
                className={`flex items-center space-x-1 rounded-xl border p-1 font-mono text-[11px] font-semibold ${isDark ? "border-white/10 bg-white/[0.06]" : "border-slate-200 bg-white"}`}
              >
                <button
                  role="tab"
                  aria-selected={activeTab === "code"}
                  aria-label="Switch to Live Code Simulator"
                  onClick={() => setActiveTab("code")}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B3E] ${
                    activeTab === "code" ? "bg-[#FF4B3E] text-white shadow-md shadow-[#FF4B3E]/20" : isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-950"
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
                    activeTab === "terminal" ? "bg-[#FF4B3E] text-white shadow-md shadow-[#FF4B3E]/20" : isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-950"
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
                    activeTab === "spec" ? "bg-[#FF4B3E] text-white shadow-md shadow-[#FF4B3E]/20" : isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Access Matrix</span>
                </button>
              </div>

              {/* Step & Access rule badge */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono bg-[#FF4B3E]/10 text-[#FF4B3E] border border-[#FF4B3E]/30 px-2.5 py-1 rounded-full font-bold">
                  {activePhase.stepNumber}: {activePhase.accessRule}
                </span>
              </div>
            </div>

            {/* CENTER WORKSPACE PANE (Spacious Full Width!) */}
            <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between overflow-hidden relative">
              
              {/* Unstarted Overlay: If user hasn't clicked play yet, provide an inviting start prompt */}
              {!hasStartedByUser && !isPlaying && (
                <div className={`absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm ${isDark ? "bg-black/70" : "bg-white/85"}`}>
                  <div className="w-16 h-16 rounded-3xl bg-[#FF4B3E] text-white flex items-center justify-center mb-4 shadow-xl shadow-[#FF4B3E]/30 animate-bounce">
                    <Play className="w-8 h-8 ml-1" />
                  </div>
                  <h3 className={`text-xl font-extrabold sm:text-2xl ${isDark ? "text-white" : "text-slate-900"}`}>
                    Start the 4.5-Minute Masterclass Walkthrough
                  </h3>
                  <p className={`mt-2 max-w-md text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                    Click to launch the interactive simulation with step-by-step code construction and teacher audio narration.
                  </p>
                  <button
                    onClick={togglePlay}
                    aria-label="Start Interactive Simulation Tour"
                    className="mt-5 px-6 py-2.5 rounded-2xl bg-[#FF4B3E] hover:brightness-110 text-white font-bold text-sm transition-all shadow-lg shadow-[#FF4B3E]/25 flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>Begin Tour</span>
                  </button>
                </div>
              )}

              {/* 1. CODE SIMULATOR TAB (Line-by-Line Animated Typing) */}
              {activeTab === "code" && (
                <div className="flex-1 min-h-0 flex flex-col justify-between">
                  <div className={`${codePaneClass} relative flex-1 space-y-1 overflow-y-auto rounded-2xl border p-5 font-mono text-xs leading-relaxed shadow-inner sm:text-[13px]`}>
                    
                    {/* Header inside Editor */}
                    <div className={`mb-3 flex items-center justify-between border-b pb-2 ${isDark ? "border-white/10" : "border-slate-200"}`}>
                      <span className="text-[11px] font-mono text-[#FF4B3E] font-bold uppercase tracking-wider">
                        ▶ {activePhase.stepNumber}: {activePhase.title}
                      </span>
                      <span className={`font-mono text-[10px] ${isDark ? "text-slate-400" : "text-slate-500"}`}>
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
                            line.highlight ? isDark ? "bg-blue-500/10 text-white font-semibold" : "bg-blue-50 text-slate-950 font-semibold" : ""
                          } ${line.errorLine ? "text-rose-400 bg-rose-950/20" : ""}`}
                        >
                          <span className="text-slate-600 text-[11px] select-none w-8 shrink-0 font-mono text-right pr-3" aria-hidden="true">
                            {idx + 1}
                          </span>
                          
                          <span className="flex-1 min-w-0">
                            {renderHighlightedCode(line.text, isDark)}
                            {isCurrentActiveLine && isPlaying && !prefersReducedMotion && (
                              <span className="inline-block w-2 h-4 bg-[#FF4B3E] ml-1 animate-pulse align-middle" aria-hidden="true" />
                            )}
                            {line.comment && (
                              <span className="ml-2 font-mono text-[11px] italic text-slate-500">
                                {line.comment}
                              </span>
                            )}
                          </span>
                        </div>
                      );
                    })}

                    {/* Teacher Annotation Callout */}
                    <div className={`mt-auto flex items-start gap-3 rounded-xl border p-3.5 pt-4 font-sans text-xs ${isDark ? "border-blue-500/30 bg-gradient-to-r from-blue-950/30 to-purple-950/30 text-slate-200" : "border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 text-slate-700"}`}>
                      <Sparkles className={`mt-0.5 h-4 w-4 shrink-0 ${isDark ? "text-blue-400" : "text-blue-600"}`} />
                      <div>
                        <strong className={`block font-mono text-[11px] uppercase ${isDark ? "text-blue-300" : "text-blue-800"}`}>
                          TEACHER'S ARCHITECTURAL NOTE
                        </strong>
                        <p className={`mt-0.5 text-xs font-medium leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                          {activePhase.keyTakeaway}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* 2. DEDICATED PER-STEP TERMINAL SCREEN (Clear simulated screen) */}
              {activeTab === "terminal" && (
                <div className={`relative flex flex-1 flex-col justify-between overflow-hidden rounded-2xl border p-5 font-mono text-xs shadow-2xl sm:text-[13px] ${isDark ? "border-blue-500/25 bg-[#04060c] text-slate-300" : "border-slate-200 bg-slate-50 text-slate-700"}`}>
                  <div className="space-y-3">
                    {/* Terminal prompt bar */}
                    <div className={`flex items-center justify-between border-b pb-3 ${isDark ? "border-white/10" : "border-slate-200"}`}>
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full" aria-hidden="true" />
                        <span className="text-emerald-400 font-bold">simulated-runner@cohortia-cpp-box:~$ {activePhase.terminalContent.command}</span>
                      </div>
                        <span className={`rounded px-2 py-0.5 font-mono text-[10px] ${isDark ? "bg-white/[0.05] text-slate-400" : "bg-white text-slate-500"}`}>
                        Simulated Screen {activePhaseIndex + 1} of 5
                      </span>
                    </div>

                    {/* Status pill */}
                    <div className={`flex items-center justify-between rounded-xl border p-2.5 text-xs ${isDark ? "border-white/5 bg-white/[0.03]" : "border-slate-200 bg-white"}`}>
                      <span className={isDark ? "text-slate-400" : "text-slate-600"}>Simulation Status:</span>
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
                              ? isDark ? "text-rose-400 bg-rose-950/30 p-2.5 rounded-lg border border-rose-500/30" : "text-rose-700 bg-rose-50 p-2.5 rounded-lg border border-rose-200"
                              : line.type === "warn" 
                                ? isDark ? "text-amber-300" : "text-amber-700"
                                : line.type === "success" 
                                  ? isDark ? "text-emerald-300 font-medium" : "text-emerald-700 font-medium"
                                  : isDark ? "text-slate-300" : "text-slate-700"
                          }`}
                        >
                          <span className="text-slate-500 select-none" aria-hidden="true">▶</span>
                          <span>{line.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Step summary footer with explicit simulation label */}
                  <div className={`flex items-center justify-between border-t pt-3 text-xs ${isDark ? "border-white/10 text-slate-400" : "border-slate-200 text-slate-600"}`}>
                    <span className={`font-sans font-medium ${isDark ? "text-blue-300" : "text-blue-700"}`}>
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
                <div className={`flex flex-1 flex-col justify-between rounded-2xl border p-5 ${isDark ? "border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-[#0b0f1d]" : "border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50"}`}>
                  <div>
                    <div className={`mb-4 flex items-center justify-between border-b pb-3 ${isDark ? "border-white/10" : "border-slate-200"}`}>
                      <span className={`font-mono text-xs font-bold uppercase sm:text-sm ${isDark ? "text-white" : "text-slate-900"}`}>
                        C++ INHERITANCE ACCESS MATRIX (STANDARDIZED TERMINOLOGY)
                      </span>
                      <span className="text-[10px] font-mono text-[#FF4B3E] font-bold bg-[#FF4B3E]/10 px-2 py-0.5 rounded">
                        CPP CORE RULES
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                      <div className={`space-y-2 rounded-2xl border p-4 ${isDark ? "border-white/10 bg-white/[0.03]" : "border-slate-200 bg-white"}`}>
                        <span className="text-[#FF4B3E] font-bold block text-sm">1. Base Logger</span>
                        <span className={`block text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>logLevel: <strong className={isDark ? "text-rose-400" : "text-rose-700"}>protected</strong></span>
                        <span className={`block text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>log(): <strong className={isDark ? "text-emerald-400" : "text-emerald-700"}>public</strong></span>
                        <p className={`border-t pt-2 font-sans text-[11px] leading-relaxed ${isDark ? "border-white/5 text-slate-400" : "border-slate-100 text-slate-600"}`}>
                          Accessible to derived subclasses; invisible to outside client code.
                        </p>
                      </div>

                      <div className={`space-y-2 rounded-2xl border p-4 ${isDark ? "border-emerald-500/30 bg-white/[0.03]" : "border-emerald-200 bg-white"}`}>
                        <span className={`block text-sm font-bold ${isDark ? "text-emerald-400" : "text-emerald-700"}`}>2. public Logger (is-a)</span>
                        <span className={`block text-xs font-bold ${isDark ? "text-slate-200" : "text-slate-800"}`}>ConsoleLogger</span>
                        <span className={`block text-xs ${isDark ? "text-slate-300" : "text-slate-700"}`}>public ➔ public</span>
                        <span className={`block text-xs ${isDark ? "text-slate-300" : "text-slate-700"}`}>protected ➔ protected</span>
                        <p className={`border-t pt-2 font-sans text-[11px] leading-relaxed ${isDark ? "border-white/5 text-slate-400" : "border-slate-100 text-slate-600"}`}>
                          Preserves base interface for polymorphic console logging.
                        </p>
                      </div>

                      <div className={`space-y-2 rounded-2xl border p-4 ${isDark ? "border-rose-500/30 bg-white/[0.03]" : "border-rose-200 bg-white"}`}>
                        <span className={`block text-sm font-bold ${isDark ? "text-rose-400" : "text-rose-700"}`}>3. private Logger</span>
                        <span className={`block text-xs font-bold ${isDark ? "text-slate-200" : "text-slate-800"}`}>FileLogger (implemented-in-terms-of)</span>
                        <span className={`block text-xs ${isDark ? "text-rose-300" : "text-rose-700"}`}>all base members ➔ PRIVATE</span>
                        <p className={`border-t pt-2 font-sans text-[11px] leading-relaxed ${isDark ? "border-white/5 text-slate-400" : "border-slate-100 text-slate-600"}`}>
                          Reuses base code as private implementation. Subclasses cannot access base members.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={`flex items-center justify-between rounded-xl border p-3.5 font-sans text-xs ${isDark ? "border-purple-500/30 bg-purple-500/10 text-purple-300" : "border-indigo-200 bg-indigo-50 text-indigo-800"}`}>
                    <span>Modern C++ Guideline: Private inheritance means 'is-implemented-in-terms-of', whereas composition describes 'has-a'.</span>
                    <span className="font-mono text-[10px] bg-purple-500/20 px-2 py-0.5 rounded font-bold">CORE-I2</span>
                  </div>
                </div>
              )}

            </div>

            {/* NARRATOR'S VOICE SUBTITLE & CLOSED CAPTIONS BAR */}
              <div className={`flex flex-wrap items-center justify-between gap-3 border-t p-3.5 sm:p-4 ${isDark ? "border-white/10 bg-gradient-to-r from-slate-900/95 via-black to-slate-900/95" : "border-slate-200 bg-gradient-to-r from-slate-50 via-white to-slate-50"}`}>
              
              {/* Voice Info Badge: Accurate name display */}
              <div className="flex items-center gap-2.5 shrink-0">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-[#FF4B3E]/40 bg-[#FF4B3E]/20 text-sm text-[#FF4B3E] shadow-md shadow-[#FF4B3E]/20">
                  <Radio className={`w-4 h-4 ${isPlaying && !isVoiceMuted ? "animate-pulse text-[#FF4B3E]" : "text-slate-400"}`} />
                </div>
                <div>
                  <span className={`block font-mono text-xs font-extrabold leading-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                    {voiceDisplayName}
                  </span>
                  <span className="text-[10px] font-mono text-[#FF4B3E] font-semibold">
                    {speechSynthesisAvailable ? (isVoiceMuted ? "Voice Muted (Subtitles Active)" : "Teacher Audio Active") : "Subtitles Only"}
                  </span>
                </div>
              </div>

              {/* Subtitle / Closed Caption Box with aria-live for assistive technology */}
              <div 
                role="region"
                aria-label="Current lesson subtitles"
                aria-live="polite" 
                aria-atomic="true"
                className={`flex min-w-[260px] flex-1 items-center gap-2.5 rounded-2xl border px-3.5 py-2 ${isDark ? "border-white/10 bg-white/[0.04]" : "border-slate-200 bg-white"}`}
              >
                <MessageSquareQuote className="w-4 h-4 text-[#FF4B3E] shrink-0" aria-hidden="true" />
                <p className={`break-words text-xs font-medium leading-relaxed sm:text-[13px] ${isDark ? "text-slate-200" : "text-slate-700"}`}>
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
                  className={`flex cursor-pointer items-center gap-1.5 rounded-xl border px-3 py-2 font-mono text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B3E] ${isDark ? "border-white/10 bg-white/[0.05] text-slate-300 hover:bg-white/[0.1]" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"}`}
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
              className="mt-3.5 bg-immersive-card border border-immersive-border/80 rounded-2xl p-5 space-y-4 shadow-xl"
            >
              <div className="flex items-center justify-between border-b border-immersive-border/60 pb-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#FF4B3E]" />
                  <h3 className="text-sm font-bold text-immersive-text-primary uppercase tracking-wider font-mono">
                    Full Lesson Transcript & Pedagogical Script
                  </h3>
                </div>
                <span className={`font-mono text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
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
                      <span className={`font-mono text-[10px] ${isDark ? "text-slate-400" : "text-slate-500"}`}>
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
          <div className="mt-3.5 bg-immersive-card border border-immersive-border/60 rounded-2xl p-4 flex flex-col space-y-3.5 shadow-md shadow-immersive-shadow">
            
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
                  ● Simulation Active
                </span>
              </div>
            </div>
          </div>

          {/* Scenario Brief below the simulator */}
          <div className="mt-4 bg-immersive-card/60 border border-immersive-border rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
            <div className="flex items-start gap-2.5">
              <Shield className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-mono font-bold uppercase text-emerald-500 block">
                  SCENARIO BRIEF: ENTERPRISE HIERARCHICAL LOGGING
                </span>
                <p className="text-xs text-immersive-text-secondary font-medium leading-relaxed mt-0.5">
                  Design an enterprise logging architecture using C++ access specifiers. Protect internal log levels from external modification while providing specialized console and encrypted file streams.
                </p>
              </div>
            </div>
            <span className={`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[10px] ${isDark ? "border-white/10 bg-white/[0.05] text-slate-400" : "border-slate-200 bg-white text-slate-600"}`}>
              CPP Capstone #4
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

function renderHighlightedCode(code: string, isDark: boolean) {
  const tokenPattern = /(\/\/.*|#\s*include\b|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b(?:auto|bool|break|case|char|class|const|continue|double|else|enum|float|for|if|int|long|private|protected|public|return|static|string|struct|switch|void|while)\b|\bstd::(?:cout|endl|string)\b|\b\d+(?:\.\d+)?\b)/g;
  const parts = code.split(tokenPattern);

  return parts.map((part, index) => {
    tokenPattern.lastIndex = 0;
    if (!tokenPattern.test(part)) return part;

    const tokenClass = /^(\/\/|\/\*)/.test(part)
      ? isDark ? "text-slate-400 italic" : "text-slate-500 italic"
      : /^#\s*include/.test(part)
        ? isDark ? "text-fuchsia-300" : "text-fuchsia-700"
        : /^["']/.test(part)
          ? isDark ? "text-amber-300" : "text-amber-700"
          : /^\d/.test(part)
            ? isDark ? "text-cyan-300" : "text-cyan-700"
            : isDark ? "text-sky-300" : "text-blue-700";

    return <span key={index} className={tokenClass}>{part}</span>;
  });
}
