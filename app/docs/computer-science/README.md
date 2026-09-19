# Computer Science Learning Paths

> **Scope:** Courses and certificates only. Degree programs live in the catalog research drafts.  
> **Source:** Derived from `docs/catalog-computer-science.md` (157 entries) and `docs/catalog-computer-science-research.md` (187 entries) — **~344 total course/certificate entries** across **13 categories**.  
> **Status:** Draft — syllabi are being built so Gemini can generate slides, audio, or video per chapter.

---

## How this folder is organized

```
docs/computer-science/
├── README.md                        # this file
├── syllabus/                        # example / test syllabi
│   └── programming-and-software-development/
│       └── cs50-intro-to-cs.md
├── foundations/                     # pre-beginner / career-switcher level
│   └── {category}/
├── beginner/
│   └── {category}/
├── intermediate/
│   └── {category}/
├── advanced/
│   └── {category}/
└── capstones/
    └── {category}/
```

Inside every level folder there is one subfolder per **category**. Each category folder will contain detailed syllabi for the courses/certificates in that category at that level.

---

## The 13 categories

| # | Category | Combined course/certificate count |
|---|----------|-----------------------------------|
| 1 | Programming & Software Development Fundamentals | 40 |
| 2 | Web Development | 31 |
| 3 | Mobile App Development | 22 |
| 4 | Data Science, Machine Learning & AI | 32 |
| 5 | Cybersecurity | 39 |
| 6 | Cloud Computing & DevOps | 45 |
| 7 | Computer Networks | 23 |
| 8 | Databases | 22 |
| 9 | Operating Systems & System Administration | 22 |
| 10 | Software Engineering, Architecture & Design | 18 |
| 11 | Game Development | 19 |
| 12 | Blockchain & Web3 | 17 |
| 13 | Hardware, Embedded & IoT | 14 |
| **Total** | | **344** |

---

## Syllabus file format

Each `{level}/{category}/{course-id}.md` follows the same template (see `syllabus/programming-and-software-development/cs50-intro-to-cs.md`):

1. Course metadata — title, provider, platform, level, type, duration, cost, URL, skills.
2. Course overview + learning outcomes.
3. Modules — 4–6 modules per course.
4. Chapters — each module contains 2–4 chapters.
5. Per-chapter details:
   - Learning objectives
   - Key concepts
   - Suggested activity
   - Assessment idea
   - AI generation note (what Gemini should create)
6. Capstone / final deliverable.
7. AI content-generation guidelines.

---

## Notes for Cohortia integration

- Each syllabus file can become a `career` / `course` record with chapters stored as a JSON tree.
- Each chapter can map to one AI-generated lesson (slides, audio, video, quiz).
- Levels map to learner profiles: foundations → `Novice`, beginner → `Beginner`, intermediate → `Intermediate`, advanced → `Advanced`.
