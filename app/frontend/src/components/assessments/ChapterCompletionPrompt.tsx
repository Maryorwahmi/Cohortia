import { useState } from 'react';
import { ChevronRight, BookOpen, Target, Award } from 'lucide-react';

interface ChapterCompletionPromptProps {
  chapterTitle: string;
  courseId?: string;
  courseTitle?: string;
  module?: number;
  chapter?: number;
  onContinueInternalAssessment: () => void;
  onNavigateExternalAssessment: () => void;
  onClose: () => void;
}

export default function ChapterCompletionPrompt({
  chapterTitle,
  courseId,
  courseTitle,
  module,
  chapter,
  onContinueInternalAssessment,
  onNavigateExternalAssessment,
  onClose,
}: ChapterCompletionPromptProps) {
  const [selectedOption, setSelectedOption] = useState<'internal' | 'external' | null>(null);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-purple-500/30 shadow-2xl shadow-purple-500/20 max-w-2xl w-full p-8 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="text-4xl mb-2">🎉</div>
          <h2 className="text-2xl font-bold text-white">Chapter Complete!</h2>
          <p className="text-gray-300">{chapterTitle}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 bg-slate-700/30 rounded-lg p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">✓</div>
            <p className="text-xs text-gray-400 mt-1">Content Watched</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">📚</div>
            <p className="text-xs text-gray-400 mt-1">Ready to Test</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">🚀</div>
            <p className="text-xs text-gray-400 mt-1">Level Up</p>
          </div>
        </div>

        {/* Assessment Options */}
        <div className="space-y-3">
          <p className="text-sm font-semibold text-gray-300 mb-4">Choose your assessment:</p>

          {/* Internal Assessment */}
          <button
            onClick={() => setSelectedOption('internal')}
            className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
              selectedOption === 'internal'
                ? 'border-purple-500 bg-purple-500/10'
                : 'border-slate-600 bg-slate-700/50 hover:border-purple-500/50'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="text-2xl flex-shrink-0 mt-1">📝</div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">Chapter Assessment</h3>
                <p className="text-sm text-gray-400 mt-1">
                  Quick questions to reinforce what you learned in this chapter
                </p>
              </div>
              {selectedOption === 'internal' && <ChevronRight className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />}
            </div>
          </button>

          {/* External Assessment */}
          {courseId && module !== undefined && chapter !== undefined && (
            <button
              onClick={() => setSelectedOption('external')}
              className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                selectedOption === 'external'
                  ? 'border-blue-500 bg-blue-500/10'
                  : 'border-slate-600 bg-slate-700/50 hover:border-blue-500/50'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl flex-shrink-0 mt-1">🎯</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white">Full Course Assessment</h3>
                  <p className="text-sm text-gray-400 mt-1">
                    Comprehensive assessment with multiple chapters and question types
                  </p>
                </div>
                {selectedOption === 'external' && <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />}
              </div>
            </button>
          )}

          {/* Skip for Now */}
          <button
            onClick={onClose}
            className="w-full p-3 rounded-lg border border-slate-600 bg-slate-700/50 hover:bg-slate-600 text-gray-300 text-sm transition-colors"
          >
            Skip for Now
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-slate-700">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-sm transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              if (selectedOption === 'internal') {
                onContinueInternalAssessment();
              } else if (selectedOption === 'external') {
                onNavigateExternalAssessment();
              }
            }}
            disabled={!selectedOption}
            className={`flex-1 px-4 py-2 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
              selectedOption
                ? selectedOption === 'internal'
                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-50'
            }`}
          >
            Continue <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Info Message */}
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 text-xs text-blue-200">
          <p>
            💡 <strong>Tip:</strong> Complete assessments to reinforce learning and track your progress!
          </p>
        </div>
      </div>
    </div>
  );
}
