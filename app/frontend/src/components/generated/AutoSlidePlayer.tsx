import { useState, useEffect, useCallback, useRef } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import ScreenRenderer from './ScreenRenderer';

interface Screen {
  screen: number;
  title: string;
  type: string;
  durationSeconds: number;
  narratorSegment: string;
  content: Record<string, unknown>;
  designNotes?: string;
  layout?: string;
}

interface Manifest {
  course: string;
  courseId: string;
  module: number;
  chapter: number;
  unitTitle: string;
  screens: Screen[];
  fullNarratorScript?: string;
  generatedAt?: string;
}

interface AutoSlidePlayerProps {
  manifest: Manifest;
  onComplete?: () => void;
}

function StageBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Slow-moving gradient orbs */}
      <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-[#FF4B3E]/10 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] rounded-full bg-purple-600/10 blur-[100px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
      <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[100px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}

export default function AutoSlidePlayer({ manifest, onComplete }: AutoSlidePlayerProps) {
  const screens = manifest.screens || [];
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [speechFinished, setSpeechFinished] = useState(false);
  const [assessmentAnswered, setAssessmentAnswered] = useState(false);
  const [assessmentFeedback, setAssessmentFeedback] = useState<string | null>(null);
  const current = screens[index];
  const totalDuration = screens.reduce((sum, s) => sum + (s.durationSeconds || 15), 0);

  const timerRef = useRef<number | null>(null);
  const startRef = useRef<number>(0);
  const pausedProgressRef = useRef<number>(0);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const speak = useCallback((text: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      setSpeechFinished(true);
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance;
    utterance.rate = 1.05;
    utterance.pitch = 1;
    utterance.volume = 1;
    const voices = window.speechSynthesis.getVoices();
    const preferred =
      voices.find((v) => v.lang.startsWith('en') && v.name.includes('Google')) ||
      voices.find((v) => v.lang.startsWith('en')) ||
      voices[0];
    if (preferred) utterance.voice = preferred;
    utterance.onend = () => setSpeechFinished(true);
    utterance.onerror = () => setSpeechFinished(true);
    setSpeechFinished(false);
    window.speechSynthesis.speak(utterance);
  }, []);

  const stopSpeech = useCallback(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    utteranceRef.current = null;
  }, []);

  const goNext = useCallback(() => {
    setAssessmentAnswered(false);
    setAssessmentFeedback(null);
    setIndex((prev) => {
      if (prev >= screens.length - 1) {
        onComplete?.();
        return prev;
      }
      return prev + 1;
    });
    setProgress(0);
    pausedProgressRef.current = 0;
  }, [screens.length, onComplete]);

  const reset = useCallback(() => {
    setIndex(0);
    setProgress(0);
    pausedProgressRef.current = 0;
    setIsPlaying(true);
    setAssessmentAnswered(false);
    setAssessmentFeedback(null);
  }, []);

  // Timer: auto-advance when both duration elapsed and narration finished
  useEffect(() => {
    if (!current || !isPlaying) {
      if (timerRef.current) window.clearInterval(timerRef.current);
      return;
    }

    startRef.current = Date.now();
    const durationMs = (current.durationSeconds || 15) * 1000;

    timerRef.current = window.setInterval(() => {
      const elapsed = Date.now() - startRef.current + pausedProgressRef.current;
      const pct = Math.min(100, (elapsed / durationMs) * 100);
      setProgress(pct);

      const isAssessment = current.type === 'assessment';
      const durationMet = elapsed >= durationMs;
      const assessmentMet = !isAssessment || assessmentAnswered;

      if (durationMet && assessmentMet && speechFinished) {
        goNext();
      }
    }, 100);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [current, isPlaying, goNext, speechFinished, assessmentAnswered]);

  useEffect(() => {
    pausedProgressRef.current = 0;
    setProgress(0);
  }, [index]);

  // Voice narration: speak the current segment or assessment feedback
  useEffect(() => {
    if (!current) return;
    if (isMuted || !isPlaying) {
      stopSpeech();
      setSpeechFinished(true);
      return;
    }
    if (assessmentFeedback) {
      speak(assessmentFeedback);
      return;
    }
    speak(current.narratorSegment);
  }, [current, index, isPlaying, isMuted, assessmentFeedback, speak, stopSpeech]);

  useEffect(() => {
    return () => {
      stopSpeech();
    };
  }, [stopSpeech]);

  const togglePlay = () => {
    if (isPlaying) {
      pausedProgressRef.current += Date.now() - startRef.current;
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  };

  const handleAssessmentFeedback = useCallback((feedbackText: string) => {
    if (assessmentAnswered) return;
    setAssessmentAnswered(true);
    setAssessmentFeedback(feedbackText);
  }, [assessmentAnswered]);

  if (!current) {
    return <div className="h-full flex items-center justify-center text-white/60 text-sm">No screens available.</div>;
  }

  const completedDuration = screens.slice(0, index).reduce((sum, s) => sum + (s.durationSeconds || 15), 0);
  const overallProgress = totalDuration > 0 ? ((completedDuration + (current.durationSeconds || 15) * (progress / 100)) / totalDuration) * 100 : 0;

  return (
    <div className="h-full w-full flex flex-col bg-slate-950 text-white overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
      <StageBackground />
      {/* Main screen area */}
      <div className="flex-1 min-h-0 relative z-10">
        <ScreenRenderer
          screen={current}
          isActive={true}
          assessmentAnswered={assessmentAnswered}
          onAssessmentFeedback={handleAssessmentFeedback}
        />
      </div>

      {/* Bottom control bar */}
      <div className="shrink-0 border-t border-white/10 bg-black/20 backdrop-blur-md px-4 py-2">
        <div className="flex items-center justify-between gap-4 mb-2">
          <div className="flex items-center gap-2">
            <button
              onClick={togglePlay}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={reset}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Replay"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMuted((m) => !m)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>

          <div className="flex-1 text-center px-2">
            <p className="text-xs text-white/70 truncate">
              {assessmentFeedback || current.narratorSegment}
            </p>
          </div>

          <div className="text-xs font-mono text-white/60 whitespace-nowrap">
            {index + 1} / {screens.length}
          </div>
        </div>

        {/* Overall progress */}
        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#FF4B3E] to-purple-500 transition-all duration-200"
            style={{ width: `${overallProgress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
