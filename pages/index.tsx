import { useEffect } from "react";
import { atom, useSetRecoilState } from "recoil";
import type { NextPage } from "next";
import { Header } from "../components/header/Header";
import About from "../components/about";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";
import styles from "../styles/Home.module.scss";
import { ScrollPosition } from "../lib/utils";

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
      <About />
      <ScrollPosition
        scrollEntryPoint={500}
        scrollExitPoint={1300}
        name="portfolio"
      >
        <Portfolio />
      </ScrollPosition>
      <ScrollPosition
        scrollEntryPoint={1300}
        scrollExitPoint={3000}
        name="contact"
      >
        <Contact />
      </ScrollPosition>
    </div>
  );
};

export default Home;
