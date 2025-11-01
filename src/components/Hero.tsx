import React from 'react';
import { Link } from 'react-router-dom';
import { Play, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-900 to-gray-100 flex items-center"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 opacity-20">
          <svg viewBox="0 0 64 64" fill="none" className="text-white">
            <path d="M8 48h48V16H8v32zm40-24v16H16V24h32z" fill="currentColor"/>
            <path d="M20 28h24v4H20zM20 36h16v4H20z" fill="currentColor"/>
          </svg>
        </div>
        <div className="absolute top-32 right-20 w-20 h-20 opacity-15">
          <svg viewBox="0 0 64 64" fill="none" className="text-amber-400">
            <circle cx="32" cy="32" r="28" fill="currentColor"/>
            <path d="M24 40l8-8 8 8" stroke="white" strokeWidth="3" fill="none"/>
          </svg>
        </div>
        <div className="absolute bottom-32 left-20 w-12 h-12 opacity-25">
          <svg viewBox="0 0 64 64" fill="none" className="text-white">
            <path d="M16 8v48l16-8 16 8V8H16z" fill="currentColor"/>
          </svg>
        </div>
        <div className="absolute top-1/2 right-10 w-14 h-14 opacity-20">
          <svg viewBox="0 0 64 64" fill="none" className="text-amber-300">
            <rect x="8" y="16" width="48" height="32" rx="4" fill="currentColor"/>
            <circle cx="32" cy="32" r="8" fill="white"/>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in leading-tight">
            Your Voice, <span className="text-amber-400">Better Teaching.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in animation-delay-300 leading-relaxed">
            Transform education through student feedback. TRB evaluates teachers based on your complaints, 
            conducts live YouTube reviews, and publishes results to ensure quality education for everyone.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-600">
            <Link 
              to="/submit-complaint"
              className="bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-600 transform hover:scale-105 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <FileText className="h-5 w-5" />
              <span>Submit Complaint</span>
            </Link>
            
            <Link 
              to="/live-test/1"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-800 transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
            >
              <Play className="h-5 w-5" />
              <span>Watch Live Test</span>
            </Link>
          </div>

          <div className="mt-16 text-gray-300 animate-bounce">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;