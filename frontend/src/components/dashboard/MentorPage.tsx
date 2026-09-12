import { useState, useRef, useEffect } from "react";
import { MessageSquare, Sparkles, Send, Paperclip, Check, ArrowRight, User, Compass, HelpCircle, BookOpen, Mic } from "lucide-react";
import { UserPreferences } from "../../types";
import { chatApi } from "../../services/api";

interface Message {
  sender: "user" | "advisor";
  text: string;
  timestamp: string;
}

interface MentorContext {
  conversationSummary?: string;
  pendingAction?: string;
  goals?: string[];
}

interface CheckIn {
  id?: string;
  createdAt?: string;
  notes?: string;
  mood?: string;
}

interface MentorPageProps {
  userProfile: UserPreferences;
  mentorContext?: MentorContext;
  onUpdateContext?: (update: MentorContext) => void | Promise<void>;
  checkIns?: CheckIn[];
}

interface ActiveLearningContext {
  courseId?: string;
  courseTitle?: string;
  module?: number;
  chapter?: number;
  chapterTitle?: string;
}

interface SpeechRecognitionResultLike {
  isFinal: boolean;
  0: { transcript: string };
}

interface SpeechRecognitionEventLike extends Event {
  results: ArrayLike<SpeechRecognitionResultLike>;
}

interface SpeechRecognitionLike {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
}

type SpeechRecognitionConstructor = new () => SpeechRecognitionLike;

export default function MentorPage({ userProfile, mentorContext, onUpdateContext, checkIns }: MentorPageProps) {
  const [activeLearningContext] = useState<ActiveLearningContext | null>(() => {
    if (typeof window === "undefined") return null;
    try {
      return JSON.parse(
        localStorage.getItem("cohortia_active_learning_context") ||
        localStorage.getItem("cohortia_active_learning_board_chapter") ||
        "null",
      );
    } catch {
      return null;
    }
  });
  const displayedCourse = activeLearningContext?.courseTitle ||
    (userProfile.track === "frontend" ? "Frontend Engineering" :
      userProfile.track === "design" ? "UI/UX Product Design" :
        userProfile.track === "product" ? "Product Management" :
          userProfile.track === "analytics" ? "Data Analytics" : userProfile.track);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "advisor",
      text: `Hi ${userProfile.name}! 👋 I'm your personalized CohortiaMentor. Your current learning course is **${displayedCourse}**, and you're working at a **${userProfile.experience}** level.${activeLearningContext?.chapterTitle ? `\n\nCurrent chapter: **${activeLearningContext.chapterTitle}**.` : ""}\n\nI’ll use this course context when helping you. Tell me what you want to understand or where you are stuck.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [behavior, setBehavior] = useState<"Mentor" | "Coach" | "Tutor" | "Interviewer">("Mentor");
  const [format, setFormat] = useState<"Text" | "Slides" | "Document" | "Voice" | "Video">("Text");
  const [isListening, setIsListening] = useState(false);
  const [voiceError, setVoiceError] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);

  const formatLabels = {
    Text: "Standard Conversational Text",
    Slides: "Formatted Presentation Slides",
    Document: "Structured Technical Report",
    Voice: "Spoken Response Transcript",
    Video: "Screencast Script Outline"
  };

  const behaviors = [
    { id: "Mentor", label: "Mentor", desc: "Guide, support, and challenge you to grow." },
    { id: "Coach", label: "Coach", desc: "Push you to take action and stay accountable." },
    { id: "Tutor", label: "Tutor", desc: "Explain concepts step-by-step with examples." },
    { id: "Interviewer", label: "Interviewer", desc: "Ask questions and help you think critically." }
  ];

  const quickActions = [
    "Explain the core concept simply",
    "Request Code Review & Project Audit",
    "Give me a coding challenge",
    "Help with a project design"
  ];

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [messages, isTyping]);

  useEffect(() => {
    return () => {
      recognitionRef.current?.stop();
      window.speechSynthesis?.cancel();
    };
  }, []);

  const speakReply = (text: string) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text.replace(/[*_#`]/g, ""));
    utterance.rate = 1.02;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };

  const handleSendMessage = async (textToSend: string, speakResponse = false) => {
    if (!textToSend.trim()) return;

    const userMsg: Message = {
      sender: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");
    setIsTyping(true);

    try {
      const history = [...messages, userMsg].map(m => ({
        sender: m.sender,
        text: m.text
      }));

      const mode = behavior === 'Interviewer' ? 'interview' : behavior.toLowerCase();
      const response = await chatApi.sendMessage(
        userMsg.text,
        history,
        mode,
        format.toLowerCase(),
        userProfile.track,
        {
          page: "mentor page",
          courseId: activeLearningContext?.courseId,
          courseTitle: activeLearningContext?.courseTitle,
          module: activeLearningContext?.module,
          chapter: activeLearningContext?.chapter,
          chapterTitle: activeLearningContext?.chapterTitle,
        }
      );

      const reply = response.success && response.data?.reply
        ? response.data.reply
        : "I am here. Let's work together to complete your next project brief!";

      const advisorMsg: Message = {
        sender: "advisor",
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, advisorMsg]);
      if (speakResponse) speakReply(reply);

      if (onUpdateContext) {
        const previousSummary = mentorContext?.conversationSummary || "";
        const updatedSummary = `${previousSummary}\nUser: ${userMsg.text}\nAdvisor: ${reply}`.trim();
        const nextAction = reply.length > 120
          ? reply.slice(0, 120).replace(/\n/g, " ") + "..."
          : reply.replace(/\n/g, " ");
        await onUpdateContext({
          conversationSummary: updatedSummary.slice(-2000),
          pendingAction: `Follow up on: ${nextAction}`,
        });
      }
    } catch (err) {
      console.error("Failed to connect to Gemini API:", err);
      const errMsg: Message = {
        sender: "advisor",
        text: "Apologies, I hit a slight connection glitch. Please verify your internet connection, or make sure the server is configured properly.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const toggleVoiceChat = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      return;
    }

    const speechWindow = window as Window & {
      SpeechRecognition?: SpeechRecognitionConstructor;
      webkitSpeechRecognition?: SpeechRecognitionConstructor;
    };
    const Recognition = speechWindow.SpeechRecognition || speechWindow.webkitSpeechRecognition;

    if (!Recognition) {
      setVoiceError("Voice input is not supported in this browser.");
      return;
    }

    setVoiceError("");
    const recognition = new Recognition();
    recognition.lang = navigator.language || "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = (event) => {
      const transcript = Array.from({ length: event.results.length }, (_, index) => event.results[index][0].transcript).join(" ").trim();
      if (transcript) handleSendMessage(transcript, true);
    };
    recognition.onerror = () => {
      setIsListening(false);
      setVoiceError("I could not hear that. Please try again.");
    };
    recognition.onend = () => {
      setIsListening(false);
      recognitionRef.current = null;
    };
    recognitionRef.current = recognition;
    setIsListening(true);
    recognition.start();
  };

  const triggerWeeklyCheckin = () => {
    const checkinPrompt = "Let's perform my weekly check-in! Review my commitment style and give me an action plan for this week.";
    handleSendMessage(checkinPrompt);
  };

  const renderFormattedMessage = (text: string) => {
    if (!text) return null;
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      const trimmed = line.trim();
      
      // Check for headings starting with #
      const isHeader = trimmed.startsWith("#");
      let headerLevel = 0;
      if (isHeader) {
        const match = trimmed.match(/^#+/);
        headerLevel = match ? match[0].length : 0;
      }

      // Check for bullet lists starting with "* ", "- ", "✦ " or "• "
      const isBullet = trimmed.startsWith("* ") || trimmed.startsWith("- ") || trimmed.startsWith("✦ ") || trimmed.startsWith("• ");
      const isNumbered = /^\d+\.\s/.test(trimmed);

      let content = line;
      if (isHeader) {
        content = trimmed.replace(/^#+\s+/, "");
      } else if (isBullet) {
        content = trimmed.replace(/^([\*\-]|✦|•)\s+/, "");
      } else if (isNumbered) {
        content = trimmed.replace(/^\d+\.\s+/, "");
      }

      // Regex parser for inline styles: bold (**text**), italics (*text* or _text_), underline (__text__), inline code (`code`)
      const regex = /(\*\*.*?\*\*|__.*?__|`.*?`|\*.*?\*|_.*?_)/g;
      const parts = content.split(regex);

      const formattedParts = parts.map((part, pIdx) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={pIdx} className="font-extrabold text-[#FF4B3E]">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("__") && part.endsWith("__")) {
          return (
            <span key={pIdx} className="underline decoration-[#FF4B3E]/40 underline-offset-2">
              {part.slice(2, -2)}
            </span>
          );
        }
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code key={pIdx} className="bg-white/10 text-rose-400 font-mono text-[11px] px-1.5 py-0.5 rounded-md border border-white/5">
              {part.slice(1, -1)}
            </code>
          );
        }
        if ((part.startsWith("*") && part.endsWith("*")) || (part.startsWith("_") && part.endsWith("_"))) {
          return (
            <em key={pIdx} className="italic opacity-90">
              {part.slice(1, -1)}
            </em>
          );
        }
        return part;
      });

      if (isHeader) {
        const headerClass = headerLevel === 1 
          ? "text-base sm:text-lg font-black text-[#FF4B3E] mt-3 mb-1.5" 
          : headerLevel === 2 
            ? "text-sm sm:text-base font-extrabold text-[#FF4B3E] mt-2.5 mb-1" 
            : "text-xs sm:text-sm font-bold text-[#FF4B3E] mt-2 mb-0.5";
        return (
          <h4 key={idx} className={`${headerClass} text-left`}>
            {formattedParts}
          </h4>
        );
      }

      if (isBullet) {
        return (
          <div key={idx} className="flex items-start space-x-2 pl-2 my-1.5 text-left">
            <span className="text-[#FF4B3E] shrink-0 mt-1">✦</span>
            <span className="text-sm text-immersive-text-primary/95 leading-relaxed">{formattedParts}</span>
          </div>
        );
      }

      if (isNumbered) {
        const numMatch = line.match(/^\d+/);
        const numStr = numMatch ? numMatch[0] : "1";
        return (
          <div key={idx} className="flex items-start space-x-2 pl-2 my-1.5 text-left">
            <span className="font-mono font-black text-immersive-secondary shrink-0 text-xs mt-0.5">{numStr}.</span>
            <span className="text-sm text-immersive-text-primary/95 leading-relaxed">{formattedParts}</span>
          </div>
        );
      }

      return (
        <p key={idx} className={line.trim() ? "mb-2 text-sm leading-relaxed text-immersive-text-primary/95 text-left" : "h-2"}>
          {formattedParts}
        </p>
      );
    });
  };

  return (
    <div className="pt-20 pb-8 min-h-screen bg-immersive-bg text-left relative">
      <div className="absolute top-20 right-20 w-[450px] h-[450px] bg-immersive-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-immersive-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6">
        
        {/* Workspace Title */}
        <div className="mb-8">
          <span className="text-xs font-mono font-bold tracking-widest text-[#FF4B3E] uppercase block mb-2">
            | DYNAMIC INTELLIGENCE LAB
          </span>
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-immersive-text-primary tracking-tight flex items-center gap-2.5">
            <span>Your CohortiaMentor</span>
            <span className="text-[#FF4B3E] text-2xl">✦</span>
          </h1>
          <p className="text-sm text-immersive-text-secondary max-w-2xl font-medium mt-1">
            Your personal, high-fidelity advisor to analyze client briefs, structure your logic, and streamline technical execution in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch h-auto lg:h-[calc(100vh-180px)] min-h-[420px] lg:min-h-[600px]">
          
          {/* Left Panel: Tuning & Mode Controls - 4 columns */}
          <div className="lg:col-span-4 flex flex-col space-y-6 overflow-y-auto pr-2 scrollbar-thin pb-4">
            
            {/* Preferred format selection */}
            <div className="bg-immersive-card border border-immersive-border rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl shadow-immersive-shadow">
              <span className="text-xs font-mono font-bold text-immersive-secondary uppercase tracking-widest block">
                Preferred output format
              </span>
              <div className="flex flex-wrap gap-2">
                {(["Text", "Slides", "Document", "Voice", "Video"] as const).map((fmt) => (
                  <button
                    key={fmt}
                    onClick={() => setFormat(fmt)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      format === fmt
                        ? "bg-[#FF4B3E]/15 border border-[#FF4B3E] text-immersive-text-primary"
                        : "bg-immersive-bg border border-immersive-border text-immersive-text-secondary hover:text-immersive-text-primary"
                    }`}
                  >
                    {fmt}
                  </button>
                ))}
              </div>
              <p className="text-[10px] text-immersive-text-secondary/70 italic font-semibold pl-1">
                Active format: {formatLabels[format]}
              </p>
            </div>

            {/* Behaviors */}
            <div className="bg-immersive-card border border-immersive-border rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl shadow-immersive-shadow">
              <span className="text-xs font-mono font-bold text-immersive-secondary uppercase tracking-widest block">
                1. How should I behave?
              </span>
              <div className="space-y-2.5">
                {behaviors.map((beh) => (
                  <button
                    key={beh.id}
                    onClick={() => setBehavior(beh.id as any)}
                    className={`w-full p-3.5 rounded-2xl border text-left flex items-start space-x-3 transition-all cursor-pointer ${
                      behavior === beh.id
                        ? "bg-immersive-primary/10 border-immersive-secondary/50"
                        : "bg-immersive-bg border-immersive-border hover:border-immersive-border/80"
                    }`}
                  >
                    <div className="pt-0.5">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        behavior === beh.id ? "border-immersive-secondary bg-immersive-secondary" : "border-immersive-border"
                      }`}>
                        {behavior === beh.id && <div className="w-1.5 h-1.5 bg-immersive-bg rounded-full" />}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-immersive-text-primary block">
                        {beh.label}
                      </span>
                      <span className="text-[10px] text-immersive-text-secondary/80 font-medium">
                        {beh.desc}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Mentor Memory Card */}
            <div className="bg-immersive-card border border-immersive-border rounded-3xl p-5 sm:p-6 text-left space-y-3.5 shadow-xl shadow-immersive-shadow">
              <span className="text-xs font-mono font-bold text-immersive-secondary uppercase tracking-widest block">
                Your Mentor Memory
              </span>
              <div className="space-y-2 text-xs font-medium text-immersive-text-secondary">
                <p>
                  • Experience: <span className="text-immersive-text-primary font-bold capitalize">{userProfile.experience}</span>
                </p>
                <p>
                  • Commitment: <span className="text-immersive-text-primary font-bold capitalize">{userProfile.commitment === "fulltime" ? "Full-Time" : "Part-Time"}</span>
                </p>
                <p>
                  • Curated Target: <span className="text-immersive-text-primary font-bold uppercase">{userProfile.track} track</span>
                </p>
                {mentorContext?.pendingAction && (
                  <p>
                    • Next Action: <span className="text-[#FF4B3E] font-bold">{mentorContext.pendingAction}</span>
                  </p>
                )}
                {mentorContext?.conversationSummary && (
                  <p className="text-[10px] text-immersive-text-secondary/70 line-clamp-3">
                    {mentorContext.conversationSummary.slice(0, 200)}...
                  </p>
                )}
              </div>
              <div className="pt-2.5 border-t border-immersive-border/30">
                <button
                  onClick={triggerWeeklyCheckin}
                  className="w-full py-2 px-4 rounded-xl text-xs font-bold text-immersive-bg bg-immersive-secondary hover:bg-white transition-all cursor-pointer flex items-center justify-center space-x-1.5 shadow"
                >
                  <span>Weekly Check-in ➔</span>
                </button>
              </div>
            </div>

            {/* Check-in History */}
            {checkIns && checkIns.length > 0 && (
              <div className="bg-immersive-card border border-immersive-border rounded-3xl p-5 sm:p-6 text-left space-y-3.5 shadow-xl shadow-immersive-shadow">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-immersive-secondary uppercase tracking-widest block">
                    Check-in History
                  </span>
                  <Check className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
                  {checkIns.slice(0, 5).map((ci, idx) => (
                    <div key={ci.id || idx} className="p-2.5 bg-immersive-bg/50 border border-immersive-border/40 rounded-xl">
                      <span className="text-[9px] font-mono text-immersive-text-secondary/70 block">
                        {ci.createdAt ? new Date(ci.createdAt).toLocaleDateString() : "Recent"}
                      </span>
                      <p className="text-[11px] text-immersive-text-primary font-medium line-clamp-2">
                        {ci.notes || ci.mood || "Check-in recorded"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Coaching Availability Slots */}
            <div className="bg-immersive-card border border-immersive-border rounded-3xl p-5 sm:p-6 text-left space-y-3.5 shadow-xl shadow-immersive-shadow">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-immersive-secondary uppercase tracking-widest block">
                  Book Live Coaching
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
              <p className="text-[10px] text-immersive-text-secondary/80 font-medium">
                Select an available real-time 1-on-1 session:
              </p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {[
                  { time: "10:00 AM", available: true },
                  { time: "11:30 AM", available: false },
                  { time: "02:00 PM", available: true },
                  { time: "04:15 PM", available: true },
                ].map((slot, idx) => (
                  <button
                    key={idx}
                    disabled={!slot.available}
                    onClick={() => alert(`Booked coaching session for ${slot.time}`)}
                    className={`p-2 rounded-xl text-xs font-bold transition-all border ${
                      slot.available
                        ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-immersive-bg cursor-pointer"
                        : "border-immersive-border/40 bg-immersive-bg/50 text-immersive-text-secondary/40 cursor-not-allowed"
                    }`}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
            </div>

            {/* Audit Request */}
            <div className="bg-immersive-card border border-immersive-border rounded-3xl p-5 sm:p-6 text-left space-y-3.5 shadow-xl shadow-immersive-shadow relative overflow-hidden group">
              <div className="absolute inset-0 bg-immersive-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <span className="text-xs font-mono font-bold text-[#FF4B3E] uppercase tracking-widest block mb-2">
                  Project Evaluation
                </span>
                <p className="text-[10px] text-immersive-text-secondary font-medium mb-4">
                  Finished a milestone? Request a full code review and project audit from your mentor.
                </p>
                <button
                  onClick={() => handleSendMessage("I have completed my latest project milestone. Please perform a full code review and structural project audit.")}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-immersive-text-primary bg-immersive-primary hover:brightness-110 transition-all cursor-pointer shadow-md shadow-immersive-shadow"
                >
                  Request Project Audit
                </button>
              </div>
            </div>

          </div>

          {/* Right Panel: Chat Interface - 8 columns */}
          <div className="lg:col-span-8 flex flex-col justify-between bg-immersive-card border border-immersive-border rounded-3xl shadow-xl shadow-immersive-shadow overflow-hidden h-full">
            
            {/* Chat Top Bar */}
            <div className="px-6 py-4 border-b border-immersive-border/60 bg-immersive-bg/40 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-8.5 h-8.5 rounded-xl bg-[#FF4B3E]/15 border border-[#FF4B3E]/30 flex items-center justify-center text-[#FF4B3E]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-immersive-card animate-pulse" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-immersive-text-primary block">
                    CohortiaMentor ✦
                  </span>
                  <span className="text-[9px] font-mono font-bold text-emerald-400 uppercase tracking-widest">
                    Online & Calibrated
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-immersive-text-secondary/60 font-semibold uppercase">
                Active Mode: {behavior}
              </span>
            </div>

            {/* Message Body Area */}
            <div ref={scrollContainerRef} className="flex-1 p-6 space-y-4 overflow-y-auto scrollbar-thin">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex items-start space-x-3.5 max-w-[85%] ${
                    msg.sender === "user" ? "ml-auto flex-row-reverse space-x-reverse" : "mr-auto"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center border ${
                    msg.sender === "user"
                      ? "bg-immersive-secondary/10 border-immersive-secondary/20 text-immersive-secondary"
                      : "bg-[#FF4B3E]/10 border-[#FF4B3E]/20 text-[#FF4B3E]"
                  }`}>
                    {msg.sender === "user" ? <User className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                  </div>
                  
                  <div className="space-y-1">
                    <div className={`p-4 rounded-2xl border text-sm leading-relaxed text-left break-words font-medium ${
                      msg.sender === "user"
                        ? "bg-immersive-bg border-immersive-border text-immersive-text-primary rounded-tr-none"
                        : "bg-immersive-bg/50 border-immersive-border/50 text-immersive-text-primary/95 rounded-tl-none"
                    }`}>
                      {renderFormattedMessage(msg.text)}
                    </div>
                    <span className={`text-[9px] font-semibold text-immersive-text-secondary/60 block ${
                      msg.sender === "user" ? "text-right" : "text-left"
                    }`}>
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center space-x-3.5 mr-auto">
                  <div className="w-8 h-8 rounded-lg bg-[#FF4B3E]/10 border border-[#FF4B3E]/20 text-[#FF4B3E] flex items-center justify-center">
                    <Sparkles className="w-4 h-4 animate-spin" />
                  </div>
                  <div className="bg-immersive-bg/50 border border-immersive-border/50 p-4 rounded-2xl rounded-tl-none flex space-x-1.5 items-center">
                    <div className="w-1.5 h-1.5 bg-[#FF4B3E] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-1.5 h-1.5 bg-[#FF4B3E] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-1.5 h-1.5 bg-[#FF4B3E] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions & Input Form */}
            <div className="p-4 border-t border-immersive-border/60 bg-immersive-bg/10 space-y-3.5">
              
              {/* Quick actions row */}
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(action)}
                    className="px-3 py-1.5 rounded-xl border border-immersive-border/60 hover:border-immersive-secondary/40 text-[10px] font-bold text-immersive-text-secondary hover:text-immersive-text-primary transition-all bg-immersive-card cursor-pointer"
                  >
                    {action}
                  </button>
                ))}
              </div>

              {/* Text Input Block */}
              <div className="flex items-center space-x-3 bg-immersive-bg border border-immersive-border rounded-2xl p-2 focus-within:border-immersive-secondary transition-all">
                <button className="p-2 text-immersive-text-secondary/60 hover:text-[#FF4B3E] cursor-pointer">
                  <Paperclip className="w-4 h-4" />
                </button>
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSendMessage(inputMessage);
                  }}
                  placeholder={`Ask your ${behavior} anything in ${format} format...`}
                  className="flex-1 bg-transparent px-2 py-3 text-sm text-immersive-text-primary placeholder:text-immersive-text-secondary/50 focus:outline-none text-left"
                />
                <button
                  type="button"
                  onClick={toggleVoiceChat}
                  aria-label={isListening ? "Stop voice chat" : "Talk to your mentor"}
                  title={isListening ? "Stop listening" : "Talk to your mentor"}
                  className={`p-3 rounded-xl transition-all cursor-pointer ${
                    isListening
                      ? "bg-[#FF4B3E] text-white animate-pulse"
                      : "text-immersive-text-secondary hover:text-[#FF4B3E] hover:bg-[#FF4B3E]/10"
                  }`}
                >
                  <Mic className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleSendMessage(inputMessage)}
                  className="p-3 bg-immersive-secondary text-immersive-bg hover:bg-white transition-all rounded-xl cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              {(isListening || voiceError) && (
                <p className={`px-1 text-[10px] font-semibold ${isListening ? "text-[#FF4B3E]" : "text-amber-500"}`} aria-live="polite">
                  {isListening ? "Listening... speak naturally, then I will send it to your mentor." : voiceError}
                </p>
              )}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
