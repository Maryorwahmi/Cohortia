import React from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Sparkles, ArrowRight } from 'lucide-react';

interface PlaybackControlBarProps {
  currentTime: number;
  durationSeconds: number;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onReplay: () => void;
  onSeek: (time: number) => void;
  mode: 'teach' | 'practical';
  onToggleMode: () => void;
  isSpeaking: boolean;
  isMuted: boolean;
  onToggleMute: () => void;
  activityLabel: string;
  playbackSpeed: number;
  onChangeSpeed: (speed: number) => void;
}

export const PlaybackControlBar: React.FC<PlaybackControlBarProps> = ({
  currentTime,
  durationSeconds,
  isPlaying,
  onTogglePlay,
  onReplay,
  onSeek,
  mode,
  onToggleMode,
  isSpeaking,
  isMuted,
  onToggleMute,
  activityLabel,
  playbackSpeed,
  onChangeSpeed,
}) => {
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercent = Math.min(100, Math.max(0, (currentTime / durationSeconds) * 100));

  const speeds = [1, 1.25, 1.5];

  return (
    <div className="w-full bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-4 py-2.5 flex flex-col gap-2 select-none">
      {/* Scrubber Progress Bar matching screenshot */}
      <div className="relative w-full group py-1 cursor-pointer">
        <input
          type="range"
          min="0"
          max={durationSeconds}
          step="0.5"
          value={currentTime}
          onChange={(e) => onSeek(parseFloat(e.target.value))}
          className="w-full h-1.5 bg-rose-100 rounded-lg appearance-none cursor-pointer accent-rose-500 focus:outline-hidden"
          style={{
            background: `linear-gradient(to right, #f43f5e 0%, #f43f5e ${progressPercent}%, #ffe4e6 ${progressPercent}%, #ffe4e6 100%)`,
          }}
        />
      </div>

      {/* Control Buttons and Activity Label */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Left: Play/Pause, Replay, Time */}
        <div className="flex items-center gap-3">
          <button
            onClick={onTogglePlay}
            className="p-1.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            title={isPlaying ? 'Pause walkthrough' : 'Play walkthrough'}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-slate-700" />
            ) : (
              <Play className="w-4 h-4 fill-slate-700" />
            )}
          </button>

          <button
            onClick={onReplay}
            className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            title="Replay from beginning"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <div className="text-xs font-mono font-medium text-slate-600">
            {formatTime(currentTime)} / {formatTime(durationSeconds)}
          </div>

          {/* Speed Toggle */}
          <button
            onClick={() => {
              const nextIndex = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
              onChangeSpeed(speeds[nextIndex]);
            }}
            className="px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-slate-100 hover:bg-slate-200 text-slate-600"
            title="Change playback speed"
          >
            {playbackSpeed}x
          </button>
        </div>

        {/* Center: Activity Label with Film Emoji matching screenshot */}
        <div className="hidden md:flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-rose-500 uppercase">
          <span>🎞️ {activityLabel}</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-rose-100/70 text-rose-600 font-mono">
            {Math.round(durationSeconds)}s
          </span>
        </div>

        {/* Right: Mode Toggle Button and Teacher Speaking Status */}
        <div className="flex items-center gap-2.5">
          {/* Main coral "Join practical" button matching screenshot */}
          <button
            onClick={onToggleMode}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 ${
              mode === 'teach'
                ? 'bg-rose-500 hover:bg-rose-600 text-white animate-pulse-glow'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white'
            }`}
          >
            <span>{mode === 'teach' ? 'Join practical' : 'Back to Teach Mode'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Teacher Speaking status / audio toggle */}
          <button
            onClick={onToggleMute}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border flex items-center gap-1.5 transition-colors ${
              isSpeaking && !isMuted
                ? 'border-rose-200 bg-rose-50 text-rose-700'
                : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            {isMuted ? (
              <VolumeX className="w-3.5 h-3.5 text-slate-400" />
            ) : (
              <Volume2 className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
            )}
            <span className="text-xs font-sans">
              {isSpeaking ? 'Teacher speaking' : isMuted ? 'Muted' : 'Audio ready'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
