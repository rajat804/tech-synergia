import React from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaUsers, FaProjectDiagram, FaGlobe } from "react-icons/fa";

const ClientsSection = () => {

  const clients = [
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
    },
    {
      name: "PayPal",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
    },
    {
      name: "Samsung",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"
    },
    {
      name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
    },
    {
      name: "Visa",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
    },
    {
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100 relative overflow-hidden">

      {/* Background blur circles */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-purple-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Heading */}
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}
          className="text-center mb-20"
        >

          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full text-white text-2xl shadow-lg">
              <FaHandshake/>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Trusted By Amazing Clients
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We proudly collaborate with innovative companies worldwide delivering
            modern technology solutions that drive real business growth.
          </p>

        </motion.div>



        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {clients.map((client,index)=>(
            
            <motion.div
              key={index}
              whileHover={{ scale:1.1, y:-8 }}
              className="group bg-white border border-gray-200 rounded-2xl p-10 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center relative overflow-hidden"
            >

              {/* hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition"></div>

              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 object-contain grayscale group-hover:grayscale-0 transition duration-300 relative z-10"
              />

            </motion.div>

          ))}

        </div>


        {/* CTA */}
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ delay:0.3 }}
          className="text-center mt-24"
        >

          <p className="text-gray-600 mb-8 text-lg">
            Join hundreds of companies that trust us with their technology.
          </p>

          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition">
            Become Our Client
          </button>

        </motion.div>

      </div>

    </section>
  );
};

export default ClientsSection;