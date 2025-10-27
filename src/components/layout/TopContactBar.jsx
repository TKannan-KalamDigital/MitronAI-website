import React from "react";
import { FaEnvelope, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const TopContactBar = () => {
  return (
    <div className="bg-white text-black text-sm py-2.5">
      <div className="section-container mx-auto flex flex-col md:flex-row justify-center md:justify-end items-center gap-4">
        {/* Email */}
        <a
          href="mailto:mitron@kalamdigital.com"
          className="flex items-center gap-2 hover:text-text-gray-700 transition duration-200"
        >
          <FaEnvelope className="text-blue-400" />
          mitron@kalamdigital.com
        </a>

        <span className="text-gray-500 hidden md:block">|</span>

        {/* WhatsApp */}
        <a
          href="https://wa.me/7830365247"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-text-gray-700 transition duration-200"
        >
          <FaWhatsapp className="text-green-500" />
          +91-78303 65247
        </a>

        <span className="text-gray-500 hidden md:block">|</span>

        {/* Phone */}
        <a
          href="tel:+91-7358310221"
          className="flex items-center gap-2 hover:text-gray-700 transition duration-200"
        >
          <FaPhoneAlt className="text-gray-400" />
          +91-7358310221
        </a>
      </div>
    </div>
  );
};

export default TopContactBar;
