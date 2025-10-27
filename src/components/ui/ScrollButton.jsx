import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";

const ScrollButton = () => (
  <ScrollToTop
    smooth
    component={<FaArrowUp className="text-xl transform -translate-1/2 " />}
    style={{
      position: "fixed",
      bottom: "120px",
      right: "33px",
      backgroundColor: "#a3a3a3",
      color: "#000",
      borderRadius: "50%",
      padding: "19px",
      zIndex: 1000,
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    }}
  />
);

export default ScrollButton;
