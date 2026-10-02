import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronDown,
  Clock3,
  Code2,
  Compass,
  GraduationCap,
  Layers3,
  LoaderCircle,
  Search,
  Sparkles,
  Target,
} from 'lucide-react';
import type { Career, CatalogCourse } from '../services/api';
import { careerApi, catalogCourseApi } from '../services/api';

interface CareersPageProps {
  onOpenWizard: () => void;
  onSelectTrack: (trackId: string) => void;
}

interface CareerPath extends Career {
  tags: string[];
}

const growOptions = [
  {
    title: 'Explore',
    subtitle: 'Find your direction',
    description: 'Get a clearer picture of the careers and skills that match your interests.',
    icon: Compass,
    tone: 'bg-immersive-primary/10 text-immersive-primary',
  },
  {
    title: 'Learn',
    subtitle: 'Build practical skills',
    description: 'Follow a structured path and learn with courses from the catalog.',
    icon: BookOpen,
    tone: 'bg-immersive-secondary/10 text-immersive-secondary',
  },
  {
    title: 'Grow',
    subtitle: 'Keep moving forward',
    description: 'Track your progress and take the next step toward your career goals.',
    icon: Target,
    tone: 'bg-immersive-primary/10 text-immersive-primary',
  },
];

function readList(value?: string | string[] | null): string[] {
  if (Array.isArray(value)) {
    return value.filter((item): item is string => typeof item === 'string' && item.trim().length > 0);
  }

  if (typeof value !== 'string' || !value.trim()) return [];

  try {
    const parsed: unknown = JSON.parse(value);
    if (Array.isArray(parsed)) {
      return parsed.filter((item): item is string => typeof item === 'string' && item.trim().length > 0);
    }
    return [];
  } catch {
    if (value.trimStart().startsWith('[') || value.trimStart().startsWith('{')) return [];
    return value.split(',').map((item) => item.trim()).filter(Boolean);
  }
}

function getCourseSkills(course: CatalogCourse): string[] {
  return readList(course.skills);
}

function CourseCard({
  course,
  onSelect,
}: {
  key?: string;
  course: CatalogCourse;
  onSelect: (courseId: string) => void;
}) {
  const skills = getCourseSkills(course).slice(0, 3);
  const metadata = [course.platform, course.level, course.duration].filter(Boolean);
  const cost = course.cost === null || course.cost === undefined || String(course.cost).trim() === ''
    ? null
    : String(course.cost);

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[1.35rem] border border-immersive-border bg-immersive-card shadow-xl shadow-immersive-shadow transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-immersive-primary/15 via-immersive-bg to-immersive-secondary/15 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
        {course.image && (
          <img
            src={course.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
            onError={(event) => event.currentTarget.remove()}
          />
        )}
        <div className="absolute left-4 top-4 flex max-w-[calc(100%-2rem)] flex-wrap gap-2">
          {course.category && (
            <span className="rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[11px] font-semibold text-slate-700 shadow-sm backdrop-blur">
              {course.category}
            </span>
          )}
          {course.certification && (
            <span className="inline-flex items-center gap-1 rounded-full bg-immersive-primary px-3 py-1 text-[11px] font-semibold text-white shadow-sm">
              <Check size={12} aria-hidden="true" />
              Certificate
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex min-h-5 items-center justify-between gap-3">
          <span className="truncate text-xs font-semibold uppercase tracking-[0.12em] text-immersive-primary">
            {course.provider || course.platform || 'Course catalog'}
          </span>
          {course.type && <span className="shrink-0 text-xs text-immersive-text-secondary">{course.type}</span>}
        </div>
        <h3 className="line-clamp-2 min-h-[3.5rem] text-lg font-bold leading-7 tracking-[-0.02em] text-immersive-text-primary">
          {course.title}
        </h3>
        <p className="mt-2 line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-immersive-text-secondary">
          {course.description?.trim() || 'A course description has not been provided by the course provider.'}
        </p>

        {skills.length > 0 && (
          <div className="mt-4 flex min-h-7 flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full bg-immersive-bg px-2.5 py-1 text-[11px] font-medium text-immersive-text-secondary">
                {skill}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto pt-5">
          {(metadata.length > 0 || cost) && (
            <div className="mb-4 flex min-h-5 flex-wrap items-center gap-x-3 gap-y-1 text-xs text-immersive-text-secondary">
              {metadata.map((item, index) => (
                <span key={`${item}-${index}`} className="inline-flex items-center gap-1.5">
                  {index === 2 ? <Clock3 size={13} aria-hidden="true" /> : <Layers3 size={13} aria-hidden="true" />}
                  {item}
                </span>
              ))}
              {cost && <span>Cost: {cost}</span>}
            </div>
          )}
          <button
            type="button"
            onClick={() => onSelect(course.id)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-immersive-primary px-4 py-3 text-sm font-semibold text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-immersive-primary focus-visible:ring-offset-2 focus-visible:ring-offset-immersive-card"
          >
            Explore learning path
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}

function CourseCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-[1.35rem] border border-immersive-border bg-immersive-card">
      <div className="aspect-[16/9] animate-pulse bg-slate-200 dark:bg-slate-700" />
      <div className="space-y-3 p-6">
        <div className="h-3 w-1/3 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
        <div className="h-6 w-4/5 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
        <div className="h-4 w-full animate-pulse rounded bg-slate-100 dark:bg-slate-800" />
        <div className="h-4 w-2/3 animate-pulse rounded bg-slate-100 dark:bg-slate-800" />
        <div className="h-11 w-full animate-pulse rounded-xl bg-slate-200 dark:bg-slate-700" />
      </div>
    </div>
  );
}

export default function CareersPage({ onOpenWizard, onSelectTrack }: CareersPageProps) {
  const [careers, setCareers] = useState<CareerPath[]>([]);
  const [careersLoading, setCareersLoading] = useState(true);
  const [careersError, setCareersError] = useState<string | null>(null);
  const [allCourses, setAllCourses] = useState<CatalogCourse[]>([]);
  const [allCoursesLoading, setAllCoursesLoading] = useState(true);
  const [allCoursesError, setAllCoursesError] = useState<string | null>(null);
  const [selectedCareerId, setSelectedCareerId] = useState('all');
  const [careerCourses, setCareerCourses] = useState<CatalogCourse[]>([]);
  const [careerCoursesLoading, setCareerCoursesLoading] = useState(false);
  const [careerCoursesError, setCareerCoursesError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [visibleLimit, setVisibleLimit] = useState(12);
  const [retryKey, setRetryKey] = useState(0);
  const requestId = useRef(0);

  useEffect(() => {
    let active = true;

    const loadCareers = async () => {
      setCareersLoading(true);
      setCareersError(null);
      try {
        const response = await careerApi.getAll();
        if (!response.success || !response.data?.careers) {
          throw new Error(response.error || 'The career paths could not be loaded.');
        }
        if (active) {
          setCareers(response.data.careers.map((career) => ({
            ...career,
            tags: readList(career.skills),
          })));
        }
      } catch (error) {
        if (active) {
          setCareersError(error instanceof Error ? error.message : 'The career paths could not be loaded.');
        }
      } finally {
        if (active) setCareersLoading(false);
      }
    };

    const loadCourses = async () => {
      setAllCoursesLoading(true);
      setAllCoursesError(null);
      try {
        const response = await catalogCourseApi.getAll();
        if (!response.success || !response.data?.courses) {
          throw new Error(response.error || 'The course catalog could not be loaded.');
        }
        if (active) setAllCourses(response.data.courses);
      } catch (error) {
        if (active) {
          setAllCoursesError(error instanceof Error ? error.message : 'The course catalog could not be loaded.');
        }
      } finally {
        if (active) setAllCoursesLoading(false);
      }
    };

    void loadCareers();
    void loadCourses();

    return () => {
      active = false;
    };
  }, [retryKey]);

  const levels = useMemo(
    () => [...new Set(allCourses.map((course) => course.level).filter((level): level is string => Boolean(level)))].sort(),
    [allCourses],
  );
  const providers = useMemo(
    () => new Set(allCourses.map((course) => course.provider || course.platform).filter(Boolean)).size,
    [allCourses],
  );
  const featuredCourses = allCourses.slice(0, 3);
  const leadCourse = featuredCourses[0];

  const loadCareerCourses = async (careerId: string) => {
    const currentRequest = ++requestId.current;
    setSelectedCareerId(careerId);
    setCareerCoursesError(null);
    setCareerCourses([]);

    if (careerId === 'all') {
      setCareerCoursesLoading(false);
      return;
    }

    setCareerCoursesLoading(true);
    try {
      const response = await catalogCourseApi.getByCareer(careerId);
      if (!response.success || !response.data?.courses) {
        throw new Error(response.error || 'Courses for this career could not be loaded.');
      }
      if (requestId.current === currentRequest) setCareerCourses(response.data.courses);
    } catch (error) {
      if (requestId.current === currentRequest) {
        setCareerCoursesError(error instanceof Error ? error.message : 'Courses for this career could not be loaded.');
      }
    } finally {
      if (requestId.current === currentRequest) setCareerCoursesLoading(false);
    }
  };

  const selectedCareer = careers.find((career) => career.id === selectedCareerId);
  const sourceCourses = selectedCareerId === 'all' || searchQuery.trim()
    ? allCourses
    : careerCourses;
  const visibleCourses = sourceCourses.filter((course) => {
    const query = searchQuery.trim().toLowerCase();
    const searchable = [
      course.title,
      course.description,
      course.provider,
      course.platform,
      course.category,
      course.subcategory,
      ...getCourseSkills(course),
    ].filter(Boolean).join(' ').toLowerCase();
    return (!query || searchable.includes(query)) && (selectedLevel === 'all' || course.level === selectedLevel);
  });
  const coursesToRender = visibleCourses.slice(0, visibleLimit);
  const courseLoadError = searchQuery.trim() || selectedCareerId === 'all'
    ? allCoursesError
    : careerCoursesError;
  const courseLoading = selectedCareerId !== 'all' && !searchQuery.trim()
    ? careerCoursesLoading
    : allCoursesLoading;

  useEffect(() => {
    setVisibleLimit(12);
  }, [selectedCareerId, searchQuery, selectedLevel]);

  const scrollToCatalog = () => {
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth';
    document.getElementById('course-catalog')?.scrollIntoView({ behavior, block: 'start' });
  };

  return (
    <main className="homepage-theme min-h-screen overflow-hidden bg-immersive-bg text-immersive-text-primary">
      <section className="relative isolate overflow-hidden bg-immersive-bg">
        <div className="pointer-events-none absolute -right-28 -top-32 -z-10 h-[34rem] w-[34rem] rounded-full bg-immersive-primary/10 opacity-70 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 top-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-immersive-secondary/10 opacity-70 blur-3xl" />
        <div className="mx-auto grid w-full max-w-[1600px] items-center gap-12 px-3 pb-16 pt-14 sm:px-4 sm:pb-20 sm:pt-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:px-6 lg:pb-24 lg:pt-24">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-immersive-primary/20 bg-immersive-card px-4 py-2 text-sm font-semibold text-immersive-primary shadow-sm">
              <Sparkles size={16} aria-hidden="true" />
              Your next chapter starts here
            </div>
            <h1 className="max-w-2xl text-4xl font-bold leading-[1.1] tracking-[-0.045em] text-immersive-text-primary sm:text-5xl lg:text-[4.25rem]">
              Find a career path that
              <span className="text-immersive-primary"> moves you forward.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-immersive-text-secondary sm:text-lg sm:leading-8">
              Explore real career paths and courses from the Cohortia catalog. Start with an area that interests you, then find a learning path that fits.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={scrollToCatalog}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-immersive-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-immersive-shadow transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-immersive-primary focus-visible:ring-offset-2 focus-visible:ring-offset-immersive-bg"
              >
                Explore courses
                <ArrowRight size={17} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={onOpenWizard}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-immersive-border bg-immersive-card px-6 py-3 text-sm font-semibold text-immersive-text-primary transition hover:border-immersive-primary hover:bg-immersive-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-immersive-primary focus-visible:ring-offset-2 focus-visible:ring-offset-immersive-bg"
              >
                Help me choose
                <Compass size={17} aria-hidden="true" />
              </button>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 divide-x divide-immersive-border rounded-2xl border border-immersive-border bg-immersive-card px-2 py-4 shadow-sm backdrop-blur">
              <div className="px-3 text-center">
                <p className="text-2xl font-bold tracking-tight text-immersive-text-primary">
                  {allCoursesLoading ? '—' : allCourses.length}
                </p>
                <p className="mt-1 text-xs text-immersive-text-secondary sm:text-sm">catalog courses</p>
              </div>
              <div className="px-3 text-center">
                <p className="text-2xl font-bold tracking-tight text-immersive-text-primary">
                  {careersLoading ? '—' : careers.length}
                </p>
                <p className="mt-1 text-xs text-immersive-text-secondary sm:text-sm">career paths</p>
              </div>
              <div className="px-3 text-center">
                <p className="text-2xl font-bold tracking-tight text-immersive-text-primary">
                  {allCoursesLoading ? '—' : providers}
                </p>
                <p className="mt-1 text-xs text-immersive-text-secondary sm:text-sm">course sources</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[620px] lg:ml-auto">
            <div className="absolute -inset-4 -rotate-2 rounded-[2.25rem] bg-gradient-to-br from-immersive-primary/20 via-immersive-bg to-immersive-secondary/20" />
            <div className="relative overflow-hidden rounded-[2rem] border border-immersive-border bg-immersive-card p-3 shadow-xl shadow-immersive-shadow">
              <div className="relative aspect-[1.24/1] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-immersive-primary/15 via-immersive-bg to-immersive-secondary/15 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
                {leadCourse?.image && (
                  <img
                    src={leadCourse.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={(event) => event.currentTarget.remove()}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#102541]/85 via-[#102541]/10 to-transparent" />
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-2 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur">
                  <GraduationCap size={15} aria-hidden="true" />
                  From the course catalog
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                    {leadCourse?.provider || leadCourse?.platform || 'Explore learning'}
                  </p>
                  <h2 className="max-w-lg text-2xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-3xl">
                    {leadCourse?.title || 'Explore courses for your next step'}
                  </h2>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {[leadCourse?.level, leadCourse?.duration, leadCourse?.category].filter(Boolean).map((item) => (
                      <span key={item} className="rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {leadCourse && (
                <div className="flex items-center justify-between gap-4 px-3 pb-1 pt-4 sm:px-4">
                  <div className="min-w-0">
                    <p className="text-xs text-immersive-text-secondary">A real course in the catalog</p>
                    <p className="mt-1 truncate text-sm font-semibold text-immersive-text-primary">{leadCourse.title}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onSelectTrack(leadCourse.id)}
                    aria-label={`Explore learning path for ${leadCourse.title}`}
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-immersive-primary/10 text-immersive-primary transition hover:bg-immersive-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-immersive-primary focus-visible:ring-offset-2 focus-visible:ring-offset-immersive-card"
                  >
                    <ArrowUpRight size={19} aria-hidden="true" />
                  </button>
                </div>
              )}
              {!leadCourse && allCoursesLoading && (
                <div className="flex h-16 items-center justify-center gap-2 text-sm text-immersive-text-secondary" role="status">
                  <LoaderCircle size={17} className="animate-spin" aria-hidden="true" />
                  Loading the course catalog…
                </div>
              )}
              {!leadCourse && allCoursesError && (
                <p className="p-5 text-sm text-rose-700 dark:text-rose-300" role="alert">{allCoursesError}</p>
              )}
            </div>
            <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl border border-immersive-border bg-immersive-card px-4 py-3 shadow-xl sm:flex">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-immersive-secondary/10 text-immersive-secondary">
                <Code2 size={20} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs text-immersive-text-secondary">Learn with purpose</span>
                <span className="block text-sm font-semibold text-immersive-text-primary">One step at a time</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1600px] px-3 py-16 sm:px-4 sm:py-20 lg:px-6">
        <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-immersive-primary">Start with a direction</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-immersive-text-primary sm:text-4xl">Explore career paths</h2>
            <p className="mt-3 max-w-2xl text-immersive-text-secondary">Browse the career paths available in Cohortia, then explore courses connected to the path you choose.</p>
          </div>
          <button
            type="button"
            onClick={scrollToCatalog}
            className="inline-flex min-h-10 items-center gap-2 self-start text-sm font-semibold text-immersive-secondary transition hover:text-immersive-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-immersive-primary focus-visible:ring-offset-4 focus-visible:ring-offset-immersive-bg sm:self-auto"
          >
            Browse all courses <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>

        {careersLoading ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Loading career paths">
            {[0, 1, 2, 3, 4, 5].map((item) => <div key={item} className="h-56 animate-pulse rounded-2xl bg-slate-200 dark:bg-slate-700" />)}
          </div>
        ) : careersError ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-800 dark:border-rose-900 dark:bg-rose-950 dark:text-rose-200" role="alert">
            <p className="font-semibold">Career paths are unavailable right now.</p>
            <p className="mt-1">{careersError}</p>
            <button
              type="button"
              onClick={() => setRetryKey((key) => key + 1)}
              className="mt-4 rounded-lg border border-rose-300 px-4 py-2 font-semibold transition hover:bg-white dark:border-rose-800 dark:hover:bg-rose-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
            >
              Try again
            </button>
          </div>
        ) : careers.length === 0 ? (
          <div className="rounded-2xl border border-immersive-border bg-immersive-card p-8 text-center text-immersive-text-secondary">
            No career paths are available in the catalog yet.
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {careers.map((career) => {
              return (
                <article key={career.id} className="group flex min-h-[220px] flex-col overflow-hidden rounded-2xl border border-immersive-border bg-immersive-card transition hover:-translate-y-1 hover:border-immersive-primary/40 hover:shadow-xl hover:shadow-immersive-shadow">
                  <div className="relative flex h-24 items-center justify-between overflow-hidden bg-gradient-to-br from-immersive-primary/10 to-immersive-secondary/10 px-6">
                    <span className="absolute -right-4 -top-10 h-36 w-36 rounded-full border-[22px] border-immersive-card/30" />
                    <span className="absolute -right-1 -bottom-12 h-28 w-28 rounded-full bg-immersive-card/25" />
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-immersive-card text-immersive-primary shadow-sm">
                      <GraduationCap size={24} aria-hidden="true" />
                    </span>
                    {career.category && (
                      <span className="relative rounded-full border border-immersive-border bg-immersive-card/90 px-3 py-1 text-xs font-semibold text-immersive-text-secondary">
                        {career.category}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-bold tracking-[-0.02em] text-immersive-text-primary">{career.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-immersive-text-secondary">
                      {career.description?.trim() || 'Explore this career path and the skills associated with it.'}
                    </p>
                    {career.tags.length > 0 && (
                      <div className="mt-auto flex flex-wrap gap-2 pt-4">
                        {career.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="rounded-full bg-immersive-bg px-2.5 py-1 text-[11px] font-medium text-immersive-text-secondary">{tag}</span>
                        ))}
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        void loadCareerCourses(career.id);
                        scrollToCatalog();
                      }}
                      className="mt-4 inline-flex items-center gap-2 self-start text-sm font-semibold text-immersive-secondary hover:text-immersive-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-immersive-primary focus-visible:ring-offset-2 focus-visible:ring-offset-immersive-card"
                    >
                      Explore related courses <ArrowRight size={15} aria-hidden="true" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      <section className="border-y border-immersive-border bg-immersive-card/40">
        <div className="mx-auto w-full max-w-[1600px] px-3 py-16 sm:px-4 sm:py-20 lg:px-6">
          <div className="mx-auto mb-11 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-immersive-primary">A clearer way forward</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-immersive-text-primary sm:text-4xl">How you grow with Cohortia</h2>
            <p className="mt-4 leading-7 text-immersive-text-secondary">Move from exploring your options to building skills and keeping your momentum.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {growOptions.map(({ title, subtitle, description, icon: Icon, tone }, index) => (
              <article key={title} className="relative rounded-2xl border border-immersive-border bg-immersive-card p-6 sm:p-7">
                {index < growOptions.length - 1 && <div className="absolute -right-4 top-12 z-10 hidden h-px w-8 bg-immersive-border md:block" />}
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tone}`}>
                  <Icon size={22} aria-hidden="true" />
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-immersive-text-secondary">0{index + 1} · {subtitle}</p>
                <h3 className="mt-2 text-xl font-bold text-immersive-text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-immersive-text-secondary">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1600px] px-3 py-16 sm:px-4 sm:py-20 lg:px-6">
        <div className="mb-9 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-immersive-primary">Learn from real providers</p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-immersive-text-primary sm:text-4xl">Courses to help you get started</h2>
          <p className="mt-3 leading-7 text-immersive-text-secondary">A look at courses currently available in the Cohortia catalog. Course details come from their providers.</p>
        </div>
        {allCoursesLoading ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((item) => <CourseCardSkeleton key={item} />)}
          </div>
        ) : allCoursesError ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-800 dark:border-rose-900 dark:bg-rose-950 dark:text-rose-200" role="alert">
            <p className="font-semibold">The course catalog is unavailable right now.</p>
            <p className="mt-1">{allCoursesError}</p>
            <button
              type="button"
              onClick={() => setRetryKey((key) => key + 1)}
              className="mt-4 rounded-lg border border-rose-300 px-4 py-2 font-semibold transition hover:bg-white dark:border-rose-800 dark:hover:bg-rose-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
            >
              Try again
            </button>
          </div>
        ) : allCourses.length === 0 ? (
          <div className="rounded-2xl border border-immersive-border bg-immersive-card p-8 text-center text-immersive-text-secondary">No courses are available in the catalog yet.</div>
        ) : (
          <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map((course) => <CourseCard key={course.id} course={course} onSelect={onSelectTrack} />)}
          </div>
        )}
      </section>

      <section id="course-catalog" className="scroll-mt-8 bg-immersive-bg/70">
        <div className="mx-auto w-full max-w-[1600px] px-3 py-16 sm:px-4 sm:py-20 lg:px-6">
          <div className="mb-9 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-immersive-primary">The catalog</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-immersive-text-primary sm:text-4xl">Find your next course</h2>
              <p className="mt-3 max-w-2xl leading-7 text-immersive-text-secondary">Search real courses and narrow the catalog by career path or course level.</p>
            </div>
            <label className="relative block w-full lg:max-w-sm">
              <span className="sr-only">Search courses</span>
              <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-immersive-text-secondary" aria-hidden="true" />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search courses, skills, providers…"
                className="h-12 w-full rounded-xl border border-immersive-border bg-immersive-input-bg pl-11 pr-4 text-sm text-immersive-text-primary outline-none transition placeholder:text-immersive-text-secondary/60 focus:border-immersive-primary focus:ring-2 focus:ring-immersive-primary/20"
              />
            </label>
          </div>

          <div className="grid gap-7 lg:grid-cols-[260px_minmax(0,1fr)]">
            <aside className="h-fit rounded-2xl border border-immersive-border bg-immersive-card p-5 shadow-sm">
              <div className="mb-4 flex items-center gap-2 text-sm font-bold text-immersive-text-primary">
                <Layers3 size={17} aria-hidden="true" />
                Career paths
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
                <button
                  type="button"
                  onClick={() => void loadCareerCourses('all')}
                  aria-pressed={selectedCareerId === 'all'}
                  className={`shrink-0 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-immersive-primary ${selectedCareerId === 'all' ? 'bg-immersive-primary/10 text-immersive-primary' : 'text-immersive-text-secondary hover:bg-immersive-card-hover hover:text-immersive-text-primary'}`}
                >
                  All courses
                </button>
                {careers.map((career) => (
                  <button
                    type="button"
                    key={career.id}
                    onClick={() => void loadCareerCourses(career.id)}
                    aria-pressed={selectedCareerId === career.id}
                    className={`shrink-0 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-immersive-primary lg:shrink ${selectedCareerId === career.id ? 'bg-immersive-primary/10 text-immersive-primary' : 'text-immersive-text-secondary hover:bg-immersive-card-hover hover:text-immersive-text-primary'}`}
                  >
                    {career.title}
                  </button>
                ))}
              </div>

              <div className="my-5 border-t border-immersive-border" />
              <label className="block text-sm font-bold text-immersive-text-primary" htmlFor="course-level">
                Course level
              </label>
              <div className="relative mt-3">
                <select
                  id="course-level"
                  value={selectedLevel}
                  onChange={(event) => setSelectedLevel(event.target.value)}
                  className="h-11 w-full appearance-none rounded-lg border border-immersive-border bg-immersive-input-bg px-3 pr-9 text-sm text-immersive-text-primary outline-none focus:border-immersive-primary focus:ring-2 focus:ring-immersive-primary/20"
                >
                  <option value="all">All levels</option>
                  {levels.map((level) => <option key={level} value={level}>{level}</option>)}
                </select>
                <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-immersive-text-secondary" aria-hidden="true" />
              </div>
              {selectedCareer && (
                <p className="mt-4 text-xs leading-5 text-immersive-text-secondary">
                  Showing courses connected to <span className="font-semibold text-immersive-text-primary">{selectedCareer.title}</span>.
                </p>
              )}
            </aside>

            <div className="min-w-0">
              <div className="mb-5 flex min-h-7 items-center justify-between gap-4">
                <p className="text-sm font-medium text-immersive-text-secondary" aria-live="polite">
                  {courseLoading ? 'Loading courses…' : `${visibleCourses.length} ${visibleCourses.length === 1 ? 'course' : 'courses'}`}
                  {searchQuery.trim() && !courseLoading ? ' found' : ''}
                </p>
                {(searchQuery || selectedCareerId !== 'all' || selectedLevel !== 'all') && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedLevel('all');
                      void loadCareerCourses('all');
                    }}
                    className="text-sm font-semibold text-immersive-secondary hover:text-immersive-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-immersive-primary focus-visible:ring-offset-2 focus-visible:ring-offset-immersive-bg"
                  >
                    Clear filters
                  </button>
                )}
              </div>

              {courseLoading ? (
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3" aria-label="Loading courses">
                  {[0, 1, 2].map((item) => <CourseCardSkeleton key={item} />)}
                </div>
              ) : courseLoadError ? (
                <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-800 dark:border-rose-900 dark:bg-rose-950 dark:text-rose-200" role="alert">
                  <p className="font-semibold">Courses could not be loaded.</p>
                  <p className="mt-1">{courseLoadError}</p>
                  <button
                    type="button"
                    onClick={() => {
                      if (selectedCareerId === 'all' || searchQuery.trim()) {
                        setRetryKey((key) => key + 1);
                      } else {
                        void loadCareerCourses(selectedCareerId);
                      }
                    }}
                    className="mt-4 rounded-lg border border-rose-300 px-4 py-2 font-semibold transition hover:bg-white dark:border-rose-800 dark:hover:bg-rose-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                  >
                    Try again
                  </button>
                </div>
              ) : visibleCourses.length === 0 ? (
                <div className="rounded-2xl border border-immersive-border bg-immersive-card px-6 py-14 text-center">
                  <Search size={26} className="mx-auto text-immersive-text-secondary" aria-hidden="true" />
                  <h3 className="mt-4 font-semibold text-immersive-text-primary">No matching courses</h3>
                  <p className="mt-2 text-sm text-immersive-text-secondary">Try another search or clear one of your filters.</p>
                </div>
              ) : (
                <div className="grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {coursesToRender.map((course) => <CourseCard key={course.id} course={course} onSelect={onSelectTrack} />)}
                </div>
              )}
              {!courseLoading && !courseLoadError && visibleCourses.length > visibleLimit && (
                <div className="mt-8 text-center">
                  <button
                    type="button"
                    onClick={() => setVisibleLimit((limit) => limit + 12)}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-immersive-border bg-immersive-card px-5 py-3 text-sm font-semibold text-immersive-text-primary transition hover:border-immersive-primary hover:bg-immersive-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-immersive-primary focus-visible:ring-offset-2 focus-visible:ring-offset-immersive-bg"
                  >
                    Show more courses
                    <span className="text-immersive-text-secondary">({visibleCourses.length - visibleLimit} remaining)</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1600px] px-3 pb-16 sm:px-4 sm:pb-20 lg:px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-immersive-primary px-6 py-10 text-white sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:px-14">
          <div className="pointer-events-none absolute -right-10 -top-20 h-72 w-72 rounded-full border-[44px] border-white/5" />
          <div className="relative max-w-2xl">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/80">
              <Sparkles size={16} aria-hidden="true" /> Make your next move
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] sm:text-4xl">Not sure where to begin?</h2>
            <p className="mt-3 max-w-xl leading-7 text-white/85">Explore career options with a little guidance and find a direction that feels right for you.</p>
          </div>
          <button
            type="button"
            onClick={onOpenWizard}
            className="relative mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#17314f] transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-immersive-primary lg:mt-0"
          >
            Explore your options <ArrowRight size={17} aria-hidden="true" />
          </button>
        </div>
      </section>
    </main>
  );
}
