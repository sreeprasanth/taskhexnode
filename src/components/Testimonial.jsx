import React from "react";
import TestimonialCarousel from "./TestimonialCarousel";

const Testimonial = () => {
    return (
        <div className=" bg-[#F7F7F7] ">
            <div className="w-[88%] mx-auto  md:max-w-[1300px] pt-[60px] md:pt-[120px] pb-0 md:pb-[60px] ">
                <h2 class="antialiased text-[32px] md:text-[40px] leading-[40px] md:leading-[1.3] text-center font-bold text-[#020a19] pb-0 md:pb-[20px]">
                    Why should you choose Hexnode?
                </h2>
                <div>
                    <div className="max-w-[280px] sm:max-w-[400px] md:max-w-[960px] lg:max-w-[780px] xl:max-w-[960px] pt-[40px] pb-0 md:pb-[80px] relative mx-auto lg:pb-0">
                        <TestimonialCarousel />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
