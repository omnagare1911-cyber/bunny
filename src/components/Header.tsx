import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className={`h-8 w-8 transition-colors duration-300 ${
              isScrolled ? 'text-blue-800' : 'text-white'
            }`} />
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-blue-800' : 'text-white'
            }`}>
              TRB
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className={`transition-colors duration-300 hover:text-amber-500 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className={`transition-colors duration-300 hover:text-amber-500 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  How It Works
                </button>
                <button 
                  onClick={() => scrollToSection('live-tests')}
                  className={`transition-colors duration-300 hover:text-amber-500 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  Live Tests
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/"
                  className={`transition-colors duration-300 hover:text-amber-500 ${
                    isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  Home
                </Link>
                <Link 
                  to="/about"
                  className={`transition-colors duration-300 hover:text-amber-500 ${
                    isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  About
                </Link>
                <Link 
                  to="/contact"
                  className={`transition-colors duration-300 hover:text-amber-500 ${
                    isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  Contact
                </Link>
              </>
            )}
            <Link 
              to="/login"
              className={`transition-colors duration-300 hover:text-amber-500 ${
                isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'
              }`}
            >
              Dashboard
            </Link>
            <Link 
              to="/login"
              className="bg-amber-500 text-white px-6 py-2 rounded-full font-medium hover:bg-amber-600 transform hover:scale-105 transition-all duration-200"
            >
              Login
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              {isHomePage ? (
                <>
                  <button 
                    onClick={() => scrollToSection('hero')}
                    className="block w-full text-left py-2 text-gray-700 hover:text-amber-500"
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => scrollToSection('how-it-works')}
                    className="block w-full text-left py-2 text-gray-700 hover:text-amber-500"
                  >
                    How It Works
                  </button>
                  <button 
                    onClick={() => scrollToSection('live-tests')}
                    className="block w-full text-left py-2 text-gray-700 hover:text-amber-500"
                  >
                    Live Tests
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/"
                    className="block w-full text-left py-2 text-gray-700 hover:text-amber-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/about"
                    className="block w-full text-left py-2 text-gray-700 hover:text-amber-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    to="/contact"
                    className="block w-full text-left py-2 text-gray-700 hover:text-amber-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </>
              )}
              <Link 
                to="/dashboard"
                className="block w-full text-left py-2 text-gray-700 hover:text-amber-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link 
                to="/login"
                className="w-full bg-amber-500 text-white px-6 py-2 rounded-full font-medium hover:bg-amber-600 mt-4 block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;