import {useEffect, useMemo, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Activity, ArrowLeft, ArrowRight, BarChart3, BookOpen, BrainCircuit, BriefcaseBusiness, Bug, CheckCircle2, ChevronLeft, ChevronRight, Cloud, Code2, Cpu, Database, FileSearch, Fingerprint, Gamepad2, GitBranch, GraduationCap, Layers3, LockKeyhole, Network, Pause, Play, Search, Server, ShieldCheck, Smartphone, Sparkles, Workflow, type LucideIcon} from "lucide-react";
import type {ReactNode, TransitionEvent} from "react";
import type {CatalogCourse} from "../services/api";
import {catalogCourseApi} from "../services/api";
import {
  careerCategories,
  careerRoles,
  findCareerCategory,
  findCareerRole,
  getCareerCategoryPath,
  getCareerRolePath,
  slugify,
} from "../data/careerDirectory";
import {getCourseImage} from "../data/courseImages";
import {getCategoryImage} from "../data/categoryImages";

function readList(value?: string | string[] | null): string[] {
  if (Array.isArray(value)) return value.filter((item): item is string => typeof item === "string" && item.trim().length > 0);
  if (typeof value !== "string" || !value.trim()) return [];
  try {
    const parsed: unknown = JSON.parse(value);
    if (Array.isArray(parsed)) return parsed.filter((item): item is string => typeof item === "string" && item.trim().length > 0);
  } catch {
    if (value.trimStart().startsWith("[") || value.trimStart().startsWith("{")) return [];
  }
  return value.split(/[,;]/).map((item) => item.trim()).filter(Boolean);
}

function getCourseCategory(course: CatalogCourse): string {
  return course.marketSubcategory?.trim() || course.subcategory?.trim() || course.marketCategory || course.category;
}

function useCatalogCourses() {
  const [courses, setCourses] = useState<CatalogCourse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError("");
    catalogCourseApi.getAll().then((response) => {
      if (!response.success || !response.data?.courses) {
        throw new Error(response.error || "The course catalog could not be loaded.");
      }
      if (active) setCourses(response.data.courses);
    }).catch((cause: unknown) => {
      if (active) setError(cause instanceof Error ? cause.message : "The course catalog could not be loaded.");
    }).finally(() => {
      if (active) setLoading(false);
    });
    return () => { active = false; };
  }, [attempt]);

  return {courses, loading, error, retry: () => setAttempt((value) => value + 1)};
}

function CourseCard({course}: {key?: string; course: CatalogCourse}) {
  const skills = readList(course.skills).slice(0, 3);
  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-immersive-border bg-immersive-card shadow-sm shadow-immersive-shadow transition hover:-translate-y-0.5 hover:border-immersive-primary/40 hover:shadow-lg">
      <div className="relative flex aspect-[16/8] items-center justify-center overflow-hidden bg-gradient-to-br from-immersive-primary/15 via-immersive-bg to-immersive-secondary/15">
        {getCourseImage(course.id, course.image) ? (
          <img src={getCourseImage(course.id, course.image)} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" onError={(event) => event.currentTarget.remove()} />
        ) : (
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-immersive-primary/15 bg-immersive-card/80 text-immersive-primary">
            <GraduationCap size={27} aria-hidden="true" />
          </span>
        )}
        {course.certification && <span className="absolute left-3 top-3 rounded-full bg-emerald-600 px-2.5 py-1 text-[10px] font-bold text-white">Certificate course</span>}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-[11px] font-semibold text-immersive-primary">{course.provider || course.platform || "Course catalog"}</p>
        <h3 className="mt-2 line-clamp-2 min-h-10 text-sm font-bold leading-5 text-immersive-text-primary">{course.title}</h3>
        {course.catalogStatus === "review" && (
          <p className="mt-2 text-[10px] font-semibold text-amber-700 dark:text-amber-300">Difficulty estimate awaiting review</p>
        )}
        <p className="mt-2 line-clamp-3 min-h-[3.75rem] text-xs leading-5 text-immersive-text-secondary">
          {course.description?.trim() || `Explore ${course.title} in ${getCourseCategory(course)}.`}
        </p>
        {skills.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {skills.map((skill) => <span key={skill} className="rounded-full bg-immersive-bg px-2 py-1 text-[10px] text-immersive-text-secondary">{skill}</span>)}
          </div>
        )}
        <div className="mt-auto flex items-center justify-between gap-2 border-t border-immersive-border pt-3 text-[11px] text-immersive-text-secondary">
          <span>{[course.level, course.duration].filter(Boolean).join(" · ") || "Level not specified"}</span>
          <Link to={`/careers/course/${encodeURIComponent(course.id)}`} className="inline-flex shrink-0 items-center gap-1 font-semibold text-immersive-primary hover:underline">
            View course <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function CourseGrid({courses, loading, error, retry, emptyMessage}: {
  courses: CatalogCourse[];
  loading: boolean;
  error: string;
  retry: () => void;
  emptyMessage: string;
}) {
  if (loading) {
    return <div role="status" className="rounded-xl border border-immersive-border bg-immersive-card p-5 text-sm text-immersive-text-secondary">Loading matching courses…</div>;
  }
  if (error) {
    return (
      <div role="alert" className="rounded-xl border border-rose-300 bg-rose-50 p-5 text-sm text-rose-900 dark:border-rose-900 dark:bg-rose-950/50 dark:text-rose-100">
        <p>{error}</p>
        <button type="button" onClick={retry} className="mt-3 font-semibold underline">Try again</button>
      </div>
    );
  }
  if (!courses.length) return <p className="rounded-xl border border-dashed border-immersive-border p-5 text-sm text-immersive-text-secondary">{emptyMessage}</p>;
  return <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{courses.map((course) => <CourseCard key={course.id} course={course} />)}</div>;
}

function PageShell({children}: {children: ReactNode}) {
  return <main className="min-h-screen bg-immersive-bg pb-16 pt-24 text-immersive-text-primary sm:pt-28">{children}</main>;
}

function SectionHeading({eyebrow, title, description}: {eyebrow: string; title: string; description?: string}) {
  return (
    <div className="mb-5">
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-immersive-primary">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-immersive-text-primary sm:text-3xl">{title}</h2>
      {description && <p className="mt-2 max-w-3xl text-sm leading-6 text-immersive-text-secondary">{description}</p>}
    </div>
  );
}

function RoleLink({category, role}: {key?: string; category: (typeof careerCategories)[number]; role: string}) {
  return (
    <Link
      to={getCareerRolePath(category, role)}
      className="group flex min-h-14 items-center justify-between gap-3 rounded-xl border border-immersive-border bg-immersive-card px-4 py-3 text-sm font-semibold text-immersive-text-primary transition hover:border-immersive-primary/40 hover:bg-immersive-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-immersive-primary"
    >
      <span>{role}</span>
      <ChevronRight size={16} className="shrink-0 text-immersive-text-secondary transition group-hover:translate-x-0.5 group-hover:text-immersive-primary" aria-hidden="true" />
    </Link>
  );
}

function getRoleCardPalette(index: number) {
  const palettes = [
    {
      shell: "from-violet-500/30 via-violet-400/20 to-violet-100",
      iconWrap: "bg-violet-500",
      icon: "text-white",
      tag: "bg-violet-100 text-violet-800",
    },
    {
      shell: "from-blue-500/30 via-blue-400/20 to-blue-100",
      iconWrap: "bg-blue-500",
      icon: "text-white",
      tag: "bg-sky-100 text-sky-800",
    },
    {
      shell: "from-emerald-500/30 via-emerald-400/20 to-emerald-100",
      iconWrap: "bg-emerald-500",
      icon: "text-white",
      tag: "bg-emerald-100 text-emerald-800",
    },
    {
      shell: "from-fuchsia-500/30 via-fuchsia-400/20 to-fuchsia-100",
      iconWrap: "bg-fuchsia-500",
      icon: "text-white",
      tag: "bg-fuchsia-100 text-fuchsia-800",
    },
    {
      shell: "from-orange-500/30 via-orange-400/20 to-orange-100",
      iconWrap: "bg-orange-500",
      icon: "text-white",
      tag: "bg-orange-100 text-orange-800",
    },
    {
      shell: "from-cyan-500/30 via-cyan-400/20 to-cyan-100",
      iconWrap: "bg-cyan-500",
      icon: "text-white",
      tag: "bg-cyan-100 text-cyan-800",
    },
  ];

  return palettes[index % palettes.length];
}

const ROLE_DESCRIPTIONS: Record<string, string> = {
  "Cybersecurity Analyst": "Hunt for suspicious activity, investigate alerts, and help stop attacks before they disrupt a business.",
  "Cybersecurity Engineer": "Build the safeguards, monitoring, and response systems that keep networks and applications resilient.",
  "Security Operations Center (SOC) Analyst": "Monitor security alerts around the clock, connect the clues, and coordinate a fast response to threats.",
  "Information Security Analyst": "Assess an organization's security risks and turn policy, controls, and evidence into stronger protection.",
  "Penetration Tester": "Safely simulate real attacks to expose exploitable weaknesses before criminals can find them.",
  "Ethical Hacker": "Use attacker techniques with permission to uncover flaws and show teams how to close them.",
  "Vulnerability Assessment Analyst": "Scan systems, verify weaknesses, and help teams prioritize the fixes that reduce the most risk.",
  "Security Consultant": "Help organizations make security decisions, close control gaps, and prepare for changing threats.",
  "Digital Forensics Analyst": "Recover and examine digital evidence to reconstruct incidents and support investigations.",
  "Incident Response Analyst": "Contain active security incidents, trace their cause, and guide systems safely back to service.",
  "Threat Intelligence Analyst": "Turn attacker behavior and threat data into timely warnings defenders can act on.",
  "Malware Analyst": "Dissect malicious software to reveal how it works, what it targets, and how to detect it.",
  "Application Security Engineer": "Build security into the software lifecycle and help developers prevent flaws before release.",
  "Cloud Security Engineer": "Protect cloud workloads with hardened configurations, strong identity controls, and useful monitoring.",
  "Cloud Security Architect": "Design cloud security patterns that protect data and services without blocking delivery.",
  "Network Security Engineer": "Defend network traffic and infrastructure with layered controls, segmentation, and continuous monitoring.",
  "Security Auditor": "Test security controls against standards and give organizations a clear path to compliance.",
  "Governance, Risk & Compliance (GRC) Analyst": "Translate regulations and business risks into practical controls, evidence, and clear reporting.",
  "Identity and Access Management (IAM) Engineer": "Make sure the right people and services get the right access—and no more than they need.",
  "Red Team Specialist": "Challenge defenses with realistic, authorized attack campaigns that reveal gaps in people and technology.",
  "Blue Team Specialist": "Strengthen detection and response by investigating attacker techniques and improving defensive controls.",
  "Security Researcher": "Investigate emerging weaknesses and attack methods, then share findings that make technology safer.",
  "Data Analyst": "Turn raw data into clear dashboards and recommendations that help teams make better decisions.",
  "Data Scientist": "Use statistics and machine learning to explain patterns, test ideas, and forecast what may happen next.",
  "Data Engineer": "Build dependable pipelines that move clean, usable data from its source to the people and systems that need it.",
  "Big Data Engineer": "Design distributed data platforms that process high-volume information reliably and at scale.",
  "Database Administrator (DBA)": "Keep databases secure, available, and fast through careful tuning, backups, and recovery planning.",
  "Database Developer": "Design schemas, queries, and database logic that make applications' data reliable and efficient.",
  "Business Intelligence (BI) Analyst": "Connect business questions to trusted metrics and dashboards that make performance easier to understand.",
  "Business Intelligence Developer": "Build the data models, reporting pipelines, and dashboards teams rely on to track results.",
  "Analytics Engineer": "Turn raw warehouse data into clean, tested models that analysts can use with confidence.",
  "Data Architect": "Shape how data is stored, governed, and shared so platforms can grow without losing trust or control.",
  "Data Warehouse Engineer": "Create and operate analytical warehouses that make complex business data ready for reporting.",
  "ETL Developer": "Build reliable extract, transform, and load jobs that move data accurately between systems.",
  "Data Quality Analyst": "Find inconsistencies and gaps in critical datasets, then help teams make the underlying data trustworthy.",
  "Data Governance Analyst": "Define ownership, quality, privacy, and access practices so data is used responsibly.",
  "Data Visualization Specialist": "Turn complex datasets into visual stories that reveal trends without obscuring the evidence.",
  "Reporting Analyst": "Deliver accurate, timely reports that help stakeholders spot changes and act on them.",
  "SQL Developer": "Write and tune SQL queries, procedures, and data structures that power dependable reporting and applications.",
  "Business Analyst (Data-focused)": "Translate business needs into measurable data questions, requirements, and actionable recommendations.",
  "Machine Learning Data Engineer": "Prepare high-quality training data and scalable pipelines that keep machine-learning systems production-ready.",
  "Cloud Data Engineer": "Build secure cloud data pipelines and platforms that scale with changing workloads.",
  "Data Operations Engineer": "Keep data services and pipelines observable, reliable, and ready for the teams that depend on them.",
  "Research Data Analyst": "Analyze study data with care, making methods and findings clear enough to support sound conclusions.",
  "Cloud Engineer": "Provision cloud infrastructure and automate the services that keep applications dependable as demand grows.",
  "Cloud Architect": "Choose cloud platforms and shape secure, scalable designs around real business and technical needs.",
  "AWS Solutions Architect": "Design AWS systems that meet workload needs while balancing resilience, security, and cost.",
  "DevOps Engineer": "Automate the path from code to production so teams can ship changes safely and often.",
  "Site Reliability Engineer (SRE)": "Use software and measurable reliability targets to keep critical services available under pressure.",
  "Platform Engineer": "Build self-service tools and paved roads that help developers deliver software without fighting infrastructure.",
  "Kubernetes Engineer": "Operate Kubernetes clusters and deployment patterns that keep containerized services scalable and healthy.",
  "Software Engineer": "Turn product requirements into dependable software, from system design through testing and release.",
  "Software Developer": "Build and maintain applications that solve user problems with clear, reliable code.",
  "Python Developer": "Use Python to build practical applications, automation, and data tools that remove busywork.",
  "Frontend Developer": "Create fast, accessible interfaces that make complex products feel intuitive to use.",
  "Backend Developer": "Build the APIs, business logic, and data services that make applications work behind the scenes.",
  "Full-Stack Developer": "Connect polished user experiences to robust services and databases across the whole application.",
  "Web Developer": "Build responsive websites and web applications that work smoothly across devices.",
  "Machine Learning Engineer": "Turn trained models into reliable products by building the pipelines and services around them.",
  "Artificial Intelligence Engineer": "Apply AI models to real workflows, integrating them into useful, dependable products.",
  "Generative AI Engineer": "Build AI features that generate useful content while addressing quality, safety, and latency.",
  "Product Manager": "Set product direction by connecting customer needs, business goals, and a focused delivery roadmap.",
  "Technical Product Manager": "Translate complex technical capabilities into product priorities that solve customer problems.",
  "Robotics Engineer": "Bring robots to life by integrating sensors, software, and control systems for real-world tasks.",
  "Android Developer": "Build Android apps that feel native, perform well, and serve people across a range of devices.",
  "iOS Developer": "Create polished iPhone and iPad apps with thoughtful interaction, performance, and privacy.",
  "Game Developer": "Bring interactive worlds to life by building gameplay systems, tools, and responsive experiences.",
  "Network Engineer": "Design and troubleshoot connected infrastructure so data moves securely and reliably.",
  "Systems Administrator": "Keep an organization's servers and operating systems secure, patched, and available.",
};

function getRoleCardIcon(role: string, category: (typeof careerCategories)[number]): LucideIcon {
  const name = role.toLowerCase();
  if (/malware/.test(name)) return Bug;
  if (/security|hacker|penetration|threat|vulnerability|forensics|incident|red team|blue team/.test(name)) return ShieldCheck;
  if (/identity|access management|iam/.test(name)) return Fingerprint;
  if (/database|data warehouse|etl|sql|data engineer/.test(name)) return Database;
  if (/data analyst|reporting|business intelligence|visualization|analytics/.test(name)) return BarChart3;
  if (/scientist|machine learning|artificial intelligence|ai |language model|nlp|generative ai|llm/.test(name)) return BrainCircuit;
  if (/network|telecommunications|wireless|routing|voip|wan|lan/.test(name)) return Network;
  if (/cloud/.test(name)) return Cloud;
  if (/robot|embedded|firmware|iot|hardware|microcontroller|drone|control systems/.test(name)) return Cpu;
  if (/game|unity|unreal|graphics|xr|virtual reality|ar developer/.test(name)) return Gamepad2;
  if (/mobile|android|ios|flutter|wearable/.test(name)) return Smartphone;
  if (/test|quality assurance|\(qa\)|auditor|compliance/.test(name)) return CheckCircle2;
  if (/support|administrator|help desk|service desk|server/.test(name)) return Server;
  if (/architect|architecture/.test(name)) return Workflow;
  if (/product|project|program|scrum|agile|delivery|portfolio|manager|director|officer/.test(name)) return Layers3;
  if (/developer|programmer|software|engineer|coder/.test(name)) return Code2;
  if (/research|forensic|investigator/.test(name)) return FileSearch;
  if (/operations|reliability|performance|automation/.test(name)) return Activity;
  if (/devops|ci\/cd|release|build/.test(name)) return GitBranch;
  if (/security/.test(category.name.toLowerCase())) return LockKeyhole;
  return BriefcaseBusiness;
}

function getRoleDescription(role: string, category: (typeof careerCategories)[number]): string {
  const curated = ROLE_DESCRIPTIONS[role];
  if (curated) return curated;

  const title = role.replace(/\s*\([^)]*\)/g, "");
  const focus = title
    .replace(/\b(analyst|scientist|engineer|developer|programmer|architect|administrator|specialist|consultant|manager|lead|director|officer|technician|designer|owner|coach|master|researcher|artist|support|tester|auditor|strategist|operator|coordinator|executive|advisor|principal|staff|associate|senior|junior)\b/gi, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
  const subject = focus || category.name.toLowerCase();

  if (/analyst|reporter/.test(title.toLowerCase())) {
    return `Investigate ${subject} and turn the evidence into clear findings and practical next steps.`;
  }
  if (/scientist|researcher/.test(title.toLowerCase())) {
    return `Use experiments, evidence, and advanced methods to answer hard questions in ${subject}.`;
  }
  if (/architect/.test(title.toLowerCase())) {
    return `Design ${subject} systems that balance scale, security, cost, and long-term maintainability.`;
  }
  if (/engineer/.test(title.toLowerCase())) {
    return `Build and operate ${subject} systems, solving the reliability and performance challenges behind them.`;
  }
  if (/developer|programmer|coder/.test(title.toLowerCase())) {
    return `Create useful ${subject} applications and tools, turning real needs into software people can rely on.`;
  }
  if (/manager|director|officer|lead|owner|coach|master/.test(title.toLowerCase())) {
    return `Guide ${subject} teams from priorities to delivery, keeping people aligned on outcomes that matter.`;
  }
  if (/support|technician|administrator/.test(title.toLowerCase())) {
    return `Keep ${subject} services working smoothly by resolving issues, improving access, and preventing repeat problems.`;
  }
  if (/designer|artist/.test(title.toLowerCase())) {
    return `Shape engaging ${subject} experiences, balancing creative ideas with the needs of real users.`;
  }
  if (/consultant|advisor|specialist|auditor|tester/.test(title.toLowerCase())) {
    return `Bring focused ${subject} expertise to complex challenges and help teams make measurable improvements.`;
  }
  return `${category.description} Build practical expertise in ${subject} and turn it into work people can see and use.`;
}

function RoleCarousel({category}: {category: (typeof careerCategories)[number]}) {
  const [activeIndex, setActiveIndex] = useState(1);
  const [visibleCount, setVisibleCount] = useState(6);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(1);
      else if (width < 1024) setVisibleCount(2);
      else if (width < 1280) setVisibleCount(3);
      else if (width < 1536) setVisibleCount(4);
      else setVisibleCount(6);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);
    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  const pages = Array.from({length: Math.ceil(category.roles.length / visibleCount)}, (_, pageIndex) =>
    category.roles
      .slice(pageIndex * visibleCount, (pageIndex + 1) * visibleCount)
      .map((role, index) => ({role, index: pageIndex * visibleCount + index})),
  );
  const pageCount = Math.max(1, pages.length);
  const loopedPages = [pages[pageCount - 1] || [], ...pages, pages[0] || []];

  useEffect(() => {
    setActiveIndex(1);
  }, [visibleCount, category.slug]);

  useEffect(() => {
    if (isPaused || isHovered || isFocused || prefersReducedMotion || pageCount < 2) return;
    const timer = window.setInterval(() => setActiveIndex((current) => current + 1), 5000);
    return () => window.clearInterval(timer);
  }, [isPaused, isHovered, isFocused, prefersReducedMotion, pageCount]);

  useEffect(() => {
    if (transitionEnabled) return;
    const frame = window.requestAnimationFrame(() => setTransitionEnabled(true));
    return () => window.cancelAnimationFrame(frame);
  }, [transitionEnabled]);

  const move = (direction: 1 | -1) => {
    if (prefersReducedMotion) {
      setActiveIndex((current) => {
        const currentPage = current === 0 ? pageCount : current === pageCount + 1 ? 1 : current;
        return ((currentPage - 1 + direction + pageCount) % pageCount) + 1;
      });
      return;
    }
    setActiveIndex((current) => current + direction);
  };

  const handleTrackTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || !event.propertyName.includes("transform")) return;
    if (activeIndex === 0 || activeIndex === pageCount + 1) {
      setTransitionEnabled(false);
      setActiveIndex(activeIndex === 0 ? pageCount : 1);
    }
  };

  return (
    <div
      className="relative"
      aria-roledescription="carousel"
      aria-label={`${category.name} career roles`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsFocused(false);
      }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-1/2 z-10 flex -translate-y-1/2 justify-between">
        <button
          type="button"
          aria-label="Previous roles"
          onClick={() => move(-1)}
          disabled={pageCount < 2}
          className="pointer-events-auto -ml-5 flex h-12 w-12 items-center justify-center rounded-full border border-immersive-border bg-immersive-card text-immersive-text-primary shadow-lg transition hover:border-immersive-primary hover:text-immersive-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-immersive-primary sm:-ml-6"
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Next roles"
          onClick={() => move(1)}
          disabled={pageCount < 2}
          className="pointer-events-auto -mr-5 flex h-12 w-12 items-center justify-center rounded-full border border-immersive-border bg-immersive-card text-immersive-text-primary shadow-lg transition hover:border-immersive-primary hover:text-immersive-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-immersive-primary sm:-mr-6"
        >
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>

      <div className="overflow-hidden px-1 py-2">
        <div
          className={`flex ${transitionEnabled ? "transition-transform duration-700 ease-in-out motion-reduce:transition-none" : ""}`}
          style={{transform: `translateX(-${activeIndex * (100 / loopedPages.length)}%)`}}
          onTransitionEnd={handleTrackTransitionEnd}
        >
          {loopedPages.map((page, pageIndex) => (
            <div key={`page-${pageIndex}`} className="w-full shrink-0" aria-hidden={pageIndex === 0 || pageIndex === pageCount + 1}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
                {page.map(({role, index}) => {
                  const palette = getRoleCardPalette(index);
                  const RoleIcon = getRoleCardIcon(role, category);

                  return (
                    <Link
                      key={`${role}-${index}`}
                      to={getCareerRolePath(category, role)}
                      tabIndex={pageIndex === 0 || pageIndex === pageCount + 1 ? -1 : undefined}
                      className="group flex min-h-[330px] min-w-0 flex-col overflow-hidden rounded-2xl border border-immersive-border bg-immersive-card p-4 shadow-sm shadow-immersive-shadow transition duration-200 hover:-translate-y-1 hover:border-immersive-primary/40 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-immersive-primary"
                    >
                      <div className={`relative mb-4 flex h-20 shrink-0 items-center justify-between overflow-hidden rounded-[1.2rem] bg-gradient-to-br ${palette.shell}`}>
                        <div className={`relative z-10 ml-3 flex h-12 w-12 items-center justify-center rounded-xl shadow-sm ${palette.iconWrap} ${palette.icon}`}>
                          <RoleIcon size={24} strokeWidth={2.2} aria-hidden="true" />
                        </div>
                        <div className="absolute right-5 top-1/2 h-14 w-14 -translate-y-1/2 rounded-full bg-white/30 blur-lg" />
                        <span className="relative z-10 mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-white/60 text-immersive-text-primary shadow-sm transition group-hover:translate-x-0.5">
                          <ChevronRight size={15} aria-hidden="true" />
                        </span>
                      </div>

                      <div className="flex-1">
                        <p className="line-clamp-1 text-[10px] font-bold uppercase tracking-[0.16em] text-immersive-primary">{category.name}</p>
                        <h3 className="mt-2 line-clamp-2 min-h-12 text-lg font-bold leading-6 text-immersive-text-primary">{role}</h3>
                        <p className="mt-3 line-clamp-3 text-sm leading-5 text-immersive-text-secondary">
                          {getRoleDescription(role, category)}
                        </p>
                      </div>

                      <div className="mt-auto flex flex-wrap gap-2 pt-4">
                        <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${palette.tag}`}>Career path</span>
                        <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${palette.tag}`}>Courses</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2" role="group" aria-label="Choose role carousel page">
        {Array.from({length: pageCount}, (_, dotIndex) => (
          <button
            key={`dot-${dotIndex}`}
            type="button"
            aria-label={`Go to roles page ${dotIndex + 1}`}
            aria-current={activeIndex === dotIndex + 1 || (activeIndex === 0 && dotIndex === pageCount - 1) || (activeIndex === pageCount + 1 && dotIndex === 0) ? "true" : undefined}
            onClick={() => setActiveIndex(dotIndex + 1)}
            className={`h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-immersive-primary focus-visible:ring-offset-2 ${activeIndex === dotIndex + 1 || (activeIndex === 0 && dotIndex === pageCount - 1) || (activeIndex === pageCount + 1 && dotIndex === 0) ? "w-8 bg-immersive-primary" : "w-2.5 bg-slate-300 hover:bg-slate-400"}`}
          />
        ))}
        {pageCount > 1 && <button
          type="button"
          aria-label={isPaused ? "Resume automatic role carousel" : "Pause automatic role carousel"}
          onClick={() => {
            const resume = isPaused;
            setIsPaused(!isPaused);
            if (resume) {
              setIsHovered(false);
              setIsFocused(false);
            }
          }}
          className="ml-2 flex h-8 w-8 items-center justify-center rounded-full border border-immersive-border bg-immersive-card text-immersive-text-secondary transition hover:text-immersive-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-immersive-primary"
        >
          {isPaused ? <Play size={13} aria-hidden="true" /> : <Pause size={13} aria-hidden="true" />}
        </button>}
      </div>
    </div>
  );
}

export function CareerDirectoryPage({mode}: {mode: "roles" | "categories"}) {
  const [query, setQuery] = useState("");
  const {courses, loading, error, retry} = useCatalogCourses();
  const normalizedQuery = query.trim().toLowerCase();

  return (
    <PageShell>
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <Link to="/careers" className="inline-flex items-center gap-2 text-sm font-semibold text-immersive-secondary hover:text-immersive-primary">
          <ArrowLeft size={16} aria-hidden="true" /> Career explorer
        </Link>
        <div className="mt-6 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.17em] text-immersive-primary">Cohortia career explorer</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">{mode === "roles" ? "Explore every role" : "Explore every category"}</h1>
          <p className="mt-4 text-base leading-7 text-immersive-text-secondary">
            {mode === "roles"
              ? "Browse career directions connected to Cohortia’s course catalog. Choose a role to see matching courses and related pathways."
              : "Explore the 15 course categories, browse the roles within each area, and find courses from the matching category."}
          </p>
        </div>
        <label className="mt-7 flex max-w-xl items-center gap-3 rounded-xl border border-immersive-border bg-immersive-card px-4 py-3 focus-within:border-immersive-primary">
          <Search size={18} className="text-immersive-text-secondary" aria-hidden="true" />
          <span className="sr-only">{mode === "roles" ? "Search career roles" : "Search career categories"}</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={mode === "roles" ? "Search roles, e.g. Data Analyst" : "Search categories, e.g. Cloud"}
            className="w-full bg-transparent text-sm text-immersive-text-primary outline-none placeholder:text-immersive-text-secondary"
          />
        </label>

        {mode === "categories" ? (
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {careerCategories.filter((category) => !normalizedQuery || `${category.name} ${category.description}`.toLowerCase().includes(normalizedQuery)).map((category) => {
              const count = courses.filter((course) => getCourseCategory(course) === category.name).length;
              const categoryImage = getCategoryImage(category);
              return (
                <article key={category.slug} className="group flex flex-col overflow-hidden rounded-2xl border border-immersive-border bg-immersive-card shadow-sm shadow-immersive-shadow transition hover:-translate-y-0.5 hover:border-immersive-primary/40 hover:shadow-lg">
                  <div className="relative h-36 overflow-hidden bg-gradient-to-br from-immersive-primary/15 via-immersive-bg to-immersive-secondary/15">
                    {categoryImage && <img src={categoryImage} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent" />
                    <p className="absolute bottom-3 left-4 text-xs font-bold text-white">{loading ? "Loading catalog count…" : `${count} courses in the catalog`}</p>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h2 className="text-lg font-bold leading-snug">{category.name}</h2>
                    <p className="mt-2 flex-1 text-sm leading-6 text-immersive-text-secondary">{category.description}</p>
                    <p className="mt-4 text-xs text-immersive-text-secondary">{category.roles.length} career roles</p>
                    <Link to={getCareerCategoryPath(category)} className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-immersive-primary hover:underline">
                    Explore category <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-8 space-y-10">
            {careerCategories.map((category) => {
              const matchingRoles = category.roles.filter((role) => !normalizedQuery || `${role} ${category.name}`.toLowerCase().includes(normalizedQuery));
              if (!matchingRoles.length) return null;
              return (
                <section key={category.slug} aria-labelledby={`roles-${category.slug}`}>
                  <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-immersive-primary">{matchingRoles.length} roles</p>
                      <h2 id={`roles-${category.slug}`} className="mt-1 text-xl font-bold">{category.name}</h2>
                    </div>
                    <Link to={getCareerCategoryPath(category)} className="inline-flex items-center gap-1 text-sm font-semibold text-immersive-secondary hover:text-immersive-primary">
                      View category <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {matchingRoles.map((role) => <RoleLink key={role} category={category} role={role} />)}
                  </div>
                </section>
              );
            })}
            {!careerRoles.some((role) => !normalizedQuery || `${role.name} ${role.category.name}`.toLowerCase().includes(normalizedQuery)) && (
              <p className="rounded-xl border border-dashed border-immersive-border p-6 text-sm text-immersive-text-secondary">No roles match “{query}”. Try another search.</p>
            )}
          </div>
        )}
        {error && <p role="status" className="mt-6 text-sm text-rose-700 dark:text-rose-300">Course counts are unavailable: {error} <button onClick={retry} className="font-semibold underline">Retry</button></p>}
      </div>
    </PageShell>
  );
}

export function CareerCategoryPage() {
  const {categorySlug = ""} = useParams();
  const category = findCareerCategory(categorySlug);
  const {courses, loading, error, retry} = useCatalogCourses();
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("all");
  const categoryCourses = useMemo(
    () => courses.filter((course) => category && getCourseCategory(course) === category.name),
    [courses, category],
  );
  const visibleCourses = useMemo(() => categoryCourses.filter((course) => {
    const matchesLevel = level === "all" || course.level?.toLowerCase() === level.toLowerCase();
    const searchable = [course.title, course.description, ...readList(course.skills), ...readList(course.careerPaths)].join(" ").toLowerCase();
    return matchesLevel && (!query.trim() || searchable.includes(query.trim().toLowerCase()));
  }), [categoryCourses, level, query]);

  if (!category) return <NotFoundDiscoveryPage message="We couldn’t find that career category." />;
  const categoryImage = getCategoryImage(category);

  return (
    <PageShell>
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <Link to="/careers/categories" className="inline-flex items-center gap-2 text-sm font-semibold text-immersive-secondary hover:text-immersive-primary">
          <ArrowLeft size={16} aria-hidden="true" /> All categories
        </Link>
        <section className="relative mt-6 overflow-hidden rounded-[2rem] border border-immersive-border bg-immersive-bg shadow-sm shadow-immersive-shadow">
          <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-immersive-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-immersive-secondary/10 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(17,17,17,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,17,17,0.045)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />
          <div className="relative grid items-center gap-10 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-14 lg:py-14">
            <div className="relative z-10 max-w-3xl">
              <p className="inline-flex items-center rounded-full border border-immersive-border bg-immersive-card px-3 py-1.5 text-xs font-bold uppercase tracking-[0.17em] text-immersive-primary">Career category</p>
              <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-immersive-text-primary sm:text-5xl lg:text-6xl">{category.name}</h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-immersive-text-secondary sm:text-lg">{category.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="rounded-2xl border border-immersive-border bg-immersive-card px-4 py-3 shadow-sm">
                  <p className="text-2xl font-extrabold text-immersive-text-primary">{loading ? "—" : categoryCourses.length}</p>
                  <p className="mt-0.5 text-xs font-medium text-immersive-text-secondary">catalog courses</p>
                </div>
                <div className="rounded-2xl border border-immersive-border bg-immersive-card px-4 py-3 shadow-sm">
                  <p className="text-2xl font-extrabold text-immersive-text-primary">{category.roles.length}</p>
                  <p className="mt-0.5 text-xs font-medium text-immersive-text-secondary">career roles</p>
                </div>
              </div>
            </div>
            <div className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-96 sm:w-96">
              <div className="absolute inset-0 rounded-full border border-immersive-primary/20 motion-safe:animate-[spin_28s_linear_infinite]" />
              <div className="absolute inset-5 rounded-full border border-immersive-secondary/25 motion-safe:animate-[spin_38s_linear_infinite_reverse]" />
              <div className="absolute inset-0 motion-safe:animate-[spin_24s_linear_infinite]">
                <span className="absolute right-5 top-8 h-3 w-3 rounded-full bg-immersive-primary shadow-lg shadow-immersive-primary/30" />
                <span className="absolute bottom-12 left-2 h-2.5 w-2.5 rounded-full bg-immersive-secondary" />
              </div>
              <div className="relative z-10 h-56 w-56 overflow-hidden rounded-full border-4 border-immersive-card bg-immersive-card shadow-[0_0_30px_var(--immersive-shadow)] sm:h-72 sm:w-72">
                {categoryImage ? <img src={categoryImage} alt={`${category.name} visual`} className="h-full w-full object-cover transition duration-700 hover:scale-105" /> : <div className="h-full w-full bg-gradient-to-br from-immersive-primary/20 via-immersive-card to-immersive-secondary/20" />}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="category-roles-title">
          <SectionHeading eyebrow="Career paths" title="Roles in this category" description="Choose a role to see a focused learning page with matching courses, the wider category catalog, and related roles." />
          <RoleCarousel category={category} />
        </section>

        <section className="mt-12 scroll-mt-28" id="category-courses" aria-labelledby="category-courses-title">
          <SectionHeading eyebrow="Course catalog" title="Courses in this category" description="These courses are assigned to this Career-page category in the catalog." />
          <div className="mb-5 grid gap-3 sm:grid-cols-[minmax(0,1fr)_220px]">
            <label className="flex items-center gap-3 rounded-xl border border-immersive-border bg-immersive-card px-4 py-3">
              <Search size={17} className="text-immersive-text-secondary" aria-hidden="true" />
              <span className="sr-only">Search category courses</span>
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search course titles, skills, or roles" className="w-full bg-transparent text-sm outline-none placeholder:text-immersive-text-secondary" />
            </label>
            <label className="flex items-center gap-3 rounded-xl border border-immersive-border bg-immersive-card px-4 py-3 text-sm">
              <span className="shrink-0 text-immersive-text-secondary">Level</span>
              <select value={level} onChange={(event) => setLevel(event.target.value)} className="w-full bg-transparent font-semibold text-immersive-text-primary outline-none">
                <option value="all">All levels</option>
                <option>Beginner</option>
                <option>Beginner–Intermediate</option>
                <option>Intermediate</option>
                <option>Intermediate–Advanced</option>
                <option>Advanced</option>
              </select>
            </label>
          </div>
          <CourseGrid courses={visibleCourses} loading={loading} error={error} retry={retry} emptyMessage="No courses in this category match those filters yet." />
        </section>
      </div>
    </PageShell>
  );
}

export function CareerRolePage() {
  const {categorySlug = "", roleSlug = ""} = useParams();
  const role = findCareerRole(categorySlug, roleSlug);
  const {courses, loading, error, retry} = useCatalogCourses();

  if (!role) return <NotFoundDiscoveryPage message="We couldn’t find that career role." />;

  const roleCourses = courses.filter((course) => courseMatchesRole(course, role.name));
  const roleCourseIds = new Set(roleCourses.map((course) => course.id));
  const categoryCourses = courses.filter((course) => getCourseCategory(course) === role.category.name && !roleCourseIds.has(course.id));
  const similarRoles = role.category.roles.filter((name) => name !== role.name).slice(0, 6);
  const featuredCategoryCourses = categoryCourses.slice(0, 6);
  const skillTags = [...new Set(roleCourses.flatMap((course) => readList(course.skills)))].slice(0, 8);

  return (
    <PageShell>
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-immersive-text-secondary">
          <Link to="/careers/roles" className="hover:text-immersive-primary">Career roles</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <Link to={getCareerCategoryPath(role.category)} className="hover:text-immersive-primary">{role.category.name}</Link>
        </nav>

        <section className="relative mt-6 overflow-hidden rounded-[2rem] border border-immersive-border bg-gradient-to-br from-[#102541] via-[#173658] to-[#075c64] px-6 py-9 text-white shadow-xl sm:px-10 sm:py-12 lg:grid lg:grid-cols-[minmax(0,1fr)_300px] lg:items-center lg:gap-10">
          <div className="absolute -right-12 -top-16 h-64 w-64 rounded-full bg-amber-400/15 blur-3xl" aria-hidden="true" />
          <div className="relative">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white/90">
              <BriefcaseBusiness size={14} aria-hidden="true" /> Career role
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">{role.name}</h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/80">
              Explore learning paths for {role.name} in {role.category.name}. Course matches are based on catalog role tags, titles, descriptions, and skills; wider category courses are shown separately.
            </p>
            <Link to={getCareerCategoryPath(role.category)} className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15">
              {role.category.name} <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <div className="relative mt-8 grid grid-cols-2 gap-3 lg:mt-0">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
              <BookOpen size={18} className="text-amber-300" aria-hidden="true" />
              <p className="mt-3 text-2xl font-bold">{loading ? "—" : roleCourses.length}</p>
              <p className="mt-1 text-xs leading-5 text-white/75">role-matched courses</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
              <Sparkles size={18} className="text-amber-300" aria-hidden="true" />
              <p className="mt-3 text-2xl font-bold">{role.category.roles.length - 1}</p>
              <p className="mt-1 text-xs leading-5 text-white/75">related roles to explore</p>
            </div>
          </div>
        </section>

        {skillTags.length > 0 && (
          <section className="mt-7 rounded-2xl border border-immersive-border bg-immersive-card p-5 sm:p-6">
            <h2 className="text-sm font-bold text-immersive-text-primary">Skills in role-matched courses</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {skillTags.map((skill) => <span key={skill} className="rounded-full bg-immersive-primary/10 px-3 py-1.5 text-xs font-semibold text-immersive-primary">{skill}</span>)}
            </div>
          </section>
        )}

        <section className="mt-10" aria-labelledby="role-courses-title">
          <SectionHeading eyebrow="Recommended learning" title="Courses matched to this role" description={`Courses surfaced from catalog career tags, course titles, descriptions, and skill tags for ${role.name}.`} />
          <CourseGrid courses={roleCourses} loading={loading} error={error} retry={retry} emptyMessage="There are no direct catalog matches for this role yet. Explore the category courses below while role-specific mappings are expanded." />
        </section>

        <section className="mt-12" aria-labelledby="category-courses-role-title">
          <SectionHeading eyebrow="Explore the wider field" title={`More courses in ${role.category.name}`} description="These additional courses belong to the selected category and complement the direct role matches." />
          <CourseGrid courses={featuredCategoryCourses} loading={loading} error={error} retry={retry} emptyMessage="No additional courses are currently listed in this category." />
          {categoryCourses.length > featuredCategoryCourses.length && (
            <Link to={getCareerCategoryPath(role.category)} className="mt-5 inline-flex items-center gap-2 rounded-xl border border-immersive-border bg-immersive-card px-4 py-2.5 text-sm font-semibold text-immersive-text-primary hover:border-immersive-primary/40">
              View all {categoryCourses.length + roleCourses.length} category courses <ArrowRight size={15} aria-hidden="true" />
            </Link>
          )}
        </section>

        <section className="mt-12" aria-labelledby="similar-roles-title">
          <SectionHeading eyebrow="Keep exploring" title="Similar roles" description="Related career directions from the same course category." />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {similarRoles.map((name) => (
              <Link key={name} to={getCareerRolePath(role.category, name)} className="group rounded-2xl border border-immersive-border bg-immersive-card p-5 transition hover:-translate-y-0.5 hover:border-immersive-primary/40">
                <span className="text-sm font-bold text-immersive-text-primary">{name}</span>
                <span className="mt-3 flex items-center gap-1 text-xs font-semibold text-immersive-primary">Explore role <ArrowRight size={13} className="transition group-hover:translate-x-0.5" aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-10 rounded-2xl border border-immersive-border bg-immersive-card p-5 sm:p-6">
          <p className="text-sm font-bold">Want to compare other paths?</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <Link to="/careers/roles" className="inline-flex items-center gap-2 rounded-lg bg-immersive-primary px-4 py-2.5 text-sm font-bold text-white hover:brightness-110">Browse all roles <ArrowRight size={15} aria-hidden="true" /></Link>
            <Link to="/careers/categories" className="inline-flex items-center gap-2 rounded-lg border border-immersive-border px-4 py-2.5 text-sm font-bold text-immersive-text-primary hover:border-immersive-primary/40">Browse categories</Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

export function CareerSkillPage() {
  const {skillSlug = ""} = useParams();
  const {courses, loading, error, retry} = useCatalogCourses();
  const matchingCourses = courses.filter((course) =>
    [...readList(course.skillTags), ...readList(course.skills)].some((skill) => slugify(skill) === skillSlug),
  );
  const skillName = matchingCourses
    .flatMap((course) => [...readList(course.skillTags), ...readList(course.skills)])
    .find((skill) => slugify(skill) === skillSlug)
    || skillSlug.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  const categories = [...new Set(matchingCourses.map(getCourseCategory))];

  return (
    <PageShell>
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <Link to="/careers" className="inline-flex items-center gap-2 text-sm font-semibold text-immersive-secondary hover:text-immersive-primary">
          <ArrowLeft size={16} aria-hidden="true" /> Career explorer
        </Link>
        <section className="mt-6 rounded-[2rem] border border-immersive-border bg-gradient-to-br from-immersive-primary/10 via-immersive-card to-immersive-secondary/10 p-6 sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.17em] text-immersive-primary">Trending skill</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">{skillName}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-immersive-text-secondary">
            Explore courses that list {skillName} in their catalog skills or skill tags. Use the category labels to continue into a broader career pathway.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-immersive-border bg-immersive-card px-3 py-1.5 font-semibold">{loading ? "Loading courses…" : `${matchingCourses.length} matching courses`}</span>
            {!loading && categories.map((category) => {
              const matchingCategory = careerCategories.find((item) => item.name === category);
              return matchingCategory ? (
                <Link key={category} to={getCareerCategoryPath(matchingCategory)} className="rounded-full border border-immersive-border bg-immersive-card px-3 py-1.5 font-semibold text-immersive-primary hover:underline">
                  {category}
                </Link>
              ) : null;
            })}
          </div>
        </section>
        <section className="mt-10" aria-labelledby="skill-course-title">
          <SectionHeading eyebrow="Course catalog" title={`Courses for ${skillName}`} />
          <CourseGrid courses={matchingCourses} loading={loading} error={error} retry={retry} emptyMessage={`No courses currently carry the “${skillName}” skill tag.`} />
        </section>
      </div>
    </PageShell>
  );
}

function courseMatchesRole(course: CatalogCourse, roleName: string): boolean {
  const careerPaths = readList(course.careerPaths).map((path) => slugify(path));
  const roleSlug = slugify(roleName);
  if (careerPaths.includes(roleSlug)) return true;

  const searchable = [
    course.title,
    course.description,
    ...readList(course.skills),
    ...readList(course.skillTags),
    ...careerPaths,
  ].filter(Boolean).join(" ").toLowerCase();
  const phrase = roleName.toLowerCase();
  if (searchable.includes(phrase)) return true;

  const meaningfulTokens = roleName
    .replace(/\([^)]*\)/g, " ")
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((token) => token.length > 2 && !["and", "the", "for", "with", "engineer", "developer", "analyst", "specialist"].includes(token));
  return meaningfulTokens.length > 0 && meaningfulTokens.every((token) => searchable.includes(token));
}

function NotFoundDiscoveryPage({message}: {message: string}) {
  return (
    <PageShell>
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="text-3xl font-bold">{message}</h1>
        <p className="mt-3 text-sm text-immersive-text-secondary">Choose a category or role from the career explorer.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link to="/careers/categories" className="rounded-lg bg-immersive-primary px-4 py-2.5 text-sm font-bold text-white">Browse categories</Link>
          <Link to="/careers/roles" className="rounded-lg border border-immersive-border px-4 py-2.5 text-sm font-bold">Browse roles</Link>
        </div>
      </div>
    </PageShell>
  );
}
