import { useState, useMemo, useEffect } from "react";
import { Search, Sliders, ChevronRight, GraduationCap, TrendingUp, Sparkles, Compass, Shield, ArrowRight, Star, ArrowUpRight, CheckCircle } from "lucide-react";
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

      {/* How You Grow Section */}
      <section className="py-10 border-t border-b border-immersive-border/20 bg-immersive-card/30 relative">
        <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-[#FF4B3E] uppercase block mb-2">
              | CHOOSE YOUR TRACK
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-immersive-text-primary">
              How You <span className="text-[#FF4B3E]">Grow</span>
            </h2>
            <p className="mt-3 text-sm text-immersive-text-secondary max-w-xl mx-auto">
              Every career path on Cohortia fits into one of three learner journeys designed for your stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Foundation Track */}
            <div className="bg-immersive-card border border-immersive-border/50 hover:border-immersive-secondary/50 rounded-2xl p-6 transition-all duration-300 shadow-md shadow-immersive-shadow hover:shadow-[0_4px_25px_var(--immersive-shadow)] flex flex-col justify-between group">
              <div>
                <span className="text-[10px] font-mono font-extrabold px-2.5 py-1 rounded bg-[#FF4B3E]/10 text-[#FF4B3E] uppercase tracking-wider inline-block mb-4">
                  FOUNDATION TRACK
                </span>
                <h3 className="text-xl font-bold text-immersive-text-primary mb-2">Career Starter</h3>
                <p className="text-xs text-immersive-text-secondary leading-relaxed mb-6 font-medium">
                  A clear starting point with direction, structure, and confidence for people entering the workforce.
                </p>
                <ul className="space-y-3 text-xs text-immersive-text-secondary mb-8 font-medium">
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                    <span>A simple roadmap path to begin</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                    <span>A supportive community</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                    <span>Beginner-friendly explanations</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                    <span>Small wins that build confidence</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={onOpenWizard}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-[#FF4B3E] bg-[#FF4B3E]/5 border border-[#FF4B3E]/20 hover:bg-[#FF4B3E] hover:text-immersive-text-primary transition-all cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>Start this track</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Growth Track */}
            <div className="bg-immersive-card border border-[#FF4B3E]/30 hover:border-[#FF4B3E] rounded-2xl p-6 transition-all duration-300 shadow-md shadow-immersive-shadow hover:shadow-[0_4px_30px_rgba(255,75,62,0.1)] flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF4B3E]/5 rounded-full blur-xl pointer-events-none" />
              <div>
                <span className="text-[10px] font-mono font-extrabold px-2.5 py-1 rounded bg-[#FF4B3E]/10 text-[#FF4B3E] uppercase tracking-wider inline-block mb-4">
                  GROWTH TRACK
                </span>
                <h3 className="text-xl font-bold text-immersive-text-primary mb-2">Level Up</h3>
                <p className="text-xs text-immersive-text-secondary leading-relaxed mb-6 font-medium">
                  A faster path to stronger skills, better roles, and better proof for professionals ready to grow.
                </p>
                <ul className="space-y-3 text-xs text-immersive-text-secondary mb-8 font-medium">
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                    <span>A roadmap that matches current skill</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                    <span>Advanced practice and feedback</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                    <span>Consistent accountability</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                    <span>Career-focused outputs like projects</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={onOpenWizard}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-immersive-text-primary bg-[#FF4B3E] hover:brightness-110 shadow-lg shadow-immersive-shadow shadow-[#FF4B3E]/20 transition-all cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>Start this track</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Experience Track */}
            <div className="bg-immersive-card border border-immersive-border/50 hover:border-immersive-secondary/50 rounded-2xl p-6 transition-all duration-300 shadow-md shadow-immersive-shadow hover:shadow-[0_4px_25px_var(--immersive-shadow)] flex flex-col justify-between group">
              <div>
                <span className="text-[10px] font-mono font-extrabold px-2.5 py-1 rounded bg-[#FF4B3E]/10 text-[#FF4B3E] uppercase tracking-wider inline-block mb-4">
                  INTERNSHIP / MENTORSHIP
                </span>
                <h3 className="text-xl font-bold text-immersive-text-primary mb-2">Experience Track</h3>
                <p className="text-xs text-immersive-text-secondary leading-relaxed mb-6 font-medium">
                  Work-like experience, feedback, and portfolio-ready output through internship-style briefs.
                </p>
                <ul className="space-y-3 text-xs text-immersive-text-secondary mb-8 font-medium">
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                    <span>Structured internship-style tasks</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                    <span>Deadlines and milestones</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                    <span>Feedback on deliverables</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                    <span>Proof of experience at the end</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={onOpenWizard}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-[#FF4B3E] bg-[#FF4B3E]/5 border border-[#FF4B3E]/20 hover:bg-[#FF4B3E] hover:text-immersive-text-primary transition-all cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>Start this track</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Search & Filters */}
      <section className="py-12">
        <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-[#FF4B3E] uppercase block mb-2">
              | COURSE CATALOG
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-immersive-text-primary">
              Explore Major <span className="text-[#FF4B3E]">Courses</span>
            </h2>
            <p className="mt-3 text-sm text-immersive-text-secondary">
              Choose one of our 12 covered fields to browse its course catalog.
            </p>
          </div>

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
