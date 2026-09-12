import {useState} from 'react';
import {Outlet} from 'react-router-dom';
import DashboardSidebar from '../dashboard/DashboardSidebar';
import Header from '../Header';

export default function DashboardLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-immersive-bg text-immersive-text-primary selection:bg-immersive-secondary selection:text-immersive-bg relative transition-colors duration-300">
      <DashboardSidebar isCollapsed={isSidebarCollapsed} onToggleCollapse={setIsSidebarCollapsed} />

      <div className={`flex min-h-screen min-w-0 flex-col relative transition-all duration-300 ${isSidebarCollapsed ? 'md:ml-20' : 'md:ml-64'}`}>
        <Header onOpenWizard={() => {}} />
        <main className="min-h-[calc(100vh-80px)] flex flex-col">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
