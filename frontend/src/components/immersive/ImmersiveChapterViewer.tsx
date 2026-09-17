import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play, RotateCw, Volume2, VolumeX } from "lucide-react";
import { loadCourseVoiceMapping, findBrowserVoiceByName } from "../../utils/courseVoiceMapping";
import type { LearningBoardPractical } from "../../services/learningBoardsApi";

export interface ImmersiveScreen {
  screen: number;
  title: string;
  type?: string;
  template?: string;
  durationSeconds?: number;
  narratorSegment?: string;
  narration?: { text?: string; durationSeconds?: number };
  content?: { html?: string; css?: string; [key: string]: unknown };
  visual?: { headline?: string; body?: string; accent?: string; data?: Record<string, unknown> };
  keyIdea?: { title?: string; text?: string };
  [key: string]: unknown;
}
export interface ImmersiveAssessment {
  passingScore?: number;
  questions?: ({
    id: number;
    type: "multiple-choice";
    question: string;
    options: string[];
    correctOption: number;
    explanation: string;
  } | {
    id: number;
    type: "case-study";
    question: string;
    explanation: string;
  } | {
    id: number;
    type: "code-output";
    question: string;
    language: string;
    code: string;
    expectedOutput: string;
    explanation: string;
  } | {
    id: number;
    type: "code-challenge";
    question: string;
    language?: string | null;
    code?: string | null;
    explanation: string;
  })[];
}

export interface ImmersiveChapterManifest {
  schemaVersion?: number;
  schema_version?: string;
  course: string;
  courseId: string;
  course_title?: string;
  course_id?: string;
  module: number;
  moduleTitle?: string;
  chapter: number;
  chapterTitle?: string;
  unitTitle: string;
  chapter_title?: string;
  screens: ImmersiveScreen[];
  learningObjectives?: string[];
  keyConcepts?: string[];
  handsOn?: {
    title: string;
    instructions: string;
    checklist?: string[];
  } | null;
  assessment?: ImmersiveAssessment | null;
  fullNarratorScript?: string;
  generatedAt?: string;
  practical?: LearningBoardPractical | null;
}

interface Props {
  manifest: ImmersiveChapterManifest;
  onRequestNextChapter?: () => void;
  onRequestPrevChapter?: () => void;
  onComplete?: () => void;
  availableChapters?: { key: string; label: string; manifest: ImmersiveChapterManifest }[];
  onSelectChapter?: (manifest: ImmersiveChapterManifest) => void;
}

const RUNTIME_CSS = `*,*::before,*::after{box-sizing:border-box}html,body{width:100%;height:100%;margin:0;overflow:hidden;background:#f8fafc}body{font-family:ui-sans-serif,system-ui,sans-serif}#cohortia-board{width:100%;height:100%;overflow:hidden;position:relative;display:flex;align-items:center;justify-content:center;background:#f8fafc}#cohortia-content{width:100%;height:100%;overflow:hidden;position:relative;transform-origin:center center}svg,img,video,canvas{display:block;max-width:100%;height:auto!important}h1,h2,h3,h4,p{overflow-wrap:anywhere;word-break:break-word}@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important}}`;

function narrationOf(screen: ImmersiveScreen) { return String(screen.narration?.text || screen.narratorSegment || "").trim(); }
function durationOf(screen: ImmersiveScreen) { return Math.max(12, Math.min(90, Number(screen.narration?.durationSeconds || screen.durationSeconds || 20))); }
async function generatedAudioUrl(manifest: ImmersiveChapterManifest, screen: ImmersiveScreen, narration: string) {
  if (!narration || !window.crypto?.subtle) return null;
  const digest = await window.crypto.subtle.digest("SHA-256", new TextEncoder().encode(narration));
  const hash = Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("").slice(0, 12);
  const courseId = encodeURIComponent(manifest.courseId);
  const moduleId = String(manifest.module).padStart(2, "0");
  const chapterId = String(manifest.chapter).padStart(2, "0");
  const screenId = String(screen.screen).padStart(2, "0");
  return `/audio/narration/${courseId}/module-${moduleId}/chapter-${chapterId}/screen-${screenId}-${hash}.mp3`;
}
function normalizeManifest(manifest: ImmersiveChapterManifest) {
  return { ...manifest, course: manifest.course || manifest.course_title || "Course", courseId: manifest.courseId || manifest.course_id || "course", unitTitle: manifest.unitTitle || manifest.chapter_title || "Learning board" };
}

function buildScreenDocument(screen: ImmersiveScreen) {
  const raw = String(screen.content?.html || "");
  if (/^\s*<!doctype html/i.test(raw)) return raw;
  const html = raw;
  const css = String(screen.content?.css || "");
  const csp = "default-src 'none'; style-src 'unsafe-inline' https://cdn.tailwindcss.com; script-src 'unsafe-inline' https://cdn.tailwindcss.com https://cdnjs.cloudflare.com; img-src data: https:; font-src data: https:; connect-src 'none'; object-src 'none'; base-uri 'none'; form-action 'none'";
  const fit = `(function(){var root=document.getElementById('cohortia-content');var board=document.getElementById('cohortia-board');function fit(){if(!root||!board)return;root.style.transform='none';root.style.width='100%';root.style.height='100%';var bounds=board.getBoundingClientRect();var contentWidth=root.scrollWidth || bounds.width;var contentHeight=root.scrollHeight || bounds.height;var scale=Math.min(1, (bounds.width - 12) / Math.max(contentWidth, bounds.width * 0.8), (bounds.height - 12) / Math.max(contentHeight, bounds.height * 0.8), 0.98);root.style.width=(100/Math.max(scale,0.15))+'%';root.style.height=(100/Math.max(scale,0.15))+'%';root.style.transform='scale('+Math.max(scale,0.15)+')';}addEventListener('resize',fit,{passive:true});requestAnimationFrame(function(){requestAnimationFrame(fit)});setTimeout(fit,120)}())`;
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="Content-Security-Policy" content="${csp}"><script src="https://cdn.tailwindcss.com"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script><style>${css}${RUNTIME_CSS}</style></head><body><div id="cohortia-board"><div id="cohortia-content">${html}</div></div><script>${fit}</script></body></html>`;
}

function FallbackScreen({ screen }: { screen: ImmersiveScreen }) {
  const visual = screen.visual || {};
  const data = visual.data || {};
  const options = Array.isArray(data.options) ? data.options.map(String) : [];
  return <div className="flex h-full w-full items-center justify-center bg-slate-50 p-8"><div className="w-full max-w-5xl space-y-5"><div className="text-xs font-bold uppercase tracking-[.2em] text-indigo-600">{screen.template || screen.type || "Lesson"}</div><h2 className="text-4xl font-black text-slate-950">{String(visual.headline || screen.title)}</h2><p className="text-lg leading-relaxed text-slate-600">{String(visual.body || "")}</p>{options.length ? <div className="grid gap-3 md:grid-cols-2">{options.slice(0, 4).map((option, i) => <div key={i} className="rounded-2xl border border-slate-200 bg-white p-4 font-semibold text-slate-800">{String.fromCharCode(65 + i)}. {option}</div>)}</div> : null}<div className="rounded-2xl border-l-4 border-emerald-400 bg-emerald-50 p-4 font-semibold text-slate-800">{String(screen.keyIdea?.text || data.takeaway || "")}</div></div></div>;
}

export default function ImmersiveChapterViewer({ manifest: inputManifest, onRequestNextChapter, onRequestPrevChapter, onComplete }: Props) {
  const manifest = useMemo(() => normalizeManifest(inputManifest), [inputManifest]);
  const screens = manifest.screens || [];
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceName, setVoiceName] = useState("");
  const [speechDone, setSpeechDone] = useState(false);
  const [durationDone, setDurationDone] = useState(false);
  const [screenReady, setScreenReady] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [audioChecked, setAudioChecked] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playbackRunRef = useRef(0);
  const screen = screens[index];
  const narration = screen ? narrationOf(screen) : "";
  const duration = screen ? durationOf(screen) : 20;
  const hasHtmlScreen = Boolean(screen?.content?.html?.trim());

  useEffect(() => { setIndex(0); setProgress(0); setPlaying(true); setSpeechDone(false); setDurationDone(false); setScreenReady(false); }, [manifest]);
  useEffect(() => {
    setScreenReady(false);
  }, [index]);
  useEffect(() => {
    let cancelled = false;
    setAudioUrl(null);
    setAudioChecked(false);
    if (!screen || !narration) return;
    generatedAudioUrl(manifest, screen, narration).then(async (url) => {
      if (!url) {
        if (!cancelled) setAudioChecked(true);
        return;
      }
      try {
        const response = await fetch(url, { method: "HEAD" });
        const contentType = response.headers.get("content-type") || "";
        if (!cancelled && response.ok && contentType.toLowerCase().includes("audio/")) setAudioUrl(url);
      } catch {
        // Browser narration remains available when generated audio is absent.
      } finally {
        if (!cancelled) setAudioChecked(true);
      }
    });
    return () => { cancelled = true; };
  }, [manifest, narration, screen]);
  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    const load = async () => {
      const next = window.speechSynthesis.getVoices().filter((voice) => voice.lang.toLowerCase().startsWith("en"));
      setVoices(next);
      
      // Priority 1: Try to load course-assigned voice
      try {
        const courseVoiceMapping = await loadCourseVoiceMapping();
        const assignedVoice = courseVoiceMapping[manifest.courseId];
        if (assignedVoice) {
          const browserVoice = findBrowserVoiceByName(assignedVoice.label, next);
          if (browserVoice) {
            setVoiceName(browserVoice.name);
            return;
          }
        }
      } catch (error) {
        // Silently ignore if mapping not available
      }
      
      // Priority 2: Default to first available voice
      setVoiceName((current) => current || next[0]?.name || "");
    };
    load();
    window.speechSynthesis.addEventListener("voiceschanged", load);
    return () => window.speechSynthesis.removeEventListener("voiceschanged", load);
  }, [manifest.courseId]);
  useEffect(() => {
    if (!audioChecked || audioUrl || (hasHtmlScreen && !screenReady) || !playing || muted || !narration || typeof window === "undefined" || !window.speechSynthesis) {
      setSpeechDone(true);
      if (typeof window !== "undefined" && window.speechSynthesis && audioUrl) window.speechSynthesis.cancel();
      return;
    }

    window.speechSynthesis.cancel();
    playbackRunRef.current += 1;
    const runId = playbackRunRef.current;
    const utterance = new SpeechSynthesisUtterance(narration);
    utterance.lang = "en-US";
    const voice = voices.find((candidate) => candidate.name === voiceName);
    if (voice) utterance.voice = voice;
    utterance.rate = .92;
    setSpeechDone(false);
    utterance.onend = () => {
      if (runId !== playbackRunRef.current) return;
      setProgress(duration);
      setDurationDone(true);
      setSpeechDone(true);
    };
    utterance.onerror = () => {
      if (runId !== playbackRunRef.current) return;
      setSpeechDone(true);
    };
    window.speechSynthesis.resume();
    window.speechSynthesis.speak(utterance);
    return () => window.speechSynthesis.cancel();
  }, [audioChecked, audioUrl, duration, hasHtmlScreen, index, narration, muted, playing, screenReady, voiceName, voices]);
  useEffect(() => {
    if (!audioChecked || !audioUrl || (hasHtmlScreen && !screenReady) || typeof window === "undefined") return;
    const audio = audioRef.current || new Audio();
    audioRef.current = audio;
    audio.src = audioUrl;
    audio.load();
    audio.muted = muted;
    const handleTimeUpdate = () => setProgress(audio.currentTime);
    const handleEnded = () => {
      setProgress(duration);
      setDurationDone(true);
      setSpeechDone(true);
    };
    const handleError = () => {
      setAudioUrl(null);
      setAudioChecked(true);
      setSpeechDone(false);
    };
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);
    if (playing && !muted) {
      audio.play().catch(() => setSpeechDone(true));
    }
    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
    };
  }, [audioChecked, audioUrl, duration, hasHtmlScreen, index, muted, playing, screenReady]);
  useEffect(() => {
    if ((hasHtmlScreen && !screenReady) || !playing || !screens.length || durationDone || isSeeking) return;
    const timer = window.setInterval(() => setProgress((value) => {
      const next = value + .1;
      if (next < duration) return next;
      setDurationDone(true);
      return duration;
    }), 100);
    return () => window.clearInterval(timer);
  }, [duration, durationDone, hasHtmlScreen, isSeeking, playing, screenReady, screens.length]);

  useEffect(() => {
    if (!playing) return;
    if (!durationDone || !speechDone) return;

    if (index < screens.length - 1) {
      setProgress(0);
      setDurationDone(false);
      setSpeechDone(false);
      setIndex((current) => current + 1);
      return;
    }

    setPlaying(false);
    onComplete?.();
  }, [durationDone, index, onComplete, playing, screens.length, speechDone]);

  if (!screen) return null;
  const jump = (next: number) => { setIndex(Math.max(0, Math.min(screens.length - 1, next))); setProgress(0); setSpeechDone(false); setDurationDone(false); setIsSeeking(false); };
  const handleSeekStart = () => {
    setIsSeeking(true);
    audioRef.current?.pause();
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    playbackRunRef.current += 1;
    setSpeechDone(true);
  };
  const handleSeekChange = (value: number) => {
    const next = Math.max(0, Math.min(duration, value));
    setProgress(next);
    if (audioRef.current && audioUrl) audioRef.current.currentTime = next;
    setDurationDone(next >= duration - 0.05);
  };
  const handleSeekEnd = () => {
    setIsSeeking(false);
    if (audioRef.current && audioUrl && playing && !muted) audioRef.current.play().catch(() => undefined);
    if (progress >= duration - 0.05) {
      setDurationDone(true);
      setSpeechDone(true);
    }
  };
  const progressPercent = duration > 0 ? Math.min(100, (progress / duration) * 100) : 0;
  return <main className="flex h-full w-full flex-col overflow-hidden bg-slate-100 text-slate-900"><header className="flex shrink-0 items-center justify-between gap-3 border-b border-slate-200 bg-white px-4 py-2.5"><div className="flex min-w-0 items-center gap-3"><span className="shrink-0 rounded-md border border-[#FF4B3E]/30 bg-[#FF4B3E]/10 px-2 py-1 text-[10px] font-bold tracking-wider text-[#FF4B3E]">16:9 HD CLASSROOM</span><h1 className="truncate text-xs font-extrabold sm:text-sm">{manifest.course} - Mod {String(manifest.module).padStart(2,"0")} Ch {String(manifest.chapter).padStart(2,"0")}: {manifest.unitTitle}</h1></div><nav className="flex shrink-0 gap-1" aria-label="Screens">{screens.map((item, i) => <button key={item.screen} type="button" aria-label={`Jump to screen ${i + 1}`} title={item.title} onClick={() => jump(i)} className={`h-3 w-3 rounded-full ${i === index ? "bg-[#FF4B3E] ring-2 ring-[#FF4B3E]/30" : i < index ? "bg-emerald-400" : "bg-slate-300"}`} />)}</nav></header><section className="flex min-h-0 flex-1 items-center justify-center overflow-hidden p-2 sm:p-4"><div className="relative aspect-video h-auto max-h-full w-full max-w-[1600px] overflow-hidden border border-slate-200 bg-white shadow-xl">{hasHtmlScreen ? <><iframe key={screen.screen} title={screen.title} className="h-full w-full border-0" srcDoc={buildScreenDocument(screen)} sandbox="allow-scripts" referrerPolicy="no-referrer" onLoad={() => setScreenReady(true)} /><div className={`absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm transition-opacity duration-300 ${screenReady ? "opacity-0 pointer-events-none" : "opacity-100"}`}><div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-lg"><RotateCw className="h-4 w-4 animate-spin text-[#FF4B3E]" />Loading visual screen...</div></div></> : <FallbackScreen screen={screen} />}</div></section><footer className="flex shrink-0 items-center justify-between gap-3 border-t border-slate-200 bg-white px-4 py-2.5"><div className="flex items-center gap-2"><button type="button" onClick={() => setPlaying((value) => !value)} aria-label={playing ? "Pause lecture" : "Play lecture"} className="rounded-xl bg-[#FF4B3E] p-2 text-white">{playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}</button><button type="button" onClick={() => { jump(0); setPlaying(true); }} aria-label="Restart chapter" className="rounded-xl bg-slate-800 p-2 text-white"><RotateCw className="h-4 w-4" /></button><button type="button" onClick={() => setMuted((value) => !value)} aria-label={muted ? "Unmute narration" : "Mute narration"} className="rounded-xl bg-slate-800 p-2 text-white">{muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}</button></div><div className="flex min-w-0 flex-1 items-center gap-3 px-2"><span className="whitespace-nowrap text-xs text-slate-400">{Math.floor(progress)}s / {duration}s</span><input type="range" min={0} max={duration} step={0.1} value={progress} onPointerDown={handleSeekStart} onPointerUp={handleSeekEnd} onMouseDown={handleSeekStart} onMouseUp={handleSeekEnd} onTouchStart={handleSeekStart} onTouchEnd={handleSeekEnd} onBlur={handleSeekEnd} onChange={(event) => handleSeekChange(Number(event.target.value))} aria-label="Seek narration" className="h-2 min-w-0 flex-1 cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#FF4B3E]" /><span className="whitespace-nowrap text-xs text-slate-400">Slide {index + 1}/{screens.length}</span></div><div className="flex items-center gap-2"><button type="button" onClick={() => index ? jump(index - 1) : onRequestPrevChapter?.()} aria-label="Previous screen" className="rounded-xl bg-slate-800 p-2 text-white"><ArrowLeft className="h-4 w-4" /></button><button type="button" onClick={() => index < screens.length - 1 ? jump(index + 1) : onRequestNextChapter?.()} aria-label="Next screen" className="rounded-xl bg-slate-800 p-2 text-white"><ArrowRight className="h-4 w-4" /></button></div></footer></main>;
}
