import Image from "next/image";
import React, { DOMElement, useEffect, useRef } from "react";
import styles from "../../styles/Home.module.scss";

type T = HTMLDivElement;

interface RefObject<T> {
  readonly current: T | null;
}

export const TechStack = () => {
  const rect = 70;
  const height = rect;
  const width = rect;

  const tsRef = useRef<HTMLDivElement>(null);

  const showAlt = (ref: RefObject<T>) => {
    if (ref.current) ref.current.style.visibility = "visible";
  };

  const hideAlt = (ref: RefObject<T>) => {
    if (ref.current) ref.current.style.visibility = "hidden";
  };

  useEffect(() => {
    if (tsRef.current) tsRef.current.style.visibility = "hidden";
  }, [tsRef]);

  return (
    <>
      <div className="flex flex-col w-full gap-y-2">
        <div className="flex w-full justify-between items-center relative">
          <div className={styles.stackIcon + " relative flex"}>
            <Image
              src="/icons/typescript.png"
              alt="TypeScript"
              width={`${width * 0.8}`}
              height={`${height}`}
              objectFit="contain"
              onMouseEnter={() => showAlt(tsRef)}
              onMouseLeave={() => hideAlt(tsRef)}
            />
            <div ref={tsRef} className="absolute left-16">
              Typescript
            </div>
          </div>
          <div className={styles.stackIcon + " relative"}>
            <Image
              src="/icons/JS.png"
              alt="JavaScript"
              width={`${width * 0.8}`}
              height={`${height}`}
              objectFit="contain"
            />
          </div>
          <div className={styles.stackIcon + " relative"}>
            <Image
              src="/icons/html.png"
              alt="HTML"
              width={`${width}`}
              height={`${height * 0.9}`}
              objectFit="contain"
            />
          </div>
          <div className={styles.stackIcon + " relative"}>
            <Image
              src="/icons/css.png"
              alt="CSS"
              width={`${width}`}
              height={`${height * 0.9}`}
              objectFit="contain"
            />
          </div>
        </div>
        <div className="flex w-full justify-between items-center">
          <div className={styles.stackIcon + " relative"}>
            <Image
              src="/icons/react.png"
              alt="React"
              width={`${width * 0.8}`}
              height={`${height}`}
              objectFit="contain"
            />
          </div>
          <div className={styles.stackIcon + " relative"}>
            <Image
              src="/icons/redux.png"
              alt="Redux"
              width={`${width * 2}`}
              height={`${height}`}
              objectFit="contain"
              style={{ marginLeft: "0.9rem" }}
            />
          </div>
          <div className={styles.stackIcon + " relative"}>
            <Image
              src="/icons/recoil.png"
              alt="Recoil"
              width={`${width * 1.3}`}
              height={`${height * 0.75}`}
              objectFit="contain"
            />
          </div>
          <div className={styles.stackIcon + " relative"}>
            <Image
              src="/icons/NextJs.png"
              alt="NextJS"
              width={`${width * 1.5}`}
              height={`${height}`}
              objectFit="contain"
            />
          </div>
        </div>
        <div className="flex w-full justify-between items-center">
          <div className={styles.stackIcon + " relative"}>
            <Image
              src="/icons/sass.png"
              alt="SASS"
              width={`${width * 0.9}`}
              height={`${height}`}
              objectFit="contain"
            />
          </div>
          <div className={styles.stackIcon + " relative"}>
            <Image
              src="/icons/tailwind.png"
              alt="TailwindCSS"
              width={`${width * 2.7}`}
              height={`${height}`}
              objectFit="contain"
            />
          </div>
          <div className={styles.stackIcon + " relative"}>
            <Image
              src="/icons/bootstrap.png"
              alt="React Bootstrap"
              width={`${width * 0.8}`}
              height={`${height}`}
              objectFit="contain"
            />
          </div>
        </div>
        <div className="flex w-full justify-between items-center">
          <div className={styles.stackIcon + " relative"}>
            <Image
              src="/icons/firebase.png"
              alt="Firebase"
              width={`${width * 0.8}`}
              height={`${height * 0.8}`}
              objectFit="contain"
            />
          </div>
          <div className={styles.stackIcon + " relative"}>
            <Image
              src="/icons/gcp.png"
              alt="Google Cloud Platform"
              width={`${width * 1.8}`}
              height={`${height}`}
              objectFit="contain"
              style={{ marginLeft: "-1rem" }}
            />
          </div>
          <div className={styles.stackIcon + " relative"}>
            <Image
              src="/icons/docker.png"
              alt="Docker"
              width={`${width * 2}`}
              height={`${height * 0.9}`}
              objectFit="contain"
            />
          </div>
          <div className={styles.stackIcon + " relative"}>
            <Image
              src="/icons/git.png"
              alt="Git"
              width={`${width}`}
              height={`${height * 0.8}`}
              objectFit="contain"
            />
          </div>
        </div>
        <div className="flex w-full justify-between items-center">
          <div className={styles.stackIcon + " relative"}>
            <Image
              src="/icons/node.png"
              alt="NodeJS"
              width={`${width}`}
              height={`${height}`}
              objectFit="contain"
            />
          </div>
          <div className={styles.stackIcon + " relative"}>
            <Image
              src="/icons/express.png"
              alt="ExpressJS"
              width={`${width * 1.5}`}
              height={`${height}`}
              objectFit="contain"
            />
          </div>
          <div className={styles.stackIcon + " relative"}>
            <Image
              src="/icons/mongodb.png"
              alt="MongoDB"
              width={`${width * 1.5}`}
              height={`${height}`}
              objectFit="contain"
            />
          </div>
          <div className={styles.stackIcon + " relative"}>
            <Image
              src="/icons/postgreSql.png"
              alt="PostgreSQL"
              width={`${width}`}
              height={`${height * 0.8}`}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};
