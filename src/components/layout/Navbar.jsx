import { useState } from "react";
import Logo from "../../assets/AI-HeadLogo.png";
import { IoMenuOutline, IoClose } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="w-full border-y-[3px] border-transparent "
      style={{
        borderImage:
          "linear-gradient(90deg, rgba(29,180,222,0.5) 0%, rgba(137,234,67,0.5) 32.21%, rgba(241,245,46,0.5) 66.35%, rgba(221,10,13,0.5) 100%) 1",
      }}
    >
      {/* Contact */}
      <div className="section-container mx-auto"></div>

      {/* Navbar content */}
      <div className="section-container mx-auto flex items-center justify-between py-3">
        {/* Logo */}
        <div className="flex items-center gap-2 -mx-5">
          <a href="#" id="#home">
            <img src={Logo} alt="Logo" className="w-24 h-14 object-contain" />
          </a>
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-semibold text-black">
            <li>
              <a href="#features" className="hover:text-sky-500">
                FEATURES
              </a>
            </li>
            <li>
              <a href="#industries" className="hover:text-sky-500">
                INDUSTRIES
              </a>
            </li>
            <li>
              <a href="#price" className="hover:text-sky-500">
                PRICING
              </a>
            </li>
            <li>
              <a href="#partner" className="hover:text-sky-500">
                PARTNER
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-sky-500">
                CONTACT
              </a>
            </li>
            <li>
              <a href="#resources" className="hover:text-sky-500">
                RESOURCES
              </a>
            </li>
          </ul>
        </div>

        {/* Button */}
        <div className="flex gap-3">
          <a
            href="#"
            className="hidden md:inline-block bg-[#3ce2ae] text-white font-semibold px-5 py-2 rounded-sm hover:bg-[#34ad87] transition-all"
          >
            LOGIN
          </a>
          <a
            href="#"
            className="hidden md:inline-block bg-[#3ce2ae] text-white font-semibold px-5 py-2 rounded-sm hover:bg-[#34ad87] transition-all"
          >
            BOOK A DEMO
          </a>
        </div>

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
          <ul className="flex flex-col items-center py-4 space-y-4 font-semibold">
            <li>
              <a href="#features" className="hover:text-sky-500">
                FEATURES
              </a>
            </li>
            <li>
              <a href="#industries" className="hover:text-sky-500">
                INDUSTRIES
              </a>
            </li>
            <li>
              <a href="#price" className="hover:text-sky-500">
                PRICING
              </a>
            </li>
            <li>
              <a href="#partner" className="hover:text-sky-500">
                PARTNER
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-sky-500">
                CONTACT
              </a>
            </li>
            <li>
              <a href="#resources" className="hover:text-sky-500">
                RESOURCES
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-teal-400 text-white px-5 py-2 rounded-sm"
              >
                LOGIN
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-teal-400 text-white px-5 py-2 rounded-sm"
              >
                BOOK A DEMO
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

// Basic Mega Menu

// import { IoMenuOutline, IoClose, IoChevronDownOutline } from "react-icons/io5";
// import Logo from "../../assets/logo.png";
// import { useState } from "react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeMegaMenu, setActiveMegaMenu] = useState(null);
//   const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);

//   const megaMenuContent = {
//     products: [
//       {
//         category: "AI Solutions",
//         items: [
//           { name: "Mitron Agent 1", desc: "AI-powered automation" },
//           { name: "Mitron Agent 2", desc: "Smart analytics platform" },
//           { name: "Mitron Agent 3", desc: "Process optimization" },
//         ],
//       },
//       {
//         category: "Enterprise Tools",
//         items: [
//           { name: "Mitron Agent 4", desc: "Enterprise integration" },
//           { name: "Mitron Agent 5", desc: "Data management" },
//           { name: "Mitron Agent 6", desc: "Workflow automation" },
//         ],
//       },
//     ],
//     sectors: [
//       {
//         category: "Industries",
//         items: [
//           { name: "Healthcare", desc: "Medical AI solutions" },
//           { name: "Finance", desc: "Financial automation" },
//           { name: "Retail", desc: "Customer experience" },
//         ],
//       },
//       {
//         category: "Services",
//         items: [
//           { name: "Manufacturing", desc: "Production optimization" },
//           { name: "Logistics", desc: "Supply chain AI" },
//           { name: "Education", desc: "Learning platforms" },
//         ],
//       },
//     ],
//     features: [
//       {
//         category: "Core Features",
//         items: [
//           { name: "Automation", desc: "Intelligent workflows" },
//           { name: "Analytics", desc: "Real-time insights" },
//           { name: "Integration", desc: "Seamless connectivity" },
//         ],
//       },
//       {
//         category: "Advanced",
//         items: [
//           { name: "AI Models", desc: "Custom AI training" },
//           { name: "Security", desc: "Enterprise-grade protection" },
//           { name: "Scalability", desc: "Grow with your needs" },
//         ],
//       },
//     ],
//   };

//   return (
//     <nav
//       className="w-full border-y-[3px] border-transparent relative"
//       style={{
//         borderImage:
//           "linear-gradient(90deg, rgba(29,180,222,0.5) 0%, rgba(137,234,67,0.5) 32.21%, rgba(241,245,46,0.5) 66.35%, rgba(221,10,13,0.5) 100%) 1",
//       }}
//       onMouseLeave={() => setActiveMegaMenu(null)}
//     >
//       {/* Navbar content */}
//       <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-3">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <a href="#" id="#home">
//             <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-green-400 rounded-full flex items-center justify-center">
//               <span className="text-white font-bold text-xl">AI</span>
//             </div>
//           </a>
//           {/* Desktop Menu */}
//           <ul className="hidden md:flex items-center gap-8 font-semibold text-black">
//             <li
//               className="relative group"
//               onMouseEnter={() => setActiveMegaMenu("products")}
//             >
//               <a
//                 href="#products"
//                 className="hover:text-sky-500 flex items-center gap-1"
//               >
//                 PRODUCTS
//                 <IoChevronDownOutline className="w-4 h-4" />
//               </a>
//             </li>
//             <li
//               className="relative group"
//               onMouseEnter={() => setActiveMegaMenu("sectors")}
//             >
//               <a
//                 href="#sectors"
//                 className="hover:text-sky-500 flex items-center gap-1"
//               >
//                 SECTORS
//                 <IoChevronDownOutline className="w-4 h-4" />
//               </a>
//             </li>
//             <li
//               className="relative group"
//               onMouseEnter={() => setActiveMegaMenu("features")}
//             >
//               <a
//                 href="#product-modules"
//                 className="hover:text-sky-500 flex items-center gap-1"
//               >
//                 FEATURES
//                 <IoChevronDownOutline className="w-4 h-4" />
//               </a>
//             </li>
//             <li onMouseEnter={() => setActiveMegaMenu(null)}>
//               <a href="#price" className="hover:text-sky-500">
//                 PRICE
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Button */}
//         <a
//           href="#book"
//           className="hidden md:inline-block bg-[#7DD7BA] text-white font-semibold px-5 py-2 rounded-sm hover:bg-[#34ad87] transition-all"
//         >
//           BOOK A DEMO
//         </a>

//         {/* Mobile Hamburger */}
//         <button
//           className="md:hidden text-gray-700"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <IoClose size={26} /> : <IoMenuOutline size={26} />}
//         </button>
//       </div>

//       {/* Mega Menu - Desktop */}
//       {activeMegaMenu && (
//         <div
//           className="hidden md:block absolute top-full left-0 w-full bg-white shadow-lg border-t z-50"
//           onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
//           onMouseLeave={() => setActiveMegaMenu(null)}
//         >
//           <div className="max-w-7xl mx-auto px-4 py-8">
//             <div className="grid grid-cols-2 gap-8">
//               {megaMenuContent[activeMegaMenu]?.map((section, idx) => (
//                 <div key={idx}>
//                   <h3 className="font-bold text-lg mb-4 text-gray-800">
//                     {section.category}
//                   </h3>
//                   <ul className="space-y-3">
//                     {section.items.map((item, itemIdx) => (
//                       <li key={itemIdx}>
//                         <a
//                           href="#"
//                           className="block hover:bg-gray-50 p-2 rounded transition-colors"
//                         >
//                           <div className="font-semibold text-gray-700 hover:text-sky-500">
//                             {item.name}
//                           </div>
//                           <div className="text-sm text-gray-500">
//                             {item.desc}
//                           </div>
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-md border-t">
//           <ul className="flex flex-col py-4 font-semibold">
//             {/* Products with submenu */}
//             <li>
//               <button
//                 onClick={() =>
//                   setMobileSubmenuOpen(
//                     mobileSubmenuOpen === "products" ? null : "products"
//                   )
//                 }
//                 className="w-full text-left px-4 py-3 flex items-center justify-between"
//               >
//                 PRODUCTS
//                 <IoChevronDownOutline
//                   className={`w-5 h-5 transition-transform ${
//                     mobileSubmenuOpen === "products" ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {mobileSubmenuOpen === "products" && (
//                 <div className="bg-gray-50 px-4 py-2">
//                   {megaMenuContent.products.map((section, idx) => (
//                     <div key={idx} className="mb-4">
//                       <h4 className="font-bold text-sm text-gray-600 mb-2">
//                         {section.category}
//                       </h4>
//                       {section.items.map((item, itemIdx) => (
//                         <a
//                           key={itemIdx}
//                           href="#"
//                           className="block py-2 text-sm"
//                           onClick={() => setIsOpen(false)}
//                         >
//                           {item.name}
//                         </a>
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </li>

//             {/* Sectors with submenu */}
//             <li>
//               <button
//                 onClick={() =>
//                   setMobileSubmenuOpen(
//                     mobileSubmenuOpen === "sectors" ? null : "sectors"
//                   )
//                 }
//                 className="w-full text-left px-4 py-3 flex items-center justify-between"
//               >
//                 SECTORS
//                 <IoChevronDownOutline
//                   className={`w-5 h-5 transition-transform ${
//                     mobileSubmenuOpen === "sectors" ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {mobileSubmenuOpen === "sectors" && (
//                 <div className="bg-gray-50 px-4 py-2">
//                   {megaMenuContent.sectors.map((section, idx) => (
//                     <div key={idx} className="mb-4">
//                       <h4 className="font-bold text-sm text-gray-600 mb-2">
//                         {section.category}
//                       </h4>
//                       {section.items.map((item, itemIdx) => (
//                         <a
//                           key={itemIdx}
//                           href="#"
//                           className="block py-2 text-sm"
//                           onClick={() => setIsOpen(false)}
//                         >
//                           {item.name}
//                         </a>
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </li>

//             {/* Features with submenu */}
//             <li>
//               <button
//                 onClick={() =>
//                   setMobileSubmenuOpen(
//                     mobileSubmenuOpen === "features" ? null : "features"
//                   )
//                 }
//                 className="w-full text-left px-4 py-3 flex items-center justify-between"
//               >
//                 FEATURES
//                 <IoChevronDownOutline
//                   className={`w-5 h-5 transition-transform ${
//                     mobileSubmenuOpen === "features" ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {mobileSubmenuOpen === "features" && (
//                 <div className="bg-gray-50 px-4 py-2">
//                   {megaMenuContent.features.map((section, idx) => (
//                     <div key={idx} className="mb-4">
//                       <h4 className="font-bold text-sm text-gray-600 mb-2">
//                         {section.category}
//                       </h4>
//                       {section.items.map((item, itemIdx) => (
//                         <a
//                           key={itemIdx}
//                           href="#"
//                           className="block py-2 text-sm"
//                           onClick={() => setIsOpen(false)}
//                         >
//                           {item.name}
//                         </a>
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </li>

//             {/* Price */}
//             <li>
//               <a
//                 href="#price"
//                 className="block px-4 py-3"
//                 onClick={() => setIsOpen(false)}
//               >
//                 PRICE
//               </a>
//             </li>

//             {/* Book Demo Button */}
//             <li className="px-4 py-3">
//               <a
//                 href="#book"
//                 className="block text-center bg-[#7DD7BA] text-white px-5 py-2 rounded-sm"
//                 onClick={() => setIsOpen(false)}
//               >
//                 BOOK A DEMO
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }
