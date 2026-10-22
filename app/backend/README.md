# Cohortia Backend API

A lightweight, fast REST API built with **Hono** for the Cohortia career-growth platform.

## Stack

- **Hono** — Web framework
- **Drizzle ORM** — Database ORM
- **Better SQLite3** — Local database (swap to PostgreSQL in production)
- **bcryptjs** — Password hashing
- **jsonwebtoken** — JWT authentication
- **Zod** — Input validation

## Getting Started

```bash
cd backend
npm install
npm run db:push     # Create database tables
npm run dev         # Start development server
```

## Administrator access

Set a private `ADMIN_BOOTSTRAP_PASSWORD` (at least 12 characters) in the backend environment and, optionally, set `ALPHA_ADMIN_EMAIL`. Run `npm run db:migrate-schema`, then `npm run admin:bootstrap` from the backend directory. The initial alpha administrator signs in with username `Admin` and the configured password; the password is hashed before storage and is never included in source code. To intentionally reset an existing alpha admin's password, also set `ADMIN_BOOTSTRAP_RESET_PASSWORD=true` for that bootstrap run.

### Authenticator-based two-factor authentication

Set `TOTP_ENCRYPTION_KEY` in the backend environment to a private random value of at least 32 characters before learners can enable an authenticator app. The backend derives an AES-256-GCM key from this value and encrypts authenticator secrets at rest. Keep the value private and consistent across deployments; changing it makes existing authenticator secrets unreadable. Each learner receives one-time recovery codes when enabling two-factor authentication.

### Newsletter subscriptions

The public newsletter form uses Brevo for confirmation emails and for syncing confirmed subscribers to a Brevo contact list. Configure `BREVO_API_KEY` and `BREVO_NEWSLETTER_LIST_ID` as backend environment variables, and verify `hello@cohortia.study` as a sender in Brevo. Set `FRONTEND_URL` to the public site so confirmation and unsubscribe links return to the correct pages. Keep the API key private on the backend. Subscription records are pending until the visitor confirms; confirmation links expire after 24 hours, and unsubscribing removes the address from the configured list and blocks Brevo email delivery for that contact.

Profile images and syllabus exports use the authenticated users API. Profile image uploads require the same Cloudflare R2 bucket configuration and browser CORS policy used by course project evidence uploads.

The alpha administrator can grant existing registered users admin access and independently select course permissions for learning screens, assessments, practicals, and course overviews for courses without those content types. Bulk selectors can grant all available access or target one content type. Only the alpha administrator can manage other admins; the alpha account retains access to every catalog course.

## API Routes

### Public Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/health` | Health check |
| POST | `/api/v1/auth/signup` | Register new user |
| POST | `/api/v1/auth/login` | Login user |
| GET | `/api/v1/auth/me` | Get current user (via token) |
| GET | `/api/v1/careers` | List all careers |
| GET | `/api/v1/careers/:id` | Get career details |
| POST | `/api/v1/contact` | Submit contact form |

### Protected Routes (Bearer token required)

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/v1/users/profile` | Get user profile |
| PUT | `/api/v1/users/profile` | Update user profile |
| GET | `/api/v1/users/progress` | Get user progress |
| GET | `/api/v1/users/enrollments` | Get user enrollments |
| GET | `/api/v1/tracks` | List all tracks |
| GET | `/api/v1/tracks/:id` | Get track details |
| POST | `/api/v1/tracks/:id/enroll` | Enroll in a track |
| GET | `/api/v1/tracks/user/enrolled` | Get user's enrolled tracks |
| GET | `/api/v1/community/posts` | List community posts |
| POST | `/api/v1/community/posts` | Create a post |
| GET | `/api/v1/community/posts/:id` | Get post with comments |
| POST | `/api/v1/community/posts/:id/comments` | Add comment |
| GET | `/api/v1/internships/briefs` | List internship briefs |
| GET | `/api/v1/internships/briefs/:id` | Get brief details |
| POST | `/api/v1/internships/briefs/:id/submit` | Submit work |
| GET | `/api/v1/internships/submissions` | Get user's submissions |
| GET | `/api/v1/learning/lessons` | List all lessons |
| GET | `/api/v1/learning/lessons/:id` | Get lesson details |
| POST | `/api/v1/learning/lessons/:id/complete` | Mark lesson complete |

## Authentication

Browser login, signup, two-factor completion, and Google sign-in set a server-managed `HttpOnly`, `SameSite=Lax` session cookie. In production it is also `Secure` and scoped to `/api/v1`. The browser must send requests with credentials enabled. Unsafe cookie-authenticated requests are accepted only from configured frontend origins.

The session JWT is not returned in API response bodies or Google redirect URLs. Access sessions expire after 15 minutes and are backed by revocable server-side session records; refresh tokens rotate and expire after 30 days. Password changes and sign-out-all revoke every active session. Existing browser sessions must sign in again after this change because localStorage tokens are no longer accepted.

Before deploying the session changes to an existing database, run `npm run db:migrate-schema` from `app/backend` to create the `user_sessions` table and its index. Do not deploy the new backend against a database that has not been migrated.

### API rate limits

Rate-limit counters are stored in Turso and created automatically when the backend starts. They use hashed actor keys and fixed UTC windows; old counters are pruned after 48 hours. Like other fixed-window policies, a request burst can straddle a window boundary.

| Request | Limit |
|----------|-------|
| Login | 10 per IP per 15 minutes |
| Signup | 5 per IP per hour |
| Two-factor verification | 10 per IP per 15 minutes, in addition to the existing five failed attempts per challenge |
| Public AI chat | 10 per IP per 5 minutes |
| Signed-in AI chat | 20 per user per 5 minutes and 100 per user per day |
| Contact form and newsletter subscription | 5 per IP per hour each |
| Practical execution | 10 per user per 5 minutes and 100 per user per day |

Exceeding a limit returns HTTP 429 with a `Retry-After` header. The Cloudflare API proxy also applies short, per-location burst limits; these complement, but do not replace, the persistent backend windows. The production origin-secret check must be enabled so clients cannot bypass the proxy.

## Response Format

All responses follow this structure:

```json
{
  "success": true,
  "data": { ... },
  "message": "..." // optional
}
```

Error responses:

```json
{
  "success": false,
  "error": "Error Type",
  "message": "Human-readable message",
  "details": { ... } // optional, for validation errors
}
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `3000` |
| `CORS_ORIGIN` | Frontend origin | `http://localhost:5173` |
| `JWT_SECRET` | Required JWT signing secret; at least 32 bytes, with no insecure default | None |
| `COHORTIA_API_ORIGIN_SECRET` | Required on Render or when `NODE_ENV=production`; shared only with the Cloudflare API proxy Worker, at least 32 bytes | None |
| `BREVO_API_KEY` | Private Brevo API key used for newsletter confirmation emails and contact synchronization | None |
| `BREVO_NEWSLETTER_LIST_ID` | Brevo list ID for confirmed newsletter subscribers | None |
| `BREVO_SENDER_EMAIL` | Verified Brevo sender address | `hello@cohortia.study` |
| `BREVO_SENDER_NAME` | Sender display name | `Cohortia` |
| `NODE_ENV` | Environment | `development` |
