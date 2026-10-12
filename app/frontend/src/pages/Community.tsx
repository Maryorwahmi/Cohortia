import {useEffect, useState} from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import CommunityPage from '../components/CommunityPage';
import {catalogCourseApi, roadmapApi, trackApi} from '../services/api';
import {useAuth} from '../context/AuthContext';

export default function Community() {
  const {user} = useAuth();
  const [searchParams] = useSearchParams();
  const [courses, setCourses] = useState<Array<{id: string; title: string; category?: string; level?: string; description?: string | null}>>([]);
  const [discoveryCourses, setDiscoveryCourses] = useState<Array<{id: string; title: string; category?: string; level?: string; description?: string | null}>>([]);
  useEffect(() => {
    if (!user) return;
    void Promise.allSettled([roadmapApi.getActive(), trackApi.getEnrolled(), trackApi.getAll(), catalogCourseApi.getAll()]).then(([roadmapResult, enrolledResult, tracksResult, catalogResult]) => {
      const roadmapCourses = roadmapResult.status === 'fulfilled' ? (roadmapResult.value.data?.courses || []) : [];
      const enrolledIds = enrolledResult.status === 'fulfilled' ? new Set((enrolledResult.value.data?.enrollments || []).map((enrollment) => String(enrollment.trackId || enrollment.courseId || ''))) : new Set<string>();
      const tracks = tracksResult.status === 'fulfilled' ? (tracksResult.value.data?.tracks || []) : [];
      const enrolledTracks = tracks.filter((track) => enrolledIds.has(track.id));
      const enrolledCourses = [...roadmapCourses, ...enrolledTracks];
      const uniqueCourses = Array.from(new Map(enrolledCourses.map((course) => [course.id, course])).values());
      setCourses(uniqueCourses);
      setDiscoveryCourses(catalogResult.status === 'fulfilled' ? (catalogResult.value.data?.courses || []) : tracks);
    });
  }, [user]);
  if (!user) return <div className="flex min-h-screen items-center justify-center bg-immersive-bg px-4 pt-20"><div className="w-full max-w-md rounded-3xl border border-immersive-border bg-immersive-card p-8 text-center"><p className="text-xs font-mono font-bold uppercase tracking-widest text-immersive-secondary">Members only</p><h1 className="mt-3 text-2xl font-extrabold text-immersive-text-primary">Join the Cohortia community</h1><p className="mt-3 text-sm leading-6 text-immersive-text-secondary">Log in to meet learners, join course conversations, find study partners, and attend community events.</p><Link to="/login" className="mt-6 inline-flex w-full justify-center rounded-xl bg-immersive-primary px-5 py-3 text-sm font-bold text-white">Log in to continue</Link></div></div>;
  return <CommunityPage courses={courses} discoveryCourses={discoveryCourses} activeCourseId={searchParams.get('courseId') || undefined} />;
}
