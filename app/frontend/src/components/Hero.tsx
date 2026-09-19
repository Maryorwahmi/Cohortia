import { Sparkles, ArrowRight, Star, Compass, Play, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import { UserPreferences } from "../types";

interface HeroProps {
  userProfile: UserPreferences | null;
  onOpenWizard: () => void;
}

export default function Hero({ userProfile, onOpenWizard }: HeroProps) {
  const getTrackEmojiAndName = (track: string) => {
    switch (track) {
      case "frontend": return "💻 Frontend Engineering";
      case "design": return "🎨 UI/UX Product Design";
      case "product": return "🚀 Product Management";
      case "analytics": return "📈 Data Analytics";
      default: return "";
    }
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-[80vh] pt-24 pb-12 flex items-start justify-center bg-immersive-bg overflow-hidden text-left"
    >
      {/* Decorative radial glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-immersive-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-immersive-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-immersive-secondary/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Grid lines styling backdrops */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(17,17,17,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,17,17,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Main Heading) */}
          <div className="lg:col-span-7 space-y-6 lg:pr-4">
            
            <div className="space-y-3">
              <span className="text-xs font-mono font-extrabold text-immersive-secondary uppercase tracking-widest block">
                — YOUR GROWTH STARTS HERE —
              </span>

              {userProfile ? (
                <div className="space-y-2 animate-in fade-in slide-in-from-left duration-300">
                  <h1 className="text-4xl sm:text-6xl font-sans font-extrabold text-immersive-text-primary tracking-tight leading-[1.1]">
                    Welcome Back, <span className="bg-immersive-primary bg-clip-text text-transparent">{userProfile.name}</span>.<br />
                    Accelerate Your <span className="text-immersive-secondary">Career</span>.
                  </h1>
                  <div className="inline-flex items-center space-x-2 bg-immersive-primary/10 border border-immersive-border rounded-xl px-3.5 py-1.5 text-xs font-mono font-bold text-immersive-secondary mt-2 animate-pulse">
                    <Star className="w-3.5 h-3.5 text-immersive-secondary fill-immersive-secondary" />
                    <span>MATCHED TARGET: {getTrackEmojiAndName(userProfile.track)}</span>
                  </div>
                </div>
              ) : (
                <h1 className="text-5xl sm:text-7xl font-sans font-extrabold text-immersive-text-primary tracking-tight leading-[1.05]">
                  Build Skills.<br />
                  Gain <span className="bg-immersive-primary bg-clip-text text-transparent">Experience.</span><br />
                  Move Forward.
                </h1>
              )}
            </div>

            <p className="text-base sm:text-lg text-immersive-text-secondary leading-relaxed max-w-xl font-medium">
              Cohortia is a guided career-growth platform where you learn with a community, get Cohortia mentorship, experience real-world work, and build proof of progress.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="/signup"
                className="px-8 py-4 rounded-2xl text-base font-bold text-white bg-immersive-primary hover:brightness-110 shadow-[0_0_20px_rgba(17,17,17,0.2)] hover:-translate-y-0.5 active:translate-y-0 transform transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Enrol Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/careers"
                className="px-8 py-4 rounded-2xl text-base font-bold text-immersive-text-secondary hover:text-immersive-text-primary border border-immersive-border hover:border-immersive-secondary bg-immersive-card hover:bg-immersive-card-hover transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Compass className="w-4.5 h-4.5 text-immersive-secondary" />
                <span>Explore Careers</span>
              </Link>
            </div>

            {/* Interactive Stats quick view */}
            <div className="pt-6 border-t border-immersive-border flex flex-wrap items-center gap-x-4 gap-y-3 text-immersive-text-secondary text-xs font-mono font-medium">
              <div className="flex items-center space-x-1.5">
                <UsersRound className="w-4 h-4 text-immersive-primary" />
                <span>Cohort #14 launching soon</span>
              </div>
              <div className="w-1.5 h-1.5 bg-immersive-primary/20 rounded-full" />
              <div className="flex items-center space-x-1.5">
                <Sparkles className="w-4 h-4 text-immersive-secondary" />
                <span>Verified Client Briefs</span>
              </div>
            </div>

          </div>

          {/* Right Column (Visual representation from mockup) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Visual Orbiting Circle */}
            <div className="relative w-72 sm:w-96 h-72 sm:h-96 rounded-full border border-immersive-border flex items-center justify-center animate-[spin_40s_linear_infinite] pointer-events-none">
              {/* Little visual nodes */}
              <div className="absolute top-0 w-3 h-3 bg-immersive-secondary rounded-full shadow-lg shadow-immersive-shadow shadow-immersive-secondary/50" />
              <div className="absolute bottom-1/4 left-0 w-2.5 h-2.5 bg-immersive-primary rounded-full shadow-lg shadow-immersive-shadow shadow-immersive-primary/50" />
              <div className="absolute top-1/3 right-0 w-2 h-2 bg-immersive-accent rounded-full" />
            </div>

            {/* Inner Profile Image Frame */}
            <div className="absolute w-56 sm:w-72 h-56 sm:h-72 rounded-full border-4 border-immersive-border shadow-[0_0_30px_var(--immersive-shadow)] overflow-hidden bg-immersive-bg z-10">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&fit=crop&q=80"
                alt="Cohortia Learner Workstation"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Pulsing "Cohorts Open Now!" Badge */}
            <button
              onClick={onOpenWizard}
              className="absolute -top-4 right-2 sm:right-6 bg-immersive-card/95 border border-immersive-border text-immersive-text-primary font-bold py-3 px-5 rounded-2xl shadow-[0_0_15px_var(--immersive-shadow)] z-20 flex flex-col text-left hover:scale-105 active:scale-95 transition-all duration-150 animate-bounce cursor-pointer"
            >
              <span className="text-[9px] font-mono tracking-widest text-immersive-secondary uppercase font-extrabold flex items-center space-x-1">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                <span>ACTIVE COHORTS</span>
              </span>
              <span className="text-xs font-sans font-extrabold text-immersive-text-primary mt-0.5">Open Now!</span>
            </button>

            {/* Say YES Callout bubble */}
            <div className="absolute -bottom-2 -left-2 sm:left-4 bg-immersive-card border border-immersive-border text-immersive-text-primary py-2 px-3.5 rounded-2xl shadow-[0_0_10px_var(--immersive-shadow)] z-20 flex items-center space-x-2 font-sans font-bold text-xs animate-pulse">
              <span className="text-immersive-secondary font-extrabold">say</span>
              <span className="bg-immersive-primary/10 text-immersive-secondary px-2 py-0.5 rounded">Yes!</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
