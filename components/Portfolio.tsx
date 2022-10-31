import portfolio from "../data.json" assert { type: "json" };

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
    <section className="h-full mt-96 flex-col">
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

export default Portfolio;
