export type CPracticeSimulationResult = {
  success: boolean;
  stdout: string;
  stderr: string;
};

function decodeCString(value: string): string {
  return value
    .replace(/\\n/g, "\n")
    .replace(/\\t/g, "\t")
    .replace(/\\r/g, "\r")
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, "\\");
}

/**
 * A deliberately small, safe fallback for early C practicals. It never executes
 * learner code: it validates a simple program shape and simulates literal printf/puts output.
 */
export function simulateIntroductoryC(code: string): CPracticeSimulationResult {
  const source = String(code || "");
  if (!/\bint\s+main\s*\(/.test(source)) {
    return { success: false, stdout: "", stderr: "C simulator: expected an int main(...) function." };
  }
  if ((source.match(/{/g) || []).length !== (source.match(/}/g) || []).length) {
    return { success: false, stdout: "", stderr: "C simulator: braces are not balanced." };
  }

  const statements = source.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const missingSemicolon = statements.find((line) => /^(printf|puts)\s*\(/.test(line) && !/;\s*(?:\/\/.*)?$/.test(line));
  if (missingSemicolon) {
    return { success: false, stdout: "", stderr: "C simulator: expected ';' after the output statement." };
  }

  const output: string[] = [];
  const printPattern = /\bprintf\s*\(\s*"((?:\\.|[^"\\])*)"[^)]*\)|\bputs\s*\(\s*"((?:\\.|[^"\\])*)"\s*\)/g;
  let match: RegExpExecArray | null;
  while ((match = printPattern.exec(source))) {
    output.push(decodeCString(match[1] ?? match[2] ?? "") + (match[2] !== undefined ? "\n" : ""));
  }
  if (!output.length) {
    return {
      success: false,
      stdout: "",
      stderr: "C simulator: this exercise needs an isolated native executor because it does not use a literal printf or puts statement.",
    };
  }
  return {
    success: true,
    stdout: output.join(""),
    stderr: "C learning simulator used for this introductory output exercise. Native compilation remains isolated until a sandbox executor is configured.",
  };
}
