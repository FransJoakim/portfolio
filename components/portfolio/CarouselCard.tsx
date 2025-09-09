import Link from "next/link";
import { portfolioProject } from "../../lib/types";
import { BiLogoGithub } from "react-icons/bi";
import Image from "next/image";

// Calculate styles for each slide based on its position
const getCardStyles = (activeSlide: number, index: number) => {
  // Tighter fan: reduce translateX, translateZ, and rotateY
  const xStep = 200; // was 240
  const zStep = 350; // was 400/500
  const rotateStep = 18; // was 35

  if (activeSlide === index)
    return {
      opacity: 1,
      transform: `translateX(0px) translateZ(0px) rotateY(0deg)`,
      zIndex: 10,
    };
  else if (activeSlide - 1 === index)
    return {
      opacity: 1,
      transform: `translateX(-${xStep}px) translateZ(-${zStep}px) rotateY(${rotateStep}deg)`,
      zIndex: 9,
    };
  else if (activeSlide + 1 === index)
    return {
      opacity: 1,
      transform: `translateX(${xStep}px) translateZ(-${zStep}px) rotateY(-${rotateStep}deg)`,
      zIndex: 9,
    };
  else if (activeSlide - 2 === index)
    return {
      opacity: 1,
      transform: `translateX(-${xStep * 2}px) translateZ(-${
        zStep * 1.25
      }px) rotateY(${rotateStep}deg)`,
      zIndex: 8,
    };
  else if (activeSlide + 2 === index)
    return {
      opacity: 1,
      transform: `translateX(${xStep * 2}px) translateZ(-${
        zStep * 1.25
      }px) rotateY(-${rotateStep}deg)`,
      zIndex: 8,
    };
  else if (index < activeSlide - 2)
    return {
      opacity: 0,
      transform: `translateX(-${xStep * 2}px) translateZ(-${
        zStep * 1.25
      }px) rotateY(${rotateStep}deg)`,
      zIndex: 7,
    };
  else if (index > activeSlide + 2)
    return {
      opacity: 0,
      transform: `translateX(${xStep * 2}px) translateZ(-${
        zStep * 1.25
      }px) rotateY(-${rotateStep}deg)`,
      zIndex: 7,
    };
};

export const CarouselCard = ({
  item,
  index,
  activeSlide,
}: {
  item: portfolioProject;
  index: number;
  activeSlide: number;
}) => {
  return (
    <div
      key={index}
      onClick={() => {
        if (item.URL) window.open(item.URL, "_blank");
      }}
      className="absolute bg-white/95 top-0 w-[60%] h-full rounded-[12px] flex justify-center items-center transition-[transform,opacity,visibility] duration-500 ease-in-out"
      style={{
        boxShadow: "0 4px 32px 0 rgba(0,0,0,0.12)",
        ...getCardStyles(activeSlide, index),
      }}
    >
      {/* Slide content */}
      <div className="pl-10 w-3/5 h-3/5 relative overflow-hidden m-8">
        <Image
          className="w-full"
          src={`/projectPhotos/${item.img}.png`}
          alt={`Screenshot of the ${item.title} site`}
          layout="fill"
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
            <Link
              href={item.publicRepo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-2 hover:underline cursor-pointer mt-4">
                {/* @ts-ignore */}
                <BiLogoGithub size={28} />
                <p className="underline">View Project on Github</p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
