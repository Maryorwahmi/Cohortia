import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { authApi, BackendUser, AuthResponse } from '../services/api.js';

interface AuthState {
  user: BackendUser | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  signup: (userData: Record<string, unknown>) => Promise<{ success: boolean; message?: string; details?: Record<string, string[]> }>;
  completeExternalLogin: (token: string) => Promise<boolean>;
  logout: () => void;
  refreshUser: () => Promise<BackendUser | null>;
}

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<BackendUser | null>(null);
  const [loading, setLoading] = useState(true);

  // Check for stored token and validate on mount
  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem('cohortia_token');
      if (token) {
        try {
          const res = await authApi.getMe();
          if (res.success && res.data?.user) {
            setUser(res.data.user);
          } else {
            localStorage.removeItem('cohortia_token');
          }
        } catch {
          localStorage.removeItem('cohortia_token');
        }
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const res = await authApi.login({ email, password });
      if (res.success && res.data?.token) {
        localStorage.setItem('cohortia_token', res.data.token);
        setUser(res.data.user || null);
        return { success: true };
      }
      return { success: false, message: res.error || 'Login failed' };
    } catch (error) {
      const apiError = error as { data?: { message?: string }; message?: string };
      return {
        success: false,
        message: apiError.data?.message || apiError.message || 'Unable to reach the server. Please make sure the backend is running.',
      };
    }
  };

  const signup = async (userData: Record<string, unknown>) => {
    try {
      const res: AuthResponse = await authApi.signup(userData as unknown as Parameters<typeof authApi.signup>[0]);
      if (res.success && res.data?.token) {
        localStorage.setItem('cohortia_token', res.data.token);
        setUser(res.data.user || null);
        return { success: true };
      }
      return {
        success: false,
        message: res.error || 'Signup failed',
        details: res.details,
      };
    } catch (error) {
      const apiError = error as { data?: { message?: string; details?: Record<string, string[]> }; message?: string };
      return {
        success: false,
        message: apiError.data?.message || apiError.message || 'Unable to reach the server. Please make sure the backend is running on http://localhost:3000.',
        details: apiError.data?.details || undefined,
      };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('cohortia_token');
  };

  const completeExternalLogin = useCallback(async (token: string) => {
    localStorage.setItem('cohortia_token', token);
    const res = await authApi.getMe();
    if (res.success && res.data?.user) {
      setUser(res.data.user);
      return true;
    }
    localStorage.removeItem('cohortia_token');
    return false;
  }, []);

  const refreshUser = async () => {
    const token = localStorage.getItem('cohortia_token');
    if (!token) return null;

    try {
      const res = await authApi.getMe();
      if (res.success && res.data?.user) {
        setUser(res.data.user);
        return res.data.user;
      }
    } catch {
      // Keep the existing user state if refresh fails.
    }
    return null;
  };

  const value: AuthState = {
    user,
    isAuthenticated: !!user,
    loading,
    login,
    signup,
    completeExternalLogin,
    logout,
    refreshUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
