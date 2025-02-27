import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaFileAlt, FaClipboardCheck } from 'react-icons/fa';
import { categories } from '../assets/data';

const Card = () => {
  

  return (
    <div id='scroll' className="w-full py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex overflow-x-auto space-x-6 pb-8 
          scrollbar-thin 
          scrollbar-thumb-blue-600 
          scrollbar-track-gray-200 
          hover:scrollbar-thumb-blue-700
          scrollbar-thumb-rounded-full
          scrollbar-track-rounded-full
          [&::-webkit-scrollbar]:h-2
          [&::-webkit-scrollbar-thumb]:shadow-lg
          [&::-webkit-scrollbar-thumb]:bg-gradient-to-r 
          [&::-webkit-scrollbar-thumb]:from-blue-600 
          [&::-webkit-scrollbar-thumb]:to-purple-600">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <Link 
                    key={itemIndex}
                    to={item.link}
                    className="block p-4 rounded-lg hover:bg-gray-50 border border-gray-100 transition-colors duration-200"
                  >
                    <h4 className="font-semibold text-gray-700 mb-2">{item.name}</h4>
                    <div className="flex justify-between text-sm text-gray-500">
                      {item.date && <span>Date: {item.date}</span>}
                      {item.lastDate && <span>Last Date: {item.lastDate}</span>}
                      {item.examDate && <span>Exam Date: {item.examDate}</span>}
                      {item.posts && <span>{item.posts}</span>}
                    </div>
                  </Link>
                ))}
              </div>

              <Link 
                to={category.link}
                className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                View All
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
