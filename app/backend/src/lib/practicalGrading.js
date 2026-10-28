const PRIVATE_FIELDS = new Set([
  'acceptedanswers',
  'answer',
  'answerkey',
  'command',
  'compileprobes',
  'correctanswer',
  'correctoption',
  'expected',
  'expectedanswer',
  'expecteddiagnostic',
  'expectedoutput',
  'expectedvalue',
  'expectcompilesuccess',
  'generator',
  'grader',
  'grading',
  'input',
  'matchmode',
  'metadata',
  'passcondition',
  'stdin',
  'solution',
  'solutioncode',
  'sourcecontent',
  'sourcehash',
  'sourcepath',
  'testdata',
  'variablecheck',
]);

function asRecord(value) {
  return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
}

function publicCheck(check, index) {
  const record = asRecord(check);
  if (String(record.visibility || '').toLowerCase() === 'hidden') return null;
  return {
    id: typeof record.id === 'string' && record.id ? record.id : `check-${index + 1}`,
    type: typeof record.type === 'string' && record.type ? record.type : 'manual',
  };
}

function publicSimulation(simulation) {
  const record = asRecord(simulation);
  const steps = Array.isArray(record.steps)
    ? record.steps.slice(0, 20).map((step) => {
      const action = asRecord(step).action;
      const output = asRecord(step).output;
      if (typeof action !== 'string' || typeof output !== 'string') return null;
      return { action: action.slice(0, 500), output: output.slice(0, 4000) };
    }).filter(Boolean)
    : [];
  return steps.length ? { steps } : undefined;
}

function sanitizeValue(value, key = '') {
  const normalizedKey = key.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (PRIVATE_FIELDS.has(normalizedKey)) return undefined;
  if (normalizedKey === 'checks' || normalizedKey === 'tests') {
    return Array.isArray(value) ? value.map(publicCheck).filter(Boolean) : [];
  }
  if (normalizedKey === 'simulation') return publicSimulation(value);
  if (normalizedKey === 'interactiveexercise') {
    const exercise = asRecord(value);
    return {
      ...(typeof exercise.type === 'string' ? { type: exercise.type } : {}),
      ...(typeof exercise.prompt === 'string' ? { prompt: exercise.prompt } : {}),
    };
  }
  if (Array.isArray(value)) {
    return value.map((item) => sanitizeValue(item)).filter((item) => item !== undefined);
  }
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value)
      .map(([childKey, childValue]) => [childKey, sanitizeValue(childValue, childKey)])
      .filter(([, childValue]) => childValue !== undefined));
  }
  return value;
}

export function sanitizePracticalForLearner(practical) {
  if (!practical || typeof practical !== 'object' || Array.isArray(practical)) return practical;
  return sanitizeValue(practical);
}

function checkExpected(check) {
  const condition = asRecord(check.passCondition);
  const testData = asRecord(check.testData);
  const nestedCondition = asRecord(testData.passCondition);
  if (typeof check.passCondition === 'string') return check.passCondition;
  return String(
    condition.expected
      ?? condition.contains
      ?? nestedCondition.expected
      ?? nestedCondition.contains
      ?? check.expected
      ?? testData.expected
      ?? '',
  );
}

function checkFilePath(check) {
  const condition = asRecord(check.passCondition);
  const testData = asRecord(check.testData);
  const nestedCondition = asRecord(testData.passCondition);
  return String(
    condition.path
      ?? condition.filePath
      ?? nestedCondition.path
      ?? nestedCondition.filePath
      ?? condition.expected
      ?? check.expected
      ?? check.command
      ?? '',
  ).replaceAll('\\', '/');
}

function checkExpectedFileContent(check) {
  const condition = asRecord(check.passCondition);
  const testData = asRecord(check.testData);
  const nestedCondition = asRecord(testData.passCondition);
  return String(
    condition.contents
      ?? condition.content
      ?? nestedCondition.contents
      ?? nestedCondition.content
      ?? (String(check.type).toLowerCase() === 'file_contents' ? condition.expected ?? nestedCondition.expected ?? check.expected : '')
      ?? '',
  );
}

function checkResult(check, passed, message) {
  return {
    checkId: String(check.id),
    passed,
    type: String(check.type).toLowerCase(),
    message,
  };
}

function normalizeBinaryAnswer(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/^0b/, '')
    .replace(/[₀₁₂₃₄₅₆₇₈₉]/g, '')
    .replace(/[\s,_]/g, '');
}

function answerFromBinaryConversionPrompt(prompt) {
  const text = String(prompt || '').replace(/[`*]/g, '').toLowerCase();
  const binaryToDecimal = text.match(/\b([01]{2,})\s+from\s+binary\s+to\s+decimal\b/)
    || text.match(/\bbinary(?:\s+number)?\s+([01]{2,})\b[\s\S]{0,100}\bdecimal\b/);
  if (binaryToDecimal) {
    try {
      return BigInt(`0b${binaryToDecimal[1]}`).toString(10);
    } catch {
      return null;
    }
  }

  const decimalToBinary = text.match(/\b(\d+)\s+from\s+decimal\s+to\s+binary\b/)
    || text.match(/\bdecimal(?:\s+number)?\s+(\d+)\b[\s\S]{0,100}\bbinary\b/);
  if (decimalToBinary) {
    try {
      return BigInt(decimalToBinary[1]).toString(2);
    } catch {
      return null;
    }
  }

  const bitCounts = [...text.matchAll(/\b(\d+)\s*-\s*bits?\b|\b(\d+)\s+bits?\b/g)]
    .map((match) => Number(match[1] || match[2]))
    .filter((bits) => Number.isInteger(bits) && bits > 0 && bits <= 4096);
  if (!bitCounts.length) return null;

  if (/\bhow many\b[\s\S]*\b(?:unique|possible|distinct)\s+values?\b|\bvalues?\b[\s\S]*\brepresented\b/i.test(text)) {
    return (2n ** BigInt(bitCounts[0])).toString(10);
  }

  if (/\b(?:maximum|max|largest)\b[\s\S]*\b(?:decimal\s+)?value\b|\bmaximum\s+decimal\s+value\b/i.test(text)) {
    const eachBits = text.match(/\b(\d+)\s+bits?\s+each\b/);
    const bits = Number(eachBits?.[1] || bitCounts[bitCounts.length - 1]);
    if (!Number.isInteger(bits) || bits < 1 || bits > 4096) return null;
    return ((2n ** BigInt(bits)) - 1n).toString(10);
  }

  return null;
}

export function gradeBinaryConversionAnswer(exercise, answer) {
  const record = asRecord(exercise);
  if (String(record.type || '').toLowerCase() !== 'binary_conversion') return null;

  const submittedAnswer = normalizeBinaryAnswer(answer);
  if (!submittedAnswer) return false;

  const acceptedAnswers = [
    record.expectedAnswer,
    ...(Array.isArray(record.acceptedAnswers) ? record.acceptedAnswers : []),
    answerFromBinaryConversionPrompt(record.prompt),
  ].filter((value) => typeof value === 'string' && value.trim());

  if (!acceptedAnswers.length) return null;
  return acceptedAnswers.some((expected) => normalizeBinaryAnswer(expected) === submittedAnswer);
}

export function evaluatePracticalChecks({
  checks,
  stdout = '',
  stderr = '',
  artifacts = {},
  sanitizers = [],
  compileProbes = [],
  executionSuccess = false,
}) {
  const normalizedStdout = String(stdout).replace(/\r\n/g, '\n');
  const normalizedStderr = String(stderr);
  const normalizedArtifacts = Object.fromEntries(Object.entries(asRecord(artifacts))
    .map(([filePath, content]) => [filePath.replaceAll('\\', '/'), String(content)]));

  return checks.map((check) => {
    const type = String(check.type || '').toLowerCase();
    if (type === 'output') {
      const expected = checkExpected(check);
      if (!expected) {
        const passed = executionSuccess && normalizedStdout.trim().length > 0;
        return checkResult(check, passed, passed ? 'Program output was produced.' : 'No program output was produced.');
      }
      if (!executionSuccess) return checkResult(check, false, 'The program did not execute successfully.');
      const matchMode = String(check.matchMode || asRecord(check.passCondition).matchMode || '').toLowerCase();
      let passed = false;
      if (matchMode === 'exact') {
        passed = normalizedStdout.trim() === expected.trim();
      } else if (matchMode === 'regex') {
        try {
          passed = expected.length <= 512 && new RegExp(expected, 'i').test(normalizedStdout);
        } catch {
          passed = normalizedStdout.toLowerCase().includes(expected.toLowerCase());
        }
      } else {
        passed = normalizedStdout.includes(expected.trim())
          || normalizedStdout.toLowerCase().includes(expected.trim().toLowerCase());
      }
      return checkResult(check, passed, passed ? 'Program output matched this check.' : 'Program output did not match this check.');
    }

    if (type === 'command' || type === 'runtime') {
      const passed = executionSuccess && !normalizedStderr;
      return checkResult(check, passed, passed ? 'Program executed without runtime errors.' : 'Program execution reported an error.');
    }

    if (['file', 'file_exists', 'file_contents'].includes(type)) {
      const requestedPath = checkFilePath(check);
      const actualPath = Object.keys(normalizedArtifacts).find((filePath) => filePath === requestedPath);
      const actualContent = actualPath === undefined ? undefined : normalizedArtifacts[actualPath];
      const expectedContent = checkExpectedFileContent(check);
      const matchMode = String(check.matchMode || asRecord(check.passCondition).matchMode || '').toLowerCase();
      const contentMatches = matchMode === 'exact'
        ? actualContent?.trim() === expectedContent.trim()
        : actualContent?.includes(expectedContent) === true;
      const passed = executionSuccess
        && actualContent !== undefined
        && (type !== 'file_contents' || (expectedContent.length > 0 && contentMatches));
      return checkResult(check, passed, passed ? 'The required output file was created.' : 'The required output file was not verified.');
    }

    if (type === 'syntax') {
      return checkResult(check, executionSuccess, executionSuccess ? 'The source compiled or ran successfully.' : 'The source did not compile or run successfully.');
    }

    if (type === 'sanitizer') {
      const passed = executionSuccess
        && sanitizers.includes('address')
        && sanitizers.includes('undefined')
        && !/AddressSanitizer|LeakSanitizer|UndefinedBehaviorSanitizer|runtime error:/i.test(normalizedStderr);
      return checkResult(check, passed, passed ? 'Sanitizer verification passed.' : 'Sanitizer verification was unavailable or did not pass.');
    }

    if (type === 'compile_probe') {
      const probe = compileProbes.find((item) => item.id === check.id);
      const passed = executionSuccess && Boolean(probe?.passed);
      return checkResult(check, passed, passed ? 'Compile-time behavior was verified.' : 'Compile-time behavior could not be verified.');
    }

    if (type === 'manual' || type === 'submission') {
      return checkResult(check, false, 'This activity requires instructor review.');
    }

    return checkResult(check, false, 'This check type is not supported for automatic verification.');
  });
}
