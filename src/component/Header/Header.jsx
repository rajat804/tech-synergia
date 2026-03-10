import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  FiUserCheck,
  FiTarget,
  FiSettings,
  FiCreditCard,
  FiLink,
  FiTool,
  FiServer,
  FiCpu,
  FiChevronDown,
  FiMenu,
  FiX
} from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [solutionOpen, setSolutionOpen] = useState(false);

  const services = [
    { name: "Website Development", icon: <FiMonitor />, path: "/services" },
    {
      name: "Mobile App Development",
      icon: <FiSmartphone />,
      path: "/services",
    },
    {
      name: "Ecommerce Development",
      icon: <FiShoppingCart />,
      path: "/services",
    },
    {
      name: "Custom Software Development",
      icon: <FiCode />,
      path: "/services",
    },
    { name: "ERP & CRM Solutions", icon: <FiUsers />, path: "/services" },
    {
      name: "API Development & Integration",
      icon: <FiLink />,
      path: "/services",
    },
    { name: "Maintenance and Support", icon: <FiTool />, path: "/services" },
    {
      name: "Software Development Outsourcing",
      icon: <FiServer />,
      path: "/services",
    },
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
    {
      name: "School Management Software",
      icon: <FiBook />,
      path: "/solutions",
    },
    { name: "Vendor Management", icon: <FiUserCheck />, path: "/solutions" },
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

          {/* Services */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-white">
              Services <FiChevronDown size={16} />
            </button>

            <div className="absolute left-0 top-8 w-80 bg-white shadow-xl rounded-xl p-6 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition">
              <div className="grid grid-cols-1 gap-4">
                {services.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
                  >
                    <span className="text-blue-600 text-xl">{item.icon}</span>
                    <span className="text-gray-700">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-white">
              Solutions <FiChevronDown size={16} />
            </button>

            <div className="absolute left-0 top-8 w-80 bg-white shadow-xl rounded-xl p-6 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition">
              <div className="grid grid-cols-1 gap-4">
                {solutions.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
                  >
                    <span className="text-purple-600 text-xl">{item.icon}</span>
                    <span className="text-gray-700">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
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

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
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
              Services <FiChevronDown />
            </button>

            {serviceOpen && (
              <div className="mt-3 space-y-2">
                {services.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    {item.icon} {item.name}
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
              Solutions <FiChevronDown />
            </button>

            {solutionOpen && (
              <div className="mt-3 space-y-2">
                {solutions.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    {item.icon} {item.name}
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
