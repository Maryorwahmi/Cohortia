/**
 * Practical Mode Integration Component
 * Shows how to use Terminal Lab with the animation engine and class generator
 */

import React, { useState, useEffect } from "react";
import TerminalLab from "./TerminalLab";
import { useAnimationEngine } from "../../lib/animationEngine";
import { generateClassFromActivity } from "../../lib/practicalClassGenerator";
import type { AnimatedLesson } from "../../lib/animationSchema";
import type { HandsOnActivity } from "../../lib/practicalClassGenerator";
import { Loader, AlertCircle } from "lucide-react";

interface PracticalModeProps {
  activityId?: string;
  activity?: HandsOnActivity;
  onComplete?: () => void;
}

export default function PracticalMode({ activity, onComplete }: PracticalModeProps) {
  const [lesson, setLesson] = useState<AnimatedLesson | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);

  // Generate lesson from activity on mount
  useEffect(() => {
    if (!activity) return;

    const generate = async () => {
      setIsGenerating(true);
      setError(null);

      try {
        // Example of converting a hands-on activity to full lesson
        const generatedLesson = await generateClassFromActivity(activity, {
          intensity: "intensive", // Detailed, comprehensive training
          pacing: "normal", // Standard pace
          includeTerminal: true, // Include terminal for testing
          narrationStyle: "teaching", // Educational tone
          sceneDivision: "conceptual", // Divide by key concepts
        });

        setLesson(generatedLesson);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to generate lesson"
        );
      } finally {
        setIsGenerating(false);
      }
    };

    generate();
  }, [activity]);

  if (!activity) {
    return (
      <div className="flex items-center justify-center h-full bg-slate-950 text-slate-300">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No activity selected</p>
        </div>
      </div>
    );
  }

  if (isGenerating) {
    return (
      <div className="flex items-center justify-center h-full bg-slate-950">
        <div className="text-center">
          <Loader className="w-12 h-12 mx-auto mb-4 animate-spin text-blue-400" />
          <p className="text-slate-300">Generating interactive lesson...</p>
          <p className="text-xs text-slate-500 mt-2">
            Creating perfectly-timed animations and narration
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full bg-slate-950">
        <div className="text-center max-w-md">
          <AlertCircle className="w-12 h-12 mx-auto mb-4 text-red-400" />
          <p className="text-slate-300 font-semibold mb-2">Error</p>
          <p className="text-slate-400 text-sm">{error}</p>
        </div>
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="flex items-center justify-center h-full bg-slate-950 text-slate-300">
        <p>No lesson generated</p>
      </div>
    );
  }

  return (
    <TerminalLab
      lesson={lesson}
      activeSceneIndex={activeSceneIndex}
      onSceneChange={setActiveSceneIndex}
      onComplete={onComplete}
    />
  );
}

/**
 * Example: How to use Practical Mode in your dashboard
 *
 * const activity: HandsOnActivity = {
 *   id: "react-hooks-01",
 *   title: "Building a Dynamic Energy Widget",
 *   description: "Learn useState and useEffect by building real-time telemetry",
 *   language: "typescript",
 *   difficulty: "intermediate",
 *   objectives: [
 *     "Understand React hooks",
 *     "Create responsive components",
 *     "Handle real-time updates",
 *   ],
 *   code: `
 *     import { useState, useEffect } from "react";
 *     import { ResponsiveContainer, LineChart, Line } from "recharts";
 *
 *     export default function TelemetryWidget() {
 *       const [gridStatus, setStatus] = useState("ONLINE");
 *       const [data, setData] = useState([]);
 *
 *       useEffect(() => {
 *         const interval = setInterval(() => {
 *           setData(prev => [...prev, { time: Date.now(), value: Math.random() }]);
 *           setStatus(Math.random() > 0.5 ? "ONLINE" : "PROCESSING");
 *         }, 1000);
 *
 *         return () => clearInterval(interval);
 *       }, []);
 *
 *       return (
 *         <div>
 *           <h2>Status: {gridStatus}</h2>
 *           <ResponsiveContainer width="100%" height={300}>
 *             <LineChart data={data}>
 *               <Line type="monotone" dataKey="value" />
 *             </LineChart>
 *           </ResponsiveContainer>
 *         </div>
 *       );
 *     }
 *   `,
 *   concepts: ["hooks", "state", "effects", "component lifecycle"],
 *   estimatedDuration: 300,
 * };
 *
 * <PracticalMode activity={activity} />
 */
