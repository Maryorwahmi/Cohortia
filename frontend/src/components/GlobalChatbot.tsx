import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Sparkles, Bot, User, RotateCcw } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { UserPreferences } from "../types";
import { chatApi } from "../services/api";

interface Message {
  id: string;
  sender: "user" | "advisor";
  text: string;
  timestamp: Date;
}

interface GlobalChatbotProps {
  userProfile: UserPreferences | null;
}

const SUGGESTIONS = [
  "What is a Cohort Experiential Lab?",
  "Tell me about Frontend Engineering track.",
  "How do peer project collaborations work?",
  "Can Coach Chinedu help me build my career?"
];

export default function GlobalChatbot({ userProfile }: GlobalChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    // Try to load historical conversation
    const saved = localStorage.getItem("cohortia_chatbot_history");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.map((m: any) => ({
          ...m,
          timestamp: new Date(m.timestamp)
        }));
      } catch (e) {
        console.error("Failed parsing chat history", e);
      }
    }
    return [
      {
        id: "welcome",
        sender: "advisor",
        text: `Hey there! 👋 I am Coach Chinedu, your AI Advisor. Ready to map out your high-impact career journey at Cohortia? Let's talk about experiential labs, matching, or professional portfolio tracks!`,
        timestamp: new Date()
      }
    ];
  });

  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sync history to localStorage
  useEffect(() => {
    localStorage.setItem("cohortia_chatbot_history", JSON.stringify(messages));
  }, [messages]);

  // Scroll to bottom on updates
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading, isOpen]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: Message = {
      id: Math.random().toString(36).substr(2, 9),
      sender: "user",
      text: textToSend.trim(),
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsLoading(true);

    try {
      const recentMessages = [...messages, userMsg].slice(-10).map(m => ({
        sender: m.sender === "user" ? "user" : "advisor",
        text: m.text
      }));

      const res = await chatApi.sendMessage(
        userMsg.text,
        recentMessages,
        "coach",
        "text",
        userProfile?.track || null,
        { page: "global advisor" }
      );

      const reply = res.success && res.data?.reply
        ? res.data.reply
        : "I apologize, I missed that. Could you repeat that?";

      const advisorMsg: Message = {
        id: Math.random().toString(36).substr(2, 9),
        sender: "advisor",
        text: reply,
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, advisorMsg]);
    } catch (err) {
      console.error("AI Advisor error:", err);
      const errorMsg: Message = {
        id: Math.random().toString(36).substr(2, 9),
        sender: "advisor",
        text: "I am experiencing brief connectivity issues with the Cohortia cloud portal. Please try again in a moment, or ensure your API keys are fully loaded!",
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    if (window.confirm("Do you want to reset your conversation with Coach Chinedu?")) {
      const defaultMsg: Message = {
        id: "welcome-reset",
        sender: "advisor",
        text: `Conversation restarted! Hello again${userProfile?.name ? `, ${userProfile.name}` : ""}. What goals or tech-tracks should we build out today?`,
        timestamp: new Date()
      };
      setMessages([defaultMsg]);
    }
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
          ? "text-sm sm:text-base font-black text-[#FF4B3E] mt-3 mb-1.5" 
          : headerLevel === 2 
            ? "text-xs sm:text-sm font-extrabold text-[#FF4B3E] mt-2.5 mb-1" 
            : "text-xs font-bold text-[#FF4B3E] mt-2 mb-0.5";
        return (
          <h4 key={idx} className={`${headerClass} text-left`}>
            {formattedParts}
          </h4>
        );
      }

      if (isBullet) {
        return (
          <div key={idx} className="flex items-start space-x-2 pl-2 my-1 text-left">
            <span className="text-[#FF4B3E] shrink-0 mt-1">✦</span>
            <span className="text-xs text-immersive-text-primary/95 leading-relaxed">{formattedParts}</span>
          </div>
        );
      }

      if (isNumbered) {
        const numMatch = line.match(/^\d+/);
        const numStr = numMatch ? numMatch[0] : "1";
        return (
          <div key={idx} className="flex items-start space-x-2 pl-2 my-1 text-left">
            <span className="font-mono font-black text-immersive-secondary shrink-0 text-xs mt-0.5">{numStr}.</span>
            <span className="text-xs text-immersive-text-primary/95 leading-relaxed">{formattedParts}</span>
          </div>
        );
      }

      return (
        <p key={idx} className={line.trim() ? "mb-1.5 text-xs leading-relaxed text-immersive-text-primary/95 text-left" : "h-1.5"}>
          {formattedParts}
        </p>
      );
    });
  };

  return (
    <div id="cohortia-global-chatbot" className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="absolute bottom-20 right-0 w-[420px] max-w-[calc(100vw-2rem)] h-[780px] max-h-[calc(100vh-6rem)] rounded-2xl bg-immersive-card border border-immersive-border shadow-2xl shadow-immersive-shadow flex flex-col overflow-hidden z-50"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-immersive-bg to-immersive-card border-b border-immersive-border flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-[#FF4B3E]/10 border border-[#FF4B3E]/30 flex items-center justify-center text-[#FF4B3E]">
                    <Bot className="w-5.5 h-5.5 animate-pulse" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border border-immersive-card rounded-full" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-bold text-immersive-text-primary flex items-center">
                    Coach Chinedu
                    <Sparkles className="w-3.5 h-3.5 text-immersive-secondary ml-1.5" />
                  </span>
                  <span className="text-[10px] text-immersive-text-secondary font-mono tracking-wide uppercase font-semibold">
                    Cohortia AI Advisor • Online
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-1.5">
                <button
                  onClick={handleReset}
                  className="p-1.5 rounded-lg text-immersive-text-secondary hover:text-immersive-text-primary hover:bg-immersive-card-hover transition-all cursor-pointer"
                  title="Reset conversation"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-immersive-text-secondary hover:text-immersive-text-primary hover:bg-[#FF4B3E]/10 hover:text-[#FF4B3E] transition-all cursor-pointer"
                  title="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Conversation Log */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-immersive-border scrollbar-track-transparent">
              {messages.map((msg) => {
                const isAdvisor = msg.sender === "advisor";
                return (
                  <div
                    key={msg.id}
                    className={`flex items-start space-x-2.5 ${
                      isAdvisor ? "" : "flex-row-reverse space-x-reverse"
                    }`}
                  >
                    <div
                      className={`w-7.5 h-7.5 rounded-lg flex items-center justify-center text-xs font-bold border shrink-0 ${
                        isAdvisor
                          ? "bg-[#FF4B3E]/10 border-immersive-border text-[#FF4B3E]"
                          : "bg-immersive-secondary/10 border-immersive-secondary/35 text-immersive-secondary"
                      }`}
                    >
                      {isAdvisor ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                    </div>

                    <div className="flex flex-col max-w-[78%]">
                      <div
                        className={`p-3 rounded-2xl text-xs leading-relaxed whitespace-pre-wrap ${
                          isAdvisor
                            ? "bg-immersive-bg/75 border border-immersive-border/50 text-immersive-text-primary rounded-tl-sm"
                            : "bg-[#FF4B3E]/15 border border-[#FF4B3E]/30 text-[#FF4B3E] font-medium rounded-tr-sm"
                        }`}
                      >
                        {renderFormattedMessage(msg.text)}
                      </div>
                      <span className={`text-[9px] text-immersive-text-secondary/60 mt-1 font-mono ${
                        isAdvisor ? "text-left" : "text-right"
                      }`}>
                        {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </span>
                    </div>
                  </div>
                );
              })}

              {isLoading && (
                <div className="flex items-start space-x-2.5">
                  <div className="w-7.5 h-7.5 rounded-lg flex items-center justify-center bg-[#FF4B3E]/10 border border-immersive-border text-[#FF4B3E] shrink-0">
                    <Bot className="w-4 h-4 animate-spin" />
                  </div>
                  <div className="bg-immersive-bg/75 border border-immersive-border/50 p-3 rounded-2xl rounded-tl-sm text-xs text-immersive-text-secondary flex items-center space-x-2">
                    <span className="font-semibold text-[10px]">Chinedu is thinking</span>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-[#FF4B3E] rounded-full animate-bounce duration-300" style={{ animationDelay: "0ms" }} />
                      <div className="w-1 h-1 bg-immersive-secondary rounded-full animate-bounce duration-300" style={{ animationDelay: "150ms" }} />
                      <div className="w-1 h-1 bg-white rounded-full animate-bounce duration-300" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions */}
            {messages.length === 1 && !isLoading && (
              <div className="px-4 pb-2 pt-1 flex flex-col space-y-1.5 bg-immersive-bg/25 border-t border-immersive-border/10">
                <span className="text-[10px] text-immersive-text-secondary/80 font-semibold font-mono uppercase tracking-wider text-left">
                  Suggested Questions:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {SUGGESTIONS.map((sug, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(sug)}
                      className="text-[10px] py-1 px-2 rounded-lg bg-immersive-card border border-immersive-border hover:border-white text-immersive-text-secondary hover:text-immersive-text-primary transition-all cursor-pointer text-left"
                    >
                      {sug}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Footer */}
            <div className="p-3 bg-immersive-bg/90 border-t border-immersive-border flex items-center space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage(inputText)}
                placeholder="Ask Coach Chinedu anything..."
                disabled={isLoading}
                className="flex-1 bg-immersive-card border border-immersive-border/80 focus:border-[#FF4B3E] focus:outline-none rounded-xl px-3.5 py-2 text-xs text-immersive-text-primary placeholder-immersive-text-secondary/60 transition-all font-sans disabled:opacity-50"
              />
              <button
                onClick={() => handleSendMessage(inputText)}
                disabled={isLoading || !inputText.trim()}
                className="p-2.5 rounded-xl bg-[#FF4B3E] hover:bg-white text-immersive-text-primary hover:text-immersive-bg transition-all disabled:opacity-40 disabled:hover:bg-[#FF4B3E] disabled:hover:text-immersive-text-primary shadow-lg shadow-immersive-shadow cursor-pointer shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 rounded-full bg-immersive-primary text-immersive-text-primary flex items-center justify-center shadow-[0_0_25px_rgba(255,75,62,0.4)] cursor-pointer hover:brightness-110 transition-all"
        aria-label="Chat with AI Career Advisor"
        title="Chat with AI Advisor"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-7 h-7 stroke-[2.5]" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative flex items-center justify-center"
            >
              <MessageSquare className="w-7 h-7" />
              <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
