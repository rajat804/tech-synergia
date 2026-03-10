import React from "react";
import { motion } from "framer-motion";

import {
  FiPieChart,
  FiCoffee,
  FiPackage,
  FiTruck,
  FiHome,
  FiUsers,
  FiDollarSign,
  FiBook,
  FiTarget,
  FiSettings,
  FiMonitor,
  FiCreditCard,
} from "react-icons/fi";

const OurSolution = () => {
  const oursolutions = [
    {
      id: 1,
      title: "Accounting Software",
      description:
        "Manage invoices, expenses, taxes and financial reports with an efficient accounting system.",
      icon: <FiPieChart size={28} />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: 2,
      title: "Restaurant POS Software",
      description:
        "Complete POS system for restaurants including billing, order management and table tracking.",
      icon: <FiCoffee size={28} />,
      color: "from-orange-500 to-red-500",
    },
    {
      id: 3,
      title: "Inventory Management",
      description:
        "Track stock levels, manage products and automate inventory updates in real time.",
      icon: <FiPackage size={28} />,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      title: "Fleet Management",
      description:
        "Monitor vehicles, drivers and routes to improve logistics efficiency and reduce costs.",
      icon: <FiTruck size={28} />,
      color: "from-green-500 to-teal-500",
    },
    {
      id: 5,
      title: "Warehouse Management",
      description:
        "Optimize warehouse operations with smart tracking and storage management.",
      icon: <FiHome size={28} />,
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: 6,
      title: "HR Management",
      description:
        "Manage employee data, attendance, payroll and performance with a centralized HR system.",
      icon: <FiUsers size={28} />,
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 7,
      title: "Finance Management",
      description:
        "Control budgeting, financial planning and expense tracking for better business decisions.",
      icon: <FiDollarSign size={28} />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 8,
      title: "School Management Software",
      description:
        "Digital platform to manage students, teachers, attendance, exams and school operations.",
      icon: <FiBook size={28} />,
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: 10,
      title: "Lead Management",
      description:
        "Track and manage potential customers through the sales pipeline efficiently.",
      icon: <FiTarget size={28} />,
      color: "from-pink-500 to-red-500",
    },
    {
      id: 11,
      title: "Operations Management",
      description:
        "Streamline business operations and workflows for higher productivity.",
      icon: <FiSettings size={28} />,
      color: "from-gray-600 to-gray-800",
    },
    {
      id: 12,
      title: "Kiosk Software",
      description:
        "Interactive self-service kiosk software for retail, restaurants and customer service.",
      icon: <FiMonitor size={28} />,
      color: "from-blue-500 to-purple-500",
    },
    {
      id: 13,
      title: "Payment Software",
      description:
        "Secure digital payment solutions supporting multiple payment gateways and transactions.",
      icon: <FiCreditCard size={28} />,
      color: "from-green-500 to-emerald-600",
    },
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
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Solutions
            </span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-6 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Comprehensive digital solutions tailored to transform your business
            and drive growth in the modern era.
          </motion.p>
        </motion.div>

        {/* Services Grid - 3 cards per row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {oursolutions.map((solution) => (
            <motion.div
              key={solution.id}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="group relative h-full"
            >
              {/* Main Card - Fixed height with flex column */}
              <div className="relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
                {/* Animated gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  initial={false}
                />

                {/* Icon Container with Gradient */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${solution.color} p-4 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 flex items-center justify-center flex-shrink-0`}
                >
                  {solution.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {solution.title}
                </h3>

                {/* Description - flex-grow to push learn more to bottom */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  {solution.description}
                </p>

                {/* Learn More Link */}
                <motion.a
                  href="#"
                  className="inline-flex items-center text-sm font-semibold text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 mt-auto"
                  whileHover={{ x: 5 }}
                >
                  Explorer →
                  
                </motion.a>

                {/* Bottom animated line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  initial={false}
                />
              </div>

              {/* Decorative elements on hover */}
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

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

export default OurSolution;
