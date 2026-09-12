import {useOutletContext} from 'react-router-dom';
import Hero from '../components/Hero';
import LiveTicker from '../components/LiveTicker';
import ProductDemoSection from '../components/ProductDemoSection';
import CareersExplorer from '../components/CareersExplorer';
import FeatureCards from '../components/FeatureCards';
import SuccessStories from '../components/SuccessStories';
import AboutUs from '../components/AboutUs';
import {useAuth} from '../context/AuthContext';
import {backendUserToPreferences} from '../types';

interface WizardContextValue {
  openWizard: () => void;
}

export default function Home() {
  const {openWizard} = useOutletContext<WizardContextValue>();
  const {user} = useAuth();
  const userProfile = user ? backendUserToPreferences(user) : null;

  return (
    <>
      <Hero userProfile={userProfile} onOpenWizard={openWizard} />
      <LiveTicker />
      <ProductDemoSection />
      <CareersExplorer onOpenWizard={openWizard} />
      <FeatureCards userProfile={userProfile} onOpenWizard={openWizard} />
      <SuccessStories />
      <AboutUs />
    </>
  );
}
