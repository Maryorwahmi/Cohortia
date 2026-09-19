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

Repo-level course sources, generated learning boards, and practical generator scripts intentionally remain outside `app/`. The application paths are configured to read those shared assets without duplicating them.
