import React from 'react';
import { Home, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Home className="h-6 w-6 text-rentz-purple" />
              <span className="text-2xl font-bold text-gradient">Rentz</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Find your perfect PG accommodation with AI-powered recommendations. 
              We connect students and professionals with verified, quality PG homes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Phone className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MapPin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/ideal-pg" className="text-gray-300 hover:text-white transition-colors">Find Ideal PG</a></li>
              <li><a href="/list-your-pg" className="text-gray-300 hover:text-white transition-colors">List Your PG</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p>Email: info@rentz.com</p>
              <p>Phone: +91 8393000678</p>
              <p>Address: Lovely Professional University, Jalandhar, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Rentz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
