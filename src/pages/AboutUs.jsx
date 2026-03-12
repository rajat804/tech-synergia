import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence  } from "framer-motion";
import { 
  FiUsers, 
  FiAward, 
  FiClock, 
  FiHeart,
  FiCheckCircle,
  FiTarget,
  FiEye,
  FiTrendingUp,
  FiCode,
  FiSmartphone,
  FiCloud,
  FiShield,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiMapPin,
  FiPhone,
  FiCalendar,
  FiStar,
  FiArrowRight,
  FiPlay
} from "react-icons/fi";

const AboutUs = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });
  }, [controls]);

  const stats = [
    { icon: <FiUsers />, number: "50+", label: "Team Members", color: "from-blue-500 to-blue-600", delay: 0.1 },
    { icon: <FiAward />, number: "30+", label: "Awards Won", color: "from-purple-500 to-purple-600", delay: 0.2 },
    { icon: <FiClock />, number: "8+", label: "Years Experience", color: "from-pink-500 to-pink-600", delay: 0.3 },
    { icon: <FiHeart />, number: "200+", label: "Happy Clients", color: "from-orange-500 to-orange-600", delay: 0.4 }
  ];

  const features = [
    {
      id: 1,
      title: "Our Mission",
      description: "To empower businesses through innovative technology solutions that drive growth, efficiency, and digital transformation.",
      icon: <FiTarget className="w-8 h-8" />,
      color: "from-blue-500 to-purple-500",
      stats: "500+ Projects",
      gradient: "bg-gradient-to-br from-blue-500/10 to-purple-500/10"
    },
    {
      id: 2,
      title: "Our Vision",
      description: "To be the global leader in digital innovation, creating sustainable value for our clients and communities through technology.",
      icon: <FiEye className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      stats: "15+ Countries",
      gradient: "bg-gradient-to-br from-purple-500/10 to-pink-500/10"
    },
    {
      id: 3,
      title: "Our Values",
      description: "Innovation, integrity, excellence, and client-centricity guide everything we do at Tech Synergia.",
      icon: <FiTrendingUp className="w-8 h-8" />,
      color: "from-pink-500 to-orange-500",
      stats: "98% Satisfaction",
      gradient: "bg-gradient-to-br from-pink-500/10 to-orange-500/10"
    }
  ];

  const services = [
    {
      id: 1,
      title: "Web Development",
      icon: <FiCode className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      description: "Modern, responsive websites and web applications",
      features: ["React/Next.js", "Vue.js", "Angular", "TypeScript"]
    },
    {
      id: 2,
      title: "Mobile Apps",
      icon: <FiSmartphone className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      description: "Native and cross-platform mobile solutions",
      features: ["React Native", "Flutter", "iOS/Swift", "Android/Kotlin"]
    },
    {
      id: 3,
      title: "Cloud Solutions",
      icon: <FiCloud className="w-6 h-6" />,
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600",
      description: "Scalable cloud infrastructure and migration",
      features: ["AWS", "Azure", "Google Cloud", "Docker/K8s"]
    },
    {
      id: 4,
      title: "Cybersecurity",
      icon: <FiShield className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      description: "Enterprise-grade security and compliance",
      features: ["Penetration Testing", "Compliance", "Monitoring", "Incident Response"]
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO & Founder",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      bio: "15+ years in tech leadership, passionate about innovation",
      expertise: ["Leadership", "Strategy", "Innovation"],
      social: { linkedin: "#", twitter: "#", github: "#" },
      color: "from-blue-500 to-purple-500"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      bio: "Ex-Google, cloud architecture expert, AI enthusiast",
      expertise: ["Cloud", "AI/ML", "Architecture"],
      social: { linkedin: "#", twitter: "#", github: "#" },
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Head of Design",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      bio: "Award-winning designer, UX specialist",
      expertise: ["UI/UX", "Branding", "Research"],
      social: { linkedin: "#", twitter: "#", github: "#" },
      color: "from-pink-500 to-orange-500"
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Lead Developer",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      bio: "Full-stack expert, open source contributor",
      expertise: ["Full Stack", "DevOps", "Performance"],
      social: { linkedin: "#", twitter: "#", github: "#" },
      color: "from-orange-500 to-red-500"
    }
  ];

  const achievements = [
    { year: "2024", title: "ISO 27001 Certified", description: "Information security excellence", icon: "🏆", color: "from-blue-500 to-purple-500" },
    { year: "2023", title: "Fastest Growing Tech Company", description: "Recognized by TechCrunch", icon: "🚀", color: "from-purple-500 to-pink-500" },
    { year: "2022", title: "Best Workplace in Tech", description: "Employee satisfaction award", icon: "💼", color: "from-pink-500 to-orange-500" },
    { year: "2021", title: "Innovation of the Year", description: "AI-powered analytics platform", icon: "💡", color: "from-orange-500 to-red-500" }
  ];

  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      role: "CEO, TechCorp",
      content: "Tech Synergia transformed our business completely. Their team's expertise and dedication is unmatched.",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 5,
      company: "TechCorp"
    },
    {
      id: 2,
      name: "Emily Brown",
      role: "CTO, HealthFirst",
      content: "The best decision we made was partnering with Tech Synergia. They delivered beyond our expectations.",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      rating: 5,
      company: "HealthFirst"
    },
    {
      id: 3,
      name: "Robert Lee",
      role: "Director, FinTrust",
      content: "Professional, innovative, and reliable. They're not just vendors, they're true partners.",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      rating: 5,
      company: "FinTrust"
    }
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

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
          
          {/* Floating Orbs */}
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          />
          
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 right-20 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          />
          
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, 50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 500 }}
                className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg mb-6 border border-gray-200"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-700">Welcome to Tech Synergia</span>
              </motion.div>

              {/* Title */}
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Innovating
                </span>
                <br />
                <span className="text-gray-800">Your Digital</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Future
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p 
                className="text-xl text-gray-600 mb-8 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                We combine cutting-edge technology with creative expertise to build solutions that drive real business growth.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Get Started</span>
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                  onClick={() => setIsVideoPlaying(true)}
                  className="px-8 py-4 bg-white text-gray-700 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 flex items-center space-x-2 group"
                >
                  <FiPlay className="w-5 h-5 text-purple-600 group-hover:scale-110 transition-transform" />
                  <span>Watch Video</span>
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                className="mt-8 flex items-center space-x-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.img
                      key={i}
                      whileHover={{ scale: 1.1, zIndex: 10 }}
                      src={`https://randomuser.me/api/portraits/men/${i}.jpg`}
                      alt="Team"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-bold text-gray-800">500+</span>
                  <span className="text-gray-600"> projects delivered</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <FiStar key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">4.9/5</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Animated Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Main Image */}
                <motion.div
                  animate={floatingAnimation}
                  className="relative z-10"
                >
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Team"
                    className="rounded-2xl shadow-2xl"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-purple-600/20 mix-blend-overlay"></div>
                </motion.div>

                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl z-20"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <FiCheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-800">500+ Projects</div>
                      <div className="text-xs text-gray-500">Successfully Delivered</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl z-20"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FiUsers className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-800">50+ Experts</div>
                      <div className="text-xs text-gray-500">Dedicated Team</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={() => setIsVideoPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Company Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Section with Parallax */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group perspective"
              >
                <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform-gpu group-hover:rotate-y-5">
                  {/* Background Decoration */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <motion.div 
                    className={`text-5xl mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {stat.icon}
                  </motion.div>
                  
                  {/* Number */}
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-gray-600 font-medium">{stat.label}</div>

                  {/* Animated Border */}
                  <motion.div 
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values with 3D Cards */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-purple-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -15,
                  rotateX: 5,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group perspective"
              >
                <div className={`relative bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu group-hover:rotate-x-5 ${feature.gradient}`}>
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500" />
                  </div>

                  {/* Icon Container */}
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-r ${feature.color} p-5 text-white shadow-xl group-hover:shadow-2xl transition-all duration-500`}
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center space-x-2 text-sm">
                    <FiTrendingUp className={`w-4 h-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`} />
                    <span className="text-gray-500">{feature.stats}</span>
                  </div>

                  {/* Animated Corner */}
                  <motion.div 
                    className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-r ${feature.color} rounded-bl-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story with Parallax */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side - Image with 3D Effect */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 perspective"
            >
              <motion.div
                whileHover={{ rotateY: 5, rotateX: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative group"
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                  alt="Our Team"
                  className="w-full h-auto rounded-2xl shadow-2xl transform-gpu group-hover:scale-[1.02] transition-transform duration-500"
                />
                
                {/* Floating Badges */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-2xl"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <FiCalendar className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">Since 2016</div>
                      <div className="text-xs text-gray-500">8+ Years</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-2xl"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FiMapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">Global</div>
                      <div className="text-xs text-gray-500">15+ Countries</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6"
              >
                <span className="text-sm font-semibold text-blue-600">Our Journey</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  From Vision
                </span>
                <br />
                <span className="text-gray-800">to Reality</span>
              </h2>
              
              <div className="space-y-4 text-gray-600">
                <motion.p 
                  className="text-lg"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Founded in 2016, Tech Synergia started as a small team of passionate developers 
                  with a big dream: to make cutting-edge technology accessible to businesses of all sizes.
                </motion.p>
                <motion.p 
                  className="text-lg"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                >
                  Today, we're a family of 50+ experts, delivering 500+ successful projects across 
                  15+ countries, helping businesses navigate the digital landscape with confidence.
                </motion.p>
              </div>

              {/* Key Milestones */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-8 grid grid-cols-2 gap-4"
              >
                {achievements.slice(0, 2).map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 cursor-pointer border border-transparent hover:border-blue-200 transition-all duration-300"
                  >
                    <div className="text-2xl mb-2">{achievement.icon}</div>
                    <div className="text-sm text-blue-600 font-semibold">{achievement.year}</div>
                    <div className="font-bold text-gray-800">{achievement.title}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview with Flip Cards */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                What We Do
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We offer comprehensive technology services to help businesses thrive in the digital age.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group perspective"
              >
                <div className={`relative ${service.bgColor} rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform-gpu group-hover:rotate-y-5 h-full`}>
                  {/* Icon */}
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${service.color} p-4 text-white shadow-lg mx-auto`}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold text-center mb-3 ${service.textColor}`}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm text-center mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center space-x-2 text-sm text-gray-600"
                      >
                        <FiCheckCircle className={`w-4 h-4 ${service.textColor}`} />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section with Social Cards */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The brilliant minds behind our success, dedicated to bringing your ideas to life.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -20,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  {/* Avatar with Ring */}
                  <div className="relative mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative"
                    >
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-24 h-24 mx-auto rounded-full border-4 border-white shadow-xl"
                      />
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                    </motion.div>
                    
                    {/* Online Indicator */}
                    <div className="absolute bottom-2 right-1/2 transform translate-x-8 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>

                  {/* Info */}
                  <h3 className="text-xl font-bold text-gray-800 text-center mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {member.name}
                  </h3>
                  <p className={`text-sm text-center mb-3 bg-gradient-to-r ${member.color} bg-clip-text text-transparent font-semibold`}>
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 text-center mb-4">
                    {member.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {member.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-1 text-xs rounded-full bg-gradient-to-r ${member.color} bg-opacity-10 text-gray-700`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    <motion.a
                      whileHover={{ scale: 1.2, y: -3 }}
                      href={member.social.github}
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <FiGithub className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2, y: -3 }}
                      href={member.social.linkedin}
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <FiLinkedin className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2, y: -3 }}
                      href={member.social.twitter}
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-colors"
                    >
                      <FiTwitter className="w-4 h-4" />
                    </motion.a>
                  </div>

                  {/* Bottom Gradient Line */}
                  <motion.div 
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${member.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements Timeline with Hover Effects */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Our Achievements
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Milestones that mark our journey of excellence and innovation.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full hidden md:block"></div>

            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 border-gradient-to-r ${achievement.color}`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`text-4xl bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                          {achievement.icon}
                        </div>
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <span className={`text-2xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                              {achievement.year}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${achievement.color} text-white`}>
                              Achievement
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
                          <p className="text-gray-600">{achievement.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <motion.div 
                    whileHover={{ scale: 1.5 }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg hidden md:block cursor-pointer"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-xl"
              >
                {/* Quote Icon */}
                <div className="text-6xl text-purple-200 mb-4">"</div>

                {/* Content */}
                <p className="text-xl text-gray-700 mb-6 italic">
                  {testimonials[activeTestimonial].content}
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonials[activeTestimonial].avatar}
                      alt={testimonials[activeTestimonial].name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800">
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonials[activeTestimonial].role}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? 'w-6 bg-gradient-to-r from-blue-500 to-purple-500'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-30"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
              Let's work together to bring your ideas to life and transform your business with technology.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button className="px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 group relative overflow-hidden">
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Get In Touch</span>
                  <FiArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CSS for custom animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .perspective {
          perspective: 1000px;
        }
        .rotate-y-5 {
          transform: rotateY(5deg);
        }
        .rotate-x-5 {
          transform: rotateX(5deg);
        }
      `}</style>
    </div>
  );
};

export default AboutUs;