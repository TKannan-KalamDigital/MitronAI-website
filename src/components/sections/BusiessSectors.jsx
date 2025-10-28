import React from "react";
import businessBg from "../../assets/BusinessSectors.jpg"; // replace with your image path

const BusinessSectors = () => {
  const features = [
    {
      title: "Government",
      description:
        "Our solutions for government buildings and public spaces help streamline information dissemination, improve public engagement, and create a more connected community.",
    },
    {
      title: "Corporates",
      description:
        "In the dynamic world of corporate delivering high-quality visuals and engaging content is essential for capturing audience attention and maintaining viewer engagement.",
    },
    {
      title: "Health Care",
      description:
        "Our solutions for healthcare settings enable you to deliver important messages, streamline operations, and create calming environments that contribute to better patient outcomes",
    },
    {
      title: "Education",
      description:
        "Our educational solutions empower institutions to enhance learning experiences, facilitate communication, and create interactive environments that foster student engagement and success.",
    },
    {
      title: "Entertainment",
      description:
        " Our solutions for entertainment environments enable you to create stunning backdrops, deliver live event coverage, and engage audiences with dynamic visuals that enhance the overall entertainment experience.",
    },
    {
      title: "Transportation",
      description:
        "The use of our solution to provide real-time information, advertising, and other relevant content in various transportation environments such as airports, train stations, bus stops.",
    },
    {
      title: "Financial",
      description:
        "Our solutions for banks and financial institutions offer dynamic ways to display financial data, promotional content, and important announcements, enhancing the overall banking experience",
    },
    {
      title: "Retail",
      description:
        "Our solutions for retail environments are designed to captivate audiences, showcase products, and create immersive brand experiences that leave a lasting impression.",
    },
    {
      title: "Hospitality",
      description:
        "Our solutions for hotels, resorts, restaurants, and event venues enable you to enhance ambiance ,promote services, and engage guests with captivating visual content that sets your establishment apart.",
    },
  ];
  return (
    <section className="relative bg-[#D9D9D999]" id="sectors">
      {/* Background image */}
      <div className="relative">
        <img
          src={businessBg}
          alt="Business sectors background"
          className="w-full h-[200px] md:h-[500px] object-cover"
        />

        {/* Overlay text */}
        <div className="absolute bottom-0 left-0 w-full text-center bg-black/10 ">
          <h2 className="text-4xl lg:text-7xl font-extrabold text-black bg-[#D9D9D999] py-6">
            Business Sectors
          </h2>
        </div>
      </div>

      {/* Description section */}
      <div className="section-container mx-auto  py-10 px-3 md:px-8 text-center">
        <p
          className="w-full md:w-3/4 mx-auto text-black text-base md:text-xl text-left leading-relaxed"
          data-aos="fade-up"
        >
          AI-powered virtual assistant designed to automate and streamline
          communication, improve customer engagement. Built with natural
          language understanding, it can handle queries, provide instant
          responses, and guide users through services or processes with ease.
        </p>
      </div>

      <div className="section-container mx-auto py-10 md:py-20">
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-10 md:px-10 px-0 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start space-y-1 text-left w-full sm:w-[40%] md:w-[25%]"
            >
              <div className="w-20 h-20 bg-[#D9D9D9] rounded-full" />
              <h3 className="text-lg md:text-[24px] font-semibold text-black">
                {feature.title}
              </h3>
              <p className="text-base md:text-[16px] text-black">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSectors;
