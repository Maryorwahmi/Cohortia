export interface SpeechNarrationOptions {
  voice?: SpeechSynthesisVoice | null;
  rate?: number;
  pitch?: number;
  onSpeakingChange?: (isSpeaking: boolean) => void;
  onComplete?: () => void;
}

const SYMBOL_WORDS: Array<[RegExp, string]> = [
  [/===/g, " is exactly equal to "],
  [/!==/g, " is not exactly equal to "],
  [/=>/g, " arrow function "],
  [/!=/g, " is not equal to "],
  [/==/g, " is equal to "],
  [/>=/g, " is greater than or equal to "],
  [/<=/g, " is less than or equal to "],
  [/\+/g, " plus "],
  [/:/g, ". "],
  [/\//g, " slash "],
];

/** Convert markdown and code-like punctuation into words that browser voices handle better. */
export function prepareSpeechText(value: string): string {
  let text = String(value || "")
    .replace(/```[a-zA-Z0-9_-]*\s*/g, "")
    .replace(/```/g, "")
    .replace(/^\s{0,3}#{1,6}\s*/gm, "")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/__(.*?)__/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\bAPI\b/g, "A P I")
    .replace(/\bSQL\b/g, "S Q L")
    .replace(/\bHTML\b/g, "H T M L")
    .replace(/\bCSS\b/g, "C S S")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_]+/g, " ");

  for (const [pattern, replacement] of SYMBOL_WORDS) {
    text = text.replace(pattern, replacement);
  }

  return text
    .replace(/[{}[\]()*#<>|;]/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\s+([,.!?])/g, "$1")
    .trim();
}

/** Keep browser speech utterances short enough to avoid silent mid-sentence cutoffs. */
export function splitSpeechText(value: string, maxCharacters = 220): string[] {
  const text = prepareSpeechText(value);
  if (!text) return [];

  return text
    .split(/(?<=[.!?])\s+/)
    .reduce<string[]>((chunks, sentence) => {
      if (!sentence) return chunks;
      const previous = chunks[chunks.length - 1];
      if (previous && `${previous} ${sentence}`.length <= maxCharacters) {
        chunks[chunks.length - 1] = `${previous} ${sentence}`;
      } else {
        chunks.push(sentence);
      }
      return chunks;
    }, []);
}

export function estimateSpeechDurationSeconds(value: string, rate = 0.9): number {
  const words = prepareSpeechText(value).split(/\s+/).filter(Boolean).length;
  return Math.max(2, (words / (145 * rate)) * 60 + 0.8);
}

/** A small cancellable queue shared by the practical workspaces. */
export class SpeechNarrationQueue {
  private chunks: string[] = [];
  private generation = 0;

  play(value: string, options: SpeechNarrationOptions = {}) {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    this.cancel();
    this.chunks = splitSpeechText(value);
    if (this.chunks.length === 0) return;

    const generation = ++this.generation;
    options.onSpeakingChange?.(true);

    const speakNext = (index: number) => {
      if (generation !== this.generation || index >= this.chunks.length) {
        if (generation === this.generation) {
          options.onSpeakingChange?.(false);
          options.onComplete?.();
        }
        return;
      }

      const utterance = new SpeechSynthesisUtterance(this.chunks[index]);
      if (options.voice) utterance.voice = options.voice;
      utterance.rate = options.rate ?? 0.9;
      utterance.pitch = options.pitch ?? 1;
      utterance.onend = () => window.setTimeout(() => speakNext(index + 1), 120);
      utterance.onerror = (event) => {
        if (event.error !== "canceled" && event.error !== "interrupted") {
          window.setTimeout(() => speakNext(index + 1), 120);
        } else if (generation === this.generation) {
          options.onSpeakingChange?.(false);
        }
      };
      window.speechSynthesis.speak(utterance);
    };

    speakNext(0);
  }

  cancel() {
    this.generation += 1;
    this.chunks = [];
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }
}
