import {lazy, Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import PublicLayout from './components/layout/PublicLayout';
import DashboardLayout from './components/layout/DashboardLayout';
import ProtectedRoute from './components/auth/ProtectedRoute';

import Home from './pages/Home';
import Careers from './pages/Careers';
import Experience from './pages/Experience';
import Community from './pages/Community';
import Contact from './pages/Contact';
import Auth from './pages/Auth';
import NewsletterAction from './pages/NewsletterAction';
import CourseDetails from './pages/CourseDetails';
import CourseAssessmentDetail from './pages/CourseAssessmentDetail';
import ChapterAssessmentDetail from './pages/ChapterAssessmentDetail';
import AutomationPage from './pages/AutomationPage';
import {CareerCategoryPage, CareerDirectoryPage, CareerRolePage, CareerSkillPage} from './pages/CareerDiscovery';

const Overview = lazy(() => import('./pages/dashboard/Overview'));
const LearningBoard = lazy(() => import('./pages/dashboard/LearningBoard'));
const HtmlBoardTest = lazy(() => import('./pages/dashboard/HtmlBoardTest'));
const Mentor = lazy(() => import('./pages/dashboard/Mentor'));
const Projects = lazy(() => import('./pages/dashboard/Projects'));
const Progress = lazy(() => import('./pages/dashboard/Progress'));
const Profile = lazy(() => import('./pages/dashboard/Profile'));
const AdminDashboard = lazy(() => import('./pages/dashboard/AdminDashboard'));

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen bg-immersive-bg" aria-label="Loading page" />}>
      <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/categories" element={<CareerDirectoryPage mode="categories" />} />
        <Route path="/careers/roles" element={<CareerDirectoryPage mode="roles" />} />
        <Route path="/careers/category/:categorySlug" element={<CareerCategoryPage />} />
        <Route path="/careers/category/:categorySlug/role/:roleSlug" element={<CareerRolePage />} />
        <Route path="/careers/skill/:skillSlug" element={<CareerSkillPage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newsletter/confirm" element={<NewsletterAction action="confirm" />} />
        <Route path="/newsletter/unsubscribe" element={<NewsletterAction action="unsubscribe" />} />
        <Route path="/careers/course/:courseId" element={<CourseDetails />} />
        <Route path="/assessments/:courseId" element={<CourseAssessmentDetail />} />
        <Route path="/assessments/:courseId/:module/:chapter" element={<ChapterAssessmentDetail />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="/automation" element={<AutomationPage />} />
      </Route>

      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Overview />} />
        <Route path="/dashboard/learning" element={<LearningBoard />} />
        <Route path="/dashboard/mentor" element={<Mentor />} />
        <Route path="/dashboard/projects" element={<Projects />} />
        <Route path="/dashboard/progress" element={<Progress />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Route>

      {/* Temporary public test route for generated HTML learning boards */}
      <Route path="/html-board-test" element={<HtmlBoardTest />} />
    </Routes>
    </Suspense>
    </>
  );
}
