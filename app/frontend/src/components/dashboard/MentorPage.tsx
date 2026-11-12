import { useState, useRef, useEffect } from "react";
import type { ChangeEvent } from "react";
import { Sparkles, Send, Paperclip, User, Mic } from "lucide-react";
import { UserPreferences } from "../../types";
import { chatApi } from "../../services/api";

interface Message {
  sender: "user" | "advisor";
  text: string;
  timestamp: string;
  attachments?: Array<{ name: string; mimeType: string; size: number }>;
}

interface MentorAttachment {
  name: string;
  mimeType: string;
  size: number;
  data?: string;
  textContent?: string;
}

const SUPPORTED_MENTOR_FILE_TYPES: Record<string, string> = {
  jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", webp: "image/webp", gif: "image/gif",
  pdf: "application/pdf", txt: "text/plain", md: "text/markdown", csv: "text/csv", json: "application/json",
  xml: "application/xml", html: "text/html", htm: "text/html", css: "text/css",
  js: "text/javascript", jsx: "text/javascript", ts: "text/typescript", tsx: "text/typescript",
  py: "text/x-python", java: "text/x-java-source", c: "text/x-c", h: "text/x-c",
  cpp: "text/x-c++", hpp: "text/x-c++", go: "text/x-go", rs: "text/x-rust", sql: "text/x-sql",
  yaml: "text/yaml", yml: "text/yaml", log: "text/plain",
};

const isTextAttachment = (mimeType: string) =>
  mimeType.startsWith("text/") || mimeType === "application/json" || mimeType === "application/xml";

interface MentorContext {
  conversationSummary?: string;
  pendingAction?: string;
  goals?: string[];
}

interface MentorPageProps {
  userProfile: UserPreferences;
  mentorContext?: MentorContext;
  onUpdateContext?: (update: MentorContext) => void | Promise<void>;
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

export default function MentorPage({ userProfile, mentorContext, onUpdateContext }: MentorPageProps) {
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
  const [attachments, setAttachments] = useState<MentorAttachment[]>([]);
  const [attachmentError, setAttachmentError] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceError, setVoiceError] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);

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

  const handleSendMessage = async (
    textToSend: string,
    speakResponse = false,
    filesToSend = attachments,
  ) => {
    if (!textToSend.trim() && filesToSend.length === 0) return;

    const messageText = textToSend.trim() || "Please review the attached file(s).";

    const userMsg: Message = {
      sender: "user",
      text: messageText,
      attachments: filesToSend.map(({ name, mimeType, size }) => ({ name, mimeType, size })),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");
    setAttachments([]);
    setAttachmentError("");
    setIsTyping(true);

    try {
      const history = [...messages, userMsg].map(m => ({
        sender: m.sender,
        text: m.text
      }));

      const response = await chatApi.sendMessage(
        messageText,
        history,
        "mentor",
        "text",
        userProfile.track,
        {
          page: "mentor page",
          courseId: activeLearningContext?.courseId,
          courseTitle: activeLearningContext?.courseTitle,
          module: activeLearningContext?.module,
          chapter: activeLearningContext?.chapter,
          chapterTitle: activeLearningContext?.chapterTitle,
        },
        filesToSend,
      );

      if (!response.success || !response.data?.reply) {
        throw new Error(response.error || "Your mentor could not read that message. Please try again.");
      }
      const reply = response.data.reply;

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
      console.error("Failed to send mentor message:", err);
      const errMsg: Message = {
        sender: "advisor",
        text: err instanceof Error
          ? `I couldn't send that message: ${err.message}`
          : "I couldn't send that message. Please check your connection and try again.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleFileSelection = async (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles: File[] = event.currentTarget.files
      ? Array.from(event.currentTarget.files)
      : [];
    event.currentTarget.value = "";
    if (selectedFiles.length === 0) return;

    const totalFileCount = attachments.length + selectedFiles.length;
    if (totalFileCount > 5) {
      setAttachmentError("Attach no more than 5 files at a time.");
      return;
    }

    const getMimeType = (fileName: string) => SUPPORTED_MENTOR_FILE_TYPES[fileName.split(".").pop()?.toLowerCase() || ""];
    const totalBinarySize = attachments.reduce((total, file) => total + (file.data ? file.size : 0), 0)
      + selectedFiles.filter((file) => !isTextAttachment(getMimeType(file.name) || ""))
        .reduce((total, file) => total + file.size, 0);
    const totalTextSize = attachments.reduce((total, file) => total + (file.textContent ? file.size : 0), 0)
      + selectedFiles.filter((file) => isTextAttachment(getMimeType(file.name) || ""))
        .reduce((total, file) => total + file.size, 0);
    if (totalBinarySize > 8 * 1024 * 1024 || selectedFiles.some((file) => file.size > 4 * 1024 * 1024 && !isTextAttachment(getMimeType(file.name) || ""))) {
      setAttachmentError("Images and PDFs must be 4 MB or smaller, with a combined limit of 8 MB.");
      return;
    }
    if (totalTextSize > 300 * 1024) {
      setAttachmentError("The combined size of text files must be 300 KB or smaller.");
      return;
    }

    try {
      const loadedFiles = await Promise.all(selectedFiles.map(async (file): Promise<MentorAttachment> => {
        const extension = file.name.split(".").pop()?.toLowerCase() || "";
        const mimeType = SUPPORTED_MENTOR_FILE_TYPES[extension];
        if (!mimeType) throw new Error(`"${file.name}" is not a supported file type.`);
        if (isTextAttachment(mimeType)) {
          if (file.size > 100 * 1024) throw new Error(`"${file.name}" is too large. Text files must be 100 KB or smaller.`);
          return { name: file.name, mimeType, size: file.size, textContent: await file.text() };
        }
        if (file.size === 0) throw new Error(`"${file.name}" is empty.`);
        const dataUrl = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => typeof reader.result === "string" ? resolve(reader.result) : reject(new Error(`Could not read "${file.name}".`));
          reader.onerror = () => reject(new Error(`Could not read "${file.name}".`));
          reader.readAsDataURL(file);
        });
        return { name: file.name, mimeType, size: file.size, data: dataUrl.split(",")[1] };
      }));

      setAttachments((current) => [...current, ...loadedFiles]);
      setAttachmentError("");
    } catch (error) {
      setAttachmentError(error instanceof Error ? error.message : "Could not read the selected file.");
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

        <div className="mentor-workspace grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch h-auto lg:h-[calc(100vh-180px)] min-h-[420px] lg:min-h-[600px]">
          <div className="lg:col-span-12 flex flex-col justify-between bg-immersive-card border border-immersive-border rounded-3xl shadow-xl shadow-immersive-shadow overflow-hidden h-full">
            
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
              <span className="text-[10px] font-mono text-emerald-400/80 font-semibold uppercase">
                Mentor guidance
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
                      {msg.attachments?.length ? (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {msg.attachments.map((file) => (
                            <span key={`${file.name}-${file.size}`} className="inline-flex max-w-full items-center gap-1.5 rounded-lg border border-immersive-border px-2 py-1 text-xs">
                              <Paperclip className="h-3 w-3 shrink-0" />
                              <span className="truncate">{file.name}</span>
                            </span>
                          ))}
                        </div>
                      ) : null}
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
              <div className="flex flex-col gap-2 bg-immersive-bg border border-immersive-border rounded-2xl p-2 focus-within:border-immersive-secondary transition-all">
                {attachments.length > 0 && (
                  <div className="flex flex-wrap gap-2 px-1 pt-1">
                    {attachments.map((file, index) => (
                      <span key={`${file.name}-${index}`} className="inline-flex max-w-full items-center gap-1.5 rounded-lg border border-immersive-border px-2 py-1 text-xs text-immersive-text-secondary">
                        <Paperclip className="h-3 w-3 shrink-0" />
                        <span className="max-w-48 truncate">{file.name}</span>
                        <button
                          type="button"
                          aria-label={`Remove ${file.name}`}
                          onClick={() => setAttachments((current) => current.filter((_, fileIndex) => fileIndex !== index))}
                          className="ml-1 font-bold hover:text-[#FF4B3E]"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex items-center space-x-3">
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept=".jpg,.jpeg,.png,.webp,.gif,.pdf,.txt,.md,.csv,.json,.xml,.html,.htm,.css,.js,.jsx,.ts,.tsx,.py,.java,.c,.h,.cpp,.hpp,.go,.rs,.sql,.yaml,.yml,.log"
                  onChange={handleFileSelection}
                  className="hidden"
                />
                <button
                  type="button"
                  aria-label="Attach images or files"
                  title="Attach images, PDFs, or text/code files"
                  onClick={() => fileInputRef.current?.click()}
                  className="p-2 text-immersive-text-secondary/60 hover:text-[#FF4B3E] cursor-pointer"
                >
                  <Paperclip className="w-4 h-4" />
                </button>
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage(inputMessage);
                    }
                  }}
                  placeholder="Ask your mentor anything..."
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
              </div>
              <p className="px-1 text-[10px] text-immersive-text-secondary/70">
                Attach up to 5 images, PDFs, or text/code files. Images and PDFs: 4 MB each; text files: 100 KB each.
              </p>
              {attachmentError && (
                <p className="px-1 text-xs font-semibold text-amber-500" role="alert">{attachmentError}</p>
              )}
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
