import React from "react";
import { useState } from "react";
import { FiSend, FiCheckCircle } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";


const ContactWithUs = () => {

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

  return (
    <>
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
    </>
  );
};

export default ContactWithUs;
