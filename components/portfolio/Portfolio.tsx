import { atom } from "recoil";
import portfolioProjects from "../../data.json" assert { type: "json" };
import styles from "../../styles/Home.module.scss";
import Display from "./Display";
import Menu from "./Menu";
import BracketAnimation from "../BracketAnimation";

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
  console.log("hi");

  return (
    <section className={styles.portfolio}>
      <div id="portfolio" className="hidden">
        Portfolio
      </div>
      <div className={styles.portfolio_wrapper}>
        <Display />
        <Menu />
      </div>
      {/* <BracketAnimation /> */}
    </section>
  );
};

export default Portfolio;
