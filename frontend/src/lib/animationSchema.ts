/**
 * Animation Schema for perfectly-timed code playback with narrator synchronization
 * Defines the structure for animated lessons that sync code reveals with narration
 */

export interface CodeLineAnimation {
  lineNumber: number;
  content: string;
  startTime: number; // ms from lesson start
  duration: number; // ms to display this line
  narrationSegment?: {
    text: string;
    startTime: number;
    endTime: number;
  };
  highlight?: {
    type: "syntax" | "emphasis" | "error" | "output";
    color?: string;
  };
  terminal?: {
    command?: string; // Command to execute at this line
    output?: string; // Expected output
    showOutput: boolean;
    executeTime?: number; // When to run (relative to line start)
  };
}

export interface NarratorSegment {
  id: string;
  text: string;
  startTime: number; // ms
  endTime: number; // ms
  codeLineNumbers?: number[]; // Which code lines this narration covers
  pace: "slow" | "normal" | "fast";
}

export interface LessonScene {
  id: string;
  title: string;
  description: string;
  duration: number; // total seconds
  startTime: number; // ms from lesson start
  codeLanguage: string; // typescript, python, cpp, etc.
  initialCode?: string;
  codeLines: CodeLineAnimation[];
  narrator: {
    segments: NarratorSegment[];
    voiceId?: string;
    speed?: number; // 0.5 - 2.0x
  };
  terminal?: {
    visible: boolean;
    initialState?: string;
    commands?: Array<{
      time: number;
      command: string;
      expectedOutput?: string;
    }>;
  };
  objectives?: string[];
  keyPoints?: string[];
}

export interface AnimatedLesson {
  id: string;
  title: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedDuration: number; // seconds
  learningObjectives: string[];
  scenes: LessonScene[];
  metadata: {
    language: string;
    frameworks?: string[];
    concepts?: string[];
    difficulty: string;
    createdAt: string;
    generatedFrom?: string; // source activity ID
  };
}

/**
 * Timing utilities for animation synchronization
 */
export const AnimationTiming = {
  // Standard paces for code reveal (ms per character)
  CHAR_SPEEDS: {
    slow: 50,      // Good for beginners
    normal: 30,    // Standard pace
    fast: 15,      // For experienced learners
  },

  // Line duration ratios (narration time : code reveal time)
  REVEAL_RATIOS: {
    simultaneous: 1.0,  // Reveal while narrating
    before: 0.5,        // Reveal before narration
    after: 1.5,         // Reveal after narration starts
  },

  /**
   * Calculate optimal timing for a code line reveal
   */
  calculateLineRevealTime(
    lineContent: string,
    narrationDuration: number,
    pace: "slow" | "normal" | "fast" = "normal"
  ): { duration: number; charSpeed: number } {
    const charSpeed = this.CHAR_SPEEDS[pace];
    const contentDuration = lineContent.length * charSpeed;
    
    // Reveal should complete before next narration segment
    const revealDuration = Math.min(contentDuration, narrationDuration * 0.8);
    
    return {
      duration: revealDuration,
      charSpeed: (lineContent.length * revealDuration) / lineContent.length,
    };
  },

  /**
   * Build timeline of events for a scene
   */
  buildTimeline(scene: LessonScene): Array<{
    time: number;
    type: "codeReveal" | "narration" | "terminalCommand" | "terminalOutput";
    data: any;
  }> {
    const events: Array<any> = [];

    // Add code line reveals
    scene.codeLines.forEach((line) => {
      events.push({
        time: line.startTime,
        type: "codeReveal",
        data: line,
      });
      
      if (line.terminal?.command && line.terminal.executeTime !== undefined) {
        events.push({
          time: line.startTime + line.terminal.executeTime,
          type: "terminalCommand",
          data: line.terminal,
        });
      }
    });

    // Add narration segments
    scene.narrator.segments.forEach((segment) => {
      events.push({
        time: segment.startTime,
        type: "narration",
        data: segment,
      });
    });

    // Sort by time and return
    return events.sort((a, b) => a.time - b.time);
  },
};

/**
 * Example: How to structure timing for a React component lesson
 */
export function createTimedLessonExample(): AnimatedLesson {
  return {
    id: "react-hooks-intro",
    title: "Building a Dynamic Energy Widget with React Hooks",
    description: "Learn useState and useEffect by building a real-time telemetry widget",
    difficulty: "intermediate",
    estimatedDuration: 300, // 5 minutes
    learningObjectives: [
      "Understand React hooks (useState, useEffect)",
      "Create responsive components",
      "Handle real-time data updates",
    ],
    scenes: [
      {
        id: "scene-1",
        title: "Setting up the Widget",
        description: "Import dependencies and initialize state",
        duration: 60,
        startTime: 0,
        codeLanguage: "typescript",
        initialCode: "",
        codeLines: [
          {
            lineNumber: 1,
            content: 'import { useState, useEffect } from "react";',
            startTime: 0,
            duration: 2000,
            narrationSegment: {
              text: "First, we import React hooks - useState for managing component state and useEffect for side effects",
              startTime: 0,
              endTime: 4000,
            },
            highlight: { type: "syntax" },
          },
          {
            lineNumber: 2,
            content: 'import { ResponsiveContainer } from "recharts";',
            startTime: 2500,
            duration: 2000,
            highlight: { type: "syntax" },
          },
          {
            lineNumber: 3,
            content: "",
            startTime: 5000,
            duration: 0,
          },
          {
            lineNumber: 4,
            content: "export default function TelemetryWidget() {",
            startTime: 5000,
            duration: 1500,
            narrationSegment: {
              text: "Now we create our component function",
              startTime: 4200,
              endTime: 5500,
            },
            highlight: { type: "syntax" },
          },
          {
            lineNumber: 5,
            content: '  const [gridStatus, setStatus] = useState("ONLINE");',
            startTime: 6500,
            duration: 2500,
            narrationSegment: {
              text: "We use useState to create a state variable for grid status, initially set to ONLINE",
              startTime: 5500,
              endTime: 8000,
            },
            highlight: { type: "emphasis" },
            terminal: {
              showOutput: false,
            },
          },
        ],
        narrator: {
          segments: [
            {
              id: "narr-1",
              text: "First, we import React hooks - useState for managing component state and useEffect for side effects",
              startTime: 0,
              endTime: 4000,
              codeLineNumbers: [1],
              pace: "normal",
            },
            {
              id: "narr-2",
              text: "Now we create our component function",
              startTime: 4200,
              endTime: 5500,
              codeLineNumbers: [4],
              pace: "normal",
            },
            {
              id: "narr-3",
              text: "We use useState to create a state variable for grid status, initially set to ONLINE",
              startTime: 5500,
              endTime: 8000,
              codeLineNumbers: [5],
              pace: "normal",
            },
          ],
          speed: 1,
        },
        terminal: {
          visible: true,
          initialState: "~/src $",
        },
      },
    ],
    metadata: {
      language: "typescript",
      frameworks: ["React"],
      concepts: ["hooks", "state management", "functional components"],
      difficulty: "intermediate",
      createdAt: new Date().toISOString(),
    },
  };
}
