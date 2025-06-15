import React, { useState } from "react";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { portfolioProject } from "../../lib/types";
import Image from "next/image";

interface Props {
  data: portfolioProject[];
}

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

// const foo = GrFormPrevious as JSX.Element;

export const Carousel = ({ data }: Props) => {
  // State to keep track of the currently active slide
  const [activeSlide, setactiveSlide] = useState(1);

  // Go to the next slide if not at the end
  const next = React.useCallback(() => {
    if (activeSlide < data.length - 1) setactiveSlide(activeSlide + 1);
  }, [activeSlide, data.length]);

  // Go to the previous slide if not at the beginning
  const prev = React.useCallback(() => {
    if (activeSlide > 0) setactiveSlide(activeSlide - 1);
  }, [activeSlide]);

  // Ref to persist wheel lock state across renders
  const lastWheelTimeRef = React.useRef(0);
  const WHEEL_DEBOUNCE_MS = 300;

  React.useEffect(() => {
    // Handle mouse wheel events for scrolling left/right
    const handleWheel = (e: WheelEvent) => {
      // a timestamp-based debounce for the wheel event,
      // ensuring that only one next/prev action is triggered per scroll gesture,
      // regardless of how many wheel events fire.
      const now = Date.now();
      if (now - lastWheelTimeRef.current < WHEEL_DEBOUNCE_MS) return;
      if (Math.abs(e.deltaX) < 20 && Math.abs(e.deltaY) < 20) return; // Ignore tiny scrolls
      if (e.deltaX > 0 || e.deltaY > 0) {
        next(); // Scroll right/left triggers next
      } else if (e.deltaX < 0 || e.deltaY < 0) {
        prev(); // Scroll left/right triggers prev
      }
      lastWheelTimeRef.current = now;
      e.preventDefault(); // Prevent default scrolling behavior
    };
    // Handle touch events for swiping left/right, only trigger once per swipe
    const handleTouch = (() => {
      let startX = 0;
      let triggered = false;
      return {
        touchstart: (e: TouchEvent) => {
          startX = e.touches[0].clientX; // Save start position
          triggered = false;
        },
        touchend: (e: TouchEvent) => {
          if (triggered) return;
          const endX = e.changedTouches[0].clientX; // Get end position
          if (startX - endX > 30) {
            next(); // Swipe left triggers next
            triggered = true;
          } else if (endX - startX > 30) {
            prev(); // Swipe right triggers prev
            triggered = true;
          }
        },
      };
    })();

    // Handle keyboard arrow keys for navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        next(); // Right arrow triggers next
      } else if (e.key === "ArrowLeft") {
        prev(); // Left arrow triggers prev
      }
    };

    // Get the carousel container element
    const carousel = document.getElementById("carousel-container");
    if (carousel) {
      // Add event listeners for wheel and touch
      carousel.addEventListener("wheel", handleWheel, { passive: false });
      carousel.addEventListener("touchstart", handleTouch.touchstart);
      carousel.addEventListener("touchend", handleTouch.touchend);
    }
    // Add global keydown event listener
    window.addEventListener("keydown", handleKeyDown);
    // Clean up event listeners on unmount
    return () => {
      if (carousel) {
        carousel.removeEventListener("wheel", handleWheel);
        carousel.removeEventListener("touchstart", handleTouch.touchstart);
        carousel.removeEventListener("touchend", handleTouch.touchend);
      }
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeSlide, data.length, next, prev]);

  return (
    <>
      {/* Main container for the carousel and buttons */}
      <div className="flex flex-col justify-center items-center w-full h-screen">
        {/* carousel */}
        <div
          id="carousel-container"
          className="relative [perspective:1000px] [transform-style:preserve-3d] w-[362px] h-[272px] mx-auto"
        >
          {/* Render each slide */}
          {data.map((item, i) => (
            <React.Fragment key={i}>
              <div
                className="absolute bg-white/70 top-0 w-[362px] h-[272px] rounded-[12px] flex justify-center items-center transition-[transform,opacity,visibility] duration-500 ease-in-out"
                style={{
                  boxShadow: `0 5px 20px #aaaa30`,
                  ...getCardStyles(activeSlide, i),
                }}
              >
                {/* Slide content */}
                <div className="flex flex-col text-white p-[30px] items-start font-sans">
                  {item.purpose} : {item.type} : {item.date}
                </div>
              </div>
              {/* Slide shadow/gradient */}
              <div
                className="absolute w-full h-[60px] -bottom-[60px] rounded-[12px] transition-[transform,opacity,visibility] duration-500 ease-in-out"
                style={{
                  background: `linear-gradient(to bottom, #ffff40, transparent)`,
                  ...getCardStyles(activeSlide, i),
                }}
              />
            </React.Fragment>
          ))}
        </div>
        {/* carousel */}

        {/* Navigation buttons */}
        {/* <div className="pt-[100px] flex">
          <button className="cursor-pointer btn" onClick={prev} color="#fff">
            prev
          </button>
          <button
            className="cursor-pointer btn ml-[40px]"
            onClick={next}
            color="#fff"
          >
            next
          </button>
        </div> */}
      </div>
    </>
  );
};

export const Card = ({ project }: { project: portfolioProject }) => {
  const { title, img, date, URL, description, technologies, type, publicRepo } =
    project;
  // const displayedProject = useRecoilValue(displayedProjectAtom);
  // const size = useWindowSize();
  // if (!size) return null;

  // const isDisplayed = title === displayedProject.title;

  const visitSite = () => {
    window.open(URL, "_blank");
  };

  return (
    <div onClick={visitSite}>
      <div className="w-[32rem] h-[32rem] mx-12 flex flex-col rounded-[5px] overflow-hidden">
        <div className="w-full h-[20rem] p-4 px-6 bg-white/70 mb-[-0.125rem] overflow-hidden">
          <h2 className="text-4xl">{title}</h2>
          <p>
            {type} : {date}
          </p>
          <p className="my-2 text-base">{description}</p>
        </div>
        <Image
          className="w-full"
          src={`/projectPhotos/${img}.png`}
          alt={`Screenshot of the ${title} site`}
          width={512}
          height={320}
        />
      </div>
    </div>
  );
};
