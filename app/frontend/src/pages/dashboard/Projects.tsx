import {useState, useEffect} from 'react';
import ProjectsPage from '../../components/dashboard/ProjectsPage';
import {useAuth} from '../../context/AuthContext';
import {backendUserToPreferences} from '../../types';
import {useTrackCurriculum} from '../../hooks/useTrackCurriculum';
import {projectApi} from '../../services/api';
import {ProjectBrief} from '../../data/dashboardData';

interface BackendSubmission {
  id?: string;
  projectId?: string;
  content?: string;
  feedback?: string;
  score?: number;
  status?: string;
  createdAt?: string;
}

export default function Projects() {
  const {user} = useAuth();
  const {lessons, loading: curriculumLoading, error: curriculumError} = useTrackCurriculum();
  const [submissions, setSubmissions] = useState<BackendSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    projectApi.getSubmissions()
      .then((res) => {
        if (Array.isArray(res.data?.submissions)) {
          setSubmissions(res.data?.submissions as BackendSubmission[]);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (!user) {
    return null;
  }

  const userProfile = backendUserToPreferences(user);

  const projects: ProjectBrief[] = lessons
    .filter((l) => l.type === 'project')
    .map((l) => ({
      id: l.id,
      title: l.title,
      client: 'Cohortia',
      logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&fit=crop&q=80',
      difficulty: 'Intermediate',
      duration: l.duration || 'Recommended: 2-3 Days',
      description: l.description || l.content?.slice(0, 200) || '',
      deliverables: ['Complete project deliverable', 'Submit through Projects page'],
      tasks: ['Plan', 'Build', 'Review'],
    }));

  const handleSubmit = async (projectId: string, content: string) => {
    try {
      const submitRes = await projectApi.submit(projectId, content);
      const submission = submitRes.data?.submission as BackendSubmission | undefined;
      if (submission?.id) {
        await projectApi.getFeedback(submission.id);
      }
      const refreshed = await projectApi.getSubmissions();
      if (Array.isArray(refreshed.data?.submissions)) {
        setSubmissions(refreshed.data.submissions as BackendSubmission[]);
      }
      return {success: true, submission};
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Submission failed.';
      return {success: false, error: message};
    }
  };

  if (curriculumLoading || loading) {
    return (
      <div className="min-h-screen bg-immersive-bg flex items-center justify-center">
        <div className="animate-pulse text-immersive-secondary font-mono text-sm">Loading projects...</div>
      </div>
    );
  }

  return (
    <div className="relative">
      {(error || curriculumError) && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-2 rounded-xl text-xs font-mono font-bold">
          {error || curriculumError}
        </div>
      )}
      <ProjectsPage
        userProfile={userProfile}
        projects={projects.length ? projects : undefined}
        submissions={submissions}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
