import {useLocation} from 'react-router-dom';
import AuthPages from '../components/AuthPages';

export default function Auth() {
  const location = useLocation();
  const path = location.pathname;
  const initialTab: 'signup' | 'login' = path === '/signup' ? 'signup' : 'login';

  return <AuthPages initialTab={initialTab} />;
}
