import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.js';
import { hasRoadmapSelection } from '../../types';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, loading, user } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen bg-immersive-bg flex items-center justify-center">
        <div className="animate-pulse text-immersive-secondary font-mono text-sm">
          Verifying session...
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!user?.adminRole && !hasRoadmapSelection(user?.roadmapSelection)) {
    return <Navigate to="/experience?onboarding=required" replace />;
  }

  return <>{children}</>;
}
