const clean = (value) => String(value || '')
  .replace(/\r/g, '')
  .replace(/\*\*([^*]+)\*\*/g, '$1')
  .replace(/__([^_]+)__/g, '$1')
  .replace(/`([^`]+)`/g, '$1')
  .replace(/\s+/g, ' ')
  .trim();

function frontmatter(markdown) {
  const block = String(markdown).match(/^---\s*\n([\s\S]*?)\n---/);
  const values = {};
  for (const line of block?.[1]?.split(/\r?\n/) || []) {
    const match = line.match(/^([\w-]+):\s*(.*)$/);
    if (match) values[match[1]] = match[2].trim().replace(/^['"]|['"]$/g, '');
  }
  return values;
}

function sectionBody(markdown, heading) {
  const source = String(markdown);
  const headingMatch = source.match(new RegExp(`^##\\s+${heading}\\s*$`, 'im'));
  if (!headingMatch || headingMatch.index === undefined) return '';
  const start = headingMatch.index + headingMatch[0].length;
  const remainder = source.slice(start);
  const nextHeading = remainder.search(/^##\\s+/im);
  return remainder.slice(0, nextHeading >= 0 ? nextHeading : remainder.length).trim();
}

function labeledBlock(text, label) {
  const labels = ['Project Description', 'Requirements', 'Stretch Goals', 'Evaluation Criteria', 'Estimated Time'];
  const stop = labels.filter((candidate) => candidate !== label).join('|');
  const match = String(text).match(new RegExp(`(?:\\*\\*${label}:\\*\\*|####\\s+${label})\\s*([\\s\\S]*?)(?=\\n(?:\\*\\*(?:${stop}):\\*\\*|####\\s+(?:${stop}))|\\n###|\\n##\\s+|$)`, 'i'));
  return match?.[1]?.trim() || '';
}

function listItems(text) {
  return String(text || '').split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => /^(?:\d+\.|\*|-|•)\s+/.test(line))
    .map((line) => clean(line.replace(/^(?:\d+\.|\*|-|•)\s+/, '')))
    .filter(Boolean);
}

function rubricItems(text) {
  return String(text || '').split(/\r?\n/)
    .map((line) => line.trim())
    .map((line) => {
      const match = line.match(/^\*\s+\*\*([^*]+?)\s*\((\d+)%\):\*\*\s*(.*)$/);
      return match ? { criterion: clean(match[1]), weight: Number(match[2]), description: clean(match[3]) } : null;
    })
    .filter(Boolean);
}

function projectDescription(text) {
  const labelled = labeledBlock(text, 'Project Description');
  if (labelled) return clean(labelled);
  const firstDetail = String(text).search(/^(?:####\s+|\*\*(?:Requirements|Stretch Goals|Evaluation Criteria|Estimated Time):\*\*)/im);
  return clean(firstDetail >= 0 ? String(text).slice(0, firstDetail) : text);
}

function inferQuestionType(prompt) {
  const value = String(prompt || '').toLowerCase();
  if (/\n\s*\*?\s*[a-d][.)]/i.test(prompt) || /\bwhich of the following\b/.test(value)) return 'multiple_choice';
  if (/write the|configure|commands|configuration|code snippet/.test(value)) return 'configuration';
  if (/design|troubleshoot|analyze|describe|explain|outline/.test(value)) return 'written';
  return 'written';
}

function examTimeLimit(meta, examText) {
  const frontmatterValue = Number(meta.exam_time_limit_minutes || meta.time_limit_minutes);
  if (Number.isInteger(frontmatterValue) && frontmatterValue > 0) return frontmatterValue;
  const match = String(examText).match(/(?:time limit|duration|time allowed)\s*:?\s*(\d+)\s*(?:minutes?|mins?)/i);
  return match ? Number(match[1]) : 90;
}

export function parseCourseFinals(markdown, sourcePath = null) {
  const meta = frontmatter(markdown);
  const capstoneText = sectionBody(markdown, 'Final Capstone Project');
  const examText = sectionBody(markdown, 'Final Examination');
  const projects = [];
  const optionMatches = [...capstoneText.matchAll(/^###\s+Project Option\s+(\d+):\s*(.+)$/gim)];
  for (let index = 0; index < optionMatches.length; index += 1) {
    const match = optionMatches[index];
    const start = match.index + match[0].length;
    const end = optionMatches[index + 1]?.index ?? capstoneText.length;
    const body = capstoneText.slice(start, end).trim();
    projects.push({
      optionNumber: Number(match[1]),
      title: clean(match[2]),
      description: projectDescription(body),
      requirements: listItems(labeledBlock(body, 'Requirements')),
      stretchGoals: listItems(labeledBlock(body, 'Stretch Goals')),
      rubric: rubricItems(labeledBlock(body, 'Evaluation Criteria')),
      estimatedTime: clean(labeledBlock(body, 'Estimated Time')),
    });
  }

  const sections = [];
  const sectionMatches = [...examText.matchAll(/^###\s+Section\s+(.+)$/gim)];
  for (let index = 0; index < sectionMatches.length; index += 1) {
    const match = sectionMatches[index];
    const sectionTitle = clean(match[1]);
    const start = match.index + match[0].length;
    const end = sectionMatches[index + 1]?.index ?? examText.length;
    sections.push({ title: sectionTitle, text: examText.slice(start, end).trim() });
  }
  const questions = [];
  for (const section of sections) {
    const questionMatches = [...section.text.matchAll(/^\*\*Question\s+(\d+):\*\*\s*([\s\S]*?)(?=^\*\*Answer\s+\1:\*\*|^\*\*Question\s+\d+:\*\*|^---\s*$|$)/gim)];
    for (const match of questionMatches) {
      const prompt = match[2].trim();
      questions.push({
        questionNumber: Number(match[1]),
        section: section.title,
        type: inferQuestionType(prompt),
        prompt,
        answer: '',
        points: 1,
      });
    }
    const answerMatches = [...section.text.matchAll(/^\*\*Answer\s+(\d+):\*\*\s*([\s\S]*?)(?=^\*\*Question\s+\d+:\*\*|^\*\*Answer\s+\d+:\*\*|^---\s*$|$)/gim)];
    for (const answer of answerMatches) {
      const question = questions.find((item) => item.section === section.title && item.questionNumber === Number(answer[1]));
      if (question) question.answer = answer[2].trim();
    }
  }

  return {
    courseId: meta.course_id || null,
    courseTitle: meta.course_title || null,
    sourcePath,
    capstone: projects,
    exam: examText ? {
      title: 'Final Examination',
      instructions: clean(examText.split(/^###\s+/m)[0]),
      questions,
      passingScore: 70,
      timeLimitMinutes: examTimeLimit(meta, examText),
    } : null,
  };
}

export function publicFinals(finals) {
  return {
    courseId: finals.courseId,
    courseTitle: finals.courseTitle,
    capstone: finals.capstone.map(({ rubric, ...project }) => ({ ...project, rubric })),
    exam: finals.exam ? {
      title: finals.exam.title,
      instructions: finals.exam.instructions,
      passingScore: finals.exam.passingScore,
      timeLimitMinutes: finals.exam.timeLimitMinutes,
      questionCount: finals.exam.questions.length,
      sections: [...new Set(finals.exam.questions.map((question) => question.section))],
    } : null,
  };
}
