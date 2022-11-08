import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { clientWindowViewState } from "../../pages";
import { Scrollspy } from "./scrollspy";

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
        background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
        padding: `${padding}px 0px`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
      }}
    >
      <Scrollspy
        ids={["portfolio", "about", "contact"]}
        itemContainerClassName="scrollSpyContainer"
        activeItemClassName="active"
        itemClassName="spyItemClass"
      />
      <p className="pl-8 text-5xl">Frans Joakim Titulaer</p>
    </header>
  );
};
