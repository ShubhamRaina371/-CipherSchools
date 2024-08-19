import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-600 text-white pt-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Slogan */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-white">
              MERN-Quiz-App
            </h3>
            <p className="text-sm leading-relaxed">
              WHERE PASSION MEETS PERFECTION!
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">
              Quiz
            </h3>
            <Link
              to="/"
              className="block text-sm hover:text-gray-300 transition-colors"
            >
              All Quiz
            </Link>
            <Link
              to="/about"
              className="block text-sm hover:text-gray-300 transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block text-sm hover:text-gray-300 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">
              Follow
            </h3>
            <div className="flex flex-col space-y-2">
              <a
                href="https://www.instagram.com/shubhamraina9299/"
                className="flex items-center space-x-2 text-sm hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram text-xl"></i>
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/in/shubham-raina?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="flex items-center space-x-2 text-sm hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin text-xl"></i>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100017511647620&mibextid=ZbWKwL"
                className="flex items-center space-x-2 text-sm hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook text-xl"></i>
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">
              Contact
            </h3>
            <p className="text-sm flex items-center space-x-2">
              <i className="fas fa-home text-xl"></i>
              <span>Hajipur, Bihar</span>
            </p>
            <p className="text-sm flex items-center space-x-2">
              <i className="fas fa-envelope text-xl"></i>
              <span>shubhamraina371@gmail.com</span>
            </p>
            <p className="text-sm flex items-center space-x-2">
              <i className="fas fa-phone text-xl"></i>
              <span>+91 8434329299</span>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-xs text-gray-300">
            MERN Quiz App Designed and Developed by @Shubham Raina.
          </p>
        </div>
      </div>
    </footer>
  );
};
