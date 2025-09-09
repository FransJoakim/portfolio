import Image from "next/image";
import Link from "next/link";

const Info = () => {
  return (
    <div
      className="flex w-full mt-10 items-start md:flex-row flex-col"
      id="profile"
    >
      <div className="min-w-[190px]" id="profilePicture">
        <Image src="/me.png" height="210" width="210" alt="profile picture" />
      </div>
      <div className="ml-7" id="profileInfo">
        <div className="text-[1.1rem] profileInfo_text">
          <div className="flex">
            <h1 id="about" className="text-5xl font-thin">
              About me
            </h1>
            <div className="w-20 ml-4 flex justify-around items-end profileInfo_img">
              <Link href="https://github.com/FransJoakim">
                <Image
                  src="/icons/github.png"
                  height="28"
                  width="28"
                  alt="github link"
                  className="cursor-pointer"
                />
              </Link>
              <Link href="https://www.linkedin.com/in/fransjoakimloitegaardtitulaer/">
                <Image
                  src="/icons/linkedin.png"
                  height="28"
                  width="28"
                  alt="linkedin link"
                  className="cursor-pointer"
                />
              </Link>
            </div>
          </div>
          <h2 className="py-3 mb-[-0.3rem] 2xl:text-3xl text-2xl font-light">
            {"I am a Full-stack"} <b>Software Engineer</b>
          </h2>
          <h3 className="pt-2 fontChange 2xl:text-2xl text-xl font-light">
            {
              "I love working on hard problems with a good team. Let's surprise outselves"
            }
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Info;
