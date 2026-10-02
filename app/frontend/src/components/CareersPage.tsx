import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Check,
  Clock3,
  Code2,
  Compass,
  GraduationCap,
  Layers3,
  LoaderCircle,
  Search,
  Sparkles,
} from 'lucide-react';
import type { CatalogCourse } from '../services/api';
import { catalogCourseApi } from '../services/api';

interface CareersPageProps {
  onOpenWizard: () => void;
  onSelectTrack: (trackId: string) => void;
}

const growOptions = [
  {
    title: 'Choose a course',
    subtitle: 'Find the right path for your goals.',
    icon: Compass,
  },
  {
    title: 'Learn & practice',
    subtitle: 'Explore quality content and build projects.',
    icon: Code2,
  },
  {
    title: 'Get certified',
    subtitle: 'Work toward course certificates and new skills.',
    icon: Award,
  },
  {
    title: 'Build your future',
    subtitle: 'Apply what you learn and keep moving forward.',
    icon: BriefcaseBusiness,
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

function getCourseCategory(course: CatalogCourse): string {
  return course.subcategory?.trim() || course.category;
}

function normalizeCourseLevel(level?: string | null): string {
  return (level || '').replace(/\s*(?:→|�|>)\s*/g, ' to ').replace(/\s+/g, ' ').trim();
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
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-immersive-border bg-immersive-card shadow-sm shadow-immersive-shadow transition duration-200 hover:-translate-y-0.5 hover:border-immersive-primary/35 hover:shadow-lg">
      <div className="relative aspect-[16/8.5] overflow-hidden bg-gradient-to-br from-immersive-primary/15 via-immersive-bg to-immersive-secondary/15 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
        {course.image && (
          <img
            src={course.image}
            alt={course.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
            onError={(event) => event.currentTarget.remove()}
          />
        )}
        {course.certification && (
          <div className="absolute left-3 top-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500 px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm">
              <Check size={12} aria-hidden="true" />
              Certified
            </span>
          </div>
        )}
        {course.imageSource && (
          <a
            href={course.imageSource}
            target="_blank"
            rel="noreferrer"
            className="absolute inset-x-0 bottom-0 truncate bg-slate-950/65 px-3 py-1.5 text-[9px] text-white/90 hover:bg-slate-950/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
            aria-label={`Image credit: ${course.imageCredit || 'Wikimedia Commons contributor'}, ${course.imageLicense || 'license information'}; opens Wikimedia Commons`}
          >
            Photo: {course.imageCredit || 'Wikimedia Commons contributor'} · {course.imageLicense || 'License'}
          </a>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex min-h-4 items-center justify-between gap-2">
          <span className="truncate text-[11px] font-semibold text-immersive-primary">
            {course.provider || course.platform || 'Course catalog'}
          </span>
          {course.type && <span className="shrink-0 text-[10px] text-immersive-text-secondary">{course.type}</span>}
        </div>
        <h3 className="line-clamp-2 min-h-10 text-sm font-bold leading-5 text-immersive-text-primary">
          {course.title}
        </h3>
        <p className="mt-2 line-clamp-2 min-h-9 text-xs leading-[1.15rem] text-immersive-text-secondary">
          {course.description?.trim() || 'A course description has not been provided by the course provider.'}
        </p>

        {skills.length > 0 && (
          <div className="mt-3 flex min-h-5 flex-wrap gap-1.5">
            {skills.slice(0, 2).map((skill) => (
              <span key={skill} className="rounded-full bg-immersive-bg px-2 py-0.5 text-[10px] font-medium text-immersive-text-secondary">
                {skill}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto pt-4">
          <div className="mb-3 flex min-h-5 flex-wrap items-center justify-between gap-x-2 gap-y-1 border-t border-immersive-border pt-3 text-[10px] text-immersive-text-secondary">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              {metadata.slice(0, 2).map((item, index) => (
                <span key={`${item}-${index}`} className="inline-flex items-center gap-1">
                  {index === 1 ? <Clock3 size={12} aria-hidden="true" /> : <Layers3 size={12} aria-hidden="true" />}
                  {item}
                </span>
              ))}
            </div>
            <span className="font-semibold text-immersive-text-primary">{cost || 'Price not listed'}</span>
          </div>
          <button
            type="button"
            onClick={() => onSelect(course.id)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-immersive-primary px-3 py-2.5 text-xs font-semibold text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-immersive-primary focus-visible:ring-offset-2 focus-visible:ring-offset-immersive-card"
          >
            Explore course
            <ArrowRight size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}

function CourseCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-immersive-border bg-immersive-card">
      <div className="aspect-[16/8.5] animate-pulse bg-slate-200 dark:bg-slate-700" />
      <div className="space-y-3 p-4">
        <div className="h-3 w-1/3 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
        <div className="h-10 w-4/5 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
        <div className="h-9 w-full animate-pulse rounded bg-slate-100 dark:bg-slate-800" />
        <div className="mt-5 h-10 w-full animate-pulse rounded-lg bg-slate-200 dark:bg-slate-700" />
      </div>
    </div>
  );
}

export default function CareersPage({ onOpenWizard, onSelectTrack }: CareersPageProps) {
  const [allCourses, setAllCourses] = useState<CatalogCourse[]>([]);
  const [allCoursesLoading, setAllCoursesLoading] = useState(true);
  const [allCoursesError, setAllCoursesError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [priceFilter, setPriceFilter] = useState<'all' | 'listed' | 'unlisted'>('all');
  const [certificatesOnly, setCertificatesOnly] = useState(false);
  const [sortOrder, setSortOrder] = useState<'catalog' | 'title'>('catalog');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [retryKey, setRetryKey] = useState(0);

  useEffect(() => {
    let active = true;
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

    void loadCourses();

    return () => {
      active = false;
    };
  }, [retryKey]);

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    allCourses.forEach((course) => {
      const category = getCourseCategory(course);
      counts.set(category, (counts.get(category) || 0) + 1);
    });
    return [...counts.entries()]
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  }, [allCourses]);
  const levels = useMemo(
    () => [...new Set(allCourses.map((course) => normalizeCourseLevel(course.level)).filter(Boolean))].sort(),
    [allCourses],
  );
  const levelCounts = useMemo(() => {
    const counts = new Map<string, number>();
    allCourses.forEach((course) => {
      const level = normalizeCourseLevel(course.level);
      if (level) counts.set(level, (counts.get(level) || 0) + 1);
    });
    return counts;
  }, [allCourses]);
  const listedPriceCount = useMemo(
    () => allCourses.filter((course) => course.cost !== null && course.cost !== undefined && String(course.cost).trim() !== '').length,
    [allCourses],
  );
  const providers = useMemo(
    () => new Set(allCourses.map((course) => course.provider || course.platform).filter(Boolean)).size,
    [allCourses],
  );
  const featuredCourses = allCourses.slice(0, 3);
  const leadCourse = featuredCourses[0];

  const visibleCourses = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const filtered = allCourses.filter((course) => {
      const searchable = [
        course.title,
        course.description,
        course.provider,
        course.platform,
        course.category,
        course.subcategory,
        ...getCourseSkills(course),
      ].filter(Boolean).join(' ').toLowerCase();
      const hasListedPrice = course.cost !== null && course.cost !== undefined && String(course.cost).trim() !== '';
      return (!query || searchable.includes(query))
        && (selectedCategory === 'all' || getCourseCategory(course) === selectedCategory)
        && (selectedLevels.length === 0 || selectedLevels.includes(normalizeCourseLevel(course.level)))
        && (priceFilter === 'all' || (priceFilter === 'listed' ? hasListedPrice : !hasListedPrice))
        && (!certificatesOnly || Boolean(course.certification));
    });
    if (sortOrder === 'title') filtered.sort((a, b) => a.title.localeCompare(b.title));
    return filtered;
  }, [allCourses, certificatesOnly, priceFilter, searchQuery, selectedCategory, selectedLevels, sortOrder]);
  const pageSize = 12;
  const pageCount = Math.ceil(visibleCourses.length / pageSize);
  const displayedPage = Math.min(currentPage, Math.max(1, pageCount));
  const firstVisiblePage = Math.max(1, Math.min(displayedPage - 2, pageCount - 4));
  const pageNumbers = Array.from({ length: Math.min(5, pageCount) }, (_, index) => firstVisiblePage + index);
  const coursesToRender = visibleCourses.slice((displayedPage - 1) * pageSize, displayedPage * pageSize);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedLevels, priceFilter, certificatesOnly, searchQuery, sortOrder]);

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
                  {allCoursesLoading ? '—' : categories.length}
                </p>
                <p className="mt-1 text-xs text-immersive-text-secondary sm:text-sm">course categories</p>
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

      <section className="mx-auto w-full max-w-[1600px] px-3 py-8 sm:px-4 sm:py-10 lg:px-6" aria-labelledby="how-you-grow-title">
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-immersive-border bg-gradient-to-br from-immersive-primary/[0.06] via-immersive-card to-immersive-secondary/[0.06] p-6 shadow-sm shadow-immersive-shadow sm:p-8 lg:grid lg:grid-cols-[0.85fr_2.15fr] lg:items-center lg:gap-10 lg:p-10">
          <div aria-hidden="true" className="pointer-events-none absolute -left-20 -top-24 -z-10 h-64 w-64 rounded-full bg-immersive-primary/[0.06] blur-3xl" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-immersive-primary/15 bg-immersive-primary/[0.06] px-3 py-1.5 text-[11px] font-bold text-immersive-primary">
              <Sparkles size={14} aria-hidden="true" />
              Simple steps to your dream career
            </span>
            <h2 id="how-you-grow-title" className="mt-4 text-3xl font-bold tracking-[-0.04em] text-immersive-text-primary sm:text-4xl">
              How You Grow
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-immersive-text-secondary">
              Getting started with Cohortia is easy. Follow these steps and start your journey today.
            </p>
            <button
              type="button"
              onClick={onOpenWizard}
              className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-immersive-primary px-5 py-3 text-sm font-bold text-white shadow-md shadow-immersive-shadow transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-immersive-primary focus-visible:ring-offset-2 focus-visible:ring-offset-immersive-bg"
            >
              Get started <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>

          <ol className="mt-9 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:mt-0 lg:grid-cols-4 lg:gap-3">
            {growOptions.map(({ title, subtitle, icon: Icon }, index) => (
              <li key={title} className="relative flex flex-col items-center text-center">
                {index < growOptions.length - 1 && (
                  <span aria-hidden="true" className="absolute left-[calc(50%+1.65rem)] top-[1.15rem] hidden w-[calc(100%-3.3rem)] border-t border-dashed border-immersive-secondary/40 lg:block" />
                )}
                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-immersive-secondary/20 bg-immersive-bg text-immersive-secondary shadow-sm shadow-immersive-shadow sm:h-12 sm:w-12">
                  <Icon size={19} aria-hidden="true" />
                </span>
                <span className="mt-2 text-xs font-bold text-immersive-primary">{index + 1}</span>
                <h3 className="mt-1 text-sm font-bold text-immersive-text-primary sm:text-base">{title}</h3>
                <p className="mt-1 max-w-[12rem] text-xs leading-5 text-immersive-text-secondary">{subtitle}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1600px] px-3 pb-8 pt-2 sm:px-4 sm:pb-10 lg:px-6" aria-labelledby="starter-courses-title">
        <div className="grid gap-5 xl:grid-cols-[minmax(250px,0.72fr)_minmax(0,2.28fr)]">
          <div className="rounded-2xl border border-immersive-border bg-immersive-card p-4 shadow-sm shadow-immersive-shadow sm:p-5">
            <div className="mb-4">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-immersive-primary">Explore Cohortia</p>
              <h2 className="mt-1 text-lg font-bold text-immersive-text-primary">Learning at a glance</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Courses', value: allCoursesLoading || allCoursesError ? '—' : allCourses.length, icon: BookOpen },
                { label: 'Course categories', value: allCoursesLoading || allCoursesError ? '—' : categories.length, icon: Compass },
                { label: 'Course sources', value: allCoursesLoading || allCoursesError ? '—' : providers, icon: Layers3 },
                { label: 'Certificate courses', value: allCoursesLoading || allCoursesError ? '—' : allCourses.filter((course) => Boolean(course.certification)).length, icon: Award },
              ].map(({ label, value, icon: Icon }) => (
                <div key={label} className="min-h-[94px] rounded-xl border border-immersive-border/70 bg-immersive-bg/65 p-3 sm:p-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-immersive-primary/10 text-immersive-primary">
                      <Icon size={15} aria-hidden="true" />
                    </span>
                    <span className="text-lg font-bold tabular-nums text-immersive-text-primary">{value}</span>
                  </div>
                  <p className="mt-2 text-xs leading-4 text-immersive-text-secondary">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="min-w-0 rounded-2xl border border-immersive-border bg-immersive-card p-4 shadow-sm shadow-immersive-shadow sm:p-5">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-immersive-primary">Learn from real providers</p>
                <h2 id="starter-courses-title" className="mt-1 text-lg font-bold text-immersive-text-primary sm:text-xl">
                  Courses to help you get started
                </h2>
              </div>
              <button
                type="button"
                onClick={scrollToCatalog}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-lg px-2 py-2 text-xs font-semibold text-immersive-secondary transition hover:bg-immersive-primary/5 hover:text-immersive-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-immersive-primary sm:text-sm"
              >
                View all <ArrowRight size={14} aria-hidden="true" />
              </button>
            </div>

            {allCoursesLoading ? (
              <div className="grid gap-3 md:grid-cols-3" aria-label="Loading featured courses">
                {[0, 1, 2].map((item) => (
                  <div key={item} className="h-40 animate-pulse rounded-xl border border-immersive-border bg-immersive-bg p-3">
                    <div className="h-10 w-10 rounded-lg bg-slate-200 dark:bg-slate-700" />
                    <div className="mt-4 h-3 w-2/3 rounded bg-slate-200 dark:bg-slate-700" />
                    <div className="mt-2 h-3 w-full rounded bg-slate-100 dark:bg-slate-800" />
                  </div>
                ))}
              </div>
            ) : allCoursesError ? (
              <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800 dark:border-rose-900 dark:bg-rose-950 dark:text-rose-200" role="alert">
                <p className="font-semibold">Featured courses are unavailable.</p>
                <p className="mt-1">{allCoursesError}</p>
                <button
                  type="button"
                  onClick={() => setRetryKey((key) => key + 1)}
                  className="mt-3 rounded-lg border border-rose-300 px-3 py-1.5 text-xs font-semibold dark:border-rose-800"
                >
                  Try again
                </button>
              </div>
            ) : featuredCourses.length === 0 ? (
              <div className="rounded-xl border border-immersive-border bg-immersive-bg p-8 text-center text-sm text-immersive-text-secondary">
                No courses are available in the catalog yet.
              </div>
            ) : (
              <div className="grid items-stretch gap-3 md:grid-cols-3">
                {featuredCourses.map((course) => (
                  <article key={course.id} className="group flex min-w-0 flex-col rounded-xl border border-immersive-border bg-immersive-bg/55 p-3 transition hover:border-immersive-primary/35 hover:bg-immersive-card-hover">
                    <div className="flex min-w-0 items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-immersive-border bg-immersive-card text-immersive-primary">
                        {course.image ? (
                          <img
                            src={course.image}
                            alt=""
                            loading="lazy"
                            className="h-full w-full object-cover"
                            onError={(event) => event.currentTarget.remove()}
                          />
                        ) : (
                          <GraduationCap size={20} aria-hidden="true" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="inline-flex max-w-full truncate rounded-full bg-immersive-primary/10 px-2 py-0.5 text-[10px] font-semibold text-immersive-primary">
                          {course.level || course.type || 'Course'}
                        </span>
                        <h3 className="mt-1.5 line-clamp-2 min-h-10 text-xs font-bold leading-5 text-immersive-text-primary sm:text-sm">
                          {course.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-2 truncate text-[11px] font-medium text-immersive-text-secondary">
                      {course.provider || course.platform || 'Course catalog'}
                    </p>
                    <div className="mt-2 flex min-h-5 flex-wrap items-center gap-x-2 gap-y-1 text-[10px] text-immersive-text-secondary">
                      {course.certification && (
                        <span className="inline-flex items-center gap-1 text-immersive-secondary">
                          <Award size={12} aria-hidden="true" /> Certificate
                        </span>
                      )}
                      {course.duration && <span>{course.duration}</span>}
                    </div>
                    <button
                      type="button"
                      onClick={() => onSelectTrack(course.id)}
                      className="mt-auto inline-flex min-h-8 items-center gap-1 pt-3 text-xs font-semibold text-immersive-secondary transition hover:text-immersive-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-immersive-primary"
                    >
                      Explore course <ArrowRight size={13} aria-hidden="true" />
                    </button>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="course-catalog" className="scroll-mt-8 bg-immersive-bg/70">
        <div className="mx-auto w-full max-w-[1600px] px-3 py-16 sm:px-4 sm:py-20 lg:px-6">
          <div className="grid items-start gap-6 lg:grid-cols-[250px_minmax(0,1fr)] xl:grid-cols-[280px_minmax(0,1fr)]">
            <aside className="h-fit rounded-2xl border border-immersive-border bg-immersive-card p-4 shadow-sm shadow-immersive-shadow sm:p-5">
              <label className="relative block">
                <span className="sr-only">Search courses</span>
                <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-immersive-text-secondary" aria-hidden="true" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search for a course…"
                  className="h-10 w-full rounded-lg border border-immersive-border bg-immersive-input-bg pl-9 pr-3 text-xs text-immersive-text-primary outline-none transition placeholder:text-immersive-text-secondary/60 focus:border-immersive-primary focus:ring-2 focus:ring-immersive-primary/20"
                />
              </label>

              <div className="mb-3 mt-6 flex items-center gap-2 text-sm font-bold text-immersive-text-primary">
                <Layers3 size={16} aria-hidden="true" />
                Categories
              </div>
              <div className="max-h-72 space-y-1 overflow-y-auto pr-1">
                <button
                  type="button"
                  onClick={() => setSelectedCategory('all')}
                  aria-pressed={selectedCategory === 'all'}
                  className={`flex w-full items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-left text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-immersive-primary ${selectedCategory === 'all' ? 'bg-immersive-primary/10 text-immersive-primary' : 'text-immersive-text-secondary hover:bg-immersive-card-hover hover:text-immersive-text-primary'}`}
                >
                  All courses
                  <span className="tabular-nums opacity-70">{allCoursesLoading ? '—' : allCourses.length}</span>
                </button>
                {categories.map(({ name, count }) => (
                  <button
                    type="button"
                    key={name}
                    onClick={() => setSelectedCategory(name)}
                    aria-pressed={selectedCategory === name}
                    className={`flex w-full items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-left text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-immersive-primary ${selectedCategory === name ? 'bg-immersive-primary/10 text-immersive-primary' : 'text-immersive-text-secondary hover:bg-immersive-card-hover hover:text-immersive-text-primary'}`}
                  >
                    <span className="truncate">{name}</span>
                    <span className="shrink-0 tabular-nums opacity-70">{count}</span>
                  </button>
                ))}
              </div>

              <div className="my-5 border-t border-immersive-border" />
              <fieldset>
                <legend className="text-sm font-bold text-immersive-text-primary">Level</legend>
                <div className="mt-2 space-y-2">
                  {levels.map((level) => (
                    <label key={level} className="flex cursor-pointer items-center justify-between gap-2 text-xs text-immersive-text-secondary">
                      <span className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={selectedLevels.includes(level)}
                          onChange={(event) => setSelectedLevels((current) => (
                            event.target.checked ? [...current, level] : current.filter((item) => item !== level)
                          ))}
                          className="h-4 w-4 rounded border-immersive-border accent-immersive-primary focus:ring-immersive-primary"
                        />
                        {level}
                      </span>
                      <span className="tabular-nums">{levelCounts.get(level) || 0}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="my-5 border-t border-immersive-border" />
              <fieldset>
                <legend className="text-sm font-bold text-immersive-text-primary">Price details</legend>
                <div className="mt-2 space-y-2">
                  {[
                    { value: 'listed' as const, label: 'Price listed', count: listedPriceCount },
                    { value: 'unlisted' as const, label: 'Price not listed', count: allCourses.length - listedPriceCount },
                  ].map((option) => (
                    <label key={option.value} className="flex cursor-pointer items-center justify-between gap-2 text-xs text-immersive-text-secondary">
                      <span className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="course-price"
                          checked={priceFilter === option.value}
                          onChange={() => setPriceFilter(option.value)}
                          className="h-4 w-4 border-immersive-border accent-immersive-primary focus:ring-immersive-primary"
                        />
                        {option.label}
                      </span>
                      <span className="tabular-nums">{allCoursesLoading ? '—' : option.count}</span>
                    </label>
                  ))}
                  <label className="flex cursor-pointer items-center gap-2 text-xs text-immersive-text-secondary">
                    <input
                      type="radio"
                      name="course-price"
                      checked={priceFilter === 'all'}
                      onChange={() => setPriceFilter('all')}
                      className="h-4 w-4 border-immersive-border accent-immersive-primary focus:ring-immersive-primary"
                    />
                    Any price
                  </label>
                </div>
              </fieldset>

              <div className="mt-6 rounded-xl bg-immersive-primary p-4 text-white">
                <Award size={20} aria-hidden="true" />
                <h3 className="mt-2 text-sm font-bold">Get certified. Stand out.</h3>
                <p className="mt-1 text-xs leading-5 text-white/80">Explore courses with certification details in the catalog.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedLevels([]);
                    setPriceFilter('all');
                    setCertificatesOnly(true);
                    setSearchQuery('');
                    document.getElementById('course-catalog')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="mt-3 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#17314f] transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-immersive-primary"
                >
                  Explore courses <ArrowRight size={13} aria-hidden="true" />
                </button>
              </div>
            </aside>

            <div className="min-w-0">
              <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-immersive-primary">The catalog</p>
                  <h2 className="mt-1 text-2xl font-bold tracking-tight text-immersive-text-primary sm:text-3xl">Find your next course</h2>
                  <p className="mt-1 text-xs text-immersive-text-secondary" aria-live="polite">
                    {allCoursesLoading ? 'Loading courses…' : `${visibleCourses.length} ${visibleCourses.length === 1 ? 'course' : 'courses'} available`}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <label className="flex items-center gap-2 text-xs text-immersive-text-secondary">
                    <span className="hidden sm:inline">Sort by:</span>
                    <select
                      value={sortOrder}
                      onChange={(event) => {
                        if (event.target.value === 'catalog' || event.target.value === 'title') {
                          setSortOrder(event.target.value);
                        }
                      }}
                      className="h-9 rounded-lg border border-immersive-border bg-immersive-input-bg px-3 text-xs font-semibold text-immersive-text-primary outline-none focus:border-immersive-primary focus:ring-2 focus:ring-immersive-primary/20"
                    >
                      <option value="catalog">Catalog order</option>
                      <option value="title">Title A–Z</option>
                    </select>
                  </label>
                  {(searchQuery || selectedCategory !== 'all' || selectedLevels.length > 0 || priceFilter !== 'all' || certificatesOnly || sortOrder !== 'catalog') && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                      setSelectedLevels([]);
                      setPriceFilter('all');
                      setCertificatesOnly(false);
                      setSortOrder('catalog');
                    }}
                    className="text-sm font-semibold text-immersive-secondary hover:text-immersive-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-immersive-primary focus-visible:ring-offset-2 focus-visible:ring-offset-immersive-bg"
                  >
                    Clear filters
                  </button>
                  )}
                </div>
              </div>

              {allCoursesLoading ? (
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Loading courses">
                  {[0, 1, 2].map((item) => <CourseCardSkeleton key={item} />)}
                </div>
              ) : allCoursesError ? (
                <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-800 dark:border-rose-900 dark:bg-rose-950 dark:text-rose-200" role="alert">
                  <p className="font-semibold">Courses could not be loaded.</p>
                  <p className="mt-1">{allCoursesError}</p>
                  <button
                    type="button"
                    onClick={() => setRetryKey((key) => key + 1)}
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
                <div className="grid items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {coursesToRender.map((course) => <CourseCard key={course.id} course={course} onSelect={onSelectTrack} />)}
                </div>
              )}
              {!allCoursesLoading && !allCoursesError && pageCount > 1 && (
                <nav className="mt-8 flex flex-wrap items-center justify-center gap-2" aria-label="Course catalog pagination">
                  <button
                    type="button"
                    onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                    disabled={displayedPage === 1}
                    className="min-h-10 rounded-lg border border-immersive-border bg-immersive-card px-3 text-xs font-semibold text-immersive-text-primary transition hover:border-immersive-primary disabled:cursor-not-allowed disabled:opacity-45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-immersive-primary"
                  >
                    Previous
                  </button>
                  {pageNumbers.map((page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setCurrentPage(page)}
                      aria-label={`Go to page ${page}`}
                      aria-current={displayedPage === page ? 'page' : undefined}
                      className={`min-h-10 min-w-10 rounded-lg border px-3 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-immersive-primary ${displayedPage === page ? 'border-immersive-primary bg-immersive-primary text-white' : 'border-immersive-border bg-immersive-card text-immersive-text-primary hover:border-immersive-primary'}`}
                    >
                      {page}
                    </button>
                  ))}
                  <span className="px-1 text-xs text-immersive-text-secondary" aria-live="polite">
                    Page {displayedPage} of {pageCount}
                  </span>
                  <button
                    type="button"
                    onClick={() => setCurrentPage((page) => Math.min(pageCount, page + 1))}
                    disabled={displayedPage === pageCount}
                    className="min-h-10 rounded-lg border border-immersive-border bg-immersive-card px-3 text-xs font-semibold text-immersive-text-primary transition hover:border-immersive-primary disabled:cursor-not-allowed disabled:opacity-45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-immersive-primary"
                  >
                    Next
                  </button>
                </nav>
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
