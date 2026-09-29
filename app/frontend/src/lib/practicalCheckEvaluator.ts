/**
 * Evaluates declared practical checks against runtime execution results.
 */

export interface PracticalCheckResult {
  checkId: string;
  passed: boolean;
  message: string;
  type: string;
}

export interface EvaluationInput {
  checks: Array<{
    id: string;
    type: string;
    command?: string;
    expected?: string | null;
    passCondition?: unknown;
    matchMode?: string;
    variableCheck?: { name: string; expected: unknown };
    explanation?: string;
  }>;
  stdout: string;
  stderr: string;
  globals?: Record<string, any>;
  files?: Record<string, string>;
  artifacts?: Record<string, string>;
  sanitizers?: string[];
  compileProbes?: Array<{ id: string; passed: boolean; message?: string }>;
  executionSuccess: boolean;
}

export function evaluatePracticalChecks(input: EvaluationInput): PracticalCheckResult[] {
  const {
    checks,
    stdout,
    stderr,
    globals = {},
    artifacts = {},
    sanitizers = [],
    compileProbes = [],
    executionSuccess,
  } = input;
  const normalizedStdout = stdout.replace(/\r\n/g, "\n");

  return checks.map((check) => {
    const checkType = check.type.toLowerCase();

    // 1. Output-based checks
    if (checkType === "output") {
      let expectedStr = "";
      if (typeof check.passCondition === "string") {
        expectedStr = check.passCondition;
      } else if (check.passCondition && typeof check.passCondition === "object" && !Array.isArray(check.passCondition)) {
        const condition = check.passCondition as Record<string, unknown>;
        expectedStr = String(condition.expected ?? condition.contains ?? "");
      }
      if (!expectedStr && typeof check.expected === "string") expectedStr = check.expected;

      if (!expectedStr) {
        const hasOutput = executionSuccess && normalizedStdout.trim().length > 0;
        return {
          checkId: check.id,
          passed: hasOutput,
          message: hasOutput ? "Output generated successfully." : "No output was produced by the program.",
          type: checkType,
        };
      }

      if (!executionSuccess) {
        return { checkId: check.id, passed: false, message: "The program did not execute successfully.", type: checkType };
      }
      const matchMode = check.matchMode || "contains";

      if (matchMode === "exact") {
        const passed = normalizedStdout.trim() === expectedStr.trim();
        return {
          checkId: check.id,
          passed,
          message: passed
            ? `Exact output matched.`
            : `Expected exact output "${expectedStr.trim()}", but got "${normalizedStdout.trim()}".`,
          type: checkType,
        };
      }

      if (matchMode === "regex") {
        try {
          const regex = new RegExp(expectedStr, "i");
          const passed = regex.test(normalizedStdout);
          return {
            checkId: check.id,
            passed,
            message: passed ? "Output pattern matched." : `Output did not match expected pattern: ${expectedStr}`,
            type: checkType,
          };
        } catch (_) {
          // fallback to contains
        }
      }

      // Default: flexible contains match (whitespace-insensitive line matching or substring)
      const cleanExpected = expectedStr.trim().replace(/\r\n/g, "\n");
      const passed = normalizedStdout.includes(cleanExpected) ||
        normalizedStdout.toLowerCase().includes(cleanExpected.toLowerCase()) ||
        // Check if all lines of expected exist in order in stdout
        checkLinesPresent(normalizedStdout, cleanExpected);

      return {
        checkId: check.id,
        passed,
        message: passed
          ? `Verified output: "${cleanExpected.length > 50 ? cleanExpected.slice(0, 47) + '...' : cleanExpected}"`
          : `Expected output to include "${cleanExpected.slice(0, 50)}".`,
        type: checkType,
      };
    }

    // 2. Command / Runtime checks
    if (checkType === "command" || checkType === "runtime") {
      const passed = executionSuccess && !stderr;
      return {
        checkId: check.id,
        passed,
        message: passed
          ? "Program executed cleanly without errors."
          : `Execution error: ${stderr || "Program exited with errors."}`,
        type: checkType,
      };
    }

    // 3. File checks use artifacts produced by execution, not editor starter files.
    if (["file", "file_exists", "file_contents"].includes(checkType)) {
      const condition = check.passCondition && typeof check.passCondition === "object" && !Array.isArray(check.passCondition)
        ? check.passCondition as Record<string, unknown>
        : {};
      const requestedPath = String(condition.path ?? condition.filePath ?? (["file", "file_exists"].includes(checkType) ? condition.expected : undefined) ?? check.expected ?? check.command ?? "").replace(/\\/g, "/");
      const actualPath = Object.keys(artifacts).find((filePath) => filePath.replace(/\\/g, "/") === requestedPath);
      const actualContent = actualPath ? artifacts[actualPath] : undefined;
      const expectedContent = String(condition.contents ?? condition.content ?? (checkType === "file_contents" ? condition.expected ?? check.expected ?? "" : ""));
      const passed = Boolean(executionSuccess && actualContent !== undefined && (
        checkType !== "file_contents" || (expectedContent.length > 0 && (
          check.matchMode === "exact"
            ? actualContent.trim() === expectedContent.trim()
            : actualContent.includes(expectedContent)
        ))
      ));
      return {
        checkId: check.id,
        passed,
        message: passed
          ? checkType === "file_contents" ? `Verified output file ${requestedPath}.` : `Created output file ${requestedPath}.`
          : requestedPath
            ? `Expected output file ${requestedPath} with the required contents was not produced.`
            : "This file check is missing an output path and cannot be verified.",
        type: checkType,
      };
    }

    // 4. Variable state checks
    if (checkType === "variable_state" || check.variableCheck) {
      const varName = check.variableCheck?.name;
      const expectedVal = check.variableCheck?.expected;
      if (varName && globals[varName] !== undefined) {
        const actualVal = globals[varName];
        const passed = String(actualVal) === String(expectedVal);
        return {
          checkId: check.id,
          passed,
          message: passed
            ? `Variable '${varName}' correctly holds ${actualVal}.`
            : `Variable '${varName}' expected ${expectedVal}, but was ${actualVal}.`,
          type: checkType,
        };
      }
      return {
        checkId: check.id,
        passed: false,
        message: "The requested variable state could not be verified by this runtime.",
        type: checkType,
      };
    }

    if (checkType === "syntax") {
      return {
        checkId: check.id,
        passed: executionSuccess,
        message: executionSuccess ? "The source compiled successfully." : "The source did not compile successfully.",
        type: checkType,
      };
    }

    if (checkType === "sanitizer") {
      const passed = executionSuccess
        && sanitizers.includes("address")
        && sanitizers.includes("undefined")
        && !/AddressSanitizer|LeakSanitizer|UndefinedBehaviorSanitizer|runtime error:/i.test(stderr);
      return {
        checkId: check.id,
        passed,
        message: passed
          ? "AddressSanitizer and UndefinedBehaviorSanitizer completed without a reported issue."
          : "Sanitizer verification was unavailable, failed, or reported an issue.",
        type: checkType,
      };
    }

    if (checkType === "compile_probe") {
      const probe = compileProbes.find((item) => item.id === check.id);
      const passed = executionSuccess && Boolean(probe?.passed);
      return {
        checkId: check.id,
        passed,
        message: passed
          ? probe?.message || "Compile probe verified the expected access behavior."
          : probe?.message || "Compile-time behavior could not be verified.",
        type: checkType,
      };
    }

    if (checkType === "manual" || checkType === "submission") {
      return {
        checkId: check.id,
        passed: false,
        message: "This activity requires instructor review and cannot be marked passed automatically.",
        type: checkType,
      };
    }

    return {
      checkId: check.id,
      passed: false,
      message: `Unsupported practical check type "${check.type}" cannot be marked passed.`,
      type: checkType,
    };
  });
}

function checkLinesPresent(actual: string, expected: string): boolean {
  const expectedLines = expected.split("\n").map((l) => l.trim()).filter(Boolean);
  const actualLines = actual.split("\n").map((l) => l.trim()).filter(Boolean);

  let actualIdx = 0;
  for (const expLine of expectedLines) {
    let found = false;
    while (actualIdx < actualLines.length) {
      if (actualLines[actualIdx].includes(expLine) || expLine.includes(actualLines[actualIdx])) {
        found = true;
        actualIdx++;
        break;
      }
      actualIdx++;
    }
    if (!found) return false;
  }
  return true;
}
