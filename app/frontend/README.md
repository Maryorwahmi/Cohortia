# Cohortia Experiential Career Platform

Cohortia is an immersive, high-end, full-scale experiential career accelerator platform designed to bridge the gap between traditional education and professional workplace engineering. The application leverages advanced frontend architectures, gamified curricula, interactive simulated code terminals, rich data visualizers, and a multi-discipline AI coaching engine to deliver a high-fidelity learning experience.

---

## 🚀 Architectural Blueprint

The application is structured as a responsive, state-driven full-stack application using **React 19**, **Vite**, **TypeScript**, **React Router**, and **Tailwind CSS**. It connects to the Cohortia backend API and supports a seamless transition between external landing sections and an internal, secure student dashboard.

### 1. Dual-Layout Navigation
*   **Visitor Mode**: A beautiful, translucent top-anchored `Header` navigation bar with interactive anchors and action buttons. Includes a conditional rendering system that hides the profile dropdown when active on the dashboard.
*   **Student Dashboard Mode**:
    *   **Desktop View**: A fixed left-hand `DashboardSidebar` providing sticky vertical navigation, active cohort indicators, and quick-access settings. The main `Header` is dynamically shifted right (`md:left-64`) and stripped of redundant navigation links, functioning as a clean, minimal top actions bar.
    *   **Mobile View**: The vertical sidebar is hidden, and the main `Header` expands to full-width, utilizing a responsive hamburger menu drawer containing all mobile-optimized dashboard links.

### 2. Full-Stack API Integration
*   **Cohortia Backend API**: All data and AI features are served by the backend at `http://localhost:3000/api/v1`. The Vite dev server proxies `/api` requests to the backend during development.
*   **Authentication**: Real JWT-based signup/login (`/api/v1/auth`) with token persistence in `localStorage`.
*   **AI Mentor & Chat**: AI conversations are handled by the backend (`/api/v1/chat/message`, `/api/v1/mentor/context`) which manages Gemini integration and persistent mentor memory.
*   **Dynamic Tuning Modes**: Allows students to calibrate the AI's behavior (Mentor, Coach, Tutor, Interviewer) and desired output format (Standard Text, Slide Outlines, Technical Docs, Voice Transcripts, Screencast Scripts).

### 3. Multi-Level State Management
*   **User Profiles & Persistence**: Authenticated user state is fetched from the backend and synchronized via `AuthContext`. Local UI state (`UserPreferences`) is derived from the backend user for compatibility with dashboard components.
*   **Step Progress Tracker**: Checks completed milestones and lessons dynamically across the curriculum, instantly computing percent completeness, active project states, and cumulative mentorship hours.
*   **Active Theme Sync**: Light and dark transitions are controlled dynamically via script-injected DOM classes, updating variables for text, borders, glass cards, and background cards.

---

## 📂 Comprehensive Page & Module Directory

### 🏠 Visitor / Guest Portal
1.  **Immersive Hero (`Hero.tsx`)**: High-impact display headlines, subtle gradient badges, and call-to-actions that trigger the onboarding funnel.
2.  **Live Ticker (`LiveTicker.tsx`)**: An infinite horizontal animation track showing simulated high-profile placement updates, cohort achievements, and active hiring events.
3.  **1-Minute Walkthrough Video (`ProductDemoSection.tsx`)**: An interactive 60-second simulated player showcasing 6 beautiful, dynamic scenes:
    *   *Scene 1*: Interactive Coding Sandbox (Software & Tech)
    *   *Scene 2*: Real-Life Corporate Projects (Business, Finance & Marketing briefs)
    *   *Scene 3*: Creative Design & UX Canvas (Creative Arts & Design asset creator)
    *   *Scene 4*: 12-Category Roadmaps (Healthcare Clinical Systems, Legal Compliance & 6,000+ course paths)
    *   *Scene 5*: AI Mentor & Expert Support (Interactive live coaching sessions)
    *   *Scene 6*: Collaborative Community Hub (Team leaderboards and certification milestones)
4.  **12-Category Careers Explorer (`CareersExplorer.tsx`)**: An interactive tabbed matrix showcasing high-demand technical and non-tech tracks. It dynamically renders specifications, entry-level salaries, market demand metrics, and example capstone briefs.
5.  **Experiential Sandbox Track (`ExperienceTrack.tsx` / `ExperienceTrackPage.tsx`)**: An interactive preview carousel showcasing specific curriculum maps, with beautiful hover and focus animation sequences.
6.  **Cohort Success Stories (`SuccessStories.tsx`)**: Slider showing detailed metrics (e.g. 185% average salary increase) and interactive cards.
7.  **About Us (`AboutUs.tsx`) & Footer (`Footer.tsx`)**: Static sections providing context about the learning model and supporting universal page routers.

---

### 🔮 Student Onboarding Engine
*   **Matching Wizard (`MatchingWizard.tsx`)**: A highly polished, 4-step wizard overlay that walks users through career alignment questions.
    *   **Step 1**: Basic Info & Goal Selection.
    *   **Step 2**: Track Matchmaker (evaluates match strength against AI, Design, Product, or Analytics).
    *   **Step 3**: Experience Level Selector (Beginner Friendly, Intermediate, Career Changer).
    *   **Step 4**: Time Commitment selection (Full-time vs. Part-time).
    *   **Result**: Creates a real account via the backend API and routes them directly to their active workspace dashboard.

---

### 📊 Logged-In Student Dashboard
The student dashboard provides a suite of deeply integrated workspace panels:

1.  **Overview Board (`OverviewPage.tsx`)**:
    *   **Welcome Masthead**: Dynamically greets the student and visualizes overall cohort progress.
    *   **C++ Certified Professional Programmer (CPP) Track**: Fully integrated as a flagship track, populated with all 12 modules and 120 chapters. Offers a dual-view system allowing students to toggle between an **Interactive Roadmap** and a comprehensive **Course Syllabus & Overview** containing detailed objectives, lesson content, narration, transcript, and audio-to-text.
    *   **Active Lab Brief Card**: Highlights the currently active capstone brief and prompts resuming.
    *   **Weekly Milestones**: Quick checkboxes to mark lessons off directly.
    *   **Daily Habits Widget**: Logs daily progress items (Commit, Documentation, Mentor sync) with consecutive streak counters.

2.  **Learning Board (`LearningBoardPage.tsx` & `InteractiveSandbox.tsx`)**:
    *   Renders the selected track's curriculum map.
    *   Organized into cohesive milestones containing interactive lessons.
    *   **Updated Immersive Terminology**:
        *   *Overview & Core Concept* has been upgraded to **Lesson Objectives**.
        *   *Key Learning Objectives* has been upgraded to **Key Concepts**.
        *   *Lab Deliverables* has been upgraded to **Hands-on Activity** and fully relocated into the **ACTIVE MODE** playground container.
    *   **Hands-on Workspace Checklist**: In Active Mode, students can check off their specific hands-on tasks interactively right alongside the code editor, command shell, and simulation controls.
    *   Allows students to read through conceptual documentation, view task requirements, and click **"Mark Complete"** to update their global stats dynamically.

3.  **Cohortia AI Mentor Chat (`MentorPage.tsx`)**:
    *   An elite chat advisor that handles custom quick-prompt suggestions.
    *   Features a custom, built-in **Markdown Parsing Engine** that renders bold (`**text**`), italics (`*text*`), underlines (`__text__`), bullet lists (`*` or `-` using elegant color accents), numbered lists (`1.`), and inline code ticks (`` `code` ``) cleanly into React node structures. No more ugly, raw unparsed strings!

4.  **Global AI Chatbot (`GlobalChatbot.tsx`)**:
    *   Floating chatbot widget featuring Coach Chinedu.
    *   Includes automatic conversation persistence, conversation resets, and our custom Markdown formatting parser.

5.  **Capstone Projects Workspace & Academic Evaluation Board (`ProjectsPage.tsx` & `InteractiveSandbox.tsx`)**:
    *   Displays full-scale client specification briefs.
    *   **Compact Workspace IDE**: A constrained, responsive panel housing a file explorer, line-numbered live code editor, and live simulation diagnostics output.
    *   **Interactive Submission Evaluator**: Integrates folder drag-and-drop or manual upload, triggering a live progress audit scoring bar evaluated via Google Gemini.
    *   **Academic Graduation & Evaluation Board**:
        *   **Diagnostic Assessment Hub**: Real-time evaluation monitoring of quizzes and simulation benchmarks.
        *   **Final Capstone Project**: The ultimate simulated production challenge with direct advisor (Coach Chinedu) assessment.
        *   **Final Proctored Examination**: A comprehensive 180-minute certification test covering all 12 modules.
        *   **Course Conclusion & Graduation**: Crypto-authenticated PDF diploma setup and career-readiness review.
        *   **Where to Go Next (Alumni Hub)**: Direct employment pipeline matching, resume tailoring workshops, and corporate placements.

6.  **Progress & Analytics Platform (`ProgressPage.tsx` & `BadgesComponent.tsx`)**:
    *   **Area Chart (Weekly Activity)**: Tracks daily study minutes across active labs using Recharts.
    *   **Bar Chart (Competency Index)**: Visualizes overall module mastery indexes based on completed steps.
    *   **Line Chart (Skill Growth Trajectory)**: A multi-series Recharts line chart mapping week-by-week growth for critical track-specific skills (e.g. Figma/AutoLayout for Design, React/TypeScript for Frontend).
    *   **Gamified Badge Desk**: Renders unlocked achievement badges with beautiful color grading and descriptions.

7.  **Student Profile Settings (`ProfilePage.tsx`)**:
    *   Lets students update their registered name.
    *   Supports switching active tracks (reloading curriculum matrices).
    *   Allows resetting the workspace back to onboarding status.

---

## 🎨 Visual Identity & Theme Variables

The platform utilizes a customized, glassy design language centered on CSS variables declared inside `src/index.css`:

| CSS Variable | Dark Theme (Default) | Light Theme (Bright) |
| :--- | :--- | :--- |
| `--immersive-bg` | `#020204` (Pure Cosmos Black) | `#f8fafc` (Soft Slate-50) |
| `--immersive-card` | `rgba(12, 12, 14, 0.72)` (Glass dark) | `rgba(255, 255, 255, 0.78)` (Glass white) |
| `--immersive-primary` | `#FF4B3E` (Energetic Red-Orange) | `#2563eb` (Royal Blue) |
| `--immersive-border` | `rgba(255, 75, 62, 0.25)` | `rgba(37, 99, 235, 0.15)` |
| `--immersive-shadow` | `rgba(255, 75, 62, 0.05)` | `rgba(37, 99, 235, 0.04)` |

*All components support immediate, flicker-free dark-mode/light-mode toggles.*

---

## 🛠️ Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Make sure the Cohortia backend is running on `http://localhost:3001`:
   ```bash
   cd ../backend
   npm run dev
   ```

3. Start the frontend dev server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) and sign up or log in.

### Environment variables

Copy `.env.example` to `.env` (already done). The default `VITE_API_URL=/api/v1` works with the Vite dev proxy.

### Share the app with ngrok

ngrok exposes the frontend only; Vite forwards `/api` requests to the local backend at `http://localhost:3001`, so friends can use the complete app through one public URL.

1. Install ngrok and authenticate it once with `ngrok config add-authtoken YOUR_TOKEN`.
2. Start the backend in one terminal:
    ```bash
    cd ../backend
    npm run dev
    ```
3. Start the share-ready frontend in another terminal:
    ```bash
    npm run dev:share
    ```
4. Start the ngrok v3 HTTP tunnel:
    ```bash
    ngrok http 5173
    ```
5. Share the `https://...ngrok-free.app` forwarding URL shown by ngrok.

Keep both the backend and frontend terminals running. Do not set `VITE_API_URL` to a localhost URL when sharing; the relative `/api/v1` value is what keeps API calls on the same public origin and avoids CORS issues.
