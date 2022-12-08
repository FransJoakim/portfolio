import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { clientWindowViewState } from "../../pages";
// import { Scrollspy } from "../../features/scrollspy";
import classNames from "classnames";

export const Header = () => {
  const clientWindowView = useRecoilValue(clientWindowViewState);

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(60);
  const [boxShadow, setBoxShadow] = useState(0);

  // useEffect(() => {
  //   window.scroll(0, 500 + 200);
  // }, []);

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
      <ul className="scrollSpyContainer"></ul>

      {/* <Scrollspy
        ids={["about", "portfolio", "contact"]}
        itemContainerClassName="scrollSpyContainer"
        activeItemClassName="active"
        itemClassName="spyItemClass"
      /> */}
      <p className="pl-8 text-5xl">Frans Joakim Titulaer</p>
    </header>
  );
};

// const ScrollSpy = () => {
//   const clientWindowView = useRecoilValue(clientWindowViewState);

//   useEffect(() => {
//     window.scroll(0, 500);
//     // const num = -500 + clientWindowView;

//     // if (num < itemEntrence) {
//     // } else if (num < 800) {
//     //   setDisplayedProject(portfolioProjects[1]);
//     // }
//   }, [clientWindowView]);

//   return (
//     <li
//       className={classNames(
//         "spyItemClass",
//         item.inView ? activeItemClassName : null
//       )}
//       key={k}
//       onClick={() => {
//         scrollTo(item.element);
//       }}
//     >
//       {item.element.innerText}
//     </li>
//   );
// };
