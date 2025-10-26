import React from "react";
import ChatLogo from "../../assets/chatLogo.png";
const TopHeader = () => {
  return (
    <section className="bg-black">
      <div className="section-container mx-auto py-5  flex flex-col">
        <img
          src={ChatLogo}
          alt="chat Logo"
          className="w-full md:w-[200px] h-[100px] object-contain mx-auto"
        />
        <h2 className="text-4xl md:text-[64px] font-bold text-white text-center mt-">
          Power your Business with
          <br /> seamless communication
        </h2>
      </div>
    </section>
  );
};

export default TopHeader;
