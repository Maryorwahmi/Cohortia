/**
 * courseVoiceMapping.ts
 * 
 * Utility for mapping courses to their assigned narrator voices.
 * Loads the centralized course-voices.json mapping.
 * 
 * Created by CaptainCode
 */

let cachedVoiceMapping: Record<string, any> | null = null;

export function isMicrosoftEdge(): boolean {
  return typeof navigator !== "undefined" && /\bEdg(?:A|iOS)?\//i.test(navigator.userAgent);
}

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
  const assigned = await getAssignedVoiceForCourse(courseId);
  const assignedMatch = assigned ? findBrowserVoiceByName(assigned.label, allVoices) : null;
  if (assigned && !assignedMatch) {
    console.warn(
      `Assigned voice "${assigned.label}" is unavailable for course "${courseId}".`,
    );
  }
  return assignedMatch || findBestBrowserVoice(allVoices);
}

/**
 * Pick a stable, high-quality English narrator when the course's Microsoft
 * voice is not installed. This deliberately avoids the browser's arbitrary
 * default selection.
 */
export function findBestBrowserVoice(allVoices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  if (!allVoices.length) return null;

  const score = (voice: SpeechSynthesisVoice) => {
    const name = `${voice.name} ${voice.voiceURI}`.toLowerCase();
    let value = voice.lang.toLowerCase().startsWith("en") ? 100 : 0;
    if (/microsoft/.test(name) && /(natural|online|neural|multilingual)/.test(name)) value += 80;
    else if (/google/.test(name)) value += 55;
    else if (/(enhanced|premium|samantha)/.test(name)) value += 45;
    if (voice.default) value += 15;
    if (voice.lang.toLowerCase() === "en-us") value += 10;
    return value;
  };

  return [...allVoices]
    .sort((left, right) => score(right) - score(left) || left.name.localeCompare(right.name))[0] || null;
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
