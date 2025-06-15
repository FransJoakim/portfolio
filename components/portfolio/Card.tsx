import styles from "../../styles/Portfolio.module.scss";
import { useWindowSize } from "../../lib/utils";
import { portfolioProject } from "../../lib/types";

export const Card = ({ project }: { project: portfolioProject }) => {
  const {
    title,
    img,
    date,
    URL,
    description,
    purpose,
    technologies,
    type,
    publicRepo,
  } = project;

  const visitSite = () => {
    window.open(URL, "_blank");
  };

  return (
    <div onClick={visitSite}>
      <div className={styles.card}>
        <div className={styles.card_info}>
          <h2 className="text-4xl">{title}</h2>
          <p>
            {purpose} : {type} : {date}
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
