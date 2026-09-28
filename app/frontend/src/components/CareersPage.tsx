import { useState, useMemo, useEffect } from "react";
import { Search, Sliders, ChevronRight, GraduationCap, TrendingUp, Sparkles, Compass, Shield, ArrowRight, Star, ArrowUpRight, CheckCircle, Flame, BookOpen, Zap } from "lucide-react";
import { careerApi, Career, catalogCourseApi, CatalogCourse } from "../services/api";

interface CareerPath extends Career {
  tags: string[];
  image: string;
}

interface CoveredCategory {
  id: string;
  name: string;
  careerIds: string[];
}

const POPULAR_FLAGSHIP_COURSES = [
  {
    number: 1,
    title: "IBM Full-Stack Software Developer Professional Certificate",
    provider: "IBM",
    badge: "CAREER-TRANSITION ANCHOR",
    accent: "border-blue-500/40 bg-blue-500/10 text-blue-400",
    description: "Broad full-stack foundation covering front-end, back-end, databases, APIs, Git, containers and development workflows. Very useful as a career-transition anchor.",
    skills: ["Front-End & React", "Back-End & Node.js", "Databases & APIs", "Git & Containers", "Dev Workflows"],
    rating: 4.9,
    enrolled: "28.4k learners",
    level: "Beginner → Intermediate"
  },
  {
    number: 2,
    title: "Meta Back-End Developer Professional Certificate",
    provider: "Meta",
    badge: "BACKEND SPECIALIZATION",
    accent: "border-cyan-500/40 bg-cyan-500/10 text-cyan-400",
    description: "Strong specialization for backend careers, with practical backend technologies and development concepts.",
    skills: ["Python & Django", "RESTful APIs", "Database Tuning & SQL", "Linux & Git", "Microservices"],
    rating: 4.8,
    enrolled: "19.2k learners",
    level: "Intermediate"
  },
  {
    number: 3,
    title: "Meta Front-End Developer Professional Certificate",
    provider: "Meta",
    badge: "TOP FRONTEND ENTRY",
    accent: "border-sky-500/40 bg-sky-500/10 text-sky-400",
    description: "Strong entry point into modern frontend development and suitable for learners building toward professional frontend roles.",
    skills: ["React & JavaScript", "HTML5 & Modern CSS", "UI/UX & Accessibility", "Jest Testing", "Client State"],
    rating: 4.9,
    enrolled: "34.1k learners",
    level: "Beginner → Intermediate"
  },
  {
    number: 4,
    title: "Meta Full-Stack Developer: Front-End & Back-End from Scratch Specialization",
    provider: "Meta",
    badge: "END-TO-END DEVELOPMENT",
    accent: "border-purple-500/40 bg-purple-500/10 text-purple-400",
    description: "Particularly valuable for learners who want an end-to-end development path rather than specializing immediately.",
    skills: ["Full-Stack Architecture", "React & Django/Node", "System Design", "Cloud Deployment", "Capstone Lab"],
    rating: 4.9,
    enrolled: "22.8k learners",
    level: "Beginner → Advanced"
  },
  {
    number: 5,
    title: "Python for Everybody Specialization",
    provider: "University of Michigan",
    badge: "EXTREMELY ACCESSIBLE ENTRY",
    accent: "border-amber-500/40 bg-amber-500/10 text-amber-400",
    description: "Extremely accessible entry point into programming and Python, making it useful for beginners and career pivots into technical/data-related fields.",
    skills: ["Python Logic", "Data Structures", "Web Scraping", "Databases & SQL", "Data Automation"],
    rating: 4.9,
    enrolled: "115k learners",
    level: "Beginner"
  },
  {
    number: 6,
    title: "JavaScript Algorithms and Data Structures",
    provider: "FreeCodeCamp",
    badge: "TECHNICAL INTERVIEW ANCHOR",
    accent: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
    description: "Builds a fundamental programming skill that supports frontend, backend and full-stack development.",
    skills: ["Big-O Complexity", "Sorting & Searching", "Graphs & Trees", "Recursion", "Problem Solving"],
    rating: 4.8,
    enrolled: "68k learners",
    level: "Intermediate"
  },
  {
    number: 7,
    title: "CS50's Introduction to Computer Science",
    provider: "Harvard University",
    badge: "GOLD STANDARD CS FOUNDATION",
    accent: "border-rose-500/40 bg-rose-500/10 text-rose-400",
    description: "Excellent broad computer-science foundation. Particularly useful for someone entering technology without a strong technical background.",
    skills: ["C & Low-Level Memory", "Algorithms & Pointers", "Python & SQL", "HTML/CSS/JS", "Computational Logic"],
    rating: 5.0,
    enrolled: "142k learners",
    level: "Beginner → Intermediate"
  }
];

const COVERED_CATEGORIES: CoveredCategory[] = [
  {id: "frontend-development", name: "Frontend Development", careerIds: ["frontend-development"]},
  {id: "backend-development", name: "Backend Development", careerIds: ["backend-development"]},
  {id: "data-analytics", name: "Data Analytics", careerIds: ["data-analytics"]},
  {id: "data-science", name: "Data Science", careerIds: ["data-science"]},
  {id: "ai-ml-engineering", name: "AI/ML Engineering", careerIds: ["ai-ml-engineering"]},
  {id: "cybersecurity", name: "Cybersecurity", careerIds: ["cybersecurity"]},
  {id: "cloud-engineering", name: "Cloud Engineering", careerIds: ["cloud-engineering"]},
  {id: "devops-engineering", name: "DevOps Engineering", careerIds: ["devops-engineering"]},
  {id: "ux-ui-design", name: "UX/UI Design", careerIds: ["ux-ui-design"]},
  {id: "qa-testing", name: "QA/Testing", careerIds: ["qa-testing"]},
  {id: "product-management", name: "Product Management", careerIds: ["product-management"]},
  {id: "full-stack-development", name: "Full-Stack Development", careerIds: ["full-stack-development"]},
];

const FALLBACK_CAREERS: CareerPath[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    category: "Technology & Engineering",
    difficulty: "Beginner",
    description: "Build fast, accessible, and beautiful web interfaces.",
    tags: ["HTML/CSS", "JavaScript", "React"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    category: "Data & Intelligence",
    difficulty: "Beginner",
    description: "Turn raw data into actionable business insights.",
    tags: ["SQL", "Excel / Sheets", "Data Visualization"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    category: "Technology & Engineering",
    difficulty: "Advanced",
    description: "Protect systems, networks, and data from threats.",
    tags: ["Networking", "Risk Assessment", "Threat Analysis"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&auto=format&fit=crop&q=80"
  }
];

const CATEGORY_IMAGES: Record<string, string> = {
  "Technology & Engineering": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=80",
  "Data & Intelligence": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=80",
  "Design & Creative": "https://images.unsplash.com/photo-1581291518655-9523c932dedf?w=500&auto=format&fit=crop&q=80",
  "Marketing & Content": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=80",
  "Product & Strategy": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop&q=80",
  "People & Operations": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=80",
};

function mapCareer(career: Career): CareerPath {
  let skills: string[] = [];
  try {
    skills = career.skills ? JSON.parse(career.skills) : [];
  } catch {
    skills = [];
  }

  return {
    ...career,
    tags: skills.length ? skills.slice(0, 3) : ["Self-paced", "Project-based", "Mentored"],
    image: career.image || CATEGORY_IMAGES[career.category] || CATEGORY_IMAGES["Technology & Engineering"],
  };
}

interface CareersPageProps {
  onOpenWizard: () => void;
  onSelectTrack: (trackId: string) => void;
}

export default function CareersPage({ onOpenWizard, onSelectTrack }: CareersPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(COVERED_CATEGORIES[0].id);
  const [selectedTrackDetails, setSelectedTrackDetails] = useState<CareerPath | null>(null);
  const [backendCareers, setBackendCareers] = useState<Career[]>([]);
  const [careersLoading, setCareersLoading] = useState(true);
  const [selectedCareerCourses, setSelectedCareerCourses] = useState<CatalogCourse[]>([]);
  const [allCatalogCourses, setAllCatalogCourses] = useState<CatalogCourse[]>([]);
  const [coursesLoading, setCoursesLoading] = useState(false);

  const selectedCoveredCategory = COVERED_CATEGORIES.find((category) => category.id === selectedCategory) || COVERED_CATEGORIES[0];

  useEffect(() => {
    setCareersLoading(true);
    careerApi.getAll()
      .then((res) => {
        setBackendCareers(res.data?.careers || []);
      })
      .catch(() => {})
      .finally(() => setCareersLoading(false));
  }, []);

  useEffect(() => {
    catalogCourseApi.getAll()
      .then((response) => setAllCatalogCourses(response.data?.courses || []))
      .catch(() => setAllCatalogCourses([]));
  }, []);

  const careersData = useMemo<CareerPath[]>(() => {
    if (backendCareers.length === 0) return FALLBACK_CAREERS;
    return backendCareers.map(mapCareer);
  }, [backendCareers]);

  // Filters calculation
  const filteredCareers = useMemo(() => {
    return careersData.filter((item) => {
      const matchesCategory = selectedCategory === "All" || item.id === selectedCategory;
      const cleanSearch = searchQuery.toLowerCase().trim();
      const matchesSearch =
        cleanSearch === "" ||
        item.title.toLowerCase().includes(cleanSearch) ||
        item.description.toLowerCase().includes(cleanSearch) ||
        item.category.toLowerCase().includes(cleanSearch) ||
        item.tags.some((t) => t.toLowerCase().includes(cleanSearch));
      return matchesCategory && matchesSearch;
    });
  }, [careersData, searchQuery, selectedCategory]);

  const visibleCourses = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    const courses = query ? allCatalogCourses : selectedCareerCourses;
    return courses.filter((course) => {
      if (!query) return true;
      return [course.title, course.provider, course.description, course.subcategory, course.category, course.skills]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(query);
    });
  }, [allCatalogCourses, selectedCareerCourses, searchQuery]);

  const selectCategory = async (category: CoveredCategory) => {
    setSelectedCategory(category.id);
    setCoursesLoading(true);
    try {
      const responses = await Promise.all(category.careerIds.map((careerId) => catalogCourseApi.getByCareer(careerId)));
      const courses = responses.flatMap((response) => response.data?.courses || []);
      setSelectedCareerCourses(Array.from(new Map(courses.map((course) => [course.id, course])).values()));
    } catch {
      setSelectedCareerCourses([]);
    } finally {
      setCoursesLoading(false);
    }
  };

  useEffect(() => {
    selectCategory(COVERED_CATEGORIES[0]);
  }, []);

  return (
    <div className="pt-20 pb-8 min-h-screen bg-immersive-bg relative">
      {/* Background Graphic Accents */}
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-immersive-secondary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Headline Section */}
      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6 text-center mt-6 mb-10">
        <span className="text-xs font-mono font-bold tracking-widest text-[#FF4B3E] uppercase block mb-3">
          | CAREER GROWTH
        </span>
        <h1 className="text-4xl sm:text-6xl font-sans font-extrabold text-immersive-text-primary tracking-tight max-w-4xl mx-auto leading-tight">
          Explore Major <span className="text-[#FF4B3E]">Careers</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-immersive-text-secondary max-w-2xl mx-auto font-medium leading-relaxed">
          Curated, in-demand paths with clear roadmaps, hands-on projects, and mentor support. Use the search below to find the track that matches your goal.
        </p>
      </div>

      {/* NEW & POPULAR: Trending Flagship Professional Certificates */}
      <section className="py-12 border-t border-immersive-border/20 relative">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#FF4B3E] uppercase bg-[#FF4B3E]/10 border border-[#FF4B3E]/20 px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-2">
                <Flame className="w-3.5 h-3.5 text-[#FF4B3E]" />
                <span>NEW & POPULAR FLAGSHIP CURRICULA</span>
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-immersive-text-primary tracking-tight">
                Trending Courses & <span className="text-[#FF4B3E]">Professional Certificates</span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-immersive-text-secondary max-w-2xl">
                These globally accredited programs from Meta, IBM, and Harvard anchor Cohortia's practical tracks ($23 Pivot, $30 Upskill, $45 Lead).
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                7 Accredited Pathways
              </span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POPULAR_FLAGSHIP_COURSES.map((course) => (
              <div
                key={course.number}
                className="bg-immersive-card border border-immersive-border/60 hover:border-[#FF4B3E]/40 rounded-3xl p-6 transition-all duration-300 shadow-xl shadow-immersive-shadow hover:shadow-[0_4px_30px_rgba(255,75,62,0.12)] flex flex-col justify-between group"
              >
                <div className="space-y-3.5">
                  {/* Top Badge & Rating Row */}
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-[9px] font-mono font-extrabold px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${course.accent}`}>
                      {course.badge}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      <span>{course.rating}</span>
                      <span className="text-[10px] text-immersive-text-secondary font-mono font-normal">
                        ({course.enrolled})
                      </span>
                    </div>
                  </div>

                  {/* Title & Provider */}
                  <div>
                    <span className="text-[10px] font-mono font-bold text-immersive-secondary block uppercase">
                      {course.provider} • {course.level}
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-immersive-text-primary leading-snug group-hover:text-[#FF4B3E] transition-colors mt-0.5">
                      {course.title}
                    </h3>
                  </div>

                  {/* Description & Impact */}
                  <p className="text-xs text-immersive-text-secondary leading-relaxed font-medium">
                    {course.description}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {course.skills.map(s => (
                      <span key={s} className="text-[10px] font-medium bg-immersive-bg border border-immersive-border px-2 py-0.5 rounded text-immersive-text-secondary">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 mt-4 border-t border-immersive-border/40 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-emerald-500 font-bold">
                    ✓ Available in Tracks
                  </span>
                  <button
                    onClick={onOpenWizard}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-[#FF4B3E] hover:brightness-110 shadow-md shadow-[#FF4B3E]/20 transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <span>Start in Track</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* How You Grow Section */}
      <section className="py-12 border-t border-b border-immersive-border/20 bg-immersive-card/30 relative">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-[#FF4B3E] uppercase block mb-2">
              | CHOOSE YOUR CAREER TRACK
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-immersive-text-primary">
              How You <span className="text-[#FF4B3E]">Grow</span>
            </h2>
            <p className="mt-3 text-sm text-immersive-text-secondary max-w-xl mx-auto">
              Cohortia offers three structured career-development paths tailored around your current stage and goal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Track 1: Pivot into a new career */}
            <div className="bg-immersive-card border border-immersive-border/60 hover:border-[#FF4B3E]/50 rounded-3xl p-6 sm:p-7 transition-all duration-300 shadow-xl shadow-immersive-shadow hover:shadow-[0_4px_30px_rgba(255,75,62,0.12)] flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-extrabold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-500 uppercase tracking-wider inline-block">
                    CAREER TRANSITION
                  </span>
                  <div className="text-right">
                    <span className="text-2xl font-black text-[#FF4B3E]">$23</span>
                    <span className="text-[10px] font-mono text-immersive-text-secondary block">total track</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-immersive-text-primary mb-2">
                  Pivot into a new career
                </h3>
                <p className="text-xs text-immersive-text-secondary leading-relaxed mb-6 font-medium">
                  For learners moving into a completely new field. Takes you from <strong>Beginner → Intermediate → Advanced</strong> with structured fundamentals, practical labs, and transition guidance.
                </p>

                <ul className="space-y-2.5 text-xs text-immersive-text-secondary mb-8 font-medium">
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                    <span><strong>5 Courses:</strong> 2 Beginner + 2 Intermediate + 1 Advanced</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                    <span><strong>500 AI Credits:</strong> Mentorship & learning assistance</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                    <span><strong>Practical Assistant:</strong> Projects, exercises & solutions</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                    <span><strong>Career Transition:</strong> Resume roadmap & portfolio proof</span>
                  </li>
                </ul>
              </div>

              <button 
                onClick={onOpenWizard}
                className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-[#FF4B3E] hover:brightness-110 shadow-lg shadow-[#FF4B3E]/20 transition-all cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>Enroll in Pivot Track ($23)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Track 2: Up-skill in my current role */}
            <div className="bg-immersive-card border border-[#FF4B3E]/30 hover:border-[#FF4B3E] rounded-3xl p-6 sm:p-7 transition-all duration-300 shadow-xl shadow-immersive-shadow hover:shadow-[0_4px_30px_rgba(255,75,62,0.15)] flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF4B3E]/5 rounded-full blur-xl pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-extrabold px-2.5 py-1 rounded bg-blue-500/10 text-blue-500 uppercase tracking-wider inline-block">
                    ROLE ACCELERATION
                  </span>
                  <div className="text-right">
                    <span className="text-2xl font-black text-[#FF4B3E]">$30</span>
                    <span className="text-[10px] font-mono text-immersive-text-secondary block">total track</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-immersive-text-primary mb-2">
                  Up-skill in my current role
                </h3>
                <p className="text-xs text-immersive-text-secondary leading-relaxed mb-6 font-medium">
                  For professionals already in tech who want to sharpen existing skills, solve challenging workplace problems, and accelerate toward promotion.
                </p>

                <ul className="space-y-2.5 text-xs text-immersive-text-secondary mb-8 font-medium">
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                    <span><strong>4 Courses:</strong> 2 Beginner + 1 Intermediate + 1 Advanced</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                    <span><strong>500 AI Credits:</strong> Professional problem-solving</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                    <span><strong>Workplace Experience:</strong> Simulations & case studies</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                    <span><strong>Growth Support:</strong> Skills-gap audit & promotion prep</span>
                  </li>
                </ul>
              </div>

              <button 
                onClick={onOpenWizard}
                className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-[#FF4B3E] hover:brightness-110 shadow-lg shadow-[#FF4B3E]/20 transition-all cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>Enroll in Upskill Track ($30)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Track 3: Lead & Specialize */}
            <div className="bg-immersive-card border border-purple-500/30 hover:border-purple-500 rounded-3xl p-6 sm:p-7 transition-all duration-300 shadow-xl shadow-immersive-shadow hover:shadow-[0_4px_30px_rgba(168,85,247,0.15)] flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-extrabold px-2.5 py-1 rounded bg-purple-500/10 text-purple-400 uppercase tracking-wider inline-block">
                    SENIOR & SPECIALIST
                  </span>
                  <div className="text-right">
                    <span className="text-2xl font-black text-[#FF4B3E]">$45</span>
                    <span className="text-[10px] font-mono text-immersive-text-secondary block">total track</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-immersive-text-primary mb-2">
                  Lead & Specialize
                </h3>
                <p className="text-xs text-immersive-text-secondary leading-relaxed mb-6 font-medium">
                  For experienced builders aiming for Tech Lead, Staff, or Domain Specialist. Focused on architecture depth, capstone deliverables, and leadership simulations.
                </p>

                <ul className="space-y-2.5 text-xs text-immersive-text-secondary mb-8 font-medium">
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span><strong>2 Deep Courses:</strong> 1 Intermediate + 1 Advanced</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span><strong>Advanced Assistant:</strong> Architecture & strategic reviews</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span><strong>Portfolio Capstone:</strong> Production-defining deliverables</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span><strong>Leadership Readiness:</strong> Senior interview & team coaching</span>
                  </li>
                </ul>
              </div>

              <button 
                onClick={onOpenWizard}
                className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-purple-600 hover:brightness-110 shadow-lg shadow-purple-600/20 transition-all cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>Enroll in Lead & Specialize ($45)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Search & Filters (Clean without duplicate heading) */}
      <section className="py-12">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search Box */}
          <div className="max-w-xl mx-auto mb-10 relative">
            <div className="absolute inset-y-0 left-0 pl-4.5 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-immersive-text-secondary" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses, providers, or skills..."
              className="w-full pl-12 pr-4 py-4 bg-immersive-card border border-immersive-border hover:border-immersive-secondary/40 focus:border-immersive-secondary rounded-2xl text-sm font-medium text-immersive-text-primary placeholder:text-immersive-text-secondary/60 focus:outline-none shadow-[0_4px_20px_var(--immersive-shadow)] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-mono text-immersive-text-secondary hover:text-immersive-text-primary"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12 max-w-5xl mx-auto">
            {COVERED_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => selectCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#FF4B3E] text-immersive-text-primary shadow-[0_4px_15px_rgba(255,75,62,0.25)]"
                    : "bg-immersive-card border border-immersive-border hover:border-[#FF4B3E]/30 text-immersive-text-secondary hover:text-immersive-text-primary"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between max-w-[1600px] mx-auto mb-5">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#FF4B3E] uppercase">SELECTED FIELD</span>
              <h3 className="text-2xl font-extrabold text-immersive-text-primary mt-1">{selectedCoveredCategory.name}</h3>
            </div>
            <span className="text-xs text-immersive-text-secondary">{visibleCourses.length} {searchQuery.trim() ? "matching courses" : "connected courses"}</span>
          </div>

          {/* Careers Grid */}
          {careersLoading || coursesLoading ? (
            <div className="text-center py-16">
              <div className="animate-pulse text-immersive-secondary font-mono text-sm">Loading courses...</div>
            </div>
          ) : visibleCourses.length === 0 ? (
            <div className="text-center py-16 bg-immersive-card border border-immersive-border/40 rounded-3xl max-w-3xl mx-auto">
              <Compass className="w-12 h-12 text-[#FF4B3E]/40 mx-auto mb-4 animate-pulse" />
              <h3 className="text-lg font-bold text-immersive-text-primary">No career paths found</h3>
              <p className="text-xs text-immersive-text-secondary mt-1.5 max-w-md mx-auto">
                No courses matched your search query "{searchQuery}" in this field.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                }}
                className="mt-6 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#FF4B3E]/10 text-[#FF4B3E] hover:bg-[#FF4B3E] hover:text-immersive-text-primary transition-all cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {visibleCourses.map((course) => {
                let tags: string[] = [];
                try { tags = course.skills ? JSON.parse(course.skills) : []; } catch { tags = []; }
                return (
                  <div
                    key={course.id}
                    className="group bg-immersive-card border border-immersive-border/65 hover:border-[#FF4B3E]/40 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_var(--immersive-shadow)] flex flex-col justify-between relative overflow-hidden text-left"
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#FF4B3E]/2.5 rounded-full blur-xl group-hover:bg-[#FF4B3E]/5 transition-all duration-500 pointer-events-none" />
                    
                    <div>
                      {/* Career Card Thumbnail Image */}
                      <div className="relative h-36 w-full mb-4 overflow-hidden rounded-xl border border-immersive-border/40 bg-immersive-bg">
                        <img 
                          src={course.image || CATEGORY_IMAGES[course.subcategory] || CATEGORY_IMAGES["Technology & Engineering"]} 
                          alt={course.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c14]/40 to-transparent" />
                      </div>

                      {/* Top Header Badge Row */}
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[9px] font-mono font-extrabold text-[#FF4B3E]/90 bg-[#FF4B3E]/10 border border-[#FF4B3E]/20 px-2 py-0.5 rounded uppercase tracking-wider">
                          {course.level || course.type || "COURSE"}
                        </span>
                        <span className="text-[10px] font-mono text-immersive-text-secondary/60 font-semibold truncate max-w-[120px]">
                          {course.provider || course.subcategory}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-immersive-text-primary group-hover:text-[#FF4B3E] transition-colors line-clamp-1 mb-2.5">
                        {course.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-immersive-text-secondary/85 leading-relaxed mb-6 font-medium line-clamp-3">
                        {course.description || `${course.title} from ${course.provider || "an external provider"}.`}
                      </p>
                    </div>

                    <div>
                      {/* Skill tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5.5">
                        {tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-medium bg-immersive-bg border border-immersive-border px-2 py-0.5 rounded text-immersive-text-secondary hover:text-immersive-text-primary transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Bottom action */}
                      <button
                        onClick={() => onSelectTrack(course.id)}
                        className="text-xs font-bold text-[#FF4B3E] hover:text-[#FF4B3E]/85 transition-colors inline-flex items-center space-x-1 cursor-pointer"
                      >
                        <span>View course</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Help / Callout Guidance Banner */}
      <section className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6 py-8">
        <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left relative overflow-hidden shadow-2xl shadow-immersive-shadow">
          <div className="absolute top-0 right-0 w-64 h-64 bg-immersive-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="space-y-2 max-w-xl z-10">
            <h3 className="text-2xl font-extrabold text-immersive-text-primary">Not sure which career fits you?</h3>
            <p className="text-xs text-immersive-text-secondary font-medium">
              Sign up and our Cohortia mentor will help you pick the right track. Find perfect alignments using our system checks.
            </p>
          </div>
          <button
            onClick={onOpenWizard}
            className="mt-6 md:mt-0 px-6 py-3.5 rounded-xl text-sm font-bold text-immersive-text-primary bg-immersive-primary hover:brightness-110 shadow-lg shadow-immersive-shadow shadow-immersive-primary/20 hover:-translate-y-0.5 transition-all flex items-center space-x-2 shrink-0 cursor-pointer"
          >
            <span>Get Guidance</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Individual Track Modal Dialog details */}
      {selectedTrackDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-immersive-bg/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-immersive-card border border-immersive-border rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl shadow-immersive-shadow relative text-left animate-in zoom-in-95 duration-300">
            {/* Image mock at top */}
            <div className="h-44 bg-gradient-to-r from-immersive-primary/40 via-[#FF4B3E]/30 to-immersive-secondary/40 relative flex items-end p-6">
              <div className="absolute inset-0 bg-immersive-bg/20" />
              <div className="z-10">
                <span className="text-[10px] font-mono font-extrabold px-2 py-0.5 rounded bg-immersive-bg/40 text-[#FF4B3E] uppercase tracking-wider inline-block border border-[#FF4B3E]/20">
                  {selectedTrackDetails.difficulty} Level
                </span>
                <h2 className="text-2xl sm:text-3xl font-sans font-extrabold text-immersive-text-primary tracking-tight mt-2">
                  {selectedTrackDetails.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedTrackDetails(null)}
                className="absolute top-4 right-4 bg-immersive-bg/40 hover:bg-immersive-bg/60 border border-white/10 text-immersive-text-primary/80 hover:text-immersive-text-primary rounded-full p-2 text-xs font-mono focus:outline-none"
              >
                ✕
              </button>
            </div>

            {/* Content area */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-immersive-secondary uppercase tracking-widest">
                  TRACK OVERVIEW
                </h4>
                <p className="text-sm text-immersive-text-secondary leading-relaxed">
                  {selectedTrackDetails.description} This track offers direct mentorship-based training inside simulated enterprise cohorts. Acquire professional work logs, solve structured business problems, and interface directly with recruiter placement pools.
                </p>
              </div>

              {/* Curriculum items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-immersive-bg border border-immersive-border rounded-2xl p-4">
                  <div className="text-xs font-mono font-bold text-[#FF4B3E] uppercase tracking-wider mb-2">
                    CORE SKILLS YOU ACQUIRE:
                  </div>
                  <ul className="space-y-1.5 text-xs text-immersive-text-secondary font-medium">
                    {selectedTrackDetails.tags.map((skill) => (
                      <li key={skill} className="flex items-center space-x-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-immersive-secondary" />
                        <span>{skill}</span>
                      </li>
                    ))}
                    <li className="flex items-center space-x-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-immersive-secondary" />
                      <span>Team Agile Collaboration</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-immersive-bg border border-immersive-border rounded-2xl p-4 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono font-bold text-immersive-secondary uppercase tracking-wider mb-2">
                      ESTIMATED VELOCITY:
                    </div>
                    <div className="text-sm font-bold text-immersive-text-primary mb-1">
                      8-Week Immersive Track
                    </div>
                    <div className="text-xs text-immersive-text-secondary">
                      OR 16-Week Flex Part-time
                    </div>
                  </div>
                  <div className="text-xs text-[#FF4B3E] font-bold mt-2">
                    100% Refundable up to 14 days
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono font-bold text-immersive-secondary uppercase tracking-widest">
                    COURSES IN THIS CAREER PATH
                  </h4>
                  <span className="text-[11px] text-immersive-text-secondary">
                    {coursesLoading ? "Loading..." : `${selectedCareerCourses.length} courses`}
                  </span>
                </div>
                <div className="max-h-64 overflow-y-auto space-y-2 pr-1">
                  {coursesLoading ? (
                    <p className="text-xs text-immersive-text-secondary">Loading connected courses...</p>
                  ) : selectedCareerCourses.length === 0 ? (
                    <p className="text-xs text-immersive-text-secondary">No catalog courses are connected yet.</p>
                  ) : (
                    selectedCareerCourses.map((course) => (
                      <div key={course.id} className="bg-immersive-bg border border-immersive-border rounded-xl p-3">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-sm font-bold text-immersive-text-primary">{course.title}</p>
                            <p className="text-[11px] text-immersive-text-secondary mt-1">
                              {[course.provider, course.level, course.duration].filter(Boolean).join(" | ") || "Course details available"}
                            </p>
                          </div>
                          <span className="text-[10px] font-mono text-[#FF4B3E] shrink-0">{course.id}</span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Actions row */}
              <div className="pt-4 border-t border-immersive-border flex flex-col sm:flex-row justify-end gap-3">
                <button
                  onClick={() => setSelectedTrackDetails(null)}
                  className="px-5 py-3 rounded-xl text-xs font-bold text-immersive-text-secondary hover:text-immersive-text-primary border border-immersive-border hover:bg-immersive-card-hover transition-all cursor-pointer"
                >
                  Close details
                </button>
                <button
                  onClick={() => {
                    setSelectedTrackDetails(null);
                    onOpenWizard();
                  }}
                  className="px-6 py-3 rounded-xl text-xs font-bold text-immersive-text-primary bg-immersive-primary hover:brightness-110 shadow-lg shadow-immersive-shadow shadow-immersive-primary/20 transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <span>Apply for this cohort</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
