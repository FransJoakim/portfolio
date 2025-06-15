import { atom, useRecoilValue } from "recoil";
import portfolioProjects from "../../lib/data.json" assert { type: "json" };
import { useWindowSize } from "../../lib/utils";
import { clientWindowViewState, projectsAtom } from "../../lib/atoms";
import { Carousel } from "./Carousel";
import { portfolioProject } from "../../lib/types";
import Image from "next/image";

const Portfolio = () => {
  const clientWindowView = useRecoilValue(clientWindowViewState);
  const inView = clientWindowView > 500;
  const projects = useRecoilValue(projectsAtom);

  return (
    <section
      className="fixed flex h-screen w-screen pt-52 z-10" // Tailwind for .portfolio
      style={{ display: inView ? "" : "none" }}
    >
      <Carousel data={projects} />
      {/* {projects.map((project) => (
        <Card project={project} key={project.title} />
      ))} */}
      <BackgroundAnimation />
    </section>
  );
};

const BackgroundAnimation = () => {
  return (
    <div id="bracketAnimation_overlay" className="w-full h-full">
      <div className="relative w-full h-full flex items-center justify-center">
        <svg
          className="w-64 h-64"
          viewBox="0 0 256 256"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M86.749,44.29492,33.48242,128,86.749,211.70508a7.99973,7.99973,0,1,1-13.498,8.58984l-56-88a7.99826,7.99826,0,0,1,0-8.58984l56-88a7.99973,7.99973,0,0,1,13.498,8.58984Zm152,79.41016-56-88a7.99973,7.99973,0,0,0-13.498,8.58984L222.51758,128,169.251,211.70508a7.99973,7.99973,0,1,0,13.498,8.58984l56-88A7.99826,7.99826,0,0,0,238.749,123.70508Z"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
