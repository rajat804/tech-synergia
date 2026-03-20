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

const HRManagement = () => {
  const [activeTab, setActiveTab] = useState("all");

  const stats = [
    { number: "500+", label: "Companies", icon: <FiBriefcase />, color: "from-blue-500 to-blue-600", suffix: "Trust Us" },
    { number: "50K+", label: "Employees", icon: <FiUsers />, color: "from-green-500 to-green-600", suffix: "Managed" },
    { number: "15+", label: "Years", icon: <FiClock />, color: "from-purple-500 to-purple-600", suffix: "Experience" },
    { number: "30+", label: "Countries", icon: <FiGlobe />, color: "from-orange-500 to-orange-600", suffix: "Coverage" },
    { number: "100+", label: "HR Experts", icon: <FiAward />, color: "from-pink-500 to-pink-600", suffix: "Team" },
    { number: "99.9%", label: "Data Accuracy", icon: <FiDatabase />, color: "from-red-500 to-red-600", suffix: "Guaranteed" }
  ];

  const hrModules = [
    {
      title: "Employee Database",
      description: "Centralized repository for all employee information",
      icon: <FiDatabase />,
      features: ["Digital Employee Records", "Document Management", "Skills Database", "Employment History"],
      color: "from-blue-500 to-blue-600",
      iconColor: "text-blue-600"
    },
    {
      title: "Recruitment & ATS",
      description: "Streamlined hiring and applicant tracking",
      icon: <FiUserPlus />,
      features: ["Job Posting", "Applicant Tracking", "Resume Parsing", "Interview Scheduling"],
      color: "from-green-500 to-green-600",
      iconColor: "text-green-600"
    },
    {
      title: "Onboarding",
      description: "Seamless new hire integration",
      icon: <FiUserCheck />,
      features: ["Digital Onboarding", "Task Checklists", "Document Collection", "Welcome Kits"],
      color: "from-purple-500 to-purple-600",
      iconColor: "text-purple-600"
    },
    {
      title: "Time & Attendance",
      description: "Accurate tracking of employee hours",
      icon: <FiClock />,
      features: ["Clock In/Out", "Shift Scheduling", "Overtime Tracking", "Leave Management"],
      color: "from-orange-500 to-orange-600",
      iconColor: "text-orange-600"
    },
    {
      title: "Leave Management",
      description: "Efficient leave request and approval workflow",
      icon: <FiCalendar />,
      features: ["Leave Requests", "Approval Workflow", "Leave Balance", "Holiday Calendar"],
      color: "from-pink-500 to-pink-600",
      iconColor: "text-pink-600"
    },
    {
      title: "Payroll Processing",
      description: "Automated salary and compensation management",
      icon: <FiDollarSign />,
      features: ["Salary Calculation", "Tax Deductions", "Payslip Generation", "Bank Integration"],
      color: "from-teal-500 to-teal-600",
      iconColor: "text-teal-600"
    },
    {
      title: "Performance Management",
      description: "Track and evaluate employee performance",
      icon: <FiTrendingUp />,
      features: ["Goal Setting", "Performance Reviews", "360° Feedback", "Appraisals"],
      color: "from-indigo-500 to-indigo-600",
      iconColor: "text-indigo-600"
    },
    {
      title: "Training & Development",
      description: "Manage employee learning and growth",
      icon: <FiLayers />,
      features: ["Course Catalog", "Training Tracking", "Certifications", "Skill Development"],
      color: "from-cyan-500 to-cyan-600",
      iconColor: "text-cyan-600"
    },
    {
      title: "Benefits Administration",
      description: "Comprehensive benefits management",
      icon: <FiHeart />,
      features: ["Health Insurance", "Retirement Plans", "Wellness Programs", "Benefits Enrollment"],
      color: "from-emerald-500 to-emerald-600",
      iconColor: "text-emerald-600"
    },
    {
      title: "Employee Self-Service",
      description: "Empower employees with self-service portal",
      icon: <FiUsers />,
      features: ["Profile Updates", "Leave Requests", "Payslip Access", "Time Tracking"],
      color: "from-amber-500 to-amber-600",
      iconColor: "text-amber-600"
    },
    {
      title: "Compliance & Reporting",
      description: "Stay compliant with labor laws",
      icon: <FiShield />,
      features: ["Statutory Compliance", "Labor Law Updates", "Audit Trail", "Compliance Reports"],
      color: "from-red-500 to-red-600",
      iconColor: "text-red-600"
    },
    {
      title: "Succession Planning",
      description: "Plan for future leadership needs",
      icon: <FiTrendingUp />,
      features: ["Talent Pool", "Succession Maps", "Readiness Assessment", "Development Plans"],
      color: "from-violet-500 to-violet-600",
      iconColor: "text-violet-600"
    }
  ];

  const features = [
    { title: "Centralized HR Hub", icon: <FiDatabase />, color: "from-blue-500 to-blue-600", desc: "All employee data in one place" },
    { title: "Automated Workflows", icon: <FiZap />, color: "from-green-500 to-green-600", desc: "Streamline HR processes" },
    { title: "Mobile Access", icon: <FiCpu />, color: "from-purple-500 to-purple-600", desc: "HR on the go for everyone" },
    { title: "Analytics Dashboard", icon: <FiBarChart2 />, color: "from-orange-500 to-orange-600", desc: "Real-time HR insights" },
    { title: "Document Management", icon: <FiFileText />, color: "from-pink-500 to-pink-600", desc: "Secure document storage" },
    { title: "Approval Workflows", icon: <FiCheckCircle />, color: "from-teal-500 to-teal-600", desc: "Custom approval processes" },
    { title: "Role-based Access", icon: <FiShield />, color: "from-indigo-500 to-indigo-600", desc: "Secure data access control" },
    { title: "Email Notifications", icon: <FiMail />, color: "from-cyan-500 to-cyan-600", desc: "Automated alerts and updates" }
  ];

  const benefits = [
    { title: "Save Time", icon: <FiClock />, color: "from-blue-500 to-blue-600", desc: "Reduce administrative work by 60%" },
    { title: "Reduce Errors", icon: <FiCheckCircle />, color: "from-green-500 to-green-600", desc: "Eliminate manual data entry mistakes" },
    { title: "Improve Compliance", icon: <FiShield />, color: "from-purple-500 to-purple-600", desc: "Stay compliant with regulations" },
    { title: "Better Decisions", icon: <FiTrendingUp />, color: "from-orange-500 to-orange-600", desc: "Data-driven HR strategies" },
    { title: "Employee Satisfaction", icon: <FiHeart />, color: "from-pink-500 to-pink-600", desc: "Enhanced employee experience" },
    { title: "Cost Efficiency", icon: <FiDollarSign />, color: "from-teal-500 to-teal-600", desc: "Reduce HR operational costs" }
  ];

  const employeeLifecycle = [
    { name: "Recruitment", icon: "🔍", color: "from-blue-500 to-blue-600", bg: "bg-blue-100", textColor: "text-blue-600" },
    { name: "Onboarding", icon: "🚪", color: "from-green-500 to-green-600", bg: "bg-green-100", textColor: "text-green-600" },
    { name: "Training", icon: "📚", color: "from-purple-500 to-purple-600", bg: "bg-purple-100", textColor: "text-purple-600" },
    { name: "Performance", icon: "📈", color: "from-orange-500 to-orange-600", bg: "bg-orange-100", textColor: "text-orange-600" },
    { name: "Payroll", icon: "💰", color: "from-pink-500 to-pink-600", bg: "bg-pink-100", textColor: "text-pink-600" },
    { name: "Benefits", icon: "🎁", color: "from-teal-500 to-teal-600", bg: "bg-teal-100", textColor: "text-teal-600" },
    { name: "Promotion", icon: "⬆️", color: "from-indigo-500 to-indigo-600", bg: "bg-indigo-100", textColor: "text-indigo-600" },
    { name: "Offboarding", icon: "🚪", color: "from-cyan-500 to-cyan-600", bg: "bg-cyan-100", textColor: "text-cyan-600" }
  ];

  const integrations = [
    { name: "Payroll Systems", icon: "💰", color: "from-blue-500 to-blue-600", bg: "bg-blue-100", textColor: "text-blue-600" },
    { name: "Accounting", icon: "📊", color: "from-green-500 to-green-600", bg: "bg-green-100", textColor: "text-green-600" },
    { name: "ERP", icon: "🏢", color: "from-purple-500 to-purple-600", bg: "bg-purple-100", textColor: "text-purple-600" },
    { name: "Calendar", icon: "📅", color: "from-orange-500 to-orange-600", bg: "bg-orange-100", textColor: "text-orange-600" },
    { name: "Email", icon: "📧", color: "from-pink-500 to-pink-600", bg: "bg-pink-100", textColor: "text-pink-600" },
    { name: "Slack", icon: "💬", color: "from-teal-500 to-teal-600", bg: "bg-teal-100", textColor: "text-teal-600" },
    { name: "LinkedIn", icon: "🔗", color: "from-indigo-500 to-indigo-600", bg: "bg-indigo-100", textColor: "text-indigo-600" },
    { name: "Background Check", icon: "🔍", color: "from-cyan-500 to-cyan-600", bg: "bg-cyan-100", textColor: "text-cyan-600" }
  ];

  const filterTabs = [
    { id: "all", name: "All Modules", icon: "📋" },
    { id: "core", name: "Core HR", icon: "👥" },
    { id: "talent", name: "Talent Management", icon: "⭐" },
    { id: "operations", name: "HR Operations", icon: "⚙️" }
  ];

  const filteredModules = activeTab === "all" 
    ? hrModules 
    : activeTab === "core"
      ? hrModules.filter(m => ["Employee Database", "Time & Attendance", "Leave Management", "Employee Self-Service"].includes(m.title))
      : activeTab === "talent"
        ? hrModules.filter(m => ["Recruitment & ATS", "Onboarding", "Performance Management", "Training & Development", "Succession Planning"].includes(m.title))
        : hrModules.filter(m => ["Payroll Processing", "Benefits Administration", "Compliance & Reporting"].includes(m.title));

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
            👥
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
            📋
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
            ⏰
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center text-white">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
            className="w-28 h-28 mx-auto mb-8 bg-white/20 backdrop-blur-lg rounded-3xl flex items-center justify-center border border-white/30 shadow-2xl"
          >
            <FiUsers className="text-6xl" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent">
              HR Management
            </span>
            <br />
            <span className="text-white text-4xl sm:text-5xl md:text-6xl">
              System
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
            Streamline your HR operations with our comprehensive management system.
            <br className="hidden sm:block" />
            500+ companies trust us to manage their 50,000+ employees.
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
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Key Features
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Powerful tools to streamline your HR operations
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

      {/* HR Modules */}
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
                HR Modules
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive modules for complete HR management
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
                <div className={`text-4xl sm:text-5xl mb-4 ${module.iconColor} group-hover:scale-110 transition-transform`}>
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
                Why Choose Our HR System
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Benefits that transform your HR operations
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

      {/* Employee Lifecycle */}
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
                Employee Lifecycle Management
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Complete coverage from hire to retire
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4"
          >
            {employeeLifecycle.map((stage, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`${stage.bg} rounded-xl p-4 sm:p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group`}
              >
                <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {stage.icon}
                </div>
                <div className={`text-xs sm:text-sm font-semibold ${stage.textColor}`}>{stage.name}</div>
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
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Seamless Integrations
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Connect with your existing business tools
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

export default HRManagement;