import { Youtube, Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { navigation, contact } from '../lib/navigation';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/Educational_Logo__TRB__with_Teaching_Review_Board-removebg-preview.png"
                alt="TRB Logo"
                className="h-12 w-12 object-contain"
              />
              <span className="text-2xl font-bold">TRB</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Teacher Review Board is revolutionizing education by providing a transparent
              platform for student feedback and teacher evaluation. Your voice matters in
              creating better learning experiences.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-all duration-200 group ${social.color}`}
                  aria-label={social.name}
                >
                  {social.name === 'YouTube' ? (
                    <Youtube className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                  ) : (
                    <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-300 hover:text-blue-300 transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              {navigation.legal.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-300 hover:text-blue-300 transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="text-md font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <a href={`mailto:${contact.email}`} className="hover:text-blue-300 transition-colors duration-200">
                    {contact.email}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <a href={`tel:${contact.phone}`} className="hover:text-blue-300 transition-colors duration-200">
                    {contact.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>{contact.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Teacher Review Board. All rights reserved.
          </div>
          <div className="text-gray-400 text-sm">
            Made with ❤️ for better education
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;