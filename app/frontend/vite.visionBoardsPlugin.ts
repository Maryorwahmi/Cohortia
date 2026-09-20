import fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'node:url';
import type { Plugin, PreviewServer, ViteDevServer } from 'vite';

const frontendRoot = fileURLToPath(new URL('.', import.meta.url));

/**
 * Serve files from the repo-level generated/vision-boards directory at /vision-boards
 * during development. This lets the frontend test vision boards without copying images
 * into the public folder.
 */
export default function visionBoardsPlugin(): Plugin {
  const handleRequest = async (req: any, res: any, next: any) => {
    const url = req.url || '';
    if (!url.startsWith('/vision-boards/') && !url.startsWith('/learning-boards/') && !url.startsWith('/learning-boards-html/')) {
      return next();
    }

    const isVision = url.startsWith('/vision-boards/');
    const isLearning = url.startsWith('/learning-boards/');
    const isLearningHtml = url.startsWith('/learning-boards-html/');

    const prefix = isVision ? '/vision-boards/' : isLearning ? '/learning-boards/' : '/learning-boards-html/';
    const relativePath = decodeURIComponent(url.replace(new RegExp(`^${prefix}`), ''));

    const roots: string[] = [];
    if (isVision) roots.push(path.resolve(frontendRoot, '..', '..', 'generated', 'vision-boards'));
    else if (isLearning) roots.push(path.resolve(frontendRoot, '..', '..', 'generated', 'learning-boards'));
    else if (isLearningHtml) {
      roots.push(path.resolve(frontendRoot, '..', '..', 'generated', 'learning-boards-html'));
      roots.push(path.resolve(frontendRoot, 'public', 'learning-boards-html'));
    }

    let served = false;
    for (const root of roots) {
      const target = path.join(root, relativePath);
      if (!target.startsWith(root)) {
        res.statusCode = 403;
        res.end('Forbidden');
        return;
      }

      try {
        const stat = await fs.stat(target);
        if (!stat.isFile()) continue;

        const ext = path.extname(target).toLowerCase();
        const contentTypeMap: Record<string, string> = {
          '.png': 'image/png',
          '.jpg': 'image/jpeg',
          '.jpeg': 'image/jpeg',
          '.json': 'application/json',
          '.svg': 'image/svg+xml',
          '.html': 'text/html; charset=utf-8',
          '.css': 'text/css; charset=utf-8',
          '.js': 'application/javascript; charset=utf-8',
          '.map': 'application/json',
        };

        res.setHeader('Content-Type', contentTypeMap[ext] || 'application/octet-stream');
        const content = await fs.readFile(target);
        res.end(content);
        served = true;
        break;
      } catch {
        continue;
      }
    }

    if (!served && isLearningHtml && relativePath.endsWith('course-manifest.json')) {
      try {
        const parts = decodeURIComponent(url).replace(/^\/learning-boards-html\//, '').split('/');
        const course = parts[0] || '';
        const scanRoots = [
          path.resolve(frontendRoot, '..', '..', 'generated', 'learning-boards-html', course),
          path.resolve(frontendRoot, 'public', 'learning-boards-html', course),
        ];

        const modulesMap: Record<string, { module: number; chapters: { chapter: number; manifest: string }[] }> = {};

        for (const r of scanRoots) {
          try {
            const entries = await fs.readdir(r, { withFileTypes: true });
            for (const e of entries) {
              if (!e.isDirectory()) continue;
              const mMatch = e.name.match(/^module-(\d{2}|\d+)$/);
              if (!mMatch) continue;
              const modIndex = parseInt(mMatch[1], 10);
              const modKey = String(modIndex).padStart(2, '0');
              const modPath = path.join(r, e.name);
              try {
                const chapterEntries = await fs.readdir(modPath, { withFileTypes: true });
                for (const chEntry of chapterEntries) {
                  if (!chEntry.isDirectory()) continue;
                  const cMatch = chEntry.name.match(/^chapter-(\d{2}|\d+)$/);
                  if (!cMatch) continue;
                  const chIndex = parseInt(cMatch[1], 10);
                  const publicManifestPath = `/learning-boards-html/${course}/module-${String(modIndex).padStart(2, '0')}/chapter-${String(chIndex).padStart(2, '0')}/manifest.json`;
                  if (!modulesMap[modKey]) modulesMap[modKey] = { module: modIndex, chapters: [] };
                  if (!modulesMap[modKey].chapters.some((c) => c.chapter === chIndex)) {
                    modulesMap[modKey].chapters.push({ chapter: chIndex, manifest: publicManifestPath });
                  }
                }
              } catch {
                continue;
              }
            }
          } catch {
            continue;
          }
        }

        const modules = Object.values(modulesMap)
          .sort((a, b) => a.module - b.module)
          .map((m) => ({
            module: m.module,
            chapters: m.chapters.sort((x, y) => x.chapter - y.chapter).map((c) => ({ chapter: c.chapter, manifest: c.manifest })),
          }));

        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify({ course, courseId: course, generatedAt: new Date().toISOString(), modules }, null, 2));
        served = true;
      } catch (err) {
        res.statusCode = 500;
        res.end(`Internal Server Error: ${(err as Error).message}`);
        return;
      }
    }

    if (!served) return next();
  };

  return {
    name: 'serve-vision-boards',
    configureServer(server: ViteDevServer) {
      server.middlewares.use(handleRequest);
    },
    configurePreviewServer(previewServer: PreviewServer) {
      previewServer.middlewares.use(handleRequest);
    },
  };
}
