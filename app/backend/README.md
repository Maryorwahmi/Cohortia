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

Include the JWT token in the `Authorization` header:

```
Authorization: Bearer <your-token>
```

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
| `JWT_SECRET` | JWT signing secret | `cohortia-dev-secret` |
| `NODE_ENV` | Environment | `development` |
