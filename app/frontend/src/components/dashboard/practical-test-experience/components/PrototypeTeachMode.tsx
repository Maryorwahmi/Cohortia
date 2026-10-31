import React, { useEffect, useState } from 'react';
import { INSTRUCTOR_PERSONAS } from '../data/instructorsData';
import type { InstructorPersona, PracticalManifest } from '../types/practical';
import { ClassroomTeachView } from './ClassroomTeachView';
import { PrototypeTeachTopNav } from './PrototypeTeachTopNav';

interface PrototypeTeachModeProps {
  manifest: PracticalManifest;
  onOpenWorkspace: () => void;
}

/**
 * Teach Mode owns the prototype presentation and playback controls, while the
 * selected practical manifest comes from the real generated practical.
 */
export const PrototypeTeachMode: React.FC<PrototypeTeachModeProps> = ({ manifest, onOpenWorkspace }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [instructor] = useState<InstructorPersona>(INSTRUCTOR_PERSONAS[0]);

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

  const activeStepIndex = Math.max(
    0,
    currentSlideIndex > 0 ? currentSlideIndex - 1 : getStepIndexForTime(currentTime),
  );
  const activeStep = manifest.walkthroughSteps[activeStepIndex];

  useEffect(() => {
    if (!isPlaying) return undefined;
    const interval = window.setInterval(() => {
      setCurrentTime((previousTime) => {
        const nextTime = previousTime + 0.5 * playbackSpeed;
        if (nextTime >= manifest.durationSeconds) {
          setIsPlaying(false);
          return manifest.durationSeconds;
        }

        const nextStepIndex = getStepIndexForTime(nextTime);
        if (currentSlideIndex > 0 && nextStepIndex + 1 !== currentSlideIndex) {
          setCurrentSlideIndex(nextStepIndex + 1);
        }
        return nextTime;
      });
    }, 500);

    return () => window.clearInterval(interval);
  }, [manifest, currentSlideIndex, isPlaying, playbackSpeed]);

  useEffect(() => {
    if (!('speechSynthesis' in window) || !isPlaying || isMuted) {
      window.speechSynthesis?.cancel();
      return undefined;
    }

    const textToSpeak = currentSlideIndex === 0
      ? `${manifest.classroom.mainTitle}. ${manifest.classroom.subtitle} ${manifest.classroom.inThisLesson}`
      : activeStep?.narration;
    if (!textToSpeak) return undefined;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = instructor.speechRate * playbackSpeed * 0.95;
    utterance.pitch = instructor.speechPitch;
    window.speechSynthesis.speak(utterance);

    return () => window.speechSynthesis.cancel();
  }, [manifest, activeStep?.narration, currentSlideIndex, instructor, isMuted, isPlaying, playbackSpeed]);

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
