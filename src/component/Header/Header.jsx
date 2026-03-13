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
      path: "/services",
    },
    {
      name: "Custom Software Development",
      icon: <FiCode />,
      color: "from-blue-500 to-purple-500",
      path: "/services",
    },
    {
      name: "ERP & CRM Solutions",
      icon: <FiUsers />,
      color: "from-purple-500 to-pink-500",
      path: "/services",
    },
    {
      name: "API Development & Integration",
      icon: <FiLink />,
      color: "from-pink-500 to-orange-500",
      path: "/services",
    },
    {
      name: "Maintenance and Support",
      icon: <FiTool />,
      color: "from-orange-500 to-red-500",
      path: "/services",
    },
    {
      name: "Software Development Outsourcing",
      icon: <FiServer />,
      color: "from-indigo-500 to-purple-500",
      path: "/services",
    },
    {
      name: "Desktop App Development",
      icon: <FiCpu />,
      color: "from-green-500 to-teal-500",
      path: "/services",
    },
  ];

  const solutions = [
    {
      name: "Accounting Software",
      icon: <FiPieChart />,
      color: "from-blue-500 to-indigo-600",
      path: "/solutions",
    },
    {
      name: "Restaurant POS Software",
      icon: <FiCoffee />,
      color: "from-orange-500 to-red-500",
      path: "/solutions",
    },
    {
      name: "Inventory Management",
      icon: <FiPackage />,
      color: "from-purple-500 to-pink-500",
      path: "/solutions",
    },
    {
      name: "Fleet Management",
      icon: <FiTruck />,
      color: "from-green-500 to-teal-500",
      path: "/solutions",
    },
    {
      name: "Warehouse Management",
      icon: <FiHome />,
      color: "from-indigo-500 to-purple-500",
      path: "/solutions",
    },
    {
      name: "HR Management",
      icon: <FiUsers />,
      color: "from-pink-500 to-rose-500",
      path: "/solutions",
    },
    {
      name: "Finance Management",
      icon: <FiDollarSign />,
      color: "from-yellow-500 to-orange-500",
      path: "/solutions",
    },
    {
      name: "School Management Software",
      icon: <FiBook />,
      color: "from-cyan-500 to-blue-500",
      path: "/solutions",
    },
    {
      name: "Lead Management",
      icon: <FiTarget />,
      color: "from-pink-500 to-red-500",
      path: "/solutions",
    },
    {
      name: "Operations Management",
      icon: <FiSettings />,
      color: "from-gray-600 to-gray-800",
      path: "/solutions",
    },
    {
      name: "Kiosk Software",
      icon: <FiMonitor />,
      color: "from-blue-500 to-purple-500",
      path: "/solutions",
    },
    {
      name: "Payment Software",
      icon: <FiCreditCard />,
      color: "from-green-500 to-emerald-600",
      path: "/solutions",
    },
  ];

  return (
    <header ref={headerRef} className="w-full absolute top-0 left-0 z-50 bg-black">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO */}

        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
            TS
          </div>

          <h1 className="text-white text-xl font-bold">
            Tech<span className="text-blue-400">Synergia</span>
          </h1>
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

          <Link to="/industries" onClick={closeAllMenus} className="text-white block">
            Industries
          </Link> 
          <Link to="/portfolio" onClick={closeAllMenus} className="text-white block">
            Portfolio
          </Link>
          <Link to="/about-us" onClick={closeAllMenus} className="text-white block">
            About Us
          </Link>
          <Link to="/contact" onClick={closeAllMenus} className="text-white block">
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
