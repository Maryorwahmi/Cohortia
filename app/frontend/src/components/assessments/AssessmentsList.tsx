import { Link } from 'react-router-dom';

interface Assessment {
  courseId: string;
  courseTitle: string;
  level: string;
  category: string;
  totalChapters: number;
  totalQuestions: number;
}

interface Props {
  assessments: Assessment[];
}

const levelColors: Record<string, { bg: string; text: string; icon: string }> = {
  beginner: { bg: 'bg-green-500/20', text: 'text-green-400', icon: '🌱' },
  intermediate: { bg: 'bg-yellow-500/20', text: 'text-yellow-400', icon: '📚' },
  advanced: { bg: 'bg-red-500/20', text: 'text-red-400', icon: '🚀' },
};

export default function AssessmentsList({ assessments }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {assessments.map((course) => {
        const levelConfig = levelColors[course.level.toLowerCase()] || levelColors.beginner;

        return (
          <Link
            key={course.courseId}
            to={`/assessments/${course.courseId}`}
            className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden border border-slate-700 hover:border-purple-500 transition-all hover:shadow-xl hover:shadow-purple-500/20"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/10 group-hover:to-blue-600/10 transition-all" />

            <div className="relative p-6">
              {/* Level Badge */}
              <div className={`inline-block px-3 py-1 rounded-full ${levelConfig.bg} mb-4`}>
                <span className={`text-sm font-semibold ${levelConfig.text}`}>
                  {levelConfig.icon} {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition line-clamp-2">
                {course.courseTitle}
              </h3>

              {/* Category */}
              <p className="text-sm text-gray-400 mb-4 capitalize">{course.category}</p>

              {/* Stats */}
              <div className="flex items-center justify-between text-sm text-gray-300 mb-4">
                <div className="flex items-center gap-1">
                  <span>📖</span>
                  <span>{course.totalChapters} chapters</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>❓</span>
                  <span>{course.totalQuestions} questions</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-700 rounded-full h-1 mb-4 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-purple-500 to-blue-500 h-full transition-all"
                  style={{ width: '0%' }}
                />
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between">
                <span className="text-purple-400 font-medium group-hover:text-purple-300 transition">
                  Start Assessment
                </span>
                <span className="text-xl group-hover:translate-x-1 transition">→</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
