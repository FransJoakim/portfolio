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

  const handleScroll = () => {
    setClientWindowView(window.scrollY);
  };

  useEffect(() => {
    window.scroll(0, 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div id={styles.page} className="flex-col h-screen">
      <Header />
      <Main />
      <ScrollPosition
        scrollEntryPoint={500}
        scrollExitPoint={2300}
        name="portfolio"
      >
        <Portfolio />
      </ScrollPosition>
      <ScrollPosition
        scrollEntryPoint={2300}
        scrollExitPoint={3000}
        name="contact"
      >
        <Contact />
      </ScrollPosition>
    </div>
  );
};

export default Home;
