import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaFileAlt, FaClipboardCheck } from 'react-icons/fa';
import { categories } from '../assets/Home-page';

const Card = () => {
  return (
    <div id='scroll' className="w-full font-roboto py-16 px-4  bg-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="flex items-center gap-3 mb-6 p-3 bg-gradient-to-r from-blue-500  to-pink-400 rounded-xl"
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-3 bg-white/90 rounded-lg text-2xl">
                  {React.cloneElement(category.icon, {
                    className: "text-blue-600"
                  })}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </motion.div>

              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link 
                      target='_blank'
                      to={item.link}
                      className="block p-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 border border-gray-100 transition-all duration-200"
                    >
                      <h4 className="font-semibold text-black bg-clip-text mb-2">
                        {item.name}
                      </h4>
                      <div className="flex flex-col sm:flex-row justify-between gap-2 text-sm text-gray-500">
                        {item.date && <span>Date: {item.date}</span>}
                        {item.lastDate && <span>Last Date: {item.lastDate}</span>}
                        {item.examDate && <span>Exam Date: {item.examDate}</span>}
                        {item.posts && <span>{item.posts}</span>}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <Link 
                to={category.link}
                className="mt-6 inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-medium group"
              >
                View All
                <svg 
                  className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
