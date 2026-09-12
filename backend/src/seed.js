import 'dotenv/config';
import { db } from './db/index.js';
import {
  careers,
  tracks,
  lessons,
  internshipBriefs,
  contentSections,
  mentors,
  communityEvents,
  studyRooms,
} from './db/schema.js';
import { v4 as uuidv4 } from 'uuid';

const now = new Date().toISOString();

const careerData = [
  {
    id: 'product-management',
    title: 'Product Management',
    description: 'Learn to discover problems, define solutions, and ship products users love.',
    difficulty: 'Intermediate',
    category: 'Product & Strategy',
    image: '/images/catalog-01.jpg',
    extensions: ['Growth PM', 'AI Product Manager', 'B2B SaaS PM'],
    skills: ['User Research', 'Roadmapping', 'Prioritization', 'Metrics', 'Stakeholder Communication'],
    aiLearning: ['Simulate product decisions', 'Generate PRDs + critique them', 'Run mock user interviews (AI personas)'],
    roles: ['Associate PM', 'Product Manager', 'Growth PM', 'AI PM'],
  },
  {
    id: 'ux-ui-design',
    title: 'UX/UI Design',
    description: 'Design intuitive interfaces and experiences that solve real user problems.',
    difficulty: 'Beginner',
    category: 'Design & Creative',
    image: '/images/catalog-02.jpg',
    extensions: ['Mobile Design', 'Design Systems', 'UX Research'],
    skills: ['Wireframing', 'Prototyping', 'Figma', 'User Research', 'Visual Design'],
    aiLearning: ['UI critique', 'Generate wireframes from prompts', 'Usability testing simulations'],
    roles: ['UI Designer', 'UX Designer', 'Product Designer', 'UX Researcher'],
  },
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    description: 'Build fast, accessible, and beautiful web interfaces.',
    difficulty: 'Beginner',
    category: 'Technology & Engineering',
    image: '/images/catalog-03.jpg',
    extensions: ['React Specialist', 'Web Performance', 'Design Engineering'],
    skills: ['HTML/CSS/JavaScript', 'React', 'Responsive Design', 'Git', 'Accessibility'],
    aiLearning: ['Code explanations', 'Debugging assistant', 'Build projects step-by-step'],
    roles: ['Frontend Developer', 'React Developer', 'UI Engineer', 'Design Engineer'],
  },
  {
    id: 'backend-development',
    title: 'Backend Development',
    description: 'Design and build the APIs, databases, and services that power applications.',
    difficulty: 'Intermediate',
    category: 'Technology & Engineering',
    image: '/images/catalog-04.jpg',
    extensions: ['API Engineering', 'Microservices', 'Cloud Backend'],
    skills: ['Node.js / Python', 'Databases', 'REST / GraphQL', 'Authentication', 'System Design'],
    aiLearning: ['Architecture suggestions', 'Code reviews', 'System design walkthroughs'],
    roles: ['Backend Developer', 'API Engineer', 'Cloud Engineer', 'System Architect'],
  },
  {
    id: 'full-stack-development',
    title: 'Full-Stack Development',
    description: 'Ship complete applications from database to user interface.',
    difficulty: 'Intermediate',
    category: 'Technology & Engineering',
    image: '/images/catalog-05.jpg',
    extensions: ['SaaS Builder', 'Startup MVP Engineer', 'AI-integrated apps'],
    skills: ['Frontend + Backend', 'Databases', 'Deployment', 'APIs', 'Authentication'],
    aiLearning: ['Build full apps with guidance', 'AI pair programming', 'Deployment walkthroughs'],
    roles: ['Full-Stack Developer', 'SaaS Engineer', 'MVP Engineer', 'Indie Hacker'],
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Turn raw data into actionable business insights.',
    difficulty: 'Beginner',
    category: 'Data & AI',
    image: '/images/catalog-06.jpg',
    extensions: ['Business Analytics', 'Marketing Analytics', 'SQL Specialist'],
    skills: ['SQL', 'Excel / Sheets', 'Data Visualization', 'Statistics', 'Storytelling'],
    aiLearning: ['Query generation + explanation', 'Dataset analysis', 'Insight storytelling'],
    roles: ['Data Analyst', 'Business Analyst', 'Marketing Analyst', 'SQL Specialist'],
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Use statistics and machine learning to predict outcomes and solve problems.',
    difficulty: 'Advanced',
    category: 'Data & AI',
    image: '/images/catalog-07.jpg',
    extensions: ['Machine Learning', 'Predictive Modeling', 'AI Research Basics'],
    skills: ['Python', 'Statistics', 'Machine Learning', 'Data Cleaning', 'Experimentation'],
    aiLearning: ['Model explanations', 'Code generation (Python)', 'Visualization support'],
    roles: ['Data Scientist', 'ML Engineer', 'Research Analyst', 'Predictive Modeler'],
  },
  {
    id: 'ai-ml-engineering',
    title: 'AI / Machine Learning Engineering',
    description: 'Build and deploy AI-powered applications and systems.',
    difficulty: 'Advanced',
    category: 'Data & AI',
    image: '/images/catalog-08.jpg',
    extensions: ['LLM Apps', 'Computer Vision', 'NLP Systems'],
    skills: ['Python', 'LLMs', 'Prompt Engineering', 'Model APIs', 'Vector Databases'],
    aiLearning: ['Build AI apps', 'Prompt engineering', 'Model tuning simulations'],
    roles: ['AI Engineer', 'ML Engineer', 'LLM Specialist', 'NLP Engineer'],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Grow brands and products through online channels.',
    difficulty: 'Beginner',
    category: 'Marketing & Content',
    image: '/images/catalog-09.jpg',
    extensions: ['Performance Marketing', 'SEO Specialist', 'Social Media Growth'],
    skills: ['SEO', 'Content Strategy', 'Paid Ads', 'Analytics', 'Email Marketing'],
    aiLearning: ['Campaign generation', 'Ad copy testing', 'SEO audits'],
    roles: ['Digital Marketer', 'Growth Marketer', 'SEO Specialist', 'Content Strategist'],
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    description: 'Create compelling content that builds audience and authority.',
    difficulty: 'Beginner',
    category: 'Marketing & Content',
    image: '/images/catalog-10.jpg',
    extensions: ['YouTube Creator', 'Blogging', 'Personal Branding'],
    skills: ['Scriptwriting', 'Storytelling', 'Video Editing Basics', 'Audience Growth', 'Branding'],
    aiLearning: ['Script writing', 'Content ideation', 'Feedback on tone + clarity'],
    roles: ['Content Creator', 'YouTuber', 'Blogger', 'Brand Storyteller'],
  },
  {
    id: 'copywriting',
    title: 'Copywriting',
    description: 'Write persuasive copy that drives action and conversions.',
    difficulty: 'Beginner',
    category: 'Marketing & Content',
    image: '/images/catalog-11.jpg',
    extensions: ['Sales Copy', 'Email Marketing', 'Landing Pages'],
    skills: ['Persuasion', 'Headlines', 'Email Copy', 'Landing Pages', 'A/B Testing'],
    aiLearning: ['Rewrite + optimize copy', 'A/B testing simulation', 'Persuasion feedback'],
    roles: ['Copywriter', 'Conversion Copywriter', 'Email Specialist', 'Landing Page Writer'],
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Create visual assets that communicate ideas and build brands.',
    difficulty: 'Beginner',
    category: 'Design & Creative',
    image: '/images/catalog-12.jpg',
    extensions: ['Brand Identity', 'Social Media Design', 'Visual Storytelling'],
    skills: ['Typography', 'Color Theory', 'Layout', 'Adobe / Figma', 'Branding'],
    aiLearning: ['Design critique', 'Generate variations', 'Layout suggestions'],
    roles: ['Graphic Designer', 'Brand Designer', 'Social Media Designer', 'Visual Designer'],
  },
  {
    id: 'motion-design',
    title: 'Motion Design / Video Editing',
    description: 'Bring stories to life through video and animation.',
    difficulty: 'Intermediate',
    category: 'Design & Creative',
    image: '/images/catalog-13.jpg',
    extensions: ['YouTube Editing', 'Short-form Content', 'Animation'],
    skills: ['Editing Software', 'Motion Graphics', 'Storyboarding', 'Color Grading', 'Pacing'],
    aiLearning: ['Storyboarding', 'Editing feedback', 'Script-to-video workflows'],
    roles: ['Video Editor', 'Motion Designer', 'YouTube Editor', 'Short-form Creator'],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protect systems, networks, and data from threats.',
    difficulty: 'Advanced',
    category: 'Technology & Engineering',
    image: '/images/catalog-14.jpg',
    extensions: ['Ethical Hacking', 'Security Analysis', 'Network Security'],
    skills: ['Networking', 'Risk Assessment', 'Threat Analysis', 'Linux', 'Security Tools'],
    aiLearning: ['Threat simulations', 'Scenario-based challenges', 'Security audits'],
    roles: ['Security Analyst', 'Ethical Hacker', 'SOC Analyst', 'Network Security Engineer'],
  },
  {
    id: 'cloud-engineering',
    title: 'Cloud Engineering',
    description: 'Design, deploy, and manage cloud infrastructure at scale.',
    difficulty: 'Intermediate',
    category: 'Technology & Engineering',
    image: '/images/catalog-15.jpg',
    extensions: ['AWS Specialist', 'DevOps', 'Infrastructure Automation'],
    skills: ['AWS / Azure / GCP', 'Networking', 'IaC', 'Containers', 'Monitoring'],
    aiLearning: ['Architecture diagrams', 'Deployment simulations', 'Troubleshooting'],
    roles: ['Cloud Engineer', 'AWS Specialist', 'DevOps Engineer', 'SRE'],
  },
  {
    id: 'devops-engineering',
    title: 'DevOps Engineering',
    description: 'Automate delivery pipelines and infrastructure for fast, reliable software.',
    difficulty: 'Intermediate',
    category: 'Technology & Engineering',
    image: '/images/catalog-16.jpg',
    extensions: ['CI/CD Pipelines', 'Kubernetes', 'Automation'],
    skills: ['CI/CD', 'Docker', 'Kubernetes', 'Scripting', 'Monitoring'],
    aiLearning: ['Pipeline creation', 'Debugging workflows', 'System optimization'],
    roles: ['DevOps Engineer', 'Platform Engineer', 'Release Engineer', 'SRE'],
  },
  {
    id: 'qa-testing',
    title: 'QA / Software Testing',
    description: 'Ensure software quality through manual and automated testing.',
    difficulty: 'Beginner',
    category: 'Technology & Engineering',
    image: '/images/catalog-17.jpg',
    extensions: ['Automation Testing', 'Manual QA', 'Performance Testing'],
    skills: ['Test Cases', 'Selenium / Cypress', 'Bug Reporting', 'API Testing', 'Regression'],
    aiLearning: ['Test case generation', 'Bug simulation', 'Review reports'],
    roles: ['QA Engineer', 'Automation Tester', 'Manual Tester', 'SDET'],
  },
  {
    id: 'technical-writing',
    title: 'Technical Writing',
    description: 'Create clear documentation that helps users and developers succeed.',
    difficulty: 'Beginner',
    category: 'People & Operations',
    image: '/images/catalog-18.jpg',
    extensions: ['API Documentation', 'Product Docs', 'Developer Guides'],
    skills: ['Writing', 'Information Architecture', 'Markdown', 'APIs', 'Audience Analysis'],
    aiLearning: ['Writing feedback', 'Simplification of complex topics', 'Documentation structuring'],
    roles: ['Technical Writer', 'Documentation Specialist', 'API Writer', 'Content Engineer'],
  },
  {
    id: 'tech-sales',
    title: 'Sales (Tech / SaaS)',
    description: 'Sell technology products and solutions to businesses.',
    difficulty: 'Beginner',
    category: 'People & Operations',
    image: '/images/catalog-19.jpg',
    extensions: ['SDR (Sales Dev Rep)', 'Account Executive', 'Enterprise Sales'],
    skills: ['Prospecting', 'Discovery', 'Objection Handling', 'CRM', 'Negotiation'],
    aiLearning: ['Roleplay conversations', 'Objection handling', 'Pitch feedback'],
    roles: ['SDR', 'Account Executive', 'Sales Rep', 'Enterprise Sales'],
  },
  {
    id: 'customer-success',
    title: 'Customer Success',
    description: 'Help customers achieve their goals and stay loyal.',
    difficulty: 'Beginner',
    category: 'People & Operations',
    image: '/images/catalog-20.jpg',
    extensions: ['Onboarding Specialist', 'Retention Strategy', 'Support Systems'],
    skills: ['Relationship Building', 'Onboarding', 'Retention', 'Problem Solving', 'CRM'],
    aiLearning: ['Scenario simulations', 'Communication feedback', 'Problem-solving exercises'],
    roles: ['Customer Success Manager', 'Onboarding Specialist', 'Retention Manager', 'Support Lead'],
  },
  {
    id: 'business-operations',
    title: 'Business Operations',
    description: 'Design processes and systems that help companies run smoothly.',
    difficulty: 'Beginner',
    category: 'Product & Strategy',
    image: '/images/course-1.jpg',
    extensions: ['Startup Ops', 'Process Design', 'Strategy Execution'],
    skills: ['Process Mapping', 'Data Analysis', 'Project Management', 'Tools', 'Strategy'],
    aiLearning: ['Case studies', 'Decision simulations', 'Workflow optimization'],
    roles: ['Business Operations Analyst', 'Ops Manager', 'Strategy Associate', 'Chief of Staff'],
  },
  {
    id: 'finance-analysis',
    title: 'Finance & Financial Analysis',
    description: 'Analyze financial data to support decisions and growth.',
    difficulty: 'Intermediate',
    category: 'People & Operations',
    image: '/images/course-2.jpg',
    extensions: ['Startup Finance', 'Investment Analysis', 'Budgeting'],
    skills: ['Financial Modeling', 'Excel', 'Accounting Basics', 'Forecasting', 'Metrics'],
    aiLearning: ['Financial modeling', 'Scenario projections', 'Report feedback'],
    roles: ['Financial Analyst', 'Startup Finance Lead', 'Investment Analyst', 'Budget Analyst'],
  },
  {
    id: 'hr-talent',
    title: 'HR / Talent Acquisition',
    description: 'Attract, hire, and retain great people.',
    difficulty: 'Beginner',
    category: 'People & Operations',
    image: '/images/course-3.jpg',
    extensions: ['Tech Recruiting', 'Employer Branding', 'Talent Strategy'],
    skills: ['Sourcing', 'Interviewing', 'Employer Branding', 'HR Tools', 'Compliance'],
    aiLearning: ['Interview simulations', 'Resume screening', 'Hiring strategy design'],
    roles: ['Recruiter', 'Talent Acquisition Specialist', 'HR Generalist', 'People Ops'],
  },
  {
    id: 'entrepreneurship',
    title: 'Entrepreneurship / Startup Builder',
    description: 'Turn ideas into viable businesses and launch them.',
    difficulty: 'Intermediate',
    category: 'Product & Strategy',
    image: '/images/camera-photography-design-studio-editing-concept_53876-42954.jpg.jpeg',
    extensions: ['Solo Founder', 'MVP Launch', 'Growth Strategy'],
    skills: ['Idea Validation', 'Business Modeling', 'MVP Building', 'Growth', 'Pitching'],
    aiLearning: ['Idea validation', 'Business model critique', 'Launch planning'],
    roles: ['Founder', 'Co-Founder', 'Startup Operator', 'Product Founder'],
  },
  {
    id: 'no-code',
    title: 'No-Code / Low-Code Builder',
    description: 'Build apps, workflows, and tools without traditional coding.',
    difficulty: 'Beginner',
    category: 'Technology & Engineering',
    image: '/images/digital-tablet-photography-design-studio-editing-concept_53876-146880.jpg.jpeg',
    extensions: ['Web Apps (Bubble, Webflow)', 'Automation (Zapier)', 'Internal Tools'],
    skills: ['Bubble / Webflow', 'Zapier / Make', 'Database Design', 'UI Design', 'Automation'],
    aiLearning: ['Build workflows', 'Automate tasks', 'Debug logic'],
    roles: ['No-Code Developer', 'Automation Specialist', 'Citizen Developer', 'Internal Tools Builder'],
  },
];

const trackData = [
  {
    id: 'track-career-starter',
    title: 'Career Starter',
    description: 'A clear starting point with direction, structure, and confidence for people entering the workforce.',
    category: 'Foundation',
    difficulty: 'Beginner',
    duration: '12 weeks',
    image: '/images/course-1.jpg',
  },
  {
    id: 'track-level-up',
    title: 'Level Up',
    description: 'A faster path to stronger skills, better roles, and better proof for professionals ready to grow.',
    category: 'Growth',
    difficulty: 'Intermediate',
    duration: '8 weeks',
    image: '/images/course-2.jpg',
  },
  {
    id: 'track-experience',
    title: 'Experience Track',
    description: 'Work-like experience, feedback, and portfolio-ready output through internship-style briefs.',
    category: 'Experience',
    difficulty: 'Intermediate',
    duration: '10 weeks',
    image: '/images/course-3.jpg',
  },
];

const lessonData = [
  { id: 'lesson-1', trackId: 'track-career-starter', title: 'Understanding Your Career Path', description: 'Map your interests and strengths to potential career directions.', type: 'lesson', duration: '15 min', order: 1 },
  { id: 'lesson-2', trackId: 'track-career-starter', title: 'Building a Learning Habit', description: 'Create sustainable daily learning routines that stick.', type: 'lesson', duration: '12 min', order: 2 },
  { id: 'lesson-3', trackId: 'track-career-starter', title: 'Cohortia-Powered Practice Quiz', description: 'Test your foundational knowledge with Cohortia guidance.', type: 'quiz', duration: '10 min', order: 3 },
  { id: 'lesson-4', trackId: 'track-career-starter', title: 'Portfolio Project Brief', description: 'Your first guided project that becomes portfolio proof.', type: 'project', duration: '30 min', order: 4 },
  { id: 'lesson-5', trackId: 'track-level-up', title: 'Advanced Skill Assessment', description: 'Identify gaps and set precise improvement targets.', type: 'lesson', duration: '20 min', order: 1 },
  { id: 'lesson-6', trackId: 'track-level-up', title: 'Peer Review Workshop', description: 'Learn to give and receive constructive feedback.', type: 'lesson', duration: '25 min', order: 2 },
  { id: 'lesson-7', trackId: 'track-level-up', title: 'Interview Prep Simulation', description: 'Practice interviews with Cohortia feedback and scoring.', type: 'quiz', duration: '15 min', order: 3 },
  { id: 'lesson-8', trackId: 'track-level-up', title: 'Career-Focused Capstone', description: 'A comprehensive project that showcases your growth.', type: 'project', duration: '45 min', order: 4 },
  { id: 'lesson-9', trackId: 'track-experience', title: 'Reading a Real Brief', description: 'Learn to dissect professional project briefs like a pro.', type: 'lesson', duration: '18 min', order: 1 },
  { id: 'lesson-10', trackId: 'track-experience', title: 'Milestone Planning', description: 'Break large projects into manageable deliverables.', type: 'lesson', duration: '22 min', order: 2 },
  { id: 'lesson-11', trackId: 'track-experience', title: 'Deliverable Quality Check', description: 'Self-assess your work before submission.', type: 'quiz', duration: '12 min', order: 3 },
  { id: 'lesson-12', trackId: 'track-experience', title: 'Real-World Brief Submission', description: 'Complete your first internship-style brief with mentor review.', type: 'project', duration: '60 min', order: 4 },
];

const communityEventData = [
  {
    id: 'event-career-panel',
    title: 'Career Switcher Panel: From Zero to First Role',
    description: 'Hear from learners who landed their first role after switching careers. Bring your questions.',
    host: 'Cohortia Community Team',
    date: '2026-08-05',
    time: '18:00 UTC',
    location: 'Online',
    roomLink: 'https://meet.cohortia.io/career-panel',
    category: 'Career',
    maxAttendees: 100,
  },
  {
    id: 'event-react-study',
    title: 'React Study Jam: Build a Mini Dashboard',
    description: 'A hands-on group session where we build a React dashboard together. Beginners welcome.',
    host: 'Frontend Mentors',
    date: '2026-07-22',
    time: '17:00 UTC',
    location: 'Online',
    roomLink: 'https://meet.cohortia.io/react-study',
    category: 'Engineering',
    maxAttendees: 50,
  },
  {
    id: 'event-product-discovery',
    title: 'Product Discovery Workshop',
    description: 'Practice user interviewing and problem framing in small breakout groups.',
    host: 'Product Mentors',
    date: '2026-08-12',
    time: '19:00 UTC',
    location: 'Online',
    roomLink: 'https://meet.cohortia.io/product-discovery',
    category: 'Product',
    maxAttendees: 40,
  },
];

const studyRoomData = [
  {
    id: 'room-frontend-focus',
    name: 'Frontend Focus Room',
    description: 'Daily co-working room for frontend learners working on React, CSS, and portfolio projects.',
    category: 'Engineering',
    topic: 'Frontend Development',
    maxParticipants: 20,
  },
  {
    id: 'room-data-study',
    name: 'Data & SQL Study Room',
    description: 'Work through SQL challenges and data exercises together.',
    category: 'Data',
    topic: 'SQL & Data Analytics',
    maxParticipants: 15,
  },
  {
    id: 'room-product-cowork',
    name: 'Product Management Cowork',
    description: 'Quiet co-working space for PM learners building case studies and portfolios.',
    category: 'Product',
    topic: 'Product Management',
    maxParticipants: 12,
  },
];

const briefData = [
  {
    id: 'brief-1',
    title: 'Build a Landing Page for a Product',
    description: 'Create a responsive landing page for a fictional SaaS product. Include hero section, features, pricing, and CTA.',
    deadline: '7 days',
    deliverable: 'Live page + source code (GitHub)',
    skills: ['HTML/CSS', 'Responsive Design', 'Copywriting'],
    difficulty: 'Beginner',
  },
  {
    id: 'brief-2',
    title: 'Design a Mobile App Onboarding Flow',
    description: 'Design 5 screens for a fitness app onboarding experience. Focus on user psychology and smooth transitions.',
    deadline: '5 days',
    deliverable: 'Figma file + prototype link',
    skills: ['UI Design', 'Prototyping', 'User Psychology'],
    difficulty: 'Beginner',
  },
  {
    id: 'brief-3',
    title: 'Analyze Customer Churn Data',
    description: 'Given a dataset of customer behavior, identify churn indicators and build a dashboard showing key insights.',
    deadline: '10 days',
    deliverable: 'Analysis report + interactive dashboard',
    skills: ['SQL', 'Data Visualization', 'Statistical Analysis'],
    difficulty: 'Intermediate',
  },
  {
    id: 'brief-4',
    title: 'Write a Product Launch Email Sequence',
    description: 'Create a 5-email sequence for a new product launch. Each email should have a clear purpose and CTA.',
    deadline: '4 days',
    deliverable: 'Email copy + strategy brief',
    skills: ['Copywriting', 'Email Marketing', 'Strategy'],
    difficulty: 'Beginner',
  },
  {
    id: 'brief-5',
    title: 'Build a REST API for a Task Manager',
    description: 'Create a full REST API with CRUD operations for a task management app. Include authentication.',
    deadline: '14 days',
    deliverable: 'API documentation + deployed endpoint',
    skills: ['Node.js', 'REST APIs', 'Authentication', 'Database Design'],
    difficulty: 'Intermediate',
  },
  {
    id: 'brief-6',
    title: 'Create a Social Media Content Calendar',
    description: 'Plan a 30-day content calendar for a tech startup. Include post ideas, captions, and visual concepts.',
    deadline: '5 days',
    deliverable: 'Content calendar + sample posts',
    skills: ['Content Strategy', 'Social Media', 'Copywriting'],
    difficulty: 'Beginner',
  },
];

const contentSectionsData = [
  {
    section: 'home-hero',
    title: 'Home Hero',
    data: {
      eyebrow: 'YOUR GROWTH STARTS HERE',
      headline: 'Build Skills. Gain Experience. Move Forward.',
      subheadline: 'Cohortia is a guided career-growth platform where you learn with a community, get Cohortia mentorship, experience real-world work, and build proof of progress.',
      primaryCta: { label: 'Enrol Now', action: 'open-wizard' },
      secondaryCta: { label: 'Explore Careers', action: 'scroll-to-experience' },
      badges: ['Cohort #14 launching soon', 'Verified Client Briefs'],
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&fit=crop&q=80',
    },
  },
  {
    section: 'about-team',
    title: 'About Cohortia',
    data: {
      header: {
        eyebrow: 'WHO WE ARE',
        headline: 'We are redefining professional career preparation.',
        description: 'Cohortia was born out of a simple, urgent observation: traditional courses leave learners high and dry with zero practical proof. We built an experiential workspace where your credentials are earned by doing real-world work.',
      },
      tabs: {
        mission: {
          label: 'Our Strategic Mission',
          headline: 'To empower talented individuals with the hands-on proof needed to command industry respect.',
          body: 'Traditional education focuses on memorization and certificate collection. Cohortia replaces this stale method with adaptive simulator frameworks, direct mentoring telemetry, and verified project milestones. We aim to help every graduate build an undeniable, high-contrast, peer-reviewed portfolio of client integrations.',
        },
        values: {
          label: 'Our Core Beliefs',
          headline: 'Radical clarity, cooperative growth, and continuous shipping.',
          body: 'We believe that professional growth is a team sport. By learning in synchronized cohorts, solving real challenges with live constraints, and receiving genuine engineering critiques, our students build durable instincts that prepare them to excel in modern high-performance work cultures.',
        },
        story: {
          label: 'The Vision Forward',
          headline: 'Transitioning credentials from static PDFs to live, verifiable code and assets.',
          body: 'Our long-term blueprint involves linking every cohort step directly to active developer profiles. Hiring partners can view active students\' code metrics, responsive wireframe reviews, and direct team alignment ratings. This level of transparency makes recruitment reliable, fast, and entirely evidence-based.',
        },
      },
      valuesGrid: [
        {
          icon: 'Users',
          title: 'Shared Cohorts',
          description: 'No more solitary learning in isolated online courses. Achieve career alignment alongside peers who motivate, review, and collaborate with you.',
          color: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
        },
        {
          icon: 'Target',
          title: 'Experiential Proof',
          description: 'Replace passive multiple-choice quizzes with real client briefs from companies like CarbonHQ and EcoSync, creating high-trust portfolios.',
          color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
        },
        {
          icon: 'ShieldCheck',
          title: 'Direct Coaching',
          description: 'Get active mentorship and direct, constructive reviews from industry leaders who guide your design choices, codebase hygiene, and system architecture.',
          color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
        },
      ],
      team: [
        {
          name: 'Chinedu Okeke',
          role: 'Lead Tech & Engineering Coach',
          bio: 'Ex-Staff Engineer with 12+ years of full-stack architecture. Chinedu believes that the best engineers are built through shipping client briefs, not passing generic bootcamps.',
          initials: 'CO',
          color: 'from-blue-500 to-indigo-500',
        },
        {
          name: 'Amina Bello',
          role: 'Lead UI/UX & Design Advisor',
          bio: 'Award-winning product designer dedicated to helping new talent craft polished, responsive layouts. Amina leads the career alignment review committees.',
          initials: 'AB',
          color: 'from-orange-500 to-amber-500',
        },
        {
          name: 'Babajide Adebayo',
          role: 'Head of Industry Partnerships',
          bio: 'Connects the Cohortia student portfolio network with top startups and global corporate hiring partners. Babajide coordinates our weekly capstone brief integrations.',
          initials: 'BA',
          color: 'from-emerald-500 to-teal-500',
        },
      ],
    },
  },
  {
    section: 'success-stories',
    title: 'Success Stories',
    data: {
      header: {
        eyebrow: 'Real Progress',
        headline: 'Success Stories',
        description: 'Before-and-after snapshots of learners who stayed consistent.',
      },
      stories: [
        {
          id: 'aarav',
          name: 'Chinedu Nwachukwu',
          role: 'Frontend Engineer',
          company: 'Vanta',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&fit=crop&q=80',
          streak: '82-Day Streak',
          score: '9.8 Avg Score',
          briefs: 14,
          before: {
            status: 'Theory-heavy student',
            skills: ['Basic HTML/JS', 'Theoretical React', 'No git experience'],
            painPoint: 'Overwhelmed by abstract tutorials, zero portfolio, couldn\'t get pass resume filters.',
          },
          after: {
            status: 'Frontend Engineer @ Vanta',
            skills: ['React SVG scale', 'Tailwind v4', 'Agile Sprints', 'Client-facing logic'],
            result: 'Created and delivered the CarbonHQ solar telemetry dashboard. Landed a $95,000/yr starting offer.',
          },
          testimonial: 'The cohort sprints felt exactly like my current engineering role. Actually submitting work to a real reviewer completely changed my career trajectory.',
        },
        {
          id: 'chloe',
          name: 'Chioma Adebayo',
          role: 'Product Designer',
          company: 'Stripe',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&fit=crop&q=80',
          streak: '105 Days Active',
          score: '9.9 Avg Score',
          briefs: 8,
          before: {
            status: 'Traditional graphic designer',
            skills: ['InDesign', 'Basic Photoshop', 'No user metrics'],
            painPoint: 'Struggling to translate print design skills to digital products, lacked structured UX processes.',
          },
          after: {
            status: 'Product Designer @ Stripe',
            skills: ['Interactive Prototyping', 'Figma Design Systems', 'User Research Plans'],
            result: 'Designed complete CarbonHQ user flows and design briefs. Matched directly via Cohortia recruiter pool.',
          },
          testimonial: 'Cohortia bridges the gap. I wasn\'t just designing screens; I was defending my decisions to product leads and developers during daily sprints.',
        },
        {
          id: 'marcus',
          name: 'Babajide Oyetunji',
          role: 'Product Manager',
          company: 'Linear',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&fit=crop&q=80',
          streak: '12 Sprints Cleared',
          score: '9.7 Avg Score',
          briefs: 11,
          before: {
            status: 'Customer Support Lead',
            skills: ['Ticket resolution', 'Intercom', 'No product roadmaps'],
            painPoint: 'Felt pigeonholed in support. Wanted to build products but didn\'t know how to demonstrate strategy.',
          },
          after: {
            status: 'Associate PM @ Linear',
            skills: ['Product Roadmaps', 'Strategic Prioritization', 'Agile Sprint Leadership'],
            result: 'Led two collaborative cohort sprints. Wrote four verified PRDs and launched real widgets with developers.',
          },
          testimonial: 'Managing a team of volunteer designers and developers in Cohortia was the ultimate test. It gave me the hard evidence I needed for product interviews.',
        },
      ],
    },
  },
  {
    section: 'faqs',
    title: 'Frequently Asked Questions',
    data: {
      faqs: [
        {
          q: 'Do I need absolute coding or design experience to apply?',
          a: 'No! Our Foundation Track (Career Starter) is specifically structured with beginner-friendly explanations, small wins, and supportive mentorship. If you choose a more advanced track (like DevOps or AI Eng), we conduct brief skills assessments or suggest preparatory materials before launch.',
        },
        {
          q: 'How does the 14-day refund policy operate?',
          a: 'We offer a 100% full tuition refund guarantee up to 14 days after your cohort launch date. If you decide the pacing, platform, or collaborative structure isn\'t a fit for you, simply file a ticket. No questions asked, and zero processing fees.',
        },
        {
          q: 'Are the client briefs and internship tasks completely remote?',
          a: 'Yes! All cohort operations, mentor reviews, collaborative sprints, and developer workshops are 100% remote. Sprints operate asynchronously with standard daily milestones to match modern distributed tech environments.',
        },
        {
          q: 'What is the Cohort Placement Rate?',
          a: 'Over 91.5% of verified candidates who complete all 5 milestone sprint blocks find relevant high-paying offers in their field within 180 days of graduation. Placement pipelines directly hook your project reviews to recruiter databases at partner networks.',
        },
      ],
    },
  },
  {
    section: 'contact-details',
    title: 'Contact Details',
    data: {
      email: 'admissions@cohortia.com',
      phone: '+1 (415) 555-2391',
      address: 'Cohortia HQ Labs, 101 Mission St, San Francisco, California 94105',
      hours: 'Mon–Fri, 9:00 AM – 6:00 PM PST',
    },
  },
];

const mentorData = [
  {
    id: 'mentor-chinedu',
    name: 'Chinedu Okeke',
    role: 'Lead Tech & Engineering Coach',
    bio: 'Ex-Staff Engineer with 12+ years of full-stack architecture.',
    image: null,
  },
  {
    id: 'mentor-amina',
    name: 'Amina Bello',
    role: 'Lead UI/UX & Design Advisor',
    bio: 'Award-winning product designer dedicated to helping new talent craft polished, responsive layouts.',
    image: null,
  },
  {
    id: 'mentor-babajide',
    name: 'Babajide Adebayo',
    role: 'Head of Industry Partnerships',
    bio: 'Connects the Cohortia student portfolio network with top startups and global corporate hiring partners.',
    image: null,
  },
];

async function seed() {
  console.log('🌱 Seeding database...\n');

  // Insert careers
  for (const career of careerData) {
    await db.insert(careers).values({
      id: career.id,
      title: career.title,
      description: career.description,
      difficulty: career.difficulty,
      category: career.category,
      image: career.image,
      extensions: JSON.stringify(career.extensions),
      skills: JSON.stringify(career.skills),
      aiLearning: JSON.stringify(career.aiLearning),
      roles: JSON.stringify(career.roles),
      createdAt: now,
      updatedAt: now,
    });
  }
  console.log(`✅ Inserted ${careerData.length} careers`);

  // Insert tracks
  for (const track of trackData) {
    await db.insert(tracks).values({
      id: track.id,
      title: track.title,
      description: track.description,
      category: track.category,
      difficulty: track.difficulty,
      duration: track.duration,
      image: track.image,
      createdAt: now,
      updatedAt: now,
    });
  }
  console.log(`✅ Inserted ${trackData.length} tracks`);

  // Insert lessons
  for (const lesson of lessonData) {
    await db.insert(lessons).values({
      id: lesson.id,
      trackId: lesson.trackId,
      title: lesson.title,
      description: lesson.description,
      type: lesson.type,
      duration: lesson.duration,
      order: lesson.order,
      createdAt: now,
      updatedAt: now,
    });
  }
  console.log(`✅ Inserted ${lessonData.length} lessons`);

  // Insert internship briefs
  for (const brief of briefData) {
    await db.insert(internshipBriefs).values({
      id: brief.id,
      title: brief.title,
      description: brief.description,
      deadline: brief.deadline,
      deliverable: brief.deliverable,
      skills: JSON.stringify(brief.skills),
      difficulty: brief.difficulty,
      createdAt: now,
      updatedAt: now,
    });
  }
  console.log(`✅ Inserted ${briefData.length} internship briefs`);

  // Insert content sections
  for (const section of contentSectionsData) {
    await db.insert(contentSections).values({
      id: uuidv4(),
      section: section.section,
      title: section.title,
      data: JSON.stringify(section.data),
      createdAt: now,
      updatedAt: now,
    });
  }
  console.log(`✅ Inserted ${contentSectionsData.length} content sections`);

  // Insert mentors
  for (const mentor of mentorData) {
    await db.insert(mentors).values({
      id: mentor.id,
      name: mentor.name,
      role: mentor.role,
      bio: mentor.bio,
      image: mentor.image,
      createdAt: now,
      updatedAt: now,
    });
  }
  console.log(`✅ Inserted ${mentorData.length} mentors`);

  // Insert community events
  for (const event of communityEventData) {
    await db.insert(communityEvents).values({
      id: event.id,
      title: event.title,
      description: event.description,
      host: event.host || 'Cohortia Team',
      date: event.date,
      time: event.time,
      location: event.location || 'Online',
      roomLink: event.roomLink,
      category: event.category || 'career',
      maxAttendees: event.maxAttendees || null,
      rsvpCount: 0,
      createdAt: now,
      updatedAt: now,
    });
  }
  console.log(`✅ Inserted ${communityEventData.length} community events`);

  // Insert study rooms
  for (const room of studyRoomData) {
    await db.insert(studyRooms).values({
      id: room.id,
      name: room.name,
      description: room.description || '',
      category: room.category,
      topic: room.topic,
      hostUserId: null,
      activeParticipants: 0,
      maxParticipants: room.maxParticipants || 20,
      isActive: true,
      createdAt: now,
      updatedAt: now,
    });
  }
  console.log(`✅ Inserted ${studyRoomData.length} study rooms`);

  console.log('\n🎉 Seeding complete!');
  process.exit(0);
}

seed().catch((err) => {
  console.error('❌ Seeding failed:', err);
  process.exit(1);
});
