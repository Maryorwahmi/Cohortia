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

Production automation is delegated to Azure Container Apps when
`AUTOMATION_EXECUTION=azure`.

Repo-level course sources, generated learning boards, and practical generator scripts intentionally remain outside `app/`. The application paths are configured to read those shared assets without duplicating them.
