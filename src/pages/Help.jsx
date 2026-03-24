import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSearch,
  FiHelpCircle,
  FiMessageSquare,
  FiMail,
  FiPhone,
  FiClock,
  FiBookOpen,
  FiVideo,
  FiDownload,
  FiUsers,
  FiAward,
  FiCheckCircle,
  FiArrowRight,
  FiExternalLink,
  FiStar,
  FiHeart,
  FiZap,
  FiGlobe,
  FiShield,
  FiSettings,
  FiUser,
  FiCreditCard,
  FiMonitor,
  FiSmartphone,
  FiCode,
  FiDatabase,
  FiCloud,
  FiLock,
  FiHeadphones,
  FiLifeBuoy,
  FiThumbsUp,
  FiX,
  FiChevronDown,
  FiChevronUp,
  FiTrendingUp,
  FiBarChart2,
  FiFileText,
  FiMail as FiMailIcon,
  FiMessageCircle as FiMessageIcon,
  FiPhone as FiPhoneIcon,
} from "react-icons/fi";

const Help = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState("guides");

  const categories = [
    { id: "all", name: "All Topics", icon: <FiHelpCircle />, count: 24, color: "from-blue-500 to-purple-500" },
    { id: "getting-started", name: "Getting Started", icon: <FiZap />, count: 6, color: "from-blue-500 to-blue-600" },
    { id: "account", name: "Account & Billing", icon: <FiUser />, count: 5, color: "from-purple-500 to-purple-600" },
    { id: "development", name: "Development", icon: <FiCode />, count: 4, color: "from-pink-500 to-pink-600" },
    { id: "security", name: "Security", icon: <FiLock />, count: 3, color: "from-orange-500 to-orange-600" },
    { id: "integrations", name: "Integrations", icon: <FiCloud />, count: 6, color: "from-green-500 to-green-600" },
  ];

  const faqs = [
    {
      id: 1,
      question: "How do I get started with Tech Synergia?",
      answer: "Getting started is easy! Simply contact us through our website or call our sales team. We'll schedule a free consultation to understand your requirements and provide a tailored solution. Our team will guide you through every step of the process, from initial planning to final deployment.",
      category: "getting-started",
    },
    {
      id: 2,
      question: "What is the typical project timeline?",
      answer: "Project timelines vary based on complexity and scope. Simple projects take 2-4 weeks, medium complexity projects take 2-3 months, and complex enterprise solutions can take 4-6 months. We provide detailed timelines with milestones during the planning phase and keep you updated throughout the development process.",
      category: "getting-started",
    },
    {
      id: 3,
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking 'Forgot Password' on the login page. Enter your registered email address, and we'll send you a password reset link. If you don't receive the email within a few minutes, check your spam folder or contact our support team for assistance.",
      category: "account",
    },
    {
      id: 4,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), bank transfers, and PayPal. For enterprise clients, we offer customized billing solutions and invoice payments with flexible payment terms. All transactions are processed securely through our encrypted payment gateway.",
      category: "account",
    },
    {
      id: 5,
      question: "How can I integrate your services with my existing systems?",
      answer: "We provide comprehensive API documentation and integration support. Our APIs are RESTful and well-documented with code examples. We also offer custom integration services to ensure seamless connectivity with your existing systems, including CRM, ERP, and other business applications.",
      category: "integrations",
    },
    {
      id: 6,
      question: "Do you offer API documentation?",
      answer: "Yes! We provide detailed API documentation with code examples in multiple languages including JavaScript, Python, PHP, and Java. Our documentation includes authentication guides, endpoint references, request/response examples, and sample implementations to help you integrate quickly.",
      category: "integrations",
    },
    {
      id: 7,
      question: "How do you ensure data security?",
      answer: "We implement enterprise-grade security measures including encryption at rest and in transit, regular security audits, penetration testing, and compliance with industry standards like ISO 27001 and GDPR. Your data is protected with bank-level security protocols.",
      category: "security",
    },
    {
      id: 8,
      question: "What is your uptime guarantee?",
      answer: "We offer 99.9% uptime guarantee for all our services. We use redundant infrastructure, automatic failover systems, and 24/7 monitoring to ensure maximum availability. In the rare event of downtime, we provide immediate notifications and regular updates until resolution.",
      category: "security",
    },
    {
      id: 9,
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can upgrade or downgrade your plan at any time through your account dashboard. Changes take effect immediately, and we prorate the charges for the remainder of your billing cycle. Our team is available to help you choose the right plan for your needs.",
      category: "account",
    },
    {
      id: 10,
      question: "What support options are available?",
      answer: "We offer multiple support channels including email support (24/7), live chat (business hours), phone support (priority plans), and a comprehensive knowledge base with video tutorials. Enterprise clients get a dedicated account manager and priority support.",
      category: "getting-started",
    },
    {
      id: 11,
      question: "Do you provide training for your solutions?",
      answer: "Yes, we provide comprehensive training for all our solutions. This includes documentation, video tutorials, live webinars, and personalized training sessions. Our goal is to ensure your team is fully equipped to leverage our solutions effectively.",
      category: "getting-started",
    },
    {
      id: 12,
      question: "What happens if I need custom features?",
      answer: "We offer custom development services for features not available in standard packages. Our team will work with you to understand your requirements and develop custom solutions that fit your unique business needs. Contact our sales team to discuss custom development options.",
      category: "development",
    },
  ];

  const guides = [
    {
      id: 1,
      title: "Getting Started with Tech Synergia",
      description: "Learn how to set up your account and start your first project",
      icon: <FiZap />,
      type: "guide",
      duration: "10 min read",
      level: "Beginner",
      color: "from-blue-500 to-blue-600",
      popular: true,
    },
    {
      id: 2,
      title: "API Integration Guide",
      description: "Step-by-step guide to integrating our APIs into your application",
      icon: <FiCode />,
      type: "guide",
      duration: "20 min read",
      level: "Intermediate",
      color: "from-purple-500 to-purple-600",
      popular: true,
    },
    {
      id: 3,
      title: "Security Best Practices",
      description: "Learn how to secure your applications and data",
      icon: <FiLock />,
      type: "guide",
      duration: "15 min read",
      level: "Advanced",
      color: "from-green-500 to-green-600",
      popular: false,
    },
    {
      id: 4,
      title: "Deployment Guide",
      description: "Best practices for deploying your applications to production",
      icon: <FiCloud />,
      type: "guide",
      duration: "12 min read",
      level: "Intermediate",
      color: "from-orange-500 to-orange-600",
      popular: false,
    },
    {
      id: 5,
      title: "Video Tutorial: Platform Overview",
      description: "Watch our comprehensive platform walkthrough",
      icon: <FiVideo />,
      type: "video",
      duration: "15 min watch",
      level: "Beginner",
      color: "from-pink-500 to-pink-600",
      popular: true,
    },
    {
      id: 6,
      title: "Video: API Integration Tutorial",
      description: "Learn how to integrate APIs in 15 minutes",
      icon: <FiVideo />,
      type: "video",
      duration: "15 min watch",
      level: "Intermediate",
      color: "from-teal-500 to-teal-600",
      popular: false,
    },
    {
      id: 7,
      title: "Video: Security Configuration",
      description: "Configure security settings for your applications",
      icon: <FiVideo />,
      type: "video",
      duration: "12 min watch",
      level: "Advanced",
      color: "from-indigo-500 to-indigo-600",
      popular: false,
    },
    {
      id: 8,
      title: "Developer Documentation",
      description: "Complete API reference and SDK documentation",
      icon: <FiBookOpen />,
      type: "docs",
      duration: "Reference",
      level: "All Levels",
      color: "from-cyan-500 to-cyan-600",
      popular: true,
    },
    {
      id: 9,
      title: "Troubleshooting Guide",
      description: "Common issues and how to resolve them",
      icon: <FiSettings />,
      type: "guide",
      duration: "8 min read",
      level: "All Levels",
      color: "from-red-500 to-red-600",
      popular: false,
    },
    {
      id: 10,
      title: "Performance Optimization",
      description: "Tips to optimize your application performance",
      icon: <FiTrendingUp />,
      type: "guide",
      duration: "10 min read",
      level: "Advanced",
      color: "from-emerald-500 to-emerald-600",
      popular: false,
    },
  ];

  const popularTopics = [
    { title: "Getting Started Guide", icon: <FiZap />, color: "from-blue-500 to-blue-600" },
    { title: "API Documentation", icon: <FiCode />, color: "from-purple-500 to-purple-600" },
    { title: "Account Setup", icon: <FiUser />, color: "from-pink-500 to-pink-600" },
    { title: "Security Best Practices", icon: <FiLock />, color: "from-green-500 to-green-600" },
    { title: "Integration Guides", icon: <FiCloud />, color: "from-orange-500 to-orange-600" },
    { title: "Video Tutorials", icon: <FiVideo />, color: "from-teal-500 to-teal-600" },
  ];

  const filteredFaqs = faqs.filter(faq => 
    (activeCategory === "all" || faq.category === activeCategory) &&
    (faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
     faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredGuides = guides.filter(guide => 
    guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    guide.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const popularGuides = guides.filter(guide => guide.popular);

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

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
          <div className="absolute inset-0 bg-black/30"></div>
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 20px 20px, white 1.5px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-20 left-10 text-6xl opacity-20"
          >
            📚
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute bottom-20 right-10 text-6xl opacity-20"
          >
            💡
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 left-1/4 text-6xl opacity-20"
          >
            ❓
          </motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-6 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-white/30"
          >
            <FiLifeBuoy className="text-5xl" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            How Can We Help You?
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-white/50 mx-auto mb-6 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8"
          >
            Find answers, guides, and resources to help you succeed with Tech Synergia.
            Our support team is here to assist you 24/7.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative group">
              <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-hover:text-blue-500 transition-colors" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white text-gray-800 rounded-2xl shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <span className="text-white/70 text-sm">Popular:</span>
            {["Getting Started", "API Integration", "Billing", "Security"].map((topic, i) => (
              <button
                key={i}
                className="text-white text-sm hover:text-purple-200 transition-colors hover:scale-105 transform duration-200"
              >
                {topic}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Popular Topics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Popular Topics
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Most frequently accessed resources to help you get started quickly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularTopics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-50 rounded-xl p-4 text-center cursor-pointer group hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${topic.color} flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform`}>
                  {topic.icon}
                </div>
                <p className="text-sm font-medium text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {topic.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Support Channels
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Get help through your preferred channel. Our support team is available 24/7.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiMessageIcon />,
                title: "Live Chat",
                description: "Chat with our support team in real-time",
                availability: "24/7 Support",
                response: "Instant Response",
                color: "from-blue-500 to-blue-600",
                action: "Start Chat",
              },
              {
                icon: <FiMailIcon />,
                title: "Email Support",
                description: "Send us an email and we'll respond quickly",
                availability: "24/7 Support",
                response: "Within 24 hours",
                color: "from-purple-500 to-purple-600",
                action: "Send Email",
              },
              {
                icon: <FiPhoneIcon />,
                title: "Phone Support",
                description: "Speak directly with our support specialists",
                availability: "Mon-Fri, 9am-6pm EST",
                response: "Priority Support",
                color: "from-pink-500 to-pink-600",
                action: "Call Now",
              },
            ].map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer group"
              >
                <div className={`w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-r ${channel.color} flex items-center justify-center text-white text-3xl group-hover:scale-110 transition-transform`}>
                  {channel.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {channel.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{channel.description}</p>
                <p className="text-xs text-gray-400 mb-3">{channel.availability}</p>
                <p className="text-xs font-semibold text-green-600 mb-4">{channel.response}</p>
                <button className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  {channel.action}
                  <FiArrowRight className="ml-1 w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Popular Resources
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Most viewed guides and tutorials to help you get started.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularGuides.map((guide, index) => (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${guide.color} flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform`}>
                    {guide.icon}
                  </div>
                  {guide.popular && (
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">Popular</span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {guide.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{guide.description}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">{guide.duration}</span>
                  <span className="px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                    {guide.level}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                All Resources
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our comprehensive library of guides, tutorials, and documentation.
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {[
              { id: "guides", name: "Guides", icon: <FiBookOpen />, color: "from-blue-500 to-blue-600" },
              { id: "videos", name: "Video Tutorials", icon: <FiVideo />, color: "from-purple-500 to-purple-600" },
              { id: "docs", name: "Documentation", icon: <FiFileText />, color: "from-pink-500 to-pink-600" },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab.icon}
                <span>{tab.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Resources Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredGuides
              .filter(guide => {
                if (activeTab === "guides") return guide.type === "guide";
                if (activeTab === "videos") return guide.type === "video";
                if (activeTab === "docs") return guide.type === "docs";
                return true;
              })
              .map((guide, index) => (
                <motion.div
                  key={guide.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                >
                  <div className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-r ${guide.color} flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform`}>
                    {guide.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{guide.description}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">{guide.duration}</span>
                    <span className={`px-2 py-1 rounded-full ${
                      guide.level === "Beginner" ? "bg-green-100 text-green-600" :
                      guide.level === "Intermediate" ? "bg-yellow-100 text-yellow-600" :
                      guide.level === "Advanced" ? "bg-red-100 text-red-600" :
                      "bg-gray-100 text-gray-600"
                    }`}>
                      {guide.level}
                    </span>
                  </div>
                </motion.div>
              ))}
          </motion.div>

          {filteredGuides.filter(guide => {
            if (activeTab === "guides") return guide.type === "guide";
            if (activeTab === "videos") return guide.type === "video";
            if (activeTab === "docs") return guide.type === "docs";
            return true;
          }).length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No resources found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Find quick answers to common questions about our services.
            </p>
          </motion.div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto space-y-4">
            {filteredFaqs.map((faq) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors duration-300"
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiChevronDown className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-5"
                    >
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No FAQs found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center"
            >
              <FiHeadphones className="text-3xl text-white" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Our support team is ready to assist you. Contact us anytime and we'll help you resolve your issue.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CSS */}
      <style jsx>{`
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

export default Help;