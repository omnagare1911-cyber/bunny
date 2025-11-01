import React from 'react';
import { BookOpen, Youtube, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <BookOpen className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-bold">TRB</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Teacher Review Board is revolutionizing education by providing a transparent 
              platform for student feedback and teacher evaluation. Your voice matters in 
              creating better learning experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-red-600 p-3 rounded-full hover:bg-red-700 transition-colors duration-200 group"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a 
                href="#" 
                className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors duration-200 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a 
                href="#" 
                className="bg-blue-400 p-3 rounded-full hover:bg-blue-500 transition-colors duration-200 group"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">How It Works</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Live Tests</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Teacher Profiles</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Student Dashboard</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Complaint Guidelines</a></li>
            </ul>
            
            <div className="mt-8">
              <h4 className="text-md font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>support@trb.edu</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>New Delhi, India</span>
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