/**
 * Animation Engine
 * Handles synchronized playback of code reveals, narration, and terminal execution
 */

import type { AnimatedLesson, LessonScene, CodeLineAnimation, NarratorSegment } from "./animationSchema";

export interface AnimationState {
  currentTime: number; // ms
  isPlaying: boolean;
  currentSceneIndex: number;
  revealedLines: Set<number>;
  activeNarration: NarratorSegment | null;
  pendingTerminalCommands: Array<{
    time: number;
    command: string;
    output?: string;
  }>;
  executedCommands: Set<string>;
}

export class AnimationEngine {
  private lesson: AnimatedLesson;
  private state: AnimationState;
  private callbacks: Map<string, Function[]> = new Map();
  private frameId: number | null = null;
  private startTime: number = 0;
  private pausedTime: number = 0;

  constructor(lesson: AnimatedLesson) {
    this.lesson = lesson;
    this.state = {
      currentTime: 0,
      isPlaying: false,
      currentSceneIndex: 0,
      revealedLines: new Set(),
      activeNarration: null,
      pendingTerminalCommands: [],
      executedCommands: new Set(),
    };
  }

  /**
   * Subscribe to animation events
   */
  on(event: string, callback: Function) {
    if (!this.callbacks.has(event)) {
      this.callbacks.set(event, []);
    }
    this.callbacks.get(event)!.push(callback);
  }

  /**
   * Unsubscribe from animation events
   */
  off(event: string, callback: Function) {
    const callbacks = this.callbacks.get(event);
    if (callbacks) {
      const index = callbacks.indexOf(callback);
      if (index > -1) callbacks.splice(index, 1);
    }
  }

  /**
   * Emit event to all subscribers
   */
  private emit(event: string, data?: any) {
    const callbacks = this.callbacks.get(event) || [];
    callbacks.forEach((cb) => cb(data));
  }

  /**
   * Start animation playback
   */
  play() {
    if (this.state.isPlaying) return;

    this.state.isPlaying = true;
    
    if (this.startTime === 0) {
      this.startTime = performance.now() - this.pausedTime;
    }

    const animate = (timestamp: number) => {
      if (!this.state.isPlaying) return;

      const elapsed = timestamp - this.startTime;
      this.state.currentTime = elapsed;
      this.pausedTime = elapsed;

      this.updateAnimationState();
      this.emit("timeUpdate", elapsed);

      this.frameId = requestAnimationFrame(animate);
    };

    this.frameId = requestAnimationFrame(animate);
    this.emit("play");
  }

  /**
   * Pause animation playback
   */
  pause() {
    this.state.isPlaying = false;
    if (this.frameId !== null) {
      cancelAnimationFrame(this.frameId);
      this.frameId = null;
    }
    this.emit("pause");
  }

  /**
   * Seek to specific time
   */
  seek(timeMs: number) {
    this.pause();
    this.state.currentTime = timeMs;
    this.pausedTime = timeMs;
    this.startTime = performance.now() - timeMs;
    
    // Reset state and recalculate from beginning
    this.state.revealedLines.clear();
    this.state.executedCommands.clear();
    
    // Rebuild state up to current time
    for (let t = 0; t <= timeMs; t += 16.67) {
      this.state.currentTime = t;
      this.updateAnimationState();
    }

    this.state.currentTime = timeMs;
    this.emit("seek", timeMs);
  }

  /**
   * Reset to beginning
   */
  reset() {
    this.pause();
    this.startTime = 0;
    this.pausedTime = 0;
    this.state.currentTime = 0;
    this.state.revealedLines.clear();
    this.state.activeNarration = null;
    this.state.pendingTerminalCommands = [];
    this.state.executedCommands.clear();
    this.emit("reset");
  }

  /**
   * Jump to next scene
   */
  nextScene() {
    if (this.state.currentSceneIndex < this.lesson.scenes.length - 1) {
      this.state.currentSceneIndex++;
      this.reset();
      this.emit("sceneChange", this.state.currentSceneIndex);
    }
  }

  /**
   * Jump to previous scene
   */
  previousScene() {
    if (this.state.currentSceneIndex > 0) {
      this.state.currentSceneIndex--;
      this.reset();
      this.emit("sceneChange", this.state.currentSceneIndex);
    }
  }

  /**
   * Update animation state based on current time
   */
  private updateAnimationState() {
    const scene = this.lesson.scenes[this.state.currentSceneIndex];
    if (!scene) return;

    const t = this.state.currentTime;

    // Update revealed lines
    scene.codeLines.forEach((line) => {
      if (
        t >= line.startTime &&
        t < line.startTime + line.duration &&
        !this.state.revealedLines.has(line.lineNumber)
      ) {
        this.state.revealedLines.add(line.lineNumber);
        this.emit("lineRevealed", line);
      }
    });

    // Update active narration
    const activeNarr = scene.narrator.segments.find(
      (seg) => t >= seg.startTime && t <= seg.endTime
    );
    
    if (activeNarr && activeNarr !== this.state.activeNarration) {
      this.state.activeNarration = activeNarr;
      this.emit("narrationChange", activeNarr);
    }

    // Handle terminal commands
    scene.codeLines.forEach((line) => {
      if (
        line.terminal?.command &&
        line.terminal.executeTime !== undefined &&
        t >= line.startTime + line.terminal.executeTime &&
        !this.state.executedCommands.has(line.terminal.command)
      ) {
        this.state.executedCommands.add(line.terminal.command);
        this.emit("terminalCommand", {
          command: line.terminal.command,
          output: line.terminal.output,
          lineNumber: line.lineNumber,
        });
      }
    });

    // Check if scene is complete
    if (t > scene.duration * 1000) {
      this.pause();
      if (this.state.currentSceneIndex === this.lesson.scenes.length - 1) {
        this.emit("complete");
      }
    }
  }

  /**
   * Get current state
   */
  getState(): Readonly<AnimationState> {
    return Object.freeze({ ...this.state });
  }

  /**
   * Get current scene
   */
  getCurrentScene(): LessonScene {
    return this.lesson.scenes[this.state.currentSceneIndex];
  }

  /**
   * Get code line reveal progress (0-1)
   */
  getLineProgress(line: CodeLineAnimation): number {
    const t = this.state.currentTime;
    const elapsed = t - line.startTime;

    if (elapsed < 0) return 0;
    if (elapsed > line.duration) return 1;

    return elapsed / line.duration;
  }

  /**
   * Get narration progress (0-1)
   */
  getNarrationProgress(segment: NarratorSegment): number {
    const t = this.state.currentTime;
    const elapsed = t - segment.startTime;
    const duration = segment.endTime - segment.startTime;

    if (elapsed < 0) return 0;
    if (elapsed > duration) return 1;

    return elapsed / duration;
  }

  /**
   * Format time for display
   */
  formatTime(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  /**
   * Get total duration of current scene
   */
  getSceneDuration(): number {
    return this.getCurrentScene().duration * 1000;
  }

  /**
   * Get total duration of entire lesson
   */
  getLessonDuration(): number {
    return this.lesson.scenes.reduce((sum, scene) => sum + scene.duration * 1000, 0);
  }

  /**
   * Helper: Calculate timing for code reveal
   */
  static calculateCodeTiming(
    lines: string[],
    narrationDuration: number,
    pace: "slow" | "normal" | "fast" = "normal"
  ): Array<{ lineNumber: number; startTime: number; duration: number }> {
    const charSpeeds = { slow: 50, normal: 30, fast: 15 };
    const charSpeed = charSpeeds[pace];
    
    const lineDurations = lines.map((line) => line.length * charSpeed);
    const totalLineDuration = lineDurations.reduce((a, b) => a + b, 0);
    
    // Scale to fit narration time
    const scale = Math.min(narrationDuration / totalLineDuration, 1.5);
    
    let currentTime = 0;
    return lines.map((line, idx) => {
      const duration = lineDurations[idx] * scale;
      const result = { lineNumber: idx + 1, startTime: currentTime, duration };
      currentTime += duration;
      return result;
    });
  }
}

/**
 * Hook for using animation engine in React
 */
export function useAnimationEngine(lesson: AnimatedLesson) {
  const engineRef = React.useRef<AnimationEngine>(new AnimationEngine(lesson));
  const [state, setState] = React.useState<AnimationState>(engineRef.current.getState());

  React.useEffect(() => {
    const engine = engineRef.current;
    
    const updateState = () => setState(engine.getState());

    engine.on("timeUpdate", updateState);
    engine.on("lineRevealed", updateState);
    engine.on("narrationChange", updateState);
    engine.on("sceneChange", updateState);
    engine.on("play", updateState);
    engine.on("pause", updateState);
    engine.on("reset", updateState);

    return () => {
      engine.off("timeUpdate", updateState);
      engine.off("lineRevealed", updateState);
      engine.off("narrationChange", updateState);
      engine.off("sceneChange", updateState);
      engine.off("play", updateState);
      engine.off("pause", updateState);
      engine.off("reset", updateState);
    };
  }, []);

  return {
    engine: engineRef.current,
    state,
    isPlaying: state.isPlaying,
    currentTime: state.currentTime,
    currentScene: engineRef.current.getCurrentScene(),
    revealedLines: state.revealedLines,
    activeNarration: state.activeNarration,
  };
}

import React from "react";
