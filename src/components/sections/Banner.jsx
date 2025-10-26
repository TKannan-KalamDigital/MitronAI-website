import React from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import chatbox from "../../assets/ChatBox.png";
import MissionImg from "../../assets/Mission.jpg";
const Banner = () => {
  const features = [
    "Communication",
    "Automation",
    "Customer Experience",
    "Promotion campaigns",
    "Social media engagement",
  ];
  const cards = [
    {
      text: "By leveraging AI-driven automation, we enable brands to streamline customer support, boost engagement, and drive conversions through WhatsApp and other social channels.",
    },
    {
      text: "From intelligent chatbots that deliver 24/7 assistance to interactive campaigns that spark conversations, we empower businesses to build lasting relationships with their customers",
    },
    {
      text: "At our core, we combine innovation, scalability, and simplicity into advanced AI technology accessible and impactful for businesses of all sizes.",
    },
    {
      text: "Whether you want to enhance customer experiences, generate leads, maximize ROI from social media, we are your trusted partner in digital engagement",
    },
  ];
  return (
    <div className="relative xl:mb-60 lg:mb-60 mb-120 md:mb-120">
      <div
        className="min-h-screen relative overflow-hidden"
        style={{
          background:
            "linear-gradient(107.17deg, rgba(29, 180, 222, 0.5) 0.26%, rgba(137, 234, 67, 0.5) 32.21%, rgba(241, 245, 46, 0.5) 66.07%, rgba(221, 10, 13, 0.5) 99.45%)",
        }}
      >
        {/* Main Content */}
        <div className="section-container mx-auto py-12 md:py-20 relative z-10  mb-30 md:mb-0 xl:mb-20 lg:mb-60">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16 md:mb-24 ">
            {/* Left Content */}
            <div className="space-y-8">
              <h1
                className="text-3xl md:text-5xl font-bold leading-snug"
                data-aos="fade-up"
              >
                A next-generation AI product specializing in
              </h1>
              <div className="space-y-4 ps-10 md:ps-20">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-6 h-6 border-2 border-black flex items-center justify-center shrink-0">
                      <IoCheckmarkOutline className="w-4 h-4" strokeWidth={3} />
                    </div>
                    <span className="text-lg md:text-2xl">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Right Content - Chat Interface Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={chatbox}
                alt="Chat Interface"
                className="w-full max-w-md lg:max-w-lg rounded-lg shadow-2xl"
                data-aos="fade-up-left"
              />
            </div>
          </div>
          {/* Feature Cards Section */}
          <div className="mb-16 md:mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-gray-300 rounded-full mb-4" />
                  <p className="text-sm md:text-base leading-relaxed">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Mission Section */}
      <div className="bg-[#E2E8F0] overflow-hidden section-container md:w-3/5 mx-auto absolute lg:-bottom-40 -bottom-100 left-1/2 transform -translate-x-1/2 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Mission Content */}
          <div className="p-8 md:p-6 lg:p-10 flex flex-col justify-center">
            <h2 className="text-lg md:text-2xl font-bold mb-3">OUR MISSION</h2>
            <p className="text-lg md:text-2xl leading-8">
              Our mission is to help businesses to connect with their customers
              in smarter, faster, and more personalized ways.
            </p>
          </div>
          {/* Mission Image */}
          <div className="h-64 lg:h-auto">
            <img
              src={MissionImg}
              alt="Team Celebration"
              className="w-full h-full object-cover"
              data-aos="fade-left"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
