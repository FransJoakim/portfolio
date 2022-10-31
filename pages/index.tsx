import type { NextPage } from "next";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  return (
    <div className="flex-col">
      <Header />
      <Main />
      {/* <Portfolio />
      <Contact /> */}
    </div>
  );
};

export default Home;
