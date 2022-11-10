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
    // setClientWindowView(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setClientWindowView(window.scrollY);
  };

  return (
    <div id={styles.page} className="flex-col h-screen">
      <Header />
      <Main />
      {/* <ScrollPosition scrollEntryPoint={-500} scrollExitPoint={300}>
        <Main />
      </ScrollPosition> */}
      <ScrollPosition scrollEntryPoint={500} scrollExitPoint={2300}>
        <Portfolio />
      </ScrollPosition>
      <ScrollPosition scrollEntryPoint={2400} scrollExitPoint={3000}>
        <Contact />
      </ScrollPosition>
    </div>
  );
};

export default Home;
