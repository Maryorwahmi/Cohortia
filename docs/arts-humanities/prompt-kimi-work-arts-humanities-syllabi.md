# Copilot Work Prompt — Generate Cohortia Arts & Humanities Syllabi

> **Use this entire document as the prompt in Copilot Work.**
> **Goal:** Create detailed, chapter-level syllabi for every Arts & Humanities course in the Cohortia catalog so that the platform can generate slides, audio, video, quizzes, hands-on exercises, written assignments, and critical analyses automatically.

---

## 1. Project Context

**Project name:** Cohortia
**Project root:** `c:\Users\User\Documents\Cohortia`

**What Cohortia does:** Cohortia is a career-learning platform. Users pick a career or learning path, and the app generates a personalized roadmap with AI-generated micro-lessons (slides, audio, video, quizzes, hands-on labs, writing exercises). The syllabi you are building are the curriculum backbone. They live as markdown files in the repository and will later be imported into the app database so the AI knows exactly what to teach in every lesson.

**Research phase already completed:**
- `docs/catalog-arts-humanities.md` — first curated catalog
- `docs/catalog-arts-humanities-research.md` — expanded research draft
- `docs/arts-humanities/catalog-courses-by-subcategory.json` — **source of truth**: 168 distinct Arts & Humanities courses grouped into 10 subcategories
- `docs/catalogs/schema.json` — JSON schema for catalog import

**What we are doing now:** We are moving from catalog research to full syllabus design. We create one detailed syllabus file per course/certificate. Each syllabus breaks the course into **modules** and **chapters**. Every chapter must contain a detailed **AI generation note** so we know what kind of lesson to create.

**Current progress:** We are generating syllabi for all 12 Arts & Humanities subcategories, one subcategory at a time, in this recommended order:

1. History & Archaeology — Not started
2. Philosophy & Ethics — Not started
3. Literature & Creative Writing — Not started
4. Languages & Linguistics — Not started
5. Art History & Visual Arts — Not started
6. Music & Performing Arts — Not started
7. Film, Media & Communications — Not started
8. Religious Studies & Theology — Not started
9. Cultural Studies & Anthropology — Not started
10. Liberal Arts & General Studies — Not started
11. Museum Studies & Curation — Not started
12. Digital Humanities — Not started

**Total: 168 courses.** The long-term goal is a full syllabus for every course.

The approved format below defines the new standard: every syllabus must be very detailed, with real explanatory content in every module and chapter, not bullet-point outlines. Copy that depth, tone, and structure for every future syllabus.

---

## 2. Why the Old Approach Was Rejected

An earlier batch of syllabi was rejected because the modules and chapters were **boilerplate/generic**. They listed topic names but did not contain teachable content. The new rule is:

> **Every module and every chapter must contain real, course-specific knowledge that a teacher could use to deliver a lesson.**

Do not write chapter headings with only bullet lists. Write full explanations, definitions, close reading excerpts, primary source analysis, writing prompts, practical activities, common mistakes, and scholarly notes that match the specific course topic.

### Anti-Generic Rules — APPLY TO EVERY COURSE

1. **Use the exact course metadata.** The generator provides the real course title, provider, platform, level, type, duration, skills, and subcategory. Every module and chapter must be shaped by these facts. A course titled "Roman Art and Archaeology" must cover actual Roman art, material culture, and archaeological methods, not a vague "Introduction to History."

2. **Research the real course.** Search the web for the official course/certificate page. Use its actual syllabus, modules, primary sources, theoretical frameworks, and learning objectives as the backbone. If the official page is sparse, infer from the provider's typical curriculum and discipline-standard topics for that exact subject.

3. **No placeholder topics.** Do not write modules like "Module 1: Basics", "Module 2: Advanced Topics", or chapters like "Topic A", "Topic B". Every module theme and chapter title must describe real, teachable subject matter.

4. **Specific texts, artworks, thinkers, and methods only.** Name the actual primary sources, artworks, musical pieces, films, philosophers, historical events, theoretical frameworks, and methodological approaches used by the course. Examples: Plato's *Republic*, Shakespeare's *Hamlet*, Monet's *Water Lilies*, the *Quran*, Gramsci's theory of cultural hegemony, ethnographic fieldwork, close reading, iconographic analysis.

5. **Concrete scenarios, not abstract definitions.** Every hands-on activity and assessment must be a realistic task a learner in that course would actually do, with specific passages to analyze, specific prompts to respond to, or specific artifacts to examine.

6. **Flag uncertainty clearly.** If you cannot verify a topic, write `(inferred — verify before import)` rather than inventing detailed but potentially false content.

---

## 3. CRITICAL: Module and Chapter Count Guidelines (The "Be Thorough" Rule)

The user explicitly instructed: **"Remember be thorough. Do not artificially compress content."**

The new standards are **non-negotiable**:

| Level | Minimum Modules | Maximum Modules | Chapters per Module | Approximate Total Chapters |
|-------|----------------|----------------|---------------------|---------------------------|
| **Foundations** | 3 | 5 | 2–5 | 6–25 |
| **Beginner** | 5 | 6 | 3–5 | 15–30 |
| **Intermediate** | 5 | 8 | 4–8 | 20–64 |
| **Advanced** | 8 | 12 | 6–10 | 48–120 |

**Rules:**
- **Do NOT artificially compress content.** The user said: *"I only said a minimum of 5 modules but I did not say any maximum, and even chapters are supposed to increase."*
- If a course is known to be extensive (e.g., a professional certificate with 5+ courses, a specialization with multiple projects, or a comprehensive program), use the **upper end** of the range or even exceed it if necessary.
- The goal is to **cover all necessary content**, not to fit an arbitrary template.
- Beginner courses get **5–6 modules**, not fewer. Advanced courses get **8–12 modules**, not fewer.
- Chapters per module should also follow the ranges above. An Advanced course should have 6–10 chapters per module, not 3–5.
- **When in doubt, expand.** The user prefers thoroughness over brevity.

---

## 4. Folder Structure and File Placement

The source of truth for course organization is:

```
docs/arts-humanities/catalog-courses-by-subcategory.json
```

Place each syllabus under the folder path:

```
docs/arts-humanities/{level}/{subcategory-slug}/{course-id}.md
```

For example:

```
docs/arts-humanities/beginner/history-archaeology/the-ancient-world.md
docs/arts-humanities/intermediate/literature-creative-writing/copyediting-certificate.md
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
Use lowercase, hyphenated versions of the subcategory names from the JSON (stripping the course count in parentheses):

- `History & Archaeology (15)` → `history-archaeology/`
- `Philosophy & Ethics (15)` → `philosophy-ethics/`
- `Literature & Creative Writing (17)` → `literature-creative-writing/`
- `Languages & Linguistics (15)` → `languages-linguistics/`
- `Art History & Visual Arts (17)` → `art-history-visual-arts/`
- `Music & Performing Arts (13)` → `music-performing-arts/`
- `Film, Media & Communications (17)` → `film-media-communications/`
- `Religious Studies & Theology (13)` → `religious-studies-theology/`
- `Cultural Studies & Anthropology (13)` → `cultural-studies-anthropology/`
- `Liberal Arts & General Studies (11)` → `liberal-arts-general-studies/`
- `Museum Studies & Curation (11)` → `museum-studies-curation/`
- `Digital Humanities (11)` → `digital-humanities/`

If a folder does not exist, create it.

---

## 5. The 12 Subcategories

From `docs/arts-humanities/catalog-courses-by-subcategory.json`:

| # | Subcategory | Courses |
|---|-------------|---------|
| 1 | History & Archaeology | 15 |
| 2 | Philosophy & Ethics | 15 |
| 3 | Literature & Creative Writing | 17 |
| 4 | Languages & Linguistics | 15 |
| 5 | Art History & Visual Arts | 17 |
| 6 | Music & Performing Arts | 13 |
| 7 | Film, Media & Communications | 17 |
| 8 | Religious Studies & Theology | 13 |
| 9 | Cultural Studies & Anthropology | 13 |
| 10 | Liberal Arts & General Studies | 11 |
| 11 | Museum Studies & Curation | 11 |
| 12 | Digital Humanities | 11 |

**Total: 168 courses.**

---

## 6. Current Focus

Generate syllabi for the target subcategory specified by the user. Always finish one subcategory before jumping to another unless instructed otherwise. Begin with beginner-level courses, then intermediate, then advanced.

Before writing any content, read the course's `title`, `provider`, `platform`, `level`, `type`, `duration`, `skills`, and `subcategory` from the COURSE METADATA provided by the generator. Use these facts to decide the exact topics, texts, thinkers, and depth. Do not ignore the skills list — it tells you which disciplines, methods, and theoretical frameworks the course actually teaches.

---

## 7. Required Syllabus Format

Follow the detailed format below for every syllabus. Each file must have the same depth, structure, and per-chapter sections so the generator can parse and import it consistently.

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
> **Type:** {Course / Certificate / Professional Certificate / Specialization / Nanodegree / Bootcamp / Diploma}
> **Duration:** {e.g., 4 weeks, 6 months, self-paced, exam}
> **Cost:** Included with Cohortia
> **URL:** Cohortia course page (original reference: {official URL or "(URL not verified)"})
> **Certification:** Cohortia Certificate of Completion
> **Category:** Arts & Humanities
> **Subcategory:** {Subcategory name from JSON}
> **Skills:** {comma-separated list}
> **Source catalog:** `docs/arts-humanities/catalog-courses-by-subcategory.json`

> **Ownership & attribution note:** This course is curated, rebuilt, and delivered by **Cohortia**. The original subject matter and public references may be drawn from providers such as {list likely providers}, university open-courseware, or other educational sources. Cohortia does not claim sole ownership of any underlying third-party source material; we restructure, expand, and present the content as part of the Cohortia learning experience.
```

### 7.2 Required sections

1. **Course Overview** — 2–4 paragraphs explaining what the course teaches, who it is for, and why it matters. Include 6–10 specific learning outcomes as bullet points.
2. **Syllabus Structure** — a table listing modules with theme and chapter counts. Also include a total chapter count.
3. **Modules** — follow the module/chapter count guidelines in Section 3. Each module should cover a coherent theme.
4. **Chapters** — each module must contain the appropriate number of chapters per the level guidelines. Each chapter is a self-contained mini-lesson.
5. **Per-chapter content** — every chapter must have:
   - `#### Learning objectives` (3–5 bullet points, specific and measurable)
   - `#### Detailed lesson content` (the main teaching text; multiple paragraphs, excerpts, case studies, close readings, historical context, theoretical frameworks — this should be the longest section)
   - `#### Key concepts` (bullet list of terms and definitions)
   - `#### Hands-on activity` (a practical exercise — e.g., a writing prompt, close reading exercise, analysis task, discussion prompt, creative exercise, or archival/museum activity)
   - `#### Assessment idea` (a quiz question, essay prompt, analysis challenge, or reflection — include the expected answer or model response)
   - `#### AI generation note` (detailed instructions for AI — see Section 8)
6. **Module quizzes** (optional but recommended) — short self-check questions with answers after each module or in a dedicated assessments module.
7. **Final capstone / project brief** — describe what the learner should produce (e.g., a research paper, creative portfolio, curated exhibition, translated text, lesson plan, or critical analysis).
8. **Final examination and answer key** (optional for very short courses, required for full courses) — mix of short answer, passage analysis, essay prompts, and conceptual application questions.
9. **Course conclusion** — summary of what the learner can now do.

### 7.3 Depth requirements

- **No bullet-only chapters.** Every chapter must contain paragraphs of explanation.
- **Real primary source excerpts.** Include actual passages from texts, artworks, musical pieces, films, or historical documents relevant to the course. Include short excerpts with analysis.
- **Real theoretical frameworks and methodologies.** Name and explain the actual analytical approaches, schools of thought, and scholarly methods used in the discipline.
- **Common mistakes and scholarly cautions.** Tell learners what interpretive pitfalls to avoid, common misconceptions, and how to read critically.
- **Progressive difficulty.** Start simple and build toward the capstone.
- **Assessment answers must be included.** For every assessment idea, write the question AND the expected answer, model response, or rubric. The AI needs to know what a strong response looks like.

---

## 8. AI Generation Note — Be Very Detailed

This is the most important section. AI reads this to generate the actual lesson content. For every chapter, write an `AI generation note` that specifies:

- **Format:** video lecture, slide deck, documentary clip, interactive reading walkthrough, audio narration, guided discussion, writing workshop, virtual gallery tour, performance analysis, or mixed.
- **Target duration:** e.g., 6–10 minutes of video, 10–15 slides, 5 quiz questions, 15-minute writing exercise.
- **Tone:** beginner-friendly, encouraging, scholarly but accessible, contemplative, Socratic, critical, analytical, creative.
- **Visual style:** artwork on screen with voiceover, split-screen text and commentary, animated timelines, archival footage, on-location documentary, staged reading, musical score overlay, live museum walkthrough, interactive map.
- **Examples to use:** specific passages, specific artworks, specific films, specific historical events, specific musical compositions, specific theoretical frameworks.
- **Interactive element:** one writing prompt, one close reading exercise, one reflection prompt, one discussion question, one creative exercise, one analytical mini-quiz.
- **Accessibility requirements:** captions, alt text for images, transcripts, high-contrast visuals, readable fonts for long texts.

**Example for a Literature chapter:**

```markdown
#### AI generation note
Create a 12-minute video lecture with a split-screen view: the left side shows the text of the opening passage of Hamlet's soliloquy, and the right side shows a live instructor annotating key phrases in real time. Use color-coded highlights for rhetorical devices, thematic keywords, and historical context. End with a 3-minute guided close reading exercise where learners pause and annotate a new passage on their own, followed by a model annotation reveal. Include full captions and a downloadable PDF of the annotated passage.
```

**Example for an Art History chapter:**

```markdown
#### AI generation note
Create a 10-minute virtual gallery walkthrough. Start with a high-resolution image of Monet's *Water Lilies* filling the screen, then slowly pan across the canvas while a voiceover explains Impressionist brushwork, the play of light, and the historical context of Giverny. Use zoom-in animations to highlight specific paint textures. Include a 2-question interactive mini-quiz about the painting's technique and a printable comparison sheet with a Realist landscape for contrast. Provide alt text for all visual descriptions.
```

Do not write generic notes like "explain this topic." Make each note concrete, actionable, and different from the notes in other chapters.

---

## 9. How to Research Each Course

1. **Start with the source catalog entry** — read the title, provider, platform, level, and skills from `docs/arts-humanities/catalog-courses-by-subcategory.json`.
2. **Search the web** for the official course/certificate page using `SearchWeb` or `FetchURL`.
3. Look for:
   - Official syllabus / weekly outline
   - Module names and learning objectives
   - Required texts, artworks, films, primary sources, or theoretical readings
   - Exam topics (for certifications)
   - Prerequisites
4. If the official syllabus is not public, infer modules/chapters from:
   - The course title and description
   - The provider's typical curriculum
   - Discipline-standard topics for that subject
5. **Flag uncertainty** — if you cannot verify a topic, write `(inferred — verify before import)` in the chapter or note.

---

## 10. Naming and Saving Rules

- **File name:** `{course-id}.md`
- **File path:** `docs/arts-humanities/{level}/{subcategory-slug}/{course-id}.md`
- Use lowercase kebab-case for course IDs and folder names.
- Do **not** use spaces in file names.
- Do **not** modify files outside `docs/arts-humanities/`.
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

1. Read a few completed syllabi from the most relevant subcategory to internalize the new standard.
2. Read the catalog source of truth:
   - `docs/arts-humanities/catalog-courses-by-subcategory.json`
3. Generate the next subcategory, starting with beginner-level courses, then intermediate, then advanced.

**Begin with the beginner-level courses within each subcategory, then intermediate, then advanced.**
