import React, { useEffect, useRef, useState } from 'react';
import { INSTRUCTOR_PERSONAS } from '../data/instructorsData';
import type { InstructorPersona, PracticalManifest } from '../types/practical';
import { ClassroomTeachView } from './ClassroomTeachView';
import { PrototypeTeachTopNav } from './PrototypeTeachTopNav';
import { SpeechNarrationQueue } from '../../../../lib/speechNarration';

interface PrototypeTeachModeProps {
  manifest: PracticalManifest;
  voice: SpeechSynthesisVoice | null;
  onOpenWorkspace: () => void;
}

/**
 * Teach Mode owns the prototype presentation and playback controls, while the
 * selected practical manifest comes from the real generated practical.
 */
export const PrototypeTeachMode: React.FC<PrototypeTeachModeProps> = ({ manifest, voice, onOpenWorkspace }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [instructor] = useState<InstructorPersona>(INSTRUCTOR_PERSONAS[0]);
  const narrationQueueRef = useRef(new SpeechNarrationQueue());

  useEffect(() => {
    setCurrentTime(0);
    setCurrentSlideIndex(0);
    setIsPlaying(false);
  }, [manifest.id]);

  const getStepIndexForTime = (time: number) => {
    let index = 0;
    for (let stepIndex = 0; stepIndex < manifest.walkthroughSteps.length; stepIndex += 1) {
      if (time >= manifest.walkthroughSteps[stepIndex].timestamp) index = stepIndex;
    }
    return index;
  };

  const activeStepIndex = Math.max(0, currentSlideIndex - 1);
  const activeStep = manifest.walkthroughSteps[activeStepIndex];
  const textToSpeak = currentSlideIndex === 0
    ? manifest.classroom.openingNarration
    : activeStep?.narration;
  const narrationOwnsAdvance = typeof window !== 'undefined'
    && 'speechSynthesis' in window
    && isPlaying
    && !isMuted
    && Boolean(voice)
    && Boolean(textToSpeak?.trim());

  useEffect(() => {
    if (!isPlaying) return undefined;
    const interval = window.setInterval(() => {
      setCurrentTime((previousTime) => {
        if (currentSlideIndex === 0) {
          const openingDuration = Math.max(
            12,
            Math.ceil((manifest.classroom.openingNarration || '').trim().split(/\s+/).filter(Boolean).length / 2) + 3,
          );
          const nextTime = previousTime + 0.5 * playbackSpeed;
          if (narrationOwnsAdvance) return Math.min(nextTime, openingDuration - 0.1);
          if (nextTime >= openingDuration) {
            setCurrentSlideIndex(1);
            return 0;
          }
          return nextTime;
        }

        const nextStep = manifest.walkthroughSteps[activeStepIndex + 1];
        const nextStepStart = nextStep?.timestamp ?? manifest.durationSeconds;
        const nextTime = previousTime + 0.5 * playbackSpeed;
        if (narrationOwnsAdvance) {
          return Math.min(nextTime, Math.max(activeStep?.timestamp ?? 0, nextStepStart - 0.1));
        }
        if (nextTime >= nextStepStart) {
          if (nextStep) {
            setCurrentSlideIndex(activeStepIndex + 2);
            return nextStep.timestamp;
          }
          setIsPlaying(false);
          return manifest.durationSeconds;
        }
        return nextTime;
      });
    }, 500);

    return () => window.clearInterval(interval);
  }, [activeStep?.timestamp, activeStepIndex, currentSlideIndex, isPlaying, manifest, narrationOwnsAdvance, playbackSpeed]);

  useEffect(() => {
    if (!narrationOwnsAdvance || !voice || !textToSpeak) {
      return undefined;
    }

    let cancelled = false;
    narrationQueueRef.current.play(textToSpeak, {
      voice,
      rate: instructor.speechRate * playbackSpeed * 0.95,
      pitch: 1,
      onComplete: () => {
        if (cancelled) return;
        if (currentSlideIndex === 0) {
          setCurrentTime(0);
          setCurrentSlideIndex(1);
          return;
        }

        const nextStep = manifest.walkthroughSteps[activeStepIndex + 1];
        if (nextStep) {
          setCurrentTime(nextStep.timestamp);
          setCurrentSlideIndex(activeStepIndex + 2);
        } else {
          setCurrentTime(manifest.durationSeconds);
          setIsPlaying(false);
        }
      },
      onError: (error) => {
        if (cancelled) return;
        console.error('Practical teacher narration failed:', error);
        setIsPlaying(false);
      },
    });

    return () => {
      cancelled = true;
      narrationQueueRef.current.cancel();
    };
  }, [activeStepIndex, currentSlideIndex, instructor.speechRate, isPlaying, manifest, narrationOwnsAdvance, playbackSpeed, textToSpeak, voice]);

  const handleSeek = (time: number) => {
    const boundedTime = Math.max(0, Math.min(manifest.durationSeconds, time));
    setCurrentTime(boundedTime);
    setCurrentSlideIndex(getStepIndexForTime(boundedTime) + 1);
  };

  const handleSelectStep = (slideIndex: number) => {
    setCurrentSlideIndex(slideIndex);
    if (slideIndex === 0) {
      setCurrentTime(0);
      return;
    }
    const step = manifest.walkthroughSteps[slideIndex - 1];
    if (step) setCurrentTime(step.timestamp);
  };

  const handlePrevSlide = () => {
    handleSelectStep(Math.max(0, currentSlideIndex - 1));
  };

  const handleNextSlide = () => {
    handleSelectStep(Math.min(manifest.walkthroughSteps.length, currentSlideIndex + 1));
  };

  return (
    <div className="prototype-teach-mode flex-1 flex min-h-0 flex-col overflow-hidden">
      <PrototypeTeachTopNav
        manifest={manifest}
        mode="teach"
        onToggleMode={() => undefined}
        onResetFiles={() => undefined}
      />
      <ClassroomTeachView
        manifest={manifest}
        currentStepIndex={currentSlideIndex}
        currentTime={currentTime}
        isPlaying={isPlaying}
        isMuted={isMuted}
        playbackSpeed={playbackSpeed}
        instructor={instructor}
        onTogglePlay={() => setIsPlaying((playing) => !playing)}
        onReplay={() => {
          setCurrentTime(0);
          setCurrentSlideIndex(0);
          setIsPlaying(true);
        }}
        onToggleMute={() => setIsMuted((muted) => !muted)}
        onSeek={handleSeek}
        onSelectStep={handleSelectStep}
        onPrevSlide={handlePrevSlide}
        onNextSlide={handleNextSlide}
        onOpenWorkspace={onOpenWorkspace}
      />
      <span className="sr-only">Instructor: {instructor.name}</span>
    </div>
  );
};
