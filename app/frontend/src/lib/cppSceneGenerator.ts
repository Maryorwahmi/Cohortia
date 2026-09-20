import {
  BookOpen, Code, Terminal, Layers, AlertTriangle, Play
} from "lucide-react";
import type { ElementType } from "react";
import { CPP_LESSONS_DETAILS } from "../data/cppLessonsData";

export type SceneType =
  | "concept-intro"
  | "syntax-breakdown"
  | "live-code"
  | "memory-diagram"
  | "pitfalls"
  | "cta";

export interface LessonScene {
  id: number;
  title: string;
  duration: number;
  icon: ElementType;
  description: string;
  category: string;
  type: SceneType;
  data: Record<string, any>;
}

export function generateCppScenes(lessonId: string): LessonScene[] {
  const lesson = CPP_LESSONS_DETAILS[lessonId];
  if (!lesson) return [];

  return [
    {
      id: 1,
      title: "Concept Introduction",
      duration: 10,
      icon: BookOpen,
      description: "Understanding the core idea and why it matters",
      category: "Theory",
      type: "concept-intro",
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
      type: "syntax-breakdown",
      data: {
        slideTitle: lesson.slides[1]?.title || "Syntax",
        points: lesson.slides[1]?.points || [],
      },
    },
    {
      id: 3,
      title: "Live Code Simulation",
      duration: 10,
      icon: Terminal,
      description: "Watch the code compile and run in real-time",
      category: "Practice",
      type: "live-code",
      data: {
        code: lesson.startingCode,
        fileName: "main.cpp",
      },
    },
    {
      id: 4,
      title: "System Visualization",
      duration: 10,
      icon: Layers,
      description: "Under-the-hood memory layout and behavior",
      category: "Systems",
      type: "memory-diagram",
      data: {
        slideTitle: lesson.slides[2]?.title || "Systems View",
        points: lesson.slides[2]?.points || [],
      },
    },
    {
      id: 5,
      title: "Pitfalls & Best Practices",
      duration: 10,
      icon: AlertTriangle,
      description: "Common mistakes and how to avoid them",
      category: "Safety",
      type: "pitfalls",
      data: {
        takeaways: lesson.summary.takeaways,
        points: lesson.slides[3]?.points || [],
      },
    },
    {
      id: 6,
      title: "Try It Yourself",
      duration: 10,
      icon: Play,
      description: "Open the sandbox and practice",
      category: "Action",
      type: "cta",
      data: {
        objectives: lesson.summary.objectives,
      },
    },
  ];
}
