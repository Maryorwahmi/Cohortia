import {Outlet, useLocation, useNavigate} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import GlobalChatbot from '../GlobalChatbot';
import {useAuth} from '../../context/AuthContext';
import {backendUserToPreferences} from '../../types';

export default function PublicLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const {user} = useAuth();

  const userProfile = user ? backendUserToPreferences(user) : null;

  return (
    <div className={`flex min-h-screen bg-immersive-bg text-immersive-text-primary selection:bg-immersive-secondary selection:text-immersive-bg relative transition-colors duration-300 ${location.pathname === '/' ? 'homepage-theme' : ''}`}>
      <div className="flex-1 flex flex-col min-h-screen min-w-0 relative">
        <Header onOpenWizard={() => navigate('/signup')} />

        <main className="min-h-[calc(100vh-80px)] flex flex-col">
          <Outlet context={{openWizard: () => navigate('/signup')}} />
        </main>

        <Footer />

        <GlobalChatbot userProfile={userProfile} />

      </div>
    </div>
  );
}
