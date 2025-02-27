import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.h1 
          className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          404
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8 space-y-6"
        >
          <p className="text-2xl text-gray-300 max-w-lg mx-auto">
            Oops! It seems you've stumbled into the digital void. 
            Don't worry though, even the best explorers get lost sometimes.
          </p>

          <div className="z-10 flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
            >
              <span className="mr-2">←</span>
              Return Home
            </Link>
            
           
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black/30 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />
    </div>
  );
};

export default NotFound;
