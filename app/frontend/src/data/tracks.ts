import { CohortTrack } from '../types.js';

export const COHORT_TRACKS: CohortTrack[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    subtitle: "Experiential Lab #14",
    description: "Build robust, state-of-the-art client environments using React 19, TypeScript, and Tailwind v4. Ship real code solutions for active project briefs.",
    duration: "8 wks full-time / 16 wks part-time",
    salaryUplift: "$95,000/yr",
    placementRate: "93% placement",
    difficulty: "Beginner Friendly",
    skills: ["React 19", "TypeScript", "Tailwind v4", "State Managers", "Next.js APIs"],
    projects: ["CarbonHQ Telemetry Widget", "Dynamic Job Assessment Grid"],
    color: "from-cyan-500 to-indigo-600"
  },
  {
    id: "design",
    title: "UI/UX Product Design",
    subtitle: "Experiential Lab #12",
    description: "Master high-fidelity wireframing, interactive prototype workflows, typography hierarchies, and cohesive Figma style system structures.",
    duration: "8 wks full-time / 16 wks part-time",
    salaryUplift: "$88,000/yr",
    placementRate: "91% placement",
    difficulty: "Beginner Friendly",
    skills: ["Figma Systems", "Interaction Design", "User Testing", "Design Systems", "Prototyping"],
    projects: ["CarbonHQ Admin Design Specs", "EcoSync Mobile Dashboard Design"],
    color: "from-rose-500 to-indigo-500"
  },
  {
    id: "product",
    title: "Product Management",
    subtitle: "Experiential Lab #8",
    description: "Lead agile sprint teams, write rigorous Product Requirement Briefs, coordinate user validation matrices, and direct backlog prioritization.",
    duration: "8 wks full-time / 16 wks part-time",
    salaryUplift: "$105,000/yr",
    placementRate: "94% placement",
    difficulty: "Intermediate",
    skills: ["Sprint Management", "PRB Drafting", "User Personas", "Agile Sprints", "Product Metrics"],
    projects: ["EcoSync Sprint Scope Documentation", "Stripe Checkout Brief Specs"],
    color: "from-indigo-600 to-rose-600"
  },
  {
    id: "analytics",
    title: "Data Analytics",
    subtitle: "Experiential Lab #10",
    description: "Optimize high-frequency database query structures, map interactive telemetry visualizers with D3.js, and compile diagnostic reports.",
    duration: "8 wks full-time / 16 wks part-time",
    salaryUplift: "$92,000/yr",
    placementRate: "92% placement",
    difficulty: "Challenging",
    skills: ["SQL Pipelines", "D3.js Layouts", "Telemetry Audits", "Database Schema", "Analytics Reporting"],
    projects: ["CarbonHQ Energy Grid Analytics Audit", "User Journey Funnel Analysis"],
    color: "from-amber-500 to-rose-500"
  }
];
