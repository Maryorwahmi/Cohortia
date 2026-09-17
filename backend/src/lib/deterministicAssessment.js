const STOP_WORDS = new Set([
  'about', 'after', 'again', 'also', 'because', 'before', 'being', 'between',
  'could', 'does', 'from', 'have', 'into', 'more', 'most', 'only', 'should',
  'some', 'that', 'their', 'there', 'these', 'they', 'this', 'those', 'through',
  'under', 'using', 'what', 'when', 'where', 'which', 'while', 'with', 'would',
  'your', 'answer', 'question', 'following', 'correct', 'explain', 'describe',
]);

function normalizeText(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[^a-z0-9+#._-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeCodeOutput(value) {
  return String(value || '')
    .replace(/```[\w+#.-]*\s*/gi, '')
    .replace(/```/g, '')
    .replace(/[ \t]+/g, ' ')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .join('\n')
    .trim()
    .toLowerCase();
}

function tokens(value) {
  return new Set(normalizeText(value)
    .split(' ')
    .filter((token) => token.length >= 4 && !STOP_WORDS.has(token)));
}

function technicalTokens(value) {
  const source = String(value || '');
  const marked = [...source.matchAll(/`([^`]+)`/g)].flatMap((match) => match[1].split(/[^a-zA-Z0-9+#._-]+/));
  const acronyms = source.match(/\b[A-Z][A-Z0-9-]{1,}\b/g) || [];
  return new Set([...marked, ...acronyms]
    .map((token) => normalizeText(token))
    .filter((token) => token.length >= 2));
}

function conceptSet(question, referenceAnswer, explanation) {
  const referenceTokens = tokens(referenceAnswer || explanation);
  const questionTokens = tokens(question);
  const technical = technicalTokens(`${question}\n${referenceAnswer}\n${explanation}`);
  const questionConcepts = [...referenceTokens].filter((token) => questionTokens.has(token));
  return new Set([...technical, ...questionConcepts].filter((token) => token.length >= 2));
}

function missingConcepts(studentAnswer, concepts) {
  const answerTokens = tokens(studentAnswer);
  return [...concepts].filter((concept) => !answerTokens.has(concept)).slice(0, 6);
}

function evaluateWritten({ question, studentAnswer, referenceAnswer, explanation, type }) {
  const answer = normalizeText(studentAnswer);
  const reference = normalizeText(referenceAnswer || explanation);
  const concepts = conceptSet(question, referenceAnswer, explanation);
  const referenceTokens = tokens(reference);
  const answerTokens = tokens(answer);
  const matchedReferenceTokens = [...referenceTokens].filter((token) => answerTokens.has(token)).length;
  const referenceCoverage = referenceTokens.size > 0 ? matchedReferenceTokens / referenceTokens.size : 0;
  const matchedConcepts = [...concepts].filter((concept) => answerTokens.has(concept));
  const missing = [...concepts].filter((concept) => !answerTokens.has(concept)).slice(0, 6);
  const exact = Boolean(answer && reference && answer.length >= 24 && (answer === reference || reference.includes(answer)));
  const minimumConcepts = type === 'code-challenge' ? 2 : 3;
  const conceptGate = Math.min(minimumConcepts, referenceTokens.size);
  const hasRequiredConcepts = Math.max(matchedConcepts.length, matchedReferenceTokens) >= conceptGate;
  const hasSupportingDetail = matchedReferenceTokens >= Math.min(3, referenceTokens.size);
  const isCorrect = Boolean(answer) && (exact || (
    referenceTokens.size >= 4
    && hasRequiredConcepts
    && hasSupportingDetail
  ));

  return {
    isCorrect,
    feedback: isCorrect
      ? 'Your answer explains the essential ideas needed for this question.'
      : 'Your answer is on the right topic, but it is missing some important details needed for full credit.',
    guidance: isCorrect
      ? 'Your response has been recorded. Continue to the next question.'
      : 'Revise the answer using the key concepts from the question and explain why they support your conclusion.',
    keyPointsMissed: isCorrect ? [] : missing,
    evaluationSource: 'assessment-key',
    confidence: exact || (referenceCoverage >= 0.8 && hasRequiredConcepts) ? 'high' : 'review-needed',
  };
}

export function evaluateAssessmentAnswer({ question, studentAnswer }) {
  const type = String(question?.type || 'case-study');
  const answer = String(studentAnswer || '').trim();

  if (type === 'multiple-choice') {
    const selected = Number(answer);
    const isCorrect = Number.isInteger(selected) && selected === Number(question.correctOption);
    return {
      isCorrect,
      feedback: isCorrect ? 'Correct answer.' : 'That answer does not match the stored assessment key.',
      guidance: isCorrect ? 'Continue to the next question.' : 'Review the explanation and choose the option that best matches it.',
      keyPointsMissed: isCorrect ? [] : ['Select the option identified by the stored answer key.'],
      evaluationSource: 'assessment-key',
      confidence: 'high',
    };
  }

  if (type === 'code-output') {
    const isCorrect = normalizeCodeOutput(answer) === normalizeCodeOutput(question.expectedOutput);
    return {
      isCorrect,
      feedback: isCorrect ? 'The output matches the stored expected result.' : 'The output does not match the stored expected result.',
      guidance: isCorrect ? 'Continue to the next question.' : 'Check whitespace, values, ordering, and the program logic before trying again.',
      keyPointsMissed: isCorrect ? [] : ['Match the expected output exactly, ignoring formatting whitespace only.'],
      evaluationSource: 'assessment-key',
      confidence: 'high',
    };
  }

  return evaluateWritten({
    question: question.question,
    studentAnswer: answer,
    referenceAnswer: question.referenceAnswer,
    explanation: question.explanation,
    type,
  });
}
