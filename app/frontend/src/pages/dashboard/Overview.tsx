import {useMemo} from 'react';
import {useNavigate} from 'react-router-dom';
import OverviewPage from '../../components/dashboard/OverviewPage';
import {useAuth} from '../../context/AuthContext';
import {backendUserToPreferences, UserPreferences} from '../../types';
import {useTrackCurriculum} from '../../hooks/useTrackCurriculum';

const PAGE_PATHS: Record<string, string> = {
  overview: '/dashboard',
  'learning-board': '/dashboard/learning',
  mentor: '/dashboard/mentor',
  projects: '/dashboard/projects',
  progress: '/dashboard/progress',
  profile: '/dashboard/profile',
  community: '/community',
};

export default function Overview() {
  const navigate = useNavigate();
  const {user, refreshUser} = useAuth();
  const {track, milestones, completedSteps, loading, error, completeLesson, refresh, isRoadmap} = useTrackCurriculum();

  const userProfile = useMemo<UserPreferences | null>(() => {
    if (!user) return null;
    return {...backendUserToPreferences(user), completedSteps};
  }, [user, completedSteps]);

  if (!userProfile) {
    return (
      <div className="min-h-screen bg-immersive-bg flex items-center justify-center">
        <div className="animate-pulse text-immersive-secondary font-mono text-sm">Loading dashboard...</div>
      </div>
    );
  }

  const handleUpdateProfile = () => {
    refreshUser().catch(() => {});
  };

  const handleToggleLesson = async (lessonId: string) => {
    await completeLesson(lessonId);
  };

  return (
    <div className="relative">
      <OverviewPage
        userProfile={userProfile}
        track={track}
        onUpdateProfile={handleUpdateProfile}
        onChangePage={(page) => navigate(PAGE_PATHS[page] || `/dashboard/${page}`)}
        curriculum={milestones.length ? milestones : undefined}
        onToggleLesson={handleToggleLesson}
        isRoadmap={isRoadmap}
        isLoading={loading}
        loadError={error}
        onRetry={() => { void refresh(); }}
      />
    </div>
  );
}
