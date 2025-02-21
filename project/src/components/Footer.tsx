import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 mt-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Newsletter Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-4">Newsletter</h3>
          <p className="mb-4">Stay up to date with the latest news from ParkEase.</p>
          <div className="flex gap-4 max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-gray-800 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400">Find Parking</a></li>
              <li><a href="#" className="hover:text-indigo-400">List Your Space</a></li>
              <li><a href="#" className="hover:text-indigo-400">Business Solutions</a></li>
              <li><a href="#" className="hover:text-indigo-400">Mobile App</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-400">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-400">Press</a></li>
              <li><a href="#" className="hover:text-indigo-400">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400">Help Center</a></li>
              <li><a href="#" className="hover:text-indigo-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-indigo-400">Safety</a></li>
              <li><a href="#" className="hover:text-indigo-400">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400"><Facebook size={24} /></a>
              <a href="#" className="hover:text-indigo-400"><Instagram size={24} /></a>
              <a href="#" className="hover:text-indigo-400"><Twitter size={24} /></a>
              <a href="#" className="hover:text-indigo-400"><Linkedin size={24} /></a>
              <a href="#" className="hover:text-indigo-400"><Youtube size={24} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm mb-4 md:mb-0">
              © 2025 ParkEase. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-indigo-400">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-400">Terms of Service</a>
              <a href="#" className="hover:text-indigo-400">Cookie Policy</a>
              <a href="#" className="hover:text-indigo-400">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;