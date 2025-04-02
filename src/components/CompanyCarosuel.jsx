import React, { useRef, useState } from "react";

const imageArray = [
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/saic.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/lowes.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/merck.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/marriott-intl.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/gorillas.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/hilton.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/lowes.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/merck.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/marriott-intl.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/gorillas.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/hilton.svg"
];

export default function CompanyCarousel() {
    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Drag Events
    const handleDragStart = (e) => {
        setIsDragging(true);
        setStartX(e.clientX || e.touches[0].clientX);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleDragMove = (e) => {
        if (!isDragging) return;
        const x = e.clientX || e.touches[0].clientX;
        const walk = (startX - x) * 1.5; // Adjust sensitivity
        carouselRef.current.scrollLeft = scrollLeft + walk;
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    return (
        <div className="pb-10 pt-4 bg-[#F7F7F7] overflow-hidden">
            <div className="w-[88%] mx-auto md:max-w-[1300px] ">
                <div
                    ref={carouselRef}
                    className="relative flex gap-8 whitespace-nowrap cursor-grab active:cursor-grabbing overflow-hidden group"
                    onMouseDown={handleDragStart}
                    onMouseMove={handleDragMove}
                    onMouseUp={handleDragEnd}
                    onMouseLeave={handleDragEnd}
                    onTouchStart={handleDragStart}
                    onTouchMove={handleDragMove}
                    onTouchEnd={handleDragEnd}
                >
                    <div className="flex gap-8 animate-scroll group-hover:paused">
                        {[...imageArray, ...imageArray].map((src, index) => (
                            <div key={index} className="flex-shrink-0 w-32 h-20 flex justify-center items-center">
                                <img src={src} alt={`Logo ${index + 1}`} className="w-full h-auto object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CSS Animation */}
            <style jsx>{`
                @keyframes scroll {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-50%);
                    }
                }
                .animate-scroll {
                    display: flex;
                    animation: scroll 10s linear infinite;
                }
                .group:hover .animate-scroll {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}
