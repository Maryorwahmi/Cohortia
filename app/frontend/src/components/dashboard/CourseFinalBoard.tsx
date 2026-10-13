import {useState} from 'react';
import {CheckCircle2, ChevronDown, Clock3, Code2, ListChecks} from 'lucide-react';
import {CourseFinalPackage} from '../../services/api';

interface CourseFinalBoardProps {
  courseFinal: CourseFinalPackage;
}

export default function CourseFinalBoard({courseFinal}: CourseFinalBoardProps) {
  const [selectedId, setSelectedId] = useState(courseFinal.capstones[0]?.id || '');
  const [expanded, setExpanded] = useState(true);
  const selected = courseFinal.capstones.find((item) => item.id === selectedId) || courseFinal.capstones[0];
  const exam = courseFinal.exam;

  return (
    <section className="pt-3 pb-12 space-y-8">
      <div>
        <span className="text-xs font-mono font-bold tracking-widest text-[#FF4B3E] uppercase block mb-2">| COURSE FINALS</span>
        <h2 className="text-2xl sm:text-3xl font-sans font-extrabold text-immersive-text-primary tracking-tight">Final project & examination</h2>
        <p className="text-sm text-immersive-text-secondary max-w-3xl font-medium mt-1">This workspace is generated from the course specification. Choose one capstone brief, review its evidence requirements, then prepare for the course-specific final examination.</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1.25fr_0.75fr] gap-6">
        <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-mono font-bold tracking-widest text-[#FF4B3E] uppercase">Capstone options</p>
              <h3 className="text-lg font-bold text-immersive-text-primary">Select your final build</h3>
            </div>
            <Code2 className="w-5 h-5 text-[#FF4B3E]" />
          </div>
          <div className="grid gap-3">
            {courseFinal.capstones.map((option) => (
              <button key={option.id} onClick={() => setSelectedId(option.id)} className={`text-left rounded-2xl border p-4 transition-colors ${selected?.id === option.id ? 'border-[#FF4B3E]/60 bg-[#FF4B3E]/10' : 'border-immersive-border hover:border-[#FF4B3E]/30'}`}>
                <div className="flex items-start justify-between gap-3">
                  <span className="text-sm font-bold text-immersive-text-primary">Option {option.optionNumber}: {option.title}</span>
                  {selected?.id === option.id && <CheckCircle2 className="w-4 h-4 text-[#FF4B3E] shrink-0" />}
                </div>
                <p className="text-xs text-immersive-text-secondary mt-1">{option.description}</p>
              </button>
            ))}
          </div>
          {selected && (
            <div className="border-t border-immersive-border/40 pt-5 space-y-4">
              <button onClick={() => setExpanded((value) => !value)} className="w-full flex items-center justify-between text-left">
                <span className="text-xs font-mono font-bold tracking-widest text-immersive-text-secondary uppercase">Build requirements & rubric</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
              </button>
              {expanded && <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <p className="text-xs font-bold text-immersive-text-primary mb-2">Required evidence</p>
                  <ul className="space-y-2">{selected.requirements.map((item) => <li key={item} className="text-xs text-immersive-text-secondary flex gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#FF4B3E] shrink-0 mt-0.5" />{item}</li>)}</ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-immersive-text-primary mb-2">Evaluation rubric</p>
                  <ul className="space-y-2">{selected.rubric.map((item) => <li key={item.criterion} className="text-xs text-immersive-text-secondary flex justify-between gap-3"><span>{item.criterion}</span><span className="font-mono text-[#FF4B3E]">{item.weight}%</span></li>)}</ul>
                  {selected.estimatedTime && <p className="text-[11px] text-immersive-text-secondary mt-3 flex items-center gap-1"><Clock3 className="w-3.5 h-3.5" />{selected.estimatedTime}</p>}
                </div>
              </div>}
            </div>
          )}
        </div>

        <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 space-y-5">
          <div className="flex items-center justify-between gap-4"><div><p className="text-[10px] font-mono font-bold tracking-widest text-[#FF4B3E] uppercase">Assessment</p><h3 className="text-lg font-bold text-immersive-text-primary">{exam?.title || 'Final examination'}</h3></div><Code2 className="w-5 h-5 text-[#FF4B3E]" /></div>
          <p className="text-xs text-immersive-text-secondary leading-relaxed">{exam?.instructions || 'Complete the course-specific examination after preparing your capstone.'}</p>
          {exam && <>
            <div className="grid grid-cols-2 gap-3 text-xs font-mono"><div className="rounded-xl border border-immersive-border p-3"><Clock3 className="w-4 h-4 text-[#FF4B3E] mb-2" /><span className="block text-immersive-text-secondary">TIME LIMIT</span><strong className="text-immersive-text-primary">{exam.timeLimitMinutes ? `${exam.timeLimitMinutes} min` : 'Not timed'}</strong></div><div className="rounded-xl border border-immersive-border p-3"><ListChecks className="w-4 h-4 text-[#FF4B3E] mb-2" /><span className="block text-immersive-text-secondary">QUESTIONS</span><strong className="text-immersive-text-primary">{exam.questionCount}</strong></div></div>
            <div className="flex flex-wrap gap-2">{exam.sections.map((section) => <span key={section} className="text-[10px] font-mono rounded-full border border-[#FF4B3E]/20 bg-[#FF4B3E]/10 text-[#FF4B3E] px-2.5 py-1">{section}</span>)}</div>
          </>}
          <button disabled className="w-full rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-500 py-2.5 text-xs font-bold cursor-not-allowed">Exam attempt unlocks after course completion</button>
        </div>
      </div>
    </section>
  );
}
