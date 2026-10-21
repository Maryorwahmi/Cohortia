import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import ProfilePage from '../../components/dashboard/ProfilePage';
import {useAuth} from '../../context/AuthContext';
import {userApi} from '../../services/api';
import {BackendUser} from '../../services/api';
import {backendUserToPreferences, UserPreferences} from '../../types';
import {ApiError} from '../../services/api';

export default function Profile() {
  const navigate = useNavigate();
  const {user, logout, refreshUser} = useAuth();
  const [profile, setProfile] = useState<UserPreferences | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setProfile(null);
      setLoading(false);
      return;
    }

    // Auth already contains the profile needed to render this page. Revalidate without blocking it.
    setProfile(backendUserToPreferences(user));
    setLoading(false);

    const load = async () => {
      try {
        const res = await userApi.getProfile();
        const backendUser = res.data?.user as BackendUser | undefined;
        if (backendUser) {
          setProfile(backendUserToPreferences(backendUser));
        } else {
          throw new Error('Your profile could not be loaded from the server.');
        }
      } catch (error) {
        setLoadError(error instanceof Error ? error.message : 'Your profile could not be loaded from the server.');
      }
    };

    void load();
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
        phone: updated.phone,
        country: updated.country,
        careerGoal: updated.careerGoal,
        availability: updated.availability,
        portfolioLink: updated.portfolioLink,
      });
      const response = await userApi.getProfile();
      const backendUser = response.data?.user as BackendUser | undefined;
      if (!backendUser) throw new Error('Your profile was saved but could not be reloaded.');
      setProfile(backendUserToPreferences(backendUser));
      setLoadError(null);
      await refreshUser();
    } catch (error) {
      throw error as ApiError;
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
      loadError={loadError}
      onProfileUpdated={async (updatedUser) => {
        if (updatedUser) {
          setProfile(backendUserToPreferences(updatedUser));
          setLoadError(null);
        }
        const refreshedUser = await refreshUser();
        if (!updatedUser && refreshedUser) {
          setProfile(backendUserToPreferences(refreshedUser));
        }
        if (!updatedUser && !refreshedUser) {
          throw new Error('Your security settings changed, but your profile could not be refreshed. Reload the page to confirm the update.');
        }
      }}
    />
  );
}
