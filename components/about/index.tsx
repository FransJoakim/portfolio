import { useEffect, useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { clientWindowViewState } from "../../pages/index";
import About from "./About";
import { inViewAtom } from "../../features/ScrollPosition";

export default function Main() {
  const clientWindowView = useRecoilValue(clientWindowViewState);
  const sectionRef = useRef<HTMLDivElement>(null);
  const setInView = useSetRecoilState(inViewAtom);

  const scrollEntryPoint = -500;
  const scrollExitPoint = 300;

  useEffect(() => {
    if (sectionRef.current) {
      if (
        clientWindowView > scrollEntryPoint &&
        clientWindowView < scrollExitPoint
      ) {
        const opacity = 0 + (clientWindowView - scrollEntryPoint) / 200;
        sectionRef.current.style.opacity = opacity.toString();
        sectionRef.current.style.visibility = "visible";
        setInView("about");
      }

      if (
        clientWindowView > scrollExitPoint &&
        clientWindowView < scrollExitPoint + 200
      ) {
        const opacity = 1 - (clientWindowView - scrollExitPoint) / 200;
        sectionRef.current.style.opacity = opacity.toString();
        sectionRef.current.style.visibility = "visible";
        setInView("about");
      }

      if (clientWindowView > scrollExitPoint + 200) {
        sectionRef.current.style.visibility = "hidden";
      }
    }
  }, [clientWindowView, scrollEntryPoint, setInView]);

  return (
    <div ref={sectionRef}>
      <About />
    </div>
  );
}
