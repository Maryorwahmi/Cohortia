# Terminal Coding Lab Implementation Plan

**Status:** Phases 1-3 implemented; Phase 4 generation work in progress  
**Scope:** Terminal Coding Lab activities, with contracts that can later support the other practical categories  
**Repository:** Cohortia  
**Primary pilot surface:** Existing VS Code-style learning board workbench

## 1. Executive Summary

Cohortia currently has a large, valuable corpus of hands-on activity Markdown and an existing VS Code-style practical surface, but the two systems are not yet joined end to end. The activity Markdown has been imported into `learning_board_practicals`, and the chapter API now selects database practicals before using the generated manifest as a compatibility fallback. The frontend has an expanded practical response contract, while `InteractiveSandbox` still uses track-specific run behavior instead of executing or validating the selected practical's declared checks.

This plan turns the imported activities into teachable, inspectable, and eventually executable practicals through the following pipeline:

```text
Raw activity Markdown
        |
        v
Parse and normalize
        |
        v
Classify lab type and safety profile
        |
        v
Generate versioned practical JSON
        |
        v
Validate, review, and publish
        |
        v
      Stable source record and versioned practical candidates
        |
        v
      learning_board_practicals and version-owned projections
        |
        v
Chapter API
        |
        v
VS Code-style workbench
        |
        v
Isolated execution or deterministic simulation
        |
        v
Checks, evidence, progress, and submission
```

The first implementation milestone is intentionally small and testable:

1. Query `learning_board_practicals` from `backend/src/routes/learning.js`.
2. Return one normalized practical through the chapter API.
3. Render that practical in the existing workbench for one pilot activity.

Batch generation of all 2,780 Terminal Coding Labs comes after this contract is proven. Generating thousands of practicals before the API, execution, safety, and review boundaries are stable would create a large set of artifacts that the product cannot reliably teach or validate.

## 2. Current State

### 2.1 Repository components

| Concern | Current location | Current role |
| --- | --- | --- |
| Raw activity source | `hand's-on activity/` | Markdown activity corpus grouped into `advanced`, `beginner`, and `intermediate` folders |
| Raw activity importer | `backend/scripts/import-hands-on-activities.js` | Recursively parses Markdown, recognizes the four categories, deduplicates by course/module/chapter, and stores source content |
| Practical schema | `backend/src/db/schema.js` | Defines practical rows plus files, tasks, tests, attempts, and progress |
| Generated practical importer | `backend/scripts/import-learning-boards.js` | Imports generated manifests and child files, tasks, and tests |
| Legacy practical importer | `backend/scripts/import-practicals.js` | Preserves existing parent/task IDs and upserts generated practical versions |
| Practical generator | `scripts/generate-learning-board-practical.js` | Uses Gemini to generate structured files, tasks, hints, tests, narrator guidance, and completion rules |
| Broad classifier | `scripts/classify-course-practicals.mjs` | Distinguishes code and non-code practicals at a broad level |
| Chapter API | `backend/src/routes/learning.js` | Serves chapter content and selects database practicals with a manifest compatibility fallback |
| API client types | `frontend/src/services/learningBoardsApi.ts` | Defines frontend learning-board and practical response types |
| Learning board page | `frontend/src/components/dashboard/LearningBoardPage.tsx` | Fetches a chapter and switches between read, practical, and assessment views |
| Workbench | `frontend/src/components/dashboard/VSCodeWorkbench.tsx` | Provides editor, output, mentor chat, tasks, hints, narrator, and non-code presentation modes |
| Practical container | `frontend/src/components/dashboard/InteractiveSandbox.tsx` | Loads starter files and local state; currently has hard-coded, simulated run behavior |

### 2.2 Imported data baseline

The completed raw activity import contains 9,961 practical records:

| Source category | Count |
| --- | ---: |
| `Cloud Console Lab` | 2,405 |
| `Scenario & Design Exercise` | 4,339 |
| `Terminal Coding Lab` | 2,780 |
| `Research & Analysis` | 437 |
| **Total** | **9,961** |

The import audit confirmed:

- All rows have one of the four expected categories.
- No imported row has empty source content.
- There are no duplicate course/module/chapter keys after importer deduplication.
- There are no orphaned practical files, tasks, or tests.
- Only 2 files, 6 tasks, and 14 tests currently exist from older generated practical data. The imported Terminal Coding Lab rows are therefore mostly raw source records, not yet generated workspaces.

### 2.3 Current behavior gaps

1. **Database/API gap:** The chapter route now reads database practicals, but version selection is still compatibility-based and must move to the published version table before learner attempts are added.
2. **Contract gap:** The database has a source category, but no formal internal `labType` or structured environment/safety/check metadata.
3. **Identity gap:** New raw imports use a `practical-...` convention, while existing rows may retain `activity-...` IDs. The Phase 3 migration preserves both forms and the generated importer no longer deletes and recreates referenced parents or tasks.
4. **Generation gap:** The generator knows about files, tasks, hints, tests, narrator guidance, and completion rules, but not the complete environment, safety, evidence, cleanup, or execution contract required for terminal labs.
5. **Execution gap:** The frontend simulates run behavior and does not call a practical execution or validation API.
6. **Product gap:** The workbench has a `mode` prop, but the caller does not consistently derive or pass mode from practical metadata.
7. **Safety gap:** Terminal, system, cloud, network, and security activities cannot execute arbitrary learner commands on the application host.
8. **Operational gap:** The database now has generation state and version records, but there is still no generation queue, review workflow, version-owned child projection, or batch report for the remaining corpus.

## 3. Goals and Non-Goals

### 3.1 Goals

- Preserve raw Markdown as the source of truth.
- Create a stable normalized contract between source, generation, storage, API, and UI.
- Classify Terminal Coding Labs into behaviorally meaningful `labType` values.
- Render one practical through the existing workbench before broad generation.
- Support genuine checks where execution is safe and deterministic simulation where it is not.
- Isolate all code, shell, database, network, and system execution from the backend host.
- Track attempts, progress, check results, evidence, resets, and submissions without losing history.
- Make generated practicals reproducible through source hashes, schema versions, and generator versions.
- Provide a staged, reviewable path for all 2,780 Terminal Coding Labs.
- Keep the design extensible to `Cloud Console Lab`, `Scenario & Design Exercise`, and `Research & Analysis`.

### 3.2 Non-goals for the first release

- Generating or publishing all 2,780 Terminal Coding Labs in one operation.
- Running arbitrary commands with host privileges.
- Connecting learner workspaces to production cloud accounts, production databases, or real credentials.
- Replacing the existing learning board visual language.
- Building a general-purpose online IDE from scratch.
- Making every activity fully executable. Some activities should remain guided simulations or evidence-based exercises.
- Rewriting the entire legacy practical importer before the first API pilot works.

## 4. Product Principles

### 4.1 Source and projection are separate

Raw Markdown answers the question, "What activity was authored?" Generated practical JSON answers, "How should the product teach and validate it?" Learner workspace state answers, "What did this learner do?" These records must not overwrite one another.

### 4.2 Category is not execution mode

The source category is useful for reporting and curriculum organization, but it is too broad to determine UI behavior. A `Terminal Coding Lab` may be a JavaScript coding exercise, a PostgreSQL lab, a RHEL troubleshooting lab, a network inspection lab, or a simulation of MFA. The internal `labType` determines the workbench mode and execution adapter.

### 4.3 Generated content is versioned and reviewable

Generation is a build step with inputs, outputs, validation, and a review state. It is not an opaque mutation of production content. A source edit or generator change must be able to produce a new candidate without destroying the previous published version.

### 4.4 Safety is a product boundary

Execution policy is part of the practical contract. A lab that cannot be safely executed must declare simulation or manual evidence requirements rather than quietly falling back to fake success.

### 4.5 The existing workbench is the first delivery surface

The initial implementation should extend `VSCodeWorkbench` and `InteractiveSandbox` in place. New views are justified only when a lab type genuinely needs a different interaction model, such as a cloud-console simulator or a network topology view.

## 5. Canonical Activity Model

### 5.1 Raw Markdown contract

The importer should continue to store the complete original Markdown in `sourceContent` and its repository-relative path in `sourcePath`. The parser should also extract normalized fields when available, while retaining unknown frontmatter and headings for later review.

The normalized source record should contain, at minimum:

```text
sourceKey
courseId
moduleId
chapterId
activityId, when authored
title
level
category
sourcePath
sourceContent
sourceHash
frontmatter
headings
objectives
prerequisites
instructions
expectedOutputs
requiredTools
environmentHints
safetyNotes
cleanupNotes
assessmentHints
```

Rules:

- `sourceKey` is the stable course/module/chapter identity used for idempotent imports.
- `sourceContent` is never replaced with generated content.
- `sourceHash` is computed from normalized source content and relevant metadata using a documented hash algorithm such as SHA-256.
- Missing fields remain explicit nulls or empty arrays after normalization; the generator must not infer that missing information is present.
- Unknown frontmatter and unrecognized sections are retained in structured form so a parser upgrade does not silently discard author intent.
- Deduplication continues to choose the most complete candidate using a deterministic rule. The chosen path and discarded candidates must be recorded in the import report.

### 5.2 Normalization stages

Implement normalization as a sequence with independently testable outputs:

1. **Discovery:** Find Markdown files under `hand's-on activity/` and record relative paths.
2. **Frontmatter parse:** Parse YAML or the repository's existing frontmatter format through a real parser. Do not use ad hoc line splitting for structured values.
3. **Identity resolution:** Resolve course, module, and chapter identifiers from frontmatter and path fallbacks. Mark ambiguous identities as review-required.
4. **Category validation:** Accept only the four canonical source categories. Preserve the original value in diagnostics when it is invalid.
5. **Section extraction:** Extract headings and known sections without dropping the original body.
6. **Content quality checks:** Detect empty instructions, placeholder text, malformed code fences, missing objectives, and contradictory metadata.
7. **Hashing:** Compute `sourceHash` after canonical normalization and attach importer version.
8. **Database upsert:** Upsert by `sourceKey`, preserve the persisted practical ID, and update only source-owned fields.
9. **Report:** Emit counts, duplicates, warnings, skipped files, and failed records in a machine-readable report.

The importer must support both dry-run and write modes. A dry run must execute discovery, parsing, identity, category, quality, and deduplication checks without opening a write transaction.

### 5.3 Source-owned versus generated-owned fields

| Field group | Owner | Update rule |
| --- | --- | --- |
| Course/module/chapter identity | Source importer | Update only when source identity is corrected through an explicit migration |
| Category, source path, source content, source hash | Source importer | Update on source change |
| `labType`, confidence, environment requirements | Classifier/generator | Recompute when source hash or classifier version changes |
| Practical title and learning objectives | Generator, subject to review | Replace only in a new generated version |
| Files, tasks, checks, hints, evidence, cleanup | Generator/reviewer | Publish as a versioned projection |
| Learner attempts and progress | Learner service | Never delete during regeneration |
| Published version pointer | Editorial/release workflow | Move only after validation and review |

## 6. Lab Classification

### 6.1 Proposed internal values

Use a small, explicit set of values rather than deriving UI behavior from free-form text:

```text
code
shell
database
cloud
network
security
data
simulation
```

The source category remains `Terminal Coding Lab`. `labType` is a separate field. A future source category can use the same values where appropriate.

### 6.2 Classification rules

| `labType` | Typical signals | Default delivery |
| --- | --- | --- |
| `code` | JavaScript, TypeScript, Python, Java, C, functions, classes, tests, modules, algorithms | Editor plus isolated runtime and automated checks |
| `shell` | Bash, PowerShell, RHEL, processes, services, files, permissions, package commands | Terminal plus isolated shell environment or command simulation |
| `database` | PostgreSQL, SQL, schemas, joins, indexes, migrations, queries, database administration | SQL editor/terminal plus disposable database or deterministic SQL simulator |
| `cloud` | Cloud CLI, IAM, buckets, deployments, managed services, provider consoles | Provider-neutral simulator or tightly scoped sandbox account |
| `network` | DNS, ports, routes, interfaces, firewall, packets, connectivity | Network simulator, fixture-based command checks, or isolated network namespace |
| `security` | SELinux, MFA, authentication, authorization, secrets, hardening | Simulation or disposable environment; never real learner credentials |
| `data` | Matplotlib, pandas, CSV, ETL, statistics, visualization | Isolated Python/data runtime and artifact checks |
| `simulation` | MFA walkthroughs, conceptual operations, unavailable tools, irreversible actions | State machine, form-based scenario, or manual evidence workflow |

### 6.3 Classification output

The classifier should emit:

```json
{
  "labType": "shell",
  "confidence": 0.91,
  "signals": ["rhel", "monitoring", "firewall", "terminal commands"],
  "requiresReview": false,
  "safetyProfile": "isolated-system",
  "classifierVersion": "terminal-lab-classifier-v1"
}
```

Rules for low-confidence or conflicting records:

- Confidence below the agreed threshold, initially `0.75`, enters `review_required`.
- Multiple strong lab-type signals may produce a primary type plus secondary capabilities, but the workbench still receives one primary execution adapter.
- Activities involving real credentials, destructive infrastructure changes, unrestricted network access, privilege escalation, or production operations default to `simulation` until explicitly reviewed.
- Classification decisions are stored with the practical candidate so regeneration can be audited.

### 6.4 Pilot classification set

Use three intentionally different pilots:

1. **JavaScript control-flow lab:** `code`, lowest infrastructure risk, proves editor/runtime/check flow.
2. **PostgreSQL setup or administration lab:** `database`, proves a stateful disposable service or SQL simulator.
3. **RHEL monitoring/troubleshooting lab:** `shell`, `network`, or `security` depending on the specific activity, proves command output, environment constraints, and safe simulation.

An MFA simulation activity should be retained as a later `simulation` pilot, not treated as a terminal runtime simply because it mentions commands or authentication.

## 7. Practical JSON Contract

### 7.1 Versioning

Every generated practical must declare:

```json
{
  "schemaVersion": 1,
  "generatorVersion": "learning-board-practical-v1",
  "sourceHash": "sha256:...",
  "classifierVersion": "terminal-lab-classifier-v1"
}
```

Schema validation must happen before database publication. The database may store the JSON projection for forward compatibility, but frequently queried fields should also be indexed columns.

### 7.2 Proposed shape

The existing generator fields remain supported. The following contract adds the missing execution and teaching metadata:

```json
{
  "schemaVersion": 1,
  "practicalId": "practical-course-module-chapter",
  "source": {
    "sourceKey": "course/module/chapter",
    "category": "Terminal Coding Lab",
    "sourcePath": "hand's-on activity/beginner/example.md",
    "sourceHash": "sha256:..."
  },
  "title": "Inspect a running process",
  "summary": "...",
  "level": "beginner",
  "labType": "shell",
  "learningObjectives": [
    "..."
  ],
  "prerequisites": [
    "..."
  ],
  "environment": {
    "adapter": "shell-sandbox",
    "runtime": "debian:stable-slim",
    "workingDirectory": "/workspace",
    "requiredTools": ["ps"],
    "network": "disabled",
    "resourceLimits": {
      "timeoutSeconds": 30,
      "memoryMb": 256,
      "outputKb": 128
    },
    "resetStrategy": "fresh-workspace"
  },
  "files": [
    {
      "path": "main.js",
      "language": "javascript",
      "content": "...",
      "editable": true
    }
  ],
  "tasks": [
    {
      "id": "task-1",
      "title": "...",
      "instructions": "...",
      "required": true,
      "checkIds": ["check-1"]
    }
  ],
  "checks": [
    {
      "id": "check-1",
      "type": "command",
      "command": "node --test",
      "workingDirectory": "/workspace",
      "timeoutSeconds": 10,
      "visibility": "learner",
      "passCondition": {
        "exitCode": 0
      },
      "score": 1
    }
  ],
  "hints": [
    {
      "id": "hint-1",
      "text": "...",
      "unlockAfterAttempt": 1
    }
  ],
  "evidence": [
    {
      "id": "evidence-1",
      "type": "terminal-output",
      "label": "Passing test output",
      "required": true,
      "redactSecrets": true
    }
  ],
  "safety": {
    "profile": "isolated-code",
    "networkAccess": "disabled",
    "hostAccess": "none",
    "requiresManualReview": false,
    "prohibitedOperations": ["..."],
    "learnerWarning": "..."
  },
  "cleanup": {
    "strategy": "discard-workspace",
    "instructions": "..."
  },
  "narratorGuide": "...",
  "completionRules": {
    "requiredChecks": ["check-1"],
    "minimumScore": 1,
    "requiresEvidence": true
  }
}
```

### 7.3 Contract rules

- Paths are relative to the declared workspace; reject absolute paths and traversal such as `..`.
- Commands are data in a validated manifest, not direct authority. The execution adapter must apply an allowlist and policy before running them.
- A check must declare its adapter and timeout. There is no implicit host shell.
- `manual` checks cannot report automated success. They produce a pending or reviewer-required state.
- A generated practical with missing safety, environment, or completion metadata cannot be published as executable.
- Secrets, tokens, private keys, and credential-like values must be rejected or redacted during generation and before persistence.
- Learner-visible hints may not expose hidden test answers unless the hint policy permits it.
- Every task must map to at least one check, evidence item, or explicit manual completion rule.

## 8. Database and Migration Plan

### 8.1 Existing data model

The practical model already has parent and child tables:

- `learning_board_practicals`
- `learning_board_practical_files`
- `learning_board_practical_tasks`
- `learning_board_practical_tests`
- `student_practical_attempts`
- `student_practical_progress`

The parent currently stores source category, source path, and source content. The child rows hold only a small amount of generated data from earlier imports.

### 8.2 Parent practical additions

The following fields are implemented through the additive `practical-identity-v1` migration:

| Field | Purpose |
| --- | --- |
| `sourceKey` | Unique course/module/chapter identity for idempotent imports |
| `sourceHash` | Detect source changes and avoid unnecessary regeneration |
| `labType` | Select classifier result and workbench/execution adapter |
| `classifierVersion` | Explain how the lab type was assigned |
| `schemaVersion` | Version of normalized practical JSON |
| `generatorVersion` | Reproduce generated output |
| `generationStatus` | Track raw, queued, generated, review-required, published, and failed states |
| `generationError` | Preserve the latest failure without destroying source data |
| `generatedAt` | Identify when a candidate was produced |
| `publishedVersion` | Point to the version learners should receive |
| `practicalJson` | Store the validated normalized projection, if JSON storage is used in this codebase |
| `environmentJson` | Store indexed or easily queried environment metadata |
| `safetyJson` | Store execution and review policy |
| `evidenceJson` | Store evidence requirements when not split into a child table |
| `cleanupJson` | Store reset and cleanup behavior |

Use the repository's naming convention for Drizzle schema properties and database columns. Do not silently mix camelCase and snake_case in API payloads; define the mapping once at the database boundary.

Run the migration from `backend` with `npm run db:migrate-practical-identity`. The migration is also initialized defensively by both practical importers so a fresh local database cannot silently recreate the old column set.

### 8.3 Version strategy

Do not replace a published practical in place when a learner has attempts against it. The selected approach is a stable source record plus a separate version table:

- `learning_board_practicals` remains the one source/activity record per course/module/chapter. It owns the Markdown source, category, source path, and stable identity.
- Add a `learning_board_practical_versions` table keyed by the stable practical ID and version number. It owns generated status, normalized JSON, generator/classifier versions, and publication state.
- Generated files, tasks, and checks must reference the version record, while learner attempts pin the exact published version they used.

This keeps source-only records discoverable before generation, supports multiple candidates and review history, and prevents regeneration from invalidating learner attempts. The version table and legacy published records are now present. Version-owned file/task/test rows and attempt/progress references remain a later migration boundary; the Phase 1-3 compatibility API still reads legacy child rows from the parent until those links are introduced.

### 8.4 Stable IDs and legacy IDs

Stable identity must be resolved before progress and submission features are expanded.

Recommended policy:

- Define a canonical `sourceKey` from normalized course, module, and chapter IDs.
- Generate new IDs deterministically as `practical-<slug-or-hash>`.
- Preserve existing row IDs when they are already referenced by child or learner tables.
- Do not run a delete-and-recreate import against production practicals.
- For existing `activity-...` rows, either migrate IDs transactionally with all foreign-key references or retain the row ID and add a canonical source key/alias. The safer default is to preserve the primary key and normalize identity through `sourceKey` first.
- Make all importers look up and use the persisted parent ID before inserting child rows. The generated child import already follows this pattern and must retain it.

### 8.5 Migration sequence

1. [x] Add nullable metadata columns and the version table.
2. [x] Backfill `sourceKey`, `sourceHash`, `generationStatus`, and legacy publication metadata.
3. [x] Detect duplicate source identities and verify the imported corpus has no collisions.
4. [x] Preserve existing `activity-...`, UUID, and deterministic `practical-...` parent IDs.
5. [x] Change practical importers to reuse persisted parent IDs and avoid destructive parent replacement.
6. [ ] Add version-owned file/task/test rows and attempt/progress references.
7. [x] Run the chapter route in read-only compatibility mode after the backfill.

Every migration must be rerunnable or fail with a clear already-applied message. Backups and a rollback note are required before production data changes.

### 8.6 Phase 3 rollback notes

`practical-identity-v1` is additive. It does not delete practicals, child rows, attempts, or progress. A rollback should therefore proceed in this order:

1. Stop the importer and deploy code that does not require the new columns or version table.
2. Keep the added columns and version rows in place; older code ignores them safely.
3. If the migration must be fully reversed, restore a database backup or snapshot rather than dropping columns or deleting version rows manually.
4. Re-run the Phase 0 and Phase 3 verifiers after restoration.

The migration command is intentionally rerunnable. Re-running it updates missing identity metadata and inserts missing legacy version records with `ON CONFLICT DO NOTHING`; it does not generate a new parent ID.

## 9. Generator and Review Workflow

### 9.1 Generator changes

Extend `scripts/generate-learning-board-practical.js` to accept:

- normalized source record rather than a loosely assembled text prompt;
- the matching hands-on activity Markdown and the relevant lesson Markdown from `docs/computer-science/`;
- controlled source paths and hashes for both inputs so generated candidates are reproducible;
- `labType` and classifier signals;
- environment adapter and required tools;
- safety profile and prohibited operations;
- checks and their validation types;
- evidence requirements;
- cleanup/reset strategy;
- source hash, schema version, classifier version, and generator version;
- a generation mode that can produce a candidate without publishing it.

The generator prompt should tell the model to preserve the activity's learning goal and not invent unavailable tools or credentials. It should return schema-valid JSON only. The caller remains responsible for validation, safety policy, and persistence.

The generator must read repository context through a controlled resolver owned by the script. It should resolve the course/module/chapter from known repository roots and pass the selected content into the prompt; it must not receive arbitrary client-supplied filesystem paths or be expected to browse the repository itself.

### 9.2 Candidate states

Use an explicit lifecycle:

```text
raw
  -> classified
  -> queued
  -> generated
  -> validation_failed
  -> review_required
  -> approved
  -> published
  -> superseded
```

A failed or rejected candidate must retain diagnostics while leaving the last published version available to learners.

### 9.3 Validation gates

Before a candidate can be approved:

1. JSON schema validation succeeds.
2. Required source identity and source hash match the input record.
3. `labType` is in the allowed set.
4. Every task has a completion path.
5. Every automated check has an adapter, timeout, and safe working directory.
6. File paths pass traversal and size checks.
7. Commands pass the adapter policy and contain no credential material.
8. Safety and cleanup metadata are present.
9. Static checks do not identify forbidden host operations or network assumptions.
10. A human or explicit policy approves low-confidence, high-risk, or simulation activities.

### 9.4 Review queue

The review view/report should expose:

- source path and source excerpt;
- generated title, objectives, and lab type;
- classifier confidence and signals;
- environment and safety profile;
- task/check/evidence counts;
- validation errors and warnings;
- generated diff against the previous published version;
- approve, reject, regenerate, and publish actions;
- reviewer identity and timestamp.

A practical must not be published solely because Gemini returned parseable JSON.

### 9.5 Idempotent regeneration

For each source record:

- If `sourceHash`, `generatorVersion`, `classifierVersion`, and schema version match a published candidate, skip generation unless forced.
- If only generated metadata changes, create a new candidate version.
- If source content changes, regenerate and mark the previous candidate `superseded` only after the new candidate passes review.
- A force regeneration must be explicit and included in the batch report.
- Never reset learner attempts as a side effect of regeneration.

## 10. API Integration Plan

### 10.1 First implementation milestone

The first coding milestone is the highest priority because it proves the database-to-UI contract before more generated data is created.

1. Update `backend/src/routes/learning.js` to query `learning_board_practicals` using the chapter's stable course/module/chapter identity.
2. Select the published structured practical when one exists.
3. Fall back to the existing manifest practical or a raw-source response behind an explicit compatibility path when no structured practical exists.
4. Return one canonical `practical` property. Remove the duplicate practical properties currently returned by the route.
5. Include category, `labType`, practical version, files, tasks, checks, hints, evidence, safety, environment, cleanup, and completion rules when present.
6. Update `frontend/src/services/learningBoardsApi.ts` with matching types.
7. Pass practical metadata and the selected mode from `LearningBoardPage` into `InteractiveSandbox` and `VSCodeWorkbench`.
8. Render the JavaScript control-flow pilot using the existing workbench.
9. Add a focused route test and a focused frontend build/type validation.

This milestone is complete only when a chapter request returns the database practical and the browser renders that practical without relying on a hard-coded track name.

### 10.2 Compatibility response shape

During migration, the chapter response should make the source explicit:

```json
{
  "practical": {
    "id": "practical-course-module-chapter",
    "version": 1,
    "source": "database",
    "category": "Terminal Coding Lab",
    "labType": "code",
    "status": "published",
    "title": "...",
    "files": [],
    "tasks": [],
    "checks": [],
    "hints": [],
    "evidence": [],
    "environment": {},
    "safety": {},
    "cleanup": {},
    "completionRules": {}
  }
}
```

`source` is temporary observability metadata and should be removed or made internal once the migration is complete. A missing published candidate should be distinguishable from a published practical with an empty file list.

### 10.3 Proposed practical endpoints

Keep the existing chapter endpoint as the read integration point. Add dedicated practical endpoints only when the first read path is stable:

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `GET` | Existing chapter endpoint | Return the selected practical projection with chapter content |
| `GET` | `/api/practicals/:practicalId` | Return practical metadata and current learner state |
| `POST` | `/api/practicals/:practicalId/attempts` | Create or resume an attempt pinned to a practical version |
| `POST` | `/api/practicals/:practicalId/attempts/:attemptId/run` | Execute a declared check or run request through an adapter |
| `POST` | `/api/practicals/:practicalId/attempts/:attemptId/submit` | Submit completion and evidence for evaluation |
| `POST` | `/api/practicals/:practicalId/attempts/:attemptId/reset` | Discard or reset workspace state according to cleanup policy |
| `GET` | `/api/practicals/:practicalId/attempts/:attemptId` | Return progress, check results, and evidence status |

The exact route prefix should follow the existing Hono route convention. Do not add a second authentication model; reuse current user and enrollment authorization middleware.

### 10.4 Run request contract

A run request should contain references, not arbitrary server instructions:

```json
{
  "attemptId": "attempt-...",
  "action": "run-checks",
  "checkIds": ["check-1"],
  "workspaceRevision": 4,
  "clientRequestId": "uuid"
}
```

The server must load the published practical by ID and version, verify the learner owns the attempt, and derive commands from stored checks. It must ignore a client-supplied command, image, mount, network setting, or resource limit.

### 10.5 Authorization and failure behavior

- Require authentication for attempts, runs, evidence, and progress.
- Verify course enrollment or equivalent access before returning practical source or generated content.
- Return a stable error code for unavailable environment, invalid practical, expired attempt, policy rejection, timeout, and validation failure.
- Do not expose internal stack traces, secrets, sandbox paths, or hidden test details.
- Use idempotency keys for attempt creation, run requests, submissions, and resets.
- Keep request and output limits explicit so a terminal or output pane cannot exhaust the API process.

## 11. Frontend Workbench Plan

### 11.1 Data flow changes

Update the following files in this order:

1. `frontend/src/services/learningBoardsApi.ts`: Add the API contract and discriminated types for `labType`, environment, checks, evidence, run results, and progress.
2. `frontend/src/components/dashboard/LearningBoardPage.tsx`: Select the database practical, create or resume an attempt, and pass the practical contract down.
3. `frontend/src/components/dashboard/InteractiveSandbox.tsx`: Replace track-specific simulation with practical-driven actions and attempt state.
4. `frontend/src/components/dashboard/VSCodeWorkbench.tsx`: Render mode-specific panels based on `labType` and execution state.

Remove the unreachable legacy JSX return in `InteractiveSandbox` after the active path has equivalent behavior and focused tests. This should be a separate small cleanup within the same practical-surface change, not a broad UI rewrite.

### 11.2 Mode behavior

| `labType` | Workbench presentation | Primary action |
| --- | --- | --- |
| `code` | Explorer, editor, terminal/output, tasks, checks | Run tests or declared program |
| `shell` | Explorer, terminal, output, task checklist | Run selected safe checks or commands in sandbox |
| `database` | SQL editor, schema/data panel, results, task checklist | Execute SQL/checks against disposable database |
| `cloud` | Terminal plus provider-neutral resource/state panel | Apply simulated action and inspect resulting state |
| `network` | Terminal, topology/state panel, output | Run fixture-based inspection or simulator action |
| `security` | Terminal or state machine, policy/evidence panel | Apply safe simulated control and verify state |
| `data` | Editor/notebook-like files, output, artifact preview | Run data checks and inspect generated artifact |
| `simulation` | Scenario state, decision/input panel, evidence checklist | Make decisions and submit evidence; no fake terminal success |

The workbench should receive `labType` from the practical contract. A track or course name may provide a display label but must not decide execution behavior.

### 11.3 Interaction states

The UI needs distinct states for:

- loading practical and attempt;
- practical unavailable or not yet generated;
- environment provisioning;
- ready;
- run requested;
- running;
- passed with check results;
- failed with actionable output;
- timed out;
- policy blocked;
- manual evidence pending;
- reset in progress;
- submitted;
- stale workspace revision.

The output panel should distinguish command output, check explanation, and mentor guidance. A failed check should identify the task and next useful action without exposing hidden validation details.

### 11.4 Local state and persistence

The browser may optimistically keep editor buffers and panel state, but the server remains authoritative for attempts, check results, progress, evidence, and submissions. Save or autosave must send a workspace revision rather than trusting a browser-only state.

A reset must clearly identify whether it resets:

- only unsaved editor changes;
- the current workspace;
- the disposable service/database;
- the entire learner attempt.

These are different operations and should not share one ambiguous button action.

## 12. Execution Architecture

### 12.1 Adapter boundary

Create a backend adapter interface instead of putting execution logic in the route:

```text
PracticalExecutionService
  -> CodeSandboxAdapter
  -> ShellSandboxAdapter
  -> DatabaseSandboxAdapter
  -> SimulationAdapter
  -> CloudSimulationAdapter
  -> NetworkSimulationAdapter
```

The service is responsible for authorization, loading the pinned practical version, applying policy, creating an attempt workspace, recording a run, and normalizing results. Adapters are responsible for provisioning and checking their isolated environment.

### 12.2 Pilot execution order

1. **Code adapter:** Use a disposable workspace with a small allowlisted runtime. No network, no host mounts, strict timeout and output limits.
2. **Database adapter:** Use a disposable local database or a deterministic SQL engine. Seed only fixture data required by the practical.
3. **Shell adapter:** Use a sandbox/container with a restricted command set. For RHEL-specific behavior, prefer a simulation or fixture layer until the required image and policy are proven.
4. **Simulation adapter:** Implement a deterministic state machine for activities that cannot safely or meaningfully execute.
5. **Cloud/network/security adapters:** Add only after the corresponding safety model, fixtures, and reset semantics are reviewed.

### 12.3 Result contract

Normalize all adapters to a common result:

```json
{
  "runId": "run-...",
  "status": "completed",
  "startedAt": "...",
  "finishedAt": "...",
  "checks": [
    {
      "checkId": "check-1",
      "status": "passed",
      "score": 1,
      "summary": "Tests passed",
      "stdout": "...",
      "stderr": "",
      "durationMs": 128
    }
  ],
  "artifacts": [],
  "evidence": [],
  "policy": {
    "network": "disabled",
    "hostAccess": "none"
  }
}
```

The API should redact or truncate output before returning it. Store full output only when retention and privacy rules permit it.

### 12.4 Deterministic simulation

Simulation is an honest delivery mode, not a fake terminal. It should define:

- initial state;
- allowed learner actions;
- state transitions;
- observable outputs;
- validation rules;
- reset behavior;
- evidence produced by each action;
- manual review requirements, if any.

For example, an MFA activity can model enrollment, challenge, invalid code, recovery, and lockout states without contacting an identity provider or accepting a real secret.

## 13. Safety and Security Requirements

These requirements apply before any executable pilot is enabled for learners.

### 13.1 Isolation

- Never execute learner commands on the Node.js host process.
- Never mount the repository, host home directory, `.env` files, database files, or Docker socket into a learner environment.
- Disable network by default. Enable only a documented, allowlisted fixture network.
- Run as a non-root user where the adapter permits it.
- Apply CPU, memory, process, filesystem, wall-clock, output, and workspace-size limits.
- Use one workspace per attempt or per run according to the reset strategy.
- Destroy temporary environments after expiry, reset, or terminal failure.

### 13.2 Command and file policy

- Derive commands from the stored practical version, never from a raw client string.
- Validate command arguments against an adapter-specific allowlist.
- Reject shell metacharacters and command chaining when the adapter does not explicitly need them.
- Reject absolute paths and traversal.
- Limit file count, path length, file size, and binary content.
- Scan generated and learner content for credential-like values before persistence or display.
- Treat generated manifests as untrusted input until policy validation succeeds.

### 13.3 Sensitive activity policy

Default to `simulation` or `review_required` for:

- real cloud credentials or access tokens;
- production resource changes;
- privilege escalation;
- persistence or destructive deletion;
- real authentication or MFA secrets;
- unrestricted port scanning or external network access;
- malware analysis involving untrusted live payloads;
- operations that could affect other learners or shared infrastructure.

### 13.4 Observability

Record policy decisions and adapter timings without recording secrets. Include practical ID, version, attempt ID, check ID, adapter, status, and failure code. Keep learner-visible output separate from internal diagnostics.

## 14. Learner Progress, Attempts, and Evidence

### 14.1 Attempt lifecycle

```text
created -> active -> running -> paused -> submitted
                         |          |
                         v          v
                      failed     expired
                         |
                         v
                       reset
```

An attempt must reference:

- learner ID;
- practical ID;
- practical version;
- course/module/chapter context;
- creation and last activity timestamps;
- workspace revision;
- status;
- score/progress summary;
- reset count and reason.

### 14.2 Check results

Store one immutable result per run/check combination or an append-only run record with a current summary. Required fields include:

- run ID and attempt ID;
- practical version and check ID;
- status (`passed`, `failed`, `blocked`, `timed_out`, `manual_pending`);
- score;
- safe learner summary;
- internal diagnostic code;
- timestamps and duration;
- artifact references where applicable.

### 14.3 Evidence

Evidence can be:

- terminal output;
- a file or diff;
- a generated chart or report;
- a simulator state transition;
- a screenshot or uploaded artifact, subject to size and privacy limits;
- a reviewer decision.

Each evidence record needs a type, source, practical version, attempt, redaction status, checksum where applicable, and retention policy. Evidence should be linked to a task/check so completion rules can evaluate it.

### 14.4 Regeneration and learner history

A new practical version must not rewrite old check results. Learners who already started an attempt continue against the pinned version unless an explicit migration policy is introduced. New attempts receive the current published version.

## 15. Implementation Phases

### Phase 0: Baseline and contracts

**Deliverables**

- Record current row counts and database audit output.
- Add the practical contract document or schema fixture used by both generator and API.
- Decide the exact versioning strategy and execution provider boundary.
- Add pilot source keys for JavaScript, PostgreSQL, and RHEL activities.

**Gate**

- The team can identify one source record, one generated candidate, one database row, and one API response without ambiguity.

**Phase 0 artifacts**

- [x] `docs/schemas/learning-board-practical-v1.schema.json`: versioned normalized practical contract.
- [x] `docs/terminal-coding-lab-pilots.json`: verified pilot source keys, persisted IDs, lab types, adapters, and review flags.
- [x] `docs/terminal-coding-lab-phase-0-baseline.json`: captured database counts and integrity baseline.
- [x] `backend/scripts/verify-terminal-coding-lab-phase0.js`: repeatable schema, manifest, baseline, database, and pilot-row verification.
- [x] `npm run db:verify-terminal-coding-lab-phase0` from `backend`: Phase 0 verification command.

### Phase 1: Database practicals into the chapter API

**Deliverables**

- Query `learning_board_practicals` in `backend/src/routes/learning.js`.
- Return one canonical practical property.
- Select a published database practical and preserve a compatibility fallback.
- Add API response types in `frontend/src/services/learningBoardsApi.ts`.
- Add `backend/scripts/verify-terminal-coding-lab-phase1.js` and the `npm run db:verify-terminal-coding-lab-phase1` command.

**Gate**

- A focused request for the JavaScript pilot returns the persisted practical ID and category as a database-backed `source_only` practical, with explicit nullable lab-type/version fields and empty generated child collections.
- A child-backed practical returns `published` status with matching files, tasks, and tests, and an unknown course/module/chapter key still returns 404.

### Phase 2: One pilot in the existing workbench

**Deliverables**

- Pass practical metadata from `LearningBoardPage` to `InteractiveSandbox` and `VSCodeWorkbench`.
- Remove track-specific mode assumptions from the pilot path.
- Render files, tasks, hints, and declared checks.
- Keep run behavior explicitly marked as compatibility/simulation until the execution adapter is ready.
- Make practical-only courses and chapters discoverable through the normal board listing endpoints, without overwriting existing generated chapter rows.
- Add `backend/scripts/verify-terminal-coding-lab-phase2.js` and the `npm run db:verify-terminal-coding-lab-phase2` command.

**Gate**

- The JavaScript pilot loads from the database and its UI changes when its `labType` changes, without editing a course-specific conditional.
- All practical-backed course IDs are present in the course listing, and the three pilot chapters are reachable through normal course navigation while their generated projections are pending.

### Phase 3: Stable identity and migration

**Deliverables**

- [x] Add `sourceKey`, source hash, generation status, versions, lab type, and safety metadata.
- [x] Audit `activity-` versus `practical-` IDs.
- [x] Stop delete/recreate behavior in `backend/scripts/import-practicals.js`.
- [x] Add migration and rollback notes.
- [x] Add `backend/scripts/verify-terminal-coding-lab-phase3.js` and the `npm run db:verify-terminal-coding-lab-phase3` command.

**Gate**

- Re-running the importer produces no duplicate practicals, does not change persisted IDs unnecessarily, and leaves child/learner references intact. The Phase 3 verifier reports `9,961` unique source keys, zero source-hash mismatches, zero orphan attempts/progress rows, and zero orphan version rows on the current database.

### Phase 4: Classification and normalized generation

**Deliverables**

- Extend `scripts/classify-course-practicals.mjs` with the eight lab types and confidence.
- Extend `scripts/generate-learning-board-practical.js` with environment, safety, checks, evidence, cleanup, and version fields.
- Add schema validation and static safety validation.
- Write candidates with `review_required` or `generated` state; do not publish automatically.
- Generate a complete selected module in one Gemini request, returning a chapter-keyed practical array and writing one validated manifest per chapter.
- Retry, resume, skip, and audit module batches without changing chapter-level source identity or learner progress keys.

**Gate**

- All three pilot activities produce valid candidates, and unsafe or ambiguous activities are blocked or routed to review.

### Phase 5: Attempt and practical read APIs

**Deliverables**

- Add attempt creation/resume and progress retrieval.
- Pin attempts to practical versions.
- Add workspace revision and idempotency handling.
- Add reset semantics.

**Gate**

- A learner can create, reload, and reset a pilot attempt without losing the published practical or creating duplicate attempts.

### Phase 6: Code execution adapter

**Deliverables**

- Implement a disposable code adapter with no host access and no network.
- Add run endpoint and normalized result contract.
- Persist check results and safe output.
- Replace the pilot simulation with real isolated checks.

**Gate**

- Passing, failing, timed-out, oversized-output, traversal, and policy-blocked fixtures all behave as expected.

### Phase 7: Database and shell adapters

**Deliverables**

- Implement disposable database/SQL execution.
- Implement restricted shell or shell simulation for the RHEL pilot.
- Add reset and cleanup tests for services, files, and fixtures.

**Gate**

- PostgreSQL and RHEL pilots demonstrate truthful pass/fail results and cannot reach host files or external services.

### Phase 8: Evidence and submission

**Deliverables**

- Add evidence storage, redaction, artifact limits, and submission evaluation.
- Add manual review state for simulation and high-risk activities.
- Display progress and evidence requirements in the workbench.

**Gate**

- A completed pilot has inspectable task/check/evidence history and can be submitted without exposing secrets or hidden tests.

### Phase 9: Batch generation and review

**Deliverables**

- Queue the remaining Terminal Coding Labs in bounded batches.
- Generate candidates with source/generator/classifier hashes.
- Produce review reports grouped by lab type, confidence, safety profile, and failure reason.
- Publish only approved candidates.

**Gate**

- The batch can be paused, resumed, retried, and audited. A failed batch does not remove existing published practicals.

### Phase 10: Expand other categories

Apply the same source, practical, API, and evidence contracts to:

- `Cloud Console Lab` using cloud-state simulation first;
- `Scenario & Design Exercise` using structured decisions, artifacts, and rubric evaluation;
- `Research & Analysis` using evidence and citation-oriented submissions.

Do not force those categories into a terminal editor when a different presentation is more faithful to the learning objective.

## 16. Batch Processing Plan for 2,780 Terminal Coding Labs

### 16.1 Preflight

Before generation:

1. Verify database backup or restorable copy.
2. Run raw import dry run and database audit.
3. Confirm no assessment or other writer is holding the SQLite journal.
4. Backfill source hashes and lab classifications.
5. Confirm generator credentials are available through the existing environment mechanism and are not written to reports.
6. Confirm schema validation and safety policy are enabled.
7. Generate a manifest containing source key, source hash, lab type, confidence, and generation status.

### 16.2 Batching

Use bounded batches, initially 25 to 50 activities. Store a checkpoint after each record and batch:

```text
batchId
sourceKey
sourceHash
generatorVersion
classifierVersion
status
attemptCount
startedAt
finishedAt
errorCode
reviewRequired
```

Run one category/lab-type slice at a time. Start with `code`, then `database`, then `shell`, and route `cloud`, `network`, `security`, and `simulation` to review-oriented queues until their adapters exist.

### 16.3 Quality sampling

For each batch:

- automatically validate every candidate;
- manually inspect at least 10 percent or 10 records, whichever is larger, during pilot rollout;
- inspect every low-confidence or high-risk record;
- run a representative subset through the actual adapter;
- compare generated objectives and tasks to source excerpts;
- record rejection reasons rather than silently retrying until output looks acceptable.

Reduce sampling only after several batches meet agreed quality thresholds.

### 16.4 Retry policy

Retry transient provider failures with bounded exponential backoff. Do not blindly retry:

- schema failures;
- safety policy failures;
- missing source identity;
- ambiguous classification;
- hallucinated tools or credentials;
- repeated quality failures.

Those records move to `review_required` with the original diagnostic.

### 16.5 Publishing

Generation and publication are separate commands or phases. A candidate becomes learner-visible only after:

1. validation;
2. safety policy;
3. review decision, if required;
4. import/upsert;
5. API read verification;
6. UI smoke test for its lab type.

## 17. Tests and Validation Matrix

### 17.1 Importer tests

- Parses each canonical category.
- Preserves source content exactly enough to reproduce the source hash.
- Resolves frontmatter and path identities.
- Deduplicates duplicate course/module/chapter records deterministically.
- Reports missing course IDs and ambiguous identities.
- Rejects invalid categories without writing them.
- Is idempotent across two write runs.
- Does not delete unrelated generated children or learner progress.

### 17.2 Classification tests

- JavaScript control flow -> `code`.
- PostgreSQL administration -> `database`.
- RHEL process/service commands -> `shell` or reviewed system profile.
- Firewall/DNS/routing -> `network`.
- SELinux/authentication/MFA -> `security` or `simulation`.
- Matplotlib/data analysis -> `data`.
- Ambiguous and destructive examples -> `review_required`.

### 17.3 Generator tests

- Valid output parses against the schema.
- Existing generator fields remain available.
- Missing checks or cleanup metadata fail validation.
- Absolute and traversal paths fail validation.
- Source hash and generator versions are preserved.
- Unsafe commands are blocked.
- Regeneration creates a candidate and does not erase the published version.

### 17.4 Backend tests

- Chapter route returns the database practical for a matching chapter.
- Legacy fallback works when no published candidate exists.
- Response contains one practical property.
- Unauthorized users cannot read or run another learner's attempt.
- Attempt creation is idempotent.
- Run requests cannot override stored commands or limits.
- Version pinning remains stable after regeneration.
- Timeout, policy block, and adapter failure produce stable error codes.

### 17.5 Frontend tests

- API types accept the full practical contract.
- `LearningBoardPage` passes `labType` and practical data to the sandbox.
- Each `labType` selects the intended panel/action set.
- Loading, unavailable, running, passed, failed, blocked, and manual states render distinctly.
- Reset and submit actions use the current attempt.
- No course-specific track conditional is required for the pilot.

### 17.6 End-to-end pilot tests

For each pilot:

1. Request the chapter.
2. Confirm the practical comes from the database.
3. Create or resume an attempt.
4. Edit a workspace file or perform the declared action.
5. Run checks.
6. Observe pass and fail outcomes.
7. Inspect evidence and progress.
8. Reset the environment.
9. Reload and confirm the correct version and state.
10. Submit only when completion rules are satisfied.

## 18. Commands and Operational Workflow

Run backend commands from the `backend` directory. The earlier root-level npm invocation failed because the database scripts are defined there.

### 18.1 Source import

```powershell
Push-Location backend
npm run db:import-hands-on-activities -- --dry-run
npm run db:import-hands-on-activities
Pop-Location
```

The dry run is required before a write. Preserve its report with the batch or migration record.

### 18.2 Syntax and build checks

```powershell
node --check backend/scripts/import-hands-on-activities.js
node --check backend/scripts/import-learning-boards.js
Push-Location frontend
npm run build
Pop-Location
```

Add focused backend tests and generator validation commands as soon as the corresponding modules exist. Do not treat a successful frontend build as proof that an execution path works.

### 18.3 Proposed generation commands

Use the existing generator entry point and add explicit flags rather than creating a second incompatible generator:

```powershell
node scripts/generate-learning-board-practical.js --source-key <source-key> --dry-run
node scripts/generate-learning-board-practical.js --source-key <source-key> --write-candidate
node scripts/generate-learning-board-practical.js --batch <batch-id> --write-candidates
```

The exact flags can follow the current script conventions. Every command must make dry run, candidate write, and publish distinct operations.

### 18.4 Audit requirements

After every import, migration, or batch, report:

- total practicals;
- counts by category and lab type;
- source-null/empty count;
- duplicate source keys;
- generation status counts;
- candidates failing schema or safety validation;
- child totals and orphan counts;
- published practicals by schema/generator version;
- attempts referencing missing practicals or versions.

## 19. Risks and Mitigations

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Generated content is syntactically valid but pedagogically weak | Learners receive confusing tasks | Review queue, source comparison, sampling, explicit objectives/check mapping |
| Arbitrary command execution | Host or infrastructure compromise | Isolated adapters, no host mounts, no network by default, policy validation |
| Stable IDs change during regeneration | Lost progress or orphaned children | Canonical source key, preserve existing IDs, version pinning, no delete/recreate |
| SQLite writer contention | Imports fail or corrupt workflow expectations | Schedule writes, detect journal/lock state, retry boundedly, keep checkpoints |
| Legacy and generated importers disagree | Duplicate or orphaned children | One persisted-ID lookup path and one source-key policy |
| API fallback hides missing generation | Product appears to work but teaches stale data | Include source/status metadata, metrics, and a visible unavailable state |
| RHEL/cloud/network tools differ from sandbox | False failures and poor instruction | Capability manifest, fixture environments, simulation fallback, adapter-specific tests |
| Learner output contains secrets | Privacy and security incident | Redaction, scanning, output limits, no real credentials, retention policy |
| Batch provider failure | Partial corpus and difficult recovery | Small batches, checkpoints, idempotent retries, candidate/publish separation |
| UI remains tied to tracks | Every new lab requires custom code | Discriminated practical contract and lab-type adapters |

## 20. Definition of Done

### First pilot done

- [ ] A raw Terminal Coding Lab has a stable source key and source hash.
- [ ] It has a reviewed `labType` and safety profile.
- [ ] A generated practical candidate passes schema and safety validation.
- [ ] The candidate is stored in `learning_board_practicals` or its version table.
- [ ] `backend/src/routes/learning.js` returns it through the chapter API.
- [ ] The response contains one canonical practical property.
- [ ] The frontend renders the candidate in the existing VS Code-style workbench.
- [ ] The workbench behavior is driven by `labType`, not a hard-coded track.
- [ ] An attempt can be created, reloaded, reset, and submitted or marked manual-pending.
- [ ] At least one check produces truthful pass and fail results.
- [ ] No learner command executes on the host.
- [ ] Focused route, generator, adapter, and frontend validation passes.

### Terminal Coding Lab rollout done

- [ ] All 2,780 source records have stable identity, source hash, category, and classification status.
- [ ] Every published executable practical has a validated adapter and safety profile.
- [ ] Low-confidence, destructive, and simulation activities are reviewable and not silently published as executable.
- [ ] Generation is resumable and idempotent.
- [ ] Published versions and learner attempts are immutable enough to preserve history.
- [ ] Batch reports include successes, failures, retries, review queue entries, and skipped records.
- [ ] The API and frontend can render every published lab type.
- [ ] Progress, evidence, reset, and submission behavior is covered by automated tests.
- [ ] No orphaned child rows or practical references exist after the rollout.

### Platform extension done

- [ ] The same source and practical contracts support the other three categories.
- [ ] Cloud, scenario, and research activities use presentation modes appropriate to their learning objective.
- [ ] Safety, evidence, review, and versioning rules remain consistent across categories.

## 21. Working Checklist by File

### Backend

- [ ] `backend/src/db/schema.js`: add metadata/version fields and indexes.
- [ ] `backend/migrate-schema.js` or the repository's migration mechanism: add rerunnable migration and rollback notes.
- [ ] `backend/scripts/import-hands-on-activities.js`: persist source key/hash and report normalization diagnostics.
- [ ] `backend/scripts/import-learning-boards.js`: preserve persisted parent IDs and import versioned child data.
- [ ] `backend/scripts/import-practicals.js`: replace delete/recreate behavior with stable upsert or retire it after migration.
- [ ] `backend/src/routes/learning.js`: query database practicals and return the canonical response.
- [ ] New practical service module: centralize lookup, publication selection, authorization, and version pinning.
- [ ] New execution service/adapters: isolate code, shell, database, and simulation behavior.
- [ ] New attempt/run/submission routes: persist lifecycle and results.

### Generation and validation

- [ ] `scripts/classify-course-practicals.mjs`: emit lab type, confidence, signals, safety profile, and classifier version.
- [ ] `scripts/generate-learning-board-practical.js`: generate the expanded contract with explicit versions.
- [ ] New schema validator: validate practical JSON before persistence.
- [ ] New safety validator: inspect paths, commands, credentials, tools, limits, and network policy.
- [ ] New batch runner/report: checkpoint, retry, pause, resume, and summarize generation.

### Frontend

- [ ] `frontend/src/services/learningBoardsApi.ts`: define practical, attempt, run, evidence, and progress types.
- [ ] `frontend/src/components/dashboard/LearningBoardPage.tsx`: load and pass the canonical practical and attempt.
- [ ] `frontend/src/components/dashboard/InteractiveSandbox.tsx`: use practical metadata and API actions.
- [ ] `frontend/src/components/dashboard/VSCodeWorkbench.tsx`: support lab-type panels and execution states.
- [ ] Add focused UI tests for loading, run, failure, reset, evidence, and submission states.

## 22. Immediate Next Actions

1. Add the first route query in `backend/src/routes/learning.js` behind a compatibility fallback.
2. Add the matching frontend practical type fields.
3. Select and identify the JavaScript control-flow pilot by stable source key.
4. Produce one validated candidate manually or through the extended generator.
5. Request the chapter through the API and verify the database practical is returned.
6. Render it in `LearningBoardPage` and `InteractiveSandbox`.
7. Add the focused tests before starting PostgreSQL or RHEL work.
8. Only after the pilot gate passes, implement versioned generation and bounded batch processing.

The success condition for the next slice is deliberately concrete: one imported activity travels from its Markdown source through the database and chapter API into the existing workbench with an explicit lab type and no hard-coded track behavior. Everything else in this plan depends on that contract being real.