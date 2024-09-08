"use client";

import { useState, useEffect, TouchEvent } from "react";

interface CarouselProps {
  children: React.ReactNode[];
  interval?: number;
  autoPlay?: boolean;
  useDots?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  interval = 3000,
  autoPlay = false,
  useDots = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (autoPlay) {
      const slideInterval = setInterval(nextSlide, interval);
      return () => clearInterval(slideInterval);
    }
  }, [interval, autoPlay]);

  // Handle swipe start
  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  // Handle swipe move
  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // Handle swipe end
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    // Check swipe distance
    const swipeDistance = touchStart - touchEnd;
    const minSwipeDistance = 50; // Adjust this value as needed

    if (swipeDistance > minSwipeDistance) {
      nextSlide(); // swipe left -> next slide
    } else if (swipeDistance < -minSwipeDistance) {
      prevSlide(); // swipe right -> previous slide
    }

    // Reset values
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div
      className="relative w-full h-full"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button
        onClick={prevSlide}
        className="absolute left-6 md:left-24 top-1/2 transform -translate-y-1/2 bg-white text-white w-9 h-9 rounded-full flex justify-center items-center shadow-md z-10"
      >
        <img src="/icons/arrow-left.svg" />
      </button>
      <div className="carousel w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {children.map((child, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {child}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={nextSlide}
        className="absolute right-6 md:right-24 top-1/2 transform -translate-y-1/2 bg-white w-9 h-9 rounded-full shadow-md z-10 flex justify-center items-center"
      >
        <img src="/icons/arrow-right.svg" />
      </button>

      {/* Pagination */}
      {useDots && (
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-gray-700" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
