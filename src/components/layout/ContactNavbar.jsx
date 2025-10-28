import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ContactNavbar = () => {
  return (
    <div className="fixed bottom-45 sm:bottom-12 sm:right-7 right-18 z-50">
      <a
        href="https://wa.me/7830365247"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#4d9586] p-2 rounded-full shadow-lg hover:bg-[#28917c] transition duration-200 flex items-center justify-center"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl text-white" />
      </a>
    </div>
  );
};

export default ContactNavbar;
