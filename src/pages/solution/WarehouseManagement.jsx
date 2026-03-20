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

const WarehouseManagement = () => {
  const [activeTab, setActiveTab] = useState("all");

  const stats = [
    { number: "200+", label: "Warehouses", icon: <FiHome />, color: "from-amber-500 to-amber-600", suffix: "Managed" },
    { number: "99.8%", label: "Inventory Accuracy", icon: <FiCheckCircle />, color: "from-green-500 to-green-600", suffix: "Guaranteed" },
    { number: "15+", label: "Years", icon: <FiClock />, color: "from-blue-500 to-blue-600", suffix: "Experience" },
    { number: "25+", label: "Countries", icon: <FiGlobe />, color: "from-purple-500 to-purple-600", suffix: "Coverage" },
    { number: "80+", label: "WMS Experts", icon: <FiUsers />, color: "from-pink-500 to-pink-600", suffix: "Team" },
    { number: "5M+", label: "SKUs Managed", icon: <FiPackage />, color: "from-orange-500 to-orange-600", suffix: "Daily" }
  ];

  const wmsModules = [
    {
      title: "Receiving Management",
      description: "Streamlined goods receipt and putaway processes",
      icon: <FiTruck />,
      features: ["ASN Integration", "Quality Inspection", "Putaway Optimization", "Cross-docking"],
      color: "from-blue-500 to-blue-600",
      iconColor: "text-blue-600"
    },
    {
      title: "Inventory Control",
      description: "Real-time inventory tracking across all locations",
      icon: <FiDatabase />,
      features: ["Bin Location", "Batch Tracking", "Serial Numbers", "Expiry Management"],
      color: "from-green-500 to-green-600",
      iconColor: "text-green-600"
    },
    {
      title: "Order Picking",
      description: "Efficient order fulfillment strategies",
      icon: <FiPackage />,
      features: ["Wave Picking", "Batch Picking", "Zone Picking", "Pick-to-Light"],
      color: "from-purple-500 to-purple-600",
      iconColor: "text-purple-600"
    },
    {
      title: "Packing & Shipping",
      description: "Streamlined packing and dispatch operations",
      icon: <FiTruck />,
      features: ["Packing Verification", "Label Printing", "Carrier Integration", "Shipping Docs"],
      color: "from-orange-500 to-orange-600",
      iconColor: "text-orange-600"
    },
    {
      title: "Putaway Optimization",
      description: "Intelligent storage location assignment",
      icon: <FiLayers />,
      features: ["Dynamic Putaway", "Velocity-based Slotting", "ABC Analysis", "Space Utilization"],
      color: "from-pink-500 to-pink-600",
      iconColor: "text-pink-600"
    },
    {
      title: "Cycle Counting",
      description: "Efficient inventory counting without disruption",
      icon: <FiCheckCircle />,
      features: ["Scheduled Counts", "Spot Checking", "ABC Counting", "Variance Reporting"],
      color: "from-teal-500 to-teal-600",
      iconColor: "text-teal-600"
    },
    {
      title: "Labor Management",
      description: "Track and optimize workforce productivity",
      icon: <FiUsers />,
      features: ["Task Assignment", "Performance Tracking", "Labor Forecasting", "Incentive Programs"],
      color: "from-indigo-500 to-indigo-600",
      iconColor: "text-indigo-600"
    },
    {
      title: "Yard Management",
      description: "Manage trailers and dock schedules",
      icon: <FiMapPin />,
      features: ["Dock Scheduling", "Trailer Tracking", "Gate Management", "Appointment System"],
      color: "from-cyan-500 to-cyan-600",
      iconColor: "text-cyan-600"
    },
    {
      title: "Value-Added Services",
      description: "Manage kitting, assembly, and customizations",
      icon: <FiSettings />,
      features: ["Kitting", "Assembly", "Custom Packaging", "Labeling"],
      color: "from-emerald-500 to-emerald-600",
      iconColor: "text-emerald-600"
    },
    {
      title: "Reporting & Analytics",
      description: "Deep insights into warehouse performance",
      icon: <FiBarChart2 />,
      features: ["KPIs Dashboard", "Productivity Reports", "Inventory Aging", "Slotting Analysis"],
      color: "from-amber-500 to-amber-600",
      iconColor: "text-amber-600"
    },
    {
      title: "Wave Management",
      description: "Intelligent order wave planning and execution",
      icon: <FiTrendingUp />,
      features: ["Wave Planning", "Order Release", "Wave Monitoring", "Wave Completion"],
      color: "from-red-500 to-red-600",
      iconColor: "text-red-600"
    },
    {
      title: "Returns Management",
      description: "Efficient reverse logistics processing",
      icon: <FiClock />,
      features: ["RMA Processing", "Inspection", "Restocking", "Disposition"],
      color: "from-violet-500 to-violet-600",
      iconColor: "text-violet-600"
    }
  ];

  const features = [
    { title: "Real-time Visibility", icon: <FiMonitor />, color: "from-blue-500 to-blue-600", desc: "Live inventory and order status" },
    { title: "Barcode Scanning", icon: <FiGrid />, color: "from-green-500 to-green-600", desc: "Fast and accurate data capture" },
    { title: "Slotting Optimization", icon: <FiLayout />, color: "from-purple-500 to-purple-600", desc: "Intelligent product placement" },
    { title: "Wave Planning", icon: <FiTrendingUp />, color: "from-orange-500 to-orange-600", desc: "Efficient order batching" },
    { title: "Cross-docking", icon: <FiTruck />, color: "from-pink-500 to-pink-600", desc: "Direct shipment from receiving" },
    { title: "RFID Integration", icon: <FiCpu />, color: "from-teal-500 to-teal-600", desc: "Automated tracking" },
    { title: "3PL Support", icon: <FiGlobe />, color: "from-indigo-500 to-indigo-600", desc: "Multi-client warehousing" },
    { title: "Mobile WMS", icon: <FiServer />, color: "from-cyan-500 to-cyan-600", desc: "Warehouse on the go" }
  ];

  const benefits = [
    { title: "Increase Accuracy", icon: <FiCheckCircle />, color: "from-blue-500 to-blue-600", desc: "Reduce errors by up to 99%" },
    { title: "Boost Productivity", icon: <FiZap />, color: "from-green-500 to-green-600", desc: "Increase throughput by 35%" },
    { title: "Save Space", icon: <FiLayers />, color: "from-purple-500 to-purple-600", desc: "Optimize storage utilization" },
    { title: "Lower Costs", icon: <FiDollarSign />, color: "from-orange-500 to-orange-600", desc: "Reduce operating expenses" },
    { title: "Faster Shipping", icon: <FiClock />, color: "from-pink-500 to-pink-600", desc: "Accelerate order fulfillment" },
    { title: "Scalable", icon: <FiTrendingUp />, color: "from-teal-500 to-teal-600", desc: "Grows with your business" }
  ];

  const integrations = [
    { name: "ERP Systems", icon: "🏢", color: "from-blue-500 to-blue-600", bg: "bg-blue-100", textColor: "text-blue-600" },
    { name: "Conveyor Systems", icon: "⚙️", color: "from-green-500 to-green-600", bg: "bg-green-100", textColor: "text-green-600" },
    { name: "Sortation", icon: "🔄", color: "from-purple-500 to-purple-600", bg: "bg-purple-100", textColor: "text-purple-600" },
    { name: "AGV/AMR", icon: "🤖", color: "from-orange-500 to-orange-600", bg: "bg-orange-100", textColor: "text-orange-600" },
    { name: "Voice Picking", icon: "🎤", color: "from-pink-500 to-pink-600", bg: "bg-pink-100", textColor: "text-pink-600" },
    { name: "RFID Readers", icon: "📡", color: "from-teal-500 to-teal-600", bg: "bg-teal-100", textColor: "text-teal-600" },
    { name: "Print & Apply", icon: "🏷️", color: "from-indigo-500 to-indigo-600", bg: "bg-indigo-100", textColor: "text-indigo-600" },
    { name: "Carousels", icon: "🔄", color: "from-cyan-500 to-cyan-600", bg: "bg-cyan-100", textColor: "text-cyan-600" }
  ];

  const warehouseTypes = [
    { name: "Distribution Centers", icon: "📦", color: "from-blue-500 to-blue-600", bg: "bg-blue-100", textColor: "text-blue-600" },
    { name: "Fulfillment Centers", icon: "🚚", color: "from-green-500 to-green-600", bg: "bg-green-100", textColor: "text-green-600" },
    { name: "Cold Storage", icon: "❄️", color: "from-purple-500 to-purple-600", bg: "bg-purple-100", textColor: "text-purple-600" },
    { name: "Bonded Warehouses", icon: "🔒", color: "from-orange-500 to-orange-600", bg: "bg-orange-100", textColor: "text-orange-600" },
    { name: "Cross-dock", icon: "🔄", color: "from-pink-500 to-pink-600", bg: "bg-pink-100", textColor: "text-pink-600" },
    { name: "3PL Warehouses", icon: "🤝", color: "from-teal-500 to-teal-600", bg: "bg-teal-100", textColor: "text-teal-600" },
    { name: "E-commerce", icon: "🛒", color: "from-indigo-500 to-indigo-600", bg: "bg-indigo-100", textColor: "text-indigo-600" },
    { name: "Automated", icon: "🤖", color: "from-cyan-500 to-cyan-600", bg: "bg-cyan-100", textColor: "text-cyan-600" },
    { name: "Hazmat", icon: "⚠️", color: "from-amber-500 to-amber-600", bg: "bg-amber-100", textColor: "text-amber-600" },
    { name: "Food Grade", icon: "🍔", color: "from-red-500 to-red-600", bg: "bg-red-100", textColor: "text-red-600" },
    { name: "Pharmaceutical", icon: "💊", color: "from-emerald-500 to-emerald-600", bg: "bg-emerald-100", textColor: "text-emerald-600" },
    { name: "Retail", icon: "🏬", color: "from-violet-500 to-violet-600", bg: "bg-violet-100", textColor: "text-violet-600" }
  ];

  const filterTabs = [
    { id: "all", name: "All Modules", icon: "📦" },
    { id: "inbound", name: "Inbound", icon: "📥" },
    { id: "inventory", name: "Inventory", icon: "📊" },
    { id: "outbound", name: "Outbound", icon: "📤" }
  ];

  const filteredModules = activeTab === "all" 
    ? wmsModules 
    : activeTab === "inbound"
      ? wmsModules.filter(m => ["Receiving Management", "Putaway Optimization", "Yard Management"].includes(m.title))
      : activeTab === "inventory"
        ? wmsModules.filter(m => ["Inventory Control", "Cycle Counting", "Value-Added Services", "Returns Management"].includes(m.title))
        : wmsModules.filter(m => ["Order Picking", "Packing & Shipping", "Wave Management", "Labor Management", "Reporting & Analytics"].includes(m.title));

 

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
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-yellow-600 to-orange-600"></div>
          
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
            🏭
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
            📦
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
            📊
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center text-white">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
            className="w-28 h-28 mx-auto mb-8 bg-white/20 backdrop-blur-lg rounded-3xl flex items-center justify-center border border-white/30 shadow-2xl"
          >
            <FiHome className="text-6xl" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-amber-100 to-yellow-100 bg-clip-text text-transparent">
              Warehouse
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
            Optimize your warehouse operations with real-time visibility and intelligent automation.
            <br className="hidden sm:block" />
            200+ warehouses worldwide trust our WMS solutions.
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
              className="px-8 py-4 bg-white text-amber-600 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
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
              Request Demo
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
              <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent">
                Key Features
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Powerful tools to streamline your warehouse operations
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

      {/* WMS Modules */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent">
                WMS Modules
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive modules for complete warehouse control
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
                    ? "bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 text-white shadow-lg"
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
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-orange-600 transition-all duration-300">
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
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-orange-600"
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
              <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent">
                Why Choose Our WMS
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Benefits that transform your warehouse operations
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

      <ProcessSection/>
      <ClientTestimonials/>
      <ContactWithUs/>

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

export default WarehouseManagement;