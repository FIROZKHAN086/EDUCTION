import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Todate = () => {
  const cards = [
    {
      id: 1,
      title: "Job Alerts",
      icon: <FaBriefcase className="text-3xl text-indigo-500" />,
      description: "New job opportunities matching your profile",
      count: 5,
      buttonText: "View Jobs",
      color: "from-indigo-500 to-purple-500",
      link: "/contact"
    },
    {
      id: 2, 
      title: "Results Declared",
      icon: <FaGraduationCap className="text-3xl text-emerald-500" />,
      description: "Your recent exam results are now available",
      count: 3,
      buttonText: "See Results",
      color: "from-emerald-500 to-teal-500",
      link: "/result"
    },
    {
      id: 3,
      title: "Important Notifications",
      icon: <FaBell className="text-3xl text-rose-500" />,
      description: "Check your pending notifications",
      count: 8,
      buttonText: "View All",
      color: "from-rose-500 to-pink-500"
    }
  ];

  return (
    <div className="w-full mt-10 py-16 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
          Today's Alerts
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Stay updated with your latest notifications, job opportunities, and academic results all in one place
        </p>
      </div>

      <Swiper
        slidesPerView={1.2}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 3.2,
          },
        }}
        className="py-4"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`bg-gradient-to-br ${card.color} rounded-2xl p-6 shadow-xl h-[280px] flex flex-col justify-between backdrop-blur-lg border border-white/10`}
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="bg-black/30 p-3 rounded-xl">
                    {card.icon}
                  </div>
                  <span className="bg-black/30 px-3 py-1 rounded-full text-white text-sm font-medium">
                    {card.count} new
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-white/90 font-medium">
                  {card.description}
                </p>
              </div>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 relative overflow-hidden group bg-gradient-to-r from-black/30 to-black/40 text-white font-bold py-3 px-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm border border-white/20 w-full"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"/>
                <span className="relative inline-flex items-center">
               <Link to={card.link}>   {card.buttonText} </Link>
                  <svg className="w-5 h-5 ml-2 -mr-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </motion.button>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Todate;
