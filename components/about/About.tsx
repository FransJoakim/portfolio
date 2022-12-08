import Image from "next/image";
import { TechStack } from "./TechStack";

const About = () => {
  return (
    <section className="fixed w-full h-full flex justify-end">
      <div className="w-6/12 h-full flex flex-col justify-between mr-16 p-12">
        <div className="flex w-3/4 mt-10 justify-between items-start">
          <Image src="/me.png" height="210em" width="210em" alt="" />
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
      <p className="py-2">
        Full-stack <b>Web developer</b>
      </p>
      <p className="pt-5">
        Passionate, <b>curious</b>, engaged
      </p>
      <p className="pt-3">
        <b>Experienced</b> working in Edtech
      </p>
      <p className="">operations, and support</p>
    </div>
  );
};
