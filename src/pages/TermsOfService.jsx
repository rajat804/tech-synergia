import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiFileText,
  FiShield,
  FiLock,
  FiUserCheck,
  FiGlobe,
  FiMail,
  FiDatabase,
  FiServer,
  FiCloud,
  FiClock,
  FiCheckCircle,
  FiArrowRight,
  FiArrowUp,
  FiX,
  FiChevronDown,
  FiChevronUp,
  FiBookOpen,
  FiAlertTriangle,
  FiInfo,
  FiLink,
  FiTrash2,
  FiRefreshCw,
  FiDownload,
  FiUpload,
  FiShare2,
  FiSettings,
  FiBell,
  FiUsers,
  FiDollarSign,
  FiCreditCard,
  FiActivity,
  FiZap,
  FiThumbsUp,
} from "react-icons/fi";
import { FaGavel,FaBalanceScale  } from "react-icons/fa";

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState("acceptance");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [openSections, setOpenSections] = useState({
    acceptance: true,
    services: false,
    accounts: false,
    payments: false,
    intellectual: false,
    restrictions: false,
    termination: false,
    disclaimers: false,
    liability: false,
    governing: false,
    changes: false,
    contact: false,
  });

  // Handle scroll for back to top button
  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSection = (section) => {
    setOpenSections({
      ...openSections,
      [section]: !openSections[section],
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const sections = [
    { id: "acceptance", name: "Acceptance of Terms", icon: <FiCheckCircle />, color: "from-blue-500 to-blue-600" },
    { id: "services", name: "Our Services", icon: <FiGlobe />, color: "from-purple-500 to-purple-600" },
    { id: "accounts", name: "User Accounts", icon: <FiUsers />, color: "from-pink-500 to-pink-600" },
    { id: "payments", name: "Payments & Fees", icon: <FiDollarSign />, color: "from-orange-500 to-orange-600" },
    { id: "intellectual", name: "Intellectual Property", icon: <FiShield />, color: "from-green-500 to-green-600" },
    { id: "restrictions", name: "Prohibited Uses", icon: <FiAlertTriangle />, color: "from-teal-500 to-teal-600" },
    { id: "termination", name: "Termination", icon: <FiX />, color: "from-indigo-500 to-indigo-600" },
    { id: "disclaimers", name: "Disclaimers", icon: <FiInfo />, color: "from-red-500 to-red-600" },
    { id: "liability", name: "Limitation of Liability", icon: <FaBalanceScale />, color: "from-cyan-500 to-cyan-600" },
    { id: "governing", name: "Governing Law", icon: <FaGavel />, color: "from-emerald-500 to-emerald-600" },
    { id: "changes", name: "Changes to Terms", icon: <FiRefreshCw />, color: "from-amber-500 to-amber-600" },
    { id: "contact", name: "Contact Us", icon: <FiMail />, color: "from-rose-500 to-rose-600" },
  ];

  const effectiveDate = "March 24, 2025";

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
            ⚖️
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute bottom-20 right-10 text-6xl opacity-20"
          >
            📜
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 left-1/4 text-6xl opacity-20"
          >
            🔏
          </motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-6 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-white/30"
          >
            <FiFileText className="text-5xl" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Terms of Service
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
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6"
          >
            Please read these terms carefully before using our services. By accessing or using our
            platform, you agree to be bound by these terms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm"
          >
            <FiClock className="w-4 h-4" />
            <span>Effective Date: {effectiveDate}</span>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-80 flex-shrink-0"
          >
            <div className="sticky top-24 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-5 text-white">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <FiBookOpen className="w-5 h-5" />
                  Contents
                </h3>
                <p className="text-sm text-white/80 mt-1">Jump to section</p>
              </div>
              <div className="p-4 max-h-[60vh] overflow-y-auto">
                {sections.map((section) => (
                  <motion.button
                    key={section.id}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg mb-1 transition-all duration-300 flex items-center gap-3 group ${
                      activeSection === section.id
                        ? `bg-gradient-to-r ${section.color} text-white shadow-md`
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <div className={`text-lg ${activeSection === section.id ? "text-white" : "text-gray-400 group-hover:text-gray-600"}`}>
                      {section.icon}
                    </div>
                    <span className="text-sm font-medium">{section.name}</span>
                    {activeSection === section.id && (
                      <FiCheckCircle className="ml-auto w-4 h-4" />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Content Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 space-y-6"
          >
            {/* Acceptance of Terms */}
            <div
              id="acceptance"
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleSection("acceptance")}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-blue-50 to-white hover:from-blue-100 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white">
                    <FiCheckCircle className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">1. Acceptance of Terms</h2>
                </div>
                <motion.div
                  animate={{ rotate: openSections.acceptance ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openSections.acceptance && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="space-y-4">
                      <p className="text-gray-600 leading-relaxed">
                        By accessing or using Tech Synergia's website, services, or products (collectively, 
                        the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you 
                        do not agree to these Terms, please do not use our Services.
                      </p>
                      <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                        <div className="flex items-start gap-3">
                          <FiInfo className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-blue-800">
                            These Terms apply to all users of the Services, including visitors, customers, 
                            and contributors. By using our Services, you represent that you are at least 18 
                            years of age or have parental consent.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Our Services */}
            <div
              id="services"
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleSection("services")}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-purple-50 to-white hover:from-purple-100 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-white">
                    <FiGlobe className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">2. Our Services</h2>
                </div>
                <motion.div
                  animate={{ rotate: openSections.services ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openSections.services && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Tech Synergia provides software development, technology consulting, and digital 
                      transformation services. We reserve the right to modify, suspend, or discontinue 
                      any part of our Services at any time without prior notice.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                      {[
                        "Custom Software Development",
                        "Mobile App Development",
                        "Web Development",
                        "Cloud Solutions",
                        "IT Consulting",
                        "Digital Transformation",
                      ].map((service, i) => (
                        <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 group">
                          <FiCheckCircle className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform" />
                          <span className="text-sm text-gray-600">{service}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* User Accounts */}
            <div
              id="accounts"
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleSection("accounts")}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-pink-50 to-white hover:from-pink-100 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 flex items-center justify-center text-white">
                    <FiUsers className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">3. User Accounts</h2>
                </div>
                <motion.div
                  animate={{ rotate: openSections.accounts ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openSections.accounts && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed mb-4">
                      To access certain features of our Services, you may be required to create an account. 
                      You are responsible for maintaining the confidentiality of your account credentials 
                      and for all activities that occur under your account.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "You must provide accurate and complete information",
                        "You are responsible for all activities under your account",
                        "Notify us immediately of any unauthorized use",
                        "We may suspend or terminate accounts that violate these Terms",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                          <FiCheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Payments & Fees */}
            <div
              id="payments"
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleSection("payments")}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-orange-50 to-white hover:from-orange-100 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white">
                    <FiDollarSign className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">4. Payments & Fees</h2>
                </div>
                <motion.div
                  animate={{ rotate: openSections.payments ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openSections.payments && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Fees for our Services are outlined in your service agreement. All fees are 
                      non-refundable unless otherwise specified. We reserve the right to change our 
                      fees at any time with notice.
                    </p>
                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                      <div className="flex items-start gap-3">
                        <FiAlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-amber-800">
                          Late payments may result in suspension of services. We accept payments via 
                          credit card, bank transfer, and other methods as specified in your invoice.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Intellectual Property */}
            <div
              id="intellectual"
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleSection("intellectual")}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-green-50 to-white hover:from-green-100 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white">
                    <FiShield className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">5. Intellectual Property</h2>
                </div>
                <motion.div
                  animate={{ rotate: openSections.intellectual ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openSections.intellectual && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed mb-4">
                      All content, features, and functionality of our Services are owned by Tech Synergia 
                      and are protected by intellectual property laws.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "All code and software is our property",
                        "Designs, logos, and trademarks are protected",
                        "Content created for you belongs to you",
                        "We retain rights to our tools and methodologies",
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                          <FiCheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Prohibited Uses */}
            <div
              id="restrictions"
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleSection("restrictions")}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-teal-50 to-white hover:from-teal-100 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 flex items-center justify-center text-white">
                    <FiAlertTriangle className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">6. Prohibited Uses</h2>
                </div>
                <motion.div
                  animate={{ rotate: openSections.restrictions ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openSections.restrictions && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed mb-4">
                      You agree not to use our Services for any unlawful purpose or in any way that 
                      could damage, disable, or impair our Services.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Violate any applicable laws or regulations",
                        "Infringe upon intellectual property rights",
                        "Transmit malware or harmful code",
                        "Attempt to gain unauthorized access",
                        "Harass, abuse, or harm others",
                        "Interfere with service operations",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 p-3 bg-red-50 rounded-lg">
                          <FiX className="w-4 h-4 text-red-500" />
                          <span className="text-sm text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Termination */}
            <div
              id="termination"
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleSection("termination")}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-indigo-50 to-white hover:from-indigo-100 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center text-white">
                    <FiX className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">7. Termination</h2>
                </div>
                <motion.div
                  animate={{ rotate: openSections.termination ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openSections.termination && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed mb-4">
                      We may terminate or suspend your account immediately, without prior notice or liability, 
                      for any reason whatsoever, including without limitation if you breach these Terms.
                    </p>
                    <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                      <div className="flex items-start gap-3">
                        <FiAlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-red-800">
                          Upon termination, your right to use the Services will cease immediately. Sections 
                          that by their nature should survive termination shall survive.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Disclaimers */}
            <div
              id="disclaimers"
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleSection("disclaimers")}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-red-50 to-white hover:from-red-100 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-white">
                    <FiInfo className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">8. Disclaimers</h2>
                </div>
                <motion.div
                  animate={{ rotate: openSections.disclaimers ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openSections.disclaimers && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Our Services are provided "AS IS" and "AS AVAILABLE" without warranties of any kind, 
                      either express or implied.
                    </p>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-sm text-gray-600">
                        We do not warrant that the Services will be uninterrupted, secure, or error-free. 
                        We do not guarantee the accuracy or reliability of any information obtained through 
                        the Services.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Limitation of Liability */}
            <div
              id="liability"
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleSection("liability")}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-cyan-50 to-white hover:from-cyan-100 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 flex items-center justify-center text-white">
                    <FaBalanceScale className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">9. Limitation of Liability</h2>
                </div>
                <motion.div
                  animate={{ rotate: openSections.liability ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openSections.liability && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed mb-4">
                      To the fullest extent permitted by law, Tech Synergia shall not be liable for any 
                      indirect, incidental, special, consequential, or punitive damages.
                    </p>
                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                      <div className="flex items-start gap-3">
                        <FiAlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-amber-800">
                          Our total liability shall not exceed the amount you paid us during the twelve 
                          months prior to the claim.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Governing Law */}
            <div
              id="governing"
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleSection("governing")}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-emerald-50 to-white hover:from-emerald-100 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center text-white">
                    <FaGavel className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">10. Governing Law</h2>
                </div>
                <motion.div
                  animate={{ rotate: openSections.governing ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openSections.governing && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed">
                      These Terms shall be governed by the laws of the State of California, without 
                      regard to its conflict of law provisions. Any disputes arising under these Terms 
                      shall be resolved exclusively in the state or federal courts located in San Francisco 
                      County, California.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Changes to Terms */}
            <div
              id="changes"
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleSection("changes")}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-amber-50 to-white hover:from-amber-100 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center text-white">
                    <FiRefreshCw className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">11. Changes to Terms</h2>
                </div>
                <motion.div
                  animate={{ rotate: openSections.changes ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openSections.changes && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed">
                      We reserve the right to modify or replace these Terms at any time. If a revision is 
                      material, we will provide at least 30 days' notice prior to any new terms taking effect. 
                      By continuing to access or use our Services after those revisions become effective, you 
                      agree to be bound by the revised terms.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Us */}
            <div
              id="contact"
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleSection("contact")}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-rose-50 to-white hover:from-rose-100 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 flex items-center justify-center text-white">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">12. Contact Us</h2>
                </div>
                <motion.div
                  animate={{ rotate: openSections.contact ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openSections.contact && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed mb-4">
                      If you have any questions about these Terms, please contact us:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group">
                        <FiMail className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                        <div>
                          <p className="text-sm font-medium text-gray-800">Email</p>
                          <p className="text-sm text-gray-600">legal@techsynergia.com</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group">
                        <FiPhone className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform" />
                        <div>
                          <p className="text-sm font-medium text-gray-800">Phone</p>
                          <p className="text-sm text-gray-600">+1 (800) 123-4567</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group">
                        <FiMapPin className="w-5 h-5 text-purple-600 group-hover:scale-110 transition-transform" />
                        <div>
                          <p className="text-sm font-medium text-gray-800">Address</p>
                          <p className="text-sm text-gray-600">123 Tech Street, Silicon Valley, CA 94025</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group">
                        <FiClock className="w-5 h-5 text-orange-600 group-hover:scale-110 transition-transform" />
                        <div>
                          <p className="text-sm font-medium text-gray-800">Hours</p>
                          <p className="text-sm text-gray-600">Mon-Fri, 9am-6pm EST</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-all duration-300 z-50"
          >
            <FiArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* CSS */}
      <style jsx>{`
        .prose {
          max-width: none;
        }
      `}</style>
    </div>
  );
};

export default TermsOfService;