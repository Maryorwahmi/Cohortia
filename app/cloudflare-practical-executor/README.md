# Cohortia practical executor

This Worker is the isolated native-code executor for Cohortia practicals. The browser does not call it. The Render backend authenticates to it with `EXECUTOR_SHARED_SECRET`.

## Deploy

1. In this directory, install dependencies: `npm install`.
2. Authenticate with Cloudflare: `npx wrangler login`.
3. Set the Worker secret interactively: `npx wrangler secret put EXECUTOR_SHARED_SECRET`.
4. Deploy: `npm run deploy`.
5. Copy the deployed Worker URL and configure these Render backend environment variables:

   - `COHORTIA_SANDBOX_EXECUTOR_URL=https://<your-worker>.workers.dev/execute`
   - `COHORTIA_SANDBOX_EXECUTOR_SECRET=<the same secret>`

The Worker accepts only C/C++ file sets, compiles with fixed argument arrays, disables sandbox internet access, limits compile and runtime duration, and truncates returned output. It intentionally does not accept arbitrary terminal commands or browser-supplied credentials.
