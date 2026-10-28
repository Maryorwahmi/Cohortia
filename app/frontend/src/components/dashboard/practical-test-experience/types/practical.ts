export type PracticalType = 'c_program' | 'terminal' | 'sql' | 'binary_search' | 'sorting' | 'pointers' | 'scenario' | 'cloud' | 'script';

export interface PredictionOption {
  id: string;
  label: string;
  isCorrect: boolean;
  feedback: string;
}

export interface PredictionQuestion {
  id: string;
  prompt: string;
  options: PredictionOption[];
}

export interface WalkthroughStep {
  stepNumber: number;
  title: string;
  codeSnippet?: string; // Explicit codeSnippet parsed by WalkthroughPanel
  codeOrText: string;
  activeLineIndex?: number;
  activeBlockRange?: [number, number]; // [startLineIndex, endLineIndex]
  callout: string;
  calloutType?: 'info' | 'tip' | 'warning';
  narration: string;
  timestamp: number; // in seconds
  predictionQuestion?: PredictionQuestion;
  simulationSnippet?: {
    command?: string;
    output?: string;
    actionNote?: string;
  };
}

export interface PracticalFile {
  name: string;
  folder: string;
  initialContent: string;
  language: 'text' | 'python' | 'json' | 'yaml';
  readOnly?: boolean;
}

export interface PracticalTask {
  id: string;
  title: string;
  description: string;
  criteria: string;
  hints: string[];
}

export interface DiagnosticFinding {
  id: string;
  level: 'pass' | 'warn' | 'fail';
  category: string;
  title: string;
  detail: string;
  lineRef?: number;
  suggestedAction: string;
}

export interface DomainEvaluatorResult {
  score: number;
  status: 'passed' | 'revision_needed' | 'untested';
  domain: 'algorithm' | 'repl' | 'script' | 'cloud' | 'c_program' | 'scenario';
  summary: string;
  findings: DiagnosticFinding[];
  nextActions: string[];
}

export interface CloudResource {
  id: string;
  name: string;
  service: 'Cloud Run' | 'Cloud Storage' | 'Cloud SQL' | 'Cloud IAM' | 'Cloud Build';
  status: 'READY' | 'DEPLOYING' | 'CONFIGURING' | 'STOPPED' | 'ERROR';
  region: string;
  endpoint?: string;
  trafficShare?: string;
  updatedAt: string;
  logs: string[];
  metrics?: {
    invocations: number;
    latencyMs: number;
    errorRate: string;
  };
}

export interface InstructorPersona {
  id: string;
  name: string;
  title: string;
  role: string;
  teachingStyle: string;
  bio: string;
  voiceGender: 'female' | 'male';
  speechPitch: number;
  speechRate: number;
  tagline: string;
  badgeColor: string;
}

export interface ClassroomOrientation {
  classroomBadge: string; // e.g. "16:9 HD CLASSROOM"
  moduleBadge: string; // e.g. "MODULE 1"
  chapterBreadcrumb: string; // e.g. "CHAPTER 1.2"
  topicBreadcrumb: string; // e.g. "HELLO, WORLD!"
  mainTitle: string;
  subtitle: string;
  inThisLesson: string;
  whyItMatters: string;
  quickOrientation: string[];
  exploreKeyTopics: Array<{
    title: string;
    description: string;
  }>;
  conceptMap: {
    title: string;
    subtitle: string;
    nodes: Array<{
      label: string;
      value: string;
    }>;
  };
  gettingReady: string;
}

export type PracticalCategory = 'cloud_console' | 'scenario_design' | 'terminal_coding' | 'research_analysis';

export interface ScenarioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  estimate?: number;
  status?: 'backlog' | 'in_progress' | 'consensus' | 'completed';
  tags?: string[];
  assignedTo?: string;
  timeSlot?: string;
}

export interface ResearchSourceDoc {
  id: string;
  title: string;
  type: 'datasheet' | 'timeseries' | 'regulation' | 'case_study';
  date: string;
  summary: string;
  content: string;
  dataPoints?: Array<{ label: string; value: string | number; change?: string }>;
}

export interface PracticalWorkspaceData {
  type: 'terminal' | 'cloud' | 'scenario' | 'research';
  terminal?: Record<string, unknown>;
  cloud?: {
    provider?: string;
    region?: string;
    initialResources?: Record<string, unknown>[];
    allowedActions?: Record<string, unknown>[];
    forbiddenActions?: string[];
    commandTemplates?: Record<string, unknown>[];
    expectedState?: Record<string, unknown>[];
    verificationChecks?: Record<string, unknown>[];
  };
  scenario?: {
    subtype?: string;
    context?: string;
    items?: Record<string, unknown>[];
    options?: Record<string, unknown>[];
    constraints?: string[];
    decisionFields?: Record<string, unknown>[];
    outcomeRules?: Record<string, unknown>[];
    rubric?: Record<string, unknown>[];
    exportArtifact?: Record<string, unknown>;
  };
  research?: {
    investigationQuestion?: string;
    hypothesisPrompt?: string;
    sources?: Record<string, unknown>[];
    datasets?: Record<string, unknown>[];
    requiredObservations?: Record<string, unknown>[];
    analysisOperations?: Record<string, unknown>[];
    calculationRules?: Record<string, unknown>[];
    conclusionPrompt?: string;
    evidenceRequirements?: Record<string, unknown>[];
    rubric?: Record<string, unknown>[];
  };
}

export interface PracticalManifest {
  id: string;
  title: string;
  category: string;
  categoryType: PracticalCategory;
  courseName: string;
  moduleName: string;
  type: PracticalType;
  durationSeconds: number;
  lessonLabel: string;
  objective: string;
  realWorldContext: string;
  classroom: ClassroomOrientation;
  missionStory: {
    roleTitle: string;
    scenarioOverview: string;
    deliverables: string[];
    xpReward: number;
  };
  files: PracticalFile[];
  walkthroughSteps: WalkthroughStep[];
  tasks: PracticalTask[];
  initialCloudResources?: CloudResource[];
  scenarioItems?: ScenarioItem[];
  researchSources?: ResearchSourceDoc[];
  workspace?: PracticalWorkspaceData;
}
