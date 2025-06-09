import { TechStack } from "./TechStack";
import styles from "../../styles/About.module.scss";
import { BoxAnimation, SmallBoxAnimation } from "./BoxAnimation";
import Info from "./Info";
import { FaArrowDownLong } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <section id={styles.about}>
        <div className={styles.container}>
          <Info />
          <BoxAnimation />
          <SmallBoxAnimation />
          <TechStack />
        </div>
      </section>
      <div className="fixed w-screen h-[50px] bottom-0 flex flex-col justify-center items-center">
        {/* @ts-ignore */}
        <FaArrowDownLong color="gray" className={styles.jumpAnimation} />
        <p className="text-xs text-gray-500">Scroll down</p>
      </div>
    </>
  );
};

export default About;
