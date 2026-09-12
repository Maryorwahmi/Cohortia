# Learning Board Import Guide

This guide explains how to import generated learning screens into the Cohortia database.

## What Gets Imported

The import script reads learning screen manifests from:
```
generated/learning-boards-html/<course-id>/
```

It imports:
- **Courses**: Course metadata (title, level, module count)
- **Chapters**: Chapter manifests (module/chapter info, screen count)
- **Screens**: Individual learning screens with:
  - Content HTML
  - Narration/narrator segments
  - Key ideas
  - Type and template info
  - Duration, eyebrow, and metadata

## Prerequisites

1. Backend database should be set up (SQLite or Turso)
2. Environment variable `DATABASE_URL` is configured (or defaults to `./cohortia.db`)
3. Node.js and npm are installed

## Import Steps

### 1. Update Database Schema

First, ensure the new tables are created:

```bash
cd backend
npm run db:push
```

This will create/migrate:
- `learning_board_courses`
- `learning_board_chapters`
- `learning_board_screens`

### 2. Import All Generated Courses

```bash
cd backend
npm run db:import-learning-boards
```

This scans every generated course under `generated/learning-boards-html`, imports
new courses, and refreshes courses already in the database. The importer is
idempotent, so rerunning it updates existing chapters and screens and adds newly
generated chapters or screens.

To import another completed generated course, pass its folder name under the
generated-course directory:

```bash
cd backend
npm run db:import-learning-boards -- --course programming-for-everybody-getting-started-with-python
```

Run a single-course import only after that course's chapter manifests and screens
are complete.

You'll see output like:
```
✓ Database tables created/verified
Found 3 chapters to import
✓ Course "CS50's Introduction to Computer Science" (cs50s-introduction-to-computer-science) imported/updated
✓ Chapter M1C1: "What is Computer Science? And How Computers 'Think'"
✓ Chapter M1C2: "Your First C Program: Hello, World!"
✓ Chapter M1C3: "Variables, Data Types, and User Input in C"
...
✓ Successfully imported 87 screens across 3 chapters
✓ Course is ready to view in the learning board!
```

## Verifying the Import

### Via Studio

```bash
cd backend
npm run db:studio
```

Then browse to the local Studio URL and check the `learning_board_screens` table.

### Via API

The new endpoints are available:

- `GET /api/learning/boards` - List all learning board courses
- `GET /api/learning/boards/:courseId` - Get course chapters
- `GET /api/learning/boards/:courseId/module-:module/chapter-:chapter` - Get chapter screens
- `GET /api/learning/boards/:courseId/module-:module/chapter-:chapter/screen-:screen` - Get single screen

Example:
```bash
curl http://localhost:3000/api/learning/boards
curl http://localhost:3000/api/learning/boards/cs50s-introduction-to-computer-science
curl http://localhost:3000/api/learning/boards/cs50s-introduction-to-computer-science/module-01/chapter-01
```

## Using in the Frontend

The frontend can now optionally read from the database. Update the learning board component to use:
```
/api/learning/boards/:courseId/module-:module/chapter-:chapter
```

Instead of:
```
/learning-boards-html/:courseId/module-:module/chapter-:chapter/manifest.json
```

### Incremental Updates

To re-import and update existing data:

```bash
npm run db:import-learning-boards
```

The script uses updates for existing records and inserts for new records, so the
database stays aligned with the generated manifests.

## Troubleshooting

**"No chapters found to import"**
- Check that the docs folder path is correct
- Verify that the cs50s-introduction-to-computer-science folder exists
- Ensure chapter folders follow the pattern: `module-NN/chapter-NN/`

**Database connection error**
- Verify `DATABASE_URL` environment variable is set
- Check that the database file/server is accessible
- For Turso: ensure auth token is valid

**Manifest parsing error**
- Check that manifest.json files are valid JSON
- Verify the file structure matches expected format

## Database Tables

### `learning_board_courses`
Stores course metadata
- `courseId`: Unique course identifier
- `course`: Course name
- `courseLevel`: Difficulty level (beginner, intermediate, advanced)
- `totalModules`: Number of modules in the course

### `learning_board_chapters`
Stores chapter information per module
- `courseId`: Reference to course
- `module`: Module number
- `chapter`: Chapter number within module
- `chapterTitle`: Chapter name
- `screensCount`: Number of screens in chapter
- `manifestData`: Full chapter manifest as JSON

### `learning_board_screens`
Stores individual learning screens
- `courseId`: Reference to course
- `chapterId`: Reference to chapter
- `screen`: Screen number
- `title`: Screen title
- `type`: Screen type (hero, lesson, quiz, etc.)
- `contentHtml`: Full HTML content
- `narratorText`: Narration text
- `keyIdeaTitle` / `keyIdeaText`: Key learning point

## API Response Format

The API returns chapters in a normalized format that matches the existing learning board structure:

```json
{
  "success": true,
  "data": {
    "courseId": "cs50s-introduction-to-computer-science",
    "course": "CS50's Introduction to Computer Science",
    "module": 1,
    "chapter": 1,
    "chapterTitle": "What is Computer Science?",
    "screens": [
      {
        "screen": 1,
        "title": "What is Computer Science?",
        "type": "hero",
        "content": { "html": "..." },
        "narration": { "text": "...", "durationSeconds": 60 },
        "keyIdea": { "title": "...", "text": "..." }
      }
    ]
  }
}
```
