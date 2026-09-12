import { useMemo, useEffect, Fragment, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Pause, RotateCw, Volume2, VolumeX } from "lucide-react";
import { useManifestPlayer } from "../../hooks/useManifestPlayer";
import type { CourseManifest, ManifestScene, ManifestChapter } from "../../lib/courseManifest";
import SceneVisualRenderer from "../manifest/SceneVisualRenderer";

interface ManifestLessonPlayerProps {
  manifest: CourseManifest;
  scenes: ManifestScene[];
  chapter?: ManifestChapter;
  onTimeUpdate?: (time: number) => void;
  onComplete?: () => void;
}

export default function ManifestLessonPlayer({
  manifest,
  scenes,
  chapter,
  onTimeUpdate,
  onComplete,
}: ManifestLessonPlayerProps) {
  const ds = manifest.designSystem;
  const {
    isPlaying,
    isMuted,
    setIsMuted,
    currentTime,
    totalDuration,
    sceneIndex,
    activeScene,
    activeSceneProgress,
    togglePlay,
    reset,
    selectScene,
    formatTime,
    waitingForInteraction,
    completeInteraction,
  } = useManifestPlayer({ scenes, autoPlay: true });

  const [reflection, setReflection] = useState("");

  useEffect(() => {
    onTimeUpdate?.(currentTime);
  }, [currentTime, onTimeUpdate]);

  useEffect(() => {
    if (sceneIndex >= scenes.length - 1 && activeSceneProgress >= 1) {
      onComplete?.();
    }
  }, [sceneIndex, activeSceneProgress, scenes.length, onComplete]);

  useEffect(() => {
    setReflection("");
  }, [sceneIndex]);

  const progressPercent = totalDuration > 0 ? (currentTime / totalDuration) * 100 : 0;
  const showPlaylist = manifest.designSystem?.uiShell?.showPlaylist !== false;
  const accent = ds.colors.accent || ds.colors.primary;

  if (scenes.length === 0) {
    return (
      <div className="absolute inset-0 flex items-center justify-center" style={{ background: ds.colors.background, color: ds.colors.textSecondary }}>
        <p className="text-xs font-mono">No scenes available for this lesson.</p>
      </div>
    );
  }

  return (
    <div
      className="absolute inset-0 flex flex-col select-none overflow-hidden"
      style={{
        background: ds.colors.background,
        color: ds.colors.textPrimary,
        fontFamily: ds.typography.body || "ui-sans-serif, system-ui",
      }}
    >
      {/* Header with scene index */}
      <div
        className="flex items-center justify-between px-4 py-2 border-b"
        style={{ borderColor: `${ds.colors.textSecondary}15`, background: ds.colors.surface }}
      >
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono uppercase tracking-wider" style={{ color: ds.colors.textSecondary }}>
            Scene
          </span>
          <span className="text-xs font-mono font-bold" style={{ color: accent }}>
            {sceneIndex + 1} / {scenes.length}
          </span>
        </div>
        <div className="text-[10px] font-mono truncate max-w-[60%]" style={{ color: ds.colors.textSecondary }}>
          {activeScene.visual?.heading || activeScene.sceneId}
        </div>
      </div>

      {/* Scene stage */}
      <div className="flex-1 relative min-h-0 p-4 sm:p-6">
        <AnimatePresence mode="wait">
          <Fragment key={activeScene.sceneId}>
            <SceneVisualRenderer
              scene={activeScene}
              chapter={chapter}
              designSystem={ds}
              progress={activeSceneProgress}
              onCompleteScene={(answer) => completeInteraction({ answer })}
            />
          </Fragment>
        </AnimatePresence>

        {/* Interaction overlay — positioned relative to the scene stage */}
        {waitingForInteraction && (() => {
          const interaction = activeScene.interactions?.[0];
          if (!interaction) return null;

          const type = interaction.type || "click_to_continue";

          if (type === "choice_poll") {
            const options = interaction.options || [];
            return (
              <div className="absolute left-4 bottom-4 max-w-[320px] bg-white/95 dark:bg-black/80 rounded-xl p-4 z-20 border" style={{ borderColor: ds.colors.surface }}>
                <div className="text-sm font-semibold" style={{ color: ds.colors.textPrimary }}>{interaction.prompt || "Choose an option"}</div>
                <div className="mt-3 space-y-2">
                  {options.map((opt, i) => {
                    const isObj = typeof opt === "object" && opt !== null;
                    const label = isObj ? (opt as { label?: string }).label : opt;
                    const text = isObj ? (opt as { text?: string }).text : undefined;
                    const choice = isObj ? (opt as { label?: string; text?: string }) : opt;
                    return (
                      <button
                        key={i}
                        onClick={() => completeInteraction({ choice })}
                        className="w-full text-left px-3 py-2 rounded-lg border hover:shadow-sm transition-all"
                        style={{ borderColor: `${ds.colors.textSecondary}30`, background: ds.colors.surface, color: ds.colors.textPrimary }}
                      >
                        <div className="text-sm font-medium">{label}</div>
                        {text && <div className="text-xs opacity-80" style={{ color: ds.colors.textSecondary }}>{text}</div>}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          }

          if (type === "input_code") {
            return (
              <div className="absolute left-4 bottom-4 max-w-[560px] bg-white/95 dark:bg-black/80 rounded-xl p-4 z-20 border" style={{ borderColor: ds.colors.surface }}>
                <CodeInputInteraction
                  prompt={interaction.prompt}
                  starter={interaction.starter}
                  onSubmit={(v: string) => completeInteraction({ code: v })}
                  ds={ds}
                />
              </div>
            );
          }

          if (type === "input_reflection") {
            const config = activeScene.visual?.worksheetConfig || {};
            const min = config.minCharacters || 0;
            return (
              <div className="absolute left-4 bottom-4 max-w-[360px] bg-white/95 dark:bg-black/80 rounded-xl p-4 z-20 border" style={{ borderColor: ds.colors.surface }}>
                <div className="text-sm font-semibold" style={{ color: ds.colors.textPrimary }}>
                  {interaction.prompt || "Reflection"}
                </div>
                <textarea
                  value={reflection}
                  onChange={(e) => setReflection(e.target.value)}
                  className="w-full mt-2 p-2 rounded-lg text-xs font-mono border resize-none"
                  style={{ borderColor: `${ds.colors.textSecondary}30`, background: ds.colors.background, color: ds.colors.textPrimary }}
                  rows={4}
                  placeholder={config.placeholder || "Type your reflection..."}
                />
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[10px] font-mono" style={{ color: reflection.length >= min ? ds.colors.success : ds.colors.textSecondary }}>
                    {reflection.length} / {min} characters
                  </span>
                  <button
                    onClick={() => completeInteraction({ answer: reflection })}
                    disabled={reflection.length < min}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold disabled:opacity-30"
                    style={{ background: accent, color: "#fff" }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            );
          }

          if (type === "confirm") {
            return (
              <div className="absolute left-4 bottom-4 max-w-[300px] bg-white/95 dark:bg-black/80 rounded-xl p-3 z-20 border" style={{ borderColor: ds.colors.surface }}>
                <div className="text-sm font-semibold" style={{ color: ds.colors.textPrimary }}>{interaction.prompt || "Confirm?"}</div>
                <div className="mt-2 flex items-center gap-2">
                  <button onClick={() => completeInteraction({ confirmed: true })} className="px-3 py-1.5 rounded-lg text-xs font-bold" style={{ background: ds.colors.success, color: "#fff" }}>Yes</button>
                  <button onClick={() => completeInteraction({ confirmed: false })} className="px-3 py-1.5 rounded-lg border text-xs font-bold" style={{ borderColor: ds.colors.textSecondary, color: ds.colors.textPrimary }}>No</button>
                </div>
              </div>
            );
          }

          return (
            <div className="absolute left-4 bottom-4 max-w-[300px] bg-white/95 dark:bg-black/80 rounded-xl p-3 z-20 border" style={{ borderColor: ds.colors.surface }}>
              <div className="text-sm font-semibold" style={{ color: ds.colors.textPrimary }}>{interaction.prompt || "Tap to continue"}</div>
              <div className="mt-2 flex items-center gap-2">
                <button onClick={() => completeInteraction()} className="px-3 py-1.5 rounded-lg text-xs font-bold" style={{ background: ds.colors.primary, color: "#fff" }}>Continue</button>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Playlist strip */}
      {showPlaylist && (
        <div
          className="hidden sm:flex h-9 items-center px-3 gap-2 border-t overflow-x-auto"
          style={{ borderColor: `${ds.colors.textSecondary}15`, background: ds.colors.surface }}
        >
          {scenes.map((scene, idx) => {
            const done = idx < sceneIndex;
            const active = idx === sceneIndex;
            return (
              <button
                key={scene.sceneId}
                onClick={() => selectScene(idx)}
                className="shrink-0 px-2 py-1 rounded-md text-[10px] font-bold transition-all text-left"
                style={{
                  background: active ? `${ds.colors.primary}20` : done ? `${ds.colors.success}15` : `${ds.colors.textSecondary}10`,
                  border: `1px solid ${active ? ds.colors.primary : done ? ds.colors.success : `${ds.colors.textSecondary}20`}`,
                  color: active ? ds.colors.primary : done ? ds.colors.success : ds.colors.textSecondary,
                }}
              >
                <span className="block truncate max-w-[100px]">{scene.visual?.heading || scene.sceneId}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Premium controls */}
      <div
        className="flex items-center gap-3 px-4 py-2 border-t"
        style={{ borderColor: `${ds.colors.textSecondary}15`, background: ds.colors.surface }}
      >
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95"
          style={{ background: `${ds.colors.primary}20`, color: ds.colors.primary }}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>

        <button
          onClick={reset}
          className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95"
          style={{ background: `${ds.colors.textSecondary}10`, color: ds.colors.textSecondary }}
          aria-label="Restart"
        >
          <RotateCw className="w-4 h-4" />
        </button>

        <span className="text-[11px] font-mono tabular-nums" style={{ color: ds.colors.textSecondary }}>
          {formatTime(currentTime)}
        </span>

        <div
          className="flex-1 h-2 rounded-full cursor-pointer relative overflow-hidden group"
          style={{ background: `${ds.colors.textSecondary}15` }}
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
            const targetTime = ratio * totalDuration;
            let acc = 0;
            for (let i = 0; i < scenes.length; i++) {
              const d = scenes[i].duration || 15;
              if (targetTime < acc + d) {
                selectScene(i);
                return;
              }
              acc += d;
            }
            selectScene(scenes.length - 1);
          }}
        >
          <div
            className="h-full rounded-full transition-all duration-100"
            style={{ width: `${progressPercent}%`, background: accent }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ left: `${progressPercent}%`, background: ds.colors.textPrimary, transform: "translate(-50%, -50%)" }}
          />
        </div>

        <span className="text-[11px] font-mono tabular-nums" style={{ color: ds.colors.textSecondary }}>
          {formatTime(totalDuration)}
        </span>

        <button
          onClick={() => setIsMuted(!isMuted)}
          className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95"
          style={{ background: `${ds.colors.textSecondary}10`, color: ds.colors.textSecondary }}
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}

function CodeInputInteraction({
  prompt,
  starter,
  onSubmit,
  ds,
}: {
  prompt?: string;
  starter?: string;
  onSubmit: (v: string) => void;
  ds: CourseManifest["designSystem"];
}) {
  const [value, setValue] = useState(starter || "");
  return (
    <div className="w-full">
      <div className="text-sm font-semibold" style={{ color: ds.colors.textPrimary }}>{prompt || "Enter your code"}</div>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full mt-2 p-2 rounded-lg font-mono text-xs border resize-none"
        style={{ borderColor: `${ds.colors.textSecondary}30`, background: ds.colors.background, color: ds.colors.textPrimary }}
        rows={8}
      />
      <div className="mt-2 flex items-center gap-2">
        <button onClick={() => onSubmit(value)} className="px-3 py-1.5 rounded-lg text-xs font-bold" style={{ background: ds.colors.primary, color: "#fff" }}>Submit</button>
        <button onClick={() => onSubmit("")} className="px-3 py-1.5 rounded-lg border text-xs font-bold" style={{ borderColor: ds.colors.textSecondary, color: ds.colors.textPrimary }}>Skip</button>
      </div>
    </div>
  );
}
