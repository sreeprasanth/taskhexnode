import React, { useState, useEffect } from "react";
import Button from "./Button";
import Logo from "./Logo";
import { Menu } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
      setShowButton(scrollTop > 900);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative">
      <div
        className={`transition-[padding] duration-500 ease-out ${
          isScrolled ? "pt-[72px]" : "pt-0"
        }`}
      ></div>
      <div
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-white  shadow-[0px_1px_1px_rgba(0,0,0,0.12)] "
            : "bg-black text-white"
        }`}
      >
        <div className="w-[88%] mx-auto md:max-w-[1300px] pb-[2px]">
          <div className="flex items-center justify-between py-3">
            {isMobile ? (
              <>
                {!showButton && (
                  <div className="flex items-center h-[40px]">
                    <Logo isScrolled={isScrolled} />
                  </div>
                )}
                <div className="flex w-full justify-end gap-4">
                  {showButton ? (
                    <Button className="h-[44px] text-[15px] bg-red-600 px-4 py-2 transition duration-500 ease-out hover:brightness-90">
                      14 DAY FREE TRIAL
                    </Button>
                  ) : (
                    <Menu size={28} className="h-[40px] font-bold" /> // Keep Menu icon size fixed
                  )}
                </div>
              </>
            ) : (
              <>
                <Logo isScrolled={isScrolled} />
                <Button className="h-[44px] text-[15px] bg-red-600 transition duration-500 ease-out hover:brightness-90">
                  14 DAY FREE TRIAL
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
