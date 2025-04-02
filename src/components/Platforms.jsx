import React from "react";

const images = [
  "https://static.hexnode.com/v2/assets/img/ads-pages/platform/android.svg",
  "https://static.hexnode.com/v2/assets/img/ads-pages/platform/windows.svg",
  "https://static.hexnode.com/v2/assets/img/ads-pages/platform/ios.svg",
  "https://static.hexnode.com/v2/assets/img/ads-pages/platform/android-tv.svg",
  "https://static.hexnode.com/v2/assets/img/ads-pages/platform/apple-tv.svg",
  "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fplatform%2Famazon-fire.png&w=384&q=100",
];

const Platform = () => {
  return (
    <div className="bg-white py-[60px] md:py-[120px]">
      <div className="w-[88%] mx-auto md:max-w-[1300px]">
        <h2 className="text-center mb-[40px] text-[#020a19] text-[32px] leading-[40px] antialiased font-[700] md:mb-[60px] sm:text-[40px] sm:leading-[1.3]">
          Platforms supported
        </h2>
        <div className="flex items-center flex-wrap">
          {images.map((item, index) => (
            <div
              key={index}
              className="block shrink-0 basis-1/2 md:basis-1/3 lg:basis-[calc(100%_/_6)] rounded-[10px] mb-[25px] sm:mb-[15px] px-[12px] max-xs:even:pr-0 max-xs:odd:pl-0"
            >
              <div className="flex items-center justify-center shrink-0 relative mx-auto max-w-[150px] h-[60px] sm:max-w-[190px] sm:h-[72px] rounded-[10px] platformLogoList">
                <img
                  alt=""
                  loading="lazy"
                  width="190"
                  height="72"
                  decoding="async"
                  data-nimg="1"
                  className="block w-full object-contain transition-transform duration-300 ease-in-out hover:-translate-y-2"
                  src={item}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Platform;
