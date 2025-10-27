import React from "react";
import BannerVideo from "../../assets/video/Banner.mp4";
const VideoBanner = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full  h-screen  object-cover"
        src={BannerVideo}
        autoPlay
        muted
        loop
      ></video>

      {/* Black Transparent Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Center Content */}
      <div
        className="relative z-10 flex items-center justify-center h-full"
        data-aos="fade-down"
      >
        <h1 className="text-white text-2xl md:text-6xl font-bold text-center px-4 uppercase md:leading-20">
          Power your Business with <br /> seamless communication
        </h1>
      </div>
    </section>
  );
};

export default VideoBanner;
