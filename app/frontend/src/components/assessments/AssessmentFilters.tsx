import { useState } from 'react';

interface Props {
  levels: string[];
  categories: string[];
  selectedLevel: string;
  selectedCategory: string;
  searchQuery: string;
  onLevelChange: (level: string) => void;
  onCategoryChange: (category: string) => void;
  onSearchChange: (query: string) => void;
  onClearFilters: () => void;
}

export default function AssessmentFilters({
  levels,
  categories,
  selectedLevel,
  selectedCategory,
  searchQuery,
  onLevelChange,
  onCategoryChange,
  onSearchChange,
  onClearFilters,
}: Props) {
  const [showFilters, setShowFilters] = useState(false);

  const hasActiveFilters = selectedLevel || selectedCategory || searchQuery;

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
        />
        <span className="absolute right-3 top-3 text-gray-500">🔍</span>
      </div>

      {/* Filter Toggle Button */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white hover:bg-slate-700 transition"
        >
          <span>⚙️</span>
          <span>Filters</span>
          {hasActiveFilters && (
            <span className="ml-2 px-2 py-1 bg-purple-600 text-xs rounded-full">
              {[selectedLevel, selectedCategory, searchQuery].filter(Boolean).length}
            </span>
          )}
        </button>

        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="px-4 py-2 text-sm text-gray-400 hover:text-gray-200 transition"
          >
            ✕ Clear all
          </button>
        )}
      </div>

      {/* Expandable Filters */}
      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
          {/* Level Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Difficulty Level
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="level"
                  value=""
                  checked={!selectedLevel}
                  onChange={() => onLevelChange('')}
                  className="w-4 h-4 accent-purple-500"
                />
                <span className="text-gray-300">All Levels</span>
              </label>
              {levels.map((level) => (
                <label key={level} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="level"
                    value={level}
                    checked={selectedLevel === level}
                    onChange={() => onLevelChange(level)}
                    className="w-4 h-4 accent-purple-500"
                  />
                  <span className="text-gray-300 capitalize">{level}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Category
            </label>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value=""
                  checked={!selectedCategory}
                  onChange={() => onCategoryChange('')}
                  className="w-4 h-4 accent-purple-500"
                />
                <span className="text-gray-300">All Categories</span>
              </label>
              {categories.map((category) => (
                <label key={category} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={selectedCategory === category}
                    onChange={() => onCategoryChange(category)}
                    className="w-4 h-4 accent-purple-500"
                  />
                  <span className="text-gray-300 capitalize text-sm">{category}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
