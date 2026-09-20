# Copilot Work Prompt — Generate Cohortia Business Syllabi

> **Use this entire document as the prompt in Copilot Work.**
> **Goal:** Create detailed, chapter-level syllabi for every Business course in the Cohortia catalog so that the platform can generate slides, audio, video, quizzes, hands-on labs, and business simulations automatically.

---

## 1. Project Context

**Project name:** Cohortia
**Project root:** `c:\Users\User\Documents\Cohortia`

**What Cohortia does:** Cohortia is a career-learning platform. Users pick a career or learning path, and the app generates a personalized roadmap with AI-generated micro-lessons (slides, audio, video, quizzes, hands-on labs, business simulations). The syllabi you are building are the curriculum backbone. They live as markdown files in the repository and will later be imported into the app database so the AI knows exactly what to teach in every lesson.

**Research phase already completed:**
- `docs/catalog-business-research.md` — first curated catalog (184 courses/certificates)
- `docs/business/catalog-courses-by-subcategory.json` — **source of truth**: 184 distinct Business courses grouped into 12 subcategories
- `docs/catalogs/schema.json` — JSON schema for catalog import

**What we are doing now:** We are moving from catalog research to full syllabus design. We create one detailed syllabus file per course/certificate. Each syllabus breaks the course into **modules** and **chapters**. Every chapter must contain a detailed **AI generation note** so we know what kind of lesson to create.

**Current progress:** We are generating syllabi for all 12 Business subcategories, one subcategory at a time, in this recommended order:

1. Business Administration & Management — Not started
2. MBA & General Management — Not started
3. Finance & Accounting — Not started
4. Marketing & Digital Marketing — Not started
5. Sales & Customer Success — Not started
6. Entrepreneurship & Innovation — Not started
7. Human Resources — Not started
8. Project Management — Not started
9. Operations, Supply Chain & Logistics — Not started
10. Business Analytics — Not started
11. Leadership & Strategy — Not started
12. Specialized Business — Not started

**Total: 184 courses.** The long-term goal is a full syllabus for every course.

Completed syllabi define the new standard: they are very detailed, with real explanatory content in every module and chapter, not bullet-point outlines. Copy their depth, tone, and structure for every future syllabus.

---

## 2. Why the Old Approach Was Rejected

An earlier batch of syllabi was rejected because the modules and chapters were **boilerplate/generic**. They listed topic names but did not contain teachable content. The new rule is:

> **Every module and every chapter must contain real, course-specific knowledge that a teacher could use to deliver a lesson.**

Do not write chapter headings with only bullet lists. Write full explanations, definitions, framework walkthroughs, financial model examples, case study analyses, strategic planning exercises, practical activities, common mistakes, and ethical notes that match the specific course topic.

### Anti-Generic Rules — APPLY TO EVERY COURSE

1. **Use the exact course metadata.** The generator provides the real course title, provider, platform, level, type, duration, skills, and subcategory. Every module and chapter must be shaped by these facts. A course titled "Google Project Management Certificate" must cover Google's actual project management curriculum topics (e.g., Agile, Scrum, risk management, stakeholder communication), not a vague "Introduction to Project Management."

2. **Research the real course.** Search the web for the official course/certificate page. Use its actual syllabus, modules, tools, and learning objectives as the backbone. If the official page is sparse, infer from the provider's typical curriculum and industry-standard topics for that exact subject.

3. **No placeholder topics.** Do not write modules like "Module 1: Basics", "Module 2: Advanced Topics", or chapters like "Topic A", "Topic B". Every module theme and chapter title must describe real, teachable subject matter.

4. **Specific tools and frameworks only.** Name the actual tools, software, methodologies, frameworks, platforms, and certifications used by the course. Examples: `Excel`, `Power BI`, `Tableau`, `Salesforce`, `HubSpot`, `Google Analytics`, `PMBOK`, `SWOT`, `Porter's Five Forces`, `Balanced Scorecard`, `Lean Six Sigma`, `DMAIC`, `Scrum`, `Kanban`, `SAP`, `QuickBooks`, `SPSS`, `R`, `Python (for business analytics)`.

5. **Concrete scenarios, not abstract definitions.** Every hands-on activity and assessment must be a realistic task a learner in that course would actually do, with specific frameworks, calculations, templates, or configurations.

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
- If a course is known to be extensive (e.g., a professional certificate with 5+ courses, a specialization with multiple projects, or a comprehensive bootcamp), use the **upper end** of the range or even exceed it if necessary.
- The goal is to **cover all necessary content**, not to fit an arbitrary template.
- Beginner courses get **5–6 modules**, not fewer. Advanced courses get **8–12 modules**, not fewer.
- Chapters per module should also follow the ranges above. An Advanced course should have 6–10 chapters per module, not 3–5.
- **When in doubt, expand.** The user prefers thoroughness over brevity.

---

## 4. Folder Structure and File Placement

The source of truth for course organization is:

```
docs/business/catalog-courses-by-subcategory.json
```

Place each syllabus under the folder path:

```
docs/business/{level}/{subcategory-slug}/{course-id}.md
```

For example:

```
docs/business/beginner/marketing-digital-marketing/google-digital-marketing-e-commerce-certificate.md
docs/business/intermediate/finance-accounting/corporate-finance.md
docs/business/advanced/leadership-strategy/executive-leadership.md
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

- `Business Administration & Management` → `business-administration-management/`
- `MBA & General Management` → `mba-general-management/`
- `Finance & Accounting` → `finance-accounting/`
- `Marketing & Digital Marketing` → `marketing-digital-marketing/`
- `Sales & Customer Success` → `sales-customer-success/`
- `Entrepreneurship & Innovation` → `entrepreneurship-innovation/`
- `Human Resources` → `human-resources/`
- `Project Management` → `project-management/`
- `Operations, Supply Chain & Logistics` → `operations-supply-chain-logistics/`
- `Business Analytics` → `business-analytics/`
- `Leadership & Strategy` → `leadership-strategy/`
- `Specialized Business` → `specialized-business/`

If a folder does not exist, create it.

---

## 5. The 12 Subcategories

From `docs/business/catalog-courses-by-subcategory.json`:

| # | Subcategory | Courses |
|---|-------------|---------|
| 1 | Business Administration & Management | 15 |
| 2 | MBA & General Management | 15 |
| 3 | Finance & Accounting | 20 |
| 4 | Marketing & Digital Marketing | 18 |
| 5 | Sales & Customer Success | 15 |
| 6 | Entrepreneurship & Innovation | 15 |
| 7 | Human Resources | 15 |
| 8 | Project Management | 15 |
| 9 | Operations, Supply Chain & Logistics | 15 |
| 10 | Business Analytics | 15 |
| 11 | Leadership & Strategy | 15 |
| 12 | Specialized Business | 10 |

**Total: 184 courses.**

---

## 6. Current Focus

Generate syllabi for the target subcategory specified by the user. Always finish one subcategory before jumping to another unless instructed otherwise. Begin with beginner-level courses, then intermediate, then advanced.

Before writing any content, read the course's `title`, `provider`, `platform`, `level`, `type`, `duration`, `skills`, and `subcategory` from the COURSE METADATA provided by the generator. Use these facts to decide the exact topics, tools, and depth. Do not ignore the skills list — it tells you which competencies the course actually teaches.

---

## 7. Required Syllabus Format

Use the **completed syllabi** as your template for depth and structure.

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
> **Category:** Business
> **Subcategory:** {Subcategory name from JSON}
> **Skills:** {comma-separated list}
> **Source catalog:** `docs/business/catalog-courses-by-subcategory.json`

> **Ownership & attribution note:** This course is curated, rebuilt, and delivered by **Cohortia**. The original subject matter and public references may be drawn from providers such as {list likely providers}, university open-courseware, or other educational sources. Cohortia does not claim sole ownership of any underlying third-party source material; we restructure, expand, and present the content as part of the Cohortia learning experience.
```

### 7.2 Required sections

1. **Course Overview** — 2–4 paragraphs explaining what the course teaches, who it is for, and why it matters. Include 6–10 specific learning outcomes as bullet points.
2. **Syllabus Structure** — a table listing modules with theme and chapter counts. Also include a total chapter count.
3. **Modules** — follow the module/chapter count guidelines in Section 3. Each module should cover a coherent theme.
4. **Chapters** — each module must contain the appropriate number of chapters per the level guidelines. Each chapter is a self-contained mini-lesson.
5. **Per-chapter content** — every chapter must have:
   - `#### Learning objectives` (3–5 bullet points)
   - `#### Detailed lesson content` (the main teaching text; multiple paragraphs, framework walkthroughs, financial model examples, case study analyses, strategic planning exercises, template demonstrations — this should be the longest section)
   - `#### Key concepts` (bullet list of terms)
   - `#### Hands-on activity` (a practical exercise)
   - `#### Assessment idea` (a quiz question, case analysis, or reflection — include the expected answer)
   - `#### AI generation note` (detailed instructions for AI — see Section 8)
6. **Module quizzes** (optional but recommended) — short self-check questions with answers after each module or in a dedicated assessments module.
7. **Final capstone / project brief** — describe what the learner should produce (e.g., a business plan, financial model, marketing campaign, HR policy document, strategic analysis).
8. **Final examination and answer key** (optional for very short courses, required for full courses) — multiple choice, short answer, case analysis, and practical problem sections.
9. **Course conclusion** — summary of what the learner can now do.

### 7.3 Depth requirements

- **No bullet-only chapters.** Every chapter must contain paragraphs of explanation.
- **Real framework and model examples.** Include actual framework applications (SWOT, PESTLE, Porter's Five Forces, Balanced Scorecard, BCG Matrix, etc.), financial calculations (NPV, IRR, ROI, DCF), marketing templates (buyer persona, content calendar, campaign brief), HR policies, project charters, etc.
- **Real tools and software.** Include actual software walkthroughs, platform screenshots described in words, Excel formulas, CRM configurations, analytics dashboards, and certification exam topics where applicable.
- **Common mistakes and ethical notes.** Tell learners what can go wrong and how to avoid it. Include ethical considerations relevant to business decisions.
- **Progressive difficulty.** Start simple and build toward the capstone.
- **Assessment answers must be included.** For every assessment idea, write the question AND the expected answer/explanation. The AI needs to know what the correct answer is.

---

## 8. AI Generation Note — Be Very Detailed

This is the most important section. AI reads this to generate the actual lesson content. For every chapter, write an `AI generation note` that specifies:

- **Format:** video, slide deck, interactive simulation, case study walkthrough, lab walkthrough, quiz, or mixed.
- **Target duration:** e.g., 6–10 minutes of video, 10–15 slides, 5 quiz questions.
- **Tone:** beginner-friendly, encouraging, concise, professional, hands-on, case-study-driven, ethically aware.
- **Visual style:** live spreadsheet demo, CRM walkthrough, framework diagram overlays, financial model build, stakeholder interview simulation, dashboard exploration, strategic planning whiteboard, process flow diagrams.
- **Examples to use:** real-world business cases, specific companies, specific frameworks, specific financial scenarios, specific marketing campaigns, specific HR situations.
- **Interactive element:** one framework exercise, one financial calculation, one reflection prompt, one mini-quiz, one case study analysis, or one hands-on lab step.
- **Accessibility requirements:** captions, alt text for diagrams, transcripts, high-contrast visuals, keyboard-navigable demos.

**Example for a Marketing Analytics chapter:**

```markdown
#### AI generation note
Create a 10-minute interactive slide deck with live dashboard demo. Start with a Google Analytics 4 property overview, walk through audience segmentation, and show how to build a custom conversion report. Include a split-screen view of the GA4 interface on the left and the strategic insight on the right. End with a 2-question interactive mini-quiz about attribution modeling.
```

Do not write generic notes like "explain this topic." Make each note concrete, actionable, and different from the notes in other chapters.

---

## 9. How to Research Each Course

1. **Start with the source catalog entry** — read the title, provider, platform, level, and skills from `docs/business/catalog-courses-by-subcategory.json`.
2. **Search the web** for the official course/certificate page using `SearchWeb` or `FetchURL`.
3. Look for:
   - Official syllabus / weekly outline
   - Module names and learning objectives
   - Required tools, software, frameworks, certifications, or methodologies
   - Exam topics (for certifications like PMP, CFA, CPA, SHRM, etc.)
   - Prerequisites
4. If the official syllabus is not public, infer modules/chapters from:
   - The course title and description
   - The provider's typical curriculum
   - Industry-standard topics for that subject
5. **Flag uncertainty** — if you cannot verify a topic, write `(inferred — verify before import)` in the chapter or note.

---

## 10. Naming and Saving Rules

- **File name:** `{course-id}.md`
- **File path:** `docs/business/{level}/{subcategory-slug}/{course-id}.md`
- Use lowercase kebab-case for course IDs and folder names.
- Do **not** use spaces in file names.
- Do **not** modify files outside `docs/business/`.
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
   - `docs/business/catalog-courses-by-subcategory.json`
3. Generate the next subcategory, starting with beginner-level courses, then intermediate, then advanced.

**Begin with the beginner-level courses within each subcategory, then intermediate, then advanced.**
