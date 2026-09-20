import React, { useEffect, useMemo, useRef, useState } from 'react';

interface ScriptAction {
  type: 'type' | 'output' | 'openFile' | 'wait';
  target?: 'editor' | 'terminal' | 'fileTree';
  text?: string;
  duration?: number; // ms
}

interface SimulatedEditorProps {
  script?: ScriptAction[];
  taskTitle?: string;
  taskInstructions?: string[];
  className?: string;
  onComplete?: () => void;
}

const createDefaultScript = (taskTitle: string, taskInstructions: string[]): ScriptAction[] => [
  { type: 'openFile', target: 'fileTree', text: 'src/App.tsx', duration: 400 },
  { type: 'type', target: 'editor', text: `// Practical: ${taskTitle}\n\nimport React from 'react';\n\nexport default function App() {\n  return (\n    <main className="practical-result">\n      <h1>${taskTitle}</h1>\n      <p>${taskInstructions[0] || 'Complete the practical task.'}</p>\n    </main>\n  );\n}\n`, duration: 2400 },
  { type: 'wait', duration: 300 },
  { type: 'openFile', target: 'fileTree', text: 'package.json', duration: 300 },
  { type: 'type', target: 'terminal', text: '$ npm run build\n', duration: 800 },
  { type: 'output', target: 'terminal', text: 'vite v6.0.2 building for production...\n', duration: 900 },
  { type: 'output', target: 'terminal', text: '\u2713 built successfully in 0.35s.\n', duration: 600 },
];

export default function SimulatedEditor({ taskTitle = 'Practical exercise', taskInstructions = [], script, className = '', onComplete }: SimulatedEditorProps) {
  const activeScript = useMemo(
    () => script || createDefaultScript(taskTitle, taskInstructions),
    [script, taskTitle, taskInstructions],
  );
  const [editorText, setEditorText] = useState('');
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [openFile, setOpenFile] = useState('src/App.tsx');
  const [isPlaying, setIsPlaying] = useState(true);
  const [actionIndex, setActionIndex] = useState(0);
  const typingRef = useRef<number | null>(null);
  const actionTimer = useRef<number | null>(null);

  useEffect(() => {
    if (!isPlaying) return;
    if (actionIndex >= activeScript.length) {
      onComplete?.();
      return;
    }

    const action = activeScript[actionIndex];
    if (!action) return;

    const runAction = async () => {
      if (action.type === 'openFile') {
        setOpenFile(action.text || '');
        await delay(action.duration || 300);
        nextAction();
      } else if (action.type === 'type') {
        await typeText(action.text || '', action.duration || 1000);
        nextAction();
      } else if (action.type === 'output') {
        appendTerminal(action.text || '');
        await delay(action.duration || 200);
        nextAction();
      } else if (action.type === 'wait') {
        await delay(action.duration || 400);
        nextAction();
      } else {
        nextAction();
      }
    };

    runAction();

    return () => {
      if (typingRef.current) window.clearInterval(typingRef.current);
      if (actionTimer.current) window.clearTimeout(actionTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeScript, isPlaying, actionIndex]);

  const nextAction = () => setActionIndex((i) => i + 1);

  const delay = (ms: number) => new Promise((res) => {
    actionTimer.current = window.setTimeout(res, ms);
  });

  const typeText = (text: string, duration: number) => new Promise<void>((resolve) => {
    const totalChars = text.length;
    const interval = Math.max(8, Math.floor(duration / Math.max(1, totalChars)));
    let pos = 0;
    typingRef.current = window.setInterval(() => {
      pos += 1;
      setEditorText((prev) => prev + text.charAt(pos - 1));
      if (pos >= totalChars) {
        if (typingRef.current) {
          window.clearInterval(typingRef.current);
          typingRef.current = null;
        }
        resolve();
      }
    }, interval);
  });

  const appendTerminal = (line: string) => {
    setTerminalLines((prev) => [...prev, line]);
  };

  return (
    <div className={`w-full h-full flex flex-col bg-[#0f1724] text-white ${className}`}>
      {/* Title bar */}
      <div className="flex items-center px-3 py-2 bg-[#0b1220] border-b border-[#111827]/50">
        <div className="flex-1 text-xs text-[#9ca3af]">Simulated - src/{openFile.split('/').pop()}</div>
        <div className="flex items-center gap-2">
          <button onClick={() => setIsPlaying((p) => !p)} className="px-2 py-1 bg-[#111827] rounded text-xs">
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
      </div>

      <div className="flex flex-1 min-h-0">
        {/* File tree */}
        <div className="w-48 bg-[#071024] p-2 border-r border-[#0b1220] text-sm text-[#9ca3af] overflow-auto">
          <div className="text-xs font-bold mb-2">EXPLORER</div>
          <ul className="space-y-1">
            <li className={`px-2 py-1 rounded ${openFile.endsWith('App.tsx') ? 'bg-[#0e1726]' : 'hover:bg-[#071827]'}`}>src/App.tsx</li>
            <li className={`px-2 py-1 rounded ${openFile.endsWith('index.tsx') ? 'bg-[#0e1726]' : 'hover:bg-[#071827]'}`}>src/index.tsx</li>
            <li className={`px-2 py-1 rounded ${openFile.endsWith('package.json') ? 'bg-[#0e1726]' : 'hover:bg-[#071827]'}`}>package.json</li>
            <li className={`px-2 py-1 rounded ${openFile.endsWith('vite.config.js') ? 'bg-[#0e1726]' : 'hover:bg-[#071827]'}`}>vite.config.js</li>
          </ul>
        </div>

        {/* Editor + Terminal */}
        <div className="flex-1 flex flex-col min-h-0">
          <div className="flex-1 overflow-auto p-4 bg-[#0b1226]">
            <pre className="whitespace-pre-wrap text-sm leading-5 font-mono text-[#e6edf3]">{editorText || '// Simulated code will appear here...'}
            </pre>
          </div>

          <div className="h-36 bg-[#020617] border-t border-[#0b1220] p-3 overflow-auto text-xs font-mono text-[#9ca3af]">
            {terminalLines.length === 0 && <div className="text-[#56606b]">$ terminal output will appear here...</div>}
            {terminalLines.map((l, i) => (
              <div key={i} className="whitespace-pre-wrap">{l}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
