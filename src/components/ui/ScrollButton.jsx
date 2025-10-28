import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";

const ScrollButton = () => (
  <ScrollToTop
    smooth
    component={<FaArrowUp className="text-lg" />}
    className="!fixed !bottom-[120px] !right-[70px] sm:!right-[30px] lg:!right-[30px] !bg-red-400 hover:!bg-red-500 
                !text-white !rounded-full !p-[11px] !cursor-pointer 
                !shadow-md hover:!shadow-lg transition-all duration-300 !z-[1000]"
  />
);

export default ScrollButton;
