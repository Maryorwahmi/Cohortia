import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';

interface CourseOption {
  id: string;
  title: string;
  level: string;
  subcategory: string;
}

interface SubcategoryOption {
  name: string;
  level: string;
  courseCount: number;
}

const API_ROOT = (import.meta.env.VITE_API_URL || '/api/v1').replace(/\/+$/, '');
const ALL_SUBCATEGORY_OPTION = 'all-subcategory';
const ACTIVE_JOB_STORAGE_KEY = 'cohortia_automation_active_job';

async function readApiResponse(response: Response) {
  const text = await response.text();
  let payload: { success?: boolean; error?: string; message?: string; data?: any } | null = null;
  try {
    payload = text ? JSON.parse(text) : null;
  } catch {
    throw new Error(`Automation service returned an invalid response (${response.status}).`);
  }
  if (!response.ok || !payload?.success) {
    throw new Error(payload?.error || payload?.message || `Automation request failed (${response.status}).`);
  }
  return payload;
}

export default function AutomationPage() {
  const { user, loading: authLoading } = useAuth();
  const [category, setCategory] = useState('computer-science');
  const [subcategories, setSubcategories] = useState<SubcategoryOption[]>([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [catalogCourses, setCatalogCourses] = useState<CourseOption[]>([]);
  const [courses, setCourses] = useState<CourseOption[]>([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [overwrite, setOverwrite] = useState(false);
  const [loading, setLoading] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [jobId, setJobId] = useState<string | null>(() => localStorage.getItem(ACTIVE_JOB_STORAGE_KEY));
  const [liveLogs, setLiveLogs] = useState<string[]>([]);
  const pollFailuresRef = useRef(0);
  const pollTimerRef = useRef<number | null>(null);

  const authHeaders = () => {
    const token = localStorage.getItem('cohortia_token');
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  useEffect(() => {
    if (authLoading || user?.role !== 'admin') return;
    void loadCourses();
  }, [authLoading, category, user?.role]);

  useEffect(() => {
    if (!subcategories.length) return;
    if (!selectedSubcategory || !subcategories.some((item) => item.name === selectedSubcategory)) {
      setSelectedSubcategory(subcategories[0].name);
    }
  }, [subcategories, selectedSubcategory]);

  useEffect(() => {
    if (!selectedSubcategory) {
      setCourses([]);
      setSelectedCourse('');
      return;
    }

    const matchingCourses = catalogCourses.filter((course) => course.subcategory === selectedSubcategory);
    setCourses([
      { id: ALL_SUBCATEGORY_OPTION, title: 'Select all courses in subcategory', level: '', subcategory: selectedSubcategory },
      ...matchingCourses,
    ]);
    setSelectedCourse(ALL_SUBCATEGORY_OPTION);
  }, [catalogCourses, selectedSubcategory]);

  useEffect(() => {
    if (!jobId) return;
    setBusy(true);

    const pollStatus = async () => {
      try {
        const response = await fetch(`${API_ROOT}/automation/jobs/${encodeURIComponent(jobId)}`, {
          headers: authHeaders(),
        });
        const payload = await readApiResponse(response);

        const nextLogs = payload?.data?.logs || [];
        setLiveLogs(nextLogs);
        setError(null);
        pollFailuresRef.current = 0;

        const status = payload?.data?.status;
        if (status === 'completed' || status === 'failed') {
          setBusy(false);
          setMessage(status === 'completed'
            ? 'Generation and import completed successfully.'
            : 'Generation finished with errors.');
          if (status === 'failed') {
            setError(payload?.data?.result?.error || payload?.data?.result?.message || 'The generation job failed.');
          }
          localStorage.removeItem(ACTIVE_JOB_STORAGE_KEY);
          setJobId(null);
          return;
        }

        pollTimerRef.current = window.setTimeout(pollStatus, 1500);
      } catch (err) {
        pollFailuresRef.current += 1;
        setError(err instanceof Error ? err.message : 'Unexpected error while polling generation status');
        if (pollFailuresRef.current >= 3) {
          setBusy(false);
          setMessage('Generation status is unavailable. Use Emergency stop before restarting.');
          localStorage.removeItem(ACTIVE_JOB_STORAGE_KEY);
          setJobId(null);
          return;
        }
        pollTimerRef.current = window.setTimeout(pollStatus, 5000);
      }
    };

    pollStatus();

    return () => {
      if (pollTimerRef.current) {
        window.clearTimeout(pollTimerRef.current);
      }
    };
  }, [jobId]);

  async function loadCourses() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_ROOT}/automation/courses?category=${encodeURIComponent(category)}`, {
        headers: authHeaders(),
      });
      const payload = await response.json();
      if (!response.ok || !payload?.success) {
        throw new Error(payload?.error || 'Failed to load courses.');
      }

      const nextSubcategories = payload?.data?.subcategories || [];
      setSubcategories(nextSubcategories);

      const nextSelected = selectedSubcategory && nextSubcategories.some((item) => item.name === selectedSubcategory)
        ? selectedSubcategory
        : (nextSubcategories[0]?.name || '');
      setSelectedSubcategory(nextSelected);

      setCatalogCourses(payload?.data?.courses || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unexpected error');
      setCourses([]);
      setCatalogCourses([]);
      setSubcategories([]);
      setSelectedSubcategory('');
      setSelectedCourse('');
    } finally {
      setLoading(false);
    }
  }

  async function handleGenerate() {
    setBusy(true);
    setMessage(null);
    setError(null);
    setLiveLogs([]);

    try {
      const selected = courses.find((course) => course.id === selectedCourse);
      const courseId = selectedCourse === ALL_SUBCATEGORY_OPTION ? 'all' : selectedCourse;
      const response = await fetch(`${API_ROOT}/automation/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...authHeaders() },
        body: JSON.stringify({
          category,
          courseId,
          subcategory: selected?.subcategory || selectedSubcategory || null,
          module: null,
          overwrite,
        }),
      });

      const payload = await readApiResponse(response);

      const nextJobId = payload?.data?.jobId;
      if (!nextJobId) {
        throw new Error('No generation job was created.');
      }

      setJobId(nextJobId);
      localStorage.setItem(ACTIVE_JOB_STORAGE_KEY, nextJobId);
      setMessage('Generation started. Watching live chapter progress…');
    } catch (err) {
      setBusy(false);
      setError(err instanceof Error ? err.message : 'Unexpected error while generating');
    }
  }

  async function handleEmergencyStop() {
    setError(null);
    try {
      const response = await fetch(`${API_ROOT}/automation/jobs/stop-all`, {
        method: 'POST',
        headers: authHeaders(),
      });
      const payload = await readApiResponse(response);
      setBusy(false);
      setMessage(payload.message || 'All automation jobs were cancelled.');
      localStorage.removeItem(ACTIVE_JOB_STORAGE_KEY);
      setJobId(null);
      setLiveLogs([]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Emergency stop failed');
    }
  }

  const selectedCourseInfo = courses.find((course) => course.id === selectedCourse);
  const visibleLogs = liveLogs.flatMap((line) => line.split(/\r?\n/)).filter((line) => line.trim().length > 0).slice(-40);

  if (authLoading) {
    return <div className="mx-auto w-full max-w-6xl px-6 py-12 text-slate-600">Checking administrator access…</div>;
  }

  if (user?.role !== 'admin') {
    return (
      <div className="mx-auto w-full max-w-2xl px-6 py-12">
        <div className="rounded-[28px] border border-rose-200 bg-rose-50 p-8 text-rose-800">
          This page is restricted to administrators.
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12 text-slate-900">
      <div className="mb-8 rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <p className="mb-3 inline-flex rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-700">
          Automation
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Course generation pipeline</h1>
        <p className="mt-3 max-w-3xl text-base text-slate-600">
          Select a category and course to generate the learning-board manifests. Each chapter is validated before it is saved and pushed into the live dataset.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_1.9fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">Category</label>
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:bg-white"
              >
                <option value="computer-science">Computer Science</option>
                <option value="artificial-intelligence">Artificial Intelligence</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">Subcategory</label>
              <select
                value={selectedSubcategory}
                onChange={(event) => setSelectedSubcategory(event.target.value)}
                disabled={loading || subcategories.length === 0}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:bg-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {subcategories.length === 0 ? (
                  <option value="">No subcategories found</option>
                ) : (
                  subcategories.map((subcategory) => (
                    <option key={subcategory.name} value={subcategory.name}>
                      {subcategory.name}
                    </option>
                  ))
                )}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">Course</label>
              <select
                value={selectedCourse}
                onChange={(event) => setSelectedCourse(event.target.value)}
                disabled={loading || courses.length === 0}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:bg-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {courses.length === 0 ? (
                  <option value="">No courses found</option>
                ) : (
                  courses.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.title}
                    </option>
                  ))
                )}
              </select>
            </div>

            <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 shadow-sm">
              <input
                type="checkbox"
                checked={overwrite}
                onChange={(event) => setOverwrite(event.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              Overwrite existing generated chapters and re-import them
            </label>

            <button
              type="button"
              onClick={() => void handleGenerate()}
              disabled={busy || !selectedCourse || loading}
              className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3.5 text-base font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.25)] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {busy ? 'Generating and importing…' : 'Generate and publish'}
            </button>
            {(busy || jobId) && (
              <button
                type="button"
                onClick={() => void handleEmergencyStop()}
                className="inline-flex w-full items-center justify-center rounded-2xl border border-red-300 bg-red-600 px-5 py-3.5 text-base font-semibold text-white transition hover:bg-red-700"
              >
                Emergency stop and clear queue
              </button>
            )}

            {message && (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
                {message}
              </div>
            )}

            {error && (
              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">
                {error}
              </div>
            )}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
          <h2 className="text-xl font-bold text-slate-900">Pipeline rules</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-700">
            <li>• Reads from the Git-backed syllabus source in the docs folder.</li>
            <li>• Generates the learning-board manifest and validates screen count and narration quality.</li>
            <li>• Saves the validated artifact before import.</li>
            <li>• Pushes the chapter data into Turso immediately after validation succeeds.</li>
            <li>• Publishes only when the import job completes without errors.</li>
          </ul>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Selected course</p>
            <p className="mt-3 text-lg font-semibold text-slate-900">
              {selectedCourseInfo?.title || 'No course selected'}
            </p>
            <p className="mt-2 text-sm text-slate-600">
              {selectedCourseInfo?.subcategory || 'Choose a course to begin'}
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-900 p-4 text-sm shadow-inner">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">Live generation log</p>
              <span className="rounded-full bg-slate-700 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-slate-200">
                {busy ? 'running' : jobId ? 'polling' : 'idle'}
              </span>
            </div>

            <div className="max-h-[420px] space-y-2 overflow-y-auto rounded-xl border border-slate-700 bg-slate-950 p-3 font-mono text-[11px] text-slate-100">
              {visibleLogs.length === 0 ? (
                <div className="text-slate-400">Waiting for generation output…</div>
              ) : (
                visibleLogs.map((line, index) => (
                  <div key={`${line}-${index}`} className="whitespace-pre-wrap break-words text-slate-100">
                    {line}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
