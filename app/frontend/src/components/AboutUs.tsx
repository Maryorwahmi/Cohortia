import { useState } from "react";
import { Users, ShieldCheck, Target, Award, Compass, Sparkles, ArrowRight, Heart, HeartHandshake, Eye } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
  color: string;
}

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState<"mission" | "values" | "story">("mission");

  const values = [
    {
      icon: Users,
      title: "Shared Cohorts",
      description: "No more solitary learning in isolated online courses. Achieve career alignment alongside peers who motivate, review, and collaborate with you.",
      color: "text-blue-500 bg-blue-500/10 border-blue-500/20"
    },
    {
      icon: Target,
      title: "Experiential Proof",
      description: "Replace passive multiple-choice quizzes with real client briefs from companies like CarbonHQ and EcoSync, creating high-trust portfolios.",
      color: "text-amber-500 bg-amber-500/10 border-amber-500/20"
    },
    {
      icon: ShieldCheck,
      title: "Direct Coaching",
      description: "Get active mentorship and direct, constructive reviews from industry leaders who guide your design choices, codebase hygiene, and system architecture.",
      color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
    }
  ];

  const team: TeamMember[] = [
    {
      name: "Chinedu Okeke",
      role: "Lead Tech & Engineering Coach",
      bio: "Ex-Staff Engineer with 12+ years of full-stack architecture. Chinedu believes that the best engineers are built through shipping client briefs, not passing generic bootcamps.",
      initials: "CO",
      color: "from-blue-500 to-indigo-500"
    },
    {
      name: "Amina Bello",
      role: "Lead UI/UX & Design Advisor",
      bio: "Award-winning product designer dedicated to helping new talent craft polished, responsive layouts. Amina leads the career alignment review committees.",
      initials: "AB",
      color: "from-orange-500 to-amber-500"
    },
    {
      name: "Babajide Adebayo",
      role: "Head of Industry Partnerships",
      bio: "Connects the Cohortia student portfolio network with top startups and global corporate hiring partners. Babajide coordinates our weekly capstone brief integrations.",
      initials: "BA",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section id="about-section" className="py-12 bg-immersive-bg relative overflow-hidden transition-colors duration-300 border-t border-b border-immersive-border/30">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-immersive-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6 relative z-10 text-left">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-extrabold text-immersive-secondary tracking-widest uppercase block mb-2">
            WHO WE ARE
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-immersive-text-primary tracking-tight leading-none">
            We are redefining professional career preparation.
          </h2>
          <p className="text-sm sm:text-base text-immersive-text-secondary mt-4 leading-relaxed font-medium">
            Cohortia was born out of a simple, urgent observation: traditional courses leave learners high and dry with zero practical proof. We built an experiential workspace where your credentials are earned by doing real-world work.
          </p>
        </div>

        {/* Tabbed Interactive Section (Mission, Values, Story) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          <div className="lg:col-span-4 space-y-2">
            <button
              onClick={() => setActiveTab("mission")}
              className={`w-full p-4.5 rounded-2xl border text-left transition-all duration-300 flex items-center space-x-4 cursor-pointer ${
                activeTab === "mission"
                  ? "bg-immersive-card border-immersive-primary shadow-lg shadow-immersive-shadow"
                  : "bg-immersive-card/30 border-immersive-border/60 hover:border-immersive-border hover:bg-immersive-card/60"
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                activeTab === "mission" ? "bg-immersive-primary/10 text-immersive-primary" : "bg-immersive-bg text-immersive-text-secondary"
              }`}>
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h4 className={`text-sm font-extrabold ${activeTab === "mission" ? "text-immersive-text-primary" : "text-immersive-text-secondary"}`}>
                  Our Strategic Mission
                </h4>
                <p className="text-[11px] text-immersive-text-secondary/70 mt-0.5 leading-tight">
                  Why we exist and what we aim to solve.
                </p>
              </div>
            </button>

            <button
              onClick={() => setActiveTab("values")}
              className={`w-full p-4.5 rounded-2xl border text-left transition-all duration-300 flex items-center space-x-4 cursor-pointer ${
                activeTab === "values"
                  ? "bg-immersive-card border-immersive-primary shadow-lg shadow-immersive-shadow"
                  : "bg-immersive-card/30 border-immersive-border/60 hover:border-immersive-border hover:bg-immersive-card/60"
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                activeTab === "values" ? "bg-immersive-primary/10 text-immersive-primary" : "bg-immersive-bg text-immersive-text-secondary"
              }`}>
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className={`text-sm font-extrabold ${activeTab === "values" ? "text-immersive-text-primary" : "text-immersive-text-secondary"}`}>
                  Our Core Beliefs
                </h4>
                <p className="text-[11px] text-immersive-text-secondary/70 mt-0.5 leading-tight">
                  The values that govern our cohort labs.
                </p>
              </div>
            </button>

            <button
              onClick={() => setActiveTab("story")}
              className={`w-full p-4.5 rounded-2xl border text-left transition-all duration-300 flex items-center space-x-4 cursor-pointer ${
                activeTab === "story"
                  ? "bg-immersive-card border-immersive-primary shadow-lg shadow-immersive-shadow"
                  : "bg-immersive-card/30 border-immersive-border/60 hover:border-immersive-border hover:bg-immersive-card/60"
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                activeTab === "story" ? "bg-immersive-primary/10 text-immersive-primary" : "bg-immersive-bg text-immersive-text-secondary"
              }`}>
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h4 className={`text-sm font-extrabold ${activeTab === "story" ? "text-immersive-text-primary" : "text-immersive-text-secondary"}`}>
                  The Vision Forward
                </h4>
                <p className="text-[11px] text-immersive-text-secondary/70 mt-0.5 leading-tight">
                  How we scale global placement networks.
                </p>
              </div>
            </button>
          </div>

          <div className="lg:col-span-8 bg-immersive-card border border-immersive-border p-6 sm:p-8 rounded-3xl min-h-[250px] flex flex-col justify-between shadow-xl shadow-immersive-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-immersive-secondary/5 rounded-full blur-2xl pointer-events-none" />

            {activeTab === "mission" && (
              <div className="space-y-4 animate-in fade-in duration-300 text-left">
                <div className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold text-immersive-secondary uppercase">
                  <Compass className="w-4 h-4" />
                  <span>Bridging the Experiential Gap</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-immersive-text-primary leading-tight">
                  To empower talented individuals with the hands-on proof needed to command industry respect.
                </h3>
                <p className="text-xs sm:text-sm text-immersive-text-secondary leading-relaxed font-medium">
                  Traditional education focuses on memorization and certificate collection. Cohortia replaces this stale method with adaptive simulator frameworks, direct mentoring telemetry, and verified project milestones. We aim to help every graduate build an undeniable, high-contrast, peer-reviewed portfolio of client integrations.
                </p>
              </div>
            )}

            {activeTab === "values" && (
              <div className="space-y-4 animate-in fade-in duration-300 text-left">
                <div className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold text-blue-500 uppercase">
                  <Heart className="w-4 h-4 fill-blue-500/20" />
                  <span>Guiding Principles</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-immersive-text-primary leading-tight">
                  Radical clarity, cooperative growth, and continuous shipping.
                </h3>
                <p className="text-xs sm:text-sm text-immersive-text-secondary leading-relaxed font-medium">
                  We believe that professional growth is a team sport. By learning in synchronized cohorts, solving real challenges with live constraints, and receiving genuine engineering critiques, our students build durable instincts that prepare them to excel in modern high-performance work cultures.
                </p>
              </div>
            )}

            {activeTab === "story" && (
              <div className="space-y-4 animate-in fade-in duration-300 text-left">
                <div className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold text-emerald-500 uppercase">
                  <Sparkles className="w-4 h-4" />
                  <span>The Future of Hiring</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-immersive-text-primary leading-tight">
                  Transitioning credentials from static PDFs to live, verifiable code and assets.
                </h3>
                <p className="text-xs sm:text-sm text-immersive-text-secondary leading-relaxed font-medium">
                  Our long-term blueprint involves linking every cohort step directly to active developer profiles. Hiring partners can view active students' code metrics, responsive wireframe reviews, and direct team alignment ratings. This level of transparency makes recruitment reliable, fast, and entirely evidence-based.
                </p>
              </div>
            )}

            <div className="border-t border-immersive-border/40 pt-4 mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <span className="text-[10px] font-mono text-immersive-text-secondary/60 font-bold">
                *COHORTIA INTERNSHIP SYSTEM DIAGNOSTICS ACTIVE
              </span>
              <div className="flex items-center space-x-1.5 text-xs font-extrabold text-immersive-primary">
                <span>Explore Careers Tab</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

          </div>

        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="bg-immersive-card border border-immersive-border/60 p-6 sm:p-8 rounded-3xl relative overflow-hidden group hover:border-immersive-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-immersive-shadow"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-immersive-secondary/5 rounded-full blur-xl pointer-events-none" />
                
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-5 ${v.color}`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-base font-extrabold text-immersive-text-primary mb-2">
                  {v.title}
                </h3>
                <p className="text-xs text-immersive-text-secondary/90 leading-relaxed font-medium">
                  {v.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Meet the Mentors */}
        <div className="border-t border-immersive-border/40 pt-16">
          <div className="mb-10 text-center md:text-left">
            <span className="text-[10px] font-mono font-bold text-immersive-text-secondary uppercase tracking-wider block">
              COHORTIA LEADERSHIP & EXPERT ADVISORS
            </span>
            <h3 className="text-2xl font-black text-immersive-text-primary mt-1">
              Learn directly from our Active Mentors
            </h3>
            <p className="text-xs text-immersive-text-secondary mt-1 font-medium">
              Real advice, live telemetry feedback, and customized industry paths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-immersive-card border border-immersive-border/60 p-6 rounded-2xl flex flex-col justify-between text-left hover:border-immersive-primary/30 transition-colors duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3.5">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${member.color} flex items-center justify-center text-sm font-mono font-bold text-immersive-text-primary shadow-md shadow-immersive-shadow`}>
                      {member.initials}
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-immersive-text-primary">
                        {member.name}
                      </h4>
                      <p className="text-[10px] font-bold text-immersive-secondary font-mono tracking-wider">
                        {member.role.toUpperCase()}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-immersive-text-secondary leading-relaxed font-medium">
                    "{member.bio}"
                  </p>
                </div>

                <div className="border-t border-immersive-border/30 pt-3 mt-4 flex items-center justify-between text-[10px] font-mono font-bold text-immersive-text-secondary/60">
                  <span>COHORTIA MENTOR</span>
                  <span className="text-emerald-500 flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>ONLINE</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
