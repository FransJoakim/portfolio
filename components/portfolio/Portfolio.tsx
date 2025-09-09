import { useRecoilValue } from "recoil";
import { clientWindowViewState } from "../../lib/atoms";
import { Carousel } from "./Carousel";
import styles from "../../styles/Portfolio.module.scss";

const Portfolio = () => {
  const clientWindowView = useRecoilValue(clientWindowViewState);
  const inView = clientWindowView > 500;

  return (
    <section
      className="fixed flex h-screen w-screen mt-52 z-10"
      style={{ display: inView ? "" : "none" }}
    >
      <Carousel />

      <BackgroundAnimation />
    </section>
  );
};

const BackgroundAnimation = () => {
  return (
    <div id={styles.bracketAnimation_overlay} className="w-full h-full">
      <div className="relative w-full h-full flex items-center justify-center">
        <svg
          className="w-64 h-64"
          viewBox="0 0 256 256"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M86.749,44.29492,33.48242,128,86.749,211.70508a7.99973,7.99973,0,1,1-13.498,8.58984l-56-88a7.99826,7.99826,0,0,1,0-8.58984l56-88a7.99973,7.99973,0,0,1,13.498,8.58984Zm152,79.41016-56-88a7.99973,7.99973,0,0,0-13.498,8.58984L222.51758,128,169.251,211.70508a7.99973,7.99973,0,1,0,13.498,8.58984l56-88A7.99826,7.99826,0,0,0,238.749,123.70508Z"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
