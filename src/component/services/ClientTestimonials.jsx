import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import {FiStar,} from "react-icons/fi";



const ClientTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Auto-slide for testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, FashionHub",
      content:
        "Tech Synergia transformed our online store completely. Sales increased by 150% in just 3 months!",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
      company: "FashionHub",
    },
    {
      name: "Michael Chen",
      role: "CTO, LogiTrack",
      content:
        "The logistics platform they built streamlined our entire operation. Best investment we ever made.",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 5,
      company: "LogiTrack",
    },
    {
      name: "Emily Davis",
      role: "Director, HealthFirst",
      content:
        "Their healthcare portal is HIPAA compliant and incredibly user-friendly. Patients love it!",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 5,
      company: "HealthFirst",
    },
  ];

  return (
    <>
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Client Testimonials
              </span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              What our clients say about working with us
            </p>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100"
              >
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <img
                    src={testimonials[currentSlide].avatar}
                    alt={testimonials[currentSlide].name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg"
                  />
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                      {testimonials[currentSlide].name}
                    </h3>
                    <p className="text-sm sm:text-base text-purple-600 mb-2">
                      {testimonials[currentSlide].role}
                    </p>
                    <div className="flex justify-center sm:justify-start items-center gap-2 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <FiStar
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <span className="text-xs sm:text-sm text-gray-500">
                        {testimonials[currentSlide].company}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 italic">
                      "{testimonials[currentSlide].content}"
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-6 bg-gradient-to-r from-blue-500 to-purple-500"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientTestimonials;
