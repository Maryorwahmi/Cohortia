import {useState} from 'react';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import {
  LayoutDashboard,
  Map,
  Sparkles,
  Code,
  TrendingUp,
  User,
  Users,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import {CohortTrackId} from '../../types';
import {TRACK_CURRICULA} from '../../data/dashboardData';
import {useAuth} from '../../context/AuthContext';
import {backendUserToPreferences} from '../../types';
import Logo from '../Logo';

interface DashboardSidebarProps {
  isCollapsed?: boolean;
  onToggleCollapse?: (collapsed: boolean) => void;
}

export default function DashboardSidebar({ isCollapsed = false, onToggleCollapse }: DashboardSidebarProps) {
  const {user, logout} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [localCollapsed, setLocalCollapsed] = useState(false);
  
  // Use passed state if available, otherwise use local state
  const collapsed = onToggleCollapse !== undefined ? isCollapsed : localCollapsed;
  const setCollapsed = onToggleCollapse !== undefined ? onToggleCollapse : setLocalCollapsed;

  const userProfile = user ? backendUserToPreferences(user) : null;

  if (!userProfile) {
    return null;
  }

  const activePath = location.pathname;
  const activeTrackId = (userProfile.track || 'frontend') as CohortTrackId;
  const curriculum = TRACK_CURRICULA[activeTrackId] || TRACK_CURRICULA.frontend;

  const completedSteps = userProfile.completedSteps || [];
  const totalLessons = curriculum.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedCount = completedSteps.length;

  const tracksCompleted = completedCount >= totalLessons ? 1 : 0;
  const activeProjects = completedCount > 0 && completedCount < totalLessons ? 2 : 1;
  const mentorshipHours = (2.5 + completedCount * 0.5).toFixed(1);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getTrackTitle = () => {
    switch (activeTrackId) {
      case 'frontend':
        return 'Frontend Engineering Lab';
      case 'design':
        return 'UI/UX Product Design Lab';
      case 'product':
        return 'Product Management Lab';
      case 'analytics':
        return 'Data Analytics Lab';
      default:
        return 'Cohortia Experiential Lab';
    }
  };

  const getTrackName = (track: string) => {
    switch (track) {
      case 'frontend':
        return 'Frontend Eng.';
      case 'design':
        return 'UI/UX Design';
      case 'product':
        return 'Product Mgmt';
      case 'analytics':
        return 'Data Analytics';
      default:
        return track;
    }
  };

  const navItems = [
    {path: '/dashboard', label: 'Overview', icon: LayoutDashboard},
    {path: '/dashboard/learning', label: 'Learning Board', icon: Map},
    {path: '/dashboard/mentor', label: 'Cohortia Mentor', icon: Sparkles},
    {path: '/community', label: 'Community', icon: Users},
    {path: '/dashboard/projects', label: 'Projects', icon: Code},
    {path: '/dashboard/progress', label: 'Progress', icon: TrendingUp},
    {path: '/dashboard/profile', label: 'Profile', icon: User},
  ];

  return (
    <aside
      id="dashboard-sidebar"
      className={`hidden md:fixed md:inset-y-0 md:left-0 md:top-0 md:flex flex-col justify-between ${
        collapsed ? 'w-20' : 'w-64'
      } bg-immersive-card/65 backdrop-blur-xl border-r border-immersive-border/30 h-screen shrink-0 z-30 transition-all duration-300 shadow-2xl text-left`}
    >
      {/* Top Section */}
      <div className={`p-4 flex-1 min-h-0 flex flex-col overflow-y-auto scrollbar-none ${collapsed ? 'items-center' : ''}`}>
        {/* Logo and Collapse Toggle */}
        {!collapsed ? (
          <div className="flex items-center justify-between border-b border-immersive-border/20 pb-4 mb-6">
            <Link
              to="/"
              className="flex items-center space-x-2.5 cursor-pointer select-none"
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            >
              <div className="relative flex items-center justify-center">
                <Logo size={32} />
                <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-immersive-secondary rounded-full animate-ping" />
                <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-immersive-secondary rounded-full" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-sans font-extrabold text-base tracking-tight text-immersive-text-primary leading-none">
                  Cohortia
                </span>
                <span className="text-[7px] font-mono tracking-widest text-immersive-secondary uppercase font-bold mt-1">
                  CAREER PLATFORM
                </span>
              </div>
            </Link>
            <button
              onClick={() => setCollapsed(true)}
              className="p-1.5 rounded-lg bg-immersive-bg/55 border border-immersive-border/35 hover:border-immersive-secondary/50 hover:bg-immersive-card-hover transition-all duration-200 cursor-pointer text-immersive-text-secondary hover:text-immersive-text-primary hover:scale-105 active:scale-95"
              title="Collapse Sidebar"
            >
              <ChevronLeft className="w-4 h-4 text-immersive-text-primary" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center border-b border-immersive-border/20 pb-4 mb-6 space-y-4 w-full">
            <Link
              to="/"
              className="relative flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            >
              <Logo size={32} />
              <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-immersive-secondary rounded-full animate-ping" />
              <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-immersive-secondary rounded-full" />
            </Link>
            <button
              onClick={() => setCollapsed(false)}
              className="p-1.5 rounded-lg bg-immersive-bg/55 border border-immersive-border/35 hover:border-immersive-secondary/50 hover:bg-immersive-card-hover transition-all duration-200 cursor-pointer text-immersive-text-secondary hover:text-immersive-text-primary hover:scale-110 active:scale-95"
              title="Expand Sidebar"
            >
              <ChevronRight className="w-4 h-4 text-immersive-text-primary" />
            </button>
          </div>
        )}

        {/* Navigation links */}
        <nav className="space-y-1.5 mb-6 w-full">
          {!collapsed && (
            <p className="text-[9px] font-mono font-bold text-immersive-text-secondary/60 uppercase tracking-widest px-3 mb-2">
              NAVIGATION
            </p>
          )}
          {navItems.map((item) => {
            const isActive = activePath === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                className={`flex items-center ${
                  isCollapsed ? 'justify-center px-1 py-3' : 'space-x-3 px-3 py-2.5'
                } w-full rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer group hover:scale-[1.02] active:scale-95 ${
                  isActive
                    ? 'bg-immersive-primary/12 border border-immersive-primary/35 text-immersive-primary shadow-[0_2px_12px_rgba(255,75,62,0.06)]'
                    : 'border border-transparent text-immersive-text-secondary hover:text-immersive-text-primary hover:bg-immersive-card-hover'
                }`}
                title={isCollapsed ? item.label : undefined}
              >
                <Icon
                  className={`w-4 h-4 shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                    isActive ? 'text-immersive-primary' : 'text-immersive-text-secondary'
                  }`}
                />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Active Cohort Intel Widget */}
        {!collapsed && (
          <div className="mt-auto pt-4 border-t border-immersive-border/20">
            <div className="bg-immersive-bg/40 border border-immersive-border/40 rounded-2xl p-4 space-y-3.5 shadow-sm shadow-immersive-shadow">
              <div className="flex items-center space-x-2">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4B3E] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF4B3E]"></span>
                </span>
                <span className="text-[8px] font-mono font-bold text-immersive-text-secondary uppercase tracking-widest">
                  ACTIVE COHORT INTEL
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-black text-immersive-text-primary block leading-tight">
                  {getTrackTitle()}
                </span>
                <span className="text-[8px] font-mono text-immersive-text-secondary font-bold uppercase tracking-wider block">
                  {getTrackName(userProfile.track)}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-immersive-border/10">
                <div className="text-center">
                  <span className="text-[8px] font-mono text-immersive-text-secondary/70 block uppercase leading-none mb-1">
                    DONE
                  </span>
                  <span className="text-xs font-black text-immersive-text-primary">{tracksCompleted}</span>
                </div>
                <div className="text-center border-x border-immersive-border/15">
                  <span className="text-[8px] font-mono text-immersive-text-secondary/70 block uppercase leading-none mb-1">
                    LABS
                  </span>
                  <span className="text-xs font-black text-immersive-text-primary">{activeProjects}</span>
                </div>
                <div className="text-center">
                  <span className="text-[8px] font-mono text-immersive-text-secondary/70 block uppercase leading-none mb-1">
                    HOURS
                  </span>
                  <span className="text-xs font-black text-immersive-text-primary truncate">{mentorshipHours}h</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Section - User Profile details, Theme Toggle & Sign Out */}
      <div className={`p-4 border-t border-immersive-border/30 bg-immersive-bg/25 space-y-3 flex flex-col ${collapsed ? 'items-center' : ''}`}>
        {/* User Badge */}
        {!collapsed ? (
          <div className="flex items-center space-x-3 p-1.5 rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-immersive-primary flex items-center justify-center text-xs font-mono font-black text-immersive-text-primary shadow-md shrink-0">
              {userProfile.name.slice(0, 2).toUpperCase()}
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-xs font-black text-immersive-text-primary truncate leading-tight">
                {userProfile.name}
              </span>
              <span className="text-[9px] font-mono text-immersive-text-secondary font-semibold uppercase tracking-wider leading-none mt-1">
                {getTrackName(userProfile.track)}
              </span>
            </div>
          </div>
        ) : (
          <div
            className="w-9 h-9 rounded-lg bg-immersive-primary flex items-center justify-center text-xs font-mono font-black text-immersive-text-primary shadow-md shrink-0 cursor-pointer hover:scale-105 transition-transform"
            title={`${userProfile.name} (${getTrackName(userProfile.track)})`}
          >
            {userProfile.name.slice(0, 2).toUpperCase()}
          </div>
        )}

        {/* Action Buttons Row */}
        <div className={`flex ${collapsed ? 'flex-col w-full' : 'items-center'} justify-between gap-2 pt-1`}>

          {/* Sign Out inside Sidebar */}
          <button
            onClick={handleLogout}
            className="p-2 px-2.5 rounded-lg bg-immersive-card border border-immersive-border hover:border-rose-500/30 hover:bg-rose-500/5 text-immersive-text-secondary hover:text-rose-400 transition-all duration-200 flex items-center justify-center cursor-pointer h-9 shrink-0 hover:scale-105 active:scale-95"
            title="Sign Out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
