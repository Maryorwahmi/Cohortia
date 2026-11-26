# Professional Brief: Cohortia Practical Learning System

## Project objective

Help Cohortia deliver accurate, useful practical activities for courses across the catalogue. The generator should understand each chapter and produce a practical that matches its subject, learning objective, learner level, and available runtime. The learner experience should adapt to that practical—not force every subject into the same coding lab or worksheet.

The engagement should begin with a representative end-to-end pilot, then scale to the highest-value courses before expanding across the catalogue.

## What is already in place

- **Chapter-based generation:** Scripts use course/chapter source material to generate practicals, normalize the result, validate it, and publish chapter/course manifests. Generation is run one chapter at a time.
- **Structured practical contract:** A versioned schema captures source identity, tasks, checks, teaching steps, workspace, safety, cleanup, and completion rules.
- **Four top-level practical categories:** Terminal Coding Lab, Cloud Console Lab, Scenario & Design Exercise, and Research & Analysis. These are taxonomy labels, not a complete count of the UI experiences: the app has additional workspace variants and provider-specific cloud interfaces.
- **Adaptive learning-board UI:** The practical experience includes guided teaching, tasks and hints, progress, and workspace routing for coding, cloud, research, and scenario/design activities. The workspace can be tailored with the practical’s chapter context and configuration.
- **Evaluation and persistence:** The backend stores source and generated records, versions, learner attempts, and progress. Existing checks cover selected coding outputs/files and runtime results, cloud action evidence, binary exercises, and instructor-reviewed submissions.
- **Quality controls:** Generation includes structured model output, normalization, validation, retries/repair paths, source mapping, and safety/environment fields. These controls are a strong base, but do not by themselves establish that every generated practical is instructionally correct or executable.
- **Known scaling risk:** The current source-activity classifier is keyword/rule-based and can default uncertain activities to Research & Analysis at low confidence. Classification confidence, review thresholds, and deliberate reclassification need to be part of the rollout design.

## Current coverage snapshot

In the repository’s local database snapshot checked on 25 November 2026, there are **9,941 practical records across 326 course IDs**. **96 records are marked published; 9,845 remain raw/source records.** Of the 96 published records, 43 are Terminal Coding Lab, 27 Scenario & Design Exercise, 2 Research & Analysis, and 24 have no category recorded; none are currently marked as published Cloud Console Lab practicals.

These are local database counts, not a claim about production. They show that a large source backlog exists, while the verified/published practical set is still small and uneven across categories.

## Engagement requested

1. **Audit the current pipeline before replacing it.** Map course and chapter sources, category classification, generator prompts and schema, validators, workspaces/runtimes, graders, and publishing states. Identify what is reusable, what is incomplete, and what is not supported today.
2. **Agree a coverage matrix.** Inventory the practical UI/workspace variants already present (including variants beyond the four top-level labels), and map each to appropriate subject matter, task formats, runtimes, checks, and review requirements.
3. **Run an end-to-end pilot.** Select high-value representative courses and chapters across all practical types and UI variants. Generate, review, run or simulate, grade, render at relevant screen sizes, and publish each pilot practical.
4. **Improve generation and quality gates.** Make classification explainable and reviewable; require alignment to the source chapter; detect missing, generic, unsupported, or contradictory content; validate tasks, workspace configuration, and checks; and prevent failed or low-confidence output from being published as ready.
5. **Scale safely.** Prioritize the remaining catalogue using agreed value and readiness criteria, track generated/validated/published coverage, and provide a repeatable correction and regeneration process when source material changes.

## Definition of success

- A practical is recognizably about its own chapter, objective, and learner level—not a generic template with course names substituted.
- The selected workspace and interaction fit the discipline and task, including non-coding activities; the experience works responsively on supported screen sizes.
- Every learner task has clear instructions, useful hints, and an appropriate way to demonstrate learning. Automated checks test the intended outcome; work that cannot be graded reliably is explicitly routed to review.
- Practical generation reports source, classification, validation, runtime, and publishing status. Invalid, unsupported, or review-required work is not presented as successfully verified.
- The pilot demonstrates the full path from source chapter through generation, learner UI, evaluation, and publishing, with agreed pass criteria and a documented rollout plan for the rest of the catalogue.

## Requested handoff

Provide the audit and coverage matrix, a prioritized implementation plan, a demonstrated pilot, measurable generation and learner-experience acceptance criteria, and a scale-up/maintenance plan. Preserve functioning existing components unless the audit demonstrates a concrete reason to change them.
