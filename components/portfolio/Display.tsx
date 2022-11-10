import { useRecoilValue } from "recoil";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.scss";
import { displayedProjectAtom } from "./Portfolio";

export default function Display() {
  const { img, URL } = useRecoilValue(displayedProjectAtom);
  return (
    <div className={styles.displayedProject}>
      <ProjectInfo />
      <div className={styles.displayedProject_image}>
        <Link href={URL}>
          <Image
            src={`/projectPhotos/${img}.png`}
            layout="fill"
            objectFit="contain"
          />
        </Link>
      </div>
    </div>
  );
}

const ProjectInfo = () => {
  const { title, description, technologies, date, type, URL } =
    useRecoilValue(displayedProjectAtom);
  return (
    <div className={styles.projectInfo}>
      <p>Project:</p>
      <h2 className="text-4xl">{title}</h2>
      <p>{type}</p>
      <p className={styles.projectInfo_description}>{description}</p>
      <h3 className="text-2xl">
        <b>Tech</b>
      </h3>
      <p>
        {technologies.map((tech) => {
          return <span key={tech}>{tech + ", "}</span>;
        })}
      </p>
      <div className="mt-2">
        <h4 className="text-l">
          <b>Published</b>
        </h4>
        <p>{date}</p>
      </div>
      <div className="mt-2">
        <h4 className="text-l">
          <b>Adress</b>
        </h4>
        <a href={URL} target="_blank">
          {URL}
        </a>
      </div>
    </div>
  );
};
