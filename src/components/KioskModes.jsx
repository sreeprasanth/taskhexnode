import React from "react";
import KioskTabs from "./KioskTabs";

const KioskModes = () => {
    return (
        <div className="py-[60px] md:py-[120px]">
            <div className="w-[88%] mx-auto  md:max-w-[1300px] ">
                <h2 class="text-center mx-auto text-[#020a19] text-[28px] leading-[1.25] antialiased font-bold sm:text-[36px] max-w-[900px]">
                    Specific kiosk modes for unique use cases
                </h2>

                <div className="pt-[40px] sm:pt-[60px] ">
                    <div className=" overflow-hidden ">
                        <KioskTabs />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KioskModes;
