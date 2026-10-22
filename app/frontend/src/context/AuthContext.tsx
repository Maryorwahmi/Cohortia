import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { authApi, BackendUser, AuthResponse } from '../services/api.js';
import { invalidateRequestCache } from '../services/requestCache';
import { prefetchDashboardAfterAuth } from '../services/dashboardPrefetch';
import { hasRoadmapSelection } from '../types';

interface AuthState {
  user: BackendUser | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string; adminRole?: BackendUser['adminRole']; mfaRequired?: boolean; challengeToken?: string }>;
  completeTwoFactorLogin: (challengeToken: string, code: string) => Promise<{success: boolean; message?: string; adminRole?: BackendUser['adminRole']; requiresRoadmap?: boolean}>;
  signup: (userData: Record<string, unknown>) => Promise<{ success: boolean; message?: string; details?: Record<string, string[]>; verificationRequired?: boolean; email?: string }>;
  completeExternalLogin: () => Promise<BackendUser | null>;
  logout: () => void;
  refreshUser: () => Promise<BackendUser | null>;
}

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<BackendUser | null>(null);
  const [loading, setLoading] = useState(true);

  // Check the server-managed session cookie on mount.
  useEffect(() => {
    const initAuth = async () => {
      localStorage.removeItem('cohortia_token');
      try {
        const res = await authApi.getMe();
        if (res.success && res.data?.user) {
          setUser(res.data.user);
          prefetchDashboardAfterAuth(res.data.user);
        }
      } catch {
        // No valid session cookie is an unauthenticated state.
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const res = await authApi.login({ email, password });
      if (res.success && res.data?.twoFactorRequired && res.data.challengeToken) {
        return {
          success: false,
          mfaRequired: true,
          challengeToken: res.data.challengeToken,
          message: 'Enter your authenticator or recovery code to finish signing in.',
        };
      }
      if (res.success && res.data?.user) {
        invalidateRequestCache();
        setUser(res.data.user || null);
        prefetchDashboardAfterAuth(res.data.user || null);
        return { success: true, adminRole: res.data.user?.adminRole };
      }
      return { success: false, message: res.error || 'Login failed' };
    } catch (error) {
      const apiError = error as { data?: { message?: string; error?: string }; message?: string };
      return {
        success: false,
        message: apiError.data?.message || apiError.data?.error || apiError.message || 'Unable to reach the server. Please make sure the backend is running.',
      };
    }
  };

  const completeTwoFactorLogin = useCallback(async (challengeToken: string, code: string) => {
    try {
      const res = await authApi.completeTwoFactorLogin(challengeToken, code);
      if (res.success && res.data?.user) {
        invalidateRequestCache();
        setUser(res.data.user || null);
        prefetchDashboardAfterAuth(res.data.user || null);
        return {
          success: true,
          adminRole: res.data.user?.adminRole,
          requiresRoadmap: !res.data.user?.adminRole && !hasRoadmapSelection(res.data.user?.roadmapSelection),
        };
      }
      return {success: false, message: res.error || 'Authenticator verification failed.'};
    } catch (error) {
      const apiError = error as {data?: {error?: string}; message?: string};
      return {success: false, message: apiError.data?.error || apiError.message || 'Authenticator verification failed.'};
    }
  }, []);

  const signup = async (userData: Record<string, unknown>) => {
    try {
      const res: AuthResponse = await authApi.signup(userData as unknown as Parameters<typeof authApi.signup>[0]);
      if (res.success && res.data?.verificationRequired) {
        return {
          success: true,
          message: res.message,
          verificationRequired: true,
          email: res.data.email,
        };
      }
      if (res.success && res.data?.user) {
        invalidateRequestCache();
        setUser(res.data.user || null);
        prefetchDashboardAfterAuth(res.data.user || null);
        return { success: true };
      }
      return {
        success: false,
        message: res.error || 'Signup failed',
        details: res.details,
      };
    } catch (error) {
      const apiError = error as {
        data?: {
          message?: string;
          error?: string;
          details?: Record<string, string[]>;
          data?: {verificationRequired?: boolean; email?: string};
        };
        message?: string;
      };
      return {
        success: false,
        message: apiError.data?.message || apiError.data?.error || apiError.message || 'Unable to reach the server. Please make sure the backend is running on http://localhost:3000.',
        details: apiError.data?.details || undefined,
        verificationRequired: apiError.data?.data?.verificationRequired,
        email: apiError.data?.data?.email,
      };
    }
  };

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('cohortia_token');
    invalidateRequestCache();
    void authApi.logout().catch((error) => {
      console.error('Unable to clear the server session cookie:', error);
    });
  }, []);

  const completeExternalLogin = useCallback(async (): Promise<BackendUser | null> => {
    invalidateRequestCache();
    const res = await authApi.getMe();
    if (res.success && res.data?.user) {
      setUser(res.data.user);
      prefetchDashboardAfterAuth(res.data.user);
      return res.data.user;
    }
    return null;
  }, []);

  const refreshUser = async () => {
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
    completeTwoFactorLogin,
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
