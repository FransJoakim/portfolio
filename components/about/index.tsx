import { useEffect, useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { clientWindowViewState } from "../../lib/atoms";
import About from "./About";
import { inViewAtom, SectionScrollPosition } from "../../lib/utils";

export default function Main() {
  const clientWindowView = useRecoilValue(clientWindowViewState);
  const sectionRef = useRef<HTMLDivElement>(null);
  const setInView = useSetRecoilState(inViewAtom);

  const scrollEntryPoint = SectionScrollPosition.AboutEntry;
  const scrollExitPoint = SectionScrollPosition.AboutExit;

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
  }, [clientWindowView, scrollEntryPoint, scrollExitPoint, setInView]);

  return (
    <div ref={sectionRef}>
      <About />
    </div>
  );
}
