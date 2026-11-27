import {useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {BookOpen, Check, ClipboardCheck, Search, ShieldCheck, TerminalSquare, Trash2, UserRoundCog, X} from 'lucide-react';
import {adminApi, AdminCourse, AdminCourseFilter, AdminCoursePermission, AdminManagedUser} from '../../services/api';
import {useAuth} from '../../context/AuthContext';

type PermissionKey = 'screens' | 'assessments' | 'practicals' | 'other';
type CourseFilter = AdminCourseFilter;
type CourseGrantMap = Record<string, Record<PermissionKey, boolean>>;

const COURSE_PAGE_SIZE = 30;
const COURSE_BULK_PAGE_SIZE = 100;

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
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteEmailConfirmation, setDeleteEmailConfirmation] = useState('');
  const [communityReports, setCommunityReports] = useState<Array<Record<string, any>>>([]);
  const [communityStats, setCommunityStats] = useState({totalPosts: 0, openReports: 0, hiddenPosts: 0});
  const [courseTotal, setCourseTotal] = useState(0);
  const [coursePage, setCoursePage] = useState(1);
  const [courseHasMore, setCourseHasMore] = useState(false);
  const [courseListLoading, setCourseListLoading] = useState(true);
  const [loadingMoreCourses, setLoadingMoreCourses] = useState(false);
  const [selectingMatchingCourses, setSelectingMatchingCourses] = useState(false);
  const courseRequestId = useRef(0);
  const bulkSelectionRequestId = useRef(0);
  const [courseQueryReady, setCourseQueryReady] = useState(false);
  const loadedCourseQuery = useRef('');

  const loadData = async () => {
    setLoading(true);
    setError('');
    const requestId = ++courseRequestId.current;
    setCourseListLoading(true);
    setLoadingMoreCourses(false);
    const backgroundRequests = Promise.all([
      adminApi.getCommunityReports(),
      adminApi.getCommunityStats(),
      user?.adminRole === 'alpha' ? adminApi.getUsers() : Promise.resolve(null),
    ])
      .then(([reportResponse, statsResponse, userResponse]) => {
        setCommunityReports(reportResponse.data?.reports || []);
        setCommunityStats(statsResponse.data || {totalPosts: 0, openReports: 0, hiddenPosts: 0});
        if (userResponse) setUsers(userResponse.data?.users || []);
      })
      .catch((loadError) => {
        setError(loadError instanceof Error ? loadError.message : 'Could not load admin data.');
      });
    try {
      const courseResponse = await adminApi.getCourses({
        page: 1,
        pageSize: COURSE_PAGE_SIZE,
        search,
        filter: courseFilter,
      });
      if (requestId === courseRequestId.current) {
        const pageData = courseResponse.data;
        setCourses(pageData?.courses || []);
        setCourseTotal(pageData?.pagination.total || 0);
        setCoursePage(pageData?.pagination.page || 1);
        setCourseHasMore(Boolean(pageData?.pagination.hasMore));
        setIsAlphaAdmin(Boolean(pageData?.isAlphaAdmin));
        loadedCourseQuery.current = JSON.stringify([search, courseFilter]);
        setCourseQueryReady(true);
      }
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : 'Could not load admin access.');
    } finally {
      if (requestId === courseRequestId.current) setCourseListLoading(false);
      setLoading(false);
    }
    void backgroundRequests;
  };

  const fetchCoursePage = async (
    page: number,
    append: boolean,
    requestId: number = ++courseRequestId.current,
    query = search,
    filter = courseFilter,
  ) => {
    if (append) setLoadingMoreCourses(true);
    else setCourseListLoading(true);
    try {
      const response = await adminApi.getCourses({
        page,
        pageSize: COURSE_PAGE_SIZE,
        search: query,
        filter,
      });
      if (requestId !== courseRequestId.current) return;
      const pageData = response.data;
      const nextCourses = pageData?.courses || [];
      setCourses((current) => append ? [...current, ...nextCourses] : nextCourses);
      setCourseTotal(pageData?.pagination.total || 0);
      setCoursePage(pageData?.pagination.page || page);
      setCourseHasMore(Boolean(pageData?.pagination.hasMore));
      setIsAlphaAdmin(Boolean(pageData?.isAlphaAdmin));
      if (!append) loadedCourseQuery.current = JSON.stringify([query, filter]);
    } catch (loadError) {
      if (requestId === courseRequestId.current) {
        setError(loadError instanceof Error ? loadError.message : 'Could not load courses.');
      }
    } finally {
      if (requestId === courseRequestId.current) {
        setCourseListLoading(false);
        setLoadingMoreCourses(false);
      }
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
    if (!courseQueryReady) return;
    const queryKey = JSON.stringify([search, courseFilter]);
    if (loadedCourseQuery.current === queryKey) return;
    const requestId = ++courseRequestId.current;
    bulkSelectionRequestId.current += 1;
    setSelectingMatchingCourses(false);
    setCourses([]);
    setCourseTotal(0);
    setCoursePage(1);
    setCourseHasMore(false);
    setCourseListLoading(true);
    setLoadingMoreCourses(false);
    const timer = window.setTimeout(() => {
      void fetchCoursePage(1, false, requestId, search, courseFilter);
    }, 250);
    return () => window.clearTimeout(timer);
  }, [search, courseFilter, courseQueryReady]);

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

  const visibleCourses = courses;

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

  const selectMatchingCourses = async () => {
    const requestId = ++bulkSelectionRequestId.current;
    const requestedSearch = search;
    const requestedFilter = courseFilter;
    setSelectingMatchingCourses(true);
    setError('');
    try {
      const firstPage = await adminApi.getCourses({
        page: 1,
        pageSize: COURSE_BULK_PAGE_SIZE,
        search: requestedSearch,
        filter: requestedFilter,
      });
      const pageData = firstPage.data;
      const pageCount = Math.ceil((pageData?.pagination.total || 0) / COURSE_BULK_PAGE_SIZE);
      const remainingPages = await Promise.all(Array.from(
        {length: Math.max(0, pageCount - 1)},
        (_, index) => adminApi.getCourses({
          page: index + 2,
          pageSize: COURSE_BULK_PAGE_SIZE,
          search: requestedSearch,
          filter: requestedFilter,
        }),
      ));
      if (requestId !== bulkSelectionRequestId.current) return;
      const matchingCourses = [
        ...(pageData?.courses || []),
        ...remainingPages.flatMap((response) => response.data?.courses || []),
      ];
      setGrants((current) => {
        const next = {...current};
        for (const course of matchingCourses) {
          const available = course.availability;
          const selected = {...(current[course.id] || emptyGrant())};
          if (courseFilter === 'all' || courseFilter === 'screens-ready') {
            for (const permission of Object.keys(permissionLabels) as PermissionKey[]) {
              selected[permission] = available[permission];
            }
          } else if (courseFilter === 'screens-pending') {
            selected.screens = false;
            selected.assessments = available.assessments;
            selected.practicals = available.practicals;
            selected.other = available.other;
          } else if (available[courseFilter]) {
            selected[courseFilter] = true;
          }
          next[course.id] = selected;
        }
        return next;
      });
    } catch (selectionError) {
      if (requestId === bulkSelectionRequestId.current) {
        setError(selectionError instanceof Error ? selectionError.message : 'Could not select matching courses.');
      }
    } finally {
      if (requestId === bulkSelectionRequestId.current) setSelectingMatchingCourses(false);
    }
  };

  const loadMoreCourses = () => {
    if (!courseHasMore || loadingMoreCourses || courseListLoading) return;
    void fetchCoursePage(coursePage + 1, true);
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

  const deleteSelectedUser = async () => {
    if (!selectedUser || deleteEmailConfirmation.trim().toLowerCase() !== selectedUser.email.toLowerCase()) return;
    setSaving(true);
    setError('');
    setNotice('');
    try {
      const response = await adminApi.deleteUser(selectedUser.id, deleteEmailConfirmation);
      setUsers((current) => current.filter((account) => account.id !== selectedUser.id));
      setSelectedUserId('');
      setGrants({});
      setDeleteDialogOpen(false);
      setDeleteEmailConfirmation('');
      setNotice(`${response.message || `Account deleted for ${selectedUser.name}.`}${response.warning ? ` ${response.warning}` : ''}`);
    } catch (deleteError) {
      setError(deleteError instanceof Error ? deleteError.message : 'Could not delete this account.');
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

      <section className="rounded-2xl border border-immersive-border bg-immersive-card p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div><h2 className="text-lg font-extrabold text-immersive-text-primary">Community control</h2><p className="mt-1 text-xs text-immersive-text-secondary">Review reports and keep course conversations useful and safe.</p></div>
          <div className="flex flex-wrap gap-2 text-xs"><span className="rounded-full bg-immersive-bg px-3 py-1.5 text-immersive-text-secondary">{communityStats.totalPosts} posts</span><span className="rounded-full bg-amber-500/10 px-3 py-1.5 text-amber-400">{communityStats.openReports} open reports</span><span className="rounded-full bg-rose-500/10 px-3 py-1.5 text-rose-400">{communityStats.hiddenPosts} hidden</span></div>
        </div>
        <div className="mt-5 space-y-3">
          {communityReports.filter((report) => report.status === 'open' || report.status === 'reviewing').slice(0, 8).map((report) => <div key={report.id} className="rounded-xl border border-immersive-border bg-immersive-bg/60 p-4"><div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"><div><p className="text-xs font-bold uppercase tracking-widest text-amber-400">{report.status} · {report.reason}</p><h3 className="mt-1 text-sm font-bold text-immersive-text-primary">{report.post?.title || 'Reported community content'}</h3><p className="mt-1 line-clamp-2 text-xs text-immersive-text-secondary">{report.post?.content || report.details || 'No additional details.'}</p></div><div className="flex shrink-0 gap-2"><button onClick={async () => {await adminApi.moderateCommunityPost(report.postId, {status: 'hidden', reason: report.reason}); await adminApi.updateCommunityReport(report.id, 'resolved', 'Content hidden by moderator'); await loadData();}} className="rounded-lg bg-rose-500/10 px-3 py-2 text-xs font-bold text-rose-400">Hide post</button><button onClick={async () => {await adminApi.updateCommunityReport(report.id, 'dismissed', 'Reviewed and dismissed'); await loadData();}} className="rounded-lg border border-immersive-border px-3 py-2 text-xs font-bold text-immersive-text-secondary">Dismiss</button></div></div></div>)}
          {!communityReports.some((report) => report.status === 'open' || report.status === 'reviewing') && <p className="rounded-xl border border-dashed border-immersive-border p-6 text-center text-sm text-immersive-text-secondary">No open community reports.</p>}
        </div>
      </section>

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
              onChange={(event) => {
                setSelectedUserId(event.target.value);
                setNotice('');
                setDeleteDialogOpen(false);
                setDeleteEmailConfirmation('');
              }}
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
                <button
                  type="button"
                  onClick={() => { setDeleteDialogOpen(true); setDeleteEmailConfirmation(''); setError(''); }}
                  disabled={saving}
                  className="inline-flex items-center gap-2 rounded-xl border border-rose-500/40 px-4 py-3 text-sm font-bold text-rose-400 disabled:opacity-50"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete account
                </button>
              </div>
            )}
          </div>
          {managedAdmins.length > 0 && <p className="mt-3 text-xs text-immersive-text-secondary">Currently managed admins: {managedAdmins.map((account) => account.name).join(', ')}</p>}
          {selectedUser && (
            <>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {([
                  ['all', 'All courses'],
                  ['screens-ready', 'Screens in database'],
                  ['screens-pending', 'No screens yet'],
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
                  onClick={() => void selectMatchingCourses()}
                  disabled={!courseTotal || selectingMatchingCourses}
                  className="ml-auto rounded-lg bg-immersive-primary px-3 py-2 text-xs font-bold text-white disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {selectingMatchingCourses
                    ? 'Selecting matching courses…'
                    : courseFilter === 'all' || courseFilter === 'screens-ready'
                      ? 'Select all available access'
                      : courseFilter === 'screens-pending'
                        ? 'Select available access (no screens)'
                        : `Select all ${courseFilter}`}
                </button>
              </div>
              <p className="mt-2 text-xs text-immersive-text-secondary">
                {courseTotal} matching course{courseTotal === 1 ? '' : 's'}; showing {visibleCourses.length} so far.{' '}
                “Screens in database” is based on imported screen records. “No screens yet” includes courses with no learning-board screens saved in the database; bulk access never grants screen permission to those courses.
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
              {courseHasMore && (
                <div className="mt-4 flex justify-center">
                  <button
                    type="button"
                    onClick={loadMoreCourses}
                    disabled={courseListLoading || loadingMoreCourses}
                    className="rounded-xl border border-immersive-border px-4 py-2.5 text-sm font-bold text-immersive-text-primary disabled:cursor-wait disabled:opacity-50"
                  >
                    {loadingMoreCourses ? 'Loading more courses…' : `Show more courses (${visibleCourses.length} of ${courseTotal})`}
                  </button>
                </div>
              )}
            </>
          )}
        </section>
      )}

      {isAlphaAdmin && selectedUser && deleteDialogOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4" role="presentation">
          <section
            aria-labelledby="delete-account-title"
            aria-modal="true"
            className="w-full max-w-lg rounded-2xl border border-rose-500/30 bg-immersive-card p-6 shadow-2xl"
            role="alertdialog"
          >
            <h2 id="delete-account-title" className="text-lg font-extrabold text-rose-400">Permanently delete this account?</h2>
            <p className="mt-3 text-sm text-immersive-text-secondary">
              This deletes <strong className="text-immersive-text-primary">{selectedUser.name}</strong> and their private learning data. Their public community posts and comments remain but are anonymized. This cannot be undone.
            </p>
            <label className="mt-5 block text-sm font-semibold text-immersive-text-primary" htmlFor="delete-account-email">
              Enter <span className="font-mono">{selectedUser.email}</span> to confirm
            </label>
            <input
              autoComplete="off"
              id="delete-account-email"
              onChange={(event) => setDeleteEmailConfirmation(event.target.value)}
              value={deleteEmailConfirmation}
              className="mt-2 w-full rounded-xl border border-immersive-border bg-immersive-bg px-3 py-3 text-sm text-immersive-text-primary"
            />
            <div className="mt-5 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => { setDeleteDialogOpen(false); setDeleteEmailConfirmation(''); }}
                disabled={saving}
                className="rounded-xl border border-immersive-border px-4 py-2.5 text-sm font-bold text-immersive-text-secondary disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => void deleteSelectedUser()}
                disabled={saving || deleteEmailConfirmation.trim().toLowerCase() !== selectedUser.email.toLowerCase()}
                className="rounded-xl bg-rose-600 px-4 py-2.5 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                {saving ? 'Deleting…' : 'Permanently delete'}
              </button>
            </div>
          </section>
        </div>
      )}

      <section>
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-immersive-text-primary">Available courses</h2>
            <p className="text-xs text-immersive-text-secondary">
              Showing {visibleCourses.length} of {courseTotal} course{courseTotal === 1 ? '' : 's'} available to this account
            </p>
          </div>
          <label className="relative block w-full sm:max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-immersive-text-secondary" />
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search courses" className="w-full rounded-xl border border-immersive-border bg-immersive-card py-2.5 pl-9 pr-3 text-sm text-immersive-text-primary" />
          </label>
        </div>
        {courseListLoading && visibleCourses.length === 0 ? (
          <div role="status" className="rounded-2xl border border-dashed border-immersive-border p-8 text-center text-sm text-immersive-text-secondary">
            Loading courses…
          </div>
        ) : visibleCourses.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-immersive-border p-8 text-center text-sm text-immersive-text-secondary">
            {search.trim() || courseFilter !== 'all'
              ? 'No courses match your search or filter.'
              : 'No course access has been assigned to your admin account yet.'}
          </div>
        ) : (
          <div className="grid gap-4 lg:grid-cols-2">
            {visibleCourses.map((course) => (
              <article key={course.id} className="rounded-2xl border border-immersive-border bg-immersive-card p-5 shadow-lg shadow-immersive-shadow">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-extrabold text-immersive-text-primary">{course.title}</h3>
                    <p className="mt-1 text-xs text-immersive-text-secondary">{course.provider || course.marketCategory || course.category} · {course.level || 'Self-paced'}</p>
                  </div>
                  <BookOpen className="h-5 w-5 shrink-0 text-immersive-primary" />
                </div>
                <p className="mt-3 line-clamp-2 text-sm text-immersive-text-secondary">{course.description || course.marketSubcategory || course.subcategory}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className={`rounded-full px-2.5 py-1 text-[11px] ${course.availability.screens ? 'bg-sky-500/10 text-sky-400' : 'bg-immersive-bg text-immersive-text-secondary/60'}`}>{course.availability.screens ? 'Screens in database' : 'No screens yet'}</span>
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
        {visibleCourses.length > 0 && courseHasMore && (
          <div className="mt-5 flex flex-col items-center gap-2">
            <p className="text-xs text-immersive-text-secondary">
              Showing {visibleCourses.length} of {courseTotal} matching courses
            </p>
            <button
              type="button"
              onClick={loadMoreCourses}
              disabled={courseListLoading || loadingMoreCourses}
              className="rounded-xl border border-immersive-border px-4 py-2.5 text-sm font-bold text-immersive-text-primary disabled:cursor-wait disabled:opacity-50"
            >
              {loadingMoreCourses ? 'Loading more courses…' : 'Show more courses'}
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
