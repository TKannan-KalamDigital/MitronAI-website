import logo from "../../assets/MitronLogo.png";

const FooterLinks = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="section-container mx-auto flex flex-col md:flex-row md:justify-between items-start gap-10 px-5 md:px-0">
        {/* Left */}
        <div
          className="md:w-1/2 flex flex-col items-start"
          data-aos="fade-down"
        >
          <img src={logo} alt="Mitron AI Logo" className="w-80 md:w-72 mb-3" />
        </div>
        {/* Right */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm font-semibold">
          {/* Column 1 */}
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Who We Are
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Why Mitron AI
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Business Sectors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Government
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Corporates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Health Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Education
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Entertainment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Transportation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Financial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Retail
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Hospitality
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Product Modules
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Mitron Agent
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Mitron Flow
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Mitron Bot
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Mitron Pilot
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Mitron Bulk
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Mitron Social
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Mitron Survey
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Mitron Votes
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLinks;
