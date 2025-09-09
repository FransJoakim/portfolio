/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { projectsAtom } from "../../lib/atoms";
import { CarouselCard } from "./CarouselCard";

export const Carousel = () => {
  // Get projects from Recoil
  const projects = useRecoilValue(projectsAtom);
  const numCards = projects.length;
  // Use local state for active card
  const [activeSlide, setActiveSlide] = useState(0);

  // Navigation handlers
  const goToPrev = React.useCallback(() => {
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);
  const goToNext = React.useCallback(() => {
    setActiveSlide((prev) => (prev < numCards - 1 ? prev + 1 : prev));
  }, [numCards]);

  // Arrow key navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSlide, numCards, goToPrev, goToNext]);

  return (
    <>
      {/* Main container for the carousel and buttons */}
      <div className="relative flex items-center h-full w-full">
        {/* Prev button */}
        <button
          onClick={goToPrev}
          disabled={activeSlide === 0}
          className="absolute left-8 top-1/3 -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-white/80 rounded-full shadow-lg hover:bg-white/90 disabled:opacity-50 z-20"
          style={{ border: "none", backdropFilter: "blur(4px)" }}
        >
          <span className="text-2xl font-bold text-gray-700">&#8592;</span>
        </button>
        {/* carousel */}
        <div
          id="carousel-container"
          className="relative [perspective:1000px] [transform-style:preserve-3d] h-3/5 w-screen flex justify-center items-center translate-y-[-25%]"
        >
          {/* Render each slide */}
          {projects.map((project, i) => (
            <CarouselCard
              key={i}
              item={project}
              index={i}
              activeSlide={activeSlide}
            />
          ))}
        </div>
        {/* Next button */}
        <button
          onClick={goToNext}
          disabled={activeSlide === numCards - 1}
          className="absolute right-8 top-1/3 -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-white/80 rounded-full shadow-lg hover:bg-white/90 disabled:opacity-50 z-20"
          style={{ border: "none", backdropFilter: "blur(4px)" }}
        >
          <span className="text-2xl font-bold text-gray-700">&#8594;</span>
        </button>
      </div>
    </>
  );
};
