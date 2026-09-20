import {useState, useEffect, useCallback} from 'react';
import MentorPage from '../../components/dashboard/MentorPage';
import {useAuth} from '../../context/AuthContext';
import {backendUserToPreferences} from '../../types';
import {mentorApi} from '../../services/api';

interface MentorContext {
  conversationSummary?: string;
  pendingAction?: string;
  goals?: string[];
}

interface CheckIn {
  id?: string;
  createdAt?: string;
  notes?: string;
  mood?: string;
}

export default function Mentor() {
  const {user} = useAuth();
  const [mentorContext, setMentorContext] = useState<MentorContext | undefined>(undefined);
  const [checkIns, setCheckIns] = useState<CheckIn[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const [contextRes, checkInsRes] = await Promise.all([
          mentorApi.getContext(),
          mentorApi.getCheckIns(),
        ]);
        const ctx = contextRes.data?.context as MentorContext | undefined;
        if (ctx) setMentorContext(ctx);
        const checks = Array.isArray(checkInsRes.data?.checkIns)
          ? (checkInsRes.data?.checkIns as CheckIn[])
          : [];
        setCheckIns(checks);
      } catch (err) {
        console.error("Failed to load mentor context", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const handleUpdateContext = useCallback(async (update: MentorContext) => {
    try {
      await mentorApi.updateContext(update as Record<string, unknown>);
      setMentorContext((prev) => ({ ...prev, ...update }));
    } catch (err) {
      console.error("Failed to update mentor context", err);
    }
  }, []);

  if (!user) {
    return null;
  }

  const userProfile = backendUserToPreferences(user);

  if (loading) {
    return (
      <div className="min-h-screen bg-immersive-bg flex items-center justify-center">
        <div className="animate-pulse text-immersive-secondary font-mono text-sm">Loading mentor...</div>
      </div>
    );
  }

  return (
    <MentorPage
      userProfile={userProfile}
      mentorContext={mentorContext}
      onUpdateContext={handleUpdateContext}
      checkIns={checkIns}
    />
  );
}
