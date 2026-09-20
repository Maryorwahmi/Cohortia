/**
 * Archetype-specific fallback syllabi for Cohortia.
 * These are used when AI roadmap generation fails or as a high-quality baseline.
 * Every syllabus is topic-driven: modules are concrete skill areas and chapters
 * are specific teachable topics. The 6-part learning flow is stored only in the
 * `section` field, never in titles.
 */

const sharedResources = {
  tech: ['MDN Web Docs', 'freeCodeCamp', 'Cohortia mentor chat', 'GitHub practice repo'],
  cybersecurity: ['TryHackMe', 'Cybrary', 'OWASP', 'Cohortia mentor chat'],
  cloud: ['AWS / GCP / Azure docs', 'Terraform docs', 'Docker docs', 'Cohortia mentor chat'],
  datascience: ['Kaggle Learn', 'scikit-learn docs', 'Google Data Analytics Certificate', 'Cohortia mentor chat'],
  design: ['Figma Community', 'Dribbble', 'Nielsen Norman Group', 'Cohortia mentor chat'],
  business: ['HubSpot Academy', 'ProductPlan blog', 'Mixpanel / GA docs', 'Cohortia mentor chat'],
  data: ['Kaggle Learn', 'Google Data Analytics Certificate', 'Mode Analytics tutorials', 'Cohortia mentor chat'],
};

function baseModules({ field, level, track }) {
  const isAdvanced = level === 'Advanced' || level === 'Intermediate';
  return {
    tech: [
      {
        title: 'Web Foundations: HTML Structure & Semantic CSS',
        description: `Build a solid foundation in how the web works by mastering document structure, semantic markup, and the core CSS layout systems used in ${field}.`,
        keySkills: ['Semantic HTML', 'CSS Box Model', 'Flexbox', 'Responsive Design', 'Accessibility Basics'],
        duration: '2 weeks',
        difficulty: level,
        chapters: [
          { title: 'How the web works: browsers, servers, and requests', summary: 'Understand the request/response cycle and how HTML, CSS, and JavaScript fit together.', duration: '15 min', section: 'Warm Up' },
          { title: 'HTML document structure and semantic tags', summary: 'Learn to write meaningful markup using header, nav, main, section, article, and form elements.', duration: '35 min', section: 'Learn' },
          { title: 'CSS selectors, box model, and typography', summary: 'Practice styling text, spacing, borders, and layouts using the CSS box model.', duration: '45 min', section: 'Practice' },
          { title: 'Flexbox and responsive layouts', summary: 'Build a mobile-first landing page layout that adapts to different screen sizes.', duration: '60 min', section: 'Apply' },
          { title: 'Self-assessment: semantic HTML and responsive layouts', summary: 'Test your understanding of semantic structure and responsive layout principles.', duration: '10 min', section: 'Checkpoint' },
          { title: 'Community workshop: responsive landing pages', summary: 'Post your page in the community for peer review and accessibility feedback.', duration: '15 min', section: 'Connect' },
        ],
        deliverable: 'Responsive landing page for your portfolio app',
        resources: sharedResources.tech,
      },
      {
        title: 'JavaScript Essentials: Logic, DOM, and Events',
        description: `Learn the programming fundamentals that bring ${field} interfaces to life, from variables and functions to DOM manipulation and event handling.`,
        keySkills: ['Variables & Functions', 'DOM Manipulation', 'Event Listeners', 'Conditionals & Loops', 'Debugging'],
        duration: '3 weeks',
        difficulty: level,
        chapters: [
          { title: 'JavaScript in the browser: what can it do?', summary: 'See real examples of interactive web features and how JavaScript interacts with HTML and CSS.', duration: '15 min', section: 'Warm Up' },
          { title: 'Variables, data types, functions, and scope', summary: 'Learn the core language building blocks through practical examples and exercises.', duration: '40 min', section: 'Learn' },
          { title: 'Arrays, objects, and iteration', summary: 'Practice storing and manipulating data with arrays, objects, and loop patterns.', duration: '45 min', section: 'Practice' },
          { title: 'DOM selection and event handling', summary: 'Build interactive UI components by selecting elements and responding to user events.', duration: '60 min', section: 'Apply' },
          { title: 'Self-assessment: variables, DOM, and events', summary: 'Quiz yourself on functions, scope, DOM, and event handling.', duration: '10 min', section: 'Checkpoint' },
          { title: 'Community workshop: debugging and code review', summary: 'Review a classmates code and discuss different solutions to the same problem.', duration: '15 min', section: 'Connect' },
        ],
        deliverable: 'Interactive feature for your portfolio app (e.g. form, filter, or calculator)',
        resources: sharedResources.tech,
      },
      {
        title: 'Modern Frontend: Components, State, and Routing',
        description: `Move from vanilla JavaScript to component-based architecture, state management, and client-side routing for professional ${field} apps.`,
        keySkills: ['React Components', 'JSX', 'Props & State', 'Hooks', 'Client-Side Routing'],
        duration: '3 weeks',
        difficulty: isAdvanced ? 'Intermediate' : 'Beginner',
        chapters: [
          { title: 'From vanilla JS to components', summary: 'Understand why component-based UI is the standard for modern web apps.', duration: '15 min', section: 'Warm Up' },
          { title: 'JSX, props, and component composition', summary: 'Learn how to build reusable UI pieces and pass data between them.', duration: '40 min', section: 'Learn' },
          { title: 'State, effects, and handling user input', summary: 'Practice useState and useEffect to build dynamic, data-driven components.', duration: '50 min', section: 'Practice' },
          { title: 'Routing and multi-page experiences', summary: 'Add navigation between views in your portfolio app using a router.', duration: '60 min', section: 'Apply' },
          { title: 'Self-assessment: components, state, and routing', summary: 'Review component lifecycle, state flow, and common beginner mistakes.', duration: '10 min', section: 'Checkpoint' },
          { title: 'Community workshop: React component design', summary: 'Share a component you built and get feedback on reusability and clarity.', duration: '15 min', section: 'Connect' },
        ],
        deliverable: 'Multi-view frontend for your portfolio app',
        resources: sharedResources.tech,
      },
      {
        title: 'Backend & Data: APIs, Databases, and Auth',
        description: `Connect your frontend to a real backend by building REST APIs, storing data, and securing user accounts for ${field} applications.`,
        keySkills: ['REST APIs', 'Node.js / Express', 'Database CRUD', 'Authentication', 'Deployment Basics'],
        duration: '3 weeks',
        difficulty: isAdvanced ? 'Intermediate' : 'Beginner',
        chapters: [
          { title: 'How APIs power real apps', summary: 'Explore how client apps request and send data to servers in production systems.', duration: '15 min', section: 'Warm Up' },
          { title: 'Building a REST API with routes and controllers', summary: 'Learn to design endpoints, handle requests, and return structured JSON.', duration: '45 min', section: 'Learn' },
          { title: 'Database design and CRUD operations', summary: 'Practice creating, reading, updating, and deleting records in a simple database.', duration: '50 min', section: 'Practice' },
          { title: 'Authentication and protecting routes', summary: 'Add signup/login to your portfolio app and protect private data.', duration: '70 min', section: 'Apply' },
          { title: 'Self-assessment: APIs, databases, and authentication', summary: 'Test your understanding of APIs, databases, and authentication flow.', duration: '10 min', section: 'Checkpoint' },
          { title: 'Community workshop: REST API design', summary: 'Share your endpoint design and discuss REST conventions with peers.', duration: '15 min', section: 'Connect' },
        ],
        deliverable: 'Working backend API + database for your portfolio app',
        resources: sharedResources.tech,
      },
      {
        title: 'Career Launch: Deployment, Portfolio, and Interview Prep',
        description: `Package your evolving project, deploy it live, and prepare your portfolio, case study, and interview narrative for ${field} roles.`,
        keySkills: ['Deployment', 'Technical Writing', 'Portfolio Case Study', 'Interview Prep', 'Job Search Strategy'],
        duration: '2 weeks',
        difficulty: level,
        chapters: [
          { title: 'What employers look for in junior portfolios', summary: 'Analyze real job descriptions and portfolio examples to understand hiring criteria.', duration: '20 min', section: 'Warm Up' },
          { title: 'Deploying your full-stack app to the web', summary: 'Learn the basics of hosting, environment variables, and CI/CD for a live demo.', duration: '45 min', section: 'Learn' },
          { title: 'Writing a clear case study', summary: 'Practice turning your project process into a compelling narrative with outcomes.', duration: '40 min', section: 'Practice' },
          { title: 'Mock technical interview and code review', summary: 'Walk through a realistic interview question and receive structured feedback.', duration: '60 min', section: 'Apply' },
          { title: 'Self-assessment: portfolio and interview readiness', summary: 'Reflect on your portfolio, strengths, and next job-search steps.', duration: '10 min', section: 'Checkpoint' },
          { title: 'Community workshop: portfolio and case-study pitches', summary: 'Present your deployed portfolio app and case study to the community.', duration: '15 min', section: 'Connect' },
        ],
        deliverable: 'Live deployed portfolio app + case study + interview prep',
        resources: sharedResources.tech,
      },
    ],
    design: [
      {
        title: 'Design Thinking & User Research Basics',
        description: `Learn how to understand users, frame problems, and define design opportunities for ${field}.`,
        keySkills: ['User Empathy', 'Problem Framing', 'Research Methods', 'Personas', 'Journey Mapping'],
        duration: '2 weeks',
        difficulty: level,
        chapters: [
          { title: 'Why design starts with people, not pixels', summary: 'Explore how user-centered design leads to better products and careers.', duration: '15 min', section: 'Warm Up' },
          { title: 'User interviews and empathy mapping', summary: 'Learn to plan, conduct, and synthesize user interviews.', duration: '40 min', section: 'Learn' },
          { title: 'Defining problems and writing How Might We statements', summary: 'Practice turning research insights into actionable design challenges.', duration: '45 min', section: 'Practice' },
          { title: 'Building a persona and journey map', summary: 'Create research artifacts for a real or imagined product.', duration: '60 min', section: 'Apply' },
          { title: 'Self-assessment: user research and problem framing', summary: 'Check your understanding of qualitative research and problem framing.', duration: '10 min', section: 'Checkpoint' },
          { title: 'Community workshop: research plan critique', summary: 'Share your interview plan and get feedback from peers.', duration: '15 min', section: 'Connect' },
        ],
        deliverable: 'Research report for your portfolio case-study project',
        resources: sharedResources.design,
      },
      {
        title: 'Visual Design Principles & UI Foundations',
        description: `Master the visual building blocks of interface design: layout, type, color, spacing, and hierarchy for ${field}.`,
        keySkills: ['Layout', 'Typography', 'Color Theory', 'Spacing', 'Visual Hierarchy'],
        duration: '3 weeks',
        difficulty: level,
        chapters: [
          { title: 'What makes an interface feel professional', summary: 'Analyze examples of strong and weak UI and identify the principles at work.', duration: '15 min', section: 'Warm Up' },
          { title: 'Layout grids and alignment', summary: 'Learn to structure screens using grids, alignment, and consistent spacing.', duration: '40 min', section: 'Learn' },
          { title: 'Typography and readability', summary: 'Practice choosing typefaces, sizes, and line spacing for digital products.', duration: '45 min', section: 'Practice' },
          { title: 'Color, contrast, and accessibility', summary: 'Build a color system and apply it to a set of UI components.', duration: '60 min', section: 'Apply' },
          { title: 'Self-assessment: layout, type, and colour decisions', summary: 'Review your UI decisions against accessibility and hierarchy principles.', duration: '10 min', section: 'Checkpoint' },
          { title: 'Community workshop: UI critique and feedback', summary: 'Give and receive feedback on visual designs in the community.', duration: '15 min', section: 'Connect' },
        ],
        deliverable: 'High-fidelity UI screens for your portfolio case-study project',
        resources: sharedResources.design,
      },
      {
        title: 'UX Design: Wireframing, Prototyping & Testing',
        description: `Translate research into flows, wireframes, and interactive prototypes you can test with real users for ${field}.`,
        keySkills: ['Wireframing', 'User Flows', 'Prototyping', 'Usability Testing', 'Iteration'],
        duration: '3 weeks',
        difficulty: level,
        chapters: [
          { title: 'From research to rough ideas', summary: 'See how sketches and wireframes reduce risk before high-fidelity design.', duration: '15 min', section: 'Warm Up' },
          { title: 'User flows and information architecture', summary: 'Map the steps users take to complete key tasks in your product.', duration: '40 min', section: 'Learn' },
          { title: 'Low-fidelity wireframing', summary: 'Practice sketching and digital wireframes focused on structure, not polish.', duration: '50 min', section: 'Practice' },
          { title: 'Interactive prototyping and usability testing', summary: 'Build a clickable prototype and run a short usability test.', duration: '70 min', section: 'Apply' },
          { title: 'Self-assessment: flows, wireframes, and prototypes', summary: 'Reflect on wireframe clarity, flow logic, and test findings.', duration: '10 min', section: 'Checkpoint' },
          { title: 'Community workshop: prototype walkthroughs', summary: 'Walk peers through your prototype and discuss usability insights.', duration: '15 min', section: 'Connect' },
        ],
        deliverable: 'Tested clickable prototype for your portfolio case-study project',
        resources: sharedResources.design,
      },
      {
        title: 'Design Systems, Handoff & Real-World Collaboration',
        description: `Prepare your designs for development by building reusable components, design systems, and clear handoff documentation for ${field}.`,
        keySkills: ['Design Systems', 'Component Libraries', 'Design Handoff', 'Annotations', 'Developer Collaboration'],
        duration: '2 weeks',
        difficulty: isAdvanced ? 'Intermediate' : 'Beginner',
        chapters: [
          { title: 'Why design systems scale teams', summary: 'Explore how systems keep products consistent and speed up design work.', duration: '15 min', section: 'Warm Up' },
          { title: 'Atoms, molecules, and component libraries', summary: 'Learn atomic design and build a small component library.', duration: '45 min', section: 'Learn' },
          { title: 'Spacing, naming, and variant management', summary: 'Practice organizing components so developers can use them reliably.', duration: '45 min', section: 'Practice' },
          { title: 'Handoff documentation and developer specs', summary: 'Prepare a complete handoff package for your portfolio screens.', duration: '60 min', section: 'Apply' },
          { title: 'Self-assessment: component library and handoff quality', summary: 'Review your system for consistency, naming, and completeness.', duration: '10 min', section: 'Checkpoint' },
          { title: 'Community workshop: handoff documentation', summary: 'Swap handoff files with a peer and identify missing information.', duration: '15 min', section: 'Connect' },
        ],
        deliverable: 'Component library + developer handoff for your portfolio case-study project',
        resources: sharedResources.design,
      },
      {
        title: 'Career Launch: Portfolio, Case Study & Interview Prep',
        description: `Package your case-study project into a compelling portfolio, write the story, and prepare for design interviews for ${field}.`,
        keySkills: ['Portfolio Strategy', 'Case Study Writing', 'Design Critique', 'Interview Prep', 'Personal Branding'],
        duration: '2 weeks',
        difficulty: level,
        chapters: [
          { title: 'What hiring managers look for in design portfolios', summary: 'Review strong portfolios and identify the structure of a good case study.', duration: '20 min', section: 'Warm Up' },
          { title: 'Writing the case study narrative', summary: 'Learn to tell the story of process, decisions, and outcomes.', duration: '45 min', section: 'Learn' },
          { title: 'Presenting your design decisions', summary: 'Practice defending trade-offs and explaining your rationale.', duration: '45 min', section: 'Practice' },
          { title: 'Mock design critique and behavioral interview', summary: 'Participate in a realistic design interview with feedback.', duration: '60 min', section: 'Apply' },
          { title: 'Career readiness checkpoint', summary: 'Audit your portfolio, case study, and interview talking points.', duration: '10 min', section: 'Checkpoint' },
          { title: 'Community workshop: portfolio case studies', summary: 'Present your final portfolio case study to the community.', duration: '15 min', section: 'Connect' },
        ],
        deliverable: 'Published portfolio with full case study + interview prep',
        resources: sharedResources.design,
      },
    ],
    business: [
      {
        title: 'Product & Market Foundations',
        description: `Understand the market, user, and business context that shape successful products and strategies for ${field}.`,
        keySkills: ['Market Research', 'User Problems', 'Value Proposition', 'Competitive Analysis', 'Metrics Basics'],
        duration: '2 weeks',
        difficulty: level,
        chapters: [
          { title: 'Great products solve real problems', summary: 'Explore how successful products identify and validate user needs.', duration: '15 min', section: 'Warm Up' },
          { title: 'Market research and competitive analysis', summary: 'Learn frameworks for sizing markets and mapping competitors.', duration: '40 min', section: 'Learn' },
          { title: 'Defining value propositions and target users', summary: 'Practice articulating who a product is for and why they should care.', duration: '45 min', section: 'Practice' },
          { title: 'Building a lean canvas or opportunity brief', summary: 'Create a one-page summary of a product opportunity.', duration: '60 min', section: 'Apply' },
          { title: 'Self-assessment: market, value proposition, and risk', summary: 'Review your assumptions, risks, and success metrics.', duration: '10 min', section: 'Checkpoint' },
          { title: 'Community workshop: opportunity briefs', summary: 'Share your brief and discuss market risks with peers.', duration: '15 min', section: 'Connect' },
        ],
        deliverable: 'Opportunity brief for your portfolio business project',
        resources: sharedResources.business,
      },
      {
        title: 'Product Discovery & Validation',
        description: `Learn how to turn ideas into validated solutions through user research, experiments, and rapid iteration for ${field}.`,
        keySkills: ['User Research', 'Hypothesis Writing', 'MVPs', 'Experiment Design', 'Interview Synthesis'],
        duration: '3 weeks',
        difficulty: level,
        chapters: [
          { title: 'Discovery beats assumptions', summary: 'See why discovery is the highest-leverage phase of product work.', duration: '15 min', section: 'Warm Up' },
          { title: 'User interviews andJobs-to-be-Done', summary: 'Learn to uncover user motivations through structured interviews.', duration: '45 min', section: 'Learn' },
          { title: 'Writing hypotheses and designing experiments', summary: 'Practice turning ideas into testable statements and lightweight tests.', duration: '50 min', section: 'Practice' },
          { title: 'Running a validation sprint', summary: 'Validate a feature or product idea with real or proxy users.', duration: '70 min', section: 'Apply' },
          { title: 'Self-assessment: interviews, hypotheses, and experiments', summary: 'Reflect on evidence quality and decision-making from your experiments.', duration: '10 min', section: 'Checkpoint' },
          { title: 'Community workshop: validation experiments', summary: 'Review each other\'s experiments and suggest stronger validation methods.', duration: '15 min', section: 'Connect' },
        ],
        deliverable: 'Validated product concept for your portfolio business project',
        resources: sharedResources.business,
      },
      {
        title: 'Roadmapping, Prioritisation & Metrics',
        description: `Learn to define outcomes, prioritise work, and build a roadmap that aligns teams and drives results for ${field}.`,
        keySkills: ['Outcome-Based Roadmaps', 'Prioritisation Frameworks', 'KPIs', 'OKRs', 'Stakeholder Communication'],
        duration: '3 weeks',
        difficulty: level,
        chapters: [
          { title: 'Roadmaps are about outcomes, not features', summary: 'Understand the difference between output and outcome-focused roadmaps.', duration: '15 min', section: 'Warm Up' },
          { title: 'Prioritisation frameworks: RICE, ICE, MoSCoW', summary: 'Learn frameworks for deciding what to build first.', duration: '45 min', section: 'Learn' },
          { title: 'Defining metrics and North Star metrics', summary: 'Practice choosing metrics that reflect real user and business value.', duration: '50 min', section: 'Practice' },
          { title: 'Building a quarterly roadmap', summary: 'Create a prioritised roadmap tied to outcomes and metrics.', duration: '60 min', section: 'Apply' },
          { title: 'Self-assessment: prioritisation and metrics', summary: 'Review your roadmap for feasibility, metrics, and stakeholder clarity.', duration: '10 min', section: 'Checkpoint' },
          { title: 'Community workshop: roadmap defence', summary: 'Defend your roadmap choices to peers playing stakeholders.', duration: '15 min', section: 'Connect' },
        ],
        deliverable: 'Outcome-based roadmap for your portfolio business project',
        resources: sharedResources.business,
      },
      {
        title: 'Execution, Growth & Go-to-Market',
        description: `Learn how to ship, measure, and grow products through iterative delivery and go-to-market tactics for ${field}.`,
        keySkills: ['Agile Delivery', 'A/B Testing', 'Growth Loops', 'Launch Planning', 'Stakeholder Updates'],
        duration: '2 weeks',
        difficulty: level,
        chapters: [
          { title: 'Shipping is a skill', summary: 'Explore how product teams balance speed, quality, and learning.', duration: '15 min', section: 'Warm Up' },
          { title: 'Agile rituals and stakeholder communication', summary: 'Learn the basics of sprints, standups, and product updates.', duration: '45 min', section: 'Learn' },
          { title: 'Running experiments and A/B tests', summary: 'Practice designing a test to improve a key metric.', duration: '50 min', section: 'Practice' },
          { title: 'Go-to-market plan for your concept', summary: 'Build a launch plan with audience, messaging, and success metrics.', duration: '60 min', section: 'Apply' },
          { title: 'Self-assessment: launch plan and growth experiment', summary: 'Review your launch plan for clarity, risk, and metrics.', duration: '10 min', section: 'Checkpoint' },
          { title: 'Community workshop: go-to-market plans', summary: 'Pitch your go-to-market plan and gather peer feedback.', duration: '15 min', section: 'Connect' },
        ],
        deliverable: 'Launch plan + growth experiment for your portfolio business project',
        resources: sharedResources.business,
      },
      {
        title: 'Career Launch: Portfolio, Case Study & Interview Prep',
        description: `Package your business project into a compelling case study and prepare for product/strategy interviews for ${field}.`,
        keySkills: ['Case Study Writing', 'Product Sense', 'Metrics Interview', 'Stakeholder Role-Play', 'Personal Branding'],
        duration: '2 weeks',
        difficulty: level,
        chapters: [
          { title: 'What product hiring managers want to see', summary: 'Analyze strong product portfolios and interview performances.', duration: '20 min', section: 'Warm Up' },
          { title: 'Writing a product case study', summary: 'Structure your project around problem, discovery, decision, and outcome.', duration: '45 min', section: 'Learn' },
          { title: 'Practising metrics and prioritisation questions', summary: 'Work through common product interview questions with frameworks.', duration: '50 min', section: 'Practice' },
          { title: 'Mock product interview', summary: 'Complete a realistic product sense / strategy interview with feedback.', duration: '60 min', section: 'Apply' },
          { title: 'Career readiness checkpoint', summary: 'Audit your case study, talking points, and job-search plan.', duration: '10 min', section: 'Checkpoint' },
          { title: 'Community workshop: portfolio case studies', summary: 'Present your case study and receive community feedback.', duration: '15 min', section: 'Connect' },
        ],
        deliverable: 'Published case study + interview prep for product/strategy roles',
        resources: sharedResources.business,
      },
    ],
    data: [
      {
        title: 'Data Foundations: Spreadsheets, Databases & SQL',
        description: `Learn how data is stored, queried, and prepared for analysis in real organisations for ${field}.`,
        keySkills: ['Spreadsheets', 'Relational Databases', 'SQL Queries', 'Data Cleaning', 'Data Types'],
        duration: '2 weeks',
        difficulty: level,
        chapters: [
          { title: 'How data drives decisions', summary: 'Explore real examples of data-informed product and business decisions.', duration: '15 min', section: 'Warm Up' },
          { title: 'Database structure and SQL basics', summary: 'Learn tables, relationships, SELECT, WHERE, and JOIN.', duration: '45 min', section: 'Learn' },
          { title: 'Cleaning and organising messy data', summary: 'Practice handling missing values, duplicates, and inconsistent formats.', duration: '50 min', section: 'Practice' },
          { title: 'SQL analysis of a real dataset', summary: 'Answer business questions by querying a provided dataset.', duration: '60 min', section: 'Apply' },
          { title: 'Self-assessment: SQL and data cleaning', summary: 'Review your SQL and cleaning knowledge with practical questions.', duration: '10 min', section: 'Checkpoint' },
          { title: 'Community workshop: SQL solution review', summary: 'Share your SQL solutions and compare approaches with peers.', duration: '15 min', section: 'Connect' },
        ],
        deliverable: 'Cleaned dataset + SQL analysis for your portfolio data project',
        resources: sharedResources.data,
      },
      {
        title: 'Exploratory Analysis & Visualisation',
        description: `Find patterns, summarise data, and communicate insights using charts and dashboards for ${field}.`,
        keySkills: ['Descriptive Statistics', 'Data Visualisation', 'Dashboards', 'Insight Communication', 'Chart Selection'],
        duration: '3 weeks',
        difficulty: level,
        chapters: [
          { title: 'Turning raw data into insight', summary: 'See how exploratory analysis uncovers questions before answers.', duration: '15 min', section: 'Warm Up' },
          { title: 'Descriptive statistics and distributions', summary: 'Learn mean, median, spread, and how to interpret distributions.', duration: '45 min', section: 'Learn' },
          { title: 'Choosing and building the right chart', summary: 'Practice bar, line, scatter, and distribution charts for different messages.', duration: '50 min', section: 'Practice' },
          { title: 'Building an interactive dashboard', summary: 'Create a dashboard that answers key business questions.', duration: '70 min', section: 'Apply' },
          { title: 'Self-assessment: charts and dashboard clarity', summary: 'Review your charts for clarity, honesty, and accessibility.', duration: '10 min', section: 'Checkpoint' },
          { title: 'Community workshop: dashboard and insight critique', summary: 'Give and receive feedback on dashboard design and insight clarity.', duration: '15 min', section: 'Connect' },
        ],
        deliverable: 'Interactive dashboard for your portfolio data project',
        resources: sharedResources.data,
      },
      {
        title: 'Analytical Thinking: Hypothesis, Experiment & Metrics',
        description: `Move beyond describing data to asking questions, testing ideas, and measuring impact for ${field}.`,
        keySkills: ['Hypothesis Testing', 'A/B Testing Basics', 'Cohort Analysis', 'KPIs', 'Root Cause Analysis'],
        duration: '3 weeks',
        difficulty: level,
        chapters: [
          { title: 'Analysis is about decisions, not numbers', summary: 'Understand how analysts translate data into recommendations.', duration: '15 min', section: 'Warm Up' },
          { title: 'Hypothesis writing and experiment basics', summary: 'Learn to frame a business question as a testable hypothesis.', duration: '45 min', section: 'Learn' },
          { title: 'Cohort and funnel analysis', summary: 'Practice segmenting users and analysing funnel drop-off.', duration: '50 min', section: 'Practice' },
          { title: 'A/B test analysis and recommendation', summary: 'Analyse experiment results and write a clear recommendation.', duration: '70 min', section: 'Apply' },
          { title: 'Self-assessment: experiment design and interpretation', summary: 'Review your experiment design and interpretation for correctness.', duration: '10 min', section: 'Checkpoint' },
          { title: 'Community workshop: experiment design review', summary: 'Discuss experiment designs and potential confounds with peers.', duration: '15 min', section: 'Connect' },
        ],
        deliverable: 'Experiment analysis + recommendation for your portfolio data project',
        resources: sharedResources.data,
      },
      {
        title: 'Applied Data Project & Communication',
        description: `Combine SQL, visualisation, and analysis into a complete, real-world data project for ${field}.`,
        keySkills: ['End-to-End Analysis', 'Data Storytelling', 'Stakeholder Communication', 'Documentation', 'Reproducibility'],
        duration: '2 weeks',
        difficulty: level,
        chapters: [
          { title: 'End-to-end projects impress employers', summary: 'See how a complete analysis tells a clearer story than isolated charts.', duration: '15 min', section: 'Warm Up' },
          { title: 'Structuring a data project', summary: 'Learn a repeatable workflow from question to data to insight.', duration: '45 min', section: 'Learn' },
          { title: 'Writing a clear data story', summary: 'Practice turning findings into a concise narrative with visuals.', duration: '45 min', section: 'Practice' },
          { title: 'Stakeholder presentation and action plan', summary: 'Present your analysis with recommendations to a non-technical audience.', duration: '60 min', section: 'Apply' },
          { title: 'Self-assessment: end-to-end analysis and storytelling', summary: 'Review your full project for reproducibility and impact.', duration: '10 min', section: 'Checkpoint' },
          { title: 'Community workshop: data story presentations', summary: 'Present your data story and receive feedback.', duration: '15 min', section: 'Connect' },
        ],
        deliverable: 'Complete data analysis project with slide deck for your portfolio',
        resources: sharedResources.data,
      },
      {
        title: 'Career Launch: Portfolio, Case Study & Interview Prep',
        description: `Package your data project, prepare for analyst interviews, and build a job-search plan for ${field}.`,
        keySkills: ['Portfolio Curation', 'Technical Interview Prep', 'SQL Drills', 'Case Study Writing', 'Networking'],
        duration: '2 weeks',
        difficulty: level,
        chapters: [
          { title: 'What data hiring managers look for', summary: 'Review strong data portfolios and common interview formats.', duration: '20 min', section: 'Warm Up' },
          { title: 'Writing a data case study', summary: 'Structure your project around business question, method, insight, and impact.', duration: '45 min', section: 'Learn' },
          { title: 'SQL and metrics interview practice', summary: 'Work through realistic technical and metrics questions.', duration: '50 min', section: 'Practice' },
          { title: 'Mock data analyst interview', summary: 'Complete a realistic interview with structured feedback.', duration: '60 min', section: 'Apply' },
          { title: 'Career readiness checkpoint', summary: 'Audit your portfolio, case study, and interview preparation.', duration: '10 min', section: 'Checkpoint' },
          { title: 'Community workshop: portfolio reviews', summary: 'Share your final portfolio and case study with the community.', duration: '15 min', section: 'Connect' },
        ],
        deliverable: 'Published data portfolio + case study + interview prep',
        resources: sharedResources.data,
      },
    ],
  };
}

const syllabusCatalog = [
  {
    id: 'fullstack',
    keywords: ['full-stack', 'fullstack', 'full stack', 'web developer', 'software engineer', 'mern', 'mean'],
    track: 'tech',
    title: '{field} Programme',
    description: 'A hands-on path from HTML and CSS to a deployed full-stack application. Each module adds a real layer to one evolving portfolio project.',
    evolvingProject: {
      title: '{field} Portfolio Application',
      description: 'A complete web application that starts as a static landing page and evolves into a full-stack product with authentication, database, and deployment.',
    },
  },
  {
    id: 'frontend',
    keywords: ['frontend', 'front-end', 'front end', 'react', 'vue', 'angular', 'ui developer'],
    track: 'tech',
    title: '{field} Programme',
    description: 'A project-based path through HTML, CSS, JavaScript, and modern frontend frameworks, ending with a polished portfolio of interactive interfaces.',
    evolvingProject: {
      title: '{field} Portfolio Site',
      description: 'A multi-page, interactive portfolio website that grows from static HTML/CSS into a React-powered application.',
    },
  },
  {
    id: 'backend',
    keywords: ['backend', 'back-end', 'back end', 'node', 'api', 'server', 'database', 'sql', 'python'],
    track: 'tech',
    title: '{field} Programme',
    description: 'Build the server-side skills that power applications: APIs, databases, authentication, and deployment, applied to a real-world backend service.',
    evolvingProject: {
      title: '{field} API Service',
      description: 'A REST API that evolves from basic routes to a secure, database-backed service with authentication and documentation.',
    },
  },
  {
    id: 'data',
    keywords: ['data analyst', 'data analysis', 'data analytics', 'sql', 'business intelligence', 'bi analyst'],
    track: 'data',
    title: '{field} Programme',
    description: 'Learn to clean, analyse, visualise, and communicate data insights through a complete end-to-end analytics portfolio project.',
    evolvingProject: {
      title: '{field} Insights Project',
      description: 'A real-world dataset analysed from cleaning to dashboard to stakeholder recommendation.',
    },
  },
  {
    id: 'uxui',
    keywords: ['ux', 'ui', 'ux/ui', 'user experience', 'user interface', 'product design', 'interaction design'],
    track: 'design',
    title: '{field} Programme',
    description: 'A research-driven design path from user discovery to high-fidelity prototypes, design systems, and a published portfolio case study.',
    evolvingProject: {
      title: '{field} Case Study',
      description: 'A complete product-design case study showing research, ideation, prototyping, testing, and final design.',
    },
  },
  {
    id: 'product',
    keywords: ['product manager', 'product management', 'product owner', 'pm'],
    track: 'business',
    title: '{field} Programme',
    description: 'Master product discovery, prioritisation, roadmapping, and go-to-market strategy through a realistic product case study.',
    evolvingProject: {
      title: '{field} Product Case Study',
      description: 'A validated product concept with research, roadmap, launch plan, and success metrics.',
    },
  },
  {
    id: 'marketing',
    keywords: ['digital marketing', 'marketing', 'growth marketing', 'seo', 'content marketing', 'social media'],
    track: 'business',
    title: '{field} Programme',
    description: 'Learn audience research, channel strategy, campaign execution, and measurement through a hands-on growth marketing project.',
    evolvingProject: {
      title: '{field} Growth Campaign',
      description: 'A multi-channel marketing campaign with research, creative, execution plan, and performance metrics.',
    },
  },
];

function pickCatalogEntry(field = '') {
  const lower = field.toLowerCase();
  const match = syllabusCatalog.find((entry) => entry.keywords.some((k) => lower.includes(k)));
  return match || syllabusCatalog[0]; // default to fullstack
}

function fillTemplate(text, variables) {
  return text.replace(/\{(\w+)\}/g, (_, key) => variables[key] ?? `{${key}}`);
}

export function buildSyllabus(field, level = 'Beginner', learnerType = 'start_career', weeks = 12) {
  const entry = pickCatalogEntry(field);
  const variables = { field, level, learnerType: learnerType.replace(/_/g, ' ') };

  const base = baseModules({ field, level, track: entry.track });
  const modules = base[entry.track].map((module, index) => {
    const adjustedDuration = learnerType === 'level_up' && index === 1 ? '1 week' : module.duration;
    return {
      ...module,
      title: fillTemplate(module.title, variables),
      description: fillTemplate(module.description, variables),
      duration: adjustedDuration,
      phase: `Phase ${index + 1}: ${module.title}`,
      chapters: module.chapters.map((chapter) => ({
        ...chapter,
        title: fillTemplate(chapter.title, variables),
        summary: fillTemplate(chapter.summary, variables),
      })),
      deliverable: fillTemplate(module.deliverable, variables),
    };
  });

  return {
    title: fillTemplate(entry.title, variables),
    description: fillTemplate(entry.description, variables),
    timeline: `${weeks} weeks`,
    focusSkills: modules.flatMap((m) => m.keySkills).slice(0, 8),
    learnerType,
    archetype: deriveArchetype(field),
    archetypeLabel: archetypeLabel(field),
    phaseEmphasis: {
      assessment: 15,
      foundation: 60,
      skill: 50,
      application: 40,
      career: 30,
    },
    milestones: modules.map((m, i) => ({
      week: Math.max(1, Math.round((weeks / modules.length) * (i + 1))),
      title: `Complete ${m.title}`,
    })),
    portfolioProofs: [
      fillTemplate(entry.evolvingProject.description, variables),
      `Technical/case-study presentation for ${field}`,
      `Job-search portfolio and interview narrative for ${field}`,
    ],
    mentorTouchpoints: Array.from({ length: Math.floor(weeks / 2) }, (_, i) => (i + 1) * 2),
    evolvingProject: {
      title: fillTemplate(entry.evolvingProject.title, variables),
      description: fillTemplate(entry.evolvingProject.description, variables),
      stages: modules.map((m) => ({ moduleTitle: m.title, deliverable: m.deliverable })),
    },
    modules,
  };
}

function deriveArchetype(field) {
  const f = String(field).toLowerCase();
  if (['ux', 'ui', 'design', 'graphic', 'product design'].some((k) => f.includes(k))) return 'B';
  if (['product', 'marketing', 'business', 'strategy', 'operations', 'growth'].some((k) => f.includes(k))) return 'C';
  if (['research', 'science', 'academic', 'biology', 'physics'].some((k) => f.includes(k))) return 'D';
  if (['electrician', 'hvac', 'welding', 'plumbing', 'trade', 'construction'].some((k) => f.includes(k))) return 'E';
  return 'A';
}

function archetypeLabel(field) {
  const map = {
    A: 'Technical Career',
    B: 'Creative/Design Career',
    C: 'Business/Strategy Career',
    D: 'Research/Academic Career',
    E: 'Trade/Practical Career',
  };
  return map[deriveArchetype(field)] || map.A;
}

export default { buildSyllabus };
