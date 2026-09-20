import { useState } from "react";
import { AreaChart, Area, BarChart, Bar, LineChart, Line, Legend, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Clock, CheckCircle, GraduationCap, Award, Compass, Sparkles, TrendingUp, HelpCircle, BookOpen, Code } from "lucide-react";
import { UserPreferences } from "../../types";
import BadgesComponent from "./BadgesComponent";
import type { ComputedCourseAnalytics } from "../../lib/courseProgressAnalytics";

interface ProgressPageProps {
  userProfile: UserPreferences;
  analytics?: Partial<ComputedCourseAnalytics>;
}

export default function ProgressPage({ userProfile, analytics }: ProgressPageProps) {
  const activeTrack = userProfile.track || "frontend";
  const courseContext = analytics?.courseContext;
  const skillGrowthData = analytics?.skillGrowthData || [];
  const studyHoursData = analytics?.studyHoursData || [
    { name: "Mon", hours: 0, count: 0 },
    { name: "Tue", hours: 0, count: 0 },
    { name: "Wed", hours: 0, count: 0 },
    { name: "Thu", hours: 0, count: 0 },
    { name: "Fri", hours: 0, count: 0 },
    { name: "Sat", hours: 0, count: 0 },
    { name: "Sun", hours: 0, count: 0 },
  ];

  const skillsData = analytics?.skillsData || [];
  const readinessChecklist = analytics?.readinessChecklist || [];

  const completedLessons = analytics?.completedLessons ?? 0;
  const totalLessons = analytics?.totalLessons ?? 0;
  const completionPercent = analytics?.completionPercent ?? 0;
  const averageScore = analytics?.averageScore ?? null;
  const xpMultiplier = analytics?.xpMultiplier ?? 1;
  const xpMultiplierStatus = analytics?.xpMultiplierStatus ?? "Calibrated";
  const studyHoursThisWeek = analytics?.studyHoursThisWeek ?? 0;

  return (
    <div className="pt-20 pb-8 min-h-screen bg-immersive-bg relative text-left">
      <div className="absolute top-20 right-20 w-[450px] h-[450px] bg-immersive-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-immersive-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6">

        {/* Course Context Header */}
        {courseContext && (
          <div className="mb-8 p-5 rounded-2xl bg-gradient-to-r from-immersive-card to-immersive-card/80 border border-immersive-border shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-3">
                <BookOpen className="w-5 h-5 text-[#FF4B3E]" />
                <div>
                  <span className="text-[9px] font-mono font-bold text-immersive-text-secondary uppercase block">Course</span>
                  <span className="text-sm font-extrabold text-immersive-text-primary truncate">{courseContext.courseTitle}</span>
                </div>
              </div>
              <div>
                <span className="text-[9px] font-mono font-bold text-immersive-text-secondary uppercase block">Level</span>
                <span className="text-sm font-extrabold text-immersive-text-primary">{courseContext.courseLevel}</span>
              </div>
              <div>
                <span className="text-[9px] font-mono font-bold text-immersive-text-secondary uppercase block">Progress</span>
                <span className="text-sm font-extrabold text-immersive-text-primary">{courseContext.completedModulesCount} / {courseContext.totalModules} Modules</span>
              </div>
              <div>
                <span className="text-[9px] font-mono font-bold text-immersive-text-secondary uppercase block">Duration</span>
                <span className="text-sm font-extrabold text-immersive-text-primary">{courseContext.duration || "Self-paced"}</span>
              </div>
            </div>
          </div>
        )}

        {/* Title */}
        <div className="mb-8">
          <span className="text-xs font-mono font-bold tracking-widest text-[#FF4B3E] uppercase block mb-2">
            | INSIGHTS & ANALYTICS DASHBOARD
          </span>
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-immersive-text-primary tracking-tight">
            Performance & Progress
          </h1>
          <p className="text-sm text-immersive-text-secondary max-w-2xl font-medium mt-1">
            Real-time metrics from your {courseContext?.courseTitle || "learning"} curriculum. Track engagement, competency, and placement readiness.
          </p>
        </div>

        {/* Stats Blocks Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
          
          <div className="bg-immersive-card border border-immersive-border p-5 rounded-2xl flex items-center space-x-4 shadow-lg shadow-immersive-shadow">
            <div className="w-11 h-11 rounded-xl bg-immersive-secondary/15 border border-immersive-secondary/25 flex items-center justify-center text-immersive-secondary">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold text-immersive-text-secondary uppercase block">
                Study Time (Wk)
              </span>
              <span className="text-lg sm:text-xl font-extrabold text-immersive-text-primary">
                {studyHoursThisWeek} <span className="text-xs text-immersive-text-secondary">Hrs</span>
              </span>
            </div>
          </div>

          <div className="bg-immersive-card border border-immersive-border p-5 rounded-2xl flex items-center space-x-4 shadow-lg shadow-immersive-shadow">
            <div className="w-11 h-11 rounded-xl bg-[#FF4B3E]/15 border border-[#FF4B3E]/25 flex items-center justify-center text-[#FF4B3E]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold text-immersive-text-secondary uppercase block">
                Lessons Finished
              </span>
              <span className="text-lg sm:text-xl font-extrabold text-immersive-text-primary">
                {completedLessons} <span className="text-xs text-immersive-text-secondary">/ {totalLessons} ({completionPercent}%)</span>
              </span>
            </div>
          </div>

          <div className="bg-immersive-card border border-immersive-border p-5 rounded-2xl flex items-center space-x-4 shadow-lg shadow-immersive-shadow">
            <div className="w-11 h-11 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold text-immersive-text-secondary uppercase block">
                Average Review Score
              </span>
              <span className="text-lg sm:text-xl font-extrabold text-immersive-text-primary">
                {averageScore !== null ? `${averageScore}%` : "—"} <span className="text-xs text-immersive-text-secondary">{averageScore !== null ? "Achieved" : "No scores yet"}</span>
              </span>
            </div>
          </div>

          <div className="bg-immersive-card border border-immersive-border p-5 rounded-2xl flex items-center space-x-4 shadow-lg shadow-immersive-shadow">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold text-immersive-text-secondary uppercase block">
                XP Multiplier
              </span>
              <span className="text-lg sm:text-xl font-extrabold text-immersive-text-primary">
                {xpMultiplier}x <span className="text-xs text-emerald-400">{xpMultiplierStatus}</span>
              </span>
            </div>
          </div>

        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          
          {/* Weekly study hours chart */}
          <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl shadow-immersive-shadow">
            <div className="flex items-center justify-between border-b border-immersive-border/40 pb-4">
              <div>
                <h3 className="text-base font-extrabold text-immersive-text-primary font-sans">
                  Weekly Study Activity
                </h3>
                <span className="text-[10px] text-immersive-text-secondary font-semibold uppercase block">
                  Time allocation across daily study modules
                </span>
              </div>
              <TrendingUp className="w-4 h-4 text-[#FF4B3E]" />
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={studyHoursData}
                  margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="hoursGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FF4B3E" stopOpacity={0.35}/>
                      <stop offset="95%" stopColor="#FF4B3E" stopOpacity={0.0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.12)" />
                  <XAxis dataKey="name" stroke="#525866" fontSize={11} fontWeight={500} />
                  <YAxis stroke="#525866" fontSize={11} fontWeight={500} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "var(--immersive-input-bg)", 
                      borderColor: "var(--immersive-border)", 
                      borderRadius: "12px",
                      color: "var(--immersive-text-primary)"
                    }} 
                  />
                  <Area type="monotone" dataKey="hours" stroke="#FF4B3E" strokeWidth={2} fillOpacity={1} fill="url(#hoursGrad)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Skill Proficiency Index Bar Chart */}
          <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl shadow-immersive-shadow">
            <div className="flex items-center justify-between border-b border-immersive-border/40 pb-4">
              <div>
                <h3 className="text-base font-extrabold text-immersive-text-primary font-sans">
                  Curricular Competency Index
                </h3>
                <span className="text-[10px] text-immersive-text-secondary font-semibold uppercase block">
                  Proficiency level mapped against track goals
                </span>
              </div>
              <Sparkles className="w-4 h-4 text-immersive-secondary" />
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={skillsData}
                  margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.12)" />
                  <XAxis dataKey="skill" stroke="#525866" fontSize={9} fontWeight={600} />
                  <YAxis stroke="#525866" fontSize={11} fontWeight={500} domain={[0, 100]} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "var(--immersive-input-bg)", 
                      borderColor: "var(--immersive-border)", 
                      borderRadius: "12px",
                      color: "var(--immersive-text-primary)" 
                    }} 
                  />
                  <Bar dataKey="score" fill="var(--immersive-secondary)" radius={[6, 6, 0, 0]} barSize={25} fillOpacity={0.8} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

        {/* New Data Visualization: Skill Growth Trajectory (Over Time) */}
        <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl shadow-immersive-shadow mb-10 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-immersive-secondary/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center justify-between border-b border-immersive-border/40 pb-4">
            <div>
              <h3 className="text-base font-extrabold text-immersive-text-primary font-sans">
                Skill Growth Trajectory (Over Time)
              </h3>
              <span className="text-[10px] text-immersive-text-secondary font-semibold uppercase block">
                Incremental progression of critical competency matrices week-by-week
              </span>
            </div>
            <TrendingUp className="w-4 h-4 text-immersive-primary" />
          </div>

          <div className="h-72 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={analytics?.skillGrowthData || skillGrowthData} margin={{ top: 15, right: 20, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.12)" />
                <XAxis dataKey="name" stroke="#525866" fontSize={11} fontWeight={500} />
                <YAxis stroke="#525866" fontSize={11} fontWeight={500} domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "var(--immersive-input-bg)", 
                    borderColor: "var(--immersive-border)", 
                    borderRadius: "12px",
                    color: "var(--immersive-text-primary)" 
                  }} 
                />
                <Legend wrapperStyle={{ fontSize: '11px', fontWeight: 600, paddingTop: '10px' }} />
                {Object.keys(skillGrowthData[0] || {}).filter(k => k !== "name").map((key, idx) => {
                  const colors = ["#FF4B3E", "#FF9F1C", "#2563eb", "#10B981"];
                  return (
                    <Line 
                      key={key} 
                      type="monotone" 
                      dataKey={key} 
                      stroke={colors[idx % colors.length]} 
                      strokeWidth={3} 
                      activeDot={{ r: 6 }} 
                    />
                  );
                })}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gamified Achievements & Badge Progress */}
        <div className="mb-10">
          <BadgesComponent userProfile={userProfile} />
        </div>

        {/* Bottom Placement Readiness Section */}
        <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 sm:p-8 space-y-5 shadow-xl shadow-immersive-shadow text-left">
          <div className="border-b border-immersive-border/40 pb-4">
            <h3 className="text-base font-extrabold text-immersive-text-primary font-sans">
              Career Placement Readiness
            </h3>
            <p className="text-xs text-immersive-text-secondary font-medium mt-0.5">
              {courseContext?.courseTitle ? `Career progression through ${courseContext.courseTitle} — track competencies that map to real industry positions.` : "Placement milestones unlock dynamically as you master curriculum competencies."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {(analytics?.placementStages || []).map((stage, i) => (
              <div
                key={i}
                className={`p-4 rounded-2xl border text-left flex flex-col justify-between space-y-4 transition-all duration-200 ${
                  stage.status === "completed"
                    ? "bg-emerald-500/5 border-emerald-500/20 shadow-emerald-500/10"
                    : stage.status === "active"
                    ? "bg-[#FF4B3E]/5 border-[#FF4B3E]/30 shadow-[#FF4B3E]/10"
                    : "bg-immersive-bg/30 border-immersive-border/30 opacity-50"
                }`}
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono font-bold text-immersive-text-secondary uppercase">
                      Stage {String(i + 1).padStart(2, "0")}
                    </span>
                    {stage.status === "completed" ? (
                      <span className="text-[9px] font-mono font-bold text-emerald-400">✓ READY</span>
                    ) : stage.status === "active" ? (
                      <span className="text-[9px] font-mono font-bold text-[#FF4B3E] animate-pulse">ACTIVE</span>
                    ) : (
                      <span className="text-[9px] font-mono font-bold text-immersive-text-secondary">LOCKED</span>
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-immersive-text-primary leading-tight">
                    {stage.title}
                  </h4>
                  <p className="text-[10px] text-immersive-text-secondary/70 leading-snug">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-immersive-border/20 space-y-1">
                  {stage.unlockCondition && (
                    <span className="text-[9px] text-immersive-text-secondary/80 font-mono block">
                      Progress: {stage.completionPercent || 0}%
                    </span>
                  )}
                  <span className="text-[10px] text-immersive-text-secondary/80 font-medium block">
                    {stage.status === "completed"
                      ? "✓ Validated by curriculum assessment"
                      : stage.status === "active"
                      ? stage.unlockCondition
                      : "Complete prior stage to unlock"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
