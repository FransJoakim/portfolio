import Image from "next/image";
import { TechStack } from "./TechStack";
import styles from "../../styles/Home.module.scss";

const About = () => {
  return (
    <section id={styles.about} className="fixed w-full h-full flex justify-end">
      <div className="w-6/12 h-full flex flex-col justify-between mr-16 p-12">
        <div className="flex w-full mt-10 items-start">
          <Image src="/me.png" height="210em" width="210em" alt="" />
          <Info />
        </div>
        <TechStack />
      </div>
    </section>
  );
};

export default About;

const Info = () => {
  return (
    <div className="ml-7">
      <h2 id="about" className="text-5xl font-thin">
        About
      </h2>
      <p className="py-2">
        Full-stack <b>Web developer</b>
      </p>
      <p className="pt-2">
        <span className={styles.fontChange}>Passion for </span>
        <b>design</b>
      </p>
      <p className="pt-1">
        <b>Experienced</b>
        <span className={styles.fontChange}>
          {" "}
          within operations and support
        </span>
      </p>
      <p className="pt-2">
        <span className={styles.fontChange}>Knowledgable about </span>
        <b>Edtech</b>
      </p>
    </div>
  );
};
