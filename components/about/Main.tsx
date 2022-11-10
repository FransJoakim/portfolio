import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { clientWindowViewState } from "../../pages/index";
import About from "./About";
import { BoxAnimation } from "../BoxAnimation";

export function Main() {
  const clientWindowView = useRecoilValue(clientWindowViewState);
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollExitPoint = 300;

  useEffect(() => {
    if (sectionRef.current) {
      if (clientWindowView < scrollExitPoint) {
        const opacity = 0 + (clientWindowView - -500) / 200;
        sectionRef.current.style.opacity = opacity.toString();
        sectionRef.current.style.visibility = "visible";
      }

      if (
        clientWindowView > scrollExitPoint &&
        clientWindowView < scrollExitPoint + 200
      ) {
        const opacity = 1 - (clientWindowView - scrollExitPoint) / 200;
        sectionRef.current.style.opacity = opacity.toString();
        sectionRef.current.style.visibility = "visible";
      }

      if (clientWindowView > scrollExitPoint + 200) {
        sectionRef.current.style.visibility = "hidden";
      }
    }
  }, [clientWindowView]);

  return (
    <div ref={sectionRef}>
      <BoxAnimation />
      <About />
    </div>
  );
}
