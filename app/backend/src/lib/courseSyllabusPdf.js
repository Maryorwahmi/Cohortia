const PAGE_WIDTH = 612;
const PAGE_HEIGHT = 792;
const LEFT = 54;
const RIGHT = 54;
const CONTENT_WIDTH = PAGE_WIDTH - LEFT - RIGHT;
const CONTENT_BOTTOM = 58;
const COLORS = {
  ink: [0.05, 0.09, 0.17],
  body: [0.2, 0.25, 0.34],
  muted: [0.42, 0.47, 0.56],
  accent: [1, 0.29, 0.24],
  line: [0.87, 0.89, 0.92],
};

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

function wrapText(value, fontSize, width = CONTENT_WIDTH) {
  const maxLength = Math.max(18, Math.floor(width / (fontSize * 0.54)));
  const words = printable(value).split(' ').filter(Boolean);
  const lines = [];
  let line = '';
  for (const word of words) {
    if (word.length > maxLength) {
      if (line) lines.push(line);
      line = '';
      for (let offset = 0; offset < word.length; offset += maxLength) {
        const part = word.slice(offset, offset + maxLength);
        if (part.length === maxLength) lines.push(part);
        else line = part;
      }
      continue;
    }
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

function rgb(color) {
  return color.map((channel) => channel.toFixed(3)).join(' ');
}

function buildPages(data) {
  const pages = [];
  let page;
  let cursor;

  const newPage = () => {
    page = [];
    pages.push(page);
    cursor = 714;
  };

  const ensureSpace = (height) => {
    if (!page || cursor - height < CONTENT_BOTTOM) newPage();
  };

  const addText = (value, {
    size = 9.5,
    leading = 14,
    font = 'F1',
    color = COLORS.body,
    indent = 0,
    gapAfter = 0,
  } = {}) => {
    const lines = wrapText(value, size, CONTENT_WIDTH - indent);
    ensureSpace(lines.length * leading + gapAfter);
    for (const line of lines) {
      page.push(`BT /${font} ${size} Tf ${rgb(color)} rg ${LEFT + indent} ${cursor} Td (${escapePdfText(line)}) Tj ET`);
      cursor -= leading;
      if (cursor < CONTENT_BOTTOM && line !== lines[lines.length - 1]) newPage();
    }
    cursor -= gapAfter;
  };

  const addSection = (title) => {
    ensureSpace(34);
    cursor -= 8;
    addText(title.toUpperCase(), {
      size: 8.5,
      leading: 12,
      font: 'F2',
      color: COLORS.accent,
      gapAfter: 4,
    });
  };

  const addParagraph = (value) => {
    if (value) addText(value, {size: 9.5, leading: 14, gapAfter: 3});
  };

  newPage();
  addText('COHORTIA  /  PERSONAL LEARNING PLAN', {
    size: 9,
    leading: 14,
    font: 'F2',
    color: COLORS.accent,
    gapAfter: 18,
  });
  addText('Your course syllabus', {
    size: 26,
    leading: 32,
    font: 'F2',
    color: COLORS.ink,
    gapAfter: 8,
  });
  addText(`Prepared for ${data.userName || 'Cohortia learner'}`, {
    size: 12,
    leading: 18,
    color: COLORS.body,
    gapAfter: 4,
  });
  addText(`Career roadmap: ${data.roadmapTitle || 'Career roadmap'}`, {
    size: 10,
    leading: 15,
    color: COLORS.muted,
    gapAfter: 3,
  });
  addText(`Prepared ${new Date().toISOString().slice(0, 10)}`, {
    size: 9,
    leading: 14,
    color: COLORS.muted,
    gapAfter: 20,
  });

  const courses = Array.isArray(data.courses) ? data.courses : [];
  addSection('Included courses');
  courses.forEach(({course}, index) => {
    addText(`${String(index + 1).padStart(2, '0')}  ${course?.title || 'Untitled course'}`, {
      size: 10,
      leading: 15,
      font: 'F2',
      color: COLORS.ink,
      indent: 4,
      gapAfter: 3,
    });
  });

  courses.forEach((item, index) => {
    const course = item?.course || {};
    const details = item?.details || {};
    const modules = Array.isArray(item?.modules) ? item.modules : [];
    ensureSpace(64);
    cursor -= 15;
    addText(`COURSE ${String(index + 1).padStart(2, '0')}`, {
      size: 8.5,
      leading: 12,
      font: 'F2',
      color: COLORS.accent,
      gapAfter: 4,
    });
    addText(course.title || 'Untitled course', {
      size: 18,
      leading: 23,
      font: 'F2',
      color: COLORS.ink,
      gapAfter: 10,
    });

    const metadata = [
      course.provider && `Provider: ${course.provider}`,
      course.level && `Level: ${course.level}`,
      course.duration && `Duration: ${course.duration}`,
      course.certification && `Certificate: ${course.certification}`,
    ].filter(Boolean);
    if (metadata.length) {
      addText(metadata.join('   |   '), {
        size: 8.5,
        leading: 13,
        color: COLORS.muted,
        gapAfter: 6,
      });
    }

    addParagraph(course.description && `Course description: ${course.description}`);
    addParagraph(details.overview && `Course overview: ${details.overview}`);

    if (Array.isArray(details.outcomes) && details.outcomes.length) {
      addSection('Learning outcomes');
      details.outcomes.forEach((outcome) => addText(`-  ${outcome}`, {size: 9.5, leading: 14, indent: 8}));
    }
    if (Array.isArray(details.skills) && details.skills.length) {
      addSection('Skills covered');
      addParagraph(details.skills.join(', '));
    }
    if (Array.isArray(details.keyConcepts) && details.keyConcepts.length) {
      addSection('Key concepts');
      details.keyConcepts.forEach((concept) => addText(`-  ${concept}`, {size: 9.5, leading: 14, indent: 8}));
    }
    if (Array.isArray(details.syllabus) && details.syllabus.length) {
      addSection('Syllabus overview');
      details.syllabus.forEach((module) => {
        addText(module.module || 'Module', {size: 9.5, leading: 14, font: 'F2', color: COLORS.ink, indent: 4});
        if (module.theme) addText(module.theme, {size: 9, leading: 13, indent: 14});
        if (module.chapters) addText(`Chapters: ${module.chapters}`, {size: 9, leading: 13, color: COLORS.muted, indent: 14, gapAfter: 3});
      });
    }
    if (modules.length) {
      addSection('Course modules and chapters');
      modules.forEach((module, moduleIndex) => {
        addText(`Module ${moduleIndex + 1}: ${module.title || 'Untitled module'}`, {
          size: 10,
          leading: 15,
          font: 'F2',
          color: COLORS.ink,
          gapAfter: 2,
        });
        if (module.description) addText(module.description, {size: 9, leading: 13, color: COLORS.muted, indent: 8, gapAfter: 3});
        (Array.isArray(module.chapters) ? module.chapters : []).forEach((chapter, chapterIndex) => {
          const duration = chapter.duration ? ` (${chapter.duration})` : '';
          addText(`${moduleIndex + 1}.${chapterIndex + 1}  ${chapter.title || 'Untitled chapter'}${duration}`, {
            size: 9.5,
            leading: 14,
            font: 'F2',
            color: COLORS.body,
            indent: 10,
            gapAfter: 1,
          });
          if (chapter.description) addText(chapter.description, {size: 9, leading: 13, indent: 22, color: COLORS.muted, gapAfter: 3});
        });
      });
    } else {
      addSection('Course modules and chapters');
      addText('Module and chapter details are not currently available in the learning curriculum.', {
        size: 9.5,
        leading: 14,
        color: COLORS.muted,
      });
    }
  });

  if (!courses.length) addText('No course details are available for this roadmap.', {size: 10, leading: 15});
  return pages;
}

export function createCourseSyllabusPdf(data) {
  const pages = buildPages(data);
  const objects = [];
  const pageObjectIds = pages.map((_, index) => 5 + index * 2);
  objects[1] = '<< /Type /Catalog /Pages 2 0 R >>';
  objects[2] = `<< /Type /Pages /Kids [${pageObjectIds.map((id) => `${id} 0 R`).join(' ')}] /Count ${pages.length} >>`;
  objects[3] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>';
  objects[4] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>';

  pages.forEach((bodyCommands, index) => {
    const pageId = pageObjectIds[index];
    const contentId = pageId + 1;
    const header = [
      `q ${rgb(COLORS.accent)} rg 0 780 ${PAGE_WIDTH} 12 re f Q`,
      `BT /F2 8 Tf ${rgb(COLORS.muted)} rg ${LEFT} 755 Td (COHORTIA  /  PERSONAL COURSE SYLLABUS) Tj ET`,
      `q ${rgb(COLORS.line)} RG 0.6 w ${LEFT} 744 m ${PAGE_WIDTH - RIGHT} 744 l S Q`,
      `q ${rgb(COLORS.line)} RG 0.6 w ${LEFT} 43 m ${PAGE_WIDTH - RIGHT} 43 l S Q`,
      `BT /F1 8 Tf ${rgb(COLORS.muted)} rg ${LEFT} 28 Td (${escapePdfText(data.roadmapTitle || 'Career roadmap')}) Tj ET`,
      `BT /F1 8 Tf ${rgb(COLORS.muted)} rg ${PAGE_WIDTH - RIGHT - 70} 28 Td (Page ${index + 1} of ${pages.length}) Tj ET`,
    ];
    const stream = [...header, ...bodyCommands].join('\n');
    objects[pageId] = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PAGE_WIDTH} ${PAGE_HEIGHT}] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentId} 0 R >>`;
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
