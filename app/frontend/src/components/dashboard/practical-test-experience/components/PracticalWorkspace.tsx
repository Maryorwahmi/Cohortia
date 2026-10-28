import React, { useState, useEffect, useRef } from 'react';
import { PracticalManifest } from '../types/practical';
import { ScenarioDesignWorkspace } from './ScenarioDesignWorkspace';
import { ResearchAnalysisWorkspace } from './ResearchAnalysisWorkspace';
import { CloudConsoleWorkspace } from './CloudConsoleWorkspace';
import {
  Play,
  Terminal,
  Code2,
  Copy,
  Check,
  Cpu,
  Database,
  Search,
  Table as TableIcon,
  Save,
  Layers,
  ArrowRight,
  BarChart2,
  Binary,
} from 'lucide-react';

interface PracticalWorkspaceProps {
  manifest: PracticalManifest;
  activeFileName: string;
  filesContent: Record<string, string>;
  onUpdateFileContent: (fileName: string, content: string) => void;
  onCommandRun?: (command: string, output: string) => void;
  onSimulationCompleted?: (passed: boolean) => void;
  onBinaryAnswerGrade?: (taskId: string, answer: string) => Promise<boolean>;
  lastSavedTimestamp?: string;
}

interface TerminalEntry {
  type: 'input' | 'output' | 'error' | 'system';
  text: string;
}

const ZEN_OF_PYTHON = `The Zen of Python, by Tim Peters

Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!`;

// Chapter 5.2 Products Table from Syllabus
const SAMPLE_PRODUCTS = [
  { id: 101, name: 'Laptop Pro', category: 'Electronics', price: 1200, stock: 50 },
  { id: 102, name: 'Gaming Mouse', category: 'Electronics', price: 75, stock: 200 },
  { id: 103, name: 'Ergonomic Keyboard', category: 'Electronics', price: 120, stock: 150 },
  { id: 104, name: 'Desk Chair', category: 'Furniture', price: 300, stock: 80 },
  { id: 105, name: 'Monitor Stand', category: 'Furniture', price: 45, stock: 300 },
  { id: 106, name: 'External SSD 1TB', category: 'Electronics', price: 150, stock: 100 },
  { id: 107, name: 'Wireless Earbuds', category: 'Electronics', price: 99, stock: 250 },
];

export const PracticalWorkspace: React.FC<PracticalWorkspaceProps> = ({
  manifest,
  activeFileName,
  filesContent,
  onUpdateFileContent,
  onCommandRun,
  onSimulationCompleted,
  onBinaryAnswerGrade,
  lastSavedTimestamp,
}) => {
  // If the course belongs to Scenario & Design, route to dedicated ScenarioDesignWorkspace
  if (manifest.categoryType === 'scenario_design') {
    return (
      <ScenarioDesignWorkspace
        manifest={manifest}
        onSimulationCompleted={onSimulationCompleted}
        onBinaryAnswerGrade={onBinaryAnswerGrade}
        lastSavedTimestamp={lastSavedTimestamp}
      />
    );
  }

  // If the course belongs to Research & Analysis, route to dedicated ResearchAnalysisWorkspace
  if (manifest.categoryType === 'research_analysis') {
    return (
      <ResearchAnalysisWorkspace
        manifest={manifest}
        onSimulationCompleted={onSimulationCompleted}
        lastSavedTimestamp={lastSavedTimestamp}
      />
    );
  }

  // If the course belongs to Cloud Console Lab, route to dedicated CloudConsoleWorkspace
  if (manifest.categoryType === 'cloud_console') {
    return (
      <CloudConsoleWorkspace
        manifest={manifest}
        onSimulationCompleted={onSimulationCompleted}
        lastSavedTimestamp={lastSavedTimestamp}
      />
    );
  }

  const currentContent = filesContent[activeFileName] || '';
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<TerminalEntry[]>([
    {
      type: 'system',
      text:
        manifest.type === 'c_program' || manifest.type === 'pointers'
          ? 'Clang 17.0.6 (x86_64-pc-linux-gnu)\nWorking directory: /workspace/practical'
          : manifest.type === 'terminal'
          ? 'Python 3.12.0 (safe interactive REPL)\nType "help", "copyright", "credits" or "license" for more info.'
          : manifest.type === 'binary_search'
          ? 'Algorithms Engine: Binary Search Simulation\nSorted array loaded: [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]'
          : manifest.type === 'sorting'
          ? 'Sorting Visualizer: Bubble Sort\nInitial array: [5, 2, 8, 1, 9, 3]'
          : manifest.type === 'sql'
          ? 'SQL Query Engine: SQLite 3.42.0\nDatabase: catalog.db • Table: Products (7 rows)'
          : 'CS50 Safe Terminal v2.4 (isolated simulation mode)',
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  // Copied indicator for export
  const [copiedNotes, setCopiedNotes] = useState<boolean>(false);

  // Binary search visual tracer state
  const [bsTarget, setBsTarget] = useState<number>(23);
  const bsArray = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
  const [bsHistory, setBsHistory] = useState<Array<{ low: number; mid: number; high: number; value: number }>>([]);
  const [bsFoundIndex, setBsFoundIndex] = useState<number | null>(null);

  // Sorting Visualizer state
  const [sortArray, setSortArray] = useState<number[]>([5, 2, 8, 1, 9, 3]);
  const [isSorted, setIsSorted] = useState<boolean>(false);

  // Heap Memory Visualizer state
  const [heapAllocated, setHeapAllocated] = useState<boolean>(false);
  const [heapFreed, setHeapFreed] = useState<boolean>(false);

  // SQL Query Runner state
  const [sqlQuery, setSqlQuery] = useState<string>('SELECT * FROM Products WHERE Category = \'Electronics\';');
  const [sqlResults, setSqlResults] = useState<typeof SAMPLE_PRODUCTS>(SAMPLE_PRODUCTS.filter(p => p.category === 'Electronics'));

  // Terminal autoscroll
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  // Handle Binary Search Step Tracer
  const handleRunBinarySearchTracer = () => {
    let low = 0;
    let high = bsArray.length - 1;
    const history: Array<{ low: number; mid: number; high: number; value: number }> = [];
    let found = null;

    while (low <= high) {
      const mid = Math.floor(low + (high - low) / 2);
      history.push({ low, mid, high, value: bsArray[mid] });

      if (bsArray[mid] === bsTarget) {
        found = mid;
        break;
      } else if (bsArray[mid] < bsTarget) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    setBsHistory(history);
    setBsFoundIndex(found);
    if (onSimulationCompleted) {
      onSimulationCompleted(found !== null);
    }
  };

  // Handle Sorting Visualizer
  const handleRunSort = () => {
    const arr = [...sortArray];
    arr.sort((a, b) => a - b);
    setSortArray(arr);
    setIsSorted(true);
    const newEntry: TerminalEntry[] = [
      ...terminalHistory,
      { type: 'input', text: '$ ./sort' },
      { type: 'output', text: `Sorted array: ${arr.join(' ')}\nPasses completed: 3 | Swaps: 5` },
    ];
    setTerminalHistory(newEntry);
    if (onSimulationCompleted) {
      onSimulationCompleted(true);
    }
  };

  // Handle Heap Allocation & Free simulation
  const handleSimulateMalloc = () => {
    setHeapAllocated(true);
    setHeapFreed(false);
  };
  const handleSimulateFree = () => {
    setHeapFreed(true);
    if (onSimulationCompleted) {
      onSimulationCompleted(true);
    }
  };

  // Handle SQL Query Execution
  const handleExecuteSql = (queryToRun?: string) => {
    const q = (queryToRun || sqlQuery).trim();
    const upperQ = q.toUpperCase();

    let filtered = [...SAMPLE_PRODUCTS];

    if (upperQ.includes("WHERE CATEGORY = 'ELECTRONICS' AND PRICE > 100")) {
      filtered = SAMPLE_PRODUCTS.filter((p) => p.category === 'Electronics' && p.price > 100);
    } else if (upperQ.includes("WHERE CATEGORY = 'ELECTRONICS'")) {
      filtered = SAMPLE_PRODUCTS.filter((p) => p.category === 'Electronics');
    } else if (upperQ.includes("WHERE CATEGORY = 'FURNITURE'")) {
      filtered = SAMPLE_PRODUCTS.filter((p) => p.category === 'Furniture');
    } else if (upperQ.includes("WHERE PRICE > 100")) {
      filtered = SAMPLE_PRODUCTS.filter((p) => p.price > 100);
    } else if (upperQ.includes("SELECT PRODUCTNAME, PRICE FROM PRODUCTS")) {
      filtered = SAMPLE_PRODUCTS;
    }

    setSqlResults(filtered);
    const newEntry: TerminalEntry[] = [
      ...terminalHistory,
      { type: 'input', text: `sqlite> ${q}` },
      { type: 'output', text: `✓ Query OK: ${filtered.length} row(s) returned.` },
    ];
    setTerminalHistory(newEntry);

    if (onCommandRun) {
      onCommandRun(q, `Returned ${filtered.length} rows`);
    }
    if (onSimulationCompleted) {
      onSimulationCompleted(true);
    }
  };

  // Handle running code or terminal commands safely
  const handleExecuteCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    const isRepl = manifest.type === 'terminal';
    const isSql = manifest.type === 'sql';
    const promptPrefix = isRepl ? '>>> ' : isSql ? 'sqlite> ' : '$ ';

    const newHistory: TerminalEntry[] = [...terminalHistory, { type: 'input', text: `${promptPrefix}${cmd}` }];

    let outText = '';
    let outType: 'output' | 'error' | 'system' = 'output';

    if (cmd === 'clear') {
      setTerminalHistory([]);
      setTerminalInput('');
      return;
    }

    if (isSql) {
      handleExecuteSql(cmd);
      return;
    }

    if (isRepl) {
      if (cmd === 'import this') {
        outText = ZEN_OF_PYTHON;
      } else if (cmd.startsWith('print(') && cmd.endsWith(')')) {
        const inner = cmd.slice(6, -1).trim();
        if ((inner.startsWith('"') && inner.endsWith('"')) || (inner.startsWith("'") && inner.endsWith("'"))) {
          outText = inner.slice(1, -1);
        } else {
          try {
            const clean = inner.replace(/[^0-9+\-*/().\s]/g, '');
            // eslint-disable-next-line no-eval
            outText = String(eval(clean));
          } catch {
            outText = inner;
          }
        }
      } else if (cmd === '10 / 3') {
        outText = '3.3333333333333335';
      } else if (cmd === '10 // 3') {
        outText = '3';
      } else if (cmd === '"Python" * 3' || cmd === "'Python' * 3") {
        outText = "'PythonPythonPython'";
      } else if (cmd.includes('*') && (cmd.includes('"') || cmd.includes("'"))) {
        const match = cmd.match(/["'](.*?)["']\s*\*\s*(\d+)/);
        if (match) {
          const str = match[1];
          const count = parseInt(match[2], 10);
          outText = `'${str.repeat(Math.min(count, 30))}'`;
        } else {
          outText = `'PythonPythonPython'`;
        }
      } else if (/^[0-9+\-*/().\s]+$/.test(cmd)) {
        try {
          // eslint-disable-next-line no-eval
          outText = String(eval(cmd));
        } catch {
          outType = 'error';
          outText = `SyntaxError: invalid syntax`;
        }
      } else if (cmd === 'help') {
        outText = 'Commands: print("..."), 10 / 3, 10 // 3, "Python" * 3, import this';
      } else {
        outType = 'error';
        outText = `NameError: name '${cmd}' is not defined. Try print("${cmd}")`;
      }
    } else {
      // C program commands
      if (cmd.startsWith('clang') || cmd.startsWith('gcc')) {
        if (cmd.includes('calculator.c')) {
          outText = '✓ clang calculator.c -o calculator: compiled cleanly (0 errors, 0 warnings).\nBinary generated: calculator (ELF 64-bit)';
        } else if (cmd.includes('grades.c')) {
          outText = '✓ clang grades.c -o grades: compiled cleanly.\nBinary generated: grades';
        } else if (cmd.includes('student_records.c')) {
          outText = '✓ clang student_records.c -o student_records: compiled cleanly.\nBinary generated: student_records';
        } else if (cmd.includes('sort.c')) {
          outText = '✓ clang sort.c -o sort: compiled cleanly.\nBinary generated: sort';
        } else if (cmd.includes('binary_search.c')) {
          outText = '✓ clang binary_search.c -o binary_search: compiled cleanly.\nBinary generated: binary_search';
        } else {
          outText = '✓ clang hello.c -o hello: compiled cleanly (0 errors, 0 warnings).\nBinary generated: hello (ELF 64-bit executable)';
        }
      } else if (cmd === './hello' || cmd === 'hello') {
        const cCode = filesContent['hello.c'] || '';
        const match = cCode.match(/printf\s*\(\s*["']([^"']+)["']\s*\)/);
        outText = match ? match[1].replace('\\n', '') : 'hello, world';
      } else if (cmd === './calculator' || cmd === 'calculator') {
        outText = `Enter the first integer: 10\nEnter the second integer: 3\nSum: 13\nDifference: 7\nProduct: 30\nQuotient (float): 3.33`;
      } else if (cmd === './grades' || cmd === 'grades') {
        outText = `How many grades do you want to enter? 3\nEnter grade 1: 95.5\nEnter grade 2: 88.0\nEnter grade 3: 92.5\nAverage grade: 92.00\n[malloc: 12 bytes allocated -> free: 12 bytes returned to OS]`;
        setHeapAllocated(true);
        setHeapFreed(true);
      } else if (cmd === './student_records' || cmd === 'student_records') {
        outText = `Student record persisted to students.txt successfully.\nRecord written: ID: 101, Name: Alice Smith, GPA: 3.92`;
      } else if (cmd === './sort' || cmd === 'sort') {
        outText = `Sorted array: 1 2 3 5 8 9`;
        setIsSorted(true);
      } else if (cmd === './binary_search' || cmd === 'binary_search') {
        outText = `Target 23 found at index 5!\nVerified in 3 comparisons (O(log n) efficiency).`;
        handleRunBinarySearchTracer();
      } else if (cmd === 'ls') {
        outText = Object.keys(filesContent).join('  ') + '  hello*  calculator*  grades*  sort*  binary_search*';
      } else if (cmd.startsWith('cat ')) {
        const target = cmd.slice(4).trim();
        outText = filesContent[target] || `cat: ${target}: No such file`;
      } else {
        outType = 'error';
        outText = `bash: ${cmd}: command not found. Try: clang, ./hello, ./calculator, ./grades, ./sort, ./binary_search, ls, clear`;
      }
    }

    if (outText) {
      newHistory.push({ type: outType, text: outText });
    }
    setTerminalHistory(newHistory);
    setTerminalInput('');

    if (onCommandRun) {
      onCommandRun(cmd, outText);
    }
  };

  const handleExportNotes = () => {
    const text = filesContent[activeFileName] || '';
    navigator.clipboard.writeText(text);
    setCopiedNotes(true);
    setTimeout(() => setCopiedNotes(false), 2000);
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-white rounded-xl border border-slate-200/90 shadow-xs overflow-hidden select-none">
      {/* Workspace Compact Top Toolbar */}
      <div className="px-3 py-1.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <Code2 className="w-3.5 h-3.5 text-slate-500" />
          <span className="font-mono text-xs font-bold text-slate-800">
            {activeFileName}
          </span>
          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-200/70 text-slate-700 font-semibold">
            {manifest.type === 'c_program' || manifest.type === 'pointers'
              ? 'C (Clang 17)'
              : manifest.type === 'sql'
              ? 'SQLite'
              : manifest.type === 'binary_search' || manifest.type === 'sorting'
              ? 'Algorithms'
              : 'Python 3'}
          </span>

          {lastSavedTimestamp && (
            <span className="hidden sm:flex items-center gap-1 text-[10px] font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-200">
              <Save className="w-2.5 h-2.5" />
              <span>Saved</span>
            </span>
          )}
        </div>

        {/* Quick Action Buttons for One-Click Practical Execution */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={handleExportNotes}
            title="Copy current code to clipboard"
            className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 transition-colors flex items-center gap-1 cursor-pointer"
          >
            {copiedNotes ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            <span className="hidden sm:inline">{copiedNotes ? 'Copied' : 'Export'}</span>
          </button>

          {manifest.type === 'c_program' || manifest.type === 'pointers' ? (
            <>
              <button
                onClick={() =>
                  handleExecuteCommand(
                    activeFileName.includes('calculator')
                      ? 'clang calculator.c -o calculator'
                      : activeFileName.includes('grades')
                      ? 'clang grades.c -o grades'
                      : activeFileName.includes('student_records')
                      ? 'clang student_records.c -o student_records'
                      : 'clang hello.c -o hello'
                  )
                }
                className="px-2.5 py-1 rounded-md text-[11px] font-bold font-mono bg-indigo-600 hover:bg-indigo-700 text-white shadow-2xs flex items-center gap-1 transition-colors cursor-pointer"
              >
                <Cpu className="w-3 h-3" />
                <span>Compile (clang)</span>
              </button>

              <button
                onClick={() =>
                  handleExecuteCommand(
                    activeFileName.includes('calculator')
                      ? './calculator'
                      : activeFileName.includes('grades')
                      ? './grades'
                      : activeFileName.includes('student_records')
                      ? './student_records'
                      : './hello'
                  )
                }
                className="px-2.5 py-1 rounded-md text-[11px] font-bold font-mono bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xs flex items-center gap-1 transition-colors cursor-pointer"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>Run</span>
              </button>
            </>
          ) : manifest.type === 'binary_search' ? (
            <>
              <button
                onClick={handleRunBinarySearchTracer}
                className="px-2.5 py-1 rounded-md text-[11px] font-bold font-mono bg-indigo-600 hover:bg-indigo-700 text-white shadow-2xs flex items-center gap-1 transition-colors cursor-pointer"
              >
                <Search className="w-3 h-3" />
                <span>Trace Search (Target: {bsTarget})</span>
              </button>

              <button
                onClick={() => handleExecuteCommand('./binary_search')}
                className="px-2.5 py-1 rounded-md text-[11px] font-bold font-mono bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xs flex items-center gap-1 transition-colors cursor-pointer"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>Run Binary</span>
              </button>
            </>
          ) : manifest.type === 'sorting' ? (
            <>
              <button
                onClick={handleRunSort}
                className="px-2.5 py-1 rounded-md text-[11px] font-bold font-mono bg-indigo-600 hover:bg-indigo-700 text-white shadow-2xs flex items-center gap-1 transition-colors cursor-pointer"
              >
                <BarChart2 className="w-3 h-3" />
                <span>Sort Array</span>
              </button>
              <button
                onClick={() => handleExecuteCommand('./sort')}
                className="px-2.5 py-1 rounded-md text-[11px] font-bold font-mono bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xs flex items-center gap-1 transition-colors cursor-pointer"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>Run</span>
              </button>
            </>
          ) : manifest.type === 'sql' ? (
            <button
              onClick={() => handleExecuteSql()}
              className="px-2.5 py-1 rounded-md text-[11px] font-bold font-mono bg-purple-600 hover:bg-purple-700 text-white shadow-2xs flex items-center gap-1 transition-colors cursor-pointer"
            >
              <TableIcon className="w-3 h-3" />
              <span>Run SQL Query</span>
            </button>
          ) : (
            <button
              onClick={() => handleExecuteCommand('import this')}
              className="px-2.5 py-1 rounded-md text-[11px] font-bold font-mono bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xs flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Run REPL</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Workspace Split: Left Editor & Right Interactive Simulator (Compact & Zero Scrolling) */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 overflow-hidden min-h-0">
        {/* Left: Code Editor with line numbers */}
        <div className="flex flex-col h-full bg-slate-900 text-slate-100 overflow-hidden min-h-0">
          <div className="px-3 py-1 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono shrink-0">
            <span>Editor: {activeFileName}</span>
            <span className="text-[10px] text-slate-500">{currentContent.split('\n').length} lines</span>
          </div>

          <div className="flex-1 relative flex overflow-hidden min-h-0">
            <div className="select-none py-2 px-2 text-right font-mono text-[11px] text-slate-600 bg-slate-950/40 w-8 shrink-0 overflow-hidden">
              {currentContent.split('\n').map((_, idx) => (
                <div key={idx} className="leading-5">
                  {idx + 1}
                </div>
              ))}
            </div>

            <textarea
              value={currentContent}
              onChange={(e) => onUpdateFileContent(activeFileName, e.target.value)}
              className="flex-1 h-full py-2 px-2.5 font-mono text-xs text-emerald-400 bg-transparent focus:outline-hidden resize-none leading-5 selection:bg-rose-500/30 selection:text-white overflow-y-auto no-scrollbar"
              spellCheck={false}
              placeholder="Write your code or instructions here..."
            />
          </div>
        </div>

        {/* Right: Domain-Specific Interactive Simulation Workspace */}
        <div className="flex flex-col h-full bg-slate-950 text-slate-200 overflow-hidden font-mono text-xs min-h-0">
          {manifest.type === 'pointers' ? (
            /* WIDGET: Heap Memory Allocation & Free Visualizer */
            <div className="flex-1 flex flex-col h-full p-3 overflow-hidden min-h-0">
              <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-2 shrink-0">
                <div className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="font-bold text-slate-200 text-xs">
                    Heap Memory Visualizer (malloc & free)
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleSimulateMalloc}
                    className="px-2 py-0.5 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-bold cursor-pointer"
                  >
                    malloc()
                  </button>
                  <button
                    onClick={handleSimulateFree}
                    className="px-2 py-0.5 rounded bg-rose-600 hover:bg-rose-500 text-white text-[10px] font-bold cursor-pointer"
                  >
                    free()
                  </button>
                </div>
              </div>

              {/* Memory Layout */}
              <div className="grid grid-cols-2 gap-2 mb-2 shrink-0">
                <div className="p-2 rounded bg-slate-900 border border-slate-800">
                  <span className="text-[10px] font-bold text-slate-400 block mb-1">Stack Frame</span>
                  <div className="text-[11px] text-slate-300">
                    grades (pointer): <span className="text-amber-400">{heapFreed ? 'NULL (0x0)' : heapAllocated ? '0x7ffd98' : 'uninitialized'}</span>
                  </div>
                </div>

                <div className="p-2 rounded bg-slate-900 border border-slate-800">
                  <span className="text-[10px] font-bold text-slate-400 block mb-1">Heap Allocation</span>
                  <div className="text-[11px] text-slate-300">
                    Status: <span className={heapFreed ? 'text-emerald-400 font-bold' : heapAllocated ? 'text-amber-400 font-bold' : 'text-slate-500'}>
                      {heapFreed ? 'FREED (0 leaks)' : heapAllocated ? 'ALLOCATED (12 bytes)' : 'None'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Dynamic array slots */}
              <div className="flex-1 bg-slate-900/60 p-2 rounded border border-slate-800/80 overflow-y-auto no-scrollbar">
                <span className="text-[10px] uppercase text-slate-400 font-bold block mb-1">Heap Memory Slots:</span>
                {heapAllocated && !heapFreed ? (
                  <div className="space-y-1">
                    <div className="p-1.5 rounded bg-slate-950 border border-slate-800 flex justify-between text-[11px]">
                      <span className="text-slate-400">0x7ffd98: grades[0]</span>
                      <span className="text-emerald-400 font-bold">95.50 (float)</span>
                    </div>
                    <div className="p-1.5 rounded bg-slate-950 border border-slate-800 flex justify-between text-[11px]">
                      <span className="text-slate-400">0x7ffd9c: grades[1]</span>
                      <span className="text-emerald-400 font-bold">88.00 (float)</span>
                    </div>
                    <div className="p-1.5 rounded bg-slate-950 border border-slate-800 flex justify-between text-[11px]">
                      <span className="text-slate-400">0x7ffda0: grades[2]</span>
                      <span className="text-emerald-400 font-bold">92.50 (float)</span>
                    </div>
                  </div>
                ) : heapFreed ? (
                  <div className="text-emerald-400 text-center py-4 text-xs font-semibold">
                    ✓ free(grades) executed cleanly. Memory returned to the OS.
                  </div>
                ) : (
                  <div className="text-slate-500 text-center py-4 text-xs">
                    Click "malloc()" or run ./grades to allocate heap memory.
                  </div>
                )}
              </div>
            </div>
          ) : manifest.type === 'sorting' ? (
            /* WIDGET: Sorting Visualizer */
            <div className="flex-1 flex flex-col h-full p-3 overflow-hidden min-h-0">
              <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-2 shrink-0">
                <div className="flex items-center gap-1.5">
                  <BarChart2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="font-bold text-slate-200 text-xs">
                    Bubble Sort Step-by-Step
                  </span>
                </div>
                <button
                  onClick={handleRunSort}
                  className="px-2.5 py-0.5 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-bold cursor-pointer"
                >
                  Sort Elements
                </button>
              </div>

              {/* Bar visualization */}
              <div className="flex-1 flex items-end justify-center gap-2 p-4 bg-slate-900 rounded border border-slate-800 min-h-0 mb-2">
                {sortArray.map((val, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-1">
                    <span className="text-[10px] text-slate-400">{val}</span>
                    <div
                      style={{ height: `${val * 14}px` }}
                      className={`w-8 rounded-t transition-all ${
                        isSorted ? 'bg-emerald-500' : 'bg-indigo-500'
                      }`}
                    />
                    <span className="text-[9px] text-slate-500">[{idx}]</span>
                  </div>
                ))}
              </div>

              <div className="text-[11px] text-slate-400 flex items-center justify-between">
                <span>Algorithm: Bubble Sort</span>
                <span className="text-amber-400">Complexity: O(n^2) worst / O(n) best</span>
              </div>
            </div>
          ) : manifest.type === 'binary_search' ? (
            /* WIDGET: Visual Binary Search Halving Tracer */
            <div className="flex-1 flex flex-col h-full p-3 overflow-hidden min-h-0">
              <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-2 shrink-0">
                <div className="flex items-center gap-1.5">
                  <Search className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="font-bold text-slate-200 text-xs">
                    Binary Search Visual Tracer
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-slate-400">Target:</span>
                  <select
                    value={bsTarget}
                    onChange={(e) => setBsTarget(Number(e.target.value))}
                    className="bg-slate-900 border border-slate-700 text-indigo-300 text-[10px] rounded px-1.5 py-0.5"
                  >
                    {[2, 5, 8, 12, 16, 23, 38, 56, 72, 91].map((val) => (
                      <option key={val} value={val}>
                        {val}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={handleRunBinarySearchTracer}
                    className="px-2 py-0.5 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-bold cursor-pointer"
                  >
                    Trace
                  </button>
                </div>
              </div>

              {/* Visual Array Blocks */}
              <div className="mb-2 shrink-0">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">
                  Sorted Array (10 Elements):
                </span>
                <div className="grid grid-cols-10 gap-1">
                  {bsArray.map((val, idx) => {
                    const isMid = bsHistory.length > 0 && bsHistory[bsHistory.length - 1].mid === idx;
                    const isFound = bsFoundIndex === idx;

                    return (
                      <div
                        key={idx}
                        className={`p-1 text-center rounded border text-[11px] transition-all ${
                          isFound
                            ? 'bg-emerald-600 border-emerald-400 text-white font-bold ring-2 ring-emerald-400'
                            : isMid
                            ? 'bg-amber-600/80 border-amber-400 text-white font-bold'
                            : 'bg-slate-900 border-slate-800 text-slate-300'
                        }`}
                      >
                        <div className="text-[9px] text-slate-400 mb-0.5">[{idx}]</div>
                        <div>{val}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Iteration Traces */}
              <div className="flex-1 overflow-y-auto space-y-1 pr-1 bg-slate-900/60 p-2 rounded border border-slate-800/80 text-[11px]">
                {bsHistory.length === 0 ? (
                  <div className="text-slate-500 text-center py-4">
                    Click "Trace" or "Run Binary" to step through divide-and-conquer search.
                  </div>
                ) : (
                  bsHistory.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-1.5 rounded bg-slate-950 border border-slate-800 flex items-center justify-between"
                    >
                      <span className="text-slate-400">
                        Step {idx + 1}: low=[{step.low}], mid=[{step.mid}], high=[{step.high}]
                      </span>
                      <span className="text-amber-400 font-bold">
                        arr[{step.mid}] = {step.value}
                      </span>
                      <span className="text-emerald-400">
                        {step.value === bsTarget ? '✓ Target Found!' : step.value < bsTarget ? '→ Go Right' : '← Go Left'}
                      </span>
                    </div>
                  ))
                )}
              </div>

              {/* Tracer Summary */}
              {bsFoundIndex !== null && (
                <div className="mt-2 p-1.5 rounded bg-emerald-950/60 border border-emerald-600/50 text-emerald-300 text-[11px] flex items-center justify-between shrink-0">
                  <span>✓ Target {bsTarget} located at index {bsFoundIndex} in {bsHistory.length} comparisons!</span>
                  <span className="text-[10px] text-emerald-400 font-mono">Complexity: O(log n)</span>
                </div>
              )}
            </div>
          ) : manifest.type === 'sql' ? (
            /* WIDGET: Interactive SQL Query Results Table */
            <div className="flex-1 flex flex-col h-full p-3 overflow-hidden min-h-0">
              <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-2 shrink-0">
                <div className="flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-purple-400" />
                  <span className="font-bold text-slate-200 text-xs">
                    SQL Results Explorer • Table: Products
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => {
                      setSqlQuery("SELECT * FROM Products WHERE Category = 'Electronics';");
                      handleExecuteSql("SELECT * FROM Products WHERE Category = 'Electronics';");
                    }}
                    className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] cursor-pointer"
                  >
                    Electronics
                  </button>
                  <button
                    onClick={() => {
                      setSqlQuery("SELECT * FROM Products WHERE Category = 'Electronics' AND Price > 100;");
                      handleExecuteSql("SELECT * FROM Products WHERE Category = 'Electronics' AND Price > 100;");
                    }}
                    className="px-2 py-0.5 rounded bg-purple-900/70 hover:bg-purple-800 text-purple-200 text-[10px] cursor-pointer"
                  >
                    Electronics &gt; $100
                  </button>
                </div>
              </div>

              {/* Tabular Output */}
              <div className="flex-1 overflow-y-auto rounded border border-slate-800 bg-slate-900/90 min-h-0">
                <table className="w-full text-left border-collapse text-[11px]">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-950 text-slate-400 uppercase text-[9px] font-bold">
                      <th className="py-1 px-2">ProductID</th>
                      <th className="py-1 px-2">ProductName</th>
                      <th className="py-1 px-2">Category</th>
                      <th className="py-1 px-2">Price</th>
                      <th className="py-1 px-2">Stock</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sqlResults.map((p) => (
                      <tr key={p.id} className="border-b border-slate-800/50 hover:bg-slate-800/40">
                        <td className="py-1 px-2 text-slate-400">{p.id}</td>
                        <td className="py-1 px-2 text-indigo-300 font-semibold">{p.name}</td>
                        <td className="py-1 px-2 text-slate-300">{p.category}</td>
                        <td className="py-1 px-2 text-emerald-400 font-bold">${p.price}</td>
                        <td className="py-1 px-2 text-slate-400">{p.stock}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* SQL Prompt Input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleExecuteSql();
                }}
                className="mt-2 flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800 shrink-0"
              >
                <span className="text-purple-400 font-bold">SQL&gt;</span>
                <input
                  type="text"
                  value={sqlQuery}
                  onChange={(e) => setSqlQuery(e.target.value)}
                  className="flex-1 bg-transparent text-slate-100 focus:outline-hidden text-xs font-mono"
                  placeholder="SELECT * FROM Products WHERE..."
                />
                <button
                  type="submit"
                  className="px-2 py-0.5 rounded bg-purple-600 hover:bg-purple-500 text-white text-[10px] font-bold cursor-pointer"
                >
                  Run
                </button>
              </form>
            </div>
          ) : (
            /* WIDGET: Interactive Terminal / Bash / Python REPL */
            <div className="flex-1 flex flex-col h-full p-2.5 overflow-hidden min-h-0">
              <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-1.5 shrink-0">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-bold text-slate-200 text-xs">
                    {manifest.type === 'terminal' ? 'Python 3 REPL' : 'Bash Terminal (Simulation)'}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  {manifest.type === 'c_program' && (
                    <>
                      <button
                        onClick={() =>
                          handleExecuteCommand(
                            activeFileName.includes('calculator')
                              ? 'clang calculator.c -o calculator'
                              : activeFileName.includes('grades')
                              ? 'clang grades.c -o grades'
                              : 'clang hello.c -o hello'
                          )
                        }
                        className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] cursor-pointer"
                      >
                        clang
                      </button>
                      <button
                        onClick={() =>
                          handleExecuteCommand(
                            activeFileName.includes('calculator')
                              ? './calculator'
                              : activeFileName.includes('grades')
                              ? './grades'
                              : './hello'
                          )
                        }
                        className="px-2 py-0.5 rounded bg-emerald-900/60 hover:bg-emerald-800 text-emerald-300 text-[10px] cursor-pointer"
                      >
                        ./exec
                      </button>
                    </>
                  )}
                  {manifest.type === 'terminal' && (
                    <>
                      <button
                        onClick={() => handleExecuteCommand('10 / 3')}
                        className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]"
                      >
                        10/3
                      </button>
                      <button
                        onClick={() => handleExecuteCommand('"Python" * 3')}
                        className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]"
                      >
                        * 3
                      </button>
                      <button
                        onClick={() => handleExecuteCommand('import this')}
                        className="px-1.5 py-0.5 rounded bg-indigo-900/70 text-indigo-300 text-[10px]"
                      >
                        import this
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => setTerminalHistory([])}
                    className="text-[10px] text-slate-500 hover:text-slate-300 ml-1 cursor-pointer"
                  >
                    Clear
                  </button>
                </div>
              </div>

              {/* Terminal Output Area */}
              <div className="flex-1 overflow-y-auto space-y-1 pr-1 bg-slate-950 p-2 rounded border border-slate-900 text-[11px] leading-relaxed min-h-0">
                {terminalHistory.map((item, i) => (
                  <div key={i}>
                    {item.type === 'input' ? (
                      <span className="text-emerald-400 font-semibold">{item.text}</span>
                    ) : item.type === 'error' ? (
                      <span className="text-rose-400">{item.text}</span>
                    ) : item.type === 'system' ? (
                      <span className="text-slate-500 whitespace-pre-wrap">{item.text}</span>
                    ) : (
                      <span className="text-slate-200 whitespace-pre-wrap">{item.text}</span>
                    )}
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>

              {/* Terminal Input Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleExecuteCommand(terminalInput);
                }}
                className="mt-1.5 flex items-center gap-1.5 bg-slate-900/90 rounded-md px-2 py-1 border border-slate-800 shrink-0"
              >
                <span className="text-emerald-400 font-bold select-none text-[11px]">
                  {manifest.type === 'terminal' ? '>>>' : '$'}
                </span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowUp' && commandHistory.length > 0) {
                      const nextIdx = historyIndex + 1 < commandHistory.length ? historyIndex + 1 : historyIndex;
                      setHistoryIndex(nextIdx);
                      setTerminalInput(commandHistory[commandHistory.length - 1 - nextIdx]);
                    } else if (e.key === 'ArrowDown') {
                      if (historyIndex > 0) {
                        const nextIdx = historyIndex - 1;
                        setHistoryIndex(nextIdx);
                        setTerminalInput(commandHistory[commandHistory.length - 1 - nextIdx]);
                      } else {
                        setHistoryIndex(-1);
                        setTerminalInput('');
                      }
                    }
                  }}
                  className="flex-1 bg-transparent text-slate-100 focus:outline-hidden text-xs font-mono"
                  placeholder={
                    manifest.type === 'terminal'
                      ? 'print("..."), 10 / 3, "Python" * 3, import this'
                      : 'clang hello.c -o hello, ./hello, ls'
                  }
                />
                <button
                  type="submit"
                  className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] font-bold cursor-pointer"
                >
                  Enter
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
