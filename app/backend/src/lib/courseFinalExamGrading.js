function normalizedAnswer(value) {
  return String(value || '').toLowerCase().replace(/[^a-z0-9+#]+/g, ' ').trim().replace(/\s+/g, ' ');
}

export function gradeMultipleChoiceAnswer(question, answer) {
  const options = [...String(question.prompt).matchAll(/^\s*([A-D])[.)]\s*(.+)$/gim)]
    .map((match) => ({ letter: match[1].toUpperCase(), text: normalizedAnswer(match[2]) }));
  if (!options.length) return null;

  const answerKey = String(question.answerKey || '');
  const answerKeyLetter = answerKey.match(/(?:correct answer|answer)\s*(?:is|:)?\s*([A-D])\b/i)?.[1]?.toUpperCase();
  const normalizedKey = normalizedAnswer(answerKey);
  const matchedOptions = options.filter((option) => normalizedKey.includes(option.text) || option.text.includes(normalizedKey));
  const correct = answerKeyLetter
    ? options.find((option) => option.letter === answerKeyLetter)
    : matchedOptions.length === 1 ? matchedOptions[0] : null;
  if (!correct) return null;

  const submitted = String(answer || '').trim();
  const submittedLetter = submitted.match(/^\s*([A-D])(?:[.)])?\s*$/i)?.[1]?.toUpperCase();
  const selected = submittedLetter
    ? options.find((option) => option.letter === submittedLetter)
    : options.find((option) => option.text === normalizedAnswer(submitted));
  if (!selected) return { pointsAwarded: 0, confidence: 1, feedback: 'Select one of the listed answer choices.' };
  const isCorrect = selected.letter === correct.letter;
  return {
    pointsAwarded: isCorrect ? Number(question.points) : 0,
    confidence: 1,
    feedback: isCorrect ? 'Correct answer.' : 'This choice does not match the correct answer.',
  };
}

export function calculateExamScore(pointsAwarded, totalPoints) {
  return totalPoints > 0 ? Math.round(pointsAwarded / totalPoints * 100) : 0;
}
