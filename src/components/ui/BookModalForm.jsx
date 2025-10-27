import React, { useRef, useEffect } from "react";

const BookModalForm = ({ isOpen, onClose }) => {
  const modalRef = useRef();

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed  inset-0 bg-black/60 z-50 flex items-center justify-center">
      <div
        ref={modalRef}
        className="bg-white w-full max-w-md rounded-lg shadow-lg p-6"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Book a Demo</h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Company Name"
            className="border rounded p-2 focus:outline-none focus:ring focus:ring-teal-300"
          />
          <input
            type="text"
            placeholder="Your Name"
            className="border rounded p-2 focus:outline-none focus:ring focus:ring-teal-300"
          />
          <input
            type="tel"
            placeholder="Contact Number"
            className="border rounded p-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <select className="border rounded p-2 focus:outline-none focus:ring focus:ring-blue-300">
            <option value="">Select Company Size</option>
            <option value="1-10">1–10 employees</option>
            <option value="11-50">11–50 employees</option>
            <option value="51-200">51–200 employees</option>
            <option value="200+">200+ employees</option>
          </select>
          <select className="border rounded p-2 focus:outline-none focus:ring focus:ring-blue-300">
            <option value="">How did you hear about us?</option>
            <option value="Google">Google</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Email">Email Campaign</option>
            <option value="Referral">Referral</option>
            <option value="Other">Other</option>
          </select>

          <button
            type="submit"
            className="bg-[#3ce2ae] text-white py-2 cursor-pointer rounded hover:bg-[#189970] transition"
          >
            Submit
          </button>
        </form>

        <button
          onClick={onClose}
          className="mt-4 text-gray-500 hover:text-gray-700 text-sm w-full text-center cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BookModalForm;
