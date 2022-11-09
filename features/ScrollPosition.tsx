import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { clientWindowViewState } from "../pages/index";

type Props = {
  scrollEntryPoint: number;
  scrollExitPoint: number;
  children: JSX.Element;
};

const ScrollPosition = ({
  scrollEntryPoint,
  scrollExitPoint,
  children,
}: Props) => {
  const clientWindowView = useRecoilValue(clientWindowViewState);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      if (clientWindowView < scrollEntryPoint) {
        sectionRef.current.style.visibility = "hidden";
      }

      if (
        clientWindowView > scrollEntryPoint &&
        clientWindowView < scrollExitPoint
      ) {
        const opacity = 0 + (clientWindowView - scrollEntryPoint) / 200;
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
    <div ref={sectionRef} className="w-full h-full">
      {children}
    </div>
  );
};

export default ScrollPosition;
