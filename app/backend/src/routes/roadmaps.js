import { Hono } from 'hono';
import { db } from '../db/index.js';
import { userRoadmaps, projectTemplates, aiLessons, userLessonProgress } from '../db/schema.js';
import { eq, desc, and } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import { generateCompleteJson } from '../lib/gemini.js';
import { buildSyllabus } from '../lib/syllabi.js';

const roadmaps = new Hono();

const SYSTEM_PROMPT = `You are Cohortia, an expert curriculum designer and career educator. Generate a syllabus-driven, personalised learning roadmap.

CRITICAL DESIGN PRINCIPLES:
1. MODULES must be concrete skill/knowledge areas, not phases. Example good titles: "HTML Structure & Semantic Foundations", "JavaScript DOM & Events", "React Components & State", "REST APIs & Authentication".
2. CHAPTERS must be specific TEACHABLE TOPICS, never generic phase slots. Example good titles: "CSS Flexbox layout system", "JavaScript event listeners and delegation", "Building a login form with validation". Forbidden titles: "Why X matters", "Core concepts for X", "Practice X skills", "Apply: X project", "X checkpoint", "Connect about X".
3. The 6-part learning flow (Warm Up, Learn, Practice, Apply, Checkpoint, Connect) must be stored ONLY in the chapter's "section" field. It must NEVER appear in chapter titles.
4. Each module must list 4–8 key skills the learner will gain (keySkills array).
5. Module deliverables must form ONE EVOLVING portfolio project across the 5 modules. Each module's deliverable should add a real, demonstrable piece to that project.
6. Adjust depth and examples for the learner type provided.

Return ONLY a valid JSON object. Do not wrap the JSON in markdown code fences. Use this exact structure:

{
  "title": "Short roadmap title",
  "description": "One paragraph explaining the syllabus and who it is for",
  "timeline": "Total estimated duration, e.g. 16 weeks",
  "focusSkills": ["Skill 1", "Skill 2", "Skill 3"],
  "learnerType": "start_career | level_up | real_world | switch_career",
  "archetype": "A | B | C | D | E",
  "archetypeLabel": "Technical Career | Creative/Design Career | Business/Strategy Career | Research/Academic Career | Trade/Practical Career",
  "evolvingProject": {
    "title": "Evolving portfolio project title",
    "description": "One sentence describing the single project that grows across modules",
    "stages": [
      { "moduleTitle": "Module 1 title", "deliverable": "What is produced in module 1" },
      ...
    ]
  },
  "phaseEmphasis": {
    "assessment": 10,
    "foundation": 40,
    "skill": 40,
    "application": 50,
    "career": 30
  },
  "milestones": [
    { "week": 4, "title": "Milestone title" },
    { "week": 8, "title": "Milestone title" },
    { "week": 12, "title": "Milestone title" },
    { "week": 16, "title": "Milestone title" }
  ],
  "portfolioProofs": [
    "First portfolio piece description",
    "Second portfolio piece description",
    "Third portfolio piece description"
  ],
  "mentorTouchpoints": [2, 4, 6, 8, 10, 12, 14, 16],
  "modules": [
    {
      "title": "Concrete module title",
      "phase": "Phase 1: Concrete module title",
      "duration": "e.g. 3 weeks",
      "description": "One sentence describing the real skill gained in this module",
      "difficulty": "Beginner | Intermediate | Advanced",
      "keySkills": ["Skill 1", "Skill 2"],
      "chapters": [
        {
          "title": "Specific teachable topic",
          "summary": "One sentence describing what the learner will be able to do",
          "duration": "25 min",
          "section": "Warm Up | Learn | Practice | Apply | Checkpoint | Connect"
        }
      ],
      "deliverable": "Concrete, demonstrable output that adds to the evolving project",
      "resources": ["Resource or tool suggestion"]
    }
  ]
}

Universal rules:
1. Produce exactly 5 modules.
2. Each module must have 4–6 chapters in this section order: Warm Up, Learn, Practice, Apply, Checkpoint, Connect.
3. Module titles must be unique and concrete.
4. Chapter titles must be unique within a module and must be specific topics, not phase names.
5. Total roadmap should be 10–24 weeks based on weeklyHours and learningPace.
6. Every module must have a deliverable that builds the evolving portfolio project.
7. End with 3 portfolio/career proofs appropriate to the learner type.
8. Add community/mentor touchpoints every 2 weeks.
9. For switch_career learners, include a bridge module in Phase 1 that maps transferable skills.
10. For level_up learners, add an advanced challenge option in every Apply chapter.
11. For real_world learners, include a client-style brief in the Apply chapter of one module.
12. For start_career learners, provide heavy hand-holding in the first two modules.
13. Each chapter summary must be one clear, outcomes-focused sentence.
14. Do not mention AI; write as if Cohortia is designing the syllabus.`;

function buildProjectTemplates(generated, roadmapId) {
  const modules = generated?.modules || [];
  const evolvingProject = generated?.evolvingProject;

  if (!modules.length) return [];

  // Create one evolving project stage per module so the portfolio project grows continuously.
  return modules.map((module, index) => {
    const isFirst = index === 0;
    const isLast = index === modules.length - 1;
    const stageTitle = evolvingProject?.title || `${generated?.title || 'Portfolio'} Project`;
    const stageDescription = evolvingProject?.description
      ? `${evolvingProject.description} This stage focuses on: ${module.title}.`
      : `Continue building your portfolio project by completing the ${module.title} stage.`;

    return {
      id: uuidv4(),
      roadmapId,
      moduleIndex: index,
      title: isLast ? `Final ${stageTitle}` : `${stageTitle} — Stage ${index + 1}`,
      description: stageDescription,
      deliverable: module.deliverable || `Deliverable for ${module.title}`,
      criteria: JSON.stringify([
        `Demonstrates skills from ${module.title}`,
        module.deliverable ? `Produces: ${module.deliverable}` : 'Produces a concrete, shareable output',
        isFirst
          ? 'Sets the foundation for the next project stage'
          : 'Builds on the previous stage in a visible way',
        isLast ? 'Forms a complete, portfolio-ready piece of work' : 'Is ready to be extended in the next module',
      ]),
      aiHelpPrompt: `Help me complete stage ${index + 1} of my evolving project "${stageTitle}".\n\nModule: ${module.title}\nModule description: ${module.description || ''}\nModule deliverable: ${module.deliverable || ''}\nKey skills: ${(module.keySkills || []).join(', ')}`,
      difficulty: module.difficulty || 'Beginner',
      status: 'ready',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  });
}

// ---------- Learner type & archetype helpers ----------

function deriveLearnerType(user) {
  const onboardingGoal = String(user?.onboardingGoal || '').toLowerCase();
  const currentStatus = String(user?.currentStatus || '').toLowerCase();
  const experienceLevel = String(user?.experienceLevel || '').toLowerCase();
  const careerGoal = String(user?.careerGoal || '').toLowerCase();

  if (onboardingGoal.includes('switch') || currentStatus.includes('switch') || currentStatus.includes('career-switcher')) {
    return 'switch_career';
  }
  if (onboardingGoal.includes('real') || onboardingGoal.includes('experience') || currentStatus.includes('employed')) {
    return 'real_world';
  }
  if (onboardingGoal.includes('level') || onboardingGoal.includes('up') || experienceLevel.includes('intermediate') || experienceLevel.includes('advanced')) {
    return 'level_up';
  }
  return 'start_career';
}

function deriveArchetype(desiredField) {
  const field = String(desiredField || '').toLowerCase();

  const archetypes = {
    A: ['cloud', 'devops', 'data', 'cybersecurity', 'software', 'web', 'backend', 'frontend', 'fullstack', 'engineering', 'developer', 'programming', 'ai engineering', 'ml engineering', 'site reliability', 'sre', 'network', 'database', 'security'],
    B: ['ux', 'ui', 'design', 'graphic', 'video', 'motion', 'creative', 'animation', 'illustration', 'brand', 'visual', 'product design', 'interaction'],
    C: ['product', 'marketing', 'pm', 'strategy', 'business', 'operations', 'management', 'consulting', 'sales', 'growth', 'entrepreneur', 'startup'],
    D: ['research', 'ai research', 'bio', 'science', 'academic', 'ml research', 'scientist', 'phd', 'data science research', 'biology', 'physics', 'chemistry'],
    E: ['electrician', 'hvac', 'welding', 'plumbing', 'trade', 'construction', 'carpentry', 'mechanic', 'technician', 'automotive', 'machinist'],
  };

  for (const [key, keywords] of Object.entries(archetypes)) {
    if (keywords.some((keyword) => field.includes(keyword))) return key;
  }
  return 'A';
}

function buildArchetypePrompt(archetype) {
  const labels = {
    A: 'Technical Career (Cloud, DevOps, Data, Cybersecurity, Software)',
    B: 'Creative/Design Career (UX, Graphic Design, Video, Motion)',
    C: 'Business/Strategy Career (Product, Marketing, PM, Operations)',
    D: 'Research/Academic Career (AI, Bio, Science, Research)',
    E: 'Trade/Practical Career (Electrician, HVAC, Welding, Construction)',
  };

  const phaseDescriptions = {
    A: `Phase 1 (Assessment & Onboarding): current tools audit, environment setup, role clarity.
Phase 2 (Foundation): core tooling, syntax, architecture basics.
Phase 3 (Skill Acquisition): deep stack, frameworks, integration patterns.
Phase 4 (Real-World Application): end-to-end deployment, production-like project, systems thinking.
Phase 5 (Career Transition): portfolio, certification, interview prep.`,
    B: `Phase 1 (Assessment & Onboarding): principles eye training, tool basics, personal taste audit.
Phase 2 (Foundation): design theory, craft fundamentals, software basics.
Phase 3 (Skill Acquisition): systems, workflows, feedback loops.
Phase 4 (Real-World Application): client-style briefs, iterations, constraints.
Phase 5 (Career Transition): personal brand, case studies, portfolio presentation.`,
    C: `Phase 1 (Assessment & Onboarding): business context, stakeholder map, metrics baseline.
Phase 2 (Foundation): frameworks, methods, templates.
Phase 3 (Skill Acquisition): data, decision making, research, reporting.
Phase 4 (Real-World Application): cross-functional projects, execution, influence.
Phase 5 (Career Transition): strategy, growth, career positioning, thought leadership.`,
    D: `Phase 1 (Assessment & Onboarding): domain foundations, literature review skills, goal mapping.
Phase 2 (Foundation): methods, tools, experimental design.
Phase 3 (Skill Acquisition): analysis, synthesis, paper reading, critical thinking.
Phase 4 (Real-World Application): original research project, replication, paper.
Phase 5 (Career Transition): publishing, conferences, networking, grants.`,
    E: `Phase 1 (Assessment & Onboarding): safety, standards, regulations, tool inventory.
Phase 2 (Foundation): tools, materials, equipment mastery.
Phase 3 (Skill Acquisition): techniques, methods, repetition, precision.
Phase 4 (Real-World Application): troubleshooting, diagnostics, repair under pressure.
Phase 5 (Career Transition): certification, apprenticeship, exam prep, job placement.`,
  };

  return `Archetype: ${archetype} — ${labels[archetype] || labels.A}\n${phaseDescriptions[archetype] || phaseDescriptions.A}`;
}

function buildLearnerTypeRules(learnerType) {
  const rules = {
    start_career: {
      emphasis: { assessment: 15, foundation: 60, skill: 50, application: 30, career: 20 },
      notes: `Assume zero prior knowledge. Heavy focus on Foundation and Skill Acquisition with guided, step-by-step Apply chapters. Include beginner-friendly explanations, glossaries, and scaffolding. Career Transition focuses on resume, LinkedIn, and first job strategy.`,
    },
    level_up: {
      emphasis: { assessment: 10, foundation: 20, skill: 50, application: 50, career: 30 },
      notes: `Assume foundational knowledge; focus on gap analysis and advanced tools. Skip basics the user already knows. Add an "advanced challenge" option in every Apply chapter. Career Transition focuses on promotion prep, leadership, and negotiation.`,
    },
    real_world: {
      emphasis: { assessment: 10, foundation: 30, skill: 40, application: 70, career: 30 },
      notes: `Project-first approach; theory on-demand. Include a client-style brief module in Phases 3-4 with deliverables and mentor review. Portfolio review and goal mapping in Assessment. Career Transition focuses on job placement, references, and interview coaching.`,
    },
    switch_career: {
      emphasis: { assessment: 20, foundation: 40, skill: 40, application: 50, career: 40 },
      notes: `Map transferable skills and build bridge modules in Phase 1. Connect new field concepts to the user's prior experience. Application projects should bridge old + new skills. Career Transition focuses on narrative building, networking, and interview bridging.`,
    },
  };

  return rules[learnerType] || rules.start_career;
}

function parseSkillsKnown(skillsKnown) {
  if (!skillsKnown) return [];
  try {
    const parsed = JSON.parse(skillsKnown);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return String(skillsKnown)
      .split(/[,;]/)
      .map((s) => s.trim())
      .filter(Boolean);
  }
}

const FORBIDDEN_CHAPTER_PATTERNS = [
  /^why\s+.+\s+matters$/i,
  /^core\s+concepts\s+for\s+.+$/i,
  /^practice\s+.+\s+skills$/i,
  /^apply:\s+.+\s+project$/i,
  /^.+\s+checkpoint$/i,
  /^connect\s+about\s+.+$/i,
];

function isGenericChapterTitle(title = '') {
  return FORBIDDEN_CHAPTER_PATTERNS.some((pattern) => pattern.test(title.trim()));
}

function validateRoadmap(generated) {
  const errors = [];

  if (!generated || typeof generated !== 'object') {
    errors.push('Generated data is not an object');
    return { valid: false, errors };
  }

  const requiredTop = ['title', 'description', 'timeline', 'focusSkills', 'modules'];
  for (const key of requiredTop) {
    if (generated[key] === undefined || generated[key] === null) {
      errors.push(`Missing top-level field: ${key}`);
    }
  }

  if (!Array.isArray(generated.modules)) {
    errors.push('modules must be an array');
  } else if (generated.modules.length < 4 || generated.modules.length > 6) {
    errors.push(`modules must have 4-6 items, got ${generated.modules.length}`);
  } else {
    const titles = new Set();
    generated.modules.forEach((module, index) => {
      if (!module.title) errors.push(`Module ${index} missing title`);
      if (titles.has(module.title)) errors.push(`Duplicate module title: ${module.title}`);
      titles.add(module.title);
      if (!module.duration) errors.push(`Module ${index} missing duration`);
      if (!Array.isArray(module.keySkills) || module.keySkills.length === 0) {
        errors.push(`Module ${index} must include keySkills array`);
      }
      if (!Array.isArray(module.chapters)) {
        errors.push(`Module ${index} chapters must be an array`);
      } else if (module.chapters.length < 4 || module.chapters.length > 6) {
        errors.push(`Module ${index} must have 4-6 chapters, got ${module.chapters.length}`);
      } else {
        module.chapters.forEach((chapter, cIndex) => {
          if (!chapter.title) errors.push(`Module ${index} chapter ${cIndex} missing title`);
          if (!chapter.summary) errors.push(`Module ${index} chapter ${cIndex} missing summary`);
          if (isGenericChapterTitle(chapter.title)) {
            errors.push(`Module ${index} chapter ${cIndex} has generic title: ${chapter.title}`);
          }
        });
      }
      if (!module.deliverable) errors.push(`Module ${index} missing deliverable`);
      if (!Array.isArray(module.resources)) errors.push(`Module ${index} resources must be an array`);
    });
  }

  return { valid: errors.length === 0, errors };
}

function normalizeRoadmap(generated, user) {
  const safe = generated || {};
  const archetype = safe.archetype || deriveArchetype(user?.desiredField);
  const archetypeLabels = {
    A: 'Technical Career',
    B: 'Creative/Design Career',
    C: 'Business/Strategy Career',
    D: 'Research/Academic Career',
    E: 'Trade/Practical Career',
  };

  return {
    ...safe,
    title: safe.title || `${user?.desiredField || 'Career'} Learning Path`,
    description: safe.description || 'A personalised Cohortia learning path.',
    timeline: safe.timeline || '12 weeks',
    focusSkills: Array.isArray(safe.focusSkills) ? safe.focusSkills : ['Career Development', 'Portfolio Building'],
    learnerType: safe.learnerType || deriveLearnerType(user),
    archetype,
    archetypeLabel: safe.archetypeLabel || archetypeLabels[archetype] || 'Technical Career',
    evolvingProject: safe.evolvingProject || null,
    phaseEmphasis: safe.phaseEmphasis || { assessment: 10, foundation: 40, skill: 40, application: 40, career: 20 },
    milestones: Array.isArray(safe.milestones) ? safe.milestones : [],
    portfolioProofs: Array.isArray(safe.portfolioProofs) ? safe.portfolioProofs : [],
    mentorTouchpoints: Array.isArray(safe.mentorTouchpoints) ? safe.mentorTouchpoints : [],
    modules: Array.isArray(safe.modules) ? safe.modules : [],
  };
}

function computeWeeks(weeklyHours = '10-20 hours', learningPace = 'steady') {
  let weeks = 12;
  if (weeklyHours.includes('30')) weeks = 8;
  else if (weeklyHours.includes('20')) weeks = 10;
  else if (weeklyHours.includes('5')) weeks = 16;
  if (learningPace.includes('intensive')) weeks = Math.max(6, weeks - 2);
  if (learningPace.includes('casual')) weeks = Math.min(24, weeks + 4);
  return weeks;
}

function buildMockRoadmap(input, user = null) {
  const field = input.desiredField || user?.desiredField || 'Your chosen career';
  const level = input.experienceLevel || user?.experienceLevel || 'Beginner';
  const weeklyHours = input.weeklyHours || user?.weeklyHours || '10-20 hours';
  const learningPace = input.learningPace || user?.learningPace || 'steady';
  const learnerType = deriveLearnerType(user || input);
  const weeks = computeWeeks(weeklyHours, learningPace);

  const syllabus = buildSyllabus(field, level, learnerType, weeks);

  const phaseEmphasis = {
    start_career: { assessment: 15, foundation: 60, skill: 50, application: 30, career: 20 },
    level_up: { assessment: 10, foundation: 20, skill: 50, application: 50, career: 30 },
    real_world: { assessment: 10, foundation: 30, skill: 40, application: 70, career: 30 },
    switch_career: { assessment: 20, foundation: 40, skill: 40, application: 50, career: 40 },
  }[learnerType] || { assessment: 10, foundation: 40, skill: 40, application: 40, career: 20 };

  return {
    ...syllabus,
    phaseEmphasis,
    mentorTouchpoints: Array.from({ length: Math.floor(weeks / 2) }, (_, i) => (i + 1) * 2),
  };
}

function deduplicateModules(roadmap) {
  if (!roadmap?.modules || !Array.isArray(roadmap.modules)) {
    return roadmap;
  }

  const seen = new Set();
  const uniqueModules = roadmap.modules.filter((module) => {
    if (!module.title || seen.has(module.title)) {
      if (module.title) console.warn(`Duplicate module title removed: ${module.title}`);
      return false;
    }
    seen.add(module.title);
    return true;
  });

  return {
    ...roadmap,
    modules: uniqueModules,
  };
}

// Get current user's roadmap
roadmaps.get('/me', async (c) => {
  const userId = c.get('userId');

  const roadmap = await db
    .select()
    .from(userRoadmaps)
    .where(eq(userRoadmaps.userId, userId))
    .orderBy(userRoadmaps.createdAt, 'desc')
    .limit(1);

  return c.json({
    success: true,
    data: { roadmap: roadmap[0] || null },
  });
});

// Generate a new roadmap for the current user, using the selected course bundle when available.
roadmaps.post('/generate', async (c) => {
  const userId = c.get('userId');
  const user = c.get('user');
  const body = await c.req.json();

  const {
    desiredField,
    experienceLevel,
    weeklyHours,
    learningPace,
    currentStatus,
    careerGoal,
    skillsKnown,
    availability,
    allowMultiple = false,
    roadmapSelection,
  } = body;

  // Merge request overrides with stored user profile
  const roadmapInput = {
    desiredField: desiredField || user?.desiredField,
    experienceLevel: experienceLevel || user?.experienceLevel,
    weeklyHours: weeklyHours || user?.weeklyHours,
    learningPace: learningPace || user?.learningPace,
    currentStatus: currentStatus || user?.currentStatus,
    careerGoal: careerGoal || user?.careerGoal,
    skillsKnown: skillsKnown || user?.skillsKnown,
    availability: availability || user?.availability,
    onboardingGoal: user?.onboardingGoal,
    educationLevel: user?.educationLevel,
    ageRange: user?.ageRange,
    learningStyle: user?.learningStyle,
    jobReadyTimeline: user?.jobReadyTimeline,
    motivation: user?.motivation,
    biggestChallenge: user?.biggestChallenge,
    previousField: user?.previousField,
    wantsRealWorldExperience: user?.wantsRealWorldExperience,
    roadmapSelection: roadmapSelection || user?.roadmapSelection,
  };

  let selectedBundle = null;
  try {
    selectedBundle = typeof roadmapInput.roadmapSelection === 'string'
      ? JSON.parse(roadmapInput.roadmapSelection)
      : roadmapInput.roadmapSelection || null;
  } catch {
    selectedBundle = null;
  }

  const learnerType = deriveLearnerType({ ...user, ...roadmapInput });
  const archetype = deriveArchetype(roadmapInput.desiredField);
  const archetypePrompt = buildArchetypePrompt(archetype);
  const learnerRules = buildLearnerTypeRules(learnerType);
  const knownSkills = parseSkillsKnown(roadmapInput.skillsKnown);

  const userPrompt = `Create a personalised Cohortia roadmap for me.

Desired field: ${roadmapInput.desiredField || 'Not specified'}
Experience level: ${roadmapInput.experienceLevel || 'Beginner'}
Education level: ${roadmapInput.educationLevel || 'Not specified'}
Age range: ${roadmapInput.ageRange || 'Not specified'}
Learning style: ${roadmapInput.learningStyle || 'Not specified'}
Job-ready timeline: ${roadmapInput.jobReadyTimeline || 'Not specified'}
Primary motivation: ${roadmapInput.motivation || 'Not specified'}
Biggest challenge: ${roadmapInput.biggestChallenge || 'Not specified'}
Previous field (for switchers): ${roadmapInput.previousField || 'Not specified'}
Wants real-world experience / portfolio pieces: ${roadmapInput.wantsRealWorldExperience ? 'Yes' : 'No'}
Weekly hours available: ${roadmapInput.weeklyHours || 'Not specified'}
Learning pace: ${roadmapInput.learningPace || 'steady'}
Current status: ${roadmapInput.currentStatus || 'Not specified'}
Career goal: ${roadmapInput.careerGoal || 'Not specified'}
Skills I already know: ${knownSkills.length > 0 ? knownSkills.join(', ') : 'None listed'}
Availability pattern: ${roadmapInput.availability || 'Not specified'}

Selected roadmap bundle (preserve this course order and level progression): ${selectedBundle ? JSON.stringify(selectedBundle) : 'None selected'}

Derived learner type: ${learnerType}
Derived archetype: ${archetype}

${archetypePrompt}

Learner-type rules:
${learnerRules.notes}

Layer emphasis percentages (use these to decide depth and time allocation):
- Assessment & Onboarding: ${learnerRules.emphasis.assessment}%
- Foundation Building: ${learnerRules.emphasis.foundation}%
- Skill Acquisition: ${learnerRules.emphasis.skill}%
- Real-World Application: ${learnerRules.emphasis.application}%
- Career Transition: ${learnerRules.emphasis.career}%

Important:
- Return ONLY the JSON object. No markdown fences, no extra commentary.
- Ensure every module has exactly 6 chapters in the order: Warm Up, Learn, Practice, Apply, Checkpoint, Connect.
- Each chapter must have title, summary, duration, and section fields.
- Module titles must be unique.
- The roadmap should have exactly 5 modules.`;

  const result = await generateCompleteJson({
    systemPrompt: SYSTEM_PROMPT,
    userPrompt,
    maxTokens: 6000,
    maxContinuations: 3,
  });

  let generated;
  let usedAI = false;

  if (result.success) {
    generated = result.data;
    usedAI = true;

    const validation = validateRoadmap(generated);
    if (!validation.valid) {
      console.error('Generated roadmap failed validation:', validation.errors);
      console.error('Raw generated data:', JSON.stringify(generated, null, 2));
      generated = buildMockRoadmap(roadmapInput, user);
      usedAI = false;
    }
  } else {
    console.error('Gemini roadmap generation failed:', result.error);
    console.error('Raw response:', result.raw);
    generated = buildMockRoadmap(roadmapInput, user);
  }

  // Normalize defaults and enrich metadata
  generated = normalizeRoadmap(generated, user);

  // Deduplicate modules to ensure unique titles
  generated = deduplicateModules(generated);

  const now = new Date().toISOString();
  const roadmapId = uuidv4();

  // Archive existing active roadmap only when the user is replacing, not adding a second career.
  if (!allowMultiple) {
    await db
      .update(userRoadmaps)
      .set({ status: 'archived', updatedAt: now })
      .where(and(eq(userRoadmaps.userId, userId), eq(userRoadmaps.status, 'active')));
  }

  await db.insert(userRoadmaps).values({
    id: roadmapId,
    userId,
    title: generated.title || `${roadmapInput.desiredField || 'Career'} Roadmap`,
    description: generated.description || 'Your personalised Cohortia learning path.',
    careerTrack: roadmapInput.desiredField || null,
    generatedData: JSON.stringify(generated),
    status: 'active',
    createdAt: now,
    updatedAt: now,
  });

  const insertedTemplates = buildProjectTemplates(generated, roadmapId);
  if (insertedTemplates.length > 0) {
    await db.insert(projectTemplates).values(insertedTemplates);
  }

  const roadmap = await db
    .select()
    .from(userRoadmaps)
    .where(eq(userRoadmaps.id, roadmapId))
    .limit(1);

  return c.json({
    success: true,
    message: usedAI ? 'Roadmap generated successfully' : 'Roadmap generated using Cohortia defaults',
    data: { roadmap: roadmap[0] },
  });
});

// Get all roadmaps for the current user
roadmaps.get('/mine/all', async (c) => {
  const userId = c.get('userId');

  const roadmaps = await db
    .select()
    .from(userRoadmaps)
    .where(eq(userRoadmaps.userId, userId))
    .orderBy(desc(userRoadmaps.createdAt));

  return c.json({
    success: true,
    data: { roadmaps },
  });
});

// Delete a roadmap and its related data
roadmaps.delete('/:id', async (c) => {
  const userId = c.get('userId');
  const roadmapId = c.req.param('id');

  const existing = await db
    .select()
    .from(userRoadmaps)
    .where(and(eq(userRoadmaps.id, roadmapId), eq(userRoadmaps.userId, userId)))
    .limit(1);

  if (!existing.length) {
    return c.json({ success: false, error: 'Roadmap not found' }, 404);
  }

  await db.delete(userLessonProgress).where(eq(userLessonProgress.roadmapId, roadmapId));
  await db.delete(aiLessons).where(eq(aiLessons.roadmapId, roadmapId));
  await db.delete(projectTemplates).where(eq(projectTemplates.roadmapId, roadmapId));
  await db.delete(userRoadmaps).where(eq(userRoadmaps.id, roadmapId));

  return c.json({ success: true, message: 'Roadmap deleted' });
});

export default roadmaps;
