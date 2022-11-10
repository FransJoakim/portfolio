import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { clientWindowViewState } from "../../pages";
import { Scrollspy } from "../../features/scrollspy";
import styles from "../styles/Home.module.scss";

export const Header = () => {
  const clientWindowView = useRecoilValue(clientWindowViewState);

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
        background: `rgba(255, 255, 255, ${backgroundTransparacy - 0.5})`,
        padding: `${padding}px 2rem 1rem 0`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
        zIndex: "100",
      }}
    >
      <Scrollspy
        ids={["about", "portfolio", "contact"]}
        itemContainerClassName="scrollSpyContainer"
        activeItemClassName="active"
        itemClassName="spyItemClass"
      />
      <p className="pl-8 text-5xl">Frans Joakim Titulaer</p>
    </header>
  );
};
