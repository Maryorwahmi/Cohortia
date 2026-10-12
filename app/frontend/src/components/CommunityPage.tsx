import {useEffect, useMemo, useState, type ReactNode} from 'react';
import {BookOpen, Calendar, CheckCircle2, Bookmark, Flag, MessageSquare, Plus, Search, Send, Users, X} from 'lucide-react';
import {communityApi, CommunityEvent, eventsApi, StudyRoom, studyRoomsApi} from '../services/api';

type Area = 'my-courses' | 'discover' | 'discussions' | 'collaboration' | 'events';
type Post = Record<string, any>;
type Course = {id: string; title: string; category?: string; level?: string; description?: string | null};

interface CommunityPageProps {
  courses?: Course[];
  discoveryCourses?: Course[];
  activeCourseId?: string;
}

const areas: Array<{id: Area; label: string; description: string}> = [
  {id: 'my-courses', label: 'My courses', description: 'Learn with people on the same path.'},
  {id: 'discover', label: 'Discover', description: 'Find related learners and communities.'},
  {id: 'discussions', label: 'Discussions', description: 'Ask, explain, showcase, and solve.'},
  {id: 'collaboration', label: 'Collaboration', description: 'Study together and build projects.'},
  {id: 'events', label: 'Events', description: 'Join workshops, office hours, and demos.'},
];

function relativeTime(value?: string) {
  if (!value) return 'Recently';
  const seconds = Math.max(0, (Date.now() - new Date(value).getTime()) / 1000);
  if (seconds < 60) return 'Just now'; if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`; if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  return `${Math.floor(seconds / 86400)}d ago`;
}

export default function CommunityPage({courses = [], discoveryCourses = [], activeCourseId}: CommunityPageProps) {
  const [area, setArea] = useState<Area>('my-courses');
  const [selectedCourse, setSelectedCourse] = useState(activeCourseId || '');
  const [posts, setPosts] = useState<Post[]>([]);
  const [rooms, setRooms] = useState<StudyRoom[]>([]);
  const [events, setEvents] = useState<CommunityEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [notice, setNotice] = useState('');
  const [search, setSearch] = useState('');
  const [composerOpen, setComposerOpen] = useState(false);
  const [draft, setDraft] = useState({title: '', content: '', postType: 'discussion', category: 'general', module: '', chapter: ''});

  const loadCommunity = async () => {
    setLoading(true);
    try {
      const [postResponse, roomResponse, eventResponse] = await Promise.all([
        communityApi.getPosts({courseId: selectedCourse || undefined}), studyRoomsApi.getAll(), eventsApi.getAll(),
      ]);
      setPosts(postResponse.data?.posts || []); setRooms(roomResponse.data?.rooms || []); setEvents(eventResponse.data?.events || []);
    } catch (error) { setNotice(error instanceof Error ? error.message : 'Unable to load community data.'); }
    finally { setLoading(false); }
  };
  useEffect(() => { void loadCommunity(); }, [selectedCourse]);

  const visiblePosts = useMemo(() => posts.filter((post) => {
    const haystack = `${post.title || ''} ${post.content || ''} ${post.category || ''} ${post.author?.name || ''}`.toLowerCase();
    return !search.trim() || haystack.includes(search.trim().toLowerCase());
  }), [posts, search]);

  const createPost = async () => {
    if (!draft.title.trim() || draft.content.trim().length < 10) return;
    try { await communityApi.createPost({title: draft.title, content: draft.content, postType: draft.postType, category: draft.category, courseId: selectedCourse || null, module: draft.module ? Number(draft.module) : null, chapter: draft.chapter ? Number(draft.chapter) : null}); setDraft({title: '', content: '', postType: 'discussion', category: 'general', module: '', chapter: ''}); setComposerOpen(false); await loadCommunity(); }
    catch (error) { setNotice(error instanceof Error ? error.message : 'Unable to publish discussion.'); }
  };
  const reply = async (postId: string, content: string) => { try { await communityApi.addComment(postId, content); await loadCommunity(); } catch (error) { setNotice(error instanceof Error ? error.message : 'Unable to reply.'); } };
  const joinRoom = async (id: string) => { try { await studyRoomsApi.join(id); await loadCommunity(); } catch (error) { setNotice(error instanceof Error ? error.message : 'Unable to join room.'); } };
  const rsvp = async (id: string) => { try { await eventsApi.rsvp(id); setNotice('You are on the guest list.'); await loadCommunity(); } catch (error) { setNotice(error instanceof Error ? error.message : 'Unable to RSVP.'); } };

  return <div className="min-h-screen bg-immersive-bg px-4 pb-12 pt-24 text-left sm:px-6">
    <div className="mx-auto max-w-[1500px]">
      <header className="mb-8 flex flex-col gap-5 border-b border-immersive-border pb-8 lg:flex-row lg:items-end lg:justify-between">
        <div><span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF4B3E]">Cohortia learning network</span><h1 className="mt-2 text-4xl font-extrabold tracking-tight text-immersive-text-primary sm:text-5xl">Learn together. Build together.</h1><p className="mt-3 max-w-2xl text-sm leading-6 text-immersive-text-secondary">A real home for questions, peer support, study partners, mentors, projects, and the people learning alongside you.</p></div>
        <button onClick={() => setComposerOpen(true)} className="inline-flex items-center justify-center gap-2 rounded-xl bg-immersive-primary px-4 py-3 text-sm font-bold text-white hover:brightness-110"><Plus className="h-4 w-4" /> Start a discussion</button>
      </header>
      {notice && <div className="mb-5 flex items-center justify-between rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-300"><span>{notice}</span><button onClick={() => setNotice('')}><X className="h-4 w-4" /></button></div>}
      <div className="grid gap-8 lg:grid-cols-[250px_1fr]">
        <aside className="space-y-2">
          {areas.map((item) => <button key={item.id} onClick={() => setArea(item.id)} className={`w-full rounded-2xl border p-4 text-left transition ${area === item.id ? 'border-immersive-primary bg-immersive-primary/10' : 'border-immersive-border bg-immersive-card hover:border-immersive-secondary/50'}`}><span className="block text-sm font-extrabold text-immersive-text-primary">{item.label}</span><span className="mt-1 block text-xs leading-5 text-immersive-text-secondary">{item.description}</span></button>)}
          <div className="mt-5 rounded-2xl border border-immersive-border bg-immersive-card p-4"><p className="text-xs font-bold uppercase tracking-widest text-immersive-secondary">Your learning context</p><select value={selectedCourse} onChange={(event) => setSelectedCourse(event.target.value)} className="mt-3 w-full rounded-xl border border-immersive-border bg-immersive-bg px-3 py-2 text-xs text-immersive-text-primary"><option value="">All courses</option>{courses.map((course) => <option key={course.id} value={course.id}>{course.title}</option>)}</select><p className="mt-3 text-xs leading-5 text-immersive-text-secondary">Choose a course to see conversations from learners on the same curriculum.</p></div>
        </aside>
        <main className="min-w-0">
          {area === 'my-courses' && <section className="space-y-6"><SectionTitle icon={<BookOpen className="h-5 w-5" />} title="My course communities" subtitle="The people learning the same material as you." />{courses.length ? <div className="grid gap-4 md:grid-cols-2">{courses.map((course) => <button key={course.id} onClick={() => {setSelectedCourse(course.id); setArea('discussions');}} className="rounded-2xl border border-immersive-border bg-immersive-card p-5 text-left hover:border-immersive-secondary"><p className="text-xs font-bold uppercase tracking-widest text-immersive-secondary">{course.category || 'Course'} · {course.level || 'Self-paced'}</p><h3 className="mt-2 font-extrabold text-immersive-text-primary">{course.title}</h3><p className="mt-2 line-clamp-2 text-sm text-immersive-text-secondary">{course.description || 'Join learners working through this course together.'}</p><span className="mt-4 inline-block text-xs font-bold text-immersive-primary">Open course community →</span></button>)}</div> : <Empty text="Enroll in a course to see your course community here." />}</section>}
          {area === 'discover' && <section className="space-y-6"><SectionTitle icon={<Users className="h-5 w-5" />} title="Discover your people" subtitle="Explore related courses and find learners with overlapping goals." /><div className="grid gap-4 md:grid-cols-2">{discoveryCourses.map((course) => <button key={course.id} onClick={() => {setSelectedCourse(course.id); setArea('discussions');}} className="rounded-2xl border border-immersive-border bg-immersive-card p-5 text-left hover:border-immersive-secondary"><p className="text-xs font-bold uppercase tracking-widest text-immersive-secondary">{course.category || 'Learning community'} · {course.level || 'All levels'}</p><h3 className="mt-2 font-extrabold text-immersive-text-primary">{course.title}</h3><p className="mt-2 line-clamp-2 text-sm text-immersive-text-secondary">{course.description || 'Meet learners exploring this subject and related skills.'}</p><span className="mt-4 inline-block text-xs font-bold text-immersive-primary">Meet related learners →</span></button>)}</div>{!discoveryCourses.length && <Empty text="Course communities will appear here when the catalog is available." />}</section>}
          {area === 'discussions' && <section className="space-y-5"><SectionTitle icon={<MessageSquare className="h-5 w-5" />} title="Discussions" subtitle="Ask questions, share work, and help someone move forward." /><div className="flex flex-col gap-3 sm:flex-row"><div className="relative flex-1"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-immersive-text-secondary" /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search discussions..." className="w-full rounded-xl border border-immersive-border bg-immersive-card py-3 pl-10 pr-3 text-sm text-immersive-text-primary outline-none focus:border-immersive-secondary" /></div><select className="rounded-xl border border-immersive-border bg-immersive-card px-3 text-sm text-immersive-text-primary"><option>All post types</option><option>Questions</option><option>Showcases</option><option>Study partners</option></select></div>{loading ? <Empty text="Loading real conversations..." /> : visiblePosts.length ? <div className="space-y-4">{visiblePosts.map((post) => <PostCard key={post.id} post={post} onReply={reply} onRefresh={loadCommunity} />)}</div> : <Empty text="No discussions yet. Start the first useful conversation for this course." />}</section>}
          {area === 'collaboration' && <section className="space-y-6"><SectionTitle icon={<Users className="h-5 w-5" />} title="Collaboration" subtitle="Join a live room or find people to build and study with." /><div className="grid gap-4 md:grid-cols-2">{rooms.length ? rooms.map((room) => <div key={room.id} className="rounded-2xl border border-immersive-border bg-immersive-card p-5"><div className="flex items-start justify-between gap-4"><div><h3 className="font-extrabold text-immersive-text-primary">{room.name}</h3><p className="mt-1 text-xs text-immersive-text-secondary">{room.topic} · {room.activeParticipants}/{room.maxParticipants} active</p></div><span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-bold text-emerald-400">Live</span></div><p className="mt-3 text-sm text-immersive-text-secondary">{room.description || 'A focused peer learning room.'}</p><button onClick={() => joinRoom(room.id)} className="mt-4 rounded-lg bg-immersive-secondary px-3 py-2 text-xs font-bold text-immersive-bg">Join room</button></div>) : <Empty text="No live rooms yet. Create a focused study room from your course community." />}</div></section>}
          {area === 'events' && <section className="space-y-6"><SectionTitle icon={<Calendar className="h-5 w-5" />} title="Events and live learning" subtitle="Show up for workshops, office hours, demos, and peer sessions." /><div className="grid gap-4 md:grid-cols-2">{events.length ? events.map((event) => <div key={event.id} className="rounded-2xl border border-immersive-border bg-immersive-card p-5"><p className="text-xs font-bold uppercase tracking-widest text-immersive-secondary">{event.category} · {event.date}</p><h3 className="mt-2 font-extrabold text-immersive-text-primary">{event.title}</h3><p className="mt-2 text-sm text-immersive-text-secondary">{event.description}</p><div className="mt-4 flex items-center justify-between gap-3"><span className="text-xs text-immersive-text-secondary">{event.time} · {event.rsvpCount} attending</span><button onClick={() => rsvp(event.id)} className="rounded-lg border border-immersive-secondary px-3 py-2 text-xs font-bold text-immersive-secondary">RSVP</button></div></div>) : <Empty text="No upcoming events have been published yet." />}</div></section>}
        </main>
      </div>
      {composerOpen && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"><div className="w-full max-w-xl rounded-2xl border border-immersive-border bg-immersive-card p-6"><div className="flex items-center justify-between"><h2 className="text-xl font-extrabold text-immersive-text-primary">Start a discussion</h2><button onClick={() => setComposerOpen(false)}><X className="h-5 w-5 text-immersive-text-secondary" /></button></div><input value={draft.title} onChange={(event) => setDraft({...draft, title: event.target.value})} placeholder="Give your discussion a clear title" className="mt-5 w-full rounded-xl border border-immersive-border bg-immersive-bg p-3 text-sm text-immersive-text-primary outline-none" /><textarea value={draft.content} onChange={(event) => setDraft({...draft, content: event.target.value})} placeholder="What would you like the community to know or help with?" rows={6} className="mt-3 w-full rounded-xl border border-immersive-border bg-immersive-bg p-3 text-sm text-immersive-text-primary outline-none" /><div className="mt-3 flex flex-wrap gap-2"><select value={draft.postType} onChange={(event) => setDraft({...draft, postType: event.target.value})} className="rounded-lg border border-immersive-border bg-immersive-bg px-3 py-2 text-xs text-immersive-text-primary"><option value="discussion">Discussion</option><option value="question">Question</option><option value="showcase">Project showcase</option><option value="study_partner">Study partner</option><option value="resource">Resource</option></select><button onClick={createPost} className="ml-auto rounded-xl bg-immersive-primary px-4 py-2 text-sm font-bold text-white">Publish</button></div></div></div>}
    </div>
  </div>;
}

function SectionTitle({icon, title, subtitle}: {icon: ReactNode; title: string; subtitle: string}) { return <div className="flex items-start gap-3"><div className="rounded-xl bg-immersive-primary/10 p-2 text-immersive-primary">{icon}</div><div><h2 className="text-2xl font-extrabold text-immersive-text-primary">{title}</h2><p className="mt-1 text-sm text-immersive-text-secondary">{subtitle}</p></div></div>; }
function Empty({text}: {text: string}) { return <div className="rounded-2xl border border-dashed border-immersive-border bg-immersive-card p-10 text-center text-sm text-immersive-text-secondary">{text}</div>; }
function PostCard({post, onReply, onRefresh}: {key?: string; post: Post; onReply: (id: string, content: string) => Promise<void>; onRefresh?: () => Promise<void>}) {
  const [replyText, setReplyText] = useState(''); const [bookmarked, setBookmarked] = useState(Boolean(post.bookmarked)); const [reported, setReported] = useState(false);
  const replyNow = async () => { if (!replyText.trim()) return; await onReply(post.id, replyText); setReplyText(''); };
  return <article className="rounded-2xl border border-immersive-border bg-immersive-card p-5"><div className="flex items-start justify-between gap-4"><div><div className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-immersive-secondary/10 px-2 py-1 text-[10px] font-bold uppercase text-immersive-secondary">{post.postType || 'discussion'}</span>{post.courseId && <span className="text-[10px] text-immersive-text-secondary">Course discussion</span>}{post.isSolved && <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400"><CheckCircle2 className="h-3 w-3" /> Solved</span>}</div><h3 className="mt-2 text-lg font-extrabold text-immersive-text-primary">{post.title}</h3></div><span className="text-xs text-immersive-text-secondary">{relativeTime(post.createdAt)}</span></div><p className="mt-3 whitespace-pre-line text-sm leading-6 text-immersive-text-secondary">{post.content}</p><div className="mt-4 flex flex-wrap items-center gap-3 border-t border-immersive-border pt-3 text-xs text-immersive-text-secondary"><span className="font-bold text-immersive-text-primary">{post.author?.name || 'Learner'}</span><span>{post.author?.desiredField || post.author?.role || 'Learner'}</span><span>{post.replies || post.comments?.length || 0} replies</span><button onClick={async () => {const result = await communityApi.toggleBookmark(post.id); setBookmarked(Boolean(result.data?.bookmarked));}} className="ml-auto inline-flex items-center gap-1 hover:text-immersive-secondary"><Bookmark className={`h-3.5 w-3.5 ${bookmarked ? 'fill-current text-immersive-secondary' : ''}`} /> {bookmarked ? 'Saved' : 'Save'}</button><button onClick={async () => {await communityApi.reportPost(post.id, 'Inappropriate or harmful content'); setReported(true);}} disabled={reported} className="inline-flex items-center gap-1 hover:text-rose-400"><Flag className="h-3.5 w-3.5" /> {reported ? 'Reported' : 'Report'}</button></div>{post.comments?.slice(0, 3).map((comment: any) => <div key={comment.id} className="mt-3 rounded-xl bg-immersive-bg/60 p-3"><p className="text-xs font-bold text-immersive-text-primary">{comment.author?.name || 'Learner'} <span className="ml-2 font-normal text-immersive-text-secondary">{relativeTime(comment.createdAt)}</span></p><p className="mt-1 text-sm text-immersive-text-secondary">{comment.content}</p></div>)}<div className="mt-4 flex gap-2"><input value={replyText} onChange={(event) => setReplyText(event.target.value)} onKeyDown={(event) => {if (event.key === 'Enter') void replyNow();}} placeholder="Add a helpful reply..." className="min-w-0 flex-1 rounded-xl border border-immersive-border bg-immersive-bg px-3 py-2 text-xs text-immersive-text-primary outline-none" /><button onClick={() => void replyNow()} className="rounded-xl bg-immersive-secondary px-3 text-immersive-bg"><Send className="h-4 w-4" /></button></div></article>;
}
