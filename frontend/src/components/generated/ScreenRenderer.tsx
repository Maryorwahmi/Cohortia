import React, { useState, useEffect } from 'react';
import {
  CheckCircle,
  XCircle,
  Lightbulb,
  BookOpen,
  Target,
  ArrowRight,
  Code,
  Terminal,
  MousePointer,
  Brain,
  Cpu,
  Zap,
  GitBranch,
  History,
  Sparkles,
  Trophy,
  Volume2,
} from 'lucide-react';

interface Screen {
  screen: number;
  title: string;
  type: string;
  durationSeconds: number;
  narratorSegment: string;
  content: Record<string, unknown>;
  designNotes?: string;
  layout?: string;
}

interface ScreenRendererProps {
  screen: Screen;
  isActive: boolean;
  assessmentAnswered?: boolean;
  onAssessmentFeedback?: (feedbackText: string) => void;
}

function AnimatedDiv({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      className={`transition-all duration-700 ease-out transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Badge({ children, color = 'indigo' }: { children: React.ReactNode; color?: 'indigo' | 'emerald' | 'purple' | 'rose' | 'amber' | 'cyan' }) {
  const colors = {
    indigo: 'bg-indigo-500/15 text-indigo-200 border-indigo-500/30',
    emerald: 'bg-emerald-500/15 text-emerald-200 border-emerald-500/30',
    purple: 'bg-purple-500/15 text-purple-200 border-purple-500/30',
    rose: 'bg-rose-500/15 text-rose-200 border-rose-500/30',
    amber: 'bg-amber-500/15 text-amber-200 border-amber-500/30',
    cyan: 'bg-cyan-500/15 text-cyan-200 border-cyan-500/30',
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${colors[color]}`}>
      {children}
    </span>
  );
}

function InlineSvg({ svg, className = '' }: { svg?: string; className?: string }) {
  if (!svg) return null;
  return <div className={`w-full h-full ${className}`} dangerouslySetInnerHTML={{ __html: svg }} />;
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildHtmlSrcDoc(fragment: string, title: string, css?: string, _theme: 'dark' | 'light' = 'light') {
  const safeTitle = escapeHtml(title || 'Cohortia Lesson');
  const safeCss = css ? `<style>${css}</style>` : '';
  const theme = 'light';
  const bg = '#f8fafc';
  const text = '#0f172a';
  return `<!doctype html>
<html lang="en" data-theme="${theme}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${safeTitle}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              cohortia: {
                red: '#FF4B3E',
                violet: '#a855f7',
                cyan: '#06b6d4',
                emerald: '#10b981',
                amber: '#f59e0b',
                indigo: '#6366f1',
              }
            }
          }
        }
      };
      (function(){ const t=document.documentElement.getAttribute('data-theme'); if(t==='dark')document.documentElement.classList.add('dark'); })();
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js"></script>
    <link rel="stylesheet" href="/learning-board-base.css" />
    <script src="/learning-board-base.js"></script>
    ${safeCss}
    <style>
      html, body { margin: 0; width: 100%; height: 100%; background: ${bg}; color: ${text}; overflow: hidden; }
      body { font-family: Inter, ui-sans-serif, system-ui, sans-serif; }

      /* Default entrance motion for every HTML screen */
      @keyframes fadeInUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      body > div { animation: fadeIn 0.4s ease-out; }
      body > div > * { animation: fadeInUp 0.55s cubic-bezier(0.16, 1, 0.3, 1) both; }
      body > div > *:nth-child(1) { animation-delay: 0.05s; }
      body > div > *:nth-child(2) { animation-delay: 0.12s; }
      body > div > *:nth-child(3) { animation-delay: 0.19s; }
      body > div > *:nth-child(4) { animation-delay: 0.26s; }
      body > div > *:nth-child(5) { animation-delay: 0.33s; }
      body > div > *:nth-child(6) { animation-delay: 0.40s; }
      body > div > *:nth-child(7) { animation-delay: 0.47s; }
      body > div > *:nth-child(8) { animation-delay: 0.54s; }

      /* Light-mode safety net for dark-only generated fragments */
      [data-theme="light"] [class*="bg-slate-950"],
      [data-theme="light"] [class*="bg-slate-900"],
      [data-theme="light"] [class*="bg-indigo-950"],
      [data-theme="light"] [class*="bg-purple-950"],
      [data-theme="light"] [class*="bg-emerald-950"] { background-color: transparent !important; }
      [data-theme="light"] [class*="text-white"] { color: #0f172a !important; }
      [data-theme="light"] [class*="border-white"] { border-color: rgba(226, 232, 240, 0.8) !important; }
    </style>
  </head>
  <body>
    ${fragment}
  </body>
</html>`;
}

function HtmlScreen({ content, title }: { content: Record<string, unknown>; title: string }) {
  const html = String(content.html || '').trim();
  const css = String(content.css || '').trim();
  return (
    <div className="h-full w-full p-4 md:p-6 overflow-hidden">
      <div className="h-full rounded-3xl overflow-hidden border border-white/10 bg-slate-950 shadow-[0_0_50px_rgba(99,102,241,0.15)]">
        <iframe
          title={title}
          className="h-full w-full border-0 bg-slate-950"
          srcDoc={buildHtmlSrcDoc(html, title, css)}
          sandbox="allow-scripts"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}

function GlowOrb({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF4B3E]/30 to-purple-600/30 blur-2xl rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function FloatingKeywords({ keywords }: { keywords: string[] }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {keywords.slice(0, 6).map((kw, i) => (
        <span
          key={i}
          className="absolute text-[10px] font-bold text-white/30 bg-white/5 border border-white/10 px-2 py-1 rounded-full"
          style={{
            top: `${12 + (i * 16) % 72}%`,
            left: `${8 + (i * 19) % 84}%`,
            animationDelay: `${i * 0.4}s`,
          }}
        >
          {kw}
        </span>
      ))}
    </div>
  );
}

function ConceptVisual({ visual, svg }: { visual?: Record<string, string>; svg?: string }) {
  const description = visual?.description || '';
  const type = visual?.type || '';
  const keywords = description
    .replace(/[^a-zA-Z0-9\s,]/g, '')
    .split(/[\s,]+/)
    .filter((w) => w.length > 3 && ['learning', 'problem', 'decision', 'pattern', 'network', 'brain', 'circuit', 'data', 'model', 'input', 'output', 'process', 'system'].includes(w.toLowerCase()));

  if (svg) {
    return (
      <div className="w-full h-full flex items-center justify-center p-4">
        <GlowOrb className="w-full h-full max-w-[320px] max-h-[320px]">
          <div className="w-full h-full drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]">
            <InlineSvg svg={svg} />
          </div>
        </GlowOrb>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[12rem] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-4 flex flex-col items-center justify-center overflow-hidden">
      <FloatingKeywords keywords={keywords.length ? keywords : ['Learn', 'Build', 'Master']} />
      <GlowOrb className="w-28 h-28">
        {type.includes('brain') || type.includes('neural') || description.toLowerCase().includes('brain') ? (
          <Brain className="w-14 h-14 text-white" />
        ) : type.includes('flow') || type.includes('process') ? (
          <GitBranch className="w-14 h-14 text-white" />
        ) : type.includes('time') || type.includes('history') ? (
          <History className="w-14 h-14 text-white" />
        ) : (
          <Cpu className="w-14 h-14 text-white" />
        )}
      </GlowOrb>
      <p className="relative z-10 mt-4 text-xs text-white/50 text-center max-w-[80%]">{description}</p>
    </div>
  );
}

function TimelineVisual({ nodes }: { nodes: Record<string, string>[] }) {
  return (
    <div className="h-full flex items-center justify-center overflow-hidden">
      <div className="relative flex flex-col gap-3 py-2 max-h-full">
        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-[#FF4B3E] to-purple-500 rounded-full" />
        {nodes.map((node, idx) => (
          <div key={node.id || idx} className="relative pl-8">
            <div className="absolute left-1.5 top-2 w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3 hover:bg-white/15 transition-colors">
              <h4 className="text-sm font-bold text-white/90">{node.label}</h4>
              <p className="text-xs text-white/60 mt-1 line-clamp-2">{node.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SpectrumVisual({ nodes }: { nodes: Record<string, string>[] }) {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-3 p-2">
      {nodes.map((node, idx) => {
        const size = 0.7 + (idx / Math.max(nodes.length - 1, 1)) * 0.3;
        return (
          <div
            key={node.id || idx}
            className="w-full max-w-md rounded-2xl border bg-white/10 backdrop-blur-md p-3 flex items-center gap-4 transition-all hover:bg-white/15"
            style={{ transform: `scale(${size})`, opacity: 0.5 + size * 0.5 }}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shrink-0 shadow-lg">
              {idx === 0 ? <Cpu className="w-6 h-6" /> : idx === nodes.length - 1 ? <Sparkles className="w-6 h-6" /> : <Brain className="w-6 h-6" />}
            </div>
            <div>
              <h4 className="text-base font-bold text-white/90">{node.label}</h4>
              <p className="text-xs text-white/60 line-clamp-2">{node.detail}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function WelcomeScreen({ content }: { content: Record<string, unknown> }) {
  const headline = String(content.headline || '');
  const subtitle = String(content.subtitle || '');
  const outcomes = Array.isArray(content.outcomes) ? content.outcomes : [];
  const heroSvg = typeof content.heroSvg === 'string' ? content.heroSvg : '';

  return (
    <div className="h-full w-full flex flex-col md:flex-row items-center justify-center gap-8 p-8 md:p-12 overflow-hidden">
      <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left z-10">
        <AnimatedDiv>
          <Badge color="indigo">Course Welcome</Badge>
        </AnimatedDiv>
        <AnimatedDiv delay={100}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mt-5 mb-4 leading-[1.05] bg-gradient-to-r from-white via-indigo-100 to-purple-200 bg-clip-text text-transparent">
            {headline}
          </h1>
        </AnimatedDiv>
        <AnimatedDiv delay={200}>
          <p className="text-lg md:text-xl text-white/70 max-w-xl mb-8">{subtitle}</p>
        </AnimatedDiv>
        <AnimatedDiv delay={300}>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {outcomes.map((outcome, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 hover:bg-white/15 hover:border-[#FF4B3E]/30 transition-all hover:-translate-y-0.5"
              >
                <div className="w-7 h-7 rounded-full bg-[#FF4B3E]/20 flex items-center justify-center shrink-0">
                  <Target className="w-3.5 h-3.5 text-[#FF4B3E]" />
                </div>
                <span className="text-sm text-white/90 max-w-[16rem] line-clamp-2">{String(outcome)}</span>
              </div>
            ))}
          </div>
        </AnimatedDiv>
        <AnimatedDiv delay={400}>
          <div className="mt-8 flex items-center gap-2 text-xs text-white/40">
            <MousePointer className="w-3 h-3" />
            <span>The lesson will begin automatically</span>
          </div>
        </AnimatedDiv>
      </div>
      <AnimatedDiv delay={200} className="hidden md:flex w-[40%] h-full max-h-[28rem] items-center justify-center">
        {heroSvg ? (
          <GlowOrb className="w-full h-full max-w-[380px] max-h-[380px]">
            <InlineSvg svg={heroSvg} />
          </GlowOrb>
        ) : (
          <GlowOrb className="w-64 h-64 rounded-3xl border border-white/10 bg-gradient-to-br from-[#FF4B3E]/20 to-purple-600/20 flex items-center justify-center">
            <Zap className="w-24 h-24 text-white" />
          </GlowOrb>
        )}
      </AnimatedDiv>
    </div>
  );
}

function IntroScreen({ content }: { content: Record<string, unknown> }) {
  const chapterNumber = String(content.chapterNumber || '');
  const chapterTitle = String(content.chapterTitle || '');
  const hook = String(content.hook || '');
  const objectives = Array.isArray(content.objectives) ? content.objectives : [];

  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-8 md:p-14 overflow-hidden text-center">
      <AnimatedDiv>
        <Badge color="purple">{chapterNumber ? `Chapter ${chapterNumber}` : 'Chapter Intro'}</Badge>
      </AnimatedDiv>
      <AnimatedDiv delay={100}>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mt-4 mb-5 leading-tight bg-gradient-to-r from-white via-purple-100 to-indigo-200 bg-clip-text text-transparent max-w-4xl">
          {chapterTitle}
        </h1>
      </AnimatedDiv>
      <AnimatedDiv delay={200}>
        <p className="text-base md:text-lg text-white/70 max-w-2xl mb-8">{hook}</p>
      </AnimatedDiv>
      <AnimatedDiv delay={300}>
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5 max-w-3xl w-full">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white/50 mb-4 flex items-center justify-center gap-2">
            <BookOpen className="w-4 h-4 text-[#FF4B3E]" />
            Learning Objectives
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {objectives.map((obj, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-sm text-white/90 text-left max-w-[18rem] line-clamp-2">{String(obj)}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedDiv>
    </div>
  );
}

function ConceptScreen({ content }: { content: Record<string, unknown> }) {
  const title = String(content.title || '');
  const explanation = String(content.explanation || '');
  const commonMistake = String(content.commonMistake || '');
  const visual = content.visual as Record<string, string> | undefined;
  const visualSvg = typeof content.visualSvg === 'string' ? content.visualSvg : '';

  return (
    <div className="h-full w-full flex flex-col p-6 md:p-10 overflow-hidden">
      <AnimatedDiv>
        <Badge color="indigo">Core Concept</Badge>
        <h2 className="text-2xl md:text-4xl font-black mt-2 mb-4 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent line-clamp-2">
          {title}
        </h2>
      </AnimatedDiv>

      <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2 gap-5">
        <AnimatedDiv delay={150} className="flex flex-col gap-3 min-h-0">
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
            <p className="text-sm md:text-base text-white/85 leading-relaxed line-clamp-[6]">{explanation}</p>
          </div>
          {commonMistake && (
            <div className="bg-rose-500/10 border border-rose-500/20 rounded-2xl p-3">
              <h4 className="text-[10px] font-bold text-rose-300 uppercase mb-1">Common Mistake</h4>
              <p className="text-xs text-white/85 line-clamp-4">{commonMistake}</p>
            </div>
          )}
        </AnimatedDiv>

        <AnimatedDiv delay={250} className="min-h-0">
          <ConceptVisual visual={visual} svg={visualSvg} />
        </AnimatedDiv>
      </div>
    </div>
  );
}

function DiagramScreen({ content }: { content: Record<string, unknown> }) {
  const title = String(content.title || '');
  const description = String(content.description || '');
  const nodes = Array.isArray(content.nodes) ? (content.nodes as Record<string, string>[]) : [];
  const backgroundSvg = typeof content.backgroundSvg === 'string' ? content.backgroundSvg : '';
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const isTimeline =
    String(content.layout || '').includes('timeline') ||
    title.toLowerCase().includes('cycle') ||
    title.toLowerCase().includes('journey') ||
    title.toLowerCase().includes('history');
  const isSpectrum = nodes.length <= 3 && (title.toLowerCase().includes('spectrum') || title.toLowerCase().includes('levels'));

  return (
    <div className="h-full w-full flex flex-col p-6 md:p-10 overflow-hidden">
      <AnimatedDiv>
        <Badge color="emerald">Interactive Diagram</Badge>
        <h2 className="text-2xl md:text-4xl font-black mt-2 mb-1 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-sm text-white/60 mb-4 line-clamp-2 max-w-3xl">{description}</p>
      </AnimatedDiv>
      <AnimatedDiv delay={150} className="flex-1 min-h-0 relative">
        <div className="h-full bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-4 relative overflow-hidden flex flex-col">
          {backgroundSvg && (
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <InlineSvg svg={backgroundSvg} />
            </div>
          )}
          <div className="relative z-10 flex-1 min-h-0">
            {isTimeline ? (
              <TimelineVisual nodes={nodes} />
            ) : isSpectrum ? (
              <SpectrumVisual nodes={nodes} />
            ) : (
              <div className="h-full flex items-center justify-center gap-3 overflow-hidden flex-wrap">
                {nodes.map((node, idx) => {
                  const isActive = activeNode === node.id;
                  return (
                    <div key={node.id || idx} className="flex items-center">
                      <button
                        onClick={() => setActiveNode(isActive ? null : node.id)}
                        className={`relative p-4 rounded-2xl border transition-all ${
                          isActive
                            ? 'bg-[#FF4B3E]/20 border-[#FF4B3E]/50 scale-105 shadow-[0_0_30px_rgba(255,75,62,0.25)]'
                            : 'bg-white/10 border-white/20 hover:bg-white/15 hover:scale-[1.02]'
                        }`}
                      >
                        <span className="text-sm md:text-base font-bold">{node.label}</span>
                        {isActive && (
                          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-60 bg-black/80 backdrop-blur-md border border-white/20 rounded-xl p-3 z-20">
                            <p className="text-xs text-white/90 text-center">{node.detail}</p>
                          </div>
                        )}
                      </button>
                      {idx < nodes.length - 1 && <ArrowRight className="w-6 h-6 text-white/40 mx-2" />}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </AnimatedDiv>
    </div>
  );
}

function CodeScreen({ content }: { content: Record<string, unknown> }) {
  const title = String(content.title || '');
  const language = String(content.language || 'code');
  const filename = String(content.filename || 'example');
  const code = String(content.code || '');
  const explanation = Array.isArray(content.explanation) ? (content.explanation as Array<Record<string, string>>) : [];
  const lines = code.split('\n');
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [caption, setCaption] = useState('');

  useEffect(() => {
    setDisplayedLines([]);
    setCaption('');
    const lineDelay = 600;
    let current = 0;
    const interval = window.setInterval(() => {
      current += 1;
      if (current > lines.length) {
        window.clearInterval(interval);
        return;
      }
      setDisplayedLines(lines.slice(0, current));
      const note = explanation.find((e) => String(e.line) === String(current));
      if (note) setCaption(note.text);
    }, lineDelay);
    return () => window.clearInterval(interval);
  }, [code]);

  const highlighted = (line: string) => {
    const keywords = ['def', 'return', 'if', 'else', 'for', 'while', 'class', 'import', 'from', 'const', 'let', 'var', 'function', '=>'];
    const strings = line.match(/(['"`].*?['"`])/g) || [];
    let html = line
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    strings.forEach((s) => {
      html = html.replace(
        s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'),
        `<span class="text-emerald-300">${s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span>`
      );
    });
    keywords.forEach((kw) => {
      const re = new RegExp(`\\b${kw}\\b`, 'g');
      html = html.replace(re, `<span class="text-purple-300">${kw}</span>`);
    });
    html = html.replace(/(\/\/.*$)/g, '<span class="text-white/40">$1</span>');
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return (
    <div className="h-full w-full flex flex-col p-6 md:p-10 overflow-hidden">
      <AnimatedDiv>
        <Badge color="purple">
          <Code className="w-3 h-3 inline mr-1" /> Code Theater
        </Badge>
        <h2 className="text-2xl md:text-3xl font-black mt-2 mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
          {title}
        </h2>
      </AnimatedDiv>
      <AnimatedDiv delay={150} className="flex-1 min-h-0">
        <div className="h-full max-w-4xl mx-auto w-full bg-slate-950/80 border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-[0_0_50px_rgba(99,102,241,0.15)]">
          <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>
            <div className="flex items-center gap-1 text-[10px] text-white/60 font-mono">
              <Terminal className="w-3 h-3" />
              {filename}
            </div>
            <div className="text-[10px] text-white/40 uppercase">{language}</div>
          </div>
          <div className="flex-1 overflow-hidden p-4 font-mono text-xs md:text-sm leading-relaxed">
            {displayedLines.map((line, idx) => (
              <div key={idx} className="flex">
                <span className="w-6 text-white/30 text-right mr-3 select-none">{idx + 1}</span>
                <span className="text-white/90">{highlighted(line)}</span>
              </div>
            ))}
            {displayedLines.length < lines.length && <span className="inline-block w-2 h-4 bg-[#FF4B3E] animate-pulse ml-8" />}
          </div>
          <div className="px-4 py-3 bg-white/5 border-t border-white/10 min-h-[3rem]">
            <p className="text-xs md:text-sm text-white/80 flex items-center gap-2">
              <Volume2 className="w-3 h-3 text-[#FF4B3E]" />
              {caption || 'Watch the code appear line by line...'}
            </p>
          </div>
        </div>
      </AnimatedDiv>
    </div>
  );
}

function AssessmentScreen({
  content,
  assessmentAnswered,
  onAssessmentFeedback,
}: {
  content: Record<string, unknown>;
  assessmentAnswered?: boolean;
  onAssessmentFeedback?: (feedbackText: string) => void;
}) {
  const question = String(content.question || '');
  const options = Array.isArray(content.options) ? content.options : [];
  const correctIndex = typeof content.correctIndex === 'number' ? content.correctIndex : -1;
  const explanation = String(content.explanation || '');
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (selected === null || !onAssessmentFeedback) return;
    const isCorrect = selected === correctIndex;
    const feedback = isCorrect ? `That's correct! ${explanation}` : `Not quite. ${explanation}`;
    onAssessmentFeedback(feedback);
  }, [selected, correctIndex, explanation, onAssessmentFeedback]);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-6 md:p-10 overflow-hidden">
      <div className="w-full max-w-3xl">
        <AnimatedDiv>
          <Badge color="rose">Quick Check</Badge>
          <h2 className="text-2xl md:text-4xl font-black mt-3 mb-6 bg-gradient-to-r from-white to-rose-100 bg-clip-text text-transparent">
            {question}
          </h2>
        </AnimatedDiv>
        <AnimatedDiv delay={150}>
          <div className="space-y-3">
            {options.map((opt, idx) => {
              const isSelected = selected === idx;
              const isCorrect = idx === correctIndex;
              const showResult = selected !== null;
              let stateClasses = 'bg-white/10 border-white/20 hover:bg-white/15 hover:scale-[1.01]';
              if (showResult && isCorrect) stateClasses = 'bg-emerald-500/15 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.2)]';
              else if (showResult && isSelected && !isCorrect) stateClasses = 'bg-rose-500/15 border-rose-500/50';
              else if (isSelected) stateClasses = 'bg-[#FF4B3E]/15 border-[#FF4B3E]/50';

              return (
                <button
                  key={idx}
                  onClick={() => selected === null && setSelected(idx)}
                  disabled={selected !== null}
                  className={`w-full text-left px-5 py-4 rounded-2xl border transition-all flex items-center gap-4 ${stateClasses}`}
                >
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold shrink-0">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-sm md:text-base text-white/90">{String(opt)}</span>
                  {showResult && isCorrect && <CheckCircle className="w-5 h-5 text-emerald-400 ml-auto shrink-0" />}
                  {showResult && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-400 ml-auto shrink-0" />}
                </button>
              );
            })}
          </div>
        </AnimatedDiv>
        {selected !== null && (
          <AnimatedDiv delay={200}>
            <div className="mt-5 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
              <p className="text-sm text-white/85">{explanation}</p>
            </div>
          </AnimatedDiv>
        )}
        {assessmentAnswered && (
          <AnimatedDiv delay={300}>
            <div className="mt-4 flex items-center gap-2 text-sm text-emerald-300">
              <Trophy className="w-4 h-4" />
              <span>Answer recorded — moving on after feedback.</span>
            </div>
          </AnimatedDiv>
        )}
      </div>
    </div>
  );
}

function InsightScreen({ content }: { content: Record<string, unknown> }) {
  const title = String(content.title || 'Key Insight');
  const takeaway = String(content.takeaway || '');
  const nextTeaser = String(content.nextTeaser || '');

  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden text-center">
      <AnimatedDiv>
        <GlowOrb className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-6">
          <Lightbulb className="w-12 h-12 md:w-16 md:h-16 text-white" />
        </GlowOrb>
      </AnimatedDiv>
      <AnimatedDiv delay={100}>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-5 bg-gradient-to-r from-white via-[#FF4B3E] to-purple-300 bg-clip-text text-transparent">
          {title}
        </h2>
      </AnimatedDiv>
      <AnimatedDiv delay={200}>
        <p className="text-lg md:text-2xl text-white/90 max-w-3xl mb-6">{takeaway}</p>
      </AnimatedDiv>
      {nextTeaser && (
        <AnimatedDiv delay={300}>
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3 max-w-xl">
            <p className="text-sm md:text-base text-white/70">{nextTeaser}</p>
          </div>
        </AnimatedDiv>
      )}
    </div>
  );
}

export default function ScreenRenderer({ screen, isActive, assessmentAnswered, onAssessmentFeedback }: ScreenRendererProps) {
  if (!isActive) return null;
  if (String(screen.content?.html || '').trim()) {
    return <HtmlScreen content={screen.content} title={screen.title} />;
  }

  switch (screen.type) {
    case 'welcome':
      return <WelcomeScreen content={screen.content} />;
    case 'intro':
      return <IntroScreen content={screen.content} />;
    case 'concept':
      return <ConceptScreen content={screen.content} />;
    case 'diagram':
      return <DiagramScreen content={screen.content} />;
    case 'code':
      return <CodeScreen content={screen.content} />;
    case 'assessment':
      return <AssessmentScreen content={screen.content} assessmentAnswered={assessmentAnswered} onAssessmentFeedback={onAssessmentFeedback} />;
    case 'insight':
      return <InsightScreen content={screen.content} />;
    default:
      return (
        <div className="h-full flex items-center justify-center p-6 text-white/60 text-sm">
          Unknown screen type: {screen.type}
        </div>
      );
  }
}
