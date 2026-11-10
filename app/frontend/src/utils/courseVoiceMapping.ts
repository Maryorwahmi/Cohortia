/**
 * courseVoiceMapping.ts
 * 
 * Utility for mapping courses to their assigned narrator voices.
 * Loads the centralized course-voices.json mapping.
 * 
 * Created by CaptainCode
 */

interface CourseVoiceAssignment {
  label: string;
}

let cachedVoiceMapping: Record<string, CourseVoiceAssignment> | null = null;

export function isMicrosoftEdge(): boolean {
  return typeof navigator !== "undefined" && /\bEdg(?:A|iOS)?\//i.test(navigator.userAgent);
}

/**
 * Load course voice assignments from generated JSON
 */
export async function loadCourseVoiceMapping(): Promise<Record<string, CourseVoiceAssignment>> {
  if (cachedVoiceMapping) {
    return cachedVoiceMapping;
  }

  const response = await fetch('/course-voices.json');
  if (!response.ok) {
    throw new Error(`Could not load course-voices.json: ${response.status} ${response.statusText}`);
  }

  const data: unknown = await response.json();
  if (!data || typeof data !== 'object' || !('courseVoices' in data)) {
    throw new Error('course-voices.json does not contain course voice assignments');
  }

  const courseVoices = data.courseVoices;
  if (!courseVoices || typeof courseVoices !== 'object' || Array.isArray(courseVoices)) {
    throw new Error('course-voices.json contains invalid course voice assignments');
  }

  const assignments: Record<string, CourseVoiceAssignment> = {};
  for (const [courseId, assignment] of Object.entries(courseVoices)) {
    if (!assignment || typeof assignment !== 'object' || !('label' in assignment) || typeof assignment.label !== 'string') {
      throw new Error(`course-voices.json contains an invalid assignment for ${courseId}`);
    }
    assignments[courseId] = { label: assignment.label };
  }

  cachedVoiceMapping = assignments;
  return cachedVoiceMapping;
}

/**
 * Get the assigned voice for a course
 */
export async function getAssignedVoiceForCourse(courseId: string): Promise<any | null> {
  const mapping = await loadCourseVoiceMapping();
  return mapping[courseId] || null;
}

/**
 * Resolve only the voice assigned to this course. If it is not installed,
 * narration stays silent rather than substituting a different voice.
 */
export async function resolveCourseNarratorVoice(
  courseId: string,
  allVoices: SpeechSynthesisVoice[],
): Promise<SpeechSynthesisVoice> {
  const assigned = await getAssignedVoiceForCourse(courseId);
  if (!assigned) {
    throw new Error(`No assigned narrator voice is configured for course ${courseId}`);
  }

  const assignedMatch = findBrowserVoiceByName(assigned.label, allVoices);
  if (!assignedMatch) {
    throw new Error(`Assigned narrator voice "${assigned.label}" is not available in this browser`);
  }
  return assignedMatch;
}

/**
 * Find a browser voice by name (handles variations like "Microsoft Ava" vs just "Ava")
 */
export function findBrowserVoiceByName(
  voiceLabel: string,
  allVoices: SpeechSynthesisVoice[]
): SpeechSynthesisVoice | null {
  if (!voiceLabel || allVoices.length === 0) return null;

  const assignedName = voiceLabel.split("(")[0].trim().toLowerCase();
  if (!assignedName) return null;
  const exactName = assignedName.replace(/[^a-z0-9]/g, "");

  const candidates = allVoices
    .map((voice) => {
      const source = `${voice.name} ${voice.voiceURI}`.toLowerCase();
      const normalized = source.replace(/[^a-z0-9]/g, "");
      const microsoftNamePrefix = `microsoft${exactName}`;
      let score = 0;

      // Edge calls the installed voices "Microsoft Emma Online" or
      // "Microsoft EmmaMultilingual Online", rather than the Azure-style
      // label stored in course-voices.json. Both forms are the same narrator.
      if (normalized.startsWith(microsoftNamePrefix)) score += 100;
      if (normalized.includes(exactName)) score += 40;
      if (/microsoft/.test(source)) score += 20;
      if (/(natural|online|neural|multilingual)/.test(source)) score += 10;
      if (voice.lang.toLowerCase().startsWith("en")) score += 5;
      return { voice, score };
    })
    .filter((candidate) => candidate.score >= 40)
    .sort((left, right) => right.score - left.score || left.voice.name.localeCompare(right.voice.name));

  return candidates[0]?.voice || null;
}
