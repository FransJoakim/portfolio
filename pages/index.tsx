import { useEffect } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import type { NextPage } from "next";
import { Header } from "../components/header/Header";
import About from "../components/about";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";
import styles from "../styles/Home.module.scss";
import { inViewAtom, ScrollPosition } from "../lib/utils";

export const clientWindowViewState = atom({
  key: "clientWindowView",
  default: 0,
});

const Home: NextPage = () => {
  const setClientWindowView = useSetRecoilState(clientWindowViewState);
  const inView = useRecoilValue(inViewAtom); // Get the current section in view

  const adjustScrollToSection = () => {
    let targetScrollPosition = 0; // Default to the top of the page

    if (inView === "portfolio") {
      targetScrollPosition = (500 + 1300) / 2; // Midpoint between entry and exit points
    } else if (inView === "contact") {
      targetScrollPosition = (1300 + 3000) / 2; // Midpoint between entry and exit points
    }

    console.log("Adjusting scroll to:", targetScrollPosition);

    // Smoothly scroll to the target position
    window.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth",
    });
  };

  // Set a timeout to detect when scrolling stops
  const scrollTimeout = setTimeout(() => {
    adjustScrollToSection();
  }, 300); // Adjust delay as needed

  const handleScroll = () => {
    setClientWindowView(window.scrollY);

    // Clear previous timeout
    clearTimeout(scrollTimeout);
  };

  useEffect(() => {
    window.scroll(0, 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
