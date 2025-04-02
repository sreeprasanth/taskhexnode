import React from "react";

const ComapnyFeedBack = () => {
    const feedBackarray = [
        {
            imagePath: "/assets/webp/idc.webp",
            reviews:
                "Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.",
        },
        {
            imagePath: "/assets/webp/gartner.webp",
            reviews:
                "Hexnode was recognized in the 2025 Gartner® Market Guide for Unified Endpoint Management Tools.",
        },
        {
            imagePath: "/assets/webp/forrester.webp",
            reviews:
                "Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.",
        },
    ];

    return (
        <div className="bg-[#1A1C2B]  -mt-[45px] ">
            <div className="w-[88%] mx-auto  md:max-w-[1300px] text-white py-[30px] ">
                <div className="flex flex-col max-md:items-center md:flex-row   justify-center mx-[0px] md:justify-between md:mx-[-10px] lg:mx-[-25px] xl:mx-[-45px] ">
                    {feedBackarray.map((values, index) => {
                        return (
                            <>
                                <div
                                    key={index}
                                    className={`xl:px-[45px] group max-w-[340px] md:max-w-[27%] flex-[0_0_100%] md:flex-[0_0_27%] px-[0px] py-[40px] md:py-[0px] md:px-[10px] lg:px-[25px] `}
                                >
                                    <div className="flex justify-center md:justify-start items-center w-full md:min-w-[82px]  md:max-w-[156px] max-h-[25px] h-full">
                                        <img src={values.imagePath} alt="" />
                                    </div>
                                    <div className="pt-[15px]">
                                        <p className="text-[14px] leading-[22px] text-[rgb(255,255,255,60%)] text-center md:text-left">
                                            {values.reviews}
                                        </p>
                                    </div>
                                </div>
                                {index < feedBackarray?.length - 1 && (
                                    <div className=" border-b-[0.5px] md:border-r-[0.5px]  border-[rgb(255,255,255,20%)]"></div>
                                )}
                                {index < feedBackarray?.length - 1 && (
                                    <div className="w-[80%] h-[0.5px] md:w-[0.5px] md:h-full bg-[rgb(255,255,255,20%)]"></div>
                                )}

                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ComapnyFeedBack;
