import {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {ArrowRight, ChevronLeft, ChevronRight} from 'lucide-react';
import {getCourseImage} from '../data/courseImages';
import {isFreeOnCohortia} from '../data/freeOnCohortiaCourses';
import {catalogCourseApi, type CatalogCourse} from '../services/api';

export default function FreeCoursesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [courses, setCourses] = useState<CatalogCourse[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(false);
  const [activeCourse, setActiveCourse] = useState(0);

  useEffect(() => {
    let active = true;
    catalogCourseApi.getAll()
      .then((response) => {
        if (!response.success || !response.data?.courses) {
          throw new Error(response.error || 'Free courses could not be loaded.');
        }
        if (active) setCourses(response.data.courses.filter((course) => isFreeOnCohortia(course.id)));
      })
      .catch((error: unknown) => {
        if (active) setLoadError(error instanceof Error ? error.message : 'Free courses could not be loaded.');
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const updatePosition = (track: HTMLDivElement) => {
    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanScrollBack(track.scrollLeft > 1);
    setCanScrollForward(track.scrollLeft < maxScroll - 1);

    const trackCenter = track.getBoundingClientRect().left + track.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;
    track.querySelectorAll<HTMLElement>(':scope > article').forEach((child, index) => {
      const bounds = child.getBoundingClientRect();
      const distance = Math.abs(bounds.left + bounds.width / 2 - trackCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });
    setActiveCourse(closestIndex);
  };

  useEffect(() => {
    if (courses.length > 0 && trackRef.current) updatePosition(trackRef.current);
  }, [courses]);

  const scrollByPage = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({left: direction * track.clientWidth * 0.85, behavior: 'smooth'});
  };

  return (
    <section className="mb-12 lg:mb-16" aria-labelledby="free-courses-heading">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <span className="mb-4 inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300">
            Learn at no cost
          </span>
          <h2 id="free-courses-heading" className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-immersive-text-primary sm:text-5xl">
            Explore free courses
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-immersive-text-secondary sm:text-lg">
            Learn and complete Cohortia assessments at no cost. Provider certification exams may cost extra.
          </p>
        </div>
        {courses.length > 0 && (
          <div className="flex items-center gap-3">
            <span className="mr-1 text-sm font-medium tabular-nums text-immersive-text-secondary" aria-live="polite">
              {String(activeCourse + 1).padStart(2, '0')} <span aria-hidden="true">/</span> {String(courses.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={() => scrollByPage(-1)}
              disabled={!canScrollBack}
              aria-label="Previous free courses"
              className="grid h-11 w-11 place-items-center rounded-full border border-immersive-border bg-immersive-card text-immersive-text-primary shadow-sm transition hover:border-[#ff4b3e] hover:text-[#e83e32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4b3e] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollByPage(1)}
              disabled={!canScrollForward}
              aria-label="Next free courses"
              className="grid h-11 w-11 place-items-center rounded-full border border-immersive-border bg-immersive-card text-immersive-text-primary shadow-sm transition hover:border-[#ff4b3e] hover:text-[#e83e32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4b3e] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>

      {loading && (
        <div className="flex gap-4 overflow-hidden" role="status" aria-label="Loading free courses">
          {[0, 1, 2].map((item) => (
            <div key={item} className="w-[min(22rem,85vw)] shrink-0 animate-pulse overflow-hidden rounded-2xl border border-immersive-border bg-immersive-card">
              <div className="aspect-[16/9] bg-immersive-bg" />
              <div className="space-y-3 p-5">
                <div className="h-3 w-1/3 rounded bg-immersive-bg" />
                <div className="h-6 w-4/5 rounded bg-immersive-bg" />
                <div className="h-4 w-1/2 rounded bg-immersive-bg" />
              </div>
            </div>
          ))}
        </div>
      )}

      {loadError && <p className="text-sm text-rose-700 dark:text-rose-300" role="alert">{loadError}</p>}

      {!loading && !loadError && courses.length === 0 && (
        <p className="text-sm text-immersive-text-secondary">Free courses are temporarily unavailable.</p>
      )}

      {!loading && !loadError && courses.length > 0 && (
        <div
          ref={trackRef}
          onScroll={(event) => updatePosition(event.currentTarget)}
          role="region"
          aria-label="Free courses"
          aria-roledescription="carousel"
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5"
        >
          {courses.map((course) => {
            const image = getCourseImage(course.id, course.image);
            return (
              <article
                key={course.id}
                role="group"
                aria-roledescription="slide"
                aria-label={course.title}
                className="group flex w-[min(22rem,85vw)] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-immersive-border bg-immersive-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
              >
                <Link
                  to={`/careers/course/${encodeURIComponent(course.id)}`}
                  aria-label={`Explore ${course.title}`}
                  className="flex h-full flex-col rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#ff4b3e]"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-immersive-primary/20 via-immersive-bg to-immersive-secondary/20">
                    {image && (
                      <img
                        src={image}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    )}
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/5 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-sky-500 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                      Free
                    </span>
                    <span className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-slate-950/45 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                      {course.provider || course.platform || 'Cohortia'}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="font-display text-xl font-bold leading-snug text-immersive-text-primary">
                      {course.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs text-immersive-text-secondary">
                      {[course.level, course.duration].filter(Boolean).map((item) => (
                        <span key={item} className="rounded-full bg-immersive-bg px-3 py-1.5">{item}</span>
                      ))}
                    </div>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-immersive-primary">
                      Explore course <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
