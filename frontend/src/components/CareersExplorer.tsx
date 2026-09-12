import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Sparkles, Heart, Database, Languages, Binary, Terminal, UserCheck, 
  Briefcase, Palette, Users, Globe, Cloud, ChevronRight, Award, Flame, TrendingUp
} from "lucide-react";

interface CareerCategory {
  id: string;
  name: string;
  icon: any;
  title: string;
  description: string;
  roles: string[];
  skills: string[];
  salary: string;
  demand: "Extremely High" | "High" | "Steady" | "Surging";
  projectExample: string;
  gradient: string;
}

const CAREER_CATEGORIES: CareerCategory[] = [
  {
    id: "ai",
    name: "AI",
    icon: Sparkles,
    title: "Artificial Intelligence & ML",
    description: "Build neural network architectures, configure model finetuning matrices, and build server-side LLM orchestrations using Gemini API.",
    roles: ["AI Integration Engineer", "Machine Learning Specialist", "Prompt Systems Architect"],
    skills: ["Gemini API", "PyTorch", "HuggingFace", "Vector Databases", "Prompt Tuning"],
    salary: "$130,000/yr",
    demand: "Extremely High",
    gradient: "from-purple-500 to-indigo-500",
    projectExample: "Gemini-authoritative Semantic Content Filter"
  },
  {
    id: "health",
    name: "Health",
    icon: Heart,
    title: "Healthcare Informatics",
    description: "Design patient telemetry systems, secure clinical health record integrations, and optimize digital diagnostic visualization tools.",
    roles: ["Clinical Systems Analyst", "Health Informatics Architect", "Biotech Software Associate"],
    skills: ["EHR Data Schema", "HIPAA Compliance Protocols", "HL7 Standards", "React Diagnostics"],
    salary: "$105,000/yr",
    gradient: "from-rose-500 to-pink-500",
    demand: "High",
    projectExample: "BioShield Live Diagnostic Telemetry Console"
  },
  {
    id: "data-science",
    name: "Data Science",
    icon: Database,
    title: "Data Science & Big Data",
    description: "Construct predictive pipeline matrices, run diagnostic mathematical audits, and map out responsive visual telemetry dashboards.",
    roles: ["Quantitative Risk Specialist", "Big Data Engineer", "Business Intelligence Lead"],
    skills: ["SQL Pipelines", "Pandas & Numpy", "D3.js Charts", "Tableau Systems", "Predictive Modeling"],
    salary: "$115,000/yr",
    gradient: "from-blue-600 to-indigo-600",
    demand: "Surging",
    projectExample: "CarbonHQ Energy Analytics Pipeline & Map"
  },
  {
    id: "language",
    name: "Language",
    icon: Languages,
    title: "Computational Linguistics",
    description: "Coordinate localization pipelines, construct cross-language translation matrices, and develop voice automated transcription systems.",
    roles: ["Localization System Lead", "Speech Processing Specialist", "Linguistic Engineer"],
    skills: ["NLP Corpora", "Google Cloud Speech APIs", "JSON Localization Matrices", "Python Text-Mining"],
    salary: "$92,000/yr",
    gradient: "from-sky-500 to-blue-500",
    demand: "Steady",
    projectExample: "Multilingual Localization Brief Audit"
  },
  {
    id: "maths-logic",
    name: "Maths & Logic",
    icon: Binary,
    title: "Mathematics & Cryptography",
    description: "Structure zero-knowledge cryptographic proof mechanics, design robust hashing routers, and analyze algorithm performance bounds.",
    roles: ["Cryptography Security Analyst", "Algorithm Performance Designer", "Systems Analyst"],
    skills: ["Zero-Knowledge Proofs", "Discrete Math Matrices", "Hashing Algorithms", "TypeScript Arithmetic"],
    salary: "$120,000/yr",
    gradient: "from-indigo-600 to-purple-600",
    demand: "High",
    projectExample: "Zero-Knowledge Cohort Verification Engine"
  },
  {
    id: "computer-science",
    name: "Computer Science",
    icon: Terminal,
    title: "Systems & Software Engineering",
    description: "Build robust backend architectures, configure high-throughput Docker/Go microservices, and optimize multi-threaded client routers.",
    roles: ["Distributed Systems Engineer", "Backend Specialist", "API Infrastructure Architect"],
    skills: ["Go / Rust Engines", "Docker & Kubernetes", "Multi-threading", "REST / gRPC Routers"],
    salary: "$125,000/yr",
    gradient: "from-emerald-600 to-teal-500",
    demand: "Extremely High",
    projectExample: "EcoSync Multi-threaded Server Telemetry Hub"
  },
  {
    id: "personal-dev",
    name: "Personal Development",
    icon: UserCheck,
    title: "EdTech & Instructional Design",
    description: "Build gamified learning progress layouts, design habit-forming telemetry logs, and structure custom career roadmap wizards.",
    roles: ["Instructional Software Designer", "Personal Development Coach", "EdTech Product Owner"],
    skills: ["Instructional Design Systems", "Gamification Rules", "Telemetry Logs", "UX Accessibility"],
    salary: "$88,000/yr",
    gradient: "from-amber-500 to-orange-500",
    demand: "Steady",
    projectExample: "Cohortia Daily Habit & Goal Accountability Tracker"
  },
  {
    id: "business",
    name: "Business",
    icon: Briefcase,
    title: "Fintech & Product Strategy",
    description: "Coordinate cross-functional Agile sprints, document rigorous Product Requirements (PRB), and monitor conversion analytics.",
    roles: ["Agile Product Lead", "Fintech Strategy Manager", "Revenue Operations Associate"],
    skills: ["Sprint Management", "PRB Drafting Specs", "Conversion Optimization", "ROI Analytics"],
    salary: "$110,000/yr",
    gradient: "from-violet-600 to-pink-500",
    demand: "High",
    projectExample: "Stripe Payment Portal Brief Specification"
  },
  {
    id: "art",
    name: "Art",
    icon: Palette,
    title: "Digital Art & Product Design",
    description: "Develop scalable layout design tokens, build Figma wireframe specs, and configure fluid entrance transition vectors.",
    roles: ["UX/UI Lead Designer", "Brand Systems Director", "Creative Front-End Artist"],
    skills: ["Figma Systems", "Interaction Design", "Typography Layouts", "Tailwind Animation"],
    salary: "$98,000/yr",
    gradient: "from-rose-500 to-orange-500",
    demand: "High",
    projectExample: "CarbonHQ Premium Design Specification Tokens"
  },
  {
    id: "social-science",
    name: "Social Science",
    icon: Users,
    title: "UX Research & Behavioral Sci.",
    description: "Analyze human-computer usability matrices, coordinate feedback survey diagnostics, and establish robust user personas.",
    roles: ["Senior UX Researcher", "Behavioral Analyst", "Usability Architect"],
    skills: ["Persona Modeling", "Usability Analytics", "User Interviews", "Diagnostic Research"],
    salary: "$94,000/yr",
    gradient: "from-teal-600 to-emerald-600",
    demand: "Steady",
    projectExample: "Global Student Engagement Usability Study"
  },
  {
    id: "physical-science",
    name: "Physical Science",
    icon: Globe,
    title: "Climate Tech & IoT Analytics",
    description: "Build solar grid tracking software, map IoT energy storage telemetry, and process geospatial environmental models.",
    roles: ["Climate Tech Developer", "IoT Telemetry Architect", "Physical Systems Associate"],
    skills: ["Environmental Models", "Geospatial Data", "IoT Sensors", "D3 Grid Mapping"],
    salary: "$108,000/yr",
    gradient: "from-blue-500 to-emerald-500",
    demand: "Surging",
    projectExample: "EcoSync Smart Renewable Grid Telemetry Engine"
  },
  {
    id: "it",
    name: "IT",
    icon: Cloud,
    title: "Cloud Infrastructure & DevOps",
    description: "Secure Cloud Run containers, manage persistent database schemas, configure SSL firewalls, and orchestrate server proxies.",
    roles: ["Cloud Platform Engineer", "DevOps & Security Specialist", "SRE Administrator"],
    skills: ["Terraform Scripts", "AWS / GCP Services", "Nginx Proxies", "Database Schemas", "Security Rules"],
    salary: "$118,000/yr",
    gradient: "from-indigo-500 to-sky-500",
    demand: "Extremely High",
    projectExample: "Secure GCP Containerized Port Routing"
  }
];

interface CareersExplorerProps {
  onOpenWizard?: () => void;
}

export default function CareersExplorer({ onOpenWizard }: CareersExplorerProps) {
  const navigate = useNavigate();
  const [selectedCat, setSelectedCat] = useState<CareerCategory>(CAREER_CATEGORIES[0]);

  return (
    <section id="careers-explorer" className="py-12 bg-immersive-bg relative border-t border-immersive-border/20">
      
      {/* Background Watermark App Logo style */}
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-immersive-primary/3 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-immersive-secondary/3 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6 text-left">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold text-[#FF4B3E] bg-[#FF4B3E]/10 border border-[#FF4B3E]/20 px-3.5 py-1 rounded-full uppercase tracking-widest inline-flex items-center space-x-1.5 animate-pulse">
            <Award className="w-3.5 h-3.5" />
            <span>DISCOVER YOUR VOCATION</span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-sans font-extrabold text-immersive-text-primary tracking-tight">
            Explore Careers
          </h2>
          <p className="text-lg text-immersive-text-secondary">
            Cohortia organizes all curriculum and client portfolios under 12 strategic fields. Click any category below to inspect active roles, core skill sets, average starting salaries, and sample student project briefs.
          </p>
        </div>

        {/* Mobile Dropdown Selector */}
        <div className="block md:hidden mb-6">
          <label htmlFor="career-dropdown" className="text-xs font-mono font-bold text-immersive-secondary uppercase tracking-wider block mb-2">
            Select Career Category:
          </label>
          <select
            id="career-dropdown"
            value={selectedCat.id}
            onChange={(e) => {
              const found = CAREER_CATEGORIES.find(c => c.id === e.target.value);
              if (found) setSelectedCat(found);
            }}
            className="w-full bg-immersive-card border border-immersive-border text-immersive-text-primary text-sm font-bold rounded-xl px-4 py-3 outline-none focus:border-immersive-secondary transition duration-200"
          >
            {CAREER_CATEGORIES.map((cat) => (
              <option key={cat.id} value={cat.id} className="bg-immersive-bg text-immersive-text-primary">
                {cat.name} — {cat.title}
              </option>
            ))}
          </select>
        </div>

        {/* 12 Category Tab Selector Grid (Hidden on mobile, grid on md+) */}
        <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
          {CAREER_CATEGORIES.map((cat) => {
            const isSelected = selectedCat.id === cat.id;
            const IconComponent = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat)}
                className={`p-3.5 rounded-2xl border text-center transition-all duration-300 flex flex-col items-center justify-center space-y-2 cursor-pointer relative overflow-hidden group ${
                  isSelected
                    ? "border-immersive-secondary bg-immersive-card text-immersive-text-primary shadow-[0_0_20px_var(--immersive-shadow)]"
                    : "border-immersive-border bg-immersive-card/40 text-immersive-text-secondary hover:border-immersive-secondary/50 hover:bg-immersive-card/70 hover:text-immersive-text-primary"
                }`}
              >
                {/* Visual active indicator bar */}
                {isSelected && (
                  <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${cat.gradient}`} />
                )}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                  isSelected ? "bg-immersive-secondary/15 text-immersive-secondary" : "bg-immersive-bg text-immersive-text-secondary"
                }`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold font-mono tracking-wide uppercase">{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Details Interactive Bento Board */}
        <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 sm:p-10 shadow-2xl shadow-immersive-shadow relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Accent Glow decoration */}
          <div className={`absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-tr ${selectedCat.gradient} opacity-10 rounded-full blur-3xl pointer-events-none`} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left specifications side: 7 columns */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className={`px-3 py-1 text-xs font-mono font-bold text-immersive-text-primary uppercase rounded-full bg-gradient-to-r ${selectedCat.gradient} shadow-md shadow-immersive-shadow`}>
                  {selectedCat.name} TRACK
                </span>
                <span className="flex items-center space-x-1.5 text-xs font-mono font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full uppercase">
                  <Flame className="w-3.5 h-3.5 animate-pulse text-amber-400" />
                  <span>{selectedCat.demand} Demand</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-immersive-text-primary tracking-tight leading-none">
                {selectedCat.title}
              </h3>

              <p className="text-sm sm:text-base text-immersive-text-secondary leading-relaxed font-medium">
                {selectedCat.description}
              </p>

              {/* Roles */}
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-immersive-secondary uppercase tracking-widest block">
                  Typical Cohort Job Placements:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedCat.roles.map((role, i) => (
                    <span key={i} className="text-xs bg-immersive-bg border border-immersive-border/60 text-immersive-text-primary font-bold px-3 py-1.5 rounded-xl">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-immersive-secondary uppercase tracking-widest block">
                  Curriculum Focus Skill-Set:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCat.skills.map((skill, i) => (
                    <span key={i} className="text-[11px] bg-immersive-bg/50 border border-immersive-border/40 text-immersive-text-secondary font-semibold font-mono px-2.5 py-1 rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right side data gauge & project preview: 5 columns */}
            <div className="lg:col-span-5 bg-immersive-bg/60 border border-immersive-border rounded-2xl p-6 space-y-5 text-left relative overflow-hidden">
              
              {/* Average Starting Salary */}
              <div className="flex justify-between items-center border-b border-immersive-border/40 pb-4">
                <div>
                  <span className="text-[10px] font-mono font-bold text-immersive-text-secondary uppercase">
                    ESTIMATED COHORT START SALARY
                  </span>
                  <div className="text-3xl font-black text-immersive-text-primary mt-1">
                    {selectedCat.salary}
                  </div>
                </div>
                <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center font-bold">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>

              {/* Sample Project Brief spec */}
              <div className="space-y-2.5">
                <span className="text-[10px] font-mono font-bold text-immersive-text-secondary uppercase tracking-wider block">
                  EXPERT WORKPLACE BRIEF SAMPLE:
                </span>
                <div className="p-4 bg-immersive-card/80 border border-immersive-border rounded-xl space-y-1.5 shadow-sm">
                  <div className="text-xs font-bold text-immersive-text-primary flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded bg-immersive-secondary inline-block animate-pulse" />
                    <span>{selectedCat.projectExample}</span>
                  </div>
                  <p className="text-[11px] text-immersive-text-secondary leading-relaxed">
                    Work directly with mock team leads and submit dynamic specifications to unlock expert mentor grading audits.
                  </p>
                </div>
              </div>

              {/* Enlist call to action */}
              <button
                onClick={() => navigate('/careers')}
                className="w-full flex items-center justify-center space-x-2.5 py-3.5 px-6 rounded-xl font-extrabold text-xs text-immersive-bg bg-immersive-secondary hover:bg-white tracking-widest uppercase transition-all duration-300 shadow-lg shadow-immersive-shadow shadow-immersive-secondary/10 cursor-pointer"
              >
                <span>Select Cohort Track</span>
                <ChevronRight className="w-4 h-4 shrink-0" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
