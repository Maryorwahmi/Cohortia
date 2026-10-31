import React from 'react';
import { PracticalManifest } from '../types/practical';
import { RotateCcw, ChevronDown } from 'lucide-react';

interface TopNavProps {
  manifest: PracticalManifest;
  mode: 'teach' | 'practical';
  onToggleMode: () => void;
  onResetFiles: () => void;
}

export const PrototypeTeachTopNav: React.FC<TopNavProps> = ({
  manifest,
  mode,
  onToggleMode,
  onResetFiles,
}) => {
  const categoryLabels: Record<PracticalManifest['categoryType'], string> = {
    cloud_console: 'Cloud Console',
    scenario_design: 'Scenario & Design',
    terminal_coding: 'Terminal Coding',
    research_analysis: 'Research & Analysis',
  };

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

        {/* The current generated practical is the only active category. */}
        <div className="hidden lg:flex items-center rounded-lg border border-slate-200/80 bg-slate-100 px-2 py-1 text-[11px] font-semibold text-slate-700">
          {categoryLabels[manifest.categoryType]}
        </div>
      </div>

      {/* Current chapter selector, reset, and Teach Mode badge */}
      <div className="flex items-center gap-2">
        <div className="relative group">
          <select
            value={manifest.id}
            onChange={() => undefined}
            className="appearance-none bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-mono font-semibold py-1.5 pl-3 pr-8 rounded-lg cursor-pointer text-slate-800 focus:outline-hidden shadow-2xs max-w-[280px] sm:max-w-[380px] truncate"
          >
            <option value={manifest.id}>
              {manifest.classroom.chapterBreadcrumb}: {manifest.title}
            </option>
          </select>
          <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
            <ChevronDown className="w-3.5 h-3.5" />
          </div>
        </div>

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
