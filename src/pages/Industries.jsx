import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiShoppingCart,
  FiTruck,
  FiHome,
  FiHeart,
  FiDollarSign,
  FiBook,
  FiCoffee,
  FiMonitor,
  FiSmartphone,
  FiCpu,
  FiShield,
  FiTrendingUp,
  FiUsers,
  FiGlobe,
  FiArrowRight,
  FiCheckCircle,
  FiStar,
  FiBarChart2,
  FiPackage,
  FiMapPin,
  FiClock,
  FiAward,
  FiMail,
  FiMessageCircle,
  FiZap,
  FiCloud,
  FiDatabase,
  FiLock,
  FiHeadphones,
  FiBriefcase,
  FiTarget,
  FiLayers,
  FiGrid,
  FiPieChart,
  FiCalendar,
  FiBell,
} from "react-icons/fi";

const Industries = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  const industries = [
    {
      id: "retail",
      name: "Retail & E-commerce",
      icon: <FiShoppingCart />,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600",
      description: "Transform your retail business with cutting-edge digital solutions that drive sales and enhance customer experience.",
      fullDescription: "The retail landscape is evolving faster than ever. From brick-and-mortar stores to omnichannel experiences, we help retailers leverage technology to stay ahead of the curve. Our solutions enable seamless integration between online and offline channels, providing customers with a unified shopping experience that drives loyalty and revenue.",
      stats: [
        { number: "200+", label: "Projects", icon: <FiShoppingCart />, suffix: "Completed" },
        { number: "150%", label: "Sales Increase", icon: <FiTrendingUp />, suffix: "Average" },
        { number: "98%", label: "Satisfaction", icon: <FiStar />, suffix: "Client Rating" },
      ],
      features: [
        { name: "E-commerce Platforms", description: "Custom online stores with advanced features" },
        { name: "Mobile Shopping Apps", description: "Native iOS and Android shopping experiences" },
        { name: "Inventory Management", description: "Real-time stock tracking and optimization" },
        { name: "POS Systems", description: "Integrated point-of-sale solutions" },
        { name: "Customer Analytics", description: "AI-powered customer insights" },
        { name: "Loyalty Programs", description: "Digital rewards and engagement systems" },
        { name: "Omnichannel Integration", description: "Seamless online-offline experience" },
        { name: "Marketing Automation", description: "Personalized campaign management" },
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Shopify", "Magento", "AWS", "GraphQL"],
      caseStudies: [
        { title: "Global Fashion Brand", result: "200% sales growth in 6 months", metrics: "2x revenue increase", testimonial: "Tech Synergia transformed our online presence completely. Sales have never been better!" },
        { title: "Omnichannel Retailer", result: "40% increase in customer retention", metrics: "50K+ loyal customers", testimonial: "The omnichannel solution they built has revolutionized how we engage with customers." },
      ],
      challenges: [
        "Fragmented customer experience across channels",
        "Inventory management complexity",
        "Cart abandonment rates",
        "Customer retention challenges",
      ],
      solutions: [
        "Unified omnichannel platform",
        "AI-powered inventory optimization",
        "Smart checkout and cart recovery",
        "Loyalty and engagement programs",
      ],
    },
    {
      id: "logistics",
      name: "Logistics & Supply Chain",
      icon: <FiTruck />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      description: "Optimize your supply chain with intelligent tracking and real-time visibility solutions.",
      fullDescription: "In today's fast-paced global economy, supply chain efficiency is critical. Our logistics solutions provide end-to-end visibility, real-time tracking, and predictive analytics that help businesses reduce costs, improve delivery times, and enhance customer satisfaction.",
      stats: [
        { number: "150+", label: "Projects", icon: <FiTruck />, suffix: "Completed" },
        { number: "35%", label: "Cost Reduction", icon: <FiTrendingUp />, suffix: "Average" },
        { number: "99.9%", label: "On-Time Delivery", icon: <FiStar />, suffix: "Success Rate" },
      ],
      features: [
        { name: "Real-time Tracking", description: "GPS-enabled fleet tracking" },
        { name: "Route Optimization", description: "AI-powered route planning" },
        { name: "Warehouse Management", description: "Efficient inventory and space utilization" },
        { name: "Fleet Management", description: "Vehicle maintenance and driver management" },
        { name: "Demand Forecasting", description: "Predictive analytics for inventory" },
        { name: "Supplier Integration", description: "Seamless vendor connectivity" },
        { name: "Last-mile Delivery", description: "Optimized final delivery solutions" },
        { name: "Analytics Dashboard", description: "Real-time performance metrics" },
      ],
      technologies: ["React", "Python", "PostgreSQL", "Google Maps API", "IoT", "Kafka", "TensorFlow", "Docker"],
      caseStudies: [
        { title: "National Logistics Provider", result: "35% reduction in delivery times", metrics: "10,000+ daily shipments", testimonial: "The real-time tracking system has been a game-changer for our operations." },
        { title: "E-commerce Fulfillment", result: "99.9% order accuracy achieved", metrics: "50% faster processing", testimonial: "Our warehouse efficiency has improved dramatically since implementing their solution." },
      ],
      challenges: [
        "Lack of real-time visibility",
        "Inefficient route planning",
        "High fuel and operational costs",
        "Manual tracking processes",
      ],
      solutions: [
        "IoT-enabled tracking systems",
        "AI route optimization",
        "Fuel efficiency analytics",
        "Automated fleet management",
      ],
    },
    {
      id: "healthcare",
      name: "Healthcare",
      icon: <FiHeart />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      description: "Revolutionize patient care with secure, compliant healthcare technology solutions.",
      fullDescription: "Healthcare technology is transforming patient care. Our HIPAA-compliant solutions enable healthcare providers to deliver better care, streamline operations, and improve patient outcomes through secure, innovative platforms.",
      stats: [
        { number: "100+", label: "Projects", icon: <FiHeart />, suffix: "Completed" },
        { number: "60%", label: "Efficiency Gain", icon: <FiTrendingUp />, suffix: "Average" },
        { number: "100%", label: "HIPAA Compliant", icon: <FiShield />, suffix: "Secure" },
      ],
      features: [
        { name: "EMR/EHR Systems", description: "Electronic medical records management" },
        { name: "Telemedicine Platforms", description: "Remote patient consultation" },
        { name: "Patient Portals", description: "Self-service health management" },
        { name: "Appointment Scheduling", description: "Smart booking systems" },
        { name: "Medical Billing", description: "Automated claims processing" },
        { name: "Health Analytics", description: "Population health insights" },
        { name: "Wearable Integration", description: "IoT health device connectivity" },
        { name: "Prescription Management", description: "Digital prescription systems" },
      ],
      technologies: ["React", "Python", "Django", "PostgreSQL", "AWS", "FHIR", "TensorFlow", "Docker"],
      caseStudies: [
        { title: "Multi-specialty Hospital", result: "50% faster patient check-in", metrics: "10,000+ patients/month", testimonial: "Patient satisfaction has improved significantly with our new digital systems." },
        { title: "Telehealth Platform", result: "10,000+ virtual consultations monthly", metrics: "95% satisfaction rate", testimonial: "The platform has enabled us to reach patients in remote areas effectively." },
      ],
      challenges: [
        "Patient data security concerns",
        "Fragmented healthcare systems",
        "Manual administrative processes",
        "Patient engagement issues",
      ],
      solutions: [
        "Enterprise-grade encryption",
        "Integrated healthcare platforms",
        "Automated workflows",
        "Patient engagement portals",
      ],
    },
    {
      id: "finance",
      name: "Finance & Banking",
      icon: <FiDollarSign />,
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
      description: "Secure, scalable financial solutions that meet regulatory requirements and enhance user experience.",
      fullDescription: "The financial services industry demands the highest levels of security, reliability, and innovation. We build solutions that help financial institutions modernize their operations, enhance customer experiences, and stay compliant with ever-changing regulations.",
      stats: [
        { number: "120+", label: "Projects", icon: <FiDollarSign />, suffix: "Completed" },
        { number: "$2.5B+", label: "Transactions", icon: <FiTrendingUp />, suffix: "Processed" },
        { number: "99.99%", label: "Uptime", icon: <FiShield />, suffix: "Guaranteed" },
      ],
      features: [
        { name: "Digital Banking", description: "Modern banking platforms" },
        { name: "Payment Gateways", description: "Secure payment processing" },
        { name: "Fraud Detection", description: "AI-powered fraud prevention" },
        { name: "Investment Platforms", description: "Wealth management solutions" },
        { name: "Loan Management", description: "Automated lending systems" },
        { name: "Regulatory Compliance", description: "Automated compliance checks" },
        { name: "KYC Solutions", description: "Identity verification" },
        { name: "Financial Analytics", description: "Real-time reporting" },
      ],
      technologies: ["Java", "Spring Boot", "Angular", "Oracle", "Kubernetes", "Blockchain", "Kafka", "Redis"],
      caseStudies: [
        { title: "Digital Bank", result: "500,000+ users in first year", metrics: "$100M+ deposits", testimonial: "Their digital banking platform has exceeded all our expectations." },
        { title: "Payment Processor", result: "$1B+ transactions processed monthly", metrics: "99.99% uptime", testimonial: "The security and reliability of their solution is unparalleled." },
      ],
      challenges: [
        "Security and fraud risks",
        "Regulatory complexity",
        "Legacy system modernization",
        "Customer experience gaps",
      ],
      solutions: [
        "Bank-grade security protocols",
        "Automated compliance systems",
        "Modern architecture migration",
        "User-centric design",
      ],
    },
    {
      id: "education",
      name: "Education",
      icon: <FiBook />,
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      description: "Empower educators and engage students with modern learning management solutions.",
      fullDescription: "Education technology is reshaping how students learn and how institutions operate. Our solutions help educational institutions create engaging learning experiences, streamline administrative processes, and improve student outcomes.",
      stats: [
        { number: "200+", label: "Institutions", icon: <FiBook />, suffix: "Served" },
        { number: "100K+", label: "Students", icon: <FiUsers />, suffix: "Enrolled" },
        { number: "95%", label: "Engagement", icon: <FiStar />, suffix: "Rate" },
      ],
      features: [
        { name: "LMS Platforms", description: "Comprehensive learning management" },
        { name: "Virtual Classrooms", description: "Real-time online learning" },
        { name: "Student Information Systems", description: "Centralized student data" },
        { name: "Parent Portals", description: "Real-time progress tracking" },
        { name: "Assessment Tools", description: "Online exams and grading" },
        { name: "Content Management", description: "Digital curriculum management" },
        { name: "Fee Management", description: "Automated fee collection" },
        { name: "Mobile Learning", description: "Learn anywhere, anytime" },
      ],
      technologies: ["React", "Node.js", "MongoDB", "WebRTC", "AWS", "GraphQL", "Redis", "Elasticsearch"],
      caseStudies: [
        { title: "University System", result: "40% increase in student engagement", metrics: "20,000+ active users", testimonial: "The platform has transformed how our faculty and students interact." },
        { title: "K-12 School District", result: "Streamlined operations for 50 schools", metrics: "70% administrative time saved", testimonial: "Our administrative workload has decreased significantly." },
      ],
      challenges: [
        "Student engagement difficulties",
        "Administrative inefficiencies",
        "Remote learning challenges",
        "Parent communication gaps",
      ],
      solutions: [
        "Interactive learning platforms",
        "Automated administrative systems",
        "Virtual classroom solutions",
        "Parent engagement portals",
      ],
    },
    {
      id: "hospitality",
      name: "Hospitality",
      icon: <FiCoffee />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      description: "Deliver exceptional guest experiences with intelligent hospitality solutions.",
      fullDescription: "The hospitality industry thrives on exceptional guest experiences. Our technology solutions help hotels, restaurants, and resorts streamline operations, personalize guest interactions, and create memorable experiences that drive loyalty and revenue.",
      stats: [
        { number: "80+", label: "Hotels", icon: <FiCoffee />, suffix: "Partnered" },
        { number: "35%", label: "Revenue Growth", icon: <FiTrendingUp />, suffix: "Average" },
        { number: "4.9/5", label: "Guest Rating", icon: <FiStar />, suffix: "Average" },
      ],
      features: [
        { name: "Property Management", description: "Complete hotel operations" },
        { name: "Booking Engines", description: "Direct booking systems" },
        { name: "Guest Experience Apps", description: "Mobile guest engagement" },
        { name: "Restaurant POS", description: "Integrated dining solutions" },
        { name: "Loyalty Programs", description: "Reward management" },
        { name: "Housekeeping Management", description: "Staff coordination" },
        { name: "Revenue Management", description: "Dynamic pricing" },
        { name: "Event Management", description: "Conference and event planning" },
      ],
      technologies: ["React", "Python", "PostgreSQL", "Stripe", "AWS", "Mobile Apps", "Redis", "Kafka"],
      caseStudies: [
        { title: "Hotel Chain", result: "25% increase in direct bookings", metrics: "$5M+ additional revenue", testimonial: "The booking engine has significantly reduced our OTA dependency." },
        { title: "Restaurant Group", result: "40% faster table turnover", metrics: "30% revenue increase", testimonial: "Our operational efficiency has never been better." },
      ],
      challenges: [
        "OTA dependency and commissions",
        "Guest personalization gaps",
        "Operational inefficiencies",
        "Staff coordination issues",
      ],
      solutions: [
        "Direct booking platforms",
        "AI-powered guest profiling",
        "Integrated operations software",
        "Real-time staff coordination",
      ],
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      icon: <FiCpu />,
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
      textColor: "text-cyan-600",
      description: "Smart manufacturing solutions for Industry 4.0 transformation.",
      fullDescription: "Industry 4.0 is revolutionizing manufacturing. Our solutions help manufacturers embrace digital transformation, optimize production processes, reduce downtime, and improve product quality through IoT, AI, and real-time analytics.",
      stats: [
        { number: "60+", label: "Factories", icon: <FiCpu />, suffix: "Connected" },
        { number: "45%", label: "Efficiency Gain", icon: <FiTrendingUp />, suffix: "Average" },
        { number: "30%", label: "Cost Reduction", icon: <FiDollarSign />, suffix: "Achieved" },
      ],
      features: [
        { name: "MES Systems", description: "Manufacturing execution" },
        { name: "IoT Integration", description: "Connected factory sensors" },
        { name: "Quality Control", description: "Real-time quality monitoring" },
        { name: "Inventory Management", description: "Raw material tracking" },
        { name: "Predictive Maintenance", description: "Proactive equipment care" },
        { name: "Production Planning", description: "Optimized scheduling" },
        { name: "Digital Twin", description: "Virtual factory simulation" },
        { name: "Supply Chain Integration", description: "End-to-end visibility" },
      ],
      technologies: ["Python", "TensorFlow", "PostgreSQL", "IoT", "Kafka", "React", "Docker", "Kubernetes"],
      caseStudies: [
        { title: "Automotive Manufacturer", result: "30% reduction in downtime", metrics: "20% productivity gain", testimonial: "Predictive maintenance has saved us millions in unplanned downtime." },
        { title: "Electronics Plant", result: "45% quality improvement", metrics: "40% waste reduction", testimonial: "Our quality metrics have improved dramatically with real-time monitoring." },
      ],
      challenges: [
        "Equipment downtime",
        "Quality control issues",
        "Production inefficiencies",
        "Supply chain disruptions",
      ],
      solutions: [
        "Predictive maintenance AI",
        "Real-time quality monitoring",
        "Production optimization systems",
        "Supply chain visibility tools",
      ],
    },
    {
      id: "realestate",
      name: "Real Estate",
      icon: <FiHome />,
      color: "from-teal-500 to-green-500",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600",
      description: "Modernize property management and enhance buyer experiences.",
      fullDescription: "The real estate industry is embracing digital transformation. Our solutions help agencies, developers, and property managers streamline operations, enhance property discovery, and create seamless experiences for buyers, sellers, and tenants.",
      stats: [
        { number: "150+", label: "Agencies", icon: <FiHome />, suffix: "Served" },
        { number: "50K+", label: "Properties", icon: <FiMapPin />, suffix: "Listed" },
        { number: "85%", label: "Faster Sales", icon: <FiTrendingUp />, suffix: "Turnaround" },
      ],
      features: [
        { name: "Property Portals", description: "Comprehensive property listings" },
        { name: "CRM Systems", description: "Lead and client management" },
        { name: "Virtual Tours", description: "3D property walkthroughs" },
        { name: "Document Management", description: "Digital contract handling" },
        { name: "Mortgage Calculators", description: "Financial planning tools" },
        { name: "Analytics Dashboards", description: "Market insights" },
        { name: "Tenant Portals", description: "Rental management" },
        { name: "Maintenance Management", description: "Service request tracking" },
      ],
      technologies: ["React", "Node.js", "MongoDB", "Three.js", "AWS", "Elasticsearch", "Redis", "GraphQL"],
      caseStudies: [
        { title: "Real Estate Portal", result: "500,000+ monthly visitors", metrics: "200% traffic increase", testimonial: "Their platform has become the go-to property portal in our region." },
        { title: "Property Management Firm", result: "40% faster lead conversion", metrics: "300% ROI", testimonial: "The CRM system has revolutionized how we manage our leads." },
      ],
      challenges: [
        "Lead management inefficiency",
        "Property discovery friction",
        "Manual document processes",
        "Client communication gaps",
      ],
      solutions: [
        "AI-powered lead scoring",
        "Immersive property experiences",
        "Digital document management",
        "Automated communication tools",
      ],
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

  const selectedIndustryData = industries.find((i) => i.id === selectedIndustry);

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
            <FiGlobe className="text-5xl" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Industries We Serve
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
            Tailored technology solutions designed for your industry's unique
            challenges and opportunities. We combine deep domain expertise with
            cutting-edge technology to drive real business results.
          </motion.p>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {[
              { number: "8+", label: "Industries", icon: <FiGlobe /> },
              { number: "500+", label: "Projects", icon: <FiBriefcase /> },
              { number: "30+", label: "Countries", icon: <FiMapPin /> },
              { number: "98%", label: "Satisfaction", icon: <FiStar /> },
            ].map((stat, index) => (
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

      {/* Industries Grid */}
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
                Our Industry Expertise
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We understand the unique challenges of each industry and deliver
              solutions that drive measurable results.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`group cursor-pointer bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 ${
                  selectedIndustry === industry.id
                    ? "ring-2 ring-blue-500 shadow-2xl"
                    : ""
                }`}
              >
                <div
                  className={`w-20 h-20 rounded-xl bg-gradient-to-r ${industry.color} p-4 text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center mx-auto`}
                >
                  <div className="text-4xl">{industry.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                  {industry.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 text-center">
                  {industry.description}
                </p>
                <div className="flex items-center justify-center text-blue-600 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Learn More</span>
                  <FiArrowRight className="ml-1 w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industry Details Modal */}
      <AnimatePresence>
        {selectedIndustry && selectedIndustryData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedIndustry(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div
                className={`relative bg-gradient-to-r ${selectedIndustryData.color} p-6 text-white rounded-t-2xl`}
              >
                <button
                  onClick={() => setSelectedIndustry(null)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white text-2xl transition-colors"
                >
                  ✕
                </button>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-white/20 rounded-xl p-4 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-4xl">{selectedIndustryData.icon}</div>
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold">
                      {selectedIndustryData.name}
                    </h2>
                    <p className="text-white/80 mt-1">
                      {selectedIndustryData.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Tabs */}
                <div className="flex flex-wrap gap-2 border-b border-gray-200 mb-6">
                  {["overview", "features", "technologies", "success"].map(
                    (tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-t-lg ${
                          activeTab === tab
                            ? `${selectedIndustryData.textColor} border-b-2 border-current`
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    )
                  )}
                </div>

                {/* Overview Tab */}
                {activeTab === "overview" && (
                  <div className="space-y-6">
                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {selectedIndustryData.stats.map((stat, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 rounded-xl p-4 text-center hover:shadow-md transition-shadow"
                        >
                          <div
                            className={`text-4xl mb-2 bg-gradient-to-r ${selectedIndustryData.color} bg-clip-text text-transparent flex justify-center`}
                          >
                            {stat.icon}
                          </div>
                          <div className="text-2xl font-bold text-gray-800">
                            {stat.number}
                          </div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                          <div className="text-xs text-gray-400">{stat.suffix}</div>
                        </div>
                      ))}
                    </div>

                    {/* Full Description */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        Industry Overview
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {selectedIndustryData.fullDescription}
                      </p>
                    </div>

                    {/* Challenges & Solutions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-red-50 rounded-xl p-5">
                        <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                          <FiTarget className="text-red-500" />
                          Key Challenges
                        </h3>
                        <ul className="space-y-2">
                          {selectedIndustryData.challenges.map((challenge, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="text-red-500">•</span>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-green-50 rounded-xl p-5">
                        <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                          <FiCheckCircle className="text-green-500" />
                          Our Solutions
                        </h3>
                        <ul className="space-y-2">
                          {selectedIndustryData.solutions.map((solution, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="text-green-500">✓</span>
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Key Benefits */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        Key Benefits
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedIndustryData.features.slice(0, 8).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <FiCheckCircle className="text-green-500 w-4 h-4 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{feature.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Features Tab */}
                {activeTab === "features" && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Comprehensive Solutions
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedIndustryData.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                        >
                          <div
                            className={`w-10 h-10 rounded-lg bg-gradient-to-r ${selectedIndustryData.color} flex items-center justify-center text-white flex-shrink-0`}
                          >
                            <FiCheckCircle className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-1">
                              {feature.name}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies Tab */}
                {activeTab === "technologies" && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Technologies We Use
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {selectedIndustryData.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${selectedIndustryData.color} text-white shadow-sm`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-gray-800 mb-3">
                        Why Our Tech Stack Matters
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        We leverage the latest technologies to build scalable,
                        secure, and high-performance solutions for the{" "}
                        {selectedIndustryData.name.toLowerCase()} industry. Our
                        tech stack is carefully selected to ensure optimal results
                        and future-proof solutions.
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                        {selectedIndustryData.technologies.slice(0, 6).map((tech, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <FiCheckCircle className="text-green-500 w-4 h-4" />
                            <span>{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Success Tab */}
                {activeTab === "success" && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Success Stories
                    </h3>
                    <div className="space-y-4">
                      {selectedIndustryData.caseStudies.map((caseStudy, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`w-12 h-12 rounded-lg bg-gradient-to-r ${selectedIndustryData.color} flex items-center justify-center text-white flex-shrink-0`}
                            >
                              <FiAward className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-gray-800 text-lg mb-1">
                                {caseStudy.title}
                              </h4>
                              <p className="text-blue-600 font-semibold mb-2">
                                {caseStudy.result}
                              </p>
                              <p className="text-gray-600 text-sm mb-2">
                                {caseStudy.metrics}
                              </p>
                              <div className="bg-white rounded-lg p-3 mt-2 border border-gray-100">
                                <p className="text-gray-600 text-sm italic">
                                  "{caseStudy.testimonial}"
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                      <div className="flex items-center gap-3 mb-3">
                        <FiMessageCircle className="text-blue-600 w-6 h-6" />
                        <h4 className="font-bold text-gray-800 text-lg">
                          Ready to transform your business?
                        </h4>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Let's discuss how we can help you achieve similar results
                        in your organization. Our team of experts is ready to
                        understand your unique challenges and craft the perfect
                        solution.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <button className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-semibold hover:scale-105 transition-transform">
                          Contact Our Experts
                        </button>
                        <button className="px-6 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg text-sm font-semibold hover:border-blue-500 hover:text-blue-600 transition-colors">
                          Download Case Study
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Why Choose Us Section */}
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
                Why Choose Tech Synergia
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We combine industry expertise with technical excellence to deliver
              exceptional results that drive business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FiUsers />,
                title: "Industry Experts",
                desc: "Deep domain knowledge in your industry",
                color: "from-blue-500 to-blue-600",
                stat: "50+ Industry Experts",
              },
              {
                icon: <FiGlobe />,
                title: "Global Reach",
                desc: "Serving clients across 30+ countries",
                color: "from-purple-500 to-purple-600",
                stat: "30+ Countries",
              },
              {
                icon: <FiShield />,
                title: "Enterprise Security",
                desc: "Bank-level data protection",
                color: "from-pink-500 to-pink-600",
                stat: "100% Compliant",
              },
              {
                icon: <FiClock />,
                title: "24/7 Support",
                desc: "Round-the-clock assistance",
                color: "from-orange-500 to-orange-600",
                stat: "24/7 Availability",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${item.color} p-3 text-white flex items-center justify-center`}
                >
                  <div className="text-3xl">{item.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{item.desc}</p>
                <div className="text-xs text-blue-600 font-semibold mt-2">
                  {item.stat}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              Trusted by industry leaders across the globe
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Tech Synergia transformed our e-commerce platform. Sales increased by 200% in just 6 months!",
                author: "Sarah Johnson",
                role: "CEO, FashionHub",
                industry: "Retail",
                color: "from-pink-500 to-rose-500",
              },
              {
                quote: "Their logistics solution reduced our delivery times by 35% and cut costs significantly.",
                author: "Michael Chen",
                role: "Operations Director, LogiTrack",
                industry: "Logistics",
                color: "from-blue-500 to-cyan-500",
              },
              {
                quote: "The healthcare platform they built has revolutionized our patient care. Highly recommended!",
                author: "Dr. Emily Williams",
                role: "Chief Medical Officer, HealthFirst",
                industry: "Healthcare",
                color: "from-green-500 to-emerald-500",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center text-white`}>
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">{testimonial.author}</h4>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                    <p className="text-xs text-blue-600 mt-0.5">{testimonial.industry}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our industry-specific solutions can help you
              achieve your business goals and stay ahead of the competition.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Get a Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                View Our Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CSS for animations */}
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

export default Industries;