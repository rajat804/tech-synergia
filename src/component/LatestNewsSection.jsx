import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FiCalendar, 
  FiUser, 
  FiClock, 
  FiMessageSquare,
  FiEye,
  FiArrowRight,
  FiBookmark,
  FiShare2,
  FiHeart,
  FiAward,
  FiTrendingUp,
  FiCode,
  FiCloud,
  FiShield,
  FiCpu
} from "react-icons/fi";

const LatestNewsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All News" },
    { id: "company", name: "Company News" },
    { id: "product", name: "Product Updates" },
    { id: "events", name: "Events & Webinars" },
    { id: "insights", name: "Tech Insights" }
  ];

  const news = [
    {
      id: 1,
      title: "Tech Synergia Launches AI-Powered Analytics Platform",
      excerpt: "Our new platform helps businesses leverage artificial intelligence for data-driven decision making and predictive analytics.",
      content: "Tech Synergia is proud to announce the launch of SynergyAI, a comprehensive analytics platform that combines machine learning with business intelligence. The platform has already helped early adopters increase efficiency by 40%.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "product",
      categoryName: "Product Updates",
      author: {
        name: "Sarah Johnson",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        role: "Product Manager at Tech Synergia"
      },
      date: "March 15, 2024",
      readTime: "5 min read",
      views: 1234,
      comments: 45,
      likes: 89,
      featured: true,
      color: "from-blue-500 to-purple-500",
      tags: ["AI", "Analytics", "Launch"]
    },
    {
      id: 2,
      title: "Tech Synergia Named Among Top 10 Fastest-Growing Tech Companies",
      excerpt: "For the second consecutive year, Tech Synergia has been recognized for exceptional growth and innovation in the technology sector.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "company",
      categoryName: "Company News",
      author: {
        name: "Michael Chen",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        role: "CEO at Tech Synergia"
      },
      date: "March 12, 2024",
      readTime: "4 min read",
      views: 2341,
      comments: 67,
      likes: 156,
      color: "from-purple-500 to-pink-500",
      tags: ["Award", "Growth", "Recognition"]
    },
    {
      id: 3,
      title: "Introducing SynergyCloud: Enterprise-Grade Cloud Solutions",
      excerpt: "Tech Synergia expands its service portfolio with comprehensive cloud migration and management services for businesses of all sizes.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "product",
      categoryName: "Product Updates",
      author: {
        name: "Emma Davis",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        role: "Cloud Architect at Tech Synergia"
      },
      date: "March 10, 2024",
      readTime: "6 min read",
      views: 1876,
      comments: 34,
      likes: 234,
      color: "from-pink-500 to-orange-500",
      tags: ["Cloud", "Infrastructure", "Enterprise"]
    },
    {
      id: 4,
      title: "Tech Synergia Announces Strategic Partnership with Microsoft",
      excerpt: "New partnership will bring enhanced AI capabilities and cloud solutions to our clients, accelerating digital transformation.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "company",
      categoryName: "Company News",
      author: {
        name: "David Wilson",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        role: "Partnership Director at Tech Synergia"
      },
      date: "March 8, 2024",
      readTime: "3 min read",
      views: 987,
      comments: 23,
      likes: 67,
      color: "from-green-500 to-teal-500",
      tags: ["Partnership", "Microsoft", "AI"]
    },
    {
      id: 5,
      title: "Webinar: Mastering Digital Transformation with Tech Synergia",
      excerpt: "Join our free webinar series where experts share insights on navigating the digital landscape and implementing successful transformation strategies.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "events",
      categoryName: "Events & Webinars",
      author: {
        name: "Lisa Brown",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        role: "Events Manager at Tech Synergia"
      },
      date: "March 5, 2024",
      readTime: "2 min read",
      views: 567,
      comments: 12,
      likes: 34,
      color: "from-indigo-500 to-blue-500",
      tags: ["Webinar", "Free", "Digital Transformation"]
    },
    {
      id: 6,
      title: "Tech Synergia Achieves ISO 27001 Certification",
      excerpt: "This international standard certification demonstrates our commitment to information security and data protection for our clients.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "company",
      categoryName: "Company News",
      author: {
        name: "John Smith",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
        role: "Security Lead at Tech Synergia"
      },
      date: "March 3, 2024",
      readTime: "4 min read",
      views: 876,
      comments: 19,
      likes: 45,
      color: "from-orange-500 to-red-500",
      tags: ["Security", "Certification", "ISO"]
    }
  ];

  const filteredNews = activeCategory === "all" 
    ? news 
    : news.filter(item => item.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
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
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Tech Synergia News
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
            Stay updated with the latest news, product launches, and insights from the Tech Synergia team.
          </motion.p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured News */}
        {activeCategory === "all" && news.filter(n => n.featured).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-12"
          >
            {news.filter(n => n.featured).map((featuredNews) => (
              <motion.div
                key={featuredNews.id}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Featured Image */}
                  <div className="h-64 md:h-auto overflow-hidden">
                    <img
                      src={featuredNews.image}
                      alt={featuredNews.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Featured Content */}
                  <div className="p-8 text-white">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold flex items-center space-x-1">
                        <FiAward className="w-3 h-3" />
                        <span>Featured</span>
                      </span>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-xs">
                        {featuredNews.categoryName}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {featuredNews.title}
                    </h3>
                    
                    <p className="text-white/80 mb-6">
                      {featuredNews.excerpt}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredNews.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-white/10 rounded-full text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Author Info */}
                    <div className="flex items-center space-x-3 mb-6">
                      <img
                        src={featuredNews.author.avatar}
                        alt={featuredNews.author.name}
                        className="w-10 h-10 rounded-full border-2 border-white"
                      />
                      <div>
                        <div className="font-semibold">{featuredNews.author.name}</div>
                        <div className="text-sm text-white/70">{featuredNews.author.role}</div>
                      </div>
                    </div>
                    
                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-white/70 mb-6">
                      <div className="flex items-center space-x-1">
                        <FiCalendar className="w-4 h-4" />
                        <span>{featuredNews.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FiClock className="w-4 h-4" />
                        <span>{featuredNews.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FiEye className="w-4 h-4" />
                        <span>{featuredNews.views} views</span>
                      </div>
                    </div>
                    
                    {/* Read More Button */}
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center space-x-2 text-white font-semibold group"
                    >
                      <span>Read Full Article</span>
                      <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* News Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredNews.map((item) => (
            <motion.article
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 bg-gradient-to-r ${item.color} text-white text-xs font-semibold rounded-full shadow-lg`}>
                    {item.categoryName}
                  </span>
                </div>

                {/* Save Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <FiBookmark className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Author & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <img
                      src={item.author.avatar}
                      alt={item.author.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <span className="text-sm font-medium text-gray-700 block">
                        {item.author.name}
                      </span>
                      <span className="text-xs text-gray-500">
                        {item.author.role}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  <a href="#">{item.title}</a>
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Meta Stats */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <FiCalendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <FiClock className="w-3 h-3" />
                      <span>{item.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiMessageSquare className="w-3 h-3" />
                      <span>{item.comments}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiHeart className="w-3 h-3" />
                      <span>{item.likes}</span>
                    </div>
                  </div>
                </div>

                {/* Read More Link */}
                <motion.a
                  href="#"
                  className="inline-flex items-center text-sm font-semibold text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600"
                  whileHover={{ x: 5 }}
                >
                  Read Full Article
                  <FiArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                {/* Share Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="absolute bottom-6 right-6 text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <FiShare2 className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Bottom Gradient Line */}
              <motion.div 
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              />
            </motion.article>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>More Tech Synergia News</span>
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div 
              className="absolute inset-0 bg-white"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
              style={{ opacity: 0.2 }}
            />
          </motion.button>
        </motion.div>

      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default LatestNewsSection;