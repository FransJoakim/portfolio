import Image from "next/image";

const About = () => {
  return (
    <section className="w-full h-1/2 mt-20 flex justify-end">
      <div className="w-5/12 h-full mr-32 p-12 border-solid border-white border-2">
        <div className="flex justify-between items-start mt-4">
          <Info />
          <Image src="/me.png" height="200em" width="200em" />
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

const TechStack = () => {
  const height = 16;

  return (
    <>
      <div className="text-xl font-bold">Tech stack</div>
      <div className="flex flex-col W-full">
        <div className="flex W-full justify-between items-center">
          <img src="/icons/html.png" alt="" className={`h-${height}`} />
          <img src="/icons/css.png" alt="" className={`h-${height}`} />
          <img src="/icons/JS.png" alt="" className={`h-${height}`} />
          <img src="/icons/typescript.png" alt="" className={`h-${height}`} />
        </div>
        <div className="flex W-full justify-between items-center">
          <img src="/icons/react.png" alt="" className={`h-${height}`} />
          <img src="/icons/redux.png" alt="" className={`h-${height}`} />
          <img src="/icons/recoil.png" alt="" className={`h-${height}`} />
          <img src="/icons/NextJs.png" alt="" className={`h-${height}`} />
        </div>
        <div className="flex W-full justify-between items-center">
          <img src="/icons/sass.png" alt="" className={`h-${height}`} />
          <img src="/icons/tailwind.png" alt="" className="h-12 w-48" />
          <img src="/icons/bootstrap.png" alt="" className="h-12" />
        </div>
        <div className="flex W-full justify-between items-center">
          <img src="/icons/firebase.png" alt="" className={`h-${height}`} />
          <img src="/icons/gcp.png" alt="" className={`h-${height}`} />
          <img src="/icons/docker.png" alt="" className={`h-${height}`} />
          <img src="/icons/git.png" alt="" className={`h-${height}`} />
        </div>
        <div className="flex W-full justify-between items-center">
          <img src="/icons/node.png" alt="" className={`h-${height}`} />
          <img src="/icons/express.png" alt="" className="h-12 w-32" />
          <img src="/icons/mongo.png" alt="" className={`h-${height}`} />
          <img src="/icons/postgreSql.png" alt="" className={`h-${height}`} />
        </div>
      </div>
    </>
  );
};
