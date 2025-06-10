import React from 'react';
import { Heart, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/7ccf9163-c1c4-4ba4-8d7a-970abccd8966.jpg" 
                alt="SourceFoods Logo" 
                className="h-10 w-10 object-contain bg-white rounded-full p-1"
              />
              <div>
                <h3 className="text-xl font-bold">SourceFoods</h3>
                <p className="text-sm text-gray-400">Your Next Food Source</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Connecting surplus food with communities in need through innovative technology 
              and passionate volunteers working to eliminate food waste.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Join Our Mission</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Resources</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 SourceFoods. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              Made with <Heart className="text-red-500 mx-1" size={16} /> by volunteers worldwide
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;