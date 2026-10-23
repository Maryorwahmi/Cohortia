import {useOutletContext} from 'react-router-dom';
import Hero from '../components/Hero';
import ProductDemoSection from '../components/ProductDemoSection';
import CareerCategoriesCarousel from '../components/CareerCategoriesCarousel';
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
      <ProductDemoSection />
      <CareerCategoriesCarousel />
      <AboutUs />
    </>
  );
}
