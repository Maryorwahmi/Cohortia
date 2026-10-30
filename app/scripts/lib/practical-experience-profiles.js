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
    prompt: `Build an executable coding lab with two explicit phases: teach mode, then practice mode. Begin teach mode with a brief, warm chapter reintroduction and explain why the practical matters. Teach mode must contain 4-8 atomic codeWalkthrough steps with a real file, exact codeLine, substantial 80-120 word speakerText, duration, explanation, and a learner prediction checkpoint. Explain the exact line, its purpose, how it connects to the chapter, and a concrete example; preserve technical detail, stay on the practical topic, and do not merely paraphrase the source activity. Practice mode must provide small editable starter files, 3-5 progressive milestones, and checks that diagnose the learner's mistake. Return workspace.type=terminal and workspace.terminal with the real entry file, editable/read-only files, supported run or compile commands, stdin, and expected artifacts. Never invent unavailable services, credentials, or unsupported runtimes.`,
  },
  research_evidence_lab: {
    category: "Research & Analysis",
    defaultMode: "research_notebook",
    workspaceFamily: "evidence_notebook",
    learnerArtifact: "hypothesis, evidence notes, and reasoned conclusion",
    requiredUi: ["mission", "hypothesis", "evidence_notes", "reflection"],
    prompt: `Build a guided evidence lab, not a coding exercise. Begin teach mode with a brief, warm chapter reintroduction and explain why the investigation matters. Return workspace.type=research and a complete workspace.research dossier from the chapter, including the investigation question, sources or datasets, required observations, allowed analysis operations, calculation rules, conclusion prompt, evidence requirements, and rubric. Give each milestone a hypothesis, evidence to look for, a note-taking prompt, and a misconception to challenge. Explain the investigation in a detailed, source-grounded teacher walkthrough with concrete evidence examples; preserve the full reasoning and do not drift from the chapter question. Completion must require a defensible conclusion rather than generic text.`,
  },
  cloud_console_lab: {
    category: "Cloud Console Lab",
    defaultMode: "cloud_portal",
    workspaceFamily: "safe_cloud_console",
    learnerArtifact: "safe command plan and verification log",
    requiredUi: ["mission", "resource_map", "command_plan", "verification_log"],
    prompt: `Build a safe cloud-console mission with two explicit phases: a calm, teacher-led walkthrough, then “Your turn.” Return workspace.type=cloud and a complete workspace.cloud object with course-specific provider/region, initial resources, allowed simulated actions, forbidden actions, command templates, expected resource state, and verification checks. Begin with a brief, warm chapter reintroduction, explain why the practical matters with a concrete real-world example, and invite a prediction before each action. Return 4-8 ordered teachingSteps with progressive displayText, substantial 80-120 word speakerText, and useful explanation callouts; explain each exact action, its consequence, and how to verify it without leaving the chapter topic. Do not copy the hands-on activity text as a substitute for teaching. Map every teaching step to teachingPlaylist[].codeSteps. Use simulated or read-only resources only, explicitly state expected resource state, and include command-plan and verification-log milestones. Never require real credentials, billing actions, destructive commands, or production access.`,
  },
  scenario_simulator: {
    category: "Scenario & Design Exercise",
    defaultMode: "simulation_lab",
    workspaceFamily: "decision_simulator",
    learnerArtifact: "decision rationale and outcome analysis",
    requiredUi: ["mission", "scenario", "decision", "outcome", "reflection"],
    prompt: `Build a teacher-led, line-by-line scenario lesson followed by an interactive "Your turn" phase. Return workspace.type=scenario and an explicit workspace.scenario.subtype of binary_exercise, planning_poker, roadmap_planning, annotation_design, explainability_decision, or generic_decision. Include the scenario context, items, decision options, constraints, decision fields, outcome rules, rubric, and export artifact needed by the UI. Never leave the active scenario branch empty. Start with a brief, warm chapter reintroduction and explain why the practical matters through a concrete real-world example. Return 4-8 ordered teachingSteps; each step must include concise displayText that can be revealed progressively, substantial 80-120 word speakerText, and a useful explanation. Explain the reasoning, use a relevant example or scenario, preserve the chapter's technical details, and never drift into unrelated material or merely restate the activity document. Teach one idea at a time, invite the learner to predict outcomes, then give a related task to solve in the workspace. For binary_exercise, explain place values and conversions visually without writing source code, and give every conversion task an interactiveExercise with a prompt, exact expectedAnswer, optional acceptedAnswers, and an explanation. For design_decision, present realistic options, trade-offs, outcomes, and ask the learner to justify a choice. Do not disguise a prose worksheet as a simulation.`,
  },
};

export function activityKindFor({ category, title = "", activity = "", labType = "" }) {
  const text = `${title}\n${activity}`.toLowerCase();
  if (category === "Terminal Coding Lab") return "terminal_code_along";
  if (category === "Cloud Console Lab") return "cloud_console_walkthrough";
  if (category === "Research & Analysis") return "evidence_inquiry";
  if (category === "Scenario & Design Exercise") {
    if (["code", "shell", "database"].includes(String(labType).toLowerCase())) return "terminal_code_along";
    // A decimal value or a generic type conversion is not automatically a
    // binary exercise. Require an explicit number-systems signal so ordinary
    // Python data-type labs remain scenario/design activities.
    if (/\b(binary|number systems?|bits?|bitwise|base conversion)\b/.test(text)) {
      return "binary_exercise";
    }
    if (/\b(algorithm|pseudocode|flowchart|trace (?:the|an) algorithm)\b/.test(text)) {
      return "algorithm_design";
    }
    if (/\b(ethical|ethics|privacy|bias|trade-?off|decision matrix|choose|select|recommend)\b/.test(text)) {
      return "design_decision";
    }
    return "scenario_analysis";
  }
  return "guided_exercise";
}

export function experienceFor({ category, labType }) {
  if (category === "Terminal Coding Lab") return "terminal_coding_lab";
  if (category === "Research & Analysis") return "research_evidence_lab";
  if (category === "Cloud Console Lab" || labType === "cloud") return "cloud_console_lab";
  if (["code", "shell", "database"].includes(String(labType).toLowerCase())) return "terminal_coding_lab";
  if (category === "Scenario & Design Exercise" || ["simulation", "security", "network"].includes(labType)) return "scenario_simulator";
  return "terminal_coding_lab";
}

export function profileFor(input) {
  const experienceType = experienceFor(input);
  return { experienceType, ...EXPERIENCE_PROFILES[experienceType] };
}

export function profileSchema(baseSchema, profile, activityKind) {
  const required = [...new Set([...(baseSchema.required || []), "experience", "workspace"])];
  const workspaceType = profile.experienceType === "terminal_coding_lab"
    ? "terminal"
    : profile.experienceType === "cloud_console_lab"
      ? "cloud"
      : profile.experienceType === "research_evidence_lab"
        ? "research"
        : "scenario";
  const schema = {
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
      workspace: {
        properties: {
          type: {
            type: "string",
            enum: [workspaceType],
          },
          [workspaceType]: { type: "object" },
        },
        required: ["type", workspaceType],
        type: "object",
      },
    },
    required,
  };

  if (["scenario_simulator", "cloud_console_lab"].includes(profile.experienceType)) {
    schema.required = [...new Set([...schema.required, "activityKind", "teachingSteps"])];
    schema.properties.teachingSteps = {
      ...schema.properties.teachingSteps,
      minItems: 4,
      maxItems: 8,
    };
  }

  if (activityKind === "binary_exercise") {
    const taskSchema = schema.properties.tasks;
    if (taskSchema?.type === "array" && taskSchema.items) {
      schema.properties.tasks = {
        ...taskSchema,
        items: {
          ...taskSchema.items,
          required: [...new Set([...(taskSchema.items.required || []), "interactiveExercise"])],
        },
      };
    }
  }

  return schema;
}
