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
import {getCourseImage} from "../data/courseImages";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
} from "lucide-react";

export interface FeaturedCourse {
  id: string;
  number: number;
  title: string;
  provider: string;
  providerLogoColor: string;
  level: string;
  category: string;
  examCode: string;
  description: string;
  credentialType: string;
  popularBadge: string;
  image: string;
}

export const FEATURED_COURSES: FeaturedCourse[] = [
  {
    id: "comptia-security-sy0-701",
    number: 1,
    title: "CompTIA Security+ (SY0-701)",
    provider: "CompTIA",
    providerLogoColor: "from-blue-600 to-cyan-600",
    level: "Foundational",
    category: "Cyber Defense",
    examCode: "SY0-701",
    description: "Build foundational cybersecurity knowledge across security concepts, threats, architecture, operations, and security program management.",
    credentialType: "Certification exam",
    popularBadge: "SECURITY FOUNDATIONS",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "comptia-cybersecurity-analyst-cysa",
    number: 2,
    title: "CompTIA Cybersecurity Analyst (CySA+)",
    provider: "CompTIA",
    providerLogoColor: "from-cyan-600 to-teal-600",
    level: "Intermediate",
    category: "Cyber Defense",
    examCode: "CySA+",
    description: "Focus on behavioral analytics, threat detection, vulnerability management, incident response, and security monitoring.",
    credentialType: "Certification exam",
    popularBadge: "THREAT DETECTION & RESPONSE",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "certified-ethical-hacker-ceh-v13",
    number: 3,
    title: "Certified Ethical Hacker (CEH v13)",
    provider: "EC-Council",
    providerLogoColor: "from-rose-600 to-orange-600",
    level: "Advanced",
    category: "Offensive Security",
    examCode: "CEH v13",
    description: "Explore ethical hacking methods and tools for assessing systems, identifying weaknesses, and understanding attack techniques.",
    credentialType: "Certification exam",
    popularBadge: "ETHICAL HACKING",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "cissp-certified-information-systems-security-professional",
    number: 4,
    title: "CISSP – Certified Information Systems Security Professional",
    provider: "ISC2",
    providerLogoColor: "from-indigo-600 to-violet-600",
    level: "Advanced",
    category: "Cybersecurity Leadership",
    examCode: "CISSP",
    description: "Cover broad security leadership domains including security architecture, risk management, asset protection, and operations.",
    credentialType: "Certification exam",
    popularBadge: "SECURITY LEADERSHIP",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "aws-certified-security-specialty",
    number: 5,
    title: "AWS Certified Security – Specialty",
    provider: "AWS",
    providerLogoColor: "from-amber-500 to-orange-600",
    level: "Specialty",
    category: "Cloud Security",
    examCode: "SCS-C02",
    description: "Validate skills in securing AWS workloads, including identity, data protection, infrastructure security, monitoring, and incident response.",
    credentialType: "Certification exam",
    popularBadge: "CLOUD SECURITY",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85",
  },
];

const PLATFORM_COURSES: FeaturedCourse[] = [
  {
    id: "aws-certified-solutions-architect-associate",
    number: 1,
    title: "AWS Certified Solutions Architect – Associate",
    provider: "AWS",
    providerLogoColor: "from-amber-500 to-orange-600",
    level: "Intermediate",
    category: "Cloud Architecture",
    examCode: "SAA-C03",
    description: "Design secure, reliable, and cost-optimized architectures for workloads on AWS.",
    credentialType: "Certification exam",
    popularBadge: "CLOUD ARCHITECTURE",
    image: "",
  },
  {
    id: "aws-certified-developer-associate",
    number: 2,
    title: "AWS Certified Developer – Associate",
    provider: "AWS",
    providerLogoColor: "from-amber-500 to-orange-600",
    level: "Intermediate",
    category: "Cloud Development",
    examCode: "DVA-C02",
    description: "Build, deploy, and maintain applications using AWS services, SDKs, and CI/CD practices.",
    credentialType: "Certification exam",
    popularBadge: "CLOUD DEVELOPMENT",
    image: "",
  },
  {
    id: "aws-certified-devops-engineer-professional",
    number: 3,
    title: "AWS Certified DevOps Engineer – Professional",
    provider: "AWS",
    providerLogoColor: "from-amber-500 to-orange-600",
    level: "Advanced",
    category: "DevOps",
    examCode: "DOP-C02",
    description: "Automate delivery and operations with CI/CD, infrastructure as code, monitoring, and resilient AWS systems.",
    credentialType: "Certification exam",
    popularBadge: "DEVOPS ENGINEERING",
    image: "",
  },
  {
    id: "google-professional-cloud-devops-engineer",
    number: 4,
    title: "Google Professional Cloud DevOps Engineer",
    provider: "Google Cloud",
    providerLogoColor: "from-blue-500 to-green-500",
    level: "Advanced",
    category: "Cloud DevOps",
    examCode: "SRE · CI/CD",
    description: "Apply site reliability engineering and delivery practices to build and operate services on Google Cloud.",
    credentialType: "Certification exam",
    popularBadge: "CLOUD DEVOPS",
    image: "",
  },
  {
    id: "prometheus-grafana",
    number: 5,
    title: "Prometheus + Grafana",
    provider: "Udemy",
    providerLogoColor: "from-orange-500 to-rose-600",
    level: "All levels",
    category: "Observability",
    examCode: "METRICS · DASHBOARDS",
    description: "Monitor systems with Prometheus metrics and create actionable dashboards with Grafana.",
    credentialType: "Course",
    popularBadge: "OBSERVABILITY",
    image: "",
  },
];

interface CareersExplorerProps {
  onOpenWizard?: () => void;
}

export default function CareersExplorer({ onOpenWizard }: CareersExplorerProps) {
  const navigate = useNavigate();
  const selectedCourse = FEATURED_COURSES[0];
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

  const viewCourse = (course: FeaturedCourse) => {
    navigate(`/careers/course/${encodeURIComponent(course.id)}`);
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
              Industry-recognized security certifications
            </span>
            <h2 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-immersive-text-primary sm:text-5xl lg:text-[3.5rem]">
              Explore cybersecurity certifications
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-immersive-text-secondary sm:text-lg">
              Build skills across cyber defense, ethical hacking, security leadership, and cloud protection.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5 lg:justify-end">
            {["CompTIA", "EC-Council", "ISC2", "AWS"].map((partner) => (
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
                {selectedCourse.provider.slice(0, 1)}
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
              src={getCourseImage(selectedCourse.id, selectedCourse.image)}
              alt=""
              className="h-full w-full object-cover opacity-35 lg:opacity-100"
              fetchPriority="high"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-slate-950/10 lg:from-slate-950/15 lg:via-transparent lg:to-slate-950/10" />
            <div className="absolute bottom-7 right-7 hidden max-w-xs rounded-2xl border border-white/20 bg-slate-950/70 p-4 text-white shadow-2xl backdrop-blur-md sm:block lg:bottom-8 lg:right-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Exam code</p>
            <p className="mt-1 text-sm font-bold">{selectedCourse.examCode}</p>
            <p className="mt-2 line-clamp-2 text-sm font-semibold leading-snug">{selectedCourse.title}</p>
            </div>
          </div>
        </div>

        <div id="course-catalog" className="scroll-mt-24">
          <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#e83e32] dark:text-[#ff786e]">The course catalog</p>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-immersive-text-primary sm:text-3xl">Cyber Defense, Offensive Security &amp; Cloud Security</h3>
            </div>
            <p className="text-sm text-immersive-text-secondary">
              Showing <span className="font-semibold text-immersive-text-primary">{filteredCourses.length}</span> certifications
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
                        return (
                          <article
                            key={`${pageIndex}-${course.id}`}
                            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-immersive-border bg-immersive-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
                          >
                            <button
                              type="button"
                              tabIndex={isClone || !isCurrentPage ? -1 : undefined}
                              onClick={() => viewCourse(course)}
                              aria-label={`View course details for ${course.title}`}
                              className="relative block aspect-[16/9] w-full overflow-hidden bg-slate-900 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#ff4b3e]"
                            >
                              <img src={getCourseImage(course.id, course.image)} alt="" loading="lazy" draggable={false} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
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
                                <span className="inline-flex shrink-0 items-center gap-1 text-immersive-text-secondary">
                                  <Award className="h-3.5 w-3.5 text-[#e83e32] dark:text-[#ff786e]" aria-hidden="true" />
                                  <span className="font-semibold">{course.examCode}</span>
                                </span>
                              </div>
                              <button
                                type="button"
                                tabIndex={isClone || !isCurrentPage ? -1 : undefined}
                                onClick={() => viewCourse(course)}
                                className="mt-3 text-left font-display text-lg font-bold leading-snug text-immersive-text-primary transition hover:text-[#e83e32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ff4b3e] sm:text-xl"
                              >
                                {course.title}
                              </button>
                              <p className="mt-3 line-clamp-3 text-sm leading-6 text-immersive-text-secondary">{course.description}</p>
                              <div className="mt-5 flex items-center gap-4 border-t border-immersive-border/70 pt-4 text-xs font-medium text-immersive-text-secondary">
                                <span className="inline-flex items-center gap-1.5"><Award className="h-3.5 w-3.5" aria-hidden="true" /> {course.credentialType}</span>
                                <span className="inline-flex items-center gap-1.5"><Code2 className="h-3.5 w-3.5" aria-hidden="true" /> {course.category}</span>
                              </div>
                              <button
                                type="button"
                                tabIndex={isClone ? -1 : undefined}
                                onClick={() => viewCourse(course)}
                                className="mt-auto inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-immersive-border px-4 py-2.5 text-sm font-bold text-immersive-text-primary transition hover:border-[#ff4b3e] hover:bg-[#ff4b3e] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4b3e]"
                              >
                                View course <ArrowRight className="h-4 w-4" aria-hidden="true" />
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

        <div className="mt-14 border-t border-immersive-border/60 pt-10">
          <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#e83e32] dark:text-[#ff786e]">The course catalog</p>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-immersive-text-primary sm:text-3xl">
                Cloud Architecture, DevOps &amp; Platform Reliability
              </h3>
            </div>
            <p className="text-sm text-immersive-text-secondary">
              Showing <span className="font-semibold text-immersive-text-primary">{PLATFORM_COURSES.length}</span> courses
            </p>
          </div>

          <div className="grid auto-rows-fr grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PLATFORM_COURSES.map((course) => (
              <article
                key={course.id}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-immersive-border bg-immersive-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
              >
                <button
                  type="button"
                  onClick={() => viewCourse(course)}
                  aria-label={`View course details for ${course.title}`}
                  className="relative block aspect-[16/9] w-full overflow-hidden bg-slate-900 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#ff4b3e]"
                >
                  <img src={getCourseImage(course.id, course.image)} alt="" loading="lazy" draggable={false} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
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
                    <span className="inline-flex shrink-0 items-center gap-1 text-immersive-text-secondary">
                      <Award className="h-3.5 w-3.5 text-[#e83e32] dark:text-[#ff786e]" aria-hidden="true" />
                      <span className="font-semibold">{course.examCode}</span>
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => viewCourse(course)}
                    className="mt-3 text-left font-display text-lg font-bold leading-snug text-immersive-text-primary transition hover:text-[#e83e32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ff4b3e] sm:text-xl"
                  >
                    {course.title}
                  </button>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-immersive-text-secondary">{course.description}</p>
                  <div className="mt-5 flex items-center gap-4 border-t border-immersive-border/70 pt-4 text-xs font-medium text-immersive-text-secondary">
                    <span className="inline-flex items-center gap-1.5"><Award className="h-3.5 w-3.5" aria-hidden="true" /> {course.credentialType}</span>
                    <span className="inline-flex items-center gap-1.5"><Code2 className="h-3.5 w-3.5" aria-hidden="true" /> {course.category}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => viewCourse(course)}
                    className="mt-auto inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-immersive-border px-4 py-2.5 text-sm font-bold text-immersive-text-primary transition hover:border-[#ff4b3e] hover:bg-[#ff4b3e] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4b3e]"
                  >
                    View course <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
