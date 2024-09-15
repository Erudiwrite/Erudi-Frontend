import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* About Section */}
          <div className="mb-8 md:mb-0 md:w-1/4">
            <h2 className="text-2xl font-bold mb-4 text-green-400">About Us</h2>
            <p className="text-sm leading-relaxed">
              We empower writers by providing a platform for sharing articles, exploring writing resources, and connecting with a vibrant community.
            </p>
          </div>

          {/* Useful Links */}
          <div className="mb-8 md:mb-0 md:w-1/4">
            <h2 className="text-2xl font-bold mb-4 text-green-400">Useful Links</h2>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-green-300 transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-green-300 transition">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-green-300 transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-green-300 transition">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="mb-8 md:mb-0 md:w-1/4">
            <h2 className="text-2xl font-bold mb-4 text-green-400">Follow Us</h2>
            <div className="flex space-x-4 text-2xl justify-center md:justify-start">
              <a href="https://www.facebook.com" className="text-gray-400 hover:text-white transition transform hover:scale-110" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://www.twitter.com" className="text-gray-400 hover:text-white transition transform hover:scale-110" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com" className="text-gray-400 hover:text-white transition transform hover:scale-110" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com" className="text-gray-400 hover:text-white transition transform hover:scale-110" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mb-8 md:mb-0 md:w-1/4">
            <h2 className="text-2xl font-bold mb-4 text-green-400">Newsletter</h2>
            <p className="text-sm mb-4">Sign up for our newsletter to receive the latest updates and writing tips.</p>
            <form>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-3 rounded border border-gray-600 bg-gray-700 text-white mb-2 transition-transform transform hover:scale-105"
              />
              <button type="submit" className="w-full bg-green-600 py-3 rounded text-white hover:bg-green-700 transition transform hover:scale-105">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-12 border-t border-gray-700 pt-4">
          <p className="text-sm">&copy; 2024 Erudi Write. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
