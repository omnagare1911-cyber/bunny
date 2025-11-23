import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import StudentDashboard from './pages/StudentDashboard';
import ComplaintSubmission from './pages/ComplaintSubmission';
import TeacherProfile from './pages/TeacherProfile';
import LiveTestPage from './pages/LiveTestPage';
import AdminDashboard from './pages/AdminDashboard';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import WhoWeArePage from './pages/WhoWeArePage';
import HowItWorksPage from './pages/HowItWorksPage';
import LiveTestsPage from './pages/LiveTestsPage';
import TeacherProfilesPage from './pages/TeacherProfilesPage';
import PlacementSupport from './pages/PlacementSupport';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<StudentDashboard />} />
            <Route path="/submit-complaint" element={<ComplaintSubmission />} />
            <Route path="/teacher/:id" element={<TeacherProfile />} />
            <Route path="/live-test/:id" element={<LiveTestPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/who-we-are" element={<WhoWeArePage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/live-tests" element={<LiveTestsPage />} />
            <Route path="/teacher-profiles" element={<TeacherProfilesPage />} />
            <Route path="/placement-support" element={<PlacementSupport />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;