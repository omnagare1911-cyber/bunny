import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';

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
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ease-out ${
      isScrolled
        ? 'bg-white shadow-md border-b border-gray-100'
        : 'bg-gradient-to-b from-slate-900 to-slate-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`relative transition-all duration-300 ${
              isScrolled ? 'bg-blue-50' : 'bg-white/10'
            } p-2 rounded-lg`}>
              <Shield className={`h-6 w-6 transition-colors duration-300 ${
                isScrolled ? 'text-blue-700' : 'text-blue-300'
              }`} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}>
                TRB
              </span>
              <span className={`text-xs font-medium transition-colors duration-300 ${
                isScrolled ? 'text-blue-600' : 'text-blue-300'
              }`}>
                Teacher Review Board
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {isHomePage ? (
              <>
                <NavButton
                  onClick={() => scrollToSection('hero')}
                  isScrolled={isScrolled}
                >
                  Home
                </NavButton>
                <NavButton
                  onClick={() => scrollToSection('how-it-works')}
                  isScrolled={isScrolled}
                >
                  How It Works
                </NavButton>
                <NavButton
                  onClick={() => scrollToSection('live-tests')}
                  isScrolled={isScrolled}
                >
                  Live Tests
                </NavButton>
              </>
            ) : (
              <>
                <NavLink to="/" isScrolled={isScrolled}>Home</NavLink>
                <NavLink to="/about" isScrolled={isScrolled}>About</NavLink>
                <NavLink to="/contact" isScrolled={isScrolled}>Contact</NavLink>
              </>
            )}
            <NavLink to="/login" isScrolled={isScrolled}>Dashboard</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                isScrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
                  : 'bg-white/15 text-white hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              Login
            </Link>
          </div>

          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-slate-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-4 py-3 space-y-1">
              {isHomePage ? (
                <>
                  <MobileNavButton
                    onClick={() => scrollToSection('hero')}
                  >
                    Home
                  </MobileNavButton>
                  <MobileNavButton
                    onClick={() => scrollToSection('how-it-works')}
                  >
                    How It Works
                  </MobileNavButton>
                  <MobileNavButton
                    onClick={() => scrollToSection('live-tests')}
                  >
                    Live Tests
                  </MobileNavButton>
                </>
              ) : (
                <>
                  <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>
                    Home
                  </MobileNavLink>
                  <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>
                    About
                  </MobileNavLink>
                  <MobileNavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Contact
                  </MobileNavLink>
                </>
              )}
              <MobileNavLink to="/login" onClick={() => setIsMenuOpen(false)}>
                Dashboard
              </MobileNavLink>
              <Link
                to="/login"
                className="w-full bg-blue-600 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-blue-700 mt-3 block text-center transition-colors"
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

function NavButton({
  onClick,
  isScrolled,
  children
}: {
  onClick: () => void;
  isScrolled: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
        isScrolled
          ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
          : 'text-white hover:text-blue-300 hover:bg-white/10'
      }`}
    >
      {children}
    </button>
  );
}

function NavLink({
  to,
  isScrolled,
  children
}: {
  to: string;
  isScrolled: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
        isScrolled
          ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
          : 'text-white hover:text-blue-300 hover:bg-white/10'
      }`}
    >
      {children}
    </Link>
  );
}

function MobileNavButton({
  onClick,
  children
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="block w-full text-left py-2.5 px-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
    >
      {children}
    </button>
  );
}

function MobileNavLink({
  to,
  onClick,
  children
}: {
  to: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="block w-full text-left py-2.5 px-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default Header;