import { useEffect, useState } from "react";
import { ArrowRight, BookOpen, Check, ChevronDown, ChevronLeft, Clock3, LoaderCircle, Route } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { catalogCourseApi } from "../services/api";
import type { ApiError, CatalogCourse, CatalogCourseDetails } from "../services/api";
import { RoadmapCourseSelection, RoadmapGoal, RoadmapLevel, RoadmapSelection, SignupDraft } from "../types";

interface ExperienceTrackProps {
  userProfile?: unknown;
  onOpenWizard?: () => void;
}

const goals: Array<{ id: RoadmapGoal; title: string; description: string; bestFor: string; outcome: string }> = [
  { id: "Pivot into a new career", title: "Pivot into a new career", description: "Build the foundations, proof, and confidence for a new role.", bestFor: "You are moving into a different field or starting from the beginning.", outcome: "A broad progression from beginner foundations to advanced practice." },
  { id: "Up-skill in my current role", title: "Up-skill in my current role", description: "Sharpen the skills that make your current work more valuable.", bestFor: "You already work in this area and want to deepen practical skills.", outcome: "A focused progression that strengthens skills you can use at work." },
  { id: "Lead & Specialize", title: "Lead & Specialize", description: "Move into advanced practice, ownership, and technical leadership.", bestFor: "You have experience and want to specialize or take on more ownership.", outcome: "An intermediate-to-advanced progression; beginner courses are not included." },
];

const careers: Array<{
  id: string;
  label: string;
  summary: string;
  focusQuestion: string;
  focusOptions: Array<{id: string; label: string; description: string}>;
}> = [
  { id: "frontend-development", label: "Frontend Development", summary: "Build the interfaces people use in websites and web apps.", focusQuestion: "What would you most like to create?", focusOptions: [{id:"interfaces",label:"Responsive interfaces",description:"Accessible pages that work across devices."},{id:"performance",label:"Fast experiences",description:"Smooth, reliable interfaces that load quickly."},{id:"applications",label:"Interactive applications",description:"Rich app flows, components, and state."}] },
  { id: "backend-development", label: "Backend Development", summary: "Create the APIs, services, and data systems behind applications.", focusQuestion: "Which backend challenge interests you most?", focusOptions: [{id:"apis",label:"APIs and integrations",description:"Design services that connect applications."},{id:"data",label:"Databases and data",description:"Model and manage reliable application data."},{id:"architecture",label:"Scalable architecture",description:"Build secure services that grow with demand."}] },
  { id: "data-analytics", label: "Data Analytics", summary: "Turn datasets into reports, dashboards, and decisions.", focusQuestion: "How do you want to use data?", focusOptions: [{id:"reporting",label:"Reporting and dashboards",description:"Make insights easy to understand and act on."},{id:"sql",label:"SQL and data quality",description:"Query, prepare, and validate useful data."},{id:"decisions",label:"Business decisions",description:"Use metrics to answer practical questions."}] },
  { id: "data-science", label: "Data Science", summary: "Use statistics, experiments, and models to answer complex questions.", focusQuestion: "Which part of data science do you want to explore?", focusOptions: [{id:"modelling",label:"Predictive modelling",description:"Build and evaluate statistical and ML models."},{id:"experiments",label:"Experiments and evaluation",description:"Test hypotheses and interpret evidence."},{id:"pipelines",label:"Data workflows",description:"Prepare data and build reproducible analyses."}] },
  { id: "ai-ml-engineering", label: "AI/ML Engineering", summary: "Build, evaluate, and deploy AI and machine-learning products.", focusQuestion: "What AI work sounds most interesting?", focusOptions: [{id:"models",label:"Machine-learning models",description:"Train, evaluate, and serve predictive models."},{id:"generative",label:"Generative AI",description:"Build useful applications with language models."},{id:"production",label:"Production AI systems",description:"Monitor, scale, and responsibly deploy AI."}] },
  { id: "cybersecurity", label: "Cybersecurity", summary: "Protect systems and data by finding risks and improving defenses.", focusQuestion: "Which security area would you like to focus on?", focusOptions: [{id:"defense",label:"Threat detection",description:"Recognize threats and respond to security events."},{id:"application",label:"Application security",description:"Test software and reduce vulnerabilities."},{id:"governance",label:"Risk and governance",description:"Manage identity, policy, and security risk."}] },
  { id: "cloud-engineering", label: "Cloud Engineering", summary: "Design and operate secure infrastructure on cloud platforms.", focusQuestion: "What cloud work are you aiming for?", focusOptions: [{id:"architecture",label:"Cloud architecture",description:"Choose and connect cloud infrastructure."},{id:"security",label:"Cloud security",description:"Protect cloud identities, networks, and workloads."},{id:"operations",label:"Cloud operations",description:"Improve reliability, performance, and cost."}] },
  { id: "devops-engineering", label: "DevOps Engineering", summary: "Automate software delivery and make production systems reliable.", focusQuestion: "Which DevOps capability matters most to you?", focusOptions: [{id:"automation",label:"CI/CD automation",description:"Build repeatable test and release pipelines."},{id:"infrastructure",label:"Infrastructure as code",description:"Provision and configure infrastructure safely."},{id:"reliability",label:"Reliability and observability",description:"Monitor services and respond to incidents."}] },
  { id: "ux-ui-design", label: "UX/UI Design", summary: "Research user needs and turn them into clear, usable digital products.", focusQuestion: "Which part of design would you like to practice?", focusOptions: [{id:"research",label:"User research",description:"Understand needs and test usability."},{id:"interaction",label:"Interaction design",description:"Map flows and prototype how products work."},{id:"systems",label:"Visual systems",description:"Create accessible interfaces and reusable design systems."}] },
  { id: "qa-testing", label: "QA/Testing", summary: "Find defects early and help teams ship dependable software.", focusQuestion: "What kind of quality work interests you?", focusOptions: [{id:"automation",label:"Test automation",description:"Build automated checks and maintainable test suites."},{id:"quality",label:"Test planning",description:"Design effective test coverage and workflows."},{id:"delivery",label:"API and performance testing",description:"Validate services and production readiness."}] },
  { id: "product-management", label: "Product Management", summary: "Decide what to build by connecting customer needs, business goals, and delivery.", focusQuestion: "Which product skill do you want to build?", focusOptions: [{id:"discovery",label:"Customer discovery",description:"Identify user needs and define the right problem."},{id:"strategy",label:"Strategy and prioritization",description:"Set direction and make focused roadmap choices."},{id:"analytics",label:"Product analytics",description:"Use metrics and experiments to improve outcomes."}] },
  { id: "full-stack-development", label: "Full-Stack Development", summary: "Build complete applications across the user interface, APIs, and data layer.", focusQuestion: "Where would you like your full-stack path to lean?", focusOptions: [{id:"frontend",label:"Frontend and experience",description:"Build polished, accessible application interfaces."},{id:"backend",label:"Backend and data",description:"Design APIs, services, and data models."},{id:"delivery",label:"End-to-end delivery",description:"Take complete applications from idea to deployment."}] },
];
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

export default function ExperienceTrack({ onOpenWizard }: ExperienceTrackProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState<RoadmapGoal>(goals[0].id);
  const [career, setCareer] = useState(careers[0]);
  const [careerFocusId, setCareerFocusId] = useState("");
  const [optionsByLevel, setOptionsByLevel] = useState<Record<RoadmapLevel, CatalogCourse[]>>({ beginner: [], intermediate: [], advanced: [] });
  const [selected, setSelected] = useState<Record<RoadmapLevel, CatalogCourse[]>>({ beginner: [], intermediate: [], advanced: [] });
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);
  const [expandedReadyCourseId, setExpandedReadyCourseId] = useState<string | null>(null);
  const [courseDetails, setCourseDetails] = useState<Record<string, {details?: CatalogCourseDetails; loading?: boolean; error?: string}>>({});
  const [recommending, setRecommending] = useState(false);
  const [rankingMethod, setRankingMethod] = useState<"ai" | "mixed" | "catalog-order" | null>(null);
  const [recommendationError, setRecommendationError] = useState("");
  const [recommendationAttempt, setRecommendationAttempt] = useState(0);

  const activeLevels = (Object.keys(quotas[goal]) as RoadmapLevel[]);
  useEffect(() => {
    if (step !== 3) return;
    let cancelled = false;
    setRecommending(true);
    setRecommendationError("");
    setRankingMethod(null);
    setOptionsByLevel({ beginner: [], intermediate: [], advanced: [] });
    catalogCourseApi.recommend({
      careerGoal: goal,
      selectedCareerId: career.id,
      learnerStage: activeLevels[0],
      careerFocusId,
    }).then((response) => {
      if (!response.success || !response.data) {
        throw new Error(response.error || "Unable to recommend courses for this career and goal.");
      }
      if (!cancelled) {
        setOptionsByLevel({ beginner: response.data?.courses?.beginner || [], intermediate: response.data?.courses?.intermediate || [], advanced: response.data?.courses?.advanced || [] });
        setRankingMethod(response.data?.rankingMethod || "catalog-order");
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
  }, [goal, career.id, careerFocusId, activeLevels[0], step, recommendationAttempt]);

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
  const selectedFocus = career.focusOptions.find((option) => option.id === careerFocusId);
  const canContinue = activeLevels.every((level) => selected[level].length === quotas[goal][level]?.choose);
  const courseDetailsLoading = activeLevels.flatMap((level) => selected[level]).some((course) => courseDetails[course.id]?.loading);
  const toggleCourse = (level: RoadmapLevel, course: CatalogCourse) => {
    const current = selected[level];
    const quota = quotas[goal][level]?.choose || 0;
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
    return { careerGoal: goal, learningStage: activeLevels[0], selectedCareerId: career.id, selectedCareer: career.label, careerFocusId, careerFocusLabel: selectedFocus?.label, selectedCourses, roadmapOrder: activeLevels.flatMap((level) => selectedCourses[level]), courseInfo };
  };

  const continueToSignup = () => {
    const roadmapSelection = createSelection();
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
    navigate("/signup", { state: { roadmapSelection, selectedTrackId: career.id, signupDraft } });
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
                <div className="grid md:grid-cols-3 gap-3">
                  {goals.map((item) => (
                    <button key={item.id} type="button" aria-pressed={goal === item.id} onClick={() => { setGoal(item.id); setSelected({ beginner: [], intermediate: [], advanced: [] }); }} className={`text-left p-5 rounded-2xl border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B3E] ${goal === item.id ? "border-[#FF4B3E] bg-[#FF4B3E]/10" : "border-immersive-border hover:border-immersive-secondary/60"}`}>
                      <span className="text-sm font-bold text-immersive-text-primary">{item.title}</span>
                      <p className="text-sm text-immersive-text-secondary mt-2 leading-relaxed">{item.description}</p>
                      <p className="text-sm text-immersive-text-primary mt-4"><strong>Best for:</strong> {item.bestFor}</p>
                      <p className="text-sm text-immersive-text-secondary mt-2"><strong>Path:</strong> {item.outcome}</p>
                    </button>
                  ))}
                </div>
                <button type="button" onClick={() => setStep(2)} className="primary-action">Choose a career <ArrowRight aria-hidden="true" className="w-4 h-4" /></button>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-immersive-text-primary">Choose your career lane</h3>
                  <p className="text-sm text-immersive-text-secondary mt-2">Each lane describes the kind of work you would practice. Your answer to the focus question helps the AI rank relevant courses.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {careers.map((item) => (
                    <button key={item.id} type="button" aria-pressed={career.id === item.id} onClick={() => { setCareer(item); setCareerFocusId(""); setSelected({ beginner: [], intermediate: [], advanced: [] }); }} className={`p-4 rounded-xl border text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B3E] ${career.id === item.id ? "border-[#FF4B3E] bg-[#FF4B3E]/10" : "border-immersive-border hover:border-immersive-secondary/60"}`}>
                      <span className="text-base font-bold text-immersive-text-primary">{item.label}</span>
                      <span className="block text-sm leading-relaxed text-immersive-text-secondary mt-2">{item.summary}</span>
                    </button>
                  ))}
                </div>
                <fieldset className="rounded-2xl border border-immersive-border p-4 sm:p-5">
                  <legend className="px-2 text-sm font-bold text-immersive-text-primary">{career.focusQuestion}</legend>
                  <div className="grid md:grid-cols-3 gap-2">
                    {career.focusOptions.map((option) => (
                      <button key={option.id} type="button" aria-pressed={careerFocusId === option.id} onClick={() => setCareerFocusId(option.id)} className={`rounded-xl border p-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B3E] ${careerFocusId === option.id ? "border-[#FF4B3E] bg-[#FF4B3E]/10" : "border-immersive-border hover:border-immersive-secondary/60"}`}>
                        <span className="block text-sm font-bold text-immersive-text-primary">{option.label}</span>
                        <span className="block text-sm text-immersive-text-secondary mt-1">{option.description}</span>
                      </button>
                    ))}
                  </div>
                </fieldset>
                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(1)} className="secondary-action"><ChevronLeft aria-hidden="true" className="w-4 h-4" /> Back</button>
                  <button type="button" disabled={!careerFocusId} onClick={() => setStep(3)} className="primary-action disabled:opacity-40">Browse {career.label} courses <ArrowRight aria-hidden="true" className="w-4 h-4" /></button>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="space-y-7">
                <div>
                  <h3 className="text-2xl font-extrabold text-immersive-text-primary">Build your course bundle</h3>
                  <p className="text-sm text-immersive-text-secondary mt-2">
                    Choose the courses from the {career.label} catalog for your goal, stage, and focus on {selectedFocus?.label.toLowerCase()}.
                  </p>
                </div>
                {recommending ? (
                  <div role="status" className="flex items-center gap-2 text-base text-immersive-text-secondary">
                    <LoaderCircle aria-hidden="true" className="w-4 h-4 animate-spin" />
                    Ranking career courses...
                  </div>
                ) : (
                  <>
                    {recommendationError && (
                      <div role="alert" className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-200">
                        {recommendationError}
                        <button type="button" onClick={() => setRecommendationAttempt((attempt) => attempt + 1)} className="ml-2 underline">
                          Retry recommendations
                        </button>
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
                            const details = courseDetails[course.id];
                            const skills = details?.details?.skills?.length ? details.details.skills : parseCourseSkills(course.skills);
                            return (
                              <article key={course.id} className={`p-5 rounded-xl border ${isSelected ? "border-emerald-400 bg-emerald-400/10" : "border-immersive-border"}`}>
                                <button
                                  type="button"
                                  aria-pressed={isSelected}
                                  onClick={() => toggleCourse(level, course)}
                                  className="w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B3E] rounded-lg"
                                >
                                  <span className="flex justify-between gap-3">
                                    <span className="text-base font-bold text-immersive-text-primary min-w-0">{course.title}</span>
                                    {isSelected && <Check aria-hidden="true" className="w-4 h-4 text-emerald-400 shrink-0" />}
                                  </span>
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
                  <h3 className="text-2xl font-extrabold text-immersive-text-primary mt-2">{career.label} / {goal}</h3>
                  <p className="text-sm text-immersive-text-secondary mt-2">Your {totalSelected}-course progression starts with the foundations and builds toward your focus: {selectedFocus?.label.toLowerCase()}.</p>
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
                            {details?.error && <p role="alert" className="text-amber-300">Course details are unavailable right now.</p>}
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
                  <button type="button" disabled={courseDetailsLoading} onClick={continueToSignup} className="primary-action disabled:opacity-40">
                    {courseDetailsLoading ? "Loading course details…" : "Continue to sign up"} <ArrowRight aria-hidden="true" className="w-4 h-4" />
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
