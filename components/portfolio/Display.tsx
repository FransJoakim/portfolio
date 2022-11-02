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
  const { title, description, technologies, date } =
    useRecoilValue(displayedProjectAtom);
  return (
    <div>
      <p>Project:</p>
      <h2 className="text-4xl">{title}</h2>
      <p className={styles.displayedProject_description}>{description}</p>
      <h4 className="text-2xl">
        <b>Tech</b>
      </h4>
      <p>
        {technologies.map((tech) => {
          return <span key={tech}>{tech + ", "}</span>;
        })}
      </p>
    </div>
  );
};
