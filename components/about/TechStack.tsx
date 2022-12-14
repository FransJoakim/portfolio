import Image from "next/image";
import React, { DOMElement, useEffect, useRef } from "react";
import styles from "../../styles/Home.module.scss";

interface TechIconProps {
  name: string;
  src?: string;
  height?: number;
  width?: number;
  style?: {
    marginLeft?: string;
    marginRight?: string;
  };
}

const TechIcon = ({ name, src, height, width }: TechIconProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const rectSize = 70;

  if (!src) src = name.toLowerCase();
  if (!height) height = 1;
  if (!width) width = 1;

  useEffect(() => {
    if (ref.current) ref.current.style.visibility = "hidden";
  }, [ref]);

  return (
    <div className={styles.stackIcon + " relative"}>
      <Image
        src={`/icons/${src}.png`}
        alt={name}
        height={`${rectSize * height}`}
        width={`${rectSize * width}`}
        objectFit="contain"
        onMouseEnter={() => {
          if (ref.current) ref.current.style.visibility = "visible";
        }}
        onMouseLeave={() => {
          if (ref.current) ref.current.style.visibility = "hidden";
        }}
      />
      <div
        ref={ref}
        onMouseEnter={() => {
          if (ref.current) ref.current.style.visibility = "visible";
        }}
        onMouseLeave={() => {
          if (ref.current) ref.current.style.visibility = "hidden";
        }}
        className={styles.altText}
      >
        {name}
      </div>
    </div>
  );
};

export const TechStack = () => {
  return (
    <>
      <div className="flex flex-col w-full gap-y-2">
        <div className="flex w-full justify-between items-center relative">
          <TechIcon name="Typescript" width={0.8} />
          <TechIcon name="JavaScript" src="JS" width={0.8} />
          <TechIcon name="HTML" height={0.9} />
          <TechIcon name="CSS" height={0.9} />
          <TechIcon name="Webpack" />
        </div>
        <div className="flex w-full justify-between items-center">
          <TechIcon name="React" width={0.8} />
          <TechIcon name="Redux" width={2} />
          <TechIcon name="Recoil" width={1.3} height={0.75} />
          <TechIcon name="Next" width={2} height={0.8} />
          <TechIcon name="Gatsby" height={0.75} />
        </div>
        <div className="flex w-full justify-between items-center">
          <TechIcon name="SASS" width={0.9} />
          <TechIcon name="TailwindCSS" width={0.8} />
          <TechIcon name="Bootstrap" width={0.8} />
          <TechIcon name="GraphQL" width={0.8} />
          <TechIcon name="Jest" height={0.7} />
        </div>
        <div className="flex w-full justify-between items-center">
          <TechIcon name="Firebase" width={0.8} height={0.8} />
          <TechIcon name="GCP" width={1.8} style={{ marginRight: "-1rem" }} />
          <TechIcon name="Docker" width={2} height={0.9} />
          <TechIcon name="Git" height={0.8} />
          <TechIcon name="Jira" width={1.5} />
        </div>
        <div className="flex w-full justify-between items-center">
          <TechIcon name="NodeJS" />
          <TechIcon name="ExpressJS" width={1.5} />
          <TechIcon name="NestJS" width={0.8} height={0.9} />
          <TechIcon name="MongoDB" width={1.5} />
          <TechIcon name="PostgreSQL" height={0.8} />
        </div>
      </div>
    </>
  );
};

// type T = HTMLDivElement;

// interface RefObject<T> {
//   readonly current: T | null;
// }
