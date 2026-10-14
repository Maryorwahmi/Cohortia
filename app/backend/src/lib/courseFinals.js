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
  const labels = ['Project Description', 'Requirements', 'Core Requirements', 'Project Requirements', 'Stretch Goals', 'Evaluation Criteria', 'Estimated Time'];
  const stop = labels.filter((candidate) => candidate !== label).join('|');
  const match = String(text).match(new RegExp(`(?:\\*\\*${label}:?\\*\\*:?|####\\s+${label})\\s*([\\s\\S]*?)(?=\\n(?:\\*\\*(?:${stop}):?\\*\\*:?|####\\s+(?:${stop}))|\\n###|\\n##\\s+|$)`, 'i'));
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
  const items = [];
  for (const rawLine of String(text || '').split(/\r?\n/)) {
    let line = rawLine.trim();
    line = line.replace(/^\*\s+\*\*Evaluation Criteria(?:\s+\(\d+%\))?:?\*\*\s*/i, '').trim();
    if (!line || /^\*\*?(?:Estimated Time|Stretch Goals|Requirements)/i.test(line)) continue;
    const bold = line.match(/^(?:\*\s+)?\*\*([^*]+?)(?:\s+\((\d+)%\))?:?\*\*\s*(.*)$/);
    if (bold) {
      items.push({criterion: clean(bold[1]), weight: bold[2] ? Number(bold[2]) : null, description: clean(bold[3])});
      continue;
    }
    const plain = line.match(/^\*\s+(?:\*\s+)?(.+?)\s*$/);
    if (plain && !/^\*\*/.test(plain[1])) items.push({criterion: clean(plain[1]), weight: null, description: ''});
  }
  if (!items.length) return items;
  const hasCompleteWeights = items.every((item) => Number.isInteger(item.weight))
    && items.reduce((total, item) => total + item.weight, 0) === 100;
  if (hasCompleteWeights) return items;
  const base = Math.floor(100 / items.length);
  const remainder = 100 - (base * items.length);
  return items.map((item, index) => ({...item, weight: base + (index < remainder ? 1 : 0)}));
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
  const answerKeyHeading = /^#{2,4}\s+Answer Key\b[^\r\n]*\r?\n/im.exec(examText);
  const questionText = answerKeyHeading?.index === undefined
    ? examText
    : examText.slice(0, answerKeyHeading.index).trim();
  const answerKeyText = answerKeyHeading?.index === undefined
    ? ''
    : examText.slice(answerKeyHeading.index + answerKeyHeading[0].length);
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
      requirements: listItems(labeledBlock(body, 'Requirements') || labeledBlock(body, 'Core Requirements') || labeledBlock(body, 'Project Requirements')),
      stretchGoals: listItems(labeledBlock(body, 'Stretch Goals')),
      rubric: rubricItems(labeledBlock(body, 'Evaluation Criteria')),
      estimatedTime: clean(labeledBlock(body, 'Estimated Time')),
    });
  }

  const sections = [];
  const sectionMatches = [...questionText.matchAll(/^(?:###\s+(?:Section|Part)\s+(.+)|\*\*(?:Section|Part)\s+([^*]+)\*\*)\s*$/gim)];
  for (let index = 0; index < sectionMatches.length; index += 1) {
    const match = sectionMatches[index];
    const sectionTitle = clean(match[1] || match[2]);
    const start = match.index + match[0].length;
    const end = sectionMatches[index + 1]?.index ?? questionText.length;
    sections.push({ title: sectionTitle, text: questionText.slice(start, end).trim() });
  }
  if (!sections.length && questionText) sections.push({ title: 'Final Examination', text: questionText });

  const questions = [];
  for (const section of sections) {
    const lines = section.text.split(/\r?\n/);
    const questionStarts = [];
    for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
      const headingMatch = lines[lineIndex].match(/^\s*#{2,4}\s+(?:\d+(?:\.\d+)?[.)]\s*)?Question(?:\s+\d+(?:\.\d+)?)?\s*:\s*(.*)$/i);
      if (headingMatch) {
        questionStarts.push({ lineIndex, trailingText: headingMatch[1] || '' });
        continue;
      }

      const match = lines[lineIndex].match(/^\s*(?:(\d+)\.\s*)?\*\*(?:(\d+)[.)]\s*)?([^*\r\n]+)\*\*:?\s*(.*)$/);
      if (!match) continue;
      const label = match[3].trim();
      const isTopLevel = !/^\s/.test(lines[lineIndex]);
      const isQuestionLabel = /^Question\b/i.test(label);
      const isNumberedPromptLabel = isTopLevel
        && /^(?:Concept Definition|Scenario Analysis|Code Tracing|Configuration Writing|Design Problem|Command Tracing|Comparison|Architecture Problem)\b/i.test(label)
        && !/\(\s*\d+\s+questions?\s*\)/i.test(label)
        && (Boolean(match[2]) || Boolean(match[1]));
      if (!isTopLevel || (!isQuestionLabel && !isNumberedPromptLabel)) continue;

      if (isQuestionLabel && /^Question\s*:?[\s]*$/i.test(label) && lines.slice(Math.max(0, lineIndex - 3), lineIndex)
        .some((candidate) => /^\s*(?:#{2,4}\s+(?:\d+(?:\.\d+)?[.)]\s*)?Question\b|\*\*Question\s+\d+(?:\.\d+)?\s*[:.)])/i.test(candidate))) continue;

      questionStarts.push({ lineIndex, trailingText: match[4] });
    }

    for (let index = 0; index < questionStarts.length; index += 1) {
      const start = questionStarts[index];
      let endLineIndex = questionStarts[index + 1]?.lineIndex ?? lines.length;
      let fenced = false;
      let separatorIndex = -1;
      for (let offset = 0; offset < endLineIndex - start.lineIndex - 1; offset += 1) {
        const line = lines[start.lineIndex + 1 + offset];
        if (/^\s*```/.test(line)) fenced = !fenced;
        if (!fenced && /^---\s*$/.test(line)) {
          separatorIndex = offset;
          break;
        }
      }
      if (separatorIndex >= 0) endLineIndex = start.lineIndex + 1 + separatorIndex;
      const block = [start.trailingText, ...lines.slice(start.lineIndex + 1, endLineIndex)].join('\n').trim();
      const blockLines = block.split(/\r?\n/);
      const answerLineIndex = blockLines.findIndex((line) =>
        /^[ \t]*(?:[*-][ \t]*)?\*\*(?:Answer(?:[ \t]+\d+(?:\.\d+)?)?(?:[ \t]+Key)?(?:[ \t]*[&/][ \t]*Explanation)?(?:[ \t]*\([^*\r\n]+\))?|Correct[ \t]+Answer(?:[ \t]*[&/][ \t]*Explanation)?)\s*:?\*\*[ \t]*(.*)$/i.test(line));
      const answerLine = answerLineIndex >= 0
        ? blockLines[answerLineIndex].match(/^[ \t]*(?:[*-][ \t]*)?\*\*(?:Answer(?:[ \t]+\d+(?:\.\d+)?)?(?:[ \t]+Key)?(?:[ \t]*[&/][ \t]*Explanation)?(?:[ \t]*\([^*\r\n]+\))?|Correct[ \t]+Answer(?:[ \t]*[&/][ \t]*Explanation)?)\s*:?\*\*[ \t]*(.*)$/i)
        : null;
      const prompt = answerLineIndex >= 0
        ? blockLines.slice(0, answerLineIndex).join('\n').trim()
        : block;
      const answer = answerLine
        ? [answerLine[1], ...blockLines.slice(answerLineIndex + 1)].join('\n').trim()
        : '';
      questions.push({
        questionNumber: questions.length + 1,
        section: section.title,
        type: inferQuestionType(prompt),
        prompt,
        answer,
        points: 1,
      });
    }
  }

  if (answerKeyText) {
    const answerKeyItems = [];
    const lines = answerKeyText.split(/\r?\n/);
    for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
      if (/^(?:[-*]\s*)?(?:\*\*\d+[.)]\s+[^*\r\n]+\*\*|\d+[.)]\s+\*\*[^*\r\n]+\*\*)/.test(lines[lineIndex])) {
        answerKeyItems.push(lineIndex);
      }
    }
    for (let index = 0; index < answerKeyItems.length; index += 1) {
      const startLineIndex = answerKeyItems[index];
      const endLineIndex = answerKeyItems[index + 1] ?? lines.length;
      const blockLines = lines.slice(startLineIndex + 1, endLineIndex);
      const answerLineIndex = blockLines.findIndex((line) =>
        /^[ \t]*(?:[*-][ \t]*)?\*\*(?:Answer(?:[ \t]+\d+(?:\.\d+)?)?(?:[ \t]+Key)?(?:[ \t]*[&/][ \t]*Explanation)?(?:[ \t]*\([^*\r\n]+\))?|Correct[ \t]+Answer(?:[ \t]*[&/][ \t]*Explanation)?)\s*:?\*\*[ \t]*(.*)$/i.test(line));
      if (answerLineIndex < 0) continue;
      const answerLine = blockLines[answerLineIndex].match(/^[ \t]*(?:[*-][ \t]*)?\*\*(?:Answer(?:[ \t]+\d+(?:\.\d+)?)?(?:[ \t]+Key)?(?:[ \t]*[&/][ \t]*Explanation)?(?:[ \t]*\([^*\r\n]+\))?|Correct[ \t]+Answer(?:[ \t]*[&/][ \t]*Explanation)?)\s*:?\*\*[ \t]*(.*)$/i);
      if (!answerLine) continue;
      const answer = [answerLine[1], ...blockLines.slice(answerLineIndex + 1)].join('\n').trim();
      if (questions[index] && !questions[index].answer) questions[index].answer = answer;
    }
  }

  return {
    courseId: meta.course_id || null,
    courseTitle: meta.course_title || null,
    sourcePath,
    capstone: projects,
    exam: examText ? {
      title: 'Final Examination',
      instructions: (() => {
        const contentStart = questionText.search(/^(?:###\s+(?:Section|Part|Questions?)\b|\*\*(?:Section|Part)\b|(?:\d+\.\s*)?\*\*Question\b|(?:\d+\.\s*)?\*\*(?:\d+[.)]\s*)?[A-Z][^*\r\n]*:\*\*)/im);
        return clean(contentStart >= 0 ? questionText.slice(0, contentStart) : questionText);
      })(),
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
