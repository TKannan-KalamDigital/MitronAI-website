import Footer from "./components/layout/Footer";
import FooterLinks from "./components/sections/FooterLinks";
import TestSection from "./components/sections/TestSection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Pricing from "./components/sections/Pricing";
import Navbar from "./components/layout/Navbar";
import ProductModules from "./components/sections/ProductModules";
import Features from "./components/sections/Features";
import WhoWeAre from "./components/sections/WhoWeAre";
import WhyMitran from "./components/sections/WhyMitron";
import BusinessSectors from "./components/sections/BusiessSectors";
import Banner from "./components/sections/Banner";
import TopHeader from "./components/layout/TopHeader";
import VideoBanner from "./components/sections/VideoBanner";
import ContactNavbar from "./components/layout/ContactNavbar";
import TopContactBar from "./components/layout/TopContactBar";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, //  allow animation every time you scroll
      mirror: true, // animate when scrolling up as well
      disable: "phone", // enable on all devices
    });

    // Refresh AOS when component updates or new elements appear
    AOS.refresh();
  }, []);

  return (
    <>
      <TopContactBar />
      <ContactNavbar />
      <Navbar />
      <VideoBanner />
      {/* <TopHeader /> */}
      <Banner />
      <WhoWeAre />
      <WhyMitran />
      <BusinessSectors />
      <Features />
      <ProductModules />
      <Pricing />
      <FooterLinks />
      <Footer />
    </>
  );
}

export default App;
