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
  FiUserCheck,
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
      id: 9,
      title: "Vendor Management",
      description:
        "Manage vendor relationships, purchase orders and supplier performance easily.",
      icon: <FiUserCheck size={28} />,
      color: "from-purple-600 to-indigo-600",
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
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Solutions
            </span>
          </h2>

          <div className="h-1 w-28 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Comprehensive digital solutions designed to simplify operations and
            help businesses grow faster.
          </p>
        </div>

        {/* Grid */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {oursolutions.map((solution) => (
            <motion.div
              key={solution.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
            >
              {/* Icon */}

              <div
                className={`w-16 h-16 mb-5 flex items-center justify-center rounded-xl text-white bg-gradient-to-br ${solution.color}`}
              >
                {solution.icon}
              </div>

              {/* Title */}

              <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>

              {/* Description */}

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {solution.description}
              </p>

              {/* Learn More */}

              <a
                href="#"
                className="text-sm font-semibold text-blue-600 hover:text-purple-600 transition"
              >
                Learn More →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurSolution;
