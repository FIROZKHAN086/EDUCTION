import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Todate = () => {
  const cards = [
    {
      id: 1,
      title: "Job Alerts",
      icon: <FaBriefcase className="text-4xl text-cyan-300" />,
      description: "New job opportunities matching your profile",
      count: 5,
      buttonText: "View Jobs",
      color: "from-[#4158D0] via-[#C850C0] to-[#FFCC70]",
      textColor: "text-white",
      link: "/jobs"
    },
    {
      id: 2,
      title: "Results Declared", 
      icon: <FaGraduationCap className="text-4xl text-fuchsia-300" />,
      description: "Your recent exam results are now available",
      count: 3,
      buttonText: "See Results",
      color: "from-[#FF3CAC] via-[#784BA0] to-[#2B86C5]",
      textColor: "text-fuchsia-300",
      descColor: "text-pink-100",
      link: "/result"
    },
    {
      id: 3,
      title: "Important Notifications",
      icon: <FaBell className="text-4xl text-black" />,
      description: "Check your pending notifications", 
      count: 8,
      buttonText: "View All",
      color: "from-[#00F5A0] via-[#00D9F5] to-[#9D00FF]",
      textColor: "text-black" ,
      link: "/notifications"
    }
  ];

  return (
    <div className="w-full mt-10 font-montserrat py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold text-center mb-6"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-400">
            Today's Updates
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-cyan-200 text-xl max-w-3xl mx-auto text-center font-light"
        >
          Stay informed with the latest opportunities and updates customized for you
        </motion.p>
      </div>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="w-full py-12"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id} className="w-[380px]">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`bg-gradient-to-br ${card.color} rounded-[2rem] p-8 h-[400px] backdrop-blur-xl shadow-2xl relative overflow-hidden group`}
            >
              {/* Animated background circles */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl transition-all duration-500 group-hover:scale-150"/>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl transition-all duration-500 group-hover:scale-150"/>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="bg-black/30 p-4 rounded-2xl backdrop-blur-md">
                    {card.icon}
                  </div>
                  <span className={`bg-black/30 backdrop-blur-md px-6 py-2 rounded-full ${card.textColor} text-lg font-medium`}>
                    {card.count} new
                  </span>
                </div>
                
                <h3 className={`text-3xl font-bold ${card.textColor} mb-4 drop-shadow-lg`}>
                  {card.title}
                </h3>
                <p className={`${card.descColor || 'text-white'} text-lg mb-8 font-medium tracking-wide`}>
                  {card.description}
                </p>

                <Link to={card.link}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-black/30 backdrop-blur-md ${card.textColor} font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 hover:bg-black/40 transition-all duration-300 border border-white/10`}
                  >
                    {card.buttonText}
                    <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Todate;
