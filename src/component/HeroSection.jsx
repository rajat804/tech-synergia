import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const HeroSection = () => {

  const [isSlideOpen, setIsSlideOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "DIGITAL SOLUTIONS",
      description:
        "Empowering businesses with modern digital solutions to enhance efficiency, performance, and customer experience.",
      buttonText: "Explore Services",
      buttonLink: "/services",
    },
    {
      title: "BUSINESS GROWTH",
      description:
        "Helping companies scale faster with innovative strategies, technology, and data-driven insights.",
      buttonText: "View our Portfolio",
      buttonLink: "/portfolio",
    },
    {
      title: "TECHNOLOGY PARTNERSHIP",
      description:
        "Partner with us to build reliable, scalable, and future-ready technology solutions for your business.",
      buttonText: "Start your Project",
      buttonLink: "/contact",
    },
  ];

  // Auto Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  // Auto Popup
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSlideOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Next Slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Previous Slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[75vh] sm:h-[80vh] md:min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition"
      >
        <FiChevronLeft size={28} />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition"
      >
        <FiChevronRight size={28} />
      </button>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6">

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
          >

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-6">
              {slides[currentSlide].title}
            </h1>

            <p className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-8">
              {slides[currentSlide].description}
            </p>

            {/* Slide Button */}
            {/* <Link to={slides[currentSlide].buttonLink}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
              >
                {slides[currentSlide].buttonText}
              </motion.button>
            </Link> */}

          </motion.div>
        </AnimatePresence>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-10">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-6 md:w-8 rounded-full ${
                currentSlide === index ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>

      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {isSlideOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSlideOpen(false)}
            />

            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 px-4"
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 40 }}
              transition={{ type: "spring", damping: 20 }}
            >

              <div className="w-full max-w-md bg-slate-800/95 backdrop-blur-xl shadow-2xl p-8 border border-slate-700 rounded-2xl relative">

                <button
                  onClick={() => setIsSlideOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
                >
                  ✕
                </button>

                <h2 className="text-2xl font-bold text-white mb-4">
                  Let's Connect
                </h2>

                <p className="text-gray-300 mb-6">
                  Ready to transform your business with technology synergy?
                </p>

                {/* Form */}
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400"
                  />

                  <select className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">
                    <option>Select Service</option>
                    <option>Website Development</option>
                    <option>Mobile App Development</option>
                    <option>Ecommerce Developer</option>
                    <option>Custom Software Developer </option>
                    <option>ERP & CRM Solutions</option>
                    <option>API Development & Integration</option>
                    <option>Maintenance and Support</option>
                    <option>Software Development Outsourcing</option>
                    <option>Destop App Development </option>
                  </select>

                  <textarea
                    rows="4"
                    placeholder="Tell us about your project"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold"
                  >
                    Send Message
                  </button>
                </form>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
};

export default HeroSection;