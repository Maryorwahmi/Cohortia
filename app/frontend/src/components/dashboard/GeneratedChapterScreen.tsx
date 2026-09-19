import { ArrowRight, BrainCircuit, Mic, Sparkles, Lightbulb, Play } from "lucide-react";

interface GeneratedChapterScreenProps {
  course?: string;
  chapterTitle?: string;
  lessonGoal?: string;
  narratorScript?: string;
  visualSummary?: string;
  animationPlan?: string[];
  interactionIdeas?: string[];
  keyInsight?: string;
}

export default function GeneratedChapterScreen({
  course = "Artificial Intelligence for Everyone",
  chapterTitle = "Chapter 1: Understanding Generative AI",
  lessonGoal = "To define Generative AI clearly and explain why it matters in modern learning and creative work.",
  narratorScript = "Welcome to the first chapter of our AI journey. Today we will look at what Generative AI is, how it produces content, and why it is transforming the way people create and learn.",
  visualSummary = "A cinematic lesson stage showing a bright AI loop with layered cards, a key insight callout, and a friendly teaching experience.",
  animationPlan = [
    "Background glow pulses gently while the hero content appears.",
    "The explainer cards slide in with a calm staggered motion.",
    "The insight card highlights the central idea with a warm accent.",
  ],
  interactionIdeas = [
    "Click the insight card to reveal a quick explanation.",
    "Hover over the concept cards to preview the idea in more detail.",
  ],
  keyInsight = "Generative AI is not just a tool for content creation; it is a new interface for thinking, teaching, and building.",
}: GeneratedChapterScreenProps) {
  return (
    <div className="absolute inset-0 flex flex-col justify-between p-6 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.35),_transparent_45%),linear-gradient(135deg,_#060816_0%,_#0f172a_50%,_#111827_100%)] text-white z-0 overflow-auto">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-indigo-300">
          <Sparkles className="w-4 h-4" />
          <span>AI Instructor Preview</span>
        </div>
        <div className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-[10px] font-semibold text-indigo-200">
          Generated chapter screen
        </div>
      </div>

      <div className="flex-1 my-4 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-start">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-slate-200">
            <BrainCircuit className="w-4 h-4 text-cyan-300" />
            {course}
          </div>

          <div className="space-y-3">
            <h3 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white">
              {chapterTitle}
            </h3>
            <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300">
              {lessonGoal}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 shadow-[0_0_40px_rgba(34,211,238,0.12)] backdrop-blur">
            <div className="flex items-center gap-2 text-sm font-semibold text-cyan-300">
              <Mic className="w-4 h-4" />
              Narrator voice
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">{narratorScript}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-amber-300">
                <Lightbulb className="w-4 h-4" />
                Key insight
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-200">
                {keyInsight}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-cyan-200">
                <Play className="w-4 h-4" />
                Visual concept
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-200">{visualSummary}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-950/70 p-4 shadow-[0_0_30px_rgba(129,140,248,0.12)]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-cyan-200">Teaching loop</p>
              <ArrowRight className="w-4 h-4 text-cyan-300" />
            </div>
            <div className="mt-4 space-y-3">
              <div className="rounded-xl border border-white/10 bg-slate-900/70 p-3 text-sm text-slate-200">Prompt</div>
              <div className="rounded-xl border border-white/10 bg-slate-900/70 p-3 text-sm text-slate-200">Model response</div>
              <div className="rounded-xl border border-white/10 bg-slate-900/70 p-3 text-sm text-slate-200">Refined output</div>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-slate-400">Animation plan</p>
            <ul className="space-y-2 text-sm text-slate-300">
              {animationPlan.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-indigo-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <p className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-slate-400">Interaction ideas</p>
            <ul className="space-y-2 text-sm text-slate-300">
              {interactionIdeas.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/10 pt-3 text-xs text-slate-400">
        <span>Designed to feel like a premium teaching stage for the learning board.</span>
        <span className="text-slate-300">Tailwind + React preview</span>
      </div>
    </div>
  );
}
