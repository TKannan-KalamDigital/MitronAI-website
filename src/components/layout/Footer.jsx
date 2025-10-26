import kalamLogo from "../../assets/kalam.png"; // your logo path
import Logo from "../../assets/KalamFooterLogo.png"; // your center image path

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white">
      <div className="w-[96%] md:w-[90%] mx-auto py-4 flex flex-col md:flex-row items-center justify-between gap-y-4">
        {/* Left side */}
        <p className="text-xs sm:text-sm text-center sm:text-left">
          COPYRIGHT © MITRON AI – ALL RIGHTS RESERVED.
        </p>

        {/* Center Image */}
        <div className="flex justify-center">
          <img
            src={kalamLogo}
            alt="APJ Abdul Kalam"
            className="w-20 h-20 rounded-full object-cover"
          />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-center sm:text-right">
          <span>POWERED BY</span>
          <img src={Logo} alt="Kalam Logo" className="w-28 h-auto" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
