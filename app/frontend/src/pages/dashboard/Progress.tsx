import {useMemo} from 'react';
import ProgressPage from '../../components/dashboard/ProgressPage';
import {useAuth} from '../../context/AuthContext';
import {backendUserToPreferences} from '../../types';
import {useTrackCurriculum} from '../../hooks/useTrackCurriculum';
import {computeCourseAnalytics} from '../../lib/courseProgressAnalytics';
import RoadmapSummary from '../../components/dashboard/RoadmapSummary';

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

  return (
    <div className="relative">
      {loading && (
        <div className="pointer-events-none fixed right-4 top-20 z-40 rounded-full border border-immersive-border bg-immersive-card/90 px-3 py-1.5 text-[10px] font-mono text-immersive-text-secondary shadow-lg">
          Updating progress…
        </div>
      )}
      <RoadmapSummary selection={userProfile.roadmapSelection} completedSteps={completedSteps} />
      {error && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-2 rounded-xl text-xs font-mono font-bold">
          {error}
        </div>
      )}
      <ProgressPage userProfile={{...userProfile, completedSteps}} analytics={analytics} />
    </div>
  );
}
