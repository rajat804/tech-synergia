import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiBriefcase,
  FiUsers,
  FiGlobe,
  FiHeart,
  FiAward,
  FiTrendingUp,
  FiMapPin,
  FiClock,
  FiDollarSign,
  FiMail,
  FiArrowRight,
  FiCheckCircle,
  FiStar,
  FiCalendar,
  FiUserPlus,
  FiBookOpen,
  FiCoffee,
  FiHome,
  FiLayers,
  FiZap,
  FiShield,
  FiSmile,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiSend,
  FiX,
  FiSearch,
  FiFilter,
  FiThumbsUp,
  FiCoffee as FiCoffeeIcon,
} from "react-icons/fi";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showApplication, setShowApplication] = useState(false);
  const [appliedJob, setAppliedJob] = useState(null);

  const categories = [
    { id: "all", name: "All Positions", icon: <FiBriefcase />, count: 12, color: "from-blue-500 to-purple-500" },
    { id: "engineering", name: "Engineering", icon: <FiLayers />, count: 5, color: "from-blue-500 to-blue-600" },
    { id: "design", name: "Design", icon: <FiStar />, count: 2, color: "from-purple-500 to-purple-600" },
    { id: "sales", name: "Sales & Marketing", icon: <FiTrendingUp />, count: 3, color: "from-pink-500 to-pink-600" },
    { id: "support", name: "Support", icon: <FiUsers />, count: 2, color: "from-orange-500 to-orange-600" },
  ];

  const jobs = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      category: "engineering",
      type: "Full-time",
      location: "Remote / India",
      experience: "5+ years",
      salary: "Competitive",
      posted: "2 days ago",
      description: "We're looking for an experienced Full Stack Developer to join our engineering team. You'll be responsible for building scalable web applications and leading technical initiatives.",
      responsibilities: [
        "Design and develop scalable web applications using React, Node.js, and MongoDB",
        "Lead technical architecture decisions and code reviews",
        "Collaborate with cross-functional teams to deliver high-quality products",
        "Mentor junior developers and contribute to team growth",
        "Optimize application performance and ensure security best practices",
      ],
      requirements: [
        "5+ years of experience in full stack development",
        "Expertise in React, Node.js, and modern JavaScript",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Strong understanding of database design and optimization",
        "Excellent problem-solving and communication skills",
      ],
      benefits: [
        "Competitive salary and performance bonuses",
        "Remote work flexibility",
        "Health insurance coverage",
        "Learning & development budget",
        "Annual team retreats",
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      hoverBg: "hover:bg-blue-50",
      icon: <FiLayers />,
    },
    {
      id: 2,
      title: "UI/UX Designer",
      category: "design",
      type: "Full-time",
      location: "Bangalore, India",
      experience: "3+ years",
      salary: "Competitive",
      posted: "3 days ago",
      description: "Join our design team to create beautiful, intuitive user experiences for web and mobile applications.",
      responsibilities: [
        "Create wireframes, prototypes, and high-fidelity designs",
        "Conduct user research and usability testing",
        "Collaborate with developers to implement designs",
        "Maintain and evolve design systems",
        "Stay updated with latest design trends and tools",
      ],
      requirements: [
        "3+ years of experience in UI/UX design",
        "Proficiency in Figma, Adobe XD, or Sketch",
        "Strong portfolio demonstrating design thinking",
        "Understanding of responsive design principles",
        "Excellent visual design skills",
      ],
      benefits: [
        "Competitive salary and bonuses",
        "Creative work environment",
        "Health insurance",
        "Learning resources",
        "Flexible hours",
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      hoverBg: "hover:bg-purple-50",
      icon: <FiStar />,
    },
    {
      id: 3,
      title: "DevOps Engineer",
      category: "engineering",
      type: "Full-time",
      location: "Remote",
      experience: "4+ years",
      salary: "Competitive",
      posted: "1 week ago",
      description: "We're seeking a DevOps Engineer to manage our cloud infrastructure and automate deployment processes.",
      responsibilities: [
        "Design and maintain AWS/Azure cloud infrastructure",
        "Implement CI/CD pipelines for automated deployments",
        "Monitor system performance and ensure high availability",
        "Manage containerized applications using Docker and Kubernetes",
        "Collaborate with development teams on infrastructure needs",
      ],
      requirements: [
        "4+ years of DevOps experience",
        "Expertise in AWS or Azure services",
        "Experience with Docker, Kubernetes, and Terraform",
        "Strong scripting skills (Python, Bash)",
        "Knowledge of monitoring tools (Prometheus, Grafana)",
      ],
      benefits: [
        "Competitive salary package",
        "Remote work",
        "Health insurance",
        "Professional certifications",
        "Flexible schedule",
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      hoverBg: "hover:bg-green-50",
      icon: <FiZap />,
    },
    {
      id: 4,
      title: "Sales Development Representative",
      category: "sales",
      type: "Full-time",
      location: "Mumbai, India",
      experience: "1-3 years",
      salary: "Base + Commission",
      posted: "4 days ago",
      description: "Join our sales team to drive business growth and build relationships with enterprise clients.",
      responsibilities: [
        "Identify and qualify potential leads",
        "Conduct outreach via email, phone, and social media",
        "Schedule meetings for account executives",
        "Maintain accurate records in CRM",
        "Achieve monthly meeting quotas",
      ],
      requirements: [
        "1-3 years of sales experience",
        "Excellent communication skills",
        "Self-motivated and goal-oriented",
        "Experience with CRM tools",
        "Tech-savvy and quick learner",
      ],
      benefits: [
        "Competitive base + uncapped commission",
        "Career growth opportunities",
        "Health insurance",
        "Sales training programs",
        "Team incentives",
      ],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      hoverBg: "hover:bg-orange-50",
      icon: <FiTrendingUp />,
    },
    {
      id: 5,
      title: "Customer Support Specialist",
      category: "support",
      type: "Full-time",
      location: "Remote",
      experience: "2+ years",
      salary: "Competitive",
      posted: "5 days ago",
      description: "We're looking for a Customer Support Specialist to help our clients succeed with our products.",
      responsibilities: [
        "Respond to customer inquiries via chat, email, and phone",
        "Troubleshoot technical issues and provide solutions",
        "Document customer interactions in support system",
        "Create and maintain help center articles",
        "Gather feedback for product improvement",
      ],
      requirements: [
        "2+ years of customer support experience",
        "Excellent written and verbal communication",
        "Technical aptitude and problem-solving skills",
        "Patience and empathy",
        "Experience with support tools like Zendesk",
      ],
      benefits: [
        "Competitive salary",
        "Remote work",
        "Health insurance",
        "Learning opportunities",
        "Growth potential",
      ],
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      hoverBg: "hover:bg-pink-50",
      icon: <FiUsers />,
    },
    {
      id: 6,
      title: "Frontend Developer",
      category: "engineering",
      type: "Full-time",
      location: "Remote",
      experience: "3+ years",
      salary: "Competitive",
      posted: "1 week ago",
      description: "Join our frontend team to build responsive, performant web applications.",
      responsibilities: [
        "Build responsive web applications using React",
        "Write clean, maintainable code",
        "Collaborate with designers on implementation",
        "Optimize for performance and SEO",
        "Participate in code reviews",
      ],
      requirements: [
        "3+ years of frontend development",
        "Strong React and JavaScript skills",
        "Experience with Tailwind CSS",
        "Understanding of responsive design",
        "Familiarity with Git",
      ],
      benefits: [
        "Competitive salary",
        "Remote flexibility",
        "Health insurance",
        "Learning budget",
        "Team events",
      ],
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50",
      hoverBg: "hover:bg-cyan-50",
      icon: <FiLayers />,
    },
    {
      id: 7,
      title: "Marketing Manager",
      category: "sales",
      type: "Full-time",
      location: "Delhi, India",
      experience: "5+ years",
      salary: "Competitive",
      posted: "6 days ago",
      description: "Lead our marketing efforts to drive brand awareness and generate leads.",
      responsibilities: [
        "Develop and execute marketing strategy",
        "Manage digital marketing campaigns",
        "Create content and manage social media",
        "Analyze metrics and optimize campaigns",
        "Coordinate with sales team",
      ],
      requirements: [
        "5+ years of marketing experience",
        "Experience in B2B tech marketing",
        "Strong analytical skills",
        "Excellent writing and communication",
        "SEO/SEM knowledge",
      ],
      benefits: [
        "Leadership role",
        "Competitive compensation",
        "Health insurance",
        "Performance bonuses",
        "Growth opportunities",
      ],
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      hoverBg: "hover:bg-red-50",
      icon: <FiTrendingUp />,
    },
    {
      id: 8,
      title: "Technical Support Engineer",
      category: "support",
      type: "Full-time",
      location: "Remote",
      experience: "3+ years",
      salary: "Competitive",
      posted: "2 days ago",
      description: "Provide technical support to enterprise clients and help resolve complex issues.",
      responsibilities: [
        "Troubleshoot technical issues for clients",
        "Escalate issues to development team when needed",
        "Document solutions and create knowledge base",
        "Provide training to clients",
        "Monitor system health",
      ],
      requirements: [
        "3+ years of technical support experience",
        "Strong understanding of web technologies",
        "Experience with APIs and databases",
        "Excellent problem-solving skills",
        "Customer-focused mindset",
      ],
      benefits: [
        "Competitive salary",
        "Remote work",
        "Health insurance",
        "Professional development",
        "Flexible hours",
      ],
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      hoverBg: "hover:bg-teal-50",
      icon: <FiUsers />,
    },
  ];

  const benefits = [
    { icon: <FiHome />, title: "Remote Work", description: "Work from anywhere in the world", color: "from-blue-500 to-blue-600", delay: 0.1 },
    { icon: <FiHeart />, title: "Health Insurance", description: "Comprehensive coverage for you and family", color: "from-purple-500 to-purple-600", delay: 0.2 },
    { icon: <FiBookOpen />, title: "Learning Budget", description: "$1000/year for courses & books", color: "from-pink-500 to-pink-600", delay: 0.3 },
    { icon: <FiCoffeeIcon />, title: "Flexible Hours", description: "Work when you're most productive", color: "from-orange-500 to-orange-600", delay: 0.4 },
    { icon: <FiAward />, title: "Performance Bonus", description: "Annual bonuses based on performance", color: "from-green-500 to-green-600", delay: 0.5 },
    { icon: <FiUsers />, title: "Team Retreats", description: "Annual company offsites and events", color: "from-teal-500 to-teal-600", delay: 0.6 },
    { icon: <FiGlobe />, title: "Global Team", description: "Work with talented people worldwide", color: "from-indigo-500 to-indigo-600", delay: 0.7 },
    { icon: <FiZap />, title: "Latest Tech", description: "Work with modern tools and technologies", color: "from-cyan-500 to-cyan-600", delay: 0.8 },
  ];

  const values = [
    { icon: <FiSmile />, title: "Customer First", description: "We put our customers at the center of everything we do", color: "from-blue-500 to-blue-600" },
    { icon: <FiZap />, title: "Innovation", description: "We embrace new ideas and technologies", color: "from-purple-500 to-purple-600" },
    { icon: <FiShield />, title: "Integrity", description: "We do the right thing, always", color: "from-pink-500 to-pink-600" },
    { icon: <FiUsers />, title: "Teamwork", description: "We achieve more together", color: "from-orange-500 to-orange-600" },
  ];

  const filteredJobs = jobs
    .filter(job => activeCategory === "all" || job.category === activeCategory)
    .filter(job => job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                    job.description.toLowerCase().includes(searchQuery.toLowerCase()));

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

  const handleApply = (job) => {
    setAppliedJob(job);
    setShowApplication(true);
  };

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
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
          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-20 left-10 text-6xl opacity-20"
          >
            🚀
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute bottom-20 right-10 text-6xl opacity-20"
          >
            💼
          </motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-6 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-white/30"
          >
            <FiUsers className="text-5xl" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Join Our Team
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
            We're building the future of technology. Join us and be part of something amazing.
            Work with talented people, solve challenging problems, and grow your career.
          </motion.p>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {[
              { number: "50+", label: "Team Members", icon: <FiUsers />, color: "from-blue-400 to-blue-600" },
              { number: "15+", label: "Countries", icon: <FiGlobe />, color: "from-purple-400 to-purple-600" },
              { number: "8+", label: "Years", icon: <FiClock />, color: "from-pink-400 to-pink-600" },
              { number: "100%", label: "Remote", icon: <FiHome />, color: "from-orange-400 to-orange-600" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group cursor-pointer"
              >
                <div className={`text-4xl mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform`}>
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold">{stat.number}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
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
                Why Join Us?
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We believe in creating an environment where you can thrive both personally and professionally.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`bg-gradient-to-br ${value.color} p-6 rounded-2xl text-center text-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer`}
              >
                <div className="text-5xl mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-white/80 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
                Perks & Benefits
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We take care of our team so you can focus on doing your best work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: benefit.delay }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform`}>
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
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
                Open Positions
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join our team and help us build amazing products. Find your perfect role below.
            </p>
          </motion.div>

          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search positions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                  <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Jobs Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`bg-white border border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${job.hoverBg}`}
                onClick={() => setSelectedJob(job)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${job.color} flex items-center justify-center text-white text-xl flex-shrink-0`}
                    >
                      {job.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-2">
                        <span className="flex items-center gap-1">
                          <FiMapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiBriefcase className="w-4 h-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiClock className="w-4 h-4" />
                          {job.experience}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm line-clamp-2">{job.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-sm text-gray-400">{job.posted}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => { e.stopPropagation(); handleApply(job); }}
                      className={`px-5 py-2 bg-gradient-to-r ${job.color} text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all`}
                    >
                      Apply Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No positions found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Job Details Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedJob(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`bg-gradient-to-r ${selectedJob.color} p-6 text-white rounded-t-2xl`}>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white text-2xl transition-colors"
                >
                  <FiX className="w-6 h-6" />
                </button>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center text-3xl">
                    {selectedJob.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{selectedJob.title}</h2>
                    <div className="flex flex-wrap gap-3 mt-2 text-sm text-white/80">
                      <span className="flex items-center gap-1">
                        <FiMapPin className="w-4 h-4" />
                        {selectedJob.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiBriefcase className="w-4 h-4" />
                        {selectedJob.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiClock className="w-4 h-4" />
                        {selectedJob.experience}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">About the Role</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedJob.description}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Responsibilities</h3>
                  <ul className="space-y-2">
                    {selectedJob.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 group">
                        <FiCheckCircle className="text-green-500 w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 group">
                        <FiCheckCircle className="text-blue-500 w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">What We Offer</h3>
                  <ul className="space-y-2">
                    {selectedJob.benefits.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 group">
                        <FiStar className="text-yellow-500 w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => { setSelectedJob(null); handleApply(selectedJob); }}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    Apply Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedJob(null)}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-all"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Application Form Modal */}
      <AnimatePresence>
        {showApplication && appliedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
            onClick={() => setShowApplication(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`bg-gradient-to-r ${appliedJob.color} p-6 text-white rounded-t-2xl`}>
                <button
                  onClick={() => setShowApplication(false)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white text-2xl transition-colors"
                >
                  <FiX className="w-6 h-6" />
                </button>
                <div className="flex items-center gap-3">
                  <FiUserPlus className="text-3xl" />
                  <div>
                    <h2 className="text-2xl font-bold">Apply for {appliedJob.title}</h2>
                    <p className="text-white/80">Fill out the form below to start your application</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="+1 (800) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Resume/CV *</label>
                    <div className="relative">
                      <input
                        type="file"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Tell us why you'd be a great fit..."
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn Profile (Optional)</label>
                    <input
                      type="url"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="https://linkedin.com/in/username"
                    />
                  </div>
                  <div className="flex gap-4 pt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                    >
                      Submit Application
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={() => setShowApplication(false)}
                      className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-all"
                    >
                      Cancel
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center"
            >
              <FiThumbsUp className="text-3xl text-white" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don't See Your Perfect Role?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for talented people. Send us your resume and we'll reach out when a position opens.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Send Your Resume
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Contact HR
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

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

export default Careers;