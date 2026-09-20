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
import CourseDetails from './pages/CourseDetails';
import CourseAssessmentDetail from './pages/CourseAssessmentDetail';
import ChapterAssessmentDetail from './pages/ChapterAssessmentDetail';
import AutomationPage from './pages/AutomationPage';

import Overview from './pages/dashboard/Overview';
import LearningBoard from './pages/dashboard/LearningBoard';
import HtmlBoardTest from './pages/dashboard/HtmlBoardTest';
import Mentor from './pages/dashboard/Mentor';
import Projects from './pages/dashboard/Projects';
import Progress from './pages/dashboard/Progress';
import Profile from './pages/dashboard/Profile';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
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
      </Route>

      {/* Temporary public test route for generated HTML learning boards */}
      <Route path="/html-board-test" element={<HtmlBoardTest />} />
    </Routes>
    </>
  );
}
