import {useMemo} from 'react';
import ProgressPage from '../../components/dashboard/ProgressPage';
import {useAuth} from '../../context/AuthContext';
import {backendUserToPreferences} from '../../types';
import {useTrackCurriculum} from '../../hooks/useTrackCurriculum';
import {computeCourseAnalytics} from '../../lib/courseProgressAnalytics';

export default function Progress() {
  const {user} = useAuth();
  const {track, lessons, milestones, progress, completedSteps, practicalAttempts, loading, error} = useTrackCurriculum();

  if (!user) {
    return null;
  }

  const userProfile = backendUserToPreferences(user);

  const analytics = useMemo(() => {
    return computeCourseAnalytics(
      track,
      lessons,
      milestones,
      progress,
      completedSteps,
      practicalAttempts || []
    );
  }, [track, lessons, milestones, progress, completedSteps, practicalAttempts]);

  if (loading) {
    return (
      <div className="min-h-screen bg-immersive-bg flex items-center justify-center">
        <div className="animate-pulse text-immersive-secondary font-mono text-sm">Loading progress...</div>
      </div>
    );
  }

  return (
    <div className="relative">
      {error && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-2 rounded-xl text-xs font-mono font-bold">
          {error}
        </div>
      )}
      <ProgressPage userProfile={{...userProfile, completedSteps}} analytics={analytics} />
    </div>
  );
}
