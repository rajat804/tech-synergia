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

const SoftwareDevelopmentOutsourcing = () => {
  const [activeTab, setActiveTab] = useState("all");

  const stats = [
    {
      number: "200+",
      label: "Projects Outsourced",
      icon: <FiPackage />,
      color: "from-blue-500 to-blue-600",
      suffix: "Delivered",
    },
    {
      number: "98%",
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
      suffix: "In Outsourcing",
    },
    {
      number: "25+",
      label: "Countries Served",
      icon: <FiGlobe />,
      color: "from-orange-500 to-orange-600",
      suffix: "Worldwide",
    },
    {
      number: "150+",
      label: "Dedicated Developers",
      icon: <FiUsers />,
      color: "from-green-500 to-green-600",
      suffix: "Team Members",
    },
    {
      number: "50M+",
      label: "Lines of Code",
      icon: <FiDatabase />,
      color: "from-red-500 to-red-600",
      suffix: "Written",
    },
  ];

  const outsourcingModels = [
    {
      title: "Dedicated Development Team",
      description:
        "Hire a dedicated team that works exclusively on your projects",
      icon: <FiUsers />,
      features: [
        "Full-time Commitment",
        "Direct Communication",
        "Scalable Team",
        "Long-term Partnership",
      ],
      color: "from-blue-500 to-blue-600",
      iconColor: "text-blue-600",
    },
    {
      title: "Project-Based Outsourcing",
      description: "Complete project delivery with fixed scope and timeline",
      icon: <FiPackage />,
      features: [
        "Fixed Price",
        "Defined Timeline",
        "Clear Milestones",
        "Turnkey Solution",
      ],
      color: "from-purple-500 to-purple-600",
      iconColor: "text-purple-600",
    },
    {
      title: "Staff Augmentation",
      description: "Extend your in-house team with skilled developers",
      icon: <FiUserPlus />,
      features: [
        "Skill Gap Filling",
        "Flexible Engagement",
        "Quick Onboarding",
        "Knowledge Transfer",
      ],
      color: "from-pink-500 to-pink-600",
      iconColor: "text-pink-600",
    },
    {
      title: "Build-Operate-Transfer",
      description: "Establish and transfer an offshore development center",
      icon: <FiTrendingUp />,
      features: [
        "Full Setup",
        "Operations Management",
        "Knowledge Transfer",
        "Smooth Transition",
      ],
      color: "from-orange-500 to-orange-600",
      iconColor: "text-orange-600",
    },
    {
      title: "Time & Material",
      description: "Flexible engagement based on actual time and resources",
      icon: <FiClock />,
      features: [
        "Hourly Rates",
        "Agile Approach",
        "Scope Flexibility",
        "Transparent Billing",
      ],
      color: "from-green-500 to-green-600",
      iconColor: "text-green-600",
    },
    {
      title: "MVP Development",
      description: "Rapid development of minimum viable products",
      icon: <FiZap />,
      features: [
        "Fast Time-to-Market",
        "Cost-Effective",
        "Iterative Development",
        "Market Validation",
      ],
      color: "from-teal-500 to-teal-600",
      iconColor: "text-teal-600",
    },
  ];

  const engagementBenefits = [
    {
      title: "Cost Efficiency",
      description:
        "Reduce development costs by 40-60% compared to in-house teams",
      icon: <FiDollarSign />,
      color: "from-blue-500 to-blue-600",
      iconColor: "text-blue-600",
    },
    {
      title: "Access to Talent",
      description: "Tap into a global pool of skilled developers",
      icon: <FiUsers />,
      color: "from-purple-500 to-purple-600",
      iconColor: "text-purple-600",
    },
    {
      title: "Scalability",
      description: "Easily scale your team up or down as needed",
      icon: <FiTrendingUp />,
      color: "from-pink-500 to-pink-600",
      iconColor: "text-pink-600",
    },
    {
      title: "Faster Time-to-Market",
      description: "Accelerate development with dedicated resources",
      icon: <FiZap />,
      color: "from-orange-500 to-orange-600",
      iconColor: "text-orange-600",
    },
    {
      title: "Focus on Core Business",
      description:
        "Concentrate on your core competencies while we handle development",
      icon: <FiBriefcase />,
      color: "from-green-500 to-green-600",
      iconColor: "text-green-600",
    },
    {
      title: "Risk Mitigation",
      description: "Share development risks with experienced partners",
      icon: <FiShield />,
      color: "from-teal-500 to-teal-600",
      iconColor: "text-teal-600",
    },
  ];

  const services = [
    {
      title: "Web Development",
      description: "Custom web applications and enterprise portals",
      icon: <FiMonitor />,
      features: [
        "React/Angular/Vue",
        "Node.js/Python/Java",
        "Responsive Design",
        "Progressive Web Apps",
      ],
      color: "from-blue-500 to-blue-600",
      iconColor: "text-blue-600",
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile solutions",
      icon: <FiCpu />,
      features: ["iOS (Swift)", "Android (Kotlin)", "React Native", "Flutter"],
      color: "from-purple-500 to-purple-600",
      iconColor: "text-purple-600",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud-native applications",
      icon: <FiCloud />,
      features: ["AWS/Azure/GCP", "Microservices", "Serverless", "DevOps"],
      color: "from-pink-500 to-pink-600",
      iconColor: "text-pink-600",
    },
    {
      title: "Enterprise Software",
      description: "Large-scale enterprise applications",
      icon: <FiServer />,
      features: [
        "ERP Systems",
        "CRM Platforms",
        "Custom Portals",
        "Integration",
      ],
      color: "from-orange-500 to-orange-600",
      iconColor: "text-orange-600",
    },
    {
      title: "E-commerce Solutions",
      description: "Online stores and marketplace platforms",
      icon: <FiPackage />,
      features: [
        "Custom Stores",
        "Payment Integration",
        "Inventory Management",
        "Analytics",
      ],
      color: "from-green-500 to-green-600",
      iconColor: "text-green-600",
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent applications and data analytics",
      icon: <FiCpu />,
      features: [
        "Predictive Analytics",
        "NLP",
        "Computer Vision",
        "Recommendation Engines",
      ],
      color: "from-teal-500 to-teal-600",
      iconColor: "text-teal-600",
    },
    {
      title: "DevOps & Infrastructure",
      description: "Automated deployment and infrastructure management",
      icon: <FiSettings />,
      features: [
        "CI/CD Pipelines",
        "Containerization",
        "Infrastructure as Code",
        "Monitoring",
      ],
      color: "from-indigo-500 to-indigo-600",
      iconColor: "text-indigo-600",
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive testing and quality control",
      icon: <FiCheckCircle />,
      features: [
        "Manual Testing",
        "Automation",
        "Performance Testing",
        "Security Testing",
      ],
      color: "from-red-500 to-red-600",
      iconColor: "text-red-600",
    },
  ];

  const whyChooseUs = [
    {
      title: "Expert Team",
      icon: <FiAward />,
      color: "from-blue-500 to-blue-600",
      desc: "150+ senior developers with 5+ years average experience",
    },
    {
      title: "Transparent Process",
      icon: <FiBarChart2 />,
      color: "from-purple-500 to-purple-600",
      desc: "Daily updates, sprint reviews, and transparent reporting",
    },
    {
      title: "Quality Assurance",
      icon: <FiCheckCircle />,
      color: "from-pink-500 to-pink-600",
      desc: "Strict coding standards and comprehensive testing",
    },
    {
      title: "Data Security",
      icon: <FiShield />,
      color: "from-orange-500 to-orange-600",
      desc: "NDA agreements and enterprise-grade security",
    },
    {
      title: "Flexible Engagement",
      icon: <FiSettings />,
      color: "from-green-500 to-green-600",
      desc: "Customized engagement models to suit your needs",
    },
    {
      title: "Time Zone Advantage",
      icon: <FiClock />,
      color: "from-teal-500 to-teal-600",
      desc: "Round-the-clock development with time zone coverage",
    },
  ];

  const industries = [
    {
      name: "Fintech",
      icon: "💰",
      color: "from-blue-500 to-blue-600",
      bg: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      name: "Healthcare",
      icon: "🏥",
      color: "from-purple-500 to-purple-600",
      bg: "bg-purple-100",
      textColor: "text-purple-600",
    },
    {
      name: "E-commerce",
      icon: "🛍️",
      color: "from-pink-500 to-pink-600",
      bg: "bg-pink-100",
      textColor: "text-pink-600",
    },
    {
      name: "Logistics",
      icon: "🚚",
      color: "from-orange-500 to-orange-600",
      bg: "bg-orange-100",
      textColor: "text-orange-600",
    },
    {
      name: "Education",
      icon: "📚",
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
      name: "Manufacturing",
      icon: "🏭",
      color: "from-indigo-500 to-indigo-600",
      bg: "bg-indigo-100",
      textColor: "text-indigo-600",
    },
    {
      name: "Media",
      icon: "📺",
      color: "from-red-500 to-red-600",
      bg: "bg-red-100",
      textColor: "text-red-600",
    },
  ];

  const filterTabs = [
    { id: "all", name: "All Services", icon: "🔧" },
    { id: "web", name: "Web Development", icon: "🌐" },
    { id: "mobile", name: "Mobile Apps", icon: "📱" },
    { id: "enterprise", name: "Enterprise", icon: "🏢" },
  ];

  const filteredServices =
    activeTab === "all"
      ? services
      : activeTab === "web"
        ? services.filter((s) =>
            ["Web Development", "E-commerce Solutions"].includes(s.title),
          )
        : activeTab === "mobile"
          ? services.filter((s) => ["Mobile App Development"].includes(s.title))
          : services.filter((s) =>
              [
                "Enterprise Software",
                "Cloud Solutions",
                "DevOps & Infrastructure",
              ].includes(s.title),
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
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600"></div>

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
            🌐
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
            🤝
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
            {`</>`}
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center text-white">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
            className="w-28 h-28 mx-auto mb-8 bg-white/20 backdrop-blur-lg rounded-3xl flex items-center justify-center border border-white/30 shadow-2xl"
          >
            <FiGlobe className="text-6xl" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-indigo-100 to-purple-100 bg-clip-text text-transparent">
              Software Development
            </span>
            <br />
            <span className="text-white text-4xl sm:text-5xl md:text-6xl">
              Outsourcing
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
            Extend your development capabilities with our expert teams.
            <br className="hidden sm:block" />
            200+ successful outsourcing partnerships across 25+ countries.
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
                Explore Engagement Models
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Schedule Consultation
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

      {/* Engagement Models */}
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
                Engagement Models
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Flexible partnership models tailored to your needs
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {outsourcingModels.map((model, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`text-4xl mb-4 ${model.iconColor}`}>
                  {model.icon}
                </div>
                <h3
                  className={`text-xl font-bold mb-2 bg-gradient-to-r ${model.color} bg-clip-text text-transparent`}
                >
                  {model.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {model.description}
                </p>
                <ul className="space-y-1">
                  {model.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-2 text-xs text-gray-500"
                    >
                      <FiCheckCircle className={`w-3 h-3 ${model.iconColor}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
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
                Why Choose Us
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              What makes us your trusted outsourcing partner
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-xl mb-3 
  bg-gradient-to-br ${item.color} 
  text-white shadow-md 
  group-hover:scale-110 transition-all duration-300`}
                >
                  {item.icon}
                </div>

                <h3
                  className={`text-xl font-bold mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Engagement Benefits */}
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
                Key Benefits
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Why companies choose to outsource with us
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {engagementBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`text-4xl mb-4 ${benefit.iconColor}`}>
                  {benefit.icon}
                </div>
                <h3
                  className={`text-xl font-bold mb-2 bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}
                >
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services We Offer */}
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
                Services We Outsource
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive development capabilities across domains
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
                <div
                  className={`text-4xl sm:text-5xl mb-4 ${service.iconColor} group-hover:scale-110 transition-transform`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
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

export default SoftwareDevelopmentOutsourcing;
