import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories } from '../assets/Result';
import { Link } from 'react-router-dom';

const Result = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-ubuntu mt-16 bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-4">
            Latest Results & Updates
          </h1>
          <p className="text-xl text-gray-300">
            Stay ahead with real-time examination results and announcements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="backdrop-blur-lg bg-white/10 rounded-3xl overflow-hidden border border-white/20"
            >
              <motion.div 
                className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 cursor-pointer"
                onClick={() => setSelectedCategory(selectedCategory === index ? null : index)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-4 rounded-2xl">
                      {category.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-white">{category.title}</h2>
                  </div>
                  <motion.div
                    animate={{ rotate: selectedCategory === index ? 180 : 0 }}
                    className="text-white text-2xl"
                  >
                    ↓
                  </motion.div>
                </div>
              </motion.div>

              <AnimatePresence>
                {selectedCategory === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="p-6 space-y-4"
                  >
                    {category.items?.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: itemIndex * 0.1 }}
                        className="group relative bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                      >
                        <div className="flex flex-col">
                          <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors">
                            {item.name}
                          </h3>
                          
                          <div className="flex flex-wrap items-center gap-4 mt-3 text-gray-300">
                            {item.date && (
                              <span className="bg-purple-900/50 px-3 py-1 rounded-full text-sm">
                                Released: {item.date}
                              </span>
                            )}
                            {item.examDate && (
                              <span className="bg-pink-900/50 px-3 py-1 rounded-full text-sm">
                                Exam: {item.examDate}
                              </span>
                            )}
                            {item.lastDate && (
                              <span className="bg-red-900/50 px-3 py-1 rounded-full text-sm">
                                 Date: {item.lastDate}
                              </span>
                            )}
                            {item.posts && (
                              <span className="bg-orange-900/50 px-3 py-1 rounded-full text-sm">
                                {item.posts}
                              </span>
                            )}
                          </div>

                          <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold px-6 py-2 rounded-xl self-start"
                          >
                            <Link to={item.link}>View </Link>
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Result;

