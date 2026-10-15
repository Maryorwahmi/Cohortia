import {useEffect, useState, type ChangeEvent} from 'react';
import {AlertCircle, CheckCircle2, ChevronDown, Clock3, Code2, ListChecks} from 'lucide-react';
import {CourseFinalExamAttempt, CourseFinalPackage, EvidenceFile, projectApi} from '../../services/api';

interface CourseFinalBoardProps {
  courseFinal: CourseFinalPackage;
  adminTestMode?: boolean;
  submissions?: Array<{
    id?: string;
    projectId?: string;
    content?: string;
    feedback?: string;
    score?: number;
    status?: string;
    createdAt?: string;
    files?: EvidenceFile[];
  }>;
  onSubmit?: (projectId: string, content: string, fileIds: string[], withoutFileEvidence: boolean) => Promise<{
    success: boolean;
    submission?: {id?: string; feedback?: string; score?: number; status?: string};
    feedbackError?: string;
    error?: string;
  }>;
}

function errorMessage(error: unknown) {
  return error instanceof Error ? error.message : 'The final exam request failed. Please try again.';
}

function formatRemainingTime(expiresAt: string, now: number) {
  const seconds = Math.max(0, Math.ceil((Date.parse(expiresAt) - now) / 1000));
  const minutes = Math.floor(seconds / 60);
  return `${String(minutes).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
}

function savedAnswers(attempt: CourseFinalExamAttempt) {
  return Object.fromEntries(attempt.answers.map((answer) => [answer.questionId, answer.answer]));
}

export default function CourseFinalBoard({courseFinal, submissions = [], onSubmit, adminTestMode = false}: CourseFinalBoardProps) {
  const [selectedId, setSelectedId] = useState(courseFinal.selectedCapstoneId || courseFinal.capstones[0]?.id || '');
  const [expanded, setExpanded] = useState(true);
  const [selectionSaving, setSelectionSaving] = useState(false);
  const [capstoneText, setCapstoneText] = useState('');
  const [capstoneBusy, setCapstoneBusy] = useState(false);
  const [capstoneMessage, setCapstoneMessage] = useState<string | null>(null);
  const [evidenceFile, setEvidenceFile] = useState<File | null>(null);
  const [evidenceUploadBusy, setEvidenceUploadBusy] = useState(false);
  const [uploadedEvidence, setUploadedEvidence] = useState<EvidenceFile[]>([]);
  const [evidenceLoading, setEvidenceLoading] = useState(false);
  const [withoutFileEvidence, setWithoutFileEvidence] = useState(false);
  const [attemptsData, setAttemptsData] = useState<Awaited<ReturnType<typeof projectApi.getFinalExamAttempts>>['data']>();
  const [currentAttempt, setCurrentAttempt] = useState<CourseFinalExamAttempt | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [examLoading, setExamLoading] = useState(Boolean(courseFinal.exam));
  const [examBusy, setExamBusy] = useState(false);
  const [examError, setExamError] = useState<string | null>(null);
  const [clockNow, setClockNow] = useState(Date.now());
  const selected = courseFinal.capstones.find((item) => item.id === selectedId) || courseFinal.capstones[0];
  const exam = courseFinal.exam;
  const capstoneSubmissions = submissions.filter((submission) => submission.projectId === selected?.id);
  const latestSubmission = capstoneSubmissions[0];

  useEffect(() => {
    setSelectedId(courseFinal.selectedCapstoneId || courseFinal.capstones[0]?.id || '');
  }, [courseFinal.courseId, courseFinal.selectedCapstoneId]);

  useEffect(() => {
    let cancelled = false;
    if (!selected) {
      setUploadedEvidence([]);
      return () => { cancelled = true; };
    }
    setEvidenceLoading(true);
    projectApi.getUnattachedEvidence(courseFinal.courseId, selected.id)
      .then((response) => {
        if (!response.success || !response.data) throw new Error(response.error || 'Could not load uploaded evidence.');
        if (!cancelled) setUploadedEvidence(response.data.files);
      })
      .catch((error: unknown) => {
        if (!cancelled) setCapstoneMessage(errorMessage(error));
      })
      .finally(() => {
        if (!cancelled) setEvidenceLoading(false);
      });
    return () => { cancelled = true; };
  }, [courseFinal.courseId, selected?.id]);

  const selectCapstone = async (capstoneId: string) => {
    setSelectionSaving(true);
    setCapstoneMessage(null);
    try {
      const response = await projectApi.updateCourseFinalSelection(courseFinal.courseId, capstoneId);
      if (!response.success) throw new Error(response.error || 'Could not save your capstone selection.');
      setSelectedId(capstoneId);
    } catch (error) {
      setCapstoneMessage(errorMessage(error));
    } finally {
      setSelectionSaving(false);
    }
  };

  const uploadEvidenceForSelectedCapstone = async () => {
    if (!selected || !evidenceFile) return null;
    setEvidenceUploadBusy(true);
    setCapstoneMessage(null);
    try {
      const uploadUrlResponse = await projectApi.getEvidenceUploadUrl(courseFinal.courseId, selected.id, evidenceFile.name, evidenceFile.type || 'application/octet-stream');
      if (!uploadUrlResponse.success || !uploadUrlResponse.data) {
        throw new Error(uploadUrlResponse.error || 'Could not prepare the evidence upload.');
      }
      const { uploadUrl, fileId } = uploadUrlResponse.data;
      const uploadResponse = await fetch(uploadUrl, {
        method: 'PUT',
        headers: {'Content-Type': evidenceFile.type || 'application/octet-stream'},
        body: evidenceFile,
      });
      if (!uploadResponse.ok) {
        throw new Error('The evidence upload did not complete successfully.');
      }
      const completeResponse = await projectApi.completeEvidenceUpload(fileId);
      if (!completeResponse.success || !completeResponse.data) {
        throw new Error(completeResponse.error || 'The evidence upload could not be verified.');
      }
      setUploadedEvidence((current) => [...current, {
        id: completeResponse.data!.fileId,
        fileName: evidenceFile.name,
        contentType: completeResponse.data!.contentType,
        byteSize: completeResponse.data!.byteSize,
        createdAt: new Date().toISOString(),
      }]);
      setEvidenceFile(null);
      setWithoutFileEvidence(false);
      setCapstoneMessage('Evidence uploaded successfully.');
      return completeResponse.data;
    } catch (error) {
      setCapstoneMessage(errorMessage(error));
      return null;
    } finally {
      setEvidenceUploadBusy(false);
    }
  };

  const submitCapstone = async () => {
    if (!selected || !capstoneText.trim() || !onSubmit) return;
    setCapstoneBusy(true);
    setCapstoneMessage(null);
    try {
      let filesToSubmit = uploadedEvidence;
      if (evidenceFile) {
        const uploaded = await uploadEvidenceForSelectedCapstone();
        if (!uploaded) {
          throw new Error('Please upload evidence before submitting your capstone.');
        }
        filesToSubmit = [...filesToSubmit, {
          id: uploaded.fileId,
          fileName: evidenceFile.name,
          contentType: uploaded.contentType,
          byteSize: uploaded.byteSize,
          createdAt: new Date().toISOString(),
        }];
      }
      if (selected.requiresFileEvidence && filesToSubmit.length === 0) {
        throw new Error('Attach at least one verified evidence file before submitting.');
      }
      if (filesToSubmit.length === 0 && !withoutFileEvidence) {
        throw new Error('Attach a verified evidence file or confirm that you are submitting without file evidence.');
      }
      const result = await onSubmit(selected.id, capstoneText.trim(), filesToSubmit.map((file) => file.id), withoutFileEvidence);
      if (!result.success) throw new Error(result.error || 'Capstone submission failed.');
      setCapstoneText('');
      setUploadedEvidence([]);
      setWithoutFileEvidence(false);
      setCapstoneMessage(result.feedbackError
        ? `Submission received. Feedback is temporarily unavailable: ${result.feedbackError}`
        : 'Capstone submission received.');
    } catch (error) {
      setCapstoneMessage(errorMessage(error));
    } finally {
      setCapstoneBusy(false);
    }
  };

  useEffect(() => {
    let cancelled = false;
    if (!exam) {
      setAttemptsData(undefined);
      setCurrentAttempt(null);
      setExamLoading(false);
      return () => { cancelled = true; };
    }
    setExamLoading(true);
    setExamError(null);
    projectApi.getFinalExamAttempts(courseFinal.courseId)
      .then((response) => {
        if (!response.success || !response.data) throw new Error(response.error || 'Could not load exam attempts.');
        if (cancelled) return;
        setAttemptsData(response.data);
        setCurrentAttempt(response.data.currentAttempt);
        setAnswers(response.data.currentAttempt ? savedAnswers(response.data.currentAttempt) : {});
      })
      .catch((error: unknown) => {
        if (!cancelled) setExamError(errorMessage(error));
      })
      .finally(() => {
        if (!cancelled) setExamLoading(false);
      });
    return () => { cancelled = true; };
  }, [courseFinal.courseId, exam?.id]);

  useEffect(() => {
    if (!currentAttempt || currentAttempt.status !== 'in_progress') return;
    const timer = window.setInterval(() => setClockNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, [currentAttempt?.id, currentAttempt?.status]);

  const startExam = async () => {
    setExamBusy(true);
    setExamError(null);
    try {
      const response = await projectApi.startFinalExam(courseFinal.courseId);
      if (!response.success || !response.data?.attempt) throw new Error(response.error || 'Could not start the final exam.');
      setCurrentAttempt(response.data.attempt);
      setAnswers(savedAnswers(response.data.attempt));
      setClockNow(Date.now());
      const refreshed = await projectApi.getFinalExamAttempts(courseFinal.courseId);
      if (refreshed.success && refreshed.data) setAttemptsData(refreshed.data);
    } catch (error) {
      setExamError(errorMessage(error));
    } finally {
      setExamBusy(false);
    }
  };

  const saveAnswer = async (questionId: string) => {
    if (!currentAttempt || currentAttempt.status !== 'in_progress') return;
    try {
      await projectApi.saveFinalExamAnswer(currentAttempt.id, questionId, answers[questionId] || '');
    } catch (error) {
      setExamError(errorMessage(error));
    }
  };

  const submitExam = async () => {
    if (!currentAttempt) return;
    setExamBusy(true);
    setExamError(null);
    try {
      const response = await projectApi.submitFinalExam(
        currentAttempt.id,
        currentAttempt.questions.map((question) => ({questionId: question.id, answer: answers[question.id] || ''})),
      );
      if (!response.success || !response.data?.attempt) throw new Error(response.error || 'Could not submit the final exam.');
      setCurrentAttempt(response.data.attempt);
      setAnswers(savedAnswers(response.data.attempt));
      const refreshed = await projectApi.getFinalExamAttempts(courseFinal.courseId);
      if (refreshed.success && refreshed.data) setAttemptsData(refreshed.data);
    } catch (error) {
      setExamError(errorMessage(error));
    } finally {
      setExamBusy(false);
    }
  };

  const timeExpired = currentAttempt
    ? Date.parse(currentAttempt.expiresAt) <= clockNow
    : false;
  const canEditAnswers = currentAttempt?.status === 'in_progress' && !timeExpired;
  const currentResult = currentAttempt?.score !== null && currentAttempt?.score !== undefined;

  const handleEvidenceSelection = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    if (!file) {
      setEvidenceFile(null);
      return;
    }
    if (file.size > 25 * 1024 * 1024) {
      setCapstoneMessage('Evidence files must be 25MB or smaller.');
      setEvidenceFile(null);
      event.target.value = '';
      return;
    }
    setCapstoneMessage(null);
    setEvidenceFile(file);
  };

  const deleteEvidence = async (fileId: string) => {
    setCapstoneMessage(null);
    try {
      const response = await projectApi.deleteEvidence(fileId);
      if (!response.success) throw new Error(response.error || 'Could not delete the uploaded evidence.');
      setUploadedEvidence((current) => current.filter((file) => file.id !== fileId));
    } catch (error) {
      setCapstoneMessage(errorMessage(error));
    }
  };

  const downloadEvidence = async (fileId: string) => {
    try {
      const response = await projectApi.getEvidenceDownloadUrl(fileId);
      if (!response.success || !response.data) throw new Error(response.error || 'Could not download the evidence file.');
      window.open(response.data.downloadUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      setCapstoneMessage(errorMessage(error));
    }
  };

  return (
    <section className="pt-3 pb-12 space-y-8">
      <div>
        <span className="text-xs font-mono font-bold tracking-widest text-[#FF4B3E] uppercase block mb-2">| COURSE FINALS</span>
        <h2 className="text-2xl sm:text-3xl font-sans font-extrabold text-immersive-text-primary tracking-tight">Final project & examination</h2>
        <p className="text-base text-immersive-text-secondary max-w-3xl font-medium mt-1 leading-relaxed">This workspace is generated from the course specification. Choose one capstone brief, review its evidence requirements, then prepare for the course-specific final examination.</p>
        {adminTestMode && <p className="mt-3 rounded-xl border border-amber-300 bg-amber-50 p-3 text-sm leading-relaxed text-amber-900 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-200">Admin testing mode: choose a course and test its capstone project and final exam without enrollment or completing course chapters.</p>}
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="order-2 bg-immersive-card border border-immersive-border rounded-3xl p-5 sm:p-6 space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-mono font-bold tracking-widest text-[#FF4B3E] uppercase">Capstone project</p>
              <h3 className="text-xl font-bold text-immersive-text-primary">Your final build</h3>
            </div>
            <Code2 className="w-5 h-5 text-[#FF4B3E]" />
          </div>
          <div className="max-w-3xl">
            <label htmlFor="course-final-capstone" className="mb-2 block text-sm font-semibold text-immersive-text-primary">Choose a project option</label>
            <select
              id="course-final-capstone"
              value={selected?.id || ''}
              onChange={(event) => void selectCapstone(event.target.value)}
              disabled={selectionSaving || !courseFinal.capstones.length}
              className="w-full rounded-xl border border-immersive-border bg-immersive-bg px-4 py-3 text-base text-immersive-text-primary disabled:opacity-60"
            >
              {courseFinal.capstones.map((option) => (
                <option key={option.id} value={option.id}>Option {option.optionNumber}: {option.title}</option>
              ))}
            </select>
            {selected && <p className="mt-3 text-sm leading-relaxed text-immersive-text-secondary">{selected.description}</p>}
          </div>
          {selected && (
            <div className="border-t border-immersive-border/40 pt-5 space-y-4">
              <button onClick={() => setExpanded((value) => !value)} className="w-full flex items-center justify-between text-left">
                <span className="text-sm font-mono font-bold tracking-widest text-immersive-text-secondary uppercase">Build requirements & rubric</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
              </button>
              {expanded && <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <p className="text-sm font-bold text-immersive-text-primary mb-2">Required evidence</p>
                  <ul className="space-y-2">{selected.requirements.map((item) => <li key={item} className="text-sm leading-relaxed text-immersive-text-secondary flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF4B3E] shrink-0 mt-0.5" />{item}</li>)}</ul>
                </div>
                <div>
                  <p className="text-sm font-bold text-immersive-text-primary mb-2">Evaluation rubric</p>
                  <ul className="space-y-2">{selected.rubric.map((item) => <li key={item.criterion} className="text-sm leading-relaxed text-immersive-text-secondary flex justify-between gap-3"><span>{item.criterion}</span><span className="font-mono text-[#FF4B3E]">{item.weight}%</span></li>)}</ul>
                  {selected.estimatedTime && <p className="text-xs text-immersive-text-secondary mt-3 flex items-center gap-1"><Clock3 className="w-4 h-4" />{selected.estimatedTime}</p>}
                </div>
              </div>}
            </div>
          )}
          {selected && <div className="border-t border-immersive-border/40 pt-5 space-y-3">
            <div>
              <p className="text-base font-bold text-immersive-text-primary">Submit this capstone</p>
              <p className="text-sm text-immersive-text-secondary mt-1">Your selected option is saved to your course progress and attached to each submission.</p>
            </div>
            {latestSubmission && <div className="rounded-xl border border-immersive-border bg-immersive-bg/50 p-3 text-sm">
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold text-immersive-text-primary">Latest submission</span>
                <span className="text-immersive-text-secondary">{latestSubmission.status || 'submitted'}{latestSubmission.score !== undefined ? ` · ${latestSubmission.score}%` : ''}</span>
              </div>
              {latestSubmission.feedback && <p className="text-immersive-text-secondary mt-2 whitespace-pre-wrap">{latestSubmission.feedback}</p>}
              {latestSubmission.files?.map((file) => <button key={file.id} type="button" onClick={() => void downloadEvidence(file.id)} className="mt-2 block text-left font-bold text-[#FF4B3E] hover:underline">{file.fileName} · Download</button>)}
            </div>}
            <textarea aria-label="Capstone project submission" value={capstoneText} onChange={(event) => setCapstoneText(event.target.value)} rows={5} maxLength={30_000} className="w-full rounded-xl border border-immersive-border bg-immersive-bg p-3 text-sm leading-relaxed text-immersive-text-primary" placeholder="Describe your project and include the work you want reviewed..." />
            <div className="rounded-xl border border-dashed border-immersive-border bg-immersive-bg/40 p-3 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-mono font-bold tracking-widest text-immersive-text-secondary uppercase">Evidence</p>
                <span className={`text-xs font-semibold ${selected.requiresFileEvidence ? 'text-amber-800 dark:text-amber-200' : 'text-immersive-text-secondary'}`}>{selected.requiresFileEvidence ? 'Required' : 'Optional'}</span>
              </div>
              <label className="flex cursor-pointer items-center justify-between gap-3 rounded-lg border border-immersive-border bg-immersive-bg px-3 py-2 text-sm text-immersive-text-primary">
                <span className="truncate">{evidenceFile ? evidenceFile.name : 'Choose a README, screenshot, demo, or supporting file'}</span>
                <input type="file" className="hidden" onChange={handleEvidenceSelection} />
                <span className="rounded-full border border-[#FF4B3E]/30 bg-[#FF4B3E]/10 px-2 py-1 text-xs font-bold text-[#FF4B3E]">Browse</span>
              </label>
              {evidenceFile && (
                <button type="button" onClick={() => void uploadEvidenceForSelectedCapstone()} disabled={evidenceUploadBusy} className="w-full rounded-lg border border-[#FF4B3E]/40 bg-[#FF4B3E]/10 text-xs font-bold text-[#FF4B3E] py-2 disabled:opacity-60">
                  {evidenceUploadBusy ? 'Uploading evidence...' : 'Upload evidence'}
                </button>
              )}
              {evidenceLoading && <p className="text-xs text-immersive-text-secondary">Loading verified uploads...</p>}
              {uploadedEvidence.map((file) => (
                <div key={file.id} className="flex items-center justify-between gap-2 text-xs text-emerald-700 dark:text-emerald-300">
                  <span className="truncate">Verified {file.fileName} ({Math.round(file.byteSize / 1024)} KB)</span>
                  <button type="button" onClick={() => void deleteEvidence(file.id)} className="shrink-0 font-bold text-rose-300 hover:underline">Remove</button>
                </div>
              ))}
              {!selected.requiresFileEvidence && (
                <label className="flex items-start gap-2 text-xs text-immersive-text-secondary">
                  <input type="checkbox" checked={withoutFileEvidence} onChange={(event) => setWithoutFileEvidence(event.target.checked)} />
                  <span>I am submitting without file evidence.</span>
                </label>
              )}
            </div>
            {capstoneMessage && <p role="status" className="text-sm text-immersive-text-secondary">{capstoneMessage}</p>}
            <button onClick={() => void submitCapstone()} disabled={!capstoneText.trim() || capstoneBusy || selectionSaving || !onSubmit || (!evidenceFile && uploadedEvidence.length === 0 && (selected.requiresFileEvidence || !withoutFileEvidence))} className="w-full rounded-xl bg-[#FF4B3E] hover:bg-[#e64035] disabled:opacity-50 text-white py-2.5 text-xs font-bold">
              {capstoneBusy ? 'Submitting...' : 'Submit selected capstone'}
            </button>
          </div>}
        </div>

        <div className="order-1 bg-immersive-card border border-immersive-border rounded-3xl p-5 sm:p-6 space-y-5">
          <div className="flex items-center justify-between gap-4"><div><p className="text-xs font-mono font-bold tracking-widest text-[#FF4B3E] uppercase">Assessment</p><h3 className="text-xl font-bold text-immersive-text-primary">{exam?.title || 'Final examination'}</h3></div><ListChecks className="w-5 h-5 text-[#FF4B3E]" /></div>
          <p className="text-base text-immersive-text-secondary leading-relaxed">{exam?.instructions || 'Complete the course-specific examination after preparing your capstone.'}</p>
          {exam && <>
            <div className="grid grid-cols-2 gap-3 text-sm font-mono"><div className="rounded-xl border border-immersive-border p-3"><Clock3 className="w-4 h-4 text-[#FF4B3E] mb-2" /><span className="block text-immersive-text-secondary">TIME LIMIT</span><strong className="text-immersive-text-primary">{attemptsData?.timeLimitMinutes ?? exam.timeLimitMinutes ?? 90} min</strong></div><div className="rounded-xl border border-immersive-border p-3"><ListChecks className="w-4 h-4 text-[#FF4B3E] mb-2" /><span className="block text-immersive-text-secondary">QUESTIONS</span><strong className="text-immersive-text-primary">{exam.questionCount}</strong></div></div>
            <div className="flex flex-wrap gap-2">{exam.sections.map((section) => <span key={section} className="text-xs font-mono rounded-full border border-[#FF4B3E]/20 bg-[#FF4B3E]/10 text-[#FF4B3E] px-2.5 py-1">{section}</span>)}</div>
          </>}

          {examError && <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm leading-relaxed text-red-800 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300 flex gap-2"><AlertCircle className="w-4 h-4 shrink-0" />{examError}</div>}

          {examLoading ? <p className="text-sm text-immersive-text-secondary">Checking exam eligibility...</p> : null}

          {currentAttempt && !currentResult && <>
            <div className="rounded-xl border border-immersive-border bg-immersive-bg/60 p-3 flex items-center justify-between gap-3">
              <span className="text-sm font-bold text-immersive-text-primary">Attempt {currentAttempt.attemptNumber}</span>
              <span className={`font-mono text-base font-bold ${timeExpired ? 'text-red-600 dark:text-red-400' : 'text-[#FF4B3E]'}`}>
                {currentAttempt.status === 'in_progress' ? formatRemainingTime(currentAttempt.expiresAt, clockNow) : 'Ready to submit'}
              </span>
            </div>
            <div className="max-h-[28rem] overflow-y-auto space-y-4 pr-1">
              {currentAttempt.questions.map((question) => {
                const options = [...question.prompt.matchAll(/^\s*([A-D])[.)]\s*(.+)$/gim)]
                  .map((match) => ({letter: match[1].toUpperCase(), text: match[2].trim()}));
                const prompt = question.prompt.replace(/^\s*([A-D])[.)]\s*.+$/gim, '').trim();
                return <div key={question.id} className="rounded-xl border border-immersive-border p-3 space-y-2">
                  <p className="text-xs uppercase font-mono tracking-wide text-[#FF4B3E]">{question.section} · Question {question.questionNumber}</p>
                  <p className="text-base font-semibold leading-relaxed text-immersive-text-primary whitespace-pre-line">{prompt}</p>
                  {options.length ? <div className="space-y-2">{options.map((option) => <label key={option.letter} className="flex items-start gap-2 text-sm leading-relaxed text-immersive-text-secondary"><input type="radio" name={question.id} value={option.letter} disabled={!canEditAnswers || examBusy} checked={answers[question.id] === option.letter} onChange={() => setAnswers((current) => ({...current, [question.id]: option.letter}))} onBlur={() => void saveAnswer(question.id)} /><span><strong className="mr-1">{option.letter}.</strong>{option.text}</span></label>)}</div>
                    : <textarea aria-label={`Answer to question ${question.questionNumber}`} disabled={!canEditAnswers || examBusy} value={answers[question.id] || ''} onChange={(event) => setAnswers((current) => ({...current, [question.id]: event.target.value}))} onBlur={() => void saveAnswer(question.id)} rows={5} maxLength={12_000} className="w-full rounded-lg border border-immersive-border bg-immersive-bg p-3 text-sm leading-relaxed text-immersive-text-primary disabled:opacity-60" placeholder="Write your answer..." />}
                  {currentAttempt.answers.find((answer) => answer.questionId === question.id)?.feedback && <p className="text-sm text-immersive-text-secondary">{currentAttempt.answers.find((answer) => answer.questionId === question.id)?.feedback}</p>}
                </div>;
              })}
            </div>
            <button onClick={() => void submitExam()} disabled={examBusy} className="w-full rounded-xl bg-[#FF4B3E] hover:bg-[#e64035] disabled:opacity-60 text-white py-3 text-sm font-bold">
              {examBusy ? 'Submitting and grading...' : currentAttempt.status === 'submitted' ? 'Retry grading' : 'Submit final exam'}
            </button>
          </>}

          {currentResult && currentAttempt && <div className={`rounded-xl border p-4 space-y-1 ${currentAttempt.reviewRequired ? 'border-amber-400/30 bg-amber-400/10' : currentAttempt.passed ? 'border-emerald-400/30 bg-emerald-400/10' : 'border-red-400/30 bg-red-400/10'}`}>
            <p className="text-sm font-bold text-immersive-text-primary">{currentAttempt.reviewRequired ? 'Result pending reviewer check' : currentAttempt.passed ? 'Final exam passed' : 'Final exam not passed'}</p>
            <p className="text-sm text-immersive-text-secondary">Score: {currentAttempt.score}% · Passing score: {attemptsData?.passingScore ?? exam?.passingScore ?? 70}%</p>
            {currentAttempt.reviewRequired && <p className="text-sm text-immersive-text-secondary">Some answers need a reviewer check before this result can count toward completion.</p>}
          </div>}

          {!examLoading && !currentAttempt && !currentResult && attemptsData && <>
            <p className="text-sm text-immersive-text-secondary">{attemptsData.attemptsUsed} of {attemptsData.attemptsUsed + attemptsData.attemptsRemaining} attempts used · {attemptsData.attemptsRemaining} remaining</p>
            {!attemptsData.completion.eligible && <p className="rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm leading-relaxed text-amber-900 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-200">{attemptsData.completion.reason}</p>}
            {attemptsData.passed && <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">You have passed this final exam.</p>}
            {attemptsData.attemptsRemaining === 0 && !attemptsData.passed && <p className="text-sm font-medium text-amber-800 dark:text-amber-200">No attempts remain. Ask a reviewer to unlock another attempt.</p>}
            <button onClick={() => void startExam()} disabled={!attemptsData.canStart || examBusy} className={`w-full rounded-xl py-3 text-sm font-bold ${attemptsData.canStart && !examBusy ? 'bg-[#FF4B3E] hover:bg-[#e64035] text-white' : 'bg-zinc-900 border border-zinc-800 text-zinc-500 cursor-not-allowed'}`}>
              {examBusy ? 'Preparing exam...' : 'Start final exam'}
            </button>
          </>}

          {attemptsData?.attempts?.length ? <div className="border-t border-immersive-border/50 pt-4 space-y-2">
            <p className="text-xs uppercase tracking-widest font-mono text-immersive-text-secondary">Attempt history</p>
            {attemptsData.attempts.map((attempt) => <div key={attempt.id} className="flex justify-between text-sm text-immersive-text-secondary"><span>Attempt {attempt.attemptNumber}</span><span>{attempt.reviewRequired ? 'Under review' : attempt.score === null ? attempt.status.replace('_', ' ') : `${attempt.score}%${attempt.passed ? ' · Passed' : ' · Not passed'}`}</span></div>)}
          </div> : null}
        </div>
      </div>
    </section>
  );
}
