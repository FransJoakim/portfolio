import { useEffect } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import portfolioProjects from "../../data.json" assert { type: "json" };
import styles from "../../styles/Home.module.scss";
import Display from "./Display";
import Menu from "./Menu";
import { clientWindowViewState } from "../../pages/index";

export interface portfolioProject {
  title: string;
  type: string;
  technologies: string[];
  description: string;
  img: string;
  URL: string;
  date: string;
}

export const projectsAtom = atom<portfolioProject[]>({
  key: "projects",
  default: portfolioProjects,
});

export const displayedProjectAtom = atom<portfolioProject>({
  key: "displayedProject",
  default: portfolioProjects[0],
});

const Portfolio = () => {
  const clientWindowView = useRecoilValue(clientWindowViewState);
  const setDisplayedProject = useSetRecoilState(displayedProjectAtom);
  const inView = clientWindowView > 500;

  useEffect(() => {
    const num = -500 + clientWindowView;

    if (num < 500) {
      setDisplayedProject(portfolioProjects[0]);
    } else if (num < 800) {
      setDisplayedProject(portfolioProjects[1]);
    } else if (num < 1100) {
      setDisplayedProject(portfolioProjects[2]);
    } else if (num < 1400) {
      setDisplayedProject(portfolioProjects[3]);
    } else if (num < 1700) {
      setDisplayedProject(portfolioProjects[4]);
    }
  }, [clientWindowView, setDisplayedProject]);

  return (
    <section className={styles.portfolio}>
      <div id="portfolio" className="hidden">
        Portfolio
      </div>
      <div className={styles.portfolio_wrapper}>
        <Display />
        <Menu inView={inView} />
      </div>
      {/* ------------ Background SVG -------------- */}
      <div id={styles.bracketAnimation_overlay} className="w-full h-full">
        <div className={styles.wrap}>
          <svg
            className={styles.svg}
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
    </section>
  );
};

export default Portfolio;
