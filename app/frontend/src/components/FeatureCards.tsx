import React, { useState, useEffect, useRef } from "react";
import { UsersRound, Sparkles, Briefcase, CheckCircle, ArrowRight, Loader2, Send } from "lucide-react";
import { UserPreferences, AdvisorMessage } from "../types";
import { chatApi } from "../services/api";

interface FeatureCardsProps {
  userProfile: UserPreferences | null;
  onOpenWizard: () => void;
}

interface ChatMsg {
  id: string;
  sender: string;
  avatar: string;
  text: string;
  time: string;
}

const INITIAL_COMMUNITY_CHATS: ChatMsg[] = [
  { id: "c1", sender: "Remi (UX Cohort)", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&fit=crop&q=80", text: "Does anyone have feedback on my onboarding Wireframe design?", time: "10:41 AM" },
  { id: "c2", sender: "Kelechi (Eng Cohort)", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&fit=crop&q=80", text: "Just posted a link to my Figma feedback, Remi! Looks super clean.", time: "10:43 AM" }
];

const EXTRA_COMMUNITY_CHATS = [
  { sender: "Chioma (Product Lead)", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop&q=80", text: "CarbonHQ approved the telemetry sprint! Incredible job team!" },
  { sender: "Kelechi (Eng Cohort)", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&fit=crop&q=80", text: "Nice! Resolving that bug booster really paid off." },
  { sender: "Babajide (Data Analyst)", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&fit=crop&q=80", text: "Ready to run the user session analytics dashboards tonight!" }
];

export default function FeatureCards({ userProfile, onOpenWizard }: FeatureCardsProps) {
  // Community Card Chat Simulator
  const [chats, setChats] = useState<ChatMsg[]>(INITIAL_COMMUNITY_CHATS);

  // Mentorship Chat Widget States
  const [messages, setMessages] = useState<AdvisorMessage[]>([
    { sender: "advisor", text: "Hello! I am Coach Johnson, your Career Guide. Ask me anything about choosing a track, structuring your client project portfolio, or finding engineering opportunities!", timestamp: "10:45 AM" }
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  // Internship simulation states
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Scroll to bottom of chat only after initial mount
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Community Chat feed updates
  useEffect(() => {
    const chatFeedTimer = setInterval(() => {
      const randomMsg = EXTRA_COMMUNITY_CHATS[Math.floor(Math.random() * EXTRA_COMMUNITY_CHATS.length)];
      const newChat: ChatMsg = {
        id: Date.now().toString(),
        sender: randomMsg.sender,
        avatar: randomMsg.avatar,
        text: randomMsg.text,
        time: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })
      };
      setChats(prev => [...prev.slice(1), newChat]);
    }, 12000);

    return () => clearInterval(chatFeedTimer);
  }, []);

  // Handle Mentorship Advisor chat submit (Uses real server endpoint!)
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userMsg: AdvisorMessage = {
      sender: "user",
      text: inputVal,
      timestamp: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputVal("");
    setIsTyping(true);

    try {
      const history = [...messages, userMsg].map(m => ({
        sender: m.sender,
        text: m.text
      }));

      const response = await chatApi.sendMessage(
        userMsg.text,
        history,
        "coach",
        "text",
        userProfile?.track || null
      );

      if (response.success && response.data?.reply) {
        setMessages(prev => [...prev, {
          sender: "advisor",
          text: response.data!.reply,
          timestamp: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })
        }]);
      } else {
        throw new Error(response.error || "Failed to communicate with advisor");
      }
    } catch (err: any) {
      console.error(err);
      // Fallback friendly message if backend is not yet compiled or active
      setMessages(prev => [...prev, {
        sender: "advisor",
        text: "I am online but running on standalone logic! Our matching lanes are currently processing. Tell me what skills you are aiming to acquire next!",
        timestamp: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleUploadClick = () => {
    setSubmitting(true);
    setSubmitted(false);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <section id="feature-exploration" className="py-12 bg-immersive-bg relative">
      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6">
        
        {/* Header Title Matching Reference Image */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold text-[#FF4B3E] bg-[#FF4B3E]/10 border border-[#FF4B3E]/20 px-3 py-1 rounded-full uppercase tracking-widest inline-flex items-center space-x-1.5">
            <span>Find Your Direction</span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-sans font-extrabold text-immersive-text-primary tracking-tight">
            Explore Careers
          </h2>
          <p className="text-lg text-immersive-text-secondary leading-relaxed">
            In-demand paths with clear roadmaps, real projects, and mentor support.
          </p>
        </div>

        {/* Feature Grid matching Reference Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Community (Dark Blue card) */}
          <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-immersive-secondary/45 transition-all shadow-[0_0_20px_var(--immersive-shadow)] relative overflow-hidden group">
            <div className="space-y-6 text-left">
              <div className="w-12 h-12 bg-immersive-primary/10 border border-immersive-border text-immersive-secondary rounded-2xl flex items-center justify-center">
                <UsersRound className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-immersive-text-primary tracking-tight">Community</h3>
                <h4 className="text-sm font-semibold text-immersive-secondary mt-1">You are not learning alone.</h4>
              </div>
              <p className="text-sm text-immersive-text-secondary leading-relaxed">
                Join a space built for momentum. Ask questions, share wins, join topic groups that match your goal, and stay accountable with people who understand the journey.
              </p>

              {/* Live Chat simulator panel */}
              <div className="bg-immersive-bg border border-immersive-border rounded-2xl p-4.5 space-y-3 font-sans text-left relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-immersive-border/40 pb-2">
                  <span className="text-[10px] font-mono text-immersive-secondary font-extrabold uppercase tracking-widest flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 bg-immersive-secondary rounded-full animate-ping" />
                    <span>#COHORT-CHANNEL-LOBBY</span>
                  </span>
                  <span className="text-[9px] font-mono text-immersive-text-secondary/70">Live feed</span>
                </div>

                <div className="space-y-3 min-h-[110px] flex flex-col justify-end">
                  {chats.map((c) => (
                    <div key={c.id} className="flex items-start space-x-2.5 text-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <img src={c.avatar} alt="User" className="w-6 h-6 rounded-full object-cover flex-shrink-0" />
                      <div>
                        <div className="flex items-center space-x-1.5">
                          <span className="font-bold text-immersive-text-primary">{c.sender}</span>
                          <span className="text-[9px] font-mono text-immersive-text-secondary/70">{c.time}</span>
                        </div>
                        <p className="text-immersive-text-secondary mt-0.5">{c.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={onOpenWizard}
                className="text-xs font-bold text-immersive-text-primary hover:text-immersive-secondary flex items-center space-x-1.5 transition-colors group-hover:translate-x-1 duration-300 cursor-pointer"
              >
                <span>Get started</span>
                <ArrowRight className="w-3.5 h-3.5 text-immersive-secondary" />
              </button>
            </div>
          </div>

          {/* Card 2: Cohortia Mentorship (Rose red card) */}
          <div id="advisor-chat" className="bg-gradient-to-b from-immersive-primary/20 via-immersive-accent/10 to-immersive-card border border-immersive-border rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:scale-[1.01] transition-all duration-300 shadow-[0_0_35px_var(--immersive-shadow)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-immersive-secondary/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6 text-left flex flex-col h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-immersive-secondary/10 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-immersive-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold tracking-tight text-immersive-text-primary">Cohortia Mentorship</h3>
                  <h4 className="text-sm font-semibold text-immersive-secondary mt-1">A guide in your corner.</h4>
                </div>
                <p className="text-sm text-immersive-text-secondary leading-relaxed">
                  Stuck on a concept? Need direction? Speak with Coach Johnson, our Gemini-powered counselor. Ask real career questions right here.
                </p>
              </div>

              {/* Chat Interface embedded directly into the centerpiece feature card */}
              <div className="bg-immersive-bg border border-immersive-border rounded-2xl p-4 flex flex-col flex-grow min-h-[220px] max-h-[300px] shadow-inner mt-4 overflow-hidden relative">
                <div className="flex items-center space-x-2 border-b border-immersive-border pb-2 mb-2">
                  <div className="w-2 h-2 bg-immersive-secondary rounded-full" />
                  <span className="text-[10px] font-mono font-bold uppercase text-immersive-text-secondary">Coach Johnson (Gemini 3.5)</span>
                </div>

                {/* Messages Panel */}
                <div className="flex-1 overflow-y-auto space-y-3 pr-1 text-xs">
                  {messages.map((m, i) => (
                    <div
                      key={i}
                      className={`max-w-[85%] rounded-2xl p-3 leading-relaxed text-left ${
                        m.sender === "user"
                          ? "bg-immersive-primary text-immersive-text-primary ml-auto border border-immersive-primary/20 shadow-md shadow-immersive-shadow"
                          : "bg-immersive-card text-immersive-text-primary border border-immersive-border shadow-sm"
                      }`}
                    >
                      <p className="whitespace-pre-line">{m.text}</p>
                      <span className={`text-[8px] block mt-1 font-mono ${m.sender === "user" ? "text-slate-300 text-right" : "text-immersive-text-secondary/70"}`}>
                        {m.timestamp}
                      </span>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="bg-immersive-card rounded-2xl p-3 mr-auto max-w-[80%] flex items-center space-x-2 border border-immersive-border shadow-sm">
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-immersive-secondary" />
                      <span className="text-[10px] text-immersive-text-secondary font-mono">Analyzing track options...</span>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Form Input */}
                <form onSubmit={handleSendMessage} className="mt-2.5 flex items-center space-x-2 bg-immersive-card border border-immersive-border rounded-xl p-1.5 shadow-md shadow-immersive-shadow">
                  <input
                    type="text"
                    placeholder="Ask about skills, tracks, portfolios..."
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    className="flex-1 bg-transparent border-none text-immersive-text-primary text-xs outline-none px-2.5 py-1.5 placeholder-immersive-text-secondary/50"
                  />
                  <button
                    type="submit"
                    className="bg-immersive-secondary hover:brightness-110 text-immersive-bg p-1.5 rounded-lg transition cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Card 3: Internship Experience (Dark Blue card) */}
          <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-immersive-secondary/45 transition-all shadow-[0_0_20px_var(--immersive-shadow)] relative overflow-hidden group">
            <div className="space-y-6 text-left">
              <div className="w-12 h-12 bg-immersive-primary/10 border border-immersive-border text-immersive-secondary rounded-2xl flex items-center justify-center">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-immersive-text-primary tracking-tight">Internship Experience</h3>
                <h4 className="text-sm font-semibold text-immersive-secondary mt-1">Real work. Real proof.</h4>
              </div>
              <p className="text-sm text-immersive-text-secondary leading-relaxed">
                Work on structured briefs that mirror real workplace projects. Meet deadlines, submit deliverables, get peer/mentor reviews, and turn completed work into portfolio-ready case studies.
              </p>

              {/* Mini Submission sandbox */}
              <div className="bg-immersive-bg border border-immersive-border rounded-2xl p-4.5 space-y-3 font-sans text-left relative overflow-hidden">
                <div className="flex justify-between items-center border-b border-immersive-border pb-2">
                  <span className="text-[10px] font-mono text-immersive-secondary font-extrabold uppercase">PROJECT DELIVERABLE SUBMISSION</span>
                  <span className="text-[9px] font-mono text-immersive-text-secondary/70">Brief #1</span>
                </div>

                <div className="bg-immersive-card border border-immersive-border rounded-xl p-3 flex flex-col justify-center items-center text-center space-y-2.5">
                  {submitting ? (
                    <div className="py-4 space-y-1.5">
                      <Loader2 className="w-7 h-7 text-immersive-secondary animate-spin mx-auto" />
                      <span className="text-[10px] font-mono text-immersive-text-secondary block">Deploying to staging...</span>
                    </div>
                  ) : submitted ? (
                    <div className="py-2 space-y-1.5 animate-in zoom-in-95 duration-300">
                      <div className="w-8 h-8 rounded-full bg-immersive-secondary/20 text-immersive-secondary border border-immersive-secondary/35 flex items-center justify-center mx-auto">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-immersive-text-primary block">Deliverable Approved (9.8/10)</span>
                      <span className="text-[9px] font-mono text-immersive-text-secondary/80 font-bold">Portfolio entry unlocked.</span>
                    </div>
                  ) : (
                    <div className="py-1 space-y-2">
                      <p className="text-[11px] text-immersive-text-secondary font-medium">CarbonHQ Grid Telemetry Layout</p>
                      <button
                        onClick={handleUploadClick}
                        className="px-3.5 py-2 rounded-lg bg-immersive-primary hover:brightness-110 text-immersive-text-primary font-bold text-xs shadow-[0_0_15px_rgba(62,0,255,0.25)] transition cursor-pointer"
                      >
                        File Mock Submission
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={onOpenWizard}
                className="text-xs font-bold text-immersive-text-primary hover:text-immersive-secondary flex items-center space-x-1.5 transition-colors group-hover:translate-x-1 duration-300 cursor-pointer"
              >
                <span>Get started</span>
                <ArrowRight className="w-3.5 h-3.5 text-immersive-secondary" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
