import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { clientWindowViewState } from "../../pages";
import classNames from "classnames";
import { inViewAtom } from "../../features/ScrollPosition";

export const Header = () => {
  const clientWindowView = useRecoilValue(clientWindowViewState);
  const inView = useRecoilValue(inViewAtom);

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(60);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowView / 600;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 60 - backgroundTransparacyVar * 30;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowView]);

  return (
    <header
      style={{
        background: `rgba(255, 255, 255, ${backgroundTransparacy - 0.4})`,
        padding: `${padding}px 2rem 1rem 0`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
        zIndex: "100",
      }}
    >
      <ul className="scrollSpyContainer">
        <li
          className={classNames(
            "spyItemClass",
            inView === "about" ? "active" : null
          )}
          key={"about"}
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          About
        </li>
        <li
          className={classNames(
            "spyItemClass",
            inView === "portfolio" ? "active" : null
          )}
          key={"portfolio"}
          onClick={() => {
            window.scroll(0, 500 + 200);
          }}
        >
          Portfolio
        </li>
        <li
          className={classNames(
            "spyItemClass",
            inView === "contact" ? "active" : null
          )}
          key={"contact"}
          onClick={() => {
            window.scroll(0, 2400 + 200);
          }}
        >
          Contact
        </li>
      </ul>
      <p className="pl-8 text-5xl">Frans Joakim Titulaer</p>
    </header>
  );
};
