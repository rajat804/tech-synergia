import React from "react";
import { motion } from "framer-motion";

const ProcessSection = () => {
  return (
    <>
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Our Development Process
              </span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              A structured approach to deliver high-quality websites on time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Understanding your requirements, goals, and target audience",
                color: "from-blue-500 to-blue-600",
                icon: "🔍",
              },
              {
                step: "02",
                title: "Planning",
                desc: "Creating sitemaps, wireframes, and project roadmap",
                color: "from-purple-500 to-purple-600",
                icon: "📝",
              },
              {
                step: "03",
                title: "Design",
                desc: "Crafting beautiful UI/UX with your brand identity",
                color: "from-pink-500 to-pink-600",
                icon: "🎨",
              },
              {
                step: "04",
                title: "Development",
                desc: "Building with modern, scalable technologies",
                color: "from-orange-500 to-orange-600",
                icon: "💻",
              },
              {
                step: "05",
                title: "Testing",
                desc: "Rigorous QA testing across all devices",
                color: "from-green-500 to-green-600",
                icon: "✅",
              },
              {
                step: "06",
                title: "Launch",
                desc: "Deploying and monitoring performance",
                color: "from-teal-500 to-teal-600",
                icon: "🚀",
              },
              {
                step: "07",
                title: "Training",
                desc: "Team training and documentation",
                color: "from-indigo-500 to-indigo-600",
                icon: "📚",
              },
              {
                step: "08",
                title: "Support",
                desc: "Ongoing maintenance and updates",
                color: "from-red-500 to-red-600",
                icon: "🔧",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative bg-white rounded-xl p-4 sm:p-5 shadow-lg text-center group border border-gray-100"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                />
                <div className="text-2xl sm:text-3xl mb-2">{item.icon}</div>
                <div
                  className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}
                >
                  {item.step}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessSection;
