import { useState, useEffect, useMemo, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { User, Menu, X, Sparkles, ChevronDown, LogOut, BookOpen, Trophy, Activity, Sun, Moon, ArrowRight, Search } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { backendUserToPreferences } from "../types";
import { catalogCourseApi, type CatalogCourse } from "../services/api";
import { careerCategories, careerRoles, featuredCareerRoles, getCareerCategoryPath, getCareerRolePath, getCareerSkillPath } from "../data/careerDirectory";
import Logo from "./Logo";

interface HeaderProps {
  onOpenWizard: () => void;
}

interface SearchSuggestion {
  href: string;
  label: string;
  detail: string;
  kind: "Course" | "Role" | "Category";
}

function readMenuList(value?: string | string[] | null): string[] {
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

export default function Header({ onOpenWizard }: HeaderProps) {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const userProfile = user ? backendUserToPreferences(user) : null;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isCareerMenuOpen, setIsCareerMenuOpen] = useState(false);
  const careerMenuCloseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isMobileCareerMenuOpen, setIsMobileCareerMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const desktopSearchRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);
  const [careerMenuCourses, setCareerMenuCourses] = useState<CatalogCourse[]>([]);
  const [careerMenuLoading, setCareerMenuLoading] = useState(false);
  const [careerMenuLoaded, setCareerMenuLoaded] = useState(false);
  const [careerMenuError, setCareerMenuError] = useState("");
  const [careerMenuAttempt, setCareerMenuAttempt] = useState(0);

  const activePath = location.pathname;
  const isDashboard = activePath.startsWith("/dashboard");

  const cancelCareerMenuClose = () => {
    if (careerMenuCloseTimeout.current !== null) {
      clearTimeout(careerMenuCloseTimeout.current);
      careerMenuCloseTimeout.current = null;
    }
  };

  const openCareerMenu = () => {
    cancelCareerMenuClose();
    setIsCareerMenuOpen(true);
  };

  const scheduleCareerMenuClose = () => {
    cancelCareerMenuClose();
    careerMenuCloseTimeout.current = setTimeout(() => {
      setIsCareerMenuOpen(false);
      careerMenuCloseTimeout.current = null;
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isUserDropdownOpen) return;
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("#user-profile-dropdown-container")) {
        setIsUserDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isUserDropdownOpen]);

  useEffect(() => {
    if ((isCareerMenuOpen || isMobileCareerMenuOpen || isSearchFocused) && !careerMenuLoaded) {
      let active = true;
      setCareerMenuLoading(true);
      setCareerMenuError("");
      catalogCourseApi.getAll().then((response) => {
        if (!response.success || !response.data?.courses) {
          throw new Error(response.error || "Career learning links are unavailable.");
        }
        if (active) {
          setCareerMenuCourses(response.data.courses);
          setCareerMenuLoaded(true);
        }
      }).catch((error: unknown) => {
        if (active) setCareerMenuError(error instanceof Error ? error.message : "Career learning links are unavailable.");
      }).finally(() => {
        if (active) setCareerMenuLoading(false);
      });
      return () => { active = false; };
    }
    return undefined;
  }, [careerMenuAttempt, careerMenuLoaded, isCareerMenuOpen, isMobileCareerMenuOpen, isSearchFocused]);

  useEffect(() => {
    cancelCareerMenuClose();
    setIsCareerMenuOpen(false);
    setIsMobileCareerMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isCareerMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        cancelCareerMenuClose();
        setIsCareerMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isCareerMenuOpen]);

  useEffect(() => () => {
    if (careerMenuCloseTimeout.current !== null) clearTimeout(careerMenuCloseTimeout.current);
  }, []);

  useEffect(() => {
    if (!isSearchFocused) return;
    const handleOutsidePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!desktopSearchRef.current?.contains(target) && !mobileSearchRef.current?.contains(target)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener("pointerdown", handleOutsidePointerDown);
    return () => document.removeEventListener("pointerdown", handleOutsidePointerDown);
  }, [isSearchFocused]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const getTrackName = (track: string) => {
    switch (track) {
      case "frontend": return "Frontend Eng.";
      case "design": return "UI/UX Design";
      case "product": return "Product Mgmt";
      case "analytics": return "Data Analytics";
      default: return track.substring(0, 12);
    }
  };

  const dashboardLinks = [
    { path: "/careers", label: "Careers" },
    { path: "/dashboard", label: "Overview" },
    { path: "/dashboard/learning", label: "Learning Board" },
    { path: "/dashboard/mentor", label: "Cohortia Mentor" },
    { path: "/dashboard/community", label: "Community" },
    { path: "/dashboard/projects", label: "Projects" },
    { path: "/dashboard/progress", label: "Progress" },
    { path: "/dashboard/profile", label: "Profile" }
  ];

  const publicLinks = [
    { path: "/", label: "Home" },
    { path: "/careers", label: "Careers" },
    { path: "/experience", label: "Experience Track" },
    { path: "/community", label: "Community" },
    { path: "/contact", label: "Contact" }
  ];

  const navLinks = userProfile ? dashboardLinks : publicLinks;

  const isActive = (path: string) => activePath === path;
  const certifiedCourses = careerMenuCourses.filter((course) => course.certification).slice(0, 5);
  const trendingSkills = useMemo(() => {
    const counts = new Map<string, number>();
    careerMenuCourses.forEach((course) => {
      [...readMenuList(course.skillTags), ...readMenuList(course.skills)].forEach((skill) => {
        const label = skill.trim();
        if (label && !careerCategories.some((category) => category.name.toLowerCase() === label.toLowerCase())) {
          counts.set(label, (counts.get(label) || 0) + 1);
        }
      });
    });
    return [...counts.entries()]
      .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0]))
      .slice(0, 8)
      .map(([skill]) => skill);
  }, [careerMenuCourses]);
  const handleCareerMenuRetry = () => {
    setCareerMenuLoaded(false);
    setCareerMenuAttempt((attempt) => attempt + 1);
  };
  const searchSuggestions = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];

    const results: SearchSuggestion[] = [];
    careerCategories.forEach((category) => {
      if (`${category.name} ${category.description}`.toLowerCase().includes(query)) {
        results.push({
          href: getCareerCategoryPath(category),
          label: category.name,
          detail: "Career category",
          kind: "Category",
        });
      }
    });
    careerRoles.forEach((role) => {
      if (role.name.toLowerCase().includes(query)) {
        results.push({
          href: getCareerRolePath(role.category, role.name),
          label: role.name,
          detail: role.category.name,
          kind: "Role",
        });
      }
    });
    careerMenuCourses.forEach((course) => {
      const searchable = [
        course.title,
        course.provider,
        course.description,
        course.marketCategory,
        course.marketSubcategory,
        course.category,
        course.subcategory,
        ...readMenuList(course.skills),
        ...readMenuList(course.skillTags),
      ].filter(Boolean).join(" ").toLowerCase();
      if (searchable.includes(query)) {
        results.push({
          href: `/careers/course/${encodeURIComponent(course.id)}`,
          label: course.title,
          detail: course.provider || course.marketSubcategory || course.category,
          kind: "Course",
        });
      }
    });

    return results
      .sort((left, right) => {
        const leftIndex = left.label.toLowerCase().indexOf(query);
        const rightIndex = right.label.toLowerCase().indexOf(query);
        const leftRank = leftIndex < 0 ? Number.MAX_SAFE_INTEGER : leftIndex;
        const rightRank = rightIndex < 0 ? Number.MAX_SAFE_INTEGER : rightIndex;
        return leftRank - rightRank || left.label.localeCompare(right.label);
      })
      .slice(0, 8);
  }, [careerMenuCourses, searchQuery]);

  const selectSearchSuggestion = (suggestion: SearchSuggestion) => {
    navigate(suggestion.href);
    setSearchQuery("");
    setIsSearchFocused(false);
    setIsCareerMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  const renderSearch = (isMobile = false) => {
    const searchRef = isMobile ? mobileSearchRef : desktopSearchRef;
    const showSuggestions = isSearchFocused && searchQuery.trim().length > 0;
    const searchId = isMobile ? "mobile-career-search" : "desktop-career-search";
    return (
      <div ref={searchRef} className={`relative ${isMobile ? "w-full" : "w-48 xl:w-56 2xl:w-64"}`}>
        <label htmlFor={searchId} className="sr-only">Search courses, roles, and categories</label>
        <div className="flex h-10 items-center gap-2 rounded-xl border border-immersive-border bg-immersive-card px-3 text-immersive-text-secondary shadow-sm focus-within:border-immersive-primary/60 focus-within:ring-2 focus-within:ring-immersive-primary/15">
          <Search size={16} aria-hidden="true" className="shrink-0" />
          <input
            id={searchId}
            type="search"
            value={searchQuery}
            role="combobox"
            aria-autocomplete="list"
            aria-expanded={showSuggestions}
            aria-controls={`${searchId}-suggestions`}
            aria-activedescendant={showSuggestions && searchSuggestions[activeSuggestionIndex] ? `${searchId}-suggestion-${activeSuggestionIndex}` : undefined}
            placeholder="Search courses, roles..."
            autoComplete="off"
            className="min-w-0 flex-1 bg-transparent text-sm text-immersive-text-primary outline-none placeholder:text-immersive-text-secondary/70"
            onFocus={() => {
              setIsSearchFocused(true);
              setIsCareerMenuOpen(false);
            }}
            onChange={(event) => {
              setSearchQuery(event.target.value);
              setActiveSuggestionIndex(0);
              setIsSearchFocused(true);
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setIsSearchFocused(false);
              } else if (event.key === "ArrowDown" && searchSuggestions.length) {
                event.preventDefault();
                setActiveSuggestionIndex((index) => (index + 1) % searchSuggestions.length);
              } else if (event.key === "ArrowUp" && searchSuggestions.length) {
                event.preventDefault();
                setActiveSuggestionIndex((index) => (index - 1 + searchSuggestions.length) % searchSuggestions.length);
              } else if (event.key === "Enter" && searchSuggestions[activeSuggestionIndex]) {
                event.preventDefault();
                selectSearchSuggestion(searchSuggestions[activeSuggestionIndex]);
              }
            }}
          />
        </div>
        {showSuggestions && (
          <div
            id={`${searchId}-suggestions`}
            role="listbox"
            aria-label="Search suggestions"
            className="absolute right-0 top-full z-[80] mt-2 max-h-[min(70vh,28rem)] w-[min(24rem,calc(100vw-2rem))] overflow-y-auto rounded-xl border border-immersive-border bg-immersive-card p-2 text-immersive-text-primary shadow-2xl shadow-immersive-shadow"
          >
            {searchSuggestions.map((suggestion, index) => (
              <button
                key={`${suggestion.kind}-${suggestion.href}`}
                id={`${searchId}-suggestion-${index}`}
                type="button"
                role="option"
                aria-selected={activeSuggestionIndex === index}
                className={`block w-full rounded-lg px-3 py-2 text-left ${activeSuggestionIndex === index ? "bg-immersive-bg" : "hover:bg-immersive-bg"}`}
                onMouseEnter={() => setActiveSuggestionIndex(index)}
                onClick={() => selectSearchSuggestion(suggestion)}
              >
                <span className="flex items-start justify-between gap-3">
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold">{suggestion.label}</span>
                    <span className="mt-0.5 block truncate text-xs text-immersive-text-secondary">{suggestion.detail}</span>
                  </span>
                  <span className="shrink-0 rounded-md bg-immersive-bg px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-immersive-text-secondary">{suggestion.kind}</span>
                </span>
              </button>
            ))}
            {!searchSuggestions.length && careerMenuLoading ? (
              <p role="status" className="px-3 py-3 text-sm text-immersive-text-secondary">Searching courses…</p>
            ) : !searchSuggestions.length && careerMenuError ? (
              <div role="alert" className="px-3 py-3 text-sm text-rose-700 dark:text-rose-300">
                <p>{careerMenuError}</p>
                <button type="button" onClick={handleCareerMenuRetry} className="mt-2 font-semibold underline">Retry search</button>
              </div>
            ) : !searchSuggestions.length ? (
              <p className="px-3 py-3 text-sm text-immersive-text-secondary">No matching courses, roles, or categories.</p>
            ) : null}
          </div>
        )}
      </div>
    );
  };

  return (
    <header
      id="header-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDashboard ? "md:hidden" : ""
      } ${
        isScrolled
          ? "bg-immersive-bg/95 backdrop-blur-md border-b border-immersive-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={`flex items-center space-x-2.5 cursor-pointer select-none ${isDashboard ? "md:hidden" : ""}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative flex items-center justify-center">
              <Logo size={42} />
              <div className="absolute top-1 right-1 w-2 h-2 bg-immersive-secondary rounded-full animate-ping" />
              <div className="absolute top-1 right-1 w-2 h-2 bg-immersive-secondary rounded-full" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-sans font-extrabold text-2xl tracking-tight text-immersive-text-primary">
                Cohortia
              </span>
              <span className="text-[9px] font-mono tracking-widest text-immersive-secondary uppercase font-bold">
                CAREER PLATFORM
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-5">
            {!isDashboard && navLinks.map((link) => (
              link.path === "/careers" ? (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={openCareerMenu}
                  onMouseLeave={scheduleCareerMenuClose}
                >
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={isCareerMenuOpen}
                    onFocus={openCareerMenu}
                    onClick={openCareerMenu}
                    className={`relative flex items-center gap-1.5 py-1.5 font-sans text-sm font-semibold transition-colors ${
                      activePath.startsWith("/careers") || isCareerMenuOpen
                        ? "text-immersive-primary"
                        : "text-immersive-text-secondary hover:text-immersive-text-primary"
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${isCareerMenuOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                    {(activePath.startsWith("/careers") || isCareerMenuOpen) && <span className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-immersive-primary" />}
                  </button>

                  {isCareerMenuOpen && !isDashboard && (
                    <div
                      className={`fixed left-1/2 z-[60] w-[min(calc(100vw-2rem),1480px)] -translate-x-1/2 pt-2 ${isScrolled ? "top-[66px]" : "top-[82px]"}`}
                      onMouseEnter={openCareerMenu}
                      onMouseLeave={scheduleCareerMenuClose}
                    >
                      <div className="overflow-hidden rounded-2xl border border-immersive-border bg-immersive-card text-immersive-text-primary shadow-2xl shadow-immersive-shadow">
                        <div className="grid gap-7 p-6 md:grid-cols-2 xl:grid-cols-[1fr_1.25fr_1fr_0.9fr]">
                          <section>
                            <div className="flex items-center justify-between gap-2">
                              <h2 className="text-sm font-bold">Explore roles</h2>
                              <Link to="/careers/roles" className="text-xs font-semibold text-immersive-primary hover:underline">View all</Link>
                            </div>
                            <div className="mt-3 space-y-1">
                              {featuredCareerRoles.map((role) => (
                                <Link key={`${role.category.slug}-${role.slug}`} to={getCareerRolePath(role.category, role.name)} className="block rounded-lg px-2 py-1.5 text-sm text-immersive-text-secondary transition hover:bg-immersive-bg hover:text-immersive-primary">
                                  {role.name}
                                </Link>
                              ))}
                            </div>
                          </section>

                          <section>
                            <div className="flex items-center justify-between gap-2">
                              <h2 className="text-sm font-bold">Explore categories</h2>
                              <Link to="/careers/categories" className="text-xs font-semibold text-immersive-primary hover:underline">View all</Link>
                            </div>
                            <div className="mt-3 grid max-h-[390px] grid-cols-2 gap-x-3 gap-y-1 overflow-y-auto pr-1">
                              {careerCategories.map((category) => (
                                <Link key={category.slug} to={getCareerCategoryPath(category)} className="rounded-lg px-2 py-1.5 text-sm leading-5 text-immersive-text-secondary transition hover:bg-immersive-bg hover:text-immersive-primary">
                                  {category.name}
                                </Link>
                              ))}
                            </div>
                          </section>

                          <section>
                            <h2 className="text-sm font-bold">Earn a professional certificate</h2>
                            {careerMenuLoading ? (
                              <p role="status" className="mt-3 text-sm text-immersive-text-secondary">Loading certificate courses…</p>
                            ) : careerMenuError ? (
                              <div role="alert" className="mt-3 text-sm text-rose-700 dark:text-rose-300">
                                <p>{careerMenuError}</p>
                                <button type="button" onClick={handleCareerMenuRetry} className="mt-2 font-semibold underline">Retry</button>
                              </div>
                            ) : certifiedCourses.length ? (
                              <div className="mt-3 space-y-1">
                                {certifiedCourses.map((course) => (
                                  <Link key={course.id} to={`/careers/course/${encodeURIComponent(course.id)}`} className="block rounded-lg px-2 py-1.5 text-sm leading-5 text-immersive-text-secondary transition hover:bg-immersive-bg hover:text-immersive-primary">
                                    {course.certification || course.title}
                                  </Link>
                                ))}
                              </div>
                            ) : (
                              <p className="mt-3 text-sm leading-6 text-immersive-text-secondary">Certificate course links will appear here when they are listed in the catalog.</p>
                            )}
                            <Link to="/careers" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-immersive-primary hover:underline">
                              Browse courses <ArrowRight size={13} aria-hidden="true" />
                            </Link>
                          </section>

                          <section>
                            <h2 className="text-sm font-bold">Explore trending skills</h2>
                            {careerMenuLoading ? (
                              <p role="status" className="mt-3 text-sm text-immersive-text-secondary">Loading catalog skills…</p>
                            ) : trendingSkills.length ? (
                              <div className="mt-3 space-y-1">
                                {trendingSkills.map((skill) => (
                                  <Link key={skill} to={getCareerSkillPath(skill)} className="block rounded-lg px-2 py-1.5 text-sm text-immersive-text-secondary transition hover:bg-immersive-bg hover:text-immersive-primary">
                                    {skill}
                                  </Link>
                                ))}
                              </div>
                            ) : careerMenuError ? (
                              <p role="status" className="mt-3 text-sm text-immersive-text-secondary">Catalog skills could not be loaded.</p>
                            ) : (
                              <p className="mt-3 text-sm leading-6 text-immersive-text-secondary">Skill links will appear here when the catalog is available.</p>
                            )}
                            <button type="button" onClick={() => { setIsCareerMenuOpen(false); onOpenWizard(); }} className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-immersive-primary hover:underline">
                              Help me choose <ArrowRight size={13} aria-hidden="true" />
                            </button>
                          </section>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`font-sans text-sm font-semibold transition-all relative py-1.5 cursor-pointer ${
                    isActive(link.path)
                      ? "text-immersive-primary"
                      : "text-immersive-text-secondary hover:text-immersive-text-primary"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-immersive-primary rounded-full" />
                  )}
                </Link>
              )
            ))}
            {!isDashboard && renderSearch()}
          </nav>

          {/* Action buttons / Dynamic Profile */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-immersive-card border border-immersive-border hover:border-immersive-secondary/40 text-immersive-text-secondary hover:text-immersive-text-primary transition-all duration-200 cursor-pointer h-11 w-11 flex items-center justify-center shadow-sm"
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              aria-label="Toggle dark/light mode"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {userProfile ? (
              <div id="user-profile-dropdown-container" className={`relative flex items-center space-x-2 ${isDashboard ? "md:hidden" : ""}`}>
                {/* User Dropdown Trigger Button */}
                <button
                  onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                  className="flex items-center space-x-3 bg-immersive-card hover:bg-immersive-card-hover border border-immersive-border hover:border-immersive-secondary/30 rounded-2xl px-3 py-1.5 shadow-md shadow-immersive-shadow h-11 transition-all duration-300 cursor-pointer text-left select-none"
                >
                  <div className="w-8 h-8 rounded-xl bg-immersive-primary flex items-center justify-center text-xs font-mono font-black text-immersive-text-primary shadow-lg shadow-immersive-shadow shadow-immersive-primary/10 relative overflow-hidden shrink-0">
                    <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity" />
                    <span className="relative z-10">{userProfile.name.slice(0, 2).toUpperCase()}</span>
                  </div>

                  <div className="flex flex-col pr-1">
                    <div className="flex items-center space-x-1.5">
                      <span className="text-xs font-black text-immersive-text-primary leading-none">
                        {userProfile.name}
                      </span>
                      <ChevronDown className={`w-3.5 h-3.5 text-immersive-text-secondary transition-transform duration-300 ${isUserDropdownOpen ? 'rotate-180 text-immersive-primary' : ''}`} />
                    </div>
                    <span className="text-[9px] font-mono text-immersive-secondary font-bold uppercase tracking-wider mt-1 leading-none">
                      {getTrackName(userProfile.track)}
                    </span>
                  </div>
                </button>

                {/* Separate Logout Icon Button */}
                <button
                  onClick={handleLogout}
                  className="p-2.5 rounded-2xl bg-immersive-card border border-immersive-border hover:border-rose-500/30 hover:bg-rose-500/5 text-immersive-text-secondary hover:text-rose-400 transition-all duration-300 cursor-pointer h-11 w-11 flex items-center justify-center shrink-0 shadow-md shadow-immersive-shadow"
                  title="Logout Session"
                >
                  <LogOut className="w-4 h-4" />
                </button>

                {/* Dropdown Menu */}
                {isUserDropdownOpen && (
                  <div className="absolute right-0 top-13 mt-1.5 w-60 rounded-2xl bg-immersive-card/98 border border-immersive-border shadow-xl shadow-immersive-shadow backdrop-blur-md z-50 p-2.5 animate-in fade-in slide-in-from-top-3 duration-200 text-left flex flex-col space-y-1">
                    <div className="px-3 py-2 border-b border-immersive-border/40 mb-1">
                      <p className="text-[10px] font-mono font-bold text-immersive-text-secondary uppercase">COHORT PROFILE</p>
                      <p className="text-xs font-black text-immersive-text-primary truncate">{userProfile.name}</p>
                    </div>

                    <button
                      onClick={() => {
                        navigate("/dashboard");
                        setIsUserDropdownOpen(false);
                      }}
                      className="flex items-center space-x-3 w-full p-2.5 rounded-xl hover:bg-immersive-bg/50 hover:text-immersive-secondary text-immersive-text-secondary font-bold text-xs transition-colors text-left cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4 text-immersive-secondary" />
                      <span>Dashboard Overview</span>
                    </button>

                    <button
                      onClick={() => {
                        navigate("/dashboard/learning");
                        setIsUserDropdownOpen(false);
                      }}
                      className="flex items-center space-x-3 w-full p-2.5 rounded-xl hover:bg-immersive-bg/50 hover:text-immersive-secondary text-immersive-text-secondary font-bold text-xs transition-colors text-left cursor-pointer"
                    >
                      <Activity className="w-4 h-4 text-immersive-primary" />
                      <span>Interactive Roadmap</span>
                    </button>

                    <button
                      onClick={() => {
                        navigate("/dashboard/projects");
                        setIsUserDropdownOpen(false);
                      }}
                      className="flex items-center space-x-3 w-full p-2.5 rounded-xl hover:bg-immersive-bg/50 hover:text-immersive-secondary text-immersive-text-secondary font-bold text-xs transition-colors text-left cursor-pointer"
                    >
                      <Trophy className="w-4 h-4 text-amber-500" />
                      <span>My Capstone Projects</span>
                    </button>

                    <button
                      onClick={() => {
                        navigate("/dashboard/mentor");
                        setIsUserDropdownOpen(false);
                      }}
                      className="flex items-center space-x-3 w-full p-2.5 rounded-xl hover:bg-immersive-bg/50 hover:text-immersive-secondary text-immersive-text-secondary font-bold text-xs transition-colors text-left cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      <span>Consult AI Mentor</span>
                    </button>

                    <button
                      onClick={() => {
                        navigate("/dashboard/profile");
                        setIsUserDropdownOpen(false);
                      }}
                      className="flex items-center space-x-3 w-full p-2.5 rounded-xl hover:bg-immersive-bg/50 hover:text-immersive-secondary text-immersive-text-secondary font-bold text-xs transition-colors text-left cursor-pointer"
                    >
                      <User className="w-4 h-4 text-emerald-400" />
                      <span>Account Settings</span>
                    </button>

                    <div className="border-t border-immersive-border/40 my-1 pt-1">
                      <button
                        onClick={() => {
                          handleLogout();
                          setIsUserDropdownOpen(false);
                        }}
                        className="flex items-center space-x-3 w-full p-2.5 rounded-xl hover:bg-rose-500/10 text-rose-400 hover:text-rose-300 font-bold text-xs transition-colors text-left cursor-pointer"
                      >
                        <LogOut className="w-4 h-4 text-rose-400" />
                        <span>Sign Out of Cohortia</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3.5 h-10">
                <Link
                  to="/login"
                  className={`font-sans text-sm font-bold transition-all cursor-pointer ${
                    isActive("/login")
                      ? "text-immersive-primary"
                      : "text-immersive-text-secondary hover:text-immersive-text-primary"
                  }`}
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="px-5 py-2.5 rounded-xl text-sm font-bold text-immersive-text-primary bg-immersive-primary hover:brightness-110 shadow-lg shadow-immersive-shadow shadow-immersive-primary/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Row */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-immersive-text-secondary hover:text-immersive-text-primary rounded-lg bg-immersive-card border border-immersive-border hover:bg-immersive-card-hover cursor-pointer"
              aria-label="Toggle Theme"
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-immersive-text-secondary hover:text-immersive-text-primary rounded-lg bg-immersive-card border border-immersive-border hover:bg-immersive-card-hover cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain bg-immersive-bg/98 border-b border-immersive-border px-4 py-6 space-y-4 animate-in fade-in slide-in-from-top duration-200 shadow-xl shadow-immersive-shadow">
          {renderSearch(true)}
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              link.path === "/careers" ? (
                <section key={link.path} className="border-l-2 border-transparent pl-3">
                  <button
                    type="button"
                    aria-expanded={isMobileCareerMenuOpen}
                    onClick={() => setIsMobileCareerMenuOpen((open) => !open)}
                    className={`flex w-full items-center justify-between py-1.5 text-left text-base font-semibold ${
                      activePath.startsWith("/careers") || isMobileCareerMenuOpen ? "text-immersive-primary" : "text-immersive-text-secondary"
                    }`}
                  >
                    Careers <ChevronDown size={17} className={`transition-transform ${isMobileCareerMenuOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                  {isMobileCareerMenuOpen && (
                    <div className="mt-2 max-h-[55vh] space-y-4 overflow-y-auto rounded-xl border border-immersive-border bg-immersive-card p-3">
                      <Link to="/careers" onClick={() => setIsMobileMenuOpen(false)} className="block rounded-lg bg-immersive-primary/10 px-3 py-2 text-sm font-bold text-immersive-primary">
                        Career explorer overview
                      </Link>
                      <div>
                        <div className="mb-1 flex items-center justify-between">
                          <h2 className="text-xs font-bold uppercase tracking-wider text-immersive-text-secondary">Featured roles</h2>
                          <Link to="/careers/roles" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-semibold text-immersive-primary">View all</Link>
                        </div>
                        <div className="space-y-1">
                          {featuredCareerRoles.map((role) => (
                            <Link key={`${role.category.slug}-${role.slug}`} to={getCareerRolePath(role.category, role.name)} onClick={() => setIsMobileMenuOpen(false)} className="block rounded-lg px-2 py-2 text-sm text-immersive-text-secondary hover:bg-immersive-bg hover:text-immersive-primary">
                              {role.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between">
                          <h2 className="text-xs font-bold uppercase tracking-wider text-immersive-text-secondary">Categories</h2>
                          <Link to="/careers/categories" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-semibold text-immersive-primary">View all</Link>
                        </div>
                        <div className="space-y-1">
                          {careerCategories.map((category) => (
                            <Link key={category.slug} to={getCareerCategoryPath(category)} onClick={() => setIsMobileMenuOpen(false)} className="block rounded-lg px-2 py-2 text-sm leading-5 text-immersive-text-secondary hover:bg-immersive-bg hover:text-immersive-primary">
                              {category.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h2 className="mb-1 text-xs font-bold uppercase tracking-wider text-immersive-text-secondary">Professional certificates</h2>
                        {careerMenuLoading ? (
                          <p role="status" className="px-2 py-2 text-sm text-immersive-text-secondary">Loading certificate courses…</p>
                        ) : careerMenuError ? (
                          <div role="alert" className="px-2 py-2 text-sm text-rose-700 dark:text-rose-300">
                            <p>{careerMenuError}</p>
                            <button type="button" onClick={handleCareerMenuRetry} className="mt-2 font-semibold underline">Retry</button>
                          </div>
                        ) : certifiedCourses.length ? (
                          certifiedCourses.map((course) => (
                            <Link key={course.id} to={`/careers/course/${encodeURIComponent(course.id)}`} onClick={() => setIsMobileMenuOpen(false)} className="block rounded-lg px-2 py-2 text-sm text-immersive-text-secondary hover:bg-immersive-bg hover:text-immersive-primary">
                              {course.certification || course.title}
                            </Link>
                          ))
                        ) : (
                          <p className="px-2 py-2 text-sm text-immersive-text-secondary">Certificate course links will appear here when listed in the catalog.</p>
                        )}
                      </div>
                      <div>
                        <h2 className="mb-1 text-xs font-bold uppercase tracking-wider text-immersive-text-secondary">Trending skills</h2>
                        {careerMenuLoading ? (
                          <p role="status" className="px-2 py-2 text-sm text-immersive-text-secondary">Loading catalog skills…</p>
                        ) : trendingSkills.length ? (
                          trendingSkills.map((skill) => (
                            <Link key={skill} to={getCareerSkillPath(skill)} onClick={() => setIsMobileMenuOpen(false)} className="block rounded-lg px-2 py-2 text-sm text-immersive-text-secondary hover:bg-immersive-bg hover:text-immersive-primary">
                              {skill}
                            </Link>
                          ))
                        ) : careerMenuError ? (
                          <p role="status" className="px-2 py-2 text-sm text-immersive-text-secondary">Catalog skills could not be loaded.</p>
                        ) : (
                          <p className="px-2 py-2 text-sm text-immersive-text-secondary">Skill links will appear here when the catalog is available.</p>
                        )}
                      </div>
                    </div>
                  )}
                </section>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-base font-semibold py-1.5 text-left border-l-2 pl-3 transition-colors ${
                    isActive(link.path)
                      ? "border-immersive-primary text-immersive-primary bg-immersive-primary/5"
                      : "border-transparent text-immersive-text-secondary hover:text-immersive-text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          <div className="pt-4 border-t border-immersive-border/20 flex flex-col space-y-3">
            {userProfile ? (
              <div className="flex items-center justify-between bg-immersive-card border border-immersive-border rounded-xl p-3 w-full">
                <div className="flex items-center space-x-3 text-left">
                  <div className="w-9 h-9 rounded-xl bg-immersive-primary flex items-center justify-center text-xs font-mono font-black text-immersive-text-primary shadow-md shadow-immersive-shadow">
                    {userProfile.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-extrabold text-immersive-text-primary">
                      {userProfile.name}
                    </span>
                    <span className="text-[10px] font-mono text-immersive-secondary font-bold uppercase mt-0.5 leading-none">
                      {getTrackName(userProfile.track)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="p-2 rounded-xl bg-rose-500/10 text-rose-400 hover:text-rose-300 transition-colors flex items-center justify-center cursor-pointer"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3.5">
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-xl text-sm font-bold text-immersive-text-primary bg-immersive-card border border-immersive-border cursor-pointer"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-xl text-sm font-bold text-immersive-text-primary bg-immersive-primary cursor-pointer"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
