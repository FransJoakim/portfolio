import { useEffect, useRef } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { clientWindowViewState } from "../pages/index";

type Props = {
  scrollEntryPoint: number;
  scrollExitPoint: number;
  name: string;
  children: JSX.Element;
};

export const inViewAtom = atom({
  key: "inView",
  default: "about",
  dangerouslyAllowMutability: true,
});

const ScrollPosition = ({
  scrollEntryPoint,
  scrollExitPoint,
  name,
  children,
}: Props) => {
  const clientWindowView = useRecoilValue(clientWindowViewState);
  const setInView = useSetRecoilState(inViewAtom);
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
        setInView(name);
      }

      if (
        clientWindowView > scrollExitPoint &&
        clientWindowView < scrollExitPoint + 200
      ) {
        const opacity = 1 - (clientWindowView - scrollExitPoint) / 200;
        sectionRef.current.style.opacity = opacity.toString();
        sectionRef.current.style.visibility = "visible";
        setInView(name);
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
