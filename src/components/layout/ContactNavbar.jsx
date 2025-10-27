import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ContactNavbar = () => {
  return (
    <div className="fixed bottom-12 right-6 z-50">
      <a
        href="https://wa.me/7830365247"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-200 flex items-center justify-center"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </div>
  );
};

export default ContactNavbar;
