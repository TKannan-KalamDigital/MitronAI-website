import { useState } from "react";
import { FaRegCheckSquare } from "react-icons/fa";
import logo from "../../assets/PModules.png";
import logoTwo from "../../assets/modules.jpg";

const tabs = [
  { id: "agent", label: "AGENT", color: "bg-lime-500", text: "text-lime-500" },
  {
    id: "flow",
    label: "FLOW",
    color: "bg-orange-400",
    text: "text-orange-400",
  },
  { id: "bot", label: "BOT", color: "bg-sky-400", text: "text-sky-400" },
  { id: "pilot", label: "PILOT", color: "bg-pink-500", text: "text-pink-500" },
  {
    id: "bulk",
    label: "BULK",
    color: "bg-purple-500",
    text: "text-purple-500",
  },
  {
    id: "social",
    label: "SOCIAL",
    color: "bg-cyan-500",
    text: "text-cyan-500",
  },
  {
    id: "survey",
    label: "SURVEY",
    color: "bg-blue-500",
    text: "text-blue-500",
  },
  { id: "votes", label: "VOTES", color: "bg-red-500", text: "text-red-500" },
];

const content = {
  agent: {
    title: "mitron",
    image: logoTwo,
    features: [
      "Communication",
      "Automation",
      "Customer Experience",
      "Promotion campaigns",
      "Social media engagement",
    ],
  },
  flow: {
    title: "mitron",
    image: logoTwo,
    features: [
      "Workflow automation",
      "Customer funnels",
      "Smart triggers",
      "Data integration",
    ],
  },
  bot: {
    title: "mitron",
    image: logoTwo,
    features: ["Chatbot design", "AI conversations", "24/7 support"],
  },
  pilot: {
    title: "mitron",
    image: logoTwo,
    features: ["Testing", "Feedback loop", "Deployment control"],
  },
  bulk: {
    title: "mitron",
    image: logoTwo,
    features: ["Bulk messaging", "Targeted reach", "Campaign analytics"],
  },
  social: {
    title: "mitron",
    image: logoTwo,
    features: ["Social media posting", "Engagement tracking"],
  },
  survey: {
    title: "mitron",
    image: logoTwo,
    features: ["Form builder", "Response analysis"],
  },
  votes: {
    title: "mitron",
    image: logoTwo,
    features: ["Poll creation", "Instant results"],
  },
};

export default function ProductModules() {
  const [activeTab, setActiveTab] = useState("agent");

  return (
    <section
      className="section-container mx-auto bg-white"
      id="product-modules"
    >
      {/* Section Heading */}
      <div className="heading-section">
        <h2 className="text-3xl md:text-6xl text-center font-bold mt-10 mb-7">
          Product Modules
        </h2>
      </div>

      {/* Image and Description Section */}
      <div className="image-description-section py-10 mb-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center px-4">
            <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-full shrink-0">
              <img
                src={logo}
                alt="AI Modules Diagram"
                className="w-full h-full object-contain"
                data-aos="fade-down"
              />
            </div>
          </div>

          {/* Description Text */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left px-4">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-500 font-extralight leading-relaxed">
              Customers can buy the modules individually or collectively in a
              pay-as-you-go model – SaaS subscription.
            </p>

            <p className="text-xl md:text-2xl lg:text-3xl text-gray-500 font-extralight leading-relaxed">
              Modules are fully integrated, exchange information for a seamless
              experience, and provide data-driven insights.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs and Content Section */}
      <div className="tabs-content-section bg-[#F6F4F4] mt-10 mb-20 md:py-14 py-5 text-2xl rounded-2xl shadow-md overflow-hidden">
        {/* Tabs Navigation */}
        <div className="tabs-navigation relative flex flex-wrap justify-center gap-6 md:gap-x-10 p-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-4 py-2 md:text-2xl text-lg font-semibold text-white rounded-sm ${tab.color} transition-all`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute left-1/2 -bottom-11.5 -translate-x-1/2 w-0 h-0 border-l-14 border-r-14 border-t-14 border-l-transparent border-r-transparent border-t-[#B0B0B0]"></div>
              )}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="border-b-2 border-dashed border-gray-300 mt-6 mx-auto w-[90%]" />

        {/* Tab Content */}
        <div className="tab-content p-6 flex flex-col md:flex-row items-center justify-center text-center md:text-left">
          {/* Content Image */}
          <div className="flex items-center justify-center md:w-1/2 my-5">
            <img
              src={content[activeTab].image}
              alt={content[activeTab].title}
              className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover"
            />
          </div>

          {/* Content Details */}
          <div className="flex flex-col md:w-1/2">
            <h2
              className={`text-4xl font-bold flex items-center mb-3 ${
                tabs.find((t) => t.id === activeTab)?.text
              }`}
            >
              {content[activeTab].title}
              <span
                className={`ml-2 text-white text-base px-5 py-2.5 rounded-sm ${
                  tabs.find((t) => t.id === activeTab)?.color
                }`}
              >
                {tabs.find((t) => t.id === activeTab)?.label}
              </span>
            </h2>

            <ul className="space-y-3 mt-3 text-black text-xl">
              {content[activeTab].features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FaRegCheckSquare
                    size={18}
                    className="text-gray-700 mt-1 shrink-0"
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
