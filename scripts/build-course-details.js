import fs from 'node:fs/promises';
import path from 'node:path';

const docsRoot = path.resolve(process.cwd(), '..', '..', 'docs');
const outputPath = path.resolve(process.cwd(), 'src', 'data', 'course-details.json');

function cleanText(value) {
  return String(value || '')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/__([^_]+)__/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function listItems(value) {
  return String(value || '').split(/\r?\n/)
    .map((line) => cleanText(line.replace(/^\s*(?:[*-]|\d+[.)])\s+/, '')))
    .filter(Boolean);
}

function extractCourseDetails(markdown) {
  const overviewBlock = markdown.match(/## Course Overview\s*\n([\s\S]*?)(?=\n##\s|$)/i)?.[1] || '';
  const outcomesBlock = overviewBlock.match(/Upon (?:successful )?completion of this [^,\n]+, you will be able to:\s*\n([\s\S]*?)(?=\n\s*\n|$)/i)?.[1] || '';
  const syllabusBlock = markdown.match(/## Syllabus Structure\s*\n([\s\S]*?)(?=\n---|\n##\s|$)/i)?.[1] || '';
  const syllabus = syllabusBlock.split(/\r?\n/)
    .filter((line) => /^\|\s*\d+\s*\|/.test(line))
    .map((line) => {
      const cells = line.split('|').map((cell) => cell.trim());
      return {module: cleanText(cells[1]), theme: cleanText(cells[2]), chapters: cleanText(cells[3])};
    });
  const keyConcepts = [...markdown.matchAll(/#### Key concepts\s*\n([\s\S]*?)(?=\n####\s|\n###\s|\n##\s|$)/gi)]
    .flatMap((match) => listItems(match[1]))
    .slice(0, 12);
  const skills = cleanText(markdown.match(/^skills:\s*(.+)$/im)?.[1] || '')
    .split(/,\s*/)
    .map(cleanText)
    .filter(Boolean);
  return {
    overview: overviewBlock.split(/\n\s*\n/).map(cleanText).find(Boolean) || '',
    outcomes: listItems(outcomesBlock),
    syllabus,
    keyConcepts,
    skills,
  };
}

async function collectMarkdownFiles(directory) {
  const entries = await fs.readdir(directory, {withFileTypes: true});
  const files = [];
  for (const entry of entries) {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await collectMarkdownFiles(filePath));
    else if (entry.isFile() && entry.name.endsWith('.md')) files.push(filePath);
  }
  return files;
}

const details = {};
for (const filePath of await collectMarkdownFiles(docsRoot)) {
  const markdown = await fs.readFile(filePath, 'utf8');
  const courseId = markdown.match(/^Course ID:\s*(\S+)/im)?.[1];
  if (courseId) details[courseId] = extractCourseDetails(markdown);
}

await fs.mkdir(path.dirname(outputPath), {recursive: true});
await fs.writeFile(outputPath, `${JSON.stringify(details)}\n`);
console.log(`Wrote ${Object.keys(details).length} course details to ${outputPath}`);