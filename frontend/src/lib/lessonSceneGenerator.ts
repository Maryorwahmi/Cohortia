import {
  BookOpen, Code, Terminal, Layers, AlertTriangle, Play, CheckCircle
} from "lucide-react";
import type { CustomLessonDetails } from "../components/dashboard/LearningBoardPage";
import type { LessonScene } from "./cppSceneGenerator";

export type GenericSceneType =
  | "concept-intro"
  | "syntax-breakdown"
  | "live-code"
  | "memory-diagram"
  | "pitfalls"
  | "cta";

function inferLanguage(title: string): string {
  const t = title.toLowerCase();
  if (t.includes("python")) return "python";
  if (t.includes("javascript") || t.includes("js") || t.includes("node")) return "javascript";
  if (t.includes("typescript") || t.includes("ts")) return "typescript";
  if (t.includes("react")) return "jsx";
  if (t.includes("c++") || t.includes("cpp")) return "cpp";
  if (t.includes("c#")) return "csharp";
  if (t.includes("java")) return "java";
  if (t.includes("go ") || t.includes("golang")) return "go";
  if (t.includes("rust")) return "rust";
  if (t.includes("ruby")) return "ruby";
  if (t.includes("php")) return "php";
  if (t.includes("swift")) return "swift";
  if (t.includes("kotlin")) return "kotlin";
  if (t.includes("sql")) return "sql";
  if (t.includes("bash") || t.includes("shell")) return "bash";
  if (t.includes("html")) return "html";
  if (t.includes("css")) return "css";
  if (t.includes("solidity")) return "solidity";
  return "javascript";
}

export function generateGenericScenes(lesson: CustomLessonDetails, title: string): LessonScene[] {
  const language = inferLanguage(title);
  const fileName = language === "python" ? "main.py"
    : language === "cpp" ? "main.cpp"
    : language === "java" ? "Main.java"
    : language === "go" ? "main.go"
    : language === "rust" ? "main.rs"
    : language === "ruby" ? "main.rb"
    : language === "bash" ? "script.sh"
    : language === "html" ? "index.html"
    : language === "css" ? "styles.css"
    : language === "sql" ? "query.sql"
    : "index.js";

  const startingCode = lesson.slides[1]?.points?.length
    ? lesson.slides[1].points.slice(0, 8).join("\n")
    : `// ${title}\n// Practical example for this lesson`;

  return [
    {
      id: 1,
      title: "Concept Introduction",
      duration: 10,
      icon: BookOpen,
      description: "Understanding the core idea and why it matters",
      category: "Theory",
      type: "concept-intro" as GenericSceneType,
      data: {
        overview: lesson.summary.overview,
        objectives: lesson.summary.objectives,
        slideTitle: lesson.slides[0]?.title || "Introduction",
        points: lesson.slides[0]?.points || [],
      },
    },
    {
      id: 2,
      title: "Syntax Deep Dive",
      duration: 10,
      icon: Code,
      description: "Breaking down the syntax and mechanics",
      category: "Syntax",
      type: "syntax-breakdown" as GenericSceneType,
      data: {
        slideTitle: lesson.slides[1]?.title || "Syntax",
        points: lesson.slides[1]?.points || lesson.slides[0]?.points || [],
      },
    },
    {
      id: 3,
      title: "Live Code Simulation",
      duration: 10,
      icon: Terminal,
      description: "Watch the code compile and run in real-time",
      category: "Practice",
      type: "live-code" as GenericSceneType,
      data: {
        code: startingCode,
        fileName,
      },
    },
    {
      id: 4,
      title: "System Visualization",
      duration: 10,
      icon: Layers,
      description: "Under-the-hood layout and behavior",
      category: "Systems",
      type: "memory-diagram" as GenericSceneType,
      data: {
        slideTitle: lesson.slides[2]?.title || "Systems View",
        points: lesson.slides[2]?.points || lesson.summary.objectives.slice(0, 4),
      },
    },
    {
      id: 5,
      title: "Pitfalls & Best Practices",
      duration: 10,
      icon: AlertTriangle,
      description: "Common mistakes and how to avoid them",
      category: "Safety",
      type: "pitfalls" as GenericSceneType,
      data: {
        takeaways: lesson.summary.takeaways,
        points: lesson.slides[3]?.points || lesson.summary.takeaways.slice(0, 4),
      },
    },
    {
      id: 6,
      title: "Try It Yourself",
      duration: 10,
      icon: Play,
      description: "Open the sandbox and practice",
      category: "Action",
      type: "cta" as GenericSceneType,
      data: {
        objectives: lesson.summary.objectives,
      },
    },
  ];
}
