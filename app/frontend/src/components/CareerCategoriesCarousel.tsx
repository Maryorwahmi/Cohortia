import {useRef, useState, type UIEvent} from 'react';
import {Link} from 'react-router-dom';
import {ArrowRight, ChevronLeft, ChevronRight} from 'lucide-react';
import {careerCategories, getCareerCategoryPath} from '../data/careerDirectory';
import {getCategoryImage} from '../data/categoryImages';

export default function CareerCategoriesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(true);
  const [activeCategory, setActiveCategory] = useState(0);

  const updatePosition = (event: UIEvent<HTMLDivElement>) => {
    const track = event.currentTarget;
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
    setActiveCategory(closestIndex);
  };

  const scrollByPage = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({left: direction * track.clientWidth * 0.85, behavior: 'smooth'});
  };

  return (
    <div className="mb-12 lg:mb-16">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <span className="mb-4 inline-flex items-center rounded-full border border-[#ff4b3e]/20 bg-[#ff4b3e]/[0.07] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#e83e32] dark:text-[#ff786e]">
            Find your direction
          </span>
          <h2 id="career-categories-heading" className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-immersive-text-primary sm:text-5xl">
            Explore career categories
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-immersive-text-secondary sm:text-lg">
            Discover the career paths, skills, and learning opportunities across technology.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="mr-1 text-sm font-medium tabular-nums text-immersive-text-secondary" aria-live="polite">
            {String(activeCategory + 1).padStart(2, '0')} <span aria-hidden="true">/</span> {String(careerCategories.length).padStart(2, '0')}
          </span>
          <button
            type="button"
            onClick={() => scrollByPage(-1)}
            disabled={!canScrollBack}
            aria-label="Previous career categories"
            className="grid h-11 w-11 place-items-center rounded-full border border-immersive-border bg-immersive-card text-immersive-text-primary shadow-sm transition hover:border-[#ff4b3e] hover:text-[#e83e32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4b3e] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollByPage(1)}
            disabled={!canScrollForward}
            aria-label="Next career categories"
            className="grid h-11 w-11 place-items-center rounded-full border border-immersive-border bg-immersive-card text-immersive-text-primary shadow-sm transition hover:border-[#ff4b3e] hover:text-[#e83e32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4b3e] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        onScroll={updatePosition}
        role="region"
        aria-label="Career categories"
        aria-roledescription="carousel"
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5"
      >
        {careerCategories.map((category) => {
          const image = getCategoryImage(category);
          return (
            <article
              key={category.slug}
              role="group"
              aria-roledescription="slide"
              aria-label={category.name}
              className="group flex w-[min(22rem,85vw)] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-immersive-border bg-immersive-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
            >
              <Link
                to={getCareerCategoryPath(category)}
                aria-label={`Explore ${category.name}`}
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
                  <span className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-slate-950/45 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                    {category.roles.length} career roles
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-display text-xl font-bold leading-snug text-immersive-text-primary sm:text-2xl">
                    {category.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-immersive-text-secondary">
                    {category.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-immersive-primary">
                    Explore category <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </article>
          );
        })}
      </div>

      <div className="mt-3 flex flex-wrap justify-center gap-3">
        <Link
          to="/careers/categories"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-immersive-border px-5 py-2.5 text-sm font-bold text-immersive-text-primary transition hover:border-[#ff4b3e] hover:text-[#e83e32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4b3e]"
        >
          Browse all career categories <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <a
          href="#course-catalog"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#ff4b3e] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#e83e32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4b3e]"
        >
          Browse cybersecurity courses <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
