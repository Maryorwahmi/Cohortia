import {useEffect, useState} from 'react';
import {Download, RefreshCw, ShieldCheck} from 'lucide-react';
import {EvidenceFile, projectApi} from '../../services/api';

type ReviewStatus = 'approved' | 'needs_revision';
type PackageStatus = 'draft' | 'review' | 'ready' | 'published' | 'archived';

interface RubricCriterion {
  criterion: string;
  weight: number;
}

function record(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' ? value as Record<string, unknown> : {};
}

function text(value: unknown, fallback = '') {
  return typeof value === 'string' ? value : fallback;
}

function list(value: unknown): unknown[] {
  return Array.isArray(value) ? value : [];
}

export default function CourseFinalReviewPanel() {
  const [packages, setPackages] = useState<Array<Record<string, unknown>>>([]);
  const [submissions, setSubmissions] = useState<Array<Record<string, unknown>>>([]);
  const [examAttempts, setExamAttempts] = useState<Array<Record<string, unknown>>>([]);
  const [feedback, setFeedback] = useState<Record<string, string>>({});
  const [scores, setScores] = useState<Record<string, Record<string, string>>>({});
  const [examScores, setExamScores] = useState<Record<string, string>>({});
  const [examFeedback, setExamFeedback] = useState<Record<string, string>>({});
  const [busyId, setBusyId] = useState('');
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const load = async () => {
    setLoading(true);
    setError('');
    try {
      const [packageResponse, capstoneResponse, examResponse] = await Promise.all([
        projectApi.getCourseFinalPackages(),
        projectApi.getCapstoneReviewQueue(),
        projectApi.getExamReviewQueue(),
      ]);
      if (!packageResponse.success || !packageResponse.data || !capstoneResponse.success || !capstoneResponse.data || !examResponse.success || !examResponse.data) {
        throw new Error(packageResponse.error || capstoneResponse.error || examResponse.error || 'Could not load course final review queues.');
      }
      setPackages(packageResponse.data.packages);
      setSubmissions(capstoneResponse.data.submissions);
      setExamAttempts(examResponse.data.attempts);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : 'Could not load course final review queues.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { void load(); }, []);

  const changePackageStatus = async (courseId: string, status: PackageStatus) => {
    setBusyId(courseId);
    setError('');
    setMessage('');
    try {
      const response = await projectApi.updateCourseFinalStatus(courseId, status);
      if (!response.success || !response.data) throw new Error(response.error || 'Could not update the package status.');
      setMessage(`Package ${courseId} is now ${response.data.status}.`);
      await load();
    } catch (statusError) {
      setError(statusError instanceof Error ? statusError.message : 'Could not update the package status.');
    } finally {
      setBusyId('');
    }
  };

  const download = async (fileId: string) => {
    try {
      const response = await projectApi.getEvidenceDownloadUrl(fileId);
      if (!response.success || !response.data) throw new Error(response.error || 'Could not download evidence.');
      window.open(response.data.downloadUrl, '_blank', 'noopener,noreferrer');
    } catch (downloadError) {
      setError(downloadError instanceof Error ? downloadError.message : 'Could not download evidence.');
    }
  };

  const reviewCapstone = async (submission: Record<string, unknown>, status: ReviewStatus) => {
    const submissionId = text(submission.id);
    const capstone = record(submission.capstone);
    const rubric = list(capstone.rubric).map((item) => record(item) as unknown as RubricCriterion);
    const entries = scores[submissionId] || {};
    const hasRubricScores = rubric.length > 0 && rubric.every((item) => entries[item.criterion] !== undefined && entries[item.criterion] !== '');
    const rubricScores = hasRubricScores ? rubric.map((item) => ({criterion: item.criterion, score: Number(entries[item.criterion])})) : undefined;
    const score = rubricScores
      ? Math.round(rubric.reduce((total, item) => total + item.weight * Number(entries[item.criterion]), 0) / 100)
      : Number(entries.total || 0);
    setBusyId(submissionId);
    setError('');
    setMessage('');
    try {
      const response = await projectApi.reviewCapstoneSubmission(submissionId, {
        status,
        score,
        feedback: feedback[submissionId] || '',
        rubricScores,
      });
      if (!response.success) throw new Error(response.error || 'Could not save the capstone review.');
      setMessage(`Capstone ${submissionId} ${status === 'approved' ? 'approved' : 'returned for revision'}.`);
      await load();
    } catch (reviewError) {
      setError(reviewError instanceof Error ? reviewError.message : 'Could not save the capstone review.');
    } finally {
      setBusyId('');
    }
  };

  const reviewExam = async (attempt: Record<string, unknown>) => {
    const attemptId = text(attempt.id);
    setBusyId(attemptId);
    setError('');
    setMessage('');
    try {
      const response = await projectApi.reviewExamAttempt(attemptId, {
        score: Number(examScores[attemptId] || 0),
        feedback: examFeedback[attemptId] || '',
      });
      if (!response.success) throw new Error(response.error || 'Could not save the exam review.');
      setMessage(`Exam attempt ${attemptId} reviewed.`);
      await load();
    } catch (reviewError) {
      setError(reviewError instanceof Error ? reviewError.message : 'Could not save the exam review.');
    } finally {
      setBusyId('');
    }
  };

  return (
    <section className="space-y-6 rounded-2xl border border-immersive-border bg-immersive-card p-5 sm:p-6">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="flex items-center gap-2 text-lg font-extrabold text-immersive-text-primary"><ShieldCheck className="h-5 w-5 text-immersive-primary" /> Course final review</h2>
          <p className="mt-1 text-xs text-immersive-text-secondary">Manage package publication, grade capstones against their rubrics, and review written exam attempts.</p>
        </div>
        <button type="button" onClick={() => void load()} disabled={loading} className="inline-flex items-center gap-2 rounded-lg border border-immersive-border px-3 py-2 text-xs font-bold text-immersive-text-secondary disabled:opacity-50"><RefreshCw className="h-3.5 w-3.5" /> Refresh</button>
      </header>
      {error && <p role="alert" className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-300">{error}</p>}
      {message && <p role="status" className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-emerald-300">{message}</p>}
      {loading ? <p className="text-sm text-immersive-text-secondary">Loading review queues...</p> : <>
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-immersive-text-primary">Course package publication</h3>
          {packages.map((item) => {
            const courseId = text(item.courseId);
            const validation = record(item.validation);
            const valid = validation.valid === true;
            return <div key={courseId} className="rounded-xl border border-immersive-border bg-immersive-bg/50 p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div><p className="text-sm font-bold text-immersive-text-primary">{text(item.title, courseId)}</p><p className="text-[11px] text-immersive-text-secondary">{courseId} · {text(item.difficulty, 'Difficulty not set')} · {text(item.status)}</p></div>
                <select aria-label={`Set package status for ${text(item.title, courseId)}`} value={text(item.status, 'draft')} disabled={busyId === courseId} onChange={(event) => void changePackageStatus(courseId, event.target.value as PackageStatus)} className="rounded-lg border border-immersive-border bg-immersive-card px-3 py-2 text-xs text-immersive-text-primary">
                  {(['draft', 'review', 'ready', 'published', 'archived'] as PackageStatus[]).map((status) => <option key={status} value={status}>{status}</option>)}
                </select>
              </div>
              {!valid && <ul className="mt-2 list-inside list-disc space-y-1 text-[11px] text-amber-300">{list(validation.errors).map((itemError, index) => <li key={`${courseId}-${index}`}>{text(itemError)}</li>)}</ul>}
            </div>;
          })}
          {!packages.length && <p className="rounded-xl border border-dashed border-immersive-border p-4 text-xs text-immersive-text-secondary">No course final packages found.</p>}
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-bold text-immersive-text-primary">Capstone review queue ({submissions.length})</h3>
          {submissions.map((submission) => {
            const submissionId = text(submission.id);
            const learner = record(submission.learner);
            const capstone = record(submission.capstone);
            const rubric = list(capstone.rubric).map((item) => record(item) as unknown as RubricCriterion);
            const history = list(submission.history);
            const files = list(submission.files).map((item) => record(item) as unknown as EvidenceFile);
            return <article key={submissionId} className="space-y-3 rounded-xl border border-immersive-border bg-immersive-bg/50 p-4">
              <div className="flex flex-wrap justify-between gap-3">
                <div><p className="text-sm font-bold text-immersive-text-primary">{text(capstone.title, 'Capstone submission')}</p><p className="text-[11px] text-immersive-text-secondary">{text(learner.name, text(submission.userId))} · {text(learner.email)} · {text(submission.status)} · {text(submission.createdAt)}</p></div>
                <span className="text-xs text-immersive-text-secondary">AI score: {typeof submission.aiScore === 'number' ? `${submission.aiScore}%` : 'not scored'}{typeof submission.reviewerScore === 'number' ? ` · Reviewer: ${submission.reviewerScore}%` : ''}</span>
              </div>
              <p className="whitespace-pre-wrap text-xs text-immersive-text-secondary">{text(submission.content)}</p>
              {files.map((file) => <button key={file.id} type="button" onClick={() => void download(file.id)} className="inline-flex items-center gap-1.5 rounded-lg border border-immersive-border px-2.5 py-1.5 text-[11px] font-bold text-immersive-primary"><Download className="h-3.5 w-3.5" />{file.fileName}</button>)}
              {rubric.map((criterion) => <label key={criterion.criterion} className="flex items-center justify-between gap-3 text-xs text-immersive-text-secondary">
                <span>{criterion.criterion} ({criterion.weight}%)</span><input type="number" min="0" max="100" value={scores[submissionId]?.[criterion.criterion] || ''} onChange={(event) => setScores((current) => ({...current, [submissionId]: {...current[submissionId], [criterion.criterion]: event.target.value}}))} className="w-20 rounded-lg border border-immersive-border bg-immersive-card px-2 py-1.5 text-immersive-text-primary" aria-label={`Score for ${criterion.criterion}`} />
              </label>)}
              {!rubric.length && <label className="flex items-center gap-2 text-xs text-immersive-text-secondary">Reviewer score (0–100)<input type="number" min="0" max="100" value={scores[submissionId]?.total || ''} onChange={(event) => setScores((current) => ({...current, [submissionId]: {...current[submissionId], total: event.target.value}}))} className="w-20 rounded-lg border border-immersive-border bg-immersive-card px-2 py-1.5 text-immersive-text-primary" /></label>}
              <textarea aria-label="Capstone reviewer feedback" value={feedback[submissionId] || ''} onChange={(event) => setFeedback((current) => ({...current, [submissionId]: event.target.value}))} rows={3} maxLength={4000} placeholder="Reviewer comments; explain the score and any requested changes." className="w-full rounded-lg border border-immersive-border bg-immersive-card p-3 text-xs text-immersive-text-primary" />
              <div className="flex flex-wrap gap-2"><button type="button" disabled={busyId === submissionId} onClick={() => void reviewCapstone(submission, 'approved')} className="rounded-lg bg-emerald-500/15 px-3 py-2 text-xs font-bold text-emerald-300 disabled:opacity-50">Approve</button><button type="button" disabled={busyId === submissionId} onClick={() => void reviewCapstone(submission, 'needs_revision')} className="rounded-lg bg-amber-500/15 px-3 py-2 text-xs font-bold text-amber-300 disabled:opacity-50">Request revision</button></div>
              {text(submission.reviewerFeedback) && <p className="text-xs text-immersive-text-secondary">Previous reviewer note: {text(submission.reviewerFeedback)}</p>}
              {history.map((entry, index) => {
                const e = record(entry);
                return <p key={`${submissionId}-audit-${index}`} className="text-[10px] text-immersive-text-secondary">Audit · {text(e.action)} · {text(e.createdAt)} · {text(e.feedback)}</p>;
              })}
            </article>;
          })}
          {!submissions.length && <p className="rounded-xl border border-dashed border-immersive-border p-4 text-xs text-immersive-text-secondary">No capstone submissions are waiting for review.</p>}
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-bold text-immersive-text-primary">Exam review queue ({examAttempts.length})</h3>
          {examAttempts.map((attempt) => {
            const attemptId = text(attempt.id);
            const questions = list(attempt.questions);
            const answers = list(attempt.answers);
            return <article key={attemptId} className="space-y-3 rounded-xl border border-immersive-border bg-immersive-bg/50 p-4">
              <div><p className="text-sm font-bold text-immersive-text-primary">{text(attempt.courseId)} · attempt {text(attempt.attemptNumber)}</p><p className="text-[11px] text-immersive-text-secondary">Learner {text(attempt.userId)} · {text(attempt.submittedAt)}</p></div>
              {questions.map((questionValue) => {
                const question = record(questionValue);
                const answer = answers.map(record).find((item) => item.questionId === question.id);
                return <div key={text(question.id)} className="rounded-lg border border-immersive-border p-3"><p className="text-xs font-bold text-immersive-text-primary">{text(question.prompt)}</p><p className="mt-1 whitespace-pre-wrap text-xs text-immersive-text-secondary">Answer: {text(answer?.answer, 'No answer submitted')}</p></div>;
              })}
              <div className="grid gap-2 sm:grid-cols-[120px_1fr]">
                <input type="number" min="0" max="100" aria-label="Final exam score" placeholder="Score %" value={examScores[attemptId] || ''} onChange={(event) => setExamScores((current) => ({...current, [attemptId]: event.target.value}))} className="rounded-lg border border-immersive-border bg-immersive-card px-3 py-2 text-xs text-immersive-text-primary" />
                <textarea aria-label="Exam reviewer feedback" rows={2} maxLength={4000} placeholder="Reviewer feedback" value={examFeedback[attemptId] || ''} onChange={(event) => setExamFeedback((current) => ({...current, [attemptId]: event.target.value}))} className="rounded-lg border border-immersive-border bg-immersive-card p-3 text-xs text-immersive-text-primary" />
              </div>
              <button type="button" disabled={busyId === attemptId} onClick={() => void reviewExam(attempt)} className="rounded-lg bg-immersive-primary px-3 py-2 text-xs font-bold text-white disabled:opacity-50">Save exam review</button>
            </article>;
          })}
          {!examAttempts.length && <p className="rounded-xl border border-dashed border-immersive-border p-4 text-xs text-immersive-text-secondary">No exam attempts are waiting for review.</p>}
        </div>
      </>}
    </section>
  );
}
