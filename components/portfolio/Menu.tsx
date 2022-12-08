import Image from "next/image";
import { useRecoilValue } from "recoil";
import { clientWindowViewState } from "../../pages";
import styles from "../../styles/Home.module.scss";
import {
  projectsAtom,
  displayedProjectAtom,
  portfolioProject,
} from "./Portfolio";

export default function Menu({ inView }: { inView: boolean }) {
  const projects = useRecoilValue(projectsAtom);
  return (
    <section className={styles.menu} style={{ display: inView ? "" : "none" }}>
      {projects.map((project) => (
        <Card project={project} key={project.title} />
      ))}
    </section>
  );
}

export const Card = ({ project }: { project: portfolioProject }) => {
  const { title, img, date } = project;
  const displayedProject = useRecoilValue(displayedProjectAtom);

  const isDisplayed = title === displayedProject.title;

  return (
    <section
      id={isDisplayed ? styles.displayed_card : ""}
      className={styles.card}
      // onClick={() => setdisplayedProject(project)}
    >
      <div className={styles.card_image}>
        <Image src={`/projectPhotos/${img}.png`} layout="fill" />
      </div>

      <div className={styles.card_text}>
        <p className={styles.card_text_title}>{title}</p>
        <p className={styles.card_text_date}>{date.toUpperCase()}</p>
      </div>
    </section>
  );
};
