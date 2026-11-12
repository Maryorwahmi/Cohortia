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
    prompt: `Build an executable coding lab with a teacher-led, watch-only walkthrough followed by independent practice. During every codeWalkthrough phase the learner is watching the teacher; they cannot edit, compile, or run the workspace. The learner edits only after the walkthrough opens the hands-on workspace. The ordered codeWalkthrough is the sole canonical spoken teaching script; do not write competing narration in narratorGuide, task narratorGuide, or teachingPlaylist. Create 4-8 genuine teaching phases, each with a real file, exact codeLine, phase, 40-180 word speakerText, concise explanation, learnerPrompt, commonMistake, and recap; the generator derives durationSeconds from speakerText. The first phase may show the complete baseline file; middle phases must show a focused 1-5 line code block for a new concept or changed behavior; the final transfer phase may show the complete final file. Never repeat an identical code block in adjacent phases. Prompts during the walkthrough must ask the learner to notice or predict, never to add, edit, type, compile, or run. If narration discusses compilation, execution, or output, include visible terminalCommands and/or terminalOutput in that same phase; do not claim that a command ran when no command or output is shown. The separate opening screen already welcomes the learner and introduces the chapter and mission: do not repeat that welcome, chapter recap, or mission in phase 1. Begin phase 1 by teaching the first concrete idea in the activity, then teach the smallest useful example, explain the code and its effect, invite a prediction, address a likely misconception, and end with a transfer handoff. Keep all narration grounded in this activity and chapter. Add a structured predictionQuestion only where the learner can meaningfully predict an outcome; do not invent unrelated questions. Practice mode must provide small editable starter files, 3-5 progressive milestones, and checks that diagnose the learner's mistake. Return workspace.type=terminal and workspace.terminal with the real entry file, editable/read-only files, supported run or compile commands, stdin, and expected artifacts. Never invent unavailable services, credentials, or unsupported runtimes.`,
  },
  research_evidence_lab: {
    category: "Research & Analysis",
    defaultMode: "research_notebook",
    workspaceFamily: "evidence_notebook",
    learnerArtifact: "hypothesis, evidence notes, and reasoned conclusion",
    requiredUi: ["mission", "hypothesis", "evidence_notes", "reflection"],
    prompt: `Build a guided evidence lab, not a coding exercise. The ordered teachingSteps are the sole canonical spoken teaching script; do not write competing narration in narratorGuide, task narratorGuide, or teachingPlaylist. The separate opening screen already welcomes the learner and introduces the chapter and mission: do not repeat that welcome, chapter recap, or mission in phase 1. Start phase 1 with the concrete investigation question, then model how to examine a source, distinguish observation from inference, test a hypothesis, consider a limitation, and hand off a related inquiry to the learner. Return 4-8 ordered teachingSteps, each with a phase, progressive displayText, 40-180 word source-grounded speakerText, concise explanation, learnerPrompt, commonMistake, and recap; the generator derives durationSeconds from speakerText. The exact evidence, observations, calculations, and conclusion taught in each speakerText must also appear as visible lines in that same phase's displayText. Return workspace.type=research and a complete workspace.research dossier from the chapter, including the investigation question, sources or datasets, required observations, allowed analysis operations, calculation rules, conclusion prompt, evidence requirements, and rubric. Give each milestone a hypothesis, evidence to look for, a note-taking prompt, and a misconception to challenge. Where a learner can make a meaningful evidence-based prediction, add a structured predictionQuestion to that teaching step; do not invent claims unsupported by the sources. Completion must require a defensible conclusion rather than generic text.`,
  },
  cloud_console_lab: {
    category: "Cloud Console Lab",
    defaultMode: "cloud_portal",
    workspaceFamily: "safe_cloud_console",
    learnerArtifact: "safe command plan and verification log",
    requiredUi: ["mission", "resource_map", "command_plan", "verification_log"],
    prompt: `Build a safe cloud-console mission. The ordered teachingSteps are the sole canonical spoken teaching script; do not write competing narration in narratorGuide, task narratorGuide, or teachingPlaylist. Return workspace.type=cloud and a complete workspace.cloud object with course-specific provider/region, initial resources, allowed simulated actions, forbidden actions, command templates, expected resource state, and verification checks. Create 4-8 ordered teachingSteps with phase, progressive displayText, 40-180 word speakerText, a useful explanation, learnerPrompt, commonMistake, and recap; the generator derives durationSeconds from speakerText. The separate opening screen already welcomes the learner and introduces the chapter and mission: do not repeat that welcome, chapter recap, or mission in phase 1. Start phase 1 with the operational goal and starting resource state, model safe actions and their consequences, invite a prediction, show how to verify the result, and end with a related “Your turn” command-plan and verification phase. Every state change or verification claim in the narration must appear as a concrete visible line in that same phase. Keep every explanation tied to this chapter and activity; do not copy the hands-on activity as a substitute for teaching. Add a structured predictionQuestion only where the learner can meaningfully predict a resource or traffic outcome. Use simulated or read-only resources only. Never require real credentials, billing actions, destructive commands, or production access.`,
  },
  scenario_simulator: {
    category: "Scenario & Design Exercise",
    defaultMode: "simulation_lab",
    workspaceFamily: "decision_simulator",
    learnerArtifact: "decision rationale and outcome analysis",
    requiredUi: ["mission", "scenario", "decision", "outcome", "reflection"],
    prompt: `Build a teacher-led scenario lesson followed by an interactive "Your turn" phase. The ordered teachingSteps are the sole canonical spoken teaching script; do not write competing narration in narratorGuide, task narratorGuide, or teachingPlaylist. The separate opening screen already welcomes the learner and introduces the chapter and mission: do not repeat that welcome, chapter recap, or mission in phase 1. Return workspace.type=scenario and an explicit workspace.scenario.subtype of binary_exercise, planning_poker, roadmap_planning, annotation_design, explainability_decision, or generic_decision. Include the scenario context, items, decision options, constraints, decision fields, outcome rules, rubric, and export artifact needed by the UI. Never leave the active scenario branch empty. Create 4-8 ordered teachingSteps with phase, concise progressive displayText, 40-180 word speakerText, a useful explanation, learnerPrompt, commonMistake, and recap; the generator derives durationSeconds from speakerText. Phase 1 must begin by teaching the first activity-specific concept, not by greeting the learner or restating the mission. Across later phases, teach one idea at a time with a worked example grounded in this activity, invite a prediction or decision, address a likely misconception, and finish by handing a related problem to the learner. Every number, calculation, evidence claim, option comparison, constraint, and worked result spoken in a phase must also be shown as concrete, line-by-line content in that same phase's displayText; never hide teaching content in speakerText alone. Preserve technical detail and never drift from the chapter or merely repeat the activity. Add a structured predictionQuestion only where a learner can make a meaningful prediction. For binary_exercise, show the actual place values, arithmetic, input, and worked result in displayText without source code; every conversion task must have an interactiveExercise with an exact expectedAnswer and explanation. For design decisions, show at least two realistic options, their relevant constraints and trade-offs, the selected choice, and its expected outcome; ask the learner to justify a choice. Do not disguise a prose worksheet as a simulation.`,
  },
};

export function activityKindFor({ category, title = "", activity = "", labType = "" }) {
  const text = `${title}\n${activity}`.toLowerCase();
  if (category === "Terminal Coding Lab") return "terminal_code_along";
  if (category === "Cloud Console Lab") return "cloud_console_walkthrough";
  if (category === "Research & Analysis") return "evidence_inquiry";
  if (category === "Scenario & Design Exercise") {
    // A decimal value or a generic type conversion is not automatically a
    // binary exercise. Require an explicit number-systems signal so ordinary
    // Python data-type labs remain scenario/design activities.
    const binaryNumberSystemsActivity = /\b(?:number systems?|bits?|bitwise|base conversion|base[- ]?2)\b/.test(text)
      || (/\bbinary\b/.test(text) && /\b(?:conversion|convert|decimal|number|representation|place value)\b/.test(text));
    if (binaryNumberSystemsActivity) {
      return "binary_exercise";
    }
    if (["code", "shell", "database"].includes(String(labType).toLowerCase())) return "terminal_code_along";
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

export function experienceFor({ category, labType, activityKind }) {
  if (category === "Terminal Coding Lab") return "terminal_coding_lab";
  if (category === "Scenario & Design Exercise" && activityKind === "binary_exercise") return "scenario_simulator";
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

  const canonicalScriptKey = profile.experienceType === "terminal_coding_lab"
    ? "codeWalkthrough"
    : "teachingSteps";
  schema.required = [...new Set([
    ...schema.required,
    "activityKind",
    canonicalScriptKey,
  ])];
  const canonicalScriptSchema = schema.properties[canonicalScriptKey];
  schema.properties[canonicalScriptKey] = {
    ...canonicalScriptSchema,
    minItems: 4,
    maxItems: 8,
    items: {
      ...canonicalScriptSchema.items,
      required: [...new Set([
        ...(canonicalScriptSchema.items.required || []),
        "phase",
        "speakerText",
        "explanation",
        "learnerPrompt",
        "commonMistake",
        "recap",
        ...(canonicalScriptKey === "teachingSteps" ? ["displayText"] : ["codeLine"]),
      ])],
    },
  };

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
