import React, { useEffect, useMemo, useState } from 'react';
import { PRACTICAL_MANIFESTS } from '../data/practicalsData';
import { INSTRUCTOR_PERSONAS } from '../data/instructorsData';
import type { InstructorPersona } from '../types/practical';
import { ClassroomTeachView } from './ClassroomTeachView';
import { PrototypeTeachTopNav } from './PrototypeTeachTopNav';

/**
 * The prototype classroom is intentionally isolated from generated practicals.
 * It owns its manifest, playback, category, and walkthrough state.
 */
export const PrototypeTeachMode: React.FC = () => {
  const [activeManifestId, setActiveManifestId] = useState(PRACTICAL_MANIFESTS[0].id);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentTime, setCurrentTime] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [instructor] = useState<InstructorPersona>(INSTRUCTOR_PERSONAS[0]);

  const activeManifest = useMemo(
    () => PRACTICAL_MANIFESTS.find((manifest) => manifest.id === activeManifestId) || PRACTICAL_MANIFESTS[0],
    [activeManifestId],
  );

  useEffect(() => {
    if (selectedCategory === 'all' || activeManifest.categoryType === selectedCategory) return;
    const categoryManifest = PRACTICAL_MANIFESTS.find((manifest) => manifest.categoryType === selectedCategory);
    if (categoryManifest) setActiveManifestId(categoryManifest.id);
  }, [activeManifest.categoryType, selectedCategory]);

  useEffect(() => {
    setCurrentTime(0);
    setCurrentSlideIndex(0);
    setIsPlaying(false);
  }, [activeManifest.id]);

  const getStepIndexForTime = (time: number) => {
    let index = 0;
    for (let stepIndex = 0; stepIndex < activeManifest.walkthroughSteps.length; stepIndex += 1) {
      if (time >= activeManifest.walkthroughSteps[stepIndex].timestamp) index = stepIndex;
    }
    return index;
  };

  const activeStepIndex = Math.max(
    0,
    currentSlideIndex > 0 ? currentSlideIndex - 1 : getStepIndexForTime(currentTime),
  );
  const activeStep = activeManifest.walkthroughSteps[activeStepIndex];

  useEffect(() => {
    if (!isPlaying) return undefined;
    const interval = window.setInterval(() => {
      setCurrentTime((previousTime) => {
        const nextTime = previousTime + 0.5 * playbackSpeed;
        if (nextTime >= activeManifest.durationSeconds) {
          setIsPlaying(false);
          return activeManifest.durationSeconds;
        }

        const nextStepIndex = getStepIndexForTime(nextTime);
        if (currentSlideIndex > 0 && nextStepIndex + 1 !== currentSlideIndex) {
          setCurrentSlideIndex(nextStepIndex + 1);
        }
        return nextTime;
      });
    }, 500);

    return () => window.clearInterval(interval);
  }, [activeManifest, currentSlideIndex, isPlaying, playbackSpeed]);

  useEffect(() => {
    if (!('speechSynthesis' in window) || !isPlaying || isMuted) {
      window.speechSynthesis?.cancel();
      return undefined;
    }

    const textToSpeak = currentSlideIndex === 0
      ? `${activeManifest.classroom.mainTitle}. ${activeManifest.classroom.subtitle} ${activeManifest.classroom.inThisLesson}`
      : activeStep?.narration;
    if (!textToSpeak) return undefined;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = instructor.speechRate * playbackSpeed * 0.95;
    utterance.pitch = instructor.speechPitch;
    window.speechSynthesis.speak(utterance);

    return () => window.speechSynthesis.cancel();
  }, [activeManifest, activeStep?.narration, currentSlideIndex, instructor, isMuted, isPlaying, playbackSpeed]);

  const handleSeek = (time: number) => {
    const boundedTime = Math.max(0, Math.min(activeManifest.durationSeconds, time));
    setCurrentTime(boundedTime);
    setCurrentSlideIndex(getStepIndexForTime(boundedTime) + 1);
  };

  const handleSelectStep = (slideIndex: number) => {
    setCurrentSlideIndex(slideIndex);
    if (slideIndex === 0) {
      setCurrentTime(0);
      return;
    }
    const step = activeManifest.walkthroughSteps[slideIndex - 1];
    if (step) setCurrentTime(step.timestamp);
  };

  const handlePrevSlide = () => {
    handleSelectStep(Math.max(0, currentSlideIndex - 1));
  };

  const handleNextSlide = () => {
    handleSelectStep(Math.min(activeManifest.walkthroughSteps.length, currentSlideIndex + 1));
  };

  return (
    <div className="flex-1 flex min-h-0 flex-col overflow-hidden">
      <PrototypeTeachTopNav
        manifests={PRACTICAL_MANIFESTS}
        activeManifestId={activeManifest.id}
        onSelectManifest={(manifestId) => {
          setActiveManifestId(manifestId);
          setCurrentTime(0);
          setCurrentSlideIndex(0);
        }}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        mode="teach"
        onToggleMode={() => undefined}
        onResetFiles={() => undefined}
        isSplitView={false}
        onToggleSplitView={() => undefined}
      />
      <ClassroomTeachView
        manifest={activeManifest}
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
        onOpenWorkspace={() => undefined}
      />
      <span className="sr-only">Instructor: {instructor.name}</span>
    </div>
  );
};
