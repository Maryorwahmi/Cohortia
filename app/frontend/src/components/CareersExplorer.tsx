import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  type TransitionEvent as ReactTransitionEvent,
} from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Code2,
  Star,
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
  image: string;
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
    popularBadge: "MOST POPULAR CAREER ANCHOR",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85",
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
    popularBadge: "HIGH INDUSTRY DEMAND",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=85",
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
    popularBadge: "TOP RATED FRONTEND",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
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
    popularBadge: "COMPREHENSIVE PATHWAY",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=85",
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
    popularBadge: "EASIEST ENTRY POINT",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
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
    popularBadge: "TECHNICAL INTERVIEW READY",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85",
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
    popularBadge: "GOLD STANDARD CS FOUNDATION",
    image: "/vision-boards/cs50s-introduction-to-computer-science/module-00/chapter-00/Overview.jpg",
  },
];

interface CareersExplorerProps {
  onOpenWizard?: () => void;
}

export default function CareersExplorer({ onOpenWizard }: CareersExplorerProps) {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState<FeaturedCourse>(FEATURED_COURSES[0]);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [trackIndex, setTrackIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [dragOffset, setDragOffset] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const dragRef = useRef<{ pointerId: number; startX: number; moved: boolean } | null>(null);
  const suppressClickRef = useRef(false);
  const filteredCourses = FEATURED_COURSES;
  const coursePages: FeaturedCourse[][] = [];
  for (let index = 0; index < filteredCourses.length; index += slidesPerView) {
    const page = filteredCourses.slice(index, index + slidesPerView);
    if (page.length < slidesPerView && coursePages.length > 0) {
      coursePages.push(filteredCourses.slice(-slidesPerView));
      break;
    }
    coursePages.push(page);
  }
  const pageCount = coursePages.length;
  const pagesWithClones = pageCount > 1
    ? [coursePages[pageCount - 1], ...coursePages, coursePages[0]]
    : coursePages;
  const currentPage = pageCount === 0
    ? 0
    : trackIndex === 0
      ? pageCount - 1
      : trackIndex === pageCount + 1
        ? 0
        : trackIndex - 1;

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const tabletQuery = window.matchMedia("(min-width: 640px)");
    const updateSlidesPerView = () => {
      setSlidesPerView(desktopQuery.matches ? 3 : tabletQuery.matches ? 2 : 1);
    };
    updateSlidesPerView();
    desktopQuery.addEventListener("change", updateSlidesPerView);
    tabletQuery.addEventListener("change", updateSlidesPerView);
    window.addEventListener("resize", updateSlidesPerView);
    return () => {
      desktopQuery.removeEventListener("change", updateSlidesPerView);
      tabletQuery.removeEventListener("change", updateSlidesPerView);
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateReducedMotion = () => setPrefersReducedMotion(mediaQuery.matches);
    updateReducedMotion();
    mediaQuery.addEventListener("change", updateReducedMotion);
    return () => mediaQuery.removeEventListener("change", updateReducedMotion);
  }, []);

  useLayoutEffect(() => {
    setTransitionEnabled(false);
    setTrackIndex(pageCount > 1 ? 1 : 0);
    setDragOffset(0);
    requestAnimationFrame(() => setTransitionEnabled(true));
  }, [pageCount, slidesPerView]);

  const goToNextPage = () => {
    if (pageCount < 2) return;
    const nextPage = (currentPage + 1) % pageCount;
    setTrackIndex(prefersReducedMotion
      ? nextPage + 1
      : nextPage === 0 ? pageCount + 1 : nextPage + 1);
  };

  const goToPreviousPage = () => {
    if (pageCount < 2) return;
    const previousPage = (currentPage - 1 + pageCount) % pageCount;
    setTrackIndex(prefersReducedMotion
      ? previousPage + 1
      : previousPage === pageCount - 1 ? 0 : previousPage + 1);
  };

  useEffect(() => {
    if (pageCount < 2 || isHovered || isFocused || isDragging || prefersReducedMotion) return;
    const timer = window.setInterval(goToNextPage, 5000);
    return () => window.clearInterval(timer);
  }, [currentPage, isDragging, isFocused, isHovered, pageCount, prefersReducedMotion]);

  const handleTrackTransitionEnd = (event: ReactTransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || event.propertyName !== "transform") return;
    if (trackIndex !== 0 && trackIndex !== pageCount + 1) return;
    setTransitionEnabled(false);
    setTrackIndex(trackIndex === 0 ? pageCount : 1);
    requestAnimationFrame(() => setTransitionEnabled(true));
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!event.isPrimary || (event.pointerType === "mouse" && event.button !== 0)) return;
    if ((event.target as HTMLElement).closest("[data-carousel-control]")) return;
    dragRef.current = { pointerId: event.pointerId, startX: event.clientX, moved: false };
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const offset = event.clientX - drag.startX;
    if (Math.abs(offset) > 5 && !drag.moved) {
      drag.moved = true;
      event.currentTarget.setPointerCapture(event.pointerId);
      setIsDragging(true);
    }
    if (drag.moved) setDragOffset(offset);
  };

  const finishPointerDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const offset = event.clientX - drag.startX;
    if (drag.moved) {
      suppressClickRef.current = true;
      window.setTimeout(() => { suppressClickRef.current = false; }, 0);
      if (Math.abs(offset) > 50) {
        if (offset < 0) goToNextPage();
        else goToPreviousPage();
      }
    }
    dragRef.current = null;
    setDragOffset(0);
    setIsDragging(false);
  };

  const cancelPointerDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragRef.current?.pointerId !== event.pointerId) return;
    dragRef.current = null;
    setDragOffset(0);
    setIsDragging(false);
  };

  const handleCarouselKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToPreviousPage();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goToNextPage();
    }
  };

  const enroll = () => {
    if (onOpenWizard) onOpenWizard();
    else navigate("/signup");
  };

  return (
    <section id="courses-explorer" className="relative overflow-hidden border-t border-immersive-border/40 bg-immersive-bg py-16 text-left sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#ff4b3e]/[0.07] blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-[38rem] h-96 w-96 rounded-full bg-blue-500/[0.06] blur-3xl" />

      <div className="relative mx-auto max-w-[1600px] px-3 sm:px-4 lg:px-6">
        <div className="mb-10 grid gap-8 lg:mb-14 lg:grid-cols-[1fr_0.88fr] lg:items-end">
          <div className="max-w-2xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ff4b3e]/20 bg-[#ff4b3e]/[0.07] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#e83e32] dark:text-[#ff786e]">
              <Award className="h-3.5 w-3.5" aria-hidden="true" />
              Learn with leading institutions
            </span>
            <h2 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-immersive-text-primary sm:text-5xl lg:text-[3.5rem]">
              Explore computer science courses
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-immersive-text-secondary sm:text-lg">
              Learn from respected universities and industry leaders, then turn new skills into work you can show.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5 lg:justify-end">
            {["Meta", "IBM", "Harvard", "University of Michigan"].map((partner) => (
              <span key={partner} className="rounded-full border border-immersive-border bg-immersive-card px-4 py-2 text-sm font-semibold text-immersive-text-secondary shadow-sm">
                {partner}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mb-12 grid min-h-[390px] overflow-hidden rounded-[2rem] bg-slate-950 shadow-xl shadow-slate-950/10 lg:mb-16 lg:min-h-[430px] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10 flex flex-col items-start justify-center p-7 sm:p-10 lg:p-14">
            <div className="mb-6 flex items-center gap-3">
              <span className={`grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br ${selectedCourse.providerLogoColor} text-sm font-extrabold text-white shadow-lg`}>
                {selectedCourse.provider === "Harvard University" ? "H" : selectedCourse.provider.slice(0, 1)}
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">Featured learning path</p>
                <p className="mt-0.5 text-sm font-semibold text-white">{selectedCourse.provider}</p>
              </div>
            </div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#ff8177]">{selectedCourse.popularBadge}</p>
            <h3 className="max-w-xl font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              A clearer path from curious to career-ready.
            </h3>
            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-300 sm:text-base">
              Explore {selectedCourse.title} and build practical skills with a guided Cohortia career track.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={enroll}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#ff4b3e] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#ff4b3e]/20 transition hover:bg-[#e83e32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Find your learning path <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <a
                href="#course-catalog"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Browse courses
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-white/65">
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden="true" /> Hands-on projects</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden="true" /> Guided career tracks</span>
            </div>
          </div>
          <div className="absolute inset-0 lg:relative">
            <img
              src={selectedCourse.image}
              alt=""
              className="h-full w-full object-cover opacity-35 lg:opacity-100"
              fetchPriority="high"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-slate-950/10 lg:from-slate-950/15 lg:via-transparent lg:to-slate-950/10" />
            <div className="absolute bottom-7 right-7 hidden max-w-xs rounded-2xl border border-white/20 bg-slate-950/70 p-4 text-white shadow-2xl backdrop-blur-md sm:block lg:bottom-8 lg:right-8">
              <div className="flex items-center gap-1.5 text-sm font-bold">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                {selectedCourse.rating.toFixed(1)}
                <span className="text-xs font-medium text-white/60">({selectedCourse.reviewsCount})</span>
              </div>
              <p className="mt-2 line-clamp-2 text-sm font-semibold leading-snug">{selectedCourse.title}</p>
            </div>
          </div>
        </div>

        <div id="course-catalog" className="scroll-mt-24">
          <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#e83e32] dark:text-[#ff786e]">The course catalog</p>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-immersive-text-primary sm:text-3xl">Find your next skill</h3>
            </div>
            <p className="text-sm text-immersive-text-secondary">
              Showing <span className="font-semibold text-immersive-text-primary">{filteredCourses.length}</span> courses
            </p>
          </div>

          <div
            role="region"
            aria-label="Course carousel"
            aria-roledescription="carousel"
            tabIndex={0}
            onKeyDown={handleCarouselKeyDown}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocusCapture={() => setIsFocused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsFocused(false);
            }}
            className="relative outline-none focus-visible:rounded-2xl focus-visible:ring-2 focus-visible:ring-[#ff4b3e] focus-visible:ring-offset-4 focus-visible:ring-offset-immersive-bg"
          >
            <div
              className="overflow-hidden touch-pan-y"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={finishPointerDrag}
              onPointerCancel={cancelPointerDrag}
              onClickCapture={(event) => {
                if (!suppressClickRef.current) return;
                suppressClickRef.current = false;
                event.preventDefault();
                event.stopPropagation();
              }}
            >
              <div
                className={`flex ${transitionEnabled && !prefersReducedMotion && !isDragging ? "transition-transform duration-500 ease-in-out" : "transition-none"} ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
                style={{ transform: `translate3d(calc(${-trackIndex * 100}% + ${dragOffset}px), 0, 0)` }}
                onTransitionEnd={handleTrackTransitionEnd}
              >
                {pagesWithClones.map((page, pageIndex) => {
                  const isClone = pageCount > 1 && (pageIndex === 0 || pageIndex === pagesWithClones.length - 1);
                  const actualPageIndex = isClone
                    ? pageIndex === 0 ? pageCount - 1 : 0
                    : pageIndex - (pageCount > 1 ? 1 : 0);
                  const isCurrentPage = actualPageIndex === currentPage;
                  return (
                    <div
                      key={`page-${pageIndex}`}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`Courses ${page[0].number} to ${page[page.length - 1].number} of ${filteredCourses.length}`}
                      aria-hidden={isClone || !isCurrentPage}
                      className="grid w-full flex-none auto-rows-fr grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3"
                    >
                      {page.map((course) => {
                        const isSelected = selectedCourse.id === course.id;
                        return (
                          <article
                            key={`${pageIndex}-${course.id}`}
                            data-selected={isSelected}
                            className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-immersive-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 ${
                              isSelected ? "border-[#ff4b3e]/60 ring-1 ring-[#ff4b3e]/30" : "border-immersive-border"
                            }`}
                          >
                            <button
                              type="button"
                              tabIndex={isClone || !isCurrentPage ? -1 : undefined}
                              onClick={() => setSelectedCourse(course)}
                              aria-pressed={isSelected}
                              className="relative block aspect-[16/9] w-full overflow-hidden bg-slate-900 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#ff4b3e]"
                            >
                              <img src={course.image} alt="" loading="lazy" draggable={false} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/10" />
                              <span className={`absolute left-4 top-4 rounded-full bg-gradient-to-r ${course.providerLogoColor} px-3 py-1.5 text-xs font-bold text-white shadow-lg`}>
                                {course.provider}
                              </span>
                              <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-slate-950/45 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur">
                                {course.popularBadge}
                              </span>
                            </button>
                            <div className="flex flex-1 flex-col p-5 sm:p-6">
                              <div className="flex items-center justify-between gap-2 text-xs text-immersive-text-secondary">
                                <span className="inline-flex items-center gap-1.5"><BookOpen className="h-3.5 w-3.5" aria-hidden="true" /> {course.level}</span>
                                <span className="inline-flex shrink-0 items-center gap-1 text-amber-500">
                                  <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                                  <span className="font-bold">{course.rating.toFixed(1)}</span>
                                  <span className="text-immersive-text-secondary">({course.reviewsCount})</span>
                                </span>
                              </div>
                              <button
                                type="button"
                                tabIndex={isClone || !isCurrentPage ? -1 : undefined}
                                onClick={() => setSelectedCourse(course)}
                                aria-pressed={isSelected}
                                className="mt-3 text-left font-display text-lg font-bold leading-snug text-immersive-text-primary transition hover:text-[#e83e32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ff4b3e] sm:text-xl"
                              >
                                {course.title}
                              </button>
                              <p className="mt-3 line-clamp-3 text-sm leading-6 text-immersive-text-secondary">{course.description}</p>
                              <div className="mt-5 flex items-center gap-4 border-t border-immersive-border/70 pt-4 text-xs font-medium text-immersive-text-secondary">
                                <span className="inline-flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" aria-hidden="true" /> {course.duration}</span>
                                <span className="inline-flex items-center gap-1.5"><Code2 className="h-3.5 w-3.5" aria-hidden="true" /> {course.category}</span>
                              </div>
                              <button
                                type="button"
                                tabIndex={isClone ? -1 : undefined}
                                onClick={enroll}
                                className="mt-auto inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-immersive-border px-4 py-2.5 text-sm font-bold text-immersive-text-primary transition hover:border-[#ff4b3e] hover:bg-[#ff4b3e] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4b3e]"
                              >
                                Explore learning path <ArrowRight className="h-4 w-4" aria-hidden="true" />
                              </button>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              type="button"
              data-carousel-control
              onClick={goToPreviousPage}
              disabled={pageCount < 2}
              aria-label="Previous courses"
              className="absolute left-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-immersive-border bg-immersive-card/95 text-immersive-text-primary shadow-lg transition hover:border-[#ff4b3e] hover:text-[#e83e32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4b3e] disabled:cursor-not-allowed disabled:opacity-40 sm:-left-5"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              data-carousel-control
              onClick={goToNextPage}
              disabled={pageCount < 2}
              aria-label="Next courses"
              className="absolute right-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-immersive-border bg-immersive-card/95 text-immersive-text-primary shadow-lg transition hover:border-[#ff4b3e] hover:text-[#e83e32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4b3e] disabled:cursor-not-allowed disabled:opacity-40 sm:-right-5"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="mt-6 flex min-h-3 items-center justify-center gap-2" role="group" aria-label="Choose course carousel page">
              {coursePages.map((_, pageIndex) => (
                <button
                  key={pageIndex}
                  type="button"
                  data-carousel-control
                  onClick={() => setTrackIndex(pageIndex + 1)}
                  aria-label={`Go to course page ${pageIndex + 1} of ${pageCount}`}
                  aria-current={currentPage === pageIndex ? "true" : undefined}
                  className={`h-2.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4b3e] ${
                    currentPage === pageIndex ? "w-7 bg-[#ff4b3e]" : "w-2.5 bg-immersive-text-secondary/30 hover:bg-immersive-text-secondary/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
