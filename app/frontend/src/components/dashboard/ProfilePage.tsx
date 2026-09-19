import React, { useState } from "react";
import { User, Mail, Compass, Target, Clock, ShieldAlert, Check, Sparkles, Award, FileText, Download, LogOut, TrendingUp } from "lucide-react";
import { UserPreferences, CohortTrackId } from "../../types";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

interface ProfilePageProps {
  userProfile: UserPreferences;
  onUpdateProfile: (profile: UserPreferences) => void;
  onResetProfile: () => void;
  onChangePage: (page: string) => void;
}

export default function ProfilePage({ userProfile, onUpdateProfile, onResetProfile, onChangePage }: ProfilePageProps) {
  const [formData, setFormData] = useState<UserPreferences>({
    name: userProfile.name,
    email: userProfile.email,
    track: userProfile.track || "frontend",
    experience: userProfile.experience || "beginner",
    commitment: userProfile.commitment || "parttime",
    completedSteps: userProfile.completedSteps || [],
    phone: userProfile.phone,
    country: userProfile.country,
    careerGoal: userProfile.careerGoal,
    desiredField: userProfile.desiredField,
    availability: userProfile.availability,
    portfolioLink: userProfile.portfolioLink,
  });

  const [isSaved, setIsSaved] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const getRadarData = (trackId: CohortTrackId) => {
    switch (trackId) {
      case "frontend":
        return [
          { subject: "React Hooks", initial: 40, current: 85 },
          { subject: "TypeScript", initial: 50, current: 75 },
          { subject: "Tailwind CSS", initial: 45, current: 90 },
          { subject: "Vite Bundler", initial: 30, current: 65 },
          { subject: "API Configs", initial: 35, current: 80 },
          { subject: "Git Sprints", initial: 45, current: 70 }
        ];
      case "design":
        return [
          { subject: "Figma Systems", initial: 35, current: 80 },
          { subject: "Interaction", initial: 40, current: 85 },
          { subject: "User Testing", initial: 30, current: 75 },
          { subject: "Design Systems", initial: 45, current: 90 },
          { subject: "Prototyping", initial: 30, current: 70 },
          { subject: "Typography", initial: 50, current: 80 }
        ];
      case "product":
        return [
          { subject: "Agile Sprints", initial: 45, current: 90 },
          { subject: "PRB Writing", initial: 35, current: 80 },
          { subject: "User Research", initial: 40, current: 85 },
          { subject: "Prioritization", initial: 30, current: 75 },
          { subject: "Agile Metrics", initial: 35, current: 70 },
          { subject: "Stakeholders", initial: 50, current: 85 }
        ];
      case "analytics":
        return [
          { subject: "SQL Queries", initial: 30, current: 75 },
          { subject: "D3.js & SVG", initial: 35, current: 80 },
          { subject: "Data Schemas", initial: 40, current: 85 },
          { subject: "BI Reports", initial: 45, current: 90 },
          { subject: "Funnel Metrics", initial: 30, current: 70 },
          { subject: "Performance", initial: 35, current: 75 }
        ];
      case "cpp":
        return [
          { subject: "Modern C++20", initial: 30, current: 80 },
          { subject: "Template Meta", initial: 25, current: 75 },
          { subject: "STL Containers", initial: 45, current: 90 },
          { subject: "Concurrency/Thread", initial: 20, current: 70 },
          { subject: "Memory Align", initial: 15, current: 65 },
          { subject: "Low Latency", initial: 30, current: 85 }
        ];
      default:
        return [];
    }
  };

  const tracks = [
    { id: "frontend", label: "Frontend Engineering" },
    { id: "design", label: "UI/UX Product Design" },
    { id: "product", label: "Product Management" },
    { id: "analytics", label: "Data Analytics" },
    { id: "cpp", label: "C++ Professional Programmer" }
  ];

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile(formData);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleExportSyllabus = async () => {
    setIsExporting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsExporting(false);
    
    // Simulate direct download
    alert(`Success! Curated syllabus handbook downloaded for ${formData.name}'s active ${formData.track} track.`);
  };

  // Badges unlocked based on completed lessons
  const getBadges = () => {
    const stepsCount = userProfile.completedSteps?.length || 1;
    const items = [
      { name: "Onboarding Graduate", desc: "Completed Milestone 01 Assessment & Onboarding specs", unlocked: stepsCount >= 1, icon: "🎓" },
      { name: "Product Explorer", desc: "Finished at least 5 roadmap learning steps", unlocked: stepsCount >= 5, icon: "🚀" },
      { name: "Academic Scholar", desc: "Finished at least 15 roadmap learning steps", unlocked: stepsCount >= 15, icon: "📚" },
      { name: "Brief Architect", desc: "Achieved perfect scores on client projects review", unlocked: stepsCount >= 20, icon: "🏆" }
    ];
    return items;
  };

  const badgesList = getBadges();

  return (
    <div className="pt-20 pb-8 min-h-screen bg-immersive-bg relative text-left">
      <div className="absolute top-20 right-20 w-[450px] h-[450px] bg-immersive-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-immersive-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6">

        {/* Title */}
        <div className="mb-8">
          <span className="text-xs font-mono font-bold tracking-widest text-[#FF4B3E] uppercase block mb-2">
            | STUDENT DATA & MANAGEMENT
          </span>
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-immersive-text-primary tracking-tight">
            Academic Profile
          </h1>
          <p className="text-sm text-immersive-text-secondary max-w-2xl font-medium mt-1">
            Manage your personal credentials, track enrollments, view academic achievements, and export customized curriculum syllabi dynamically.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel: Info Edit Form - 7 columns */}
          <form onSubmit={handleSave} className="lg:col-span-7 bg-immersive-card border border-immersive-border rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl shadow-immersive-shadow">
            <div className="flex items-center justify-between border-b border-immersive-border/40 pb-4">
              <h2 className="text-base font-extrabold text-immersive-text-primary font-mono uppercase tracking-wider">
                EDIT PREFERENCES
              </h2>
              {isSaved && (
                <span className="text-xs font-bold text-emerald-400 flex items-center space-x-1.5 animate-pulse">
                  <Check className="w-4 h-4" />
                  <span>PREFERENCES SYNCED</span>
                </span>
              )}
            </div>

            {/* Profile Picture Upload */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-20 h-20 rounded-2xl bg-immersive-bg border-2 border-dashed border-immersive-border/60 flex items-center justify-center relative overflow-hidden group cursor-pointer hover:border-immersive-secondary/50 transition-all">
                <User className="w-8 h-8 text-immersive-text-secondary group-hover:text-immersive-secondary transition-colors" />
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">Upload</span>
                </div>
                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept="image/*" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-immersive-text-primary">Profile Image</h3>
                <p className="text-[10px] text-immersive-text-secondary font-mono">JPG, GIF or PNG. Max size of 800K</p>
              </div>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono font-bold text-immersive-secondary uppercase tracking-wider block">
                Candidate Name
              </label>
              <div className="flex items-center space-x-3 bg-immersive-bg border border-immersive-border rounded-xl px-4 py-3 focus-within:border-immersive-secondary transition-all">
                <User className="w-4 h-4 text-immersive-text-secondary" />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-transparent text-sm text-immersive-text-primary focus:outline-none flex-1"
                />
              </div>
            </div>

            {/* Location & Bio */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold text-immersive-secondary uppercase tracking-wider block">
                  Location
                </label>
                <div className="flex items-center space-x-3 bg-immersive-bg border border-immersive-border rounded-xl px-4 py-3 focus-within:border-immersive-secondary transition-all">
                  <Compass className="w-4 h-4 text-immersive-text-secondary" />
                  <input
                    type="text"
                    placeholder="e.g. Remote, UK"
                    value={formData.country || ""}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="bg-transparent text-sm text-immersive-text-primary placeholder:text-immersive-text-secondary/50 focus:outline-none flex-1"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold text-immersive-secondary uppercase tracking-wider block">
                  LinkedIn URL
                </label>
                <div className="flex items-center space-x-3 bg-immersive-bg border border-immersive-border rounded-xl px-4 py-3 focus-within:border-immersive-secondary transition-all">
                  <span className="text-immersive-text-secondary font-bold text-xs">in</span>
                  <input
                    type="url"
                    placeholder="linkedin.com/in..."
                    value={formData.portfolioLink || ""}
                    onChange={(e) => setFormData({ ...formData, portfolioLink: e.target.value })}
                    className="bg-transparent text-sm text-immersive-text-primary placeholder:text-immersive-text-secondary/50 focus:outline-none flex-1"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono font-bold text-immersive-secondary uppercase tracking-wider block">
                Contact Email
              </label>
              <div className="flex items-center space-x-3 bg-immersive-bg border border-immersive-border rounded-xl px-4 py-3 opacity-60">
                <Mail className="w-4 h-4 text-immersive-text-secondary" />
                <input
                  type="email"
                  disabled
                  value={formData.email || userProfile.email || ""}
                  className="bg-transparent text-sm text-immersive-text-secondary/70 focus:outline-none flex-1 cursor-not-allowed"
                />
              </div>
            </div>

            {/* Phone & Availability */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold text-immersive-secondary uppercase tracking-wider block">
                  Phone Number
                </label>
                <div className="flex items-center space-x-3 bg-immersive-bg border border-immersive-border rounded-xl px-4 py-3 focus-within:border-immersive-secondary transition-all">
                  <span className="text-immersive-text-secondary font-bold text-xs">📞</span>
                  <input
                    type="tel"
                    placeholder="+1 234 567 8900"
                    value={formData.phone || ""}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-transparent text-sm text-immersive-text-primary placeholder:text-immersive-text-secondary/50 focus:outline-none flex-1"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold text-immersive-secondary uppercase tracking-wider block">
                  Availability
                </label>
                <div className="flex items-center space-x-3 bg-immersive-bg border border-immersive-border rounded-xl px-4 py-3 focus-within:border-immersive-secondary transition-all">
                  <Clock className="w-4 h-4 text-immersive-text-secondary" />
                  <input
                    type="text"
                    placeholder="e.g. Weekdays 6-9 PM"
                    value={formData.availability || ""}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    className="bg-transparent text-sm text-immersive-text-primary placeholder:text-immersive-text-secondary/50 focus:outline-none flex-1"
                  />
                </div>
              </div>
            </div>

            {/* Career Goal */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono font-bold text-immersive-secondary uppercase tracking-wider block">
                Career Goal
              </label>
              <div className="flex items-center space-x-3 bg-immersive-bg border border-immersive-border rounded-xl px-4 py-3 focus-within:border-immersive-secondary transition-all">
                <Target className="w-4 h-4 text-immersive-text-secondary" />
                <input
                  type="text"
                  placeholder="e.g. Become a full-stack engineer within 6 months"
                  value={formData.careerGoal || ""}
                  onChange={(e) => setFormData({ ...formData, careerGoal: e.target.value })}
                  className="bg-transparent text-sm text-immersive-text-primary placeholder:text-immersive-text-secondary/50 focus:outline-none flex-1"
                />
              </div>
            </div>

            {/* Track Switcher selection */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono font-bold text-immersive-secondary uppercase tracking-wider block">
                Enrolled Track (Updates Roadmap)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tracks.map((t) => {
                  const isSelected = formData.track === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, track: t.id as CohortTrackId })}
                      className={`p-3.5 rounded-xl border text-sm font-bold text-left flex items-center justify-between transition-all cursor-pointer ${
                        isSelected
                          ? "bg-immersive-primary/10 border-[#FF4B3E]/60 text-immersive-text-primary"
                          : "bg-immersive-bg border-immersive-border text-immersive-text-secondary hover:text-immersive-text-primary"
                      }`}
                    >
                      <span>{t.label}</span>
                      {isSelected && <div className="w-2 h-2 bg-[#FF4B3E] rounded-full" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Experience & Commitment */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold text-immersive-secondary uppercase tracking-wider block">
                  Experience Level
                </label>
                <select
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value as any })}
                  className="w-full bg-immersive-bg border border-immersive-border text-sm text-immersive-text-primary rounded-xl px-4 py-3.5 focus:outline-none focus:border-immersive-secondary transition-all"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="changer">Career Changer</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold text-immersive-secondary uppercase tracking-wider block">
                  Weekly Commitment
                </label>
                <select
                  value={formData.commitment}
                  onChange={(e) => setFormData({ ...formData, commitment: e.target.value as any })}
                  className="w-full bg-immersive-bg border border-immersive-border text-sm text-immersive-text-primary rounded-xl px-4 py-3.5 focus:outline-none focus:border-immersive-secondary transition-all"
                >
                  <option value="parttime">Part-Time (Flexible)</option>
                  <option value="fulltime">Full-Time (Intense)</option>
                </select>
              </div>

            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-widest text-immersive-bg bg-immersive-secondary hover:bg-white transition-all duration-200 cursor-pointer shadow-md shadow-immersive-shadow text-center"
            >
              Save Preference Profile Settings
            </button>
          </form>

          {/* Right panel: Digital Badges & Export - 5 columns */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Proficiency Radar Chart */}
            <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 space-y-4 shadow-xl shadow-immersive-shadow text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-immersive-secondary/3 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-immersive-secondary uppercase tracking-widest block">
                    Proficiency Growth
                  </span>
                  <h3 className="text-sm font-extrabold text-immersive-text-primary mt-1">Skill Mastery Audit</h3>
                </div>
                <div className="w-8 h-8 rounded-lg bg-[#FF4B3E]/10 flex items-center justify-center text-[#FF4B3E]">
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>

              <div className="w-full h-[220px] flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="75%" data={getRadarData(formData.track)}>
                    <PolarGrid stroke="#334155" strokeWidth={0.5} />
                    <PolarAngleAxis 
                      dataKey="subject" 
                      tick={{ fill: "#94a3b8", fontSize: 9, fontWeight: 600 }} 
                    />
                    <PolarRadiusAxis 
                      angle={30} 
                      domain={[0, 100]} 
                      tick={false} 
                      axisLine={false} 
                    />
                    <Radar 
                      name="Assessment" 
                      dataKey="initial" 
                      stroke="#475569" 
                      fill="#475569" 
                      fillOpacity={0.15} 
                    />
                    <Radar 
                      name="Active" 
                      dataKey="current" 
                      stroke="#FF4B3E" 
                      fill="#FF4B3E" 
                      fillOpacity={0.35} 
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              {/* Legends */}
              <div className="flex items-center justify-center space-x-6 border-t border-immersive-border/30 pt-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded bg-[#475569] bg-opacity-60" />
                  <span className="text-[10px] font-mono font-bold text-immersive-text-secondary uppercase">Initial Assessment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded bg-[#FF4B3E] bg-opacity-80" />
                  <span className="text-[10px] font-mono font-bold text-immersive-text-primary uppercase">Current Growth</span>
                </div>
              </div>
            </div>

            {/* Badges Screen */}
            <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 space-y-5 shadow-xl shadow-immersive-shadow text-left">
              <span className="text-xs font-mono font-bold text-immersive-secondary uppercase tracking-widest block">
                Academic Achievements
              </span>
              <div className="space-y-3.5">
                {badgesList.map((badge, i) => (
                  <div
                    key={i}
                    className={`p-3.5 rounded-2xl border flex items-center space-x-3.5 transition-all ${
                      badge.unlocked
                        ? "bg-[#FF4B3E]/5 border-[#FF4B3E]/15"
                        : "bg-immersive-bg/20 border-immersive-border/20 opacity-40"
                    }`}
                  >
                    <div className="text-2xl shrink-0">
                      {badge.unlocked ? badge.icon : "🔒"}
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold text-immersive-text-primary block">
                        {badge.name}
                      </span>
                      <span className="text-[10px] text-immersive-text-secondary leading-tight block">
                        {badge.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Download & Reset actions */}
            <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 text-left space-y-4 shadow-xl shadow-immersive-shadow">
              <span className="text-xs font-mono font-bold text-immersive-secondary uppercase tracking-widest block">
                DANGER ZONE & ACTIONS
              </span>
              
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleExportSyllabus}
                  disabled={isExporting}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-immersive-text-primary bg-immersive-bg border border-immersive-border hover:border-immersive-secondary/50 transition-all cursor-pointer text-center flex items-center justify-center space-x-2"
                >
                  {isExporting ? (
                    <span className="animate-pulse">Exporting PDF...</span>
                  ) : (
                    <>
                      <Download className="w-4 h-4 text-[#FF4B3E]" />
                      <span>Download Curated Track Syllabus</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    if (confirm("Are you sure you want to reset your academic logs and log out?")) {
                      onResetProfile();
                      onChangePage("home");
                    }
                  }}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-red-400 bg-red-500/5 border border-red-500/25 hover:bg-red-500/10 transition-all cursor-pointer text-center flex items-center justify-center space-x-1.5"
                >
                  <LogOut className="w-4 h-4 shrink-0" />
                  <span>Reset All Local Student Data</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
