import styles from "../../styles/About.module.scss";
import Image from "next/image";
import Link from "next/link";

const Info = () => {
  return (
    <div id={styles.profile} className="flex w-full mt-10 items-start">
      <div id={styles.profilePicture}>
        <Image
          src="/me.png"
          height="210em"
          width="210em"
          alt="profile picture"
        />
      </div>
      <div id={styles.profileInfo} className="ml-7">
        <div className={styles.profileInfo_text}>
          <div className="flex">
            <h2 id="about" className="text-5xl font-thin">
              About me
            </h2>
            <div className={styles.profileInfo_img}>
              <Link href="https://github.com/FransJoakim">
                <Image
                  src="/icons/github.png"
                  height="28em"
                  width="28em"
                  alt="github link"
                  className={styles.link}
                />
              </Link>
              <Link href="https://www.linkedin.com/in/fransjoakimloitegaardtitulaer/">
                <Image
                  src="/icons/linkedin.png"
                  height="28em"
                  width="28em"
                  alt="github link"
                  className={styles.link}
                />
              </Link>
            </div>
          </div>
          <p className="py-3">
            {"I'm a Full-stack"} <b>Web developer</b>
          </p>
          <p className={"pt-2 " + styles.fontChange}>
            <div>I love working on hard problems with a good team.</div>
            <div>{"Let's surprise outselves"}</div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
