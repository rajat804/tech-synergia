import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiClock,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiCheckCircle,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiAward
} from "react-icons/fi";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ""
  });

  const [activeField, setActiveField] = useState(null);

  const services = [
    "Web Development",
    "Mobile App Development",
    "E-commerce Development",
    "Custom Software",
    "CRM Solutions",
    "API Integration",
    "Business Automation",
    "Cloud Services"
  ];

  const contactInfo = [
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "123 Tech Street, Silicon Valley, CA 94025",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: "Call Us",
      content: "+1 (800) 123-4567",
      subContent: "Mon-Fri 9am-6pm PST",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Email Us",
      content: "hello@techsynergia.com",
      subContent: "support@techsynergia.com",
      color: "from-pink-400 to-pink-600"
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      title: "Working Hours",
      content: "Mon-Fri: 9:00 AM - 6:00 PM",
      subContent: "Sat-Sun: Closed",
      color: "from-orange-400 to-orange-600"
    }
  ];

  const socialLinks = [
    { icon: <FiGithub />, href: "#", label: "GitHub", color: "hover:text-gray-900" },
    { icon: <FiLinkedin />, href: "#", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: <FiTwitter />, href: "#", label: "Twitter", color: "hover:text-blue-400" },
    { icon: <FiInstagram />, href: "#", label: "Instagram", color: "hover:text-pink-600" }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitted: true, success: true, message: "Thank you! We'll get back to you within 24 hours." });
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormStatus({ submitted: false, success: false, message: "" });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    }, 3000);
  };

  return (
    <section className="relative py-16 md:py-24 min-h-screen flex items-center">
      {/* Full Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-purple-900/95 to-slate-900/95"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto mb-6 rounded-full"
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond within 24 hours.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="h-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-10 border border-white/20 shadow-2xl">
              {/* Company Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 500 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/30"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-white">Available for work</span>
              </motion.div>

              {/* Heading */}
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Let's Create Something
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
                  Amazing Together
                </span>
              </h3>

              <p className="text-gray-300 mb-8 max-w-md">
                Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
              </p>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`bg-gradient-to-br ${info.color} bg-opacity-20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:border-white/50 transition-all duration-300`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg p-2 text-white">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">{info.title}</h4>
                        <p className="text-white/90 text-xs mt-1">{info.content}</p>
                        {info.subContent && (
                          <p className="text-white/70 text-xs mt-0.5">{info.subContent}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <FiAward className="w-5 h-5 text-yellow-400" />
                  <span className="text-white text-sm">ISO Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <img
                        key={i}
                        src={`https://randomuser.me/api/portraits/men/${i}.jpg`}
                        alt="Team"
                        className="w-6 h-6 rounded-full border-2 border-white/50"
                      />
                    ))}
                  </div>
                  <span className="text-white text-sm">50+ Experts</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -3 }}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300 border border-white/30"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl">
              {/* Form Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Send us a Message</h3>
                <p className="text-gray-300 text-sm">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              {/* Success Message */}
              <AnimatePresence>
                {formStatus.submitted && formStatus.success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-lg flex items-center space-x-3"
                  >
                    <FiCheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 text-sm">{formStatus.message}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <motion.input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setActiveField('name')}
                      onBlur={() => setActiveField(null)}
                      required
                      className={`w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 text-white placeholder-gray-400 ${
                        activeField === 'name' 
                          ? 'border-blue-400 ring-blue-400/30' 
                          : 'border-white/30 hover:border-white/50'
                      }`}
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <motion.input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setActiveField('email')}
                      onBlur={() => setActiveField(null)}
                      required
                      className={`w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 text-white placeholder-gray-400 ${
                        activeField === 'email' 
                          ? 'border-purple-400 ring-purple-400/30' 
                          : 'border-white/30 hover:border-white/50'
                      }`}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Phone Number (Optional)
                  </label>
                  <div className="relative">
                    <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <motion.input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setActiveField('phone')}
                      onBlur={() => setActiveField(null)}
                      className={`w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 text-white placeholder-gray-400 ${
                        activeField === 'phone' 
                          ? 'border-pink-400 ring-pink-400/30' 
                          : 'border-white/30 hover:border-white/50'
                      }`}
                      placeholder="+1 (800) 123-4567"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onFocus={() => setActiveField('service')}
                    onBlur={() => setActiveField(null)}
                    required
                    className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 text-white ${
                      activeField === 'service' 
                        ? 'border-orange-400 ring-orange-400/30' 
                        : 'border-white/30 hover:border-white/50'
                    }`}
                  >
                    <option value="" className="bg-gray-800 text-gray-300">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service} className="bg-gray-800 text-gray-300">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Your Message
                  </label>
                  <div className="relative">
                    <FiMessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <motion.textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setActiveField('message')}
                      onBlur={() => setActiveField(null)}
                      required
                      rows="4"
                      className={`w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 text-white placeholder-gray-400 ${
                        activeField === 'message' 
                          ? 'border-green-400 ring-green-400/30' 
                          : 'border-white/30 hover:border-white/50'
                      }`}
                      placeholder="Tell us about your project..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Send Message</span>
                    <FiSend className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                    style={{ opacity: 0.2 }}
                  />
                </motion.button>

                {/* Privacy Note */}
                <p className="text-xs text-gray-400 text-center mt-4">
                  By submitting this form, you agree to our 
                  <a href="#" className="text-blue-400 hover:underline mx-1">Privacy Policy</a>
                  and
                  <a href="#" className="text-blue-400 hover:underline ml-1">Terms of Service</a>
                </p>
              </form>
            </div>
          </motion.div>
        </div>

      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;