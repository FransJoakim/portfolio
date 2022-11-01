import Image from "next/image";

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

const TechStack = () => {
  const rect = 80;
  const height = rect;
  const width = rect;

  return (
    <>
      <div className="flex flex-col w-full gap-y-1">
        <div className="flex w-full justify-between items-center relative">
          <Image
            src="/icons/typescript.png"
            alt="TypeScript"
            width={`${width * 0.8}`}
            height={`${height}`}
            objectFit="contain"
          />
          <Image
            src="/icons/JS.png"
            alt="JavaScript"
            width={`${width * 0.8}`}
            height={`${height}`}
            objectFit="contain"
          />
          <Image
            src="/icons/html.png"
            alt="HTML"
            width={`${width}`}
            height={`${height * 0.9}`}
            objectFit="contain"
          />
          <Image
            src="/icons/css.png"
            alt="CSS"
            width={`${width}`}
            height={`${height * 0.9}`}
            objectFit="contain"
          />
        </div>
        <div className="flex w-full justify-between items-center">
          <Image
            src="/icons/react.png"
            alt="React"
            width={`${width * 0.8}`}
            height={`${height}`}
            objectFit="contain"
          />
          <Image
            src="/icons/redux.png"
            alt="Redux"
            width={`${width * 2}`}
            height={`${height}`}
            objectFit="contain"
            style={{ marginLeft: "0.9rem" }}
          />
          <Image
            src="/icons/recoil.png"
            alt="Recoil"
            width={`${width * 1.3}`}
            height={`${height * 0.75}`}
            objectFit="contain"
          />
          <Image
            src="/icons/NextJs.png"
            alt="NextJS"
            width={`${width * 1.5}`}
            height={`${height}`}
            objectFit="contain"
          />
        </div>
        <div className="flex w-full justify-between items-center">
          <Image
            src="/icons/sass.png"
            alt="SASS"
            width={`${width * 0.9}`}
            height={`${height}`}
            objectFit="contain"
          />
          <Image
            src="/icons/tailwind.png"
            alt="TailwindCSS"
            width={`${width * 2.7}`}
            height={`${height}`}
            objectFit="contain"
          />
          <Image
            src="/icons/bootstrap.png"
            alt="React Bootstrap"
            width={`${width * 0.8}`}
            height={`${height}`}
            objectFit="contain"
          />
        </div>
        <div className="flex w-full justify-between items-center">
          <Image
            src="/icons/firebase.png"
            alt="Firebase"
            width={`${width * 0.8}`}
            height={`${height * 0.8}`}
            objectFit="contain"
          />
          <Image
            src="/icons/gcp.png"
            alt="Google Cloud Platform"
            width={`${width * 1.8}`}
            height={`${height}`}
            objectFit="contain"
            style={{ marginLeft: "-1rem" }}
          />
          <Image
            src="/icons/docker.png"
            alt="Docker"
            width={`${width * 2}`}
            height={`${height * 0.9}`}
            objectFit="contain"
          />
          <Image
            src="/icons/git.png"
            alt="Git"
            width={`${width}`}
            height={`${height * 0.8}`}
            objectFit="contain"
          />
        </div>
        <div className="flex w-full justify-between items-center">
          <Image
            src="/icons/node.png"
            alt="NodeJS"
            width={`${width}`}
            height={`${height}`}
            objectFit="contain"
          />
          <Image
            src="/icons/express.png"
            alt="ExpressJS"
            width={`${width * 1.5}`}
            height={`${height}`}
            objectFit="contain"
          />
          <Image
            src="/icons/mongodb.png"
            alt="MongoDB"
            width={`${width * 1.5}`}
            height={`${height}`}
            objectFit="contain"
          />
          <Image
            src="/icons/postgreSql.png"
            alt="PostgreSQL"
            width={`${width}`}
            height={`${height * 0.8}`}
            objectFit="contain"
          />
        </div>
      </div>
    </>
  );
};
