import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {

    const links = [
        {
            "name":"Home",
            "link":"/"
        },
        {
            "name":"About Us",
            "link":"/about"
        },
        {
            "name":"Courses",
            "link":"/courses"
        },
        {
            "name":"Notes",
            "link":"/notes"
        },
        {
            "name":"Results",
            "link":"/results"
        },
        {
            "name":"Jobs",
            "link":"/jobs"
        }
    ]

  const socialLinks = [
    { icon: <FaFacebook />, url: "https://facebook.com", color: "hover:text-blue-400" },
    { icon: <FaTwitter />, url: "https://twitter.com", color: "hover:text-cyan-400" },
    { icon: <FaInstagram />, url: "https://instagram.com", color: "hover:text-pink-400" },
    { icon: <FaLinkedin />, url: "https://linkedin.com", color: "hover:text-blue-500" },
    { icon: <FaGithub />, url: "https://github.com", color: "hover:text-purple-400" }
  ];

  return (
    <footer className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] relative">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block group">
              <h2 className="text-5xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">Real</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400 ml-2">Education</span>
              </h2>
            </Link>
            <p className="mt-8 text-slate-300 text-lg leading-relaxed">
              Empowering minds, shaping futures. Join our community of learners and educators to discover a world of opportunities and excellence in education.
            </p>
            <div className="flex space-x-5 mt-10">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-slate-400 ${social.color} text-xl transition-all duration-300`}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 -mb-2"></span>
            </h3>
            <ul className="space-y-4">
              {links.map((item) => (
                <li key={item}>
                  <Link 
                    to={item.link} 
                    className="text-slate-400 hover:text-white transition-all duration-300 flex items-center group text-lg"
                  >
                    <FaArrowRight className="mr-3 text-sm opacity-0 group-hover:opacity-100 transform -translate-x-3 group-hover:translate-x-0 transition-all duration-300 text-emerald-400" />
                        {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 -mb-2"></span>
            </h3>
            <div className="space-y-6">
              <motion.div 
                className="group flex items-start space-x-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <FaMapMarkerAlt className="text-emerald-400 text-xl mt-1" />
                <p className="text-slate-400 group-hover:text-white transition-colors duration-300">
                  123 Education Street<br />
                  Knowledge City, KN 12345
                </p>
              </motion.div>
              <motion.div 
                className="group flex items-center space-x-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <FaEnvelope className="text-teal-400 text-xl" />
                <a href="mailto:info@realeducation.com" className="text-slate-400 group-hover:text-white transition-colors duration-300">
                  info@realeducation.com
                </a>
              </motion.div>
              <motion.div 
                className="group flex items-center space-x-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <FaPhone className="text-cyan-400 text-xl" />
                <a href="tel:(123)456-7890" className="text-slate-400 group-hover:text-white transition-colors duration-300">
                  (123) 456-7890
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-20 pt-8 border-t border-slate-800">
          <p className="text-center text-slate-400">
            &copy; {new Date().getFullYear()} Real Education. All rights reserved. 
            <span className="mx-2">|</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
              Crafted with ❤️ for better education
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
