import { useEffect } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import portfolioProjects from "../../data.json" assert { type: "json" };
import styles from "../../styles/Home.module.scss";
import Display from "./Display";
import Menu from "./Menu";
import BracketAnimation from "../BracketAnimation";
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
  }, [clientWindowView]);

  return (
    <section className={styles.portfolio}>
      <div id="portfolio" className="hidden">
        Portfolio
      </div>
      <div className={styles.portfolio_wrapper}>
        <Display />
        <Menu />
      </div>
      <BracketAnimation />
    </section>
  );
};

export default Portfolio;
