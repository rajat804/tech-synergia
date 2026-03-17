import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaReact,
  FaVuejs,
  FaAngular,
  FaNodeJs,
  FaPython,
  FaJava,
  FaPhp,
  FaAws,
  FaDocker,
} from "react-icons/fa";

import {
  SiTypescript,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiKubernetes,
  SiJenkins,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiOpenai,
  SiLaravel,
} from "react-icons/si";

import {
  FiCode,
  FiTrendingUp,
  FiCpu,
  FiStar,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredTech, setHoveredTech] = useState(null);
  const scrollRef = useRef(null);

  const categories = [
    {
      id: "all",
      name: "All Technologies",
      color: "from-blue-500 to-purple-500",
    },
    {
      id: "frontend",
      name: "Frontend",
      color: "from-blue-500 to-blue-600",
      icon: "🎨",
    },
    {
      id: "backend",
      name: "Backend",
      color: "from-purple-500 to-purple-600",
      icon: "⚙️",
    },
    {
      id: "mobile",
      name: "Mobile",
      color: "from-pink-500 to-pink-600",
      icon: "📱",
    },
    {
      id: "database",
      name: "Database",
      color: "from-orange-500 to-orange-600",
      icon: "🗄️",
    },
    {
      id: "cloud",
      name: "Cloud & DevOps",
      color: "from-cyan-500 to-cyan-600",
      icon: "☁️",
    },
    {
      id: "ai",
      name: "AI & ML",
      color: "from-indigo-500 to-indigo-600",
      icon: "🧠",
    },
  ];

  const technologies = [
    // ────────────────────────────────────────────────────────────────────────────────
    // Your original technologies array (unchanged)
    // ────────────────────────────────────────────────────────────────────────────────
    {
      id: 1,
      name: "React",
      category: "frontend",
      icon: <FaReact />,
      proficiency: 95,
      projects: 45,
      description: "Building interactive UIs with React and Next.js",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
    {
      id: 2,
      name: "Vue.js",
      category: "frontend",
      icon: <FaVuejs />,
      proficiency: 90,
      projects: 30,
      description: "Progressive framework for modern web apps",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      borderColor: "border-green-200",
    },
    {
      id: 3,
      name: "Angular",
      category: "frontend",
      icon: <FaAngular />,
      proficiency: 85,
      projects: 25,
      description: "Enterprise-grade web applications",
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
      borderColor: "border-red-200",
    },
    {
      id: 4,
      name: "TypeScript",
      category: "frontend",
      icon: <SiTypescript />,
      proficiency: 92,
      projects: 50,
      description: "Type-safe JavaScript development",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
    {
      id: 5,
      name: "Node.js",
      category: "backend",
      icon: <FaNodeJs />,
      proficiency: 94,
      projects: 55,
      description: "Scalable server-side applications",
      color: "from-green-500 to-lime-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      borderColor: "border-green-200",
    },
    {
      id: 6,
      name: "Python",
      category: "backend",
      icon: <FaPython />,
      proficiency: 92,
      projects: 48,
      description: "Versatile programming for web & AI",
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
      borderColor: "border-yellow-200",
    },
    {
      id: 7,
      name: "Java",
      category: "backend",
      icon: <FaJava />,
      proficiency: 88,
      projects: 35,
      description: "Robust enterprise solutions",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      borderColor: "border-orange-200",
    },
    {
      id: 8,
      name: "PHP",
      category: "backend",
      icon: <FaPhp />,
      proficiency: 85,
      projects: 40,
      description: "Dynamic web applications",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      borderColor: "border-purple-200",
    },
    {
      id: 9,
      name: "React Native",
      category: "mobile",
      icon: <FaReact />,
      proficiency: 93,
      projects: 32,
      description: "Cross-platform mobile apps",
      color: "from-blue-500 to-purple-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
    {
      id: 10,
      name: "Flutter",
      category: "mobile",
      icon: <SiFlutter />,
      proficiency: 88,
      projects: 28,
      description: "Beautiful native apps for all platforms",
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
      textColor: "text-cyan-600",
      borderColor: "border-cyan-200",
    },
    {
      id: 11,
      name: "Swift",
      category: "mobile",
      icon: <SiSwift />,
      proficiency: 86,
      projects: 22,
      description: "iOS native development",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      borderColor: "border-orange-200",
    },
    {
      id: 12,
      name: "Kotlin",
      category: "mobile",
      icon: <SiKotlin />,
      proficiency: 85,
      projects: 20,
      description: "Android native development",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      borderColor: "border-purple-200",
    },
    {
      id: 13,
      name: "MongoDB",
      category: "database",
      icon: <SiMongodb />,
      proficiency: 92,
      projects: 48,
      description: "NoSQL database for modern apps",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      borderColor: "border-green-200",
    },
    {
      id: 14,
      name: "PostgreSQL",
      category: "database",
      icon: <SiPostgresql />,
      proficiency: 90,
      projects: 42,
      description: "Advanced relational database",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
    {
      id: 15,
      name: "MySQL",
      category: "database",
      icon: <SiMysql />,
      proficiency: 94,
      projects: 60,
      description: "Popular relational database",
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      borderColor: "border-orange-200",
    },
    {
      id: 16,
      name: "Redis",
      category: "database",
      icon: <SiRedis />,
      proficiency: 85,
      projects: 30,
      description: "In-memory data structure store",
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
      borderColor: "border-red-200",
    },
    {
      id: 17,
      name: "AWS",
      category: "cloud",
      icon: <FaAws />,
      proficiency: 88,
      projects: 35,
      description: "Cloud computing services",
      color: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      borderColor: "border-orange-200",
    },
    {
      id: 18,
      name: "Docker",
      category: "cloud",
      icon: <FaDocker />,
      proficiency: 90,
      projects: 40,
      description: "Containerization platform",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
    {
      id: 19,
      name: "Kubernetes",
      category: "cloud",
      icon: <SiKubernetes />,
      proficiency: 82,
      projects: 25,
      description: "Container orchestration",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
    {
      id: 20,
      name: "Jenkins",
      category: "cloud",
      icon: <SiJenkins />,
      proficiency: 86,
      projects: 32,
      description: "CI/CD automation",
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
      borderColor: "border-red-200",
    },
    {
      id: 21,
      name: "TensorFlow",
      category: "ai",
      icon: <SiTensorflow />,
      proficiency: 80,
      projects: 15,
      description: "Machine learning framework",
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      borderColor: "border-orange-200",
    },
    {
      id: 22,
      name: "PyTorch",
      category: "ai",
      icon: <SiPytorch />,
      proficiency: 78,
      projects: 12,
      description: "Deep learning platform",
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
      borderColor: "border-red-200",
    },
    {
      id: 23,
      name: "OpenAI",
      category: "ai",
      icon: <SiOpenai />,
      proficiency: 75,
      projects: 10,
      description: "AI models and APIs",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      borderColor: "border-green-200",
    },
    {
      id: 24,
      name: "Scikit-learn",
      category: "ai",
      icon: <SiScikitlearn />,
      proficiency: 82,
      projects: 18,
      description: "Machine learning library",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
    {
      id: 25,
      name: "Laravel",
      category: "backend",
      icon: <SiLaravel />,
      proficiency: 90,
      projects: 38,
      description: "Powerful PHP framework for scalable web applications",
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
      borderColor: "border-red-200",
    },
  ];

  const featuredTechnologies = technologies.slice(0, 8);

  const stats = [
    {
      number: "24+",
      label: "Technologies",
      icon: <FiCode />,
      color: "from-blue-500 to-blue-600",
    },
    {
      number: "500+",
      label: "Projects",
      icon: <FiTrendingUp />,
      color: "from-purple-500 to-purple-600",
    },
    {
      number: "50+",
      label: "Developers",
      icon: <FiCpu />,
      color: "from-pink-500 to-pink-600",
    },
    {
      number: "8+",
      label: "Years Experience",
      icon: <FiStar />,
      color: "from-orange-500 to-orange-600",
    },
  ];

  const filteredTechnologies =
    activeCategory === "all"
      ? technologies
      : technologies.filter((tech) => tech.category === activeCategory);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Technologies We Master
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
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            We leverage cutting-edge technologies to build scalable and
            innovative digital products.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="group relative bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
              />
              <div
                className={`text-4xl mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
              >
                {stat.icon}
              </div>
              <div
                className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
              >
                {stat.number}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              <motion.div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Technologies
            </h3>
            <div className="flex gap-2">
              <motion.button
                type="button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollLeft}
                className="p-2 bg-white shadow-lg rounded-xl hover:shadow-xl transition-all"
              >
                <FiArrowLeft className="w-5 h-5 text-gray-600" />
              </motion.button>
              <motion.button
                type="button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollRight}
                className="p-2 bg-white shadow-lg rounded-xl hover:shadow-xl transition-all"
              >
                <FiArrowRight className="w-5 h-5 text-gray-600" />
              </motion.button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {featuredTechnologies.map((tech) => {
              const category = categories.find((c) => c.id === tech.category);
              return (
                <motion.div
                  key={tech.id}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`min-w-[220px] bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${tech.borderColor} relative group`}
                >
                  <div
                    className={`absolute inset-0 ${tech.bgColor} opacity-0 group-hover:opacity-30 rounded-xl transition-opacity duration-300`}
                  />
                  <div className={`text-4xl mb-3 ${tech.textColor}`}>
                    {tech.icon}
                  </div>
                  <h4 className="font-bold text-gray-800">{tech.name}</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {tech.description.substring(0, 30)}...
                  </p>
                  <div className="absolute top-2 right-2">
                    <span
                      className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${category?.color} text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    >
                      {category?.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Category Filter Buttons – FIXED with type="button" */}
        <motion.div
        layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              type="button"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const scrollY = window.scrollY; // ✅ save scroll
                setActiveCategory(category.id);

                requestAnimationFrame(() => {
                  window.scrollTo({ top: scrollY }); // ✅ restore scroll
                });
              }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              {category.icon && <span className="mr-2">{category.icon}</span>}
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredTechnologies.map((tech) => {
            const category = categories.find((c) => c.id === tech.category);
            return (
              <motion.div
                key={tech.id}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 300 },
                }}
                onHoverStart={() => setHoveredTech(tech.id)}
                onHoverEnd={() => setHoveredTech(null)}
                className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`text-5xl mb-4 ${tech.textColor} group-hover:scale-110 transition-transform duration-300`}
                >
                  {tech.icon}
                </motion.div>
                <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-500 capitalize flex items-center gap-1 mb-3">
                  <span
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${category?.color}`}
                  ></span>
                  {tech.category}
                </p>
                <AnimatePresence>
                  {hoveredTech === tech.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="mt-3 space-y-2"
                    >
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-600">Proficiency</span>
                        <span className={`font-semibold ${tech.textColor}`}>
                          {tech.proficiency}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${tech.proficiency}%` }}
                          transition={{ duration: 0.5 }}
                          className={`h-full bg-gradient-to-r ${tech.color}`}
                        />
                      </div>
                      <div className="flex justify-between text-xs mt-1">
                        <span className="text-gray-600">Projects</span>
                        <span className={`font-semibold ${tech.textColor}`}>
                          {tech.projects}+
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${tech.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
                <motion.div
                  className={`absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br ${tech.color} rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stack Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technology Stack Distribution
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories
              .filter((c) => c.id !== "all")
              .map((category) => {
                const count = technologies.filter(
                  (t) => t.category === category.id,
                ).length;
                const percentage = (
                  (count / technologies.length) *
                  100
                ).toFixed(0);
                return (
                  <motion.div
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div
                      className={`text-3xl mb-2 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                    >
                      {category.icon}
                    </div>
                    <div className="text-sm font-medium text-gray-700">
                      {category.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {count} tech ({percentage}%)
                    </div>
                  </motion.div>
                );
              })}
          </div>
        </motion.div>
      </div>

      {/* CSS for animations & scrollbar */}
      <style jsx>{`
        html,
        body {
          overflow-anchor: none;
        }
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
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Technologies;
