import { useState } from "react";
import { Sparkles, ArrowRight, CheckCircle, TrendingUp, Calendar, ArrowLeftRight, Star, Quote, Award } from "lucide-react";

interface SuccessStory {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  streak: string;
  score: string;
  briefs: number;
  before: {
    status: string;
    skills: string[];
    painPoint: string;
  };
  after: {
    status: string;
    skills: string[];
    result: string;
  };
  testimonial: string;
}

const STORIES: SuccessStory[] = [
  {
    id: "aarav",
    name: "Chinedu Nwachukwu",
    role: "Frontend Engineer",
    company: "Vanta",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&fit=crop&q=80",
    streak: "82-Day Streak",
    score: "9.8 Avg Score",
    briefs: 14,
    before: {
      status: "Theory-heavy student",
      skills: ["Basic HTML/JS", "Theoretical React", "No git experience"],
      painPoint: "Overwhelmed by abstract tutorials, zero portfolio, couldn't get pass resume filters."
    },
    after: {
      status: "Frontend Engineer @ Vanta",
      skills: ["React SVG scale", "Tailwind v4", "Agile Sprints", "Client-facing logic"],
      result: "Created and delivered the CarbonHQ solar telemetry dashboard. Landed a $95,000/yr starting offer."
    },
    testimonial: "The cohort sprints felt exactly like my current engineering role. Actually submitting work to a real reviewer completely changed my career trajectory."
  },
  {
    id: "chloe",
    name: "Chioma Adebayo",
    role: "Product Designer",
    company: "Stripe",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&fit=crop&q=80",
    streak: "105 Days Active",
    score: "9.9 Avg Score",
    briefs: 8,
    before: {
      status: "Traditional graphic designer",
      skills: ["InDesign", "Basic Photoshop", "No user metrics"],
      painPoint: "Struggling to translate print design skills to digital products, lacked structured UX processes."
    },
    after: {
      status: "Product Designer @ Stripe",
      skills: ["Interactive Prototyping", "Figma Design Systems", "User Research Plans"],
      result: "Designed complete CarbonHQ user flows and design briefs. Matched directly via Cohortia recruiter pool."
    },
    testimonial: "Cohortia bridges the gap. I wasn't just designing screens; I was defending my decisions to product leads and developers during daily sprints."
  },
  {
    id: "marcus",
    name: "Babajide Oyetunji",
    role: "Product Manager",
    company: "Linear",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&fit=crop&q=80",
    streak: "12 Sprints Cleared",
    score: "9.7 Avg Score",
    briefs: 11,
    before: {
      status: "Customer Support Lead",
      skills: ["Ticket resolution", "Intercom", "No product roadmaps"],
      painPoint: "Felt pigeonholed in support. Wanted to build products but didn't know how to demonstrate strategy."
    },
    after: {
      status: "Associate PM @ Linear",
      skills: ["Product Roadmaps", "Strategic Prioritization", "Agile Sprint Leadership"],
      result: "Led two collaborative cohort sprints. Wrote four verified PRDs and launched real widgets with developers."
    },
    testimonial: "Managing a team of volunteer designers and developers in Cohortia was the ultimate test. It gave me the hard evidence I needed for product interviews."
  }
];

export default function SuccessStories() {
  const [activeStory, setActiveStory] = useState<string>("aarav");
  const currentStory = STORIES.find(s => s.id === activeStory) || STORIES[0];

  return (
    <section id="success-stories" className="py-12 bg-immersive-bg relative">
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-immersive-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-immersive-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold text-[#FF4B3E] bg-[#FF4B3E]/10 border border-[#FF4B3E]/20 px-3 py-1 rounded-full uppercase tracking-widest inline-flex items-center space-x-1.5">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Real Progress</span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-sans font-extrabold text-immersive-text-primary tracking-tight">
            Success Stories
          </h2>
          <p className="text-lg text-immersive-text-secondary leading-relaxed">
            Before-and-after snapshots of learners who stayed consistent.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 max-w-3xl mx-auto">
          {STORIES.map((story) => (
            <button
              key={story.id}
              onClick={() => setActiveStory(story.id)}
              className={`flex items-center space-x-3 p-2.5 px-5 rounded-2xl border text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeStory === story.id
                  ? "border-[#FF4B3E] bg-[#FF4B3E]/15 text-immersive-text-primary shadow-[0_0_20px_rgba(255,75,62,0.15)]"
                  : "border-immersive-border bg-immersive-card/60 text-immersive-text-secondary hover:text-immersive-text-primary hover:border-[#FF4B3E]/30"
              }`}
            >
              <img src={story.avatar} alt={story.name} className="w-7 h-7 rounded-full object-cover border border-immersive-border" />
              <div className="text-left">
                <div className="text-xs font-bold">{story.name}</div>
                <div className="text-[10px] text-immersive-text-secondary font-medium">{story.role} @ {story.company}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Interactive Comparison Dashboard */}
        <div className="max-w-5xl mx-auto bg-immersive-card border border-immersive-border rounded-3xl overflow-hidden shadow-[0_0_35px_var(--immersive-shadow)] relative">
          
          {/* Header Bar */}
          <div className="bg-immersive-bg px-6 py-4 border-b border-immersive-border flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-[11px] font-mono text-immersive-text-secondary pl-2">
                proof-of-growth://{currentStory.id}-record.json
              </span>
            </div>
            <span className="text-[10px] font-mono bg-[#FF4B3E]/15 text-[#FF4B3E] border border-[#FF4B3E]/25 px-2.5 py-1 rounded font-bold uppercase tracking-wider">
              {currentStory.streak}
            </span>
          </div>

          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-stretch">
            
            {/* Story Details (9.8 Score, Testimonial, Streaks) */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <img src={currentStory.avatar} alt={currentStory.name} className="w-14 h-14 rounded-2xl object-cover border border-immersive-border shadow-lg shadow-immersive-shadow" />
                  <div>
                    <h3 className="text-xl font-bold text-immersive-text-primary">{currentStory.name}</h3>
                    <p className="text-xs text-[#FF4B3E] font-semibold">{currentStory.role}</p>
                    <p className="text-[11px] text-immersive-text-secondary font-medium font-mono">Placed at {currentStory.company}</p>
                  </div>
                </div>

                {/* Growth Stats */}
                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  <div className="bg-immersive-bg border border-immersive-border rounded-xl p-3 text-center">
                    <span className="text-[10px] font-mono text-immersive-text-secondary block font-semibold">AVERAGE GRADE</span>
                    <span className="text-lg font-mono font-black text-immersive-secondary">{currentStory.score}</span>
                  </div>
                  <div className="bg-immersive-bg border border-immersive-border rounded-xl p-3 text-center">
                    <span className="text-[10px] font-mono text-immersive-text-secondary block font-semibold">BRIEFS DELIVERED</span>
                    <span className="text-lg font-mono font-black text-immersive-text-primary">{currentStory.briefs}</span>
                  </div>
                </div>
              </div>

              {/* Testimonial Quote */}
              <div className="bg-immersive-bg/70 border border-immersive-border/60 p-4.5 rounded-2xl relative">
                <Quote className="w-8 h-8 text-[#FF4B3E]/10 absolute top-2 right-4" />
                <p className="text-xs text-immersive-text-secondary italic leading-relaxed relative z-10 font-medium">
                  "{currentStory.testimonial}"
                </p>
                <div className="mt-3 flex items-center space-x-1.5 text-[9px] font-mono text-[#FF4B3E] font-bold">
                  <Star className="w-3 h-3 fill-[#FF4B3E]" />
                  <Star className="w-3 h-3 fill-[#FF4B3E]" />
                  <Star className="w-3 h-3 fill-[#FF4B3E]" />
                  <Star className="w-3 h-3 fill-[#FF4B3E]" />
                  <Star className="w-3 h-3 fill-[#FF4B3E]" />
                  <span className="ml-1">VERIFIED LEARNER</span>
                </div>
              </div>

            </div>

            {/* Before and After split cards */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch relative">
              
              {/* Connector Center Graphic */}
              <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-immersive-bg border border-immersive-border items-center justify-center text-immersive-secondary shadow-lg shadow-immersive-shadow">
                <ArrowLeftRight className="w-3.5 h-3.5" />
              </div>

              {/* BEFORE CARD */}
              <div className="bg-immersive-card border border-immersive-border rounded-2xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group">
                <div className="space-y-4">
                  <span className="text-[10px] font-mono font-extrabold px-2.5 py-1 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20 uppercase tracking-wider inline-block">
                    BEFORE COHORTIA
                  </span>
                  <h4 className="text-base font-bold text-immersive-text-primary leading-tight">
                    {currentStory.before.status}
                  </h4>
                  <p className="text-xs text-immersive-text-secondary/90 leading-relaxed font-medium">
                    {currentStory.before.painPoint}
                  </p>
                </div>

                <div className="border-t border-immersive-border/40 pt-4 mt-6">
                  <span className="text-[9px] font-mono text-immersive-text-secondary/50 block font-semibold mb-2">LIMITED SKILLSET:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentStory.before.skills.map((skill, index) => (
                      <span key={index} className="text-[9px] font-mono font-medium px-2 py-0.5 rounded bg-immersive-bg border border-immersive-border text-immersive-text-secondary">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* AFTER CARD */}
              <div className="bg-immersive-card border border-immersive-primary/30 rounded-2xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-immersive-shadow">
                <div className="absolute top-0 right-0 w-24 h-24 bg-immersive-primary/5 rounded-full blur-xl pointer-events-none" />
                <div className="space-y-4">
                  <span className="text-[10px] font-mono font-extrabold px-2.5 py-1 rounded bg-immersive-primary/10 text-immersive-primary border border-immersive-primary/20 uppercase tracking-wider inline-block">
                    AFTER & PLACED
                  </span>
                  <h4 className="text-base font-bold text-immersive-text-primary leading-tight flex items-center space-x-1.5">
                    <span>{currentStory.after.status}</span>
                    <Sparkles className="w-3.5 h-3.5 text-immersive-secondary" />
                  </h4>
                  <p className="text-xs text-immersive-text-secondary leading-relaxed font-medium">
                    {currentStory.after.result}
                  </p>
                </div>

                <div className="border-t border-immersive-border/60 pt-4 mt-6">
                  <span className="text-[9px] font-mono text-immersive-secondary block font-bold mb-2">ACQUIRED COMPETENCIES:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentStory.after.skills.map((skill, index) => (
                      <span key={index} className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-[#FF4B3E]/10 border border-[#FF4B3E]/20 text-[#FF4B3E]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
