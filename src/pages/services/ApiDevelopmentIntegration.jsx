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
  FiShoppingCart,
  FiRefreshCw,
  FiWifi,
} from "react-icons/fi";
import {
  SiPostman,
  SiSwagger,
  SiGraphql,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiKong,
  SiNginx,
  SiRedis,
  SiApachekafka,
} from "react-icons/si";
import ProcessSection from "../../component/services/ProcessSection";
import ClientTestimonials from "../../component/services/ClientTestimonials";
import ContactWithUs from "../../component/services/ContactWithUs";
const ApiDevelopmentIntegration = () => {
  const [activeTab, setActiveTab] = useState("all");

  const stats = [
    {
      number: "300+",
      label: "APIs Developed",
      icon: <FiGrid />,
      color: "from-blue-500 to-blue-600",
      suffix: "Created",
    },
    {
      number: "99.9%",
      label: "Uptime SLA",
      icon: <FiShield />,
      color: "from-purple-500 to-purple-600",
      suffix: "Guaranteed",
    },
    {
      number: "8+",
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
      number: "50+",
      label: "API Experts",
      icon: <FiUsers />,
      color: "from-green-500 to-green-600",
      suffix: "Team",
    },
    {
      number: "1B+",
      label: "Monthly Requests",
      icon: <FiDatabase />,
      color: "from-red-500 to-red-600",
      suffix: "Processed",
    },
  ];

  const apiTypes = [
    {
      title: "RESTful APIs",
      description:
        "Standard REST APIs with JSON/XML responses for web and mobile applications",
      icon: <FiGrid />,
      features: [
        "Stateless Architecture",
        "HTTP Methods",
        "Resource-Based",
        "JSON/XML Support",
      ],
      color: "from-blue-500 to-blue-600",
      iconColor: "text-blue-600",
    },
    {
      title: "GraphQL APIs",
      description:
        "Flexible query language for efficient data fetching and manipulation",
      icon: <FiBarChart2 />,
      features: [
        "Single Endpoint",
        "Query Flexibility",
        "Real-time Data",
        "Type Safety",
      ],
      color: "from-purple-500 to-purple-600",
      iconColor: "text-purple-600",
    },
    {
      title: "SOAP Web Services",
      description: "Enterprise-grade SOAP APIs with WSDL and XML messaging",
      icon: <FiPackage />,
      features: [
        "WSDL Definitions",
        "XML Messaging",
        "WS-Security",
        "Transaction Support",
      ],
      color: "from-pink-500 to-pink-600",
      iconColor: "text-pink-600",
    },
    {
      title: "WebSocket APIs",
      description:
        "Real-time bidirectional communication for live applications",
      icon: <FiMessageCircle />,
      features: [
        "Full-Duplex",
        "Low Latency",
        "Real-time Updates",
        "Persistent Connection",
      ],
      color: "from-orange-500 to-orange-600",
      iconColor: "text-orange-600",
    },
    {
      title: "RPC APIs",
      description: "Remote procedure call APIs for distributed systems",
      icon: <FiServer />,
      features: [
        "gRPC Support",
        "Protocol Buffers",
        "High Performance",
        "Streaming",
      ],
      color: "from-green-500 to-green-600",
      iconColor: "text-green-600",
    },
    {
      title: "Microservices APIs",
      description: "Lightweight APIs for microservices architecture",
      icon: <FiLayers />,
      features: [
        "Service Discovery",
        "Load Balancing",
        "Circuit Breaking",
        "API Gateway",
      ],
      color: "from-teal-500 to-teal-600",
      iconColor: "text-teal-600",
    },
  ];

  const integrationTypes = [
    {
      title: "Payment Gateways",
      description: "Secure integration with major payment processors",
      icon: <FiCreditCard />,
      features: ["Stripe", "PayPal", "Razorpay", "Square"],
      color: "from-blue-500 to-blue-600",
      iconColor: "text-blue-600",
    },
    {
      title: "E-commerce Platforms",
      description: "Connect with leading e-commerce systems",
      icon: <FiPackage />,
      features: ["Shopify", "WooCommerce", "Magento", "BigCommerce"],
      color: "from-purple-500 to-purple-600",
      iconColor: "text-purple-600",
    },
    {
      title: "CRM Systems",
      description: "Seamless CRM data synchronization",
      icon: <FiUsers />,
      features: ["Salesforce", "HubSpot", "Zoho", "Microsoft Dynamics"],
      color: "from-pink-500 to-pink-600",
      iconColor: "text-pink-600",
    },
    {
      title: "ERP Solutions",
      description: "Enterprise resource planning integration",
      icon: <FiBriefcase />,
      features: ["SAP", "Oracle", "Microsoft Dynamics", "Odoo"],
      color: "from-orange-500 to-orange-600",
      iconColor: "text-orange-600",
    },
    {
      title: "Cloud Services",
      description: "Connect with major cloud providers",
      icon: <FiCloud />,
      features: ["AWS", "Google Cloud", "Azure", "DigitalOcean"],
      color: "from-green-500 to-green-600",
      iconColor: "text-green-600",
    },
    {
      title: "Social Media",
      description: "Social platform API integration",
      icon: <FiUsers />,
      features: ["Facebook", "Twitter", "LinkedIn", "Instagram"],
      color: "from-teal-500 to-teal-600",
      iconColor: "text-teal-600",
    },
    {
      title: "Shipping & Logistics",
      description: "Shipping carrier API integration",
      icon: <FiTruck />,
      features: ["FedEx", "UPS", "DHL", "USPS"],
      color: "from-indigo-500 to-indigo-600",
      iconColor: "text-indigo-600",
    },
    {
      title: "Email Services",
      description: "Email and marketing automation",
      icon: <FiMail />,
      features: ["SendGrid", "Mailchimp", "AWS SES", "Postmark"],
      color: "from-red-500 to-red-600",
      iconColor: "text-red-600",
    },
    {
      title: "SMS & Messaging",
      description: "SMS and chat integration",
      icon: <FiMessageCircle />,
      features: ["Twilio", "Vonage", "MessageBird", "WhatsApp"],
      color: "from-cyan-500 to-cyan-600",
      iconColor: "text-cyan-600",
    },
    {
      title: "Analytics Tools",
      description: "Analytics and tracking integration",
      icon: <FiBarChart2 />,
      features: ["Google Analytics", "Mixpanel", "Amplitude", "Segment"],
      color: "from-yellow-500 to-yellow-600",
      iconColor: "text-yellow-600",
    },
    {
      title: "Database Integration",
      description: "Connect with various databases",
      icon: <FiDatabase />,
      features: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
      color: "from-amber-500 to-amber-600",
      iconColor: "text-amber-600",
    },
    {
      title: "File Storage",
      description: "Cloud file storage integration",
      icon: <FiFileText />,
      features: ["AWS S3", "Google Cloud Storage", "Dropbox", "Box"],
      color: "from-emerald-500 to-emerald-600",
      iconColor: "text-emerald-600",
    },
  ];

  const benefits = [
    {
      title: "Scalable Architecture",
      icon: <FiLayers />,
      color: "from-blue-500 to-blue-600",
      desc: "APIs designed to handle millions of requests",
    },
    {
      title: "Enterprise Security",
      icon: <FiShield />,
      color: "from-purple-500 to-purple-600",
      desc: "OAuth, JWT, API keys, and rate limiting",
    },
    {
      title: "High Performance",
      icon: <FiZap />,
      color: "from-pink-500 to-pink-600",
      desc: "Optimized response times with caching",
    },
    {
      title: "Comprehensive Docs",
      icon: <FiFileText />,
      color: "from-orange-500 to-orange-600",
      desc: "Interactive API documentation (Swagger/OpenAPI)",
    },
    {
      title: "24/7 Monitoring",
      icon: <FiMonitor />,
      color: "from-green-500 to-green-600",
      desc: "Real-time monitoring and alerting",
    },
    {
      title: "Version Control",
      icon: <FiSettings />,
      color: "from-teal-500 to-teal-600",
      desc: "API versioning for backward compatibility",
    },
  ];

  const tools = [
    {
      name: "Postman",
      icon: <SiPostman />,
      color: "from-orange-400 to-orange-600",
      text: "text-orange-600",
      bg: "bg-orange-100",
    },
    {
      name: "Swagger",
      icon: <SiSwagger />,
      color: "from-green-500 to-green-700",
      text: "text-green-600",
      bg: "bg-green-100",
    },
    {
      name: "GraphQL",
      icon: <SiGraphql />,
      color: "from-pink-500 to-pink-700",
      text: "text-pink-600",
      bg: "bg-pink-100",
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs />,
      color: "from-green-500 to-green-700",
      text: "text-green-600",
      bg: "bg-green-100",
    },
    {
      name: "Express",
      icon: <SiExpress />,
      color: "from-gray-500 to-gray-700",
      text: "text-gray-700",
      bg: "bg-gray-100",
    },
    {
      name: "Django",
      icon: <SiDjango />,
      color: "from-green-600 to-green-800",
      text: "text-green-700",
      bg: "bg-green-100",
    },
    {
      name: "Flask",
      icon: <SiFlask />,
      color: "from-gray-500 to-gray-700",
      text: "text-gray-700",
      bg: "bg-gray-100",
    },
    {
      name: "FastAPI",
      icon: <SiFastapi />,
      color: "from-teal-500 to-teal-700",
      text: "text-teal-600",
      bg: "bg-teal-100",
    },
    {
      name: "Kong",
      icon: <SiKong />,
      color: "from-blue-500 to-blue-700",
      text: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      name: "Nginx",
      icon: <SiNginx />,
      color: "from-green-600 to-green-800",
      text: "text-green-700",
      bg: "bg-green-100",
    },
    {
      name: "Redis",
      icon: <SiRedis />,
      color: "from-red-500 to-red-700",
      text: "text-red-600",
      bg: "bg-red-100",
    },
    {
      name: "Kafka",
      icon: <SiApachekafka />,
      color: "from-cyan-500 to-cyan-700",
      text: "text-cyan-600",
      bg: "bg-cyan-100",
    },
  ];

  const protocols = [
    {
      name: "HTTP/HTTPS",
      icon: <FiGlobe />,
      color: "from-blue-500 to-blue-600",
      text: "text-blue-600",
    },
    {
      name: "WebSocket",
      icon: <FiWifi />,
      color: "from-purple-500 to-purple-600",
      text: "text-purple-600",
    },
    {
      name: "MQTT",
      icon: <FiWifi />,
      color: "from-pink-500 to-pink-600",
      text: "text-pink-600",
    },
    {
      name: "AMQP",
      icon: <FiRefreshCw />,
      color: "from-orange-500 to-orange-600",
      text: "text-orange-600",
    },
    {
      name: "gRPC",
      icon: <FiCpu />,
      color: "from-green-500 to-green-600",
      text: "text-green-600",
    },
    {
      name: "SOAP",
      icon: <FiPackage />,
      color: "from-teal-500 to-teal-600",
      text: "text-teal-600",
    },
    {
      name: "GraphQL",
      icon: <SiGraphql />,
      color: "from-indigo-500 to-indigo-600",
      text: "text-indigo-600",
    },
    {
      name: "REST",
      icon: <FiZap />,
      color: "from-red-500 to-red-600",
      text: "text-red-600",
    },
  ];

  const filterTabs = [
    { id: "all", name: "All Solutions", icon: "🔧" },
    { id: "api", name: "API Development", icon: "🔌" },
    { id: "integration", name: "System Integration", icon: "🔄" },
  ];

  const filteredServices =
    activeTab === "all"
      ? [...apiTypes, ...integrationTypes]
      : activeTab === "api"
        ? apiTypes
        : integrationTypes;

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

  // Add missing FiShoppingCart since it wasn't in the imports
  const FiShoppingCart = FiPackage; // Using FiPackage as a substitute

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
            🔌
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
            🔄
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
            <FiGrid className="text-6xl" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-indigo-100 to-purple-100 bg-clip-text text-transparent">
              API Development &
            </span>
            <br />
            <span className="text-white text-4xl sm:text-5xl md:text-6xl">
              System Integration
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
            Connect your systems, automate workflows, and scale your business
            <br className="hidden sm:block" />
            with robust APIs and seamless integrations. 300+ successful
            implementations.
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

      {/* Protocols & Standards */}
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
                Protocols & Standards
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Industry-standard protocols for reliable data exchange
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"
          >
            {protocols.map((protocol, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-white rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div
                  className={`text-3xl flex justify-center sm:text-4xl mb-2 ${protocol.text} group-hover:scale-110 transition-transform`}
                >
                  {protocol.icon}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-700">
                  {protocol.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tools & Technologies */}
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
                Tools & Technologies
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Modern tools for API development and integration
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
                    className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r ${tool.color} text-white text-2xl mb-4`}
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
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Key Benefits
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Why businesses choose our API development services
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

      {/* API & Integration Solutions */}
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
                Our Solutions
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive API development and integration services
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

          {/* Solutions Grid */}
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

      {/* Integration Architecture */}
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
                Integration Architecture
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Modern patterns for scalable system integration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "API Gateway",
                icon: <FiServer />,
                desc: "Centralized entry point for all APIs",
                color: "from-blue-500 to-blue-600",
              },
              {
                title: "Message Queue",
                icon: <FiMessageCircle />,
                desc: "Asynchronous message processing",
                color: "from-purple-500 to-purple-600",
              },
              {
                title: "Event-Driven",
                icon: <FiZap />,
                desc: "Real-time event streaming",
                color: "from-pink-500 to-pink-600",
              },
              {
                title: "Microservices",
                icon: <FiGrid />,
                desc: "Decentralized service architecture",
                color: "from-orange-500 to-orange-600",
              },
              {
                title: "Service Mesh",
                icon: <FiLayers />,
                desc: "Service-to-service communication",
                color: "from-green-500 to-green-600",
              },
              {
                title: "Hybrid Integration",
                icon: <FiCloud />,
                desc: "Cloud and on-premise connectivity",
                color: "from-teal-500 to-teal-600",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r ${item.color} text-white text-2xl mb-4`}
                >
                  {item.icon}
                </div>
                <h3
                  className={`text-lg font-bold mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
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

export default ApiDevelopmentIntegration;
