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
  FiTool,
  FiMessageSquare,
  FiAlertTriangle,
  FiActivity,
  FiBell,
} from "react-icons/fi";

import {
  SiJira,
  SiGrafana,
  SiPrometheus,
  SiKibana,
  SiSentry,
  SiDatadog,
  SiPagerduty,
  SiZendesk,
  SiNewrelic,
  SiStatuspage,
} from "react-icons/si";
import ProcessSection from "../../component/services/ProcessSection";
import ClientTestimonials from "../../component/services/ClientTestimonials";
import ContactWithUs from "../../component/services/ContactWithUs";

const MaintenanceAndSupport = () => {
  const [activeTab, setActiveTab] = useState("all");

  const stats = [
    {
      number: "24/7",
      label: "Support Available",
      icon: <FiClock />,
      color: "from-blue-500 to-blue-600",
      suffix: "Round the Clock",
    },
    {
      number: "<15min",
      label: "Response Time",
      icon: <FiZap />,
      color: "from-purple-500 to-purple-600",
      suffix: "Average",
    },
    {
      number: "500+",
      label: "Systems Maintained",
      icon: <FiServer />,
      color: "from-pink-500 to-pink-600",
      suffix: "Active",
    },
    {
      number: "99.9%",
      label: "Uptime Guarantee",
      icon: <FiShield />,
      color: "from-orange-500 to-orange-600",
      suffix: "SLA",
    },
    {
      number: "50+",
      label: "Support Experts",
      icon: <FiUsers />,
      color: "from-green-500 to-green-600",
      suffix: "Team",
    },
    {
      number: "8+",
      label: "Years Experience",
      icon: <FiAward />,
      color: "from-red-500 to-red-600",
      suffix: "In Service",
    },
  ];

  const maintenanceServices = [
    {
      title: "Preventive Maintenance",
      description:
        "Proactive monitoring and regular health checks to prevent issues before they occur",
      icon: <FiShield />,
      features: [
        "Regular System Audits",
        "Performance Optimization",
        "Security Patches",
        "Health Monitoring",
      ],
      color: "from-blue-500 to-blue-600",
      iconColor: "text-blue-600",
    },
    {
      title: "Corrective Maintenance",
      description: "Quick resolution of bugs, errors, and system malfunctions",
      icon: <FiSettings />,
      features: [
        "Bug Fixes",
        "Error Resolution",
        "Code Debugging",
        "Issue Tracking",
      ],
      color: "from-purple-500 to-purple-600",
      iconColor: "text-purple-600",
    },
    {
      title: "Adaptive Maintenance",
      description:
        "Keeping your software compatible with evolving technologies",
      icon: <FiTrendingUp />,
      features: [
        "Technology Updates",
        "Platform Migration",
        "API Updates",
        "Framework Upgrades",
      ],
      color: "from-pink-500 to-pink-600",
      iconColor: "text-pink-600",
    },
    {
      title: "Perfective Maintenance",
      description: "Enhancing existing features and adding new capabilities",
      icon: <FiStar />,
      features: [
        "Feature Enhancements",
        "UI/UX Improvements",
        "Performance Tuning",
        "New Functionality",
      ],
      color: "from-orange-500 to-orange-600",
      iconColor: "text-orange-600",
    },
    {
      title: "Security Maintenance",
      description:
        "Continuous security monitoring and vulnerability management",
      icon: <FiShield />,
      features: [
        "Security Audits",
        "Vulnerability Patching",
        "Penetration Testing",
        "Compliance Checks",
      ],
      color: "from-green-500 to-green-600",
      iconColor: "text-green-600",
    },
    {
      title: "Database Maintenance",
      description:
        "Optimizing database performance and ensuring data integrity",
      icon: <FiDatabase />,
      features: [
        "Performance Tuning",
        "Backup Management",
        "Data Cleanup",
        "Query Optimization",
      ],
      color: "from-teal-500 to-teal-600",
      iconColor: "text-teal-600",
    },
  ];

  const supportLevels = [
    {
      title: "Basic Support",
      description:
        "Essential support for stable systems with minimal requirements",
      icon: <FiHome />,
      features: [
        "Email Support",
        "Business Hours",
        "48hr Response",
        "Knowledge Base",
      ],
      color: "from-blue-500 to-blue-600",
      iconColor: "text-blue-600",
    },
    {
      title: "Standard Support",
      description: "Comprehensive support for growing businesses",
      icon: <FiBriefcase />,
      features: [
        "Email & Chat",
        "12/5 Support",
        "24hr Response",
        "Phone Support",
      ],
      color: "from-purple-500 to-purple-600",
      iconColor: "text-purple-600",
    },
    {
      title: "Premium Support",
      description: "Priority support for mission-critical systems",
      icon: <FiStar />,
      features: [
        "24/7 Support",
        "1hr Response",
        "Dedicated Manager",
        "SLA Guarantee",
      ],
      color: "from-pink-500 to-pink-600",
      iconColor: "text-pink-600",
    },
    {
      title: "Enterprise Support",
      description: "White-glove service for large organizations",
      icon: <FiGlobe />,
      features: [
        "Dedicated Team",
        "15min Response",
        "On-site Available",
        "Custom SLA",
      ],
      color: "from-orange-500 to-orange-600",
      iconColor: "text-orange-600",
    },
  ];

  const monitoringFeatures = [
    {
      title: "24/7 Server Monitoring",
      icon: <FiServer />,
      color: "from-blue-500 to-blue-600",
      desc: "Continuous server health checks",
    },
    {
      title: "Application Performance",
      icon: <FiBarChart2 />,
      color: "from-purple-500 to-purple-600",
      desc: "Real-time performance metrics",
    },
    {
      title: "Security Monitoring",
      icon: <FiShield />,
      color: "from-pink-500 to-pink-600",
      desc: "Threat detection and prevention",
    },
    {
      title: "Database Monitoring",
      icon: <FiDatabase />,
      color: "from-orange-500 to-orange-600",
      desc: "Query performance and optimization",
    },
    {
      title: "Network Monitoring",
      icon: <FiGlobe />,
      color: "from-green-500 to-green-600",
      desc: "Bandwidth and connectivity",
    },
    {
      title: "Log Analysis",
      icon: <FiFileText />,
      color: "from-teal-500 to-teal-600",
      desc: "Centralized log management",
    },
    {
      title: "Uptime Monitoring",
      icon: <FiClock />,
      color: "from-indigo-500 to-indigo-600",
      desc: "99.9% uptime tracking",
    },
    {
      title: "Error Tracking",
      icon: <FiMessageCircle />,
      color: "from-red-500 to-red-600",
      desc: "Real-time error alerts",
    },
  ];

  const benefits = [
    {
      title: "Reduced Downtime",
      icon: <FiZap />,
      color: "from-blue-500 to-blue-600",
      desc: "Minimize business disruption with proactive monitoring",
    },
    {
      title: "Cost Efficiency",
      icon: <FiDollarSign />,
      color: "from-purple-500 to-purple-600",
      desc: "Predictable costs and reduced emergency fixes",
    },
    {
      title: "Enhanced Security",
      icon: <FiShield />,
      color: "from-pink-500 to-pink-600",
      desc: "Continuous security updates and patches",
    },
    {
      title: "Peace of Mind",
      icon: <FiHeart />,
      color: "from-orange-500 to-orange-600",
      desc: "Focus on your business while we handle tech",
    },
    {
      title: "Expert Team",
      icon: <FiUsers />,
      color: "from-green-500 to-green-600",
      desc: "Access to experienced support engineers",
    },
    {
      title: "Scalability",
      icon: <FiTrendingUp />,
      color: "from-teal-500 to-teal-600",
      desc: "Support that grows with your business",
    },
  ];

  const tools = [
    {
      name: "Zendesk",
      icon: <SiZendesk size={24} />,
      color: "from-blue-500 to-blue-600",
      bg: "bg-blue-100",
    },
    {
      name: "Jira",
      icon: <SiJira size={24} />,
      color: "from-blue-400 to-blue-600",
      bg: "bg-blue-100",
    },
    {
      name: "Slack",
      icon: <FiMessageSquare size={24} />,
      color: "from-purple-500 to-purple-700",
      bg: "bg-purple-100",
    },
    {
      name: "Datadog",
      icon: <SiDatadog size={24} />,
      color: "from-purple-400 to-purple-600",
      bg: "bg-purple-100",
    },
    {
      name: "New Relic",
      icon: <SiNewrelic size={24} />,
      color: "from-teal-500 to-teal-700",
      bg: "bg-teal-100",
    },
    {
      name: "PagerDuty",
      icon: <SiPagerduty size={24} />,
      color: "from-green-500 to-green-700",
      bg: "bg-green-100",
    },
    {
      name: "StatusPage",
      icon: <SiStatuspage size={24} />,
      color: "from-blue-500 to-blue-700",
      bg: "bg-blue-100",
    },
    {
      name: "Sentry",
      icon: <SiSentry size={24} />,
      color: "from-red-500 to-red-700",
      bg: "bg-red-100",
    },
    {
      name: "Grafana",
      icon: <SiGrafana size={24} />,
      color: "from-orange-400 to-orange-600",
      bg: "bg-orange-100",
    },
    {
      name: "Prometheus",
      icon: <SiPrometheus size={24} />,
      color: "from-red-400 to-red-600",
      bg: "bg-red-100",
    },
    {
      name: "Kibana",
      icon: <SiKibana size={24} />,
      color: "from-pink-500 to-pink-700",
      bg: "bg-pink-100",
    },
    {
      name: "Nagios",
      icon: <FiBell size={24} />,
      color: "from-green-600 to-green-800",
      bg: "bg-green-100",
    },
  ];

  const filterTabs = [
    { id: "all", name: "All Services", icon: "🔧" },
    { id: "maintenance", name: "Maintenance", icon: "🛠️" },
    { id: "support", name: "Support", icon: "🎧" },
  ];

  const filteredServices =
    activeTab === "all"
      ? [...maintenanceServices, ...supportLevels]
      : activeTab === "maintenance"
        ? maintenanceServices
        : supportLevels;

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

  // Add missing FiLock since it wasn't in the imports
  //   const FiLock = FiShield; // Using FiShield as a substitute

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600"></div>

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
            🛠️
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
            🎧
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
            <FiSettings className="text-6xl" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              Maintenance &
            </span>
            <br />
            <span className="text-white text-4xl sm:text-5xl md:text-6xl">
              Support Services
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
            Keep your systems running smoothly with 24/7 monitoring and expert
            support.
            <br className="hidden sm:block" />
            Average response time under 15 minutes. 500+ systems actively
            maintained.
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
              className="px-8 py-4 bg-white text-cyan-600 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <span className="flex items-center justify-center gap-2">
                View Support Plans
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Get 24/7 Support
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

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Why Choose Our Support
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive maintenance and support for peace of mind
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

      {/* 24/7 Monitoring Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                24/7 Monitoring Capabilities
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Continuous monitoring to ensure optimal performance
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4"
          >
            {monitoringFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -3 }}
                className="bg-gray-50 rounded-xl p-4 text-center shadow hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center">
                  <div
                    className={`w-14 h-14 flex items-center justify-center rounded-xl mb-3 
  bg-gradient-to-br ${feature.color} 
  text-white shadow-md 
  group-hover:scale-110 transition-all duration-300`}
                  >
                    {feature.icon}
                  </div>
                </div>
                <div className="text-sm font-semibold text-gray-700 mb-1">
                  {feature.title}
                </div>
                <p className="text-xs text-gray-500">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Maintenance & Support Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive maintenance and support solutions
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
                    ? "bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white shadow-lg"
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
                <div
                  className={`text-4xl sm:text-5xl mb-4 ${service.iconColor} group-hover:scale-110 transition-transform`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-teal-600 transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1 mb-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-2 text-xs text-gray-500"
                    >
                      <FiCheckCircle
                        className={`w-3 h-3 ${service.iconColor}`}
                      />
                      <span className="truncate">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <motion.a
                  href="#"
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-teal-600"
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

      {/* Support Tools */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Tools We Use
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Industry-leading tools for effective support and monitoring
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`${tool.bg} rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group`}
              >
                <div className="flex justify-center">
                  <div
                    className={`w-14 h-14 flex items-center justify-center rounded-xl mb-3 
  bg-gradient-to-br ${tool.color} 
  text-white shadow-md 
  group-hover:scale-110 transition-all duration-300`}
                  >
                    {tool.icon}
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-700">
                  {tool.name}
                </div>
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

export default MaintenanceAndSupport;
