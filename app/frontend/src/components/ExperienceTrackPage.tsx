import { useEffect, useState } from "react";
import { 
  ArrowRight, 
  Layers3, 
  ListChecks, 
  Sparkles, 
  Target, 
  Check, 
  CheckCircle2, 
  Coins, 
  Bot, 
  Users, 
  Crown, 
  ShieldCheck, 
  Briefcase, 
  TrendingUp, 
  Award, 
  BookOpen,
  LoaderCircle,
  Search,
  X,
  Minus,
  HelpCircle,
  FileCode2,
  Terminal
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import ExperienceTrackSim from "./ExperienceTrack";
import { catalogCourseApi, userApi } from "../services/api";
import type { CatalogCourse } from "../services/api";
import { RoadmapGoal, RoadmapLevel, RoadmapSelection, UserPreferences } from "../types";
import { useAuth } from "../context/AuthContext";

interface ExperienceTrackPageProps {
  userProfile: UserPreferences | null;
  onOpenWizard?: () => void;
}

export default function ExperienceTrackPage({ userProfile, onOpenWizard }: ExperienceTrackPageProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const {refreshUser} = useAuth();
  const [activePlanTab, setActivePlanTab] = useState<"pivot" | "upskill" | "lead">("pivot");
  const [builderOpen, setBuilderOpen] = useState(false);
  const [builderMode, setBuilderMode] = useState<"choice" | "roadmap" | "single_course">("choice");
  const [builderGoal, setBuilderGoal] = useState<RoadmapGoal>("Pivot into a new career");
  const [catalogCourses, setCatalogCourses] = useState<CatalogCourse[]>([]);
  const [catalogLoading, setCatalogLoading] = useState(false);
  const [catalogLoaded, setCatalogLoaded] = useState(false);
  const [catalogError, setCatalogError] = useState("");
  const [courseSearch, setCourseSearch] = useState("");
  const [courseCategory, setCourseCategory] = useState("");
  const [selectedCourseId, setSelectedCourseId] = useState("");
  const [courseSubmitting, setCourseSubmitting] = useState(false);
  const [courseError, setCourseError] = useState("");
  const onboardingMessage = new URLSearchParams(location.search).get("onboarding");
  const showOnboardingMessage = onboardingMessage === "required" || onboardingMessage === "google";
  const shouldOpenBuilder = showOnboardingMessage || new URLSearchParams(location.search).get("signup") === "1";

  useEffect(() => {
    if (shouldOpenBuilder) setBuilderOpen(true);
  }, [shouldOpenBuilder]);

  useEffect(() => {
    if (!shouldOpenBuilder || new URLSearchParams(location.search).get("onboarding") !== "google") return;
    try {
      const pendingSelection = sessionStorage.getItem("cohortia_pending_roadmap");
      const selection = pendingSelection ? JSON.parse(pendingSelection) as RoadmapSelection : null;
      if (selection?.mode === "single_course" && selection.selectedCourseId) {
        setBuilderMode("single_course");
        setSelectedCourseId(selection.selectedCourseId);
      }
    } catch {
      sessionStorage.removeItem("cohortia_pending_roadmap");
    }
  }, [location.search, shouldOpenBuilder]);

  useEffect(() => {
    if (!builderOpen) return;
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setBuilderOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [builderOpen]);

  useEffect(() => {
    if (!builderOpen || builderMode !== "single_course" || catalogLoaded || catalogLoading) return;
    let cancelled = false;
    setCatalogLoading(true);
    setCatalogError("");
    catalogCourseApi.getAll()
      .then((response) => {
        if (!response.success || !response.data?.courses) {
          throw new Error(response.error || "Courses could not be loaded. Please try again.");
        }
        if (!cancelled) {
          setCatalogCourses(response.data.courses.filter((course) => course.catalogStatus !== "archive"));
          setCatalogLoaded(true);
        }
      })
      .catch((error: unknown) => {
        if (!cancelled) {
          setCatalogError(error instanceof Error ? error.message : "Courses could not be loaded. Please try again.");
          setCatalogLoaded(true);
        }
      })
      .finally(() => {
        if (!cancelled) setCatalogLoading(false);
      });
    return () => { cancelled = true; };
  }, [builderOpen, builderMode, catalogLoaded, catalogLoading]);

  const openBuilder = (goal: RoadmapGoal = "Pivot into a new career", mode: "choice" | "roadmap" | "single_course" = "choice") => {
    setBuilderGoal(goal);
    setBuilderMode(mode);
    setCourseError("");
    setBuilderOpen(true);
  };

  const getCourseCategory = (course: CatalogCourse) =>
    course.marketSubcategory?.trim() || course.subcategory?.trim() || course.marketCategory || course.category;
  const courseCategories = Array.from(new Set<string>(
    catalogCourses.map(getCourseCategory).filter((category): category is string => Boolean(category)),
  )).sort((left, right) => left.localeCompare(right));
  const visibleCourses = catalogCourses.filter((course) => {
    const matchesCategory = !courseCategory || getCourseCategory(course) === courseCategory;
    const query = courseSearch.trim().toLowerCase();
    const matchesSearch = !query || `${course.title} ${course.category} ${course.subcategory} ${course.description || ""}`.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const continueWithCourse = async () => {
    const course = catalogCourses.find((item) => item.id === selectedCourseId);
    if (!course) {
      setCourseError("Choose a course before continuing.");
      return;
    }
    const rawLevel = (course.level || "beginner").toLowerCase();
    const level: RoadmapLevel = rawLevel.includes("advanced")
      ? "advanced"
      : rawLevel.includes("intermediate")
        ? "intermediate"
        : "beginner";
    const category = getCourseCategory(course);
    const categoryId = category.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const selection: RoadmapSelection = {
      mode: "single_course",
      selectedCourseId: course.id,
      careerGoal: "Pivot into a new career",
      learningStage: level,
      selectedCareerId: categoryId,
      selectedCareer: category,
      selectedCourses: {
        beginner: level === "beginner" ? [course.id] : [],
        intermediate: level === "intermediate" ? [course.id] : [],
        advanced: level === "advanced" ? [course.id] : [],
      },
      roadmapOrder: [course.id],
      courseInfo: [{
        id: course.id,
        title: course.title,
        level,
        description: course.description || null,
      }],
    };

    setCourseSubmitting(true);
    setCourseError("");
    try {
      if (userProfile) {
        const response = await userApi.updateProfile({
          roadmapSelection: JSON.stringify(selection),
          careerGoal: selection.careerGoal,
          onboardingGoal: selection.careerGoal,
          desiredField: selection.selectedCareerId,
        });
        if (!response.success || !response.data?.user) {
          throw new Error(response.error || "Your course selection could not be saved.");
        }
        if (!await refreshUser()) {
          throw new Error("Your course was saved, but your account could not be refreshed. Please reload and try again.");
        }
        sessionStorage.removeItem("cohortia_pending_roadmap");
        sessionStorage.removeItem("cohortia_pending_signup_draft");
        navigate("/dashboard", {replace: true});
      } else {
        sessionStorage.setItem("cohortia_pending_roadmap", JSON.stringify(selection));
        navigate("/signup", {state: {roadmapSelection: selection, selectedTrackId: course.id}});
      }
    } catch (error) {
      setCourseError(error instanceof Error ? error.message : "Your course selection could not be saved.");
    } finally {
      setCourseSubmitting(false);
    }
  };

  const comparisonRows = [
    { feature: "Career Goal", pivot: "Change careers into tech", upskill: "Grow in current role", lead: "Lead & specialize" },
    { feature: "Learning Levels", pivot: "Beginner → Advanced", upskill: "Beginner → Advanced", lead: "Intermediate → Advanced" },
    { feature: "Total Courses", pivot: "5 courses", upskill: "4 courses", lead: "2 deep courses" },
    { feature: "Beginner Options", pivot: "4 → choose 2", upskill: "3 → choose 2", lead: "—" },
    { feature: "Intermediate Options", pivot: "3 → choose 2", upskill: "2 → choose 1", lead: "2 → choose 1" },
    { feature: "Advanced Options", pivot: "2 → choose 1", upskill: "2 → choose 1", lead: "2 → choose 1" },
    { feature: "AI Credits", pivot: "500 credits", upskill: "500 credits", lead: "500 credits" },
    { feature: "AI Mentor", pivot: "Included", upskill: "Included", lead: "Included (Advanced)" },
    { feature: "Practical Assistant", pivot: "Included", upskill: "Included", lead: "Included (Advanced)" },
    { feature: "Experience Track", pivot: "Included", upskill: "Included", lead: "Included (Advanced)" },
    { feature: "Community Mastermind", pivot: "Included", upskill: "Included", lead: "Included" },
    { feature: "Career Roadmap", pivot: "Included", upskill: "Included", lead: "Included" },
    { feature: "Skill Gap Analysis", pivot: "Included", upskill: "Included", lead: "Included" },
    { feature: "Portfolio Development", pivot: "Included", upskill: "Included", lead: "Included (Advanced)" },
    { feature: "Interview Preparation", pivot: "Included", upskill: "Included", lead: "Included (Senior)" },
    { feature: "Real-World Projects", pivot: "Included", upskill: "Included", lead: "Included" },
    { feature: "Capstone Project", pivot: "—", upskill: "—", lead: "Included (Production-grade)" },
    { feature: "Leadership Development", pivot: "—", upskill: "—", lead: "Included" },
    { feature: "Specialization Roadmap", pivot: "—", upskill: "—", lead: "Included" },
    { feature: "Senior-Level Readiness", pivot: "—", upskill: "—", lead: "Included" },
  ];

  return (
    <main className="pt-24 pb-16 min-h-screen bg-immersive-bg text-left">
      {showOnboardingMessage && (
        <div className="max-w-[1600px] mx-auto w-full px-3 sm:px-4 lg:px-6 pt-6">
          <div className="rounded-2xl border border-[#FF4B3E]/40 bg-[#FF4B3E]/10 px-4 py-3 text-center text-sm font-bold tracking-wide text-[#FF4B3E]">
            Choose a roadmap or one course to continue
          </div>
        </div>
      )}
      
      {/* 1. Header / Hero */}
      <header className="max-w-[1600px] mx-auto w-full px-3 sm:px-4 lg:px-6 py-10 text-center">
        <span className="text-xs font-mono font-bold tracking-widest text-[#FF4B3E] uppercase bg-[#FF4B3E]/10 border border-[#FF4B3E]/20 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-4">
          <Award className="w-3.5 h-3.5" />
          <span>CAREER ROADMAP & EXPERIENCE</span>
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-immersive-text-primary tracking-tight leading-tight">
          Build a Career Path <span className="text-[#FF4B3E]">That Fits You</span>
        </h1>
        <p className="mt-5 text-base sm:text-lg text-immersive-text-secondary max-w-3xl mx-auto leading-relaxed font-medium">
          Choose a career direction and your current skill level. Follow a guided roadmap through courses at the right stages, combine multiple courses to grow your skills, and build practical experience for your next career move.
        </p>
      </header>

      <section className="max-w-[1600px] mx-auto w-full px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-5">
          <span className="text-xs font-mono font-bold tracking-widest text-[#FF4B3E] uppercase">
            | INTERACTIVE CAREER ROADMAP
          </span>
          <h2 className="text-3xl font-extrabold text-immersive-text-primary mt-2">
            Plan Your Learning Journey
          </h2>
          <p className="mt-3 text-sm text-immersive-text-secondary">
            Build a personalized course path by choosing a career goal and courses for your learning stage.
          </p>
          <button
            type="button"
            onClick={() => openBuilder()}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF4B3E] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#FF4B3E]/20 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B3E] focus-visible:ring-offset-2"
          >
            Build your roadmap <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* 2. The Three Pricing Cards */}
      <section className="max-w-[1600px] mx-auto w-full px-3 sm:px-4 lg:px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Pivot into a New Career — $23 */}
          <div className="bg-immersive-card border border-immersive-border/60 hover:border-[#FF4B3E]/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-immersive-shadow transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-extrabold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-500 uppercase tracking-wider">
                  CAREER TRANSITION
                </span>
                <div className="text-right">
                  <span className="text-3xl font-black text-[#FF4B3E]">$23</span>
                  <span className="text-[10px] font-mono text-immersive-text-secondary block">total track</span>
                </div>
              </div>

              <h2 className="text-2xl font-extrabold text-immersive-text-primary mb-2">
                1. Pivot into a New Career
              </h2>
              <p className="text-xs text-immersive-text-secondary leading-relaxed mb-6 font-medium">
                For learners who want to move into a completely new tech field. Takes you from <strong>Beginner → Intermediate → Advanced</strong> to build knowledge, practical skills, and proof.
              </p>

              {/* Course Structure */}
              <div className="bg-immersive-bg rounded-2xl p-4 border border-immersive-border/60 mb-6 space-y-2 text-xs">
                <div className="text-[10px] font-mono font-bold text-[#FF4B3E] uppercase tracking-wider">
                  COURSE STRUCTURE (5 COURSES)
                </div>
                <div className="flex justify-between items-center text-immersive-text-secondary">
                  <span>Beginner Level:</span>
                  <strong className="text-immersive-text-primary">4 options → Choose 2</strong>
                </div>
                <div className="flex justify-between items-center text-immersive-text-secondary">
                  <span>Intermediate Level:</span>
                  <strong className="text-immersive-text-primary">3 options → Choose 2</strong>
                </div>
                <div className="flex justify-between items-center text-immersive-text-secondary">
                  <span>Advanced Level:</span>
                  <strong className="text-immersive-text-primary">2 options → Choose 1</strong>
                </div>
              </div>

              {/* Key Features */}
              <ul className="space-y-2.5 text-xs text-immersive-text-secondary font-medium">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                  <span><strong>500 AI Credits:</strong> Mentorship, explanations & practice</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                  <span><strong>Practical Assistant:</strong> Hands-on projects & exercises</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                  <span><strong>Experience Track:</strong> Learn → Practice → Build → Demonstrate</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                  <span><strong>Transition Support:</strong> Roadmap, portfolio & interview prep</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-immersive-border/30">
              <button
                type="button"
                onClick={() => openBuilder("Pivot into a new career", "roadmap")}
                className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-[#FF4B3E] hover:brightness-110 shadow-lg shadow-[#FF4B3E]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Select Pivot Track ($23)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Upskill in My Current Role — $30 */}
          <div className="bg-immersive-card border border-[#FF4B3E]/40 hover:border-[#FF4B3E] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-immersive-shadow transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF4B3E]/5 rounded-full blur-xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-extrabold px-2.5 py-1 rounded bg-blue-500/10 text-blue-500 uppercase tracking-wider">
                  ROLE ACCELERATION
                </span>
                <div className="text-right">
                  <span className="text-3xl font-black text-[#FF4B3E]">$30</span>
                  <span className="text-[10px] font-mono text-immersive-text-secondary block">total track</span>
                </div>
              </div>

              <h2 className="text-2xl font-extrabold text-immersive-text-primary mb-2">
                2. Upskill in My Current Role
              </h2>
              <p className="text-xs text-immersive-text-secondary leading-relaxed mb-6 font-medium">
                For professionals already working in tech who want to sharpen existing skills, solve challenging workplace problems, and accelerate toward promotion.
              </p>

              {/* Course Structure */}
              <div className="bg-immersive-bg rounded-2xl p-4 border border-immersive-border/60 mb-6 space-y-2 text-xs">
                <div className="text-[10px] font-mono font-bold text-blue-500 uppercase tracking-wider">
                  COURSE STRUCTURE (4 COURSES)
                </div>
                <div className="flex justify-between items-center text-immersive-text-secondary">
                  <span>Beginner Level:</span>
                  <strong className="text-immersive-text-primary">3 options → Choose 2</strong>
                </div>
                <div className="flex justify-between items-center text-immersive-text-secondary">
                  <span>Intermediate Level:</span>
                  <strong className="text-immersive-text-primary">2 options → Choose 1</strong>
                </div>
                <div className="flex justify-between items-center text-immersive-text-secondary">
                  <span>Advanced Level:</span>
                  <strong className="text-immersive-text-primary">2 options → Choose 1</strong>
                </div>
              </div>

              {/* Key Features */}
              <ul className="space-y-2.5 text-xs text-immersive-text-secondary font-medium">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                  <span><strong>500 AI Credits:</strong> Professional problem-solving & reviews</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                  <span><strong>Practical Assistant:</strong> Applied workplace case studies</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                  <span><strong>Experience Track:</strong> Improve → Apply → Perform → Progress</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />
                  <span><strong>Growth Support:</strong> Skills-gap analysis & promotion readiness</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-immersive-border/30">
              <button
                type="button"
                onClick={() => openBuilder("Up-skill in my current role", "roadmap")}
                className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-[#FF4B3E] hover:brightness-110 shadow-lg shadow-[#FF4B3E]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Select Upskill Track ($30)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Lead & Specialize — $45 */}
          <div className="bg-immersive-card border border-purple-500/30 hover:border-purple-500 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-immersive-shadow transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-extrabold px-2.5 py-1 rounded bg-purple-500/10 text-purple-400 uppercase tracking-wider inline-flex items-center gap-1">
                  <Crown className="w-3 h-3" />
                  <span>DEEPEST TRACK</span>
                </span>
                <div className="text-right">
                  <span className="text-3xl font-black text-[#FF4B3E]">$45</span>
                  <span className="text-[10px] font-mono text-immersive-text-secondary block">total track</span>
                </div>
              </div>

              <h2 className="text-2xl font-extrabold text-immersive-text-primary mb-2">
                3. Lead & Specialize
              </h2>
              <p className="text-xs text-immersive-text-secondary leading-relaxed mb-6 font-medium">
                For experienced professionals aiming for advanced expertise, leadership capabilities, and specialization. Cohortia's deepest career-development track.
              </p>

              {/* Course Structure */}
              <div className="bg-immersive-bg rounded-2xl p-4 border border-immersive-border/60 mb-6 space-y-2 text-xs">
                <div className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-wider">
                  COURSE STRUCTURE (2 DEEP COURSES)
                </div>
                <div className="flex justify-between items-center text-immersive-text-secondary">
                  <span>Intermediate Level:</span>
                  <strong className="text-immersive-text-primary">2 options → Choose 1</strong>
                </div>
                <div className="flex justify-between items-center text-immersive-text-secondary">
                  <span>Advanced Level:</span>
                  <strong className="text-immersive-text-primary">2 options → Choose 1</strong>
                </div>
                <div className="flex justify-between items-center text-immersive-text-secondary">
                  <span>Specialization Depth:</span>
                  <strong className="text-purple-400">Deep Capstone & Leadership</strong>
                </div>
              </div>

              {/* Key Features */}
              <ul className="space-y-2.5 text-xs text-immersive-text-secondary font-medium">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>500 AI Credits:</strong> Strategic thinking & leadership scenarios</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Advanced Assistant:</strong> Complex projects & architecture specs</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Experience Track:</strong> Specialize → Solve → Lead → Demonstrate</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Leadership Readiness:</strong> Senior positioning & capstone defense</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-immersive-border/30">
              <button
                type="button"
                onClick={() => openBuilder("Lead & Specialize", "roadmap")}
                className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-purple-600 hover:brightness-110 shadow-lg shadow-purple-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Select Lead Track ($45)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Comprehensive Feature Comparison Table ("What Changes Between the Plans?") */}
      <section className="max-w-[1600px] mx-auto w-full px-3 sm:px-4 lg:px-6 mb-16">
        <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 sm:p-10 shadow-xl shadow-immersive-shadow">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono font-bold tracking-widest text-[#FF4B3E] uppercase block mb-2">
              | SIDE-BY-SIDE MATRIX
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-immersive-text-primary">
              What Changes Between the Plans?
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-immersive-text-secondary">
              The price reflects the depth of the learning journey, number of courses, practical experience, specialization, mentorship, and career-development support included.
            </p>
          </div>

          {/* Responsive Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-immersive-border/60">
                  <th className="py-4 px-4 font-mono font-bold text-immersive-text-secondary uppercase text-[11px]">
                    Feature
                  </th>
                  <th className="py-4 px-4 font-extrabold text-[#FF4B3E] bg-[#FF4B3E]/5 rounded-t-xl text-center">
                    Pivot — $23
                  </th>
                  <th className="py-4 px-4 font-extrabold text-blue-500 bg-blue-500/5 text-center">
                    Upskill — $30
                  </th>
                  <th className="py-4 px-4 font-extrabold text-purple-400 bg-purple-500/5 rounded-t-xl text-center">
                    Lead & Specialize — $45
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-immersive-border/30">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-immersive-bg/40 transition-colors">
                    <td className="py-3 px-4 font-bold text-immersive-text-primary">
                      {row.feature}
                    </td>
                    <td className="py-3 px-4 text-center bg-[#FF4B3E]/5 font-medium text-immersive-text-primary">
                      {row.pivot === "Included" ? (
                        <Check className="w-4 h-4 text-[#FF4B3E] mx-auto" />
                      ) : row.pivot === "—" ? (
                        <Minus className="w-4 h-4 text-immersive-text-secondary/40 mx-auto" />
                      ) : (
                        <span>{row.pivot}</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center bg-blue-500/5 font-medium text-immersive-text-primary">
                      {row.upskill === "Included" ? (
                        <Check className="w-4 h-4 text-blue-500 mx-auto" />
                      ) : row.upskill === "—" ? (
                        <Minus className="w-4 h-4 text-immersive-text-secondary/40 mx-auto" />
                      ) : (
                        <span>{row.upskill}</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center bg-purple-500/5 font-medium text-immersive-text-primary">
                      {row.lead === "Included" ? (
                        <Check className="w-4 h-4 text-purple-400 mx-auto" />
                      ) : row.lead === "—" ? (
                        <Minus className="w-4 h-4 text-immersive-text-secondary/40 mx-auto" />
                      ) : (
                        <span>{row.lead}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA */}
      <section className="max-w-[1600px] mx-auto w-full px-3 sm:px-4 lg:px-6">
        <div className="border border-immersive-border rounded-3xl p-6 sm:p-10 bg-immersive-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl shadow-immersive-shadow">
          <div>
            <span className="text-xs font-mono tracking-widest text-immersive-secondary font-bold uppercase">
              DESIGNED FOR REAL PROGRESSION
            </span>
            <h2 className="text-2xl font-extrabold text-immersive-text-primary mt-1">
              Less browsing. More becoming.
            </h2>
            <p className="text-xs sm:text-sm text-immersive-text-secondary mt-2 max-w-xl font-medium leading-relaxed">
              Every choice stays connected: Career Goal → Learning Path → Courses → AI Mentor → Practical Assistant → Experience Track → Community → Projects → Career Readiness.
            </p>
          </div>
          <button 
            onClick={() => navigate("/careers")} 
            className="inline-flex items-center gap-2 text-sm font-bold text-white bg-[#FF4B3E] hover:brightness-110 px-6 py-3.5 rounded-xl shadow-lg shadow-[#FF4B3E]/20 transition-all cursor-pointer shrink-0"
          >
            <span>Explore CS Careers</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {builderOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-0 backdrop-blur-sm sm:p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setBuilderOpen(false);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="roadmap-builder-title"
            className="relative flex h-full max-h-screen w-full flex-col overflow-hidden bg-immersive-bg sm:h-[min(92vh,900px)] sm:max-w-6xl sm:rounded-3xl sm:border sm:border-immersive-border sm:shadow-2xl"
          >
            <header className="relative z-10 flex shrink-0 items-center justify-between border-b border-immersive-border bg-immersive-card px-4 py-3 sm:px-6">
              <div>
                <span className="block text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#FF4B3E]">
                  {builderMode === "single_course" ? "Choose a course" : "Interactive career roadmap"}
                </span>
                <h2 id="roadmap-builder-title" className="mt-1 text-base font-extrabold text-immersive-text-primary sm:text-lg">
                  {builderMode === "choice" ? "Choose how you want to learn" : builderMode === "single_course" ? "Start with one course" : "Build your learning journey"}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setBuilderOpen(false)}
                aria-label="Close roadmap builder"
                className="rounded-full border border-immersive-border p-2 text-immersive-text-secondary transition hover:border-[#FF4B3E] hover:text-[#FF4B3E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B3E]"
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </header>
            <div className="min-h-0 flex-1 overflow-y-auto">
              {builderMode === "choice" ? (
                <div className="mx-auto grid min-h-full max-w-4xl content-center gap-5 p-5 sm:grid-cols-2 sm:p-10">
                  <button
                    type="button"
                    onClick={() => setBuilderMode("roadmap")}
                    className="rounded-3xl border border-immersive-border bg-immersive-card p-6 text-left transition hover:border-[#FF4B3E] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B3E] sm:p-8"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF4B3E]/10 text-[#FF4B3E]"><Target aria-hidden="true" className="h-6 w-6" /></span>
                    <span className="mt-5 block text-xl font-extrabold text-immersive-text-primary">Create a roadmap</span>
                    <span className="mt-2 block text-sm leading-relaxed text-immersive-text-secondary">Choose a career goal and build a multi-course path across learning levels.</span>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#FF4B3E]">Build a roadmap <ArrowRight aria-hidden="true" className="h-4 w-4" /></span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setBuilderMode("single_course")}
                    className="rounded-3xl border border-immersive-border bg-immersive-card p-6 text-left transition hover:border-[#FF4B3E] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B3E] sm:p-8"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-immersive-secondary/10 text-immersive-secondary"><BookOpen aria-hidden="true" className="h-6 w-6" /></span>
                    <span className="mt-5 block text-xl font-extrabold text-immersive-text-primary">Choose one course</span>
                    <span className="mt-2 block text-sm leading-relaxed text-immersive-text-secondary">Pick a course you want to focus on now. You can create a broader roadmap later.</span>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#FF4B3E]">Browse courses <ArrowRight aria-hidden="true" className="h-4 w-4" /></span>
                  </button>
                </div>
              ) : builderMode === "single_course" ? (
                <div className="mx-auto max-w-5xl space-y-5 p-5 sm:p-8">
                  <div>
                    <p className="text-sm text-immersive-text-secondary">Choose one course to add to your account. You can build a multi-course roadmap whenever you are ready.</p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_16rem]">
                    <label className="relative block">
                      <span className="sr-only">Search courses</span>
                      <Search aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-immersive-text-secondary" />
                      <input
                        value={courseSearch}
                        onChange={(event) => setCourseSearch(event.target.value)}
                        placeholder="Search courses"
                        className="w-full rounded-xl border border-immersive-border bg-immersive-card py-3 pl-10 pr-3 text-sm text-immersive-text-primary outline-none focus:border-[#FF4B3E]"
                      />
                    </label>
                    <label>
                      <span className="sr-only">Filter by category</span>
                      <select
                        value={courseCategory}
                        onChange={(event) => setCourseCategory(event.target.value)}
                        className="w-full rounded-xl border border-immersive-border bg-immersive-card px-3 py-3 text-sm text-immersive-text-primary outline-none focus:border-[#FF4B3E]"
                      >
                        <option value="">All categories</option>
                        {courseCategories.map((category) => <option key={category} value={category}>{category}</option>)}
                      </select>
                    </label>
                  </div>
                  {catalogLoading && <div role="status" className="flex items-center justify-center gap-2 py-12 text-sm text-immersive-text-secondary"><LoaderCircle aria-hidden="true" className="h-5 w-5 animate-spin" />Loading courses…</div>}
                  {catalogError && (
                    <div role="alert" className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-red-300/40 bg-red-500/10 p-4 text-sm text-red-500">
                      <span>{catalogError}</span>
                      <button type="button" onClick={() => { setCatalogError(""); setCatalogLoaded(false); }} className="font-bold underline underline-offset-2">Try again</button>
                    </div>
                  )}
                  {!catalogLoading && !catalogError && (
                    <>
                      <p className="text-xs font-semibold text-immersive-text-secondary">{visibleCourses.length} courses available</p>
                      <div className="grid max-h-[45vh] gap-3 overflow-y-auto pr-1 sm:grid-cols-2">
                        {visibleCourses.map((course) => {
                          const selected = selectedCourseId === course.id;
                          return (
                            <button
                              key={course.id}
                              type="button"
                              aria-pressed={selected}
                              onClick={() => { setSelectedCourseId(course.id); setCourseError(""); }}
                              className={`rounded-2xl border p-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B3E] ${selected ? "border-[#FF4B3E] bg-[#FF4B3E]/10" : "border-immersive-border bg-immersive-card hover:border-immersive-secondary/60"}`}
                            >
                              <span className="flex items-start justify-between gap-3">
                                <span className="font-bold text-immersive-text-primary">{course.title}</span>
                                {selected && <Check aria-hidden="true" className="h-5 w-5 shrink-0 text-[#FF4B3E]" />}
                              </span>
                              <span className="mt-2 block text-xs text-immersive-secondary">{getCourseCategory(course)} · {course.level || "Beginner"}</span>
                              {course.description && <span className="mt-2 line-clamp-2 block text-xs leading-relaxed text-immersive-text-secondary">{course.description}</span>}
                            </button>
                          );
                        })}
                        {!visibleCourses.length && <p className="col-span-full py-8 text-center text-sm text-immersive-text-secondary">No courses match your search. Try another title or category.</p>}
                      </div>
                    </>
                  )}
                  {courseError && <p role="alert" className="text-sm font-medium text-red-500">{courseError}</p>}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-immersive-border pt-4">
                    <button type="button" onClick={() => setBuilderMode("choice")} className="rounded-xl border border-immersive-border px-4 py-3 text-sm font-bold text-immersive-text-secondary transition hover:border-[#FF4B3E] hover:text-immersive-text-primary">Back</button>
                    <button type="button" onClick={() => void continueWithCourse()} disabled={!selectedCourseId || courseSubmitting} className="inline-flex items-center gap-2 rounded-xl bg-[#FF4B3E] px-5 py-3 text-sm font-bold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50">
                      {courseSubmitting && <LoaderCircle aria-hidden="true" className="h-4 w-4 animate-spin" />}
                      {userProfile ? "Save course and continue" : "Continue to sign up"}
                      <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <ExperienceTrackSim
                  userProfile={userProfile}
                  onOpenWizard={onOpenWizard}
                  initialGoal={builderGoal}
                />
              )}
            </div>
          </section>
        </div>
      )}

    </main>
  );
}
