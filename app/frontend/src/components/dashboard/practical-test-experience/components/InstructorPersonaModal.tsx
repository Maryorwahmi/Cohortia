import React from 'react';
import { InstructorPersona } from '../types/practical';
import { INSTRUCTOR_PERSONAS } from '../data/instructorsData';
import { Check, Sparkles, Volume2, UserCheck, X } from 'lucide-react';

interface InstructorPersonaModalProps {
  selectedPersonaId: string;
  onSelectPersona: (persona: InstructorPersona) => void;
  onClose: () => void;
}

export const InstructorPersonaModal: React.FC<InstructorPersonaModalProps> = ({
  selectedPersonaId,
  onSelectPersona,
  onClose,
}) => {
  const handlePreviewVoice = (persona: InstructorPersona) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(
      `Hello! I'm ${persona.name}. ${persona.tagline}`
    );
    utterance.pitch = persona.speechPitch;
    utterance.rate = persona.speechRate;

    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(
      (v) =>
        v.lang.startsWith('en') &&
        (persona.voiceGender === 'female'
          ? v.name.includes('Samantha') || v.name.includes('Google') || v.name.includes('Zira')
          : v.name.includes('Daniel') || v.name.includes('David') || v.name.includes('Guy'))
    );
    if (voice) utterance.voice = voice;

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-2xl w-full p-6 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Choose Your Course Instructor & Mentor Voice
              </h2>
              <p className="text-xs text-slate-500">
                Each mentor brings distinct domain expertise, pedagogical pacing, and voice dynamics.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Personas List */}
        <div className="space-y-3 mb-5">
          {INSTRUCTOR_PERSONAS.map((persona) => {
            const isSelected = persona.id === selectedPersonaId;

            return (
              <div
                key={persona.id}
                onClick={() => onSelectPersona(persona)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'border-indigo-500 bg-indigo-50/40 ring-2 ring-indigo-500/20'
                    : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center font-mono font-bold text-base text-slate-800">
                      {persona.name.charAt(0)}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-slate-900">
                          {persona.name}
                        </span>
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold">
                          {persona.role}
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 font-medium">
                        {persona.title}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePreviewVoice(persona);
                      }}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center gap-1 transition-colors"
                    >
                      <Volume2 className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Preview</span>
                    </button>

                    {isSelected && (
                      <span className="p-1 rounded-full bg-indigo-600 text-white">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-xs text-slate-600 mb-2 leading-relaxed">
                  {persona.bio}
                </p>

                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-100">
                  <span>Style: {persona.teachingStyle}</span>
                  <span className="italic text-slate-400">"{persona.tagline}"</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
          >
            Confirm Instructor
          </button>
        </div>
      </div>
    </div>
  );
};
