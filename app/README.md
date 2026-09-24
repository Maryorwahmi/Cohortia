# Cohortia Application

The frontend and backend live together in this folder so the application can be developed or deployed from one working directory.

## Development

From `app/`:

```bash
npm install
npm run dev
```

This starts Vite on `http://localhost:5173` and the API on the port configured in `backend/.env`.

## Production

From `app/`:

```bash
npm install
npm run build
npm start
```

The backend serves the built frontend and API from one origin. Set the deployment platform's start command to `npm start` and its working directory to `app`.

## Useful Commands

```bash
npm run typecheck
npm run frontend
npm run backend
```

### Practical source normalization and pilot

Normalize chapter-level hands-on activities into generator-ready records:

```bash
node scripts/normalize-hands-on-activities.js \
  --course cs50s-introduction-to-computer-science \
  --output generated/normalized-cs50-activities.json
```

List the six-activity CS50 practical pilot:

```bash
node scripts/generate-cs50-practical-pilot.js --list-only
```

Generate the pilot practicals with the existing validated practical generator
once Azure OpenAI is configured:

```bash
node scripts/generate-cs50-practical-pilot.js --provider azure
```

By default, the pilot imports each generated chapter into the configured
Turso/libSQL database immediately after writing its `practical.json`. This
means Chapter 1.1 is generated and imported before Chapter 1.2 starts. To
generate files without database writes, use `--skip-import` (or
`--dry-run` for prompt inspection):

```bash
node scripts/generate-cs50-practical-pilot.js --provider azure --skip-import
```

The importer can also upsert one existing practical directly:

```bash
node backend/scripts/import-practicals.js \
  --practical generated/learning-board-practicals/cs50s-introduction-to-computer-science/m1-c1/practical.json
```

The generator reads `AI_PROVIDER`, `AZURE_OPENAI_ENDPOINT`,
`AZURE_OPENAI_API_KEY` (or `AZURE_OPENAI_KEY`), `AZURE_OPENAI_DEPLOYMENT`, and optional
`AZURE_OPENAI_API_VERSION` from the environment or `backend/.env`. If all
three required Azure values are present, Azure is detected automatically.
When running from a worktree, the loader also checks the sibling
`Cohortia/app/backend/.env` file. You can override the location explicitly with
`COHORTIA_ENV_FILE`.

The pilot covers binary reasoning, C compilation, input and types, linear
search, SQL schema design, and HTML/CSS. It intentionally runs before the UI
integration so the source records and generated practical contracts can be
reviewed independently.

The local backend does not process automation jobs by default. This prevents a
development process from claiming production jobs from the shared Turso queue
and writing generated files to the local machine. To intentionally run the
embedded worker for local-only testing, set:

```bash
AUTOMATION_WORKER_ENABLED=true
```

### Recovering after a Turso network failure

Chapter generation writes the local manifest before the Turso import. If the
import loses network connectivity, the batch script retries the chapter import
three times with backoff and records the chapter as `import-pending` when all
attempts fail. Re-run the same command after the network is available; the
existing local manifest is reused, the chapter is imported with `--refresh`,
and it is marked complete only after the import exits successfully.

For example, to retry FPGA Design chapter 1.2:

```bash
node scripts/generate-learning-boards-batch.js \
  --category computer-science \
  --course-id fpga-design-for-embedded-systems \
  --module 1 \
  --import-retries 5
```

Do not use `--overwrite` for a recovery retry unless you intentionally want to
regenerate the chapter. The default behavior preserves the generated chapter
and only retries its database import.

Production automation is delegated to Jenkins when
`AUTOMATION_EXECUTION=jenkins`. Configure `JENKINS_JOB_URL`, `JENKINS_USER`,
and `JENKINS_API_TOKEN` on the backend. The repository includes a
`Jenkinsfile`; create a Jenkins Pipeline job from that file and add the
`cohortia-automation-worker-token` secret credential used by the pipeline.

Repo-level course sources, generated learning boards, and practical generator scripts intentionally remain outside `app/`. The application paths are configured to read those shared assets without duplicating them.
