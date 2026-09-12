import { useState } from 'react';

interface Question {
  id: string;
  type: string;
  question: string;
  explanation: string;
  options?: string[] | null;
  correctOption?: number | null;
  language?: string | null;
  code?: string | null;
  expectedOutput?: string | null;
}

interface Props {
  question: Question;
  answer: any;
  onAnswer: (answer: any) => void;
}

export default function QuestionDisplay({ question, answer, onAnswer }: Props) {
  const [showExplanation, setShowExplanation] = useState(false);

  const renderQuestion = () => {
    switch (question.type) {
      case 'multiple-choice':
        return (
          <div className="space-y-6">
            <div>
              <p className="text-lg text-white font-medium mb-6">{question.question}</p>
            </div>

            <div className="space-y-3">
              {question.options?.map((option, idx) => (
                <label
                  key={idx}
                  className="flex items-start gap-3 p-4 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 hover:border-purple-500 rounded-lg cursor-pointer transition group"
                >
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={idx}
                    checked={answer === idx}
                    onChange={() => onAnswer(idx)}
                    className="mt-1 w-4 h-4 accent-purple-500 cursor-pointer flex-shrink-0"
                  />
                  <span className="text-gray-200 group-hover:text-white transition flex-1">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>
        );

      case 'case-study':
        return (
          <div className="space-y-6">
            <div className="bg-slate-700/30 border border-slate-600 rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-300">{question.question}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Your Answer:
              </label>
              <textarea
                value={answer || ''}
                onChange={(e) => onAnswer(e.target.value)}
                placeholder="Write your answer here..."
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 min-h-40 resize-none"
              />
            </div>

            <div className="text-sm text-gray-400">
              <p>💡 This is a case study question. Share your analysis, reasoning, and solution approach.</p>
            </div>
          </div>
        );

      case 'code-challenge':
        return (
          <div className="space-y-6">
            <div>
              <p className="text-lg text-white font-medium mb-4">{question.question}</p>
            </div>

            {question.code && (
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-300">
                  Starter Code ({question.language || 'text'}):
                </p>
                <pre className="bg-slate-700/50 border border-slate-600 rounded-lg p-4 overflow-x-auto whitespace-pre text-sm text-green-400 font-mono">
                  {question.code}
                </pre>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Your Solution:
              </label>
              <textarea
                value={answer || ''}
                onChange={(e) => onAnswer(e.target.value)}
                placeholder="Write your solution here..."
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 min-h-48 resize-none font-mono text-sm"
              />
            </div>
          </div>
        );

      case 'code-output':
      case 'code':
        return (
          <div className="space-y-6">
            <div>
              <p className="text-lg text-white font-medium mb-4">{question.question}</p>
            </div>

            {question.code && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-300">
                    Code ({question.language || 'text'}):
                  </p>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(question.code!);
                    }}
                    className="text-xs text-purple-400 hover:text-purple-300 transition"
                  >
                    📋 Copy
                  </button>
                </div>
                <pre className="bg-slate-700/50 border border-slate-600 rounded-lg p-4 overflow-x-auto whitespace-pre text-sm text-green-400 font-mono">
                  {question.code}
                </pre>
              </div>
            )}

            {question.expectedOutput && (
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-300">Expected Output:</p>
                <pre className="bg-slate-700/50 border border-slate-600 rounded-lg p-3 font-mono text-sm text-blue-400 max-h-32 overflow-y-auto">
                  {question.expectedOutput}
                </pre>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                What is the output of this code?
              </label>
              <textarea
                value={answer || ''}
                onChange={(e) => onAnswer(e.target.value)}
                placeholder="Enter the output..."
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 min-h-32 resize-none font-mono text-sm"
              />
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-6">
            <p className="text-lg text-white font-medium">{question.question}</p>
            <textarea
              value={answer || ''}
              onChange={(e) => onAnswer(e.target.value)}
              placeholder="Write your answer here..."
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 min-h-32 resize-none"
            />
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Question Content */}
      {renderQuestion()}

      {/* Explanation Section */}
      {question.explanation && (
        <div className="border-t border-slate-700 pt-6 mt-6">
          <button
            onClick={() => setShowExplanation(!showExplanation)}
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition font-medium mb-3"
          >
            <span className="text-lg">{showExplanation ? '▼' : '▶'}</span>
            {showExplanation ? 'Hide' : 'Show'} Explanation
          </button>

          {showExplanation && (
            <div className="bg-purple-600/10 border border-purple-500/20 rounded-lg p-4 text-gray-200">
              <p>{question.explanation}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
