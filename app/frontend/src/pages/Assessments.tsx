import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import AssessmentsList from '../components/assessments/AssessmentsList';
import AssessmentFilters from '../components/assessments/AssessmentFilters';
import AssessmentStats from '../components/assessments/AssessmentStats';

interface Assessment {
  courseId: string;
  courseTitle: string;
  level: string;
  category: string;
  totalChapters: number;
  totalQuestions: number;
}

interface Stats {
  totalAssessments: number;
  totalQuestions: number;
  byLevel: Array<{ level: string; assessments: number; questions: number }>;
  byType: Array<{ type: string; count: number }>;
}

export default function Assessments() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [assessments, setAssessments] = useState<Assessment[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [levels, setLevels] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const selectedLevel = searchParams.get('level') || '';
  const selectedCategory = searchParams.get('category') || '';
  const searchQuery = searchParams.get('search') || '';

  // Fetch stats and filter options on mount
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true);
        const [statsRes, categoriesRes, levelsRes] = await Promise.all([
          fetch(`${import.meta.env.VITE_API_URL}/api/v1/assessments/stats/overview`),
          fetch(`${import.meta.env.VITE_API_URL}/api/v1/assessments/filter/categories`),
          fetch(`${import.meta.env.VITE_API_URL}/api/v1/assessments/filter/levels`),
        ]);

        const statsData = await statsRes.json();
        const categoriesData = await categoriesRes.json();
        const levelsData = await levelsRes.json();

        if (statsData.success) setStats(statsData.stats);
        if (categoriesData.success) setCategories(categoriesData.categories);
        if (levelsData.success) setLevels(levelsData.levels);
      } catch (err) {
        console.error('Error fetching initial data:', err);
        setError('Failed to load assessment data');
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  // Fetch assessments based on filters
  useEffect(() => {
    const fetchAssessments = async () => {
      try {
        setLoading(true);
        let url = `${import.meta.env.VITE_API_URL}/api/v1/assessments`;

        // Build query parameters
        const params = new URLSearchParams();
        if (selectedLevel) params.append('level', selectedLevel);
        if (selectedCategory) params.append('category', selectedCategory);
        if (params.toString()) {
          url = `${import.meta.env.VITE_API_URL}/api/v1/assessments/filter/by-level-category?${params}`;
        }

        const res = await fetch(url);
        const data = await res.json();

        if (data.success) {
          let filtered = data.data || data.courses || [];
          
          // Client-side search filtering
          if (searchQuery) {
            filtered = filtered.filter((course: Assessment) =>
              course.courseTitle.toLowerCase().includes(searchQuery.toLowerCase())
            );
          }

          setAssessments(filtered);
          setError(null);
        } else {
          setError(data.error || 'Failed to fetch assessments');
        }
      } catch (err) {
        console.error('Error fetching assessments:', err);
        setError('Failed to load assessments');
      } finally {
        setLoading(false);
      }
    };

    fetchAssessments();
  }, [selectedLevel, selectedCategory, searchQuery]);

  const handleLevelChange = (level: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (level) {
      newParams.set('level', level);
    } else {
      newParams.delete('level');
    }
    setSearchParams(newParams);
  };

  const handleCategoryChange = (category: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (category) {
      newParams.set('category', category);
    } else {
      newParams.delete('category');
    }
    setSearchParams(newParams);
  };

  const handleSearchChange = (query: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (query) {
      newParams.set('search', query);
    } else {
      newParams.delete('search');
    }
    setSearchParams(newParams);
  };

  const handleClearFilters = () => {
    setSearchParams(new URLSearchParams());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">CS Assessments</h1>
          <p className="text-lg text-purple-100">
            Practice with {stats?.totalQuestions.toLocaleString() || 'thousands of'} questions across{' '}
            {stats?.totalAssessments.toLocaleString() || 'thousands of'} courses
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Section */}
        {stats && <AssessmentStats stats={stats} />}

        {/* Filters Section */}
        <div className="mb-8">
          <AssessmentFilters
            levels={levels}
            categories={categories}
            selectedLevel={selectedLevel}
            selectedCategory={selectedCategory}
            searchQuery={searchQuery}
            onLevelChange={handleLevelChange}
            onCategoryChange={handleCategoryChange}
            onSearchChange={handleSearchChange}
            onClearFilters={handleClearFilters}
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500 text-red-200 rounded-lg">
            {error}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
          </div>
        )}

        {/* Assessments List */}
        {!loading && (
          <>
            <div className="mb-4">
              <p className="text-gray-300">
                Showing {assessments.length} course{assessments.length !== 1 ? 's' : ''}
              </p>
            </div>
            <AssessmentsList assessments={assessments} />
          </>
        )}

        {/* Empty State */}
        {!loading && assessments.length === 0 && !error && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-white mb-2">No assessments found</h3>
            <p className="text-gray-400 mb-4">
              Try adjusting your filters or search terms
            </p>
            <button
              onClick={handleClearFilters}
              className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
