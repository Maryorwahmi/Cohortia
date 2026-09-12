import { useEffect, useRef } from "react";
import { EditorState, Extension } from "@codemirror/state";
import { EditorView, lineNumbers, highlightActiveLineGutter, keymap, highlightSpecialChars } from "@codemirror/view";
import { defaultKeymap, history, historyKeymap, indentWithTab } from "@codemirror/commands";
import { bracketMatching, syntaxHighlighting, defaultHighlightStyle } from "@codemirror/language";
import { python } from "@codemirror/lang-python";
import { javascript } from "@codemirror/lang-javascript";
import { sql } from "@codemirror/lang-sql";
import { cpp } from "@codemirror/lang-cpp";

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language?: string;
  readOnly?: boolean;
  className?: string;
  placeholder?: string;
}

export default function CodeEditor({
  value,
  onChange,
  language = "python",
  readOnly = false,
  className = "",
  placeholder = "Write your code here...",
}: CodeEditorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);
  const isUpdatingFromPropRef = useRef(false);

  // Helper to resolve language extension
  const getLanguageExtension = (lang: string): Extension => {
    const l = lang.toLowerCase();
    if (l.includes("py")) return python();
    if (l.includes("js") || l.includes("ts")) return javascript({ typescript: true });
    if (l.includes("sql")) return sql();
    if (l.includes("cpp") || l.includes("c++") || l === "c") return cpp();
    return python();
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const theme = EditorView.theme({
      "&": {
        height: "100%",
        fontSize: "13px",
        fontFamily: "'Fira Code', 'Cascadia Code', 'JetBrains Mono', Consolas, monospace",
        backgroundColor: "#ffffff",
        color: "#1e293b",
      },
      ".cm-content": {
        padding: "12px 0",
        caretColor: "#ff4b3e",
      },
      "&.cm-focused .cm-cursor": {
        borderLeftColor: "#ff4b3e",
        borderLeftWidth: "2px",
      },
      "&.cm-focused .cm-selectionBackground, ::selection": {
        backgroundColor: "#dbeafe",
      },
      ".cm-gutters": {
        backgroundColor: "#f8fafc",
        color: "#94a3b8",
        borderRight: "1px solid #e2e8f0",
        paddingRight: "8px",
        minWidth: "40px",
      },
      ".cm-activeLineGutter": {
        backgroundColor: "#f1f5f9",
        color: "#334155",
        fontWeight: "600",
      },
      ".cm-activeLine": {
        backgroundColor: "#f8fafc80",
      },
      ".cm-line": {
        padding: "0 12px",
        lineHeight: "1.6",
      },
    });

    const updateListener = EditorView.updateListener.of((update) => {
      if (update.docChanged && !isUpdatingFromPropRef.current) {
        const newValue = update.state.doc.toString();
        onChange(newValue);
      }
    });

    const state = EditorState.create({
      doc: value,
      extensions: [
        lineNumbers(),
        highlightActiveLineGutter(),
        highlightSpecialChars(),
        history(),
        bracketMatching(),
        syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
        getLanguageExtension(language),
        theme,
        keymap.of([...defaultKeymap, ...historyKeymap, indentWithTab]),
        updateListener,
        EditorState.readOnly.of(readOnly),
      ],
    });

    const view = new EditorView({
      state,
      parent: containerRef.current,
    });

    viewRef.current = view;

    return () => {
      view.destroy();
      viewRef.current = null;
    };
  }, [language, readOnly]);

  // Sync external changes into CodeMirror if they differ from current doc
  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;

    const currentDoc = view.state.doc.toString();
    if (value !== currentDoc) {
      isUpdatingFromPropRef.current = true;
      view.dispatch({
        changes: { from: 0, to: currentDoc.length, insert: value },
      });
      isUpdatingFromPropRef.current = false;
    }
  }, [value]);

  return (
    <div
      ref={containerRef}
      className={`h-full w-full overflow-hidden ${className}`}
      aria-label="Code Editor"
    />
  );
}
