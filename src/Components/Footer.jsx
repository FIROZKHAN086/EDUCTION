import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaHeart } from 'react-icons/fa';
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
            "link":"/result"
        },
        {
            "name":"Jobs",
            "link":"/jobs"
        },
        {
            "name":"Terms & Conditions",
            "link":"/terms"
        },
        {
            "name":"Privacy Policy",
            "link":"/privacy"
        }
    ]

  const socialLinks = [
    { icon: <FaFacebook />, url: "https://facebook.com", color: "hover:text-blue-400", bgColor: "bg-blue-400/60" },
    { icon: <FaTwitter />, url: "https://twitter.com", color: "hover:text-sky-400", bgColor: "bg-sky-400/60" },
    { icon: <FaInstagram />, url: "https://instagram.com", color: "hover:text-pink-400", bgColor: "bg-pink-400/60" },
    { icon: <FaLinkedin />, url: "https://linkedin.com", color: "hover:text-blue-500", bgColor: "bg-blue-500/60" },
  ];

  return (
    <footer className="font-montserrat bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Glowing Border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-8">
            <Link to="/" className="inline-block">
              <h2 className="text-4xl md:text-4xl lg:text-6xl font-black">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Smart</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 ml-2">Scholars</span>
              </h2>
            </Link>
            <p className="text-slate-300 text-lg leading-relaxed backdrop-blur-sm bg-slate-900/30 p-6 rounded-2xl border border-slate-800/50">
              Empowering minds through innovative education. Join our vibrant community of learners and unlock your potential with cutting-edge resources and expert guidance.
            </p>
            <div className="flex gap-4 justify-center">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} ${social.bgColor}  p-4 rounded-full text-xl transition-all duration-300`}
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
            <h3 className="text-2xl font-bold text-white mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4 columns-2">
              {links.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.link} 
                    className="text-slate-400 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 rounded-full bg-purple-500 mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
            </h3>
            <div className="space-y-6">
              <motion.div 
                className="group flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 hover:from-slate-800 hover:to-slate-900 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <FaMapMarkerAlt className="text-purple-400 text-xl mt-1" />
                <p className="text-slate-400 group-hover:text-white transition-colors duration-300">
                  123 Innovation Hub<br />
                  Digital Valley, DV 54321
                </p>
              </motion.div>
              <motion.a 
                href="mailto:connect@smartscholars.edu"
                className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 hover:from-slate-800 hover:to-slate-900 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <FaEnvelope className="text-blue-400 text-xl" />
                <span className="text-slate-400 group-hover:text-white transition-colors duration-300">
                  connect@smartscholars.edu
                </span>
              </motion.a>
              <motion.a 
                href="tel:+1-234-567-8900"
                className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 hover:from-slate-800 hover:to-slate-900 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <FaPhone className="text-pink-400 text-xl" />
                <span className="text-slate-400 group-hover:text-white transition-colors duration-300">
                  +1 (234) 567-8900
                </span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-20 pt-8 border-t border-slate-800/50">
          <div className="text-center space-y-4">
            <p className="text-slate-400">
              &copy; {new Date().getFullYear()} Smart Scholars. All rights reserved.
            </p>
            <p className="flex items-center justify-center gap-2 text-slate-400">
              Crafted with <FaHeart className="text-pink-500 animate-pulse" /> by
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-semibold">
                Digital Innovators
              </span>
            </p>
            <p className="text-sm text-slate-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
