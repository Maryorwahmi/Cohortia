/**
 * courseVoiceMapping.ts
 * 
 * Utility for mapping courses to their assigned narrator voices.
 * Loads the centralized course-voices.json mapping.
 * 
 * Created by CaptainCode
 */

let cachedVoiceMapping: Record<string, any> | null = null;

/**
 * Load course voice assignments from generated JSON
 */
export async function loadCourseVoiceMapping(): Promise<Record<string, any>> {
  if (cachedVoiceMapping) {
    return cachedVoiceMapping;
  }

  try {
    const response = await fetch('/course-voices.json');
    if (!response.ok) {
      console.warn('Could not load course-voices.json, will use browser voice selection');
      return {};
    }
    const data = await response.json();
    cachedVoiceMapping = data.courseVoices || {};
    return cachedVoiceMapping;
  } catch (error) {
    console.warn('Error loading course voice mapping:', error);
    return {};
  }
}

/**
 * Get the assigned voice for a course
 */
export async function getAssignedVoiceForCourse(courseId: string): Promise<any | null> {
  const mapping = await loadCourseVoiceMapping();
  return mapping[courseId] || null;
}

/**
 * Resolve one deterministic browser voice for every course surface.
 * Read Mode, Practical Mode, and sandbox narration must all call this so a
 * missing installed voice falls back in the same way everywhere.
 */
export async function resolveCourseNarratorVoice(
  courseId: string,
  allVoices: SpeechSynthesisVoice[],
): Promise<SpeechSynthesisVoice | null> {
  const englishVoices = allVoices.filter((voice) => voice.lang.toLowerCase().startsWith("en"));
  const assigned = await getAssignedVoiceForCourse(courseId);
  const assignedMatch = assigned ? findBrowserVoiceByName(assigned.label, englishVoices) : null;
  return assignedMatch
    || englishVoices[0]
    || allVoices[0]
    || null;
}

/**
 * Find a browser voice by name (handles variations like "Microsoft Ava" vs just "Ava")
 */
export function findBrowserVoiceByName(
  voiceLabel: string,
  allVoices: SpeechSynthesisVoice[]
): SpeechSynthesisVoice | null {
  if (!voiceLabel || allVoices.length === 0) return null;

  // Extract key words from the voice label (e.g., "Ava (US Neural HD)" -> ["Ava", "US"])
  const labelParts = voiceLabel.toLowerCase().split(/[\s()]/);

  // Try exact match first
  let match = allVoices.find((v) => v.name.toLowerCase().includes(voiceLabel.toLowerCase()));
  if (match) return match;

  // Try partial matches - look for voices that contain key words
  for (const part of labelParts) {
    if (part.length > 2) {
      match = allVoices.find((v) => v.name.toLowerCase().includes(part));
      if (match) return match;
    }
  }

  // Fallback: try to find any "Online (Natural)" Microsoft voice
  match = allVoices.find((v) => 
    v.name.toLowerCase().includes('microsoft') && 
    (v.name.includes('Online') || v.name.includes('Natural'))
  );
  if (match) return match;

  return null;
}
