import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSmartphone,
  FiCode,
  FiTrendingUp,
  FiUsers,
  FiClock,
  FiAward,
  FiCheckCircle,
  FiArrowRight,
  FiStar,
  FiDownload,
  FiHeart,
  FiZap,
  FiGlobe,
  FiShield,
  FiCloud,
  FiLayers,
  FiPackage,
  FiSettings,
  FiMessageCircle,
  FiCpu,
  FiWatch,
} from "react-icons/fi";

import {
  FaApple,
  FaAndroid,
  FaReact,
  FaShoppingCart,
  FaHospital,
  FaMoneyBillWave,
  FaUserFriends,
} from "react-icons/fa";

import { SiFlutter, SiKotlin, SiSwift, SiIonic } from "react-icons/si";
import ContactWithUs from "../../component/services/ContactWithUs";

const MobileAppDevelopment = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide for testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      number: "150+",
      label: "Apps Delivered",
      icon: <FiSmartphone />,
      color: "from-blue-500 to-blue-600",
      suffix: "Projects",
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      icon: <FiHeart />,
      color: "from-purple-500 to-purple-600",
      suffix: "Rating",
    },
    {
      number: "6+",
      label: "Years Experience",
      icon: <FiClock />,
      color: "from-pink-500 to-pink-600",
      suffix: "Years",
    },
    {
      number: "12+",
      label: "Industries Served",
      icon: <FiGlobe />,
      color: "from-orange-500 to-orange-600",
      suffix: "Industries",
    },
    {
      number: "40+",
      label: "App Experts",
      icon: <FiUsers />,
      color: "from-green-500 to-green-600",
      suffix: "Team",
    },
    {
      number: "50M+",
      label: "App Downloads",
      icon: <FiDownload />,
      color: "from-red-500 to-red-600",
      suffix: "Downloads",
    },
  ];

  const services = [
    {
      title: "iOS App Development",
      description: "Native iOS apps with Swift and SwiftUI for iPhone and iPad",
      icon: <FaApple className="text-gray-900" />,
      features: [
        "Swift/SwiftUI",
        "App Store Deployment",
        "Push Notifications",
        "iCloud Integration",
      ],
      color: "from-gray-500 to-gray-700",
    //   price: "$5k - $25k",
    },

    {
      title: "Android App Development",
      description: "Native Android apps with Kotlin and Jetpack Compose",
      icon: <FaAndroid className="text-green-600" />,
      features: [
        "Kotlin/Java",
        "Play Store Deployment",
        "Material Design",
        "Google Services",
      ],
      color: "from-green-500 to-green-700",
    //   price: "$5k - $25k",
    },

    {
      title: "Cross Platform Apps",
      description: "Build once, deploy everywhere with React Native & Flutter",
      icon: <FaReact className="text-sky-500" />,
      features: [
        "React Native",
        "Flutter",
        "Single Codebase",
        "Native Performance",
      ],
      color: "from-blue-500 to-indigo-500",
    //   price: "$4k - $20k",
    },

    {
      title: "Hybrid Apps",
      description: "Web technologies wrapped in native container",
      icon: <SiIonic className="text-blue-500" />,
      features: ["Ionic", "Capacitor", "Cordova", "PWA Support"],
      color: "from-purple-500 to-pink-500",
    //   price: "$3k - $15k",
    },

    {
      title: "Enterprise Apps",
      description: "Secure, scalable apps for large organizations",
      icon: <FiLayers className="text-indigo-600" />,
      features: [
        "Single Sign-On",
        "Data Encryption",
        "Offline Sync",
        "Device Management",
      ],
      color: "from-indigo-500 to-purple-500",
    //   price: "$15k - $50k",
    },

    {
      title: "E-commerce Apps",
      description: "Mobile shopping experiences that convert",
      icon: <FaShoppingCart className="text-pink-600" />,
      features: [
        "Product Catalog",
        "Secure Payments",
        "Order Tracking",
        "Wishlist",
      ],
      color: "from-pink-500 to-rose-500",
    //   price: "$5k - $20k",
    },

    {
      title: "Food Delivery Apps",
      description: "Complete food ordering and delivery solutions",
      icon: <FiPackage className="text-orange-500" />,
      features: [
        "Real-time Tracking",
        "Restaurant Dashboard",
        "Payment Integration",
        "Reviews",
      ],
      color: "from-orange-500 to-red-500",
    //   price: "$8k - $30k",
    },

    {
      title: "Healthcare Apps",
      description: "HIPAA compliant health and wellness apps",
      icon: <FaHospital className="text-teal-600" />,
      features: [
        "Telemedicine",
        "Appointment Booking",
        "Health Records",
        "Secure Messaging",
      ],
      color: "from-teal-500 to-cyan-500",
    //   price: "$10k - $40k",
    },

    {
      title: "FinTech Apps",
      description: "Secure financial and banking applications",
      icon: <FaMoneyBillWave className="text-emerald-600" />,
      features: [
        "Bank-Level Security",
        "Transaction Processing",
        "Investment Tracking",
        "KYC",
      ],
      color: "from-emerald-500 to-teal-500",
    //   price: "$15k - $50k",
    },

    {
      title: "Social Media Apps",
      description: "Engaging social platforms with real-time features",
      icon: <FaUserFriends className="text-blue-500" />,
      features: ["News Feed", "Messaging", "User Profiles", "Content Sharing"],
      color: "from-blue-500 to-cyan-500",
    //   price: "$10k - $35k",
    },

    {
      title: "On-Demand Apps",
      description: "Uber-like service marketplace applications",
      icon: <FiZap className="text-yellow-500" />,
      features: [
        "Real-time Booking",
        "Payment Processing",
        "Rating System",
        "Push Alerts",
      ],
      color: "from-yellow-500 to-amber-500",
    //   price: "$12k - $40k",
    },

    {
      title: "IoT Mobile Apps",
      description: "Connect and control smart devices",
      icon: <FiSettings className="text-cyan-600" />,
      features: [
        "Bluetooth LE",
        "WiFi Control",
        "Device Pairing",
        "Real-time Data",
      ],
      color: "from-cyan-500 to-blue-500",
    //   price: "$8k - $30k",
    },
  ];

  const platforms = [
    {
      name: "iOS",
      icon: <FaApple className="text-gray-900" />,
      bg: "bg-gray-100",
    },

    {
      name: "Android",
      icon: <FaAndroid className="text-green-600" />,
      bg: "bg-green-100",
    },

    {
      name: "React Native",
      icon: <FaReact className="text-sky-500" />,
      bg: "bg-blue-100",
    },

    {
      name: "Flutter",
      icon: <SiFlutter className="text-sky-400" />,
      bg: "bg-cyan-100",
    },

    {
      name: "SwiftUI",
      icon: <SiSwift className="text-orange-500" />,
      bg: "bg-orange-100",
    },

    {
      name: "Kotlin",
      icon: <SiKotlin className="text-purple-600" />,
      bg: "bg-purple-100",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      desc: "Understanding your app idea, target audience, and market research",
      color: "from-blue-500 to-blue-600",
      icon: "🔍",
    },
    {
      step: "02",
      title: "UX/UI Design",
      desc: "Creating wireframes, prototypes, and beautiful user interfaces",
      color: "from-purple-500 to-purple-600",
      icon: "🎨",
    },
    {
      step: "03",
      title: "Development",
      desc: "Building your app with clean code and modern architecture",
      color: "from-pink-500 to-pink-600",
      icon: "💻",
    },
    {
      step: "04",
      title: "Testing",
      desc: "Rigorous QA testing across multiple devices and platforms",
      color: "from-orange-500 to-orange-600",
      icon: "✅",
    },
    {
      step: "05",
      title: "Deployment",
      desc: "App Store and Play Store submission with ASO optimization",
      color: "from-green-500 to-green-600",
      icon: "🚀",
    },
    {
      step: "06",
      title: "Maintenance",
      desc: "Ongoing support, updates, and performance monitoring",
      color: "from-indigo-500 to-indigo-600",
      icon: "🔧",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, FoodieApp",
      content:
        "Tech Synergia delivered an amazing food delivery app that exceeded our expectations. Downloads crossed 100K in just 3 months!",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
      company: "FoodieApp",
    },
    {
      name: "Michael Chen",
      role: "Founder, FitTrack",
      content:
        "The fitness app they built is incredibly smooth and user-friendly. Our users love the UI and the real-time tracking features.",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 5,
      company: "FitTrack",
    },
    {
      name: "Emily Davis",
      role: "Product Manager, MediCare",
      content:
        "They developed a HIPAA compliant healthcare app for us. The security features and patient portal are top-notch.",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 5,
      company: "MediCare",
    },
    {
      name: "David Wilson",
      role: "CTO, ShopEase",
      content:
        "Our e-commerce app built by Tech Synergia has a 4.8 rating on Play Store. The performance is outstanding!",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      rating: 5,
      company: "ShopEase",
    },
  ];

  const features = [
    {
      title: "Push Notifications",
      icon: <FiZap />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Offline Sync",
      icon: <FiDownload />,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Payment Gateway",
      icon: <FaMoneyBillWave />,
      color: "from-pink-500 to-pink-600",
    },
    {
      title: "Social Login",
      icon: <FiUsers />,
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Analytics",
      icon: <FiTrendingUp />,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Cloud Sync",
      icon: <FiCloud />,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      title: "Biometrics",
      icon: <FiShield />,
      color: "from-red-500 to-red-600",
    },
    {
      title: "Chat / Messaging",
      icon: <FiMessageCircle />,
      color: "from-teal-500 to-teal-600",
    },
    {
      title: "Maps / Location",
      icon: <FiGlobe />,
      color: "from-cyan-500 to-cyan-600",
    },
    { title: "AI / ML", icon: <FiCpu />, color: "from-blue-500 to-blue-600" },
    {
      title: "Wearables",
      icon: <FiWatch />,
      color: "from-gray-500 to-gray-600",
    },
  ];

  const filterTabs = [
    { id: "all", name: "All Apps", icon: <FiSmartphone /> },
    { id: "ios", name: "iOS", icon: <FaApple /> },
    { id: "android", name: "Android", icon: <FaAndroid /> },
    { id: "cross", name: "Cross Platform", icon: <FaReact /> },
    { id: "enterprise", name: "Enterprise", icon: <FiLayers /> },
  ];

  const filteredServices =
    activeTab === "all"
      ? services
      : activeTab === "ios"
        ? services.filter((s) => s.title.includes("iOS"))
        : activeTab === "android"
          ? services.filter((s) => s.title.includes("Android"))
          : activeTab === "cross"
            ? services.filter(
                (s) =>
                  s.title.includes("Cross-Platform") ||
                  s.title.includes("Hybrid"),
              )
            : services.filter(
                (s) =>
                  s.title.includes("Enterprise") ||
                  s.title.includes("FinTech") ||
                  s.title.includes("Healthcare"),
              );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-5">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600"></div>

          {/* Animated Mesh Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 20px 20px, white 1.5px, transparent 0)`,
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>

          {/* Floating Shapes */}
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-20 left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"
          />

          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-20 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"
          />

          {/* Mobile App Icons Floating */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-40 left-1/4 text-6xl opacity-20"
          >
            📱
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-40 right-1/4 text-6xl opacity-20"
          >
            📲
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center text-white">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
            className="w-28 h-28 mx-auto mb-8 bg-white/20 backdrop-blur-lg rounded-3xl flex items-center justify-center border border-white/30 shadow-2xl"
          >
            <FiSmartphone className="text-6xl" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Mobile App
            </span>
            <br />
            <span className="text-white text-4xl sm:text-5xl md:text-6xl">
              Development
            </span>
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-white/30 mx-auto mb-6 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-white/90 mb-10 px-4"
          >
            We build powerful, intuitive mobile apps that users love.
            <br className="hidden sm:block" />
            150+ apps delivered across iOS, Android, and Cross-platform.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <span className="flex items-center justify-center gap-2">
                View Our Apps
                <FiSmartphone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Get Free Consultation
            </motion.button>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mt-16 px-4"
          >
            {stats.slice(0, 6).map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-white/70 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Platforms We Support */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Platforms We Support
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Native and cross-platform expertise for all major mobile platforms
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4"
          >
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`${platform.bg} rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
              >
                <div className="flex justify-center text-3xl sm:text-4xl mb-2">
                  {platform.icon}
                </div>

                <div className="text-sm sm:text-base font-semibold text-gray-700">
                  {platform.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Types of Apps We Build
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From simple apps to complex enterprise solutions
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4"
          >
            {filterTabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Services Grid */}
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div className="text-3xl sm:text-4xl mb-3">{service.icon}</div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                  {service.title}
                </h3>

                {/* Price */}
                {/* <div
                  className={`text-xs sm:text-sm font-semibold mb-2 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                >
                  Starting {service.price}
                </div> */}

                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1 mb-3">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-2 text-xs text-gray-500"
                    >
                      <FiCheckCircle
                        className={`w-3 h-3 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                      />
                      <span className="truncate">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <motion.a
                  href="#"
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600"
                  whileHover={{ x: 5 }}
                >
                  <span>Learn More</span>
                  <FiArrowRight className="w-3 h-3" />
                </motion.a>

                {/* Bottom Gradient Line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Features We Implement
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Cutting-edge features to make your app stand out
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -3 }}
                className="bg-white rounded-xl p-4 text-center shadow hover:shadow-lg transition cursor-pointer group"
              >
                <div className="flex justify-center text-3xl mb-2 text-blue-600 group-hover:scale-110 transition">
                  {feature.icon}
                </div>

                <div className="text-sm font-semibold text-gray-700">
                  {feature.title}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Our App Development Process
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A proven methodology to deliver high-quality apps on time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative bg-white rounded-xl p-4 sm:p-5 shadow-lg text-center group border border-gray-100"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                />
                <div className="text-2xl sm:text-3xl mb-2">{item.icon}</div>
                <div
                  className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}
                >
                  {item.step}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Client Success Stories
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              What our clients say about working with us
            </p>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100"
              >
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <img
                    src={testimonials[currentSlide].avatar}
                    alt={testimonials[currentSlide].name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg"
                  />
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                      {testimonials[currentSlide].name}
                    </h3>
                    <p className="text-sm sm:text-base text-purple-600 mb-2">
                      {testimonials[currentSlide].role}
                    </p>
                    <div className="flex justify-center sm:justify-start items-center gap-2 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <FiStar
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <span className="text-xs sm:text-sm text-gray-500">
                        {testimonials[currentSlide].company}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 italic">
                      "{testimonials[currentSlide].content}"
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-6 bg-gradient-to-r from-indigo-500 to-purple-500"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* contact with us */}
      <ContactWithUs />

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default MobileAppDevelopment;
