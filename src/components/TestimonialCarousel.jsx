import { useState, useRef, useEffect } from "react";
import "tailwindcss/tailwind.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    image: "/assets/webp/dalibor-kruljac.webp",
    quote:
      "Most complete MDM solution I found, and I tested many of them, including major names",
    name: "Dalibor Kruljac",
    position: "",
    company: "KAMELEYA LTD",
  },
  {
    image: "/assets/webp/chris-robinson.webp",
    quote: "It seemed to be in-line with everything we were looking at.",
    name: "Chris Robinson",
    position: "",
    company: "Executive Account Manager, NCS",
  },
  {
    image: "/assets/webp/justin-modrak.webp",
    quote: "Hexnode is of great value. Works great with Android and iOS!",
    name: "Justin Modrak",
    position: "Technology Coordinator",
    company: "East Troy Community School Districts",
  },
];

export default function ResponsiveCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  // Function to start auto-slide
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slides every 5 seconds
  };

  // Start auto-slide on mount and reset on interaction
  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current); // Cleanup interval on unmount
  }, []);

  const resetAutoSlide = () => {
    clearInterval(intervalRef.current);
    startAutoSlide();
  };

  const nextSlide = () => {
    resetAutoSlide();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    resetAutoSlide();
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleDragStart = (e) => {
    containerRef.current.startX = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleDragMove = (e) => {
    if (!containerRef.current.startX) return;
    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    const difference = containerRef.current.startX - currentX;
    if (difference > 50) {
      nextSlide();
      containerRef.current.startX = null;
    } else if (difference < -50) {
      prevSlide();
      containerRef.current.startX = null;
    }
  };

  return (
    <div className="flex relative items-center w-full flex-col lg:flex-row">
      {/* Desktop Left Button */}
      <button
        onClick={prevSlide}
        disabled={currentIndex === 0}
        className={`absolute z-10 hidden lg:flex left-[-80px] top-1/2 
      transform -translate-y-1/2 w-[56px] h-[56px] rounded-[12px] bg-[#FFFFFF] shadow-md 
      items-center justify-center transition-opacity duration-300 
      ${currentIndex === 0 ? "cursor-not-allowed opacity-50" : ""}`}
      >
        <ChevronLeft size={24} className="text-gray-500" />
      </button>

      {/* Carousel Content */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          ref={containerRef}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={() => (containerRef.current.startX = null)}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={() => (containerRef.current.startX = null)}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg gap-[40px]"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-[320px] h-[320px] rounded-l-2xl"
              />
              <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left w-full">
                <h4 className="text-[16px] sm:text-[20px] md:text-[24px] leading-[24px] sm:leading-[32px] text-[#020a19] font-bold antialiased">
                  "{testimonial.quote}"
                </h4>
                <div className="mt-[30px] py-[20px] md:pr-[55px] md:py-0 flex flex-col justify-center md:min-h-[120px]">
                  <span className="h-[2px] w-full bg-[#F7F7F7] relative top-[-20px] rounded-[5px]"></span>
                  <p className="text-[14px] sm:text-[20px] font-bold text-[#020a19]">
                    {testimonial.name}
                  </p>
                  {testimonial.position && (
                    <small className="text-[12px] sm:text-[14px] text-[#020a19] opacity-70">
                      {testimonial.position}
                    </small>
                  )}
                  <small className="text-[12px] sm:text-[14px] text-[#020a19] opacity-70">
                    {testimonial.company}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Right Button */}
      <button
        onClick={nextSlide}
        disabled={currentIndex === testimonials.length - 1}
        className={`absolute z-10 hidden lg:flex right-[-80px] top-1/2 
      transform -translate-y-1/2 w-[56px] h-[56px] rounded-[12px] bg-[#FFFFFF] shadow-md 
      items-center justify-center transition-opacity duration-300 
      ${
        currentIndex === testimonials.length - 1
          ? "cursor-not-allowed opacity-50"
          : ""
      }`}
      >
        <ChevronRight size={24} className="text-gray-500" />
      </button>

      {/* Mobile Buttons Centered Below */}
      <div className="flex lg:hidden justify-center gap-4 mt-4">
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`w-[56px] h-[56px] rounded-[12px] bg-[#FFFFFF] shadow-md flex items-center justify-center 
        transition-opacity duration-300 ${
          currentIndex === 0 ? "cursor-not-allowed opacity-50" : ""
        }`}
        >
          <ChevronLeft size={24} className="text-gray-500" />
        </button>

        <button
          onClick={nextSlide}
          disabled={currentIndex === testimonials.length - 1}
          className={`w-[56px] h-[56px] rounded-[12px] bg-[#FFFFFF] shadow-md flex items-center justify-center 
        transition-opacity duration-300 ${
          currentIndex === testimonials.length - 1
            ? "cursor-not-allowed opacity-50"
            : ""
        }`}
        >
          <ChevronRight size={24} className="text-gray-500" />
        </button>
      </div>
    </div>
  );
}
