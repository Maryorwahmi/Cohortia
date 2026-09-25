import { ArrowRight, Layers3, ListChecks, Sparkles, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ExperienceTrackSim from "./ExperienceTrack";
import { UserPreferences } from "../types";

interface ExperienceTrackPageProps {
  userProfile: UserPreferences | null;
  onOpenWizard?: () => void;
}

const steps = [
  { icon: Target, title: "Choose your direction", text: "Set a goal and career lane that makes the next step feel specific." },
  { icon: Layers3, title: "Shape the progression", text: "Select the right number of catalog courses across beginner, intermediate, and advanced levels." },
  { icon: ListChecks, title: "Keep moving forward", text: "Your bundle becomes an ordered learning lane with one clear next course at a time." },
];

export default function ExperienceTrackPage({ userProfile, onOpenWizard }: ExperienceTrackPageProps) {
  const navigate = useNavigate();
  return (
    <main className="pt-24 pb-12 min-h-screen bg-immersive-bg text-left">
      <header className="max-w-6xl mx-auto px-4 py-10 text-center">
        <span className="text-xs font-mono font-bold tracking-widest text-[#FF4B3E] uppercase">| COHORTIA ROADMAP TRACK</span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-immersive-text-primary tracking-tight mt-4">Build your learning path with a <span className="text-[#FF4B3E]">career-focused roadmap.</span></h1>
        <p className="mt-5 text-lg text-immersive-text-secondary max-w-2xl mx-auto leading-relaxed">Choose a goal, assemble a multi-course progression, and arrive at signup with a plan that starts at the right level.</p>
      </header>

      <section className="max-w-6xl mx-auto px-4 mb-10">
        <div className="text-center mb-6"><span className="text-xs font-mono font-bold tracking-widest text-[#FF4B3E] uppercase">| HOW IT WORKS</span><h2 className="text-3xl font-extrabold text-immersive-text-primary mt-2">A roadmap with momentum built in.</h2></div>
        <div className="grid md:grid-cols-3 gap-3">{steps.map(({ icon: Icon, title, text }, index) => <div key={title} className="p-5 border border-immersive-border bg-immersive-card/60 rounded-2xl"><div className="flex items-center gap-3"><span className="w-8 h-8 rounded-lg bg-[#FF4B3E]/10 text-[#FF4B3E] flex items-center justify-center text-xs font-mono">0{index + 1}</span><Icon className="w-4 h-4 text-immersive-secondary" /></div><h3 className="text-sm font-bold text-immersive-text-primary mt-5">{title}</h3><p className="text-xs text-immersive-text-secondary mt-2 leading-relaxed">{text}</p></div>)}</div>
      </section>

      <section className="max-w-7xl mx-auto px-4"><div className="text-center mb-5"><span className="text-xs font-mono font-bold tracking-widest text-[#FF4B3E] uppercase">| ROADMAP SANDBOX</span><h2 className="text-3xl font-extrabold text-immersive-text-primary mt-2">Try It Out Interactive</h2></div><ExperienceTrackSim userProfile={userProfile} onOpenWizard={onOpenWizard} /></section>

      <section className="max-w-6xl mx-auto px-4 mt-10"><div className="border border-immersive-border rounded-2xl p-6 bg-immersive-card flex flex-col md:flex-row items-start md:items-center justify-between gap-5"><div><span className="text-xs font-mono tracking-widest text-immersive-secondary">DESIGNED FOR PROGRESSION</span><h2 className="text-xl font-extrabold text-immersive-text-primary mt-2">Less browsing. More becoming.</h2><p className="text-sm text-immersive-text-secondary mt-2 max-w-xl">Every choice stays connected to the next course, the next project, and the skills you are building toward.</p></div><button onClick={() => navigate("/careers")} className="inline-flex items-center gap-2 text-sm font-bold text-[#FF4B3E]">Explore the catalog <ArrowRight className="w-4 h-4" /></button></div></section>
    </main>
  );
}
