import { createHash } from 'node:crypto';

export function sourceKeyFor({ courseId, module, chapter }) {
  return `${courseId}/${module}/${chapter}`;
}

export function sourceHashFor({ courseId, module, chapter, sourcePath, category, sourceContent }) {
  if (!sourceContent) return null;

  const canonicalSource = JSON.stringify({
    courseId,
    module: Number(module),
    chapter: Number(chapter),
    sourcePath: sourcePath || null,
    category: category || null,
    sourceContent,
  });

  return createHash('sha256').update(canonicalSource, 'utf8').digest('hex');
}

export function practicalIdFor({ courseId, module, chapter }) {
  return `practical-${courseId}-m${module}-c${chapter}`;
}

export function practicalVersionIdFor(practicalId, version) {
  return `${practicalId}-v${version}`;
}