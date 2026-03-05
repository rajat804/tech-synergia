import React from "react";
import { motion } from "framer-motion";
import { 
  FiCpu, 
  FiUsers, 
  FiClock, 
  FiShield,
  FiTrendingUp,
  FiAward,
  FiHeart,
  FiZap,
  FiCheckCircle,
  FiStar,
  FiGlobe,
  FiHeadphones
} from "react-icons/fi";

const WhyChooseUsSection = () => {
  const features = [
    {
      id: 1,
      title: "Expert Team",
      description: "Our team consists of certified professionals with years of industry experience and deep technical expertise.",
      icon: <FiUsers className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      stats: "50+ Experts",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      id: 2,
      title: "Cutting-Edge Technology",
      description: "We leverage the latest technologies and frameworks to build future-proof solutions for your business.",
      icon: <FiCpu className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      stats: "Latest Tech Stack",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      id: 3,
      title: "Proven Track Record",
      description: "500+ successful projects delivered with 98% client satisfaction rate across diverse industries.",
      icon: <FiAward className="w-8 h-8" />,
      color: "from-pink-500 to-pink-600",
      stats: "500+ Projects",
      gradient: "from-pink-400 to-pink-600"
    },
    {
      id: 4,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance to ensure your systems run smoothly at all times.",
      icon: <FiHeadphones className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600",
      stats: "Always Available",
      gradient: "from-orange-400 to-orange-600"
    },
    {
      id: 5,
      title: "Fast Delivery",
      description: "Agile methodologies and efficient workflows ensure quick turnaround times without compromising quality.",
      icon: <FiZap className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      stats: "2x Faster",
      gradient: "from-green-400 to-green-600"
    },
    {
      id: 6,
      title: "Secure & Reliable",
      description: "Enterprise-grade security measures and robust architecture to protect your valuable data and assets.",
      icon: <FiShield className="w-8 h-8" />,
      color: "from-indigo-500 to-indigo-600",
      stats: "100% Secure",
      gradient: "from-indigo-400 to-indigo-600"
    },
    {
      id: 7,
      title: "Global Reach",
      description: "Serving clients across 15+ countries with culturally-aware solutions and multilingual support.",
      icon: <FiGlobe className="w-8 h-8" />,
      color: "from-cyan-500 to-cyan-600",
      stats: "15+ Countries",
      gradient: "from-cyan-400 to-cyan-600"
    },
    {
      id: 8,
      title: "Client-Centric Approach",
      description: "We prioritize your needs and work closely with you to deliver solutions that exceed expectations.",
      icon: <FiHeart className="w-8 h-8" />,
      color: "from-red-500 to-red-600",
      stats: "98% Satisfaction",
      gradient: "from-red-400 to-red-600"
    }
  ];

  const stats = [
    { number: "8+", label: "Years Experience", icon: <FiClock /> },
    { number: "50+", label: "Team Experts", icon: <FiUsers /> },
    { number: "500+", label: "Projects Done", icon: <FiCheckCircle /> },
    { number: "98%", label: "Happy Clients", icon: <FiStar /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Why Choose Tech Synergia?
            </span>
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-6 rounded-full"
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            We combine expertise, innovation, and dedication to deliver exceptional results that drive your business forward.
          </motion.p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-3xl text-blue-600 mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group relative h-full"
            >
              {/* Feature Card */}
              <div className="relative h-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Animated gradient background on hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  initial={false}
                />
                
                {/* Icon with gradient */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${feature.color} p-4 text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  {feature.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {feature.title}
                </h3>

                {/* Stats Badge */}
                <div className={`inline-block px-3 py-1 mb-3 rounded-full text-xs font-semibold bg-gradient-to-r ${feature.gradient} text-white`}>
                  {feature.stats}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom gradient line */}
                <motion.div 
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                  initial={false}
                />
              </div>

              {/* Decorative elements on hover */}
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Left side - Key Benefits */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Key Benefits
              </span>
            </h3>
            
            <div className="space-y-4">
              {[
                "End-to-end digital solutions tailored to your needs",
                "Dedicated project manager for seamless communication",
                "Agile development methodology with regular updates",
                "Post-launch support and maintenance included",
                "Scalable solutions that grow with your business",
                "Competitive pricing with no hidden costs"
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <FiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <img
                        key={i}
                        src={`https://randomuser.me/api/portraits/men/${i}.jpg`}
                        alt="Team"
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">Trusted by 200+ clients</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <FiStar key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">4.9/5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Company Values */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 shadow-xl text-white">
            <h3 className="text-2xl font-bold mb-6">Our Core Values</h3>
            
            <div className="space-y-6">
              {[
                {
                  title: "Innovation First",
                  description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions.",
                  icon: "💡"
                },
                {
                  title: "Client Success",
                  description: "Your success is our success. We're committed to helping you achieve your business goals.",
                  icon: "🎯"
                },
                {
                  title: "Quality Assurance",
                  description: "Rigorous testing and quality checks ensure every deliverable meets the highest standards.",
                  icon: "✨"
                },
                {
                  title: "Transparent Communication",
                  description: "Clear, honest, and regular communication throughout our partnership.",
                  icon: "🤝"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-3"
                >
                  <span className="text-2xl">{value.icon}</span>
                  <div>
                    <h4 className="font-semibold mb-1">{value.title}</h4>
                    <p className="text-white/80 text-sm">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievement Badge */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl"
            >
              <div className="flex items-center space-x-3">
                <FiAward className="w-8 h-8" />
                <div>
                  <div className="font-bold">ISO 27001 Certified</div>
                  <div className="text-sm text-white/70">Information Security Management</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Start Your Journey With Us</span>
              <FiTrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div 
              className="absolute inset-0 bg-white"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
              style={{ opacity: 0.2 }}
            />
          </motion.button>
          <p className="text-gray-600 mt-4">Join 200+ businesses that trust Tech Synergia</p>
        </motion.div>
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
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUsSection;