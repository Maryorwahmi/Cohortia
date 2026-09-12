/**
 * Practical Activity to Interactive Class Generator
 * Converts hands-on activities into animated, narrator-synced lessons
 */

import type { AnimatedLesson, LessonScene, CodeLineAnimation, NarratorSegment } from "./animationSchema";
import { estimateSpeechDurationSeconds } from "./speechNarration";

export interface HandsOnActivity {
  id: string;
  title: string;
  description: string;
  language: string; // typescript, python, cpp, etc.
  difficulty: "beginner" | "intermediate" | "advanced";
  objectives: string[];
  code: string; // The code to teach
  concepts: string[];
  expectedOutput?: string;
  commonMistakes?: string[];
  estimatedDuration?: number; // seconds
}

export interface GenerationOptions {
  intensity: "light" | "standard" | "intensive"; // How thorough
  pacing: "slow" | "normal" | "fast"; // Narration/reveal pace
  includeTerminal: boolean; // Show terminal/compile-and-run
  narrationStyle: "technical" | "conversational" | "teaching"; // Tone
  sceneDivision: "linear" | "conceptual" | "mixed"; // How to split scenes
}

export class PracticalClassGenerator {
  private apiKey: string;

  constructor(apiKey?: string) {
    this.apiKey = apiKey || process.env.REACT_APP_GOOGLE_GENAI_API_KEY || "";
  }

  /**
   * Main entry point: Convert a hands-on activity to an animated lesson
   */
  async generateLessonFromActivity(
    activity: HandsOnActivity,
    options: Partial<GenerationOptions> = {}
  ): Promise<AnimatedLesson> {
    const mergedOptions = this.mergeOptions(options);

    // Step 1: Parse and analyze the code
    const codeAnalysis = await this.analyzeCode(activity.code, activity.language);

    // Step 2: Create a structure/outline
    const outline = await this.createLessonOutline(activity, codeAnalysis, mergedOptions);

    // Step 3: Generate scenes
    const scenes = await this.generateScenes(
      activity,
      codeAnalysis,
      outline,
      mergedOptions
    );

    // Step 4: Assemble into AnimatedLesson
    const lesson: AnimatedLesson = {
      id: `lesson-${activity.id}-${Date.now()}`,
      title: `${activity.title} - Interactive Training`,
      description: activity.description,
      difficulty: activity.difficulty,
      estimatedDuration: scenes.reduce((sum, s) => sum + s.duration, 0),
      learningObjectives: activity.objectives,
      scenes,
      metadata: {
        language: activity.language,
        frameworks: codeAnalysis.frameworks,
        concepts: activity.concepts,
        difficulty: activity.difficulty,
        createdAt: new Date().toISOString(),
        generatedFrom: activity.id,
      },
    };

    return lesson;
  }

  /**
   * Analyze code structure to identify key concepts and sections
   */
  private async analyzeCode(
    code: string,
    language: string
  ): Promise<{
    lines: string[];
    keyLines: number[]; // Important lines to highlight
    frameworks: string[];
    patterns: string[];
    sections: Array<{ startLine: number; endLine: number; title: string }>;
  }> {
    const lines = code.split("\n");

    // Basic code analysis (expandable with AI)
    const frameworks = this.detectFrameworks(code, language);
    const patterns = this.detectPatterns(code, language);
    const sections = this.identifySections(code, language);
    const keyLines = this.findKeyLines(code, language);

    return {
      lines,
      keyLines,
      frameworks,
      patterns,
      sections,
    };
  }

  /**
   * Create lesson outline from activity and analysis
   */
  private async createLessonOutline(
    activity: HandsOnActivity,
    analysis: any,
    options: GenerationOptions
  ): Promise<{
    sceneCount: number;
    sceneStructure: Array<{
      title: string;
      description: string;
      lineRange: [number, number];
      concepts: string[];
    }>;
  }> {
    // Divide code into scenes based on options
    const sceneCount = this.calculateSceneCount(
      activity.estimatedDuration || 300,
      options.intensity
    );

    let sceneStructure = [];

    if (options.sceneDivision === "linear") {
      sceneStructure = this.divideLinear(
        analysis.lines,
        sceneCount,
        analysis.sections
      );
    } else if (options.sceneDivision === "conceptual") {
      sceneStructure = this.divideByConcept(
        analysis.lines,
        activity.concepts,
        analysis.sections
      );
    } else {
      sceneStructure = this.divideMixed(
        analysis.lines,
        sceneCount,
        activity.concepts,
        analysis.sections
      );
    }

    return { sceneCount, sceneStructure };
  }

  /**
   * Generate animated scenes with timing data
   */
  private async generateScenes(
    activity: HandsOnActivity,
    analysis: any,
    outline: any,
    options: GenerationOptions
  ): Promise<LessonScene[]> {
    const scenes: LessonScene[] = [];
    let currentStartTime = 0;

    for (const sceneOutline of outline.sceneStructure) {
      const scene = await this.generateScene(
        activity,
        analysis,
        sceneOutline,
        currentStartTime,
        options
      );

      scenes.push(scene);
      currentStartTime += scene.duration * 1000;
    }

    return scenes;
  }

  /**
   * Generate a single scene with code lines and narrator segments
   */
  private async generateScene(
    activity: HandsOnActivity,
    analysis: any,
    sceneOutline: any,
    startTime: number,
    options: GenerationOptions
  ): Promise<LessonScene> {
    const { startLine, endLine, title, description, concepts } = sceneOutline;
    const codeLines = analysis.lines.slice(startLine, endLine + 1);

    // Generate narration for this scene
    const narration = await this.generateNarration(
      {
        codeSection: codeLines,
        concepts,
        title,
        description,
        language: activity.language,
        objectives: activity.objectives,
      },
      options
    );

    // Create code line animations with precise timing
    const codeLineAnimations = this.createCodeLineAnimations(
      codeLines,
      narration,
      startLine + 1,
      options
    );

    // Create terminal commands if needed
    const terminal = options.includeTerminal
      ? this.generateTerminalCommands(codeLines, activity.language)
      : undefined;

    const lastCodeLine = codeLineAnimations[codeLineAnimations.length - 1];
    const codeDuration = lastCodeLine
      ? lastCodeLine.startTime + lastCodeLine.duration + 400
      : 0;
    const narrationDuration = narration.segments[narration.segments.length - 1]?.endTime || 0;
    const duration = Math.max(codeDuration, narrationDuration) / 1000;

    const scene: LessonScene = {
      id: `scene-${startLine}`,
      title,
      description: description || `Building on ${concepts.join(", ")}`,
      duration,
      startTime,
      codeLanguage: activity.language,
      codeLines: codeLineAnimations,
      narrator: narration,
      terminal: terminal ? { visible: true, ...terminal } : undefined,
      objectives: [description],
      keyPoints: concepts,
    };

    return scene;
  }

  /**
   * Generate narration text and timing for code section
   */
  private async generateNarration(
    context: {
      codeSection: string[];
      concepts: string[];
      title: string;
      description: string;
      language: string;
      objectives?: string[];
    },
    options: GenerationOptions
  ): Promise<{
    segments: NarratorSegment[];
  }> {
    // For now, create template narration (can be replaced with AI API call)
    const segments: NarratorSegment[] = [];

    let currentTime = 0;

    // Opening narration
    const openingText = this.generateOpeningNarration(context, options);
    const openingDuration = this.narrationDuration(openingText, options);
    segments.push({
      id: "opening",
      text: openingText,
      startTime: currentTime,
      endTime: (currentTime += openingDuration),
      pace: options.pacing,
      codeLineNumbers: [],
    });

    // Line-by-line explanations
    context.codeSection.forEach((line, idx) => {
      if (line.trim()) {
        const lineNarration = this.generateLineNarration(line, context.language, context.concepts);
        const lineDuration = this.narrationDuration(lineNarration, options);
        segments.push({
          id: `line-${idx}`,
          text: lineNarration,
          startTime: currentTime,
          endTime: (currentTime += lineDuration),
          codeLineNumbers: [idx],
          pace: options.pacing,
        });
      }
    });

    // Closing narration
    const closingText = this.generateClosingNarration(context, options);
    const closingDuration = this.narrationDuration(closingText, options);
    segments.push({
      id: "closing",
      text: closingText,
      startTime: currentTime,
      endTime: (currentTime += closingDuration),
      pace: options.pacing,
      codeLineNumbers: [],
    });

    return { segments };
  }

  /**
   * Create animated code line objects with reveal timing
   */
  private createCodeLineAnimations(
    codeLines: string[],
    narration: any,
    startLineNumber: number,
    options: GenerationOptions
  ): CodeLineAnimation[] {
    const animations: CodeLineAnimation[] = [];
    let currentTime = 0;

    const charSpeeds = { slow: 50, normal: 30, fast: 15 };
    const charSpeed = charSpeeds[options.pacing];

    codeLines.forEach((line, idx) => {
      if (line.trim()) {
        const duration = line.length * charSpeed;
        const lineNumber = startLineNumber + idx;

        // Find corresponding narration segment
        const correspondingNarration = narration.segments.find(
          (seg: any) => seg.codeLineNumbers?.includes(idx)
        );

        animations.push({
          lineNumber,
          content: line,
          startTime: currentTime,
          duration,
          narrationSegment: correspondingNarration
            ? {
                text: correspondingNarration.text,
                startTime: correspondingNarration.startTime,
                endTime: correspondingNarration.endTime,
              }
            : undefined,
          highlight: this.detectHighlight(line, options),
        });

        currentTime += duration + 200; // Add gap between lines
      }
    });

    return animations;
  }

  /**
   * Generate terminal commands for testing/compilation
   */
  private generateTerminalCommands(codeLines: string[], language: string): any {
    const commands = [];

    // Detect what commands make sense
    if (language === "typescript" || language === "javascript") {
      commands.push({
        time: codeLines.length * 500,
        command: "npm run build",
        expectedOutput: "Successfully compiled",
      });
      commands.push({
        time: codeLines.length * 500 + 2000,
        command: "npm test",
        expectedOutput: "All tests passed",
      });
    } else if (language === "python") {
      commands.push({
        time: codeLines.length * 500,
        command: "python script.py",
        expectedOutput: "[output from script]",
      });
    } else if (language === "cpp") {
      commands.push({
        time: codeLines.length * 500,
        command: "g++ -o program script.cpp",
        expectedOutput: "Compilation successful",
      });
      commands.push({
        time: codeLines.length * 500 + 1000,
        command: "./program",
        expectedOutput: "[program output]",
      });
    }

    return { commands };
  }

  /**
   * Helper methods for code analysis
   */

  private detectFrameworks(code: string, language: string): string[] {
    const frameworks: string[] = [];

    if (code.includes("React") || code.includes("import React")) {
      frameworks.push("React");
    }
    if (code.includes("useState") || code.includes("useEffect")) {
      frameworks.push("React Hooks");
    }
    if (code.includes("express") || code.includes("app.get")) {
      frameworks.push("Express");
    }
    if (code.includes("async") || code.includes("await")) {
      frameworks.push("Async/Await");
    }

    return frameworks;
  }

  private detectPatterns(code: string, language: string): string[] {
    const patterns: string[] = [];

    if (code.includes("class ")) patterns.push("Object-Oriented");
    if (code.includes("=>")) patterns.push("Arrow Functions");
    if (code.includes("...")) patterns.push("Spread Operator");
    if (code.includes("for (")) patterns.push("Loops");
    if (code.includes("if (")) patterns.push("Conditionals");

    return patterns;
  }

  private identifySections(
    code: string,
    language: string
  ): Array<{ startLine: number; endLine: number; title: string }> {
    const lines = code.split("\n");
    const sections = [];
    let currentSection = 0;
    let sectionStart = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Look for comment headers or function/class declarations
      if (line.includes("//") && !line.trim().startsWith("//")) {
        if (currentSection > 0) {
          sections.push({
            startLine: sectionStart,
            endLine: i - 1,
            title: `Section ${currentSection}`,
          });
        }
        sectionStart = i;
        currentSection++;
      }
    }

    if (currentSection > 0) {
      sections.push({
        startLine: sectionStart,
        endLine: lines.length - 1,
        title: `Section ${currentSection}`,
      });
    }

    return sections.length > 0
      ? sections
      : [{ startLine: 0, endLine: lines.length - 1, title: "Main Code" }];
  }

  private findKeyLines(code: string, language: string): number[] {
    const lines = code.split("\n");
    const keyLines: number[] = [];

    lines.forEach((line, idx) => {
      if (
        line.includes("export") ||
        line.includes("return") ||
        line.includes("setState") ||
        line.includes("useEffect") ||
        line.includes("function")
      ) {
        keyLines.push(idx);
      }
    });

    return keyLines;
  }

  private calculateSceneCount(duration: number, intensity: string): number {
    const baseScenes = Math.ceil(duration / 60); // 1 scene per minute base
    if (intensity === "light") return Math.max(baseScenes - 1, 1);
    if (intensity === "intensive") return baseScenes + 2;
    return baseScenes;
  }

  private divideLinear(lines: string[], count: number, sections: any[]): any[] {
    const result = [];
    const linePerScene = Math.ceil(lines.length / count);

    for (let i = 0; i < count; i++) {
      const start = i * linePerScene;
      const end = Math.min((i + 1) * linePerScene - 1, lines.length - 1);

      result.push({
        startLine: start,
        endLine: end,
        title: `Scene ${i + 1}: Building the Solution`,
        description: `Lines ${start + 1}-${end + 1}`,
        concepts: [],
      });
    }

    return result;
  }

  private divideByConcept(lines: string[], concepts: string[], sections: any[]): any[] {
    // Group by concept
    return sections.map((section, idx) => ({
      startLine: section.startLine,
      endLine: section.endLine,
      title: `${concepts[idx] || "Concept"} Implementation`,
      description: section.title,
      concepts: [concepts[idx] || ""],
    }));
  }

  private divideMixed(lines: string[], count: number, concepts: string[], sections: any[]): any[] {
    // Combination of both approaches
    return this.divideLinear(lines, count, sections).map((scene, idx) => ({
      ...scene,
      concepts: [concepts[idx % concepts.length] || ""],
    }));
  }

  private generateOpeningNarration(context: any, options: GenerationOptions): string {
    const objective = context.objectives?.[0] || `understand ${context.concepts.join(", ") || "the main idea"}`;
    const conversational = options.narrationStyle === "conversational" || options.narrationStyle === "teaching";
    return conversational
      ? `Let's work through ${context.title.toLowerCase()} together. The goal is to ${objective.toLowerCase()}. I will make one change at a time, explain why it matters, and then verify the result before we continue.`
      : `This section implements ${context.title.toLowerCase()}. We will connect the code to ${objective.toLowerCase()}, then verify the behavior.`;
  }

  private generateLineNarration(line: string, language: string, concepts: string[]): string {
    const cleanLine = line.trim().replace(/\/\/.*/, "").trim();
    const concept = concepts[0] || "the current behavior";
    if (!cleanLine) return `This space separates the previous idea from the next part of ${concept}.`;
    if (/^(import|from)\b/.test(cleanLine)) {
      return `We import the dependency needed for ${concept}. Keeping dependencies explicit makes the program easier to understand and maintain.`;
    }
    if (/^(def|function)\b|\bfunction\s+\w+/.test(cleanLine)) {
      return `We define a reusable function here. A function gives this behavior a clear name, accepts controlled inputs, and keeps the rest of the program easier to test.`;
    }
    if (/^class\b/.test(cleanLine)) {
      return `We define a class to group related data and behavior. This creates a reusable structure for the objects our program will work with.`;
    }
    if (/\b(if|elif|else)\b/.test(cleanLine)) {
      return `This is a decision point. The program checks a condition and chooses the branch that matches the current data, which is how we make the behavior respond to real input.`;
    }
    if (/\b(for|while)\b/.test(cleanLine)) {
      return `This loop repeats the operation for each item or until the condition changes. Repetition lets us handle a collection without writing the same instruction over and over.`;
    }
    if (/\breturn\b/.test(cleanLine)) {
      return `This returns the result produced by the function. Returning a value gives the calling code something it can display, store, or test.`;
    }
    if (/\bprint\s*\(|console\.log/.test(cleanLine)) {
      return `This displays a result so we can inspect what the program produced. The output is our first feedback signal before we run the formal checks.`;
    }
    if (/\b(const|let|var)\b|\w+\s*=/.test(cleanLine)) {
      return `We store a value in a named variable. Giving the value a meaningful name lets later instructions use the same data and makes the intention visible to the learner.`;
    }
    return `This instruction contributes to ${concept}. Read it as part of the larger flow: it prepares data, applies the rule, or connects this step to the result we want to verify.`;
  }

  private generateClosingNarration(context: any, options: GenerationOptions): string {
    const concepts = context.concepts.length > 0 ? context.concepts.join(", ") : "the implementation";
    return `Pause here and connect the pieces. We used ${concepts} to move from an intention to working behavior. Before continuing, run the example, compare the result with your expectation, and explain in your own words why this implementation works.`;
  }

  private narrationDuration(text: string, options: GenerationOptions): number {
    const paceRate = options.pacing === "slow" ? 0.78 : options.pacing === "fast" ? 1.02 : 0.9;
    return Math.round(estimateSpeechDurationSeconds(text, paceRate) * 1000);
  }

  private detectHighlight(line: string, options: GenerationOptions): any {
    if (line.includes("return")) return { type: "emphasis" };
    if (line.includes("import") || line.includes("export")) return { type: "syntax" };
    if (line.includes("error") || line.includes("Error")) return { type: "error" };
    return { type: "syntax" };
  }

  private mergeOptions(options: Partial<GenerationOptions>): GenerationOptions {
    return {
      intensity: options.intensity || "standard",
      pacing: options.pacing || "normal",
      includeTerminal: options.includeTerminal !== false,
      narrationStyle: options.narrationStyle || "technical",
      sceneDivision: options.sceneDivision || "mixed",
    };
  }
}

/**
 * Factory function for quick generation
 */
export async function generateClassFromActivity(
  activity: HandsOnActivity,
  options?: Partial<GenerationOptions>
): Promise<AnimatedLesson> {
  const generator = new PracticalClassGenerator();
  return generator.generateLessonFromActivity(activity, options);
}
