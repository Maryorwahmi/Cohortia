import {AlertCircle} from 'lucide-react';
import {CourseFinalPackage} from '../../services/api';
import CourseFinalBoard from './CourseFinalBoard';

interface ProjectsPageProps {
  courseFinal: CourseFinalPackage | null;
  submissions: Array<{
    id?: string;
    projectId?: string;
    content?: string;
    feedback?: string;
    score?: number;
    status?: string;
    createdAt?: string;
  }>;
  onSubmit: (projectId: string, content: string) => Promise<{
    success: boolean;
    submission?: {id?: string; feedback?: string; score?: number; status?: string};
    feedbackError?: string;
    error?: string;
  }>;
  courseTitle: string;
  isAdmin?: boolean;
}

export default function ProjectsPage({
  courseFinal,
  submissions,
  onSubmit,
  courseTitle,
  isAdmin = false,
}: ProjectsPageProps) {
  if (!courseFinal) {
    return (
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-2xl border border-immersive-border bg-immersive-card p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
            <div>
              <h2 className="text-lg font-bold text-immersive-text-primary">Final package unavailable</h2>
              <p className="mt-1 text-sm text-immersive-text-secondary">
                {courseTitle} does not have an imported capstone or final examination package yet.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <CourseFinalBoard
      courseFinal={courseFinal}
      submissions={submissions}
      onSubmit={onSubmit}
      adminTestMode={isAdmin}
    />
  );
}
