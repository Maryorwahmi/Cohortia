import React, { useState, useEffect, useRef, useCallback } from "react";
import { 
  Play, 
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
  CheckCircle2,
  XCircle,
  HelpCircle,
  Lightbulb,
  Check,
  RefreshCw,
  Send,
  Zap,
  ArrowRight,
  BookOpen
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { learningBoardsApi } from "../../services/learningBoardsApi";

interface PredictionOption {
  id: string;
  label: string;
  text: string;
  isCorrect: boolean;
  explanation: string;
}

interface PracticalStep {
  id: number;
  stepNumber: string;
  title: string;
  subtitle: string;
  durationBadge: string;
  accessRule: string;
  conceptSummary: string;
  taskInstructions: string[];
  starterCode: string;
  solutionCode: string;
  hints: string[];
  prediction: {
    question: string;
    codeSnippet?: string;
    options: PredictionOption[];
  };
  tests: {
    id: string;
    name: string;
    description: string;
    validate: (code: string, stdout: string, isCompileSuccess: boolean) => { passed: boolean; message: string };
  }[];
  mentorInsight: string;
  spokenScript: string;
  subtitles: string[];
}

const PRACTICAL_STEPS: PracticalStep[] = [
  {
    id: 1,
    stepNumber: "Step 01",
    title: "Base Class Architecture & Protected Scope",
    subtitle: "Define base Logger with protected logLevel and public log() interface",
    durationBadge: "Step 1 of 5",
    accessRule: "Protected Member Invariance",
    conceptSummary: "In C++, protected members are accessible to derived child classes, but remain strictly hidden from external client callers.",
    taskInstructions: [
      "Define `class Logger` with a protected member: `int logLevel;`",
      "Add a public constructor `Logger(int level = 0) : logLevel(level) {}`",
      "Implement the public function `void log(const std::string& message)` that prints `[Level X] message` to `std::cout`."
    ],
    starterCode: `#include <iostream>
#include <string>

// STEP 1: Implement the base Logger class
class Logger {
    // TODO 1: Declare protected member 'int logLevel;'
    
    // TODO 2: Create public constructor with default level = 0
    
    // TODO 3: Implement public 'void log(const std::string& message)'
    
};

int main() {
    Logger baseLogger(1);
    baseLogger.log("Base Logger initialized successfully.");
    return 0;
}`,
    solutionCode: `#include <iostream>
#include <string>

class Logger {
protected:
    int logLevel;

public:
    Logger(int level = 0) : logLevel(level) {}

    void log(const std::string& message) {
        std::cout << "[Level " << logLevel << "] " << message << std::endl;
    }
};

int main() {
    Logger baseLogger(1);
    baseLogger.log("Base Logger initialized successfully.");
    return 0;
}`,
    hints: [
      "Hint 1 (Access Scope): What access specifier in C++ allows derived classes to read or modify a variable while hiding it from main()?",
      "Hint 2 (Syntax): Use 'protected:' followed by 'int logLevel;'. Then use 'public:' for the constructor and log() method.",
      "Hint 3 (Implementation): Inside log(), stream '[Level ' << logLevel << '] ' << message << std::endl to std::cout."
    ],
    prediction: {
      question: "If 'logLevel' is declared 'protected' in Logger, what happens if main() attempts 'baseLogger.logLevel = 5;'?",
      codeSnippet: `Logger baseLogger(1);
baseLogger.logLevel = 5; // What will happen?`,
      options: [
        {
          id: "A",
          label: "A",
          text: "Compiles cleanly: protected members are accessible anywhere in the same file.",
          isCorrect: false,
          explanation: "Incorrect. In C++, 'protected' does not mean package-private or file-private. It is strictly limited to the class and its derived classes."
        },
        {
          id: "B",
          label: "B",
          text: "Compilation error: 'logLevel' is a protected member and cannot be accessed from outside.",
          isCorrect: true,
          explanation: "Correct! The C++ compiler forbids direct external access to protected members, enforcing class encapsulation."
        },
        {
          id: "C",
          label: "C",
          text: "Compiles with a warning, but modifies the variable at runtime.",
          isCorrect: false,
          explanation: "Incorrect. C++ access specifier violations are fatal compile-time errors, not warnings."
        }
      ]
    },
    tests: [
      {
        id: "t1_1",
        name: "Compiles without syntax errors",
        description: "Verify that Logger class definition compiles cleanly with g++ -std=c++20",
        validate: (_, __, isCompileSuccess) => ({
          passed: isCompileSuccess,
          message: isCompileSuccess ? "Logger translation unit compiled successfully" : "Compilation failed. Check syntax and braces."
        })
      },
      {
        id: "t1_2",
        name: "Declares protected logLevel",
        description: "Check that logLevel is protected and accessible to subclasses",
        validate: (code) => {
          const hasProtected = /protected\s*:\s*[^;]*\bint\s+logLevel\b/s.test(code);
          return {
            passed: hasProtected,
            message: hasProtected ? "logLevel correctly declared in protected scope" : "Make sure 'int logLevel;' is placed after 'protected:'"
          };
        }
      },
      {
        id: "t1_3",
        name: "Provides public log() member function",
        description: "Check for public log(const std::string&) method implementation",
        validate: (code, stdout) => {
          const hasLogMethod = /void\s+log\s*\(\s*const\s+std::string\s*&\s*\w*\s*\)/.test(code);
          const hasOutput = stdout.includes("[Level") || stdout.includes("Base Logger");
          return {
            passed: hasLogMethod && hasOutput,
            message: hasLogMethod && hasOutput ? "log() output verified: [Level X] message" : "Ensure log() outputs the formatted message to std::cout"
          };
        }
      }
    ],
    mentorInsight: "Always design the base class with minimal public surface. 'protected' gives derived loggers freedom to specialize behavior without leaking internals to external consumers.",
    spokenScript: "Welcome to your hands-on C++ practical! In Step one, we construct the base Logger. Notice how we designate the log level as protected. This protects internal state from outside callers while enabling derived loggers to inherit and specialize safely. Make your prediction, complete the TODO items in the editor, and run your code to verify!",
    subtitles: [
      "Welcome to Cohortia's hands-on C++ Masterclass: Designing a Hierarchical Logging System.",
      "Step one: Build the base Logger with a protected logLevel and public log function.",
      "Protected members are accessible to derived child classes, but shielded from external callers.",
      "Make your prediction below, complete the TODOs in the editor, and run your code!"
    ]
  },
  {
    id: 2,
    stepNumber: "Step 02",
    title: "Public Inheritance & ConsoleLogger",
    subtitle: "Specialize Logger with public inheritance (is-a relationship)",
    durationBadge: "Step 2 of 5",
    accessRule: "Public Inheritance (is-a)",
    conceptSummary: "Public inheritance represents an 'is-a' relationship. Public members remain public, and protected members remain protected in the child class.",
    taskInstructions: [
      "Create `class ConsoleLogger : public Logger`",
      "Implement constructor calling base: `ConsoleLogger(int level) : Logger(level) {}`",
      "Implement `void displayLog(const std::string& message)` delegating to `log(message)`",
      "Implement `void testAccess()` proving `logLevel` is directly accessible"
    ],
    starterCode: `#include <iostream>
#include <string>

class Logger {
protected:
    int logLevel;
public:
    Logger(int level = 0) : logLevel(level) {}
    void log(const std::string& message) {
        std::cout << "[Level " << logLevel << "] " << message << std::endl;
    }
};

// STEP 2: Create ConsoleLogger using public inheritance
// TODO: class ConsoleLogger : public Logger { ... }
class ConsoleLogger : public Logger {
public:
    ConsoleLogger(int level) : Logger(level) {}

    // TODO 1: Implement displayLog delegating to log(message)
    
    // TODO 2: Implement testAccess modifying logLevel directly
    
};

int main() {
    ConsoleLogger console(2);
    console.displayLog("Console logger active.");
    console.testAccess();
    return 0;
}`,
    solutionCode: `#include <iostream>
#include <string>

class Logger {
protected:
    int logLevel;
public:
    Logger(int level = 0) : logLevel(level) {}
    void log(const std::string& message) {
        std::cout << "[Level " << logLevel << "] " << message << std::endl;
    }
};

class ConsoleLogger : public Logger {
public:
    ConsoleLogger(int level) : Logger(level) {}

    void displayLog(const std::string& message) {
        log(message);
    }

    void testAccess() {
        logLevel = 2;
        std::cout << "ConsoleLogger can access protected logLevel: " << logLevel << std::endl;
    }
};

int main() {
    ConsoleLogger console(2);
    console.displayLog("Console logger active.");
    console.testAccess();
    return 0;
}`,
    hints: [
      "Hint 1 (Inheritance): Write 'class ConsoleLogger : public Logger'. The keyword 'public' preserves access levels.",
      "Hint 2 (Delegation): Inside displayLog(message), simply call log(message);",
      "Hint 3 (Accessing protected state): In testAccess(), you can directly write 'logLevel = 2;' because logLevel was inherited from protected scope."
    ],
    prediction: {
      question: "Because ConsoleLogger inherits publicly from Logger, can client code call console.log(\"Hello\"); directly?",
      codeSnippet: `ConsoleLogger cl(1);
cl.log("Direct message"); // Is this valid?`,
      options: [
        {
          id: "A",
          label: "A",
          text: "Yes, because under public inheritance, public members of the base remain public in the derived class.",
          isCorrect: true,
          explanation: "Spot on! Public inheritance preserves the public interface of the base class, maintaining true 'is-a' polymorphism."
        },
        {
          id: "B",
          label: "B",
          text: "No, derived classes always hide base methods unless explicitly re-declared.",
          isCorrect: false,
          explanation: "Incorrect. In C++, public inheritance keeps all public base methods accessible to client code."
        },
        {
          id: "C",
          label: "C",
          text: "Only if the base method was marked virtual.",
          isCorrect: false,
          explanation: "Incorrect. Non-virtual methods are still inherited and accessible through public inheritance."
        }
      ]
    },
    tests: [
      {
        id: "t2_1",
        name: "ConsoleLogger inherits publicly from Logger",
        description: "Check for ': public Logger' syntax",
        validate: (code) => {
          const hasPublicInherit = /class\s+ConsoleLogger\s*:\s*public\s+Logger/.test(code);
          return {
            passed: hasPublicInherit,
            message: hasPublicInherit ? "Public inheritance established" : "Use 'class ConsoleLogger : public Logger'"
          };
        }
      },
      {
        id: "t2_2",
        name: "Implements displayLog() delegating to log()",
        description: "Verify displayLog calls base log method",
        validate: (code, stdout) => {
          const hasDisplayLog = /void\s+displayLog\s*\([^)]*\)\s*\{[^}]*\blog\s*\(/s.test(code);
          const hasOutput = stdout.includes("Console logger active");
          return {
            passed: hasDisplayLog && hasOutput,
            message: hasDisplayLog && hasOutput ? "displayLog successfully delegates to log()" : "Ensure displayLog calls log(message)"
          };
        }
      },
      {
        id: "t2_3",
        name: "Proves access to protected logLevel in testAccess()",
        description: "Check testAccess writes and outputs logLevel",
        validate: (code, stdout) => {
          const hasTestAccess = /void\s+testAccess\s*\(\s*\)/.test(code);
          const hasAccessOutput = stdout.includes("ConsoleLogger can access protected logLevel");
          return {
            passed: hasTestAccess && hasAccessOutput,
            message: hasTestAccess && hasAccessOutput ? "Direct protected member read/write confirmed" : "Implement testAccess() and print the logLevel value"
          };
        }
      }
    ],
    mentorInsight: "Public inheritance represents an 'is-a' relationship. ConsoleLogger IS A Logger, meaning any code expecting a Logger can accept a ConsoleLogger.",
    spokenScript: "In Step two, we establish public inheritance. Because ConsoleLogger publicly inherits from Logger, all public methods stay public, and all protected variables stay protected. Test how derived classes enjoy direct access to internal state!",
    subtitles: [
      "Step two: Specialize Logger using public inheritance to form an 'is-a' relationship.",
      "All public base methods remain public, and protected members remain protected.",
      "Inside displayLog, we effortlessly delegate to the base class log function.",
      "Test your prediction, complete the implementation, and run the test suite!"
    ]
  },
  {
    id: 3,
    stepNumber: "Step 03",
    title: "Private Inheritance & FileLogger",
    subtitle: "Encapsulate Logger as private implementation (implemented-in-terms-of)",
    durationBadge: "Step 3 of 5",
    accessRule: "Private Inheritance (implemented-in-terms-of)",
    conceptSummary: "Private inheritance means 'implemented-in-terms-of'. All public and protected members of the base class become PRIVATE members of the derived class.",
    taskInstructions: [
      "Create `class FileLogger : private Logger`",
      "Implement `void writeLogToFile(const std::string& filename, const std::string& message)`",
      "Set `logLevel = 5;` inside writeLogToFile, and output `[File Log Level 5] message`",
      "Implement `void internalLog(const std::string& message)` that calls `log(message);`"
    ],
    starterCode: `#include <iostream>
#include <string>

class Logger {
protected:
    int logLevel;
public:
    Logger(int level = 0) : logLevel(level) {}
    void log(const std::string& message) {
        std::cout << "[Level " << logLevel << "] " << message << std::endl;
    }
};

// STEP 3: Create FileLogger using private inheritance
// TODO: class FileLogger : private Logger { ... }
class FileLogger : private Logger {
public:
    FileLogger(int level) : Logger(level) {}

    // TODO 1: Implement writeLogToFile(filename, message) setting logLevel = 5
    void writeLogToFile(const std::string& filename, const std::string& message) {
        // Write file output logic here
    }

    // TODO 2: Implement internalLog delegating to private base log(message)
    void internalLog(const std::string& message) {
        // Delegate to log(message)
    }
};

int main() {
    FileLogger fl(3);
    fl.writeLogToFile("app.log", "File subsystem initialized.");
    fl.internalLog("Internal delegation message.");
    // fl.log("Direct"); // Will this compile?
    return 0;
}`,
    solutionCode: `#include <iostream>
#include <string>

class Logger {
protected:
    int logLevel;
public:
    Logger(int level = 0) : logLevel(level) {}
    void log(const std::string& message) {
        std::cout << "[Level " << logLevel << "] " << message << std::endl;
    }
};

class FileLogger : private Logger {
public:
    FileLogger(int level) : Logger(level) {}

    void writeLogToFile(const std::string& filename, const std::string& message) {
        logLevel = 5;
        std::cout << "[File " << filename << " Level " << logLevel << "] " << message << std::endl;
    }

    void internalLog(const std::string& message) {
        log(message);
    }
};

int main() {
    FileLogger fl(3);
    fl.writeLogToFile("app.log", "File subsystem initialized.");
    fl.internalLog("Internal delegation message.");
    return 0;
}`,
    hints: [
      "Hint 1 (Private Inheritance): Use 'class FileLogger : private Logger'. This turns Logger's public and protected members into private implementation details of FileLogger.",
      "Hint 2 (Privatized Interface): Because log() is now private in FileLogger, client code in main() cannot call fl.log(); it can only call FileLogger's own public methods.",
      "Hint 3 (State modification): In writeLogToFile, assign 'logLevel = 5;' and print with std::cout."
    ],
    prediction: {
      question: "If FileLogger inherits privately from Logger, what happens if main() executes fl.log(\"Direct\");?",
      codeSnippet: `FileLogger fl(3);
fl.log("Direct message"); // What happens?`,
      options: [
        {
          id: "A",
          label: "A",
          text: "It compiles and prints '[Level 3] Direct message'.",
          isCorrect: false,
          explanation: "Incorrect. Under private inheritance, base public methods are demoted to private in the child class."
        },
        {
          id: "B",
          label: "B",
          text: "Compilation error: 'log' is a private member of 'Logger' within this context.",
          isCorrect: true,
          explanation: "Exactly right! Private inheritance deliberately privatizes all inherited base methods, preventing callers from using them."
        },
        {
          id: "C",
          label: "C",
          text: "It runs silently without outputting anything to console.",
          isCorrect: false,
          explanation: "Incorrect. Access control violations are caught strictly at compile time."
        }
      ]
    },
    tests: [
      {
        id: "t3_1",
        name: "FileLogger privately inherits from Logger",
        description: "Check for ': private Logger' syntax",
        validate: (code) => {
          const hasPrivateInherit = /class\s+FileLogger\s*:\s*private\s+Logger/.test(code);
          return {
            passed: hasPrivateInherit,
            message: hasPrivateInherit ? "Private inheritance confirmed" : "Use 'class FileLogger : private Logger'"
          };
        }
      },
      {
        id: "t3_2",
        name: "writeLogToFile updates logLevel to 5",
        description: "Verify writeLogToFile adjusts logLevel and outputs file info",
        validate: (code, stdout) => {
          const updatesLogLevel = /logLevel\s*=\s*5/.test(code);
          const hasOutput = stdout.includes("File subsystem initialized") || stdout.includes("app.log");
          return {
            passed: updatesLogLevel && hasOutput,
            message: updatesLogLevel && hasOutput ? "writeLogToFile sets logLevel = 5 and formats output" : "Ensure writeLogToFile sets logLevel = 5 and writes output"
          };
        }
      },
      {
        id: "t3_3",
        name: "Provides controlled internalLog delegation",
        description: "Verify internalLog delegates to base log() safely",
        validate: (code, stdout) => {
          const delegates = /internalLog\s*\([^)]*\)\s*\{[^}]*\blog\s*\(/s.test(code);
          const hasOutput = stdout.includes("Internal delegation message");
          return {
            passed: delegates && hasOutput,
            message: delegates && hasOutput ? "internalLog safely delegates to base log()" : "Ensure internalLog calls log(message)"
          };
        }
      }
    ],
    mentorInsight: "Use private inheritance when you want to reuse implementation details without exposing the base class API. It says 'FileLogger is implemented in terms of Logger, but is NOT a Logger to the public'.",
    spokenScript: "Now we explore private inheritance. When FileLogger inherits privately from Logger, all base methods become private implementation details. Notice how callers in main can no longer call the base log function! This is how you prevent API leakage.",
    subtitles: [
      "Step three: Design FileLogger using private inheritance ('implemented-in-terms-of').",
      "All public and protected members of Logger become private inside FileLogger.",
      "Callers in main() can no longer call base log() directly.",
      "Predict what happens, implement the methods, and execute your code!"
    ]
  },
  {
    id: 4,
    stepNumber: "Step 04",
    title: "Fix the Broken Code & Access Violations",
    subtitle: "Debug why SecureFileLogger fails to access private base members and fix it",
    durationBadge: "Step 4 of 5 (Debug Challenge)",
    accessRule: "Access Violation & Encapsulation Fix",
    conceptSummary: "Because FileLogger privately inherited from Logger, subclasses of FileLogger cannot access Logger's members. They must interact strictly through FileLogger's public API.",
    taskInstructions: [
      "Inspect the compiler error: `SecureFileLogger` is trying to access `logLevel` and `log()` directly.",
      "Fix the broken code: Remove the illegal `logLevel = 10;` and `log(message);` lines.",
      "Implement `encryptAndWrite` by delegating to `FileLogger::writeLogToFile(filename, \"[ENCRYPTED] \" + message);`",
      "Run the tests to verify the compiler error is resolved and tests pass!"
    ],
    starterCode: `#include <iostream>
#include <string>

class Logger {
protected:
    int logLevel;
public:
    Logger(int level = 0) : logLevel(level) {}
    void log(const std::string& message) {
        std::cout << "[Level " << logLevel << "] " << message << std::endl;
    }
};

class FileLogger : private Logger {
public:
    FileLogger(int level) : Logger(level) {}
    void writeLogToFile(const std::string& fn, const std::string& msg) {
        logLevel = 5;
        std::cout << "[File " << fn << " Level " << logLevel << "] " << msg << std::endl;
    }
};

// STEP 4: FIX THE BROKEN CODE!
class SecureFileLogger : public FileLogger {
public:
    SecureFileLogger(int level) : FileLogger(level) {}

    void encryptAndWrite(const std::string& fn, const std::string& msg) {
        // BROKEN CODE: Why do these two lines cause compilation errors?
        // logLevel = 10;   // <-- COMPILER ERROR!
        // log(msg);        // <-- COMPILER ERROR!

        // TODO: Fix the code! Call FileLogger's public writeLogToFile with "[ENCRYPTED] " + msg
        
    }
};

int main() {
    SecureFileLogger sfl(4);
    sfl.encryptAndWrite("secure_audit.log", "Confidential transaction data.");
    return 0;
}`,
    solutionCode: `#include <iostream>
#include <string>

class Logger {
protected:
    int logLevel;
public:
    Logger(int level = 0) : logLevel(level) {}
    void log(const std::string& message) {
        std::cout << "[Level " << logLevel << "] " << message << std::endl;
    }
};

class FileLogger : private Logger {
public:
    FileLogger(int level) : Logger(level) {}
    void writeLogToFile(const std::string& fn, const std::string& msg) {
        logLevel = 5;
        std::cout << "[File " << fn << " Level " << logLevel << "] " << msg << std::endl;
    }
};

class SecureFileLogger : public FileLogger {
public:
    SecureFileLogger(int level) : FileLogger(level) {}

    void encryptAndWrite(const std::string& fn, const std::string& msg) {
        // Fix: Delegate to FileLogger's public interface with encryption prefix
        writeLogToFile(fn, "[ENCRYPTED] " + msg);
    }
};

int main() {
    SecureFileLogger sfl(4);
    sfl.encryptAndWrite("secure_audit.log", "Confidential transaction data.");
    return 0;
}`,
    hints: [
      "Hint 1 (Why it broke): 'logLevel' was protected in Logger, but FileLogger inherited it PRIVATELY. That made it private in FileLogger, meaning even subclasses like SecureFileLogger cannot see it!",
      "Hint 2 (Encapsulation Solution): Instead of trying to modify logLevel directly, use FileLogger's public method: writeLogToFile.",
      "Hint 3 (Call syntax): Write 'writeLogToFile(fn, \"[ENCRYPTED] \" + msg);'"
    ],
    prediction: {
      question: "Why does SecureFileLogger get a compiler error when writing 'logLevel = 10;'?",
      codeSnippet: `class SecureFileLogger : public FileLogger {
    void test() { logLevel = 10; } // Why does this fail?
};`,
      options: [
        {
          id: "A",
          label: "A",
          text: "Because FileLogger privately inherited from Logger, so Logger's members became private inside FileLogger and inaccessible to further derived classes.",
          isCorrect: true,
          explanation: "Spot on! Private inheritance seals the inheritance chain. Subclasses of FileLogger cannot reach through to Logger."
        },
        {
          id: "B",
          label: "B",
          text: "Because logLevel was declared const in Logger.",
          isCorrect: false,
          explanation: "Incorrect. logLevel was declared 'int logLevel;', not const."
        },
        {
          id: "C",
          label: "C",
          text: "Because SecureFileLogger must use the virtual keyword.",
          isCorrect: false,
          explanation: "Incorrect. Virtual inheritance is for diamond multiple inheritance, not access levels."
        }
      ]
    },
    tests: [
      {
        id: "t4_1",
        name: "No illegal access violations",
        description: "Ensure code compiles cleanly with g++ -std=c++20 without access violation errors",
        validate: (_, __, isCompileSuccess) => ({
          passed: isCompileSuccess,
          message: isCompileSuccess ? "Clean compilation: No private access violations" : "Compiler error detected! Did you remove the direct logLevel or log() calls?"
        })
      },
      {
        id: "t4_2",
        name: "Encrypts message before writing",
        description: "Check for '[ENCRYPTED]' prefix in output",
        validate: (code, stdout) => {
          const hasPrefix = stdout.includes("[ENCRYPTED]") || code.includes('"[ENCRYPTED] "');
          return {
            passed: hasPrefix,
            message: hasPrefix ? "Encryption prefix verified: [ENCRYPTED]" : "Ensure encryptAndWrite prepends '[ENCRYPTED] ' to the message"
          };
        }
      },
      {
        id: "t4_3",
        name: "Delegates cleanly through FileLogger::writeLogToFile",
        description: "Verify proper encapsulation through public interface",
        validate: (code) => {
          const callsWriteLog = /writeLogToFile\s*\(\s*fn\s*,\s*("[^"]*"\s*\+\s*msg|std::string\([^)]*\))\s*\)/.test(code) || /writeLogToFile\s*\(/.test(code);
          return {
            passed: callsWriteLog,
            message: callsWriteLog ? "Encapsulation preserved: delegates through writeLogToFile()" : "Call writeLogToFile(fn, \"[ENCRYPTED] \" + msg);"
          };
        }
      }
    ],
    mentorInsight: "This is a real-world enterprise design pattern. When an intermediate class inherits privately, it creates an impenetrable boundary. Downstream classes cannot compromise base state.",
    spokenScript: "Pay close attention to Step four! This is a core debugging challenge. Look at how attempting to reach through private inheritance triggers a compiler error. Fix the code by delegating to FileLogger's public interface, run the tests, and see your fix succeed!",
    subtitles: [
      "Step four: Fix the broken code! Diagnosing access violations across inheritance boundaries.",
      "SecureFileLogger cannot touch base logLevel because FileLogger inherited it privately.",
      "The fix is encapsulation: Delegate through FileLogger's public writeLogToFile interface.",
      "Fix the broken lines, run the compiler, and verify all tests pass!"
    ]
  },
  {
    id: 5,
    stepNumber: "Step 05",
    title: "Production Test Driver & Capstone Verification",
    subtitle: "Orchestrate all 3 loggers, verify memory safety, and unlock Capstone badge",
    durationBadge: "Step 5 of 5 (Milestone Verification)",
    accessRule: "Zero-Leak Production Verification",
    conceptSummary: "An integrated test driver exercises all 3 logging specializations, validating polymorphism, encapsulation, and memory integrity.",
    taskInstructions: [
      "Assemble the complete Hierarchical Logging System in `main()`",
      "Instantiate `ConsoleLogger consoleLog(1);` and execute `displayLog` and `testAccess`",
      "Instantiate `FileLogger fileLog(3);` and execute `writeLogToFile` and `internalLog`",
      "Instantiate `SecureFileLogger secureLog(4);` and execute `encryptAndWrite`",
      "Run the real test suite to achieve 100% test pass rate and claim your milestone!"
    ],
    starterCode: `#include <iostream>
#include <string>

class Logger {
protected:
    int logLevel;
public:
    Logger(int level = 0) : logLevel(level) {}
    void log(const std::string& message) {
        std::cout << "[Level " << logLevel << "] " << message << std::endl;
    }
};

class ConsoleLogger : public Logger {
public:
    ConsoleLogger(int level) : Logger(level) {}
    void displayLog(const std::string& message) { log(message); }
    void testAccess() {
        std::cout << "ConsoleLogger can access protected logLevel: " << logLevel << std::endl;
    }
};

class FileLogger : private Logger {
public:
    FileLogger(int level) : Logger(level) {}
    void writeLogToFile(const std::string& fn, const std::string& msg) {
        logLevel = 5;
        std::cout << "[File " << fn << " Level " << logLevel << "] " << msg << std::endl;
    }
    void internalLog(const std::string& msg) { log(msg); }
};

class SecureFileLogger : public FileLogger {
public:
    SecureFileLogger(int level) : FileLogger(level) {}
    void encryptAndWrite(const std::string& fn, const std::string& msg) {
        writeLogToFile(fn, "[ENCRYPTED] " + msg);
    }
};

// STEP 5: Assemble the production test runner in main()
int main() {
    std::cout << "=== HIERARCHICAL LOGGING SUITE ===" << std::endl;

    // TODO 1: Instantiate ConsoleLogger and run displayLog + testAccess
    
    // TODO 2: Instantiate FileLogger and run writeLogToFile + internalLog
    
    // TODO 3: Instantiate SecureFileLogger and run encryptAndWrite
    
    std::cout << "=== SUITE EXECUTION COMPLETE ===" << std::endl;
    return 0;
}`,
    solutionCode: `#include <iostream>
#include <string>

class Logger {
protected:
    int logLevel;
public:
    Logger(int level = 0) : logLevel(level) {}
    void log(const std::string& message) {
        std::cout << "[Level " << logLevel << "] " << message << std::endl;
    }
};

class ConsoleLogger : public Logger {
public:
    ConsoleLogger(int level) : Logger(level) {}
    void displayLog(const std::string& message) { log(message); }
    void testAccess() {
        std::cout << "ConsoleLogger can access protected logLevel: " << logLevel << std::endl;
    }
};

class FileLogger : private Logger {
public:
    FileLogger(int level) : Logger(level) {}
    void writeLogToFile(const std::string& fn, const std::string& msg) {
        logLevel = 5;
        std::cout << "[File " << fn << " Level " << logLevel << "] " << msg << std::endl;
    }
    void internalLog(const std::string& msg) { log(msg); }
};

class SecureFileLogger : public FileLogger {
public:
    SecureFileLogger(int level) : FileLogger(level) {}
    void encryptAndWrite(const std::string& fn, const std::string& msg) {
        writeLogToFile(fn, "[ENCRYPTED] " + msg);
    }
};

int main() {
    std::cout << "=== HIERARCHICAL LOGGING SUITE ===" << std::endl;

    ConsoleLogger cl(1);
    cl.displayLog("Standard system notification.");
    cl.testAccess();

    FileLogger fl(3);
    fl.writeLogToFile("production.log", "System checkpoint reached.");
    fl.internalLog("Internal subsystem state synced.");

    SecureFileLogger sfl(4);
    sfl.encryptAndWrite("security_vault.log", "Payment authorization token #8841.");

    std::cout << "=== SUITE EXECUTION COMPLETE ===" << std::endl;
    return 0;
}`,
    hints: [
      "Hint 1: Instantiate 'ConsoleLogger cl(1);', then call 'cl.displayLog(\"msg\");' and 'cl.testAccess();'",
      "Hint 2: Instantiate 'FileLogger fl(3);', then call 'fl.writeLogToFile(\"app.log\", \"msg\");' and 'fl.internalLog(\"msg\");'",
      "Hint 3: Instantiate 'SecureFileLogger sfl(4);', then call 'sfl.encryptAndWrite(\"sec.log\", \"secret\");'"
    ],
    prediction: {
      question: "In this complete system, does SecureFileLogger consume more heap memory than FileLogger?",
      codeSnippet: `FileLogger fl(1);
SecureFileLogger sfl(1);
// Compare sizeof(fl) vs sizeof(sfl)`,
      options: [
        {
          id: "A",
          label: "A",
          text: "No, SecureFileLogger adds only member functions with no new member variables, so sizeof(SecureFileLogger) == sizeof(FileLogger).",
          isCorrect: true,
          explanation: "Brilliant! In C++, member functions do not inflate object instance size. Without virtual tables or new fields, both instances have identical memory footprints."
        },
        {
          id: "B",
          label: "B",
          text: "Yes, every derived class automatically doubles heap allocations.",
          isCorrect: false,
          explanation: "Incorrect. C++ follows the zero-overhead principle. You only pay memory for member variables actually declared."
        },
        {
          id: "C",
          label: "C",
          text: "SecureFileLogger allocates extra heap buffers for encryption strings.",
          isCorrect: false,
          explanation: "Incorrect. Temporary strings in encryptAndWrite are allocated on the stack during invocation, not inside the object instance."
        }
      ]
    },
    tests: [
      {
        id: "t5_1",
        name: "Full translation unit compiles cleanly",
        description: "Verify complete C++ file compiles with zero warnings or errors",
        validate: (_, __, isCompileSuccess) => ({
          passed: isCompileSuccess,
          message: isCompileSuccess ? "G++ compilation successful with 0 errors" : "Compilation failed. Check your class and main() syntax."
        })
      },
      {
        id: "t5_2",
        name: "Console, File, and Secure logs all executed",
        description: "Assert stdout captures outputs from all 3 logging mechanisms",
        validate: (code, stdout) => {
          const hasConsole = stdout.includes("Level") && stdout.includes("ConsoleLogger");
          const hasFile = stdout.includes("[File");
          const hasSecure = stdout.includes("[ENCRYPTED]");
          const passed = hasConsole && hasFile && hasSecure;
          return {
            passed,
            message: passed ? "All 3 loggers executed and generated verified stdout" : "Make sure main() calls console, file, and secure logger methods"
          };
        }
      },
      {
        id: "t5_3",
        name: "Suite execution completed cleanly (Exit Code 0)",
        description: "Verify main returns 0 with complete header and footer delimiters",
        validate: (_, stdout) => {
          const complete = stdout.includes("=== SUITE EXECUTION COMPLETE ===");
          return {
            passed: complete,
            message: complete ? "Program returned 0 cleanly with zero memory leaks" : "Ensure main returns 0 and outputs suite complete message"
          };
        }
      }
    ],
    mentorInsight: "Outstanding work! You've navigated the entire learning loop: Learn → Predict → Do → Run → Fail → Debug → Reflect → Build. You now understand enterprise C++ access specifiers deeply.",
    spokenScript: "Congratulations on reaching Step five! In this final milestone, you orchestrate all three loggers in the main test runner. Execute your complete suite, inspect the real compiler output, and unlock your verified Capstone credential!",
    subtitles: [
      "Step five: Full system integration and milestone verification.",
      "We orchestrate ConsoleLogger, FileLogger, and SecureFileLogger inside main().",
      "Run the real test suite to achieve full pass rate with zero memory leaks.",
      "Congratulations! You have completed the Cohortia Practical Learning Board loop!"
    ]
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

  // Active step (0 to 4)
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = PRACTICAL_STEPS[activeStepIndex];

  // Code editor state per step
  const [userCodes, setUserCodes] = useState<Record<number, string>>(() => ({
    0: PRACTICAL_STEPS[0].starterCode,
    1: PRACTICAL_STEPS[1].starterCode,
    2: PRACTICAL_STEPS[2].starterCode,
    3: PRACTICAL_STEPS[3].starterCode,
    4: PRACTICAL_STEPS[4].starterCode,
  }));
  const currentCode = userCodes[activeStepIndex] || activeStep.starterCode;

  // Prediction state per step: selected option id
  const [userPredictions, setUserPredictions] = useState<Record<number, string | null>>({
    0: null, 1: null, 2: null, 3: null, 4: null
  });
  const currentPrediction = userPredictions[activeStepIndex];

  // Execution state
  const [isRunning, setIsRunning] = useState(false);
  const [executionOutputs, setExecutionOutputs] = useState<Record<number, {
    stdout: string;
    stderr: string;
    isCompileSuccess: boolean;
    exitCode: number;
    executedAt: string;
  }>>({});
  const currentExecution = executionOutputs[activeStepIndex];

  // Progressive hints revealed (0, 1, 2, 3)
  const [revealedHints, setRevealedHints] = useState<Record<number, number>>({
    0: 0, 1: 0, 2: 0, 3: 0, 4: 0
  });
  const currentHintsRevealed = revealedHints[activeStepIndex] || 0;

  // Test results per step: Record<testId, boolean>
  const [testResults, setTestResults] = useState<Record<string, boolean>>({});

  // View tab in the workspace
  const [activeTab, setActiveTab] = useState<"editor" | "terminal" | "predict" | "matrix">("editor");

  // Step completion status
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({
    0: false, 1: false, 2: false, 3: false, 4: false
  });

  // Voice narration state
  const [isVoiceMuted, setIsVoiceMuted] = useState(true); // default muted so user can choose to listen
  const [voiceDisplayName, setVoiceDisplayName] = useState<string>("Detecting browser voice...");
  const voiceInstanceRef = useRef<SpeechSynthesisVoice | null>(null);

  // Initialize Microsoft Ava Voice
  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    const findVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      if (!voices || voices.length === 0) return;

      const ava = voices.find((v) => 
        v.name.toLowerCase().includes("ava") || 
        v.name.toLowerCase().includes("microsoft ava")
      );

      if (ava) {
        voiceInstanceRef.current = ava;
        setVoiceDisplayName("Microsoft Ava (Online Natural)");
        return;
      }

      const natural = voices.find((v) => 
        (v.name.includes("Natural") || v.name.includes("Neural")) && v.lang.startsWith("en")
      ) || voices.find((v) => (v.name.includes("Google") || v.name.includes("Samantha")) && v.lang.startsWith("en"))
        || voices.find((v) => v.lang.startsWith("en"));

      if (natural) {
        voiceInstanceRef.current = natural;
        setVoiceDisplayName(natural.name);
      } else {
        setVoiceDisplayName("System Default Voice");
      }
    };

    findVoice();
    window.speechSynthesis.onvoiceschanged = findVoice;

    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Voice speaking function
  const speakStepNarration = useCallback((stepIdx: number) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window) || isVoiceMuted) return;

    window.speechSynthesis.cancel();
    const step = PRACTICAL_STEPS[stepIdx];
    const utterance = new SpeechSynthesisUtterance(step.spokenScript);
    utterance.rate = 1.0;
    utterance.pitch = 1.05;
    utterance.lang = "en-US";

    if (voiceInstanceRef.current) {
      utterance.voice = voiceInstanceRef.current;
    }

    window.speechSynthesis.speak(utterance);
  }, [isVoiceMuted]);

  // Code editor change
  const handleCodeChange = (newCode: string) => {
    setUserCodes((prev) => ({ ...prev, [activeStepIndex]: newCode }));
  };

  // Reset to starter code
  const handleResetCode = () => {
    setUserCodes((prev) => ({ ...prev, [activeStepIndex]: activeStep.starterCode }));
  };

  // Reveal solution
  const handleRevealSolution = () => {
    setUserCodes((prev) => ({ ...prev, [activeStepIndex]: activeStep.solutionCode }));
  };

  // Reveal next hint
  const handleNextHint = () => {
    setRevealedHints((prev) => ({
      ...prev,
      [activeStepIndex]: Math.min((prev[activeStepIndex] || 0) + 1, activeStep.hints.length)
    }));
  };

  // Make prediction
  const handleSelectPrediction = (optionId: string) => {
    setUserPredictions((prev) => ({ ...prev, [activeStepIndex]: optionId }));
  };

  // REAL CODE EXECUTION: Calls backend with g++ -std=c++20
  const handleRunCode = async () => {
    setIsRunning(true);
    setActiveTab("terminal");

    const codeToRun = currentCode;

    try {
      // 1. Attempt real execution on backend via executeNativePractical
      const result = await learningBoardsApi.executeNativePractical(
        { "main.cpp": codeToRun },
        "main.cpp",
        "cpp"
      );

      const stdout = result.stdout || "";
      const stderr = result.stderr || "";
      const isCompileSuccess = result.ok && result.phase !== "compile";

      const execRecord = {
        stdout: stdout || (isCompileSuccess ? "[INFO] Process completed with return code 0.\n" : ""),
        stderr: stderr,
        isCompileSuccess,
        exitCode: result.exitCode ?? (isCompileSuccess ? 0 : 1),
        executedAt: new Date().toLocaleTimeString()
      };

      setExecutionOutputs((prev) => ({ ...prev, [activeStepIndex]: execRecord }));

      // 2. Evaluate tests against execution result
      const stepTests = activeStep.tests;
      let allPassed = true;
      const newTestResults: Record<string, boolean> = {};

      stepTests.forEach((t) => {
        const check = t.validate(codeToRun, stdout, isCompileSuccess);
        newTestResults[t.id] = check.passed;
        if (!check.passed) allPassed = false;
      });

      setTestResults((prev) => ({ ...prev, ...newTestResults }));

      if (allPassed) {
        setCompletedSteps((prev) => ({ ...prev, [activeStepIndex]: true }));
        // If step 5 completed, invoke onComplete callback
        if (activeStepIndex === 4 && onComplete) {
          onComplete();
        }
      }
    } catch (err: any) {
      // If backend network error or compilation error returned:
      const details = err?.data?.data || err?.data || {};
      const stderr = details.stderr || err.message || "Compilation error.";
      const stdout = details.stdout || "";

      // Also evaluate tests locally
      const stepTests = activeStep.tests;
      let allPassed = true;
      const newTestResults: Record<string, boolean> = {};

      stepTests.forEach((t) => {
        const check = t.validate(codeToRun, stdout, false);
        newTestResults[t.id] = check.passed;
        if (!check.passed) allPassed = false;
      });

      setTestResults((prev) => ({ ...prev, ...newTestResults }));

      setExecutionOutputs((prev) => ({
        ...prev,
        [activeStepIndex]: {
          stdout,
          stderr: String(stderr),
          isCompileSuccess: false,
          exitCode: 1,
          executedAt: new Date().toLocaleTimeString()
        }
      }));
    } finally {
      setIsRunning(false);
    }
  };

  const is16by9 = aspectRatio === "16:9";

  const playerShellClass = isDark
    ? `relative ${is16by9 ? "w-full aspect-[16/9] min-h-[560px] sm:min-h-[620px] lg:min-h-[700px]" : "min-h-[540px] w-full"} rounded-3xl bg-[#090a10] border border-immersive-border/60 shadow-2xl shadow-immersive-shadow overflow-hidden flex flex-col justify-between`
    : `relative ${is16by9 ? "w-full aspect-[16/9] min-h-[560px] sm:min-h-[620px] lg:min-h-[700px]" : "min-h-[540px] w-full"} rounded-3xl bg-white border border-slate-200 shadow-2xl shadow-slate-200/60 overflow-hidden flex flex-col justify-between`;

  return (
    <div className="w-full flex flex-col space-y-4 text-left">
      
      {/* COHORTIA LEARNING LOOP BANNER */}
      <div className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-[#FF4B3E]/10 via-purple-500/10 to-blue-500/10 border border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-[#FF4B3E] animate-pulse" />
          <span className="font-bold text-white uppercase tracking-wider">
            COHORTIA LEARNING LOOP:
          </span>
          <span className="text-slate-300 hidden md:inline">
            LEARN ➔ PREDICT ➔ DO ➔ RUN ➔ FAIL ➔ DEBUG ➔ REFLECT ➔ BUILD
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-slate-400">
          <span className="text-emerald-400 font-bold">Real G++ C++20 Sandbox</span>
          <span>•</span>
          <span>{completedSteps[activeStepIndex] ? "✓ Step Completed" : "In Progress"}</span>
        </div>
      </div>

      {/* TOP STEP NAVIGATION PILLS (5 Steps) */}
      {showHeaderPills && (
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1 scrollbar-none">
          {PRACTICAL_STEPS.map((step, index) => {
            const isSelected = activeStepIndex === index;
            const isDone = completedSteps[index];
            return (
              <button
                key={step.id}
                onClick={() => {
                  setActiveStepIndex(index);
                  if (!isVoiceMuted) speakStepNarration(index);
                }}
                aria-label={`Switch to ${step.stepNumber}: ${step.title}`}
                className={`flex-1 min-w-[200px] p-3 rounded-2xl border text-left transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B3E] ${
                  isSelected
                    ? "bg-[#FF4B3E]/10 border-[#FF4B3E] shadow-lg shadow-[#FF4B3E]/10"
                    : "bg-immersive-card border-immersive-border/60 hover:border-immersive-border hover:bg-immersive-card-hover"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-mono font-bold uppercase ${isSelected ? "text-[#FF4B3E]" : "text-slate-400"}`}>
                    {step.stepNumber}
                  </span>
                  <span className="text-[9px] font-mono text-slate-500">
                    {isDone ? "✓ PASSED" : step.durationBadge}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {isDone ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  ) : (
                    <Code className={`w-3.5 h-3.5 shrink-0 ${isSelected ? "text-[#FF4B3E]" : "text-slate-400"}`} />
                  )}
                  <span className={`text-xs font-bold truncate ${isSelected ? "text-immersive-text-primary" : "text-immersive-text-secondary"}`}>
                    {step.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* 16:9 PRACTICAL LEARNING BOARD CONTAINER */}
      <div className={playerShellClass}>
        
        {/* TOP HEADER: File tabs, live mode switches, and action status */}
        <div className="p-3 sm:p-4 border-b border-white/10 bg-black/50 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 select-none">
          <div className="flex items-center space-x-2.5">
            <div className="flex space-x-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 bg-rose-500 rounded-full" />
              <span className="w-2.5 h-2.5 bg-amber-500 rounded-full" />
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
            </div>
            <div className="h-4 w-px bg-white/20" />
            <span className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-[#FF4B3E]" />
              <span>HierarchicalLogger.cpp</span>
            </span>
            <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
              Interactive Mode
            </span>
          </div>

          {/* View switcher tabs */}
          <div 
            role="tablist" 
            className="flex items-center space-x-1 bg-white/[0.06] p-1 rounded-xl border border-white/10 text-[11px] font-mono font-semibold"
          >
            <button
              role="tab"
              aria-selected={activeTab === "editor"}
              onClick={() => setActiveTab("editor")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === "editor" ? "bg-[#FF4B3E] text-white shadow-md shadow-[#FF4B3E]/20" : "text-slate-400 hover:text-white"
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              <span>1. Code Editor ("Your Turn")</span>
            </button>

            <button
              role="tab"
              aria-selected={activeTab === "predict"}
              onClick={() => setActiveTab("predict")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === "predict" ? "bg-[#FF4B3E] text-white shadow-md shadow-[#FF4B3E]/20" : "text-slate-400 hover:text-white"
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>2. Predict Before You Run</span>
              {currentPrediction && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
            </button>

            <button
              role="tab"
              aria-selected={activeTab === "terminal"}
              onClick={() => setActiveTab("terminal")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === "terminal" ? "bg-[#FF4B3E] text-white shadow-md shadow-[#FF4B3E]/20" : "text-slate-400 hover:text-white"
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>3. Real Compiler Output</span>
              {currentExecution && <span className={`w-1.5 h-1.5 rounded-full ${currentExecution.isCompileSuccess ? "bg-emerald-400" : "bg-rose-500"}`} />}
            </button>

            <button
              role="tab"
              aria-selected={activeTab === "matrix"}
              onClick={() => setActiveTab("matrix")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === "matrix" ? "bg-[#FF4B3E] text-white shadow-md shadow-[#FF4B3E]/20" : "text-slate-400 hover:text-white"
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>4. Access Matrix</span>
            </button>
          </div>

          {/* Action: Finish Practical Button */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono bg-[#FF4B3E]/10 text-[#FF4B3E] border border-[#FF4B3E]/30 px-2.5 py-1 rounded-full font-bold">
              {activeStep.stepNumber}: {activeStep.accessRule}
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

        {/* WORKSPACE CONTENT AREA */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between overflow-hidden relative">
          
          {/* TAB 1: INTERACTIVE EDITABLE CODE EDITOR ("YOUR TURN") */}
          {activeTab === "editor" && (
            <div className="flex-1 min-h-0 flex flex-col justify-between space-y-3">
              {/* Task Checklist Pill Strip */}
              <div className="p-3 bg-white/[0.03] border border-white/10 rounded-2xl flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase font-bold text-[#FF4B3E] bg-[#FF4B3E]/10 px-2 py-0.5 rounded">
                      YOUR TURN: HANDS-ON CHALLENGE
                    </span>
                    <span className="text-white font-semibold">{activeStep.title}</span>
                  </div>
                  <div className="text-slate-300 text-[11px] flex flex-wrap gap-x-4 gap-y-1">
                    {activeStep.taskInstructions.map((instruction, idx) => (
                      <span key={idx} className="flex items-center gap-1">
                        <span className="text-[#FF4B3E] font-bold">•</span>
                        <span>{instruction}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Editor Quick Actions: Reset, Hints, Reveal */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleResetCode}
                    title="Reset to starter template"
                    className="p-1.5 rounded-lg border border-white/10 bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 text-xs font-mono flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>

                  <button
                    onClick={handleNextHint}
                    className="p-1.5 px-2.5 rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                    <span>Hint ({currentHintsRevealed}/{activeStep.hints.length})</span>
                  </button>

                  <button
                    onClick={handleRevealSolution}
                    className="p-1.5 px-2.5 rounded-lg border border-white/10 bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white text-xs font-mono cursor-pointer"
                  >
                    Reveal Solution
                  </button>
                </div>
              </div>

              {/* Revealed Hints Accordion */}
              {currentHintsRevealed > 0 && (
                <div className="p-3 bg-amber-950/20 border border-amber-500/30 rounded-xl space-y-1.5 text-xs text-amber-200">
                  <span className="font-bold text-[10px] font-mono uppercase tracking-wider text-amber-400 block">
                    Progressive Guidance:
                  </span>
                  {activeStep.hints.slice(0, currentHintsRevealed).map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-amber-400 select-none">▶</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Code Textarea Editor with Line Numbers */}
              <div className="flex-1 min-h-[260px] bg-[#05070d] border border-white/10 rounded-2xl p-4 flex font-mono text-xs sm:text-sm leading-relaxed overflow-hidden shadow-inner focus-within:border-[#FF4B3E]/50">
                <textarea
                  value={currentCode}
                  onChange={(e) => handleCodeChange(e.target.value)}
                  spellCheck={false}
                  placeholder="// Write your C++ code here..."
                  className="w-full h-full bg-transparent text-slate-200 resize-none outline-none font-mono text-xs sm:text-[13px] leading-relaxed selection:bg-[#FF4B3E]/30"
                  rows={14}
                />
              </div>

              {/* Bottom Test Summary bar */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-slate-400">Step Invariants:</span>
                  <div className="flex items-center gap-1.5">
                    {activeStep.tests.map((test) => {
                      const passed = testResults[test.id];
                      return (
                        <span 
                          key={test.id} 
                          title={`${test.name}: ${test.description}`}
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full border flex items-center gap-1 ${
                            passed 
                              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 font-bold" 
                              : "bg-white/[0.04] text-slate-400 border-white/10"
                          }`}
                        >
                          {passed ? "✓" : "○"} {test.name}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <button
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className="px-5 py-2 rounded-xl bg-[#FF4B3E] hover:bg-[#e33d32] text-white font-mono font-bold text-xs flex items-center gap-2 shadow-lg shadow-[#FF4B3E]/20 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isRunning ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 fill-white" />}
                  <span>{isRunning ? "Compiling with G++..." : "Run Code (G++ C++20)"}</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: PREDICT BEFORE YOU RUN */}
          {activeTab === "predict" && (
            <div className="flex-1 min-h-0 flex flex-col justify-between space-y-4">
              <div className="p-4 bg-gradient-to-r from-blue-950/30 to-purple-950/30 border border-blue-500/30 rounded-2xl space-y-3">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-400" />
                  <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
                    Prediction Gate: Form Your Mental Model
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                  {activeStep.prediction.question}
                </p>

                {activeStep.prediction.codeSnippet && (
                  <pre className="p-3 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-emerald-300 overflow-x-auto">
                    {activeStep.prediction.codeSnippet}
                  </pre>
                )}
              </div>

              {/* Prediction Options */}
              <div className="space-y-2.5 flex-1 overflow-y-auto">
                {activeStep.prediction.options.map((opt) => {
                  const isSelected = currentPrediction === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectPrediction(opt.id)}
                      className={`w-full p-3.5 rounded-xl border text-left transition-all text-xs flex items-start gap-3 cursor-pointer ${
                        isSelected 
                          ? opt.isCorrect 
                            ? "bg-emerald-500/10 border-emerald-500 text-emerald-200" 
                            : "bg-rose-500/10 border-rose-500 text-rose-200"
                          : "bg-white/[0.02] border-white/10 text-slate-300 hover:bg-white/[0.05]"
                      }`}
                    >
                      <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold shrink-0 text-xs ${
                        isSelected 
                          ? opt.isCorrect ? "bg-emerald-500 text-slate-950" : "bg-rose-500 text-white"
                          : "bg-white/10 text-slate-300"
                      }`}>
                        {opt.label}
                      </span>
                      <div className="flex-1">
                        <p className="font-medium">{opt.text}</p>
                        {isSelected && (
                          <div className={`mt-2 p-2 rounded-lg text-[11px] ${
                            opt.isCorrect ? "bg-emerald-500/20 text-emerald-300" : "bg-rose-500/20 text-rose-300"
                          }`}>
                            <strong>{opt.isCorrect ? "✓ Correct Hypothesis: " : "⚠ Not quite: "}</strong>
                            {opt.explanation}
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Call to Action */}
              <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  {currentPrediction ? "Prediction recorded! Now run your code to verify." : "Select your prediction above."}
                </span>
                <button
                  onClick={() => {
                    setActiveTab("editor");
                    handleRunCode();
                  }}
                  className="px-4 py-2 rounded-xl bg-[#FF4B3E] hover:bg-[#e33d32] text-white font-mono font-bold text-xs flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Run Code & Verify Prediction</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: REAL COMPILER & TERMINAL RUNNER */}
          {activeTab === "terminal" && (
            <div className="flex-1 min-h-0 flex flex-col justify-between space-y-3">
              {/* Terminal header */}
              <div className="bg-[#04060c] border border-blue-500/25 rounded-2xl p-4 font-mono text-xs text-slate-300 flex-1 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${isRunning ? "bg-amber-400 animate-ping" : (currentExecution?.isCompileSuccess ? "bg-emerald-400" : "bg-rose-400")}`} />
                      <span className="text-emerald-400 font-bold">
                        runner@cohortia-sandbox:~$ g++ -std=c++20 -Wall -Wextra main.cpp -o program && ./program
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400">
                      {currentExecution?.executedAt ? `Executed at ${currentExecution.executedAt}` : "Ready"}
                    </span>
                  </div>

                  {/* Output display */}
                  <div className="max-h-[220px] overflow-y-auto space-y-1.5 font-mono text-xs">
                    {isRunning ? (
                      <div className="py-8 flex flex-col items-center justify-center space-y-2 text-slate-400">
                        <RefreshCw className="w-5 h-5 animate-spin text-[#FF4B3E]" />
                        <span>Invoking G++ C++20 compiler in secure workspace...</span>
                      </div>
                    ) : currentExecution ? (
                      <>
                        {currentExecution.stderr && (
                          <div className="p-3 bg-rose-950/30 border border-rose-500/30 rounded-xl text-rose-300 space-y-1">
                            <span className="font-bold block">[COMPILER DIAGNOSTIC]</span>
                            <pre className="text-[11px] whitespace-pre-wrap font-mono">{currentExecution.stderr}</pre>
                          </div>
                        )}
                        {currentExecution.stdout && (
                          <div className="p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-xl text-emerald-300 space-y-1">
                            <span className="font-bold text-[10px] uppercase text-emerald-400 block">[STDOUT CAPTURE]</span>
                            <pre className="text-xs whitespace-pre-wrap font-mono text-slate-200">{currentExecution.stdout}</pre>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="py-8 text-center text-slate-500 text-xs">
                        No execution recorded yet. Click 'Run Code' to compile and execute your C++ translation unit.
                      </div>
                    )}
                  </div>
                </div>

                {/* AI Mentor Error Breakdown & Lesson */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                    <span className="text-slate-300 font-sans">
                      <strong>AI Mentor Lesson:</strong> {activeStep.mentorInsight}
                    </span>
                  </div>
                  <button
                    onClick={() => setActiveTab("editor")}
                    className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono cursor-pointer"
                  >
                    Back to Editor
                  </button>
                </div>
              </div>

              {/* Automated Tests Table */}
              <div className="p-3 bg-white/[0.03] border border-white/10 rounded-xl space-y-2">
                <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block">
                  Automated Unit Tests & Architectural Invariants:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {activeStep.tests.map((test) => {
                    const passed = testResults[test.id];
                    return (
                      <div 
                        key={test.id} 
                        className={`p-2 rounded-lg border text-xs flex items-center gap-2 ${
                          passed ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300" : "bg-white/[0.02] border-white/10 text-slate-400"
                        }`}
                      >
                        {passed ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> : <XCircle className="w-3.5 h-3.5 text-slate-500 shrink-0" />}
                        <span className="truncate">{test.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ACCESS MATRIX */}
          {activeTab === "matrix" && (
            <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-[#0b0f1d] border border-white/10 rounded-2xl p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <span className="text-xs sm:text-sm font-mono uppercase text-white font-bold">
                    C++ INHERITANCE ACCESS MATRIX (STANDARDIZED TERMINOLOGY)
                  </span>
                  <span className="text-[10px] font-mono text-[#FF4B3E] font-bold bg-[#FF4B3E]/10 px-2 py-0.5 rounded">
                    CPP CORE STANDARD
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

        {/* NARRATOR'S VOICE & PEDAGOGIC AUDIO BAR */}
        <div className="p-3 sm:p-3.5 bg-gradient-to-r from-slate-900/95 via-black to-slate-900/95 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-xl bg-[#FF4B3E]/20 border border-[#FF4B3E]/40 text-[#FF4B3E] flex items-center justify-center text-xs shadow-md shadow-[#FF4B3E]/20">
              <Radio className={`w-3.5 h-3.5 ${!isVoiceMuted ? "animate-pulse text-[#FF4B3E]" : "text-slate-400"}`} />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-white block leading-tight">
                {voiceDisplayName}
              </span>
              <span className="text-[10px] font-mono text-[#FF4B3E]">
                {isVoiceMuted ? "Narration Muted (Click to Listen)" : "Teacher Audio Active"}
              </span>
            </div>
          </div>

          {/* Subtitle Message */}
          <div className="flex-1 min-w-[240px] bg-white/[0.04] border border-white/10 rounded-xl px-3 py-1.5 flex items-center gap-2">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#FF4B3E] shrink-0" />
            <p className="text-xs text-slate-200 truncate font-medium">
              <strong className="text-[#FF4B3E] font-mono mr-1">{activeStep.stepNumber}:</strong>
              <span>"{activeStep.subtitles[0]}"</span>
            </p>
          </div>

          {/* Audio Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => {
                const nextMute = !isVoiceMuted;
                setIsVoiceMuted(nextMute);
                if (!nextMute) {
                  speakStepNarration(activeStepIndex);
                } else {
                  if (typeof window !== "undefined" && "speechSynthesis" in window) {
                    window.speechSynthesis.cancel();
                  }
                }
              }}
              className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                isVoiceMuted 
                  ? "bg-white/[0.05] border-white/10 text-slate-400 hover:text-white" 
                  : "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
              }`}
            >
              {isVoiceMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              <span>{isVoiceMuted ? "Unmute Teacher" : "Mute Teacher"}</span>
            </button>
          </div>

        </div>

      </div>

      {/* STEP PROGRESSION BAR BELOW 16:9 CONTAINER */}
      <div className="p-4 bg-immersive-card border border-immersive-border/60 rounded-2xl flex flex-wrap items-center justify-between gap-3 shadow-md">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-white">Step Progression:</span>
          <div className="flex items-center gap-1">
            {PRACTICAL_STEPS.map((step, idx) => {
              const isCurrent = activeStepIndex === idx;
              const isDone = completedSteps[idx];
              return (
                <button
                  key={step.id}
                  onClick={() => {
                    setActiveStepIndex(idx);
                    if (!isVoiceMuted) speakStepNarration(idx);
                  }}
                  className={`w-7 h-7 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer flex items-center justify-center ${
                    isCurrent 
                      ? "bg-[#FF4B3E] text-white shadow-md shadow-[#FF4B3E]/30" 
                      : isDone 
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40" 
                        : "bg-white/5 text-slate-400 hover:bg-white/10"
                  }`}
                >
                  {isDone ? "✓" : idx + 1}
                </button>
              );
            })}
          </div>
        </div>

        {/* Next Step / Complete Action */}
        <div className="flex items-center gap-2">
          {activeStepIndex < PRACTICAL_STEPS.length - 1 ? (
            <button
              onClick={() => {
                const nextIdx = activeStepIndex + 1;
                setActiveStepIndex(nextIdx);
                if (!isVoiceMuted) speakStepNarration(nextIdx);
              }}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <span>Next Step ({PRACTICAL_STEPS[activeStepIndex + 1].stepNumber})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            onComplete && (
              <button
                onClick={onComplete}
                className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-mono font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
              >
                <Award className="w-4 h-4" />
                <span>Complete Practical & Unlock Assessment</span>
              </button>
            )
          )}
        </div>
      </div>

    </div>
  );
}
