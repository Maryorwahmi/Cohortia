import React from "react";
import { motion } from "motion/react";
import { Sparkles, Code2 } from "lucide-react";

interface MentorChatMessageProps {
  text: string;
  isUser: boolean;
  isProactiveTip?: boolean;
}

/**
 * Rich message renderer for mentor chat messages
 * Supports:
 * - Markdown-like formatting (bold, italic, lists)
 * - Code blocks with syntax highlighting
 * - Structured sections with headers
 * - Callouts and tips
 */
export default function MentorChatMessage({ text, isUser, isProactiveTip }: MentorChatMessageProps) {
  // Parse the message content to extract structured sections
  const parseContent = (content: string) => {
    const sections: { type: string; content: string; language?: string }[] = [];
    let current = content;
    let type = "paragraph";

    // Handle code blocks (```language\ncode\n```)
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)\n```/g;
    current = current.replace(codeBlockRegex, (match, language, code) => {
      sections.push({ type: "code", content: code, language: language || "javascript" });
      return "\n[CODE_BLOCK]\n";
    });

    // Split by double newlines for paragraphs
    const parts = current.split(/\n\n+/);

    parts.forEach((part) => {
      // Check for headers (starting with #)
      if (part.match(/^#+\s/)) {
        const level = part.match(/^#+/)?.[0].length || 1;
        const headerText = part.replace(/^#+\s/, "").trim();
        sections.push({ type: `header${level}`, content: headerText });
      }
      // Check for lists (starting with - or * or 1.)
      else if (part.match(/^[-*]\s|^\d+\.\s/m)) {
        sections.push({ type: "list", content: part });
      }
      // Check for emphasis or other formatting
      else if (part.trim()) {
        sections.push({ type: "paragraph", content: part });
      }
    });

    return sections;
  };

  const sections = parseContent(text);

  // Render inline formatting (bold, italic, code)
  const renderInlineContent = (content: string) => {
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;

    // Match bold (**text**), italic (*text*), and inline code (`code`)
    const regex = /\*\*(.+?)\*\*|\*(.+?)\*|`(.+?)`/g;
    let match;

    while ((match = regex.exec(content)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        parts.push(content.slice(lastIndex, match.index));
      }

      // Add the formatted element
      if (match[1]) {
        // Bold
        parts.push(
          <strong key={match.index} className="font-bold text-slate-900">
            {match[1]}
          </strong>
        );
      } else if (match[2]) {
        // Italic
        parts.push(
          <em key={match.index} className="italic text-slate-700">
            {match[2]}
          </em>
        );
      } else if (match[3]) {
        // Inline code
        parts.push(
          <code
            key={match.index}
            className="bg-slate-100 text-slate-900 px-1.5 py-0.5 rounded font-mono text-xs border border-slate-200"
          >
            {match[3]}
          </code>
        );
      }

      lastIndex = regex.lastIndex;
    }

    // Add remaining text
    if (lastIndex < content.length) {
      parts.push(content.slice(lastIndex));
    }

    return parts.length > 0 ? parts : content;
  };

  // Render list items
  const renderList = (content: string) => {
    const lines = content.trim().split("\n");
    const items = lines.map((line) => line.replace(/^[-*]\s|^\d+\.\s/, "").trim()).filter(Boolean);

    return (
      <ul className="space-y-1.5 ml-3">
        {items.map((item, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="text-slate-700 flex items-start gap-2 text-sm leading-relaxed"
          >
            <span className="text-blue-500 font-bold mt-0.5">•</span>
            <span>{renderInlineContent(item)}</span>
          </motion.li>
        ))}
      </ul>
    );
  };

  // Render code blocks
  const renderCodeBlock = (content: string, language: string) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-900 text-slate-100 rounded-lg p-3 my-2 font-mono text-xs overflow-x-auto border border-slate-700"
      >
        {language && <div className="text-[10px] font-bold text-slate-400 uppercase mb-2">{language}</div>}
        <pre className="whitespace-pre-wrap break-words text-slate-100">{content.trim()}</pre>
      </motion.div>
    );
  };

  if (isUser) {
    return (
      <div className="flex justify-end">
        <motion.div
          initial={{ opacity: 0, y: 5, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="max-w-[85%] bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl rounded-tr-none px-4 py-2.5 shadow-md"
        >
          <p className="text-sm leading-relaxed">{renderInlineContent(text)}</p>
        </motion.div>
      </div>
    );
  }

  // Mentor message with rich formatting
  return (
    <motion.div
      initial={{ opacity: 0, y: 5, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className={`max-w-[85%] rounded-2xl rounded-tl-none shadow-sm overflow-hidden ${
        isProactiveTip
          ? "bg-amber-50 border border-amber-200"
          : "bg-white border border-slate-200"
      }`}
    >
      <div className={`px-4 py-2.5 ${isProactiveTip ? "text-amber-900" : "text-slate-800"}`}>
        {/* Proactive Tip Header */}
        {isProactiveTip && (
          <div className="flex items-center gap-2 mb-2 pb-2 border-b border-amber-200">
            <Sparkles className="h-4 w-4 text-amber-600 flex-shrink-0" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Proactive Tip
            </span>
          </div>
        )}

        {/* Render sections */}
        <div className="space-y-3 text-sm leading-relaxed">
          {sections.map((section, idx) => {
            if (section.type === "header1") {
              return (
                <motion.h3
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="text-lg font-bold text-slate-900 mt-2 pt-2 border-t border-slate-200"
                >
                  {renderInlineContent(section.content)}
                </motion.h3>
              );
            }
            if (section.type === "header2") {
              return (
                <motion.h4
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="text-base font-semibold text-slate-900 mt-2 pt-1"
                >
                  {renderInlineContent(section.content)}
                </motion.h4>
              );
            }
            if (section.type === "code") {
              return (
                <div key={idx}>
                  {renderCodeBlock(section.content, (section as any).language || "text")}
                </div>
              );
            }
            if (section.type === "list") {
              return <div key={idx}>{renderList(section.content)}</div>;
            }
            if (section.content === "[CODE_BLOCK]") {
              return null; // Already handled
            }
            return (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={`${isProactiveTip ? "text-amber-800" : "text-slate-700"} leading-relaxed`}
              >
                {renderInlineContent(section.content)}
              </motion.p>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
