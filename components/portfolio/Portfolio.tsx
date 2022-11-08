import { atom, useRecoilValue } from "recoil";
import { useEffect, useRef } from "react";
import { clientWindowViewState } from "../../pages";
import portfolioProjects from "../../data.json" assert { type: "json" };
import styles from "../../styles/Home.module.scss";
import Display from "./Display";
import Menu from "./Menu";

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
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const scrollEntryHeight = 500;
      const scrollExitHeight = 1000;

      if (clientWindowView < scrollEntryHeight) {
        sectionRef.current.style.visibility = "hidden";
      }

      if (
        clientWindowView > scrollEntryHeight &&
        clientWindowView < scrollExitHeight
      ) {
        const opacity = 0 + (clientWindowView - scrollEntryHeight) / 200;
        sectionRef.current.style.opacity = opacity.toString();
        sectionRef.current.style.visibility = "visible";
      }

      if (
        clientWindowView > scrollExitHeight &&
        clientWindowView < scrollExitHeight + 200
      ) {
        const opacity = 1 - (clientWindowView - scrollExitHeight) / 200;
        sectionRef.current.style.opacity = opacity.toString();
        sectionRef.current.style.visibility = "visible";
      }

      if (clientWindowView > scrollExitHeight + 200) {
        sectionRef.current.style.visibility = "hidden";
      }
    }
  }, [clientWindowView]);

  return (
    <section ref={sectionRef} className={styles.portfolio}>
      <div id="portfolio" className="hidden">
        Portfolio
      </div>
      <div className={styles.portfolio_wrapper}>
        <Display />
        <Menu />
      </div>
    </section>
  );
};

export default Portfolio;
