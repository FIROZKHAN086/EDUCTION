import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaUserGraduate, FaFileAlt } from 'react-icons/fa';
import { jobCategories } from '../assets/Jobs';

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            Latest Job Opportunities
          </h1>
          <p className="text-xl text-gray-300">
            Find and apply for your dream job from our curated listings
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {jobCategories.map((category) => (
            <div key={category.id} className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-6">
                {category.title}
              </h2>
              
              {category.jobs.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => setSelectedJob(selectedJob === index ? null : index)}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-blue-500/20 p-4 rounded-xl">
                          <FaBriefcase className="text-2xl text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                          <p className="text-gray-400">{job.department}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full">
                          <FaUserGraduate className="text-green-400" />
                          <span className="text-green-400">{job.eligibility}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-red-500/20 px-4 py-2 rounded-full">
                          <FaCalendar className="text-red-400" />
                          <span className="text-red-400">Last Date: {job.lastDate}</span>
                        </div>
                      </div>
                    </div>

                    <AnimatePresence>
                      {selectedJob === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-6 pt-6 border-t border-gray-700"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-xl font-semibold text-white mb-4">Job Details</h4>
                              <ul className="space-y-3 text-gray-300">
                                <li>Posts: {job.posts}</li>
                                <li>Vacancies: {job.vacancies}</li>
                                <li>Age Limit: {job.ageLimit}</li>
                                <li>Salary: {job.salary}</li>
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="text-xl font-semibold text-white mb-4">How to Apply</h4>
                              <ol className="space-y-3 text-gray-300">
                                {job.applicationProcess.map((step, i) => (
                                  <li key={i} className="flex items-center gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 text-sm">
                                      {i + 1}
                                    </span>
                                    {step}
                                  </li>
                                ))}
                              </ol>
                            </div>
                          </div>

                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-6 w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2"
                          >
                            <FaFileAlt />
                            Apply Now
                          </motion.button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
