import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ChevronUp } from "lucide-react";

const kioskData = [
    {
        header: "Single App Kiosk",
        subheader: "Powerful Single-App Kiosk solutions for enhanced control",
        image: "../assets/webp/image1.webp",
        points: [
            "Provision the devices to run one specialized application, with limited functionalities.",
            "Customize the device settings to cater to a specific use-case each time.",
            "Use Hexnode’s Advanced Kiosk settings for additional restrictions or expanded device functionalities while in kiosk mode.",
            "Empower your administrators with full control over the kiosk devices.",
        ],
    },
    {
        header: "Multi-App Kiosk",
        subheader: "Elevate efficiency with Multi-App Kiosk",
        image: "../assets/webp/multi-app-kiosk-image.webp",
        points: [
            "Limit device access to approved apps, ensuring focus and productivity.",
            "With default phone and settings app inclusion, reduce distractions by providing users access to essential functions only.",
            "With Hexnode's peripheral settings admins can allow necessary device settings while retaining control.",
            "Simplify device management while empowering user productivity by deploying Multi-App Kiosk Mode.",
        ],
    },
    {
        header: "Web-based Kiosk",
        subheader: "Explore the new way to manage web apps and websites",
        image: "../assets/webp/web-based-kiosk-image.webp",
        points: [
            "Let users access essential and approved web apps, website and files only.",
            "Make the best use of website kiosk with Hexnode's advanced settings.",
            "Tailor your experience to match your unique use case.",
            "From configuring toolbar options to scheduling page refresh, remote debugging, and limiting incognito tabs, take full control of your website kiosk experience.",
        ],
    },
    {
        header: "Digital Signages",
        subheader: "Capture attention with Digital Signage Kiosks",
        image: "../assets/webp/digital-signage-kiosk-image.webp",
        points: [
            "Transform your devices into captivating digital signage kiosks that grab attention.",
            "Engage your audience with vibrant images and seamless video streaming.",
            "Customize media files with trimming, muting, and background music.",
            "Advertise and show off your brand aesthetics to attract customers in different ways.",
            "Take control with Hexnode to reestablish your brand's presence.",
        ],
    },
    {
        header: "ASAM Kiosk",
        subheader: "Unlock the power of Autonomous Single App Mode (ASAM)",
        image: "../assets/webp/asam-kiosk-image.webp",
        points: [
            "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
            "Transform tablets or devices into dedicated point-of-sale (POS) systems by preventing interruptions from other applications or notifications.",
            "Create focused, efficient and secure digital environments to match your requirements.",
            "Configure ASAM effortlessly and elevate your user experience like never before.",
        ],
    },
];

export default function KioskTabs() {
    const [selectedTab, setSelectedTab] = useState(kioskData[0].header);

    return (
        <div className="container mx-0">
            {/* Desktop View - Tab Navigation */}
            <div className="hidden md:flex border-b">
                {kioskData.map((item) => (
                    <button
                        key={item.header}
                        className={`px-[40px] w-full font-bold py-2 h-[80px] text-xl rounded-[3px] transition-all duration-300 ${selectedTab === item.header ? "text-white bg-black" : "text-gray-500"
                            }`}
                        onClick={() => setSelectedTab(item.header)}
                    >
                        {item.header}
                    </button>
                ))}
            </div>

            {/* Desktop Content Display */}
            <div className="hidden md:flex p-[40px] bg-[#f7f7f7] relative overflow-hidden">
                {kioskData.map(
                    (tab) =>
                        selectedTab === tab.header && (
                            <div
                                key={tab.header}
                                className="flex justify-between w-full opacity-0 translate-y-4 animate-fade-slide"
                            >
                                <div className="mb-[20px] lg:mb-0 flex-1 text-left max-w-[760px] sm:mx-auto lg:pr-[40px]">
                                    <h3 className="text-[#020A19] font-bold text-[20px] leading-[26px] antialiased max-w-[670px] pb-[15px] lg:pb-[40px] sm:text-[28px] sm:leading-[40px]">
                                        {tab.subheader}
                                    </h3>
                                    <ul className="mt-2 space-y-2">
                                        {tab.points.map((point, index) => (
                                            <li
                                                key={index}
                                                className="flex flex-row items-baseline relative mb-[0px] lg:mb-[25px] last:mb-0"
                                            >
                                                <span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="14.393"
                                                        height="10.111"
                                                    >
                                                        <path
                                                            fill="none"
                                                            stroke="#60c458"
                                                            strokeWidth="2"
                                                            d="M.697 4.107 5.45 8.718l8.247-8"
                                                            data-name="tick - icon"
                                                        ></path>
                                                    </svg>
                                                </span>
                                                <p className="text-[16px] leading-[24px] sm:text-[18px] font-normal sm:leading-[28px] text-[#333333] pl-[25px] sm:pl-[30px]">
                                                    {point}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <img
                                    src={tab.image}
                                    alt={tab.header}
                                    className="w-[460px] h-[353px] rounded-lg opacity-0 scale-95 animate-fade-scale"
                                />
                            </div>
                        )
                )}
            </div>

            {/* Mobile View - Accordion Style */}
            <div className="md:hidden">
                {kioskData.map((tab) => (
                    <div key={tab.header} className="mb-2 border rounded-lg overflow-hidden">
                        <button
                            className={` w-full flex justify-between p-4 text-lg font-semibold ${selectedTab === tab.header ? "text-white bg-black" : "text-gray-500"
                                }`}
                            onClick={() => setSelectedTab(selectedTab === tab.header ? "" : tab.header)}
                        >
                            {tab.header}
                            <span>{selectedTab === tab.header ? <ChevronUp /> : <ChevronDown />}</span>
                        </button>
                        {selectedTab === tab.header && (
                            <div className="p-4 bg-[#f7f7f7] animate-fade-slide">
                                <img
                                    src={tab.image}
                                    alt={tab.header}
                                    className="w-full rounded-lg opacity-0 scale-95 animate-fade-scale"
                                />
                                <h2 className="text-lg font-bold mt-4 mb-4">{tab.subheader}</h2>
                                <ul className="mt-2 space-y-2">
                                    {tab.points.map((point, index) => (
                                        <li
                                            key={index}
                                            className="flex justify-center items-baseline gap-2  "
                                        >
                                            <span className="flex  justify-center items-center ">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14.393"
                                                    height="10.111"
                                                >
                                                    <path
                                                        fill="none"
                                                        stroke="#60c458"
                                                        stroke-width="2"
                                                        d="M.697 4.107 5.45 8.718l8.247-8"
                                                        data-name="tick - icon"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <p>{point}</p>
                                        </li>

                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Tailwind Animations */}
            <style jsx global>{`
                @keyframes fade-slide {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fade-scale {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .animate-fade-slide {
                    animation: fade-slide 0.4s ease-out forwards;
                }

                .animate-fade-scale {
                    animation: fade-scale 0.4s ease-out forwards;
                }
            `}</style>
        </div>
    );
}
