import React from "react";
import { motion } from "framer-motion";
import { 
  FiUsers, 
  FiAward, 
  FiClock, 
  FiHeart,
  FiCheckCircle,
  FiArrowRight 
} from "react-icons/fi";

const AboutSection = () => {
  const stats = [
    { icon: <FiUsers />, number: "50+", label: "Team Members" },
    { icon: <FiAward />, number: "30+", label: "Awards Won" },
    { icon: <FiClock />, number: "8+", label: "Years Experience" },
    { icon: <FiHeart />, number: "200+", label: "Happy Clients" }
  ];

  const features = [
    "Innovative solutions tailored to your needs",
    "Expert team with years of industry experience",
    "Client-centric approach and dedicated support",
    "Cutting-edge technology and modern practices"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white to-slate-50">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <motion.img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                  alt="Our Team"
                  className="w-full h-auto object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 mix-blend-overlay"></div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-2xl"
              />

              <motion.div
                animate={{ 
                  y: [0, -20, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-20 blur-2xl"
              />

              {/* Experience Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 500 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 z-20"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    8+
                  </div>
                  <div className="text-xs text-gray-600">Years of<br />Excellence</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-1/2"
          >
            {/* Section Subtitle */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block px-4 py-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-semibold text-blue-600">
                About Us
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                We Transform Ideas
              </span>
              <br />
              <span className="text-gray-800">Into Digital Reality</span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 text-lg mb-6 leading-relaxed"
            >
              We are a passionate team of creators, developers, and strategists dedicated to helping businesses thrive in the digital age. With years of experience and a client-first approach, we deliver solutions that make a difference.
            </motion.p>

            {/* Features List */}
            <motion.div variants={itemVariants} className="mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-3 mb-3"
                >
                  <FiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-2xl text-blue-600 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Learn More About Us</span>
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div 
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                  style={{ opacity: 0.2 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-gray-700 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300"
              >
                Contact Us
              </motion.button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              variants={itemVariants}
              className="mt-8 flex items-center space-x-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.img
                    key={i}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    src={`https://randomuser.me/api/portraits/men/${i}.jpg`}
                    alt="Client"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-bold text-gray-800">500+</span> trusted clients
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;