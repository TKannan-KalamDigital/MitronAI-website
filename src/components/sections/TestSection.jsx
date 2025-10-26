  import React from "react";

  const TestSection = () => {
    return (
      <section className="bg-gray-900 text-white py-10">
        <div className="w-[96%] md:w-[90%] mx-auto">
          <h2 className="text-3xl font-bold">
            Full-width background, centered content
          </h2>
          <p className="mt-2 text-gray-300">
            This section stretches edge-to-edge, but the content stays within 91%
            width.
          </p>
        </div>
      </section>
    );
  };

  export default TestSection;
