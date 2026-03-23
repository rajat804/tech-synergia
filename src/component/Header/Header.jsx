import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiMapPin,
  FiMonitor,
  FiSmartphone,
  FiShoppingCart,
  FiCode,
  FiUsers,
  FiPieChart,
  FiCoffee,
  FiPackage,
  FiTruck,
  FiHome,
  FiDollarSign,
  FiBook,
  FiTarget,
  FiSettings,
  FiCreditCard,
  FiLink,
  FiTool,
  FiServer,
  FiCpu,
  FiChevronDown,
  FiMenu,
  FiX,
  FiArrowRight,
  FiCloud,
  FiGrid,
  FiBarChart2,
  FiBell,
  FiCalendar,
  FiCheckCircle,
} from "react-icons/fi";
import Logo from "../../assets/1-removebg.png";

const Header = () => {
  const location = useLocation();
  const headerRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [solutionOpen, setSolutionOpen] = useState(false);
  const [saasOpen, setSaasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeAllMenus = () => {
    setServiceOpen(false);
    setSolutionOpen(false);
    setSaasOpen(false);
  };

  // Close mobile menu on location change
  useEffect(() => {
    setMenuOpen(false);
    closeAllMenus();
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // OUTSIDE CLICK CLOSE
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        closeAllMenus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Hover delay handlers for better UX
  const handleMouseEnter = (setter) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setter(true);
  };

  const handleMouseLeave = (setter) => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setter(false);
    }, 200);
  };

  const services = [
    {
      name: "Website Development",
      icon: <FiMonitor />,
      color: "from-blue-500 to-blue-600",
      path: "/website-development",
    },
    {
      name: "Mobile App Development",
      icon: <FiSmartphone />,
      color: "from-purple-500 to-purple-600",
      path: "/mobile-app-development",
    },
    {
      name: "Ecommerce Development",
      icon: <FiShoppingCart />,
      color: "from-pink-500 to-pink-600",
      path: "/ecommerce-development",
    },
    {
      name: "Custom Software Development",
      icon: <FiCode />,
      color: "from-blue-500 to-purple-500",
      path: "/custom-software-development",
    },
    {
      name: "ERP & CRM Solutions",
      icon: <FiUsers />,
      color: "from-purple-500 to-pink-500",
      path: "/erp-crm-solution",
    },
    {
      name: "API Development & Integration",
      icon: <FiLink />,
      color: "from-pink-500 to-orange-500",
      path: "/api-development",
    },
    {
      name: "Maintenance and Support",
      icon: <FiTool />,
      color: "from-orange-500 to-red-500",
      path: "/maintenance",
    },
    {
      name: "Software Development Outsourcing",
      icon: <FiServer />,
      color: "from-indigo-500 to-purple-500",
      path: "/software-development",
    },
    {
      name: "Desktop App Development",
      icon: <FiCpu />,
      color: "from-green-500 to-teal-500",
      path: "/destop-app-development",
    },
  ];

  const solutions = [
    {
      name: "Accounting Software",
      icon: <FiPieChart />,
      color: "from-blue-500 to-indigo-600",
      path: "/accounting-software",
    },
    {
      name: "Restaurant POS Software",
      icon: <FiCoffee />,
      color: "from-orange-500 to-red-500",
      path: "/restaurant-pos-software",
    },
    {
      name: "Inventory Management",
      icon: <FiPackage />,
      color: "from-purple-500 to-pink-500",
      path: "/inventory-management",
    },
    {
      name: "Fleet Management",
      icon: <FiTruck />,
      color: "from-green-500 to-teal-500",
      path: "/fleet-management",
    },
    {
      name: "Warehouse Management",
      icon: <FiHome />,
      color: "from-indigo-500 to-purple-500",
      path: "/warehouse-management",
    },
    {
      name: "HR Management",
      icon: <FiUsers />,
      color: "from-pink-500 to-rose-500",
      path: "/hr-management",
    },
    {
      name: "Finance Management",
      icon: <FiDollarSign />,
      color: "from-yellow-500 to-orange-500",
      path: "/finance-management",
    },
    {
      name: "School Management Software",
      icon: <FiBook />,
      color: "from-cyan-500 to-blue-500",
      path: "/school-management",
    },
    {
      name: "Lead Management",
      icon: <FiTarget />,
      color: "from-pink-500 to-red-500",
      path: "/lead-management",
    },
    {
      name: "Operations Management",
      icon: <FiSettings />,
      color: "from-gray-600 to-gray-800",
      path: "/operation-management",
    },
    {
      name: "Kiosk Software",
      icon: <FiMonitor />,
      color: "from-blue-500 to-purple-500",
      path: "/kiosk-software",
    },
    {
      name: "Payment Software",
      icon: <FiCreditCard />,
      color: "from-green-500 to-emerald-600",
      path: "/payment-software",
    },
  ];

  const saasSolutions = [
    {
      name: "School Management Platform",
      tagline: "All-in-one solution for managing school, staff and operations",
      color: "from-cyan-500 to-blue-500",
      icon: <FiBook />,
      features: [
        { name: "Website for School", icon: <FiMonitor /> },
        { name: "Admin Dashboard", icon: <FiGrid /> },
        { name: "Android App (Parents/Teachers)", icon: <FiSmartphone /> },
        { name: "iOS App", icon: <FiCpu /> },
        { name: "Attendance Management", icon: <FiCheckCircle /> },
        { name: "Fee Management", icon: <FiDollarSign /> },
        { name: "Notifications System", icon: <FiBell /> },
        { name: "Exam & Result Management", icon: <FiBarChart2 /> },
        { name: "Transport Management", icon: <FiTruck /> },
        { name: "Library Management", icon: <FiBook /> },
        { name: "Parent-Teacher Communication", icon: <FiUsers /> },
        { name: "Event Calendar", icon: <FiCalendar /> },
      ],
      path: "/saas-school-management",
    },
    {
      name: "Supply Chain Management Platform",
      tagline: "End-to-end supply chain visibility and optimization",
      color: "from-green-500 to-teal-500",
      icon: <FiTruck />,
      features: [
        { name: "Dashboard & Analytics", icon: <FiGrid /> },
        { name: "Inventory Management", icon: <FiPackage /> },
        { name: "Order Management", icon: <FiShoppingCart /> },
        { name: "Warehouse Management", icon: <FiHome /> },
        { name: "Fleet Tracking", icon: <FiTruck /> },
        { name: "Supplier Management", icon: <FiUsers /> },
        { name: "Demand Forecasting", icon: <FiBarChart2 /> },
        { name: "Real-time Tracking", icon: <FiMapPin /> },
        { name: "Mobile App (iOS/Android)", icon: <FiSmartphone /> },
        { name: "Analytics Reports", icon: <FiPieChart /> },
        { name: "Integration APIs", icon: <FiLink /> },
        { name: "Automated Alerts", icon: <FiBell /> },
      ],
      path: "/saas-supply-chain-management",
    },
  ];

  return (
    <header
      ref={headerRef}
      className={`w-full sticky top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-black"
      } h-20 flex items-center`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 w-full">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 w-50">
          <img
            src={Logo}
            alt="TechSynergia Logo"
            className="h-55 w-full"
          />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-gray-300">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>

          {/* SERVICES */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter(setServiceOpen)}
            onMouseLeave={() => handleMouseLeave(setServiceOpen)}
          >
            <button className="flex items-center gap-1 hover:text-white transition-colors">
              Services
              <FiChevronDown
                className={`transition-transform duration-300 ${serviceOpen ? "rotate-180" : ""}`}
              />
            </button>

            {serviceOpen && (
              <div className="absolute left-0 top-10 w-[540px] bg-white shadow-2xl rounded-xl overflow-hidden animate-fadeIn z-50">
                <div className="grid grid-cols-2 gap-2 p-5 max-h-[500px] overflow-y-auto">
                  {services.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={closeAllMenus}
                      className="group flex items-center justify-between p-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-md`}
                        >
                          {item.icon}
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          {item.name}
                        </span>
                      </div>
                      <FiArrowRight className="opacity-0 group-hover:opacity-100 transition text-gray-400 group-hover:text-blue-500" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* SOLUTIONS */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter(setSolutionOpen)}
            onMouseLeave={() => handleMouseLeave(setSolutionOpen)}
          >
            <button className="flex items-center gap-1 hover:text-white transition-colors">
              Solutions
              <FiChevronDown
                className={`transition-transform duration-300 ${solutionOpen ? "rotate-180" : ""}`}
              />
            </button>

            {solutionOpen && (
              <div className="absolute left-0 top-10 w-[540px] bg-white shadow-2xl rounded-xl overflow-hidden animate-fadeIn z-50">
                <div className="grid grid-cols-2 gap-2 p-5 max-h-[500px] overflow-y-auto">
                  {solutions.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={closeAllMenus}
                      className="group flex items-center justify-between p-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-md`}
                        >
                          {item.icon}
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          {item.name}
                        </span>
                      </div>
                      <FiArrowRight className="opacity-0 group-hover:opacity-100 transition text-gray-400 group-hover:text-blue-500" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* SAAS SOLUTIONS */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter(setSaasOpen)}
            onMouseLeave={() => handleMouseLeave(setSaasOpen)}
          >
            <button className="flex items-center gap-1 hover:text-white transition-colors">
              SaaS Solutions
              <FiChevronDown
                className={`transition-transform duration-300 ${saasOpen ? "rotate-180" : ""}`}
              />
            </button>

            {saasOpen && (
              <div className="absolute left-0 top-10 w-[760px] bg-white shadow-2xl rounded-xl overflow-hidden animate-fadeIn z-50">
                <div className="grid grid-cols-2 gap-6 p-6">
                  {saasSolutions.map((item, index) => (
                    <div key={index} className="group">
                      <Link
                        to={item.path}
                        onClick={closeAllMenus}
                        className="block hover:bg-gray-50 rounded-xl transition-all duration-200"
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-md flex-shrink-0`}
                          >
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-800 text-base">
                              {item.name}
                            </h3>
                            <p className="text-xs text-gray-500 mt-0.5">
                              {item.tagline}
                            </p>
                          </div>
                        </div>

                        <div className="border-t border-gray-100 pt-3 mt-2">
                          <p className="text-xs font-semibold text-gray-700 mb-2">
                            What's included:
                          </p>
                          <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                            {item.features.slice(0, 6).map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-1.5 text-xs text-gray-600"
                              >
                                <span className="text-green-500 text-xs">✓</span>
                                <span className="truncate">{feature.name}</span>
                              </div>
                            ))}
                          </div>
                          {item.features.length > 6 && (
                            <div className="mt-2">
                              <span className="text-xs text-blue-500 font-medium">
                                + {item.features.length - 6} more features
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="mt-3 flex items-center text-blue-600 text-xs font-medium group-hover:translate-x-1 transition-transform">
                          Learn more
                          <FiArrowRight className="ml-1 w-3 h-3" />
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/industries" className="hover:text-white transition-colors">
            Industries
          </Link>
          <Link to="/portfolio" className="hover:text-white transition-colors">
            Portfolio
          </Link>
          <Link to="/about-us" className="hover:text-white transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <button className="hidden lg:block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2.5 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-sm">
          Partner with us
        </button>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU - Enhanced */}
      {menuOpen && (
        <div className="lg:hidden fixed top-20 left-0 right-0 bottom-0 bg-slate-900 z-40 overflow-y-auto animate-slideDown">
          <div className="px-5 py-6 space-y-5">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-white block py-2 text-lg font-medium hover:text-blue-400 transition-colors"
            >
              Home
            </Link>

            {/* Services - Mobile */}
            <div>
              <button
                onClick={() => setServiceOpen(!serviceOpen)}
                className="flex justify-between items-center w-full text-white py-2 text-lg font-medium"
              >
                Services
                <FiChevronDown
                  className={`transition-transform duration-300 ${serviceOpen ? "rotate-180" : ""}`}
                />
              </button>

              {serviceOpen && (
                <div className="space-y-2 mt-2 pl-4 border-l-2 border-blue-500">
                  {services.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 text-gray-300 text-sm py-2 hover:text-white transition-colors"
                    >
                      <div
                        className={`w-8 h-8 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center text-white`}
                      >
                        {item.icon}
                      </div>
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions - Mobile */}
            <div>
              <button
                onClick={() => setSolutionOpen(!solutionOpen)}
                className="flex justify-between items-center w-full text-white py-2 text-lg font-medium"
              >
                Solutions
                <FiChevronDown
                  className={`transition-transform duration-300 ${solutionOpen ? "rotate-180" : ""}`}
                />
              </button>

              {solutionOpen && (
                <div className="space-y-2 mt-2 pl-4 border-l-2 border-purple-500">
                  {solutions.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 text-gray-300 text-sm py-2 hover:text-white transition-colors"
                    >
                      <div
                        className={`w-8 h-8 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center text-white`}
                      >
                        {item.icon}
                      </div>
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* SaaS Solutions - Mobile */}
            <div>
              <button
                onClick={() => setSaasOpen(!saasOpen)}
                className="flex justify-between items-center w-full text-white py-2 text-lg font-medium"
              >
                SaaS Solutions
                <FiChevronDown
                  className={`transition-transform duration-300 ${saasOpen ? "rotate-180" : ""}`}
                />
              </button>

              {saasOpen && (
                <div className="space-y-4 mt-2 pl-4">
                  {saasSolutions.map((item, index) => (
                    <div key={index} className="bg-slate-800 rounded-xl p-4">
                      <Link
                        to={item.path}
                        onClick={() => setMenuOpen(false)}
                        className="block"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className={`w-10 h-10 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center text-white`}
                          >
                            {item.icon}
                          </div>
                          <h3 className="font-semibold text-white text-sm">
                            {item.name}
                          </h3>
                        </div>
                        <p className="text-xs text-gray-400 mb-3">
                          {item.tagline}
                        </p>
                        <div className="border-t border-slate-700 pt-3">
                          <p className="text-xs font-semibold text-gray-400 mb-2">
                            What's included:
                          </p>
                          <div className="grid grid-cols-1 gap-1.5">
                            {item.features.slice(0, 5).map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-1.5 text-xs text-gray-400"
                              >
                                <span className="text-green-500">✓</span>
                                <span>{feature.name}</span>
                              </div>
                            ))}
                            {item.features.length > 5 && (
                              <div className="mt-1">
                                <span className="text-xs text-blue-400">
                                  + {item.features.length - 5} more features
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/industries"
              onClick={() => setMenuOpen(false)}
              className="text-white block py-2 text-lg font-medium hover:text-blue-400 transition-colors"
            >
              Industries
            </Link>
            <Link
              to="/portfolio"
              onClick={() => setMenuOpen(false)}
              className="text-white block py-2 text-lg font-medium hover:text-blue-400 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              to="/about-us"
              onClick={() => setMenuOpen(false)}
              className="text-white block py-2 text-lg font-medium hover:text-blue-400 transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-white block py-2 text-lg font-medium hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>

            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold mt-4 hover:scale-105 transition-all duration-300 shadow-lg">
              Partner with us
            </button>
          </div>
        </div>
      )}

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Header;