import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import ProfilePage from '../../components/dashboard/ProfilePage';
import {useAuth} from '../../context/AuthContext';
import {userApi} from '../../services/api';
import {BackendUser} from '../../services/api';
import {backendUserToPreferences, UserPreferences} from '../../types';

const PAGE_PATHS: Record<string, string> = {
  overview: '/dashboard',
  'learning-board': '/dashboard/learning',
  mentor: '/dashboard/mentor',
  projects: '/dashboard/projects',
  progress: '/dashboard/progress',
  profile: '/dashboard/profile',
  community: '/community',
};

export default function Profile() {
  const navigate = useNavigate();
  const {user, logout, refreshUser} = useAuth();
  const [profile, setProfile] = useState<UserPreferences | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const load = async () => {
      try {
        const res = await userApi.getProfile();
        const backendUser = res.data?.user as BackendUser | undefined;
        if (backendUser) {
          setProfile(backendUserToPreferences(backendUser));
        } else {
          setProfile(backendUserToPreferences(user));
        }
      } catch {
        setProfile(backendUserToPreferences(user));
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [user]);

  if (!user || !profile) {
    return loading ? (
      <div className="min-h-screen bg-immersive-bg flex items-center justify-center">
        <div className="animate-pulse text-immersive-secondary font-mono text-sm">Loading profile...</div>
      </div>
    ) : null;
  }

  const handleUpdateProfile = async (updated: UserPreferences) => {
    try {
      await userApi.updateProfile({
        name: updated.name,
        desiredField: updated.track,
        experienceLevel: updated.experience,
        weeklyHours: updated.commitment === 'fulltime' ? '35-40 hrs/week' : '12-15 hrs/week',
        phone: updated.phone,
        country: updated.country,
        careerGoal: updated.careerGoal,
        availability: updated.availability,
        portfolioLink: updated.portfolioLink,
        roadmapSelection: updated.roadmapSelection ? JSON.stringify(updated.roadmapSelection) : undefined,
      });
      setProfile(updated);
      await refreshUser();
    } catch {
      // Keep local UI state even if backend save fails
      setProfile(updated);
    }
  };

  const handleResetProfile = () => {
    logout();
    navigate('/');
  };

  return (
    <ProfilePage
      userProfile={profile}
      onUpdateProfile={handleUpdateProfile}
      onResetProfile={handleResetProfile}
      onChangePage={(page) => navigate(PAGE_PATHS[page] || `/dashboard/${page}`)}
    />
  );
}
