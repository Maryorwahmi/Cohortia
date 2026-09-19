import { useEffect, useState } from 'react';
import ImmersiveChapterViewer from '../../components/immersive/ImmersiveChapterViewer';
import type { ImmersiveChapterManifest } from '../../components/immersive/ImmersiveChapterViewer';

export default function HtmlBoardTest() {
  const [manifest, setManifest] = useState<ImmersiveChapterManifest | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const course = params.get('course') || 'ai-for-everyone';
    const module = params.get('module')?.padStart(2, '0') || '01';
    const chapter = params.get('chapter')?.padStart(2, '0') || '01';
    fetch(`/learning-boards-html/${course}/module-${module}/chapter-${chapter}/manifest.json`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => setManifest(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center bg-slate-950 text-white p-6">
        <div className="bg-rose-500/10 border border-rose-500/30 rounded-2xl p-6 max-w-lg">
          <h1 className="text-xl font-bold mb-2">Failed to load manifest</h1>
          <p className="text-white/70">{error}</p>
        </div>
      </div>
    );
  }

  if (!manifest) {
    return (
      <div className="h-screen flex items-center justify-center bg-slate-950 text-white">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-white/60">Loading HTML learning board...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-full bg-slate-950">
      <ImmersiveChapterViewer
        manifest={manifest}
        onComplete={() => console.log('HTML learning board complete')}
      />
    </div>
  );
}
