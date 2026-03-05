import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="bg-black text-white text-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
        
        {/* Left */}
        <div>
          <p>Welcome to our website</p>
        </div>

        {/* Right */}
        <div className="flex gap-4 text-lg">
          <FaFacebookF className="cursor-pointer hover:text-blue-500 transition" />
          <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
          <FaTwitter className="cursor-pointer hover:text-sky-400 transition" />
        </div>

      </div>
    </div>
  );
};

export default Topbar;