import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
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
} from "react-icons/fi";
import Logo from "../../assets/1-removebg.png";
const Header = () => {
  const location = useLocation();

  const headerRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [solutionOpen, setSolutionOpen] = useState(false);

  const closeAllMenus = () => {
    setMenuOpen(false);
    setServiceOpen(false);
    setSolutionOpen(false);
  };

  useEffect(() => {
    closeAllMenus();
  }, [location]);

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

  return (
    <header
      ref={headerRef}
      className="w-full sticky top-0 left-0 z-50 bg-black h-20 flex items-center"
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 w-full">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 w-50">
          <img
            src={Logo}
            alt="TechSynergia Logo"
            className="h-55 w-full"
          />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-8 text-gray-300">
          <Link to="/" className="hover:text-white">
            Home
          </Link>

          {/* SERVICES */}

          <div className="relative">
            <button
              onClick={() => {
                setServiceOpen(!serviceOpen);
                setSolutionOpen(false);
              }}
              className="flex items-center gap-1 hover:text-white"
            >
              Services
              <FiChevronDown
                className={`transition ${serviceOpen ? "rotate-180" : ""}`}
              />
            </button>

            {serviceOpen && (
              <div className="absolute left-0 top-10 w-[520px] bg-white shadow-2xl rounded-xl p-6 animate-fadeIn">
                <div className="grid grid-cols-2 gap-3">
                  {services.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={closeAllMenus}
                      className="group flex items-center justify-between p-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-black transition-all duration-200 hover:shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center text-white`}
                        >
                          {item.icon}
                        </div>

                        <span className="text-[13px] text-gray-700 ">
                          {item.name}
                        </span>
                      </div>

                      <FiArrowRight className="opacity-0 group-hover:opacity-100 transition text-black" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* SOLUTIONS */}

          <div className="relative">
            <button
              onClick={() => {
                setSolutionOpen(!solutionOpen);
                setServiceOpen(false);
              }}
              className="flex items-center gap-1 hover:text-white"
            >
              Solutions
              <FiChevronDown
                className={`transition ${solutionOpen ? "rotate-180" : ""}`}
              />
            </button>

            {solutionOpen && (
              <div className="absolute left-0 top-10 w-[520px] bg-white shadow-2xl rounded-xl p-6">
                <div className="grid grid-cols-2 gap-3">
                  {solutions.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={closeAllMenus}
                      className="group flex items-center justify-between p-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-black transition-all duration-200 hover:shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center text-white`}
                        >
                          {item.icon}
                        </div>

                        <span className="text-[13px] text-gray-700">
                          {item.name}
                        </span>
                      </div>

                      <FiArrowRight className="opacity-0 group-hover:opacity-100 text-black" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/industries">Industries</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* CTA */}

        <button className="hidden lg:block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:scale-105 transition">
          Partner with us
        </button>

        {/* MOBILE MENU BUTTON */}

        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}

      {menuOpen && (
        <div className="lg:hidden bg-slate-900 px-6 py-6 space-y-6 max-h-[80vh] overflow-y-auto">
          <Link to="/" onClick={closeAllMenus} className="text-white block">
            Home
          </Link>

          <button
            onClick={() => setServiceOpen(!serviceOpen)}
            className="flex justify-between w-full text-white"
          >
            Services
            <FiChevronDown className={`${serviceOpen ? "rotate-180" : ""}`} />
          </button>

          {serviceOpen && (
            <div className="space-y-3">
              {services.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={closeAllMenus}
                  className="flex items-center gap-3 text-gray-300 text-sm"
                >
                  <div
                    className={`w-8 h-8 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center text-white`}
                  >
                    {item.icon}
                  </div>

                  {item.name}
                </Link>
              ))}
            </div>
          )}

          <button
            onClick={() => setSolutionOpen(!solutionOpen)}
            className="flex justify-between w-full text-white"
          >
            Solutions
            <FiChevronDown className={`${solutionOpen ? "rotate-180" : ""}`} />
          </button>

          {solutionOpen && (
            <div className="space-y-3">
              {solutions.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={closeAllMenus}
                  className="flex items-center gap-3 text-gray-300 text-sm"
                >
                  <div
                    className={`w-8 h-8 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center text-white`}
                  >
                    {item.icon}
                  </div>

                  {item.name}
                </Link>
              ))}
            </div>
          )}

          <Link
            to="/industries"
            onClick={closeAllMenus}
            className="text-white block"
          >
            Industries
          </Link>
          <Link
            to="/portfolio"
            onClick={closeAllMenus}
            className="text-white block"
          >
            Portfolio
          </Link>
          <Link
            to="/about-us"
            onClick={closeAllMenus}
            className="text-white block"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            onClick={closeAllMenus}
            className="text-white block"
          >
            Contact
          </Link>

          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg">
            Partner with us
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
