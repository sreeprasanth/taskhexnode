// src/components/Footer.jsx
import React from "react";
import EmailInput from "./EmailInput";

const PageDetailsOverview = () => {
  return (
    <div className="bg-[#020A19] py-[78px] ">
      <div className="w-[88%] mx-auto  md:max-w-[1300px]  text-white  font-sans">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-between">
          <div className="flex flex-col max-w-full sm:max-w-[550px] xl:max-w-[498px] order-2 xl:order-1 -mt-[20px]">
            <div>
              <div className="mb-[20px] md:mb-[40px] font-mulish">
                <h1 class="text-[#FFFFFF] text-[34px] leading-[44px] text-center lg:text-[42px] lg:leading-[53px] xl:text-left font-bold antialiased">Turn your devices into kiosks in a few minutes with Hexnode UEM</h1>
              </div>
            </div>
            <div>
              <EmailInput buttonText="GET STARTED NOW!" />
            </div>
          </div>
          <div className="w-full max-w-full md:max-w-[597px] order-1 xl:order-2">
            <img
              src="/assets/webp/image2.webp"
              alt="Example"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageDetailsOverview;
