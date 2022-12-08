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
        <a href={URL} target="_blank" rel="noopener noreferrer">
          <Image
            src={`/projectPhotos/${img}.png`}
            layout="fill"
            objectFit="contain"
            alt="image of website"
          />
        </a>
      </div>
    </div>
  );
}

const ProjectInfo = () => {
  const {
    title,
    description,
    technologies,
    date,
    type,
    URL,
    publicRepo,
    publicRepo2,
  } = useRecoilValue(displayedProjectAtom);
  return (
    <div className={styles.projectInfo}>
      <p>Project:</p>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {type} : {date}
      </p>
      <p className={styles.projectInfo_description}>{description}</p>
      <h3 className="text-l">
        <b>Tech</b>
      </h3>
      <p>
        {technologies.map((tech) => {
          return <span key={tech}>{tech + ", "}</span>;
        })}
      </p>
      <div className="mt-12">
        <h3 className="text-l">
          <b>Available at</b>
        </h3>
        <a href={URL} target="_blank" rel="noopener noreferrer">
          <u>{URL}</u>
        </a>
      </div>
      <div className="mt-2">
        <h3 className="text-l">
          <b>Project repositor{!publicRepo2 ? "y" : "ies"}</b>
        </h3>
        <a href={publicRepo} target="_blank" rel="noopener noreferrer">
          <u>{publicRepo}</u>
        </a>
        {publicRepo2 && (
          <>
            <br />
            <a href={publicRepo2} target="_blank" rel="noopener noreferrer">
              <u>{publicRepo2}</u>
            </a>
          </>
        )}
      </div>
    </div>
  );
};
