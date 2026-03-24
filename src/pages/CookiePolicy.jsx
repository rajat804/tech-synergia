import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FiGrid,
  FiShield,
  FiSettings,
  FiEye,
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
  FiActivity,
  FiZap,
  FiThumbsUp,
  FiSliders,
  FiToggleLeft,
  FiToggleRight,
  FiSmartphone,
  FiMonitor,
  FiCpu,
} from "react-icons/fi";

import { FaCookieBite } from "react-icons/fa";

const CookiePolicy = () => {
  const [activeSection, setActiveSection] = useState("what-are-cookies");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [openSections, setOpenSections] = useState({
    whatAreCookies: true,
    howWeUse: false,
    typesOfCookies: false,
    analytics: false,
    marketing: false,
    thirdParty: false,
    manageCookies: false,
    consent: false,
    updates: false,
    contact: false,
  });

  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    functional: true,
    analytics: false,
    marketing: false,
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

  const toggleCookiePreference = (type) => {
    setCookiePreferences({
      ...cookiePreferences,
      [type]: !cookiePreferences[type],
    });
  };

  const sections = [
    { id: "what-are-cookies", name: "What Are Cookies?", icon: <FaCookieBite />, color: "from-blue-500 to-blue-600" },
    { id: "how-we-use", name: "How We Use Cookies", icon: <FiSettings />, color: "from-purple-500 to-purple-600" },
    { id: "types-of-cookies", name: "Types of Cookies", icon: <FiGrid />, color: "from-pink-500 to-pink-600" },
    { id: "analytics", name: "Analytics Cookies", icon: <FiActivity />, color: "from-orange-500 to-orange-600" },
    { id: "marketing", name: "Marketing Cookies", icon: <FiShare2 />, color: "from-green-500 to-green-600" },
    { id: "third-party", name: "Third-Party Cookies", icon: <FiLink />, color: "from-teal-500 to-teal-600" },
    { id: "manage-cookies", name: "Manage Cookies", icon: <FiSliders />, color: "from-indigo-500 to-indigo-600" },
    { id: "consent", name: "Your Consent", icon: <FiUserCheck />, color: "from-red-500 to-red-600" },
    { id: "updates", name: "Updates to Policy", icon: <FiRefreshCw />, color: "from-cyan-500 to-cyan-600" },
    { id: "contact", name: "Contact Us", icon: <FiMail />, color: "from-emerald-500 to-emerald-600" },
  ];

  const cookieTypes = [
    {
      name: "Essential Cookies",
      icon: <FiLock />,
      color: "from-blue-500 to-blue-600",
      description: "Required for the website to function properly. Cannot be disabled.",
      examples: ["Authentication", "Security", "Session Management"],
      required: true,
    },
    {
      name: "Functional Cookies",
      icon: <FiSettings />,
      color: "from-purple-500 to-purple-600",
      description: "Enable enhanced functionality and personalization.",
      examples: ["Language Preferences", "Theme Selection", "Saved Settings"],
      required: false,
    },
    {
      name: "Analytics Cookies",
      icon: <FiActivity />,
      color: "from-orange-500 to-orange-600",
      description: "Help us understand how visitors interact with our website.",
      examples: ["Page Views", "Time on Site", "User Behavior"],
      required: false,
    },
    {
      name: "Marketing Cookies",
      icon: <FiShare2 />,
      color: "from-green-500 to-green-600",
      description: "Used to deliver relevant advertisements.",
      examples: ["Ad Targeting", "Campaign Performance", "Retargeting"],
      required: false,
    },
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
            🍪
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute bottom-20 right-10 text-6xl opacity-20"
          >
            🔍
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 left-1/4 text-6xl opacity-20"
          >
            🍪
          </motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-6 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-white/30"
          >
            <FaCookieBite className="text-5xl" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Cookie Policy
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
            We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
            Learn more about how we use cookies and your choices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm"
          >
            <FiClock className="w-4 h-4" />
            <span>Last Updated: {effectiveDate}</span>
          </motion.div>
        </div>
      </section>

      {/* Cookie Preferences Banner */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <FiSliders className="w-5 h-5 text-blue-600" />
                  Manage Your Cookie Preferences
                </h3>
                <p className="text-gray-600 text-sm">
                  Choose which cookies you want to allow. Essential cookies are always enabled as they're 
                  necessary for the website to function properly.
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setCookiePreferences({
                      essential: true,
                      functional: true,
                      analytics: true,
                      marketing: true,
                    });
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all hover:scale-105"
                >
                  Accept All
                </button>
                <button
                  onClick={() => {
                    setCookiePreferences({
                      essential: true,
                      functional: false,
                      analytics: false,
                      marketing: false,
                    });
                  }}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-semibold hover:border-blue-500 hover:text-blue-600 transition-all"
                >
                  Reject All
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-100">
              {cookieTypes.map((cookie) => (
                <div key={cookie.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${cookie.color} flex items-center justify-center text-white`}>
                      {cookie.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{cookie.name}</p>
                      <p className="text-xs text-gray-500">{cookie.required ? "Always Enabled" : "Optional"}</p>
                    </div>
                  </div>
                  {cookie.required ? (
                    <div className="px-3 py-1 bg-gray-200 rounded-full text-xs text-gray-600">Required</div>
                  ) : (
                    <button
                      onClick={() => toggleCookiePreference(cookie.name.toLowerCase().split(" ")[0])}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        cookiePreferences[cookie.name.toLowerCase().split(" ")[0]] ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          cookiePreferences[cookie.name.toLowerCase().split(" ")[0]] ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
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
            {/* What Are Cookies */}
            <div
              id="what-are-cookies"
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleSection("whatAreCookies")}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-blue-50 to-white hover:from-blue-100 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white">
                    <FaCookieBite className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">What Are Cookies?</h2>
                </div>
                <motion.div
                  animate={{ rotate: openSections.whatAreCookies ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openSections.whatAreCookies && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Cookies are small text files that are placed on your computer or mobile device when you 
                      visit a website. They are widely used to make websites work more efficiently, as well as 
                      to provide information to the owners of the site.
                    </p>
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                      <div className="flex items-start gap-3">
                        <FiInfo className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-blue-800">
                          Cookies are not harmful and do not contain viruses or malware. They simply help us 
                          provide you with a better browsing experience.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                        <FiSmartphone className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-gray-600">Stored on your device</span>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                        <FiMonitor className="w-4 h-4 text-purple-600" />
                        <span className="text-sm text-gray-600">Track browsing activity</span>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                        <FiCpu className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-gray-600">Remember your preferences</span>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                        <FiGlobe className="w-4 h-4 text-orange-600" />
                        <span className="text-sm text-gray-600">Enhance website functionality</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* How We Use Cookies */}
            <div
              id="how-we-use"
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleSection("howWeUse")}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-purple-50 to-white hover:from-purple-100 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-white">
                    <FiSettings className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">How We Use Cookies</h2>
                </div>
                <motion.div
                  animate={{ rotate: openSections.howWeUse ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openSections.howWeUse && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed mb-4">
                      We use cookies for various purposes to ensure our website functions properly and to 
                      provide you with the best possible experience:
                    </p>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        "To authenticate users and maintain security",
                        "To remember your preferences and settings",
                        "To analyze how you use our website",
                        "To personalize content and advertisements",
                        "To improve website performance and speed",
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

            {/* Types of Cookies */}
            <div
              id="types-of-cookies"
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleSection("typesOfCookies")}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-pink-50 to-white hover:from-pink-100 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 flex items-center justify-center text-white">
                    <FiGrid className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Types of Cookies We Use</h2>
                </div>
                <motion.div
                  animate={{ rotate: openSections.typesOfCookies ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openSections.typesOfCookies && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="grid grid-cols-1 gap-4">
                      {cookieTypes.map((cookie, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${cookie.color} flex items-center justify-center text-white`}>
                              {cookie.icon}
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-800">{cookie.name}</h3>
                              <p className="text-xs text-gray-500">{cookie.description}</p>
                            </div>
                            {cookie.required && (
                              <span className="ml-auto px-2 py-1 bg-gray-200 rounded-full text-xs text-gray-600">Required</span>
                            )}
                          </div>
                          <div className="mt-2">
                            <p className="text-xs font-medium text-gray-700 mb-1">Examples:</p>
                            <div className="flex flex-wrap gap-2">
                              {cookie.examples.map((example, idx) => (
                                <span key={idx} className="px-2 py-1 bg-white rounded-full text-xs text-gray-600">
                                  {example}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Analytics Cookies */}
            <div
              id="analytics"
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleSection("analytics")}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-orange-50 to-white hover:from-orange-100 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white">
                    <FiActivity className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Analytics Cookies</h2>
                </div>
                <motion.div
                  animate={{ rotate: openSections.analytics ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openSections.analytics && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed mb-4">
                      We use analytics cookies to understand how visitors interact with our website. This 
                      helps us improve our content, functionality, and user experience.
                    </p>
                    <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
                      <div className="flex items-start gap-3">
                        <FiInfo className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-orange-800">
                          Analytics data is aggregated and anonymized. We use tools like Google Analytics 
                          to collect information about page views, time spent on site, and user behavior.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">What we track:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {["Page views", "Time on site", "Bounce rate", "User location", "Device type", "Browser type"].map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <FiCheckCircle className="w-3 h-3 text-green-500" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Marketing Cookies */}
            <div
              id="marketing"
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleSection("marketing")}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-green-50 to-white hover:from-green-100 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white">
                    <FiShare2 className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Marketing Cookies</h2>
                </div>
                <motion.div
                  animate={{ rotate: openSections.marketing ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openSections.marketing && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Marketing cookies are used to track visitors across websites. The intention is to 
                      display ads that are relevant and engaging for the individual user.
                    </p>
                    <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                      <div className="flex items-start gap-3">
                        <FiInfo className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-green-800">
                          These cookies help us measure the effectiveness of our advertising campaigns 
                          and deliver personalized content based on your interests.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Third-Party Cookies */}
            <div
              id="third-party"
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleSection("thirdParty")}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-teal-50 to-white hover:from-teal-100 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 flex items-center justify-center text-white">
                    <FiLink className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Third-Party Cookies</h2>
                </div>
                <motion.div
                  animate={{ rotate: openSections.thirdParty ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openSections.thirdParty && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Some cookies are placed by third-party services that appear on our pages. These 
                      cookies are not controlled by us and are subject to the third party's privacy policy.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "Google Analytics",
                        "Facebook Pixel",
                        "Twitter Analytics",
                        "LinkedIn Insight Tag",
                        "YouTube Videos",
                        "Google Maps",
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                          <FiLink className="w-4 h-4 text-teal-600" />
                          <span className="text-sm text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Manage Cookies */}
            <div
              id="manage-cookies"
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleSection("manageCookies")}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-indigo-50 to-white hover:from-indigo-100 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center text-white">
                    <FiSliders className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">How to Manage Cookies</h2>
                </div>
                <motion.div
                  animate={{ rotate: openSections.manageCookies ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openSections.manageCookies && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed mb-4">
                      You can manage your cookie preferences through your browser settings. Most browsers 
                      allow you to:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                      {[
                        "View and delete individual cookies",
                        "Block third-party cookies",
                        "Block all cookies",
                        "Clear all cookies when you close the browser",
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                          <FiCheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100">
                      <div className="flex items-start gap-3">
                        <FiAlertTriangle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-indigo-800">
                          Please note that disabling certain cookies may affect the functionality of our 
                          website and your user experience.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Your Consent */}
            <div
              id="consent"
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleSection("consent")}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-red-50 to-white hover:from-red-100 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-white">
                    <FiUserCheck className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Your Consent</h2>
                </div>
                <motion.div
                  animate={{ rotate: openSections.consent ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openSections.consent && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed mb-4">
                      By using our website, you consent to the use of cookies as described in this 
                      Cookie Policy. You can change your cookie preferences at any time using the 
                      cookie settings panel at the top of this page.
                    </p>
                    <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                      <div className="flex items-start gap-3">
                        <FiThumbsUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-green-800">
                          Your consent is stored for 12 months. You can withdraw your consent at any 
                          time by adjusting your cookie preferences.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Updates to Policy */}
            <div
              id="updates"
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleSection("updates")}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-cyan-50 to-white hover:from-cyan-100 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 flex items-center justify-center text-white">
                    <FiRefreshCw className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Updates to This Policy</h2>
                </div>
                <motion.div
                  animate={{ rotate: openSections.updates ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openSections.updates && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed">
                      We may update this Cookie Policy from time to time to reflect changes in our practices 
                      or for operational, legal, or regulatory reasons. We will notify you of any material 
                      changes by posting the new policy on this page with an updated effective date.
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
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-emerald-50 to-white hover:from-emerald-100 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center text-white">
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
                    <p className="text-gray-600 leading-relaxed mb-4">
                      If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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

export default CookiePolicy;