import { useEffect, useState } from "react";
import { ArrowRight, BookOpen, Check, ChevronDown, ChevronLeft, Clock3, LoaderCircle, Route } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { catalogCourseApi, userApi } from "../services/api";
import type { ApiError, CatalogCourse, CatalogCourseDetails } from "../services/api";
import { RoadmapCourseSelection, RoadmapGoal, RoadmapLevel, RoadmapSelection, SignupDraft } from "../types";
import { useAuth } from "../context/AuthContext";

interface ExperienceTrackProps {
  userProfile?: unknown;
  onOpenWizard?: () => void;
  initialGoal?: RoadmapGoal;
}

const goals: Array<{ 
  id: RoadmapGoal; 
  title: string; 
  price: string;
  totalCourses: string;
  description: string; 
  bestFor: string; 
  outcome: string;
  badge: string;
}> = [
  { 
    id: "Pivot into a new career", 
    title: "Pivot into a new career", 
    price: "$23",
    totalCourses: "5 courses (2 Beg + 2 Int + 1 Adv)",
    badge: "CAREER TRANSITION",
    description: "Build the foundations, proof, and confidence for a new role. Structured pathway from Beginner → Intermediate → Advanced.", 
    bestFor: "Moving into a completely new tech field or starting from the beginning.", 
    outcome: "5 courses total, 500 AI credits, practical assistant, transition roadmap, and portfolio proof." 
  },
  { 
    id: "Up-skill in my current role", 
    title: "Up-skill in my current role", 
    price: "$30",
    totalCourses: "4 courses (2 Beg + 1 Int + 1 Adv)",
    badge: "ROLE ACCELERATION",
    description: "Sharpen skills that make your current work more valuable. Focuses on deepening existing skills rather than starting from zero.", 
    bestFor: "Already working in this area and wanting to deepen practical skills for promotion.", 
    outcome: "4 courses total, 500 AI credits, practical assistant, workplace simulations, and skills-gap analysis." 
  },
  { 
    id: "Lead & Specialize", 
    title: "Lead & Specialize", 
    price: "$45",
    totalCourses: "2 deep courses (1 Int + 1 Adv)",
    badge: "SENIOR & SPECIALIST",
    description: "Move into advanced expertise, technical leadership, and domain specialization. Cohortia's deepest career track.", 
    bestFor: "Experienced engineers aiming for Tech Lead, Staff, or Specialized Domain Expert.", 
    outcome: "2 deep courses, 500 AI credits, advanced assistant, leadership simulations, and capstone project." 
  },
];

interface CourseCategory {
  id: string;
  label: string;
  count: number;
  description: string;
}

const categoryDescriptions: Record<string, string> = {
  "Cyber Defense, Offensive Security & Cloud Security": "Learn to protect systems, investigate threats, test security controls, and secure cloud environments.",
  "Data Engineering, Analytics & Databases": "Build data pipelines, query and manage databases, and turn reliable data into useful insights.",
  "Cloud Architecture, DevOps & Platform Reliability": "Design cloud infrastructure, automate software delivery, and keep production services reliable.",
  "Programming Languages & Core Development": "Develop programming fundamentals and learn languages used to build software, tools, and services.",
  "Machine Learning, Deep Learning & Computer Vision": "Train and evaluate intelligent models for prediction, perception, and image or video understanding.",
  "Frontend, Backend & Full-Stack Web": "Create web experiences, server APIs, and complete applications from interface to data layer.",
  "Game Engines, Graphics & Interactive Development": "Build games and interactive 3D experiences using engines, graphics tools, and digital-asset workflows.",
  "Android, iOS & Cross-Platform": "Design and build applications for Android, iOS, and multiple mobile platforms.",
  "Blockchain, Web3 & FinTech Infrastructure": "Create blockchain applications, smart contracts, and infrastructure for decentralized products.",
  "Networks, Infrastructure & Network Operations": "Configure, secure, and troubleshoot networks that connect users, systems, and cloud services.",
  "Robotics, Embedded Systems & Edge Computing": "Program connected devices, embedded hardware, and robots that sense and act in the physical world.",
  "Architecture, Quality Engineering & Technical Leadership": "Design maintainable systems, improve software quality, and develop technical leadership skills.",
  "LLMs, NLP & Generative AI Applications": "Work with language technologies and build practical applications powered by generative AI.",
  "IT Support, Linux & Systems Administration": "Support users and administer Linux and other systems that keep technology services running.",
  "Product Management, Agile & AI Strategy": "Plan and prioritize products, guide agile delivery, and evaluate how AI supports business goals.",
};

function getCourseCategory(course: CatalogCourse): string {
  return course.marketSubcategory?.trim()
    || course.subcategory?.trim()
    || course.marketCategory
    || course.category;
}

function getCategoryDescription(label: string): string {
  return categoryDescriptions[label]
    || `Explore courses in ${label.toLowerCase()} and build practical skills for this area.`;
}

function getCategoryId(label: string): string {
  return label.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const levels: RoadmapLevel[] = ["beginner", "intermediate", "advanced"];
const quotas: Record<RoadmapGoal, Partial<Record<RoadmapLevel, { options: number; choose: number }>>> = {
  "Pivot into a new career": { beginner: { options: 4, choose: 2 }, intermediate: { options: 3, choose: 2 }, advanced: { options: 2, choose: 1 } },
  "Up-skill in my current role": { beginner: { options: 3, choose: 2 }, intermediate: { options: 2, choose: 1 }, advanced: { options: 2, choose: 1 } },
  "Lead & Specialize": { intermediate: { options: 2, choose: 1 }, advanced: { options: 2, choose: 1 } },
};

function parseCourseSkills(value?: string | null): string[] {
  if (!value) return [];
  try {
    const parsed: unknown = JSON.parse(value);
    if (Array.isArray(parsed)) return parsed.filter((skill): skill is string => typeof skill === "string");
  } catch {
    // Catalog skills are also stored as comma-separated text.
  }
  return value.split(/[,;]/).map((skill) => skill.trim()).filter(Boolean);
}

export default function ExperienceTrack({ onOpenWizard, initialGoal }: ExperienceTrackProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, refreshUser } = useAuth();
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState<RoadmapGoal>(initialGoal || goals[0].id);
  const [courseCategories, setCourseCategories] = useState<CourseCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory | null>(null);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [categoriesError, setCategoriesError] = useState("");
  const [categoriesAttempt, setCategoriesAttempt] = useState(0);
  const [optionsByLevel, setOptionsByLevel] = useState<Record<RoadmapLevel, CatalogCourse[]>>({ beginner: [], intermediate: [], advanced: [] });
  const [selected, setSelected] = useState<Record<RoadmapLevel, CatalogCourse[]>>({ beginner: [], intermediate: [], advanced: [] });
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);
  const [expandedReadyCourseId, setExpandedReadyCourseId] = useState<string | null>(null);
  const [courseDetails, setCourseDetails] = useState<Record<string, {details?: CatalogCourseDetails; loading?: boolean; error?: string}>>({});
  const [recommending, setRecommending] = useState(false);
  const [rankingMethod, setRankingMethod] = useState<"ai" | "mixed" | "catalog-order" | null>(null);
  const [recommendationError, setRecommendationError] = useState("");
  const [courseAvailability, setCourseAvailability] = useState<Partial<Record<RoadmapLevel, {required: number; available: number}>>>({});
  const [selectionFeasible, setSelectionFeasible] = useState<boolean | null>(null);
  const [recommendationAttempt, setRecommendationAttempt] = useState(0);
  const [savingRoadmap, setSavingRoadmap] = useState(false);
  const [saveError, setSaveError] = useState("");

  const activeLevels = (Object.keys(quotas[goal]) as RoadmapLevel[]);
  useEffect(() => {
    let cancelled = false;
    setCategoriesLoading(true);
    setCategoriesError("");
    catalogCourseApi.getAll().then((response) => {
      if (!response.success || !response.data?.courses) {
        throw new Error(response.error || "Unable to load Career page course categories.");
      }
      const counts = new Map<string, number>();
      response.data.courses.forEach((course) => {
        const label = getCourseCategory(course);
        if (label) counts.set(label, (counts.get(label) || 0) + 1);
      });
      const categories = [...counts.entries()]
        .map(([label, count]) => ({id: getCategoryId(label), label, count, description: getCategoryDescription(label)}))
        .sort((left, right) => right.count - left.count || left.label.localeCompare(right.label));
      if (!cancelled) setCourseCategories(categories);
    }).catch((error: unknown) => {
      if (!cancelled) {
        setCourseCategories([]);
        setCategoriesError(error instanceof Error ? error.message : "Unable to load Career page course categories.");
      }
    }).finally(() => {
      if (!cancelled) setCategoriesLoading(false);
    });
    return () => { cancelled = true; };
  }, [categoriesAttempt]);

  useEffect(() => {
    if (step !== 3 || !selectedCategory) return;
    let cancelled = false;
    setRecommending(true);
    setRecommendationError("");
    setRankingMethod(null);
    setCourseAvailability({});
    setSelectionFeasible(null);
    setOptionsByLevel({ beginner: [], intermediate: [], advanced: [] });
    catalogCourseApi.recommend({
      careerGoal: goal,
      selectedCareerId: selectedCategory.id,
      learnerStage: activeLevels[0],
      courseCategory: selectedCategory.label,
    }).then((response) => {
      if (!response.success || !response.data) {
        throw new Error(response.error || "Unable to recommend courses for this career and goal.");
      }
      if (!cancelled) {
        setOptionsByLevel({ beginner: response.data?.courses?.beginner || [], intermediate: response.data?.courses?.intermediate || [], advanced: response.data?.courses?.advanced || [] });
        setRankingMethod(response.data?.rankingMethod || "catalog-order");
        setCourseAvailability(response.data?.availability || {});
        setSelectionFeasible(response.data?.selectionFeasible ?? null);
        if (response.data?.rankingNotice) setRecommendationError(`AI recommendations were unavailable. Showing catalog-ordered courses instead. (${response.data.rankingNotice})`);
      }
    }).catch((error: unknown) => {
      if (!cancelled) {
        setOptionsByLevel({ beginner: [], intermediate: [], advanced: [] });
        const message = error instanceof Error ? error.message : "Unable to recommend courses for this career and goal.";
        const apiError = error instanceof Error ? error as ApiError : undefined;
        const details = apiError?.data?.details as { levels?: Array<{ level: string; required: number; available: number }> } | undefined;
        const shortages = Array.isArray(details?.levels)
          ? details.levels.map(({ level, required, available }) => `${level}: ${available} of ${required} options`).join(", ")
          : "";
        setRecommendationError(shortages ? `${message} Available options — ${shortages}.` : message);
      }
    }).finally(() => {
      if (!cancelled) setRecommending(false);
    });
    return () => { cancelled = true; };
  }, [goal, selectedCategory, activeLevels[0], step, recommendationAttempt]);

  const loadCourseDetails = async (courseId: string) => {
    if (courseDetails[courseId]?.details || courseDetails[courseId]?.loading) return;
    setCourseDetails((current) => ({...current, [courseId]: {loading: true}}));
    try {
      const response = await catalogCourseApi.getDetails(courseId);
      if (!response.success || !response.data) {
        throw new Error(response.error || "Course details are not available right now.");
      }
      setCourseDetails((current) => ({...current, [courseId]: {details: response.data?.details}}));
    } catch (error) {
      const message = error instanceof Error ? error.message : "Course details are not available right now.";
      setCourseDetails((current) => ({...current, [courseId]: {error: message}}));
    }
  };

  useEffect(() => {
    if (step !== 4) return;
    const selectedCourses = activeLevels.flatMap((level) => selected[level]);
    void Promise.all(selectedCourses.map((course) => loadCourseDetails(course.id)));
  }, [step, goal, selected]);

  const totalSelected = Object.values(selected).flat().length;
  const canContinue = activeLevels.every((level) => selected[level].length === quotas[goal][level]?.choose);
  const courseDetailsLoading = activeLevels.flatMap((level) => selected[level]).some((course) => courseDetails[course.id]?.loading);
  const toggleCourse = (level: RoadmapLevel, course: CatalogCourse) => {
    const current = selected[level];
    const quota = quotas[goal][level]?.choose || 0;
    const selectedElsewhere = activeLevels.some((otherLevel) =>
      otherLevel !== level && selected[otherLevel].some((item) => item.id === course.id),
    );
    if (selectedElsewhere) return;
    setSelected({ ...selected, [level]: current.some((item) => item.id === course.id) ? current.filter((item) => item.id !== course.id) : current.length < quota ? [...current, course] : current });
  };

  const createSelection = (): RoadmapSelection => {
    const selectedCourses = levels.reduce((result, level) => {
      result[level] = selected[level].map((course) => course.id);
      return result;
    }, {} as RoadmapSelection["selectedCourses"]);
    const courseInfo: RoadmapCourseSelection[] = activeLevels.flatMap((level) => selected[level].map((course) => {
      const details = courseDetails[course.id]?.details;
      return {
        id: course.id,
        title: course.title,
        level,
        description: (course.description || details?.overview || "").slice(0, 600) || null,
        outcomes: details?.outcomes?.slice(0, 4).map((outcome) => outcome.slice(0, 240)),
        skills: (details?.skills || parseCourseSkills(course.skills)).slice(0, 6),
      };
    }));
    return { careerGoal: goal, learningStage: activeLevels[0], selectedCareerId: selectedCategory?.id || "", selectedCareer: selectedCategory?.label || "", selectedCourses, roadmapOrder: activeLevels.flatMap((level) => selectedCourses[level]), courseInfo };
  };

  const continueToSignup = async () => {
    const roadmapSelection = createSelection();
    if (isAuthenticated) {
      setSavingRoadmap(true);
      setSaveError("");
      try {
        const response = await userApi.updateProfile({
          roadmapSelection: JSON.stringify(roadmapSelection),
          careerGoal: roadmapSelection.careerGoal,
          onboardingGoal: roadmapSelection.careerGoal,
          desiredField: roadmapSelection.selectedCareerId,
        });
        if (!response.success || !response.data?.user) {
          throw new Error(response.error || "Your roadmap could not be saved. Please try again.");
        }
        const updatedUser = await refreshUser();
        if (!updatedUser) {
          throw new Error("Your roadmap was saved, but your account could not be refreshed. Please reload and try again.");
        }
        sessionStorage.removeItem("cohortia_pending_roadmap");
        sessionStorage.removeItem("cohortia_pending_signup_draft");
        navigate("/dashboard", {replace: true});
      } catch (error) {
        setSaveError(error instanceof Error ? error.message : "Your roadmap could not be saved. Please try again.");
      } finally {
        setSavingRoadmap(false);
      }
      return;
    }

    sessionStorage.setItem("cohortia_pending_roadmap", JSON.stringify(roadmapSelection));
    const shouldResumeSignup = new URLSearchParams(location.search).get("signup") === "1";
    let signupDraft: SignupDraft | undefined;
    if (shouldResumeSignup) {
      try {
        const savedDraft = sessionStorage.getItem("cohortia_pending_signup_draft");
        signupDraft = savedDraft ? JSON.parse(savedDraft) as SignupDraft : undefined;
      } catch {
        signupDraft = undefined;
      }
    }
    navigate("/signup", { state: { roadmapSelection, selectedTrackId: selectedCategory?.id, signupDraft } });
  };

  return (
    <section id="experience-simulator" className="py-10 bg-immersive-bg relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-immersive-card border border-immersive-border rounded-3xl overflow-hidden shadow-2xl shadow-immersive-shadow">
          <div className="px-5 py-4 border-b border-immersive-border flex items-center justify-between">
            <div className="flex items-center gap-3"><Route aria-hidden="true" className="w-4 h-4 text-immersive-secondary" /><span className="text-xs font-mono font-bold tracking-widest text-immersive-text-secondary">ROADMAP BUILDER / 0{step}</span></div>
            <span className="text-xs text-immersive-text-secondary">{totalSelected} courses selected</span>
          </div>
          <div className="p-5 sm:p-8">
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-immersive-text-primary">What are you building toward?</h3>
                  <p className="mt-2 text-sm text-immersive-text-secondary">Choose the goal that best matches where you are now. This decides which levels and course mix you will see.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {goals.map((item) => (
                    <button key={item.id} type="button" aria-pressed={goal === item.id} onClick={() => { setGoal(item.id); setSelected({ beginner: [], intermediate: [], advanced: [] }); }} className={`text-left p-5 rounded-2xl border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B3E] ${goal === item.id ? "border-[#FF4B3E] bg-[#FF4B3E]/10" : "border-immersive-border hover:border-immersive-secondary/60"}`}>
                      <span className="text-sm font-bold text-immersive-text-primary">{item.title}</span>
                      <p className="text-xs text-immersive-text-secondary mt-2 leading-relaxed">{item.description}</p>
                      <p className="text-xs text-immersive-text-primary mt-4"><strong>Best for:</strong> {item.bestFor}</p>
                      <p className="text-xs text-immersive-text-secondary mt-2"><strong>Path:</strong> {item.outcome}</p>
                    </button>
                  ))}
                </div>
                <button type="button" onClick={() => setStep(2)} className="primary-action">Choose a career <ArrowRight aria-hidden="true" className="w-4 h-4" /></button>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-immersive-text-primary">Choose a course category</h3>
                  <p className="text-sm text-immersive-text-secondary mt-2">Choose from the same current course categories shown on the Career page.</p>
                </div>
                {categoriesLoading ? (
                  <div role="status" className="flex items-center gap-2 text-sm text-immersive-text-secondary">
                    <LoaderCircle aria-hidden="true" className="h-4 w-4 animate-spin" />
                    Loading course categories...
                  </div>
                ) : categoriesError ? (
                  <div role="alert" className="rounded-xl border border-rose-700 bg-rose-50 p-4 text-sm font-medium text-rose-950 dark:border-rose-400/60 dark:bg-rose-950/60 dark:text-rose-100">
                    {categoriesError}
                    <button type="button" onClick={() => setCategoriesAttempt((attempt) => attempt + 1)} className="ml-2 underline">
                      Retry
                    </button>
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {courseCategories.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        aria-pressed={selectedCategory?.id === item.id}
                        onClick={() => {
                          setSelectedCategory(item);
                          setSelected({ beginner: [], intermediate: [], advanced: [] });
                        }}
                        className={`flex min-h-28 items-start justify-between gap-3 rounded-xl border p-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B3E] ${selectedCategory?.id === item.id ? "border-[#d92f24] bg-[#d92f24] text-white shadow-md shadow-[#d92f24]/20" : "border-slate-300 bg-immersive-card hover:border-[#d92f24] hover:bg-[#fff1ef] dark:border-slate-600 dark:hover:bg-[#351b1a]"}`}
                      >
                        <span className={`space-y-2 text-sm font-bold leading-relaxed ${selectedCategory?.id === item.id ? "text-white" : "text-immersive-text-primary"}`}>
                          <span className="block">{item.label}</span>
                          <span className={`block text-xs font-normal leading-relaxed ${selectedCategory?.id === item.id ? "text-white/90" : "text-immersive-text-secondary"}`}>
                            {item.description}
                          </span>
                        </span>
                        <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ${selectedCategory?.id === item.id ? "bg-white/20 text-white" : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200"}`}>{item.count}</span>
                      </button>
                    ))}
                  </div>
                )}
                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(1)} className="secondary-action"><ChevronLeft aria-hidden="true" className="w-4 h-4" /> Back</button>
                  <button type="button" disabled={!selectedCategory || categoriesLoading || Boolean(categoriesError)} onClick={() => setStep(3)} className="primary-action disabled:opacity-40">Browse {selectedCategory?.label || "category"} courses <ArrowRight aria-hidden="true" className="w-4 h-4" /></button>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="space-y-7">
                <div>
                  <h3 className="text-2xl font-extrabold text-immersive-text-primary">Build your course bundle</h3>
                  <p className="text-sm text-immersive-text-secondary mt-2">
                    Choose courses from {selectedCategory?.label} for your goal and learning stage.
                  </p>
                </div>
                {recommending ? (
                  <div role="status" className="flex items-center gap-2 text-base text-immersive-text-secondary">
                    <LoaderCircle aria-hidden="true" className="w-4 h-4 animate-spin" />
                    Finding courses in this category...
                  </div>
                ) : (
                  <>
                    {recommendationError && (
                      <div role="alert" className="rounded-xl border border-amber-700 bg-amber-50 p-4 text-sm font-medium text-amber-950 dark:border-amber-400/60 dark:bg-amber-950/60 dark:text-amber-100">
                        {recommendationError}
                        <button type="button" onClick={() => setRecommendationAttempt((attempt) => attempt + 1)} className="ml-2 font-semibold underline underline-offset-2">
                          Retry recommendations
                        </button>
                      </div>
                    )}
                    {(selectionFeasible === false || activeLevels.some((level) => {
                      const availability = courseAvailability[level];
                      return Boolean(availability && availability.available < availability.required);
                    })) && (
                      <div className="rounded-xl border border-amber-700 bg-amber-50 p-4 text-sm font-medium text-amber-950 dark:border-amber-400/60 dark:bg-amber-950/60 dark:text-amber-100">
                        {selectionFeasible === false
                          ? "There are not enough distinct Learning Board courses in this category to fill every level in this goal. Try another category or choose a goal with fewer courses."
                          : "Showing the available Learning Board courses in this category. Some roadmap levels have fewer options than this goal requires, so you may need to choose another category to complete the roadmap."}
                      </div>
                    )}
                    {rankingMethod && (
                      <p className="text-sm text-immersive-text-secondary">
                        Recommendation source: {rankingMethod === "ai" ? "AI ranking" : rankingMethod === "mixed" ? "AI ranking with catalog-order fill-ins" : "catalog order"}.
                      </p>
                    )}
                    {activeLevels.map((level) => (
                      <div key={level} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <h4 className="text-base font-bold uppercase tracking-widest text-immersive-text-primary">{level}</h4>
                          <span className="text-sm text-immersive-secondary">Choose {quotas[goal][level]?.choose}</span>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3">
                          {(optionsByLevel[level] || []).map((course) => {
                            const isSelected = selected[level].some((item) => item.id === course.id);
                            const selectedElsewhere = activeLevels.some((otherLevel) =>
                              otherLevel !== level && selected[otherLevel].some((item) => item.id === course.id),
                            );
                            const details = courseDetails[course.id];
                            const skills = details?.details?.skills?.length ? details.details.skills : parseCourseSkills(course.skills);
                            return (
                              <article key={course.id} className={`p-5 rounded-xl border ${isSelected ? "border-emerald-400 bg-emerald-400/10" : "border-immersive-border"}`}>
                                <button
                                  type="button"
                                  aria-pressed={isSelected}
                                  disabled={selectedElsewhere}
                                  onClick={() => toggleCourse(level, course)}
                                  className="w-full rounded-lg text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B3E] disabled:cursor-not-allowed disabled:opacity-45"
                                >
                                  <span className="flex justify-between gap-3">
                                    <span className="text-base font-bold text-immersive-text-primary min-w-0">{course.title}</span>
                                    {isSelected && <Check aria-hidden="true" className="w-4 h-4 text-emerald-400 shrink-0" />}
                                  </span>
                                  {selectedElsewhere && <span className="mt-1 block text-xs font-semibold text-amber-700 dark:text-amber-300">Already selected in another roadmap level</span>}
                                  <span className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm text-immersive-text-secondary">
                                    {course.provider && <span>{course.provider}</span>}
                                    {course.duration && <span className="inline-flex items-center gap-1"><Clock3 aria-hidden="true" className="w-3 h-3" />{course.duration}</span>}
                                  </span>
                                </button>
                                {skills.length > 0 && (
                                  <p className="mt-3 text-sm text-immersive-text-secondary"><strong className="text-immersive-text-primary">Skills:</strong> {skills.slice(0, 4).join(", ")}</p>
                                )}
                                <button
                                  type="button"
                                  aria-expanded={expandedCourseId === course.id}
                                  onClick={() => {
                                    const isExpanded = expandedCourseId === course.id;
                                    setExpandedCourseId(isExpanded ? null : course.id);
                                    if (!isExpanded) void loadCourseDetails(course.id);
                                  }}
                                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-immersive-secondary hover:text-immersive-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B3E] rounded"
                                >
                                  <BookOpen aria-hidden="true" className="w-3.5 h-3.5" />
                                  {expandedCourseId === course.id ? "Hide course details" : "What you’ll learn"}
                                  <ChevronDown aria-hidden="true" className={`w-3.5 h-3.5 transition-transform ${expandedCourseId === course.id ? "rotate-180" : ""}`} />
                                </button>
                                {expandedCourseId === course.id && (
                                  <div className="mt-3 border-t border-immersive-border pt-3 text-sm text-immersive-text-secondary space-y-2">
                                    {details?.loading && <p role="status">Loading course details…</p>}
                                    {details?.error && <p role="alert">{details.error}</p>}
                                    {details?.details?.outcomes?.length ? (
                                      <div>
                                        <p className="font-bold text-immersive-text-primary">By the end, you’ll be able to</p>
                                        <ul className="list-disc pl-5 mt-1 space-y-1">{details.details.outcomes.slice(0, 4).map((outcome) => <li key={outcome}>{outcome}</li>)}</ul>
                                      </div>
                                    ) : !details?.loading && !details?.error ? <p>Learning outcomes aren’t available for this course yet.</p> : null}
                                  </div>
                                )}
                              </article>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </>
                )}
                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(2)} className="secondary-action"><ChevronLeft aria-hidden="true" className="w-4 h-4" /> Back</button>
                  <button type="button" disabled={!canContinue || recommending} onClick={() => setStep(4)} className="primary-action disabled:opacity-40">
                    Review roadmap <ArrowRight aria-hidden="true" className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
            {step === 4 && (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono tracking-widest text-[#FF4B3E]">ROADMAP READY</span>
                  <h3 className="text-2xl font-extrabold text-immersive-text-primary mt-2">{selectedCategory?.label} / {goal}</h3>
                  <p className="text-sm text-immersive-text-secondary mt-2">Your {totalSelected}-course progression follows the {selectedCategory?.label} category from foundations to advanced learning.</p>
                </div>
                <div className="space-y-3">
                  {activeLevels.flatMap((level) => selected[level].map((course) => ({level, course}))).map(({level, course}, index) => {
                    const details = courseDetails[course.id];
                    const outcomes = details?.details?.outcomes?.slice(0, 3) || [];
                    const skills = details?.details?.skills?.length ? details.details.skills : parseCourseSkills(course.skills);
                    const syllabus = details?.details?.syllabus || [];
                    const isExpanded = expandedReadyCourseId === course.id;
                    return (
                      <article key={course.id} className="rounded-xl border border-immersive-border">
                        <button
                          type="button"
                          aria-expanded={isExpanded}
                          aria-controls={`ready-course-${course.id}`}
                          onClick={() => setExpandedReadyCourseId(isExpanded ? null : course.id)}
                          className="flex w-full items-center gap-4 p-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B3E] rounded-xl"
                        >
                          <span className="text-sm font-mono text-immersive-secondary shrink-0">0{index + 1}</span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-base font-bold text-immersive-text-primary">{course.title}</span>
                            <span className="block text-sm text-immersive-text-secondary uppercase mt-1">{level}</span>
                          </span>
                          <ChevronDown aria-hidden="true" className={`w-4 h-4 shrink-0 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                        </button>
                        {isExpanded && (
                          <div id={`ready-course-${course.id}`} className="border-t border-immersive-border p-4 sm:p-5 text-sm text-immersive-text-secondary space-y-4">
                            {details?.loading && <p role="status">Loading course details…</p>}
                            {details?.error && <p role="alert" className="font-medium text-amber-900 dark:text-amber-200">Course details are unavailable right now.</p>}
                            {!details?.loading && !details?.error && (
                              <>
                                <section>
                                  <h4 className="font-bold text-immersive-text-primary">By the end, you’ll be able to</h4>
                                  {outcomes.length > 0
                                    ? <ul className="mt-2 list-disc pl-5 space-y-1">{outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul>
                                    : <p className="mt-1">Learning outcomes aren’t available for this course yet.</p>}
                                </section>
                                <section>
                                  <h4 className="font-bold text-immersive-text-primary">Skills</h4>
                                  <p className="mt-1">{skills.length ? skills.slice(0, 8).join(", ") : "Skills aren’t listed for this course yet."}</p>
                                </section>
                                <section>
                                  <h4 className="font-bold text-immersive-text-primary">Syllabus Structure</h4>
                                  {syllabus.length > 0 ? (
                                    <ol className="mt-2 list-decimal pl-5 space-y-2">
                                      {syllabus.map((module, moduleIndex) => (
                                        <li key={`${module.module}-${moduleIndex}`}>
                                          <span className="font-semibold text-immersive-text-primary">{module.module}</span>
                                          {module.theme && <span> — {module.theme}</span>}
                                          {module.chapters && <p className="mt-1">{module.chapters}</p>}
                                        </li>
                                      ))}
                                    </ol>
                                  ) : <p className="mt-1">Syllabus structure isn’t available for this course yet.</p>}
                                </section>
                              </>
                            )}
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(3)} className="secondary-action"><ChevronLeft aria-hidden="true" className="w-4 h-4" /> Edit bundle</button>
                  {saveError && <p role="alert" className="text-sm font-medium text-red-500">{saveError}</p>}
                  <button type="button" disabled={courseDetailsLoading || savingRoadmap} onClick={continueToSignup} className="primary-action disabled:opacity-40">
                    {courseDetailsLoading ? "Loading course details…" : savingRoadmap ? "Saving roadmap…" : isAuthenticated ? "Save roadmap and continue" : "Continue to sign up"} <ArrowRight aria-hidden="true" className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <style>{`.primary-action,.secondary-action{display:inline-flex;align-items:center;gap:.5rem;border-radius:.75rem;padding:.8rem 1.1rem;font-size:.75rem;font-weight:700;transition:color .2s,border-color .2s,background-color .2s,filter .2s}.primary-action{background:#ff4b3e;color:#fff}.primary-action:hover{filter:brightness(1.1)}.secondary-action{border:1px solid var(--immersive-border);color:var(--immersive-text-secondary)}.secondary-action:hover{border-color:#ff4b3e;color:var(--immersive-text-primary)}.primary-action:focus-visible,.secondary-action:focus-visible{outline:2px solid #ff4b3e;outline-offset:2px}`}</style>
    </section>
  );
}
