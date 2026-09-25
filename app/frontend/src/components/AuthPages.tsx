import { useState, useEffect, FormEvent } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
  User, Mail, Lock, Phone, Globe, Calendar, GraduationCap,
  Check, ShieldCheck, ArrowRight, ArrowLeft, Eye, EyeOff
} from "lucide-react";
import Logo from "./Logo";
import { useAuth } from "../context/AuthContext";
import { trackApi, Track } from "../services/api";
import { RoadmapSelection } from "../types";

interface AuthPagesProps {
  initialTab: "signup" | "login";
}

interface LocationState {
  from?: { pathname?: string };
  selectedTrackId?: string;
  roadmapSelection?: RoadmapSelection;
}

function readPendingRoadmap(): RoadmapSelection | undefined {
  try {
    const stored = sessionStorage.getItem("cohortia_pending_roadmap");
    return stored ? JSON.parse(stored) as RoadmapSelection : undefined;
  } catch {
    return undefined;
  }
}

export default function AuthPages({ initialTab }: AuthPagesProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, signup, completeExternalLogin } = useAuth();

  const [activeTab, setActiveTab] = useState<"signup" | "login">(initialTab);
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [roadmapSelection] = useState<RoadmapSelection | undefined>(() =>
    (location.state as LocationState | null)?.roadmapSelection || readPendingRoadmap()
  );

  // STEP 1: About You
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("Nigeria");
  const [ageRange, setAgeRange] = useState("20-25");
  const [education, setEducation] = useState("Bachelor's Degree");
  const [learningMethods, setLearningMethods] = useState<string[]>(["Hands-on projects"]);

  // STEP 2: Background
  const [objective, setObjective] = useState(roadmapSelection?.careerGoal || "Pivot into a tech career");
  const [experienceText, setExperienceText] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("beginner");

  // STEP 3: Learning Plan & Track
  const [availableTracks, setAvailableTracks] = useState<Track[]>([]);
  const [selectedTrack, setSelectedTrack] = useState("");
  const [commitment, setCommitment] = useState("fulltime");

  useEffect(() => {
    trackApi.getAll()
      .then((res) => {
        const tracks = Array.isArray(res.data?.tracks) ? (res.data?.tracks as Track[]) : [];
        setAvailableTracks(tracks);
        const selectedTrackId = (location.state as LocationState | null)?.selectedTrackId || roadmapSelection?.selectedCareerId;
        if (selectedTrackId) {
          setSelectedTrack(selectedTrackId);
        } else if (tracks.length > 0) {
          setSelectedTrack(tracks[0].id);
        }
      })
      .catch(() => {});
  }, [location.state, roadmapSelection?.selectedCareerId]);

  // STEP 4: Account Security
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeHonorCode, setAgreeHonorCode] = useState(true);

  // Status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const googleToken = params.get("google_token");
    const googleError = params.get("google_error");
    if (!googleToken && !googleError) return;

    navigate(location.pathname, { replace: true });
    if (googleError) {
      setErrorMsg(googleError);
      return;
    }

    completeExternalLogin(googleToken)
      .then((success) => {
        if (success) {
          setSuccessMsg("Welcome to Cohortia! Google sign-in was successful.");
          setTimeout(() => navigate("/dashboard"), 500);
        } else {
          setErrorMsg("Google sign-in could not be completed. Please try again.");
        }
      })
      .catch(() => {
        setErrorMsg("Google sign-in could not be completed. Please try again.");
      });
  }, [completeExternalLogin, location.pathname, location.search, navigate]);

  const toggleLearningMethod = (method: string) => {
    if (learningMethods.includes(method)) {
      setLearningMethods(learningMethods.filter(m => m !== method));
    } else {
      setLearningMethods([...learningMethods, method]);
    }
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (!name.trim() || !phone.trim() || !email.trim()) {
        setErrorMsg("Please fill in all required fields (Name, Phone, Email)");
        return;
      }
      setStep(2);
      setErrorMsg("");
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      setStep(4);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      setErrorMsg("");
    }
  };

  const handleSignupSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match!");
      return;
    }
    if (!agreeHonorCode) {
      setErrorMsg("You must agree to the academic honor codes and policies to proceed.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");
    setFieldErrors({});

    const roleMap: Record<string, 'career-starter' | 'level-up' | 'experience-track'> = {
      "Pivot into a new career": "career-starter",
      "Pivot into a tech career": "career-starter",
      "Up-skill in my current role": "level-up",
      "Lead & Specialize": "level-up",
      "Build side projects & start a company": "experience-track"
    };
    const selectedGoal = roadmapSelection?.careerGoal || objective;

    const weeklyHours = commitment === "fulltime"
      ? "35-40 hrs/week"
      : "12-15 hrs/week";

    const result = await signup({
      name: name.trim(),
      email: email.trim(),
      password,
      currentStatus: selectedGoal,
      role: roleMap[selectedGoal] || "career-starter",
      onboardingGoal: selectedGoal,
      experienceLevel,
      weeklyHours,
      desiredField: selectedTrack.trim(),
      careerGoal: selectedGoal,
      roadmapSelection: roadmapSelection ? JSON.stringify(roadmapSelection) : undefined,
    });

    setIsSubmitting(false);

    if (result.success) {
      sessionStorage.removeItem("cohortia_pending_roadmap");
      setSuccessMsg("Welcome to Cohortia! Account created successfully.");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } else {
      const details = result.details as Record<string, unknown> | undefined;
      const validationDetails = details
        ? Object.entries(details)
          .flatMap(([field, messages]) => (Array.isArray(messages) ? messages : [messages])
            .map((message) => `${field}: ${String(message)}`))
          .join(" ")
        : "";
      setErrorMsg([result.message || "Signup failed. Please try again.", validationDetails].filter(Boolean).join(" "));
      if (details) {
        setFieldErrors(Object.fromEntries(
          Object.entries(details).map(([field, messages]) => [
            field,
            (Array.isArray(messages) ? messages : [messages]).map(String),
          ])
        ));
      }
    }
  };

  const handleLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      setErrorMsg("Please enter your registered email address.");
      return;
    }
    setIsSubmitting(true);
    setErrorMsg("");

    const result = await login(email, password);
    setIsSubmitting(false);

    if (result.success) {
      setSuccessMsg("Welcome back! Session authorized successfully.");
      setTimeout(() => {
        const state = location.state as LocationState;
        const from = state?.from?.pathname || "/dashboard";
        navigate(from);
      }, 1200);
    } else {
      setErrorMsg(result.message || "Login failed. Please check your credentials.");
    }
  };

  const handleGoogleContinue = () => {
    const googleAuthUrl = String(import.meta.env.VITE_GOOGLE_AUTH_URL || "").trim();

    if (!googleAuthUrl) {
      setErrorMsg("Google sign-in is not configured yet. Please use your email and password for now.");
      return;
    }

    window.location.assign(googleAuthUrl);
  };

  const learningMethodOptions = [
    "Video lessons & demos",
    "Reading & documentation",
    "Hands-on projects",
    "Mentor calls & feedback",
    "Community & peer learning"
  ];

  const tracks = availableTracks.map((t) => ({
    id: t.id,
    label: t.title,
    desc: t.category || 'Computer Science',
  }));

  const getFieldError = (field: string) => fieldErrors[field]?.[0];

  return (
    <div className="pt-28 lg:pt-32 min-h-screen bg-immersive-bg flex items-center justify-center relative p-4 md:p-8">
      {/* Background Graphic Accents */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-immersive-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-immersive-secondary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Unified Split-Pane Card */}
      <div className="bg-immersive-card border border-immersive-border rounded-[32px] w-full max-w-5xl min-h-[640px] grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-2xl shadow-immersive-shadow relative text-left animate-in zoom-in-98 duration-300">
        
        {/* Left Testimonial & Brand Graphic Pane */}
        <div className="hidden lg:flex lg:col-span-5 relative flex-col justify-between p-10 overflow-hidden bg-gradient-to-br from-immersive-card to-immersive-bg border-r border-immersive-border">
          <div className="absolute inset-0 z-0 opacity-40">
            <img 
              src={
                activeTab === "signup"
                  ? "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&fit=crop&q=80"
                  : "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=600&fit=crop&q=80"
              }
              alt="Cohortia Community"
              className="w-full h-full object-cover grayscale brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-immersive-bg via-transparent to-immersive-card/80" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center space-x-2">
              <Logo size={36} />
              <div className="flex flex-col">
                <span className="font-sans font-extrabold text-xl tracking-tight text-immersive-text-primary">Cohortia</span>
                <span className="text-[8px] font-mono tracking-widest text-immersive-primary uppercase font-bold">CAREER PLATFORM</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 space-y-6">
            <div className="bg-immersive-bg/85 backdrop-blur-md border border-immersive-border p-5 rounded-2xl shadow-xl shadow-immersive-shadow">
              <p className="text-sm text-immersive-text-primary italic font-medium leading-relaxed">
                {activeTab === "signup" 
                  ? `"Cohortia helped me go from confused to hired in six months. The structured sprints feel exactly like my current job."`
                  : `"The real client briefs prepared me for standard corporate product cycles. No tutorial compares to this."`
                }
              </p>
              <div className="mt-3 flex items-center space-x-2.5">
                <div className="w-6 h-6 rounded-full bg-immersive-primary/30 flex items-center justify-center font-mono text-[9px] text-immersive-secondary font-bold">AS</div>
                <span className="text-[11px] font-bold text-immersive-text-primary">
                  {activeTab === "signup" ? "Aarav S., Frontend Engineer" : "Chloe M., Product Lead"}
                </span>
              </div>
            </div>

            <div className="flex justify-between text-[10px] font-mono text-immersive-text-secondary/70">
              <span>&copy; {new Date().getFullYear()} COHORTIA INC</span>
              <span>v2.8 APPROVED</span>
            </div>
          </div>
        </div>

        {/* Right Form Pane */}
        <div className="col-span-12 lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between overflow-y-auto">
          
          {/* Top Actions */}
          <div className="flex items-center justify-between pb-6 border-b border-immersive-border/40">
            <Link
              to="/"
              className="text-immersive-text-secondary hover:text-immersive-text-primary text-xs font-bold inline-flex items-center space-x-1 focus:outline-none cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back Home</span>
            </Link>

            <span className="text-xs font-mono text-immersive-text-secondary">
              {activeTab === "signup" ? "Create Account" : "Access Portal"}
            </span>
          </div>

          {/* Inline error banner */}
          {errorMsg && (
            <div className="mt-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold">
              {errorMsg}
            </div>
          )}

          {successMsg ? (
            <div className="py-16 text-center space-y-6 max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-immersive-text-primary tracking-tight">Authorization Verified</h3>
                <p className="text-sm text-immersive-text-secondary leading-relaxed">
                  {successMsg} Synchronizing your AI sandbox environment...
                </p>
              </div>
              <div className="w-full bg-immersive-bg h-2 rounded-full overflow-hidden p-0.5 border border-immersive-border max-w-xs mx-auto">
                <div className="h-full bg-emerald-500 rounded-full animate-pulse w-4/5" />
              </div>
            </div>
          ) : activeTab === "signup" ? (
            <>
            <div className="flex-1 py-6 flex flex-col justify-center">
              <form onSubmit={handleSignupSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-immersive-text-primary tracking-tight">
                    Create Your <span className="text-immersive-primary">Cohortia Account</span>
                  </h2>
                  <p className="text-sm text-immersive-text-secondary">
                    Choose your learning direction and start your workspace in one step.
                  </p>
                </div>

                <div className="space-y-4">
                  <button
                    type="button"
                    onClick={handleGoogleContinue}
                    className="w-full py-3.5 rounded-xl text-xs font-bold text-immersive-text-primary bg-immersive-bg border border-immersive-border hover:border-immersive-secondary hover:bg-immersive-card-hover transition-all flex items-center justify-center space-x-2 cursor-pointer"
                    aria-label="Continue with Google"
                  >
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white text-sm font-bold leading-none">G</span>
                    <span>Continue with Google</span>
                  </button>
                  <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-wider text-immersive-text-secondary/60">
                    <span className="h-px flex-1 bg-immersive-border" />
                    <span>Or use your email</span>
                    <span className="h-px flex-1 bg-immersive-border" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-mono text-immersive-secondary font-bold uppercase tracking-wider block">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-immersive-text-secondary/50" />
                      <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g., Jane Doe" className="w-full pl-10 pr-4 py-3 bg-immersive-bg border border-immersive-border focus:border-immersive-secondary rounded-xl text-xs text-immersive-text-primary placeholder:text-immersive-text-secondary/35 focus:outline-none focus:ring-1 focus:ring-immersive-primary" />
                    </div>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-mono text-immersive-secondary font-bold uppercase tracking-wider block">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-immersive-text-secondary/50" />
                      <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="e.g., jane@example.com" className="w-full pl-10 pr-4 py-3 bg-immersive-bg border border-immersive-border focus:border-immersive-secondary rounded-xl text-xs text-immersive-text-primary placeholder:text-immersive-text-secondary/35 focus:outline-none focus:ring-1 focus:ring-immersive-primary" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-mono text-immersive-secondary font-bold uppercase tracking-wider block">Password *</label>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-immersive-text-secondary/50" />
                      <input type={showPassword ? "text" : "password"} required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 8 characters" className="w-full pl-10 pr-10 py-3 bg-immersive-bg border border-immersive-border focus:border-immersive-secondary rounded-xl text-xs text-immersive-text-primary placeholder:text-immersive-text-secondary/35 focus:outline-none focus:ring-1 focus:ring-immersive-primary" />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-immersive-text-secondary/60 hover:text-immersive-text-primary cursor-pointer" aria-label={showPassword ? "Hide password" : "Show password"}>
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-mono text-immersive-secondary font-bold uppercase tracking-wider block">Confirm Password *</label>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-immersive-text-secondary/50" />
                      <input type={showPassword ? "text" : "password"} required minLength={8} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Repeat your password" className="w-full pl-10 pr-4 py-3 bg-immersive-bg border border-immersive-border focus:border-immersive-secondary rounded-xl text-xs text-immersive-text-primary placeholder:text-immersive-text-secondary/35 focus:outline-none focus:ring-1 focus:ring-immersive-primary" />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-mono text-immersive-secondary font-bold uppercase tracking-wider block">Learning Field *</label>
                  <select required value={selectedTrack} onChange={(e) => setSelectedTrack(e.target.value)} className="w-full bg-immersive-bg border border-immersive-border rounded-xl px-4 py-3 text-xs text-immersive-text-primary focus:outline-none focus:border-immersive-secondary cursor-pointer">
                    <option value="">Choose a course or learning track</option>
                    {tracks.map((track) => <option key={track.id} value={track.id}>{track.label}</option>)}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-mono text-immersive-secondary font-bold uppercase tracking-wider block">Experience Level *</label>
                    <select required value={experienceLevel} onChange={(e) => setExperienceLevel(e.target.value)} className="w-full bg-immersive-bg border border-immersive-border rounded-xl px-4 py-3 text-xs text-immersive-text-primary focus:outline-none focus:border-immersive-secondary cursor-pointer">
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-mono text-immersive-secondary font-bold uppercase tracking-wider block">Weekly Commitment *</label>
                    <select required value={commitment} onChange={(e) => setCommitment(e.target.value)} className="w-full bg-immersive-bg border border-immersive-border rounded-xl px-4 py-3 text-xs text-immersive-text-primary focus:outline-none focus:border-immersive-secondary cursor-pointer">
                      <option value="fulltime">35-40 hours/week</option>
                      <option value="parttime">12-15 hours/week</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-mono text-immersive-secondary font-bold uppercase tracking-wider block">Primary Goal *</label>
                  <div className="grid grid-cols-1 gap-2">
                    {(roadmapSelection
                      ? [roadmapSelection.careerGoal]
                      : ["Pivot into a tech career", "Up-skill in my current role", "Build side projects & start a company"]
                    ).map((option) => (
                      <button key={option} type="button" disabled={Boolean(roadmapSelection)} onClick={() => setObjective(option)} className={`rounded-xl border px-3 py-2.5 text-left text-xs font-bold transition-all ${roadmapSelection ? "cursor-default" : "cursor-pointer"} ${objective === option ? "border-immersive-secondary bg-immersive-primary/5 text-immersive-text-primary" : "border-immersive-border bg-immersive-bg/30 text-immersive-text-secondary hover:text-immersive-text-primary"}`}>
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <button type="submit" disabled={isSubmitting || !selectedTrack} className="w-full py-4 rounded-xl text-xs font-bold text-immersive-text-primary bg-[#FF4B3E] hover:brightness-110 shadow-lg shadow-immersive-shadow shadow-[#FF4B3E]/10 transition-all flex items-center justify-center space-x-1.5 cursor-pointer disabled:opacity-50">
                  <span>{isSubmitting ? "Creating Account..." : "Create My Account"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="mt-8 text-center text-xs text-immersive-text-secondary">
                <span>Already have an account? </span>
                <button type="button" onClick={() => { setActiveTab("login"); setSuccessMsg(""); setErrorMsg(""); }} className="text-immersive-secondary hover:underline font-bold focus:outline-none cursor-pointer">Log in</button>
              </div>
            </div>
            <div className="hidden">
              
              {/* Steps Indicator Dots */}
              <div className="flex items-center space-x-1.5 mb-6">
                {[1, 2, 3, 4].map((s) => (
                  <div 
                    key={s} 
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      s === step 
                        ? "w-8 bg-immersive-primary" 
                        : s < step 
                        ? "w-4 bg-immersive-primary/40" 
                        : "w-2 bg-immersive-border"
                    }`}
                  />
                ))}
              </div>

              <form onSubmit={handleSignupSubmit} className="space-y-6">
                
                {/* STEP 1: About You */}
                {step === 1 && (
                  <div className="space-y-5 animate-in fade-in duration-300">
                    <div className="space-y-1">
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-immersive-text-primary tracking-tight">
                        Create Your <span className="text-immersive-primary">Learning Plan</span>
                      </h2>
                      <p className="text-sm text-immersive-text-secondary">
                        Answer a few questions so Cohortia can build the perfect learning path for you.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5 text-left">
                        <label className="text-[10px] font-mono text-immersive-secondary font-bold uppercase tracking-wider block">
                          Full Name *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                            <User className="w-4 h-4 text-immersive-text-secondary/50" />
                          </div>
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g., Jane Doe"
                            className="w-full pl-10 pr-4 py-3 bg-immersive-bg border border-immersive-border focus:border-immersive-secondary rounded-xl text-xs text-immersive-text-primary placeholder:text-immersive-text-secondary/35 focus:outline-none focus:ring-1 focus:ring-immersive-primary"
                          />
                        </div>
                        {getFieldError('name') && <p className="text-[10px] text-rose-400">{getFieldError('name')}</p>}
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5 text-left">
                        <label className="text-[10px] font-mono text-immersive-secondary font-bold uppercase tracking-wider block">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                            <Phone className="w-4 h-4 text-immersive-text-secondary/50" />
                          </div>
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+234 800 000 0000"
                            className="w-full pl-10 pr-4 py-3 bg-immersive-bg border border-immersive-border focus:border-immersive-secondary rounded-xl text-xs text-immersive-text-primary placeholder:text-immersive-text-secondary/35 focus:outline-none focus:ring-1 focus:ring-immersive-primary"
                          />
                        </div>
                        {getFieldError('phone') && <p className="text-[10px] text-rose-400">{getFieldError('phone')}</p>}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-mono text-immersive-secondary font-bold uppercase tracking-wider block">
                        Email Address *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                          <Mail className="w-4 h-4 text-immersive-text-secondary/50" />
                        </div>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g., jane@example.com"
                          className="w-full pl-10 pr-4 py-3 bg-immersive-bg border border-immersive-border focus:border-immersive-secondary rounded-xl text-xs text-immersive-text-primary placeholder:text-immersive-text-secondary/35 focus:outline-none focus:ring-1 focus:ring-immersive-primary"
                        />
                      </div>
                      {getFieldError('email') && <p className="text-[10px] text-rose-400">{getFieldError('email')}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {/* Country */}
                      <div className="space-y-1.5 text-left">
                        <label className="text-[10px] font-mono text-immersive-secondary font-bold uppercase tracking-wider block">
                          Country *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Globe className="w-4 h-4 text-immersive-text-secondary/50" />
                          </div>
                          <select
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="w-full pl-9 pr-2 py-3 bg-immersive-bg border border-immersive-border focus:border-immersive-secondary rounded-xl text-xs text-immersive-text-primary focus:outline-none cursor-pointer"
                          >
                            <option value="Nigeria">Nigeria</option>
                            <option value="United States">United States</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Canada">Canada</option>
                          </select>
                        </div>
                      </div>

                      {/* Age range */}
                      <div className="space-y-1.5 text-left">
                        <label className="text-[10px] font-mono text-immersive-secondary font-bold uppercase tracking-wider block">
                          Age Range *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Calendar className="w-4 h-4 text-immersive-text-secondary/50" />
                          </div>
                          <select
                            value={ageRange}
                            onChange={(e) => setAgeRange(e.target.value)}
                            className="w-full pl-9 pr-2 py-3 bg-immersive-bg border border-immersive-border focus:border-immersive-secondary rounded-xl text-xs text-immersive-text-primary focus:outline-none cursor-pointer"
                          >
                            <option value="Under 20">Under 20</option>
                            <option value="20-25">20-25</option>
                            <option value="26-30">26-30</option>
                            <option value="Over 30">Over 30</option>
                          </select>
                        </div>
                      </div>

                      {/* Highest education */}
                      <div className="space-y-1.5 text-left">
                        <label className="text-[10px] font-mono text-immersive-secondary font-bold uppercase tracking-wider block">
                          Highest Education *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <GraduationCap className="w-4 h-4 text-immersive-text-secondary/50" />
                          </div>
                          <select
                            value={education}
                            onChange={(e) => setEducation(e.target.value)}
                            className="w-full pl-9 pr-2 py-3 bg-immersive-bg border border-immersive-border focus:border-immersive-secondary rounded-xl text-xs text-immersive-text-primary focus:outline-none cursor-pointer"
                          >
                            <option value="High School">High School</option>
                            <option value="Bachelor's Degree">Bachelor's Degree</option>
                            <option value="Master's or Higher">Master's or Higher</option>
                            <option value="Self-taught">Self-taught</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* How do you learn best? */}
                    <div className="space-y-2 text-left">
                      <label className="text-[10px] font-mono text-immersive-secondary font-bold uppercase tracking-wider block">
                        How do you learn best? *
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {learningMethodOptions.map((option) => {
                          const isSelected = learningMethods.includes(option);
                          return (
                            <button
                              key={option}
                              type="button"
                              onClick={() => toggleLearningMethod(option)}
                              className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                                isSelected 
                                  ? "bg-immersive-primary/10 border-immersive-secondary text-immersive-secondary shadow-md shadow-immersive-shadow"
                                  : "bg-immersive-bg border-immersive-border text-immersive-text-secondary hover:text-immersive-text-primary"
                              }`}
                            >
                              {option}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="w-full py-4 rounded-xl text-xs font-bold text-immersive-text-primary bg-immersive-primary hover:brightness-110 shadow-lg shadow-immersive-shadow shadow-immersive-primary/20 transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                    >
                      <span>Continue to Background</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* STEP 2: Background Goals */}
                {step === 2 && (
                  <div className="space-y-5 animate-in fade-in duration-300">
                    <div className="space-y-1">
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-immersive-text-primary tracking-tight">
                        Professional <span className="text-immersive-primary">Objective</span>
                      </h2>
                      <p className="text-sm text-immersive-text-secondary">
                        Help us align your Experiential sprints with your end career target.
                      </p>
                    </div>

                    <div className="space-y-3.5 text-left">
                      <label className="text-[10px] font-mono text-immersive-secondary font-bold uppercase tracking-wider block animate-pulse">
                        What is your primary professional objective? *
                      </label>
                      
                      <div className="grid grid-cols-1 gap-3">
                        {(roadmapSelection
                          ? [{ id: roadmapSelection.careerGoal, label: roadmapSelection.careerGoal, desc: "Selected in your roadmap." }]
                          : [
                            { id: "Pivot into a tech career", label: "Pivot into a tech career", desc: "Acquire industrial experience to transition completely." },
                            { id: "Up-skill in my current role", label: "Up-skill in my current role", desc: "Gain professional production habits and master React/Vite." },
                            { id: "Build side projects & start a company", label: "Build side projects", desc: "Turn concepts into high-contrast interactive prototypes." }
                          ]
                        ).map((obj) => (
                          <div 
                            key={obj.id}
                            onClick={roadmapSelection ? undefined : () => setObjective(obj.id)}
                            className={`p-4 rounded-2xl border ${roadmapSelection ? "cursor-default" : "cursor-pointer"} transition-all flex items-start space-x-3.5 ${
                              objective === obj.id 
                                ? "bg-immersive-primary/5 border-immersive-secondary shadow-md shadow-immersive-shadow"
                                : "bg-immersive-bg/40 border-immersive-border hover:border-immersive-border-hover"
                            }`}
                          >
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center mt-0.5 flex-shrink-0 ${
                              objective === obj.id ? "border-immersive-secondary bg-immersive-secondary text-immersive-bg" : "border-immersive-text-secondary/40"
                            }`}>
                              {objective === obj.id && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                            <div>
                              <div className="text-xs font-bold text-immersive-text-primary">{obj.label}</div>
                              <div className="text-[11px] text-immersive-text-secondary mt-0.5">{obj.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Background Textarea */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-mono text-immersive-secondary font-bold uppercase tracking-wider block">
                        Describe your previous experience with code or design (optional)
                      </label>
                      <textarea
                        rows={3}
                        value={experienceText}
                        onChange={(e) => setExperienceText(e.target.value)}
                        placeholder="e.g. Completed a few HTML courses, coded small static portfolios..."
                        className="w-full px-4 py-3 bg-immersive-bg border border-immersive-border focus:border-immersive-secondary rounded-xl text-xs text-immersive-text-primary placeholder:text-immersive-text-secondary/30 focus:outline-none focus:ring-1 focus:ring-immersive-primary resize-none"
                      />
                    </div>

                    <div className="flex space-x-3 pt-2">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="flex-1 py-4 rounded-xl text-xs font-bold text-immersive-text-secondary bg-immersive-bg border border-immersive-border hover:text-immersive-text-primary transition-all cursor-pointer text-center"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="flex-1 py-4 rounded-xl text-xs font-bold text-immersive-text-primary bg-immersive-primary hover:brightness-110 shadow-lg shadow-immersive-shadow shadow-immersive-primary/20 transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                      >
                        <span>Continue</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: Tracks & Interest */}
                {step === 3 && (
                  <div className="space-y-5 animate-in fade-in duration-300">
                    <div className="space-y-1">
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-immersive-text-primary tracking-tight">
                        Select Your <span className="text-immersive-primary">Track</span>
                      </h2>
                      <p className="text-sm text-immersive-text-secondary">
                        Pick the focus path that matches your professional aspiration.
                      </p>
                    </div>

                    <div className="space-y-3 text-left">
                      <label className="text-[10px] font-mono text-immersive-secondary font-bold uppercase tracking-wider block">
                        Choose your curriculum
                      </label>
                      <select 
                        className="w-full bg-immersive-bg border border-immersive-border rounded-xl px-4 py-3.5 text-sm text-immersive-text-primary focus:outline-none focus:border-immersive-secondary transition-all cursor-pointer"
                        value={selectedTrack}
                        onChange={(e) => setSelectedTrack(e.target.value)}
                      >
                        {tracks.length === 0 && <option value="">Loading courses...</option>}
                        {Array.from(new Set(tracks.map((t) => t.desc.split(' — ')[0] || 'Courses'))).map((category) => (
                          <optgroup key={category} label={category}>
                            {tracks
                              .filter((t) => (t.desc.split(' — ')[0] || 'Courses') === category)
                              .slice(0, 25)
                              .map((t) => (
                                <option key={t.id} value={t.id}>{t.label}</option>
                              ))}
                          </optgroup>
                        ))}
                        <option value="custom">Other (Custom Course)</option>
                      </select>
                      
                      {selectedTrack === "custom" && (
                        <input
                          type="text"
                          placeholder="What course would you like to take?"
                          className="w-full bg-immersive-bg border border-immersive-border rounded-xl px-4 py-3.5 text-sm text-immersive-text-primary focus:outline-none focus:border-immersive-secondary transition-all mt-2"
                        />
                      )}
                    </div>

                    {/* Commitment Velocity Toggle */}
                    <div className="space-y-2 text-left">
                      <label className="text-[10px] font-mono text-immersive-secondary font-bold uppercase tracking-wider block">
                        Select commitment load
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setCommitment("fulltime")}
                          className={`p-3.5 border rounded-xl text-left text-xs font-bold transition-all cursor-pointer ${
                            commitment === "fulltime"
                              ? "border-immersive-secondary bg-immersive-primary/5 text-immersive-text-primary shadow-md shadow-immersive-shadow"
                              : "border-immersive-border bg-immersive-bg/30 text-immersive-text-secondary hover:text-immersive-text-primary"
                          }`}
                        >
                          <div>8-Week Immersive</div>
                          <div className="text-[10px] text-immersive-text-secondary/70 font-mono mt-0.5">35-40 hrs/wk, fast lane</div>
                        </button>

                        <button
                          type="button"
                          onClick={() => setCommitment("parttime")}
                          className={`p-3.5 border rounded-xl text-left text-xs font-bold transition-all cursor-pointer ${
                            commitment === "parttime"
                              ? "border-immersive-secondary bg-immersive-primary/5 text-immersive-text-primary shadow-md shadow-immersive-shadow"
                              : "border-immersive-border bg-immersive-bg/30 text-immersive-text-secondary hover:text-immersive-text-primary"
                          }`}
                        >
                          <div>16-Week Flex</div>
                          <div className="text-[10px] text-immersive-text-secondary/70 font-mono mt-0.5">12-15 hrs/wk, flexible load</div>
                        </button>
                      </div>
                    </div>

                    <div className="flex space-x-3 pt-2">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="flex-1 py-4 rounded-xl text-xs font-bold text-immersive-text-secondary bg-immersive-bg border border-immersive-border hover:text-immersive-text-primary transition-all cursor-pointer text-center"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="flex-1 py-4 rounded-xl text-xs font-bold text-immersive-text-primary bg-immersive-primary hover:brightness-110 shadow-lg shadow-immersive-shadow shadow-immersive-primary/20 transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                      >
                        <span>Continue</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 4: Skills & Account security */}
                {step === 4 && (
                  <div className="space-y-5 animate-in fade-in duration-300">
                    <div className="space-y-1">
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-immersive-text-primary tracking-tight">
                        Secure Your <span className="text-immersive-primary">Portal</span>
                      </h2>
                      <p className="text-sm text-immersive-text-secondary">
                        Establish academic credentials to finalize your workspace allocation.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Password */}
                      <div className="space-y-1.5 text-left">
                        <label className="text-[10px] font-mono text-immersive-secondary font-bold uppercase tracking-wider block">
                          Create Account Password *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                            <Lock className="w-4 h-4 text-immersive-text-secondary/50" />
                          </div>
                          <input
                            type={showPassword ? "text" : "password"}
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••••••"
                            className="w-full pl-10 pr-10 py-3.5 bg-immersive-bg border border-immersive-border focus:border-immersive-secondary rounded-xl text-xs text-immersive-text-primary placeholder:text-immersive-text-secondary/40 focus:outline-none focus:ring-1 focus:ring-immersive-primary"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-immersive-text-secondary/60 hover:text-immersive-text-primary cursor-pointer"
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                        {getFieldError('password') && <p className="text-[10px] text-rose-400">{getFieldError('password')}</p>}
                      </div>

                      {/* Confirm Password */}
                      <div className="space-y-1.5 text-left">
                        <label className="text-[10px] font-mono text-immersive-secondary font-bold uppercase tracking-wider block">
                          Confirm Password *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                            <Lock className="w-4 h-4 text-immersive-text-secondary/50" />
                          </div>
                          <input
                            type={showPassword ? "text" : "password"}
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="••••••••••••"
                            className="w-full pl-10 pr-4 py-3.5 bg-immersive-bg border border-immersive-border focus:border-immersive-secondary rounded-xl text-xs text-immersive-text-primary placeholder:text-immersive-text-secondary/40 focus:outline-none focus:ring-1 focus:ring-immersive-primary"
                          />
                        </div>
                      </div>

                      {/* Honor Code Checklist */}
                      <div className="flex items-start space-x-2.5 pt-2 text-left">
                        <input
                          type="checkbox"
                          id="agree-codes"
                          checked={agreeHonorCode}
                          onChange={(e) => setAgreeHonorCode(e.target.checked)}
                          className="w-4.5 h-4.5 rounded text-immersive-primary focus:ring-immersive-primary bg-immersive-bg border-immersive-border cursor-pointer mt-0.5"
                        />
                        <label htmlFor="agree-codes" className="text-[11px] text-immersive-text-secondary font-medium leading-relaxed select-none cursor-pointer">
                          I agree to Cohortia academic guidelines, workspace honor code policies and standard refund schemes.
                        </label>
                      </div>
                    </div>

                    <div className="flex space-x-3 pt-2">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="flex-1 py-4 rounded-xl text-xs font-bold text-immersive-text-secondary bg-immersive-bg border border-immersive-border hover:text-immersive-text-primary transition-all cursor-pointer text-center"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting || !agreeHonorCode}
                        className="flex-1 py-4 rounded-xl text-xs font-bold text-immersive-text-primary bg-[#FF4B3E] hover:brightness-110 shadow-lg shadow-immersive-shadow shadow-[#FF4B3E]/10 transition-all flex items-center justify-center space-x-1.5 cursor-pointer disabled:opacity-50"
                      >
                        <span>{isSubmitting ? "Creating Account..." : "Create My Account"}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

              </form>

              {/* Already have account */}
              <div className="mt-8 text-center text-xs text-immersive-text-secondary">
                <span>Already have an account? </span>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("login");
                    setSuccessMsg("");
                    setErrorMsg("");
                  }}
                  className="text-immersive-secondary hover:underline font-bold focus:outline-none cursor-pointer"
                >
                  Log in
                </button>
              </div>

            </div>
            </>
          ) : (
            /* LOGIN TAB */
            <div className="flex-1 py-10 flex flex-col justify-center max-w-md mx-auto w-full">
              
              <div className="space-y-1 mb-8">
                <h2 className="text-3xl font-extrabold text-immersive-text-primary tracking-tight">
                  Welcome <span className="text-immersive-primary">Back</span>
                </h2>
                <p className="text-sm text-immersive-text-secondary">
                  Log in to access your active Experiential Lab and simulator.
                </p>
              </div>

              <form onSubmit={handleLoginSubmit} className="space-y-5">
                <div className="space-y-4">
                  <button
                    type="button"
                    onClick={handleGoogleContinue}
                    className="w-full py-3.5 rounded-xl text-xs font-bold text-immersive-text-primary bg-immersive-bg border border-immersive-border hover:border-immersive-secondary hover:bg-immersive-card-hover transition-all flex items-center justify-center space-x-2 cursor-pointer"
                    aria-label="Continue with Google"
                  >
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white text-sm font-bold leading-none">G</span>
                    <span>Continue with Google</span>
                  </button>
                  <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-wider text-immersive-text-secondary/60">
                    <span className="h-px flex-1 bg-immersive-border" />
                    <span>Or use your email</span>
                    <span className="h-px flex-1 bg-immersive-border" />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-mono text-immersive-secondary font-bold uppercase tracking-wider block">
                    Academic Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Mail className="w-4 h-4 text-immersive-text-secondary/50" />
                    </div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. yourname@example.com"
                      className="w-full pl-10 pr-4 py-3.5 bg-immersive-bg border border-immersive-border focus:border-immersive-secondary rounded-xl text-xs text-immersive-text-primary placeholder:text-immersive-text-secondary/40 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-mono text-immersive-secondary font-bold uppercase tracking-wider block">
                    Secure Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Lock className="w-4 h-4 text-immersive-text-secondary/50" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full pl-10 pr-10 py-3.5 bg-immersive-bg border border-immersive-border focus:border-immersive-secondary rounded-xl text-xs text-immersive-text-primary placeholder:text-immersive-text-secondary/40 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-immersive-text-secondary/60 hover:text-immersive-text-primary cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs text-immersive-text-secondary font-medium">
                  <div className="flex items-center space-x-2 text-left">
                    <input
                      type="checkbox"
                      id="remember-me"
                      defaultChecked
                      className="w-4 h-4 rounded text-immersive-primary focus:ring-immersive-primary bg-immersive-bg border-immersive-border cursor-pointer"
                    />
                    <label htmlFor="remember-me" className="select-none cursor-pointer leading-tight">Remember me</label>
                  </div>
                  <button type="button" className="text-immersive-secondary hover:underline cursor-pointer">Forgot password?</button>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl text-xs font-bold text-immersive-text-primary bg-[#FF4B3E] hover:brightness-110 shadow-lg shadow-immersive-shadow shadow-[#FF4B3E]/15 transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <span>{isSubmitting ? "Authorizing Security..." : "Log In & Access Lab"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* No account */}
              <div className="mt-8 text-center text-xs text-immersive-text-secondary">
                <span>Don't have an academic account? </span>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("signup");
                    setStep(1);
                    setSuccessMsg("");
                    setErrorMsg("");
                  }}
                  className="text-immersive-secondary hover:underline font-bold focus:outline-none cursor-pointer"
                >
                  Sign up
                </button>
              </div>

            </div>
          )}

          {/* Footer Branding */}
          <div className="pt-6 border-t border-immersive-border/20 text-center flex justify-between items-center text-[10px] text-immersive-text-secondary/50 font-mono">
            <span>SECURE 256-BIT SSL GATEWAY</span>
            <span>COHORTIA EXPERIENTIAL SYSTEMS</span>
          </div>

        </div>

      </div>
    </div>
  );
}
