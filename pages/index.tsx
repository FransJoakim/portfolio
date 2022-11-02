import type { NextPage } from "next";
import { Header } from "../components/header/Header";
import { Main } from "../components/about/Main";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  return (
    <div className="flex-col h-screen">
      <Header />
      <Main />
      <Portfolio />
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
