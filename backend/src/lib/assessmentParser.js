const FALLBACK_EXPLANATION = 'Review the chapter content and try again.';

function cleanText(value = '') {
  return value.replace(/\r/g, '').replace(/\s+/g, ' ').trim();
}

function stripOuterMarkdown(value = '') {
  return value
    .trim()
    .replace(/^['\"]|['\"]$/g, '')
    .replace(/^\*+\s*/, '')
    .replace(/\s*\*+$/, '')
    .trim();
}

function stripQuestionPrefix(value = '') {
  return stripOuterMarkdown(value)
    .replace(/^\s*(?:\d+[.)]\s+)?/, '')
    .replace(/^\s*(?:Multiple Choice|MCQ|Short Answer(?:\/Conceptual)?|Question(?:\s+\d+)?)\s*:?\s*/i, '')
    .replace(/^\s*(?:Code\s+Challenge|(?:Coding|Programming)\s+Challenge|Code\s+Completion|True\s*\/\s*False)\s*:?\s*/i, '')
    .replace(/^\s*(?:Ask|Prompt)(?:\s+learners?)?\s*:\s*/i, '')
    .trim();
}

function stripTrailingAnswerMarker(value = '') {
  return value
    .replace(/\s+\*{0,2}Answers?\s*:\s*\*{0,2}\s*$/i, '')
    .trim();
}

function normalizeCode(value = '') {
  const lines = value.replace(/\r/g, '').split('\n');
  while (lines.length > 0 && !lines[0].trim()) lines.shift();
  while (lines.length > 0 && !lines[lines.length - 1].trim()) lines.pop();

  const indentation = lines
    .filter((line) => line.trim())
    .reduce((minimum, line) => Math.min(minimum, line.match(/^[ \t]*/)?.[0].length || 0), Infinity);

  return lines
    .map((line) => indentation === Infinity ? line : line.slice(indentation))
    .join('\n')
    .trim();
}

function extractCodeBlocks(value = '') {
  const blocks = [];
  const text = value.replace(/```([\w+#.-]*)?[ \t]*\r?\n([\s\S]*?)```/g, (_match, language = '', code = '') => {
    blocks.push({ language: language || 'text', code: normalizeCode(code) });
    return ' ';
  });
  return { text, blocks };
}

function answerLetterFrom(value = '') {
  const match = value.match(/(?:^|[\s(:\-*])([a-z])[)\].:\-](?:\s|$)/i)
    || value.match(/(?:^|\s)([a-z])\b/i);
  return match?.[1]?.toLowerCase() || null;
}

function splitAnswerAndExplanation(value = '') {
  const match = value.match(/(?:^|\s)(?:\*+\s*)?Explanation\s*:\s*/i);
  if (!match) return { answer: value.trim(), explanation: cleanText(value) };

  return {
    // Preserve newlines because the answer may contain a multiline code block.
    answer: value.slice(0, match.index).trim(),
    explanation: cleanText(value.slice(match.index + match[0].length)),
  };
}

function parseCompactAskLine(line) {
  const asks = [];
  const askPattern = /(?:^|\s)(?:Then\s+)?Ask(?:\s+learners?)?\s*:\s*/gi;
  const markers = [...line.matchAll(askPattern)];

  for (let index = 0; index < markers.length; index += 1) {
    const start = markers[index].index + markers[index][0].length;
    const end = markers[index + 1]?.index ?? line.length;
    const segment = line.slice(start, end).trim();
    const answerMatch = segment.match(/\s+Answer\s*:\s*/i);
    const question = stripQuestionPrefix(answerMatch ? segment.slice(0, answerMatch.index) : segment);
    const answer = answerMatch ? segment.slice(answerMatch.index + answerMatch[0].length) : '';

    if (question) {
      asks.push({
        questionLines: [question],
        answerLines: answer ? [answer] : [],
        explanationLines: [],
        expectedOutputLines: [],
        options: [],
        answerLetter: answerLetterFrom(answer),
        mode: 'question',
      });
    }
  }

  return asks;
}

function sectionForChapter(markdown, moduleNumber, chapterNumber) {
  const chapterPattern = new RegExp(
    `^###\\s+Chapter\\s+${moduleNumber}\\.${chapterNumber}\\b[^\\n]*\\n([\\s\\S]*?)(?=^##\\s+Module\\b|^###\\s+Chapter\\s+|(?![\\s\\S]))`,
    'mi',
  );
  const chapter = markdown.match(chapterPattern)?.[1] || '';
  return chapter.match(/^####\s+Assessment idea\s*$([\s\S]*?)(?=^####\s+|(?![\s\S]))/mi)?.[1] || '';
}

const questionStartRegex = /^\s*(?:\d+[.)]\s+)?(?:\*\*)?(?:Question(?:\s+\d+)?|Multiple\s+Choice|MCQ|Short\s+Answer(?:\/Conceptual)?|Code\s+Challenge|(?:Coding|Programming)\s+Challenge|Code\s+Completion|True\s*\/\s*False)(?:\*\*)?\s*:?\s*(.*)$/i;
const askStartRegex = /^\s*(?:Ask|Prompt)(?:\s+learners?)?\s*:/i;
const optionRegex = /^\s*(?:[-*+]\s+)?(?:\*\*)?([a-z])(?:\*\*)?\s*[).:\-]\s*(.*?)\s*(?:\*\*)?$/i;
const markerRegex = /^\s*(?:[-*+]\s+|\d+[.)]\s+)?(?:\*\*)?(Correct|Expected)?\s*(Answers?|Output|Explanation)\s*(?:\([^)]*\))?\s*:?[ \t]*(?:\*\*)?[ \t]*(.*)$/i;

function createQuestionState() {
  return {
    questionLines: [],
    answerLines: [],
    explanationLines: [],
    expectedOutputLines: [],
    options: [],
    answerLetter: null,
    questionKind: 'question',
    mode: 'question',
  };
}

function normalizeBlock(state, id) {
  const questionCode = extractCodeBlocks(state.questionLines.join('\n'));
  const question = cleanText(stripTrailingAnswerMarker(stripQuestionPrefix(questionCode.text)));
  if (!question) return null;

  const answerParts = splitAnswerAndExplanation(state.answerLines.join('\n'));
  const outputCode = extractCodeBlocks(state.expectedOutputLines.join('\n'));
  const answerCode = extractCodeBlocks(answerParts.answer);
  const explanation = cleanText(state.explanationLines.join('\n'))
    || answerParts.explanation
    || FALLBACK_EXPLANATION;
  const options = state.options.map(cleanText);
  const answerLetter = state.answerLetter || answerLetterFrom(answerParts.answer);
  const answerIndex = answerLetter ? answerLetter.charCodeAt(0) - 97 : -1;
  const questionCodeBlock = questionCode.blocks[0];
  const referenceAnswer = answerParts.answer.trim() || null;
  const trustedReferenceAnswer = referenceAnswer || (questionCodeBlock ? explanation : null);

  if (state.questionKind === 'code-challenge') {
    return {
      id,
      type: 'code-challenge',
      question,
      language: questionCodeBlock?.language || 'text',
      code: questionCodeBlock?.code || null,
      ...(trustedReferenceAnswer ? { referenceAnswer: trustedReferenceAnswer } : {}),
      explanation,
    };
  }

  if (options.length >= 2 && answerIndex >= 0 && answerIndex < options.length) {
    return {
      id,
      type: 'multiple-choice',
      question,
      options,
      correctOption: answerIndex,
      explanation,
      ...(trustedReferenceAnswer ? { referenceAnswer: trustedReferenceAnswer } : {}),
      ...(questionCodeBlock ? { language: questionCodeBlock.language, code: questionCodeBlock.code } : {}),
    };
  }

  const codeBlock = questionCodeBlock;
  const expectedOutput = cleanText(
    outputCode.blocks[0]?.code
      || outputCode.text
      || answerCode.blocks[0]?.code
      || answerParts.answer,
  );

  if (codeBlock && expectedOutput && /(?:output|print|display|run|execute)/i.test(question)) {
    return {
      id,
      type: 'code-output',
      question,
      language: codeBlock.language,
      code: codeBlock.code,
      expectedOutput,
      ...(trustedReferenceAnswer ? { referenceAnswer: trustedReferenceAnswer } : {}),
      explanation,
    };
  }

  if (codeBlock) {
    return {
      id,
      type: 'code-challenge',
      question,
      language: codeBlock.language,
      code: codeBlock.code,
      ...(trustedReferenceAnswer ? { referenceAnswer: trustedReferenceAnswer } : {}),
      explanation,
    };
  }

  return {
    id,
    type: 'case-study',
    question,
    ...(referenceAnswer ? { referenceAnswer } : {}),
    explanation,
  };
}

export function parseAssessmentQuestions(markdown, moduleNumber, chapterNumber) {
  const assessment = sectionForChapter(markdown, moduleNumber, chapterNumber);
  if (!assessment.trim()) return [];

  const blocks = [];
  let current = null;

  const flushCurrent = () => {
    if (!current) return;
    const normalized = normalizeBlock(current, blocks.length + 1);
    if (normalized) blocks.push(normalized);
    current = null;
  };

  const startQuestion = (line) => {
    flushCurrent();
    current = createQuestionState();
    current.questionKind = /Code\s+Challenge|(?:Coding|Programming)\s+Challenge|Code\s+Completion/i.test(line)
      ? 'code-challenge'
      : 'question';
    const remainder = line.match(questionStartRegex)?.[1]?.trim();
    if (remainder) current.questionLines.push(remainder);
  };

  for (const rawLine of assessment.split(/\r?\n/)) {
    const line = rawLine.replace(/\s+$/g, '');
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (askStartRegex.test(line) && /^\s*Ask/i.test(line)) {
      flushCurrent();
      for (const compact of parseCompactAskLine(line)) {
        const normalized = normalizeBlock(compact, blocks.length + 1);
        if (normalized) blocks.push(normalized);
      }
      continue;
    }

    if (questionStartRegex.test(line)) {
      startQuestion(line);
      continue;
    }

    if (!current) current = createQuestionState();

    const marker = line.match(markerRegex);
    if (marker) {
      const kind = `${marker[1] || ''} ${marker[2] || ''}`.toLowerCase();
      current.mode = kind.includes('output')
        ? 'expected-output'
        : kind.includes('explanation')
          ? 'explanation'
          : 'answer';
      const remainder = marker[3]?.trim();
      if (remainder) {
        if (current.mode === 'expected-output') current.expectedOutputLines.push(remainder);
        else if (current.mode === 'explanation') current.explanationLines.push(remainder);
        else current.answerLines.push(remainder);
      }
      if (!current.answerLetter && current.mode === 'answer') current.answerLetter = answerLetterFrom(remainder);
      continue;
    }

    const option = trimmed.match(optionRegex);
    if (current.mode === 'question' && option) {
      current.options.push(option[2]);
      continue;
    }

    if (current.mode === 'expected-output') current.expectedOutputLines.push(trimmed);
    else if (current.mode === 'explanation') current.explanationLines.push(trimmed);
    else if (current.mode === 'answer') {
      // Keep leading spaces so indentation inside answer code blocks survives import.
      current.answerLines.push(line);
      if (!current.answerLetter) current.answerLetter = answerLetterFrom(trimmed);
    } else if (current.mode === 'question') current.questionLines.push(line);
    else current.questionLines.push(trimmed);
  }

  flushCurrent();
  return blocks;
}
