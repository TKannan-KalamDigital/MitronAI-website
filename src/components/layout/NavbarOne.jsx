import { useState, useEffect, useRef } from "react";
import Logo from "../../assets/NavbarLogo.jpg";
import { IoMenuOutline, IoClose, IoChevronDownOutline } from "react-icons/io5";
import {
  FaRobot,
  FaChartLine,
  FaPlug,
  FaBrain,
  FaLock,
  FaExpandAlt,
  FaHospital,
  FaMoneyBill,
  FaShoppingBag,
  FaTruck,
  FaSchool,
  FaBook,
  FaFileAlt,
  FaCode,
} from "react-icons/fa";

export default function NavbarOne() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);
  const navRef = useRef(null);

  // ✅ Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMegaMenu(null);
        setIsOpen(false);
        setMobileSubmenuOpen(null);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const handleMouseEnter = (key) => setActiveMegaMenu(key);
  const handleMouseLeave = () => setActiveMegaMenu(null);
  const handleLinkClick = (key) => {
    setActiveMegaMenu((prev) => (prev === key ? null : key));
  };

  const megaMenuContent = {
    features: [
      {
        category: "Core Features",
        items: [
          {
            name: "Automation",
            desc: "Intelligent workflows",
            icon: <FaRobot />,
          },
          {
            name: "Analytics",
            desc: "Real-time insights",
            icon: <FaChartLine />,
          },
          {
            name: "Integration",
            desc: "Seamless connectivity",
            icon: <FaPlug />,
          },
        ],
      },
      {
        category: "Advanced",
        items: [
          { name: "AI Models", desc: "Custom AI training", icon: <FaBrain /> },
          {
            name: "Security",
            desc: "Enterprise-grade protection",
            icon: <FaLock />,
          },
          {
            name: "Scalability",
            desc: "Grow with your needs",
            icon: <FaExpandAlt />,
          },
        ],
      },
    ],
    industries: [
      {
        category: "Industries",
        items: [
          {
            name: "Healthcare",
            desc: "Medical AI solutions",
            icon: <FaHospital />,
          },
          {
            name: "Finance",
            desc: "Financial automation",
            icon: <FaMoneyBill />,
          },
          {
            name: "Retail",
            desc: "Customer experience",
            icon: <FaShoppingBag />,
          },
        ],
      },
      {
        category: "Services",
        items: [
          { name: "Logistics", desc: "Supply chain AI", icon: <FaTruck /> },
          { name: "Education", desc: "Learning platforms", icon: <FaSchool /> },
        ],
      },
    ],
    resources: [
      {
        category: "Resources",
        items: [
          { name: "Blog", desc: "Latest updates and trends", icon: <FaBook /> },
          {
            name: "Case Studies",
            desc: "Success stories",
            icon: <FaFileAlt />,
          },
          {
            name: "Documentation",
            desc: "Developer resources",
            icon: <FaCode />,
          },
        ],
      },
    ],
  };

  return (
    <nav
      ref={navRef}
      className="w-full border-b-4 border-transparent relative z-50"
      style={{
        borderImage:
          "linear-gradient(90deg, rgba(29,180,222,0.5) 0%, rgba(137,234,67,0.5) 32.21%, rgba(241,245,46,0.5) 66.35%, rgba(221,10,13,0.5) 100%) 1",
      }}
    >
      <div className="md:px-10 px-7 flex items-center justify-between py-3">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <a href="#home">
            <img src={Logo} alt="Logo" className="w-40 h-auto object-contain" />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-semibold text-black text-sm">
            {[
              { key: "features", label: "FEATURES" },
              { key: "industries", label: "INDUSTRIES" },
              { key: null, label: "PRICING" },
              { key: null, label: "PARTNER" },
              { key: null, label: "CONTACT" },
              { key: "resources", label: "RESOURCES" },
            ].map((item) => (
              <li
                key={item.label}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.key)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => handleLinkClick(item.key)}
                  className={`flex items-center gap-x-1.5 transition-colors ${
                    item.key
                      ? activeMegaMenu === item.key
                        ? "text-teal-700"
                        : "hover:text-teal-700"
                      : "hover:text-teal-700 text-black"
                  }`}
                >
                  {item.label}
                  {item.key && (
                    <span
                      className={`inline-block transition-transform duration-300 ${
                        activeMegaMenu === item.key
                          ? "rotate-180 -translate-y-[2px]"
                          : ""
                      }`}
                    >
                      <IoChevronDownOutline className="w-3.5 h-3.5" />
                    </span>
                  )}
                </button>

                {/* Mega Menu */}
                {activeMegaMenu === item.key && item.key && (
                  <div
                    className="absolute top-full left-0 bg-white shadow-xl border border-gray-100 rounded-b-lg p-8 grid grid-cols-2 gap-10 min-w-[700px] whitespace-nowrap transition-all duration-200 opacity-100 visible"
                    onMouseEnter={() => handleMouseEnter(item.key)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {megaMenuContent[item.key]?.map((section, idx) => (
                      <div key={idx}>
                        <h3 className="font-bold text-lg mb-4 text-gray-800 border-b pb-1 border-gray-200">
                          {section.category}
                        </h3>
                        <ul className="space-y-3">
                          {section.items.map((menuItem, itemIdx) => (
                            <li key={itemIdx}>
                              <a
                                href="#"
                                className="flex items-start gap-3 p-2 rounded hover:bg-gray-50 transition"
                              >
                                <div className="text-teal-500 mt-1">
                                  {menuItem.icon}
                                </div>
                                <div>
                                  <div className="font-semibold text-gray-700 hover:text-teal-700">
                                    {menuItem.name}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {menuItem.desc}
                                  </div>
                                </div>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Login Button */}
        <a
          href="https://kalam-demo-chat-02-buezcmdjamhxhjb4.centralindia-01.azurewebsites.net/dashboard"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-block text-sm bg-[#3ce2ae] text-white font-semibold px-4 py-1.5 rounded-sm hover:bg-[#34ad87] transition-all"
        >
          LOGIN
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose size={26} /> : <IoMenuOutline size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <ul className="flex flex-col py-4 font-semibold text-gray-800">
            {Object.keys(megaMenuContent).map((menu) => (
              <li key={menu}>
                <button
                  onClick={() =>
                    setMobileSubmenuOpen(
                      mobileSubmenuOpen === menu ? null : menu
                    )
                  }
                  className="w-full text-left px-6 py-3 flex items-center justify-between"
                >
                  {menu.toUpperCase()}
                  <IoChevronDownOutline
                    className={`w-5 h-5 transition-transform ${
                      mobileSubmenuOpen === menu ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileSubmenuOpen === menu && (
                  <div className="bg-gray-50 px-6 py-2">
                    {megaMenuContent[menu].map((section, idx) => (
                      <div key={idx} className="mb-4">
                        <h4 className="font-bold text-sm text-gray-600 mb-2">
                          {section.category}
                        </h4>
                        {section.items.map((item, itemIdx) => (
                          <a
                            key={itemIdx}
                            href="#"
                            className="flex items-center gap-2 py-2 text-sm"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="text-teal-500">{item.icon}</span>
                            {item.name}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}

            {["PRICING", "PARTNER", "CONTACT"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block px-6 py-3 hover:text-teal-700"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}

            <li className="px-6 py-3">
              <a
                href="https://kalam-demo-chat-02-buezcmdjamhxhjb4.centralindia-01.azurewebsites.net/dashboard"
                target="_blank"
                rel="noreferrer"
                className="block text-center bg-[#3ce2ae] text-white px-5 py-2 rounded-sm hover:bg-[#34ad87]"
                onClick={() => setIsOpen(false)}
              >
                LOGIN
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
