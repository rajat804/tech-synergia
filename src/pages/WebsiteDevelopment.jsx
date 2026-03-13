import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaVuejs,
  FaAngular,
  FaNodeJs,
  FaPython,
  FaJava,
  FaPhp,
  FaAws,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiKubernetes,
  SiJenkins,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiOpenai,
  SiLaravel,
} from "react-icons/si";
import {
  FiMonitor,
  FiLayers,
  FiGlobe,
  FiSend,
  FiCode,
  FiSmartphone,
  FiZap,
  FiTrendingUp,
  FiCheckCircle,
  FiArrowRight,
  FiStar,
  FiUsers,
  FiClock,
  FiAward,
  FiHeart,
  FiEye,
  FiMessageCircle,
  FiBriefcase,
  FiShoppingCart,
  FiLayout,
  FiPackage,
  FiSettings,
  FiDatabase,
  FiCloud,
} from "react-icons/fi";

const WebsiteDevelopment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    budget: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });
  const [activeTab, setActiveTab] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide for testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const industries = [
    {
      name: "Fashion & Retail",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Elegant e-commerce stores with virtual try-on and seamless checkout",
      stats: "Read More",
      color: "from-pink-500 to-rose-500",
      //   projects: 45,
      //   icon: "👗"
    },
    {
      name: "Logistics & Supply Chain",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Real-time tracking, fleet management, and warehouse automation",
      stats: "24/7 Tracking",
      color: "from-blue-500 to-cyan-500",
      //   projects: 32,
      //   icon: "🚚"
    },
    {
      name: "Healthcare & Pharma",
      image:
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "HIPAA compliant portals with telemedicine integration",
      stats: "Secure & Compliant",
      color: "from-green-500 to-emerald-500",
      //   projects: 28,
      //   icon: "💊"
    },
    {
      name: "Finance & Banking",
      image:
        "https://images.unsplash.com/photo-1560472355-536de396260b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Secure investment platforms with real-time analytics",
      stats: "Bank-Level Security",
      color: "from-purple-500 to-indigo-500",
      //   projects: 38,
      //   icon: "💰"
    },
    {
      name: "Food & Restaurant",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Online ordering, table reservation, and loyalty programs",
      stats: "Online Ordering",
      color: "from-orange-500 to-red-500",
      //   projects: 52,
      //   icon: "🍽️"
    },
    {
      name: "Education & E-learning",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Interactive learning platforms with video courses",
      stats: "Interactive Learning",
      color: "from-teal-500 to-cyan-500",
      //   projects: 41,
      //   icon: "📚"
    },
    {
      name: "Real Estate",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Property listing sites with virtual tours",
      stats: "3D Virtual Tours",
      color: "from-yellow-500 to-amber-500",
      //   projects: 35,
      //   icon: "🏠"
    },
    {
      name: "Travel & Hospitality",
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Booking engines with dynamic pricing",
      stats: "Real-time Booking",
      color: "from-indigo-500 to-purple-500",
      //   projects: 29,
      //   icon: "✈️"
    },
  ];

  const services = [
    {
      title: "Business Websites",
      description: "Professional websites that establish your brand identity",
      icon: <FiBriefcase />,
      features: [
        "Custom Design",
        "SEO Optimized",
        "Responsive",
        "Fast Loading",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Corporate Websites",
      description: "Enterprise-level solutions for large organizations",
      icon: <FiGlobe />,
      features: [
        "Multi-language",
        "Employee Portal",
        "News & Updates",
        "Analytics",
      ],
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "E-commerce Websites",
      description: "Full-featured online stores with payment integration",
      icon: <FiShoppingCart />,
      features: ["Shopping Cart", "Payment Gateway", "Inventory", "Reviews"],
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Custom Web Apps",
      description: "Tailored applications for your unique business needs",
      icon: <FiCode />,
      features: ["Custom Features", "API Integration", "Scalable", "Real-time"],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Static Websites",
      description: "Fast, secure, and cost-effective brochure sites",
      icon: <FiLayout />,
      features: ["Lightning Fast", "Low Cost", "Easy Updates", "Secure"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Dynamic Websites",
      description: "Content-rich sites with admin panels",
      icon: <FiZap />,
      features: [
        "CMS Integration",
        "User Management",
        "Real-time Updates",
        "Blog",
      ],
      color: "from-yellow-500 to-amber-500",
    },
    {
      title: "Web Portals",
      description: "Member-only platforms with advanced features",
      icon: <FiUsers />,
      features: ["User Authentication", "Dashboards", "Analytics", "CRM"],
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Landing Pages",
      description: "High-converting pages for campaigns",
      icon: <FiSmartphone />,
      features: ["A/B Testing", "Lead Capture", "Analytics", "Fast Loading"],
      color: "from-red-500 to-pink-500",
    },
  ];

  const stats = [
    {
      number: "200+",
      label: "Websites Delivered",
      icon: <FiGlobe />,
      color: "from-blue-500 to-blue-600",
      suffix: "Projects",
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      icon: <FiHeart />,
      color: "from-purple-500 to-purple-600",
      suffix: "Rating",
    },
    {
      number: "8+",
      label: "Years Experience",
      icon: <FiClock />,
      color: "from-pink-500 to-pink-600",
      suffix: "Years",
    },
    {
      number: "15+",
      label: "Industries Served",
      icon: <FiAward />,
      color: "from-orange-500 to-orange-600",
      suffix: "Industries",
    },
    {
      number: "50+",
      label: "Expert Developers",
      icon: <FiUsers />,
      color: "from-green-500 to-green-600",
      suffix: "Team",
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: <FiMessageCircle />,
      color: "from-red-500 to-red-600",
      suffix: "Support",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, FashionHub",
      content:
        "Tech Synergia transformed our online store completely. Sales increased by 150% in just 3 months!",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
      company: "FashionHub",
    },
    {
      name: "Michael Chen",
      role: "CTO, LogiTrack",
      content:
        "The logistics platform they built streamlined our entire operation. Best investment we ever made.",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 5,
      company: "LogiTrack",
    },
    {
      name: "Emily Davis",
      role: "Director, HealthFirst",
      content:
        "Their healthcare portal is HIPAA compliant and incredibly user-friendly. Patients love it!",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 5,
      company: "HealthFirst",
    },
  ];

  const technologies = [
    { name: "React", icon: <FaReact className="text-sky-500" /> },

    { name: "Vue.js", icon: <FaVuejs className="text-green-500" /> },

    { name: "Angular", icon: <FaAngular className="text-red-600" /> },

    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },

    { name: "Python", icon: <FaPython className="text-yellow-500" /> },

    { name: "Java", icon: <FaJava className="text-red-500" /> },

    { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },

    { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },

    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },

    { name: "Flutter", icon: <SiFlutter className="text-sky-500" /> },

    { name: "Swift", icon: <SiSwift className="text-orange-500" /> },

    { name: "Kotlin", icon: <SiKotlin className="text-purple-500" /> },

    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },

    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },

    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },

    { name: "Redis", icon: <SiRedis className="text-red-600" /> },

    { name: "AWS", icon: <FaAws className="text-orange-500" /> },

    { name: "Docker", icon: <FaDocker className="text-blue-500" /> },

    { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> },

    { name: "Jenkins", icon: <SiJenkins className="text-red-500" /> },

    { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },

    { name: "PyTorch", icon: <SiPytorch className="text-red-500" /> },

    {
      name: "Scikit Learn",
      icon: <SiScikitlearn className="text-orange-400" />,
    },

    { name: "OpenAI", icon: <SiOpenai className="text-black" /> },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you! We'll get back to you within 24 hours.",
    });
    setTimeout(
      () => setFormStatus({ submitted: false, success: false, message: "" }),
      5000,
    );
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      budget: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const filterTabs = [
    { id: "all", name: "All Services", icon: "📋" },
    { id: "business", name: "Business", icon: "💼" },
    { id: "ecommerce", name: "E-commerce", icon: "🛒" },
    { id: "enterprise", name: "Enterprise", icon: "🏢" },
  ];

  const filteredServices =
    activeTab === "all"
      ? services
      : activeTab === "business"
        ? services.filter((s) =>
            ["Business Websites", "Static Websites", "Landing Pages"].includes(
              s.title,
            ),
          )
        : activeTab === "ecommerce"
          ? services.filter((s) =>
              ["E-commerce Websites", "Dynamic Websites"].includes(s.title),
            )
          : services.filter((s) =>
              ["Corporate Websites", "Custom Web Apps", "Web Portals"].includes(
                s.title,
              ),
            );

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700"></div>

          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>

          {/* Floating Orbs */}
          <motion.div
            animate={{
              x: [0, 150, 0],
              y: [0, -150, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay blur-3xl"
          />

          <motion.div
            animate={{
              x: [0, -150, 0],
              y: [0, 150, 0],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay blur-3xl"
          />

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-8 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-white/30"
          >
            <FiMonitor className="text-5xl" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Website Development
            </span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl text-white/80">
              That Drives Results
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
            className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-white/90 mb-10 px-4"
          >
            We design and develop modern, scalable and high-performance websites
            tailored for your business needs. 200+ successful projects
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
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <span className="flex items-center justify-center gap-2">
                View Our Work
                <FiEye className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Get Free Consultation
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

      {/* What We Build */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                What We Build
              </span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Comprehensive web solutions tailored to your specific requirements
            </p>
          </motion.div>

          {/* Filter Tabs - Responsive */}
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
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
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
                whileHover={{
                  y: -10,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-12 h-12 sm:w-14 sm:h-14 mb-3 sm:mb-4 rounded-xl bg-gradient-to-r ${service.color} p-3 text-white shadow-lg`}
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {service.title}
                </h3>

                {/* Price */}
                {/* <div className={`text-xs sm:text-sm font-semibold mb-2 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                  Starting {service.price}
                </div> */}

                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500"
                    >
                      <FiCheckCircle
                        className={`w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent flex-shrink-0`}
                      />
                      <span className="truncate">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <motion.a
                  href="#"
                  className="inline-flex items-center space-x-1 text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600"
                  whileHover={{ x: 5 }}
                >
                  <span>Learn More</span>
                  <FiArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
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

      {/* Industry Website Gallery */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Industry Solutions
              </span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Tailored websites for every industry with proven results
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="group relative bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <motion.img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${industry.color} opacity-0 group-hover:opacity-60 transition-opacity duration-300`}
                  />

                  {/* Industry Icon */}
                  <div className="absolute top-3 left-3 text-2xl sm:text-3xl">
                    {industry.icon}
                  </div>

                  {/* Project Count */}
                  {/* <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold">
                    {industry.projects}+ Projects
                  </div> */}
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">
                    {industry.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs sm:text-sm font-semibold bg-gradient-to-r ${industry.color} bg-clip-text text-transparent`}
                    >
                      {industry.stats}
                    </span>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <FiArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

                {/* Bottom Border */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8 sm:mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <span className="flex items-center gap-2">
                View All Industry Solutions
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Technologies We Use
              </span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Modern stack for modern websites
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-white rounded-xl p-3 sm:p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex justify-center items-center text-3xl sm:text-4xl mb-2 transition-all duration-300 group-hover:scale-110">
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

      {/* Process Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Our Development Process
              </span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              A structured approach to deliver high-quality websites on time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Understanding your requirements, goals, and target audience",
                color: "from-blue-500 to-blue-600",
                icon: "🔍",
              },
              {
                step: "02",
                title: "Planning",
                desc: "Creating sitemaps, wireframes, and project roadmap",
                color: "from-purple-500 to-purple-600",
                icon: "📝",
              },
              {
                step: "03",
                title: "Design",
                desc: "Crafting beautiful UI/UX with your brand identity",
                color: "from-pink-500 to-pink-600",
                icon: "🎨",
              },
              {
                step: "04",
                title: "Development",
                desc: "Building with modern, scalable technologies",
                color: "from-orange-500 to-orange-600",
                icon: "💻",
              },
              {
                step: "05",
                title: "Testing",
                desc: "Rigorous QA testing across all devices",
                color: "from-green-500 to-green-600",
                icon: "✅",
              },
              {
                step: "06",
                title: "Launch",
                desc: "Deploying and monitoring performance",
                color: "from-teal-500 to-teal-600",
                icon: "🚀",
              },
              {
                step: "07",
                title: "Training",
                desc: "Team training and documentation",
                color: "from-indigo-500 to-indigo-600",
                icon: "📚",
              },
              {
                step: "08",
                title: "Support",
                desc: "Ongoing maintenance and updates",
                color: "from-red-500 to-red-600",
                icon: "🔧",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative bg-white rounded-xl p-4 sm:p-5 shadow-lg text-center group border border-gray-100"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                />
                <div className="text-2xl sm:text-3xl mb-2">{item.icon}</div>
                <div
                  className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}
                >
                  {item.step}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Client Testimonials
              </span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              What our clients say about working with us
            </p>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100"
              >
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <img
                    src={testimonials[currentSlide].avatar}
                    alt={testimonials[currentSlide].name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg"
                  />
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                      {testimonials[currentSlide].name}
                    </h3>
                    <p className="text-sm sm:text-base text-purple-600 mb-2">
                      {testimonials[currentSlide].role}
                    </p>
                    <div className="flex justify-center sm:justify-start items-center gap-2 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <FiStar
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <span className="text-xs sm:text-sm text-gray-500">
                        {testimonials[currentSlide].company}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 italic">
                      "{testimonials[currentSlide].content}"
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-6 bg-gradient-to-r from-blue-500 to-purple-500"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form with Glassmorphism */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
        {/* Animated Background */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Connect With Us
            </h2>
            <p className="text-white/80 text-base sm:text-lg px-4">
              Let's discuss your project and bring your ideas to life
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 sm:p-8 shadow-2xl border border-white/20"
          >
            {/* Success Message */}
            <AnimatePresence>
              {formStatus.submitted && formStatus.success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-lg text-green-400 text-center text-sm sm:text-base"
                >
                  {formStatus.message}
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <motion.div whileHover={{ scale: 1.02 }}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-sm sm:text-base"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-sm sm:text-base"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }}>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-sm sm:text-base"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }}>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-sm sm:text-base"
                  />
                </motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }}>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-sm sm:text-base"
                >
                  <option value="" disabled className="text-gray-800">
                    Select Budget Range
                  </option>
                  <option value="$1k - $5k" className="text-gray-800">
                    $1k - $5k
                  </option>
                  <option value="$5k - $10k" className="text-gray-800">
                    $5k - $10k
                  </option>
                  <option value="$10k - $25k" className="text-gray-800">
                    $10k - $25k
                  </option>
                  <option value="$25k+" className="text-gray-800">
                    $25k+
                  </option>
                </select>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about your project *"
                  required
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-sm sm:text-base"
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full group relative bg-white text-blue-600 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <FiSend className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
            </form>

            {/* Trust Badges */}
            <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 text-white/80 text-xs sm:text-sm">
              <span className="flex items-center gap-1 sm:gap-2">
                <FiCheckCircle className="w-3 h-3 sm:w-4 sm:h-4" /> 24h Response
              </span>
              <span className="flex items-center gap-1 sm:gap-2">
                <FiCheckCircle className="w-3 h-3 sm:w-4 sm:h-4" /> Free
                Consultation
              </span>
              <span className="flex items-center gap-1 sm:gap-2">
                <FiCheckCircle className="w-3 h-3 sm:w-4 sm:h-4" /> No
                Obligation
              </span>
              <span className="flex items-center gap-1 sm:gap-2">
                <FiCheckCircle className="w-3 h-3 sm:w-4 sm:h-4" /> 100%
                Confidential
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Get answers to common questions about our website development
              process
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "How long does it take to develop a website?",
                a: "Timeline varies based on complexity: Simple websites (2-4 weeks), E-commerce (4-8 weeks), Custom web apps (8-16 weeks).",
              },
              {
                q: "Do you provide website maintenance?",
                a: "Yes, we offer ongoing maintenance packages including updates, security patches, backups, and 24/7 monitoring.",
              },
              {
                q: "What platforms/technologies do you use?",
                a: "We use modern technologies like React, Next.js, Node.js, Python, and various CMS options based on your needs.",
              },
              {
                q: "Do you offer SEO services?",
                a: "Absolutely! All our websites are built with SEO best practices, and we offer additional SEO optimization services.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600">
                  {faq.q}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
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

export default WebsiteDevelopment;
