import React from 'react';
import { PracticalManifest } from '../types/practical';
import { RotateCcw, ChevronDown, Split } from 'lucide-react';

interface TopNavProps {
  manifests: PracticalManifest[];
  activeManifestId: string;
  onSelectManifest: (manifestId: string) => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  mode: 'teach' | 'practical';
  onToggleMode: () => void;
  onResetFiles: () => void;
  isSplitView: boolean;
  onToggleSplitView: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  manifests,
  activeManifestId,
  onSelectManifest,
  selectedCategory,
  onSelectCategory,
  mode,
  onToggleMode,
  onResetFiles,
  isSplitView,
  onToggleSplitView,
}) => {
  const filteredManifests =
    selectedCategory === 'all'
      ? manifests
      : manifests.filter((m) => m.categoryType === selectedCategory);

  return (
    <div className="h-12 bg-white/95 backdrop-blur-md border-b border-slate-200/90 px-4 flex items-center justify-between select-none shrink-0">
      {/* Window Controls matching screenshot */}
      <div className="flex items-center gap-4">
        {/* Three dots: red, yellow, green */}
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
        </div>

        {/* Practical Workspace Title matching screenshot */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-800">
            PRACTICAL WORKSPACE
          </span>
          <span className="text-slate-300 hidden sm:inline">|</span>
          <span className="text-xs text-slate-500 font-medium hidden sm:inline">
            Cohortia Practical Learning
          </span>
        </div>

        {/* 4 Category Filter Pills/Buttons */}
        <div className="hidden lg:flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200/80">
          <button
            onClick={() => onSelectCategory('all')}
            className={`px-2 py-0.5 text-[11px] font-semibold rounded transition-colors cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-white text-slate-900 shadow-2xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Courses
          </button>
          <button
            onClick={() => onSelectCategory('cloud_console')}
            className={`px-2 py-0.5 text-[11px] font-semibold rounded transition-colors cursor-pointer ${
              selectedCategory === 'cloud_console'
                ? 'bg-white text-orange-700 shadow-2xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Cloud Console
          </button>
          <button
            onClick={() => onSelectCategory('scenario_design')}
            className={`px-2 py-0.5 text-[11px] font-semibold rounded transition-colors cursor-pointer ${
              selectedCategory === 'scenario_design'
                ? 'bg-white text-indigo-700 shadow-2xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Scenario & Design
          </button>
          <button
            onClick={() => onSelectCategory('terminal_coding')}
            className={`px-2 py-0.5 text-[11px] font-semibold rounded transition-colors cursor-pointer ${
              selectedCategory === 'terminal_coding'
                ? 'bg-white text-emerald-700 shadow-2xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Terminal Coding
          </button>
          <button
            onClick={() => onSelectCategory('research_analysis')}
            className={`px-2 py-0.5 text-[11px] font-semibold rounded transition-colors cursor-pointer ${
              selectedCategory === 'research_analysis'
                ? 'bg-white text-amber-700 shadow-2xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Research & Analysis
          </button>
        </div>
      </div>

      {/* Practical Switcher Dropdown, Split View, and Teach Mode Badge */}
      <div className="flex items-center gap-2">
        <div className="relative group">
          <select
            value={activeManifestId}
            onChange={(e) => onSelectManifest(e.target.value)}
            className="appearance-none bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-mono font-semibold py-1.5 pl-3 pr-8 rounded-lg cursor-pointer text-slate-800 focus:outline-hidden shadow-2xs max-w-[280px] sm:max-w-[380px] truncate"
          >
            {filteredManifests.map((m) => (
              <option key={m.id} value={m.id}>
                {m.classroom.chapterBreadcrumb}: {m.title}
              </option>
            ))}
          </select>
          <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
            <ChevronDown className="w-3.5 h-3.5" />
          </div>
        </div>

        <button
          onClick={onToggleSplitView}
          title={isSplitView ? 'Switch to single view' : 'Switch to side-by-side split view'}
          className={`px-2.5 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-colors border cursor-pointer ${
            isSplitView
              ? 'bg-rose-50 border-rose-300 text-rose-700 font-semibold'
              : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-600'
          }`}
        >
          <Split className="w-3.5 h-3.5" />
          <span className="hidden md:inline">{isSplitView ? 'Single View' : 'Split View'}</span>
        </button>

        <button
          onClick={onResetFiles}
          title="Reset files to initial template"
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors hidden sm:flex items-center gap-1 text-xs cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="text-[11px] font-mono">Reset</span>
        </button>

        {/* TEACH MODE / PRACTICE MODE Badge button */}
        <button
          onClick={onToggleMode}
          title={`Click to switch to ${mode === 'teach' ? 'Practice' : 'Teach'} Mode`}
          className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase border transition-all cursor-pointer ${
            mode === 'teach'
              ? 'bg-emerald-50 text-emerald-700 border-emerald-300 shadow-2xs hover:bg-emerald-100'
              : 'bg-indigo-50 text-indigo-700 border-indigo-300 shadow-2xs hover:bg-indigo-100'
          }`}
        >
          {mode === 'teach' ? 'TEACH MODE' : 'PRACTICE MODE'}
        </button>
      </div>
    </div>
  );
};
