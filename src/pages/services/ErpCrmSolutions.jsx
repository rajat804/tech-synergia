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

const ErpCrmSolutions = () => {
  const [activeTab, setActiveTab] = useState("all");

  const stats = [
    {
      number: "180+",
      label: "ERP/CRM Projects",
      icon: <FiDatabase />,
      color: "from-blue-500 to-blue-600",
      suffix: "Delivered",
    },
    {
      number: "97%",
      label: "Client Retention",
      icon: <FiHeart />,
      color: "from-purple-500 to-purple-600",
      suffix: "Rate",
    },
    {
      number: "12+",
      label: "Years Experience",
      icon: <FiClock />,
      color: "from-pink-500 to-pink-600",
      suffix: "Years",
    },
    {
      number: "25+",
      label: "Industries Served",
      icon: <FiGlobe />,
      color: "from-orange-500 to-orange-600",
      suffix: "Verticals",
    },
    {
      number: "75+",
      label: "Implementation Experts",
      icon: <FiUsers />,
      color: "from-green-500 to-green-600",
      suffix: "Team",
    },
    {
      number: "50K+",
      label: "Active Users",
      icon: <FiUserCheck />,
      color: "from-red-500 to-red-600",
      suffix: "Worldwide",
    },
  ];

  const platforms = [
    {
      name: "SAP",
      icon: <FiDatabase />,
      color: "from-blue-500 to-blue-700",
      bg: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      name: "Oracle",
      icon: <FiServer />,
      color: "from-red-500 to-red-700",
      bg: "bg-red-100",
      textColor: "text-red-600",
    },
    {
      name: "Microsoft Dynamics",
      icon: <FiMonitor />,
      color: "from-orange-500 to-orange-700",
      bg: "bg-orange-100",
      textColor: "text-orange-600",
    },
    {
      name: "Salesforce",
      icon: <FiCloud />,
      color: "from-blue-400 to-blue-600",
      bg: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      name: "HubSpot",
      icon: <FiSettings />,
      color: "from-orange-400 to-orange-600",
      bg: "bg-orange-100",
      textColor: "text-orange-600",
    },
    {
      name: "Zoho",
      icon: <FiLayers />,
      color: "from-green-500 to-green-700",
      bg: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      name: "SugarCRM",
      icon: <FiPieChart />,
      color: "from-pink-500 to-pink-700",
      bg: "bg-pink-100",
      textColor: "text-pink-600",
    },
    {
      name: "Odoo",
      icon: <FiGrid />,
      color: "from-purple-500 to-purple-700",
      bg: "bg-purple-100",
      textColor: "text-purple-600",
    },
    {
      name: "Invoice Ninja",
      icon: <FiPackage />,
      color: "from-indigo-500 to-indigo-700",
      bg: "bg-indigo-100",
      textColor: "text-indigo-600",
    },
    {
      name: "QuickBooks",
      icon: <FiCpu />,
      color: "from-green-400 to-green-600",
      bg: "bg-green-100",
      textColor: "text-green-600",
    },
  ];

  const erpModules = [
    {
      title: "Finance & Accounting",
      description:
        "Complete financial management with general ledger, AP/AR, and reporting",
      icon: <FiDollarSign />,
      features: [
        "General Ledger",
        "Accounts Payable",
        "Accounts Receivable",
        "Financial Reporting",
      ],
      color: "from-blue-500 to-blue-600",
      iconColor: "text-blue-600",
    },
    {
      title: "Supply Chain Management",
      description: "End-to-end supply chain visibility and optimization",
      icon: <FiTruck />,
      features: [
        "Procurement",
        "Inventory Management",
        "Warehouse Management",
        "Logistics",
      ],
      color: "from-purple-500 to-purple-600",
      iconColor: "text-purple-600",
    },
    {
      title: "Manufacturing",
      description: "Production planning, scheduling, and quality control",
      icon: <FiPackage />,
      features: [
        "Bill of Materials",
        "Production Scheduling",
        "Quality Control",
        "Shop Floor Control",
      ],
      color: "from-pink-500 to-pink-600",
      iconColor: "text-pink-600",
    },
    {
      title: "Human Resources",
      description: "Employee management, payroll, and talent acquisition",
      icon: <FiUsers />,
      features: [
        "Employee Database",
        "Payroll Processing",
        "Time & Attendance",
        "Performance Reviews",
      ],
      color: "from-orange-500 to-orange-600",
      iconColor: "text-orange-600",
    },
    {
      title: "Sales & Distribution",
      description: "Order management, pricing, and customer delivery",
      icon: <FiTrendingUp />,
      features: [
        "Order Processing",
        "Pricing Management",
        "Shipping",
        "Returns Management",
      ],
      color: "from-green-500 to-green-600",
      iconColor: "text-green-600",
    },
    {
      title: "Procurement",
      description: "Vendor management and purchase order processing",
      icon: <FiBriefcase />,
      features: [
        "Vendor Management",
        "Purchase Orders",
        "RFQ Processing",
        "Contract Management",
      ],
      color: "from-teal-500 to-teal-600",
      iconColor: "text-teal-600",
    },
    {
      title: "Inventory Management",
      description: "Real-time inventory tracking and optimization",
      icon: <FiLayers />,
      features: [
        "Stock Tracking",
        "Reordering",
        "Warehouse Mapping",
        "Inventory Valuation",
      ],
      color: "from-indigo-500 to-indigo-600",
      iconColor: "text-indigo-600",
    },
    {
      title: "Business Intelligence",
      description: "Advanced analytics and reporting dashboards",
      icon: <FiBarChart2 />,
      features: [
        "Custom Dashboards",
        "KPI Tracking",
        "Predictive Analytics",
        "Data Visualization",
      ],
      color: "from-red-500 to-red-600",
      iconColor: "text-red-600",
    },
  ];

  const crmModules = [
    {
      title: "Contact Management",
      description: "Centralized database for all customer interactions",
      icon: <FiUsers />,
      features: [
        "Contact Database",
        "Interaction History",
        "Customer Segmentation",
        "Duplicate Management",
      ],
      color: "from-blue-500 to-blue-600",
      iconColor: "text-blue-600",
    },
    {
      title: "Sales Force Automation",
      description: "Streamline sales processes and track opportunities",
      icon: <FiTrendingUp />,
      features: [
        "Lead Management",
        "Opportunity Tracking",
        "Sales Pipeline",
        "Quotes & Orders",
      ],
      color: "from-purple-500 to-purple-600",
      iconColor: "text-purple-600",
    },
    {
      title: "Marketing Automation",
      description: "Multi-channel campaign management and tracking",
      icon: <FiMail />,
      features: [
        "Email Campaigns",
        "Social Media Integration",
        "Lead Scoring",
        "Campaign Analytics",
      ],
      color: "from-pink-500 to-pink-600",
      iconColor: "text-pink-600",
    },
    {
      title: "Customer Service",
      description: "Support ticket management and service delivery",
      icon: <FiMessageCircle />,
      features: [
        "Ticket Management",
        "Knowledge Base",
        "Service Level Agreements",
        "Customer Portal",
      ],
      color: "from-orange-500 to-orange-600",
      iconColor: "text-orange-600",
    },
    {
      title: "Analytics & Reporting",
      description: "Comprehensive sales and customer analytics",
      icon: <FiPieChart />,
      features: [
        "Sales Forecasting",
        "Customer Insights",
        "Performance Dashboards",
        "ROI Analysis",
      ],
      color: "from-green-500 to-green-600",
      iconColor: "text-green-600",
    },
    {
      title: "Lead Management",
      description: "Capture, qualify, and nurture leads effectively",
      icon: <FiUserPlus />,
      features: [
        "Lead Capture",
        "Lead Scoring",
        "Lead Nurturing",
        "Conversion Tracking",
      ],
      color: "from-teal-500 to-teal-600",
      iconColor: "text-teal-600",
    },
    {
      title: "Partner Management",
      description: "Manage channel partners and resellers",
      icon: <FiUserCheck />,
      features: [
        "Partner Portal",
        "Commission Tracking",
        "Deal Registration",
        "Partner Training",
      ],
      color: "from-indigo-500 to-indigo-600",
      iconColor: "text-indigo-600",
    },
    {
      title: "Document Management",
      description: "Centralized storage for customer documents",
      icon: <FiFileText />,
      features: [
        "Document Repository",
        "Version Control",
        "Access Permissions",
        "E-signatures",
      ],
      color: "from-red-500 to-red-600",
      iconColor: "text-red-600",
    },
  ];

  const benefits = [
    {
      title: "Unified Data",
      icon: <FiDatabase />,
      color: "from-blue-500 to-blue-600",
      desc: "Single source of truth for all business data",
    },
    {
      title: "Process Automation",
      icon: <FiZap />,
      color: "from-purple-500 to-purple-600",
      desc: "Automate repetitive tasks and workflows",
    },
    {
      title: "Real-time Insights",
      icon: <FiBarChart2 />,
      color: "from-pink-500 to-pink-600",
      desc: "Make data-driven decisions instantly",
    },
    {
      title: "Scalability",
      icon: <FiTrendingUp />,
      color: "from-orange-500 to-orange-600",
      desc: "Grow your business without limitations",
    },
    {
      title: "Security & Compliance",
      icon: <FiShield />,
      color: "from-green-500 to-green-600",
      desc: "Enterprise-grade data protection",
    },
    {
      title: "Integration Ready",
      icon: <FiGrid />,
      color: "from-teal-500 to-teal-600",
      desc: "Seamless integration with existing systems",
    },
  ];

  const industries = [
    {
      name: "Manufacturing",
      icon: "🏭",
      color: "from-blue-500 to-blue-600",
      bg: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      name: "Retail",
      icon: "🛍️",
      color: "from-purple-500 to-purple-600",
      bg: "bg-purple-100",
      textColor: "text-purple-600",
    },
    {
      name: "Healthcare",
      icon: "🏥",
      color: "from-pink-500 to-pink-600",
      bg: "bg-pink-100",
      textColor: "text-pink-600",
    },
    {
      name: "Financial Services",
      icon: "💰",
      color: "from-orange-500 to-orange-600",
      bg: "bg-orange-100",
      textColor: "text-orange-600",
    },
    {
      name: "Logistics",
      icon: "🚚",
      color: "from-green-500 to-green-600",
      bg: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      name: "Real Estate",
      icon: "🏠",
      color: "from-teal-500 to-teal-600",
      bg: "bg-teal-100",
      textColor: "text-teal-600",
    },
    {
      name: "Education",
      icon: "📚",
      color: "from-indigo-500 to-indigo-600",
      bg: "bg-indigo-100",
      textColor: "text-indigo-600",
    },
    {
      name: "Energy",
      icon: "⚡",
      color: "from-red-500 to-red-600",
      bg: "bg-red-100",
      textColor: "text-red-600",
    },
  ];

  const filterTabs = [
    { id: "all", name: "All Solutions", icon: "🔧" },
    { id: "erp", name: "ERP Modules", icon: "📦" },
    { id: "crm", name: "CRM Modules", icon: "👥" },
  ];

  const filteredServices =
    activeTab === "all"
      ? [...erpModules, ...crmModules]
      : activeTab === "erp"
        ? erpModules
        : crmModules;

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
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700"></div>

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
            📊
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
            👥
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
            className="absolute top-1/3 right-1/4 text-6xl opacity-20"
          >
            🔄
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center text-white">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
            className="w-28 h-28 mx-auto mb-8 bg-white/20 backdrop-blur-lg rounded-3xl flex items-center justify-center border border-white/30 shadow-2xl"
          >
            <FiGrid className="text-6xl" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent">
              ERP & CRM
            </span>
            <br />
            <span className="text-white text-4xl sm:text-5xl md:text-6xl">
              Solutions
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
            Integrated business management systems that streamline operations
            <br className="hidden sm:block" />
            and enhance customer relationships. 180+ successful implementations.
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
              className="px-8 py-4 bg-white text-emerald-600 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <span className="flex items-center justify-center gap-2">
                Explore Solutions
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              System Assessment
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
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Leading Platforms We Implement
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Expertise across all major ERP and CRM platforms
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 sm:gap-5"
          >
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`${platform.bg} rounded-xl p-4 sm:p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group`}
              >
                <div
                  className={`text-3xl sm:text-4xl mb-2 ${platform.textColor} group-hover:scale-110 transition-transform`}
                >
                  {platform.icon}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-700">
                  {platform.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Industries We Transform
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Domain expertise across diverse industry verticals
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`${industry.bg} rounded-xl p-4 sm:p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group`}
              >
                <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <div
                  className={`text-xs sm:text-sm font-semibold ${industry.textColor}`}
                >
                  {industry.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
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
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Key Business Benefits
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Transform your operations with integrated business solutions
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
                  className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r ${benefit.color} text-white text-2xl mb-4`}
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

      {/* ERP & CRM Modules */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Comprehensive Modules
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Complete ERP and CRM solutions for every business need
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
                    ? "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-lg"
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
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 transition-all duration-300">
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
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600"
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

      {/* Process Section */}
      <ProcessSection />

      {/* Testimonials */}
      <ClientTestimonials />

      {/* Contact with us */}
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

export default ErpCrmSolutions;
