/**
 * VisionBoardViewer.tsx
 *
 * Frontend component for displaying full-screen immersive teaching images with
 * optional narrator voiceover. Reads narration metadata generated alongside each
 * vision-board screen and uses the browser's speech synthesis API (Microsoft Edge
 * voices when running in Edge) to speak the script.
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Mic,
  MessageSquare,
} from 'lucide-react';

export interface VisionScreen {
  module: number;
  chapter: number;
  screen: number;
  type: string;
  title: string;
  imagePath: string;
  imagePrompt: string;
  narratorPath?: string;
  durationSeconds?: number;
  narrationScript?: string;
}

export interface VisionBoardManifest {
  course: string;
  courseId: string;
  generatedAt: string;
  screens: VisionScreen[];
}

interface NarratorMeta {
  narrationScript?: string;
  estimatedDurationSeconds?: number;
  segments?: Array<{ text: string; estimatedDurationSeconds?: number }>;
}

interface VisionBoardViewerProps {
  manifest: VisionBoardManifest;
  onScreenChange?: (screen: VisionScreen, index: number) => void;
  autoPlay?: boolean;
  autoPlayDuration?: number; // milliseconds per screen (fallback when no narration)
  className?: string;
}

const VOICE_STORAGE_KEY = 'cohortia_vision_board_voice';

export const VisionBoardViewer: React.FC<VisionBoardViewerProps> = ({
  manifest,
  onScreenChange,
  autoPlay = false,
  autoPlayDuration = 8000,
  className = '',
}) => {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isNarrating, setIsNarrating] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showScript, setShowScript] = useState(false);
  const [narratorMeta, setNarratorMeta] = useState<NarratorMeta | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [imageLoadFailed, setImageLoadFailed] = useState(false);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const autoAdvanceTimerRef = useRef<number | null>(null);

  const currentScreen = manifest.screens[currentScreenIndex];
  const imageSrc = resolveScreenImagePath(currentScreen);

  // Load available voices and restore user preference.
  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    const loadVoices = () => {
      const allVoices = window.speechSynthesis.getVoices();
      // Prefer Microsoft / Edge voices, but keep the full list so the user can choose.
      const microsoftVoices = allVoices.filter(
        (v) =>
          v.name.toLowerCase().includes('microsoft') ||
          v.name.toLowerCase().includes('edge')
      );
      const ordered = microsoftVoices.length > 0 ? [...microsoftVoices, ...allVoices.filter((v) => !microsoftVoices.includes(v))] : allVoices;
      setVoices(ordered);

      const savedName = localStorage.getItem(VOICE_STORAGE_KEY);
      const preferred = ordered.find((v) => v.name === savedName);
      if (preferred) {
        setSelectedVoice(preferred);
      } else if (!selectedVoice && ordered.length > 0) {
        // Default to a Microsoft / Edge English voice when available, otherwise any English voice.
        const defaultVoice =
          ordered.find((v) => /^en-/.test(v.lang) && (v.name.toLowerCase().includes('microsoft') || v.name.toLowerCase().includes('edge'))) ||
          ordered.find((v) => /^en-/.test(v.lang)) ||
          ordered[0];
        setSelectedVoice(defaultVoice);
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  // Fetch narrator metadata when the screen changes.
  useEffect(() => {
    setNarratorMeta(null);
    setImageLoadFailed(false);
    setIsImageLoading(Boolean(imageSrc));
    if (!currentScreen) return;

    const script = currentScreen.narrationScript;
    if (script) {
      setNarratorMeta({
        narrationScript: script,
        estimatedDurationSeconds: currentScreen.durationSeconds,
      });
      return;
    }

    if (!currentScreen.narratorPath) return;

    let cancelled = false;
    fetch(currentScreen.narratorPath)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (cancelled || !data) return;
        setNarratorMeta({
          narrationScript: data.narrationScript,
          estimatedDurationSeconds: data.estimatedDurationSeconds,
          segments: data.segments,
        });
      })
      .catch(() => {
        // Narration is optional; silently ignore fetch failures.
      });

    return () => {
      cancelled = true;
    };
  }, [currentScreen, imageSrc]);

  const stopNarration = useCallback(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    utteranceRef.current = null;
    setIsNarrating(false);
  }, []);

  const speakCurrentScreen = useCallback(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis || !narratorMeta?.narrationScript) return;

    window.speechSynthesis.cancel();
    const text = narratorMeta.narrationScript;
    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance;

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
    utterance.rate = 1;
    utterance.pitch = 1;

    utterance.onstart = () => setIsNarrating(true);
    utterance.onend = () => setIsNarrating(false);
    utterance.onerror = () => setIsNarrating(false);

    window.speechSynthesis.speak(utterance);
  }, [narratorMeta, selectedVoice]);

  // Auto-advance: prefer narration duration, fallback to autoPlayDuration.
  useEffect(() => {
    if (autoAdvanceTimerRef.current) {
      window.clearTimeout(autoAdvanceTimerRef.current);
      autoAdvanceTimerRef.current = null;
    }

    if (!isAutoPlaying) return;

    // When a new screen loads, optionally start narration automatically (unless muted).
    if (narratorMeta?.narrationScript && !isMuted) {
      speakCurrentScreen();
    }

    const durationMs = (narratorMeta?.estimatedDurationSeconds || autoPlayDuration / 1000) * 1000;
    autoAdvanceTimerRef.current = window.setTimeout(() => {
      goToNextScreen();
    }, Math.max(durationMs, 3000));

    return () => {
      if (autoAdvanceTimerRef.current) {
        window.clearTimeout(autoAdvanceTimerRef.current);
      }
    };
  }, [isAutoPlaying, currentScreenIndex, narratorMeta, isMuted, autoPlayDuration, speakCurrentScreen]);

  // Notify parent of screen change.
  useEffect(() => {
    if (onScreenChange) {
      onScreenChange(currentScreen, currentScreenIndex);
    }
  }, [currentScreenIndex, currentScreen, onScreenChange]);

  const goToNextScreen = useCallback(() => {
    if (currentScreenIndex < manifest.screens.length - 1) {
      stopNarration();
      setCurrentScreenIndex((i) => i + 1);
      setIsImageLoading(true);
    } else {
      setIsAutoPlaying(false);
      stopNarration();
    }
  }, [currentScreenIndex, manifest.screens.length, stopNarration]);

  const goToPreviousScreen = useCallback(() => {
    if (currentScreenIndex > 0) {
      stopNarration();
      setCurrentScreenIndex((i) => i - 1);
      setIsImageLoading(true);
    }
  }, [currentScreenIndex, stopNarration]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying((prev) => !prev);
  };

  const toggleNarration = () => {
    if (isNarrating) {
      stopNarration();
    } else if (narratorMeta?.narrationScript) {
      speakCurrentScreen();
    }
  };

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  const handleImageError = () => {
    // If the asset is missing, stop the spinner and fall back to the text panel.
    setImageLoadFailed(true);
    setIsImageLoading(false);
  };

  const handleVoiceChange = (name: string) => {
    const voice = voices.find((v) => v.name === name);
    if (voice) {
      setSelectedVoice(voice);
      localStorage.setItem(VOICE_STORAGE_KEY, voice.name);
    }
  };

  const progress = ((currentScreenIndex + 1) / manifest.screens.length) * 100;
  const hasNarration = Boolean(narratorMeta?.narrationScript);

  return (
    <div className={`relative w-full bg-black overflow-hidden flex flex-col ${className ? className : 'h-screen'}`}>
      {/* Main image container */}
      <div className="relative flex-1 w-full min-h-0">
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-black">
          {!imageLoadFailed && imageSrc ? (
            <img
              src={imageSrc}
              alt={currentScreen.title}
              onLoad={handleImageLoad}
              onError={handleImageError}
              className="max-w-full max-h-full object-contain"
            />
          ) : (
            <div className="px-8 py-6 max-w-2xl text-center">
              <h2 className="text-2xl font-bold text-white mb-3">{currentScreen?.title}</h2>
              <div className="bg-slate-800/80 border border-white/10 rounded-2xl p-5 text-left">
                <p className="text-gray-300 text-sm mb-3">
                  <strong>Screen Type:</strong> {currentScreen?.type}
                </p>
                <p className="text-gray-400 text-sm">
                  The generated image is not available yet for this screen.
                </p>
                <p className="text-gray-500 text-xs mt-3">
                  The viewer will show the real image automatically once the asset is present.
                </p>
              </div>
            </div>
          )}

          {isImageLoading && (
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-white text-sm">Loading image...</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="w-full border-t border-white/10 bg-black/95">
        <div className="mx-auto max-w-6xl px-4 py-4 space-y-3">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="min-w-0">
              <h2 className="text-white text-base font-bold truncate">{currentScreen?.title}</h2>
              <p className="text-white/50 text-[10px] sm:text-xs truncate">
                {manifest.course} · {currentScreenIndex + 1}/{manifest.screens.length} · {currentScreen?.type}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 justify-end">
              <button
                onClick={goToPreviousScreen}
                disabled={currentScreenIndex === 0}
                className="p-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-white/15 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-lg"
                title="Previous screen"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={toggleAutoPlay}
                className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg shadow-purple-900/30"
                title={isAutoPlaying ? 'Pause slideshow' : 'Start slideshow'}
              >
                {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isAutoPlaying ? 'Pause' : 'Play'}</span>
              </button>

              <button
                onClick={goToNextScreen}
                disabled={currentScreenIndex === manifest.screens.length - 1}
                className="p-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-white/15 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-lg"
                title="Next screen"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="text-white/50 text-[10px] sm:text-xs">
              {manifest.course}
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 justify-end">
              {voices.length > 0 && (
                <div className="flex items-center gap-2 bg-slate-800/80 border border-white/10 rounded-lg px-2.5 py-1.5">
                  <Mic className="w-3.5 h-3.5 text-purple-300 shrink-0" />
                  <select
                    value={selectedVoice?.name || ''}
                    onChange={(e) => handleVoiceChange(e.target.value)}
                    className="bg-transparent text-white text-[10px] sm:text-xs font-medium focus:outline-none cursor-pointer max-w-[140px] sm:max-w-[200px]"
                    title="Choose narrator voice"
                  >
                    {voices.map((voice) => (
                      <option key={voice.name} value={voice.name} className="bg-slate-900 text-white">
                        {voice.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {hasNarration && (
                <>
                  <button
                    onClick={toggleNarration}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                      isNarrating
                        ? 'bg-purple-600 border-purple-400 text-white'
                        : 'bg-slate-800/90 border-white/15 text-white hover:bg-slate-700'
                    }`}
                    title={isNarrating ? 'Stop narration' : 'Play narration'}
                  >
                    {isNarrating ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span className="hidden sm:inline">{isNarrating ? 'Speaking' : 'Narrate'}</span>
                  </button>

                  <button
                    onClick={() => setIsMuted((m) => !m)}
                    className={`p-2 rounded-lg border transition-all ${
                      isMuted
                        ? 'bg-red-900/40 border-red-500/40 text-red-200'
                        : 'bg-slate-800/90 border-white/15 text-white hover:bg-slate-700'
                    }`}
                    title={isMuted ? 'Unmute auto-narration' : 'Mute auto-narration'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={() => setShowScript((s) => !s)}
                    className={`p-2 rounded-lg border transition-all ${
                      showScript
                        ? 'bg-purple-900/40 border-purple-500/40 text-purple-200'
                        : 'bg-slate-800/90 border-white/15 text-white hover:bg-slate-700'
                    }`}
                    title="Show / hide narrator script"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </button>
                </>
              )}

            </div>
          </div>

          {showScript && hasNarration && (
            <div className="mt-3 rounded-2xl bg-white/5 border border-white/10 p-3 text-sm text-slate-200">
              <div className="flex items-center gap-2 mb-2 text-purple-300 text-xs font-bold uppercase tracking-wider">
                <Mic className="w-3.5 h-3.5" />
                Narrator Script
              </div>
              <p className="leading-relaxed whitespace-pre-wrap">{narratorMeta.narrationScript}</p>
            </div>
          )}

          {isAutoPlaying && (
            <div className="mt-2 text-center text-[10px] text-purple-300">
              Auto-advance in {Math.ceil(narratorMeta?.estimatedDurationSeconds || autoPlayDuration / 1000)}s
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VisionBoardViewer;

function resolveScreenImagePath(screen: VisionScreen | undefined): string | null {
  if (!screen) return null;
  if (screen.imagePath) return screen.imagePath;
  if (!screen.narratorPath) return null;

  const normalizedNarratorPath = screen.narratorPath.replace(/\\/g, '/');
  const folder = normalizedNarratorPath.replace(/\/[^/]+$/, '');
  const candidates: string[] = [];

  if (screen.type === 'course-overview') {
    candidates.push(`${folder}/Overview.jpg`);
    candidates.push(`${folder}/Overview.png`);
    candidates.push(`${folder}/Overview.webp`);
  }

  candidates.push(`${folder}/screen-${screen.screen}.jpg`);
  candidates.push(`${folder}/screen-${screen.screen}.png`);
  candidates.push(`${folder}/screen-${screen.screen}.webp`);

  for (const candidate of candidates) {
    if (candidate.startsWith('generated/vision-boards/')) {
      return `/${candidate.replace(/^generated\//, '')}`;
    }
    if (candidate.startsWith('/vision-boards/') || candidate.startsWith('/learning-boards/')) {
      return candidate;
    }
  }

  return null;
}
