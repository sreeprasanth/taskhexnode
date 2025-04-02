// src/components/Footer.jsx
import React from "react";
import KioskFeatures from "./KiioskFeatures";
import EmailInput from "./EmailInput";

const Signup = () => {
    return (
        <div className="bg-[#020a19] flex justify-center items-center md:h-[330px]  py-[50px] md:py-0">
            <div className="w-[88%] mx-auto md:max-w-[1300px]">
                <div className="w-full text-center max-w-[1000px] mx-auto">
                    <h3 class="text-[30px] text-[#fff] font-bold leading-[38px] text-center mb-[20px] md:text-[42px] md:leading-[1.3]">
                        Sign up and try Hexnode free for 14 days!
                    </h3>
                </div>
                <div className="max-w-[580px] mx-auto">
                    <div className="max-w-[527px] mx-auto">
                        <EmailInput buttonText="GET STARTED" />
                    </div>
                    <div className="pt-[10px] relative">
                        <p className="text-[17px] leading-[24px] text-center text-[#556575] font-medium m-[0px] pt-[10px]">
                            No credit cards required.
                            <a
                                className="text-[17px] leading-[24px] text-[#dd0735] font-medium whitespace-nowrap inline-block transition-all duration-[0.3s] ease-in-out pr-[20px] pb-[0px] pl-[5px] relative after:w-[6px] after:h-[10px] after:absolute after:right-[5px] after:top-[9px] after:bg-no-repeat after:transition-all after:duration-[0.3s] after:ease-in-out "
                                role="link"
                                href="https://www.hexnode.com/mobile-device-management/request-demo/"
                            >
                                Request a demo {">"}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
