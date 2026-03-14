import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  FiCode,
  FiSettings,
  FiDatabase,
  FiCloud,
  FiShield,
  FiUsers,
  FiClock,
  FiAward,
  FiCheckCircle,
  FiArrowRight,
  FiStar,
  FiHeart,
  FiZap,
  FiGlobe,
  FiLayers,
  FiPackage,
  FiCpu,
  FiTrendingUp,
  FiBarChart2,
  FiLock,
  FiMail,
  FiSmartphone,
  FiMonitor,
  FiServer,
  FiGitBranch,
  FiTerminal,
  FiBox,
  FiGrid,
  FiSliders,
  FiLayout,
} from "react-icons/fi";

import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiDotnet,
  SiPhp,
  SiLaravel,
  SiDjango,
  SiFlask,
  SiSpringboot,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiTensorflow,
  SiPytorch,
} from "react-icons/si";

import { FaAws, FaJava, FaMicrosoft } from "react-icons/fa";
import ProcessSection from "../../component/services/ProcessSection";
import ClientTestimonials from "../../component/services/ClientTestimonials";
import ContactWithUs from "../../component/services/ContactWithUs";

const CustomSoftwareDevelopment = () => {
  const [activeTab, setActiveTab] = useState("all");

  const stats = [
    {
      number: "250+",
      label: "Software Projects",
      icon: <FiCode />,
      color: "from-blue-500 to-blue-600",
      suffix: "Delivered",
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      icon: <FiHeart />,
      color: "from-purple-500 to-purple-600",
      suffix: "Rating",
    },
    {
      number: "10+",
      label: "Years Experience",
      icon: <FiClock />,
      color: "from-pink-500 to-pink-600",
      suffix: "Years",
    },
    {
      number: "20+",
      label: "Industries Served",
      icon: <FiGlobe />,
      color: "from-orange-500 to-orange-600",
      suffix: "Industries",
    },
    {
      number: "60+",
      label: "Software Engineers",
      icon: <FiUsers />,
      color: "from-green-500 to-green-600",
      suffix: "Team",
    },
    {
      number: "500K+",
      label: "Hours Coded",
      icon: <FiTerminal />,
      color: "from-red-500 to-red-600",
      suffix: "Development",
    },
  ];

  const technologies = [
    {
      name: "React",
      icon: <SiReact />,
      bg: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs />,
      bg: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      name: "Python",
      icon: <SiPython />,
      bg: "bg-yellow-100",
      textColor: "text-yellow-600",
    },
    {
      name: "Java",
      icon: <FaJava />,
      bg: "bg-orange-100",
      textColor: "text-orange-600",
    },
    {
      name: ".NET",
      icon: <SiDotnet />,
      bg: "bg-purple-100",
      textColor: "text-purple-600",
    },
    {
      name: "PHP",
      icon: <SiPhp />,
      bg: "bg-indigo-100",
      textColor: "text-indigo-600",
    },
    {
      name: "Laravel",
      icon: <SiLaravel />,
      bg: "bg-red-100",
      textColor: "text-red-600",
    },
    {
      name: "Django",
      icon: <SiDjango />,
      bg: "bg-green-100",
      textColor: "text-green-700",
    },
    {
      name: "Spring Boot",
      icon: <SiSpringboot />,
      bg: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      bg: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
      bg: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      bg: "bg-orange-100",
      textColor: "text-orange-600",
    },
    {
      name: "Redis",
      icon: <SiRedis />,
      bg: "bg-red-100",
      textColor: "text-red-600",
    },
    {
      name: "Docker",
      icon: <SiDocker />,
      bg: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      name: "Kubernetes",
      icon: <SiKubernetes />,
      bg: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      name: "AWS",
      icon: <FaAws />,
      bg: "bg-orange-100",
      textColor: "text-orange-600",
    },
    {
      name: "Google Cloud",
      icon: <SiGooglecloud />,
      bg: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      name: "Azure",
      icon: <FaMicrosoft />,
      bg: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      name: "TensorFlow",
      icon: <SiTensorflow />,
      bg: "bg-orange-100",
      textColor: "text-orange-600",
    },
    {
      name: "PyTorch",
      icon: <SiPytorch />,
      bg: "bg-red-100",
      textColor: "text-red-600",
    },
  ];

  const services = [
    {
      title: "Enterprise Software",
      description:
        "Scalable, secure software solutions for large organizations",
      icon: <FiServer />,
      features: [
        "ERP Systems",
        "CRM Platforms",
        "HR Management",
        "Supply Chain",
      ],
      color: "from-blue-500 to-blue-600",
      iconColor: "text-blue-600",
    },
    {
      title: "SaaS Applications",
      description: "Cloud-based software as a service platforms",
      icon: <FiCloud />,
      features: [
        "Multi-tenancy",
        "Subscription Billing",
        "User Management",
        "Analytics",
      ],
      color: "from-purple-500 to-purple-600",
      iconColor: "text-purple-600",
    },
    {
      title: "Business Automation",
      description: "Streamline operations with custom automation solutions",
      icon: <FiZap />,
      features: [
        "Workflow Automation",
        "Process Optimization",
        "Task Scheduling",
        "Reporting",
      ],
      color: "from-pink-500 to-pink-600",
      iconColor: "text-pink-600",
    },
    {
      title: "Data Management",
      description: "Custom databases and data processing systems",
      icon: <FiDatabase />,
      features: [
        "Data Warehousing",
        "ETL Pipelines",
        "Real-time Analytics",
        "Data Visualization",
      ],
      color: "from-orange-500 to-orange-600",
      iconColor: "text-orange-600",
    },
    {
      title: "API Development",
      description: "Robust RESTful and GraphQL APIs",
      icon: <FiGitBranch />,
      features: ["REST APIs", "GraphQL", "API Gateway", "Documentation"],
      color: "from-green-500 to-green-600",
      iconColor: "text-green-600",
    },
    {
      title: "Microservices",
      description: "Modular, scalable microservices architecture",
      icon: <FiGrid />,
      features: [
        "Service Discovery",
        "Load Balancing",
        "Containerization",
        "Orchestration",
      ],
      color: "from-teal-500 to-teal-600",
      iconColor: "text-teal-600",
    },
    {
      title: "Legacy Modernization",
      description: "Transform legacy systems into modern applications",
      icon: <FiSettings />,
      features: [
        "Code Migration",
        "Database Upgrade",
        "UI Modernization",
        "Cloud Migration",
      ],
      color: "from-indigo-500 to-indigo-600",
      iconColor: "text-indigo-600",
    },
    {
      title: "AI/ML Integration",
      description: "Intelligent features powered by machine learning",
      icon: <FiCpu />,
      features: [
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision",
        "Recommendation Engines",
      ],
      color: "from-red-500 to-red-600",
      iconColor: "text-red-600",
    },
  ];

  const features = [
    {
      title: "Scalable Architecture",
      icon: <FiLayers />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "High Performance",
      icon: <FiZap />,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Enterprise Security",
      icon: <FiLock />,
      color: "from-pink-500 to-pink-600",
    },
    {
      title: "Cloud Native",
      icon: <FiCloud />,
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Microservices",
      icon: <FiGrid />,
      color: "from-green-500 to-green-600",
    },
    {
      title: "API First",
      icon: <FiGitBranch />,
      color: "from-teal-500 to-teal-600",
    },
    {
      title: "DevOps Ready",
      icon: <FiSettings />,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      title: "Real-time Analytics",
      icon: <FiBarChart2 />,
      color: "from-red-500 to-red-600",
    },
    {
      title: "Multi-platform",
      icon: <FiMonitor />,
      color: "from-cyan-500 to-cyan-600",
    },
    {
      title: "Mobile Ready",
      icon: <FiSmartphone />,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      title: "Third-party Integration",
      icon: <FiPackage />,
      color: "from-amber-500 to-amber-600",
    },
    {
      title: "Automated Testing",
      icon: <FiCheckCircle />,
      color: "from-emerald-500 to-emerald-600",
    },
  ];

  const industries = [
    {
      name: "Healthcare",
      icon: "🏥",
      color: "from-blue-500 to-blue-600",
      bg: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      name: "Finance",
      icon: "💰",
      color: "from-purple-500 to-purple-600",
      bg: "bg-purple-100",
      textColor: "text-purple-600",
    },
    {
      name: "Retail",
      icon: "🛍️",
      color: "from-pink-500 to-pink-600",
      bg: "bg-pink-100",
      textColor: "text-pink-600",
    },
    {
      name: "Manufacturing",
      icon: "🏭",
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
      name: "Education",
      icon: "📚",
      color: "from-teal-500 to-teal-600",
      bg: "bg-teal-100",
      textColor: "text-teal-600",
    },
    {
      name: "Real Estate",
      icon: "🏠",
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
    { id: "enterprise", name: "Enterprise", icon: "🏢" },
    { id: "saas", name: "SaaS", icon: "☁️" },
    { id: "automation", name: "Automation", icon: "⚙️" },
    { id: "data", name: "Data & AI", icon: "📊" },
  ];

  const filteredServices =
    activeTab === "all"
      ? services
      : activeTab === "enterprise"
        ? services.filter((s) =>
            ["Enterprise Software", "Legacy Modernization"].includes(s.title),
          )
        : activeTab === "saas"
          ? services.filter((s) =>
              [
                "SaaS Applications",
                "API Development",
                "Microservices",
              ].includes(s.title),
            )
          : activeTab === "automation"
            ? services.filter((s) =>
                ["Business Automation", "Legacy Modernization"].includes(
                  s.title,
                ),
              )
            : services.filter((s) =>
                ["Data Management", "AI/ML Integration"].includes(s.title),
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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700"></div>

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

          {/* Floating Code Icons */}
          <motion.div
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-20 left-20 text-8xl opacity-20"
          >
            {`{ }`}
          </motion.div>

          <motion.div
            animate={{
              x: [0, -30, 0],
              y: [0, 30, 0],
              rotate: [0, -10, 10, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-20 right-20 text-8xl opacity-20"
          >
            &lt;/&gt;
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute top-1/3 left-1/4 text-6xl opacity-20"
          >
            #!
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center text-white">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
            className="w-28 h-28 mx-auto mb-8 bg-white/20 backdrop-blur-lg rounded-3xl flex items-center justify-center border border-white/30 shadow-2xl"
          >
            <FiCode className="text-6xl" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Custom Software
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
            Tailored software solutions engineered for your unique business
            challenges.
            <br className="hidden sm:block" />
            250+ successful software projects delivered.
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
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
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

      

      {/* Technology Stack */}
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
                Our Technology Stack
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Modern technologies for robust, scalable software solutions
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`${tech.bg} rounded-xl p-3 sm:p-4 text-center shadow hover:shadow-lg transition-all duration-300 cursor-pointer group`}
              >
                <div
                  className={`text-2xl sm:text-3xl mb-2 ${tech.textColor} group-hover:scale-110 transition-transform`}
                >
                  {tech.icon}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-700">
                  {tech.name}
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
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Industries We Serve
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Domain expertise across diverse industries
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

      {/* What We Build */}
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
                Custom Software Solutions
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Tailored software for every business need
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
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
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
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600"
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
                Key Technical Features
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Enterprise-grade features built into every solution
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
                className="bg-gray-50 rounded-xl p-3 sm:p-4 text-center shadow hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div
                  className={`text-2xl sm:text-3xl mb-2 bg-gradient-to-r ${feature.color} p-2 rounded-lg text-white inline-flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  {feature.icon}
                </div>

                <div className="text-xs sm:text-sm font-semibold text-gray-700">
                  {feature.title}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process  */}
      <ProcessSection />
      {/* client */}
      <ClientTestimonials />
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

export default CustomSoftwareDevelopment;
