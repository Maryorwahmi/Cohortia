interface Stats {
  totalAssessments: number;
  totalQuestions: number;
  byLevel: Array<{ level: string; assessments: number; questions: number }>;
  byType: Array<{ type: string; count: number }>;
}

interface Props {
  stats: Stats;
}

const statIcons: Record<string, string> = {
  assessments: '📋',
  questions: '❓',
  beginner: '🌱',
  intermediate: '📚',
  advanced: '🚀',
  'case-study': '📖',
  'multiple-choice': '✓',
};

export default function AssessmentStats({ stats }: Props) {
  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div className="mb-12">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Total Assessments */}
        <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 mb-1">Total Courses</p>
              <p className="text-4xl font-bold">{formatNumber(stats.totalAssessments)}</p>
            </div>
            <div className="text-5xl opacity-30">📚</div>
          </div>
        </div>

        {/* Total Questions */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 mb-1">Total Questions</p>
              <p className="text-4xl font-bold">{formatNumber(stats.totalQuestions)}</p>
            </div>
            <div className="text-5xl opacity-30">❓</div>
          </div>
        </div>
      </div>

      {/* By Level and Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* By Level */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">By Difficulty Level</h3>
          <div className="space-y-3">
            {stats.byLevel.map((level) => (
              <div key={level.level} className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{statIcons[level.level.toLowerCase()] || '📚'}</span>
                  <div>
                    <p className="font-medium text-white capitalize">{level.level}</p>
                    <p className="text-xs text-gray-400">{level.assessments} courses</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-purple-400">{formatNumber(level.questions)}</p>
                  <p className="text-xs text-gray-400">questions</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* By Type */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Question Types</h3>
          <div className="space-y-3">
            {stats.byType.map((type) => {
              const percentage = ((type.count / stats.totalQuestions) * 100).toFixed(1);
              return (
                <div key={type.type} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">
                        {type.type === 'case-study' ? '📖' : '✓'}
                      </span>
                      <span className="text-gray-300 capitalize">{type.type.replace('-', ' ')}</span>
                    </div>
                    <span className="text-sm font-medium text-purple-400">
                      {formatNumber(type.count)} ({percentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-slate-600 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full transition-all ${
                        type.type === 'case-study'
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600'
                          : 'bg-gradient-to-r from-green-500 to-green-600'
                      }`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
