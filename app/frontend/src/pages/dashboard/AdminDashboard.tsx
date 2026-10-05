import {useEffect, useMemo, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {BookOpen, Check, ClipboardCheck, Search, ShieldCheck, TerminalSquare, UserRoundCog, X} from 'lucide-react';
import {adminApi, AdminCourse, AdminCoursePermission, AdminManagedUser} from '../../services/api';
import {useAuth} from '../../context/AuthContext';

type PermissionKey = 'screens' | 'assessments' | 'practicals' | 'other';
type CourseFilter = 'all' | PermissionKey;
type CourseGrantMap = Record<string, Record<PermissionKey, boolean>>;

const permissionLabels: Record<PermissionKey, string> = {
  screens: 'Learning screens',
  assessments: 'Assessments',
  practicals: 'Practicals',
  other: 'Other',
};

const emptyGrant = (): Record<PermissionKey, boolean> => ({
  screens: false,
  assessments: false,
  practicals: false,
  other: false,
});

export default function AdminDashboard() {
  const {user} = useAuth();
  const navigate = useNavigate();
  const [courses, setCourses] = useState<AdminCourse[]>([]);
  const [users, setUsers] = useState<AdminManagedUser[]>([]);
  const [isAlphaAdmin, setIsAlphaAdmin] = useState(false);
  const [search, setSearch] = useState('');
  const [courseFilter, setCourseFilter] = useState<CourseFilter>('all');
  const [selectedUserId, setSelectedUserId] = useState('');
  const [grants, setGrants] = useState<CourseGrantMap>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  const loadData = async () => {
    setLoading(true);
    setError('');
    try {
      const courseResponse = await adminApi.getCourses();
      setCourses(courseResponse.data?.courses || []);
      setIsAlphaAdmin(Boolean(courseResponse.data?.isAlphaAdmin));
      if (user?.adminRole === 'alpha') {
        const userResponse = await adminApi.getUsers();
        setUsers(userResponse.data?.users || []);
      }
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : 'Could not load admin access.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user?.adminRole) {
      navigate('/dashboard', {replace: true});
      return;
    }
    void loadData();
  }, [user?.adminRole, navigate]);

  useEffect(() => {
    const selected = users.find((account) => account.id === selectedUserId);
    if (!selected) {
      setGrants({});
      return;
    }
    setGrants(Object.fromEntries(selected.coursePermissions.map((permission) => [
      permission.courseId,
      {
        screens: permission.screens,
        assessments: permission.assessments,
        practicals: permission.practicals,
      },
    ])));
  }, [selectedUserId, users]);

  const visibleCourses = useMemo(() => {
    const query = search.trim().toLowerCase();
    return courses.filter((course) => {
      const matchesSearch = !query
        || `${course.title} ${course.category} ${course.subcategory} ${course.provider || ''}`.toLowerCase().includes(query);
      const matchesFilter = courseFilter === 'all' || course.availability[courseFilter];
      return matchesSearch && matchesFilter;
    });
  }, [courses, courseFilter, search]);

  const managedAdmins = users.filter((account) => account.adminRole === 'admin');
  const selectedUser = users.find((account) => account.id === selectedUserId);

  const toggleGrant = (courseId: string, permission: PermissionKey, enabled: boolean) => {
    setGrants((current) => ({
      ...current,
      [courseId]: {
        ...(current[courseId] || emptyGrant()),
        [permission]: enabled,
      },
    }));
  };

  const selectMatchingCourses = () => {
    setGrants((current) => {
      const next = {...current};
      for (const course of visibleCourses) {
        const available = {
          screens: course.availability.screens,
          assessments: course.availability.assessments,
          practicals: course.availability.practicals,
          other: course.availability.other,
        };
        const selected = {...(current[course.id] || emptyGrant())};
        if (courseFilter === 'all') {
          for (const permission of Object.keys(permissionLabels) as PermissionKey[]) {
            selected[permission] = available[permission];
          }
        } else if (available[courseFilter]) {
          selected[courseFilter] = true;
        }
        next[course.id] = selected;
      }
      return next;
    });
  };

  const saveAccess = async () => {
    if (!selectedUser) return;
    setSaving(true);
    setError('');
    setNotice('');
    try {
      const coursePermissions: AdminCoursePermission[] = (Object.entries(grants) as [string, Record<PermissionKey, boolean>][])
        .filter(([, values]) => values.screens || values.assessments || values.practicals || values.other)
        .map(([courseId, values]) => ({courseId, ...values}));
      await adminApi.saveUserAccess(selectedUser.id, coursePermissions);
      setNotice(`Course access saved for ${selectedUser.name}.`);
      const response = await adminApi.getUsers();
      setUsers(response.data?.users || []);
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : 'Could not save admin access.');
    } finally {
      setSaving(false);
    }
  };

  const revokeAccess = async () => {
    if (!selectedUser || selectedUser.adminRole !== 'admin') return;
    setSaving(true);
    setError('');
    setNotice('');
    try {
      await adminApi.revokeUserAccess(selectedUser.id);
      setNotice(`Admin access revoked for ${selectedUser.name}.`);
      const response = await adminApi.getUsers();
      setUsers(response.data?.users || []);
    } catch (revokeError) {
      setError(revokeError instanceof Error ? revokeError.message : 'Could not revoke admin access.');
    } finally {
      setSaving(false);
    }
  };

  const openCourseBoard = (course: AdminCourse, mode: 'screens' | 'practicals') => {
    localStorage.setItem('cohortia_active_learning_context', JSON.stringify({
      courseId: course.id,
      courseTitle: course.title,
      mode,
    }));
    localStorage.setItem('cohortia_active_learning_board_chapter', JSON.stringify({
      courseId: course.id,
      module: 1,
      chapter: 1,
    }));
    navigate('/dashboard/learning');
  };

  if (loading) {
    return <div className="flex min-h-[60vh] items-center justify-center text-sm text-immersive-text-secondary">Loading admin course access...</div>;
  }

  return (
    <div className="mx-auto w-full max-w-[1600px] space-y-8 px-4 py-8 sm:px-6">
      <header className="flex flex-col gap-4 border-b border-immersive-border pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-immersive-primary">
            <ShieldCheck className="h-4 w-4" /> Cohortia administration
          </span>
          <h1 className="mt-2 text-3xl font-extrabold text-immersive-text-primary">Course access</h1>
          <p className="mt-2 max-w-2xl text-sm text-immersive-text-secondary">
            Browse courses and open their existing learning, assessment, and practical experiences.
            {isAlphaAdmin ? ' You have alpha admin access to every course and can grant scoped access to other admins.' : ' Your course list and actions are limited to the access granted to your account.'}
          </p>
        </div>
        {isAlphaAdmin && <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-xs font-bold text-amber-500">Alpha admin · full access</span>}
      </header>

      {error && <div role="alert" className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-400">{error}</div>}
      {notice && <div role="status" className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400">{notice}</div>}

      {isAlphaAdmin && (
        <section className="rounded-2xl border border-immersive-border bg-immersive-card p-5 sm:p-6">
          <div className="mb-4 flex items-center gap-3">
            <UserRoundCog className="h-5 w-5 text-immersive-primary" />
            <div>
              <h2 className="text-lg font-extrabold text-immersive-text-primary">Grant course access to an admin</h2>
              <p className="text-xs text-immersive-text-secondary">Select an existing user, then choose the courses and content they can access.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <select
              aria-label="Select a user to manage admin access"
              value={selectedUserId}
              onChange={(event) => { setSelectedUserId(event.target.value); setNotice(''); }}
              className="min-w-0 flex-1 rounded-xl border border-immersive-border bg-immersive-bg px-3 py-3 text-sm text-immersive-text-primary"
            >
              <option value="">Choose a registered user</option>
              {users.map((account) => (
                <option key={account.id} value={account.id}>
                  {account.name} · {account.email}{account.adminRole === 'admin' ? ' · Admin' : ''}
                </option>
              ))}
            </select>
            {selectedUser && (
              <div className="flex gap-2">
                <button type="button" onClick={() => void saveAccess()} disabled={saving} className="rounded-xl bg-immersive-primary px-4 py-3 text-sm font-bold text-white disabled:opacity-50">
                  {saving ? 'Saving…' : selectedUser.adminRole === 'admin' ? 'Save access' : 'Grant admin access'}
                </button>
                {selectedUser.adminRole === 'admin' && (
                  <button type="button" onClick={() => void revokeAccess()} disabled={saving} className="rounded-xl border border-rose-500/30 px-4 py-3 text-sm font-bold text-rose-400 disabled:opacity-50">
                    Revoke
                  </button>
                )}
              </div>
            )}
          </div>
          {managedAdmins.length > 0 && <p className="mt-3 text-xs text-immersive-text-secondary">Currently managed admins: {managedAdmins.map((account) => account.name).join(', ')}</p>}
          {selectedUser && (
            <>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {([
                  ['all', 'All courses'],
                  ['screens', 'Learning screens'],
                  ['assessments', 'Assessments'],
                  ['practicals', 'Practicals'],
                  ['other', 'Other'],
                ] as const).map(([filter, label]) => (
                  <button
                    key={filter}
                    type="button"
                    aria-pressed={courseFilter === filter}
                    onClick={() => setCourseFilter(filter)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${courseFilter === filter ? 'border-immersive-primary bg-immersive-primary/10 text-immersive-primary' : 'border-immersive-border text-immersive-text-secondary hover:border-immersive-primary/50'}`}
                  >
                    {label}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={selectMatchingCourses}
                  disabled={!visibleCourses.length || (courseFilter === 'other' && !visibleCourses.some((course) => course.availability.other))}
                  className="ml-auto rounded-lg bg-immersive-primary px-3 py-2 text-xs font-bold text-white disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {courseFilter === 'all' ? 'Select all available access' : `Select all ${courseFilter === 'screens' ? 'screens' : courseFilter}`}
                </button>
              </div>
              <p className="mt-2 text-xs text-immersive-text-secondary">
                {visibleCourses.length} matching course{visibleCourses.length === 1 ? '' : 's'}. Bulk selection grants only content types available for those courses.
              </p>
              <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {visibleCourses.map((course) => {
                  const current = grants[course.id] || emptyGrant();
                  return (
                    <fieldset key={course.id} className="rounded-xl border border-immersive-border bg-immersive-bg p-4">
                      <legend className="max-w-full px-1 text-sm font-bold text-immersive-text-primary">{course.title}</legend>
                      <div className="mt-1 flex flex-wrap gap-3">
                        {(Object.keys(permissionLabels) as PermissionKey[]).map((permission) => (
                          <label key={permission} className={`flex items-center gap-2 text-xs ${course.availability[permission] ? 'text-immersive-text-secondary' : 'text-immersive-text-secondary/45'}`}>
                            <input
                              type="checkbox"
                              checked={current[permission]}
                              disabled={!course.availability[permission]}
                              onChange={(event) => toggleGrant(course.id, permission, event.target.checked)}
                            />
                            {permissionLabels[permission]}
                          </label>
                        ))}
                      </div>
                    </fieldset>
                  );
                })}
              </div>
            </>
          )}
        </section>
      )}

      <section>
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-immersive-text-primary">Available courses</h2>
            <p className="text-xs text-immersive-text-secondary">{courses.length} course{courses.length === 1 ? '' : 's'} available to this account</p>
          </div>
          <label className="relative block w-full sm:max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-immersive-text-secondary" />
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search courses" className="w-full rounded-xl border border-immersive-border bg-immersive-card py-2.5 pl-9 pr-3 text-sm text-immersive-text-primary" />
          </label>
        </div>
        {visibleCourses.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-immersive-border p-8 text-center text-sm text-immersive-text-secondary">
            {courses.length ? 'No courses match your search.' : 'No course access has been assigned to your admin account yet.'}
          </div>
        ) : (
          <div className="grid gap-4 lg:grid-cols-2">
            {visibleCourses.map((course) => (
              <article key={course.id} className="rounded-2xl border border-immersive-border bg-immersive-card p-5 shadow-lg shadow-immersive-shadow">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-extrabold text-immersive-text-primary">{course.title}</h3>
                    <p className="mt-1 text-xs text-immersive-text-secondary">{course.provider || course.category} · {course.level || 'Self-paced'}</p>
                  </div>
                  <BookOpen className="h-5 w-5 shrink-0 text-immersive-primary" />
                </div>
                <p className="mt-3 line-clamp-2 text-sm text-immersive-text-secondary">{course.description || course.subcategory}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className={`rounded-full px-2.5 py-1 text-[11px] ${course.availability.screens ? 'bg-sky-500/10 text-sky-400' : 'bg-immersive-bg text-immersive-text-secondary/60'}`}>Screens {course.availability.screens ? 'available' : 'not imported'}</span>
                  <span className={`rounded-full px-2.5 py-1 text-[11px] ${course.availability.assessments ? 'bg-violet-500/10 text-violet-400' : 'bg-immersive-bg text-immersive-text-secondary/60'}`}>Assessments {course.availability.assessments ? 'available' : 'not imported'}</span>
                  <span className={`rounded-full px-2.5 py-1 text-[11px] ${course.availability.practicals ? 'bg-emerald-500/10 text-emerald-400' : 'bg-immersive-bg text-immersive-text-secondary/60'}`}>Practicals {course.availability.practicals ? 'available' : 'not imported'}</span>
                  <span className={`rounded-full px-2.5 py-1 text-[11px] ${course.availability.other ? 'bg-amber-500/10 text-amber-400' : 'bg-immersive-bg text-immersive-text-secondary/60'}`}>Other {course.availability.other ? 'available' : 'not applicable'}</span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {course.availability.screens && course.access.screens && (
                    <button type="button" onClick={() => openCourseBoard(course, 'screens')} className="inline-flex items-center gap-2 rounded-lg border border-immersive-border px-3 py-2 text-xs font-bold text-immersive-text-primary hover:border-immersive-primary">
                      <BookOpen className="h-3.5 w-3.5" /> Open screens
                    </button>
                  )}
                  {course.availability.assessments && course.access.assessments && (
                    <button type="button" onClick={() => navigate(`/assessments/${encodeURIComponent(course.id)}`)} className="inline-flex items-center gap-2 rounded-lg border border-immersive-border px-3 py-2 text-xs font-bold text-immersive-text-primary hover:border-immersive-primary">
                      <ClipboardCheck className="h-3.5 w-3.5" /> Assessments
                    </button>
                  )}
                  {course.availability.practicals && course.access.practicals && (
                    <button type="button" onClick={() => openCourseBoard(course, 'practicals')} className="inline-flex items-center gap-2 rounded-lg border border-immersive-border px-3 py-2 text-xs font-bold text-immersive-text-primary hover:border-immersive-primary">
                      <TerminalSquare className="h-3.5 w-3.5" /> Open practicals
                    </button>
                  )}
                  {course.availability.other && course.access.other && (
                    <button type="button" onClick={() => navigate(`/careers/course/${encodeURIComponent(course.id)}`)} className="inline-flex items-center gap-2 rounded-lg border border-immersive-border px-3 py-2 text-xs font-bold text-immersive-text-primary hover:border-immersive-primary">
                      <BookOpen className="h-3.5 w-3.5" /> Open course overview
                    </button>
                  )}
                  {!isAlphaAdmin && !Object.values(course.access).some(Boolean) && (
                    <span className="inline-flex items-center gap-1 text-xs text-immersive-text-secondary"><X className="h-3.5 w-3.5" /> No content access</span>
                  )}
                  {isAlphaAdmin && <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-500"><Check className="h-3.5 w-3.5" /> Full course access</span>}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
