const roadmapLevels = new Set(['beginner', 'intermediate', 'advanced']);
const hybridLevels = {
  'beginner-intermediate': ['beginner', 'intermediate'],
  'beginner-to-intermediate': ['beginner', 'intermediate'],
  'intermediate-advanced': ['intermediate', 'advanced'],
  'intermediate-to-advanced': ['intermediate', 'advanced'],
};

export function normalizeCatalogLevel(value) {
  const normalized = String(value ?? '')
    .trim()
    .toLowerCase()
    .replace(/[–—]/g, '-')
    .replace(/\s+/g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  if (!normalized) return {matches: []};

  const matches = hybridLevels[normalized] || [normalized];
  return {matches: matches.filter((level) => roadmapLevels.has(level))};
}

export function courseMatchesRoadmapLevel(courseLevel, roadmapLevel) {
  return normalizeCatalogLevel(courseLevel).matches.includes(roadmapLevel);
}

export function canFillUniqueCourseLevelQuotas(courses, limits) {
  const slots = Object.entries(limits).flatMap(([level, quota]) =>
    Array.from({length: quota.choose}, () => level),
  );
  const courseAssignments = new Map();

  const assignSlot = (slotIndex, seenCourses) => {
    const level = slots[slotIndex];
    for (let courseIndex = 0; courseIndex < courses.length; courseIndex += 1) {
      if (seenCourses.has(courseIndex) || !courseMatchesRoadmapLevel(courses[courseIndex].level, level)) continue;
      seenCourses.add(courseIndex);
      const existingSlot = courseAssignments.get(courseIndex);
      if (existingSlot === undefined || assignSlot(existingSlot, seenCourses)) {
        courseAssignments.set(courseIndex, slotIndex);
        return true;
      }
    }
    return false;
  };

  return slots.every((_, slotIndex) => assignSlot(slotIndex, new Set()));
}
