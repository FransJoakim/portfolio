import { TechStack } from "./TechStack";
import styles from "../../styles/About.module.scss";
import { BoxAnimation, SmallBoxAnimation } from "./BoxAnimation";
import Info from "./Info";

const About = () => {
  return (
    <section id={styles.about}>
      <div className={styles.container}>
        <Info />
        <BoxAnimation />
        <SmallBoxAnimation />
        <TechStack />
      </div>
    </section>
  );
};

export default About;
