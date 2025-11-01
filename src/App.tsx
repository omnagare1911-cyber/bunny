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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;