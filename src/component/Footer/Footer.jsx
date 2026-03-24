import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiClock,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiFacebook,
  FiYoutube,
  FiHeart,
  FiArrowRight
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: "About Us", path: "/about-us" },
    { name: "Our Services", path: "/services" },
    { name: "Projects", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" }
  ];

  const serviceLinks = [
    { name: "Web Development", path: "/website-development" },
    { name: "Mobile App Development", path: "/mobile-app-development" },
    { name: "E-commerce Development", path: "/ecommerce-development" },
    { name: "Custom Software", path: "/custom-software-development" },
    { name: "CRM Solutions", path: "/erp-crm-solution" },
    { name: "Cloud Services", path: "/cloud-services" }
  ];

  const supportLinks = [
    { name: "Help Center", path: "/help-center" },
    { name: "FAQs", path: "/faqs" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms-of-service" },
    { name: "Cookie Policy", path: "/cookie-policy" },
    { name: "Sitemap", path: "/sitemap" }
  ];

  const socialLinks = [
    { icon: <FiFacebook />, href: "https://facebook.com", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: <FiTwitter />, href: "https://twitter.com", label: "Twitter", color: "hover:bg-blue-400" },
    { icon: <FiLinkedin />, href: "https://linkedin.com", label: "LinkedIn", color: "hover:bg-blue-700" },
    { icon: <FiInstagram />, href: "https://instagram.com", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: <FiGithub />, href: "https://github.com", label: "GitHub", color: "hover:bg-gray-800" },
    { icon: <FiYoutube />, href: "https://youtube.com", label: "YouTube", color: "hover:bg-red-600" }
  ];

  const contactInfo = [
    { icon: <FiMapPin />, text: "123 Tech Street, Silicon Valley, CA 94025" },
    { icon: <FiPhone />, text: "+1 (800) 123-4567" },
    { icon: <FiMail />, text: "hello@techsynergia.com" },
    { icon: <FiClock />, text: "Mon-Fri: 9:00 AM - 6:00 PM" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Stay Updated
                  </span>
                </h3>
                <p className="text-gray-400 max-w-lg">
                  Subscribe to our newsletter for the latest updates, insights, and tech news.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <div className="relative flex-1 min-w-[300px]">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group flex items-center justify-center space-x-2"
                >
                  <span>Subscribe</span>
                  <FiSend className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TS</span>
              </div>
              <span className="text-xl font-bold text-white group-hover:scale-105 transition-transform">
                Tech<span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Synergia</span>
              </span>
            </Link>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering businesses through innovative technology solutions. We transform ideas into digital reality with cutting-edge expertise.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 text-sm">
                  <div className="text-gray-400 mt-0.5">{item.icon}</div>
                  <span className="text-gray-400">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-semibold text-white relative inline-block">
              Company
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Link to={link.path} className="flex items-center space-x-2">
                    <FiArrowRight className="w-3 h-3 text-blue-400" />
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-semibold text-white relative inline-block">
              Our Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></span>
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Link to={link.path} className="flex items-center space-x-2">
                    <FiArrowRight className="w-3 h-3 text-purple-400" />
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-semibold text-white relative inline-block">
              Support
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-pink-500 to-orange-500"></span>
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Link to={link.path} className="flex items-center space-x-2">
                    <FiArrowRight className="w-3 h-3 text-pink-400" />
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Follow Us</h4>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-white transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Copyright Bar */}
      <div className="relative border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500 text-center md:text-left">
              © {currentYear} Tech Synergia. All rights reserved. | 
              <Link to="/privacy-policy" className="hover:text-white transition-colors ml-2">Privacy Policy</Link> | 
              <Link to="/terms-of-service" className="hover:text-white transition-colors ml-2">Terms of Service</Link>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>Made with</span>
              <FiHeart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>by Tech Synergia Team</span>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-500">We Accept:</span>
              <div className="flex space-x-1">
                <span className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400">Visa</span>
                <span className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400">Mastercard</span>
                <span className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400">PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-all duration-300 z-50"
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;