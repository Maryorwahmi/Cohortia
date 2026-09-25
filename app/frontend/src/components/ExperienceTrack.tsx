import { useEffect, useState } from "react";
import { ArrowRight, Check, ChevronLeft, LoaderCircle, Route, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { catalogCourseApi, CatalogCourse } from "../services/api";
import { RoadmapGoal, RoadmapLevel, RoadmapSelection } from "../types";

interface ExperienceTrackProps {
  userProfile?: unknown;
  onOpenWizard?: () => void;
}

const goals: Array<{ id: RoadmapGoal; title: string; description: string }> = [
  { id: "Pivot into a new career", title: "Pivot into a new career", description: "Build the foundations, proof, and confidence for a new role." },
  { id: "Up-skill in my current role", title: "Up-skill in my current role", description: "Sharpen the skills that make your current work more valuable." },
  { id: "Lead & Specialize", title: "Lead & Specialize", description: "Move into advanced practice, ownership, and technical leadership." },
];

const careers = [
  { id: "frontend-development", label: "Frontend Development" },
  { id: "backend-development", label: "Backend Development" },
  { id: "data-analytics", label: "Data Analytics" },
  { id: "data-science", label: "Data Science" },
  { id: "ai-ml-engineering", label: "AI/ML Engineering" },
  { id: "cybersecurity", label: "Cybersecurity" },
  { id: "cloud-engineering", label: "Cloud Engineering" },
  { id: "devops-engineering", label: "DevOps Engineering" },
  { id: "ux-ui-design", label: "UX/UI Design" },
  { id: "qa-testing", label: "QA/Testing" },
  { id: "product-management", label: "Product Management" },
  { id: "full-stack-development", label: "Full-Stack Development" },
];
const levels: RoadmapLevel[] = ["beginner", "intermediate", "advanced"];
const quotas: Record<RoadmapGoal, Partial<Record<RoadmapLevel, { options: number; choose: number }>>> = {
  "Pivot into a new career": { beginner: { options: 4, choose: 2 }, intermediate: { options: 3, choose: 2 }, advanced: { options: 2, choose: 1 } },
  "Up-skill in my current role": { beginner: { options: 3, choose: 2 }, intermediate: { options: 2, choose: 1 }, advanced: { options: 2, choose: 1 } },
  "Lead & Specialize": { intermediate: { options: 2, choose: 1 }, advanced: { options: 2, choose: 1 } },
};

function normalizeLevel(level?: string | null): RoadmapLevel | null {
  const value = String(level || "").toLowerCase();
  return levels.includes(value as RoadmapLevel) ? value as RoadmapLevel : null;
}

export default function ExperienceTrack({ onOpenWizard }: ExperienceTrackProps) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState<RoadmapGoal>(goals[0].id);
  const [career, setCareer] = useState(careers[0]);
  const [catalog, setCatalog] = useState<CatalogCourse[]>([]);
  const [optionsByLevel, setOptionsByLevel] = useState<Record<RoadmapLevel, CatalogCourse[]>>({ beginner: [], intermediate: [], advanced: [] });
  const [selected, setSelected] = useState<Record<RoadmapLevel, CatalogCourse[]>>({ beginner: [], intermediate: [], advanced: [] });
  const [loading, setLoading] = useState(true);
  const [recommending, setRecommending] = useState(false);

  useEffect(() => {
    catalogCourseApi.getAll().then((response) => setCatalog(response.data?.courses || [])).catch(() => setCatalog([])).finally(() => setLoading(false));
  }, []);

  const activeLevels = (Object.keys(quotas[goal]) as RoadmapLevel[]);
  useEffect(() => {
    if (loading || !catalog.length) return;
    let cancelled = false;
    setRecommending(true);
    catalogCourseApi.recommend({
      careerGoal: goal,
      selectedCareerId: career.id,
      learnerStage: activeLevels[0],
      catalogCourses: catalog,
    }).then((response) => {
      if (!cancelled) setOptionsByLevel({ beginner: response.data?.courses?.beginner || [], intermediate: response.data?.courses?.intermediate || [], advanced: response.data?.courses?.advanced || [] });
    }).catch(() => {
      if (!cancelled) setOptionsByLevel({ beginner: [], intermediate: [], advanced: [] });
    }).finally(() => {
      if (!cancelled) setRecommending(false);
    });
    return () => { cancelled = true; };
  }, [catalog, goal, career.id, activeLevels[0], loading]);

  const totalSelected = Object.values(selected).flat().length;
  const canContinue = activeLevels.every((level) => selected[level].length === quotas[goal][level]?.choose);
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
    return { careerGoal: goal, learningStage: activeLevels[0], selectedCareerId: career.id, selectedCareer: career.label, selectedCourses, roadmapOrder: activeLevels.flatMap((level) => selectedCourses[level]) };
  };

  const continueToSignup = () => {
    const roadmapSelection = createSelection();
    sessionStorage.setItem("cohortia_pending_roadmap", JSON.stringify(roadmapSelection));
    navigate("/signup", { state: { roadmapSelection, selectedTrackId: career.id } });
  };

  return (
    <section id="experience-simulator" className="py-10 bg-immersive-bg relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-immersive-card border border-immersive-border rounded-3xl overflow-hidden shadow-2xl shadow-immersive-shadow">
          <div className="px-5 py-4 border-b border-immersive-border flex items-center justify-between">
            <div className="flex items-center gap-3"><Route className="w-4 h-4 text-immersive-secondary" /><span className="text-xs font-mono font-bold tracking-widest text-immersive-text-secondary">ROADMAP BUILDER / 0{step}</span></div>
            <span className="text-xs text-immersive-text-secondary">{totalSelected} courses selected</span>
          </div>
          <div className="p-5 sm:p-8">
            {step === 1 && <div className="space-y-6"><h3 className="text-2xl font-extrabold text-immersive-text-primary">What are you building toward?</h3><div className="grid md:grid-cols-3 gap-3">{goals.map((item) => <button key={item.id} onClick={() => { setGoal(item.id); setSelected({ beginner: [], intermediate: [], advanced: [] }); }} className={`text-left p-5 rounded-2xl border transition-all ${goal === item.id ? "border-[#FF4B3E] bg-[#FF4B3E]/10" : "border-immersive-border hover:border-immersive-secondary/60"}`}><span className="text-sm font-bold text-immersive-text-primary">{item.title}</span><p className="text-xs text-immersive-text-secondary mt-2 leading-relaxed">{item.description}</p></button>)}</div><button onClick={() => setStep(2)} className="primary-action">Choose a career <ArrowRight className="w-4 h-4" /></button></div>}
            {step === 2 && <div className="space-y-6"><div><h3 className="text-2xl font-extrabold text-immersive-text-primary">Choose your career lane</h3><p className="text-sm text-immersive-text-secondary mt-2">We will use the course catalog to shape the right progression for this goal.</p></div><div className="grid grid-cols-2 md:grid-cols-4 gap-2">{careers.map((item) => <button key={item.id} onClick={() => { setCareer(item); setSelected({ beginner: [], intermediate: [], advanced: [] }); }} className={`p-3 rounded-xl border text-xs font-bold text-left ${career.id === item.id ? "border-[#FF4B3E] text-immersive-text-primary bg-[#FF4B3E]/10" : "border-immersive-border text-immersive-text-secondary hover:border-immersive-secondary/60"}`}>{item.label}</button>)}</div><div className="flex gap-3"><button onClick={() => setStep(1)} className="secondary-action"><ChevronLeft className="w-4 h-4" /> Back</button><button onClick={() => setStep(3)} className="primary-action">Browse {career.label} courses <ArrowRight className="w-4 h-4" /></button></div></div>}
            {step === 3 && <div className="space-y-7"><div><h3 className="text-2xl font-extrabold text-immersive-text-primary">Build your course bundle</h3><p className="text-sm text-immersive-text-secondary mt-2">AI ranked these courses from the canonical {career.label} catalog for your goal and stage.</p></div>{loading || recommending ? <div className="flex items-center gap-2 text-sm text-immersive-text-secondary"><LoaderCircle className="w-4 h-4 animate-spin" /> {loading ? "Loading catalog..." : "Ranking career courses..."}</div> : activeLevels.map((level) => <div key={level} className="space-y-3"><div className="flex justify-between items-center"><h4 className="text-sm font-bold uppercase tracking-widest text-immersive-text-primary">{level}</h4><span className="text-xs text-immersive-secondary">Choose {quotas[goal][level]?.choose}</span></div><div className="grid md:grid-cols-2 gap-3">{(optionsByLevel[level] || []).map((course) => { const isSelected = selected[level].some((item) => item.id === course.id); return <button key={course.id} onClick={() => toggleCourse(level, course)} className={`p-4 rounded-xl border text-left ${isSelected ? "border-emerald-400 bg-emerald-400/10" : "border-immersive-border hover:border-immersive-secondary/60"}`}><div className="flex justify-between gap-3"><span className="text-sm font-bold text-immersive-text-primary">{course.title}</span>{isSelected && <Check className="w-4 h-4 text-emerald-400 shrink-0" />}</div><p className="text-xs text-immersive-text-secondary mt-2 line-clamp-2">{course.description || "Catalog course selected for this career lane."}</p></button>; })}</div></div>)}<div className="flex gap-3"><button onClick={() => setStep(2)} className="secondary-action"><ChevronLeft className="w-4 h-4" /> Back</button><button disabled={!canContinue} onClick={() => setStep(4)} className="primary-action disabled:opacity-40">Review roadmap <ArrowRight className="w-4 h-4" /></button></div></div>}
            {step === 4 && <div className="space-y-6"><div><span className="text-xs font-mono tracking-widest text-[#FF4B3E]">ROADMAP READY</span><h3 className="text-2xl font-extrabold text-immersive-text-primary mt-2">{career.label} / {goal}</h3><p className="text-sm text-immersive-text-secondary mt-2">Your active learning lane has {totalSelected} courses in level order.</p></div><div className="space-y-2">{activeLevels.flatMap((level) => selected[level].map((course) => ({ level, course }))).map(({ level, course }, index) => <div key={course.id} className="flex items-center gap-4 p-4 rounded-xl border border-immersive-border"><span className="text-xs font-mono text-immersive-secondary">0{index + 1}</span><div><p className="text-sm font-bold text-immersive-text-primary">{course.title}</p><p className="text-xs text-immersive-text-secondary uppercase mt-1">{level}</p></div></div>)}</div><div className="flex gap-3"><button onClick={() => setStep(3)} className="secondary-action"><ChevronLeft className="w-4 h-4" /> Edit bundle</button><button onClick={continueToSignup} className="primary-action">Continue to sign up <ArrowRight className="w-4 h-4" /></button></div></div>}
          </div>
        </div>
      </div>
      <style>{`.primary-action,.secondary-action{display:inline-flex;align-items:center;gap:.5rem;border-radius:.75rem;padding:.8rem 1.1rem;font-size:.75rem;font-weight:700;transition:all .2s}.primary-action{background:#ff4b3e;color:#fff}.primary-action:hover{filter:brightness(1.1)}.secondary-action{border:1px solid var(--immersive-border);color:var(--immersive-text-secondary)}.secondary-action:hover{border-color:#ff4b3e;color:var(--immersive-text-primary)}`}</style>
    </section>
  );
}
