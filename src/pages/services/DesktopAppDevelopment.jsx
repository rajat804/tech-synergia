import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiUsers,
  FiPackage,
  FiTruck,
  FiDollarSign,
  FiBarChart2,
  FiDatabase,
  FiClock,
  FiAward,
  FiCheckCircle,
  FiArrowRight,
  FiStar,
  FiHeart,
  FiZap,
  FiGlobe,
  FiShield,
  FiLayers,
  FiSettings,
  FiGrid,
  FiPieChart,
  FiTrendingUp,
  FiCalendar,
  FiMail,
  FiMessageCircle,
  FiFileText,
  FiBriefcase,
  FiUserCheck,
  FiUserPlus,
  FiUserMinus,
  FiCreditCard,
  FiHome,
  FiMapPin,
  FiLayout,
  FiServer,
  FiCloud,
  FiMonitor,
  FiCpu,
  FiRepeat,
} from "react-icons/fi";
import {
  SiElectron,
  SiReact,
  SiDotnet,
  SiOpenjdk,
  SiPython,
  SiCplusplus,
  SiFlutter,
  SiTauri,
  SiQt,
  SiGtk,
} from "react-icons/si";
import { FaWindows, FaApple, FaLinux } from "react-icons/fa";
import ProcessSection from "../../component/services/ProcessSection";
import ClientTestimonials from "../../component/services/ClientTestimonials";
import ContactWithUs from "../../component/services/ContactWithUs";

const DesktopAppDevelopment = () => {
  const [activeTab, setActiveTab] = useState("all");

  const stats = [
    {
      number: "180+",
      label: "Desktop Apps",
      icon: <FiMonitor />,
      color: "from-blue-500 to-blue-600",
      suffix: "Delivered",
    },
    {
      number: "99.9%",
      label: "Uptime",
      icon: <FiShield />,
      color: "from-purple-500 to-purple-600",
      suffix: "Stability",
    },
    {
      number: "12+",
      label: "Years Experience",
      icon: <FiClock />,
      color: "from-pink-500 to-pink-600",
      suffix: "In Development",
    },
    {
      number: "15+",
      label: "Industries",
      icon: <FiGlobe />,
      color: "from-orange-500 to-orange-600",
      suffix: "Served",
    },
    {
      number: "40+",
      label: "Desktop Experts",
      icon: <FiUsers />,
      color: "from-green-500 to-green-600",
      suffix: "Team",
    },
    {
      number: "500K+",
      label: "Users",
      icon: <FiUserCheck />,
      color: "from-red-500 to-red-600",
      suffix: "Worldwide",
    },
  ];

  const platforms = [
    {
      name: "Windows",
      icon: <FaWindows />,
      color: "from-blue-500 to-blue-600",
      bg: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      name: "macOS",
      icon: <FaApple />,
      color: "from-gray-500 to-gray-700",
      bg: "bg-gray-100",
      textColor: "text-gray-600",
    },
    {
      name: "Linux",
      icon: <FaLinux />,
      color: "from-orange-500 to-orange-700",
      bg: "bg-orange-100",
      textColor: "text-orange-600",
    },
    {
      name: "Cross-Platform",
      icon: <FiRepeat />,
      color: "from-purple-500 to-purple-700",
      bg: "bg-purple-100",
      textColor: "text-purple-600",
    },
    {
      name: "Electron",
      icon: <SiElectron />,
      color: "from-cyan-500 to-cyan-700",
      bg: "bg-cyan-100",
      textColor: "text-cyan-600",
    },
    {
      name: ".NET",
      icon: <SiDotnet />,
      color: "from-indigo-500 to-indigo-700",
      bg: "bg-indigo-100",
      textColor: "text-indigo-600",
    },
    {
      name: "Java",
      icon: <SiOpenjdk />,
      color: "from-red-500 to-red-700",
      bg: "bg-red-100",
      textColor: "text-red-600",
    },
    {
      name: "Python",
      icon: <SiPython />,
      color: "from-green-500 to-green-700",
      bg: "bg-green-100",
      textColor: "text-green-600",
    },
  ];

  const technologies = [
    {
      name: "Electron",
      icon: <SiElectron />,
      color: "from-cyan-500 to-cyan-600",
      bg: "bg-cyan-100",
    },
    {
      name: "React Native",
      icon: <SiReact />,
      color: "from-blue-500 to-blue-600",
      bg: "bg-blue-100",
    },
    {
      name: ".NET Core",
      icon: <SiDotnet />,
      color: "from-indigo-500 to-indigo-600",
      bg: "bg-indigo-100",
    },
    {
      name: "Java",
      icon: <SiOpenjdk />,
      color: "from-red-500 to-red-600",
      bg: "bg-red-100",
    },
    {
      name: "Python",
      icon: <SiPython />,
      color: "from-green-500 to-green-600",
      bg: "bg-green-100",
    },
    {
      name: "C++",
      icon: <SiCplusplus />,
      color: "from-purple-500 to-purple-600",
      bg: "bg-purple-100",
    },
    {
      name: "Swift",
      icon: <FaApple />,
      color: "from-orange-500 to-orange-600",
      bg: "bg-orange-100",
    },
    {
      name: "Flutter",
      icon: <SiFlutter />,
      color: "from-teal-500 to-teal-600",
      bg: "bg-teal-100",
    },
    {
      name: "Tauri",
      icon: <SiTauri />,
      color: "from-yellow-500 to-yellow-600",
      bg: "bg-yellow-100",
    },
    {
      name: "WPF",
      icon: <FaWindows />,
      color: "from-blue-500 to-blue-600",
      bg: "bg-blue-100",
    },
    {
      name: "Qt",
      icon: <SiQt />,
      color: "from-green-500 to-green-600",
      bg: "bg-green-100",
    },
    {
      name: "GTK",
      icon: <SiGtk />,
      color: "from-purple-500 to-purple-600",
      bg: "bg-purple-100",
    },
  ];

  const appTypes = [
    {
      title: "Business Applications",
      description: "Custom desktop software for enterprise operations",
      icon: <FiBriefcase />,
      features: [
        "ERP Systems",
        "CRM Desktop",
        "Inventory Management",
        "HR Software",
      ],
      color: "from-blue-500 to-blue-600",
      iconColor: "text-blue-600",
    },
    {
      title: "Media & Entertainment",
      description: "Rich media applications for content creation and playback",
      icon: <FiMonitor />,
      features: [
        "Video Editors",
        "Audio Workstations",
        "Media Players",
        "Graphics Tools",
      ],
      color: "from-purple-500 to-purple-600",
      iconColor: "text-purple-600",
    },
    {
      title: "Data Analytics Tools",
      description: "Powerful data visualization and analysis applications",
      icon: <FiBarChart2 />,
      features: [
        "Data Visualization",
        "Statistical Analysis",
        "Reporting Tools",
        "Dashboards",
      ],
      color: "from-pink-500 to-pink-600",
      iconColor: "text-pink-600",
    },
    {
      title: "Engineering Software",
      description: "Specialized tools for engineering and design",
      icon: <FiCpu />,
      features: [
        "CAD Software",
        "Simulation Tools",
        "3D Modeling",
        "Analysis Software",
      ],
      color: "from-orange-500 to-orange-600",
      iconColor: "text-orange-600",
    },
    {
      title: "Healthcare Applications",
      description: "HIPAA-compliant desktop solutions for healthcare",
      icon: <FiShield />,
      features: [
        "EMR Systems",
        "Practice Management",
        "Medical Imaging",
        "Patient Records",
      ],
      color: "from-green-500 to-green-600",
      iconColor: "text-green-600",
    },
    {
      title: "Financial Software",
      description: "Secure desktop applications for finance",
      icon: <FiDollarSign />,
      features: [
        "Trading Platforms",
        "Accounting Software",
        "Risk Analysis",
        "Portfolio Management",
      ],
      color: "from-teal-500 to-teal-600",
      iconColor: "text-teal-600",
    },
    {
      title: "Productivity Tools",
      description: "Applications that enhance workplace productivity",
      icon: <FiZap />,
      features: [
        "Project Management",
        "Document Management",
        "Communication Tools",
        "Task Automation",
      ],
      color: "from-indigo-500 to-indigo-600",
      iconColor: "text-indigo-600",
    },
    {
      title: "Scientific Applications",
      description: "Research and scientific computing software",
      icon: <FiDatabase />,
      features: [
        "Lab Management",
        "Research Tools",
        "Scientific Computing",
        "Data Analysis",
      ],
      color: "from-red-500 to-red-600",
      iconColor: "text-red-600",
    },
  ];

  const features = [
    {
      title: "Native Performance",
      icon: <FiZap />,
      color: "from-blue-500 to-blue-600",
      desc: "Optimized for maximum speed and efficiency",
    },
    {
      title: "Offline Capability",
      icon: <FiCloud />,
      color: "from-purple-500 to-purple-600",
      desc: "Full functionality without internet",
    },
    {
      title: "Hardware Access",
      icon: <FiCpu />,
      color: "from-pink-500 to-pink-600",
      desc: "Direct access to system resources",
    },
    {
      title: "Enhanced Security",
      icon: <FiShield />,
      color: "from-orange-500 to-orange-600",
      desc: "Advanced security features",
    },
    {
      title: "Multi-threading",
      icon: <FiLayers />,
      color: "from-green-500 to-green-600",
      desc: "Efficient parallel processing",
    },
    {
      title: "File System Access",
      icon: <FiDatabase />,
      color: "from-teal-500 to-teal-600",
      desc: "Complete file management",
    },
    {
      title: "Cross-platform",
      icon: <FiGlobe />,
      color: "from-indigo-500 to-indigo-600",
      desc: "Run on multiple OS platforms",
    },
    {
      title: "Custom UI/UX",
      icon: <FiLayout />,
      color: "from-red-500 to-red-600",
      desc: "Tailored user interfaces",
    },
  ];

  const benefits = [
    {
      title: "Superior Performance",
      icon: <FiZap />,
      color: "from-blue-500 to-blue-600",
      desc: "Faster execution than web applications",
    },
    {
      title: "Enhanced Security",
      icon: <FiShield />,
      color: "from-purple-500 to-purple-600",
      desc: "Better control over data security",
    },
    {
      title: "Offline Access",
      icon: <FiCloud />,
      color: "from-pink-500 to-pink-600",
      desc: "Work without internet connection",
    },
    {
      title: "Hardware Integration",
      icon: <FiCpu />,
      color: "from-orange-500 to-orange-600",
      desc: "Direct device connectivity",
    },
    {
      title: "Custom Experience",
      icon: <FiSettings />,
      color: "from-green-500 to-green-600",
      desc: "Tailored user experience",
    },
    {
      title: "Long-term Support",
      icon: <FiClock />,
      color: "from-teal-500 to-teal-600",
      desc: "Ongoing maintenance and updates",
    },
  ];

  const filterTabs = [
    { id: "all", name: "All Applications", icon: "📱" },
    { id: "business", name: "Business", icon: "💼" },
    { id: "creative", name: "Creative", icon: "🎨" },
    { id: "technical", name: "Technical", icon: "🔧" },
  ];

  const filteredApps =
    activeTab === "all"
      ? appTypes
      : activeTab === "business"
        ? appTypes.filter((a) =>
            [
              "Business Applications",
              "Financial Software",
              "Healthcare Applications",
            ].includes(a.title),
          )
        : activeTab === "creative"
          ? appTypes.filter((a) =>
              ["Media & Entertainment", "Productivity Tools"].includes(a.title),
            )
          : appTypes.filter((a) =>
              [
                "Engineering Software",
                "Data Analytics Tools",
                "Scientific Applications",
              ].includes(a.title),
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
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600"></div>

          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>

          {/* Floating Icons */}
          <motion.div
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-20 left-20 text-8xl opacity-20"
          >
            💻
          </motion.div>

          <motion.div
            animate={{
              x: [0, -30, 0],
              y: [0, 30, 0],
              rotate: [0, -10, 10, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-20 right-20 text-8xl opacity-20"
          >
            🖥️
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="absolute top-1/3 left-1/4 text-6xl opacity-20"
          >
            ⌨️
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center text-white">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
            className="w-28 h-28 mx-auto mb-8 bg-white/20 backdrop-blur-lg rounded-3xl flex items-center justify-center border border-white/30 shadow-2xl"
          >
            <FiMonitor className="text-6xl" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent">
              Desktop App
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
            Powerful, secure, and high-performance desktop applications
            <br className="hidden sm:block" />
            for Windows, macOS, and Linux. 180+ successful desktop apps
            delivered.
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
              className="px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <span className="flex items-center justify-center gap-2">
                View Our Work
                <FiMonitor className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Technical Consultation
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

      {/* Platforms Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Platforms We Support
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Desktop applications for all major operating systems
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4"
          >
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`${platform.bg} rounded-xl p-4 sm:p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group`}
              >
                <div className="flex justify-center">
                  <div
                    className={`text-3xl sm:text-4xl mb-2 ${platform.textColor} group-hover:scale-110 transition-transform`}
                  >
                    {platform.icon}
                  </div>
                </div>
                <div
                  className={`text-xs sm:text-sm font-semibold ${platform.textColor}`}
                >
                  {platform.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Key Features
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              What makes desktop applications powerful
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-xl mb-3 
  bg-gradient-to-br ${feature.color} 
  text-white shadow-md 
  group-hover:scale-110 transition-all duration-300`}
                >
                  {feature.icon}
                </div>
                <h3
                  className={`text-xl font-bold mb-2 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Technologies We Use
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Modern frameworks and tools for desktop development
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`${tech.bg} rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group`}
              >
                <div className="flex justify-center">
                  <div
                    className={`w-14 h-14 flex items-center justify-center rounded-xl mb-3 
  bg-gradient-to-br ${tech.color} 
  text-white shadow-md 
  group-hover:scale-110 transition-all duration-300`}
                  >
                    {tech.icon}
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-700">
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Why Choose Desktop Apps
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Advantages of desktop applications for your business
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-xl mb-3 
  bg-gradient-to-br ${benefit.color} 
  text-white shadow-md 
  group-hover:scale-110 transition-all duration-300`}
                >
                  {benefit.icon}
                </div>
                <h3
                  className={`text-xl font-bold mb-2 bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}
                >
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Desktop Applications We Build
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Tailored solutions for every industry and use case
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
                    ? "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white shadow-lg"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Apps Grid */}
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          >
            {filteredApps.map((app, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`text-4xl sm:text-5xl mb-4 ${app.iconColor} group-hover:scale-110 transition-transform`}
                >
                  {app.icon}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {app.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">
                  {app.description}
                </p>

                {/* Features */}
                <ul className="space-y-1 mb-3">
                  {app.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-2 text-xs text-gray-500"
                    >
                      <FiCheckCircle className={`w-3 h-3 ${app.iconColor}`} />
                      <span className="truncate">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <motion.a
                  href="#"
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600"
                  whileHover={{ x: 5 }}
                >
                  <span>Learn More</span>
                  <FiArrowRight className="w-3 h-3" />
                </motion.a>

                {/* Bottom Gradient Line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${app.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <ProcessSection />
      <ClientTestimonials />
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

export default DesktopAppDevelopment;
