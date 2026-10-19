import {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Clock3, GraduationCap, Layers3, Users} from 'lucide-react';
import {catalogCourseApi, CatalogCourse, trackApi} from '../services/api';
import {useAuth} from '../context/AuthContext';
import {getCourseImage} from '../data/courseImages';

interface CourseDetailsData {
  overview: string;
  keyConcepts: string[];
  outcomes: string[];
  skills?: string[];
  syllabus: Array<{module: string; theme: string; chapters: string}>;
}

export default function CourseDetails() {
  const {courseId = ''} = useParams();
  const navigate = useNavigate();
  const {user} = useAuth();
  const [course, setCourse] = useState<CatalogCourse | null>(null);
  const [details, setDetails] = useState<CourseDetailsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    catalogCourseApi.getDetails(courseId)
      .then((response) => {
        setCourse(response.data?.course || null);
        setDetails(response.data?.details || null);
      })
      .catch((err) => setError(err instanceof Error ? err.message : 'Unable to load this course.'))
      .finally(() => setLoading(false));
  }, [courseId]);

  const handleStartCourse = async () => {
    if (!course) return;
    if (!user) {
      navigate('/signup', {state: {selectedTrackId: course.id}});
      return;
    }
    try {
      await trackApi.enroll(course.id);
      navigate('/dashboard');
    } catch (err) {
      window.alert(err instanceof Error ? err.message : 'Unable to enroll in this course.');
    }
  };

  const normalizeCourseText = (value?: string) => {
    const raw = (value || '').replace(/\s+/g, ' ').trim();
    if (!raw) return '';

    const withoutWelcome = raw.replace(/^welcome to the\s+/i, '').trim();
    const withoutIntroSentence = withoutWelcome.replace(/^cohortia\s+[A-Za-z0-9\s&'’\-]+?\b(?:certificate|specialization|program|pathway)\b[^.]*\.\s*/i, '').trim();
    const finalText = withoutIntroSentence || withoutWelcome;

    if (finalText.length <= 220) return finalText;
    return `${finalText.slice(0, 220).trim()}…`;
  };

  if (loading) return <div className="flex min-h-screen items-center justify-center bg-immersive-bg font-mono text-sm text-immersive-secondary">Loading course...</div>;
  if (error || !course) return <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-immersive-bg px-4 text-center"><p className="text-sm text-rose-500">{error || 'Course not found.'}</p><Link to="/careers" className="font-bold text-immersive-secondary">Back to careers</Link></div>;

  const heroDescription = normalizeCourseText(course.description) || 'A practical learning path designed to help you build career-ready skills and confidence in the field.';
  const learningSummary = normalizeCourseText(details?.overview || course.description) || 'Build the practical knowledge and confidence needed to apply your learning in real-world situations.';

  let skills: string[] = [];
  try {
    skills = course.skills ? JSON.parse(course.skills) : [];
  } catch {
    skills = course.skills?.split(/,\s*/).map((skill) => skill.trim()).filter(Boolean) || [];
  }
  if (!skills.length && details?.skills?.length) skills = details.skills;
  const courseImage = getCourseImage(course.id, course.image);

  return (
    <div className="min-h-screen bg-immersive-bg pb-16 pt-24 text-left">
      <div className="mx-auto w-full max-w-[1600px] px-3 sm:px-4 lg:px-6">
        <Link to="/careers" className="mb-8 inline-flex items-center gap-2 text-xs font-bold text-immersive-text-secondary hover:text-immersive-secondary"><ArrowLeft className="h-4 w-4" /> Back to Careers</Link>
        <header className="relative isolate overflow-hidden rounded-[2rem] border border-immersive-primary/15 bg-immersive-bg shadow-sm shadow-immersive-shadow">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(17,17,17,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,17,17,0.045)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />
          <div className="pointer-events-none absolute -right-16 -top-24 h-80 w-80 rounded-full bg-immersive-primary/10 blur-3xl" />
          <div className="relative z-10 grid items-center gap-10 px-6 py-9 sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-12 lg:px-14 lg:py-14">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-immersive-primary/20 bg-immersive-card px-3 py-1.5 text-xs font-bold uppercase tracking-[0.17em] text-immersive-primary">Course overview</span>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-immersive-text-primary sm:text-5xl lg:text-6xl">{course.title}</h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-immersive-text-secondary sm:text-lg">
                {heroDescription}
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-sm">
                {[course.provider || course.platform || 'Cohortia', course.level || 'Self-paced', course.type || 'Course'].map((item, index) => (
                  <span key={`${item}-${index}`} className="rounded-full border border-immersive-border bg-immersive-card px-3 py-1.5 font-semibold text-immersive-text-secondary">{item}</span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button type="button" onClick={handleStartCourse} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-immersive-primary px-6 py-3 text-sm font-bold text-white shadow-md shadow-immersive-shadow transition hover:-translate-y-0.5 hover:brightness-110">
                  <span>{user ? 'Start this course' : 'Sign up to start'}</span><ArrowRight className="h-4 w-4" />
                </button>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-immersive-text-secondary"><Clock3 className="h-4 w-4 text-immersive-primary" /> {course.duration || 'Self-paced'}</span>
              </div>
            </div>
            <div className="relative mx-auto flex aspect-square w-full max-w-[360px] items-center justify-center sm:max-w-[410px] lg:max-w-[440px]">
              <div className="absolute inset-[3%] rounded-full border border-immersive-primary/15 animate-[spin_20s_linear_infinite]" aria-hidden="true" />
              <div className="absolute inset-[10%] rounded-full border border-immersive-primary/20" aria-hidden="true" />
              <div className="absolute inset-[17%] rounded-full border border-immersive-primary/25" aria-hidden="true" />
              <span className="absolute left-[10%] top-[26%] h-3.5 w-3.5 rounded-full bg-immersive-primary/80 shadow-[0_0_0_6px_rgba(255,75,62,0.12)]" aria-hidden="true" />
              <span className="absolute right-[7%] top-[70%] h-4 w-4 rounded-full bg-immersive-primary shadow-[0_0_0_7px_rgba(255,75,62,0.12)]" aria-hidden="true" />
              <div className="relative h-[78%] w-[78%] overflow-hidden rounded-full border-4 border-immersive-card bg-gradient-to-br from-immersive-primary/20 via-immersive-bg to-immersive-secondary/20 shadow-[0_20px_40px_rgba(14,18,26,0.12)]">
                {courseImage ? (
                  <img src={courseImage} alt="" className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-immersive-primary"><GraduationCap className="h-20 w-20" aria-hidden="true" /></div>
                )}
              </div>
            </div>
          </div>
        </header>

        <main className="mt-10 space-y-10">
          <section className="grid gap-6 lg:grid-cols-[1.35fr_.65fr]">
            <div className="rounded-2xl border border-immersive-border bg-immersive-card p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3"><BookOpen className="h-5 w-5 text-immersive-primary" /><h2 className="text-xl font-extrabold text-immersive-text-primary">What you will learn</h2></div>
              <p className="whitespace-pre-line text-sm leading-7 text-immersive-text-secondary">{learningSummary}</p>
              <Link to={`/community?courseId=${encodeURIComponent(course.id)}`} className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-immersive-secondary px-5 py-3 text-sm font-bold text-immersive-secondary transition hover:bg-immersive-secondary/10"><Users className="h-4 w-4" /> Join course community</Link>
            </div>
            <div className="rounded-2xl border border-immersive-border bg-immersive-card p-6 sm:p-8"><div className="mb-4 flex items-center gap-3"><Layers3 className="h-5 w-5 text-immersive-secondary" /><h2 className="text-xl font-extrabold text-immersive-text-primary">Skills</h2></div><div className="flex flex-wrap gap-2">{skills.length ? skills.map((skill) => <span key={skill} className="rounded-lg border border-immersive-border bg-immersive-bg px-3 py-2 text-xs font-semibold text-immersive-text-secondary">{skill}</span>) : <span className="text-sm text-immersive-text-secondary">Skills are mapped throughout the course.</span>}</div></div>
          </section>

          <section><div className="mb-5 flex items-center gap-3"><GraduationCap className="h-5 w-5 text-[#FF4B3E]" /><h2 className="text-2xl font-extrabold text-immersive-text-primary">Key concepts</h2></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{(details?.keyConcepts || []).map((concept) => <div key={concept} className="flex gap-3 rounded-xl border border-immersive-border bg-immersive-card p-4 text-sm leading-relaxed text-immersive-text-secondary"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-immersive-secondary" /><span>{concept}</span></div>)}</div></section>

          <section className="rounded-2xl border border-immersive-border bg-immersive-card p-6 sm:p-8"><div className="mb-5 flex items-center gap-3"><Users className="h-5 w-5 text-immersive-primary" /><h2 className="text-2xl font-extrabold text-immersive-text-primary">Upon completing this course</h2></div><ul className="grid gap-3 sm:grid-cols-2">{(details?.outcomes || []).map((outcome) => <li key={outcome} className="flex gap-3 text-sm leading-relaxed text-immersive-text-secondary"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" /><span>{outcome}</span></li>)}</ul></section>

          <section><h2 className="mb-5 text-2xl font-extrabold text-immersive-text-primary">Syllabus structure</h2><div className="overflow-x-auto rounded-2xl border border-immersive-border bg-immersive-card"><table className="w-full min-w-[560px] text-left text-sm"><thead className="border-b border-immersive-border bg-immersive-bg text-xs uppercase tracking-wider text-immersive-text-secondary"><tr><th className="px-5 py-4">Module</th><th className="px-5 py-4">Theme</th><th className="px-5 py-4">Chapters</th></tr></thead><tbody>{(details?.syllabus || []).map((row) => <tr key={`${row.module}-${row.theme}`} className="border-b border-immersive-border/60 last:border-0"><td className="px-5 py-4 font-bold text-immersive-primary">{row.module}</td><td className="px-5 py-4 font-semibold text-immersive-text-primary">{row.theme}</td><td className="px-5 py-4 text-immersive-text-secondary">{row.chapters}</td></tr>)}</tbody></table></div></section>
        </main>
      </div>
    </div>
  );
}
