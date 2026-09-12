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
    passCondition?: any;
    matchMode?: string;
    variableCheck?: { name: string; expected: any };
    explanation?: string;
  }>;
  stdout: string;
  stderr: string;
  globals?: Record<string, any>;
  files?: Record<string, string>;
  executionSuccess: boolean;
}

export function evaluatePracticalChecks(input: EvaluationInput): PracticalCheckResult[] {
  const { checks, stdout, stderr, globals = {}, files = {}, executionSuccess } = input;
  const normalizedStdout = stdout.replace(/\r\n/g, "\n");

  return checks.map((check) => {
    const checkType = check.type || "output";

    // 1. Output-based checks
    if (checkType === "output") {
      let expectedStr = "";
      if (typeof check.passCondition === "string") {
        expectedStr = check.passCondition;
      } else if (check.passCondition && typeof check.passCondition === "object") {
        expectedStr = check.passCondition.expected ?? check.passCondition.contains ?? "";
      }

      if (!expectedStr) {
        // If no explicit expected string, pass if execution succeeded and produced some output
        const hasOutput = normalizedStdout.trim().length > 0;
        return {
          checkId: check.id,
          passed: hasOutput,
          message: hasOutput ? "Output generated successfully." : "No output was produced by the program.",
          type: checkType,
        };
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

    // 3. File existence checks
    if (checkType === "file") {
      // Check if files map has any matching file
      const fileKeys = Object.keys(files);
      const passed = fileKeys.length > 0 && fileKeys.some((f) => (files[f] || "").trim().length > 0);
      return {
        checkId: check.id,
        passed,
        message: passed ? "Required workspace files are present." : "Missing required files or file is empty.",
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
    }

    // 5. Default / Simulation / Manual
    return {
      checkId: check.id,
      passed: true,
      message: "Check passed.",
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
