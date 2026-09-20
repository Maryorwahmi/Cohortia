import { useState, useEffect, useRef, useCallback } from "react";
import type { MouseEvent } from "react";
import type { LessonScene } from "../lib/cppSceneGenerator";

export interface UseScenePlayerOptions {
  scenes: LessonScene[];
  autoPlay?: boolean;
  loop?: boolean;
}

export function useScenePlayer({ scenes, autoPlay = true, loop = true }: UseScenePlayerOptions) {
  const totalDuration = scenes.reduce((acc, s) => acc + s.duration, 0);

  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [currentTime, setCurrentTime] = useState(0);
  const [hoveredScene, setHoveredScene] = useState<number | null>(null);

  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);

  // Reset when scenes change
  useEffect(() => {
    setCurrentTime(0);
    setIsPlaying(autoPlay);
  }, [scenes, autoPlay]);

  useEffect(() => {
    if (!isPlaying) {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
        requestRef.current = null;
      }
      previousTimeRef.current = null;
      return;
    }

    const animate = (time: number) => {
      if (previousTimeRef.current !== null) {
        const deltaTime = (time - previousTimeRef.current) / 1000;
        setCurrentTime((prev) => {
          const next = prev + deltaTime;
          if (next >= totalDuration) {
            return loop ? 0 : totalDuration;
          }
          return next;
        });
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isPlaying, totalDuration, loop]);

  let accumulatedTime = 0;
  let activeSceneIndex = 0;
  for (let i = 0; i < scenes.length; i++) {
    if (currentTime >= accumulatedTime && currentTime < accumulatedTime + scenes[i].duration) {
      activeSceneIndex = i;
      break;
    }
    accumulatedTime += scenes[i].duration;
  }
  const activeScene: LessonScene | undefined = scenes[activeSceneIndex] || scenes[0];
  const activeSceneProgress = scenes.length > 0 && activeScene
    ? (currentTime - accumulatedTime) / activeScene.duration
    : 0;

  const formatTime = useCallback((secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  }, []);

  const togglePlay = useCallback(() => setIsPlaying((prev) => !prev), []);
  const reset = useCallback(() => {
    setCurrentTime(0);
    setIsPlaying(true);
  }, []);
  const seek = useCallback(
    (time: number) => {
      setCurrentTime(Math.max(0, Math.min(totalDuration, time)));
    },
    [totalDuration]
  );
  const handleSeekClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      setCurrentTime(ratio * totalDuration);
    },
    [totalDuration]
  );
  const selectScene = useCallback(
    (sceneIndex: number) => {
      let targetTime = 0;
      for (let i = 0; i < sceneIndex; i++) targetTime += scenes[i].duration;
      setCurrentTime(targetTime);
    },
    [scenes]
  );

  return {
    isPlaying,
    currentTime,
    totalDuration,
    activeSceneIndex,
    activeScene,
    activeSceneProgress,
    hoveredScene,
    setHoveredScene,
    togglePlay,
    reset,
    seek,
    handleSeekClick,
    selectScene,
    formatTime,
    setIsPlaying,
  };
}
