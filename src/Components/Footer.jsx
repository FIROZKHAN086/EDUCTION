import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook />, url: "https://facebook.com", color: "hover:text-blue-500" },
    { icon: <FaTwitter />, url: "https://twitter.com", color: "hover:text-sky-500" },
    { icon: <FaInstagram />, url: "https://instagram.com", color: "hover:text-pink-500" },
    { icon: <FaLinkedin />, url: "https://linkedin.com", color: "hover:text-blue-600" },
    { icon: <FaGithub />, url: "https://github.com", color: "hover:text-gray-100" }
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="inline-block">
              <h2 className="text-4xl font-bold text-white">
                Real <span className="text-yellow-300">Education</span>
              </h2>
            </Link>
            <p className="mt-6 text-gray-100 text-lg leading-relaxed">
              Transforming education through innovation and excellence. Join us in building a brighter future through quality learning experiences and comprehensive resources.
            </p>
            <div className="flex space-x-4 mt-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white text-xl ${social.color} bg-white/10 p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-white/20`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Courses', 'Notes', 'Results', 'Jobs'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/" 
                    className="text-gray-100 hover:text-yellow-300 transition-all duration-300 flex items-center group text-lg"
                  >
                    <span className="w-2 h-2 rounded-full bg-yellow-300 opacity-0 group-hover:opacity-100 mr-3 transition-all duration-300"/>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-yellow-300 text-xl mt-1" />
                <p className="text-gray-100">
                  123 Education Street<br />
                  Knowledge City, KN 12345
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-yellow-300 text-xl" />
                <a href="mailto:info@realeducation.com" className="text-gray-100 hover:text-yellow-300 transition duration-300">
                  info@realeducation.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-yellow-300 text-xl" />
                <a href="tel:(123)456-7890" className="text-gray-100 hover:text-yellow-300 transition duration-300">
                  (123) 456-7890
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-center text-gray-100">
            © {new Date().getFullYear()} Real Education. All rights reserved. Crafted with ❤️ for better education.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
