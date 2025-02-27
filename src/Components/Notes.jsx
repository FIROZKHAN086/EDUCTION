import React, { useEffect }  from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaBook, FaGraduationCap, FaUniversity } from 'react-icons/fa';
import { noteCategories } from '../assets/Notes';

const Notes = () => {
  
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  const handleDownload = (downloadUrl, fileName) => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen mt-16 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Study Notes & Materials
          </h1>
          <p className="text-xl text-gray-600">
            Download comprehensive study materials for various examinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {noteCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${category.color} p-6`}>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-lg text-white">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {category.notes.map((note, noteIndex) => (
                  <motion.div
                    key={noteIndex}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-800">{note.name}</h3>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                        onClick={() => handleDownload(note.downloadUrl, note.name + '.pdf')}
                      >
                        <FaDownload />
                      </motion.button>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{note.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>Size: {note.size}</span>
                      <span>Format: {note.format}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;
