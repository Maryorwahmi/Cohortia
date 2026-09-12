import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import type { ManifestScene } from "../lib/courseManifest";

export interface UseManifestPlayerOptions {
  scenes: ManifestScene[];
  autoPlay?: boolean;
}

export function useManifestPlayer({ scenes, autoPlay = true }: UseManifestPlayerOptions) {
  const totalDuration = useMemo(
    () => scenes.reduce((acc, s) => acc + (s.duration || 15), 0),
    [scenes]
  );

  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [waitingForInteraction, setWaitingForInteraction] = useState(false);
  const [sceneIndex, setSceneIndex] = useState(0);
  const [sceneElapsed, setSceneElapsed] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [speechReady, setSpeechReady] = useState(false);
  const [sceneDurationDone, setSceneDurationDone] = useState(false);
  const [speechCompleted, setSpeechCompleted] = useState(false);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const playbackRunRef = useRef(0);

  const activeScene = scenes[sceneIndex] || scenes[0];
  const activeDuration = Math.max(1, (activeScene as any)?.timing?.duration || (activeScene as any)?.duration || 15);
  const activeSceneProgress = Math.min(1, sceneElapsed / activeDuration);

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const cancelSpeech = useCallback(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    utteranceRef.current = null;
    playbackRunRef.current += 1;
  }, []);

  const stopAll = useCallback(() => {
    clearTimer();
    cancelSpeech();
  }, [clearTimer, cancelSpeech]);

  const speakCurrent = useCallback(() => {
    if (!activeScene || typeof window === "undefined" || !window.speechSynthesis) {
      setSpeechCompleted(true);
      return;
    }
    const rawNarration = (activeScene as any).narration || "";
    const fallbackNarration = (activeScene as any).narratorSegment || "";
    const text = (typeof rawNarration === 'string'
      ? rawNarration
      : (rawNarration.text || '')).trim() || String(fallbackNarration || "").trim();
    if (!text || isMuted) {
      setSpeechCompleted(true);
      return;
    }

    cancelSpeech();
    setSpeechCompleted(false);
    const runId = playbackRunRef.current;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    // Adjust rate by narration pace when provided
    const pace = typeof rawNarration === 'object' ? rawNarration.pace : undefined;
    utterance.rate = pace === 'slow' ? 0.9 : pace === 'fast' ? 1.15 : 1.0;
    utterance.pitch = 1.0;
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find((v) => v.lang.startsWith("en-") && (v.name.includes("Google") || v.name.includes("Natural") || v.name.includes("Samantha")));
    if (preferred) utterance.voice = preferred;

    utterance.onend = () => {
      if (runId !== playbackRunRef.current) return;
      utteranceRef.current = null;
      const timingSync = (activeScene as any)?.timing?.sync || (activeScene as any)?.sync || 'voice';
      const interactions = (activeScene as any)?.interactions || [];
      const hasRequired = interactions.some((it: any) => it && it.required);

      // If there is a required interaction, pause and set waiting state
      if (hasRequired) {
        setWaitingForInteraction(true);
        setIsPlaying(false);
        setSpeechCompleted(true);
        return;
      }

      // If timing.sync is manual, stop playing and wait for user
      if (timingSync === 'manual') {
        setIsPlaying(false);
        setSpeechCompleted(true);
        return;
      }

      setSpeechCompleted(true);
    };

    utterance.onerror = (event) => {
      if (event.error === "canceled") return;
      if (runId !== playbackRunRef.current) return;
      utteranceRef.current = null;
      setSpeechCompleted(true);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.resume();
    window.speechSynthesis.speak(utterance);
  }, [activeScene, cancelSpeech, isMuted]);

  // Start/resume playback
  useEffect(() => {
    if (!isPlaying) {
      stopAll();
      return;
    }

    // Timer updates the progress bar every 0.1s
    intervalRef.current = setInterval(() => {
      setSceneElapsed((prev) => {
        const next = prev + 0.1;
        if (next >= activeDuration) {
          setSceneDurationDone(true);
          return activeDuration;
        }
        return next;
      });
    }, 100);

    // If no speech is active, start it
    if (!utteranceRef.current) {
      speakCurrent();
    }

    return () => {
      clearTimer();
    };
  }, [isPlaying, sceneIndex, activeDuration, speakCurrent, clearTimer]);

  // When scene changes, reset elapsed and (re)start speech
  useEffect(() => {
    setSceneElapsed(0);
    setWaitingForInteraction(false);
    setSceneDurationDone(false);
    setSpeechCompleted(false);
    if (isPlaying) {
      cancelSpeech();
      speakCurrent();
    }
  }, [sceneIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!isPlaying || waitingForInteraction) return;

    const timingSync = (activeScene as any)?.timing?.sync || (activeScene as any)?.sync || 'voice';
    if (timingSync === 'manual') return;
    if (!sceneDurationDone || !speechCompleted) return;

    if (sceneIndex < scenes.length - 1) {
      setSceneIndex((i) => i + 1);
      return;
    }

    setIsPlaying(false);
    setSceneElapsed(activeDuration);
  }, [activeDuration, activeScene, isPlaying, sceneDurationDone, sceneIndex, scenes.length, speechCompleted, waitingForInteraction]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopAll();
    };
  }, [stopAll]);

  // Wait for voices to load
  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    const check = () => setSpeechReady(window.speechSynthesis.getVoices().length > 0);
    check();
    window.speechSynthesis.onvoiceschanged = check;
  }, []);

  const togglePlay = useCallback(() => {
    setIsPlaying((p) => {
      const next = !p;
      if (next) {
        speakCurrent();
      } else {
        stopAll();
      }
      return next;
    });
  }, [speakCurrent, stopAll]);

  const reset = useCallback(() => {
    stopAll();
    setSceneIndex(0);
    setSceneElapsed(0);
    setSceneDurationDone(false);
    setSpeechCompleted(false);
    setIsPlaying(true);
  }, [stopAll]);

  const seekToScene = useCallback(
    (index: number) => {
      const target = Math.max(0, Math.min(scenes.length - 1, index));
      stopAll();
      setSceneIndex(target);
      setSceneElapsed(0);
      setSceneDurationDone(false);
      setSpeechCompleted(false);
      setIsPlaying(true);
    },
    [scenes.length, stopAll]
  );

  const selectScene = useCallback(
    (index: number) => {
      seekToScene(index);
    },
    [seekToScene]
  );

  const completeInteraction = useCallback((result?: any) => {
    // Called by UI to indicate interaction completed
    setWaitingForInteraction(false);
    setSpeechCompleted(true);
    // Advance to next scene if possible
    if (sceneIndex < scenes.length - 1) {
      setSceneIndex((i) => i + 1);
      setSceneElapsed(0);
      setSceneDurationDone(false);
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [sceneIndex, scenes.length]);

  const formatTime = useCallback((secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  }, []);

  const currentTime = useMemo(() => {
    let time = 0;
    for (let i = 0; i < sceneIndex; i++) time += scenes[i]?.duration || 15;
    time += sceneElapsed;
    return time;
  }, [sceneIndex, sceneElapsed, scenes]);

  return {
    isPlaying,
    isMuted,
    setIsMuted,
    currentTime,
    totalDuration,
    sceneIndex,
    activeScene,
    activeSceneProgress,
    speechReady,
    togglePlay,
    reset,
    selectScene,
    seekToScene,
    formatTime,
    waitingForInteraction,
    completeInteraction,
  };
}
