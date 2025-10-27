import React from "react";
import aiImage from "../../assets/whyAI.jpg"; // replace with your image path

const features = [
  {
    title: "24/7 Availability",
    desc: "Automated chatbots ensure customers receive quick support anytime, without waiting for working hours.",
  },
  {
    title: "Consistency Across Channels",
    desc: "Automated chatbots ensure customers receive quick support anytime, without waiting for working hours.",
  },
  {
    title: "Scalability",
    desc: "Automation allows businesses to handle thousands of conversations simultaneously, something human teams alone cannot achieve.",
  },
  {
    title: "Higher ROI",
    desc: "Targeted engagement through social campaigns increases conversions, customer loyalty, and overall revenue.",
  },
  {
    title: "Personalized Engagement",
    desc: "AI-driven campaigns deliver tailored messages based on customer behavior, preferences, and interactions.",
  },
  {
    title: "Data–Driven Insights",
    desc: "Every interaction provides valuable insights that help businesses refine strategies and improve customer experience.",
  },
];

const WhyMitran = () => {
  return (
    <section className="bg-white py-10 md:py-20">
      <div className="section-container mx-auto">
        {/* Heading and description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-start mb-12">
          <div className="pr-0 md:pr-20">
            <h1 className="text-left py-5 text-4xl md:text-7xl">
              <span className="font-bold text-4xl lg:text-7xl">Why</span> Mitron
              AI
            </h1>
            <p className="mt-5 text-black text-xl md:text-2xl">
              In today’s fast-paced digital world, customers expect instant
              responses and personalized interactions. Businesses that fail to
              keep up risk losing opportunities and customer trust. This is
              where communication automation and social engagement become
              critical.
            </p>
          </div>

          <div className="flex justify-center md:justify-start w-full">
            <img
              data-aos="zoom-in"
              src={aiImage}
              alt="AI Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* ✅ Feature Flex Grid - always 2 columns */}
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-10 md:px-10 px-0 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start space-y-1 text-left w-full sm:w-[40%] md:w-[25%]"
            >
              <div className="w-20 h-20 bg-gray-200 rounded-full" />
              <h3 className="text-lg md:text-[24px] font-semibold text-black">
                {feature.title}
              </h3>
              <p className="text-base md:text-[16px] text-black">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMitran;
