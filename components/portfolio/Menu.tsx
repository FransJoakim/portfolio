import Image from "next/image";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styles from "../../styles/Home.module.scss";
import {
  projectsAtom,
  displayedProjectAtom,
  portfolioProject,
} from "./Portfolio";

export default function Menu() {
  const projects = useRecoilValue(projectsAtom);
  return (
    <section className={styles.menu}>
      {projects.map((project) => (
        <Card project={project} key={project.title} />
      ))}
    </section>
  );
}

export const Card = ({ project }: { project: portfolioProject }) => {
  const { title, description, technologies, img, URL, date } = project;
  const setdisplayedProject = useSetRecoilState(displayedProjectAtom);

  return (
    <div className={styles.card} onClick={() => setdisplayedProject(project)}>
      <div className={styles.card_image}>
        <Image src={`/projectPhotos/${img}.png`} layout="fill" />
      </div>

      <div className={styles.card_text}>
        <p className={styles.card_text_title}>{title}</p>
        <p className={styles.card_text_date}>{date.toUpperCase()}</p>
      </div>
    </div>
  );
};
