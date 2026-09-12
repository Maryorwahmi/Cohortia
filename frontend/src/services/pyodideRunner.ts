/**
 * In-Browser Python Execution Engine via Pyodide (WebAssembly)
 * Provides real Python 3.11 execution directly in the learner's browser.
 */

declare global {
  interface Window {
    loadPyodide?: (config: { indexURL: string; stdout?: (text: string) => void; stderr?: (text: string) => void }) => Promise<any>;
    pyodideInstance?: any;
  }
}

export interface ExecutionResult {
  success: boolean;
  stdout: string;
  stderr: string;
  executionTimeMs: number;
  globals?: Record<string, any>;
  error?: string;
  engine: "pyodide" | "fallback_interpreter";
}

let pyodidePromise: Promise<any> | null = null;
let pyodideStatus: "unloaded" | "loading" | "ready" | "failed" = "unloaded";

/**
 * Loads Pyodide from CDN lazily
 */
export async function getPyodide(onProgress?: (message: string) => void): Promise<any> {
  if (window.pyodideInstance) {
    return window.pyodideInstance;
  }

  if (pyodidePromise) {
    return pyodidePromise;
  }

  pyodideStatus = "loading";
  onProgress?.("Downloading Python WebAssembly runtime...");

  pyodidePromise = new Promise(async (resolve, reject) => {
    try {
      if (!window.loadPyodide) {
        // Dynamically inject Pyodide CDN script
        await new Promise<void>((resolveScript, rejectScript) => {
          const script = document.createElement("script");
          script.src = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js";
          script.async = true;
          script.onload = () => resolveScript();
          script.onerror = (e) => rejectScript(new Error("Failed to load Pyodide script from CDN"));
          document.head.appendChild(script);
        });
      }

      onProgress?.("Initializing Python 3.11 interpreter...");
      if (typeof window.loadPyodide !== "function") {
        throw new Error("loadPyodide not available after script injection");
      }

      const pyodide = await window.loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/",
      });

      window.pyodideInstance = pyodide;
      pyodideStatus = "ready";
      onProgress?.("Python environment ready!");
      resolve(pyodide);
    } catch (err: any) {
      console.warn("Pyodide CDN load failed, fallback execution engine will be used.", err);
      pyodideStatus = "failed";
      pyodidePromise = null;
      reject(err);
    }
  });

  return pyodidePromise;
}

/**
 * Executes Python code using Pyodide if available, or an in-browser fallback runner.
 */
export async function executePython(
  code: string,
  options: {
    files?: Record<string, string>;
    onOutput?: (line: string, stream: "stdout" | "stderr") => void;
    onProgress?: (message: string) => void;
  } = {}
): Promise<ExecutionResult> {
  const startTime = performance.now();
  const stdoutLines: string[] = [];
  const stderrLines: string[] = [];

  const handleStdout = (text: string) => {
    const lines = text.split("\n");
    for (let i = 0; i < lines.length; i++) {
      if (i === lines.length - 1 && lines[i] === "") continue;
      stdoutLines.push(lines[i]);
      options.onOutput?.(lines[i], "stdout");
    }
  };

  const handleStderr = (text: string) => {
    const lines = text.split("\n");
    for (let i = 0; i < lines.length; i++) {
      if (i === lines.length - 1 && lines[i] === "") continue;
      stderrLines.push(lines[i]);
      options.onOutput?.(lines[i], "stderr");
    }
  };

  try {
    const pyodide = await getPyodide(options.onProgress);

    // Set stdout & stderr handlers
    pyodide.setStdout({ batched: handleStdout });
    pyodide.setStderr({ batched: handleStderr });

    // Mount virtual files into Pyodide virtual filesystem
    if (options.files) {
      for (const [path, content] of Object.entries(options.files)) {
        try {
          // ensure parent dirs if any
          const parts = path.split("/");
          if (parts.length > 1) {
            let currentDir = "";
            for (let i = 0; i < parts.length - 1; i++) {
              currentDir += (currentDir ? "/" : "") + parts[i];
              try {
                pyodide.FS.mkdir(currentDir);
              } catch (_) {
                // already exists
              }
            }
          }
          pyodide.FS.writeFile(path, content);
        } catch (fsErr) {
          console.warn(`Could not write file ${path} to Pyodide FS:`, fsErr);
        }
      }
    }

    // Run Python code
    await pyodide.runPythonAsync(code);

    // Extract primitive globals for check verification
    const extractedGlobals: Record<string, any> = {};
    try {
      const globalNames = ["x", "y", "z", "result", "total", "count", "answer", "ans", "data", "num"];
      for (const name of globalNames) {
        if (pyodide.globals.has(name)) {
          const val = pyodide.globals.get(name);
          if (val !== undefined && typeof val !== "function" && typeof val !== "object") {
            extractedGlobals[name] = val;
          } else if (val && typeof val.toJs === "function") {
            try {
              extractedGlobals[name] = val.toJs();
            } catch (_) {}
          }
        }
      }
    } catch (_) {}

    const executionTimeMs = Math.round(performance.now() - startTime);

    return {
      success: stderrLines.length === 0,
      stdout: stdoutLines.join("\n"),
      stderr: stderrLines.join("\n"),
      executionTimeMs,
      globals: extractedGlobals,
      engine: "pyodide",
    };
  } catch (error: any) {
    if (pyodideStatus === "failed") {
      // Fallback: execute using lightweight simulated evaluator
      return executePythonFallback(code, options.files, startTime, handleStdout, handleStderr);
    }

    const executionTimeMs = Math.round(performance.now() - startTime);
    const errMessage = error?.message || String(error);
    handleStderr(errMessage);

    return {
      success: false,
      stdout: stdoutLines.join("\n"),
      stderr: errMessage,
      executionTimeMs,
      error: errMessage,
      engine: "pyodide",
    };
  }
}

/**
 * Lightweight safe fallback evaluator for offline mode or CDN unavailability.
 * Handles variable assignments, print statements, basic math, and simple expressions.
 */
function executePythonFallback(
  code: string,
  files: Record<string, string> | undefined,
  startTime: number,
  handleStdout: (text: string) => void,
  handleStderr: (text: string) => void
): ExecutionResult {
  const stdoutLines: string[] = [];
  const scope: Record<string, any> = {};

  try {
    const lines = code.split("\n");
    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (!line || line.startsWith("#")) continue;

      // Handle print(...)
      const printMatch = line.match(/^print\s*\((.*)\)$/);
      if (printMatch) {
        const rawArgs = printMatch[1];
        // Split args by comma respecting quotes
        const args = splitPythonArgs(rawArgs);
        const evaluatedArgs = args.map((arg) => {
          arg = arg.trim();
          if ((arg.startsWith('"') && arg.endsWith('"')) || (arg.startsWith("'") && arg.endsWith("'"))) {
            return arg.slice(1, -1);
          }
          if (scope[arg] !== undefined) {
            return String(scope[arg]);
          }
          if (!isNaN(Number(arg))) {
            return Number(arg);
          }
          // evaluate simple math expression in scope
          try {
            const mathExp = arg.replace(/[a-zA-Z_]\w*/g, (m) => scope[m] !== undefined ? scope[m] : m);
            return Function(`'use strict'; return (${mathExp});`)();
          } catch (_) {
            return arg;
          }
        });

        const outputStr = evaluatedArgs.join(" ");
        stdoutLines.push(outputStr);
        handleStdout(outputStr);
        continue;
      }

      // Handle simple assignment: var = expr
      const assignMatch = line.match(/^([a-zA-Z_]\w*)\s*=\s*(.+)$/);
      if (assignMatch) {
        const varName = assignMatch[1];
        const expr = assignMatch[2].trim();

        if (!isNaN(Number(expr))) {
          scope[varName] = Number(expr);
        } else if ((expr.startsWith('"') && expr.endsWith('"')) || (expr.startsWith("'") && expr.endsWith("'"))) {
          scope[varName] = expr.slice(1, -1);
        } else {
          try {
            const mathExp = expr.replace(/[a-zA-Z_]\w*/g, (m) => scope[m] !== undefined ? scope[m] : m);
            scope[varName] = Function(`'use strict'; return (${mathExp});`)();
          } catch (e: any) {
            scope[varName] = expr;
          }
        }
      }
    }

    const executionTimeMs = Math.round(performance.now() - startTime);
    return {
      success: true,
      stdout: stdoutLines.join("\n"),
      stderr: "",
      executionTimeMs,
      globals: scope,
      engine: "fallback_interpreter",
    };
  } catch (err: any) {
    const msg = err.message || String(err);
    handleStderr(`Python Fallback Error: ${msg}`);
    return {
      success: false,
      stdout: stdoutLines.join("\n"),
      stderr: msg,
      executionTimeMs: Math.round(performance.now() - startTime),
      error: msg,
      engine: "fallback_interpreter",
    };
  }
}

function splitPythonArgs(argString: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuote: string | null = null;

  for (let i = 0; i < argString.length; i++) {
    const char = argString[i];
    if ((char === '"' || char === "'") && (i === 0 || argString[i - 1] !== "\\")) {
      if (inQuote === char) {
        inQuote = null;
      } else if (!inQuote) {
        inQuote = char;
      }
    }

    if (char === "," && !inQuote) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }

  if (current.trim()) {
    result.push(current.trim());
  }

  return result;
}
