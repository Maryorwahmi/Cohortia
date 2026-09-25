/**
 * Experience profiles keep generation and presentation aligned.  A practical
 * can still use the common transport schema, but every profile declares the
 * interactions and evidence its learner experience requires.
 */
export const EXPERIENCE_PROFILES = {
  terminal_coding_lab: {
    category: "Terminal Coding Lab",
    defaultMode: "code_lab",
    workspaceFamily: "editor_terminal",
    learnerArtifact: "working code and verified output",
    requiredUi: ["mission", "editor", "terminal", "automated_checks"],
    prompt: `Build an executable coding lab. Provide small editable starter files, 3-5 progressive milestones, and checks that diagnose the learner's mistake. Each task must move through predict, change, run, and explain. Never invent unavailable services or credentials.`,
  },
  research_evidence_lab: {
    category: "Research & Analysis",
    defaultMode: "research_notebook",
    workspaceFamily: "evidence_notebook",
    learnerArtifact: "hypothesis, evidence notes, and reasoned conclusion",
    requiredUi: ["mission", "hypothesis", "evidence_notes", "reflection"],
    prompt: `Build a guided evidence lab, not a coding exercise. Give each milestone a hypothesis, evidence to look for, a note-taking prompt, and a misconception to challenge. Completion must require a defensible conclusion rather than generic text.`,
  },
  cloud_console_lab: {
    category: "Cloud Console Lab",
    defaultMode: "cloud_portal",
    workspaceFamily: "safe_cloud_console",
    learnerArtifact: "safe command plan and verification log",
    requiredUi: ["mission", "resource_map", "command_plan", "verification_log"],
    prompt: `Build a safe cloud-console mission. Use simulated or read-only resources only, explicitly state the expected resource state, and include command-plan and verification-log milestones. Never require real credentials, billing actions, destructive commands, or production access.`,
  },
  scenario_simulator: {
    category: "Scenario & Design Exercise",
    defaultMode: "simulation_lab",
    workspaceFamily: "decision_simulator",
    learnerArtifact: "decision rationale and outcome analysis",
    requiredUi: ["mission", "scenario", "decision", "outcome", "reflection"],
    prompt: `Build a decision simulator. Present a realistic scenario with meaningful options, trade-offs, expected outcomes, and a reflection prompt. The learner must make and justify a decision; do not disguise a prose worksheet as a simulation.`,
  },
};

export function experienceFor({ category, labType }) {
  if (category === "Terminal Coding Lab") return "terminal_coding_lab";
  if (category === "Research & Analysis") return "research_evidence_lab";
  if (category === "Cloud Console Lab" || labType === "cloud") return "cloud_console_lab";
  if (category === "Scenario & Design Exercise" || ["simulation", "security", "network"].includes(labType)) return "scenario_simulator";
  return "terminal_coding_lab";
}

export function profileFor(input) {
  const experienceType = experienceFor(input);
  return { experienceType, ...EXPERIENCE_PROFILES[experienceType] };
}

export function profileSchema(baseSchema, profile) {
  return {
    ...baseSchema,
    properties: {
      ...baseSchema.properties,
      experience: {
        type: "object",
        properties: {
          experienceType: { type: "string", enum: [profile.experienceType] },
          workspaceFamily: { type: "string", enum: [profile.workspaceFamily] },
          learnerArtifact: { type: "string" },
          requiredUi: { type: "array", items: { type: "string" } },
        },
        required: ["experienceType", "workspaceFamily", "learnerArtifact", "requiredUi"],
      },
    },
    required: [...new Set([...(baseSchema.required || []), "experience"])],
  };
}
