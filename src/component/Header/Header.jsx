import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Solutions", path: "/solutions" },
    { name: "Industries", path: "/industries" },
    { name: "Insights", path: "/insights" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full absolute top-0 left-0 z-50">

      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
            TS
          </div>

          <h1 className="text-white text-lg sm:text-xl font-bold">
            Tech<span className="text-blue-400">Synergia</span>
          </h1>

        </Link>


        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">

          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="relative text-gray-300 hover:text-white font-medium transition duration-300 group"
            >
              {link.name}

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

        </nav>


        {/* CTA Button */}
        <div className="hidden lg:block">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition duration-300">
            Get Started
          </button>
        </div>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white"
        >

          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}

        </button>

      </div>


      {/* Mobile / Tablet Menu */}
      {menuOpen && (

        <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-gray-700">

          <nav className="flex flex-col gap-4 px-6 py-6">

            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-gray-300 hover:text-white text-lg transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <button className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition">
              Get Started
            </button>

          </nav>

        </div>

      )}

    </header>
  );
};

export default Header;