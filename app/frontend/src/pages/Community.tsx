import {useEffect, useState} from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import CommunityPage from '../components/CommunityPage';
import {roadmapApi} from '../services/api';
import {useAuth} from '../context/AuthContext';

export default function Community() {
  const {user} = useAuth();
  const [searchParams] = useSearchParams();
  const [courses, setCourses] = useState<Array<{id: string; title: string; category?: string; level?: string; description?: string | null}>>([]);
  useEffect(() => { if (user) roadmapApi.getActive().then((response) => setCourses(response.data?.courses || [])).catch(() => setCourses([])); }, [user]);
  if (!user) return <div className="flex min-h-screen items-center justify-center bg-immersive-bg px-4 pt-20"><div className="w-full max-w-md rounded-3xl border border-immersive-border bg-immersive-card p-8 text-center"><p className="text-xs font-mono font-bold uppercase tracking-widest text-immersive-secondary">Members only</p><h1 className="mt-3 text-2xl font-extrabold text-immersive-text-primary">Join the Cohortia community</h1><p className="mt-3 text-sm leading-6 text-immersive-text-secondary">Log in to meet learners, join course conversations, find study partners, and attend community events.</p><Link to="/login" className="mt-6 inline-flex w-full justify-center rounded-xl bg-immersive-primary px-5 py-3 text-sm font-bold text-white">Log in to continue</Link></div></div>;
  return <CommunityPage courses={courses} activeCourseId={searchParams.get('courseId') || undefined} />;
}
