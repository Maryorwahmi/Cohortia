export interface ManifestDesignSystem {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    textPrimary: string;
    textSecondary: string;
    success: string;
    warning: string;
    error: string;
  };
  typography: {
    heading: string;
    body: string;
    mono: string;
  };
  mood: string;
}

export interface AnimationPreset {
  enter?: string;
  exit?: string;
  duration?: number;
  stagger?: number;
}

export interface ManifestUiShell {
  playerMode: "cinematic" | "compact";
  showPlaylist: boolean;
  controlStyle?: string;
}

export interface ManifestCourseOverview {
  headline: string;
  summary: string;
  audience: string;
  prerequisites: string;
  skills: string[];
}

export interface ManifestCodeBlock {
  language: string;
  snippet: string;
  highlightLines?: number[];
}

export interface DiagramNode {
  id: string;
  label: string;
  radius: number;
  cx: number;
  cy: number;
  color: string;
  stroke: string;
  icon?: string;
}

export interface DiagramConnector {
  from: string;
  to: string;
  label?: string;
}

export interface DiagramData {
  type: string;
  nodes: DiagramNode[];
  connectors?: DiagramConnector[];
}

export interface WorksheetRubric {
  keywords: string[];
  referenceGradingExplanations?: string;
}

export interface WorksheetConfig {
  placeholder?: string;
  minCharacters?: number;
  aiGradingRubric?: WorksheetRubric;
}

export interface VisualElement {
  id: string;
  type: "text" | "shape" | "icon" | "path" | "chart" | "node" | "codeLine";
  props?: { [k: string]: any };
}

export interface ManifestVisual {
  layout: string;
  kind?: "animated_diagram" | "code_editor" | "text_card" | "hero_image" | "comparison" | "worksheet";
  elements?: VisualElement[];
  heading: string;
  subheading?: string;
  bullets?: string[];
  code?: ManifestCodeBlock;
  media?: { type: "code" | "diagram" | "image" | null; language?: string | null; content?: string | null };
  diagram?: string | DiagramData | null;
  imagePrompt?: string | null;
  style?: { background?: string; accent?: string; foreground?: string };
  motion?: { enter?: string; stagger?: number; duration?: number; drawOrder?: string[] };
  flow?: string[];
  decorations?: string[];
  designNotes?: string;
  worksheetConfig?: WorksheetConfig;
}

export interface NarrationBlock {
  text: string;
  tone?: "friendly_teacher" | "expert" | "concise";
  pace?: "slow" | "medium" | "fast";
}

export interface VoiceCue {
  elementId: string;
  cueAtPercent: number;
}

export interface TimingBlock {
  duration: number;
  sync: "voice" | "timer" | "manual";
  voiceCues?: VoiceCue[];
}

export interface Interaction {
  type: "none" | "click_to_continue" | "confirm" | "input_code" | "choice_poll" | "input_reflection";
  prompt?: string;
  required?: boolean;
  options?: Array<{ label?: string; text?: string } | string>;
  starter?: string;
}

export interface ManifestScene {
  sceneId: string;
  type: "concept_intro" | "concept" | "animated_diagram" | "code_demo" | "code" | "interactive_pause" | "click_to_reveal" | "poll" | "worksheet" | "summary" | "assessment_cta";
  layout: ManifestVisual["layout"];
  visual: ManifestVisual;
  narration: NarrationBlock | string;
  timing: TimingBlock;
  duration?: number;
  interactions?: Interaction[];
}

export interface ManifestHandsOn {
  title: string;
  instructions: string;
  starterCode?: string | null;
  expectedOutput?: string;
  checklist: string[];
}

export interface ManifestQuizOption {
  label: string;
  text: string;
}

export interface ManifestQuizQuestion {
  question: string;
  options: ManifestQuizOption[];
  answer: string;
  explanation: string;
}

export interface ManifestAssessment {
  type: "quiz" | "code-challenge";
  questions?: ManifestQuizQuestion[];
  instructions?: string;
  starterCode?: string;
  testCases?: { input: string; expectedOutput: string }[];
}

export interface ManifestChapter {
  index: string;
  title: string;
  learningObjectives: string[];
  keyConcepts: string[];
  scenes: ManifestScene[];
  handsOn: ManifestHandsOn;
  assessment: ManifestAssessment;
}

export interface ManifestModule {
  index: number;
  title: string;
  goal: string;
  chapters: ManifestChapter[];
}

export interface CourseManifest {
  courseId: string;
  title: string;
  designSystem: ManifestDesignSystem & { animationPresets?: { [k: string]: AnimationPreset }; uiShell?: ManifestUiShell };
  courseOverview: ManifestCourseOverview;
  modules: ManifestModule[];
}

interface CatalogEntry {
  id: string;
  title: string;
  category: string;
  level: string;
  isCodeBased?: boolean;
  language?: string | null;
  manifestUrl?: string;
}

let catalogCache: { courses: CatalogEntry[] } | null = null;

export async function loadCatalog(): Promise<{ courses: CatalogEntry[] }> {
  if (catalogCache) return catalogCache;
  try {
    const res = await fetch('/course-manifests/catalog.json');
    if (!res.ok) throw new Error('Failed to load catalog');
    catalogCache = (await res.json()) as { courses: CatalogEntry[] };
    return catalogCache;
  } catch {
    return { courses: [] };
  }
}

export async function getManifestUrl(courseId: string): Promise<string | null> {
  const catalog = await loadCatalog();
  const entry = catalog.courses.find((c) => c.id === courseId);
  return entry?.manifestUrl || null;
}

export async function loadManifest(courseId: string): Promise<CourseManifest | null> {
  const url = await getManifestUrl(courseId);
  if (!url) return null;
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return normalizeCohortiaManifest((await res.json()) as CourseManifest);
  } catch {
    return null;
  }
}

/**
 * Normalize a manifest from the Animation generator format into the shape
 * expected by the main Cohortia ManifestLessonPlayer. This keeps both the
 * raw Animation manifests and the existing Cohortia manifests playable.
 */
function normalizeCohortiaManifest(raw: any): CourseManifest {
  const m = (typeof raw === 'object' && raw !== null ? JSON.parse(JSON.stringify(raw)) : {}) as any;

  // Design system
  const ds = (m.designSystem ||= {});
  ds.name ||= ds.themeName || 'Cohortia';
  ds.colors ||= {};
  ds.typography ||= {};
  ds.typography.heading ||= ds.typography.headingFont || 'ui-sans-serif, system-ui';
  ds.typography.body ||= ds.typography.bodyFont || 'ui-sans-serif, system-ui';
  ds.typography.mono ||= ds.typography.monoFont || 'ui-monospace, monospace';
  ds.mood ||= '';

  // Animation / UI shell defaults
  ds.animationPresets ||= {};
  ds.uiShell ||= { playerMode: 'cinematic', showPlaylist: true };

  // Course overview
  const overview = (m.courseOverview ||= {});
  overview.headline ||= m.title || 'Course';
  overview.summary ||= '';
  overview.audience ||= '';
  overview.prerequisites ||= '';
  overview.skills ||= [];

  // Modules → chapters → scenes
  for (const mod of m.modules || []) {
    for (const chapter of mod.chapters || []) {
      for (const scene of chapter.scenes || []) {
        const duration = typeof scene.duration === 'number' ? scene.duration : 15;
        scene.duration = duration;
        scene.timing = {
          duration,
          sync: scene.timing?.sync || scene.sync || 'voice',
          voiceCues: scene.timing?.voiceCues || scene.voiceCues || [],
        };

        // Normalize narration to a NarrationBlock while keeping the original text
        if (typeof scene.narration === 'string') {
          scene.narration = {
            text: scene.narration,
            tone: 'friendly_teacher',
            pace: 'medium',
          };
        }

        // Visual normalization
        const v = (scene.visual ||= {});
        v.layout ||= 'hero';
        v.kind ||= sceneTypeToKind(scene.type);
        v.heading ||= scene.sceneId || '';
        v.bullets ||= [];

        // Move animation-only visual fields into the shape the player reads
        const style = (v.style ||= {});
        if (v.background && !style.background) style.background = v.background;
        if (v.backgroundAccent && !style.accent) style.accent = v.backgroundAccent;
        v.style = style;

        const motion = (v.motion ||= {});
        if (v.animation && !motion.enter) motion.enter = v.animation;
        if (v.transition && !motion.exit) motion.exit = v.transition;
        motion.enter ||= 'fade-in';
        motion.duration ??= 0.5;
        motion.stagger ??= 0.12;
        v.motion = motion;

        // If the diagram is a structured object, keep it intact so the rich
        // DiagramRenderer can use it. Store a JSON copy in media for backward
        // compatibility with any consumer that reads media.content.
        if (v.diagram && typeof v.diagram === 'object') {
          v.media = {
            type: 'diagram',
            language: null,
            content: JSON.stringify(v.diagram),
          };
        }

        // Ensure worksheet scenes pause for reflection with a proper input interaction.
        if (scene.type === 'worksheet' && (!scene.interactions || scene.interactions.length === 0)) {
          scene.interactions = [
            { type: 'input_reflection', prompt: 'Type your reflection before continuing', required: true },
          ];
        }

        // Ensure summary / assessment scenes pause too
        if ((scene.type === 'summary' || scene.type === 'assessment-cta' || scene.type === 'assessment_cta') &&
            (!scene.interactions || scene.interactions.length === 0)) {
          scene.interactions = [
            { type: 'click_to_continue', prompt: 'Tap to continue', required: false },
          ];
        }

        scene.visual = v;
      }

      // Ensure chapter hands-on and assessment objects exist
      chapter.handsOn ||= {
        title: 'Practice',
        instructions: 'Complete the exercise described in this chapter.',
        starterCode: null,
        expectedOutput: '',
        checklist: [],
      };
      chapter.assessment ||= {
        type: 'quiz',
        questions: [],
      };
    }
  }

  return m as CourseManifest;
}

function sceneTypeToKind(type: string): string {
  switch (type) {
    case 'diagram':
    case 'animated_diagram':
      return 'animated_diagram';
    case 'code':
    case 'code-lab':
    case 'code_demo':
      return 'code_editor';
    case 'worksheet':
      return 'text_card';
    case 'intro':
    case 'concept_intro':
      return 'hero_image';
    case 'summary':
      return 'text_card';
    default:
      return 'text_card';
  }
}
