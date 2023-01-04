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
          <h2 id="about" className="text-5xl font-thin">
            About
          </h2>
          <p className="py-2">
            Full-stack <b>Web developer</b>
          </p>
          <p>
            <span className={styles.fontChange}>Former</span>
            <b> teacher</b>
            <span className={styles.fontChange}> & Edtech expert</span>
          </p>
          <p className=""></p>
        </div>
        <div className={styles.profileInfo_img}>
          <Link href="https://github.com/FransJoakim">
            <Image
              src="/icons/github.png"
              height="45em"
              width="45em"
              alt="github link"
              className={styles.link}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/fransjoakimloitegaardtitulaer/">
            <Image
              src="/icons/linkedin.png"
              height="45em"
              width="45em"
              alt="github link"
              className={styles.link}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Info;
