import {useOutletContext} from 'react-router-dom';
import ExperienceTrackPage from '../components/ExperienceTrackPage';
import {useAuth} from '../context/AuthContext';
import {backendUserToPreferences} from '../types';

interface WizardContextValue {
  openWizard: () => void;
}

export default function Experience() {
  const {openWizard} = useOutletContext<WizardContextValue>();
  const {user} = useAuth();
  const userProfile = user ? backendUserToPreferences(user) : null;

  return (
    <ExperienceTrackPage
      userProfile={userProfile}
      onOpenWizard={openWizard}
    />
  );
}
