import Image from "next/image";
import { TechStack } from "./TechStack";

const About = () => {
  return (
    <section className="w-full h-full flex justify-end">
      <div className="w-6/12 h-full flex flex-col justify-between mr-16 p-12">
        <div className="flex w-3/4 mt-10 justify-between items-start">
          <Image src="/me.png" height="210em" width="210em" />
          <Info />
        </div>
        <TechStack />
      </div>
    </section>
  );
};

export default About;

const Info = () => {
  return (
    <div>
      <h2 id="about" className="text-5xl font-thin">
        About
      </h2>
      <p>
        Full-stack <b>Web developer</b>
      </p>
      {/* <div>
        Experience working in <b>Edtech</b>;
        <p className="text-sm">
          Municipality of Oslo
          <br />
          The Norwegian Directorate of Education and Training (UDIR)
          <br />
          Unit - Directorate for ICT and joint services in higher education and
          research
        </p>
      </div> */}
    </div>
  );
};
