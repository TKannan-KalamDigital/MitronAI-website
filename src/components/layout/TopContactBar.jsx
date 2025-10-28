import React from "react";
import { FaEnvelope, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const TopContactBar = () => {
  return (
    <div
      className="hidden md:block font-raleway text-xs bg-[#2f2217] text-[#7588A1]
 py-1"
    >
      <div className="md:mr-2 flex flex-col md:flex-row justify-center md:justify-end items-center gap-2">
        {/* Email */}
        <a
          href="mailto:hello@kalamdigital.com"
          className="flex items-center gap-2 hover:text-text-gray-700 transition duration-200"
        >
          <FaEnvelope />
          hello@kalamdigital.com
        </a>

        <span className="hidden md:block">|</span>

        {/* WhatsApp */}
        <a
          href="https://wa.me/7830365247"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-text-gray-700 transition duration-200"
        >
          <FaWhatsapp />
          +91-78303 65247
        </a>

        <span className=" hidden md:block">|</span>

        {/* Phone */}
        <a href="tel:+91-7358310221" className="flex items-center gap-2">
          <FaPhoneAlt />
          +91-7358310221
        </a>
      </div>
    </div>
  );
};

export default TopContactBar;
