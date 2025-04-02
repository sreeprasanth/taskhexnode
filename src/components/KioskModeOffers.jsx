// src/components/Footer.jsx
import React from "react";
import KioskFeatures from "./KiioskFeatures";

const KioskModeOffers = () => {
    return (
        <div className="pb-[60px] lg:pb-[120px]">
            <div className="w-[88%] mx-auto md:max-w-[1300px]">
                <h2 className="flex justify-center text-[32px] md:text-[40px] leading-[36px] md:leading-[1.3] text-center font-bold text-[#020a19] pb-[20px] md:pb-[20px] max-w-[340px] sm:max-w-[800px] mx-auto">
                    What additional possibilities does the Kiosk mode offer?
                </h2>
                <div className="mt-[40px]">
                    <KioskFeatures />
                </div>
            </div>
        </div>
    );
};

export default KioskModeOffers;
