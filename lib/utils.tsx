import { useEffect, useRef, useState } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { clientWindowViewState } from "../lib/atoms";

type sizeType =
  | undefined
  | {
      width: number;
      height: number;
    };

export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<sizeType>(undefined);

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

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

export const ScrollPosition = ({
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
  }, [clientWindowView, name, scrollEntryPoint, scrollExitPoint, setInView]);
  return (
    <div ref={sectionRef} className="w-full h-full">
      {children}
    </div>
  );
};

export const sendMail = async (email: string, message: string) => {
  if (!process.env.NEXT_PUBLIC_SERVER_URL) return console.log("@notSendMail");
  console.log("@sendMail");
  const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + "/api", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, message }),
  });
  console.log(await response);
};

export enum SectionScrollPosition {
  AboutEntry = -500,
  AboutExit = 1100,
  PortfolioEntry = 1300,
  PortfolioExit = 2100,
  ContactEntry = 2300,
  ContactExit = 3100,
}
