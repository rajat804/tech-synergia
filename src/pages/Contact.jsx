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
  FiArrowRight,
  FiGlobe,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiFacebook,
  FiYoutube,
  FiGithub,
  FiCalendar,
  FiBriefcase,
  FiStar,
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const [activeField, setActiveField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you! We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: "",
      });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <FiMapPin />,
      title: "Visit Us",
      content: "123 Tech Street, Silicon Valley, CA 94025, United States",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      icon: <FiPhone />,
      title: "Call Us",
      content: "+1 (800) 123-4567",
      subContent: "Mon-Fri 9am to 6pm PST",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      icon: <FiMail />,
      title: "Email Us",
      content: "hello@techsynergia.com",
      subContent: "support@techsynergia.com",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600",
    },
    {
      icon: <FiClock />,
      title: "Working Hours",
      content: "Monday - Friday: 9:00 AM - 6:00 PM",
      subContent: "Saturday - Sunday: Closed",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
  ];

  const faqs = [
    {
      question: "How quickly can I expect a response?",
      answer: "We typically respond within 24 hours during business days. For urgent inquiries, please call us directly.",
    },
    {
      question: "Do you offer free consultation?",
      answer: "Yes, we offer a free 30-minute consultation to discuss your project requirements and provide initial guidance.",
    },
    {
      question: "What information should I provide?",
      answer: "Please share your project goals, timeline, budget range, and any specific requirements you have in mind.",
    },
    {
      question: "Do you work with clients internationally?",
      answer: "Yes, we work with clients worldwide. Our team is experienced in handling international projects and time zones.",
    },
  ];

  const socialLinks = [
    { icon: <FiFacebook />, href: "#", label: "Facebook", color: "hover:bg-blue-600", bgColor: "bg-blue-100", textColor: "text-blue-600" },
    { icon: <FiTwitter />, href: "#", label: "Twitter", color: "hover:bg-blue-400", bgColor: "bg-blue-100", textColor: "text-blue-400" },
    { icon: <FiLinkedin />, href: "#", label: "LinkedIn", color: "hover:bg-blue-700", bgColor: "bg-blue-100", textColor: "text-blue-700" },
    { icon: <FiInstagram />, href: "#", label: "Instagram", color: "hover:bg-pink-600", bgColor: "bg-pink-100", textColor: "text-pink-600" },
    { icon: <FiYoutube />, href: "#", label: "YouTube", color: "hover:bg-red-600", bgColor: "bg-red-100", textColor: "text-red-600" },
    { icon: <FiGithub />, href: "#", label: "GitHub", color: "hover:bg-gray-800", bgColor: "bg-gray-100", textColor: "text-gray-800" },
  ];

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
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
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
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-6 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center"
          >
            <FiMail className="text-5xl" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Get In Touch
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
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
          >
            Have a question or ready to start your project? We'd love to hear from you.
            Our team is here to help you achieve your goals.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`${info.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100`}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${info.color} p-3 text-white shadow-lg mb-4`}
                >
                  <div className="text-2xl">{info.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{info.title}</h3>
                <p className="text-gray-600 text-sm mb-1">{info.content}</p>
                {info.subContent && (
                  <p className="text-gray-500 text-xs">{info.subContent}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {/* Success Message */}
              <AnimatePresence>
                {formStatus.submitted && formStatus.success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
                  >
                    <FiCheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-green-700 text-sm">{formStatus.message}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setActiveField("name")}
                      onBlur={() => setActiveField(null)}
                      required
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 ${
                        activeField === "name"
                          ? "border-blue-500 ring-blue-200"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setActiveField("email")}
                      onBlur={() => setActiveField(null)}
                      required
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 ${
                        activeField === "email"
                          ? "border-purple-500 ring-purple-200"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setActiveField("phone")}
                      onBlur={() => setActiveField(null)}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 ${
                        activeField === "phone"
                          ? "border-pink-500 ring-pink-200"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                      placeholder="+1 (800) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <div className="relative">
                    <FiBriefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setActiveField("subject")}
                      onBlur={() => setActiveField(null)}
                      required
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 ${
                        activeField === "subject"
                          ? "border-orange-500 ring-orange-200"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                      placeholder="Project Inquiry"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <div className="relative">
                    <FiMessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setActiveField("message")}
                      onBlur={() => setActiveField(null)}
                      required
                      rows="5"
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 ${
                        activeField === "message"
                          ? "border-green-500 ring-green-200"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                      placeholder="Tell us about your project..."
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
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
              </form>
            </motion.div>

            {/* Map & Location Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Map */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.639683533772!2d-122.083684684688!3d37.422065979825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba5b2c5f2d8b%3A0xa4f6c2b3b6b3b6b3!2sGoogleplex!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Office Location"
                ></iframe>
              </div>

              {/* Quick Contact */}
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FiPhone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-gray-800 font-medium">+1 (800) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <FiMail className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-gray-800 font-medium">hello@techsynergia.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <FiClock className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Support Hours</p>
                      <p className="text-gray-800 font-medium">24/7 Support Available</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Connect With Us</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -3 }}
                      className={`w-12 h-12 ${social.bgColor} rounded-xl flex items-center justify-center ${social.textColor} hover:text-white ${social.color} transition-all duration-300`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
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
              Find answers to common questions about our services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Ready to Get Started?
              </span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Let's work together to bring your ideas to life. Contact us today
              and let's create something amazing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Start a Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
              >
                View Our Work
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CSS */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default Contact;