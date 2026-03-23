import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMonitor,
  FiSmartphone,
  FiShoppingCart,
  FiCode,
  FiUsers,
  FiGlobe,
  FiArrowRight,
  FiStar,
  FiEye,
  FiHeart,
  FiCalendar,
  FiBriefcase,
  FiTrendingUp,
  FiCheckCircle,
  FiExternalLink,
  FiGithub,
  FiZoomIn,
  FiX,
  FiPlay,
  FiPause,
  FiAward,
  FiClock,
  FiMapPin,
  FiMessageCircle,
  FiThumbsUp,
} from "react-icons/fi";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);

  const categories = [
    { id: "all", name: "All Projects", icon: <FiGlobe />, color: "from-blue-500 to-purple-500" },
    { id: "web", name: "Web Development", icon: <FiMonitor />, color: "from-blue-500 to-blue-600" },
    { id: "mobile", name: "Mobile Apps", icon: <FiSmartphone />, color: "from-purple-500 to-purple-600" },
    { id: "ecommerce", name: "E-commerce", icon: <FiShoppingCart />, color: "from-pink-500 to-pink-600" },
    { id: "software", name: "Software Solutions", icon: <FiCode />, color: "from-orange-500 to-orange-600" },
  ];

  const projects = [
    {
      id: 1,
      title: "FashionHub E-commerce Platform",
      category: "ecommerce",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      beforeImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "A complete e-commerce solution with AI-powered recommendations, real-time inventory, and seamless payment integration.",
      fullDescription: "FashionHub is a premium online fashion retailer that needed a robust e-commerce platform to handle high traffic and provide personalized shopping experiences. We built a custom solution with AI-powered product recommendations, real-time inventory management, and seamless payment integration. The platform supports multiple payment gateways, has a responsive design, and includes advanced analytics for business insights.",
      features: [
        "AI-powered product recommendations",
        "Real-time inventory tracking",
        "Multiple payment gateways (Stripe, PayPal, Razorpay)",
        "Advanced search and filtering",
        "Customer reviews and ratings",
        "Mobile-responsive design",
        "Admin dashboard with analytics",
        "Email marketing automation",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis", "AWS", "Tailwind CSS"],
      stats: [
        { label: "Sales Increase", value: "+200%", icon: <FiTrendingUp /> },
        { label: "User Satisfaction", value: "98%", icon: <FiStar /> },
        { label: "Daily Active Users", value: "10K+", icon: <FiUsers /> },
      ],
      client: "FashionHub Inc.",
      duration: "6 months",
      year: "2024",
      liveUrl: "#",
      githubUrl: "#",
      challenge: "The client needed a scalable platform to handle seasonal traffic spikes while providing personalized shopping experiences.",
      solution: "We implemented a microservices architecture with AI-powered recommendations and auto-scaling infrastructure on AWS.",
      result: "Sales increased by 200% within the first 3 months, and user engagement improved by 150%.",
      testimonial: {
        quote: "Tech Synergia transformed our online presence completely. The new platform is fast, intuitive, and our customers love it! Sales have never been better.",
        author: "Sarah Johnson",
        role: "CEO, FashionHub",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      },
    },
    {
      id: 2,
      title: "HealthFirst Telemedicine App",
      category: "mobile",
      tags: ["React Native", "Node.js", "Firebase", "WebRTC"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      beforeImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "HIPAA-compliant telemedicine platform connecting patients with doctors via video consultations.",
      fullDescription: "HealthFirst is a comprehensive telemedicine platform that enables patients to consult with doctors remotely. The app includes video calling, prescription management, appointment scheduling, and secure messaging. It's fully HIPAA compliant and designed for both iOS and Android platforms.",
      features: [
        "Secure video consultations",
        "Appointment scheduling",
        "Digital prescriptions",
        "Secure messaging",
        "Patient records management",
        "Push notifications",
        "Multi-language support",
        "Payment integration",
      ],
      technologies: ["React Native", "Node.js", "Firebase", "WebRTC", "MongoDB", "AWS"],
      stats: [
        { label: "Active Users", value: "50K+", icon: <FiUsers /> },
        { label: "Consultations", value: "10K+/month", icon: <FiTrendingUp /> },
        { label: "Rating", value: "4.9/5", icon: <FiStar /> },
      ],
      client: "HealthFirst Medical",
      duration: "8 months",
      year: "2024",
      liveUrl: "#",
      githubUrl: "#",
      challenge: "Creating a secure, HIPAA-compliant platform that provides seamless video consultations while maintaining patient privacy.",
      solution: "We built a secure platform with end-to-end encryption, compliant with healthcare regulations, and integrated WebRTC for high-quality video calls.",
      result: "Over 50,000 active users with 10,000+ monthly consultations, achieving a 4.9/5 user rating.",
      testimonial: {
        quote: "The telemedicine platform has revolutionized how we provide care. Patients love the convenience, and our doctors find it incredibly easy to use.",
        author: "Dr. Emily Williams",
        role: "Chief Medical Officer, HealthFirst",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      },
    },
    {
      id: 3,
      title: "LogiTrack Fleet Management",
      category: "software",
      tags: ["React", "Python", "Django", "IoT", "Google Maps API"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      beforeImage: "https://images.unsplash.com/photo-1586528116499-d6e5cf1e9b1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Real-time fleet tracking and route optimization solution for logistics companies.",
      fullDescription: "LogiTrack is a comprehensive fleet management system that provides real-time vehicle tracking, route optimization, fuel management, and driver performance analytics. The platform helps logistics companies reduce operational costs and improve delivery efficiency.",
      features: [
        "Real-time GPS tracking",
        "Route optimization",
        "Fuel consumption monitoring",
        "Driver behavior analytics",
        "Maintenance scheduling",
        "Geofencing alerts",
        "Detailed reporting",
        "Mobile app for drivers",
      ],
      technologies: ["React", "Python", "Django", "PostgreSQL", "Google Maps API", "IoT Sensors"],
      stats: [
        { label: "Cost Reduction", value: "35%", icon: <FiTrendingUp /> },
        { label: "On-Time Delivery", value: "99.9%", icon: <FiStar /> },
        { label: "Vehicles Tracked", value: "500+", icon: <FiUsers /> },
      ],
      client: "LogiTrack Solutions",
      duration: "10 months",
      year: "2023",
      liveUrl: "#",
      githubUrl: "#",
      challenge: "Optimizing fleet operations to reduce fuel costs and improve delivery times across 500+ vehicles.",
      solution: "We developed an AI-powered route optimization engine and real-time tracking system that reduced fuel consumption by 30%.",
      result: "35% cost reduction, 99.9% on-time delivery rate, and 25% improvement in driver productivity.",
      testimonial: {
        quote: "The fleet management system has given us unprecedented visibility into our operations. Fuel costs are down, and deliveries are faster than ever.",
        author: "Michael Chen",
        role: "Operations Director, LogiTrack",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      },
    },
  ];

  const achievements = [
    { number: "200+", label: "Projects Completed", icon: <FiBriefcase />, color: "from-blue-500 to-blue-600" },
    { number: "50+", label: "Happy Clients", icon: <FiUsers />, color: "from-purple-500 to-purple-600" },
    { number: "30+", label: "Countries Served", icon: <FiGlobe />, color: "from-pink-500 to-pink-600" },
    { number: "98%", label: "Client Retention", icon: <FiHeart />, color: "from-orange-500 to-orange-600" },
    { number: "500K+", label: "Users Impacted", icon: <FiTrendingUp />, color: "from-green-500 to-green-600" },
    { number: "24/7", label: "Support Available", icon: <FiClock />, color: "from-red-500 to-red-600" },
  ];

  const testimonials = [
    {
      quote: "Tech Synergia transformed our e-commerce platform completely. The new design is stunning, and the performance is incredible. Sales increased by 200% in just 6 months!",
      author: "Sarah Johnson",
      role: "CEO, FashionHub",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
      company: "FashionHub",
    },
    {
      quote: "The telemedicine app they built has revolutionized how we deliver healthcare. Our patients love the convenience, and our doctors find it incredibly user-friendly.",
      author: "Dr. Emily Williams",
      role: "CMO, HealthFirst",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 5,
      company: "HealthFirst",
    },
    {
      quote: "Their fleet management solution gave us complete visibility into our operations. Fuel costs are down by 35%, and on-time delivery is at 99.9%. Highly recommended!",
      author: "Michael Chen",
      role: "Operations Director, LogiTrack",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 5,
      company: "LogiTrack",
    },
    {
      quote: "The POS system they developed has streamlined our operations significantly. Our staff loves how intuitive it is, and customers appreciate the faster checkout.",
      author: "David Wilson",
      role: "Owner, ShopEasy",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      rating: 5,
      company: "ShopEasy",
    },
  ];

  const beforeAfterProjects = projects.slice(0, 3);

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
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
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
            <FiBriefcase className="text-5xl" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Our Portfolio
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
            Explore our successful projects and see how we've helped businesses
            transform through innovative technology solutions.
          </motion.p>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {achievements.slice(0, 4).map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2 text-white/80 flex justify-center">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold">{stat.number}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats / Achievements Section */}
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
                Our Achievements
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Numbers that speak for themselves
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`text-4xl mb-3 bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent flex justify-center`}>
                  {achievement.icon}
                </div>
                <div className="text-2xl font-bold text-gray-800">{achievement.number}</div>
                <div className="text-sm text-gray-600 mt-1">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Before & After
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              See the transformation we've delivered for our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beforeAfterProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 relative overflow-hidden">
                      <img
                        src={project.beforeImage}
                        alt="Before"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        Before
                      </div>
                    </div>
                    <div className="w-1/2 relative overflow-hidden">
                      <img
                        src={project.afterImage}
                        alt="After"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-1 rounded">
                        After
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <FiTrendingUp />
                    <span className="font-semibold">{project.stats[0].value}</span>
                    <span className="text-gray-500">improvement</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
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
                Our Work Gallery
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our latest projects and success stories
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects
                .filter(p => activeFilter === "all" || p.category === activeFilter)
                .map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white">
                          {project.tags[0]}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex gap-2">
                          {project.stats.slice(0, 2).map((stat, idx) => (
                            <div key={idx} className="flex items-center gap-1 text-xs text-white">
                              {stat.icon}
                              <span>{stat.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <button className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                        View Details
                        <FiArrowRight className="ml-1 w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Video Showcase
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Watch our projects in action
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                onClick={() => setActiveVideo(project)}
              >
                <div className="relative h-48 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="relative z-10 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FiPlay className="w-8 h-8 text-white ml-1" />
                  </div>
                  <span className="absolute bottom-4 left-4 text-white text-sm bg-black/50 px-2 py-1 rounded">
                    {project.title}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">{project.title}</h3>
                  <p className="text-sm text-gray-500">Click to watch demo video</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
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
                What Our Clients Say
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <p className="text-xs text-blue-600 mt-1">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center">
              <FiMessageCircle className="text-4xl text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Contact us today for a free consultation and see how we can help transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Get Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                View Our Process
              </motion.button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <FiCheckCircle className="w-4 h-4" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="w-4 h-4" />
                <span>No Obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="w-4 h-4" />
                <span>Fast Response</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <FiX className="w-5 h-5" />
              </button>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={activeVideo.videoUrl}
                  title={activeVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 bg-black text-white">
                <h3 className="font-bold">{activeVideo.title}</h3>
                <p className="text-sm text-gray-400">{activeVideo.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <FiX className="w-5 h-5" />
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {selectedProject.stats.map((stat, idx) => (
                    <div key={idx} className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="text-3xl text-blue-600 mb-2 flex justify-center">
                        {stat.icon}
                      </div>
                      <div className="text-xl font-bold text-gray-800">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                {selectedProject.testimonial && (
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-5 mb-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <FiStar key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-4">"{selectedProject.testimonial.quote}"</p>
                    <div className="flex items-center gap-3">
                      <img
                        src={selectedProject.testimonial.avatar}
                        alt={selectedProject.testimonial.author}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h4 className="font-bold text-gray-800">{selectedProject.testimonial.author}</h4>
                        <p className="text-sm text-gray-500">{selectedProject.testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Project Overview</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Challenge & Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-orange-50 rounded-xl p-5">
                    <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                      <span className="text-2xl">🎯</span> Challenge
                    </h3>
                    <p className="text-gray-600 text-sm">{selectedProject.challenge}</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5">
                    <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                      <span className="text-2xl">💡</span> Solution
                    </h3>
                    <p className="text-gray-600 text-sm">{selectedProject.solution}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <FiCheckCircle className="text-green-500 w-4 h-4 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Result & Client Info */}
                <div className="bg-blue-50 rounded-xl p-5 mb-6">
                  <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-2xl">📊</span> Results
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{selectedProject.result}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <FiBriefcase className="text-blue-600" />
                      <span className="text-gray-600">{selectedProject.client}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiCalendar className="text-blue-600" />
                      <span className="text-gray-600">{selectedProject.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiStar className="text-blue-600" />
                      <span className="text-gray-600">{selectedProject.year}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href={selectedProject.liveUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                  >
                    <FiExternalLink />
                    View Live Project
                  </motion.a>
                  <motion.a
                    href={selectedProject.githubUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold flex items-center justify-center gap-2 hover:border-blue-500 hover:text-blue-600 transition-all"
                  >
                    <FiGithub />
                    View Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;