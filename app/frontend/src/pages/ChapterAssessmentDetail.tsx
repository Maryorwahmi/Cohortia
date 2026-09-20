import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QuestionDisplay from '../components/assessments/QuestionDisplay';

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

interface Assessment {
  courseTitle: string;
  module: number;
  chapter: number;
  moduleTitle: string;
  chapterTitle: string;
  level: string;
  totalQuestions: number;
}

interface ChapterData {
  success: boolean;
  assessment: Assessment;
  questions: Question[];
}

export default function ChapterAssessmentDetail() {
  const { courseId, module, chapter } = useParams<{
    courseId: string;
    module: string;
    chapter: string;
  }>();
  const navigate = useNavigate();
  const [chapterData, setChapterData] = useState<ChapterData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const fetchChapterData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/v1/assessments/${courseId}/${module}/${chapter}`
        );
        const data = await res.json();

        if (data.success) {
          setChapterData(data);
          setError(null);
        } else {
          setError(data.error || 'Failed to fetch chapter data');
        }
      } catch (err) {
        console.error('Error fetching chapter data:', err);
        setError('Failed to load chapter questions');
      } finally {
        setLoading(false);
      }
    };

    if (courseId && module && chapter) {
      fetchChapterData();
    }
  }, [courseId, module, chapter]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error || !chapterData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition"
          >
            ← Back
          </button>
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-white mb-2">Error Loading Chapter</h2>
            <p className="text-gray-400 mb-4">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = chapterData.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / chapterData.questions.length) * 100;

  const handleAnswer = (questionId: string, answer: any) => {
    setAnswers({
      ...answers,
      [questionId]: answer,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < chapterData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="mb-4 flex items-center gap-2 text-purple-100 hover:text-white transition"
          >
            ← Back
          </button>
          <div>
            <h1 className="text-3xl font-bold mb-1">
              {chapterData.assessment.moduleTitle} - {chapterData.assessment.chapterTitle}
            </h1>
            <p className="text-purple-100">{chapterData.assessment.courseTitle}</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {showResults ? (
          // Results View
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-lg p-8 text-center border border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-2">Assessment Completed!</h2>
              <p className="text-gray-400 mb-6">
                You answered {Object.keys(answers).length} out of{' '}
                {chapterData.questions.length} questions
              </p>

              <div className="flex gap-4 justify-center mb-8">
                <button
                  onClick={() => {
                    setCurrentQuestionIndex(0);
                    setShowResults(false);
                  }}
                  className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition"
                >
                  Review Answers
                </button>
                <button
                  onClick={() => navigate(-1)}
                  className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition"
                >
                  Back to Course
                </button>
              </div>
            </div>

            {/* Answer Summary */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white mb-4">Your Answers</h3>
              {chapterData.questions.map((q, idx) => {
                const userAnswer = answers[q.id];
                const isCorrect = userAnswer !== undefined;

                return (
                  <div
                    key={q.id}
                    className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg border border-slate-700"
                  >
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        userAnswer !== undefined
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-gray-500/20 text-gray-400'
                      }`}
                    >
                      {idx + 1}
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm line-clamp-1">{q.question}</p>
                    </div>
                    <span className="ml-auto">
                      {userAnswer !== undefined ? '✓' : '✕'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          // Question View
          <div>
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-medium text-gray-300">
                  Question {currentQuestionIndex + 1} of {chapterData.questions.length}
                </h3>
                <span className="text-sm text-gray-400">
                  {Math.round(progress)}% Complete
                </span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-purple-500 to-blue-500 h-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-slate-700 p-8 mb-8">
              <QuestionDisplay
                question={currentQuestion}
                answer={answers[currentQuestion.id]}
                onAnswer={(answer) => handleAnswer(currentQuestion.id, answer)}
              />
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className="px-6 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition"
              >
                ← Previous
              </button>

              <div className="flex gap-2">
                {chapterData.questions.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`w-2 h-2 rounded-full transition ${
                      idx === currentQuestionIndex
                        ? 'bg-purple-500 w-8'
                        : answers[chapterData.questions[idx].id] !== undefined
                        ? 'bg-green-500'
                        : 'bg-slate-700'
                    }`}
                  />
                ))}
              </div>

              {currentQuestionIndex === chapterData.questions.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition font-medium"
                >
                  Submit →
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition"
                >
                  Next →
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
