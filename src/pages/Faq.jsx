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
  FiMail as FiMailIcon,
  FiMessageCircle as FiMessageIcon,
  FiPhone as FiPhoneIcon,
  FiFilter,
  FiGrid,
  FiList,
} from "react-icons/fi";

const Faq = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFaq, setOpenFaq] = useState(null);
  const [viewMode, setViewMode] = useState("grid"); // grid or list

  const categories = [
    { id: "all", name: "All Questions", icon: <FiHelpCircle />, count: 24, color: "from-blue-500 to-purple-500", bg: "bg-blue-50", textColor: "text-blue-600" },
    { id: "getting-started", name: "Getting Started", icon: <FiZap />, count: 6, color: "from-blue-500 to-blue-600", bg: "bg-blue-50", textColor: "text-blue-600" },
    { id: "account", name: "Account & Billing", icon: <FiUser />, count: 5, color: "from-purple-500 to-purple-600", bg: "bg-purple-50", textColor: "text-purple-600" },
    { id: "development", name: "Development", icon: <FiCode />, count: 4, color: "from-pink-500 to-pink-600", bg: "bg-pink-50", textColor: "text-pink-600" },
    { id: "security", name: "Security", icon: <FiLock />, count: 3, color: "from-orange-500 to-orange-600", bg: "bg-orange-50", textColor: "text-orange-600" },
    { id: "integrations", name: "Integrations", icon: <FiCloud />, count: 6, color: "from-green-500 to-green-600", bg: "bg-green-50", textColor: "text-green-600" },
    { id: "support", name: "Support", icon: <FiHeadphones />, count: 4, color: "from-teal-500 to-teal-600", bg: "bg-teal-50", textColor: "text-teal-600" },
  ];

  const faqs = [
    {
      id: 1,
      question: "How do I get started with Tech Synergia?",
      answer: "Getting started is easy! Simply contact us through our website or call our sales team. We'll schedule a free consultation to understand your requirements and provide a tailored solution. Our team will guide you through every step of the process, from initial planning to final deployment. We'll also provide you with all the necessary documentation and resources to ensure a smooth onboarding experience.",
      category: "getting-started",
      helpful: 128,
      views: 1250,
    },
    {
      id: 2,
      question: "What is the typical project timeline?",
      answer: "Project timelines vary based on complexity and scope. Simple projects take 2-4 weeks, medium complexity projects take 2-3 months, and complex enterprise solutions can take 4-6 months. We provide detailed timelines with milestones during the planning phase and keep you updated throughout the development process. Regular progress reports and sprint reviews ensure transparency and alignment with your expectations.",
      category: "getting-started",
      helpful: 95,
      views: 890,
    },
    {
      id: 3,
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking 'Forgot Password' on the login page. Enter your registered email address, and we'll send you a password reset link. If you don't receive the email within a few minutes, check your spam folder or contact our support team for assistance. For security reasons, password reset links expire after 24 hours.",
      category: "account",
      helpful: 156,
      views: 2100,
    },
    {
      id: 4,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), bank transfers, and PayPal. For enterprise clients, we offer customized billing solutions and invoice payments with flexible payment terms. All transactions are processed securely through our encrypted payment gateway. We also offer annual payment options with discounted rates for long-term commitments.",
      category: "account",
      helpful: 112,
      views: 980,
    },
    {
      id: 5,
      question: "How can I integrate your services with my existing systems?",
      answer: "We provide comprehensive API documentation and integration support. Our APIs are RESTful and well-documented with code examples. We also offer custom integration services to ensure seamless connectivity with your existing systems, including CRM, ERP, and other business applications. Our team can also provide dedicated support during the integration process.",
      category: "integrations",
      helpful: 89,
      views: 760,
    },
    {
      id: 6,
      question: "Do you offer API documentation?",
      answer: "Yes! We provide detailed API documentation with code examples in multiple languages including JavaScript, Python, PHP, and Java. Our documentation includes authentication guides, endpoint references, request/response examples, and sample implementations to help you integrate quickly. We also maintain a Postman collection that you can import and start using immediately.",
      category: "integrations",
      helpful: 134,
      views: 1120,
    },
    {
      id: 7,
      question: "How do you ensure data security?",
      answer: "We implement enterprise-grade security measures including encryption at rest and in transit, regular security audits, penetration testing, and compliance with industry standards like ISO 27001 and GDPR. Your data is protected with bank-level security protocols. We also offer optional features like two-factor authentication and IP whitelisting for enhanced security.",
      category: "security",
      helpful: 167,
      views: 1450,
    },
    {
      id: 8,
      question: "What is your uptime guarantee?",
      answer: "We offer 99.9% uptime guarantee for all our services. We use redundant infrastructure, automatic failover systems, and 24/7 monitoring to ensure maximum availability. In the rare event of downtime, we provide immediate notifications and regular updates until resolution. We also offer service credits for any downtime that exceeds our SLA guarantees.",
      category: "security",
      helpful: 143,
      views: 1280,
    },
    {
      id: 9,
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can upgrade or downgrade your plan at any time through your account dashboard. Changes take effect immediately, and we prorate the charges for the remainder of your billing cycle. Our team is available to help you choose the right plan for your needs and can provide recommendations based on your usage patterns.",
      category: "account",
      helpful: 98,
      views: 850,
    },
    {
      id: 10,
      question: "What support options are available?",
      answer: "We offer multiple support channels including email support (24/7), live chat (business hours), phone support (priority plans), and a comprehensive knowledge base with video tutorials. Enterprise clients get a dedicated account manager and priority support. All support requests are tracked in our ticketing system to ensure timely resolution.",
      category: "support",
      helpful: 156,
      views: 1340,
    },
    {
      id: 11,
      question: "Do you provide training for your solutions?",
      answer: "Yes, we provide comprehensive training for all our solutions. This includes documentation, video tutorials, live webinars, and personalized training sessions. Our goal is to ensure your team is fully equipped to leverage our solutions effectively. We also offer ongoing training programs for new features and updates.",
      category: "getting-started",
      helpful: 87,
      views: 720,
    },
    {
      id: 12,
      question: "What happens if I need custom features?",
      answer: "We offer custom development services for features not available in standard packages. Our team will work with you to understand your requirements and develop custom solutions that fit your unique business needs. Contact our sales team to discuss custom development options and get a detailed quote for your project.",
      category: "development",
      helpful: 112,
      views: 950,
    },
    {
      id: 13,
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial for all our plans. No credit card required. During the trial period, you'll have access to all features and can test the platform with your real data. Our team is available to assist you during the trial to ensure you get the most out of the experience.",
      category: "account",
      helpful: 189,
      views: 2100,
    },
    {
      id: 14,
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription at any time from your account dashboard. There are no cancellation fees. Your subscription will remain active until the end of your current billing cycle. We'll send you a confirmation email upon cancellation, and you can always reactivate your account later if needed.",
      category: "account",
      helpful: 134,
      views: 1120,
    },
    {
      id: 15,
      question: "What programming languages do you support?",
      answer: "We support a wide range of programming languages including JavaScript/TypeScript, Python, Java, PHP, Ruby, Go, and C#. Our SDKs and API clients are available for all major languages, and we provide code examples to help you get started quickly. If you need support for a specific language, please let us know.",
      category: "development",
      helpful: 98,
      views: 860,
    },
  ];

  const stats = [
    { number: "500+", label: "Questions Answered", icon: <FiHelpCircle />, color: "from-blue-500 to-blue-600" },
    { number: "98%", label: "Customer Satisfaction", icon: <FiThumbsUp />, color: "from-purple-500 to-purple-600" },
    { number: "24/7", label: "Support Available", icon: <FiClock />, color: "from-pink-500 to-pink-600" },
    { number: "< 2hrs", label: "Average Response", icon: <FiZap />, color: "from-orange-500 to-orange-600" },
  ];

  const filteredFaqs = faqs.filter(faq => 
    (activeCategory === "all" || faq.category === activeCategory) &&
    (faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
     faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
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
    <div className="bg-white min-h-screen overflow-hidden">
      {/* Hero Section with Padding */}
      <section className="relative py-20 md:py-28 lg:py-32 flex items-center justify-center overflow-hidden">
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
            ❓
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
            🤔
          </motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-6 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-white/30"
          >
            <FiHelpCircle className="text-5xl" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Frequently Asked Questions
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
            Find answers to common questions about our services, products, and solutions.
            Can't find what you're looking for? Our support team is here to help.
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
                placeholder="Search for answers..."
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
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {["Getting Started", "Account & Billing", "Security", "Integrations"].map((topic, i) => (
              <button
                key={i}
                onClick={() => {
                  const category = topic.toLowerCase().replace(" & ", "-").replace(" ", "-");
                  setActiveCategory(category === "getting-started" ? "getting-started" : 
                                    category === "account-&-billing" ? "account" : 
                                    category === "security" ? "security" : "integrations");
                }}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white hover:bg-white/30 transition-all duration-300 hover:scale-105 transform"
              >
                {topic}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`text-4xl mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent flex justify-center`}>
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : "bg-white text-gray-600 hover:bg-gray-100 shadow-sm"
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeCategory === category.id ? "bg-white/20 text-white" : "bg-gray-200 text-gray-600"
                }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* View Toggle */}
          <div className="flex justify-end mb-6">
            <div className="bg-gray-100 rounded-lg p-1 flex gap-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === "grid" ? "bg-white shadow-md text-blue-600" : "text-gray-500"}`}
              >
                <FiGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === "list" ? "bg-white shadow-md text-blue-600" : "text-gray-500"}`}
              >
                <FiList className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* FAQ Items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`space-y-4 ${viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-4 space-y-0" : "space-y-4"}`}
          >
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                variants={itemVariants}
                className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${
                  viewMode === "grid" ? "border border-gray-100" : ""
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="flex items-start gap-3 flex-1">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${
                      categories.find(c => c.id === faq.category)?.color || "from-blue-500 to-blue-600"
                    } flex items-center justify-center text-white text-sm flex-shrink-0`}>
                      {categories.find(c => c.id === faq.category)?.icon || <FiHelpCircle />}
                    </div>
                    <span className="font-semibold text-gray-800 flex-1 pr-4">{faq.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: openFaq === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <FiChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-5 border-t border-gray-100"
                    >
                      <p className="text-gray-600 text-sm leading-relaxed mt-4">{faq.answer}</p>
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <FiEye className="w-3 h-3" />
                            {faq.views} views
                          </span>
                          <span className="flex items-center gap-1">
                            <FiThumbsUp className="w-3 h-3" />
                            {faq.helpful} helpful
                          </span>
                        </div>
                        <button className="text-xs text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1">
                          Was this helpful?
                          <FiThumbsUp className="w-3 h-3" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {filteredFaqs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No questions found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Still Have Questions Section */}
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
              <FiMessageSquare className="text-3xl text-white" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our support team is ready to help you.
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
                Live Chat
              </motion.button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <FiMail className="w-4 h-4" />
                <span>support@techsynergia.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FiPhone className="w-4 h-4" />
                <span>+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <FiClock className="w-4 h-4" />
                <span>24/7 Support</span>
              </div>
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

export default Faq;