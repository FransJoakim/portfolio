import { useEffect } from "react";
import { atom, useSetRecoilState } from "recoil";
import type { NextPage } from "next";
import { Header } from "../components/header/Header";
import { Main } from "../components/about/Main";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";
import styles from "../styles/Home.module.scss";
import ScrollPosition from "../features/ScrollPosition";

export const clientWindowViewState = atom({
  key: "clientWindowView",
  default: 0,
});

const Home: NextPage = () => {
  const setClientWindowView = useSetRecoilState(clientWindowViewState);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowView(window.scrollY);
  };

  return (
    <div id={styles.page} className="flex-col h-screen">
      <Header />
      <Main />
      {/* <ScrollPosition scrollEntryPoint={-500} scrollExitPoint={300}>
      </ScrollPosition> */}
      <ScrollPosition scrollEntryPoint={500} scrollExitPoint={1000}>
        <Portfolio />
      </ScrollPosition>
      <ScrollPosition scrollEntryPoint={1200} scrollExitPoint={2500}>
        <Contact />
      </ScrollPosition>
    </div>
  );
};

export default Home;
