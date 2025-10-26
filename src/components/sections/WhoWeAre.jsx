import kalam from "../../assets/kalam.png";
import logo from "../../assets/KalamBlackLogo.png";

const WhoWeAre = () => {
  return (
    <section className="bg-[#E3F1FF] w-full pt-10 pb-20">
      <div className="section-container mx-auto">
        {/* Heading */}
        <h1 className="text-left py-5 text-3xl md:text-6xl">
          <span className="font-bold text-4xl md:text-7xl">Who</span> we are?
        </h1>

        {/* Content layout */}
        <div className="flex flex-col lg:flex-row items-start justify-center w-full gap-10  lg:gap-20">
          {/* Image */}
          <div className="flex justify-center md:justify-start w-full lg:w-[30%]">
            <img
              data-aos="flip-down"
              src={kalam}
              alt="abdulkalam"
              className="w-full sm:w-[65%] md:w-[60%] lg:w-full max-w-sm lg:max-w-none h-auto rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Text & Summary */}
          <div className="flex flex-col w-full lg:w-[70%] gap-y-5 ">
            <img
              src={logo}
              alt="logo"
              className="w-full md:w-[40%] lg:w-[40%] h-auto object-cover"
            />
            <h3 className="text-3xl md:text-5xl font-extralight leading-snug">
              Your Digital Transformation Catalyst
            </h3>
            <p className="text-base leading-relaxed">
              We are a leading, full-service software development and consulting
              firm, dedicated to modernizing and digitizing your legacy systems
              and operations. With a strong focus on timeliness, security,
              scalability, and performance.
            </p>
            <p className="text-base leading-relaxed">
              We build groundbreaking solutions that deliver excellence and a
              seamless user experience. From intelligent automation to
              comprehensive enterprise resource planning, our AI-enabled
              products and services are designed to help you achieve limitless
              growth and stay ahead of the curve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
