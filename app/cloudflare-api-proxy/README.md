# Cohortia API origin proxy

This Worker serves `api.cohortia.study` and forwards requests to the Render API. It adds a private header that the production backend requires, so requests sent directly to the public Render hostname are rejected.

## Production setup

Do not deploy the backend origin check until the shared secret and Worker route are configured.

1. Generate a unique secret with at least 32 random bytes on a trusted machine:

   ```powershell
   node -e "process.stdout.write(require('node:crypto').randomBytes(32).toString('base64url'))"
   ```

   Keep the output private. Set the same value as `COHORTIA_API_ORIGIN_SECRET` in the Render backend environment and as the Worker secret below. Never paste it into chat or commit it.

2. In Cloudflare DNS, set the existing `api` CNAME to **Proxied** (orange cloud). The Worker route requires this.

3. From the `app` directory, deploy the Worker:

   ```powershell
   .\node_modules\.bin\wrangler.cmd deploy --config cloudflare-api-proxy\wrangler.jsonc
   ```

   The API hostname will return 503 until its Worker secret is set; the existing frontend continues using the Render URL until its frontend deployment.

4. Set the same secret on the Worker. Wrangler prompts for the value:

   ```powershell
   .\node_modules\.bin\wrangler.cmd secret put COHORTIA_API_ORIGIN_SECRET --config cloudflare-api-proxy\wrangler.jsonc
   ```

5. Ensure `NODE_ENV=production` and `COHORTIA_API_ORIGIN_SECRET` are set in the Render backend environment before deploying the backend changes. Render detection also enforces the origin check. The API refuses to start if this secret is absent or shorter than 32 bytes.

6. Add this callback URL to `GOOGLE_REDIRECT_URI` in Render and to the authorized redirect URIs in Google Cloud Console. Keep the existing redirect URI until Google sign-in works on the new route:

   ```text
   https://api.cohortia.study/api/v1/auth/google/callback
   ```

7. Deploy the backend and frontend changes only after the Worker route and both secret settings are ready. API requests and Google sign-in start URL will use `https://api.cohortia.study`.

The Worker forwards redirects manually so OAuth redirects reach the browser. Query strings are redacted in Worker observability. Verify email/password login, Google sign-in, and authenticated API calls after deployment.

See Cloudflare's [Worker routes](https://developers.cloudflare.com/workers/configuration/routing/routes/) and [Worker secrets](https://developers.cloudflare.com/workers/configuration/secrets/) documentation for route and secret behavior.

## Rate limiting

The Worker applies 10-second per-IP burst limits to login (5), signup (3), MFA verification (5), chat (10), contact/newsletter (3), and practical execution (5). Cloudflare's Worker Rate Limiting binding is approximate and counts are separate by Cloudflare location; the backend's persistent Turso counters enforce the longer IP and user windows listed in the backend README.

Each `namespace_id` in `wrangler.jsonc` must be unique in the target Cloudflare account. Change an ID if it is already in use there. The backend origin-secret check must be deployed and enabled for these edge limits to protect the API from direct-origin requests.

## Local checks

From the repository root:

```powershell
node --test app\cloudflare-api-proxy\test\proxy.test.js
.\app\node_modules\.bin\wrangler.cmd deploy --dry-run --config app\cloudflare-api-proxy\wrangler.jsonc
```
