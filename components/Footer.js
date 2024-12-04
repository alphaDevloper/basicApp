// components/Footer.js
"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info with Social Icons */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Code Academy</h3>
            <p className="text-sm mb-6">
              Empowering the next generation of developers with cutting-edge
              coding education.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                className="hover:text-blue-500 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                className="hover:text-blue-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                className="hover:text-pink-500 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                className="hover:text-blue-600 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={20} />
              </Link>
              <Link
                href="https://github.com"
                className="hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/courses"
                  className="hover:text-white transition-colors duration-300"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>contact@codeacademy.com</li>
              <li>(123) 456-7890</li>
              <li>123 Coding Street, Tech Valley</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Code Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
