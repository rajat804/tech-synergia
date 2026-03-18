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

const RestaurantPOSSoftware = () => {
  const [activeTab, setActiveTab] = useState("all");

  const stats = [
    { number: "250+", label: "Restaurants", icon: <FiHome />, color: "from-orange-500 to-orange-600", suffix: "Served" },
    { number: "98%", label: "Uptime", icon: <FiShield />, color: "from-red-500 to-red-600", suffix: "Reliability" },
    { number: "10+", label: "Years Experience", icon: <FiClock />, color: "from-yellow-500 to-yellow-600", suffix: "In Hospitality" },
    { number: "15+", label: "Countries", icon: <FiGlobe />, color: "from-green-500 to-green-600", suffix: "Worldwide" },
    { number: "40+", label: "POS Experts", icon: <FiUsers />, color: "from-blue-500 to-blue-600", suffix: "Team" },
    { number: "1M+", label: "Orders/Month", icon: <FiDatabase />, color: "from-purple-500 to-purple-600", suffix: "Processed" }
  ];

  const posModules = [
    {
      title: "Order Management",
      description: "Take and manage orders efficiently from all channels",
      icon: <FiPackage />,
      features: ["Dine-in Orders", "Takeaway", "Delivery Integration", "Table Management"],
      color: "from-orange-500 to-orange-600",
      iconColor: "text-orange-600"
    },
    {
      title: "Table Management",
      description: "Visual table layout with real-time status tracking",
      icon: <FiLayout />,
      features: ["Table Status", "Reservation Mgmt", "Table Grouping", "Waitlist"],
      color: "from-red-500 to-red-600",
      iconColor: "text-red-600"
    },
    {
      title: "Menu Management",
      description: "Easily update menus, prices, and specials",
      icon: <FiFileText />,
      features: ["Item Management", "Modifiers", "Combo Meals", "Daily Specials"],
      color: "from-yellow-500 to-yellow-600",
      iconColor: "text-yellow-600"
    },
    {
      title: "Kitchen Display",
      description: "Send orders directly to kitchen screens",
      icon: <FiMonitor />,
      features: ["Order Queue", "Prep Time Tracking", "Course Management", "KOT Printing"],
      color: "from-green-500 to-green-600",
      iconColor: "text-green-600"
    },
    {
      title: "Billing & Payments",
      description: "Fast, secure payment processing",
      icon: <FiCreditCard />,
      features: ["Split Bills", "Multiple Payment Modes", "Tips Management", "Invoice Printing"],
      color: "from-blue-500 to-blue-600",
      iconColor: "text-blue-600"
    },
    {
      title: "Inventory Management",
      description: "Track ingredients and automate reordering",
      icon: <FiPackage />,
      features: ["Stock Tracking", "Low Stock Alerts", "Recipe Costing", "Purchase Orders"],
      color: "from-purple-500 to-purple-600",
      iconColor: "text-purple-600"
    },
    {
      title: "Employee Management",
      description: "Manage staff roles, shifts, and performance",
      icon: <FiUsers />,
      features: ["Clock In/Out", "Role-based Access", "Shift Scheduling", "Performance Reports"],
      color: "from-pink-500 to-pink-600",
      iconColor: "text-pink-600"
    },
    {
      title: "Customer Management",
      description: "Build loyalty with customer profiles",
      icon: <FiUserCheck />,
      features: ["Customer Database", "Order History", "Loyalty Program", "Feedback"],
      color: "from-indigo-500 to-indigo-600",
      iconColor: "text-indigo-600"
    },
    {
      title: "Delivery Integration",
      description: "Connect with Zomato, Swiggy, UberEats",
      icon: <FiTruck />,
      features: ["Auto Order Sync", "Delivery Tracking", "Commission Tracking", "Partner Management"],
      color: "from-teal-500 to-teal-600",
      iconColor: "text-teal-600"
    },
    {
      title: "Reporting & Analytics",
      description: "Real-time insights into your business",
      icon: <FiBarChart2 />,
      features: ["Sales Reports", "Popular Items", "Peak Hours", "Profit Analysis"],
      color: "from-cyan-500 to-cyan-600",
      iconColor: "text-cyan-600"
    },
    {
      title: "Reservation System",
      description: "Online and walk-in reservation management",
      icon: <FiCalendar />,
      features: ["Online Booking", "Table Allocation", "Reminders", "Waitlist"],
      color: "from-amber-500 to-amber-600",
      iconColor: "text-amber-600"
    },
    {
      title: "Tax & Compliance",
      description: "Automatic tax calculation and reporting",
      icon: <FiFileText />,
      features: ["GST/VAT Calculation", "Tax Reports", "Invoice Compliance", "Audit Trail"],
      color: "from-emerald-500 to-emerald-600",
      iconColor: "text-emerald-600"
    }
  ];

  const features = [
    { title: "Offline Mode", icon: <FiCloud />, color: "from-orange-500 to-orange-600", desc: "Works without internet, auto-syncs when online" },
    { title: "Split Bills", icon: <FiDollarSign />, color: "from-red-500 to-red-600", desc: "Easy bill splitting for large groups" },
    { title: "Quick Service", icon: <FiZap />, color: "from-yellow-500 to-yellow-600", desc: "Faster order processing and billing" },
    { title: "Multi-outlet", icon: <FiGlobe />, color: "from-green-500 to-green-600", desc: "Manage multiple restaurant locations" },
    { title: "Real-time Sync", icon: <FiDatabase />, color: "from-blue-500 to-blue-600", desc: "Instant data sync across devices" },
    { title: "QR Code Ordering", icon: <FiGrid />, color: "from-purple-500 to-purple-600", desc: "Customers scan and order from table" },
    { title: "Loyalty Program", icon: <FiStar />, color: "from-pink-500 to-pink-600", desc: "Reward repeat customers" },
    { title: "Table-side Ordering", icon: <FiCpu />, color: "from-indigo-500 to-indigo-600", desc: "Order from handheld devices" }
  ];

  const benefits = [
    { title: "Faster Service", icon: <FiZap />, color: "from-orange-500 to-orange-600", desc: "Reduce wait times by 40%" },
    { title: "Reduce Errors", icon: <FiCheckCircle />, color: "from-red-500 to-red-600", desc: "Eliminate manual entry mistakes" },
    { title: "Increase Sales", icon: <FiTrendingUp />, color: "from-yellow-500 to-yellow-600", desc: "Upsell with smart suggestions" },
    { title: "Better Control", icon: <FiShield />, color: "from-green-500 to-green-600", desc: "Complete oversight of operations" },
    { title: "Inventory Savings", icon: <FiDollarSign />, color: "from-blue-500 to-blue-600", desc: "Reduce waste by 25%" },
    { title: "Happy Customers", icon: <FiHeart />, color: "from-purple-500 to-purple-600", desc: "Improved dining experience" }
  ];

  const integrations = [
    { name: "Zomato", icon: "🍽️", color: "from-red-500 to-red-600", bg: "bg-red-100", textColor: "text-red-600" },
    { name: "Swiggy", icon: "🛵", color: "from-orange-500 to-orange-600", bg: "bg-orange-100", textColor: "text-orange-600" },
    { name: "UberEats", icon: "🚗", color: "from-blue-500 to-blue-600", bg: "bg-blue-100", textColor: "text-blue-600" },
    { name: "Google Maps", icon: "📍", color: "from-green-500 to-green-600", bg: "bg-green-100", textColor: "text-green-600" },
    { name: "QuickBooks", icon: "📊", color: "from-purple-500 to-purple-600", bg: "bg-purple-100", textColor: "text-purple-600" },
    { name: "Payment Gateways", icon: "💳", color: "from-indigo-500 to-indigo-600", bg: "bg-indigo-100", textColor: "text-indigo-600" },
    { name: "Kitchen Printers", icon: "🖨️", color: "from-teal-500 to-teal-600", bg: "bg-teal-100", textColor: "text-teal-600" },
    { name: "Inventory Systems", icon: "📦", color: "from-amber-500 to-amber-600", bg: "bg-amber-100", textColor: "text-amber-600" }
  ];

  const restaurantTypes = [
    { name: "Fine Dining", icon: "🍷", color: "from-purple-500 to-purple-600", bg: "bg-purple-100", textColor: "text-purple-600" },
    { name: "Casual Dining", icon: "🍔", color: "from-orange-500 to-orange-600", bg: "bg-orange-100", textColor: "text-orange-600" },
    { name: "Fast Food", icon: "🍟", color: "from-red-500 to-red-600", bg: "bg-red-100", textColor: "text-red-600" },
    { name: "Cafe", icon: "☕", color: "from-brown-500 to-brown-600", bg: "bg-amber-100", textColor: "text-amber-600" },
    { name: "Bar & Pub", icon: "🍺", color: "from-yellow-500 to-yellow-600", bg: "bg-yellow-100", textColor: "text-yellow-600" },
    { name: "Food Truck", icon: "🚚", color: "from-green-500 to-green-600", bg: "bg-green-100", textColor: "text-green-600" },
    { name: "Cloud Kitchen", icon: "☁️", color: "from-blue-500 to-blue-600", bg: "bg-blue-100", textColor: "text-blue-600" },
    { name: "Quick Service", icon: "⚡", color: "from-cyan-500 to-cyan-600", bg: "bg-cyan-100", textColor: "text-cyan-600" }
  ];

  const hardware = [
    { name: "Touch Screen", icon: "🖥️", color: "from-blue-500 to-blue-600", bg: "bg-blue-100" },
    { name: "Receipt Printer", icon: "🧾", color: "from-purple-500 to-purple-600", bg: "bg-purple-100" },
    { name: "Cash Drawer", icon: "💰", color: "from-green-500 to-green-600", bg: "bg-green-100" },
    { name: "Barcode Scanner", icon: "📷", color: "from-orange-500 to-orange-600", bg: "bg-orange-100" },
    { name: "Kitchen Display", icon: "📺", color: "from-red-500 to-red-600", bg: "bg-red-100" },
    { name: "Handheld Device", icon: "📱", color: "from-indigo-500 to-indigo-600", bg: "bg-indigo-100" },
    { name: "Card Reader", icon: "💳", color: "from-teal-500 to-teal-600", bg: "bg-teal-100" },
    { name: "Customer Display", icon: "🖥️", color: "from-cyan-500 to-cyan-600", bg: "bg-cyan-100" }
  ];

  const filterTabs = [
    { id: "all", name: "All Modules", icon: "📱" },
    { id: "front", name: "Front of House", icon: "🍽️" },
    { id: "back", name: "Back of House", icon: "🍳" },
    { id: "management", name: "Management", icon: "📊" }
  ];

  const filteredModules = activeTab === "all" 
    ? posModules 
    : activeTab === "front"
      ? posModules.filter(m => ["Order Management", "Table Management", "Billing & Payments", "Customer Management", "Reservation System"].includes(m.title))
      : activeTab === "back"
        ? posModules.filter(m => ["Kitchen Display", "Inventory Management", "Menu Management"].includes(m.title))
        : posModules.filter(m => ["Employee Management", "Reporting & Analytics", "Delivery Integration", "Tax & Compliance"].includes(m.title));

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
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-600 to-yellow-600"></div>
          
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
            🍔
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
            🍕
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
            🍽️
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
            <span className="bg-gradient-to-r from-white via-orange-100 to-yellow-100 bg-clip-text text-transparent">
              Restaurant POS
            </span>
            <br />
            <span className="text-white text-4xl sm:text-5xl md:text-6xl">
              Software
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
            Streamline your restaurant operations with our powerful POS system.
            <br className="hidden sm:block" />
            250+ restaurants trust us for faster service and better management.
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
              className="px-8 py-4 bg-white text-orange-600 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
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
              Book a Demo
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


      {/* Hardware Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
                Compatible Hardware
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Works with all standard restaurant hardware
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4"
          >
            {hardware.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`${item.bg} rounded-xl p-4 sm:p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group`}
              >
                <div className={`text-3xl sm:text-4xl mb-2 text-gray-700 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-700">{item.name}</div>
                <div className={`mt-2 w-12 h-1 mx-auto bg-gradient-to-r ${item.color} rounded-full`}></div>
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
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
                Key Features
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to run your restaurant efficiently
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
                <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* POS Modules */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
                POS Modules
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive modules for complete restaurant management
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
                    ? "bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white shadow-lg"
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
                <div className={`text-4xl sm:text-5xl mb-4 ${module.iconColor} group-hover:scale-110 transition-transform`}>
                  {module.icon}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-600 transition-all duration-300">
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
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-600"
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
                Why Restaurants Love Us
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Benefits that make a real difference to your business
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
                <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
                Seamless Integrations
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Connects with all your favorite platforms
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4"
          >
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`${integration.bg} rounded-xl p-4 sm:p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group`}
              >
                <div className={`text-3xl sm:text-4xl mb-2 ${integration.textColor} group-hover:scale-110 transition-transform`}>
                  {integration.icon}
                </div>
                <div className={`text-xs sm:text-sm font-semibold ${integration.textColor}`}>{integration.name}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Restaurant Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
                Perfect For All Restaurant Types
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Tailored solutions for every dining concept
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4"
          >
            {restaurantTypes.map((type, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`${type.bg} rounded-xl p-4 sm:p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group`}
              >
                <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {type.icon}
                </div>
                <div className={`text-xs sm:text-sm font-semibold ${type.textColor}`}>{type.name}</div>
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

export default RestaurantPOSSoftware;