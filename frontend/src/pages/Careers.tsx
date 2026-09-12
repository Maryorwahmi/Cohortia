import {useNavigate, useOutletContext} from 'react-router-dom';
import CareersPage from '../components/CareersPage';

interface WizardContextValue {
  openWizard: () => void;
}

export default function Careers() {
  const {openWizard} = useOutletContext<WizardContextValue>();
  const navigate = useNavigate();
  const handleSelectCourse = (courseId: string) => {
    navigate(`/careers/course/${encodeURIComponent(courseId)}`);
  };

  return (
    <CareersPage
      onOpenWizard={openWizard}
      onSelectTrack={handleSelectCourse}
    />
  );
}
