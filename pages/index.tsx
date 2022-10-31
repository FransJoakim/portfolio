import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import portfolio from "../data.json" assert { type: "json" };
import { Scrollspy } from "../lib/scrollspy";
import Animation from "../components/animation";

const Home: NextPage = () => {
  return (
    <div className="flex-col">
      <Scrollspy
        ids={["portfolio", "about", "contact"]}
        itemContainerClassName="scrollSpyContainer"
        activeItemClassName="active"
        itemClassName="spyItemClass"
      />
      <Header />
      <Animation />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
};

export default Home;

const Header = () => {
  return (
    <header className="h-screen items-center content-center">
      <img className="m-3" src="./me.png" />
      <div className="m-3 flex-col items-center">
        <p className="text-9xl">Frans Joakim</p>
        <p className="text-6xl">Løitegaard Titulaer</p>
        <p className="text-8xl">Web developer</p>
      </div>
    </header>
  );
};

interface portfolioProject {
  title: string;
  type: string;
  technologies: string[];
  description: string;
  img: string;
  URL: string;
  date: string;
}

const Portfolio = () => {
  return (
    <section className="h-full flex-col">
      <h1 id="portfolio" className="mt-20 text-9xl">
        Portfolio
      </h1>
      <div className="w-4/5 flex flex-wrap justify-around">
        {portfolio.map((project: portfolioProject) => {
          return <ProjectCard project={project} key={project.title} />;
        })}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: portfolioProject }) => {
  const { title, type, technologies, description, URL, img, date } = project;
  return (
    <div className="w-1/5 flex-col bg-red-400 m-5">
      <a href={URL}>
        <img src={`./${img}.png`} className="w-100" />
        <div className="flex-col h-40">
          <p className="text-2xl">{title}</p>
          <p className="text-l">{type}</p>
          <p className="text-l">{description}</p>
          <p className="text-l">{date}</p>
          <p className="text-l text-center">
            {technologies.map((tech) => tech + ", ")}
          </p>
        </div>
      </a>
    </div>
  );
};

const About = () => {
  return (
    <section className="h-screen">
      <h1 id="about" className="text-9xl">
        About
      </h1>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="h-full">
      <h1 id="contact" className="text-9xl">
        Contact
      </h1>
    </section>
  );
};
