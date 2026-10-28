import React, { useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles, HelpCircle } from 'lucide-react';

interface TeacherAvatarProps {
  isSpeaking: boolean;
  isMuted: boolean;
  onToggleMute: () => void;
  narrationText: string;
  playbackSpeed: number;
  className?: string;
}

export const TeacherAvatar: React.FC<TeacherAvatarProps> = ({
  isSpeaking,
  isMuted,
  onToggleMute,
  narrationText,
  playbackSpeed,
  className = '',
}) => {
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Web Speech API integration for realistic teacher voice narration
  useEffect(() => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeaking && !isMuted && narrationText) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(narrationText);
      utterance.rate = playbackSpeed * 0.95;
      utterance.pitch = 1.05; // warm, friendly tone
      
      // Attempt to pick a pleasant English voice if available
      const voices = window.speechSynthesis.getVoices();
      const naturalVoice = voices.find(
        (v) => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Karen'))
      );
      if (naturalVoice) {
        utterance.voice = naturalVoice;
      }

      speechRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    } else {
      window.speechSynthesis.cancel();
    }

    return () => {
      window.speechSynthesis.cancel();
    };
  }, [isSpeaking, isMuted, narrationText, playbackSpeed]);

  return (
    <div className={`flex items-start gap-4 p-4 bg-white/95 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-xs ${className}`}>
      {/* Teacher Avatar Portrait */}
      <div className="relative shrink-0">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 via-rose-50 to-orange-100 border border-amber-200/80 p-1 flex items-center justify-center shadow-inner relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-radial from-amber-200/40 to-transparent pointer-events-none" />

          {/* SVG Teacher Illustration: Warm, friendly instructor */}
          <svg
            viewBox="0 0 64 64"
            className="w-12 h-12 text-slate-700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Hair back */}
            <path
              d="M16 32C16 18 22 10 32 10C42 10 48 18 48 32V42H16V32Z"
              fill="#475569"
            />
            {/* Neck */}
            <path d="M28 42H36V48H28V42Z" fill="#FBCFE8" />
            {/* Face */}
            <circle cx="32" cy="30" r="14" fill="#FDE68A" />
            {/* Hair bangs */}
            <path
              d="M18 26C20 20 25 16 32 16C39 16 44 20 46 26C42 22 36 21 32 21C27 21 21 23 18 26Z"
              fill="#334155"
            />
            {/* Glasses frame */}
            <rect
              x="22"
              y="26"
              width="8"
              height="6"
              rx="2"
              stroke="#0F172A"
              strokeWidth="1.5"
              fill="#FFFFFF"
              fillOpacity="0.7"
            />
            <rect
              x="34"
              y="26"
              width="8"
              height="6"
              rx="2"
              stroke="#0F172A"
              strokeWidth="1.5"
              fill="#FFFFFF"
              fillOpacity="0.7"
            />
            <line x1="30" y1="29" x2="34" y2="29" stroke="#0F172A" strokeWidth="1.5" />
            {/* Friendly eyes */}
            <circle cx="26" cy="29" r="1.2" fill="#0F172A" />
            <circle cx="38" cy="29" r="1.2" fill="#0F172A" />
            {/* Smile / Speaking mouth */}
            {isSpeaking ? (
              <path
                d="M28 36Q32 40 36 36Q32 38 28 36Z"
                fill="#DC2626"
                className="animate-pulse"
              />
            ) : (
              <path
                d="M28 36Q32 39 36 36"
                stroke="#B91C1C"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
            {/* Collar/Shirt */}
            <path
              d="M20 48C20 44 24 43 32 43C40 43 44 44 44 48V56H20V48Z"
              fill="#0284C7"
            />
            <path
              d="M32 43L28 49H36L32 43Z"
              fill="#E0F2FE"
            />
          </svg>
        </div>

        {/* Live Audio Waves / Status Indicator */}
        <div
          className={`absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-full text-[9px] font-semibold flex items-center gap-1 border shadow-xs ${
            isSpeaking
              ? 'bg-emerald-500 text-white border-white animate-pulse'
              : 'bg-slate-100 text-slate-600 border-slate-300'
          }`}
        >
          {isSpeaking ? (
            <>
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              <span>LIVE</span>
            </>
          ) : (
            <span>IDLE</span>
          )}
        </div>
      </div>

      {/* Teacher speech dialogue & details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 mb-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm text-slate-800">Prof. Elena</span>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-100/80 text-amber-900 border border-amber-200 font-medium flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-600" />
              Practical Mentor
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={onToggleMute}
              title={isMuted ? 'Unmute teacher audio' : 'Mute teacher audio'}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-slate-400" />
              ) : (
                <Volume2 className="w-4 h-4 text-emerald-600" />
              )}
            </button>
          </div>
        </div>

        {/* Dynamic speech transcript with audio waveform indicator */}
        <div className="relative">
          <p className="text-sm text-slate-700 leading-relaxed font-normal">
            {narrationText}
          </p>
        </div>
      </div>
    </div>
  );
};
