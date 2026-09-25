import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, Circle, LoaderCircle, Route } from "lucide-react";
import { catalogCourseApi, CatalogCourse } from "../../services/api";
import { RoadmapSelection } from "../../types";

interface RoadmapSummaryProps {
  selection?: RoadmapSelection;
  completedSteps?: string[];
}

export default function RoadmapSummary({ selection, completedSteps = [] }: RoadmapSummaryProps) {
  const [catalog, setCatalog] = useState<CatalogCourse[]>([]);

  useEffect(() => {
    if (!selection?.roadmapOrder?.length) return;
    catalogCourseApi.getAll().then((response) => setCatalog(response.data?.courses || [])).catch(() => setCatalog([]));
  }, [selection?.roadmapOrder]);

  const courses = useMemo(() => {
    const byId = new Map(catalog.map((course) => [course.id, course]));
    return selection?.roadmapOrder.map((id) => ({
      id,
      title: byId.get(id)?.title || id,
      level: String(byId.get(id)?.level || "").toLowerCase(),
    })) || [];
  }, [catalog, selection?.roadmapOrder]);

  if (!selection?.roadmapOrder?.length) return null;
  const currentIndex = courses.findIndex((course) => !completedSteps.includes(course.id));
  return (
    <section className="mb-8 bg-immersive-card border border-immersive-border rounded-3xl p-5 sm:p-6 shadow-xl shadow-immersive-shadow">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
        <div><span className="text-xs font-mono font-bold tracking-widest text-[#FF4B3E] uppercase">| ACTIVE LEARNING LANE</span><h2 className="text-xl font-extrabold text-immersive-text-primary mt-1">{selection.selectedCareer}</h2><p className="text-xs text-immersive-text-secondary mt-1">{selection.careerGoal} · {selection.roadmapOrder.length} courses in progression order</p></div><Route className="w-5 h-5 text-immersive-secondary" />
      </div>
      {!catalog.length && <div className="flex items-center gap-2 text-xs text-immersive-text-secondary mb-3"><LoaderCircle className="w-3.5 h-3.5 animate-spin" /> Loading course details...</div>}
      <div className="grid md:grid-cols-5 gap-2">{courses.map((course, index) => { const complete = completedSteps.includes(course.id); const current = index === (currentIndex < 0 ? courses.length - 1 : currentIndex); return <div key={course.id} className={`p-3 rounded-xl border ${current ? "border-[#FF4B3E] bg-[#FF4B3E]/10" : "border-immersive-border"}`}><div className="flex items-center justify-between"><span className="text-[10px] font-mono text-immersive-secondary">0{index + 1}</span>{complete ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Circle className="w-4 h-4 text-immersive-text-secondary" />}</div><p className="text-xs font-bold text-immersive-text-primary mt-3 line-clamp-2">{course.title}</p><p className="text-[10px] uppercase text-immersive-text-secondary mt-1">{course.level || "catalog course"}{current ? " · current focus" : ""}</p></div>; })}</div>
    </section>
  );
}
