import {useCallback, useEffect, useMemo, useRef, useState, type ChangeEvent, type FormEvent, type ReactNode} from 'react';
import {Award, Check, Clock, Compass, Download, ExternalLink, ImagePlus, LoaderCircle, LockKeyhole, Mail, Map as MapIcon, Pencil, Phone, ShieldCheck, Target, TrendingUp, User, X} from 'lucide-react';
import {PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip} from 'recharts';
import type {BackendUser, CatalogCourse, Lesson} from '../../services/api';
import {authApi, roadmapApi, userApi} from '../../services/api';
import {invalidateRequestCache} from '../../services/requestCache';
import type {UserPreferences} from '../../types';

interface ProfilePageProps {
  userProfile: UserPreferences;
  onUpdateProfile: (profile: UserPreferences) => Promise<void>;
  onResetProfile: () => void;
  loadError?: string | null;
  onProfileUpdated: (user?: BackendUser) => Promise<void>;
}

interface RoadmapCourse extends CatalogCourse {
  level: string;
  order: number;
  lessons: Lesson[];
}

interface CourseProgress {
  course: RoadmapCourse;
  completeLessons: number;
  totalLessons: number;
  percent: number;
  status: 'in_progress' | 'completed';
}

interface SkillGrowth {
  subject: string;
  initial: number;
  current: number;
}

const emptyForm = (profile: UserPreferences): UserPreferences => ({...profile});
const readableLevel = (value?: string) => value ? value.replace(/[-_]/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase()) : 'Not set';

function isCompletedProgress(record: Record<string, unknown>) {
  return record.status === 'completed' || Boolean(record.completedAt);
}

function getCourseTitle(course: RoadmapCourse) {
  return course.title || course.id;
}

export default function ProfilePage({
  userProfile,
  onUpdateProfile,
  onResetProfile,
  loadError,
  onProfileUpdated,
}: ProfilePageProps) {
  const [formData, setFormData] = useState<UserPreferences>(() => emptyForm(userProfile));
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [pageError, setPageError] = useState<string | null>(loadError || null);
  const [saved, setSaved] = useState(false);
  const [emailNotificationsEnabled, setEmailNotificationsEnabled] = useState(userProfile.emailNotificationsEnabled !== false);
  const [emailNotificationBusy, setEmailNotificationBusy] = useState(false);
  const [emailNotificationMessage, setEmailNotificationMessage] = useState('');
  const [courses, setCourses] = useState<RoadmapCourse[]>([]);
  const [progress, setProgress] = useState<Record<string, unknown>[]>([]);
  const [courseFinalAttempts, setCourseFinalAttempts] = useState<Record<string, unknown>[]>([]);
  const [dataError, setDataError] = useState<string | null>(null);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [activeTab, setActiveTab] = useState<'in_progress' | 'completed' | 'certificates'>('in_progress');
  const [imageUploading, setImageUploading] = useState(false);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const [twoFactorBusy, setTwoFactorBusy] = useState(false);
  const [twoFactorError, setTwoFactorError] = useState('');
  const [twoFactorSecret, setTwoFactorSecret] = useState('');
  const [twoFactorSetupToken, setTwoFactorSetupToken] = useState('');
  const [twoFactorCode, setTwoFactorCode] = useState('');
  const [twoFactorDisableToken, setTwoFactorDisableToken] = useState('');
  const [recoveryCodes, setRecoveryCodes] = useState<string[]>([]);
  const [disableTwoFactor, setDisableTwoFactor] = useState(false);

  const [exportDialogOpen, setExportDialogOpen] = useState(false);
  const [exportBusy, setExportBusy] = useState(false);
  const [exportError, setExportError] = useState('');
  const [exportPassword, setExportPassword] = useState('');
  const [exportCode, setExportCode] = useState('');
  const [googleProof, setGoogleProof] = useState('');
  const processingGoogleExchange = useRef(false);
  const [sessionActionBusy, setSessionActionBusy] = useState(false);
  const [sessionActionMessage, setSessionActionMessage] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordChangeCode, setPasswordChangeCode] = useState('');

  useEffect(() => {
    setFormData(emptyForm(userProfile));
    setEmailNotificationsEnabled(userProfile.emailNotificationsEnabled !== false);
    setPageError(loadError || null);
  }, [loadError, userProfile]);

  const loadLearningData = useCallback(async () => {
    setLoadingCourses(true);
    setDataError(null);
    try {
      const [roadmapResponse, progressResponse] = await Promise.all([
        roadmapApi.getActive(),
        userApi.getProgress(),
      ]);
      if (!roadmapResponse.success) {
        throw new Error(roadmapResponse.error || 'Your selected roadmap could not be loaded.');
      }
      setCourses(roadmapResponse.data?.courses || []);
      setProgress(progressResponse.data?.progress || []);
      setCourseFinalAttempts(progressResponse.data?.courseFinalAttempts || []);
    } catch (error) {
      setDataError(error instanceof Error ? error.message : 'Your course progress could not be loaded.');
    } finally {
      setLoadingCourses(false);
    }
  }, []);

  useEffect(() => {
    void loadLearningData();
  }, [loadLearningData]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const googleExchange = params.get('google_exchange');
    const error = params.get('google_export_error');
    if (!googleExchange && !error) return;
    setExportDialogOpen(true);
    setExportError(error || '');
    params.delete('google_exchange');
    params.delete('google_export_error');
    const query = params.toString();
    window.history.replaceState(window.history.state, '', `${window.location.pathname}${query ? `?${query}` : ''}`);
    if (googleExchange && !processingGoogleExchange.current) {
      processingGoogleExchange.current = true;
      authApi.exchangeGoogleCallback()
        .then((response) => {
          if (!response.data?.googleProof) throw new Error(response.error || 'Google account verification could not be completed.');
          setGoogleProof(response.data.googleProof);
        })
        .catch((exchangeError) => {
          setExportError(exchangeError instanceof Error ? exchangeError.message : 'Google account verification could not be completed.');
        });
    }
  }, []);

  const courseProgress = useMemo<CourseProgress[]>(() => courses.map((course) => {
    const courseRecords = progress.filter((record) =>
      record.courseId === course.id
      || course.lessons.some((lesson) => lesson.id === record.lessonId),
    );
    const completedIds = new Set(courseRecords.filter(isCompletedProgress).map((record) => record.lessonId));
    const completeLessons = course.lessons.filter((lesson) => completedIds.has(lesson.id)).length;
    const totalLessons = course.lessons.length;
    const percent = totalLessons ? Math.round((completeLessons / totalLessons) * 100) : 0;
    return {
      course,
      completeLessons,
      totalLessons,
      percent,
      status: totalLessons > 0 && completeLessons === totalLessons ? 'completed' : 'in_progress',
    };
  }), [courses, progress]);

  const selectedCourseProgress = useMemo(() => {
    if (activeTab === 'completed') return courseProgress.filter((item) => item.status === 'completed');
    if (activeTab === 'certificates') {
      const certifiedCourseIds = new Set(courseFinalAttempts.map((attempt) => attempt.courseId));
      return courseProgress.filter((item) =>
        item.status === 'completed'
        && Boolean(item.course.certification)
        && certifiedCourseIds.has(item.course.id),
      );
    }
    return courseProgress.filter((item) => item.status === 'in_progress');
  }, [activeTab, courseFinalAttempts, courseProgress]);

  const skillGrowth = useMemo<SkillGrowth[]>(() => {
    const activeCourse = courseProgress.find((item) => item.status === 'in_progress')
      || courseProgress.find((item) => item.completeLessons > 0);
    if (!activeCourse) return [];
    const modules = new Map<number, {title: string; completed: number; total: number}>();
    for (const lesson of activeCourse.course.lessons) {
      const moduleIndex = Number(lesson.moduleIndex) || 0;
      const module = modules.get(moduleIndex) || {
        title: lesson.moduleTitle || `Module ${moduleIndex + 1}`,
        completed: 0,
        total: 0,
      };
      module.total += 1;
      if (progress.some((record) => record.lessonId === lesson.id && isCompletedProgress(record))) module.completed += 1;
      modules.set(moduleIndex, module);
    }
    return [...modules.values()].slice(0, 8).map((module) => ({
      subject: module.title.length > 18 ? `${module.title.slice(0, 16)}…` : module.title,
      initial: 0,
      current: module.total ? Math.round((module.completed / module.total) * 100) : 0,
    }));
  }, [courseProgress, progress]);

  const achievements = useMemo(() => {
    const completedCourses = courseProgress.filter((item) => item.status === 'completed');
    const completedLessons = new Set(progress.filter(isCompletedProgress).map((record) => record.lessonId)).size;
    const items = [
      {title: 'First chapter complete', description: 'Complete a lesson in one of your selected courses.', unlocked: completedLessons >= 1},
      {title: 'Five lessons completed', description: 'Complete five lessons across your active roadmap.', unlocked: completedLessons >= 5},
      {title: 'Fifteen lessons completed', description: 'Complete fifteen lessons across your active roadmap.', unlocked: completedLessons >= 15},
      {title: 'First course completed', description: 'Complete every lesson in a selected roadmap course.', unlocked: completedCourses.length >= 1},
      {title: 'Roadmap builder', description: 'Complete three courses in your selected roadmap.', unlocked: completedCourses.length >= 3},
    ];
    return {items, completedLessons, completedCourses: completedCourses.length};
  }, [courseProgress, progress]);

  const handleSave = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSaving(true);
    setPageError(null);
    try {
      await onUpdateProfile(formData);
      setIsEditing(false);
      setSaved(true);
      window.setTimeout(() => setSaved(false), 3000);
    } catch (error) {
      setPageError(error instanceof Error ? error.message : 'Your profile could not be saved. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancelEdit = () => {
    setFormData(emptyForm(userProfile));
    setIsEditing(false);
    setPageError(null);
  };

  const handleEmailNotificationChange = async (enabled: boolean) => {
    setEmailNotificationBusy(true);
    setEmailNotificationMessage('');
    setPageError(null);
    try {
      const response = await userApi.updateProfile({emailNotificationsEnabled: enabled});
      if (!response.success || !response.data?.user) {
        throw new Error(response.error || 'Your email notification preference could not be saved.');
      }
      setEmailNotificationsEnabled(enabled);
      await onProfileUpdated(response.data.user);
      setEmailNotificationMessage(enabled ? 'Email notifications are on.' : 'Email notifications are off.');
    } catch (error) {
      setPageError(error instanceof Error ? error.message : 'Your email notification preference could not be saved.');
    } finally {
      setEmailNotificationBusy(false);
    }
  };

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    if (!['image/jpeg', 'image/png', 'image/gif', 'image/webp'].includes(file.type)) {
      setPageError('Choose a JPEG, PNG, GIF, or WebP image.');
      return;
    }
    if (file.size <= 0 || file.size > 800 * 1024) {
      setPageError('Profile images must be smaller than 800 KB.');
      return;
    }
    setImageUploading(true);
    setPageError(null);
    try {
      const signed = await userApi.createProfileImageUploadUrl(file.type);
      if (!signed.data?.uploadUrl || !signed.data.objectKey) throw new Error(signed.error || 'Could not start the profile image upload.');
      const uploadResponse = await fetch(signed.data.uploadUrl, {
        method: 'PUT',
        headers: {'Content-Type': file.type},
        body: file,
      });
      if (!uploadResponse.ok) throw new Error(`Image upload failed with status ${uploadResponse.status}.`);
      const completed = await userApi.completeProfileImageUpload(signed.data.objectKey);
      if (!completed.data?.user) throw new Error(completed.error || 'The uploaded image could not be saved to your profile.');
      await onProfileUpdated(completed.data.user);
    } catch (error) {
      setPageError(error instanceof Error ? error.message : 'The profile image could not be uploaded.');
    } finally {
      setImageUploading(false);
    }
  };

  const handleTwoFactorSetup = async () => {
    setTwoFactorBusy(true);
    setTwoFactorError('');
    try {
      const response = await userApi.setupTwoFactor();
      if (!response.data?.secret || !response.data.otpauthUrl || !response.data.challengeToken) throw new Error(response.error || 'Could not start authenticator setup.');
      setTwoFactorSecret(response.data.secret);
      setTwoFactorSetupToken(response.data.challengeToken);
      setTwoFactorCode('');
      setRecoveryCodes([]);
    } catch (error) {
      setTwoFactorError(error instanceof Error ? error.message : 'Could not start authenticator setup.');
    } finally {
      setTwoFactorBusy(false);
    }
  };

  const handleTwoFactorEnable = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTwoFactorBusy(true);
    setTwoFactorError('');
    try {
      const response = await userApi.enableTwoFactor(twoFactorCode.trim(), twoFactorSetupToken);
      if (!response.data?.recoveryCodes) throw new Error(response.error || 'The authenticator code was rejected.');
      setRecoveryCodes(response.data.recoveryCodes);
      setTwoFactorSecret('');
      setTwoFactorCode('');
      await onProfileUpdated();
    } catch (error) {
      setTwoFactorError(error instanceof Error ? error.message : 'Could not enable two-factor authentication.');
    } finally {
      setTwoFactorBusy(false);
    }
  };

  const handleTwoFactorDisable = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTwoFactorBusy(true);
    setTwoFactorError('');
    try {
      const response = await userApi.disableTwoFactor(twoFactorCode.trim(), twoFactorDisableToken);
      if (!response.success) throw new Error(response.error || 'Could not disable two-factor authentication.');
      setTwoFactorCode('');
      setDisableTwoFactor(false);
      await onProfileUpdated();
    } catch (error) {
      setTwoFactorError(error instanceof Error ? error.message : 'Could not disable two-factor authentication.');
    } finally {
      setTwoFactorBusy(false);
    }
  };

  const handleTwoFactorDisableSetup = async () => {
    setTwoFactorBusy(true);
    setTwoFactorError('');
    try {
      const response = await userApi.startTwoFactorDisable();
      if (!response.data?.challengeToken) throw new Error(response.error || 'Could not start two-factor verification.');
      setTwoFactorDisableToken(response.data.challengeToken);
      setTwoFactorCode('');
      setDisableTwoFactor(true);
    } catch (error) {
      setTwoFactorError(error instanceof Error ? error.message : 'Could not start two-factor verification.');
    } finally {
      setTwoFactorBusy(false);
    }
  };

  const beginGoogleReauthentication = async () => {
    setExportBusy(true);
    setExportError('');
    try {
      const response = await authApi.startGoogleExportReauthentication();
      if (!response.data?.url) throw new Error(response.error || 'Could not start Google verification.');
      window.location.assign(response.data.url);
    } catch (error) {
      setExportError(error instanceof Error ? error.message : 'Could not start Google verification.');
      setExportBusy(false);
    }
  };

  const handleExportVerify = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setExportBusy(true);
    setExportError('');
    try {
      const verified = await userApi.verifyCourseExport({
        ...(googleProof ? {googleProof} : {password: exportPassword}),
        ...(userProfile.twoFactorEnabled ? {code: exportCode.trim()} : {}),
      });
      if (!verified.data?.verificationToken) throw new Error(verified.error || 'Account verification failed.');
      const blob = await userApi.getCourseSyllabusExport(verified.data.verificationToken);
      if (!blob.size) throw new Error('The course details PDF was empty.');
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'cohortia-course-syllabus.json';
      link.click();
      URL.revokeObjectURL(url);
      setExportDialogOpen(false);
      setExportPassword('');
      setExportCode('');
      setGoogleProof('');
    } catch (error) {
      setExportError(error instanceof Error ? error.message : 'Your course details could not be downloaded.');
      setGoogleProof('');
    } finally {
      setExportBusy(false);
    }
  };

  const handleSignOutAllDevices = async () => {
    setSessionActionBusy(true);
    setSessionActionMessage('');
    try {
      await authApi.logoutAllDevices();
      invalidateRequestCache();
      window.location.assign('/login');
    } catch (error) {
      setSessionActionMessage(error instanceof Error ? error.message : 'Could not sign out other devices.');
      setSessionActionBusy(false);
    }
  };

  const handleChangePassword = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSessionActionBusy(true);
    setSessionActionMessage('');
    try {
      const response = await authApi.changePassword(currentPassword, newPassword, passwordChangeCode.trim());
      setSessionActionMessage(response.message || 'Password changed. Sign in again.');
      setCurrentPassword('');
      setNewPassword('');
      setPasswordChangeCode('');
      invalidateRequestCache();
      window.location.assign('/login');
    } catch (error) {
      setSessionActionMessage(error instanceof Error ? error.message : 'Could not change your password.');
      setSessionActionBusy(false);
    }
  };

  const roadmapSelected = Boolean(userProfile.roadmapSelection?.roadmapOrder?.length);
  const enrolledCourseCount = courses.length;

  return (
    <div className="min-h-screen bg-immersive-bg px-4 pb-12 pt-24 text-left sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <span className="mb-2 block text-xs font-mono font-bold tracking-widest text-[#FF4B3E]">STUDENT DATA & MANAGEMENT</span>
          <h1 className="text-3xl font-extrabold tracking-tight text-immersive-text-primary sm:text-4xl">Academic Profile</h1>
          <p className="mt-2 max-w-2xl text-sm text-immersive-text-secondary">
            Your profile, selected roadmap, course progress, and academic achievements.
          </p>
        </div>

        {(pageError || dataError) && (
          <div role="alert" className="mb-5 flex items-start justify-between gap-4 rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-sm text-rose-300">
            <span>{pageError || dataError}</span>
            {dataError && <button type="button" onClick={() => void loadLearningData()} className="shrink-0 font-bold underline">Retry</button>}
          </div>
        )}

        <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-12">
          <section className="space-y-5 xl:col-span-7">
            <div className="rounded-3xl border border-immersive-border bg-immersive-card p-5 shadow-xl shadow-immersive-shadow sm:p-7">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-immersive-border/50 pb-4">
                <div>
                  <h2 className="text-lg font-extrabold text-immersive-text-primary">Profile</h2>
                  <p className="mt-1 text-xs text-immersive-text-secondary">
                    {isEditing ? 'Update your personal details.' : 'Your personal and learning profile.'}
                  </p>
                </div>
                {!isEditing ? (
                  <button type="button" onClick={() => {setFormData(emptyForm(userProfile)); setIsEditing(true);}} className="inline-flex items-center gap-2 rounded-xl border border-immersive-border px-4 py-2.5 text-xs font-bold text-immersive-text-primary hover:border-immersive-secondary">
                    <Pencil className="h-4 w-4" /> Edit profile
                  </button>
                ) : (
                  <button type="button" onClick={handleCancelEdit} className="inline-flex items-center gap-2 rounded-xl border border-immersive-border px-4 py-2.5 text-xs font-bold text-immersive-text-secondary hover:text-immersive-text-primary">
                    <X className="h-4 w-4" /> Cancel
                  </button>
                )}
                {saved && <span role="status" className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400"><Check className="h-4 w-4" /> Saved</span>}
              </div>

              <form onSubmit={handleSave} className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-immersive-border bg-immersive-bg">
                    {userProfile.avatarUrl ? (
                      <img src={userProfile.avatarUrl} alt={`${userProfile.name}'s profile`} className="h-full w-full object-cover" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-immersive-text-secondary"><User className="h-8 w-8" /></div>
                    )}
                    {imageUploading && <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white"><LoaderCircle className="h-5 w-5 animate-spin" /></div>}
                  </div>
                  <div>
                    <p className="font-bold text-immersive-text-primary">Profile image</p>
                    <p className="mt-1 text-xs text-immersive-text-secondary">JPEG, PNG, GIF, or WebP · up to 800 KB</p>
                    {isEditing && (
                      <>
                        <input ref={imageInputRef} type="file" accept="image/jpeg,image/png,image/gif,image/webp" className="hidden" onChange={handleImageChange} />
                        <button type="button" disabled={imageUploading} onClick={() => imageInputRef.current?.click()} className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-immersive-secondary disabled:opacity-50">
                          <ImagePlus className="h-4 w-4" /> Change image
                        </button>
                      </>
                    )}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <ProfileField icon={<User className="h-4 w-4" />} label="Name" value={formData.name} editable={isEditing} onChange={(value) => setFormData({...formData, name: value})} required />
                  <ProfileField icon={<Mail className="h-4 w-4" />} label="Email" value={userProfile.email || ''} editable={false} />
                  <ProfileField icon={<Compass className="h-4 w-4" />} label="Location" value={formData.country || ''} editable={isEditing} onChange={(value) => setFormData({...formData, country: value})} placeholder="e.g. Remote, UK" />
                  <ProfileField icon={<ExternalLink className="h-4 w-4" />} label="LinkedIn URL" value={formData.portfolioLink || ''} editable={isEditing} onChange={(value) => setFormData({...formData, portfolioLink: value})} placeholder="https://linkedin.com/in/..." type="url" />
                  <ProfileField icon={<Phone className="h-4 w-4" />} label="Phone number" value={formData.phone || ''} editable={isEditing} onChange={(value) => setFormData({...formData, phone: value})} type="tel" />
                  <ProfileField icon={<Clock className="h-4 w-4" />} label="Availability" value={formData.availability || ''} editable={isEditing} onChange={(value) => setFormData({...formData, availability: value})} placeholder="e.g. Weekdays, 6–9 PM" />
                  <div className="sm:col-span-2">
                    <ProfileField icon={<Target className="h-4 w-4" />} label="Career goal" value={formData.careerGoal || ''} editable={isEditing} onChange={(value) => setFormData({...formData, careerGoal: value})} placeholder="Your career goal" />
                  </div>
                </div>

                {isEditing && (
                  <button type="submit" disabled={isSaving} className="flex w-full items-center justify-center gap-2 rounded-xl bg-immersive-secondary px-4 py-3 text-xs font-extrabold uppercase tracking-wider text-white disabled:cursor-wait disabled:opacity-60">
                    {isSaving && <LoaderCircle className="h-4 w-4 animate-spin" />}
                    {isSaving ? 'Saving profile…' : 'Save profile'}
                  </button>
                )}
              </form>

              <div className="mt-6 grid gap-3 border-t border-immersive-border/50 pt-5 sm:grid-cols-2">
                <ReadOnlyValue label="Experience level" value={readableLevel(userProfile.experienceLevel)} />
                <ReadOnlyValue label="Weekly commitment" value={userProfile.weeklyHours || 'Not set'} />
              </div>
            </div>

            <section className="rounded-3xl border border-immersive-border bg-immersive-card p-5 shadow-xl shadow-immersive-shadow sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-[#FF4B3E]" />
                  <div>
                    <h2 className="text-base font-extrabold text-immersive-text-primary">Email notifications</h2>
                    <p className="mt-1 max-w-xl text-xs leading-relaxed text-immersive-text-secondary">
                      Receive roadmap and course confirmations, learning milestones, and your in-app notifications by email. Verification, welcome, and essential account-security emails are always sent.
                    </p>
                  </div>
                </div>
                <label className="inline-flex cursor-pointer items-center gap-3 text-xs font-bold text-immersive-text-primary">
                  <span>{emailNotificationsEnabled ? 'On' : 'Off'}</span>
                  <input
                    type="checkbox"
                    role="switch"
                    aria-label="Email notifications"
                    checked={emailNotificationsEnabled}
                    disabled={emailNotificationBusy}
                    onChange={(event) => void handleEmailNotificationChange(event.target.checked)}
                    className="h-5 w-9 cursor-pointer accent-[#FF4B3E] disabled:cursor-wait"
                  />
                </label>
              </div>
              {emailNotificationMessage && <p role="status" className="mt-3 text-xs text-emerald-400">{emailNotificationMessage}</p>}
            </section>

            <section aria-labelledby="course-tabs-heading" className="rounded-3xl border border-immersive-border bg-immersive-card p-5 shadow-xl shadow-immersive-shadow sm:p-7">
              <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h2 id="course-tabs-heading" className="text-lg font-extrabold text-immersive-text-primary">My courses</h2>
                  <p className="mt-1 text-xs text-immersive-text-secondary">Courses from the roadmap you selected.</p>
                </div>
                <span className="text-xs font-semibold text-immersive-text-secondary">{enrolledCourseCount} roadmap course{enrolledCourseCount === 1 ? '' : 's'}</span>
              </div>
              <div role="tablist" aria-label="Course status" className="mb-5 flex gap-5 border-b border-immersive-border/60">
                {([
                  ['in_progress', 'In Progress'],
                  ['completed', 'Completed'],
                  ['certificates', 'Certificates'],
                ] as const).map(([tab, label]) => (
                  <button key={tab} id={`profile-tab-${tab}`} type="button" role="tab" aria-selected={activeTab === tab} aria-controls="profile-course-list" onClick={() => setActiveTab(tab)} className={`border-b-2 px-1 pb-3 text-sm font-semibold ${activeTab === tab ? 'border-[#FF4B3E] text-immersive-text-primary' : 'border-transparent text-immersive-text-secondary hover:text-immersive-text-primary'}`}>
                    {label}
                  </button>
                ))}
              </div>
              {loadingCourses ? (
                <div role="status" className="flex items-center gap-2 py-8 text-sm text-immersive-text-secondary"><LoaderCircle className="h-4 w-4 animate-spin" /> Loading your roadmap…</div>
              ) : !roadmapSelected ? (
                <p className="py-5 text-sm text-immersive-text-secondary">Choose a career roadmap to see its courses and track your progress here.</p>
              ) : selectedCourseProgress.length === 0 ? (
                <p className="py-5 text-sm text-immersive-text-secondary">
                  {activeTab === 'in_progress' ? 'No courses are currently in progress.' : activeTab === 'completed' ? 'No roadmap courses have been completed yet.' : 'Certificates will appear here after you complete a certified course and pass its final assessment.'}
                </p>
              ) : (
                <div id="profile-course-list" role="tabpanel" aria-labelledby={`profile-tab-${activeTab}`} className="space-y-3">
                  {selectedCourseProgress.map((item) => (
                    <article key={item.course.id} className="rounded-2xl border border-immersive-border/70 bg-immersive-bg/50 p-4">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <p className="font-bold text-immersive-text-primary">{getCourseTitle(item.course)}</p>
                          <p className="mt-1 text-xs text-immersive-text-secondary">{item.course.level ? readableLevel(item.course.level) : 'Selected roadmap course'}</p>
                        </div>
                        <span className="rounded-full border border-immersive-border px-2.5 py-1 text-[10px] font-bold uppercase text-immersive-text-secondary">
                          {activeTab === 'certificates' ? `${item.course.certification} · Final assessment passed` : item.status === 'completed' ? 'Completed' : `${item.percent}% complete`}
                        </span>
                      </div>
                      {item.status !== 'completed' && (
                        <div className="mt-3">
                          <div className="mb-1 flex justify-between text-[10px] text-immersive-text-secondary"><span>{item.completeLessons} of {item.totalLessons} chapters</span><span>{item.percent}%</span></div>
                          <div className="h-1.5 overflow-hidden rounded-full bg-immersive-border"><div className="h-full rounded-full bg-[#FF4B3E]" style={{width: `${item.percent}%`}} /></div>
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              )}
            </section>
          </section>

          <aside className="space-y-5 xl:col-span-5">
            <section className="rounded-3xl border border-immersive-border bg-immersive-card p-5 shadow-xl shadow-immersive-shadow sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-immersive-secondary">Selected roadmap</span>
                  <h2 className="mt-1 text-base font-extrabold text-immersive-text-primary">Enrolled Track</h2>
                </div>
                <MapIcon className="h-5 w-5 text-immersive-secondary" />
              </div>
              <p className="mt-3 text-sm font-semibold text-immersive-text-primary">
                {userProfile.roadmapSelection?.selectedCareer || 'No career roadmap selected'}
              </p>
              {userProfile.roadmapSelection?.careerGoal && <p className="mt-1 text-xs text-immersive-text-secondary">{userProfile.roadmapSelection.careerGoal}</p>}
              <ol className="mt-4 space-y-2">
                {courses.map((course) => (
                  <li key={course.id} className="flex items-center gap-2 text-xs text-immersive-text-secondary">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF4B3E]/10 text-[10px] font-bold text-[#FF4B3E]">{course.order}</span>
                    {getCourseTitle(course)}
                  </li>
                ))}
              </ol>
            </section>

            <section className="rounded-3xl border border-immersive-border bg-immersive-card p-5 shadow-xl shadow-immersive-shadow sm:p-6">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-[#FF4B3E]" />
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-immersive-secondary">Proficiency growth</span>
                  <h2 className="text-sm font-extrabold text-immersive-text-primary">Course chapter completion</h2>
                </div>
              </div>
              {skillGrowth.length ? (
                <>
                  <div className="mt-3 h-60 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={skillGrowth} outerRadius="72%">
                        <PolarGrid stroke="currentColor" className="text-immersive-border" />
                        <PolarAngleAxis dataKey="subject" tick={{fill: '#94a3b8', fontSize: 9, fontWeight: 600}} />
                        <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
                        <Tooltip formatter={(value) => [`${value}%`, 'Chapters completed']} />
                        <Radar name="Completion" dataKey="current" stroke="#FF4B3E" fill="#FF4B3E" fillOpacity={0.3} />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-center text-[10px] text-immersive-text-secondary">Progress is calculated from completed chapters in your roadmap courses.</p>
                </>
              ) : (
                <p className="mt-4 text-sm text-immersive-text-secondary">
                  {loadingCourses ? 'Loading your course progress…' : 'Complete chapters in a selected roadmap course to see your progress here.'}
                </p>
              )}
            </section>

            <section className="rounded-3xl border border-immersive-border bg-immersive-card p-5 shadow-xl shadow-immersive-shadow sm:p-6">
              <div className="mb-4 flex items-center gap-3">
                <Award className="h-5 w-5 text-[#FF4B3E]" />
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-immersive-secondary">Academic achievements</span>
                  <h2 className="text-sm font-extrabold text-immersive-text-primary">{achievements.completedLessons} chapter{achievements.completedLessons === 1 ? '' : 's'} · {achievements.completedCourses} course{achievements.completedCourses === 1 ? '' : 's'} completed</h2>
                </div>
              </div>
              <div className="space-y-2">
                {achievements.items.map((achievement) => (
                  <div key={achievement.title} className={`flex items-center gap-3 rounded-xl border p-3 ${achievement.unlocked ? 'border-[#FF4B3E]/20 bg-[#FF4B3E]/5' : 'border-immersive-border/50 opacity-60'}`}>
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${achievement.unlocked ? 'bg-[#FF4B3E]/10 text-[#FF4B3E]' : 'bg-immersive-bg text-immersive-text-secondary'}`}>
                      {achievement.unlocked ? <Check className="h-4 w-4" /> : <LockKeyhole className="h-3.5 w-3.5" />}
                    </span>
                    <div>
                      <p className="text-xs font-bold text-immersive-text-primary">{achievement.title}</p>
                      <p className="mt-0.5 text-[10px] text-immersive-text-secondary">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-immersive-border bg-immersive-card p-5 shadow-xl shadow-immersive-shadow sm:p-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-immersive-secondary" />
                <div>
                  <h2 className="text-sm font-extrabold text-immersive-text-primary">Two-factor authentication</h2>
                  <p className="mt-1 text-xs text-immersive-text-secondary">Use an authenticator app to protect your account.</p>
                </div>
              </div>
              {twoFactorError && <p role="alert" className="mt-3 text-xs text-rose-400">{twoFactorError}</p>}
              {userProfile.twoFactorEnabled ? (
                disableTwoFactor ? (
                  <form onSubmit={handleTwoFactorDisable} className="mt-4 space-y-3">
                    <input required value={twoFactorCode} onChange={(event) => setTwoFactorCode(event.target.value)} placeholder="Authenticator or recovery code" className="w-full rounded-xl border border-immersive-border bg-immersive-bg px-3 py-2.5 text-sm text-immersive-text-primary" />
                    <div className="flex gap-2">
                      <button disabled={twoFactorBusy} className="rounded-xl bg-rose-500 px-3 py-2 text-xs font-bold text-white disabled:opacity-60">{twoFactorBusy ? 'Checking…' : 'Confirm disable'}</button>
                      <button type="button" onClick={() => {setDisableTwoFactor(false); setTwoFactorDisableToken(''); setTwoFactorCode('');}} className="rounded-xl border border-immersive-border px-3 py-2 text-xs font-bold text-immersive-text-secondary">Cancel</button>
                    </div>
                  </form>
                ) : (
                  <button type="button" disabled={twoFactorBusy} onClick={() => void handleTwoFactorDisableSetup()} className="mt-4 rounded-xl border border-rose-500/30 px-3 py-2.5 text-xs font-bold text-rose-400 disabled:opacity-60">Disable two-factor authentication</button>
                )
              ) : recoveryCodes.length ? (
                <div className="mt-4 space-y-3">
                  <p className="text-xs font-bold text-amber-300">Save these recovery codes now. Each code works once.</p>
                  <div className="grid grid-cols-2 gap-2 rounded-xl border border-immersive-border bg-immersive-bg p-3 font-mono text-xs text-immersive-text-primary">{recoveryCodes.map((code) => <span key={code}>{code}</span>)}</div>
                  <button type="button" onClick={() => setRecoveryCodes([])} className="text-xs font-bold text-immersive-secondary">I have saved the codes</button>
                </div>
              ) : twoFactorSecret ? (
                <form onSubmit={handleTwoFactorEnable} className="mt-4 space-y-3">
                  <p className="text-xs text-immersive-text-secondary">In your authenticator app, add Cohortia using this setup key:</p>
                  <code className="block break-all rounded-xl border border-immersive-border bg-immersive-bg p-3 text-xs font-bold tracking-wider text-immersive-text-primary">{twoFactorSecret}</code>
                  <p className="text-[10px] text-immersive-text-secondary">Enter the key manually in an authenticator app, then enter its six-digit code below.</p>
                  <input required inputMode="numeric" autoComplete="one-time-code" maxLength={6} value={twoFactorCode} onChange={(event) => setTwoFactorCode(event.target.value.replace(/\D/g, ''))} placeholder="6-digit code" className="w-full rounded-xl border border-immersive-border bg-immersive-bg px-3 py-2.5 text-sm text-immersive-text-primary" />
                  <div className="flex gap-2">
                    <button disabled={twoFactorBusy || twoFactorCode.length !== 6} className="rounded-xl bg-immersive-secondary px-3 py-2 text-xs font-bold text-white disabled:opacity-60">{twoFactorBusy ? 'Checking…' : 'Enable two-factor'}</button>
                    <button type="button" onClick={() => {setTwoFactorSecret(''); setTwoFactorSetupToken(''); setTwoFactorCode('');}} className="rounded-xl border border-immersive-border px-3 py-2 text-xs font-bold text-immersive-text-secondary">Cancel</button>
                  </div>
                </form>
              ) : (
                <button type="button" disabled={twoFactorBusy} onClick={() => void handleTwoFactorSetup()} className="mt-4 rounded-xl border border-immersive-border px-3 py-2.5 text-xs font-bold text-immersive-text-primary disabled:opacity-60">
                  {twoFactorBusy ? 'Preparing setup…' : 'Set up authenticator app'}
                </button>
              )}
            </section>

            <section className="rounded-3xl border border-immersive-border bg-immersive-card p-5 shadow-xl shadow-immersive-shadow sm:p-6">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-immersive-secondary">Sessions and password</h2>
              <p className="mt-2 text-xs text-immersive-text-secondary">Access sessions expire quickly. Refresh sessions rotate and expire after 30 days.</p>
              {sessionActionMessage && <p role="status" className="mt-3 text-xs text-rose-400">{sessionActionMessage}</p>}
              <form onSubmit={handleChangePassword} className="mt-4 space-y-2">
                <input required type="password" autoComplete="current-password" value={currentPassword} onChange={(event) => setCurrentPassword(event.target.value)} placeholder="Current password" className="w-full rounded-xl border border-immersive-border bg-immersive-bg px-3 py-2.5 text-sm text-immersive-text-primary" />
                <input required type="password" autoComplete="new-password" minLength={12} maxLength={200} value={newPassword} onChange={(event) => setNewPassword(event.target.value)} placeholder="New password (12+ characters)" className="w-full rounded-xl border border-immersive-border bg-immersive-bg px-3 py-2.5 text-sm text-immersive-text-primary" />
                {userProfile.twoFactorEnabled && <input required value={passwordChangeCode} onChange={(event) => setPasswordChangeCode(event.target.value)} placeholder="Authenticator or recovery code" className="w-full rounded-xl border border-immersive-border bg-immersive-bg px-3 py-2.5 text-sm text-immersive-text-primary" />}
                <button disabled={sessionActionBusy || !currentPassword || newPassword.length < 12 || (Boolean(userProfile.twoFactorEnabled) && !passwordChangeCode.trim())} className="w-full rounded-xl border border-immersive-border px-3 py-2.5 text-xs font-bold text-immersive-text-primary disabled:opacity-60">
                  {sessionActionBusy ? 'Updating…' : 'Change password and sign out'}
                </button>
              </form>
              <button type="button" disabled={sessionActionBusy} onClick={() => void handleSignOutAllDevices()} className="mt-3 w-full rounded-xl border border-rose-500/30 bg-rose-500/5 px-3 py-2.5 text-xs font-bold text-rose-400 disabled:opacity-60">
                Sign out all devices
              </button>
            </section>

            <section className="rounded-3xl border border-rose-500/25 bg-immersive-card p-5 shadow-xl shadow-immersive-shadow sm:p-6">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-immersive-secondary">Account actions</h2>
              <div className="mt-4 space-y-3">
                <button type="button" disabled={!roadmapSelected || loadingCourses} onClick={() => {setExportError(''); setExportDialogOpen(true);}} className="flex w-full items-center justify-center gap-2 rounded-xl border border-immersive-border bg-immersive-bg px-4 py-3 text-xs font-bold text-immersive-text-primary hover:border-immersive-secondary disabled:cursor-not-allowed disabled:opacity-50">
                  <Download className="h-4 w-4 text-[#FF4B3E]" /> Download my course details (PDF)
                </button>
                {!roadmapSelected && <p className="text-xs text-immersive-text-secondary">Select a roadmap before downloading course details.</p>}
                <button type="button" onClick={() => {if (window.confirm('Are you sure you want to sign out of Cohortia?')) onResetProfile();}} className="flex w-full items-center justify-center gap-2 rounded-xl border border-rose-500/25 bg-rose-500/5 px-4 py-3 text-xs font-bold text-rose-400 hover:bg-rose-500/10">
                  <ShieldCheck className="h-4 w-4" /> Sign out
                </button>
              </div>
            </section>
          </aside>
        </div>
      </div>

      {exportDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" role="presentation" onMouseDown={(event) => {if (event.target === event.currentTarget && !exportBusy) setExportDialogOpen(false);}}>
          <section role="dialog" aria-modal="true" aria-labelledby="profile-export-title" className="w-full max-w-md rounded-2xl border border-immersive-border bg-immersive-card p-5 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id="profile-export-title" className="text-lg font-bold text-immersive-text-primary">Verify your account</h2>
                <p className="mt-1 text-sm text-immersive-text-secondary">Confirm it is you before downloading your course syllabus PDF.</p>
              </div>
              <button type="button" disabled={exportBusy} onClick={() => setExportDialogOpen(false)} aria-label="Close" className="text-immersive-text-secondary hover:text-immersive-text-primary"><X className="h-5 w-5" /></button>
            </div>
            {exportError && <p role="alert" className="mt-4 rounded-xl border border-rose-500/25 bg-rose-500/10 p-3 text-xs text-rose-300">{exportError}</p>}
            <form onSubmit={handleExportVerify} className="mt-5 space-y-4">
              {!googleProof && (
                <label className="block space-y-1.5">
                  <span className="text-xs font-semibold text-immersive-text-secondary">Account password</span>
                  <input type="password" autoComplete="current-password" value={exportPassword} onChange={(event) => setExportPassword(event.target.value)} placeholder="Enter your password" className="w-full rounded-xl border border-immersive-border bg-immersive-bg px-3 py-2.5 text-sm text-immersive-text-primary" />
                </label>
              )}
              {userProfile.twoFactorEnabled && (
                <label className="block space-y-1.5">
                  <span className="text-xs font-semibold text-immersive-text-secondary">Authenticator or recovery code</span>
                  <input required value={exportCode} onChange={(event) => setExportCode(event.target.value)} placeholder="Enter your security code" className="w-full rounded-xl border border-immersive-border bg-immersive-bg px-3 py-2.5 text-sm text-immersive-text-primary" />
                </label>
              )}
              {googleProof && <p className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3 text-xs text-emerald-300">Google account re-authentication successful. Continue to download.</p>}
              <button type="submit" disabled={exportBusy || (!googleProof && !exportPassword.trim()) || (Boolean(userProfile.twoFactorEnabled) && !exportCode.trim())} className="flex w-full items-center justify-center gap-2 rounded-xl bg-immersive-secondary px-4 py-3 text-sm font-bold text-white disabled:cursor-wait disabled:opacity-60">
                {exportBusy && <LoaderCircle className="h-4 w-4 animate-spin" />}
                {exportBusy ? 'Verifying and preparing PDF…' : 'Verify and download PDF'}
              </button>
              {!googleProof && (
                <button type="button" disabled={exportBusy} onClick={() => void beginGoogleReauthentication()} className="flex w-full items-center justify-center gap-2 rounded-xl border border-immersive-border px-4 py-3 text-xs font-bold text-immersive-text-primary disabled:opacity-60">
                  <ExternalLink className="h-4 w-4" /> Verify with Google
                </button>
              )}
            </form>
          </section>
        </div>
      )}
    </div>
  );
}

function ProfileField({
  icon,
  label,
  value,
  editable,
  onChange,
  placeholder,
  type = 'text',
  required = false,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  editable: boolean;
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block min-w-0 space-y-1.5">
      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-immersive-secondary">{label}</span>
      <span className={`flex items-center gap-3 rounded-xl border px-3 py-3 ${editable ? 'border-immersive-border bg-immersive-bg focus-within:border-immersive-secondary' : 'border-immersive-border/50 bg-immersive-bg/50'}`}>
        <span className="shrink-0 text-immersive-text-secondary">{icon}</span>
        {editable ? (
          <input required={required} type={type} value={value} placeholder={placeholder} onChange={(event) => onChange?.(event.target.value)} className="min-w-0 flex-1 bg-transparent text-sm text-immersive-text-primary outline-none placeholder:text-immersive-text-secondary/50" />
        ) : (
          <span className={`min-w-0 flex-1 break-words text-sm ${value ? 'text-immersive-text-primary' : 'text-immersive-text-secondary'}`}>{value || 'Not provided'}</span>
        )}
      </span>
    </label>
  );
}

function ReadOnlyValue({label, value}: {label: string; value: string}) {
  return (
    <div className="rounded-xl border border-immersive-border/50 bg-immersive-bg/50 px-4 py-3">
      <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-immersive-secondary">{label}</p>
      <p className="mt-1 text-sm font-semibold text-immersive-text-primary">{value}</p>
      <p className="mt-1 text-[10px] text-immersive-text-secondary">Set during onboarding; cannot be edited here.</p>
    </div>
  );
}
