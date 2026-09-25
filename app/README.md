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

List every chapter with a normalized hands-on activity:

```bash
node scripts/generate-cs50-practical-pilot.js --list-only
```

Generate all discovered CS50 practicals with the existing validated practical
generator once Azure OpenAI is configured:

```bash
node scripts/generate-cs50-practical-pilot.js --provider azure
```

The original six-activity set can still be generated explicitly with
`--pilot-only`. Every generated practical includes a teacher/narrator guide,
task-level narration, and coaching prompts; missing model narration is filled
with a validated teaching fallback rather than publishing an empty voice guide.

The generator imports each generated chapter into the configured
Turso/libSQL database immediately after writing its `practical.json`. This
means each chapter is generated and imported before the next chapter starts. To
generate files without database writes, use `--skip-import` (or
`--dry-run` for prompt inspection):

```bash
node scripts/generate-cs50-practical-pilot.js --provider azure --skip-import
```

To generate only the original six-activity pilot:

```bash
node scripts/generate-cs50-practical-pilot.js --provider azure --pilot-only
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

### Learning board generation record

Batch HTML generation keeps one durable progress record at:

```text
generated/learning-boards-html/record.json
```

The record contains a `courses` map with the completed and import-pending
chapters for every course. New batch runs read and update this central file
after each chapter, so the generated course folders, manifests, and HTML can
be deleted without losing generation history. Existing per-course
`<course-id>/record.json` files are migrated into the central record the next
time the batch generator runs.

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

The Jenkins controller image must include Node.js and npm. Build the included
image before starting the container:

```powershell
docker build -f Dockerfile.jenkins -t cohortia-jenkins:latest .
docker stop cohortia-jenkins
docker rm cohortia-jenkins
docker run -d --name cohortia-jenkins -p 8080:8080 -p 50000:50000 `
  -v jenkins_home:/var/jenkins_home cohortia-jenkins:latest
```

This preserves the Jenkins home volume, jobs, credentials, and configuration.

Repo-level course sources, generated learning boards, and practical generator scripts intentionally remain outside `app/`. The application paths are configured to read those shared assets without duplicating them.
