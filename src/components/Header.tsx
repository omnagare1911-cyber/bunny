import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navigation } from '../lib/navigation';

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
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/Educational_Logo__TRB__with_Teaching_Review_Board-removebg-preview.png"
              alt="TRB Logo"
              className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <div className="hidden sm:flex flex-col">
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
            <QuickLinksDropdown isScrolled={isScrolled} />
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

              <div className="py-2 border-t border-gray-200 my-2">
                <div className="px-3 py-2 text-xs font-semibold text-slate-500 uppercase">Resources</div>
                {navigation.quickLinks.map((link) => (
                  <MobileNavLink
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </MobileNavLink>
                ))}
              </div>

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

function QuickLinksDropdown({ isScrolled }: { isScrolled: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <button
        className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
          isScrolled
            ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
            : 'text-white hover:text-blue-300 hover:bg-white/10'
        }`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        Resources
      </button>

      {isOpen && (
        <div
          className={`absolute left-0 mt-0 w-48 rounded-lg shadow-lg border transition-all duration-200 ${
            isScrolled
              ? 'bg-white border-gray-200 shadow-md'
              : 'bg-slate-800 border-slate-700'
          }`}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="py-2">
            {navigation.quickLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block px-4 py-2.5 transition-colors ${
                  isScrolled
                    ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                    : 'text-blue-300 hover:text-blue-100 hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;