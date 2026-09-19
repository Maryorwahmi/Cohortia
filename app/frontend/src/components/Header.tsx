import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { User, Menu, X, Sparkles, ChevronDown, LogOut, BookOpen, Trophy, Activity } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { backendUserToPreferences } from "../types";
import Logo from "./Logo";

interface HeaderProps {
  onOpenWizard: () => void;
}

export default function Header({ onOpenWizard }: HeaderProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const userProfile = user ? backendUserToPreferences(user) : null;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const activePath = location.pathname;
  const isDashboard = activePath.startsWith("/dashboard");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isUserDropdownOpen) return;
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("#user-profile-dropdown-container")) {
        setIsUserDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isUserDropdownOpen]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const getTrackName = (track: string) => {
    switch (track) {
      case "frontend": return "Frontend Eng.";
      case "design": return "UI/UX Design";
      case "product": return "Product Mgmt";
      case "analytics": return "Data Analytics";
      default: return track.substring(0, 12);
    }
  };

  const dashboardLinks = [
    { path: "/dashboard", label: "Overview" },
    { path: "/dashboard/learning", label: "Learning Board" },
    { path: "/dashboard/mentor", label: "Cohortia Mentor" },
    { path: "/dashboard/community", label: "Community" },
    { path: "/dashboard/projects", label: "Projects" },
    { path: "/dashboard/progress", label: "Progress" },
    { path: "/dashboard/profile", label: "Profile" }
  ];

  const publicLinks = [
    { path: "/", label: "Home" },
    { path: "/careers", label: "Careers" },
    { path: "/experience", label: "Experience Track" },
    { path: "/community", label: "Community" },
    { path: "/contact", label: "Contact" }
  ];

  const navLinks = userProfile ? dashboardLinks : publicLinks;

  const isActive = (path: string) => activePath === path;

  return (
    <header
      id="header-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDashboard ? "md:hidden" : ""
      } ${
        isScrolled
          ? "bg-immersive-bg/95 backdrop-blur-md border-b border-immersive-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={`flex items-center space-x-2.5 cursor-pointer select-none ${isDashboard ? "md:hidden" : ""}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative flex items-center justify-center">
              <Logo size={42} />
              <div className="absolute top-1 right-1 w-2 h-2 bg-immersive-secondary rounded-full animate-ping" />
              <div className="absolute top-1 right-1 w-2 h-2 bg-immersive-secondary rounded-full" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-sans font-extrabold text-2xl tracking-tight text-immersive-text-primary">
                Cohortia
              </span>
              <span className="text-[9px] font-mono tracking-widest text-immersive-secondary uppercase font-bold">
                CAREER PLATFORM
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-7">
            {!isDashboard && navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`font-sans text-sm font-semibold transition-all relative py-1.5 cursor-pointer ${
                  isActive(link.path)
                    ? "text-immersive-primary"
                    : "text-immersive-text-secondary hover:text-immersive-text-primary"
                }`}
              >
                <span>{link.label}</span>
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-immersive-primary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Action buttons / Dynamic Profile */}
          <div className="hidden lg:flex items-center space-x-4">
            {userProfile ? (
              <div id="user-profile-dropdown-container" className={`relative flex items-center space-x-2 ${isDashboard ? "md:hidden" : ""}`}>
                {/* User Dropdown Trigger Button */}
                <button
                  onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                  className="flex items-center space-x-3 bg-immersive-card hover:bg-immersive-card-hover border border-immersive-border hover:border-immersive-secondary/30 rounded-2xl px-3 py-1.5 shadow-md shadow-immersive-shadow h-11 transition-all duration-300 cursor-pointer text-left select-none"
                >
                  <div className="w-8 h-8 rounded-xl bg-immersive-primary flex items-center justify-center text-xs font-mono font-black text-immersive-text-primary shadow-lg shadow-immersive-shadow shadow-immersive-primary/10 relative overflow-hidden shrink-0">
                    <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity" />
                    <span className="relative z-10">{userProfile.name.slice(0, 2).toUpperCase()}</span>
                  </div>

                  <div className="flex flex-col pr-1">
                    <div className="flex items-center space-x-1.5">
                      <span className="text-xs font-black text-immersive-text-primary leading-none">
                        {userProfile.name}
                      </span>
                      <ChevronDown className={`w-3.5 h-3.5 text-immersive-text-secondary transition-transform duration-300 ${isUserDropdownOpen ? 'rotate-180 text-immersive-primary' : ''}`} />
                    </div>
                    <span className="text-[9px] font-mono text-immersive-secondary font-bold uppercase tracking-wider mt-1 leading-none">
                      {getTrackName(userProfile.track)}
                    </span>
                  </div>
                </button>

                {/* Separate Logout Icon Button */}
                <button
                  onClick={handleLogout}
                  className="p-2.5 rounded-2xl bg-immersive-card border border-immersive-border hover:border-rose-500/30 hover:bg-rose-500/5 text-immersive-text-secondary hover:text-rose-400 transition-all duration-300 cursor-pointer h-11 w-11 flex items-center justify-center shrink-0 shadow-md shadow-immersive-shadow"
                  title="Logout Session"
                >
                  <LogOut className="w-4 h-4" />
                </button>

                {/* Dropdown Menu */}
                {isUserDropdownOpen && (
                  <div className="absolute right-0 top-13 mt-1.5 w-60 rounded-2xl bg-immersive-card/98 border border-immersive-border shadow-xl shadow-immersive-shadow backdrop-blur-md z-50 p-2.5 animate-in fade-in slide-in-from-top-3 duration-200 text-left flex flex-col space-y-1">
                    <div className="px-3 py-2 border-b border-immersive-border/40 mb-1">
                      <p className="text-[10px] font-mono font-bold text-immersive-text-secondary uppercase">COHORT PROFILE</p>
                      <p className="text-xs font-black text-immersive-text-primary truncate">{userProfile.name}</p>
                    </div>

                    <button
                      onClick={() => {
                        navigate("/dashboard");
                        setIsUserDropdownOpen(false);
                      }}
                      className="flex items-center space-x-3 w-full p-2.5 rounded-xl hover:bg-immersive-bg/50 hover:text-immersive-secondary text-immersive-text-secondary font-bold text-xs transition-colors text-left cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4 text-immersive-secondary" />
                      <span>Dashboard Overview</span>
                    </button>

                    <button
                      onClick={() => {
                        navigate("/dashboard/learning");
                        setIsUserDropdownOpen(false);
                      }}
                      className="flex items-center space-x-3 w-full p-2.5 rounded-xl hover:bg-immersive-bg/50 hover:text-immersive-secondary text-immersive-text-secondary font-bold text-xs transition-colors text-left cursor-pointer"
                    >
                      <Activity className="w-4 h-4 text-immersive-primary" />
                      <span>Interactive Roadmap</span>
                    </button>

                    <button
                      onClick={() => {
                        navigate("/dashboard/projects");
                        setIsUserDropdownOpen(false);
                      }}
                      className="flex items-center space-x-3 w-full p-2.5 rounded-xl hover:bg-immersive-bg/50 hover:text-immersive-secondary text-immersive-text-secondary font-bold text-xs transition-colors text-left cursor-pointer"
                    >
                      <Trophy className="w-4 h-4 text-amber-500" />
                      <span>My Capstone Projects</span>
                    </button>

                    <button
                      onClick={() => {
                        navigate("/dashboard/mentor");
                        setIsUserDropdownOpen(false);
                      }}
                      className="flex items-center space-x-3 w-full p-2.5 rounded-xl hover:bg-immersive-bg/50 hover:text-immersive-secondary text-immersive-text-secondary font-bold text-xs transition-colors text-left cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      <span>Consult AI Mentor</span>
                    </button>

                    <button
                      onClick={() => {
                        navigate("/dashboard/profile");
                        setIsUserDropdownOpen(false);
                      }}
                      className="flex items-center space-x-3 w-full p-2.5 rounded-xl hover:bg-immersive-bg/50 hover:text-immersive-secondary text-immersive-text-secondary font-bold text-xs transition-colors text-left cursor-pointer"
                    >
                      <User className="w-4 h-4 text-emerald-400" />
                      <span>Account Settings</span>
                    </button>

                    <div className="border-t border-immersive-border/40 my-1 pt-1">
                      <button
                        onClick={() => {
                          handleLogout();
                          setIsUserDropdownOpen(false);
                        }}
                        className="flex items-center space-x-3 w-full p-2.5 rounded-xl hover:bg-rose-500/10 text-rose-400 hover:text-rose-300 font-bold text-xs transition-colors text-left cursor-pointer"
                      >
                        <LogOut className="w-4 h-4 text-rose-400" />
                        <span>Sign Out of Cohortia</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3.5 h-10">
                <Link
                  to="/login"
                  className={`font-sans text-sm font-bold transition-all cursor-pointer ${
                    isActive("/login")
                      ? "text-immersive-primary"
                      : "text-immersive-text-secondary hover:text-immersive-text-primary"
                  }`}
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="px-5 py-2.5 rounded-xl text-sm font-bold text-immersive-text-primary bg-immersive-primary hover:brightness-110 shadow-lg shadow-immersive-shadow shadow-immersive-primary/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Row */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-immersive-text-secondary hover:text-immersive-text-primary rounded-lg bg-immersive-card border border-immersive-border hover:bg-immersive-card-hover cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-immersive-bg/98 border-b border-immersive-border px-4 py-6 space-y-4 animate-in fade-in slide-in-from-top duration-200 shadow-xl shadow-immersive-shadow">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-base font-semibold py-1.5 text-left border-l-2 pl-3 transition-colors ${
                  isActive(link.path)
                    ? "border-immersive-primary text-immersive-primary bg-immersive-primary/5"
                    : "border-transparent text-immersive-text-secondary hover:text-immersive-text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-immersive-border/20 flex flex-col space-y-3">
            {userProfile ? (
              <div className="flex items-center justify-between bg-immersive-card border border-immersive-border rounded-xl p-3 w-full">
                <div className="flex items-center space-x-3 text-left">
                  <div className="w-9 h-9 rounded-xl bg-immersive-primary flex items-center justify-center text-xs font-mono font-black text-immersive-text-primary shadow-md shadow-immersive-shadow">
                    {userProfile.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-extrabold text-immersive-text-primary">
                      {userProfile.name}
                    </span>
                    <span className="text-[10px] font-mono text-immersive-secondary font-bold uppercase mt-0.5 leading-none">
                      {getTrackName(userProfile.track)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="p-2 rounded-xl bg-rose-500/10 text-rose-400 hover:text-rose-300 transition-colors flex items-center justify-center cursor-pointer"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3.5">
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-xl text-sm font-bold text-immersive-text-primary bg-immersive-card border border-immersive-border cursor-pointer"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-xl text-sm font-bold text-immersive-text-primary bg-immersive-primary cursor-pointer"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
