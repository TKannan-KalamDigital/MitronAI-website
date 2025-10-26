import { FaCheckSquare } from "react-icons/fa";
import featuresImg from "../../assets/features.jpg";

const Features = () => {
  const features = [
    {
      title: "Conversational AI",
      description: "Understands context and delivers human-like interactions",
    },
    {
      title: "Workflow Configurator",
      description: "Map custom response to the questions asked",
    },
    {
      title: "Multiple Modes",
      description: "Supports both Manual or Automatic way to converse",
    },
    {
      title: "Multiple Channel",
      description: "Works across platforms like WhatsApp and Social Media",
    },
    {
      title: "CRM & Personalization",
      description:
        "Stores Customer info, remembers user preferences for response",
    },
  ];

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 md:px-0 text-white"
      id="products"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1920&auto=format&fit=crop')",
      }}
    >
      {/* Overlay for dark gradient */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Title */}
      <h2 className="text-xl z-20 text-white relative md:text-7xl font-bold mb-10 text-center">
        Product Features
      </h2>

      {/* Main layout */}
      <div className="section-container mx-auto relative z-10 flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-16">
        {/* Left box (image) */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            data-aos="zoom-in-down"
            src={featuresImg}
            alt="features"
            className="w-full aspect-square md:aspect-[1] rounded-md shadow-lg"
          />
        </div>

        {/* Right features */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-3 transition"
              >
                {/* Icon box */}
                <div className="flex items-center justify-center w-12 h-12 md:w-20 md:h-20 bg-white rounded-md text-blue-700 ">
                  {/* <FaCheckSquare size={24} /> */}
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-semibold text-xl md:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-200">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
