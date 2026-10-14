export function validateCourseFinalPackage({courseId, capstones = [], exam = null, questions = [], courseMatchesLearningContent = false}) {
  const errors = [];
  if (!courseId || !courseMatchesLearningContent) errors.push('Course ID does not match learning content.');
  if (!capstones.length) errors.push('At least one capstone is required.');
  if (!capstones.some((capstone) => Array.isArray(capstone.requirements) && capstone.requirements.some((item) => String(item).trim()))) {
    errors.push('At least one capstone must include requirements.');
  }
  for (const capstone of capstones) {
    const rubric = Array.isArray(capstone.rubric) ? capstone.rubric : [];
    if (!rubric.length || rubric.some((criterion) => !Number.isFinite(Number(criterion.weight)) || Number(criterion.weight) < 0)
      || rubric.reduce((total, criterion) => total + Number(criterion.weight || 0), 0) !== 100) {
      errors.push(`Capstone "${capstone.title || capstone.id}" must have rubric weights totaling 100.`);
    }
  }
  if (!exam) {
    errors.push('A final examination is required.');
  } else {
    if (!Number.isInteger(Number(exam.passingScore)) || Number(exam.passingScore) < 0 || Number(exam.passingScore) > 100) {
      errors.push('A valid passing score from 0 to 100 is required.');
    }
    if (!questions.length) errors.push('At least one exam question is required.');
    for (const question of questions) {
      if (!String(question.answer ?? question.answerKey ?? '').trim()) {
        errors.push(`Question ${question.questionNumber ?? '?'} is missing an answer key.`);
      }
      if (!Number.isInteger(Number(question.points)) || Number(question.points) <= 0) {
        errors.push(`Question ${question.questionNumber ?? '?'} must have positive whole-number points.`);
      }
    }
  }
  return {valid: errors.length === 0, errors};
}
