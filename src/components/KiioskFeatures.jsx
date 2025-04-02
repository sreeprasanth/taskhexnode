import React, { useState } from "react";

const features = [
    {
        image: "/assets/webp/kiosk-deployement-image.webp",
        header: "Effortless kiosk deployment & management",

        description:
            "Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox, or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.",
    },
    {
        image: "/assets/webp/customized-interface-image.webp",
        header: "Customized interface for brand visibility",
        badge: "Brand visibility",

        description:
            "Create a locked-down environment with a customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services, and key messages directly to users through the customized interface.",
    },
    {
        image: "/assets/webp/power-up-protection-image.webp",
        header: "What more can you do with Hexnode kiosk?",
        badge: "Data security",

        description:
            "Ensure compliance of your devices by remotely deploying the latest OS version while the device is still in kiosk mode. Prevent your data from falling into the wrong hands even in case of device loss/theft with the various remote management features.",
    },
    {
        image: "/assets/webp/secure-app-ecosystem.webp",
        badge: "App management",

        header: "Secure and update your app ecosystem",
        description:
            "Streamline the deployment and management of apps on your kiosk devices. Save time and effort, ensure security, and improve efficiency using Hexnode’s silent app installation and update features.",
    },
    {
        image: "/assets/webp/easy-to-use-interface-image.webp",
        header: "Provide an easy-to-use interface for end-users",
        badge: "Easy to use interface",
        description:
            "Give your end-users the power to control their devices without overwhelming them with options. An intuitive interface to let them access only the essential settings they need. Make it easy for them to unlock the full potential of your devices hassle-free.",
    },
];

const KioskFeatures = () => {
    const [openIndex, setOpenIndex] = useState(0); // First item open by default

    return (
        <section className=" ">
            <div className="hidden lg:flex  gap-x-14">
                <div className=" flex justify-center relative ">
                    <img
                        src={features[openIndex].image}
                        alt={features[openIndex].header}
                        className="w-[520px] h-[550px]  rounded-lg"
                    />
                    <div
                        className={`absolute  -right-5 bg-white px-9 py-4 rounded-lg shadow-md flex items-center gap-2 ${features[openIndex].badge ? "" : "hidden"
                            } ${openIndex === 3
                                ? "bottom-12"
                                : openIndex === 4
                                    ? "bottom-64"
                                    : openIndex === 2
                                        ? "bottom-60"
                                        : openIndex === 1
                                            ? "bottom-24"
                                            : ""
                            } `}
                    >
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
                        <span className="text-gray-800 font-semibold">
                            {features[openIndex].badge}
                        </span>
                    </div>
                </div>

                <div className="lg:w-1/2 space-y-11 ">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className={`${index < features?.length - 1 ? "border-b border-gray-200" : ""
                                } pb-4`}
                        >
                            <button
                                onClick={() => setOpenIndex(index)}
                                className={`text-[26px] font-semibold w-full text-left transition-colors text-black`}
                            >
                                {item.header}
                            </button>
                            {openIndex === index && (
                                <div className="mt-2 text-gray-600">
                                    <p>{item.description}</p>
                                    <a
                                        target="_blank"
                                        href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
                                        className="text-red-500 font-bold block mt-2"
                                        rel="noreferrer"
                                    >
                                        TRY FOR FREE &gt;
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="lg:hidden flex flex-col gap-6">
                {features.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                        <button
                            onClick={() => setOpenIndex(index)}
                            className={`w-full text-lg font-semibold text-left transition-all text-black`}
                        >
                            {item.header}
                        </button>

                        {openIndex === index && (
                            <div className="mt-3">
                                <div className="relative">
                                    <img
                                        src={item.image}
                                        alt={item.header}
                                        className="w-full h-auto object-cover rounded-lg"
                                    />

                                    <div
                                        className={`absolute bottom-3 left-3 bg-white px-4 py-1 rounded-md shadow-md flex items-center gap-2 ${features[openIndex].badge ? "" : "hidden"
                                            } ${openIndex === 3
                                                ? "bottom-12"
                                                : openIndex === 4
                                                    ? "bottom-64"
                                                    : openIndex === 2
                                                        ? "bottom-60"
                                                        : openIndex === 1
                                                            ? "bottom-24"
                                                            : ""
                                            } `}
                                    >
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
                                        <span className="text-gray-800 font-semibold">
                                            {features[openIndex].badge}
                                        </span>
                                    </div>

                                    {/* <div className="absolute bottom-3 left-3 bg-white px-4 py-1 rounded-md shadow-md flex items-center gap-2">
                    ✅{" "}
                    <span className="text-gray-800 font-semibold">
                      Data security
                    </span>
                  </div> */}
                                </div>
                                <div className="font-bold text-lg pt-[38px]">{item.header}</div>
                                <p className="text-gray-600 mt-2">{item.description}</p>
                                <a href="#" className="text-red-500 font-bold block mt-2">
                                    TRY FOR FREE &gt;
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default KioskFeatures;
