import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiMessageCircle,
  FiPhone,
  FiMail,
  FiX
} from "react-icons/fi";

import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

const FloatingContact = () => {

  const [open, setOpen] = useState(false);

  const contacts = [
    {
      icon: <FaWhatsapp />,
      color: "bg-green-500",
      link: "https://wa.me/919999999999"
    },
    {
      icon: <FiPhone />,
      color: "bg-blue-500",
      link: "tel:+919999999999"
    },
    {
      icon: <FiMail />,
      color: "bg-red-500",
      link: "mailto:hello@gmail.com"
    },
    {
      icon: <FaTelegramPlane />,
      color: "bg-sky-500",
      link: "https://t.me/"
    }
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">

      {/* Contact Options */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:20 }}
            className="flex flex-col gap-3 mb-2"
          >

            {contacts.map((item, index) => (
              
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale:1.1 }}
                whileTap={{ scale:0.9 }}
                className={`${item.color} text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg text-xl`}
              >
                {item.icon}
              </motion.a>

            ))}

          </motion.div>
        )}
      </AnimatePresence>


      {/* Main Button */}

      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale:1.1 }}
        whileTap={{ scale:0.9 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl text-2xl"
      >
        {open ? <FiX /> : <FiMessageCircle />}
      </motion.button>

    </div>
  );
};

export default FloatingContact;