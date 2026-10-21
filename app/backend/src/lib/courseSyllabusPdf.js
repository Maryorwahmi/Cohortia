function printable(value) {
  return String(value || '')
    .normalize('NFKD')
    .replace(/[^\x20-\x7E]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function escapePdfText(value) {
  return printable(value).replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

function wrapText(value, maxLength = 92) {
  const words = printable(value).split(' ').filter(Boolean);
  const lines = [];
  let line = '';
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length > maxLength && line) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  return lines.length ? lines : [''];
}

function buildSyllabusLines(data) {
  const lines = [
    'COHORTIA - PERSONAL COURSE SYLLABUS',
    `Prepared for: ${data.userName}`,
    `Roadmap: ${data.roadmapTitle}`,
    `Generated: ${new Date().toISOString().slice(0, 10)}`,
    '',
  ];

  for (const [index, item] of data.courses.entries()) {
    const {course, details, modules} = item;
    lines.push(`${index + 1}. ${course.title}`);
    if (course.provider) lines.push(`Provider: ${course.provider}`);
    if (course.level) lines.push(`Level: ${course.level}`);
    if (course.duration) lines.push(`Duration: ${course.duration}`);
    if (course.certification) lines.push(`Certificate: ${course.certification}`);
    if (course.description) {
      lines.push('Course description:');
      lines.push(...wrapText(course.description));
    }
    if (details.overview) {
      lines.push('Course overview:');
      lines.push(...wrapText(details.overview));
    }
    if (details.outcomes?.length) {
      lines.push('Learning outcomes:');
      for (const outcome of details.outcomes) lines.push(...wrapText(`- ${outcome}`));
    }
    if (details.skills?.length) lines.push(...wrapText(`Skills: ${details.skills.join(', ')}`));
    if (details.keyConcepts?.length) {
      lines.push('Key concepts:');
      for (const concept of details.keyConcepts) lines.push(...wrapText(`- ${concept}`));
    }
    if (details.syllabus?.length) {
      lines.push('Career-page syllabus structure:');
      for (const syllabusModule of details.syllabus) {
        lines.push(...wrapText(`${syllabusModule.module}${syllabusModule.theme ? ` - ${syllabusModule.theme}` : ''}`));
        if (syllabusModule.chapters) lines.push(...wrapText(`Chapters: ${syllabusModule.chapters}`));
      }
    }
    if (modules.length) {
      lines.push('Course modules and chapters:');
      for (const [moduleIndex, module] of modules.entries()) {
        lines.push(...wrapText(`Module ${moduleIndex + 1}: ${module.title}`));
        if (module.description) lines.push(...wrapText(module.description));
        for (const [chapterIndex, chapter] of module.chapters.entries()) {
          lines.push(...wrapText(`  ${moduleIndex + 1}.${chapterIndex + 1} ${chapter.title}${chapter.duration ? ` (${chapter.duration})` : ''}`));
          if (chapter.description) lines.push(...wrapText(`     ${chapter.description}`));
        }
      }
    } else {
      lines.push('Course modules and chapters: Not currently available in the learning curriculum.');
    }
    lines.push('', '');
  }

  return lines;
}

export function createCourseSyllabusPdf(data) {
  const sourceLines = buildSyllabusLines(data);
  const linesPerPage = 46;
  const pages = [];
  for (let index = 0; index < sourceLines.length; index += linesPerPage) {
    pages.push(sourceLines.slice(index, index + linesPerPage));
  }
  if (!pages.length) pages.push(['No course details are available.']);

  const objects = [];
  const pageObjectIds = pages.map((_, index) => 4 + index * 2);
  objects[1] = '<< /Type /Catalog /Pages 2 0 R >>';
  objects[2] = `<< /Type /Pages /Kids [${pageObjectIds.map((id) => `${id} 0 R`).join(' ')}] /Count ${pages.length} >>`;
  objects[3] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>';

  pages.forEach((pageLines, index) => {
    const pageId = pageObjectIds[index];
    const contentId = pageId + 1;
    const textCommands = pageLines.map((line, lineIndex) => {
      const fontSize = lineIndex === 0 && index === 0 ? 16 : 9;
      const y = 755 - lineIndex * 15;
      return `BT /F1 ${fontSize} Tf 48 ${y} Td (${escapePdfText(line)}) Tj ET`;
    });
    const stream = textCommands.join('\n');
    objects[pageId] = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 3 0 R >> >> /Contents ${contentId} 0 R >>`;
    objects[contentId] = `<< /Length ${Buffer.byteLength(stream, 'ascii')} >>\nstream\n${stream}\nendstream`;
  });

  let document = '%PDF-1.4\n';
  const objectOffsets = [0];
  for (let id = 1; id < objects.length; id += 1) {
    objectOffsets[id] = Buffer.byteLength(document, 'ascii');
    document += `${id} 0 obj\n${objects[id]}\nendobj\n`;
  }
  const crossReferenceOffset = Buffer.byteLength(document, 'ascii');
  document += `xref\n0 ${objects.length}\n0000000000 65535 f \n`;
  for (let id = 1; id < objects.length; id += 1) {
    document += `${String(objectOffsets[id]).padStart(10, '0')} 00000 n \n`;
  }
  document += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${crossReferenceOffset}\n%%EOF`;
  return Buffer.from(document, 'ascii');
}
