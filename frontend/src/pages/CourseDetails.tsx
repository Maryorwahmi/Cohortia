import {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Clock3, GraduationCap, Layers3, Users} from 'lucide-react';
import {catalogCourseApi, CatalogCourse, trackApi} from '../services/api';
import {useAuth} from '../context/AuthContext';

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

  if (loading) return <div className="flex min-h-screen items-center justify-center bg-immersive-bg font-mono text-sm text-immersive-secondary">Loading course...</div>;
  if (error || !course) return <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-immersive-bg px-4 text-center"><p className="text-sm text-rose-500">{error || 'Course not found.'}</p><Link to="/careers" className="font-bold text-immersive-secondary">Back to careers</Link></div>;

  let skills: string[] = [];
  try {
    skills = course.skills ? JSON.parse(course.skills) : [];
  } catch {
    skills = course.skills?.split(/,\s*/).map((skill) => skill.trim()).filter(Boolean) || [];
  }
  if (!skills.length && details?.skills?.length) skills = details.skills;

  return (
    <div className="min-h-screen bg-immersive-bg pb-16 pt-24 text-left">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Link to="/careers" className="mb-8 inline-flex items-center gap-2 text-xs font-bold text-immersive-text-secondary hover:text-immersive-secondary"><ArrowLeft className="h-4 w-4" /> Back to Careers</Link>
        <header className="grid gap-8 border-b border-immersive-border pb-10 lg:grid-cols-[1fr_320px] lg:items-end">
          <div>
            <span className="mb-3 block text-xs font-mono font-bold uppercase tracking-widest text-[#FF4B3E]">Course overview</span>
            <h1 className="max-w-4xl text-3xl font-extrabold leading-tight text-immersive-text-primary sm:text-5xl">{course.title}</h1>
            <p className="mt-4 text-sm font-medium text-immersive-text-secondary">{course.provider || course.platform || 'Cohortia'} · {course.level || 'Self-paced'} · {course.type || 'Course'}</p>
          </div>
          <div className="rounded-2xl border border-immersive-border bg-immersive-card p-5 shadow-lg shadow-immersive-shadow">
            <div className="mb-4 flex items-center gap-3 text-xs text-immersive-text-secondary"><Clock3 className="h-4 w-4 text-immersive-secondary" /> {course.duration || 'Self-paced'}</div>
            <button type="button" onClick={handleStartCourse} className="flex w-full items-center justify-center gap-2 rounded-xl bg-immersive-primary px-5 py-3 text-sm font-bold text-white transition hover:brightness-110"><span>{user ? 'Start this course' : 'Sign up to start'}</span><ArrowRight className="h-4 w-4" /></button>
          </div>
        </header>

        <main className="mt-10 space-y-10">
          <section className="grid gap-6 lg:grid-cols-[1.35fr_.65fr]">
            <div className="rounded-2xl border border-immersive-border bg-immersive-card p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3"><BookOpen className="h-5 w-5 text-immersive-primary" /><h2 className="text-xl font-extrabold text-immersive-text-primary">What you will learn</h2></div>
              <p className="whitespace-pre-line text-sm leading-7 text-immersive-text-secondary">{details?.overview || course.description || 'Explore this structured course and build practical skills step by step.'}</p>
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
