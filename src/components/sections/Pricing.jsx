import { useState } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "BASIC",
      price: 4999,
      features: [
        "Message Centre – centralized hub for communication",
        "Contacts – CRM, Customer Database",
        "Agents – Manual response up to 10 personnels",
      ],
      color: "#F6F4F4",
    },
    {
      name: "ELITE",
      price: 7999,
      features: [
        "Workflow Configurator – up to 5 custom flows",
        "Chatbot for custom workflows (menu driven)",
        "Auto Pilot mode based on AI Search Engine",
      ],
      color: "#CAFCA7",
    },
    {
      name: "PREMIUM",
      price: 9999,
      features: [
        "Campaign – for Bulk messaging on Promotions and Offers",
        "Social Platform – ease of Social Media handling",
        "Customer Survey – collect the customer details, preferences",
      ],
      color: "#EBED7C",
    },
  ];

  return (
    <section
      style={{
        background:
          "linear-gradient(107.17deg, rgba(29, 180, 222, 0.5) 0.26%, rgba(137, 234, 67, 0.5) 32.21%, rgba(241, 245, 46, 0.5) 66.07%, rgba(221, 10, 13, 0.5) 99.45%)",
      }}
      id="price"
    >
      <div className="section-container mx-auto pb-16 py-6">
        <div className="text-center mb-8  py-6">
          <h2 className="text-4xl lg:text-7xl font-bold mb-10">Pricing</h2>

          {/* Toggle Buttons */}
          <div className="inline-flex bg-white shadow-md overflow-hidden">
            <button
              className={`px-6 py-3 cursor-pointer font-semibold border-2 border-[#7DD7BA] ${
                !isYearly ? "bg-white" : "bg-[#7DD7BA]"
              }`}
              onClick={() => setIsYearly(false)}
            >
              MONTHLY
            </button>
            <button
              className={`px-6 py-3 cursor-pointer font-semibold border-2 border-[#7DD7BA] ${
                isYearly ? "bg-white" : "bg-[#7DD7BA]"
              }`}
              onClick={() => setIsYearly(true)}
            >
              YEARLY
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-wrap justify-center gap-x-6 md:-mx-6 -mx-2 gap-y-4">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="w-full md:w-[48%] lg:w-[31%] rounded-xl shadow-md py-7 px-4 lg:px-10 text-center border-4 border-white"
              style={{ backgroundColor: plan.color }}
            >
              <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">
                ₹ {isYearly ? plan.price * 12 : plan.price}
              </p>
              <ul className="text-left space-y-8">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <IoCheckmarkOutline className="font-extralight mr-3 text-3xl" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="text-center mt-16">
          <p className="text-5xl font-semibold">
            Billed {isYearly ? "yearly" : "monthly"} along with <br /> actual
            consumption of messages
          </p>
          <p className="text mt-10 text-gray-800">
            Customers can avail modules based on the individual preferences and
            requirements
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
