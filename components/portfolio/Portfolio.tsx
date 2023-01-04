import { atom, useRecoilValue } from "recoil";
import portfolioProjects from "../../data.json" assert { type: "json" };
import styles from "../../styles/Portfolio.module.scss";
import { clientWindowViewState } from "../../pages/index";
import { useWindowSize } from "../../lib/utils";

export interface portfolioProject {
  title: string;
  type: string;
  technologies: string[];
  description: string;
  img: string;
  URL: string;
  publicRepo?: string;
  publicRepo2?: string;
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
  const inView = clientWindowView > 500;
  const projects = useRecoilValue(projectsAtom);

  return (
    <section
      className={styles.portfolio}
      style={{ display: inView ? "" : "none" }}
    >
      {projects.map((project) => (
        <Card project={project} key={project.title} />
      ))}
      <BackgroundAnimation />
    </section>
  );
};

export const Card = ({ project }: { project: portfolioProject }) => {
  const {
    title,
    img,
    date,
    URL,
    description,
    technologies,
    type,
    publicRepo,
    publicRepo2,
  } = project;
  // const displayedProject = useRecoilValue(displayedProjectAtom);
  const size = useWindowSize();
  if (!size) return null;

  // const isDisplayed = title === displayedProject.title;

  const visitSite = () => {
    window.open(URL, "_blank");
  };

  return (
    <div onClick={visitSite}>
      <div className={styles.card}>
        <div className={styles.card_info}>
          <h2 className="text-4xl">{title}</h2>
          <p>
            {type} : {date}
          </p>
          <p className={styles.card_info_description}>{description}</p>
        </div>
        <img
          src={`/projectPhotos/${img}.png`}
          alt={`Screenshot of the ${title} site`}
        />
      </div>
    </div>
  );
};

const BackgroundAnimation = () => {
  return (
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
  );
};

export default Portfolio;
