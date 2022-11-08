import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { clientWindowViewState } from "../../pages";
import About from "./About";
import { BoxAnimation } from "./BoxAnimation";

export function Main() {
  const clientWindowView = useRecoilValue(clientWindowViewState);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollValueShowLimit = 300;

    if (clientWindowView < scrollValueShowLimit && sectionRef.current) {
      sectionRef.current.style.opacity = "1";
    }

    if (clientWindowView > scrollValueShowLimit && sectionRef.current) {
      const opacity = 1 - (clientWindowView - scrollValueShowLimit) / 200;
      sectionRef.current.style.opacity = opacity.toString();
    }
  }, [clientWindowView]);

  return (
    <div ref={sectionRef}>
      <BoxAnimation />
      <About />
    </div>
  );
}
