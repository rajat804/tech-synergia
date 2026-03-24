import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiShield,
  FiLock,
  FiEye,
  FiUserCheck,
  FiGlobe,
  FiMail,
  FiDatabase,
  FiServer,
  FiCloud,
  FiClock,
  FiFileText,
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
} from "react-icons/fi";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("introduction");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [openSections, setOpenSections] = useState({
    introduction: true,
    information: false,
    usage: false,
    sharing: false,
    security: false,
    rights: false,
    cookies: false,
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
    { id: "introduction", name: "Introduction", icon: <FiBookOpen />, color: "from-blue-500 to-blue-600" },
    { id: "information", name: "Information We Collect", icon: <FiDatabase />, color: "from-purple-500 to-purple-600" },
    { id: "usage", name: "How We Use Your Information", icon: <FiSettings />, color: "from-pink-500 to-pink-600" },
    { id: "sharing", name: "Information Sharing", icon: <FiShare2 />, color: "from-orange-500 to-orange-600" },
    { id: "security", name: "Data Security", icon: <FiLock />, color: "from-green-500 to-green-600" },
    { id: "rights", name: "Your Rights", icon: <FiUserCheck />, color: "from-teal-500 to-teal-600" },
    { id: "cookies", name: "Cookies & Tracking", icon: <FiEye />, color: "from-indigo-500 to-indigo-600" },
    { id: "changes", name: "Changes to Policy", icon: <FiRefreshCw />, color: "from-red-500 to-red-600" },
    { id: "contact", name: "Contact Us", icon: <FiMail />, color: "from-cyan-500 to-cyan-600" },
  ];

  const lastUpdated = "March 24, 2025";

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
            🔒
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute bottom-20 right-10 text-6xl opacity-20"
          >
            🛡️
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 left-1/4 text-6xl opacity-20"
          >
            🔐
          </motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-6 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-white/30"
          >
            <FiShield className="text-5xl" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Privacy Policy
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
            Your privacy is important to us. This policy explains how we collect,
            use, and protect your personal information.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm"
          >
            <FiClock className="w-4 h-4" />
            <span>Last Updated: {lastUpdated}</span>
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
            {/* Introduction Section */}
            <div
              id="introduction"
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleSection("introduction")}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-blue-50 to-white hover:from-blue-100 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white">
                    <FiBookOpen className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Introduction</h2>
                </div>
                <motion.div
                  animate={{ rotate: openSections.introduction ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openSections.introduction && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="prose max-w-none">
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Tech Synergia ("we," "our," or "us") is committed to protecting your privacy. 
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                        information when you visit our website or use our services.
                      </p>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Please read this privacy policy carefully. If you do not agree with the terms 
                        of this privacy policy, please do not access the site or use our services.
                      </p>
                      <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                        <div className="flex items-start gap-3">
                          <FiInfo className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-blue-800">
                            This policy applies to all information collected through our website, 
                            applications, and any related services. We reserve the right to update this 
                            policy at any time.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Information We Collect */}
            <div
              id="information"
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleSection("information")}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-purple-50 to-white hover:from-purple-100 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-white">
                    <FiDatabase className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Information We Collect</h2>
                </div>
                <motion.div
                  animate={{ rotate: openSections.information ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openSections.information && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Personal Data</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          While using our services, we may ask you to provide us with certain personally 
                          identifiable information that can be used to contact or identify you. This includes:
                        </p>
                        <ul className="mt-3 space-y-2">
                          {["Name and contact information", "Email address", "Phone number", "Company details", "Billing information"].map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                              <FiCheckCircle className="w-4 h-4 text-green-500" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Usage Data</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          We automatically collect certain information when you visit our website, including:
                        </p>
                        <ul className="mt-3 space-y-2">
                          {["IP address", "Browser type and version", "Pages visited", "Time and date of visit", "Device information"].map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                              <FiCheckCircle className="w-4 h-4 text-green-500" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* How We Use Your Information */}
            <div
              id="usage"
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleSection("usage")}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-pink-50 to-white hover:from-pink-100 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 flex items-center justify-center text-white">
                    <FiSettings className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">How We Use Your Information</h2>
                </div>
                <motion.div
                  animate={{ rotate: openSections.usage ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openSections.usage && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Tech Synergia uses the collected data for various purposes:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "To provide and maintain our services",
                        "To notify you about changes to our services",
                        "To provide customer support",
                        "To gather analysis or valuable information",
                        "To monitor the usage of our services",
                        "To detect, prevent and address technical issues",
                        "To provide you with news and offers",
                        "To personalize your experience",
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 group">
                          <FiCheckCircle className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform" />
                          <span className="text-sm text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Information Sharing */}
            <div
              id="sharing"
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleSection("sharing")}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-orange-50 to-white hover:from-orange-100 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white">
                    <FiShare2 className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Information Sharing</h2>
                </div>
                <motion.div
                  animate={{ rotate: openSections.sharing ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openSections.sharing && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      We do not sell, trade, or rent your personal identification information to others. 
                      We may share generic aggregated demographic information not linked to any personal 
                      identification information regarding visitors and users with our business partners, 
                      trusted affiliates, and advertisers.
                    </p>
                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                      <div className="flex items-start gap-3">
                        <FiAlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-amber-800">
                          We may disclose your personal information if required to do so by law or in 
                          response to valid requests by public authorities.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Data Security */}
            <div
              id="security"
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleSection("security")}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-green-50 to-white hover:from-green-100 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white">
                    <FiLock className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Data Security</h2>
                </div>
                <motion.div
                  animate={{ rotate: openSections.security ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openSections.security && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      The security of your data is important to us. We implement a variety of security 
                      measures to maintain the safety of your personal information when you enter, submit, 
                      or access your personal information.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "SSL/TLS encryption",
                        "Firewall protection",
                        "Regular security audits",
                        "Access controls",
                        "Data backup systems",
                        "Intrusion detection",
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

            {/* Your Rights */}
            <div
              id="rights"
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleSection("rights")}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-teal-50 to-white hover:from-teal-100 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 flex items-center justify-center text-white">
                    <FiUserCheck className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Your Rights</h2>
                </div>
                <motion.div
                  animate={{ rotate: openSections.rights ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openSections.rights && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      You have certain rights regarding your personal information:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "The right to access your personal data",
                        "The right to rectify inaccurate data",
                        "The right to erasure (right to be forgotten)",
                        "The right to restrict processing",
                        "The right to data portability",
                        "The right to object to processing",
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

            {/* Cookies & Tracking */}
            <div
              id="cookies"
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleSection("cookies")}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-indigo-50 to-white hover:from-indigo-100 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center text-white">
                    <FiEye className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Cookies & Tracking</h2>
                </div>
                <motion.div
                  animate={{ rotate: openSections.cookies ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openSections.cookies && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      We use cookies and similar tracking technologies to track activity on our service 
                      and hold certain information. Cookies are files with small amount of data which 
                      may include an anonymous unique identifier.
                    </p>
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                      <div className="flex items-start gap-3">
                        <FiInfo className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-blue-800">
                          You can instruct your browser to refuse all cookies or to indicate when a 
                          cookie is being sent. However, if you do not accept cookies, you may not be 
                          able to use some portions of our service.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Changes to Policy */}
            <div
              id="changes"
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleSection("changes")}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-red-50 to-white hover:from-red-100 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-white">
                    <FiRefreshCw className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Changes to This Policy</h2>
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
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We may update our Privacy Policy from time to time. We will notify you of any 
                      changes by posting the new Privacy Policy on this page and updating the "Last Updated" 
                      date at the top of this Privacy Policy. You are advised to review this Privacy Policy 
                      periodically for any changes. Changes to this Privacy Policy are effective when they 
                      are posted on this page.
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
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-cyan-50 to-white hover:from-cyan-100 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 flex items-center justify-center text-white">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Contact Us</h2>
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
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      If you have any questions about this Privacy Policy, please contact us:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group">
                        <FiMail className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                        <div>
                          <p className="text-sm font-medium text-gray-800">Email</p>
                          <p className="text-sm text-gray-600">privacy@techsynergia.com</p>
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

export default PrivacyPolicy;