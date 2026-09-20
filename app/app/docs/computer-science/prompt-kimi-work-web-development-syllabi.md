# Copilot Work Prompt — Generate Cohortia Web Development Syllabi

> **Use this entire document as the prompt in Copilot Work.**  
> **Goal:** Create detailed, chapter-level syllabi for every Web Development course in the Cohortia Computer Science catalog so that the platform can generate slides, audio, video, quizzes, and coding exercises automatically.

---

## 1. Project Context

**Project name:** Cohortia  
**Project root:** `c:\Users\User\Documents\Cohortia`

**What Cohortia does:** Cohortia is a career-learning platform. Users pick a career or learning path, and the app generates a personalized roadmap with AI-generated micro-lessons (slides, audio, video, quizzes, hands-on labs). The syllabi you are building are the curriculum backbone. They live as markdown files in the repository and will later be imported into the app database so the AI knows exactly what to teach in every lesson.

**Research phase already completed:**
- `docs/catalog-computer-science.md` — first curated catalog (157 courses/certificates)
- `docs/catalog-computer-science-research.md` — expanded research draft (187 more candidates)
- `docs/computer-science/catalog-courses-by-subcategory.json` — **source of truth**: 338 distinct Computer Science courses grouped into 13 subcategories
- `docs/catalogs/schema.json` — JSON schema for catalog import
- `docs/catalog-business-research.md` — completed Business research draft

**What we are doing now:** We are moving from catalog research to full syllabus design. We create one detailed syllabus file per course/certificate. Each syllabus breaks the course into **modules** and **chapters**. Every chapter must contain a detailed **AI generation note** so we know what kind of lesson to create.

**Current progress:**
- ✅ **Programming & Software Development Fundamentals** — completed (40 courses)
- 🟡 **Web Development** — currently in progress (31 courses)
- ⬜ **Mobile App Development** — not started
- ⬜ **Data Science, Machine Learning & AI** — not started
- ⬜ **Cybersecurity** — not started
- ⬜ **Cloud Computing & DevOps** — not started
- ⬜ **Computer Networks** — not started
- ⬜ **Databases** — not started
- ⬜ **Operating Systems & System Administration** — not started
- ⬜ **Software Engineering, Architecture & Design** — not started
- ⬜ **Game Development** — not started
- ⬜ **Blockchain & Web3** — not started
- ✅ **Hardware, Embedded & IoT** — completed (11 courses)

These completed files define the new standard. They are very detailed, with real explanatory content in every module and chapter, not bullet-point outlines. Copy their depth, tone, and structure for every future syllabus.

---

## 2. Why the Old Approach Was Rejected

An earlier batch of 31 Web Development syllabi was rejected because the modules and chapters were **boilerplate/generic**. They listed topic names but did not contain teachable content. The new rule is:

> **Every module and every chapter must contain real, course-specific knowledge that a teacher could use to deliver a lesson.**

Do not write chapter headings with only bullet lists. Write full explanations, definitions, code examples, framework commands, deployment steps, common mistakes, and practical activities.

---

## 3. CRITICAL: Module and Chapter Count Guidelines (The "Be Thorough" Rule)

The user explicitly instructed: **"Remember be thorough. Do not artificially compress content."**

The user corrected an earlier attempt to compress a 21-module course into 9 modules. The new standards are **non-negotiable**:

| Level | Minimum Modules | Maximum Modules | Chapters per Module | Approximate Total Chapters |
|-------|----------------|----------------|---------------------|---------------------------|
| **Foundations** | 3 | 5 | 2–5 | 6–25 |
| **Beginner** | 5 | 6 | 3–5 | 15–30 |
| **Intermediate** | 5 | 8 | 4–8 | 20–64 |
| **Advanced** | 8 | 12 | 6–10 | 48–120 |

**Rules:**
- **Do NOT artificially compress content.** The user said: *"I only said a minimum of 5 modules but I did not say any maximum, and even chapters are supposed to increase."*
- If a course is known to be extensive (e.g., a full-stack bootcamp, a professional certificate with 5+ courses, or a specialization with multiple projects), use the **upper end** of the range or even exceed it if necessary.
- The goal is to **cover all necessary content**, not to fit an arbitrary template.
- Beginner courses get **5–6 modules**, not fewer. Advanced courses get **8–12 modules**, not fewer.
- Chapters per module should also follow the ranges above. An Advanced course should have 6–10 chapters per module, not 3–5.
- **When in doubt, expand.** The user prefers thoroughness over brevity.

---

## 4. Folder Structure and File Placement

The source of truth for course organization is:

```
docs/computer-science/catalog-courses-by-subcategory.json
```

It contains 13 subcategories. Place each syllabus under the folder path:

```
docs/computer-science/{level}/{subcategory-slug}/{course-id}.md
```

For example:

```
docs/computer-science/beginner/web-development/meta-front-end-developer-professional-certificate.md
docs/computer-science/intermediate/web-development/full-stack-web-development-with-react-specialization.md
```

### How to determine the level
- Use the `level` field from the catalog JSON when it is present.
- If the `level` is `null`, infer it from the course title, provider, and typical audience.
- Use these folder mappings:
  - `Beginner` or `Beginner–Intermediate` → `beginner/`
  - `Intermediate` → `intermediate/`
  - `Advanced` → `advanced/`
- If a course is explicitly a foundation/pre-beginner course, use `foundations/`.
- `capstones/` is for cross-course capstone collections only. Each syllabus should include its own capstone/project chapter instead.

### Subcategory folder names
Use lowercase, hyphenated versions of the subcategory names from the JSON:

- `Programming & Software Development Fundamentals` → `programming-software-development-fundamentals/`
- `Web Development` → `web-development/`
- `Mobile App Development` → `mobile-app-development/`
- `Data Science, Machine Learning & AI` → `data-science-machine-learning-ai/`
- `Cybersecurity` → `cybersecurity/`
- `Cloud Computing & DevOps` → `cloud-computing-devops/`
- `Computer Networks` → `computer-networks/`
- `Databases` → `databases/`
- `Operating Systems & System Administration` → `operating-systems-system-administration/`
- `Software Engineering, Architecture & Design` → `software-engineering-architecture-design/`
- `Game Development` → `game-development/`
- `Blockchain & Web3` → `blockchain-web3/`
- `Hardware, Embedded & IoT` → `hardware-embedded-iot/`

If a folder does not exist, create it.

---

## 5. The 13 Subcategories and Course Counts

From `docs/computer-science/catalog-courses-by-subcategory.json`:

| # | Subcategory | Courses | Status |
|---|-------------|---------|--------|
| 1 | Programming & Software Development Fundamentals | 40 | ✅ Done |
| 2 | Web Development | 31 | 🟡 In progress |
| 3 | Mobile App Development | 22 | Not started |
| 4 | Data Science, Machine Learning & AI | 32 | Not started |
| 5 | Cybersecurity | 39 | Not started |
| 6 | Cloud Computing & DevOps | 45 | Not started |
| 7 | Computer Networks | 23 | Not started |
| 8 | Databases | 21 | Not started |
| 9 | Operating Systems & System Administration | 21 | Not started |
| 10 | Software Engineering, Architecture & Design | 17 | Not started |
| 11 | Game Development | 19 | Not started |
| 12 | Blockchain & Web3 | 17 | Not started |
| 13 | Hardware, Embedded & IoT | 11 | ✅ Done |

**Total: 338 courses.** The long-term goal is a full syllabus for every course.

---

## 6. Current Focus: Web Development (31 Courses)

We are now working through the **Web Development** subcategory. Generate every syllabus with the same depth and quality as the Programming & Software Development Fundamentals batch.

### Web Development courses to write
1. `meta-front-end-developer-professional-certificate` — Meta Front-End Developer Professional Certificate (Beginner)
2. `meta-back-end-developer-professional-certificate` — Meta Back-End Developer Professional Certificate (Beginner)
3. `meta-full-stack-developer-front-end-back-end-from-scratch-specialization` — Meta Full-Stack Developer: Front-End & Back-End from Scratch Specialization (Beginner)
4. `ibm-full-stack-software-developer-professional-certificate` — IBM Full-Stack Software Developer Professional Certificate (Beginner)
5. `ibm-front-end-developer-professional-certificate` — IBM Front-End Developer Professional Certificate (Beginner)
6. `ibm-back-end-javascript-developer-professional-certificate` — IBM Back-End JavaScript Developer Professional Certificate (Beginner)
7. `google-ux-design-professional-certificate` — Google UX Design Professional Certificate (Beginner)
8. `responsive-web-design` — Responsive Web Design (Beginner)
9. `front-end-web-development-with-react` — Front-End Web Development with React (Intermediate)
10. `server-side-development-with-nodejs-express-and-mongodb` — Server-side Development with NodeJS, Express and MongoDB (Intermediate)
11. `full-stack-web-development-with-react-specialization` — Full-Stack Web Development with React Specialization (Intermediate)
12. `web-design-for-everybody-specialization` — Web Design for Everybody Specialization (Beginner)
13. `the-complete-web-developer-bootcamp` — The Complete Web Developer Bootcamp (Beginner)
14. `the-web-developer-bootcamp` — The Web Developer Bootcamp (Beginner)
15. `javascript-understanding-the-weird-parts` — JavaScript: Understanding the Weird Parts (Intermediate)
16. `complete-web-developer-in-2024` — Complete Web Developer in 2024 (Beginner–Intermediate)
17. `angular-the-complete-guide-2024-edition` — Angular – The Complete Guide (2024 Edition)
18. `vue-the-complete-guide` — Vue – The Complete Guide
19. `the-complete-nextjs-14-course` — The Complete Next.js 14 Course
20. `svelte-sveltekit-the-complete-guide` — Svelte & SvelteKit: The Complete Guide
21. `blazor-bootcamp` — Blazor Bootcamp
22. `aspnet-core-mvc-razor-pages` — ASP.NET Core MVC / Razor Pages
23. `the-complete-nodejs-developer-course` — The Complete Node.js Developer Course
24. `mern-stack-front-to-back-full-stack-react-redux-nodejs` — MERN Stack Front To Back: Full Stack React, Redux & Node.js
25. `django-for-everybody-specialization` — Django for Everybody Specialization
26. `python-and-django-full-stack-web-developer-bootcamp` — Python and Django Full Stack Web Developer Bootcamp
27. `ruby-on-rails-the-complete-guide` — Ruby on Rails: The Complete Guide
28. `the-complete-wordpress-website-business-course` — The Complete WordPress Website Business Course
29. `shopify-theme-development` — Shopify Theme Development
30. `webflow-essentials` — Webflow Essentials
31. `the-complete-web-developer-course-30` — The Complete Web Developer Course 3.0

**Begin with the beginner-level courses within this subcategory, then intermediate, then advanced.**

---

## 7. Required Syllabus Format

Use the **completed Programming & Software Development Fundamentals syllabi** as your template for depth and structure:

- `docs/computer-science/beginner/programming-software-development-fundamentals/`
- `docs/computer-science/intermediate/programming-software-development-fundamentals/`

### 7.1 Header metadata

Every syllabus file must start with this metadata block:

```markdown
# Syllabus: {Course Title}

> **Course ID:** `{course-id}`
> **Title:** {Course Title}
> **Provider:** Cohortia
> **Original reference:** {Original Provider / Platform}
> **Platform:** Cohortia
> **Level:** {Beginner / Intermediate / Advanced}
> **Type:** {Course / Certificate / Professional Certificate / Specialization / Nanodegree / Bootcamp}
> **Duration:** {e.g., 4 weeks, 6 months, self-paced, exam}
> **Cost:** Included with Cohortia
> **URL:** Cohortia course page (original reference: {official URL or "(URL not verified)"})
> **Certification:** Cohortia Certificate of Completion
> **Category:** Computer Science
> **Subcategory:** {Subcategory name from JSON}
> **Skills:** {comma-separated list}
> **Source catalog:** `docs/computer-science/catalog-courses-by-subcategory.json`

> **Ownership & attribution note:** This course is curated, rebuilt, and delivered by **Cohortia**. The original subject matter and public references may be drawn from providers such as {list likely providers}, university open-courseware, or other educational sources. Cohortia does not claim sole ownership of any underlying third-party source material; we restructure, expand, and present the content as part of the Cohortia learning experience.
```

### 7.2 Required sections

1. **Course Overview** — 2–4 paragraphs explaining what the course teaches, who it is for, and why it matters. Include 6–10 specific learning outcomes as bullet points.
2. **Syllabus Structure** — a table listing modules with theme and chapter counts. Also include a total chapter count.
3. **Modules** — follow the module/chapter count guidelines in Section 3. Each module should cover a coherent theme.
4. **Chapters** — each module must contain the appropriate number of chapters per the level guidelines. Each chapter is a self-contained mini-lesson.
5. **Per-chapter content** — every chapter must have:
   - `#### Learning objectives` (3–5 bullet points)
   - `#### Detailed lesson content` (the main teaching text; multiple paragraphs, examples, code snippets, diagrams described in words — this should be the longest section)
   - `#### Key concepts` (bullet list of terms)
   - `#### Hands-on activity` (a practical exercise)
   - `#### Assessment idea` (a quiz question, coding challenge, or reflection — include the expected answer)
   - `#### AI generation note` (detailed instructions for AI — see Section 8)
6. **Module quizzes** (optional but recommended) — short self-check questions with answers after each module or in a dedicated assessments module.
7. **Final capstone / project brief** — describe what the learner should build.
8. **Final examination and answer key** (optional for very short courses, required for full courses) — multiple choice, short answer, code analysis, and practical problem sections.
9. **Course conclusion** — summary of what the learner can now do.

### 7.3 Depth requirements

- **No bullet-only chapters.** Every chapter must contain paragraphs of explanation.
- **Real code examples.** Include actual code snippets in the correct language for the course (HTML, CSS, JavaScript, JSX, Python/Django, Ruby, PHP, etc.).
- **Real commands and tools.** For web courses, include real terminal commands, npm/pnpm/yarn commands, framework CLI commands, deployment commands, and package names.
- **Common mistakes and safety notes.** Tell learners what can go wrong (e.g., CORS issues, async bugs, layout problems, security vulnerabilities) and how to avoid them.
- **Progressive difficulty.** Start simple and build toward the capstone.
- **Assessment answers must be included.** For every assessment idea, write the question AND the expected answer/explanation. The AI needs to know what the correct answer is.

---

## 8. AI Generation Note — Be Very Detailed

This is the most important section. AI reads this to generate the actual lesson content. For every chapter, write an `AI generation note` that specifies:

- **Format:** video, slide deck, interactive code demo, lab walkthrough, quiz, or mixed.
- **Target duration:** e.g., 6–10 minutes of video, 10–15 slides, 5 quiz questions.
- **Tone:** beginner-friendly, encouraging, concise, professional, hands-on, project-focused.
- **Visual style:** live coding, browser dev tools, diagram overlays, side-by-side code/output, wireframes, responsive previews, deployment dashboards.
- **Examples to use:** real-world analogies, specific code snippets, specific frameworks, specific APIs, specific design patterns.
- **Interactive element:** one coding exercise, one reflection prompt, one mini-quiz, one live refactor, or one hands-on lab step.
- **Accessibility requirements:** captions, alt text for diagrams, transcripts, high-contrast visuals, keyboard-navigable demos.

**Example for a React chapter:**

```markdown
#### AI generation note
Create a 10-minute live coding video. Start with an empty `create-react-app` project, add a `useState` counter component, and show the component re-rendering in the browser dev tools. Include a split-screen view of code on the left and browser output on the right. End with a 2-question interactive mini-quiz about state immutability.
```

Do not write generic notes like "explain this topic." Make each note concrete, actionable, and different from the notes in other chapters.

---

## 9. How to Research Each Course

1. **Start with the source catalog entry** — read the title, provider, platform, level, and skills from `docs/computer-science/catalog-courses-by-subcategory.json`.
2. **Search the web** for the official course/certificate page using `SearchWeb` or `FetchURL`.
3. Look for:
   - Official syllabus / weekly outline
   - Module names and learning objectives
   - Required tools, languages, frameworks, or software
   - Exam topics (for certifications)
   - Prerequisites
4. If the official syllabus is not public, infer modules/chapters from:
   - The course title and description
   - The provider's typical curriculum
   - Industry-standard topics for that subject
5. **Flag uncertainty** — if you cannot verify a topic, write `(inferred — verify before import)` in the chapter or note.

---

## 10. Naming and Saving Rules

- **File name:** `{course-id}.md`
- **File path:** `docs/computer-science/{level}/{subcategory-slug}/{course-id}.md`
- Use lowercase kebab-case for course IDs and folder names.
- Do **not** use spaces in file names.
- Do **not** modify files outside `docs/computer-science/`.
- Do **not** run `git commit`, `git push`, or any git mutations.
- Do **not** install anything globally or outside the project directory.
- **Chunked writing:** Large files (300KB+) may need to be written in chunks using `Write` with `mode: "overwrite"` for the first chunk, then `mode: "append"` for subsequent chunks. If a single `Write` call fails due to size limits, break the content into logical chunks and append them.

---

## 11. Cohortia Branding and Ownership

All courses belong to **Cohortia** in the app. The syllabus metadata must reflect this:

- **Provider:** Cohortia
- **Platform:** Cohortia
- **Cost:** Included with Cohortia
- **Certification:** Cohortia Certificate of Completion
- **Original reference:** the real provider/platform where the subject matter was sourced
- **Ownership note:** clearly state that Cohortia curates and rebuilds the content and does not claim sole ownership of third-party source material.

Do not use the original provider as the primary provider in the metadata.

---

## 12. Constraints

- This is **content/curriculum work**, not app code.
- Do not write backend or frontend code.
- Do not modify the database schema.
- Do not write generic/boilerplate syllabi.
- Be accurate. If a course lacks public information, keep the syllabus high-level and mark gaps clearly.
- **Do not artificially compress content.** Follow the module/chapter count guidelines in Section 3 strictly.

---

## 13. Deliverable

When you finish a subcategory or a batch of courses, return:

1. A list of all new files created with their full paths.
2. A short summary of any courses that were hard to research and why.
3. A list of any duplicate or overlapping courses you found.
4. Confirmation that every file follows the approved pilot format and the module/chapter count guidelines.

---

## 14. Start Here

1. Read the **completed Programming & Software Development Fundamentals syllabi** to internalize the new standard:
   - `docs/computer-science/beginner/programming-software-development-fundamentals/`
   - `docs/computer-science/intermediate/programming-software-development-fundamentals/`
2. Read the catalog source of truth:
   - `docs/computer-science/catalog-courses-by-subcategory.json`
3. Continue with the **Web Development** subcategory (31 courses), starting with beginner-level courses, then intermediate, then advanced.

**Begin with the beginner-level courses within this subcategory, then intermediate, then advanced.**
