import {useEffect, useMemo, useState} from 'react';
import {AlertCircle, BookOpen, LoaderCircle, ShieldCheck} from 'lucide-react';
import ProjectsPage from '../../components/dashboard/ProjectsPage';
import {useAuth} from '../../context/AuthContext';
import {CourseFinalPackage, EvidenceFile, Track, projectApi, trackApi} from '../../services/api';

interface BackendSubmission {
  id?: string;
  projectId?: string;
  content?: string;
  feedback?: string;
  score?: number;
  status?: string;
  createdAt?: string;
  files?: EvidenceFile[];
}

function toBackendSubmission(value: Record<string, unknown>): BackendSubmission {
  let feedback: string | undefined;
  if (typeof value.aiFeedback === 'string') {
    try {
      const parsed = JSON.parse(value.aiFeedback) as {feedback?: string};
      feedback = parsed.feedback;
    } catch {
      feedback = value.aiFeedback;
    }
  }
  return {
    id: typeof value.id === 'string' ? value.id : undefined,
    projectId: typeof value.projectId === 'string' ? value.projectId : undefined,
    content: typeof value.content === 'string' ? value.content : undefined,
    feedback,
    score: typeof value.aiScore === 'number' ? value.aiScore : undefined,
    status: typeof value.status === 'string' ? value.status : undefined,
    createdAt: typeof value.createdAt === 'string' ? value.createdAt : undefined,
    files: Array.isArray(value.files) ? value.files as EvidenceFile[] : [],
  };
}

function selectionStorageKey(userId: string) {
  return `cohortia:final-course:${userId}`;
}

export default function Projects() {
  const {user} = useAuth();
  const isAdmin = user?.adminRole === 'admin' || user?.adminRole === 'alpha' || user?.role === 'admin';
  const [courses, setCourses] = useState<Track[]>([]);
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [courseListLoading, setCourseListLoading] = useState(true);
  const [courseListError, setCourseListError] = useState<string | null>(null);
  const [submissions, setSubmissions] = useState<BackendSubmission[]>([]);
  const [courseFinal, setCourseFinal] = useState<CourseFinalPackage | null>(null);
  const [courseFinalLoading, setCourseFinalLoading] = useState(false);
  const [courseFinalError, setCourseFinalError] = useState<string | null>(null);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setCourseListLoading(true);
    setCourseListError(null);

    const loadCourses = async () => {
      try {
        const [tracksResponse, enrollmentResponse] = await Promise.all([
          trackApi.getAll(),
          isAdmin ? Promise.resolve(null) : trackApi.getEnrolled(),
        ]);
        if (!tracksResponse.success || !tracksResponse.data) {
          throw new Error(tracksResponse.error || 'Could not load available courses.');
        }

        let eligibleCourses = tracksResponse.data.tracks;
        if (!isAdmin) {
          if (!enrollmentResponse?.success || !enrollmentResponse.data) {
            throw new Error(enrollmentResponse?.error || 'Could not validate course enrollment.');
          }
          const enrolledIds = new Set(
            enrollmentResponse.data.enrollments
              .filter((enrollment) => enrollment.trackId && enrollment.status !== 'paused')
              .map((enrollment) => enrollment.trackId),
          );
          eligibleCourses = eligibleCourses.filter((course) => enrolledIds.has(course.id));
        }

        if (cancelled) return;
        setCourses(eligibleCourses);
        let savedCourseId = '';
        try {
          savedCourseId = window.localStorage.getItem(selectionStorageKey(user!.id)) || '';
        } catch {
          savedCourseId = '';
        }
        setSelectedCourseId(
          eligibleCourses.some((course) => course.id === savedCourseId)
            ? savedCourseId
            : eligibleCourses[0]?.id || '',
        );
      } catch (error) {
        if (!cancelled) {
          setCourses([]);
          setSelectedCourseId('');
          setCourseListError(error instanceof Error ? error.message : 'Could not load your courses.');
        }
      } finally {
        if (!cancelled) setCourseListLoading(false);
      }
    };

    if (user) void loadCourses();
    else setCourseListLoading(false);
    return () => { cancelled = true; };
  }, [user?.id, isAdmin]);

  useEffect(() => {
    if (!user || !selectedCourseId || !courses.some((course) => course.id === selectedCourseId)) return;
    try {
      window.localStorage.setItem(selectionStorageKey(user.id), selectedCourseId);
    } catch {
      setCourseListError('Your selected course could not be saved in this browser.');
    }
  }, [courses, selectedCourseId, user]);

  useEffect(() => {
    let cancelled = false;
    setSubmissions([]);
    setSubmissionError(null);
    if (!user) return () => { cancelled = true; };
    projectApi.getSubmissions()
      .then((response) => {
        if (!response.success) throw new Error(response.error || 'Could not load project submissions.');
        if (!cancelled && Array.isArray(response.data?.submissions)) {
          setSubmissions(response.data.submissions.map(toBackendSubmission));
        }
      })
      .catch((error: unknown) => {
        if (!cancelled) setSubmissionError(error instanceof Error ? error.message : 'Could not load project submissions.');
      });
    return () => { cancelled = true; };
  }, [user?.id]);

  useEffect(() => {
    let cancelled = false;
    setCourseFinal(null);
    setCourseFinalError(null);
    if (!selectedCourseId) {
      setCourseFinalLoading(false);
      return () => { cancelled = true; };
    }
    setCourseFinalLoading(true);
    projectApi.getCourseFinal(selectedCourseId)
      .then((response) => {
        if (!response.success) throw new Error(response.error || 'Could not load this course final package.');
        if (!cancelled) setCourseFinal(response.data || null);
      })
      .catch((error: unknown) => {
        if (!cancelled) {
          setCourseFinal(null);
          setCourseFinalError(error instanceof Error ? error.message : 'Could not load this course final package.');
        }
      })
      .finally(() => {
        if (!cancelled) setCourseFinalLoading(false);
      });
    return () => { cancelled = true; };
  }, [selectedCourseId]);

  const selectedCourse = useMemo(
    () => courses.find((course) => course.id === selectedCourseId) || null,
    [courses, selectedCourseId],
  );

  const handleSubmit = async (projectId: string, content: string, fileIds: string[], withoutFileEvidence: boolean) => {
    try {
      const submitResponse = await projectApi.submit(projectId, content, fileIds, withoutFileEvidence);
      if (!submitResponse.success) throw new Error(submitResponse.error || 'Capstone submission failed.');
      const submission = submitResponse.data?.submission as BackendSubmission | undefined;
      if (!submission?.id) throw new Error('The submission was accepted without a submission ID.');

      let feedback: Record<string, unknown> | undefined;
      let feedbackError: string | undefined;
      try {
        const feedbackResponse = await projectApi.getFeedback(submission.id);
        if (!feedbackResponse.success) throw new Error(feedbackResponse.error || 'AI feedback is not available yet.');
        feedback = feedbackResponse.data;
      } catch (error) {
        feedbackError = error instanceof Error ? error.message : 'AI feedback is not available yet.';
      }

      try {
        const refreshed = await projectApi.getSubmissions();
        if (!refreshed.success) throw new Error(refreshed.error || 'Could not refresh submission history.');
        if (Array.isArray(refreshed.data?.submissions)) {
          setSubmissions(refreshed.data.submissions.map(toBackendSubmission));
        }
      } catch (error) {
        setSubmissionError(error instanceof Error ? error.message : 'Submission saved, but history could not be refreshed.');
      }

      return {
        success: true,
        submission: {
          ...submission,
          feedback: typeof feedback?.feedback === 'string' ? feedback.feedback : undefined,
          score: typeof feedback?.score === 'number' ? feedback.score : undefined,
          status: typeof submission.status === 'string' ? submission.status : 'submitted',
        },
        feedbackError,
      };
    } catch (error) {
      return {success: false, error: error instanceof Error ? error.message : 'Submission failed.'};
    }
  };

  if (!user) return null;

  if (courseListLoading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center gap-2 text-sm text-immersive-text-secondary">
        <LoaderCircle className="h-4 w-4 animate-spin" /> Loading your courses...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-immersive-bg">
      <header className="mx-auto w-full max-w-[1600px] px-4 pt-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#FF4B3E]">
              <BookOpen className="h-4 w-4" /> Course completion studio
            </p>
            <h1 className="text-2xl font-extrabold text-immersive-text-primary">Capstone & final examination</h1>
            <p className="mt-1 text-sm text-immersive-text-secondary">
              Work through the final assessment package for one of your courses.
            </p>
          </div>
          {isAdmin && (
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-xs font-semibold text-amber-300">
              <ShieldCheck className="h-4 w-4" /> Admin testing access
            </span>
          )}
        </div>

        {courseListError && (
          <div role="alert" className="mt-5 flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
            <AlertCircle className="h-4 w-4 shrink-0" /> {courseListError}
          </div>
        )}
        {submissionError && (
          <div role="alert" className="mt-3 text-xs text-amber-300">
            Submission history: {submissionError}
          </div>
        )}

        {courses.length > 0 && (
          <label className="mt-6 block max-w-xl">
            <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-immersive-text-secondary">
              {isAdmin ? 'Choose a course to test' : 'Selected course'}
            </span>
            <select
              value={selectedCourseId}
              onChange={(event) => setSelectedCourseId(event.target.value)}
              className="w-full rounded-xl border border-immersive-border bg-immersive-card px-4 py-3 text-sm text-immersive-text-primary"
            >
              {courses.map((course) => (
                <option key={course.id} value={course.id}>{course.title}</option>
              ))}
            </select>
          </label>
        )}
      </header>

      {courses.length === 0 && (
        <div className="mx-auto w-full max-w-[1600px] px-4 py-10 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-immersive-border bg-immersive-card p-6 text-sm text-immersive-text-secondary">
            {isAdmin ? 'No courses are currently available to test.' : 'You are not enrolled in an available course. Enroll in a course to access its final project and examination.'}
          </div>
        </div>
      )}

      {selectedCourse && (
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="mt-5 flex items-center justify-between gap-3 rounded-xl border border-immersive-border bg-immersive-card/60 px-4 py-3">
            <div>
              <p className="text-sm font-bold text-immersive-text-primary">{selectedCourse.title}</p>
              <p className="text-xs text-immersive-text-secondary">{selectedCourse.category}</p>
            </div>
            {courseFinal?.exam && (
              <p className="text-xs text-immersive-text-secondary">
                {courseFinal.capstones.length} capstone option{courseFinal.capstones.length === 1 ? '' : 's'} · {courseFinal.exam.questionCount} exam questions
              </p>
            )}
          </div>

          {courseFinalLoading ? (
            <div className="flex min-h-[30vh] items-center justify-center gap-2 text-sm text-immersive-text-secondary">
              <LoaderCircle className="h-4 w-4 animate-spin" /> Loading course finals...
            </div>
          ) : (
            <ProjectsPage
              courseFinal={courseFinal}
              submissions={submissions}
              onSubmit={handleSubmit}
              courseTitle={selectedCourse.title}
              isAdmin={isAdmin}
            />
          )}
          {courseFinalError && !courseFinalLoading && (
            <div role="status" className="mx-auto w-full max-w-[1600px] px-4 pb-8 text-xs text-amber-300 sm:px-6 lg:px-8">
              {courseFinalError}
            </div>
          )}
        </div>
      )}
    </main>
  );
}
