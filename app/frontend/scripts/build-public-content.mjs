import {mkdir, readFile, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const frontendRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourcePath = path.resolve(frontendRoot, '..', 'backend', 'src', 'data', 'course-details.json');
const outputRoot = path.resolve(frontendRoot, 'public', 'content', 'course-details');

const source = JSON.parse(await readFile(sourcePath, 'utf8'));
await mkdir(outputRoot, {recursive: true});

await Promise.all(Object.entries(source).map(async ([courseId, details]) => {
  const safeCourseId = encodeURIComponent(courseId);
  await writeFile(path.join(outputRoot, `${safeCourseId}.json`), `${JSON.stringify(details)}\n`, 'utf8');
}));

await writeFile(
  path.resolve(frontendRoot, 'public', 'content', 'navigation.json'),
  `${JSON.stringify({version: 1, source: 'frontend-static', cache: 'immutable'})}\n`,
  'utf8',
);

console.log(`[public-content] generated ${Object.keys(source).length} course detail files`);
