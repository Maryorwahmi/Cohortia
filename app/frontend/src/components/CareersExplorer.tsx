import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Sparkles, 
  Terminal, 
  Cloud, 
  Database, 
  ShieldCheck, 
  Layers3, 
  Cpu, 
  Code2, 
  ArrowRight, 
  CheckCircle, 
  Briefcase, 
  TrendingUp, 
  Award, 
  Coins, 
  Bot, 
  Users, 
  Crown,
  ChevronRight,
  DollarSign
} from "lucide-react";

export interface CsCareer {
  id: string;
  name: string;
  badge: string;
  icon: any;
  title: string;
  about: string;
  skills: string[];
  whatYouGain: string[];
  jobOpportunities: {
    roles: string[];
    salaryRange: string;
    demand: string;
    hiringTypes: string[];
  };
  sampleProject: string;
}

export const CS_CAREERS: CsCareer[] = [
  {
    id: "full-stack",
    name: "Full-Stack Engineering",
    badge: "MOST POPULAR",
    icon: Layers3,
    title: "Full-Stack Software Engineering",
    about: "Full-Stack engineers design, construct, and deploy complete applications from responsive client user interfaces to resilient API microservices and relational data schemas. You'll master end-to-end software delivery used by leading tech organizations worldwide.",
    skills: ["React 19 & Next.js", "TypeScript & Node.js", "PostgreSQL & Prisma", "REST & GraphQL APIs", "Docker & CI/CD", "State Management & Auth"],
    whatYouGain: [
      "Production-grade portfolio with 3 deployed enterprise applications",
      "Mastery of modern full-stack workflows from Git branching to cloud deployment",
      "Verified Cohortia Full-Stack Software Engineer Credential",
      "Interview-ready architecture documentation & GitHub repositories"
    ],
    jobOpportunities: {
      roles: ["Full-Stack Software Engineer", "Frontend/Backend Developer", "Web Applications Engineer", "Technical Product Engineer"],
      salaryRange: "$95,000 – $145,000/yr",
      demand: "Very High Demand (+22% YoY)",
      hiringTypes: ["Tech Startups", "SaaS Companies", "Global Consultancies", "Enterprise Tech"]
    },
    sampleProject: "Multi-Tenant Enterprise Collaboration & Telemetry Platform"
  },
  {
    id: "frontend",
    name: "Frontend Development",
    badge: "HIGH ENGAGEMENT",
    icon: Code2,
    title: "Frontend Engineering & UI Systems",
    about: "Frontend engineers craft high-performance, accessible, and responsive user experiences. You'll build modern reactive component architectures, manage client-side state, optimize Core Web Vitals, and implement enterprise design tokens.",
    skills: ["React 19 & TypeScript", "Tailwind CSS v4 & Motion", "Component Design Systems", "Web Performance & SEO", "Client State & Routing", "Accessibility (WCAG 2.1)"],
    whatYouGain: [
      "Pixel-perfect portfolio of fluid interactive dashboards and design systems",
      "Deep understanding of browser rendering pipelines and memory optimization",
      "Production experience collaborating with UI/UX designers and backend APIs",
      "Verified Frontend Engineering Capstone Certification"
    ],
    jobOpportunities: {
      roles: ["Frontend Engineer", "UI Systems Developer", "Design Technologist", "React Application Specialist"],
      salaryRange: "$88,000 – $135,000/yr",
      demand: "High Demand (Top 5 Tech Role)",
      hiringTypes: ["Consumer Tech", "Fintech Applications", "Digital Agencies", "Remote First Companies"]
    },
    sampleProject: "Interactive High-Frequency Trading Telemetry Dashboard"
  },
  {
    id: "backend",
    name: "Backend Architecture",
    badge: "CORE SYSTEMS",
    icon: Terminal,
    title: "Backend Engineering & API Architecture",
    about: "Backend engineers build the engines that power modern software. You will design robust distributed APIs, implement transaction-safe relational database schemas, construct asynchronous message queues, and ensure system fault tolerance.",
    skills: ["Go / Node.js / Python", "PostgreSQL & Redis Caching", "gRPC & REST Protocols", "Microservices Architecture", "OAuth 2.0 & JWT Security", "Distributed Locking & Queues"],
    whatYouGain: [
      "Demonstrated ability to handle 10,000+ requests/second under benchmark loads",
      "Clean, scalable microservices repository with automated integration tests",
      "Strong grasp of concurrency, database indexing, and caching topologies",
      "Verified Backend Systems Architecture Certificate"
    ],
    jobOpportunities: {
      roles: ["Backend Software Engineer", "API Platform Engineer", "Distributed Systems Associate", "Database & Services Developer"],
      salaryRange: "$105,000 – $155,000/yr",
      demand: "Extremely High (Critical Need)",
      hiringTypes: ["Financial Infrastructure", "Cloud Platforms", "High-Scale E-Commerce", "B2B SaaS"]
    },
    sampleProject: "Distributed Resilient Payment & Event Bus Engine"
  },
  {
    id: "ai-systems",
    name: "AI & ML Systems",
    badge: "SURGING DEMAND",
    icon: Sparkles,
    title: "AI & Machine Learning Engineering",
    about: "AI systems engineers integrate artificial intelligence models into scalable production applications. You will orchestrate multimodal generative AI pipelines, configure vector embeddings, manage retrieval-augmented generation (RAG), and fine-tune models.",
    skills: ["Python & PyTorch", "Gemini API & LLM Orchestration", "Vector DBs (Pinecone, pgvector)", "RAG Architecture", "Prompt Optimization", "Model Evaluation & Safety"],
    whatYouGain: [
      "Production-ready RAG application leveraging real-time semantic search",
      "Practical experience deploying LLM agents with deterministic guardrails",
      "Ability to reduce token consumption and optimize AI latency in production",
      "Verified AI Systems Specialist Credential"
    ],
    jobOpportunities: {
      roles: ["AI Integration Engineer", "Machine Learning Software Engineer", "GenAI Application Architect", "Prompt Systems Engineer"],
      salaryRange: "$120,000 – $175,000/yr",
      demand: "Unprecedented Growth (+48% YoY)",
      hiringTypes: ["AI Startups", "Enterprise Innovation Labs", "HealthTech", "Analytics Platforms"]
    },
    sampleProject: "Autonomous Multi-Agent Document Retrieval & Audit Engine"
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    badge: "MISSION CRITICAL",
    icon: Cloud,
    title: "Cloud Infrastructure & Platform DevOps",
    about: "Cloud engineers automate software delivery pipelines and architect bulletproof infrastructure. You'll master container orchestration with Docker and Kubernetes, automate deployments with Terraform, and configure observability telemetry.",
    skills: ["Docker & Kubernetes", "AWS / Google Cloud Platform", "Terraform & IaC", "GitHub Actions CI/CD", "Linux Systems & Bash", "Prometheus & Grafana"],
    whatYouGain: [
      "Complete Infrastructure as Code (IaC) repository with automated CI/CD",
      "Zero-downtime deployment pipelines with automated rollbacks and canary tests",
      "Proficiency in container networking, secrets management, and SSL termination",
      "Verified Cloud Infrastructure & DevOps Credential"
    ],
    jobOpportunities: {
      roles: ["Cloud Platform Engineer", "DevOps Engineer", "Site Reliability Engineer (SRE)", "Infrastructure Automation Lead"],
      salaryRange: "$110,000 – $160,000/yr",
      demand: "Extremely High (Universal Requirement)",
      hiringTypes: ["Cloud Service Providers", "Fintech & Banking", "Media Streaming", "Global Enterprise"]
    },
    sampleProject: "Zero-Downtime Multi-Region Kubernetes Deployment Fleet"
  },
  {
    id: "systems-cpp",
    name: "Computer Systems & C++",
    badge: "LOW-LEVEL DEEP DIVE",
    icon: Cpu,
    title: "Systems Programming & Performance C++",
    about: "Systems engineers build software where every byte of memory and CPU cycle matters. You'll explore manual memory management, pointer arithmetic, custom buffer pools, concurrent thread synchronization, and modern C++20 features.",
    skills: ["C++17 / C++20 Standards", "Pointers & RAII Patterns", "Buffer Pools & Page Replacers", "Multithreaded Pools & Mutexes", "GDB & Valgrind Debugging", "OS Kernel & File Telemetry"],
    whatYouGain: [
      "High-performance memory storage engine with zero memory leaks",
      "In-depth understanding of operating systems, hardware caches, and CPU threads",
      "Experience writing high-throughput, low-latency software",
      "Verified Systems Software Engineering Credential"
    ],
    jobOpportunities: {
      roles: ["Systems Software Engineer", "Low-Latency C++ Developer", "Game Engine Programmer", "Embedded & IoT Architect"],
      salaryRange: "$115,000 – $170,000/yr",
      demand: "High Demand (Specialist Shortage)",
      hiringTypes: ["High-Frequency Trading", "Gaming Studios", "Robotics & Defense", "Autonomous Vehicles"]
    },
    sampleProject: "Lock-Free Multithreaded In-Memory Storage Engine"
  },
  {
    id: "data-engineering",
    name: "Data Engineering",
    badge: "HIGH SCALE",
    icon: Database,
    title: "Data Engineering & Analytics Pipelines",
    about: "Data engineers construct large-scale pipelines that collect, clean, and transform massive streams of data into actionable business intelligence. You will master SQL optimization, distributed data engines, and reliable ETL pipelines.",
    skills: ["Advanced SQL & Query Tuning", "Python Data Pipelines", "Apache Spark & dbt", "Data Warehousing (Snowflake/BigQuery)", "Airflow Workflow Schedulers", "Data Modeling & Schemas"],
    whatYouGain: [
      "End-to-end automated data ingestion pipeline processing millions of events",
      "Expert-level query tuning and relational schema normalizations",
      "Production dashboard connected to clean, warehouse-grade data models",
      "Verified Data Engineering Specialist Credential"
    ],
    jobOpportunities: {
      roles: ["Data Engineer", "Analytics Engineer", "Data Pipeline Specialist", "Business Intelligence Architect"],
      salaryRange: "$100,000 – $150,000/yr",
      demand: "Surging Demand across all industries",
      hiringTypes: ["Big Tech", "Retail & Logistics", "Fintech & Insurance", "Healthcare Systems"]
    },
    sampleProject: "Real-Time Telemetry Streaming & Fraud Detection Pipeline"
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    badge: "HIGH SECURITY",
    icon: ShieldCheck,
    title: "Cybersecurity & Systems Defense",
    about: "Cybersecurity specialists safeguard systems, networks, and data from digital adversaries. You will audit software vulnerabilities, configure defense-in-depth security architectures, perform penetration tests, and enforce secure software supply chains.",
    skills: ["Network Security & Protocols", "Vulnerability Assessment & OWASP", "Linux Hardening & Firewalls", "Identity & Access Management (IAM)", "Cryptography & PKI", "Incident Response & Forensics"],
    whatYouGain: [
      "Comprehensive enterprise security audit report and remediation proof",
      "Practical experience performing secure code audits and penetration tests",
      "Strong understanding of modern zero-trust architecture and compliance",
      "Verified Cybersecurity Defense Credential"
    ],
    jobOpportunities: {
      roles: ["Security Engineer", "Application Security Specialist", "SOC Analyst", "Information Security Consultant"],
      salaryRange: "$105,000 – $160,000/yr",
      demand: "Critical Shortage (+31% YoY)",
      hiringTypes: ["Financial Institutions", "Government & Defense", "Health Networks", "Tech Platforms"]
    },
    sampleProject: "Enterprise Zero-Trust Authentication & Threat Telemetry Hub"
  }
];

interface CareersExplorerProps {
  onOpenWizard?: () => void;
}

export default function CareersExplorer({ onOpenWizard }: CareersExplorerProps) {
  const navigate = useNavigate();
  const [selectedCareer, setSelectedCareer] = useState<CsCareer>(CS_CAREERS[0]);
  const [selectedTab, setSelectedTab] = useState<"about" | "skills" | "gain" | "jobs" | "pricing">("about");

  const handleStartTrack = (tier: "pivot" | "upskill" | "lead") => {
    if (onOpenWizard) {
      onOpenWizard();
    } else {
      navigate("/signup");
    }
  };

  const IconComponent = selectedCareer.icon;

  return (
    <section id="careers-explorer" className="py-14 sm:py-20 bg-immersive-bg relative border-t border-immersive-border/20">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#FF4B3E]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-mono font-bold text-[#FF4B3E] bg-[#FF4B3E]/10 border border-[#FF4B3E]/20 px-3.5 py-1 rounded-full uppercase tracking-widest inline-flex items-center space-x-1.5">
            <Award className="w-3.5 h-3.5" />
            <span>CURATED COMPUTER SCIENCE DISCIPLINES</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-immersive-text-primary tracking-tight">
            Explore Computer Science <span className="text-[#FF4B3E]">Careers</span>
          </h2>
          <p className="text-base sm:text-lg text-immersive-text-secondary">
            Cohortia focuses exclusively on high-impact computer science disciplines. Inspect active job roles, salary benchmarks, core skills, and choose the track that fits your stage.
          </p>
        </div>

        {/* 8 Category Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3 mb-8">
          {CS_CAREERS.map((career) => {
            const isSelected = selectedCareer.id === career.id;
            const CareerIcon = career.icon;
            return (
              <button
                key={career.id}
                onClick={() => {
                  setSelectedCareer(career);
                }}
                className={`p-3 sm:p-3.5 rounded-2xl border transition-all text-left flex flex-col justify-between cursor-pointer min-h-[95px] ${
                  isSelected
                    ? "bg-[#FF4B3E] border-[#FF4B3E] text-white shadow-lg shadow-[#FF4B3E]/20 scale-[1.02]"
                    : "bg-immersive-card border-immersive-border/60 hover:border-[#FF4B3E]/40 text-immersive-text-primary hover:bg-immersive-card-hover"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <CareerIcon className={`w-5 h-5 ${isSelected ? "text-white" : "text-[#FF4B3E]"}`} />
                  <span className={`text-[8px] font-mono font-black uppercase px-1.5 py-0.5 rounded ${
                    isSelected ? "bg-white/20 text-white" : "bg-[#FF4B3E]/10 text-[#FF4B3E]"
                  }`}>
                    {career.badge}
                  </span>
                </div>
                <span className={`text-xs font-bold leading-tight ${isSelected ? "text-white" : "text-immersive-text-primary"}`}>
                  {career.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Realistic Interactive Career Card Details */}
        <div className="bg-immersive-card border border-immersive-border rounded-3xl p-5 sm:p-8 shadow-2xl shadow-immersive-shadow text-left">
          
          {/* Top Title & Metadata Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-immersive-border/40 pb-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#FF4B3E]/10 border border-[#FF4B3E]/20 flex items-center justify-center shrink-0 text-[#FF4B3E]">
                <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono font-extrabold px-2.5 py-0.5 rounded-full bg-[#FF4B3E]/10 text-[#FF4B3E] border border-[#FF4B3E]/20 uppercase tracking-wider">
                    {selectedCareer.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-500 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                    {selectedCareer.jobOpportunities.salaryRange}
                  </span>
                  <span className="text-xs font-mono font-bold text-blue-500 bg-blue-500/10 px-2.5 py-0.5 rounded-full">
                    {selectedCareer.jobOpportunities.demand}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-immersive-text-primary tracking-tight">
                  {selectedCareer.title}
                </h3>
              </div>
            </div>

            {/* Quick Pricing Pill & Action */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="bg-immersive-bg border border-immersive-border rounded-2xl p-2 px-3 text-left">
                <span className="text-[9px] font-mono text-immersive-text-secondary uppercase block">
                  STARTING FROM
                </span>
                <span className="text-lg font-black text-[#FF4B3E]">
                  $23 <span className="text-xs font-normal text-immersive-text-secondary">/ full track</span>
                </span>
              </div>
              <button
                onClick={() => navigate("/experience")}
                className="px-5 py-3 rounded-xl text-xs font-bold text-white bg-[#FF4B3E] hover:brightness-110 shadow-lg shadow-[#FF4B3E]/20 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>View Track Roadmap</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Segmented Detail Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 border-b border-immersive-border/30 pb-3">
            {[
              { id: "about", label: "About Career" },
              { id: "skills", label: "Skills You Master" },
              { id: "gain", label: "What You'll Gain" },
              { id: "jobs", label: "Job Opportunities & Roles" },
              { id: "pricing", label: "Track Pricing & Plans ($23 / $30 / $45)" },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedTab === tab.id
                    ? "bg-[#FF4B3E] text-white shadow-md shadow-[#FF4B3E]/10"
                    : "bg-immersive-bg border border-immersive-border text-immersive-text-secondary hover:text-immersive-text-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Panels */}
          <div className="min-h-[220px]">
            
            {/* 1. About the Career */}
            {selectedTab === "about" && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <p className="text-sm sm:text-base text-immersive-text-secondary leading-relaxed font-medium">
                  {selectedCareer.about}
                </p>

                <div className="p-4 bg-immersive-bg border border-immersive-border rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono text-[#FF4B3E] font-bold uppercase tracking-wider block">
                      FEATURED CAPSTONE LAB
                    </span>
                    <h4 className="text-sm font-extrabold text-immersive-text-primary mt-0.5">
                      {selectedCareer.sampleProject}
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-emerald-500 font-bold bg-emerald-500/10 px-3 py-1 rounded-xl shrink-0">
                    Industry Evaluated
                  </span>
                </div>
              </div>
            )}

            {/* 2. Skills You Master */}
            {selectedTab === "skills" && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <p className="text-xs text-immersive-text-secondary font-mono">
                  Master foundational to advanced computer science tooling with hands-on code reviews:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {selectedCareer.skills.map((skill) => (
                    <div key={skill} className="p-3 bg-immersive-bg border border-immersive-border rounded-xl flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#FF4B3E] shrink-0" />
                      <span className="text-xs font-bold text-immersive-text-primary">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. What You'll Gain */}
            {selectedTab === "gain" && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <p className="text-xs text-immersive-text-secondary font-mono">
                  Tangible career proof and assets you walk away with:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {selectedCareer.whatYouGain.map((item, i) => (
                    <div key={i} className="p-4 bg-immersive-bg border border-immersive-border rounded-2xl flex items-start gap-3">
                      <span className="w-6 h-6 rounded-lg bg-[#FF4B3E]/10 text-[#FF4B3E] flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                        0{i+1}
                      </span>
                      <p className="text-xs sm:text-sm text-immersive-text-primary font-medium leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. Job Opportunities & Roles */}
            {selectedTab === "jobs" && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Job Titles */}
                  <div className="p-4 bg-immersive-bg border border-immersive-border rounded-2xl space-y-2">
                    <span className="text-[10px] font-mono text-[#FF4B3E] font-bold uppercase tracking-wider block">
                      TARGET JOB TITLES
                    </span>
                    <ul className="space-y-1.5 text-xs text-immersive-text-primary font-semibold">
                      {selectedCareer.jobOpportunities.roles.map(r => (
                        <li key={r} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#FF4B3E] rounded-full" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Compensation & Market */}
                  <div className="p-4 bg-immersive-bg border border-immersive-border rounded-2xl space-y-2">
                    <span className="text-[10px] font-mono text-emerald-500 font-bold uppercase tracking-wider block">
                      SALARY BENCHMARK & DEMAND
                    </span>
                    <p className="text-lg font-black text-immersive-text-primary">
                      {selectedCareer.jobOpportunities.salaryRange}
                    </p>
                    <p className="text-xs text-immersive-text-secondary">
                      {selectedCareer.jobOpportunities.demand}
                    </p>
                  </div>

                  {/* Hiring Ecosystem */}
                  <div className="p-4 bg-immersive-bg border border-immersive-border rounded-2xl space-y-2">
                    <span className="text-[10px] font-mono text-blue-500 font-bold uppercase tracking-wider block">
                      WHERE GRADS GET HIRED
                    </span>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {selectedCareer.jobOpportunities.hiringTypes.map(h => (
                        <span key={h} className="text-[10px] font-medium bg-immersive-card border border-immersive-border px-2 py-0.5 rounded text-immersive-text-secondary">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 5. Track Pricing & Plans */}
            {selectedTab === "pricing" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="text-center max-w-xl mx-auto mb-2">
                  <h4 className="text-lg font-extrabold text-immersive-text-primary">
                    Clear, Transparent Career Track Pricing
                  </h4>
                  <p className="text-xs text-immersive-text-secondary mt-1">
                    Structured multi-course pathways from beginner to advanced. No subscription traps.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Plan 1 */}
                  <div className="p-4 bg-immersive-bg border border-immersive-border rounded-2xl flex flex-col justify-between space-y-4">
                    <div>
                      <span className="text-[9px] font-mono font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded uppercase">
                        ENTRY & TRANSITION
                      </span>
                      <h5 className="text-base font-bold text-immersive-text-primary mt-2">
                        Pivot into a New Career
                      </h5>
                      <div className="my-2">
                        <span className="text-2xl font-black text-[#FF4B3E]">$23</span>
                        <span className="text-xs text-immersive-text-secondary ml-1">total track</span>
                      </div>
                      <p className="text-xs text-immersive-text-secondary leading-relaxed">
                        For career switchers. Complete 5-course journey from beginner foundations to advanced practice.
                      </p>
                      <ul className="mt-3 space-y-1.5 text-xs text-immersive-text-secondary">
                        <li className="flex items-center gap-1.5">✓ 5 Courses (2 Beg, 2 Int, 1 Adv)</li>
                        <li className="flex items-center gap-1.5">✓ 500 AI Credits & Practical Assistant</li>
                        <li className="flex items-center gap-1.5">✓ Career Transition Support</li>
                      </ul>
                    </div>
                    <button
                      onClick={() => handleStartTrack("pivot")}
                      className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-[#FF4B3E] hover:brightness-110 transition-all cursor-pointer"
                    >
                      Start Pivot Track ($23)
                    </button>
                  </div>

                  {/* Plan 2 */}
                  <div className="p-4 bg-immersive-bg border border-[#FF4B3E]/40 rounded-2xl flex flex-col justify-between space-y-4 relative shadow-md shadow-[#FF4B3E]/5">
                    <div>
                      <span className="text-[9px] font-mono font-bold text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded uppercase">
                        PROFESSIONAL ACCELERATION
                      </span>
                      <h5 className="text-base font-bold text-immersive-text-primary mt-2">
                        Upskill in My Current Role
                      </h5>
                      <div className="my-2">
                        <span className="text-2xl font-black text-[#FF4B3E]">$30</span>
                        <span className="text-xs text-immersive-text-secondary ml-1">total track</span>
                      </div>
                      <p className="text-xs text-immersive-text-secondary leading-relaxed">
                        For developers looking to deepen skills, earn promotions, and solve complex workplace tasks.
                      </p>
                      <ul className="mt-3 space-y-1.5 text-xs text-immersive-text-secondary">
                        <li className="flex items-center gap-1.5">✓ 4 Courses (2 Beg, 1 Int, 1 Adv)</li>
                        <li className="flex items-center gap-1.5">✓ 500 AI Credits & Practical Assistant</li>
                        <li className="flex items-center gap-1.5">✓ Workplace Simulation & Case Studies</li>
                      </ul>
                    </div>
                    <button
                      onClick={() => handleStartTrack("upskill")}
                      className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-[#FF4B3E] hover:brightness-110 transition-all cursor-pointer"
                    >
                      Start Upskill Track ($30)
                    </button>
                  </div>

                  {/* Plan 3 */}
                  <div className="p-4 bg-immersive-bg border border-purple-500/30 rounded-2xl flex flex-col justify-between space-y-4">
                    <div>
                      <span className="text-[9px] font-mono font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded uppercase">
                        LEADERSHIP & CAPSTONE
                      </span>
                      <h5 className="text-base font-bold text-immersive-text-primary mt-2">
                        Lead & Specialize
                      </h5>
                      <div className="my-2">
                        <span className="text-2xl font-black text-[#FF4B3E]">$45</span>
                        <span className="text-xs text-immersive-text-secondary ml-1">total track</span>
                      </div>
                      <p className="text-xs text-immersive-text-secondary leading-relaxed">
                        For seasoned engineers moving toward Tech Lead, Staff, or Specialized Domain Expert.
                      </p>
                      <ul className="mt-3 space-y-1.5 text-xs text-immersive-text-secondary">
                        <li className="flex items-center gap-1.5">✓ 2 Deep Courses (1 Int, 1 Adv)</li>
                        <li className="flex items-center gap-1.5">✓ 500 AI Credits & Advanced Mentor</li>
                        <li className="flex items-center gap-1.5">✓ Portfolio Capstone & Leadership Prep</li>
                      </ul>
                    </div>
                    <button
                      onClick={() => handleStartTrack("lead")}
                      className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-purple-600 hover:brightness-110 transition-all cursor-pointer"
                    >
                      Start Lead & Specialize ($45)
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Bottom Callout selling the app */}
          <div className="mt-8 pt-6 border-t border-immersive-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-immersive-text-secondary">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
              <span>Full track includes verified certificates, terminal sandbox, and community mastermind.</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => navigate("/experience")}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-immersive-text-primary bg-immersive-bg border border-immersive-border hover:border-[#FF4B3E]/40 transition-all cursor-pointer text-center"
              >
                Experience Track Sandbox
              </button>
              <button
                onClick={() => handleStartTrack("pivot")}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#FF4B3E] hover:brightness-110 shadow-lg shadow-[#FF4B3E]/20 transition-all flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>Enroll in {selectedCareer.name}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
