/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRecoilValue } from "recoil";
import { clientWindowViewState, projectsAtom } from "../../lib/atoms";
import { SectionScrollPosition } from "../../lib/utils";
import Link from "next/link";
import { BiLogoGithub } from "react-icons/bi";

// Calculate styles for each slide based on its position
const getCardStyles = (activeSlide: number, index: number) => {
  if (activeSlide === index)
    return {
      opacity: 1,
      transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
      zIndex: 10,
    };
  else if (activeSlide - 1 === index)
    return {
      opacity: 1,
      transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
      zIndex: 9,
    };
  else if (activeSlide + 1 === index)
    return {
      opacity: 1,
      transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
      zIndex: 9,
    };
  else if (activeSlide - 2 === index)
    return {
      opacity: 1,
      transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
      zIndex: 8,
    };
  else if (activeSlide + 2 === index)
    return {
      opacity: 1,
      transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
      zIndex: 8,
    };
  else if (index < activeSlide - 2)
    return {
      opacity: 0,
      transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
      zIndex: 7,
    };
  else if (index > activeSlide + 2)
    return {
      opacity: 0,
      transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
      zIndex: 7,
    };
};

export const Carousel = () => {
  // Get the current scroll position from Recoil
  const clientWindowView = useRecoilValue(clientWindowViewState);
  const projects = useRecoilValue(projectsAtom);

  // Calculate the scrollable range for the Portfolio section
  const scrollEntry = SectionScrollPosition.PortfolioEntry + 100; // Adjusted for better visibility
  const scrollExit = SectionScrollPosition.PortfolioExit - 100; // Adjusted for better visibility
  const scrollRange = scrollExit - scrollEntry;
  const numCards = projects.length;
  // Calculate which card should be active based on scroll position
  let activeSlide = 0;
  const ratio = (clientWindowView - scrollEntry) / scrollRange;
  activeSlide = Math.floor(ratio * numCards);
  if (activeSlide >= numCards) activeSlide = numCards - 1;
  if (activeSlide < 0) activeSlide = 0;

  return (
    <>
      {/* Main container for the carousel and buttons */}
      <div className="flex justify-start items-center h-full w-full">
        {/* carousel */}
        <div
          id="carousel-container"
          className="relative [perspective:1000px] ml-[10%] [transform-style:preserve-3d] h-3/5 w-screen translate-y-[-25%]"
        >
          {/* Render each slide */}
          {projects.map((item, i) => (
            <div
              key={i}
              className="absolute bg-white/80 top-0 w-[70%] h-full rounded-[12px] flex justify-center items-center transition-[transform,opacity,visibility] duration-500 ease-in-out"
              style={{
                boxShadow: `0 5px 20px #aaaa30`,
                ...getCardStyles(activeSlide, i),
              }}
            >
              {/* Slide content */}
              <div className="pl-10 w-3/5">
                <img
                  className="w-full"
                  src={`/projectPhotos/${item.img}.png`}
                  alt={`Screenshot of the ${item.title} site`}
                />
              </div>
              <div className="w-full h-[20rem] p-4 px-6 bg-white/70 mb-[-0.125rem] flex-1 overflow-hidden">
                <h2 className="text-4xl">{item.title}</h2>
                <p>
                  {item.type} : {item.date}
                </p>
                <p className="my-2 text-base">{item.description}</p>
                <div>
                  {item.publicRepo && (
                    <Link href={item.publicRepo}>
                      <div>
                        {/* @ts-ignore */}
                        <BiLogoGithub />
                        View Project on Github
                      </div>
                    </Link>
                  )}
                  {item.URL && (
                    <Link
                      href={item.URL}
                      className="text-blue-500 hover:underline"
                    >
                      {item.linkText || "Visit the site"}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* carousel */}
      </div>
    </>
  );
};
