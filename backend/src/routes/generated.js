import { Hono } from 'hono';

const generated = new Hono();

async function resolveProjectRoot() {
  const path = await import('path');
  const routeDir = import.meta.dirname || path.resolve(process.cwd(), 'src', 'routes');
  return path.resolve(routeDir, '..', '..', '..', '..');
}

async function findLearningBoardTestDir(projectRoot) {
  const path = await import('path');
  const fs = await import('fs/promises');
  const candidates = [
    path.resolve(projectRoot, 'generated', 'learning-board-test'),
    path.resolve(process.cwd(), '..', '..', 'generated', 'learning-board-test'),
  ];
  for (const candidate of candidates) {
    try {
      await fs.access(candidate);
      return candidate;
    } catch {
      // try next candidate
    }
  }
  return null;
}

generated.get('/latest', async (c) => {
  try {
    const path = await import('path');
    const fs = await import('fs/promises');
    const projectRoot = await resolveProjectRoot();
    const dir = await findLearningBoardTestDir(projectRoot);

    if (!dir) {
      return c.json({ success: false, error: 'No generated files found' }, 404);
    }

    const files = await fs.readdir(dir).catch(() => []);
    const jsonFiles = files.filter((f) => f.endsWith('.json'));
    if (jsonFiles.length === 0) return c.json({ success: false, error: 'No generated files found' }, 404);

    let newest = null;
    let newestStat = 0;
    for (const fname of jsonFiles) {
      const full = path.join(dir, fname);
      try {
        const st = await fs.stat(full);
        const mtime = st.mtimeMs || st.ctimeMs || 0;
        if (mtime > newestStat) {
          newestStat = mtime;
          newest = full;
        }
      } catch (e) {
        // ignore
      }
    }

    if (!newest) return c.json({ success: false, error: 'No readable generated files' }, 404);
    const raw = await fs.readFile(newest, 'utf8');
    const parsed = JSON.parse(raw);

    // If this is a manifest reference, load the real manifest and return it.
    if (parsed.manifestPath) {
      try {
        const fullManifestPath = path.resolve(projectRoot, parsed.manifestPath);
        const manifestRaw = await fs.readFile(fullManifestPath, 'utf8');
        const manifest = JSON.parse(manifestRaw);
        return c.json({ success: true, data: manifest });
      } catch (e) {
        console.error('Failed to load referenced manifest:', e);
        // Fall through to returning the raw latest file
      }
    }

    return c.json({ success: true, data: parsed });
  } catch (error) {
    console.error('Failed to read generated file:', error);
    return c.json({ success: false, error: 'Failed to load generated content' }, 500);
  }
});

export default generated;
