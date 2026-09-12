import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

interface Chapter {
  id: string;
  module: number;
  chapter: number;
  moduleTitle: string;
  chapterTitle: string;
  totalQuestions: number;
  questionsWithOptions: number;
  questionsWithCode: number;
  caseStudyQuestions: number;
}

interface Course {
  courseTitle: string;
  level: string;
  category: string;
}

interface CourseData {
  success: boolean;
  course: Course;
  chapters: Chapter[];
  totalChapters: number;
  totalQuestions: number;
}

export default function CourseAssessmentDetail() {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState<CourseData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/v1/assessments/${courseId}`
        );
        const data = await res.json();

        if (data.success) {
          setCourseData(data);
          setError(null);
        } else {
          setError(data.error || 'Failed to fetch course data');
        }
      } catch (err) {
        console.error('Error fetching course data:', err);
        setError('Failed to load course details');
      } finally {
        setLoading(false);
      }
    };

    if (courseId) {
      fetchCourseData();
    }
  }, [courseId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error || !courseData) {
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
            <h2 className="text-2xl font-bold text-white mb-2">Error Loading Course</h2>
            <p className="text-gray-400 mb-4">{error}</p>
            <Link
              to="/assessments"
              className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition"
            >
              Back to Assessments
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const levelColors: Record<string, string> = {
    beginner: 'bg-green-500/20 text-green-400',
    intermediate: 'bg-yellow-500/20 text-yellow-400',
    advanced: 'bg-red-500/20 text-red-400',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="mb-4 flex items-center gap-2 text-purple-100 hover:text-white transition"
          >
            ← Back
          </button>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">{courseData.course.courseTitle}</h1>
              <p className="text-purple-100 capitalize">{courseData.course.category}</p>
            </div>
            <span
              className={`px-4 py-2 rounded-full text-sm font-semibold ${
                levelColors[courseData.course.level.toLowerCase()]
              }`}
            >
              {courseData.course.level.charAt(0).toUpperCase() +
                courseData.course.level.slice(1)}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
            <p className="text-gray-400 text-sm mb-1">Modules</p>
            <p className="text-3xl font-bold text-purple-400">
              {courseData.totalChapters}
            </p>
          </div>
          <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
            <p className="text-gray-400 text-sm mb-1">Questions</p>
            <p className="text-3xl font-bold text-blue-400">
              {courseData.totalQuestions}
            </p>
          </div>
          <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 col-span-2 md:col-span-1">
            <p className="text-gray-400 text-sm mb-1">Status</p>
            <p className="text-lg font-semibold text-green-400">Not Started</p>
          </div>
        </div>

        {/* Chapters List */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Course Modules</h2>
          <div className="space-y-4">
            {courseData.chapters.map((chapter, index) => (
              <Link
                key={`${chapter.module}-${chapter.chapter}`}
                to={`/assessments/${courseId}/${chapter.module}/${chapter.chapter}`}
                className="group block bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-slate-700 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20 p-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">
                        Module {chapter.module} • Chapter {chapter.chapter}
                      </div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition">
                        {chapter.moduleTitle} - {chapter.chapterTitle}
                      </h3>
                    </div>
                  </div>
                  <span className="text-2xl group-hover:translate-x-1 transition">→</span>
                </div>

                {/* Question Types Summary */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-slate-700">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Total</p>
                    <p className="text-lg font-bold text-purple-400">
                      {chapter.totalQuestions}
                    </p>
                  </div>
                  {chapter.questionsWithOptions > 0 && (
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Multiple Choice</p>
                      <p className="text-lg font-bold text-green-400">
                        {chapter.questionsWithOptions}
                      </p>
                    </div>
                  )}
                  {chapter.questionsWithCode > 0 && (
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Code</p>
                      <p className="text-lg font-bold text-blue-400">
                        {chapter.questionsWithCode}
                      </p>
                    </div>
                  )}
                  {chapter.caseStudyQuestions > 0 && (
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Case Study</p>
                      <p className="text-lg font-bold text-yellow-400">
                        {chapter.caseStudyQuestions}
                      </p>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
