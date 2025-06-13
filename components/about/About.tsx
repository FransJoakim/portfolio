import { TechStack } from "./TechStack";
import { BoxAnimation, SmallBoxAnimation } from "./BoxAnimation";
import Info from "./Info";
import { FaArrowDownLong } from "react-icons/fa6";
import styles from "../../styles/About.module.scss";

const About = () => {
  return (
    <>
      <section
        // About section layout and breakpoints
        id={styles.about}
        className="fixed w-screen h-screen flex justify-end"
      >
        <div
          // Container layout and breakpoints
          className="w-full lg:w-1/2 h-full flex flex-col justify-center lg:justify-between mr-16 p-12 xl:mr-16 xl:p-12 lg:mr-8 lg:p-12 md:mr-4 md:p-12 sm:mr-0 sm:p-8 xs:p-4"
        >
          <Info />
          <BoxAnimation />
          <SmallBoxAnimation />
          <TechStack />
        </div>
      </section>
      <div className="fixed w-screen h-[50px] bottom-0 flex flex-col justify-center items-center">
        {/* @ts-ignore */}
        <FaArrowDownLong color="gray" className="jumpAnimation" />
        <p className="text-xs text-gray-500">Scroll down</p>
      </div>
    </>
  );
};

export default About;
