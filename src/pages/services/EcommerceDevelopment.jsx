import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiShoppingCart,
  FiCreditCard,
  FiTruck,
  FiPackage,
  FiBarChart2,
  FiUsers,
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
  FiTag,
  FiPercent,
  FiGift,
  FiRefreshCw,
  FiSearch,
  FiFilter,
  FiCamera,
  FiMail,
  FiMessageCircle,
  FiDownload,
  FiUpload,
  FiTrendingUp,
  FiDollarSign,
  FiLock,
  FiEye,
  FiMapPin,
  FiSmartphone,
  FiLayout,
  FiCode,
} from "react-icons/fi";

import {
  SiShopify,
  SiWoocommerce,
  SiBigcommerce,
  SiPrestashop,
  SiSquarespace,
  SiWix,
  SiSalesforce,
  SiSap,
  SiShopware,
} from "react-icons/si";

import { FaMagento, FaOpencart } from "react-icons/fa";
import ContactWithUs from "../../component/services/ContactWithUs";
import ProcessSection from "../../component/services/ProcessSection";
import ClientTestimonials from "../../component/services/ClientTestimonials";

const EcommerceDevelopment = () => {
  const [activeTab, setActiveTab] = useState("all");

  const stats = [
    {
      number: "200+",
      label: "Stores Launched",
      icon: <FiShoppingCart />,
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
      icon: <FiGlobe />,
      color: "from-orange-500 to-orange-600",
      suffix: "Industries",
    },
    {
      number: "50+",
      label: "E-commerce Experts",
      icon: <FiUsers />,
      color: "from-green-500 to-green-600",
      suffix: "Team",
    },
    {
      number: "$100M+",
      label: "Revenue Generated",
      icon: <FiDollarSign />,
      color: "from-red-500 to-red-600",
      suffix: "Sales",
    },
  ];

  const platforms = [
    {
      name: "Shopify",
      icon: <SiShopify />,
      color: "from-green-500 to-green-700",
      bg: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      name: "WooCommerce",
      icon: <SiWoocommerce />,
      color: "from-purple-500 to-purple-700",
      bg: "bg-purple-100",
      textColor: "text-purple-600",
    },
    {
      name: "Magento",
      icon: <FaMagento />,
      color: "from-orange-500 to-orange-700",
      bg: "bg-orange-100",
      textColor: "text-orange-600",
    },
    {
      name: "BigCommerce",
      icon: <SiBigcommerce />,
      color: "from-blue-500 to-blue-700",
      bg: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      name: "PrestaShop",
      icon: <SiPrestashop />,
      color: "from-pink-500 to-pink-700",
      bg: "bg-pink-100",
      textColor: "text-pink-600",
    },
    {
      name: "OpenCart",
      icon: <FaOpencart />,
      color: "from-yellow-500 to-yellow-700",
      bg: "bg-yellow-100",
      textColor: "text-yellow-600",
    },

    // 🔥 NEW ADDED

    {
      name: "Squarespace",
      icon: <SiSquarespace />,
      color: "from-gray-500 to-gray-700",
      bg: "bg-gray-100",
      textColor: "text-gray-600",
    },
    {
      name: "Wix",
      icon: <SiWix />,
      color: "from-indigo-500 to-indigo-700",
      bg: "bg-indigo-100",
      textColor: "text-indigo-600",
    },
    {
      name: "Salesforce Commerce",
      icon: <SiSalesforce />,
      color: "from-blue-400 to-blue-600",
      bg: "bg-blue-100",
      textColor: "text-blue-500",
    },
    {
      name: "SAP Commerce",
      icon: <SiSap />,
      color: "from-yellow-400 to-yellow-600",
      bg: "bg-yellow-100",
      textColor: "text-yellow-600",
    },
    {
      name: "Shopware",
      icon: <SiShopware />,
      color: "from-orange-400 to-orange-600",
      bg: "bg-orange-100",
      textColor: "text-orange-500",
    },
    {
      name: "Ecwid",
      icon: <FiCode />,
      color: "from-green-400 to-green-600",
      bg: "bg-green-100",
      textColor: "text-green-500",
    },
  ];

  const services = [
    {
      title: "Custom E-commerce Stores",
      description:
        "Tailored online stores built from scratch for your unique business needs",
      icon: <FiShoppingCart />,
      features: [
        "Custom Design",
        "Product Management",
        "Shopping Cart",
        "Checkout System",
      ],
      color: "from-blue-500 to-blue-600",
      iconColor: "text-blue-600",
    },
    {
      title: "Multi-Vendor Marketplaces",
      description:
        "Platforms where multiple sellers can list and sell their products",
      icon: <FiUsers />,
      features: [
        "Vendor Dashboard",
        "Commission System",
        "Vendor Payouts",
        "Product Approval",
      ],
      color: "from-purple-500 to-purple-600",
      iconColor: "text-purple-600",
    },
    {
      title: "B2B E-commerce",
      description:
        "Business-to-business portals with bulk ordering and wholesale pricing",
      icon: <FiPackage />,
      features: [
        "Bulk Orders",
        "Quote System",
        "Company Accounts",
        "Tiered Pricing",
      ],
      color: "from-pink-500 to-pink-600",
      iconColor: "text-pink-600",
    },
    {
      title: "Dropshipping Stores",
      description:
        "Stores integrated with dropshipping suppliers for automated fulfillment",
      icon: <FiTruck />,
      features: [
        "Supplier Integration",
        "Automated Orders",
        "Inventory Sync",
        "Tracking",
      ],
      color: "from-orange-500 to-orange-600",
      iconColor: "text-orange-600",
    },
    {
      title: "Subscription Boxes",
      description: "Recurring billing and subscription management platforms",
      icon: <FiRefreshCw />,
      features: [
        "Recurring Billing",
        "Subscription Plans",
        "Customer Portal",
        "Pause/Skip",
      ],
      color: "from-green-500 to-green-600",
      iconColor: "text-green-600",
    },
    {
      title: "Digital Products",
      description:
        "Stores for selling digital goods, downloads, and software licenses",
      icon: <FiDownload />,
      features: [
        "File Downloads",
        "License Keys",
        "DRM Protection",
        "Delivery System",
      ],
      color: "from-teal-500 to-teal-600",
      iconColor: "text-teal-600",
    },
    {
      title: "Mobile Commerce Apps",
      description: "Native mobile shopping apps for iOS and Android",
      icon: <FiSmartphone />,
      features: [
        "Mobile Checkout",
        "Push Notifications",
        "Product Scanning",
        "Mobile Wallet",
      ],
      color: "from-indigo-500 to-indigo-600",
      iconColor: "text-indigo-600",
    },
    {
      title: "Enterprise Solutions",
      description: "Large-scale e-commerce platforms for enterprise businesses",
      icon: <FiGlobe />,
      features: [
        "High Scalability",
        "Multi-currency",
        "Multi-language",
        "ERP Integration",
      ],
      color: "from-red-500 to-red-600",
      iconColor: "text-red-600",
    },
  ];

  const features = [
    {
      title: "Product Management",
      icon: <FiPackage />,
      color: "text-blue-500",
    },
    {
      title: "Shopping Cart",
      icon: <FiShoppingCart />,
      color: "text-purple-500",
    },
    { title: "Secure Checkout", icon: <FiLock />, color: "text-pink-500" },
    {
      title: "Payment Gateway",
      icon: <FiCreditCard />,
      color: "text-orange-500",
    },
    {
      title: "Shipping Integration",
      icon: <FiTruck />,
      color: "text-green-500",
    },
    {
      title: "Inventory Management",
      icon: <FiLayers />,
      color: "text-teal-500",
    },
    { title: "Order Tracking", icon: <FiMapPin />, color: "text-indigo-500" },
    { title: "Customer Accounts", icon: <FiUsers />, color: "text-red-500" },
    { title: "Product Search", icon: <FiSearch />, color: "text-cyan-500" },
    {
      title: "Filters & Sorting",
      icon: <FiFilter />,
      color: "text-yellow-500",
    },
    { title: "Product Reviews", icon: <FiStar />, color: "text-amber-500" },
    { title: "Wishlist", icon: <FiHeart />, color: "text-rose-500" },
    {
      title: "Discounts & Coupons",
      icon: <FiPercent />,
      color: "text-emerald-500",
    },
    { title: "Gift Cards", icon: <FiGift />, color: "text-violet-500" },
    {
      title: "SEO Optimization",
      icon: <FiTrendingUp />,
      color: "text-fuchsia-500",
    },
    { title: "Analytics", icon: <FiBarChart2 />, color: "text-sky-500" },
  ];

  const filterTabs = [
    { id: "all", name: "All Solutions", icon: "🛍️" },
    { id: "b2c", name: "B2C Stores", icon: "👤" },
    { id: "b2b", name: "B2B Portals", icon: "🏢" },
    { id: "marketplace", name: "Marketplaces", icon: "🏪" },
    { id: "enterprise", name: "Enterprise", icon: "🏛️" },
  ];

  const filteredServices =
    activeTab === "all"
      ? services
      : activeTab === "b2c"
        ? services.filter((s) =>
            [
              "Custom E-commerce Stores",
              "Mobile Commerce Apps",
              "Digital Products",
            ].includes(s.title),
          )
        : activeTab === "b2b"
          ? services.filter((s) =>
              ["B2B E-commerce", "Dropshipping Stores"].includes(s.title),
            )
          : activeTab === "marketplace"
            ? services.filter((s) =>
                ["Multi-Vendor Marketplaces", "Subscription Boxes"].includes(
                  s.title,
                ),
              )
            : services.filter((s) =>
                ["Enterprise Solutions", "Custom E-commerce Stores"].includes(
                  s.title,
                ),
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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>

          {/* Animated Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 20px 20px, white 1.5px, transparent 0)`,
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>

          {/* Floating Icons */}
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-20 left-20 text-8xl opacity-20"
          >
            🛒
          </motion.div>

          <motion.div
            animate={{
              x: [0, -50, 0],
              y: [0, 50, 0],
              rotate: [0, -360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-20 right-20 text-8xl opacity-20"
          >
            💳
          </motion.div>

          <motion.div
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute top-1/3 right-1/4 text-6xl opacity-20"
          >
            📦
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center text-white">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
            className="w-28 h-28 mx-auto mb-8 bg-white/20 backdrop-blur-lg rounded-3xl flex items-center justify-center border border-white/30 shadow-2xl"
          >
            <FiShoppingCart className="text-6xl" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              E-commerce
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
            Build powerful online stores that drive sales and delight customers.
            <br className="hidden sm:block" />
            200+ successful e-commerce projects delivered.
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
                View Our Stores
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
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                E-commerce Platforms
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Expertise across all major e-commerce platforms
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4"
          >
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`${platform.bg} rounded-2xl p-4 sm:p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group`}
              >
                <div className="flex justify-center">
                  <div
                    className={`text-3xl sm:text-4xl mb-2 ${platform.textColor} group-hover:scale-110 transition-transform`}
                  >
                    {platform.icon}
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-700">
                  {platform.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                E-commerce Solutions
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Tailored e-commerce solutions for every business model
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
                    ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg"
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

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Powerful E-commerce Features
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to run a successful online store
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
                className="bg-white rounded-xl p-3 sm:p-4 text-center shadow hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div
                  className={`text-2xl sm:text-3xl mb-2 ${feature.color} flex justify-center group-hover:scale-110 transition-transform`}
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

export default EcommerceDevelopment;
