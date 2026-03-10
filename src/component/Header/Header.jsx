import React, { useState, useEffect } from "react";
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

  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [solutionOpen, setSolutionOpen] = useState(false);

  // Route change hone par dropdown close
  useEffect(() => {
    setServiceOpen(false);
    setSolutionOpen(false);
    setMenuOpen(false);
  }, [location]);

  const services = [
    { name: "Website Development", icon: <FiMonitor />, path: "/services" },
    { name: "Mobile App Development", icon: <FiSmartphone />, path: "/services" },
    { name: "Ecommerce Development", icon: <FiShoppingCart />, path: "/services" },
    { name: "Custom Software Development", icon: <FiCode />, path: "/services" },
    { name: "ERP & CRM Solutions", icon: <FiUsers />, path: "/services" },
    { name: "API Development & Integration", icon: <FiLink />, path: "/services" },
    { name: "Maintenance and Support", icon: <FiTool />, path: "/services" },
    { name: "Software Development Outsourcing", icon: <FiServer />, path: "/services" },
    { name: "Desktop App Development", icon: <FiCpu />, path: "/services" },
  ];

  const solutions = [
    { name: "Accounting Software", icon: <FiPieChart />, path: "/solutions" },
    { name: "Restaurant POS Software", icon: <FiCoffee />, path: "/solutions" },
    { name: "Inventory Management", icon: <FiPackage />, path: "/solutions" },
    { name: "Fleet Management", icon: <FiTruck />, path: "/solutions" },
    { name: "Warehouse Management", icon: <FiHome />, path: "/solutions" },
    { name: "HR Management", icon: <FiUsers />, path: "/solutions" },
    { name: "Finance Management", icon: <FiDollarSign />, path: "/solutions" },
    { name: "School Management Software", icon: <FiBook />, path: "/solutions" },
    { name: "Lead Management", icon: <FiTarget />, path: "/solutions" },
    { name: "Operations Management", icon: <FiSettings />, path: "/solutions" },
    { name: "Kiosk Software", icon: <FiMonitor />, path: "/solutions" },
    { name: "Payment Software", icon: <FiCreditCard />, path: "/solutions" },
  ];

  return (
    <header className="w-full absolute top-0 left-0 z-50">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
            TS
          </div>
          <h1 className="text-white text-xl font-bold">
            Tech<span className="text-blue-400">Synergia</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 text-gray-300">

          <Link to="/" className="hover:text-white transition">
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
                className={`transition-transform duration-300 ${
                  serviceOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {serviceOpen && (
              <div className="absolute left-0 top-10 w-[520px] bg-white shadow-xl rounded-xl p-6">
                <div className="grid grid-cols-2 gap-3">

                  {services.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="group flex items-center justify-between p-2.5 rounded-lg hover:bg-gray-100 transition"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-blue-600 text-base">{item.icon}</span>

                        <span className="text-[13px] leading-tight text-gray-700 font-medium">
                          {item.name}
                        </span>
                      </div>

                      <FiArrowRight className="opacity-0 group-hover:opacity-100 transition text-gray-500" />
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
                className={`transition-transform duration-300 ${
                  solutionOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {solutionOpen && (
              <div className="absolute left-0 top-10 w-[520px] bg-white shadow-xl rounded-xl p-6">
                <div className="grid grid-cols-2 gap-3">

                  {solutions.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="group flex items-center justify-between p-2.5 rounded-lg hover:bg-gray-100 transition"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-purple-600 text-base">{item.icon}</span>

                        <span className="text-[13px] leading-tight text-gray-700 font-medium">
                          {item.name}
                        </span>
                      </div>

                      <FiArrowRight className="opacity-0 group-hover:opacity-100 transition text-gray-500" />
                    </Link>
                  ))}

                </div>
              </div>
            )}
          </div>

          <Link to="/industries" className="hover:text-white transition">
            Industries
          </Link>

          <Link to="/portfolio" className="hover:text-white transition">
            Portfolio
          </Link>

          <Link to="/contact" className="hover:text-white transition">
            Contact
          </Link>

        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:scale-105 transition">
            Partner with us
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-slate-900 px-6 py-6 space-y-6">

          <Link to="/" className="block text-white">
            Home
          </Link>

          {/* Mobile Services */}
          <div>
            <button
              onClick={() => setServiceOpen(!serviceOpen)}
              className="flex justify-between w-full text-white"
            >
              Services
              <FiChevronDown
                className={`transition-transform ${
                  serviceOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {serviceOpen && (
              <div className="mt-3 space-y-2">
                {services.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="flex items-center gap-2 text-gray-300 text-sm"
                  >
                    <span className="text-blue-400">{item.icon}</span>
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Solutions */}
          <div>
            <button
              onClick={() => setSolutionOpen(!solutionOpen)}
              className="flex justify-between w-full text-white"
            >
              Solutions
              <FiChevronDown
                className={`transition-transform ${
                  solutionOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {solutionOpen && (
              <div className="mt-3 space-y-2">
                {solutions.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="flex items-center gap-2 text-gray-300 text-sm"
                  >
                    <span className="text-purple-400">{item.icon}</span>
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/industries" className="block text-white">
            Industries
          </Link>

          <Link to="/portfolio" className="block text-white">
            Portfolio
          </Link>

          <Link to="/contact" className="block text-white">
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