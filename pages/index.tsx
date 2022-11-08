import { useEffect } from "react";
import { atom, useSetRecoilState } from "recoil";
import type { NextPage } from "next";
import { Header } from "../components/header/Header";
import { Main } from "../components/about/Main";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/Contact";
import styles from "../styles/Home.module.scss";

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
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
