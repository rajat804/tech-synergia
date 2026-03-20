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
} from "react-icons/fi";
import ProcessSection from "../../component/services/ProcessSection";
import ClientTestimonials from "../../component/services/ClientTestimonials";
import ContactWithUs from "../../component/services/ContactWithUs";

const FleetManagement = () => {
  const [activeTab, setActiveTab] = useState("all");

  const stats = [
    { number: "5000+", label: "Vehicles Tracked", icon: <FiTruck />, color: "from-blue-500 to-blue-600", suffix: "Daily" },
    { number: "99.5%", label: "Uptime", icon: <FiShield />, color: "from-green-500 to-green-600", suffix: "Reliability" },
    { number: "15+", label: "Years", icon: <FiClock />, color: "from-purple-500 to-purple-600", suffix: "Experience" },
    { number: "25+", label: "Countries", icon: <FiGlobe />, color: "from-orange-500 to-orange-600", suffix: "Coverage" },
    { number: "100+", label: "Fleet Experts", icon: <FiUsers />, color: "from-pink-500 to-pink-600", suffix: "Team" },
    { number: "50M+", label: "Miles Tracked", icon: <FiMapPin />, color: "from-red-500 to-red-600", suffix: "Annually" }
  ];

  const fleetModules = [
    {
      title: "Real-time GPS Tracking",
      description: "Live vehicle location and movement monitoring",
      icon: <FiMapPin />,
      features: ["Live Map View", "Geofencing", "Route History", "Speed Monitoring"],
      color: "from-blue-500 to-blue-600",
      iconColor: "text-blue-600"
    },
    {
      title: "Vehicle Maintenance",
      description: "Automated maintenance scheduling and tracking",
      icon: <FiSettings />,
      features: ["Service Reminders", "Maintenance History", "Parts Inventory", "Work Orders"],
      color: "from-green-500 to-green-600",
      iconColor: "text-green-600"
    },
    {
      title: "Driver Management",
      description: "Comprehensive driver profiling and monitoring",
      icon: <FiUsers />,
      features: ["Driver Profiles", "Behavior Monitoring", "Hours of Service", "Certification Tracking"],
      color: "from-purple-500 to-purple-600",
      iconColor: "text-purple-600"
    },
    {
      title: "Fuel Management",
      description: "Track fuel consumption and optimize efficiency",
      icon: <FiDollarSign />,
      features: ["Fuel Consumption", "Fuel Efficiency", "Fuel Theft Alerts", "Fuel Card Integration"],
      color: "from-orange-500 to-orange-600",
      iconColor: "text-orange-600"
    },
    {
      title: "Route Optimization",
      description: "Intelligent route planning and optimization",
      icon: <FiTrendingUp />,
      features: ["Smart Routing", "Traffic Avoidance", "Multi-stop Planning", "ETA Predictions"],
      color: "from-pink-500 to-pink-600",
      iconColor: "text-pink-600"
    },
    {
      title: "Dispatch Management",
      description: "Efficient job assignment and tracking",
      icon: <FiMessageCircle />,
      features: ["Job Assignment", "Real-time Updates", "Driver Communication", "Proof of Delivery"],
      color: "from-teal-500 to-teal-600",
      iconColor: "text-teal-600"
    },
    {
      title: "Safety & Compliance",
      description: "Ensure regulatory compliance and safety",
      icon: <FiShield />,
      features: ["ELD Compliance", "DVIR Reports", "Accident Tracking", "Safety Scores"],
      color: "from-indigo-500 to-indigo-600",
      iconColor: "text-indigo-600"
    },
    {
      title: "Asset Tracking",
      description: "Monitor trailers and equipment",
      icon: <FiPackage />,
      features: ["Trailer Tracking", "Equipment Location", "Utilization Reports", "Maintenance Alerts"],
      color: "from-cyan-500 to-cyan-600",
      iconColor: "text-cyan-600"
    },
    {
      title: "Trip Management",
      description: "Complete trip planning and analysis",
      icon: <FiCalendar />,
      features: ["Trip Planning", "Mileage Tracking", "Trip Costing", "Driver Logs"],
      color: "from-emerald-500 to-emerald-600",
      iconColor: "text-emerald-600"
    },
    {
      title: "Analytics & Reporting",
      description: "Deep insights into fleet performance",
      icon: <FiBarChart2 />,
      features: ["Fuel Reports", "Driver Scorecards", "Cost Analysis", "Fleet Utilization"],
      color: "from-amber-500 to-amber-600",
      iconColor: "text-amber-600"
    },
    {
      title: "Geofencing",
      description: "Virtual boundaries and alerts",
      icon: <FiGrid />,
      features: ["Zone Creation", "Entry/Exit Alerts", "Speed Limits in Zones", "Time-based Rules"],
      color: "from-red-500 to-red-600",
      iconColor: "text-red-600"
    },
    {
      title: "Telematics Integration",
      description: "Connect with vehicle telematics devices",
      icon: <FiCpu />,
      features: ["CAN Bus Data", "Engine Diagnostics", "Fault Code Alerts", "Performance Monitoring"],
      color: "from-violet-500 to-violet-600",
      iconColor: "text-violet-600"
    }
  ];

  const features = [
    { title: "Live Tracking", icon: <FiMapPin />, color: "from-blue-500 to-blue-600", desc: "Real-time vehicle location updates" },
    { title: "Maintenance Alerts", icon: <FiClock />, color: "from-green-500 to-green-600", desc: "Automated service reminders" },
    { title: "Driver Behavior", icon: <FiUsers />, color: "from-purple-500 to-purple-600", desc: "Monitor speeding, idling, and harsh events" },
    { title: "Fuel Efficiency", icon: <FiDollarSign />, color: "from-orange-500 to-orange-600", desc: "Track and optimize fuel consumption" },
    { title: "Route Planning", icon: <FiTrendingUp />, color: "from-pink-500 to-pink-600", desc: "Optimize routes for time and fuel" },
    { title: "Compliance", icon: <FiShield />, color: "from-teal-500 to-teal-600", desc: "ELD and DVIR compliance" },
    { title: "Dispatch", icon: <FiMessageCircle />, color: "from-indigo-500 to-indigo-600", desc: "Efficient job assignment" },
    { title: "Reports", icon: <FiBarChart2 />, color: "from-cyan-500 to-cyan-600", desc: "Comprehensive fleet analytics" }
  ];

  const benefits = [
    { title: "Reduce Fuel Costs", icon: <FiDollarSign />, color: "from-blue-500 to-blue-600", desc: "Save up to 20% on fuel with optimization" },
    { title: "Extend Vehicle Life", icon: <FiClock />, color: "from-green-500 to-green-600", desc: "Proactive maintenance prevents breakdowns" },
    { title: "Improve Safety", icon: <FiShield />, color: "from-purple-500 to-purple-600", desc: "Reduce accidents with driver monitoring" },
    { title: "Increase Productivity", icon: <FiZap />, color: "from-orange-500 to-orange-600", desc: "Optimize routes and reduce idle time" },
    { title: "Regulatory Compliance", icon: <FiCheckCircle />, color: "from-pink-500 to-pink-600", desc: "Stay compliant with FMCSA regulations" },
    { title: "Better Customer Service", icon: <FiStar />, color: "from-teal-500 to-teal-600", desc: "Accurate ETAs and proof of delivery" }
  ];

  const vehicleTypes = [
    { name: "Semi Trucks", icon: "🚛", color: "from-blue-500 to-blue-600", bg: "bg-blue-100", textColor: "text-blue-600" },
    { name: "Delivery Vans", icon: "🚐", color: "from-green-500 to-green-600", bg: "bg-green-100", textColor: "text-green-600" },
    { name: "Light Trucks", icon: "🛻", color: "from-purple-500 to-purple-600", bg: "bg-purple-100", textColor: "text-purple-600" },
    { name: "Buses", icon: "🚌", color: "from-orange-500 to-orange-600", bg: "bg-orange-100", textColor: "text-orange-600" },
    { name: "Trailers", icon: "🚋", color: "from-pink-500 to-pink-600", bg: "bg-pink-100", textColor: "text-pink-600" },
    { name: "Tankers", icon: "⛽", color: "from-teal-500 to-teal-600", bg: "bg-teal-100", textColor: "text-teal-600" },
    { name: "Refrigerated", icon: "❄️", color: "from-indigo-500 to-indigo-600", bg: "bg-indigo-100", textColor: "text-indigo-600" },
    { name: "Service Vehicles", icon: "🔧", color: "from-cyan-500 to-cyan-600", bg: "bg-cyan-100", textColor: "text-cyan-600" },
    { name: "Construction", icon: "🚜", color: "from-amber-500 to-amber-600", bg: "bg-amber-100", textColor: "text-amber-600" },
    { name: "Emergency", icon: "🚑", color: "from-red-500 to-red-600", bg: "bg-red-100", textColor: "text-red-600" },
    { name: "Luxury Vehicles", icon: "🚗", color: "from-emerald-500 to-emerald-600", bg: "bg-emerald-100", textColor: "text-emerald-600" },
    { name: "Motorcycles", icon: "🏍️", color: "from-violet-500 to-violet-600", bg: "bg-violet-100", textColor: "text-violet-600" }
  ];

  const integrations = [
    { name: "ELD Devices", icon: "📟", color: "from-blue-500 to-blue-600", bg: "bg-blue-100", textColor: "text-blue-600" },
    { name: "GPS Trackers", icon: "📍", color: "from-green-500 to-green-600", bg: "bg-green-100", textColor: "text-green-600" },
    { name: "Fuel Cards", icon: "💳", color: "from-purple-500 to-purple-600", bg: "bg-purple-100", textColor: "text-purple-600" },
    { name: "Dispatch Systems", icon: "📻", color: "from-orange-500 to-orange-600", bg: "bg-orange-100", textColor: "text-orange-600" },
    { name: "ERP", icon: "🏢", color: "from-pink-500 to-pink-600", bg: "bg-pink-100", textColor: "text-pink-600" },
    { name: "Maintenance", icon: "🔧", color: "from-teal-500 to-teal-600", bg: "bg-teal-100", textColor: "text-teal-600" },
    { name: "Mapping", icon: "🗺️", color: "from-indigo-500 to-indigo-600", bg: "bg-indigo-100", textColor: "text-indigo-600" },
    { name: "Weather", icon: "☁️", color: "from-cyan-500 to-cyan-600", bg: "bg-cyan-100", textColor: "text-cyan-600" }
  ];

  const filterTabs = [
    { id: "all", name: "All Modules", icon: "📱" },
    { id: "tracking", name: "Tracking", icon: "📍" },
    { id: "maintenance", name: "Maintenance", icon: "🔧" },
    { id: "operations", name: "Operations", icon: "⚙️" }
  ];

  const filteredModules = activeTab === "all" 
    ? fleetModules 
    : activeTab === "tracking"
      ? fleetModules.filter(m => ["Real-time GPS Tracking", "Geofencing", "Trip Management", "Telematics Integration"].includes(m.title))
      : activeTab === "maintenance"
        ? fleetModules.filter(m => ["Vehicle Maintenance", "Safety & Compliance", "Asset Tracking"].includes(m.title))
        : fleetModules.filter(m => ["Driver Management", "Fuel Management", "Route Optimization", "Dispatch Management", "Analytics & Reporting"].includes(m.title));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
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
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600"></div>
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}></div>
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
              ease: "linear"
            }}
            className="absolute top-20 left-20 text-8xl opacity-20"
          >
            🚛
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
              ease: "linear"
            }}
            className="absolute bottom-20 right-20 text-8xl opacity-20"
          >
            🚚
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
            📍
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center text-white">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
            className="w-28 h-28 mx-auto mb-8 bg-white/20 backdrop-blur-lg rounded-3xl flex items-center justify-center border border-white/30 shadow-2xl"
          >
            <FiTruck className="text-6xl" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent">
              Fleet
            </span>
            <br />
            <span className="text-white text-4xl sm:text-5xl md:text-6xl">
              Management
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
            Take control of your fleet with real-time tracking and intelligent analytics.
            <br className="hidden sm:block" />
            5000+ vehicles tracked daily across 25+ countries.
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
                Explore Features
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Schedule Demo
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
                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.number}</div>
                <div className="text-xs sm:text-sm text-white/70 mt-1">{stat.label}</div>
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


      {/* Key Features */}
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
                Key Features
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to manage your fleet efficiently
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
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-xl mb-3 
  bg-gradient-to-br ${feature.color} 
  text-white shadow-md 
  group-hover:scale-110 transition-all duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fleet Modules */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Fleet Management Modules
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive modules for complete fleet control
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

          {/* Modules Grid */}
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          >
            {filteredModules.map((module, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-xl mb-3 
  bg-gradient-to-br ${module.color} 
  text-white shadow-md 
  group-hover:scale-110 transition-all duration-300`}
                >
                  {module.icon}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {module.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">
                  {module.description}
                </p>

                {/* Features */}
                <ul className="space-y-1 mb-3">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-xs text-gray-500">
                      <FiCheckCircle className={`w-3 h-3 ${module.iconColor}`} />
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
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${module.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
                Why Choose Our System
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Benefits that transform your fleet operations
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
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-xl mb-3 
  bg-gradient-to-br ${benefit.color} 
  text-white shadow-md 
  group-hover:scale-110 transition-all duration-300`}
                >
                  {benefit.icon}
                </div>
                <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
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
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
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

export default FleetManagement;