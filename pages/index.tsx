"use client";
import { useEffect } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import type { NextPage } from "next";
import { Header } from "../components/header/Header";
import About from "../components/about";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";
import styles from "../styles/Home.module.scss";
import {
  inViewAtom,
  ScrollPosition,
  SectionScrollPosition,
} from "../lib/utils";

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
      targetScrollPosition =
        (SectionScrollPosition.PortfolioEntry +
          SectionScrollPosition.PortfolioExit) /
        2;
    } else if (inView === "contact") {
      targetScrollPosition =
        (SectionScrollPosition.ContactEntry +
          SectionScrollPosition.ContactExit) /
        2;
    }

    // Smoothly scroll to the target position
    window.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth",
    });
  };

  // Set a timeout to detect when scrolling stops
  const scrollTimeout = setTimeout(() => {
    adjustScrollToSection();
  }, 500); // Adjust delay as needed

  const handleScroll = () => {
    setClientWindowView(window.scrollY);

    // Clear previous timeout
    clearTimeout(scrollTimeout);
  };

  useEffect(() => {
    window.scroll(0, 1);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id={styles.page} className="flex-col h-screen">
      <Header />
      <About />
      <ScrollPosition
        scrollEntryPoint={SectionScrollPosition.PortfolioEntry}
        scrollExitPoint={SectionScrollPosition.PortfolioExit}
        name="portfolio"
      >
        <Portfolio />
      </ScrollPosition>
      <ScrollPosition
        scrollEntryPoint={SectionScrollPosition.ContactEntry}
        scrollExitPoint={SectionScrollPosition.ContactExit}
        name="contact"
      >
        <Contact />
      </ScrollPosition>
      {/* Spacer to allow scrolling through all sections */}
      <div style={{ height: 1000 }} />
    </div>
  );
};

export default Home;
