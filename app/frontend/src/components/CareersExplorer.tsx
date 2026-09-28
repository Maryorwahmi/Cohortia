import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Sparkles, 
  Terminal, 
  Layers, 
  Cpu, 
  Code2, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Award, 
  ChevronRight,
  ChevronLeft,
  Star,
  Users,
  Clock,
  BookOpen,
  Search,
  ExternalLink,
  ShieldCheck,
  Zap,
  Globe
} from "lucide-react";

export interface FeaturedCourse {
  id: string;
  number: number;
  title: string;
  provider: "Meta" | "IBM" | "Harvard University" | "University of Michigan" | "FreeCodeCamp";
  providerLogoColor: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Beginner to Intermediate" | "Beginner to Advanced";
  category: "Full-Stack" | "Backend" | "Frontend" | "Foundations";
  description: string;
  careerImpact: string;
  duration: string;
  rating: number;
  reviewsCount: string;
  skills: string[];
  trackTier: string;
  popularBadge: string;
}

export const FEATURED_COURSES: FeaturedCourse[] = [
  {
    id: "ibm-fullstack",
    number: 1,
    title: "IBM Full-Stack Software Developer Professional Certificate",
    provider: "IBM",
    providerLogoColor: "from-blue-600 to-indigo-600",
    level: "Beginner to Intermediate",
    category: "Full-Stack",
    description: "Broad full-stack foundation covering front-end, back-end, databases, APIs, Git, containers and development workflows.",
    careerImpact: "Very useful as a career-transition anchor into modern software engineering.",
    duration: "4 - 6 months (hands-on)",
    rating: 4.9,
    reviewsCount: "28,400+ reviews",
    skills: ["React & Node.js", "Cloud Native & Docker", "Python & Microservices", "CI/CD & Git", "SQL & NoSQL"],
    trackTier: "Included in Pivot ($23) & Upskill ($30)",
    popularBadge: "MOST POPULAR CAREER ANCHOR"
  },
  {
    id: "meta-backend",
    number: 2,
    title: "Meta Back-End Developer Professional Certificate",
    provider: "Meta",
    providerLogoColor: "from-blue-500 to-cyan-500",
    level: "Intermediate",
    category: "Backend",
    description: "Strong specialization for backend careers, with practical backend technologies and modern distributed development concepts.",
    careerImpact: "Tailored for engineers targeting dedicated backend, API, and cloud services roles.",
    duration: "3 - 5 months (hands-on)",
    rating: 4.8,
    reviewsCount: "19,200+ reviews",
    skills: ["Python & Django", "REST APIs & JSON", "Database Tuning & MySQL", "Linux & Git", "Server Security"],
    trackTier: "Included in Upskill ($30) & Lead ($45)",
    popularBadge: "HIGH INDUSTRY DEMAND"
  },
  {
    id: "meta-frontend",
    number: 3,
    title: "Meta Front-End Developer Professional Certificate",
    provider: "Meta",
    providerLogoColor: "from-blue-500 to-sky-500",
    level: "Beginner to Intermediate",
    category: "Frontend",
    description: "Strong entry point into modern frontend development and suitable for learners building toward professional frontend roles.",
    careerImpact: "Builds production-grade client apps with React, UI state management, and UX design principles.",
    duration: "3 - 5 months (hands-on)",
    rating: 4.9,
    reviewsCount: "34,100+ reviews",
    skills: ["React 19 & JavaScript", "HTML5 & Modern CSS", "UI/UX & Accessibility", "Jest Testing", "Client Routing"],
    trackTier: "Included in Pivot ($23) & Upskill ($30)",
    popularBadge: "TOP RATED FRONTEND"
  },
  {
    id: "meta-fullstack",
    number: 4,
    title: "Meta Full-Stack Developer: Front-End & Back-End from Scratch Specialization",
    provider: "Meta",
    providerLogoColor: "from-indigo-600 to-blue-500",
    level: "Beginner to Advanced",
    category: "Full-Stack",
    description: "End-to-end development curriculum connecting client user experiences directly to high-throughput backend services.",
    careerImpact: "Particularly valuable for learners who want an end-to-end development path rather than specializing immediately.",
    duration: "6 - 8 months (hands-on)",
    rating: 4.9,
    reviewsCount: "22,800+ reviews",
    skills: ["Full-Stack Architecture", "React & Django/Node", "System Design", "Cloud Deployment", "Capstone Project"],
    trackTier: "Included in Pivot ($23) & Lead ($45)",
    popularBadge: "COMPREHENSIVE PATHWAY"
  },
  {
    id: "python-everybody",
    number: 5,
    title: "Python for Everybody Specialization",
    provider: "University of Michigan",
    providerLogoColor: "from-amber-600 to-yellow-500",
    level: "Beginner",
    category: "Foundations",
    description: "Extremely accessible entry point into programming, data structures, and computer logic using Python.",
    careerImpact: "Useful for beginners and career pivots into technical, automation, or data-related fields.",
    duration: "2 - 3 months (hands-on)",
    rating: 4.9,
    reviewsCount: "115,000+ reviews",
    skills: ["Python Fundamentals", "Data Structures", "Web Scraping & APIs", "Databases & SQLite", "Data Visualization"],
    trackTier: "Included in Pivot ($23) Track",
    popularBadge: "EASIEST ENTRY POINT"
  },
  {
    id: "js-algorithms",
    number: 6,
    title: "JavaScript Algorithms and Data Structures",
    provider: "FreeCodeCamp",
    providerLogoColor: "from-emerald-600 to-teal-500",
    level: "Intermediate",
    category: "Foundations",
    description: "Master computational algorithms, time/space complexity (Big-O), recursion, and essential data structures.",
    careerImpact: "Builds a fundamental programming skill that supports frontend, backend and full-stack technical interviews.",
    duration: "2 - 4 months (hands-on)",
    rating: 4.8,
    reviewsCount: "68,000+ reviews",
    skills: ["Big-O Complexity", "Sorting & Searching", "Graphs & Trees", "Dynamic Programming", "ES6+ Standards"],
    trackTier: "Included in Pivot ($23) & Upskill ($30)",
    popularBadge: "TECHNICAL INTERVIEW READY"
  },
  {
    id: "harvard-cs50",
    number: 7,
    title: "CS50's Introduction to Computer Science",
    provider: "Harvard University",
    providerLogoColor: "from-rose-600 to-red-700",
    level: "Beginner to Intermediate",
    category: "Foundations",
    description: "World-renowned computational thinking and computer science foundation covering algorithms, memory, and web technology.",
    careerImpact: "Particularly useful for someone entering technology without a strong technical background.",
    duration: "3 - 5 months (hands-on)",
    rating: 5.0,
    reviewsCount: "142,000+ reviews",
    skills: ["C & Low-Level Memory", "Data Structures & Pointers", "Python & SQL", "Web Fundamentals", "Computational Thinking"],
    trackTier: "Included in Pivot ($23) & Upskill ($30)",
    popularBadge: "GOLD STANDARD CS FOUNDATION"
  }
];

interface CareersExplorerProps {
  onOpenWizard?: () => void;
}

export default function CareersExplorer({ onOpenWizard }: CareersExplorerProps) {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedCourse, setSelectedCourse] = useState<FeaturedCourse>(FEATURED_COURSES[0]);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  // Hero Carousel slides inspired by Coursera / Microsoft banner
  const HERO_SLIDES = [
    {
      id: "meta-slide",
      partner: "Meta Professional",
      title: "Navigate your career path in tech with Meta",
      tagline: "Front-End, Back-End & Full-Stack Developer certificates crafted for high-growth tech roles.",
      badge: "3 ACCREDITED CERTIFICATES",
      bgGradient: "from-blue-900/40 via-indigo-950/40 to-slate-950/70",
      accentColor: "border-blue-500/40",
      pillText: "Meta Developer Suite",
      highlights: ["React 19 & Next.js", "Django & Cloud APIs", "Interview Portfolio"],
      courseId: "meta-fullstack"
    },
    {
      id: "ibm-slide",
      partner: "IBM Cloud & Systems",
      title: "Build enterprise full-stack software with IBM",
      tagline: "Master cloud native, microservices, containerization, and modern development workflows.",
      badge: "ENTERPRISE READY",
      bgGradient: "from-slate-900/50 via-blue-950/40 to-slate-950/70",
      accentColor: "border-indigo-500/40",
      pillText: "IBM Developer Cert",
      highlights: ["Docker & Containers", "Microservices & CI/CD", "Cloud Architecture"],
      courseId: "ibm-fullstack"
    },
    {
      id: "harvard-slide",
      partner: "Harvard CS50 Core",
      title: "Establish an unshakeable CS foundation with CS50",
      tagline: "The world's gold standard computer science program for beginners and career pivots.",
      badge: "GLOBAL GOLD STANDARD",
      bgGradient: "from-rose-950/40 via-red-950/30 to-slate-950/70",
      accentColor: "border-rose-500/40",
      pillText: "Harvard CS50 Curriculum",
      highlights: ["Low-Level C & Pointers", "Algorithms & Big-O", "Python & SQL"],
      courseId: "harvard-cs50"
    }
  ];

  // Auto-slide carousel every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [HERO_SLIDES.length]);

  const activeHero = HERO_SLIDES[currentHeroSlide];

  const filteredCourses = activeCategory === "All"
    ? FEATURED_COURSES
    : FEATURED_COURSES.filter(c => c.category === activeCategory);

  const handleEnrollCourse = (course: FeaturedCourse) => {
    if (onOpenWizard) {
      onOpenWizard();
    } else {
      navigate("/signup");
    }
  };

  return (
    <section id="courses-explorer" className="py-14 sm:py-20 bg-immersive-bg relative border-t border-immersive-border/20 text-left">
      
      {/* Dynamic ambient backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#FF4B3E]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
          <span className="text-xs font-mono font-bold text-[#FF4B3E] bg-[#FF4B3E]/10 border border-[#FF4B3E]/20 px-3.5 py-1.5 rounded-full uppercase tracking-widest inline-flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" />
            <span>ACCREDITED INDUSTRY CURRICULA</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-immersive-text-primary tracking-tight">
            Explore Computer Science <span className="text-[#FF4B3E]">Courses</span>
          </h2>
          <p className="text-base sm:text-lg text-immersive-text-secondary leading-relaxed">
            Gain verified skills with world-class curriculum partners including <strong>Meta, IBM, and Harvard</strong>. Structured across beginner, intermediate, and advanced career tracks.
          </p>
        </div>

        {/* 1. COURSERA/MICROSOFT-STYLE HERO BANNER CAROUSEL */}
        <div className="mb-12 relative">
          <div className={`relative rounded-3xl overflow-hidden border border-immersive-border bg-gradient-to-r ${activeHero.bgGradient} p-6 sm:p-10 shadow-2xl shadow-immersive-shadow transition-all duration-500`}>
            
            {/* Background tech wireframe graph */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Hero Text & Call to Action */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-xs font-mono font-extrabold px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 uppercase tracking-wider">
                    {activeHero.partner}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#FF4B3E] bg-[#FF4B3E]/10 px-3 py-1 rounded-full border border-[#FF4B3E]/20">
                    {activeHero.badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  {activeHero.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium max-w-xl">
                  {activeHero.tagline} Choose the skills that lead to high-impact tech roles with Cohortia's guided tracks, 500 AI credits, and practical terminal sandbox.
                </p>

                {/* Highlights tags */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {activeHero.highlights.map((h) => (
                    <span key={h} className="text-xs font-mono font-bold bg-white/5 border border-white/10 text-slate-200 px-3 py-1 rounded-xl flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{h}</span>
                    </span>
                  ))}
                </div>

                {/* Action Buttons Row */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => {
                      const matched = FEATURED_COURSES.find(c => c.id === activeHero.courseId);
                      if (matched) setSelectedCourse(matched);
                      if (onOpenWizard) onOpenWizard();
                      else navigate("/signup");
                    }}
                    className="px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-[#FF4B3E] hover:brightness-110 shadow-lg shadow-[#FF4B3E]/20 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Enroll now in Track</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => {
                      const matched = FEATURED_COURSES.find(c => c.id === activeHero.courseId);
                      if (matched) setSelectedCourse(matched);
                    }}
                    className="px-5 py-3.5 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all cursor-pointer"
                  >
                    <span>Inspect Course Details</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Learning Pathway Illustration (Nodes Diagram) */}
              <div className="lg:col-span-5 relative flex items-center justify-center">
                
                {/* Tech Pathway Node Network Card */}
                <div className="w-full max-w-md bg-black/40 backdrop-blur-md border border-white/15 rounded-3xl p-6 shadow-2xl space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                      CAREER PROGRESSION FLOW
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded">
                      ● ACCREDITED PATHWAY
                    </span>
                  </div>

                  {/* Connected Pathway Nodes */}
                  <div className="space-y-3 relative">
                    
                    {/* Node 1 */}
                    <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-white/[0.04] border border-white/10">
                      <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                        <Terminal className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-mono text-slate-400 block">STEP 01: FOUNDATIONS</span>
                        <span className="text-xs font-bold text-white truncate block">CS50 / Python / Algorithms</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#FF4B3E] font-bold">2 Beg</span>
                    </div>

                    {/* Connecting line */}
                    <div className="w-0.5 h-3 bg-white/20 ml-6" />

                    {/* Node 2 */}
                    <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-white/[0.04] border border-white/10">
                      <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-mono text-slate-400 block">STEP 02: SPECIALIZATION</span>
                        <span className="text-xs font-bold text-white truncate block">Meta Front-End / Back-End</span>
                      </div>
                      <span className="text-[10px] font-mono text-blue-400 font-bold">2 Int</span>
                    </div>

                    {/* Connecting line */}
                    <div className="w-0.5 h-3 bg-white/20 ml-6" />

                    {/* Node 3 */}
                    <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-white/[0.04] border border-white/10">
                      <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-mono text-slate-400 block">STEP 03: CAPSTONE DELIVERABLE</span>
                        <span className="text-xs font-bold text-white truncate block">IBM Full-Stack & Systems Lab</span>
                      </div>
                      <span className="text-[10px] font-mono text-purple-400 font-bold">1 Adv</span>
                    </div>

                  </div>

                  {/* Pricing Callout inside banner */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">Starting at only:</span>
                    <span className="text-base font-black text-white">
                      $23 <span className="text-xs font-normal text-slate-400">/ full 5-course track</span>
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Carousel navigation dots & arrows */}
            <div className="flex items-center justify-between pt-6 mt-4 border-t border-white/10 relative z-10">
              <div className="flex items-center gap-2">
                {HERO_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentHeroSlide(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentHeroSlide === idx ? "w-8 bg-[#FF4B3E]" : "w-2 bg-white/30 hover:bg-white/60"
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentHeroSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
                  title="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
                  title="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 2. CATEGORY FILTER PILLS */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            {["All", "Full-Stack", "Frontend", "Backend", "Foundations"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#FF4B3E] text-white shadow-md shadow-[#FF4B3E]/10"
                    : "bg-immersive-card border border-immersive-border text-immersive-text-secondary hover:text-immersive-text-primary hover:border-immersive-border/80"
                }`}
              >
                {cat} Courses ({cat === "All" ? FEATURED_COURSES.length : FEATURED_COURSES.filter(c => c.category === cat).length})
              </button>
            ))}
          </div>

          <span className="text-xs font-mono text-immersive-text-secondary">
            Showing {filteredCourses.length} accredited courses
          </span>
        </div>

        {/* 3. COURSES GRID & SELECTED COURSE INSPECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 7 Course Cards List */}
          <div className="lg:col-span-7 space-y-4">
            {filteredCourses.map((course) => {
              const isSelected = selectedCourse.id === course.id;
              
              return (
                <div
                  key={course.id}
                  onClick={() => setSelectedCourse(course)}
                  className={`p-5 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between text-left ${
                    isSelected
                      ? "bg-immersive-card border-[#FF4B3E] ring-2 ring-[#FF4B3E]/20 shadow-xl shadow-immersive-shadow"
                      : "bg-immersive-card/60 border-immersive-border/70 hover:border-immersive-secondary/40 hover:bg-immersive-card"
                  }`}
                >
                  <div className="space-y-3">
                    {/* Top tags row */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-extrabold px-2.5 py-0.5 rounded-full bg-[#FF4B3E]/10 text-[#FF4B3E] uppercase tracking-wider">
                          COURSE 0{course.number}
                        </span>
                        <span className="text-xs font-bold text-immersive-text-secondary">
                          {course.provider}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-1.5 text-xs font-bold text-amber-500 bg-amber-500/10 px-2.5 py-0.5 rounded-full">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        <span>{course.rating}</span>
                        <span className="text-[10px] text-immersive-text-secondary font-normal font-mono">
                          ({course.reviewsCount})
                        </span>
                      </div>
                    </div>

                    {/* Course Title */}
                    <h4 className="text-base sm:text-lg font-extrabold text-immersive-text-primary leading-snug">
                      {course.title}
                    </h4>

                    {/* Description */}
                    <p className="text-xs text-immersive-text-secondary leading-relaxed font-medium">
                      {course.description}
                    </p>

                    {/* Career Anchor Impact */}
                    <div className="p-3 bg-immersive-bg rounded-xl border border-immersive-border/60 text-xs">
                      <strong className="text-immersive-text-primary block font-mono text-[10px] uppercase text-[#FF4B3E] mb-0.5">
                        CAREER ANCHOR VALUE
                      </strong>
                      <span className="text-immersive-text-secondary font-medium">
                        {course.careerImpact}
                      </span>
                    </div>

                    {/* Skills pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {course.skills.map(s => (
                        <span key={s} className="text-[10px] font-medium bg-immersive-card border border-immersive-border px-2 py-0.5 rounded text-immersive-text-secondary">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Row */}
                  <div className="pt-4 mt-3 border-t border-immersive-border/40 flex items-center justify-between text-xs">
                    <span className="text-immersive-text-secondary font-mono text-[11px]">
                      {course.trackTier}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEnrollCourse(course);
                      }}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#FF4B3E] hover:brightness-110 transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <span>Enroll in Track</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Syllabus & Track Anchor Deep-Dive */}
          <div className="lg:col-span-5 sticky top-28 bg-immersive-card border border-immersive-border rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl shadow-immersive-shadow">
            
            <div className="space-y-2 border-b border-immersive-border/40 pb-5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 uppercase tracking-wider">
                  {selectedCourse.popularBadge}
                </span>
                <span className="text-xs font-mono font-bold text-immersive-text-secondary">
                  Level: {selectedCourse.level}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-immersive-text-primary mt-1">
                {selectedCourse.title}
              </h3>
              <p className="text-xs font-mono text-immersive-secondary">
                Accredited by {selectedCourse.provider} • {selectedCourse.duration}
              </p>
            </div>

            {/* Why This Course Matters */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-[#FF4B3E] uppercase tracking-wider block">
                WHY THIS COURSE MATTERS
              </span>
              <p className="text-xs sm:text-sm text-immersive-text-secondary leading-relaxed font-medium">
                {selectedCourse.careerImpact}
              </p>
            </div>

            {/* Key Skills You Will Master */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-immersive-text-primary uppercase tracking-wider block">
                CORE TECHNICAL COMPETENCIES
              </span>
              <div className="space-y-2">
                {selectedCourse.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2.5 text-xs text-immersive-text-primary">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="font-semibold">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Track Pricing & Inclusions */}
            <div className="p-4 bg-immersive-bg rounded-2xl border border-immersive-border space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                  AVAILABLE IN CAREER TRACKS
                </span>
                <span className="text-sm font-black text-[#FF4B3E]">
                  $23 / $30 / $45
                </span>
              </div>
              <ul className="text-xs text-immersive-text-secondary space-y-1.5 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#FF4B3E] rounded-full" />
                  <span>500 AI Mentor credits included</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#FF4B3E] rounded-full" />
                  <span>Hands-on practical code execution sandbox</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#FF4B3E] rounded-full" />
                  <span>Verified portfolio deliverable & recruiter proof</span>
                </li>
              </ul>
            </div>

            {/* Big Action Button */}
            <button
              onClick={() => handleEnrollCourse(selectedCourse)}
              className="w-full py-4 rounded-xl text-sm font-bold text-white bg-[#FF4B3E] hover:brightness-110 shadow-lg shadow-[#FF4B3E]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Enroll in Career Track ($23 / $30 / $45)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
