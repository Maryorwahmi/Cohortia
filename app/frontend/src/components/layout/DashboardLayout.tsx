import {Suspense, useState} from 'react';
import {Outlet} from 'react-router-dom';
import DashboardSidebar from '../dashboard/DashboardSidebar';
import Header from '../Header';
import {DashboardDataProvider} from '../../context/DashboardDataContext';

export default function DashboardLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <DashboardDataProvider>
      <div className="dashboard-site-scale min-h-screen bg-immersive-bg text-immersive-text-primary selection:bg-immersive-secondary selection:text-immersive-bg relative transition-colors duration-300">
        <DashboardSidebar isCollapsed={isSidebarCollapsed} onToggleCollapse={setIsSidebarCollapsed} />

        <div className={`flex min-h-screen min-w-0 flex-col relative transition-all duration-300 ${isSidebarCollapsed ? 'md:ml-20' : 'md:ml-64'}`}>
          <Header />
          <main className="min-h-[calc(100vh-80px)] flex flex-col pt-20 md:pt-0">
            <Suspense fallback={<div className="min-h-[calc(100vh-80px)] animate-pulse bg-immersive-bg" aria-label="Loading dashboard page" />}>
              <Outlet />
            </Suspense>
          </main>
        </div>
      </div>
    </DashboardDataProvider>
  );
}
