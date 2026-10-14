import 'dotenv/config';
import fs from 'node:fs/promises';
import path from 'node:path';

const docsRoot = path.resolve(import.meta.dirname, '../../docs/computer-science');

async function findMarkdown(directory) {
  const files = [];
  for (const entry of await fs.readdir(directory, {withFileTypes: true})) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await findMarkdown(target));
    else if (entry.isFile() && entry.name.endsWith('.md')) files.push(target);
  }
  return files;
}

function balancedWeights(count) {
  const base = Math.floor(100 / count);
  const remainder = 100 - (base * count);
  return Array.from({length: count}, (_, index) => base + (index < remainder ? 1 : 0));
}

function normalizeOption(optionText) {
  const evaluationStart = optionText.search(/^(?:####\s+Evaluation Criteria|\*\*Evaluation Criteria:\*\*)\s*$/im);
  if (evaluationStart < 0) return optionText;
  const before = optionText.slice(0, evaluationStart);
  const evaluationText = optionText.slice(evaluationStart);
  const evaluationEnd = evaluationText.search(/\n(?:####\s+(?:Estimated Time|AI generation note)|###\s+Project Option|##\s+)/i);
  const block = evaluationEnd >= 0 ? evaluationText.slice(0, evaluationEnd) : evaluationText;
  const criteria = [...block.matchAll(/^(\s*)\*\s+\*\*([^*\r\n]+?)(?:\s+\((\d+)%\))?:\*\*\s*(.*)$/gim)];
  if (!criteria.length) return optionText;
  const existingWeights = criteria.map((match) => Number(match[3] || 0));
  if (criteria.every((match) => match[3]) && existingWeights.reduce((sum, weight) => sum + weight, 0) === 100) return optionText;
  const weights = balancedWeights(criteria.length);
  let cursor = 0;
  const normalizedBlock = block.replace(/^(\s*)\*\s+\*\*([^*\r\n]+?)(?:\s+\((\d+)%\))?:\*\*\s*(.*)$/gim, (_, indent, criterion, _weight, description) => {
    const weight = weights[cursor++];
    return `${indent}*   **${criterion.trim()} (${weight}%):** ${description}`;
  });
  return before + normalizedBlock + (evaluationEnd >= 0 ? evaluationText.slice(evaluationEnd) : '');
}

let changed = 0;
for (const file of await findMarkdown(docsRoot)) {
  const source = await fs.readFile(file, 'utf8');
  const capstoneStart = source.search(/^##\s+Final Capstone Project\s*$/im);
  if (capstoneStart < 0) continue;
  const afterCapstone = source.slice(capstoneStart);
  const capstoneEnd = afterCapstone.search(/^##\s+Final Examination\s*$/im);
  const capstone = capstoneEnd >= 0 ? afterCapstone.slice(0, capstoneEnd) : afterCapstone;
  const optionHeading = /(?=^###\s+Project Option\s+\d+:)/im;
  const normalized = capstone.split(optionHeading).map((part) => normalizeOption(part)).join('');
  if (normalized === capstone) continue;
  const updated = source.slice(0, capstoneStart) + normalized + (capstoneEnd >= 0 ? afterCapstone.slice(capstoneEnd) : '');
  await fs.writeFile(file, updated);
  changed += 1;
  console.log(path.relative(docsRoot, file));
}
console.log(`Normalized rubrics in ${changed} course file(s).`);
